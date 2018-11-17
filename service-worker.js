const cacheName = 'gg';
const cacheAssets = [
  'index.html',
  '/src/style.css',
  '/src/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache =>{
        cache.addAll(cacheAssets);
      })
      .then(() =>self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>{
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName){
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
  console.log('ofline mode');
});
