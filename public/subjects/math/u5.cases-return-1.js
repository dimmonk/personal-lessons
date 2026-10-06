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
      M1: 'The words {cue:M1} ask how many different lunches can be ordered, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a main, a side and a drink, each from a list of its own, and ask how many different lunches there are, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'main; side; drink' },
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
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '35 lunches',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  }
]);
