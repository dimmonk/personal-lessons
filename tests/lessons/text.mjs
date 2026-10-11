// Text helpers shared by every rule: Text fields, the strings a learner reads, canonical JSON. Nothing here changes its input;
// every function returns a new value.

// A text field is one paragraph (a string) or several (an array of strings). Always read it through paras.
export const paras = text => text == null ? [] : Array.isArray(text) ? [...text] : [text];
export const joined = text => paras(text).join(' ');

export const isFilled = x => x !== undefined && x !== null && x !== '' && !(Array.isArray(x) && x.length === 0);
export const unique = list => [...new Set(list)];
export const hasDuplicates = list => new Set(list).size !== list.length;
export const duplicatesOf = list => unique(list.filter((x, i) => list.indexOf(x) !== i));

// Every string in a value, with the path it came from.
export function* strings(value, path = '') {
  if (typeof value === 'string') yield [path, value];
  else if (value && typeof value === 'object') for (const [k, x] of Object.entries(value)) yield* strings(x, `${path}.${k}`);
}

// Comparison form: no capitals, no punctuation, single spaces.
// a possessive "’s" is dropped first, so "House’s" is not read as "houses"
export const norm = s => s.toLowerCase().replace(/[’']s\b/g, '').replace(/[’']/g, '').replace(/[^a-z0-9$ ]+/g, ' ').replace(/\s+/g, ' ').trim();
export const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// A whole word or phrase in already-normalised text.
export const containsPhrase = (bare, phrase) => new RegExp(`(^| )${escapeRegExp(norm(phrase))}( |$)`).test(bare);
// how many words a piece of text has (for reading time)
export const wordCount = text => (String(text).match(/[A-Za-z0-9$%][\w$%’'.-]*/g) || []).length;

// Canonical JSON: object keys sorted at every depth (R3).
export const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
export const byId = (list, field = 'id') => Object.fromEntries(list.map(x => [x[field], x]));
export const omit = (obj, ...fields) => Object.fromEntries(Object.entries(obj).filter(([k]) => !fields.includes(k)));
