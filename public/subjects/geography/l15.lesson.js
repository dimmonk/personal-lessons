// Geography, part 15, South America: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map per view, the
// look-alikes told apart before any case uses them; a country tapped, a lit country named and a country with no coast shown done, each in the three steps and each using
// only what the names screens showed; every place tapped (the look-alikes one after the other), then the five look-alikes named and four neighbors and their water; then
// the check drawn from the group by form. The seven larger countries and the two features not named in the practice are asked only as a name to tap. French Guiana is
// a part of France, not a country, and is said to be so. The flags are part 15b. Design record: docs/subjects/geography/design.md, block l15.
(() => {
  const GEN = 'g-south-america';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the five places most often mixed up: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['guyana', 'suriname', 'french-guiana', 'paraguay', 'uruguay'];
  // the look-alikes asked one after the other
  const PAIRS = [['paraguay', 'uruguay'], ['guyana', 'suriname'], ['colombia', 'venezuela']];
  // built lessons whose places come back, a fifth of the second set
  const MIX = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // one map per view, each naming the places in it (the countries, the water and the two features a neighbor question can end on); views fitted to a phone, 12-pixel names clear of each other
  const SCREENS = [
    { title: 'The Pacific side and the Andes', says: 'The Andes run down the whole Pacific side. Colombia, Ecuador, Peru and Chile lie along them, with Bolivia inland behind Peru and Chile.', view: [357, 508, 1.4], slips: ['andean-three'],
      names: ['colombia', 'ecuador', 'peru', 'bolivia', 'chile', 'andes', 'pacific'] },
    { title: 'The north coast', says: 'Colombia is the north-west corner; Venezuela is east of it, on the Caribbean Sea. Panama, at the top left, is Central America.', view: [260, 356, 2], slips: ['colombia-venezuela'],
      names: ['colombia', 'venezuela', 'panama', 'caribbean-sea'] },
    { title: 'The three Guianas', says: 'East of Venezuela, three small lands share the north-east coast: Guyana, Suriname and French Guiana. French Guiana is not a country: it is a part of France.', view: [515, 178, 4], slips: ['the-guianas'],
      names: ['guyana', 'suriname', 'french-guiana'] },
    { title: 'Brazil and the Amazon', says: 'Brazil is the giant, filling the east and the middle of the continent. The Amazon River crosses its north to the Atlantic.', view: [500, 712, 1], slips: [],
      names: ['brazil', 'amazon-river', 'atlantic'] },
    { title: 'The south', says: 'Argentina is the wide country of the south, east of the Andes; Chile is the thin strip on the other side. Uruguay is on the Atlantic coast. Paraguay is inland, like Bolivia.', view: [377, 658, 1.4], slips: ['chile-argentina', 'paraguay-uruguay'],
      names: ['argentina', 'uruguay', 'paraguay', 'bolivia', 'chile', 'atlantic', 'pacific'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of five views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'south-america', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l15', part: '15', title: 'South America', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the way of thinking first, five views of the names, the look-alikes told apart, the worked cases in the three steps, the twelve countries, French Guiana, the Andes and the Amazon tapped, the look-alikes named. The flags are part 15b.' }],
    why: 'A story says a flood has cut off a town in Peru, or fires are burning in the Amazon. If South America is a blank to you, the story tells you little. In about fifteen minutes you will place the twelve countries of South America, French Guiana, the Andes and the Amazon on a blank map, by finding the area each sits in first, then name the five most often mixed up and say what touches four of them.',
    flow: [
      { title: 'How to find a place', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and the news names them. What water is it on? Coast or inland often matters. South America cuts easily into areas. The Andes run down the whole Pacific side, with Colombia, Ecuador, Peru and Chile along them and Bolivia inland behind. On the north coast are Venezuela and, east of it, the three small Guianas. Brazil is the giant filling the east and the middle, with the Amazon across its north. The south holds Argentina, Uruguay on the Atlantic and Paraguay inland. Only Bolivia and Paraguay have no coast. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-peru' },
      { worked: 'w-name-brazil' },
      { worked: 'w-landlocked-bolivia' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: NAMED.length, with: { form: 'name' } }, { gen: GEN, n: 4, with: { form: 'border' } }], order: 'shuffle', mix: MIX } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
