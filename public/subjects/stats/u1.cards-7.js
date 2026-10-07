// Statistical Claims, Unit One: the cards that close the unit after the drill. This is an action subject (subject.action is true),
// so the unit ends with a plan card.

FC.cards('stats', 'u1', [

  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you give an answer, find the exact words that show it. If you cannot find them, you do not have an answer yet.',
      'Check the parts in order and stop at the first one that goes wrong: the people behind the number, how it is counted, what it is set beside, and whether one thing is said to cause another.',
      'A number can be added up right and still be unable to show what the claim says. Checking the sum is not checking the claim.',
      '{a:S1.holds} is an answer too, and the most useful one when it is true. Give it only after you have checked every part.',
      'Finding a problem does not make a claim false. It tells you what the number cannot show, and what you would need to see.',
      'Where a claim appeared changes nothing. A famous journal and a neighbor’s newsletter get the same checks.',
      'When a claim goes wrong in two places, the earlier one wins, because everything after it rests on it.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it when a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a number in a headline that I want to share', then: 'ask who the number was worked out from before I share it' },
      { cue: 'a friend forwards me a number that surprises me', then: 'find out how the people in it were picked before I pass it on' },
      { cue: 'a headline or an ad gives me a percentage and nothing else', then: 'look for the numbers behind it before I decide what I think' },
      { cue: 'a claim says that one thing caused another', then: 'name one other thing that could explain the same result' },
      { cue: 'a claim gives me a number I like', then: 'ask it the same question I would ask a number I do not like' }
    ] }
]);
