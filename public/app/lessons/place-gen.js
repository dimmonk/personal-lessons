/* ===================== LESSONS: A GROUP OF PLACES MADE INTO QUESTIONS ===================== */
// Lesson standard 3.5 (a place group) and 3.4 (a check drawn from one). A place generator is a `FC.gen` entry with `places` where a numeric
// generator has `params` and `make`: a group of places of one region of FC.maps, each with its name, its flag if it has one, the one line that says
// what it is and the spellings that name it. Its seed is not a pile of numbers but a choice: the seed modulo the number of (place, form) pairs the
// group can be asked in names the pair, so the same seed is the same question, a try stores only the seed, and the record can say which form a
// place was last asked in. Pure: no page, no storage; the record is passed in as `memory`.
//   places { map, forms: ['tap' | 'name' | 'flag' | 'border'], words: { [form]: Text }, slips?: { [placeId]: slipId },
//            list: [{ id, name, reason, accept: [Entry], flag?, flagLine? }] }
//   tap     the name is shown, the place tapped on the blank map                         (a `place` ask)
//   name    the place is lit, its name typed                                              (a `text` ask under a `map` block with `lit`)
//   flag    the flag is shown (a `flags` block), the country tapped                      (a `place` ask); the feedback shows the flag with the name beside it
//           and opens with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for
//   border  "What borders <name>?" (SAY.placeBorderAsk, so it never reads as a name to tap), a neighbor and then the water tapped, or Landlocked
//           (a `place` ask with mode 'neighbor-water')
// A place is asked in a form only when it can be: a flag needs the place's flag, a border needs a place that is ground with neighbors on the map.
// memory: { [placeId]: { form, ok, run } } how the learner last met each place of the group, from the practice record (schedule.js).

const PLACE_GEN_FORMS = ['tap', 'name', 'flag', 'border'];
const PLACE_FORM_FACET = 'form';           // the facet the engine adds to every made item: the form it was asked in
const PLACE_SALTS = 100000;                // the seed above the pair's number is only there to make two sittings' seeds differ
const PLACE_KEY_JOIN = '|';

const isPlaceGen = def => !!(def && def.places);
// A place group is stored place by place, so each place keeps its own last twelve tries per context (records.js): `<generator>|<place>`
const placeKey = (genId, placeId) => genId + PLACE_KEY_JOIN + placeId;
// the group and place behind a stored key, or null when it is not a place's
function placeKeyOf(data, key){
  const at = String(key).lastIndexOf(PLACE_KEY_JOIN);
  const gen = at > 0 ? data.gens[key.slice(0, at)] : null;
  return isPlaceGen(gen) ? { gen, place: key.slice(at + 1) } : null;
}

/* ---------- the (place, form) pairs of a group: what a seed names ---------- */
const PLACE_PAIRS = new WeakMap();
// the forms a place of the group can be asked in, in the order the group lists its forms
function placeFormsOf(gen, entry, map){
  const on = mapPlace(map, entry.id);
  return gen.places.forms.filter(f => f === 'flag' ? !!entry.flag : f === 'border' ? !!(on.neighbors && on.neighbors.length && on.water) : true);
}
function placePairs(gen){
  let pairs = PLACE_PAIRS.get(gen);
  if(!pairs){
    const map = mapOf(gen.places.map);
    pairs = gen.places.list.flatMap(entry => placeFormsOf(gen, entry, map).map(form => ({ place: entry.id, form })));
    PLACE_PAIRS.set(gen, pairs);
  }
  return pairs;
}
function placePairAt(gen, seed){
  const pairs = placePairs(gen);
  return pairs.length ? pairs[seed % pairs.length] : lessonFail(`place group ${gen.id} has no place it can be asked about`);
}
// a seed that names this place in this form; `salt` tells two seeds of one pair apart
function placeSeedOf(gen, place, form, salt = 0){
  const pairs = placePairs(gen), at = pairs.findIndex(p => p.place === place && p.form === form);
  return at < 0 ? lessonFail(`place group ${gen.id} cannot ask ${place} in the form ${form}`) : at + pairs.length * salt;
}
// the forms a place may be asked in when `only` keeps some places to one form ({ [form]: [placeId] })
function placeAllowedForms(gen, place, only = {}){
  const kept = Object.keys(only).find(f => (only[f] || []).includes(place)), forms = placePairs(gen).filter(p => p.place === place).map(p => p.form);
  return kept ? forms.filter(f => f === kept) : forms;
}

/* ---------- the question a seed makes ---------- */
function placeItem(gen, seed){
  const group = gen.places, { place, form } = placePairAt(gen, seed), entry = group.list.find(p => p.id === place);
  const base = { id: gen.id, strand: gen.strand, facets: { ...(gen.facets || {}), [PLACE_FORM_FACET]: form }, reason: entry.reason };
  const words = group.words[form], tap = (blocks, ask) => ({ ...base, blocks, asks: [ask] });
  // the slip of tapping another place of the group (the place asked is never its own slip)
  const slips = Object.fromEntries(Object.entries(group.slips || {}).filter(([id]) => id !== place));
  const where = { id: 'where', kind: 'place', prompt: words, map: group.map, right: place, ...(Object.keys(slips).length ? { slips } : {}) };
  const flags = names => ({ kind: 'flags', gen: gen.id, places: [place], ...(names ? { names: true } : {}) });
  const made = form === 'tap' ? tap([{ kind: 'prose', text: entry.name }], where)
    : form === 'flag' ? { ...tap([flags(false)], where), figure: flags(true), reason: entry.flagLine ? [entry.flagLine, entry.reason] : entry.reason }
    : form === 'border' ? tap([{ kind: 'prose', text: SAY.placeBorderAsk(entry.name) }], { id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: words, map: group.map, of: place })
    : tap([{ kind: 'map', region: group.map, lit: [place] }], { id: 'name', kind: 'text', prompt: words, accept: entry.accept });
  return { ...made, seed, values: { place, form, name: entry.name } };
}
// every question a group can make, one for each pair (the validator reads them all)
const placeItems = gen => placePairs(gen).map(p => placeItem(gen, placeSeedOf(gen, p.place, p.form)));

/* ---------- what is left out of a form, and the order places are met in ---------- */
// `only` of every check that draws from the group, put together: a place kept to a form by any of them is kept in a lesson's groups and the review as in the check
const mergeOnly = (a, b) => Object.fromEntries([...new Set([...Object.keys(a), ...Object.keys(b)])].map(f => [f, [...new Set([...(a[f] || []), ...(b[f] || [])])]]));
const placeOnlyOf = (data, genId) => Object.values(data.lessons)
  .reduce((only, l) => checkIsDrawn(l.check) && l.check.items.draw.gen === genId ? mergeOnly(only, l.check.items.draw.only || {}) : only, {});
// places the learner missed last time first, then the ones met longest ago (never met before met), ties in a random order from the seed
function placesStaleFirst(ids, memory, seed){
  const key = id => memory[id] ? [memory[id].ok ? 1 : 0, memory[id].run] : [1, ''];
  const before = (a, b) => { const x = key(a.id), y = key(b.id); return (x[0] - y[0]) || (x[1] < y[1] ? -1 : x[1] > y[1] ? 1 : 0) || a.i - b.i; };
  return shuffled(ids, hashSeed(seed)).map((id, i) => ({ id, i })).sort(before).map(x => x.id);
}
// the form to meet a place in: one it can be asked in, not the one it was last asked in when there is another, chosen by the seed
function placeFormFor(gen, place, memory, only, seed){
  const forms = placeAllowedForms(gen, place, only), other = forms.filter(f => !(memory[place] && memory[place].form === f)), from = other.length ? other : forms;
  return from[hashSeed(`${seed}|${place}`) % from.length];
}
const placeIdsOf = gen => gen.places.list.map(p => p.id);

/* ---------- the three ways places are chosen ---------- */
// The draw of a check (3.4): `split` says how many of each form; within a form the places are drawn at random, preferring (1) a place the draw has not
// used yet and (2) one last asked in another form. A form with the fewest places to choose from is drawn first so it is not left with what the others used.
// Places kept to a form by `only` are drawn only in it. The order asked is mixed. [{ place, form }]
function placeDraw(gen, draw, memory, seed){
  const only = draw.only || {}, forms = Object.keys(draw.split).filter(f => draw.split[f] > 0), used = new Set();
  const candidates = form => placeIdsOf(gen).filter(id => placeAllowedForms(gen, id, only).includes(form));
  const order = forms.map(form => ({ form, i: PLACE_GEN_FORMS.indexOf(form), n: candidates(form).length })).sort((a, b) => a.n - b.n || a.i - b.i).map(x => x.form);
  const picks = order.flatMap(form => {
    const pool = candidates(form);
    if(!pool.length) lessonFail(`place group ${gen.id}: no place can be asked in the form ${form}`);
    const rank = id => (used.has(id) ? 2 : 0) + (memory[id] && memory[id].form === form ? 1 : 0);
    const ranked = shuffled(pool, hashSeed(`${seed}|${form}`)).map((id, i) => ({ id, i })).sort((a, b) => rank(a.id) - rank(b.id) || a.i - b.i).map(x => x.id);
    const chosen = Array.from({ length: draw.split[form] }, (_, k) => ranked[k % ranked.length]);
    chosen.forEach(id => used.add(id));
    return chosen.map(place => ({ place, form }));
  });
  return shuffled(picks, hashSeed(`${seed}|order`));
}
// A reference in a group: `n` different places of the group (all of those it can ask when n is that many), in the form `with.form` when it names one,
// else in the form each place was not last asked in; the places missed or met longest ago first. [{ place, form }]
function placeSetPicks(gen, ref, memory, only, seed){
  const w = ref.with || {};
  const pool = placeIdsOf(gen).filter(id => (!w.place || id === w.place) && placeAllowedForms(gen, id, only).some(f => !w.form || f === w.form));
  if(!pool.length) lessonFail(`place group ${gen.id}: nothing to ask for ${JSON.stringify(w)}`);
  const ranked = placesStaleFirst(pool, memory, seed), chosen = Array.from({ length: ref.n }, (_, k) => ranked[k % ranked.length]);
  return shuffled(chosen.map(place => ({ place, form: w.form || placeFormFor(gen, place, memory, only, seed) })), hashSeed(`${seed}|order`));
}
// One place for the review: the one missed last time, else the one met longest ago, in a form it was not last asked in. { place, form }
function placeReviewPick(gen, memory, only, seed){
  const place = placesStaleFirst(placeIdsOf(gen), memory, seed)[0];
  return { place, form: placeFormFor(gen, place, memory, only, seed) };
}

/* ---------- the problems of a group, of a check's draw and of a reference to it, for the validator: [string] ---------- */
const placeDuplicates = list => [...new Set(list.filter((x, i) => list.indexOf(x) !== i))];
function placeGenProblems(gen, maps){
  const group = gen.places, map = maps[group.map];
  if(!map) return [`the region "${group.map}" is not in the map data (${Object.keys(maps).join(', ')})`];
  const problems = [], ids = group.list.map(p => p.id);
  placeDuplicates(group.forms).forEach(f => problems.push(`the form "${f}" is listed twice`));
  group.forms.filter(f => !PLACE_GEN_FORMS.includes(f)).forEach(f => problems.push(`"${f}" is not a form of a place group (${PLACE_GEN_FORMS.join(', ')})`));
  PLACE_GEN_FORMS.filter(f => group.forms.includes(f) !== (f in group.words)).forEach(f => problems.push(group.forms.includes(f) ? `the form "${f}" has no words for its question` : `words are given for the form "${f}", which the group does not ask`));
  placeDuplicates(ids).forEach(id => problems.push(`the place "${id}" is listed twice`));
  [gen.id, ...ids].filter(id => id.includes(PLACE_KEY_JOIN)).forEach(id => problems.push(`"${id}" holds "${PLACE_KEY_JOIN}", which joins a group to a place in the record`));
  group.list.forEach(p => {
    const on = map.places.find(x => x.id === p.id);
    if(!on) return problems.push(`the place "${p.id}" is not a place of the map ${group.map}`);
    if(!on.rings.length) problems.push(`the place "${p.id}" has no shape on the map to be tapped`);
    placeDuplicates(p.accept.map(a => typeof a === 'string' ? a : a.text)).forEach(a => problems.push(`the place "${p.id}" lists the spelling "${a}" twice`));
  });
  Object.keys(group.slips || {}).filter(id => !map.places.some(x => x.id === id)).forEach(id => problems.push(`the slip is keyed by "${id}", which is not a place of the map ${group.map}`));
  if(!problems.length) group.forms.forEach(f => { if(!placePairs(gen).some(p => p.form === f)) problems.push(`no place of the group can be asked in the form "${f}"`); });
  return problems;
}
// a check's draw: { gen, split: { [form]: n }, only?: { [form]: [placeId] } }
function placeDrawProblems(gen, draw){
  const group = gen.places, ids = placeIdsOf(gen), problems = [];
  Object.keys(draw.split).filter(f => !group.forms.includes(f)).forEach(f => problems.push(`the split asks the form "${f}", which the group "${gen.id}" does not ask (${group.forms.join(', ')})`));
  Object.entries(draw.split).filter(([, n]) => !(Number.isInteger(n) && n >= 0)).forEach(([f]) => problems.push(`the split asks a number of "${f}" that is not a whole number of zero or more`));
  if(!Object.values(draw.split).some(n => n > 0)) problems.push('the split asks no question at all');
  Object.entries(draw.only || {}).forEach(([f, list]) => {
    if(!group.forms.includes(f)) return problems.push(`"only" names the form "${f}", which the group does not ask`);
    list.filter(id => !ids.includes(id)).forEach(id => problems.push(`"only" keeps "${id}" to the form "${f}", and it is not a place of the group`));
    list.filter(id => ids.includes(id) && !placePairs(gen).some(p => p.place === id && p.form === f)).forEach(id => problems.push(`"only" keeps "${id}" to the form "${f}", which that place cannot be asked in`));
    placeDuplicates(list).forEach(id => problems.push(`"only" keeps "${id}" to the form "${f}" twice`));
  });
  placeDuplicates(Object.values(draw.only || {}).flat()).forEach(id => problems.push(`"only" keeps "${id}" to more than one form`));
  if(!problems.length) Object.entries(draw.split).filter(([, n]) => n > 0).forEach(([f, n]) => {
    const can = ids.filter(id => placeAllowedForms(gen, id, draw.only || {}).includes(f)).length;
    if(can < n) problems.push(`the split asks ${n} in the form "${f}" and only ${can} place${can === 1 ? '' : 's'} can be asked in it`);
  });
  return problems;
}
// a `flags` block: { kind: 'flags', gen, places: [placeId], names? } shows the flags of places of a group, each with its name beside it when `names`
function flagsBlockProblems(block, gens){
  const gen = gens[block.gen];
  if(!isPlaceGen(gen)) return [`"${block.gen}" is not a group of places, and only a group of places has flags`];
  const list = gen.places.list, problems = [];
  if(!block.places.length) problems.push('a flags block names at least one place');
  placeDuplicates(block.places).forEach(id => problems.push(`the place "${id}" is named twice`));
  block.places.forEach(id => {
    const entry = list.find(p => p.id === id);
    if(!entry) problems.push(`"${id}" is not a place of the group ${gen.id}`);
    else if(!entry.flag) problems.push(`"${id}" has no flag in the group ${gen.id}`);
  });
  return problems;
}
// a reference to the group in a lesson: { gen, n, with?: { form?, place? } }
function placeRefProblems(gen, ref, only = {}){
  const w = ref.with || {}, group = gen.places, problems = [];
  Object.keys(w).filter(k => !['form', 'place'].includes(k)).forEach(k => problems.push(`"with" holds "${k}"; a place group takes only form and place`));
  if('form' in w && !group.forms.includes(w.form)) problems.push(`"with" asks the form "${w.form}", which the group does not ask (${group.forms.join(', ')})`);
  if('place' in w && !placeIdsOf(gen).includes(w.place)) problems.push(`"with" asks the place "${w.place}", which is not in the group`);
  if(problems.length) return problems;
  const can = placeIdsOf(gen).filter(id => (!w.place || id === w.place) && placeAllowedForms(gen, id, only).some(f => !w.form || f === w.form)).length;
  if(!can) problems.push('nothing in the group can be asked that way');
  else if(ref.n > can) problems.push(`it asks ${ref.n} questions and only ${can} different place${can === 1 ? '' : 's'} can be asked that way`);
  if(w.place && w.form && !placePairs(gen).some(p => p.place === w.place && p.form === w.form)) problems.push(`"${w.place}" cannot be asked in the form "${w.form}"`);
  return problems;
}
