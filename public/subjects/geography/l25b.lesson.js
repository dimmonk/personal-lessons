// Geography, part 25b, the flags of Southern Africa: how to read a flag (the stripes and which way they run, the colors in order, then a mark or a triangle at the left, then what
// tells it from the flag it is mistaken for) stated first; the twelve flags with their names, grouped by how they are built, each with its own line; one flag shown done in those
// steps; the twelve flags tapped on the map with the flags that look alike asked one after the other; then all twelve again in a mixed order with a fifth from earlier lessons; then the check drawn from the flags. Part 25 is the map. Flag descriptions: the CIA World Factbook, checked 2026-10-18 (see gen-africa-south.js).
// Design record: docs/subjects/geography/design.md, block l25b.
(() => {
  const GEN = 'g-africa-south-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other four once each
  const PAIRS = [['zimbabwe', 'mozambique'], ['south-africa', 'namibia'], ['lesotho', 'eswatini'], ['madagascar', 'mauritius']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flat bands with a mark in the middle', says: 'Look for about half a minute at each of four groups. Say each name as you read its flag. The bands here lie flat across the flag, with a mark in the middle.', ids: ['angola', 'malawi', 'lesotho', 'eswatini'] },
    { title: 'A triangle at the left', says: 'These three have a triangle on the left.', ids: ['zimbabwe', 'mozambique', 'south-africa'] },
    { title: 'A slant, or an upright band', says: 'In these three the lines do not lie flat: Namibia slants, Zambia has three upright bands under an eagle, and Madagascar has an upright band at the left.', ids: ['namibia', 'zambia', 'madagascar'] },
    { title: 'Plain flat stripes', says: 'These two have flat stripes and no mark at all.', ids: ['botswana', 'mauritius'] }
  ];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l25b', part: '25b', title: 'The flags of Southern Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the twelve countries of Southern Africa.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about thirteen minutes you will read the flags of the twelve countries of Southern Africa, by the stripes, the colors and the mark, and tell the ones that look alike: Zimbabwe and Mozambique, South Africa and Namibia, Botswana, Lesotho and Eswatini, Madagascar and Mauritius.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First see whether it has stripes and which way they run, flat, upright or slanting: that alone splits these flags in groups. Then say the colors in order, from the top or from the left, since look-alikes often share colors in a different order. Then look for a mark, a triangle, a star, a shield or a bird, which settles a flag the stripes do not. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map, using the three questions: the area it is in, what touches it, the water it is on. Next, the twelve flags in four groups, each with its line; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-mozambique' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: GROUP.list.length, with: { form: 'flag' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
