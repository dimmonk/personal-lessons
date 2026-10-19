// Geography, Central Asia and the Caucasus: the two groups of places parts 27 and 27b ask about, made into questions from the map data `asia-central`. Nine places in two
// areas: Central Asia (Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, Tajikistan, the five countries whose names end in -stan) and the Caucasus (Georgia, Armenia,
// Azerbaijan), with the Caspian Sea between them. The map group (part 27) asks a name to tap for all nine, and a lit place to name and a neighbor and its water for the
// eight countries; the sea is a name to tap only. The flag group (part 27b) asks a flag to tap, of the eight countries. Both are made from the one list of places below,
// so a place has one name, one set of spellings, one area and one cue. The worked cases both parts open with are at the end of this file.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens its feedback
// with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the borders and the water are the map data's (Natural Earth); the flags are described as in the CIA World Factbook, Flag description (checked 2026-10-18 against the Factbook's own
// text as mirrored in github.com/factbook/factbook.json, weekly copy of January 2026, because cia.gov retired the Factbook in February 2026); "-stan" is the
// Persian word for "land" (standard etymology), the world map of part 1c (the United Nations' groups) puts Georgia, Armenia and Azerbaijan in Western Asia, not Central Asia, and each feedback says so, and the Caspian's five shore countries (Russia, Kazakhstan, Turkmenistan, Iran, Azerbaijan) are the map data's water lists.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const CENTRAL = 'Central Asia, the middle of Asia east of the Caspian Sea, where five countries end in -stan', CAUCASUS = 'the Caucasus, the mountain land between the Black Sea and the Caspian Sea';
  const WORLD_WEST = 'Western Asia on the world map';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const PLACES = [
    place('kazakhstan', 'Kazakhstan', '🇰🇿', `${CENTRAL}: the huge one across the top`, 'It is the huge one across the top of Central Asia, the biggest of the five and the only one that touches Russia.',
      'Sky blue, with a gold sun above a soaring gold eagle in the middle and a gold pattern down the left edge. Kyrgyzstan has a sun too, but on red and with no eagle.'),
    place('uzbekistan', 'Uzbekistan', '🇺🇿', `${CENTRAL}: the one in the middle`, 'Tell it from Turkmenistan: Uzbekistan is the one in the middle, touching each of the other four -stans and with no coast; Turkmenistan is the southwest one, on the Caspian Sea.',
      "Three flat stripes, blue, white and green, with thin red lines between them and a white crescent and twelve stars in the top left. Azerbaijan's stripes are blue, red and green, with one star in the middle."),
    place('turkmenistan', 'Turkmenistan', '🇹🇲', `${CENTRAL}: the southwest one, on the Caspian Sea`, 'Tell it from Uzbekistan: Turkmenistan is the southwest one, on the Caspian Sea, with Iran on its south; Uzbekistan is the one in the middle, with no sea.',
      'Green, with an upright red stripe at the left holding five rug patterns, and a white crescent and five stars beside it. No other flag here has a rug stripe.'),
    place('kyrgyzstan', 'Kyrgyzstan', '🇰🇬', `${CENTRAL}: the northern one of the two mountain countries in the southeast`, 'Tell it from Tajikistan: Kyrgyzstan is the northern one of the pair, touching Kazakhstan; Tajikistan is the southern one, touching Afghanistan.',
      "Red, with a gold sun in the middle and a red ring crossed by lines at its center, like a tent roof. Kazakhstan's sun is on sky blue, over an eagle."),
    place('tajikistan', 'Tajikistan', '🇹🇯', `${CENTRAL}: the southern one of the two mountain countries in the southeast`, 'Tell it from Kyrgyzstan: Tajikistan is the southern one of the pair, touching Afghanistan; Kyrgyzstan is the northern one, touching Kazakhstan.',
      "Three flat stripes, red, a wider white one and green, with a gold crown and seven stars in the middle of the white. Armenia's top stripe is red too, but the next two are blue and orange and there is no mark."),
    place('georgia', 'Georgia', '🇬🇪', `${CAUCASUS}: the northwest one, on the Black Sea (${WORLD_WEST})`, 'It is the northwest one of the Caucasus three, the one on the Black Sea. The U.S. state of the same name is a different place, in the South.',
      'White, with a big red cross that reaches all four edges and a small red cross in each corner. It is the only white flag here.'),
    place('armenia', 'Armenia', '🇦🇲', `${CAUCASUS}: the small one in the south, with no coast (${WORLD_WEST})`, 'Tell it from Azerbaijan: Armenia is the small one with no coast, on the west side; Azerbaijan is the larger one on the east, on the Caspian Sea.',
      "Three flat stripes, red, blue and orange, with no mark on them. Tajikistan's top stripe is red too, but it has a white one and a crown."),
    place('azerbaijan', 'Azerbaijan', '🇦🇿', `${CAUCASUS}: the eastern one, on the Caspian Sea (${WORLD_WEST})`, 'Tell it from Armenia: Azerbaijan is the larger one on the east side, on the Caspian Sea; Armenia is the small one with no coast, to its west.',
      "Three flat stripes, blue, red and green, with a white crescent and one eight-pointed star in the middle of the red. Uzbekistan has a white stripe and its crescent is in the top left."),
    { id: 'caspian-sea', name: 'Caspian Sea', accept: ['Caspian Sea', 'Caspian', 'The Caspian Sea'], forms: ['tap'],
      reason: 'The Caspian Sea is the big inland sea between the Caucasus and Central Asia, with Russia, Kazakhstan, Turkmenistan, Iran and Azerbaijan on its shore. Tell it from the Black Sea: the Black Sea is west of the Caucasus; the Caspian is east of it.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));
  const COUNTRIES = PLACES.filter(p => p.flagLine);

  FC.gen('geography', [
    { id: 'g-asia-central', strand: 'asia-central',
      places: { map: 'asia-central', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('stans-five', ['kazakhstan', 'uzbekistan', 'turkmenistan']), ...pairs('kyrgyzstan-tajikistan', ['kyrgyzstan', 'tajikistan']), ...pairs('armenia-azerbaijan', ['armenia', 'azerbaijan']),
          georgia: 'caucasus-three', 'caspian-sea': 'caspian-black' },
        list: PLACES.map(bare) } },
    { id: 'g-asia-central-flags', strand: 'asia-central-flags',
      places: { map: 'asia-central', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-uzbekistan-azerbaijan', ['uzbekistan', 'azerbaijan']), ...pairs('flags-kazakhstan-kyrgyzstan', ['kazakhstan', 'kyrgyzstan']), ...pairs('flags-red-top-stripes', ['armenia', 'tajikistan']) },
        list: COUNTRIES.map(flagged) } }
  ]);

  // The worked cases of parts 27 and 27b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the
  // names screens showed (or from a lesson before), then what touches the place, then its water. Each ends on the place's own line (its cue, or for a flag its flagLine).
  const STRAND = 'asia-central', FLAGS = 'g-asia-central-flags';
  const lineOf = (id, key) => PLACES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-uzbekistan', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Uzbekistan' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'asia-central', right: 'uzbekistan' }],
      steps: [step('area', AREA, 'Uzbekistan is one of the five -stans of Central Asia, the part of Asia you placed in part 1c, from the Caspian Sea east to China.'),
        step('touch', TOUCH, 'Start from Kazakhstan, the huge one across the top, named on the first view. Uzbekistan is the one just below it, in the middle, and it touches all four of the other -stans.'),
        step('water', WATER, 'No sea touches it: the Caspian Sea is off to its west, past Kazakhstan and Turkmenistan. Tap inside it.')],
      reason: lineOf('uzbekistan', 'cue') },
    { id: 'w-name-georgia', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'asia-central', lit: ['georgia'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Georgia'] }],
      steps: [step('area', AREA, 'The lit country is at the far west of the map, in the Caucasus, the mountain land between the Black Sea and the Caspian Sea, as the third view showed.'),
        step('touch', TOUCH, 'Armenia is on its south side and Azerbaijan on its east side, with the Caucasus mountains along its north.'),
        step('water', WATER, 'The Black Sea is on its west side. Of the three countries of the Caucasus, the one on the Black Sea is Georgia.')],
      reason: lineOf('georgia', 'cue') },
    { id: 'w-border-armenia', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Armenia?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'asia-central', of: 'armenia' }],
      steps: [step('area', AREA, 'Armenia is in the Caucasus, the small country in the south, between Georgia and Azerbaijan.'),
        step('touch', TOUCH, 'Georgia is along its north side: tap Georgia.'),
        step('water', WATER, 'The Black Sea is beyond Georgia and the Caspian Sea is beyond Azerbaijan, so neither reaches it. It is landlocked: tap Landlocked.')],
      reason: lineOf('armenia', 'cue') },
    { id: 'w-flag-uzbekistan', strand: 'asia-central-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['uzbekistan'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'asia-central', right: 'uzbekistan' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'Three flat stripes, blue, white and green from the top, with a thin red line between them. In the top left there is a white crescent with twelve white stars.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Azerbaijan is also blue on top with a crescent, but its middle stripe is red, not white, and its crescent sits in the middle with just one star. Uzbekistan has the white stripe and the twelve stars.'),
        step('find', 'Find the country.', 'Uzbekistan is the -stan in the middle of Central Asia, touching all four of the others, with no sea. Tap it.')],
      reason: lineOf('uzbekistan', 'flagLine') }
  ]);
})();
