/* ===================== SCREENS: THE KEY DRAWN AS A MAP ===================== */
// The key printed from key.js and nothing else (lesson standard E1, E14): the subject's opening screen draws it with
// plain words beside each answer, the reference screen and the determination draw it in the key's fixed wording.

const MAP_SAY = {
  opening: 'These are all of this subject’s questions, as a map. You are not expected to follow it yet: each unit teaches one part of it. Under each question are its answers. Beside each answer, in plain words, is what it leads to.',
  fixed: 'All the questions, as a map. Under each question are its answers; beside each answer is what it leads to.',
  namesHeading: 'Every name, in plain words, and the unit that teaches it',
  thenAsks: q => `then the question ${q}`
};

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
// every name: the gate's own families where it has them, then each outcome
function mapNames(sv){
  const groups = new Set(sv.key.gate.options.map(o => o.id));
  const families = sv.key.gate.options.filter(o => o.plain && o.needs).map(o => ({ ...o, unit: sv.key.gate.unit }));
  return [...families, ...sv.key.outcomes.filter(o => groups.has(o.group))];
}

// wording: 'plain' (the opening screen's preview) or 'fixed' (the reference screen and the determination)
function keyMapHtml(sv, wording){
  const gate = sv.key.gate;
  const parts = [`<p>${esc(wording === 'plain' ? MAP_SAY.opening : MAP_SAY.fixed)}</p>`,
    mapQuestionHtml(sv, gate, 'Question 1', wording)];
  gate.options.forEach(answer => (sv.key.branches[answer.id] || []).forEach((step, i) => {
    parts.push(mapQuestionHtml(sv, step, `When the answer is “${answer.n}”: question ${i + 2}`, wording));
  }));
  if(wording === 'plain'){
    parts.push(lessonSection(MAP_SAY.namesHeading, lessonList(mapNames(sv).map(t =>
      `${esc(cap(t.plain))}: <span class="kw">${esc(t.n)}</span>, taught in ${esc(unitLabel(sv.data, t.unit))}`))));
  }
  return parts.join('');
}
const keyMapSection = (sv, wording) => `<div class="lesson keymap">${keyMapHtml(sv, wording)}</div>`;
