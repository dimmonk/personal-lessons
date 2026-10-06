// Statistical Claims, Unit One: the cards that close the unit after the drill. This is an action subject (subject.action is true),
// so the unit ends with a plan card.

FC.cards('stats', 'u1', [

  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any name, put the question to the claim and point to the words that show your answer. If you cannot point, you do not have an answer yet.',
      'Take the parts in order: the people or things the figure was worked out from, what the figure counts, what it is set beside, and what the claim says caused what. Stop at the first one that goes wrong. Each rests on the ones before it.',
      'A figure can be added up correctly and still be unable to show what the claim says. Checking the sum is not checking the claim.',
      '{a:S1.holds} is an answer, and the most useful one when it is true. Give it when you have put the question to every part and found nothing.',
      'Finding a problem does not make a claim false. It says what the figure cannot show, and what you would need to see.',
      'Where a claim was published does not replace the question. A respected journal and a neighbor’s newsletter get the same parts checked.',
      'When a case shows two answers, the answer is the earlier part, because everything after it rests on it.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a figure in a headline that I want to share', then: 'ask where the people or things in it came from before I share it' },
      { cue: 'a friend forwards me a number that surprises me', then: 'find out how the people in the figure got into it before I pass it on' },
      { cue: 'a headline or an ad gives me a percentage and nothing else', then: 'look for the numbers behind it before I decide what I think' },
      { cue: 'a claim says that one thing caused another', then: 'name one other thing that could explain the same result' },
      { cue: 'a claim gives me a figure I like', then: 'put the same question to it that I would put to a figure I do not like' }
    ] }
]);
