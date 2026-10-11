// Section 26.7, the kept vocabulary rules: V4 (no codes or ids shown), V36 (no praise), V50 (the app's own words and the engine's),
// V60 (American English), V62 (no abstract or textbook words). They read every string a learner can read, and nothing else:
// ids, enums, numbers and the maintainers' notes (history, the owner's words from the phone try) are left out.
import { subjectRule } from './rule.mjs';
import { norm, containsPhrase } from './text.mjs';
import { APP_JARGON, abstractIn } from '../plain-words.mjs';
import { britishIn } from '../american.mjs';

// fields that hold ids, enums, numbers, references or the maintainers' notes, never prose
const NOT_TEXT = new Set(['id', 'kind', 'strand', 'strands', 'facets', 'part', 'role', 'status', 'history', 'tried', 'order', 'feedback', 'support', 'mix', 'pass',
  'from', 'answer', 'ok', 'slip', 'slips', 'goto', 'end', 'deciding', 'has', 'redraw', 'figure', 'fact', 'worked', 'set', 'items', 'gen', 'with', 'n', 'gaps', 'every',
  'dateField', 'tol', 'standard', 'rev', 'readingShare', 'timed', 'seconds', 'complete', 'params', 'make', 'value', 'right', 'only', 'when', 'ask', 'where', 'retest',
  'tone', 'many', 'over', 'plan', 'draw', 'into', 'type', 'spoken', 'own', 'model', 'review', 'asOf', 'is']);
// block kinds whose words are quoted material (a message, an article, a statement): they may say anything, in words of their own
const QUOTING = ['message', 'article', 'document', 'chart', 'figure', 'spoken', 'exchange'];

// [{ where, text, quoted }] for every string of a value a learner reads
function learnerStrings(value, where, quoted = false, out = []) {
  if (typeof value === 'string') out.push({ where, text: value, quoted });
  else if (Array.isArray(value)) value.forEach((x, i) => learnerStrings(x, `${where}[${i}]`, quoted, out));
  else if (value && typeof value === 'object') {
    const isQuote = quoted || QUOTING.includes(value.kind);
    Object.entries(value).filter(([k]) => !NOT_TEXT.has(k)).forEach(([k, x]) => learnerStrings(x, `${where}.${k}`, isQuote, out));
  }
  return out;
}

// everything a subject shows, by where it sits
function subjectText(s) {
  const { meta, subject } = s;
  const { history, rev, standard, id, mix, readingShare, review, complete, timed, endResult, parts, ...record } = meta;
  return [
    ...learnerStrings(record, 'the subject record'),
    // the end result and the parts are the owner's approved wording from the design record (V80, V71): the plain-words rules leave them alone
    ...learnerStrings({ endResult, parts }, 'the subject record', true),
    ...Object.values(subject.lessons).flatMap(l => learnerStrings(l, `lesson ${l.id}`)),
    ...Object.values(subject.items).flatMap(i => learnerStrings(i, `item ${i.id}`)),
    ...Object.values(subject.gens).flatMap(g => learnerStrings(g, `generator ${g.id}`))
  ];
}

/* ---------- V4: no codes or ids in learner text ---------- */
function everyId(s) {
  const { meta, subject } = s;
  const asks = [...Object.values(subject.items), ...Object.values(subject.gens)];
  return [
    ...Object.keys(subject.lessons), ...Object.keys(subject.items), ...Object.keys(subject.gens),
    ...asks.flatMap(i => [...i.asks.flatMap(a => [a.id, ...(a.options || []).map(o => o.id)]), ...(i.steps || []).map(x => x.id), ...i.blocks.flatMap(b => s.engine.segmentsOf(b).map(x => x.id))]),
    ...meta.strands.map(x => x.id), ...Object.keys(meta.facets), ...Object.values(meta.facets).flatMap(f => f.values.map(v => v.id)),
    ...Object.keys(meta.lists), ...Object.values(meta.lists).flatMap(l => l.map(o => o.id)), ...Object.keys(meta.rules || {}), ...Object.keys(meta.own || {})
  ];
}
// an id that is not an ordinary word: it holds a digit, an underscore or a hyphen next to a letter ("c-1", "n80", "l2")
const NON_WORD_ID = /^(?=.*[A-Za-z])(?=.*[\d_~-])[\w~-]+$/;
const CODE_LIKE = /\b[A-Z]\d\b/;
const shownId = (text, id) => text.includes(id) && new RegExp(`(^|[^A-Za-z0-9~_-])${id.replace(/[.*+?^${}()|[\]\\~-]/g, '\\$&')}(?![A-Za-z0-9~_-])`).test(text);
export const V4 = subjectRule('V4', (s, check) => {
  const ids = [...new Set(everyId(s))].filter(id => NON_WORD_ID.test(id));
  for (const { where, text } of subjectText(s)) {
    const shown = ids.filter(id => shownId(text, id));
    check(shown.length === 0 && !CODE_LIKE.test(text), `${where}: a code or id is shown${shown.length ? `: ${shown.join(', ')}` : ''}`);
  }
});

/* ---------- V36: no praise, no bare verdict ---------- */
const PRAISE = /^\W*(great|well done|good job|nice work|excellent|not quite|oops|correct|incorrect|right|wrong)\W*($|[!.]\s)/i;
const feedbackOf = (item, where) => [
  ...learnerStrings(item.reason, `${where}.reason`), ...learnerStrings(item.need, `${where}.need`),
  ...(item.steps || []).flatMap((x, i) => learnerStrings(x.working, `${where}.steps[${i}].working`)),
  ...item.asks.flatMap((a, i) => [...learnerStrings(a.then, `${where}.asks[${i}].then`), ...(a.options || []).flatMap((o, j) => learnerStrings(o.then, `${where}.asks[${i}].options[${j}].then`)),
    ...(a.traps || []).flatMap((t, j) => learnerStrings(t.then, `${where}.asks[${i}].traps[${j}].then`))]),
  ...item.blocks.flatMap((b, i) => (b.lines || []).flatMap((seg, j) => learnerStrings(seg.note, `${where}.blocks[${i}].lines[${j}].note`)))
];
export const V36 = subjectRule('V36', (s, check) => {
  const all = [...Object.values(s.items).map(i => [i, `item ${i.id}`]), ...Object.values(s.gens).map(g => [g, `generator ${g.id}`])];
  for (const [item, where] of all) {
    for (const { where: w, text } of feedbackOf(item, where)) check(!PRAISE.test(text.trim()), `${w}: praise or a bare verdict: "${text.slice(0, 40)}"`);
  }
});

/* ---------- V50 and V62: plain words ---------- */
// "screen" alone is ordinary in some subjects (share your screen); only the app's own screens are meant
const APP_WORDS_TO_AVOID = ['lesson', 'rung', 'this screen', 'next screen', 'last screen', 'provisional', 'deciding feature', ...APP_JARGON];
// the app's own words in text it writes; a quoted block may say anything
const authored = s => subjectText(s).filter(t => !t.quoted);
export const V50 = subjectRule('V50', (s, check) => {
  for (const { where, text } of authored(s)) {
    const bare = norm(text.replace(/\{[A-Za-z0-9]+\}/g, ' '));
    APP_WORDS_TO_AVOID.forEach(w => check(!containsPhrase(bare, w), `${where}: a word to avoid, "${w}", in "${text.slice(0, 50)}"`));
  }
});
export const V62 = subjectRule('V62', (s, check) => {
  for (const { where, text } of authored(s)) {
    abstractIn(text).forEach(e => check(false, `${where}: "${e.word}" (say instead: ${e.say}) in "${text.slice(0, 60)}"`));
    check(true, '');
  }
});

/* ---------- V60: American English ---------- */
export const V60 = subjectRule('V60', (s, check) => {
  for (const { where, text } of subjectText(s)) {
    const found = britishIn(text);
    check(found.length === 0, `${where}: British form${found.length > 1 ? 's' : ''} ${found.map(f => `"${f}"`).join(', ')} in "${text.slice(0, 60)}"`);
  }
});

export const RULES_VOCAB = [V4, V36, V50, V60, V62];
export { learnerStrings, subjectText };
