// Basic Math, Unit Three: the problems of the worked examples (a worked example's problem carries only the problem; its working is on the card) and the problems the learner finishes in a check
// (a check's problem carries the whole working, so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice).
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [
  {
    id: 'm3-ck-simul-last',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'vehicles on a ferry',
    kind: 'problem',
    outcome: 'simul',
    text: 'A ferry carried 24 vehicles, some cars at €18 each and some vans at €30 each, and took €540 in fares. How many cars and how many vans were there?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'carried 24 vehicles, some cars at €18 each and some vans at €30 each',
        'took €540 in fares',
        'How many cars and how many vans were there?'
      ],
      A1: ['carried 24 vehicles, some cars at €18 each and some vans at €30 each', 'took €540 in fares']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are stated about the pair: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of cars and y is the number of vans. The count fact: x + y = 24. The totals fact: 18 × x + 30 × y = 540'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 24, x = 24 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '18 × (24 − y) + 30 × y = 540'
      },
      {
        does: 'Solve for the letter that is left',
        working: '18 × 24 = 432, so 432 − 18 × y + 30 × y = 540; that is 432 + 12 × y = 540; 12 × y = 540 − 432 = 108; y = 108 ÷ 12 = 9'
      },
      { does: 'Find the other number from the count fact', working: 'x = 24 − 9 = 15' },
      {
        does: 'Check both facts',
        working: '15 + 9 = 24; 18 × 15 + 30 × 9 = 270 + 270 = 540. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '15 cars and 9 vans' },
        {
          id: 's1',
          text: '9 cars and 15 vans',
          slip: 'you attach the two numbers to the wrong things: 9 belongs to the vans, the thing that was named y, and not to the cars.'
        },
        {
          id: 's2',
          text: '12 cars and 12 vans',
          slip: 'you use only the count fact and share the 24 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  },

  {
    id: 'm3-ck-simul-whole',
    use: 'check',
    tier: 'clean',
    setting: 'shopping',
    topic: 'jars of jam and honey',
    kind: 'problem',
    outcome: 'simul',
    text: 'A farm shop sold 16 jars, some of jam at €3 each and some of honey at €7 each, and took €84. How many jars of jam and how many of honey were sold?',
    route: { M1: ['unknown'], A1: ['totals'] },
    cues: {
      M1: [
        'sold 16 jars, some of jam at €3 each and some of honey at €7 each',
        'took €84',
        'How many jars of jam and how many of honey were sold?'
      ],
      A1: ['sold 16 jars, some of jam at €3 each and some of honey at €7 each', 'took €84']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'In {cue:A1}, two numbers are missing, and two facts are stated about the pair: how many there are in all, and what they come to in all. That is {a:A1.totals}.'
    },
    steps: [
      {
        does: 'Name the two missing numbers with letters, and write the two facts',
        working: 'x is the number of jars of jam and y is the number of jars of honey. The count fact: x + y = 16. The totals fact: 3 × x + 7 × y = 84'
      },
      {
        does: 'Use the count fact to write one letter in terms of the other',
        working: 'From x + y = 16, x = 16 − y'
      },
      {
        does: 'Put that into the totals fact, so that only one letter is left',
        working: '3 × (16 − y) + 7 × y = 84'
      },
      {
        does: 'Solve for the letter that is left',
        working: '3 × 16 = 48, so 48 − 3 × y + 7 × y = 84; that is 48 + 4 × y = 84; 4 × y = 84 − 48 = 36; y = 36 ÷ 4 = 9'
      },
      { does: 'Find the other number from the count fact', working: 'x = 16 − 9 = 7' },
      {
        does: 'Check both facts',
        working: '7 + 9 = 16; 3 × 7 + 7 × 9 = 21 + 63 = 84. Both hold'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '7 jars of jam and 9 jars of honey' },
        {
          id: 's1',
          text: '9 jars of jam and 7 jars of honey',
          slip: 'you attach the two numbers to the wrong things: 9 belongs to the jars of honey, the thing that was named y, and not to the jars of jam.'
        },
        {
          id: 's2',
          text: '8 jars of jam and 8 jars of honey',
          slip: 'you use only the count fact and share the 16 out equally, which ignores the totals fact.'
        }
      ]
    },
    why: 'One fact alone cannot fix two missing numbers, because many pairs fit it. Using the count fact to write one letter in terms of the other leaves a single letter in the totals fact, and a single letter can be solved. The other number then follows from the count fact, and the pair has to fit both facts.'
  },

  {
    id: 'm3-s-quad-1',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'a banner for a stand',
    kind: 'problem',
    outcome: 'quad',
    text: 'A banner for a trade stand is 3 m longer than it is wide, and its area is 70 m². How wide is the banner?'
  },

  {
    id: 'm3-s-quad-2',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'two matching lawns',
    kind: 'problem',
    outcome: 'quad',
    text: 'Two identical rectangular lawns are each 6 m longer than they are wide, and together they cover 144 m². How wide is each lawn?'
  },

  {
    id: 'm3-ck-quad-last',
    use: 'check',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a shop sign',
    kind: 'problem',
    outcome: 'quad',
    text: 'A rectangular shop sign is 7 cm taller than it is wide, and its area is 144 cm². How wide is the sign?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['7 cm taller than it is wide', 'How wide is the sign?'],
      A1: ['7 cm taller than it is wide', 'its area is 144 cm²']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a result, and the missing number is multiplied by itself as well as used on its own. That is {a:A1.itself}.'
    },
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × (x + 7) = 144. Multiply out: x × x is x², and x × 7 is 7 × x, so x² + 7 × x = 144'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 7 is 3.5, and 3.5 × 3.5 = 12.25. x² + 7 × x + 12.25 = 144 + 12.25 = 156.25'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 7 × x + 12.25 = (x + 3.5) × (x + 3.5), so (x + 3.5)² = 156.25'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 156.25 is 12.5, and −12.5 × −12.5 is also 156.25, so x + 3.5 = 12.5 or x + 3.5 = −12.5'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 12.5 − 3.5 = 9, or x = −12.5 − 3.5 = −16'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−16 cannot be right, because a sign cannot have a width below zero, so x = 9. Check: 9 × (9 + 7) = 9 × 16 = 144'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '9 cm' },
        {
          id: 's1',
          text: '12.5 cm',
          slip: 'you stop after the {t:sqroot} and give 12.5, though it is x + 3.5 that is 12.5, so 3.5 still has to come off.'
        },
        {
          id: 's2',
          text: '16 cm',
          slip: 'you add half the number in front of x, 3.5, instead of taking it away.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  },

  {
    id: 'm3-ck-quad-whole',
    use: 'check',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a puzzle in the paper',
    kind: 'problem',
    outcome: 'quad',
    text: 'A puzzle in the paper asks for a positive number that, multiplied by itself and then added to 8 times itself, gives 33. What is the number?',
    route: { M1: ['unknown'], A1: ['itself'] },
    cues: {
      M1: ['multiplied by itself and then added to 8 times itself, gives 33', 'What is the number?'],
      A1: ['multiplied by itself and then added to 8 times itself, gives 33', 'a positive number']
    },
    reason: {
      M1: 'The problem asks {cue:M1}, and a number is left out that has to be worked out from the numbers it does give. Nothing is followed through each hour, month or year, and there is no {t:righttriangle} or copy at another size, so the key’s first answer is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a result, and the missing number is multiplied by itself as well as used on its own. That is {a:A1.itself}.'
    },
    steps: [
      {
        does: 'Write it as x² + b × x = c, with x² on its own',
        working: 'x × x + 8 × x = 33, which is x² + 8 × x = 33 already'
      },
      {
        does: 'Add the square of half the number in front of x to both sides',
        working: 'Half of 8 is 4, and 4 × 4 = 16. x² + 8 × x + 16 = 33 + 16 = 49'
      },
      {
        does: 'Write the left side as one number {t:squared}',
        working: 'x² + 8 × x + 16 = (x + 4) × (x + 4), so (x + 4)² = 49'
      },
      {
        does: 'Take the {t:sqroot} of both sides, keeping both answers',
        working: 'The {t:sqroot} of 49 is 7, and −7 × −7 is also 49, so x + 4 = 7 or x + 4 = −7'
      },
      {
        does: 'Take away half the number in front of x from each',
        working: 'x = 7 − 4 = 3, or x = −7 − 4 = −11'
      },
      {
        does: 'Throw out any answer the story rules out, and check the one left',
        working: '−11 cannot be right, because the puzzle asks for a positive number, so x = 3. Check: 3 × 3 + 8 × 3 = 9 + 24 = 33'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3' },
        {
          id: 's1',
          text: '7',
          slip: 'you stop after the {t:sqroot} and give 7, though it is x + 4 that is 7, so 4 still has to come off.'
        },
        {
          id: 's2',
          text: '11',
          slip: 'you add half the number in front of x, 4, instead of taking it away.'
        }
      ]
    },
    why: 'Adding the square of half the number in front of x to both sides turns the left side into one number {t:squared}, (x + half of it)², and a number that has been multiplied by itself can be undone with a {t:sqroot}. A {t:sqroot} has two answers, one above zero and one below it, and the story decides which can stay.'
  }
]);
