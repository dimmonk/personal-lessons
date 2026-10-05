// Basic Math, Unit Two: the worked examples (part 3 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. // The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u2', [
  {
    id: 'solved-irrat-1',
    kind: 'solved',
    outcome: 'irrat',
    h: 'Worked: the diagonal of a square tile',
    link: 'Here is the procedure for the sixth kind with real numbers, every step written out.',
    problem: 's-irrat-1',
    steps: [
      {
        does: 'Name the whole number under the root sign',
        working: '√2: the whole number is 2',
        why: 'The diagonal is the number that multiplies by itself to give 2, so the whole number under the root sign is 2. Naming it says which number the question is about.'
      },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '1 × 1 = 1 and 2 × 2 = 4',
        why: 'If a whole number multiplied by itself gave 2, it would sit between a whole number whose product with itself is below 2 and one whose product is above 2. 1 × 1 = 1 is below 2, and 2 × 2 = 4 is above it. So the number is between 1 and 2, and neither end is the answer.'
      },
      {
        does: 'See whether it lands exactly on one of them',
        working: '2 is not 1 and not 4, so it is not any whole number multiplied by itself'
      },
      {
        does: 'Say whether it can be written exactly',
        working: '√2 cannot be written as a fraction or as a decimal that ends. Rounded, it is about 1.41',
        why: 'A calculator shows 1.41421356… and would show more digits if it had room, with no end. Any decimal it shows has been cut off, so it is a rounded value: 1.41 × 1.41 = 1.9881 is close to 2 and still not 2.'
      }
    ],
    result: 'The diagonal cannot be written exactly. Rounded, it is about 1.41 m, and no decimal can do better than rounding.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A whole number that does not land exactly on a whole number multiplied by itself has a root that can never be written exactly: the root is either a whole number or not exact, with nothing in between.'
          },
          {
            id: 'y',
            text: '2 is between 1 and 4.',
            note: 'That is true, and it is what the step before found, but it does not say what follows from 2 not landing on either.'
          },
          {
            id: 'z',
            text: '1 × 1 = 1 and 2 × 2 = 4.',
            note: 'That is true, but it is the working of the step before. It does not say why not landing on one of them matters.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The root of a whole number is one of two sorts. Either the whole number is a whole number multiplied by itself, like 4, 9 or 36, and then the root is that whole number, written exactly. Or it is not, and then the root can never be written exactly, as a fraction or as a decimal that ends. There is no third sort. It has been proved that no fraction multiplied by itself gives 2.',
        'So landing exactly on a whole number multiplied by itself is the only way for the root to be exact. 2 is not 1 and not 4, so it does not land, and the {t:sqroot} of 2 is not exact.'
      ]
    }
  },

  {
    id: 'solved-irrat-2',
    kind: 'solved',
    outcome: 'irrat',
    h: 'Worked again: the side of a square patio',
    link: 'The same procedure in a different story, with a number that does land.',
    problem: 's-irrat-2',
    steps: [
      {
        does: 'Name the whole number under the root sign',
        working: '√81: the whole number is 81',
        why: 'The same first step, for the same reason. The side is the number that multiplies by itself to give 81, so the whole number under the root sign is 81.'
      },
      {
        does: 'Find the whole numbers whose products with themselves sit either side of it',
        working: '9 × 9 = 81 and 10 × 10 = 100',
        why: 'The two whole numbers whose products with themselves sit either side of 81 are 9 × 9 = 81 and 10 × 10 = 100. Writing the two lets you see at a glance whether 81 is one of them.'
      },
      { does: 'See whether it lands exactly on one of them', working: '81 is 9 × 9, so it lands exactly' },
      {
        does: 'Say whether it can be written exactly',
        working: '√81 = 9, which is exact',
        why: 'The root is 9, a whole number, and a whole number can be written exactly: 9, or 9/1, or 9.0. So the side can be written exactly.'
      }
    ],
    result: 'The side of the patio is 9 m, and it can be written exactly.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'When a whole number lands exactly on a whole number multiplied by itself, its root is that whole number, and a whole number can be written exactly.'
          },
          {
            id: 'y',
            text: '10 × 10 = 100 is above 81.',
            note: 'That is true, but it is not what the step is about: the step is about 9 × 9 = 81.'
          },
          {
            id: 'z',
            text: 'The area of the patio is 81 m².',
            note: 'That is true, but it is the starting fact. It does not say why the root can be written exactly.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The step asks whether 81 is a whole number multiplied by itself, and it is: 9 × 9 = 81. Then the number that multiplies by itself to give 81 is 9, and nothing more has to be found out.',
        'This is the other sort of root. The root of a whole number is either a whole number, written exactly, or it is never exact. Here the first sort holds, and the answer is yes, where for the diagonal of the tile it was no.'
      ]
    }
  }
]);
