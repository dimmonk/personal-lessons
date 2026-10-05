// Basic Math, Unit Five: fresh problems for later days (part 2 of 4): three for each kind of problem, one for each of its scheduled returns.
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
      M1: 'The words {cue:M1} ask in how many different orders the friends can stand, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show one group of 4 friends placed one behind another, so that each place uses a friend up, and ask how many different orders there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
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
          slip: 'you multiply the size of the group by the number of picks, 4 × 4, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '256 orders',
          slip: 'you let the same one be picked every time, so each pick still has all 4 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-rt-co-1',
    use: 'return',
    tier: 'clean',
    setting: 'health',
    topic: 'nurses picked for a ward round',
    kind: 'problem',
    outcome: 'comb',
    text: 'A ward has 6 nurses, and 3 of them are picked to go on a training day together. Nobody on the training day has a different role from the others. How many different groups of 3 can be picked?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different groups of 3 can be picked?'],
      C1: ['Nobody on the training day has a different role from the others']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different groups can be picked, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 nurses taken from 6 with no different roles, so that the same 3 nurses in any order are one group, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 6 nurses. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '6 × 5 × 4 = 120' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 nurses can be put in order in 3 × 2 × 1 = 6 ways'
      },
      { does: 'Divide the first count by the second', working: '120 ÷ 6 = 20. That is 20 groups' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '20 groups' },
        {
          id: 's1',
          text: '120 groups',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '40 groups',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 nurses can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-rt-co-2',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'pupils picked for a school trip',
    kind: 'problem',
    outcome: 'comb',
    text: 'A teacher takes 4 of her 10 pupils on a trip to a museum. It makes no difference in which order the four are picked. How many different groups of 4 can she take?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different groups of 4 can she take?'],
      C1: ['It makes no difference in which order the four are picked']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different groups can be taken, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 pupils taken from 10 with no difference made by the order, so that the same 4 pupils in any order are one group, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 10 pupils. Picked: 4' },
      { does: 'Count the picks as if the order mattered', working: '10 × 9 × 8 × 7 = 5,040' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '4 pupils can be put in order in 4 × 3 × 2 × 1 = 24 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '5,040 ÷ 24 = 210. That is 210 groups'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '210 groups' },
        {
          id: 's1',
          text: '5,040 groups',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '1,260 groups',
          slip: 'you divide by the number of picks, 4, instead of by the number of orders one group can be put in, 24.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 4 pupils can be put in, and that is 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of different groups, and dividing by 24 leaves each group counted once.'
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
      M1: 'The words {cue:M1} ask how many different gifts can be packed, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 different jars taken from 10, where the gift is the same whichever goes in first, so that the same 3 jars in any order are one gift, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 10 jars. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '10 × 9 × 8 = 720' },
      {
        does: 'Count the orders one chosen group can be put in',
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
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '240 gifts',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 jars can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-rt-cm-1',
    use: 'return',
    tier: 'clean',
    setting: 'travel',
    topic: 'a ferry that is sometimes cancelled',
    kind: 'problem',
    outcome: 'complement',
    text: 'A ferry is cancelled on 10% of days, and one day’s cancellation does not change the chance on another. How likely is it that the ferry is cancelled at least once in 4 days?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that the ferry is cancelled at least once in 4 days?'],
      C1: [
        'cancelled on 10% of days, and one day’s cancellation does not change the chance on another. How likely is it that the ferry is cancelled at least once in 4 days?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give the chance for each of 4 separate days and ask how likely it is that the ferry is cancelled at least once, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each day: 1 − 0.1 = 0.9'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.9 × 0.9 × 0.9 × 0.9 = 0.6561'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.6561 = 0.3439, which is 34.4%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '34.4%' },
        {
          id: 's1',
          text: '40%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '65.6%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
