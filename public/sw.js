// Fieldcraft service worker.
// The page, its scripts and its stylesheet are network-first, so a new deploy shows up
// whole on the next load; the cached copy is only the offline fallback. Fonts and icons
// are served from cache and refreshed in the background.
const CACHE = 'fieldcraft-v15';
const SHELL = [
  './', 'manifest.json', 'app.css', 'app/helpers.js', 'app/registry.js', 'subjects/civics/subject.js',
  'subjects/ideology/subject.js', 'subjects/math/subject.js', 'subjects/psychology/subject.js', 'subjects/scams/subject.js',
  'subjects/singing/subject.js', 'subjects/singing/l2.lesson.js', 'subjects/stats/subject.js', 'subjects/wealth/subject.js', 'app/lessons/view.js',
  'app/lessons/gen.js', 'app/lessons/rules.js', 'app/lessons/sing-task.js', 'app/lessons/sing-score.js', 'app/lessons/records.js',
  'app/lessons/schedule.js', 'app/lessons/sets.js', 'app/lessons/item-view.js', 'app/lessons/sing-strip.js', 'app/lessons/queue.js',
  'app/lessons/sing-run.js', 'app/lessons/player.js', 'app/lessons/review.js', 'app/state.js',
  'app/shell.js', 'app/library.js', 'app/subject.js', 'app/progress.js', 'app/search.js', 'app/lessons/audio-notes.js',
  'app/lessons/audio-pitch.js', 'app/lessons/audio-synth.js', 'app/lessons/audio-meter.js', 'app/init.js', 'fonts/fonts.css',
  'fonts/bricolage-grotesque-latin.woff2', 'fonts/literata-latin.woff2', 'fonts/jetbrains-mono-latin.woff2', 'icons/favicon.svg',
  'icons/favicon-32.png', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// cacheKey: the page is always stored under './' whatever URL it was opened at.
async function networkFirst(request, cacheKey) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request, { cache: 'no-cache' });
    if (response.ok) await cache.put(cacheKey, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(cacheKey);
    if (cached) return cached;
    throw err;
  }
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(event.request);
  const refresh = fetch(event.request)
    .then(response => { if (response.ok) return cache.put(event.request, response.clone()).then(() => response); return response; });
  if (cached) {
    event.waitUntil(refresh.catch(() => {}));
    return cached;
  }
  return refresh;
}

const isAppCode = url => /\.(js|css)$/.test(url.pathname) && !url.pathname.includes('/fonts/');

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './'));
    return;
  }
  if (isAppCode(url)) {
    event.respondWith(networkFirst(request, request));
    return;
  }
  event.respondWith(staleWhileRevalidate(event));
});
