// Basic Math, Unit Three: fresh problems for later days: one for each kind. A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often taken for.
// The working, the wrong choices and the slip behind each were computed from the problem's own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u3', [

  {
    id: 'm3-rt-rearr-2',
    use: 'return',
    tier: 'varied',
    setting: 'home',
    topic: 'pleats in a curtain',
    kind: 'problem',
    outcome: 'rearr',
    text: 'A tailor works out how many pleats a curtain has this way: take the curtain’s width in cm, subtract 4, then divide by 3. A curtain has 32 pleats. How wide is it?',
    route: { M1: ['unknown'], A1: ['formula'] },
    cues: {
      M1: ['take the curtain’s width in cm, subtract 4, then divide by 3', 'How wide is it?'],
      A1: ['take the curtain’s width in cm, subtract 4, then divide by 3', 'A curtain has 32 pleats']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give a rule and the result it came to, with one number in the rule left out. Each thing done to that number can be undone, so it is {a:A1.formula}.'
    },
    not: {
      outcome: 'simul',
      why: 'Only one number is missing, from one calculation. It would be {o:simul} if two numbers were missing, with two facts about them.'
    },
    steps: [
      {
        does: 'List what is done to the missing number, in the order it is done',
        working: 'Start from the width. First 4 is taken away from it, then the total is divided by 3. The result is 32'
      },
      {
        does: 'Write the undoing of each one, last one first',
        working: 'Taking away 4 is undone by adding 4; dividing by 3 is undone by multiplying by 3. Last one first: multiplying by 3, then adding 4'
      },
      {
        does: 'Apply the undoing to the result, one at a time',
        working: '32 × 3 = 96; 96 + 4 = 100'
      },
      {
        does: 'Check by running the calculation forward',
        working: '100 − 4 = 96; 96 ÷ 3 = 32, which is the 32 the problem gives'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '100 cm' },
        {
          id: 's1',
          text: '108 cm',
          slip: 'you undo the steps in the order they were done, instead of starting with the last one.'
        },
        {
          id: 's2',
          text: '92 cm',
          slip: 'you take away 4 once more instead of undoing it by adding 4.'
        }
      ]
    },
    why: 'Undo each thing done to the missing number with its opposite, in reverse order: the last thing done sits on the outside, as socks go on before shoes and come off after them. Running the {t:formula} forward on your answer proves it.'
  },

  {
    id: 'm3-rt-prop-2',
    use: 'return',
    tier: 'varied',
    setting: 'travel',
    topic: 'guests in hotel rooms',
    kind: 'problem',
    outcome: 'prop',
    text: 'A hotel puts 18 guests in every 12 rooms. It has 36 rooms free. How many guests can it take?',
    route: { M1: ['unknown'], A1: ['rate'] },
    cues: {
      M1: ['puts 18 guests in every 12 rooms', 'How many guests can it take?'],
      A1: ['puts 18 guests in every 12 rooms', 'It has 36 rooms free']
    },
    reason: {
      M1: 'The words {cue:M1} ask for a number to be worked out from the others. Nothing changes over time and there is no {t:righttriangle} or copy at another size, so it is {a:M1.unknown}.',
      A1: 'The words {cue:A1} give so much for so many, and a new amount of one of them, with nothing added on top. That is {a:A1.rate}.'
    },
    not: {
      outcome: 'rearr',
      why: 'It gives a rate and a new amount, with nothing on top and no result to undo. It would be {o:rearr} if a calculation, or a fixed charge on the rate, came with a result.'
    },
    steps: [
      {
        does: 'Match the new amount to the same thing in the rate',
        working: 'The rate is 18 guests for 12 rooms. The new amount is 36 rooms, so it is matched to the 12 rooms in the rate'
      },
      {
        does: 'Find how many times as big the new amount is',
        working: '36 ÷ 12 = 3, so the new amount is 3 times as big as 12'
      },
      { does: 'Make the other number that many times as big', working: '18 × 3 = 54' },
      {
        does: 'Check the direction',
        working: '36 rooms is more than 12 rooms, so the answer should be more than 18 guests, and 54 is more'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '54 guests' },
        {
          id: 's1',
          text: '6 guests',
          slip: 'you divide 18 by 3 instead of multiplying, so the answer goes the wrong way: more rooms must mean more guests.'
        },
        {
          id: 's2',
          text: '24 guests',
          slip: 'you match the new amount to 18 guests instead of to 12 rooms, the number in the rate that counts the same thing.'
        }
      ]
    },
    why: 'A rate keeps its two numbers in step, so if the new amount is so many times as big, the other number is that many times as big. Checking the direction catches a rate scaled the wrong way.'
  }
]);
