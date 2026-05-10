const CACHE_NAME = 'guest-ready-pro-v7';

// HTML pages — network-first: always fetch fresh from server, cache only for offline fallback
const HTML_PAGES = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/messages.html',
  '/calendar.html',
  '/properties.html',
  '/cleaners.html',
  '/ai.html',
];

// Static assets — cache-first: CSS, JS, icons change only on deploy
const STATIC_ASSETS = [
  '/app-shell.css',
  '/sidebar.js',
  '/mobile-nav.js',
  '/env-banner.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

const ALL_SHELL = [...HTML_PAGES, ...STATIC_ASSETS];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ALL_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isHtmlPage = HTML_PAGES.includes(url.pathname);
  const isStaticAsset = STATIC_ASSETS.includes(url.pathname) || url.pathname.startsWith('/icons/');

  // HTML pages: network-first — always get fresh HTML from server.
  // Falls back to cache only if the network is unavailable (offline).
  if (isHtmlPage) {
    event.respondWith(
      fetch(req)
        .then((response) => {
          // Update the cache with the fresh response for offline fallback
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return response;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/login.html')))
    );
    return;
  }

  // Static assets: cache-first — fast loads, only re-fetch if not cached.
  if (isStaticAsset) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return response;
        });
      })
    );
    return;
  }

  // Everything else (API calls) — always network, never cache.
});

self.addEventListener('push', (event) => {
  let data = { title: 'Guest Ready Pro', body: 'You have a new notification.' };
  try { if (event.data) data = event.data.json(); } catch (e) {}
  event.waitUntil(
    self.registration.showNotification(data.title || 'Guest Ready Pro', {
      body: data.body || '',
      icon: data.icon || '/icons/icon-192.png',
      badge: data.badge || '/icons/icon-192.png',
      tag: 'gr-notification',
      renotify: true,
      data: { url: '/dashboard.html' }
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || '/dashboard.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) return client.focus();
      }
      return clients.openWindow(target);
    })
  );
});
