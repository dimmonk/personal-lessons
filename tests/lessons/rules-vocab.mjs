// Section 8, vocabulary: V2 (no key wording typed by hand), V3 (tokens resolve), V4 (no codes or ids shown),
// V8 (other names only on the meet card), V28 (no forward pointers), V36 (no praise), V50 (words to avoid).
// Each rule scans the authored prose of one unit (its cards, cases and records) or of one subject (specimens, the subject record,
// the bank of a unit not yet rebuilt). Fields that quote what people say are never scanned for key wording (S5).
import { unitRule, subjectRule } from './rule.mjs';
import { tokensOf, stripTokens, hasUnknownToken, prose, norm, wordSet, containsPhrase, cuesOf, strings } from './text.mjs';

const cache = new WeakMap();
// [{ where, text, owner }] for every prose string of a view; computed once per view.
function proseOf(ctx) {
  if (!cache.has(ctx)) {
    cache.set(ctx, ctx.scanTargets().flatMap(t => prose(t.obj).map(([path, text]) => ({ where: `${t.label}${path}`, text, owner: t.owner }))));
  }
  return cache.get(ctx);
}
// Both scopes share one function per rule.
const unitAndSubject = (id, run) => [unitRule(id, run), subjectRule(id, run)];

/* ---------- V2 ---------- */
const NEAR_COPY_RATIO = 0.75;          // three quarters of the distinct words of four letters or more
const NEAR_COPY_MIN_WORDS = 6;         // only a key line with at least six such words can be near-copied

const prepared = ctx => ctx.keyLines.map(line => ({ line, n: norm(line), words: wordSet(line) }));
const sentencesOf = text => stripTokens(text).split(/(?<=[.?!:])\s+/);
const overlap = (line, words) => [...line.words].filter(w => words.has(w)).length / line.words.size;

function V2(ctx, check) {
  const lines = prepared(ctx);
  const nearable = lines.filter(l => l.words.size >= NEAR_COPY_MIN_WORDS);
  for (const { where, text } of proseOf(ctx)) {
    const bare = norm(stripTokens(text));
    const typed = lines.filter(l => bare.includes(l.n)).map(l => `key wording typed by hand: "${l.line.slice(0, 50)}"`);
    const near = sentencesOf(text).flatMap(sentence => {
      const got = wordSet(sentence);
      return nearable.filter(l => overlap(l, got) >= NEAR_COPY_RATIO).map(l => `near-copy of a key line: "${sentence.slice(0, 60)}" ~ "${l.line.slice(0, 40)}"`);
    });
    const problems = [...typed, ...near];
    if (problems.length === 0) check(true, '');
    problems.forEach(p => check(false, `${where}: ${p}`));
  }
}

/* ---------- V3 ---------- */
const lookupToken = (ctx, { kind, ref }) => {
  try {
    if (['o', 'plain', 'needs'].includes(kind)) return Boolean(ctx.things[ref]);
    else if (kind === 'f') return Boolean(ctx.rows && ctx.rows[ref]);
    else if (kind === 'q') ctx.step(ref);
    else if (['a', 'when'].includes(kind)) ctx.option(...ref.split('.'));
    else if (['t', 'means'].includes(kind)) ctx.term(ref);
    else if (kind === 'test') return ledgerIds(ctx).includes(ref);
    return true;
  } catch (error) {
    if (/^unknown /.test(error.message)) return false;
    throw error;
  }
};
const ledgerIds = ctx => Object.values(ctx.subject.units).flatMap(u => (u.ledger || []).map(l => l.id));

function V3(ctx, check) {
  for (const { where, text, owner } of proseOf(ctx)) {
    for (const token of tokensOf(text)) {
      check(lookupToken(ctx, token), `${where}: {${token.kind}:${token.ref}} does not resolve`);
      if (token.kind === 'cue') check(Boolean(owner) && cuesOf(owner, token.ref).length > 0, `${where}: {cue:${token.ref}} but no case here has marked words for it`);
    }
    check(!hasUnknownToken(text), `${where}: an unknown token`);
  }
}

/* ---------- V4 ---------- */
const ORDINARY_ID = /^[A-Za-z]+$/;
function nonWordIds(ctx) {
  const ids = [
    ...ctx.steps.map(s => s.code), ...ctx.steps.flatMap(s => s.options.map(o => o.id)),
    ...ctx.key.outcomes.map(o => o.id), ...(ctx.key.terms || []).map(t => t.id),
    ...Object.values(ctx.subject.units).flatMap(u => [u.id, ...(u.ledger || []).map(l => l.id), ...(u.parts || []).map(p => p.id)]),
    ...Object.values(ctx.subject.cards).flat().map(c => c.id), ...Object.values(ctx.subject.cases).flat().map(c => c.id),
    ...ctx.specimens.map(s => s.id)];
  return [...new Set(ids)].filter(id => !ORDINARY_ID.test(id) || /^[A-Z][A-Za-z]?\d/.test(id));
}
const shownId = (text, id) => text.includes(id) && new RegExp(`(^|[^A-Za-z0-9~_-])${id.replace(/[.*+?^${}()|[\]\\~-]/g, '\\$&')}(?![A-Za-z0-9~_-])`).test(text);
const CODE_LIKE = /\b[A-Z]\d\b/;

function V4(ctx, check) {
  const ids = nonWordIds(ctx);
  for (const { where, text } of proseOf(ctx)) {
    const bare = stripTokens(text);
    const shown = ids.filter(id => shownId(bare, id));
    check(shown.length === 0 && !CODE_LIKE.test(bare), `${where}: a step code or id is shown${shown.length ? `: ${shown.join(', ')}` : ''}`);
  }
}

/* ---------- V8 ---------- */
function V8(ctx, check) {
  const akas = ctx.key.outcomes.flatMap(o => o.aka);
  for (const { where, text } of proseOf(ctx)) {
    const bare = norm(stripTokens(text));
    akas.forEach(aka => check(!bare.includes(norm(aka)), `${where}: another name ("${aka}") is used; only the meet card prints it`));
  }
}

/* ---------- V28 ---------- */
const NUMBER_WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
const FORWARD = [/later card/i, /next unit/i, /you will meet this in/i, /Lesson \d/i];

function laterUnitPattern(ctx) {
  const index = ctx.unitId === undefined ? -1 : ctx.meta.units.indexOf(ctx.unitId);
  const later = ctx.meta.units.map((_, i) => i).filter(i => i > index);
  const names = later.flatMap(i => [NUMBER_WORDS[i] || `${i + 1}`, `${i + 1}`]);
  return names.length ? new RegExp(`\\bin Unit (${names.join('|')})\\b`, 'i') : null;
}

function V28(ctx, check) {
  const later = ctx.unitId === undefined ? null : laterUnitPattern(ctx);
  for (const { where, text } of proseOf(ctx)) {
    const hit = FORWARD.some(re => re.test(text)) || (later && later.test(text));
    check(!hit, `${where}: a forward pointer: "${text.slice(0, 60)}"`);
  }
}

/* ---------- V36 ---------- */
const PRAISE = /^\W*(great|well done|good job|nice work|excellent|not quite|oops|correct|incorrect|right|wrong)\W*($|[!.]\s)/i;

function feedbackFields(obj) {
  const fields = [obj.reason, obj.not && obj.not.why, obj.miss, obj.wouldChange, obj.fault, obj.corrected, obj.why,
    (obj.segments || []).map(s => s.note || ''), (obj.options || []).map(() => '')];
  const hold = obj.hold && [obj.hold.reason, (obj.hold.prompt.choices || []).map(c => c.note || '')];
  const worked = (obj.steps || []).map(s => s.reason);
  return [...fields, hold, worked].filter(x => x !== undefined && x !== null);
}

function V36(ctx, check) {
  for (const t of ctx.scanTargets()) {
    for (const [path, text] of strings(feedbackFields(t.obj))) {
      if (text.trim() !== '') check(!PRAISE.test(text.trim()), `${t.label}${path}: praise or a bare verdict: "${text.slice(0, 40)}"`);
    }
  }
}

/* ---------- V50 ---------- */
const APP_WORDS_TO_AVOID = ['lesson', 'rung', 'screen', 'provisional', 'deciding feature'];

function V50(ctx, check) {
  const words = [...(ctx.key.avoid || []).map(a => a.word), ...APP_WORDS_TO_AVOID];
  for (const { where, text } of proseOf(ctx)) {
    const bare = norm(stripTokens(text));
    words.forEach(w => check(!containsPhrase(bare, w), `${where}: a word to avoid, "${w}", in "${text.slice(0, 50)}"`));
  }
}

export const RULES_VOCAB = [
  ...unitAndSubject('V2', V2), ...unitAndSubject('V3', V3), ...unitAndSubject('V4', V4), ...unitAndSubject('V8', V8),
  ...unitAndSubject('V28', V28), ...unitAndSubject('V36', V36), ...unitAndSubject('V50', V50)
];
