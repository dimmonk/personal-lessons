// Basic Math, Unit Five: fresh problems for later days (part 1 of 4): one for each kind of problem.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-rt-mp-3',
    use: 'return',
    tier: 'varied',
    setting: 'health',
    topic: 'a hospital lunch order',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A hospital lunch order has a main from 7, a side from 5 and a drink from 4, one of each. How many different lunches can a patient order?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different lunches can a patient order?'],
      C1: ['a main from 7, a side from 5 and a drink from 4, one of each']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different lunches there are, so you are counting results.',
      C1: 'The words {cue:C1} give three separate choices, each from its own list.'
    },
    not: {
      outcome: 'perm',
      why: 'The picks come out of one group, so each pick takes something off the list. Here every choice has its own full list.'
    },
    steps: [
      { does: 'Name each choice', working: 'main; side; drink' },
      { does: 'Count the full list for each choice', working: 'main: 7; side: 5; drink: 4' },
      {
        does: 'Multiply the counts',
        working: '7 × 5 × 4 = 140 (7 × 5 = 35, then 35 × 4 = 140). That is 140 lunches'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '140 lunches' },
        {
          id: 's1',
          text: '16 lunches',
          slip: 'you add the sizes of the lists, which counts single items and never a whole result.'
        },
        {
          id: 's2',
          text: '35 lunches',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on one list goes with every item on the next, so each new list multiplies the number of results. Adding would count single items and never a whole result made of one pick from each list.'
  }
]);
