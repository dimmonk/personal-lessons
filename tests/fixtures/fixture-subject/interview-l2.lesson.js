// "Quick answers", lesson 2: the learner enters their own answers, then is asked them, then asked them again.
FC.lesson('interview', {
  id: 'l2', part: '2', title: 'Your own answers', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'A few answers depend on where you live. Look them up, enter them, and then practice saying them.',
  flow: [
    { own: 'answers' },
    { set: { items: ['senator', 'governor', 'capital'], order: 'listed' } }
  ],
  check: { items: ['senator', 'governor', 'capital'], recall: true, order: 'shuffle', feedback: 'at-end', pass: [{ right: { min: 3 } }] }
});
