// From raw outlines to the ring table and the places a map file holds: pin the vertices places share, project, cut to the frame, simplify,
// round, then work out the labels and the borders. A region (regions.mjs) says what its places are; this file does the same to every region.
import { bboxOf, absArea, ringCentroid, clipRing, clipLine, cutOut, simplify, labelPoint } from './geo.mjs';
import { sharedEdges, neighborsFromEdges, bordersAlong, waterOf, isLake } from './topology.mjs';
import { pointInRing } from './geo.mjs';
import { assignLeads, AUTO_LEAD } from './leads.mjs';

const Q = 10;                       // coordinates are stored in tenths of a unit
const round1 = v => Math.round(v * Q) / Q;
const MIN_AREA = 0.04;              // a ring smaller than this (square units) is not kept (a region may say `minArea` for a larger one)
const MIN_LINE = 0.6;               // nor a line shorter than this (units)
const lineLength = pts => pts.slice(1).reduce((n, p, i) => n + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);
const outlinesOf = spec => (spec.line ? spec.lines : spec.rings) || [];

// every vertex that two places of one layer both have is pinned, so simplifying leaves a shared border the same on both sides
function pinShared(specs) {
  const layers = {};
  specs.filter(s => !s.members).forEach(s => { layers[s.layer] = [...(layers[s.layer] || []), s]; });
  for (const group of Object.values(layers)) {
    const owner = new Map();
    for (const spec of group) {
      for (const ring of outlinesOf(spec)) for (const p of ring) {
        const k = `${p[0].toFixed(4)},${p[1].toFixed(4)}`, had = owner.get(k);
        owner.set(k, had === undefined || had === spec.id ? spec.id : '*');
      }
    }
    for (const spec of group) for (const ring of outlinesOf(spec)) ring.forEach(p => { p[2] = owner.get(`${p[0].toFixed(4)},${p[1].toFixed(4)}`) === '*' ? 1 : 0; });
  }
}

// one raw outline through one part of the projection: cut to that part's frame, simplified, rounded; the pieces that show
function shapesOf(raw, part, tol, closed, cover, minArea) {
  const projected = raw.map(p => { const [x, y] = part.project(p[0], p[1]); return [x, y, p[2]]; });
  const pieces = closed ? cutOut(clipRing(projected, part.rect), cover ? [] : part.cut || []) : clipLine(projected, part.rect);
  return pieces.filter(p => p.length)
    .map(p => simplify(p, tol, closed).map(([x, y]) => [round1(x), round1(y)]))
    .filter(p => closed ? p.length >= 3 && absArea(p) >= minArea : p.length >= 2 && lineLength(p) >= MIN_LINE);
}
// a ring as the whole numbers the file holds: the first point, then the step to each next one (all in tenths)
const toSteps = pts => pts.flatMap((p, i) => [Math.round((p[0] - (i ? pts[i - 1][0] : 0)) * Q), Math.round((p[1] - (i ? pts[i - 1][1] : 0)) * Q)]);

function outlineCentre(spec) {
  const biggest = [...spec.rings].sort((a, b) => b.length - a.length)[0], box = bboxOf(spec.rings.flat());
  return spec.kind === 'strait' ? [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2] : ringCentroid(biggest);
}

// The point a dot is found at, in final units, in the part where it shows: the centre of a microstate's outline, and for a strait the middle of the
// extent of all its pieces (Natural Earth draws a narrow strait as slivers along its two shores, so no one piece is its middle). A spec with a `point`
// ([lon, lat], given by hand or taken from a populated place) is found there: a strait with no outline in the data, a city.
function centreOf(spec, parts) {
  const c = spec.point || outlineCentre(spec);
  for (const part of parts) {
    const [x, y] = part.project(c[0], c[1]), [x0, y0, x1, y1] = part.rect;
    if (x >= x0 && x <= x1 && y >= y0 && y <= y1) return [round1(x), round1(y)];
  }
  return null;
}

// where the name goes: inside the largest shape (the middle of a line), or on the point of a dot. How big it is and which way a microstate's name leads away from
// its dot are not the map's to say in map units: the app sets every name in pixels (place-view.js), and a spec's `lead` is the pixels it stands off the dot.
function labelOf(spec, shapes, dot) {
  if (dot) return { at: dot, ...(spec.lead && spec.lead !== AUTO_LEAD ? { lead: spec.lead } : {}) };
  if (spec.line) { const longest = [...shapes].sort((a, b) => lineLength(b) - lineLength(a))[0]; return { at: longest[Math.floor(longest.length / 2)] }; }
  const largest = [...shapes].sort((a, b) => absArea(b) - absArea(a))[0];
  return { at: (spec.label || labelPoint([largest], 0.3)).map(round1) };
}

export function buildRegion(R, all) {
  const parts = R.parts, ids = all.map(s => s.id), twice = ids.find((id, i) => ids.indexOf(id) !== i);
  if (twice) throw new Error(`${R.id}: two places are called "${twice}"`);
  pinShared(all);
  // 1. the outline of every spec that has its own, through the parts it shows in
  const drawn = new Map(), dropped = [];
  for (const spec of all.filter(s => !s.members)) {
    const open = spec.line === true, mine = parts.filter(p => !spec.parts || spec.parts.includes(p.id));
    const shapes = outlinesOf(spec).flatMap(raw => mine.flatMap(part => shapesOf(raw, part, R.tol, !open, spec.cover, R.minArea || MIN_AREA)));
    const dot = spec.dot ? centreOf(spec, mine) : null;
    const seen = open ? 1 : shapes.reduce((n, s) => n + absArea(s), 0);
    if (spec.optional && seen < R.minVisible && !dot) { dropped.push(spec.id); continue; }       // a country with a sliver in the frame is left out
    if (!shapes.length && !dot) throw new Error(`${R.id}: ${spec.id} has nothing in the frame`);
    drawn.set(spec.id, { spec, shapes, dot });
  }
  const specs = all.filter(s => s.members || drawn.has(s.id));
  // 2. the ring table, then the places that name rings in it
  const rings = [], at = new Map();
  for (const [id, d] of drawn) at.set(id, d.shapes.map(s => { rings.push(toSteps(s)); return rings.length - 1; }));
  const places = [];
  for (const spec of specs) {
    const own = drawn.get(spec.id), members = spec.members ? spec.members.filter(id => at.has(id)) : null;
    if (members && !members.length) throw new Error(`${R.id}: ${spec.id} has no member in the frame`);
    const shapes = members ? members.flatMap(id => drawn.get(id).shapes) : own.shapes;
    if (spec.hidden) continue;
    const place = { id: spec.id, name: spec.name, kind: spec.kind, ...(spec.line ? { line: true } : {}), rings: members ? members.flatMap(id => at.get(id)) : at.get(spec.id) };
    if (own && own.dot) place.dot = own.dot.map(v => Math.round(v * Q));
    if (spec.label !== false && (shapes.length || (own && own.dot))) Object.assign(place, labelOf(spec, shapes, own && own.dot));
    places.push({ place, spec });
  }
  if (R.borders) addBorders(R, specs, places, parts);
  assignLeads(R, places);
  return { size: R.size, rings, places: places.map(p => p.place), frames: R.frames || [], dropped };
}

// neighbours and water for the land places, from the raw outlines
function addBorders(R, specs, places, parts) {
  const b = R.borders, land = specs.filter(s => b.land.includes(s.kind)), water = specs.filter(s => b.water.includes(s.kind));
  const inFrame = p => parts.some(part => { const [x, y] = part.project(p[0], p[1]), [x0, y0, x1, y1] = part.rect; return x >= x0 && x <= x1 && y >= y0 && y <= y1; });
  const lakes = water.filter(isLake), onWater = pt => lakes.some(l => (l.rings || []).some(r => pointInRing(pt[0], pt[1], r)));
  const owners = sharedEdges(land, inFrame), next = neighborsFromEdges(land, owners, onWater);
  for (const x of land) for (const y of land) {
    if (x.id < y.id && b.across(x, y) && bordersAlong(x, y, b.along, onWater)) { next[x.id].add(y.id); next[y.id].add(x.id); }
  }
  for (const { place, spec } of places) {
    if (!b.land.includes(spec.kind)) continue;
    place.neighbors = [...next[spec.id]].sort();
    place.water = waterOf(spec, owners, water, b.coast).sort();
  }
}
