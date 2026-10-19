// Geography, part 27, Central Asia and the Caucasus: the way of thinking first (the area, what touches it, the water), with this region's two areas (the five -stans of
// Central Asia, the three countries of the Caucasus) and the Caspian Sea between them; the names on one zoomed map per view, the look-alikes told apart before any case
// uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three steps and each using only what the names screens showed;
// every place tapped (Armenia and Azerbaijan, Kyrgyzstan and Tajikistan one after the other), then the four look-alikes named and four neighbors and their water; then
// the check drawn from the group by form. The five places not named in the practice (and the Caspian, a sea with no neighbors) are asked only as a name to tap.
// The map is wide, so each view is a zoomed panel. The flags are part 27b. Design record: docs/subjects/geography/design.md, block l27.
(() => {
  const GEN = 'g-asia-central';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['armenia', 'azerbaijan', 'kyrgyzstan', 'tajikistan'];
  const PAIRS = [['armenia', 'azerbaijan'], ['kyrgyzstan', 'tajikistan']];
  // one zoomed map per view, each naming the places in it (the countries, the water and the neighbors a question can end on)
  const SCREENS = [
    { title: 'The five -stans', says: 'Five countries in the middle of Asia have names that end in -stan, which means land. Kazakhstan is the huge one across the top. Uzbekistan is the one in the middle. Turkmenistan is the southwest one, on the Caspian Sea. Kyrgyzstan and Tajikistan are in the southeast. Afghanistan and Iran lie to their south.', view: [480, 380, 1.6], slips: ['two-centrals', 'stans-five'],
      names: ['kazakhstan', 'uzbekistan', 'turkmenistan', 'kyrgyzstan', 'tajikistan', 'caspian-sea', 'afghanistan', 'iran'] },
    { title: 'The mountain pair', says: 'Kyrgyzstan and Tajikistan are the two mountain countries of the southeast, with China on their east. Uzbekistan lies to their west.', view: [680, 425, 2.0], slips: ['kyrgyzstan-tajikistan'],
      names: ['kyrgyzstan', 'tajikistan', 'uzbekistan', 'afghanistan', 'china'] },
    { title: 'The Caucasus', says: 'The Caucasus is the mountain land between the Black Sea and the Caspian Sea, with three countries. Georgia is the northwest one, on the Black Sea. Armenia is the small one in the south, with no coast. Azerbaijan is the eastern one, on the Caspian Sea. The U.S. state of Georgia is a different place, in the South.', view: [160, 365, 3.0], slips: ['caucasus-three', 'armenia-azerbaijan', 'caspian-black'],
      names: ['georgia', 'armenia', 'azerbaijan', 'caucasus', 'black-sea', 'caspian-sea', 'turkiye'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'asia-central', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l27', part: '27', title: 'Central Asia and the Caucasus', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, built to the shape of parts 1 to 7b and 16: it opens with the way of thinking (the area, what touches it, the water) and the two areas, the five -stans and the Caucasus; one zoomed map of names for each of three views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; every place tapped, four look-alikes named and four neighbors and their water, mixed with the lessons already built. The flags are part 27b.' }],
    why: 'A story names Kazakhstan\'s oil, a border clash between Kyrgyzstan and Tajikistan, or talks between Armenia and Azerbaijan. If the -stans are one blur to you, you cannot picture who is next to whom. In about fourteen minutes you will place the eight countries of Central Asia and the Caucasus, and the Caspian Sea, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or no coast is often the point of the story. This region has two areas. Central Asia, the part of Asia from part 1c, holds five countries whose names end in -stan: Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan. The Caucasus, a mountain land to the west, holds three: Georgia, Armenia and Azerbaijan. The Caspian Sea lies between the two areas. The world map of part 1c groups them differently: Kazakhstan and its four neighbors are Central Asia there, but Georgia, Armenia and Azerbaijan are Western Asia, with Türkiye. Here the three of the Caucasus stand beside Central Asia because the two lie either side of the Caspian Sea, and the feedback says what the world map calls each. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fourteen minutes: three views, three questions done for you, then the nine places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-uzbekistan' },
      { worked: 'w-name-georgia' },
      { worked: 'w-border-armenia' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: PAIRS.map(pair => [...pair].reverse().map(id => one(id, 'tap'))), order: 'shuffle' } },
      { set: { items: [...PAIRS.map(pair => pair.map(id => one(id, 'name'))), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
