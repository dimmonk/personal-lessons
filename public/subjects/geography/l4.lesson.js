// Geography, part 4, The Midwest: the way of thinking first (the area, what touches it, the water), with this region's halves; a state found from its
// half and its neighbor and water shown done; one look at the region's map with its names and the look-alikes told apart, before any case uses them; a state
// found from its half shown done; every state tapped, then three look-alikes named and four states' neighbors and water, mixed; then the check drawn from the group by form. From the second set on, a fifth of
// each set is places of earlier lessons. Design record: docs/subjects/geography/design.md, block l4.
(() => {
  const GEN = 'g-us-midwest';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const PANELS = [
    { says: "The Great Lakes states.", names: ["minnesota", "wisconsin", "michigan", "illinois", "indiana", "ohio"], view: [613, 169, 2.6] },
    { says: "The Plains states.", names: ["north-dakota", "south-dakota", "nebraska", "kansas", "iowa", "missouri"], view: [498, 181, 1.7] }
  ];
  const panelBlocks = ({ says, names, view }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', labels: names, view }];
  // the look-alikes, told apart in the look by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip, GROUP = FC.get('geography').gens[GEN].places;
  const APART = [...new Set(Object.values(GROUP.slips))].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const PAIRS = [["illinois", "indiana"], ["north-dakota", "south-dakota"]];
  // a place of an earlier lesson asked beside the one it is mixed up with
  const BESIDE = [["g-us-west", "idaho", "iowa"]];
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...BESIDE.map(([gen, due, id]) => [one(due, 'tap', gen), one(id, 'tap')]),
    ...PLACES.filter(id => !PAIRS.flat().includes(id) && !BESIDE.some(b => b[2] === id)).map(id => one(id, 'tap'))];
  // the states named from memory: the look-alikes, whose shapes are what gets mixed up
  const NAMED = ["illinois", "indiana", "north-dakota"];
  const mix = { from: ["l1", "l1b", "l1c", "l2", "l2b", "l3"], share: 0.2 };

  FC.lesson('geography', {
    id: 'l4', part: '4', title: "The Midwest", rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: "The news says floods hit Iowa and Missouri, or a plant is closing in Ohio. If the middle of the country is a blur, you lose the story. In about fifteen minutes you will place the twelve states of the Midwest, by finding its half first, name the ones most often mixed up and say what touches four of them.",
    flow: [
      { title: 'How to find a state', show: [{ kind: 'prose', text: "The same three questions as for any place. What bigger area is it in? What touches it? What water is it on? Here the area is the Midwest, in two halves: the Great Lakes states (Ohio to Minnesota, each touching a lake) and the Plains states west of them (the two Dakotas down to Kansas, with Iowa and Missouri between the rivers). Find the half first, then the state. After every answer the feedback gives you the three: Area, Touches, Water." }] },
      { title: "The Midwest, with its names",
        show: [{ kind: 'prose', text: "Look for about a minute. Say each name as you find it: the Great Lakes states, then the Plains states. None of it stays up: next you find them on a map with no names." }, ...PANELS.flatMap(panelBlocks), ...APART] },
      { worked: 'w-tap-iowa' },
      { worked: 'w-border-iowa' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: 4, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 7, name: 2, border: 3 } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
