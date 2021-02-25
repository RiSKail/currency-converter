const cacheData = 'currencyCache'
this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheData).then(cache => {
      cache.addAll([
        '/currency-converter',
        '/favicon.ico',
        '/logo192.png',
        '/manifest.json',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/1.chunk.js',
        '/static/js/2.chunk.js',
        '/static/js/3.chunk.js',
        '/static/js/4.chunk.js',
        '/static/media/bg.5917ef30.jpg',
        '/static/media/version-icon.33d62ed9.svg',
        '/static/media/author-icon.46001f4c.svg',
        '/static/media/swap-icon.12e46e00.svg',
        '/static/media/download-icon.2b4d5ffa.svg',
        '/static/js/bundle.js',
        '/main.79493becd84b20b6c7b8.hot-update.js',
        '/index.html',
        '/',
      ])
    }),
  )
})

addEventListener('fetch', event => {
  if (!navigator.onLine) {
    event.respondWith(async function () {
      const cachedResponse = await caches.match(event.request)
      if (cachedResponse) return cachedResponse
      return fetch(event.request)
    }())
  }
})
