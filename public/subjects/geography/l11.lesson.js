// Geography, part 11, The capitals of the South and the Northeast: the way of thinking first (the state, the part of it, the water, and the bigger city a capital is mixed up
// with), with this region's five views; the 25 capitals on one map per view, each lit and named, with the look-alikes told apart before any case uses them; a capital tapped and
// a state lit and its capital typed, shown done in the three steps and using only what the views showed; the capitals not yet placed as cities tapped, with the three capital and
// big-city pairs the record names asked one after the other (the big city is a due item from part 9); then five states named from the lit state, mixed with earlier lessons; then
// the check drawn from the group by form. A capital is the name the news uses for a state's government. Design record: docs/subjects/geography/design.md, block l11.
// Research: docs/research/knowing-where-places-are.md G4, G8.
(() => {
  const GEN = 'g-us-capitals-east';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // six of the 25 are cities already placed in parts 8 and 9; they come back as capitals (named from the lit state)
  const PLACED = ['austin', 'oklahoma-city', 'nashville', 'atlanta', 'raleigh', 'boston'];
  // the capital and the bigger city it is mixed up with, asked one after the other: the big city is a due item of part 9
  const PAIRS = [['albany', 'new-york-city'], ['tallahassee', 'miami'], ['harrisburg', 'philadelphia']];
  // the states named from the lit state (a capital is asked by its name only if it was in the practice): two of the pairs, a placed city that is a capital, and two more
  // capitals mixed up with a bigger or a better-known city
  const NAMED = ['harrisburg', 'tallahassee', 'austin', 'columbia', 'baton-rouge'];
  // one map per view, each with its capitals lit and named and the states that fit beside them (view: centre x, centre y, zoom)
  const SCREENS = [
    { title: 'Texas to Mississippi', says: 'Texas: Austin, in the center. Oklahoma: Oklahoma City. Arkansas: Little Rock. Louisiana: Baton Rouge, upriver from New Orleans. Mississippi: Jackson.', slips: [],
      lit: ['austin', 'oklahoma-city', 'little-rock', 'baton-rouge', 'jackson'], names: ['texas', 'louisiana'], view: [537, 374, 3.5] },
    { title: 'The inland South and Florida', says: 'Alabama: Montgomery. Tennessee: Nashville. Kentucky: Frankfort. Georgia: Atlanta. Florida: Tallahassee, far north in the Panhandle, not Miami.', slips: ['tallahassee-miami'],
      lit: ['montgomery', 'nashville', 'frankfort', 'atlanta', 'tallahassee'], names: ['alabama', 'tennessee', 'florida'], view: [703, 358, 2.4] },
    { title: 'The Atlantic South', says: 'South Carolina: Columbia. North Carolina: Raleigh. Virginia: Richmond. West Virginia: Charleston. Maryland: Annapolis, on the bay. Delaware: Dover.', slips: ['columbia-charleston'],
      lit: ['columbia', 'raleigh', 'richmond', 'charleston', 'annapolis', 'dover'], names: ['south-carolina', 'north-carolina', 'virginia', 'west-virginia'], view: [765, 277, 4.1] },
    { title: 'New England', says: 'Maine: Augusta. New Hampshire: Concord. Vermont: Montpelier. Massachusetts: Boston. Rhode Island: Providence. Connecticut: Hartford.', slips: [],
      lit: ['augusta', 'concord', 'montpelier', 'boston', 'providence', 'hartford'], names: ['maine', 'massachusetts'], view: [846, 121, 3.5] },
    { title: 'The Mid-Atlantic', says: 'New York: Albany, up the Hudson River from New York City. New Jersey: Trenton. Pennsylvania: Harrisburg, inland.', slips: ['albany-nyc', 'harrisburg-philadelphia'],
      lit: ['albany', 'trenton', 'harrisburg'], names: ['new-york', 'new-jersey', 'pennsylvania'], view: [796, 173, 5] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, lit, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of five views. Say each name as you find it. None of it stays up: next you find the capitals on a map with no names. ${says}` : says },
      { kind: 'map', region: 'us', lit, labels: names, view }, ...apart(slips)] });
  const pairIds = PAIRS.map(([capital]) => capital);
  const taps = [...PAIRS.map(([capital, city]) => [one(capital, 'tap'), one(city, 'tap', 'g-us-cities-east')]),
    ...PLACES.filter(id => ![...PLACED, ...pairIds].includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l8', 'l9', 'l10'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l11', part: '11', title: 'The capitals of the South and the Northeast', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'The news says "Albany raised a tax" or "Tallahassee passed a bill", and means the state. If you take the capital for the famous city, New York City or Miami, you misplace the story. In about sixteen minutes you will place the 25 capitals of the South and the Northeast on a blank map, by finding the state first, then the part of it, then name five from the lit state.',
    flow: [
      { title: 'How to find a capital', show: [{ kind: 'prose', text: 'A state\'s capital is where its government sits, and the news uses its name for the whole state. It is often not the biggest or the best-known city, so the city you know is the wrong answer for many states. The questions are the same as for any place: the state first, then the part of it, and one more: which bigger city is it mixed up with? The 25 capitals of the South and the Northeast come in five views, grouped as the states lessons group the states (Delaware and Maryland count as the South; the world map you met first does not divide the United States). Six are cities you already placed (Austin, Oklahoma City, Nashville, Atlanta, Raleigh and Boston); they come back as capitals. You tap a capital as its dot; the other way you see the state lit and type its capital. After every answer the feedback gives you the capital, its state and the part of it, and the bigger city it is not.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-albany' },
      { worked: 'w-name-new-york' },
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
