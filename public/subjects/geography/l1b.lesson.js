// Geography, part 1b, the parts of the Americas, Europe and Africa: the way of thinking restated (find the continent, then the part), one screen of names
// per continent, a part named in its steps and shown done, every part tapped, three look-alikes named, then the check drawn from the group by form (a place is asked by its name only if it was named in the practice). A
// fifth of each set from the second on is continents and oceans of part 1. Asia's and Oceania's parts are part 1c.
(() => {
  const GEN = 'g-world-parts-west';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PARTS = { 'North America': ['northern-america', 'central-america', 'the-caribbean'], Europe: ['northern-europe', 'western-europe', 'southern-europe', 'eastern-europe'],
    Africa: ['northern-africa', 'west-africa', 'central-africa', 'east-africa', 'southern-africa'] };
  const VIEWS = { 'North America': [254, 148, 2.6], Europe: [436, 184, 2.2], Africa: [536, 310, 1.4] };
  const COUNT = { 'North America': 'three', Europe: 'four', Africa: 'five' };
  const screens = Object.entries(PARTS).map(([name, lit]) => ({ title: `${name}, in ${COUNT[name]} parts`,
    show: [{ kind: 'prose', text: `Say each part's name as you find it. A part named for a direction sits on that side of ${name}.` }, { kind: 'map', region: 'world', lit, view: VIEWS[name] }] }));
  const NAMED = ['northern-america', 'central-america', 'west-africa'];
  const APART = { title: 'Two names that look alike', show: [{ kind: 'prose', text: 'North America is the whole continent. Northern America is its top part only: Canada, the United States and Greenland. Central America and the Caribbean are its other two parts.' }] };

  FC.lesson('geography', {
    id: 'l1b', part: '1b', title: 'The parts of the Americas, Europe and Africa', rev: 2, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }, { rev: 2, date: '2026-10-23', change: 'The world map is drawn in Winkel tripel, so the views of it are placed again on the new map.' }],
    why: 'A story says a ship sank off West Africa, or that a storm hit Central America. Those are parts of a continent, and every country you meet later sits in one. In about twelve minutes you will tap the twelve parts of North America, Europe and Africa, each found from its continent first, and name the ones most often mixed up.',
    flow: [
      { title: 'How to find a part of a continent', show: [{ kind: 'prose', text: 'The same three questions. Area: which continent is it in? Find the continent first. Touches: which side of the continent is it on, and what parts are beside it? Water: which ocean or sea is it on? The feedback after each answer gives the three. Next, one map per continent, with its parts lit and named; none of them stays up.' }] },
      ...screens,
      APART,
      { worked: 'w-name-west-africa' },
      { set: { items: Object.values(PARTS).flat().map(id => one(id, 'tap')), order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix: { from: ['l1'], share: 0.2 } } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2 }, only: { tap: Object.values(PARTS).flat().filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
