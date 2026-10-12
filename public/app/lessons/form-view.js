/* ===================== LESSONS: A FORM ON SCREEN ===================== */
// Lesson standard 3 and 26.2. The HTML of a `form` ask (a box for each number, the options for each choice, one Answer button), and
// what it leaves in the feedback (a mark for each field, the line about each field the learner missed). Pure string builders.
//   st: { answer?: { [fieldId]: [numbers] | optionId }, marks, typed?: { [askId]: { [fieldId]: text | optionId } } }
//   ctx: { item, support, answers }

function formNumberFieldHtml(field, ask, value, locked){
  const parts = frameParts(field), text = value === undefined ? '' : Array.isArray(value) ? typedText(value[0]) : value;
  const box = `<input class="numbox" type="text" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" data-field="${esc(field.id)}"
      id="f-${esc(ask.id)}-${esc(field.id)}" value="${esc(text)}" aria-label="${esc(field.label)}" ${locked ? 'disabled' : ''}>`;
  return `<label class="formlabel" for="f-${esc(ask.id)}-${esc(field.id)}">${esc(field.label)}</label>
    <div class="numframe">${parts[0] ? `<span class="numtext">${esc(parts[0])}</span>` : ''}${box}${parts[1] ? `<span class="numtext">${esc(parts[1])}</span>` : ''}${field.unit ? `<span class="numtext">${esc(field.unit)}</span>` : ''}</div>`;
}
function formChooseFieldHtml(data, field, picked, locked, marks){
  const buttons = chooseOptions(data, formFieldAsk(field)).map(o => {
    const cls = ['opt', picked === o.id ? 'sel' : '', marks && o.ok ? 'right' : '', marks && picked === o.id && !o.ok ? 'wrong' : ''].filter(Boolean).join(' ');
    return `<button type="button" class="${cls}" data-fopt="${esc(o.id)}" data-field="${esc(field.id)}" ${locked ? 'disabled' : ''} aria-pressed="${picked === o.id}">${esc(o.text)}</button>`;
  }).join('');
  return `<span class="formlabel">${esc(field.label)}</span><div class="opts" role="group" aria-label="${esc(field.label)}">${buttons}</div>`;
}
function formHtml(data, ask, st, ctx){
  const answered = st.answer !== undefined, locked = answered || st.marks, drafts = (st.typed && st.typed[ask.id]) || {};
  const rows = ask.fields.map(f => {
    const value = answered ? st.answer[f.id] : drafts[f.id];
    return `<div class="formrow" data-field-row="${esc(f.id)}">${f.type === 'number' ? formNumberFieldHtml(f, ask, value, locked) : formChooseFieldHtml(data, f, answered ? st.answer[f.id] : value, locked, st.marks)}</div>`;
  }).join('');
  const ready = !locked && formDraftReady(ask, drafts), hint = ask.fields.some(f => f.type === 'choose') ? SAY.formHintChoose : SAY.formHint;
  return `<div class="stepopen prompt formask" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    ${locked ? '' : `<span class="forline">${esc(hint)}</span>`}<div class="formrows">${rows}</div>
    ${locked ? '' : `<div class="numacts"><button type="button" class="btn sm" data-form-answer="${esc(ask.id)}" ${ready ? '' : 'disabled'}>${esc(SAY.answerBtn)}</button></div>`}</div>`;
}

/* ---------- what it leaves in the feedback ---------- */
// one mark for each field: right, or the right value of it
function formMarksHtml(data, ask, answer, item){
  const results = formFieldResults(data, ask, answer, item);
  return ask.fields.map(f => {
    const ok = results[f.id] === 'ok';
    const text = ok ? formFieldText(data, ask, f, (answer || {})[f.id], item) : `${SAY.theAnswer}: ${formFieldRight(data, ask, f, item)}`;
    return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(text)}</span></div>`;
  }).join('');
}
// the line for each field the learner missed, in the words of that field's own kind of ask
function formMissHtml(data, ask, answer, item){
  const results = formFieldResults(data, ask, answer, item);
  return ask.fields.filter(f => results[f.id] !== 'ok' && f.id in (answer || {}))
    .map(f => missLine(data, formFieldAsk(f), answer[f.id], results[f.id], item)).join('');
}
