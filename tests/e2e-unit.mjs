// Browser checks for a rebuilt unit (Psychology Unit Two): every card, every check, the whole drill, the close
// cards and the unit-complete screen; plus the layout, draft-line and migration checks (lesson standard X1 to X4, X6).
// Each function takes `env` from e2e.mjs: { freshPage, check, inspect, clickVisible, openSubject, screenText }.
import { mkdir } from 'node:fs/promises';

const SHOT_DIR = process.env.FC_SHOTS || null;
const SUBJECT = 'psychology', UNIT_ID = 'u2';
const DRAFT = 'Draft: not yet read by a newcomer';
const norm = s => s.replace(/\s+/g, ' ').trim();
const FROZEN = { 'pl:psychology:stats:u2': '{"n":3,"ok":2}', 'pl:psychology:stats:det': '{"n":1,"label":1,"frame":0}', 'pl:mixed': '{"n":4,"ok":3}' };

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
const unitText = async page => norm(await page.locator('#screen').textContent());
const screenInfo = page => page.evaluate(() => {
  const run = UNIT_RUN, s = run.flow[run.i];
  const card = s.type === 'card' ? run.v.card(s.id) : null;
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  return { ...s, index: run.i, kind: card && card.kind, heading: card ? plain(cardHeading(run.v, run.T, card)) : null,
           cardNo: card ? run.v.cardOrder.indexOf(card.id) + 1 : null, total: run.v.cardOrder.length,
           parts: run.v.unit.parts.map(p => p.title), tag: run.v.unit.tag, rev: run.v.unit.rev };
});

// What to click to answer the card on screen (right, or deliberately wrong), and a sentence of the explanation
// that must not be on the page until then. null when the card does not stop for an answer.
const cardPlan = (page, wrong) => page.evaluate(wrong => {
  const run = UNIT_RUN, v = run.v, T = run.T, screen = run.flow[run.i], card = v.card(screen.id), cs = run.cards[card.id];
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  const other = (n, right) => (right + 1) % n;
  let clicks = null, explanation = null, cases = [];
  if (card.kind === 'again' || card.kind === 'exception') {
    const c = v.caseById(card.kind === 'again' ? card.second : card.case), right = tappableCase(T, c, card.prompt.answer, null).right;
    clicks = [`[data-pick="${wrong ? other(c.segments.length, right) : right}"]`];
    explanation = T.PP(card.kind === 'again' ? card.shared : card.because, c); cases = [c];
  } else if (card.kind === 'lookalike') {
    const letter = card.prompt.answer === card.cases[0] ? 'A' : 'B';
    clicks = [`[data-pick="${wrong ? (letter === 'A' ? 'B' : 'A') : letter}"]`];
    explanation = T.PP(card.difference); cases = card.cases.map(v.caseById);
  } else if (card.kind === 'worked') {
    if (cs.ui.step < card.steps.length) return { awaiting: false, kind: card.kind, last: false };
    const p = card.hold.prompt, c = v.caseById(card.case);
    clicks = [`[data-pick="${wrong ? p.choices.find(x => x.id !== p.answer).id : p.answer}"]`];
    explanation = T.PP(card.hold.reason, c); cases = [c];
  } else if (card.kind === 'check') {
    const c = v.caseById(card.case), a = card.ask, code = a.step;
    if (a.type === 'phrase') {
      const right = c.segments.findIndex(s => s.text.includes(a.answer));
      clicks = [`[data-pick="${wrong ? other(c.segments.length, right) : right}"]`];
    } else {
      const rightId = c.route[code][0], ids = a.type === 'option' ? a.among : v.step(code).options.map(o => o.id);
      clicks = [`[data-step="${code}"] .opt[data-o="${wrong ? ids.find(id => id !== rightId) : rightId}"]`];
    }
    explanation = T.P(c.reason[code], c).map(x => `<p>${x}</p>`).join(''); cases = [c];
  } else return { awaiting: false, kind: card.kind };
  const caseText = cases.map(c => plain(`<p>${c.text}</p>`)).join(' ');
  const sentences = plain(explanation).split(/(?<=[.?!”])\s+/).filter(x => x.length >= 25 && !caseText.includes(x));
  const probe = sentences.sort((x, y) => y.length - x.length)[0];
  return { awaiting: true, kind: card.kind, clicks, probe: probe ? probe.slice(0, 60) : null };
}, wrong);

const readyToGoOn = page => page.locator('#fwd').isEnabled();

/* ---------- layout (X3) ---------- */
const stray = page => page.evaluate(() => {
  const vw = document.documentElement.clientWidth, bad = [];
  for (const el of document.querySelectorAll('#screen *')) {
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
const drillPlan = (page, wrong) => page.evaluate(wrong => {
  const run = UNIT_RUN.drillRun, cur = run.current, item = cur.item, c = item.c, v = cur.v;
  const stage = run.stages[run.si].ask, base = { stage, type: item.type, caseId: c ? c.id : null, mode: item.mode, asked: item.asked || [] };
  if (item.type === 'case') {
    const clicks = item.asked.map((code, n) => {
      const ids = item.among || v.step(code).options.map(o => o.id);
      const pick = wrong && n === 0 ? ids.find(id => !c.route[code].includes(id)) : c.route[code][0];
      return `[data-step="${code}"] .opt[data-o="${pick}"]`;
    });
    if (item.askName) clicks.push(`#nameOpts .opt[data-n="${caseTarget(v, c)}"]`);
    return { ...base, clicks, askName: item.askName };
  }
  if (item.type === 'tap') return { ...base, clicks: [`[data-pick="${c.segments.findIndex(s => s.text.includes(item.answer))}"]`] };
  if (item.type === 'tell') return { ...base, clicks: [`[data-pick="${item.entry.id}"]`] };
  if (item.type === 'reverse') return { ...base, clicks: [`[data-pick="${c.options.findIndex(o => o.voice === c.outcome)}"]`] };
  const parts = claimParts({ v, T: lessonText(v) }, c);
  return { ...base, clicks: [`[data-pick="${parts.answer}"]`] };
}, wrong);

async function playDrill(env, page, opts) {
  const { check } = env;
  let wrongDone = false, items = 0, rerunCase = null;
  for (let guard = 0; guard < 600; guard++) {
    if (await page.locator('.done-screen.results').count()) break;
    if (opts.layout) await layout(env, page, `${opts.label}/drill`);
    if (await page.locator('#start').count()) { await page.click('#start'); continue; }
    if (await page.locator('#next').count()) { await page.click('#next'); continue; }
    const route = await page.evaluate(() => { const r = UNIT_RUN.drillRun; return r.stages[r.si].ask === 'route' && r.current.item.type === 'case' && r.current.item.asked.length > 1 && !r.current.state.done; });
    if (route && !wrongDone && opts.wrongRoute) {
      wrongDone = true;
      const plan = await drillPlan(page, true);
      for (const sel of plan.clicks) await page.click(sel);
      const marks = norm(await page.locator('.feedback .marks, #host .marks').first().textContent());
      const warn = await page.locator('.warn').count() ? norm(await page.locator('.warn').first().textContent()) : '';
      check(/Route missed/.test(await unitText(page)), `${opts.label}: a wrong route was not marked "Route missed" (${marks})`);
      check(/Right name, wrong route/.test(warn), `${opts.label}: no "Right name, wrong route" line`);
      await shot(page, 'route-wrong');
      const stored = await page.evaluate(id => JSON.parse(localStorage.getItem('pl:psychology:items'))[`u2/${id}`].tries, plan.caseId);
      check(stored[stored.length - 1].ok === false, `${opts.label}: the wrong route was recorded as a right one`);
      const queued = await page.evaluate(id => { const r = UNIT_RUN.drillRun, q = r.stages[r.si].queue; return q.filter(x => x === id || x.case === id).length; }, plan.caseId);
      check(queued >= 2, `${opts.label}: the missed route case is not queued to be asked again`);
      rerunCase = plan.caseId;
      continue;
    }
    const plan = await drillPlan(page, false);
    for (const sel of plan.clicks) await page.click(sel);
    items++;
    check(await page.locator('#next').count() === 1, `${opts.label}: item ${plan.caseId} did not show its feedback after an answer`);
  }
  check(await page.locator('.done-screen.results').count() === 1, `${opts.label}: the drill did not end on the results screen`);
  if (opts.wrongRoute) {
    const missed = await page.evaluate(() => UNIT_RUN.drillRun.tries.filter(t => t.stage === 'route' && t.first && !t.ok).length);
    check(missed === 1, `${opts.label}: the results count ${missed} first-try misses on whole routes, not 1`);
    const labels = await page.evaluate(() => [...document.querySelectorAll('table.results tr td:first-child')].map(td => td.textContent));
    check(new Set(labels).size === labels.length, `${opts.label}: the results screen repeats a row label (${labels.join(' | ')})`);
  }
  if (rerunCase) {
    const tries = await page.evaluate(id => JSON.parse(localStorage.getItem('pl:psychology:items'))[`u2/${id}`].tries, rerunCase);
    check(tries.length >= 2 && tries[tries.length - 1].ok === true, `${opts.label}: the missed case ${rerunCase} was not asked again and answered`);
  }
  return items;
}

/* ---------- the walk through every card ---------- */
async function answerCard(env, page, label, n, shots) {
  const { check } = env;
  const wrong = n % 2 === 1;
  const plan = await cardPlan(page, wrong);
  if (!plan.awaiting) return false;
  check(!(await readyToGoOn(page)), `${label}: Next is enabled while a prompt is unanswered`);
  const before = await unitText(page);
  if (plan.probe) check(!before.includes(plan.probe), `${label}: the explanation is in the page before the answer ("${plan.probe}")`);
  check(await page.locator('.feedback, .answerline').count() === 0, `${label}: feedback is on screen before an answer`);
  if (shots === 'again') await shot(page, 'again-before');
  for (const sel of plan.clicks) await page.click(sel);
  const after = await unitText(page);
  if (plan.probe) check(after.includes(plan.probe), `${label}: the explanation is not shown after the answer ("${plan.probe}")`);
  check(await readyToGoOn(page), `${label}: Next is still disabled after the answer`);
  if (plan.kind === 'check') check(await page.locator('.feedback .marks .mark').count() >= 1, `${label}: a check showed no right-answer mark`);
  if (shots) await shot(page, shots === 'again' ? 'again-after' : shots);
  return true;
}

async function walkCards(env, page, opts) {
  const { check } = env;
  const first = await screenInfo(page);
  const seenCards = [];
  let answered = 0, checks = 0;
  for (let guard = 0; guard < 120; guard++) {
    const s = await screenInfo(page), label = `${opts.label}/${s.type}${s.id ? ' ' + s.id : ''}`;
    if (opts.layout) await layout(env, page, label);
    if (s.type === 'card') {
      seenCards.push(s.id);
      const bar = norm(await page.locator('.unitbar').textContent());
      check(bar === `Unit ${s.tag} · rev ${s.rev} · ${DRAFT} · Part ${s.part + 1} of ${s.parts.length} · Card ${s.cardNo} of ${s.total}`, `${label}: top bar reads "${bar}"`);
      check(norm(await page.locator('.eyebrow-row h1').textContent()) === s.heading, `${label}: heading is not "${s.heading}"`);
      if (s.index === 0) await shot(page, 'first-card');
      if (s.id === 'meet-dissonance' && opts.shots) await shot(page, 'meet-card');
      const shotName = !opts.shots ? null : s.id === 'again-dissonance' ? 'again' : s.id === 'look-dissonance-sunkcost' ? 'lookalike-after'
        : s.id === 'check-sunkcost' ? 'check-wrong' : null;
      if (await answerCard(env, page, label, answered, shotName)) answered++;
      if (s.kind === 'check') checks++;
      if (s.kind === 'worked') {
        while (await page.locator('#fwd').isEnabled() && (await page.evaluate(() => { const r = UNIT_RUN, c = r.v.card(r.flow[r.i].id); return r.cards[c.id].ui.step < c.steps.length; }))) {
          await page.click('#fwd');
          if (opts.layout) await layout(env, page, `${label}/screen`);
        }
        if (await answerCard(env, page, label, answered, opts.shots && s.id === 'worked-longrun' ? 'worked-last' : null)) answered++;
      }
      if (s.id === 'transfer') await fillTransfer(env, page, label);
    } else if (s.type === 'partend') {
      const want = `End of part ${s.part + 1}. You can stop here; your place is kept. Next: part ${s.part + 2}, ${s.parts[s.part + 1]}.`;
      check((await unitText(page)).includes(want), `${label}: the end-of-part screen does not read "${want}"`);
    } else if (s.type === 'drill') {
      const items = await playDrill(env, page, { ...opts, label });
      const authored = await page.evaluate(() => UNIT_RUN.v.unit.drill.rungs.flatMap(r => r.items.flat()).length);
      check(items >= authored, `${label}: ${items} drill items were asked of ${authored} authored`);
      continue;
    } else if (s.type === 'results') {
      await shot(page, 'results');
      const text = await unitText(page);
      check(/The drill is done/.test(text) && /first tries/.test(text) && /What comes back, and when/.test(text), `${label}: the results screen is missing its figures`);
    } else if (s.type === 'complete') {
      check(/Unit Two complete/.test(await unitText(page)), `${label}: no unit-complete screen`);
      break;
    }
    if (s.type !== 'drill') await page.click('#fwd');
  }
  return { seenCards, answered, checks, first };
}
async function fillTransfer(env, page, label) {
  await page.click('#transferNames .opt >> nth=0');
  await page.click('#transferPlaces .chip >> nth=1');
  await page.fill('#transferText', 'my brother, about the car');
  const note = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:notes')).u2.transfer);
  env.check(note.outcome && note.place && note.text === 'my brother, about the car', `${label}: the transfer note was not saved (${JSON.stringify(note)})`);
}

/* ---------- X1 to X3 on Unit Two, and what is stored after it ---------- */
export async function testRebuiltUnit(env) {
  const { check, freshPage } = env;
  const { context, page } = await freshPage(390);
  await page.addInitScript(() => { window.__timers = []; for (const n of ['setTimeout', 'setInterval']) { const o = window[n]; window[n] = (...a) => { window.__timers.push(n); return o(...a); }; } });
  await page.reload();
  // X5: the old counters are frozen. They are read, never written, so seed them and look at them after the session.
  await page.evaluate(seed => Object.entries(seed).forEach(([k, v]) => localStorage.setItem(k, v)), FROZEN);
  await page.reload();
  await env.openSubject(page, SUBJECT);
  await shot(page, 'subject-before');
  await env.clickVisible(page, `#screen [data-u="1"]`);
  await shot(page, 'first-card');
  const total = (await screenInfo(page)).total;
  check(total === 38, `Unit Two has ${total} cards on screen, not 38`);

  // X1: nothing advances by itself
  const bar0 = await page.locator('.unitbar').textContent();
  await page.waitForTimeout(1500);
  check(await page.locator('.unitbar').textContent() === bar0, 'a card advanced by itself');

  // Back, and the place being kept
  await page.click('#fwd'); await page.click('#fwd');
  await page.click('#back');
  check((await screenInfo(page)).cardNo === 2, 'Back from card 3 did not return to card 2');
  await page.click('#fwd');
  await page.click('[data-confused]');
  check(/Noted/.test(await unitText(page)), 'the "confused" control did not say it was noted');
  const log = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:log')));
  const note = log.find(e => e.type === 'confused');
  check(note && note.subject === SUBJECT && note.unit === UNIT_ID && note.rev === 1 && note.card === 'meet-dissonance', `confused was logged as ${JSON.stringify(note)}`);
  await page.click('[data-v="subject"]');
  const rowText = await unitText(page);
  check(/Card 3 of 38 · in progress/.test(rowText), `the subject row does not show the place ("${rowText.slice(rowText.indexOf('One person'), rowText.indexOf('One person') + 120)}")`);
  await page.click('#resume');
  check((await screenInfo(page)).cardNo === 3, 'Resume did not return to the card the learner left');

  const result = await walkCards(env, page, { label: '390px unit', layout: false, shots: true, wrongRoute: true });
  const order = await page.evaluate(() => UNIT_RUN.v.cardOrder), expected = order.slice(order.indexOf(result.first.id));
  check(result.seenCards.length === expected.length, `the walk met ${result.seenCards.length} cards, not ${expected.length}`);
  check(JSON.stringify(result.seenCards) === JSON.stringify(expected), 'cards did not come in the order of unit.parts');
  check((await page.evaluate(() => window.__timers.length)) === 0, 'the app set a timer while a unit was running (X1)');

  // what is stored afterwards
  const seen = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:seen')));
  check(seen.u2 && seen.u2.done === true && seen.u2.rev === 1 && seen.u2.at === 'close', `pl:psychology:seen.u2 is ${JSON.stringify(seen.u2)}`);
  const items = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:items')));
  const keys = Object.keys(items);
  check(keys.some(k => k.startsWith('u2/commit:')), 'no commit prompt was recorded');
  check(keys.filter(k => !k.startsWith('u2/commit:') && items[k].tries.some(t => t.mode === 'check')).length >= 5, 'the checks were not recorded');
  check(keys.some(k => items[k].tries.some(t => t.mode === 'route' && t.context === 'unit')), 'no route item was recorded');
  check(keys.filter(k => k.startsWith('u2/')).every(k => items[k].tries.every(t => t.rev === 1 && t.engine === 1 && /^\d{4}-\d\d-\d\d$/.test(t.d))), 'a try is missing its revision, engine or day');
  check(await page.evaluate(() => rebuiltUnitDone('psychology', 'u2')), 'Unit Two is not done at standard 1');
  await page.click('[data-v="subject"]');
  await shot(page, 'subject-after');
  // X5, as far as a session through a unit goes: only the keys of lesson standard E8, and the frozen counters untouched
  const stored = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
  const E8_KEYS = /^pl:(app|recent|mixed|log)$|^pl:[a-z]+:(items|seen|notes|stats:[a-z0-9]+)$/;
  check(Object.keys(stored).every(k => E8_KEYS.test(k)), `storage holds keys outside the list of lesson standard E8: ${Object.keys(stored).filter(k => !E8_KEYS.test(k)).join(', ')}`);
  check(Object.entries(FROZEN).every(([k, v]) => stored[k] === v), 'a frozen counter (pl:<subject>:stats:*, pl:mixed) was written during a unit session');
  check(!('pl:psychology:course' in stored), 'the old pl:psychology:course key was written');
  const after = await unitText(page);
  check(/1 of 6 units/.test(after), `after Unit Two the subject says "${after.match(/\d of \d units/)}"`);
  await context.close();
}

/* ---------- X3: every card at 360px, answered ---------- */
export async function testUnitAt360(env) {
  const { context, page } = await env.freshPage(360);
  await env.openSubject(page, SUBJECT);
  await env.clickVisible(page, `#screen [data-u="1"]`);
  await walkCards(env, page, { label: '360px unit', layout: true, shots: false, wrongRoute: false });
  await context.close();
}

/* ---------- X6: the draft line, and no revision on an old unit ---------- */
export async function testDraftAndOldUnits(env) {
  const { check, freshPage } = env;
  const { context, page } = await freshPage(390);
  await env.openSubject(page, SUBJECT);
  const rows = await page.evaluate(() => [...document.querySelectorAll('#screen [data-u]')].map(r => r.textContent.replace(/\s+/g, ' ').trim()));
  check(rows[1].includes(DRAFT) && /rev 1/i.test(rows[1]), `the Unit Two row reads "${rows[1]}"`);
  rows.filter((_, i) => i !== 1).forEach((r, i) => check(!/rev|draft/i.test(r), `an old unit's row shows a revision or a draft line: "${r}"`));
  await env.clickVisible(page, '#screen [data-u="1"]');
  check((await page.locator('.unitbar').textContent()).includes(DRAFT), 'the draft line is not in the top bar');
  await page.click('[data-v="subject"]');
  await env.clickVisible(page, '#screen [data-u="0"]');
  const old = norm(await page.locator('#screen .topbar').first().textContent());
  check(!/rev|draft/i.test(old), `an old unit's top bar shows "${old}"`);
  await context.close();
}

/* ---------- X4: old progress carries over once, and never changes twice ---------- */
export async function testMigration(env) {
  const { check, freshPage } = env;
  const { context, page } = await freshPage(390);
  const course = { u: 2, card: 1, phase: 'read', done: [true, true, true, false, false, false] };
  const math = { u: 1, card: 0, phase: 'read', done: [true, false, false, false, false, false] };
  await page.evaluate(([c, m]) => { localStorage.setItem('pl:psychology:course', JSON.stringify(c)); localStorage.setItem('pl:math:course', JSON.stringify(m)); }, [course, math]);
  await page.reload();
  await env.openSubject(page, SUBJECT);
  const text = await unitText(page);
  const rows = await page.evaluate(() => [...document.querySelectorAll('#screen [data-u]')].map(r => r.textContent.replace(/\s+/g, ' ').trim()));
  check(/Rebuilt: start again/.test(rows[1]), `old Unit Two finished: its row reads "${rows[1]}"`);
  check(/2 of 6 units/.test(text), `old Units One, Two, Three finished: the subject counts "${text.match(/\d of \d units/)}", not 2 of 6`);
  check(await page.evaluate(() => unitDone(SUBJECTS.find(s => s.id === 'psychology'), 1)) === false, 'old Unit Two counts as done after it was rebuilt');
  const seen = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:psychology:seen')));
  check(seen.u1.done === true && seen.u3.done === true && seen.u2.done === false && seen.u2.rev === 0, `migrated progress is ${JSON.stringify(seen)}`);
  const mathSeen = await page.evaluate(() => JSON.parse(localStorage.getItem('pl:math:seen')));
  check(mathSeen.u1.done === true, `a finished Basic Math unit did not stay finished (${JSON.stringify(mathSeen)})`);

  // safe to run again: in the page, and after a reload
  const snapshot = () => page.evaluate(() => JSON.stringify(Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)]))));
  const first = await snapshot();
  await page.evaluate(() => SUBJECTS.forEach(s => migrateProgress(s.id, s.course.map(u => u.id), id => !!FC.get(s.id).units[id])));
  check(await snapshot() === first, 'running the migration a second time changed storage');
  await page.reload();
  await env.openSubject(page, SUBJECT);
  await env.clickVisible(page, '#screen [data-u="3"]');
  await page.click('[data-v="subject"]');
  const stored = await page.evaluate(() => localStorage.getItem('pl:psychology:course'));
  check(stored === JSON.stringify(course), 'the old pl:psychology:course key was written to again');
  await context.close();
}
