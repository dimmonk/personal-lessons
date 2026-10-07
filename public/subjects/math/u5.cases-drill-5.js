// Basic Math, Unit Five: the drill's problems (part 5 of 9), asked as a whole route.
// Every problem has a route, marked words and a reason for the key's first question and for the unit's own question,
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
      M1: 'The words {cue:M1} ask how many different hands there are, so you are counting results.',
      C1: 'The words {cue:C1} say the same 4 cards from the 12, in any order, are one hand.'
    },
    not: {
      outcome: 'perm',
      why: 'A different order is a different result. Here the same things in any order are one result, so you divide.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 12 cards. Picked: 4' },
      { does: 'Count the picks as if the order mattered', working: '12 × 11 × 10 × 9 = 11,880' },
      {
        does: 'Count the orders one group can come in',
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
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can come in.'
        },
        {
          id: 's2',
          text: '2,970 hands',
          slip: 'you divide by the number of picks, 4, instead of the number of orders one group can come in, 24.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 4 cards can come in: 4 × 3 × 2 × 1 = 24 orders. So the count in order is 24 times the number of groups, and dividing by 24 counts each group once.'
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
      M1: 'The words {cue:M1} ask how many different panels there are, so you are counting results.',
      C1: 'The words {cue:C1} say all three managers have the same part, so the same three in any order are one panel.'
    },
    not: {
      outcome: 'perm',
      why: 'A different order is a different result. Here the same things in any order are one result, so you divide.'
    },
    steps: [
      { does: 'Count the group and the picks', working: 'Group: 11 managers. Picked: 3' },
      { does: 'Count the picks as if the order mattered', working: '11 × 10 × 9 = 990' },
      {
        does: 'Count the orders one group can come in',
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
          slip: 'you stop after counting the picks in order, so each group is counted once for every order it can come in.'
        },
        {
          id: 's2',
          text: '330 panels',
          slip: 'you divide by the number of picks, 3, instead of the number of orders one group can come in, 6.'
        }
      ]
    },
    why: 'Counting the picks in order counts every group once for every order its 3 managers can come in: 3 × 2 × 1 = 6 orders. So the count in order is 6 times the number of groups, and dividing by 6 counts each group once.'
  }
]);
