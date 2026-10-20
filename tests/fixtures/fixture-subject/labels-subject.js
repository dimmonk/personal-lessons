// A sixth made-up subject, used only by the tests: a label pinned on words. It exercises the label on a post (the commenter, how they are known,
// their words, and under them the words the label is pinned on, with who said them last as small print), the panel (what the label needs, beside
// the words in a group that helps and nowhere else), each need found or missing in the feedback, the side a label is thrown from kept once and
// shown side by side at the end of a check and of the review, and a subject that sorts its questions in equal number from each side. Never shipped.
FC.subject('labels', {
  name: 'Pinned labels',
  field: 'skills',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-11', change: 'Made for the tests of the labelled post, the panel and the sides.' }],
  endResult: 'Say whether a label pinned on a post fits the words under it.',
  parts: [{ id: '1', title: 'Does the label fit' }],
  complete: true,
  lists: {
    verdict: [{ id: 'fits', text: 'The label fits' }, { id: 'off', text: 'The label does not fit' }],
    slip: [{ id: 'took-speaker', text: 'tapped who said it, not what it says' }]
  },
  rules: {
    dry: { name: 'Dry', needs: [{ id: 'dry-sky', text: 'The sky has no cloud.' }, { id: 'dry-ground', text: 'The ground is dry.' }] },
    wet: { name: 'Wet', needs: [{ id: 'wet-rain', text: 'Rain is falling.' }] }
  },
  facets: {
    side: { name: 'Which side of the street', compare: true, values: [{ id: 'left', text: 'houses on the left' }, { id: 'right', text: 'houses on the right' }] },
    fit: { name: 'The label and the sky', values: [{ id: 'fits', text: 'labels that fit' }, { id: 'off', text: 'labels that do not fit' }] }
  },
  mix: [{ facet: 'side', equal: true }],
  strands: [{ id: 'one', title: 'Reading a label' }, { id: 'two', title: 'Reading another label' }],
  readingShare: 0.9
});
