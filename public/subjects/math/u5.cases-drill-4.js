// Basic Math, Unit Five: the drill's problems (part 4 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-pe-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a safe whose digits cannot repeat',
    kind: 'problem',
    outcome: 'perm',
    text: 'A small safe has 3 dials, and each dial is marked 0 to 9. The code must use 3 different digits, so no digit can be used twice, and 3, 5, 1 is a different code from 1, 5, 3. How many different codes are possible?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['How many different codes are possible?'],
      C1: ['no digit can be used twice', 'is a different code from']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many codes there are, so you are counting results.',
      C1: 'The words {cue:C1} take 3 digits from the 10 with none used twice, so each dial has one fewer to choose from, and a different order is a different code.'
    },
    not: {
      outcome: 'multprin',
      why: 'Three dials marked 0 to 9 look like three separate full lists. But no digit can be used twice, so the second dial has only 9 digits left and the third only 8.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 10 digits. Picks: 3 (first dial, second dial, third dial)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first dial: 10; second dial: 9; third dial: 8'
      },
      { does: 'Multiply them', working: '10 × 9 × 8 = 720. That is 720 codes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '720 codes' },
        {
          id: 's1',
          text: '30 codes',
          slip: 'you multiply 10 × 3, the size of the group by the number of picks, so no pick uses anyone up.'
        },
        {
          id: 's2',
          text: '1,000 codes',
          slip: 'you let the same one be picked again, so each pick still has all 10 to choose from.'
        }
      ]
    },
    why: 'The first pick can be anyone in the group. That one is taken out, so the next pick is from a group one smaller, and the next from one smaller again. The counts multiply, and a different order counts as a different result.'
  }
]);
