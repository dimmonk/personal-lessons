// Geography, part 27b, the flags of Central Asia and the Caucasus: how to read a flag (stripes or a field with a mark first, then the colors in order, then what tells it
// from the flag it is mistaken for) stated first with the reason for each step; the eight flags with their names, grouped by how they are built, each with its own line;
// one flag shown done in those steps; the eight flags tapped on the map with the flags that look alike asked one after the other, then all eight again in a fresh order; then the check drawn from the flags.
// Part 27 is the map. Flag descriptions: the CIA World Factbook, checked 2026-10-18 (see gen-asia-central.js). Design record: docs/subjects/geography/design.md, block l27b.
(() => {
  const GEN = 'g-asia-central-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other two once each
  const PAIRS = [['uzbekistan', 'azerbaijan'], ['kazakhstan', 'kyrgyzstan'], ['armenia', 'tajikistan']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of flat stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. These stripes lie flat.', ids: ['armenia', 'azerbaijan', 'uzbekistan', 'tajikistan'] },
    { title: 'Flags with a sun', says: 'These two have a gold sun on a plain field.', ids: ['kazakhstan', 'kyrgyzstan'] },
    { title: 'The flags with a rug stripe and a cross', says: 'These two have a mark that no other flag here has.', ids: ['turkmenistan', 'georgia'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  // a fifth of the second set is flags of the lesson already built
  const mix = { from: ['l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l27b', part: '27b', title: 'The flags of Central Asia and the Caucasus', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, split from part 27: the flags of the eight countries.' }],
    why: 'A flag in a news photo or at a match tells you whose it is only if you can read it. In about ten minutes you will read the eight flags of Central Asia and the Caucasus and tell the three pairs that look alike apart.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read every flag the same way. First see whether it is stripes or one plain field with a mark: that splits these eight in two. Then say the colors in order, from the top or the left, since look-alikes often share colors in a different order. Then find the mark, a crescent, a sun, a crown or a cross. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country by the three questions: its area, what touches it, its water. Next, the eight flags in three groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-uzbekistan' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: GROUP.list.length, with: { form: 'flag' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 8 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
