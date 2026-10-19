// Geography, South Asia: the two groups of places parts 26 and 26b ask about, made into questions from the map data `asia-south`. Eleven places: the eight countries
// (India, Pakistan, Afghanistan, Bangladesh, Nepal, Bhutan, Sri Lanka and the Maldives) and the Himalayas, the Indus and the Ganges. The map group (part 26) asks a name to
// tap, a lit place to name and, of a country that touches another, a neighbor and its water. The flag group (part 26b) asks a flag to tap, of the eight countries. Both are
// made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water (the
// map data's, Natural Earth v5.1.2, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. The Himalayas, the Indus and the Ganges
// are not ground with neighbors, so each has its own `reason`. A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it
// is mistaken for.
// Sources for what is not in the map data: the flag descriptions are those of the CIA World Factbook (Flag description, each country; checked 2026-10-18 against the Factbook's own text
// as mirrored in github.com/factbook/factbook.json, weekly copy of January 2026, because cia.gov retired the Factbook in February 2026). Afghanistan's is the three-band flag the Factbook
// still describes (it notes that the United States does not recognise the Taliban and still displays the flag of the 2004 constitution); it is the one the country's flag emoji draws, so
// no redrawing is needed. That the Taliban government has flown a plain white flag with black writing since August 2021 is not in the Factbook's text (unverified there); l26b says it
// as news, in one sentence, so a learner who sees a white flag is not misled.
// The Himalayas as the highest mountains in the world, and the courses of the Indus and the Ganges, are standard references (the Encyclopaedia Britannica, the Factbook's
// geography pages). The worked cases at the foot (parts 26 and 26b) use only what the names screens of the lessons showed, and part 1 (the Indian Ocean) and part 1c (South Asia).
(() => {
  const GEN_MAP = 'g-asia-south', GEN_FLAGS = 'g-asia-south-flags', MAP = 'asia-south';
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const SUBCONTINENT = 'the subcontinent, the great triangle of land south of the Himalayas that points down into the Indian Ocean';
  const NORTHWEST = 'the northwest of South Asia', RIM = 'the Himalayas, the mountain wall along the north of South Asia', ISLES = 'the islands of the Indian Ocean off South Asia';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const COUNTRIES = [
    place('india', 'India', '🇮🇳', `${SUBCONTINENT}, most of it`,
      'It is the huge country that fills most of South Asia, with the Arabian Sea on one side and the Bay of Bengal on the other; Pakistan, Nepal, Bhutan and Bangladesh all touch it, and Sri Lanka lies just off its southern tip.',
      "Three flat bands, orange (saffron), white and green, with a blue wheel in the white. Afghanistan's three bands stand upright."),
    place('pakistan', 'Pakistan', '🇵🇰', `${NORTHWEST}, along the Indus River and the Arabian Sea`,
      'Tell it from Afghanistan and Bangladesh: Pakistan is the large one on the west of India, with a coast on the Arabian Sea; Afghanistan is the inland one above it; Bangladesh is the small one on the far side of India.',
      "Dark green with an upright white band on the left, and a white crescent and star on the green. The Maldives' crescent is on a green rectangle in red."),
    place('afghanistan', 'Afghanistan', '🇦🇫', `${NORTHWEST}, the mountainous inland country above Pakistan`,
      'Tell it from Pakistan: Afghanistan is the inland one in the northwest, above Pakistan, with no coast; Pakistan is the one with the coast on the Arabian Sea.',
      "Three upright bands, black, red and green, with a white emblem in the red. India's three bands lie flat."),
    place('bangladesh', 'Bangladesh', '🇧🇩', 'the northeast of the subcontinent, at the head of the Bay of Bengal, where the Ganges ends',
      'Tell it from Pakistan: Bangladesh is the small one on the east, at the head of the Bay of Bengal, with India on almost every side; Pakistan is the large one on the west.',
      'Dark green with a red disc a little left of the middle. The Maldives is red with a green rectangle.'),
    place('nepal', 'Nepal', '🇳🇵', `${RIM}, its long western part`,
      'Tell it from Bhutan: Nepal is the longer one in the west, with a narrow strip of India between it and Bhutan; Bhutan is the small one in the east.',
      'The only flag that is not a rectangle: two red triangles, one above the other, with a blue edge, a white moon in the top one and a white sun in the bottom one.'),
    place('bhutan', 'Bhutan', '🇧🇹', `${RIM}, its small eastern part`,
      'Tell it from Nepal: Bhutan is the small one in the east, past a narrow strip of India; Nepal is the longer one in the west.',
      "Cut along the diagonal, yellow above on the left and orange below on the right, with a white dragon along the line. Sri Lanka's animal is a lion."),
    place('sri-lanka', 'Sri Lanka', '🇱🇰', 'an island in the Indian Ocean, just off the southern tip of India',
      'Tell it from the Maldives: Sri Lanka is the big island shaped like a teardrop, close to the southern tip of India; the Maldives is a chain of tiny islands far out to the southwest.',
      "Dark red with a gold lion holding a sword, a gold border, and a narrow panel on the left with a green band and an orange band. Bhutan's animal is a dragon."),
    place('maldives', 'Maldives', '🇲🇻', `${ISLES}, a chain of tiny islands southwest of India`,
      'Tell it from Sri Lanka: the Maldives is a chain of tiny islands, a dot on the map, far out to the southwest of India; Sri Lanka is the big island close to its southern tip.',
      "Red with a green rectangle in the middle holding a white upright crescent. Pakistan's crescent is on plain green, with a star.", ['Maldives'])
  ];
  // the water the question asks for is a sea or an ocean: the Himalayas, the Indus and the Ganges are here to be tapped and named, and have no neighbors or coast to be asked
  const FEATURES = [
    { id: 'himalayas', name: 'The Himalayas', accept: ['Himalayas', 'Himalaya'],
      reason: 'The Himalayas are the highest mountains in the world, a long wall along the north of South Asia that runs through Pakistan, India, Nepal and Bhutan and stands between South Asia and China.' },
    { id: 'indus-river', name: 'Indus River', accept: ['Indus River', 'Indus'],
      reason: 'The Indus comes down out of the Himalayas in the north, runs the length of Pakistan from north to south, and ends in the Arabian Sea. Tell it from the Ganges: the Indus is the river of the west; the Ganges is the river of the east.' },
    { id: 'ganges-river', name: 'Ganges River', accept: ['Ganges River', 'Ganges'],
      reason: 'The Ganges comes down out of the Himalayas and runs east across the north of India, then into Bangladesh, where it ends in the Bay of Bengal. Tell it from the Indus: the Ganges is the river of the east; the Indus is the river of the west.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: GEN_MAP, strand: 'asia-south',
      places: { map: MAP, forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('pakistan-afghanistan-bangladesh', ['pakistan', 'afghanistan', 'bangladesh']), ...pairs('nepal-bhutan', ['nepal', 'bhutan']),
          ...pairs('sri-lanka-maldives', ['sri-lanka', 'maldives']), ...pairs('indus-ganges', ['indus-river', 'ganges-river']) },
        list: [...COUNTRIES.map(bare), ...FEATURES] } },
    { id: GEN_FLAGS, strand: 'asia-south-flags',
      places: { map: MAP, forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-green-marks', ['pakistan', 'bangladesh', 'maldives']), ...pairs('flags-lion-dragon', ['sri-lanka', 'bhutan']) },
        list: COUNTRIES.map(flagged) } }
  ]);

  // The worked cases of parts 26 and 26b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names screens
  // showed (or from parts 1 and 1c, where the Indian Ocean and South Asia were placed), then what touches the place, then its water. Each ends on the place's own line.
  const STRAND = 'asia-south', FLAGS_STRAND = 'asia-south-flags';
  const lineOf = (id, key) => COUNTRIES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-nepal', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Nepal' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: MAP, right: 'nepal' }],
      steps: [step('area', AREA, 'Nepal is in South Asia, the part of Asia around India that part 1c placed, and in its Himalayas, the mountain wall along the north that the Himalayas screen named.'),
        step('touch', TOUCH, 'India lies to its south, east and west, and China is across the mountains to the north. Nepal is the long country between them, the western one of the two small mountain countries.'),
        step('water', WATER, 'No sea reaches it: India and China lie between it and every coast. Tap the long country in the Himalayas.')],
      reason: lineOf('nepal', 'cue') },
    { id: 'w-name-sri-lanka', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: MAP, lit: ['sri-lanka'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Sri Lanka'] }],
      steps: [step('area', AREA, 'The lit place is an island in the Indian Ocean, the ocean south of Asia that part 1 placed, off the southern tip of the subcontinent.'),
        step('touch', TOUCH, 'It touches no country. India is the land nearest it, across a narrow stretch of sea to the northwest.'),
        step('water', WATER, 'Water is on every side: the Indian Ocean, with the Bay of Bengal on its northeast and the Laccadive Sea on its west. The big island close to the tip of India is Sri Lanka; the Maldives are tiny dots farther out.')],
      reason: lineOf('sri-lanka', 'cue') },
    { id: 'w-landlocked-afghanistan', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Afghanistan?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: MAP, of: 'afghanistan' }],
      steps: [step('area', AREA, 'Afghanistan is in the northwest of South Asia, the mountainous country above Pakistan, as the northwest screen showed.'),
        step('touch', TOUCH, 'Pakistan is along its south and east side: tap Pakistan.'),
        step('water', WATER, 'No sea or ocean reaches it: Pakistan and Iran lie between it and the Arabian Sea. So it is landlocked: tap Landlocked.')],
      reason: lineOf('afghanistan', 'cue') },
    { id: 'w-flag-bangladesh', strand: FLAGS_STRAND, facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: GEN_FLAGS, places: ['bangladesh'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: MAP, right: 'bangladesh' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'No stripes: a plain field of dark green, with one red disc on it, a little to the left of the middle.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'The Maldives has the same two colors the other way round: red, with a green rectangle holding a white crescent. Bangladesh is green with a red disc, and no crescent.'),
        step('find', 'Find the country.', 'Bangladesh is the small country on the east of India, at the head of the Bay of Bengal. Tap it.')],
      reason: lineOf('bangladesh', 'flagLine') }
  ]);
})();
