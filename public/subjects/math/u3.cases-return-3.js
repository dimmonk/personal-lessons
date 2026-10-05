// Basic Math, Unit Three: fresh problems for later days: three for each kind, one for each of its scheduled returns. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-rt-quad-1',
    use: 'return',
    tier: 'clean',
    setting: 'home',
    topic: 'a window pane',
    kind: 'problem',
    outcome: 'quad',
    text: 'A rectangular window pane is 5 cm longer than it is wide, and its area is 204 cm². How wide is the pane?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['5 cm longer than it is wide', 'How wide is the pane?'],
      A1: ['5 cm longer than it is wide', 'its area is 204 cm²']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a result, and the missing number is multiplied by itself as well as used on its own. That is {a:A1.itself}.'
    },
    not: {
      outcome: 'rearr',
      why: 'The missing number is multiplied by itself, so it cannot be undone one thing at a time. {o:rearr} would be the name if it appeared only once in the calculation.'
    },
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 5) = 204. Multiply out: x × x is x², and x × 5 is 5 × x, so x² + 5 × x = 204'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 5 is 2.5, and 2.5 × 2.5 = 6.25. x² + 5 × x + 6.25 = 204 + 6.25 = 210.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 5 × x + 6.25 = (x + 2.5) × (x + 2.5), so (x + 2.5)² = 210.25'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 210.25 is 14.5, and −14.5 × −14.5 is also 210.25, so x + 2.5 = 14.5 or x + 2.5 = −14.5'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 14.5 − 2.5 = 12, or x = −14.5 − 2.5 = −17'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−17 cannot be right, because a pane cannot have a width below zero, so x = 12. Check: 12 × (12 + 5) = 12 × 17 = 204'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 cm' },
        {
          id: 's1',
          text: '14.5 cm',
          slip: 'you stop after the {t:sqroot} and give 14.5, though it is x + 2.5 that is 14.5, so 2.5 still has to come off.'
        },
        {
          id: 's2',
          text: '17 cm',
          slip: 'you add half the number in front of x, 2.5, instead of taking it away.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },

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
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
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

  {
    id: 'm3-rt-quad-3',
    use: 'return',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'a puzzle with a negative result',
    kind: 'problem',
    outcome: 'quad',
    text: 'A quiz asks for a number that, multiplied by itself and then added to 6 times itself, gives −13. What is the number?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['multiplied by itself and then added to 6 times itself, gives −13', 'What is the number?'],
      A1: ['multiplied by itself and then added to 6 times itself, gives −13']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a result, −13, and the missing number is multiplied by itself as well as used on its own. That is {a:A1.itself}. Whether any number fits is settled by the working, and a result below zero is one way for no number to fit.'
    },
    not: {
      outcome: 'rearr',
      why: 'The missing number is multiplied by itself, so it cannot be undone one thing at a time. {o:rearr} would be the name if it appeared only once in the calculation.'
    },
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × x + 6 × x = −13, which is x² + 6 × x = −13 already'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 6 is 3, and 3 × 3 = 9. x² + 6 × x + 9 = −13 + 9 = −4'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 6 × x + 9 = (x + 3)², so (x + 3)² = −4'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'A number multiplied by itself is never below zero: 2 × 2 = 4 and −2 × −2 = 4. No number multiplied by itself gives −4, so there is no answer'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'There is no such number' },
        {
          id: 's1',
          text: 'x = −1',
          slip: 'you drop the minus sign from −4 and take its {t:sqroot}, 2, which gives x + 3 = 2.'
        },
        {
          id: 's2',
          text: 'x = −5',
          slip: 'you read the {t:sqroot} of −4 as −2, though −2 × −2 is 4, not −4.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}. A number multiplied by itself is never below zero, so when the right side comes out below zero no number fits, and the problem has no answer.'
  }
]);
