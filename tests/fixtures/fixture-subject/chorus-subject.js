// A second made-up subject, used only by the tests: singing back notes. It exercises every sung task (warm-up, range, match, hold, slide,
// interval, melody, light), the line that fades, and a check without the line, on the real sung-question code. It is never shipped.
FC.subject('chorus', {
  name: 'Sing along',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-10', change: 'Made for the tests of the sung questions.' }],
  endResult: 'Sing back a short run of notes you have just heard.',
  parts: [{ id: '1', title: 'Single notes' }, { id: '2', title: 'Several notes' }],
  complete: true,
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.3
});
