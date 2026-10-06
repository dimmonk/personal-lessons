// Basic Math, Unit Six: the worked examples (part 2 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-trig-2',
    kind: 'solved',
    outcome: 'trig',
    h: 'Worked again: how long a ramp is, from its rise and its slope',
    link: 'The same procedure for {o:trig} in a different story, with a different button and with the side you want underneath, so that the last steps divide.',
    problem: 'm6-s-trig-2',
    steps: [
      {
        does: 'Name the three sides, starting from the angle you were given',
        working: 'The angle is 6°. The longest side, opposite the square corner, is the ramp itself. The side opposite the angle is the rise of 0.9 m. The side next to the angle, the one that is not the longest, is the level ground under the ramp',
        why: 'The same first step, from the angle of 6°. The ramp is the longest side, because it is opposite the square corner where the rise meets the ground. The rise of 0.9 m is opposite the angle, and the ground under the ramp is next to it.'
      },
      {
        does: 'Choose the calculator button that joins the side you know to the side you want',
        working: 'You know the side opposite the angle (0.9 m) and want the longest side. The sin button joins those two: sin = opposite ÷ longest',
        why: 'You know the side opposite the angle, the rise of 0.9 m, and you want the longest side, the ramp. The button that joins the side opposite the angle and the longest side is sin, which gives the side opposite the angle divided by the longest side. The side next to the angle plays no part, which is why the distance along the ground is never needed.'
      },
      {
        does: 'Write the button’s comparison with the numbers in',
        working: 'sin 6° = 0.9 ÷ ramp',
        why: 'The same step as in the first problem: the button’s comparison, with the numbers in. This time the side you know, the rise, is on top, and the side you want, the ramp, is underneath.'
      },
      { does: 'Get the side you want on its own', working: 'ramp = 0.9 ÷ sin 6°' },
      {
        does: 'Read the button’s value off the calculator, set to degrees, and finish the sum',
        working: 'sin 6° = 0.1045; 0.9 ÷ 0.1045 = 8.6124, so about 8.6 m',
        why: 'The sin button gives 0.1045 for 6° to four decimal places, and 0.9 ÷ 0.1045 = 8.612, which is 8.6 m to one decimal place. As a check, a ramp is always longer than its own rise, and 8.6 m is much longer than 0.9 m, because a slope of 6° is a gentle one.'
      }
    ],
    result: 'The ramp is about 8.6 m long along its slope.',
    hold: {
      step: 3,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The side you want is underneath in the comparison, so it is found by dividing the side you know by the button’s value.'
          },
          {
            id: 'y',
            text: 'sin 6° = 0.1045.',
            note: 'That is true, but it is the next step’s working, and it does not say why this step divides.'
          },
          {
            id: 'z',
            text: 'The ramp is longer than the rise.',
            note: 'That is true, and it is a good check on the answer, but it does not say why this step divides.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The comparison says that 0.9 divided by the ramp gives the button’s value. So the ramp is the number that 0.9 has to be divided by to give that value, and that is 0.9 divided by the button’s value: ramp = 0.9 ÷ sin 6°. To see it with easy numbers, if a ramp of 10 m rose 1 m, the button’s value would be 1 ÷ 10 = 0.1, and to get the 10 back from the 1 and the 0.1 you divide: 1 ÷ 0.1 = 10.',
        'In the first problem the side wanted was on top of the comparison, and the step multiplied. Here the side wanted is underneath, and the step divides. Mixing them up is a common slip: multiplying here would give 0.9 × 0.1045 = 0.09 m, a ramp shorter than its own rise, which is impossible for the longest side of a triangle.'
      ]
    }
  },

  {
    id: 'solved-similar-1',
    kind: 'solved',
    outcome: 'similar',
    h: 'Worked: how high an enlarged photo is',
    link: 'Here is the procedure for the third kind of problem in this unit with real numbers: a photo and its enlargement, and every step written out.',
    problem: 'm6-s-similar-1',
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 10 cm on the photo and 25 cm on the enlargement. The part you want, the height, is measured on the photo only: 15 cm',
        why: 'The part measured on both things is what shows how much bigger the enlargement is. Here it is the width: 10 cm on the photo and 25 cm on the enlargement. The height is measured on the photo only, 15 cm, and it is the length you want on the enlargement.'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '25 ÷ 10 = 2.5'
      },
      {
        does: 'Multiply the length you have by that number of times',
        working: '15 × 2.5 = 37.5 cm',
        why: 'The photo’s height is 15 cm, and the enlargement is 2.5 times longer in every direction, so its height is 15 × 2.5 = 37.5 cm. Adding would be a slip. The width grew by 15 cm, from 10 cm to 25 cm, and adding 15 cm to the height, 15 + 15 = 30, would give a copy that is too narrow for its height. A copy grows by multiplying every length by the same number, and not by adding the same number of centimeters.'
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
        'An exact copy keeps the shape. If the width were made 2.5 times longer and the height only 2 times, the picture would look squashed, and it would not be an exact copy. So every length on the copy, the width, the height, the line from corner to corner, is the same number of times longer than the matching length on the original. The width is measured on both, so it gives the number: 25 ÷ 10 = 2.5.',
        'That number is the one idea of this kind of problem. Once it is found from the part measured on both, it can be used on any other length of the same thing.'
      ]
    }
  },

  {
    id: 'solved-similar-2',
    kind: 'solved',
    outcome: 'similar',
    h: 'Worked again: how long a toy car is',
    link: 'The same procedure for {o:similar} in a different story, in which the length you have is on the bigger thing and the length you want is on the smaller one.',
    problem: 'm6-s-similar-2',
    steps: [
      {
        does: 'Find a part that is measured on both things',
        working: 'The width is 20 cm on the toy car and 160 cm on the real car. The part you want, the length, is measured on the real car only: 480 cm',
        why: 'The same first step. The part measured on both is the width: 20 cm on the toy and 160 cm on the real car. The length is measured on the real car only, 480 cm, and the length you want is the toy’s.'
      },
      {
        does: 'Find how many times longer the bigger thing is than the smaller one',
        working: '160 ÷ 20 = 8',
        why: 'The same step as in the first problem, for the same reason: 160 ÷ 20 = 8, so the real car is 8 times longer than the toy in every direction. It does not matter which thing carries the length you already know: the number of times is always found from the part measured on both, and always as the bigger length divided by the smaller.'
      },
      { does: 'Divide the length you have by that number of times', working: '480 ÷ 8 = 60 cm' }
    ],
    result: 'The toy car is 60 cm long.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The real car is 8 times longer than the toy in every direction, so the toy is 8 times shorter, and a length 8 times shorter is found by dividing.'
          },
          {
            id: 'y',
            text: '480 ÷ 8 = 60.',
            note: 'That is true, and it is the working of this step, but it does not say why the step divides.'
          },
          {
            id: 'z',
            text: 'The toy is smaller than the real car.',
            note: 'That is true, but it does not say why the step divides and does not multiply.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'For the photo, the length you had was on the smaller thing and the length you wanted was on the bigger thing, so the step multiplied. Here the length you have, 480 cm, is on the bigger thing, and the length you want is on the smaller one. The real car is 8 times longer than the toy, so the toy’s length is the real car’s length cut into 8 equal parts, and a length cut into equal parts is found by dividing.',
        'Multiplying by 8 instead would give a toy car longer than the real one: 480 × 8 = 3,840 cm, which is impossible. A quick check before you finish is to ask which of the two things is the bigger, and whether the length you have found fits that.'
      ]
    }
  },

  {
    id: 'solved-sqcube-1',
    kind: 'solved',
    outcome: 'sqcube',
    h: 'Worked: how much more clay a bigger cube holds',
    link: 'Here is the procedure for the fourth kind of problem in this unit with real numbers: two cubes of clay of the same shape, and every step written out.',
    problem: 'm6-s-sqcube-1',
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '20 ÷ 10 = 2',
        why: 'The two cubes are exact copies of each other, so one number says how many times longer every edge of the bigger one is: 20 ÷ 10 = 2. This is the same first step as for the third kind of problem in this unit.'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'Clay fills a solid, so the problem asks about volume',
        why: 'This step decides how many times to multiply in the next one. Area is about a surface, such as paint on the outside or floor that is covered. Volume is about the room inside a solid, such as clay, water or soup. The problem asks how much clay there is, and clay fills the cube, so the problem asks about volume.'
      },
      {
        does: 'Multiply that number of times by itself, with three of them in the product for a volume',
        working: '2 × 2 × 2 = 8'
      },
      {
        does: 'Say what it shows',
        working: 'The bigger one has 8 times as much volume (clay)',
        why: 'The problem asks how many times more clay, so the answer is a number of times: 8 times as much. The bigger cube has 8 times as much clay as the small one, though each of its edges is only 2 times longer.'
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
        'Picture the 10 cm cube as one block, and build the 20 cm cube out of 10 cm blocks. Along its length there are 2 blocks, along its width 2 blocks, and along its height 2 blocks. That is 2 × 2 × 2 = 8 blocks, so the bigger cube holds 8 times as much clay as the small one. It is not 2 times as much, though every edge is 2 times longer, because the bigger cube is longer, wider and taller all at once.',
        'For an area the picture is flat: a floor 2 times as long and 2 times as wide holds 2 × 2 = 4 of the small floors, and there is no third direction. That is why an area needs two of the number in the product and a volume needs three.'
      ]
    }
  }
]);
