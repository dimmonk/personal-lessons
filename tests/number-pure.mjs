// The pure half of the typed number (lesson standard 26.1, 26.2, step 3): what is typed, tolerances, slips, the estimate and its "disagree" line,
// the calculator, documents and figures as HTML, and the numbers Math's questions are made of. No browser: the app's scripts are loaded as in
// tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/number-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { parseTyped, fmtNumber, withinTol, scoreNumber, calcPress, CALC_START, calcValue, estimatesDisagree, estimateOff, estimateTyped, numberAnswers, frameFilled,
  itemFromGen, scoreItem, documentHtml, figureHtml, numberHtml, numberMarkHtml, numberMissHtml, FC } = app;
const till = FC.get('till'), math = FC.get('math');
const at = (data, id, seed) => itemFromGen(data.gens[id], seed);
const ask = (item, id) => item.asks.find(a => a.id === id);

/* ---------- what is typed ---------- */
same(['26.17', '$26.17', ' 26.17 ', '1,234.50', '$1,234', '40%', '-3', '.5', '12.'].map(parseTyped), [26.17, 26.17, 26.17, 1234.5, 1234, 40, -3, 0.5, 12], 'numbers a learner may type');
same(['', 'abc', '1,2', '12,34,567', '1.2.3', '$', '--3', '4 5', '1e3'].map(parseTyped), [null, null, null, null, null, null, null, null, null], 'things that are not numbers');
same([fmtNumber(1234.5), fmtNumber(7), fmtNumber(26.1, 2), fmtNumber(0.05, 2), fmtNumber(1234567.891, 2)], ['1,234.5', '7', '26.10', '0.05', '1,234,567.89'], 'numbers as read');

/* ---------- tolerances ---------- */
check(withinTol(26.17, 26.17, { round: 0.01 }) && withinTol(26.1749, 26.17, { round: 0.01 }) && !withinTol(26.18, 26.17, { round: 0.01 }), 'a rounding to the cent');
check(withinTol(21.8375, 21.84, { round: 0.01 }) && withinTol(21.84, 21.84, { round: 0.01 }) && !withinTol(21.83, 21.84, { round: 0.01 }), 'a share to the nearest cent');
check(withinTol(25, 20, { rel: 0.25 }) && !withinTol(25.1, 20, { rel: 0.25 }) && withinTol(15, 20, { rel: 0.25 }) && !withinTol(14.9, 20, { rel: 0.25 }), 'a tolerance by share is closed at its edge');
check(withinTol(5.5, 5, { abs: 0.5 }) && !withinTol(5.6, 5, { abs: 0.5 }), 'a tolerance by distance');
check(withinTol(3, 2.5, { abs: 0.1, rel: 0.25 }) && withinTol(2.45, 2.5, { abs: 0.1, rel: 0.01 }) && !withinTol(4, 2.5, { abs: 0.1, rel: 0.25 }), 'abs and rel together: either is enough');
check(withinTol(50, 100, { band: [0.5, 2] }) && withinTol(200, 100, { band: [0.5, 2] }) && !withinTol(49.9, 100, { band: [0.5, 2] }) && !withinTol(200.1, 100, { band: [0.5, 2] }), 'half to double');
check(withinTol(0, 0, { rel: 0.2 }) && !withinTol(0.1, 0, { rel: 0.2 }), 'zero is only itself under a share');

/* ---------- scoring a made question, its slips, a miss ---------- */
{
  const item = at(till, 't-cart', 3), exact = ask(item, 'exact'), est = ask(item, 'est'), total = item.values.total;
  same(scoreNumber(till, exact, [total], item), 'ok', 'the exact total is right');
  same(scoreNumber(till, exact, [Math.round(total * 100 + 1) / 100], item), 'no', 'a cent off is wrong');
  same(scoreNumber(till, exact, [item.values.noRoast], item), 'left-out', 'the total without the roast is the named slip');
  same(scoreNumber(till, exact, [item.values.tenfold], item), 'point', 'ten times the total is the decimal-point slip');
  same(scoreNumber(till, exact, [7], item), 'no', 'a number that matches nothing is just wrong');
  same(scoreNumber(till, exact, [total, total], item), 'no', 'two numbers in one blank are wrong');
  same(scoreNumber(till, est, [total * 1.19], item), 'ok', 'an estimate 19% over is right');
  same(scoreNumber(till, est, [total * 1.3], item), 'no', 'an estimate 30% over is wrong');
  same(numberAnswers(item, exact), [total], 'the answer a name stands for');
  same(frameFilled(exact, [26.1]), '$26.10', 'a frame with money in it');
  const two = till.items['t-recipe'], cups = ask(two, 'cups');
  same(scoreNumber(till, cups, [3, 1.5], two), 'ok', 'both blanks right');
  same(scoreNumber(till, cups, [3.4, 1.2], two), 'ok', 'both blanks within half a cup');
  same(scoreNumber(till, cups, [3, 2.5], two), 'no', 'one blank wrong makes the whole wrong');
  same(scoreNumber(till, cups, [3], two), 'no', 'a missing blank is wrong');
  same(frameFilled(cups, [3, 1.5]), 'flour 3 cups, milk 1.5 cups', 'a frame with two blanks');
  const bad = { ...cups, answer: 'nothing' };
  let message = '';
  try { scoreNumber(till, bad, [1, 1], two); } catch (error) { message = error.message; }
  check(/not a number the question makes/.test(message), 'a name the question does not make is refused, not scored');
}

/* ---------- an item is right when every scored ask is right ---------- */
{
  const item = at(till, 't-cart', 5), total = item.values.total;
  const right = scoreItem(till, item, null, { est: [total], exact: [total] });
  check(right.ok && right.r.est === 'ok' && right.r.exact === 'ok', 'both asks right: the question is right');
  const roughWrong = scoreItem(till, item, null, { est: [total * 3], exact: [total] });
  check(!roughWrong.ok && roughWrong.r.est === 'no' && roughWrong.r.exact === 'ok', 'a wild estimate with a right exact total is a miss on the estimate alone');
  const slip = scoreItem(till, item, null, { est: [total], exact: [item.values.noRoast] });
  check(!slip.ok && slip.r.exact === 'left-out', 'the slip is the result of its ask');
}

/* ---------- the estimate and "your answer and your estimate disagree" ---------- */
{
  const item = at(till, 't-cart', 5), exact = ask(item, 'exact'), est = ask(item, 'est'), on = { estimateCheck: true };
  const answers = { est: [20] };
  check(estimatesDisagree(item, on, exact, answers, [41]), 'more than double the estimate disagrees');
  check(!estimatesDisagree(item, on, exact, answers, [40]), 'exactly double does not');
  check(estimatesDisagree(item, on, exact, answers, [9]) && !estimatesDisagree(item, on, exact, answers, [10]), 'less than half disagrees, half does not');
  check(!estimatesDisagree(item, null, exact, answers, [400]), 'with no help on (a check) it never disagrees');
  check(!estimatesDisagree(item, {}, exact, answers, [400]) && !estimatesDisagree(item, { shown: true }, exact, answers, [400]), 'other help does not turn it on');
  check(!estimatesDisagree(item, on, est, answers, [400]), 'the estimate itself is never compared');
  check(!estimatesDisagree(item, on, exact, {}, [400]), 'with no estimate typed there is nothing to compare with');
  same(estimateTyped(item, answers), 20, 'the estimate typed');
  same(estimateOff(22, 20), { pct: 10, dir: 'over' }, 'ten percent over');
  same(estimateOff(15, 20), { pct: 25, dir: 'under' }, 'a quarter under');
  same(estimateOff(20, 20), { pct: 0, dir: 'same' }, 'right on it');
}

/* ---------- the calculator ---------- */
{
  const run = keys => keys.split(' ').reduce(calcPress, CALC_START);
  same(run('3 + 4 =').shown, '7', '3 + 4');
  same(run('1 2 . 5 * 2 =').shown, '25', '12.5 × 2');
  same(run('1 0 / 4 =').shown, '2.5', '10 ÷ 4');
  same(run('2 + 3 * 4 =').shown, '20', 'one operation at a time, as on a phone');
  same(run('1 / 3 =').shown, '0.333333333333', 'a long decimal is cut to twelve figures');
  same(run('0 . 1 + 0 . 2 =').shown, '0.3', 'decimals add as a person expects');
  same(run('1 / 0 =').shown, 'Error', 'dividing by nothing is an error');
  same(run('1 / 0 = 5').shown, '5', 'any key starts again after an error');
  same(run('3 4 B').shown, '3', 'delete the last digit');
  same(run('3 B').shown, '0', 'delete the only digit');
  same(run('9 C').shown, '0', 'clear');
  same(run('0 0 7').shown, '7', 'leading zeros do not pile up');
  same(run('.').shown, '0.', 'a point first makes 0.');
  same(run('1 . 5 .').shown, '1.5', 'a second point does nothing');
  same(run('1 2 3 4 5 6 7 8 9 0 1 2 3 4').shown, '123456789012', 'twelve digits at most');
  same(run('5 + =').shown, '5', 'equals with nothing to finish does nothing');
  same(run('5 + 3 = + 2 =').shown, '10', 'carry on from an answer');
  same(calcValue(run('1 / 0 =')), null, 'an error has no value');
  same(calcValue(run('4 . 5')), 4.5, 'the number on the display');
  check(CALC_START.shown === '0' && !CALC_START.error, 'the starting state is not changed by pressing keys');
}

/* ---------- the screen of a typed number ---------- */
{
  const item = at(till, 't-cart', 5), est = ask(item, 'est'), exact = ask(item, 'exact');
  const inst = { item }, ctx = { item, support: null, answers: {} };
  const calc = { open: false, st: CALC_START };
  const estimateScreen = numberHtml(till, est, { calc }, ctx), exactScreen = numberHtml(till, exact, { calc }, ctx);
  check(!/data-calc/.test(estimateScreen), 'an estimate has no calculator');
  check(/data-calc-toggle/.test(exactScreen) && /data-calc-key="7"/.test(exactScreen) && /data-calc-use/.test(exactScreen), 'an exact answer has the calculator');
  check(/inputmode="decimal"/.test(estimateScreen) && /data-num-answer="est" disabled/.test(estimateScreen), 'the Answer button is shut until a number is typed');
  check(/data-num-answer="exact" >/.test(numberHtml(till, exact, { calc, typed: { exact: ['26.17'] } }, ctx)), 'and open when one is');
  check(/data-num-answer="exact" disabled/.test(numberHtml(till, exact, { calc, typed: { exact: ['26.1x'] } }, ctx)), 'and shut again for a thing that is not a number');
  const locked = numberHtml(till, exact, { calc, answer: [26.17] }, ctx);
  check(/value="26.17"[^>]*disabled/.test(locked) && !/data-num-answer/.test(locked) && !/class="mark/.test(locked), 'an answered ask shows what was typed, locked, with no mark and no button');
  const looked = numberHtml(till, exact, { calc, typed: { exact: ['500'] }, looked: { exact: true } }, { ...ctx, support: { estimateCheck: true }, answers: { est: [25] } });
  check(/data-estimate-check/.test(looked) && /disagree/.test(looked) && /\$?25/.test(looked) && /500/.test(looked), 'the disagree line names both numbers');
  check(!/disagree/.test(numberHtml(till, exact, { calc, typed: { exact: ['500'] } }, { ...ctx, answers: { est: [25] } })), 'and is not there before it is needed');
  const two = till.items['t-recipe'], cups = ask(two, 'cups');
  const boxes = numberHtml(till, cups, { calc }, { item: two, answers: {} });
  check((boxes.match(/class="numbox"/g) || []).length === 2 && /flour/.test(boxes) && /milk/.test(boxes) && /Answer 1/.test(boxes) && /Answer 2/.test(boxes), 'a frame with two blanks makes two boxes with their words');
}

/* ---------- what it leaves in the feedback ---------- */
{
  const item = at(till, 't-cart', 5), exact = ask(item, 'exact'), est = ask(item, 'est'), total = item.values.total, answers = { est: [total * 1.1], exact: [total] };
  const mark = numberMarkHtml(exact, answers.exact, 'ok', item, answers);
  check(/class="mark "/.test(mark) && mark.includes(item.values.totalText) && /Your estimate was \$[\d.]+/.test(mark), 'a right exact answer, with the estimate beside it');
  const wrong = numberMarkHtml(exact, [7], 'no', item, answers);
  check(/class="mark no"/.test(wrong) && wrong.includes(`The answer: ${item.values.totalText}`), 'a wrong exact answer shows the right one');
  const roughLine = numberMarkHtml(est, answers.est, 'ok', item, answers);
  check(/You said \$[\d.]+\. The exact answer is \$[\d.]+, so you were 10% over\./.test(roughLine), `an estimate says how far off it was (${roughLine.replace(/<[^>]+>/g, ' ')})`);
  const slip = numberMissHtml(till, exact, [item.values.noRoast], 'left-out');
  check(/You typed \$/.test(slip) && /roast chicken is left out/.test(slip), 'a named slip prints its own line');
  const noThen = numberMissHtml(till, { ...exact, traps: [{ slip: 'point', value: 'tenfold' }] }, [item.values.tenfold], 'point');
  check(/common slip: put the decimal point in the wrong place/.test(noThen), 'a slip with no line of its own is named from the subject');
  check(numberMissHtml(till, est, [1], 'no') === '' && /You typed/.test(numberMissHtml(till, exact, [7], 'no')), 'a plain miss on an estimate says nothing more; on an exact answer it says what was typed');
}

/* ---------- documents and figures ---------- */
{
  const receipt = at(till, 't-cart', 5).blocks[0];
  const plain = documentHtml(receipt, {}), marked = documentHtml(receipt, { deciding: ['r3'] });
  check(plain.includes('data-document="receipt"') && plain.includes('Corner Cafe') && (plain.match(/<tr /g) || []).length === 3 && !/class="cue"/.test(plain), 'a receipt with its rows and nothing marked');
  check((marked.match(/class="cue"/g) || []).length === 2 && /data-seg="r3"[^>]*>(<td[^>]*><mark class="cue">)/.test(marked), 'the deciding row is marked, every cell of it');
  for (const form of ['receipt', 'recipe', 'tag', 'offer']) check(documentHtml({ kind: 'document', form, title: 'T', rows: [{ id: 'a', cells: ['x', 'y'] }] }, {}).includes(`doc-${form}`), `a ${form} has its own look`);
  check(app.segmentsOf(receipt).map(s => s.id).join() === 'r1,r2,r3', 'the rows of a document are its segments');
  const bar = figureHtml({ kind: 'figure', type: 'bar', data: { whole: 'Price', parts: [{ label: 'a', pct: 75 }, { label: 'b', pct: 25 }] } });
  check(/x="0" y="0" width="75"/.test(bar) && /x="75" y="0" width="25"/.test(bar) && /viewBox="0 0 100 20"/.test(bar), 'the 100% bar draws each part as wide as its percent, side by side');
  const plan = figureHtml({ kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: 12, h: 6 }, { x: 0, y: 0, w: 6, h: 3, cut: true }] } });
  const widths = [...plan.matchAll(/width="([\d.]+)" height="([\d.]+)" data-w="(\d+)" data-h="(\d+)"/g)].map(m => [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])]);
  check(widths.length === 2 && Math.abs(widths[0][0] / widths[1][0] - 2) < 1e-6 && Math.abs(widths[0][1] / widths[0][0] - 0.5) < 1e-6 && /12 ft/.test(plan) && /class="fig-room cut"/.test(plan), 'a plan is drawn to one scale, with its measurements and its cut-out');
  const rate = figureHtml({ kind: 'figure', type: 'rate-table', data: { top: { label: 'People', cells: ['4', '6'] }, bottom: { label: 'Cups', cells: ['2', '?'] } } });
  check((rate.match(/<tr>/g) || []).length === 2 && rate.includes('>?<'), 'a rate table has two rows and a blank to fill');
  const years = figureHtml({ kind: 'figure', type: 'years', data: { columns: ['Year', 'Balance'], rows: [['1', '$1,050'], ['2', '$1,102.50']] } });
  check((years.match(/<tr>/g) || []).length === 3 && years.includes('$1,102.50'), 'a year table has its header and a row for each year');
}

/* ---------- Math: the numbers its questions are made of ---------- */
{
  const seeds = Array.from({ length: 400 }, (_, k) => k + 1), rel = (a, b) => Math.abs(a - b) / b;
  const bundle = id => seeds.map(seed => at(math, id, seed));
  for (const id of ['g-cart', 'g-qty']) {
    const items = bundle(id), worst = Math.max(...items.map(i => rel(i.values.rough, i.values.total)));
    check(worst <= 0.15, `${id}: rounding each price to the nearest dollar is within 15% of the total on every seed (worst ${(worst * 100).toFixed(1)}%)`);
    check(items.every(i => i.values.rough > 0), `${id}: there is always a rough total`);
    check(new Set(items.map(i => i.values.totalText)).size > 100, `${id}: 400 seeds make more than 100 different totals`);
    check(items.every(i => !ask(i, 'est').traps.some(t => withinTol(i.values[t.value], i.values.total, { rel: 0.2 }))), `${id}: the left-out slip is never inside the estimate's 20%`);
  }
  const splits = bundle('g-split'), worstSplit = Math.max(...splits.map(i => rel(i.values.roughShare, i.values.total)));
  check(worstSplit <= 0.10, `g-split: dividing the bill rounded to a multiple of the people is within 10% of the share on every seed (worst ${(worstSplit * 100).toFixed(1)}%)`);
  check(splits.every(i => Math.abs(i.values.total * 100 - Math.round(i.values.total * 100)) < 1e-6), 'g-split: a share is always a whole number of cents');
  check(splits.every(i => !withinTol(i.values.timesPeople, i.values.total, { rel: 0.2 })), 'g-split: the bill times the people is never near the share');
  const right = bundle('g-total-right'), wrong = bundle('g-total-wrong');
  check(right.every(i => i.values.shownText === i.values.totalText && Math.abs(Number(i.values.shownText.slice(1)) - i.values.rough) <= 3), 'g-total-right: the printed total is the real one and a rough sum is within $3 of it');
  const gaps = wrong.map(i => Math.abs(Number(i.values.shownText.slice(1)) - i.values.rough));
  check(Math.min(...gaps) >= 6, `g-total-wrong: a wrong total is at least $6 from the rough sum, so rounding is enough to catch it (closest ${Math.min(...gaps).toFixed(2)})`);
  check(wrong.some(i => i.values.fault === 'digit') && wrong.some(i => i.values.fault === 'missed'), 'g-total-wrong: both kinds of mistake are made');
  check(wrong.every(i => i.deciding[0] === (i.values.fault === 'digit' ? 'tot' : `l${i.values.at + 1}`)), 'g-total-wrong: the deciding line is the total, or the line left out');
  check(wrong.every(i => i.blocks[0].rows.some(r => r.id === i.deciding[0])), 'g-total-wrong: the deciding line is a row of the receipt');
  const missed = wrong.filter(i => i.values.fault === 'missed');
  check(missed.every(i => Math.abs(i.values.off - i.values.mid / 100) < 1e-9), 'g-total-wrong: a left-out line is off by that line');
  check(missed.every(i => i.values.shownText !== i.values.totalText), 'g-total-wrong: the printed total always differs from the real one');
  // the check's short forms are the same questions with the first ask alone
  for (const id of ['g-cart-est', 'g-qty-est', 'g-split-est']) check(at(math, id, 9).asks.length === 1 && at(math, id, 9).asks[0].id === 'est', `${id}: the rough total alone`);
  for (const id of ['g-total-right-v', 'g-total-wrong-v']) check(at(math, id, 9).asks.length === 1 && at(math, id, 9).asks[0].id === 'verdict', `${id}: the verdict alone`);
  check(at(math, 'g-total-wrong-v', 9).steps.every(s => !s.ask || at(math, 'g-total-wrong-v', 9).asks.some(a => a.id === s.ask)), 'g-total-wrong-v: no step is tied to an ask it does not have');
  // the same seed gives the same question
  check(JSON.stringify(at(math, 'g-cart', 77)) === JSON.stringify(at(math, 'g-cart', 77)), 'the same seed gives the same question');
}

/* ---------- the review draws among a topic's generators ---------- */
{
  const { strandInstance } = app, runs = Array.from({ length: 60 }, (_, k) => `run${k}`);
  const kinds = runs.map(run => strandInstance(math, 'math', 'check-total', run, 0, []).inst.item.facets.kind);
  check(kinds.includes('right-total') && kinds.includes('wrong-total'), `the review of printed totals asks right ones and wrong ones (${[...new Set(kinds)].join(', ')})`);
  const wanted = runs.map(run => strandInstance(math, 'math', 'check-total', run, 0, [], { kind: 'wrong-total' }).inst.item.facets.kind);
  check(wanted.every(k => k === 'wrong-total'), 'a retest of a wrong total is asked on a wrong total');
  const rough = runs.map(run => strandInstance(math, 'math', 'ballpark', run, 0, []).inst.key);
  check(new Set(rough).size >= 3, `the review of rough totals draws among the kinds of problem (${[...new Set(rough)].join(', ')})`);
  check(JSON.stringify(strandInstance(math, 'math', 'ballpark', 'a', 0, []).inst) === JSON.stringify(strandInstance(math, 'math', 'ballpark', 'a', 0, []).inst), 'the same run draws the same question');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} number checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} number checks passed`);
