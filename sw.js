
var cacheName = 'hello-pwa';
var filesToCache = [
  '/patriotaalba.github.io/pwa_aos/',
  '/patriotaalba.github.io/pwa_aos/index.html',
  '/patriotaalba.github.io/pwa_aos/css/style.css',
  '/patriotaalba.github.io/pwa_aos/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
