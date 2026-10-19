// Geography, part 29, Island Southeast Asia and the Pacific: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one
// map per view, the look-alikes told apart before any case uses them; a tapped island, a lit country named and a country's neighbor and water shown done, each in the three
// steps and each using only what the names screens showed (the cases are at the foot of gen-asia-islands.js); every place tapped (the look-alikes one after the other), then
// four look-alikes named and the four named places that have a land neighbor asked for what borders them; then the check drawn from the group by form. The Pacific island
// states and the other islands are asked only as a name to tap: the map data gives an island no land neighbor, so the app leaves it out of the neighbor question (its
// water is taught in the third step of every case). Honest count: reading the first screen 1 minute, five views 5, three worked cases 1.5, twenty taps at 15 seconds 5,
// four names at 30 seconds 2, four neighbors at 20 seconds 1.3, the mixed earlier items 0.6, less the shortened reading: about fifteen minutes, and the check three more. The flags are part 29b.
// Design record: docs/subjects/geography/design.md, block l29. Facts: the map data (Natural Earth); Melanesia, Micronesia and Polynesia, the United Nations geoscheme.
(() => {
  const GEN = 'g-asia-islands';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four places most often mixed up with another and that have a land neighbor: named from memory and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['malaysia', 'indonesia', 'brunei', 'papua-new-guinea'];
  // the places mixed up with each other, asked one after the other
  const GROUPS = [['malaysia', 'indonesia'], ['brunei', 'singapore'], ['australia', 'new-zealand'], ['vanuatu', 'fiji'], ['samoa', 'tonga'], ['palau', 'federated-states-of-micronesia']];
  // one map per view, each naming the places in it (the countries, the dots, and the water a neighbor question can end on)
  const SCREENS = [
    { title: 'Malaysia, Indonesia and the Philippines', says: 'Malaysia is in two parts: the strip at the south end of the mainland and the north of the big island of Borneo. Tiny Singapore is a dot at the tip of the strip. Brunei is on Borneo\'s north coast. Indonesia is the huge chain of islands across the south. The Philippines are in the north-east, on the South China Sea. The dot east of them is Palau, the first Pacific island state.',
      view: [240, 190, 2.2], slips: ['malaysia-indonesia-brunei'],
      names: ['malaysia', 'singapore', 'brunei', 'indonesia', 'philippines', 'thailand', 'south-china-sea', 'celebes-sea', 'java-sea', 'strait-of-malacca', 'sulu-sea', 'palau', 'philippine-sea'] },
    { title: 'Timor-Leste and Papua New Guinea', says: 'Timor-Leste is the eastern half of the island of Timor; the western half is Indonesia. Papua New Guinea is the eastern half of the island of New Guinea; the western half is Indonesia. The Banda Sea is north of Timor, the Timor Sea south of it, and the Arafura Sea is between New Guinea and Australia.',
      view: [410, 305, 3], slips: ['timor-leste-indonesia', 'new-guinea-two'],
      names: ['timor-leste', 'papua-new-guinea', 'banda-sea', 'timor-sea', 'arafura-sea'] },
    { title: 'Australia and New Zealand', says: 'Australia fills a continent, below Indonesia. New Zealand is two long islands far to the south-east, across the Tasman Sea. The Coral Sea is between Australia and the islands to the east, and the Indian Ocean lies on its west.',
      view: [520, 540, 1.2], slips: ['australia-new-zealand'],
      names: ['australia', 'new-zealand', 'coral-sea', 'tasman-sea', 'indian'] },
    { title: 'The south-west Pacific: Melanesia and Polynesia', says: 'East of Papua New Guinea the Pacific island states are dots. In Melanesia the Solomon Islands are nearest, Vanuatu is next and Fiji is farthest east. Beyond Fiji is Polynesia: Tuvalu is to the north, Samoa east of Fiji and Tonga south of Samoa. Kiribati, a scatter of atolls on the equator, is the dot to the north-east.',
      view: [770, 360, 2.4], slips: ['melanesia-three', 'polynesia-three'],
      names: ['solomon-islands', 'vanuatu', 'fiji', 'tuvalu', 'samoa', 'tonga', 'kiribati', 'solomon-sea', 'coral-sea'] },
    { title: 'The north Pacific: Micronesia', says: 'Micronesia is the group of island states in the north and central Pacific. From west to east: Palau (on the first map), the Federated States of Micronesia and the Marshall Islands. Nauru is the single tiny island just south of the Marshall Islands.',
      view: [690, 190, 2.3], slips: ['micronesia-five'],
      names: ['federated-states-of-micronesia', 'marshall-islands', 'nauru'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the places asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of five views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'asia-islands', labels: names, view }, ...apart(slips)] });
  const taps = [...GROUPS.map(ids => ids.map(id => one(id, 'tap'))), ...PLACES.filter(id => !GROUPS.flat().includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l29', part: '29', title: 'Island Southeast Asia and the Pacific', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A cyclone is forecast for Vanuatu, a ferry is lost in the Philippines, or Australia and New Zealand meet in a final. If these islands are a scatter of dots to you, the news tells you little. In about fifteen minutes you will place the twenty countries of island Southeast Asia and the Pacific on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what borders each of them.',
    flow: [
      { title: 'How to find an island country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Almost every place here is an island, so no country touches it by land and the islands beside it pin the spot instead. The only land borders are on the big islands of Borneo, Timor and New Guinea, and on the mainland between Malaysia and Thailand. What water is it on? A sea or an ocean, which tells you which way to look. The areas are three. Island Southeast Asia runs from Malaysia and the Philippines across to Timor-Leste. Papua New Guinea, Australia and New Zealand lie to its south and east. Beyond them the Pacific island states are dots in three groups: Melanesia, Micronesia and Polynesia. These are the world map\'s groups of part 1c, cut finer. Its Southeast Asia was the mainland and the islands together; here the islands have a part of their own. Its Oceania had only Australia and New Zealand and Melanesia, and Papua New Guinea is in Melanesia there too, though here it stands with its neighbors on New Guinea. Micronesia and Polynesia are the United Nations\' names for the island states that map was too small to show. Find the area first, then the island. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-vanuatu' },
      { worked: 'w-name-brunei' },
      { worked: 'w-border-timor-leste' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: GROUPS.slice(3).map(ids => [...ids].reverse().map(id => one(id, 'tap'))), order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: NAMED.length, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
