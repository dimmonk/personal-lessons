// Basic Math, Unit Six: the worked examples (part 2 of 2). One for each of the last two types of problem.
// Every step is an action with its working, and most carry one short sentence of why. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-similar-1',
    kind: 'solved',
    outcome: 'similar',
    h: 'Worked: how high an enlarged photo is',
    link: 'A photo and its enlargement, and the steps for the third type with real numbers.',
    problem: 'm6-s-similar-1',
    steps: [
      {
        does: 'Find a length that is measured on both things',
        working: 'The width is 10 cm on the photo and 25 cm on the enlargement. The height, which you want, is known on the photo only: 15 cm',
        why: 'The length measured on both shows how much bigger the enlargement is.'
      },
      {
        does: 'Work out how many times longer the bigger one is',
        working: '25 ÷ 10 = 2.5'
      },
      {
        does: 'Multiply the length you know by that number',
        working: '15 × 2.5 = 37.5 cm',
        why: 'Multiply when the length you know is on the smaller one, and divide when it is on the bigger one.'
      }
    ],
    result: 'The enlargement is 37.5 cm high.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Every length on an exact copy is made the same number of times longer, so the number from the width works for the height too.'
          },
          {
            id: 'y',
            text: 'The width goes from 10 cm to 25 cm, which is 2.5 times longer.',
            note: 'True, but it does not say why the same number works for the height.'
          },
          {
            id: 'z',
            text: 'The enlargement has to be wider than the photo.',
            note: 'True, but it does not say why the same number works for the height.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'An exact copy keeps its shape. If the width were 2.5 times longer and the height only 2 times longer, the picture would look squashed. So every length grows by the same number, and the width, which you know on both, gives it: 25 ÷ 10 = 2.5.'
      ]
    }
  },

  {
    id: 'solved-sqcube-1',
    kind: 'solved',
    outcome: 'sqcube',
    h: 'Worked: how much more clay a bigger cube holds',
    link: 'Two cubes of clay of the same shape, and the steps for the fourth type with real numbers.',
    problem: 'm6-s-sqcube-1',
    steps: [
      {
        does: 'Work out how many times longer the bigger one is',
        working: '20 ÷ 10 = 2',
        why: 'The cubes are exact copies, so one number covers every edge.'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Clay fills a solid, so it is a volume',
        why: 'Area is a surface, like paint on the outside, and volume is the room inside, like clay, water or soup.'
      },
      {
        does: 'Multiply two of that number together for an area, or three for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Say what you found',
        working: 'The bigger cube holds 8 times as much clay',
        why: 'Each edge is only 2 times longer, yet the clay is 8 times as much.'
      }
    ],
    result: 'The bigger cube holds 8 times as much clay as the smaller one.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A solid has three directions, length, width and height, and each is 2 times longer, so there are three 2s.'
          },
          {
            id: 'y',
            text: 'Multiplying three 2s together gives 8.',
            note: 'True, but it does not say why there are three 2s.'
          },
          {
            id: 'z',
            text: 'Each edge of the bigger cube is 20 cm long.',
            note: 'True, but it does not say why there are three 2s.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Build the 20 cm cube out of 10 cm blocks. 2 blocks fit along its length, 2 across its width and 2 up its height: 2 × 2 × 2 = 8 blocks.',
        'An area is flat, so only two directions count: a floor 2 times as long and 2 times as wide holds 2 × 2 = 4 small floors. That is why an area needs two 2s and a volume needs three.'
      ]
    }
  }
]);
