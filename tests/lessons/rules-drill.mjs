// Section 8, the drill: V38 to V44. A drill is a ramp of stages; the app shuffles groups inside a tier band and never
// moves an item out of its group, so the authored groups are what the rules read. Each kind of unit has its own stages (the
// section 8 table, A12, A15): a branch unit name, piece, finish, route, claim; a gate unit piece, route, claim; a fact unit
// fact; a procedure unit last, whole, route.
import { unitRule, checkEach, BRANCH_LIKE } from './rule.mjs';
import { duplicatesOf } from './text.mjs';

const kindRule = (kinds, id, run) => unitRule(id, run, { kinds });
const branchRule = (id, run) => kindRule(BRANCH_LIKE, id, run);
// a quick lesson (section 19): the stages that carry the skill are required; naming, finishing, last-step and whole-problem stages are optional
const REQUIRED_STAGES = { branch: ['piece', 'route'], gate: ['piece', 'route'], fact: ['fact'], procedure: ['route'] };
const STAGE_ORDER = { branch: ['name', 'piece', 'finish', 'route', 'claim'], gate: ['piece', 'route', 'claim'], fact: ['fact'], procedure: ['last', 'whole', 'route'] };
const TIER_ORDER = ['clean', 'varied', 'misleading'];
const GROUPED_STAGES = { branch: ['name', 'finish', 'route'], procedure: ['last', 'whole', 'route'] };
const MIN_ROUTE_ITEMS = 1;
const hasStage = (u, ask) => u.unit.drill.rungs.some(r => r.ask === ask);
const MIN_GROUP_CASES = 2;
const RETURNS_PER_OUTCOME = 1;
const RETURNS_PER_OUTCOME_ACTION = 2;

/* ---------- V38: stage order ---------- */
export const V38 = unitRule('V38', (u, check) => {
  const order = STAGE_ORDER[u.kindName], asks = u.unit.drill.rungs.map(r => r.ask);
  const positions = asks.map(a => order.indexOf(a));
  check(positions.every(p => p >= 0) && positions.every((p, i) => i === 0 || p > positions[i - 1]), `stages must come in the order ${order.join(', ')} (claim last, where there is one); found ${asks.join(', ')}`);
  REQUIRED_STAGES[u.kindName].forEach(a => check(asks.includes(a), `a ${u.kindName} unit needs a ${a} stage`));
  u.unit.drill.rungs.forEach(r => check(u.flat(r).length > 0, `the ${r.ask} stage has no item`));
});

/* ---------- V39: every taught outcome and question is practiced ---------- */
function branchPractice(u, check) {
  const name = u.flat(u.rung('name')).map(u.caseOf);
  const piece = u.flat(u.rung('piece'));
  for (const o of u.taught) {
    if (hasStage(u, 'name')) check(name.some(c => c && c.outcome === o), `${o}: never the answer of a name item`);
    check(u.routeCases.filter(c => c.outcome === o).length >= MIN_ROUTE_ITEMS, `${o}: fewer than ${MIN_ROUTE_ITEMS} route items`);
  }
  u.unit.teaches.steps.forEach(code => check(piece.some(i => i.step === code), `${code}: never asked alone in the piece stage`));
}
// a procedure type is practiced on a problem with the working shown to the last step, on a whole problem, and on mixed routes (A12)
function procedurePractice(u, check) {
  for (const o of u.taught) {
    ['last', 'whole'].filter(stage => hasStage(u, stage)).forEach(stage => check(u.flat(u.rung(stage)).map(u.caseOf).some(c => c && c.outcome === o), `${o}: never the problem of a ${stage} item`));
    check(u.routeCases.filter(c => c.outcome === o).length >= MIN_ROUTE_ITEMS, `${o}: fewer than ${MIN_ROUTE_ITEMS} route items`);
  }
  u.unit.drill.rungs.forEach(r => u.flat(r).map(u.caseOf).filter(Boolean).forEach(c => check(c.kind === 'problem', `${c.id}: a ${r.ask} item must be a problem`)));
}
// every fact is asked from memory in the fact stage (A12): its row is the item
function factPractice(u, check) {
  const asked = u.flat(u.rung('fact')).filter(i => i.fact).map(i => i.fact);
  Object.keys(u.rows).forEach(id => check(asked.includes(id), `${id}: a fact that no item of the fact stage asks`));
  checkEach(check, 'the fact stage', duplicatesOf(asked).map(id => `${id} is asked twice`));
}
export const V39 = kindRule(['branch', 'fact', 'procedure'], 'V39', (u, check) => ({ branch: branchPractice, fact: factPractice, procedure: procedurePractice })[u.kindName](u, check));

/* ---------- V40: groups ---------- */
function reachable(u, cases) {
  const reached = new Set([cases[0].id]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const c of cases) {
      if (!reached.has(c.id) && cases.some(d => reached.has(d.id) && u.ledgerFor(c.outcome, d.outcome))) { reached.add(c.id); grew = true; }
    }
  }
  return reached.size === cases.length;
}

function groupProblems(u, group, floor) {
  if (!Array.isArray(group)) return { problems: ['items must be authored in groups'], band: floor };
  const cs = group.map(u.caseOf).filter(u.isStory);
  if (cs.length === 0) return { problems: [], band: floor };
  const band = TIER_ORDER.indexOf(cs[0].tier);
  const problems = [];
  if (new Set(cs.map(c => c.tier)).size !== 1 || band < floor) problems.push(`group ${cs.map(c => c.id)} mixes tiers or comes after a harder group`);
  if (cs.length < MIN_GROUP_CASES || !reachable(u, cs)) problems.push(`group ${cs.map(c => c.id)} is not held together by look-alike pairs`);
  return { problems, band };
}

export const V40 = branchRule('V40', (u, check) => {
  for (const r of u.unit.drill.rungs.filter(x => GROUPED_STAGES[u.kindName].includes(x.ask))) {
    r.items.reduce((floor, group) => {
      const { problems, band } = groupProblems(u, group, floor);
      checkEach(check, `stage ${r.ask}`, problems);
      return Math.max(floor, band);
    }, 0);
  }
});

/* ---------- V41: earlier units come back ---------- */
export const V41 = branchRule('V41', (u, check) => {
  const earlier = u.unit.drill.rungs.flatMap(r => u.flat(r)).filter(i => i.earlier);
  if (u.unit.assumes.length === 0) return;
  check(earlier.length > 0, 'a unit that assumes an earlier unit needs an earlier-unit drill item');
  earlier.forEach(i => check(u.unit.assumes.includes(i.earlier), `an earlier-unit item names "${i.earlier}", which this unit does not assume`));
});

/* ---------- V42: telling pairs apart ---------- */
const separates = (u, a, b) => u.unitSteps().filter(s => !s.options.some(o => o.keeps.includes(a) && o.keeps.includes(b)));

export const V42 = kindRule(['branch'], 'V42', (u, check) => {
  const piece = u.flat(u.rung('piece'));
  const tells = piece.filter(i => i.tell);
  check(tells.length > 0, 'the piece stage needs a "tell" item');
  tells.forEach(i => check(u.cards.some(c => c.ledger === i.tell), `tell item ${i.tell}: the pair has no card of its own`));
  piece.filter(i => i.separator).forEach(i => {
    const [a, b] = u.ledger(i.separator).pair;
    check(u.unit.teaches.steps.length >= 2 && separates(u, a, b).length === 1, `separator item ${i.separator}: exactly one of the unit's questions must separate the pair`);
  });
});

/* ---------- V43: claims ---------- */
export const V43 = kindRule(['branch'], 'V43', (u, check) => {
  const stage = u.rung('claim');
  if (stage.ask) {
    const asked = u.flat(stage);
    check(Boolean(stage.demo) && !asked.includes(stage.demo), 'the claim stage needs a demo claim that is not also asked');
    asked.forEach(id => check(u.cases[id].use === 'claim', `${id}: a claim stage item must be a claim`));
  }
  u.caseList.filter(c => c.use === 'claim').forEach(c => {
    const ok = c.ask.type === 'missing' ? u.taught.includes(c.ask.name) : Boolean(u.option(c.ask.step, c.ask.answer));
    check(ok, `${c.id}: ask must be "missing" with a taught outcome, or "option" with a real answer`);
  });
});

/* ---------- V44: returns ---------- */
// A fact returns as its row, beside the fact it is most often swapped with, read from the ledger (E9): no case is held back for it, and a
// pair of rows that the ledger names are asked next to each other, so the pair can come back together.
function factReturns(u, check) {
  check(u.unit.drill.returns.length === 0, 'a fact unit holds no cases for later days: a fact returns as its row');
  const groups = u.rung('fact').items.map(g => g.filter(i => i.fact).map(i => i.fact));
  u.unit.ledger.forEach(l => check(groups.some(g => l.pair.every(id => g.includes(id))), `ledger entry ${l.id}: its two facts must be asked in one group, so they come back together`));
}
export const V44 = kindRule(['branch', 'fact', 'procedure'], 'V44', (u, check) => {
  if (u.kindName === 'fact') return factReturns(u, check);
  const need = u.meta.action ? RETURNS_PER_OUTCOME_ACTION : RETURNS_PER_OUTCOME;
  u.taught.forEach(o => check(u.returns.filter(c => c.outcome === o).length >= need, `${o}: fewer than ${need} fresh cases for later days`));
});

export const RULES_DRILL = [V38, V39, V40, V41, V42, V43, V44];
