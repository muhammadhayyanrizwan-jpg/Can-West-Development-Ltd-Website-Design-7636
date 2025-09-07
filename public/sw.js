const CACHE_NAME = 'canwest-dev-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://i.ibb.co/6cSy9pQV/Can-West-Development-Ltd-logo.png',
  'https://i.ibb.co/Zptk5vRV/Can-West-Development-Ltd-fav-icon.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});