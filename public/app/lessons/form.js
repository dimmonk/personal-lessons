/* ===================== LESSONS: A FORM OF SEVERAL FIELDS, SCORED ON A SAMPLE ===================== */
// Lesson standard 26.1 (the `form` ask). Rows of fields answered together, each a typed number or a choice, scored field by field the
// way a `number` ask and a `choose` ask are: the same tolerances, the same named slips. A form is right when every field is. Pure: no page
// and no storage, so the player, the validator and the tests all score a form the same way.
//   ask    { id, kind: 'form', prompt, fields: [Field], when? }
//   Field  { id, label, type: 'number', answer, tol, frame?, unit?, places?, traps? }   (a number ask: the label is its prompt; a frame like '__%' puts the sign after the box)
//        | { id, label, type: 'choose', options | from + right (+ only, slips, then) }    (a choose ask without kind/prompt)
//   answer { [fieldId]: [numbers typed] | optionId }          the same shapes a number ask and a choose ask store
// The private forms of the learner's own data (26.3) are a different thing: they are never scored (own.js).

// a field as the ask of its own kind, which is what the scorers and the views read
const formFieldAsk = field => ({ ...field, kind: field.type, prompt: field.label });

// { [fieldId]: 'ok' | slip id | 'no' }: a field not answered is a miss
function formFieldResults(data, ask, answer, item){
  const got = answer || {};
  return Object.fromEntries(ask.fields.map(f => [f.id, f.id in got ? SCORERS[f.type](data, formFieldAsk(f), got[f.id], item) : 'no']));
}
// 'ok' when every field is right; else the slip of the first field that has one, else 'no'
function scoreForm(data, ask, answer, item){
  const results = Object.values(formFieldResults(data, ask, answer, item));
  if(results.every(r => r === 'ok')) return 'ok';
  return results.find(r => r !== 'ok' && r !== 'no') || 'no';
}

/* ---------- what is typed ---------- */
// The form's drafts are { [fieldId]: text of a box | id of the option tapped }. A form can be answered when every box holds a number and
// every choice has an option.
const formDraftReady = (ask, drafts) => ask.fields.every(f => {
  const d = (drafts || {})[f.id];
  return f.type === 'number' ? d !== undefined && parseTyped(d) !== null : typeof d === 'string' && d !== '';
});
// the answer a ready form stores
const formAnswerFrom = (ask, drafts) => Object.fromEntries(ask.fields.map(f => [f.id, f.type === 'number' ? [parseTyped(drafts[f.id])] : drafts[f.id]]));

/* ---------- what is shown of a field ---------- */
// "Summit Growth Fund: 0.95%": the label, then the number as its frame writes it (with its decimals and unit), or the text of the option
function formFieldText(data, ask, field, answer, item){
  if(field.type === 'number') return `${field.label}: ${frameFilled(formFieldAsk(field), asList(answer))}`;
  const picked = chooseOptions(data, formFieldAsk(field)).find(o => o.id === answer);
  return `${field.label}: ${picked ? picked.text : ''}`;
}
// the right value of a field, in the same words
function formFieldRight(data, ask, field, item){
  if(field.type === 'number') return formFieldText(data, ask, field, numberAnswers(item, formFieldAsk(field)), item);
  const right = chooseOptions(data, formFieldAsk(field)).filter(o => o.ok);
  return `${field.label}: ${right.map(o => o.text).join('; ')}`;
}
