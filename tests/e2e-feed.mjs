// The browser checks of lesson standard 26.7 for articles, the tap and the charts: X15 (the tap ask), X31 (the article block in its four
// forms; new with step 5, 26.10) and the chart half of X20 (the chart and the 1,000-people figure are drawn from their data and the cut
// chart is redrawn from zero; the figure half is in tests/e2e-number.mjs). Each is a function of the environment (e2e-env.mjs) that drives the
// real app in Chromium on the test subject "On the feed" (tests/fixtures/fixture-subject/feed-*.js) and returns its checker.
// tests/e2e-controls.mjs runs each against the app with a seeded fault and requires exactly that check to go red.

const next = page => page.locator('#qNext').click();
const openFeed = async (env, page) => { await env.openSubject(page, 'feed'); await env.clickVisible(page, '#screen [data-l="l1"]'); };
// the steps of the test lesson: 0 the why, 1 what arrives, 2 the charts, 3 the worked story, 4 the group with the lines marked, 5 the group without, 6 the check
const STEP = { articles: 1, pictures: 2, worked: 3, marked: 4, plain: 5, check: 6 };
export const jump = (page, at) => page.evaluate(n => moveLesson(n), at);

// the question in front of the learner: which one, and the asks still open (the tap ask with what it wants)
export const look = page => page.evaluate(() => {
  const inst = Q.list[Q.at], open = openAsks(inst.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a));
  return { key: inst.key, redo: !!inst.redo, done: Q.cur.done, open: open.map(a => ({ id: a.id, kind: a.kind, pick: a.pick || 1, right: a.kind === 'tap' ? tapRightIds(a) : chooseOptions(FC.get(Q.subj.id), a).filter(o => o.ok).map(o => o.id),
    wrong: a.kind === 'tap' ? tapSegments(inst.item, a).map(s => s.id).filter(id => !tapRightIds(a).includes(id)) : chooseOptions(FC.get(Q.subj.id), a).filter(o => !o.ok).map(o => o.id) })) };
});
const tapLine = (page, id) => page.locator(`[data-tap="${id}"]`).click();
// answers the asks open now, one at a time, right (or, with `miss`, the first ask wrong)
export async function answerAll(page, { miss = null } = {}) {
  for (let now = await look(page); now.open.length; now = await look(page)) {
    const ask = now.open[0], pick = miss && miss[ask.id] ? miss[ask.id] : ask.right;
    if (ask.kind === 'tap') {
      if (pick[0] === 'none') await page.locator('[data-tap-none]').click();
      else { for (const id of pick) await tapLine(page, id); if (ask.pick > 1) await page.locator('[data-tap-answer]').click(); }
    } else await page.locator(`[data-ask="${ask.id}"] [data-opt="${pick[0]}"]`).click();
  }
}
const goToGroup = async (env, page, at) => { await openFeed(env, page); await jump(page, at); };

/* ---------- X15: the tap ask ---------- */
async function marked(env, c, page) {
  await goToGroup(env, page, STEP.marked);
  const now = await look(page);
  c.check(now.key === 'n-news' && now.open.length === 1 && now.open[0].kind === 'tap', 'the first question of the marked group does not open with the tap');
  c.check(await page.locator('mark.cue').count() >= 2 && /The words that decide it are marked/.test(await env.screenText(page)), 'help that marks the deciding line did not mark it before the answer');
  c.check(await page.locator('[data-tap]').count() === 3, `${await page.locator('[data-tap]').count()} lines can be tapped, not the 3 of the story (the headline and the other block are not tappable)`);
  c.check(await page.locator('.art-head [data-tap]').count() === 0 && await page.locator('.block-prose [data-tap]').count() === 0, 'the headline, or a block that is not the one named, can be tapped');
  c.check(await page.locator('[data-tap-none]').count() === 1 && /Not given/.test(await page.locator('[data-tap-none]').textContent()), 'the tap has no "Not given" button');
  await tapLine(page, 'a2');   // a wrong line that has a note
  c.check((await look(page)).open[0].id === 'verdict', 'the next ask does not open after the tap');
  c.check(await page.locator('[data-tap]').count() === 0 && await page.locator('.tapped').count() === 1, 'after the tap the lines are still buttons, or the line tapped is not shown as chosen');
  c.check(await page.locator('.mark').count() === 0 && await page.locator('.tapped.wrong, .tapped.right').count() === 0, 'the tap is marked right or wrong before the last ask is answered');
  await answerAll(page);
  const text = await env.screenText(page);
  c.check(await page.locator('.mark.no').count() === 1 && await page.locator('.mark').count() === 2, 'a wrong line and a right verdict are not marked as such');
  c.check(/That is when the line opened, not how many riders there are\./.test(text), 'a wrong line does not show its own note');
  c.check(await page.locator('.tapped.wrong').count() === 1 && await page.locator('mark.cue').count() >= 2, 'the wrong line is not marked wrong, or the lines that decide it are not marked');
  await next(page);
  const again = await look(page);
  c.check(again.redo && again.key === 'n-news', 'a question missed in the tap does not come back');
  await answerAll(page);
  await next(page);
}
async function plain(env, c, page) {
  await env.goOn(page);   // the break
  const first = await look(page);
  c.check(first.key === 'n-post', `the first question without help is ${first.key}`);
  c.check(await page.locator('mark.cue').count() === 0 && await page.locator('.tapped, .tapseg.on').count() === 0, 'a line is marked before the answer');
  c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
  await page.locator('[data-tap-none]').click();   // "Not given": nothing to find
  c.check((await look(page)).open[0].id === 'verdict' && await page.locator('mark.cue').count() === 0, 'the line that decides it is marked before the last ask is answered');
  await answerAll(page);
  c.check(await page.locator('.mark:not(.no)').count() === 2 && await page.locator('.mark.no').count() === 0, '"Not given" when nothing is given is not marked right');
  c.check(await page.locator('.mark .ans').first().textContent() === 'Not given', 'the right answer of a tap with nothing to find is not "Not given"');
  c.check(await page.locator('mark.cue').count() >= 1, 'the line that decides it is not marked after the answer');
  await next(page);
  // two lines to tap, one of them the small print
  const two = await look(page);
  c.check(two.key === 'n-two' && two.open[0].pick === 2, 'the next question does not want two lines');
  const answer = () => page.locator('[data-tap-answer]');
  c.check(await answer().isDisabled(), 'Answer is open before a line is tapped');
  await tapLine(page, 'a1');
  c.check(await answer().isDisabled(), 'Answer is open with one of two lines tapped');
  await tapLine(page, 'a2');
  c.check(await answer().isEnabled(), 'Answer stays shut with two lines tapped');
  await tapLine(page, 'a2');
  c.check(await answer().isDisabled() && await page.locator('.tapseg.on').count() === 1, 'a line tapped twice is not let go');
  await tapLine(page, 'f1');
  await tapLine(page, 'a2');
  c.check(await page.locator('.tapseg.on').count() === 2, 'a third line was taken when two were wanted');
  c.check(await page.locator('.art-fine [data-tap="f1"]').count() === 1, 'the small print cannot be tapped');
  await env.inspect(c, page, 'a tap that wants two lines');
  await answer().click();
  await answerAll(page);
  c.check(await page.locator('.mark:not(.no)').count() === 2 && await page.locator('.mark.no').count() === 0, 'the two right lines are not marked right (the order tapped must not matter)');
  await next(page);
  await answerAll(page);   // n-bars
  await next(page);
  await env.goOn(page);    // the break: on to the check's first screen
}
async function inTheCheck(env, c, page) {
  await env.goOn(page);   // start the check
  await tapLine(page, 'a2');   // this week's number is in the first line; the second is last week's, and carries a named slip
  c.check(await page.locator('.tapseg.on').count() === 1 || await page.locator('.tapped').count() === 1, 'the line tapped in a check is not shown as the learner\'s choice');
  await next(page);
  const text = await env.screenText(page);
  c.check(/0 of 1: not yet/.test(text) && /That is a common slip: tapped the line about something else\./.test(text) && /That is last week’s number\./.test(text), 'a wrong line with a slip is not named in the result of the check');
  const stored = JSON.parse((await env.storage(page))['pl:feed:items'] || '{}');
  const tries = Object.entries(stored).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  const last = tries.find(t => t.key === 'n-last'), many = tries.find(t => t.key === 'n-two'), none = tries.find(t => t.key === 'n-post');
  c.check(!!last && JSON.stringify(last.a.line) === '["a2"]' && last.r.line === 'wrong-line', 'a tap is not stored as the ids of the lines tapped, with its slip as the result');
  c.check(!!many && JSON.stringify([...many.a.line].sort()) === '["a1","f1"]' && many.r.line === 'ok', 'two lines tapped are not stored as two ids');
  c.check(!!none && JSON.stringify(none.a.line) === '["none"]' && none.r.line === 'ok', '"Not given" is not stored as the answer "none"');
}
export async function X15(env) {
  const c = env.checker('X15'), { context, page } = await env.freshPage(c, 390);
  await marked(env, c, page);
  await plain(env, c, page);
  await inTheCheck(env, c, page);
  await context.close();
  return c;
}

/* ---------- X31: the article block ---------- */
const textOf = (page, selector) => page.locator(selector).evaluateAll(els => els.map(e => e.textContent.replace(/\s+/g, ' ').trim()));
async function articlesDrawn(env, c, page, label) {
  const blocks = await page.evaluate(at => FC.get('feed').lessons.l1.flow[at - 1].show, STEP.articles);
  const drawn = await page.evaluate(() => [...document.querySelectorAll('.block-article')].map(a => ({ form: a.dataset.article,
    source: a.querySelector('.art-source').textContent.replace(/\s+/g, ' ').trim(), tag: (a.querySelector('.art-tag') || { textContent: '' }).textContent,
    head: (a.querySelector('.art-head') || { textContent: null }).textContent,
    headFirst: !a.querySelector('.art-head') || !!(a.querySelector('.art-head').compareDocumentPosition(a.querySelector('.art-body')) & Node.DOCUMENT_POSITION_FOLLOWING),
    paragraphs: [...a.querySelectorAll('.art-body > p:not(.art-fine)')].map(p => p.textContent.replace(/\s+/g, ' ').trim()),
    fine: a.querySelector('.art-fine') ? a.querySelector('.art-fine').textContent.trim() : null,
    fineLast: !a.querySelector('.art-fine') || a.querySelector('.art-body').lastElementChild === a.querySelector('.art-fine') })));
  c.check(drawn.length === blocks.length && blocks.every((b, i) => drawn[i] && drawn[i].form === b.form), `${label}: the four forms are not drawn in order (${drawn.map(d => d.form)})`);
  blocks.forEach((b, i) => {
    const d = drawn[i] || {}, body = b.lines.filter(l => !l.fine), fine = b.lines.filter(l => l.fine);
    const paragraphs = body.reduce((out, l, k) => k === 0 || l.para ? [...out, [l.text]] : [...out.slice(0, -1), [...out[out.length - 1], l.text]], []).map(p => p.join(' '));
    c.check(d.source === `${d.tag ? d.tag : ''}${b.source}`.replace(/\s+/g, ' '), `${label}: a ${b.form} does not show where it comes from (${d.source})`);
    c.check(b.headline ? d.head === b.headline.text : d.head === null, `${label}: a ${b.form} ${b.headline ? 'does not show its headline' : 'shows a headline it has not got'}`);
    c.check(d.headFirst, `${label}: the headline of a ${b.form} is not over its text`);
    c.check(JSON.stringify(d.paragraphs) === JSON.stringify(paragraphs), `${label}: a ${b.form} does not draw its lines as its paragraphs (${JSON.stringify(d.paragraphs)})`);
    c.check(fine.length ? d.fine === fine.map(l => l.text).join(' ') && d.fineLast : d.fine === null, `${label}: the small print of a ${b.form} is not drawn last, or is drawn where there is none`);
    c.check(b.form === 'ad' ? d.tag === 'Ad' : b.form === 'report' ? d.tag === 'Report summary' : d.tag === '', `${label}: a ${b.form} carries the wrong tag ("${d.tag}")`);
  });
}
export async function X31(env) {
  const c = env.checker('X31');
  for (const width of [360, 390]) {
    const { context, page } = await env.freshPage(c, width);
    await openFeed(env, page);
    await jump(page, STEP.articles);
    await articlesDrawn(env, c, page, `${width}px the four forms`);
    await env.inspect(c, page, `${width}px the four forms`);
    await jump(page, STEP.worked);
    while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
    c.check(await page.locator('.block-article[data-article="news"] .art-head').count() === 1 && await page.locator('mark.cue').count() >= 2, `${width}px a story in a worked example is not drawn with its headline and its marked lines`);
    await env.inspect(c, page, `${width}px a story with its working`);
    await context.close();
  }
  return c;
}

/* ---------- X20, the chart half: the picture is the data ---------- */
const near = (got, want, tol = 0.6) => Math.abs(got - want) <= tol;
// the axis of one drawn chart in pixels: where the line of each tick is, the labels beside them
const axisOf = (page, figure) => figure.evaluate(el => {
  const svg = el.querySelector('svg'), grid = [...svg.querySelectorAll('.chart-grid')].map(l => l.getBoundingClientRect().top);
  return { bottom: Math.max(...grid), top: Math.min(...grid), ticks: [...svg.querySelectorAll('.chart-tick')].map(t => t.textContent), left: svg.getBoundingClientRect().left, width: svg.getBoundingClientRect().width,
    from: el.dataset.axisFrom, type: el.dataset.chart };
});
async function oneChart(c, page, figure, data, label) {
  const axis = await axisOf(page, figure), y = data.y, span = y.to - y.from;
  const wanted = await page.evaluate(yy => chartTicks(yy).map(v => fmtNumber(v)), y);
  c.check(JSON.stringify(axis.ticks) === JSON.stringify(wanted) && Number(axis.from) === y.from, `${label}: the axis is ${axis.ticks.join(', ')} (from ${axis.from}), the data says ${wanted.join(', ')} (from ${y.from})`);
  c.check(axis.bottom > axis.top, `${label}: the axis has no height`);
  const height = axis.bottom - axis.top;
  const marks = await figure.locator(data.type === 'line' ? '.chart-dot' : '.chart-bar').evaluateAll((els, kind) => els.map(e => {
    const r = e.getBoundingClientRect();
    return { value: Number(e.dataset.value), series: Number(e.dataset.series), top: kind === 'line' ? r.top + r.height / 2 : r.top, bottom: r.bottom, left: r.left, width: r.width };
  }), data.type);
  const count = data.series.length * data.x.length;
  c.check(marks.length === count, `${label}: ${marks.length} ${data.type === 'line' ? 'points' : 'bars'} drawn, ${count} in the data`);
  data.series.forEach((s, k) => s.values.forEach((v, i) => {
    const m = marks.find(x => x.series === k && x.value === v && marks.filter(z => z.series === k).indexOf(x) === i) || { top: 0, bottom: 0 };
    const rise = (axis.bottom - m.top) / height * span;
    c.check(near(rise, v - y.from, span * 0.01), `${label}: ${data.x[i]}${data.series.length > 1 ? ` (${s.name})` : ''} is drawn ${rise.toFixed(2)} above the start of the axis, the data says ${v - y.from} (${v} on an axis from ${y.from})`);
    if (data.type !== 'line') c.check(near(m.bottom, axis.bottom), `${label}: the bar for ${data.x[i]} does not stand on the axis`);
  }));
  if (data.series.length > 1) c.check(await figure.locator('.chart-legend li').count() === data.series.length, `${label}: two series, no legend naming both`);
  if (data.labels) {
    const values = await figure.locator('.chart-value').allTextContents();
    c.check(JSON.stringify([...values].sort()) === JSON.stringify(data.series.flatMap(s => s.values).map(v => v.toLocaleString('en-US')).sort()), `${label}: the values written on the chart are not the data's`);
  }
  c.check((await figure.locator('.chart-title').textContent()) === data.title && /Source:/.test(await figure.locator('.chart-source').textContent()), `${label}: the chart does not show its title and its source`);
  return axis;
}
async function peopleDrawn(c, page, label) {
  const data = await page.evaluate(at => FC.get('feed').lessons.l1.flow[at - 1].show[2].data, STEP.pictures);
  const rows = await page.locator('.block-fig[data-figure="people"] .fig-people-row').evaluateAll(els => els.map(e => ({ people: e.querySelectorAll('.fig-person').length, on: e.querySelectorAll('.fig-person.on').length, text: e.textContent })));
  c.check(rows.length === data.rows.length, `${label}: ${rows.length} rows of people, the data has ${data.rows.length}`);
  data.rows.forEach((r, i) => {
    const got = rows[i] || { people: 0, on: 0, text: '' };
    c.check(got.people === 1000, `${label}: "${r.label}" is drawn with ${got.people} people, not 1,000`);
    c.check(got.on === r.count, `${label}: "${r.label}" has ${got.on} people marked, the data says ${r.count}`);
    c.check(got.text.includes(r.label) && got.text.includes(`${r.count.toLocaleString('en-US')} in 1,000`), `${label}: "${r.label}" is not written as ${r.count} in 1,000`);
  });
}
export async function chartHalf(env, c) {
  const { context, page } = await env.freshPage(c, 390);
  await openFeed(env, page);
  await jump(page, STEP.pictures);
  const charts = await page.evaluate(at => FC.get('feed').lessons.l1.flow[at - 1].show.filter(b => b.kind === 'chart'), STEP.pictures);
  const figures = page.locator('.block-chart');
  c.check(await figures.count() === charts.length, `${await figures.count()} charts drawn, ${charts.length} in the data`);
  for (let i = 0; i < charts.length; i++) {
    c.check((await figures.nth(i).getAttribute('data-chart')) === charts[i].type, `chart ${i + 1}: drawn as ${await figures.nth(i).getAttribute('data-chart')}, the data says ${charts[i].type}`);
    await oneChart(c, page, figures.nth(i), charts[i], `chart ${i + 1}`);
  }
  await peopleDrawn(c, page, 'the people');
  await env.inspect(c, page, 'the charts and the people at 390px');
  // a cut chart is redrawn from zero in the feedback, with the same bars
  await jump(page, STEP.plain);
  await env.goOn(page).catch(() => {});
  for (let k = 0; k < 2; k++) { await answerAll(page); await next(page); }
  const bars = await look(page);
  c.check(bars.key === 'n-bars', `the third question of the group is ${bars.key}, not the chart with a cut axis`);
  c.check(await page.locator('[data-feedback] .block-chart').count() === 0, 'a chart is redrawn before the answer');
  await answerAll(page, { miss: { verdict: ['holds'] } });
  const redrawn = page.locator('[data-feedback] .block-chart');
  c.check(await redrawn.count() === 1, 'the feedback of a cut chart does not redraw it');
  if (await redrawn.count() === 1) {
    const original = await page.evaluate(() => FC.get('feed').items['n-bars'].blocks[1]);
    const zero = await page.evaluate(chart => chartFromZero(chart), original);
    c.check(zero.y.from === 0 && zero.y.to >= original.y.to, 'the redraw is not from zero (the data)');
    await oneChart(c, page, redrawn, { ...zero, type: 'bars' }, 'the chart redrawn from zero');
    c.check((await redrawn.getAttribute('data-axis-from')) === '0', 'the redrawn chart does not start at zero');
    c.check((await page.locator('.block-chart').first().getAttribute('data-axis-from')) === String(original.y.from), 'the chart in the story no longer starts where the data says');
  }
  await context.close();
}

export const FEED_CHECKS = { X15, X31 };
