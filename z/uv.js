importScripts('/securlyt/who/uv.bundle.js');
importScripts('/securly/who/uv.config.js');
importScripts('/securly/who/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
