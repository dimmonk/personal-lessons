// The pure half of the map block and the place ask (lesson standard 3.7, 3.9): the map data the build wrote (public/maps/), a tap scored by the shape
// it lands in on the real data (known cities, seas and rivers, put on the map with the same projections the build used), the radius around a
// microstate's dot, a tap off every shape, the neighbors and water the build stored, a neighbor and its water scored, and what the blank map shows
// (no names). No browser. Ends with seeded faults: each is a change to the source of place.js that must turn the checks red.
// Run: node tests/place-pure.mjs
import { readFile, readdir } from 'node:fs/promises';
import { loadApp } from './load-app.mjs';
import { REGIONS } from '../tools/maps/regions.mjs';

// where a longitude and latitude fall on a region's map, by the projection the build used (part: 'main', or an inset of the United States)
const projectOf = (region, part = null) => { const R = REGIONS.find(r => r.id === region), p = R.parts.find(x => !part || x.id === part); return (lon, lat) => p.project(lon, lat).map(v => Math.round(v * 10) / 10); };

async function suite(app) {
  const failures = [];
  let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
  const { FC, mapOf, mapPlace, placeContains, placeAt, scorePlace, placeRightText, placeAskProblems, mapBlockProblems, mapHtml, placeHtml, placeMissHtml, placeGeom, PLACE_DOT_TAP, PLACE_SMALL_TAP, SAY } = app;
  const ask = (right, extra = {}) => ({ id: 'a', kind: 'place', prompt: 'x', map: 'europe-west', right, ...extra });
  const border = (of, map = 'europe-west') => ({ id: 'b', kind: 'place', mode: 'neighbor-water', prompt: 'x', map, of });
  const score = (a, tap) => scorePlace({}, a, tap);
  const at = (region, part, lon, lat, k = 1) => [...projectOf(region, part)(lon, lat), k];

  /* ---------- the data is there, frozen, and within its budget ---------- */
  same(Object.keys(FC.maps).sort(), ['europe-west', 'isles', 'us', 'world'], 'the regions registered (the test region among them)');
  check(Object.isFrozen(FC.maps) && Object.isFrozen(FC.maps.world) && Object.isFrozen(FC.maps.world.rings), 'a region is frozen like every other record');
  let duplicate = false;
  try { FC.map('world', FC.maps.world); } catch (e) { duplicate = /registered twice/.test(e.message); }
  check(duplicate, 'a region registered twice is refused');
  const files = (await readdir(new URL('../public/maps/', import.meta.url))).filter(f => f.endsWith('.js'));
  let bytes = 0;
  for (const f of files) {
    const text = await readFile(new URL(`../public/maps/${f}`, import.meta.url), 'utf8');
    bytes += Buffer.byteLength(text);
    check(text.split('\n').length < 800, `${f} is under 800 lines`);
  }
  check(bytes < 600 * 1024, `the maps are ${Math.round(bytes / 1024)} KB, over the design's budget of about 600 KB`);
  for (const id of ['world', 'us', 'europe-west']) {
    const map = mapOf(id), [w, h] = map.size;
    const outside = map.places.filter(p => p.at && (p.at[0] < 0 || p.at[0] > w || p.at[1] < 0 || p.at[1] > h));
    same(outside.map(p => p.id), [], `${id}: every label point is on the map`);
    const own = map.places.filter(p => p.rings.length && p.at && !p.dot && !placeContains(map, mapPlace(map, p.id), p.at[0], p.at[1], 1) && !['river', 'sea', 'ocean', 'region'].includes(p.kind));
    same(own.map(p => p.id), [], `${id}: the label point of a shape is inside it`);
    check(map.places.every(p => p.rings.every(i => Number.isInteger(i) && i >= 0 && i < map.rings.length)) && new Set(map.places.map(p => p.id)).size === map.places.length, `${id}: places name rings that exist and have ids of their own`);
    check(map.places.filter(p => map.land.includes(p.kind) && p.kind !== 'continent').every(p => Array.isArray(p.neighbors) && Array.isArray(p.water)), `${id}: every land place has its neighbors and water stored`);
  }

  /* ---------- real places on the real map ---------- */
  const eu = mapOf('europe-west'), inEu = (id, lon, lat, k = 1) => placeContains(eu, mapPlace(eu, id), ...at('europe-west', null, lon, lat, k).slice(0, 2), k);
  const cities = { belgium: [4.35, 50.85], france: [2.35, 48.85], switzerland: [8.55, 47.37], portugal: [-7.9, 38.57], spain: [-3.7, 40.42], italy: [9.19, 45.46], germany: [13.4, 52.52],
    austria: [16.37, 48.21], netherlands: [4.9, 52.37], luxembourg: [6.13, 49.61], 'united-kingdom': [-0.13, 51.5], ireland: [-6.26, 53.35] };
  for (const [id, [lon, lat]] of Object.entries(cities)) {
    check(inEu(id, lon, lat), `a tap on the capital of ${id} is inside ${id}`);
    same(placeAt(eu, ...at('europe-west', null, lon, lat).slice(0, 2), 1, 'country'), id, `the place a tap on the capital of ${id} is on`);
  }
  check(!inEu('germany', 4.35, 50.85) && !inEu('france', 8.55, 47.37), 'a tap in Belgium is not in Germany, and one in Switzerland is not in France');
  check(inEu('alps', 8.0, 46.5) && inEu('alps', 11.4, 47.0) && !inEu('alps', 2.35, 48.85), 'the Alps hold the Swiss and Tyrolean Alps and not Paris');
  check(inEu('north-sea', 3.0, 55.0) && inEu('bay-of-biscay', -5.0, 45.5) && inEu('english-channel', -1.0, 50.0) && inEu('tyrrhenian', 12.0, 39.5) && inEu('adriatic', 15.0, 43.0), 'the seas hold a point in the middle of each');
  check(!inEu('north-sea', 4.9, 52.37) && !inEu('mediterranean', 2.35, 48.85), 'a sea never holds land: Amsterdam is not in the North Sea');
  // a tap off every shape finds nothing, scores no, and says so
  const lone = mapOf('us'), blank = [lone.size[0] - 2, 3, 1];
  const none = lone.places.every(p => !placeContains(lone, p, blank[0], blank[1], 1)) ? blank : null;
  check(none !== null, 'a corner of the United States map (the sky over Canada\'s north) is on no place: the point used for a tap off every shape');
  const lostAsk = { id: 'a', kind: 'place', prompt: 'x', map: 'us', right: 'texas' };
  same(score(lostAsk, none), 'no', 'a tap off every shape scores no');
  same(placeAt(lone, none[0], none[1], 1), null, 'a tap off every shape is on no place');
  check(placeMissHtml({ meta: { lists: {} } }, lostAsk, none, 'no').includes(SAY.placeNotAny), 'a tap off every shape says that it was not on any place');

  /* ---------- scoring ---------- */
  same(score(ask('belgium'), at('europe-west', null, 4.35, 50.85)), 'ok', 'a tap in the right country');
  same(score(ask('belgium'), at('europe-west', null, 2.35, 48.85)), 'no', 'a tap in another country');
  same(score(ask(['belgium', 'luxembourg']), at('europe-west', null, 6.13, 49.61)), 'ok', 'a tap in either of two right places');
  same(score(ask('belgium'), at('europe-west', null, 4.35, 50.85).slice(0, 2)), 'no', 'a tap that is not [x, y, zoom] scores no and does not stop the app');
  same(score(ask('belgium'), undefined), 'no', 'no tap scores no');
  same(score(ask('belgium', { slips: { france: 'next-door' } }), at('europe-west', null, 2.35, 48.85)), 'next-door', 'a tap in a place that names a slip');
  same(score(ask('belgium', { slips: { france: 'next-door' } }), at('europe-west', null, 13.4, 52.52)), 'no', 'a tap in a place with no slip is a plain miss');
  same(placeRightText(ask(['belgium', 'luxembourg'])), 'Belgium or Luxembourg', 'the answer in words');
  // a microstate is a dot with a radius that shrinks as the map is zoomed in
  const vat = mapPlace(eu, 'vatican-city'), vx = vat.dot[0] / 10, vy = vat.dot[1] / 10, r = eu.size[0] * PLACE_DOT_TAP;
  same(score(ask('vatican-city'), [vx + r * 0.9, vy, 1]), 'ok', 'a tap just inside the dot\'s radius');
  same(score(ask('vatican-city'), [vx + r * 1.2, vy, 1]), 'no', 'a tap just outside the dot\'s radius');
  same(score(ask('vatican-city'), [vx + r * 0.5, vy, 4]), 'no', 'half the radius away at zoom 4 is outside (the radius is a quarter)');
  same(score(ask('vatican-city'), [vx + r * 0.2, vy, 4]), 'ok', 'a fifth of the radius away at zoom 4 is inside');
  same(score(ask('italy'), at('europe-west', null, 14.27, 40.85)), 'ok', 'a tap in Italy away from the dot is Italy');
  // a microstate's circle is drawn over the country it lies in: a tap on the circle is named for the microstate, and one well away from it for the country
  const sm = mapPlace(eu, 'san-marino'), smx = sm.dot[0] / 10, smy = sm.dot[1] / 10;
  same([placeAt(eu, smx, smy, 1, 'country'), placeAt(eu, smx + r * 0.5, smy, 1, 'country'), placeAt(eu, smx - r * 1.8, smy, 1, 'country')], ['san-marino', 'san-marino', 'italy'],
    'a tap on the circle of San Marino is named San Marino, not Italy under it, and one well away from it is Italy');
  same(placeAt(eu, smx + r * 0.5, smy, 4, 'country'), 'italy', 'a quarter of the circle at zoom 4 is a quarter of the way out: half the radius away is off the circle');
  // a ground place no bigger than a fingertip (Luxembourg) is found within a radius of its outline, whatever larger place the tap is on, and the radius shrinks
  // as the map is zoomed in; a place bigger than a fingertip (Belgium) has no such radius
  const lux = mapPlace(eu, 'luxembourg'), [lx0, ly0, lx1, ly1] = lux.box, lmid = (ly0 + ly1) / 2, reach = eu.size[0] * PLACE_SMALL_TAP, bel = mapPlace(eu, 'belgium'), [bx0, , , by1] = bel.box;
  same([score(ask('luxembourg'), [lx1 + reach * 0.8, lmid, 1]), score(ask('luxembourg'), [lx1 + reach * 1.3, lmid, 1]), score(ask('luxembourg'), [lx1 + reach * 0.8, lmid, 2]), score(ask('luxembourg'), [lx1 + reach * 0.4, lmid, 2]), score(ask('luxembourg'), [lx1 + reach * 0.1, lmid, 4])],
    ['ok', 'no', 'no', 'ok', 'no'], 'a tap near the outline of Luxembourg, on the country beside it, is Luxembourg; a little further off is not, the radius is half as wide on a map zoomed in twice, and Luxembourg is no smaller than a fingertip zoomed in 4 times');
  same([placeAt(eu, lx1 + reach * 0.8, lmid, 1, 'country'), placeAt(eu, lx0 - reach * 0.8, lmid, 1, 'country'), placeAt(eu, lx1 + reach * 1.3, lmid, 1, 'country')], ['luxembourg', 'luxembourg', 'germany'],
    'the place a tap beside Luxembourg is on is named Luxembourg, and one further off is the country it is on');
  same([score(ask('germany'), [lx1 + reach * 0.8, lmid, 1]), score(ask('belgium'), [bx0 - reach * 0.8, by1 - 5, 1]), score(ask('belgium'), [(bx0 + mapPlace(eu, 'belgium').box[2]) / 2, (bel.box[1] + by1) / 2 - 20, 1])], ['ok', 'no', 'ok'],
    'the radius of a small place takes no tap from the place it is on when that is the one asked, and gives none to a place bigger than a fingertip');
  // a tap at sea within a fingertip of a shore is on the land of that shore, when land is asked: a coast at a phone's size is thinner than a finger (Portugal's
  // west coast, from its westernmost point); further out, on a zoomed map, or when the water is what is asked, it is the sea
  const pt = mapPlace(eu, 'portugal'), rings = pt.rings.map(i => placeGeom(eu).rings[i]), ring = rings.reduce((a, b) => b.pts.length > a.pts.length ? b : a).pts, wi = [...Array(ring.length / 2).keys()].reduce((b, i) => ring[2 * i] < ring[2 * b] ? i : b, 0);
  const [wx, wy] = [ring[2 * wi], ring[2 * wi + 1]], off = f => [wx - reach * f, wy];
  same([placeAt(eu, ...off(0.6), 1), placeAt(eu, ...off(0.6), 1, 'country'), placeAt(eu, ...off(1.4), 1, 'country'), placeAt(eu, ...off(0.6), 2, 'country'), placeAt(eu, ...off(0.6), 1, 'ocean')],
    ['atlantic', 'portugal', 'atlantic', 'atlantic', 'atlantic'], 'a tap at sea just off Portugal is the Atlantic, and Portugal when a country is asked; further out, or zoomed in twice, it is the Atlantic');
  same([score(ask('portugal'), [...off(0.6), 1]), score(ask('portugal'), [...off(1.4), 1]), score(ask('spain'), [...off(0.6), 1])], ['ok', 'no', 'no'],
    'asked for Portugal, a tap just off its coast scores right and one further out does not; it is never Spain, a country further away');
  // a place with a hole (the isles: Cedar inside Alder)
  const isles = mapOf('isles');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'isles', right: 'cedar' }, [85, 70, 1]), 'ok', 'a tap in the hole of a country is in the country inside it');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'isles', right: 'alder' }, [85, 70, 1]), 'no', 'and not in the country with the hole');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'isles', right: 'alder' }, [30, 30, 1]), 'ok', 'a tap in the country around the hole');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'isles', right: 'sea' }, [250, 150, 1]), 'ok', 'a tap on the sea');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'isles', right: 'sea' }, [215, 70, 1]), 'no', 'a tap on land is not on the sea, though the sea\'s outline covers it');
  // rivers: a band around the line
  const us = mapOf('us'), ms = mapPlace(us, 'mississippi-river'), river = ms.rings.map(i => us.rings[i]).sort((a, b) => b.length - a.length)[0], pts = [];
  for (let i = 0, x = 0, y = 0; i < river.length; i += 2) { x += river[i]; y += river[i + 1]; pts.push([x / 10, y / 10]); }
  // the band: a point 0.8 of its width from the line's end is inside it, and one 1.5 of its width from it, in the direction that goes furthest from the
  // rest of the line (found here by measuring the line, not by asking place.js), is outside
  const band = us.size[0] * 0.014, end = pts[0], gap = p => Math.min(...pts.slice(1).map((q, i) => { const a = pts[i], dx = q[0] - a[0], dy = q[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy); }));
  const around = d => Array.from({ length: 36 }, (_, i) => [end[0] + Math.cos(i / 36 * 2 * Math.PI) * d, end[1] + Math.sin(i / 36 * 2 * Math.PI) * d]);
  const away = around(band * 1.5).sort((p, q) => gap(q) - gap(p))[0], angle = Math.atan2(away[1] - end[1], away[0] - end[0]);
  check(gap(away) > band * 1.1, 'the end of the Mississippi has a side that goes well clear of the rest of the line (the test\'s own measure)');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'us', right: 'mississippi-river' }, [end[0] + Math.cos(angle) * band * 0.8, end[1] + Math.sin(angle) * band * 0.8, 1]), 'ok', 'a tap beside the river, inside its band');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'us', right: 'mississippi-river' }, [away[0], away[1], 1]), 'no', 'a tap a little outside the river\'s band');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'us', right: 'mississippi-river' }, [away[0], away[1], 2]), 'no', 'and the band is narrower, not wider, when the map is zoomed in');
  const stl = at('us', 'lower48', -90.2, 38.6);
  check(placeContains(us, ms, stl[0], stl[1], 1) && !placeContains(us, mapPlace(us, 'ohio-river'), stl[0], stl[1], 1), 'the Mississippi at St. Louis is the Mississippi and not the Ohio');
  // the Great Lakes, states, insets, the Pacific
  const inUs = (id, lon, lat, part = 'lower48') => { const p = at('us', part, lon, lat); return placeContains(us, mapPlace(us, id), p[0], p[1], 1); };
  check(inUs('lake-michigan', -87.0, 44.0) && inUs('lake-superior', -87.5, 47.5) && !inUs('lake-erie', -87.0, 44.0), 'a tap in the middle of each Great Lake');
  check(inUs('colorado', -105.5, 39.0) && inUs('texas', -99.0, 31.0) && inUs('illinois', -89.5, 40.0) && inUs('washington', -120.5, 47.5) && inUs('florida', -81.5, 28.0), 'a tap in the middle of five states');
  check(inUs('hawaii', -155.5, 19.6, 'hawaii') && inUs('alaska', -150.0, 64.0, 'alaska') && !inUs('alaska', -105.5, 39.0), 'Hawaii and Alaska are found on their insets');
  check(inUs('pacific', -126.0, 36.0) && !inUs('pacific', -121.5, 36.8) && inUs('atlantic', -70.0, 38.0) && inUs('gulf-of-mexico', -90.0, 26.0), 'the Pacific, the Atlantic and the Gulf of Mexico, and not the land');
  /* ---------- coasts, straits and canals (3.7, 3.11) ---------- */
  // a coast is the shore of some states along one water, held within a band of 4% of the map's width: the shore of California, New Jersey and Texas is on
  // the West, East and Gulf Coast, and the heart of the country is on none
  check(inUs('west-coast', -118.5, 34.0) && inUs('east-coast', -74.4, 39.4) && inUs('gulf-coast', -94.8, 29.3), 'a tap on the shore of California, New Jersey and Texas is on the West, the East and the Gulf Coast');
  check(!inUs('west-coast', -105.0, 39.7) && !inUs('west-coast', -119.8, 39.5) && !inUs('east-coast', -80.0, 40.4) && !inUs('gulf-coast', -74.4, 39.4) && !inUs('east-coast', -94.8, 29.3), 'Denver and Reno are on no coast, Pittsburgh is not on the East Coast, and Atlantic City is not on the Gulf Coast');
  const offshore = at('us', 'lower48', -121.5, 34.0), shore = mapPlace(us, 'west-coast');
  check(placeContains(us, shore, offshore[0], offshore[1], 1) && !placeContains(us, shore, offshore[0], offshore[1], 8), 'a tap at sea off the coast is on it, from a map that is not zoomed, and not from one zoomed in 8 times (the band shrinks)');
  check(shore.line === true && shore.kind === 'coast' && shore.rings.length > 1 && !us.draw.includes('coast') && us.labelled.includes('coast'), 'a coast is lines of the kind coast, named on the labelled map and not drawn on the blank one');
  same(score({ id: 'a', kind: 'place', prompt: 'x', map: 'us', right: 'west-coast' }, at('us', 'lower48', -118.5, 34.0)), 'ok', 'asked for the West Coast, a tap on the shore of California scores right');
  same(placeAt(us, ...at('us', 'lower48', -120.5, 34.0).slice(0, 2), 1), 'pacific', 'a tap near a coast is named for the water or the land it is on, never as the coast');
  check(!mapHtml(us, {}).includes('data-place="west-coast"') && /mp-coast lit" data-place="west-coast"/.test(mapHtml(us, { lit: ['west-coast'] })), 'a coast is not on the blank map, and is drawn once it is lit');
  // a strait is water, with a point at its middle that is found within a radius that shrinks with the zoom (Natural Earth draws it as slivers along its two shores)
  const gib = mapPlace(eu, 'strait-of-gibraltar'), gr = eu.size[0] * PLACE_DOT_TAP, gx = gib.dot[0] / 10, gy = gib.dot[1] / 10;
  same([gib.kind, gib.rings.length > 0, eu.labelled.includes('strait')], ['strait', true, true], 'the Strait of Gibraltar is water of the kind strait, named on the labelled map');
  same([score(ask('strait-of-gibraltar'), [gx, gy, 8]), score(ask('strait-of-gibraltar'), [gx + gr * 0.9, gy, 1]), score(ask('strait-of-gibraltar'), [gx + gr * 1.3, gy, 1]), score(ask('strait-of-gibraltar'), [gx + gr * 0.5, gy, 4])], ['ok', 'ok', 'no', 'no'], 'its middle is found within the radius of a dot, which shrinks as the map is zoomed in');
  same(score(ask('strait-of-gibraltar'), at('europe-west', null, -3.7, 40.4)), 'no', 'Madrid is not the Strait of Gibraltar');
  check(!mapHtml(eu, {}).includes('strait-of-gibraltar') && /mp-dot lit" data-place="strait-of-gibraltar"/.test(mapHtml(eu, { lit: ['strait-of-gibraltar'] })) && /mp-strait lit" data-place="strait-of-gibraltar"/.test(mapHtml(eu, { lit: ['strait-of-gibraltar'] })), 'a strait is not on the blank map (its dot would give it away), and is drawn with its dot once it is lit');
  // a canal, a coast and a river are lines, found within a band that is the more generous the shorter or wider the thing is (the made-up region has a line of each)
  const lineMap = kind => ({ id: `line-${kind}`, name: 'Line', size: [1000, 500], q: 10, land: ['country'], draw: [], labelled: [], rings: [[1000, 1000, 2000, 0]], places: [{ id: 'x', name: 'X', kind, line: true, rings: [0] }] });
  const held = (kind, dy, k = 1) => { const map = lineMap(kind); return placeContains(map, mapPlace(map, 'x'), 200, 100 + dy, k); };
  same([held('river', 13), held('river', 15), held('canal', 19), held('canal', 21), held('coast', 39), held('coast', 41)], [true, false, true, false, true, false], 'a river is held within 1.4% of the map\'s width, a canal within 2% and a coast within 4%');
  same([held('canal', 15, 2), held('canal', 9, 2), held('coast', 15, 4), held('coast', 9, 4)], [false, true, false, true], 'and each band is narrower when the map is zoomed in');
  same(mapPlace(lineMap('canal'), 'x').area, 0, 'a canal has no area');
  // a strait's outline overlaps the coasts on either side, like a sea's, and the land under it is not the strait (a country, and a strait over its corner)
  const steps = pts => pts.flatMap((p, i) => [Math.round((p[0] - (i ? pts[i - 1][0] : 0)) * 10), Math.round((p[1] - (i ? pts[i - 1][1] : 0)) * 10)]);
  const strMap = { id: 'strait-test', name: 'Strait', size: [1000, 500], q: 10, land: ['country'], draw: ['country'], labelled: [],
    rings: [steps([[0, 0], [400, 0], [400, 400], [0, 400]]), steps([[100, 100], [700, 100], [700, 300], [100, 300]])],
    places: [{ id: 'land', name: 'Land', kind: 'country', rings: [0] }, { id: 'gut', name: 'Gut', kind: 'strait', rings: [1], dot: [3900, 2000] }] };
  const inGut = (x, y, k = 1) => placeContains(strMap, mapPlace(strMap, 'gut'), x, y, k);
  same([inGut(550, 200), inGut(250, 200), inGut(380, 200), inGut(380, 200, 8)], [true, false, true, false], 'a tap on the water of a strait is on it, a tap on the land under its outline is not, but one within the radius of its middle is, and less so when the map is zoomed in');
  const wd = mapOf('world'), inWd = (id, lon, lat) => { const p = at('world', null, lon, lat); return placeContains(wd, mapPlace(wd, id), p[0], p[1], 1); };
  check(inWd('africa', 20, 5) && inWd('asia', 100, 50) && inWd('europe', 10, 50) && inWd('south-america', -60, -10) && inWd('antarctica', 0, -80) && inWd('oceania', 134, -25), 'a tap in the middle of the continents');
  check(inWd('asia', 90, 60) && !inWd('europe', 90, 60) && inWd('europe', 40, 56), 'Siberia is Asia and Moscow is Europe: Russia is cut at the Urals');
  check(inWd('atlantic', -60, 30) && inWd('pacific', -150, 0) && inWd('indian', 80, -20) && !inWd('atlantic', 20, 5), 'the oceans, the Sargasso Sea inside the Atlantic, and no ocean on land');
  check(inWd('west-africa', -2, 12) && inWd('southeast-asia', 105, 15) && !inWd('west-africa', 30, 5), 'a tap in the middle of two big regions');

  /* ---------- the borders and water the build stored ---------- */
  const near = (map, id) => mapPlace(map, id).neighbors, wet = (map, id) => mapPlace(map, id).water;
  for (const id of ['germany', 'italy']) check(near(eu, 'switzerland').includes(id), `Switzerland borders ${id}`);
  same([near(eu, 'switzerland'), wet(eu, 'switzerland')], [['austria', 'france', 'germany', 'italy', 'liechtenstein'], []], 'Switzerland: five neighbors and no water');
  same([near(eu, 'belgium'), wet(eu, 'belgium')], [['france', 'germany', 'luxembourg', 'netherlands'], ['north-sea']], 'Belgium: four neighbors and the North Sea');
  same(near(eu, 'portugal'), ['spain'], 'Portugal has one neighbor');
  same(near(eu, 'ireland'), ['united-kingdom'], 'Ireland borders the United Kingdom');
  check(near(eu, 'vatican-city').join() === 'italy' && near(eu, 'monaco').join() === 'france' && near(eu, 'liechtenstein').includes('switzerland') && near(eu, 'andorra').includes('spain'), 'the microstates border the countries around them');
  check(wet(eu, 'france').includes('mediterranean') && wet(eu, 'france').includes('english-channel') && wet(eu, 'france').includes('bay-of-biscay'), 'France touches the Mediterranean, the Channel and the Bay of Biscay');
  check(wet(eu, 'italy').includes('adriatic') && wet(eu, 'italy').includes('tyrrhenian') && !wet(eu, 'austria').length, 'Italy touches the Adriatic and the Tyrrhenian Sea; Austria touches none');
  check(Object.values(eu.places).every(p => !p.neighbors || p.neighbors.every(n => mapPlace(eu, n).neighbors.includes(p.id))), 'if A borders B then B borders A');
  check(near(us, 'nevada').join() === 'arizona,california,idaho,oregon,utah' && wet(us, 'nevada').length === 0, 'Nevada: five neighbors and no water');
  check(near(us, 'utah').join() === 'arizona,colorado,idaho,nevada,wyoming', 'Utah and New Mexico touch at one point only: they are not neighbors');
  check(wet(us, 'michigan').includes('lake-michigan') && wet(us, 'michigan').includes('lake-superior') && wet(us, 'michigan').includes('lake-huron') && !near(us, 'michigan').includes('illinois'), 'Michigan touches three Great Lakes, and does not border Illinois (a border through a lake is not one)');
  check(wet(us, 'florida').includes('atlantic') && wet(us, 'florida').includes('gulf-of-mexico') && wet(us, 'texas').includes('gulf-of-mexico') && wet(us, 'maine').includes('atlantic') && wet(us, 'alaska').includes('pacific'), 'the coasts: Florida on two seas, Texas, Maine and Alaska on one');
  check(near(us, 'washington').includes('canada') && near(us, 'texas').includes('mexico'), 'states border Canada and Mexico');
  same([near(isles, 'cedar'), wet(isles, 'cedar'), wet(isles, 'alder')], [['alder'], [], ['sea']], 'the test region: Cedar is landlocked');

  /* ---------- a neighbor and its water ---------- */
  const sw = [at('europe-west', null, 8.55, 47.37), at('europe-west', null, 13.4, 52.52), at('europe-west', null, 4.35, 50.85), at('europe-west', null, 3.0, 55.0)];
  same(score(border('switzerland'), { n: sw[1], w: 'none' }), 'ok', 'Switzerland: a neighbor and Landlocked');
  same(score(border('switzerland'), { n: sw[0], w: 'none' }), 'no', 'Switzerland: the place itself is not its neighbor');
  same(score(border('switzerland'), { n: sw[2], w: 'none' }), 'no', 'Switzerland: a country that is not a neighbor');
  same(score(border('switzerland'), { n: sw[1], w: sw[3] }), 'no', 'Switzerland: a tap on water when it is landlocked');
  same(score(border('belgium'), { n: sw[1], w: sw[3] }), 'ok', 'Belgium: a neighbor and the North Sea');
  same(score(border('belgium'), { n: sw[1], w: 'none' }), 'no', 'Belgium: Landlocked when it touches the sea');
  same(score(border('belgium'), { n: sw[1], w: at('europe-west', null, 12.0, 39.5) }), 'no', 'Belgium: a sea it does not touch');
  same(score(border('belgium'), { n: sw[1] }), 'no', 'Belgium: a neighbor and no water (not answered)');
  same(score(border('belgium'), [1, 2, 3]), 'no', 'a neighbor and its water answered as one tap');
  same(placeRightText(border('switzerland')), 'A place next to Switzerland: Austria, France, Germany, Italy and Liechtenstein. Landlocked.', 'the answer in words: landlocked');
  same(placeRightText(border('belgium')), 'A place next to Belgium: France, Germany, Luxembourg and Netherlands. Water: North Sea.', 'the answer in words: water');
  same(score(border('cedar', 'isles'), { n: [30, 30, 1], w: 'none' }), 'ok', 'the test region: Alder next to Cedar, and Landlocked');
  same(score(border('alder', 'isles'), { n: [215, 70, 1], w: [5, 5, 1] }), 'ok', 'the test region: Birch next to Alder, and the sea at the corner');

  /* ---------- what is drawn ---------- */
  const names = eu.places.map(p => p.name), blankHtml = mapHtml(eu, {});
  check(names.every(n => !blankHtml.includes(`>${n}<`) && !blankHtml.includes(`"${n}"`)), 'the blank map carries no place name');
  check(/aria-label="A map of Europe, west, with no names on it\./.test(blankHtml), 'the blank map says it has no names');
  const labelled = mapHtml(eu, { labels: true }), few = mapHtml(eu, { labels: ['belgium', 'alps'] });
  check(labelled.includes('>Belgium<') && labelled.includes('>The Alps<') && labelled.includes('>North Sea<'), 'the labelled map names its countries, seas and ranges');
  check(few.includes('>Belgium<') && few.includes('>The Alps<') && !few.includes('>France<'), 'a list of places names only those');
  check(!/ lit/.test(blankHtml), 'nothing is lit on the blank map');
  const litHtml = mapHtml(eu, { lit: ['belgium', 'north-sea', 'alps'] });
  check((litHtml.match(/ lit"/g) || []).length === 3 && /data-place="belgium"[^>]* d=/.test(litHtml) && /mp-country lit" data-place="belgium"/.test(litHtml), 'the places lit are the three named, each once');
  check(mapHtml(eu, { marks: [{ x: 10, y: 20, state: 'wrong' }] }).includes('mk-wrong'), 'a tap is marked on the map');
  check(placeHtml({}, ask('belgium'), { many: {} }, { scope: 's' }).includes('data-map-ask="a"') && !placeHtml({}, ask('belgium'), { answer: [1, 2, 1], many: {} }, { scope: 's' }).includes('data-map-ask'), 'only an open place ask makes its map the thing a tap answers');
  const feedback = placeHtml({}, ask('belgium'), { answer: [5, 5, 1], many: {}, marks: true }, { scope: 's' });
  check(/mp-country lit" data-place="belgium"/.test(feedback) && !/mp-country lit" data-place="france"/.test(feedback) && feedback.includes('mk-wrong'), 'after the answer the right place is lit and the wrong tap marked');
  const named = html => [...html.matchAll(/<text class="ml[^>]*>([^<]*)<\/text>/g)].map(m => m[1]), hit = at('europe-west', null, 4.35, 50.85);
  same([named(feedback), named(placeHtml({}, ask('belgium'), { answer: hit, many: {}, marks: true }, { scope: 's' }))], [['Belgium'], []],
    'after a miss the right place is named on the map, so the name is learned with the place; after a right tap nothing is named');
  const unmarked = placeHtml({}, ask('belgium'), { answer: [5, 5, 1], many: {}, locked: true }, { scope: 's' });
  check(!/ lit"/.test(unmarked) && unmarked.includes('mk-neutral'), 'in a check nothing is lit before the end');
  const nwOpen = placeHtml({}, border('belgium'), { many: { n: [5, 5, 1] } }, { scope: 's' }), nwShut = placeHtml({}, border('belgium'), { many: {} }, { scope: 's' });
  check(nwOpen.includes('data-place-landlocked') && !nwShut.includes('data-place-landlocked'), 'Landlocked is offered once a neighbor is tapped');

  /* ---------- the problems a lesson is refused for ---------- */
  const maps = FC.maps;
  same(placeAskProblems(ask('belgium'), maps), [], 'a good place ask has no problems');
  check(placeAskProblems(ask('belgium', { map: 'narnia' }), maps)[0].includes('narnia'), 'a region that is not in the map data');
  check(placeAskProblems(ask('narnia'), maps)[0].includes('narnia'), 'a place that is not on the map');
  check(placeAskProblems(ask(['belgium', 'belgium']), maps).length === 1, 'a place twice among the right answers');
  check(placeAskProblems(border('north-sea'), maps).length === 1 && placeAskProblems(border('narnia'), maps).length === 1, 'a neighbor and water of a sea, or of nothing');
  check(placeAskProblems(border('belgium', 'europe-west'), maps).length === 0 && placeAskProblems({ ...border('belgium'), right: 'france' }, maps).length === 1, 'a neighbor and water has no right answer of its own');
  same(mapBlockProblems({ kind: 'map', region: 'world', lit: ['africa'], labels: ['asia'] }, maps), [], 'a good map block has no problems');
  check(mapBlockProblems({ kind: 'map', region: 'world', lit: ['narnia'] }, maps).length === 1 && mapBlockProblems({ kind: 'map', region: 'narnia' }, maps).length === 1, 'a lit place that is not on the map, and a region that is not');
  return { checks, failures };
}

/* ---------- run, then seed a fault into place.js (or the file a fault names) and see it go red ---------- */
const real = await suite(await loadApp({ fixture: true }));
const FAULTS = [
  ['a dot\'s radius that does not shrink as the map is zoomed in', s => s.replace('map.size[0] * PLACE_DOT_TAP / k;', 'map.size[0] * PLACE_DOT_TAP;')],
  ['a sea that holds the land under its outline', s => s.replace('return !(PLACE_WATER_KINDS.includes(place.kind) && placeOnLand(map, geom, x, y));', 'return true;')],
  ['a country with a hole that holds the hole', s => s.replace("return PLACE_UNION_KINDS.includes(place.kind) ? inside > 0 : inside % 2 === 1;", 'return inside > 0;')],
  ['a river\'s band twice as wide', s => s.replace('const PLACE_LINE_BAND = 0.014;', 'const PLACE_LINE_BAND = 0.03;')],
  ['Landlocked right for a place that touches the sea', s => s.replace("wet = w === PLACE_NONE ? !water.length :", "wet = w === PLACE_NONE ? true :")],
  ['a neighbor taken anywhere on the map', s => s.replace("const near = placeNeighborsOf(map, ask.of).some(id => placeContains(map, mapPlace(map, id), n[0], n[1], n[2]));", 'const near = true;')],
  ['a coast found within a river\'s band only', s => s.replace('coast: 0.04,', 'coast: 0.014,')],
  ['a canal found within a river\'s band only', s => s.replace('canal: PLACE_DOT_TAP }', 'canal: 0.014 }')],
  ['a strait that holds the land under its outline', s => s.replace("const PLACE_WATER_KINDS = ['ocean', 'sea', 'strait'];", "const PLACE_WATER_KINDS = ['ocean', 'sea'];")],
  ['a tap on a microstate\'s circle named for the country under it', s => s.replace('const circle = (kind ? dot(v => v === kind) : null) || dot(v => map.land.includes(v));', 'const circle = null;')],
  ['a small place found only inside its outline', s => s.replace('const PLACE_SMALL_TAP = 0.03;', 'const PLACE_SMALL_TAP = 0;')],
  ['a tap beside a small place that does not shrink as the map is zoomed in', s => s.replace('map.size[0] * PLACE_SMALL_TAP / k;', 'map.size[0] * PLACE_SMALL_TAP;')],
  ['a tap at sea off a shore never on its land', s => s.replace('if(!map.land.includes(kind) || placeOnLand(map, geom, x, y)) return null;', 'return null;')],
  ['a tap at sea on the land of a shore however far out', s => s.replace('if(away <= reach && away < bestAt){ best = place; bestAt = away; }\n  }\n  return best ? best.id : null;\n}\nconst placeContains', 'if(away < bestAt){ best = place; bestAt = away; }\n  }\n  return best ? best.id : null;\n}\nconst placeContains')],
  ['a missed place lit with no name', s => s.replace(': missed ? placeRightIds(ask) : [];', ': [];'), 'app/lessons/place-view.js'],
  ['a tap that is not three numbers scored as a tap', s => s.replace('Array.isArray(tap) && tap.length === 3 && tap.every(Number.isFinite) && tap[2] >= 1;', 'true;')]
];
const faultFailures = [];
for (const [name, mutate, file = 'app/lessons/place.js'] of FAULTS) {
  let changed = false;
  const app = await loadApp({ fixture: true, seed: (src, text) => { if (src !== file) return text; const next = mutate(text); changed = next !== text; return next; } }).catch(e => ({ crashed: e }));
  if (app.crashed) continue;   // a fault the app cannot even load is red enough
  const run = await suite(app).catch(e => ({ failures: [`crashed: ${e.message}`] }));
  if (!changed) faultFailures.push(`the seeded fault "${name}" does not apply to ${file}`);
  else if (!run.failures.length) faultFailures.push(`the seeded fault "${name}" did not turn any check red`);
}

const all = [...real.failures, ...faultFailures];
if (all.length) {
  console.error(`✗ ${all.length} of ${real.checks} map and place checks failed:`);
  all.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${real.checks} map and place checks passed, and each of ${FAULTS.length} seeded faults turned a check red`);
