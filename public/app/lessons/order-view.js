/* ===================== LESSONS: PUTTING STEPS IN ORDER, ON SCREEN ===================== */
// Lesson standard 26.1 (the `order` ask). Pure HTML builders over order.js: the steps as buttons in a mixed order, each tapped one numbered in the
// order it was tapped, and after the answer the steps tapped marked right or wrong by their place. Nothing here reads the page.
//   st: { answer?: [stepId], many?: [stepId], marks }

function orderHtml(data, ask, st, ctx){
  const answered = st.answer !== undefined, picked = answered ? asList(st.answer) : (st.many || []), locked = answered || st.marks || st.locked;
  const buttons = orderShown(ask, ctx.item.id).map(s => {
    const at = picked.indexOf(s.id), right = at >= 0 && ask.right[at] === s.id;
    const cls = ['opt', 'orderstep', at >= 0 ? 'sel' : '', st.marks && at >= 0 ? (right ? 'right' : 'wrong') : ''].filter(Boolean).join(' ');
    return `<button type="button" class="${cls}" data-order-step="${esc(s.id)}" ${locked || at >= 0 ? 'disabled' : ''} aria-pressed="${at >= 0}">${at >= 0 ? `<span class="orderno">${at + 1}</span>` : ''}${esc(s.text)}</button>`;
  }).join('');
  const reset = !locked && picked.length ? `<button type="button" class="linkish" data-order-reset>${esc(SAY.orderReset)}</button>` : '';
  return `<div class="stepopen prompt orderask" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    <span class="forline">${esc(SAY.orderHint(ask.right.length, orderScored(ask)))}</span><div class="opts">${buttons}</div>${reset}</div>`;
}
// the mark under the question: right, or the right order
function orderMarkHtml(ask, answer, result){
  const ok = result === 'ok';
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(ok ? orderRightText(ask) : `${SAY.theAnswer}: ${orderRightText(ask)}`)}</span></div>`;
}
// after a miss: what the learner put, and why the order matters
function orderMissHtml(ask, answer){
  const put = asList(answer).map(id => orderStepText(ask, id)).join(', then ');
  return `<div class="vblock"><p><b>${esc(SAY.orderYouPut)}: ${esc(put)}.</b> ${esc(paras(ask.then).join(' '))}</p></div>`;
}
