// Geography, part 14b, the flags of the Caribbean: how to read a flag (the layout, the colors in order, the mark, then what tells it from the flag it is mistaken for)
// stated first with the reason for each step; the thirteen flags with their names, grouped by how they are built, each with its own line; one flag shown done in those
// steps; the thirteen flags tapped on the map with the flags that look alike asked one after the other, then the look-alike pairs once more in the other order; then the
// check drawn from the flags. Puerto Rico is a territory, not a country, so it has no flag here. Flag descriptions: the CIA World Factbook (checked in gen-caribbean.js, which holds the lines). Part 14 is the map.
// The reading order (layout, colors, mark, look-alike line) is this subject's own method: a flag in a news photo is a real moment (the research note's G1), but no study of reading flags stands behind the order.
// Design record: docs/subjects/geography/design.md, block l14.
(() => {
  const GEN = 'g-caribbean-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  const lineOf = id => byId(id).flagLine;
  // the flags that are mistaken for each other are asked one after the other; the rest once each
  const PAIRS = [['haiti', 'dominican-republic'], ['barbados', 'saint-vincent-and-the-grenadines'], ['trinidad-and-tobago', 'saint-kitts-and-nevis'], ['bahamas', 'saint-lucia']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the worked flag, in the steps of reading a flag
  FC.items('geography', [
    { id: 'w-flag-barbados', strand: 'caribbean-flags', facets: { form: 'flag' }, blocks: [{ kind: 'flags', gen: GEN, places: ['barbados'] }],
      asks: [{ id: 'where', kind: 'place', prompt: GROUP.words.flag, map: GROUP.map, right: 'barbados' }], reason: lineOf('barbados'),
      steps: [{ id: 'read', does: 'Read the flag: the layout, the colors in order, the mark.', working: 'Three upright bands, blue, gold and blue from left to right, with a black trident head on the gold.' },
        { id: 'tell', does: 'Tell it from the flag it is mistaken for.', working: 'Saint Vincent and the Grenadines also starts blue, gold, but its third band is green, and it has three green diamonds instead of a trident.' },
        { id: 'find', does: 'Find the country.', working: 'Barbados is the island out on its own to the east of the arc of small islands, in the Atlantic. Tap it.' }] }
  ]);
  // the flags in five groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of flat stripes', says: 'Look for about a minute at each of five groups. Say each name as you read its flag. The stripes here lie flat, with a mark at the left or, for Haiti, in the middle.', ids: ['cuba', 'haiti', 'bahamas'] },
    { title: 'Flags of upright stripes', says: 'The stripes here stand upright, side by side.', ids: ['barbados', 'saint-vincent-and-the-grenadines'] },
    { title: 'Flags with a diagonal band', says: 'These two have one wide band cut on the diagonal, from corner to corner.', ids: ['trinidad-and-tobago', 'saint-kitts-and-nevis'] },
    { title: 'Flags with a cross', says: 'A cross runs across these flags to the edges. Jamaica\'s is slanted; the other two stand upright.', ids: ['jamaica', 'dominican-republic', 'dominica'] },
    { title: 'Flags with a shape on a plain field', says: 'The last three have no stripes: one shape or border on a field of one color.', ids: ['saint-lucia', 'grenada', 'antigua-and-barbuda'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l14b', part: '14b', title: 'The flags of the Caribbean', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A flag on a ship, a stadium or a news photo tells you whose it is only if you can read it. In about fifteen minutes you will read the flags of the thirteen countries of the Caribbean, by how each is built and by its colors, and tell the pairs that look alike: Haiti and the Dominican Republic, Barbados and Saint Vincent and the Grenadines, Trinidad and Tobago and Saint Kitts and Nevis, the Bahamas and Saint Lucia.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. First see how it is built: flat stripes, upright stripes, a diagonal band, a cross, or one shape on a plain field. You see that at a glance, and it sorts these thirteen into five groups. Then say the colors in order, because look-alikes share colors in a different order. Then look for the mark, a triangle, a trident, stars or a coat of arms, which settles a flag the layout does not. Then check the line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map by the three questions: the group it is in, what is beside it, the water it is on. Next, the thirteen flags in five groups, each with its line; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-barbados' },
      { set: { items: [...PAIRS.map(pair => pair.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: [...PAIRS.map(pair => [...pair].reverse().map(one)), { gen: GEN, n: 5, with: { form: 'flag' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 12 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
