// A made-up subject, used only by the tests: whether to bring an umbrella from a one-line forecast. It exercises every part of the
// engine built so far (choose asks from a list and with options, slips, prose and pair blocks, worked examples, support that fades,
// a mixed group, a generator, an end check with pass rules, strands, a retest) and nothing else. It is never shipped.
FC.subject('fixture', {
  name: 'Umbrella days',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-10', change: 'Made for the tests of the practice engine.' }],
  endResult: 'Read a one-line weather forecast and decide, in a few seconds, whether to bring an umbrella.',
  parts: [{ id: '1', title: 'Read the chance' }, { id: '2', title: 'Read the timing' }],
  complete: true,
  lists: {
    verdict: [{ id: 'bring', text: 'Bring an umbrella' }, { id: 'leave', text: 'Leave it at home' }],
    slip: [{ id: 'promise', text: 'treated a chance as a promise' }, { id: 'flip', text: 'turned the chance upside down' }]
  },
  facets: { kind: { name: 'Forecast', values: [{ id: 'wet', text: 'wet forecasts' }, { id: 'dry', text: 'dry forecasts' }] } },
  mix: [{ facet: 'kind', value: 'wet', min: 0.25, max: 0.75 }, { facet: 'kind', value: 'dry', min: 1 }],
  strands: [{ id: 'chance', title: 'The chance of rain' }, { id: 'timing', title: 'When the rain comes' }],
  readingShare: 0.4
});
