// Geography, lesson 9, The cities east of the Mississippi: the way of thinking first (the state, the part of it, the water), with this region's six views; the cities on one
// map per view, each lit and named, with the look-alikes told apart before any case uses them; a city tapped and a lit city named, shown done in the three steps and using
// only what the views showed; every city tapped (the look-alikes one after the other), then four of them named from the lit dot, mixed with earlier lessons; then the
// check drawn from the group by form. The Northeast corridor, Washington to Boston, is two views and is told in its order. A city has no neighbor question (a dot has no
// neighbors on the map data), so the forms are tap and name. Design record: docs/subjects/geography/design.md, block l9. Research: docs/research/knowing-where-places-are.md G4, G8.
(() => {
  const GEN = 'g-us-cities-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four most often mixed up, named from the lit dot (a city is asked by its name only if it was in the practice)
  const NAMED = ['cleveland', 'miami', 'baltimore', 'memphis'];
  const PAIRS = [['chicago', 'milwaukee'], ['nashville', 'memphis'], ['charlotte', 'raleigh'], ['columbus', 'cincinnati'], ['tampa', 'miami']];
  // the corridor is tapped in its order, south to north, as the screens told it
  const CORRIDOR = ['washington-dc', 'baltimore', 'philadelphia', 'new-york-city', 'boston'];
  // one map per view, each with its cities lit and named and the states and water that fit beside them (view: centre x, centre y, zoom)
  const SCREENS = [
    { title: 'The Great Lakes', says: 'Chicago is in Illinois and Milwaukee in Wisconsin, both on Lake Michigan. Detroit is in Michigan. Cleveland is in Ohio, on Lake Erie. Buffalo is at the far west end of New York State.', slips: ['chicago-milwaukee', 'detroit-cleveland'],
      lit: ['chicago', 'milwaukee', 'detroit', 'cleveland', 'buffalo'], names: ['illinois', 'wisconsin', 'ohio', 'new-york'], view: [685, 186, 3.6] },
    { title: 'The Ohio valley', says: 'Indianapolis is in the middle of Indiana. Columbus is in the middle of Ohio and Cincinnati in its southwest corner, on the Ohio River. Pittsburgh is in the southwest of Pennsylvania.', slips: ['ohio-three'],
      lit: ['indianapolis', 'columbus', 'cincinnati', 'pittsburgh'], names: ['pennsylvania', 'ohio-river'], view: [689, 223, 4.2] },
    { title: 'Tennessee and the Southeast', says: 'Nashville is in the middle of Tennessee and Memphis in its far southwest corner, on the Mississippi. Atlanta is in the north of Georgia. Charlotte and Raleigh are in North Carolina, Charlotte in the southwest and Raleigh in the center-east.', slips: ['nashville-memphis', 'carolina-two'],
      lit: ['nashville', 'memphis', 'atlanta', 'charlotte', 'raleigh'], names: ['georgia'], view: [688, 334, 3] },
    { title: 'Florida', says: 'Florida has four. Jacksonville is in the northeast corner. Miami is at the southeast tip, on the Atlantic. Tampa is on the Gulf side. Orlando is inland, in the middle.', slips: ['florida-four'],
      lit: ['jacksonville', 'orlando', 'tampa', 'miami'], names: ['gulf-of-mexico', 'atlantic'], view: [779, 435, 3.1] },
    { title: 'The Northeast corridor, south', says: 'The corridor runs up the coast in order. Washington, D.C., is between Maryland and Virginia, on no state. Baltimore is in Maryland, Philadelphia in Pennsylvania, New York City at the southern tip of New York State. Boston, the last on the list, is on the next view.', slips: ['corridor'],
      lit: ['washington-dc', 'baltimore', 'philadelphia', 'new-york-city'], names: ['pennsylvania'], view: [799, 208, 6] },
    { title: 'The Northeast corridor, north', says: 'Boston ends the corridor, in Massachusetts, in New England. New York City is below it.', slips: ['new-york-two'],
      lit: ['new-york-city', 'boston'], names: ['new-york', 'connecticut'], view: [827, 164, 6] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, lit, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of six views. Say each name as you find it. None of it stays up: next you find the cities on a map with no names. ${says}` : says },
      { kind: 'map', region: 'us', lit, labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => ![...PAIRS.flat(), ...CORRIDOR].includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l8'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l9', part: '9', title: 'The cities east of the Mississippi', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A report from Pittsburgh, a flight to Atlanta, a hurricane warning for Miami: if the city is a blank to you, so is the story. In about sixteen minutes you will place the 23 big cities east of the Mississippi on a blank map, by finding the state first and then the part of it and the water, then name the four most often mixed up from the lit dot.',
    flow: [
      { title: 'How to find a city', show: [{ kind: 'prose', text: 'The same questions as for the cities of the west. The state first, since you have placed every state; then the part of the state; then the water it stands on, a Great Lake, a river or the ocean. East of the Mississippi means by state: Wisconsin, Illinois, Kentucky, Tennessee, Mississippi and every state east of them, in six views. This east and west split is made only for these cities: the world map you met first puts all of them in one part, Northern America. The Northeast corridor is the one place where order helps: the big cities come up the coast one after another, Washington, D.C., Baltimore, Philadelphia, New York City, Boston. After every answer the feedback gives you the state and the part of it, the water, and what tells the city from the one it is mixed up with.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-pittsburgh' },
      { worked: 'w-name-tampa' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: CORRIDOR.map(id => one(id, 'tap')), order: 'listed' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 8, name: 4 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
