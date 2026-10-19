// Geography, part 17, Europe, north: the way of thinking first (the area, what touches it, the water), with this region's three areas (the British Isles, the Nordic
// five, the Baltic three); the names on one map per view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor
// and its water shown done, each in the three steps and each using only what the names screens showed; every place tapped (Ireland and Iceland, Norway and Sweden,
// the Baltic three kept side by side), then the four look-alikes named and four neighbors and their water; then the check drawn from the group by form. The six places
// not named in the practice are asked only as a name to tap. The flags are part 17b. Design record: docs/subjects/geography/design.md, block l17.
(() => {
  const GEN = 'g-europe-north';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['norway', 'sweden', 'latvia', 'lithuania'];
  const PAIRS = [['norway', 'sweden'], ['latvia', 'lithuania']];
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'The British Isles', says: 'The British Isles are two islands off the northwest coast of the mainland. Ireland is the western one. The United Kingdom is the eastern one, Great Britain, plus the top corner of the island of Ireland. The Irish Sea lies between them.', view: [330, 480, 2.6], slips: ['ireland-iceland'],
      names: ['ireland', 'united-kingdom', 'irish-sea', 'north-sea'] },
    { title: 'Scandinavia and Denmark', says: 'Norway is the long country down the west side of Scandinavia, on the Norwegian Sea. Sweden is the larger one on the east. Denmark is the small peninsula pointing north from Germany.', view: [512, 385, 2.0], slips: ['norway-sweden'],
      names: ['norway', 'sweden', 'denmark', 'north-sea', 'baltic-sea'] },
    { title: 'Finland and Iceland', says: 'Finland is the fourth Nordic country, east of Sweden across the Gulf of Bothnia, with Russia along its east side. Iceland is the fifth, an island far out in the North Atlantic with no neighbor on land.', view: [500, 326, 1.0], slips: [],
      names: ['finland', 'iceland', 'gulf-of-bothnia', 'atlantic', 'norwegian-sea'] },
    { title: 'The Baltic three', says: 'Estonia, Latvia and Lithuania are small countries in a row on the southeast shore of the Baltic Sea, Estonia in the north, Lithuania in the south. Estonia is across the Gulf of Finland from Finland.', view: [750, 420, 3.0], slips: ['baltic-three'],
      names: ['estonia', 'latvia', 'lithuania', 'baltic-sea', 'gulf-of-finland'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'europe-north', labels: names, view }, ...apart(slips)] });
  // the pairs asked back to back: the two island names that sound alike, then the look-alikes named; the rest once each
  const SIDE = [['ireland', 'iceland'], ...PAIRS];
  const taps = [...SIDE.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l17', part: '17', title: 'Europe, north', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A story names Estonia, Finland and the Baltic Sea, or says a ship left Ireland for Britain. If the north of Europe is one blur to you, you cannot picture who is next to whom. In about fifteen minutes you will place the ten countries of northern Europe on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? An island, a coast or the inland is often the point of the story. These ten countries are the world map\'s Northern Europe, here split into three smaller areas so each is easier to find. The British Isles are two islands off the northwest coast: Ireland and the United Kingdom (some people in Ireland prefer to say Britain and Ireland). The Nordic countries are five: Norway, Sweden, Denmark, Finland and Iceland. The Baltic states are three small countries in a row on the Baltic Sea: Estonia, Latvia and Lithuania. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fifteen minutes: four views, three questions done for you, then the ten countries found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-denmark' },
      { worked: 'w-name-finland' },
      { worked: 'w-border-ireland' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...PAIRS.map(pair => pair.map(id => one(id, 'name'))), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
