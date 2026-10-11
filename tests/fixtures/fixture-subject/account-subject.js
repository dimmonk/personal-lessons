// A seventh made-up subject, used only by the tests: an account of what someone did, as it arrives. It exercises the message block in its three
// forms (a friend's message about someone, a thread you are in with lines of your own, your own note), the tap on a line of a message, a line
// the learner writes against a model (never scored), a question of four asks that open one after the other (the last only after some answers),
// and a checklist with a heading of its own in the panel. Never shipped.
FC.subject('account', {
  name: 'Told by a friend',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-11', change: 'Made for the tests of the message block, the written line and questions of four asks.' }],
  endResult: 'Say what someone did, from the account of it, and what to do next.',
  parts: [{ id: '1', title: 'What they did' }],
  complete: true,
  lists: {
    verdict: [{ id: 'fits', text: 'The word fits' }, { id: 'ordinary', text: 'An ordinary moment' }, { id: 'unclear', text: 'Can\'t tell yet' }, { id: 'control', text: 'A pattern of control' }],
    step: [{ id: 'find-out', text: 'Find out what happened' }, { id: 'watch', text: 'Watch whether it repeats' }, { id: 'limit', text: 'Say where your limit is' }, { id: 'help', text: 'Get help from outside' }],
    slip: [{ id: 'took-label', text: 'tapped a word for the person, not what they did' }, { id: 'took-guess', text: 'tapped a guess about why, not what they did' },
      { id: 'jumped-ahead', text: 'picked a next step before the account showed enough' }]
  },
  rules: {
    act: { name: 'What they did', heading: 'What counts as what they did', needs: [
      { id: 'act-did', text: 'It says something they did or said.' },
      { id: 'act-seen', text: 'Anyone there could have seen or heard it. It has no guess about why.' }] }
  },
  facets: {
    account: { name: 'What the account shows', values: [{ id: 'ordinary', text: 'an ordinary moment' }, { id: 'unclear', text: 'too little to tell' }] }
  },
  mix: [],
  strands: [{ id: 'one', title: 'What they did' }],
  readingShare: 0.9
});
