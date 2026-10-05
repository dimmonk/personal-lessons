// Loads the subject files the way the app would: plain scripts, in order, no build step.
// In the app the order is the order of the <script> tags in public/index.html; here it is listed once.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

export const ROOT = new URL('../../public/', import.meta.url);

// The files the app loads for one subject, in the order of the <script> tags in public/index.html,
// so this tool reads exactly what the app reads and never a list of its own.
export async function filesFor(subjectId) {
  const html = await readFile(new URL('index.html', ROOT), 'utf8');
  const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
  return scripts.filter(f => f === 'app/registry.js' || f.startsWith(`subjects/${subjectId}/`));
}

export async function loadSubject(subjectId, root = ROOT) {
  const files = await filesFor(subjectId);
  const context = vm.createContext({ console });
  for (const file of files) {
    const source = await readFile(new URL(file, root), 'utf8');
    vm.runInContext(source, context, { filename: file });
  }
  return context.FC.get(subjectId);
}

// A text field is one paragraph (a string) or several (an array of strings). Always read it through this.
export const paras = text => text == null ? [] : Array.isArray(text) ? [...text] : [text];
// A case's marked words for a step: one phrase or a list of phrases.
export const cuesOf = (c, step) => c.cues && c.cues[step] ? paras(c.cues[step]) : [];

// The bank a later unit draws its earlier-unit items from (S6 `{ earlier: unitId }`): that unit's drill and
// return cases that are stories with a route. Teaching cases, check cases, reverse items and claims are not in it.
export const bankOf = cases => cases.filter(c => ['drill', 'return'].includes(c.use) && c.route && (!c.kind || c.kind === 'problem'));   // the app's earlierCase pool

// One view of a subject and one of its units, with the lookups every tool needs.
// A unit teaches "things": outcomes in a branch unit, families (the gate's answers) in a gate unit (A15).
// Everything that differs between the two is behind thing / thingOf / subjectOf / nameToken, so the renderer
// and the checker read one interface.
export function unitView(subject, unitId) {
  const key = subject.key;
  const unit = subject.units[unitId];
  if (!unit) throw new Error(`unknown unit ${unitId}`);
  const gate = key.gate;
  const steps = [...(gate ? [gate] : []), ...Object.values(key.branches).flat()];   // a subject of fact units only has no gate
  const byId = list => Object.fromEntries(list.map(x => [x.id, x]));
  const cases = byId(subject.cases[unitId] || []);
  // a gate unit is the unit that teaches the gate question; its taught things are teaches.families (A15)
  const isGate = Boolean(gate) && unit.teaches.steps.includes(gate.code);
  // a fact unit has no outcomes: what it holds is every row of its facts cards (A12), found once from the cards themselves
  const isFacts = unit.kind === 'F';
  const rows = {};
  (subject.cards[unitId] || []).filter(k => k.kind === 'facts').forEach(k => k.rows.forEach(r => { rows[r.id] = { ...r, card: k.id }; }));
  const taught = isFacts ? Object.keys(rows) : isGate ? [...(unit.teaches.families || [])] : [...(unit.teaches.outcomes || [])];
  // banks of the units this one assumes, for its { earlier } drill items
  const earlier = Object.fromEntries(unit.assumes.map(u => [u, byId(bankOf(subject.cases[u] || []))]));
  // steps taught by the units this one assumes (their unit field names the unit that teaches them)
  const assumedSteps = steps.filter(s => unit.assumes.includes(s.unit));
  // of those, the ones this unit's routes pass through (the app's priorSteps, view.js)
  const groups = isGate || unit.kind === 'F' ? [] : [...new Set((unit.teaches.outcomes || []).map(id => key.outcomes.find(o => o.id === id).group))];
  const onRoute = new Set([...(gate ? [gate.code] : []), ...groups.flatMap(g => (key.branches[g] || []).map(s => s.code))]);
  const priorSteps = assumedSteps.filter(s => onRoute.has(s.code));
  const outcome = id => key.outcomes.find(o => o.id === id) || fail(`unknown outcome ${id}`);
  const family = id => gate.options.find(o => o.id === id) || fail(`unknown family ${id}`);
  return {
    key, unit, steps, assumedSteps, priorSteps, subject, gate, isGate, isFacts, taught,
    fact: id => rows[id] || fail(`unknown fact ${id}`),
    // has the learner met this name by the time they read this card? (the app's metBefore)
    metBefore(id, cardId) {
      const order = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
      const all = byId(subject.cards[unitId] || []);
      const meet = order.find(k => all[k] && all[k].kind === 'meet' && (all[k].outcome || all[k].family) === id);
      return !meet || order.indexOf(meet) < order.indexOf(cardId);
    },
    cards: byId(subject.cards[unitId] || []),
    cases, earlier,
    outcome,
    // what this unit teaches, by id: { id, n, plain, needs, aka }
    // in a fact unit a taught thing is a fact, named by its question (the app's nameOf)
    thing: id => isFacts ? { n: rows[id].q, aka: [] } : isGate ? { aka: [], ...family(id) } : outcome(id),
    isThing: id => isGate ? gate.options.some(o => o.id === id) : key.outcomes.some(o => o.id === id),
    // which taught thing a case is a case of (a gate unit's cases carry no outcome: the gate answer is the name)
    thingOf: c => !c ? undefined : isGate ? (c.family || c.outcome || (c.route && c.route[gate.code] && c.route[gate.code][0])) : c.outcome,
    // the family or outcome a card, a "not", a reverse item or a transfer prompt is about
    subjectOf: x => isGate ? (x.family || x.outcome) : x.outcome,
    field: isGate ? 'family' : 'outcome',
    // the token that prints a taught thing's name
    nameToken: id => isGate ? `{a:${gate.code}.${id}}` : `{o:${id}}`,
    // plain words / what you must be able to point to, for an outcome id or a "STEP.option" reference
    lineOf(kind, ref) {
      if (ref.includes('.')) { const [code, id] = ref.split('.'); const o = this.option(code, id); return o[kind] || fail(`${ref} has no ${kind}`); }
      return (key.outcomes.find(o => o.id === ref) || family(ref))[kind];   // an outcome, or a gate answer (a family) by its bare id
    },
    step: code => steps.find(s => s.code === code) || fail(`unknown step ${code}`),
    option(code, id) {
      return this.step(code).options.find(o => o.id === id) || fail(`unknown option ${code}.${id}`);
    },
    term: id => (key.terms || []).find(t => t.id === id) || fail(`unknown term ${id}`),
    ledger: id => unit.ledger.find(l => l.id === id) || fail(`unknown ledger entry ${id}`),
    ledgerFor: (a, b) => unit.ledger.find(l => l.pair.includes(a) && l.pair.includes(b) && a !== b) || null,
    unitSteps: () => unit.teaches.steps.map(code => steps.find(s => s.code === code)),
    // the steps on a case's route, in the key's order
    routeSteps: c => steps.filter(s => c.route && c.route[s.code]).map(s => s.code),
    // the option(s) of a step that lead to a taught thing: in a gate unit, the family's own answer
    answersFor: (code, id) => isGate && code === gate.code ? gate.options.filter(o => o.id === id)
      : steps.find(s => s.code === code).options.filter(o => o.keeps.includes(id)),
    // the key's tie-break between two answers of a step, if it has one: { loser, winner, say }
    tieBreak(code, a, b) {
      const s = this.step(code);
      for (const [x, y] of [[a, b], [b, a]]) {
        const y2 = (s.options.find(o => o.id === x).yieldsTo || []).find(t => t.option === y);
        if (y2) return { loser: x, winner: y, say: y2.say };
      }
      return null;
    }
  };
}

function fail(message) { throw new Error(message); }

export const TOKEN = /\{(o|plain|needs|q|a|when|t|means|test|cue|f):([^}]+)\}/g;
