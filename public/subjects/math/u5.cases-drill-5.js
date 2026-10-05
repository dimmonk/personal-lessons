// Basic Math, Unit Five: the drill's problems (part 5 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dr-co-1',
    use: 'drill',
    tier: 'clean',
    setting: 'leisure',
    topic: 'a hand of four cards',
    kind: 'problem',
    outcome: 'comb',
    text: 'A card game is played with a special pack of 12 cards, and each player is dealt a hand of 4. A hand is the same hand whatever order the cards are held in. How many different hands are there?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different hands are there?'],
      C1: ['A hand is the same hand whatever order the cards are held in']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different hands there are, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 cards taken from a pack of 12, where a hand is the same in any order, so that the same cards held in a different order are one hand, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 12 cards. Picked: 4' },
      { does: 'Count the picks as if the order mattered', working: '12 × 11 × 10 × 9 = 11,880' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '4 cards can be put in order in 4 × 3 × 2 × 1 = 24 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '11,880 ÷ 24 = 495. That is 495 hands'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '495 hands' },
        {
          id: 's1',
          text: '11,880 hands',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '2,970 hands',
          slip: 'you divide by the number of picks, 4, instead of by the number of orders one group can be put in, 24.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 4 cards can be put in, and that is 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of different groups, and dividing by 24 leaves each group counted once.'
  },

  {
    id: 'm5-dr-co-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'a panel of managers',
    kind: 'problem',
    outcome: 'comb',
    text: 'A company will pick 3 of its 11 managers to sit on an appeals panel. All three have an equal say and sit around one table. How many different panels can the company pick?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different panels can the company pick?'],
      C1: ['All three have an equal say and sit around one table']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different panels can be picked, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 managers taken from 11 who have an equal say, so that no order or role separates one panel from another with the same three, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'If a different order counted as a different result, it would be {o:perm}. Here the same things in any order are one result, so the count in order has to be divided down.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 11 managers. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '11 × 10 × 9 = 990' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 managers can be put in order in 3 × 2 × 1 = 6 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '990 ÷ 6 = 165. That is 165 panels'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '165 panels' },
        {
          id: 's1',
          text: '990 panels',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '330 panels',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 managers can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-dr-co-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'winners drawn one at a time',
    kind: 'problem',
    outcome: 'comb',
    text: 'A school fair draws 3 winning tickets, one after another, from a drum of 12 tickets. Every winning ticket gets the same prize, a book token. How many different sets of 3 winning tickets can there be?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different sets of 3 winning tickets can there be?'],
      C1: ['Every winning ticket gets the same prize, a book token']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different sets of winning tickets there can be, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 tickets drawn from 12 that all win the same prize, so that the same 3 tickets drawn in a different order are one set, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'perm',
      why: 'The tickets are drawn one after another, which sounds like picking in order, {o:perm}. But all three win the same prize, so which ticket came out first makes no difference. The same three tickets in any order are one result.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 12 tickets. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '12 × 11 × 10 = 1,320' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 tickets can be put in order in 3 × 2 × 1 = 6 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '1,320 ÷ 6 = 220. That is 220 sets of tickets'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '220 sets of tickets' },
        {
          id: 's1',
          text: '1,320 sets of tickets',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '440 sets of tickets',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 tickets can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-dr-co-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'cooking',
    topic: 'toppings on a pizza',
    kind: 'problem',
    outcome: 'comb',
    text: 'A pizza place has 8 toppings on its menu, and a customer picks 3 different toppings for one pizza. The pizza is the same whichever topping went on first. How many different pizzas can the customer order?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: {
      M1: ['How many different pizzas can the customer order?'],
      C1: [
        'picks 3 different toppings for one pizza. The pizza is the same whichever topping went on first'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different pizzas can be ordered, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 different toppings taken from one menu of 8, where the pizza is the same whichever went on first, so that the same 3 toppings in any order are one pizza, so the key’s answer is {a:C1.group}.'
    },
    not: {
      outcome: 'multprin',
      why: 'A pizza menu can look like separate choices, a size, a crust and a topping, which is {o:multprin}. But here there is one list of 8 toppings, three different ones are taken from it, and each topping taken leaves one fewer. The order they go on makes no difference.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 8 toppings. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '8 × 7 × 6 = 336' },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 toppings can be put in order in 3 × 2 × 1 = 6 ways'
      },
      { does: 'Divide the first count by the second', working: '336 ÷ 6 = 56. That is 56 pizzas' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '56 pizzas' },
        {
          id: 's1',
          text: '336 pizzas',
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can be put in.'
        },
        {
          id: 's2',
          text: '112 pizzas',
          slip: 'you divide by the number of picks, 3, instead of by the number of orders one group can be put in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 toppings can be put in, and that is 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of different groups, and dividing by 6 leaves each group counted once.'
  },

  {
    id: 'm5-dl-cm-1',
    use: 'drill',
    tier: 'clean',
    setting: 'health',
    topic: 'backup generators in a storm',
    kind: 'problem',
    outcome: 'complement',
    text: 'A hospital has 2 backup generators. During a storm each one has a 4% chance of failing, and one failing does not change the chance for the other. How likely is it that at least one generator fails?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: {
      M1: ['How likely is it that at least one generator fails?'],
      C1: [
        'each one has a 4% chance of failing, and one failing does not change the chance for the other. How likely is it that at least one generator fails?'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that something happens, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a chance for each of 2 separate generators and ask how likely it is that one or more of them fails, so the key’s answer is {a:C1.atleast}.'
    },
    not: {
      outcome: 'multprin',
      why: 'The problem asks for a chance, not a count of results. {o:multprin} would be the name if it asked how many different results there are, and it also multiplies separate things, which is why the two look alike.'
    },
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each generator: 1 − 0.04 = 0.96'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.96 × 0.96 = 0.9216'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.9216 = 0.0784, which is 7.8%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '7.8%' },
        {
          id: 's1',
          text: '8%',
          slip: 'you add the chances of the separate things, which counts a run where two or more happen more than once, so the sum overstates the chance and, with enough things, passes 100%.'
        },
        {
          id: 's2',
          text: '92.2%',
          slip: 'you stop at the chance that none of them happens and never take it away from 1.'
        }
      ]
    },
    why: 'Either at least one of the things happens, or none of them does. These two cannot both be true and nothing else can happen, so their chances add up to 1. The chance of none is easy to find: the things are separate, so it is one product. What is left of 1 is the chance that one or more happens.'
  }
]);
