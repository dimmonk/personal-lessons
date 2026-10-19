// Geography, part 13, Mexico and Central America: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map
// per view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three
// steps and each using only what the names screens showed; every place tapped (the look-alikes one after the other), then the four look-alikes named and four
// neighbors and their water, mixed with earlier lessons; then the check drawn from the group by form. Mexico, Guatemala, Belize, Panama, the canal and the two seas are asked
// only as a name to tap. The flags are part 13b. Design record: docs/subjects/geography/design.md, block l13.
(() => {
  const GEN = 'g-mexico-central';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['honduras', 'el-salvador', 'nicaragua', 'costa-rica'];
  // look-alikes asked one after the other in the taps
  const PAIRS = [['honduras', 'el-salvador'], ['nicaragua', 'costa-rica'], ['gulf-of-mexico', 'caribbean-sea']];
  // one map per view, north to south, each naming the places in it (the countries and the water a neighbor question can end on)
  const SCREENS = [
    { title: 'Mexico and its seas', says: 'The whole map first. Mexico is the one big country, south of the United States. It has the Pacific and the Gulf of California on its west and the Gulf of Mexico on its east; around the bulge of its south-east corner it touches the Caribbean Sea too, which lies south of Cuba.', view: null, slips: ['gulf-caribbean'],
      names: ['mexico', 'united-states', 'pacific', 'gulf-of-california', 'gulf-of-mexico', 'caribbean-sea', 'cuba'] },
    { title: 'The northern isthmus', says: 'Below Mexico the land narrows. Guatemala is the first country, with Belize on the Caribbean and El Salvador on the Pacific, the ocean you just saw on the west. Honduras is the larger one east of them.', view: [745, 470, 2.5], slips: ['northern-isthmus'],
      names: ['guatemala', 'belize', 'el-salvador', 'honduras', 'nicaragua', 'caribbean-sea'] },
    { title: 'The southern isthmus', says: 'Nicaragua is the biggest, Costa Rica the narrow one, Panama the last before South America. The Panama Canal cuts across Panama from the Caribbean Sea to the Pacific.', view: [835, 540, 3], slips: ['southern-isthmus'],
      names: ['honduras', 'nicaragua', 'costa-rica', 'panama', 'panama-canal', 'colombia', 'caribbean-sea'] }
  ];

  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'mexico-central', labels: names, ...(view ? { view } : {}) }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // the earlier lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l13', part: '13', title: 'Mexico and Central America', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the way of thinking with the region\'s three areas, three views of names with the look-alikes told apart, three worked cases, every place tapped, four look-alikes named and four neighbors and their water; the flags are part 13b.' }],
    why: 'A storm builds in the Caribbean, or the news says migrants are crossing Mexico toward the United States, or a ship waits at the Panama Canal. If the land between the United States and South America is a blank to you, you cannot picture any of it. In about fourteen minutes you will place Mexico, the seven countries of Central America, the Panama Canal and the two seas beside them on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'One thing first about the name Central America. The world map you met first (The parts of the Americas, Europe and Africa) counts Mexico in Central America, from Mexico down to Panama. Here Mexico is taught on its own, and Central America means the seven countries of the isthmus below it, from Guatemala to Panama. The same three questions as for any place, each asked for a reason. What bigger area is it in? That tells you which part of the map to look in, so you search a part, not the whole. What touches it? Its neighbors pin the exact spot, and a border is what the news is about. What water is it on? Coast or inland, and which sea, often is the story. Here there are three areas. Mexico is the one big country, south of the United States. Below it the land narrows into the isthmus, a thin land bridge: the northern isthmus holds Guatemala, Belize, El Salvador and Honduras; the southern isthmus holds Nicaragua, Costa Rica and Panama, where South America begins. The Caribbean Sea and the Gulf of Mexico lie on one side and the Pacific on the other, and the Panama Canal joins them. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-guatemala' },
      { worked: 'w-name-costa-rica' },
      { worked: 'w-border-el-salvador' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 7, name: 2, border: 3 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
