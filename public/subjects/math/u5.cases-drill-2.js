// Basic Math, Unit Five: the drill's problems (part 2 of 9), asked as a whole route.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own question,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [

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
      M1: 'The words {cue:M1} ask how many different codes the lock has, a count of ways something can turn out. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the answer to the first question is {a:M1.chance}.',
      C1: 'The words {cue:C1} give three separate choices, one for each ring, each from the same full list of ten digits, and ask how many different settings there are, whatever the lock is called, so the answer is {a:C1.lists}.'
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
  }
]);
