// Geography, East Africa and the Horn: the two groups of places parts 24 and 24b ask about, made into questions from the map data `africa-east`. Fourteen places:
// the twelve countries (the Horn, South Sudan, the Great Lakes, Kenya and Tanzania, the two island countries), the Nile and Lake Victoria. The map group (part 24)
// asks a name to tap, a lit place to name and, of a country that touches another, a neighbor and its water. The flag group (part 24b) asks a flag to tap, of the
// twelve countries. Both are made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. The Nile and Lake Victoria are not ground
// with neighbors, so each has its own `reason`. A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the borders and the water are the map data's (Natural Earth v5.1.2); the flags and the date South Sudan became a country (2011) are the CIA World Factbook's;
// the Nile's course and Lake Victoria's size are standard references (the Factbook's Africa pages, the Encyclopaedia Britannica). Flag descriptions checked 2026-10-18 against the
// Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026). Tanzania's water list from the map
// data is the Indian Ocean, Lake Tanganyika and Lake Victoria; Natural Earth draws its border along Lake Malawi's shore, so Lake Malawi, a big lake, is not in Tanzania's water.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const HORN = 'the Horn of Africa, the point of land in the northeast that juts out into the Indian Ocean';
  const NILE_LAND = 'the upper Nile, the land along the Nile south of Sudan', LAKES = 'the Great Lakes of East Africa, around Lake Victoria';
  const COAST = 'East Africa, on the Indian Ocean', ISLES = 'the islands of the Indian Ocean';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const COUNTRIES = [
    place('eritrea', 'Eritrea', '🇪🇷', `${HORN}, its northern end on the Red Sea`,
      'Tell it from Djibouti and Ethiopia: Eritrea is the one on the Red Sea in the north of the Horn, beside Sudan; Djibouti is the tiny one at the mouth of the Red Sea; Ethiopia is the big one behind them, with no coast.',
      'A red triangle on the left, with green above and blue below, and a gold olive wreath in the triangle.'),
    place('djibouti', 'Djibouti', '🇩🇯', `${HORN}, its small corner where the Red Sea meets the Gulf of Aden`,
      'Tell it from Eritrea: Djibouti is the tiny one at the mouth of the Red Sea, on the Gulf of Aden; Eritrea is the larger one up the Red Sea, beside Sudan.',
      'Light blue over green, with a white triangle on the left holding a red star. Somalia is plain light blue with a white star.', ['Djibouti', 'Jibuti']),
    place('ethiopia', 'Ethiopia', '🇪🇹', `${HORN}, the large country inland behind the coast`,
      'It is the largest country of the Horn and the one with no coast: Eritrea, Djibouti and Somalia lie between it and the sea.',
      'Flat stripes of green, yellow and red, with a blue disc holding a yellow star.'),
    place('somalia', 'Somalia', '🇸🇴', `${HORN}, its tip and its long coast on the Indian Ocean`,
      'It is the country at the tip of the Horn, with the long coast on the Gulf of Aden and the Indian Ocean; Ethiopia is behind it, inland.',
      'Plain light blue with one white star. Djibouti has green under its blue and a white triangle.'),
    place('south-sudan', 'South Sudan', '🇸🇸', NILE_LAND,
      'Tell it from Sudan: South Sudan is the newer country in the south, with no coast; Sudan is the large one to its north, on the Red Sea.',
      'Flat black, red and green stripes with thin white lines, and a blue triangle on the left holding a gold star. Kenya has a shield instead.'),
    place('uganda', 'Uganda', '🇺🇬', `${LAKES}, north of the lake`,
      'It is the country north of Lake Victoria, with no sea coast; the Nile runs north out of the lake through it.',
      'Six flat stripes, black, yellow and red twice over, with a white disc holding a gray crane.'),
    place('rwanda', 'Rwanda', '🇷🇼', `${LAKES}, a small country west of the lake`,
      'Tell it from Burundi: Rwanda is the northern one, the only one of the two that touches Uganda; Burundi is the southern one, which is on Lake Tanganyika.',
      'Flat bands of wide sky blue, yellow and green, with a golden sun on the blue at the right.'),
    place('burundi', 'Burundi', '🇧🇮', `${LAKES}, a small country south of Rwanda`,
      'Tell it from Rwanda: Burundi is the southern one, which does not touch Uganda and is on Lake Tanganyika; Rwanda is the northern one, which touches Uganda.',
      'A white diagonal cross with red above and below, green at the sides, and a white disc holding three red stars.'),
    place('kenya', 'Kenya', '🇰🇪', `${COAST}, east of Lake Victoria`,
      'Tell it from Tanzania: Kenya is the northern one, touching Somalia, Ethiopia and South Sudan; Tanzania is the larger one to its south.',
      'Flat black, red and green stripes with thin white lines, and a red and black shield with crossed spears. South Sudan has a blue triangle instead.'),
    place('tanzania', 'Tanzania', '🇹🇿', `${COAST}, south of Lake Victoria and Kenya`,
      'Tell it from Kenya: Tanzania is the larger southern one, with Malawi, Mozambique and Zambia on its south; Kenya is the northern one.',
      'A black diagonal band edged in yellow, with green above on the left and blue below on the right.'),
    place('seychelles', 'Seychelles', '🇸🇨', `${ISLES}, far off the East African coast`,
      'Tell it from Comoros: Seychelles is the group of islands far out in the Indian Ocean, east of Kenya and Tanzania; Comoros is the few islands in the Mozambique Channel.',
      'Five bands fanning out from the bottom left corner: blue, yellow, red, white and green.', ['Seychelles']),
    place('comoros', 'Comoros', '🇰🇲', `${ISLES}, in the Mozambique Channel between Mozambique and Madagascar`,
      'Tell it from Seychelles: Comoros is the few islands in the Mozambique Channel, between Mozambique and Madagascar; Seychelles is far out in the Indian Ocean, to the east.',
      'Four flat stripes, yellow, white, red and blue, with a green triangle on the left holding a white crescent and four stars.', ['Comoros', 'Comoro Islands'])
  ];
  // the water a question asks for is a sea, an ocean or a big lake (Lake Victoria is Uganda's, Kenya's and Tanzania's): the Nile and Lake Victoria are here to be tapped and named, and have no neighbors or coast to be asked
  const FEATURES = [
    { id: 'nile-river', name: 'Nile River', accept: ['Nile River', 'Nile'],
      reason: 'The Nile runs north out of Lake Victoria, through Uganda and South Sudan and on into Sudan; the Blue Nile joins it from Ethiopia.' },
    { id: 'lake-victoria', name: 'Lake Victoria', accept: ['Lake Victoria', 'Victoria'],
      reason: "Lake Victoria is Africa's biggest lake, shared by Uganda, Kenya and Tanzania in the middle of the Great Lakes; Rwanda and Burundi lie beyond its west shore, and the Nile runs out of it to the north." }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-africa-east', strand: 'africa-east',
      places: { map: 'africa-east', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('rwanda-burundi', ['rwanda', 'burundi']), ...pairs('sudan-south-sudan', ['sudan', 'south-sudan']), ...pairs('horn-coasts', ['eritrea', 'djibouti', 'somalia']),
          ...pairs('kenya-tanzania', ['kenya', 'tanzania']), ...pairs('seychelles-comoros', ['seychelles', 'comoros']) },
        list: [...COUNTRIES.map(bare), ...FEATURES] } },
    { id: 'g-africa-east-flags', strand: 'africa-east-flags',
      places: { map: 'africa-east', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-kenya-south-sudan', ['kenya', 'south-sudan']), ...pairs('flags-somalia-djibouti', ['somalia', 'djibouti']) },
        list: COUNTRIES.map(flagged) } }
  ]);

  // The worked cases of parts 24 and 24b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the names
  // screens showed (or from part 1, where East Africa and the Indian Ocean were placed), then what touches the place, then its water. Each ends on the place's own line.
  const STRAND = 'africa-east', FLAGS_STRAND = 'africa-east-flags', FLAGS = 'g-africa-east-flags';
  const lineOf = (id, key) => COUNTRIES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-tanzania', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Tanzania' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'africa-east', right: 'tanzania' }],
      steps: [step('area', AREA, 'Tanzania is in East Africa, the side of Africa on the Indian Ocean that part 1 placed. Start from Lake Victoria, named on the Great Lakes screen.'),
        step('touch', TOUCH, 'Kenya is the country above it and Uganda the one across the lake; Rwanda and Burundi sit on its western edge, as that screen showed. Tanzania is the large country south of all of them.'),
        step('water', WATER, 'Its coast is on the Indian Ocean, the ocean on Africa\'s east side, placed in part 1. Tap the large country south of Kenya.')],
      reason: lineOf('tanzania', 'cue') },
    { id: 'w-name-ethiopia', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'africa-east', lit: ['ethiopia'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Ethiopia'] }],
      steps: [step('area', AREA, 'The lit country is in the northeast corner of Africa, in the Horn, the point of land that juts out into the Indian Ocean.'),
        step('touch', TOUCH, 'Eritrea is above it, Djibouti and Somalia on its east side, Kenya below it, and Sudan and South Sudan on its west, as the screens showed.'),
        step('water', WATER, 'No sea touches it: Eritrea, Djibouti and Somalia lie between it and the water. The big country of the Horn with no coast is Ethiopia.')],
      reason: lineOf('ethiopia', 'cue') },
    { id: 'w-border-uganda', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Uganda?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'africa-east', of: 'uganda' }],
      steps: [step('area', AREA, 'Uganda is in the Great Lakes of East Africa, just north of Lake Victoria.'),
        step('touch', TOUCH, 'Kenya is along its east side: tap Kenya.'),
        step('water', WATER, 'No sea reaches Uganda: Kenya and Tanzania lie between it and the Indian Ocean. But Lake Victoria, a lake as big as a sea, is on its south side, so it is not landlocked. Tap Lake Victoria.')],
      reason: lineOf('uganda', 'cue') },
    { id: 'w-flag-kenya', strand: FLAGS_STRAND, facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['kenya'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'africa-east', right: 'kenya' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'Three flat stripes, black, red and green from the top, with a thin white line between them, and a shield with two crossed spears in the middle.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'South Sudan has the same three colors and the white lines, with a blue triangle on the left instead of a shield. Kenya has the shield and no triangle.'),
        step('find', 'Find the country.', 'Kenya is the country on the Indian Ocean east of Lake Victoria, north of Tanzania. Tap it.')],
      reason: lineOf('kenya', 'flagLine') }
  ]);
})();
