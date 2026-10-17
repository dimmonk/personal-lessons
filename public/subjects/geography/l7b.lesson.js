// Geography, part 7b, the lower 48, mixed: the way of thinking restated, then states of all four regions tapped in one mixed set, each found from its region
// first, the look-alikes side by side, then a check drawn from the whole country: a state of each region tapped and one named, and two neighbors and their water. It comes after the states region by region (parts 3 to 7), so the states
// are mixed only once each region has been met on its own.
(() => {
  const GENS = ['g-us-west', 'g-us-midwest', 'g-us-south-central', 'g-us-south-atlantic', 'g-us-northeast'];
  const one = (gen, place) => ({ gen, n: 1, with: { place, form: 'tap' } });
  // the look-alikes from different regions, side by side, then two of each region's states, drawn fresh each time
  const PAIRS = [[one('g-us-west', 'idaho'), one('g-us-midwest', 'iowa')], [one('g-us-west', 'washington'), one('g-us-south-atlantic', 'district-of-columbia')],
    [one('g-us-midwest', 'ohio'), one('g-us-south-central', 'kentucky')], [one('g-us-south-atlantic', 'virginia'), one('g-us-northeast', 'pennsylvania')]];
  const DRAWN = GENS.map(gen => ({ gen, n: 2, with: { form: 'tap' } }));

  FC.lesson('geography', {
    id: 'l7b', part: '7b', title: 'The lower 48, mixed', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-17', change: 'First version.' }],
    why: 'In real life a state is never named next to its neighbors: a story jumps from Ohio to Arizona to Georgia. In about ten minutes you will place states from all four regions in one mixed run, each found from its region first, until the whole country holds together.',
    flow: [
      { title: 'All four regions at once', show: [{ kind: 'prose', text: 'Now the states come mixed, from every region. For each one, the same three questions: which region is it in, the West, the Midwest, the South or the Northeast? Which part of that region, and what touches it? What water is it on? Find the region first, then the state.' }] },
      { set: { items: [...PAIRS, ...DRAWN, ...['g-us-west', 'g-us-northeast'].map(gen => ({ gen, n: 1, with: { form: 'name' } })), { gen: 'g-us-south-central', n: 1, with: { form: 'border' } }], order: 'shuffle', mix: { from: ['l3', 'l4', 'l5', 'l6', 'l7'], share: 0.2 } } }
    ],
    check: {
      items: [...GENS.flatMap(gen => [{ gen, n: 1, with: { form: 'tap' } }, { gen, n: 1, with: { form: 'name' } }]), { gen: 'g-us-south-central', n: 1, with: { form: 'border' } }, { gen: 'g-us-midwest', n: 1, with: { form: 'border' } }],
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();
