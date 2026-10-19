// Geography, part 23b, the flags of the Sahel and Central Africa: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from
// the flag it is mistaken for) stated first; the twelve flags with their names, grouped by how they are built, each with its own line; one flag shown done in those
// steps; the twelve flags tapped on the map with the flags that look alike asked one after the other; then the four look-alike pairs once more in the other order with a fifth from earlier lessons, so the practice outweighs the reading; then the check drawn from the flags. Part 23 is the map.
// Flag descriptions: the CIA World Factbook, checked 2026-10-18 (see gen-africa-central.js). Design record: docs/subjects/geography/design.md, block l23.
(() => {
  const GEN = 'g-africa-central-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the others once each
  const PAIRS = [['mali', 'chad'], ['republic-of-the-congo', 'democratic-republic-of-the-congo'], ['burkina-faso', 'mauritania'], ['gabon', 'equatorial-guinea']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // a fifth of the second set is flags of the lessons already built
  const mix = { from: ['l16b'], share: 0.2 };
  // the flags in four groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags of upright stripes', says: 'Look at each of four groups for about a minute. These stripes stand upright, and all three have yellow.', ids: ['mali', 'chad', 'cameroon'] },
    { title: 'Flags of flat stripes', says: 'These four lie flat.', ids: ['niger', 'gabon', 'equatorial-guinea', 'sao-tome-and-principe'] },
    { title: 'Flags with a star or a crescent', says: 'These three are flat bands with a star; Mauritania\'s star sits over a crescent.', ids: ['burkina-faso', 'mauritania', 'central-african-republic'] },
    { title: 'Flags with a diagonal band', says: 'Only the two Congos have a band across the corner.', ids: ['republic-of-the-congo', 'democratic-republic-of-the-congo'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l23b', part: '23b', title: 'The flags of the Sahel and Central Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A flag in a news photo or at a match tells you whose it is only if you can read it. In about twelve minutes you will read the twelve flags from Mauritania to the two Congos and tell the ones that look alike.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. Count the stripes and see which way they run, upright, flat or across the corner: that alone splits these flags into groups. Say the colors in order, from the left or the top: look-alikes share colors in a different order. Look for a mark, a star, a crescent or a triangle. Check the line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country on the map by its area, what touches it and its water; part 23 placed the twelve. Next, the twelve flags in four groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-chad' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: PAIRS.map(group => [...group].reverse().map(one)), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 12 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
