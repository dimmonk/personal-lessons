// X36: Psychology's pilot lesson, "What did they do?", end to end on a phone (375 px). Not one of the checks the standard lists in 26.7: it was added
// with step 7 (26.10), the way step 6 ran Ideology's pilot (X33). The test plays a learner who taps every answer and types the lines they are asked to
// write: what counts as what someone did, the worked account (a friend's message about a roommate); a first group of four with the checklist beside the
// account (a label tapped for the act and a softer word picked, an account with nothing in it answered with a next step that jumps ahead, both coming
// back); a second group of eight (two lines written against a model, three accounts of two acts, the one pattern of control with its safety wording,
// one miss that comes back); the check, passed 5 of 6; the subject screen and results; the record; and the review two days later, which asks an account
// held in reserve.
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
const KEYS = ['act', 'say', 'next'];
const HOTLINE = /National Domestic Violence Hotline/, NUMBERS = /1-800-799-7233/;

async function whatCountsAsWhatTheyDid(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 6'), 'the lesson is not six steps long (the why, four steps and the check)');
  await env.goOn(page);
  const text = await env.screenText(page);
  c.check(/A wrong idea/.test(text) && /He’s selfish” tells you what he did/.test(text) && /A guess about why/.test(text) && /A feeling/.test(text) && /A word for the person/.test(text) && await page.locator('.block-panel').count() === 1,
    'the first screen does not give the wrong idea, the checklist and the three lines that are not what someone did');
  c.check(/Some accounts have no line about what the person did/.test(text), 'the first screen does not say that an account can have no line about what was done');
  await env.inspect(c, page, 'what counts as what they did');
  await env.goOn(page);
}
async function theWorkedAccount(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 0, 'the worked account asks the learner to commit to a choice first, and its first ask is a tap');
  c.check(await page.locator('.msg-friend').count() === 1 && await page.locator('mark.cue').count() === 0, 'the account is not a friend\'s message, or its deciding line is marked before the working');
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  c.check(/The answer.*He ate the leftovers I’d saved for lunch/.test(text) && /The answer.*Dev ate the leftovers Maya had saved for lunch/.test(text), 'the worked account does not end on its two answers');
  c.check(/Anyone there could have seen it/.test(text) && /None is something he did/.test(text) && /Now you can judge whether that is selfish/.test(text), 'the working is not shown step by step in the account\'s own words');
  c.check(await page.locator('mark.cue').count() >= 1, 'the worked account does not mark the line that says what he did');
  c.check(await page.locator('[data-has]').count() === 1, 'the worked account does not list what counts as what they did');
  await plainWords(c, page, env, 'the worked account, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 4'), 'the first group is not four accounts');
  const firsts = [];
  // 1: a label tapped for what was done, then a softer word picked for what happened
  let now = await look(page);
  firsts.push(now.key);
  c.check(now.key === 'a-karaoke' && now.open.length === 1 && now.open[0].id === 'act' && now.open[0].pick === 1, `the first question is ${now.key}, with the tap first`);
  c.check(await page.locator('.block-panel').count() === 1 && await page.locator('.hintline').count() >= 1, 'the first group does not show the checklist beside the account');
  await plainWords(c, page, env, 'an account with the checklist beside it');
  await answerAll(page, { miss: { act: ['k1'], say: ['soft'] } });
  let text = await env.screenText(page);
  c.check(await page.locator('.mark.no').count() === 2 && await page.locator('.mark').count() === 2, 'a wrong tap and a wrong line are not marked as such');
  c.check(/common slip: tapped a word or a verdict about the person, not what they did/.test(text) && /A softer word is still a word for the person\. It does not say what they did\./.test(text), 'a label tapped is not named as a slip, or a softer word picked does not show its own line');
  c.check(await page.locator('mark.cue').count() >= 1 && /Priya felt/.test(text), 'the feedback does not mark the line that says what he did, or give the reason');
  await plainWords(c, page, env, 'a missed account with its feedback');
  await next(page);
  // 2: a thread
  now = await look(page);
  firsts.push(now.key);
  c.check(now.key === 'a-cancel' && now.open.length === 1, `the second question is ${now.key}`);
  await answerAll(page);
  c.check(await page.locator('.mark.no').count() === 0 && await page.locator('.mark').count() === 2, 'two right answers are not marked right');
  await next(page);
  // 3: a note, with too little to tell
  now = await look(page);
  firsts.push(now.key);
  c.check(now.key === 'a-wedding', `the third question is ${now.key}`);
  await answerAll(page);
  text = await env.screenText(page);
  c.check(/you would need to know whether he has done this before/.test(text), 'an account with one moment does not say what would be needed to say more');
  await next(page);
  // 4: nothing in the account: "Nothing here says what they did" is right, and the next step that jumps ahead is not
  now = await look(page);
  firsts.push(now.key);
  c.check(now.key === 'a-toxic' && now.open[0].id === 'act', `the fourth question is ${now.key}`);
  await page.locator('[data-tap-none]').click();
  const step = (await look(page)).open[0];
  c.check(step.id === 'next' && JSON.stringify(step.right) === '["find-out"]' && await page.locator('mark.cue').count() === 0, `the next step does not open after "Nothing here says what they did" with finding out as its right answer, or the lines are marked before the last answer (${JSON.stringify(step)})`);
  await page.locator('[data-ask="next"] [data-opt="limit"]').click();
  text = await env.screenText(page);
  c.check(await page.locator('.mark.no').count() === 1 && await page.locator('.mark').count() === 2, '"Nothing here says what they did" is not marked right, or the next step that jumps ahead is not marked wrong');
  c.check(/A limit needs something they did to name\. Nothing here names one\./.test(text), 'a limit before anything is known does not show its own line');
  c.check(/To check “toxic”, you would need a line about something she said or did/.test(text), 'an account with nothing in it does not say what would be needed');
  await next(page);
  const back = [];
  while (await page.locator('#qNext').count()) { back.push(await look(page)); await answerAll(page); await next(page); }
  c.check(back.length === 2 && back.every(b => b.redo) && back.map(b => b.key).sort().join() === 'a-karaoke,a-toxic', `the two misses did not both come back (${back.map(b => b.key)})`);
  c.check(/2 of 4 right the first time/.test(await env.screenText(page)), 'the first group does not end on "2 of 4 right the first time"');
  await env.goOn(page);
}
// the questions of the second group by the pick they want and what they hold
const PICK = { 'b-money': 2, 'b-stonewall': 2, 'b-phone': 2 };
const WRITE = { 'b-midnight': 'Rita rang the bell at midnight.', 'b-neighbor': 'The neighbor did not answer when I waved.' };
async function theSecondGroup(env, c, page) {
  const asked = [];
  let controlSeen = false;
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(now);
    c.check(now.open.length === 1 && now.open[0].id === 'act' && now.open[0].pick === (PICK[now.key] || 1), `${now.key}: the question does not open with the tap of ${PICK[now.key] || 1} line${PICK[now.key] ? 's' : ''}`);
    c.check(await page.locator('[data-feedback]').count() === 0, `${now.key}: feedback is on the page before the answer`);
    await plainWords(c, page, env, `the account ${now.key}`);
    if (now.key === 'b-stonewall' && !now.redo) {
      await answerAll(page, { miss: { act: ['x1', 'x3'] } });   // two lines that are not what he did: what you wrote, and your word for it
      c.check(/common slip: tapped what the teller did, not what the person did/.test(await env.screenText(page)) && /common slip: tapped a word or a verdict about the person/.test(await env.screenText(page)), 'two wrong lines in a pair are not both named as slips');
    } else await answerAll(page, { write: now.key in WRITE ? { say: WRITE[now.key] } : {} });
    const text = await env.screenText(page);
    if (now.key === 'b-phone') {
      controlSeen = true;
      c.check(HOTLINE.test(text) && NUMBERS.test(text) && /text START to 88788/.test(text) && /A friend can call too/.test(text) && /safety matter/.test(text) && /phone or computer they cannot see/.test(text), 'the account of control does not name the hotline, its numbers and the way to use it safely');
      c.check(!/narcissist|abuser|abusive|disorder/i.test(text), 'the account of control names or diagnoses someone');
      await plainWords(c, page, env, 'the account of control, answered');
    } else c.check(!HOTLINE.test(text) && !NUMBERS.test(text), `${now.key}: the hotline is named in an account that is not about control`);
    if (now.key in WRITE) c.check(/Your words/.test(text) && /A model line/.test(text), `${now.key}: the line written is not followed by the model line`);
    await next(page);
  }
  const firsts = asked.filter(a => !a.redo);
  c.check(firsts.length === 8 && new Set(firsts.map(a => a.key)).size === 8 && controlSeen, `the second group is not eight different accounts (${firsts.map(a => a.key)})`);
  c.check(asked.filter(a => a.redo).map(a => a.key).join() === 'b-stonewall', 'the account that was missed does not come back');
  c.check(/7 of 8 right the first time/.test(await env.screenText(page)), 'the second group does not end on "7 of 8 right the first time"');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Six new questions/.test(text) && /At least 5 right/.test(text) && /You will not see any answer until the end/.test(text), `the check does not name itself and its rule (${text.slice(0, 220)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 6; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'act', 'a question of the check is not asked once, from the start');
    await answerAll(page, now.key === 'k-heat' ? { miss: { act: ['t1'] } } : {});   // your own line, tapped for the act
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-fake,k-heat,k-lazy,k-meeting,k-party,k-plans', `the check is not the six accounts of part A (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/5 of 6: passed/.test(text) && rules.length === 1 && rules[0] === 'met', `the check was not passed 5 of 6 with its rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 6 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  c.check(/common slip: tapped what the teller did, not what the person did/.test(text), 'the line of your own that was tapped in the check is not named in its answers');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 5 of 6/.test(text) && /1 of 6 parts/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Psychology subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:psychology:items'] || '{}'), seen = JSON.parse(stored['pl:psychology:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 6 && inCheck.every(t => t.lesson === 'l1' && t.rev === 1 && t.sup === false), 'the check was not stored as six tries of lesson 1 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => KEYS.includes(k)) && Array.isArray(t.a.act) && t.a.act.every(id => typeof id === 'string') && Object.values(t.a).filter(v => !Array.isArray(v)).every(v => typeof v === 'string')),
    'an answer is not stored as the ids of the lines tapped, and the line picked or written, or the next step');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['softened', 'jumped-ahead'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  c.check(tries.filter(t => t.key === 'a-toxic').some(t => JSON.stringify(t.a.act) === '["none"]'), '"Nothing here says what they did" is not stored as the answer "none"');
  c.check(tries.filter(t => t.key === 'b-midnight').every(t => typeof t.a.say === 'string' && !('say' in t.r)), 'the line written is not stored with the try, or has a result');
  c.check(tries.filter(t => t.key === 'b-money').every(t => t.a.act.length === 2) && tries.filter(t => t.key === 'b-phone').every(t => t.a.act.length === 2), 'the accounts of two acts are not stored as two lines');
  c.check(!tries.some(t => t.key === 'w-leftovers'), 'the worked account was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 1, at: 5 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('psychology'); return lessonDone(d, 'psychology', d.lessons.l1) && lastCheck(d, 'psychology', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
}
async function theResults(env, c, page) {
  await env.clickVisible(page, '#screen [data-v="results"]');
  const text = await env.screenText(page);
  ['an ordinary moment', 'the word fits', 'can’t tell yet', 'a pattern of control'].forEach(v => c.check(text.includes(`What the account shows: ${v}`), `the results do not show how accounts of "${v}" went, side by side`));
  c.check(/made the label softer instead of saying what happened/.test(text) && /picked a next step before the account showed what they did/.test(text), 'the results do not list the slips made');
  c.check(/What they did/.test(text.slice(text.indexOf('What comes back, and when'))), 'the results do not say when the topic comes back');
  await plainWords(c, page, env, 'the results');
}
async function theReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Psychology/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const now = await look(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'what-they-did', `the review asked ${now.key}, which is not an account of the topic that came due`);
  await plainWords(c, page, env, 'an account of the review');
  await answerAll(page);
  await next(page);
}

export async function X36(env) {
  const c = env.checker('X36'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'psychology');
  const subject = await env.screenText(page);
  c.check(/What did they do\?/.test(subject) && (subject.match(/Not built yet/g) || []).length === 5, 'the subject screen does not list the pilot and the five parts not built yet');
  c.check(subject.includes('Draft: not tried yet'), 'the pilot does not carry the draft line');
  await env.inspect(c, page, 'the Psychology subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await whatCountsAsWhatTheyDid(env, c, page);
  await theWorkedAccount(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await theResults(env, c, page);
  await theReview(env, c, page);
  await context.close();
  return c;
}
export const PSYCHOLOGY_CHECKS = { X36 };
