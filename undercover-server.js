const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// ─── WebSocket helpers ────────────────────────────────────────────────────────
function wsHandshake(req, socket) {
  const key = req.headers['sec-websocket-key'];
  const accept = crypto
    .createHash('sha1')
    .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');
  socket.write(
    'HTTP/1.1 101 Switching Protocols\r\n' +
    'Upgrade: websocket\r\n' +
    'Connection: Upgrade\r\n' +
    `Sec-WebSocket-Accept: ${accept}\r\n\r\n`
  );
}

function wsSend(socket, data) {
  if (socket.destroyed) return;
  const msg = Buffer.from(JSON.stringify(data));
  const len = msg.length;
  let header;
  if (len < 126) {
    header = Buffer.alloc(2);
    header[0] = 0x81;
    header[1] = len;
  } else if (len < 65536) {
    header = Buffer.alloc(4);
    header[0] = 0x81; header[1] = 126;
    header.writeUInt16BE(len, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x81; header[1] = 127;
    header.writeBigUInt64BE(BigInt(len), 2);
  }
  try { socket.write(Buffer.concat([header, msg])); } catch(e) {}
}

function wsParseFrame(buf) {
  if (buf.length < 2) return null;
  const masked = !!(buf[1] & 0x80);
  let len = buf[1] & 0x7f;
  let offset = 2;
  if (len === 126) { len = buf.readUInt16BE(2); offset = 4; }
  else if (len === 127) { len = Number(buf.readBigUInt64BE(2)); offset = 10; }
  if (buf.length < offset + (masked ? 4 : 0) + len) return null;
  let payload;
  if (masked) {
    const mask = buf.slice(offset, offset + 4);
    payload = Buffer.alloc(len);
    for (let i = 0; i < len; i++) payload[i] = buf[offset + 4 + i] ^ mask[i % 4];
  } else {
    payload = buf.slice(offset, offset + len);
  }
  return payload.toString();
}

// ─── Game state ───────────────────────────────────────────────────────────────
const rooms = {}; // roomCode -> room
const disconnectTimers = {}; // playerId -> timeout

function generateCode() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

function broadcast(room, data, exceptSocket = null) {
  for (const player of Object.values(room.players)) {
    if (player.socket && !player.socket.destroyed && player.socket !== exceptSocket)
      wsSend(player.socket, data);
  }
}

function roomState(room) {
  return {
    type: 'room_state',
    code: room.code,
    host: room.players[room.host]?.name || '',
    players: Object.values(room.players).map(p => p.name),
    phase: room.phase,
    mode: room.mode,
  };
}

function handleMessage(socket, raw, playerId) {
  let msg;
  try { msg = JSON.parse(raw); } catch(e) { return; }

  // Find this player's room
  let room = null, playerName = null;
  for (const r of Object.values(rooms)) {
    if (r.players[playerId]) { room = r; playerName = r.players[playerId].name; break; }
  }

  switch (msg.type) {

    case 'create_room': {
      const code = generateCode();
      const name = (msg.name || 'Player').trim().slice(0, 20);
      rooms[code] = {
        code,
        host: playerId,
        players: { [playerId]: { name, socket, ready: false } },
        phase: 'lobby',
        mode: msg.mode || 'characters',
        gameData: null,
        eliminated: [],
        speakOrder: [],
        speakIndex: 0,
        round: 1,
      };
      wsSend(socket, { type: 'joined', code, name, isHost: true });
      wsSend(socket, roomState(rooms[code]));
      console.log(`Room ${code} created by ${name}`);
      break;
    }

    case 'join_room': {
      const code = (msg.code || '').toUpperCase().trim();
      const name = (msg.name || 'Player').trim().slice(0, 20);
      if (!rooms[code]) { wsSend(socket, { type: 'error', msg: 'Room not found.' }); return; }
      const r = rooms[code];
      if (r.phase !== 'lobby') { wsSend(socket, { type: 'error', msg: 'Game already started.' }); return; }

      const takenNames = Object.values(r.players).map(p => p.name.toLowerCase());
      if (takenNames.includes(name.toLowerCase())) { wsSend(socket, { type: 'error', msg: 'Name already taken in this room.' }); return; }
      r.players[playerId] = { name, socket, ready: false };
      wsSend(socket, { type: 'joined', code, name, isHost: false });
      broadcast(r, roomState(r));
      console.log(`${name} joined room ${code}`);
      break;
    }

    case 'set_mode': {
      if (!room || room.host !== playerId) return;
      room.mode = msg.mode;
      broadcast(room, roomState(room));
      break;
    }

    case 'start_game': {
      if (!room || room.host !== playerId) return;
      const playerList = Object.values(room.players);
      if (playerList.length < 3) { wsSend(socket, { type: 'error', msg: 'Need at least 3 players.' }); return; }

      const pairs = msg.pairs; // sent from host client
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const civilian = Math.random() < 0.5 ? pair[0] : pair[1];
      const undercover = civilian === pair[0] ? pair[1] : pair[0];

      const ids = Object.keys(room.players);
      const spyCount = Math.max(1, Math.floor(ids.length / 3));
      const shuffledIds = [...ids].sort(() => Math.random() - 0.5);
      room.spyIds = shuffledIds.slice(0, spyCount);

      room.phase = 'reveal';
      room.eliminated = [];
      room.round = 1;
      room.speakIndex = 0;
      room.civilianWord = civilian;
      room.undercoverWord = undercover;

      // Shuffle speak order
      room.speakOrder = [...ids].sort(() => Math.random() - 0.5).map(id => room.players[id].name);

      // Send each player their own word privately
      for (const [id, player] of Object.entries(room.players)) {
        wsSend(player.socket, {
          type: 'game_start',
          word: room.spyIds.includes(id) ? undercover : civilian,
          speakOrder: room.speakOrder,
          round: 1,
          players: Object.values(room.players).map(p => p.name),
          phase: 'reveal',
        });
      }
      console.log(`Room ${room.code} game started`);
      break;
    }

    case 'ready': {
      if (!room) return;
      room.players[playerId].ready = true;
      const all = Object.values(room.players).every(p => p.ready);
      broadcast(room, { type: 'player_ready', name: playerName });
      if (all) {
        for (const p of Object.values(room.players)) p.ready = false;
        room.phase = 'play';
        room.speakIndex = 0;
        broadcast(room, {
          type: 'phase_play',
          speakOrder: room.speakOrder,
          speakIndex: 0,
          round: room.round,
          eliminated: room.eliminated,
        });
      }
      break;
    }

    case 'next_speaker': {
      if (!room || room.host !== playerId) return;
      room.speakIndex++;
      broadcast(room, { type: 'speaker_update', speakIndex: room.speakIndex });
      break;
    }

    case 'vote_eliminate': {
      if (!room || room.host !== playerId) return;
      const targetName = msg.target;
      room.eliminated.push(targetName);

      // Find spy names
      const spyNames = room.spyIds.map(id => room.players[id]?.name).filter(Boolean);
      const activePlayers = Object.values(room.players)
        .map(p => p.name)
        .filter(n => !room.eliminated.includes(n));
      const activeSpyCount = spyNames.filter(n => !room.eliminated.includes(n)).length;

      const allSpiesCaught = activeSpyCount === 0;
      const spyWins = !allSpiesCaught && activeSpyCount * 2 >= activePlayers.length;

      if (allSpiesCaught || spyWins) {
        broadcast(room, {
          type: 'game_over',
          civWin: allSpiesCaught,
          spyNames,
          civilianWord: room.civilianWord,
          undercoverWord: room.undercoverWord,
          roles: Object.fromEntries(
            Object.entries(room.players).map(([id, p]) => [p.name, room.spyIds.includes(id) ? 'spy' : 'civilian'])
          ),
        });
        room.phase = 'result';
      } else {
        room.round++;
        room.speakIndex = 0;
        // Reshuffle speak order excluding eliminated
        const activeIds = Object.entries(room.players)
          .filter(([,p]) => !room.eliminated.includes(p.name))
          .map(([id]) => id)
          .sort(() => Math.random() - 0.5);
        room.speakOrder = activeIds.map(id => room.players[id].name);
        broadcast(room, {
          type: 'phase_play',
          speakOrder: room.speakOrder,
          speakIndex: 0,
          round: room.round,
          eliminated: room.eliminated,
        });
      }
      break;
    }

    case 'new_game': {
      if (!room || room.host !== playerId) return;
      room.phase = 'lobby';
      room.eliminated = [];
      room.speakOrder = [];
      room.speakIndex = 0;
      room.round = 1;
      room.gameData = null;
      for (const p of Object.values(room.players)) p.ready = false;
      broadcast(room, roomState(room));
      broadcast(room, { type: 'back_to_lobby' });
      break;
    }

    case 'rejoin_room': {
      const rjCode = (msg.code || '').toUpperCase().trim();
      const rjName = (msg.name || '').trim();
      const rj = rooms[rjCode];
      if (!rj) { wsSend(socket, { type: 'error', msg: 'Room not found or expired.' }); return; }
      let existingId = null;
      for (const [id, p] of Object.entries(rj.players)) {
        if (p.name.toLowerCase() === rjName.toLowerCase()) { existingId = id; break; }
      }
      if (!existingId) { wsSend(socket, { type: 'error', msg: 'Player not found in room.' }); return; }
      if (disconnectTimers[existingId]) { clearTimeout(disconnectTimers[existingId]); delete disconnectTimers[existingId]; }
      // Re-key player under the new connection's playerId
      rj.players[playerId] = { ...rj.players[existingId], socket, online: true };
      delete rj.players[existingId];
      if (rj.host === existingId) rj.host = playerId;
      if (rj.spyIds) rj.spyIds = rj.spyIds.map(id => id === existingId ? playerId : id);
      const rjIsHost = rj.host === playerId;
      wsSend(socket, { type: 'joined', code: rjCode, name: rjName, isHost: rjIsHost });
      if (rj.phase === 'lobby') {
        broadcast(rj, roomState(rj));
      } else {
        const isSpy = rj.spyIds && rj.spyIds.includes(playerId);
        wsSend(socket, {
          type: 'rejoin_ack',
          phase: rj.phase,
          code: rjCode,
          isHost: rjIsHost,
          name: rjName,
          word: isSpy ? rj.undercoverWord : rj.civilianWord,
          players: Object.values(rj.players).map(p => p.name),
          speakOrder: rj.speakOrder,
          speakIndex: rj.speakIndex,
          round: rj.round,
          eliminated: rj.eliminated,
          mode: rj.mode,
        });
        broadcast(rj, { type: 'player_online', name: rjName }, socket);
      }
      console.log(`${rjName} rejoined room ${rjCode}`);
      break;
    }
  }
}

// ─── HTTP + WS server ─────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const reqPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, reqPath === '/' ? 'anime-undercover.html' : reqPath);
  if (!filePath.startsWith(__dirname)) { res.writeHead(403); res.end(); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' }[ext] || 'text/plain';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

const clients = {};
let clientCounter = 0;

server.on('upgrade', (req, socket, head) => {
  if (req.headers.upgrade?.toLowerCase() !== 'websocket') { socket.destroy(); return; }
  wsHandshake(req, socket);

  const playerId = 'p' + (++clientCounter);
  clients[playerId] = socket;
  console.log(`Client connected: ${playerId}`);

  let buf = Buffer.alloc(0);
  socket.on('data', chunk => {
    buf = Buffer.concat([buf, chunk]);
    const text = wsParseFrame(buf);
    if (text !== null) {
      buf = Buffer.alloc(0);
      handleMessage(socket, text, playerId);
    }
  });

  socket.on('close', () => {
    delete clients[playerId];
    for (const [code, room] of Object.entries(rooms)) {
      if (room.players[playerId]) {
        const name = room.players[playerId].name;
        room.players[playerId].socket = null;
        room.players[playerId].online = false;
        console.log(`${name} disconnected from room ${code} (grace period started)`);
        broadcast(room, { type: 'player_offline', name });
        disconnectTimers[playerId] = setTimeout(() => {
          if (!rooms[code] || !room.players[playerId]) return;
          delete room.players[playerId];
          delete disconnectTimers[playerId];
          console.log(`${name} removed from room ${code} (timeout)`);
          if (Object.keys(room.players).length === 0) {
            delete rooms[code];
            console.log(`Room ${code} deleted`);
          } else {
            if (room.host === playerId) {
              room.host = Object.keys(room.players)[0];
              broadcast(room, { type: 'new_host', name: room.players[room.host].name });
            }
            broadcast(room, roomState(room));
            broadcast(room, { type: 'player_left', name });
          }
        }, 90 * 1000);
        break;
      }
    }
  });

  socket.on('error', () => {});
});

server.listen(PORT, () => {
  console.log(`\n🎮 Undercover server running on http://localhost:${PORT}`);
  console.log(`   Open index.html in your browser or visit http://localhost:${PORT}\n`);
});
