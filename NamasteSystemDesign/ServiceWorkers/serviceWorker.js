// Write Service Worker's logics

// Service Worker's lifecycle:
// - Install Service Worker
// - Activate Service Worker

// Everything in Service Workers are event driven and works with promises

// const CACHE_NAME = "serviceWorker/v1"; // Good practice to make a constant to avoid issues
// const CACHE_NAME = "serviceWorker/v2";
const CACHE_NAME = "serviceWorker/v3";
const CACHE_FILES = [
  "./index.html",
  "./style.css",
  "./script.js",
  "./namaste-streak.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    }),
  );
});

self.addEventListener("activate", (e) => {
  // While activating, cleanup useless cache as we can't keep dumping everything on user's browser as it will create performance issues for users if all cache is used

  caches.keys().then((keyList) => {
    // Here we will get multiple key list and all are promises so use Promise.all and return it
    return Promise.all(
      keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }),
    );
  });
});

self.addEventListener("fetch", (e) => {
  // Logic to return from cache - Offline Experience

  // There are 2 ways to use this cache, whenever something is requested:
  // 1. Check the cache, and return from cache, if not available, fetch from network and return (very bad way, as once cached, it will always return from cache and will never make any network call - our data will become stale and will never be updated - static site)
  // 2. Fetch from network, update the cache and return, use cache as fallback/backup not as a primary source (good way)

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Update cache here
        const clonedData = res.clone(); // This is necessary as it might create issues if res is used directly
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, clonedData); // First clone the data after intercepting request to update cache
        });

        console.log("Returning fresh data from network.");
        return res;
      })
      .catch(async (error) => {
        // For any reason if request fails (may be network is not available or request fails itself or backend is down)

        console.error("Error fetching request, returning cached data:", error);
        return caches.match(e.request).then((file) => file);
      }),
  );
});

// NOTE: We might not want to cache everything so to allow caching certain things, we need to write logic for that
