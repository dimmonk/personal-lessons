// Geography, part 6, The South, the Atlantic side: the way of thinking first (the area, what touches it, the water), with this region's halves; a state found from its
// half and its neighbor and water shown done; one look at the region's map with its names and the look-alikes told apart, before any case uses them; a state
// found from its half shown done; every state tapped, then three look-alikes named and four states' neighbors and water, mixed; then the check drawn from the group by form. From the second set on, a fifth of
// each set is places of earlier lessons. Design record: docs/subjects/geography/design.md, block l6.
(() => {
  const GEN = 'g-us-south-atlantic';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const PANELS = [
    { says: "Florida up the coast to Virginia.", names: ["florida", "georgia", "south-carolina", "north-carolina", "virginia"], view: [688, 360, 1.6] },
    { says: "West Virginia, Maryland and Delaware, zoomed in.", names: ["west-virginia", "maryland", "delaware", "virginia", "pennsylvania"], view: [770, 226, 5.3] },
    { says: "Washington, D.C., the small district between Maryland and Virginia, zoomed in the most.", names: ["maryland", "district-of-columbia", "virginia"], view: [779, 240, 8] }
  ];
  const panelBlocks = ({ says, names, view }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', labels: names, view }];
  // the look-alikes, told apart in the look by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip, GROUP = FC.get('geography').gens[GEN].places;
  const APART = [...new Set(Object.values(GROUP.slips))].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const PAIRS = [["south-carolina", "north-carolina"], ["virginia", "west-virginia"], ["maryland", "delaware"]];
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // the states named from memory: the look-alikes, whose shapes are what gets mixed up
  const NAMED = ["north-carolina", "south-carolina", "virginia"];
  const mix = { from: ["l1", "l1b", "l1c", "l2", "l2b", "l3", "l4", "l5"], share: 0.2 };

  FC.lesson('geography', {
    id: 'l6', part: '6', title: "The South, the Atlantic side", rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: "A friend flies into Charlotte, or the news is from Washington, D.C. If the Atlantic side of the South runs together for you, you cannot place either. In about fifteen minutes you will place its eight states and D.C., by going down the coast, name the ones most often mixed up and say what touches four of them.",
    flow: [
      { title: 'How to find a state', show: [{ kind: 'prose', text: "The same three questions as for any place. What bigger area is it in? What touches it? What water is it on? Here the area is the South's Atlantic side: a line of states down the Atlantic coast, from Delaware and Maryland to Florida, with West Virginia inland behind Virginia and Washington, D.C. between Maryland and Virginia. Find the coast first, then count down it. After every answer the feedback gives you the three: Area, Touches, Water." }] },
      { title: "The South, the Atlantic side, with its names",
        show: [{ kind: 'prose', text: "Look for about a minute. Say each name as you find it: Florida up the coast to Virginia, then the four small ones, zoomed in. None of it stays up: next you find them on a map with no names." }, ...PANELS.flatMap(panelBlocks), ...APART] },
      { worked: 'w-tap-south-carolina' },
      { worked: 'w-border-south-carolina' },
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
