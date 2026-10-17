// Geography, part 7, The Northeast: the way of thinking first (the area, what touches it, the water), with this region's halves; a state found from its
// half and its neighbor and water shown done; one look at the region's map with its names and the look-alikes told apart, before any case uses them; a state
// found from its half shown done; every state tapped, then three look-alikes named and four states' neighbors and water, mixed; then the check drawn from the group by form. From the second set on, a fifth of
// each set is places of earlier lessons. Design record: docs/subjects/geography/design.md, block l7.
(() => {
  const GEN = 'g-us-northeast';
  const one = (place, form, gen = GEN) => ({ gen, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  const PANELS = [
    { says: "New England, north: Maine, New Hampshire and Vermont.", names: ["maine", "new-hampshire", "vermont"], view: [845, 105, 6.1] },
    { says: "New England, south: Massachusetts, Rhode Island and Connecticut.", names: ["massachusetts", "rhode-island", "connecticut"], view: [842, 158, 8] },
    { says: "New York, New Jersey and Pennsylvania.", names: ["new-york", "new-jersey", "pennsylvania"], view: [795, 168, 6] }
  ];
  const panelBlocks = ({ says, names, view }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'us', labels: names, view }];
  // the look-alikes, told apart in the look by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip, GROUP = FC.get('geography').gens[GEN].places;
  const APART = [...new Set(Object.values(GROUP.slips))].map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const PAIRS = [["vermont", "new-hampshire"]];
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];
  // the states named from memory: the look-alikes, whose shapes are what gets mixed up
  const NAMED = ["vermont", "new-hampshire", "connecticut"];
  const mix = { from: ["l1", "l1b", "l1c", "l2", "l2b", "l3", "l4", "l5", "l6"], share: 0.2 };

  FC.lesson('geography', {
    id: 'l7', part: '7', title: "The Northeast", rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: "A story takes place in New Hampshire, or someone commutes from New Jersey to New York. The Northeast is small and crowded, so its states are the easiest to mix up. In about fifteen minutes you will place its nine states, by finding their part first, name the ones most often mixed up and say what touches four of them.",
    flow: [
      { title: 'How to find a state', show: [{ kind: 'prose', text: "The same three questions as for any place. What bigger area is it in? What touches it? What water is it on? Here the area is the Northeast, in two parts: New England in the top right corner (Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut) and the Mid-Atlantic states below it (New York, New Jersey, Pennsylvania). Find the part first, then the state. After every answer the feedback gives you the three: Area, Touches, Water." }] },
      { title: "The Northeast, with its names",
        show: [{ kind: 'prose', text: "Look for about a minute. Say each name as you find it: New England, then the three states from New York to Pennsylvania, zoomed in. None of it stays up: next you find them on a map with no names." }, ...PANELS.flatMap(panelBlocks), ...APART] },
      { worked: 'w-tap-vermont' },
      { worked: 'w-border-vermont' },
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
