const CACHE = 'minigames-v1';
const ASSETS = [
  '/',
  '/favicon.svg',
  '/anime-undercover.html',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never intercept WebSocket upgrades
  if (e.request.headers.get('upgrade') === 'websocket') return;
  // Network-first for HTML (always fresh), cache-first for assets
  const isNav = e.request.mode === 'navigate';
  e.respondWith(
    isNav
      ? fetch(e.request).catch(() => caches.match('/').then(r => r || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } })))
      : caches.match(e.request).then(r => r || fetch(e.request).catch(() => new Response('', { status: 503 })))
  );
});
