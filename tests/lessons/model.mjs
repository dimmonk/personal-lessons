// Views over loaded data for the rules: one SubjectView per subject and one UnitView per unit,
// with the lookups every rule needs. Views only read the data; nothing here changes it.
// Lookups throw on an unknown id: rules run only after V0 has shown that every reference resolves.
import { byId, paras } from './text.mjs';

// What to scan for prose: one target per card, case, specimen or record. owner is the case a {cue:} token may quote (S5).
const target = (label, obj, owner = null) => ({ label, obj, owner });

function fail(message) { throw new Error(message); }

export function keyLookups(key) {
  // a subject made only of fact units has a key with no gate and no branches (S1)
  const steps = [...(key.gate ? [key.gate] : []), ...Object.values(key.branches).flat()];
  const outcomes = byId(key.outcomes);
  const terms = byId(key.terms || []);
  const stepOf = byId(steps, 'code');
  return {
    steps, outcomes, terms,
    outcome: id => outcomes[id] || fail(`unknown outcome ${id}`),
    // an outcome, or in a gate unit a family: one of the gate's answers (A15)
    things: { ...outcomes, ...byId(key.gate ? key.gate.options : []) },
    step: code => stepOf[code] || fail(`unknown step ${code}`),
    option: (code, id) => (stepOf[code] || fail(`unknown step ${code}`)).options.find(o => o.id === id) || fail(`unknown option ${code}.${id}`),
    term: id => terms[id] || fail(`unknown term ${id}`),
    // the option(s) of a step that keep an outcome
    answersFor: (code, outcomeId) => stepOf[code].options.filter(o => o.keeps.includes(outcomeId))
  };
}

// Every line of the key that no authored text may type by hand (V2).
function keyLinesOf(key, steps) {
  return [
    ...key.outcomes.flatMap(o => [o.n, o.plain, o.needs]),
    ...(key.terms || []).flatMap(t => [t.n, t.means]),
    ...steps.flatMap(s => [s.q, s.why, ...s.options.flatMap(o => [o.n, o.when])])
  ].flatMap(paras).filter(Boolean);
}

export function subjectView(data, subjectId) {
  const subject = data.subjects[subjectId];
  const key = subject.key;
  const lookups = keyLookups(key);
  const caseLists = Object.entries(subject.cases);
  return {
    data, subjectId, label: subjectId, subject, meta: subject.meta, key, ...lookups,
    specimens: subject.specimens,
    // the steps on a case's route, in the key's order
    routeSteps: c => lookups.steps.filter(st => c.route && c.route[st.code]).map(st => st.code),
    // a ledger entry for two outcomes, in any unit of the subject
    ledgerFor: (a, b) => Object.values(subject.units).flatMap(u => u.ledger || []).find(l => l.pair.includes(a) && l.pair.includes(b) && a !== b) || null,
    storyCases: () => subject.specimens,
    // a specimen is asked every question on its route (section 6)
    stepsAsked(c) { return this.routeSteps(c); },
    keyLines: keyLinesOf(key, lookups.steps),
    scanTargets: () => [
      ...subject.specimens.map(c => target(c.id, c, c)),
      target('subject', { blurb: subject.meta.blurb, limits: subject.meta.limits })
    ],
    // every line of the key the learner reads (questions, answers, plain words, what a name needs, tie-break lines, term
    // meanings), for the words-to-avoid check only (V50): the key is where key wording lives, so V2 and V8 do not read it
    keyTarget: () => target('key', keyProse(key)),
    // "where these questions stop", shown on the reference screen; its prose sits in fields named text, which other rules read as quoted
    limitsTarget: () => target('limits', (subject.meta.limits || []).map(l => ({ h: l.h, body: l.text }))),
    allCaseLists: caseLists,
    allCases: [...caseLists.flatMap(([, list]) => list), ...subject.specimens],
    unitIds: Object.keys(subject.units)
  };
}

// The learner-visible lines of a key, as prose (ids, codes and other names are left out)
function keyProse(key) {
  const steps = [key.gate, ...Object.values(key.branches || {}).flat()].filter(Boolean);
  return {
    outcomes: key.outcomes.map(o => ({ plain: o.plain, needs: o.needs })),
    steps: steps.map(s => ({ q: s.q, why: s.why,
      options: s.options.map(o => ({ when: o.when, plain: o.plain, needs: o.needs, say: (o.yieldsTo || []).map(t => t.say) })) })),
    terms: (key.terms || []).map(t => ({ means: t.means }))
  };
}

export function unitView(data, subjectId, unitId) {
  const s = subjectView(data, subjectId);
  const { subject, key } = s;
  const unit = subject.units[unitId];
  if (!unit) fail(`unknown unit ${subjectId}/${unitId}`);
  const cardRecords = subject.cards[unitId] || [];
  const caseRecords = subject.cases[unitId] || [];
  const cardsById = byId(cardRecords);
  const cases = byId(caseRecords);
  const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
  const cards = cardOrder.map(id => cardsById[id]).filter(Boolean);
  const stepOf = byId(s.steps, 'code');
  const rung = ask => unit.drill.rungs.find(r => r.ask === ask) || { items: [] };
  const flat = r => r.items.flat();
  const caseOf = item => typeof item === 'string' ? cases[item] : item && item.case ? cases[item.case] : null;
  const isStory = c => Boolean(c && c.route);
  const ledgerById = byId(unit.ledger);
  const view = {
    ...s, label: `${subjectId}/${unitId}`, unitId, unit,
    assumedSteps: s.steps.filter(st => unit.assumes.includes(st.unit)),
    cardRecords, caseRecords, cardsById, cases, cardOrder, cards, caseList: caseRecords,
    taught: unit.teaches.outcomes,
    isGate: Boolean(unit.teaches.families),
    isBranch: unit.kind === 'C' && !unit.teaches.families,
    // which row of section 8's table of kinds this unit is in: branch, gate, fact or procedure
    kindName: unit.kind === 'F' ? 'fact' : unit.kind === 'P' ? 'procedure' : unit.teaches.families ? 'gate' : 'branch',
    // a fact unit holds the rows of its facts cards (A12): every row, by id, with the card it sits on
    rows: Object.fromEntries(cardRecords.filter(c => c.kind === 'facts').flatMap(c => c.rows.map(r => [r.id, { ...r, card: c.id }]))),
    pos: id => cardOrder.indexOf(id),
    at: (kind, f) => cards.findIndex(c => c.kind === kind && f(c)),
    rung, flat, caseOf, isStory,
    routeCases: flat(rung('route')).map(caseOf).filter(isStory),
    returns: unit.drill.returns.map(id => cases[id]),
    card: id => cardsById[id] || fail(`unknown card ${id}`),
    ledger: id => ledgerById[id] || fail(`unknown ledger entry ${id}`),
    ledgerFor: (a, b) => unit.ledger.find(l => l.pair.includes(a) && l.pair.includes(b) && a !== b) || null,
    unitSteps: () => unit.teaches.steps.map(code => stepOf[code] || fail(`unknown step ${code}`)),
    // the key's tie-break between two answers of a step, if it has one: { loser, winner, say }
    tieBreak(code, a, b) {
      const options = stepOf[code].options;
      for (const [x, y] of [[a, b], [b, a]]) {
        const found = (options.find(o => o.id === x).yieldsTo || []).find(t => t.option === y);
        if (found) return { loser: x, winner: y, say: found.say };
      }
      return null;
    },
    scanTargets: () => [
      ...cards.map(c => target(c.id, c, c.case ? cases[c.case] || null : null)),
      ...caseRecords.map(c => target(c.id, c, c)),
      target('unit', view.unitProse)
    ],
    // the story text of a unit, in the places a learner reads it besides cards and cases
    unitProse: {
      subtitle: unit.subtitle,
      ledger: unit.ledger.map(l => ({ shared: l.shared, rule: l.rule, test: l.test })),
      parts: unit.parts.map(p => p.title),
      add: unit.drill.add
    }
  };
  const asked = askedSteps(view);
  return { ...view, storyCases: () => caseRecords.filter(isStory), stepsAsked: c => asked.get(c.id) || [] };
}

// Which questions can a case be asked? Section 6: the unit's own questions for check, name, piece and finish items;
// every question on the route for route items, return cases and specimens.
export function askedSteps(u) {
  const asked = new Map();
  const add = (c, steps) => { if (c) asked.set(c.id, [...new Set([...(asked.get(c.id) || []), ...steps])]); };
  const unitSteps = u.unit.teaches.steps;
  // a fact check and a problem to finish ask no key question
  u.cards.filter(c => c.kind === 'check' && c.ask.step).forEach(c => add(u.cases[c.case], [c.ask.step]));
  // name and finish items ask the unit's own questions that are on the case's route; a sound case from another branch
  // (an action subject's legit cases) is never asked a question its route does not pass through
  const ownOnRoute = c => unitSteps.filter(code => u.routeSteps(c).includes(code));
  u.flat(u.rung('name')).map(u.caseOf).filter(u.isStory).forEach(c => add(c, ownOnRoute(c)));
  u.flat(u.rung('piece')).filter(i => i.step).forEach(i => add(u.cases[i.case], [i.step]));
  u.flat(u.rung('finish')).map(u.caseOf).filter(u.isStory).forEach(c => add(c, ownOnRoute(c)));
  [...u.routeCases, ...u.returns, ...u.specimens].filter(Boolean).forEach(c => add(c, u.routeSteps(c)));
  return asked;
}

export const textOf = field => paras(field).join(' ');
