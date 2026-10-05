// Basic Math, Unit Five: the drill's problems (part 2 of 9): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-dr-mp-2',
    use: 'drill',
    tier: 'varied',
    setting: 'work',
    topic: 'staff account names',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A company names each staff account with 2 letters from A to Z followed by 3 digits from 0 to 9, and letters and digits may repeat. How many different account names can it make?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different account names can it make?'],
      C1: ['2 letters from A to Z followed by 3 digits from 0 to 9, and letters and digits may repeat']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different account names can be made, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} give five separate choices, two letters and three digits, each from a full list that can be used again, and ask how many different names there are, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'Picking from one group, so that each pick takes something off the list for the next, would be {o:perm}. Here every choice has a full list of its own, and nothing picked on one list changes another.'
    },
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'first letter; second letter; first digit; second digit; third digit'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first letter: 26; second letter: 26; first digit: 10; second digit: 10; third digit: 10'
      },
      {
        does: 'Multiply the counts',
        working: '26 × 26 × 10 × 10 × 10 = 676,000 (26 × 26 = 676, then 676 × 10 = 6,760, then 6,760 × 10 = 67,600, then 67,600 × 10 = 676,000). That is 676,000 names'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '676,000 names' },
        {
          id: 's1',
          text: '82 names',
          slip: 'you add the sizes of the lists, which counts each single item once and never a whole result made of one from each list.'
        },
        {
          id: 's2',
          text: '67,600 names',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dr-mp-3',
    use: 'drill',
    tier: 'misleading',
    setting: 'home',
    topic: 'a bike lock with ten-digit rings',
    kind: 'problem',
    outcome: 'multprin',
    text: 'A bike lock has 3 rings, and each ring is marked 0 to 9. The lock is called a combination lock, and a thief wants to try every combination. How many different combinations does it have?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different combinations does it have?'],
      C1: ['3 rings, and each ring is marked 0 to 9']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different codes the lock has, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, one for each ring, each from the same full list of ten digits, and ask how many different settings there are, whatever the lock is called, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'comb',
      why: 'The lock has the word “combination” in its name, but nothing is picked from a group and the order of the digits matters: 3, 5, 1 is a different setting from 1, 5, 3. Each ring is a separate choice from a full list. {o:comb} is the name for the kind in which the same picks in any order are one result.'
    },
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'first ring; second ring; third ring'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first ring: 10; second ring: 10; third ring: 10'
      },
      { does: 'Multiply the counts', working: '10 × 10 × 10 = 1,000. That is 1,000 settings' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '1,000 settings' },
        {
          id: 's1',
          text: '30 settings',
          slip: 'you multiply the size of the list by the number of choices, 10 × 3, instead of using the full list once for each choice.'
        },
        {
          id: 's2',
          text: '100 settings',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dr-mp-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'leisure',
    topic: 'a prize wheel spun in turn',
    kind: 'problem',
    outcome: 'multprin',
    text: 'On a game show a contestant spins a prize wheel three times in a row. Each spin lands on one of 8 prizes, and a prize can come up more than once. How many different sets of three spins can there be, counting the order they came in?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: {
      M1: ['How many different sets of three spins can there be, counting the order they came in?'],
      C1: ['Each spin lands on one of 8 prizes, and a prize can come up more than once']
    },
    reason: {
      M1: 'The words {cue:M1} ask how many different sets of three spins there are, a count of ways something can turn out. The problem does not change as time passes, has no hidden number for a calculation to fit, does not share whole numbers out in groups and has no shape. It is about the number of ways that something can come out, or its chance, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show three separate spins, each landing on one of the same 8 prizes with repeats allowed, and ask how many different sets there are, so the key’s answer is {a:C1.lists}.'
    },
    not: {
      outcome: 'perm',
      why: 'The spins come in order, and the order counts, as in {o:perm}. But a prize that has come up stays on the wheel, so the second spin has all 8 prizes again, and the third has all 8 once more. Nothing is used up, so each spin is a choice from a full list of its own.'
    },
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'first spin; second spin; third spin'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first spin: 8; second spin: 8; third spin: 8'
      },
      { does: 'Multiply the counts', working: '8 × 8 × 8 = 512. That is 512 sets' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '512 sets' },
        {
          id: 's1',
          text: '24 sets',
          slip: 'you multiply the size of the list by the number of choices, 8 × 3, instead of using the full list once for each choice.'
        },
        {
          id: 's2',
          text: '64 sets',
          slip: 'you leave the last choice out of the product, so every result is missing one part.'
        }
      ]
    },
    why: 'Every item on the first list can go with every item on the second, and every pair made that way can go with every item on the next list, and so on through all the lists. So the results fill a block, with as many rows as the first count, each as long as the second, and so on, and the size of the block is the counts multiplied together. Adding the counts would count each single item once and never a whole result made of one from each list.'
  },

  {
    id: 'm5-dl-pe-1',
    use: 'drill',
    tier: 'clean',
    setting: 'building',
    topic: 'site jobs for nine workers',
    kind: 'problem',
    outcome: 'perm',
    text: 'A site manager has 9 workers. She gives one the job of leading, another the job of checking safety and a third the job of keeping the records, each job to a different worker. In how many different ways can the three jobs be given out?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different ways can the three jobs be given out?'],
      C1: ['each job to a different worker']
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many different ways the jobs can be given out, a count of ways something can turn out. Nothing here is followed through time, no number is hidden for a calculation to fit, no whole number is split into groups, and no shape is measured. The problem asks for the number of different results, or for a chance, which is the key’s first answer {a:M1.chance}.',
      C1: 'The words {cue:C1} show three jobs given out one after another from one group of 9 workers, each to a different worker, so that each pick leaves one fewer, and the question asks how many different ways there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 9 workers. Picks: 3 (leading, safety, records)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'leading: 9; safety: 8; records: 7'
      },
      { does: 'Multiply them', working: '9 × 8 × 7 = 504. That is 504 ways to give out the jobs' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '504 ways to give out the jobs' },
        {
          id: 's1',
          text: '27 ways to give out the jobs',
          slip: 'you multiply the size of the group by the number of picks, 9 × 3, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '729 ways to give out the jobs',
          slip: 'you let the same one be picked every time, so each pick still has all 9 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  },

  {
    id: 'm5-dl-pe-2',
    use: 'drill',
    tier: 'clean',
    setting: 'travel',
    topic: 'museums visited one after another',
    kind: 'problem',
    outcome: 'perm',
    text: 'A tour guide has 5 museums to visit and time for all of them, one after another. In how many different orders can the museums be visited?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: {
      M1: ['In how many different orders can the museums be visited?'],
      C1: ['5 museums to visit and time for all of them, one after another']
    },
    reason: {
      M1: 'The words {cue:M1} ask in how many different orders the museums can be visited, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} show one group of 5 museums, visited one after another so that each visit uses one up, and ask how many different orders there are, so the key’s answer is {a:C1.order}.'
    },
    not: {
      outcome: 'comb',
      why: 'If the same things in a different order were the same result, it would be {o:comb}. Here a different order is a different result, so every order is counted.'
    },
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 5 museums. Picks: 5 (first visit, second visit, third visit, fourth visit, fifth visit)'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first visit: 5; second visit: 4; third visit: 3; fourth visit: 2; fifth visit: 1'
      },
      { does: 'Multiply them', working: '5 × 4 × 3 × 2 × 1 = 120. That is 120 orders' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '120 orders' },
        {
          id: 's1',
          text: '25 orders',
          slip: 'you multiply the size of the group by the number of picks, 5 × 5, so no pick ever uses anyone up.'
        },
        {
          id: 's2',
          text: '3,125 orders',
          slip: 'you let the same one be picked every time, so each pick still has all 5 to choose from.'
        }
      ]
    },
    why: 'The first pick can be any one of the group. Whoever it is, that one is taken out, so the next pick is made from a group one smaller, and the pick after that from one smaller again. Each pick is a choice from a list of its own, so the counts multiply, and a different order is counted as a different result, which is what the problem asks for.'
  }
]);
