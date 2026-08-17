const CACHE_NAME = "shreja-pwa-v1";

const urlsToCache = [
  "/Shreja/",
  "/Shreja/index.html",
  "/Shreja/style.css",
  "/Shreja/Change.html",
  "/Shreja/Converter.html",
  "/Shreja/Distance.html",
  "/Shreja/Grading.html",
  "/Shreja/hobbies.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
