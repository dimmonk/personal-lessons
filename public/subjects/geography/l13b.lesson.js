// Geography, part 13b, the flags of Mexico and Central America: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from
// the flag it is mistaken for) stated first; the eight flags with their names, grouped by how they are built, each with its own line; one flag shown done in those
// steps; the eight flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. Part 13 is the map.
// Design record: docs/subjects/geography/design.md, block l13 (the flags of the region's countries). The reading order (stripes, direction, colors, then the emblem) is this subject's own method: a flag in a news photo is a real moment (the research note's G1), but no study of reading flags stands behind the order.
(() => {
  const GEN = 'g-mexico-central-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other four once each
  const PAIRS = [['el-salvador', 'nicaragua'], ['honduras', 'guatemala']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of upright stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. These stripes stand upright.', ids: ['mexico', 'guatemala'] },
    { title: 'Flags of blue, white and blue', says: 'All three have flat stripes, blue, white and blue. What is on the white stripe tells them apart.', ids: ['honduras', 'el-salvador', 'nicaragua'] },
    { title: 'The other flags', says: 'Each of these is built a different way.', ids: ['costa-rica', 'panama', 'belize'] }
  ];
  // the earlier lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l13b', part: '13b', title: 'The flags of Mexico and Central America', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of Mexico and the seven countries of Central America.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about ten minutes you will read the flags of Mexico and the seven countries of Central America, by the stripes and what is on them, and tell the look-alikes: Honduras, El Salvador and Nicaragua (flat stripes), and Guatemala (upright).',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read every flag the same way. First count the stripes and see which way they run, upright or flat. Then say the colors in order. Then look at what sits on the middle stripe, a star or an emblem. Then check the line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country with the three questions: its area, what touches it, its water. Next, the eight flags in three groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-honduras' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 8 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 6 } }]
    }
  });
})();
