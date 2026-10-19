// What the build works out from the raw outlines so the app does not have to: which places share a border, and which water each coast touches.
// Everything here reads longitudes and latitudes (not the projected, simplified shapes), so a short border (Monaco and France) and a point
// where two corners meet (Four Corners) are told apart by the data itself.
import { distanceToSegment, pointInRing } from './geo.mjs';

const KM_PER_DEG = 111.195;
const key = p => `${p[0].toFixed(4)},${p[1].toFixed(4)}`;
const edgeKey = (a, b) => { const ka = key(a), kb = key(b); return ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`; };
const km = (a, b) => Math.hypot((a[0] - b[0]) * Math.cos(((a[1] + b[1]) / 2) * Math.PI / 180), a[1] - b[1]) * KM_PER_DEG;
const edgesOf = ring => ring.map((p, i) => [p, ring[(i + 1) % ring.length]]);
const rawRings = spec => spec.rings || [];

// ----- shared borders: two places of one layer that have a stretch of outline in common (an edge with the same two ends)
export function sharedEdges(specs, inside) {
  const owners = new Map();
  for (const spec of specs) {
    for (const ring of rawRings(spec)) {
      for (const [a, b] of edgesOf(ring)) {
        if (!inside(a) && !inside(b)) continue;
        const k = edgeKey(a, b), set = owners.get(k) || { ids: new Set(), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
        set.ids.add(spec.id);
        owners.set(k, set);
      }
    }
  }
  return owners;
}
// Two places are neighbours when an edge they share lies on land: a border drawn through a lake is not one when a state or province is on it (Michigan and Illinois, in Lake
// Michigan; Ohio and Canada, in Lake Erie). `onWater(point)` says whether a point is in a lake. The border between two countries is one wherever it runs: Tanzania and the Congo
// face each other across Lake Tanganyika.
export const DIVISION_KINDS = ['state', 'province'];
export function neighborsFromEdges(specs, owners, onWater) {
  const next = Object.fromEntries(specs.map(s => [s.id, new Set()])), division = new Set(specs.filter(s => DIVISION_KINDS.includes(s.kind)).map(s => s.id));
  for (const { ids, mid } of owners.values()) {
    if (ids.size < 2 || (onWater(mid) && [...ids].some(id => division.has(id)))) continue;
    for (const a of ids) for (const b of ids) if (a !== b) next[a].add(b);
  }
  return next;
}

// ----- places of two layers whose outlines do not share points: the longest unbroken stretch of A within `eps` km of B's outline
// B's edges are put in one-degree cells, so a sample only meets the edges near it
function indexSegments(segments) {
  const cells = new Map();
  for (const seg of segments) {
    const [x0, x1] = [Math.floor(Math.min(seg[0][0], seg[1][0])), Math.floor(Math.max(seg[0][0], seg[1][0]))], [y0, y1] = [Math.floor(Math.min(seg[0][1], seg[1][1])), Math.floor(Math.max(seg[0][1], seg[1][1]))];
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) { const k = `${x},${y}`; cells.set(k, [...(cells.get(k) || []), seg]); }
  }
  return cells;
}
function nearestKm(p, cells) {
  const cos = Math.cos(p[1] * Math.PI / 180), cx = Math.floor(p[0]), cy = Math.floor(p[1]);
  let best = Infinity;
  for (let x = cx - 1; x <= cx + 1; x++) for (let y = cy - 1; y <= cy + 1; y++) {
    for (const [a, b] of cells.get(`${x},${y}`) || []) best = Math.min(best, distanceToSegment(p[0] * cos, p[1], [a[0] * cos, a[1]], [b[0] * cos, b[1]]) * KM_PER_DEG);
  }
  return best;
}
export function bordersAlong(a, b, { eps, minKm }, onWater = () => false) {
  const cells = indexSegments(rawRings(b).flatMap(edgesOf));
  let run = 0, longest = 0;
  for (const ring of rawRings(a)) {
    for (const [p, q] of edgesOf(ring)) {
      const len = km(p, q), steps = Math.max(1, Math.ceil(len / 2));
      for (let i = 0; i < steps; i++) {
        const t = (i + 0.5) / steps, pt = [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
        if (nearestKm(pt, cells) <= eps && !onWater(pt)) { run += len / steps; longest = Math.max(longest, run); } else run = 0;
      }
    }
    run = 0;
  }
  return longest >= minKm;
}

// ----- a coast: the stretches of the listed places' outlines that touch the water and that no other place shares, as open lines
// (a coast edge is one only this layer's places have: the edge between two states is a border). A run of such edges is one line, so a coast cut by
// a border (Florida's two shores) is as many lines as it has stretches; the water is any of its rings within `eps` degrees, as for a place's water below.
export function coastLines(members, owners, water, eps) {
  const rings = rawRings(water), lines = [];
  for (const spec of members) {
    for (const ring of rawRings(spec)) {
      let run = [];
      const flush = () => { if (run.length > 1) lines.push(run); run = []; };
      for (const [a, b] of edgesOf(ring)) {
        const shared = (owners.get(edgeKey(a, b)) || { ids: new Set() }).ids.size >= 2;
        if (!shared && nearWater([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], rings, eps)) { if (!run.length) run.push(a); run.push(b); } else flush();
      }
      flush();
    }
  }
  return lines;
}

// ----- water: a coast edge (an edge no other place of its layer has) touches a water place when its middle is inside it or within `eps` degrees of it
const insideAny = (pt, rings) => rings.some(r => pointInRing(pt[0], pt[1], r));
function nearWater(pt, rings, eps) {
  if (insideAny(pt, rings)) return true;
  const cos = Math.cos(pt[1] * Math.PI / 180);
  return rings.some(r => edgesOf(r).some(([a, b]) => distanceToSegment(pt[0] * cos, pt[1], [a[0] * cos, a[1]], [b[0] * cos, b[1]]) <= eps));
}
// A lake a state's outline reaches into (the Great Lakes lie inside the states' polygons): the share of the lake's own area that is inside the place
function lakeShare(spec, lake) {
  const rings = rawRings(lake), box = rings.flat().reduce((bb, p) => [Math.min(bb[0], p[0]), Math.min(bb[1], p[1]), Math.max(bb[2], p[0]), Math.max(bb[3], p[1])], [Infinity, Infinity, -Infinity, -Infinity]);
  let inLake = 0, inBoth = 0;
  for (let i = 0; i < 30; i++) for (let j = 0; j < 30; j++) {
    const x = box[0] + (box[2] - box[0]) * (i + 0.5) / 30, y = box[1] + (box[3] - box[1]) * (j + 0.5) / 30;
    if (!insideAny([x, y], rings)) continue;
    inLake++;
    if (rawRings(spec).filter(r => pointInRing(x, y, r)).length % 2 === 1) inBoth++;
  }
  return inLake ? inBoth / inLake : 0;
}
export const isLake = w => w.kind === 'lake';
// A water is a place's when the place's coast (the edges no other place of the layer has) runs along it for `minKm`, or for `minShare` of the whole coast where that is less (Israel's 11 km at Eilat,
// on the Gulf of Aqaba, are 6% of its coast and the Red Sea's whole shore): an edge runs along a water when its middle is inside the water's outline or within `eps` degrees of it. An island state is
// on every ocean within `islandReach` degrees, since the sea the data draws across the islands of a chain (the Caribbean Sea over the Lesser Antilles) leaves the ocean beyond them out of reach of
// the shore that faces it. A lake the place's outline reaches into (the Great Lakes, Lake Victoria: the polygons of the states and countries around them cover the lake) is also the place's when
// `lakeMin` of the lake's own area is inside it. Where Natural Earth's outline of a sea runs past the limit S-23 gives it (the Adriatic to Corfu) the sea is cut at the limit (limits.mjs), not here.
export const COAST_RULE = { minShare: 0.05, islandReach: 2 };
const coastEdge = (owners, [a, b]) => (owners.get(edgeKey(a, b)) || { ids: new Set() }).ids.size < 2;
export function waterOf(spec, owners, waters, { eps = 0.12, minKm = 15, lakeMin = 0.006, minShare = COAST_RULE.minShare, islandReach = COAST_RULE.islandReach } = {}) {
  const edges = rawRings(spec).flatMap(edgesOf), coast = edges.filter(e => coastEdge(owners, e));
  const total = coast.reduce((n, [a, b]) => n + km(a, b), 0), need = Math.min(minKm, total * minShare);
  const island = !!spec.dot && coast.length === edges.length;
  return waters.filter(w => {
    if (isLake(w) && lakeShare(spec, w) >= lakeMin) return true;
    const rings = rawRings(w), reach = island && w.kind === 'ocean' ? Math.max(eps, islandReach) : eps;
    const bbox = rings.flat().reduce((bb, p) => [Math.min(bb[0], p[0]), Math.min(bb[1], p[1]), Math.max(bb[2], p[0]), Math.max(bb[3], p[1])], [Infinity, Infinity, -Infinity, -Infinity]);
    let touching = 0;
    for (const [a, b] of coast) {
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      if (mid[0] < bbox[0] - reach || mid[0] > bbox[2] + reach || mid[1] < bbox[1] - reach || mid[1] > bbox[3] + reach) continue;
      if (nearWater(mid, rings, reach)) touching += km(a, b);
    }
    return touching >= need && touching > 0;
  }).map(w => w.id);
}
