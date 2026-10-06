// Basic Math, Unit Six: the worked examples (part 2 of 2). One for each of the last two kinds of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-similar-1',
    kind: 'solved',
    outcome: 'similar',
    h: 'Worked: how high an enlarged photo is',
    link: 'Here is the procedure for the third kind of problem with real numbers: a photo and its enlargement, and every step written out.',
    problem: 'm6-s-similar-1',
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 10 cm on the photo and 25 cm on the enlargement. The part you want, the height, is measured on the photo only: 15 cm',
        why: 'The part measured on both things is what shows how much bigger the enlargement is. The height is measured on the photo only, 15 cm, and it is the length you want on the enlargement.'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '25 ÷ 10 = 2.5'
      },
      {
        does: 'Multiply the length you have by that number of times',
        working: '15 × 2.5 = 37.5 cm',
        why: 'The photo’s height is 15 cm, and the enlargement is 2.5 times longer in every direction, so its height is 15 × 2.5 = 37.5 cm. If the length you have is on the bigger thing, divide instead. Adding would be a slip: a copy grows by multiplying every length by the same number, and not by adding the same number of centimeters.'
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
            text: 'In an exact copy every length is made the same number of times longer, so the number of times found from the width is also the number of times for the height.'
          },
          {
            id: 'y',
            text: '25 ÷ 10 = 2.5.',
            note: 'That is true, and it is the working of this step, but it does not say why a number found from the width can be used on the height.'
          },
          {
            id: 'z',
            text: 'The enlargement is wider than the photo.',
            note: 'That is true, but it does not say why the number found from the width works for the height.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'An exact copy keeps the shape. If the width were made 2.5 times longer and the height only 2 times, the picture would look squashed, and it would not be an exact copy. So every length on the copy is the same number of times longer than the matching length on the original. The width is measured on both, so it gives the number: 25 ÷ 10 = 2.5.'
      ]
    }
  },

  {
    id: 'solved-sqcube-1',
    kind: 'solved',
    outcome: 'sqcube',
    h: 'Worked: how much more clay a bigger cube holds',
    link: 'Here is the procedure for the fourth kind of problem with real numbers: two cubes of clay of the same shape, and every step written out.',
    problem: 'm6-s-sqcube-1',
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '20 ÷ 10 = 2',
        why: 'The two cubes are exact copies of each other, so one number says how many times longer every edge of the bigger one is: 20 ÷ 10 = 2.'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Clay fills a solid, so the problem asks about volume',
        why: 'Area is about a surface, such as paint on the outside or floor that is covered. Volume is about the room inside a solid, such as clay, water or soup. The problem asks how much clay there is, and clay fills the cube, so the problem asks about volume.'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Say what it shows',
        working: 'The bigger one has 8 times as much volume (clay)',
        why: 'The bigger cube has 8 times as much clay as the small one, though each of its edges is only 2 times longer. If the problem gives the small one’s amount, multiply it by 8.'
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
            text: 'A solid has three directions, length, width and height, and each is 2 times longer, so the number of small cubes that fill it is 2 × 2 × 2 times as big.'
          },
          {
            id: 'y',
            text: '2 × 2 × 2 = 8.',
            note: 'That is true, and it is the working of this step, but it does not say why there are three 2s in it.'
          },
          {
            id: 'z',
            text: 'The bigger cube is 20 cm along each edge.',
            note: 'That is true, but it does not say why there are three 2s in the working.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Build the 20 cm cube out of 10 cm blocks. Along its length there are 2 blocks, along its width 2 blocks, and along its height 2 blocks. That is 2 × 2 × 2 = 8 blocks, so the bigger cube holds 8 times as much clay as the small one.',
        'For an area the picture is flat: a floor 2 times as long and 2 times as wide holds 2 × 2 = 4 of the small floors, and there is no third direction. That is why an area needs two of the number in the product and a volume needs three.'
      ]
    }
  }
]);
