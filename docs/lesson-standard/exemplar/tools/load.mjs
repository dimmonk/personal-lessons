// Loads the exemplar's subject files the way the app would: plain scripts, in order, no build step.
// In the app the order is the order of the <script> tags in public/index.html; here it is listed once.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

export const ROOT = new URL('../public/', import.meta.url);

export const FILES = [
  'app/registry.js',
  'subjects/psychology/subject.js',
  'subjects/psychology/key.js',
  'subjects/psychology/u1.cases-1.js',
  'subjects/psychology/u2.unit.js',
  'subjects/psychology/u2.cards-1.js',
  'subjects/psychology/u2.cards-2.js',
  'subjects/psychology/u2.cards-3.js',
  'subjects/psychology/u2.cards-4.js',
  'subjects/psychology/u2.cards-5.js',
  'subjects/psychology/u2.cases-teach-1.js',
  'subjects/psychology/u2.cases-teach-2.js',
  'subjects/psychology/u2.cases-teach-3.js',
  'subjects/psychology/u2.cases-drill-1.js',
  'subjects/psychology/u2.cases-drill-2.js',
  'subjects/psychology/u2.cases-drill-3.js',
  'subjects/psychology/u2.cases-return-1.js',
  'subjects/psychology/u2.cases-return-2.js',
  'subjects/psychology/specimens.js'
];

export async function loadSubject(subjectId, files = FILES, root = ROOT) {
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

// One view of a subject and one of its units, with the lookups every tool needs.
export function unitView(subject, unitId) {
  const key = subject.key;
  const unit = subject.units[unitId];
  if (!unit) throw new Error(`unknown unit ${unitId}`);
  const steps = [key.gate, ...Object.values(key.branches).flat()];
  const byId = list => Object.fromEntries(list.map(x => [x.id, x]));
  const cases = byId(subject.cases[unitId] || []);
  const earlier = Object.fromEntries(
    Object.entries(subject.cases).filter(([u]) => u !== unitId).map(([u, list]) => [u, byId(list)]));
  // steps taught by the units this one assumes (their unit field names the unit that teaches them)
  const assumedSteps = steps.filter(s => unit.assumes.includes(s.unit));
  return {
    key, unit, steps, assumedSteps, subject,
    cards: byId(subject.cards[unitId] || []),
    cases, earlier,
    outcome: id => key.outcomes.find(o => o.id === id) || fail(`unknown outcome ${id}`),
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
    // the option(s) of a step that keep an outcome
    answersFor: (code, outcomeId) => steps.find(s => s.code === code).options.filter(o => o.keeps.includes(outcomeId)),
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

export const TOKEN = /\{(o|plain|needs|q|a|when|t|means|test|cue):([^}]+)\}/g;
