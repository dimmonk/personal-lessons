// The browser check of a big screen: X48, at the sizes of the owner's Galaxy Z Fold 8 Ultra. Its inner screen (2504 x 2256) is about 752 x 835 CSS px
// upright and 835 x 752 turned, less the browser's bars; its cover screen (2520 x 1080) about 360 x 840. Opened out, with the bars showing, turned with
// the bars showing, and folded shut again, on the real subject Geography (lesson 16, western Europe; lesson 10, the United States). A question asked
// on a map gives the map a large part of the screen, with the map, the question and Next all on the screen at once and no scrolling: opened out, the
// map of western Europe (about as tall as wide) stands beside the question and the map of the United States (twice as wide as tall) goes across the
// screen under it; a tap on the place still answers it; folded, the map goes back under the question; the pages of the app widen past a phone's column, a subject's lessons run in two
// columns, and on a desktop (1440 x 900) a list screen's side stands beside its list and a screen of two maps shows them side by side. tests/e2e-controls.mjs seeds a fault.

const OPEN = { width: 752, height: 835 };
const BARS = { width: 752, height: 700 };
const TURNED = { width: 835, height: 620 };
const FOLDED = { width: 360, height: 840 };
const DESKTOP = { width: 1440, height: 900 };
const MAP = '[data-map-ask] .mapsvg';
const MAP_SHARE = 0.2;   // the least share of the screen the map itself is drawn on, opened out or turned

// the screen set to a size, and the app given two frames to lay the map out for it (map-run.js fits a map when the window says it was resized)
const resize = async (page, size) => { await page.setViewportSize(size); await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))); };
const rectOf = (page, selector) => page.evaluate(s => {
  const el = document.querySelector(s);
  if (!el) return null;
  const b = el.getBoundingClientRect();
  return { top: b.top, bottom: b.bottom, left: b.left, right: b.right, width: b.width };
}, selector);
// the first two lessons of the subject on the screen side by side, in one row
const twoColumns = page => page.evaluate(() => {
  const [a, b] = [...document.querySelectorAll('#screen [data-l]')].map(e => e.getBoundingClientRect());
  return !!a && !!b && Math.abs(a.top - b.top) < 2 && b.left > a.right;
});
const pageSize = page => page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight, y: scrollY }));
// the share of the screen the map asked on is drawn on, at its whole self (not the water around it)
const mapShare = page => page.evaluate(() => {
  const fig = document.querySelector('[data-map-ask]'), b = fig && fig.querySelector('.mapsvg').getBoundingClientRect();
  if (!b) return 0;
  const w = Number(fig.dataset.w) * 1.08, h = Number(fig.dataset.h) * 1.08, s = Math.min(b.width / w, b.height / h);   // the map with its margin of water (map-run.js)
  return (s * w * s * h) / (1.08 * 1.08) / (innerWidth * innerHeight);
});
// the first step of the lesson whose question is tapped on the map, moved to; its step, or -1
const goToTap = page => page.evaluate(() => {
  for (let at = 0; at < 14; at++) {
    moveLesson(at);
    if (typeof Q !== 'undefined' && Q && Q.list && Q.list.length && Q.list[Q.at].item.values && Q.list[Q.at].item.values.form === 'tap') return at;
  }
  return -1;
});
// where the place asked for is on the screen
const placeOnScreen = (page, selector) => page.evaluate(s => {
  const place = mapPlace(FC.maps['europe-west'], Q.list[Q.at].item.values.place), svg = document.querySelector(s), p = svg.createSVGPoint();
  p.x = place.at[0]; p.y = place.at[1];
  const at = p.matrixTransform(svg.getScreenCTM());
  return [at.x, at.y];
}, selector);

// opened out or turned: the map large, the map and Next on the screen, nothing to scroll; `beside`: the map to the right of the question, or else under it
async function bigMapChecks(c, page, size, beside) {
  const label = `${size.width}x${size.height}`;
  const ask = await rectOf(page, '.placeask .stem'), map = await rectOf(page, MAP), bar = await rectOf(page, '.actbar'), share = await mapShare(page);
  const room = await pageSize(page);
  c.check(ask && map && (beside ? map.left >= ask.right : map.top >= ask.bottom), `${label}: the map is not ${beside ? 'beside' : 'under'} the question`);
  c.check(share >= MAP_SHARE, `${label}: the map is drawn on ${Math.round(share * 100)}% of the screen, under ${MAP_SHARE * 100}%`);
  c.check(map && bar && map.top >= 0 && map.bottom <= bar.top, `${label}: the map (to ${map && Math.round(map.bottom)} px) runs under the bar of Next (from ${bar && Math.round(bar.top)} px)`);
  c.check(await page.locator('#qNext').isVisible() && bar && bar.bottom <= size.height + 1, `${label}: Next is not on the screen`);
  c.check(room.w <= size.width && room.h <= size.height && room.y === 0, `${label}: the screen scrolls (${room.w} x ${room.h} px)`);
}

export async function X48(env) {
  const c = env.checker('X48'), { context, page } = await env.freshPage(c, OPEN.width);
  await resize(page, OPEN);

  /* ---------- the pages widen past a phone's column ---------- */
  await env.toLibrary(page);
  const pane = await rectOf(page, '#screen .pane');
  c.check(pane && pane.width >= 600, `${OPEN.width}px: the library is ${pane && Math.round(pane.width)} px wide, a phone's column on a tablet`);

  /* ---------- opened out: a map as tall as wide stands beside the question, and a tap answers ---------- */
  await env.openSubject(page, 'geography');
  await env.clickVisible(page, '#screen [data-l="l16"]');
  c.check(await goToTap(page) > 0, 'no question tapped on the map in Geography\'s lesson 16');
  await bigMapChecks(c, page, OPEN, true);
  const [x, y] = await placeOnScreen(page, MAP);
  await page.mouse.click(x, y);
  await page.locator('[data-place-answer]').click();
  c.check(await page.evaluate(() => Q.cur.done) && await page.locator('.mark:not(.no)').count() > 0, `${OPEN.width}x${OPEN.height}: a tap on the place asked for was not marked right`);
  await page.locator('#qNext').click();

  /* ---------- turned on its side, then folded shut, then opened again: the layout follows ---------- */
  await resize(page, BARS);
  await bigMapChecks(c, page, BARS, true);
  await resize(page, TURNED);
  await bigMapChecks(c, page, TURNED, true);
  await resize(page, FOLDED);
  const stem = await rectOf(page, '.placeask .stem'), map = await rectOf(page, MAP), room = await pageSize(page);
  c.check(stem && map && map.top >= stem.bottom && map.left < stem.right, `${FOLDED.width}px folded: the map is not under the question`);
  c.check(room.w <= FOLDED.width, `${FOLDED.width}px folded: the screen is ${room.w} px wide`);
  await resize(page, OPEN);
  await bigMapChecks(c, page, OPEN, true);
  const [x2, y2] = await placeOnScreen(page, MAP);
  await page.mouse.click(x2, y2);
  await page.locator('[data-place-answer]').click();
  c.check(await page.evaluate(() => Q.cur.done) && await page.locator('.mark:not(.no)').count() > 0, `${OPEN.width}x${OPEN.height} after folding: a tap on the place asked for was not marked right`);

  /* ---------- opened out, a list in two columns; on a desktop, the side beside the list and a key's maps side by side ---------- */
  await env.openSubject(page, 'geography');
  c.check(await twoColumns(page), `${OPEN.width}px: Geography's lessons run in one column`);
  await resize(page, DESKTOP);
  await env.toLibrary(page);
  const side = await rectOf(page, '#screen .split-side'), list = await rectOf(page, '#screen .split-main');
  c.check(side && list && list.left >= side.right && list.top <= side.top + 1, `${DESKTOP.width}px: the library's subjects are not beside its side`);
  await env.openSubject(page, 'geography');
  c.check(await twoColumns(page), `${DESKTOP.width}px: Geography's lessons run in one column`);
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await page.evaluate(() => moveLesson(2));
  const maps = await page.locator('.blocks.figs .block-map').evaluateAll(els => els.map(e => { const b = e.getBoundingClientRect(); return { top: b.top, left: b.left, bottom: b.bottom }; }));
  c.check(maps.length === 2 && Math.abs(maps[0].top - maps[1].top) < 40 && maps[1].left > maps[0].left && maps[1].bottom <= DESKTOP.height, `${DESKTOP.width}x${DESKTOP.height}: the two maps of lesson 1's names are not side by side on the screen (${JSON.stringify(maps)})`);

  await context.close();

  /* ---------- opened out: a wide map goes across the screen, under the question ---------- */
  const wide = await env.freshPage(c, OPEN.width);
  await resize(wide.page, OPEN);
  await env.openSubject(wide.page, 'geography');
  await env.clickVisible(wide.page, '#screen [data-l="l10"]');
  c.check(await goToTap(wide.page) > 0, 'no question tapped on the map in Geography\'s lesson 10');
  await bigMapChecks(c, wide.page, OPEN, false);
  await wide.context.close();
  return c;
}

export const FOLD_CHECKS = { X48 };
