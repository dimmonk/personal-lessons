// The exact shapes of lesson standard 26.1, written once in the schema language of schema.mjs. The ask kinds and block kinds
// are those the engine has built (ASK_KINDS and BLOCK_KINDS in public/app/lessons/rules.js); a lesson that uses another fails V70
// until its step of 26.8 is built.
import { str, text, int, num, bool, fn, any, en, arr, map, obj, either, nullable } from './schema.mjs';

export const STATUSES = ['draft', 'live'];
export const SLOTS = ['range', 'sheet', 'answers', 'plan', 'setup', 'lines', 'actions', 'triggers'];   // where a private form may write (26.3)

const history = arr(obj({ rev: int, date: str, change: str }));
const idText = obj({ id: str, text: str });

/* the subject (26.1) */
const MIX_ENTRY = either(obj({ facet: str, value: str }, { min: num, max: num }), obj({ facet: str, equal: bool }));
const FORM_FIELD = obj({ id: str, label: str, type: en('choose', 'number', 'text', 'date') });
const FORM = obj({ into: en(...SLOTS), fields: arr(FORM_FIELD) });
export const SUBJECT = obj(
  { id: str, name: str, rev: int, standard: int, history, endResult: text, parts: arr(idTitle()),
    lists: map(arr(idText, { empty: true })), facets: map(obj({ name: str, values: arr(idText) })), mix: arr(MIX_ENTRY, { empty: true }),
    strands: arr(idTitle(), { empty: true }), readingShare: num },
  { rules: map(obj({ name: str, needs: arr(idText) })), review: obj({}, { gaps: arr(int), every: int, dateField: str }), timed: bool,
    refs: arr(obj({ id: str, text: str, value: any, asOf: str, source: str })), own: map(FORM), complete: bool });
function idTitle() { return obj({ id: str, title: str }); }

/* blocks (26.1.2): prose and pair so far */
const SEGMENT = obj({ id: str, text: str }, { note: str });
export const PROSE = obj({ kind: en('prose') }, { text, lines: arr(SEGMENT), tone: en('wrong') });
export const PAIR = obj({ kind: en('pair'), a: any, b: any, compare: text });

/* asks (26.1): choose so far */
const OPTION = obj({ id: str, text: str }, { ok: bool, slip: str, then: text, value: str });
export const CHOOSE = obj({ id: str, kind: en('choose'), prompt: text },
  { options: arr(OPTION), from: str, right: either(str, arr(str)), only: arr(str), many: bool, when: obj({ ask: str, is: arr(str) }),
    then: map(text), slips: map(str), answer: str });

/* items and generators */
const STEP_DEF = obj({ id: str, does: text, working: text }, { ask: str });
const ITEM_FIELDS = { id: str, strand: str, facets: map(str), blocks: arr(any), asks: arr(any), reason: text };
const ITEM_OPTIONAL = { steps: arr(STEP_DEF), deciding: arr(str), need: text, has: map(any), fact: str, redraw: en('from-zero'), figure: any };
export const ITEM = obj(ITEM_FIELDS, ITEM_OPTIONAL);
export const GEN = obj({ ...ITEM_FIELDS, params: map(arr(either(str, num))), make: fn }, ITEM_OPTIONAL);

/* lessons */
const REF = either(str, obj({ gen: str, n: int }, { with: map(any) }), obj({ sing: obj({ task: str }, { seconds: int, maxSemitones: int, minSemitones: int, notes: int, maxStep: int, cents: int }), n: int }));
const SUPPORT = obj({}, { panel: bool, line: bool, shown: bool, leave: int, estimateCheck: bool });
const SET = obj({ items: arr(either(REF, arr(REF))), order: en('listed', 'shuffle') },
  { support: SUPPORT, seconds: en(15, 20), mix: obj({ from: arr(str), share: num }), over: en('busy'), plan: bool });
const PASS = obj({}, { ask: str, where: map(str), right: obj({ min: int }), wrong: obj({ max: int }), slip: str, max: int });
const CHECK = obj({ items: either(arr(REF), obj({ draw: obj({ strands: arr(str), n: int }) })), feedback: en('at-end', 'after-each'), pass: arr(PASS) },
  { spoken: bool, seconds: int, retest: int, support: SUPPORT });
// a step is one of four shapes, told apart by the field it holds
export const STEPS = { show: obj({ title: str, show: arr(any) }), worked: obj({ worked: str }), set: obj({ set: SET }), own: obj({ own: str }, { model: str }) };
export const stepKind = step => Object.keys(STEPS).find(k => step && typeof step === 'object' && k in step);
export const LESSON = obj(
  { id: str, part: nullable(str), title: str, rev: int, status: en(...STATUSES), history, why: text, flow: arr(any), check: CHECK },
  { role: en('baseline'), tried: obj({ date: str, words: str }) });
