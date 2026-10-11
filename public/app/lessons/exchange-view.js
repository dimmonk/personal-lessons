/* ===================== LESSONS: A CALL OR CHAT ON SCREEN ===================== */
// Lesson standard 26.1 (the `exchange` ask) and 26.2. Pure HTML builders over exchange.js: the turns met so far as a transcript (what the other side
// says, then the reply picked), the replies the learner can pick now, and, once the question is answered and its feedback shows, the lines that
// pushed marked and the reply where it could have ended. Nothing here reads the page or stores anything.
//   st: { answer?: [optionId], many?: [optionId], marks }   `many` is the replies picked so far in an exchange not yet ended

const ORDINALS = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
const ordinalWord = n => ORDINALS[n] || `${n}th`;

// one turn of the other side: its lines, the pushing ones marked once the feedback is showing
function exchangeTurnHtml(ask, turn, ctx, marks){
  const deciding = marks && turn.push ? turn.lines.map(l => l.id) : [];
  const lines = turn.lines.map(seg => `<div class="msg-line"><span class="sr">${esc(ask.from)}: </span>${segmentHtml(seg, { ...ctx, deciding, tap: null })}</div>`).join('');
  const note = marks && turn.push ? `<p class="pushnote"><span class="m lab">${esc(SAY.exchangePushes)}</span> ${esc(paras(turn.push).join(' '))}</p>` : '';
  return lines + note;
}
function exchangeHtml(data, ask, st, ctx){
  const answered = st.answer !== undefined, path = answered ? asList(st.answer) : (st.many || []), walk = exchangeWalk(ask, path), marks = !!st.marks;
  const said = walk.steps.map(s => exchangeTurnHtml(ask, s.turn, ctx, marks) + `<div class="msg-line me"><span class="sr">${esc(SAY.msgYou)}: </span>${esc(s.option.text)}</div>`).join('');
  const turn = walk.at ? ask.turns[walk.at] : null;
  const open = turn && !answered ? exchangeTurnHtml(ask, turn, ctx, false) : '';
  const over = walk.end !== null ? `<p class="exchange-over hintline">${esc(SAY.exchangeOver(ask.form))}</p>` : '';
  const options = turn && !answered ? `<span class="forline">${esc(SAY.exchangeHint(ask.form))}</span><div class="opts">${turn.options.map(o => `<button type="button" class="opt" data-xopt="${esc(o.id)}">${esc(o.text)}</button>`).join('')}</div>` : '';
  return `<div class="stepopen prompt exchange" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    <div class="block-message msg-${esc(ask.form)} msg-live" data-exchange="${esc(ask.form)}"><p class="msg-head"><span class="msg-from">${esc(ask.from)}</span><span class="msg-detail">${esc(ask.detail)}</span></p>
    <div class="msg-lines">${said}${open}</div></div>${over}${options}</div>`;
}

// the mark under the question: how it ended
function exchangeMarkHtml(ask, answer, result){
  const ok = result === 'ok', end = exchangeReview(ask, answer).end;
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(end ? paras(end.then).join(' ') : '')}</span></div>`;
}
// after the answer: the turns that pushed, named, and where it could have ended
function exchangeReviewHtml(ask, answer){
  const rv = exchangeReview(ask, answer);
  const pushed = rv.pushed.length ? `<ul class="pushlist">${rv.pushed.map(p => `<li><b>${esc(paras(p.turn.push).join(' '))}</b> “${esc(tapClip(exchangeTurnWords(p.turn)))}”</li>`).join('')}</ul>` : '';
  const could = !rv.could ? '' : rv.could.took ? SAY.exchangeSoon : SAY.exchangeCould(ordinalWord(rv.could.n), rv.could.option.text);
  return `<div class="vblock" data-exchange-review>${lessonLabel(SAY.exchangeHow)}${pushed}${could ? `<p>${esc(could)}</p>` : ''}</div>`;
}
