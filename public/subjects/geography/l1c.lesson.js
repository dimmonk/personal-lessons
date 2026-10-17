// Geography, part 1c, the parts of Asia and Oceania: the way of thinking restated (find the continent, then the part), one screen of names
// per continent, a part named in its steps and shown done, every part tapped, three look-alikes named, then the check drawn from the group by form (a place is asked by its name only if it was named in the practice). A
// fifth of each set from the second on is places of parts 1 and 1b.
(() => {
  const GEN = 'g-world-parts-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PARTS = { Asia: ['western-asia', 'central-asia', 'south-asia', 'east-asia', 'southeast-asia', 'northern-asia'], Oceania: ['australia-and-new-zealand', 'melanesia'] };
  const VIEWS = { Asia: [722, 138, 1.8], Oceania: [790, 300, 2.4] };
  const COUNT = { Asia: 'six', Oceania: 'two' };
  const screens = Object.entries(PARTS).map(([name, lit]) => ({ title: `${name}, in ${COUNT[name]} parts`,
    show: [{ kind: 'prose', text: `Say each part's name as you find it. A part named for a direction sits on that side of ${name}.` }, { kind: 'map', region: 'world', lit, view: VIEWS[name] }] }));
  const NAMED = ['western-asia', 'central-asia', 'southeast-asia'];

  FC.lesson('geography', {
    id: 'l1c', part: '1c', title: 'The parts of Asia and Oceania', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: 'A story says prices rose across Southeast Asia, or that talks are under way in the Middle East. Those are parts of a continent, and every country you meet later sits in one. In about ten minutes you will tap the six parts of Asia and the two of Oceania, each found from its continent first, and name the ones most often mixed up.',
    flow: [
      { title: 'How to find a part of a continent', show: [{ kind: 'prose', text: 'The same three questions. Area: which continent is it in? Find the continent first. Touches: which side of the continent is it on, and what parts are beside it? Water: which ocean or sea is it on? The feedback after each answer gives the three. Next, one map per continent, with its parts lit and named; none of them stays up.' }] },
      ...screens,
      { worked: 'w-name-southeast-asia' },
      { set: { items: Object.values(PARTS).flat().map(id => one(id, 'tap')), order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix: { from: ['l1', 'l1b'], share: 0.2 } } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2 }, only: { tap: Object.values(PARTS).flat().filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 7 } }]
    }
  });
})();
