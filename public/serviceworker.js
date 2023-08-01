const CACHE_NAME = "VERSION-1";
const urlsToCache = [
  "./index.html",
  "./offline.html",
  "https://i.pinimg.com/originals/0d/6f/f2/0d6ff2138ad29837f3b3191c1edb4ff9.png",
];
const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match("./offline.html");
        });
    })
  );
});

self.addEventListener("activate", (event) => {
  const newCache = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (!newCache.includes(cache)) {
            return caches.delete(cache).catch((error) => {
              console.error("Error deleting cache:", error);
            });
          }
        })
      )
    )
  );
});
