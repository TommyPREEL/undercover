# Stage 1: Prepare app files
FROM node:22-alpine AS builder

WORKDIR /app

# No npm install needed — zero dependencies
COPY undercover-server.js .
COPY anime-undercover.html .
COPY manifest.json .
COPY sw.js .
COPY icon-192.svg .
COPY icon-512.svg .

# Stage 2: Lean runtime image
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "undercover-server.js"]
