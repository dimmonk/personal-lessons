// Basic Math, Unit Five: the drill's problems (part 2 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-mp-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a bike lock with ten-digit rings',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A bike lock has 3 rings, and each ring is marked 0 to 9. The lock is called a combination lock, and a thief wants to try every combination. How many different combinations does it have?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different combinations does it have?'],
      C1: ['3 rings, and each ring is marked 0 to 9']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many settings the lock has, so you are counting results.',
      C1: 'The words {cue:C1} give three rings, each with the same full list of ten digits, whatever the lock is called.'
    },
    not: {
      outcome: 'comb',
      why: 'The lock’s name says “combination”, but 3, 5, 1 is a different setting from 1, 5, 3, and each ring has a full list of its own.'
    },
    steps: [
      {
        does: 'Name each choice',
        working: 'first ring; second ring; third ring'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first ring: 10; second ring: 10; third ring: 10'
      },
      { does: 'Multiply the counts', working: '10 × 10 × 10 = 1,000. That is 1,000 settings' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,000 settings' },
        {
          id: 's1',
          text: '30 settings',
          slip: 'you multiply 10 × 3, the size of the list by the number of rings, instead of using the full list of 10 for every ring.'
        },
        {
          id: 's2',
          text: '100 settings',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on one list goes with every item on the next, so each new list multiplies the number of results. Adding would count single items and never a whole result made of one pick from each list.'
  }
]);
