// The pure half of a group of places made into questions (lesson standard 3.4, 3.5, 6.3): the question a seed makes in each of the four forms, the
// seed that names a place and a form, the draw of a check (the split fixed by form, places drawn at random, the ones last asked in another form
// first, places kept to a form by `only`), the places of a lesson's group, the review's pick, and the record read back. Run on the real map data of
// western Europe and on the test region. No browser. Ends with seeded faults: each is a change to the source of place-gen.js or place-draw.js that
// must turn the checks red.
// Run: node tests/place-gen-pure.mjs
import { loadApp } from './load-app.mjs';

// a group of western Europe, as a lesson would write it: nine countries with flags and five microstates without
const EUROPE = {
  id: 'g-europe', strand: 'europe', facets: {},
  places: {
    map: 'europe-west', forms: ['tap', 'name', 'flag', 'border'],
    words: { tap: 'Tap it on the map.', name: 'What is the lit place called?', flag: 'Tap the country with this flag.', border: 'Tap a country next to it, then the water it touches.' },
    list: [
      ['belgium', 'Belgium', '🇧🇪'], ['france', 'France', '🇫🇷'], ['germany', 'Germany', '🇩🇪'], ['switzerland', 'Switzerland', '🇨🇭'], ['austria', 'Austria', '🇦🇹'],
      ['italy', 'Italy', '🇮🇹'], ['spain', 'Spain', '🇪🇸'], ['portugal', 'Portugal', '🇵🇹'], ['luxembourg', 'Luxembourg', '🇱🇺'],
      ['andorra', 'Andorra'], ['monaco', 'Monaco'], ['liechtenstein', 'Liechtenstein'], ['san-marino', 'San Marino'], ['vatican-city', 'Vatican City']
    ].map(([id, name, flag]) => ({ id, name, accept: [name], reason: `${name} is in western Europe.`, ...(flag ? { flag } : {}), ...(id === 'belgium' ? { flagLine: 'Its stripes stand upright.' } : {}) }))
  }
};
const MICRO = ['andorra', 'monaco', 'liechtenstein', 'san-marino', 'vatican-city'];
const DRAW = { gen: 'g-europe', split: { tap: 5, name: 3, flag: 2, border: 2 }, only: { tap: MICRO } };

async function suite(app) {
  const failures = [];
  let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
  const { FC, placePairs, placePairAt, placeSeedOf, placeAllowedForms, placeItem, placeItems, placeDraw, placeSetPicks, placeReviewPick, placeKey, placeKeyOf, placeAskProblems,
    placeGenProblems, placeDrawProblems, placeRefProblems, recordTry, placeMemory, placeOnlyOf, placeDrawInstances, placeSetInstances, placeReviewInstance, instanceOf,
    definitionOf, defOfTry, checkSize, checkStrands, drawSize, drawStrands, scoreItem, strandInstance, buildSet, mapPlace, mapOf, placeFreshSeed, mapBlockProblems, flagsBlockProblems } = app;
  const maps = FC.maps, ids = EUROPE.places.list.map(p => p.id);
  const atlas = FC.get('atlas'), isles = atlas.gens['g-isles'];

  /* ---------- the pairs a group can be asked in, and the seed that names one ---------- */
  const pairs = placePairs(EUROPE), formsOf = id => pairs.filter(p => p.place === id).map(p => p.form);
  same(formsOf('belgium'), ['tap', 'name', 'flag', 'border'], 'a country with a flag, neighbors and water is asked in all four forms');
  same(formsOf('andorra'), ['tap', 'name', 'border'], 'a microstate has no flag here, and has neighbors');
  same(formsOf('vatican-city'), ['tap', 'name', 'border'], 'a dot with one neighbor can be asked for its neighbor');
  same(formsOf('switzerland'), ['tap', 'name', 'flag', 'border'], 'a country with no water is asked for its neighbor and Landlocked');
  same(placePairs(isles).map(p => `${p.place}:${p.form}`), ['alder:tap', 'alder:name', 'alder:flag', 'alder:border', 'birch:tap', 'birch:name', 'birch:flag', 'birch:border', 'cedar:tap', 'cedar:name', 'cedar:flag', 'cedar:border', 'speck:tap', 'speck:name', 'sea:tap', 'sea:name'], 'the test region: a dot with no neighbors and a sea are not asked for a neighbor, nor for a flag');
  same(pairs.length, pairs.filter((p, i) => pairs.findIndex(q => q.place === p.place && q.form === p.form) === i).length, 'no pair twice');
  for (const p of pairs) {
    for (const salt of [0, 1, 99999]) {
      const seed = placeSeedOf(EUROPE, p.place, p.form, salt);
      same(placePairAt(EUROPE, seed), p, `seed ${seed} names ${p.place} in ${p.form}`);
    }
  }
  check(placeSeedOf(EUROPE, 'belgium', 'tap', 99999) < 2 ** 32, 'a seed fits in 32 bits');
  let refused = '';
  try { placeSeedOf(EUROPE, 'andorra', 'flag'); } catch (e) { refused = e.message; }
  check(/cannot ask andorra in the form flag/.test(refused), 'a place cannot be named in a form it cannot be asked in');

  /* ---------- the question a seed makes ---------- */
  const forms = ['tap', 'name', 'flag', 'border'];
  for (const p of pairs) {
    const seed = placeSeedOf(EUROPE, p.place, p.form, 7), a = placeItem(EUROPE, seed), b = placeItem(EUROPE, seed), entry = EUROPE.places.list.find(x => x.id === p.place);
    same(a, b, `${p.place} in ${p.form}: the same seed makes the same question`);
    same([a.values.place, a.values.form, a.facets.form, a.seed], [p.place, p.form, p.form, seed], `${p.place} in ${p.form}: the question knows its place, form and seed`);
    const ask = a.asks[0], shown = JSON.stringify(a.blocks);
    same(ask.kind === 'place' ? placeAskProblems(ask, maps) : mapBlockProblems(a.blocks[0], maps), [], `${p.place} in ${p.form}: its ask and its map are sound`);
    check(a.strand === 'europe', `${p.place} in ${p.form}: the strand is the group's`);
    if (p.form === 'tap') check(ask.kind === 'place' && ask.right === p.place && shown.includes(entry.name) && !a.blocks.some(x => x.kind === 'map'), `${p.place}: a name to tap, with no map above it`);
    if (p.form === 'flag') {
      check(ask.kind === 'place' && ask.right === p.place && a.blocks.length === 1 && a.blocks[0].kind === 'flags' && a.blocks[0].places.join() === p.place && !a.blocks[0].names && !shown.includes(entry.name),
        `${p.place}: a flag to tap that does not carry the name`);
      same(flagsBlockProblems(a.blocks[0], { 'g-europe': EUROPE }), [], `${p.place}: the flag shown is a flag of the group`);
      check(a.figure && a.figure.kind === 'flags' && a.figure.names === true && a.figure.places.join() === p.place, `${p.place}: the feedback shows the flag with its name beside it`);
      same(a.reason, p.place === 'belgium' ? [entry.flagLine, entry.reason] : entry.reason, `${p.place}: the feedback opens with the line that tells its flag, when the place has one`);
    } else check(a.reason === entry.reason && !a.figure, `${p.place} in ${p.form}: the reason is the place's and nothing is added to the feedback`);
    if (p.form === 'name') check(ask.kind === 'text' && a.blocks.length === 1 && a.blocks[0].kind === 'map' && a.blocks[0].lit[0] === p.place && !shown.includes(entry.name), `${p.place}: a lit place to name, with the name nowhere above it`);
    if (p.form === 'border') check(ask.mode === 'neighbor-water' && ask.of === p.place && shown.includes(`What borders ${entry.name}?`), `${p.place}: a neighbor and its water asks what borders the place`);
  }
  same(placeItems(EUROPE).length, pairs.length, 'every pair makes a question');
  // a place given the area it sits in, not a reason: its feedback is the three steps, the neighbors and water read from the map data, then its cue
  const swiss = { map: 'europe-west', forms: ['tap'], words: { tap: 'Tap it.' }, list: [{ id: 'switzerland', name: 'Switzerland', accept: ['Switzerland'], area: 'the Alps', cue: 'It is the one with the cross.' }] };
  same(placeItem({ id: 'g-swiss', strand: 'europe', places: swiss }, 0).reason,
    ['Area: the Alps.', 'Touches: Austria, France, Germany, Italy and Liechtenstein.', 'Water: none; it is landlocked.', 'It is the one with the cross.'],
    'a place given its area is fed back as its area, what touches it and its water, from the map data, then its cue');
  same(placePairs({ id: 'g-kept', strand: 'europe', places: { ...swiss, forms: ['tap', 'name'], words: { tap: 'Tap it.', name: 'Name it.' }, list: [{ ...swiss.list[0], forms: ['tap'] }] } }).map(p => p.form), ['tap'],
    "a place's own forms keep it to those of the group's forms");
  // a lit place to name rejects the group's other names typed exactly
  const nameOfBelgium = placeItems(EUROPE).find(i => i.values.place === 'belgium' && i.values.form === 'name').asks[0];
  check(nameOfBelgium.reject.includes('France') && !nameOfBelgium.reject.includes('Belgium'), "a lit place's name question rejects the other places' names of its group, never its own");
  // a capital: tapped as itself, named from the place it lights (its state)
  const capital = { map: 'europe-west', forms: ['tap', 'name'], words: { tap: 'Tap it.', name: 'Name the capital of the lit country.' }, list: [{ id: 'vatican-city', name: 'Rome', accept: ['Rome'], area: 'Italy', lights: 'italy' }] };
  const named = placeItems({ id: 'g-capital', strand: 'europe', places: capital }).find(i => i.values.form === 'name');
  same(named.blocks[0].lit, ['italy'], 'a place that lights another is named from the place it lights');
  check(placeGenProblems({ id: 'g-capital', places: { ...capital, list: [{ ...capital.list[0], lights: 'atlantis' }] } }, maps).some(m => /lights "atlantis"/.test(m)), 'a place that lights a place not on the map is refused');
  check(placeGenProblems({ id: 'g-kept', places: { ...swiss, list: [{ ...swiss.list[0], forms: ['flag'] }] } }, maps).some(m => /keeps to the form "flag"/.test(m)), 'a place kept to a form its group does not ask is refused');
  check(placeGenProblems({ id: 'g-swiss', places: { ...swiss, list: [{ ...swiss.list[0], reason: 'Both.' }] } }, maps).some(m => /either its own reason or the area/.test(m)), 'a place with both a reason and an area is refused');
  same(placeGenProblems(EUROPE, maps), [], 'a good group has no problems');
  // a city is a dot with no outline (the map of the United States): it can be tapped, so a group of cities is sound
  const cities = { map: 'us', forms: ['tap', 'name'], words: { tap: 'Tap it.', name: 'Name it.' }, list: [{ id: 'houston', name: 'Houston', accept: ['Houston'], reason: 'Houston is in Texas.' }] };
  same(placeGenProblems({ id: 'g-city', strand: 'us-cities', places: cities }, maps), [], 'a city drawn as a dot, with no outline, can be asked');
  // scored by the engine: the right tap is right, a tap elsewhere is not, the typed name is right
  const tapBelgium = placeItem(EUROPE, placeSeedOf(EUROPE, 'belgium', 'tap')), at = mapPlace(mapOf('europe-west'), 'belgium').at, subject = { meta: { lists: {} } };
  check(scoreItem(subject, tapBelgium, null, { where: [...at, 1] }).ok === true && scoreItem(subject, tapBelgium, null, { where: [1, 1, 1] }).ok === false, 'a tap on Belgium is right and a tap at the corner of the map is not');
  const nameFrance = placeItem(EUROPE, placeSeedOf(EUROPE, 'france', 'name'));
  check(scoreItem(subject, nameFrance, null, { name: 'france' }).ok === true && scoreItem(subject, nameFrance, null, { name: 'germany' }).ok === false, 'a lit place named is right with its name and wrong with another');

  /* ---------- the draw of a check ---------- */
  same([drawSize(DRAW), drawSize([{ strands: ['a'], n: 3 }, { strands: ['b'], n: 4 }])], [12, 7], 'a drawn check is as long as its split, or the n of its groups added');
  const memoryNone = {};
  let sameSeed = true, differs = new Set();
  for (let k = 0; k < 200; k++) {
    const seed = `run${k}`, draw = placeDraw(EUROPE, DRAW, memoryNone, seed);
    sameSeed &&= JSON.stringify(draw) === JSON.stringify(placeDraw(EUROPE, DRAW, memoryNone, seed));
    differs.add(JSON.stringify(draw));
    const count = f => draw.filter(d => d.form === f).length;
    if (!(draw.length === 12 && count('tap') === 5 && count('name') === 3 && count('flag') === 2 && count('border') === 2)) { check(false, `seed ${seed}: the split is ${forms.map(f => count(f)).join('/')} of ${draw.length}, not 5/3/2/2 of 12`); break; }
    const wrongForm = draw.filter(d => !formsOf(d.place).includes(d.form));
    if (wrongForm.length) { check(false, `seed ${seed}: ${wrongForm.map(d => `${d.place} in ${d.form}`).join(', ')} cannot be asked that way`); break; }
    const kept = draw.filter(d => MICRO.includes(d.place) && d.form !== 'tap');
    if (kept.length) { check(false, `seed ${seed}: a microstate was drawn in another form than tap (${kept.map(d => d.place + ' ' + d.form).join(', ')})`); break; }
    const twice = draw.filter((d, i) => draw.findIndex(e => e.place === d.place) !== i);
    if (twice.length) { check(false, `seed ${seed}: ${twice.map(d => d.place).join(', ')} drawn twice in one check while others were left`); break; }
  }
  check(sameSeed, 'the same seed draws the same check');
  check(differs.size > 150, `200 seeds drew ${differs.size} different checks`);
  // the preference: places last asked in the form are left until the others are used
  for (const form of ['tap', 'name', 'flag', 'border']) {
    const memory = Object.fromEntries(['belgium', 'france', 'germany', 'switzerland'].map(id => [id, { form, ok: true, run: 'a' }]));
    const split = { [form]: 3 }, draw = { gen: 'g-europe', split }, bad = [];
    for (let k = 0; k < 200; k++) placeDraw(EUROPE, draw, memory, `p${k}`).forEach(d => { if (memory[d.place]) bad.push(`${d.place} (${k})`); });
    same(bad, [], `${form}: a place last asked in ${form} is not drawn in it while others can be`);
  }
  {
    // the places last asked in another form are the ones drawn: of 14 places, 4 were last asked in each other form; the tap draw takes the rest first
    const memory = { belgium: { form: 'name', ok: false, run: 'a' }, france: { form: 'tap', ok: true, run: 'a' }, germany: { form: 'tap', ok: true, run: 'a' }, italy: { form: 'tap', ok: true, run: 'a' } };
    const draw = { gen: 'g-europe', split: { tap: 9 } }, taps = new Set();
    for (let k = 0; k < 50; k++) placeDraw(EUROPE, draw, memory, `q${k}`).forEach(d => taps.add(d.place));
    check(!['france', 'germany', 'italy'].some(id => placeDraw(EUROPE, draw, memory, 'q0').some(d => d.place === id)) && placeDraw(EUROPE, draw, memory, 'q0').some(d => d.place === 'belgium'), 'a place last asked in another form (even missed) is drawn before one last asked in this form');
    // when there are not enough others, the ones last asked in the form fill the rest
    const need = placeDraw(EUROPE, { gen: 'g-europe', split: { tap: 14 } }, memory, 'q0');
    same(need.length, 14, 'a draw that needs every place gets it');
    same(new Set(need.map(d => d.place)).size, 14, 'a draw that needs every place asks each once');
  }
  // the order of the forms in the split does not decide which form gets its places
  same(JSON.stringify(placeDraw(EUROPE, { gen: 'g-europe', split: { tap: 5, name: 3, flag: 2, border: 2 }, only: { tap: MICRO } }, {}, 's').sort((a, b) => a.place < b.place ? -1 : 1)),
    JSON.stringify(placeDraw(EUROPE, { gen: 'g-europe', split: { border: 2, flag: 2, name: 3, tap: 5 }, only: { tap: MICRO } }, {}, 's').sort((a, b) => a.place < b.place ? -1 : 1)), 'the order of the split does not change the places drawn');

  /* ---------- a group in a lesson, and the review's pick ---------- */
  {
    const all = placeSetPicks(EUROPE, { gen: 'g-europe', n: 9, with: { form: 'flag' } }, {}, DRAW.only, 'a');
    same(all.map(p => p.place).sort(), ids.filter(id => !MICRO.includes(id)).sort(), 'nine flags are the nine countries with flags, each once');
    check(all.every(p => p.form === 'flag'), 'a reference that names a form asks in it');
    const taps = placeSetPicks(EUROPE, { gen: 'g-europe', n: 14, with: { form: 'tap' } }, {}, DRAW.only, 'b');
    same(taps.map(p => p.place).sort(), [...ids].sort(), 'fourteen taps are every place, each once');
    const missed = { france: { form: 'tap', ok: false, run: 'z' }, spain: { form: 'tap', ok: false, run: 'y' }, belgium: { form: 'tap', ok: true, run: 'a' } };
    const few = placeSetPicks(EUROPE, { gen: 'g-europe', n: 2, with: { form: 'tap' } }, missed, DRAW.only, 'c');
    same(few.map(p => p.place).sort(), ['france', 'spain'], 'two places out of fourteen are the two missed last time');
    const old = Object.fromEntries(ids.map((id, i) => [id, { form: 'tap', ok: true, run: `r${String(i).padStart(2, '0')}` }]));
    same(placeSetPicks(EUROPE, { gen: 'g-europe', n: 3, with: { form: 'tap' } }, old, {}, 'd').map(p => p.place).sort(), ids.slice(0, 3).sort(), 'with nothing missed, the places met longest ago come first');
    const free = placeSetPicks(EUROPE, { gen: 'g-europe', n: 5 }, { belgium: { form: 'tap', ok: false, run: 'a' } }, DRAW.only, 'e');
    check(free.find(p => p.place === 'belgium').form !== 'tap' && free.filter(p => MICRO.includes(p.place)).every(p => p.form === 'tap'), 'with no form named, a place is met in a form it was not last asked in, and a microstate only as a tap');
    same(placeSetPicks(EUROPE, { gen: 'g-europe', n: 1, with: { place: 'france', form: 'name' } }, {}, {}, 'f'), [{ place: 'france', form: 'name' }], 'a reference can name one place and one form');
    same(placeSetPicks(EUROPE, { gen: 'g-europe', n: 4, with: { form: 'tap' } }, {}, {}, 'g'), placeSetPicks(EUROPE, { gen: 'g-europe', n: 4, with: { form: 'tap' } }, {}, {}, 'g'), 'the same seed picks the same places');
  }
  {
    const memory = { france: { form: 'tap', ok: true, run: 'b' }, spain: { form: 'name', ok: false, run: 'c' }, ...Object.fromEntries(ids.filter(id => !['france', 'spain'].includes(id)).map(id => [id, { form: 'flag', ok: true, run: 'a' }])) };
    let miss = true, other = true;
    for (let k = 0; k < 200; k++) {
      const pick = placeReviewPick(EUROPE, memory, DRAW.only, `rev${k}`);
      miss &&= pick.place === 'spain';
      other &&= pick.form !== 'name' && formsOf('spain').includes(pick.form);
    }
    check(miss, 'the review asks the place missed last time first');
    check(other, 'the review asks it in a form other than the one it was missed in');
    const mem2 = Object.fromEntries(ids.map((id, i) => [id, { form: 'tap', ok: true, run: `r${String(i).padStart(2, '0')}` }]));
    let oldest = true, kept = true;
    for (let k = 0; k < 100; k++) { const pick = placeReviewPick(EUROPE, mem2, DRAW.only, `rev${k}`); oldest &&= pick.place === ids[0]; }
    check(oldest, 'with nothing missed, the review asks the place met longest ago');
    for (let k = 0; k < 100; k++) { const pick = placeReviewPick(EUROPE, { ...Object.fromEntries(MICRO.map(id => [id, { form: 'tap', ok: false, run: 'a' }])), ...{} }, DRAW.only, `m${k}`); kept &&= !MICRO.includes(pick.place) || pick.form === 'tap'; }
    check(kept, 'a microstate kept to the tap is reviewed as a tap');
    same(placeReviewPick(EUROPE, {}, {}, 'x'), placeReviewPick(EUROPE, {}, {}, 'x'), 'the same seed makes the same review pick');
  }

  /* ---------- the problems a lesson is refused for ---------- */
  {
    const bad = (mutate, from = EUROPE) => placeGenProblems(mutate(structuredClone(from)), maps);
    check(bad(g => { g.places.map = 'narnia'; return g; })[0].includes('narnia'), 'a region the map data does not have');
    check(bad(g => { g.places.list[0].id = 'narnia'; return g; }).some(m => m.includes('narnia')), 'a place that is not on the map');
    check(bad(g => { g.places.list.push({ ...g.places.list[0] }); return g; }).some(m => m.includes('listed twice')), 'a place listed twice');
    check(bad(g => { g.places.words = { tap: 'x' }; return g; }).some(m => m.includes('has no words')), 'a form with no words');
    check(bad(g => { g.places.forms = ['tap', 'tap', 'name', 'flag', 'border']; return g; }).some(m => m.includes('listed twice')), 'a form listed twice');
    check(bad(g => { g.places.list[0].accept = ['Belgium', 'Belgium']; return g; }).some(m => m.includes('spelling')), 'a spelling listed twice');
    check(bad(g => { g.places.slips = { narnia: 'x' }; return g; }).some(m => m.includes('narnia')), 'a slip keyed by a place the map does not have');
    check(bad(g => { g.id = 'g|x'; return g; }).some(m => m.includes('joins')), 'an id that holds the join of a key');
    same(placeDrawProblems(EUROPE, DRAW), [], 'a good draw has no problems');
    check(placeDrawProblems(EUROPE, { ...DRAW, split: { tap: 5, dance: 1 } })[0].includes('dance'), 'a form the group does not ask');
    check(placeDrawProblems(EUROPE, { ...DRAW, split: { tap: 0 } }).some(m => m.includes('no question')), 'a split that sums to zero');
    // the flags block: places of the group that have a flag, and a line to tell each by when the block prints the lines
    const flags = (places, more = {}) => flagsBlockProblems({ kind: 'flags', gen: 'g-europe', places, ...more }, { 'g-europe': EUROPE });
    same([flags(['belgium', 'france']), flags(['belgium'], { names: true })], [[], []], 'good flags blocks have no problems');
    check(flags(['narnia'])[0].includes('narnia') && flags(['andorra'])[0].includes('no flag') && flags(['belgium', 'belgium'])[0].includes('twice') && flags([])[0].includes('at least one'), 'flags of a place the group does not have, of one with no flag, twice, or none');
    check(flagsBlockProblems({ kind: 'flags', gen: 'narnia', places: ['belgium'] }, { 'g-europe': EUROPE })[0].includes('narnia'), 'flags of a group that is not there');
    check(placeDrawProblems(EUROPE, { ...DRAW, only: { tap: ['narnia'] } })[0].includes('narnia'), 'a restricted place that is not in the group');
    check(placeDrawProblems(EUROPE, { ...DRAW, only: { flag: ['andorra'] } })[0].includes('cannot be asked'), 'a place kept to a form it cannot be asked in');
    check(placeDrawProblems(EUROPE, { ...DRAW, only: { tap: ['andorra'], name: ['andorra'] } }).some(m => m.includes('more than one form')), 'a place kept to two forms');
    check(placeDrawProblems(EUROPE, { ...DRAW, split: { flag: 10 } })[0].includes('only 9 places'), 'a split that asks more of a form than the group has places for');
    check(placeDrawProblems(EUROPE, { ...DRAW, split: { name: 12 }, only: { tap: MICRO } })[0].includes('only 9 places'), 'a split that asks more of a form than is left after the places kept to another');
    same(placeRefProblems(EUROPE, { gen: 'g-europe', n: 9, with: { form: 'flag' } }), [], 'a good reference has no problems');
    check(placeRefProblems(EUROPE, { gen: 'g-europe', n: 10, with: { form: 'flag' } })[0].includes('only 9'), 'a reference that asks more places than the form has');
    check(placeRefProblems(EUROPE, { gen: 'g-europe', n: 1, with: { form: 'dance' } })[0].includes('dance') && placeRefProblems(EUROPE, { gen: 'g-europe', n: 1, with: { place: 'narnia' } })[0].includes('narnia') && placeRefProblems(EUROPE, { gen: 'g-europe', n: 1, with: { size: 1 } })[0].includes('size'), 'an unknown form, place or key in "with"');
    check(placeRefProblems(EUROPE, { gen: 'g-europe', n: 1, with: { place: 'andorra', form: 'flag' } }).some(m => m.includes('cannot')), 'a place named in a form it cannot be asked in');
  }

  /* ---------- the record: a place's tries are its own, and the question is made again from the seed ---------- */
  {
    same(placeKey('g-isles', 'alder'), 'g-isles|alder', 'a place of a group is stored under the group and the place');
    same(placeKeyOf(atlas, 'g-isles|alder').place, 'alder', 'a stored key is read back to its place');
    same([placeKeyOf(atlas, 'w-tap'), placeKeyOf(atlas, 'g-isles'), placeKeyOf(atlas, 'g-isles|narnia') && 'x'], [null, null, 'x'], 'a key of an item or of the group alone is no place');
    check(definitionOf(atlas, 'g-isles|birch') === isles, 'the definition behind a place of the group is the group');
    const inst = instanceOf(atlas, { gen: 'g-isles', n: 1 }, placeSeedOf(isles, 'birch', 'border', 3));
    same([inst.key, inst.item.values.form, inst.item.facets.form], ['g-isles|birch', 'border', 'border'], 'a made instance is filed under its place and knows its form');
    same(defOfTry(atlas, 'g-isles|birch', { seed: inst.seed }).facets, { form: 'border' }, 'the question a try was made on carries the form it was asked in');
    // tries in the record: birch last met as a tap and missed; alder as a name and right
    const tryOf = (key, seed, ok, run) => recordTry('atlas', key, { run, lesson: 'l2', rev: 1, context: 'practice', sup: false, seed, a: {}, r: { where: ok ? 'ok' : 'no' }, ok });
    tryOf('g-isles|birch', placeSeedOf(isles, 'birch', 'flag', 1), true, 'r1');
    tryOf('g-isles|birch', placeSeedOf(isles, 'birch', 'tap', 2), false, 'r2');
    tryOf('g-isles|alder', placeSeedOf(isles, 'alder', 'name', 3), true, 'r2');
    same(placeMemory('atlas', isles), { alder: { form: 'name', ok: true, run: 'r2' }, birch: { form: 'tap', ok: false, run: 'r2' } }, 'the memory is each place\'s last try: its form, whether right, and when');
    same(placeOnlyOf(atlas, 'g-isles'), { tap: ['speck'] }, 'the places the checks keep to a form are read from the lessons');
    // a check draws, the same run drawing the same, filed under places, each seed once
    const draw = atlas.lessons.l2.check.items.draw, a = placeDrawInstances(atlas, 'atlas', draw, 'rx'), b = placeDrawInstances(atlas, 'atlas', draw, 'rx');
    same(a.map(i => [i.key, i.seed]), b.map(i => [i.key, i.seed]), 'the same run draws the same check');
    same([a.length, checkSize(atlas.lessons.l2.check)], [5, 5], 'the check is as long as its split');
    same(['tap', 'name', 'flag', 'border'].map(f => a.filter(i => i.item.values.form === f).length), [2, 1, 1, 1], 'the instances of a draw follow the split');
    check(a.every(i => i.key === placeKey('g-isles', i.item.values.place) && i.ref.gen === 'g-isles') && a.filter(i => i.item.values.form === 'tap').every(i => i.item.values.place !== 'birch'), 'each instance is filed under its place, and birch (last asked as a tap) is not drawn as one');
    same(checkStrands(atlas, atlas.lessons.l2), ['isles'], 'a draw from the group covers the group\'s strand');
    same(drawStrands(atlas, draw), ['isles'], 'the strand of a draw from the group');
    // a lesson's group: n different places for a reference, filed under their places
    const set = buildSet(atlas, 'atlas', atlas.lessons.l2, atlas.lessons.l2.flow[1].set, 'rs');
    same(set.length, 7, 'a group of places is as long as its references add up to');
    check(set.slice(0, 4).every(i => i.item.values.form === 'tap') && new Set(set.slice(0, 4).map(i => i.item.values.place)).size === 4 && set.slice(4).every(i => i.item.values.form === 'flag') && new Set(set.slice(4).map(i => i.key)).size === 3, 'the references ask four different places as taps and three different countries by their flags');
    check(set[0].key !== set[1].key && set.every(i => /^g-isles\|/.test(i.key)), 'every question of the group is filed under its place');
    // the review's question: the place missed last time, in another form
    let reviewed = true;
    for (let k = 0; k < 50; k++) { const r = placeReviewInstance(atlas, 'atlas', isles, `rr${k}`, 0); reviewed &&= r.key === 'g-isles|birch' && r.item.values.form !== 'tap'; }
    check(reviewed, 'the review asks birch, missed last time as a tap, in another form');
    const pick = strandInstance(atlas, 'atlas', 'isles', 'rr', 0, []);
    check(pick && pick.inst.key === 'g-isles|birch' && pick.repeat === false, 'a strand that is a place group is asked on a made question of the place missed');
    // a fresh seed for a place and a form is not one the place already has a try for, and still names the same place and form
    const first = placeFreshSeed('atlas', isles, { place: 'birch', form: 'tap' }, 'fx', 4);
    tryOf('g-isles|birch', first, true, 'r3');
    const second = placeFreshSeed('atlas', isles, { place: 'birch', form: 'tap' }, 'fx', 4);
    same([second !== first, placePairAt(isles, second)], [true, { place: 'birch', form: 'tap' }], 'a seed the place already has a try for is not used again, and names the same pair');
  }
  return { checks, failures };
}

/* ---------- run, then seed a fault into place-gen.js or place-draw.js and see it go red ---------- */
const real = await suite(await loadApp({ fixture: true }));
const FAULTS = [
  ['place-gen.js', 'a draw that ignores the split', s => s.replace('const chosen = Array.from({ length: draw.split[form] }', 'const chosen = Array.from({ length: Math.min(draw.split[form], 1) }')],
  ['place-gen.js', 'a draw that does not prefer places last asked in another form', s => s.replace("(memory[id] && memory[id].form === form ? 1 : 0)", '0')],
  ['place-gen.js', 'a draw that forgets the places kept to a form', s => s.replace('(only[f] || []).includes(place))', '(only[f] || []).includes(null))')],
  ['place-gen.js', 'a draw that spends a place twice in one check', s => s.replace('(used.has(id) ? 2 : 0) +', '')],
  ['place-gen.js', 'a seed that does not name its pair', s => s.replace('pairs[seed % pairs.length]', 'pairs[(seed + 1) % pairs.length]')],
  ['place-gen.js', 'a review that skips the place missed last time', s => s.replace('const key = id => memory[id] ? [memory[id].ok ? 1 : 0, memory[id].run] : [1, \'\'];', 'const key = id => memory[id] ? [1, memory[id].run] : [1, \'\'];')],
  ['place-gen.js', 'a review that asks the form the place was last asked in', s => s.replace('from = other.length ? other : forms', 'from = forms')],
  ['place-gen.js', 'a flag asked with the name beside it', s => s.replace("{ ...tap([flags(false)], where), figure: flags(true),", "{ ...tap([flags(true)], where), figure: flags(true),")],
  ['place-gen.js', 'a place given its area fed back without what touches it', s => s.replace("touches.length ? SAY.placeTouchesLine(joinWords(touches)) : SAY.placeTouchesNone,", "")],
  ['place-gen.js', "a lit place's name question that forgives another place's name", s => s.replace("reject: group.list.filter(p => p.id !== place)", "reject: [].filter(p => p.id !== place)")],
  ['place-gen.js', 'a capital named from its own dot, not its state', s => s.replace("lit: [entry.lights || place]", "lit: [place]")],
  ['place-gen.js', 'a dot with no outline refused as having no shape', s => s.replace('!on.rings.length && !on.dot', '!on.rings.length')],
  ['place-gen.js', "a place's own forms ignored", s => s.replace("(!entry.forms || entry.forms.includes(f)) && ", "")],
  ['place-gen.js', 'a place with both a reason and an area let through', s => s.replace("if(!p.reason === !p.area) problems.push", "if(false) problems.push")],
  ['place-gen.js', 'a flag item whose feedback leaves out the line that tells the flag', s => s.replace("reason: entry.flagLine ? [entry.flagLine, ...asList(base.reason)] : base.reason }", "reason: base.reason }")],
  ['place-gen.js', 'a flag asked of a place with none', s => s.replace("f === 'flag' ? !!entry.flag :", "f === 'flag' ? true :")],
  ['place-draw.js', 'a memory that reads the first try, not the last', s => s.replace('last = tries[tries.length - 1]', 'last = tries[0]')],
  ['place-gen.js', 'a lesson that forgets what the checks keep to one form', s => s.replace('mergeOnly(only, l.check.items.draw.only || {})', 'only')]
];
const faultFailures = [];
for (const [file, name, mutate] of FAULTS) {
  let changed = false;
  const app = await loadApp({ fixture: true, seed: (src, text) => { if (src !== `app/lessons/${file}`) return text; const next = mutate(text); changed = next !== text; return next; } }).catch(e => ({ crashed: e }));
  if (app.crashed) continue;
  const run = await suite(app).catch(e => ({ failures: [`crashed: ${e.message}`] }));
  if (!changed) faultFailures.push(`the seeded fault "${name}" does not apply to ${file}`);
  else if (!run.failures.length) faultFailures.push(`the seeded fault "${name}" did not turn any check red`);
}

const all = [...real.failures, ...faultFailures];
if (all.length) {
  console.error(`✗ ${all.length} of ${real.checks} place group checks failed:`);
  all.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${real.checks} place group checks passed, and each of ${FAULTS.length} seeded faults turned a check red`);
