// Geography, part 5, The South, from Texas to Kentucky: the way of thinking first (the area, what touches it, the water), with this region's halves; a state found from its
// half and its neighbor and water shown done; one look at the region's map with its names and the look-alikes told apart, before any case uses them; a state
// found from its half shown done; every state tapped, then three look-alikes named and four states' neighbors and water, mixed; then the check drawn from the group by form. From the second set on, a fifth of
// each set is places of earlier lessons. Design record: docs/subjects/geography/design.md, block l5.
(() => {
  const GEN = 'g-us-south-central';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const PANELS = [
    { says: "The Gulf states, along the Gulf of Mexico.", names: ["texas", "louisiana", "mississippi", "alabama", "gulf-of-mexico"], view: [568, 416, 2.7] },
    { says: "The states inland.", names: ["oklahoma", "arkansas", "tennessee", "kentucky"], view: [592, 302, 3.3] }
  ];
  const panelBlocks = ({ says, names, view }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', labels: names, view }];
  // the look-alikes, told apart in the look by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip, GROUP = FC.get('geography').gens[GEN].places;
  const APART = [...new Set(Object.values(GROUP.slips))].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const PAIRS = [["mississippi", "alabama"], ["tennessee", "kentucky"]];
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // the water and rivers of lesson 2 this region sits on, asked again among its states
  const DUE = [["g-us-frame", ["gulf-of-mexico"]], ["g-us-rivers", ["mississippi-river", "tennessee-river", "arkansas-river"]]].flatMap(([gen, ids]) => ids.map(id => one(id, 'tap', gen)));
  // the states named from memory: the look-alikes, whose shapes are what gets mixed up
  const NAMED = ["mississippi", "alabama", "tennessee"];
  const mix = { from: ["l1", "l1b", "l1c", "l2", "l2b", "l3", "l4"], share: 0.2 };

  FC.lesson('geography', {
    id: 'l5', part: '5', title: "The South, from Texas to Kentucky", rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: "A hurricane is heading for Louisiana, or a cousin lives in Tennessee. If the South is one shape to you, you cannot follow either. In about fifteen minutes you will place the eight states from Texas to Kentucky, by finding their row first, name the ones most often mixed up and say what touches four of them.",
    flow: [
      { title: 'How to find a state', show: [{ kind: 'prose', text: "The same three questions as for any place. What bigger area is it in? What touches it? What water is it on? Here the area is this part of the South, in two rows: the Gulf states along the Gulf of Mexico (Texas, Louisiana, Mississippi, Alabama) and the inland row above them (Oklahoma, Arkansas, Tennessee, Kentucky). Find the row first, then the state. After every answer the feedback gives you the three: Area, Touches, Water." }] },
      { title: "The South, from Texas to Kentucky, with its names",
        show: [{ kind: 'prose', text: "Look for about a minute. Say each name as you find it: the Gulf states, then the states inland. None of it stays up: next you find them on a map with no names." }, ...PANELS.flatMap(panelBlocks), ...APART] },
      { worked: 'w-tap-arkansas' },
      { worked: 'w-border-arkansas' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: 4, with: { form: 'border' } }, ...DUE], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 7, name: 2, border: 3 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
