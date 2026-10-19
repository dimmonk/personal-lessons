// Geography, part 29b, the flags of island Southeast Asia and the Pacific: how to read a flag (the layout, the colors in order, the mark, then what tells it from the flag it
// is mistaken for) stated first with the reason for each step; the twenty flags with their names, grouped by how they are built, each with its own line; one flag shown done in
// those steps (at the foot of gen-asia-islands.js); the twenty flags tapped on the map with the flags that look alike asked one after the other; then a short mixed set and the
// check drawn from the flags. Flag descriptions: the CIA World Factbook (checked 2026-10-18 against the Factbook's own text as mirrored in github.com/factbook/factbook.json (weekly copy of January 2026; cia.gov retired the Factbook in February 2026)). Honest count: reading the first screen 1 minute, four groups 4, one worked flag 0.5, twenty taps at 15
// seconds 5, the five pairs once more in the other order with two earlier items 3: about fourteen minutes. Part 29 is the map. Design record: docs/subjects/geography/design.md, block l29.
(() => {
  const GEN = 'g-asia-islands-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the rest once each
  const PAIRS = [['australia', 'new-zealand'], ['fiji', 'tuvalu'], ['indonesia', 'singapore'], ['samoa', 'tonga'], ['palau', 'federated-states-of-micronesia']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags with the Union Jack', says: 'Look for about a minute at each of four groups. Say each name as you read it. These four carry the Union Jack in the upper left corner.', ids: ['australia', 'new-zealand', 'fiji', 'tuvalu'] },
    { title: 'Flags of flat stripes', says: 'The stripes here lie flat, in two bands or more. The Philippines and Vanuatu also have a triangle at the left, and Malaysia a blue square in the corner.', ids: ['indonesia', 'singapore', 'malaysia', 'philippines', 'vanuatu', 'kiribati'] },
    { title: 'Flags cut on the diagonal, or with a triangle', says: 'These five have a diagonal line or a triangle.', ids: ['papua-new-guinea', 'solomon-islands', 'brunei', 'timor-leste', 'marshall-islands'] },
    { title: 'Flags with one mark on a plain field', says: 'The last five have no stripes: one mark on a plain color.', ids: ['samoa', 'tonga', 'palau', 'federated-states-of-micronesia', 'nauru'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l29b', part: '29b', title: 'The flags of Island Southeast Asia and the Pacific', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A flag in a news photo tells you whose it is only if you can read it. In about fourteen minutes you will read the flags of the twenty countries of island Southeast Asia and the Pacific, by how each is built and by its colors, and tell the pairs that look alike: Australia and New Zealand, Fiji and Tuvalu, Indonesia and Singapore, Samoa and Tonga, Palau and the Federated States of Micronesia.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First see how it is built: a Union Jack in the corner, flat stripes, a diagonal or a triangle, or one mark on a plain field. That sorts these twenty into four groups to start with; a few flags fit two, and each flag has its own line. Then say the colors in order, from the top or the left, because look-alikes share colors in a different order. Then find the mark, a star or a bird, which settles what the layout does not. Then check the line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country: its area, what is beside it, its water. Next, the twenty flags; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-new-zealand' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: PAIRS.map(pair => [...pair].reverse().map(one)), order: 'shuffle', mix } },
      { set: { items: ['marshall-islands', 'nauru', 'kiribati', 'solomon-islands'].map(one), order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 12 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
