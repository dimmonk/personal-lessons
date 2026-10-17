// Geography, part 2b, the big rivers of the United States: the way of thinking for a river (where it ends, then where it runs), the rivers on three screens
// with their names, the Mississippi found in its steps and shown done, every river tapped, the look-alikes named and told apart, then the check drawn
// from the group by form. A fifth of each set from the second on is places of parts 1 to 2.
(() => {
  const GEN = 'g-us-rivers';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const SCREENS = [
    { title: 'Three rivers of the middle', says: 'The Mississippi runs down the middle to the Gulf; the Missouri comes in from the northwest and the Ohio from the east.', lit: ['mississippi-river', 'missouri-river', 'ohio-river'], view: [533, 191, 2.1] },
    { title: 'Three more that end in the middle', says: 'The Arkansas runs into the Mississippi from the west; the Tennessee runs into the Ohio; the Hudson, far east, ends at the Atlantic.', lit: ['arkansas-river', 'tennessee-river', 'hudson-river'], view: [652, 229, 1.7] },
    { title: 'Four rivers of the West', says: 'The Columbia ends at the Pacific in the northwest, and the Snake runs into it; the Colorado runs southwest to Mexico; the Rio Grande runs along the Mexican border to the Gulf of Mexico.', lit: ['colorado-river', 'columbia-river', 'snake-river', 'rio-grande-river'] }
  ];
  const screens = SCREENS.map(({ title, says, lit, view }) => ({ title, show: [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', lit, ...(view ? { view } : {}) }] }));
  const SLIPS = FC.get('geography').meta.lists.slip;
  const APART = { title: 'Tell them apart', show: ['missouri-mississippi', 'ohio-tennessee', 'snake-columbia'].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` })) };
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const NAMED = ['mississippi-river', 'missouri-river', 'ohio-river', 'tennessee-river'];

  FC.lesson('geography', {
    id: 'l2b', part: '2b', title: 'The big rivers', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: 'A barge is stuck on the Mississippi, or the Colorado is running dry. A river is named in the news more often than most states, and it runs through several. In about thirteen minutes you will tap ten big rivers, each found from where it ends, and name the four most often mixed up.',
    flow: [
      { title: 'How to find a river', show: [{ kind: 'prose', text: 'A river runs through many places, so you find it from where it ends. Area: which region does it run through? Touches: which bigger river or sea does it run into? Water: is that the Gulf of Mexico, the Atlantic or the Pacific? Find where it ends, then follow it back. A river shares its name with a state now and then (the Mississippi, the Ohio): here it is the river you tap, the line on the map, not the state. Next, the rivers on three screens; none of it stays up.' }] },
      ...screens,
      APART,
      { worked: 'w-tap-mississippi' },
      { worked: 'w-tap-ohio' },
      { set: { items: PLACES.map(id => one(id, 'tap')), order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix: { from: ['l1', 'l1b', 'l1c', 'l2'], share: 0.2 } } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
