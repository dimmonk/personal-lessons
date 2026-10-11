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

/* blocks (26.1.2): prose, pair, document and figure so far */
const SEGMENT = obj({ id: str, text: str }, { note: str });
export const PROSE = obj({ kind: en('prose') }, { text, lines: arr(SEGMENT), tone: en('wrong') });
export const PAIR = obj({ kind: en('pair'), a: any, b: any, compare: text });
export const DOCUMENT_FORMS = ['receipt', 'recipe', 'tag', 'offer'];
export const DOCUMENT = obj({ kind: en('document'), form: en(...DOCUMENT_FORMS), title: str, rows: arr(obj({ id: str, cells: arr(str) }, { strong: bool })) }, { notes: arr(str) });
// a figure's numbers may be words in a generator's template ("{pct}"), filled when the question is made
export const FIGURE_TYPES = ['rate-table', 'bar', 'plan', 'years'];
export const FIGURE = obj({ kind: en('figure'), type: en(...FIGURE_TYPES), data: any });
const quantity = either(num, str);
const RATE_ROW = obj({ label: str, cells: arr(str) });
export const FIGURE_DATA = {
  'rate-table': obj({ top: RATE_ROW, bottom: RATE_ROW }),
  bar: obj({ whole: str, parts: arr(obj({ label: str, pct: quantity })) }),
  plan: obj({ unit: str, parts: arr(obj({ x: quantity, y: quantity, w: quantity, h: quantity }, { label: str, cut: bool })) }),
  years: obj({ columns: arr(str), rows: arr(arr(str)) })
};

/* asks (26.1): choose and number so far */
const OPTION = obj({ id: str, text: str }, { ok: bool, slip: str, then: text, value: str });
export const CHOOSE = obj({ id: str, kind: en('choose'), prompt: text },
  { options: arr(OPTION), from: str, right: either(str, arr(str)), only: arr(str), many: bool, when: obj({ ask: str, is: arr(str) }),
    then: map(text), slips: map(str), answer: str });

// a number ask (number.js): one blank in the frame for each value of the answer; a value is a number or the name of one the question makes
const VALUE = either(num, str);
const VALUES = either(VALUE, arr(VALUE));
export const NUMBER = obj({ id: str, kind: en('number'), prompt: text, answer: VALUES },
  { frame: str, unit: str, places: int, estimate: bool, tol: obj({}, { abs: num, rel: num, round: num, band: arr(num) }),
    traps: arr(obj({ slip: str, value: VALUES }, { then: text })), when: obj({ ask: str, is: arr(str) }) });

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
  { spoken: bool, seconds: int, retest: int, support: SUPPORT, order: en('listed', 'shuffle') });
// a step is one of four shapes, told apart by the field it holds
export const STEPS = { show: obj({ title: str, show: arr(any) }), worked: obj({ worked: str }), set: obj({ set: SET }), own: obj({ own: str }, { model: str }) };
export const stepKind = step => Object.keys(STEPS).find(k => step && typeof step === 'object' && k in step);
export const LESSON = obj(
  { id: str, part: nullable(str), title: str, rev: int, status: en(...STATUSES), history, why: text, flow: arr(any), check: CHECK },
  { role: en('baseline'), tried: obj({ date: str, words: str }) });
