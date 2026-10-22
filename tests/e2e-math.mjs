// X25: Math's lesson 1, "Ballpark and check", end to end on a phone (375 px). Not one of the checks the standard lists in 9: it was added
// with step 3 (3 to 9), the way step 2 ran Singing's pilot with a microphone fed known notes, and rewritten with the lesson on 2026-10-22. The
// test plays a learner who types every answer: the subject screen with all fifteen lessons; the way of thinking and the
// worked receipt, its rough answer shown as a rough answer; a first group with the last step left (a slip named, an order added up line by line
// with M+ and MR on the calculator, the missed question coming back with new numbers); a second group with the last two steps left, rough answer
// first; a third with the whole problem, an estimate off by half shown against the exact answer; a bill's subtotal trusted when it was wrong, and
// others caught with the error found; then the check, one estimate off by half, passed 8 of 9; the result with every rule; and the record.
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
// the asks of the question in front of the learner, answered right in order: the rough answer (if it is asked), then the exact one
async function bothRight(page) {
  const now = await D.current(page);
  if (now.open[0].id === 'est') await D.typeAnswer(page, 'est', [D.cents(now.values.ans)]);
  await D.typeIn(page, 'exact', [D.cents(now.values.ans)]);
  await submit(page, 'exact');
  return now;
}
// the keys of an order's working ("5 × 11.09 M+, 3 × 9.09 M+"), one press each, then MR
const memoryKeys = memKeys => [...memKeys.split(', ').flatMap(line => { const [n, , price] = line.split(' '); return [...n, '*', ...price, 'M+']; }), 'MR'];

export async function X25(env) {
  const c = env.checker('X25'), { context, page } = await env.freshPage(c, 375);
  await env.openSubject(page, 'math');
  const subject = await env.screenText(page);
  const titles = ['Ballpark and check', 'Friendly numbers for times and divide', 'Rates and scaling', 'Proportional or not?', 'Percents forward', 'Percents backward and stacked', 'Areas and how much to buy', 'Circles, boxes and volume',
    'Ladders, scale and size', 'Growth year by year', 'What a loan costs', 'Packs, leftovers and lining up', 'Counting ways and chances', 'A missing number', 'Two steps, mixed, and the test',
    'Circles and right triangles, a refresher', 'Scale, slope and round volumes, a refresher', 'Powers, roots and log scales, a refresher', 'Primes and counting formulas, a refresher'];
  c.check(titles.every(t => subject.includes(t)) && !/Not built yet/.test(subject), 'the subject screen does not list all nineteen lessons, with none not built yet');
  // every lesson, the four refreshers included, passed its reviews and is live: no draft line
  const drafts = await page.evaluate(() => Object.values(FC.get('math').lessons).filter(l => l.status === 'draft').map(l => l.id));
  c.check(drafts.length === 0 && !subject.includes('Draft: not tried yet'), `the lessons, passed by their reviews and live, still carry the draft line (${drafts.join(', ')})`);
  await env.inspect(c, page, 'the Math subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');

  /* the why, the way of thinking, the worked receipt */
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 9'), 'the lesson is not nine steps long (the why, seven steps and the check)');
  await env.goOn(page);
  let text = await env.screenText(page);
  c.check(/say what is asked and what is given/.test(text) && /look back/.test(text) && /50 cents or more rounds up/.test(text) && /A wrong idea/.test(text), 'the teaching screen does not show the way of thinking, the rounding rule and the wrong idea');
  await env.inspect(c, page, 'the teaching screen');
  await env.goOn(page);
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const worked = await env.screenText(page);
  c.check(/\$3 \+ \$4 \+ \$4 \+ \$12 \+ \$5 = \$28/.test(worked) && /\$28\.45/.test(worked) && /opening hours do not matter/.test(worked), 'the worked receipt is not shown step by step, from what is given to the exact total');
  const answers = await page.locator('.mark .ans').allTextContents();
  c.check(JSON.stringify(answers) === JSON.stringify(['$28', '$28.45']), `the worked receipt does not show its rough answer as $28 beside the exact $28.45 (${answers.join(' / ')})`);
  await env.inspect(c, page, 'the worked example, finished');
  await env.goOn(page);

  /* the first group: the last step left; a slip named; an order added with the memory; a miss that comes back */
  c.check((await env.screenText(page)).includes('Question 1 of 3'), 'the first group is not three questions');
  const first = await D.current(page);
  c.check(first.key === 'g-cart' && first.open.length === 1 && first.open[0].id === 'exact', 'the first question is not a cart with only its exact total left to type');
  c.check(/Make a rough answer in your head/.test(await env.screenText(page)), 'the rough step is not shown as worked in a group that leaves the last step');
  await D.typeIn(page, 'exact', [D.cents(first.values.noBig)]);   // the cart without its big line
  await submit(page, 'exact');
  text = await env.screenText(page);
  c.check(/line is left out/.test(text) && text.includes(`You typed $${D.cents(first.values.noBig)}`) && await page.locator('.mark.no').count() === 1, 'the slip is not named');
  c.check(/The working/.test(text) && text.includes(first.values.exactSum), 'the working is not shown with the learner\'s question');
  await env.inspect(c, page, 'a missed question with its feedback');
  await next(page);
  const order = await D.current(page);
  c.check(order.key === 'g-qty' && /M\+/.test(await env.screenText(page)), 'the order does not say how to add its lines with M+');
  await D.openCalculator(page);
  c.check(await page.locator('[data-calc-key="M+"]').count() === 1 && await page.locator('[data-calc-key="MR"]').count() === 1, 'the order\'s calculator has no memory');
  await D.pressKeys(page, memoryKeys(order.values.memKeys));
  c.check(Number(await D.calcDisplay(page)) === Number(D.cents(order.values.ans)), `the keys of the working show ${await D.calcDisplay(page)} on the calculator, not the order's ${order.values.totalText}`);
  await page.locator('[data-calc-use]').click();
  await submit(page, 'exact');
  c.check(await page.locator('.mark.no').count() === 0, 'the order\'s total typed from the memory is not marked right');
  await env.inspect(c, page, '375px the order added with the memory');
  await next(page);
  const split = await D.current(page);
  c.check(split.key === 'g-split', `the third question is ${split.key}, not a bill to split`);
  await bothRight(page);
  await next(page);
  const again = await D.current(page);
  c.check(again.redo && again.key === 'g-cart' && again.seed !== first.seed && again.values.exactSum !== first.values.exactSum, 'the missed cart does not come back with new numbers');
  c.check((await env.screenText(page)).includes('Asked again'), 'the question that comes back is not labelled');
  await bothRight(page);
  await next(page);
  c.check(/You can stop here/.test(await env.screenText(page)) && /2 of 3 right the first time/.test(await env.screenText(page)), 'the first group does not end on "2 of 3 right the first time"');
  await env.goOn(page);

  /* the second group: the last two steps left, so the rough answer is typed first */
  for (let i = 0; i < 3; i++) {
    const now = await D.current(page);
    c.check(now.kind === 'estimate' && now.open[0].id === 'est' && now.open[0].estimate, 'the second group has a question that does not ask the rough answer first');
    if (i === 0) c.check(await page.locator('[data-calc], [data-calc-toggle]').count() === 0, 'the rough answer has a calculator');
    await bothRight(page);
    await next(page);
  }
  c.check(/3 of 3 right the first time/.test(await env.screenText(page)), 'the second group does not end on "3 of 3 right the first time"');
  await env.goOn(page);

  /* the third group: whole problems; an estimate off by half shown against the exact answer */
  const wild = await D.current(page);
  await D.typeAnswer(page, 'est', [roundTo(wild.values.ans, 1.5)]);
  await D.typeIn(page, 'exact', [D.cents(wild.values.ans)]);
  await submit(page, 'exact');
  text = await env.screenText(page);
  c.check(/You said \$[\d.,]+\. The exact answer is \$[\d.,]+, so you were 50% over\./.test(text) && await page.locator('.mark.no').count() === 1, `the missed estimate is not shown against the exact answer (${text.slice(0, 200)})`);
  await next(page);
  while (await page.locator('#qNext').count()) { await bothRight(page); await next(page); }
  c.check(/2 of 3 right the first time/.test(await env.screenText(page)), 'the third group does not end on "2 of 3 right the first time"');
  await env.goOn(page);

  /* a bill's subtotal: one trusted when wrong, the others caught; rough totals mixed in */
  text = await env.screenText(page);
  c.check(/subtotal/.test(text) && /Sales tax/.test(text), 'the teaching screen on a bill does not say how the subtotal and the tax differ');
  await plainWords(c, page, env, 'the teaching screen on a bill');
  await env.goOn(page);
  let trusted = false, caught = 0, seenRight = 0, rough = 0;
  while (await page.locator('#qNext').count()) {
    const now = await D.current(page);
    if (now.kind === 'estimate') { rough++; await bothRight(page); await next(page); continue; }
    c.check(await page.locator('.block-doc mark.cue').count() === 0, 'a line of the bill is marked before the answer');
    c.check(/Subtotal/.test(await env.screenText(page)) && /Sales tax/.test(await env.screenText(page)), 'a bill does not show its subtotal and its tax');
    await plainWords(c, page, env, 'a bill to judge');
    if (now.kind === 'right-total') {
      await env.tap(page, 'verdict', 'right');
      seenRight++;
      c.check(await page.locator('.mark.no').count() === 0, 'a subtotal that adds up, called right, is marked wrong');
    } else if (!trusted && !now.redo) {
      trusted = true;
      await env.tap(page, 'verdict', 'right');   // trusts a wrong subtotal
      c.check(await page.locator('.mark.no').count() === 1 && /The lines add up to \$[\d.,]+, not \$[\d.,]+\./.test(await env.screenText(page)), 'a trusted wrong subtotal does not say what the lines add up to');
    } else {
      await env.tap(page, 'verdict', 'wrong');
      c.check((await D.current(page)).open[0].id === 'by', 'calling a subtotal wrong does not ask by how much');
      await D.typeAnswer(page, 'by', [D.cents(now.values.off)]);
      caught++;
      c.check(await page.locator('.mark.no').count() === 0, 'a wrong subtotal caught and measured is marked wrong');
    }
    c.check(await page.locator('.block-doc mark.cue').count() >= 1, 'the line that decides it is not marked after the answer');
    await next(page);
  }
  c.check(trusted && caught >= 2 && seenRight === 2 && rough === 3, `the group was not two bills that add up, wrong ones and three rough totals (${seenRight} right, ${caught} caught, trusted ${trusted}, ${rough} rough)`);
  c.check(/6 of 7 right the first time/.test(await env.screenText(page)), 'the group of bills does not end on "6 of 7 right the first time"');
  await env.goOn(page);

  /* the check */
  text = await env.screenText(page);
  c.check(/Nine new questions/.test(text) && /At least 4 right among rough totals/.test(text) && /None wrong among bills that do not add up/.test(text) && /None wrong among bills that add up/.test(text), `the check does not name itself and its rules (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  let misses = 0, estimates = 0, verdicts = 0;
  for (let i = 0; i < 9; i++) {
    const now = await D.current(page);
    if (now.kind === 'estimate') {
      estimates++;
      c.check(now.open[0].id === 'est' && now.open.length === 1, 'a rough total in the check asks for more than the rough total');
      const miss = estimates === 5 && misses === 0 ? 1.6 : 1.05;
      if (miss !== 1.05) misses++;
      await D.typeAnswer(page, 'est', [roundTo(now.values.ans, miss)]);
    } else {
      verdicts++;
      await env.tap(page, 'verdict', now.kind === 'wrong-total' ? 'wrong' : 'right');
    }
    await next(page);
  }
  c.check(estimates === 5 && verdicts === 4, `the check was ${estimates} rough totals and ${verdicts} bills, not 5 and 4`);
  text = await env.screenText(page);
  const met = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(/8 of 9: passed/.test(text) && met.length === 3 && met.every(v => v === 'met'), `the check was not passed with every rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 9 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  await plainWords(c, page, env, 'the result of the check');

  /* the subject, and the record */
  await env.clickVisible(page, '[data-v="subject"]');
  text = await env.screenText(page);
  c.check(/Check passed, 8 of 9/.test(text) && /1 of 19 lessons/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  const stored = await env.storage(page), items = JSON.parse(stored['pl:math:items'] || '{}'), seen = JSON.parse(stored['pl:math:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  const inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 9 && inCheck.every(t => t.lesson === 'l1' && t.rev === 1 && t.sup === false), 'the check was not stored as nine tries of lesson 1 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  const missed = practice.find(t => t.key === 'g-cart' && ['missed-line', 'wild'].includes(t.r.exact));
  c.check(!!missed && missed.ok === false && missed.a.exact.length === 1 && typeof missed.a.exact[0] === 'number' && typeof missed.seed === 'number', 'the missed cart is not in the record with its slip, its numbers and its seed');
  c.check(practice.some(t => t.key === 'g-cart' && t.run === missed.run && t.ok), 'the cart that came back is not in the record as right');
  c.check(tries.every(t => Object.values(t.a).every(a => Array.isArray(a) ? a.every(x => typeof x === 'number') : typeof a === 'string')), 'an answer is stored as neither numbers nor an option');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 1, at: 8 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('math'); return lessonDone(d, 'math', d.lessons.l1) && lastCheck(d, 'math', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
  await context.close();
  return c;
}
