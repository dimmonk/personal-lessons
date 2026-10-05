// Browser checks for a rebuilt unit: every card, every check, the whole drill, the close cards and the unit-complete screen; plus the
// layout, draft-line and migration checks (lesson standard X1 to X4, X6). Every check reads what it expects from the app's own data
// (tests/fixtures/app-data.mjs): no revision, unit count, card count or unit id is typed here, and the old-format checks run only
// for the units that are old-format. A subject whose every unit is rebuilt has no old record, so it is never asked for old-screen things.
// Each function takes `env` from e2e.mjs: { freshPage, check, inspect, clickVisible, openSubject, screenText }.
import { mkdir } from 'node:fs/promises';
import { norm, unitText, cardPlan, drillPlan, workedStepsLeft, moveOn } from './fixtures/walk.mjs';
import { subjectMeta, rebuiltUnits } from './fixtures/app-data.mjs';
import { addHalfSubject } from './fixtures/half-subject.mjs';

const SHOT_DIR = process.env.FC_SHOTS || null;
const DRAFT = 'Draft: not yet read by a newcomer';   // lesson standard E15: the wording is the standard's
const COMMIT_KINDS = ['again', 'exception', 'lookalike', 'worked', 'solved'];

async function shot(page, name) {
  if (!SHOT_DIR) return;
  await mkdir(SHOT_DIR, { recursive: true });
  // a tall viewport, so the sticky action bar sits at the foot of the picture and not across the middle of it
  const size = page.viewportSize(), height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: size.width, height: Math.max(size.height, height) });
  await page.screenshot({ path: `${SHOT_DIR}/${name}.png` });
  await page.setViewportSize(size);
}

/* ---------- reading the page and the unit's data ---------- */
const screenInfo = page => page.evaluate(() => {
  const run = UNIT_RUN, s = run.flow[run.i];
  const card = s.type === 'card' ? run.v.card(s.id) : null;
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  return { ...s, index: run.i, kind: card && card.kind, heading: card ? plain(cardHeading(run.v, run.T, card)) : null,
           cardNo: card ? run.v.cardOrder.indexOf(card.id) + 1 : null, total: run.v.cardOrder.length,
           parts: run.v.unit.parts.map(p => p.title), tag: run.v.unit.tag, rev: run.v.unit.rev, status: run.v.unit.status };
});
const readyToGoOn = page => page.locator('#fwd').isEnabled();
const stored = (page, key) => page.evaluate(k => JSON.parse(localStorage.getItem(k)), key);
// A unit of the mixed-standards fixture lives only in the page, so it is registered again after every load.
const boot = async (page, u) => { if (u.fixture) await addHalfSubject(page); };
const openUnitRow = async (env, page, u) => { await env.openSubject(page, u.subject); await env.clickVisible(page, `#screen [data-u="${u.index}"]`); };
// Every unit is walked in a page of its own, so a few run at a time: the walks are what make the suite long once many units are rebuilt.
const PARALLEL = 4;
async function inParallel(env, list, fn) {
  const queue = [...list];
  const worker = async () => {
    while (queue.length) {
      const u = queue.shift();
      try { await fn(u); } catch (err) { env.check(false, `${u.subject}/${u.unit} crashed: ${(err.stack || String(err)).split('\n').slice(0, 4).join(' | ')}`); }
    }
  };
  await Promise.all(Array.from({ length: Math.min(PARALLEL, queue.length) }, worker));
}
// every rebuilt unit there is: those of the real subjects, and those of the mixed-standards fixture (a subject some of whose units are old)
async function everyRebuiltUnit(env) {
  const probe = await env.freshPage(390), real = await rebuiltUnits(probe.page);
  await addHalfSubject(probe.page);
  const all = await rebuiltUnits(probe.page);
  await probe.context.close();
  return [...real, ...all.filter(u => u.subject === 'half').map(u => ({ ...u, fixture: true }))];
}

// An action subject's baseline check comes before the unit's first card (E21); this answers it and goes on.
async function passBaseline(page) {
  for (let guard = 0; guard < 20 && (await screenInfo(page)).type === 'baseline'; guard++) {
    if (await page.locator('[data-judge]').count()) await page.click('[data-judge="real"]');
    await page.click('#fwd');
  }
}

/* ---------- layout (X3) ---------- */
const stray = page => page.evaluate(() => {
  const vw = document.documentElement.clientWidth, bad = [];
  for (const el of document.querySelectorAll('#screen *')) {
    const folded = el.closest('details:not([open])');
    if (folded && !el.closest('summary')) continue;   // the inside of a folded section is not on the screen, whatever rectangle it reports
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    const label = `<${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''}> "${el.textContent.trim().slice(0, 24)}"`;
    if (r.right > vw + 0.5 || r.left < -0.5) bad.push(`${label} spans ${Math.round(r.left)}..${Math.round(r.right)} of ${vw}`);
  }
  return bad.slice(0, 4);
});
async function layout(env, page, label) {
  await env.inspect(page, label);
  const bad = await stray(page);
  env.check(bad.length === 0, `${label}: content outside the screen: ${bad.join('; ')}`);
}

/* ---------- the drill, answered from the data ---------- */
async function playDrill(env, page, u, opts) {
  const { check } = env;
  let wrongDone = false, items = 0, rerunCase = null;
  for (let guard = 0; guard < 800; guard++) {
    if (await page.locator('.done-screen.results').count()) break;
    if (opts.layout) await layout(env, page, `${opts.label}/drill`);
    if (await page.locator('#start').count()) { await page.click('#start'); continue; }
    if (await page.locator('#next').count()) { await page.click('#next'); continue; }
    // a whole route on one of the unit's own cases: a case drawn from an earlier unit's bank comes back as a fresh case of that unit, not as itself
    const route = await page.evaluate(() => { const r = UNIT_RUN.drillRun, cur = r.current; return r.stages[r.si].ask === 'route' && cur.item.type === 'case' && cur.item.asked.length > 1 && !cur.state.done && cur.v.unitId === UNIT_RUN.v.unitId; });
    if (route && !wrongDone && opts.wrongRoute) {
      wrongDone = true;
      const plan = await drillPlan(page, true);
      // a case from an earlier unit is recorded under its own unit
      const owner = await page.evaluate(() => UNIT_RUN.drillRun.current.v.unitId);
      for (const sel of plan.clicks) await page.click(sel);
      const marks = norm(await page.locator('.feedback .marks, #host .marks').first().textContent());
      const warn = await page.locator('.warn').count() ? norm(await page.locator('.warn').first().textContent()) : '';
      check(/Answers missed/.test(await unitText(page)), `${opts.label}: a wrong route was not marked "Route missed" (${marks})`);
      check(/Right name, wrong answer on the way/.test(warn), `${opts.label}: no "Right name, wrong answer on the way" line`);
      await shot(page, `${u.subject}-${u.unit}-route-wrong`);
      const tries = await page.evaluate(([S, key]) => { const items = JSON.parse(localStorage.getItem(`pl:${S}:items`)); if (!items[key]) throw new Error(`no ${key} in ${Object.keys(items).join(',')}`); return items[key].tries; }, [u.subject, `${owner}/${plan.id}`]);
      check(tries[tries.length - 1].ok === false, `${opts.label}: the wrong route was recorded as a right one`);
      const queued = await page.evaluate(id => { const r = UNIT_RUN.drillRun, q = r.stages[r.si].queue; return q.filter(x => x === id || x.case === id).length; }, plan.id);
      check(queued >= 2, `${opts.label}: the missed route case is not queued to be asked again`);
      rerunCase = `${owner}/${plan.id}`;
      continue;
    }
    const plan = await drillPlan(page, false);
    for (const sel of plan.clicks) await page.click(sel);
    items++;
    check(await page.locator('#next').count() === 1, `${opts.label}: item ${plan.id} did not show its feedback after an answer`);
  }
  check(await page.locator('.done-screen.results').count() === 1, `${opts.label}: the drill did not end on the results screen`);
  // a unit with a whole-route stage on a name must have offered a route to get wrong
  const wholeRoute = u.kind === 'C' && !u.gate && u.stages.includes('route');
  if (opts.wrongRoute && wholeRoute) check(wrongDone, `${opts.label}: the drill has a route stage but no whole route (a case with a name) to answer wrongly`);
  if (opts.wrongRoute && wrongDone) {
    const missed = await page.evaluate(() => UNIT_RUN.drillRun.tries.filter(t => t.stage === 'route' && t.first && !t.ok).length);
    check(missed === 1, `${opts.label}: the results count ${missed} first-try misses on whole routes, not 1`);
    const labels = await page.evaluate(() => [...document.querySelectorAll('table.results tr td:first-child')].map(td => td.textContent));
    check(new Set(labels).size === labels.length, `${opts.label}: the results screen repeats a row label (${labels.join(' | ')})`);
  }
  if (rerunCase) {
    const tries = await page.evaluate(([S, key]) => JSON.parse(localStorage.getItem(`pl:${S}:items`))[key].tries, [u.subject, rerunCase]);
    check(tries.length >= 2 && tries[tries.length - 1].ok === true, `${opts.label}: the missed case ${rerunCase} was not asked again and answered`);
  }
  return items;
}

/* ---------- the walk through every card ---------- */
async function answerCard(env, page, label, n, shotName) {
  const { check } = env;
  const wrong = n % 2 === 1;
  const plan = await cardPlan(page, wrong);
  if (!plan.awaiting) return null;
  check(!(await readyToGoOn(page)), `${label}: Next is enabled while a prompt is unanswered`);
  const before = await unitText(page);
  if (plan.probe) check(!before.includes(plan.probe), `${label}: the explanation is in the page before the answer ("${plan.probe}")`);
  check(await page.locator('.feedback, .answerline').count() === 0, `${label}: feedback is on screen before an answer`);
  if (shotName) await shot(page, `${shotName}-before`);
  for (const sel of plan.clicks) await page.click(sel);
  const after = await unitText(page);
  if (plan.probe) check(after.includes(plan.probe), `${label}: the explanation is not shown after the answer ("${plan.probe}")`);
  check(await readyToGoOn(page), `${label}: Next is still disabled after the answer`);
  if (plan.kind === 'check') check(await page.locator('.feedback .marks .mark').count() >= 1, `${label}: a check showed no right-answer mark`);
  if (shotName) await shot(page, `${shotName}-after`);
  return plan.kind;
}

async function fillTransfer(env, page, u, label) {
  await page.click('#transferNames .opt >> nth=0');
  await page.click('#transferPlaces .chip >> nth=1');
  await page.fill('#transferText', 'my brother, about the car');
  const note = (await stored(page, `pl:${u.subject}:notes`))[u.unit].transfer;
  env.check(note.outcome && note.place && note.text === 'my brother, about the car', `${label}: the transfer note was not saved (${JSON.stringify(note)})`);
}

// Walks the open unit from the card it is on to the unit-complete screen. A prompt is answered wrongly on every second card, so both
// kinds of feedback are met. Returns what it met, so the caller can compare it with the unit's own data.
async function walkCards(env, page, u, opts) {
  const { check } = env, shotKinds = new Set();
  const first = await screenInfo(page);
  const seenCards = [], answeredKinds = [];
  let answered = 0;
  for (let guard = 0; guard < 600; guard++) {
    const s = await screenInfo(page), label = `${opts.label}/${s.type}${s.id ? ' ' + s.id : ''}`;
    if (opts.layout) await layout(env, page, label);
    if (s.type === 'card') {
      seenCards.push(s.id);
      const bar = norm(await page.locator('.unitbar').textContent());
      const want = `Unit ${s.tag} · rev ${s.rev}${s.status === 'draft' ? ' · ' + DRAFT : ''} · Part ${s.part + 1} of ${s.parts.length} · Card ${s.cardNo} of ${s.total}`;
      check(bar === want, `${label}: top bar reads "${bar}", not "${want}"`);
      check(norm(await page.locator('.eyebrow-row h1').textContent()) === s.heading, `${label}: heading is not "${s.heading}"`);
      if (s.index === 0) await shot(page, `${u.subject}-${u.unit}-first-card`);
      // one picture of the first card of each kind that asks something, before and after the answer
      const shotName = opts.shots && !shotKinds.has(s.kind) && ['again', 'lookalike', 'check', 'worked'].includes(s.kind) ? `${u.subject}-${u.unit}-${s.kind}` : null;
      if (shotName) shotKinds.add(s.kind);
      const kind = await answerCard(env, page, label, answered, shotName && s.kind !== 'worked' ? shotName : null);
      if (kind) { answered++; answeredKinds.push(kind); }
      if (s.kind === 'worked') {
        while (await workedStepsLeft(page) && await page.locator('#fwd').isEnabled()) {
          await page.click('#fwd');
          if (opts.layout) await layout(env, page, `${label}/screen`);
        }
        const last = await answerCard(env, page, label, answered, shotName);
        if (last) { answered++; answeredKinds.push(last); }
      }
      if (s.kind === 'transfer') await fillTransfer(env, page, u, label);
      if (s.kind === 'plan') { await page.click('#planCues .opt >> nth=0'); await page.click('#planSave'); }
    } else if (s.type === 'baseline') {
      if (await page.locator('[data-judge]').count()) await page.click('[data-judge="real"]');
    } else if (s.type === 'partend') {
      const want = `End of part ${s.part + 1}. You can stop here; your place is kept. Next: part ${s.part + 2}, ${s.parts[s.part + 1]}.`;
      check((await unitText(page)).includes(want), `${label}: the end-of-part screen does not read "${want}"`);
    } else if (s.type === 'drill') {
      const items = await playDrill(env, page, u, { ...opts, label });
      const authored = await page.evaluate(() => UNIT_RUN.v.unit.drill.rungs.flatMap(r => r.items.flat()).length);
      check(items >= authored, `${label}: ${items} drill items were asked of ${authored} authored`);
      continue;
    } else if (s.type === 'results') {
      await shot(page, `${u.subject}-${u.unit}-results`);
      const text = await unitText(page);
      check(/The drill is done/.test(text) && /first tries/.test(text) && /What comes back, and when/.test(text), `${label}: the results screen is missing its figures`);
    } else if (s.type === 'complete') {
      check(new RegExp(`Unit ${s.tag} complete`).test(await unitText(page)), `${label}: no unit-complete screen for Unit ${s.tag}`);
      break;
    }
    if (s.type !== 'drill') await page.click('#fwd');
  }
  return { seenCards, answered, answeredKinds, first };
}

/* ---------- X1 to X3 on one rebuilt unit, and what is stored after it ---------- */
// Seeds the old counters so a session through the unit can show they are read and never written (X5, lesson standard E8).
const frozenFor = u => ({ [`pl:${u.subject}:stats:${u.unit}`]: '{"n":3,"ok":2}', [`pl:${u.subject}:stats:det`]: '{"n":1,"label":1,"frame":0}', 'pl:mixed': '{"n":4,"ok":3}' });
const E8_KEYS = /^pl:(app|recent|mixed|log)$|^pl:[a-z]+:(items|seen|notes|stats:[a-z0-9]+)$/;

async function sessionThroughUnit(env, u) {
  const { check, freshPage } = env, label = `390px ${u.subject}/${u.unit}`, frozen = frozenFor(u);
  const { context, page } = await freshPage(390);
  await page.addInitScript(() => { window.__timers = []; for (const n of ['setTimeout', 'setInterval']) { const o = window[n]; window[n] = (...a) => { window.__timers.push(n); return o(...a); }; } });
  await page.reload();
  await page.evaluate(seed => Object.entries(seed).forEach(([k, v]) => localStorage.setItem(k, v)), frozen);
  await page.reload();
  await boot(page, u);
  await env.openSubject(page, u.subject);
  await shot(page, `${u.subject}-${u.unit}-subject-before`);
  await env.clickVisible(page, `#screen [data-u="${u.index}"]`);
  await passBaseline(page);
  const total = (await screenInfo(page)).total;
  check(total === u.registeredCards, `${label}: the unit shows ${total} cards, and its data registers ${u.registeredCards}`);

  // X1: nothing advances by itself
  const bar0 = await page.locator('.unitbar').textContent();
  await page.waitForTimeout(1500);
  check(await page.locator('.unitbar').textContent() === bar0, `${label}: a card advanced by itself`);

  // Back, and the place being kept: go on through whatever the first cards ask, then back, then on again to the same card
  const nextIsCard = () => page.evaluate(() => { const r = UNIT_RUN, n = r.flow[r.i + 1]; return !!n && n.type === 'card'; });
  for (let k = 0; k < 2 && await nextIsCard(); k++) await moveOn(page);
  const at = await screenInfo(page);
  if (at.index > 0) {
    await page.click('#back');
    check((await screenInfo(page)).index === at.index - 1, `${label}: Back from the screen at ${at.index} did not return to the one before`);
    await moveOn(page);
    check((await screenInfo(page)).index === at.index, `${label}: Next after Back did not return to the card the learner left`);
  }
  await page.click('[data-confused]');
  check(/Noted/.test(await unitText(page)), `${label}: the "confused" control did not say it was noted`);
  const log = await stored(page, 'pl:log');
  const note = log.find(e => e.type === 'confused');
  check(note && note.subject === u.subject && note.unit === u.unit && note.rev === u.rev && note.card === at.id, `${label}: confused was logged as ${JSON.stringify(note)}, not rev ${u.rev} on ${at.id}`);
  await env.clickVisible(page, '#screen [data-v="subject"]');
  const rowText = norm(await page.locator(`#screen [data-u="${u.index}"]`).textContent());
  check(rowText.includes(`Card ${at.cardNo} of ${total} · in progress`), `${label}: the subject row does not show the place ("${rowText}")`);
  await page.click('#resume');
  check((await screenInfo(page)).cardNo === at.cardNo, `${label}: Resume did not return to the card the learner left`);

  const result = await walkCards(env, page, u, { label, layout: false, shots: true, wrongRoute: true });
  const order = await page.evaluate(() => UNIT_RUN.v.cardOrder), expected = order.slice(order.indexOf(result.first.id));
  check(result.seenCards.length === expected.length, `${label}: the walk met ${result.seenCards.length} cards, not ${expected.length}`);
  check(JSON.stringify(result.seenCards) === JSON.stringify(expected), `${label}: cards did not come in the order of unit.parts`);
  check((await page.evaluate(() => window.__timers.length)) === 0, `${label}: the app set a timer while a unit was running (X1)`);

  // what is stored afterwards
  const seen = await stored(page, `pl:${u.subject}:seen`);
  check(seen[u.unit] && seen[u.unit].done === true && seen[u.unit].rev === u.rev && seen[u.unit].at === 'close', `${label}: pl:${u.subject}:seen.${u.unit} is ${JSON.stringify(seen[u.unit])}, not done at rev ${u.rev}`);
  const items = await stored(page, `pl:${u.subject}:items`), mine = Object.keys(items).filter(k => k.startsWith(`${u.unit}/`));
  const modeCount = mode => mine.flatMap(k => items[k].tries).filter(t => t.mode === mode).length;
  const commitCards = result.answeredKinds.filter(k => COMMIT_KINDS.includes(k)).length;
  if (commitCards) check(mine.some(k => k.startsWith(`${u.unit}/commit:`)), `${label}: ${commitCards} commit prompts were answered and none was recorded`);
  check(modeCount('check') >= result.answeredKinds.filter(k => k === 'check').length, `${label}: the checks were not recorded (${modeCount('check')} of ${result.answeredKinds.filter(k => k === 'check').length})`);
  if (u.stages.includes('route')) check(mine.some(k => items[k].tries.some(t => t.mode === 'route' && t.context === 'unit')), `${label}: no route item was recorded`);
  const engine = await page.evaluate(() => FC.ENGINE);
  check(mine.every(k => items[k].tries.every(t => t.rev === u.rev && t.engine === engine && /^\d{4}-\d\d-\d\d$/.test(t.d))), `${label}: a try is missing its revision (${u.rev}), engine or day`);
  check(await page.evaluate(([S, U]) => rebuiltUnitDone(S, U), [u.subject, u.unit]), `${label}: the unit is not done at standard 1`);
  await env.clickVisible(page, '#screen [data-v="subject"]');
  await shot(page, `${u.subject}-${u.unit}-subject-after`);
  // X5, as far as a session through a unit goes: only the keys of lesson standard E8, and the frozen counters untouched
  const all = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
  check(Object.keys(all).every(k => E8_KEYS.test(k)), `${label}: storage holds keys outside the list of lesson standard E8: ${Object.keys(all).filter(k => !E8_KEYS.test(k)).join(', ')}`);
  check(Object.entries(frozen).every(([k, v]) => all[k] === v), `${label}: a frozen counter (pl:<subject>:stats:*, pl:mixed) was written during a unit session`);
  check(!(`pl:${u.subject}:course` in all), `${label}: the old pl:${u.subject}:course key was written`);
  const after = await unitText(page);
  check(new RegExp(`\\b1 of ${u.courseLength} units`).test(after), `${label}: after one unit the subject says "${after.match(/\d+ of \d+ units/)}", not 1 of ${u.courseLength}`);
  await context.close();
}

export async function testRebuiltUnit(env) {
  const units = await everyRebuiltUnit(env);
  env.check(units.some(u => !u.fixture), 'no subject has a rebuilt unit, so nothing was walked');
  await inParallel(env, units, u => sessionThroughUnit(env, u));
}

/* ---------- X3: every card of every rebuilt unit at 360px, answered ---------- */
export async function testUnitAt360(env) {
  const units = await everyRebuiltUnit(env);
  await inParallel(env, units, async u => {
    const { context, page } = await env.freshPage(360);
    await boot(page, u);
    await openUnitRow(env, page, u);
    await passBaseline(page);
    await walkCards(env, page, u, { label: `360px ${u.subject}/${u.unit}`, layout: true, shots: false, wrongRoute: false });
    await context.close();
  });
}

/* ---------- X6: the draft line and the revision on a rebuilt unit, and none on an old one ---------- */
export async function testDraftAndOldUnits(env) {
  const { check, freshPage } = env;
  const { context, page } = await freshPage(390);
  await addHalfSubject(page);   // a subject that mixes a rebuilt draft unit with old ones, so both kinds of row are met whatever the real subjects hold
  const metas = await subjectMeta(page);
  check(metas.some(s => s.unitList.some(u => !u.rebuilt)) && metas.some(s => s.unitList.some(u => u.rebuilt && u.status === 'draft')), 'the checks met no old unit or no draft unit');
  for (const s of metas) {
    await env.openSubject(page, s.id);
    const rows = await page.evaluate(() => [...document.querySelectorAll('#screen [data-u]')].map(r => r.textContent.replace(/\s+/g, ' ').trim()));
    check(rows.length === s.unitList.length, `${s.id}: ${rows.length} unit rows for ${s.unitList.length} units`);
    for (const u of s.unitList) {
      const row = rows[u.index], where = `${s.id}/${u.id}`;
      if (u.rebuilt) {
        check(row.includes(`Rev ${u.rev}`), `${where}: a rebuilt unit's row does not show its revision ("${row}")`);
        check(row.includes(DRAFT) === (u.status === 'draft'), `${where}: the draft line is ${row.includes(DRAFT) ? 'shown' : 'missing'} on a unit whose status is ${u.status} ("${row}")`);
        await env.clickVisible(page, `#screen [data-u="${u.index}"]`);
        const bar = await page.locator('.unitbar').textContent();
        check(bar.includes(`rev ${u.rev}`) && bar.includes(DRAFT) === (u.status === 'draft'), `${where}: the top bar reads "${norm(bar)}"`);
      } else {
        check(!/\brev \d/i.test(row) && !row.includes(DRAFT), `${where}: an old unit's row shows a revision or a draft line: "${row}"`);
        await env.clickVisible(page, `#screen [data-u="${u.index}"]`);
        const old = norm(await page.locator('#screen .topbar').first().textContent());
        check(!/\brev \d/i.test(old) && !old.includes(DRAFT), `${where}: an old unit's top bar shows "${old}"`);
      }
      await env.clickVisible(page, '#screen [data-v="subject"]');
    }
  }
  await context.close();
}

/* ---------- X4: old progress carries over once, and never changes twice ---------- */
// What `pl:<subject>:seen` must hold after the old place and done marks are carried over: a unit finished under the old lessons and
// since rebuilt starts again (rev 0, not done); a unit that is still old keeps its done mark and, if it was the open one, its place.
// An old unit number with no unit now (a subject that has fewer units than it had) is dropped.
function expectedMigration(unitList, course) {
  const seen = {};
  unitList.forEach((u, i) => {
    const wasDone = !!course.done[i], here = course.u === i;
    if (!wasDone && !here) return;
    if (u.rebuilt) { if (wasDone) seen[u.id] = { rev: 0, done: false, at: null }; return; }
    seen[u.id] = { rev: 0, done: wasDone, at: here && !wasDone ? `card:${course.card || 0}` : null };
  });
  return seen;
}
// Old progress for a subject: every other old unit finished, and two old units beyond the course now (the subject once had more
// units than it has: Psychology had six and has four). The open unit is the second.
const progressFor = s => ({ u: 1, card: 1, phase: 'read', done: Array.from({ length: s.unitList.length + 2 }, (_, i) => i % 2 === 0) });
// Psychology's own captured progress, from before its units were rebuilt: six old units, the first three finished, the third open.
const CAPTURED = { psychology: { u: 2, card: 1, phase: 'read', done: [true, true, true, false, false, false] } };

async function checkMigration(env, label, metas, courses) {
  const { check, freshPage } = env;
  const { context, page } = await freshPage(390);
  await page.evaluate(c => Object.entries(c).forEach(([id, course]) => localStorage.setItem(`pl:${id}:course`, JSON.stringify(course))), courses);
  await page.reload();
  if (courses.half) await addHalfSubject(page);
  for (const s of metas) {
    const course = courses[s.id], want = expectedMigration(s.unitList, course);
    await env.openSubject(page, s.id);
    const rows = await page.evaluate(() => [...document.querySelectorAll('#screen [data-u]')].map(r => r.textContent.replace(/\s+/g, ' ').trim()));
    const seen = await stored(page, `pl:${s.id}:seen`) || {};
    check(JSON.stringify(seen) === JSON.stringify(want), `${label}/${s.id}: migrated progress is ${JSON.stringify(seen)}, not ${JSON.stringify(want)}`);
    const text = await unitText(page);
    const doneNow = s.unitList.filter(u => !u.rebuilt && course.done[u.index]).length;
    check(new RegExp(`\\b${doneNow} of ${s.units} units`).test(text), `${label}/${s.id}: the subject counts "${text.match(/\d+ of \d+ units/)}", not ${doneNow} of ${s.units}`);
    for (const u of s.unitList.filter(x => x.rebuilt && course.done[x.index]))
      check(/Rebuilt: start again/.test(rows[u.index]) && !(await page.evaluate(([S, i]) => unitDone(SUBJECTS.find(s => s.id === S), i), [s.id, u.index])), `${label}/${s.id}/${u.id}: finished under the old lessons and since rebuilt, its row reads "${rows[u.index]}" and it must read "Rebuilt: start again" and not count as done`);
    for (const u of s.unitList.filter(x => !x.rebuilt && course.done[x.index]))
      check(await page.evaluate(([S, i]) => unitDone(SUBJECTS.find(s => s.id === S), i), [s.id, u.index]), `${label}/${s.id}/${u.id}: an old unit that was finished no longer counts as done`);
  }
  // safe to run again: in the page, and after a reload
  const snapshot = () => page.evaluate(() => JSON.stringify(Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)]))));
  const first = await snapshot();
  await page.evaluate(() => SUBJECTS.forEach(s => migrateProgress(s.id, s.course.map(u => u.id), id => !!FC.get(s.id).units[id])));
  check(await snapshot() === first, `${label}: running the migration a second time changed storage`);
  await page.reload();
  if (courses.half) await addHalfSubject(page);
  const last = metas[metas.length - 1];
  await env.openSubject(page, last.id);
  await env.clickVisible(page, `#screen [data-u="${last.units - 1}"]`);
  await env.clickVisible(page, '#screen [data-v="subject"]');
  const after = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).filter(k => k.endsWith(':course')).map(k => [k, localStorage.getItem(k)])));
  check(metas.every(s => after[`pl:${s.id}:course`] === JSON.stringify(courses[s.id])), `${label}: an old pl:<subject>:course key was written to again`);
  await context.close();
}

export async function testMigration(env) {
  const probe = await env.freshPage(390);
  await addHalfSubject(probe.page);   // a subject that mixes a rebuilt unit with old ones, so the three outcomes are met whatever the real subjects hold
  const metas = await subjectMeta(probe.page);
  await probe.context.close();
  // Every subject, whatever it still holds: the old-format units keep their done marks and the rebuilt ones start again.
  await checkMigration(env, 'old progress, every subject', metas, Object.fromEntries(metas.map(s => [s.id, progressFor(s)])));
  // Psychology's real progress shape, while the subject exists with its six old units gone: they all start again.
  const captured = metas.filter(s => CAPTURED[s.id]);
  if (captured.length) await checkMigration(env, 'captured old progress', captured, Object.fromEntries(captured.map(s => [s.id, CAPTURED[s.id]])));
}
