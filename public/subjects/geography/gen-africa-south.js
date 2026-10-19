// Geography, Southern Africa: the two groups of places parts 25 and 25b ask about, made into questions from the map data `africa-south`. Thirteen places: the twelve
// countries (the Atlantic side, the Indian Ocean side, the four inland states, the southern tip with the two small countries by it, the two island countries) and the
// Kalahari. The map group (part 25) asks a name to tap, a lit place to name and, of a country that touches another, a neighbor and its water. The flag group (part 25b)
// asks a flag to tap, of the twelve countries. Both are made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. The Kalahari is not ground with neighbors,
// so it has its own `reason`. A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the borders and the water are the map data's (Natural Earth v5.1.2; Botswana and Zambia meet at a point on the
// Zambezi, which the map data counts as their border, and Namibia and Zimbabwe meet at the same point and have none); the flags, the date Eswatini took its name (2018) and the facts of each country are the CIA World Factbook's;
// the Kalahari's size and where it lies are the Encyclopaedia Britannica's. Flag descriptions checked 2026-10-18 against the Factbook's own text as mirrored in
// github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026).
// The world map of part 1b (gen-world.js) is narrower: its Southern Africa is Namibia, Botswana, South Africa, Lesotho and Eswatini, its East Africa takes in Mozambique, Zambia,
// Zimbabwe, Malawi and Madagascar (the United Nations' groups, which put Mauritius there too, though it is too small for the world map), and Angola is Central Africa. This lesson teaches the whole south as one, and each feedback says what the world map calls the place.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const ATLANTIC = 'the Atlantic side of Southern Africa, along the west coast', INDIAN = 'the Indian Ocean side of Southern Africa, along the east coast';
  const INLAND = 'the inland states of Southern Africa, between the two coasts', TIP = 'the southern tip of Africa', ISLES = 'the islands of the Indian Ocean';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const WORLD_EAST = 'East Africa on the world map', WORLD_CENTRAL = 'Central Africa on the world map';
  const COUNTRIES = [
    place('angola', 'Angola', '🇦🇴', `${ATLANTIC}, its northern end (${WORLD_CENTRAL})`,
      'Tell it from Namibia: Angola is the larger northern one on the Atlantic coast, above Namibia; Namibia is the southern one, above South Africa.',
      'Two flat bands, red over black, with a gold star and half a cogwheel crossed by a machete in the middle. Mozambique has a gold star and a tool too, but on green, black and yellow stripes.'),
    place('namibia', 'Namibia', '🇳🇦', `${ATLANTIC}, its southern end, above South Africa`,
      'Tell it from Angola: Namibia is the southern one on the Atlantic coast, above South Africa, with the Kalahari spreading into its east; Angola is the larger northern one.',
      'A wide red band slanting up from the lower left corner to the upper right, edged in white, with a blue triangle holding a yellow sun above it and a green triangle below it. South Africa has a green Y on its left side.'),
    place('mozambique', 'Mozambique', '🇲🇿', `${INDIAN} (${WORLD_EAST})`,
      'It is the long country along the Indian Ocean, across the Mozambique Channel from Madagascar, with Malawi, Zambia and Zimbabwe behind it.',
      'Three flat stripes, green, black and yellow, with thin white lines between them, and a red triangle on the left holding a yellow star with a book, a rifle and a hoe. Zimbabwe has seven stripes and a white triangle.'),
    place('zambia', 'Zambia', '🇿🇲', `${INLAND}, the large one in the north (${WORLD_EAST})`,
      'Tell it from Zimbabwe: Zambia is the large one in the north, touching Angola; Zimbabwe is the smaller one south of it, touching South Africa.',
      'Green, with an orange eagle flying over three upright stripes, red, black and orange, at the right end.'),
    place('zimbabwe', 'Zimbabwe', '🇿🇼', `${INLAND}, south of Zambia (${WORLD_EAST})`,
      'Tell it from Zambia: Zimbabwe is the smaller one south of Zambia, touching South Africa; Zambia is the large one in the north, touching Angola.',
      'Seven flat stripes, green, yellow, red, black, red, yellow and green, with a white triangle on the left holding a red star and a gold bird. Mozambique has three stripes and a red triangle.'),
    place('malawi', 'Malawi', '🇲🇼', `${INLAND}, the long thin one in the east, along Lake Malawi (${WORLD_EAST})`,
      'It is the long thin country along Lake Malawi, with Mozambique on its south and east and Tanzania at its top. Not Mali, in West Africa.',
      'Three flat stripes, black, red and green, with a red rising sun in the black stripe.'),
    place('botswana', 'Botswana', '🇧🇼', `${INLAND}, in the middle of the south, with most of the Kalahari`,
      'It is the inland country that holds most of the Kalahari, between Namibia and Zimbabwe, with South Africa below it.',
      'Light blue with a black stripe across the middle, edged in white, and nothing else on it.'),
    place('south-africa', 'South Africa', '🇿🇦', `${TIP}, below the inland states`,
      'It is the country at the southern tip of Africa, with the Atlantic on one side, the Indian Ocean on the other, and Lesotho inside it.',
      'Red over blue, split by a green band that forks into a Y lying on its side at the left, round a black triangle edged in yellow. Namibia has one slanting red band.'),
    place('lesotho', 'Lesotho', '🇱🇸', `${TIP}, a small kingdom completely surrounded by South Africa`,
      'Tell it from Eswatini: Lesotho is completely surrounded by South Africa; Eswatini is in the northeast, touching Mozambique too.',
      'Three flat bands, blue, white and green, with a black hat in the white. Eswatini has red in the middle and a shield.'),
    place('eswatini', 'Eswatini', '🇸🇿', `${TIP}, a small kingdom in the northeast of South Africa`,
      'Tell it from Lesotho: Eswatini is in the northeast, touching Mozambique as well as South Africa; Lesotho is completely surrounded by South Africa. Eswatini was called Swaziland until 2018.',
      'Blue, a wide red band edged in yellow, and blue, with a large black and white shield, two spears and a staff across the red. Lesotho has white and green and a black hat.', ['Eswatini', 'Swaziland']),
    place('madagascar', 'Madagascar', '🇲🇬', `${ISLES}, the huge island off the coast of Mozambique (${WORLD_EAST})`,
      'Tell it from Mauritius: Madagascar is the huge island, just off Mozambique; Mauritius is the tiny island far out to the east.',
      'A white upright band on the left, then red over green on the right. Mauritius has four flat stripes.'),
    place('mauritius', 'Mauritius', '🇲🇺', `${ISLES}, a tiny island far to the east of Madagascar (East Africa in the United Nations' groups; too small to show on the world map)`,
      'Tell it from Madagascar: Mauritius is the tiny island far out in the Indian Ocean, east of Madagascar. Not Mauritania, a country in northwest Africa.',
      'Four flat stripes, red, blue, yellow and green from the top. Madagascar has a white band on the left.')
  ];
  // the Kalahari is here to be tapped and named, and has no neighbors or coast to be asked
  const FEATURES = [
    { id: 'kalahari', name: 'The Kalahari', accept: ['The Kalahari', 'The Kalahari Desert'],
      reason: 'The Kalahari is a huge dry sandy plain in the middle of Southern Africa, mostly in Botswana and spreading into eastern Namibia and the north of South Africa.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-africa-south', strand: 'africa-south',
      places: { map: 'africa-south', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('angola-namibia', ['angola', 'namibia']), ...pairs('zambia-zimbabwe', ['zambia', 'zimbabwe']), ...pairs('lesotho-eswatini', ['lesotho', 'eswatini']),
          ...pairs('madagascar-mauritius', ['madagascar', 'mauritius']) },
        list: [...COUNTRIES.map(bare), ...FEATURES] } },
    { id: 'g-africa-south-flags', strand: 'africa-south-flags',
      places: { map: 'africa-south', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-zimbabwe-mozambique', ['zimbabwe', 'mozambique']), ...pairs('flags-south-africa-namibia', ['south-africa', 'namibia']),
          ...pairs('flags-blue-three', ['botswana', 'lesotho', 'eswatini']), ...pairs('flags-madagascar-mauritius', ['madagascar', 'mauritius']) },
        list: COUNTRIES.map(flagged) } }
  ]);

  // The worked cases of parts 25 and 25b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names
  // screens showed (or from part 1, where Southern Africa and the two oceans were placed), then what touches the place, then its water. Each ends on the place's own line.
  const STRAND = 'africa-south', FLAGS_STRAND = 'africa-south-flags', FLAGS = 'g-africa-south-flags';
  const lineOf = (id, key) => COUNTRIES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-botswana', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Botswana' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'africa-south', right: 'botswana' }],
      steps: [step('area', AREA, 'Botswana is one of the inland states, in the middle of Southern Africa, the bottom of Africa that part 1 placed. Start from the Kalahari, named on the second screen.'),
        step('touch', TOUCH, 'Namibia is on its west side, as the first screen showed, and South Africa is below it. Botswana is the country that holds most of the Kalahari.'),
        step('water', WATER, 'No sea or ocean touches it: Namibia and South Africa lie between it and the Atlantic and the Indian Ocean. Tap inside the country that holds the Kalahari.')],
      reason: lineOf('botswana', 'cue') },
    { id: 'w-name-south-africa', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'africa-south', lit: ['south-africa'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['South Africa'] }],
      steps: [step('area', AREA, 'The lit country is at the bottom of the map, the southern tip of Africa, below the inland states.'),
        step('touch', TOUCH, 'Namibia, Botswana, Zimbabwe and Mozambique are above it, Eswatini is by its northeast corner, and Lesotho sits right inside it, as the screens showed.'),
        step('water', WATER, 'It has the Atlantic on its west and the Indian Ocean on its east. The country at the tip with Lesotho inside it is South Africa.')],
      reason: lineOf('south-africa', 'cue') },
    { id: 'w-border-mozambique', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Mozambique?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'africa-south', of: 'mozambique' }],
      steps: [step('area', AREA, 'Mozambique is the long country on the Indian Ocean side, the east coast of Southern Africa.'),
        step('touch', TOUCH, 'South Africa is at its southern end: tap South Africa.'),
        step('water', WATER, 'Its whole east side is coast on the Indian Ocean: tap the Indian Ocean.')],
      reason: lineOf('mozambique', 'cue') },
    { id: 'w-flag-mozambique', strand: FLAGS_STRAND, facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['mozambique'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'africa-south', right: 'mozambique' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'Three flat stripes, green, black and yellow from the top, with a thin white line between them, and a red triangle on the left holding a yellow star with a book, a rifle and a hoe.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Zimbabwe has a triangle on the left too, but it is white, and its stripes are seven, with a red star and a bird. Mozambique has three stripes and a red triangle.'),
        step('find', 'Find the country.', 'Mozambique is the long country on the Indian Ocean side of Southern Africa, east of Zimbabwe and Zambia, across the Mozambique Channel from Madagascar. Tap it.')],
      reason: lineOf('mozambique', 'flagLine') }
  ]);
})();
