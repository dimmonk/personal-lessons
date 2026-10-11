// The pure half of the practice engine (lesson standard 26): seeded numbers, scoring, pass rules, dates, the practice record, what
// comes back and when, and how a group of questions is built. No browser: the app's scripts are loaded as in tests/load-app.mjs, with
// the test subject (tests/fixtures/fixture-subject), and the clock is set by hand so a run is the same every time.
// Run: node tests/engine-pure.mjs
import vm from 'node:vm';
import { loadApp } from './load-app.mjs';
import { loadAll } from '../tools/learner-view/load.mjs';
import { renderLesson } from '../tools/learner-view/render-learner-view.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);

// a fresh app with the test subject and a clock the test sets: on('2026-10-12') makes today that day
async function fresh() {
  const app = await loadApp({ fixture: true });
  vm.runInContext(`(() => { const Real = Date; globalThis.__now = Real.now();
    globalThis.Date = class extends Real { constructor(...a) { if (a.length) super(...a); else super(globalThis.__now); } static now() { return globalThis.__now; } }; })()`, app.context);
  const on = day => { const [y, m, d] = day.split('-').map(Number); app.context.__now = new Date(y, m - 1, d, 10).getTime(); };
  return { ...app, on };
}
const data = app => app.FC.get('fixture');

/* ---------- seeded numbers and generators ---------- */
{
  const app = await fresh(), { seededRandom, hashSeed, shuffled, genValues, itemFromGen, isRangeParam, slotsIn, fillSlots } = app;
  const a = seededRandom(7), b = seededRandom(7);
  same([a(), a(), a()], [b(), b(), b()], 'the same seed gives the same stream');
  check(seededRandom(7)() !== seededRandom(8)(), 'two seeds give two streams');
  check(hashSeed('a|b') === hashSeed('a|b') && hashSeed('a|b') !== hashSeed('a|c'), 'a string hashes to one number');
  same(shuffled([1, 2, 3, 4, 5], 3), shuffled([1, 2, 3, 4, 5], 3), 'a shuffle is the same for the same seed');
  check(shuffled([1, 2, 3, 4, 5], 3).slice().sort().join() === '1,2,3,4,5', 'a shuffle keeps every member');
  check(isRangeParam([1, 9, 2]) && !isRangeParam(['a', 'b', 'c']) && !isRangeParam([10, 20, 30, 40]) && !isRangeParam([5, 1, 1]), 'a range is three numbers, step above zero, min at most max');
  const gen = data(app).gens['g-chance'], seen = new Set();
  for (let seed = 1; seed <= 50; seed++) {
    const v = genValues(gen, seed);
    seen.add(v.pct);
    check([10, 20, 30, 40, 60, 70, 80, 90].includes(v.pct) && v.days === v.pct / 10 && v.flip === 10 - v.days, `seed ${seed}: values follow the parameters`);
  }
  check(seen.size > 3, 'seeds vary the numbers');
  const item = itemFromGen(gen, 5);
  check(slotsIn(JSON.stringify(item)).length === 0 && item.seed === 5 && item.id === 'g-chance', 'a made question has every slot filled, its seed and its id');
  same(itemFromGen(gen, 5), itemFromGen(gen, 5), 'the same seed makes the same question');
  same(slotsIn('a {x} and {yz1}'), ['x', 'yz1'], 'slots are found');
  check(fillSlots('{a}-{b}', { a: 1, b: 'x' }) === '1-x', 'slots are filled');
  let threw = false;
  try { fillSlots('{missing}', {}); } catch { threw = true; }
  check(threw, 'a slot with no value fails loudly');
  same(genValues(gen, 5, { pct: 70 }).pct, 70, 'a generator reference can fix a parameter');
}

/* ---------- scoring ---------- */
{
  const app = await fresh(), d = data(app), { scoreChoose, scoreItem, openAsks, itemAnswered, askedAsks, shownStepIds, askApplies, chooseOptions } = app;
  const c1 = d.items['c-1'], verdict = c1.asks[1];
  same(chooseOptions(d, verdict).map(o => [o.id, o.ok]), [['bring', true], ['leave', false]], 'a list ask offers the subject\'s list, the right answer marked');
  check(scoreChoose(d, verdict, 'bring') === 'ok' && scoreChoose(d, verdict, 'leave') === 'no', 'a list ask scores right and wrong');
  check(scoreChoose(d, d.items['c-2'].asks[0], 'bring') === 'promise', 'a wrong option with a slip scores as the slip');
  same(openAsks(c1, null, {}).map(a => a.id), ['num'], 'only the first ask is open at the start');
  same(openAsks(c1, null, { num: 'n80' }).map(a => a.id), ['num', 'v'], 'the next ask opens when the one before is answered');
  check(!itemAnswered(c1, null, { num: 'n80' }) && itemAnswered(c1, null, { num: 'n80', v: 'bring' }), 'an item is answered when every ask is');
  const c3 = d.items['c-3'];
  check(askApplies(c3.asks[1], { v: 'leave' }) && !askApplies(c3.asks[1], { v: 'bring' }), 'a conditional ask opens on the named answers only');
  check(itemAnswered(c3, null, { v: 'bring' }) && !itemAnswered(c3, null, { v: 'leave' }), 'a conditional ask that did not open is not waited for');
  same(scoreItem(d, c1, null, { num: 'n80', v: 'bring' }), { r: { num: 'ok', v: 'ok' }, ok: true }, 'an item is right when every scored ask is');
  same(scoreItem(d, c1, null, { num: 'n20', v: 'bring' }), { r: { num: 'no', v: 'ok' }, ok: false }, 'an item with one wrong ask is wrong');
  const many = { id: 'm', kind: 'choose', prompt: 'x', many: true, options: [{ id: 'a', text: 'A', ok: true }, { id: 'b', text: 'B', ok: true }, { id: 'c', text: 'C', then: 'no' }] };
  check(scoreChoose(d, many, ['a', 'b']) === 'ok' && scoreChoose(d, many, ['a']) === 'no' && scoreChoose(d, many, ['a', 'b', 'c']) === 'no', 'several choices are right only when exactly the right ones are tapped');
  const t1 = d.items['t-1'];
  same(askedAsks(t1, null).map(a => a.id), ['when', 'v'], 'with no help every ask is the learner\'s');
  same(askedAsks(t1, { leave: 1 }).map(a => a.id), ['v'], 'help that leaves one step shows the other and gives its answer');
  same(askedAsks(t1, { leave: 2 }).map(a => a.id), ['when', 'v'], 'help that leaves every step gives nothing away');
  same(shownStepIds(t1, { leave: 1 }), ['a'], 'the steps shown are all but the last ones left to the learner');
}

/* ---------- pass rules ---------- */
{
  const app = await fresh(), d = data(app), { ruleMet, ruleText, checkResult, ruleCounts } = app;
  const out = (kind, ok, r = { v: ok ? 'ok' : 'no' }) => ({ facets: { kind }, r, ok });
  const outcomes = [out('wet', true), out('wet', true), out('dry', false), out('dry', true, { v: 'ok' }), out('dry', false, { v: 'promise' })];
  check(ruleMet({ right: { min: 3 } }, outcomes) && !ruleMet({ right: { min: 4 } }, outcomes), 'at least n right');
  check(ruleMet({ where: { kind: 'wet' }, wrong: { max: 0 } }, outcomes) && !ruleMet({ where: { kind: 'dry' }, wrong: { max: 1 } }, outcomes), 'at most n wrong among a facet value');
  check(!ruleMet({ slip: 'promise', max: 0 }, outcomes) && ruleMet({ slip: 'promise', max: 1 }, outcomes), 'at most n of a slip');
  check(ruleMet({ ask: 'v', right: { min: 3 } }, outcomes), 'a rule can count one ask');
  same(ruleCounts({ where: { kind: 'dry' } }, outcomes).n, 3, 'a rule counts the items its facet value selects');
  same(ruleText(d, { right: { min: 8 } }), 'At least 8 right', 'a rule in words: right');
  same(ruleText(d, { where: { kind: 'wet' }, wrong: { max: 0 } }), 'None wrong among wet forecasts', 'a rule in words: none wrong among a value');
  same(ruleText(d, { slip: 'promise', max: 0 }), 'None treated a chance as a promise', 'a rule in words: a slip');
  const result = checkResult(d, [{ right: { min: 3 } }, { slip: 'promise', max: 0 }], outcomes);
  same([result.right, result.total, result.passed, result.lines.map(l => l.met)], [3, 5, false, [true, false]], 'a check passes only when every rule is met');
}

/* ---------- dates ---------- */
{
  const { addDays, weekEnd } = await fresh();
  same([addDays('2026-10-30', 3), addDays('2026-12-30', 3), addDays('2026-03-01', -1)], ['2026-11-02', '2027-01-02', '2026-02-28'], 'days add across months and years');
  same([weekEnd('2026-10-12'), weekEnd('2026-10-14'), weekEnd('2026-10-18'), weekEnd('2026-10-19')], ['2026-10-18', '2026-10-18', '2026-10-18', '2026-10-25'], 'a week runs Monday to Sunday');
}

/* ---------- the record and what comes back ---------- */
const attempt = (run, ctx, ok, extra = {}) => ({ run, lesson: 'l1', rev: 1, context: ctx, sup: false, a: { v: 'bring' }, r: { v: ok ? 'ok' : 'no' }, ok, ...extra });
// a whole check of lesson one (four fixed questions and one made), all right or with the listed ones wrong
function wholeCheck(app, run, wrong = []) {
  ['k-1', 'k-2', 'k-3', 'k-4'].forEach(k => app.recordTry('fixture', k, attempt(run, 'check', !wrong.includes(k))));
  app.recordTry('fixture', 'g-chance', attempt(run, 'check', !wrong.includes('g-chance'), { seed: 3 }));
}
{
  const app = await fresh(), d = data(app), l1 = d.lessons.l1;
  app.on('2026-10-01');
  const t = app.recordTry('fixture', 'k-1', attempt('r1', 'check', true));
  same(Object.keys(t).sort(), ['a', 'context', 'd', 'engine', 'lesson', 'ok', 'r', 'rev', 'run', 'sup'], 'a try holds exactly the fields of 26.3');
  check(t.d === '2026-10-01' && t.engine === app.FC.ENGINE, 'a try carries the day and the engine wording');
  check(!app.lessonDone(d, 'fixture', l1), 'a partial check is not a done lesson');
  ['k-2', 'k-3', 'k-4'].forEach(k => app.recordTry('fixture', k, attempt('r1', 'check', true)));
  check(!app.lessonDone(d, 'fixture', l1), 'four of five is not a complete run');
  app.recordTry('fixture', 'g-chance', attempt('r1', 'check', true, { seed: 9 }));
  check(app.lessonDone(d, 'fixture', l1) && app.completeRuns(d, 'fixture', l1).length === 1, 'a complete run of the check makes the lesson done');
  const last = app.lastCheck(d, 'fixture', l1);
  check(last.passed && last.right === 5 && last.total === 5, 'the last check is worked out from the record');
  for (let i = 0; i < 15; i++) app.recordTry('fixture', 'k-1', attempt(`x${i}`, 'practice', true));
  check(app.itemsOf('fixture')['k-1'].tries.length === 12, 'an item keeps its last twelve tries');
  check(app.firstTries('fixture').length === 12 + 4, 'a first try is the first of each question in a sitting');
}
{
  // the schedule: 2 days after the check, then 7, then 24, leaving after the third good day; a miss starts again
  const app = await fresh(), d = data(app), day = (n, ok = true, run = `s${n}`) => { app.on(n); app.recordTry('fixture', 'c-1', attempt(run, 'practice', ok)); };
  same(app.strandSchedules(d, 'fixture'), {}, 'nothing is scheduled before a check');
  app.on('2026-10-01'); wholeCheck(app, 'r1');
  same(app.strandSchedules(d, 'fixture').chance, { lessonId: 'l1', level: 0, due: '2026-10-03' }, 'a strand is due 2 days after its check');
  same(app.dueStrands(d, 'fixture', '2026-10-02').length, 0, 'it is not due before then');
  same(app.dueStrands(d, 'fixture', '2026-10-03').map(x => x.strand.id), ['chance'], 'it is due on the day');
  day('2026-10-03'); same(app.strandSchedules(d, 'fixture').chance.due, '2026-10-10', 'then 7 days after the first good day');
  day('2026-10-10'); same(app.strandSchedules(d, 'fixture').chance.due, '2026-11-03', 'then 24 days after the second');
  day('2026-11-03'); same(app.strandSchedules(d, 'fixture').chance.due, null, 'and it leaves after the third');
  day('2026-11-05', false); same(app.strandSchedules(d, 'fixture').chance, { lessonId: 'l1', level: 0, due: '2026-11-07' }, 'a miss starts it again, 2 days on');
  check(!('timing' in app.strandSchedules(d, 'fixture')), 'a strand whose lesson check is not done is not scheduled');
}
{
  // a second try in the same sitting is not a first try; a made question counts once per seed
  const app = await fresh();
  app.on('2026-10-01');
  app.recordTry('fixture', 'c-1', attempt('r1', 'practice', false));
  app.recordTry('fixture', 'c-1', attempt('r1', 'practice', true));
  app.recordTry('fixture', 'g-chance', attempt('r1', 'practice', true, { seed: 1 }));
  app.recordTry('fixture', 'g-chance', attempt('r1', 'practice', false, { seed: 2 }));
  same(app.firstTries('fixture').map(({ t }) => t.ok), [false, true, false], 'first tries: one per question per sitting, one per seed for a made question');
}
{
  // the retest: n days after the first complete check, once
  const app = await fresh(), d = data(app), l1 = d.lessons.l1;
  app.on('2026-10-01'); wholeCheck(app, 'r1');
  same(app.retestDays(d, 'fixture').map(r => [r.lesson.id, r.due]), [['l1', '2026-10-08']], 'a retest is due 7 days after the first check');
  same(app.retestsDue(d, 'fixture', '2026-10-07').length, 0, 'and not before');
  same(app.retestsDue(d, 'fixture', '2026-10-08').length, 1, 'and then');
  app.on('2026-10-08');
  ['k-1', 'k-2', 'k-3', 'k-4'].forEach(k => app.recordTry('fixture', k, attempt('rt', 'retest', true)));
  same(app.retestsDue(d, 'fixture', '2026-10-30').length, 1, 'a partial retest does not clear it');
  app.recordTry('fixture', 'g-chance', attempt('rt', 'retest', true, { seed: 4 }));
  same(app.retestsDue(d, 'fixture', '2026-10-30').length, 0, 'a complete retest clears it');
  check(app.completeRuns(d, 'fixture', l1).length === 1, 'a retest is not a second check');
}
{
  // the keeps-coming-back setting adds a round every n days after the third
  const app = await fresh(), d = data(app);
  vm.runInContext(`FC.subject('fixture', { ...FC.get('fixture').meta, review: { every: 60 } })`, app.context);
  const d2 = app.FC.get('fixture');
  app.on('2026-10-01'); wholeCheck(app, 'r1');
  ['2026-10-03', '2026-10-10', '2026-11-03'].forEach((day, i) => { app.on(day); app.recordTry('fixture', 'c-1', attempt(`s${i}`, 'practice', true)); });
  same(app.strandSchedules(d2, 'fixture').chance.due, '2027-01-02', 'a subject that keeps its topics coming back sets the next round 60 days on');
  void d;
}

{
  // tries of the old lessons stay in storage and are never read
  const app = await fresh();
  app.storage.set('pl:fixture:items', JSON.stringify({ 'u1/old-case': { tries: [{ d: '2026-09-01', rev: 4, engine: 5, mode: 'name', context: 'unit', steps: {}, name: 'x', ok: true }] } }));
  check(app.firstTries('fixture').length === 0 && !app.itemsOf('fixture')['u1/old-case'].tries.some(t => typeof t.run === 'string'), 'a try of the old lessons is not read');
  app.on('2026-10-01');
  app.recordTry('fixture', 'c-1', attempt('r1', 'practice', true));
  check(app.firstTries('fixture').length === 1 && 'u1/old-case' in app.itemsOf('fixture'), 'the old record is kept beside the new');
}

/* ---------- unseen questions for a review ---------- */
{
  const app = await fresh(), d = data(app);
  app.on('2026-10-01');
  const pick = app.strandInstance(d, 'fixture', 'timing', 'run1', 0, []);
  check(!pick.repeat && ['b-1', 'b-2', 'b-3', 'b-4'].includes(pick.inst.key), 'a topic with questions in reserve is asked on one of them, never a seen one');
  ['b-1', 'b-2', 'b-3'].forEach((k, i) => app.recordTry('fixture', k, attempt(`b${i}`, 'review', true)));
  same(app.strandInstance(d, 'fixture', 'timing', 'run2', 0, []).inst.key, 'b-4', 'the last unseen question is used');
  app.recordTry('fixture', 'b-4', attempt('b9', 'review', true));
  const again = app.strandInstance(d, 'fixture', 'timing', 'run3', 0, []);
  check(again.repeat && again.inst.key === 'b-1', 'when none is unseen the least recently seen comes back, and says so');
  const made = app.strandInstance(d, 'fixture', 'chance', 'run1', 0, []);
  check(made.inst.seed !== undefined && made.inst.key === 'g-chance' && !made.repeat, 'a topic with a generator is asked with fresh numbers');
  app.recordTry('fixture', 'g-chance', attempt('x', 'review', true, { seed: made.inst.seed }));
  check(app.strandInstance(d, 'fixture', 'chance', 'run1', 0, []).inst.seed !== made.inst.seed, 'and never with a seed already used');
  const retest = app.retestInstances(d, 'fixture', d.lessons.l1, 'rt');
  check(retest.length === 5 && retest.every(i => i.key === 'g-chance') && new Set(retest.map(i => i.seed)).size === 5, 'a retest asks new questions of the same topic');
  const l2 = app.retestInstances(d, 'fixture', d.lessons.l2, 'rt');
  check(l2.length === 3 && l2.every(i => i.item.strand === 'timing') && new Set(l2.map(i => i.key)).size === 3, 'a retest never repeats a question within itself');
}

/* ---------- a drawn check ---------- */
{
  const app = await fresh(), d = data(app);
  app.on('2026-10-01');
  const draw = { strands: ['timing'], n: 3 };
  const first = app.drawInstances(d, 'fixture', draw, 'run1', []);
  check(first.length === 3 && new Set(first.map(i => i.key)).size === 3 && first.every(i => i.item.strand === 'timing'), 'a drawn check holds n different questions of the named topics');
  same(app.drawInstances(d, 'fixture', draw, 'run1', []).map(i => i.key), first.map(i => i.key), 'the same run draws the same questions');
  first.forEach((i, k) => app.recordTry('fixture', i.key, attempt(`d${k}`, 'check', true)));
  const second = app.drawInstances(d, 'fixture', draw, 'run2', []);
  check(second.every(i => !first.some(f => f.key === i.key)), 'a second draw takes questions not seen before while there are some');
  check(app.drawInstances(d, 'fixture', draw, 'run3', second.map(i => i.key)).every(i => !second.some(s => s.key === i.key)), 'a draw leaves out the questions it is told to');
}

/* ---------- building a group of questions ---------- */
{
  const app = await fresh(), d = data(app), l1 = d.lessons.l1, l2 = d.lessons.l2;
  app.on('2026-10-01');
  const setB = l1.flow[3].set, built = app.buildSet(d, 'fixture', l1, setB, 'run1');
  check(built.length === 6, 'a group holds its questions, a made one n times');
  same(app.buildSet(d, 'fixture', l1, setB, 'run1').map(i => [i.key, i.seed]), built.map(i => [i.key, i.seed]), 'the same run builds the same group');
  const keys = built.map(i => i.key), pairAt = keys.indexOf('c-3');
  check(Math.abs(pairAt - keys.indexOf('c-4')) === 1, 'an inner pair is asked one after the other');
  check(built.filter(i => i.key === 'g-chance').length === 2 && built.filter(i => i.key === 'g-chance')[0].seed !== built.filter(i => i.key === 'g-chance')[1].seed, 'a made question is made with two different seeds');
  const listed = app.buildSet(d, 'fixture', l1, l1.flow[2].set, 'run1');
  same(listed.map(i => i.key), ['c-1', 'c-2'], 'a listed group keeps its order');
  const mixed = app.buildSet(d, 'fixture', l2, l2.flow[4].set, 'run1');
  check(mixed.length === 3 && mixed.filter(i => i.key.startsWith('c-') || i.key === 'g-chance').length === 1, 'questions from an earlier lesson are mixed in, a third of the group');
  const mixedKeys = mixed.map(i => i.key);
  check(mixedKeys.includes('t-5') && mixedKeys.includes('t-6'), 'the new questions are all still there');
  ['c-1', 'c-2', 'c-5'].forEach((k, i) => app.recordTry('fixture', k, attempt(`h${i}`, 'practice', true)));
  const prior = app.buildSet(d, 'fixture', l2, l2.flow[4].set, 'run2').find(i => !i.key.startsWith('t-'));
  check(!['c-1', 'c-2'].includes(prior.key), 'the earlier question mixed in is the one least recently seen');
  const unseen = app.buildSet(d, 'fixture', l2, l2.flow[2].set, 'run3', { again: true });
  check(unseen.every(i => ['b-1', 'b-2', 'b-3', 'b-4'].includes(i.key)), 'practice again swaps in questions of the same topic the learner has not seen');
}

/* ---------- the learner view ---------- */
{
  const loaded = await loadAll({ fixture: true });
  for (const [id, lesson] of Object.entries(loaded.subjects.fixture.lessons)) {
    const text = renderLesson(loaded, 'fixture', id);
    check(text.includes(`# Umbrella days: ${lesson.title}`) && text.includes('## The why') && text.includes('## The check') && text.includes('## The result'), `${id}: the learner view has its heading, why, check and result`);
    check(!/\{[A-Za-z]+\}/.test(text), `${id}: the learner view leaves no slot unfilled`);
    check(text.includes('To pass:') && lesson.check.pass.every(r => text.includes(loaded.engine.ruleText(loaded.subjects.fixture, r))), `${id}: the learner view lists every rule of the check in words`);
    const asks = Object.values(loaded.subjects.fixture.items).flatMap(i => i.asks).filter(a => a.prompt && text.includes(a.prompt));
    check(asks.length > 0, `${id}: the learner view shows the questions`);
  }
  check(renderLesson(loaded, 'fixture', 'l2').includes('Help on screen: the working up to the last steps.'), 'the learner view shows what the help leaves out');
  let threw = false;
  try { renderLesson(loaded, 'fixture', 'l9'); } catch { threw = true; }
  check(threw, 'the learner view refuses a lesson that does not exist');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} engine checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} engine checks passed`);
