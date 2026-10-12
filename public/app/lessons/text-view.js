/* ===================== LESSONS: WORDS THE LEARNER WRITES, ON SCREEN ===================== */
// Lesson standard 3 (the `text` ask), as built in step 7: a line the learner writes in their own words and then compares with a model. It is
// never scored (it has no right answer to match), it is kept with the try, and the feedback shows theirs beside the model. Matching typed
// answers against accepted ones (`accept`) is built with Civics (step 9). Pure string builders: nothing here reads the page.
//   ask     { id, kind: 'text', prompt, model: Text, when? }
//   answer  the words written, cleaned (writtenWords), or '' when the learner tapped "Not yet"
//   st: { answer?: string, marks, typed?: { [askId]: string } }

const TEXT_MAX = 400;   // the most a learner may write in one line
// what was written, as kept: spaces collapsed, trimmed, no longer than TEXT_MAX
const writtenWords = raw => String(raw).replace(/\s+/g, ' ').trim().slice(0, TEXT_MAX);
const textReady = raw => writtenWords(raw).length > 0;

function writeHtml(data, ask, st){
  const answered = st.answer !== undefined, locked = answered || st.marks, draft = answered ? st.answer : ((st.typed && st.typed[ask.id]) || '');
  const id = esc(ask.id);
  const box = locked && !draft ? '' : `<textarea class="writebox" rows="3" maxlength="${TEXT_MAX}" data-write="${id}" aria-label="${esc(SAY.writeBox)}" ${locked ? 'disabled' : ''}>${esc(draft)}</textarea>`;
  const tools = locked ? '' : `<div class="numacts"><button type="button" class="btn ghost sm" data-write-skip="${id}">${esc(SAY.writeNotYet)}</button>
    <button type="button" class="btn sm" data-write-answer="${id}" ${textReady(draft) ? '' : 'disabled'}>${esc(SAY.answerBtn)}</button></div>`;
  return `<div class="stepopen prompt writeask" data-ask="${id}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    ${locked ? '' : `<span class="forline">${esc(SAY.writeHint)}</span>`}${box}${tools}${locked ? '' : `<p class="hintline">${esc(SAY.writePrivate)}</p>`}</div>`;
}

// what it leaves in the feedback: the words written, then the model line, side by side as two plain marks (neither is right or wrong)
function writeMarkHtml(ask, answer){
  const mine = writtenWords(answer);
  return `<div class="mark note"><span class="verd">${esc(SAY.writeYours)}</span><span class="ans">${esc(mine || SAY.writeNone)}</span></div>
    <div class="mark note"><span class="verd">${esc(SAY.writeModel)}</span><span class="ans">${esc(paras(ask.model).join(' '))}</span></div>`;
}
