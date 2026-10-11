/* ===================== LESSONS: ITEMS MADE WITH FRESH NUMBERS ===================== */
// Lesson standard 26.1 ("A generator"). A generator is an item whose numbers are made fresh each time: `params` says what
// may vary, `make(pick, params)` is a pure function of the seed, and every `{name}` slot in the item's text is filled from the
// values it returns. A try stores the seed, never the numbers, so the exact problem can be rebuilt. Pure: no page, no storage.

// A small seeded random source (mulberry32): the same seed gives the same stream, on every device.
function seededRandom(seed){
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
// A 32-bit number from a string (FNV-1a), to turn a run and an item into a seed.
function hashSeed(text){
  let h = 2166136261;
  for(const ch of String(text)){ h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
// Fisher-Yates on a copy, from a seed: the order is the same every time for the same seed.
function shuffled(list, seed){
  const rnd = seededRandom(seed), out = [...list];
  for(let i = out.length - 1; i > 0; i--){
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// A parameter is a range [min, max, step] (three numbers, step above zero) or a list of choices.
const isRangeParam = def => Array.isArray(def) && def.length === 3 && def.every(x => typeof x === 'number' && Number.isFinite(x)) && def[2] > 0 && def[0] <= def[1];
function drawParam(def, rnd){
  if(isRangeParam(def)){
    const [min, max, step] = def, steps = Math.floor((max - min) / step + 1e-9);
    return Math.round((min + step * Math.floor(rnd() * (steps + 1))) * 1e9) / 1e9;
  }
  return def[Math.floor(rnd() * def.length)];
}
// The values of one instance: every parameter drawn once, in the order the generator lists them (`with` fixes some), then
// whatever the generator's own `make` adds or computes.
function genValues(gen, seed, fixed = {}){
  const rnd = seededRandom(seed), drawn = {};
  Object.entries(gen.params || {}).forEach(([name, def]) => { drawn[name] = name in fixed ? fixed[name] : drawParam(def, rnd); });
  const pick = name => name in drawn ? drawn[name] : lessonFail(`generator ${gen.id}: no parameter "${name}"`);
  return { ...drawn, ...gen.make(pick, gen.params || {}) };
}

const SLOT = /\{([A-Za-z][A-Za-z0-9]*)\}/g;
const slotsIn = text => [...String(text).matchAll(SLOT)].map(m => m[1]);
function fillSlots(text, values){
  return String(text).replace(SLOT, (_, name) => name in values ? String(values[name]) : lessonFail(`slot {${name}} has no value`));
}
// Every string in a value, filled; objects and lists are rebuilt, never changed.
function fillDeep(value, values){
  if(typeof value === 'string') return fillSlots(value, values);
  if(Array.isArray(value)) return value.map(x => fillDeep(x, values));
  if(value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, x]) => [k, fillDeep(x, values)]));
  return value;
}
const GEN_ONLY = ['params', 'make'];
// One instance of a generator as an ordinary item: id kept (a try is stored under it), text filled, seed and values attached.
function itemFromGen(gen, seed, fixed){
  const values = genValues(gen, seed, fixed);
  const item = Object.fromEntries(Object.entries(gen).filter(([k]) => !GEN_ONLY.includes(k)));
  return { ...fillDeep(item, values), seed, values };
}

// What a lesson names: an item id, { gen, n, with? }, { sing, n } or a pair of those. The instance the learner meets:
// { key: id the tries are stored under, item, seed? }
// A sung question (26.1.1) is named by its task: { sing: { task, ...params }, n }. Its stored id is singKey (sing-task.js).
const refId = ref => typeof ref === 'string' ? ref : 'sing' in ref ? singKey(ref.sing) : ref.gen;
// `ref` is kept on a made instance, so a missed question can be made again with new numbers or targets (queue.js)
function instanceOf(data, ref, seed){
  if(typeof ref === 'string'){
    const item = data.items[ref] || lessonFail(`unknown item ${ref}`);
    return { key: ref, item };
  }
  if('sing' in ref) return { key: singKey(ref.sing), item: singItem(ref.sing), seed, ref };
  const gen = data.gens[ref.gen] || lessonFail(`unknown generator ${ref.gen}`);
  const item = itemFromGen(gen, seed, ref.with);
  return { key: gen.id, item, seed, ref };
}
// The definition (an item, a generator or a sung question) behind a stored id, or null when the data no longer has it.
const definitionOf = (data, id) => data.items[id] || data.gens[id] || singDefinition(id);
