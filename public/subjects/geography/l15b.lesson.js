// Geography, part 15b, the flags of South America: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from the flag it is
// mistaken for) stated first; the twelve flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps; the twelve
// flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. French Guiana has no flag of its own (it is a
// part of France), so it is not asked. Part 15 is the map. Flag lines: the CIA World Factbook, checked in gen-south-america.js, which holds them. The reading order (stripe direction, colors, mark, look-alike line) is this subject's own method: a flag in a news photo is a real moment (the research note's G1), but no study of reading flags stands behind the order. Design record: docs/subjects/geography/design.md, block l15b.
(() => {
  const GEN = 'g-south-america-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other seven once each
  const PAIRS = [['colombia', 'venezuela'], ['ecuador', 'colombia'], ['argentina', 'uruguay']];
  const AGAIN = [['venezuela', 'ecuador'], ['uruguay', 'argentina']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of yellow, blue and red stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. These three have flat stripes of the same three colors.', ids: ['colombia', 'venezuela', 'ecuador'] },
    { title: 'Other flat stripes', says: 'These five have flat stripes too, in other colors. Bolivia (red, yellow, green), Paraguay (red, white, blue) and Suriname (a wide red middle) have no look-alike here; their colors tell them.', ids: ['bolivia', 'paraguay', 'argentina', 'uruguay', 'suriname'] },
    { title: 'Upright stripes, shapes and a corner', says: 'These four are built in four different ways: Peru has upright stripes, Brazil a diamond, Chile two halves with a square in the corner, Guyana two arrowheads. Each has a mark that no other flag here has.', ids: ['peru', 'brazil', 'chile', 'guyana'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l15b', part: '15b', title: 'The flags of South America', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the twelve countries (French Guiana, a part of France, has none of its own).' }],
    why: 'A flag in a news photo, on a shirt at a match or on a ship tells you whose it is only if you can read it. In about twelve minutes you will read the flags of the twelve countries of South America, by the stripes and the colors, and tell the ones that look alike: Colombia, Venezuela and Ecuador, and Argentina and Uruguay.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First see which way the stripes run, flat or upright: that splits most of these flags in two. Then say the colors in order, from the top, or the left if upright, since look-alikes share colors. Then look for a mark, a star, a sun or a coat of arms, which settles what the stripes do not. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map by the three questions: its area, what touches it, its water. Next, the twelve flags in three groups. French Guiana is not here: it is a part of France and flies the French flag.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-venezuela' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      // the look-alikes again in other pairs, with three flags the learner missed or met longest ago, and a fifth from the flags of western Europe (part 16b)
      { set: { items: [...AGAIN.map(pair => pair.map(one)), { gen: GEN, n: 3, with: { form: 'flag' } }], order: 'shuffle', mix: { from: ['l16b'], share: 0.2 } } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 12 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
