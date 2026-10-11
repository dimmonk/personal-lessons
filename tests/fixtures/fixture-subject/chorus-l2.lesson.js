FC.lesson('chorus', {
  id: 'l2', part: '2', title: 'Several notes', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-10', words: 'Clear on a phone.' },
  why: 'Hear two notes, then a short tune, then sing them back. A light note is sung no louder than you talk.',
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 2, maxSemitones: 5 }, n: 1 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 2, maxSemitones: 5 }, n: 1 }], order: 'listed' } },
    { set: { items: [{ sing: { task: 'melody', notes: 3, maxStep: 3 }, n: 1 }], order: 'listed' } },
    { set: { items: [{ sing: { task: 'light' }, n: 2 }], order: 'listed' } }
  ],
  check: { items: [{ sing: { task: 'interval', minSemitones: 2, maxSemitones: 5 }, n: 1 }], feedback: 'after-each', pass: [{ right: { min: 1 } }] }
});
