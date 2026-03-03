// Service Worker para modo offline — Refugio Sierra del Águila
const CACHE_NAME = "refugio-cache-v1";
const OFFLINE_URL = "/";

// Assets estáticos a cachear en instalación
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/favicon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Solo cachear peticiones GET del mismo origen
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Estrategia: Network-first, fallback a cache
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached || caches.match(OFFLINE_URL));
      return cached || fetchPromise;
    })
  );
});
