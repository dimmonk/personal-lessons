// Fieldcraft service worker.
// The page, its scripts and its stylesheet are network-first, so a new deploy shows up
// whole on the next load; the cached copy is only the offline fallback. Fonts and icons
// are served from cache and refreshed in the background.
// The release number below is stamped by npm run deploy (deploy.config.mjs); the cache name derives from it.
const RELEASE = 52;
const CACHE = `fieldcraft-${RELEASE}`;
const SHELL = [
  './', 'manifest.json', 'app.css', 'app/theme.js', 'app/helpers.js', 'app/store.js', 'app/account.js', 'app/registry.js', 'maps/europe-west.js', 'maps/us.js', 'maps/world.js', 'maps/africa-central.js', 'maps/africa-east.js', 'maps/africa-south.js', 'maps/africa-west.js', 'maps/americas-north.js', 'maps/arabia-north-africa.js', 'maps/asia-central.js', 'maps/asia-east.js', 'maps/asia-islands.js', 'maps/asia-south.js', 'maps/balkans.js', 'maps/caribbean.js', 'maps/europe-east.js', 'maps/europe-north.js', 'maps/mexico-central.js', 'maps/middle-east.js', 'maps/south-america.js', 'maps/world-features.js', 'subjects/civics/subject.js', 'subjects/civics/items-government.js', 'subjects/civics/l1.lesson.js', 'subjects/civics/items-numbers.js', 'subjects/civics/l2.lesson.js', 'subjects/civics/items-federal.js', 'subjects/civics/l3.lesson.js', 'subjects/civics/items-shape.js', 'subjects/civics/items-l4.js', 'subjects/civics/l4.lesson.js', 'subjects/civics/items-l5.js', 'subjects/civics/l5.lesson.js', 'subjects/civics/items-l6.js', 'subjects/civics/l6.lesson.js', 'subjects/civics/items-l7.js', 'subjects/civics/l7.lesson.js', 'subjects/civics/items-l8.js', 'subjects/civics/l8.lesson.js', 'subjects/civics/items-principles.js', 'subjects/civics/l9.lesson.js', 'subjects/civics/items-rights.js', 'subjects/civics/l10.lesson.js', 'subjects/civics/items-colonies.js', 'subjects/civics/l11.lesson.js', 'subjects/civics/items-1800s.js', 'subjects/civics/l12.lesson.js', 'subjects/civics/items-past.js', 'subjects/civics/l13.lesson.js', 'subjects/civics/items-1900s.js', 'subjects/civics/l14.lesson.js', 'subjects/civics/items-symbols.js', 'subjects/civics/l15.lesson.js', 'subjects/civics/l16.lesson.js', 'subjects/debating/subject.js', 'subjects/debating/items-shape.js', 'subjects/debating/items-l1.js', 'subjects/debating/l1.lesson.js', 'subjects/debating/items-l2.js', 'subjects/debating/l2.lesson.js', 'subjects/debating/items-l3.js', 'subjects/debating/l3.lesson.js', 'subjects/debating/items-l4.js', 'subjects/debating/l4.lesson.js', 'subjects/debating/items-l5.js', 'subjects/debating/l5.lesson.js', 'subjects/debating/items-l6.js', 'subjects/debating/l6.lesson.js', 'subjects/debating/items-l7.js', 'subjects/debating/l7.lesson.js', 'subjects/debating/items-l8.js', 'subjects/debating/l8.lesson.js', 'subjects/debating/items-l9.js', 'subjects/debating/l9.lesson.js', 'subjects/debating/items-l10.js', 'subjects/debating/items-l10b.js', 'subjects/debating/l10.lesson.js',
  'subjects/geography/subject.js', 'subjects/geography/gen-africa-central.js', 'subjects/geography/gen-africa-east.js', 'subjects/geography/gen-africa-south.js', 'subjects/geography/gen-africa-west.js', 'subjects/geography/gen-americas-north.js', 'subjects/geography/gen-arabia-north-africa.js', 'subjects/geography/gen-asia-central.js', 'subjects/geography/gen-asia-east.js', 'subjects/geography/gen-asia-islands.js', 'subjects/geography/gen-asia-south.js', 'subjects/geography/gen-balkans.js', 'subjects/geography/gen-caribbean.js', 'subjects/geography/gen-europe-east.js', 'subjects/geography/gen-europe-north.js', 'subjects/geography/gen-europe-west.js', 'subjects/geography/gen-mexico-central.js', 'subjects/geography/gen-middle-east.js', 'subjects/geography/gen-south-america.js', 'subjects/geography/gen-us-capitals.js', 'subjects/geography/gen-us-cities.js', 'subjects/geography/gen-us-map.js', 'subjects/geography/gen-us-states.js', 'subjects/geography/gen-world-features.js', 'subjects/geography/gen-world.js', 'subjects/geography/items-worked-us.js', 'subjects/geography/items-far.js', 'subjects/geography/l1.lesson.js', 'subjects/geography/l1b.lesson.js', 'subjects/geography/l1c.lesson.js', 'subjects/geography/l2.lesson.js', 'subjects/geography/l2b.lesson.js', 'subjects/geography/l3.lesson.js', 'subjects/geography/l4.lesson.js', 'subjects/geography/l5.lesson.js', 'subjects/geography/l6.lesson.js', 'subjects/geography/l7.lesson.js', 'subjects/geography/l7b.lesson.js', 'subjects/geography/l8.lesson.js', 'subjects/geography/l9.lesson.js', 'subjects/geography/l10.lesson.js', 'subjects/geography/l11.lesson.js', 'subjects/geography/l12.lesson.js', 'subjects/geography/l13.lesson.js', 'subjects/geography/l13b.lesson.js', 'subjects/geography/l14.lesson.js', 'subjects/geography/l14b.lesson.js', 'subjects/geography/l15.lesson.js', 'subjects/geography/l15b.lesson.js', 'subjects/geography/l16.lesson.js', 'subjects/geography/l16b.lesson.js', 'subjects/geography/l17.lesson.js', 'subjects/geography/l17b.lesson.js', 'subjects/geography/l18.lesson.js', 'subjects/geography/l18b.lesson.js', 'subjects/geography/l19.lesson.js', 'subjects/geography/l19b.lesson.js', 'subjects/geography/l20.lesson.js', 'subjects/geography/l20b.lesson.js', 'subjects/geography/l21.lesson.js', 'subjects/geography/l21b.lesson.js', 'subjects/geography/l22.lesson.js', 'subjects/geography/l22b.lesson.js', 'subjects/geography/l23.lesson.js', 'subjects/geography/l23b.lesson.js', 'subjects/geography/l24.lesson.js', 'subjects/geography/l24b.lesson.js', 'subjects/geography/l25.lesson.js', 'subjects/geography/l25b.lesson.js', 'subjects/geography/l26.lesson.js', 'subjects/geography/l26b.lesson.js', 'subjects/geography/l27.lesson.js', 'subjects/geography/l27b.lesson.js', 'subjects/geography/l28.lesson.js', 'subjects/geography/l28b.lesson.js', 'subjects/geography/l29.lesson.js', 'subjects/geography/l29b.lesson.js', 'subjects/geography/l30.lesson.js', 'subjects/geography/l31.lesson.js', 'subjects/geography/l32.lesson.js', 'subjects/geography/l33.lesson.js',
  'subjects/ideology/subject.js', 'subjects/ideology/items-shape.js', 'subjects/ideology/items-l1.js', 'subjects/ideology/l1.lesson.js', 'subjects/ideology/items-l2.js', 'subjects/ideology/l2.lesson.js', 'subjects/ideology/items-l3.js', 'subjects/ideology/l3.lesson.js', 'subjects/ideology/items-l4.js', 'subjects/ideology/l4.lesson.js', 'subjects/ideology/items-l5.js', 'subjects/ideology/l5.lesson.js', 'subjects/ideology/items-l5b.js', 'subjects/ideology/l5b.lesson.js', 'subjects/ideology/items-l6.js', 'subjects/ideology/l6.lesson.js', 'subjects/it-support/subject.js', 'subjects/it-support/items-l1.js', 'subjects/it-support/l1.lesson.js', 'subjects/it-support/items-l2.js', 'subjects/it-support/l2.lesson.js', 'subjects/it-support/items-l3.js', 'subjects/it-support/items-l3-check.js', 'subjects/it-support/l3.lesson.js', 'subjects/it-support/items-l4.js', 'subjects/it-support/items-l4-check.js', 'subjects/it-support/l4.lesson.js', 'subjects/it-support/items-l5.js', 'subjects/it-support/l5.lesson.js', 'subjects/it-support/items-l6.js', 'subjects/it-support/l6.lesson.js', 'subjects/it-support/items-l7.js', 'subjects/it-support/l7.lesson.js', 'subjects/it-support/items-l8.js', 'subjects/it-support/l8.lesson.js', 'subjects/it-support/items-l9.js', 'subjects/it-support/l9.lesson.js', 'subjects/it-support/items-l11.js', 'subjects/it-support/items-l11-check.js', 'subjects/it-support/l11.lesson.js', 'subjects/it-support/items-l10.js', 'subjects/it-support/items-l10-check.js', 'subjects/it-support/l10.lesson.js', 'subjects/it-support/items-l13.js', 'subjects/it-support/items-l13-check.js', 'subjects/it-support/l13.lesson.js', 'subjects/it-support/items-l14.js', 'subjects/it-support/items-l14-check.js', 'subjects/it-support/l14.lesson.js', 'subjects/math/subject.js', 'subjects/math/kit.js', 'subjects/math/gen-totals.js', 'subjects/math/l1.lesson.js', 'subjects/math/gen-friendly.js', 'subjects/math/l2.lesson.js', 'subjects/math/gen-rates.js', 'subjects/math/l3.lesson.js', 'subjects/math/gen-scales.js', 'subjects/math/l4.lesson.js', 'subjects/math/gen-percent.js', 'subjects/math/l5.lesson.js', 'subjects/math/gen-percent-back.js', 'subjects/math/l6.lesson.js', 'subjects/math/gen-area.js', 'subjects/math/l7.lesson.js', 'subjects/math/gen-volume.js', 'subjects/math/l8.lesson.js', 'subjects/math/gen-size.js', 'subjects/math/l9.lesson.js', 'subjects/math/gen-growth.js', 'subjects/math/l10.lesson.js', 'subjects/math/gen-loan.js', 'subjects/math/l11.lesson.js', 'subjects/math/gen-packs.js', 'subjects/math/l12.lesson.js', 'subjects/math/gen-chance.js', 'subjects/math/l13.lesson.js', 'subjects/math/gen-unknown.js', 'subjects/math/l14.lesson.js', 'subjects/math/gen-two-step.js', 'subjects/math/l15.lesson.js', 'subjects/math/gen-refresh-shapes.js', 'subjects/math/l16.lesson.js', 'subjects/math/gen-refresh-scale.js', 'subjects/math/l17.lesson.js', 'subjects/math/gen-refresh-powers.js', 'subjects/math/l18.lesson.js', 'subjects/math/gen-refresh-count.js', 'subjects/math/l19.lesson.js', 'subjects/psychology/subject.js', 'subjects/psychology/items-shape.js', 'subjects/psychology/items-l1.js', 'subjects/psychology/l1.lesson.js', 'subjects/psychology/items-l2.js', 'subjects/psychology/l2.lesson.js', 'subjects/psychology/items-l2a.js', 'subjects/psychology/l2a.lesson.js', 'subjects/psychology/items-l2b.js', 'subjects/psychology/l2b.lesson.js', 'subjects/psychology/items-l3.js', 'subjects/psychology/l3.lesson.js', 'subjects/psychology/items-l4.js', 'subjects/psychology/l4.lesson.js', 'subjects/psychology/items-l5.js', 'subjects/psychology/l5.lesson.js', 'subjects/psychology/items-l6.js', 'subjects/psychology/l6.lesson.js', 'subjects/psychology/items-l7.js', 'subjects/psychology/l7.lesson.js', 'subjects/scams/subject.js', 'subjects/scams/items-build.js', 'subjects/scams/items-kinds.js', 'subjects/scams/items-baseline.js', 'subjects/scams/items-check.js', 'subjects/scams/items-l1.js', 'subjects/scams/items-l2.js', 'subjects/scams/items-l4.js', 'subjects/scams/items-l5.js', 'subjects/scams/items-l6.js', 'subjects/scams/items-practice.js', 'subjects/scams/items-reserve.js', 'subjects/scams/items-l7.js', 'subjects/scams/items-l8.js', 'subjects/scams/items-l9.js', 'subjects/scams/items-l10.js', 'subjects/scams/items-l11.js', 'subjects/scams/items-l11r.js', 'subjects/scams/items-l12.js', 'subjects/scams/l0.lesson.js', 'subjects/scams/l1.lesson.js', 'subjects/scams/l2.lesson.js', 'subjects/scams/l3.lesson.js', 'subjects/scams/l4.lesson.js', 'subjects/scams/l5.lesson.js', 'subjects/scams/l6.lesson.js', 'subjects/scams/l7.lesson.js', 'subjects/scams/l8.lesson.js', 'subjects/scams/l9.lesson.js', 'subjects/scams/l10.lesson.js', 'subjects/scams/l11.lesson.js', 'subjects/scams/l12.lesson.js',
  'subjects/it-support/items-l12.js',
  'subjects/it-support/items-l12-check.js',
  'subjects/it-support/l12.lesson.js',
  'subjects/it-support/items-l15.js',
  'subjects/it-support/items-l15-check.js',
  'subjects/it-support/l15.lesson.js',
  'subjects/it-support/items-l16.js',
  'subjects/it-support/items-l16-check.js',
  'subjects/it-support/l16.lesson.js',
  'subjects/it-support/items-l17.js',
  'subjects/it-support/items-l17-check.js',
  'subjects/it-support/items-l17-reserve.js',
  'subjects/it-support/l17.lesson.js',
  'subjects/it-support/items-l18.js',
  'subjects/it-support/items-l18-check.js',
  'subjects/it-support/items-l18-reserve.js',
  'subjects/it-support/l18.lesson.js',
  'subjects/it-support/items-l19.js',
  'subjects/it-support/items-l19-check.js',
  'subjects/it-support/l19.lesson.js',
  'subjects/it-support/items-l21.js',
  'subjects/it-support/items-l21-check.js',
  'subjects/it-support/items-l21-reserve.js',
  'subjects/it-support/l21.lesson.js',
  'subjects/it-support/items-l20.js',
  'subjects/it-support/items-l20-check.js',
  'subjects/it-support/items-l20-reserve.js',
  'subjects/it-support/l20.lesson.js',
  'subjects/it-support/items-l24.js',
  'subjects/it-support/items-l24-check.js',
  'subjects/it-support/items-l24-reserve.js',
  'subjects/it-support/l24.lesson.js',
  'subjects/it-support/items-l22.js',
  'subjects/it-support/items-l22-check.js',
  'subjects/it-support/items-l22-reserve.js',
  'subjects/it-support/l22.lesson.js',
  'subjects/it-support/items-l23.js',
  'subjects/it-support/items-l23-check.js',
  'subjects/it-support/l23.lesson.js',
  'subjects/it-support/items-l25.js',
  'subjects/it-support/items-l25-check.js',
  'subjects/it-support/items-l25-reserve.js',
  'subjects/it-support/l25.lesson.js',
  'subjects/it-support/items-l26.js',
  'subjects/it-support/items-l26-check.js',
  'subjects/it-support/items-l26-reserve.js',
  'subjects/it-support/l26.lesson.js',
  'subjects/it-support/items-l27.js',
  'subjects/it-support/items-l27-check.js',
  'subjects/it-support/items-l27-reserve.js',
  'subjects/it-support/l27.lesson.js',
  'subjects/it-support/items-l28.js',
  'subjects/it-support/items-l28-check.js',
  'subjects/it-support/items-l28-reserve.js',
  'subjects/it-support/l28.lesson.js',
  'subjects/it-support/items-l29.js',
  'subjects/it-support/items-l29-reserve.js',
  'subjects/it-support/l29.lesson.js',
  'subjects/singing/subject.js', 'subjects/singing/items-shape.js', 'subjects/singing/items-fit.js', 'subjects/singing/items-landing.js', 'subjects/singing/items-holding.js', 'subjects/singing/items-jump.js', 'subjects/singing/items-tune.js', 'subjects/singing/items-top.js', 'subjects/singing/items-breath.js', 'subjects/singing/items-sound.js', 'subjects/singing/items-care.js', 'subjects/singing/items-cause.js', 'subjects/singing/l1.lesson.js', 'subjects/singing/l2.lesson.js', 'subjects/singing/l3.lesson.js', 'subjects/singing/l4.lesson.js', 'subjects/singing/l5.lesson.js', 'subjects/singing/l6.lesson.js', 'subjects/singing/l7.lesson.js', 'subjects/singing/l8.lesson.js', 'subjects/singing/l9.lesson.js', 'subjects/singing/l10.lesson.js', 'subjects/singing/l11.lesson.js', 'subjects/singing/l12.lesson.js', 'subjects/stats/subject.js', 'subjects/stats/items-build.js', 'subjects/stats/items-asks.js', 'subjects/stats/items-base.js', 'subjects/stats/items-check.js', 'subjects/stats/items-claims.js', 'subjects/stats/items-compare-check.js', 'subjects/stats/items-compare.js', 'subjects/stats/items-reserve.js', 'subjects/stats/items-risk.js', 'subjects/stats/items-size.js', 'subjects/stats/items-test.js', 'subjects/stats/items-counted.js', 'subjects/stats/items-counted-check.js', 'subjects/stats/items-cause.js', 'subjects/stats/items-cause-check.js', 'subjects/stats/items-charts.js', 'subjects/stats/items-charts-check.js', 'subjects/stats/items-whole.js', 'subjects/stats/items-whole-check.js', 'subjects/stats/items-whole-reserve.js', 'subjects/stats/gen-risk.js', 'subjects/stats/gen-size.js', 'subjects/stats/gen-test.js', 'subjects/stats/l0.lesson.js', 'subjects/stats/l1.lesson.js', 'subjects/stats/l2.lesson.js', 'subjects/stats/l3.lesson.js', 'subjects/stats/l4.lesson.js', 'subjects/stats/l5.lesson.js', 'subjects/stats/l6.lesson.js', 'subjects/stats/l7.lesson.js', 'subjects/stats/l8.lesson.js', 'subjects/stats/l9.lesson.js', 'subjects/wealth/subject.js', 'subjects/wealth/items-list.js', 'subjects/wealth/gen-list.js', 'subjects/wealth/l1.lesson.js', 'subjects/wealth/items-cash.js', 'subjects/wealth/gen-cash.js', 'subjects/wealth/l2.lesson.js', 'subjects/wealth/items-cost.js', 'subjects/wealth/gen-cost.js', 'subjects/wealth/l3.lesson.js', 'subjects/wealth/gen-match.js', 'subjects/wealth/items-order.js', 'subjects/wealth/l4.lesson.js', 'subjects/wealth/items-tax.js', 'subjects/wealth/gen-tax.js', 'subjects/wealth/l5.lesson.js', 'subjects/wealth/gen-share.js', 'subjects/wealth/l6.lesson.js', 'subjects/wealth/gen-mix.js', 'subjects/wealth/l7.lesson.js', 'subjects/wealth/gen-cover.js', 'subjects/wealth/l8.lesson.js', 'subjects/wealth/gen-foreign.js', 'subjects/wealth/l9.lesson.js', 'subjects/wealth/gen-heirs.js', 'subjects/wealth/l10.lesson.js', 'subjects/wealth/gen-rate.js', 'subjects/wealth/l11.lesson.js', 'subjects/wealth/gen-year.js', 'subjects/wealth/l12.lesson.js', 'app/lessons/view.js',
  'app/lessons/gen.js', 'app/lessons/rules.js', 'app/lessons/number.js', 'app/lessons/form.js', 'app/lessons/own.js', 'app/lessons/own-work-later.js', 'app/lessons/own-work.js', 'app/lessons/sing-task.js', 'app/lessons/sing-judge.js', 'app/lessons/sing-score.js', 'app/lessons/tap.js', 'app/lessons/place.js', 'app/lessons/place-gen.js', 'app/lessons/exchange.js', 'app/lessons/order.js', 'app/lessons/timer.js', 'app/lessons/busy.js', 'app/lessons/plan.js', 'app/lessons/chart.js', 'app/lessons/panel.js', 'app/lessons/recall.js', 'app/lessons/records.js',
  'app/lessons/schedule.js', 'app/lessons/sets.js', 'app/lessons/place-draw.js', 'app/lessons/doc-view.js', 'app/lessons/doc-run.js', 'app/lessons/article-view.js', 'app/lessons/chart-view.js', 'app/lessons/panel-view.js', 'app/lessons/message-view.js', 'app/lessons/exchange-view.js', 'app/lessons/place-view.js', 'app/lessons/order-view.js', 'app/lessons/plan-view.js', 'app/lessons/text-view.js', 'app/lessons/recall-view.js', 'app/lessons/speech-view.js', 'app/lessons/answers-view.js', 'app/lessons/number-view.js', 'app/lessons/form-view.js', 'app/lessons/own-view.js', 'app/lessons/item-view.js', 'app/lessons/sing-strip.js', 'app/lessons/tones.js', 'app/lessons/queue.js', 'app/lessons/number-run.js', 'app/lessons/form-run.js', 'app/lessons/tap-run.js', 'app/lessons/place-run.js', 'app/lessons/map-run.js', 'app/lessons/text-run.js', 'app/lessons/recall-run.js', 'app/lessons/speech-run.js', 'app/lessons/exchange-run.js', 'app/lessons/order-run.js', 'app/lessons/timer-run.js', 'app/lessons/busy-run.js', 'app/lessons/plan-run.js', 'app/lessons/answers-run.js',
  'app/lessons/sing-run.js', 'app/lessons/player.js', 'app/lessons/own-run.js', 'app/lessons/review.js', 'app/state.js',
  'app/shell.js', 'app/library.js', 'app/subject.js', 'app/progress.js', 'app/search.js', 'app/lessons/audio-notes.js',
  'app/lessons/audio-pitch.js', 'app/lessons/audio-synth.js', 'app/lessons/audio-meter.js', 'app/init.js', 'app/sync.js', 'app/firebase-config.js', 'app/legacy-move.js', 'vendor/firebase.js', 'fonts/fonts.css',
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
