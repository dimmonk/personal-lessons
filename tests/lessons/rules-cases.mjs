// Section 8, cases and feedback: V30 to V35, V37, V52, V53, V54. A rule that reads a unit's own cases runs per unit;
// the part of it that reads specimens (which belong to the subject, not to a unit) runs once per subject under the same id.
import { unitRule, subjectRule, checkEach } from './rule.mjs';
import { cuesOf, joined, hasToken, isFilled, unique, duplicatesOf } from './text.mjs';

const unitAndSubject = (id, run) => [unitRule(id, run), subjectRule(id, run)];
const isUnit = ctx => ctx.unitId !== undefined;
// the cases a rule looks at in this scope: a unit's story cases, or the subject's specimens
const stories = ctx => ctx.storyCases();
const caseName = c => `case ${c.id}`;
// What a case is a case of: its outcome, or in a gate unit the family its gate answer names (A15: gate cases carry a route and no outcome).
const nameOfCase = (ctx, c) => c.outcome || (ctx.key.gate && c.route && c.route[ctx.key.gate.code] ? c.route[ctx.key.gate.code][0] : null);
const isFamily = (ctx, id) => !ctx.key.outcomes.some(o => o.id === id);

/* ---------- V30: marked words and tappable pieces ---------- */
function V30(ctx, check) {
  for (const c of stories(ctx)) {
    const problems = [
      ...Object.keys(c.cues || {}).flatMap(step => cuesOf(c, step).filter(cue => !c.text.includes(cue)).map(cue => `marked words for ${step} are not in the text: "${cue}"`)),
      ...(c.segments || []).filter(s => !c.text.includes(s.text)).map(s => `tappable piece is not in the text: "${s.text}"`),
      ...ctx.stepsAsked(c).filter(step => cuesOf(c, step).length === 0).map(step => `asked on ${step} but has no marked words for it`)];
    checkEach(check, caseName(c), problems);
  }
  if (isUnit(ctx)) tapPromptProblems(ctx).forEach(p => check(false, p));
}

// "tap the words": exactly one piece holds the answer, and every other piece has a note.
function tapPromptProblems(u) {
  const taps = u.cards.filter(c => (c.prompt && c.prompt.kind === 'phrase') || (c.kind === 'check' && c.ask.type === 'phrase'));
  return taps.flatMap(c => {
    const kase = u.cases[c.second || c.case];
    const answer = c.prompt ? c.prompt.answer : c.ask.answer;
    const segments = kase.segments || [];
    const holding = segments.filter(s => s.text.includes(answer));
    const bad = [];
    if (holding.length !== 1) bad.push(`card ${c.id}: exactly one tappable piece must hold the answer, ${holding.length} do`);
    if (!segments.every(s => s.text.includes(answer) || isFilled(s.note))) bad.push(`card ${c.id}: every other tappable piece needs a note`);
    return bad;
  });
}

/* ---------- V31: routes ---------- */
function expectedSteps(ctx, c) {
  if (isFamily(ctx, nameOfCase(ctx, c))) return [ctx.key.gate.code];   // a gate case is asked the gate question only
  const outcome = ctx.outcome(c.outcome);
  return [...(ctx.key.gate ? [ctx.key.gate.code] : []), ...(ctx.key.branches[outcome.group] || []).map(s => s.code)];
}

function survivors(ctx, c) {
  return ctx.routeSteps(c).reduce((ids, step) => ids.filter(id => c.route[step].every(opt => ctx.option(step, opt).keeps.includes(id))), ctx.key.outcomes.map(o => o.id));
}

function V31(ctx, check) {
  for (const c of stories(ctx)) {
    const want = expectedSteps(ctx, c);
    const have = ctx.routeSteps(c);
    check(want.length === have.length && want.every(code => have.includes(code)), `${caseName(c)}: its route must cover the gate and every question of its branch (${want.join(', ')})`);
    if (isFamily(ctx, nameOfCase(ctx, c))) {
      const gate = ctx.key.gate;
      check(c.route[gate.code].length === 1 && gate.options.some(o => o.id === c.route[gate.code][0]), `${caseName(c)}: its route must give exactly one answer to the gate question`);
      continue;
    }
    const live = survivors(ctx, c);
    check(live.length === 1 && live[0] === c.outcome, `${caseName(c)}: its route must leave exactly ${c.outcome}, it leaves ${live.join(', ') || 'nothing'}`);
  }
}

/* ---------- V32: every case used once, in the right place ---------- */
// The cases a card shows or names.
const casesShownBy = c => [c.case, c.first, c.second, ...(c.cases || []), c.problem,
  c.impression && c.impression.resembles, c.impression && c.impression.first].filter(Boolean);
const casesUsedByCards = u => new Set(u.cards.flatMap(casesShownBy));

export const V32 = unitRule('V32', (u, check) => {
  const drillIds = u.unit.drill.rungs.flatMap(r => [...u.flat(r).map(i => typeof i === 'string' ? i : i.case), r.demo]).filter(Boolean);
  const inDrill = new Set([...drillIds, ...u.unit.drill.returns]);
  const inCards = casesUsedByCards(u);
  inDrill.forEach(id => {
    check(!inCards.has(id), `${id}: a card's case is also used in practice`);
    check(['drill', 'return', 'claim'].includes(u.cases[id].use), `${id}: used in practice but its use is "${u.cases[id].use}"`);
  });
  const baseline = new Set(u.meta.baseline || []);   // the short check asked before an action subject's first unit (E21)
  u.caseList.forEach(c => check(inCards.has(c.id) || inDrill.has(c.id) || baseline.has(c.id), `${c.id}: used by nothing`));
  duplicatesOf(u.caseList.map(c => c.text).filter(Boolean)).forEach(t => check(false, `two cases share the same text: "${t.slice(0, 40)}"`));
});

/* ---------- V33: settings ---------- */
function V33(ctx, check) {
  const settings = ctx.meta.settings;
  for (const c of stories(ctx)) check(settings.includes(c.setting), `${caseName(c)}: setting "${c.setting}" is not in subject.settings`);
  if (!isUnit(ctx)) return;
  for (const o of ctx.taught) {
    const spanned = unique(ctx.caseList.filter(c => c.outcome === o).map(c => c.setting));
    check(spanned.length >= 3, `${o}: its cases span only ${spanned.length} settings`);
  }
}

/* ---------- V34: a misleading case comes late ---------- */
const EARLY_STAGES = ['name', 'piece', 'finish'];

export const V34 = unitRule('V34', (u, check) => {
  for (const c of u.cards) {
    for (const id of casesShownBy(c).filter(i => u.cases[i].tier === 'misleading' && u.cases[i].outcome)) {
      check(u.pos(c.id) > u.at('check', k => k.after === u.cases[id].outcome), `card ${c.id}: the misleading case ${id} comes before its outcome's check`);
    }
  }
  u.unit.drill.rungs.filter(r => EARLY_STAGES.includes(r.ask)).forEach(r =>
    u.flat(r).map(u.caseOf).filter(Boolean).forEach(c => check(c.tier !== 'misleading', `${c.id}: a misleading case in the ${r.ask} stage; it belongs in the route stage`)));
});

/* ---------- V35: a reason for every question, and the nearest wrong name ---------- */
const hasCue = (c, step) => hasToken(joined(c.reason && c.reason[step]), 'cue', step);

function reasonProblems(ctx, c, tapped) {
  return ctx.stepsAsked(c).filter(step => !(c.reason && isFilled(c.reason[step]) && (tapped || hasCue(c, step))))
    .map(step => `needs a reason for ${step} that quotes its marked words with {cue:${step}}`);
}

function notProblems(ctx, c) {
  if (c.use === 'check' || ctx.stepsAsked(c).length === 0) return [];
  if (!c.not) return ['needs a "not" naming a look-alike of its outcome'];
  const name = nameOfCase(ctx, c);
  return c.not.outcome !== name && ctx.ledgerFor(name, c.not.outcome) ? [] : [`"not" names ${c.not.outcome}, which is not a ledger neighbor of ${name}`];
}

function reasonPrompts(u) {
  return u.cards.filter(c => c.kind === 'solved' && c.hold).map(c => [c.id, c.hold.prompt]);
}

function V35(ctx, check) {
  const tappedCase = id => isUnit(ctx) && ctx.cards.some(k => k.kind === 'check' && k.case === id && k.ask.type === 'phrase');
  for (const c of stories(ctx)) checkEach(check, caseName(c), [...reasonProblems(ctx, c, tappedCase(c.id)), ...notProblems(ctx, c)]);
  if (!isUnit(ctx)) return;
  for (const [id, p] of reasonPrompts(ctx)) {
    check(p.choices.filter(x => x.id === p.answer).length === 1, `card ${id}: a reason prompt needs exactly one right choice`);
    check(p.choices.every(x => x.id === p.answer || isFilled(x.note)), `card ${id}: a reason prompt needs a note on every other choice`);
  }
}

/* ---------- V37: legitimate cases in an action subject ---------- */
// The key marks the names of cases where nothing is wrong with legit: true, on an outcome or a gate answer (S1). In an action subject the
// key marks at least one, and every drill stage that asks about cases holds a case with one of those names, so a learner is never
// taught that every case has a fault (A10, E6). The app refuses to start such a drill, and this rule catches it first.
const isLegitCase = (ctx, c) => Boolean(ctx.things[nameOfCase(ctx, c)] && ctx.things[nameOfCase(ctx, c)].legit);

export const V37_subject = subjectRule('V37', (s, check) => {
  if (!s.meta.action) return;
  check(Object.values(s.things).some(t => t.legit), 'the subject is an action subject, and no outcome or gate answer of its key is marked legit: true');
});

export const V37_unit = unitRule('V37', (u, check) => {
  if (!u.meta.action) return;
  for (const r of u.unit.drill.rungs) {
    const cases = u.flat(r).map(u.caseOf).filter(c => c && c.kind !== 'reverse' && c.use !== 'claim');
    if (cases.length > 0) check(cases.some(c => isLegitCase(u, c)), `the ${r.ask} stage asks about cases and none is a case where nothing is wrong (legit)`);
  }
}, { kinds: ['branch', 'gate'] });

/* ---------- V52: no two stories of one outcome share a topic ---------- */
function V52(ctx, check) {
  if (isUnit(ctx)) {
    for (const o of ctx.taught) {
      const topics = ctx.caseList.filter(c => c.outcome === o && c.topic).map(c => c.topic);
      checkEach(check, o, duplicatesOf(topics).map(t => `two of its cases share the topic "${t}"`));
    }
    return;
  }
  const unitTopics = ctx.allCaseLists.flatMap(([, list]) => list).filter(c => c.topic);
  for (const sp of ctx.specimens) check(!unitTopics.some(c => c.outcome === sp.outcome && c.topic === sp.topic), `specimen ${sp.id} shares its topic with a unit case of the same outcome`);
}

/* ---------- V53: also ---------- */
function alsoProblems(ctx, c) {
  return (c.also || []).flatMap(id => {
    const step = ctx.steps.find(s => c.route && c.route[s.code] && s.options.some(o => o.id === id));
    const loses = step && c.route[step.code].some(right => { const t = tieBreakIn(step, id, right); return t && t.loser === id; });
    return loses ? [] : [`"also" lists ${id}, which does not lose to one of its own answers by a tie-break in the key`];
  });
}
const tieBreakIn = (step, a, b) => {
  for (const [x, y] of [[a, b], [b, a]]) {
    const found = (step.options.find(o => o.id === x).yieldsTo || []).find(t => t.option === y);
    if (found) return { loser: x, winner: y };
  }
  return null;
};

function V53(ctx, check) {
  for (const c of stories(ctx).filter(k => k.also)) checkEach(check, caseName(c), alsoProblems(ctx, c));
}

/* ---------- V54: echo ---------- */
export const V54 = unitRule('V54', (u, check) => {
  check(u.routeCases.some(c => c.echo), 'no route-stage case echoes a named teaching case, so the second look is never practiced');
  for (const c of u.caseList.filter(k => k.echo)) {
    const target = u.cases[c.echo];
    check(Boolean(target.name) && target.use === 'teach' && nameOfCase(u, target) !== nameOfCase(u, c), `${caseName(c)}: echo must be a named teaching case of a different outcome`);
  }
}, { kinds: ['branch', 'gate'] });   // a fact unit has no routes, and a procedure unit's second look is the solved example (section 8 table)

export const RULES_CASES = [
  ...unitAndSubject('V30', V30), ...unitAndSubject('V31', V31), V32, ...unitAndSubject('V33', V33), V34,
  ...unitAndSubject('V35', V35), V37_subject, V37_unit, ...unitAndSubject('V52', V52), ...unitAndSubject('V53', V53), V54
];
