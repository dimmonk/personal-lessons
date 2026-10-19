// Geography, Arabia and North Africa: the two groups of places parts 21 and 21b ask about, made into questions from the map data `arabia-north-africa`. Sixteen places in
// four areas: the Arabian Peninsula (Saudi Arabia, Yemen, Oman), the Gulf coast (Kuwait, Bahrain, Qatar, the United Arab Emirates), the Nile countries (Egypt, Sudan) and the
// Maghreb (Libya, Tunisia, Algeria, Morocco), with the three waters that link them (the Red Sea, the Suez Canal, the Strait of Hormuz). The map group (part 21) asks a name
// to tap, a lit place to name and, of the countries, a neighbor and its water. The flag group (part 21b) asks a flag to tap, of the thirteen countries. Both are made from the
// one list of places below, so a place has one name, one set of spellings, one area and one cue. The worked cases both parts open with are at the end of this file.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water
// (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens its feedback with the place's
// `flagLine`, the one thing that tells the flag from the one it is mistaken for. The three waters have no neighbors on land, so each gives its own line (`reason`).
// Sources: neighbors and water are the map data's (Natural Earth 5.1.2). The Maghreb is taken as Libya, Tunisia, Algeria and Morocco (the four of the five members of the
// Arab Maghreb Union on this map; Mauritania, the fifth, is on the Sahel map, lesson 23). The world map taught in lessons 1b and 1c is the United Nations': Saudi Arabia, Yemen,
// Oman, Kuwait, Bahrain, Qatar and the Emirates are Western Asia, and Egypt, Sudan, Libya, Tunisia, Algeria and Morocco are Northern Africa (checked against Natural Earth's
// SUBREGION for these countries); lesson 21 takes them together and says so.
// Flags: each `flagLine` was checked on 2026-10-18 against the CIA World Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook page
// taken in January 2026 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const ARABIA = 'the Arabian Peninsula, the big peninsula of south-west Asia between the Red Sea and the Persian Gulf';
  const GULF = 'the Gulf coast of Arabia, the four small countries of the Gulf';
  const NILE = 'the Nile countries, the north-east corner of Africa';
  const MAGHREB = 'the Maghreb, the north-west of Africa along the Mediterranean';
  const place = (id, name, flag, area, cue, flagLine, extra = {}) => ({ id, name, flag, accept: [name], ...(area ? { area } : {}), ...(cue ? { cue } : {}), ...(flagLine ? { flagLine } : {}), ...extra });
  const water = (id, name, reason, accept = [name]) => ({ id, name, accept, reason });
  const PLACES = [
    place('saudi-arabia', 'Saudi Arabia', '🇸🇦', `${ARABIA}: the huge country that fills most of it`,
      'It is the huge one that fills most of the peninsula, with the Red Sea on its west and the Persian Gulf on its east.',
      'Plain green, with white Arabic writing and a white sword under it.', { accept: ['Saudi Arabia', 'Saudi'] }),
    place('yemen', 'Yemen', '🇾🇪', `${ARABIA}: its south-west corner`,
      'Tell it from Oman: Yemen is the south-west corner, on the Red Sea and the Gulf of Aden; Oman is the long south-east coast on the Arabian Sea.',
      'Three flat stripes, red, white and black from the top, with nothing on them. Egypt has an eagle; Sudan a green triangle.'),
    place('oman', 'Oman', '🇴🇲', `${ARABIA}: its south-east corner and coast`,
      'Tell it from Yemen and the United Arab Emirates: Oman is the large one round the south-east tip, on the Arabian Sea; the United Arab Emirates is the smaller one on the Gulf, north-west of it.',
      'Three flat stripes, white, red and green from the top, with a wide red bar on the left that holds a white dagger and crossed swords.'),
    place('kuwait', 'Kuwait', '🇰🇼', `${GULF}, at the top of the Gulf`,
      'It is at the head of the Gulf, the top corner, against Iraq; Bahrain and Qatar are far down the Gulf below it.',
      'Three flat stripes, green, white and red from the top, with a black trapezoid on the left. The Emirates have black at the bottom.'),
    place('bahrain', 'Bahrain', '🇧🇭', `${GULF}: a small island off the Saudi coast`,
      'Tell it from Qatar: Bahrain is the small island off the Saudi coast, just west of Qatar, with no neighbor on land; Qatar is the thumb of land beside it.',
      'Red, with a white saw-edge on the left that has five points. Qatar is darker, with nine.'),
    place('qatar', 'Qatar', '🇶🇦', `${GULF}: the thumb of land that sticks out north into the Gulf`,
      'Tell it from Bahrain: Qatar is the thumb of land that sticks north out of Saudi Arabia into the Gulf, with Saudi Arabia its one neighbor; Bahrain is the small island just west of it.',
      'Dark maroon, with a white saw-edge on the left that has nine points. Bahrain is lighter red, with five.'),
    place('united-arab-emirates', 'United Arab Emirates', '🇦🇪', `${GULF}, at its south-east end`,
      'Tell it from Oman: the United Arab Emirates is the smaller one on the Persian Gulf, east of Qatar; Oman is the larger one beyond it, round the south-east tip.',
      'Three flat stripes, green, white and black from the top, with a wide red bar on the left. Kuwait has red at the bottom.',
      { accept: ['United Arab Emirates', 'UAE', 'Emirates'] }),
    place('egypt', 'Egypt', '🇪🇬', `${NILE}: the north, on the Mediterranean`,
      'Tell it from Sudan: Egypt is the one at the top, with the Mediterranean coast and the Suez Canal; Sudan is the large one below it.',
      'Three flat stripes, red, white and black from the top, with a gold eagle on the white one. Yemen has no eagle; Sudan has a green triangle.'),
    place('sudan', 'Sudan', '🇸🇩', `${NILE}: the south, below Egypt`,
      'Tell it from Egypt: Sudan is the large one below Egypt, with a short coast on the Red Sea; Egypt is the one at the top, on the Mediterranean.',
      'Three flat stripes, red, white and black from the top, with a green triangle on the left. Yemen has no mark; Egypt has an eagle.'),
    place('libya', 'Libya', '🇱🇾', `${MAGHREB}: its east side, next to Egypt`,
      'Tell it from Tunisia and Algeria: Libya is the big one on the east side of the Maghreb, next to Egypt, with a long Mediterranean coast; Tunisia and Algeria are to its west.',
      'Three flat stripes, red, black (twice as wide) and green, with a white crescent and star on the black.'),
    place('tunisia', 'Tunisia', '🇹🇳', `${MAGHREB}: its small north-east corner`,
      'Tell it from Libya and Algeria: Tunisia is the small one in the north-east corner of the Maghreb, between Algeria and Libya, with Italy across the Mediterranean.',
      'Red, with a white disc in the middle that holds a red crescent and star. Morocco has a green star and no disc.'),
    place('algeria', 'Algeria', '🇩🇿', `${MAGHREB}: its middle, the largest country`,
      'Tell it from Libya and Morocco: Algeria is the biggest country of the Maghreb, in the middle, with Tunisia and Libya on its east and Morocco on its west; much of it is the Sahara.',
      'Two upright halves, green and white, with a red crescent and star in the middle. Tunisia is all red.'),
    place('morocco', 'Morocco', '🇲🇦', `${MAGHREB}: its west end`,
      'Tell it from Algeria: Morocco is the north-west corner of Africa, the last country of the Maghreb, nearest to Spain across the narrow Strait of Gibraltar; Algeria is the large one east of it.',
      'Plain red, with a green five-pointed star in the middle and no disc. Tunisia has a white disc, a crescent and a star.'),
    water('red-sea', 'Red Sea', 'The Red Sea is the long narrow sea between north-east Africa and Arabia: Egypt and Sudan are on its west shore, Saudi Arabia and Yemen on its east, the Suez Canal at its top and the Gulf of Aden at its foot.', ['Red Sea']),
    water('suez-canal', 'Suez Canal', 'The Suez Canal cuts across Egypt at the top of the Red Sea and joins it to the Mediterranean, so ships between Europe and Asia need not sail round Africa.', ['Suez Canal', 'Suez']),
    water('strait-of-hormuz', 'Strait of Hormuz', 'The Strait of Hormuz is the narrow passage at the mouth of the Persian Gulf, where it opens to the Gulf of Oman, with the United Arab Emirates and Oman on its south side; the Gulf\'s oil tankers pass through it.', ['Strait of Hormuz', 'Hormuz'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-arabia-north-africa', strand: 'arabia-north-africa',
      places: { map: 'arabia-north-africa', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('south-east-arabia', ['yemen', 'oman', 'united-arab-emirates']), ...pairs('gulf-small-three', ['kuwait', 'bahrain', 'qatar']),
          ...pairs('egypt-sudan', ['egypt', 'sudan']), ...pairs('maghreb-four', ['libya', 'tunisia', 'algeria', 'morocco']), ...pairs('red-sea-suez', ['red-sea', 'suez-canal']) },
        list: PLACES.map(bare) } },
    { id: 'g-arabia-north-africa-flags', strand: 'arabia-north-africa-flags',
      places: { map: 'arabia-north-africa', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-egypt-yemen-sudan', ['egypt', 'yemen', 'sudan']), ...pairs('flags-uae-kuwait', ['united-arab-emirates', 'kuwait']),
          ...pairs('flags-qatar-bahrain', ['qatar', 'bahrain']), ...pairs('flags-tunisia-algeria-morocco', ['tunisia', 'algeria', 'morocco']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // The worked cases of parts 21 and 21b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names
  // screens showed (or from an earlier one: the parts of Asia and Africa, the Mediterranean of the map of western Europe), then what touches the place, then its water. Each ends on the place's
  // own line (its cue or reason, or for a flag its flagLine).
  const GEN = 'g-arabia-north-africa', FLAGS = 'g-arabia-north-africa-flags', MAP = 'arabia-north-africa';
  const lineOf = (id, key) => { const entry = PLACES.find(p => p.id === id); return entry[key] || entry.reason; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-oman', strand: MAP, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Oman' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: MAP, right: 'oman' }],
      steps: [step('area', AREA, 'Oman is in the Arabian Peninsula, the big peninsula of Western Asia that the world map\'s parts of Asia showed. Start from Saudi Arabia, the huge country that fills most of it.'),
        step('touch', TOUCH, 'Yemen is on its west side and Saudi Arabia on its north-west. Oman curves round the south-east corner of the peninsula.'),
        step('water', WATER, 'The Arabian Sea, named on the first view, runs along its long south-east coast. Tap the country along that sea, east of Yemen.')],
      reason: lineOf('oman', 'cue') },
    { id: 'w-name-egypt', strand: MAP, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: MAP, lit: ['egypt'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Egypt'] }],
      steps: [step('area', AREA, 'The lit country is in the north-east corner of Africa: Northern Africa, which the world map\'s parts of Africa showed, runs from Morocco in the west to Egypt in the east.'),
        step('touch', TOUCH, 'Libya is on its west side and Sudan below it, as the Nile view showed.'),
        step('water', WATER, 'The Mediterranean, named on the map of western Europe, is along its top and the Red Sea on its east, joined by the Suez Canal. The country that holds the Suez Canal is Egypt.')],
      reason: lineOf('egypt', 'cue') },
    { id: 'w-border-yemen', strand: MAP, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Yemen?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: MAP, of: 'yemen' }],
      steps: [step('area', AREA, 'Yemen is the south-west corner of the Arabian Peninsula, at the bottom of Saudi Arabia.'),
        step('touch', TOUCH, 'Saudi Arabia is on its north and Oman on its east: tap Saudi Arabia.'),
        step('water', WATER, 'Yemen has three coasts: the Red Sea on the west, the Gulf of Aden on the south and the Arabian Sea on the east. Tap the Gulf of Aden.')],
      reason: lineOf('yemen', 'cue') },
    { id: 'w-flag-egypt', strand: 'arabia-north-africa-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['egypt'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: MAP, right: 'egypt' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'Three flat stripes, red, white and black from the top, with a gold eagle in the middle of the white one.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Yemen has the same three stripes with nothing on them, and Sudan has them with a green triangle on the left. The eagle on the white stripe is Egypt.'),
        step('find', 'Find the country.', 'Egypt is the north-east corner of Africa, on the Mediterranean and the Red Sea, with the Suez Canal. Tap it.')],
      reason: lineOf('egypt', 'flagLine') }
  ]);
})();
