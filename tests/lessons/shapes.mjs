// The exact shapes of section 4 (S1 to S6), written once in the schema language of schema.mjs.
import { str, text, int, bool, en, arr, map, obj, either, nullable } from './schema.mjs';

export const USES = ['teach', 'check', 'drill', 'return'];
export const TIERS = ['clean', 'varied', 'misleading'];
export const UNIT_KINDS = ['C', 'F', 'P'];
export const STATUSES = ['draft', 'live'];

const history = arr(obj({ rev: int, date: str, change: str }));
const strings = arr(str);

/* S1 */
export const SUBJECT = obj(
  { id: str, name: str, rev: int, standard: int, action: bool, blurb: text, units: strings, settings: strings,
    limits: arr(obj({ h: str, text }), { empty: true }), history },
  { baseline: strings });

const OPTION = obj({ id: str, n: str, when: text, keeps: arr(str, { empty: true }) },
  { yieldsTo: arr(obj({ option: str, say: text })) });
const STEP = obj({ code: str, unit: str, q: str, purpose: text, why: text, options: arr(OPTION) });
export const KEY = obj({
  outcomes: arr(obj({ id: str, group: str, unit: str, n: str, plain: str, needs: text, aka: arr(str, { empty: true }) })),
  terms: arr(obj({ id: str, unit: str, n: str, means: text }), { empty: true }),
  avoid: arr(obj({ word: str, sayInstead: str }), { empty: true }),
  gate: STEP,
  branches: map(arr(STEP))
});

/* S6 drill items */
export const RUNG_ASKS = ['name', 'piece', 'finish', 'route', 'claim', 'fact', 'last', 'whole'];
const ITEM = either(str, obj({ case: str, step: str }), obj({ tell: str }), obj({ separator: str }), obj({ earlier: str }), obj({ fact: str }));
export const RUNG = obj({ ask: en(...RUNG_ASKS), items: arr(arr(ITEM)) }, { demo: str });

/* S2, S3 */
const SIGNOFF_COLD = obj({ rev: int, date: str, reader: en('novice', 'near-novice'), restated: bool, drillAttempted: bool, notes: text });
export const UNIT = obj({
  id: str, kind: en(...UNIT_KINDS), rev: int, standard: int, status: en(...STATUSES), tag: str,
  title: either(obj({ fromKey: str }), obj({ text: str })), subtitle: text,
  teaches: obj({ steps: arr(str, { empty: true }), outcomes: arr(str, { empty: true }), terms: arr(str, { empty: true }) }, { families: strings }),
  assumes: arr(str, { empty: true }),
  ledger: arr(obj({ id: str, pair: arr(str), step: str, shared: text, rule: text, test: text }, { taughtIn: str }), { empty: true }),
  parts: arr(obj({ id: str, title: str, cards: arr(str) }, { drill: bool, close: arr(str) })),
  drill: obj({ key: str, rungs: arr(RUNG), returns: arr(str, { empty: true }) }, { add: text }),
  build: obj({
    history,
    wrongIdeas: arr(obj({ card: str, about: str, source: obj({ kind: en('published', 'cold-reader', 'app-data'), ref: str, verified: bool }) }), { empty: true }),
    signoff: obj({ coverage: nullable(obj({ date: str, by: str })), coldRead: nullable(SIGNOFF_COLD) },
      { since: arr(obj({ rev: int, change: str })) })
  }, { keyChanges: arr(obj({ was: str, now: str, why: str }, { step: str, outcome: str })) })
});


/* S4 cards */
const commit = {
  phrase: obj({ kind: en('phrase'), answer: str }),
  which: obj({ kind: en('which'), option: str, answer: str }),
  reason: obj({ kind: en('reason'), choices: arr(obj({ id: str, text }, { note: text })), answer: str }, { lead: text })
};
const COMMON_OPTIONAL = { continues: str };
const card = (kind, required, optional = {}) => obj({ id: str, kind: en(kind), ...required }, { ...optional, ...COMMON_OPTIONAL });
export const CARDS = {
  orient: card('orient', { h: str, canDo: text, everyday: text, map: obj({ branch: str }) }, { add: text }),
  term: card('term', { term: str, h: str, link: text, case: str, plain: text }, { after: text }),
  meet: card('meet', { outcome: str, link: text, case: str, mark: str, strip: arr(text), explain: text,
    feature: obj({ step: str, option: str }), name: text }),
  again: card('again', { outcome: str, link: text, first: str, second: str, step: str, instruction: text, prompt: commit.phrase, shared: text }, { h: str }),
  lens: card('lens', { h: str, link: text, body: text, fixed: text, varies: strings }),
  portrait: card('portrait', { outcome: str, link: text, typical: arr(text), not: text, wild: strings, self: text, ask: text }, { h: str }),
  check: card('check', { after: str, case: str, ask: either(
    obj({ type: en('phrase'), step: str, say: text, answer: str }),
    obj({ type: en('option'), step: str, among: strings }),
    obj({ type: en('step'), step: str })) }),
  lookalike: card('lookalike', { ledger: str, link: text, cases: arr(str), instruction: text, prompt: commit.which, difference: text }, { h: str }),
  exception: card('exception', { ledger: str, looksLike: str, is: str, h: str, link: text, case: str, setup: text, prompt: commit.phrase, because: text }, { take: text }),
  refute: card('refute', { about: str, h: str, link: text, idea: str, verdict: text, right: text, testedBy: strings }),
  question: card('question', { step: str, h: str, link: text, decides: text, how: text }, { whenBoth: text }),
  worked: card('worked', { h: str, link: text, case: str, steps: arr(obj({ step: str, reason: text })),
    hold: obj({ neighbour: str, prompt: commit.reason, reason: text }),
    impression: obj({ resembles: str, text }, { first: str }) }),
  recap: card('recap', { h: str, link: text, carry: arr(text) }),
  transfer: card('transfer', { h: str, link: text, ask: text, prompts: arr(obj({ outcome: str, occasion: text })), places: strings }),
  plan: card('plan', { optional: bool, h: str, link: text, intro: text, cues: arr(obj({ cue: str, then: text })) }),
  concept: card('concept', { h: str, link: text, case: str, plain: text }),
  facts: card('facts', { h: str, link: text, concept: str, rows: arr(obj({ id: str, q: str, a: str, relates: text }, { cells: strings })) }, { columns: strings }),
  solved: card('solved', { outcome: str, h: str, link: text, problem: str, steps: arr(obj({ does: text, working: text, why: text })), result: str },
    { hold: obj({ step: int, prompt: commit.reason, reason: text }) })
};
export const CARD_KINDS = Object.keys(CARDS);

/* S6 cases, specimens */
const STORY_COMMON = { tier: en(...TIERS), setting: str, topic: str, text: str };
const STORY_OPTIONAL = {
  name: str, outcome: str, route: map(arr(str)), cues: map(either(str, strings)),
  segments: arr(obj({ text: str }, { note: text })), reason: map(text), not: obj({ outcome: str, why: text }),
  also: strings, echo: str, miss: map(text), wouldChange: text
};
export const STORY = obj({ id: str, use: en(...USES), ...STORY_COMMON }, STORY_OPTIONAL);
export const REVERSE = obj({ id: str, use: en('drill'), kind: en('reverse'), outcome: str, expect: en('hear', 'find'),
  options: arr(obj({ voice: str, text: str })), why: text });
export const CLAIM = obj({ id: str, use: en('claim'), text: str, ask: either(
  obj({ type: en('missing'), name: str }), obj({ type: en('option'), step: str, answer: str })), fault: text, corrected: text }, { context: text });
export const PROBLEM = obj({ id: str, use: en(...USES), kind: en('problem'), outcome: str, setting: str, topic: str, text: str,
  steps: arr(obj({ does: text, working: text })), answer: obj({ choices: arr(obj({ id: str, text: str }, { slip: str })), right: str }), why: text });
// A specimen is a story with no `use`, and every field of the route is required (S6).
export const SPECIMEN = obj({ id: str, ...STORY_COMMON, outcome: str, route: map(arr(str)), cues: map(either(str, strings)), reason: map(text), not: obj({ outcome: str, why: text }), wouldChange: text },
  { also: strings, name: str, segments: STORY_OPTIONAL.segments, echo: str, miss: STORY_OPTIONAL.miss });

export const caseShapeFor = c => c.kind === 'reverse' ? REVERSE : c.kind === 'problem' ? PROBLEM : c.use === 'claim' ? CLAIM : STORY;
