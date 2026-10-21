// Debating, lesson 3, your goal, and when to leave (part 3 of the plan's ten lessons). The goal of one talk is a small step (docs/research/debating.md, F2 and F5: the average
// effects were small and the gains often did not last; no study gives a rate for one conversation, so the aims are the lesson's judgement). Then the three moves, read from what
// the other person does in the last lines: keep going while they answer your point, question or offer, however blunt; change the subject once when the lines hit at you or an old
// hurt and nothing is answered; leave when they threaten you or block your way, when a change of subject did not hold, or when several people are going at you at once. The rule,
// the aims and the lines are judgement calls and the lesson says so (nobody has tested them). Each question picks the move, taps the line that decides it, and then practises the
// part the move calls for: a fair aim, the words for a change of subject or a step out, or the first act when you cannot just walk away. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l3', part: '3', title: 'Your goal, and when to leave', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, rebuilt after three failed reviews: the rule turns on what the other person does in the last lines and not on how bad an insult is; each question picks the move, taps the deciding line (first, middle or last) and then practises a fair aim, the words, or the first act; tone no longer gives the move away; no couple cases and no relationship reasons; the aims and lines are labelled the lesson\'s judgement; the unsourced claims about how rare a win is and the "huh" aims are removed.' }],
  why: [
    'At a family dinner you have made your point three times, and each time your cousin answers with a dig about your cooking. You could keep going. You could change the subject. You could step outside. Which one?',
    'In about fifteen minutes you will learn a fair aim for one talk, a rule of thumb for choosing among the three moves, and what to say or do for each.'
  ],
  flow: [
    { title: 'Aim for the next small step',
      show: [
        { kind: 'prose', text: [
          'In the tests, a correction moved people a little on average, a story moved views a little, and the gains often did not last. We found no study that says how often one conversation changes a mind. So aim small.',
          'A fair aim is the next small step the other person has just offered or asked for: they will read the number, you settle one detail, you agree on one fact, or you can both say where you differ. That is a judgment made here, not a research finding.'] }
      ] },
    { title: 'Three moves',
      show: [
        { kind: 'prose', text: [
          'Look at the last few lines and check what the other person is doing, not how friendly or harsh the tone is.',
          'Keep going while they answer your point, your question or your offer. Blunt or annoyed is fine if they still answer.',
          'Change the subject, once, when their reply hits at you or at an old hurt instead of answering. However nasty the dig, the first move is the same.',
          'Leave when any one of these is true: they threaten you or block your way; you changed the subject and they came back at you; or several people are going at you at once. Online, leaving means stop replying. If someone blocks your way, leaving means stopping the argument and calling to people nearby or phoning someone. This is common sense, not a finding.',
          'This is a rule of thumb. It follows from the quarrel kind of talk, where the aim is to hit back and not to be persuaded, and from how small the usual move is. Nobody has tested it. Advice from experts on calming conflicts, which was not drawn on here, may differ.'] }
      ] },
    { title: 'What to say',
      show: [
        { kind: 'prose', text: [
          'To change the subject, say what you are doing and turn to something else, with no jab and no last word. Example: "I don\'t think we\'ll settle this today. Did you see the new streetlights on Alder?"',
          'To step out, say it plainly. Example: "I\'m going to step out now."',
          'These lines are examples built on that rule. Nobody has tested wording.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '"Walking away means you lost."',
          'When a talk is not trying to settle anything, there is nothing to win. Stepping out is a choice.'] }
      ] },
    { title: 'Back to the dinner',
      show: [
        { kind: 'prose', text: [
          'Your cousin has not answered your point, and each reply is a dig about your cooking. Nobody is threatening you and you have not tried a change of subject. Change it once, with a line like "I don\'t think we\'ll settle this at dinner. How was your trip?" If he came back at you after that, you would step out.'] }
      ] },
    { worked: 'w3-fee' },
    { set: { items: ['a3-weekends', 'a3-digs', 'a3-dave', 'a3-internet'], order: 'listed' } },
    { set: { items: ['b3-nia', 'b3-vic', 'b3-pile', 'b3-boat', 'b3-door'], order: 'shuffle' } }
  ],
  check: {
    items: ['c3-vendor', 'c3-rent', 'c3-timeline', 'c3-gus', 'c3-cousin', 'c3-curt', 'c3-meeting', 'c3-voss'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
