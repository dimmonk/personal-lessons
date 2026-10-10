// Text helpers shared by every rule: Text fields, tokens, the prose a learner reads, canonical JSON.
// Nothing here changes its input; every function returns a new value.

// A token of section 4, S5. The pattern carries the g flag, so it is only ever used through the helpers below
// (matchAll and replace both work on a copy and have no state to carry between calls).
const TOKEN_PATTERN = /\{(o|plain|needs|q|a|when|t|means|test|cue|f):([^}]+)\}/g;
const ANY_BRACE = /\{[a-z]+:[^}]*\}/;

// [{ kind, ref }] for every token in a string.
export const tokensOf = s => [...s.matchAll(TOKEN_PATTERN)].map(m => ({ kind: m[1], ref: m[2] }));
export const stripTokens = (s, filler = ' ') => s.replace(TOKEN_PATTERN, filler);
export const hasUnknownToken = s => ANY_BRACE.test(stripTokens(s));
export const hasToken = (s, kind, ref) => tokensOf(s).some(t => t.kind === kind && t.ref === ref);

// A text field is one paragraph (a string) or several (an array of strings). Always read it through paras.
export const paras = text => text == null ? [] : Array.isArray(text) ? [...text] : [text];
export const joined = text => paras(text).join(' ');
// A case's marked words for a step: one phrase or a list of phrases.
export const cuesOf = (c, step) => c && c.cues && c.cues[step] ? paras(c.cues[step]) : [];

export const isFilled = x => x !== undefined && x !== null && x !== '' && !(Array.isArray(x) && x.length === 0);
export const unique = list => [...new Set(list)];
export const hasDuplicates = list => new Set(list).size !== list.length;
export const duplicatesOf = list => unique(list.filter((x, i) => list.indexOf(x) !== i));

// Every string in a value, with the path it came from.
export function* strings(value, path = '') {
  if (typeof value === 'string') yield [path, value];
  else if (value && typeof value === 'object') for (const [k, x] of Object.entries(value)) yield* strings(x, `${path}.${k}`);
}

// Fields that hold ids, codes and enums are never prose; fields that quote what people say are free text (S5, V2).
export const STRUCTURAL = /\.(id|kind|use|tier|setting|topic|case|first|second|outcome|family|ledger|step|mark|after|looksLike|is|about|answer|voice|neighbor|resembles|option|taughtIn|branch|term|expect|echo|continues|type|name|demo|concept|problem|row|solve)$/;
// an audio block (section 21): note names and the key's answers it names are ids, not prose; its `says` and `label` are read as prose
export const STRUCTURAL_IN = /\.(route|cues|segments\.\d+\.text|pair|among|testedBy|cases|facts|also|feature|map|audio\.notes|audio\.answers|play)(\.|$)/;
// a case's or claim's own story (its top-level text) is quoted; a choice's text on a card is the app's prose and is scanned
const QUOTED = /^\.text$|\.(idea|wild\.\d+|options\.\d+\.text)$/;
export const prose = obj => [...strings(obj)].filter(([p]) => !STRUCTURAL.test(p) && !STRUCTURAL_IN.test(p) && !QUOTED.test(p));

// How many sentences a piece of text holds: tokens count as words, and the usual abbreviations do not end a sentence.
const ABBREVIATIONS = /\b(Mr|Mrs|Ms|Dr|St|Jr|Sr|vs|etc|e\.g|i\.e|U\.S|a\.m|p\.m|No)\./g;
export const sentenceCount = text => {
  const plain = stripTokens(text, 'x').replace(ABBREVIATIONS, '$1').replace(/\d\.\d/g, '0').trim();
  return plain ? plain.split(/[.!?][’”'")]*\s+(?=[A-Z“"‘'(0-9$])/).length : 0;
};

// Comparison form: no capitals, no punctuation, single spaces.
// a possessive "’s" is dropped first, so "House’s" is not read as "houses"
export const norm = s => s.toLowerCase().replace(/[’']s\b/g, '').replace(/[’']/g, '').replace(/[^a-z0-9£ ]+/g, ' ').replace(/\s+/g, ' ').trim();
// The distinct words of four letters or more (V2 near-copy).
export const WORD_MIN_LETTERS = 4;
export const wordSet = s => new Set(norm(s).split(' ').filter(w => w.length >= WORD_MIN_LETTERS));
export const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// A whole word or phrase in already-normalised text.
export const containsPhrase = (bare, phrase) => new RegExp(`(^| )${escapeRegExp(norm(phrase))}( |$)`).test(bare);

// Canonical JSON: object keys sorted at every depth (R3).
export const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
export const byId = (list, field = 'id') => Object.fromEntries(list.map(x => [x[field], x]));
export const omit = (obj, ...fields) => Object.fromEntries(Object.entries(obj).filter(([k]) => !fields.includes(k)));
