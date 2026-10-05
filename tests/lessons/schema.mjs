// A small schema language for the exact shapes of section 4 (S1 to S6), and the checker that applies it.
// checkShape(value, schema, path) returns the list of problems: [{ path, message }]. It never throws and never changes the value.
//
//   str, text, int, bool, any      leaf types (a Text is a string or a list of strings; "empty" is not "present")
//   en(...values)                  one of these values
//   arr(item, { empty })           a list of item; an empty list is "not present" unless empty: true
//   map(value)                     an object with free keys (route, cues, reason ...)
//   obj({ required }, { optional }) exactly these fields: none missing, none unknown
//   either(...schemas)             the value matches at least one
//   nullable(schema)               the schema, or null
import { isFilled } from './text.mjs';

export const str = { t: 'str' };
export const text = { t: 'text' };
export const int = { t: 'int' };
export const bool = { t: 'bool' };
export const any = { t: 'any' };
export const en = (...values) => ({ t: 'enum', values });
export const arr = (item, { empty = false } = {}) => ({ t: 'arr', item, empty });
export const map = value => ({ t: 'map', value });
export const obj = (required, optional = {}) => ({ t: 'obj', required, optional });
export const either = (...options) => ({ t: 'either', options });
// null is a valid value (a sign-off that has not happened yet); absence still is not.
export const nullable = schema => ({ ...schema, nullable: true });

const isObject = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const problem = (path, message) => [{ path, message }];

const LEAF = {
  str: (v, p) => typeof v === 'string' && v !== '' ? [] : problem(p, 'must be a non-empty string'),
  int: (v, p) => Number.isInteger(v) ? [] : problem(p, 'must be an integer'),
  bool: (v, p) => typeof v === 'boolean' ? [] : problem(p, 'must be true or false'),
  any: () => [],
  text: (v, p) => typeof v === 'string' && v !== '' || (Array.isArray(v) && v.length > 0 && v.every(s => typeof s === 'string' && s !== ''))
    ? [] : problem(p, 'must be a Text: a non-empty string, or a non-empty list of non-empty strings')
};

const mayBeEmpty = (sub, v) => sub.t === 'bool' || sub.t === 'int' || (sub.t === 'arr' && sub.empty && Array.isArray(v)) || (sub.nullable && v === null);

function checkObject(value, schema, path) {
  if (!isObject(value)) return problem(path, 'must be an object');
  const known = new Set([...Object.keys(schema.required), ...Object.keys(schema.optional)]);
  const missing = Object.entries(schema.required).flatMap(([field, sub]) =>
    !(field in value) || (!isFilled(value[field]) && !mayBeEmpty(sub, value[field]))
      ? problem(`${path}.${field}`, 'is required and is missing or empty') : checkShape(value[field], sub, `${path}.${field}`));
  const extra = Object.keys(value).filter(k => !known.has(k)).flatMap(k => problem(`${path}.${k}`, 'is not a field of this shape'));
  const optional = Object.entries(schema.optional).filter(([field]) => field in value)
    .flatMap(([field, sub]) => checkShape(value[field], sub, `${path}.${field}`));
  return [...missing, ...extra, ...optional];
}

export function checkShape(value, schema, path = '') {
  if (value === null && schema.nullable) return [];
  switch (schema.t) {
    case 'enum': return schema.values.includes(value) ? [] : problem(path, `"${value}" is not one of ${schema.values.join(', ')}`);
    case 'arr':
      if (!Array.isArray(value)) return problem(path, 'must be a list');
      return value.flatMap((item, i) => checkShape(item, schema.item, `${path}[${i}]`));
    case 'map':
      if (!isObject(value)) return problem(path, 'must be an object');
      return Object.entries(value).flatMap(([k, v]) => checkShape(v, schema.value, `${path}.${k}`));
    case 'obj': return checkObject(value, schema, path);
    case 'either': {
      const tries = schema.options.map(o => checkShape(value, o, path));
      return tries.some(t => t.length === 0) ? [] : tries.reduce((best, t) => t.length < best.length ? t : best);
    }
    default: return LEAF[schema.t](value, path);
  }
}

// The same schema with every required field made optional, except the named ones. Types and unknown fields are still checked
// where a field is present. Used where another rule owns "is it present" (V1 for the key; a continuing card carries only what it needs).
export function relax(schema, keep = []) {
  switch (schema.t) {
    case 'obj': return {
      ...schema,
      required: Object.fromEntries(Object.entries(schema.required).filter(([k]) => keep.includes(k)).map(([k, v]) => [k, relax(v, keep)])),
      optional: { ...Object.fromEntries(Object.entries(schema.optional).map(([k, v]) => [k, relax(v, keep)])),
        ...Object.fromEntries(Object.entries(schema.required).filter(([k]) => !keep.includes(k)).map(([k, v]) => [k, relax(v, keep)])) }
    };
    case 'arr': return { ...schema, item: relax(schema.item, keep), empty: true };
    case 'map': return { ...schema, value: relax(schema.value, keep) };
    case 'either': return { ...schema, options: schema.options.map(o => relax(o, keep)) };
    default: return schema;
  }
}
