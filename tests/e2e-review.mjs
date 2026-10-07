// Browser checks added by the review of the lesson engine. Each one pins a defect that was found in the first
// version (lesson standard E2, E3, E5, E6, E16 and the modal, focus and storage contracts), and each was seen to fail
// before its fix. Each function takes `env` from e2e.mjs: { freshPage, check, inspect, clickVisible, openSubject }.
import { registerGateUnit } from './fixtures/gate-unit.mjs';

const SUBJECT = 'psychology', UNIT = 'u2';   // a branch unit of the classification kind: the sample these engine checks are made on
const norm = s => s.replace(/\s+/g, ' ').trim();

// The unit these checks run on is found by its id in the subject's own course, never by its place in it.
async function openUnitTwo(env, width = 390) {
  const { context, page } = await env.freshPage(width);
  const index = await page.evaluate(([S, U]) => SUBJECTS.find(s => s.id === S).course.findIndex(u => u.id === U), [SUBJECT, UNIT]);
  env.check(index >= 0, `${SUBJECT}/${UNIT} is not a unit of the course`);
  await env.openSubject(page, SUBJECT);
  await env.clickVisible(page, `#screen [data-u="${index}"]`);
  return { context, page };
}
const gotoCard = (page, id) => page.evaluate(id => { const r = UNIT_RUN; r.i = r.flow.findIndex(s => s.id === id); paintUnit(); }, id);
const gotoDrill = page => page.evaluate(() => { const r = UNIT_RUN; r.i = r.flow.findIndex(s => s.type === 'drill'); paintUnit(); });
// puts the drill on one stage with exactly these authored items, as if the learner had got there
const showItems = (page, stage, raws, intro = false) => page.evaluate(([stage, raws, intro]) => {
  const run = UNIT_RUN.drillRun;
  run.started = true; run.si = run.stages.findIndex(s => s.ask === stage);
  const st = run.stages[run.si];
  st.shownIntro = !intro; st.queue = raws; run.qi = 0; run.current = null;
  mountDrillRun(document.getElementById('host'), run, () => {});
}, [stage, raws, intro]);
const texts = (page, selector) => page.evaluate(sel => [...document.querySelectorAll(sel)].map(el => el.textContent.replace(/\s+/g, ' ').trim()), selector);

/* ---------- E2: the worked case says in words what is still possible and what is ruled out ---------- */
async function workedReadout(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'worked-tasting');
  const first = norm(await page.locator('#cardbody').textContent());
  env.check(first.includes('Still possible: all five names this unit teaches.'), `worked, question 1: no "Still possible" sentence (${first.slice(-120)})`);
  await page.click('#fwd');
  // the expected sentence is read from the data: the case's own name, and the other four ruled out
  const expected = await page.evaluate(() => { const v = unitView('psychology', 'u2'), own = caseTarget(v, v.caseById('tasting'));
    return `Still possible: ${v.nameOf(own)}. Ruled out: ${joinWords(v.taught.filter(id => id !== own).map(v.nameOf), 'and')}.`; });
  const second = norm(await page.locator('#cardbody').textContent());
  env.check(second.includes(expected), `worked, question 2: no "${expected}" sentence (${second.slice(-160)})`);
  await context.close();
}

/* ---------- E5: a wrong choice is not marked with a tick; no paragraph is printed twice ---------- */
async function wrongChoiceMarks(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'check-sunkcost');
  await page.click('[data-step="R1"] .opt[data-o="addstory"]');
  env.check(await page.locator('.stepdone.wrong').count() === 1, 'a wrong answer to a check is not marked as wrong in its row');
  await gotoCard(page, 'check-confbias');
  await page.click('[data-step="R1"] .opt[data-o="scrutiny"]');
  env.check(await page.locator('.stepdone.wrong').count() === 0, 'a right answer to a check is marked as wrong');
  await gotoDrill(page);
  await showItems(page, 'route', ['parking']);
  await page.click('[data-step="D1"] .opt[data-o="reasoning"]');
  await page.click('[data-step="R1"] .opt[data-o="backward"]');
  await page.click('#nameOpts .opt[data-n="dissonance"]');
  env.check(await page.locator('#host .stepdone.wrong').count() === 1, 'a route item with one wrong answer shows ' + await page.locator('#host .stepdone.wrong').count() + ' wrong rows, not 1');
  const paragraphs = await texts(page, '#host .feedback p');
  const repeated = paragraphs.filter((p, i) => paragraphs.indexOf(p) !== i);
  env.check(repeated.length === 0, `the same paragraph is printed twice in one piece of feedback: "${(repeated[0] || '').slice(0, 70)}"`);
  const warn = await page.evaluate(() => { const el = document.querySelector('#host .warn *'); return el ? Number(getComputedStyle(el).fontWeight) : 0; });
  env.check(warn > 0 && warn < 600, `"Right name, wrong answer on the way" is set in weight ${warn}; weight 600 is for marked words only (E16)`);
  await context.close();
}

/* ---------- E5: a missed "tap the words" check says "The words are" ---------- */
async function tapCheckMiss(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'check-dissonance');
  const pick = await page.evaluate(() => {
    const run = UNIT_RUN, card = run.v.card('check-dissonance'), c = run.v.caseById(card.case);
    const at = c.segments.findIndex(s => s.text.includes(card.ask.answer));
    return { wrong: (at + 1) % c.segments.length, words: c.segments[at].text };
  });
  await page.click(`[data-pick="${pick.wrong}"]`);
  const text = norm(await page.locator('#cardbody').textContent());
  env.check(text.includes(`The words are “${pick.words}”.`), 'a missed tap check does not say "The words are “…”."');
  await context.close();
}

/* ---------- E6: the worked claim lists the choices; a claim is a quotation, not a monospaced slogan ---------- */
async function claimScreens(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoDrill(page);
  await showItems(page, 'claim', ['claim-mismatch'], true);
  const demo = await page.evaluate(() => document.querySelectorAll('#host ul.choices li').length);
  const needs = await page.evaluate(() => UNIT_RUN.v.taught.length);
  env.check(demo === needs, `the worked claim lists ${demo} choices, not the ${needs} the learner view prints`);
  await showItems(page, 'claim', ['claim-mismatch']);
  env.check(await page.locator('#host .passage.plain').count() === 0, 'a claim is set in the large monospaced "plain" style');
  await context.close();
}

/* ---------- the "Taught on" sheet is a modal: background inert, Escape closes, focus goes back ---------- */
async function sheetIsModal(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'check-sunkcost');
  await page.click('[data-step="R1"] .opt[data-o="backward"]');
  await page.focus('[data-open-card]');
  await page.click('[data-open-card]');
  env.check(await page.locator('.sheet').count() === 1, 'the Taught on link did not open a sheet');
  env.check(await page.evaluate(() => document.querySelector('.app').inert === true), 'the page behind the sheet is not inert');
  let escaped = 0;
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    if (!await page.evaluate(() => !!document.activeElement.closest('.sheet'))) escaped++;
  }
  env.check(escaped === 0, `Tab moved focus out of the open sheet ${escaped} times`);
  await page.keyboard.press('Escape');
  env.check(await page.locator('.sheet').count() === 0, 'Escape did not close the sheet');
  env.check(await page.evaluate(() => document.querySelector('.app').inert === false), 'the page stayed inert after the sheet closed');
  env.check(await page.evaluate(() => document.activeElement.hasAttribute('data-open-card')), 'focus did not go back to the link that opened the sheet');
  await page.click('[data-open-card]');
  await page.click('[data-close-sheet]');
  env.check(await page.evaluate(() => document.activeElement.hasAttribute('data-open-card') && !document.querySelector('.sheet')), 'the Close button did not return focus to the link');
  await context.close();
}

/* ---------- focus follows the learner: a new card takes focus on its heading, an answer on its feedback ---------- */
async function focusMoves(env) {
  const { page, context } = await openUnitTwo(env);
  await page.click('#fwd');
  env.check(await page.evaluate(() => document.activeElement.matches('.eyebrow-row h1')), 'after Next, focus is not on the new card\'s heading');
  await gotoCard(page, 'look-dissonance-sunkcost');
  await page.locator('#cardbody [data-pick]').first().click();
  env.check(await page.evaluate(() => !!document.activeElement.closest('.answerline, .feedback')), 'after answering a prompt, focus is not on its feedback');
  await context.close();
}

/* ---------- E16: room between a card's parts ---------- */
async function spacing(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'meet-dissonance');
  const gap = await page.evaluate(() => {
    const secs = [...document.querySelectorAll('#cardbody .lsec')], last = secs[secs.length - 1], next = last.nextElementSibling;
    return next.getBoundingClientRect().top - last.getBoundingClientRect().bottom;
  });
  env.check(gap >= 8, `the key's answer and the paragraph after it are ${Math.round(gap)}px apart`);
  await gotoCard(page, 'worked-tasting');
  const readGap = await page.evaluate(() => {
    const read = document.querySelector('#cardbody .readout'), before = read.previousElementSibling;
    return read.getBoundingClientRect().top - before.getBoundingClientRect().bottom;
  });
  env.check(readGap >= 8, `the "Still possible" readout is ${Math.round(readGap)}px under the reason`);
  await context.close();
}

/* ---------- storage: a failed save is reported, never swallowed ---------- */
async function storageFailures(env) {
  const { page, context } = await env.freshPage(390);
  const reported = await page.evaluate(() => {
    const seen = [], original = console.error, setItem = Storage.prototype.setItem;
    console.error = (...args) => seen.push(args.join(' '));
    Storage.prototype.setItem = () => { throw new Error('quota'); };
    try { storageSave('pl:test', { a: 1 }); } finally { Storage.prototype.setItem = setItem; console.error = original; }
    return seen;
  });
  env.check(reported.length === 1 && /pl:test/.test(reported[0]), `a failed save was not reported (${JSON.stringify(reported)})`);
  const loaded = await page.evaluate(() => {
    const seen = [], original = console.error;
    console.error = (...args) => seen.push(args.join(' '));
    localStorage.setItem('pl:test', '{not json');
    try { storageLoad('pl:test', {}); } finally { console.error = original; localStorage.removeItem('pl:test'); }
    return seen;
  });
  env.check(loaded.length === 1 && /pl:test/.test(loaded[0]), `an unreadable saved value was not reported (${JSON.stringify(loaded)})`);
  await context.close();
}

/* ---------- small wording and data checks ---------- */
async function wordingAndData(env) {
  const { page, context } = await env.freshPage(390);
  const aka = await page.evaluate(() => SAY.aka(['rock and roll', 'folk music', 'jazz'], 'N'));
  env.check(aka.startsWith('You may also hear this called “rock and roll”, “folk music” or “jazz”.'), `the "also called" sentence reads: ${aka.slice(0, 100)}`);
  // every subject: its name, revision and blurb are typed in the subject record only
  const records = await page.evaluate(() => SUBJECTS.map(s => {
    const m = FC.get(s.id).meta;
    return { id: s.id, reads: s.rev === m.rev && s.name === m.name && s.blurb === m.blurb };
  }));
  env.check(records.length > 0, 'no subject has a subject record');
  records.forEach(r => env.check(r.reads, `${r.id}: the subject screen does not read the subject record`));
  // the recap's key section and the orient map name only what the unit teaches
  const keyed = await page.evaluate(() => {
    const v = unitView('psychology', 'u2'), narrowed = { ...v, taught: v.taught.slice(0, 2) }, T = lessonText(narrowed);
    const ui = { picked: null, step: 0, note: {} };
    const section = (id, label) => {
      const d = document.createElement('div');
      d.innerHTML = CARD[v.card(id).kind](cardContext(narrowed, T, id, ui), v.card(id));
      return label ? [...d.querySelectorAll('.lsec')].find(s => s.textContent.startsWith(label)).textContent : d.textContent;
    };
    // the orient map has no section label of its own: the whole card is read
    return section('recap', 'This unit’s questions and answers') + ' ' + section('orient', null);
  });
  const names = await page.evaluate(() => { const v = unitView('psychology', 'u2'); return v.taught.slice(2).map(v.nameOf); });
  const plains = await page.evaluate(() => { const v = unitView('psychology', 'u2'); return v.taught.slice(2).map(id => v.thing(id).plain); });
  const recap = keyed;
  env.check(names.every(n => !recap.includes(n)) && plains.every(p => !recap.includes(p)), 'the recap or the orient map names an outcome the unit has not taught');
  await context.close();
}

/* ---------- the drill: a missed item comes back three items later, and the place survives a reload ---------- */
async function missedItemReturns(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoDrill(page);
  await showItems(page, 'route', ['payroll', 'motorbike', 'parking', 'league', 'viewing', 'boiler', 'cleaner', 'diet']);
  const asked = [];
  let missed = false;
  for (let guard = 0; guard < 40; guard++) {
    if (await page.locator('#host #start, #host .done-screen').count()) break;
    const plan = await page.evaluate(() => {
      const run = UNIT_RUN.drillRun, cur = run.current;
      if (!cur) return null;
      return { id: cur.id, asked: cur.item.asked, target: caseTarget(cur.v, cur.item.c), route: cur.item.asked.map(code => cur.item.c.route[code][0]) };
    });
    if (!plan) break;
    asked.push(plan.id);
    for (const [n, code] of plan.asked.entries()) await page.click(`[data-step="${code}"] .opt[data-o="${plan.route[n]}"]`);
    const wrongName = !missed && plan.id === asked[0];
    const other = await page.evaluate(target => UNIT_RUN.v.key.outcomes.find(o => o.id !== target && o.group === UNIT_RUN.v.outcome(target).group).id, plan.target);
    await page.click(`#nameOpts .opt[data-n="${wrongName ? other : plan.target}"]`);
    missed = missed || wrongName;
    await page.click('#next');
    if (asked.length > 14) break;
  }
  const at = asked.map((id, i) => id === asked[0] ? i : -1).filter(i => i >= 0);
  env.check(at.length >= 2 && at[1] - at[0] >= 4, `a missed item came back after ${at.length >= 2 ? at[1] - at[0] - 1 : 'no'} other items, not at least three (${asked.join(', ')})`);
  await context.close();
}

async function placeSurvivesReload(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'meet-sunkcost');
  // the card after it, and the unit's close cards, are read from the data
  const { next, closes } = await page.evaluate(() => {
    const v = unitView('psychology', 'u2'), parts = v.unit.parts;
    return { next: v.cardOrder[v.cardOrder.indexOf('meet-sunkcost') + 1], closes: parts[parts.length - 1].close };
  });
  await page.click('#fwd');
  const at = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:seen')).u2.at);
  env.check(at === next, `the stored place is "${at}", not the card id ${next}`);
  await page.reload();
  await env.openSubject(page, SUBJECT);
  await page.click('#resume');
  const card = await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].id);
  env.check(card === next, `after a reload, resume opened "${card}"`);
  // done only after the last close card
  const done = () => page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:seen')).u2.done === true);
  await gotoCard(page, closes[0]);
  for (const id of closes) {
    env.check(!(await done()), `the unit is marked done on its close card ${id}`);
    await page.click('#fwd');
  }
  env.check(await done(), 'the unit is not marked done after its close cards');
  await context.close();
}

/* ---------- E5: moving on with the later lines still folded away is logged ---------- */
async function leftFeedbackLogged(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoDrill(page);
  await showItems(page, 'route', ['parking']);
  const answer = async right => {
    await page.click('[data-step="D1"] .opt[data-o="reasoning"]');
    await page.click(`[data-step="R1"] .opt[data-o="${right ? 'addstory' : 'backward'}"]`);
    await page.click('#nameOpts .opt[data-n="dissonance"]');
  };
  await answer(false);
  env.check(await page.locator('[data-show-rest]').count() === 0, 'feedback after a miss is folded away');
  await page.click('#next');
  await answer(true);
  env.check(await page.locator('[data-show-rest]').count() === 1, 'a case answered right again shows no "Show the reasoning" control');
  await page.click('[data-show-rest]');
  env.check(await page.locator('.feedback .taughton').count() === 1, '"Show the reasoning" did not open the later lines');
  const logged = () => page.evaluate(() => (JSON.parse(localStorage.getItem('pl:log')) || []).filter(e => e.type === 'left-feedback').length);
  await page.click('#next');
  env.check(await logged() === 0, 'a learner who opened the reasoning was logged as leaving it');
  await showItems(page, 'route', ['parking']);
  await answer(true);
  await page.click('#next');
  env.check(await logged() === 1, `moving on with the reasoning still folded was not logged (${await logged()} entries)`);
  await context.close();
}

/* ---------- a finished drill is passed through, not run again, and logged once ---------- */
async function finishedDrillIsPassedThrough(env) {
  const { page, context } = await openUnitTwo(env);
  await gotoCard(page, 'worked-tasting');
  await page.evaluate(() => { const r = UNIT_RUN, card = r.v.card('worked-tasting'); r.cards[card.id].ui.step = card.steps.length; paintUnit(); });
  await page.click(`[data-pick="${await page.evaluate(() => UNIT_RUN.v.card('worked-tasting').hold.prompt.answer)}"]`);
  await page.click('#fwd');
  env.check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'drill', 'Next after the last worked case did not open the drill');
  // the learner finishes the drill: the run is at its end
  await page.evaluate(() => { const r = UNIT_RUN.drillRun; r.started = true; r.si = r.stages.length; r.qi = 0; r.current = null; paintUnit(); });
  env.check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'results', 'a finished drill did not lead to its results');
  await page.click('#back');
  await page.click('#fwd');
  env.check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'results', 'Next after a finished drill did not go straight to its results');
  const sets = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:log')).filter(e => e.type === 'set').length);
  env.check(sets === 1, `a finished drill was logged ${sets} times`);
  await context.close();
}

/* ---------- E9: what comes back, and when, is computed from the record ---------- */
async function returnSchedule(env) {
  const { page, context } = await openUnitTwo(env);
  const states = await page.evaluate(() => {
    const v = unitView('psychology', 'u2'), cases = v.casesOf('u2').filter(c => caseTarget(v, c) === 'dissonance' && c.use === 'drill' && !c.kind).map(c => c.id);
    const day = n => addDays(today(), n);
    // each scenario is a list of [case index, day offset, ok, context]; the answer is the state of the name "dissonance"
    const run = tries => {
      itemsCache.psychology = {};
      tries.forEach(([i, d, ok, context]) => {
        const key = `u2/${cases[i]}`, old = itemsCache.psychology[key] ? itemsCache.psychology[key].tries : [];
        itemsCache.psychology = { ...itemsCache.psychology, [key]: { tries: [...old, { d: day(d), rev: v.unit.rev, engine: FC.ENGINE, mode: 'route', context, steps: {}, name: null, ok }] } };
      });
      saveSeenUnit('psychology', 'u2', { rev: v.unit.rev, done: true, at: 'close' });
      const s = returnState(v, 'u2', 'dissonance');
      return { level: s.level, due: s.due === null ? null : s.due === day(0) ? 'today' : s.due < day(0) ? 'past' : 'later', listed: dueReturns('psychology').length };
    };
    return {
      twoDaysAfterTheDrill: run([[0, -2, true, 'unit']]),
      theDayAfterTheDrill: run([[0, -1, true, 'unit']]),
      aWeekAfterTheFirstReturn: run([[0, -9, true, 'unit'], [1, -7, true, 'return']]),
      allThreeReturnsDone: run([[0, -40, true, 'unit'], [1, -38, true, 'return'], [2, -31, true, 'return'], [3, -7, true, 'return']]),
      aMissSetsItBack: run([[0, -9, true, 'unit'], [1, -7, true, 'return'], [2, 0, false, 'return']]),
      twoReturnsOnOneDay: run([[0, -9, true, 'unit'], [1, -7, true, 'return'], [2, -7, true, 'return']]),
      noDrillYet: run([[0, -2, true, 'check']])
    };
  });
  const want = (name, level, due, listed) => env.check(states[name].level === level && states[name].due === due && states[name].listed === listed,
    `${name}: ${JSON.stringify(states[name])}, not level ${level}, due ${due}, ${listed} listed`);
  want('twoDaysAfterTheDrill', 0, 'today', 1);
  want('theDayAfterTheDrill', 0, 'later', 0);
  want('aWeekAfterTheFirstReturn', 1, 'today', 1);
  want('allThreeReturnsDone', 3, null, 0);
  want('aMissSetsItBack', 0, 'later', 0);
  want('twoReturnsOnOneDay', 1, 'today', 1);   // two right answers on one day are one good day
  want('noDrillYet', 0, null, 0);
  await context.close();
}

/* ---------- E11, E17: the drill can be opened without reading the cards ---------- */
async function drillWithoutCards(env) {
  const { page, context } = await openUnitTwo(env);
  env.check(await page.locator('[data-to-drill]').count() === 1, 'the first card offers no way to open the drill');
  await gotoCard(page, 'meet-dissonance');
  env.check(await page.locator('[data-to-drill]').count() === 0, 'a card after the first offers to skip to the drill');
  await gotoCard(page, 'orient');
  await page.click('[data-to-drill]');
  env.check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'drill', 'the control did not open the drill');
  env.check(/The cards are out of view/.test(await page.locator('#host').textContent()), 'the drill did not open on its introduction');
  const at = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:seen')).u2);
  env.check(at.at === 'drill' && at.done !== true, `opening the drill stored ${JSON.stringify(at)}`);
  await page.click('[data-v="subject"]');
  await page.click('#resume');
  env.check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'drill', 'resume after opening the drill did not return to it');
  await gotoCard(page, 'orient');
  await context.close();
}

/* ---------- decision 5: a gate unit (families, one question, no name stage) runs ---------- */
async function gateUnit(env) {
  const { page, context } = await env.freshPage(390);
  const out = await page.evaluate(registerGateUnit).then(async S => page.evaluate(S => {
    const problems = [], seen = [];
    const v = unitView(S, 'u1'), T = lessonText(v);
    const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' '); };
    const ui = { picked: null, step: 0, note: {} };
    for (const id of v.cardOrder) {
      const card = v.card(id);
      try {
        const ctx = cardContext(v, T, id, ui);
        cardHeading(v, T, card);
        if (card.kind === 'check') askHtml({ v, T, item: checkItem(ctx, card), state: freshAsk(), ledgerRead: ctx.ledgerRead, taughtOn: () => null });
        else seen.push(id + ': ' + plain(cardHtml(ctx, card)));
        if (card.kind === 'worked') cardHtml(cardContext(v, T, id, { picked: 'x', step: 1, note: {} }), card);
      } catch (e) { problems.push(`${id}: ${e.message}`); }
    }
    const run = unitDrillRun({ id: S }, v, 'unit');
    if (run.stages.some(s => s.ask === 'name' || s.ask === 'finish')) problems.push('a gate unit has a name or finish stage');
    for (const stage of run.stages) for (const raw of stage.queue) {
      try {
        const built = drillItem(v, raw, stage.ask, []);
        const state = freshAsk();
        if (built.item.type === 'case') { state.answers = { D1: 'b' }; state.done = true; }
        const html = askHtml({ v, T, item: built.item, state, ledgerRead: new Set(['a~b']), taughtOn: w => taughtOnCard(v, T, w) });
        if (built.item.type === 'case') seen.push(stage.ask + ' ' + built.id + ': ' + plain(html));
        if (built.item.askName) problems.push(`${built.id}: a gate item asks for a name`);
      } catch (e) { problems.push(`${stage.ask} ${JSON.stringify(raw)}: ${e.message}`); }
    }
    return { problems, seen };
  }, S));
  env.check(out.problems.length === 0, `a gate unit failed to render: ${out.problems.join('; ')}`);
  const orient = out.seen.find(x => x.startsWith('orient:')) || '';
  env.check(/Alpha thing → the alpha sort/.test(orient) && !/The three things, and the name each will get/.test(orient), `a gate unit's orient card reads: ${orient.slice(0, 200)}`);
  const route = out.seen.find(x => x.startsWith('route d-1')) || '';
  env.check(/You chose Beta thing\. Give that answer when the story shows beta\./.test(route) && !/Right: /.test(route), `a gate route item misses wrongly: ${route.slice(0, 200)}`);
  await context.close();
}

export async function testLessonEngineReview(env) {
  for (const test of [workedReadout, wrongChoiceMarks, tapCheckMiss, claimScreens, sheetIsModal, focusMoves, spacing, storageFailures,
                      wordingAndData, missedItemReturns, placeSurvivesReload, leftFeedbackLogged, finishedDrillIsPassedThrough, returnSchedule, drillWithoutCards, gateUnit]) {
    try { await test(env); }
    catch (err) { env.check(false, `${test.name} crashed: ${err.message.split('\n')[0]}`); }
  }
}
