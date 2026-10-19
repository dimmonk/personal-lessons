// Geography, the Balkans and the south of Europe: the two groups of places parts 19 and 19b ask about, made into questions from the map data `balkans`, and the three
// worked cases and the worked flag those parts open with. Fourteen places: the twelve countries (Slovenia to Greece, Bulgaria, and the islands of Cyprus and Malta) and the
// two seas, the Adriatic and the Aegean. The map group (part 19) asks a name to tap, a lit place to name and, of a country with neighbors, a neighbor and its water. The flag
// group (part 19b) asks a flag to tap, of the twelve countries. Both are made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water (the
// map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A sea has no neighbors on land, so it has its own `reason`.
// A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the places each country is among, and its position against its neighbors and seas, are the CIA World Factbook's "Location" lines for these countries; neighbors and
// water are the map data's (Natural Earth, public domain). The world map taught in lesson 1b is the United Nations': it puts Slovenia to North Macedonia, Greece and Malta in
// Southern Europe, Bulgaria in Eastern Europe, and Cyprus in Western Asia; lesson 19 says it takes the Balkans and the islands near them as one group.
// Flags: each `flagLine` was checked on 2026-10-18 against the Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook page taken in
// January 2026 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page. One difference:
// for Slovenia the Factbook puts the seal "at the center"; the real flag has it at the upper left (with the stars), which the line says.
// Malta and Cyprus are islands with no neighbor on land, so they are asked a name to tap and a lit name but never a neighbor and its water.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  // Kosovo has no flag emoji (🇽🇰 is not in the standard and shows as two letters on most phones), so its flag is drawn: blue, the country in gold (its outline from the map data, simplified)
  // under six white stars in an arc, one for each of its peoples (CIA World Factbook, "Flag": "a dark blue field with a gold-colored silhouette of Kosovo in the center, with six
  // five-pointed white stars in a slight arc over it"; the stars are drawn above the map)
  const KOSOVO_FLAG = { box: [70, 50], said: 'a flag no emoji draws, drawn here: blue, with six white stars in an arc above a gold map of the country', layers: [
    ['rect', '#244AA5', 0, 0, 70, 50],
    ['path', '#D0A650', 'M43.6 38.5L41.4 39.0L40.0 41.0L38.2 39.7L37.2 39.8L33.6 41.5L32.9 45.0L31.0 45.1L30.3 39.8L28.8 38.0L26.7 36.9L24.4 33.3L24.8 31.8L24.0 30.1L24.3 29.6L26.1 29.7L26.4 28.9L29.6 27.9L29.7 26.2L31.9 24.2L31.6 22.0L33.8 20.9L34.4 22.4L37.1 23.8L39.4 26.9L41.5 28.4L41.4 29.7L46.0 31.2L44.2 36.1L43.0 37.1Z'],
    ...Array.from({ length: 6 }, (_, i) => ['star', '#FFFFFF', Number((35 + 21 * Math.cos((-150 + 24 * i) * Math.PI / 180)).toFixed(1)), Number((34 + 21 * Math.sin((-150 + 24 * i) * Math.PI / 180)).toFixed(1)), 2.6])
  ] };
  const place = (id, name, flag, area, cue, flagLine, accept = [name], forms) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}), ...(forms ? { forms } : {}) });
  const PLACES = [
    place('slovenia', 'Slovenia', '🇸🇮', 'the north-west edge of the Balkans, at the head of the Adriatic',
      'Tell it from Slovakia: Slovenia is the small country at the head of the Adriatic, between Italy and Croatia; Slovakia is inland in central Europe, next to Ukraine.',
      'Three flat stripes, white on top, then blue and red, with a small shield on the upper left that holds a white mountain. Croatia and Serbia both have red on top.'),
    place('croatia', 'Croatia', '🇭🇷', 'the north-west of the Balkans, curving along the Adriatic coast',
      'It is the crescent that curls round Bosnia and Herzegovina, with the long Adriatic coast; Slovenia is the small country at its north-west end.',
      'Three flat stripes, red on top, then white and blue, with a red-and-white checkered shield in the middle. Serbia has blue in the middle and its shield on the left.'),
    place('bosnia-and-herzegovina', 'Bosnia and Herzegovina', '🇧🇦', 'the west of the Balkans, inland, behind the Croatian coast',
      'It is the country shut in by Croatia on three sides, with only a few miles of Adriatic coast.',
      'Blue with a big yellow triangle and a row of white stars along its slanted edge. Kosovo has a blue flag too, with six white stars in an arc above a gold map of the country.',
      ['Bosnia and Herzegovina', 'Bosnia']),
    place('serbia', 'Serbia', '🇷🇸', 'the middle of the Balkans, the big inland country',
      'Tell it from Kosovo: Serbia is the big inland country in the middle of the Balkans, with eight neighbors; Kosovo is the small one at its south.',
      'Three flat stripes, red on top, then blue and white, with a shield on the left. Croatia has white in the middle and a checkered shield.'),
    place('montenegro', 'Montenegro', '🇲🇪', 'the south-west of the Balkans, on the Adriatic coast',
      'Tell it from North Macedonia: Montenegro is the small one on the Adriatic coast; North Macedonia is the inland one farther south-east, north of Greece.',
      'Red with a thin gold border and a gold double-headed eagle in the middle. Albania is red with a black eagle and no border.'),
    place('kosovo', 'Kosovo', KOSOVO_FLAG, 'the south of the Balkans, a small inland country south of Serbia',
      'Tell it from Serbia: Kosovo is the small inland country at the south of Serbia, with Albania on its south-west; Serbia is the big one on its north and east.',
      'Blue with six white stars in an arc above a gold map of the country. Bosnia and Herzegovina is blue too, with a yellow triangle.'),
    place('albania', 'Albania', '🇦🇱', 'the south-west of the Balkans, on the Adriatic and Ionian coast',
      'It is the coast country between Montenegro in the north and Greece in the south.',
      'Red with a black double-headed eagle in the middle. Montenegro is red with a gold eagle and a gold border.'),
    place('north-macedonia', 'North Macedonia', '🇲🇰', 'the south of the Balkans, inland, north of Greece',
      'Tell it from Montenegro: North Macedonia is the inland one just north of Greece; Montenegro is the small one on the Adriatic coast.',
      'Red with a yellow sun in the middle, its rays reaching the edges.',
      ['North Macedonia', 'Macedonia']),
    place('greece', 'Greece', '🇬🇷', 'the far south of the Balkans, the peninsula and the islands between the Ionian Sea and the Aegean',
      'It is the southernmost of the Balkan countries, reaching into the Mediterranean, with the Aegean on its east and the Ionian on its west.',
      'Nine flat stripes, blue and white in turn, with a white cross on a blue square at the top left.'),
    place('bulgaria', 'Bulgaria', '🇧🇬', 'the east of the Balkans, on the Black Sea',
      'It is the Balkan country on the Black Sea, between Romania in the north and Greece and Türkiye in the south.',
      'Three flat stripes, white on top, then green and red, with nothing on them.'),
    place('cyprus', 'Cyprus', '🇨🇾', 'the far east of the Mediterranean, an island just south of Türkiye',
      'Tell it from Malta: Cyprus is the big island far to the east, just south of Türkiye; Malta is the tiny one in the middle of the sea, south of Italy.',
      'White with a copper-colored shape of the island above two green olive branches.'),
    place('malta', 'Malta', '🇲🇹', 'the middle of the Mediterranean, a tiny group of islands south of Sicily, which is Italy',
      'Tell it from Cyprus: Malta is the tiny island group in the middle of the sea, south of Italy; Cyprus is the big island far to the east, south of Türkiye.',
      'Two upright halves, white on the left and red on the right, with a small cross edged in red in the top left corner.'),
    // a sea has no neighbors on land, so it gives its own line: which countries lie on it is the map data's (their `water` holds it)
    { id: 'adriatic', name: 'Adriatic Sea', accept: ['Adriatic Sea', 'Adriatic'],
      reason: 'The Adriatic is the long sea between Italy and the Balkans: Italy is on its west shore, and Slovenia, Croatia, Bosnia and Herzegovina, Montenegro and Albania on its east. Tell it from the Aegean: the Adriatic is the one west of the Balkans; the Aegean is the one east of Greece.' },
    { id: 'aegean', name: 'Aegean Sea', accept: ['Aegean Sea', 'Aegean'],
      reason: 'The Aegean is the sea between Greece on its west and Türkiye on its east, with the Greek islands scattered in it. Tell it from the Adriatic: the Aegean is the one east of Greece; the Adriatic is the long one between Italy and the Balkans.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, forms, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-balkans', strand: 'balkans',
      places: { map: 'balkans', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('slovenia-slovakia', ['slovenia']), ...pairs('serbia-kosovo', ['serbia', 'kosovo']), ...pairs('montenegro-north-macedonia', ['montenegro', 'north-macedonia']),
          ...pairs('adriatic-aegean', ['adriatic', 'aegean']), ...pairs('malta-cyprus', ['malta', 'cyprus']) },
        list: PLACES.map(bare) } },
    { id: 'g-balkans-flags', strand: 'balkans-flags',
      places: { map: 'balkans', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-balkan-tricolors', ['slovenia', 'croatia', 'serbia']), ...pairs('flags-albania-montenegro', ['albania', 'montenegro']),
          ...pairs('flags-bosnia-kosovo', ['bosnia-and-herzegovina', 'kosovo']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // The worked cases, each shown done before the learner's first try, in the steps of the way of thinking (the area, what touches it, the water) and using only what
  // the names screens of part 19 showed; the learner is anchored on places already placed (Austria and Italy from the map of western Europe, the Adriatic named there and again on the first screen).
  // Same shape as items-worked-us.js.
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const GEN = 'g-balkans', STRAND = 'balkans', FLAGS = 'g-balkans-flags';
  FC.items('geography', [
    { id: 'w-tap-slovenia', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Slovenia' }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(GEN).words.tap, map: groupOf(GEN).map, right: 'slovenia' }],
      steps: [
        step('area', AREA, 'Slovenia is at the north-west edge of the Balkans, at the head of the Adriatic, the sea between Italy and the Balkans.'),
        step('touch', TOUCH, 'Austria and Italy, both placed on the map of western Europe, are on its north and west; Croatia curls round it on the south and east.'),
        step('water', WATER, 'Only a short strip of the Adriatic reaches it, in the south-west. Tap the small country between Austria and Croatia, at the top of the Adriatic.')],
      reason: lineOf(GEN, 'slovenia') },
    { id: 'w-name-albania', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: groupOf(GEN).words.name }, { kind: 'map', region: groupOf(GEN).map, lit: ['albania'] }],
      asks: [{ id: 'name', kind: 'text', prompt: groupOf(GEN).words.name, accept: groupOf(GEN).list.find(p => p.id === 'albania').accept }],
      steps: [
        step('area', AREA, 'The lit country is in the south-west of the Balkans, on the coast across the sea from Italy, which is placed on the map of western Europe.'),
        step('touch', TOUCH, 'Montenegro is on its north, Kosovo and North Macedonia on its east and Greece below it, as the second screen showed.'),
        step('water', WATER, 'The Adriatic is on its west, with the Ionian Sea to the south. The coast country between Montenegro and Greece is Albania.')],
      reason: lineOf(GEN, 'albania') },
    { id: 'w-border-bulgaria', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Bulgaria?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: groupOf(GEN).words.border, map: groupOf(GEN).map, of: 'bulgaria' }],
      steps: [
        step('area', AREA, 'Bulgaria is in the east of the Balkans, with the Black Sea along its east side.'),
        step('touch', TOUCH, 'Romania is along its north, as the third screen showed: tap Romania.'),
        step('water', WATER, 'The Black Sea is its whole east coast: tap the Black Sea.')],
      reason: lineOf(GEN, 'bulgaria') },
    { id: 'w-flag-croatia', strand: 'balkans-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['croatia'] }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(FLAGS).words.flag, map: groupOf(FLAGS).map, right: 'croatia' }],
      steps: [
        step('read', 'Read the flag: how many stripes, which way they run, which colors.', 'Three stripes, lying flat, red on top, then white and blue, with a red-and-white checkered shield in the middle.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Serbia has the same colors with blue in the middle and its shield on the left; Slovenia has white on top. The checkered shield on the white makes this one Croatia\'s.'),
        step('find', 'Find the country.', 'Croatia is the crescent along the Adriatic coast in the north-west of the Balkans, under Slovenia. Tap it.')],
      reason: groupOf(FLAGS).list.find(p => p.id === 'croatia').flagLine }
  ]);
})();
