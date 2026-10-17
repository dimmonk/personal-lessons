// Geography, part 1, the continents and the oceans: the way of thinking first (area, touches, water), a continent found in its steps and shown done, one
// look at the whole map with its names, every continent and ocean tapped, the ones most often mixed up named, then the check drawn from the group by form (a place is asked by its name only if it was named in the practice).
(() => {
  const GEN = 'g-world-big';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const CONTINENTS = ['north-america', 'south-america', 'europe', 'africa', 'asia', 'oceania', 'antarctica'];
  const OCEANS = ['pacific', 'atlantic', 'indian', 'arctic', 'southern'];
  const PANELS = [{ says: 'The seven continents.', names: CONTINENTS }, { says: 'The five oceans. The Pacific is so wide that it shows at both edges of the map.', names: OCEANS }];
  const panelBlocks = ({ says, names }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'world', labels: names }];
  // named from memory: the ones most often mixed up (the rest are tapped: a story names a place, it does not light one)
  const NAMED = ['oceania', 'indian', 'arctic', 'southern'];

  FC.lesson('geography', {
    id: 'l1', part: '1', title: 'The continents and the oceans', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: 'A story says a ship sank in the Indian Ocean, or that a storm crossed the Atlantic. If you cannot see where that is on the world, the story has no place to sit. In about twelve minutes you will learn the way to find any place, and use it to tap the seven continents and the five oceans every later place sits in.',
    flow: [
      { title: 'How to find any place', show: [
        { kind: 'prose', text: 'You will learn where places are with no map in front of you, the way a story names them. For any place, answer three questions, in this order.' },
        { kind: 'prose', text: '1. Area: what bigger area is it in? A country is in a part of a continent, a state is in a region of the country. The area tells you where on the map to look, so you start there, not with the place itself.' },
        { kind: 'prose', text: '2. Touches: what is next to it? Its neighbors pin down the exact spot, and they are what the news uses: "near the border with France", "just over the Nevada line".' },
        { kind: 'prose', text: '3. Water: what water is it on? An ocean, a sea, a lake, or none. Whether a place is on the coast or inland is often the point of the story: a storm, a port, a ship.' },
        { kind: 'prose', text: 'First come the biggest areas of all, the continents and the oceans: every later place sits in one of them. After each answer the feedback says where the place sits, what is beside it and its water.' }] },
      { title: 'The world, with its names',
        show: [{ kind: 'prose', text: 'Look for about a minute. Say each name as you find it. None of it stays up: next you find them on a map with no names.' }, ...PANELS.flatMap(panelBlocks)] },
      { worked: 'w-tap-africa' },
      { set: { items: [...CONTINENTS, ...OCEANS].map(id => one(id, 'tap')), order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2 }, only: { tap: [...CONTINENTS, ...OCEANS].filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
