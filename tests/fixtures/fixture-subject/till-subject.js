// A third made-up subject, used only by the tests: working out what a receipt comes to. It exercises the typed number (a frame with one
// blank and with two, tolerances by rounding, by distance and by share, named slips, an estimate before the exact answer, the calculator,
// "your answer and your estimate disagree"), steps left to the learner, and every kind of document and figure. It is never shipped.
FC.subject('till', {
  name: 'At the till',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-10', change: 'Made for the tests of the typed number, the documents and the figures.' }],
  endResult: 'Work out what a receipt comes to, first in your head and then exactly, and notice when a total is far off.',
  parts: [{ id: '1', title: 'Count the cart' }],
  complete: true,
  lists: {
    slip: [{ id: 'left-out', text: 'left a line out of the total' }, { id: 'point', text: 'put the decimal point in the wrong place' }]
  },
  facets: { kind: { name: 'Kind', values: [{ id: 'sum', text: 'sums' }, { id: 'scale', text: 'recipes' }] } },
  mix: [],
  strands: [{ id: 'amounts', title: 'Working out amounts' }],
  readingShare: 0.6
});
