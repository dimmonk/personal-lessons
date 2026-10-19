// Geography, part 26b, the flags of South Asia: how to read a flag (the stripes, which way they run, the colors in order, then what tells it from the flag it is mistaken
// for) stated first; the eight flags with their names, grouped by how they are built, each with its own line; one flag shown done in those steps; the eight flags tapped on the
// map with the flags that look alike asked one after the other; then the check drawn from the flags. Part 26 is the map.
// Flag descriptions: the CIA World Factbook. Afghanistan's flag here is the three-band flag the country's flag emoji shows (2013 to 2021). Design record:
// docs/subjects/geography/design.md, block l26.
(() => {
  const GEN = 'g-asia-south-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the others once each
  const PAIRS = [['bangladesh', 'maldives'], ['sri-lanka', 'bhutan']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in three groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Flags with green and a round mark', says: 'Look for about a minute at each of three groups. Say each name as you read its flag. Pakistan and Bangladesh are green fields; the Maldives is red with a green rectangle in the middle.', ids: ['pakistan', 'bangladesh', 'maldives'] },
    { title: 'Flags of bands', says: 'India\'s three bands lie flat; Afghanistan\'s stand upright. Since 2021 the Taliban government has flown a plain white flag with black writing; the three-band flag is the one before, and the one the World Factbook still describes.', ids: ['india', 'afghanistan'] },
    { title: 'Flags with an animal, or a shape of their own', says: 'Sri Lanka has a lion and Bhutan a dragon.', ids: ['sri-lanka', 'bhutan', 'nepal'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });

  FC.lesson('geography', {
    id: 'l26b', part: '26b', title: 'The flags of South Asia', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the eight countries of South Asia.' }],
    why: 'A flag in a news photo or at a match tells you whose it is only if you can read it. In about nine minutes you will read the eight flags of South Asia and tell the ones that look alike.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read it the same way every time. Count the stripes and see which way they run: upright, flat or across a corner. Say the colors in order, from the left or the top. Look for a mark: a crescent, a wheel, an animal. Check the line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country by its area, what touches it and its water. Next, the eight flags in three groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-bangladesh' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: GROUP.list.map(p => one(p.id)), order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 8 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
