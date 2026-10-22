// X30: Stats' lesson 1, "What it claims, and the number it rests on", end to end on a phone (375 px). Not one of the checks the standard lists in 9: it
// was added with step 5 (3 to 9), the way step 4 ran Wealth's pilot (X26). The test plays a learner who taps every answer: what to find and the
// worked story (a headline that says more than its story); a first group of three with the deciding words marked (one claim worded wrong,
// one "cannot tell" trusted, both coming back); a second group of six (one sound claim turned down); the check, passed 4 of 5 with its
// rules; the subject screen; the record; the review two days later, which asks a question held in reserve; then lessons 2 to 9 walked whole, and lesson 9's second check four weeks on.
// It asserts what this walk shows, and leaves to X15 (the tap), X20 (the drawn chart and people), X31 (the articles), X3 (layout of screens with
// answer buttons), X1, X2, X5, X21, X22 and X23 what those own, so that a fault in one of those turns that check red and no other.
import { britishIn } from './american.mjs';
import { look, answerAll } from './e2e-feed.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04', FOUR_WEEKS_ON = '2026-12-03';
const next = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const KEYS = ['claim', 'line', 'verdict'];

async function whatToFind(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 6'), 'the lesson is not six steps long (the why, four steps and the check)');
  await env.goOn(page);
  const text = await env.screenText(page);
  c.check(/makes another happen/.test(text) && /went together/.test(text) && /A wrong idea/.test(text) && /cannot tell/i.test(text), 'the first screen does not give what a claim is (makes it happen, or went together), the three answers and the wrong idea');
  await env.inspect(c, page, 'what to find');
  await env.goOn(page);
}
async function theWorkedStory(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 3, 'the worked story does not ask the learner to commit to a wording of the claim first (three wordings)');
  await page.locator('[data-commit="b"]').click();   // not scored, not stored
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  c.check(/The answer.*Coffee makes heart attacks less likely/.test(text) && /Does not show it/.test(text), 'the worked story does not end on its answers');
  c.check(/“cuts”/.test(text) && /link, not proof/.test(text) && /The headline says more than the text/.test(text), 'the working is not shown step by step in the story\'s own words');
  c.check(await page.locator('.block-article[data-article="news"]').count() === 1 && await page.locator('mark.cue').count() >= 3, 'the story is not drawn with its deciding lines marked');
  c.check(await page.locator('.block-fig[data-figure="people"]').count() === 1 && /3 fewer in 1,000/.test(text), 'the worked story does not show the plain size in 1,000 people');
  await env.inspect(c, page, 'the worked story, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 3'), 'the first group is not three questions');
  const first = await look(page);
  c.check(first.key === 'p-tires' && first.open.length === 1 && first.open[0].id === 'claim', 'the first question does not open with what is claimed');
  c.check(/The words that decide it are marked\./.test(await env.screenText(page)) && await page.locator('mark.cue').count() >= 2, 'the first group does not mark the deciding words');
  await plainWords(c, page, env, 'an ad with the deciding words marked');
  // the order of the asks: what it claims, the line with the number, whether the text shows it; each opens when the one before is answered
  const order = [];
  await answerAll(page, { miss: { claim: ['b'] } });
  order.push(...(await page.evaluate(() => Object.keys(Q.cur.a))));
  c.check(order.join() === KEYS.join(), `the asks were answered in the order ${order} (${KEYS})`);
  let text = await env.screenText(page);
  c.check(await page.locator('.mark').count() === 3 && await page.locator('.mark.no').count() === 1, 'a wrong wording and two right answers are not marked as such');
  c.check(/common slip: took the claim to be something other than what it says/.test(text), 'the wrong wording of the claim is not named as a slip');
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
  c.check(third.key === 'p-savings' && third.open[0].id === 'claim', `the third question is ${third.key}`);
  await answerAll(page, { miss: { verdict: ['holds'] } });
  text = await env.screenText(page);
  c.check(/common slip: said a claim holds up when the text leaves out what you would need/.test(text) && await page.locator('.mark.no').count() === 1, 'a claim that cannot be told, trusted, is not named as a slip');
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
    c.check(now.open.length === 1 && now.open[0].id === 'claim', 'a question does not open with what is claimed');
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
  c.check(firsts.length === 6 && new Set(firsts.map(a => a.key)).size === 6 && doubted, `the second group is not six different questions (${firsts.map(a => a.key)})`);
  c.check(asked.filter(a => a.redo).map(a => a.key).join() === 'q-commute', 'the sound claim that was turned down does not come back');
  c.check(charts >= 2, 'the two posts and reports with a chart do not draw it');
  c.check(/5 of 6 right the first time/.test(await env.screenText(page)), 'the second group does not end on "5 of 6 right the first time"');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Five new questions/.test(text) && /At least 4 right/.test(text) && /At most 1 turned down a claim that holds up/.test(text), `the check does not name itself and its rules (${text.slice(0, 260)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 5; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'claim', 'a question of the check is not asked once, from the start');
    await answerAll(page, now.key === 'k-5k' ? { miss: { claim: ['b'] } } : {});
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-5k,k-boarding,k-diner,k-reading,k-shelter', `the check is not the five questions of part A (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(/4 of 5: passed/.test(text) && rules.length === 2 && rules.every(v => v === 'met'), `the check was not passed with both rules met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 5 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  c.check(/common slip: heard a claim that one thing makes another happen as only going together/.test(text), 'the wrong wording in the check is not named in its answers');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 4 of 5/.test(text) && /1 of 9 lessons/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Stats subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:stats:items'] || '{}'), seen = JSON.parse(stored['pl:stats:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 5 && inCheck.every(t => t.lesson === 'l1' && t.rev === 2 && t.sup === false), 'the check was not stored as five tries of lesson 1 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => KEYS.includes(k)) && Array.isArray(t.a.line) && t.a.line.every(id => typeof id === 'string') && typeof t.a.claim === 'string' && typeof t.a.verdict === 'string'),
    'an answer is not stored as the wording chosen, the ids of the lines tapped and the verdict chosen');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['mixed-claim', 'trusted-gap', 'doubted', 'heard-link'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
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

// Lessons 2 to 5, each walked whole on the phone and answered right: every screen, every group, the typed sizes, the check passed. It asserts
// that each lesson can be finished and that what it asks matches its data (a size opens only after a sentence is tapped; "Not given" leads straight
// to the verdict); X30's walk of lesson 1 owns the detail.
const typeSize = async page => {
  const values = await page.evaluate(() => {
    const item = Q.list[Q.at].item, ask = item.asks.find(a => a.id === 'size');
    return [].concat(ask.answer).map(v => typeof v === 'number' ? v : item.values[v]);
  });
  const boxes = page.locator('[data-ask="size"] .numbox');
  for (let i = 0; i < values.length; i++) await boxes.nth(i).fill(String(values[i]));
  await page.locator('[data-num-answer="size"]').click();
};
// the first ask still open and its right answer (a number ask has no options, so look() of e2e-feed.mjs is not used here)
const openNow = page => page.evaluate(() => {
  const inst = Q.list[Q.at], ask = openAsks(inst.item, Q.support, Q.cur.a).find(a => !(a.id in Q.cur.a));
  if (!ask) return null;
  if (ask.kind === 'number') return { id: ask.id, kind: ask.kind };
  if (ask.kind === 'tap') return { id: ask.id, kind: ask.kind, right: tapRightIds(ask) };
  if (ask.kind === 'text') return { id: ask.id, kind: ask.kind };
  return { id: ask.id, kind: ask.kind, right: chooseOptions(FC.get(Q.subj.id), ask).filter(o => o.ok).map(o => o.id) };
});
async function answerRight(page) {
  for (let ask = await openNow(page); ask; ask = await openNow(page)) {
    if (ask.kind === 'number') await typeSize(page);
    else if (ask.kind === 'text') {   // lesson 9's six questions, said plainly
      await page.locator(`[data-recall="${ask.id}"]`).fill('what it claims, how big is it, compared with what, who was counted, could anything else explain it, the verdict');
      await page.locator(`[data-recall-answer="${ask.id}"]`).click();
    }
    else if (ask.kind === 'tap') {
      if (ask.right[0] === 'none') await page.locator('[data-tap-none]').click();
      else await page.locator(`[data-tap="${ask.right[0]}"]`).click();
    } else await page.locator(`[data-ask="${ask.id}"] [data-opt="${ask.right[0]}"]`).click();
  }
}
async function runGroup(page) {
  const asked = [];
  while (await page.locator('#qNext').count()) {
    // a size that waits for a sentence tapped, on a question with nothing to tap, could never open
    const now = await page.evaluate(() => { const i = Q.list[Q.at].item, l = i.asks.find(a => a.id === 'line'); return { key: Q.list[Q.at].key, stuck: !!l && l.right === 'none' && i.asks.some(a => a.when && a.when.ask === 'line') }; });
    asked.push(now);
    await answerRight(page);
    await next(page);
  }
  return asked;
}
async function walkLesson(env, c, page, id) {
  await env.openSubject(page, 'stats');
  await env.clickVisible(page, `#screen [data-l="${id}"]`);
  const flow = await page.evaluate(l => FC.get('stats').lessons[l].flow.map(s => s.show ? 'show' : s.worked ? 'worked' : s.own ? 'own' : 'set'), id);
  await env.goOn(page);   // the why
  let asked = 0;
  for (const kind of flow) {
    if (kind === 'show') await env.goOn(page);
    else if (kind === 'worked') await env.workedExample(page);
    else if (kind === 'own') {   // the optional plan: in the subject's own words, then skipped
      c.check(/a number is about to move you/.test(await env.screenText(page)), `${id}: the plan step is not in the subject's own words`);
      await page.locator('#planSkip').click();
    }
    else {
      const group = await runGroup(page);
      asked += group.length;
      c.check(!group.some(g => g.stuck), `${id}: a question with nothing to tap waits for a sentence before its size`);
      await env.goOn(page);
    }
  }
  const sets = await page.evaluate(l => FC.get('stats').lessons[l].flow.filter(s => s.set).length, id);
  c.check(asked >= sets * 3, `${id}: the groups asked only ${asked} questions`);
  await env.goOn(page);   // the check's first screen
  const inCheck = await runGroup(page), want = await page.evaluate(l => FC.get('stats').lessons[l].check.items.length, id);
  const text = await env.screenText(page);
  c.check(inCheck.length === want && new RegExp(`${want} of ${want}: passed`).test(text), `${id}: the check, answered right, was not passed whole (${inCheck.length} asked; ${text.slice(0, 120)})`);
  await plainWords(c, page, env, `the result of ${id}'s check`);
}
const OTHER_LESSONS = ['l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'];
async function theOtherLessons(env, c, page) {
  for (const id of OTHER_LESSONS) await walkLesson(env, c, page, id);
  const done = await page.evaluate(ids => { const d = FC.get('stats'); return ids.map(id => lessonDone(d, 'stats', d.lessons[id]) && lastCheck(d, 'stats', d.lessons[id]).passed); }, OTHER_LESSONS);
  c.check(done.every(Boolean), `lessons 2 to 9 are not all done with their checks passed (${done})`);
}
// Lesson 9's check comes back whole four weeks on, on questions held in reserve, each of the kind it replaces
async function theSecondCheck(env, c, page) {
  await env.setDay(page, FOUR_WEEKS_ON);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/Statistical Claims/.test(tile), `the review does not hold Statistical Claims four weeks on (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  const second = await page.evaluate(() => {
    const d = FC.get('stats'), l = d.lessons.l9, due = retestsDue(d, 'stats', today()).map(r => r.lesson.id), list = retestInstances(d, 'stats', l, 'x30');
    const first = flatRefs(l.check.items).map(refId);
    return { due, keys: list.map(i => i.key), fits: list.map(i => i.item.facets.fit).sort(), want: first.map(k => d.items[k].facets.fit).sort(), first };
  });
  c.check(second.due.includes('l9'), `the second check of lesson 9 is not due four weeks on (${second.due})`);
  c.check(second.keys.length === 8 && second.keys.every(k => /^r-/.test(k) && !second.first.includes(k)) && JSON.stringify(second.fits) === JSON.stringify(second.want),
    `the second check is not eight new questions of the same kinds (${second.keys}; ${second.fits} for ${second.want})`);
}

export async function X30(env) {
  const c = env.checker('X30'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'stats');
  const subject = await env.screenText(page);
  c.check(/What it claims, and the number it rests on/.test(subject) && /Before you start/.test(subject) && /The whole claim, unprompted/.test(subject) && !/Not built yet/.test(subject), 'the subject screen does not list lessons 0 to 9, every part built');
  c.check(!subject.includes('Draft: not tried yet'), 'the lessons, live after their reviews, still carry the draft line');
  await env.inspect(c, page, 'the Stats subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await whatToFind(env, c, page);
  await theWorkedStory(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await theReview(env, c, page);
  await theOtherLessons(env, c, page);
  await theSecondCheck(env, c, page);
  await context.close();
  return c;
}
export const STATS_CHECKS = { X30 };
