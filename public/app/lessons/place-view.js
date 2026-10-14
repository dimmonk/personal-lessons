/* ===================== LESSONS: A MAP AND A PLACE ASK, ON SCREEN ===================== */
// Lesson standard 3.7 and 3.9. Pure HTML builders over place.js: a region of FC.maps drawn as SVG (the shapes, names only when asked for, what is
// lit, where a learner tapped), the `map` block, the `place` ask and its marks and miss lines. Nothing here reads the page or stores anything; the
// zoom, the drag and the tap are map-run.js and place-run.js. Sizes that must stay the same on the screen however far the map is zoomed (a dot,
// a mark) carry `data-px`: map-run.js turns the pixels into units of the map.
//   o  { scope, lit: [placeId], focus: [placeId], labels: true | [placeId], marks: [{ x, y, state }], ask: askId | null, view: [cx, cy, k] | null, beside: html }
//      `beside` is a control that stands in the row of the zoom buttons, to their left (the button Landlocked: one row, so the map and the button both fit on a phone)
//      `ask` makes the map the thing a tap answers; `state` is 'neutral', 'right' or 'wrong'; `view` is the part of the map it opens on (a panel)
//      `focus` is the place a map is about (the country of a neighbor and its water): filled in full, and the land lit round it is drawn as a tint (`near`),
//      so the place asked about is never mistaken for one of its neighbors

// the pixels each of these takes on the screen, whatever the zoom: a name's height, a dot, a mark
const MAP_PX = { label: 12, labelEdge: 3, dot: 5, mark: 9, markDot: 3, leadGap: 2 };
const MAP_PATHS = new WeakMap();
const mapNum = v => v.toFixed(1);
// the outline of a place as SVG path data (cached: a region is drawn many times)
function mapPath(map, place){
  let cache = MAP_PATHS.get(map);
  if(!cache){ cache = {}; MAP_PATHS.set(map, cache); }
  if(cache[place.id]) return cache[place.id];
  const geom = placeGeom(map);
  cache[place.id] = place.rings.map(i => {
    const p = geom.rings[i].pts, parts = [];
    for(let k = 0; k < p.length; k += 2) parts.push(`${k ? 'L' : 'M'}${mapNum(p[k])} ${mapNum(p[k + 1])}`);
    return parts.join('') + (place.line ? '' : 'Z');
  }).join('');
  return cache[place.id];
}
const mapShapeHtml = (map, place, extra) => `<path class="mp mp-${esc(place.kind)}${extra}" data-place="${esc(place.id)}" d="${mapPath(map, place)}"${PLACE_UNION_KINDS.includes(place.kind) ? '' : ' fill-rule="evenodd"'}></path>`;

// A name is set in pixels (`data-fpx`, `data-edge`) and placed by map-run.js, so it reads the same at every zoom and on every screen. A microstate's
// name stands `lead` pixels from its dot (the map data says which way) on a line drawn to the dot; every other name is centred on its point.
function mapLabelsHtml(map, ids, geom){
  return ids.map(id => geom.byId[id]).filter(p => p && p.at).map(p => {
    const lead = p.lead || [0, p.dot ? -MAP_PX.dot - MAP_PX.label / 2 : 0], pos = `data-x="${mapNum(p.at[0])}" data-y="${mapNum(p.at[1])}" data-dx="${lead[0]}" data-dy="${lead[1]}"`;
    const line = p.lead ? `<line class="ml-lead" ${pos} data-gap="${MAP_PX.dot + MAP_PX.leadGap}"></line>` : '';
    return `${line}<text class="ml ml-${esc(p.kind)}" ${pos} data-fpx="${MAP_PX.label}" data-edge="${MAP_PX.labelEdge}" dominant-baseline="central">${esc(p.name)}</text>`;
  }).join('');
}
const mapMarkHtml = m => `<g class="mk mk-${esc(m.state || 'neutral')}" data-mark><circle class="mk-ring" cx="${mapNum(m.x)}" cy="${mapNum(m.y)}" r="${MAP_PX.mark}" data-px="${MAP_PX.mark}"></circle>
  <circle class="mk-dot" cx="${mapNum(m.x)}" cy="${mapNum(m.y)}" r="${MAP_PX.markDot}" data-px="${MAP_PX.markDot}"></circle></g>`;
const mapZoomHtml = (beside = '') => `<div class="mapzoom">${beside}<button type="button" data-map-zoom="in" aria-label="${esc(SAY.zoomIn)}">+</button><button type="button" data-map-zoom="out" aria-label="${esc(SAY.zoomOut)}">&minus;</button>
  <button type="button" data-map-zoom="reset" aria-label="${esc(SAY.zoomReset)}">${SVG('<path d="M5 9V5h4M15 5h4v4M19 15v4h-4M9 19H5v-4"/>', 18)}</button></div>`;

// The region as the learner meets it. Layers, bottom to top: lit water (a lit sea lies under the land, so its outline never covers a coast), the blank map
// in the order the region lists, the insets' frames, lit ranges and regions (over the land, see-through), dots, names, marks.
function mapHtml(map, o = {}){
  const geom = placeGeom(map), [width, height] = map.size, lit = new Set(o.lit || []), focus = new Set(o.focus || []);
  const near = id => focus.size > 0 && lit.has(id) && !focus.has(id) && map.land.includes(geom.byId[id].kind);
  const mark = id => (lit.has(id) ? ' lit' : '') + (near(id) ? ' near' : '') + (focus.has(id) ? ' focus' : '');
  const kindsOf = kinds => kinds.flatMap(kind => geom.places.filter(p => p.kind === kind));
  const water = geom.places.filter(p => PLACE_WATER_KINDS.includes(p.kind) && lit.has(p.id));
  const blank = kindsOf(map.draw), over = geom.places.filter(p => lit.has(p.id) && !map.draw.includes(p.kind) && !PLACE_WATER_KINDS.includes(p.kind));
  // a microstate's dot is drawn as the country it is; the dot of a strait is only the radius it is found within, and shows once the strait is lit
  const dots = geom.places.filter(p => p.dot && (map.land.includes(p.kind) || lit.has(p.id))), frames = (map.frames || []).map(f => `<rect class="map-frame" x="${mapNum(f.x)}" y="${mapNum(f.y)}" width="${mapNum(f.w)}" height="${mapNum(f.h)}"></rect>`).join('');
  const names = o.labels === true ? geom.places.filter(p => map.labelled.includes(p.kind) && p.at).map(p => p.id) : o.labels || [];
  const dotHtml = p => `<circle class="mp mp-dot${mark(p.id)}" data-place="${esc(p.id)}" cx="${mapNum(p.dot[0] / map.q)}" cy="${mapNum(p.dot[1] / map.q)}" r="${MAP_PX.dot}" data-px="${MAP_PX.dot}"></circle>`;
  const alt = names.length ? SAY.mapAltNamed(map.name) : SAY.mapAlt(map.name);
  return `<figure class="block-map" data-map="${esc(map.id)}" data-scope="${esc(o.scope || map.id)}" data-w="${width}" data-h="${height}"${o.view ? ` data-view="${o.view.join(' ')}"` : ''}${o.ask ? ` data-map-ask="${esc(o.ask)}"` : ''}>
    <div class="mapframe"><svg class="mapsvg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(alt)}" preserveAspectRatio="xMidYMid meet">
      <rect class="map-water" x="0" y="0" width="${width}" height="${height}"></rect>
      ${water.map(p => mapShapeHtml(map, p, mark(p.id))).join('')}${blank.map(p => mapShapeHtml(map, p, mark(p.id))).join('')}${frames}
      ${over.map(p => mapShapeHtml(map, p, mark(p.id))).join('')}${dots.map(dotHtml).join('')}${mapLabelsHtml(map, names, geom)}${(o.marks || []).map(mapMarkHtml).join('')}
    </svg></div>${mapZoomHtml(o.beside)}</figure>`;
}
// the `map` block of a question or a teaching screen
function mapBlockHtml(block, ctx){
  const map = mapOf(block.region);
  return mapHtml(map, { scope: `${ctx.scope || ''}|${block.region}|${(block.lit || []).join(',')}|${(block.view || []).join(',')}`, lit: block.lit, labels: block.labels, view: block.view });
}

/* ---------- the place ask ---------- */
// the water a tap of a neighbor and its water was on: the sea, ocean or strait under it, or null (a tap on land, off the map or not made)
function placeWaterTapped(map, tap){
  const id = placeTapOk(tap) ? placeAt(map, tap[0], tap[1], tap[2], 'sea') : null;
  return id && PLACE_WATER_KINDS.includes(mapPlace(map, id).kind) ? id : null;
}
// the water a neighbor and its water lights once it is answered: the water the place touches (the right answer) and the water the learner tapped, no other
const placeWaterLit = (map, ask, answer) => [...new Set([...placeWaterOf(map, ask.of), placeWaterTapped(map, answer && answer.w)].filter(Boolean))];
// the places a finished question lights: the right ones; for a neighbor and its water, every neighbor of the place (and the place itself outlined) and the
// water it touches and was tapped (placeWaterLit); `answer` is the learner's, none for a worked question
function placeLitIds(map, ask, answer){
  return ask.mode === 'neighbor-water' ? [...placeNeighborsOf(map, ask.of), ...placeWaterLit(map, ask, answer)] : placeRightIds(ask);
}
// the names a finished question puts on its map: for a neighbor and its water, the place itself, every neighbor and the lit water, so each lit shape says
// what it is; and the right place of a question that was missed, so its name is learned with where it is (the map has no other names)
const placeLabelIds = (map, ask, answer, missed = false) => ask.mode === 'neighbor-water'
  ? [ask.of, ...placeNeighborsOf(map, ask.of), ...placeWaterLit(map, ask, answer)] : missed ? placeRightIds(ask) : [];
// each tap of an answer with the state the map marks it with: right when it is on a right place
function placeTapsOf(map, ask, answer, marked){
  if(ask.mode !== 'neighbor-water'){
    const right = placeRightIds(ask).map(id => mapPlace(map, id)), tap = answer;
    return placeTapOk(tap) ? [{ x: tap[0], y: tap[1], state: marked ? (right.some(p => placeContains(map, p, tap[0], tap[1], tap[2])) ? 'right' : 'wrong') : 'neutral' }] : [];
  }
  const taps = [], n = answer && answer.n, w = answer && answer.w;
  const on = (ids, t) => ids.some(id => placeContains(map, mapPlace(map, id), t[0], t[1], t[2]));
  if(placeTapOk(n)) taps.push({ x: n[0], y: n[1], state: marked ? (on(placeNeighborsOf(map, ask.of), n) ? 'right' : 'wrong') : 'neutral' });
  if(placeTapOk(w)) taps.push({ x: w[0], y: w[1], state: marked ? (on(placeWaterOf(map, ask.of), w) ? 'right' : 'wrong') : 'neutral' });
  return taps;
}
// st: { answer, many: { n }, marks, locked }. A tap on the map answers it (place-run.js); a neighbor and its water takes a tap on a neighbor, then a
// tap on the water or the button "Landlocked"; Undo takes the neighbor's tap back while the water is still to come.
function placeHtml(data, ask, st, ctx){
  const map = mapOf(ask.map), answered = st.answer !== undefined, nw = ask.mode === 'neighbor-water', first = nw && !answered && st.many ? st.many.n : null;
  const open = !answered && !st.marks && !st.locked, marked = !!st.marks, missed = marked && !nw && scorePlace(data, ask, st.answer) !== 'ok';
  const answer = answered ? st.answer : first ? { n: first } : undefined;
  // the line of help holds two lines of room for as long as it is there, so the map does not move when the line changes after the first tap
  const hint = !open ? '' : `<span class="forline holdline">${esc(nw ? (first ? SAY.placeWater : SAY.placeNeighbor) : SAY.placeOne)}</span>`;
  const picked = nw && answered && st.answer.w === PLACE_NONE, waterNone = nw && placeWaterOf(map, ask.of).length === 0;
  // Undo and Landlocked stand in the row of the zoom buttons, under the map: one row, not two, so they are on the screen with the map
  const undo = open && first ? `<button type="button" class="opt" data-place-undo>${esc(SAY.placeUndo)}</button>` : '';
  const landlocked = nw && (first || answered) ? `<button type="button" class="opt${picked ? ' sel' : ''}${marked && waterNone ? ' right' : ''}${marked && picked && !waterNone ? ' wrong' : ''}" data-place-landlocked
    ${open ? '' : 'disabled'} aria-pressed="${picked}">${esc(SAY.placeLandlocked)}</button>` : '';
  const view = mapHtml(map, { scope: `${(ctx && ctx.scope) || ''}|${ask.id}`, ask: open ? ask.id : null, marks: placeTapsOf(map, ask, answer, marked), lit: marked ? placeLitIds(map, ask, answer) : [],
    labels: marked ? placeLabelIds(map, ask, answer, missed) : [], focus: marked && nw ? [ask.of] : [], beside: undo + landlocked });
  return `<div class="stepopen prompt placeask" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>${hint}${view}</div>`;
}
// the map of a worked question: the right place lit and the tap shown at its label point, under a line that says it is done for the learner (the map
// takes no tap here; the questions after it do)
function placeWorkedHtml(data, item){
  return (item.asks || []).filter(a => a.kind === 'place').map(ask => {
    const map = mapOf(ask.map), lit = placeLitIds(map, ask), at = lit.map(id => mapPlace(map, id).at).filter(Boolean)[0];
    return `<p class="stem">${esc(paras(ask.prompt).join(' '))}</p><span class="forline">${esc(SAY.placeWorked)}</span>${mapHtml(map, { scope: `worked|${item.id}|${ask.id}`, lit, labels: placeLabelIds(map, ask), focus: ask.mode === 'neighbor-water' ? [ask.of] : [], marks: ask.mode === 'neighbor-water' || !at ? [] : [{ x: at[0], y: at[1], state: 'right' }] })}`;
  }).join('');
}

/* ---------- the flags block ---------- */
// The flags of places of a place group (place-gen.js), each large enough to tell from the next on a phone: alone, to be told which country it is, or with the
// name beside each (`names`) to be learned.
function flagsHtml(block, ctx){
  const list = ctx.data.gens[block.gen].places.list, rows = block.places.map(id => list.find(p => p.id === id)), flag = p => `<span class="flagbig">${esc(p.flag)}</span>`;
  if(!block.names) return `<div class="block-flags" role="img" aria-label="${esc(SAY.flagAlt)}">${rows.map(flag).join('')}</div>`;
  return `<ul class="block-flags flagkey">${rows.map(p => `<li>${flag(p)}<span class="flagtext">${esc(p.name)}</span></li>`).join('')}</ul>`;
}

// the mark after the answer, in the words of the other marks
function placeMarkHtml(ask, answer, result){
  const ok = result === 'ok';
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(ok ? placeRightText(ask) : `${SAY.theAnswer}: ${placeRightText(ask)}`)}</span></div>`;
}
// "You tapped: Spain." and what is not so about it; the part of a neighbor and its water that was missed
function placeMissHtml(data, ask, answer, result){
  const map = mapOf(ask.map);
  const line = (tapped, note) => `<p>${tapped ? `<b>${esc(SAY.youTapped)}: ${esc(tapped)}.</b> ` : `${esc(SAY.placeNotAny)} `}${esc(note || '')}</p>`;
  if(ask.mode !== 'neighbor-water'){
    const kind = mapPlace(map, placeRightIds(ask)[0]).kind;
    return `<div class="vblock">${line(placeTappedName(map, placeTapOk(answer) ? answer : null, kind), result !== 'no' ? SAY.slipLine(slipText(data, result)) : '')}</div>`;
  }
  const of = mapPlace(map, ask.of), n = answer && answer.n, w = answer && answer.w, out = [];
  const on = (ids, t) => ids.some(id => placeContains(map, mapPlace(map, id), t[0], t[1], t[2]));
  if(!placeTapOk(n) || !on(placeNeighborsOf(map, ask.of), n)){
    const tapped = placeTappedName(map, placeTapOk(n) ? n : null, of.kind);
    out.push(line(tapped, tapped ? SAY.placeNotNeighbor(tapped, of.name) : ''));
  }
  const water = placeWaterOf(map, ask.of);
  if(w === PLACE_NONE){ if(water.length) out.push(`<p><b>${esc(SAY.youChose)}: ${esc(SAY.placeLandlocked)}.</b> ${esc(SAY.placeHasWater(of.name, joinWords(placeNames(map, water))))}</p>`); }
  else if(!placeTapOk(w) || !on(water, w)){
    const tapped = placeTappedName(map, placeTapOk(w) ? w : null, 'sea');
    out.push(line(tapped, water.length ? (tapped ? SAY.placeNotWater(tapped, of.name) : SAY.placeHasWater(of.name, joinWords(placeNames(map, water)))) : SAY.placeNoWater(of.name)));
  }
  return out.length ? `<div class="vblock">${out.join('')}</div>` : '';
}
