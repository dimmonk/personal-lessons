// The browser check of lesson standard 9 for a group of places made into questions: X47. It drives the real app in Chromium on lesson 2 of the test subject
// "Atlas of the isles" (tests/fixtures/fixture-subject/atlas-places.js, atlas-l2.lesson.js): a lesson's group of places in two forms, a check drawn from
// the group with its split fixed by form, and a review that asks the group on the place missed. X46 owns the map and the place ask themselves; this
// asserts what the group adds, and (tests/e2e-fit.mjs) what a phone's screen holds of a question asked on a map, on Geography's lesson 16. tests/e2e-controls.mjs runs it against the app with a seeded fault and requires exactly that check to go red.

import { fitChecks } from './e2e-fit.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
const MAP = '[data-map-ask] .mapsvg';
const STEP = { sets: 2, names: 3, check: 4 };   // the steps of lesson 2: 0 the why, 1 the labelled map, 2 and 3 the groups, 4 the check
const jump = (page, at) => page.evaluate(n => moveLesson(n), at);
const next = page => page.locator('#qNext').click();
// where a tap lands on each place of the test region, and on a neighbor of each (and the sea that touches it)
const AT = { alder: [85, 35], birch: [215, 70], cedar: [85, 70], speck: [201, 141], sea: [150, 190] };
const NEXT_TO = { alder: [215, 70], birch: [30, 30], cedar: [30, 30] };
const FORMS = ['tap', 'name', 'flag', 'border'];

const screenOf = (page, x, y) => page.evaluate(([x, y]) => {
  const svg = document.querySelector('[data-map-ask] .mapsvg'), p = svg.createSVGPoint();
  p.x = x; p.y = y;
  const s = p.matrixTransform(svg.getScreenCTM());
  return [s.x, s.y];
}, [x, y]);
const tapAt = async (page, [x, y]) => { await page.locator(MAP).scrollIntoViewIfNeeded(); const [px, py] = await screenOf(page, x, y); await page.mouse.click(px, py); };
const look = page => page.evaluate(() => ({ key: Q.list[Q.at].key, redo: !!Q.list[Q.at].redo, seed: Q.list[Q.at].seed, ...Q.list[Q.at].item.values, done: Q.cur.done, r: Q.cur.score ? Q.cur.score.r : null, ok: Q.cur.score ? Q.cur.score.ok : null }));
const queue = page => page.evaluate(() => Q.list.map(i => ({ key: i.key, redo: !!i.redo, seed: i.seed, place: i.item.values.place, form: i.item.values.form })));

// answers the question in front of the learner: all right, or all wrong
async function answer(page, right = true) {
  const { place, form } = await look(page);
  if (form === 'tap' || form === 'flag') await tapAt(page, right ? AT[place] : AT[place === 'birch' ? 'alder' : 'birch']);
  else if (form === 'name') {
    await page.locator('input[data-recall="name"]').fill(right ? (place === 'sea' ? 'The sea' : place) : 'zzz');
    await page.locator('[data-recall-answer="name"]').click();
  } else if (right) {
    await tapAt(page, NEXT_TO[place]);
    if (place === 'cedar') await page.locator('[data-place-landlocked]').click(); else await tapAt(page, AT.sea);
  } else {
    await tapAt(page, AT.sea);
    await page.locator('[data-place-landlocked]').click();
  }
}
// runs the questions in front of the learner to the end of the group, every one right except the numbered ones (counted from the first)
async function runGroup(page, { miss = [] } = {}) {
  const done = [];
  for (let at = 0; await page.locator('#qNext').count() && at < 30; at++) {
    const info = await look(page), wrong = miss.includes(at);
    await answer(page, !wrong);
    done.push({ ...info, wrong });
    await next(page);
  }
  return done;
}
const count = (list, form) => list.filter(i => i.form === form).length;
const NAMES = { alder: 'Alder', birch: 'Birch', cedar: 'Cedar' };

// A flag asked for is large enough to tell from the next on a phone (40 px or more each way), carries no name, and after the answer the feedback shows it
// with the name beside it and opens with the line that tells it apart.
async function flagChecks(c, page, width, place) {
  const asked = await page.locator('.item .block-flags .flagbig').first().boundingBox();
  c.check(asked && asked.width >= 40 && asked.height >= 40, `${width}px: the flag asked for is ${asked && Math.round(asked.width)} by ${asked && Math.round(asked.height)} px, under 40`);
  c.check(!(await page.locator('.item .block-flags').first().innerText()).includes(NAMES[place]), `${width}px: the flag asked for carries the name of its country`);
  await answer(page, true);
  const shown = await page.locator('.item [data-feedback] .flagkey li').allInnerTexts(), text = (await page.locator('#screen').textContent()).replace(/\s+/g, ' ');
  const kept = await page.locator('.item [data-feedback] .flagkey .flagbig').first().boundingBox();
  c.check(shown.length === 1 && shown[0].includes(NAMES[place]) && kept && kept.width >= 40 && kept.height >= 40, `${width}px: the feedback of a flag does not show the flag, large, with the name ${NAMES[place]} beside it (${JSON.stringify(shown)})`);
  c.check(/Its flag is/.test(text), `${width}px: the feedback of a flag does not open with the line that tells it apart`);
}

/* ---------- X47 ---------- */
export async function X47(env) {
  const c = env.checker('X47'), { context, page } = await env.freshPage(c);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'atlas');
  await env.clickVisible(page, '#screen [data-l="l2"]');

  // the first group: four different places to tap, then three different countries by their flags, each filed under its place
  await jump(page, STEP.sets);
  const first = await queue(page);
  c.check(first.length === 7 && count(first, 'tap') === 4 && count(first, 'flag') === 3 && first.slice(0, 4).every(i => i.form === 'tap'), `the first group is ${first.map(i => i.form).join(' ')}, not four taps and three flags`);
  c.check(new Set(first.slice(0, 4).map(i => i.place)).size === 4 && new Set(first.slice(4).map(i => i.place)).size === 3 && first.slice(4).every(i => ['alder', 'birch', 'cedar'].includes(i.place)), `the places of the first group repeat, or a flag is asked of a place with none (${first.map(i => i.place).join(' ')})`);
  c.check(first.every(i => i.key === `g-isles|${i.place}`), `a question of the group is not filed under its place (${first.map(i => i.key).join(' ')})`);
  const shown = await env.screenText(page);
  c.check(/Tap it on the map/.test(shown) && await page.locator('[data-feedback]').count() === 0, 'the first question of the group is not a name to tap, or shows its feedback before the answer');
  await env.inspect(c, page, 'a name to tap from a group of places');
  // a miss comes back as the same place, in the same form, a few questions later
  await answer(page, false);
  let now = await look(page);
  c.check(now.done && now.r.where !== 'ok' && /You tapped/.test(await env.screenText(page)), 'a wrong tap on a place of the group is not scored wrong with the feedback');
  const missedAt = first[0];
  await next(page);
  const after = await queue(page), back = after.findIndex((i, k) => k > 0 && i.redo);
  c.check(back >= 4 && after[back].key === missedAt.key && after[back].seed === missedAt.seed, `the missed place ${missedAt.place} does not come back as itself (${after.map(i => i.key + (i.redo ? '*' : '')).join(' ')})`);
  const rest = await runGroup(page);
  c.check(rest.length === 7 && rest.filter(i => i.redo).length === 1, `the rest of the group is ${rest.length} questions with ${rest.filter(i => i.redo).length} coming back, not 7 with the one that was missed`);
  c.check(rest.filter(i => i.redo).every(i => i.key === missedAt.key), 'a place that was not missed came back');

  // the second group: three lit places to name, two neighbors and their water
  await env.goOn(page);   // the break
  const second = await queue(page);
  c.check(second.length === 5 && second.slice(0, 3).every(i => i.form === 'name') && second.slice(3).every(i => i.form === 'border'), `the second group is ${second.map(i => i.form).join(' ')}, not three names and two neighbors`);
  c.check(second.slice(3).every(i => ['alder', 'birch', 'cedar'].includes(i.place)) && new Set(second.slice(0, 3).map(i => i.place)).size === 3 && new Set(second.slice(3).map(i => i.place)).size === 2 && second.every(i => i.place !== 'speck'),
    `the second group asks a neighbor of a place with none, repeats a place within a form, or asks the dot the check keeps to taps (${second.map(i => i.place).join(' ')})`);
  c.check(await page.locator('.item .mp.lit').count() === 1 && await page.locator('.item .mapsvg text').count() === 0, 'a lit place to name is not one lit place on a map with no names');
  await env.inspect(c, page, 'a lit place to name from a group of places');
  await runGroup(page);
  await env.goOn(page);   // the break
  await env.goOn(page);   // the check's first screen

  // the check: the split is fixed by form, nothing is lit, marked or said between the questions, and one place is missed on purpose
  const drawn = await queue(page);
  c.check(drawn.length === 5 && FORMS.map(f => count(drawn, f)).join() === '2,1,1,1', `the check asks ${FORMS.map(f => `${count(drawn, f)} ${f}`).join(', ')}, not 2 tap, 1 name, 1 flag, 1 border`);
  c.check(drawn.every(i => i.form === 'tap' || i.place !== 'speck') && drawn.every(i => i.key === `g-isles|${i.place}`) && new Set(drawn.map(i => i.place)).size === 5, `the check asks a place twice or in a form it is kept from (${drawn.map(i => `${i.place} ${i.form}`).join(', ')})`);
  // one place is missed on purpose: not the dot, which the check keeps to the one form, so that the review has another form to ask it in
  const missedIn = drawn.findIndex(i => i.place !== 'speck'), missedForm = drawn[missedIn], between = [];
  for (let at = 0; at < 5; at++) {
    await answer(page, at !== missedIn);
    between.push(await page.evaluate(() => ({ feedback: document.querySelectorAll('[data-feedback]').length, marked: document.querySelectorAll('.item .mk-right, .item .mk-wrong').length,
      lit: Q.list[Q.at].item.values.form === 'name' ? 0 : document.querySelectorAll('.item .mp.lit').length })));
    await next(page);
  }
  c.check(between.every(b => b.feedback === 0 && b.marked === 0 && b.lit === 0), `the check shows feedback or marks between its questions (${JSON.stringify(between)})`);
  const text = await env.screenText(page);
  c.check(/4 of 5: passed/.test(text), `the result of the check is not 4 of 5: passed (${text.slice(0, 120)})`);
  c.check(await page.locator('[data-feedback]').count() === 5, 'the answers at the end are not all shown with their feedback');

  // what is stored: a try for each place, under its place, with the seed and numbers only
  const items = JSON.parse((await env.storage(page))['pl:atlas:items'] || '{}'), tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  c.check(Object.keys(items).length >= 4 && Object.keys(items).every(k => /^g-isles\|(alder|birch|cedar|speck|sea)$/.test(k)), `the record is filed under ${Object.keys(items).join(', ')}, not under the places of the group`);
  c.check(tries.every(t => Number.isInteger(t.seed) && t.seed >= 0 && !('values' in t)), 'a try of the group stores more than its seed');
  c.check(tries.filter(t => t.context === 'check').length === 5 && tries.filter(t => t.context === 'check' && !t.ok).length === 1, 'the check stored five tries with one wrong');

  // the review, two days on: the group is a topic, asked on the place missed in the check, in another form
  await env.setDay(page, WEDNESDAY);
  await env.clickVisible(page, '[data-v="review"]');
  const tile = await env.screenText(page);
  c.check(/One question is due/.test(tile), `the review does not count one question for the group (${tile.slice(0, 120)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  now = await look(page);
  c.check(now.key === `g-isles|${missedForm.place}` && now.form !== missedForm.form && !now.redo, `the review asks ${now.key} as ${now.form}, not ${missedForm.place} in a form other than ${missedForm.form}`);
  const used = items[`g-isles|${missedForm.place}`].tries.map(t => t.seed);
  c.check(!used.includes(now.seed), 'the review asks a place with a seed it already has a try for');
  c.check(await page.locator('[data-feedback]').count() === 0 && await page.locator('#qNext').isDisabled(), 'the review shows its feedback before the answer');
  await answer(page, true);
  c.check((await look(page)).ok === true && await page.locator('[data-feedback]').count() === 1, 'the review does not score and explain the place asked');
  await next(page);
  c.check(/The review is done/.test(await env.screenText(page)), 'the review does not end after its one question');
  await context.close();

  // a lesson opens where it was put down: at a group, and at the check's first screen too
  const resumed = await env.freshPage(c);
  await env.openSubject(resumed.page, 'atlas');
  await env.clickVisible(resumed.page, '#screen [data-l="l2"]');
  for (const [name, at] of [['the second group', STEP.names], ['the check', STEP.check]]) {
    await jump(resumed.page, at);
    await resumed.page.reload();
    await env.openSubject(resumed.page, 'atlas');
    await env.clickVisible(resumed.page, '#screen [data-l="l2"]');
    const opened = await resumed.page.evaluate(() => LESSON.at);
    c.check(opened === at, `a lesson put down at ${name} (step ${at}) opens at step ${opened}`);
  }
  await resumed.context.close();

  // a phone's width and a desktop's: a name to tap, a flag, a lit place to name and a neighbor and its water of a group
  for (const width of [360, 1200]) {
    const wide = await env.freshPage(c, width);
    await env.openSubject(wide.page, 'atlas');
    await env.clickVisible(wide.page, '#screen [data-l="l2"]');
    await jump(wide.page, STEP.sets);
    for (let seen = 0; seen < 5 && await wide.page.locator('#qNext').count(); seen++) {
      const info = await look(wide.page);
      if (seen === 0 || info.form === 'flag') await env.inspect(c, wide.page, `${width}px a ${info.form} question of a group of places`);
      if (info.form === 'flag') await flagChecks(c, wide.page, width, info.place);
      else await answer(wide.page, true);
      await next(wide.page);
    }
    await jump(wide.page, STEP.names);
    for (const form of ['name', 'border']) {
      for (let seen = 0; seen < 5 && (await look(wide.page)).form !== form; seen++) { await answer(wide.page, true); await next(wide.page); }
      await env.inspect(c, wide.page, `${width}px a ${form} question of a group of places`);
    }
    await wide.context.close();
  }
  // a phone's screen holds a question asked on a map, on the real subject Geography (tests/e2e-fit.mjs)
  await fitChecks(env, c);
  return c;
}
export const PLACE_GEN_CHECKS = { X47 };
