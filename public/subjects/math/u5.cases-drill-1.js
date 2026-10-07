// Basic Math, Unit Five: the drill's problems (part 1 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
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
      M1: 'The words {cue:M1} ask how many ways there are to drive, so you are counting results.',
      C1: 'The words {cue:C1} give two separate choices, a road for each leg, each from its own list.'
    },
    not: {
      outcome: 'perm',
      why: 'The picks come out of one group, so each pick takes something off the list. Here every choice has its own full list.'
    },
    steps: [
      { does: 'Name each choice', working: 'first leg; second leg' },
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
          slip: 'you add the sizes of the lists, which counts single items and never a whole result.'
        },
        {
          id: 's2',
          text: '4 ways',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on one list goes with every item on the next, so each new list multiplies the number of results. Adding would count single items and never a whole result made of one pick from each list.'
  }
]);
