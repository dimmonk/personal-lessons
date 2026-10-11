/* ===================== LESSONS: THE NUMBERS OF A CHART ===================== */
// Lesson standard 26.1.2 (the `chart` block). Pure: where the axis starts, where each tick, bar and point is drawn, and what is wrong
// with a chart's data. The view (chart-view.js), the validator and the tests all read the picture from here, so the axis a learner sees
// is the axis the data says. Nothing here reads the page.
//   chart { kind: 'chart', type: 'bars' | 'line', title, x: [label], y: { from, to, step, unit }, series: [{ name, values: [number] }],
//           source, labels?: true }
//   A cut axis is a `y.from` above 0: bars then start at the axis, not at zero, and the picture says what the learner reads off it.

const CHART_BOX = { w: 300, h: 190, left: 42, right: 10, top: 22, bottom: 30 };
const CHART_PLOT = { x0: CHART_BOX.left, x1: CHART_BOX.w - CHART_BOX.right, y0: CHART_BOX.top, y1: CHART_BOX.h - CHART_BOX.bottom };
const CHART_MAX_TICKS = 10;
const CHART_MAX_SERIES = 2;
const CHART_LABEL_CHAR_PX = 6.6;   // the width of one character of an axis label, in the units of the box

const roundTick = v => Math.round(v * 1e9) / 1e9;
function chartTicks(y){
  const n = Math.round((y.to - y.from) / y.step);
  return Array.from({ length: n + 1 }, (_, i) => roundTick(y.from + i * y.step));
}
// the height on the page of a value, in the units of the box (the bottom of the plot is the axis start)
const chartPlotHeight = () => CHART_PLOT.y1 - CHART_PLOT.y0;
const chartAt = (y, value) => CHART_PLOT.y1 - (value - y.from) / (y.to - y.from) * chartPlotHeight();
const chartBand = chart => (CHART_PLOT.x1 - CHART_PLOT.x0) / chart.x.length;

// about four ticks across a span, at 1, 2 or 5 times a power of ten
function niceStep(span){
  const raw = span / 4, power = 10 ** Math.floor(Math.log10(raw)), f = raw / power;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * power;
}
// The same chart with its axis drawn from zero (the feedback of a chart that was cut), the top rounded up to a whole tick.
function chartFromZero(chart){
  const step = niceStep(chart.y.to);
  return { ...chart, y: { ...chart.y, from: 0, step, to: Math.ceil(chart.y.to / step - 1e-9) * step } };
}
const chartIsCut = chart => chart.y.from > 0;

// what the picture says, in words, for a screen reader
function chartAlt(chart){
  const what = chart.type === 'line' ? 'Line chart' : 'Bar chart';
  const per = chart.series.map(s => `${s.name ? `${s.name}: ` : ''}${chart.x.map((label, i) => `${label} ${fmtNumber(s.values[i])}`).join(', ')}`).join('. ');
  return `${what}: ${chart.title}. ${per}. The scale starts at ${fmtNumber(chart.y.from)}.`;
}

// Everything wrong with a chart's data, in words: [string]. The validator reads this; a chart that fails is never drawn.
function chartProblems(chart){
  const problems = [], y = chart.y;
  if(!(y.step > 0) || !(y.to > y.from)) return ['the axis needs a step above 0 and a top above its start'];
  const ticks = Math.round((y.to - y.from) / y.step);
  if(Math.abs(ticks * y.step - (y.to - y.from)) > 1e-9) problems.push('the axis top is not a whole number of steps above its start');
  if(ticks + 1 > CHART_MAX_TICKS) problems.push(`the axis has ${ticks + 1} ticks, over ${CHART_MAX_TICKS}`);
  if(chart.x.length < 2 || chart.x.length > 8) problems.push('a chart has two to eight places along the bottom');
  if(chart.series.length > CHART_MAX_SERIES) problems.push(`a chart has at most ${CHART_MAX_SERIES} series`);
  chart.series.forEach(s => {
    if(s.values.length !== chart.x.length) problems.push(`the series "${s.name}" has ${s.values.length} values for ${chart.x.length} places`);
    s.values.filter(v => v < y.from || v > y.to).forEach(v => problems.push(`the value ${v} is off the axis (${y.from} to ${y.to})`));
  });
  if(chart.series.length > 1 && chart.series.some(s => !s.name)) problems.push('a chart with two series names both');
  const room = chartBand(chart);
  chart.x.filter(label => label.length * CHART_LABEL_CHAR_PX > room).forEach(label => problems.push(`the label "${label}" is wider than the space under its bar`));
  return problems;
}
