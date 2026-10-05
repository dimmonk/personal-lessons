// Basic Math, Unit Three: the drill's problems. Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question, and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-dl-quad-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a paved courtyard',
    kind: 'problem',
    outcome: 'quad',
    text: 'A paved courtyard is 6 m longer than it is wide, and its area is 55 m². How wide is the courtyard?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['6 m longer than it is wide', 'How wide is the courtyard?'],
      A1: ['6 m longer than it is wide', 'its area is 55 m²']
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
        working: 'x × (x + 6) = 55. Multiply out: x × x is x², and x × 6 is 6 × x, so x² + 6 × x = 55'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 6 is 3, and 3 × 3 = 9. x² + 6 × x + 9 = 55 + 9 = 64'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 6 × x + 9 = (x + 3) × (x + 3), so (x + 3)² = 64'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 64 is 8, and −8 × −8 is also 64, so x + 3 = 8 or x + 3 = −8'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 8 − 3 = 5, or x = −8 − 3 = −11'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−11 cannot be right, because a courtyard cannot have a width below zero, so x = 5. Check: 5 × (5 + 6) = 5 × 11 = 55'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5 m' },
        {
          id: 's1',
          text: '8 m',
          slip: 'you stop after the {t:sqroot} and give 8, though it is x + 3 that is 8, so 3 still has to come off.'
        },
        {
          id: 's2',
          text: '11 m',
          slip: 'you add half the number in front of x, 3, instead of taking it away.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },

  {
    id: 'm3-dw-quad-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a rectangular lawn',
    kind: 'problem',
    outcome: 'quad',
    text: 'A rectangular lawn is 5 m longer than it is wide, and its area is 104 m². How wide is the lawn?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['5 m longer than it is wide', 'How wide is the lawn?'],
      A1: ['5 m longer than it is wide', 'its area is 104 m²']
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
        working: 'x × (x + 5) = 104. Multiply out: x × x is x², and x × 5 is 5 × x, so x² + 5 × x = 104'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 5 is 2.5, and 2.5 × 2.5 = 6.25. x² + 5 × x + 6.25 = 104 + 6.25 = 110.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 5 × x + 6.25 = (x + 2.5) × (x + 2.5), so (x + 2.5)² = 110.25'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 110.25 is 10.5, and −10.5 × −10.5 is also 110.25, so x + 2.5 = 10.5 or x + 2.5 = −10.5'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 10.5 − 2.5 = 8, or x = −10.5 − 2.5 = −13'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−13 cannot be right, because a lawn cannot have a width below zero, so x = 8. Check: 8 × (8 + 5) = 8 × 13 = 104'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '8 m' },
        {
          id: 's1',
          text: '10.5 m',
          slip: 'you stop after the {t:sqroot} and give 10.5, though it is x + 2.5 that is 10.5, so 2.5 still has to come off.'
        },
        {
          id: 's2',
          text: '−13 m',
          slip: 'you keep the answer below zero, −13, though the story rules it out.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },

  {
    id: 'm3-dw-quad-2',
    use: 'drill',
    tier: 'varied',
    setting: 'shopping',
    topic: 'two matching market stalls',
    kind: 'problem',
    outcome: 'quad',
    text: 'Two identical rectangular market stalls are each 4 m longer than they are wide, and together they take up 90 m². How wide is each stall?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['each 4 m longer than they are wide', 'How wide is each stall?'],
      A1: ['each 4 m longer than they are wide', 'together they take up 90 m²']
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
        working: '2 × x × (x + 4) = 90. Multiply out: 2 × x² + 8 × x = 90. Divide every term by 2: x² + 4 × x = 45'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 4 is 2, and 2 × 2 = 4. x² + 4 × x + 4 = 45 + 4 = 49'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 4 × x + 4 = (x + 2) × (x + 2), so (x + 2)² = 49'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 49 is 7, and −7 × −7 is also 49, so x + 2 = 7 or x + 2 = −7'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 7 − 2 = 5, or x = −7 − 2 = −9'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−9 cannot be right, because a stall cannot have a width below zero, so x = 5. Check: 2 × 5 × (5 + 4) = 2 × 5 × 9 = 90'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5 m' },
        {
          id: 's1',
          text: '9 m',
          slip: 'you add half the number in front of x, 2, instead of taking it away.'
        },
        {
          id: 's2',
          text: '−9 m',
          slip: 'you keep the answer below zero, −9, though the story rules it out.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },

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
