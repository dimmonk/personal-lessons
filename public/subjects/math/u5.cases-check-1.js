// Basic Math, Unit Five: the problems of the worked examples and the problems the learner finishes in a check (part 1 of 2).
// A worked example's problem carries only the problem; its working is on the card. A check's problem carries the whole working,
// so that the app can show it up to the last step, or not at all, and name the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-s-mp-1',
    use: 'teach',
    tier: 'clean',
    setting: 'cooking',
    topic: 'sandwiches from breads, fillings and sauces',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A sandwich shop lets a customer pick one of 3 breads, one of 5 fillings and one of 2 sauces. How many different sandwiches can the shop make?'
  },

  {
    id: 'm5-s-mp-2',
    use: 'teach',
    tier: 'clean',
    setting: 'money',
    topic: 'a four-digit card code',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A bank card has a code of 4 digits. Each digit can be any of 0 to 9, and a digit may be used more than once. How many different codes are there?'
  },

  {
    id: 'm5-ck-mp-last',
    use: 'check',
    tier: 'clean',
    setting: 'travel',
    topic: 'a hotel booking',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A hotel lets a guest pick one of 4 room types, one of 3 meal plans and one of 2 views. How many different bookings can a guest make?',
    route: { M1: ['chance'], C1: ['lists'] },
    steps: [
      { does: 'Name each choice that has to be made', working: 'room type; meal plan; view' },
      {
        does: 'Count the full list for each choice',
        working: 'room type: 4; meal plan: 3; view: 2'
      },
      {
        does: 'Multiply the counts',
        working: '4 × 3 × 2 = 24 (4 × 3 = 12, then 12 × 2 = 24). That is 24 bookings'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '24 bookings' },
        {
          id: 's1',
          text: '9 bookings',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '12 bookings',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-ck-mp-whole',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a staff passcode of letters',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A firm gives each member of staff a passcode of 3 letters from A to Z, and a letter may be used more than once. How many different passcodes are there?',
    route: { M1: ['chance'], C1: ['lists'] },
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'first letter; second letter; third letter'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first letter: 26; second letter: 26; third letter: 26'
      },
      { does: 'Multiply the counts', working: '26 × 26 × 26 = 17,576. That is 17,576 passcodes' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '17,576 passcodes' },
        {
          id: 's1',
          text: '78 passcodes',
          slip: 'you multiply the size of the list by the number of choices, 26 × 3, instead of using the full list once for each choice.'
        },
        {
          id: 's2',
          text: '676 passcodes',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-s-pe-1',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'jobs in a hiking club',
    kind: 'problem',
    outcome: 'perm',
    text: 'A hiking club with 12 members elects a chair, a secretary and a treasurer. No member may hold more than one of the jobs. In how many different ways can the three jobs be filled?'
  },

  {
    id: 'm5-s-pe-2',
    use: 'teach',
    tier: 'clean',
    setting: 'home',
    topic: 'six books in a row',
    kind: 'problem',
    outcome: 'perm',
    text: 'Six different books are to stand in a row on a shelf. In how many different orders can they be placed?'
  },

  {
    id: 'm5-ck-pe-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'interview times for candidates',
    kind: 'problem',
    outcome: 'perm',
    text: 'A manager has 7 job candidates and 3 interview times in the morning, at 9, 10 and 11. Each time goes to one candidate, and no candidate is seen twice. In how many different ways can the three times be filled?',
    route: { M1: ['chance'], C1: ['order'] },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 7 candidates. Picks: 3 (9 o’clock, 10 o’clock, 11 o’clock)'
      },
      {
        does: 'Write how many can be picked each time',
        working: '9 o’clock: 7; 10 o’clock: 6; 11 o’clock: 5'
      },
      { does: 'Multiply them', working: '7 × 6 × 5 = 210. That is 210 ways to fill the times' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '210 ways to fill the times' },
        {
          id: 's1',
          text: '21 ways to fill the times',
          slip: 'you multiply the size of the group by the number of picks, 7 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '343 ways to fill the times',
          slip: 'you let the same one be picked every time, so each pick still has all 7 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-ck-pe-whole',
    use: 'check',
    tier: 'clean',
    setting: 'health',
    topic: 'a relay of swimmers',
    kind: 'problem',
    outcome: 'perm',
    text: 'A swimming coach has 8 swimmers and must choose who swims each of the 4 legs of a relay, first leg, second leg, third leg and fourth leg, with no swimmer swimming two legs. In how many different ways can the four legs be filled?',
    route: { M1: ['chance'], C1: ['order'] },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 8 swimmers. Picks: 4 (first leg, second leg, third leg, fourth leg)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first leg: 8; second leg: 7; third leg: 6; fourth leg: 5'
      },
      {
        does: 'Multiply them',
        working: '8 × 7 × 6 × 5 = 1,680. That is 1,680 ways to fill the legs'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,680 ways to fill the legs' },
        {
          id: 's1',
          text: '32 ways to fill the legs',
          slip: 'you multiply the size of the group by the number of picks, 8 × 4, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '4,096 ways to fill the legs',
          slip: 'you let the same one be picked every time, so each pick still has all 8 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-s-co-1',
    use: 'teach',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a quiz team picked from volunteers',
    kind: 'problem',
    outcome: 'comb',
    text: 'A quiz night needs a team of 4 players, and 9 people have put their names forward. Every player on the team has the same part, so the order of the names does not matter. How many different teams can be picked?'
  },

  {
    id: 'm5-s-co-2',
    use: 'teach',
    tier: 'clean',
    setting: 'shopping',
    topic: 'free flavors at a tasting stand',
    kind: 'problem',
    outcome: 'comb',
    text: 'A jam stand sells 7 flavors and lets a customer taste any 3 of them, in no particular order. How many different sets of 3 flavors can a customer taste?'
  },

  {
    id: 'm5-ck-co-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'a committee picked from staff',
    kind: 'problem',
    outcome: 'comb',
    text: 'A firm picks 3 of its 10 staff to form a committee. All three members of the committee have the same standing, so the order does not matter. How many different committees can be picked?',
    route: { M1: ['chance'], C1: ['group'] },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 10 staff. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '10 × 9 × 8 = 720' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 staff can be put in order in 3 × 2 × 1 = 6 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '720 ÷ 6 = 120. That is 120 committees'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '120 committees' },
        {
          id: 's1',
          text: '720 committees',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '240 committees',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 staff can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-ck-co-whole',
    use: 'check',
    tier: 'clean',
    setting: 'building',
    topic: 'volunteers to paint a hall',
    kind: 'problem',
    outcome: 'comb',
    text: 'A community hall needs 4 volunteers to paint it, and 8 people have offered. Any 4 will do the same job, in any order. How many different groups of 4 can be picked?',
    route: { M1: ['chance'], C1: ['group'] },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 8 people. Picked: 4' },
      { does: 'Count the picks as if the order mattered', working: '8 × 7 × 6 × 5 = 1,680' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '4 people can be put in order in 4 × 3 × 2 × 1 = 24 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '1,680 ÷ 24 = 70. That is 70 groups'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '70 groups' },
        {
          id: 's1',
          text: '1,680 groups',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '420 groups',
          slip: 'you divide by the number of picks, 4, instead of by the number of orders one group can be put in, 24.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 4 people can be put in, and that is 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of different groups, and dividing by 24 leaves each group counted once.'
  },

  {
    id: 'm5-s-cm-1',
    use: 'teach',
    tier: 'clean',
    setting: 'travel',
    topic: 'a bus that is often late',
    kind: 'problem',
    outcome: 'complement',
    text: 'A commuter’s bus is late on 20% of days, and one day’s lateness does not change the chance on another day. How likely is it that the bus is late at least once in a working week of 5 days?'
  },

  {
    id: 'm5-s-cm-2',
    use: 'teach',
    tier: 'clean',
    setting: 'work',
    topic: 'frost on separate fields',
    kind: 'problem',
    outcome: 'complement',
    text: 'A farmer has three separate fields. On one frosty night the chance of frost damage is 20% for the first field, 10% for the second and 25% for the third, and damage to one field does not change the chance for another. How likely is it that at least one field is damaged?'
  },

  {
    id: 'm5-ck-cm-last',
    use: 'check',
    tier: 'clean',
    setting: 'work',
    topic: 'delivery vans of a pharmacy',
    kind: 'problem',
    outcome: 'complement',
    text: 'A pharmacy has two delivery vans. Each van has a 5% chance of breaking down on a given day, and one van breaking down does not change the chance for the other. How likely is it that at least one van breaks down today?',
    route: { M1: ['chance'], C1: ['atleast'] },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'first van: 1 − 0.05 = 0.95; second van: 1 − 0.05 = 0.95'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.95 × 0.95 = 0.9025'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.9025 = 0.0975, which is 9.8%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '9.8%' },
        {
          id: 's1',
          text: '10%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '90.3%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
