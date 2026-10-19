// Geography, island Southeast Asia and the Pacific: the two groups of places parts 29 and 29b ask about, made into questions from the map data `asia-islands`. Twenty
// places: nine countries (Malaysia, Singapore, Brunei, Indonesia, the Philippines, Timor-Leste, Papua New Guinea, Australia, New Zealand) and the eleven Pacific island
// states (Fiji, the Solomon Islands, Vanuatu, Samoa, Tonga, Tuvalu, Nauru, Kiribati, the Marshall Islands, the Federated States of Micronesia, Palau), most of them drawn
// as dots. The map group (part 29) asks a name to tap, a lit place to name and, for the places that have a land neighbor on this map (Malaysia, Brunei, Indonesia,
// Timor-Leste and Papua New Guinea), a neighbor and its water; the islands with no land border get no neighbor from the map data, so the app leaves them out of that question
// (place-gen.js placeFormsOf) and their feedback says "touches no other place by land" and names their water from the map data. The flag group (part 29b) asks a flag to tap, of all
// twenty. Both are made from the one list below, so a place has one name, one set of spellings, one area and one cue. Flags: the CIA World Factbook's flag descriptions (checked 2026-10-18 against the Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026)).
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water
// (the map data's, never written by hand), then `cue`. Melanesia, Micronesia and Polynesia are the United Nations' (geoscheme) groupings of the Pacific island states.
// The worked cases of both lessons are at the foot of this file, in the three steps (area, touches, water), each using only what the names screens of part 29 showed.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const SEA = 'island Southeast Asia', MEL = 'Melanesia, the island states of the south-west Pacific east of Papua New Guinea', MIC = 'Micronesia, the island states of the north and central Pacific', POL = 'Polynesia, the island states of the south-central Pacific';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}) });
  const PLACES = [
    place('malaysia', 'Malaysia', '🇲🇾', `${SEA}, in two parts: the south end of the mainland strip and the north of the island of Borneo`,
      'Tell it from Indonesia and Brunei: Malaysia is in two parts, the strip at the south end of the mainland and the north of Borneo; Indonesia is the far larger chain of islands to its south; Brunei is the tiny country inside its part of Borneo.',
      'Fourteen flat stripes, red and white in turn, with a blue square in the upper left holding a yellow crescent and a yellow star. Indonesia and Singapore have only two bands.'),
    place('singapore', 'Singapore', '🇸🇬', `${SEA}, an island city at the southern tip of the mainland strip`,
      'Tell it from Malaysia: Singapore is the tiny island city at the very tip of the strip, just south of Malaysia.',
      'Two flat bands, red over white, with a white crescent and five white stars in the upper left. Indonesia has the same bands with nothing on them.'),
    place('brunei', 'Brunei', '🇧🇳', `${SEA}, a small country on the north coast of the island of Borneo`,
      "Tell it from Malaysia: Brunei is the small country on Borneo's north coast, with Malaysia round it on the land side.",
      'A yellow flag crossed by two diagonal bands, white above black, with a red emblem in the middle.'),
    place('indonesia', 'Indonesia', '🇮🇩', `${SEA}, the huge chain of islands across the equator, from Sumatra in the west to the west of New Guinea in the east`,
      'It is the huge chain of islands across the south of the region; it shares Borneo with Malaysia and Brunei, Timor with Timor-Leste and New Guinea with Papua New Guinea.',
      'Two flat bands, red over white, with nothing on them. Singapore has a crescent and stars on the red.'),
    place('philippines', 'Philippines', '🇵🇭', `${SEA}, the island country in the north-east, between the South China Sea and the Philippine Sea`,
      'It is the island country in the north-east of the region, north of Borneo and Indonesia, with no land neighbor.',
      'Two flat bands, blue over red, with a white triangle at the left holding a yellow sun and three yellow stars.',
      ['Philippines']),
    place('timor-leste', 'Timor-Leste', '🇹🇱', `${SEA}, the eastern half of the island of Timor, at the east end of the island chain, north of Australia`,
      'Tell it from Indonesia: Timor-Leste is the small eastern half of Timor; the western half of the island is Indonesia.',
      'A red flag with a yellow triangle at the left and, on it, a black triangle holding a white star.', ['Timor-Leste', 'East Timor']),
    place('papua-new-guinea', 'Papua New Guinea', '🇵🇬', 'the eastern half of the island of New Guinea and the islands off it, north of Australia (Melanesia too, on the world map)',
      'Tell it from Indonesia: Papua New Guinea is the eastern half of the island of New Guinea; the western half is Indonesia.',
      'Cut on the diagonal from the upper left: the upper right is red with a yellow bird of paradise, the lower left is black with five white stars.'),
    place('australia', 'Australia', '🇦🇺', 'a whole continent in the south of the region, below Indonesia and Timor-Leste',
      'Tell it from New Zealand: Australia is the huge country that fills a continent; New Zealand is the two long islands far to its south-east.',
      'Dark blue, with the Union Jack in the upper left, a large white star under it and five white stars on the right. New Zealand has four red stars and no large star.'),
    place('new-zealand', 'New Zealand', '🇳🇿', 'two long islands far to the south-east of Australia, across the Tasman Sea',
      'Tell it from Australia: New Zealand is the two long islands far to the south-east, across the Tasman Sea; Australia is the huge country that fills a continent.',
      'Dark blue, with the Union Jack in the upper left and four red stars edged in white on the right. Australia has white stars and a large star under the Union Jack.'),
    place('solomon-islands', 'Solomon Islands', '🇸🇧', `${MEL}, the nearest to Papua New Guinea`,
      'Tell it from Vanuatu and Fiji: the Solomon Islands are the nearest to Papua New Guinea, in the north-west of the three; Vanuatu is the middle one; Fiji is the farthest east.',
      'A thin yellow diagonal from the lower left to the upper right: a blue triangle above it with five white stars, a green triangle below.', ['Solomon Islands', 'Solomons']),
    place('vanuatu', 'Vanuatu', '🇻🇺', `${MEL}, the middle one of three`,
      'Tell it from the Solomon Islands and Fiji: Vanuatu is the middle one of the three, south-east of the Solomon Islands and west of Fiji.',
      "Two flat bands, red over green, with a black triangle at the left inside a yellow sideways Y, holding a yellow boar's tusk and two crossed fern leaves."),
    place('fiji', 'Fiji', '🇫🇯', `${MEL}, the farthest east of the three`,
      'Tell it from Vanuatu: Fiji is the farthest east of the three, the one nearest Samoa and Tonga; Vanuatu is the middle one.',
      "Light blue, with the Union Jack in the upper left and a shield on the right. Tuvalu's light blue has nine yellow stars there."),
    place('palau', 'Palau', '🇵🇼', `${MIC}, the westernmost, nearest the Philippines`,
      'Tell it from the Federated States of Micronesia: Palau is the westernmost, nearest the Philippines, and the Federated States of Micronesia is the next one east.',
      'Light blue, with a yellow disk a little to the left of the middle. The Federated States of Micronesia has four white stars.'),
    place('federated-states-of-micronesia', 'Federated States of Micronesia', '🇫🇲', `${MIC}, the one east of Palau`,
      'Tell it from Micronesia, the region: the Federated States of Micronesia is one country, east of Palau and west of the Marshall Islands.',
      'Light blue, with four white stars in a diamond in the middle. Palau has a yellow disk.', ['Federated States of Micronesia', 'Micronesia']),
    place('marshall-islands', 'Marshall Islands', '🇲🇭', `${MIC}, east of the Federated States of Micronesia`,
      'Tell it from Nauru: the Marshall Islands are the east end of the northern three; Nauru is the single tiny island just south of them.',
      'Blue, with two stripes widening from the lower left, orange above white, and a white star with long rays in the upper left.'),
    place('nauru', 'Nauru', '🇳🇷', `${MIC}, one tiny island just south of the Marshall Islands`,
      'Tell it from the Marshall Islands: Nauru is the single tiny island just south of them, near the equator.',
      'Dark blue, with a thin gold stripe across the middle and a white star under it at the left.'),
    place('kiribati', 'Kiribati', '🇰🇮', `${MIC}, a scatter of low atolls along the equator, to the south-east of the Marshall Islands`,
      'It is the scatter of atolls along the equator, south-east of the Marshall Islands and north of Tuvalu; the map marks it with a dot.',
      'Red above, with a yellow bird flying over a yellow rising sun; blue below, with three wavy white stripes.'),
    place('tuvalu', 'Tuvalu', '🇹🇻', `${POL}, the tiny one farthest north`,
      'Tell it from Samoa and Tonga: Tuvalu is the tiny one farthest north, north of Fiji; Samoa is east of Fiji; Tonga is south of Samoa.',
      'Light blue, with the Union Jack in the upper left and nine yellow stars on the right. Fiji has a shield there.'),
    place('samoa', 'Samoa', '🇼🇸', `${POL}, east of Fiji`,
      'Tell it from Tonga: Samoa is the northern one, east of Fiji; Tonga is south of it.',
      'Red, with a blue square in the upper left holding five white stars. Tonga has a white square with a red cross.'),
    place('tonga', 'Tonga', '🇹🇴', `${POL}, the southernmost, south-east of Fiji`,
      'Tell it from Samoa: Tonga is the southern one, south-east of Fiji; Samoa is north of it.',
      'Red, with a white square in the upper left holding a red cross. Samoa has a blue square with white stars.')
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-asia-islands', strand: 'asia-islands',
      places: { map: 'asia-islands', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('malaysia-indonesia-brunei', ['malaysia', 'indonesia', 'brunei', 'singapore']), ...pairs('timor-leste-indonesia', ['timor-leste']), ...pairs('new-guinea-two', ['papua-new-guinea']),
          ...pairs('australia-new-zealand', ['australia', 'new-zealand']), ...pairs('melanesia-three', ['solomon-islands', 'vanuatu', 'fiji']),
          ...pairs('micronesia-five', ['palau', 'federated-states-of-micronesia', 'marshall-islands', 'nauru', 'kiribati']), ...pairs('polynesia-three', ['tuvalu', 'samoa', 'tonga']) },
        list: PLACES.map(bare) } },
    { id: 'g-asia-islands-flags', strand: 'asia-islands-flags',
      places: { map: 'asia-islands', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-indonesia-singapore', ['indonesia', 'singapore']), ...pairs('flags-australia-new-zealand', ['australia', 'new-zealand']),
          ...pairs('flags-light-blue-union-jack', ['fiji', 'tuvalu']), ...pairs('flags-samoa-tonga', ['samoa', 'tonga']), ...pairs('flags-palau-micronesia', ['palau', 'federated-states-of-micronesia']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // The worked cases, each in the three steps of the way of thinking (the same shape as items-worked-us.js), shown done before the learner's first try. Each uses only
  // what the names screens of part 29 showed: the areas, the island or group beside the place, the water named on the maps.
  const MAP = FC.get('geography').gens['g-asia-islands'].places, FLAGS = FC.get('geography').gens['g-asia-islands-flags'].places;
  const lineOf = (group, id, key) => group.list.find(p => p.id === id)[key];
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const step = (id, does, working) => ({ id, does, working });
  FC.items('geography', [
    { id: 'w-tap-vanuatu', strand: 'asia-islands', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Vanuatu' }],
      asks: [{ id: 'where', kind: 'place', prompt: MAP.words.tap, map: MAP.map, right: 'vanuatu' }], reason: lineOf(MAP, 'vanuatu', 'cue'),
      steps: [step('area', AREA, 'Vanuatu is one of the Pacific island states in Melanesia, the south-west Pacific. Start from Papua New Guinea, which the second map named, and look east.'),
        step('touch', TOUCH, 'No country touches an island state by land. The islands beside it pin the spot: the Solomon Islands are the nearest to Papua New Guinea, Vanuatu is the middle one of the three, south-east of them, and Fiji is the farthest east.'),
        step('water', WATER, 'Its water is the Coral Sea on the west and the Pacific Ocean beyond it. The dot in the middle of the three is Vanuatu: tap it.')] },
    { id: 'w-name-brunei', strand: 'asia-islands', facets: { form: 'name' }, blocks: [{ kind: 'prose', text: MAP.words.name }, { kind: 'map', region: MAP.map, lit: ['brunei'] }],
      asks: [{ id: 'name', kind: 'text', prompt: MAP.words.name, accept: MAP.list.find(p => p.id === 'brunei').accept }], reason: lineOf(MAP, 'brunei', 'cue'),
      steps: [step('area', AREA, 'The lit place is a small country on the coast of the big island of Borneo, so it is in island Southeast Asia, not one of the Pacific dots.'),
        step('touch', TOUCH, 'Malaysia wraps round it on the land side, and Indonesia holds the south of the island. The small country with only Malaysia as a neighbor, on the north coast of Borneo, is Brunei.'),
        step('water', WATER, 'Its coast is on the South China Sea, the sea the first map named on the north side of Borneo. The country on that coast is Brunei.')] },
    { id: 'w-border-timor-leste', strand: 'asia-islands', facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Timor-Leste?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: MAP.words.border, map: MAP.map, of: 'timor-leste' }], reason: lineOf(MAP, 'timor-leste', 'cue'),
      steps: [step('area', AREA, 'Timor-Leste is the eastern half of the island of Timor, at the east end of island Southeast Asia, north of Australia.'),
        step('touch', TOUCH, 'Only one country shares its island: the western half of Timor belongs to Indonesia. Tap Indonesia.'),
        step('water', WATER, 'It has a coast on the Banda Sea to the north and on the Timor Sea to the south: tap the Timor Sea.')] },
    { id: 'w-flag-new-zealand', strand: 'asia-islands-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: 'g-asia-islands-flags', places: ['new-zealand'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAGS.words.flag, map: FLAGS.map, right: 'new-zealand' }], reason: lineOf(FLAGS, 'new-zealand', 'flagLine'),
      steps: [step('read', 'Read the flag: the layout, the colors in order, the mark.', 'Dark blue, with the Union Jack in the upper left and four red stars edged in white on the right.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Australia is also dark blue with the Union Jack, but its stars are white and it has one large star under the Union Jack. Red stars mean New Zealand.'),
        step('find', 'Find the country.', 'New Zealand is the two long islands far to the south-east of Australia, across the Tasman Sea. Tap them.')] }
  ]);
})();
