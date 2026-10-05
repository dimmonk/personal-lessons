// Basic Math, Unit Five: the worked examples (part 2 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u5', [
  {
    id: 'solved-comb-2',
    kind: 'solved',
    outcome: 'comb',
    h: 'Worked again: three flavours to taste',
    link: 'The same procedure in a different story, with a smaller group, so that you can see all 6 orders of 3 things written out.',
    problem: 'm5-s-co-2',
    steps: [
      {
        does: 'Count the group and the picks',
        working: 'Group: 7 flavours. Picked: 3',
        why: 'Seven flavours, and the customer tastes any 3, in no particular order. Raspberry, plum and apricot is the same tasting as apricot, raspberry and plum.'
      },
      {
        does: 'Count the picks as if the order mattered',
        working: '7 × 6 × 5 = 210',
        why: 'The same first count as before: 7 for the first flavour, 6 for the second and 5 for the third, multiplied. It lists every tasting once for each order its three flavours could be named in.'
      },
      {
        does: 'Count the orders one chosen group can be put in',
        working: '3 flavours can be put in order in 3 × 2 × 1 = 6 ways'
      },
      {
        does: 'Divide the first count by the second',
        working: '210 ÷ 6 = 35. That is 35 sets of flavours',
        why: 'Each tasting is in the count 6 times, so the number of tastings is 210 ÷ 6 = 35. A check: 35 × 6 = 210.'
      }
    ],
    result: 'A customer can taste 35 different sets of 3 flavours.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Any one set of 3 flavours can be named in 3 × 2 × 1 = 6 different orders, so each tasting appears 6 times in the count of 210.'
          },
          {
            id: 'y',
            text: 'Raspberry, plum and apricot is one of the tastings.',
            note: 'That is true, and it is a good example of one tasting, but it does not say how many times a tasting appears in the count.'
          },
          {
            id: 'z',
            text: 'There are 7 flavours on sale.',
            note: 'That is true, but it is the size of the group, and it does not say how many orders three flavours can be put in.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Write out the 6 orders of raspberry (R), plum (P) and apricot (A): RPA, RAP, PRA, PAR, ARP, APR. That is 6 lists, and they are all the same tasting. The first flavour can be any of the 3, the second either of the 2 left, and the last is the 1 left: 3 × 2 × 1 = 6.',
        'The same is true of every other set of 3 flavours, so the count of 210 holds each tasting exactly 6 times. That is the number to divide by next.'
      ]
    }
  },

  {
    id: 'solved-complement-1',
    kind: 'solved',
    outcome: 'complement',
    h: 'Worked: a bus that is late at least once in a week',
    link: 'Here is the procedure for the fourth kind with real numbers: a commuter and her bus, and every step written out.',
    problem: 'm5-s-cm-1',
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'Each day: 1 − 0.2 = 0.8',
        why: 'The bus is late on 20% of days, which is a chance of 0.2, or 20 days in every 100. On any day it is either late or not late, so the chance that it is not late is what is left of 1: 1 − 0.2 = 0.8, or 80 days in 100.'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.8 × 0.8 × 0.8 × 0.8 × 0.8 = 0.32768',
        why: 'For the bus to be on time on all 5 days, it must be on time on the first day, and the second, and the third, and the fourth, and the fifth. The days are separate, so the chances multiply. Of 100 weeks, 80 have an on-time first day. Of those 80, 80% have an on-time second day too, which is 64, and so on: 51.2, then 40.96, then 32.768. That is the product: 0.8 × 0.8 × 0.8 × 0.8 × 0.8 = 0.32768, about 33 weeks in 100.'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.32768 = 0.67232, which is 67.2%'
      }
    ],
    result: 'The bus is late at least once in a working week about 67 times in 100, a chance of 67.2%.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'Either the bus is late at least once, or it is never late. These two cannot both happen and nothing else can, so their chances add up to 1, and the chance of at least one late day is 1 minus the chance of none.'
          },
          {
            id: 'y',
            text: 'The chance of a week with no late day is 0.32768.',
            note: 'That is true, and it was found in the step before, but it is the chance of the opposite of what is asked. It does not say why taking it from 1 gives the answer.'
          },
          {
            id: 'z',
            text: 'The bus is late on 20% of days.',
            note: 'That is true, but it is the chance for one day, and it does not say how the chance for the whole week is found.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Imagine 100 weeks. In about 33 of them the bus is on time every day. In every other week at least one day is late. So the weeks with at least one late day are the 100 − 33 that are left, about 67 in 100.',
        'This is why the procedure goes the long way round. The chance of at least one late day cannot easily be found by adding up the chances of exactly one late day, exactly two, three, four and five. The chance of none is a single product, and the answer is what is left of 1. A check you can always make: the answer, 0.67, is larger than the chance for a single day, 0.2, because more days can only make a late day more likely.'
      ]
    }
  },

  {
    id: 'solved-complement-2',
    kind: 'solved',
    outcome: 'complement',
    h: 'Worked again: frost on at least one field',
    link: 'The same procedure in a different story, in which each thing has a chance of its own.',
    problem: 'm5-s-cm-2',
    steps: [
      {
        does: 'Find the chance that each thing does not happen',
        working: 'first field: 1 − 0.2 = 0.8; second field: 1 − 0.1 = 0.9; third field: 1 − 0.25 = 0.75',
        why: 'The same first step, for each field separately, because each field has its own chance of damage. The chance that a field is not damaged is what is left of 1: 1 − 0.2 = 0.8, 1 − 0.1 = 0.9 and 1 − 0.25 = 0.75.'
      },
      {
        does: 'Multiply those chances: the chance that none of them happens',
        working: '0.8 × 0.9 × 0.75 = 0.54'
      },
      {
        does: 'Take that chance away from 1: the chance that at least one happens',
        working: '1 − 0.54 = 0.46, which is 46%',
        why: 'On the 540 nights in 1,000 when all three fields escape, no field is damaged. On every other night, 1,000 − 540 = 460 of them, at least one field is damaged. That is 0.46, or 46%.'
      }
    ],
    result: 'There is a 46% chance that at least one of the three fields is damaged.',
    hold: {
      step: 1,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The fields are separate, so damage to one does not change the chance for another, and the chance that all three escape is the chance for the first, times the chance for the second, times the chance for the third.'
          },
          {
            id: 'y',
            text: '0.8 + 0.9 + 0.75 = 2.45.',
            note: 'That is a sum of the three chances, and it is more than 1, which no chance can be. It does not say how to find the chance that all three fields escape.'
          },
          {
            id: 'z',
            text: 'The third field has the highest chance of damage.',
            note: 'That is true, but it does not say how the three chances are combined.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Imagine 1,000 frosty nights. The first field escapes on 0.8 of them, which is 800 nights. On those 800 nights the second field escapes on 0.9 of them: 720 nights. On those 720 nights the third escapes on 0.75 of them: 540 nights. So all three escape on 540 of the 1,000 nights, which is 0.54.',
        'This works only because the fields are separate. If damage to one field made damage to another more likely, the chance for the second field on those 800 nights would not be the same 0.9, and the product would be wrong. The problem says that the fields are separate, so the product is right.'
      ]
    }
  },

  {
    id: 'solved-baserate-1',
    kind: 'solved',
    outcome: 'baserate',
    h: 'Worked: how far to trust a positive test',
    link: 'Here is the procedure for the fifth kind with real numbers: a quick test for an infection, and every step written out.',
    problem: 'm5-s-br-1',
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 10,000 people. 1 in 100 have it: 100 have it and 9,900 do not',
        why: 'Chances are hard to combine in your head, but counts of imagined people are easy. A group of 10,000 is chosen because 1 in 100, 90% and 5% all come out as whole numbers of people. 1 in 100 of 10,000 is 100 people with the infection, and the other 10,000 − 100 = 9,900 do not have it.'
      },
      {
        does: 'Count the positive results among those who have it',
        working: '90% of 100 = 90',
        why: 'The test finds the infection in 90% of the people who have it, so 90% of those 100 people get a positive result: 90 of them. The other 10 people who have the infection get a negative result, because the test misses them.'
      },
      {
        does: 'Count the positive results among those who do not have it',
        working: '5% of 9,900 = 495'
      },
      {
        does: 'Add the two counts to get every positive result',
        working: '90 + 495 = 585',
        why: 'These are all the people whose test is positive: 90 who have the infection and 495 who do not. The person in the problem is one of these 585, and nothing else is known about them, so this is the whole group the person comes from.'
      },
      {
        does: 'Divide the right positive results by every positive result',
        working: '90 ÷ 585 = 0.1538, which is about 15.4%',
        why: 'Of the 585 positive results, only the 90 from people who have the infection are right, so the chance that this person has the infection is 90 out of 585, which is 0.1538. Notice that it is nowhere near 90%, the share of infected people that the test finds. That figure starts from people who have the infection. This question starts from people with a positive result.'
      }
    ],
    result: 'A positive test means that the person has the infection about 15 times in 100, a chance of about 15.4%, even though the test finds the infection in 90% of the people who have it.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'The test wrongly shows the infection in 5% of the people who do not have it, and there are far more of those people than people who have it, so even a small share of them is a large number of positive results.'
          },
          {
            id: 'y',
            text: '5% of 9,900 is 495.',
            note: 'That is true, and it is the working of the step, but it does not say why this step is needed.'
          },
          {
            id: 'z',
            text: 'The test finds the infection in 90% of the people who have it.',
            note: 'That is true, but it belongs to the step before. It does not say why the people who do not have the infection must be counted too.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'A positive result can come from two kinds of people: people who have the infection, and people who do not but whom the test wrongly flags. The second kind starts from 9,900 people, nearly everyone, so a rate as small as 5% of them gives 495 positive results.',
        'This is the step that people leave out. The test is wrong about only 5 in 100 healthy people, which sounds small, but there are 99 healthy people for every person who has the infection. Counting only the 90 who are rightly flagged, and forgetting the 495 who are wrongly flagged, makes the test look far more trustworthy than it is.'
      ]
    }
  }
]);
