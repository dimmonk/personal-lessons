// Geography, part 2, the frame of the United States: the way of thinking first, its regions, coasts, ranges and lakes, each on a screen of its own with the
// names, a case of each kind shown done (a coast, a range, a lake), every place tapped and the two long ranges named, then the check drawn from the group
// by form. A fifth of each set from the second on is places of parts 1 to 1c. The rivers are part 2b.
(() => {
  const GEN = 'g-us-frame';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const SCREENS = [
    { title: 'The four regions and the three coasts', says: 'Say each name as you find it: the West, the Midwest, the South and the Northeast, then the three coasts round them.',
      maps: [{ lit: ['west', 'midwest', 'south', 'northeast'], view: [455, 279, 1.1] }, { lit: ['west-coast', 'east-coast', 'gulf-coast', 'gulf-of-mexico'], view: [463, 262, 1.1] }] },
    { title: 'The four big ranges', says: 'Two long ranges run down the country, the Rockies in the West and the Appalachians in the East; two shorter ones stand near the Pacific.',
      maps: [{ lit: ['rocky-mountains', 'appalachian-mountains', 'cascade-range', 'sierra-nevada'], view: [455, 238, 1.1] }] },
    { title: 'The five Great Lakes', says: 'From west to east along the Canadian border: Superior, Michigan, Huron, Erie, Ontario.', maps: [{ lit: ['lake-superior', 'lake-michigan', 'lake-huron', 'lake-erie', 'lake-ontario'], view: [692, 129, 3.2] }] }
  ];
  const screens = SCREENS.map(({ title, says, maps }) => ({ title, show: [{ kind: 'prose', text: says }, ...maps.map(m => ({ kind: 'map', region: 'us', ...m }))] }));
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const mix = { from: ['l1', 'l1b', 'l1c'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l2', part: '2', title: 'The frame of the United States', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: 'Someone says a storm is coming up the Gulf Coast, or that they drove along the Rockies. If the country is one blank shape to you, neither tells you where. In about fifteen minutes you will tap its four regions, three coasts, four big ranges and the five Great Lakes: the frame every state hangs on.',
    flow: [
      { title: 'How to find a place in the United States', show: [{ kind: 'prose', text: 'The same three questions as for the world. Area: what bigger area is it in? Here the areas are the country\'s four regions, the West, the Midwest, the South and the Northeast. Touches: what is next to it? Water: what water is it on, the Pacific, the Atlantic, the Gulf of Mexico or a Great Lake? A coast is a shore; a range runs along a region; a lake sits on the Canadian border. The lower 48 means the states joined together, without Alaska and Hawaii. Next, one screen each for the regions and coasts, the ranges and the lakes; none of it stays up.' }] },
      ...screens,
      { worked: 'w-tap-gulf-coast' },
      { worked: 'w-tap-rockies' },
      { worked: 'w-tap-lake-michigan' },
      { set: { items: PLACES.map(id => one(id, 'tap')), order: 'shuffle' } },
      { set: { items: ['rocky-mountains', 'appalachian-mountains'].map(id => one(id, 'name')), order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 8, name: 2 }, only: { tap: PLACES.filter(id => !['rocky-mountains', 'appalachian-mountains'].includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();
