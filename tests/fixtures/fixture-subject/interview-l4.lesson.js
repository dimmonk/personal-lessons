// "Quick answers", lesson 4: a news story whose answer rests on an interview question, printed in the feedback.
FC.lesson('interview', {
  id: 'l4', part: '4', title: 'A news story', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-11', words: 'Clear on a phone.' },
  why: 'A story about the government rests on a fact you can be asked.',
  flow: [{ set: { items: ['news-veto'], order: 'listed' } }],
  check: { items: ['news-veto'], recall: true, feedback: 'at-end', pass: [{ right: { min: 1 } }] }
});
