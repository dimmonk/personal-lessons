// The browser checks of lesson standard 26.7 built in step 1: X1, X2, X3, X5, X21, X22, X23; the sound checks of step 2 (X8, X10, X11, X12,
// X16) are in tests/e2e-sing.mjs and listed here with them. Each is a function of the environment
// (e2e-env.mjs) that drives the real app, in Chromium, with the test subject loaded, and returns its checker: how many assertions it
// made and which failed. tests/e2e-controls.mjs runs every one of them against the app with a seeded fault and requires exactly
// that check to go red.

import { SOUND_CHECKS } from './e2e-sing.mjs';
import { NUMBER_CHECKS } from './e2e-number.mjs';
import { X25 } from './e2e-math.mjs';

// A Monday. Reviews run Monday to Sunday, so the tests that move through days start on one and name the days they move to.
const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04', SUNDAY = '2026-11-08', NEXT_MONDAY = '2026-11-09';
const WAIT_MS = 2800;   // longer than any pause the app could build in: nothing may change by itself in this time

/* ---------- X1: nothing advances by itself ---------- */
export async function X1(env) {
  const c = env.checker('X1'), { context, page } = await env.freshPage(c);
  await env.openLesson(page, 'l1');
  const stays = async label => {
    const before = await env.screenText(page);
    await page.waitForTimeout(WAIT_MS);
    c.check(before === await env.screenText(page), `${label}: the screen changed by itself`);
  };
  // Next, if the learner can still tap it (a screen that moved on by itself has already been reported)
  const next = async () => { if (await page.locator('#qNext').isEnabled()) await page.locator('#qNext').click(); };
  await stays('the why');
  await env.goOn(page);
  await stays('a teaching screen');
  await env.goOn(page);
  await env.workedExample(page);
  await env.answerQuestion(page);
  c.check(await page.locator('[data-feedback]').count() === 1, 'the feedback is not shown after the last answer');
  await stays('a question with its feedback');
  await next();
  await env.answerQuestion(page);
  await next();
  await stays('the break between groups');
  await context.close();
  return c;
}

/* ---------- X2: no feedback before the last ask is answered ---------- */
export async function X2(env) {
  const c = env.checker('X2'), { context, page } = await env.freshPage(c);
  await env.openLesson(page, 'l1');
  await env.throughTeaching(page, 'l1');
  c.check(await env.questionKey(page) === 'c-1', 'the first question of the first group is not the one with two asks');
  const reason = 'well over half';
  const seen = async label => {
    c.check(await page.locator('[data-feedback]').count() === 0, `${label}: feedback is on the page`);
    c.check(await page.locator('.mark, .opt.right, .opt.wrong').count() === 0, `${label}: a right or wrong mark is on the page`);
    c.check(!(await env.screenText(page)).includes(reason), `${label}: the reason is on the page`);
    c.check(await page.locator('#qNext').isDisabled(), `${label}: Next is open`);
  };
  await seen('before any answer');
  const first = await env.openAsk(page);
  await env.tap(page, first.id, first.wrong[0]);   // a wrong answer to the first ask must give nothing away either
  await seen('after the first of two asks');
  c.check(await page.locator('[data-ask]').count() === 2, 'the second ask did not open');
  const second = await env.openAsk(page);
  await env.tap(page, second.id, second.right[0]);
  c.check(await page.locator('[data-feedback]').count() === 1, 'no feedback after the last ask');
  c.check((await env.screenText(page)).includes(reason), 'the feedback does not give the reason');
  c.check(await page.locator('.mark.no').count() >= 1 && await page.locator('.mark:not(.no)').count() >= 1, 'the marks do not show the wrong and the right ask');
  await context.close();
  return c;
}

/* ---------- X3: every screen at every width ---------- */
async function walkLesson(env, c, page, label) {
  const at = name => env.inspect(c, page, `${label}/${name}`);
  await env.openLesson(page, 'l1'); await at('the why');
  await env.goOn(page); await at('a teaching screen');
  await env.goOn(page); await at('a worked example, before the working');
  await page.locator('[data-commit]').first().click(); await page.locator('#workedMore').click(); await at('a worked example, one step');
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  await at('a worked example, finished');
  await env.goOn(page);
  await at('a question with help'); await env.answerQuestion(page, false); await at('a missed question with feedback');
  await page.locator('#qNext').click();
  await env.runQueue(page); await at('the break between groups');
  await env.goOn(page);
  await env.runQueue(page, { miss: ['c-5'] }); await env.goOn(page);
  await at('the check\'s first screen');
  await env.goOn(page);
  await at('a question in the check'); await env.answerQuestion(page, false);
  await page.locator('#qNext').click();
  await env.runQueue(page, { miss: ['k-2'] });
  await at('the check\'s result and every answer');
}
export async function X3(env) {
  const c = env.checker('X3');
  for (const width of [360, 390, 768, 1200, 1600]) {
    const { context, page } = await env.freshPage(c, width);
    for (const v of ['library', 'review', 'progress']) { await env.clickVisible(page, `[data-v="${v}"]`); await env.inspect(c, page, `${width}px ${v}`); }
    await env.toLibrary(page);
    await env.clickVisible(page, '[data-v="search"]');
    await page.fill('#q', 'the');
    await env.inspect(c, page, `${width}px search`);
    const subjects = await page.evaluate(() => SUBJECTS.map(s => s.id));
    for (const id of subjects) { await env.openSubject(page, id); await env.inspect(c, page, `${width}px ${id}`); }
    if (width <= 390 || width === 1200) {
      await walkLesson(env, c, page, `${width}px lesson`);
      await env.openSubject(page, 'fixture'); await env.inspect(c, page, `${width}px the test subject after a lesson`);
      await env.clickVisible(page, '#screen [data-v="results"]'); await env.inspect(c, page, `${width}px results`);
      await env.openSubject(page, 'fixture');
      await env.clickVisible(page, '#screen [data-again]'); await env.inspect(c, page, `${width}px practice again`);
    }
    await context.close();
  }
  return c;
}

/* ---------- X5: the stored keys are those of 26.3 ---------- */
const KEY = /^(pl:(app|log|recent)|pl:[a-z]+:(items|seen|notes))$/;
export async function X5(env) {
  const c = env.checker('X5'), { context, page } = await env.freshPage(c);
  await env.setDay(page, MONDAY);
  await env.playLesson(page, 'l1');
  await env.setDay(page, WEDNESDAY);
  await env.clickVisible(page, '[data-v="review"]');
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  await env.runQueue(page);
  const stored = await env.storage(page);
  const keys = Object.keys(stored).filter(k => k.startsWith('pl:'));
  c.check(keys.length >= 4, `only ${keys.length} keys were stored`);
  keys.forEach(k => c.check(KEY.test(k), `the key "${k}" is not one of the stored keys of 26.3`));
  Object.keys(stored).filter(k => !k.startsWith('pl:')).forEach(k => c.check(false, `the key "${k}" is not a pl: key`));
  const seen = JSON.parse(stored['pl:fixture:seen'] || '{}');
  c.check(Object.values(seen).length > 0 && Object.values(seen).every(e => JSON.stringify(Object.keys(e).sort()) === '["at","rev"]'), 'a place holds more than the revision and the step');
  const items = JSON.parse(stored['pl:fixture:items'] || '{}');
  c.check(Object.values(items).every(e => Object.keys(e).join() === 'tries' && Object.values(e.tries.reduce((n, t) => ({ ...n, [t.context]: (n[t.context] || 0) + 1 }), {})).every(n => n <= 12)), 'the practice record is not { tries } with at most twelve of each context per item');
  await context.close();
  return c;
}

/* ---------- X21: the record, and nothing leaves the app ---------- */
const TRY_FIELDS = ['a', 'context', 'd', 'engine', 'lesson', 'ok', 'r', 'rev', 'run', 'sup'];
const OPTIONAL = ['seed', 'ms'];
export async function X21(env) {
  const c = env.checker('X21'), { context, page, outside } = await env.freshPage(c);
  await env.setDay(page, MONDAY);
  await env.playLesson(page, 'l1');                       // practice and a check
  await env.setDay(page, WEDNESDAY);
  await env.clickVisible(page, '[data-v="review"]');      // a review
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  await env.runQueue(page);
  await env.setDay(page, NEXT_MONDAY);                    // the retest comes due
  await env.clickVisible(page, '[data-v="review"]');
  await page.locator('[data-review-start]').first().click();
  while (await page.locator('#beginBlock').count()) {
    await page.locator('#beginBlock').click();
    if (await page.locator('#qNext').count()) await env.runQueue(page);
    else break;
  }
  await env.openSubject(page, 'fixture');
  await env.clickVisible(page, '#screen [data-again]');   // practice again
  await env.runQueue(page);
  const items = JSON.parse((await env.storage(page))['pl:fixture:items'] || '{}');
  const tries = Object.values(items).flatMap(e => e.tries);
  const contexts = new Set(tries.map(t => t.context));
  ['practice', 'check', 'review', 'retest', 'again'].forEach(x => c.check(contexts.has(x), `no try was stored in the context "${x}"`));
  tries.forEach(t => {
    const keys = Object.keys(t);
    const bad = TRY_FIELDS.filter(f => !keys.includes(f)).concat(keys.filter(f => !TRY_FIELDS.includes(f) && !OPTIONAL.includes(f)));
    c.check(bad.length === 0, `a try has the wrong fields (${bad.join(', ')})`);
    c.check(/^\d{4}-\d\d-\d\d$/.test(t.d) && typeof t.run === 'string' && typeof t.lesson === 'string' && Number.isInteger(t.rev) && t.engine >= 6, 'a try has a malformed day, run, lesson, revision or engine');
    c.check(['practice', 'check', 'review', 'retest', 'again', 'baseline'].includes(t.context) && typeof t.sup === 'boolean' && typeof t.ok === 'boolean', 'a try has a malformed context, help flag or mark');
    c.check(t.a && typeof t.a === 'object' && t.r && typeof t.r === 'object' && Object.keys(t.a).length === Object.keys(t.r).length, 'a try\'s answers and results do not match');
    c.check(Object.values(t.r).every(v => ['ok', 'no', 'timeout', 'claimed', 'promise', 'flip'].includes(v)), 'a try holds a result that is not ok, no, a slip, timeout or claimed');
  });
  c.check(outside.length === 0, `a request left the app: ${outside.join(', ')}`);
  await context.close();
  return c;
}

/* ---------- X22: the review ---------- */
export async function X22(env) {
  const c = env.checker('X22'), { context, page } = await env.freshPage(c);
  await env.setDay(page, MONDAY);
  await env.playLesson(page, 'l1');
  await env.playLesson(page, 'l2');
  const stored = JSON.parse((await env.storage(page))['pl:fixture:items']);
  const usedSeeds = new Set(stored['g-chance'].tries.map(t => t.seed));
  // the day the topics come due
  await env.setDay(page, WEDNESDAY);
  await env.clickVisible(page, '[data-v="review"]');
  const tile = await env.screenText(page);
  c.check(/Two questions are due/.test(tile), `the review does not count its two questions (${tile.slice(0, 120)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const asked = [];
  for (let i = 0; await page.locator('#qNext').count() && i < 10; i++) {
    const info = await page.evaluate(() => ({ key: Q.list[Q.at].key, seed: Q.list[Q.at].seed, redo: !!Q.list[Q.at].redo }));
    asked.push(info);
    await env.answerQuestion(page, !(i === 0));   // the first is missed
    await page.locator('#qNext').click();
  }
  const first = asked.filter(a => !a.redo);
  const timing = first.find(a => a.key !== 'g-chance'), chance = first.find(a => a.key === 'g-chance');
  c.check(first.length === 2 && timing && chance, `the review did not ask one question of each topic (${JSON.stringify(first)})`);
  if (chance) c.check(!usedSeeds.has(chance.seed), 'the made question was asked with numbers already used');
  const flowIds = await page.evaluate(() => [...usedIds(FC.get('fixture'))]);
  if (timing) c.check(['b-1', 'b-2', 'b-3', 'b-4'].includes(timing.key) && !flowIds.includes(timing.key), `a question seen in a lesson was asked while unseen ones were held back (${timing.key})`);
  const redo = asked.find(a => a.redo);
  c.check(!!redo && asked.indexOf(redo) > 0, 'the missed question did not come back before the end of the review');
  // a miss comes back at least three questions later: in a group of six, the first missed question
  await env.openLesson(page, 'l1');
  await env.goOn(page); await env.goOn(page); await env.workedExample(page);
  await env.runQueue(page); await env.goOn(page);
  const order = [];
  for (let i = 0; await page.locator('#qNext').count() && i < 20; i++) {
    order.push(await page.evaluate(() => ({ key: Q.list[Q.at].key, redo: !!Q.list[Q.at].redo })));
    await env.answerQuestion(page, order.length !== 1);
    await page.locator('#qNext').click();
  }
  const back = order.findIndex((o, i) => i > 0 && o.redo);
  c.check(back >= 4, `a missed question came back after ${back - 1} others, not three or more (${order.map(o => o.key + (o.redo ? '*' : '')).join(' ')})`);
  // the retest comes after its days
  await env.setDay(page, SUNDAY);
  await env.toLibrary(page);
  const sundayTile = await page.locator('[data-review-tile]').textContent();
  await env.setDay(page, NEXT_MONDAY);
  await env.toLibrary(page);
  const mondayTile = await page.locator('[data-review-tile]').textContent();
  const dueAt = text => Number((text.match(/(\d+) due/) || [])[1] || 0);
  c.check(dueAt(mondayTile) > dueAt(sundayTile), `the retest did not appear after its days (due on the Sunday before: ${dueAt(sundayTile)}, on the Monday: ${dueAt(mondayTile)})`);
  await page.locator('[data-review-start]').first().click();
  const blocks = await page.evaluate(() => REVIEW.parts.flatMap(p => p.blocks.map(b => b.kind)));
  c.check(blocks.includes('retest'), 'the review does not hold the retest');
  await context.close();
  return c;
}

/* ---------- X23: checks ---------- */
export async function X23(env) {
  const c = env.checker('X23'), { context, page } = await env.freshPage(c);
  await env.openLesson(page, 'l1');
  await env.throughTeaching(page, 'l1');
  await env.runQueue(page); await env.goOn(page);
  await env.runQueue(page); await env.goOn(page);
  await env.goOn(page);   // start the check
  const rules = await page.evaluate(() => FC.get('fixture').lessons.l1.check.pass.length);
  for (let i = 0; await page.locator('#qNext').count() && i < 10; i++) {
    await env.answerQuestion(page, i !== 1);
    c.check(await page.locator('[data-feedback]').count() === 0, `question ${i + 1}: feedback is on the page between questions`);
    c.check(await page.locator('.mark, .opt.right, .opt.wrong').count() === 0, `question ${i + 1}: a mark is on the page between questions`);
    c.check(await page.locator('#qNext').isEnabled(), `question ${i + 1}: Next is not open after the answer`);
    await page.locator('#qNext').click();
  }
  const text = await env.screenText(page);
  c.check(/\d of 5: (passed|not yet)/.test(text), `the result does not say how many were right (${text.slice(0, 80)})`);
  const rows = await page.locator('table.results tr').count();
  c.check(rows === rules, `the result lists ${rows} rules, the check has ${rules}`);
  const verdicts = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(verdicts.every(v => v === 'met' || v === 'not met'), `a rule is not shown as met or not met (${verdicts.join(', ')})`);
  c.check(await page.locator('[data-feedback]').count() === 5, 'every answer is not shown with its feedback after the result');
  const firstFeedback = await page.locator('.resitem').first().locator('.mark.no').count();
  c.check(firstFeedback >= 1, 'the missed answers do not come first');
  // a check that gives feedback after each question shows it
  await env.openLesson(page, 'l2');
  await env.goOn(page); await env.goOn(page); await env.workedExample(page);
  for (let i = 0; i < 3; i++) { await env.runQueue(page); await env.goOn(page); }
  await env.goOn(page);
  await env.answerQuestion(page);
  c.check(await page.locator('[data-feedback]').count() === 1, 'a check that shows feedback after each question does not');
  await context.close();
  return c;
}

export const CHECKS = { X1, X2, X3, X5, X13: NUMBER_CHECKS.X13, X20: NUMBER_CHECKS.X20, X21, X22, X23, X25, ...SOUND_CHECKS };
