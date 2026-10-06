// Basic Math, Unit Three: fresh problems for later days: one for each kind. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-rt-quad-2',
    use: 'return',
    tier: 'varied',
    setting: 'work',
    topic: 'three matching plots',
    kind: 'problem',
    outcome: 'quad',
    text: 'Three identical rectangular plots are each 2 m longer than they are wide, and together they cover 45 m². How wide is each plot?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['each 2 m longer than they are wide', 'How wide is each plot?'],
      A1: ['each 2 m longer than they are wide', 'together they cover 45 m²']
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
        working: '3 × x × (x + 2) = 45. Multiply out: 3 × x² + 6 × x = 45. Divide every term by 3: x² + 2 × x = 15'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 2 is 1, and 1 × 1 = 1. x² + 2 × x + 1 = 15 + 1 = 16'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 2 × x + 1 = (x + 1) × (x + 1), so (x + 1)² = 16'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 16 is 4, and −4 × −4 is also 16, so x + 1 = 4 or x + 1 = −4'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 4 − 1 = 3, or x = −4 − 1 = −5'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−5 cannot be right, because a plot cannot have a width below zero, so x = 3. Check: 3 × 3 × (3 + 2) = 3 × 3 × 5 = 45'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3 m' },
        {
          id: 's1',
          text: '5 m',
          slip: 'you add half the number in front of x, 1, instead of taking it away.'
        },
        {
          id: 's2',
          text: '−5 m',
          slip: 'you keep the answer below zero, −5, though the story rules it out.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },
]);
