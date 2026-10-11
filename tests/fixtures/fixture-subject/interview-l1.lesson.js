// "Quick answers", lesson 1: questions read aloud and answered from memory in two groups, then the same five asked again.
FC.lesson('interview', {
  id: 'l1', part: '1', title: 'Short answers', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-11', words: 'Clear on a phone.' },
  why: 'You answer from memory, in a few words, the way an officer would put them. Say it out loud first, then type it.',
  flow: [
    { title: 'How an answer is checked',
      show: [{ kind: 'prose', text: ['Capital letters and punctuation do not matter. Words in brackets are optional.', 'One small misspelling is forgiven.'] }] },
    { set: { items: ['form', 'law', 'amend'], order: 'listed' } },
    { set: { items: ['branches', 'oath'], order: 'listed' } }
  ],
  check: { items: ['form', 'law', 'amend', 'branches', 'oath'], recall: true, order: 'shuffle', feedback: 'at-end', pass: [{ right: { min: 4 } }] }
});
