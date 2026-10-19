// Geography, part 24b, the flags of East Africa and the Horn: how to read a flag (the stripes and which way they run, the colors in order, then a mark at the left or in the
// middle, then what tells it from the flag it is mistaken for) stated first; the twelve flags with their names, grouped by how they are built, each with its own line; one
// flag shown done in those steps; the twelve flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags.
// Part 24 is the map. Flag descriptions: the CIA World Factbook, checked 2026-10-18 against the Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026). Design record: docs/subjects/geography/design.md, block l24.
(() => {
  const GEN = 'g-africa-east-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other eight once each
  const PAIRS = [['kenya', 'south-sudan'], ['somalia', 'djibouti']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of flat stripes', says: 'Look for about half a minute at each of three groups. Say each name as you read its flag. These have flat stripes with a mark on them.', ids: ['ethiopia', 'uganda', 'rwanda', 'kenya'] },
    { title: 'Flags with a triangle at the left', says: '', ids: ['south-sudan', 'djibouti', 'eritrea', 'comoros'] },
    { title: 'Flags that slant, or have no stripes', says: '', ids: ['somalia', 'tanzania', 'burundi', 'seychelles'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [...(says ? [{ kind: 'prose', text: says }] : []), { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l24b', part: '24b', title: 'The flags of East Africa and the Horn', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the twelve countries of East Africa and the Horn.' }],
    why: 'A flag in a news photo or at a match tells you whose it is only if you can read it. In about nine minutes you will read the flags of the twelve countries of East Africa and the Horn, and tell the pairs that look alike: Kenya and South Sudan, Somalia and Djibouti.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First the stripes: which way do they run, flat or slanting? Then the colors in order, from the top or the left, since look-alikes share colors in a different order. Then a mark: a triangle, a disc, a shield or a star. Then the one line that tells it from the flag it is mistaken for. Last, find the country by its area, what touches it and its water. Next, the twelve flags in three groups, each with its line; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-kenya' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
