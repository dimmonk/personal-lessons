/* ===================== LESSONS: TAPPING A PLACE ON THE MAP, ON SCREEN ===================== */
// Lesson standard 3.7 (the `place` ask). What happens on the screen the queue (queue.js) has just painted when a place ask is open. A tap on the map
// (map-run.js says where, and at what zoom) puts a pin there and answers nothing yet: a tap misplaced is put right before it counts, as an answer
// chosen is changed before it is sent. The pins are kept in Q.cur.many[askId] (one place: { t }; a neighbor and its water: { n, w }); a new tap moves
// the place's pin, or the water's once the neighbor is in; Landlocked stands for the water; Undo takes the last pin back; Answer sends what is pinned.
// Needs the queue (Q, openAsk, answerAsk, paintQueue) and place.js.

function wirePlace(){
  on('[data-place-landlocked]', el => landlocked(el.closest('[data-ask]').dataset.ask));
  on('[data-place-undo]', el => placeUndo(el.closest('[data-ask]').dataset.ask));
  on('[data-place-answer]', el => placeAnswer(el.closest('[data-ask]').dataset.ask));
}
const placePins = askId => Q.cur.many[askId] || {};
function placePinsSet(askId, pins){
  const { [askId]: gone, ...rest } = Q.cur.many;
  Q.cur = { ...Q.cur, many: pins ? { ...rest, [askId]: pins } : rest };
  paintQueue();
}
// the place ask that is open with this id, or null
const openPlaceAsk = askId => { const ask = askId && typeof openAsk === 'function' ? openAsk(askId) : null; return ask && ask.kind === 'place' ? ask : null; };
// a tap on the map of the ask that is open: called by map-run.js for a map that answers an ask; never for one that only shows
function mapTapped(el, x, y, k){
  const askId = el.dataset.mapAsk, ask = openPlaceAsk(askId);
  if(!ask) return;
  const tap = [x, y, k], pins = placePins(askId);
  placePinsSet(askId, ask.mode !== 'neighbor-water' ? { t: tap } : pins.n ? { n: pins.n, w: tap } : { n: tap });
}
// the last pin taken back: the water's (or Landlocked), then the neighbor's
function placeUndo(askId){
  const ask = openPlaceAsk(askId), pins = placePins(askId);
  if(!ask) return;
  placePinsSet(askId, ask.mode === 'neighbor-water' && pins.w !== undefined ? { n: pins.n } : null);
}
function landlocked(askId){
  const ask = openPlaceAsk(askId), pins = placePins(askId);
  if(ask && ask.mode === 'neighbor-water' && pins.n) placePinsSet(askId, { n: pins.n, w: PLACE_NONE });
}
function placeAnswer(askId){
  const ask = openPlaceAsk(askId), answer = ask ? placePinned(ask, placePins(askId)) : null;
  if(answer) answerAsk(askId, answer);
}
