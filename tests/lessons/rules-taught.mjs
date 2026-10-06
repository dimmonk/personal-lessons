// Section 8, "shown before asked" and "used after taught": V5, V6, V7. A learner meets the cards in order, and each rule is
// a statement about what the learner has been taught at the point something is asked or named.
import { unitRule, checkEach } from './rule.mjs';
import { tokensOf, prose, hasToken } from './text.mjs';

const walks = new WeakMap();

// What has been taught when each card is read. The orient preview does not count as teaching (V5).
function initialState(u) {
  const shown = new Set(u.assumedSteps.flatMap(s => [`q:${s.code}`, ...s.options.map(o => `a:${s.code}.${o.id}`)]));
  // terms an assumed unit taught on its own term card may be used from the first card (S2 assumes)
  const assumedTerms = (u.key.terms || []).filter(t => u.unit.assumes.includes(t.unit)).map(t => t.id);
  // so may the names an assumed unit taught: its outcomes, and the gate's families if the gate unit is assumed
  const gateAssumed = u.key.gate && u.unit.assumes.includes(u.key.gate.unit);
  [...u.key.outcomes.filter(o => u.unit.assumes.includes(o.unit)).map(o => o.id), ...(gateAssumed ? u.key.gate.options.map(o => o.id) : [])]
    .forEach(id => shown.add(`o:${id}`));
  return { shown, printed: new Set(u.assumedSteps.map(s => `q:${s.code}`)), introduced: new Set(assumedTerms) };
}

function teach(u, c, state) {
  if (c.kind === 'term') state.introduced.add(c.term);
  if (c.kind === 'meet' && !c.continues) {   // a continuing card carries prose only; its chain's first card introduced the name
    state.printed.add(`q:${c.feature.step}`);
    state.shown.add(`o:${c.outcome || c.family}`);   // a gate unit's meet card introduces a family (A15)
    state.shown.add(`a:${c.feature.step}.${c.feature.option}`);
    // the meet card also prints this name's answers to the unit's other questions (the app's meetOtherSteps)
    if (c.outcome) u.unitSteps().filter(s => s.code !== c.feature.step).forEach(s => s.options.filter(o => o.keeps.includes(c.outcome)).forEach(o => {
      state.shown.add(`a:${s.code}.${o.id}`); state.printed.add(`q:${s.code}`);
    }));
  }
  if (c.kind === 'question') {
    state.shown.add(`q:${c.step}`);
    state.printed.add(`q:${c.step}`);
    u.step(c.step).options.forEach(o => state.shown.add(`a:${c.step}.${o.id}`));
  }
}

// The text a card prints through its case: the case's segments, reason and not.
const caseProse = (u, c) => c.case && u.cases[c.case] ? prose({ s: u.cases[c.case].segments, r: u.cases[c.case].reason, n: u.cases[c.case].not }) : [];

function tokenProblems(u, c, state, found) {
  for (const [path, text] of [...prose(c), ...caseProse(u, c)]) {
    for (const { kind, ref } of tokensOf(text)) {
      const where = `${c.id}${path}`;
      if (kind === 'q' && !(state.printed.has(`q:${ref}`) || c.kind === 'lens')) found.v5.push(`${where}: question ${ref} used before any card has printed it`);
      if (['t', 'means'].includes(kind)) {
        if (!state.introduced.has(ref)) found.v7.push(`${where}: term ${ref} used before its term card`);
        else if (c.kind !== 'term') found.usedTerms.add(ref);
      }
      if (['o', 'needs'].includes(kind) && !state.shown.has(`o:${ref}`)) found.v7.push(`${where}: ${ref} named before its meet card`);
      if (['a', 'when'].includes(kind) && !state.shown.has(`a:${ref}`)) found.v5.push(`${where}: answer ${ref} used before a card has taught it`);
    }
  }
}

function askProblems(u, c, state, found) {
  const need = (token, where) => { if (!state.shown.has(token)) found.v5.push(`${where} uses ${token} before a card has taught it`); };
  // a fact check and a problem to finish ask no key question, so there is no answer to have been taught first (A12)
  if (c.kind === 'check' && c.ask.step && c.ask.type !== 'phrase') {
    if (c.ask.type === 'step') need(`q:${c.ask.step}`, c.id);
    (c.ask.among || u.step(c.ask.step).options.map(o => o.id)).forEach(id => need(`a:${c.ask.step}.${id}`, c.id));
  }
  if (c.kind === 'lookalike' && c.prompt.option) need(`a:${c.prompt.option}`, c.id);
}

function drillTaughtProblems(u, state, found) {
  const tokens = [...u.taught.map(o => `o:${o}`), ...u.unitSteps().flatMap(s => [`q:${s.code}`, ...s.options.map(o => `a:${s.code}.${o.id}`)])];
  tokens.filter(t => !state.shown.has(t)).forEach(t => found.v5.push(`the drill uses ${t} before a card has taught it`));
}

function walk(u) {
  if (walks.has(u)) return walks.get(u);
  const state = initialState(u);
  const found = { v5: [], v7: [], usedTerms: new Set() };
  for (const c of u.cards) {
    teach(u, c, state);
    if (c.kind !== 'orient') tokenProblems(u, c, state, found);
    askProblems(u, c, state, found);
  }
  drillTaughtProblems(u, state, found);
  walks.set(u, found);
  return found;
}

export const V5 = unitRule('V5', (u, check) => checkEach(check, 'a card', walk(u).v5));
export const V7 = unitRule('V7', (u, check) => checkEach(check, 'a card', walk(u).v7));

/* ---------- V6 ---------- */
function practicedCases(u) {
  return [...u.cards.filter(c => c.kind === 'check').map(c => u.cases[c.case]),
    ...u.unit.drill.rungs.flatMap(r => u.flat(r).map(u.caseOf)).filter(u.isStory)];
}

export const V6 = unitRule('V6', (u, check) => {
  const practiced = practicedCases(u);
  u.taught.forEach(o => check(practiced.some(c => c.outcome === o), `${o} is never the answer of a check or drill item`));
  u.unitSteps().forEach(s => s.options.forEach(opt => check(practiced.some(c => c.route && c.route[s.code] && c.route[s.code].includes(opt.id)), `${s.code}.${opt.id} is never the right answer of a check or drill item`)));   // a problem to finish has no route
  const drillText = u.unit.drill.rungs.flatMap(r => [...u.flat(r).map(u.caseOf), u.cases[r.demo]]).filter(Boolean).flatMap(c => prose(c).map(([, s]) => s)).join(' ');
  for (const t of u.unit.teaches.terms) {
    const termCards = u.cards.filter(c => c.kind === 'term' && c.term === t).length;
    check(termCards === 1, `term ${t}: needs exactly one term card, has ${termCards}`);
    check(walk(u).usedTerms.has(t), `term ${t}: no later card uses it by token`);
    const inDrill = hasToken(drillText, 't', t);
    const inKey = u.keyLines.some(l => hasToken(l, 't', t) || hasToken(l, 'means', t));
    check(inDrill || inKey, `term ${t}: no drill item or key line uses it by token`);
  }
});

export const RULES_TAUGHT = [V5, V6, V7];
