// Section 8, V0 (shape) and the rules about the key's completeness (V1), no private lists (V9), unique titles and drill keys (V49, V56).
// V0 owns "is this field present, of the right type, a known field, a valid enum, and does every id it names exist".
// V1 owns the content of the key (wording present, questions end in "?", names do not hold two names).
import { checkShape, relax } from './schema.mjs';
import { SUBJECT, KEY, UNIT, CARDS, SPECIMEN, caseShapeFor } from './shapes.mjs';
import { unitRule, subjectRule, checkEach } from './rule.mjs';
import { duplicatesOf, paras } from './text.mjs';

const messages = problems => problems.map(p => `${p.path} ${p.message}`);
const missing = (exists, what) => exists ? [] : [`${what} does not exist`];

/* ---------- V0, subject level: subject, key, specimens, ids ---------- */

const KEY_STRUCTURE = relax(KEY, ['id', 'code', 'options', 'keeps']);

function subjectShape(s) { return messages(checkShape({ id: s.subjectId, ...s.meta }, SUBJECT)).map(m => `subject record: ${m}`); }
function keyShape(s) { return messages(checkShape(s.key, KEY_STRUCTURE)).map(m => `key: ${m}`); }
function specimenShape(s) { return s.specimens.flatMap(sp => messages(checkShape(sp, SPECIMEN)).map(m => `specimen ${sp.id}: ${m}`)); }

function keyIds(s) {
  const dup = (what, ids) => duplicatesOf(ids).map(id => `${what} id "${id}" is used twice`);
  return [
    ...dup('outcome', s.key.outcomes.map(o => o.id)),
    ...dup('step', s.steps.map(st => st.code)),
    ...dup('term', (s.key.terms || []).map(t => t.id)),
    ...s.steps.flatMap(st => dup(`step ${st.code} option`, st.options.map(o => o.id))),
    ...dup('case', s.allCases.map(c => c.id))
  ];
}

const gateOptions = key => key.gate ? key.gate.options : [];

function keyReferences(s) {
  const unitIds = s.meta.units || [];
  const outcomes = s.key.outcomes.flatMap(o => [
    ...missing(unitIds.includes(o.unit), `outcome ${o.id}: unit "${o.unit}" in subject.units`),
    ...missing(gateOptions(s.key).some(g => g.id === o.group), `outcome ${o.id}: group "${o.group}" among the gate's answers`)]);
  const terms = (s.key.terms || []).flatMap(t => missing(unitIds.includes(t.unit), `term ${t.id}: unit "${t.unit}" in subject.units`));
  const steps = s.steps.flatMap(st => [
    ...missing(unitIds.includes(st.unit), `step ${st.code}: unit "${st.unit}" in subject.units`),
    ...st.options.flatMap(o => [
      ...o.keeps.flatMap(id => missing(s.outcomes[id], `${st.code}.${o.id} keeps outcome "${id}", which`)),
      ...(o.yieldsTo || []).flatMap(y => missing(st.options.some(x => x.id === y.option), `${st.code}.${o.id} yieldsTo "${y.option}", which is not an answer of the same question and`))])]);
  const branches = Object.keys(s.key.branches).flatMap(id => missing(gateOptions(s.key).some(g => g.id === id), `branch "${id}" is not an answer of the gate and`));
  return [...outcomes, ...terms, ...steps, ...branches];
}

function subjectReferences(s) {
  const unitIds = s.meta.units || [];
  const units = s.unitIds.flatMap(id => missing(unitIds.includes(id), `registered unit "${id}" is not in subject.units; it`));
  const listed = unitIds.flatMap(id => missing(s.unitIds.includes(id), `unit "${id}", listed in subject.units,`));
  const banks = s.allCaseLists.map(([id]) => id).flatMap(id => missing(unitIds.includes(id), `cases are registered for unit "${id}", which is not in subject.units; it`));
  const baseline = (s.meta.baseline || []).flatMap(id => missing(s.allCases.some(c => c.id === id), `baseline case "${id}"`));
  return [...units, ...listed, ...banks, ...baseline];
}

export const V0_subject = subjectRule('V0', (s, check) => {
  checkEach(check, 'subject', subjectShape(s));
  checkEach(check, 'key', keyShape(s));
  s.specimens.forEach(sp => checkEach(check, `specimen ${sp.id}`, messages(checkShape(sp, SPECIMEN))));
  checkEach(check, 'ids', keyIds(s));
  checkEach(check, 'references', [...keyReferences(s), ...subjectReferences(s)]);
});

/* ---------- V0, unit level ---------- */

const unitRecordShape = u => messages(checkShape(u.unit, UNIT));

function titleReference(u) {
  const t = u.unit.title;
  if (!t || !t.fromKey) return [];
  const [code, optionId] = String(t.fromKey).split('.');
  const step = u.steps.find(st => st.code === code);
  return missing(step && step.options.some(o => o.id === optionId), `title.fromKey "${t.fromKey}"`);
}

function teachesReferences(u) {
  const { teaches, assumes, ledger, parts } = u.unit;
  const earlier = u.meta.units.slice(0, Math.max(u.meta.units.indexOf(u.unitId), 0));
  return [
    ...teaches.steps.flatMap(c => missing(u.steps.some(st => st.code === c), `teaches.steps "${c}"`)),
    ...teaches.outcomes.flatMap(id => missing(u.outcomes[id], `teaches.outcomes "${id}"`)),
    ...teaches.terms.flatMap(id => missing(u.terms[id], `teaches.terms "${id}"`)),
    ...(teaches.families || []).flatMap(id => missing(gateOptions(u.key).some(o => o.id === id), `teaches.families "${id}"`)),
    ...assumes.flatMap(id => missing(earlier.includes(id), `assumes "${id}", which must be an earlier unit of this subject; it`)),
    ...ledger.flatMap(l => [
      ...l.pair.flatMap(id => u.kindName === 'fact' ? missing(u.rows[id], `ledger ${l.id}: fact row "${id}"`) : missing(u.things[id], `ledger ${l.id}: outcome "${id}"`)),
      // a ledger entry names the question that first separates its pair; a fact unit asks no question (S3)
      ...(u.kindName === 'fact' ? [] : missing(u.steps.some(st => st.code === l.step), `ledger ${l.id}: step "${l.step}"`)),
      ...missing(!l.taughtIn || u.cardsById[l.taughtIn], `ledger ${l.id}: taughtIn "${l.taughtIn}"`)]),
    ...parts.flatMap(p => [...p.cards, ...(p.close || [])].flatMap(id => missing(u.cardsById[id], `part ${p.id} lists card "${id}", which`))),
    ...duplicatesOf(ledger.map(l => l.id)).map(id => `ledger id "${id}" is used twice`),
    ...duplicatesOf(u.cardRecords.map(c => c.id)).map(id => `card id "${id}" is used twice`),
    ...u.unit.build.wrongIdeas.flatMap(w => missing(u.cardsById[w.card], `build.wrongIdeas card "${w.card}"`))
  ];
}

function cardShape(u, card) {
  const base = CARDS[card.kind];
  if (!base) return [`unknown card kind "${card.kind}"`];
  const schema = card.continues ? relax(base, ['id', 'kind', 'link']) : base;
  return messages(checkShape(card, schema));
}

const caseExists = (u, id) => Boolean(u.cases[id] || u.specimens.some(s => s.id === id));
// The references of a check: its case, the card it follows, and what it asks. A fact check has no case and sits after its facts card (S4).
function checkReferences(u, c, outcome, step) {
  const a = c.ask, after = u.cardsById[c.after];
  if (a.type === 'fact') return [[`fact row "${a.row}"`, Boolean(u.rows[a.row])], [`after "${c.after}", the facts card of row "${a.row}"`, Boolean(after && u.rows[a.row] && u.rows[a.row].card === c.after)]];
  const own = [['a case', Boolean(c.case)]];
  const afterRef = a.type === 'phrase' || a.type === 'solve' || u.steps.some(st => st.code === c.after) ? ['after', true] : outcome(c.after);
  if (a.type === 'solve') return [...own, afterRef];
  return [...own, afterRef, step(a.step), ...(a.among || []).map(id => [`among option "${id}"`, u.steps.some(st => st.code === a.step && st.options.some(o => o.id === id))])];
}
// The id references of one card, as [what, ok] pairs.
function cardReferences(u, c) {
  const outcome = id => [`outcome "${id}"`, Boolean(u.things[id])];
  const kase = id => [`case "${id}"`, Boolean(u.cases[id])];
  const step = code => [`step "${code}"`, u.steps.some(st => st.code === code)];
  const refs = [];
  if (c.outcome || c.family) refs.push(outcome(c.outcome || c.family));
  if (c.case) refs.push(kase(c.case));
  if (c.problem) refs.push(kase(c.problem));
  for (const id of [c.first, c.second, ...(c.cases || []), ...(c.testedBy || [])]) if (id) refs.push(kase(id));
  if (c.kind === 'term') refs.push([`term "${c.term}"`, Boolean(u.terms[c.term])]);
  if (c.kind === 'meet' && !c.continues) { refs.push(step(c.mark), step(c.feature.step), [`option "${c.feature.step}.${c.feature.option}"`, u.steps.some(st => st.code === c.feature.step && st.options.some(o => o.id === c.feature.option))]); }
  if (c.kind === 'again' || c.kind === 'question') refs.push(step(c.step));
  if (c.kind === 'orient' && c.map && !u.isGate) refs.push([`map.branch "${c.map.branch}"`, Boolean(u.key.branches[c.map.branch])]);
  if (['lookalike', 'exception'].includes(c.kind)) refs.push([`ledger "${c.ledger}"`, u.unit.ledger.some(l => l.id === c.ledger)]);
  if (c.kind === 'exception') refs.push(outcome(c.looksLike), outcome(c.is));
  if (c.kind === 'check') refs.push(...checkReferences(u, c, outcome, step));
  if (c.kind === 'refute') refs.push(u.things[c.about] || u.steps.some(st => st.code === c.about) ? ['about', true] : [`about "${c.about}"`, false]);
  if (c.kind === 'worked') refs.push(...c.steps.map(s => step(s.step)), outcome(c.hold.neighbor), kase(c.impression.resembles), ...(c.impression.first ? [kase(c.impression.first)] : []));
  if (c.kind === 'transfer') refs.push(...c.prompts.map(p => outcome(p.outcome || p.family)));
  if (c.prompt && c.prompt.kind === 'which' && c.prompt.option) {
    const [code, id] = c.prompt.option.split('.');
    refs.push([`prompt.option "${c.prompt.option}"`, u.steps.some(st => st.code === code && st.options.some(o => o.id === id))]);
  }
  if (c.kind === 'lookalike' && c.facts) refs.push(...c.facts.map(id => [`fact "${id}"`, Boolean(u.rows[id])]), [`prompt.answer "${c.prompt.answer}" is one of the two facts`, c.facts.includes(c.prompt.answer)]);
  if (c.kind === 'solved') refs.push([`hold.step ${c.hold.step} is a step of the card`, Number.isInteger(c.hold.step) && c.hold.step >= 0 && c.hold.step < c.steps.length]);
  if (c.kind === 'facts') refs.push([`concept "${c.concept}"`, Boolean(u.cardsById[c.concept])]);
  if (c.continues) refs.push([`continues "${c.continues}"`, Boolean(u.cardsById[c.continues])]);
  return refs.filter(([, ok]) => !ok).map(([what]) => `${what} does not exist`);
}

// A problem that is asked holds its working, its choices and why; a wrong choice names the slip that produces it (S6, section 15 item 3).
function problemParts(c) {
  if (c.kind !== 'problem' || !['check', 'drill', 'return'].includes(c.use)) return [];
  const missingParts = ['steps', 'answer', 'why'].filter(f => !c[f]).map(f => `a problem that is asked needs ${f}`);
  const choices = c.answer ? c.answer.choices : [];
  return [...missingParts,
    ...(c.answer && !choices.some(x => x.id === c.answer.right) ? [`answer.right "${c.answer.right}" is not one of the choices`] : []),
    ...choices.filter(x => c.answer && x.id !== c.answer.right && !x.slip).map(x => `wrong choice "${x.id}" names no slip`)];
}

function caseReferences(u, c) {
  const refs = [];
  const option = (code, id) => u.steps.some(st => st.code === code && st.options.some(o => o.id === id));
  if (c.outcome) refs.push([`outcome "${c.outcome}"`, Boolean(u.things[c.outcome])]);
  for (const [code, ids] of Object.entries(c.route || {})) ids.forEach(id => refs.push([`route ${code}.${id}`, option(code, id)]));
  for (const code of [...Object.keys(c.cues || {}), ...Object.keys(c.reason || {})]) refs.push([`step "${code}"`, u.steps.some(st => st.code === code)]);
  if (c.not) refs.push([`not.outcome "${c.not.outcome}"`, Boolean(u.things[c.not.outcome])]);
  for (const id of c.also || []) refs.push([`also "${id}"`, u.steps.some(st => st.options.some(o => o.id === id))]);
  if (c.echo) refs.push([`echo "${c.echo}"`, caseExists(u, c.echo)]);
  for (const k of Object.keys(c.miss || {})) refs.push([`miss "${k}"`, Boolean(u.outcomes[k]) || u.steps.some(st => st.options.some(o => o.id === k))]);
  for (const o of c.options || []) refs.push([`option voice "${o.voice}"`, Boolean(u.things[o.voice])]);
  if (c.ask && c.ask.type === 'missing') refs.push([`ask.name "${c.ask.name}"`, Boolean(u.things[c.ask.name])]);
  if (c.ask && c.ask.type === 'option') refs.push([`ask.answer "${c.ask.step}.${c.ask.answer}"`, option(c.ask.step, c.ask.answer)]);
  return [...problemParts(c), ...refs.filter(([, ok]) => !ok).map(([what]) => `${what} does not exist`)];
}

function drillReferences(u) {
  const { drill } = u.unit;
  const rungItems = u.unit.drill.rungs.flatMap(r => r.items.flat());
  const itemRefs = rungItems.flatMap(item => {
    if (typeof item === 'string') return missing(u.cases[item], `drill case "${item}"`);
    return [
      ...(item.case ? missing(u.cases[item.case], `drill case "${item.case}"`) : []),
      ...(item.step ? missing(u.steps.some(st => st.code === item.step), `drill step "${item.step}"`) : []),
      ...[item.tell, item.separator].filter(Boolean).flatMap(id => missing(u.unit.ledger.some(l => l.id === id), `drill ledger entry "${id}"`)),
      ...(item.earlier ? missing(u.meta.units.includes(item.earlier), `drill earlier unit "${item.earlier}"`) : []),
      ...(item.fact ? missing(u.cards.some(c => c.kind === 'facts' && c.rows.some(r => r.id === item.fact)), `drill fact row "${item.fact}"`) : [])];
  });
  const demos = drill.rungs.filter(r => r.demo).flatMap(r => missing(u.cases[r.demo], `rung demo "${r.demo}"`));
  return [...itemRefs, ...demos, ...drill.returns.flatMap(id => missing(u.cases[id], `drill.returns "${id}"`))];
}

export const V0_unit = unitRule('V0', (u, check) => {
  checkEach(check, 'unit record', unitRecordShape(u));
  checkEach(check, 'unit record', [...titleReference(u), ...teachesReferences(u)]);
  u.cardRecords.forEach(c => checkEach(check, `card ${c.id}`, [...cardShape(u, c), ...(CARDS[c.kind] ? cardReferences(u, c) : [])]));
  u.caseRecords.forEach(c => checkEach(check, `case ${c.id}`, [...messages(checkShape(c, caseShapeFor(c))), ...caseReferences(u, c)]));
  checkEach(check, 'drill', drillReferences(u));
});

/* ---------- V1: the key is complete, and no name is two names joined ---------- */

const JOINED_NAME = /[\/(\[→–—]| - /;
const hasWording = x => typeof x === 'string' ? x !== '' : paras(x).length > 0;

function outcomeProblems(o) {
  const strs = ['n', 'plain', 'group', 'unit'].filter(f => typeof o[f] !== 'string' || !o[f]);
  const problems = strs.map(f => `${f} is missing`);
  if (!hasWording(o.needs)) problems.push('needs is missing');
  if (!Array.isArray(o.aka)) problems.push('aka is missing (an empty list is allowed)');
  return problems;
}

function stepProblems(step) {
  const problems = [];
  if (!/\?$/.test(step.q || '')) problems.push('q must end in "?"');
  if (!hasWording(step.why)) problems.push('why is missing');
  for (const o of step.options) {
    if (!o.n) problems.push(`answer ${o.id}: n is missing`);
    if (!hasWording(o.when)) problems.push(`answer ${o.id}: when is missing`);
    if (!Array.isArray(o.keeps)) problems.push(`answer ${o.id}: keeps is missing`);
    for (const y of o.yieldsTo || []) {
      if (!step.options.some(x => x.id === y.option)) problems.push(`answer ${o.id}: yieldsTo "${y.option}" is not an answer of the same question`);
      if (!hasWording(y.say)) problems.push(`answer ${o.id}: yieldsTo "${y.option}" has no say`);
    }
  }
  const names = step.options.map(o => o.n);
  duplicatesOf(names).forEach(n => problems.push(`two answers share the wording "${n}"`));
  return problems;
}

export const V1 = subjectRule('V1', (s, check) => {
  s.key.outcomes.forEach(o => checkEach(check, `outcome ${o.id}`, outcomeProblems(o)));
  s.steps.forEach(st => checkEach(check, `step ${st.code}`, stepProblems(st)));
  duplicatesOf(s.key.outcomes.map(o => o.n)).forEach(n => check(false, `two outcomes share the name "${n}"`));
  const names = [...s.key.outcomes.map(o => o.n), ...s.steps.flatMap(st => st.options.map(o => o.n))].filter(Boolean);
  names.forEach(n => check(!JOINED_NAME.test(n), `"${n}" holds a slash, a bracket, a dash or an arrow`));
  check(Array.isArray(s.meta.settings) && s.meta.settings.length >= 3, 'subject.settings must list at least three areas of life');
});

/* ---------- V9: no check or drill item carries its own list of names or answers ---------- */

export const V9 = unitRule('V9', (u, check) => {
  u.cards.filter(c => c.kind === 'check' && c.ask.among).forEach(c => {
    const options = u.step(c.ask.step).options;
    c.ask.among.forEach(id => check(options.some(o => o.id === id), `${c.id}: among holds "${id}", which is not an option id of ${c.ask.step}`));
  });
  const ITEM_FIELDS = new Set(['case', 'step', 'tell', 'separator', 'earlier', 'fact']);
  u.unit.drill.rungs.flatMap(r => r.items.flat()).filter(i => typeof i === 'object').forEach(i =>
    check(Object.keys(i).every(k => ITEM_FIELDS.has(k)), `a drill item carries a field of its own: ${Object.keys(i).filter(k => !ITEM_FIELDS.has(k))}`));
});

/* ---------- V49, V56: drill keys and titles are unique ---------- */

export const V49 = subjectRule('V49', (s, check) => {
  const keys = Object.values(s.subject.units).map(u => u.drill && u.drill.key).filter(Boolean);
  checkEach(check, 'drill keys', duplicatesOf(keys).map(k => `"${k}" is used by more than one unit`));
});

const titleOf = (s, unit) => unit.title && unit.title.fromKey
  ? (() => { const [code, id] = unit.title.fromKey.split('.'); const st = s.steps.find(x => x.code === code); const o = st && st.options.find(x => x.id === id); return o ? o.n : unit.title.fromKey; })()
  : unit.title && unit.title.text;

export const V56 = subjectRule('V56', (s, check) => {
  const titles = Object.values(s.subject.units).map(u => titleOf(s, u)).filter(Boolean);
  checkEach(check, 'unit titles', duplicatesOf(titles).map(t => `two units are titled "${t}"`));
});

export const RULES_SHAPE = [V0_subject, V0_unit, V1, V9, V49, V56];
