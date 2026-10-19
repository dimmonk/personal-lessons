// Geography, lesson 8, The cities west of the Mississippi: the way of thinking first (the state, the part of it, the water), with this region's six views; the cities
// on one map per view, each lit and named, with the look-alikes told apart before any case uses them; a city tapped and a lit city named, shown done in the three steps
// and using only what the views showed; every city tapped (the look-alikes one after the other), then four of them named from the lit dot, mixed with earlier
// lessons; then the check drawn from the group by form. A city has no neighbor question (a dot has no neighbors on the map data), so the forms are tap and name.
// Design record: docs/subjects/geography/design.md, block l8. The research behind it: docs/research/knowing-where-places-are.md G4 (memory for places is hierarchical,
// and a learner who is wrong is wrong within the right state) and G8 (location is told as relative location: the area, then what is around it, then the water).
(() => {
  const GEN = 'g-us-cities-west';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four most often mixed up, named from the lit dot (a city is asked by its name only if it was in the practice)
  const NAMED = ['san-francisco', 'portland', 'san-antonio', 'omaha'];
  const PAIRS = [['san-francisco', 'san-jose'], ['seattle', 'portland'], ['las-vegas', 'phoenix'], ['kansas-city', 'st-louis'], ['san-antonio', 'austin']];
  // one map per view, each with its cities lit and named and the states and water that fit beside them (view: centre x, centre y, zoom)
  const SCREENS = [
    { title: 'California', says: 'California holds five. Los Angeles and San Diego are in the south; San Francisco and San Jose share a bay in the north; Sacramento is inland.', slips: ['bay-cities'],
      lit: ['los-angeles', 'san-diego', 'san-francisco', 'san-jose', 'sacramento'], names: ['california'], view: [145, 267, 3.7] },
    { title: 'The Northwest', says: 'Seattle is in Washington, on Puget Sound. Portland is in Oregon, just south of the Columbia River.', slips: ['seattle-portland'],
      lit: ['seattle', 'portland'], names: ['washington', 'oregon', 'columbia-river'], view: [176, 82, 4.2] },
    { title: 'The Mountain West', says: 'Las Vegas is in the south of Nevada; Salt Lake City in the north of Utah; Denver in Colorado, on the Plains side of the Rockies; Phoenix in Arizona; Albuquerque in the middle of New Mexico.', slips: ['vegas-phoenix'],
      lit: ['las-vegas', 'salt-lake-city', 'denver', 'phoenix', 'albuquerque'], names: ['nevada', 'utah', 'colorado', 'new-mexico'], view: [292, 262, 3.1] },
    { title: 'Texas and the Gulf', says: 'Texas has four: Dallas–Fort Worth in the north, Houston in the southeast near the Gulf, San Antonio in the south, Austin in the center. New Orleans is in Louisiana, where the Mississippi reaches the Gulf.', slips: ['texas-four'],
      lit: ['dallas-fort-worth', 'houston', 'san-antonio', 'austin', 'new-orleans'], names: ['texas', 'louisiana', 'gulf-of-mexico'], view: [537, 424, 2.7] },
    { title: 'The Plains and the river', says: 'Minneapolis–St. Paul is in Minnesota, on the upper Mississippi. Omaha is in Nebraska, on the Missouri River. Kansas City is at the west edge of Missouri, St. Louis at the east edge. Oklahoma City is in the middle of Oklahoma.', slips: ['river-cities'],
      lit: ['minneapolis-st-paul', 'omaha', 'kansas-city', 'st-louis', 'oklahoma-city'], names: ['minnesota', 'mississippi-river'], view: [547, 212, 2.1] },
    { title: 'Alaska and Hawaii', says: 'Anchorage is in Alaska and Honolulu in Hawaii, both drawn in boxes at the bottom left, not where they are.', slips: [],
      lit: ['anchorage', 'honolulu'], names: ['alaska', 'hawaii'], view: [267, 467, 4.7] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, lit, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of six views. Say each name as you find it. None of it stays up: next you find the cities on a map with no names. ${says}` : says },
      { kind: 'map', region: 'us', lit, labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l8', part: '8', title: 'The cities west of the Mississippi', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A storm is hitting Houston, or a story is datelined Kansas City, and you cannot say which state it is in or where in the state. In about sixteen minutes you will place the 24 big cities west of the Mississippi on a blank map, by finding the state first and then the part of it and the water, then name the four most often mixed up from the lit dot.',
    flow: [
      { title: 'How to find a city', show: [{ kind: 'prose', text: 'A city is found the way any place is, from the bigger area down. The state comes first: you have placed every state, so it cuts the map down to one shape you know, and a miss then lands inside the right state. Then the part of the state: north or south, the coast, the edge it shares with another state. Last, the water it stands on, the ocean, a lake or a river, since most of these cities grew on water. West of the Mississippi means by state: Minnesota, Iowa, Missouri, Arkansas, Louisiana and every state beyond them, in six views. This east and west split is made only for these cities: the world map you met first puts all of them in one part, Northern America. After every answer the feedback gives you the state and the part of it, the water, and what tells the city from the one it is mixed up with.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-houston' },
      { worked: 'w-name-kansas-city' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 8, name: 4 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
