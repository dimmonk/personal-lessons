// Geography, part 19b, the flags of Europe, the Balkans and the south: how to read a flag (the stripes, which way they run, the colors in order, then the emblem, then what tells it
// from the flag it is mistaken for) stated first, each step with its reason; the twelve flags with their names, grouped by how they are built, each with its own line; one flag
// shown done in those steps; the twelve flags tapped on the map with the flags that look alike asked one after the other, then ten of the flags, the look-alikes among them, asked again, mixed with
// earlier lessons; then the check drawn from the flags. Part 19 is the map. Design record: docs/subjects/geography/design.md, block l19.
(() => {
  const GEN = 'g-balkans-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // the flags that are mistaken for each other are asked one after the other (Croatia's is the middle one of the three red, white and blue, so it is paired with each of the other two);
  // the other four once each
  const PAIRS = [['slovenia', 'croatia'], ['serbia', 'croatia'], ['albania', 'montenegro'], ['bosnia-and-herzegovina', 'kosovo']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, stripes first (the rule of the first screen), each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of flat stripes', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. These five have stripes lying flat: three of them have red, white and blue in different orders, Bulgaria has white, green and red, and Greece has nine stripes.', ids: ['slovenia', 'croatia', 'serbia', 'bulgaria', 'greece'] },
    { title: 'Red flags', says: 'These four are mostly red, and each has its own mark in the middle or on the side. Malta is half white and half red.', ids: ['albania', 'montenegro', 'north-macedonia', 'malta'] },
    { title: 'Flags with no stripes: blue and white', says: 'These three have no stripes: two blue flags with stars, and one white flag.', ids: ['bosnia-and-herzegovina', 'kosovo', 'cyprus'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l19b', part: '19b', title: 'The flags of Europe, the Balkans and the south', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the twelve countries of the Balkans, Greece, Bulgaria, Cyprus and Malta.' }],
    why: 'A flag in a news photo, on a truck or at a match tells you whose it is only if you can read it. In about fifteen minutes you will read the flags of the twelve countries of the Balkans and the south, by the stripes, the colors and the mark, and tell the ones that look alike: Slovenia, Croatia and Serbia; Albania and Montenegro; Bosnia and Herzegovina and Kosovo.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First count the stripes and see which way they run, lying flat or standing upright, or whether there are none: that splits the flags into groups, so you search a few and not all twelve. Then say the colors in order, from the top or the left, since look-alikes often share colors in a different order. Then look for a mark, a shield, an eagle, a sun, stars or a shape, which settles a flag the stripes do not. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country with the three questions: its area, what touches it, its water. Next, the twelve flags in three groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-croatia' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: new Set(PAIRS.flat()).size + 2, with: { form: 'flag' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
