// The exact shapes of lesson standard 3, written once in the schema language of schema.mjs. The ask kinds and block kinds
// are those the engine has built (ASK_KINDS and BLOCK_KINDS in public/app/lessons/rules.js); a lesson that uses another fails V70
// until its step of 10.3 is built.
import { str, text, int, num, bool, fn, any, en, arr, map, obj, either, nullable } from './schema.mjs';

export const STATUSES = ['draft', 'live'];
export const SLOTS = ['range', 'sheet', 'answers', 'plan', 'setup', 'lines', 'actions', 'triggers'];   // where a private form may write (5)

const history = arr(obj({ rev: int, date: str, change: str }));
const idText = obj({ id: str, text: str });

/* the subject (3) */
const MIX_ENTRY = either(obj({ facet: str, value: str }, { min: num, max: num }), obj({ facet: str, equal: bool }));
// A field of a private form (5). A choice reads its words from one of the subject's lists. `warn` is the plausible range: a number over
// `over` or under `under` is kept and the learner is told why it looks wrong.
const FORM_FIELD = obj({ id: str, label: str, type: en('choose', 'number', 'text', 'date') },
  { list: str, unit: str, hint: str, optional: bool, warn: obj({ text: text }, { over: num, under: num }) });
const FORM = obj({ into: en(...SLOTS), fields: arr(FORM_FIELD) }, { rows: obj({ id: str, label: str, fields: arr(FORM_FIELD) }) });
export const SUBJECT = obj(
  { id: str, name: str, rev: int, standard: int, history, endResult: text, parts: arr(idTitle()),
    lists: map(arr(idText, { empty: true })), facets: map(obj({ name: str, values: arr(idText) }, { compare: bool })), mix: arr(MIX_ENTRY, { empty: true }),
    strands: arr(idTitle(), { empty: true }), readingShare: num },
  { rules: map(obj({ name: str, needs: arr(idText) }, { heading: str })), review: obj({}, { gaps: arr(int), every: int, dateField: str }), timed: bool,
    refs: arr(obj({ id: str, text: str, value: any, asOf: str, source: str })), own: map(FORM), complete: bool,
    // the slip that is the failure, the facet the questions are sorted by, and which of its values is the risky one and which is the real one (V82)
    danger: obj({ slip: str, facet: str, risky: str, real: str }) });
function idTitle() { return obj({ id: str, title: str }); }

/* blocks (3.9): prose, pair, document, figure, article, chart, panel, message and spoken so far */
// a line that can be tapped or marked; `para` starts a new paragraph, `fine` is small print, `slip` names the slip of tapping it when it is not the line
// (`me` marks a line you sent, in a thread)
const SEGMENT = obj({ id: str, text: str }, { note: str, para: bool, fine: bool, slip: str, me: bool });
export const PROSE = obj({ kind: en('prose') }, { id: str, text, lines: arr(SEGMENT), tone: en('wrong') });
export const PAIR = obj({ kind: en('pair'), a: any, b: any, compare: text });
// the everyday papers, and a household's: statement (401(k), IRA, brokerage), fees (a plan's fee sheet), paystub, matchrule (the plan's employer
// match), beneficiary, foreign (a foreign account summary), table (plain). `head` names the columns; `tab` makes the paper one of a household's tabs.
export const DOCUMENT_FORMS = ['receipt', 'recipe', 'tag', 'offer', 'statement', 'fees', 'paystub', 'matchrule', 'beneficiary', 'foreign', 'table'];
export const DOCUMENT = obj({ kind: en('document'), form: en(...DOCUMENT_FORMS), title: str, rows: arr(obj({ id: str, cells: arr(str) }, { strong: bool })) },
  { notes: arr(str), head: arr(str), tab: str });
// a value looked up, named by id: the subject keeps its text, value, day and source (refs)
export const REF_BLOCK = obj({ kind: en('ref'), ref: str });
// a figure's numbers may be words in a generator's template ("{pct}"), filled when the question is made
export const FIGURE_TYPES = ['rate-table', 'bar', 'plan', 'years', 'people'];
export const FIGURE = obj({ kind: en('figure'), type: en(...FIGURE_TYPES), data: any });
const quantity = either(num, str);
const RATE_ROW = obj({ label: str, cells: arr(str) });
export const FIGURE_DATA = {
  'rate-table': obj({ top: RATE_ROW, bottom: RATE_ROW }),
  bar: obj({ whole: str, parts: arr(obj({ label: str, pct: quantity })) }),
  plan: obj({ unit: str, parts: arr(obj({ x: quantity, y: quantity, w: quantity, h: quantity }, { label: str, cut: bool })) }),
  years: obj({ columns: arr(str), rows: arr(arr(str)) }),
  people: obj({ caption: str, rows: arr(obj({ label: str, count: int })) })
};
// a news story, a post, an ad, a report (article-view.js): where it comes from, a headline for the forms that have one, and its lines
export const ARTICLE_FORMS = ['news', 'post', 'ad', 'report'];
// A post may carry a label (panel.js): the commenter's words that carry it, how the commenter is known, and the side it is thrown from.
export const LABEL_SIDES = ['left', 'right'];
export const LABEL = obj({ text: str, by: str, side: en(...LABEL_SIDES) });
export const ARTICLE = obj({ kind: en('article'), form: en(...ARTICLE_FORMS), source: str, lines: arr(SEGMENT) }, { id: str, headline: SEGMENT, label: LABEL });
// a message as it arrives (message-view.js): a friend's message about someone, a thread you are in, your own note
// (sms, email, popup, chat, call and banner are the forms of a phone: a text, an email with its subject, a pop-up with its button, a chat, an incoming
// call and a banner over another task; a link is words drawn like a link, never one that can be followed)
export const MESSAGE_FORMS = ['friend', 'thread', 'note', 'sms', 'email', 'popup', 'chat', 'call', 'banner'];
export const MESSAGE = obj({ kind: en('message'), form: en(...MESSAGE_FORMS), from: str, detail: str, lines: arr(SEGMENT) }, { id: str, subject: str, link: str });
// what a label needs, printed from the subject's `rules` (panel.js): the rules it names
export const PANEL = obj({ kind: en('panel'), rules: arr(str) });
// a chart drawn from its data (chart.js): bars or a line, an axis that may start above zero, one or two series
export const CHART = obj({ kind: en('chart'), type: en('bars', 'line'), title: str, x: arr(str), y: obj({ from: num, to: num, step: num }, { unit: str }),
  series: arr(obj({ values: arr(num) }, { name: str })), source: str }, { labels: bool });

/* asks (3): choose, number, form, tap, text, exchange and order */
// a call or chat that branches on the learner's reply (exchange.js): turns, each with what the other side says and the replies to pick, and the ends
export const EXCHANGE_OPTION = either(obj({ id: str, text: str, goto: str }), obj({ id: str, text: str, end: str }));
export const EXCHANGE = obj({ id: str, kind: en('exchange'), prompt: text, form: en('call', 'chat'), from: str, detail: str, start: str,
  turns: map(obj({ lines: arr(SEGMENT), options: arr(EXCHANGE_OPTION) }, { push: text })), ends: map(obj({ ok: bool, then: text }, { slip: str })) }, { when: obj({ ask: str, is: arr(str) }) });
// steps to put in order (order.js)
export const ORDER = obj({ id: str, kind: en('order'), prompt: text, steps: arr(obj({ id: str, text: str })), right: arr(str), then: text }, { scored: en('whole', 'first'), when: obj({ ask: str, is: arr(str) }) });
const OPTION = obj({ id: str, text: str }, { ok: bool, slip: str, then: text, value: str });
export const CHOOSE = obj({ id: str, kind: en('choose'), prompt: text },
  { options: arr(OPTION), from: str, right: either(str, arr(str)), only: arr(str), many: bool, when: obj({ ask: str, is: arr(str) }),
    then: map(text), slips: map(str), answer: str, shuffle: bool });

// a tap ask (tap.js): the lines of the question, or of the block named by `in`, become tappable; `right` is the lines that decide it, or 'none'
export const TAP = obj({ id: str, kind: en('tap'), prompt: text, right: either(str, arr(str)) }, { in: str, pick: int, none: text, when: obj({ ask: str, is: arr(str) }) });

// a text ask is a line the learner writes against a `model` (text-view.js, never scored), or an answer from memory checked against what a list accepts
// (`accept`, recall.js): each accepted answer is words (brackets are optional), or words said in parts in any order; or `{ own }`, the answer the
// learner entered in the form into `answers`; `count` is how many different ones a question wants
export const ACCEPT_ENTRY = either(str, obj({ text: str, parts: arr(str) }));
export const TEXT = obj({ id: str, kind: en('text'), prompt: text },
  { model: text, accept: either(arr(ACCEPT_ENTRY), obj({ own: str })), count: int, when: obj({ ask: str, is: arr(str) }) });
// a question read aloud (speech-view.js); `show: false` holds its words back behind "Show the words"
export const SPOKEN = obj({ kind: en('spoken'), text: str }, { show: bool });

// a number ask (number.js): one blank in the frame for each value of the answer; a value is a number or the name of one the question makes
const VALUE = either(num, str);
const VALUES = either(VALUE, arr(VALUE));
export const NUMBER = obj({ id: str, kind: en('number'), prompt: text, answer: VALUES },
  { frame: str, unit: str, places: int, estimate: bool, tol: obj({}, { abs: num, rel: num, round: num, band: arr(num) }),
    traps: arr(obj({ slip: str, value: VALUES }, { then: text })), when: obj({ ask: str, is: arr(str) }) });

// a form ask (form.js): a prompt and fields, each a number or a choice; a field is the shape of the ask of its own kind without id, kind and prompt
const FORM_NUMBER_FIELD = obj({ id: str, label: str, type: en('number'), answer: VALUES }, { frame: str, unit: str, places: int, tol: obj({}, { abs: num, rel: num, round: num, band: arr(num) }),
  traps: arr(obj({ slip: str, value: VALUES }, { then: text })) });
const FORM_CHOOSE_FIELD = obj({ id: str, label: str, type: en('choose') },
  { options: arr(OPTION), from: str, right: either(str, arr(str)), only: arr(str), then: map(text), slips: map(str), answer: str, shuffle: bool });
export const FORM_ASK = obj({ id: str, kind: en('form'), prompt: text, fields: arr(either(FORM_NUMBER_FIELD, FORM_CHOOSE_FIELD)) }, { when: obj({ ask: str, is: arr(str) }) });

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
const PASS = obj({}, { ask: str, where: map(str), right: obj({ min: int }), wrong: obj({ max: int }), slip: str, max: int, of: text });
const CHECK = obj({ items: either(arr(REF), obj({ draw: obj({ strands: arr(str), n: int }) })), feedback: en('at-end', 'after-each'), pass: arr(PASS) },
  { spoken: bool, recall: bool, seconds: en(15, 20), retest: int, support: SUPPORT, order: en('listed', 'shuffle') });
// a step is one of four shapes, told apart by the field it holds
export const STEPS = { show: obj({ title: str, show: arr(any) }), worked: obj({ worked: str }), set: obj({ set: SET }), own: obj({ own: str }, { model: str }) };
export const stepKind = step => Object.keys(STEPS).find(k => step && typeof step === 'object' && k in step);
export const LESSON = obj(
  { id: str, part: nullable(str), title: str, rev: int, status: en(...STATUSES), history, why: text, flow: arr(any), check: CHECK },
  { role: en('baseline'), trigger: str });
