// Fieldcraft service worker.
// The page, its scripts and its stylesheet are network-first, so a new deploy shows up
// whole on the next load; the cached copy is only the offline fallback. Fonts and icons
// are served from cache and refreshed in the background.
const CACHE = 'fieldcraft-v30';
const SHELL = [
  './', 'manifest.json', 'app.css', 'app/helpers.js', 'app/registry.js', 'maps/europe-west.js', 'maps/us.js', 'maps/world.js', 'subjects/civics/subject.js', 'subjects/civics/items-government.js', 'subjects/civics/l1.lesson.js',
  'subjects/geography/subject.js', 'subjects/geography/gen-europe-west.js', 'subjects/geography/items-worked.js', 'subjects/geography/l16.lesson.js',
  'subjects/ideology/subject.js', 'subjects/ideology/items-build.js', 'subjects/ideology/items-practice.js', 'subjects/ideology/items-check.js', 'subjects/ideology/items-reserve.js', 'subjects/ideology/l2.lesson.js', 'subjects/math/subject.js', 'subjects/math/items-ballpark.js', 'subjects/math/gen-totals.js', 'subjects/math/l1.lesson.js', 'subjects/psychology/subject.js', 'subjects/psychology/items-build.js', 'subjects/psychology/items-practice.js', 'subjects/psychology/items-check.js', 'subjects/psychology/items-reserve.js', 'subjects/psychology/l1.lesson.js', 'subjects/scams/subject.js', 'subjects/scams/items-build.js', 'subjects/scams/items-practice.js', 'subjects/scams/items-check.js', 'subjects/scams/items-reserve.js', 'subjects/scams/items-baseline.js', 'subjects/scams/l0.lesson.js', 'subjects/scams/l3.lesson.js',
  'subjects/singing/subject.js', 'subjects/singing/l2.lesson.js', 'subjects/stats/subject.js', 'subjects/stats/items-build.js', 'subjects/stats/items-claims.js', 'subjects/stats/items-check.js', 'subjects/stats/items-reserve.js', 'subjects/stats/l1.lesson.js', 'subjects/wealth/subject.js', 'subjects/wealth/items-cost.js', 'subjects/wealth/gen-cost.js', 'subjects/wealth/l2.lesson.js', 'app/lessons/view.js',
  'app/lessons/gen.js', 'app/lessons/rules.js', 'app/lessons/number.js', 'app/lessons/form.js', 'app/lessons/own.js', 'app/lessons/sing-task.js', 'app/lessons/sing-score.js', 'app/lessons/tap.js', 'app/lessons/place.js', 'app/lessons/place-gen.js', 'app/lessons/exchange.js', 'app/lessons/order.js', 'app/lessons/timer.js', 'app/lessons/busy.js', 'app/lessons/plan.js', 'app/lessons/chart.js', 'app/lessons/panel.js', 'app/lessons/recall.js', 'app/lessons/records.js',
  'app/lessons/schedule.js', 'app/lessons/sets.js', 'app/lessons/place-draw.js', 'app/lessons/doc-view.js', 'app/lessons/doc-run.js', 'app/lessons/article-view.js', 'app/lessons/chart-view.js', 'app/lessons/panel-view.js', 'app/lessons/message-view.js', 'app/lessons/exchange-view.js', 'app/lessons/place-view.js', 'app/lessons/order-view.js', 'app/lessons/plan-view.js', 'app/lessons/text-view.js', 'app/lessons/recall-view.js', 'app/lessons/speech-view.js', 'app/lessons/answers-view.js', 'app/lessons/number-view.js', 'app/lessons/form-view.js', 'app/lessons/own-view.js', 'app/lessons/item-view.js', 'app/lessons/sing-strip.js', 'app/lessons/queue.js', 'app/lessons/number-run.js', 'app/lessons/form-run.js', 'app/lessons/tap-run.js', 'app/lessons/place-run.js', 'app/lessons/map-run.js', 'app/lessons/text-run.js', 'app/lessons/recall-run.js', 'app/lessons/speech-run.js', 'app/lessons/exchange-run.js', 'app/lessons/order-run.js', 'app/lessons/timer-run.js', 'app/lessons/busy-run.js', 'app/lessons/plan-run.js', 'app/lessons/answers-run.js',
  'app/lessons/sing-run.js', 'app/lessons/player.js', 'app/lessons/own-run.js', 'app/lessons/review.js', 'app/state.js',
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
