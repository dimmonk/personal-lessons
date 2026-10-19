// Geography, part 22b, the flags of West Africa, the coast: how to read a flag (the colors first, since six of these flags share the pan-African green, yellow and red; then
// which way the stripes run, then the mark, then what tells it from the flag it is mistaken for) stated first with the reason for each step; the twelve flags with their names,
// grouped by how they are built, each with its own line; one flag shown done in those steps; the twelve flags tapped on the map with the flags that look alike asked one
// after the other; then the ten look-alikes again, the other way round; then the check drawn from the flags. Part 22 is the map. Design record: docs/subjects/geography/design.md, block l22b.
(() => {
  const GEN = 'g-africa-west-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other two once each
  const PAIRS = [['senegal', 'guinea'], ['ghana', 'togo'], ['guinea-bissau', 'benin'], ['nigeria', 'cote-divoire'], ['gambia', 'sierra-leone']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Green, yellow and red in three stripes', says: 'Look for about a minute at each of four groups. Say each name as you read its flag. These three have green, yellow and red in three stripes.', ids: ['senegal', 'guinea', 'ghana'] },
    { title: 'Green, yellow and red with a band or a square', says: 'These three have the same colors laid out differently.', ids: ['guinea-bissau', 'benin', 'togo'] },
    { title: 'Upright stripes with white in the middle', says: 'Both have three upright stripes with white between, and no yellow or red.', ids: ['nigeria', 'cote-divoire'] },
    { title: 'Blue, and red and white', says: 'The last four are each their own, and each has blue.', ids: ['gambia', 'sierra-leone', 'liberia', 'cape-verde'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  // a fifth of the second set is flags of the lesson already built
  const mix = { from: ['l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l22b', part: '22b', title: 'The flags of West Africa, the coast', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A flag in a news photo, on a ship or at a match tells you whose it is only if you can read it. In about thirteen minutes you will read the twelve flags of the West African coast and tell apart the six that share the green, yellow and red of the pan-African colors.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read every flag the same way. First say the colors. Green, yellow and red together are the pan-African family, six flags on this coast, so the order and the marks are what tell them apart. Then see which way the stripes run, upright or flat, and whether a band stands down the left. Then look for a mark, a star, a square or a ring. Then check the one line that tells it from the flag it is mistaken for. Last, find the country by the three questions: its area, what touches it, its water. Next, the twelve flags in four groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-guinea' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: PAIRS.map(group => [...group].reverse().map(one)), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
