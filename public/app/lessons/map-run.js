/* ===================== LESSONS: A MAP ON THE SCREEN, ZOOM, DRAG AND TAP ===================== */
// Lesson standard 3.9 (the `map` block) and 3.7 (the `place` ask). One set of pointer listeners on the document, armed once (wireMaps), serves every
// map on every screen: a drag moves the map, two fingers (or the buttons, or ctrl and the wheel) zoom it, and a tap is a tap only when one finger went
// down and up without moving more than MAP_TAP_SLOP pixels and no second finger touched. The map's own screen position (how far in, which part) is
// kept in MAP_VIEW by the scope of the map, so a screen painted again for the next answer shows the map as the learner left it; the queue and the
// player empty it when a question or a step changes (mapViewReset). Zooming moves the viewBox, so the shapes are never redrawn.
//   view  { k, cx, cy }   the zoom (1 to PLACE_ZOOM_MAX) and the middle of what is shown, in units of the map
// A map opens on its whole self, or on the part its block names (`data-view="cx cy k"`: a panel); the button for the whole map goes back to that.
// What is drawn in pixels (a dot, a mark, a name and the line from a microstate to its name) is put back at the same size on the screen at every zoom.

const MAP_TAP_SLOP = 8;
const MAP_STEP = 1.6;
let MAP_VIEW = {};
let MAP_GESTURE = null;   // { el, svg, pointers: Map(id -> { x, y }), view0, start, moved, multi, pinch }
const mapViewReset = () => { MAP_VIEW = {}; };

/* ---------- where things are ---------- */
const mapDims = el => [Number(el.dataset.w), Number(el.dataset.h)];
const mapViewHome = el => {
  const [w, h] = mapDims(el), at = el.dataset.view ? el.dataset.view.split(' ').map(Number) : null;
  return at ? mapClamp({ cx: at[0], cy: at[1], k: at[2] }, [w, h]) : { k: 1, cx: w / 2, cy: h / 2 };
};
const mapViewNow = el => MAP_VIEW[el.dataset.scope] || mapViewHome(el);
function mapClamp(view, [w, h]){
  const k = Math.max(1, Math.min(PLACE_ZOOM_MAX, view.k)), vw = w / k, vh = h / k;
  return { k, cx: Math.max(vw / 2, Math.min(w - vw / 2, view.cx)), cy: Math.max(vh / 2, Math.min(h - vh / 2, view.cy)) };
}
// the pixels the svg's box gives each unit of the map, and where the picture starts inside the box (the map is centred when the box is wider or taller)
function mapScreen(svg, el, view){
  const [w, h] = mapDims(el), box = svg.getBoundingClientRect(), vw = w / view.k, vh = h / view.k, s = Math.min(box.width / vw, box.height / vh) || 1;
  return { box, s, ox: (box.width - s * vw) / 2, oy: (box.height - s * vh) / 2, vx: view.cx - vw / 2, vy: view.cy - vh / 2, vw, vh };
}
const mapUnitAt = (screen, px, py) => [screen.vx + (px - screen.box.left - screen.ox) / screen.s, screen.vy + (py - screen.box.top - screen.oy) / screen.s];

// put a view on a map: the viewBox, and the marks and dots at the same size on the screen whatever the zoom
function mapApply(el, view){
  const svg = el.querySelector('.mapsvg');
  if(!svg) return;
  const screen = mapScreen(svg, el, view), px = v => Number(v) / screen.s;
  svg.setAttribute('viewBox', `${screen.vx} ${screen.vy} ${screen.vw} ${screen.vh}`);
  svg.querySelectorAll('[data-px]').forEach(c => c.setAttribute('r', String(px(c.dataset.px))));
  svg.querySelectorAll('text[data-fpx]').forEach(t => mapPlaceName(t, px));
  svg.querySelectorAll('line[data-gap]').forEach(l => mapPlaceLead(l, px));
}
// a name: its height in pixels, standing dx and dy pixels from its point, and on the side of the point it leads away to
function mapPlaceName(t, px){
  const dx = Number(t.dataset.dx), anchor = dx > 0 ? 'start' : dx < 0 ? 'end' : 'middle';
  t.setAttribute('font-size', String(px(t.dataset.fpx)));
  t.setAttribute('stroke-width', String(px(t.dataset.edge)));
  t.setAttribute('text-anchor', anchor);
  t.setAttribute('x', String(Number(t.dataset.x) + px(dx + (dx > 0 ? 2 : dx < 0 ? -2 : 0))));
  t.setAttribute('y', String(Number(t.dataset.y) + px(t.dataset.dy)));
}
// the line from a microstate's dot to its name: from just off the dot to just short of the name
function mapPlaceLead(l, px){
  const dx = Number(l.dataset.dx), dy = Number(l.dataset.dy), gap = Number(l.dataset.gap), run = Math.hypot(dx, dy) || 1;
  l.setAttribute('x1', String(Number(l.dataset.x) + px(dx * gap / run)));
  l.setAttribute('y1', String(Number(l.dataset.y) + px(dy * gap / run)));
  l.setAttribute('x2', String(Number(l.dataset.x) + px(dx)));
  l.setAttribute('y2', String(Number(l.dataset.y) + px(dy)));
}
function mapSetView(el, view){
  const next = mapClamp(view, mapDims(el));
  MAP_VIEW = { ...MAP_VIEW, [el.dataset.scope]: next };
  mapApply(el, next);
}
const mapSync = () => document.querySelectorAll('#screen [data-map]').forEach(el => mapApply(el, mapViewNow(el)));

/* ---------- zoom ---------- */
// the view after zooming by `factor` with the point at screen (px, py) staying where it is
function mapZoomAbout(svg, el, view, k, px, py){
  const before = mapScreen(svg, el, view), anchor = mapUnitAt(before, px, py), moved = { ...view, k: Math.max(1, Math.min(PLACE_ZOOM_MAX, k)) };
  const after = mapScreen(svg, el, moved);
  return { k: moved.k, cx: anchor[0] - (px - after.box.left - after.ox) / after.s + after.vw / 2, cy: anchor[1] - (py - after.box.top - after.oy) / after.s + after.vh / 2 };
}
function mapZoomButton(button){
  const el = button.closest('[data-map]'), svg = el && el.querySelector('.mapsvg');
  if(!svg) return;
  const view = mapViewNow(el), box = svg.getBoundingClientRect(), what = button.dataset.mapZoom;
  if(what === 'reset') return mapSetView(el, mapViewHome(el));
  mapSetView(el, mapZoomAbout(svg, el, view, what === 'in' ? view.k * MAP_STEP : view.k / MAP_STEP, box.left + box.width / 2, box.top + box.height / 2));
}

/* ---------- the pointer ---------- */
const mapDistance = pointers => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
const mapMiddle = pointers => { const [a, b] = [...pointers.values()]; return [(a.x + b.x) / 2, (a.y + b.y) / 2]; };
function mapDown(e){
  const svg = e.target.closest && e.target.closest('.mapsvg');
  if(!svg || (e.pointerType === 'mouse' && e.button !== 0)) return;
  const el = svg.closest('[data-map]');
  try{ svg.setPointerCapture(e.pointerId); }catch(err){ /* a pointer the browser does not know (a test's) is followed through the document instead */ }
  if(!MAP_GESTURE || MAP_GESTURE.svg !== svg) MAP_GESTURE = { el, svg, pointers: new Map(), moved: false, multi: false };
  MAP_GESTURE.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  MAP_GESTURE = { ...MAP_GESTURE, view0: mapViewNow(el), start: { x: e.clientX, y: e.clientY } };
  if(MAP_GESTURE.pointers.size === 2){
    const [mx, my] = mapMiddle(MAP_GESTURE.pointers);
    MAP_GESTURE = { ...MAP_GESTURE, multi: true, moved: true, pinch: { d0: mapDistance(MAP_GESTURE.pointers) || 1, mx, my } };
  }
}
function mapMove(e){
  const g = MAP_GESTURE;
  if(!g || !g.pointers.has(e.pointerId)) return;
  g.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if(g.pointers.size >= 2 && g.pinch){
    const [mx, my] = mapMiddle(g.pointers), k = g.view0.k * mapDistance(g.pointers) / g.pinch.d0;
    // the point under the fingers when they came together stays under them: the zoom, then the drag of the middle
    const zoomed = mapZoomAbout(g.svg, g.el, g.view0, k, g.pinch.mx, g.pinch.my), screen = mapScreen(g.svg, g.el, zoomed);
    mapSetView(g.el, { k: zoomed.k, cx: zoomed.cx - (mx - g.pinch.mx) / screen.s, cy: zoomed.cy - (my - g.pinch.my) / screen.s });
    return;
  }
  if(!g.moved && Math.hypot(e.clientX - g.start.x, e.clientY - g.start.y) > MAP_TAP_SLOP) MAP_GESTURE = { ...g, moved: true };
  if(MAP_GESTURE.moved && g.pointers.size === 1){
    const screen = mapScreen(g.svg, g.el, g.view0);
    mapSetView(g.el, { k: g.view0.k, cx: g.view0.cx - (e.clientX - g.start.x) / screen.s, cy: g.view0.cy - (e.clientY - g.start.y) / screen.s });
  }
}
function mapUp(e){
  const g = MAP_GESTURE;
  if(!g || !g.pointers.has(e.pointerId)) return;
  g.pointers.delete(e.pointerId);
  if(g.pointers.size > 0){   // one finger of two lifted: the other goes on dragging from where it is
    const [rest] = [...g.pointers.values()];
    MAP_GESTURE = { ...g, view0: mapViewNow(g.el), start: { ...rest }, pinch: null };
    return;
  }
  MAP_GESTURE = null;
  if(e.type !== 'pointerup' || g.moved || g.multi) return;
  const screen = mapScreen(g.svg, g.el, mapViewNow(g.el)), [x, y] = mapUnitAt(screen, e.clientX, e.clientY), k = mapViewNow(g.el).k;
  mapTapped(g.el, Math.round(x * 10) / 10, Math.round(y * 10) / 10, Math.round(k * 100) / 100);
}
function mapWheel(e){
  const svg = e.target.closest && e.target.closest('.mapsvg');
  if(!svg || !(e.ctrlKey || e.metaKey)) return;
  e.preventDefault();
  const el = svg.closest('[data-map]'), view = mapViewNow(el);
  mapSetView(el, mapZoomAbout(svg, el, view, view.k * Math.exp(-e.deltaY * 0.01), e.clientX, e.clientY));
}

// armed once, at the start: one set of listeners for every map on every screen, and a look at each screen the app paints, so a map shows the view it was left in
function wireMaps(){
  document.addEventListener('pointerdown', mapDown);
  document.addEventListener('pointermove', mapMove);
  document.addEventListener('pointerup', mapUp);
  document.addEventListener('pointercancel', mapUp);
  document.addEventListener('wheel', mapWheel, { passive: false });
  document.addEventListener('click', e => { const button = e.target.closest && e.target.closest('[data-map-zoom]'); if(button) mapZoomButton(button); });
  new MutationObserver(mapSync).observe(screenEl(), { childList: true, subtree: true });
  window.addEventListener('resize', mapSync);
}
