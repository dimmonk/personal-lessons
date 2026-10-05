// Section 8, the drill: V38 to V44. A drill is a ramp of stages; the app shuffles groups inside a tier band and never
// moves an item out of its group, so the authored groups are what the rules read.
import { unitRule, checkEach } from './rule.mjs';

const branchRule = (id, run) => unitRule(id, run, { branch: true });
const STAGE_ORDER = ['name', 'piece', 'finish', 'route', 'claim'];
const BRANCH_STAGES = ['name', 'piece', 'finish', 'route'];
const TIER_ORDER = ['clean', 'varied', 'misleading'];
const GROUPED_STAGES = ['name', 'finish', 'route'];
const MIN_ROUTE_ITEMS = 2;
const MIN_GROUP_CASES = 2;
const RETURNS_PER_OUTCOME = 3;
const RETURNS_PER_OUTCOME_ACTION = 4;

/* ---------- V38: stage order ---------- */
export const V38 = branchRule('V38', (u, check) => {
  const asks = u.unit.drill.rungs.map(r => r.ask);
  const positions = asks.map(a => STAGE_ORDER.indexOf(a));
  check(positions.every(p => p >= 0) && positions.every((p, i) => i === 0 || p > positions[i - 1]), `stages must come in the order name, piece, finish, route, then claim last; found ${asks.join(', ')}`);
  BRANCH_STAGES.forEach(a => check(asks.includes(a), `a branch unit needs a ${a} stage`));
  u.unit.drill.rungs.forEach(r => check(u.flat(r).length > 0, `the ${r.ask} stage has no item`));
});

/* ---------- V39: every taught outcome and question is practised ---------- */
export const V39 = branchRule('V39', (u, check) => {
  const name = u.flat(u.rung('name')).map(u.caseOf);
  const piece = u.flat(u.rung('piece'));
  for (const o of u.taught) {
    check(name.some(c => c && c.outcome === o), `${o}: never the answer of a name item`);
    check(u.routeCases.filter(c => c.outcome === o).length >= MIN_ROUTE_ITEMS, `${o}: fewer than ${MIN_ROUTE_ITEMS} route items`);
    check(piece.some(i => { const c = u.caseOf(i); return c && c.kind === 'reverse' && c.outcome === o; }), `${o}: no reverse item in the piece stage`);
  }
  u.unit.teaches.steps.forEach(code => check(piece.some(i => i.step === code), `${code}: never asked alone in the piece stage`));
});

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
  for (const r of u.unit.drill.rungs.filter(x => GROUPED_STAGES.includes(x.ask))) {
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

export const V42 = branchRule('V42', (u, check) => {
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
export const V43 = branchRule('V43', (u, check) => {
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
export const V44 = branchRule('V44', (u, check) => {
  const need = u.meta.action ? RETURNS_PER_OUTCOME_ACTION : RETURNS_PER_OUTCOME;
  u.taught.forEach(o => check(u.returns.filter(c => c.outcome === o).length >= need, `${o}: fewer than ${need} fresh cases for later days`));
});

export const RULES_DRILL = [V38, V39, V40, V41, V42, V43, V44];
