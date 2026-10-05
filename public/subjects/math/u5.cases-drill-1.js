// Basic Math, Unit Five: the drill's problems (part 1 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dl-mp-1',
    use: 'drill',
    tier: 'clean',
    setting: 'home',
    topic: 'a pupil’s school outfit',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A pupil has 6 shirts, 4 pairs of trousers and 3 jumpers, and wears one of each every school day. How many different outfits can the pupil put on?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different outfits can the pupil put on?'],
      C1: ['wears one of each every school day']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different outfits there are, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a shirt, trousers and a jumper, each from a list of its own, and ask how many different outfits there are, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'shirt; trousers; jumper' },
      { does: 'Count the full list for each choice', working: 'shirt: 6; trousers: 4; jumper: 3' },
      {
        does: 'Multiply the counts',
        working: '6 × 4 × 3 = 72 (6 × 4 = 24, then 24 × 3 = 72). That is 72 outfits'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '72 outfits' },
        {
          id: 's1',
          text: '13 outfits',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '24 outfits',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dl-mp-2',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'a tiler’s colours and patterns',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A tiler sells floor tiles in 7 colours and 5 patterns, and a customer picks one colour and one pattern for a whole kitchen. How many different tile designs can the customer pick?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different tile designs can the customer pick?'],
      C1: ['picks one colour and one pattern']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different tile designs there are, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give two separate choices, a colour and a pattern, each from a list of its own, and ask how many different designs there are, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'colour; pattern' },
      { does: 'Count the full list for each choice', working: 'colour: 7; pattern: 5' },
      { does: 'Multiply the counts', working: '7 × 5 = 35. That is 35 designs' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '35 designs' },
        {
          id: 's1',
          text: '12 designs',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '7 designs',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dw-mp-1',
    use: 'drill',
    tier: 'clean',
    setting: 'cooking',
    topic: 'pizzas by size, crust and topping',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A pizza place offers 3 sizes, 2 crusts and 8 toppings, and every pizza has exactly one of each. How many different pizzas are on the menu?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different pizzas are on the menu?'],
      C1: ['every pizza has exactly one of each']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different pizzas there are, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a size, a crust and a topping, each from a list of its own, and ask how many different pizzas there are, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'size; crust; topping' },
      { does: 'Count the full list for each choice', working: 'size: 3; crust: 2; topping: 8' },
      {
        does: 'Multiply the counts',
        working: '3 × 2 × 8 = 48 (3 × 2 = 6, then 6 × 8 = 48). That is 48 pizzas'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '48 pizzas' },
        {
          id: 's1',
          text: '13 pizzas',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '6 pizzas',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dw-mp-2',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'building a board game character',
    kind: 'problem',
    outcome: 'multprin',
    text: 'In a board game a player builds a character by picking one of 5 races, one of 4 classes and one of 6 starting items. How many different characters can be built?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different characters can be built?'],
      C1: ['picking one of 5 races, one of 4 classes and one of 6 starting items']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different characters can be built, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, a race, a class and an item, each from a list of its own, and ask how many different characters there are, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'race; class; starting item' },
      {
        does: 'Count the full list for each choice',
        working: 'race: 5; class: 4; starting item: 6'
      },
      {
        does: 'Multiply the counts',
        working: '5 × 4 × 6 = 120 (5 × 4 = 20, then 20 × 6 = 120). That is 120 characters'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '120 characters' },
        {
          id: 's1',
          text: '15 characters',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '20 characters',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

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
      M1: 'The words {cue:M1} ask how many different ways there are to go, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give two separate choices, a road for the first leg and a road for the second, each from a list of its own, and ask how many different ways there are to go, so the answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      { does: 'Name each choice that has to be made', working: 'first leg; second leg' },
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
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '4 ways',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  }
]);
