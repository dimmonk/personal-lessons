// Geography, the Sahel and Central Africa: the two groups of places parts 23 and 23b ask about, made into questions from the map data `africa-central`. Twelve
// countries, from Mauritania to the two Congos: the five of the Sahel (Mauritania, Mali, Burkina Faso, Niger, Chad), the six of Central Africa on the mainland
// (Cameroon, the Central African Republic, Equatorial Guinea, Gabon, the Republic of the Congo, the Democratic Republic of the Congo) and the two islands of
// São Tomé and Príncipe, a dot on the map. The map group (part 23) asks a name to tap, a lit place to name and a neighbor and its water. The flag group
// (part 23b) asks a flag to tap. Both are made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, Natural Earth, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens
// its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources for what is not in the map data: the flag descriptions are those of the CIA World Factbook (Flag description, each country; checked 2026-10-18 against the Factbook's
// own text as mirrored in github.com/factbook/factbook.json, weekly copy of January 2026, because cia.gov retired the Factbook in February 2026); "the equator crosses
// Gabon" is the Factbook's location line for Gabon ("at the Equator"); the Sahel as the dry belt south of the Sahara across Africa, and Chad at its eastern end,
// is the Factbook's and the United Nations' usage. The worked cases at the foot (parts 23 and 23b) use only what the names screens of the lessons showed.
(() => {
  const GEN_MAP = 'g-africa-central', GEN_FLAGS = 'g-africa-central-flags', MAP = 'africa-central';
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const SAHEL = 'the Sahel, the dry belt across Africa just south of the Sahara', CENTRAL = 'Central Africa, the middle of the continent';
  // the world map of part 1b files Mauritania, Mali, Burkina Faso and Niger under West Africa and Chad under Central Africa (gen-world.js); the Sahel is a belt across both, and each feedback says so
  const WEST = 'West Africa on the world map', CENTRAL_WORLD = 'Central Africa on the world map';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const PLACES = [
    place('mauritania', 'Mauritania', '🇲🇷', `${SAHEL}, its far west end on the Atlantic coast (${WEST})`, 'It is the Sahel country on the Atlantic coast; Mali, the next one east, has no coast.',
      'Green with a red band along the top and the bottom, and a yellow star above an upward-pointing yellow crescent. Burkina Faso has no crescent.'),
    place('mali', 'Mali', '🇲🇱', `${SAHEL}, in the west (${WEST})`, 'It is the big inland country between Mauritania and Niger, with no coast; Burkina Faso is the small one under it.',
      'Three upright stripes, green, yellow and red, with the green on the left. Chad has blue on the left.'),
    place('burkina-faso', 'Burkina Faso', '🇧🇫', `the southern edge of ${SAHEL} (${WEST})`, 'It is the small inland country under Mali and Niger, with no coast.',
      'Two flat bands, red over green, with a yellow star in the middle. Mauritania is green with a crescent.', ['Burkina Faso', 'Burkina']),
    place('niger', 'Niger', '🇳🇪', `the middle of ${SAHEL}, with the Sahara to its north (${WEST})`, 'Tell it from Nigeria: Niger is the large inland country in the Sahel; Nigeria is the one below it, on the Gulf of Guinea.',
      'Three flat stripes, orange, white and green, with an orange circle in the white.'),
    place('chad', 'Chad', '🇹🇩', `the east end of ${SAHEL}, reaching up into the Sahara (${CENTRAL_WORLD})`, 'Tell it from the Central African Republic: Chad is the large one in the north, reaching up into the Sahara; the Central African Republic is the smaller one under it.',
      'Three upright stripes, blue, yellow and red, with the blue on the left. Mali has green on the left.'),
    place('cameroon', 'Cameroon', '🇨🇲', `${CENTRAL}, at the corner where the coast of the Gulf of Guinea turns south`, 'It is the big country at the corner of the Gulf of Guinea, with Nigeria on its west; its thin northern arm reaches toward Chad.',
      'Three upright stripes, green, red and yellow, with a yellow star in the red. Mali has yellow in the middle and no star.'),
    place('central-african-republic', 'Central African Republic', '🇨🇫', `${CENTRAL}, with no coast`, 'Tell it from Chad: the Central African Republic is the smaller one under Chad, in the middle of the continent, with no coast.',
      'Four flat bands, blue, white, green and yellow, cut by an upright red band, with a yellow star at the top left.', ['Central African Republic', 'CAR']),
    place('equatorial-guinea', 'Equatorial Guinea', '🇬🇶', `${CENTRAL}, a small square on the Gulf of Guinea coast`, 'Tell it from Gabon: Equatorial Guinea is the small square between Cameroon and Gabon; Gabon is the larger country under it. Despite the name, it is far from Guinea, in West Africa.',
      'Three flat stripes, green, white and red, with a blue triangle at the left and an emblem in the white.'),
    place('gabon', 'Gabon', '🇬🇦', `${CENTRAL}, on the Atlantic coast, with the equator crossing it`, 'Tell it from Equatorial Guinea: Gabon is the larger country, under the small square of Equatorial Guinea, with the Republic of the Congo on its other side.',
      'Three flat stripes, green, yellow and blue, with nothing else on them. Equatorial Guinea has red and a triangle.'),
    place('republic-of-the-congo', 'Republic of the Congo', '🇨🇬', `${CENTRAL}, between Gabon and the Congo River, with a short Atlantic coast`, 'Tell it from the Democratic Republic of the Congo: the Republic of the Congo is the smaller one on the Atlantic side, west of the river, next to Gabon; the Democratic Republic is the huge one behind it.',
      'A yellow band cut diagonally between green at the top left and red at the bottom right.', ['Republic of the Congo', 'Congo-Brazzaville']),
    place('democratic-republic-of-the-congo', 'Democratic Republic of the Congo', '🇨🇩', `${CENTRAL}, the huge country around the Congo River`, 'Tell it from the Republic of the Congo: the Democratic Republic is the huge one that fills the middle of Africa, with only a sliver of coast at the river mouth; the Republic of the Congo is the smaller one on the Atlantic side.',
      'Sky blue with a red diagonal band edged in yellow, from the bottom left to the top right, and a yellow star at the top left.', ['Democratic Republic of the Congo', 'DR Congo', 'DRC', 'Congo-Kinshasa']),
    place('sao-tome-and-principe', 'São Tomé and Príncipe', '🇸🇹', `${CENTRAL}, two small islands in the Gulf of Guinea, off the coast of Gabon`, 'It is the pair of tiny islands out in the Gulf of Guinea, off Gabon; the others here are all on the mainland.',
      'Three flat stripes, green, a wider yellow and green, with two black stars and a red triangle at the left.', ['São Tomé and Príncipe', 'São Tomé'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: GEN_MAP, strand: 'africa-central',
      places: { map: MAP, forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('sahel-row', ['mauritania', 'mali', 'burkina-faso', 'niger']), ...pairs('chad-car', ['chad', 'central-african-republic']),
          ...pairs('gulf-coast-three', ['cameroon', 'equatorial-guinea', 'gabon']), ...pairs('two-congos', ['republic-of-the-congo', 'democratic-republic-of-the-congo']) },
        list: PLACES.map(bare) } },
    { id: GEN_FLAGS, strand: 'africa-central-flags',
      places: { map: MAP, forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-upright-three', ['mali', 'chad', 'cameroon']), ...pairs('flags-two-congos', ['republic-of-the-congo', 'democratic-republic-of-the-congo']),
          ...pairs('flags-burkina-mauritania', ['burkina-faso', 'mauritania']), ...pairs('flags-gabon-equatorial-guinea', ['gabon', 'equatorial-guinea']) },
        list: PLACES.map(flagged) } }
  ]);

  // the worked cases of parts 23 and 23b, in the steps of the way of thinking (the bigger area first, found from places already learned or named on the screens, then
  // what touches the place, then its water); the closing line under each is the place's own cue, or for a flag its flagLine
  const byId = id => PLACES.find(p => p.id === id);
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const READ = 'Read the flag: how many stripes, which way they run, which colors.', TELL = 'Tell it from the flag it is mistaken for.', FIND = 'Find the country.';
  const ask = id => ({ id: 'where', kind: 'place', prompt: WORDS[id], map: MAP });
  FC.items('geography', [
    { id: 'w-tap-mali', strand: 'africa-central', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Mali' }],
      asks: [{ ...ask('tap'), right: 'mali' }], reason: byId('mali').cue,
      steps: [step('area', AREA, 'Mali is in the Sahel, the dry belt south of the Sahara. Start from Algeria, the big country at the top of the map named on the first screen.'),
        step('touch', TOUCH, 'Mali is the large country right under Algeria\'s southwest, with Mauritania on its west and Niger to its east.'),
        step('water', WATER, 'No sea reaches it: other countries lie between it and every coast. Tap inside it.')] },
    { id: 'w-name-republic-of-the-congo', strand: 'africa-central', facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: MAP, lit: ['republic-of-the-congo'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: byId('republic-of-the-congo').accept }], reason: byId('republic-of-the-congo').cue,
      steps: [step('area', AREA, 'The lit country is in Central Africa, below Cameroon and the Central African Republic.'),
        step('touch', TOUCH, 'Gabon is on its west, and across the Congo River on its east is the huge Democratic Republic, as the last view showed.'),
        step('water', WATER, 'It has a short coast on the Atlantic. The smaller of the two Congos, on the Atlantic side, is the Republic of the Congo.')] },
    { id: 'w-landlocked-chad', strand: 'africa-central', facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Chad?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: MAP, of: 'chad' }], reason: byId('chad').cue,
      steps: [step('area', AREA, 'Chad is at the east end of the Sahel, reaching up into the Sahara, with Libya along its top.'),
        step('touch', TOUCH, 'Niger is along its west side: tap Niger.'),
        step('water', WATER, 'No sea, ocean or big lake reaches it: the Sahel is far from every coast, with other countries in between, and Lake Chad has shrunk too small to count. So it is landlocked: tap Landlocked.')] },
    { id: 'w-flag-chad', strand: 'africa-central-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: GEN_FLAGS, places: ['chad'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: MAP, right: 'chad' }], reason: byId('chad').flagLine,
      steps: [step('read', READ, 'Three stripes, standing upright, blue, yellow and red from left to right.'),
        step('tell', TELL, 'Mali and Cameroon also have upright stripes with yellow, but both have green on the left. Chad has blue on the left, and no star.'),
        step('find', FIND, 'Chad is the large country at the east end of the Sahel, over the Central African Republic. Tap it.')] }
  ]);
})();
