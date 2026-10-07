// Basic Math, Unit Five: the worked examples (part 1 of 3). One for each kind of problem.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u5', [

  {
    id: 'solved-multprin-1',
    kind: 'solved',
    outcome: 'multprin',
    h: 'Worked: how many different sandwiches?',
    link: 'The steps for this kind of problem, worked out on a sandwich shop.',
    problem: 'm5-s-mp-1',
    steps: [
      {
        does: 'Name each choice',
        working: 'bread; filling; sauce',
        why: 'Each is a separate decision with a list of its own. A sandwich is one result of all three.'
      },
      {
        does: 'Count the full list for each choice',
        working: 'bread: 3; filling: 5; sauce: 2',
        why: 'Picking rye still leaves all 5 fillings and both sauces, so each list stays full.'
      },
      {
        does: 'Multiply the counts',
        working: '3 × 5 × 2 = 30 (3 × 5 = 15, then 15 × 2 = 30). That is 30 sandwiches'
      }
    ],
    result: 'The shop can make 30 different sandwiches, each with one bread, one filling and one sauce.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Every bread goes with every filling, and each of those pairs goes with either sauce, so the counts multiply.'
          },
          {
            id: 'y',
            text: 'There are 3 + 5 + 2 = 10 things on the shelf.',
            note: 'True, but that counts single items, such as a bread, and never a whole sandwich. It does not say why to multiply.'
          },
          {
            id: 'z',
            text: 'The shop has 3 breads, 5 fillings and 2 sauces.',
            note: 'True, but those are only the counts. It does not say what to do with them.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Take rye. It goes with any of the 5 fillings, so 5 sandwiches start with rye. White and the third bread do the same, so the breads and fillings make 3 × 5 = 15 pairs.',
        'Each pair can have either sauce, so every pair appears twice: 15 × 2 = 30. Adding would count the 10 things on the shelf, and a sandwich such as rye, ham and mustard would never be in your count.'
      ]
    }
  },

  {
    id: 'solved-perm-1',
    kind: 'solved',
    outcome: 'perm',
    h: 'Worked: who can fill three jobs in a club?',
    link: 'The steps for this kind of problem, worked out on a hiking club.',
    problem: 'm5-s-pe-1',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 12 members. Picks: 3 (chair, secretary, treasurer)',
        why: 'The jobs are different, so the order matters: chair Ana with secretary Ben is not chair Ben with secretary Ana.'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'chair: 12; secretary: 11; treasurer: 10'
      },
      {
        does: 'Multiply them',
        working: '12 × 11 × 10 = 1,320. That is 1,320 ways to fill the jobs',
        why: 'For each of the 12 chairs there are 11 secretaries, and for each of those 132 pairs there are 10 treasurers: 12 × 11 = 132, and 132 × 10 = 1,320. Every order counts on its own.'
      }
    ],
    result: 'The club can fill the three jobs in 1,320 different ways.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'No member may hold two jobs, so each job is picked from a group one smaller than the last.'
          },
          {
            id: 'y',
            text: 'The club has 12 members, so the first job has 12 people to pick from.',
            note: 'True, but that only explains the first count. It does not say why the next counts are 11 and 10.'
          },
          {
            id: 'z',
            text: 'There are three jobs, so there are three counts to multiply.',
            note: 'True, but that only says how many counts there are. It does not say why they get smaller.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Any of the 12 members can be chair. Say Ana is chair. She already has a job, so the secretary comes from the other 11. Say Ben is secretary. Ana and Ben are both taken, which leaves 10 for treasurer.',
        'The counts fall because each pick uses up a member. For separate choices, each list stayed full. Here every pick comes out of the same group, so each list is one shorter.'
      ]
    }
  },

  {
    id: 'solved-comb-1',
    kind: 'solved',
    outcome: 'comb',
    h: 'Worked: how many different quiz teams?',
    link: 'The steps for this kind of problem, worked out on a quiz night.',
    problem: 'm5-s-co-1',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 9 people. Picked: 4',
        why: 'All four have the same part, so the same four people in another order are the same team.'
      },
      {
        does: 'Count the picks as if the order mattered',
        working: '9 × 8 × 7 × 6 = 3,024',
        why: 'Each pick uses up a person, so the counts fall and multiply. This is too big, because it counts a team once for every order its four people can be listed in.'
      },
      {
        does: 'Count the orders one team can come in',
        working: '4 people can be put in order in 4 × 3 × 2 × 1 = 24 ways',
        why: 'Any of the 4 can go first, then any of the 3 left, then either of the 2 left, then the last one. So the same four people make 24 different lists.'
      },
      {
        does: 'Divide the first count by the second',
        working: '3,024 ÷ 24 = 126. That is 126 teams'
      }
    ],
    result: 'The quiz night can pick 126 different teams of 4 from the 9 people.',
    hold: {
      step: 3,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Every team is in the 3,024 once for each of its 24 orders, so dividing by 24 counts each team once.'
          },
          {
            id: 'y',
            text: 'Dividing 3,024 by 24 gives 126, and 126 × 24 = 3,024.',
            note: 'True, but that is only the sum. It does not say why 24 is the number to divide by.'
          },
          {
            id: 'z',
            text: 'A team of 4 can be put in order in 24 ways.',
            note: 'True, and that is where the 24 comes from. It does not say why you divide by it.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Picture the 3,024 as a table with one row for every way of picking 4 people in order. Take one team: Ana, Ben, Cal and Dev. They can be put in order in 24 ways, so that team fills 24 rows. Every other team fills exactly 24 rows too.',
        'So the table has 24 rows for each team and 3,024 rows in all. The number of teams is 3,024 ÷ 24 = 126. Check: 126 × 24 = 3,024.'
      ]
    }
  }
]);
