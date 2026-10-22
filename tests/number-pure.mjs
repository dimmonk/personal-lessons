// The pure half of the typed number (lesson standard 3, 4, step 3): what is typed, tolerances, slips, the estimate and its "disagree" line,
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
check(withinTol(20.22, 121.35 / 6, { round: 0.01 }) && withinTol(20.23, 121.35 / 6, { round: 0.01 }) && !withinTol(20.21, 121.35 / 6, { round: 0.01 }) && !withinTol(20.24, 121.35 / 6, { round: 0.01 }), 'an answer exactly half a cent is right rounded either way, and only so');
check(withinTol(25, 20, { rel: 0.25 }) && !withinTol(25.1, 20, { rel: 0.25 }) && withinTol(15, 20, { rel: 0.25 }) && !withinTol(14.9, 20, { rel: 0.25 }), 'a tolerance by share is closed at its edge');
check(withinTol(5.5, 5, { abs: 0.5 }) && !withinTol(5.6, 5, { abs: 0.5 }), 'a tolerance by distance');
check(withinTol(3, 2.5, { abs: 0.1, rel: 0.25 }) && withinTol(2.45, 2.5, { abs: 0.1, rel: 0.01 }) && !withinTol(4, 2.5, { abs: 0.1, rel: 0.25 }), 'abs and rel together: either is enough');
check(withinTol(50, 100, { band: [0.5, 2] }) && withinTol(200, 100, { band: [0.5, 2] }) && !withinTol(49.9, 100, { band: [0.5, 2] }) && !withinTol(200.1, 100, { band: [0.5, 2] }), 'half to double');
check(withinTol(0, 0, { rel: 0.2 }) && !withinTol(0.1, 0, { rel: 0.2 }), 'zero is only itself under a share');

/* ---------- scoring a made question, its slips, a miss ---------- */
{
  const item = at(till, 't-cart', 3), exact = (({ wild, ...plain }) => plain)(ask(item, 'exact')), est = ask(item, 'est'), total = item.values.total;
  same(scoreNumber(till, exact, [total], item), 'ok', 'the exact total is right');
  same(scoreNumber(till, exact, [Math.round(total * 100 + 1) / 100], item), 'no', 'a cent off is wrong');
  same(scoreNumber(till, exact, [item.values.noRoast], item), 'left-out', 'the total without the roast is the named slip');
  same(scoreNumber(till, exact, [item.values.tenfold], item), 'point', 'ten times the total is the decimal-point slip');
  same(scoreNumber(till, exact, [7], item), 'no', 'a number that matches nothing is just wrong');
  same(scoreNumber(till, { ...exact, traps: [], wild: 'point' }, [total * 3], item), 'point', 'a miss more than double the answer carries the ask\'s wild slip');
  same(scoreNumber(till, { ...exact, traps: [], wild: 'point' }, [total * 0.4], item), 'point', 'and one less than half');
  same(scoreNumber(till, { ...exact, traps: [], wild: 'point' }, [total * 1.5], item), 'no', 'a miss within half to double is a plain miss');
  same(scoreNumber(till, { ...exact, wild: 'left-out' }, [item.values.tenfold], item), 'left-out', 'an answer ten times too big is wild, though it is also a named slip');
  same(scoreNumber(till, { ...exact, wild: 'point' }, [item.values.noRoast], item), item.values.noRoast < total / 2 ? 'point' : 'left-out', 'a named slip within half to double keeps its name');
  check(/decimal point/.test(app.numberMissHtml(till, { ...exact, wild: 'left-out', traps: [{ slip: 'point', value: 'tenfold', then: 'The decimal point is one place off.' }] }, [item.values.tenfold], 'left-out', item)), 'the feedback of a wild answer that is a named slip still names the slip');
  same(scoreNumber(till, exact, [total, total], item), 'no', 'two numbers in one blank are wrong');
  same(scoreNumber(till, est, [total * 1.19], item), 'ok', 'an estimate 19% over is right');
  const estTrap = { ...est, traps: [{ slip: 'left-out', value: 'nearby' }] }, near = { ...item, values: { ...item.values, nearby: total * 1.1 } };
  same(scoreNumber(till, estTrap, [total * 1.12], near), 'left-out', 'a rough answer nearer a named slip inside the band is that slip');
  same(scoreNumber(till, estTrap, [total * 1.02], near), 'ok', 'a rough answer nearer the answer is right, a slip in the band or not');
  check(/left a line out|nearby/.test(app.numberMissHtml(till, estTrap, [total * 1.12], 'left-out', near)) && app.numberMissHtml(till, estTrap, [total * 1.5], 'no', near) === '', 'a rough answer decided by a named slip says so; a plain miss says nothing more');
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
  // the keys an ask may add (calc): the power key, the square root, the memory
  same(run('2 pow 1 0 =').shown, '1024', '2 to the power 10');
  same(run('1 . 0 5 pow 1 0 =').shown, '1.62889462678', '1.05 to the power 10, as savings grow for ten years');
  same(run('1 0 0 0 * 1 . 0 5 pow 3 =').shown, '1157625000', 'one operation at a time: 1000 × 1.05 first, then that to the power 3');
  same(run('1 . 0 5 pow 3 * 1 0 0 0 =').shown, '1157.625', 'so the power is typed first: 1.05 to the power 3, then × 1000');
  same(run('1 4 4 sqrt').shown, '12', 'the square root of 144');
  same(run('9 + 1 6 sqrt =').shown, '13', 'a square root is a number for the sum it is in: 9 + √16');
  same(run('1 4 4 sqrt 5').shown, '5', 'a digit after a square root starts a new number');
  same(run('2 sqrt').shown, '1.41421356237', 'a square root cut to twelve figures');
  same(run('5 - 9 = sqrt').shown, 'Error', 'no square root of a number below zero');
  same(run('5 * 1 1 . 0 9 M+ 3 * 9 . 0 9 M+ MR').shown, '82.72', 'M+ finishes each line and adds it; MR shows the sum (5 × 11.09 + 3 × 9.09)');
  same(run('5 * 2 M+ C MR').shown, '10', 'clearing the display keeps the memory');
  same(run('5 M+ MC MR').shown, '0', 'MC empties the memory');
  same(run('4 M+ 6 M+ MR + 1 =').shown, '11', 'a recalled number is a number for a sum');
  same(run('3 M+ 1 / 0 = MR').shown, '3', 'an error keeps the memory');
  same(run('5 M+').mem, 5, 'the memory is a number');
  same(app.calcExtraKeys({ calc: ['mem', 'pow'] }), ['pow', 'MC', 'MR', 'M+'], 'the extra keys, in their one order');
  same(app.calcExtraKeys({}), [], 'an ask with no extra keys has the four');
}

/* ---------- the screen of a typed number ---------- */
{
  const item = at(till, 't-cart', 5), est = ask(item, 'est'), exact = ask(item, 'exact');
  const inst = { item }, ctx = { item, support: null, answers: {} };
  const calc = { open: false, st: CALC_START };
  const estimateScreen = numberHtml(till, est, { calc }, ctx), exactScreen = numberHtml(till, exact, { calc }, ctx);
  check(['pow', 'sqrt', 'MC', 'MR', 'M+'].every(k => exactScreen.includes(`data-calc-key="${k}"`)) && /class="calc-grid calc-more"/.test(exactScreen), 'an ask that adds keys draws them in a row of their own');
  check(!/calc-more/.test(numberHtml(till, { ...exact, calc: undefined }, { calc }, ctx)), 'an ask with no extra keys has the four alone');
  check(/data-calc-mem[^>]*hidden/.test(exactScreen) && !/data-calc-mem[^>]*hidden/.test(numberHtml(till, exact, { calc: { open: true, st: { ...CALC_START, mem: 4 } } }, ctx)), 'the M shows only while the memory holds a number');
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
  // circles and right triangles in a plan, to the scale of the rectangles beside them
  const shapes = figureHtml({ kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: 10, h: 8 }, { shape: 'circle', x: 1, y: 1, r: 3, label: 'Rug' },
    { shape: 'triangle', x: 12, y: 0, w: 2, h: 8, say: { w: '?', slant: '10 ft ladder' } }, { shape: 'circle', x: 7, y: 4, r: 2, across: true }] } });
  const room = shapes.match(/<rect class="fig-room [^"]*" x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)"/).slice(1).map(Number);
  const circles = [...shapes.matchAll(/<circle class="fig-room [^"]*" cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)"/g)].map(m => m.slice(1).map(Number));
  const scale = room[2] / 10;
  check(circles.length === 2 && Math.abs(circles[0][2] - 3 * scale) < 0.02 && Math.abs(circles[0][0] - (room[0] + 4 * scale)) < 0.02, 'a circle is drawn round its middle with its radius to the plan\'s scale');
  const tri = shapes.match(/<polygon class="fig-room [^"]*" points="([^"]+)"/)[1].split(' ').map(p => p.split(',').map(Number));
  check(tri.length === 3 && tri[0][0] === tri[1][0] && tri[1][1] === tri[2][1] && Math.abs((tri[2][0] - tri[1][0]) - 2 * scale) < 0.02 && Math.abs((tri[1][1] - tri[0][1]) - 8 * scale) < 0.02,
    'a right triangle is drawn upright side and flat side meeting at the bottom left, to scale');
  check(/>3 ft</.test(shapes) && />4 ft</.test(shapes) && />\?</.test(shapes) && />10 ft ladder</.test(shapes) && />8 ft</.test(shapes) && />Rug</.test(shapes), 'the radius, the distance across, the words for a side and the slant are written');
  check(!/>2 ft<\/text><text[^>]*>8 ft/.test(shapes.split('<polygon')[1].split('<circle')[0]), 'a side with words in its place does not also write its number');
  check(/aria-label="10 by 8 ft, a circle of radius 3 ft, a right triangle \? by 8 ft, the slant 10 ft ladder, a circle 4 ft across"/.test(shapes), 'the plan says its shapes in words, a side with words by its words');
  const tall = figureHtml({ kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: 4, h: 16 }] } });
  check(Number(tall.match(/viewBox="0 0 300 (\d+)"/)[1]) <= 300, 'a tall plan is drawn no taller than the room the screen has for it');
  const rate = figureHtml({ kind: 'figure', type: 'rate-table', data: { top: { label: 'People', cells: ['4', '6'] }, bottom: { label: 'Cups', cells: ['2', '?'] } } });
  check((rate.match(/<tr>/g) || []).length === 2 && rate.includes('>?<'), 'a rate table has two rows and a blank to fill');
  const years = figureHtml({ kind: 'figure', type: 'years', data: { columns: ['Year', 'Balance'], rows: [['1', '$1,050'], ['2', '$1,102.50']] } });
  check((years.match(/<tr>/g) || []).length === 3 && years.includes('$1,102.50'), 'a year table has its header and a row for each year');
}

/* ---------- Math: the numbers its questions are made of (lessons 1 to 8) ---------- */
{
  const seeds = Array.from({ length: 400 }, (_, k) => k + 1), rel = (a, b) => Math.abs(a - b) / Math.abs(b);
  const bundle = id => seeds.map(seed => at(math, id, seed));
  const money = text => Number(String(text).replace(/[$,]/g, ''));
  const worst = (items, f) => Math.max(...items.map(f));
  // lesson 1: rough totals, a bill's subtotal
  for (const id of ['g-cart', 'g-qty']) {
    const items = bundle(id), w = worst(items, i => rel(i.values.rough, i.values.ans));
    check(w <= 0.15, `${id}: rounding each price to the nearest dollar is within 15% of the total on every seed (worst ${(w * 100).toFixed(1)}%)`);
    check(new Set(items.map(i => i.values.totalText)).size > 100, `${id}: 400 seeds make more than 100 different totals`);
    check(items.every(i => !ask(i, 'est').traps.some(t => withinTol(i.values[t.value], i.values.ans, { rel: 0.2 }))), `${id}: the slip is never inside the estimate's 20%`);
  }
  const carts = bundle('g-cart').map(i => i.values.ans);
  check(Math.max(...carts) / Math.min(...carts) > 2.5, 'g-cart: carts range widely, so one flat guess cannot pass two rough totals (the pilot review, fix 5)');
  check(bundle('g-qty').every(i => (ask(i, 'exact').calc || []).includes('mem') && /M\+/.test(i.steps.find(s => s.id === 'exact').working)), 'g-qty: the order is added line by line with the memory, as its working says (the pilot review, fix 1)');
  const qty = at(math, 'g-qty', 2), keys = qty.values.memKeys.split(', ').flatMap(line => line.replace(' M+', '').split(' ').concat('M+').map(k => k === '×' ? '*' : k)).flatMap(k => k === 'M+' || k === '*' ? [k] : k.split(''));
  same(calcPress(keys.reduce(calcPress, CALC_START), 'MR').shown, String(qty.values.ans), 'g-qty: the keys its working names give its total on the calculator');
  const splits = bundle('g-split');
  check(worst(splits, i => rel(i.values.rough, i.values.ans)) <= 0.10, 'g-split: the bill rounded to a multiple of the people is within 10% of the share');
  check(splits.every(i => !withinTol(i.values.timesPeople, i.values.ans, { rel: 0.2 })), 'g-split: the bill times the people is never near the share');
  const right = bundle('g-total-right'), wrong = bundle('g-total-wrong');
  check(right.every(i => i.values.subText === i.values.totalText && Math.abs(money(i.values.subText) - i.values.rough) <= 3), 'g-total-right: the subtotal is the lines\' sum and a rough sum is within $3 of it');
  const gaps = wrong.map(i => Math.abs(money(i.values.subText) - i.values.rough));
  check(Math.min(...gaps) >= 3.5 && gaps.some(g => g < 8), `g-total-wrong: a wrong subtotal is more than the taught $3 from the rough sum, some only just (closest ${Math.min(...gaps).toFixed(2)})`);
  check([...right, ...wrong].every(i => Math.abs(money(i.values.subText) + money(i.values.taxText) - money(i.values.allText)) < 0.005), 'a bill\'s total is its subtotal plus its tax');
  check(wrong.some(i => i.values.fault === 'digit') && wrong.some(i => i.values.fault === 'missed'), 'g-total-wrong: both kinds of mistake are made');
  check(wrong.every(i => i.deciding[0] === (i.values.fault === 'digit' ? 'sub' : `l${i.values.at + 1}`) && i.blocks[0].rows.some(r => r.id === i.deciding[0])), 'g-total-wrong: the deciding line is the subtotal, or the line left out');
  check(wrong.filter(i => i.values.fault === 'missed').every(i => Math.abs(i.values.off - i.values.mid / 100) < 1e-9), 'g-total-wrong: a left-out line is off by that line');
  for (const id of ['g-cart-est', 'g-qty-est', 'g-split-est', 'g-times-est', 'g-share-est', 'g-part-est']) check(at(math, id, 9).asks.length === 1 && at(math, id, 9).asks[0].id === 'est', `${id}: the rough answer alone`);
  for (const id of ['g-total-right-v', 'g-total-wrong-v']) check(at(math, id, 9).asks.length === 1 && at(math, id, 9).asks[0].id === 'verdict' && at(math, id, 9).steps.every(s => !s.ask || s.ask === 'verdict'), `${id}: the verdict alone`);
  // lesson 2: the friendly answer alone is within a fifth on every seed, so the check's rule can be met by the moves taught
  for (const id of ['g-times', 'g-share', 'g-part']) {
    const w = worst(bundle(id), i => rel(i.values.rough, i.values.ans));
    check(w <= 0.2, `${id}: the friendly answer is within a fifth of the exact one on every seed (worst ${(w * 100).toFixed(1)}%)`);
  }
  // every made problem of lessons 3 to 8: its rough answer within half to double, every trap away from the answer, the steps in the way of thinking's order
  const MADE = ['g-sum', 'g-taxi-fee', 'g-taxi-rate', 'g-phone-fee', 'g-phone-rate', 'g-gym-fee', 'g-gym-rate', 'g-truck-fee', 'g-truck-rate', 'g-beans-fee', 'g-beans-rate', 'g-deal', 'g-recipe', 'g-currency', 'g-map', 'g-units', 'g-tip', 'g-share-pct', 'g-change', 'g-raise', 'g-sale', 'g-before-off', 'g-before-tax', 'g-off-tax', 'g-up-down', 'g-points', 'g-was',
    'g-paint', 'g-floor', 'g-carpet', 'g-edging', 'g-rug', 'g-planter', 'g-round-bed', 'g-mulch'];
  const ORDER = ['given', 'decide', 'friendly', 'rough', 'setup', 'exact'];
  for (const id of MADE) {
    const items = bundle(id);
    const w = worst(items, i => rel(i.values.rough, app.numberAnswers(i, ask(i, 'est'))[0]));
    check(w <= 0.2 + 1e-9, `${id}: the rough answer of the working is within a fifth on every seed, the one rule taught (worst ${(w * 100).toFixed(1)}%)`);
    check(items.every(i => withinTol(ask(i, 'est').tol.rel, 0.2, { abs: 1e-9 }) && ask(i, 'exact').wild === 'wild'), `${id}: its rough answer is scored within a fifth, and a wild exact answer is named`);
    check(items.every(i => i.steps.every(s => !/[×÷+−]\s*\(|\)\s*[×÷]/.test(s.working))), `${id}: no working asks for brackets the calculator does not have`);
    check(items.every(i => i.values.ans > 0 && Number.isFinite(i.values.ans)), `${id}: the answer is a number above zero`);
    const ids = items[0].steps.map(s => s.id).filter(s => ORDER.includes(s));
    check(JSON.stringify(ids) === JSON.stringify(ORDER.filter(s => ids.includes(s))) && items[0].steps[0].id === 'given', `${id}: the steps follow the way of thinking (${ids.join(', ')})`);
  }
  // lesson 4: the fixed part makes the cost less than scaling the whole; with no fixed part, the cost is the first cost scaled
  for (const id of ['g-taxi', 'g-phone', 'g-gym', 'g-truck', 'g-beans']) {
    check(bundle(`${id}-fee`).every(i => i.values.ans < i.values.scaledAll - 0.01 && i.asks[0].right === 'fixed'), `${id}-fee: less than the whole scaled, and "it does not scale" is right`);
    check(bundle(`${id}-rate`).every(i => Math.abs(i.values.ans - money(i.values.costText) * i.values.b / i.values.a) < 0.011 && i.asks[0].right === 'scales'), `${id}-rate: the first cost scaled, and "it scales" is right`);
  }
  // lesson 6: up and down by the same percent ends lower than it started
  check(bundle('g-up-down').every(i => i.values.ans < i.values.same), 'g-up-down: up and down by one percent always ends lower');
  // lessons 7 and 8: what to buy is the need rounded up, and the need is never whole, so rounding down is always a real slip
  for (const [id, count] of [['g-paint', 'cans'], ['g-floor', 'boxes'], ['g-edging', 'rolls'], ['g-planter', 'bags'], ['g-round-bed', 'bags']]) {
    check(bundle(id).every(i => i.values[count] === Math.ceil(i.values.need) && !Number.isInteger(i.values.need) && i.values.short === i.values[count] - 1), `${id}: the ${count} are the need rounded up, and the need is never whole`);
  }
  // the check's buying questions tell rounding up from rounding to the nearest: with fr 'low' the need's fraction is under a half
  for (const [id, need] of [['g-planter', i => i.values.need], ['g-round-bed', i => i.values.need], ['g-mulch', i => i.values.ans * 2]]) {
    const low = seeds.map(seed => itemFromGen(math.gens[id], seed, { fr: 'low' }));
    check(low.every(i => { const f = need(i) - Math.floor(need(i)); return f > 0 && f < 0.5; }), `${id}: with fr low, rounding to the nearest would buy too little on every seed`);
  }
  check(bundle('g-paint').every(i => i.values.oneCoat !== i.values.short), 'g-paint: one coat rounded up is never two coats rounded down, so each slip is named right');
  check(bundle('g-edging').every(i => i.values.area !== i.values.around), 'g-edging: the area never equals the distance around, so the slip can be told apart');
  for (const [id, a] of [['g-paint', 'cans'], ['g-floor', 'boxes'], ['g-edging', 'rolls'], ['g-planter', 'bags'], ['g-round-bed', 'bags'], ['g-mulch', 'order']]) {
    const i = at(math, id, 5), q = ask(i, a);
    same(scoreNumber(math, q, [i.values[a] - 0.4], i), 'no', `${id}: what to buy is only right rounded up exactly, not near it`);
  }
  // the parameters every generator draws give more than one value (a list of three is not a range that sticks on its first)
  for (const [id, g] of Object.entries(math.gens)) for (const [name, def] of Object.entries(g.params || {})) {
    if (app.isRangeParam(def)) check(def[2] <= def[1] - def[0] + 1e-9 || def[0] === def[1], `${id}.${name}: ${JSON.stringify(def)} gives one value only`);
  }
  check(bundle('g-mulch').every(i => i.values.order >= i.values.ans && i.values.order - i.values.ans < 0.5 && !Number.isInteger(i.values.ans * 2)), 'g-mulch: the order is the next half yard up');
  check(bundle('g-rug').every(i => Math.abs(i.values.ans - 3.14 * i.values.r * i.values.r) < 1e-9 && withinTol(Math.PI * i.values.r ** 2, i.values.ans, { rel: 0.01 })), 'g-rug: 3.14 or the calculator\'s π are both right');
  // the worked problems: each a fixed question whose rough answer is shown as the rough answer, not the exact one
  for (const [id, rough] of [['w-receipt', 28], ['w-times', 3200], ['w-recipe', 1.5], ['w-currency', 182], ['w-taxi', 24], ['w-tip', 12], ['w-before', 84], ['w-paint', 430], ['w-planter', 9.6]]) {
    const w = math.items[id];
    check(!!w && (rough === null || ask(w, 'est').answer === rough), `${id}: the worked problem is there, its rough answer ${rough}`);
  }
  check(JSON.stringify(at(math, 'g-cart', 77)) === JSON.stringify(at(math, 'g-cart', 77)), 'the same seed gives the same question');
}

/* ---------- Math: lessons 9 to 15 ---------- */
{
  const seeds = Array.from({ length: 400 }, (_, k) => k + 1), rel = (a, b) => Math.abs(a - b) / Math.abs(b);
  const bundle = id => seeds.map(seed => at(math, id, seed));
  const LATER = ['g-reach', 'g-ladder-long', 'g-pizza', 'g-scale-volume', 'g-save-add', 'g-save-pct', 'g-rent-add', 'g-rent-pct', 'g-how-long', 'g-car-loan', 'g-card-month',
    'g-pay-later', 'g-buses', 'g-gift-bags', 'g-hot-dogs', 'g-schedule', 'g-outfits', 'g-lock', 'g-at-least', 'g-test', 'g-celsius', 'g-plans', 'g-square-bed',
    'g-paint-cost', 'g-fuel', 'g-tip-split'];
  // the buttons a working prints ("4 × 4 M+ 16 × 16 − MR = √"), pressed one at a time on the app's calculator
  const FACE = { '×': '*', '÷': '/', '−': '-', 'xʸ': 'pow', '√': 'sqrt' };
  const press = text => text.split(' ').flatMap(t => FACE[t] ? [FACE[t]] : ['+', 'M+', 'MR', '='].includes(t) ? [t] : t.split('')).reduce(calcPress, CALC_START);
  const ORDER = ['given', 'decide', 'rough', 'first', 'setup', 'exact'];
  for (const id of LATER) {
    const items = bundle(id), est = items[0].asks.some(a => a.id === 'est');
    if (est) {
      const w = Math.max(...items.map(i => rel(i.values.rough, numberAnswers(i, ask(i, 'est'))[0])));
      check(w <= 0.2 + 1e-9, `${id}: the rough answer of the working is within a fifth on every seed (worst ${(w * 100).toFixed(1)}%)`);
      check(items.every(i => withinTol(ask(i, 'est').tol.rel, 0.2, { abs: 1e-9 })), `${id}: its rough answer is scored within a fifth`);
    }
    check(items.every(i => ask(i, 'exact').wild === 'wild'), `${id}: a wild exact answer is named`);
    const wrong = items.flatMap(i => Object.keys(i.values).filter(k => /^keys\d*$/.test(k)).filter(k => rel(Number(press(i.values[k]).shown), i.values[`${k}Gives`]) > 1e-9).map(k => `${i.seed} ${i.values[k]}`));
    check(wrong.length === 0, `${id}: the buttons its working prints give its numbers on the calculator (${wrong.slice(0, 2).join('; ')})`);
    check(items.every(i => i.steps.every(s => !/[×÷+−]\s*\(|\)\s*[×÷]/.test(s.working))), `${id}: no working asks for brackets the calculator does not have`);
    const ids = items[0].steps.map(s => s.id).filter(s => ORDER.includes(s));
    check(JSON.stringify(ids) === JSON.stringify(ORDER.filter(s => ids.includes(s))) && items[0].steps[0].id === 'given', `${id}: the steps follow the way of thinking (${ids.join(', ')})`);
    for (const [name, def] of Object.entries(math.gens[id].params)) check(new Set(items.map(i => i.values[name])).size > 1, `${id}.${name}: ${JSON.stringify(def)} draws one value only`);
  }
  // lesson 9: the ladder is the longest side, and the safe foot is a quarter of it
  check(bundle('g-reach').every(i => i.values.ans < i.values.L && i.values.f === i.values.L / 4), 'g-reach: the top reaches less than the ladder, with the foot a quarter of it out');
  check(bundle('g-ladder-long').every(i => i.values.ans > i.values.H && Math.abs(i.values.d - i.values.ans / 4) <= 0.25), 'g-ladder-long: the ladder is longer than the height, with the foot about a quarter of the ladder out');
  check(bundle('g-pizza').every(i => Math.abs(i.values.ans - (i.values.g / i.values.s) ** 2) < 1e-9), 'g-pizza: the area grows by the width\'s number times itself');
  // lesson 10: a percent a year multiplies, a dollar amount adds; the goal is reached in the first year it is there
  check(bundle('g-save-pct').every(i => i.asks[0].right === 'multiplies') && bundle('g-rent-add').every(i => i.asks[0].right === 'adds'), 'g-save, g-rent: a percent multiplies and a dollar amount adds');
  const money = text => Number(String(text).replace(/[$,]/g, ''));
  check(bundle('g-how-long').every(i => i.values.keysGives >= money(i.values.TText) - 1e-6 && i.values.keys2Gives < money(i.values.TText)), 'g-how-long: the answer is the first whole year the savings reach the goal');
  const years = bundle('g-how-long').map(i => i.values.n), by72 = bundle('g-how-long').filter(i => i.values.n === Math.round(72 / i.values.r)).length;
  check(new Set(years).size >= 10 && by72 < 100, `g-how-long: many answers (${new Set(years).size}), and 72 ÷ the rate is the answer on few seeds (${by72} of 400)`);
  // lesson 11: a loan's cost is the payments less the amount
  check(bundle('g-car-loan').every(i => Math.abs(i.values.ans - (i.values.M * i.values.n - i.values.B)) < 1e-6 && i.values.ans > 0), 'g-car-loan: the cost is the payments less the amount borrowed');
  // lesson 12: rounding up is needed (the last bus less than half full), the groups and the packs are the greatest and the least
  check(bundle('g-buses').every(i => i.values.last > 0 && i.values.last < i.values.c / 2 && i.values.ans === Math.ceil(i.values.S / i.values.c) && i.values.empty !== i.values.last), 'g-buses: the last bus is less than half full, so rounding to the nearest would leave people behind');
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  check(bundle('g-gift-bags').every(i => i.values.ans === gcd(i.values.A, i.values.B)), 'g-gift-bags: the most bags is the biggest number that divides both');
  check(['g-hot-dogs', 'g-schedule'].every(id => bundle(id).every(i => i.values.ans === i.values.a * i.values.b / gcd(i.values.a, i.values.b) && i.values.product !== i.values.ans)), 'g-hot-dogs, g-schedule: the answer is the smallest number both divide, and the product is not it');
  // lesson 13: counted in 1,000 people
  check(bundle('g-test').every(i => i.values.pos === i.values.tp + i.values.fpR && i.values.ans < i.values.s), 'g-test: the positives are counted, and the chance is below the test\'s rate');
  check(bundle('g-at-least').every(i => Math.abs(i.values.win + i.values.lose - 1000) < 1e-9), 'g-at-least: those who win at least once and those who win nothing make 1,000');
  // lesson 14: the formula backward, the plans equal at the answer, the square's corner
  check(bundle('g-celsius').every(i => Math.abs(1.8 * i.values.ans + 32 - i.values.F) < 1e-9), 'g-celsius: the answer put back in the formula gives the °F');
  check(bundle('g-plans').every(i => Math.abs(i.values.r * i.values.x - (i.values.fee + i.values.s * i.values.x)) < 1e-9 && i.values.use !== i.values.x && i.values.use >= 1), 'g-plans: the two plans cost the same at the answer');
  check(bundle('g-square-bed').every(i => Math.abs(i.values.ans ** 2 + 2 * i.values.w * i.values.ans - i.values.T) < 1e-6), 'g-square-bed: the bed and its two paths cover the area given');
  // lesson 15: less than half a can over, so the cans must be rounded up; the rough cans are the exact ones
  check(bundle('g-paint-cost').every(i => { const n = numberAnswers(i, { answer: 'cans' })[0], need = Number(i.values.needText.replace(/,/g, '')); return n === Math.ceil(need) && need - Math.floor(need) < 0.5; }), 'g-paint-cost: less than half a can is over, and the cans are rounded up');
  // answers by a careful route are right too: the gallons to two decimals, the tip rounded to the cent; the counts of people are whole
  check(bundle('g-fuel').every(i => scoreNumber(math, ask(i, 'exact'), [Math.round(Math.round(i.values.gal * 100) / 100 * i.values.p * 100) / 100], i) === 'ok'), 'g-fuel: the gallons to two decimals, times the price, is right');
  check(bundle('g-tip-split').every(i => scoreNumber(math, ask(i, 'exact'), [Math.round((money(i.values.allText) + Math.round(i.values.tip * 100) / 100) / i.values.n * 100) / 100], i) === 'ok'), 'g-tip-split: the tip rounded to the cent first is right');
  check(bundle('g-test').every(i => Number.isInteger(i.values.tp) && Number.isInteger(i.values.fpR)), 'g-test: every count of people is whole, so counting and working without rounding agree');
  check(bundle('g-buses').every(i => i.values.last >= 2), 'g-buses: at least 2 people ride the last bus');
  // the worked problems' rough answers, shown as rough answers
  for (const [id, rough] of [['w-reach', 15], ['w-pizza', 1.7], ['w-save', 10000], ['w-car-loan', 3760], ['w-buses', 4.6], ['w-test', 23], ['w-celsius', 25.5], ['w-paint-cost', 125]]) {
    check(!!math.items[id] && ask(math.items[id], 'est').answer === rough, `${id}: the worked problem is there, its rough answer ${rough}`);
  }
  // a figure drawn from a made question: a rectangle's sides in words, and 1,000 people with a count from the question's text
  const bed = figureHtml({ kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: 10, h: 10, label: 'Bed', say: { w: '?', h: '?' } }] } });
  check(/>\?</.test(bed) && !/10 ft/.test(bed), 'a rectangle with words for its sides writes the words, not the numbers, on the plan and in its words for a screen reader');
  const crowd = figureHtml({ kind: 'figure', type: 'people', data: { caption: 'Of 1,000', rows: [{ label: 'Positive', count: '59' }] } });
  check((crowd.match(/fig-person on/g) || []).length === 59 && /59 in 1,000/.test(crowd), 'a count made by a question draws that many people');
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

/* ---------- no made answer by pattern: no answer of a Math generator lands on one value on more than 40% of 2,000 seeds ---------- */
{
  const SHARE = 0.4, seeds = Array.from({ length: 2000 }, (_, k) => k + 1);
  for (const [id, gen] of Object.entries(math.gens)) {
    const counts = {};
    seeds.forEach(seed => { const i = itemFromGen(gen, seed); i.asks.filter(a => a.kind === 'number' && !a.estimate).forEach(a => {
      const k = `${a.id} ${numberAnswers(i, a).map(v => Math.round(v * 100) / 100).join(' ')}`; counts[k] = (counts[k] || 0) + 1; }); });
    const [top, n] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || ['', 0];
    check(n <= SHARE * seeds.length, `${id}: the answer "${top}" comes on ${n} of ${seeds.length} seeds, more than ${SHARE * 100}%`);
  }
  // paint: the cans spread over 4, 5 and 6 (two coats) and 2, 3 and 4 (lesson 15); edging over 1, 2 and 3 rolls
  for (const [id, a, want] of [['g-paint', 'cans', [4, 5, 6]], ['g-paint-cost', 'cans', [2, 3, 4]], ['g-edging', 'rolls', [1, 2, 3]]]) {
    const got = new Set(seeds.slice(0, 400).map(seed => numberAnswers(itemFromGen(math.gens[id], seed), { answer: a })[0]));
    check(want.every(v => got.has(v)), `${id}: the ${a} are each of ${want.join(', ')} on some seed (${[...got].join(', ')})`);
  }
}

/* ---------- a check never asks numbers already met: fresh seeds skip a question with the same numbers as one tried or already drawn ---------- */
{
  const { freshSeed, refInstances, recordTry, genValues } = app, gen = math.gens['g-schedule'], key = seed => JSON.stringify(genValues(gen, seed));
  const plain = freshSeed('math', 'g-schedule', 'runA', 3);
  same(freshSeed('math', 'g-schedule', 'runA', 3, math), plain, 'with nothing met yet, the seed is the one it always was');
  // practice: the learner meets six of the twelve timetables
  const practice = refInstances(math, 'math', { gen: 'g-schedule', n: 6 }, 'practice', 0, new Map()).map(i => i.seed);
  practice.forEach(seed => recordTry('math', 'g-schedule', { run: 'practice', lesson: 'l12', rev: 1, context: 'practice', sup: false, seed, a: {}, r: {}, ok: true }));
  const met = new Set(practice.map(key));
  check(met.size === 6, `six practice questions with different numbers (${met.size})`);
  // the check: six more of the same generator, none with numbers met in practice or drawn twice
  const drawn = refInstances(math, 'math', { gen: 'g-schedule', n: 6 }, 'check', 0, new Map());
  const keys = drawn.map(i => JSON.stringify(i.item.values));
  check(keys.every(k => !met.has(k)) && new Set(keys).size === 6, 'a check draws no timetable met in practice, and none twice');
  same(refInstances(math, 'math', { gen: 'g-schedule', n: 6 }, 'check', 0, new Map()).map(i => i.seed), drawn.map(i => i.seed), 'the same run draws the same check');
  // all twelve met: there is no new one, so it falls back to an unused seed rather than never ending
  const more = refInstances(math, 'math', { gen: 'g-schedule', n: 6 }, 'more', 0, new Map());
  more.forEach(i => recordTry('math', 'g-schedule', { run: 'more', lesson: 'l12', rev: 1, context: 'check', sup: false, seed: i.seed, a: {}, r: {}, ok: true }));
  const last = freshSeed('math', 'g-schedule', 'later', 0, math);
  check(Number.isInteger(last) && !practice.includes(last), 'with every timetable met, an unused seed is still given');
}

// its seeded fault: an app whose fresh seeds ignore the numbers met asks a timetable from practice again in its check, and the scenario sees it
{
  const scenario = async (a) => {
    const m = a.FC.get('math'), seen = a.refInstances(m, 'math', { gen: 'g-schedule', n: 6 }, 'practice', 0, new Map());
    seen.forEach(i => a.recordTry('math', 'g-schedule', { run: 'practice', lesson: 'l12', rev: 1, context: 'practice', sup: false, seed: i.seed, a: {}, r: {}, ok: true }));
    const met = new Set(seen.map(i => JSON.stringify(i.item.values)));
    return a.refInstances(m, 'math', { gen: 'g-schedule', n: 6 }, 'check', 0, new Map()).every(i => !met.has(JSON.stringify(i.item.values)));
  };
  const FAULT = ['    if(!met.has(key)){ if(taken) taken.add(key); return seed; }', '    return seed;'];
  const faulty = await loadApp({ fixture: true, seed: (src, text) => src === 'app/lessons/schedule.js' ? (text.includes(FAULT[0]) ? text.replace(FAULT[0], FAULT[1]) : 'throw new Error("the seeded fault\'s text is not in schedule.js")') : text });
  check(await scenario(await loadApp({ fixture: true })), 'the check scenario holds on the app as it is');
  check(!(await scenario(faulty)), 'the seeded fault (fresh seeds that ignore the numbers met) turns the check scenario red');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} number checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} number checks passed`);
