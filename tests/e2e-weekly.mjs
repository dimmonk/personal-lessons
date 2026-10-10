// Browser checks for the weekly review (lesson standard section 24, E9, E10, E18): what it holds, how it runs, what it records,
// the library tile and the plan reminder. Every date is worked out here from the calendar (Monday to Sunday, local time), never
// read from the app, so the app's own idea of "this week" is what is being checked.
// Negative controls: a fault seeded into the app must turn exactly its own check red (next week's items in the review; a try
// stored with the wrong context).
// Each function takes `env` from e2e.mjs: { freshPage, check, inspect, clickVisible, openSubject, screenText }.
import { fileURLToPath } from 'node:url';
import { registerMiniSubject, showMiniSubject } from './fixtures/mini-subject.mjs';
import { target, layout, shot, screenOf, norm, getStore, runPlan } from './e2e-screens.mjs';

/* ---------- the calendar, worked out here ---------- */
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const shiftDays = n => { const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n); };
const untilSunday = () => (7 - new Date().getDay()) % 7;          // 0 on a Sunday
const sundayIso = () => iso(shiftDays(untilSunday()));
const nextMondayDate = () => shiftDays(untilSunday() + 1);
const words = date => date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
// an item is due two days after its unit's drill: the day a unit was drilled so that its names fall due on `dueDelta` days from today
const drilledFor = dueDelta => iso(shiftDays(dueDelta - 2));

/* ---------- setting a page up ---------- */
// A unit finished on `day` ('YYYY-MM-DD') with one right first try on a whole-story item for each of its names.
const seedAt = (page, subject, unit, day, plan) => page.evaluate(([subject, unit, day, plan]) => {
  const v = unitView(subject, unit), items = {};
  v.taught.forEach(target => {
    const c = v.casesOf(unit).find(x => !x.kind && x.use === 'drill' && caseTarget(v, x) === target);
    items[`${unit}/${c.id}`] = { tries: [{ d: day, rev: v.unit.rev, engine: FC.ENGINE, mode: 'route', context: 'unit',
      steps: Object.fromEntries(Object.entries(c.route).map(([k, a]) => [k, a[0]])), name: target, ok: true }] };
  });
  const read = key => JSON.parse(localStorage.getItem(key) || '{}');
  localStorage.setItem(`pl:${subject}:items`, JSON.stringify({ ...read(`pl:${subject}:items`), ...items }));
  localStorage.setItem(`pl:${subject}:seen`, JSON.stringify({ ...read(`pl:${subject}:seen`), [unit]: { rev: v.unit.rev, done: true, at: 'close' } }));
  if (plan) localStorage.setItem(`pl:${subject}:notes`, JSON.stringify({ [unit]: { plan } }));
}, [subject, unit, day, plan || null]);
const PLAN = { cue: 'a rush request', then: 'stop and check', saved: iso(shiftDays(-4)) };

// A page with the real subject's target unit finished three days ago (`real`) and the mini subject's units finished so that their
// names fall due on the days given (`mini`: { u1: dueDelta, u2: dueDelta }, `plan` for u1).
async function weeklyPage(env, width, { t, mini, plan }) {
  const { context, page } = await env.freshPage(width);
  if (t) { await seedAt(page, t.subject, t.unit, iso(shiftDays(-3))); await page.reload(); }
  await page.evaluate(registerMiniSubject);
  for (const [unit, dueDelta] of Object.entries(mini || {})) await seedAt(page, 'mini', unit, drilledFor(dueDelta), unit === 'u1' ? plan : null);
  await page.evaluate(showMiniSubject);
  return { context, page };
}
const toLibrary = (env, page) => env.clickVisible(page, '[data-v="library"]');
const tile = page => page.locator('[data-review-tile]').textContent().then(norm);
const startFromTile = page => page.click('[data-review-start]');

// Plays a review to its results screen, right every time (the first item wrong when asked); the plan reminders it meets are listed.
async function playReview(page, { missFirst = false } = {}) {
  const reminders = [];
  let answered = 0;
  for (let guard = 0; guard < 600; guard++) {
    if (await page.locator('.done-screen.results').count()) break;
    if (await page.locator('#planKeep').count()) { reminders.push(await page.evaluate(() => REVIEW.parts[REVIEW.at].subj.id)); await page.click('#planKeep'); continue; }
    if (await page.locator('#start').count()) { await page.click('#start'); continue; }
    if (await page.locator('#next').count()) { await page.click('#next'); continue; }
    const plan = await runPlan(page, 'review', missFirst && answered === 0);
    if (!plan) break;
    for (const sel of plan.clicks) await page.click(sel);
    answered++;
  }
  return { answered, reminders };
}
// every try stored since the units were finished: anything that is not a unit's own
const newTries = (page, subjects) => page.evaluate(subjects => subjects.flatMap(S => Object.entries(JSON.parse(localStorage.getItem(`pl:${S}:items`) || '{}'))
  .flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })))).filter(t => t.context !== 'unit'), subjects);

/* ---------- what the review holds ---------- */
// Items due on the last day of the week are in; items due on the Monday after are not. Read for the mini subject, whose u1 falls due
// on Sunday and whose u2 falls due next Monday.
const holdsThisWeekOnly = page => page.evaluate(() => {
  const units = [...new Set(reviewItems('mini').map(i => i.unitId))];
  return units.includes('u1') && !units.includes('u2');
});

export async function testReviewHolds(env, width = 390) {
  const { check } = env, t = await target(env);
  const { context, page } = await weeklyPage(env, width, { t, mini: { u1: untilSunday(), u2: untilSunday() + 1 }, plan: PLAN });
  // the tab, and nothing of the deleted screens
  const nav = norm(await page.locator('#tabbar').textContent() + await page.locator('#rail').textContent());
  check(/Review/.test(nav) && !/Mixed/.test(nav), `the navigation reads "${nav.slice(0, 160)}", not Library, Review and Progress`);
  await toLibrary(env, page);
  const text = await tile(page), library = await screenOf(page);
  check(/This week’s review/.test(text) && text.includes(t.subjectName) && text.includes('Mini') && /due this week/.test(text), `the library tile reads "${text}"`);
  check(!/Due today/.test(library) && await page.locator('[data-due], [data-due-tile]').count() === 0, 'the library still has a Due today tile');
  await layout(env, page, `${width}px library with the review tile`);
  await shot(page, 'review-tile');
  await env.openSubject(page, t.subject);
  check(!/Due today/.test(await screenOf(page)) && await page.locator('[data-due], [data-due-tile]').count() === 0, 'a subject screen still has a Due today tile');
  // what it holds: this subject's names, the mini subject's u1 (due Sunday) and not its u2 (due next Monday)
  const held = await page.evaluate(([S, U]) => {
    const items = [...reviewItems(S), ...reviewItems('mini')];
    return { real: reviewItems(S).every(i => i.unitId === U) && reviewItems(S).length > 0, mini: [...new Set(reviewItems('mini').map(i => i.unitId))],
      sameTwice: JSON.stringify(reviewItems(S)) === JSON.stringify(reviewItems(S)) && JSON.stringify(reviewItems('mini')) === JSON.stringify(reviewItems('mini')), total: items.length };
  }, [t.subject, t.unit]);
  check(held.real, 'the review holds nothing of the finished unit whose names are due, or holds something of another unit');
  check(held.mini.includes('u1') && !held.mini.includes('u2'), `the review holds the mini units ${held.mini.join(', ')}; u1 is due Sunday and must be in, u2 is due next Monday and must not`);
  check(held.sameTwice, 'the review is not the same twice from one record: something in it is random');
  check(held.total > 6, `the review holds ${held.total} questions; a cap of six has not been removed`);
  // the Review tab, with one part per subject, and a count the review then asks
  await env.clickVisible(page, '[data-v="review"]');
  const overview = await screenOf(page);
  check(overview.includes(t.subjectName) && overview.includes('Mini') && /Start the review/.test(overview), `the Review tab reads "${overview.slice(0, 200)}"`);
  await layout(env, page, `${width}px Review tab`);
  const badge = Number((norm(await page.locator('[data-review-tile] .ch .m').last().textContent()).match(/\d+/) || [])[0]);
  await startFromTile(page);
  const asked = await page.evaluate(() => REVIEW.parts.map(p => ({ id: p.subj.id, n: p.run.stages[0].queue.length, ctx: p.run.context })));
  check(asked.length === 2 && asked.map(a => a.id).includes(t.subject) && asked.map(a => a.id).includes('mini'), `the review has the parts ${asked.map(a => a.id).join(', ')}, not one per subject with something due`);
  check(asked.reduce((n, a) => n + a.n, 0) === badge, `the tile says ${badge} due and the review asks ${asked.reduce((n, a) => n + a.n, 0)}`);
  check(asked.every(a => a.ctx === 'review'), 'a part of the review is not a review run');
  await context.close();
}

// The negative control for "next week's items are left out": the same measurement against a week that is made to run a week long.
export async function testNextWeekLeftOut(env, width = 390) {
  const { check } = env;
  const { context, page } = await weeklyPage(env, width, { mini: { u1: untilSunday(), u2: untilSunday() + 1 } });
  check(await holdsThisWeekOnly(page), 'the review leaves out items due on Sunday, or holds items due on the Monday after');
  await page.evaluate(() => { const real = weekEnd; globalThis.weekEnd = day => addDays(real(day), 7); });
  check(!(await holdsThisWeekOnly(page)), 'negative control: the "next week is left out" measurement did not go red against a week that runs a week long');
  await context.close();
}

/* ---------- running it ---------- */
export async function testReviewRuns(env, width = 390) {
  const { check } = env, t = await target(env);
  const { context, page } = await weeklyPage(env, width, { t, mini: { u1: untilSunday() }, plan: PLAN });
  await toLibrary(env, page);
  const before = await page.evaluate(() => JSON.stringify(SUBJECTS.map(s => localStorage.getItem(`pl:${s.id}:items`))));
  await startFromTile(page);
  const sizes = await page.evaluate(() => REVIEW.parts.map(p => ({ id: p.subj.id, n: p.run.stages[0].queue.length })));
  const total = sizes.reduce((n, s) => n + s.n, 0);
  await layout(env, page, `${width}px review part intro`);
  await shot(page, 'review-intro');
  check(/Review · /.test(await screenOf(page)) || /due to come back/.test(await screenOf(page)), 'the first part does not say it is a review');
  // Back leaves the review, records nothing and builds it again from the record next time
  await page.click('[data-drill-back]');
  check(await page.evaluate(() => APP.view === 'library' && REVIEW === null), 'Back from the review did not leave it for the library');
  check(await page.evaluate(() => JSON.stringify(SUBJECTS.map(s => localStorage.getItem(`pl:${s.id}:items`)))) === before, 'leaving the review changed the practice record');
  await startFromTile(page);
  check(await page.evaluate(() => REVIEW.parts.reduce((n, p) => n + p.run.stages[0].queue.length, 0)) === total, 'the review was not built again from the record after Back');
  // play it through, the first item wrong
  const { answered, reminders } = await playReview(page, { missFirst: true });
  const run = await page.evaluate(() => REVIEW.parts.map(p => ({ id: p.subj.id, asked: p.run.asked, tries: p.run.tries.map(x => ({ first: x.first, ok: x.ok, target: x.target })), n: p.run.tries.filter(x => x.first).length })));
  const first = run[0].asked[0], again = run[0].asked.map((id, i) => id === first ? i : -1).filter(i => i >= 0);
  check(answered === run.reduce((n, r) => n + r.asked.length, 0) && answered >= total + 1, `${answered} answers were given for ${total} questions and one miss`);
  check(again.length >= 2 && again[1] > again[0], `the missed story was asked at ${again.join(', ')} of ${run[0].asked.length}: it did not come back before the end`);
  check(reminders.length === 1 && reminders[0] === 'mini', `the plan reminder was shown ${reminders.length} times (${reminders.join(', ')}), not once at the start of its subject's part`);
  // what was stored
  const tries = await newTries(page, [t.subject, 'mini']);
  check(tries.length === answered && tries.every(x => x.context === 'review'), `the new tries were stored with the contexts ${[...new Set(tries.map(x => x.context))].join(', ')}, not only "review"`);
  const missed = tries.filter(x => x.key === `${t.unit}/${first}` || x.key.endsWith(`/${first}`));
  check(missed.length >= 2 && missed[0].ok === false && missed[missed.length - 1].ok === true, `the missed story's tries read ${JSON.stringify(missed.map(x => x.ok))}, not a miss then a right answer`);
  // the results
  const results = await screenOf(page);
  const nameMissed = await page.evaluate(() => { const p = REVIEW.parts[0], m = p.run.tries.find(x => x.first && !x.ok); return unitView(p.subj.id, m.unitId).nameOf(m.target); });
  const figure = (ok, n) => `${ok} of ${n} · ${Math.round(100 * ok / n)}%`;
  check(/The review is done/.test(results) && results.includes(t.subjectName) && results.includes('Mini') && results.includes('All subjects'), `the results read "${results.slice(0, 200)}"`);
  check(results.includes(figure(sizes[0].n - 1, sizes[0].n)) && results.includes(figure(total - 1, total)) && (sizes[1].n < 1 || results.includes(figure(sizes[1].n, sizes[1].n))),
    `the first-try figures should be ${figure(sizes[0].n - 1, sizes[0].n)} for ${sizes[0].id} and ${figure(total - 1, total)} in all: "${results.slice(0, 300)}"`);
  check(results.includes(nameMissed), `the results do not name the name missed (${nameMissed})`);
  check(results.includes(words(shiftDays(2))), `the results do not give the date the next question falls due (${words(shiftDays(2))}): "${results.slice(-200)}"`);
  await layout(env, page, `${width}px review results`);
  await shot(page, 'review-results');
  // the log and the old figures
  const log = await getStore(page, 'pl:log');
  check(log.some(e => e.type === 'return' && e.subject === t.subject) && log.some(e => e.type === 'return' && e.subject === 'mini'), 'a finished part of the review was not logged for each subject');
  await context.close();
}

// "Review" is the only context a review writes, and the one the schedule reads like any other: the negative control seeds a review that
// stores its tries as "return" and must turn the first check red.
const contextHolds = async (env, page) => {
  await toLibrary(env, page);
  await startFromTile(page);
  await playReview(page);
  const tries = await newTries(page, ['mini']);
  return tries.length > 0 && tries.every(x => x.context === 'review');
};
export async function testReviewContext(env, width = 390) {
  const { check } = env;
  const { context, page } = await weeklyPage(env, width, { mini: { u1: untilSunday() } });
  check(await contextHolds(env, page), 'a review try was not stored with the context "review"');
  await context.close();
  const faulty = await weeklyPage(env, width, { mini: { u1: untilSunday() } });
  await faulty.page.evaluate(() => { const real = reviewRun; globalThis.reviewRun = (...args) => ({ ...real(...args), context: 'return' }); });
  check(!(await contextHolds(env, faulty.page)), 'negative control: the "context review" check did not go red against a review that stores "return"');
  await faulty.context.close();
  // earlier tries keep counting: a good day in any context moves the name on
  const old = await weeklyPage(env, width, { mini: { u1: untilSunday() } });
  const levels = await old.page.evaluate(() => {
    const v = unitView('mini', 'u1'), day = n => addDays(today(), n), out = {};
    for (const context of ['return', 'mixed', 'review']) {
      itemsCache.mini = {
        'u1/doa1': { tries: [{ d: day(-9), rev: 1, engine: FC.ENGINE, mode: 'route', context: 'unit', steps: {}, name: 'oa', ok: true }] },
        'u1/roa1': { tries: [{ d: day(-7), rev: 1, engine: FC.ENGINE, mode: 'route', context, steps: {}, name: 'oa', ok: true }] }
      };
      out[context] = returnState(v, 'u1', 'oa').level;
    }
    return out;
  });
  check(levels.return === 1 && levels.mixed === 1 && levels.review === 1, `a good day in an earlier or a review context moved the name to ${JSON.stringify(levels)}, not level 1 each`);
  await old.context.close();
}

/* ---------- the tile when nothing is due ---------- */
export async function testReviewTileStates(env, width = 390) {
  const { check } = env;
  const fresh = await env.freshPage(width);
  await toLibrary(env, fresh.page);
  const none = await tile(fresh.page);
  check(/starts when you finish a unit/.test(none) && await fresh.page.locator('[data-review-start]').count() === 0, `before any unit is finished the tile reads "${none}"`);
  await layout(env, fresh.page, `${width}px review tile before a unit is finished`);
  await fresh.context.close();
  // names due only next Monday: nothing this week, and the tile gives that day
  const { context, page } = await weeklyPage(env, width, { mini: { u1: untilSunday() + 1 } });
  await toLibrary(env, page);
  const done = await tile(page), want = words(nextMondayDate());
  check(/Done for this week/.test(done) && done.includes(want) && await page.locator('[data-review-start]').count() === 0, `with nothing due this week the tile reads "${done}", not "Done for this week" and ${want}`);
  await layout(env, page, `${width}px review tile done for the week`);
  await shot(page, 'review-tile-done');
  await env.clickVisible(page, '[data-v="review"]');
  check((await screenOf(page)).includes(want) && await page.locator('[data-review-start]').count() === 0, 'the Review tab does not say the same when nothing is due this week');
  await context.close();
  // names due on Sunday itself: the tile counts them
  const sunday = await weeklyPage(env, width, { mini: { u1: untilSunday() } });
  await toLibrary(env, sunday.page);
  check(/due this week/.test(await tile(sunday.page)) && await sunday.page.locator('[data-review-start]').count() === 1, 'names due on the last day of the week are not in the tile');
  await sunday.context.close();
}

/* ---------- the plan reminder (E18) ---------- */
export async function testReviewPlanReminder(env) {
  const { check } = env;
  for (const choice of ['keep', 'change', 'drop']) {
    const { context, page } = await weeklyPage(env, 390, { mini: { u1: untilSunday() }, plan: PLAN });
    await toLibrary(env, page);
    await startFromTile(page);
    const text = await screenOf(page);
    check(/Your plan/.test(text) && text.includes('If I see a rush request, then I will stop and check.'), `${choice}: the plan reminder reads "${text.slice(0, 200)}"`);
    if (choice === 'keep') { await layout(env, page, '390px plan reminder'); await shot(page, 'plan-reminder'); }
    if (choice === 'change') {
      await page.click('#planChange');
      await page.fill('#planCue', 'a fake invoice'); await page.fill('#planThen', 'call the number I know');
      await page.click('#planSave');
    } else await page.click(choice === 'keep' ? '#planKeep' : '#planDrop');
    check(await page.locator('#start').count() === 1, `${choice}: the part did not follow the reminder`);
    const plan = (await getStore(page, 'pl:mini:notes')).u1.plan;
    if (choice === 'drop') check(!plan, `drop: the plan is still saved (${JSON.stringify(plan)})`);
    if (choice === 'keep') check(plan && plan.shown && plan.cue === 'a rush request', `keep: the plan is ${JSON.stringify(plan)}`);
    if (choice === 'change') check(plan && plan.cue === 'a fake invoice' && plan.then === 'call the number I know' && plan.shown, `change: the plan is ${JSON.stringify(plan)}`);
    await page.click('[data-drill-back]');
    await startFromTile(page);
    check(await page.locator('#planKeep').count() === 0 && await page.locator('#start').count() === 1, `${choice}: the plan was shown a second time`);
    await context.close();
  }
}

export async function testWeeklyReview(env) {
  for (const width of [390, 360]) {
    await testReviewHolds(env, width);
    await testReviewRuns(env, width);
    await testReviewTileStates(env, width);
  }
  await testNextWeekLeftOut(env);
  await testReviewContext(env);
  await testReviewPlanReminder(env);
}

/* ---------- run alone ---------- */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { chromium } = await import('playwright');
  const { startServer } = await import('./static-server.mjs');
  const failures = []; let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const server = await startServer(), browser = await chromium.launch();
  const freshPage = async (width = 390) => {
    const context = await browser.newContext({ viewport: { width, height: 800 } }), page = await context.newPage();
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
    check((await screenOf(page)).length > 40, `${label}: screen is empty`);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(over <= 0, `${label}: ${over}px horizontal overflow`);
  };
  try { await testWeeklyReview({ freshPage, check, inspect, clickVisible, openSubject, screenText: screenOf }); }
  catch (err) { failures.push(`crashed: ${err.stack || err}`); }
  finally { await browser.close(); await server.close(); }
  if (failures.length) {
    console.error(`✗ ${failures.length} of ${checks} weekly review checks failed:`);
    failures.forEach(f => console.error('  - ' + f));
    process.exit(1);
  }
  console.log(`✓ ${checks} weekly review checks passed`);
}
