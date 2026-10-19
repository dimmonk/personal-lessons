// Geography, West Africa, the coast: the two groups of places parts 22 and 22b ask about, made into questions from the map data `africa-west`, and the three worked
// cases and the worked flag those parts open with. Twelve places, from Senegal to Nigeria and Cape Verde. The map group (part 22) asks a name to tap, a lit place to
// name and, of a country with a neighbor on land, that neighbor and its water. The flag group (part 22b) asks a flag to tap, of the twelve. Both are made from the one
// list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water
// (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens its feedback with the
// place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: neighbors and water are the map data's (Natural Earth, public domain); where Cape Verde lies (islands in the Atlantic, west of Senegal) is the CIA World Factbook's
// "Location" line. Flags: each `flagLine` was checked on 2026-10-18 against the Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook
// page taken in January 2026 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page.
// That field says of Senegal, Guinea, Guinea-Bissau, Ghana, Benin and Togo alike "uses the colors of the Pan-African movement" (green, yellow and red), which is where "the
// pan-African family" of six comes from. The Gambia's blue stripe is edged in white (the Factbook: "blue with white edges"); no width is claimed for it, since the Factbook says
// only "three equal horizontal bands". The three stretches of coast ("the west corner", "the coast that runs southeast", "the Gulf of Guinea coast") are named here from the shape
// of the map to give the learner an area to look in; they are not an official grouping. The world map taught in lesson 1b puts all of these, with Mauritania, Mali, Niger and
// Burkina Faso, in West Africa (the United Nations' region); lesson 22 says which of them it asks.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const CORNER = 'the west corner of West Africa, where the coast faces west', SOUTHEAST = 'the coast that runs southeast on the Atlantic, below the west corner';
  const GULF = 'the Gulf of Guinea coast, where the shore turns and runs east', ISLANDS = 'the islands of the Atlantic, far off the west of the mainland';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const PLACES = [
    place('senegal', 'Senegal', '🇸🇳', `${CORNER}, the country at its far west tip`,
      'Tell it from the Gambia: Senegal is the large country at the far west tip of the mainland, and it wraps round the Gambia on three sides.',
      'Three upright stripes, green, yellow and red, with the green on the left and a small green star in the yellow. Guinea has the same stripes the other way round, red on the left, and no star.'),
    place('gambia', 'The Gambia', '🇬🇲', `${CORNER}, a thin strip inside Senegal`,
      'Tell it from Senegal: the Gambia is the thin strip along the Gambia River, inside Senegal; Senegal is the large country round it.',
      'Three flat stripes, red, blue and green from the top, with the blue stripe edged by thin white lines.',
      ['Gambia']),
    place('guinea-bissau', 'Guinea-Bissau', '🇬🇼', `${CORNER}, the small country just south of Senegal`,
      'Tell it from Guinea: Guinea-Bissau is the small one on the coast just south of Senegal; Guinea is the larger one south and east of it.',
      'A red upright band on the left with a black star, and two flat stripes beside it, yellow on top and green below. Benin has a green band on the left, with yellow over red.'),
    place('guinea', 'Guinea', '🇬🇳', `${SOUTHEAST}, the first of three`,
      'Tell it from Guinea-Bissau: Guinea is the larger one, south and east of Guinea-Bissau, with Sierra Leone and Liberia below it on the coast.',
      'Three upright stripes, red, yellow and green, with the red on the left and no mark. Senegal has them the other way round, green on the left, with a green star.'),
    place('sierra-leone', 'Sierra Leone', '🇸🇱', `${SOUTHEAST}, the middle of three`,
      'Tell it from Liberia: Sierra Leone is the smaller one, next to Guinea; Liberia is the one after it, next to Côte d\'Ivoire.',
      "Three flat stripes, light green, white and light blue, with nothing on them. The Gambia's three flat stripes have red on top, blue between thin white lines, and green below."),
    place('liberia', 'Liberia', '🇱🇷', `${SOUTHEAST}, the last of three, where the coast turns east`,
      'Tell it from Sierra Leone: Liberia is the one after Sierra Leone, the only one of the two that touches Côte d\'Ivoire.',
      "Eleven flat stripes, red and white in turn, with a blue square at the top left holding one white star. Togo's star is in a red square on green and yellow stripes."),
    place('cote-divoire', "Côte d'Ivoire", '🇨🇮', `${GULF}, the first country on it, at the west end`,
      'It is the large country where the coast turns east, with Liberia on its west and Ghana on its east.',
      "Three upright stripes, orange, white and green, with the orange on the left. Nigeria's are green, white and green.",
      ["Côte d'Ivoire", 'Ivory Coast']),
    place('ghana', 'Ghana', '🇬🇭', `${GULF}, the wide one in the middle`,
      'Tell it from Togo and Benin: Ghana is the wide one in the middle of the coast, next to Côte d\'Ivoire; Togo and Benin are the thin ones to its east.',
      'Three flat stripes, red, yellow and green, with a large black star in the yellow. Senegal and Guinea have upright stripes.'),
    place('togo', 'Togo', '🇹🇬', `${GULF}, a thin country east of Ghana`, 'Tell it from Benin: Togo is the thin one right next to Ghana; Benin is the thin one east of it, next to Nigeria.',
      "Five flat stripes, green and yellow in turn, with a red square at the top left holding a white star. Ghana has only three stripes and no square; no other flag on this coast has five stripes.",
      ['Togo']),
    place('benin', 'Benin', '🇧🇯', `${GULF}, a thin country between Togo and Nigeria`, 'Tell it from Togo: Benin is the thin one next to Nigeria; Togo is the thin one next to Ghana.',
      'A green upright band on the left, and two flat stripes beside it, yellow on top and red below. Guinea-Bissau has a red band with a black star on the left, and yellow over green.',
      ['Benin']),
    place('nigeria', 'Nigeria', '🇳🇬', `${GULF}, the large one at the east end`,
      'Tell it from Niger: Nigeria is the large one on the coast, at the east end of the Gulf of Guinea coast; Niger is the one inland, north of it, with no coast.',
      "Three upright stripes, green, white and green, with nothing on them. Côte d'Ivoire's are orange, white and green."),
    place('cape-verde', 'Cape Verde', '🇨🇻', ISLANDS,
      'It is the group of islands far out in the Atlantic, west of Senegal, with no neighbor on land.',
      'Blue, with a ring of ten yellow stars on the left and a flat white, red and white band across the lower part.',
      ['Cape Verde', 'Cabo Verde'])
  ];
  // the group of places drops what is only for the flags, and the group of flags drops what is only for the map
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-africa-west', strand: 'africa-west',
      places: { map: 'africa-west', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('senegal-gambia', ['senegal', 'gambia']), ...pairs('guinea-guinea-bissau', ['guinea', 'guinea-bissau']), ...pairs('sierra-leone-liberia', ['sierra-leone', 'liberia']),
          ...pairs('ghana-togo-benin', ['ghana', 'togo', 'benin']), ...pairs('niger-nigeria', ['nigeria']) },
        list: PLACES.map(bare) } },
    { id: 'g-africa-west-flags', strand: 'africa-west-flags',
      places: { map: 'africa-west', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-green-yellow-red-stripes', ['senegal', 'guinea', 'ghana']), ...pairs('flags-green-yellow-red-band', ['guinea-bissau', 'benin', 'togo']),
          ...pairs('flags-white-middle', ['nigeria', 'cote-divoire']) },
        list: PLACES.map(flagged) } }
  ]);

  // The worked cases of parts 22 and 22b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names
  // screens showed, then what touches the place, then its water. Each ends on the place's own line (its cue, or for a flag its flagLine).
  const GEN = 'g-africa-west', FLAGS = 'g-africa-west-flags', STRAND = 'africa-west';
  const lineOf = (id, key) => PLACES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-ghana', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Ghana' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'africa-west', right: 'ghana' }],
      steps: [step('area', AREA, 'Ghana is on the Gulf of Guinea coast, the stretch where the shore turns and runs east. Start from the Gulf of Guinea, the water named below that coast on the third map view.'),
        step('touch', TOUCH, 'Côte d\'Ivoire is the large country on its west. Togo, a thin country, is on its east, with Benin beyond it. Ghana is the wide one in the middle of the coast, with Burkina Faso behind it.'),
        step('water', WATER, 'Its coast is on the Gulf of Guinea. Tap inside it.')],
      reason: lineOf('ghana', 'cue') },
    { id: 'w-name-senegal', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'africa-west', lit: ['senegal'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Senegal'] }],
      steps: [step('area', AREA, 'The lit country is at the far west of the mainland, in the west corner of West Africa, where the coast faces west.'),
        step('touch', TOUCH, 'A thin strip, the Gambia, lies inside it, and Guinea-Bissau and Guinea are on its south, as the first map view showed.'),
        step('water', WATER, 'Its coast is on the Atlantic, the ocean named beside it. The country at the far west tip with the Gambia inside it is Senegal.')],
      reason: lineOf('senegal', 'cue') },
    { id: 'w-border-nigeria', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Nigeria?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'africa-west', of: 'nigeria' }],
      steps: [step('area', AREA, 'Nigeria is on the Gulf of Guinea coast, the large country at its east end.'),
        step('touch', TOUCH, 'Benin, a thin country, is along its west side, as the third map view showed: tap Benin.'),
        step('water', WATER, 'Its coast is on the Gulf of Guinea: tap the Gulf of Guinea.')],
      reason: lineOf('nigeria', 'cue') },
    { id: 'w-flag-guinea', strand: 'africa-west-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['guinea'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'africa-west', right: 'guinea' }],
      steps: [step('read', 'Read the flag: the colors, which way the stripes run, any mark.', 'Red, yellow and green, which are the pan-African colors, so it is one of the six flags of that family. Three upright stripes, red on the left, and no mark.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Senegal has the same three stripes the other way round, green on the left, with a green star. Ghana has them flat, with a black star. With red on the left and no mark, this is Guinea.'),
        step('find', 'Find the country.', 'Guinea is on the Atlantic coast, south and east of Guinea-Bissau, with Sierra Leone and Liberia below it. Tap it.')],
      reason: lineOf('guinea', 'flagLine') }
  ]);
})();
