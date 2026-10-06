// Basic Math, Unit Five: the drill's problems (part 5 of 9), asked as a whole route.
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
      M1: 'The words {cue:M1} ask how many different hands there are, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the answer to the first question {a:M1.chance}.',
      C1: 'The words {cue:C1} show 4 cards taken from a pack of 12, where a hand is the same in any order, so that the same cards held in a different order are one hand, so the answer is {a:C1.group}.'
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
      M1: 'The words {cue:M1} ask how many different panels can be picked, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} show 3 managers taken from 11 who have an equal say, so that no order or role separates one panel from another with the same three, so the answer is {a:C1.group}.'
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
  }
]);
