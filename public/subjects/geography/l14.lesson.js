// Geography, part 14, The Caribbean: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map per view,
// the look-alikes told apart before any case uses them; a country tapped, a lit island named and a neighbor and its water shown done, each in the three steps and each
// using only what the names screens showed; every place tapped (the look-alikes one after the other), then four look-alikes named and the only two places that have a land
// neighbor on this map (Haiti and the Dominican Republic) asked for what borders them; then the check drawn from the group by form. Islands with no land neighbor are
// kept out of the neighbor question by the app (the map data names none for them); their water is taught in the third step of every case. Design record:
// docs/subjects/geography/design.md, block l14. The flags are part 14b.
(() => {
  const GEN = 'g-caribbean';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const GROUP = FC.get('geography').gens[GEN].places, PLACES = GROUP.list.map(p => p.id);
  const lineOf = id => { const entry = GROUP.list.find(p => p.id === id); return entry.reason || entry.cue; };
  // the three steps of the way of thinking, shown done before the learner's first try (the same shape as items-worked-us.js)
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const step = (id, does, working) => ({ id, does, working });
  FC.items('geography', [
    { id: 'w-tap-jamaica', strand: 'caribbean', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Jamaica' }],
      asks: [{ id: 'where', kind: 'place', prompt: GROUP.words.tap, map: GROUP.map, right: 'jamaica' }], reason: lineOf('jamaica'),
      steps: [step('area', AREA, 'Jamaica is one of the four big islands, the Greater Antilles. Start from Cuba, the long island just south of Florida, which the first map named.'),
        step('touch', TOUCH, 'No country touches an island by land. What is near it pins the spot: Jamaica is the small island south of Cuba, with Haiti and the Dominican Republic east of it.'),
        step('water', WATER, 'It sits in the middle of the Caribbean Sea, the sea named across the map. Tap the island.')] },
    { id: 'w-name-barbados', strand: 'caribbean', facets: { form: 'name' }, blocks: [{ kind: 'prose', text: GROUP.words.name }, { kind: 'map', region: GROUP.map, lit: ['barbados'] }],
      asks: [{ id: 'name', kind: 'text', prompt: GROUP.words.name, accept: GROUP.list.find(p => p.id === 'barbados').accept }], reason: lineOf('barbados'),
      steps: [step('area', AREA, 'The lit place is a small dot, so it is in the arc of small islands, the Lesser Antilles, not one of the four big islands.'),
        step('touch', TOUCH, 'It is the one island out on its own to the east, beyond Saint Lucia and Saint Vincent and the Grenadines, as the last map showed.'),
        step('water', WATER, 'It lies out on the Atlantic side of the arc. The island farthest east is Barbados.')] },
    { id: 'w-border-haiti', strand: 'caribbean', facets: { form: 'border' }, blocks: [{ kind: 'prose', text: 'What borders Haiti?' }],
      asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: GROUP.words.border, map: GROUP.map, of: 'haiti' }], reason: lineOf('haiti'),
      steps: [step('area', AREA, 'Haiti is the western part of Hispaniola, the island east of Cuba, one of the Greater Antilles.'),
        step('touch', TOUCH, 'The Dominican Republic fills the rest of the island, east of Haiti. Hispaniola is the only island here shared by two countries: tap the Dominican Republic.'),
        step('water', WATER, 'Haiti has coast on the Atlantic to the north and on the Caribbean Sea to the south: tap the Caribbean Sea.')] }
  ]);
  // the four places most often mixed up with another: named from memory (a place is asked by its name only if it was in the practice)
  const NAMED = ['haiti', 'dominican-republic', 'dominica', 'barbados'];
  const GROUPS = [['haiti', 'dominican-republic'], ['saint-lucia', 'saint-vincent-and-the-grenadines'], ['barbados', 'bahamas'], ['saint-kitts-and-nevis', 'antigua-and-barbuda']];
  // one map per view, each naming the places in it (the countries, the small ones on lines, and the water a case can end on)
  const SCREENS = [
    { title: 'The seas', says: 'The Caribbean Sea is the warm sea in the middle, with Central America and Venezuela on its south and west and the islands along its north and east. The Atlantic Ocean lies outside the islands, to the north and east. The Gulf of Mexico is the sea north of Cuba, between Mexico and Florida.',
      view: [500, 350, 1], slips: [],
      names: ['caribbean-sea', 'atlantic', 'gulf-of-mexico', 'united-states', 'mexico', 'cuba', 'venezuela'] },
    { title: 'Cuba, Jamaica and the Bahamas', says: 'Cuba is the biggest island, just south of Florida. Jamaica is the small one below it. The Bahamas are a chain of small islands out in the Atlantic, north of Cuba and east of Florida.',
      view: [300, 255, 2.2], slips: [],
      names: ['cuba', 'jamaica', 'bahamas'] },
    { title: 'Hispaniola: Haiti and the Dominican Republic', says: 'The big island east of Cuba is Hispaniola, shared by two countries: Haiti in the west and the Dominican Republic in the east. Of these islands, it is the only one with a land border.',
      view: [532, 350, 5], slips: ['haiti-dominican-republic', 'dominica-dominican-republic'],
      names: ['haiti', 'dominican-republic'] },
    { title: 'Puerto Rico and the arc of small islands, north', says: 'Puerto Rico, east of the Dominican Republic, is the last of the four big islands. East of it the small islands curve south in an arc, the Lesser Antilles. Saint Kitts and Nevis and Antigua and Barbuda are at the north end, then Dominica, then Saint Lucia. The islands left out between them are not countries: Guadeloupe and Martinique belong to France, Montserrat to Britain. Saint Vincent and the Grenadines, just below Saint Lucia, is on the next view.',
      view: [790, 455, 3.5], slips: ['the-saints'],
      names: ['puerto-rico', 'saint-kitts-and-nevis', 'antigua-and-barbuda', 'dominica', 'saint-lucia'] },
    { title: 'The arc of small islands, south', says: 'Farther south: Saint Vincent and the Grenadines, then Grenada. Barbados is out on its own to the east. Trinidad and Tobago is the far south, just off the coast of Venezuela.',
      view: [832, 590, 3.5], slips: ['ba-names'],
      names: ['saint-lucia', 'saint-vincent-and-the-grenadines', 'grenada', 'barbados', 'trinidad-and-tobago'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the places asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of five views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'caribbean', labels: names, view }, ...apart(slips)] });
  const taps = [...GROUPS.map(ids => ids.map(id => one(id, 'tap'))), ...PLACES.filter(id => !GROUPS.flat().includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l14', part: '14', title: 'The Caribbean', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A hurricane is forecast to cross Jamaica, then Cuba, or a cruise ship calls at Saint Lucia. If the Caribbean is a scatter of dots to you, the news tells you little. In about fifteen minutes you will place the fourteen countries and islands of the Caribbean on a blank map, by finding the group each sits in first, then name the four most often mixed up and say what borders Haiti and the Dominican Republic, the only two of these that share a land border.',
    flow: [
      { title: 'How to find an island', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Most of these places are islands, so no country touches them by land; the island or the group beside it pins the spot instead. What water is it on? The Caribbean Sea, or the Atlantic outside it. The world map you met first calls all of these islands the Caribbean; here they split into three groups. The four big islands, the Greater Antilles, run across the north: Cuba, Jamaica, Hispaniola, one island shared by Haiti and the Dominican Republic, and Puerto Rico. The Bahamas lie out in the Atlantic, north of Cuba and east of Florida. The small islands curve in an arc, the Lesser Antilles, from Puerto Rico south toward Venezuela, with Trinidad and Tobago at the end. Find the group first, then the island. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-jamaica' },
      { worked: 'w-name-barbados' },
      { worked: 'w-border-haiti' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: 2, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
