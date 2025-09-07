const CACHE_NAME = 'canwest-dev-v1';
const urlsToCache = [
  '/',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
  '/src/App.css',
  'https://i.ibb.co/6cSy9pQV/Can-West-Development-Ltd-logo.png',
  'https://i.ibb.co/Zptk5vRV/Can-West-Development-Ltd-fav-icon.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
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