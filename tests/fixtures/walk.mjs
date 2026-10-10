// Helpers for playing a fixture unit through the real unit player (public/app/lessons/unit.js): loading a fixture subject into the
// page without touching public/, and working out from the data what to click to answer whatever is on screen.
// Everything that runs in the page uses only browser globals of the app, so it can be sent as source.
export const norm = s => s.replace(/\s+/g, ' ').trim();

// Registers a fixture subject in the page and adds it to the app's subject list, as the page would have done at load.
export async function loadFixture(page, register) {
  const id = await page.evaluate(register);
  await page.evaluate(id => { SUBJECTS.push(buildSubject(id, SUBJECTS.length)); }, id);
  return id;
}
// A fresh page with the fixture loaded and the unit opened in the player.
// `env.fault`, when there is one, is a function that puts a seeded fault into the page once the fixture is registered: a negative control.
export async function openFixtureUnit(env, register, unitId, width = 390) {
  const { context, page } = await env.freshPage(width);
  const id = await loadFixture(page, register);
  if (env.fault) await env.fault(page);
  await page.evaluate(([id, unitId]) => { const subj = SUBJECTS.find(s => s.id === id); openUnit(subj, subj.course.findIndex(u => u.id === unitId)); }, [id, unitId]);
  return { context, page, id };
}
export const screenInfo = page => page.evaluate(() => {
  const run = UNIT_RUN, s = run.flow[run.i], card = s.type === 'card' ? run.v.card(s.id) : null;
  return { ...s, index: run.i, kind: card && card.kind, ask: card && card.ask ? card.ask.type : null };
});
export const unitText = async page => norm(await page.locator('#screen').textContent());
// opens a card as if the learner had just got to it: nothing on it answered yet
export const gotoCard = (page, id) => page.evaluate(id => { const r = UNIT_RUN; delete r.cards[id]; r.i = r.flow.findIndex(s => s.id === id); paintUnit(); }, id);
export const gotoDrill = page => page.evaluate(() => { const r = UNIT_RUN; r.i = r.flow.findIndex(s => s.type === 'drill'); paintUnit(); });
// puts the drill on one stage with exactly these authored items, as if the learner had got there
export const showItems = (page, stage, raws) => page.evaluate(([stage, raws]) => {
  const run = UNIT_RUN.drillRun;
  run.started = true; run.si = run.stages.findIndex(s => s.ask === stage);
  const st = run.stages[run.si];
  st.shownIntro = true; st.queue = raws; run.qi = 0; run.current = null;
  mountDrillRun(document.getElementById('host'), run, () => {});
}, [stage, raws]);

// What to click to answer the card on screen (right, or deliberately wrong), and a sentence of the explanation that must not be
// in the page until then. { awaiting: false } when the card does not stop for an answer.
export const cardPlan = (page, wrong) => page.evaluate(wrong => {
  const run = UNIT_RUN, v = run.v, T = run.T, screen = run.flow[run.i], card = v.card(screen.id), cs = run.cards[card.id];
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };
  const other = (n, right) => (right + 1) % n;
  let clicks = null, explanation = null, cases = [];
  if (card.kind === 'again' || card.kind === 'exception') {
    const c = v.caseById(card.kind === 'again' ? card.second : card.case), right = tappableCase(T, c, card.prompt.answer, null).right;
    clicks = [`[data-pick="${wrong ? other(c.segments.length, right) : right}"]`];
    explanation = T.PP(card.kind === 'again' ? card.shared : card.because, c); cases = [c];
  } else if (card.kind === 'lookalike') {
    const pair = card.facts || card.cases, letter = card.prompt.answer === pair[0] ? 'A' : 'B';
    clicks = [`[data-pick="${wrong ? (letter === 'A' ? 'B' : 'A') : letter}"]`];
    explanation = T.PP(card.difference); cases = card.facts ? [] : card.cases.map(v.caseById);
  } else if (card.kind === 'worked' || card.kind === 'solved') {
    if (card.kind === 'worked' && cs.ui.step < card.steps.length) return { awaiting: false, kind: card.kind, last: false };
    const p = card.hold.prompt, c = v.caseById(card.kind === 'worked' ? card.case : card.problem);
    clicks = [`[data-pick="${wrong ? p.choices.find(x => x.id !== p.answer).id : p.answer}"]`];
    explanation = T.PP(card.hold.reason, c); cases = [c];
  } else if (card.kind === 'check') {
    const a = card.ask;
    if (a.type === 'fact') {
      const row = v.fact(a.row);
      clicks = [`[data-pick="${wrong ? v.card(row.card).rows.find(r => r.id !== row.id).id : row.id}"]`];
      explanation = T.PP(row.relates);
    } else if (a.type === 'solve') {
      const c = v.caseById(card.case), right = c.answer.choices.findIndex(x => x.id === c.answer.right);
      clicks = [`[data-pick="${wrong ? (right + 1) % c.answer.choices.length : right}"]`];
      explanation = T.PP(c.why, c);
    } else {
      const c = v.caseById(card.case), code = a.step;
      if (a.type === 'phrase') {
        const right = c.segments.findIndex(s => s.text.includes(a.answer));
        clicks = [`[data-pick="${wrong ? other(c.segments.length, right) : right}"]`];
      } else {
        const rightId = c.route[code][0], ids = a.type === 'option' ? a.among : v.step(code).options.map(o => o.id);
        clicks = [`[data-step="${code}"] .opt[data-o="${wrong ? ids.find(id => id !== rightId) : rightId}"]`];
      }
      explanation = T.P(c.reason[code], c).map(x => `<p>${x}</p>`).join(''); cases = [c];
    }
  } else return { awaiting: false, kind: card.kind };
  const caseText = cases.map(c => plain(`<p>${c.text}</p>`)).join(' ');
  // A sentence of the explanation often opens by quoting the case ("The words are «a sentence of the case»: ..."), so its first words are on
  // the screen before the answer. The probe is the first 60 characters of the sentence that are not a stretch of the case.
  const sentences = plain(explanation).split(/(?<=[.?!”])\s+/).filter(x => x.length >= 25 && !caseText.includes(x));
  const fresh = x => { for (let i = 0; i + 60 <= x.length; i++) if (!caseText.includes(x.slice(i, i + 60))) return x.slice(i, i + 60); return x.length < 60 ? x : null; };
  const probe = sentences.sort((x, y) => y.length - x.length).map(fresh).find(x => x);
  return { awaiting: true, kind: card.kind, clicks, probe: probe || null };
}, wrong);

// What to click to answer the drill item on screen.
export const drillPlan = (page, wrong) => page.evaluate(wrong => {
  const run = UNIT_RUN.drillRun, cur = run.current, item = cur.item, c = item.c, v = cur.v;
  const base = { stage: run.stages[run.si].ask, type: item.type, id: cur.id, mode: item.mode };
  const caseClicks = () => {
    const clicks = item.asked.map((code, n) => {
      const ids = item.among || v.step(code).options.map(o => o.id);
      return `[data-step="${code}"] .opt[data-o="${wrong && n === 0 && item.type === 'case' ? ids.find(id => !c.route[code].includes(id)) : c.route[code][0]}"]`;
    });
    if (item.askName) clicks.push(`#nameOpts .opt[data-n="${caseTarget(v, c)}"]`);
    return clicks;
  };
  if (item.type === 'case') return { ...base, clicks: caseClicks() };
  if (item.type === 'problem') {
    const right = c.answer.choices.findIndex(x => x.id === c.answer.right);
    return { ...base, clicks: [...(item.solve === 'route' ? caseClicks() : []), `[data-pick="${wrong ? (right + 1) % c.answer.choices.length : right}"]`] };
  }
  if (item.type === 'tap') return { ...base, clicks: [`[data-pick="${c.segments.findIndex(s => s.text.includes(item.answer))}"]`] };
  if (item.type === 'tell') return { ...base, clicks: [`[data-pick="${item.entry.id}"]`] };
  if (item.type === 'reverse') return { ...base, clicks: [`[data-pick="${c.options.findIndex(o => o.voice === c.outcome)}"]`] };
  if (item.type === 'separator') return { ...base, clicks: [`[data-pick="${wrong ? item.codes.find(code => code !== item.right) : item.right}"]`] };
  if (item.type === 'fact') return { ...base, clicks: [`[data-pick="${wrong ? v.card(item.row.card).rows.find(r => r.id !== item.row.id).id : item.row.id}"]`] };
  const parts = claimParts({ v, T: lessonText(v) }, c);
  return { ...base, clicks: [`[data-pick="${parts.answer}"]`] };
}, wrong);

// Whether the open worked card still has steps to show before its question.
export const workedStepsLeft = page => page.evaluate(() => { const r = UNIT_RUN, c = r.v.card(r.flow[r.i].id); return r.cards[c.id] ? r.cards[c.id].ui.step < c.steps.length : c.steps.length > 0; });
// Goes on from the screen the learner is on, answering what stops the way (a check, a commit prompt, the last step of a worked case).
export async function moveOn(page) {
  const s = await screenInfo(page);
  if (s.type === 'card') {
    if (s.kind === 'worked') while (await workedStepsLeft(page)) await page.click('#fwd');
    const plan = await cardPlan(page, false);
    if (plan.awaiting) for (const sel of plan.clicks) await page.click(sel);
  }
  await page.click('#fwd');
}

// Plays the whole drill, every item answered right. `wrongOnce`: the first item is answered wrong. `wrongEvery`: every nth item is.
// `onItem(page, answered)` is called on each item screen, before it is answered and again once its feedback is showing.
export async function playDrill(page, opts = {}) {
  const asked = [];
  for (let guard = 0; guard < 400; guard++) {
    if (await page.locator('.done-screen.results').count()) break;
    if (await page.locator('#start').count()) { await page.click('#start'); continue; }
    if (await page.locator('#next').count()) { if (opts.onItem) await opts.onItem(page, true); await page.click('#next'); continue; }
    if (opts.onItem) await opts.onItem(page, false);
    const wrong = (!!opts.wrongOnce && !asked.length) || (!!opts.wrongEvery && asked.length % opts.wrongEvery === opts.wrongEvery - 1);
    const plan = await drillPlan(page, wrong);
    asked.push(plan);
    for (const sel of plan.clicks) await page.click(sel);
  }
  return asked;
}

// Walks the open unit from the screen it is on to the unit-complete screen, answering everything right.
//   onScreen(info, page)          on each screen, before it is answered (layout checks)
//   onBefore(info, plan, page)    on a card that stops for an answer, before the answer
//   onAnswered(info, plan, page)  on that card, after it
//   onDrill(asked, page)          once the drill has been played;  onItem(page, answered): on each drill item
export async function walkUnit(page, { onScreen, onBefore, onAnswered, onDrill, onItem } = {}) {
  const seen = [];
  for (let guard = 0; guard < 400; guard++) {
    const s = await screenInfo(page);
    seen.push(s);
    if (onScreen) await onScreen(s, page);
    if (s.type === 'card') {
      if (s.kind === 'worked') {
        while (await page.evaluate(() => { const r = UNIT_RUN, c = r.v.card(r.flow[r.i].id); return r.cards[c.id].ui.step < c.steps.length; })) await page.click('#fwd');
      }
      const plan = await cardPlan(page, false);
      if (plan.awaiting) {
        if (onBefore) await onBefore(s, plan, page);
        for (const sel of plan.clicks) await page.click(sel);
        if (onAnswered) await onAnswered(s, plan, page);
      }
      if (s.kind === 'transfer') {
        await page.click('#transferNames .opt >> nth=0');
        await page.click('#transferPlaces .chip >> nth=1');
        await page.fill('#transferText', 'a line of my own');
      }
      if (s.kind === 'plan') {
        await page.click('#planCues .opt >> nth=0');
        await page.click('#planSave');
      }
    } else if (s.type === 'baseline') {
      if (await page.locator('[data-judge]').count()) await page.click('[data-judge="fine"]');
    } else if (s.type === 'drill') {
      const asked = await playDrill(page, { onItem });
      if (onDrill) await onDrill(asked, page);
      continue;
    } else if (s.type === 'complete') break;
    await page.click('#fwd');
  }
  return seen;
}
