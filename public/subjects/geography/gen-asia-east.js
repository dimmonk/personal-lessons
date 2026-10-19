// Geography, East Asia and mainland Southeast Asia: the two groups of places parts 28 and 28b ask about, made into questions from the map data `asia-east`, and the three
// worked cases and the worked flag those parts open with. Thirteen places: the eleven countries (China, Mongolia, North Korea, South Korea, Japan, Taiwan, Myanmar, Thailand, Laos,
// Cambodia, Vietnam) and the two rivers, the Yangtze and the Mekong. The map group (part 28) asks a name to tap, a lit place to name and, of a country with neighbors, a neighbor and its
// water. The flag group (part 28b) asks a flag to tap, of the eleven countries. Both are made from the one list of places below, so a place has one name, one set of spellings, one area
// and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water (the map data's,
// never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A river has no neighbors on the map, so it has its own `reason`. A flag question
// opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: neighbors and water are the map data's (Natural Earth v5.1.2, public domain); the areas follow the CIA World Factbook's "Location" lines and the United Nations' groups of Asia
// (East Asia, Southeast Asia, as part 1c shows them); the flags' stripes, colors and emblems are the Factbook's "Flag description" lines (checked 2026-10-18 against the Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026)). The two rivers' courses are the Factbook's
// "Geography note" and "Major rivers" entries for China, Laos, Cambodia and Vietnam, checked against the lines the map draws.
// Taiwan is named as the map data names it. Its status is disputed (Taiwan's government runs it as a separate state, and China's government claims it), and its cue says so in those
// words and no more. Japan and Taiwan are islands with no neighbor on land, and Mongolia and Laos have no coast: the first two are never asked for a neighbor, and the last two are
// asked for one and answer Landlocked. The rivers are asked a name to tap and a lit name only.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const KOREA = 'the Korean peninsula, the peninsula that hangs down from China between the Yellow Sea and the Sea of Japan';
  const MAINLAND = 'mainland Southeast Asia';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const river = (id, name, reason, accept) => ({ id, name, accept, reason });
  const PLACES = [
    place('china', 'China', '🇨🇳', 'East Asia, the huge country that fills most of it, on the Pacific side',
      'It is the giant of the region: Mongolia lies along its north, Korea on its east and Vietnam, Laos and Myanmar along its south.',
      'Red with a large yellow star and four small ones in the top left corner. Vietnam has one big star in the middle.'),
    place('mongolia', 'Mongolia', '🇲🇳', 'East Asia, the big inland country north of China',
      'Tell it from Myanmar: Mongolia is the big landlocked country north of China, between China and Russia; Myanmar is in Southeast Asia, on the Bay of Bengal.',
      'Three upright stripes, red, blue and red, with a yellow symbol on the left. The only flag here with upright stripes.'),
    place('north-korea', 'North Korea', '🇰🇵', `East Asia, the northern part of ${KOREA}`,
      'Tell it from South Korea: North Korea is the northern part of the peninsula, the one that touches China and Russia; South Korea is the southern part, and touches only North Korea.',
      'Three flat bands, blue, a much wider red and blue, with a thin white line on each side of the red and a red star in a white disc on the left of the red. Cambodia has a white temple instead.'),
    place('south-korea', 'South Korea', '🇰🇷', `East Asia, the southern part of ${KOREA}`,
      'Tell it from North Korea: South Korea is the southern part of the peninsula, and touches only North Korea; North Korea is the northern part, the one that touches China and Russia.',
      'White with a red and blue swirl and a black mark of bars in each corner. Japan has a plain red disc.', ['South Korea', 'Republic of Korea']),
    place('japan', 'Japan', '🇯🇵', 'East Asia, an arc of islands in the Pacific, east of Korea',
      'It is the long arc of islands east of Korea, across the Sea of Japan.',
      'White with a large red disc. South Korea has a red and blue swirl.'),
    place('taiwan', 'Taiwan', '🇹🇼', 'East Asia, an island off the southeast coast of China',
      "Tell it from Thailand: Taiwan is the island off China's southeast coast, across the Taiwan Strait; Thailand is on the mainland of Southeast Asia. Taiwan's status is disputed: Taiwan's government runs it as a separate state, and China's government claims it. The name on the map is Taiwan.",
      'Red with a blue rectangle in the top left corner that holds a white sun. China and Vietnam have yellow stars and no blue.'),
    place('myanmar', 'Myanmar', '🇲🇲', `the west of ${MAINLAND}, curving round the Bay of Bengal`,
      'Tell it from Mongolia: Myanmar is in Southeast Asia, on the Bay of Bengal, with Thailand on its east; Mongolia is the landlocked country north of China.',
      'Three flat stripes, yellow, green and red, with a large white star in the middle.', ['Myanmar', 'Burma']),
    place('thailand', 'Thailand', '🇹🇭', `the middle of ${MAINLAND}, narrowing south into a long peninsula`,
      'Tell it from Taiwan: Thailand is on the mainland of Southeast Asia, with the Gulf of Thailand below it; Taiwan is the island off the coast of China.',
      'Five flat stripes, red, white, a wider blue, white and red.'),
    place('laos', 'Laos', '🇱🇦', `the inland middle of ${MAINLAND}`,
      'Tell it from Cambodia: Laos is the landlocked one, north of Cambodia, with Vietnam on its east and Thailand on its west; Cambodia has a short coast on the Gulf of Thailand.',
      'Three flat bands, red, a wider blue and red, with a plain white disc. Cambodia and North Korea have blue on the top and bottom.', ['Laos', 'Lao']),
    place('cambodia', 'Cambodia', '🇰🇭', `the south of ${MAINLAND}, on the Gulf of Thailand`,
      'Tell it from Laos: Cambodia is south of Laos and has a short coast on the Gulf of Thailand; Laos has no coast.',
      'Three flat bands, blue, a wider red and blue, with a white temple on the red. Laos has red on the top and bottom.'),
    place('vietnam', 'Vietnam', '🇻🇳', `the east of ${MAINLAND}, a long strip of coast along the South China Sea`,
      'It is the long S-shaped coast country on the east side of the mainland, with Laos and Cambodia behind it and China above it.',
      'Red with one large yellow star in the middle. China has four small stars as well, in the corner.', ['Vietnam', 'Viet Nam']),
    // a river has no neighbors on the map, so it gives its own line: where it runs and where it ends
    river('yangtze-river', 'Yangtze River',
      'The Yangtze is the long river across the middle of China, running from the west to the East China Sea on the coast. Tell it from the Mekong: the Yangtze stays inside China; the Mekong runs south into Southeast Asia.',
      ['Yangtze River', 'Yangtze', 'Chang Jiang']),
    river('mekong-river', 'Mekong River',
      "The Mekong runs south out of China along Laos's border with Thailand, then through Cambodia and Vietnam to the South China Sea. Tell it from the Yangtze: the Mekong runs south through Southeast Asia; the Yangtze runs west to east across China.",
      ['Mekong River', 'Mekong'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-asia-east', strand: 'asia-east',
      places: { map: 'asia-east', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('korea-two', ['north-korea', 'south-korea']), ...pairs('taiwan-thailand', ['taiwan', 'thailand']), ...pairs('mongolia-myanmar', ['mongolia', 'myanmar']),
          ...pairs('mainland-three', ['laos', 'cambodia', 'vietnam']), ...pairs('yangtze-mekong', ['yangtze-river', 'mekong-river']) },
        list: PLACES.map(bare) } },
    { id: 'g-asia-east-flags', strand: 'asia-east-flags',
      places: { map: 'asia-east', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-red-fields', ['china', 'vietnam', 'taiwan']), ...pairs('flags-red-blue-bands', ['laos', 'cambodia', 'north-korea']), ...pairs('flags-white-round', ['japan', 'south-korea']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // The worked cases, each shown done before the learner's first try, in the steps of the way of thinking (the area, what touches it, the water) and using only what the names
  // screens of part 28 showed; the learner is anchored on places already placed (Asia, East Asia and Southeast Asia from parts 1 and 1c, the Pacific from part 1). Same shape as
  // items-worked-us.js.
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const GEN = 'g-asia-east', STRAND = 'asia-east', FLAGS = 'g-asia-east-flags';
  FC.items('geography', [
    { id: 'w-tap-vietnam', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Vietnam' }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(GEN).words.tap, map: groupOf(GEN).map, right: 'vietnam' }],
      steps: [
        step('area', AREA, 'Vietnam is in Southeast Asia, the part of Asia below East Asia that part 1c placed. It is the east edge of the mainland part of it.'),
        step('touch', TOUCH, 'China, named on the first screen, is along its north; Laos and Cambodia are behind it, as the screens showed.'),
        step('water', WATER, 'Its whole east side is the South China Sea, with the Gulf of Tonkin at the top, both named on the screens. Tap the long strip of land along that coast.')],
      reason: lineOf(GEN, 'vietnam') },
    { id: 'w-name-japan', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: groupOf(GEN).words.name }, { kind: 'map', region: groupOf(GEN).map, lit: ['japan'] }],
      asks: [{ id: 'name', kind: 'text', prompt: groupOf(GEN).words.name, accept: groupOf(GEN).list.find(p => p.id === 'japan').accept }],
      steps: [
        step('area', AREA, 'The lit country is in East Asia, the part of Asia on the Pacific that part 1c placed, out in the sea past the mainland.'),
        step('touch', TOUCH, 'It touches no country: it is an arc of islands, east of the two Koreas, as the Korea and Japan screen showed.'),
        step('water', WATER, 'The Sea of Japan is on its west, between it and Korea, and the Pacific, placed in part 1, is on its east. The arc of islands there is Japan.')],
      reason: lineOf(GEN, 'japan') },
    { id: 'w-landlocked-laos', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Laos?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: groupOf(GEN).words.border, map: groupOf(GEN).map, of: 'laos' }],
      steps: [
        step('area', AREA, 'Laos is in the middle of mainland Southeast Asia, inland, with Thailand on its west and Vietnam on its east.'),
        step('touch', TOUCH, 'Vietnam is along its whole east side: tap Vietnam.'),
        step('water', WATER, 'No sea touches it: other countries lie between it and every coast. So it is landlocked: tap Landlocked.')],
      reason: lineOf(GEN, 'laos') },
    { id: 'w-flag-laos', strand: 'asia-east-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['laos'] }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(FLAGS).words.flag, map: groupOf(FLAGS).map, right: 'laos' }],
      steps: [
        step('read', 'Read the flag: how many stripes, which way they run, which colors.', 'Three bands, lying flat, red on top, a wider blue in the middle and red at the bottom, with a white disc in the blue.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Cambodia and North Korea have the same two colors with blue on the top and bottom. Red on the top and bottom, and a plain white disc, make this one Laos.'),
        step('find', 'Find the country.', 'Laos is the landlocked country in the middle of mainland Southeast Asia, with Vietnam on its east and Thailand on its west. Tap it.')],
      reason: groupOf(FLAGS).list.find(p => p.id === 'laos').flagLine }
  ]);
})();
