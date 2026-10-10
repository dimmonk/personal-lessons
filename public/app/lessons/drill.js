/* ===================== LESSONS: THE DRILL ===================== */
// Practice as a ramp (lesson standard E6): stages in order; inside a stage the authored groups are shuffled
// within their tier band (clean, then varied, then misleading) and never split, so look-alikes stay next to
// each other; a missed item comes back at least three items later until it has been answered right once.
// The same runner asks a subject's part of the weekly review (E9, section 24) and "Practice again" (E14).

const TIER_BANDS = ['clean', 'varied', 'misleading'];
const REQUEUE_GAP = 3;

/* ---------- from the unit's data to things that can be asked ---------- */
const specCase = (v, raw) => v.caseById(typeof raw === 'string' ? raw : raw.case);
function specTier(v, raw){
  if(typeof raw === 'string' || raw.case){ const c = specCase(v, raw); return c.tier || 'clean'; }
  return 'clean';
}
// the names offered at a naming step: every name taught so far in the case's branch, so the answers
// before it never give the name away
function namesOffered(v, c){
  const target = caseTarget(v, c);
  if(!v.isOutcome(target)) return v.key.gate.options.map(o => o.id);
  const group = v.outcome(target).group;
  // every name of the branch taught so far: by this unit, by a unit it assumes (lesson standard S2), or by a unit already done;
  // the case's own name is always among them, so a naming step always has its right answer
  const taughtSoFar = o => o.unit === v.unitId || (v.unit.assumes || []).includes(o.unit) || rebuiltUnitDone(v.subjectId, o.unit);
  return v.key.outcomes.filter(o => o.group === group && (taughtSoFar(o) || o.id === target)).map(o => o.id);
}
// A case from an earlier unit's bank: a due name first, else the least recently seen; never labeled.
function earlierCase(subjectId, unitId, exclude){
  const v = unitView(subjectId, unitId);
  // the bank: an earlier unit's drill and return stories, and a procedure unit's problems (lesson standard A12: earlier types return unlabeled)
  const pool = v.casesOf(unitId).filter(c => (!c.kind || c.kind === 'problem') && (c.use === 'drill' || c.use === 'return') && !exclude.includes(c.id));
  if(!pool.length) return null;
  const now = today();
  const due = v.taught.filter(t => { const s = returnState(v, unitId, t); return s.due && s.due <= now; });
  const lastSeen = c => { const t = triesOf(subjectId, unitId, c.id); return t.length ? t[t.length - 1].d : ''; };
  const ranked = [...pool].sort((a, b) => {
    const da = due.includes(caseTarget(v, a)) ? 0 : 1, db = due.includes(caseTarget(v, b)) ? 0 : 1;
    return da - db || (lastSeen(a) < lastSeen(b) ? -1 : lastSeen(a) > lastSeen(b) ? 1 : 0);
  });
  return { v, c: ranked[0] };
}
// Turn one authored drill entry into an item to ask. `stageAsk` is how the stage asks a plain case.
function drillItem(v, raw, stageAsk, exclude){
  if(typeof raw === 'object' && raw.tell) return { v, id: 'tell:' + raw.tell, item: { type: 'tell', entry: v.ledger(raw.tell), mode: 'tell' } };
  if(typeof raw === 'object' && raw.separator) return { v, id: 'separator:' + raw.separator, item: separatorItem(v, raw.separator) };
  if(typeof raw === 'object' && raw.fact) return { v, id: raw.fact, item: factItem(v, raw.fact, 'fact') };
  if(typeof raw === 'object' && raw.earlier){
    const got = earlierCase(v.subjectId, raw.earlier, exclude);
    if(!got) return null;
    const ev = got.v, c = got.c;
    // an earlier problem comes back as a route item: choose the procedure, then solve it (A12)
    if(c.kind === 'problem') return { v: ev, id: c.id, item: problemItem(ev, c, 'route', 'route') };
    const taughtSteps = ev.routeSteps(c).filter(code => ev.step(code).unit === ev.unitId || ev.unit.assumes.includes(ev.step(code).unit));
    const named = !!c.outcome;
    return { v: ev, id: c.id, item: { type: 'case', c, shown: [], asked: taughtSteps, askName: named, names: named ? namesOffered(ev, c) : [],
                                      mode: named ? 'route' : 'piece', stops: !named && !ev.isGate ? false : !named && v.unitId !== ev.unitId } };
  }
  const c = specCase(v, raw);
  if(c.kind === 'reverse') return { v, id: c.id, item: { type: 'reverse', c, mode: 'reverse' } };
  if(c.use === 'claim') return { v, id: c.id, item: { type: 'claim', c, mode: 'claim' } };
  if(c.kind === 'problem' && typeof raw === 'string') return { v, id: c.id, item: problemItem(v, c, stageAsk, stageAsk) };
  const steps = v.routeSteps(c);
  if(typeof raw === 'object') return { v, id: c.id, item: { type: 'case', c, shown: [], asked: [raw.step], askName: false, names: [], mode: 'piece' } };
  const named = v.isOutcome(caseTarget(v, c));
  const shape = {
    name:   { shown: steps, asked: [], askName: true },
    finish: { shown: steps.slice(0, -1), asked: steps.slice(-1), askName: named },
    route:  { shown: [], asked: steps, askName: named },
    piece:  { shown: [], asked: steps.slice(-1), askName: false }
  }[stageAsk] || lessonFail(`drill stage "${stageAsk}" cannot ask a plain case`);
  return { v, id: c.id, item: { type: 'case', c, ...shape, names: shape.askName ? namesOffered(v, c) : [], mode: stageAsk } };
}
// The order of one stage: groups shuffled inside their tier band, items shuffled inside their group.
function stageQueue(v, rung){
  const banded = TIER_BANDS.map(tier => shuffled(rung.items.filter(group => specTier(v, group[0]) === tier)));
  return banded.flat().flatMap(group => shuffled(group));
}
function stageInstruction(v, rung){
  if(rung.ask === 'route' && v.unit.kind === 'P') return SAY.stage.routeSolve();
  if(rung.ask === 'route' && v.isGate) return SAY.stage.routeGate(SAY.example(v));
  const say = SAY.stage[rung.ask] || lessonFail(`drill stage "${rung.ask}" has no instruction`);
  if(rung.ask === 'finish') return say(v.priorSteps.length);
  return say();
}

/* ---------- a run: a unit's drill, a part of the review, or "Practice again" ---------- */
// run = { subj, v, context, title, stages:[{ ask, instruction, demo, queue:[raw], intro }], si, qi, current, tries:[], onEnd }
// Action subjects (lesson standard A10, V37): every stage that asks about cases holds one where nothing was wrong,
// so the learner is never taught that every case has a fault.
function requireLegitCases(v, rungs){
  if(!(v.meta && v.meta.action)) return;
  const caseOf = raw => { const id = typeof raw === 'string' ? raw : raw.case; return id ? v.caseById(id) : null; };
  rungs.forEach(rung => {
    const cases = rung.items.flat().map(caseOf).filter(c => c && c.kind !== 'reverse' && c.use !== 'claim');
    if(cases.length && !cases.some(c => caseTarget(v, c) && v.isLegit(caseTarget(v, c))))
      lessonFail(`unit ${v.unitId}: the ${rung.ask} stage of an action subject's drill has no case where nothing was wrong`);
  });
}
function unitDrillRun(subj, v, context, fromAsk){
  const rungs = v.unit.drill.rungs;
  requireLegitCases(v, rungs);
  const start = fromAsk ? Math.max(0, rungs.findIndex(r => r.ask === fromAsk)) : 0;
  const stages = rungs.slice(start).map(rung => ({ ask: rung.ask, instruction: stageInstruction(v, rung), demo: rung.demo || null, queue: stageQueue(v, rung), shownIntro: false }));
  const earlier = rungs.flatMap(r => r.items.flat()).filter(raw => typeof raw === 'object' && raw.earlier).length;
  return { subj, v, context, title: context === 'again' ? 'Practice again' : 'The drill', intro: context === 'unit' ? SAY.drillIntro(earlier, v.isFacts, SAY.example(v)) : null,
           add: context === 'unit' ? v.unit.drill.add : null, stages, si: 0, qi: 0, current: null, tries: [], started: false, asked: [], met: [] };
}
// A run over items from several units (the review, the faulty-claims tile): one stage, whose items name their own unit.
// queue entries: { unitId, caseId } | { unitId, fact }, and returned: true where the item is a return (the results count those apart).
function crossUnitRun(subj, { context, title, intro, ask, instruction, queue }){
  return { subj, v: null, context, title, intro, add: null, stages: [{ ask, instruction, demo: null, queue, shownIntro: true }],
           si: 0, qi: 0, current: null, tries: [], started: false, asked: [], met: [] };
}
// One subject's part of the weekly review (lesson standard section 24): every item is a whole story or a fact from memory, asked
// with its answer and reason after each; `intro` names the subject. Tries are recorded with the context 'review'.
function reviewRun(subj, items, intro){
  const allFacts = items.length > 0 && items.every(i => i.fact);
  return crossUnitRun(subj, { context: 'review', title: 'Review', intro, ask: allFacts ? 'fact' : 'route',
    instruction: allFacts ? SAY.stage.fact() : SAY.stage.route(), queue: items.map(i => ({ returned: true, unitId: i.unitId, caseId: i.caseId, fact: i.fact })) });
}
// The faulty claims of units the learner has finished, asked the way a drill asks them: the learner answers before the fault is shown.
function claimsRun(subj, items){
  return crossUnitRun(subj, { context: 'again', title: SAY.claimsTitle, intro: SAY.claimsIntro + ' ' + SAY.stakes, ask: 'claim',
    instruction: SAY.stage.claimsAlone(), queue: shuffled(items) });
}
function runItem(run, raw){
  if(raw.unitId){
    const v = unitView(run.subj.id, raw.unitId);
    return raw.fact ? drillItem(v, { fact: raw.fact }, 'fact', []) : drillItem(v, raw.caseId, run.stages[run.si].ask, []);
  }
  return drillItem(run.v, raw, run.stages[run.si].ask, run.asked);
}
const runCounts = run => ({
  total: run.stages.reduce((n, s) => n + s.queue.length, 0),
  done: run.stages.slice(0, run.si).reduce((n, s) => n + s.queue.length, 0) + run.qi
});

/* ---------- Back, inside a drill (lesson standard E11) ---------- */
// A drill inside a unit goes back to the cards: the run keeps its place, so Next comes back to it. A review or
// "Practice again" has run.leave and goes back to where it was started. The control belongs to the drill's frame, above the
// part that every answer repaints, so it is never lost.
const drillBackHtml = run => `<div class="drillnav"><button class="linkish" data-drill-back>${icon('back', 14)}${esc(run.leave ? SAY.backFrom(run.backName || run.subj.name) : SAY.backToCards)}</button></div>`;
const wireDrillBack = run => on('[data-drill-back]', () => run.leave ? run.leave() : goBack(UNIT_RUN));
// A drill that is not part of a unit (a review, "Practice again"): its own screen, with its Back control. A run goes back to the
// subject unless it says otherwise (run.leaveView, run.backName).
function paintDrillScreen(subj, run, label, onEnd){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="iconbtn" data-v="${run.leaveView || 'subject'}" aria-label="${esc(SAY.backFrom(run.backName || subj.name))}">${icon('back', 20)}</button><span class="m">${label}</span><span class="spacer"></span></div>
    ${drillBackHtml(run)}<div id="host"></div></div>`;
  on('[data-v]', el => go(el.dataset.v));
  wireDrillBack(run);
  mountDrillRun(document.getElementById('host'), run, onEnd);
}

// Moves the drill on: shows what is next, scrolls to the top and puts focus where the learner reads from.
function showNext(host, run, onEnd, focus){
  mountDrillRun(host, run, onEnd);
  window.scrollTo(0, 0);
  focusOn(focus);
}
function paintDrillIntro(host, run, onEnd){
  host.innerHTML = `<div class="lesson drillintro"><p>${esc(run.intro)}</p>${run.add ? lessonText(run.v).PP(run.add) : ''}</div>
    <div class="actbar"><button class="btn" id="start">Start${icon('arrow')}</button></div>`;
  on('#start', () => { run.started = true; showNext(host, run, onEnd, '#host .readhead, #host .lesson'); }, host);
}
function paintStageIntro(host, run, stage, onEnd){
  const ask = { v: run.v, T: lessonText(run.v) };
  host.innerHTML = `<div class="readhead" style="padding:16px 0"><span class="m">${run.stages.length > 1 ? `Stage ${run.si + 1} of ${run.stages.length}` : 'One stage'}</span></div>
    <div class="lesson"><p>${esc(stage.instruction)}</p></div>
    ${stage.demo ? lessonSection('A claim worked for you. Nothing is asked.', claimDemoHtml(ask, run.v.caseById(stage.demo))) : ''}
    <div class="actbar"><button class="btn" id="start">Go on${icon('arrow')}</button></div>`;
  on('#start', () => { stage.shownIntro = true; showNext(host, run, onEnd, '#host .readhead'); }, host);
}
// Builds the item the learner is on. False when there is nothing to draw (an earlier unit with no case left).
function beginItem(run, stage){
  const built = runItem(run, stage.queue[run.qi]);
  if(!built) return false;
  // "first" is per stage and case: a case asked again after a miss, or in a later stage, is not a first try
  const itemKeyId = itemKey(built.v.unitId, built.id), metKey = `${run.si}/${itemKeyId}`;
  run.current = { ...built, state: freshAsk(), first: !run.met.includes(metKey), key: itemKeyId };
  run.met = [...run.met, metKey];
  run.current.item.seenBefore = seenBefore(built.v.subjectId, built.v.unitId, built.id);
  run.asked = [...run.asked, built.id];
  return true;
}
// An answer: recorded in the practice record and in this run's tries; a miss goes back into the queue.
function recordAnswer(run, stage, cur, outcome){
  const v = cur.v;
  recordTry(v.subjectId, v.unitId, cur.id, v.unit.rev, { mode: cur.item.mode, context: run.context, steps: outcome.steps, name: outcome.name, ok: outcome.ok });
  const target = cur.item.target || (cur.item.c ? caseTarget(v, cur.item.c) : null);
  // in a gate unit the name chosen is the answer given to the gate question
  const chosen = outcome.name || (cur.item.c && v.isGate && v.key.gate ? outcome.steps[v.key.gate.code] || null : null);
  run.tries = [...run.tries, { stage: stage.ask, mode: cur.item.mode, ok: outcome.ok, first: cur.first, returned: !!stage.queue[run.qi].returned,
                               target, chosen, unitId: v.unitId, legit: !!(cur.item.c && cur.item.c.kind !== 'reverse' && target && v.isLegit(target)) }];
  // a missed item is asked again, at least three items later, until it has been answered right once
  if(!outcome.ok){
    const at = Math.min(stage.queue.length, run.qi + 1 + REQUEUE_GAP);
    stage.queue = [...stage.queue.slice(0, at), stage.queue[run.qi], ...stage.queue.slice(at)];
  }
}
function paintItem(host, run, stage, onEnd){
  const cur = run.current, v = cur.v, T = lessonText(v);
  const ask = { v, T, item: cur.item, state: cur.state, taughtOn: what => taughtOnCard(v, T, what) };
  const counts = runCounts(run);
  const paint = () => {
    host.innerHTML = `<div class="readhead" style="padding:16px 0">
        <span class="m">${run.stages.length > 1 ? `Stage ${run.si + 1} of ${run.stages.length} · ` : ''}Item ${counts.done + 1} of ${counts.total}</span>
        <span class="m s">${esc(run.title)}</span></div>
      ${askHtml(ask)}
      <div class="actbar">${cur.state.done
        ? `<button class="btn" id="next">Next${icon('arrow')}</button>`
        : `<button class="btn ghost" id="skip">Skip for now</button>`}</div>`;
    wireAsk(host, ask, paint, outcome => recordAnswer(run, stage, cur, outcome));
    const move = () => {
      // moving on while the later lines are still behind "Show the reasoning" is logged (lesson standard E5, E8)
      if(cur.state.done && host.querySelector('[data-show-rest]'))
        logEvent('left-feedback', { subject: v.subjectId, unit: v.unitId, rev: v.unit.rev, card: cur.id });
      run.qi++; run.current = null;
      showNext(host, run, onEnd, '#host .readhead');
    };
    on('#next', move, host);
    on('#skip', move, host);
    on('[data-open-card]', el => openCardSheet(v, el.dataset.openCard, el), host);
  };
  paint();
}
function mountDrillRun(host, run, onEnd){
  const stage = run.stages[run.si];
  if(!run.started && run.intro) return paintDrillIntro(host, run, onEnd);
  if(!stage) return onEnd(run);
  if(run.qi >= stage.queue.length){
    run.si++; run.qi = 0; run.current = null;
    return mountDrillRun(host, run, onEnd);
  }
  if(!stage.shownIntro) return paintStageIntro(host, run, stage, onEnd);
  if(!run.current && !beginItem(run, stage)){ run.qi++; return mountDrillRun(host, run, onEnd); }
  paintItem(host, run, stage, onEnd);
}

/* ---------- results: the learner's own numbers (lesson standard E10) ---------- */
function runResultsHtml(run){
  const firsts = run.tries.filter(t => t.first);
  const acc = list => { const a = firstTryAccuracy(list); return a.n ? `${a.ok} of ${a.n}` : '—'; };
  const stageNames = { name: 'Naming', piece: 'One question at a time', finish: 'Finishing the answers', route: 'Whole stories', claim: 'Faulty claims',
                       last: 'The last step', whole: 'Whole problems', fact: 'Facts from memory' };
  const stages = [...new Set(run.tries.map(t => t.stage))];
  const whole = firsts.filter(t => ['finish', 'route', 'whole'].includes(t.mode)), single = firsts.filter(t => ['piece', 'name', 'tell', 'reverse', 'separator', 'fact', 'last'].includes(t.mode));
  const confusions = {};
  run.tries.filter(t => t.target && t.chosen && t.chosen !== t.target).forEach(t => {
    const k = `${t.unitId}|${t.target}|${t.chosen}`; confusions[k] = (confusions[k] || 0) + 1;
  });
  const worst = Object.keys(confusions).sort((a, b) => confusions[b] - confusions[a])[0];
  const rows = [];
  stages.forEach(s => rows.push([stageNames[s] || s, acc(firsts.filter(t => t.stage === s))]));
  if(whole.length && single.length){ rows.push(['All whole stories, every stage', acc(whole)]); rows.push(['All single questions, every stage', acc(single)]); }
  // action subjects: accuracy on sound cases beside cases with a fault (lesson standard E8)
  const named = firsts.filter(t => t.target && t.mode !== 'reverse');
  if(run.subj && FC.get(run.subj.id).meta && FC.get(run.subj.id).meta.action && named.some(t => t.legit) && named.some(t => !t.legit)){
    rows.push([SAY.soundHead, acc(named.filter(t => t.legit))]);
    rows.push([SAY.unsoundHead, acc(named.filter(t => !t.legit))]);
  }
  let confusion = '';
  if(worst){
    const [unitId, target, chosen] = worst.split('|'), v = unitView(run.subj.id, unitId);
    const entry = v.ledgerFor(target, chosen);
    confusion = `<div class="vblock"><span class="m">The pair you mixed up most</span><p>You took ${esc(v.nameOf(target))} for ${esc(v.nameOf(chosen))}${confusions[worst] > 1 ? ` ${confusions[worst]} times` : ''}.`
      + (entry ? ` ${lessonText(v).t(paras(entry.test).join(' '))}` : '') + '</p></div>';
  }
  const due = dueSummary(run.subj.id);
  return `<div class="done-screen results">
      <h2>The drill is done</h2>
      <p>These are your first tries. Anything missed was asked again before the end. ${SAY.stakes}</p>
      <table class="k results">${rows.map(([label, value]) => `<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`).join('')}</table>
      ${confusion}
      <div class="vblock soft"><span class="m">What comes back, and when</span><p>${esc(due)}</p></div>
    </div>`;
}
// one plain sentence about the return schedule, computed from the record
function dueSummary(subjectId){
  const sv = subjectView(subjectId), now = today(), dates = [];
  sv.unitIds().forEach(unitId => {
    const v = unitView(subjectId, unitId);
    v.taught.forEach(t => { const s = returnState(v, unitId, t); if(s.due) dates.push(s.due); });
  });
  if(!dates.length) return 'Every name comes back on later days with a new story, starting about two days after its unit’s drill.';
  const dueNow = dates.filter(d => d <= now).length, next = dates.filter(d => d > now).sort()[0];
  const days = next ? Math.round((new Date(next) - new Date(now)) / 86400000) : null;
  return (dueNow ? `${cap(numWord(dueNow))} name${dueNow === 1 ? ' is' : 's are'} due now. ` : '')
    + (next ? `The next return is in ${days} day${days === 1 ? '' : 's'}, on a story you have not seen.` : 'Nothing else is scheduled yet.');
}
