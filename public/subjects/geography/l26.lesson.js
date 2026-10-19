// Geography, part 26, South Asia: the way of thinking first (the area, what touches it, the water), with this region's areas (the subcontinent, the northwest, the Himalayas,
// the islands); the names on one map per view, the look-alikes told apart before any case uses them; a country tapped, a lit island named and a landlocked country's neighbors and
// water shown done, each in the three steps and each using only what the names screens showed (or parts 1 and 1c); every place tapped (the look-alikes one after the other), then
// the four look-alikes named and four neighbors and their water, mixed with the lessons before; then the check drawn from the group by form. The Himalayas, the Indus, the Ganges,
// Sri Lanka, the Maldives, India and Bangladesh are not named in the practice: they are asked only as a name to tap. The flags are part 26b. Design record:
// docs/subjects/geography/design.md, block l26.
(() => {
  const GEN = 'g-asia-south';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['nepal', 'bhutan', 'pakistan', 'afghanistan'];
  // the places mixed up with each other, asked one after the other
  const SIDE = [['nepal', 'bhutan'], ['pakistan', 'afghanistan'], ['sri-lanka', 'maldives'], ['indus-river', 'ganges-river']];
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'The subcontinent', says: 'India is the huge country in the middle, a great triangle pointing down into the Indian Ocean. The Arabian Sea is on its west side and the Bay of Bengal on its east. Pakistan is the large country on the west, on the Arabian Sea; Afghanistan is the inland one above it; Bangladesh is the small one on the east, at the head of the Bay of Bengal.', view: [470, 400, 1.3], slips: ['pakistan-afghanistan-bangladesh'],
      names: ['india', 'pakistan', 'afghanistan', 'bangladesh', 'arabian-sea', 'bay-of-bengal'] },
    { title: 'The northwest and the Indus', says: 'Afghanistan is the mountainous country with no coast, in the northwest. Pakistan lies below it and east of Iran. The Indus River comes down from the mountains and runs the length of Pakistan to the Arabian Sea.', view: [250, 320, 1.8], slips: [],
      names: ['afghanistan', 'indus-river', 'iran', 'india', 'arabian-sea'] },
    { title: 'The Himalayas and the Ganges', says: 'The Himalayas are the highest mountains in the world, a wall along the north of South Asia. Nepal and Bhutan lie in them, between India and China: Nepal is the longer one in the west, Bhutan the small one in the east. The Ganges comes down from the mountains, runs east across the north of India and through Bangladesh to the Bay of Bengal.', view: [650, 300, 2.8], slips: ['nepal-bhutan', 'indus-ganges'],
      names: ['nepal', 'bhutan', 'himalayas', 'india', 'china', 'ganges-river', 'bangladesh'] },
    { title: 'The islands', says: 'Two island countries lie in the Indian Ocean. Sri Lanka is the big island close to the southern tip of India. The Maldives is a chain of tiny islands, a dot on the map, far out to the southwest.', view: [470, 760, 2.0], slips: ['sri-lanka-maldives'],
      names: ['sri-lanka', 'maldives', 'laccadive-sea', 'indian'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'asia-south', labels: names, view }, ...apart(slips)] });
  const taps = [...SIDE.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  const names = [['nepal', 'bhutan'], ['pakistan', 'afghanistan']].map(pair => pair.map(id => one(id, 'name')));
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l26', part: '26', title: 'South Asia', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, built to the shape of parts 1 to 7b and 16: it opens with the way of thinking (the area, what touches it, the water) and South Asia\'s four areas; one screen of names for each of four views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; every place tapped, four look-alikes named and four neighbors and their water, mixed with earlier lessons. The flags are part 26b.' }],
    why: 'A flood on the Indus, a border closed between India and Pakistan, a climbing team on a Himalayan peak: the news from South Asia names places most of us cannot picture. In about fifteen minutes you will place the eight countries of South Asia, with the Himalayas, the Indus and the Ganges, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? A coast, an island or the inland is often the point of the story; here water means a sea or an ocean; a river or a lake does not count. South Asia has four areas. The subcontinent is the great triangle of land south of the Himalayas: India in the middle, with Pakistan on its west and Bangladesh on its east. The northwest is the mountainous country of Afghanistan, above Pakistan. The Himalayas are the wall of mountains along the north, with Nepal and Bhutan in them. Two island countries lie in the Indian Ocean: Sri Lanka and the Maldives. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fifteen minutes: four views, three questions done for you, then the eleven places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-nepal' },
      { worked: 'w-name-sri-lanka' },
      { worked: 'w-landlocked-afghanistan' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...names, ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
