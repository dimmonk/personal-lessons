// X30: Stats' pilot lesson, "Find the claim and its number", end to end on a phone (375 px). Not one of the checks the standard lists in 26.7: it
// was added with step 5 (26.10), the way step 4 ran Wealth's pilot (X26). The test plays a learner who taps every answer: what to find and the
// worked story (a headline that says more than its story); a first group of three with the deciding words marked (one claim taken for the wrong
// kind, one "cannot tell" believed, both coming back); a second group of five (one sound claim turned down); the check, passed 4 of 5 with its
// rules; the subject screen; the record; and the review two days later, which asks a question held in reserve.
// It asserts what this walk shows, and leaves to X15 (the tap), X20 (the drawn chart and people), X31 (the articles), X3 (layout of screens with
// answer buttons), X1, X2, X5, X21, X22 and X23 what those own, so that a fault in one of those turns that check red and no other.
import { britishIn } from './american.mjs';
import { look, answerAll } from './e2e-feed.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
const next = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const KEYS = ['kind', 'line', 'verdict'];

async function whatToFind(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 6'), 'the lesson is not six steps long (the why, four steps and the check)');
  await env.goOn(page);
  const text = await env.screenText(page);
  c.check(/five/.test(text) && /A wrong idea/.test(text) && /Cannot tell|cannot tell/.test(text) && /cause/.test(text), 'the first screen does not give the kinds of claim, the three answers and the wrong idea');
  await env.inspect(c, page, 'what to find');
  await env.goOn(page);
}
async function theWorkedStory(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 5, 'the worked story does not ask the learner to commit to a kind of claim first');
  await page.locator('[data-commit="size"]').click();   // not scored, not stored
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  c.check(/The answer.*One thing makes another happen/.test(text) && /Does not show it/.test(text), 'the worked story does not end on its answers');
  c.check(/“cuts”/.test(text) && /link, not proof/.test(text) && /The headline says more than the text/.test(text), 'the working is not shown step by step in the story\'s own words');
  c.check(await page.locator('.block-article[data-article="news"]').count() === 1 && await page.locator('mark.cue').count() >= 3, 'the story is not drawn with its deciding lines marked');
  c.check(await page.locator('.block-fig[data-figure="people"]').count() === 1 && /3 fewer in 1,000/.test(text), 'the worked story does not show the plain size in 1,000 people');
  await env.inspect(c, page, 'the worked story, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 3'), 'the first group is not three questions');
  const first = await look(page);
  c.check(first.key === 'p-tires' && first.open.length === 1 && first.open[0].id === 'kind', 'the first question does not open with what is claimed');
  c.check(/The words that decide it are marked\./.test(await env.screenText(page)) && await page.locator('mark.cue').count() >= 2, 'the first group does not mark the deciding words');
  await plainWords(c, page, env, 'an ad with the deciding words marked');
  // the order of the asks: what it claims, the line with the number, whether the text shows it; each opens when the one before is answered
  const order = [];
  await answerAll(page, { miss: { kind: ['cause'] } });
  order.push(...(await page.evaluate(() => Object.keys(Q.cur.a))));
  c.check(order.join() === KEYS.join(), `the asks were answered in the order ${order} (${KEYS})`);
  let text = await env.screenText(page);
  c.check(await page.locator('.mark').count() === 3 && await page.locator('.mark.no').count() === 1, 'a wrong kind and two right answers are not marked as such');
  c.check(/common slip: took it for a claim that one thing makes another happen/.test(text), 'the wrong kind is not named as a slip');
  c.check(/SolidGrip’s own previous model/.test(text) && /You would need a test that put SolidGrip/.test(text), 'the feedback does not give the reason and what you would need to see');
  c.check(await page.locator('.block-article[data-article="ad"] .art-fine').count() === 1, 'the ad does not carry its small print');
  await plainWords(c, page, env, 'a missed question with its feedback');
  await next(page);
  const second = await look(page);
  c.check(second.key === 'p-crosswalk', `the second question is ${second.key}`);
  await answerAll(page);
  c.check(await page.locator('.mark.no').count() === 0 && await page.locator('.mark').count() === 3, 'a sound claim answered right is not marked right three times');
  await next(page);
  const third = await look(page);
  c.check(third.key === 'p-savings' && third.open[0].id === 'kind', `the third question is ${third.key}`);
  await answerAll(page, { miss: { verdict: ['holds'] } });
  text = await env.screenText(page);
  c.check(/common slip: believed a claim the text does not show/.test(text) && await page.locator('.mark.no').count() === 1, 'a claim that cannot be told, believed, is not named as a slip');
  c.check(await page.locator('.tapseg, [data-tap]').count() === 0, 'the lines can still be tapped after the answer');
  await next(page);
  const back = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    back.push(now);
    await answerAll(page);
    await next(page);
  }
  c.check(back.length === 2 && back.every(b => b.redo) && back.map(b => b.key).sort().join() === 'p-savings,p-tires', `the two misses did not both come back (${back.map(b => b.key)})`);
  text = await env.screenText(page);
  c.check(/You can stop here/.test(text) && /1 of 3 right the first time/.test(text), `the first group does not end on "1 of 3 right the first time" (${text.slice(0, 100)})`);
  await env.goOn(page);
}
async function theSecondGroup(env, c, page) {
  let doubted = false, charts = 0, asked = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(now);
    c.check(now.open.length === 1 && now.open[0].id === 'kind', 'a question does not open with what is claimed');
    c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
    charts += await page.locator('.block-chart').count();
    await plainWords(c, page, env, 'a question to judge');
    if (now.key === 'q-commute' && !now.redo) {
      doubted = true;
      await answerAll(page, { miss: { verdict: ['not-shown'] } });
      c.check(/common slip: turned down a claim that holds up/.test(await env.screenText(page)), 'a sound claim turned down is not named as a slip');
    } else await answerAll(page);
    await next(page);
  }
  const firsts = asked.filter(a => !a.redo);
  c.check(firsts.length === 5 && new Set(firsts.map(a => a.key)).size === 5 && doubted, `the second group is not five different questions (${firsts.map(a => a.key)})`);
  c.check(asked.filter(a => a.redo).map(a => a.key).join() === 'q-commute', 'the sound claim that was turned down does not come back');
  c.check(charts >= 1, 'the report with a chart does not draw it');
  c.check(/4 of 5 right the first time/.test(await env.screenText(page)), 'the second group does not end on "4 of 5 right the first time"');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Five new questions/.test(text) && /At least 4 right \(whether the text shows it\)/.test(text) && /At least 4 right \(what it claims\)/.test(text) && /At most 1 turned down a claim that holds up/.test(text), `the check does not name itself and its rules (${text.slice(0, 260)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 5; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'kind', 'a question of the check is not asked once, from the start');
    await answerAll(page, now.key === 'k-5k' ? { miss: { kind: ['compare'] } } : {});
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-5k,k-boarding,k-diner,k-reading,k-shelter', `the check is not the five questions of part A (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(/4 of 5: passed/.test(text) && rules.length === 4 && rules.every(v => v === 'met'), `the check was not passed with every rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 5 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  c.check(/common slip: took it for a claim that one thing is more or less than another/.test(text), 'the wrong kind in the check is not named in its answers');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 4 of 5/.test(text) && /1 of 7 parts/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Stats subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:stats:items'] || '{}'), seen = JSON.parse(stored['pl:stats:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 5 && inCheck.every(t => t.lesson === 'l1' && t.rev === 2 && t.sup === false), 'the check was not stored as five tries of lesson 1 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => KEYS.includes(k)) && Array.isArray(t.a.line) && t.a.line.every(id => typeof id === 'string') && typeof t.a.kind === 'string' && typeof t.a.verdict === 'string'),
    'an answer is not stored as the kind chosen, the ids of the lines tapped and the verdict chosen');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['took-cause', 'believed', 'doubted', 'took-compare'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  c.check(tries.filter(t => t.key === 'p-savings').some(t => JSON.stringify(t.a.line) === '["none"]'), '"Not given" is not stored as the answer "none"');
  c.check(!tries.some(t => t.key === 'w-coffee'), 'the worked story was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 2, at: 5 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('stats'); return lessonDone(d, 'stats', d.lessons.l1) && lastCheck(d, 'stats', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
}
async function theReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Statistical Claims/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const now = await look(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'claim-number', `the review asked ${now.key}, which is not a question of the topic that came due`);
  await plainWords(c, page, env, 'a question of the review');
  await answerAll(page);
  await next(page);
}

export async function X30(env) {
  const c = env.checker('X30'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'stats');
  const subject = await env.screenText(page);
  c.check(/Find the claim and its number/.test(subject) && (subject.match(/Not built yet/g) || []).length === 6, 'the subject screen does not list the pilot and the six parts not built yet');
  c.check(subject.includes('Draft: not tried yet'), 'the pilot does not carry the draft line');
  await env.inspect(c, page, 'the Stats subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await whatToFind(env, c, page);
  await theWorkedStory(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await theReview(env, c, page);
  await context.close();
  return c;
}
export const STATS_CHECKS = { X30 };
