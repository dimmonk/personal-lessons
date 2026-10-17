// Geography, part 3, The West: the way of thinking first (the area, what touches it, the water), with this region's halves; a state found from its
// half and its neighbor and water shown done; one look at the region's map with its names and the look-alikes told apart, before any case uses them; a state
// found from its half shown done; every state tapped, then three look-alikes named and four states' neighbors and water, mixed; then the check drawn from the group by form. From the second set on, a fifth of
// each set is places of earlier lessons. Design record: docs/subjects/geography/design.md, block l3.
(() => {
  const GEN = 'g-us-west';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const PANELS = [
    { says: "The Pacific states: Washington, Oregon and California.", names: ["washington", "oregon", "california"], view: [357, 187, 1.4] },
    { says: "The northern Mountain states: Montana, Idaho and Wyoming.", names: ["montana", "idaho", "wyoming"], view: [304, 128, 3.6] },
    { says: "The southern Mountain states: Nevada, Utah, Colorado, Arizona and New Mexico.", names: ["nevada", "utah", "colorado", "arizona", "new-mexico"], view: [275, 272, 2.4] },
    { says: "Alaska and Hawaii, drawn in boxes at the bottom left, not where they are.", names: ["alaska", "hawaii"], view: [267, 444, 3.3] }
  ];
  const panelBlocks = ({ says, names, view }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', labels: names, view }];
  // the look-alikes, told apart in the look by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip, GROUP = FC.get('geography').gens[GEN].places;
  const APART = [...new Set(Object.values(GROUP.slips))].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const PAIRS = [["wyoming", "colorado"], ["idaho", "montana"]];
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // the states named from memory: the look-alikes, whose shapes are what gets mixed up
  const NAMED = ["wyoming", "colorado", "idaho"];
  const mix = { from: ["l1", "l1b", "l1c", "l2", "l2b"], share: 0.2 };

  FC.lesson('geography', {
    id: 'l3', part: '3', title: "The West", rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: "A friend is moving from Oregon to Colorado, or a fire is burning near the Nevada line. If the West is one big blank to you, you cannot picture either. In about fifteen minutes you will place the thirteen states of the West, Alaska and Hawaii among them, by finding the half of the West each sits in first, then name the ones most often mixed up and say what touches four of them.",
    flow: [
      { title: 'How to find a state', show: [{ kind: 'prose', text: "The same three questions as for any place. What bigger area is it in? What touches it? What water is it on? Here the area is the West, in two halves: the Pacific side (Washington, Oregon and California, with Alaska and Hawaii drawn in boxes) and the mountain half inland, from Montana down to New Mexico. Find the half first, then the state. After every answer the feedback gives you the three: Area, Touches, Water." }] },
      { title: "The West, with its names",
        show: [{ kind: 'prose', text: "Look for about a minute. Say each name as you find it: the Pacific states, then the Mountain states, then Alaska and Hawaii in their boxes. None of it stays up: next you find them on a map with no names." }, ...PANELS.flatMap(panelBlocks), ...APART] },
      { worked: 'w-tap-nevada' },
      { worked: 'w-border-nevada' },
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
