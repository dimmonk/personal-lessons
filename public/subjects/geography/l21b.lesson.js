// Geography, part 21b, the flags of Arabia and North Africa: how to read a flag (the stripes, which way they run, the colors in order, then the mark and what tells it from
// the flag it is mistaken for) stated first with the reason for each step; the thirteen flags with their names, grouped by how they are built, each with its own line; one flag
// shown done in those steps; the thirteen flags tapped on the map with the flags that look alike asked one after the other; then the check drawn from the flags. Part 21 is the
// map. Design record: docs/subjects/geography/design.md, block l21 (the flags of the region's countries).
(() => {
  const GEN = 'g-arabia-north-africa-flags';
  const one = place => ({ gen: GEN, n: 1, with: { place, form: 'flag' } });
  const GROUP = FC.get('geography').gens[GEN].places, byId = id => GROUP.list.find(p => p.id === id);
  // the flags that are mistaken for each other are asked one after the other; the rest once each
  const PAIRS = [['yemen', 'egypt'], ['united-arab-emirates', 'kuwait'], ['qatar', 'bahrain'], ['tunisia', 'morocco']];
  // the look-alikes once more, in the other order and two to a pair, a fifth of the set with the flags of earlier lessons
  const AGAIN = [['sudan', 'yemen'], ['kuwait', 'united-arab-emirates'], ['bahrain', 'qatar'], ['algeria', 'tunisia']];
  const SINGLES = GROUP.list.map(p => p.id).filter(id => !PAIRS.flat().includes(id));
  // the flags in five groups by how they are built, each beside its name and the one line that tells it from the flag it is mistaken for
  const SCREENS = [
    { title: 'Red, white and black stripes', says: 'Look for about half a minute at each of five groups. Say each name as you read its flag. These three have the same flat stripes, red, white and black from the top; what is on the stripes tells them apart.', ids: ['yemen', 'egypt', 'sudan'] },
    { title: 'Flat stripes and a mark on the left', says: 'These three have flat stripes and something on the left side.', ids: ['united-arab-emirates', 'kuwait', 'oman'] },
    { title: 'A white saw-edge', says: 'These two are a shade of red with a white saw-edge down the left. Count the points.', ids: ['qatar', 'bahrain'] },
    { title: 'A star in the middle', says: 'These three each have a star, and two have a crescent too.', ids: ['tunisia', 'algeria', 'morocco'] },
    { title: 'The other two', says: 'Each of these is built a different way.', ids: ['libya', 'saudi-arabia'] }
  ];
  const screen = ({ title, says, ids }) => ({ title,
    show: [{ kind: 'prose', text: says }, { kind: 'flags', gen: GEN, places: ids, names: true }, ...ids.map(id => ({ kind: 'prose', text: `${byId(id).name}: ${byId(id).flagLine}` }))] });
  // a fifth of the second set is flags of the lessons already built
  const mix = { from: ['l7b', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l21b', part: '21b', title: 'The flags of Arabia and North Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the flags of the thirteen countries of Arabia and North Africa.' }],
    why: 'A flag in a news photo, on a ship or at a match tells you whose it is only if you can read it. In about twelve minutes you will read the flags of the thirteen countries of Arabia and North Africa, by the stripes, the colors and the mark, and tell the ones that look alike: Egypt, Yemen and Sudan; the Emirates and Kuwait; Qatar and Bahrain; Tunisia, Algeria and Morocco.',
    flow: [
      { title: 'How to read a flag', show: [{ kind: 'prose', text: 'Read every flag the same way. First count the stripes and see which way they run: that splits most of these flags in two. Then say the colors in order, since look-alikes share colors and differ in one. Then look for a mark, a bird, a star or a saw-edge, because the mark settles two flags with the same stripes. Then check the one line that tells it from the flag it is mistaken for: that is where the misses happen. Last, find the country by the three questions: its area, what touches it, its water. Next, the thirteen flags in five groups; none of it stays up.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-flag-egypt' },
      { set: { items: [...PAIRS.map(group => group.map(one)), ...SINGLES.map(one)], order: 'shuffle' } },
      { set: { items: AGAIN.map(group => group.map(one)), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { flag: 10 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
