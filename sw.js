const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/Snapchat-1800569552-01-removebg-preview.png',
  '/sushant_sonbarse_resume.pdf',
  '/projects/cicd-implementation.html',
  '/projects/serverless-architecture.html',
  '/projects/crm-microservices.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});