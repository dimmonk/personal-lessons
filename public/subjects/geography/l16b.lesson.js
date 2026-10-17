// Geography, part 16b, the flags of western Europe: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from the flag it is
// mistaken for) stated first; the ten flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps; the ten
// flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. The five tiny countries' flags are not asked.
// Part 16 is the map. Design record: docs/subjects/geography/design.md, block l16b.
(() => {
  const GEN = 'g-europe-west-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other four once each
  const PAIRS = [['netherlands', 'luxembourg'], ['belgium', 'germany'], ['france', 'italy']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of upright stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. The stripes here stand upright.', ids: ['france', 'italy', 'belgium'] },
    { title: 'Flags of flat stripes', says: 'The stripes here lie flat.', ids: ['netherlands', 'luxembourg', 'germany', 'austria'] },
    { title: 'Flags with a shield or a cross', says: 'These three have a mark that no other flag here has.', ids: ['spain', 'portugal', 'switzerland'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l16b', part: '16b', title: 'The flags of western Europe', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version, split from part 16: the flags of the ten larger countries.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about eight minutes you will read the flags of the ten larger countries of western Europe, by the stripes and the colors, and tell the pairs that look alike: the Netherlands and Luxembourg, Belgium and Germany, France and Italy.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First count the stripes and see which way they run, upright or flat: that alone splits most of these flags in two. Then say the colors in order, from the left or from the top, since look-alikes often share colors in a different order. Then look for a mark, a shield or a cross, which settles a flag the stripes do not. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map, using the three questions: the area it is in, what touches it, the water it is on. Next, the ten flags in three groups, each with its line; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-belgium' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
