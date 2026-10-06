// Basic Math, Unit Three: the worked examples (part 1 of 2). Two for each kind of problem, in different areas of life.
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
        why: 'The missing number is the list price, so the working starts from it and follows what the shop does to it, in order: first $8 comes off, then what is left is multiplied by 1.2 to add the tax. The list stops at the result the problem gives, 54. Writing the list first means that nothing done to the list price is forgotten, and it fixes the order that the undoing will be read from.'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 8 is undone by adding 8; multiplying by 1.2 is undone by dividing by 1.2. Last one first: dividing by 1.2, then adding 8'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '54 ÷ 1.2 = 45; 45 + 8 = 53',
        why: 'Each line takes the number from the line before. 54 ÷ 1.2 = 45 is the price after the 8 came off, and 45 + 8 = 53 puts the 8 back. The answer is the list price, the number the working started from.'
      },
      {
        does: 'Check by running the calculation forward',
        working: '53 − 8 = 45; 45 × 1.2 = 54, which is the 54 the problem gives',
        why: 'Running the calculation forward on 53 is the proof: 53 − 8 = 45 and 45 × 1.2 = 54, which is the result in the problem. If the forward run does not give the problem’s result, an undoing was wrong, or was done in the wrong order, and the check is where that shows.'
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
        'Dividing by 1.2 first gives 54 ÷ 1.2 = 45, the price after the 8 was taken off. Then adding 8 puts it back where it came off. Each undoing meets the number in the state that the matching step left it in, and that is why the list is read from the end.'
      ]
    }
  },

  {
    id: 'solved-rearr-2',
    kind: 'solved',
    outcome: 'rearr',
    h: 'Worked again: the fourth long jump',
    link: 'The same procedure in a different story, with the missing number divided last instead of multiplied.',
    problem: 'm3-s-rearr-2',
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the fourth jump. First 36 is added to it, then the total is divided by 4. The result is 13',
        why: 'Here the missing number is the fourth jump. The first three jumps are known and add up to 36, so 36 is added to the missing jump, and then the total is divided by 4 to make the mean. The list ends at the result, the mean of 13.'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Adding 36 is undone by taking away 36; dividing by 4 is undone by multiplying by 4. Last one first: multiplying by 4, then taking away 36',
        why: 'The last thing done was dividing by 4, so it is undone first, by multiplying by 4. Then the adding of 36 is undone by taking away 36. As before, the list is read from the end.'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '13 × 4 = 52; 52 − 36 = 16',
        why: '13 × 4 = 52 is the total of all four jumps, which is what the mean was made from. Taking away the 36 of the first three leaves 16, the fourth jump.'
      },
      {
        does: 'Check by running the calculation forward',
        working: '16 + 36 = 52; 52 ÷ 4 = 13, which is the 13 the problem gives'
      }
    ],
    result: 'Dev’s fourth jump must be 16 m. The four jumps then total 52 m, and 52 ÷ 4 = 13.',
    hold: {
      step: 3,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A slip in the arithmetic can leave a number that looks reasonable, and only running the calculation forward shows whether that number gives the result in the problem.'
          },
          {
            id: 'y',
            text: '16 + 36 = 52 and 52 ÷ 4 = 13.',
            note: 'That is true, and it is the working of this step, but it does not say why the step is there.'
          },
          {
            id: 'z',
            text: 'The mean of four jumps is their total divided by 4.',
            note: 'That is true, but it is the rule the problem states, not the reason for checking.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Suppose the arithmetic had slipped, and 52 − 36 had been written as 14. A fourth jump of 14 m looks reasonable, so nothing in the answer says that it is wrong. Running it forward gives 14 + 36 = 50 and 50 ÷ 4 = 12.5, which is not 13, so the check catches the slip.',
        'The same run on 16 gives 52 and 13, the result in the problem. It is the only step that tests the answer against what the problem said, and it works because running a calculation forward is easy even when undoing it is not.'
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
        why: 'The new amount is a number of kilos, so it has to be compared with the kilos in the rate, 8, and not with the dollars. Comparing kilos with kilos is what makes the next step mean something: how many times as big the new kilos are as the old kilos.'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '12 ÷ 8 = 1.5, so the new amount is 1.5 times as big as 8',
        why: 'Dividing the new amount by the matching number says how many times the matching number fits into it. 8 kg goes into 12 kg 1.5 times. 1.5 is more than 1, so the new amount is bigger than the amount in the rate. A number below 1 would mean a smaller amount.'
      },
      { does: 'Make the other number that many times as big', working: '6 × 1.5 = 9' },
      {
        does: 'Check the direction',
        working: '12 kg of apples is more than 8 kg of apples, so the answer should be more than 6 dollars, and 9 is more',
        why: 'More apples must cost more, so the answer has to be more than $6, and $9 is. The check catches a rate scaled the wrong way round: dividing 6 by 1.5 would give 4, which is less, though more apples are being bought.'
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
        'Here 12 kg is 1.5 times 8 kg, so the price is 1.5 times $6. That is why the number found in the last step is used to multiply the other number, 6, and not to add to it.'
      ]
    }
  },

  {
    id: 'solved-prop-2',
    kind: 'solved',
    outcome: 'prop',
    h: 'Worked again: the posts for a shorter fence',
    link: 'The same procedure in a different story, with a new amount that is smaller than the one in the rate.',
    problem: 'm3-s-prop-2',
    steps: [
      {
        does: 'Pair the new amount with the matching number in the rate',
        working: 'The rate is 24 posts for 20 m of fence. The new amount is 15 m of fence, so it is paired with the 20 m of fence in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '15 ÷ 20 = 0.75, so the new amount is 0.75 times as big as 20',
        why: 'Here the new amount, 15 m, is smaller than the 20 m in the rate, so the number of times is below 1. 0.75 is three quarters: 15 m is three quarters of 20 m. A number below 1 is not a mistake. It says that the new amount is smaller.'
      },
      {
        does: 'Make the other number that many times as big',
        working: '24 × 0.75 = 18',
        why: 'The same step as before, for the same reason: the posts keep in step with the length. Three quarters of the length needs three quarters of the posts: 24 × 0.75 = 18.'
      },
      {
        does: 'Check the direction',
        working: '15 m of fence is less than 20 m of fence, so the answer should be less than 24 posts, and 18 is less',
        why: 'Less fence needs fewer posts, so the answer has to be less than 24, and 18 is. It is also a whole number, which a count of posts has to be.'
      }
    ],
    result: 'A 15 m fence needs 18 posts.',
    hold: {
      step: 0,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The new amount, 15, is a number of meters, so it has to be compared with the meters in the rate, 20, and not with the 24 posts.'
          },
          {
            id: 'y',
            text: 'The rate is 24 posts for every 20 m.',
            note: 'That is true, and it is the information the step uses, but it does not say which number the new amount goes with.'
          },
          {
            id: 'z',
            text: '15 is less than 20.',
            note: 'That is true, and it matters for the last step, but it does not say which number the new amount goes with.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'The rate has two numbers, and each belongs to a different thing: 24 belongs to posts and 20 belongs to meters. The new amount, 15 m, is meters, so only the 20 can be compared with it. Dividing 15 by 24 would compare meters with posts, and the answer would not mean anything: it would not say how many times as long the new fence is.',
        'Pairing first is what makes “how many times as big” in the next step mean something. If the new amount had been posts instead, say 30 posts, it would have been paired with the 24, and the answer would have been in meters.'
      ]
    }
  }
]);
