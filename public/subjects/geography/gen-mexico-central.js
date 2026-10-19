// Geography, Mexico and Central America: the two groups of places parts 13 and 13b ask about, made into questions from the map data `mexico-central`. Eleven places:
// Mexico, the seven countries of the isthmus (Guatemala, Belize, El Salvador, Honduras, Nicaragua, Costa Rica, Panama), the Panama Canal and the two seas that
// border them (the Gulf of Mexico and the Caribbean Sea). The map group (part 13) asks a name to tap, a lit place to name and, of the countries, a neighbor and
// its water. The flag group (part 13b) asks a flag to tap, of the eight countries. Both are made from the one list of places below, so a place has one name, one
// set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A wrong tap on a place that is
// often mixed up carries its slip (the subject's `lists.slip`). A flag question opens its feedback with the place's `flagLine`.
// Sources: neighbors and water are the map data's (Natural Earth 5.1.2). The flag lines are the CIA World Factbook's flag descriptions.
// Flag lines (every `flagLine` below): checked on 2026-10-18 against the CIA World Factbook, "Government > Flag", country by country. cia.gov's own pages now redirect to the
// Factbook's farewell story, so the text was read from the factbook/factbook.json mirror (github.com/factbook/factbook.json, one file per country, the CIA's own text); the code of each is in the comment above its place.
// Grouping: the world map (the parts lesson) puts Mexico in Central America, from Mexico down to Panama; these lessons teach Mexico on its own and call the seven countries below it Central America, the isthmus, and say so on the first screen.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const NORTH = 'the northern isthmus, the part of Central America just south of Mexico', SOUTH = 'the southern isthmus, the part of Central America toward South America';
  const place = (id, name, flag, area, cue, flagLine, extra = {}) => ({ id, name, flag, accept: [name], ...(area ? { area } : {}), ...(cue ? { cue } : {}), ...(flagLine ? { flagLine } : {}), ...extra });
  const water = (id, name, reason, accept = [name]) => ({ id, name, accept, reason });
  const PLACES = [
    // flag: CIA World Factbook, Mexico (mx), Flag
    place('mexico', 'Mexico', '🇲🇽', 'North America, the big country south of the United States, where the continent narrows', 'It is the one big country: everything else here is small beside it, and it is the only one that touches the United States.',
      'Three upright stripes, green, white and red, with an eagle holding a snake, perched on a cactus, on the white one.'),
    // flag: CIA World Factbook, Guatemala (gt), Flag
    place('guatemala', 'Guatemala', '🇬🇹', NORTH,
      'Tell it from Belize and El Salvador: Guatemala is the big one that touches Mexico; Belize is the small one east of it and El Salvador the tiny one on the Pacific.',
      'Three upright stripes, light blue, white and light blue, with a coat of arms (a quetzal, a scroll, crossed rifles and swords, in a wreath) on the white one.'),
    // flag: CIA World Factbook, Belize (bh), Flag
    place('belize', 'Belize', '🇧🇿', NORTH, 'Tell it from Guatemala: Belize is the small one on the Caribbean, east of Guatemala, with no Pacific coast.',
      'Royal blue, with a thin red stripe at the top and the bottom and a white disk in the middle holding a coat of arms ringed by a green wreath.'),
    // flag: CIA World Factbook, El Salvador (es), Flag
    place('el-salvador', 'El Salvador', '🇸🇻', NORTH, 'Tell it from Honduras: El Salvador is the tiny one on the Pacific, with no Caribbean coast; Honduras is the larger one east of it, with coasts on both seas.',
      'Three flat stripes, blue, white and blue, with a round emblem on the white one, ringed all the way round by words. Nicaragua\'s emblem is a triangle with its words on arcs above and below; Honduras has stars.'),
    // flag: CIA World Factbook, Honduras (ho), Flag
    place('honduras', 'Honduras', '🇭🇳', NORTH, 'Tell it from El Salvador and Nicaragua: Honduras is the larger one east of Guatemala and El Salvador, with a long Caribbean coast and a short Pacific one.',
      'Three flat stripes, blue, white and blue, with five blue stars arranged in an X on the white one. El Salvador and Nicaragua have an emblem instead.'),
    // flag: CIA World Factbook, Nicaragua (nu), Flag
    place('nicaragua', 'Nicaragua', '🇳🇮', SOUTH, 'Tell it from Honduras and Costa Rica: Nicaragua is the biggest country of the isthmus, in the middle, with Honduras on its north and Costa Rica on its south.',
      'Three flat stripes, blue, white and blue, with a triangle emblem on the white one, its words on an arc above it and an arc below it. El Salvador\'s emblem is round, ringed all the way round by words; Honduras has stars.'),
    // flag: CIA World Factbook, Costa Rica (cs), Flag
    place('costa-rica', 'Costa Rica', '🇨🇷', SOUTH, 'Tell it from Nicaragua and Panama: Costa Rica is the narrow one in the middle of the three, between Nicaragua and Panama.',
      'Five flat stripes, blue, white, a wide red one, white and blue, with a white oval holding the coat of arms toward the left of the red one.'),
    // flag: CIA World Factbook, Panama (pm), Flag
    place('panama', 'Panama', '🇵🇦', `${SOUTH}, its last country before South America`, 'Tell it from Costa Rica: Panama is the last country of the isthmus, curving east, with Colombia, in South America, on its far side.',
      'Four squares: white with a blue star at the top left, red at the top right, blue at the bottom left, white with a red star at the bottom right.'),
    water('panama-canal', 'Panama Canal', 'The Panama Canal cuts across Panama where the isthmus is narrowest and joins the Caribbean Sea to the Pacific, so ships need not sail round South America.', ['Panama Canal']),
    water('caribbean-sea', 'Caribbean Sea', 'The Caribbean Sea is the sea east of Central America and south of Cuba: it touches the east coasts of Mexico (its far south-east), Belize, Guatemala, Honduras, Nicaragua, Costa Rica and Panama.', ['Caribbean Sea', 'Caribbean']),
    water('gulf-of-mexico', 'Gulf of Mexico', 'The Gulf of Mexico is the sea on Mexico\'s east side, against the United States, north of the bulge of Mexico\'s south-east, with Mexico on its west and south and Cuba at its mouth.', ['Gulf of Mexico', 'Gulf of America'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-mexico-central', strand: 'mexico-central',
      places: { map: 'mexico-central', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('northern-isthmus', ['guatemala', 'belize', 'el-salvador', 'honduras']), ...pairs('southern-isthmus', ['nicaragua', 'costa-rica', 'panama']),
          ...pairs('gulf-caribbean', ['gulf-of-mexico', 'caribbean-sea']) },
        list: PLACES.map(bare) } },
    { id: 'g-mexico-central-flags', strand: 'mexico-central-flags',
      places: { map: 'mexico-central', forms: ['flag'], words: FLAG_WORDS,
        slips: pairs('flags-blue-white-blue', ['honduras', 'el-salvador', 'nicaragua', 'guatemala']),
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);
})();

// The questions parts 13 and 13b open with, each shown done before the learner's first try, in the steps of the way of thinking (items-worked-us.js has the
// same shapes for the other regions): the bigger area first, then what touches the place, then its water; each step uses only what the names screens showed
// and places learned before (Mexico and the Gulf of Mexico from the map of the United States, the Pacific from the world).
(() => {
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places, GEN = 'g-mexico-central', FLAGS = 'g-mexico-central-flags';
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const tap = (id, right, name, steps) => ({ id, strand: 'mexico-central', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: name }],
    asks: [{ id: 'where', kind: 'place', prompt: groupOf(GEN).words.tap, map: groupOf(GEN).map, right }], steps, reason: lineOf(GEN, right) });
  const named = (id, lit, accept, steps) => ({ id, strand: 'mexico-central', facets: { form: 'name' },
    blocks: [{ kind: 'prose', text: groupOf(GEN).words.name }, { kind: 'map', region: groupOf(GEN).map, lit: [lit] }],
    asks: [{ id: 'name', kind: 'text', prompt: groupOf(GEN).words.name, accept }], steps, reason: lineOf(GEN, lit) });
  const border = (id, of, name, steps) => ({ id, strand: 'mexico-central', facets: { form: 'border' }, blocks: [{ kind: 'prose', text: `What borders ${name}?` }],
    asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: groupOf(GEN).words.border, map: groupOf(GEN).map, of }], steps, reason: lineOf(GEN, of) });
  const flag = (id, right, steps) => ({ id, strand: 'mexico-central-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: [right] }],
    asks: [{ id: 'where', kind: 'place', prompt: groupOf(FLAGS).words.flag, map: groupOf(FLAGS).map, right }], steps, reason: groupOf(FLAGS).list.find(p => p.id === right).flagLine });

  FC.items('geography', [
    tap('w-tap-guatemala', 'guatemala', 'Guatemala', [
      step('area', AREA, 'Guatemala is the first country of the isthmus, the narrow land south of Mexico. Start from Mexico, the big country named on the first screen.'),
      step('touch', TOUCH, 'Mexico is on its north and west. Belize and Honduras are on its east side, and El Salvador is on its south.'),
      step('water', WATER, 'It has a long coast on the Pacific, on its southwest side, and a short one on the Caribbean Sea, on its east. Tap inside the country.')]),
    named('w-name-costa-rica', 'costa-rica', ['Costa Rica'], [
      step('area', AREA, 'The lit country is in the southern isthmus, toward South America.'),
      step('touch', TOUCH, 'Panama is the last country of the isthmus, to the southeast. The lit one is the narrow country just north of Panama, with big Nicaragua above it.'),
      step('water', WATER, 'It has a coast on the Caribbean Sea and a coast on the Pacific. The narrow country between Nicaragua and Panama is Costa Rica.')]),
    border('w-border-el-salvador', 'el-salvador', 'El Salvador', [
      step('area', AREA, 'El Salvador is in the northern isthmus, the tiny country south of Guatemala.'),
      step('touch', TOUCH, 'Guatemala is on its west side: tap Guatemala.'),
      step('water', WATER, 'Its whole coast is on the Pacific, and the Caribbean Sea does not reach it: tap the Pacific Ocean.')]),
    flag('w-flag-honduras', 'honduras', [
      step('read', 'Read the flag: how many stripes, which way they run, which colors.', 'Three stripes, lying flat, blue, white and blue from the top down.'),
      step('tell', 'Tell it from the flag it is mistaken for.', 'El Salvador and Nicaragua have the same three flat stripes, with an emblem on the white one. This flag has five blue stars arranged in an X instead.'),
      step('find', 'Find the country.', 'Honduras is in the northern isthmus, east of Guatemala and El Salvador, with coasts on the Caribbean Sea and the Pacific. Tap it.')])
  ]);
})();
