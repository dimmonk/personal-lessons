// Geography, part 22, West Africa, the coast: the way of thinking first (the area, what touches it, the water), with this region's areas (the west corner, the coast that
// runs southeast, the Gulf of Guinea coast, and the islands); the names on one map per view, the look-alikes told apart before any case uses them; a country tapped, a lit
// country named and a neighbor and its water shown done, each in the three steps and each using only what the names screens showed; every place tapped (Guinea and
// Guinea-Bissau, Sierra Leone and Liberia, Senegal and the Gambia, Togo and Benin kept side by side), then the four look-alikes named and four neighbors and their
// water; then the check drawn from the group by form. The eight places not named in the practice are asked only as a name to tap. The flags are part 22b. Design record: docs/subjects/geography/design.md, block l22.
(() => {
  const GEN = 'g-africa-west';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['guinea', 'guinea-bissau', 'sierra-leone', 'liberia'];
  const PAIRS = [['guinea', 'guinea-bissau'], ['sierra-leone', 'liberia']];
  // the look-alikes asked one after the other in the tapping: the two Guineas, the two next down the coast, the Gambia inside Senegal, the two thin countries of the Gulf
  const SIDE = [...PAIRS, ['senegal', 'gambia'], ['togo', 'benin']];
  // one map per view, west to east, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'The west corner and Cape Verde', says: 'Senegal is at the far west tip of the mainland. The Gambia is a thin strip inside it, along a river. Guinea-Bissau is the small country just south of Senegal. Cape Verde is a group of islands far out in the Atlantic, west of Senegal, with no neighbor on land.', view: [228, 372, 2.8], slips: ['senegal-gambia', 'guinea-guinea-bissau'],
      names: ['cape-verde', 'senegal', 'gambia', 'guinea-bissau', 'guinea', 'atlantic'] },
    { title: 'The coast that runs southeast', says: 'Below Guinea-Bissau the coast turns and runs southeast. Guinea is the larger country behind Guinea-Bissau, and it reaches the coast. Sierra Leone comes next, then Liberia.', view: [275, 440, 2.6], slips: ['sierra-leone-liberia'],
      names: ['guinea-bissau', 'guinea', 'sierra-leone', 'liberia', 'atlantic'] },
    { title: 'The Gulf of Guinea coast', says: 'At the end of Liberia the coast turns and runs east along the Gulf of Guinea. Five countries share it, west to east: Côte d\'Ivoire, Ghana, Togo, Benin and Nigeria. Togo and Benin are thin. Burkina Faso lies behind Ghana, Togo and Benin and has no coast.', view: [610, 455, 2.4], slips: ['ghana-togo-benin', 'niger-nigeria'],
      names: ['cote-divoire', 'ghana', 'togo', 'benin', 'nigeria', 'gulf-of-guinea', 'burkina-faso'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'africa-west', labels: names, view }, ...apart(slips)] });
  const taps = [...SIDE.map(group => group.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l22', part: '22', title: 'West Africa, the coast', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A story says a ship left Ghana, or that thousands crossed from Guinea into Sierra Leone. If the coast of West Africa is one blur to you, you cannot picture who is next to whom. In about fourteen minutes you will place the eleven countries and the islands of the West African coast on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? Coast, inland or island is often the point of the story. West Africa is the bulge on the west side of Africa. These twelve places, eleven countries and the islands of Cape Verde, all have a coast on the Atlantic, and they are part of the world map\'s West Africa. They fall in four areas. The west corner is where the coast faces west: Senegal, the Gambia and Guinea-Bissau. Below it the coast runs southeast: Guinea, Sierra Leone and Liberia. Then the coast turns and runs east along the Gulf of Guinea: Côte d\'Ivoire, Ghana, Togo, Benin and Nigeria. The fourth area is Cape Verde, islands out in the Atlantic. The countries behind the coast, such as Mali, Burkina Faso and Niger, have no coast and are not asked here. Mauritania, north of Senegal, is also in West Africa and has an Atlantic coast; it is on the map of the Sahel that comes next. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fourteen minutes: three views, three questions done for you, then the twelve places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-ghana' },
      { worked: 'w-name-senegal' },
      { worked: 'w-border-nigeria' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...PAIRS.map(pair => pair.map(id => one(id, 'name'))), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
