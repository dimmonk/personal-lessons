// Basic Math, Unit Five: fresh problems for later days (part 2 of 4): one for each kind of problem.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

  {
    id: 'm5-rt-pe-3',
    use: 'return',
    tier: 'varied',
    setting: 'travel',
    topic: 'a queue of four friends',
    kind: 'problem',
    outcome: 'perm',
    text: 'Four friends join a queue at a ticket window, one behind another. In how many different orders can they stand in the queue?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different orders can they stand in the queue?'],
      C1: ['Four friends join a queue at a ticket window, one behind another']
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many orders the friends can stand, so you are counting results.',
      C1: 'The words {cue:C1} put one group of 4 friends in places one behind another, and each place uses a friend up.'
    },
    not: {
      outcome: 'comb',
      why: 'The same things in a different order are one result. Here a different order is a different result.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 4 friends. Picks: 4 (first in the queue, second, third, fourth)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first in the queue: 4; second: 3; third: 2; fourth: 1'
      },
      { does: 'Multiply them', working: '4 × 3 × 2 × 1 = 24. That is 24 orders' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '24 orders' },
        {
          id: 's1',
          text: '16 orders',
          slip: 'you multiply 4 × 4, the size of the group by the number of picks, so no pick uses anyone up.'
        },
        {
          id: 's2',
          text: '256 orders',
          slip: 'you let the same one be picked again, so each pick still has all 4 to choose from.'
        }
      ]
    },
    why: 'The first pick can be anyone in the group. That one is taken out, so the next pick is from a group one smaller, and the next from one smaller again. The counts multiply, and a different order counts as a different result.'
  },

  {
    id: 'm5-rt-co-3',
    use: 'return',
    tier: 'varied',
    setting: 'shopping',
    topic: 'sample jars in a gift',
    kind: 'problem',
    outcome: 'comb',
    text: 'A shop packs a gift of 3 different sample jars, picked from the 10 on its shelf. The gift is the same whichever jar goes in first. How many different gifts can the shop pack?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different gifts can the shop pack?'],
      C1: ['The gift is the same whichever jar goes in first']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different gifts there are, so you are counting results.',
      C1: 'The words {cue:C1} say the same 3 jars, in any order, are one gift.'
    },
    not: {
      outcome: 'perm',
      why: 'A different order is a different result. Here the same things in any order are one result, so you divide.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 10 jars. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '10 × 9 × 8 = 720' },
      {
        does: 'Count the orders one group can come in',
        working: '3 jars can be put in order in 3 × 2 × 1 = 6 ways'
      },
      { does: 'Divide the first count by the second', working: '720 ÷ 6 = 120. That is 120 gifts' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '120 gifts' },
        {
          id: 's1',
          text: '720 gifts',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can come in.'
        },
        {
          id: 's2',
          text: '240 gifts',
          slip: 'you divide by the number of picks, 3, instead of the number of orders one group can come in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 jars can come in: 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of groups, and dividing by 6 counts each group once.'
  }
]);
