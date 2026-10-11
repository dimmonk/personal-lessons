/* ===================== LESSONS: AN ANSWER FROM MEMORY, ON SCREEN ===================== */
// Lesson standard 26.1 (the `text` ask with `accept`), 26.2 and 26.7 (X14). Pure HTML builders over recall.js: the box a learner types an answer in,
// the marks after it, the accepted answers (all of them, so the learner sees which they gave), the claim "my answer means the same", and the interview
// question a news answer rests on. Nothing here reads the page or the storage.
//   st: { answer, marks, locked, typed }  the same as the other asks; the answer is the words typed, or '' for "Not yet"

const isRecallAsk = ask => ask.kind === 'text' && Array.isArray(ask.accept);
function recallAskHtml(data, ask, st){
  const answered = st.answer !== undefined, locked = answered || st.marks || st.locked, draft = answered ? st.answer : ((st.typed && st.typed[ask.id]) || '');
  const id = esc(ask.id);
  const box = st.marks || (locked && !draft) ? '' : `<input class="recallbox" type="text" enterkeyhint="done" maxlength="${RECALL_MAX}" autocomplete="off" autocapitalize="off" autocorrect="off"
    spellcheck="false" data-recall="${id}" aria-label="${esc(SAY.recallBox)}" value="${esc(draft)}" ${locked ? 'disabled' : ''}>`;
  const tools = locked ? '' : `<div class="numacts"><button type="button" class="btn ghost sm" data-recall-skip="${id}">${esc(SAY.recallNotYet)}</button>
    <button type="button" class="btn sm" data-recall-answer="${id}" ${writtenWords(draft) ? '' : 'disabled'}>${esc(SAY.answerBtn)}</button></div>`;
  return `<div class="stepopen prompt recallask" data-ask="${id}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    ${locked ? '' : `<span class="forline">${esc(recallNeed(ask) > 1 ? SAY.recallMany(recallNeed(ask)) : SAY.recallHint)}</span>`}${box}${tools}</div>`;
}

// the marks after the answer: right, not this one, not yet, or counted on the learner's word; and what was said
function recallMarkHtml(ask, answer, result){
  const said = writtenWords(answer);
  const verdict = result === 'claimed' ? SAY.markClaimed : result === 'ok' ? SAY.markRight : said ? SAY.markNo : SAY.recallNotYet;
  return `<div class="mark ${result === 'ok' || result === 'claimed' ? '' : 'no'}" data-recall-mark><span class="verd">${esc(verdict)}</span>${said ? `<span class="ans">${esc(SAY.recallSaid)}: ${esc(said)}</span>` : ''}</div>`;
}
// every accepted answer, with the one or ones the learner gave marked; a note when some words are in brackets
function recallListHtml(ask, answer){
  const given = recallGiven(ask, answer), texts = ask.accept.map(recallEntryText);
  const items = texts.map((t, i) => `<li${given.includes(i) ? ' class="given"' : ''}>${esc(t)}${given.includes(i) ? ` <span class="gave">${esc(SAY.recallGave)}</span>` : ''}</li>`).join('');
  return `<div class="vblock" data-accepted>${lessonLabel(ask.ownEntry ? SAY.recallYours : SAY.recallAccepted)}<ul class="acceptlist">${items}</ul>
    ${texts.some(t => /\(/.test(t)) ? `<p class="hintline">${esc(SAY.recallBrackets)}</p>` : ''}</div>`;
}
// after a miss: the claim; after a claim: a line saying it was counted on the learner's word. `at` is the place of the question in a list of answers.
function recallClaimHtml(ask, answer, result, at){
  if(result === 'claimed') return `<p class="hintline" data-claimed>${esc(SAY.recallClaimed)}</p>`;
  if(result !== 'no' || !writtenWords(answer)) return '';
  return `<div class="vblock" data-claim-block><p>${esc(SAY.recallClaimLine)}</p><div class="numacts"><button type="button" class="btn ghost sm" data-claim="${esc(ask.id)}"${at === undefined ? '' : ` data-claim-at="${at}"`}>${esc(SAY.recallClaim)}</button></div></div>`;
}
// the interview question a news answer rests on, printed from that question's own item: its words and every accepted answer
function factHtml(data, item){
  const fact = item.fact ? data.items[item.fact] : null;
  if(!fact) return '';
  const ask = fact.asks.find(isRecallAsk);
  return `<div class="vblock" data-fact>${lessonLabel(SAY.factHeading)}<p>${esc(recallQuestionText(fact))}</p>
    ${ask ? `<ul class="acceptlist">${ask.accept.map(e => `<li>${esc(recallEntryText(e))}</li>`).join('')}</ul>` : ''}</div>`;
}
// the question as asked: the words of its spoken block, else the prompt of its first ask
function recallQuestionText(def){
  const spoken = (def.blocks || []).find(b => b.kind === 'spoken');
  return spoken ? spoken.text : paras(((def.asks || [])[0] || { prompt: '' }).prompt).join(' ');
}
