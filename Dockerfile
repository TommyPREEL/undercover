FROM node:22-alpine
WORKDIR /app
COPY undercover-server.js .
COPY anime-undercover.html .
COPY manifest.json .
COPY sw.js .
COPY icon-192.svg .
COPY icon-512.svg .
EXPOSE 3000
CMD ["node", "undercover-server.js"]
