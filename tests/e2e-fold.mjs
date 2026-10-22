// The browser check of a big screen: X48, at the sizes of the owner's Galaxy Z Fold 8 Ultra. Its inner screen (2504 x 2256) is about 752 x 835 CSS px
// upright and 835 x 752 turned, less the browser's bars; its cover screen (2520 x 1080) about 360 x 840. Opened out, with the bars showing, turned with
// the bars showing, and folded shut again, on the real subject Geography (lesson 16, western Europe). Opened out or turned, a question asked on
// a map shows the map beside the question, with the map, the question and Next all on the screen at once and no scrolling; a tap on the place still
// answers it; folded, the map goes back under the question; the pages of the app widen past a phone's column, a subject's lessons run in two
// columns, and on a desktop (1440 x 900) a list screen's side stands beside its list and a screen of two maps shows them side by side. tests/e2e-controls.mjs seeds a fault.

const OPEN = { width: 752, height: 835 };
const BARS = { width: 752, height: 700 };
const TURNED = { width: 835, height: 620 };
const FOLDED = { width: 360, height: 840 };
const DESKTOP = { width: 1440, height: 900 };
const MAP = '[data-map-ask] .mapsvg';

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
// the first step of lesson 16 whose question is tapped on the map, moved to; its step, or -1
const goToTap = page => page.evaluate(() => {
  for (let at = 0; at < 12; at++) {
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

// opened out or turned: the map to the right of the question, the map and Next on the screen, nothing to scroll
async function besideChecks(c, page, size) {
  const label = `${size.width}x${size.height}`;
  const ask = await rectOf(page, '.placeask'), map = await rectOf(page, MAP), zoom = await rectOf(page, '[data-map-ask] .mapzoom'), bar = await rectOf(page, '.actbar');
  const room = await pageSize(page);
  c.check(ask && map && map.left >= ask.right, `${label}: the map (from ${map && Math.round(map.left)} px) is not beside the question (to ${ask && Math.round(ask.right)} px)`);
  c.check(map && map.width >= 380, `${label}: the map is ${map && Math.round(map.width)} px wide, not using the screen`);
  c.check(map && zoom && bar && map.top >= 0 && zoom.bottom <= bar.top, `${label}: the map and its zoom buttons (to ${zoom && Math.round(zoom.bottom)} px) run under the bar of Next (from ${bar && Math.round(bar.top)} px)`);
  c.check(await page.locator('#qNext').isVisible() && bar && bar.bottom <= size.height + 1, `${label}: Next is not on the screen`);
  c.check(room.w <= size.width && room.h <= size.height && room.y === 0, `${label}: the screen scrolls (${room.w} x ${room.h} px)`);
}

export async function X48(env) {
  const c = env.checker('X48'), { context, page } = await env.freshPage(c, OPEN.width);
  await page.setViewportSize(OPEN);

  /* ---------- the pages widen past a phone's column ---------- */
  await env.toLibrary(page);
  const pane = await rectOf(page, '#screen .pane');
  c.check(pane && pane.width >= 600, `${OPEN.width}px: the library is ${pane && Math.round(pane.width)} px wide, a phone's column on a tablet`);

  /* ---------- opened out: the map beside the question, and a tap answers ---------- */
  await env.openSubject(page, 'geography');
  await env.clickVisible(page, '#screen [data-l="l16"]');
  c.check(await goToTap(page) > 0, 'no question tapped on the map in Geography\'s lesson 16');
  await besideChecks(c, page, OPEN);
  const [x, y] = await placeOnScreen(page, MAP);
  await page.mouse.click(x, y);
  c.check(await page.evaluate(() => Q.cur.done) && await page.locator('.mark:not(.no)').count() > 0, `${OPEN.width}x${OPEN.height}: a tap on the place asked for was not marked right`);
  await page.locator('#qNext').click();

  /* ---------- turned on its side, then folded shut, then opened again: the layout follows ---------- */
  await page.setViewportSize(BARS);
  await besideChecks(c, page, BARS);
  await page.setViewportSize(TURNED);
  await besideChecks(c, page, TURNED);
  await page.setViewportSize(FOLDED);
  const stem = await rectOf(page, '.placeask .stem'), map = await rectOf(page, MAP), room = await pageSize(page);
  c.check(stem && map && map.top >= stem.bottom && map.left < stem.right, `${FOLDED.width}px folded: the map is not under the question`);
  c.check(room.w <= FOLDED.width, `${FOLDED.width}px folded: the screen is ${room.w} px wide`);
  await page.setViewportSize(OPEN);
  await besideChecks(c, page, OPEN);
  const [x2, y2] = await placeOnScreen(page, MAP);
  await page.mouse.click(x2, y2);
  c.check(await page.evaluate(() => Q.cur.done) && await page.locator('.mark:not(.no)').count() > 0, `${OPEN.width}x${OPEN.height} after folding: a tap on the place asked for was not marked right`);

  /* ---------- opened out, a list in two columns; on a desktop, the side beside the list and a key's maps side by side ---------- */
  await env.openSubject(page, 'geography');
  c.check(await twoColumns(page), `${OPEN.width}px: Geography's lessons run in one column`);
  await page.setViewportSize(DESKTOP);
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
  return c;
}

export const FOLD_CHECKS = { X48 };
