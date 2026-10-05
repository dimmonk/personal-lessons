/* ===================== SCREENS: THE KEY DRAWN AS A MAP ===================== */
// The key printed from key.js and nothing else (lesson standard E1, E14): the subject's opening screen draws it with
// plain words beside each answer, the reference screen and the determination draw it in the key's fixed wording.
// While a subject mixes old and new units, only the branches whose units are rebuilt are drawn.

const MAP_SAY = {
  opening: 'These are all of this subject’s questions, as a map. You are not expected to follow it yet: each unit teaches one part of it. Under each question are its answers. Beside each answer, in plain words, is what it leads to.',
  fixed: 'All the questions, as a map. Under each question are its answers; beside each answer is what it leads to.',
  unfinished: names => `The rest of the questions are being rewritten and are not drawn yet: ${names}.`,
  namesHeading: 'Every name, in plain words, and the unit that teaches it',
  thenAsks: q => `then the question ${q}`
};

const allUnitsRebuilt = sv => sv.meta.units.every(id => !!sv.data.units[id]);

// A branch is drawn when every question in it and every name it leads to belongs to a rebuilt unit. A gate answer with no
// branch at all is drawn only once the whole subject is rebuilt (it is then an answer that leads nowhere on purpose).
function branchDrawn(sv, answerId){
  const rebuilt = unitId => !!sv.data.units[unitId], steps = sv.key.branches[answerId];
  if(!steps) return allUnitsRebuilt(sv);
  return steps.every(s => rebuilt(s.unit)) && sv.key.outcomes.filter(o => o.group === answerId).every(o => rebuilt(o.unit));
}
function keyMapModel(sv){
  const options = sv.key.gate.options.map(option => ({ option, drawn: branchDrawn(sv, option.id) }));
  return { drawn: options.filter(x => x.drawn).map(x => x.option), pending: options.filter(x => !x.drawn).map(x => x.option) };
}

// What an answer leads to, as words: the gate's own plain words where it has them, else the names it keeps.
function leadsTo(sv, step, option, wording){
  const named = id => { const t = sv.thing(id); return wording === 'plain' ? t.plain : t.n; };
  if(step.code === sv.key.gate.code){
    const next = (sv.key.branches[option.id] || [])[0];
    return [...(option.plain && wording === 'plain' ? [option.plain] : []), ...(next ? [MAP_SAY.thenAsks('“' + next.q + '”')] : [])];
  }
  return option.keeps.filter(sv.isOutcome).map(named);
}
function mapQuestionHtml(sv, step, label, wording){
  return `<p class="mapq">${esc(label)} · ${esc(step.q)}</p>` + lessonList(step.options.map(option => {
    const leads = leadsTo(sv, step, option, wording);
    return `<span class="kw">${esc(option.n)}</span>${leads.length ? ' → ' + esc(leads.join(' · ')) : ''}`;
  }));
}
// every name of the drawn branches: the gate's own families where it has them, then each outcome
function mapNames(sv){
  const model = keyMapModel(sv), groups = new Set(model.drawn.map(o => o.id));
  const families = sv.key.gate.options.filter(o => o.plain && o.needs && groups.has(o.id)).map(o => ({ ...o, unit: sv.key.gate.unit }));
  return [...families, ...sv.key.outcomes.filter(o => groups.has(o.group))];
}

// wording: 'plain' (the opening screen's preview) or 'fixed' (the reference screen and the determination)
function keyMapHtml(sv, wording){
  const model = keyMapModel(sv), gate = sv.key.gate;
  if(!model.drawn.length) return '';
  const parts = [`<p>${esc(wording === 'plain' ? MAP_SAY.opening : MAP_SAY.fixed)}</p>`,
    mapQuestionHtml(sv, { ...gate, options: model.drawn }, 'Question 1', wording)];
  model.drawn.forEach(answer => (sv.key.branches[answer.id] || []).forEach((step, i) => {
    parts.push(mapQuestionHtml(sv, step, `When the answer is “${answer.n}”: question ${i + 2}`, wording));
  }));
  if(wording === 'plain'){
    parts.push(lessonSection(MAP_SAY.namesHeading, lessonList(mapNames(sv).map(t =>
      `${esc(cap(t.plain))}: <span class="kw">${esc(t.n)}</span>, taught in ${esc(unitLabel(sv.data, t.unit))}`))));
  }
  if(model.pending.length){
    parts.push(`<p class="stopline">${esc(MAP_SAY.unfinished(joinWords(model.pending.map(o => '“' + o.n + '”'))))}</p>`);
  }
  return parts.join('');
}
const keyMapSection = (sv, wording) => {
  const html = keyMapHtml(sv, wording);
  return html ? `<div class="lesson keymap">${html}</div>` : '';
};
