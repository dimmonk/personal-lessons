// Browser checks for the screens around the unit player: Due today, Practice again, the subject's opening map, the generated
// reference, the full determination, Mixed, Progress, Search, "Review these first", a Back control
// in the drill, the log export and the card list beside a unit (lesson standard E9 to E14, E18, E19).
// Every check reads what it expects from the app's own data (tests/fixtures/app-data.mjs): no subject, unit, revision or count is
// typed here. One fixture stands in for what the real subjects may not hold: mini (an action subject with two units).
// Each function takes `env` from e2e.mjs: { freshPage, check, inspect, clickVisible, openSubject, screenText }.
// Run alone with: node tests/e2e-screens.mjs   (screenshots go to $FC_SHOTS, else the scratch folder named below)
import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { registerMiniSubject, showMiniSubject } from './fixtures/mini-subject.mjs';
import { subjectMeta, unitRecords, pickNamingUnit, keyShape, numberWord } from './fixtures/app-data.mjs';
import { moveOn } from './fixtures/walk.mjs';

const DEFAULT_SHOTS = '/private/tmp/claude-501/-Users-dim-Documents-PersonalLessons/1288c7ec-dc23-42b8-85ad-117757285e29/scratchpad/engine-shots-2';
const SHOT_DIR = () => process.env.FC_SHOTS || null;
const WIDTHS = [390, 360];
const norm = s => s.replace(/\s+/g, ' ').trim();
const screenOf = async page => norm(await page.locator('#screen').textContent());

async function shot(page, name) {
  if (!SHOT_DIR() || (page.viewportSize().width !== 390 && !name.startsWith('wide'))) return;
  await mkdir(SHOT_DIR(), { recursive: true });
  // a tall viewport, so the sticky action bar sits at the foot of the picture and not across the middle of it
  const size = page.viewportSize(), height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: size.width, height: Math.max(size.height, height) });
  await page.screenshot({ path: `${SHOT_DIR()}/${name}.png` });
  await page.setViewportSize(size);
}
const stray = page => page.evaluate(() => {
  const vw = document.documentElement.clientWidth, bad = [];
  for (const el of document.querySelectorAll('#screen *')) {
    if (el.closest('.chips')) continue;   // the filter chips are a row that scrolls on purpose
    const folded = el.closest('details:not([open])');
    if (folded && !el.closest('summary')) continue;   // the inside of a folded section is not on the screen, whatever rectangle it reports
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > vw + 0.5 || r.left < -0.5) bad.push(`<${el.tagName.toLowerCase()}> "${el.textContent.trim().slice(0, 24)}" spans ${Math.round(r.left)}..${Math.round(r.right)} of ${vw}`);
  }
  return bad.slice(0, 4);
});
async function layout(env, page, label) {
  await env.inspect(page, label);
  const bad = await stray(page);
  env.check(bad.length === 0, `${label}: content outside the screen: ${bad.join('; ')}`);
}

/* ---------- which unit a screen is run on ---------- */
// The screens that need a finished unit with names to come back run on whichever branch unit the data holds first
// (state: UNITS, read once); nothing here names a subject, a unit, a revision or a count.
let UNITS = null;
async function unitFacts(env) {
  if (!UNITS) { const probe = await env.freshPage(390); UNITS = await unitRecords(probe.page); await probe.context.close(); }
  return UNITS;
}
async function target(env, need) {
  const t = pickNamingUnit(await unitFacts(env), need);
  if (!t) throw new Error('no subject has a branch unit that teaches names and has a route stage' + (need ? ' (and the extra need)' : ''));
  return t;
}
const nameCount = (page, n) => numberWord(page, n).then(w => w.charAt(0).toUpperCase() + w.slice(1));

/* ---------- setting a page up ---------- */
// A unit finished some days ago, with one right first try on a route item for each of its names, so every name is due.
const seedDone = (page, subject, unit, daysAgo) => page.evaluate(([subject, unit, daysAgo]) => {
  const day = addDays(today(), -daysAgo), v = unitView(subject, unit), items = {};
  v.taught.forEach(target => {
    const c = v.casesOf(unit).find(x => !x.kind && x.use === 'drill' && caseTarget(v, x) === target);
    items[`${unit}/${c.id}`] = { tries: [{ d: day, rev: v.unit.rev, engine: FC.ENGINE, mode: 'route', context: 'unit',
      steps: Object.fromEntries(Object.entries(c.route).map(([k, a]) => [k, a[0]])), name: target, ok: true }] };
  });
  const before = JSON.parse(localStorage.getItem(`pl:${subject}:items`) || '{}'), seen = JSON.parse(localStorage.getItem(`pl:${subject}:seen`) || '{}');
  localStorage.setItem(`pl:${subject}:items`, JSON.stringify({ ...before, ...items }));
  localStorage.setItem(`pl:${subject}:seen`, JSON.stringify({ ...seen, [unit]: { rev: v.unit.rev, done: true, at: 'close' } }));
}, [subject, unit, daysAgo]);
const setStore = (page, key, value) => page.evaluate(([k, v]) => localStorage.setItem(k, JSON.stringify(v)), [key, value]);
const getStore = (page, key) => page.evaluate(k => JSON.parse(localStorage.getItem(k)), key);
// a page where the target unit was finished some days ago, so every name it teaches is due
async function dueWith(env, t, width, daysAgo = 3) {
  const { context, page } = await env.freshPage(width);
  await seedDone(page, t.subject, t.unit, daysAgo);
  await page.reload();
  return { context, page };
}
async function withMini(env, width, seed) {
  const { context, page } = await env.freshPage(width);
  await page.evaluate(registerMiniSubject);
  if (seed) await seed(page);
  await page.evaluate(showMiniSubject);
  return { context, page };
}
const toLibrary = (env, page) => env.clickVisible(page, '[data-v="library"]');
const goSubject = async (env, page, id) => { await toLibrary(env, page); await env.clickVisible(page, `#screen [data-s="${id}"]`); };

/* ---------- answering a run from its own data ---------- */
const runPlan = (page, which, wrong) => page.evaluate(([which, wrong]) => {
  const run = which === 'unit' ? UNIT_RUN.drillRun : PRACTICE.run, cur = run.current;
  if (!cur) return null;
  const item = cur.item, c = item.c, v = cur.v, base = { type: item.type, caseId: c ? c.id : null, mode: item.mode, stage: run.stages[run.si].ask };
  if (item.type === 'case') {
    const clicks = item.asked.map((code, n) => {
      const ids = item.among || v.step(code).options.map(o => o.id);
      return `[data-step="${code}"] .opt[data-o="${wrong && n === 0 ? ids.find(id => !c.route[code].includes(id)) : c.route[code][0]}"]`;
    });
    if (item.askName) clicks.push(`#nameOpts .opt[data-n="${caseTarget(v, c)}"]`);
    return { ...base, clicks };
  }
  if (item.type === 'tap') return { ...base, clicks: [`[data-pick="${c.segments.findIndex(s => s.text.includes(item.answer))}"]`] };
  if (item.type === 'tell') return { ...base, clicks: [`[data-pick="${item.entry.id}"]`] };
  if (item.type === 'reverse') return { ...base, clicks: [`[data-pick="${c.options.findIndex(o => o.voice === c.outcome)}"]`] };
  return { ...base, clicks: [`[data-pick="${claimParts({ v, T: lessonText(v) }, c).answer}"]`] };
}, [which, wrong]);
// Plays a run to its results screen, right every time; `stopAfter` leaves it after that many answered items.
async function playRun(page, which, stopAfter = Infinity) {
  let answered = 0;
  for (let guard = 0; guard < 400 && answered < stopAfter; guard++) {
    if (await page.locator('.done-screen.results').count()) break;
    if (await page.locator('#start').count()) { await page.click('#start'); continue; }
    if (await page.locator('#next').count()) { await page.click('#next'); continue; }
    const plan = await runPlan(page, which, false);
    if (!plan) break;
    for (const sel of plan.clicks) await page.click(sel);
    answered++;
  }
  return answered;
}

/* ---------- Due today (E9, E10) ---------- */
export async function testDueToday(env, width = 390) {
  const { check } = env, t = await target(env), { context, page } = await dueWith(env, t, width);
  const taught = t.taught;
  await toLibrary(env, page);
  const tile = norm(await page.locator('[data-due-tile]').textContent());
  const first = await nameCount(page, taught);
  check(/Due today/.test(tile) && tile.includes(`${first} name${taught === 1 ? ' is' : 's are'} due`) && tile.includes(`${t.subjectName} · ${taught} due`), `the library tile reads "${tile}", not ${first} names due in ${t.subjectName}`);
  await layout(env, page, `${width}px library with a due tile`);
  await shot(page, 'due-library-tile');
  await env.clickVisible(page, `#screen [data-s="${t.subject}"]`);
  check(await page.locator('[data-due-tile]').count() === 1, 'the subject screen has no Due today tile');
  await layout(env, page, `${width}px subject with a due tile`);
  await page.click(`[data-due="${t.subject}"]`);
  const set = await page.evaluate(([S, U]) => {
    const items = PRACTICE.items, v = unitView(S, U);
    return { n: items.length, unseen: items.every(i => !seenBefore(S, i.unitId, i.caseId)),
      names: items.map(i => caseTarget(v, v.caseById(i.caseId))), queue: PRACTICE.run.stages[0].queue.length, ask: PRACTICE.run.stages[0].ask,
      pairs: items.map((i, k) => k % 2 === 0 && items[k + 1] ? !!v.ledgerFor(caseTarget(v, v.caseById(i.caseId)), caseTarget(v, v.caseById(items[k + 1].caseId))) : true) };
  }, [t.subject, t.unit]);
  check(set.n >= 2 && set.n <= 6, `a returned set has ${set.n} cases, not 2 to 6`);
  check(set.unseen, 'a returned set shows a case the learner has already seen');
  check(set.pairs.every(Boolean), 'a due name is not placed next to a case of a name it is paired with');
  check(set.ask === 'route' && set.queue === set.n, `the set is asked as ${set.ask} items (${set.queue} queued of ${set.n})`);
  await layout(env, page, `${width}px returned set intro`);
  await shot(page, 'due-set-intro');
  await page.click('#start');
  const whole = await page.evaluate(() => { const i = PRACTICE.run.current.item; return { asked: i.asked.length, route: Object.keys(i.c.route).length, name: i.askName, shown: i.shown.length }; });
  check(whole.asked === whole.route && whole.name && whole.shown === 0, `a returned item is not a whole route (${JSON.stringify(whole)})`);
  await layout(env, page, `${width}px returned set item`);
  await shot(page, 'due-set-item');
  const answered = await playRun(page, 'practice');
  check(answered >= set.n, `${answered} items were answered of ${set.n}`);
  check(await page.locator('.done-screen.results').count() === 1, 'the returned set did not end on the results screen');
  const results = await screenOf(page);
  check(/That set is done/.test(results) && /Stories that came back today/.test(results) && /What comes back, and when/.test(results), `the results screen reads "${results.slice(0, 160)}"`);
  await layout(env, page, `${width}px returned set results`);
  await shot(page, 'due-set-results');
  const items = await getStore(page, `pl:${t.subject}:items`), log = await getStore(page, 'pl:log');
  const returned = Object.values(items).flatMap(e => e.tries).filter(x => x.context === 'return');
  check(returned.length >= set.n && returned.every(x => x.mode === 'route'), 'the returned items were not recorded as route tries in the context "return"');
  check(log.some(e => e.type === 'return' && e.subject === t.subject), 'a finished returned set was not logged');
  await page.click('#screen [data-v="library"]');
  const left = await page.evaluate(S => dueReturns(S).length, t.subject);
  check(left < taught, `${left} of ${taught} names are still due after the set; answered names should leave the schedule for later days`);
  await context.close();
}

// The negative control for the most important check: a returned set must not show a case the learner has already seen when
// an unseen one exists. The same measurement is run against a picker that is made to repeat a seen case, and must go red.
export async function testReturnedSetIsNew(env) {
  const { check } = env, t = await target(env), { context, page } = await dueWith(env, t, 390);
  await page.evaluate(([S, U]) => {   // the learner has seen the first return case of every name
    const v = unitView(S, U), items = JSON.parse(localStorage.getItem(`pl:${S}:items`));
    v.taught.forEach(name => {
      const c = v.unit.drill.returns.map(v.caseById).find(x => caseTarget(v, x) === name);
      // met in a mixed round, which leaves the schedule alone: seen, and still due
      items[`${U}/${c.id}`] = { tries: [{ d: addDays(today(), -1), rev: v.unit.rev, engine: FC.ENGINE, mode: 'piece', context: 'mixed', steps: {}, name: null, ok: false }] };
    });
    localStorage.setItem(`pl:${S}:items`, JSON.stringify(items));
  }, [t.subject, t.unit]);
  await page.reload();
  const measure = () => page.evaluate(S => {
    const sets = Array.from({ length: 8 }, () => buildReturnSet(S));
    return sets.flat().filter(i => seenBefore(S, i.unitId, i.caseId)).length;
  }, t.subject);
  check(await page.evaluate(S => buildReturnSet(S).length, t.subject) >= 2, 'the measurement is empty: no set was built for the names that are due');
  const repeats = await measure();
  check(repeats === 0, `${repeats} returned cases were ones the learner had already seen, while unseen ones were left`);
  await page.evaluate(() => {
    const real = pickReturnCase;
    globalThis.pickReturnCase = (v, unitId, target, exclude) => {
      const seen = v.casesOf(unitId).find(c => caseTarget(v, c) === target && !c.kind && seenBefore(v.subjectId, unitId, c.id) && !exclude.includes(c.id));
      return seen ? { c: seen, repeat: false } : real(v, unitId, target, exclude);
    };
  });
  const broken = await measure();
  check(broken > 0, 'negative control: the "never a seen case" measurement did not go red against a picker that repeats a seen case');
  await context.close();
}

/* ---------- the plan reminder (E18) ---------- */
export async function testPlanReminder(env) {
  const { check } = env;
  const seed = async page => {
    await seedDone(page, 'mini', 'u1', 3);
    await page.evaluate(() => localStorage.setItem('pl:mini:notes', JSON.stringify({ u1: { plan: { cue: 'a rush request', then: 'stop and check', saved: addDays(today(), -4) } } })));
  };
  for (const choice of ['keep', 'change', 'drop']) {
    const { context, page } = await withMini(env, 390, seed);
    await env.openSubject(page, 'mini');
    await page.click('[data-due="mini"]');
    const text = await screenOf(page);
    check(/Your plan/.test(text) && text.includes('If I see a rush request, then I will stop and check.'), `${choice}: the plan reminder reads "${text.slice(0, 200)}"`);
    if (choice === 'keep') { await layout(env, page, '390px plan reminder'); await shot(page, 'plan-reminder'); }
    if (choice === 'change') {
      await page.click('#planChange');
      await page.fill('#planCue', 'a fake invoice'); await page.fill('#planThen', 'call the number I know');
      await page.click('#planSave');
    } else await page.click(choice === 'keep' ? '#planKeep' : '#planDrop');
    check(await page.locator('#start').count() === 1, `${choice}: the set did not follow the reminder`);
    const plan = (await getStore(page, 'pl:mini:notes')).u1.plan;
    if (choice === 'drop') check(!plan, `drop: the plan is still saved (${JSON.stringify(plan)})`);
    if (choice === 'keep') check(plan && plan.shown && plan.cue === 'a rush request', `keep: the plan is ${JSON.stringify(plan)}`);
    if (choice === 'change') check(plan && plan.cue === 'a fake invoice' && plan.then === 'call the number I know' && plan.shown, `change: the plan is ${JSON.stringify(plan)}`);
    await page.click('[data-drill-back]');
    check(await page.locator('[data-due="mini"]').count() === 1, `${choice}: the set is no longer due after Back with nothing answered`);
    await page.click('[data-due="mini"]');
    check(await page.locator('#planKeep').count() === 0, `${choice}: the plan was shown a second time`);
    await context.close();
  }
}

/* ---------- Practice again (E14) ---------- */
export async function testPracticeAgain(env, width = 390) {
  const { check } = env, t = await target(env), { context, page } = await dueWith(env, t, width, 10);
  // the learner has met two piece items on different days: the older one must come first. Two items of the unit's own piece stage
  // that sit in the same group and tier, so only their recency can put one ahead of the other.
  const pair = await page.evaluate(([S, U]) => {
    const v = unitView(S, U), rung = v.unit.drill.rungs.find(r => r.ask === 'piece');
    const id = raw => typeof raw === 'string' ? raw : raw.case;
    const group = rung.items.find(g => g.filter(raw => id(raw)).length >= 2) || null;
    const raws = group ? group.slice(0, 2) : rung.items.slice(0, 2).map(g => g[0]);
    return raws.map(raw => ({ id: id(raw), step: raw.step || v.routeSteps(v.caseById(id(raw)))[0] }));
  }, [t.subject, t.unit]);
  await page.evaluate(([S, U, pair]) => {
    const items = JSON.parse(localStorage.getItem(`pl:${S}:items`)), v = unitView(S, U);
    const mk = (n, p) => ({ tries: [{ d: addDays(today(), -n), rev: v.unit.rev, engine: FC.ENGINE, mode: 'piece', context: 'unit', steps: { [p.step]: v.caseById(p.id).route[p.step][0] }, name: null, ok: true }] });
    items[`${U}/${pair[0].id}`] = mk(9, pair[0]); items[`${U}/${pair[1].id}`] = mk(1, pair[1]);
    localStorage.setItem(`pl:${S}:items`, JSON.stringify(items));
  }, [t.subject, t.unit, pair]);
  await page.reload();
  await env.openSubject(page, t.subject);
  check(await page.locator(`[data-again="${t.unit}"]`).count() === 1, 'a finished unit has no "Practice again" tile');
  check(/Practice again/.test(await page.locator(`[data-again="${t.unit}"]`).textContent()), 'the tile does not say "Practice again"');
  await layout(env, page, `${width}px subject with Practice again`);
  await shot(page, 'practice-again-tile');
  await page.click(`[data-again="${t.unit}"]`);
  const info = await page.evaluate(([a, b]) => {
    const run = PRACTICE.run, q = run.stages[0].queue, at = id => q.findIndex(x => x === id || (x && x.case === id));
    return { stages: run.stages.map(s => s.ask), context: run.context, title: run.title, older: at(a), newer: at(b) };
  }, [pair[0].id, pair[1].id]);
  check(info.stages[0] === 'piece' && !info.stages.includes('name'), `Practice again starts at ${info.stages[0]} (stages ${info.stages.join(', ')}), not at the piece stage`);
  check(info.context === 'again' && info.title === 'Practice again', `the run is "${info.title}" in context "${info.context}"`);
  check(info.older >= 0 && info.newer >= 0 && info.older < info.newer, `the case seen 9 days ago (at ${info.older}) does not come before the one seen yesterday (at ${info.newer})`);
  await layout(env, page, `${width}px Practice again, stage intro`);
  await shot(page, 'practice-again-stage');
  check(await page.locator('[data-drill-back]').count() === 1, 'Practice again has no Back control');
  // every item of the stages it runs, from the piece stage on, is asked at least once
  const authored = await page.evaluate(([S, U]) => { const rungs = unitView(S, U).unit.drill.rungs, from = rungs.findIndex(r => r.ask === 'piece'); return rungs.slice(from).flatMap(r => r.items.flat()).length; }, [t.subject, t.unit]);
  const answered = await playRun(page, 'practice');
  check(answered >= authored, `Practice again asked ${answered} items of the ${authored} the unit's drill has from its piece stage on`);
  check(/The drill is done/.test(await screenOf(page)), 'Practice again did not end on the results screen');
  await shot(page, 'practice-again-results');
  const items = await getStore(page, `pl:${t.subject}:items`);
  check(Object.values(items).some(e => e.tries.some(x => x.context === 'again')), 'no try was recorded with the context "again"');
  check((await getStore(page, 'pl:log')).some(e => e.type === 'set' && e.unit === t.unit), 'a finished Practice again was not logged');
  await context.close();
}

/* ---------- the subject's opening map (E14) ---------- */
// Every subject draws its key as a map; what the map must hold is worked out from the key (tests/fixtures/app-data.mjs: keyShape),
// not typed here.
async function openingMapChecks(env, page, s, width, label) {
  const { check } = env, shape = await keyShape(page, s.id);
  await env.openSubject(page, s.id);
  const map = await page.evaluate(() => { const el = document.querySelector('.keymap'); return el ? { text: el.textContent.replace(/\s+/g, ' '), questions: el.querySelectorAll('.mapq').length } : null; });
  check(map !== null, `${label}: the subject opens with no key map`);
  if (map === null) return shape;
  const want = [shape.gate.q, ...shape.gate.options.map(o => o.n), ...shape.branchSteps.flatMap(st => [st.q, ...st.options]),
    ...shape.names.flatMap(o => [o.n, o.plain.charAt(0).toUpperCase() + o.plain.slice(1)])];
  const missing = want.filter(w => !map.text.includes(w));
  check(missing.length === 0, `${label}: the opening map leaves out: ${missing.join(' | ')}`);
  check(map.questions === 1 + shape.branchSteps.length, `${label}: the map draws ${map.questions} questions, not the gate and the ${shape.branchSteps.length} of its branches`);
  shape.names.filter(o => o.unit).forEach(o => check(map.text.includes(`${o.n}, taught in Unit ${o.unit}`), `${label}: the map does not say Unit ${o.unit} teaches ${o.n}`));
  const codes = new RegExp(`\\b(${shape.codes.join('|')})\\b`);
  check(!codes.test(map.text), `${label}: the map shows a question code`);
  await layout(env, page, `${label} subject opening map`);
  await shot(page, `subject-opening-map-${s.id}`);
  return shape;
}
export async function testOpeningMap(env, width = 390) {
  const { check } = env, probe = await env.freshPage(width), subjects = await subjectMeta(probe.page);
  await probe.context.close();
  check(subjects.length > 0, 'no subject, so no opening map was checked');
  for (const s of subjects) {
    const { context, page } = await env.freshPage(width);
    await openingMapChecks(env, page, s, width, `${width}px ${s.id}`);
    await context.close();
  }
  // a gate answer with no branch is drawn too
  const mini = await withMini(env, width);
  await env.openSubject(mini.page, 'mini');
  const text = await screenOf(mini.page);
  check(/Kind Y/.test(text) && /question 3 · Is it loud or quiet\?/.test(text), 'the mini subject draws the wrong map');
  await layout(env, mini.page, `${width}px mini subject`);
  await mini.context.close();
}

/* ---------- the reference, generated (E14) ---------- */
// What the reference must hold for each name is read from the key, the registered cases and each unit's ledger.
const referenceFacts = (page, subjectId, nameIds) => page.evaluate(([id, nameIds]) => {
  const data = FC.get(id), plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  const units = data.meta.units.filter(u => data.units[u]);
  const named = units.flatMap(unitId => { const v = unitView(id, unitId); return (data.cases[unitId] || []).filter(c => c.name && !c.kind && c.use !== 'claim' && nameIds.includes(caseTarget(v, c))).map(c => c.name); });
  const lines = units.flatMap(unitId => { const v = unitView(id, unitId), T = lessonText(v); return v.unit.ledger.filter(l => l.pair.some(p => nameIds.includes(p))).map(l => plain(T.t(paras(l.test).join(' ')))); });
  return { named, lines };
}, [subjectId, nameIds]);
async function referenceChecks(env, page, s, label) {
  const { check } = env, shape = await keyShape(page, s.id);
  await env.openSubject(page, s.id);
  const before = await page.evaluate(id => JSON.stringify([localStorage.getItem(`pl:${id}:items`), localStorage.getItem('pl:log'), dueReturns(id)]), s.id);
  await page.click('[data-ref="units"]');
  // every generated name is opened
  await page.evaluate(() => document.querySelectorAll('#screen details.fg[data-name]').forEach(d => { d.open = true; }));
  const text = await screenOf(page);
  const facts = await referenceFacts(page, s.id, shape.names.map(o => o.id));
  for (const o of shape.names) {
    check(text.includes(o.n) && text.toLowerCase().includes(o.plain.toLowerCase()) && text.toLowerCase().includes(o.needs.toLowerCase()), `${label}: the reference leaves out ${o.n}, its plain words or what you must be able to point to`);
    o.aka.forEach(a => check(text.includes(a), `${label}: the reference leaves out "${a}" as another name for ${o.n}`));
  }
  facts.named.forEach(n => check(text.includes(n), `${label}: the reference leaves out the named case "${n}"`));
  facts.lines.forEach(t => check(text.includes(t), `${label}: the reference leaves out a look-alike line (${t.slice(0, 50)})`));
  const questions = [shape.gate.q, ...shape.branchSteps.map(st => st.q)];
  check(questions.every(q => text.includes(q)), `${label}: the reference leaves out a question of the key map`);
  check(/Where these questions stop/.test(text) && shape.limits.every(h => text.includes(h)), `${label}: the reference leaves out where the key stops`);
  // the generated names are exactly the key's
  const listed = await page.evaluate(() => [...document.querySelectorAll('#screen details.fg[data-name]')].map(d => d.dataset.name));
  check(JSON.stringify([...listed].sort()) === JSON.stringify(shape.names.map(o => o.id).sort()), `${label}: the reference lists the names ${listed.join(', ')}, not the ${shape.names.length} of the key (${shape.names.map(o => o.id).join(', ')})`);
  check(await page.locator('#screen details.fg:not([data-name])').count() === 0, `${label}: the reference holds a section that is not a generated name`);
  check(!new RegExp(`\\b(${shape.codes.join('|')})\\b`).test(text), `${label}: the reference shows a question code`);
  await layout(env, page, `${label} reference, every name open`);
  await shot(page, `reference-${s.id}`);
  await page.click('#screen [data-v="subject"]');
  await page.click('[data-ref="caveats"]');
  check(/Where these questions stop/.test(await screenOf(page)), `${label}: the "Where these questions stop" page is empty`);
  await layout(env, page, `${label} where this key stops`);
  const after = await page.evaluate(id => JSON.stringify([localStorage.getItem(`pl:${id}:items`), localStorage.getItem('pl:log'), dueReturns(id)]), s.id);
  check(before === after, `${label}: visiting the reference changed the practice record, the log or what is due: a lookup must not count as review`);
  return shape;
}
export async function testReference(env, width = 390) {
  const probe = await env.freshPage(width), subjects = await subjectMeta(probe.page);
  await probe.context.close();
  for (const s of subjects) {
    const { context, page } = await env.freshPage(width);
    await referenceChecks(env, page, s, `${width}px ${s.id}`);
    await context.close();
  }
}

/* ---------- the full determination (E13) ---------- */
const queueOf = page => page.evaluate(() => DET.queue.map(sp => sp.id));
const markUnitDone = (page, unit) => page.evaluate(unit => {
  const seen = JSON.parse(localStorage.getItem('pl:mini:seen') || '{}');
  localStorage.setItem('pl:mini:seen', JSON.stringify({ ...seen, [unit]: { rev: 1, done: true, at: 'close' } }));
  seenCache.mini = null;
}, unit);
export async function testDetermination(env, width = 390) {
  const { check } = env, { context, page } = await withMini(env, width);
  await env.openSubject(page, 'mini');
  await page.click('#screen [data-v="det"]');
  let text = await screenOf(page);
  check(/No story is open to you yet/.test(text) && /Four more open with later units/.test(text), `with no unit done, the overview reads "${text.slice(0, 260)}"`);
  check(await page.locator('#startDet').count() === 0 && await page.locator('#anyway').count() === 1, 'with no unit done, a case is offered by default');
  await layout(env, page, `${width}px determination, nothing open`);
  await shot(page, 'determination-nothing-open');
  // the negative control: specimens of a unit that is not finished are not offered by default, and the check goes red when they are
  await markUnitDone(page, 'u1');
  const open = () => page.evaluate(() => { const sv = subjectView('mini'); return specimenSplit(sv).open.filter(sp => !rebuiltUnitDone('mini', sv.outcome(sp.outcome).unit)).map(sp => sp.id); });
  check((await open()).length === 0, 'a case of an unfinished unit is offered by default');
  await page.evaluate(() => { globalThis.specimenOpen = () => true; });
  check((await open()).length > 0, 'negative control: offering every case did not show up as a case of an unfinished unit');
  await page.reload(); await page.evaluate(registerMiniSubject); await page.evaluate(showMiniSubject);
  await env.openSubject(page, 'mini');
  await page.click('#screen [data-v="det"]');
  text = await screenOf(page);
  check(/Two stories are open to you now/.test(text) && /Two more open with later units/.test(text), `with one unit done, the overview reads "${text.slice(0, 260)}"`);
  await layout(env, page, `${width}px determination overview`);
  await shot(page, 'determination-overview');
  await page.click('#startDet');
  check(await queueOf(page).then(q => q.join() === 'sp-a,sp-b'), 'the offered cases are not the two clean cases of the finished unit, clean first');
  text = await screenOf(page);
  check(/One worked for you first/.test(text) && /Nothing is asked/.test(text) && /Reason for G1/.test(text) && /Reason for B2/.test(text), 'no complete worked determination before the first case');
  await layout(env, page, `${width}px worked determination`);
  await shot(page, 'determination-worked');
  await page.click('#goOn');
  text = await screenOf(page);
  check(/Question 1 of 4/.test(text) && text.includes('What are you looking at?') && !/\b(G1|B1|B2)\b/.test(text), 'the questions are not headed by number and text, or show a code');
  check(await page.locator('.feedback').count() === 0, 'feedback is on screen before an answer');
  await layout(env, page, `${width}px determination, first case`);
  await shot(page, 'determination-case');
  // right name by a wrong route: a miss, in the verdict's own words
  await page.click('[data-step="G1"] .opt[data-o="x"]');
  await page.click('[data-step="B1"] .opt[data-o="small"]');
  await page.click('[data-step="B2"] .opt[data-o="loud"]');
  await page.click('#nameOpts .opt[data-n="oa"]');
  text = await screenOf(page);
  check(/Right name, wrong answer on the way/.test(text) && /What would make it a different name/.test(text) && !/falsify/i.test(text), 'the verdict is not "Right name, wrong answer on the way" with "What would make it a different name"');
  const tries = (await getStore(page, 'pl:mini:items'))['spec/sp-a'].tries;
  check(tries.length === 1 && tries[0].mode === 'spec' && tries[0].ok === false && tries[0].name === 'oa', `the specimen was recorded as ${JSON.stringify(tries)}`);
  await layout(env, page, `${width}px determination verdict`);
  await shot(page, 'determination-verdict');
  await page.click('#next');
  await page.click('#skip');
  check(/That set is done/.test(await screenOf(page)), 'the set did not end on its results');
  await page.click('#again');
  await page.click('#startDet');
  check(await page.locator('#goOn').count() === 0 && await page.locator('[data-step="G1"]').count() === 1, 'the worked determination was shown again after the first scored case');
  // a later unit done: every case is open, clean then varied then misleading whatever order they were written in
  await page.click('[data-v="subject"]');
  await markUnitDone(page, 'u2');
  await page.reload(); await page.evaluate(registerMiniSubject); await page.evaluate(showMiniSubject);
  await env.openSubject(page, 'mini');
  await page.click('#screen [data-v="det"]');
  await page.click('#startDet');
  check((await queueOf(page)).join() === 'sp-a,sp-b,sp-c,sp-d', `with both units done the cases run ${(await queueOf(page)).join()}, not clean, varied, misleading`);
  await context.close();
}

/* ---------- the full determination of every subject, over its own specimens (E13) ---------- */
// Nothing is typed about a subject: the specimens, their routes and names, their order and their count come from the registry.
const specimensOf = (page, id) => page.evaluate(id => {
  const sv = subjectView(id), order = ['clean', 'varied', 'misleading'];
  const all = sv.data.specimens.map((sp, k) => ({ sp, k })).sort((a, b) => order.indexOf(a.sp.tier) - order.indexOf(b.sp.tier) || a.k - b.k).map(x => x.sp);
  return { ids: all.map(sp => sp.id), units: sv.unitIds().map(u => ({ id: u, rev: unitView(id, u).unit.rev })), outcomes: sv.key.outcomes.length,
    plans: all.map(sp => ({ id: sp.id, outcome: sp.outcome, steps: sv.routeSteps(sp).map(code => ({ code, right: sp.route[code][0], wrong: sv.step(code).options.map(o => o.id).find(o => !sp.route[code].includes(o)) || null })) })) };
}, id);
export async function testRealDetermination(env, width = 390) {
  const { check } = env, probe = await env.freshPage(width), subjects = await subjectMeta(probe.page);
  await probe.context.close();
  for (const s of subjects) {
    const { context, page } = await env.freshPage(width), label = `${width}px ${s.id}`, data = await specimensOf(page, s.id);
    check(data.ids.length > 0, `${label}: the subject has no specimens to run`);
    if (!data.ids.length) { await context.close(); continue; }
    // nothing finished: no case is open, the overview counts every case as opening later, and "try anyway" offers every name in the key
    const later = await page.evaluate(n => DET_SAY.later(n), data.ids.length);
    await env.openSubject(page, s.id);
    await page.click('#screen [data-v="det"]');
    let text = await screenOf(page);
    check(/No story is open to you yet/.test(text) && text.includes(later) && await page.locator('#startDet').count() === 0, `${label}: with no unit done, the overview reads "${text.slice(0, 220)}"`);
    await page.click('#anyway');
    await page.click('#goOn');
    const anyway = await page.evaluate(() => ({ mode: DET.mode, names: DET.cur.item.names.length, queue: DET.queue.map(sp => sp.id) }));
    check(anyway.mode === 'anyway' && anyway.names === data.outcomes && anyway.queue.join() === data.ids.join(), `${label}: "try anyway" offers ${anyway.names} names of ${data.outcomes} over ${anyway.queue.length} of ${data.ids.length} cases, in clean, varied, misleading order`);
    await context.close();

    // every unit done: every case is open, clean then varied then misleading, each run along its own route
    const run = await env.freshPage(width);
    await run.page.evaluate(units => localStorage.setItem(`pl:${units.id}:seen`, JSON.stringify(Object.fromEntries(units.list.map(u => [u.id, { rev: u.rev, done: true, at: 'close' }])))), { id: s.id, list: data.units });
    await run.page.reload();
    await env.openSubject(run.page, s.id);
    await run.page.click('#screen [data-v="det"]');
    const open = await run.page.evaluate(n => DET_SAY.open(n), data.ids.length);
    text = await screenOf(run.page);
    check(text.includes(open) && !/more open/.test(text), `${label}: with every unit done the overview reads "${text.slice(0, 220)}", not "${open}"`);
    await layout(env, run.page, `${label} determination overview`);
    await run.page.click('#startDet');
    check((await queueOf(run.page)).join() === data.ids.join(), `${label}: the cases run ${(await queueOf(run.page)).join()}, not clean, varied, misleading`);
    check(/One worked for you first/.test(await screenOf(run.page)), `${label}: no worked determination before the first case`);
    await run.page.click('#goOn');
    for (const [k, sp] of data.plans.entries()) {
      const wrong = k === 1 && sp.steps.some(st => st.wrong);
      if (k === 0) await layout(env, run.page, `${label} determination, first case`);
      if (k === 0) check(/Question 1 of /.test(await screenOf(run.page)) && await run.page.locator('.feedback').count() === 0, `${label}: the first case does not open on its first question, or shows feedback before an answer`);
      for (const [n, st] of sp.steps.entries()) await run.page.click(`[data-step="${st.code}"] .opt[data-o="${wrong && n === sp.steps.length - 1 ? st.wrong : st.right}"]`);
      await run.page.click(`#nameOpts .opt[data-n="${sp.outcome}"]`);
      const verdict = await screenOf(run.page);
      if (wrong) check(/Right:/.test(verdict) && /Answers missed/.test(verdict) && /Right name, wrong answer on the way/.test(verdict), `${label}/${sp.id}: a right name by a wrong route is not marked "Right name, wrong answer on the way"`);
      else check(/Right:/.test(verdict) && /Answers right/.test(verdict) && !/Right name, wrong answer on the way/.test(verdict), `${label}/${sp.id}: a right determination is not marked right on both`);
      if (k === 0) await layout(env, run.page, `${label} determination verdict`);
      await run.page.click('#next');
    }
    const done = await screenOf(run.page), misses = data.plans.length > 1 && data.plans[1].steps.some(st => st.wrong) ? 1 : 0;
    check(/That set is done/.test(done) && new RegExp(`Names right ?${data.ids.length} of ${data.ids.length}`).test(done) && new RegExp(`Routes right ?${data.ids.length - misses} of ${data.ids.length}`).test(done),
      `${label}: the results read "${done.slice(0, 200)}", not every name right and ${misses} route missed`);
    const tries = await getStore(run.page, `pl:${s.id}:items`);
    check(data.ids.every(id => tries[`spec/${id}`] && tries[`spec/${id}`].tries.length === 1 && tries[`spec/${id}`].tries[0].mode === 'spec'), `${label}: a specimen was not recorded once, as a "spec" try`);
    check(data.ids.length === 1 || tries[`spec/${data.ids[1]}`].tries[0].ok === (misses === 0), `${label}: the wrong route was recorded as a right one`);
    await run.context.close();
  }
}
export async function testTryAnyway(env) {
  const { check } = env, { context, page } = await withMini(env, 390);
  await env.openSubject(page, 'mini');
  await page.click('#screen [data-v="det"]');
  await page.click('#anyway');
  check(/One worked for you first/i.test(await screenOf(page)), 'no worked determination before the first case tried anyway');
  await page.click('#goOn');
  const { names, mode } = await page.evaluate(() => ({ names: DET.cur.item.names, mode: DET.mode }));
  check(names.length === 4 && mode === 'anyway' && (await queueOf(page)).join() === 'sp-a,sp-b,sp-c,sp-d', `"try anyway" offers ${names.length} names over ${(await queueOf(page)).join()}`);
  check(/names you have not been taught yet/.test(await screenOf(page)), 'a case tried anyway does not say its names are not taught yet');
  await context.close();
}

/* ---------- Mixed (E14) ---------- */
export async function testMixed(env, width = 390) {
  const { check } = env, t = await target(env), { context, page } = await dueWith(env, t, width);
  const round = await page.evaluate(([S, U]) => {
    const taught = unitView(S, U).taught, M = buildMixed(12), news = M.items.filter(e => e.built);
    return { n: M.items.length, dueFirst: M.items.slice(0, taught.length).every(e => e.due && e.built.item.mode === 'name'),
      unitsOk: news.every(e => e.built.v.unitId === U), flags: M.items.slice(0, taught.length).map(e => !!e.due),
      names: M.items[0].built.item.names, taught };
  }, [t.subject, t.unit]);
  check(round.dueFirst, `Mixed does not start with the ${round.taught.length} due names (${round.flags})`);
  check(round.unitsOk, 'Mixed draws from a unit other than a finished one');
  check(round.names.length === round.taught.length && round.names.every(n => round.taught.includes(n)), 'a Mixed name item does not offer its own subject\'s generated names');
  await env.clickVisible(page, '[data-v="mixed"]');
  const text = await screenOf(page);
  check(/spaces what you have learned/.test(text) && /not training in telling look-alikes apart/.test(text), 'Mixed is not described as spacing and retrieval practice');
  check(await page.locator('#mixedask').count() === 1, 'the first Mixed item is not a due item from a finished unit');
  await layout(env, page, `${width}px mixed item`);
  await shot(page, 'mixed-item');
  const plan = await page.evaluate(() => {
    const e = APP.mixed.items[APP.mixed.i], i = e.built.item, c = i.c;
    return { clicks: [`#nameOpts .opt[data-n="${caseTarget(e.built.v, c)}"]`], mode: i.mode, id: c.id, unit: e.built.v.unitId };
  });
  await page.click(plan.clicks[0]);
  check(await page.locator('#next').count() === 1 && await page.locator('.feedback').count() === 1, 'a Mixed name item shows no feedback after its answer');
  await shot(page, 'mixed-feedback');
  const tries = (await getStore(page, `pl:${t.subject}:items`))[`${plan.unit}/${plan.id}`].tries;
  check(tries[tries.length - 1].context === 'mixed' && tries[tries.length - 1].mode === 'name', `the Mixed try was recorded as ${JSON.stringify(tries[tries.length - 1])}`);
  await context.close();
  // a unit that is not finished contributes nothing
  const mini = await withMini(env, width, p => seedDone(p, 'mini', 'u1', 3));
  const pool = await mini.page.evaluate(() => mixedPool(new Set()).map(e => e.built.v.unitId).filter((u, k, all) => all.indexOf(u) === k));
  check(pool.length === 1 && pool[0] === 'u1', `Mixed draws from ${pool.join(', ')} while only u1 is finished`);
  await mini.context.close();
}

/* ---------- Progress and the log export (E19) ---------- */
export async function testProgress(env, width = 390) {
  const { check } = env, t = await target(env), S = t.subject, U = t.unit, { context, page } = await env.freshPage(width);
  await env.clickVisible(page, '[data-v="progress"]');
  check(await page.locator('#exportLog').isDisabled(), 'the export control is live with nothing logged');
  const log = [{ d: '2026-10-01', type: 'start', subject: S, unit: U, rev: t.rev }, { d: '2026-10-01', type: 'part', subject: S, unit: U, rev: t.rev, card: '1' },
    { d: '2026-10-01', type: 'set', subject: S, unit: U, rev: t.rev }, { d: '2026-10-03', type: 'return', subject: S }, { d: '2026-10-03', type: 'return', subject: S },
    { d: '2026-10-04', type: 'return', subject: S }];
  const tr = (mode, ok, context = 'unit') => ({ d: '2026-10-01', rev: t.rev, engine: 1, mode, context, steps: {}, name: null, ok });
  const items = { [`${U}/a`]: { tries: [tr('route', true), tr('route', true)] }, [`${U}/b`]: { tries: [tr('route', false)] }, [`${U}/c`]: { tries: [tr('piece', true)] },
    [`${U}/d`]: { tries: [tr('check', false)] }, [`${U}/commit:x`]: { tries: [tr('commit', false)] }, [`${U}/e`]: { tries: [tr('route', false, 'baseline')] } };
  await setStore(page, 'pl:log', log); await setStore(page, `pl:${S}:items`, items);
  await page.reload();
  await env.clickVisible(page, '[data-v="progress"]');
  const block = norm(await page.locator('[data-practice-record]').textContent());
  check(block.includes('All first tries2 of 4 · 50%') && block.includes('Whole stories1 of 2 · 50%') && block.includes('Single questions1 of 2 · 50%'), `the practice record reads "${block.slice(0, 220)}"`);
  check(/Units started1/.test(block) && /Parts completed1/.test(block) && /Sets completed1/.test(block) && /Days returned2/.test(block), `the persistence figures read "${block.slice(200, 420)}"`);
  await layout(env, page, `${width}px progress`);
  await shot(page, 'progress');
  const [download] = await Promise.all([page.waitForEvent('download'), page.click('#exportLog')]);
  const file = JSON.parse(await readFile(await download.path(), 'utf8'));
  check(/^fieldcraft-log-\d{4}-\d\d-\d\d\.json$/.test(download.suggestedFilename()), `the file is called ${download.suggestedFilename()}`);
  check(JSON.stringify(file.log) === JSON.stringify(log) && file.standard === await page.evaluate(() => FC.STANDARD), 'the exported file does not hold the log as it is on the device');
  check(JSON.stringify(file.subjects[S].items) === JSON.stringify(items) && Object.keys(file.subjects).length === await page.evaluate(() => SUBJECTS.length)
    && file.subjects[S].seen !== undefined && file.subjects[S].notes !== undefined, 'the exported file does not hold every subject\'s items, seen and notes');
  await context.close();
}

/* ---------- Progress: each subject's own progress line, from the practice record (E8, E19) ---------- */
// What each subject's progress line says is worked out from the data: a subject whose items hold a try says so, and one with none does not.
export async function testProgressLines(env, width = 390) {
  const { check } = env, { context, page } = await env.freshPage(width);
  const metas = await subjectMeta(page);
  const t = await target(env), practiced = t.subject;
  await setStore(page, 'pl:mini:items', { 'u1/x': { tries: [{ d: '2026-10-01', rev: 1, engine: 2, mode: 'route', context: 'unit', steps: {}, name: null, ok: true }] } });
  await setStore(page, `pl:${practiced}:items`, { [`${t.unit}/x`]: { tries: [{ d: '2026-10-01', rev: t.rev, engine: 2, mode: 'route', context: 'unit', steps: {}, name: null, ok: true }] } });
  await page.reload();
  await page.evaluate(registerMiniSubject);
  await page.evaluate(showMiniSubject);
  await env.clickVisible(page, '[data-v="progress"]');
  const rows = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('.rows [data-s]')].map(r => [r.dataset.s, r.textContent.replace(/\s+/g, ' ')])));
  for (const s of metas) {
    const row = rows[s.id], practice = s.id === practiced;
    check(/practice 1 of 1/.test(row) === practice, `${s.id}: the progress line reads "${row}", which ${practice ? 'must' : 'must not'} show the practice record`);
  }
  check(/practice 1 of 1/.test(rows.mini), `the mini subject's progress line reads "${rows.mini}"`);
  await layout(env, page, `${width}px progress lines`);
  await shot(page, 'progress-lines');
  await context.close();
}

/* ---------- Mixed: "Lifetime" from the practice record (E8) ---------- */
export async function testMixedLifetime(env, width = 390) {
  // Mixed asks only from finished units: so the unit is finished first, or Mixed has no item and shows no figures under one (lesson standard E14).
  const { check } = env, t = await target(env), { context, page } = await dueWith(env, t, width);
  const tr = (ok, context) => ({ d: '2026-10-01', rev: t.rev, engine: 2, mode: 'piece', context, steps: {}, name: null, ok });
  const extra = { [`${t.unit}/a`]: { tries: [tr(true, 'mixed'), tr(false, 'mixed')] }, [`${t.unit}/b`]: { tries: [tr(true, 'mixed'), tr(true, 'unit')] } };
  await setStore(page, `pl:${t.subject}:items`, { ...await getStore(page, `pl:${t.subject}:items`), ...extra });
  await page.reload();
  await env.clickVisible(page, '[data-v="mixed"]');
  const score = norm(await page.locator('.score').textContent());
  check(/2\/3Lifetime/.test(score), `the Mixed score reads "${score}", not 2/3 from the record`);
  await layout(env, page, `${width}px mixed with its figures`);
  await shot(page, 'mixed-lifetime');
  await context.close();
}

/* ---------- Search (E14) ---------- */
export async function testSearch(env, width = 390) {
  const { check } = env, t = await target(env), { context, page } = await env.freshPage(width);
  const data = await page.evaluate(([S, U]) => {
    const v = unitView(S, U), T = lessonText(v), key = FC.get(S).key, plainOf = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
    const teach = v.casesOf(U).find(c => c.use === 'teach' && !c.kind && c.text.length > 60), ret = FC.get(S).cases[U].find(c => c.use === 'return' && !c.kind);
    // a card whose heading is its own: no other card of the subject has the same one, and it fits a result line
    const headings = FC.get(S).meta.units.filter(u => FC.get(S).units[u]).flatMap(u => { const w = unitView(S, u), W = lessonText(w); return w.cardOrder.map(w.card).filter(c => !c.continues).map(c => ({ unit: u, id: c.id, text: plainOf(cardHeading(w, W, c)) })); });
    const card = headings.find(h => h.unit === U && h.text.length < 80 && headings.filter(x => x.text === h.text).length === 1);
    return { question: key.gate.q, name: v.nameOf(v.taught[0]), teachText: teach.text.slice(10, 50), returnText: ret.text.slice(10, 50), card };
  }, [t.subject, t.unit]);
  const search = async q => { if (!await page.locator('#q').count()) await env.clickVisible(page, '[data-v="search"]'); await page.fill('#q', q); return norm(await page.locator('#results').textContent()); };
  let r = await search(data.question.slice(0, 20));
  check(/Questions/.test(r) && r.includes(data.question), 'a key question is not found');
  r = await search(data.name);
  check(/Names/.test(r) && r.includes(data.name), 'a name is not found');
  const groups = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('.resgroup')].map(g => [g.querySelector('.m').textContent, [...g.querySelectorAll('.res .t')].map(t => t.textContent)])));
  check((groups.Names || []).filter(x => x === data.name).length === 1, `the name "${data.name}" is listed ${JSON.stringify(groups.Names)} under Names`);
  r = await search(data.teachText);
  check(/Stories/.test(r), 'the text of a story on a card is not found');
  r = await search(data.returnText);
  check(/Nothing matches/.test(r), 'the text of a return case, which the learner has not met, can be found');
  check(!!data.card, 'no card of the unit has a heading of its own to search for');
  r = await search(data.card.text);
  check(/Cards/.test(r) && r.includes(data.card.text), `a card heading ("${data.card.text}") is not found`);
  await layout(env, page, `${width}px search results`);
  await shot(page, 'search');
  await page.click('.res >> nth=0');
  const at = await page.evaluate(() => (APP.view === 'unit' && UNIT_RUN) ? UNIT_RUN.flow[UNIT_RUN.i].id : APP.view);
  check(at === data.card.id, `a card result opened "${at}", not the card ${data.card.id}`);
  await context.close();
  const mini = await withMini(env, width);
  await mini.page.evaluate(() => { INDEX = null; });
  await env.clickVisible(mini.page, '[data-v="search"]');
  await mini.page.fill('#q', 'story sp-c');
  await mini.page.click('.res >> nth=0');
  check(await mini.page.evaluate(() => APP.view === 'det' && DET.queue[0].id === 'sp-c'), 'a specimen result did not open that specimen in the determination');
  await mini.context.close();
}

/* ---------- Review these first (E12) ---------- */
export async function testReviewFirst(env, width = 390) {
  const { check } = env;
  const tries = (oks) => Object.fromEntries(oks.map((ok, k) => [`u1/rev${k}`, { tries: [{ d: addDaysIso(-3), rev: 1, engine: 1, mode: 'piece', context: 'unit', steps: {}, name: null, ok }] }]));
  const addDaysIso = n => { const d = new Date(); d.setDate(d.getDate() + n); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const seedFor = oks => async page => {
    await seedDone(page, 'mini', 'u1', 3);
    await page.evaluate(extra => localStorage.setItem('pl:mini:items', JSON.stringify({ ...JSON.parse(localStorage.getItem('pl:mini:items')), ...extra })), tries(oks));
  };
  for (const [oks, expected] of [[[false, false, false, true], true], [[true, false, true, false], true], [[true, true, true, false], false], [[false, false, false], false]]) {
    const { context, page } = await withMini(env, width, seedFor(oks));
    await env.openSubject(page, 'mini');
    await page.click('[data-u="1"]');
    const text = await screenOf(page), shown = /Review these first/.test(text);
    check(shown === expected, `first-try accuracy ${oks.filter(Boolean).length} of ${oks.length}: "Review these first" ${shown ? 'shown' : 'not shown'}, expected ${expected ? 'shown' : 'not shown'}`);
    if (shown) {
      check(/right on the first try/.test(text) && /Nothing is locked/.test(text) && /Alpha reading|Beta reading/.test(text), `the review screen reads "${text.slice(0, 300)}"`);
      await layout(env, page, `${width}px review these first`);
      await shot(page, 'review-first');
      await page.click('#goOn');
      check(await page.evaluate(() => APP.view === 'unit'), 'the learner could not go straight on from "Review these first"');
      await page.click('[data-v="subject"]');
      await page.click('[data-u="1"]').catch(() => {});
    } else check(await page.evaluate(() => APP.view === 'unit'), 'a unit did not open right away when the earlier unit went well');
    await context.close();
  }
  const { context, page } = await withMini(env, width, seedFor([false, false, false, false]));
  await env.openSubject(page, 'mini');
  await page.click('[data-u="1"]');
  await page.click('[data-practice="u1"]');
  check(await page.evaluate(() => APP.view === 'again' && PRACTICE.unitId === 'u1'), '"Practice Unit One again" did not start Practice again');
  await context.close();
}

/* ---------- Faulty claims of the finished units, with the commit before the fault (E14) ---------- */
const faultShown = page => page.evaluate(() => !!document.querySelector('#host .feedback') || /The claim, put right/.test(document.getElementById('host').textContent));
export async function testClaimsTile(env, width = 390) {
  const { check } = env, t = await target(env, u => u.hasClaims), { context, page } = await dueWith(env, t, width);
  await env.openSubject(page, t.subject);
  const claims = await page.evaluate(([S, U]) => ({ items: claimItems(SUBJECTS.find(s => s.id === S)).map(i => i.caseId), demo: unitView(S, U).unit.drill.rungs.find(r => r.ask === 'claim').demo }), [t.subject, t.unit]);
  check(await page.locator('[data-claims]').count() === 1 && claims.items.length > 0 && !claims.items.includes(claims.demo), `the claims tile is missing, or lists the claim worked for the learner (${claims.items})`);
  await layout(env, page, `${width}px subject with the claims tile`);
  await shot(page, 'claims-tile');
  await page.click('[data-claims]');
  check(await page.evaluate(() => APP.view === 'claims' && PRACTICE.kind === 'claims'), 'the claims tile did not start the claims run');
  await page.click('#start');
  check(!(await faultShown(page)), 'a claim shows its fault before it is answered');
  await layout(env, page, `${width}px a faulty claim, before the answer`);
  await shot(page, 'claim-before');
  // the negative control: a claim that shows its fault with the claim turns the check red
  await page.evaluate(() => { globalThis.claimHtmlReal = claimHtml;
    globalThis.claimHtml = ask => claimHtmlReal(ask) + claimClosing(ask.T, ask.item.c); mountDrillRun(document.getElementById('host'), PRACTICE.run, () => {}); });
  check(await faultShown(page), 'negative control: a claim that shows its fault at once did not show up as one');
  await page.evaluate(() => { globalThis.claimHtml = claimHtmlReal; mountDrillRun(document.getElementById('host'), PRACTICE.run, () => {}); });
  check(!(await faultShown(page)), 'the claim still shows its fault after the control was removed');
  const answered = await playRun(page, 'again');
  check(answered === claims.items.length && /Faulty claims/.test(await screenOf(page)), `${answered} of ${claims.items.length} claims were answered, and the results read "${(await screenOf(page)).slice(0, 120)}"`);
  const tries = Object.entries(await getStore(page, `pl:${t.subject}:items`)).filter(([k]) => k.startsWith(`${t.unit}/`) && claims.items.some(id => k === `${t.unit}/${id}`)).flatMap(([, e]) => e.tries);
  check(tries.length >= claims.items.length && tries.every(x => x.mode === 'claim' && x.context === 'again'), `the claim tries were recorded as ${JSON.stringify(tries.slice(0, 2))}`);
  await layout(env, page, `${width}px faulty claims results`);
  await page.click('[data-v="subject"]:visible');
  check(await page.locator('[data-claims]').count() === 1, 'the claims tile is gone after a run');
  await context.close();
  // a unit that is not finished has no claims to run
  const fresh = await env.freshPage(width);
  await env.openSubject(fresh.page, t.subject);
  check(await fresh.page.locator('[data-claims]').count() === 0, 'the claims tile is shown with no finished unit');
  await fresh.context.close();
}

/* ---------- Back inside a drill, and the card list beside a unit (E11) ---------- */
export async function testDrillBack(env, width = 390) {
  const { check } = env, t = await target(env), { context, page } = await env.freshPage(width);
  await env.openSubject(page, t.subject);
  await env.clickVisible(page, `#screen [data-u="${t.index}"]`);
  // the unit's last card before its drill, from the unit's own parts
  const lastCard = await page.evaluate(([S, U]) => FC.get(S).units[U].parts.find(p => p.drill).cards.slice(-1)[0], [t.subject, t.unit]);
  await page.evaluate(() => { UNIT_RUN.i = UNIT_RUN.flow.findIndex(s => s.type === 'drill'); paintUnit(); });
  check(await page.locator('[data-drill-back]').count() === 1, 'the drill has no Back control');
  await layout(env, page, `${width}px drill with Back`);
  await shot(page, 'drill-back');
  await page.click('#start'); await page.click('#start');
  const answered = await playRun(page, 'unit', 2);
  check(answered === 2 && await page.locator('[data-drill-back]').count() === 1, 'the Back control is gone after answers repainted the drill');
  const place = await page.evaluate(() => ({ si: UNIT_RUN.drillRun.si, qi: UNIT_RUN.drillRun.qi }));
  await page.click('[data-drill-back]');
  const card = await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i]);
  check(card.type === 'card' && card.id === lastCard, `Back from the drill went to ${JSON.stringify(card)}, not the last card (${lastCard})`);
  await page.evaluate(() => { UNIT_RUN.i = UNIT_RUN.flow.findIndex(s => s.type === 'drill'); paintUnit(); });
  const back = await page.evaluate(() => ({ si: UNIT_RUN.drillRun.si, qi: UNIT_RUN.drillRun.qi, started: UNIT_RUN.drillRun.started }));
  check(back.si === place.si && back.qi === place.qi && back.started, `the drill did not keep its place (${JSON.stringify(place)} then ${JSON.stringify(back)})`);
  await context.close();
  // a returned set goes back to the subject
  const due = await dueWith(env, t, width);
  await env.openSubject(due.page, t.subject);
  await due.page.click(`[data-due="${t.subject}"]`);
  await due.page.click('[data-drill-back]');
  check(await due.page.evaluate(() => APP.view === 'subject'), 'Back from a returned set did not return to the subject');
  await due.context.close();
}
export async function testWideCardList(env) {
  const { check } = env, t = await target(env), { context, page } = await env.freshPage(1400);
  await env.openSubject(page, t.subject);
  await env.clickVisible(page, `#screen [data-u="${t.index}"]`);
  const info = () => page.evaluate(() => {
    const aside = document.querySelector('.aside'), rows = [...document.querySelectorAll('.aside .acard')], r = aside.getBoundingClientRect(), pane = document.querySelector('.withaside > .pane').getBoundingClientRect();
    return { shown: getComputedStyle(aside).display !== 'none', width: Math.round(r.width), pane: Math.round(pane.width), rows: rows.length, open: rows.filter(x => !x.disabled).length,
      locked: rows.filter(x => x.disabled).map(x => x.textContent.replace(/\s+/g, ' ').trim()), on: rows.filter(x => x.classList.contains('on')).length,
      expected: UNIT_RUN.v.cardOrder.map(UNIT_RUN.v.card).filter(c => !c.continues).length + 1 };
  });
  let i = await info();
  check(i.shown && i.width === 280, `at 1400px the card list is ${i.shown ? i.width + 'px wide' : 'hidden'}`);
  check(i.rows === i.expected && i.on === 1, `the card list has ${i.rows} rows (expected ${i.expected}) with ${i.on} marked`);
  check(i.open === 2 && i.locked.every(x => /Not reached yet/.test(x)), `only the cards reached are open (${i.open} open) and the rest say so`);
  const names = await page.evaluate(([S, U]) => { const v = unitView(S, U); return { aside: document.querySelector('.aside').textContent, taught: v.taught.map(v.nameOf) }; }, [t.subject, t.unit]);
  const early = names.taught.filter(n => names.aside.includes(n));
  check(early.length === 0, `the card list shows a name before it is taught (${early.join(', ')})`);
  await layout(env, page, '1400px unit with the card list');
  await shot(page, 'wide-card-list');
  // three screens on: each card that is not a continuation opens one more row
  const moved = [];
  for (let k = 0; k < 3; k++) {
    moved.push(await page.evaluate(() => { const r = UNIT_RUN, s = r.flow[r.i + 1]; return s.type === 'card' && !r.v.card(s.id).continues ? 1 : 0; }));
    await moveOn(page);   // a card that asks stops Next until it is answered (E3), so what stops the way is answered
  }
  i = await info();
  const opened = moved.reduce((a, b) => a + b, 0);
  check(i.open === 2 + opened, `after three screens, ${i.open} rows are open, not ${2 + opened}`);
  const second = await page.evaluate(() => { const r = UNIT_RUN; return r.flow.filter(s => s.type === 'card' && !r.v.card(s.id).continues)[1].id; });
  await page.click('.aside .acard:not([disabled]) >> nth=1');
  check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].id) === second, 'a card in the list did not open that card');
  await page.click('[data-jump]:has-text("The drill")');
  check(await page.evaluate(() => UNIT_RUN.flow[UNIT_RUN.i].type) === 'drill', 'the drill row did not open the drill');
  await layout(env, page, '1400px drill with the card list');
  await context.close();
  const narrow = await env.freshPage(1200);
  await env.openSubject(narrow.page, t.subject);
  await narrow.page.locator(`#screen [data-u="${t.index}"]:visible`).first().click();
  check(await narrow.page.evaluate(() => getComputedStyle(document.querySelector('.aside')).display === 'none'), 'the card list shows below 1280px');
  await narrow.context.close();
}

/* ---------- everything, at both phone widths ---------- */
export async function testNewScreens(env) {
  for (const width of WIDTHS) {
    await testRealDetermination(env, width);
    await testDueToday(env, width);
    await testPracticeAgain(env, width);
    await testOpeningMap(env, width);
    await testReference(env, width);
    await testDetermination(env, width);
    await testMixed(env, width);
    await testProgress(env, width);
    await testSearch(env, width);
    await testReviewFirst(env, width);
    await testDrillBack(env, width);
    await testClaimsTile(env, width);
    await testProgressLines(env, width);
    await testMixedLifetime(env, width);
  }
  await testReturnedSetIsNew(env);
  await testPlanReminder(env);
  await testTryAnyway(env);
  await testWideCardList(env);
}

/* ---------- run alone ---------- */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { chromium } = await import('playwright');
  const { startServer } = await import('./static-server.mjs');
  process.env.FC_SHOTS ||= DEFAULT_SHOTS;
  const failures = []; let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const server = await startServer(), browser = await chromium.launch();
  const freshPage = async (width = 390) => {
    const context = await browser.newContext({ viewport: { width, height: 800 }, acceptDownloads: true }), page = await context.newPage();
    page.on('pageerror', err => failures.push(`page error: ${err.message}`));
    page.on('console', msg => { if (msg.type() === 'error') failures.push(`console error: ${msg.text()}`); });
    await page.goto(server.url);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    return { context, page };
  };
  const clickVisible = (page, selector) => page.locator(`${selector}:visible`).first().click();
  const openSubject = async (page, id) => { await clickVisible(page, '[data-v="library"]'); await clickVisible(page, `#screen [data-s="${id}"]`); };
  const inspect = async (page, label) => {
    const text = await screenOf(page);
    check(text.length > 40, `${label}: screen is empty`);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(over <= 0, `${label}: ${over}px horizontal overflow`);
    const clipped = await page.evaluate(() => [...document.querySelectorAll('button, .opt, .chip, .tile, .mark, .stat')]
      .filter(el => el.offsetParent !== null && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).textOverflow !== 'ellipsis').map(el => `"${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 30)}"`));
    check(clipped.length === 0, `${label}: clipped text in ${clipped.join(', ')}`);
  };
  try { await testNewScreens({ freshPage, check, inspect, clickVisible, openSubject, screenText: screenOf }); }
  catch (err) { failures.push(`crashed: ${err.stack || err}`); }
  finally { await browser.close(); await server.close(); }
  if (failures.length) {
    console.error(`✗ ${failures.length} of ${checks} screen checks failed:`);
    failures.forEach(f => console.error('  - ' + f));
    process.exit(1);
  }
  console.log(`✓ ${checks} screen checks passed`);
}
