// "Under pressure", lesson 0: the baseline. A call that pushes back, a text, an email and the steps after a loss, with nothing shown per question and one line at the end.
FC.lesson('pressure', {
  id: 'l0', part: null, role: 'baseline', title: 'Before you start', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'Five things, the way they arrive.',
  flow: [{ title: 'How this goes', show: [{ kind: 'prose', text: 'Do what you would really do.' }] }],
  check: { items: ['b-1', 'b-2', 'b-3', 'b-4', 'b-5'], feedback: 'at-end', seconds: 20, order: 'listed', pass: [{ slip: 'acted', max: 0 }, { slip: 'their-way', max: 0 }] }
});
