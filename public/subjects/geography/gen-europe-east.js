// Geography, central and eastern Europe: the two groups of places parts 18 and 18b ask about, made into questions from the map data `europe-east`, and the three
// worked cases and the worked flag those parts open with. Ten places: the nine countries from Poland to Russia and the Black Sea. The map group (part 18) asks a name
// to tap, a lit place to name and, of a country, a neighbor and its water. The flag group (part 18b) asks a flag to tap, of the nine countries. Both are made from the
// one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. The Black Sea has no neighbors on land,
// so it has its own `reason`. A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the groupings (central, southeastern and eastern Europe) are the CIA World Factbook's "Location" lines for these countries (Poland, Czechia, Slovakia and
// Hungary: Central Europe; Romania: Southeastern Europe; Moldova, Belarus and Ukraine: Eastern Europe; Russia: North Asia, "extending from Eastern Europe (the portion west
// of the Urals)"). The world map taught in lesson 1b puts all nine in the United Nations' Eastern Europe, so lesson 18 says it splits that region in three. Neighbors, water and
// which countries lie on the Black Sea are the map data's (Natural Earth, public domain).
// Flags: each `flagLine` was checked on 2026-10-18 against the Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook page taken
// 2026-01-02 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page.
// Russia's Arctic and Pacific coasts are off this map: they are in its water (the map data lists them, with no shape to tap), so a question on its water can be answered
// on the Black Sea, the Baltic, the Azov or the Caspian. Its land neighbors off the map (Norway, China, Mongolia, North Korea) are in its neighbors too, named in the answer and never tapped.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const CENTRAL = 'central Europe', SOUTH_EAST = 'the south-east of Europe', EAST = 'the east of Europe';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}) });
  const PLACES = [
    place('poland', 'Poland', '🇵🇱', `${CENTRAL}, the big country in the north, between Germany and Belarus`,
      'It is the biggest of the central four, the one above Czechia and Slovakia, with a coast on the Baltic Sea.',
      'Two flat stripes, white on top and red below. Czechia has the same two stripes with a blue triangle on the left.'),
    place('czechia', 'Czechia', '🇨🇿', `${CENTRAL}, the western one of the two countries south of Poland`,
      'Tell it from Slovakia: Czechia is the western one, next to Germany and Austria; Slovakia is the smaller one in the east.',
      'Two flat stripes, white on top and red below, with a blue triangle on the left pointing into them. Poland has the same two stripes and no triangle.',
      ['Czechia', 'Czech Republic', 'Czech']),
    place('slovakia', 'Slovakia', '🇸🇰', `${CENTRAL}, the eastern one of the two countries south of Poland`,
      'Tell it from Czechia: Slovakia is the smaller one in the east, with Ukraine at its far end; Czechia is the western one, next to Germany.',
      'Three flat stripes, white, blue and red, with a red shield on the left that holds a white double cross. Russia has the same three stripes and no shield.',
      ['Slovakia', 'Slovak Republic']),
    place('hungary', 'Hungary', '🇭🇺', `${CENTRAL}, the plain south of Slovakia, inside the curve of the Carpathians`,
      'It is the one south of Slovakia and the only one of the central four that touches Romania, with Austria on its west.',
      'Three flat stripes, red, white and green, with the red on top.'),
    place('romania', 'Romania', '🇷🇴', `${SOUTH_EAST}, curving round the Carpathians down to the Black Sea`,
      'Tell it from Moldova: Romania is the large country with the Black Sea coast; Moldova is the small landlocked one to its east.',
      "Three upright stripes, blue, yellow and red, with the blue on the left and nothing in the yellow. Moldova's has an eagle there."),
    place('moldova', 'Moldova', '🇲🇩', `${EAST}, a small country between Romania and Ukraine`,
      'Tell it from Romania: Moldova is the small landlocked one between Romania and Ukraine; Romania is the large one with the Black Sea coast.',
      'Three upright stripes, blue, yellow and red, like Romania\'s, with an eagle on a shield in the middle of the yellow.'),
    place('belarus', 'Belarus', '🇧🇾', `${EAST}, the flat inland country between Poland and Russia`,
      'Tell it from Ukraine: Belarus is the landlocked one in the north, between Poland and Russia; Ukraine is the bigger one south of it, on the Black Sea.',
      'Two flat stripes, red on top and twice as tall as the green below, with a white band down the left side that holds a red pattern.'),
    place('ukraine', 'Ukraine', '🇺🇦', `${EAST}, the biggest country wholly in Europe, on the Black Sea`,
      'Tell it from Belarus: Ukraine is the big one in the south, on the Black Sea; Belarus is the landlocked one north of it.',
      'Two flat stripes, blue on top and yellow below.'),
    place('russia', 'Russia', '🇷🇺', `${EAST}, the biggest country of all, which goes on far across Asia`,
      'It is the huge one across the whole east of the map. Most of its coast, on the Arctic Ocean and the Pacific, is off this map.',
      'Three flat stripes, white, blue and red, with nothing on them. Slovakia has the same three stripes and a shield on the left.',
      ['Russia', 'Russian Federation']),
    // the sea has no neighbors on land, so it gives its own line: which countries lie on it is the map data's (their `water` holds black-sea)
    { id: 'black-sea', name: 'Black Sea', accept: ['Black Sea'],
      reason: 'The Black Sea is the sea at the bottom of the map: Romania and Bulgaria are on its west shore, Ukraine on the north, Russia and Georgia on the east and Türkiye on the south.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-europe-east', strand: 'europe-east',
      places: { map: 'europe-east', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('czechia-slovakia', ['czechia', 'slovakia']), ...pairs('romania-moldova', ['romania', 'moldova']), ...pairs('belarus-ukraine', ['belarus', 'ukraine']) },
        list: PLACES.map(bare) } },
    { id: 'g-europe-east-flags', strand: 'europe-east-flags',
      places: { map: 'europe-east', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-poland-czechia', ['poland', 'czechia']), ...pairs('flags-russia-slovakia', ['russia', 'slovakia']), ...pairs('flags-romania-moldova', ['romania', 'moldova']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // The worked cases, each shown done before the learner's first try, in the steps of the way of thinking (the area, what touches it, the water) and using only what
  // the names screens of part 18 showed; the learner is anchored on places already placed (the Black Sea, Ukraine; Austria from the map of western Europe). Same shape as items-worked-us.js.
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const GEN = 'g-europe-east', STRAND = 'europe-east', FLAGS = 'g-europe-east-flags';
  FC.items('geography', [
    { id: 'w-tap-moldova', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Moldova' }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(GEN).words.tap, map: groupOf(GEN).map, right: 'moldova' }],
      steps: [
        step('area', AREA, 'Moldova is in the east of Europe, a small country close to the Black Sea, the sea named at the bottom of the second screen, though without a coast on it.'),
        step('touch', TOUCH, 'Ukraine, the big country on the north shore of the Black Sea, goes round its north, east and south; Romania is on its west.'),
        step('water', WATER, 'No sea touches it: Ukraine is between it and the Black Sea. Tap the small country between Romania and Ukraine.')],
      reason: lineOf(GEN, 'moldova') },
    { id: 'w-name-hungary', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: groupOf(GEN).words.name }, { kind: 'map', region: groupOf(GEN).map, lit: ['hungary'] }],
      asks: [{ id: 'name', kind: 'text', prompt: groupOf(GEN).words.name, accept: groupOf(GEN).list.find(p => p.id === 'hungary').accept }],
      steps: [
        step('area', AREA, 'The lit country is in central Europe, in the plain inside the curve of the Carpathians, south of Slovakia.'),
        step('touch', TOUCH, 'Austria, placed on the map of western Europe, is on its west side; Slovakia is above it and Romania to its east, as the screens showed.'),
        step('water', WATER, 'No sea touches it. The landlocked country south of Slovakia, with Austria on its west, is Hungary.')],
      reason: lineOf(GEN, 'hungary') },
    { id: 'w-border-moldova', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Moldova?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: groupOf(GEN).words.border, map: groupOf(GEN).map, of: 'moldova' }],
      steps: [
        step('area', AREA, 'Moldova is in the east of Europe, a small country between Romania and Ukraine.'),
        step('touch', TOUCH, 'Romania is along its west side: tap Romania.'),
        step('water', WATER, 'Ukraine lies between Moldova and the Black Sea, so no sea reaches it. It is landlocked: tap Landlocked.')],
      reason: lineOf(GEN, 'moldova') },
    { id: 'w-flag-moldova', strand: 'europe-east-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['moldova'] }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(FLAGS).words.flag, map: groupOf(FLAGS).map, right: 'moldova' }],
      steps: [
        step('read', 'Read the flag: how many stripes, which way they run, which colors.', 'Three stripes, standing upright, blue, yellow and red from left to right, with an eagle on a shield in the middle of the yellow.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Romania has the same three upright stripes and colors, with nothing in the yellow. The eagle makes this one Moldova\'s.'),
        step('find', 'Find the country.', 'Moldova is the small landlocked country between Romania and Ukraine, in the east of Europe. Tap it.')],
      reason: groupOf(FLAGS).list.find(p => p.id === 'moldova').flagLine }
  ]);
})();
