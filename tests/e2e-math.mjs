// X25: Math's pilot lesson, "Ballpark and check", end to end on a phone (375 px). Not one of the checks the standard lists in 26.7: it was added
// with step 3 (26.10), the way step 2 ran Singing's pilot with a microphone fed known notes. The test plays a learner who types every answer:
// the teaching screens and the worked example; a first group of three with a rough total typed first, one estimate that misses and a slip that
// is named (the missed question coming back with new numbers); a second group; a printed total trusted when it was wrong, and one caught with
// its error found; then the check, one estimate off by half, passed 7 of 8; the result with every rule; the subject screen; and the record.
// It asserts what this walk shows, and leaves to X1 to X3, X5, X13, X21 and X23 what those own (the screens fitting, the stored keys, the
// disagree line, nothing leaving the app, no feedback in a check), so that a fault in one of those turns that check red and no other.
import { britishIn } from './american.mjs';
import * as D from './e2e-number-drive.mjs';

const next = page => page.locator('#qNext').click();
const submit = async (page, askId) => {   // Answer, and once more if the estimate and the answer were held back (X13 owns that line)
  await D.answerButton(page, askId).click();
  if (await D.disagreeShown(page)) await D.answerButton(page, askId).click();
};
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is X3's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const roundTo = (x, f) => D.cents(x * f);

// one question of a group, answered as the learner means to: `how` says what to do with each kind
async function answerNow(page, how) {
  const now = await D.current(page);
  await how(now);
  return now;
}
const typeBoth = (page, now, exactValue) => async () => {
  await D.typeAnswer(page, 'est', [D.cents(now.values.total)]);
  await D.typeIn(page, 'exact', [D.cents(exactValue)]);
  await submit(page, 'exact');
};

export async function X25(env) {
  const c = env.checker('X25'), { context, page } = await env.freshPage(c, 375);
  await env.openSubject(page, 'math');
  const subject = await env.screenText(page);
  c.check(/Ballpark and check/.test(subject) && (subject.match(/Not built yet/g) || []).length === 6, 'the subject screen does not list the pilot and the six parts not built yet');
  c.check(subject.includes('Draft: not tried yet'), 'the pilot does not carry the draft line');
  await env.inspect(c, page, 'the Math subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');

  /* the why, the teaching screen, the worked example */
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 8'), 'the lesson is not eight steps long (the why, six steps and the check)');
  await env.goOn(page);
  await env.inspect(c, page, 'the teaching screen');
  c.check(/nearest whole dollar/.test(await env.screenText(page)) && /A wrong idea/.test(await env.screenText(page)), 'the teaching screen does not show the rule and the wrong idea');
  await env.goOn(page);
  c.check(await page.locator('[data-commit]').count() === 0, 'a worked example of typed numbers asks to commit to a choice');
  for (let i = 0; i < 4; i++) await page.locator('#workedMore').click();
  const worked = await env.screenText(page);
  c.check(/The answer.*\$23\.43/.test(worked), 'the worked example does not end on the exact total');
  c.check(/\$3\.49 is \$3/.test(worked) && /3 \+ 4 \+ 4 \+ 12 = 23/.test(worked) && /close to \$23/.test(worked), 'the working is not shown step by step');
  await env.inspect(c, page, 'the worked example, finished');
  await env.goOn(page);

  /* the first group: a rough total first, a miss, a slip, a question that comes back with new numbers */
  c.check((await env.screenText(page)).includes('Question 1 of 3'), 'the first group is not three questions');
  const first = await D.current(page);
  c.check(first.key === 'g-cart' && first.open[0].id === 'est' && first.open[0].estimate, 'the first question is not a cart with the rough total first');
  await env.inspect(c, page, 'a rough total to type');
  const total = first.values.total;
  await D.typeAnswer(page, 'est', [roundTo(total, 1.5)]);   // half as much again: a miss
  await env.inspect(c, page, 'the exact total to type');
  await D.typeIn(page, 'exact', [D.cents(first.values.noBig)]);   // the cart without its big line
  await submit(page, 'exact');
  let text = await env.screenText(page);
  c.check(/You said \$[\d.,]+\. The exact answer is \$[\d.,]+, so you were \d+% (over|under)\./.test(text), `the missed estimate is not shown against the exact answer (${text.slice(0, 200)})`);
  c.check(/line is left out/.test(text) && text.includes(`You typed $${D.cents(first.values.noBig)}`), 'the slip is not named');
  c.check(await page.locator('.mark.no').count() === 2, 'a missed estimate and a slipped answer are not both marked');
  c.check(/The working/.test(text) && text.includes(first.values.exactSum), 'the working is not shown with the learner\'s question');
  c.check(await page.locator('.block-doc mark.cue').count() === 0, 'a cart with nothing to point at has a line marked');
  await env.inspect(c, page, 'a missed question with its feedback');
  await next(page);
  for (const id of ['g-qty', 'g-split']) {
    const now = await D.current(page);
    c.check(now.key === id, `the next question is ${now.key}, not ${id}`);
    await typeBoth(page, now, now.values.total)();
    c.check(await page.locator('.mark.no').count() === 0 && await page.locator('.mark').count() === 2, `${id}: a right rough total and a right exact answer are not both marked right`);
    await next(page);
  }
  const again = await D.current(page);
  c.check(again.redo && again.key === 'g-cart' && again.seed !== first.seed && again.values.exactSum !== first.values.exactSum, 'the missed cart does not come back with new numbers');
  c.check((await env.screenText(page)).includes('Asked again'), 'the question that comes back is not labelled');
  await typeBoth(page, again, again.values.total)();
  await next(page);
  text = await env.screenText(page);
  c.check(/You can stop here/.test(text) && /2 of 3 right the first time/.test(text), `the first group does not end on "2 of 3 right the first time" (${text.slice(0, 120)})`);
  await env.inspect(c, page, 'the break between groups');
  await env.goOn(page);

  /* the second group: no help, all right */
  for (let i = 0; i < 3; i++) {
    const now = await D.current(page);
    c.check(now.kind === 'estimate' && now.open[0].id === 'est', 'the second group has a question that is not a rough total first');
    await typeBoth(page, now, now.values.total)();
    await next(page);
  }
  c.check(/3 of 3 right the first time/.test(await env.screenText(page)), 'the second group does not end on "3 of 3 right the first time"');
  await env.goOn(page);

  /* printed totals: one trusted when wrong, one caught */
  await plainWords(c, page, env, 'the teaching screen on printed totals');
  await env.goOn(page);
  let trusted = false, caught = 0, seenRight = 0;
  while (await page.locator('#qNext').count()) {
    const now = await D.current(page);
    c.check(await page.locator('.block-doc mark.cue').count() === 0, 'a line of the receipt is marked before the answer');
    await plainWords(c, page, env, 'a printed total to judge');
    if (now.kind === 'right-total') {
      await env.tap(page, 'verdict', 'right');
      seenRight++;
      c.check(await page.locator('.mark.no').count() === 0, 'a right total called right is marked wrong');
    } else if (!trusted && !now.redo) {
      trusted = true;
      await env.tap(page, 'verdict', 'right');   // trusts a wrong total
      text = await env.screenText(page);
      c.check(await page.locator('.mark.no').count() === 1 && /The lines add up to \$[\d.,]+, not \$[\d.,]+\./.test(text), 'a trusted wrong total does not say what the lines add up to');
    } else {
      await env.tap(page, 'verdict', 'wrong');
      c.check((await D.current(page)).open[0].id === 'by', 'calling a total wrong does not ask by how much');
      await D.typeAnswer(page, 'by', [D.cents(now.values.off)]);
      caught++;
      c.check(await page.locator('.mark.no').count() === 0, 'a wrong total caught and measured is marked wrong');
    }
    c.check(await page.locator('.block-doc mark.cue').count() >= 1, 'the line that decides it is not marked after the answer');
    await next(page);
  }
  c.check(trusted && caught >= 1 && seenRight === 2, `the printed totals asked were not two right ones and wrong ones (${seenRight} right, ${caught} caught, trusted ${trusted})`);
  c.check(/3 of 4 right the first time/.test(await env.screenText(page)), 'the group of printed totals does not end on "3 of 4 right the first time"');
  await env.goOn(page);

  /* the check */
  text = await env.screenText(page);
  c.check(/Eight new questions/.test(text) && /At least 4 right among rough totals/.test(text) && /None wrong among receipts with a wrong total/.test(text) && /None wrong among receipts with the right total/.test(text), `the check does not name itself and its rules (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  let misses = 0, estimates = 0, verdicts = 0;
  for (let i = 0; i < 8; i++) {
    const now = await D.current(page);
    if (now.kind === 'estimate') {
      estimates++;
      c.check(now.open[0].id === 'est' && now.open.length === 1, 'a rough total in the check asks for more than the rough total');
      const miss = estimates === 5 && misses === 0 ? 1.6 : 1.05;
      if (miss !== 1.05) misses++;
      await D.typeAnswer(page, 'est', [roundTo(now.values.total, miss)]);
    } else {
      verdicts++;
      await env.tap(page, 'verdict', now.kind === 'wrong-total' ? 'wrong' : 'right');
    }
    await next(page);
  }
  c.check(estimates === 5 && verdicts === 3, `the check was ${estimates} rough totals and ${verdicts} printed totals, not 5 and 3`);
  text = await env.screenText(page);
  c.check(/\d of 8: passed/.test(text) || /\d of 8: not yet/.test(text), 'the check does not end with its result');
  const verdicts3 = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(/7 of 8: passed/.test(text) && verdicts3.length === 3 && verdicts3.every(v => v === 'met'), `the check was not passed with every rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 8 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  await plainWords(c, page, env, 'the result of the check');

  /* the subject, and the record */
  await env.clickVisible(page, '[data-v="subject"]');
  text = await env.screenText(page);
  c.check(/Check passed, [67] of 8/.test(text) && /1 of 7 parts/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  const stored = await env.storage(page), items = JSON.parse(stored['pl:math:items'] || '{}'), seen = JSON.parse(stored['pl:math:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  const inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 8 && inCheck.every(t => t.lesson === 'l1' && t.rev === 1 && t.sup === false), 'the check was not stored as eight tries of lesson 1 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  const carts = practice.filter(t => t.key === 'g-cart').sort((a, b) => a.seed - b.seed);
  const missed = carts.find(t => t.r.exact === 'missed-line');
  c.check(!!missed && missed.r.est === 'no' && missed.ok === false && missed.a.exact.length === 1 && typeof missed.a.exact[0] === 'number' && typeof missed.seed === 'number', 'the missed cart is not in the record with its slip, its numbers and its seed');
  c.check(carts.filter(t => t.run === (missed || {}).run).length >= 2 && carts.some(t => t.ok), 'the cart that came back is not in the record as right');
  c.check(tries.every(t => Object.values(t.a).every(a => Array.isArray(a) ? a.every(x => typeof x === 'number') : typeof a === 'string')), 'an answer is stored as neither numbers nor an option');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 1, at: 7 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('math'); return lessonDone(d, 'math', d.lessons.l1) && lastCheck(d, 'math', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
  await context.close();
  return c;
}
