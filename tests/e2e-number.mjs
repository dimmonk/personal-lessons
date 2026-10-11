// The browser checks of lesson standard 26.7 for typed numbers, documents and figures: X13 (the number ask) and X20 (the drawn figures and
// documents match their data). Each is a function of the environment (e2e-env.mjs) that drives the real app in Chromium on the test subject
// "At the till" (tests/fixtures/fixture-subject/till-*.js) and returns its checker. tests/e2e-controls.mjs runs each against the app with a
// seeded fault and requires exactly that check to go red. (X20 is the figure half of the standard's X20; the chart half is built with Stats.)
import * as D from './e2e-number-drive.mjs';

const openIn = async (env, page, subject, lesson) => { await env.openSubject(page, subject); await env.clickVisible(page, `#screen [data-l="${lesson}"]`); };
const next = page => page.locator('#qNext').click();
// from the why of the test lesson to its first group of questions: the why, two teaching screens, the worked example
const throughTeaching = async (env, page) => { await env.goOn(page); await env.goOn(page); await env.goOn(page); await env.workedExample(page); };

/* ---------- X13: the number ask ---------- */
async function recipeInside(env, c, page) {
  const first = await D.current(page);
  c.check(first.key === 't-recipe', `the first question of the group is "${first.key}", not the recipe`);
  c.check(await page.locator('[data-ask="cups"] .numbox').count() === 2, 'a frame with two blanks does not make two boxes');
  await page.locator('[data-ask="cups"] .numbox').nth(0).fill('3.5');
  c.check(await D.answerButton(page, 'cups').isDisabled(), 'Answer is open with a blank still empty');
  await page.locator('[data-ask="cups"] .numbox').nth(1).fill('about one');
  c.check(await D.answerButton(page, 'cups').isDisabled(), 'Answer is open for words');
  await page.locator('[data-ask="cups"] .numbox').nth(1).fill('1');
  c.check(await D.answerButton(page, 'cups').isEnabled(), 'Answer stays shut with a number in every blank');
  await env.inspect(c, page, '360px a question with two blanks');
  await D.answerButton(page, 'cups').click();
  // 3.5 for 3 and 1 for 1.5 are each exactly half a cup away: the edge of the tolerance is inside it
  c.check(await page.locator('.mark').count() === 1 && await page.locator('.mark.no').count() === 0, 'answers exactly at the edge of the tolerance are not scored right');
  await next(page);
}
async function cartSlip(env, c, page) {
  let now = await D.current(page);
  const total = now.values.total;
  c.check(now.key === 't-cart' && now.open.length === 1 && now.open[0].id === 'est' && now.open[0].estimate, 'the estimate box does not come first');
  c.check(await page.locator('[data-calc], [data-calc-toggle]').count() === 0, 'the estimate has a calculator');
  c.check(await page.locator('[data-ask="exact"]').count() === 0, 'the exact answer is on screen before the estimate is typed');
  const guess = Number(D.cents(total * 1.19));   // 19% over: inside a fifth
  await D.typeAnswer(page, 'est', [guess]);
  now = await D.current(page);
  c.check(now.open.length === 1 && now.open[0].id === 'exact', 'the exact answer does not open after the estimate');
  c.check(await page.locator('[data-calc-toggle]').count() === 1, 'the exact answer has no calculator');
  c.check(await D.activeIsBox(page), 'the cursor is not in the next box after an answer');
  await D.openCalculator(page);
  await D.pressKeys(page, ['1', '2', '.', '5', '*', '2', '=']);
  c.check(await D.calcDisplay(page) === '25', `the calculator shows ${await D.calcDisplay(page)} for 12.5 × 2`);
  await page.locator('[data-calc-use]').click();
  c.check(await D.boxes(page, 'exact').first().inputValue() === '25', 'the calculator did not put its number in the box');
  await env.inspect(c, page, '360px the calculator open');
  // the slip: the total without the roast
  const slip = now.values.noRoast;
  await D.typeIn(page, 'exact', [D.cents(slip)]);
  await D.answerButton(page, 'exact').click();
  const prompted = await D.disagreeShown(page), far = Number(D.cents(slip)) < guess / 2;
  c.check(prompted === far, `the estimate and the answer ${far ? 'disagree and no line says so' : 'agree and a line says they disagree'}`);
  if (prompted) {
    c.check(!(await D.current(page)).done, 'the answer was scored while the disagree line was showing');
    c.check(/disagree/.test(await env.screenText(page)), 'the line does not say the estimate and the answer disagree');
    await D.answerButton(page, 'exact').click();
  }
  c.check(await D.feedbackShown(page), 'no feedback after the last answer');
  const text = await env.screenText(page);
  c.check(/You typed \$/.test(text) && /roast chicken is left out/.test(text), 'the slip does not print its own line');
  c.check(/so you were 19% over/.test(text), 'the estimate does not say how far off it was');
  c.check(await page.locator('.mark.no').count() === 1 && await page.locator('.mark:not(.no)').count() === 1, 'a right estimate with a slipped answer does not show one right and one wrong');
  await env.inspect(c, page, '360px a slip named in the feedback');
  await next(page);
}
async function cartWild(env, c, page) {
  const now = await D.current(page), total = now.values.total;
  await D.typeAnswer(page, 'est', [D.cents(total * 1.3)]);   // 30% over: outside a fifth
  await D.typeIn(page, 'exact', [D.cents(total * 3)]);       // more than double the estimate (3 / 1.3)
  await D.answerButton(page, 'exact').click();
  c.check(await D.disagreeShown(page), 'an answer more than double the estimate is not held back in practice');
  c.check(!(await D.current(page)).done, 'a held-back answer was scored');
  await env.inspect(c, page, '360px the disagree line');
  await D.answerButton(page, 'exact').click();   // after looking again, the learner keeps it
  c.check(await D.feedbackShown(page) && await page.locator('.mark.no').count() === 2, 'looking again and keeping the answer did not score it wrong');
  c.check(/so you were 30% over/.test(await env.screenText(page)), 'a wild estimate does not say how far off it was');
  await next(page);
}
// every question that comes back, answered right
async function finishGroup(page, onEach) {
  const seen = [];
  while (await page.locator('#qNext').count()) {
    const now = await D.current(page);
    seen.push(now);
    if (onEach) await onEach(now);
    for (let open = now.open[0]; open; open = (await D.current(page)).open[0]) {
      if (open.id === 'est') await D.typeAnswer(page, 'est', [D.cents(now.values.total)]);
      else if (open.id === 'exact') await D.typeAnswer(page, 'exact', [D.cents(now.values.total)]);
      else if (open.id === 'pay') await D.typeAnswer(page, 'pay', ['18']);
      else await D.typeAnswer(page, open.id, now.key === 'c-recipe' ? ['8', '4'] : ['3', '1.5']);
    }
    await next(page);
  }
  return seen;
}

export async function X13(env) {
  const c = env.checker('X13'), { context, page } = await env.freshPage(c, 360);
  await openIn(env, page, 'till', 'l1');
  await throughTeaching(env, page);
  await recipeInside(env, c, page);
  await cartSlip(env, c, page);
  await cartWild(env, c, page);
  const redone = await finishGroup(page);
  c.check(redone.length === 2 && redone.every(q => q.redo), `the two misses did not both come back (${redone.map(q => q.key).join(', ')})`);
  await env.goOn(page);   // the break
  // steps left to the learner: the first step shown as worked, the first ask given, only the last asked; a trap on a fixed question
  const leave = await D.current(page);
  c.check(leave.key === 't-leave' && leave.open.length === 1 && leave.open[0].id === 'pay', 'a group that leaves the last step opens more than the last ask');
  c.check((await env.screenText(page)).includes('$24 ÷ 4 = $6.') && !(await env.screenText(page)).includes('$24 − $6 = $18.'), 'the worked steps shown are not exactly those before the last');
  await D.typeAnswer(page, 'pay', ['6']);
  c.check(/amount that comes off, not what you pay/.test(await env.screenText(page)), 'a trap on a fixed question does not print its line');
  await next(page);
  await finishGroup(page);
  await env.goOn(page);
  // no help on: the disagree line never shows
  const plain = await D.current(page);
  await D.typeAnswer(page, 'est', [D.cents(plain.values.total)]);
  await D.typeIn(page, 'exact', [D.cents(plain.values.total * 4)]);
  await D.answerButton(page, 'exact').click();
  const held = await D.disagreeShown(page);
  c.check(!held, 'a group with no help held an answer back');
  if (held) await D.answerButton(page, 'exact').click();
  c.check(await D.feedbackShown(page), 'a group with no help gave no feedback after the last answer');
  await next(page);
  await finishGroup(page);
  await env.goOn(page);   // the break
  // the check: never held back, and nothing shown until the end
  await env.goOn(page);   // the check's first screen
  for (let i = 0; i < 3; i++) {
    const now = await D.current(page);
    if (now.key === 'c-recipe') await D.typeAnswer(page, 'cups', ['8', '4']);
    else {
      await D.typeAnswer(page, 'est', [D.cents(now.values.total)]);
      await D.typeIn(page, 'exact', [D.cents(now.values.total * 4)]);
      await D.answerButton(page, 'exact').click();
      const held = await D.disagreeShown(page);
      c.check(!held, `check question ${i + 1}: the disagree line shows in a check`);
      if (held) await D.answerButton(page, 'exact').click();
    }
    c.check(await page.locator('#qNext').isEnabled(), `check question ${i + 1}: Next is shut after the last answer`);
    await next(page);
  }
  c.check(/\d of 3: (passed|not yet)/.test(await env.screenText(page)), 'the check does not end with its result');
  // the record: numbers typed, and results that are ok, no or a slip
  const items = JSON.parse((await env.storage(page))['pl:till:items'] || '{}'), tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  c.check(tries.length >= 10 && tries.every(t => Object.values(t.a).every(v => Array.isArray(v) && v.every(x => typeof x === 'number'))), 'a typed answer is not stored as the list of numbers typed');
  c.check(tries.every(t => Object.values(t.r).every(r => ['ok', 'no', 'left-out', 'point'].includes(r))), 'a result is not ok, no or the id of a slip');
  c.check(tries.some(t => t.r.exact === 'left-out') && tries.some(t => t.r.est === 'no') && tries.filter(t => t.key === 't-cart').every(t => typeof t.seed === 'number'), 'the slip, the missed estimate and the seed of each made question are not in the record');
  await context.close();
  return c;
}

/* ---------- X20: the pictures drawn are the pictures described ---------- */
const near = (got, want, tol = 0.01) => Math.abs(got - want) <= tol;
export async function X20(env) {
  const c = env.checker('X20'), { context, page } = await env.freshPage(c, 390);
  await openIn(env, page, 'till', 'l1');
  await env.goOn(page);   // the why
  // documents: the title and the cells of every row are the data's
  const docs = await page.evaluate(() => FC.get('till').lessons.l1.flow[0].show);
  const drawn = await page.evaluate(() => [...document.querySelectorAll('.block-doc')].map(d => ({ form: d.dataset.document, title: d.querySelector('.doc-title').textContent,
    rows: [...d.querySelectorAll('tr')].map(r => [...r.querySelectorAll('td')].map(td => td.textContent)), notes: [...d.querySelectorAll('.doc-note')].map(n => n.textContent) })));
  c.check(drawn.length === docs.length, `${drawn.length} documents drawn, ${docs.length} in the data`);
  docs.forEach((doc, i) => {
    const got = drawn[i] || {};
    c.check(got.form === doc.form && got.title === doc.title, `document ${i + 1} is drawn as ${got.form} "${got.title}", not ${doc.form} "${doc.title}"`);
    c.check(JSON.stringify(got.rows) === JSON.stringify(doc.rows.map(r => r.cells)), `document ${i + 1}: the cells drawn are not the data's`);
    c.check(JSON.stringify(got.notes) === JSON.stringify(doc.notes || []), `document ${i + 1}: the notes drawn are not the data's`);
  });
  await env.inspect(c, page, 'the documents');
  await env.goOn(page);
  const figs = await page.evaluate(() => FC.get('till').lessons.l1.flow[1].show);
  const block = type => page.locator(`.block-fig[data-figure="${type}"]`);
  // the rate table: two rows, the labels and cells as given
  const rate = figs.find(f => f.type === 'rate-table').data;
  const rateRows = await block('rate-table').locator('tr').evaluateAll(rows => rows.map(r => [...r.children].map(x => x.textContent)));
  c.check(JSON.stringify(rateRows) === JSON.stringify([[rate.top.label, ...rate.top.cells], [rate.bottom.label, ...rate.bottom.cells]]), 'the rate table is not the two rows of the data');
  // the 100% bar: each part as wide as its percent of the whole bar, side by side, from the left edge
  const bar = figs.find(f => f.type === 'bar').data;
  const shape = await block('bar').locator('svg').evaluate(svg => ({ width: svg.getBoundingClientRect().width, left: svg.getBoundingClientRect().left,
    rects: [...svg.querySelectorAll('rect')].map(r => ({ width: r.getBoundingClientRect().width, left: r.getBoundingClientRect().left })) }));
  let x = 0;
  c.check(shape.rects.length === bar.parts.length, 'the bar is not drawn in as many parts as the data has');
  bar.parts.forEach((p, i) => {
    const r = shape.rects[i] || { width: 0, left: 0 };
    c.check(near(r.width / shape.width, p.pct / 100) && near((r.left - shape.left) / shape.width, x / 100), `the part "${p.label}" is drawn ${(r.width / shape.width * 100).toFixed(1)}% wide from ${((r.left - shape.left) / shape.width * 100).toFixed(1)}%, the data says ${p.pct}% from ${x}%`);
    x += p.pct;
  });
  c.check((await block('bar').textContent()).includes('You pay: 75%') && (await block('bar').textContent()).includes('0%') && (await block('bar').textContent()).includes('100%'), 'the bar does not say what each part is, or its ends');
  // the plan: one scale for every side, and the measurements written
  const plan = figs.find(f => f.type === 'plan').data;
  const rooms = await block('plan').locator('rect').evaluateAll(rects => rects.map(r => ({ width: r.getBoundingClientRect().width, height: r.getBoundingClientRect().height, cut: r.classList.contains('cut') })));
  c.check(rooms.length === plan.parts.length, 'the plan is not drawn in as many shapes as the data has');
  plan.parts.forEach((p, i) => {
    const r = rooms[i] || { width: 0, height: 0 };
    c.check(near(r.width / rooms[0].width, p.w / plan.parts[0].w, 0.02) && near(r.height / rooms[0].height, p.h / plan.parts[0].h, 0.02) && near(r.width / r.height, p.w / p.h, 0.02), `shape ${i + 1} of the plan is not to the scale of the first`);
    c.check(r.cut === !!p.cut, `shape ${i + 1} of the plan is ${r.cut ? 'drawn cut out' : 'not drawn cut out'}, the data says ${p.cut ? 'cut out' : 'not'}`);
  });
  const written = await block('plan').textContent();
  plan.parts.forEach(p => c.check(written.includes(`${p.w} ${plan.unit}`) && written.includes(`${p.h} ${plan.unit}`), `the plan does not write ${p.w} ${plan.unit} by ${p.h} ${plan.unit}`));
  // the year table: its header and a row for each year, as given
  const years = figs.find(f => f.type === 'years').data;
  const table = await block('years').locator('tr').evaluateAll(rows => rows.map(r => [...r.children].map(x => x.textContent)));
  c.check(JSON.stringify(table) === JSON.stringify([years.columns, ...years.rows]), 'the year table is not the data');
  await env.inspect(c, page, 'the figures');
  await context.close();
  return c;
}

export const NUMBER_CHECKS = { X13, X20 };
