// Geography, Türkiye, the Levant, Iraq and Iran: the two groups of places parts 20 and 20b ask about, made into questions from the map data `middle-east`. Ten places in
// three areas: Türkiye (with the Bosporus), the Levant (Syria, Lebanon, Israel, Palestine, Jordan) and Iraq and Iran (with the Persian Gulf). The map group (part 20) asks
// a name to tap, a lit place to name and a neighbor and its water. The flag group (part 20b) asks a flag to tap, of the eight countries. Both are made from the one list of
// places below, so a place has one name, one set of spellings, one area and one cue. The worked cases both parts open with are at the end of this file.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water (the
// map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens its feedback with the place's
// `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Iran and Iraq are never asked as a typed name: the answer check forgives one wrong letter in a word of four letters or more (recall.js), and "Iran" is one letter from "Iraq",
// so a lit Iraq typed as "Iran" would be marked right. They are asked as a name to tap and as a neighbor and water, where the two cannot be swapped.
// Sources: the borders and the water are the map data's (Natural Earth, public domain). The flags are described as in the CIA World Factbook, "Flag description"
// (Türkiye, Syria, Lebanon, Israel, Palestine, Jordan, Iraq, Iran). The Levant as the lands along the east end of the Mediterranean, and the Bosporus as the strait that
// runs through Istanbul between the Black Sea and the Sea of Marmara and divides Europe from Asia, are standard reference definitions (the Encyclopaedia Britannica).
// Syria's flag: the transitional government adopted the green, white and black flag with three red stars in 2025 (the older one was red, white and black with two green stars),
// and the Factbook's description is of the new one ("three equal horizontal bands of green (top), white, and black; three five-pointed red stars in a horizontal line, centered
// on the white band"). Many phones' 🇸🇾 still draws the old flag, so the flag is drawn here from that description, as Kosovo's is in gen-balkans.js.
// Flags: each `flagLine` was checked on 2026-10-18 against the Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook page taken in
// January 2026 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page. Palestine is
// UNVERIFIED against the Factbook: its West Bank and Gaza Strip pages carry no flag. The line gives the Palestinian flag as it is usually described (black, white and green
// flat stripes with a red triangle at the hoist); no source was read for it.
// Groupings: the world map taught in lesson 1c is the United Nations': Türkiye, the Levant and Iraq are Western Asia but Iran is South Asia; lesson 20 says it takes the five
// together as the Middle East.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const TURKIYE = 'Western Asia, at the top of the region: the big peninsula between the Black Sea and the Mediterranean, where Europe meets Asia';
  const LEVANT = 'the Levant, the lands along the east end of the Mediterranean';
  const SYRIA_FLAG = { box: [90, 60], said: 'a flag whose emoji may show an older design, drawn here: three flat stripes, green, white and black from the top, with three red stars in a row on the white', layers: [
    ['rect', '#007A3D', 0, 0, 90, 20], ['rect', '#FFFFFF', 0, 20, 90, 20], ['rect', '#000000', 0, 40, 90, 20],
    ...[29, 45, 61].map(x => ['star', '#CE1126', x, 30, 5.5])
  ] };
  const IRAQ = 'Western Asia, east of the Levant: the country at the north-west end of the Persian Gulf, beside Iran';
  const IRAN = 'the Middle East, east of Iraq: the large country on the north and east side of the Persian Gulf';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  // water is named for its line, not by the three questions, so it has a `reason` of its own and is asked only as a name to tap or to type
  const water = (id, name, reason, accept = [name]) => ({ id, name, accept, reason, forms: ['tap', 'name'] });
  const PLACES = [
    place('turkiye', 'Türkiye', '🇹🇷', TURKIYE,
      'It is the big country across the top of the region, with the Black Sea to its north and the Mediterranean to its south. It is the same country as Turkey.',
      'A plain red field with a white crescent and a white star. No other flag here is red with a crescent.', ['Türkiye', 'Turkey']),
    place('syria', 'Syria', SYRIA_FLAG, `${LEVANT}, its big northern country`,
      'Tell it from Jordan: Syria is the big one in the north, touching Türkiye and Iraq; Jordan is the smaller one below it.',
      "Three flat stripes, green, white and black from the top, with three red stars on the white. Jordan and Palestine have the same colors the other way up, with a red triangle on the left."),
    place('lebanon', 'Lebanon', '🇱🇧', `${LEVANT}, the narrow country at the north end of its coast`,
      'Tell it from Israel: Lebanon is the narrow one at the north end of the coast, between the sea and Syria; Israel is the next one south.',
      'Red, white and red flat stripes, the white one twice as wide, with a green cedar tree in the middle.'),
    place('israel', 'Israel', '🇮🇱', `${LEVANT}, the middle of its coast`,
      'Tell it from Lebanon and Palestine: Israel is south of Lebanon and the largest of the three small countries on the coast, with Palestine in two pieces beside it.',
      'White, with a blue six-pointed star in the middle and a blue stripe along the top and the bottom.'),
    place('palestine', 'Palestine', '🇵🇸', `${LEVANT}, in two pieces beside Israel`,
      'Tell it from Israel: Palestine is two small pieces, the West Bank inland beside Jordan and Gaza, a strip on the coast in the southwest, both next to Israel.',
      'Three flat stripes, black, white and green from the top, with a red triangle on the left. Jordan has the same, with a white star in the triangle.',
      ['Palestine', 'West Bank', 'Gaza', 'West Bank and Gaza', 'State of Palestine', 'Palestinian Territories']),
    place('jordan', 'Jordan', '🇯🇴', `${LEVANT}, inland, below Syria`,
      'Tell it from Syria: Jordan is the one below Syria, with no Mediterranean coast; its only coast is a short one at the far south, on the Red Sea.',
      'Three flat stripes, black, white and green from the top, with a red triangle on the left that holds a white star. Palestine has the same, with no star.'),
    place('iraq', 'Iraq', '🇮🇶', IRAQ,
      'Tell it from Iran: Iraq is the smaller one in the west, with only a short coast at the head of the Persian Gulf; Iran is the larger one to its east.',
      'Three flat stripes, red, white and black from the top, with green writing on the white. Iran has green on top and red below, with a red emblem on the white.'),
    place('iran', 'Iran', '🇮🇷', IRAN,
      'Tell it from Iraq: Iran is the large one in the east, with coasts on the Persian Gulf, the Gulf of Oman and the Caspian Sea; Iraq is the smaller one to its west.',
      'Three flat stripes, green, white and red from the top, with a red emblem in the middle of the white. Iraq has red on top and black below, with green writing on the white.')
  ];
  const WATERS = [
    water('bosporus', 'Bosporus', 'The Bosporus is the narrow strait at the northwest corner of Türkiye. It joins the Black Sea in the north to the Sea of Marmara, which leads on to the Aegean and the Mediterranean. Istanbul sits on it, and it divides Europe from Asia.', ['Bosporus', 'Bosphorus']),
    water('persian-gulf', 'Persian Gulf', 'The Persian Gulf is the sea between Iran on its northeast shore and Arabia on the other, with Iraq and Kuwait at its head and the Strait of Hormuz at its mouth.', ['Persian Gulf', 'The Gulf', 'Arabian Gulf'])
  ];
  // Iran and Iraq are never typed (see the top of the file): they take the name to tap and the neighbor and water
  const NOT_TYPED = ['iran', 'iraq'];
  const bare = ({ flag, flagLine, ...rest }) => (NOT_TYPED.includes(rest.id) ? { ...rest, forms: ['tap', 'border'] } : rest);
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-middle-east', strand: 'middle-east',
      places: { map: 'middle-east', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('iran-iraq', ['iran', 'iraq']), ...pairs('levant-coast', ['lebanon', 'israel', 'palestine']), ...pairs('jordan-syria', ['jordan', 'syria']) },
        list: [...PLACES.map(bare), ...WATERS] } },
    { id: 'g-middle-east-flags', strand: 'middle-east-flags',
      places: { map: 'middle-east', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-iran-iraq', ['iran', 'iraq']), ...pairs('flags-black-white-green', ['jordan', 'palestine', 'syria']) },
        list: PLACES.map(flagged) } }
  ]);

  // The worked cases of parts 20 and 20b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names
  // screens showed (or from a lesson before), then what touches the place, then its water. Each ends on the place's own line (its cue, or for a flag its flagLine).
  const GEN = 'g-middle-east', FLAGS = 'g-middle-east-flags', STRAND = 'middle-east';
  const lineOf = (id, key) => PLACES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-jordan', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Jordan' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'middle-east', right: 'jordan' }],
      steps: [step('area', AREA, 'Jordan is in the Levant, the lands along the east end of the Mediterranean. Start from the Mediterranean, the sea named on the map of western Europe: the Levant is the coast at its east end.'),
        step('touch', TOUCH, 'Syria, the big country at the top of the Levant, is above it. Jordan is the one below Syria, inland, with Israel and Palestine between it and the sea.'),
        step('water', WATER, 'It has no Mediterranean coast. Its one short coast is at the far south, on the Red Sea, as the screen of Jordan and the Red Sea showed. Tap inside it.')],
      reason: lineOf('jordan', 'cue') },
    { id: 'w-name-syria', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'middle-east', lit: ['syria'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Syria'] }],
      steps: [step('area', AREA, 'The lit country is at the east end of the Mediterranean, so it is one of the Levant\'s five. Start from Türkiye, the big country across the top, which the first screen showed.'),
        step('touch', TOUCH, 'It is the big one just below Türkiye, with Lebanon, Israel and Jordan along its south side and Iraq on its east, as the screens showed.'),
        step('water', WATER, 'It has a short coast on the Mediterranean. Jordan, the other big one below it, has none, so the lit country is Syria.')],
      reason: lineOf('syria', 'cue') },
    { id: 'w-border-lebanon', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Lebanon?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'middle-east', of: 'lebanon' }],
      steps: [step('area', AREA, 'Lebanon is in the Levant, the narrow country at the north end of its coast.'),
        step('touch', TOUCH, 'Syria is along its north and east sides and Israel on its south: tap Syria.'),
        step('water', WATER, 'Its whole west side is on the Mediterranean: tap the Mediterranean.')],
      reason: lineOf('lebanon', 'cue') },
    { id: 'w-flag-jordan', strand: 'middle-east-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['jordan'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'middle-east', right: 'jordan' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'Three flat stripes, black on top, then white, then green, with a red triangle on the left. A white star sits in the triangle.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Palestine has the same stripes and the same triangle, but no star. Syria has the same colors the other way up, green on top, with red stars on the white. Jordan is the one with the star in the triangle.'),
        step('find', 'Find the country.', 'Jordan is the Levant country inland, below Syria and east of Israel and Palestine. Tap it.')],
      reason: lineOf('jordan', 'flagLine') }
  ]);
})();
