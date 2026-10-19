// Geography, part 10, The capitals of the West and the Midwest: the way of thinking first (the state, the part of it, the water, and the bigger city a capital is mixed up
// with), with this region's six views; the 25 capitals on one map per view, each lit and named, with the look-alikes told apart before any case uses them; a capital tapped and
// a state lit and its capital typed, shown done in the three steps and using only what the views showed; the capitals not yet placed as cities tapped, with the four capital and
// big-city pairs the record names asked one after the other (the big city is a due item from parts 8 and 9); then five states named from the lit state, mixed with earlier
// lessons; then the check drawn from the group by form. A capital is the name the news uses for a state's government. Design record: docs/subjects/geography/design.md, block l10.
// Research: docs/research/knowing-where-places-are.md G4, G8.
(() => {
  const GEN = 'g-us-capitals-west';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // seven of the 25 are cities already placed in parts 8 and 9; they come back as capitals (named from the lit state) and in the pairs below
  const PLACED = ['sacramento', 'honolulu', 'salt-lake-city', 'denver', 'phoenix', 'columbus', 'indianapolis'];
  // the capital and the bigger city it is mixed up with, asked one after the other: the big city is a due item of part 8 or 9
  const PAIRS = [['springfield', 'chicago', 'g-us-cities-east'], ['jefferson-city', 'kansas-city', 'g-us-cities-west'], ['carson-city', 'las-vegas', 'g-us-cities-west'], ['sacramento', 'los-angeles', 'g-us-cities-west']];
  // the states named from the lit state (a capital is asked by its name only if it was in the practice): three of the pairs, and two placed cities that are capitals
  const NAMED = ['springfield', 'jefferson-city', 'carson-city', 'phoenix', 'columbus'];
  // one map per view, each with its capitals lit and named and the states that fit beside them (view: centre x, centre y, zoom)
  const SCREENS = [
    { title: 'The Pacific states', says: "Washington's capital is Olympia, at the south end of Puget Sound. Oregon's is Salem, south of Portland. California's is Sacramento, inland. None of the three is the state's biggest city.", slips: ['sacramento-la'],
      lit: ['olympia', 'salem', 'sacramento'], names: ['oregon', 'california'], view: [160, 162, 2.1] },
    { title: 'Alaska and Hawaii', says: "Juneau is Alaska's capital, in the southeast. Honolulu is Hawaii's capital and its biggest city. Both are drawn in boxes at the bottom left.", slips: [],
      lit: ['juneau', 'honolulu'], names: ['alaska', 'hawaii'], view: [267, 467, 4.7] },
    { title: 'The northern Mountain states', says: 'Montana: Helena. Idaho: Boise. Wyoming: Cheyenne. Nevada: Carson City, small, in the far west. Utah: Salt Lake City.', slips: ['carson-vegas'],
      lit: ['helena', 'boise', 'cheyenne', 'carson-city', 'salt-lake-city'], names: ['montana', 'wyoming', 'utah'], view: [298, 159, 3] },
    { title: 'The southern Mountain states', says: 'Colorado: Denver. Arizona: Phoenix. New Mexico: Santa Fe, northeast of Albuquerque.', slips: [],
      lit: ['denver', 'phoenix', 'santa-fe'], names: ['colorado', 'arizona', 'new-mexico'], view: [316, 288, 3.5] },
    { title: 'The Great Lakes states', says: 'Ohio: Columbus. Indiana: Indianapolis. Illinois: Springfield, in the middle of the state. Michigan: Lansing. Wisconsin: Madison. Minnesota: St. Paul, next to Minneapolis.', slips: ['springfield-chicago'],
      lit: ['columbus', 'indianapolis', 'springfield', 'lansing', 'madison', 'st-paul'], names: ['ohio', 'indiana', 'michigan', 'wisconsin', 'minnesota'], view: [613, 164, 3.5] },
    { title: 'The Plains states', says: 'Iowa: Des Moines. Missouri: Jefferson City, in the middle of the state. North Dakota: Bismarck. South Dakota: Pierre. Nebraska: Lincoln. Kansas: Topeka.', slips: ['jefferson-kansas-city'],
      lit: ['des-moines', 'jefferson-city', 'bismarck', 'pierre', 'lincoln', 'topeka'], names: ['north-dakota', 'south-dakota', 'nebraska', 'iowa', 'missouri'], view: [511, 188, 2.4] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, lit, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of six views. Say each name as you find it. None of it stays up: next you find the capitals on a map with no names. ${says}` : says },
      { kind: 'map', region: 'us', lit, labels: names, view }, ...apart(slips)] });
  const pairIds = PAIRS.map(([capital]) => capital);
  const taps = [...PAIRS.map(([capital, city, cities]) => [one(capital, 'tap'), one(city, 'tap', cities)]),
    ...PLACES.filter(id => ![...PLACED, ...pairIds].includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l8', 'l9'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l10', part: '10', title: 'The capitals of the West and the Midwest', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'The news says "Sacramento passed a law" or "Springfield is debating the budget", and means the state. If you cannot say where the capital is, or take it for the big city next door, you misplace the story. In about sixteen minutes you will place the 25 capitals of the West and the Midwest on a blank map, by finding the state first, then the part of it, then name five from the lit state.',
    flow: [
      { title: 'How to find a capital', show: [{ kind: 'prose', text: 'A state\'s capital is where its government sits, and the news uses its name for the whole state. It is often not the biggest city, so the city you know is the wrong answer for many states. The questions are the same as for any place: the state first, then the part of it, and one more: which bigger city is it mixed up with? The 25 capitals of the West and the Midwest come in six views, grouped as the states lessons group the states (the world map you met first does not divide the United States). Seven are cities you already placed (Sacramento, Phoenix, Denver, Salt Lake City, Honolulu, Columbus and Indianapolis); they come back as capitals. You tap a capital as its dot; the other way you see the state lit and type its capital. After every answer the feedback gives you the capital, its state and the part of it, and the bigger city it is not.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-sacramento' },
      { worked: 'w-name-california' },
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
