// Geography, part 18b, the flags of Central and Eastern Europe: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from the flag
// it is mistaken for) stated first; the nine flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps; the nine flags
// tapped on the map with the flags that look alike asked one after the other, then the six that look alike asked again, mixed with earlier lessons; then the check drawn from the flags. Part 18 is the map. Design record: docs/subjects/geography/design.md, block l18.
(() => {
  const GEN = 'g-europe-east-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // the flags that are mistaken for each other are asked one after the other; the other three once each
  const PAIRS = [['poland', 'czechia'], ['russia', 'slovakia'], ['romania', 'moldova']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of two flat stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. These four have two stripes, one over the other.', ids: ['poland', 'czechia', 'ukraine', 'belarus'] },
    { title: 'Flags of three flat stripes', says: 'These three have three stripes lying flat.', ids: ['hungary', 'russia', 'slovakia'] },
    { title: 'Flags of three upright stripes', says: 'These two have three stripes standing upright, in the same colors.', ids: ['romania', 'moldova'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l18b', part: '18b', title: 'The flags of Europe, central and east', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the nine countries from Poland to Russia.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about ten minutes you will read the flags of the nine countries from Poland to Russia, by the stripes and the colors, and tell the pairs that look alike: Poland and Czechia, Russia and Slovakia, Romania and Moldova.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First count the stripes and see which way they run, upright or flat: that alone splits most flags into groups. Then say the colors in order, since look-alikes often share their colors. Then look for a mark, a triangle, a shield or an eagle, which settles a flag the stripes do not. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map by the area it is in, what touches it and its water. Next, the nine flags in three groups, each with its line; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-moldova' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: PAIRS.flat().length, with: { form: 'flag' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 8 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
