// The browser check of lesson standard 9 for the map block and the place ask: X46. It drives the real app in Chromium on the test subject
// "Atlas of the isles" (tests/fixtures/fixture-subject/atlas-*.js: a map of three countries, a dot and a sea) and returns its checker.
// tests/e2e-controls.mjs runs it against the app with a seeded fault and requires exactly that check to go red.

const next = page => page.locator('#qNext').click();
const openAtlas = async (env, page) => { await env.openSubject(page, 'atlas'); await env.clickVisible(page, '#screen [data-l="l1"]'); };
// the steps of the test lesson: 0 the why, 1 the labelled map, 2 the worked tap, 3 the taps, 4 the neighbors and the lit name, 5 the check
const STEP = { labelled: 1, worked: 2, taps: 3, borders: 4, check: 5 };
const jump = (page, at) => page.evaluate(n => moveLesson(n), at);
const MAP = '[data-map-ask] .mapsvg';
const WAIT_MS = 2800;

// where a point of the map (in its own units) is on the screen, as the svg draws it now
const screenOf = (page, x, y) => page.evaluate(([x, y]) => {
  const svg = document.querySelector('[data-map-ask] .mapsvg'), p = svg.createSVGPoint();
  p.x = x; p.y = y;
  const s = p.matrixTransform(svg.getScreenCTM());
  return [s.x, s.y];
}, [x, y]);
const viewBox = page => page.evaluate(() => document.querySelector('[data-map-ask] .mapsvg, .block-map .mapsvg').getAttribute('viewBox').split(' ').map(Number));
const tapAt = async (page, x, y) => { await page.locator(MAP).scrollIntoViewIfNeeded(); const [px, py] = await screenOf(page, x, y); await page.mouse.click(px, py); };
const lit = page => page.locator('.item .mp.lit').evaluateAll(els => els.map(e => e.dataset.place));
// how tall a name is on the screen in pixels (its size in units of the map times the pixels each unit takes), and where it and a dot are on the screen
const nameHeight = (page, map, name) => page.evaluate(([map, name]) => {
  const t = [...document.querySelectorAll('.block-map')[map].querySelectorAll('text.ml')].find(e => e.textContent === name);
  return Number(t.getAttribute('font-size')) * t.getScreenCTM().a;
}, [map, name]);
const centreOf = (page, selector) => page.evaluate(sel => { const b = document.querySelector(sel).getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2, b.width]; }, selector);
const fillOf = (page, selector) => page.evaluate(sel => getComputedStyle(document.querySelector(sel)).fill, selector);
const look = page => page.evaluate(() => ({ key: Q.list[Q.at].key, redo: !!Q.list[Q.at].redo, done: Q.cur.done, a: Q.cur.a, r: Q.cur.score ? Q.cur.score.r : null }));

// two fingers moving apart over the open map, as a phone sends them (pointer events with two pointer ids), then both lifted
const pinch = page => page.evaluate(() => {
  const svg = document.querySelector('[data-map-ask] .mapsvg'), box = svg.getBoundingClientRect(), cx = box.left + box.width / 2, cy = box.top + box.height / 2;
  const fire = (type, id, x) => svg.dispatchEvent(new PointerEvent(type, { pointerId: id, pointerType: 'touch', clientX: x, clientY: cy, bubbles: true, isPrimary: id === 1 }));
  fire('pointerdown', 1, cx - 15); fire('pointerdown', 2, cx + 15);
  for (let i = 1; i <= 6; i++) { fire('pointermove', 1, cx - 15 - i * 12); fire('pointermove', 2, cx + 15 + i * 12); }
  fire('pointerup', 1, cx - 87); fire('pointerup', 2, cx + 87);
});

/* ---------- X46 ---------- */
export async function X46(env) {
  const c = env.checker('X46'), { context, page } = await env.freshPage(c);
  let waterFills = [], landFill = '', blankFill = '';
  await openAtlas(env, page);

  // the map, with its names, once
  await jump(page, STEP.labelled);
  const names = await page.locator('.mapsvg text').allTextContents();
  c.check(['Alder', 'Cedar', 'Birch', 'Speck', 'Crumb', 'The sea'].every(n => names.includes(n)), `the labelled map does not name every place (${names.join(', ')})`);
  c.check(await page.locator('.mapsvg[aria-label*="names shown"]').count() === 2, 'a labelled map does not say that it shows the names');
  // a name is set in pixels: as tall on the screen at every zoom, and legible (12 or more)
  const small = await nameHeight(page, 0, 'Alder');
  c.check(small >= 12 && small < 13, `a name is ${small.toFixed(1)} px tall on the screen, not 12`);
  await page.locator('.block-map').first().locator('[data-map-zoom="in"]').click();
  await page.locator('.block-map').first().locator('[data-map-zoom="in"]').click();
  const zoomedName = await nameHeight(page, 0, 'Alder');
  c.check(Math.abs(zoomedName - small) < 0.2, `a name is ${small.toFixed(1)} px tall on the whole map and ${zoomedName.toFixed(1)} px tall zoomed in: it should not change with the zoom`);
  // a microstate's name stands off its dot on a line to it, and a map with a view opens on that part of the map and goes back to it
  const dot = await centreOf(page, '.bfig:nth-child(2 of .bfig) .block-map .mp-dot[data-place="crumb"]'), name = await centreOf(page, '.bfig:nth-child(2 of .bfig) .block-map text.ml[data-dx="-40"]');
  c.check(Math.hypot(dot[0] - name[0], dot[1] - name[1]) > 30 && await page.locator('.bfig:nth-child(2 of .bfig) .block-map line.ml-lead').count() === 1, 'the name of a microstate is not set off its dot on a line to it');
  const home = (await page.locator('.block-map').nth(1).locator('.mapsvg').getAttribute('viewBox')).split(' ').map(Number);
  c.check(Math.abs(home[2] - 100) < 0.5, `a map with a view of zoom 3 opens ${home[2]} units across, not 100`);
  await page.locator('.block-map').nth(1).locator('[data-map-zoom="in"]').click();
  await page.locator('.block-map').nth(1).locator('[data-map-zoom="reset"]').click();
  c.check(Math.abs((await page.locator('.block-map').nth(1).locator('.mapsvg').getAttribute('viewBox')).split(' ').map(Number)[2] - 100) < 0.5, 'the button for the whole map does not go back to the part the map opened on');
  const key = await page.locator('.flagkey li').allTextContents();
  c.check(key.length === 3 && key[0].includes('Alder') && key[1].includes('Birch') && key[2].includes('Cedar'), `the flags with their names are ${JSON.stringify(key)}`);
  await env.inspect(c, page, 'the labelled map');

  // a worked tap: the place lit, the tap shown
  await jump(page, STEP.worked);
  c.check(JSON.stringify(await page.locator('.item .mp.lit, .block-map .mp.lit').evaluateAll(els => els.map(e => e.dataset.place))) === '["alder"]', 'the worked tap does not light the place');
  const workedNames = await page.locator('.block-map text').allTextContents();
  c.check(await page.locator('.block-map .mk-right').count() === 1 && JSON.stringify(workedNames) === '["Alder"]', `the worked tap does not show the tap, or its map names ${JSON.stringify(workedNames)}, not the lit place Alder`);
  c.check(/Tap it on the map\./.test(await env.screenText(page)), 'the worked tap does not say what is asked');

  // the first group: Birch, Cedar, Speck
  await jump(page, STEP.taps);
  c.check((await look(page)).key === 't-birch', 'the first question is not the tap on Birch');
  c.check(await page.locator(`${MAP} text`).count() === 0 && (await lit(page)).length === 0, 'the blank map carries a name, or has a place lit before the answer');
  c.check(await page.locator('[data-feedback]').count() === 0 && await page.locator('#qNext').isDisabled(), 'feedback is on the page, or Next is open, before the answer');
  await env.inspect(c, page, 'a question with a blank map');
  const full = await viewBox(page);
  c.check(full[2] === 300 && full[3] === 200, `the map does not start whole (${full.join(' ')})`);

  // a pinch zooms and is not a tap
  await pinch(page);
  const zoomed = await viewBox(page);
  c.check(zoomed[2] < 300 && (await look(page)).done === false && await page.locator('[data-feedback]').count() === 0 && Object.keys((await look(page)).a).length === 0, `a pinch ${zoomed[2] < 300 ? 'was counted as a tap' : 'did not zoom the map'}`);
  // a drag moves the map and is not a tap
  const [sx, sy] = await screenOf(page, 150, 100);
  await page.mouse.move(sx, sy); await page.mouse.down(); await page.mouse.move(sx + 25, sy + 5, { steps: 4 }); await page.mouse.move(sx + 60, sy + 10, { steps: 4 }); await page.mouse.up();
  const dragged = await viewBox(page);
  c.check(dragged[0] !== zoomed[0] && Object.keys((await look(page)).a).length === 0 && await page.locator('[data-feedback]').count() === 0, `a drag ${dragged[0] === zoomed[0] ? 'did not move the map' : 'was counted as a tap'}`);
  // the buttons zoom and show the whole map again
  await page.locator('[data-map-ask] [data-map-zoom="reset"]').click();
  c.check((await viewBox(page))[2] === 300, 'the button for the whole map does not show it');
  await page.locator('[data-map-ask] [data-map-zoom="in"]').click();
  c.check((await viewBox(page))[2] < 300, 'the zoom button does not zoom in');
  await page.locator('[data-map-ask] [data-map-zoom="reset"]').click();

  // a tap in the wrong country: scored, the right place lit, the tap marked, what it was on said, the slip named
  await tapAt(page, 85, 35);   // Alder: not Birch, and Alder names a slip
  let now = await look(page);
  c.check(now.done && now.r.where === 'next-door', `a tap on Alder when Birch was asked scored ${now.r && now.r.where}, not the slip next-door`);
  c.check(JSON.stringify(await lit(page)) === '["birch"]' && await page.locator('.item .mk-wrong').count() === 1, `after the answer the lit places are ${JSON.stringify(await lit(page))}, and ${await page.locator('.item .mk-wrong').count()} tap is marked wrong`);
  const missNames = await page.locator('.item .mapsvg text').allTextContents();
  c.check(JSON.stringify(missNames) === '["Birch"]', `after a miss the map names ${JSON.stringify(missNames)}, not the right place Birch`);
  let text = await env.screenText(page);
  c.check(/You tapped: Alder\./.test(text) && /tapped the country next to it/.test(text) && /Not this one/.test(text) && /The answer: Birch/.test(text), 'the feedback does not say what the tap was on, the slip and the right place');
  c.check(await page.locator(`${MAP}`).count() === 0 && await page.locator('.item .mapsvg').count() === 1, 'the map still answers taps after the answer');
  await env.inspect(c, page, 'the feedback of a tap on a map');
  const before = await env.screenText(page);
  await page.waitForTimeout(WAIT_MS);
  c.check(before === await env.screenText(page), 'the screen changed by itself after a tap');
  await next(page);

  // Cedar: a tap inside the hole of Alder is Cedar, not Alder
  c.check((await look(page)).key === 't-cedar', 'the second question is not the tap on Cedar');
  await tapAt(page, 85, 70);
  now = await look(page);
  c.check(now.r.where === 'ok' && JSON.stringify(await lit(page)) === '["cedar"]' && await page.locator('.item .mk-right').count() === 1, `a tap in the hole of Alder, asked for Cedar, scored ${now.r && now.r.where} and lit ${JSON.stringify(await lit(page))}`);
  const rightNames = await page.locator('.item .mapsvg text').allTextContents();
  c.check(JSON.stringify(rightNames) === '["Cedar"]', `after a right tap the map names ${JSON.stringify(rightNames)}, not the place lit, Cedar`);
  landFill = await fillOf(page, '.item .mp-country.lit');
  blankFill = await fillOf(page, '.item .mp-country:not(.lit)');
  // the border between two countries stands out from the countries: at least 3 to 1, the contrast of a line a learner has to see (WCAG 1.4.11)
  const border = await page.evaluate(() => { const el = document.querySelector('.item .mp-country:not(.lit)'), css = getComputedStyle(el); return [css.stroke, css.fill]; });
  const light = rgb => { const [r, g, b] = (rgb.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(v => { const u = Number(v) / 255; return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const [hi, lo] = [light(border[0]), light(border[1])].sort((a, b) => b - a), ratio = (hi + 0.05) / (lo + 0.05);
  c.check(ratio >= 3, `the border of a country (${border[0]}) is ${ratio.toFixed(1)} to 1 against the country (${border[1]}), under 3 to 1`);
  await next(page);

  // Speck: a dot found within a radius of its point, and the zoom the tap was made at is kept
  c.check((await look(page)).key === 't-speck', 'the third question is not the tap on Speck');
  await page.locator('[data-map-ask] [data-map-zoom="in"]').click();
  const zoomIn = await viewBox(page);
  c.check(zoomIn[2] < 200 && zoomIn[2] > 150, `a tap on the zoom button leaves the map ${zoomIn[2]} units across, not about 190`);
  await tapAt(page, 201, 141);   // on the dot, from a zoomed map: the tap must be read on the map as it is drawn now
  now = await look(page);
  const stored = now.a.where;
  c.check(now.r.where === 'ok' && Array.isArray(stored) && stored.length === 3 && stored[2] > 1.5 && Math.abs(stored[0] - 201) < 3 && Math.abs(stored[1] - 141) < 3, `a tap on the dot of Speck from a zoomed map scored ${now.r && now.r.where} and was stored as ${JSON.stringify(stored)}`);
  await next(page);

  // the sea: the land under the sea's outline is not the sea
  c.check((await look(page)).key === 't-sea', 'the fourth question is not the tap on the sea');
  await tapAt(page, 258, 50);   // on the circle of Crumb, in Birch: inside the outline of the sea, which covers the whole map, and still not the sea
  now = await look(page);
  c.check(now.done && now.r.where === 'no' && JSON.stringify(await lit(page)) === '["sea"]', `a tap on land, asked for the sea, scored ${now.r && now.r.where}`);
  c.check(/You tapped: Crumb\./.test(await env.screenText(page)), `a tap on the circle of Crumb is named ${(await env.screenText(page)).match(/You tapped: [^.]*/)}, not Crumb`);
  waterFills = [await fillOf(page, '.item .mp-sea.lit'), await fillOf(page, '.item .map-water')];
  await next(page);

  // the missed ones come back, and are answered right
  now = await look(page);
  c.check(now.redo && now.key === 't-birch', 'the missed tap does not come back');
  await tapAt(page, 215, 70);
  c.check((await look(page)).r.where === 'ok', 'a tap in Birch, asked for Birch, did not score right');
  await next(page);
  c.check((await look(page)).redo && (await look(page)).key === 't-sea', 'the missed tap on the sea does not come back');
  await tapAt(page, 150, 190);
  c.check((await look(page)).r.where === 'ok' && JSON.stringify(await lit(page)) === '["sea"]', 'a tap on the water, asked for the sea, did not score right');
  await next(page);

  // water is drawn in a water color, lit or not, and never the land's
  c.check(waterFills[0] !== landFill && waterFills[0] !== waterFills[1] && waterFills[1] !== blankFill && waterFills[0] !== blankFill, `the colors of lit water, water, lit land and land are ${[waterFills[0], waterFills[1], landFill, blankFill].join(' / ')}: they should all differ`);

  // the second group: a neighbor and its water; Landlocked; a lit place named
  await env.goOn(page);   // the break
  c.check((await look(page)).key === 'b-alder', 'the first question of the second group is not the neighbors of Alder');
  c.check(await page.locator('[data-place-landlocked]').count() === 0, 'Landlocked is offered before a neighbor is tapped');
  await tapAt(page, 215, 70);   // Birch, next to Alder
  c.check(!(await look(page)).done && await page.locator('[data-place-landlocked]').count() === 1 && await page.locator('[data-feedback]').count() === 0, 'after the neighbor is tapped the question is over, or Landlocked is not offered, or the feedback is shown');
  c.check(/water it touches/.test(await env.screenText(page)) && await page.locator('.item .mk-neutral').count() === 1, 'the screen does not ask for the water, or the neighbor tapped is not marked');
  c.check(/What borders Alder\?/.test(await env.screenText(page)), 'a neighbor and its water does not ask "What borders Alder?"');
  // Undo takes the neighbor's tap back: no mark, no Landlocked, the question waits for a neighbor again; then the neighbor is tapped again
  await page.locator('[data-place-undo]').click();
  c.check(!(await look(page)).done && await page.locator('.item .mk-neutral').count() === 0 && await page.locator('[data-place-landlocked]').count() === 0 && await page.locator('[data-place-undo]').count() === 0,
    'Undo does not take the neighbor\'s tap back');
  await tapAt(page, 215, 70);   // Birch again
  await tapAt(page, 150, 190);   // the sea
  now = await look(page);
  c.check(now.done && now.r.borders === 'ok', `a neighbor and the sea of Alder scored ${now.r && now.r.borders}`);
  c.check(JSON.stringify((await lit(page)).sort()) === '["birch","cedar","sea"]' && await page.locator('.item .mk-right').count() === 2, `after the answer the lit places are ${JSON.stringify(await lit(page))}, and ${await page.locator('.item .mk-right').count()} taps are marked right`);
  text = await env.screenText(page);
  c.check(/A place next to Alder: Birch and Cedar\. Water: The sea\./.test(text), 'the answer does not name the neighbors and the water');
  await next(page);
  c.check((await look(page)).key === 'b-cedar', 'the second question is not the neighbors of Cedar');
  await tapAt(page, 30, 30);   // Alder, around Cedar
  await page.locator('[data-place-landlocked]').click();
  now = await look(page);
  c.check(now.done && now.r.borders === 'ok' && JSON.stringify(now.a.borders.w) === '"none"', `Landlocked for Cedar scored ${now.r && now.r.borders} and was stored as ${JSON.stringify(now.a.borders)}`);
  c.check(/Landlocked\./.test(await env.screenText(page)) && await page.locator('.item .opt.sel.right').count() === 1, 'the answer for Cedar does not say Landlocked, or the button is not marked right');
  await next(page);
  c.check((await look(page)).key === 'n-cedar', 'the third question is not the lit place');
  c.check(JSON.stringify(await lit(page)) === '["cedar"]' && await page.locator('.item .mapsvg text').count() === 0, 'the lit place is not lit, or the map names it');
  await page.locator('input[data-recall="name"]').fill('cedar');
  await page.locator('[data-recall-answer="name"]').click();
  c.check((await look(page)).r.name === 'ok', 'the lit place named from memory did not score right');
  const namedAfter = await page.locator('.item .mapsvg text').allTextContents();
  c.check(JSON.stringify(namedAfter) === '["Cedar"]', `once the lit place is named from memory the map names ${JSON.stringify(namedAfter)}, not Cedar`);
  await next(page);

  // the check: nothing lit or marked right or wrong until the end; Landlocked wrong for a country that touches the sea
  await env.goOn(page);   // the break
  await env.goOn(page);   // the check's first screen
  c.check((await look(page)).key === 'c-tap', 'the first question of the check is not the tap on Birch');
  await tapAt(page, 215, 70);
  c.check((await look(page)).done && await page.locator('[data-feedback]').count() === 0 && (await lit(page)).length === 0 && await page.locator('.item .mk-neutral').count() === 1 && await page.locator('.item .mk-right, .item .mk-wrong').count() === 0, 'a check shows what was tapped lit or marked right or wrong before its end');
  await next(page);
  await tapAt(page, 30, 30);   // Alder, next to Birch
  await page.locator('[data-place-landlocked]').click();   // Birch touches the sea: wrong
  await next(page);
  await page.locator('input[data-recall="name"]').fill('Alder');
  await page.locator('[data-recall-answer="name"]').click();
  await next(page);
  text = await env.screenText(page);
  c.check(/2 of 3: not yet/.test(text), `the result of the check is not 2 of 3: not yet (${text.slice(0, 120)})`);
  c.check(/You chose: Landlocked\./.test(text) && /Birch touches The sea\./.test(text), 'the result does not say that Landlocked was chosen for a country that touches the sea');
  c.check((await page.locator('.resitem .mp.lit').count()) >= 3 && await page.locator('.resitem .mk-right').count() === 2 && await page.locator('.resitem .mk-wrong').count() === 0, `the answers at the end do not show the right places lit and the taps marked (${await page.locator('.resitem .mk-right').count()} right, ${await page.locator('.resitem .mk-wrong').count()} wrong)`);
  await env.inspect(c, page, 'the result of a check with maps');

  // what is stored: numbers only, under the usual keys
  const items = JSON.parse((await env.storage(page))['pl:atlas:items'] || '{}');
  const tries = Object.values(items).flatMap(e => e.tries);
  const numbers = v => typeof v === 'number' || v === 'none' || (Array.isArray(v) && v.every(numbers)) || (v && typeof v === 'object' && !Array.isArray(v) && Object.values(v).every(numbers));
  c.check(tries.length >= 8 && tries.every(t => Object.values(t.a).every(a => typeof a === 'string' || numbers(a))), 'a try stores more than the numbers of the taps (and the words typed)');
  await context.close();

  // a phone's width and a desktop's: no sideways scroll, nothing cut off, plain words, with the map in front of the learner and with its feedback
  for (const width of [360, 1200]) {
    const wide = await env.freshPage(c, width);
    await openAtlas(env, wide.page);
    await jump(wide.page, STEP.labelled);
    await env.inspect(c, wide.page, `${width}px the labelled map`);
    await jump(wide.page, STEP.borders);
    await env.inspect(c, wide.page, `${width}px a question with a blank map`);
    await tapAt(wide.page, 215, 70);
    await env.inspect(c, wide.page, `${width}px a question with the first tap made`);
    await tapAt(wide.page, 150, 190);
    await env.inspect(c, wide.page, `${width}px the feedback of a neighbor and its water`);
    await wide.context.close();
  }
  return c;
}
export const ATLAS_CHECKS = { X46 };
