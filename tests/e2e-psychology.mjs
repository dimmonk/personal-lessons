// X36: Psychology's lesson 1, "The five questions", end to end on a phone (375 px). Not one of the checks the standard lists in 9: it was added
// with step 7 (3 to 9), the way step 6 ran Ideology's lesson 1 (X33). The test plays a learner who taps every answer: the four teaching screens
// (the five questions in order, Question 1 with its pair, Question 2 with its two pairs, the one rule for giving a name with its pair), the worked story
// worked ask by ask (Question 1 alone, then Question 2), a first set that asks Question 1 alone (a move taken for a lasting way, named and asked again,
// the two pairs asked back to back), a second set that asks Question 2 alone (the course's two denials asked back to back, one taken for a pattern,
// named and asked again), a third set that asks both, the check of eight passed 7 of 8, the record of the tries, the subject screen, and the review
// two days later.
// It asserts what this walk shows, and leaves to X34 (the message block and the checklist's heading), X35 (the line to write), X15 (the tap), X3 (layout of
// screens with answer buttons), X1, X2, X5, X21, X22 and X23 what those own, so that a fault in one of those turns that check red and no other.
import { britishIn } from './american.mjs';
import { look, answerAll } from './e2e-account.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
const next = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};

const KIND_ASK = 'Question 1. What is going on here?', SPAN_ASK = 'Question 2. One moment, or a lasting pattern?';
const askedNow = page => page.locator('.asks .prompt .stem, .asks .stem').allTextContents().then(t => t.map(s => s.replace(/\s+/g, ' ').trim()));
// what the lesson's data says: the size of each set (a pair counts as two questions) and the ids of an item's asks
const setSizes = page => page.evaluate(() => { const d = FC.get('psychology'); return flowSets(d.lessons.l1).map(s => flatRefs(s.items).length); });
const asksOf = (page, key) => page.evaluate(k => FC.get('psychology').items[k].asks.map(a => a.id), key);
// every pair of the lesson's step `at` (its teaching screens count from 1, after the why): both passages and what they compare are on the screen
const pairsShown = (page, text, at, count) => page.evaluate(([n, shown, want]) => {
  const pairs = ((FC.get('psychology').lessons.l1.flow[n] || {}).show || []).filter(b => b.kind === 'pair'), clean = s => s.replace(/\s+/g, ' ').trim();
  return pairs.length === want && pairs.every(pair => [pair.a.text, pair.b.text, pair.compare].every(s => shown.includes(clean(s))));
}, [at, text, count]);
async function theTeaching(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 10'), 'the lesson is not ten steps long (the why, eight steps and the check)');
  await env.goOn(page);
  let text = await env.screenText(page);
  const five = ['1. What is going on', '2. One moment, or the same shape', '3. What does it do for them', '4. What is the nearest look-alike', '5. What would prove this read wrong'];
  c.check(/Put these to any story, in order\. The name comes last\./.test(text) && five.every(q => text.includes(q)) && five.every((q, i) => !i || text.indexOf(five[i - 1]) < text.indexOf(q)), 'the first screen does not give the five questions in order');
  c.check(/Today you practice 1 and 2/.test(text), 'the first screen does not say that today is for Questions 1 and 2');
  await env.inspect(c, page, 'the five questions');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/Question 1, what is going on/.test(text) && ['A mind talking itself into something', 'A move made on someone', 'A lasting way someone is', 'An ordinary reaction or slip'].every(k => text.includes(k)) && /Not everything needs a name/.test(text), 'the screen on Question 1 does not give its four answers');
  c.check(await pairsShown(page, text, 1, 1) && /One exchange is a move; years of the same thing with everyone is a lasting way/.test(text), 'the screen on Question 1 does not set the move and the lasting way side by side with what they compare');
  await env.inspect(c, page, 'Question 1 with its pair');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/Question 2, one moment or a pattern: the situation first/.test(text) && /Look at the situation before the character/.test(text) && /is a claim, not a record/.test(text), 'the screen on Question 2 does not put the situation before the character');
  c.check(await pairsShown(page, text, 2, 2), 'the two pairs of Question 2 are not set side by side with what they compare');
  await env.inspect(c, page, 'Question 2 with its two pairs');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/The one rule for giving a name/.test(text) && /Otherwise the answer is "too little to tell": a right answer, not a dodge/.test(text) && /How much you dislike someone never counts/.test(text) && /never a diagnosis of anyone/.test(text), 'the screen on the naming rule does not give the rule, "too little to tell" and the word that no one is diagnosed');
  c.check(await pairsShown(page, text, 3, 1), 'the naming rule is not shown with its pair and what it compares');
  await env.inspect(c, page, 'the one rule for giving a name');
  await env.goOn(page);
}
async function theWorkedItem(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 4, 'the worked story does not ask the learner to commit to one of the four answers to Question 1');
  await page.locator('[data-commit="pattern"]').click();   // not scored, not stored
  await page.locator('#workedMore').click();
  c.check(/Question 1\. Find what is going on/.test(await env.screenText(page)) && !/Question 2\. One moment, or the same shape over and over\?/.test(await env.screenText(page)), 'the working does not open on Question 1 alone');
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  const asks = await asksOf(page, 'w1-genius'), steps = await page.evaluate(() => FC.get('psychology').items['w1-genius'].steps.map(s => s.ask));
  c.check(asks.join() === 'kind,span' && steps.join() === asks.join(), `the steps of the worked story are not one for each of its asks, Question 1 then Question 2 (${asks} / ${steps})`);
  c.check(/The answer.*A lasting way someone is/.test(text) && /The answer.*Over and over, for months or years/.test(text), 'the worked story does not end on its two answers, a lasting way and over and over');
  c.check(await page.locator('.mark .ans').count() === asks.length, `the worked story does not show one answer for each of its ${asks.length} asks`);
  c.check(/Question 1\. Find what is going on/.test(text) && /Question 2\. One moment, or the same shape over and over\?/.test(text), 'the working does not go question by question');
  await env.inspect(c, page, 'the worked story, finished');
  await env.goOn(page);
}
// A set is walked to its end: each question once, and a miss comes back later in the same set, so a question is told apart by `redo`.
async function walkSet(env, c, page, { count, ask, prompt, label, miss, onMiss }) {
  const firsts = [], back = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    if (now.redo) { back.push(now.key); await answerAll(page); await next(page); continue; }
    firsts.push(now.key);
    const words = JSON.stringify(await askedNow(page));
    c.check(now.open.length === 1 && now.open[0].id === ask && words.includes(prompt), `${now.key}: the ${label} set asks Question ${ask === 'span' ? 2 : 1} alone (${now.open.map(a => a.id)})`);
    c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
    await plainWords(c, page, env, `a question of the ${label} set (${now.key})`);
    if (now.key === miss) { await answerAll(page, { miss: { [ask]: [onMiss.pick] } }); await onMiss.after(); }
    else await answerAll(page);
    await next(page);
  }
  c.check(firsts.length === count && new Set(firsts).size === count, `the ${label} set is not ${count} different questions (${firsts})`);
  c.check(back.join() === miss, `the miss on ${miss} did not come back once (${back})`);
  return { firsts, back };
}
async function theQuestionOneSet(env, c, page) {
  const n = (await setSizes(page))[0];
  c.check(n >= 6 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the first set does not open on "Question 1 of ${n}", the questions it holds`);
  const { firsts } = await walkSet(env, c, page, { count: n, ask: 'kind', prompt: KIND_ASK, label: 'first', miss: 'q1-dinner', onMiss: { pick: 'pattern', after: async () => {   // one dinner taken for a lasting way
    c.check(/common slip: took one moment for a lasting pattern/.test(await env.screenText(page)) && await page.locator('.mark.no').count() === 1, 'one dinner taken for a lasting way is not named as a moment taken for a pattern'); } } });
  c.check(Math.abs(firsts.indexOf('q1-dinner') - firsts.indexOf('q1-cousin')) === 1 && Math.abs(firsts.indexOf('q1-degree') - firsts.indexOf('q1-blame')) === 1, `the pairs of the first set are not asked back to back (${firsts})`);
  c.check(new RegExp(`${n - 1} of ${n} right the first time`).test(await env.screenText(page)), `the first set does not end on "${n - 1} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theQuestionTwoSet(env, c, page) {
  const n = (await setSizes(page))[1];
  c.check(n >= 5 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the second set does not open on "Question 1 of ${n}", the questions it holds`);
  const { firsts } = await walkSet(env, c, page, { count: n, ask: 'span', prompt: SPAN_ASK, label: 'second', miss: 'q2-deny-stress', onMiss: { pick: 'years', after: async () => {   // a hard week taken for a pattern
    c.check(/common slip: blamed the person when the story shows something hard going on/.test(await env.screenText(page)) && await page.locator('.mark.no').count() === 1, 'a hard week taken for a pattern is not named as skipping the situation'); } } });
  c.check(Math.abs(firsts.indexOf('q2-deny-stress') - firsts.indexOf('q2-deny-decade')) === 1 && Math.abs(firsts.indexOf('q2-late') - firsts.indexOf('q2-unsaid')) === 1, `the pairs of the second set are not asked back to back (${firsts})`);
  c.check(new RegExp(`${n - 1} of ${n} right the first time`).test(await env.screenText(page)), `the second set does not end on "${n - 1} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theBothQuestionsSet(env, c, page) {
  const n = (await setSizes(page))[2];
  c.check(n >= 4 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the third set does not open on "Question 1 of ${n}", the questions it holds`);
  for (let i = 0; i < n; i++) {
    const now = await look(page), asks = await asksOf(page, now.key);
    c.check(now.open[0].id === 'kind' && asks.join() === 'kind,span', `${now.key}: Question 1 does not come first, then Question 2 (${asks})`);
    await answerAll(page);
    c.check(await page.locator('.mark').count() === asks.length && await page.locator('.mark.no').count() === 0, `${now.key}: every answer is not marked right (${asks})`);
    await next(page);
  }
  c.check(!await page.locator('#qNext').count() && new RegExp(`${n} of ${n} right the first time`).test(await env.screenText(page)), `the third set does not end on "${n} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theCheckOfEight(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Eight new/i.test(text) && /At least 7 right/.test(text), `the check does not name itself and its rule (${text.slice(0, 300)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 8; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'kind' && (await asksOf(page, now.key))[0] === 'kind', `${now.key}: a question of the check is not asked once, from Question 1`);
    await answerAll(page, now.key === 'k-move' ? { miss: { span: ['years'] } } : {});
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-bills,k-boss,k-chef,k-friend,k-move,k-newjob,k-phone,k-text', `the check is not the eight new stories (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/7 of 8: passed/.test(text) && rules.length === 1 && rules.every(v => v === 'met'), `the check was not passed 7 of 8 with its rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 8 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 7 of 8/.test(text) && /1 of \d+ parts/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Psychology subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:psychology:items'] || '{}'), seen = JSON.parse(stored['pl:psychology:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 8 && inCheck.every(t => t.lesson === 'l1' && t.rev === 2 && t.sup === false), 'the check was not stored as eight tries of lesson 1 without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => ['kind', 'span'].includes(k)) && Object.values(t.a).every(v => typeof v === 'string')), 'an answer is not stored as the option chosen for each question asked');
  const heldAsks = await Promise.all(inCheck.map(async t => [t.key, Object.keys(t.a).sort().join(), (await asksOf(page, t.key)).sort().join()]));
  c.check(heldAsks.every(([, held, asked]) => held === asked && held.includes('kind')), `a try of the check does not hold an answer to each ask of its story (${JSON.stringify(heldAsks.filter(([, h, a]) => h !== a))})`);
  c.check(practice.filter(t => ['q1-swore', 'q1-dinner'].includes(t.key)).every(t => JSON.stringify(Object.keys(t.a)) === '["kind"]'), 'a try of the first set does not hold the Question 1 ask alone');
  c.check(practice.filter(t => ['q2-surgery', 'q2-deny-stress'].includes(t.key)).every(t => JSON.stringify(Object.keys(t.a)) === '["span"]'), 'a try of the second set does not hold the Question 2 ask alone');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['moment-as-pattern', 'skipped-situation'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  const dinner = tries.filter(t => t.key === 'q1-dinner');
  c.check(dinner.length === 2 && dinner[0].a.kind === 'pattern' && dinner[0].r.kind === 'moment-as-pattern' && dinner[1].a.kind === 'move', `the miss on the dinner is not stored as a try and its second go (${JSON.stringify(dinner.map(t => [t.a, t.r]))})`);
  c.check(tries.filter(t => t.key === 'q2-deny-stress').some(t => t.a.span === 'years' && t.r.span === 'skipped-situation'), 'the hard week called a pattern is not stored as skipping the situation');
  c.check(!tries.some(t => t.key === 'w1-genius'), 'the worked story was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 2, at: 9 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('psychology'); return lessonDone(d, 'psychology', d.lessons.l1) && lastCheck(d, 'psychology', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
}
async function thePsychologyReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Psychology/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const now = await look(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'five-questions', `the review asked ${now.key}, which is not a story of the strand five-questions`);
  c.check(now.open.length >= 1 && ['kind', 'span'].includes(now.open[0].id), `the review asks ${now.open.map(a => a.id)}, not a question of lesson 1`);
  await plainWords(c, page, env, 'a question of the review');
  await answerAll(page);
  await next(page);
}

export async function X36(env) {
  const c = env.checker('X36'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'psychology');
  const subject = await env.screenText(page);
  c.check(await page.locator('#screen [data-l="l1"]').count() === 1 && /The five questions/.test(subject), 'the subject screen does not list lesson 1, The five questions');
  await env.inspect(c, page, 'the Psychology subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await theTeaching(env, c, page);
  await theWorkedItem(env, c, page);
  await theQuestionOneSet(env, c, page);
  await theQuestionTwoSet(env, c, page);
  await theBothQuestionsSet(env, c, page);
  await theCheckOfEight(env, c, page);
  await theRecord(env, c, page);
  await thePsychologyReview(env, c, page);
  await context.close();
  return c;
}
export const PSYCHOLOGY_CHECKS = { X36 };
