// Browser checks for the unit kinds and the drill and card features of lesson standard A12, A15, S4, S6, E4, E6, E9, E18, E21:
// gate units, fact units, procedure units, action subjects (plan, legitimate cases, baseline, late return) and the separator item.
// Each kind is proved on a small fixture unit that lives in tests/fixtures and is registered in the page, never in public/, and is
// played through the real unit player. Every group of checks has negative controls: a fault seeded into the engine that must turn
// exactly its own check red and no other.
//
// Run alone: node tests/e2e-kinds.mjs. To wire it into tests/e2e.mjs: import { testKinds } and call await testKinds(unitEnv).
// Each function takes `env` from e2e.mjs: { freshPage, check }.
import { pathToFileURL } from 'node:url';
import { registerGateUnit } from './fixtures/gate-unit.mjs';
import { registerFactUnit } from './fixtures/fact-unit.mjs';
import { registerProcedureUnit } from './fixtures/procedure-unit.mjs';
import { registerActionUnit } from './fixtures/action-unit.mjs';
import { norm, openFixtureUnit, screenInfo, unitText, gotoCard, gotoDrill, showItems, cardPlan, drillPlan, playDrill, walkUnit } from './fixtures/walk.mjs';

const safe = async fn => { try { return !!(await fn()); } catch { return false; } };   // a seeded fault may break a step: that step's check is then red
const textOf = (page, sel) => page.evaluate(sel => [...document.querySelectorAll(sel)].map(el => el.textContent.replace(/\s+/g, ' ').trim()).join(' | '), sel);
const setWorkedToHold = (page, id) => page.evaluate(id => { const r = UNIT_RUN, card = r.v.card(id); cardState(r, card).ui.step = card.steps.length; paintUnit(); }, id);
// "Nothing in the page before a prompt is answered, all of it after, and Next is held back until then" (lesson standard E3, X2)
async function promptHolds(page, wrong = false) {
  const plan = await cardPlan(page, wrong);
  if (!plan.awaiting || !plan.probe) return false;
  const before = await unitText(page);
  const clean = !before.includes(plan.probe) && !(await page.locator('.feedback, .answerline').count()) && !(await page.locator('#fwd').isEnabled());
  for (const sel of plan.clicks) await page.click(sel);
  return clean && (await unitText(page)).includes(plan.probe) && await page.locator('#fwd').isEnabled();
}
const storedTries = (page, S, key) => page.evaluate(([S, key]) => ((JSON.parse(localStorage.getItem(`pl:${S}:items`)) || {})[key] || { tries: [] }).tries, [S, key]);
// puts tries into the practice record: [itemId, days ago, ok, context, mode, name, steps]
const seedTries = (page, S, unitId, list) => page.evaluate(([S, unitId, list]) => {
  itemsCache[S] = {};
  list.forEach(([item, ago, ok, context, mode, name, steps]) => {
    const key = `${unitId}/${item}`, old = itemsCache[S][key] ? itemsCache[S][key].tries : [];
    itemsCache[S] = { ...itemsCache[S], [key]: { tries: [...old, { d: addDays(today(), -ago), rev: 1, engine: 1, mode, context, steps: steps || {}, name: name || null, ok }] } };
  });
  saveSeenUnit(S, unitId, { rev: 1, done: true, at: 'close' });
}, [S, unitId, list]);
// a drill that has been played is finished; this gives the unit a new one to play
const resetDrill = page => page.evaluate(() => { UNIT_RUN.drillRun = null; UNIT_RUN.drillFinished = false; });
const focusInFeedback = page => page.evaluate(() => !!document.activeElement && !!document.activeElement.closest('.answerline, .feedback'));
const kindsSeen = seen => new Set(seen.filter(s => s.type === 'card').map(s => s.kind));
// a returned set mounted in the drill host, answered like a drill; the results are written into the host when it ends
const runReturnSet = (page, S, set) => page.evaluate(([S, set]) => {
  const run = returnSetRun({ id: S }, set || buildReturnSet(S));
  run.started = true; UNIT_RUN.drillRun = run;
  const host = document.getElementById('host');
  mountDrillRun(host, run, () => { host.innerHTML = runResultsHtml(run); });
  return run.stages[0].queue.length;
}, [S, set || null]);

/* ---------- gate units (A15) ---------- */
async function probeGate(env) {
  const { context, page, id: S } = await openFixtureUnit(env, registerGateUnit, 'u1');
  const out = {}, held = [], bad = [];
  let drilled = [];
  const seen = await walkUnit(page, {
    onDrill: asked => { drilled = asked; },
    onBefore: async (s, plan) => {
      if (!['again', 'lookalike', 'exception'].includes(s.kind)) return;
      held.push(!!plan.probe && !(await unitText(page)).includes(plan.probe) && !(await page.locator('.feedback, .answerline').count()) && !(await page.locator('#fwd').isEnabled()));
    },
    onAnswered: async (s, plan) => { if (['again', 'lookalike', 'exception'].includes(s.kind)) held.push((await unitText(page)).includes(plan.probe) && await page.locator('#fwd').isEnabled()); }
  }).catch(e => { bad.push(e.message); return []; });
  out.gateWalk = bad.length === 0 && seen.length > 0 && seen[seen.length - 1].type === 'complete';
  const want = ['orient', 'term', 'meet', 'again', 'lens', 'portrait', 'check', 'lookalike', 'exception', 'refute', 'question', 'worked', 'recap', 'transfer'];
  out.gateKinds = want.every(k => kindsSeen(seen).has(k));
  out.gateStages = JSON.stringify([...new Set(drilled.map(d => d.stage))]) === '["piece","route","claim"]' && drilled.every(d => !d.clicks.some(c => c.includes('nameOpts')));
  out.gateItemKinds = ['case', 'reverse', 'tell', 'claim'].every(t => drilled.some(d => d.type === t));
  out.gatePromptsHold = held.length === 8 && held.every(Boolean);   // again-a, again-b, look-ab, exc-ab: before and after
  await gotoCard(page, 'worked-b'); await setWorkedToHold(page, 'worked-b');
  out.gateWorkedHolds = await safe(() => promptHolds(page));
  const tries = await storedTries(page, S, 'u1/d-1');
  out.gateRecords = tries.some(t => t.mode === 'route' && t.context === 'unit' && t.steps.D1 === 'a');
  // a family taken for another comes back beside it, where the name chosen is the answer given to the gate question
  await seedTries(page, S, 'u1', [['d-3', 3, false, 'unit', 'route', null, { D1: 'a' }]]);
  out.gateReturns = await safe(() => page.evaluate(S => {
    const set = buildReturnSet(S), v = unitView(S, 'u1'), targets = set.map(i => caseTarget(v, v.caseById(i.caseId)));
    return JSON.stringify(targets) === '["c","a"]' && set.every(i => v.caseById(i.caseId).use === 'return');
  }, S));
  await context.close();
  return out;
}
const gateControls = [
  { name: 'a gate item that asks for a name', red: 'gateStages', seed: page => page.evaluate(() => { const o = drillItem; drillItem = (v, raw, ask, ex) => { const b = o(v, raw, ask, ex); return b && b.item.type === 'case' && v.isGate && ask === 'route' ? { ...b, item: { ...b.item, askName: true, names: ['a', 'b', 'c'] } } : b; }; }) },
  { name: 'a commit prompt that shows its explanation', red: 'gatePromptsHold', seed: page => page.evaluate(() => { const o = CARD.lookalike; CARD.lookalike = (ctx, card) => o(ctx, card) + (ctx.ui.picked === null ? ctx.T.PP(card.difference) : ''); }) },
  { name: 'a return that forgets the name taken for it', red: 'gateReturns', seed: page => page.evaluate(() => { usualConfusion = () => null; }) }
];

/* ---------- fact units (A12) ---------- */
async function probeFact(env) {
  const { context, page, id: S } = await openFixtureUnit(env, registerFactUnit, 'u1');
  const out = {}, bad = [];
  let drilled = [];
  const seen = await walkUnit(page, { onDrill: asked => { drilled = asked; } }).catch(e => { bad.push(e.message); return []; });
  out.factWalk = bad.length === 0 && seen.length > 0 && seen[seen.length - 1].type === 'complete';
  out.factKinds = ['orient', 'concept', 'facts', 'check', 'lookalike', 'recap'].every(k => kindsSeen(seen).has(k));
  await gotoCard(page, 'con-terms');
  out.factConcept = await safe(async () => (await page.locator('#cardbody blockquote.passage').count()) === 1 && /Dana voted for her member of the House/.test(await unitText(page)) && /An office comes with a fixed length of time/.test(await unitText(page)));
  await gotoCard(page, 'facts-terms');
  out.factTable = await safe(async () => (await page.locator('#cardbody table.k tr').count()) === 4 && /Two years/.test(await textOf(page, '#cardbody table.k')) && /Every six years/.test(await textOf(page, '#cardbody table.k')));
  await gotoCard(page, 'chk-t-house');
  out.factChoices = await safe(async () => JSON.stringify((await page.locator('#cardbody .opt').allTextContents()).map(norm).sort()) === JSON.stringify(['Four years', 'Six years', 'Two years']));
  out.factNoLeak = await safe(() => promptHolds(page));
  await gotoCard(page, 'chk-t-house');
  out.factMissLine = await safe(async () => {
    await page.click('[data-pick="t-senate"]');
    const miss = await unitText(page);
    return /You chose Six years\. That is the answer to a different fact: How long is a term in the Senate\?/.test(miss) && /Taught on: Term lengths/.test(miss);
  });
  out.factFocus = await safe(async () => (await focusInFeedback(page)) && true);
  out.factSheet = await safe(async () => {
    await page.click('[data-open-card]');
    const sheet = await textOf(page, '.sheet');
    await page.click('[data-close-sheet]');
    return /Term lengths/.test(sheet) && /three times the House/.test(sheet) && !(await page.locator('.sheet').count());
  });
  await gotoCard(page, 'look-terms');
  const stem = await unitText(page);
  out.factLookalike = await safe(async () => {
    const holds = await promptHolds(page);
    return holds && /Which of these two facts has the answer “Six years”\?/.test(stem) && (await page.locator('#cardbody table.k.pair').count()) === 1 && /Fact B is the long one\. Six years is three times Two years/.test(await unitText(page));
  });
  out.factDrill = JSON.stringify([...new Set(drilled.map(d => d.stage))]) === '["fact"]' && new Set(drilled.map(d => d.id)).size === 6 && drilled.length === 6;
  const tries = await storedTries(page, S, 'u1/t-house');
  out.factRecords = tries.some(t => t.mode === 'fact' && t.context === 'unit' && t.name === 't-house' && t.ok === true) && tries.some(t => t.mode === 'check' && t.name === 't-senate' && t.ok === false);
  // the drill asks a missed fact again, three items later at the soonest, and the results name the stage
  await resetDrill(page);
  await gotoDrill(page);
  const again = await playDrill(page, { wrongOnce: true });
  const order = again.map(a => a.id), at = order.map((x, i) => x === order[0] ? i : -1).filter(i => i >= 0);
  out.factRequeue = at.length >= 2 && at[1] - at[0] >= 4 && /Facts from memory/.test(await unitText(page));
  // returns: a fact comes back on the schedule, beside the fact it was swapped with
  await seedTries(page, S, 'u1', [['t-house', 3, true, 'unit', 'fact', 't-house'], ['t-house', 3, false, 'unit', 'fact', 't-senate']]);
  out.factReturns = await safe(() => page.evaluate(S => {
    const set = buildReturnSet(S), due = dueReturns(S).map(d => d.target);
    return due.length === 1 && due[0] === 't-house' && JSON.stringify(set.map(i => i.fact)) === JSON.stringify(['t-house', 't-senate']) && set.every(i => i.fact && !i.caseId);
  }, S));
  out.factReturnRun = await safe(async () => {
    await resetDrill(page);
    await gotoDrill(page);
    await runReturnSet(page, S, [{ unitId: 'u1', fact: 't-house' }, { unitId: 'u1', fact: 't-senate' }]);
    const asked = await playDrill(page);
    const t = await storedTries(page, S, 'u1/t-house');
    return asked.length === 2 && asked.every(a => a.type === 'fact') && t[t.length - 1].context === 'return' && t[t.length - 1].ok === true;
  });
  await context.close();
  return out;
}
const factControls = [
  { name: 'a concept card with no case', red: 'factConcept', seed: page => page.evaluate(() => { CARD.concept = (ctx, card) => `<p>${ctx.T.t(card.link)}</p>`; }) },
  { name: 'a facts card with no table', red: 'factTable', seed: page => page.evaluate(() => { const o = CARD.facts; CARD.facts = (ctx, card) => o(ctx, card).replace(/<table[\s\S]*?<\/table>/, ''); }) },
  { name: 'a fact look-alike that shows its difference first', red: 'factLookalike', seed: page => page.evaluate(() => { const o = CARD.lookalike; CARD.lookalike = (ctx, card) => o(ctx, card) + (card.facts && ctx.ui.picked === null ? ctx.T.PP(card.difference) : ''); }) },
  { name: 'a fact check that shows how it fits before the answer', red: 'factNoLeak', seed: page => page.evaluate(() => { const o = factHtml; factHtml = ask => o(ask) + (ask.state.picked === null && ask.item.mode === 'check' ? `<p>${ask.item.row.relates}</p>` : ''); }) },
  { name: 'a fact check that leaves out a choice', red: 'factChoices', seed: page => page.evaluate(() => { const o = factHtml; factHtml = ask => { const h = o(ask); return ask.item.mode === 'check' && ask.item.row.id === 't-house' ? h.replace('<button class="opt" data-pick="t-president">Four years</button>', '') : h; }; }) },
  { name: 'a wrong fact that is not named', red: 'factMissLine', seed: page => page.evaluate(() => { SAY.factSwapped = () => 'Wrong.'; }) },
  { name: 'returns that skip facts', red: 'factReturns', seed: page => page.evaluate(() => { returnItemsFor = () => []; }) },
  { name: 'an answer that leaves focus where it was', red: 'factFocus', seed: page => page.evaluate(() => { focusOn = () => {}; }) }
];

/* ---------- procedure units (A12) ---------- */
async function probeProc(env) {
  const { context, page, id: S } = await openFixtureUnit(env, registerProcedureUnit, 'u1');
  const out = {}, bad = [];
  let drilled = [];
  const seen = await walkUnit(page, { onDrill: asked => { drilled = asked; } }).catch(e => { bad.push(e.message); return []; });
  out.procWalk = bad.length === 0 && seen.length > 0 && seen[seen.length - 1].type === 'complete';
  out.procKinds = ['orient', 'meet', 'solved', 'check', 'lookalike', 'question', 'recap'].every(k => kindsSeen(seen).has(k)) && seen.filter(s => s.kind === 'solved').length === 4;
  // a solved example: the step that carries the idea stops for a commit prompt, and nothing after it is in the page until it is answered
  await gotoCard(page, 'solved-of-1');
  const before = await unitText(page);
  out.solvedHolds = before.includes('0.25 × £120 = £30') && !before.includes('£30 is taken off') && !before.includes('The shop takes £30 off') && !before.includes('That is why this step is a multiplication')
    && (await page.locator('#cardbody .stepopen.prompt').count()) === 1 && !(await page.locator('#fwd').isEnabled());
  await page.click('[data-pick="y"]');
  const solvedFocus = await focusInFeedback(page);
  const after = await unitText(page);
  out.solvedReveals = after.includes('That is why this step is a multiplication') && after.includes('£30 is taken off') && after.includes('The shop takes £30 off the £120.')
    && after.includes('That is true, but it does not say why the step is a multiplication.') && await page.locator('#fwd').isEnabled();
  const commits = await storedTries(page, S, 'u1/commit:solved-of-1');
  out.solvedRecorded = commits.length >= 1 && commits[commits.length - 1].mode === 'commit' && commits[commits.length - 1].ok === false;
  // a problem to finish in a check: the working up to its last step, not the last
  await gotoCard(page, 'check-of-solve');
  const solve = await unitText(page);
  const solveHolds = solve.includes('20% = 20 ÷ 100 = 0.2') && !solve.includes('0.2 × 90 = 18') && (await page.locator('#cardbody [data-pick]').count()) === 3;
  // the drill items: last step, whole problem, route
  await resetDrill(page);
  await gotoDrill(page);
  await showItems(page, 'last', ['dl-of1']);
  const last = await unitText(page);
  out.lastStep = solveHolds && !last.includes('0.25 × 80') && last.includes('25% = 25 ÷ 100 = 0.25') && !last.includes('= 20') && (await page.locator('#host [data-pick]').count()) === 3 && !(await page.locator('#host .feedback').count());
  out.slipNamed = await safe(async () => {
    await page.click('#host [data-pick="1"]');
    const slip = await unitText(page);
    return slip.includes('You chose 60. That is the answer you get when you take the part away from the amount, so you find what is left and not the part itself.') && slip.includes('The answer is: 20') && slip.includes('0.25 × 80 = 20');
  });
  out.procFocus = solvedFocus && await focusInFeedback(page);
  out.solvedSheet = await safe(async () => {
    await page.click('[data-open-card]');
    const sheet = await textOf(page, '.sheet');
    await page.click('[data-close-sheet]');
    return /Worked: a percent of an amount/.test(sheet) && /The shop takes £30 off the £120\./.test(sheet) && !(await page.locator('.sheet').count());
  });
  await showItems(page, 'whole', ['dw-of1']);
  const whole = await unitText(page);
  out.wholeNoSteps = !/Turn the percentage|0\.25|÷/.test(whole.replace(/The whole problem is yours.*?answer\./, '')) && (await page.locator('#host [data-pick]').count()) === 3;
  await showItems(page, 'route', ['dr-of3']);
  out.routeOrder = await safe(async () => {
    const nothing = (await page.locator('#host [data-pick]').count()) === 0 && (await page.locator('#host [data-step="D1"]').count()) === 1;
    await page.click('[data-step="D1"] .opt[data-o="percent"]');
    const stillNo = (await page.locator('#host [data-pick]').count()) === 0;
    await page.click('[data-step="R1"] .opt[data-o="one"]');
    const nameNext = (await page.locator('#nameOpts').count()) === 1 && (await page.locator('#host [data-pick]').count()) === 0;
    await page.click('#nameOpts .opt[data-n="of"]');
    return nothing && stillNo && nameNext && (await page.locator('#host [data-pick]').count()) === 3 && !(await page.locator('#host .feedback').count());
  });
  await showItems(page, 'route', ['dr-of3']);
  out.routeMarks = await safe(async () => {
    const plan = await drillPlan(page, true);   // the route and the kind of problem right, the number wrong
    for (const sel of plan.clicks) await page.click(sel);
    const routed = await unitText(page);
    return /Right: Percent of an amount/.test(routed) && /Answers right/.test(routed) && /The answer is: £33/.test(routed) && /The working, step by step/.test(routed) && !/Why not|brought back/.test(routed);
  });
  const t = await storedTries(page, S, 'u1/dr-of3');
  out.procRecords = t.length >= 1 && t[t.length - 1].mode === 'route' && t[t.length - 1].ok === false && t[t.length - 1].name === 'of' && JSON.stringify([...new Set(drilled.map(d => d.mode))]) === '["last","whole","route"]';
  // returns: a problem type comes back as a whole problem, on a fresh problem, beside the type it is taken for
  await seedTries(page, S, 'u1', [['dr-of1', 3, true, 'unit', 'route', 'of'], ['dr-ch1', 3, true, 'unit', 'route', 'change']]);
  out.procReturns = await safe(async () => {
    const set = await page.evaluate(S => buildReturnSet(S), S);
    await runReturnSet(page, S);
    const cur = await page.evaluate(() => { const i = UNIT_RUN.drillRun.current.item; return { type: i.type, solve: i.solve }; });
    return set.length === 2 && set.every(i => i.caseId.startsWith('rt-')) && cur.type === 'problem' && cur.solve === 'route';
  });
  await context.close();
  return out;
}
const procControls = [
  { name: 'a solved example that shows its reason before the choice', red: 'solvedHolds', seed: page => page.evaluate(() => { const o = CARD.solved; CARD.solved = (ctx, card) => o(ctx, card) + (ctx.ui.picked === null ? ctx.T.PP(card.hold.reason) : ''); }) },
  { name: 'a wrong answer that does not name its slip', red: 'slipNamed', seed: page => page.evaluate(() => { SAY.slipLine = text => `You chose ${text}.`; }) },
  { name: 'a last-step item that shows no working', red: 'lastStep', seed: page => page.evaluate(() => { const o = problemItem; problemItem = (v, c, solve, mode, joined) => o(v, c, solve === 'last' ? 'whole' : solve, mode, joined); }) },
  { name: 'an answer that leaves focus where it was', red: 'procFocus', seed: page => page.evaluate(() => { focusOn = () => {}; }) },
  { name: 'a route item that skips the key’s questions', red: 'routeOrder', seed: page => page.evaluate(() => { const o = problemItem; problemItem = (v, c, solve, mode, joined) => { const i = o(v, c, solve, mode, joined); return solve === 'route' ? { ...i, asked: [] } : i; }; }) }
];

/* ---------- action subjects (E9, E18, E21, A10) ---------- */
async function probeAction(env) {
  const { context, page, id: S } = await openFixtureUnit(env, registerActionUnit, 'u1');
  const out = {};
  // the baseline comes first, and says nothing about the answers
  const first = await screenInfo(page);
  out.baselineFirst = first.type === 'baseline' && first.of === 4 && /Before the unit/.test(await page.locator('.unitbar').textContent()) && !(await page.locator('#fwd').isEnabled());
  const preText = await unitText(page);
  await page.click('[data-judge="real"]');
  const baselineFocus = await page.evaluate(() => !!document.activeElement.closest('.answerline'));
  const kept = await unitText(page);
  out.baselineSilent = !(await page.locator('.feedback, .marks, .mark').count()) && !/Right:|The answer|It was real|Something was wrong/.test(kept)
    && /Kept\. Nothing is shown about this one until you finish Unit One\./.test(kept) && await page.locator('#fwd').isEnabled() && preText.includes('Is this real, or is something wrong with it?');
  const bl = await storedTries(page, S, 'u1/bl-1');
  out.baselineStored = bl.length === 1 && bl[0].context === 'baseline' && bl[0].mode === 'baseline' && bl[0].ok === false;
  await page.fill('#baseWhy', 'it looked odd');
  out.baselineWhy = (await page.evaluate(S => JSON.parse(localStorage.getItem(`pl:${S}:notes`)).u1.baseline['bl-1'], S)) === 'it looked odd';
  out.baselineNeverScored = await safe(() => page.evaluate(S => { const s = returnState(unitView(S, 'u1'), 'u1', 'pay'); return s.level === 0 && s.due === null && dueReturns(S).length === 0; }, S));
  let results = '';
  // a baseline left half answered comes back first, with only what is left
  await page.evaluate(S => { openUnit(SUBJECTS.find(s => s.id === S), 0); }, S);
  const resumed = await screenInfo(page);
  out.baselineResume = resumed.type === 'baseline' && resumed.of === 3 && resumed.id === 'bl-2';
  const seen = await walkUnit(page, {});
  out.actionWalk = seen[seen.length - 1].type === 'complete' && seen.filter(s => s.type === 'baseline').length === 3;
  const done = await unitText(page);
  out.baselineAfter = (done.match(/You said: /g) || []).length === 4 && /It was real\./.test(done) && /Something was wrong with it\./.test(done);
  // asked once: opening the unit again goes straight to its first card
  await page.evaluate(S => { openUnit(SUBJECTS.find(s => s.id === S), 0); }, S);
  out.baselineOnce = (await screenInfo(page)).type === 'card';
  // plan: optional, saved when the learner says so, shown back once
  await page.evaluate(S => { dropPlan(S, 'u1'); }, S);
  await gotoCard(page, 'plan');
  out.planOptional = (await page.locator('#fwd').isEnabled()) && /This card is optional/.test(await unitText(page)) && await page.locator('#planSave').isDisabled();
  await page.click('#planCues .opt >> nth=1');
  const prefilled = await page.evaluate(() => [document.querySelector('#planCue').value, document.querySelector('#planThen').value]);
  await page.fill('#planThen', 'stop and go to the real site myself, today');
  await page.click('#planSave');
  const planFocus = await page.evaluate(() => document.activeElement.id === 'planSave');
  out.actionFocus = baselineFocus && planFocus;
  out.planSave = prefilled[0] === 'a message asks for a code' && /Saved on this device/.test(await unitText(page)) && await safe(() => page.evaluate(S => {
    const plan = JSON.parse(localStorage.getItem(`pl:${S}:notes`)).u1.plan;
    return plan.cue === 'a message asks for a code' && plan.then === 'stop and go to the real site myself, today' && plan.saved === today() && !plan.shown
      && savedPlanText(S, 'u1') === 'If I see a message asks for a code, then I will stop and go to the real site myself, today.';
  }, S));
  out.planShownOnce = await safe(() => page.evaluate(S => {
    saveNote(S, 'u1', { plan: { cue: 'a message asks for money', then: 'ring them', saved: today() } });
    const shown = plansToShowBack(S);
    keepPlan(S, 'u1');
    const afterKeep = plansToShowBack(S).length === 0 && savedPlanText(S, 'u1') !== null;
    changePlan(S, 'u1', 'a message asks me to pay', 'ring them back');
    const changed = savedPlanText(S, 'u1') === 'If I see a message asks me to pay, then I will ring them back.' && plansToShowBack(S).length === 0;
    dropPlan(S, 'u1');
    return shown.length === 1 && shown[0].unitId === 'u1' && afterKeep && changed && savedPlanText(S, 'u1') === null && plansToShowBack(S).length === 0;
  }, S));
  // the legitimate-case rule, and what the results say about sound cases
  out.legitRule = await safe(() => page.evaluate(S => {
    let said = null;
    try { requireLegitCases(unitView(S, 'u1'), [{ ask: 'route', items: [['d1-pay', 'd1-share']] }]); } catch (e) { said = e.message; }
    ['u1', 'u2'].forEach(u => requireLegitCases(unitView(S, u), unitView(S, u).unit.drill.rungs));
    return !!said && /route stage of an action subject's drill has no case where nothing was wrong/.test(said);
  }, S));
  await resetDrill(page);
  await gotoDrill(page);
  const asked = await playDrill(page);
  results = await unitText(page);
  out.legitResults = /Stories where nothing was wrong/.test(results) && /Stories where something was wrong/.test(results) && asked.some(a => a.id === 'd1-fine');
  // the late return: a fourth return about twelve weeks after the third (each return on a case of its own, as the schedule counts first tries)
  await seedTries(page, S, 'u1', [['d1-pay', 100, true, 'unit', 'route', null, { D1: 'pay' }], ['rt1-pay-1', 98, true, 'return', 'route', null, { D1: 'pay' }], ['rt1-pay-2', 91, true, 'return', 'route', null, { D1: 'pay' }], ['rt1-pay-3', 66, true, 'return', 'route', null, { D1: 'pay' }]]);
  out.lateReturn = await safe(() => page.evaluate(S => { const s = returnState(unitView(S, 'u1'), 'u1', 'pay'); return s.level === 3 && s.due === addDays(today(), -66 + 84); }, S));
  await context.close();
  return out;
}
const actionControls = [
  { name: 'a baseline that tells the learner the answer', red: 'baselineSilent', seed: page => page.evaluate(() => { SAY.baselineKept = () => 'Right: it was real. Kept.'; }) },
  { name: 'a baseline kept as an ordinary drill answer', red: 'baselineStored', seed: page => page.evaluate(() => { const o = recordTry; recordTry = (s, u, i, r, a) => o(s, u, i, r, a.mode === 'baseline' ? { ...a, mode: 'route' } : a); }) },
  { name: 'an answer that leaves focus where it was', red: 'actionFocus', seed: page => page.evaluate(() => { focusOn = () => {}; }) },
  { name: 'a plan that is never saved', red: 'planSave', seed: page => page.evaluate(() => { savePlan = () => {}; }) },
  { name: 'a drill that does not look for a case where nothing was wrong', red: 'legitRule', seed: page => page.evaluate(() => { requireLegitCases = () => {}; }) },
  { name: 'a schedule with no late return', red: 'lateReturn', seed: page => page.evaluate(() => { returnGaps = () => RETURN_GAPS; }) }
];

/* ---------- the separator item (S6) ---------- */
async function probeSeparator(env) {
  const { context, page, id: S } = await openFixtureUnit(env, registerActionUnit, 'u2');
  const out = { separatorFocus: false };
  await gotoDrill(page);
  await showItems(page, 'piece', [{ separator: 'invoice~prize' }]);
  const stem = await unitText(page);
  const opts = (await page.locator('#host .opt').allTextContents()).map(norm).sort();
  // the question the key itself says separates the pair: the one on which the two share no answer
  const truth = await page.evaluate(() => { const v = unitView('acttest', 'u2'), [x, y] = v.ledger('invoice~prize').pair; return v.unitSteps.filter(s => !s.options.some(o => o.keeps.includes(x) && o.keeps.includes(y))).map(s => s.q); });
  out.separatorAsked = /You cannot tell whether a story is Fake invoice or Prize scam\. Which question tells these two apart\?/.test(stem)
    && JSON.stringify(opts) === JSON.stringify(['Does the payment go to the account you always pay?', 'Were you expecting a payment request from this sender?']) && truth.length === 1 && !(await page.locator('#host .feedback').count());
  out.separatorRight = await safe(async () => {
    await page.click(`#host .opt >> text="${truth[0]}"`);
    const right = await unitText(page);
    out.separatorFocus = await focusInFeedback(page);
    return right.includes(`Right: ${truth[0]}`) && /Fake invoice: Expecting it\. Prize scam: Not expecting it\./.test(right) && /Taught on: Did you expect it/.test(right);
  });
  await showItems(page, 'piece', [{ separator: 'invoice~prize' }]);
  out.separatorWrong = await safe(async () => {
    await page.click('#host .opt >> text="Does the payment go to the account you always pay?"');
    const wrong = await unitText(page);
    return /The answer is: Were you expecting a payment request from this sender\?/.test(wrong) && /Both of these give the answer A new account, so that question does not separate them\./.test(wrong);
  });
  const t = await storedTries(page, S, 'u2/separator:invoice~prize');
  out.separatorRecorded = t.length === 2 && t.every(x => x.mode === 'separator') && t[0].ok === true && t[1].ok === false;
  out.separatorGuards = await safe(() => page.evaluate(S => {
    const said = f => { try { f(); return null; } catch (e) { return e.message; } };
    const two = said(() => separatorItem(unitView(S, 'u2'), 'realbill~prize')), one = said(() => separatorItem(unitView(S, 'u1'), 'pay~fine'));
    return /2 of the unit's questions separate the pair, not exactly one/.test(two) && /teaches 1 question/.test(one);
  }, S));
  await context.close();
  return out;
}
const separatorControls = [
  { name: 'a separator answer marked as a miss', red: 'separatorRight', seed: page => page.evaluate(() => { const o = separatorHtml; separatorHtml = ask => o(ask).replace('Right: ', 'The answer is: '); }) },
  { name: 'an answer that leaves focus where it was', red: 'separatorFocus', seed: page => page.evaluate(() => { focusOn = () => {}; }) },
  { name: 'a separator item that does not check the pair', red: 'separatorGuards', seed: page => page.evaluate(() => { const o = separatorItem; separatorItem = (v, id) => { try { return o(v, id); } catch { return { type: 'separator', entry: v.ledger(id), codes: v.unitSteps.map(s => s.code), right: v.unitSteps[0].code, mode: 'separator' }; } }; }) }
];

/* ---------- every kind has a renderer, and no screen is cut off at 360px ---------- */
async function probeBuilt(env) {
  const { context, page } = await env.freshPage(390);
  if (env.fault) await env.fault(page);
  const built = await page.evaluate(() => {
    const items = { case: 'caseHtml', tap: 'tapHtml', tell: 'tellHtml', reverse: 'reverseHtml', claim: 'claimHtml', separator: 'separatorHtml', fact: 'factHtml', problem: 'problemHtml' };
    return ['orient', 'term', 'meet', 'again', 'lens', 'portrait', 'refute', 'lookalike', 'exception', 'question', 'worked', 'recap', 'transfer', 'plan', 'concept', 'facts', 'solved'].every(k => typeof CARD[k] === 'function')
      && Object.values(items).every(name => typeof window[name] === 'function');
  });
  const src = await Promise.all(['view', 'records', 'cards', 'ask', 'drill', 'unit', 'unit-flow', 'taught'].map(f => page.evaluate(f => fetch(`app/lessons/${f}.js`).then(r => r.text()), f)));
  await context.close();
  return { allKindsBuilt: built, nothingNotBuilt: src.every(s => !/not built yet|no renderer yet/.test(s)) };
}
const builtControls = [
  { name: 'a card kind with no renderer', red: 'allKindsBuilt', seed: page => page.evaluate(() => { delete CARD.solved; }) }
];

const FIXTURES = [[registerGateUnit, ['u1']], [registerFactUnit, ['u1']], [registerProcedureUnit, ['u1']], [registerActionUnit, ['u1', 'u2']]];
async function probeLayout(env) {
  const problems = [];
  for (const [register, units] of FIXTURES) {
    for (const unit of units) {
      const { context, page } = await openFixtureUnit(env, register, unit, 360);
      const look = async label => {
        const bad = await page.evaluate(() => {
          const vw = document.documentElement.clientWidth, out = [];
          const over = document.documentElement.scrollWidth - vw;
          if (over > 0) out.push(`${over}px of sideways scroll`);
          for (const el of document.querySelectorAll('#screen *')) {
            const r = el.getBoundingClientRect();
            if (r.width === 0 && r.height === 0) continue;
            if (r.right > vw + 0.5 || r.left < -0.5) out.push(`<${el.tagName.toLowerCase()}> "${el.textContent.trim().slice(0, 20)}" spans ${Math.round(r.left)}..${Math.round(r.right)}`);
          }
          for (const el of document.querySelectorAll('button, .opt, .chip, .mark, th, td'))
            if (el.offsetParent !== null && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).textOverflow !== 'ellipsis') out.push(`cut off: "${el.textContent.trim().slice(0, 20)}"`);
          return out.slice(0, 3);
        });
        if (bad.length) problems.push(`${unit} ${label}: ${bad.join('; ')}`);
      };
      await walkUnit(page, {
        onScreen: s => look(`${s.type} ${s.id || ''}`), onAnswered: s => look(`${s.id} answered`),
        onItem: async (p, answered) => { if (answered) await look('drill feedback'); }
      }).catch(e => problems.push(`${unit}: walk stopped: ${e.message.split('\n')[0]}`));
      await context.close();
    }
  }
  return { noSidewaysScroll: problems.length === 0, problems: problems.slice(0, 4).join(' | ') };
}
const layoutControls = [
  { name: 'a facts card wider than the screen', red: 'noSidewaysScroll', seed: page => page.evaluate(() => { const o = CARD.facts; CARD.facts = (ctx, card) => o(ctx, card) + '<div style="width:700px;height:4px"></div>'; }) }
];

/* ---------- the runner ---------- */
async function group(env, name, probe, controls) {
  const positive = await probe(env);
  for (const [key, ok] of Object.entries(positive)) if (key !== 'problems') env.check(ok === true, `${name}: ${key} failed${key === 'noSidewaysScroll' ? ' (' + positive.problems + ')' : ''}`);
  for (const c of controls) {
    const result = await probe({ ...env, fault: c.seed });
    const red = Object.keys(result).filter(k => k !== 'problems' && !result[k]);
    env.check(red.length === 1 && red[0] === c.red, `${name}, negative control "${c.name}": expected only ${c.red} to go red, got [${red.join(', ') || 'none'}]`);
  }
}
export async function testKinds(env) {
  const groups = [['gate unit', probeGate, gateControls], ['fact unit', probeFact, factControls], ['procedure unit', probeProc, procControls],
    ['action subject', probeAction, actionControls], ['separator item', probeSeparator, separatorControls], ['engine', probeBuilt, builtControls], ['360px', probeLayout, layoutControls]];
  for (const [name, probe, controls] of groups) {
    try { await group(env, name, probe, controls); }
    catch (err) { env.check(false, `${name} crashed: ${err.message.split('\n')[0]}`); }
  }
}

/* ---------- standalone ---------- */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { chromium } = await import('playwright');
  const { startServer } = await import('./static-server.mjs');
  const failures = []; let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const server = await startServer(), browser = await chromium.launch();
  const freshPage = async (width = 390) => {
    const context = await browser.newContext({ viewport: { width, height: 800 } });
    const page = await context.newPage();
    page.setDefaultTimeout(5000);
    page.on('pageerror', err => failures.push(`page error: ${err.message}`));
    await page.goto(server.url);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    return { context, page };
  };
  try { await testKinds({ freshPage, check }); }
  catch (err) { failures.push(`crashed: ${err.stack || err}`); }
  await browser.close(); await server.close();
  if (failures.length) { console.error(`✗ ${failures.length} of ${checks} unit-kind checks failed:`); failures.forEach(f => console.error('  - ' + f)); process.exit(1); }
  console.log(`✓ ${checks} unit-kind checks passed`);
}
