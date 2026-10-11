/* ===================== LESSONS: REPLYING IN A CALL OR CHAT, ON SCREEN ===================== */
// Lesson standard 26.1 (the `exchange` ask). What happens on the screen the queue (queue.js) has just painted when an exchange is open: a reply
// is picked; if it ends the exchange the replies picked are the answer, else the next turn arrives. The replies so far are kept in Q.cur.many[askId]
// so a repaint loses nothing. Needs the queue (Q, openAsk, answerAsk, paintQueue) and exchange.js.

function wireExchange(){
  on('[data-xopt]', el => reply(el.closest('[data-ask]').dataset.ask, el.dataset.xopt));
}
function reply(askId, optionId){
  const ask = openAsk(askId);
  if(!ask || ask.kind !== 'exchange') return;
  const path = [...(Q.cur.many[askId] || []), optionId], walk = exchangeWalk(ask, path);
  if(walk.steps.length !== path.length) return;
  if(walk.end !== null) return answerAsk(askId, path);
  Q.cur = { ...Q.cur, many: { ...Q.cur.many, [askId]: path } };
  paintQueue();
  focusOn(`[data-ask="${askId}"] .opt`);
}
