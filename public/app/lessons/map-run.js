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
const MAP_MARGIN = 0.04;        // the water shown round the map, a share of the part shown on each side
const MAP_EDGE_IN = 0.5;        // how far inside the map's edge a tap on the water round it is taken, in units of the map
const MAP_BESIDE_MIN = { width: 720, height: 480 };   // the column the screen gives (the rail taken off) and the screen's height where a map may stand beside
const MAP_BESIDE_GAIN = 1.05;   // beside only when it draws the map this much larger than across the width
const MAP_FLOOR = 0.35;         // however much goes with it, a map that only shows is never shorter than this share of the screen (or its own height across the width)
const MAP_MIN = 160;            // the least height in pixels a map that asks something is given, however much goes with it
const MAP_ROOM_GAP = 24;        // the least space between the map's screen and the bar at the foot
let MAP_VIEW = {};
let MAP_FIT = {};   // the layout fitted to a map on a screen of one size: `${scope}|${width}|${height}` -> { beside, h }
let MAP_GESTURE = null;   // { el, svg, pointers: Map(id -> { x, y }), view0, start, moved, multi, pinch }
const mapViewReset = () => { MAP_VIEW = {}; MAP_FIT = {}; };

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
// the pixels the svg's box gives each unit of the map, and the part of the map the box shows. The part the view holds, with a margin of water round it
// (MAP_MARGIN of that part on each side, so a place on the map's edge, the Arctic Ocean or Antarctica, stands off the frame with room to tap it), is drawn
// as large as the box takes; where the box is wider or taller than that part, it shows more of the map round it, kept inside the map and its margin (and the
// map centred in the box where the box holds the whole of it with room over).
function mapScreen(svg, el, view){
  const [w, h] = mapDims(el), box = svg.getBoundingClientRect(), grow = 1 + 2 * MAP_MARGIN, vw = w / view.k * grow, vh = h / view.k * grow;
  const s = Math.min(box.width / vw, box.height / vh) || 1, sw = box.width ? box.width / s : vw, sh = box.height ? box.height / s : vh;
  const along = (middle, shown, size) => {
    const lo = -size / view.k * MAP_MARGIN, hi = size + size / view.k * MAP_MARGIN;
    return shown >= hi - lo ? (lo + hi - shown) / 2 : Math.max(lo, Math.min(hi - shown, middle - shown / 2));
  };
  return { box, s, vx: along(view.cx, sw, w), vy: along(view.cy, sh, h), vw: sw, vh: sh };
}
const mapUnitAt = (screen, px, py) => [screen.vx + (px - screen.box.left) / screen.s, screen.vy + (py - screen.box.top) / screen.s];

// put a view on a map: the viewBox, and the marks and dots at the same size on the screen whatever the zoom
function mapApply(el, view){
  const svg = el.querySelector('.mapsvg');
  if(!svg) return;
  const screen = mapScreen(svg, el, view), px = v => Number(v) / screen.s;
  svg.setAttribute('viewBox', `${screen.vx} ${screen.vy} ${screen.vw} ${screen.vh}`);
  svg.querySelectorAll('[data-px]').forEach(c => c.setAttribute('r', String(px(c.dataset.px))));
  svg.querySelectorAll('text[data-fpx]').forEach(t => { delete t.dataset.adx; delete t.dataset.ady; mapPlaceName(t, px); });
  svg.querySelectorAll('line[data-gap]').forEach(l => mapPlaceLead(l, px));
  mapSeparateNames(svg, screen, px);
}
// Names that would sit on one another are set apart (placeNameLeads): the one that gives way steps off along a short lead, on a line to its point as a microstate's name is.
// What a lead is is in pixels, so it is worked out for the screen the map is on at the zoom it is at, and again each time either changes. Only attributes change, never
// the elements of the map (the observer of wireMaps would take that for a new screen).
function mapSeparateNames(svg, screen, px){
  const texts = [...svg.querySelectorAll('text[data-fpx][data-name]')], lines = new Map([...svg.querySelectorAll('line.ml-auto, line.ml-lead')].map(l => [l.dataset.name, l]));
  const names = texts.map(t => ({ id: t.dataset.name, x: (Number(t.dataset.x) - screen.vx) * screen.s, y: (Number(t.dataset.y) - screen.vy) * screen.s,
    chars: t.textContent.length, lead: [Number(t.dataset.dx), Number(t.dataset.dy)], fixed: t.hasAttribute('data-fixed') }));
  const moved = placeNameLeads(names, [screen.box.width, screen.box.height]);
  lines.forEach(l => { if(l.classList.contains('ml-auto')){ l.setAttribute('display', 'none'); l.removeAttribute('data-gap'); } });
  for(const t of texts){
    const lead = moved[t.dataset.name], line = lines.get(t.dataset.name);
    // the line of a name the map data leads stays where the data puts it unless the name had to step off the edge of the screen: then it follows the name
    if(line && line.classList.contains('ml-lead')){ Object.assign(line.dataset, { dx: t.dataset.dx, dy: t.dataset.dy }); if(lead) Object.assign(line.dataset, { dx: String(lead[0]), dy: String(lead[1]) }); mapPlaceLead(line, px); }
    if(!lead) continue;
    [t.dataset.adx, t.dataset.ady] = lead.map(String);
    mapPlaceName(t, px);
    if(!line || line.classList.contains('ml-lead')) continue;
    Object.assign(line.dataset, { dx: String(lead[0]), dy: String(lead[1]), gap: t.dataset.edge });
    line.setAttribute('display', 'inline');
    mapPlaceLead(line, px);
  }
}
// a name: its height in pixels, standing dx and dy pixels from its point, and on the side of the point it leads away to
function mapPlaceName(t, px){
  const led = t.dataset.adx !== undefined, dx = Number(led ? t.dataset.adx : t.dataset.dx), dy = Number(led ? t.dataset.ady : t.dataset.dy), anchor = dx > 0 ? 'start' : dx < 0 ? 'end' : 'middle';
  t.setAttribute('font-size', String(px(t.dataset.fpx)));
  t.setAttribute('stroke-width', String(px(t.dataset.edge)));
  t.setAttribute('text-anchor', anchor);
  t.setAttribute('x', String(Number(t.dataset.x) + px(dx + (dx > 0 ? 2 : dx < 0 ? -2 : 0))));
  t.setAttribute('y', String(Number(t.dataset.y) + px(dy)));
}
// the line from a microstate's dot to its name: from just off the dot to just short of the name
function mapPlaceLead(l, px){
  const dx = Number(l.dataset.dx), dy = Number(l.dataset.dy), gap = Number(l.dataset.gap), run = Math.hypot(dx, dy) || 1;
  l.setAttribute('x1', String(Number(l.dataset.x) + px(dx * gap / run)));
  l.setAttribute('y1', String(Number(l.dataset.y) + px(dy * gap / run)));
  l.setAttribute('x2', String(Number(l.dataset.x) + px(dx)));
  l.setAttribute('y2', String(Number(l.dataset.y) + px(dy)));
}
// a view is kept with its middle where the box shows it: a box that shows more than the view, held inside the map, does not let a drag run on past the edge unseen
function mapSetView(el, view){
  const clamped = mapClamp(view, mapDims(el)), svg = el.querySelector('.mapsvg'), shown = svg && mapScreen(svg, el, clamped);
  const next = shown ? { ...clamped, cx: shown.vx + shown.vw / 2, cy: shown.vy + shown.vh / 2 } : clamped;
  MAP_VIEW = { ...MAP_VIEW, [el.dataset.scope]: next };
  mapApply(el, next);
}
const mapSync = () => document.querySelectorAll('#screen [data-map]').forEach(el => { mapFit(el); mapApply(el, mapViewNow(el)); });

/* ---------- the room a map is given ---------- */
// A screen of one map gives it the most room it can (app.css, .block-map.fit): its height is what the screen has left above the bar at the foot once
// what is above and under the map is on it, and on a screen wide enough it stands beside the rest instead (.pane.mapbeside) when that draws it larger.
// The screen's height is the one with the browser's bars showing (the root's clientHeight), so the map does not jump as the bars come and go. Worked
// out once for a question on a screen of one size and kept, so the map does not move when the screen is painted again for the answer.
function mapFit(el){
  const pane = el.closest('.pane');
  if(!pane || pane.querySelectorAll('[data-map]').length !== 1) return;
  const key = `${el.dataset.scope}|${document.documentElement.clientWidth}|${document.documentElement.clientHeight}`;
  const fit = MAP_FIT[key] || mapFitMeasure(pane, el);
  MAP_FIT = { ...MAP_FIT, [key]: fit };
  mapFitShow(pane, el, fit);
}
function mapFitShow(pane, el, fit){
  pane.classList.add('mapfit');
  pane.classList.toggle('mapbeside', !!(fit && fit.beside));
  el.classList.toggle('fit', !!fit);
  if(fit) el.style.setProperty('--maph', `${fit.h}px`); else el.style.removeProperty('--maph');
}
// the two layouts tried in turn, and the one that draws the map larger on the screen as it stands kept
function mapFitMeasure(pane, el){
  const main = pane.closest('.main'), screenH = document.documentElement.clientHeight;
  const across = mapFitTry(pane, el, false, screenH);
  if(!main || main.clientWidth < MAP_BESIDE_MIN.width || screenH < MAP_BESIDE_MIN.height) return across;
  const beside = mapFitTry(pane, el, true, screenH);
  return beside.s > across.s * MAP_BESIDE_GAIN ? beside : across;
}
function mapFitTry(pane, el, beside, screenH){
  mapFitShow(pane, el, beside ? { beside: true } : null);
  const frame = el.querySelector('.mapframe'), [w, h] = mapDims(el), width = frame.clientWidth, k = mapViewHome(el).k, grow = 1 + 2 * MAP_MARGIN;
  // the tallest the map can use: the whole of it, top to bottom with its margin, at the scale that puts the part it opens on across the width. A map that
  // opens on its whole self is no taller than it is; one that opens on a part (a panel) shows more of the map above and below that part as it grows.
  const across = width / (w / k * grow), full = across * h * (1 + 2 * MAP_MARGIN / k);
  // a map that asks something always leaves its question, its row and Next on the screen; a map that only shows keeps a floor and lets the page scroll
  const fits = Math.min(full, mapFitRoom(pane, el, frame, beside, screenH)), tall = el.dataset.mapAsk ? Math.max(fits, Math.min(full, MAP_MIN)) : Math.max(fits, Math.min(full, screenH * MAP_FLOOR));
  return { beside, h: Math.round(tall), s: Math.min(across, fits / (h / k * grow)) };
}
// the height the map's screen can take: from its top to the bar at the foot (and the tab bar, where there is one), less what has to stand under it,
// which beside is the row under it (Undo and Landlocked) and across is everything after it in the page
function mapFitRoom(pane, el, frame, beside, screenH){
  const bar = pane.querySelector('.actbar'), tabs = document.querySelector('.tabbar');
  const foot = (bar ? bar.offsetHeight : 0) + (tabs && tabs.offsetParent ? tabs.offsetHeight : 0);
  const top = frame.getBoundingClientRect().top + scrollY, bottom = frame.getBoundingClientRect().bottom;
  const below = beside ? el.getBoundingClientRect().bottom - bottom
    : Math.max(0, ...[...pane.children].filter(c => c !== bar).map(c => c.getBoundingClientRect().bottom)) - bottom;
  return screenH - foot - top - below - MAP_ROOM_GAP;
}

/* ---------- zoom ---------- */
// the view after zooming by `factor` with the point at screen (px, py) staying where it is
function mapZoomAbout(svg, el, view, k, px, py){
  const before = mapScreen(svg, el, view), anchor = mapUnitAt(before, px, py), moved = { ...view, k: Math.max(1, Math.min(PLACE_ZOOM_MAX, k)) };
  const after = mapScreen(svg, el, moved);
  return { k: moved.k, cx: anchor[0] - (px - after.box.left) / after.s + after.vw / 2, cy: anchor[1] - (py - after.box.top) / after.s + after.vh / 2 };
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
  // a tap on the water round the map is a tap on the edge of the map next to it: the water at an edge runs on past it (the Arctic Ocean, the Southern Ocean)
  const screen = mapScreen(g.svg, g.el, mapViewNow(g.el)), [w, h] = mapDims(g.el), [ux, uy] = mapUnitAt(screen, e.clientX, e.clientY), k = mapViewNow(g.el).k;
  const x = Math.max(MAP_EDGE_IN, Math.min(w - MAP_EDGE_IN, ux)), y = Math.max(MAP_EDGE_IN, Math.min(h - MAP_EDGE_IN, uy));
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
