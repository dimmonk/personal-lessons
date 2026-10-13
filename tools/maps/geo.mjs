// Geometry for the map build: projections, clipping, simplifying, and the point tests the build needs. Pure functions over plain arrays;
// a ring is [[x, y, pin?], ...] (closed implicitly, no repeated first point), a line is the same open. Nothing here reads a file.

const RAD = Math.PI / 180;

/* ---------- projections: (lon, lat) in degrees to [x, y] with y up, in the projection's own units ---------- */
export function equalEarth() {
  const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;
  return (lon, lat) => {
    const l = lon * RAD, t = Math.asin(M * Math.sin(lat * RAD)), t2 = t * t, t6 = t2 * t2 * t2;
    return [l * Math.cos(t) / (M * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2))), t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2))];
  };
}
export function laea(lon0, lat0) {
  const s0 = Math.sin(lat0 * RAD), c0 = Math.cos(lat0 * RAD);
  return (lon, lat) => {
    const dl = (lon - lon0) * RAD, s = Math.sin(lat * RAD), c = Math.cos(lat * RAD), k = Math.sqrt(2 / (1 + s0 * s + c0 * c * Math.cos(dl)));
    return [k * c * Math.sin(dl), k * (c0 * s - s0 * c * Math.cos(dl))];
  };
}
// Albers conic equal-area, centred on `center` ([lon, lat]) and placed at `translate`, `scale` units to the radian; y up
export function albers({ lon0, parallels: [p1, p2], center, scale, translate }) {
  const n = (Math.sin(p1 * RAD) + Math.sin(p2 * RAD)) / 2, C = Math.cos(p1 * RAD) ** 2 + 2 * n * Math.sin(p1 * RAD);
  const raw = (lon, lat) => {
    const dl = ((((lon - lon0) % 360) + 540) % 360) - 180, r = Math.sqrt(C - 2 * n * Math.sin(lat * RAD)) / n, th = n * dl * RAD;
    return [r * Math.sin(th), -r * Math.cos(th)];
  };
  const [cx, cy] = raw(center[0], center[1]);
  return (lon, lat) => { const [x, y] = raw(lon, lat); return [translate[0] + scale * (x - cx), translate[1] - scale * (y - cy)]; };   // y flipped to the screen's
}

/* ---------- areas and boxes ---------- */
export const bboxOf = pts => pts.reduce((b, [x, y]) => [Math.min(b[0], x), Math.min(b[1], y), Math.max(b[2], x), Math.max(b[3], y)], [Infinity, Infinity, -Infinity, -Infinity]);
export function ringArea(ring) {   // signed shoelace area
  let a = 0;
  for (let i = 0, n = ring.length; i < n; i++) { const [x1, y1] = ring[i], [x2, y2] = ring[(i + 1) % n]; a += x1 * y2 - x2 * y1; }
  return a / 2;
}
export const absArea = ring => Math.abs(ringArea(ring));
export function ringCentroid(ring) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, n = ring.length; i < n; i++) { const [x1, y1] = ring[i], [x2, y2] = ring[(i + 1) % n], f = x1 * y2 - x2 * y1; a += f; cx += (x1 + x2) * f; cy += (y1 + y2) * f; }
  return Math.abs(a) < 1e-12 ? ring[0] : [cx / (3 * a), cy / (3 * a)];
}
export function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
export function distanceToSegment(px, py, [x1, y1], [x2, y2]) {
  const dx = x2 - x1, dy = y2 - y1, len = dx * dx + dy * dy, t = len ? Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / len)) : 0;
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

/* ---------- clipping to a rectangle [x0, y0, x1, y1] ---------- */
function clipEdge(ring, inside, cross) {
  const out = [];
  for (let i = 0, n = ring.length; i < n; i++) {
    const a = ring[(i + n - 1) % n], b = ring[i], ia = inside(a), ib = inside(b);
    if (ib) { if (!ia) out.push(cross(a, b)); out.push(b); } else if (ia) out.push(cross(a, b));
  }
  return out;
}
// Sutherland-Hodgman. A point made on the rectangle's edge carries no pin (pin = 0); the others keep theirs.
export function clipRing(ring, [x0, y0, x1, y1]) {
  const at = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, 0];
  const edges = [
    [p => p[0] >= x0, (a, b) => at(a, b, (x0 - a[0]) / (b[0] - a[0]))], [p => p[0] <= x1, (a, b) => at(a, b, (x1 - a[0]) / (b[0] - a[0]))],
    [p => p[1] >= y0, (a, b) => at(a, b, (y0 - a[1]) / (b[1] - a[1]))], [p => p[1] <= y1, (a, b) => at(a, b, (y1 - a[1]) / (b[1] - a[1]))]];
  let out = ring;
  for (const [inside, cross] of edges) { if (!out.length) return []; out = clipEdge(out, inside, cross); }
  return out.length >= 3 ? out : [];
}
// A ring with rectangles taken out of it (the insets of a map cover what lies under them): what is left of the ring on each side of a
// rectangle, as pieces that do not overlap
export function cutOut(ring, rects) {
  return rects.reduce((pieces, [x0, y0, x1, y1]) => pieces.flatMap(piece => {
    const box = bboxOf(piece);
    if (box[2] <= x0 || box[0] >= x1 || box[3] <= y0 || box[1] >= y1) return [piece];
    const big = 1e6;
    return [[-big, -big, x0, big], [x1, -big, big, big], [x0, -big, x1, y0], [x0, y1, x1, big]].map(r => clipRing(piece, r)).filter(r => r.length);
  }), [ring]);
}
// An open line cut to the rectangle: the pieces inside it (Liang-Barsky on each segment, joined while they stay inside)
export function clipLine(line, [x0, y0, x1, y1]) {
  const pieces = [];
  let cur = [];
  const flush = () => { if (cur.length >= 2) pieces.push(cur); cur = []; };
  for (let i = 0; i < line.length - 1; i++) {
    const [ax, ay] = line[i], [bx, by] = line[i + 1], dx = bx - ax, dy = by - ay;
    let t0 = 0, t1 = 1, ok = true;
    for (const [p, q] of [[-dx, ax - x0], [dx, x1 - ax], [-dy, ay - y0], [dy, y1 - ay]]) {
      if (p === 0) { if (q < 0) ok = false; } else { const r = q / p; if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r); }
    }
    if (!ok || t0 > t1) { flush(); continue; }
    const s = [ax + t0 * dx, ay + t0 * dy, t0 === 0 ? (line[i][2] || 0) : 0], e = [ax + t1 * dx, ay + t1 * dy, t1 === 1 ? (line[i + 1][2] || 0) : 0];
    if (!cur.length || t0 > 0) { flush(); cur = [s]; }
    cur.push(e);
    if (t1 < 1) flush();
  }
  flush();
  return pieces;
}

/* ---------- simplifying: Douglas-Peucker, keeping every pinned point ---------- */
function simplifyChain(pts, tol) {
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    let far = -1, worst = tol;
    for (let i = a + 1; i < b; i++) { const d = distanceToSegment(pts[i][0], pts[i][1], pts[a], pts[b]); if (d > worst) { worst = d; far = i; } }
    if (far >= 0) { keep[far] = 1; stack.push([a, far], [far, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
// A line or ring keeps its pinned points (shared borders, so two neighbours stay the same along it) and is simplified between them.
export function simplify(pts, tol, closed) {
  if (pts.length < 4) return pts;
  const pins = pts.map((p, i) => (p[2] ? i : -1)).filter(i => i >= 0);
  if (!closed) {
    const cuts = [...new Set([0, ...pins, pts.length - 1])];
    return cuts.slice(0, -1).flatMap((c, k) => simplifyChain(pts.slice(c, cuts[k + 1] + 1), tol).slice(0, -1)).concat([pts[pts.length - 1]]);
  }
  const start = pins.length ? pins[0] : farthestFrom(pts, 0);
  const rot = [...pts.slice(start), ...pts.slice(0, start)];
  const out = simplify([...rot, rot[0]], tol, false);
  return out.slice(0, -1);
}
function farthestFrom(pts, i) {
  let best = 0, at = 0;
  pts.forEach((p, j) => { const d = Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]); if (d > best) { best = d; at = j; } });
  return at;
}

/* ---------- a point well inside a ring, for labels (the pole of inaccessibility, to `precision`) ---------- */
function distToRingSigned(x, y, rings) {
  let inside = false, min = Infinity;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const a = ring[i], b = ring[j];
      if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
      min = Math.min(min, distanceToSegment(x, y, a, b));
    }
  }
  return (inside ? 1 : -1) * min;
}
export function labelPoint(rings, precision = 0.5) {
  const box = bboxOf(rings.flat()), w = box[2] - box[0], h = box[3] - box[1], size = Math.min(w, h);
  if (size === 0) return [box[0], box[1]];
  const cell = (x, y, half) => { const d = distToRingSigned(x, y, rings); return { x, y, half, d, max: d + half * Math.SQRT2 }; };
  let queue = [];
  for (let x = box[0]; x < box[2]; x += size) for (let y = box[1]; y < box[3]; y += size) queue.push(cell(x + size / 2, y + size / 2, size / 2));
  const c = ringCentroid(rings[0]);
  let best = cell(c[0], c[1], 0);
  for (const q of queue) if (q.d > best.d) best = q;
  while (queue.length) {
    queue.sort((a, b) => b.max - a.max);
    const top = queue.shift();
    if (top.d > best.d) best = top;
    if (top.max - best.d <= precision) continue;
    const half = top.half / 2;
    queue.push(cell(top.x - half, top.y - half, half), cell(top.x + half, top.y - half, half), cell(top.x - half, top.y + half, half), cell(top.x + half, top.y + half, half));
  }
  return [best.x, best.y];
}
