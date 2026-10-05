// Basic Math, Unit Five: fresh problems for later days (part 1 of 4): three for each kind of problem, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-rt-mp-1',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'a bike built from parts',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A bike shop builds a bike from one of 5 frames, one of 3 saddles and one of 6 colours. How many different bikes can a customer order?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different bikes can a customer order?'],
      C1: ['one of 5 frames, one of 3 saddles and one of 6 colours']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different bikes can be ordered, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a frame, a saddle and a colour, each from a list of its own, and ask how many different bikes there are, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'frame; saddle; colour' },
      { does: 'Count the full list for each choice', working: 'frame: 5; saddle: 3; colour: 6' },
      {
        does: 'Multiply the counts',
        working: '5 × 3 × 6 = 90 (5 × 3 = 15, then 15 × 6 = 90). That is 90 bikes'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '90 bikes' },
        {
          id: 's1',
          text: '14 bikes',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '15 bikes',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-rt-mp-2',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a username from a colour, an animal and a number',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A game site makes a username from one of 4 colours, one of 6 animals and a number from 00 to 99. How many different usernames can it make?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different usernames can it make?'],
      C1: ['one of 4 colours, one of 6 animals and a number from 00 to 99']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different usernames can be made, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a colour, an animal and a number from a list of 100, and ask how many different usernames there are, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'colour; animal; number' },
      { does: 'Count the full list for each choice', working: 'colour: 4; animal: 6; number: 100' },
      {
        does: 'Multiply the counts',
        working: '4 × 6 × 100 = 2,400 (4 × 6 = 24, then 24 × 100 = 2,400). That is 2,400 usernames'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '2,400 usernames' },
        {
          id: 's1',
          text: '110 usernames',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '24 usernames',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-rt-mp-3',
    use: 'return',
    tier: 'varied',
    setting: 'health',
    topic: 'a hospital lunch order',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A hospital lunch order has a main from 7, a side from 5 and a drink from 4, one of each. How many different lunches can a patient order?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different lunches can a patient order?'],
      C1: ['a main from 7, a side from 5 and a drink from 4, one of each']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different lunches can be ordered, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a main, a side and a drink, each from a list of its own, and ask how many different lunches there are, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'main; side; drink' },
      { does: 'Count the full list for each choice', working: 'main: 7; side: 5; drink: 4' },
      {
        does: 'Multiply the counts',
        working: '7 × 5 × 4 = 140 (7 × 5 = 35, then 35 × 4 = 140). That is 140 lunches'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '140 lunches' },
        {
          id: 's1',
          text: '16 lunches',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '35 lunches',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-rt-pe-1',
    use: 'return',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a podium for five divers',
    kind: 'problem',
    outcome: 'perm',
    text: 'Five divers compete in a contest and the judges give out a gold, a silver and a bronze medal, each to a different diver. In how many different ways can the three medals go to the divers?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different ways can the three medals go to the divers?'],
      C1: ['a gold, a silver and a bronze medal, each to a different diver']
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many different ways the medals can go to the divers, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show three different medals given out one after another from a group of 5 divers, each to a different diver, and ask how many different ways there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 5 divers. Picks: 3 (gold, silver, bronze)'
      },
      { does: 'Write how many can be picked each time', working: 'gold: 5; silver: 4; bronze: 3' },
      { does: 'Multiply them', working: '5 × 4 × 3 = 60. That is 60 ways to give out the medals' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '60 ways to give out the medals' },
        {
          id: 's1',
          text: '15 ways to give out the medals',
          slip: 'you multiply the size of the group by the number of picks, 5 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '125 ways to give out the medals',
          slip: 'you let the same one be picked every time, so each pick still has all 5 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-rt-pe-2',
    use: 'return',
    tier: 'clean',
    setting: 'shopping',
    topic: 'cakes in a shop window',
    kind: 'problem',
    outcome: 'perm',
    text: 'A baker has 6 different cakes and puts 4 of them in a row in the shop window, from left to right. How many different rows can she make?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['How many different rows can she make?'],
      C1: ['puts 4 of them in a row in the shop window, from left to right']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different rows can be made, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 cakes taken from one group of 6 and placed from left to right, so that the order is part of the result, and ask how many different rows there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 6 cakes. Picks: 4 (first place, second place, third place, fourth place)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first place: 6; second place: 5; third place: 4; fourth place: 3'
      },
      { does: 'Multiply them', working: '6 × 5 × 4 × 3 = 360. That is 360 rows' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '360 rows' },
        {
          id: 's1',
          text: '24 rows',
          slip: 'you multiply the size of the group by the number of picks, 6 × 4, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '1,296 rows',
          slip: 'you let the same one be picked every time, so each pick still has all 6 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  }
]);
