/* ===================== LESSONS: TAPPING A PLACE ON THE MAP, ON SCREEN ===================== */
// Lesson standard 3.7 (the `place` ask). What happens on the screen the queue (queue.js) has just painted when a place ask is open: a tap on the map
// (map-run.js says where, and at what zoom) answers it; a neighbor and its water takes two taps, the first kept in Q.cur.many[askId] while the
// second is waited for, or the button "Landlocked" in place of the second; Undo takes the first back. Needs the queue (Q, openAsk, answerAsk, paintQueue) and place.js.

function wirePlace(){
  on('[data-place-landlocked]', el => landlocked(el.closest('[data-ask]').dataset.ask));
  on('[data-place-undo]', el => placeUndo(el.closest('[data-ask]').dataset.ask));
}
// a tap on the map of the ask that is open: called by map-run.js for a map that answers an ask; never for one that only shows
function mapTapped(el, x, y, k){
  const askId = el.dataset.mapAsk, ask = askId && typeof openAsk === 'function' ? openAsk(askId) : null;
  if(!ask || ask.kind !== 'place') return;
  const tap = [x, y, k];
  if(ask.mode !== 'neighbor-water') return answerAsk(askId, tap);
  const first = Q.cur.many[askId];
  if(!first){
    Q.cur = { ...Q.cur, many: { ...Q.cur.many, [askId]: { n: tap } } };
    return paintQueue();
  }
  answerAsk(askId, { n: first.n, w: tap });
}
// the neighbor's tap taken back, so the question waits for a neighbor again
function placeUndo(askId){
  const ask = openAsk(askId);
  if(!ask || ask.mode !== 'neighbor-water' || !Q.cur.many[askId]) return;
  const { [askId]: gone, ...many } = Q.cur.many;
  Q.cur = { ...Q.cur, many };
  paintQueue();
}
function landlocked(askId){
  const ask = openAsk(askId), first = ask && ask.mode === 'neighbor-water' ? Q.cur.many[askId] : null;
  if(first) answerAsk(askId, { n: first.n, w: PLACE_NONE });
}
