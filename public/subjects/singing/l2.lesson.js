// Singing, lesson 2: Match a note (part 2). The pilot (docs/subjects/singing/design.md, gate 5). Every note is made fresh from the learner's range;
// when no range is stored yet the lesson opens with the range exercise first (lesson standard 26.1.1). A warm-up opens the lesson (S5),
// eight tries with the line, eight without (S3), then the check without the line.
FC.lesson('singing', {
  id: 'l2', part: '2', title: 'Match a note', rev: 2, status: 'draft',
  history: [
    { rev: 1, date: '2026-10-10', change: 'First version, built as the pilot of Singing under the practice engine. Not tried on a phone yet.' },
    { rev: 2, date: '2026-10-11', change: 'After the stand-in learner review: at most four missed tries come back in each group of eight, so a learner who misses most is never held in it; the bar is drawn the height of what counts as on the note; the card says to keep going until the bar ends and that the middle of the try is what is scored.' }],
  why: [
    'Copying a note you have just heard is the first real skill in singing. You hear it, then your voice goes to it.',
    'At first a line follows your voice, so you can watch yourself land on the note. Then the line goes away and you rely on your ear, which is how you sing for real.',
    'Every note here sits inside your own range, so none is too high or too low.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'How a try goes',
      show: [
        { kind: 'prose', text: 'Tap Hear the note and listen to all of it. When it ends, sing it back on “oo” and keep going until the bar ends or “Sing now” goes away.' },
        { kind: 'prose', text: 'The line is your voice. The bar is the note. Put the line on the bar. The middle of your try is what counts, so start on the note. After each try you see whether you were on the note, a shade under it or a shade over it.' }
      ] },
    { set: { items: [{ sing: { task: 'match' }, n: 8 }], order: 'listed', support: { line: true }, returns: 4 } },
    { set: { items: [{ sing: { task: 'match' }, n: 8 }], order: 'listed', returns: 4 } }
  ],
  check: { items: [{ sing: { task: 'match' }, n: 5 }], feedback: 'after-each', pass: [{ right: { min: 4 } }] }
});
