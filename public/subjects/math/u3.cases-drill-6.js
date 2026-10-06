// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-dr-quad-1',
    use: 'drill',
    tier: 'varied',
    setting: 'travel',
    topic: 'the deck of a boat',
    kind: 'problem',
    outcome: 'quad',
    text: 'A rectangular boat deck is 9 m longer than it is wide, and its area is 52 m². How wide is the deck?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['9 m longer than it is wide', 'How wide is the deck?'],
      A1: ['9 m longer than it is wide', 'its area is 52 m²']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the answer to the first question is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a result, and the missing number is multiplied by itself as well as used on its own. That is {a:A1.itself}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The missing number is multiplied by itself, so it cannot be undone one thing at a time. {o:rearr} would be the name if it appeared only once in the calculation.'
    },
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 9) = 52. Multiply out: x × x is x², and x × 9 is 9 × x, so x² + 9 × x = 52'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 9 is 4.5, and 4.5 × 4.5 = 20.25. x² + 9 × x + 20.25 = 52 + 20.25 = 72.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 9 × x + 20.25 = (x + 4.5) × (x + 4.5), so (x + 4.5)² = 72.25'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 72.25 is 8.5, and −8.5 × −8.5 is also 72.25, so x + 4.5 = 8.5 or x + 4.5 = −8.5'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 8.5 − 4.5 = 4, or x = −8.5 − 4.5 = −13'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−13 cannot be right, because a deck cannot have a width below zero, so x = 4. Check: 4 × (4 + 9) = 4 × 13 = 52'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '4 m' },
        {
          id: 's1',
          text: '8.5 m',
          slip: 'you stop after the {t:sqroot} and give 8.5, though it is x + 4.5 that is 8.5, so 4.5 still has to come off.'
        },
        {
          id: 's2',
          text: '13 m',
          slip: 'you add half the number in front of x, 4.5, instead of taking it away.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  }
]);
