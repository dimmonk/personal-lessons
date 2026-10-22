// The pure half of step 5 (lesson standard 3, 3.9, 3 to 9): a tap scored, a chart's axis and bars worked out from its data, the cut chart
// redrawn from zero, the 1,000 people, an article laid out. (The numbers and sorting of Statistical Claims are in tests/stats-lessons-pure.mjs.) No browser: the app's scripts
// are loaded as in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/stats-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, scoreItem, scoreTap, tapRightIds, tapSegments, tapPick, tapReady, tapRightText, tapClip, TAP_NONE, tapMissHtml, itemHtml, feedbackHtml, chartTicks, chartAt, chartPlotHeight, chartFromZero, chartProblems,
  chartHtml, chartAlt, niceStep, CHART_PLOT, CHART_MAX_TICKS, figureHtml, articleHtml, blockHtml, segmentsOf, SAY, openAsks, flowSets, flatRefs, refId, checkResult, lastCheck } = app;
const feed = FC.get('feed'), stats = FC.get('stats');
const chartOf = (over = {}) => ({ kind: 'chart', type: 'bars', title: 'T', x: ['A', 'B'], y: { from: 50, to: 60, step: 2, unit: 'u' }, series: [{ values: [52, 58] }], source: 'S', ...over });

/* ---------- a tap is scored on the lines tapped ---------- */
{
  const one = feed.items['n-news'], two = feed.items['n-two'], none = feed.items['n-post'], slipped = feed.items['n-last'];
  const ask = item => item.asks[0];
  same(scoreTap(feed, ask(one), ['a1'], one), 'ok', 'the right line');
  same(scoreTap(feed, ask(one), ['a2'], one), 'no', 'a wrong line with no slip');
  same(scoreTap(feed, ask(one), [TAP_NONE], one), 'no', '"Not given" when a line was there');
  same(scoreTap(feed, ask(none), [TAP_NONE], none), 'ok', '"Not given" when nothing is given');
  same(scoreTap(feed, ask(none), ['a1'], none), 'no', 'a line when nothing is given');
  same(scoreTap(feed, ask(two), ['a1', 'f1'], two), 'ok', 'two right lines');
  same(scoreTap(feed, ask(two), ['f1', 'a1'], two), 'ok', 'two right lines in the other order');
  same(scoreTap(feed, ask(two), ['a1', 'a2'], two), 'no', 'one of two lines wrong');
  same(scoreTap(feed, ask(two), ['a1'], two), 'no', 'one of two lines missing');
  same(scoreTap(feed, ask(slipped), ['a2'], slipped), 'wrong-line', 'a wrong line that names a slip');
  same(scoreTap(feed, ask(slipped), ['a1'], slipped), 'ok', 'a line with a sibling that names a slip');
  same([tapPick(ask(one)), tapPick(ask(two))], [1, 2], 'how many lines a tap wants');
  same(tapRightIds(ask(none)), [TAP_NONE], 'the right answer of "none"');
  check(tapReady(ask(two), ['a1', 'f1']) && !tapReady(ask(two), ['a1']) && tapReady(ask(one), ['a1']), 'Answer is ready only with as many lines as are wanted');
  // only the lines of the named block, never the headline
  same(tapSegments(one, ask(one)).map(s => s.id), ['a1', 'a2', 'a3'], 'the lines of the block named, without the headline and without the other block');
  same(tapSegments(two, ask(two)).map(s => s.id), ['a1', 'a2', 'f1'], 'the small print can be tapped');
  same(segmentsOf(one.blocks[0]).map(s => s.id), ['h', 'a1', 'a2', 'a3'], 'the headline is a segment that can be marked');
  same(tapRightText(ask(one), one), 'The transit office counted 12% more riders this spring than last.', 'the answer in words: the line');
  same(tapRightText(ask(none), none), 'Not given', 'the answer in words: the button');
  check(tapClip('a'.repeat(200)).length <= 81 && tapClip('short') === 'short', 'a long line is cut for the line about a miss');
  // a try is right when every ask is
  same(scoreItem(feed, one, null, { line: ['a1'], verdict: 'holds' }).ok, true, 'a question with a tap, all right');
  same(scoreItem(feed, one, null, { line: ['a2'], verdict: 'holds' }).r, { line: 'no', verdict: 'ok' }, 'a question with a tap, the tap wrong');
  // what is said after a miss
  const miss = tapMissHtml(feed, ask(slipped), ['a2'], slipped);
  check(miss.includes('That is last week’s number.') && miss.includes('That is a common slip: tapped the line about something else.') && miss.includes('You tapped'), 'a wrong line says its note and its slip');
  check(tapMissHtml(feed, ask(one), ['a3'], one).includes(SAY.tapNotThat), 'a wrong line with nothing to say says that it is not the sentence');
  check(tapMissHtml(feed, ask(one), [TAP_NONE], one).includes(SAY.tapThereIsOne), '"Not given" when a line was there says there is one');
  check(tapMissHtml(feed, ask(one), ['a1'], one) === '', 'nothing is said about a right line');
}

/* ---------- the tap on screen: lines are buttons only while the ask is open; nothing is marked early ---------- */
{
  const one = feed.items['n-news'], inst = { key: 'n-news', item: one };
  const html = (a, extra = {}) => itemHtml(feed, inst, { a, many: {}, marks: false, support: null, ...extra });
  const open = html({});
  check((open.match(/data-tap="/g) || []).length === 3 && /data-tap-none/.test(open), 'three lines and "Not given" can be tapped when the tap is open');
  check(!/mark class="cue"/.test(open) && !/tapped/.test(open), 'nothing is marked before the answer');
  check(!/data-tap="h"/.test(open) && !/data-tap="b1"/.test(open), 'the headline and the other block are not buttons');
  const help = html({}, { support: { shown: true } });
  check((help.match(/mark class="cue"/g) || []).length === 2 && /The words that decide it are marked/.test(help), 'the deciding words are marked at the start when the help says so');
  const locked = html({ line: ['a2'] });
  check(!/data-tap="/.test(locked) && /tapped/.test(locked) && !/tapped (right|wrong)/.test(locked), 'a tap answered in a check is shown as chosen, not as right or wrong');
  const marked = itemHtml(feed, inst, { a: { line: ['a2'], verdict: 'holds' }, many: {}, marks: true, support: null,
    feedback: feedbackHtml(feed, inst, null, { line: ['a2'], verdict: 'holds' }, scoreItem(feed, one, null, { line: ['a2'], verdict: 'holds' })) });
  check(/tapped wrong/.test(marked) && /mark class="cue" data-seg="a1"/.test(marked), 'the wrong line is marked wrong and the right one is marked after the answer');
  const withTwo = itemHtml(feed, { key: 'n-two', item: feed.items['n-two'] }, { a: {}, many: { line: ['a1'] }, marks: false, support: null });
  check(/aria-pressed="true"/.test(withTwo) && /data-tap-answer\s+disabled/.test(withTwo), 'a line tapped of two wanted is shown chosen, and Answer is shut');
}

/* ---------- a chart: the axis, the bars, the points ---------- */
{
  same(chartTicks({ from: 50, to: 60, step: 2 }), [50, 52, 54, 56, 58, 60], 'the ticks of a cut axis');
  same(chartTicks({ from: 0, to: 1, step: 0.25 }), [0, 0.25, 0.5, 0.75, 1], 'the ticks of a fractional step');
  const y = { from: 50, to: 60, step: 2 }, high = chartPlotHeight();
  check(chartAt(y, 50) === CHART_PLOT.y1 && chartAt(y, 60) === CHART_PLOT.y0, 'the start of the axis is the bottom of the plot and its top the top');
  check(Math.abs(CHART_PLOT.y1 - chartAt(y, 55) - high / 2) < 1e-9, 'the middle of the axis is the middle of the plot');
  // a bar on a cut axis starts at the start of the axis, not at zero: 52 on 50..60 is a fifth as tall as the plot
  const html = chartHtml(chartOf());
  const bars = [...html.matchAll(/<rect class="chart-bar s0" x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)" data-value="(\d+)"/g)].map(m => ({ y: Number(m[2]), height: Number(m[4]), value: Number(m[5]) }));
  same(bars.map(b => b.value), [52, 58], 'a bar for each value');
  check(bars.every(b => Math.abs(b.height - (b.value - 50) / 10 * high) < 1e-6 && Math.abs(b.y + b.height - CHART_PLOT.y1) < 1e-6), 'a bar is as tall as its value is far above the start of the axis, and stands on it');
  check(/data-axis-from="50"/.test(html) && /Source: S/.test(html) && /The scale starts at 50\./.test(html), 'the chart says where its axis starts and where it comes from');
  const line = chartHtml(chartOf({ type: 'line', series: [{ name: 'This', values: [52, 58] }, { name: 'Last', values: [51, 55] }] }));
  check((line.match(/<polyline/g) || []).length === 2 && (line.match(/class="chart-dot s\d"/g) || []).length === 4 && /chart-legend/.test(line), 'a line for each series, a dot for each value, and a legend for two');
  const labelled = chartHtml(chartOf({ labels: true }));
  check((labelled.match(/class="chart-value"/g) || []).length === 2, 'the values are written on the chart when it says so');
  check(chartAlt(chartOf()).includes('A 52, B 58') && chartAlt(chartOf()).includes('Bar chart: T.'), 'the picture is described in words');
  // the same chart from zero: the top rounded up to a whole tick, at most as many ticks as allowed
  const zero = chartFromZero(chartOf());
  same([zero.y.from, zero.y.step, zero.y.to], [0, 20, 60], 'a cut chart from zero: 0 to 60 in steps of 20');
  same([chartFromZero(chartOf({ y: { from: 66, to: 70, step: 1 } })).y.to, chartFromZero(chartOf({ y: { from: 66, to: 70, step: 1 } })).y.step], [80, 20], '66 to 70 redrawn from zero reaches 80');
  check([[0, 70], [3, 10], [12, 97], [40, 1000]].every(([from, to]) => chartTicks(chartFromZero(chartOf({ y: { from, to: Math.max(to, from + 2), step: 1 } })).y).length <= CHART_MAX_TICKS), 'a chart redrawn from zero never has more ticks than allowed');
  check(niceStep(70) === 20 && niceStep(10) === 5 && niceStep(1000) === 500 && niceStep(4) === 1, 'steps are 1, 2 or 5 times a power of ten');
  // what is wrong with a chart's data
  const wrong = over => chartProblems(chartOf(over)).join(' | ');
  check(chartProblems(chartOf()).length === 0, 'a good chart has nothing wrong with it');
  check(/off the axis/.test(wrong({ series: [{ values: [52, 80] }] })), 'a value above the top of the axis is refused');
  check(/off the axis/.test(wrong({ series: [{ values: [40, 58] }] })), 'a value below the start of the axis is refused');
  check(/whole number of steps/.test(wrong({ y: { from: 50, to: 61, step: 2 } })), 'a top that is not a whole number of steps is refused');
  check(/ticks, over/.test(wrong({ y: { from: 0, to: 100, step: 1 } })), 'an axis with too many ticks is refused');
  check(/values for/.test(wrong({ series: [{ name: 'a', values: [52] }] })), 'a series with the wrong number of values is refused');
  check(/wider than the space/.test(wrong({ x: ['The members of the clubs', 'B'] })), 'a label too wide for its space is refused');
  check(/names both/.test(wrong({ series: [{ values: [52, 58] }, { name: 'b', values: [51, 55] }] })), 'two series that are not both named are refused');
  check(/at most 2 series/.test(wrong({ series: [{ name: 'a', values: [52, 58] }, { name: 'b', values: [52, 58] }, { name: 'c', values: [52, 58] }] })), 'three series are refused');
  // the charts of Stats and of the test subject are all good
  const charts = [stats, feed].flatMap(sub => [...Object.values(sub.items).flatMap(i => i.blocks), ...Object.values(sub.lessons).flatMap(l => l.flow.flatMap(s => s.show || []))]).filter(b => b.kind === 'chart');
  check(charts.length >= 5 && charts.every(b => chartProblems(b).length === 0), 'every chart shipped, and every chart of the test subject, is good');
}

/* ---------- the 1,000 people ---------- */
{
  const rows = [{ label: 'Without', count: 5 }, { label: 'With', count: 0 }, { label: 'All', count: 1000 }];
  const html = figureHtml({ kind: 'figure', type: 'people', data: { caption: 'Out of 1,000 people', rows } });
  const parts = html.split('class="fig-people-row"').slice(1);
  same(parts.map(p => (p.match(/class="fig-person/g) || []).length), [1000, 1000, 1000], 'every row is 1,000 people');
  same(parts.map(p => (p.match(/class="fig-person on"/g) || []).length), [5, 0, 1000], 'each row has as many people marked as its count');
  check(/Without: 5 in 1,000/.test(html) && /All: 1,000 in 1,000/.test(html) && /With: 0 in 1,000/.test(html), 'each row says its count in 1,000');
  // the marked people come first, read left to right and top to bottom
  const first = [...parts[0].matchAll(/<circle class="fig-person( on)?" cx="([\d.]+)" cy="([\d.]+)"/g)];
  check(first.slice(0, 5).every(m => m[1]) && !first[5][1] && Number(first[0][2]) < Number(first[1][2]) && Number(first[50][3]) > Number(first[0][3]), 'the marked people are the first ones, read left to right and top to bottom');
}

/* ---------- an article ---------- */
{
  const block = { kind: 'article', form: 'ad', source: 'Maker', headline: { id: 'h', text: 'Headline' }, lines: [{ id: 'a', text: 'One.' }, { id: 'b', text: 'Two.', para: true }, { id: 'f', text: 'Small print.', fine: true }, { id: 'c', text: 'Three.' }] };
  const html = articleHtml(block, { deciding: ['a'] });
  check(html.indexOf('art-head') < html.indexOf('art-body') && html.indexOf('Two.') < html.indexOf('art-fine') && html.lastIndexOf('<p') === html.indexOf('<p class="art-fine"'), 'the headline is over the text and the small print is last');
  check((html.match(/<p>/g) || []).length === 2 && html.includes('One.') && html.includes('Three.') && html.indexOf('Three.') < html.indexOf('Small print.'), 'a line that starts a paragraph starts one, and the small print is gathered last');
  check(/Ad<\/span>Maker/.test(html) && /mark class="cue" data-seg="a"/.test(html), 'an ad is marked as an ad, and a deciding line is marked');
  check(!/art-head/.test(articleHtml({ ...block, form: 'post', headline: undefined }, {})) && /Report summary/.test(articleHtml({ ...block, form: 'report' }, {})), 'a post has no headline, and a report is marked as one');
  check(blockHtml({ kind: 'chart', ...chartOf() }, {}).includes('block-chart'), 'a chart is a block');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} article and chart checks failed:`);
  failures.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} article and chart checks passed`);
