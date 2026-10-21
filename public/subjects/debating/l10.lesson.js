// Debating, lesson 10, mixed live exchanges (part 10 of the plan's ten lessons, the real-world test). The nine lessons before it each practised one decision. Here the decisions come
// mixed, on new exchanges in the real form, with nothing marked, because a real talk does not say which question it needs (docs/learning-science.md, P22 and P23: mixed practice
// beat blocked practice in the studies, mostly of pictures and school math, and learners often feel it works worse; the evidence for verbal categories is limited, so the mixing is a
// judgment call and the lesson says so). The order of the questions (kind of talk, still answering, what the reply is about, then what to check before you send) is the lesson's own, drawn
// from the earlier lessons, and is said to be untested. Each decision keeps the strength it had in its own lesson (docs/research/debating.md, section 4). The pass mark, 10 of 12, is the
// plan's own and has no source; the lesson says so. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l10', part: '10', title: 'Mixed live exchanges', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, the real-world test. The plan\'s test (name the kind, say keep going, change the subject or leave, and pick the best reply from four) was changed: no source ranks one reply above another, and asking the kind and the move of every exchange would leave eight of the nine earlier decisions unmixed. Each of twelve new exchanges asks the one decision it calls for from the first nine lessons, each in its own lesson\'s graded form (the line you write is never scored). The pass mark, 10 of 12, is ours.' }],
  why: [
    'At a block party three neighbors talk to you in an hour. One wants to know where you got your figure for the new fee. One says she is tired of being talked at. One says "typical" and turns away. Each needs something different from you, and none says which.',
    'In about fifteen minutes you will practice most of what was taught so far on new exchanges, in a mixed order, and then take the last check: twelve exchanges, ten right to pass.'
  ],
  flow: [
    { title: 'Why this practice feels harder',
      show: [
        { kind: 'prose', text: [
          'Until now each group of questions asked one thing. In a real talk nobody says which question you need, so from here the questions come in a mixed order, each asking something different, with nothing marked.',
          'It is meant to feel harder. In studies of mixed practice, mostly with pictures and school math, people did better on new problems than after practice in blocks, and they often felt it had worked worse. Nobody has tested mixing for judging talk like this, so we use it as a judgment call, not a finding.',
          'The pass mark, 10 of 12, is also our choice. No source gives one. The line you sometimes write is never scored: nothing tests wording.'] }
      ] },
    { title: 'The order to go through',
      show: [
        { kind: 'prose', text: [
          'Look at the last few lines and go through these in order. The order is ours, built from what the first nine parts taught, and nobody has tested it.',
          '1. What kind of talk is it, and has it changed?',
          '2. Are they still answering you? If they dig at you and answer nothing, change the subject once. If they threaten you, block you, come back at you after a change, or several people are at you, leave.',
          '3. If they are answering: is the dispute a fact someone could check or a view about a group or a policy? What does the view rest on? What is their last reply about: you, how they feel, or your argument? If you told a story, what did it get you?',
          '4. Before you send: does your reply look down on them, run five steps, start from something they do not accept, stretch a story, or add to a restatement? Is every line of your story true? Which true experience should you tell? Do you hold your own side to the test you used on the other?'] }
      ] },
    { title: 'What each move has behind it',
      show: [
        { kind: 'prose', text: [
          'A correction on a checkable fact: in tests that tried to make corrections backfire on 52 issues, none did, and people who read a correction usually moved toward it at least somewhat. They were surveys, not live talks, and the move often did not last.',
          'A true story: in US field tests, talks that swapped stories lowered attitudes against immigrants a little for at least four months where arguments alone had no average effect. In 15 studies on moral disagreements, an opponent backed by a personal experience earned more respect than one backed by facts, and those studies measured respect, not changed minds.',
          'Saying their view back, and asking: in a large field test, close listening got liking, respect and less defensiveness and added nothing to a story\'s effect on attitudes. Saying a view back fairly is expert advice, not a tested finding. "How would that work?" lowered some people\'s rating of their own understanding on issues judged by what happens, and some repeats failed.',
          'None of these has a test in a talk with your neighbor or your uncle. Expect a small step, not a win.'] }
      ] },
    { worked: 'w10-garden' },
    { set: { items: ['a10-pool', 'a10-cleaners', 'a10-ban'], order: 'listed', support: { shown: true } } },
    { set: { items: ['b10-swim', 'b10-bags', 'b10-compost', 'b10-survey', 'b10-vote'], order: 'shuffle' } }
  ],
  check: {
    items: ['c10-movie', 'c10-permit', 'c10-hunt', 'c10-meet', 'c10-mailbox', 'c10-pantry', 'c10-organ', 'c10-field', 'c10-share', 'c10-reply', 'c10-note', 'c10-porch'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 10 } }]
  }
});
