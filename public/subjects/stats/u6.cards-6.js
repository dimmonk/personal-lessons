// Statistical Claims, Unit Six, the cards that close the unit after the drill. This is an action subject (subject.action is true), so the unit ends
// with a plan card. The recap prints, from the key and the meet cards, the unit's questions and each name's `needs` and `act`.

FC.cards('stats', 'u6', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the last question on your own. This card puts the unit in one place.',
    carry: [
      'When a claim gives one thing as the reason for another, put the question to it and point to the words that show your answer. If you cannot point, you do not have an answer yet.',
      'A result for the people who got a thing, or for one place before and after, is not yet a result for the thing. It needs a group that went without, counted in the same way.',
      'A group chosen for how badly, or how well, it had done tends to move back toward its usual level with nothing done. When a case also has nothing to set beside it, the answer is {a:K1.extreme}.',
      'Two groups that put themselves where they are differ in more than the thing: 38 pounds became 2.',
      'Two things going together can come in either order. Ask which came first, and how anyone knows.',
      'Finding another explanation does not make a claim false, and it does not mean the figures prove nothing. It says what else could explain them, and what would settle it. When you see groups formed by a draw, the first question gets the answer {a:S1.holds}.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a claim says that a program or product worked, and the results are only for the people who got it', then: 'ask what happened to people who went without it, counted in the same way, before I decide' },
      { cue: 'a group was picked because it was the worst, and it improved after something was done', then: 'ask for an equally bad group that was left alone before I give what was done the credit' },
      { cue: 'a claim says that people who do something are healthier or better off', then: 'name one other way those people differ that could explain it before I copy them' },
      { cue: 'two things go together and someone says the first causes the second', then: 'ask which came first and how anyone knows' },
      { cue: 'I want to say that something I did made things better', then: 'ask what would have happened if I had done nothing' }
    ] }
]);
