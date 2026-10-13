/* ===================== LESSONS: PLACES ON A MAP ===================== */
// Lesson standard 3.7 (the `place` ask) and 3.9 (the `map` block). Pure: the geometry of a region of FC.maps (public/maps/, written by
// tools/maps/build-maps.mjs) and the scoring of a tap on it, so the player, the validator and the tests all score a tap the same way.
//   region   { id, name, size: [w, h], q, land: [kind], draw: [kind], labelled: [kind], frames?, rings: [[x0, y0, dx, dy, ...]], places: [Place] }
//   Place    { id, name, kind, rings: [ringIndex], line?, dot?: [x, y], at?: [x, y], lead?: [dx, dy], neighbors?: [placeId], water?: [placeId] }
//            kinds: country, state, continent, region (ground); ocean, sea, strait, lake (water); river, canal, coast (lines); range, desert
//            Every number is in tenths of a unit of a map `w` units wide, north up. A ring is the first point, then the step to each next one.
//            A place's rings are an outline in which a point is inside when it is inside an odd number of them (a country with a country inside
//            it has a hole); a sea, a lake, a range and a desert have no holes, so a point is inside when it is inside any ring. A `line` (a river)
//            is open and is tapped within a band of it. A `dot` (a microstate) is tapped within a radius of its point; its name stands `lead` pixels
//            (right, down) from the point on the screen, on a line to it. Land places (`land` kinds) have `neighbors` and `water`: stored, because the build worked them out from the outlines; the app computes none of it.
//   ask      { id, kind: 'place', prompt, map: regionId, right: placeId | [placeId], slips?: { placeId: slipId }, when? }
//            { id, kind: 'place', mode: 'neighbor-water', prompt, map: regionId, of: placeId, when? }
//            `right` as a list is any one of those places. `slips` names the slip of tapping the place it is keyed by.
//   block    { kind: 'map', region, id?, labels?: true | [placeId], lit?: [placeId], view?: [x, y, zoom] }   the region drawn, no names unless `labels`; it opens
//            on the part of it round (x, y) at that zoom when it has a `view` (one panel of a look at a region too big to read whole)
//   answer   [x, y, k]                      a tap: the point in units of the map and the zoom (1 to 8) the map was at
//            { n: [x, y, k], w: [x, y, k] | 'none' }    neighbor-water: a tap on a neighbor, then on the water, or "Landlocked" ('none')
//   result   'ok', a slip id, or 'no'

const PLACE_MODES = ['neighbor-water'];
const PLACE_NONE = 'none';                 // the answer of the "Landlocked" button
const PLACE_ZOOM_MAX = 8;
const PLACE_DOT_TAP = 0.02;                // a dot is found within this share of the map's width of its point, at zoom 1 (and 1/k of it at zoom k): about a
                                           // fingertip on a phone, so a microstate wants a zoom in to be found
const PLACE_LINE_BAND = 0.014;             // a river is found within this share of the map's width of its line, likewise
const PLACE_LINE_BANDS = { coast: 0.04, canal: PLACE_DOT_TAP };   // a coast, which is wide, and a canal, which is short, are found within more (3.7)
const PLACE_UNION_KINDS = ['ocean', 'sea', 'strait', 'lake', 'range', 'desert'];   // outlines with no holes
const PLACE_WATER_KINDS = ['ocean', 'sea', 'strait'];  // water whose outline overlaps the coast: a tap on land is never on it
const PLACE_FIND_ORDER = ['lake', 'river', 'canal', 'continent', 'range', 'desert', 'region', 'strait', 'sea', 'ocean'];   // the order a tap finds what it is on (after dots and the map's land); a coast is never what a tap is named as

/* ---------- the geometry of a region, decoded once ---------- */
const PLACE_GEOM = new WeakMap();
function placeDecodeRing(steps, q){
  const pts = new Float64Array(steps.length);
  let x = 0, y = 0, x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for(let i = 0; i < steps.length; i += 2){
    x += steps[i]; y += steps[i + 1];
    pts[i] = x / q; pts[i + 1] = y / q;
    x0 = Math.min(x0, pts[i]); x1 = Math.max(x1, pts[i]); y0 = Math.min(y0, pts[i + 1]); y1 = Math.max(y1, pts[i + 1]);
  }
  return { pts, box: [x0, y0, x1, y1] };
}
const placeRingArea = pts => {
  let a = 0;
  for(let i = 0, n = pts.length; i < n; i += 2){ const j = (i + 2) % n; a += pts[i] * pts[j + 1] - pts[j] * pts[i + 1]; }
  return Math.abs(a / 2);
};
function placeGeom(map){
  let geom = PLACE_GEOM.get(map);
  if(geom) return geom;
  const rings = map.rings.map(r => placeDecodeRing(r, map.q));
  const byId = Object.fromEntries(map.places.map(p => [p.id, { ...p, area: p.line ? 0 : p.rings.reduce((n, i) => n + placeRingArea(rings[i].pts), 0) }]));
  geom = { rings, byId, places: map.places.map(p => byId[p.id]) };
  PLACE_GEOM.set(map, geom);
  return geom;
}
// the region of FC.maps with this id
function mapOf(id){
  const map = FC.maps[id];
  if(!map) lessonFail(`unknown map ${id}`);
  return map;
}
const mapPlace = (map, id) => placeGeom(map).byId[id] || lessonFail(`map ${map.id} has no place ${id}`);
const mapHasPlace = (map, id) => !!placeGeom(map).byId[id];

/* ---------- is a point on a place ---------- */
function placeInRing(ring, x, y){
  const [x0, y0, x1, y1] = ring.box;
  if(x < x0 || x > x1 || y < y0 || y > y1) return false;
  const p = ring.pts;
  let inside = false;
  for(let i = 0, j = p.length - 2; i < p.length; j = i, i += 2){
    if((p[i + 1] > y) !== (p[j + 1] > y) && x < (p[j] - p[i]) * (y - p[i + 1]) / (p[j + 1] - p[i + 1]) + p[i]) inside = !inside;
  }
  return inside;
}
function placeLineDistance(ring, x, y){
  const p = ring.pts;
  let best = Infinity;
  for(let i = 0; i + 3 < p.length; i += 2){
    const dx = p[i + 2] - p[i], dy = p[i + 3] - p[i + 1], len = dx * dx + dy * dy;
    const t = len ? Math.max(0, Math.min(1, ((x - p[i]) * dx + (y - p[i + 1]) * dy) / len)) : 0;
    best = Math.min(best, Math.hypot(x - (p[i] + t * dx), y - (p[i + 1] + t * dy)));
  }
  return best;
}
function placeInArea(geom, place, x, y){
  const inside = place.rings.filter(i => placeInRing(geom.rings[i], x, y)).length;
  return PLACE_UNION_KINDS.includes(place.kind) ? inside > 0 : inside % 2 === 1;
}
const placeOnLand = (map, geom, x, y) => geom.places.some(p => map.land.includes(p.kind) && placeInArea(geom, p, x, y));
// A place holds a tap at (x, y) when the point is inside its outline (a sea's outline never holds land), within a river's band, or near a dot.
const placeNearDot = (map, place, x, y, k) => !!place.dot && Math.hypot(x - place.dot[0] / map.q, y - place.dot[1] / map.q) <= map.size[0] * PLACE_DOT_TAP / k;
function placeInside(map, place, x, y, k){
  const geom = placeGeom(map);
  if(place.line) return place.rings.some(i => placeLineDistance(geom.rings[i], x, y) <= map.size[0] * (PLACE_LINE_BANDS[place.kind] || PLACE_LINE_BAND) / k);
  if(!place.rings.length || !placeInArea(geom, place, x, y)) return false;
  return !(PLACE_WATER_KINDS.includes(place.kind) && placeOnLand(map, geom, x, y));
}
const placeContains = (map, place, x, y, k = 1) => placeNearDot(map, place, x, y, k) || placeInside(map, place, x, y, k);
// The place a tap is on, as the app names it after a miss: a microstate's circle if the tap is on one (it is drawn over the land it lies in, so a tap on
// it is the microstate, not the country under it; so is the dot of the kind asked for), else the smallest in the kind asked for if there is one, else the
// first by what a learner would call it (a dot, a lake, a river, the land, a continent, a range, a sea, an ocean); null when it is on none.
function placeAt(map, x, y, k = 1, kind = null){
  const geom = placeGeom(map), inside = place => placeInside(map, place, x, y, k);
  const smallest = list => list.filter(inside).sort((a, b) => a.area - b.area)[0] || null;
  const dot = ofKind => geom.places.filter(p => placeNearDot(map, p, x, y, k) && ofKind(p.kind))[0] || null;
  const circle = (kind ? dot(v => v === kind) : null) || dot(v => map.land.includes(v));
  if(circle) return circle.id;
  const asked = kind ? smallest(geom.places.filter(p => p.kind === kind)) : null;
  if(asked) return asked.id;
  for(const tier of [...map.land, ...PLACE_FIND_ORDER].filter((v, i, all) => all.indexOf(v) === i)){
    const found = smallest(geom.places.filter(p => p.kind === tier));
    if(found) return found.id;
  }
  const near = dot(() => true);
  return near ? near.id : null;
}

/* ---------- the ask ---------- */
const placeRightIds = ask => ask.mode === 'neighbor-water' ? [] : asList(ask.right);
const placeNeighborsOf = (map, id) => mapPlace(map, id).neighbors || [];
const placeWaterOf = (map, id) => mapPlace(map, id).water || [];
const placeTapOk = tap => Array.isArray(tap) && tap.length === 3 && tap.every(Number.isFinite) && tap[2] >= 1;
const placeNames = (map, ids) => ids.map(id => mapPlace(map, id).name);
function scoreNeighborWater(map, ask, answer){
  const n = answer && answer.n, w = answer && answer.w;
  if(!placeTapOk(n) || !(w === PLACE_NONE || placeTapOk(w))) return 'no';
  const near = placeNeighborsOf(map, ask.of).some(id => placeContains(map, mapPlace(map, id), n[0], n[1], n[2]));
  const water = placeWaterOf(map, ask.of), wet = w === PLACE_NONE ? !water.length : water.some(id => placeContains(map, mapPlace(map, id), w[0], w[1], w[2]));
  return near && wet ? 'ok' : 'no';
}
// 'ok' when the tap is inside one of the right places; else the slip of the place the tap is on, if the ask names one; else 'no'
function scorePlace(data, ask, answer){
  const map = mapOf(ask.map);
  if(ask.mode === 'neighbor-water') return scoreNeighborWater(map, ask, answer);
  if(!placeTapOk(answer)) return 'no';
  const [x, y, k] = answer, right = placeRightIds(ask).map(id => mapPlace(map, id));
  if(right.some(p => placeContains(map, p, x, y, k))) return 'ok';
  const on = ask.slips ? placeAt(map, x, y, k, right[0] && right[0].kind) : null;
  return on && ask.slips[on] ? ask.slips[on] : 'no';
}
// the answer in words, for the mark after it: the place, or the neighbors and the water
function placeRightText(ask){
  const map = mapOf(ask.map);
  if(ask.mode !== 'neighbor-water') return joinWords(placeNames(map, placeRightIds(ask)), 'or');
  const of = mapPlace(map, ask.of), water = placeWaterOf(map, ask.of);
  return `${SAY.placeNextTo(of.name)}: ${joinWords(placeNames(map, placeNeighborsOf(map, ask.of)))}. ${water.length ? `${SAY.placeWaterLabel}: ${joinWords(placeNames(map, water))}` : SAY.placeLandlocked}.`;
}
// what a learner's tap was on, in words (null when it was on nothing)
const placeTappedName = (map, tap, kind) => { const id = tap ? placeAt(map, tap[0], tap[1], tap[2], kind) : null; return id ? mapPlace(map, id).name : null; };

/* ---------- the problems of an ask and of a block, for the validator: [string] ---------- */
function placeAskProblems(ask, maps){
  const map = maps[ask.map];
  if(!map) return [`the region "${ask.map}" is not in the map data (${Object.keys(maps).join(', ')})`];
  const has = id => map.places.some(p => p.id === id), problems = [];
  if(ask.mode === 'neighbor-water'){
    if('right' in ask) problems.push('a neighbor and its water has no right answer of its own: the neighbors and the water come from the map');
    if(!has(ask.of)) return [...problems, `"${ask.of}" is not a place of the map ${ask.map}`];
    const of = map.places.find(p => p.id === ask.of);
    if(!of.neighbors || !of.water) problems.push(`"${ask.of}" is a ${of.kind}, which has no neighbors or water: ask it of a place that is ground (${map.land.join(', ')})`);
    else if(!of.neighbors.length) problems.push(`"${ask.of}" has no neighbors on the map ${ask.map}`);
    return problems;
  }
  if('of' in ask) problems.push('`of` belongs to a neighbor and its water');
  const right = asList(ask.right);
  if(!right.length) problems.push('a place has a right answer');
  right.filter(id => !has(id)).forEach(id => problems.push(`"${id}" is not a place of the map ${ask.map}`));
  right.filter((id, i) => right.indexOf(id) !== i).forEach(id => problems.push(`"${id}" is a right answer twice`));
  Object.keys(ask.slips || {}).filter(id => !has(id)).forEach(id => problems.push(`the slip is keyed by "${id}", which is not a place of the map ${ask.map}`));
  return problems;
}
function mapBlockProblems(block, maps){
  const map = maps[block.region];
  if(!map) return [`the region "${block.region}" is not in the map data (${Object.keys(maps).join(', ')})`];
  const has = id => map.places.some(p => p.id === id), named = [...asList(block.lit), ...(Array.isArray(block.labels) ? block.labels : [])];
  const [vx, vy, vk] = block.view || [], [w, h] = map.size;
  return [...named.filter(id => !has(id)).map(id => `"${id}" is not a place of the map ${block.region}`),
    ...asList(block.lit).filter((id, i, all) => all.indexOf(id) !== i).map(id => `"${id}" is lit twice`),
    ...(block.view && !(block.view.length === 3 && vx >= 0 && vx <= w && vy >= 0 && vy <= h && vk >= 1 && vk <= PLACE_ZOOM_MAX)
      ? [`the view is [x, y, zoom]: a point on the map (0 to ${w} across, 0 to ${h} down) and a zoom from 1 to ${PLACE_ZOOM_MAX}`] : [])];
}
