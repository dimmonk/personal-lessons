// Geography, part 17b, the flags of northern Europe: how to read a flag (stripes or a cross first, then the colors in order, then what tells it from the flag it is mistaken
// for) stated first with the reason for each step; the ten flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps;
// the ten flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. The five Nordic flags are one family, a cross
// that reaches the edges and stands off to one side, told apart by the colors. Part 17 is the map. Design record: docs/subjects/geography/design.md, block l17b.
(() => {
  const GEN = 'g-europe-north-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the rest once each
  const PAIRS = [['norway', 'iceland'], ['sweden', 'finland']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Nordic crosses with red', says: 'Look for about half a minute at each of four groups. Say each name as you read its flag. The five Nordic flags are one family, a cross that reaches all four edges, off to the left; only the colors tell them apart. These three have red in them.', ids: ['denmark', 'norway', 'iceland'] },
    { title: 'Nordic crosses in blue, yellow and white', says: 'The other two of the family.', ids: ['sweden', 'finland'] },
    { title: 'Flat stripes', says: 'The three Baltic flags have no cross.', ids: ['estonia', 'latvia', 'lithuania'] },
    { title: 'Ireland and the United Kingdom', says: 'The last two have no cross like the Nordic five and no flat stripes.', ids: ['ireland', 'united-kingdom'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  // a fifth of the second set is flags of the lessons already built
  const mix = { from: ['l7b', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l17b', part: '17b', title: 'The flags of Europe, north', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A flag in a news photo, on a ferry or at a match tells you whose it is only if you can read it. In about eleven minutes you will read the ten flags of northern Europe and tell the five Nordic crosses apart.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read every flag the same way. First look for a cross or for stripes: that sorts these flags into three kinds: the five Nordic flags are crosses that reach the edges, the three Baltic flags are flat stripes, and the last two are each different, the United Kingdom\'s slanted crosses and Ireland\'s upright stripes. Then say the colors in order, since look-alikes share colors in a different order. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map by the three questions. Next, the ten flags in four groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-norway' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle', mix } },
      { set: { items: PAIRS.map(pair => [...pair].reverse().map(one)), order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
