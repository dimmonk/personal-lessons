// Geography, the Caribbean: the two groups of places parts 14 and 14b ask about, made into questions from the map data `caribbean`. Fourteen places: the four big
// islands' countries (Cuba, Jamaica, Haiti and the Dominican Republic) with Puerto Rico, the Bahamas, and the small island states of the Lesser Antilles, drawn as dots.
// The map group (part 14) asks a name to tap, a lit place to name and, for the two places that have a land neighbor on this map (Haiti and the Dominican Republic),
// a neighbor and its water. The other places are islands with no land border, so the map data gives them no neighbor and the app leaves them out of that
// question (place-gen.js placeAllowedForms); their feedback says "touches no other country by land" and names their water from the map data. Puerto Rico is a territory of the
// United States, not a country (CIA World Factbook), so it has no flag and is asked only as a place to tap. The flag group (part 14b) asks a flag to tap, of the thirteen
// countries. Both are made from the one list below, so a place has one name, one set of spellings, one area and one cue.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`. Where the data names no neighbor, the line says so. Islands between Antigua and Dominica and between Dominica and
// Saint Lucia are not countries, so the map does not draw them: Guadeloupe and Martinique belong to France, Montserrat is a British territory.
// Flags: the CIA World Factbook's flag descriptions, checked on 2026-10-18 country by country. cia.gov's own pages now redirect to the Factbook's farewell story, so the text was read from the
// factbook/factbook.json mirror (github.com/factbook/factbook.json, one file per country, the CIA's own text); the code of each country is in the comment above its place.
// Grouping: the world map (the parts lesson) calls all these islands "the Caribbean"; this lesson splits them into three groups (the Greater Antilles, the Bahamas, the Lesser Antilles) and says so on its first screen.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const FLAG_WORDS = { flag: 'Tap the country with this flag.' };
  const BIG = 'the Greater Antilles, the four big islands across the north of the Caribbean';
  const ARC = 'the Lesser Antilles, the arc of small islands that curves from Puerto Rico south toward Venezuela';
  const place = (id, name, flag, area, cue, flagLine, accept = [name]) => ({ id, name, flag, accept, area, cue, ...(flagLine ? { flagLine } : {}) });
  const PLACES = [
    // flag: CIA World Factbook, Cuba (cu), Flag
    place('cuba', 'Cuba', '🇨🇺', `${BIG}, the largest, just south of Florida`, 'It is the long island across the top of the Caribbean Sea, the biggest in the region, with Jamaica small below it and Haiti and the Dominican Republic east of it.',
      'Five flat stripes, blue and white in turn, with a red triangle on the left holding a white star.'),
    // flag: CIA World Factbook, Jamaica (jm), Flag
    place('jamaica', 'Jamaica', '🇯🇲', `${BIG}, a smaller one south of Cuba`, 'It is the small island alone in the middle of the Caribbean Sea, south of Cuba and west of Haiti.',
      'A gold diagonal cross splits the flag into four triangles: green above and below, black at the left and right.'),
    // flag: CIA World Factbook, Haiti (ha), Flag
    place('haiti', 'Haiti', '🇭🇹', 'Hispaniola, the island east of Cuba that two countries share, one of the Greater Antilles', 'Tell it from the Dominican Republic: Haiti is the smaller western part of the island; the Dominican Republic is the larger eastern part.',
      'Two flat bands, blue over red, with a white panel in the middle holding the coat of arms (a palm tree). The Dominican Republic has a white cross.'),
    // flag: CIA World Factbook, Dominican Republic (dr), Flag
    place('dominican-republic', 'Dominican Republic', '🇩🇴', 'Hispaniola, the island east of Cuba that two countries share, one of the Greater Antilles',
      'Tell it from Haiti: the Dominican Republic is the larger eastern part of the island. Tell it from Dominica: Dominica is a different place, a small island far east in the arc of small islands.',
      "A white cross reaches the edges and divides the flag into four blocks, blue and red, with a small coat of arms in the middle. Haiti's is two flat bands.", ['Dominican Republic']),
    place('puerto-rico', 'Puerto Rico', null, `${BIG}, the smallest and the easternmost`, 'Tell it from a country: Puerto Rico is a territory of the United States, not a country of its own; it is the island just east of the Dominican Republic.'),
    // flag: CIA World Factbook, Bahamas, The (bf), Flag
    place('bahamas', 'Bahamas', '🇧🇸', 'the Bahamas, a chain of islands out in the Atlantic, north of Cuba and east of Florida',
      'Tell it from Barbados and Barbuda: the Bahamas are the chain of islands off Florida, in the north, out in the Atlantic; Barbados is one small island far to the southeast.',
      'Three flat stripes, aquamarine, gold and aquamarine, with a black triangle on the left. Saint Lucia is light blue with no stripes.', ['Bahamas']),
    // flag: CIA World Factbook, Saint Kitts and Nevis (sc), Flag
    place('saint-kitts-and-nevis', 'Saint Kitts and Nevis', '🇰🇳', `${ARC}, at its northern end`,
      'Tell it from the other Saints: Saint Kitts and Nevis is the far northern one, beside Antigua and Barbuda; Saint Lucia is farther south, past Dominica, and Saint Vincent and the Grenadines is just below Saint Lucia.',
      'A black diagonal band edged in yellow, with two white stars, runs from the bottom left to the top right: green above it, red below. Trinidad and Tobago has its band the other way, on red.',
      ['Saint Kitts and Nevis', 'St Kitts and Nevis', 'Saint Kitts', 'St Kitts']),
    // flag: CIA World Factbook, Antigua and Barbuda (ac), Flag
    place('antigua-and-barbuda', 'Antigua and Barbuda', '🇦🇬', `${ARC}, at its northern end, next to Saint Kitts and Nevis`,
      'Tell it from Barbados: Antigua and Barbuda is at the north end of the arc, beside Saint Kitts and Nevis; Barbuda is part of it. Barbados is a single island far south and out east.',
      'A red flag with a triangle pointing down from the top edge, in three bands: black with a yellow rising sun, then blue, then white.', ['Antigua and Barbuda', 'Antigua']),
    // flag: CIA World Factbook, Dominica (do), Flag
    place('dominica', 'Dominica', '🇩🇲', `${ARC}, south of Antigua and Barbuda`,
      'Tell it from the Dominican Republic: Dominica is a small island in the arc, south of Antigua and Barbuda; the Dominican Republic is the big country beside Haiti.',
      'A green flag with a cross of three bands, yellow, black and white, and a red disk in the middle holding a parrot ringed by ten green stars.'),
    // flag: CIA World Factbook, Saint Lucia (st), Flag
    place('saint-lucia', 'Saint Lucia', '🇱🇨', `${ARC}, south of Dominica`,
      'Tell it from the other Saints: Saint Lucia is south of Dominica and just north of Saint Vincent and the Grenadines; Saint Kitts and Nevis is the far northern one.',
      'A light blue flag with a black triangle edged in white, above a smaller yellow triangle, in the middle. The Bahamas has stripes.', ['Saint Lucia', 'St Lucia']),
    // flag: CIA World Factbook, Saint Vincent and the Grenadines (vc), Flag
    place('saint-vincent-and-the-grenadines', 'Saint Vincent and the Grenadines', '🇻🇨', `${ARC}, south of Saint Lucia`,
      'Tell it from the other Saints: Saint Vincent and the Grenadines is just south of Saint Lucia, with Grenada below it; Saint Kitts and Nevis is the far northern one.',
      'Three upright bands, blue, a wide gold and green, with three green diamonds in a V on the gold. Barbados is blue, gold, blue.',
      ['Saint Vincent and the Grenadines', 'St Vincent and the Grenadines', 'Saint Vincent', 'St Vincent']),
    // flag: CIA World Factbook, Barbados (bb), Flag
    place('barbados', 'Barbados', '🇧🇧', `${ARC}, out on its own to the east in the Atlantic`,
      'Tell it from Barbuda and the Bahamas: Barbados is one small island out east of Saint Lucia and Saint Vincent; Barbuda is part of Antigua and Barbuda, at the north end; the Bahamas are the chain off Florida.',
      'Three upright bands, blue, gold and blue, with a black trident head on the gold. Saint Vincent and the Grenadines ends in green, with diamonds.'),
    // flag: CIA World Factbook, Grenada (gj), Flag
    place('grenada', 'Grenada', '🇬🇩', `${ARC}, near its southern end, south of Saint Vincent and the Grenadines`,
      'It is the last of the arc before Trinidad and Tobago, south of Saint Vincent and the Grenadines.',
      'A red border with six yellow stars around a field split into yellow and green triangles, with a red disk and a yellow star in the middle and a nutmeg on the left.'),
    // flag: CIA World Factbook, Trinidad and Tobago (td), Flag
    place('trinidad-and-tobago', 'Trinidad and Tobago', '🇹🇹', 'the far south of the Caribbean, two islands just off the coast of Venezuela',
      'It is the southernmost, off the coast of Venezuela, the one place here beside South America.',
      'A red flag with a black diagonal band edged in white, from the top left to the bottom right. Saint Kitts and Nevis has its band the other way, between green and red.',
      ['Trinidad and Tobago', 'Trinidad'])
  ];
  const bare = ({ flag, flagLine, ...rest }) => rest;
  const flagged = ({ cue, ...rest }) => rest;
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-caribbean', strand: 'caribbean',
      places: { map: 'caribbean', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { ...pairs('haiti-dominican-republic', ['haiti', 'dominican-republic']), ...pairs('dominica-dominican-republic', ['dominica']),
          ...pairs('the-saints', ['saint-kitts-and-nevis', 'saint-lucia', 'saint-vincent-and-the-grenadines']), ...pairs('ba-names', ['barbados', 'bahamas', 'antigua-and-barbuda']) },
        list: PLACES.map(bare) } },
    { id: 'g-caribbean-flags', strand: 'caribbean-flags',
      places: { map: 'caribbean', forms: ['flag'], words: FLAG_WORDS,
        slips: { ...pairs('flags-haiti-dominican-republic', ['haiti', 'dominican-republic']), ...pairs('flags-barbados-saint-vincent', ['barbados', 'saint-vincent-and-the-grenadines']),
          ...pairs('flags-trinidad-saint-kitts', ['trinidad-and-tobago', 'saint-kitts-and-nevis']), ...pairs('flags-bahamas-saint-lucia', ['bahamas', 'saint-lucia']) },
        list: PLACES.filter(p => p.flagLine).map(flagged) } }
  ]);
})();
