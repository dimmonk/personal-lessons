// Basic Math, Unit Three: the worked examples (part 1 of 2). One for each type of problem.
// Every step has a short action, its working and, on most, one or two plain sentences of why. One step in each carries the idea, and its reason is held
// back until the learner has chosen it. The working was computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u3', [
  {
    id: 'solved-rearr-1',
    kind: 'solved',
    outcome: 'rearr',
    h: 'Worked: the list price of a jacket',
    link: 'Now the steps with real numbers: a jacket, a discount and sales tax.',
    problem: 'm3-s-rearr-1',
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the list price. First 8 is taken away from it, then the total is multiplied by 1.2. The result is 54',
        why: 'The shop takes $8 off the list price, then multiplies by 1.2 for the tax. You need this order to undo it.'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 8 is undone by adding 8; multiplying by 1.2 is undone by dividing by 1.2. Last one first: dividing by 1.2, then adding 8'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '54 ÷ 1.2 = 45; 45 + 8 = 53',
        why: 'Each line uses the number from the line before: 45 is the price with the $8 already off, and adding 8 puts it back.'
      },
      {
        does: 'Check by running the calculation forward',
        working: '53 − 8 = 45; 45 × 1.2 = 54, which is the 54 the problem gives',
        why: 'The shop’s calculation on $53 should give the $54 in the problem. If it does not, an undoing was wrong or came in the wrong order.'
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
            text: 'The last thing done sits on the outside, so it comes off first, like shoes before socks.'
          },
          {
            id: 'y',
            text: 'Taking away 8 is undone by adding 8, and multiplying by 1.2 by dividing by 1.2.',
            note: 'True, but that only lists the undoing. It does not say why the dividing comes first.'
          },
          {
            id: 'z',
            text: 'The result is 54, which is the number you start the undoing from.',
            note: 'True, but it says nothing about the order of the undoing.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The shop took 8 off first and multiplied by 1.2 second, so the multiplying is on the outside. Add the 8 back first and you get 54 + 8 = 62, and 62 ÷ 1.2 is about 51.67, which is wrong.',
        'Divide by 1.2 first: 54 ÷ 1.2 = 45, the price with the 8 already off. Then add the 8 back.'
      ]
    }
  },

  {
    id: 'solved-prop-1',
    kind: 'solved',
    outcome: 'prop',
    h: 'Worked: the price of 12 kg of apples',
    link: 'Now the steps with real numbers: apples at a market stall.',
    problem: 'm3-s-prop-1',
    steps: [
      {
        does: 'Match the new amount to the same thing in the rate',
        working: 'The rate is 8 kg of apples for 6 dollars. The new amount is 12 kg of apples, so it is matched to the 8 kg of apples in the rate',
        why: 'The new amount is in kilograms, so compare it with the 8 kg in the rate, not with the dollars.'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '12 ÷ 8 = 1.5, so the new amount is 1.5 times as big as 8',
        why: '8 kg goes into 12 kg 1.5 times. A result below 1 would mean a smaller amount.'
      },
      { does: 'Make the other number that many times as big', working: '6 × 1.5 = 9' },
      {
        does: 'Check the direction',
        working: '12 kg of apples is more than 8 kg of apples, so the answer should be more than 6 dollars, and 9 is more',
        why: 'More apples must cost more than $6, and $9 does. This check catches a rate scaled the wrong way.'
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
            text: 'A rate keeps its two numbers in step, so 1.5 times the apples costs 1.5 times the price.'
          },
          {
            id: 'y',
            text: '6 × 1.5 = 9, which is the price of 12 kg of apples at this rate.',
            note: 'True, but that is the arithmetic. It does not say why the price is multiplied.'
          },
          {
            id: 'z',
            text: '12 is more than 8, so the price has to be more than 6.',
            note: 'True, but it does not say what to do to the price.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The rate says 8 kg of apples and $6 go together. Twice the apples, 16 kg, costs twice as much, $12. Half the apples, 4 kg, costs half as much, $3.',
        'Here 12 kg is 1.5 times 8 kg, so the price is 1.5 times $6.'
      ]
    }
  },
]);
