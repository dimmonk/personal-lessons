// Basic Math, Unit Five: the worked examples (part 1 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u5', [
  {
    id: 'solved-multprin-1',
    kind: 'solved',
    outcome: 'multprin',
    h: 'Worked: how many different sandwiches?',
    link: 'Here is the procedure for the first kind with real numbers: a sandwich shop, and every step written out.',
    problem: 'm5-s-mp-1',
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'bread; filling; sauce',
        why: 'Each choice is a separate decision that the customer makes, and each has a list of its own. Naming them first shows what has to be counted: three choices, a bread, a filling and a sauce. A sandwich is one result of all three at once.'
      },
      {
        does: 'Count the full list for each choice',
        working: 'bread: 3; filling: 5; sauce: 2',
        why: 'The count for a choice is how many different things it can be, whatever was picked for the other choices. The shop has 3 breads, 5 fillings and 2 sauces, and a customer who picks rye still has all 5 fillings and both sauces to choose from. That is what makes each list full.'
      },
      {
        does: 'Multiply the counts',
        working: '3 × 5 × 2 = 30 (3 × 5 = 15, then 15 × 2 = 30). That is 30 sandwiches'
      }
    ],
    result: 'The shop can make 30 different sandwiches, each made of one bread, one filling and one sauce.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Every one of the 3 breads can go with every one of the 5 fillings, and every one of those pairs can go with each of the 2 sauces, so the counts multiply.'
          },
          {
            id: 'y',
            text: '3 + 5 + 2 = 10 is the number of things on the shelf.',
            note: 'That is true, but it counts single items, a bread or a filling or a sauce, and never a whole sandwich. It does not say why the counts are multiplied.'
          },
          {
            id: 'z',
            text: 'The shop has 3 breads.',
            note: 'That is true, and it is one of the counts, but it does not say what to do with the counts.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Take one bread, say rye. With rye you can have any of the 5 fillings, which gives 5 different sandwiches that start with rye. The next bread, white, also goes with all 5 fillings, which gives 5 more, and so does the third bread. So the breads and fillings together give 3 × 5 = 15 different pairs.',
        'Each of those 15 pairs can then go with either sauce, which doubles the count: every pair appears once with the first sauce and once with the second. 15 × 2 = 30. Had you added instead, 3 + 5 + 2 = 10, you would have counted the single items on the shelf, and a sandwich such as rye, ham and mustard would not be in your count at all.'
      ]
    }
  },

  {
    id: 'solved-multprin-2',
    kind: 'solved',
    outcome: 'multprin',
    h: 'Worked again: how many different card codes?',
    link: 'The same procedure in a different story, with a code whose choices all have the same list.',
    problem: 'm5-s-mp-2',
    steps: [
      {
        does: 'Name each choice that has to be made',
        working: 'first digit; second digit; third digit; fourth digit',
        why: 'Every place in the code is a separate choice: which digit goes in it. A code with 4 places has 4 choices, even though they all look alike.'
      },
      {
        does: 'Count the full list for each choice',
        working: 'first digit: 10; second digit: 10; third digit: 10; fourth digit: 10'
      },
      {
        does: 'Multiply the counts',
        working: '10 × 10 × 10 × 10 = 10,000. That is 10,000 codes',
        why: 'Each place multiplies the count by 10. One place gives 10 codes, two places give 100 (from 00 to 99), three give 1,000 (from 000 to 999) and four give 10,000. A check: counting the codes off from 0000 to 9999 gives the same 10,000.'
      }
    ],
    result: 'There are 10,000 different codes, from 0000 to 9999.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A digit may be used more than once, so after a digit has been put in one place, all ten digits are still available for the next place.'
          },
          {
            id: 'y',
            text: 'There are four places in the code.',
            note: 'That is true, and it is the number of choices, but it does not say how long each list is.'
          },
          {
            id: 'z',
            text: 'The digits are 0 to 9.',
            note: 'That is true, and it is what is on each list, but it does not say why the second list is as long as the first.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'If the first digit is 7, the second digit can be 7 again, or any of the other nine. So the list for the second place is the full list of 10, the same as for the first place, and so it is for all four places.',
        'That is why the problem says that a digit may be used more than once. If a digit could not be used twice, each place would have one digit fewer to choose from, and the lists would not be full. A list that stays full whatever was picked before it is what this kind needs.'
      ]
    }
  },

  {
    id: 'solved-perm-1',
    kind: 'solved',
    outcome: 'perm',
    h: 'Worked: who can fill three jobs in a club?',
    link: 'Here is the procedure for the second kind with real numbers: a hiking club, and every step written out.',
    problem: 'm5-s-pe-1',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 12 members. Picks: 3 (chair, secretary, treasurer)',
        why: 'The group is everyone who can be picked, 12 members, and the picks are the three jobs. The jobs differ from each other, so the order of the picks matters: chair Ana with secretary Ben is not the same as chair Ben with secretary Ana.'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'chair: 12; secretary: 11; treasurer: 10'
      },
      {
        does: 'Multiply them',
        working: '12 × 11 × 10 = 1,320. That is 1,320 ways to fill the jobs',
        why: 'Each pick is a choice from a list of its own, one shorter than the one before, so the counts multiply, as they did in the first kind: for each of the 12 chairs there are 11 secretaries, and for each of those 132 pairs there are 10 treasurers. 12 × 11 = 132, and 132 × 10 = 1,320. Every order is counted separately, because chair Ana with secretary Ben is a different way to fill the jobs from chair Ben with secretary Ana.'
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
            text: 'Whoever is picked for one job is taken out of the group, because no member may hold two jobs, so each job is picked from a group one smaller than for the job before.'
          },
          {
            id: 'y',
            text: '12 members are in the club.',
            note: 'That is true, and it is the count for the first job, but it does not say why the counts then fall to 11 and 10.'
          },
          {
            id: 'z',
            text: 'There are three jobs to fill.',
            note: 'That is true, and it is how many counts there are, but it does not say why they are different from one another.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Start with the chair. Any of the 12 members can be chair, so there are 12 choices. Say Ana is chair. Now the secretary: Ana already has a job and may not have another, so the secretary comes from the other 11 members. Say Ben is secretary. For the treasurer, Ana and Ben are both taken, which leaves 10.',
        'The counts do not fall because the problem is awkward. They fall because each pick uses up a member. That is the difference from the first kind, where each choice had a full list of its own. Here every pick comes out of the same group, so the list for the next pick is one shorter.'
      ]
    }
  },

  {
    id: 'solved-perm-2',
    kind: 'solved',
    outcome: 'perm',
    h: 'Worked again: six books in a row',
    link: 'The same procedure in a different story, in which every member of the group is placed, so the last pick has nothing left to choose.',
    problem: 'm5-s-pe-2',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 6 books. Picks: 6 (first place, second place, third place, fourth place, fifth place, sixth place)',
        why: 'Here the picks are the six places on the shelf, and every book is placed, so there are as many picks as books. A different order of the same books is a different row, so the order counts.'
      },
      {
        does: 'Write how many can be picked each time',
        working: 'first place: 6; second place: 5; third place: 4; fourth place: 3; fifth place: 2; sixth place: 1',
        why: 'Each place uses up a book, so the counts fall by one each time, down to 1. The last book has no choice at all: when five places are filled, only one book is left, and it goes in the sixth place.'
      },
      { does: 'Multiply them', working: '6 × 5 × 4 × 3 × 2 × 1 = 720. That is 720 orders' }
    ],
    result: 'The six books can stand in a row in 720 different orders.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Each place is a choice from a list one shorter than the last, so the counts multiply, and the answer counts every order of the books as its own result.'
          },
          {
            id: 'y',
            text: '6 × 5 × 4 × 3 × 2 × 1 = 720.',
            note: 'That is true, and it is the working of the step, but it does not say why the counts are multiplied.'
          },
          {
            id: 'z',
            text: 'The last place has only 1 book left to choose.',
            note: 'That is true, and it was shown in the step before, but it does not say why this step multiplies.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Fill the places one at a time. The first place has 6 books to choose from. For each of those 6, the second place has 5 left, which gives 6 × 5 = 30 ways to fill the first two places. For each of those 30, the third place has 4 left, which gives 30 × 4 = 120. Going on, 120 × 3 = 360, 360 × 2 = 720, and 720 × 1 = 720.',
        'Multiplying is what counting all the ways to fill places one after another always comes to. Adding the counts, 6 + 5 + 4 + 3 + 2 + 1 = 21, would count the books on the shelf and never a whole row.'
      ]
    }
  },

  {
    id: 'solved-comb-1',
    kind: 'solved',
    outcome: 'comb',
    h: 'Worked: how many different quiz teams?',
    link: 'Here is the procedure for the third kind with real numbers: a quiz night, and every step written out.',
    problem: 'm5-s-co-1',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 9 people. Picked: 4',
        why: 'The group is the 9 people who put their names forward, and 4 of them are picked. All four have the same part on the team, so the same four people in a different order are the same team.'
      },
      {
        does: 'Count the picks as if the order mattered',
        working: '9 × 8 × 7 × 6 = 3,024',
        why: 'This is the count of the second kind: each pick uses up a person, so the counts fall, 9, 8, 7, 6, and they multiply. It is not the answer yet, because it counts a team once for every order its four people can be listed in. Ana, Ben, Cal, Dev and Dev, Cal, Ben, Ana are two entries in this count, but they are one team.'
      },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '4 people can be put in order in 4 × 3 × 2 × 1 = 24 ways',
        why: 'A group of 4 can be listed in order in 4 × 3 × 2 × 1 ways: any of the 4 first, then any of the 3 left, then either of the 2 left, then the last. That makes 24 different lists of the same four people.'
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
            text: 'Every team is in the count of 3,024 once for each of the 24 orders its four people can be put in, so dividing by 24 leaves each team once.'
          },
          {
            id: 'y',
            text: '3,024 ÷ 24 = 126.',
            note: 'That is true, and it is the working of the step, but it does not say why dividing by 24 is right.'
          },
          {
            id: 'z',
            text: 'A team of 4 can be put in order in 24 ways.',
            note: 'That is true, and it is where the 24 comes from, but it does not say why the count is divided by it.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Think of the count of 3,024 as a long table with one row for every way of picking 4 people in order. Take any one team, Ana, Ben, Cal and Dev. Its 4 people can be put in order in 24 ways, so this team has 24 rows in the table, one for each order. Every other team has exactly 24 rows too.',
        'So the table has 24 rows for every team, and 3,024 rows in all. The number of teams is the number of rows divided by 24: 3,024 ÷ 24 = 126. A check: 126 × 24 = 3,024.'
      ]
    }
  }
]);
