// Statistical Claims, Unit Six, the cards that close the unit after the drill. This is an action subject (subject.action is true), so the unit ends
// with a plan card. The recap prints, from the key and the meet cards, the unit's questions and each name's `needs` and `act`.

FC.cards('stats', 'u6', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the last question on your own.',
    carry: [
      'When a claim says one thing caused another, ask {q:K1} and find the words that show your answer.',
      'A result for the people who got a thing, or for one place before and after, is not yet a result for the thing. You need a group that went without, counted the same way.',
      'Look at how a group was picked. One picked at an extreme will be nearer usual next time, whatever was done, and with no one to compare it with the answer is {a:K1.extreme}.',
      'Groups that picked their own side differ in more than the thing: the shake’s 38 pounds became 2.',
      'Two things that go together can have happened in either order. Ask which came first, and how anyone knows.',
      'Finding another explanation does not make a claim false. It tells you what else could explain the figures, and what would settle it. When a draw formed the groups, the first question gets the answer {a:S1.holds}.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it when a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a claim says that a program or product worked, and the results are only for the people who got it', then: 'ask what happened to people who went without it, counted the same way, before I decide' },
      { cue: 'a group was picked because it was the worst, and it improved after something was done', then: 'ask for an equally bad group that was left alone before I give what was done the credit' },
      { cue: 'a claim says that people who do something are healthier or better off', then: 'name one other way those people differ that could explain it before I copy them' },
      { cue: 'two things go together and someone says the first causes the second', then: 'ask which came first and how anyone knows' },
      { cue: 'I want to say that something I did made things better', then: 'ask what would have happened if I had done nothing' }
    ] }
]);
