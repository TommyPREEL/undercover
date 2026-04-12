FROM node:22-alpine

WORKDIR /app

COPY minigames-server.js .
COPY index.html .
COPY i18n.js .
COPY manifest.json .
COPY sw.js .
COPY favicon.svg .
COPY icon-192.svg .
COPY icon-512.svg .
COPY games/ games/

EXPOSE 80

CMD ["node", "minigames-server.js"]

