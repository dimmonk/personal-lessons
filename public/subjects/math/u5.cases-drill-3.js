// Basic Math, Unit Five: the drill's problems (part 3 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dw-pe-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'the first four places in a race',
    kind: 'problem',
    outcome: 'perm',
    text: 'Ten runners start a race, and the first four across the line qualify, with their places recorded as first, second, third and fourth. In how many different ways can the four places be filled?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different ways can the four places be filled?'],
      C1: [
        'the first four across the line qualify, with their places recorded as first, second, third and fourth'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many different ways four places can be filled, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show four places filled one after another from one group of 10 runners, so that each place uses one runner up, and the places are different from each other, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 10 runners. Picks: 4 (first, second, third, fourth)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first: 10; second: 9; third: 8; fourth: 7'
      },
      {
        does: 'Multiply them',
        working: '10 × 9 × 8 × 7 = 5,040. That is 5,040 ways to fill the places'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '5,040 ways to fill the places' },
        {
          id: 's1',
          text: '40 ways to fill the places',
          slip: 'you multiply the size of the group by the number of picks, 10 × 4, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '10,000 ways to fill the places',
          slip: 'you let the same one be picked every time, so each pick still has all 10 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-dw-pe-2',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'children lined up for a photo',
    kind: 'problem',
    outcome: 'perm',
    text: 'A photographer lines up 3 of 8 children in a row for a photo, from left to right. How many different rows can she make?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['How many different rows can she make?'],
      C1: ['lines up 3 of 8 children in a row for a photo, from left to right']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different rows can be made, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 children taken from one group of 8 and placed from left to right, so that the order is part of the result, and ask how many different rows there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 8 children. Picks: 3 (left, middle, right)'
      },
      { does: 'Write how many can be picked each time', working: 'left: 8; middle: 7; right: 6' },
      { does: 'Multiply them', working: '8 × 7 × 6 = 336. That is 336 rows' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '336 rows' },
        {
          id: 's1',
          text: '24 rows',
          slip: 'you multiply the size of the group by the number of picks, 8 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '512 rows',
          slip: 'you let the same one be picked every time, so each pick still has all 8 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

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
      M1: 'The words {cue:M1} ask in how many different ways the prizes can go to tickets, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show three different prizes drawn one after another from one drum of 20 tickets, with no ticket winning twice, and ask how many different ways there are, so the key’s answer is {a:C1.order}.'
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
      M1: 'The words {cue:M1} ask how many different morning lists are possible, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 of 7 applicants taken one after another, with the order of the four fixed, so that the order is part of the result, so the key’s answer is {a:C1.order}.'
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
  },

  {
    id: 'm5-dr-pe-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'cooking',
    topic: 'a tasting menu of four dishes',
    kind: 'problem',
    outcome: 'perm',
    text: 'A restaurant serves a tasting menu of 4 dishes picked from the 9 on its list. The dishes come one after another, and the chef says the order matters, because each dish sets up the next. How many different tasting menus can the chef make?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['How many different tasting menus can the chef make?'],
      C1: ['4 dishes picked from the 9 on its list', 'the order matters']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different tasting menus can be made, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 dishes picked from one list of 9, one after another, and say that the order matters, so that two menus with the same dishes in a different order are different menus, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'The words “picked from” can sound like choosing a group, which is {o:comb}. But the chef says the order matters, so the same four dishes in a different order are a different menu, and each is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 9 dishes. Picks: 4 (first course, second course, third course, fourth course)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first course: 9; second course: 8; third course: 7; fourth course: 6'
      },
      { does: 'Multiply them', working: '9 × 8 × 7 × 6 = 3,024. That is 3,024 menus' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '3,024 menus' },
        {
          id: 's1',
          text: '126 menus',
          slip: 'you treat the order as if it did not matter and divide by the 24 orders of 4 dishes, which counts each set of dishes once.'
        },
        {
          id: 's2',
          text: '6,561 menus',
          slip: 'you let the same dish be picked for every course, so each course still has all 9 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  }
]);
