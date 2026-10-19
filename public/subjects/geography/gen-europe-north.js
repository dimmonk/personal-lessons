// Geography, northern Europe: the two groups of places parts 17 and 17b ask about, made into questions from the map data `europe-north`. Ten places in three areas:
// the British Isles (the United Kingdom, Ireland), the Nordic five (Norway, Sweden, Denmark, Finland, Iceland) and the Baltic three (Estonia, Latvia, Lithuania).
// The map group (part 17) asks a name to tap, a lit place to name and a neighbor and its water. The flag group (part 17b) asks a flag to tap. Both are made from the
// one list of places below, so a place has one name, one set of spellings, one area and one cue. The worked cases both parts open with are at the end of this file.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A flag question opens its feedback
// with the place's `flagLine`, the one thing that tells the flag from the one it is mistaken for.
// Sources: the borders and the water are the map data's (Natural Earth); the group of five Nordic countries is the Nordic Council's (Denmark, Finland, Iceland, Norway,
// Sweden), and the Baltic states are Estonia, Latvia and Lithuania. The three areas are the world map's Northern Europe, split in three (the United Nations' region taught in lesson 1b).
// Flags: each `flagLine` was checked on 2026-10-18 against the CIA World Factbook's "Flag" field (description), read from the Internet Archive's copy of the Factbook page
// taken 2026-01-02 (cia.gov/the-world-factbook/countries/<country>/), because the Factbook closed in February 2026 and cia.gov now redirects to its farewell page.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const ISLES = 'the British Isles, the two big islands off the northwest coast of Europe', NORDIC = 'the Nordic countries, the five of the far north';
  const BALTIC = 'the Baltic states, the three small countries in a row on the southeast shore of the Baltic Sea';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, flagLine });
  const PLACES = [
    place('united-kingdom', 'United Kingdom', '🇬🇧', `${ISLES}: the eastern island, Great Britain, and the top corner of the island of Ireland`,
      'Tell it from Ireland: the United Kingdom is Great Britain, the big island in the east, plus the top corner of the island of Ireland; Ireland is the rest of that island, to the west.',
      'Blue, with a red upright cross edged in white and red and white diagonal crosses behind it. No other flag here has diagonal crosses.', ['United Kingdom', 'UK', 'Britain', 'Great Britain']),
    place('ireland', 'Ireland', '🇮🇪', `${ISLES}: the western island, across the Irish Sea from Great Britain`,
      'Tell it from Iceland and the United Kingdom: Ireland is the island just west of Great Britain, across the Irish Sea; Iceland is far out in the North Atlantic.',
      "Three upright stripes, green, white and orange, with the green on the left. Italy's flag is the same except that its third stripe is red."),
    place('iceland', 'Iceland', '🇮🇸', `${NORDIC}: the island far out in the North Atlantic, northwest of the British Isles`,
      'Tell it from Ireland: Iceland is the island far out in the North Atlantic, with no neighbor on land; Ireland is the island just west of Great Britain.',
      "Blue with a red cross edged in white. Norway's colors the other way round: Norway has a red field with a blue cross."),
    place('norway', 'Norway', '🇳🇴', `${NORDIC}: the long west and north side of Scandinavia, on the Norwegian Sea`,
      'Tell it from Sweden: Norway is the long one on the west, with the Norwegian Sea along its coast; Sweden is the larger one on the east, on the Baltic Sea.',
      "Red with a blue cross edged in white. Denmark's cross is plain white; Iceland has a blue field with a red cross."),
    place('sweden', 'Sweden', '🇸🇪', `${NORDIC}: the larger east side of Scandinavia, between Norway and the Baltic Sea`,
      'Tell it from Norway: Sweden is the larger one on the east, on the Baltic Sea; Norway is the long one on the west, on the Norwegian Sea.',
      "Blue with a yellow cross. Finland's flag is white with a blue cross."),
    place('denmark', 'Denmark', '🇩🇰', `${NORDIC}: the small peninsula pointing north from Germany, and its islands, between the North Sea and the Baltic`,
      'It is the small peninsula pointing north from Germany, between the North Sea and the Baltic Sea, and the only Nordic country that touches Germany.',
      "Red with a plain white cross. Norway adds a blue cross inside the white one."),
    place('finland', 'Finland', '🇫🇮', `${NORDIC}: east of Sweden, across the Gulf of Bothnia`,
      'It is the country east of Sweden across the Gulf of Bothnia, with Russia along its long eastern side.',
      "White with a blue cross. Sweden's flag is blue with a yellow cross."),
    place('estonia', 'Estonia', '🇪🇪', `${BALTIC}, the northern one`,
      'Tell it from Latvia and Lithuania: Estonia is the northern one of the three, on the Gulf of Finland, across the water from Finland.',
      'Three flat stripes, blue, black and white, from the top.'),
    place('latvia', 'Latvia', '🇱🇻', `${BALTIC}, the middle one`,
      'Tell it from Estonia and Lithuania: Latvia is the middle one of the three, between Estonia in the north and Lithuania in the south.',
      'Dark red with a thin white stripe across the middle.'),
    place('lithuania', 'Lithuania', '🇱🇹', `${BALTIC}, the southern one`,
      'Tell it from Latvia: Lithuania is the southern one of the three, with Poland to its south.',
      'Three flat stripes, yellow, green and red, from the top.')
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // an island with no neighbor on land has none to be asked for: Iceland is a name to tap or to type, nothing more
  const asked = p => (p.id === 'iceland' ? { ...bare(p), forms: ['tap', 'name'] } : bare(p));
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-europe-north', strand: 'europe-north',
      places: { map: 'europe-north', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('norway-sweden', ['norway', 'sweden']), ...pairs('baltic-three', ['estonia', 'latvia', 'lithuania']), ...pairs('ireland-iceland', ['ireland', 'united-kingdom', 'iceland']) },
        list: PLACES.map(asked) } },
    { id: 'g-europe-north-flags', strand: 'europe-north-flags',
      places: { map: 'europe-north', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-nordic-red-blue', ['denmark', 'norway', 'iceland']), ...pairs('flags-sweden-finland', ['sweden', 'finland']) },
        list: PLACES.map(flagged) } }
  ]);

  // The worked cases of parts 17 and 17b, each shown done before the learner's first try, in the steps of the way of thinking: the area first, found from what the
  // names screens showed (or from a lesson before), then what touches the place, then its water. Each ends on the place's own line (its cue, or for a flag its flagLine).
  const GEN = 'g-europe-north', FLAGS = 'g-europe-north-flags', STRAND = 'europe-north';
  const lineOf = (id, key) => PLACES.find(p => p.id === id)[key];
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  FC.items('geography', [
    { id: 'w-tap-denmark', strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Denmark' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: 'europe-north', right: 'denmark' }],
      steps: [step('area', AREA, 'Denmark is one of the Nordic five, the one at the bottom. Start from Germany, the big country of western Europe placed on the map of western Europe.'),
        step('touch', TOUCH, 'Germany is its only neighbor on land: Denmark is the small peninsula pointing north from the top of Germany, with the Scandinavian peninsula (Norway and Sweden) beyond the water to its north.'),
        step('water', WATER, 'The North Sea is on its west and the Baltic Sea on its east, the two seas the Nordic screen named. Tap the peninsula.')],
      reason: lineOf('denmark', 'cue') },
    { id: 'w-name-finland', strand: STRAND, facets: { form: 'name' },
      blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: 'europe-north', lit: ['finland'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Finland'] }],
      steps: [step('area', AREA, 'The lit country is in the far north of Europe, so it is one of the Nordic five, and it sits at their eastern edge.'),
        step('touch', TOUCH, 'Sweden is on its west side and Russia along its long east side, as the screens showed.'),
        step('water', WATER, 'The Gulf of Bothnia is on its west and the Gulf of Finland at its south. The Nordic country between those two gulfs, east of Sweden, is Finland.')],
      reason: lineOf('finland', 'cue') },
    { id: 'w-border-ireland', strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Ireland?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: 'europe-north', of: 'ireland' }],
      steps: [step('area', AREA, 'Ireland is the western of the two British Isles, the island just west of Great Britain.'),
        step('touch', TOUCH, 'The top corner of the island of Ireland, in the north, belongs to the United Kingdom, so the United Kingdom is its one neighbor on land: tap the United Kingdom.'),
        step('water', WATER, 'The Irish Sea is between the two islands and the Atlantic is on its other sides: tap the Irish Sea.')],
      reason: lineOf('ireland', 'cue') },
    { id: 'w-flag-norway', strand: 'europe-north-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: FLAGS, places: ['norway'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: 'europe-north', right: 'norway' }],
      steps: [step('read', 'Read the flag: how many stripes, which way they run, which colors, and any mark.', 'No stripes: it is a cross that reaches the four edges, placed toward the left. The field is red and the cross is blue, edged in white.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Denmark has the same shape with a plain white cross on red. Iceland has the same colors the other way round, a blue field with a red cross. Norway is red with the blue cross.'),
        step('find', 'Find the country.', 'Norway is the long Nordic country down the west side of Scandinavia, on the Norwegian Sea. Tap it.')],
      reason: lineOf('norway', 'flagLine') }
  ]);
})();
