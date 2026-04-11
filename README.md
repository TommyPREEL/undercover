# Minigames 🎮

A collection of multiplayer party minigames.

## Quick Start

### Local (pass the phone)
Open `anime-undercover.html` in any browser — no server needed.

### Online Multiplayer
Requires Node.js (v14+). No npm packages needed.

```bash
node minigames-server.js
```

Server runs at **http://localhost:3000**

Each player opens the same URL on their own device. One player creates a room and shares the **invite link** or **4-letter code** — no IP addresses needed.

## How multiplayer works
1. Host opens the app → **ONLINE** → enters name → **Create room**
2. Copy the invite link from the lobby and share it
3. Others open the link, enter their name, and are instantly in the room
4. Host picks the mode (Characters or Anime Titles) and starts
5. Each player sees only their own word privately (auto-hides after 5s)
6. Everyone taps Ready → game begins
7. Host controls the speaker order and voting
8. Results shown to everyone simultaneously

## Spy scaling
| Players | Spies |
|---------|-------|
| 3–5 | 1 |
| 6–8 | 2 |
| 9–11 | 3 |

## Production (self-hosted)
See [deployment guide in README]:
- Run with PM2 for process management
- nginx as reverse proxy (proxy_pass + WebSocket upgrade headers)
- certbot for HTTPS (required for PWA install prompt)

## Files
- `anime-undercover.html` — game client (works standalone for local play)
- `minigames-server.js` — zero-dependency WebSocket + HTTP server
- `manifest.json` — PWA manifest
- `sw.js` — service worker (offline cache)
- `Dockerfile` / `docker-compose.yml` — container deployment
