// What a phone's screen holds of a question asked on a map, on the real subject Geography (lesson 16, western Europe: its map is the tall, crowded one the
// layout has to fit): called by X47 (tests/e2e-places.mjs). A neighbor and its water keeps Landlocked and Next on the screen, and the map where it is while
// the line of help changes; a lit place named from memory shows its box and its button; a country the size of a fingertip (Luxembourg) can be hit; and the
// feedback of a neighbor and its water lights and names only the water tapped and the water that is right. tests/e2e-controls.mjs seeds a fault for each.

const PHONE = { width: 390, height: 844 };
const NARROW = { width: 360, height: 800 };
const CLEAR = 8;   // the room a control keeps above the bar of Next, in pixels
const MAP = '[data-map-ask] .mapsvg';

// the step of Geography's lesson 16 whose first question is of this form ('tap', 'name', 'border'), moved to
const goToForm = (page, form) => page.evaluate(f => {
  for (let at = 0; at < 12; at++) {
    moveLesson(at);
    if (typeof Q !== 'undefined' && Q && Q.list && Q.list.length && Q.list[Q.at].item.values && Q.list[Q.at].item.values.form === f) return at;
  }
  return -1;
}, form);
const rectOf = (page, selector) => page.evaluate(s => {
  const el = document.querySelector(s);
  if (!el) return null;
  const b = el.getBoundingClientRect();
  return { top: b.top, bottom: b.bottom, left: b.left, right: b.right, height: b.height };
}, selector);
const screenOf = (page, x, y) => page.evaluate(([x, y]) => {
  const svg = document.querySelector('[data-map-ask] .mapsvg'), p = svg.createSVGPoint();
  p.x = x; p.y = y;
  const s = p.matrixTransform(svg.getScreenCTM());
  return [s.x, s.y];
}, [x, y]);
const tapUnit = async (page, [x, y]) => { const [px, py] = await screenOf(page, x, y); await page.mouse.click(px, py); };
const thePlace = page => page.evaluate(() => Q.list[Q.at].item.values.place);
// the places of western Europe, from the page itself: a point inside a neighbor of this country, and one on the water it touches and one it does not
const aim = (page, place) => page.evaluate(place => {
  const map = FC.maps['europe-west'], inside = p => p.at && placeContains(map, p, p.at[0], p.at[1], 1), of = mapPlace(map, place);
  const neighbor = of.neighbors.map(id => mapPlace(map, id)).find(p => !p.dot && inside(p));
  const seas = map.places.filter(p => ['sea', 'ocean'].includes(p.kind) && inside(p));
  const right = seas.find(p => of.water.includes(p.id)), wrong = seas.find(p => !of.water.includes(p.id));
  return { neighbor: neighbor.at, right: right ? right.at : null, wrong: wrong.at, wrongName: wrong.name, wrongId: wrong.id, water: of.water };
}, place);

// the lesson at its first neighbor-and-water question of a country that touches a sea (a landlocked one is answered Landlocked and passed); its country, or null
async function aBorderOfASea(page) {
  await goToForm(page, 'border');
  for (let seen = 0; seen < 5; seen++) {
    const place = await thePlace(page), at = await aim(page, place);
    if (at.water.length) return place;
    await tapUnit(page, at.neighbor);
    await page.locator('[data-place-landlocked]').click();
    await page.locator('#qNext').click();
  }
  return null;
}

export async function fitChecks(env, c) {
  /* ---------- a neighbor and its water on a phone: Landlocked and Next on the screen, the map where it was ---------- */
  for (const size of [PHONE, NARROW]) {
    const { context, page } = await env.freshPage(c, size.width);
    await page.setViewportSize(size);
    await env.openSubject(page, 'geography');
    await env.clickVisible(page, '#screen [data-l="l16"]');
    const place = await aBorderOfASea(page);
    c.check(place !== null, `${size.width}px: no neighbor-and-water question of a country on a sea in Geography's lesson 16`);
    if (place) {
      const at = await aim(page, place), before = await rectOf(page, '[data-map-ask]');
      await tapUnit(page, at.neighbor);
      const after = await rectOf(page, '[data-map-ask]'), landlocked = await rectOf(page, '[data-place-landlocked]'), bar = await rectOf(page, '.actbar');
      c.check(before && after && Math.abs(before.top - after.top) < 1 && Math.abs(before.height - after.height) < 1,
        `${size.width}px: the map moved from ${before && Math.round(before.top)} to ${after && Math.round(after.top)} px when the line of help changed after the first tap`);
      if (size === PHONE) {
        c.check(landlocked && bar && landlocked.top >= 0 && landlocked.bottom <= bar.top - CLEAR && await page.evaluate(() => scrollY) === 0,
          `${size.width}x${size.height}: Landlocked is at ${landlocked && Math.round(landlocked.top)} to ${landlocked && Math.round(landlocked.bottom)} px, the bar of Next from ${bar && Math.round(bar.top)}: it is not on the screen without scrolling`);
        c.check(await page.locator('#qNext').isVisible() && bar.bottom <= size.height + 1, `${size.width}x${size.height}: Next is not on the screen`);
        await tapUnit(page, at.right || at.wrong);
        const done = await page.evaluate(() => Q.cur.done);
        c.check(done, `${size.width}x${size.height}: the water tapped did not answer the question`);
      }
    }
    await context.close();
  }

  /* ---------- a lit place named from memory: the box and the button on the screen ---------- */
  {
    const { context, page } = await env.freshPage(c, PHONE.width);
    await page.setViewportSize(PHONE);
    await env.openSubject(page, 'geography');
    await env.clickVisible(page, '#screen [data-l="l16"]');
    await goToForm(page, 'name');
    const box = await rectOf(page, 'input[data-recall]'), button = await rectOf(page, '[data-recall-answer]'), bar = await rectOf(page, '.actbar');
    c.check(box && button && bar && box.top >= 0 && button.bottom <= bar.top - CLEAR && await page.evaluate(() => scrollY) === 0,
      `${PHONE.width}x${PHONE.height}: the box to name a lit place is at ${box && Math.round(box.top)} px and its button ends at ${button && Math.round(button.bottom)}, the bar of Next from ${bar && Math.round(bar.top)}: they are not on the screen without scrolling`);
    await context.close();
  }

  /* ---------- a country the size of a fingertip, tapped on the whole map ---------- */
  {
    const { context, page } = await env.freshPage(c, PHONE.width);
    await page.setViewportSize(PHONE);
    await env.openSubject(page, 'geography');
    await env.clickVisible(page, '#screen [data-l="l16"]');
    await goToForm(page, 'tap');
    // half the radius from the east edge of Luxembourg, on Germany: a finger's width of error
    const point = await page.evaluate(() => {
      const map = FC.maps['europe-west'], lux = mapPlace(map, 'luxembourg'), reach = map.size[0] * PLACE_SMALL_TAP;
      return [lux.box[2] + reach * 0.5, (lux.box[1] + lux.box[3]) / 2];
    });
    const asked = await thePlace(page);
    await page.locator(MAP).scrollIntoViewIfNeeded();
    await tapUnit(page, point);
    const text = await env.screenText(page), score = await page.evaluate(() => Q.cur.score && Q.cur.score.ok);
    // asked for Luxembourg, or for Germany (the country the tap is inside, which the small radius never takes a tap from), it is right; asked for any other
    // place, it is a miss named Luxembourg
    const right = ['luxembourg', 'germany'].includes(asked);
    c.check(right ? score === true : /You tapped: Luxembourg\./.test(text),
      `a tap a finger's width beside Luxembourg on the whole map, asked for ${asked}, ${right ? 'did not score right' : `is named "${(text.match(/You tapped: [^.]*/) || ['nothing'])[0]}", not Luxembourg`}`);
    await context.close();
  }

  /* ---------- the feedback of a neighbor and its water: the water tapped and the water that is right, named ---------- */
  {
    const { context, page } = await env.freshPage(c, PHONE.width);
    await page.setViewportSize(PHONE);
    await env.openSubject(page, 'geography');
    await env.clickVisible(page, '#screen [data-l="l16"]');
    const place = await aBorderOfASea(page);
    if (place) {
      const at = await aim(page, place);
      await tapUnit(page, at.neighbor);
      await tapUnit(page, at.wrong);
      const shown = await page.evaluate(() => {
        const map = FC.maps['europe-west'], litIds = [...document.querySelectorAll('.item .mp.lit')].map(e => e.dataset.place);
        const water = litIds.filter(id => ['sea', 'ocean', 'strait'].includes(mapPlace(map, id).kind));
        const names = [...document.querySelectorAll('.item .mapsvg text.ml')].map(t => t.textContent), of = Q.list[Q.at].item.values.place;
        return { water, names, wanted: [...new Set([of, ...placeNeighborsOf(map, of), ...water])].map(id => mapPlace(map, id).name) };
      });
      const want = [...new Set([...at.water, at.wrongId])].sort();
      c.check(JSON.stringify([...shown.water].sort()) === JSON.stringify(want), `the feedback of ${place} lights the water ${shown.water.join(', ')}, not the water it touches and the water tapped (${want.join(', ')})`);
      c.check(JSON.stringify([...shown.names].sort()) === JSON.stringify([...shown.wanted].sort()) && shown.names.length > 0, `the feedback of ${place} names ${JSON.stringify(shown.names)} on the map, not the place, its neighbors and the water lit (${JSON.stringify(shown.wanted)})`);
    } else c.check(false, 'no neighbor-and-water question of a country on a sea in Geography\'s lesson 16');
    await context.close();
  }
}
