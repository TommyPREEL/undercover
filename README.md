# Minigames 🎮

A collection of multiplayer party minigames — play locally (pass the phone) or online with friends.

## Games

### 🕵️ Undercover — Local / Online
Each player gets a secret word — most players share the same word, but one or two are **undercover** and get a related-but-different word. Take turns giving one-word clues, then vote to eliminate someone. Undercovers win if they survive to the end or correctly guess the majority word.

### 💰 Millionaire — Solo / Online
Classic 15-question quiz in geek culture — anime, games, TV, movies. Pick the right answer from 4 choices and climb to **$1,000,000**. Use lifelines wisely: 50/50, phone a friend, ask the audience.

### 🔥 Hot Takes — Local / Online
Spicy geek opinions flash on screen — **Agree or Disagree**. Everyone votes secretly, then the reveal shows how split the group is. More points for being in the minority on spicy topics.

### 🎭 Insider — Online
Everyone tries to guess a secret word by asking the host yes/no questions — but one player (the **Insider**) already knows the word and subtly steers the group. After the word is found, players vote to identify the Insider. Get caught and you lose.

### 🔍 Profiler — Online
Two teams. Each team is secretly assigned an anime character trait (e.g. "can transform", "antagonist"). Teams take turns naming anime characters — the opposing team votes YES or NO whether the character matches their hidden trait. First team to **correctly guess the enemy's trait** wins.

### 🎨 Fake Artist — Online
Everyone knows the secret word and draws it one stroke at a time on a shared canvas — except the **Fake Artist**, who has no idea. After 2 rounds, players vote for who they think is fake. If caught, the Fake Artist still wins by guessing the word correctly.

### 📡 Wavelength — Online
Two teams alternate. Each round, a spectrum appears (e.g. Cold ↔ Hot) and the Psychic secretly sees a target position on it. The Psychic gives a one-word clue — teammates drag the dial to where they think the target is. Closer = more points. **First to 10 points wins.**

## Quick Start

### Online Multiplayer
Requires Node.js (v14+). No npm packages needed.

```bash
node minigames-server.js
```

Server runs at **http://localhost:3000**

Each player opens the same URL on their own device. One player creates a room and shares the **invite link** or **room code** — no IP addresses needed.

### How it works
1. Host opens the app → enters name → **Create Lobby**
2. Share the invite link or room code
3. Others open the link, enter their name, and join instantly
4. Host picks a game and starts
5. Results shown to everyone simultaneously

## Production (self-hosted)
- Run with PM2 for process management
- nginx as reverse proxy (proxy_pass + WebSocket upgrade headers)
- certbot for HTTPS (required for PWA install prompt)

## Files
- `index.html` — main lobby & game picker
- `games/` — individual game clients
- `minigames-server.js` — zero-dependency WebSocket + HTTP server
- `manifest.json` — PWA manifest
- `sw.js` — service worker (offline cache)
- `Dockerfile` / `docker-compose.yml` — container deployment
