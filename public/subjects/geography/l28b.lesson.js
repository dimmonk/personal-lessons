// Geography, part 28b, the flags of East Asia and mainland Southeast Asia: how to read a flag (the bands, which way they run, the colors in order, then the mark, then what tells it from
// the flag it is mistaken for) stated first; the eleven flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps; the eleven
// flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. Part 28 is the map. Design record: docs/subjects/geography/design.md,
// block l28b. Sources: the flags' bands, colors and emblems are the CIA World Factbook's "Flag description" lines (checked 2026-10-18 against the Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026)).
(() => {
  const GEN = 'g-asia-east-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other (a pair holds two; Taiwan and North Korea, the third of their trios, are asked on their own); the others once each
  const PAIRS = [['china', 'vietnam'], ['laos', 'cambodia'], ['japan', 'south-korea']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Red flags', says: 'Look for about a minute at each of four groups. Say each name as you read its flag.', ids: ['china', 'vietnam', 'taiwan'] },
    { title: 'Flags of flat red and blue bands', says: 'These three are flat red and blue bands.', ids: ['laos', 'cambodia', 'north-korea'] },
    { title: 'White flags', says: 'These two are white.', ids: ['japan', 'south-korea'] },
    { title: 'Flags of other stripes', says: 'Only Mongolia\'s stripes stand upright.', ids: ['thailand', 'myanmar', 'mongolia'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l28b', part: '28b', title: 'The flags of East Asia and mainland Southeast Asia', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the eleven countries of part 28.' }],
    why: 'A flag in a news photo tells you whose it is only if you can read it. In about nine minutes you will read the eleven flags of East Asia and mainland Southeast Asia, and tell the look-alikes: China, Vietnam and Taiwan; Laos, Cambodia and North Korea; Japan and South Korea.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First the ground: one color, or bands, and do the bands lie flat or stand upright? Then the colors in order, from the top or the left. Then the mark: a star, a disc or a temple. Then the one line that tells it from the flag it is mistaken for: that is where the misses are. Last, find the country: its area, what touches it, its water. Next, the eleven flags in four groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-laos' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: PAIRS.map(group => [...group].reverse().map(one)), order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
