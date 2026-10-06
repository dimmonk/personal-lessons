// Basic Math, Unit Five: the drill's problems (part 3 of 9), asked as a whole route.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-dr-pe-1',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'prizes from a raffle drum',
    kind: 'problem',
    outcome: 'perm',
    text: 'A raffle has 20 tickets in a drum and a first, a second and a third prize. Each ticket can win at most one prize. In how many different ways can the three prizes go to tickets?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different ways can the three prizes go to tickets?'],
      C1: ['a first, a second and a third prize. Each ticket can win at most one prize']
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many different ways the prizes can go to tickets, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show three different prizes drawn one after another from one drum of 20 tickets, with no ticket winning twice, and ask how many different ways there are, so the answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 20 tickets. Picks: 3 (first prize, second prize, third prize)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first prize: 20; second prize: 19; third prize: 18'
      },
      {
        does: 'Multiply them',
        working: '20 × 19 × 18 = 6,840. That is 6,840 ways to give out the prizes'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '6,840 ways to give out the prizes' },
        {
          id: 's1',
          text: '60 ways to give out the prizes',
          slip: 'you multiply the size of the group by the number of picks, 20 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '8,000 ways to give out the prizes',
          slip: 'you let the same one be picked every time, so each pick still has all 20 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-dr-pe-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'applicants seen in the morning',
    kind: 'problem',
    outcome: 'perm',
    text: 'Seven applicants have asked for an interview, but only 4 can be seen in the morning, one after another, and the panel fixes the order of the four. How many different morning lists are possible?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['How many different morning lists are possible?'],
      C1: [
        'only 4 can be seen in the morning, one after another, and the panel fixes the order of the four'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different morning lists are possible, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 of 7 applicants taken one after another, with the order of the four fixed, so that the order is part of the result, so the answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 7 applicants. Picks: 4 (first interview, second interview, third interview, fourth interview)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first interview: 7; second interview: 6; third interview: 5; fourth interview: 4'
      },
      { does: 'Multiply them', working: '7 × 6 × 5 × 4 = 840. That is 840 lists' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '840 lists' },
        {
          id: 's1',
          text: '28 lists',
          slip: 'you multiply the size of the group by the number of picks, 7 × 4, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '2,401 lists',
          slip: 'you let the same one be picked every time, so each pick still has all 7 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  }
]);
