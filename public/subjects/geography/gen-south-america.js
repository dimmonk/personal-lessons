// Geography, South America: the two groups of places parts 15 and 15b ask about, made into questions from the map data `south-america`. Fifteen places: the twelve
// countries, French Guiana (a part of France, not a country, so it has no flag), the Andes and the Amazon. The map group (part 15) asks a name to tap, a lit place to
// name and a neighbor and its water (the two features are only tapped: a range and a river have neither neighbors nor a name worth typing). The flag group (part 15b) asks
// a flag to tap, of the twelve countries. Both are made from the one list of places below, so a place has one name, one set of spellings, one area and one cue.
// Each country's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its water
// (the map data's, Natural Earth, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A wrong tap on a place that is
// often mixed up carries its slip (the subject's `lists.slip`). A flag question opens its feedback with the place's `flagLine`, the one thing that tells the flag from the
// one it is mistaken for (flag descriptions: the CIA World Factbook, "Flag", checked on 2026-10-18 country by country, the code of each in the comment above its place; cia.gov's own pages now redirect to the Factbook's farewell story, so the text was read from
// the factbook/factbook.json mirror, github.com/factbook/factbook.json, the CIA's own text; main languages and French Guiana's status: the same book, country pages).
// The worked cases of both parts are at the end of this file (the way items-worked-us.js does for the United States and western Europe), so a place has one line.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const PACIFIC = 'the Pacific side of South America, along the Andes', NORTH = 'the north coast of South America';
  const GUIANAS = 'the three Guianas, the small lands on the north-east coast, between Venezuela and Brazil';
  const MIDDLE = 'the middle of South America, inland', SOUTH = 'the south of South America';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}) });
  const COUNTRIES = [
    // flag: CIA World Factbook, Colombia (co), Flag
    place('colombia', 'Colombia', '🇨🇴', `${NORTH}, in its north-west corner, on the Pacific side too`, 'Tell it from Venezuela: Colombia is the north-west corner, the only one of the twelve with a coast on both the Pacific and the Caribbean; Venezuela is east of it.',
      'Three flat stripes, yellow, blue and red, the yellow twice as wide as each of the others, with no mark on it. Venezuela and Ecuador have the same colors with a mark.'),
    // flag: CIA World Factbook, Venezuela (ve), Flag
    place('venezuela', 'Venezuela', '🇻🇪', NORTH, 'Tell it from Colombia: Venezuela is east of Colombia, on the Caribbean coast, with Guyana on its east side.',
      'Three equal flat stripes, yellow, blue and red, with a small coat of arms at the left of the yellow one and an arc of eight white stars on the blue one. Colombia has no mark; Ecuador has a larger coat of arms in the middle and no stars.'),
    // flag: CIA World Factbook, Ecuador (ec), Flag
    place('ecuador', 'Ecuador', '🇪🇨', `${PACIFIC}, on the equator`, 'It is the small one on the equator, between Colombia and Peru; its name is Spanish for "equator".',
      'Three flat stripes, yellow, blue and red, the yellow twice as wide, with a coat of arms in the middle of the flag. Colombia has no mark; Venezuela has stars on the blue.'),
    // flag: CIA World Factbook, Peru (pe), Flag
    place('peru', 'Peru', '🇵🇪', `${PACIFIC}, its middle`, 'It is the big country of the Pacific side, under Ecuador and Colombia, with Brazil on its east and Bolivia and Chile to its south.',
      'Three upright stripes, red, white and red; the white one may carry a small coat of arms.'),
    // flag: CIA World Factbook, Bolivia (bl), Flag
    place('bolivia', 'Bolivia', '🇧🇴', `${MIDDLE}, high in the Andes, behind Peru and Chile`, 'Tell it from Paraguay: Bolivia is the bigger of the two countries with no coast, in the west, high in the Andes; Paraguay is the smaller one south-east of it.',
      'Three flat stripes, red, yellow and green from the top; the yellow one may carry a coat of arms.'),
    // flag: CIA World Factbook, Chile (ci), Flag
    place('chile', 'Chile', '🇨🇱', `${PACIFIC}, in the south`, 'Tell it from Argentina: Chile is the long thin strip between the Andes and the Pacific; Argentina is the wide country east of the Andes. Chile\'s long coast is on the Pacific; at its far southern tip the Strait of Magellan runs through to the Atlantic, which is why the water line lists the Atlantic too.',
      'Two flat halves, white on top and red below, with a blue square in the top corner holding one white star.'),
    // flag: CIA World Factbook, Brazil (br), Flag
    place('brazil', 'Brazil', '🇧🇷', 'the east and middle of South America, the biggest part of the continent', 'It is the giant: it fills about half of the continent and touches every other country here except Chile and Ecuador.',
      'A green flag with a big yellow diamond, and in it a blue circle with white stars and a white band.'),
    // flag: CIA World Factbook, Guyana (gy), Flag
    place('guyana', 'Guyana', '🇬🇾', GUIANAS, 'Tell it from Suriname and French Guiana: Guyana is the western one, next to Venezuela; its main language is English.',
      'A green flag with a long yellow arrowhead pointing to the right, and a red arrowhead inside it, with thin white and black edges.'),
    // flag: CIA World Factbook, Suriname (ns), Flag
    place('suriname', 'Suriname', '🇸🇷', GUIANAS, 'Tell it from Guyana and French Guiana: Suriname is the middle one; its main language is Dutch.',
      'Five flat stripes, green, white, a wide red, white and green, with a yellow star in the red.'),
    // French Guiana is an overseas part of France, not a country (CIA World Factbook): it has no flag of its own here, so it is never asked as a flag
    place('french-guiana', 'French Guiana', undefined, GUIANAS, 'It is not a country: it is a part of France, the eastern one of the three Guianas, next to Brazil; its main language is French.',
      undefined, ['French Guiana', 'Guyane']),
    // flag: CIA World Factbook, Paraguay (pa), Flag
    place('paraguay', 'Paraguay', '🇵🇾', `${MIDDLE}, south of Bolivia`, 'Tell it from Uruguay: Paraguay is inland with no coast, between Bolivia, Brazil and Argentina; Uruguay is on the Atlantic coast.',
      'Three flat stripes, red, white and blue, with a round emblem in the white one (a different emblem on each side of the flag).'),
    // flag: CIA World Factbook, Uruguay (uy), Flag
    place('uruguay', 'Uruguay', '🇺🇾', `${SOUTH}, on the Atlantic coast below Brazil`, 'Tell it from Paraguay: Uruguay is the small one on the Atlantic coast, between Argentina and Brazil; Paraguay is inland.',
      'Nine flat stripes, white and blue in turn, with a white square in the top corner holding a yellow sun. Argentina has three stripes.'),
    // flag: CIA World Factbook, Argentina (ar), Flag
    place('argentina', 'Argentina', '🇦🇷', `${SOUTH}, east of the Andes`, 'Tell it from Chile: Argentina is the big country east of the Andes, widest in the north and narrowing to the south, on the Atlantic; Chile is the thin strip on the Pacific.',
      'Three flat stripes, light blue, white and light blue, with a yellow sun in the white one. Uruguay has nine stripes.')
  ];
  const FEATURES = [
    { id: 'andes', name: 'The Andes', accept: ['The Andes', 'Andes'], forms: ['tap'],
      reason: 'The Andes are the long mountain range down the whole Pacific side of South America, from Venezuela and Colombia in the north through Ecuador, Peru, Bolivia and Chile to Argentina in the south.' },
    { id: 'amazon-river', name: 'Amazon River', accept: ['Amazon River', 'Amazon', 'The Amazon'], forms: ['tap'],
      reason: 'The Amazon River runs across the north of Brazil, from the Andes in Peru to the Atlantic on the north-east coast; it carries more water than any other river in the world.' }
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-south-america', strand: 'south-america',
      places: { map: 'south-america', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('the-guianas', ['guyana', 'suriname', 'french-guiana']), ...pairs('paraguay-uruguay', ['paraguay', 'uruguay']), ...pairs('colombia-venezuela', ['colombia', 'venezuela']),
          ...pairs('andean-three', ['ecuador', 'peru', 'bolivia']), ...pairs('chile-argentina', ['chile', 'argentina']) },
        list: [...COUNTRIES.map(bare), ...FEATURES] } },
    { id: 'g-south-america-flags', strand: 'south-america-flags',
      places: { map: 'south-america', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-yellow-blue-red', ['colombia', 'venezuela', 'ecuador']), ...pairs('flags-argentina-uruguay', ['argentina', 'uruguay']) },
        list: COUNTRIES.filter(p => p.flagLine).map(flagged) } }
  ]);

  // ---------- the worked cases of parts 15 and 15b, in the steps of the way of thinking (the same shapes as items-worked-us.js) ----------
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const G = 'g-south-america', GF = 'g-south-america-flags', S = 'south-america';
  FC.items('geography', [
    { id: 'w-tap-peru', strand: S, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Peru' }],
      asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: S, right: 'peru' }], reason: lineOf(G, 'peru'), steps: [
        step('area', AREA, 'Peru is on the Pacific side, in the middle of the Andes coast. Start from the Pacific Ocean, which you met in The continents and the oceans, on the left of the map.'),
        step('touch', TOUCH, 'Follow the coast up from the south: Chile first, then Peru, the big country; Ecuador and Colombia come after it, higher up.'),
        step('water', WATER, 'Its whole coast is on the Pacific. Tap inside it.')] },
    { id: 'w-name-brazil', strand: S, facets: { form: 'name' }, blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: S, lit: ['brazil'] }],
      asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: ['Brazil'] }], reason: lineOf(G, 'brazil'), steps: [
        step('area', AREA, 'The lit country fills the east and the middle of South America, the biggest part of the continent.'),
        step('touch', TOUCH, 'It touches nearly every other country, from the Guianas in the north round to Uruguay in the south, as the screens showed; only Chile and Ecuador are left out.'),
        step('water', WATER, 'Its long coast is on the Atlantic, the ocean on the right of the map. The giant on the Atlantic is Brazil.')] },
    { id: 'w-landlocked-bolivia', strand: S, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Bolivia?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: S, of: 'bolivia' }], reason: lineOf(G, 'bolivia'), steps: [
        step('area', AREA, 'Bolivia is inland, high in the Andes, behind Peru and Chile, on the west of the middle of the continent.'),
        step('touch', TOUCH, 'Peru is along its north-west side: tap Peru.'),
        step('water', WATER, 'No sea or ocean reaches it: Peru and Chile are between it and the Pacific, and Brazil is between it and the Atlantic. So it is landlocked: tap Landlocked.')] },
    { id: 'w-flag-venezuela', strand: `${S}-flags`, facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: GF, places: ['venezuela'] }],
      asks: [{ id: 'where', kind: 'place', prompt: FLAG_WORDS.flag, map: S, right: 'venezuela' }], reason: groupOf(GF).list.find(p => p.id === 'venezuela').flagLine, steps: [
        step('read', 'Read the flag: how many stripes, which way they run, which colors.', 'Three flat stripes of the same width, yellow, blue and red from the top, with a curve of white stars on the blue one and a small coat of arms at the left of the yellow.'),
        step('tell', 'Tell it from the flag it is mistaken for.', 'Colombia and Ecuador have the same three colors in the same order. Colombia has nothing on it; Ecuador has a larger coat of arms in the middle of the flag; only Venezuela has the stars.'),
        step('find', 'Find the country.', 'Venezuela is on the north coast, east of Colombia, on the Caribbean Sea. Tap it.')] }
  ]);
})();
