/* ===================== LESSONS: THE PATH THROUGH A UNIT ===================== */
// No DOM here. A unit is walked as a list of screens in this order (lesson standard E2, E8, A13): every part's
// cards, and after the last part's cards the drill, its results and the close cards; a generated end-of-part
// screen after each part but the last; a unit-complete screen at the end. The order is `unit.parts`, never load order.

function unitFlow(v){
  const parts = v.unit.parts, flow = [];
  parts.forEach((part, pi) => {
    part.cards.forEach(id => flow.push({ type: 'card', id, part: pi }));
    if(part.drill){
      flow.push({ type: 'drill', part: pi }, { type: 'results', part: pi });
      (part.close || []).forEach(id => flow.push({ type: 'card', id, part: pi }));
    }
    flow.push({ type: pi < parts.length - 1 ? 'partend' : 'complete', part: pi });
  });
  return flow;
}

// The baseline check of an action subject (lesson standard E21) is asked once, before the subject's first unit: one screen per
// case not yet answered, ahead of the unit's own screens. [] where the subject has none, or this is not its first unit.
function baselineCaseIds(v){
  const m = v.meta, ids = m && m.action && m.baseline && m.units[0] === v.unitId ? m.baseline : [];
  return ids.filter(id => !seenBefore(v.subjectId, v.unitId, id));
}
function unitFlowWithBaseline(v, baselineIds){
  return [...baselineIds.map((id, n) => ({ type: 'baseline', id, n: n + 1, of: baselineIds.length, part: 0 })), ...unitFlow(v)];
}

// The place saved in `seen` for a screen: a card id, 'drill' or 'close'. A part-end screen keeps the next part's first card.
// A baseline screen keeps the unit's first card: the baseline is never asked twice, so there is nothing to come back to.
function placeOfScreen(flow, i){
  const s = flow[i];
  if(s.type === 'baseline') return flow.find(x => x.type === 'card').id;
  if(s.type === 'card') return s.id;
  if(s.type === 'drill' || s.type === 'results') return 'drill';
  if(s.type === 'partend') return flow[i + 1].id;
  return 'close';
}
// The screen a saved place leads back to, or -1 when the place is no longer in this revision of the unit.
function screenOfPlace(flow, at){
  if(at === 'drill') return flow.findIndex(s => s.type === 'drill');
  if(at === 'close') return flow.findIndex(s => s.type === 'complete');
  return flow.findIndex(s => s.type === 'card' && s.id === at);
}

// "Unit Two · rev 1 · Draft: not yet read by a newcomer · Part 2 of 4 · Card 15 of 38" (E2, E15). HTML.
function topBarHtml(v, screen){
  const u = v.unit, bits = [`Unit ${esc(u.tag)}`, `rev ${u.rev}`];
  if(u.status === 'draft') bits.push(`<span class="draftline">${esc(SAY.draft)}</span>`);
  if(screen.type === 'baseline') return [...bits, `Before the unit &middot; Question ${screen.n} of ${screen.of}`].join(' &middot; ');
  bits.push(`Part ${screen.part + 1} of ${u.parts.length}`);
  const here = {
    card: `Card ${v.cardOrder.indexOf(screen.id) + 1} of ${v.cardOrder.length}`,
    partend: `End of part ${screen.part + 1}`, drill: 'The drill', results: 'Results', complete: 'Unit complete'
  }[screen.type];
  bits.push(here);
  return bits.join(' &middot; ');
}

// What the card renderers need to know about what has been taught by the time the learner reaches `cardId`.
// `full` is a card opened for looking something up: everything has been read.
function cardContext(v, T, cardId, ui, full){
  const at = v.cardOrder.indexOf(cardId);
  const readNow = full ? v.cardOrder : v.cardOrder.slice(0, at + 1);
  const readBefore = full ? v.cardOrder : v.cardOrder.slice(0, at);
  return {
    v, T, cardId, index: at, ui,
    ledgerRead: new Set(v.unit.ledger.filter(l => readNow.some(k => v.card(k).ledger === l.id || l.taughtIn === k)).map(l => l.id)),
    namedSteps: new Set([...v.assumedSteps.map(s => s.code), ...readBefore.map(v.card).filter(k => k.kind === 'question').map(k => k.step)]),
    firstWorked: v.cardOrder.find(id => v.card(id).kind === 'worked')
  };
}

/* ---------- a check is asked with ask.js (E4) ---------- */
// The line that joins what the learner now has for an outcome: the words in the case, the key's answer, the name.
function checkJoined(v, T, card, c){
  const a = card.ask;
  if(a.type === 'solve') return '';
  const answer = v.option(a.step, c.route[a.step][0]), target = caseTarget(v, c);
  if(v.steps.some(s => s.code === card.after)){
    const names = answer.keeps.filter(id => v.taught.includes(id));
    return v.isGate || !names.length ? '' : `This answer leads to ${T.names(names)}.`;
  }
  // in a gate unit the answer is the name, so there is no second thing to join
  if(v.isGate) return a.type === 'phrase' ? `The key’s answer for this case is ${T.a(a.step, answer.id)}.` : '';
  return a.type === 'phrase'
    ? `The key’s answer for this case is ${T.a(a.step, answer.id)}, and the name is ${T.o(target)}.`
    : `The name that goes with this answer is ${T.o(target)}.`;
}
// A check is one case and one question; in a fact unit one row of the facts card before it; in a procedure unit a problem to finish.
function checkItem(ctx, card){
  const { v, T } = ctx, a = card.ask;
  if(a.type === 'fact'){
    if(v.fact(a.row).card !== card.after) lessonFail(`check ${card.id}: fact ${a.row} is not on its facts card ${card.after}`);
    return factItem(v, a.row, 'check');
  }
  const c = v.caseById(card.case), joined = checkJoined(v, T, card, c);
  if(a.type === 'solve') return problemItem(v, c, a.solve, 'check');
  if(a.type === 'phrase') return { type: 'tap', c, step: a.step, say: a.say, answer: a.answer, mode: 'check', joined };
  const among = a.type === 'option' ? a.among : v.step(a.step).options.map(o => o.id);
  const amongNote = a.type === 'option' && !ctx.namedSteps.has(a.step) ? 'Which of the answers you have met so far fits this case?' : undefined;
  return { type: 'case', c, shown: [], asked: [a.step], askName: false, names: [], among, amongNote, mode: 'check', joined };
}
