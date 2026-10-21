// The browser check of the light theme: X51. A phone set to light opens the app light before anything else is drawn, the phone's bar
// takes the page's colour, and every screen a learner meets (the library, a subject, a lesson's question answered right and wrong, a map,
// the review, search and Progress) has every line of text at 4.5:1 or more against what is behind it, on the owner's Galaxy Z Fold 8 Ultra
// opened out and folded. The switch on Progress holds a choice across a reload, and "Like the phone" goes back to the phone's setting.
// tests/e2e-controls.mjs seeds the faults.

const OPEN = { width: 752, height: 835 };
const FOLDED = { width: 360, height: 840 };
const MIN_CONTRAST = 4.5;

// every piece of visible text on the screen whose contrast with what is behind it is under the floor: ["text" 3.1:1], at most a few
const lowContrast = (page, floor) => page.evaluate(floor => {
  const parse = value => {
    const m = value.match(/^rgba?\(([^)]+)\)$/) || value.match(/^color\(srgb ([^)]+)\)$/);
    if (!m) return null;
    const parts = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    const scale = value.startsWith('color(') ? 255 : 1;
    return { r: parts[0] * scale, g: parts[1] * scale, b: parts[2] * scale, a: parts.length > 3 ? parts[3] : 1 };
  };
  const over = (top, under) => ({ r: top.r * top.a + under.r * (1 - top.a), g: top.g * top.a + under.g * (1 - top.a), b: top.b * top.a + under.b * (1 - top.a), a: 1 });
  // what is painted behind an element: its own background and its ancestors', laid over one another down to the page
  const behind = el => {
    const layers = [];
    for (let at = el; at; at = at.parentElement) {
      const bg = parse(getComputedStyle(at).backgroundColor);
      if (bg && bg.a > 0) { layers.push(bg); if (bg.a === 1) break; }
    }
    return layers.reverse().reduce((under, top) => over(top, under), { r: 255, g: 255, b: 255, a: 1 });
  };
  const lum = c => [c.r, c.g, c.b].map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };
  const low = [];
  const walker = document.createTreeWalker(document.querySelector('.app'), NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const el = node.parentElement, text = node.textContent.trim();
    if (!text || !el || el.closest('svg, [disabled], [aria-hidden="true"]') || !el.getClientRects().length) continue;
    const style = getComputedStyle(el);
    if (style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
    const fg = parse(style.color);
    if (!fg) { low.push(`"${text.slice(0, 24)}" (colour ${style.color} not read)`); continue; }
    const bg = behind(el), r = ratio(over(fg, bg), bg);
    if (r < floor) low.push(`"${text.slice(0, 24)}" ${r.toFixed(2)}:1`);
  }
  return [...new Set(low)].slice(0, 6);
}, floor);

const themeOf = page => page.evaluate(() => document.documentElement.dataset.theme);
const pageColours = page => page.evaluate(() => ({
  bg: getComputedStyle(document.body).backgroundColor,
  bar: document.querySelector('meta[name="theme-color"]').content,
  water: getComputedStyle(document.querySelector('.map-water') || document.body).fill,
  land: getComputedStyle(document.querySelector('.mp:not(.lit):not(.focus)') || document.body).fill
}));
const light = rgb => { const [r, g, b] = rgb.match(/\d+/g).map(Number); return (r + g + b) / 3 > 200; };
const hexToRgb = hex => `rgb(${[1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(', ')})`;

// the screens, in turn: each one read for contrast under its label
async function screens(env, c, page, label) {
  const read = async where => {
    const low = await lowContrast(page, MIN_CONTRAST);
    c.check(low.length === 0, `${label}, ${where}: text under ${MIN_CONTRAST}:1 in the light theme: ${low.join(', ')}`);
  };
  await env.toLibrary(page);
  await read('the library');
  await env.openSubject(page, 'fixture');
  await read('a subject');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await read('a lesson');
  // a question answered: right and wrong marks
  for (let step = 0; step < 12 && !(await page.locator('#screen .opt:visible').count()); step++) {
    if (!(await page.locator('#fwd:visible').count())) break;
    await env.goOn(page);
  }
  const options = page.locator('#screen .opt:visible:not([disabled])');
  if (await options.count()) {
    await options.first().click();
    await read('a question answered');
  }
  await env.openSubject(page, 'geography');
  await env.clickVisible(page, '#screen [data-l="l16"]');
  const mapped = await page.evaluate(() => {
    for (let at = 0; at < 12; at++) { moveLesson(at); if (document.querySelector('#screen .mapsvg')) return true; }
    return false;
  });
  c.check(mapped, `${label}: no map in Geography's lesson 16`);
  if (mapped) {
    const colours = await pageColours(page);
    c.check(colours.water !== colours.land && light(colours.water) && light(colours.land), `${label}: the map is not drawn light (water ${colours.water}, land ${colours.land})`);
    await read('a map');
  }
  await env.toLibrary(page);
  await env.clickVisible(page, '[data-v="review"]');
  await read('the review');
  await env.clickVisible(page, '[data-v="progress"]');
  await read('Progress');
}

export async function X51(env) {
  const c = env.checker('X51'), { context, page } = await env.freshPage(c, OPEN.width, { colorScheme: 'light' });
  await page.setViewportSize(OPEN);

  /* ---------- a phone set to light opens the app light, with the bar the page's colour ---------- */
  c.check(await themeOf(page) === 'light', `a phone set to light opened the app "${await themeOf(page)}"`);
  const colours = await pageColours(page);
  c.check(light(colours.bg), `the page's background is ${colours.bg} in the light theme`);
  c.check(hexToRgb(colours.bar) === colours.bg, `the phone's bar is ${colours.bar}, the page ${colours.bg}`);

  /* ---------- every screen readable, opened out and folded ---------- */
  await screens(env, c, page, `${OPEN.width}px`);
  await page.setViewportSize(FOLDED);
  await screens(env, c, page, `${FOLDED.width}px`);

  /* ---------- the switch on Progress ---------- */
  await env.clickVisible(page, '[data-v="progress"]');
  await env.clickVisible(page, '[data-theme-pick="dark"]');
  c.check(await themeOf(page) === 'dark', 'Dark on Progress left the app light');
  c.check(await page.locator('[data-theme-pick="dark"][aria-pressed="true"]').count() === 1, 'Dark is not shown as chosen');
  // the app opened again in a new tab, as after closing it (a reload would keep what the tab alone holds)
  const again = await context.newPage();
  await again.goto(page.url());
  await env.recordOpen(again);
  c.check(await themeOf(again) === 'dark', 'the choice of Dark was lost on opening the app again');
  await again.close();
  await env.clickVisible(page, '[data-v="progress"]');
  await env.clickVisible(page, '[data-theme-pick="system"]');
  c.check(await themeOf(page) === 'light', '"Like the phone" did not go back to the phone\'s light setting');
  await page.emulateMedia({ colorScheme: 'dark' });
  c.check(await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark', null, { timeout: 2000 }).then(() => true, () => false),
    'the app did not follow the phone turning dark');
  await context.close();
  return c;
}

export const THEME_CHECKS = { X51 };
