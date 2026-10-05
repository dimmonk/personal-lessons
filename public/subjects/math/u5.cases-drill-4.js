// Basic Math, Unit Five: the drill's problems (part 4 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
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
      M1: 'The words {cue:M1} ask how many different codes are possible, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 digits taken from the 10, with no digit used twice, so each dial has one fewer to choose from, and a different order giving a different code, so the answer is {a:C1.order}.'
    },
    not: {
      outcome: 'multprin',
      why: 'Three dials marked 0 to 9 look like three separate choices, each from its own full list, which is {o:multprin}. But here no digit may be used twice, so the second dial has only 9 digits left and the third only 8.'
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
          slip: 'you multiply the size of the group by the number of picks, 10 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '1,000 codes',
          slip: 'you let the same one be picked every time, so each pick still has all 10 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-dl-co-1',
    use: 'drill',
    tier: 'clean',
    setting: 'health',
    topic: 'volunteers for a trial',
    kind: 'problem',
    outcome: 'comb',
    text: 'A clinic needs 3 volunteers for a trial of a new bandage, and 8 patients have agreed to take part. All three receive the same bandage, so the order does not matter. How many different groups of 3 can the clinic pick?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different groups of 3 can the clinic pick?'],
      C1: ['All three receive the same bandage, so the order does not matter']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different groups the clinic can pick, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show a group of 3 picked from 8, with all three treated alike, so that the same three in a different order are the same group, so the answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 8 patients. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '8 × 7 × 6 = 336' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 patients can be put in order in 3 × 2 × 1 = 6 ways'
      },
      { does: 'Divide the first count by the second', working: '336 ÷ 6 = 56. That is 56 groups' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '56 groups' },
        {
          id: 's1',
          text: '336 groups',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '112 groups',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 patients can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-dl-co-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'day trips on a holiday',
    kind: 'problem',
    outcome: 'comb',
    text: 'A holiday company offers 6 day trips, and a guest books any 4 of them to go on during the week, in whatever order the guest likes. How many different sets of 4 trips can a guest book?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different sets of 4 trips can a guest book?'],
      C1: ['books any 4 of them to go on during the week, in whatever order the guest likes']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different sets of trips can be booked, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 trips taken from 6 with the order left free, so that the same 4 trips in a different order are the same set, so the answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 6 trips. Picked: 4' },
      { does: 'Count the picks as if the order mattered', working: '6 × 5 × 4 × 3 = 360' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '4 trips can be put in order in 4 × 3 × 2 × 1 = 24 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '360 ÷ 24 = 15. That is 15 sets of trips'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '15 sets of trips' },
        {
          id: 's1',
          text: '360 sets of trips',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '90 sets of trips',
          slip: 'you divide by the number of picks, 4, instead of by the number of orders one group can be put in, 24.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 4 trips can be put in, and that is 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of different groups, and dividing by 24 leaves each group counted once.'
  },

  {
    id: 'm5-dw-co-1',
    use: 'drill',
    tier: 'clean',
    setting: 'money',
    topic: 'shares picked for a portfolio',
    kind: 'problem',
    outcome: 'comb',
    text: 'An investor wants to hold 3 different shares, picked from a list of 9 that look sound. It makes no difference which share is picked first. How many different sets of 3 shares are there?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different sets of 3 shares are there?'],
      C1: ['It makes no difference which share is picked first']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different sets of shares there are, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 shares taken from 9 with no difference made by the order, so that the same 3 shares in any order are one set, so the answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 9 shares. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '9 × 8 × 7 = 504' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 shares can be put in order in 3 × 2 × 1 = 6 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '504 ÷ 6 = 84. That is 84 sets of shares'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '84 sets of shares' },
        {
          id: 's1',
          text: '504 sets of shares',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '168 sets of shares',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 shares can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-dw-co-2',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'books taken on holiday',
    kind: 'problem',
    outcome: 'comb',
    text: 'Anna has 7 books she wants to read and has room in her bag for 5 of them. The order they go into the bag does not matter. How many different sets of 5 books can she pack?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different sets of 5 books can she pack?'],
      C1: ['room in her bag for 5 of them. The order they go into the bag does not matter']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different sets of books can be packed, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 5 books taken from 7 with no difference made by the order they go in, so that the same 5 books in any order are one set, so the answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 7 books. Picked: 5' },
      { does: 'Count the picks as if the order mattered', working: '7 × 6 × 5 × 4 × 3 = 2,520' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '5 books can be put in order in 5 × 4 × 3 × 2 × 1 = 120 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '2,520 ÷ 120 = 21. That is 21 sets of books'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '21 sets of books' },
        {
          id: 's1',
          text: '2,520 sets of books',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '504 sets of books',
          slip: 'you divide by the number of picks, 5, instead of by the number of orders one group can be put in, 120.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 5 books can be put in, and that is 5 × 4 × 3 × 2 × 1 = 120 orders. So the count in order is 120 times the number of different groups, and dividing by 120 leaves each group counted once.'
  }
]);
