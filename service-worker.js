/* =====================================================
   KPRICHITOS · Service Worker
   -----------------------------------------------------
   Estrategia:
     · HTML, CSS, JS, JSON → NETWORK-FIRST
     · Imágenes, fuentes, CDN → CACHE-FIRST
     · Limpia cachés viejas automáticamente
   ===================================================== */

const CACHE_NAME = 'kprichitos-cache';
const CACHE_PREFIX = 'kprichitos-';

/* Assets mínimos para pre-cachear al instalar */
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './styles/styles.css',
  './styles/halloween.css',
  './js/products.js',
  './js/juguetes.js',
  './js/regalos.js',
  './js/cumpleanos.js',
  './js/escuela.js',
  './js/offers.js',
  './js/app.js',
  './icons/icon.svg',

  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

/* ---------- Instalación ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE).catch(() => null))
      .then(() => self.skipWaiting())
  );
});

/* ---------- Activación · limpia cachés viejas ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ---------- Fetch ---------- */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  const esAppFile =
    request.mode === 'navigate' ||
    /\.(html|css|js|json)$/i.test(url.pathname) ||
    url.pathname === '/' ||
    url.pathname.endsWith('/');

  const esAssetEstatico =
    /\.(png|jpe?g|gif|webp|svg|ico|woff2?|ttf|eot|otf)$/i.test(url.pathname) ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('cdnjs.cloudflare.com');

  /* ---------- 1) App files → NETWORK-FIRST ---------- */
  if (esAppFile) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            if (cached) return cached;
            if (request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
        })
    );
    return;
  }

  /* ---------- 2) Assets estáticos → CACHE-FIRST ---------- */
  if (esAssetEstatico) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(request, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  /* ---------- 3) Resto ---------- */
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
