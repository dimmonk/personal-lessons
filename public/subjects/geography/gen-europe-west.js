// Geography, western Europe: the two groups of places parts 16 and 16b ask about, made into questions from the map data `europe-west`. Fifteen places, from
// Iberia to Italy: the ten larger countries and the five microstates. The map group (part 16) asks a name to tap, a lit place to name and a neighbor and its water.
// The flag group (part 16b) asks a flag to tap, of the ten larger countries only (the five microstates' flags are not asked). Both are made from the one list of
// places below, so a place has one name, one set of spellings, one area and one cue.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A wrong tap on a place that is
// often mixed up carries its slip (the subject's `lists.slip`). A flag question opens its feedback with the place's `flagLine`, the one thing that tells the
// flag from the one it is mistaken for.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const IBERIA = 'Iberia, the peninsula in the far southwest of Europe', MAINLAND = 'the west of the mainland, between Iberia and the Alps';
  const LOW = 'the Low Countries, the flat land on the North Sea', MIDDLE = 'the middle of western Europe, north of the Alps';
  const ALPS = 'the Alps, the mountains between Germany and Italy', ITALY = "Italy's peninsula, the boot reaching into the Mediterranean";
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}) });
  const PLACES = [
    place('portugal', 'Portugal', '🇵🇹', `${IBERIA}, its narrow Atlantic strip`, 'Tell it from Spain: Portugal is the narrow strip on the Atlantic side, in the west; Spain is the large country that fills the rest.',
      'Two upright bands, green on the left and a wider band of red, with a gold sphere and a shield where they meet.'),
    place('spain', 'Spain', '🇪🇸', `${IBERIA}, most of it`, 'Tell it from Portugal: Spain is the large country that fills most of the peninsula; Portugal is the narrow strip on its west.',
      'Three flat stripes, red, yellow and red, the yellow one twice as wide, with a shield on the left.'),
    place('france', 'France', '🇫🇷', MAINLAND, 'It is the biggest country of the west of the mainland, with Spain under it and Belgium over it.',
      'Three upright stripes, blue, white and red, with the blue on the left.'),
    place('belgium', 'Belgium', '🇧🇪', LOW, 'Tell it from the Netherlands and Luxembourg: Belgium is the middle one of the three, between France and the Netherlands.',
      "Three upright stripes, black, yellow and red. Germany's three stripes lie flat."),
    place('netherlands', 'Netherlands', '🇳🇱', LOW, 'Tell it from Belgium: the Netherlands is the northern one, along the North Sea, north of Belgium and west of Germany.',
      "Three flat stripes, red, white and a deep blue. Luxembourg's blue is lighter.", ['Netherlands', 'Holland']),
    place('luxembourg', 'Luxembourg', '🇱🇺', LOW, "Tell it from Belgium: Luxembourg is the tiny one inland, on Belgium's southeast edge, with no coast.",
      "Three flat stripes, red, white and a light blue. The Netherlands' blue is deeper."),
    place('germany', 'Germany', '🇩🇪', MIDDLE, 'It is the big country across the middle, east of the Low Countries and France and north of Switzerland and Austria.',
      "Three flat stripes, black, red and gold. Belgium's three stripes stand upright."),
    place('austria', 'Austria', '🇦🇹', `${ALPS}, their eastern part`, 'Tell it from Switzerland: Austria is the longer one in the east; Switzerland is the smaller one in the west, the only one of the two that touches France.',
      'Three flat stripes, red, white and red.'),
    place('switzerland', 'Switzerland', '🇨🇭', `${ALPS}, their western part`, 'Tell it from Austria: Switzerland is the smaller one in the west, the only one of the two that touches France; Austria is the longer one in the east.',
      'A white cross on a red background.'),
    place('italy', 'Italy', '🇮🇹', ITALY, 'It is the boot, the one country of the region that reaches far south into the Mediterranean.',
      'Three upright stripes, green, white and red, with the green on the left. France has blue where Italy has green.'),
    place('andorra', 'Andorra', '🇦🇩', 'the Pyrenees, the mountains between Spain and France', 'Tell it from Monaco: Andorra is the tiny one up in the mountains; Monaco is on the coast.'),
    place('monaco', 'Monaco', '🇲🇨', 'the Mediterranean coast, in the south of France', 'Tell it from Andorra: Monaco is the tiny one on the Mediterranean coast; Andorra is up in the mountains.'),
    place('liechtenstein', 'Liechtenstein', '🇱🇮', ALPS, 'It is the tiny one between Switzerland and Austria.'),
    place('san-marino', 'San Marino', '🇸🇲', `${ITALY}, inland on its east side`, 'Tell it from Vatican City: San Marino is the tiny one on the east side of Italy, near the Adriatic; Vatican City is in Rome, on the west side.'),
    place('vatican-city', 'Vatican City', '🇻🇦', `${ITALY}, inside Rome on its west side`, 'Tell it from San Marino: Vatican City is the smallest country in the world, a few city blocks in Rome, on the west side; San Marino is on the east side.',
      undefined, ['Vatican City', 'Vatican'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-europe-west', strand: 'europe-west',
      places: { map: 'europe-west', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('spain-portugal', ['spain', 'portugal']), ...pairs('low-countries', ['belgium', 'netherlands', 'luxembourg']),
          ...pairs('austria-switzerland', ['austria', 'switzerland', 'liechtenstein']), ...pairs('andorra-monaco', ['andorra', 'monaco']), ...pairs('inside-italy', ['san-marino', 'vatican-city']) },
        list: PLACES.map(bare) } },
    { id: 'g-europe-west-flags', strand: 'europe-west-flags',
      places: { map: 'europe-west', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-red-white-blue', ['netherlands', 'luxembourg']), ...pairs('flags-black-yellow-red', ['belgium', 'germany']), ...pairs('flags-blue-white-red', ['france', 'italy']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);
})();
