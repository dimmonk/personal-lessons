FC.lesson('chorus', {
  id: 'l1', part: '1', title: 'Single notes', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-10', words: 'Clear on a phone.' },
  why: 'Hear a note, then sing it back. The line shows your voice at first and then goes away.',
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'How a try goes', show: [{ kind: 'prose', text: 'Tap Hear the note, listen to all of it, then sing it back.' }] },
    { set: { items: [{ sing: { task: 'match' }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'match' }, n: 2 }], order: 'listed' } },
    { set: { items: [{ sing: { task: 'hold', seconds: 2 }, n: 2 }], order: 'listed' } },
    { set: { items: [{ sing: { task: 'slide', maxSemitones: 5 }, n: 1 }], order: 'listed' } }
  ],
  check: { items: [{ sing: { task: 'match' }, n: 2 }], feedback: 'after-each', pass: [{ right: { min: 1 } }] }
});
