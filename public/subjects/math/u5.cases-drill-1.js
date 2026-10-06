// Basic Math, Unit Five: the drill's problems (part 1 of 9), asked as a whole route.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-mp-1',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'roads from one town to another',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A driver can go from town A to town B by 4 different roads, and from town B to town C by 3 different roads. How many different ways are there to drive from A to C, going through B?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different ways are there to drive from A to C, going through B?'],
      C1: [
        'from town A to town B by 4 different roads, and from town B to town C by 3 different roads'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different ways there are to go, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give two separate choices, a road for the first leg and a road for the second, each from a list of its own, and ask how many different ways there are to go, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'first leg; second leg' },
      { does: 'Count the full list for each choice', working: 'first leg: 4; second leg: 3' },
      { does: 'Multiply the counts', working: '4 × 3 = 12. That is 12 ways to go' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '12 ways' },
        {
          id: 's1',
          text: '7 ways',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '4 ways',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  }
]);
