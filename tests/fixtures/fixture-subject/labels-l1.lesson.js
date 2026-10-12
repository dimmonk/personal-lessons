// "Pinned labels", lesson 1: a labelled post and what the labels need on a teaching screen, a worked post, a group with what the label needs beside
// the words, a group without, and a check of four posts (two from each side, from two topics).
FC.lesson('labels', {
  id: 'l1', part: '1', title: 'Does the label fit', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-11', words: 'Clear on a phone.' },
  why: 'A label is pinned on a few lines. Check what the label needs against the lines.',
  flow: [
    { title: 'A label on words',
      show: [
        { kind: 'article', form: 'post', source: 'Comment · @left_house', label: { text: 'It is dry out.', by: 'A neighbor on the left', side: 'left' },
          lines: [{ id: 'a1', text: 'The sky is clear all morning.' }, { id: 'a2', text: 'The grass is dry.', para: true }, { id: 'a3', text: 'Said by a forecaster at the radio station.', fine: true }] },
        { kind: 'panel', rules: ['dry', 'wet'] },
        { kind: 'prose', text: 'Each label needs the things listed. The lines have to show every one.' }
      ] },
    { worked: 'w-1' },
    { set: { items: ['g-1', 'g-2'], order: 'listed', support: { panel: true }, returns: 1 } },
    { set: { items: ['h-1', 'h-2'], order: 'listed' } }
  ],
  check: {
    items: ['c-1', 'c-2', 'c-3', 'c-4'], feedback: 'at-end',
    pass: [{ right: { min: 3 } }, { where: { side: 'left' }, right: { min: 1 } }, { where: { side: 'right' }, right: { min: 1 } }]
  }
});
