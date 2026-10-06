// Basic Math, Unit Three: the worked examples (part 1 of 2). One for each kind of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. The working was computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u3', [
  {
    id: 'solved-rearr-1',
    kind: 'solved',
    outcome: 'rearr',
    h: 'Worked: the list price of a jacket',
    link: 'Here is the procedure for the first kind with real numbers: a jacket, a discount and sales tax, and every step written out.',
    problem: 'm3-s-rearr-1',
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the list price. First 8 is taken away from it, then the total is multiplied by 1.2. The result is 54',
        why: 'The missing number is the list price, so the working starts from it and follows what the shop does to it, in order: first $8 comes off, then what is left is multiplied by 1.2. Writing the list first fixes the order that the undoing is read from.'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 8 is undone by adding 8; multiplying by 1.2 is undone by dividing by 1.2. Last one first: dividing by 1.2, then adding 8'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '54 ÷ 1.2 = 45; 45 + 8 = 53',
        why: 'Each line takes the number from the line before. 54 ÷ 1.2 = 45 is the price after the 8 came off, and 45 + 8 = 53 puts the 8 back.'
      },
      {
        does: 'Check by running the calculation forward',
        working: '53 − 8 = 45; 45 × 1.2 = 54, which is the 54 the problem gives',
        why: 'Running the calculation forward on 53 gives the 54 in the problem. If it did not, an undoing was wrong, or was done in the wrong order.'
      }
    ],
    result: 'The list price was $53. Taking $8 off gives $45, and multiplying by 1.2 to add the sales tax gives the $54 the customer paid.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The last thing done sits outside the others, so it has to come off first, as shoes come off before socks.'
          },
          {
            id: 'y',
            text: 'Taking away 8 is undone by adding 8, and multiplying by 1.2 is undone by dividing by 1.2.',
            note: 'That is true, and it is what this step writes down, but it does not say why the dividing comes before the adding.'
          },
          {
            id: 'z',
            text: 'The result is 54.',
            note: 'That is true, but it does not say in which order the undoing is done.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The shop took 8 off first and then multiplied by 1.2, so the multiplying is wrapped round the outside: it was done to the list price with the 8 already gone. To get back, the outside has to come off first. If you added the 8 back first, you would be adding it to a number that has the tax in it: 54 + 8 = 62, and 62 ÷ 1.2 is about 51.67, which is not the list price.',
        'Dividing by 1.2 first gives 54 ÷ 1.2 = 45, the price after the 8 was taken off. Then adding 8 puts it back where it came off.'
      ]
    }
  },

  {
    id: 'solved-prop-1',
    kind: 'solved',
    outcome: 'prop',
    h: 'Worked: the price of 12 kg of apples',
    link: 'Here is the procedure for the second kind with real numbers: apples at a market stall, and every step written out.',
    problem: 'm3-s-prop-1',
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 8 kg of apples for 6 dollars. The new amount is 12 kg of apples, so it is paired with the 8 kg of apples in the rate',
        why: 'The new amount is a number of kilos, so it has to be compared with the kilos in the rate, 8, and not with the dollars. That is what makes the next step mean something.'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '12 ÷ 8 = 1.5, so the new amount is 1.5 times as big as 8',
        why: 'Dividing the new amount by the matching number says how many times it fits: 8 kg goes into 12 kg 1.5 times. A number below 1 would mean a smaller amount.'
      },
      { does: 'Make the other number that many times as big', working: '6 × 1.5 = 9' },
      {
        does: 'Check the direction',
        working: '12 kg of apples is more than 8 kg of apples, so the answer should be more than 6 dollars, and 9 is more',
        why: 'More apples must cost more, so the answer has to be more than $6, and $9 is. The check catches a rate scaled the wrong way round.'
      }
    ],
    result: '12 kg of apples cost $9.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A rate keeps its two numbers in step, so if the amount of apples is 1.5 times as big, the price has to be 1.5 times as big too.'
          },
          {
            id: 'y',
            text: '6 × 1.5 = 9.',
            note: 'That is true, and it is the working of this step, but it does not say why the price is multiplied by that number.'
          },
          {
            id: 'z',
            text: '12 is more than 8.',
            note: 'That is true, but it does not say what is done to the price.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The rate says that 8 kg of apples and $6 go together. Take twice the apples, 16 kg, and the price doubles, to $12. Take half the apples, 4 kg, and the price halves, to $3. Whatever happens to one number happens to the other, as long as the rate stays the same.',
        'Here 12 kg is 1.5 times 8 kg, so the price is 1.5 times $6.'
      ]
    }
  },
]);
