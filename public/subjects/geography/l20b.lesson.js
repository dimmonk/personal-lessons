// Geography, part 20b, the flags of Türkiye, the Levant, Iraq and Iran: how to read a flag (the stripes, which way they run, the colors in order, then the mark, then what tells
// it from the flag it is mistaken for) stated first; the eight flags with their names, grouped by how they are built, each with its own line; one flag shown done in those
// steps; the eight flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. Part 20 is the map. Flags are
// described as in the CIA World Factbook, "Flag description". Design record: docs/subjects/geography/design.md, block l20b.
(() => {
  const GEN = 'g-middle-east-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the other four once each
  const PAIRS = [['jordan', 'palestine'], ['iran', 'iraq']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the look-alikes once more, in the other order and in new pairs (Syria with Palestine, Jordan with Syria), a fifth of the set with the flags of earlier lessons
  const AGAIN = [['palestine', 'jordan'], ['iraq', 'iran'], ['syria', 'palestine'], ['jordan', 'syria'], ['iran', 'iraq']];
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flat stripes in black, white and green', says: 'Look for about half a minute at each of three groups. Say each name as you read its flag. These three have flat stripes in the same three colors.', ids: ['jordan', 'palestine', 'syria'] },
    { title: 'Flat stripes with writing', says: 'These two have three flat stripes with white in the middle, and a mark made of Arabic writing.', ids: ['iran', 'iraq'] },
    { title: 'A mark on red or white', says: 'These three each have one mark that no other flag here has.', ids: ['turkiye', 'lebanon', 'israel'] }
  ];
  // a fifth of the second set is flags of the lessons already built
  const mix = { from: ['l7b', 'l16b'], share: 0.2 };
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l20b', part: '20b', title: 'The flags of Türkiye, the Levant, Iraq and Iran', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, the flags of the eight countries of part 20.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about twelve minutes you will read the flags of Türkiye, the Levant, Iraq and Iran, by the stripes, the colors and the mark, and tell the ones that look alike: Jordan, Palestine and Syria, and Iran and Iraq.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. Count the stripes and see which way they run. Say the colors in order from the top, since look-alikes often share colors in a different order. Look for a mark, a triangle, a star, a tree or writing, which settles a flag the stripes do not. Check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map, using the three questions: the area it is in, what touches it, the water it is on. Next, the eight flags in three groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-jordan' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: AGAIN.map(group => group.map(one)), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 8 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
