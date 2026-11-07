/* Chhota service worker: sirf app install ke liye zaroori hai. index.html ke saath hi upload karein. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request)));
