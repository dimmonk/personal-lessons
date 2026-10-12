// "Quick answers", lesson 3: the mock interview. Five questions drawn at random, read aloud with their words held back, no answer until the end;
// taken again a week later on questions it did not ask the first time where there are some.
FC.lesson('interview', {
  id: 'l3', part: '3', title: 'The mock', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'The real interview is spoken, with no options and no help. This is the same.',
  flow: [{ title: 'Before you start', show: [{ kind: 'prose', text: 'Listen to each question, say your answer out loud, then type it.' }] }],
  check: {
    items: { draw: { strands: ['form', 'law', 'amend', 'branches', 'oath', 'declare', 'senate', 'term', 'house', 'power', 'senator', 'governor', 'capital'], n: 5 } },
    spoken: true, retest: 7, feedback: 'at-end', pass: [{ right: { min: 4 } }]
  }
});
