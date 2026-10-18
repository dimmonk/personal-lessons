// Psychology, lesson 3, traps in your own head (part 3). NOT in the owner's course: a practical addition from cognitive therapy (Beck 1979; Burns 1980).
// The way of thinking is the therapist's: catch the thought in its own words, test it (the evidence for and against, the likeliest outcome, what you
// would tell a friend, or just ask or look); a trap fails the test and is let go, a fair worry passes it and becomes a plan. The five questions are
// restated as they apply to a thought (Question 5 is the test itself). Catastrophizing, mind reading and all-or-nothing are set against a fair worry
// and against each other; one thought is worked; the practice puts the same thought over two sets of facts, then mixes every name with one story of
// lesson 2; the check names eight new stories and asks the response where it is a real choice. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l3', part: '3', title: 'Traps in your own head', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version, a practical addition to the owner\'s course (Beck 1979; Burns 1980): catch the thought, test it, let a trap go and plan for a fair worry.' }],
  why: [
    'Your boss says, “Can we talk tomorrow?” By bedtime you have been fired, lost the apartment and told your family. Nothing has happened yet, and you cannot sleep.',
    'In about seventeen minutes you will learn to catch a thought like that, test it, and tell three traps from a worry the facts back. In the check, a story counts as right only when every answer is right.'
  ],
  flow: [
    { title: 'Catch the thought, then test it',
      show: [
        { kind: 'prose', text: [
          'This is how cognitive therapists work. First catch the thought in its own words: “I\'m getting fired.” Then test it against the facts.',
          'The test is four checks. What is the evidence for it, and against it? What is the likeliest outcome, not the worst? What would I tell a friend who said this? Can I just check with them, or look? Why: a thought can feel certain with nothing behind it, and these bring the facts back in.',
          'Everyone runs the same test. A trap fails it: the facts do not back the thought, so you let it go. A fair worry passes it: the facts back it, so you make a plan for the real problem: what you can do, by when, who can help.',
          'The common wrong idea: “worrying is always a thinking error”, or “stay positive and it will be fine”. A worry the facts back needs a plan, not a pep talk.'] }
      ] },
    { title: 'The five questions, turned on a thought',
      show: [
        { kind: 'prose', text: [
          'Question 1, what is going on: here always a mind, yours, talking itself into something. So each story comes down to the name.',
          'Question 2, one moment or a lasting pattern: a thought is one moment. Judge the thought, never yourself as a person.',
          'Question 3, what does it do for you: a trap often braces you for the worst, so nothing catches you off guard. That is why it can feel useful.',
          'Question 4, the nearest look-alike: a fair worry. Question 5, what would prove the read wrong: the four checks of the test.'] }
      ] },
    { title: 'Three traps and a fair worry',
      show: [
        { kind: 'prose', text: [
          ...psyRows(['catastrophe', 'mindread', 'allnothing', 'fairworry']),
          'What to do: for each trap, test the thought and let it go. For a fair worry, make a plan.',
          '“Ordinary”: the facts show a normal reason for the feeling, such as nerves before something new, a fair letdown, or a slip put right; nothing to fix, give it time and kindness. “Too little to tell”: the facts are too few to see what is going on (one scene, no context), so find out more before naming anything. Someone reaching for a name does not decide it.',
          'Worry that is constant, overwhelming or hopeless is a reason to see a professional, not to test thoughts alone.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“He\'s failing this class.” His teacher\'s email says only, “Please call me when you can.”' },
          b: { kind: 'prose', text: '“He\'s failing this class.” His teacher wrote that he has missed six assignments and failed two quizzes.' },
          compare: 'The same thought. In the first, a vague email became the worst outcome, taken as certain: catastrophizing. In the second, the teacher\'s report backs it: a fair worry, so plan with the teacher.' },
        { kind: 'pair',
          a: { kind: 'prose', text: '“I flubbed one question. They won\'t hire me, and I\'ll be stuck in this job for years.”' },
          b: { kind: 'prose', text: '“I flubbed one question. The whole interview was a disaster.”' },
          compare: 'The first runs ahead to the worst outcome: catastrophizing. The second turns one slip into a verdict on all of it: all-or-nothing.' }
      ] },
    { worked: 'w3-boss' },
    { set: { items: [['t3-car-trap', 't3-car-fair'], ['t3-room-trap', 't3-room-fair']], order: 'shuffle' } },
    { set: { items: ['t3-meeting', 't3-diet', 't3-train', 't3-stats', 't3-nerves', 't3-late', 't3-ref'], order: 'shuffle' } }
  ],
  check: {
    items: ['k3-drive', 'k3-taxletter', 'k3-dad', 'k3-toast', 'k3-rent', 'k3-mom', 'k3-wife', 'k3-rain'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
