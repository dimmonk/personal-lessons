// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dr-quad-2',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'the area rule for a pool',
    kind: 'problem',
    outcome: 'quad',
    text: 'The area of a rectangular pool, in square meters, is worked out by the rule: width × (width + 5). A pool’s area is 36 m². What is its width?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['width × (width + 5)', 'What is its width?'],
      A1: ['width × (width + 5)', 'A pool’s area is 36 m²']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a rule and its result, 36 m², which looks like {a:A1.formula}. But the missing width appears twice in the rule, once on its own and once inside the parentheses, so it is {a:A1.itself}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The missing number is multiplied by itself, so you cannot undo it one thing at a time. It would be {o:rearr} if it appeared only once.'
    },
    also: ['formula'],
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 5) = 36. Multiply out: x × x is x², and x × 5 is 5 × x, so x² + 5 × x = 36'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 5 is 2.5, and 2.5 × 2.5 = 6.25. x² + 5 × x + 6.25 = 36 + 6.25 = 42.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 5 × x + 6.25 = (x + 2.5) × (x + 2.5), so (x + 2.5)² = 42.25'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 42.25 is 6.5, and −6.5 × −6.5 is also 42.25, so x + 2.5 = 6.5 or x + 2.5 = −6.5'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 6.5 − 2.5 = 4, or x = −6.5 − 2.5 = −9'
      },
      {
        does: 'Throw out any answer the problem rules out, and check the one left',
        working: '−9 cannot be right, because a pool cannot have a width below zero, so x = 4. Check: 4 × (4 + 5) = 4 × 9 = 36'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '4 m' },
        {
          id: 's1',
          text: '6.5 m',
          slip: 'you stop after the {t:sqroot} and give 6.5, but x + 2.5 is 6.5, so 2.5 still has to come off.'
        },
        {
          id: 's2',
          text: '−9 m',
          slip: 'you keep −9, though the problem rules out an answer below zero.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x makes the left side one number times itself, which a {t:sqroot} can undo. A {t:sqroot} gives two answers, one above zero and one below, and the problem decides which can stay.'
  },
]);
