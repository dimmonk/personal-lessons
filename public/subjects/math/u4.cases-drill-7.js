// Basic Math, Unit Four: the drill's problems (part 7): the last-step stage, the whole-problem stage, then the route stage.
// Every problem is a case with a route, marked words and a reason for the key's first question and for the unit's own two questions,
// and carries its whole working and the slip behind every wrong choice.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u4', [

  {
    id: 'm4-dr-lin-4',
    use: 'drill',
    tier: 'varied',
    setting: 'leisure',
    topic: 'water on a hike',
    kind: 'problem',
    outcome: 'lin',
    text: 'A hiker starts with 2,000 ml of water in her bottle and drinks 250 ml every hour. How much will be in the bottle after 5 hours?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['drinks 250 ml every hour'],
      G1: ['drinks 250 ml every hour'],
      G2: ['How much will be in the bottle after 5 hours?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going down by the same number every hour, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
    },
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: 2,000 ml. Each hour it goes down by 250 ml'
      },
      { does: 'Find how much it changes in all', working: '250 ml × 5 hours = 1,250 ml' },
      { does: 'Take that away from the start', working: '2,000 − 1,250 = 750 ml' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '750 ml' },
        {
          id: 's1',
          text: '1,750 ml',
          slip: 'you change the amount only once, instead of once for each hour.'
        },
        {
          id: 's2',
          text: '3,250 ml',
          slip: 'you add the fall to the start instead of taking it away.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dr-expg-4',
    use: 'drill',
    tier: 'varied',
    setting: 'money',
    topic: 'a loan with nothing repaid',
    kind: 'problem',
    outcome: 'expg',
    text: 'A borrower owes $2,000, and nothing is repaid, so the debt grows by 5% every year. What will the debt be after 3 years?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['the debt grows by 5% every year'],
      G1: ['the debt grows by 5% every year'],
      G2: ['What will the debt be after 3 years?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount has reached, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 5% each year: 100% + 5% = 105%, which is 1.05'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $2,000 × 1.05 = $2,100; Year 2: $2,100 × 1.05 = $2,205; Year 3: $2,205 × 1.05 = $2,315.25'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '$2,315.25 needs no rounding, so the answer after 3 years is $2,315.25'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$2,315.25' },
        {
          id: 's1',
          text: '$2,300.00',
          slip: 'you add the first rise again each time, so every rise is the same size instead of growing.'
        },
        {
          id: 's2',
          text: '$2,205.00',
          slip: 'you multiply one time too few, once for every time but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dr-lin-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'work',
    topic: 'a friend’s shop sales',
    kind: 'problem',
    outcome: 'lin',
    text: 'A friend says his shop’s sales are growing exponentially. They were $12,000 in January, and they have gone up by $3,000 every month since. What will the sales be after 6 more months?',
    route: { M1: ['growth'], G1: ['adds'], G2: ['willbe'] },
    cues: {
      M1: ['they have gone up by $3,000 every month since'],
      G1: ['they have gone up by $3,000 every month since'],
      G2: ['What will the sales be after 6 more months?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount going up by the same number every month, whatever it has reached so far, so the answer is {a:G1.adds}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}. For this kind either answer to this question leads to the same procedure, run forwards for the amount and backwards for the time.'
    },
    not: {
      outcome: 'expg',
      why: 'The amount is raised or lowered by the same figure every time, and not by a share of what it has reached. {o:expg} would be the name if each change were a percentage of the amount so far, or a doubling.'
    },
    wouldChange: 'If the sales had gone up by 25% every month, it would be {o:expg}.',
    steps: [
      {
        does: 'Find where it starts and how much it changes each time',
        working: 'Start: $12,000. Each month it goes up by $3,000'
      },
      { does: 'Find how much it changes in all', working: '$3,000 × 6 months = $18,000' },
      { does: 'Add that to the start', working: '$12,000 + $18,000 = $30,000' }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$30,000' },
        {
          id: 's1',
          text: '$15,000',
          slip: 'you change the amount only once, instead of once for each month.'
        },
        {
          id: 's2',
          text: '$90,000',
          slip: 'you add the change to the start first and then multiply by the number of months, so the start is counted again every month.'
        }
      ]
    },
    why: 'The same number is added every time, so the change in all is that number multiplied by how many times. Going forwards, the change in all is worked out from the time and put on the start. Going backwards, the start is taken from the target to find the change needed, and that is divided by the change each time to find how many times. The two directions are one fact, read two ways.'
  },

  {
    id: 'm4-dr-expg-5',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'rent rising year after year',
    kind: 'problem',
    outcome: 'expg',
    text: 'A landlord raises an apartment’s rent by 10% every year, three years in a row. It was $800 a month before the first rise. What will it be after the third rise?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['willbe'] },
    cues: {
      M1: ['raises an apartment’s rent by 10% every year, three years in a row'],
      G1: ['raises an apartment’s rent by 10% every year, three years in a row'],
      G2: ['What will it be after the third rise?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a time and ask for the amount at the end of it, so the answer is {a:G2.willbe}.'
    },
    not: {
      outcome: 'lin',
      why: 'The change is a share of what the amount has reached, so it is not the same size each time. {o:lin} would be the name if the same number were added each time.'
    },
    wouldChange: 'If the rent went up by $80 every year, it would be {o:lin}.',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Multiply the start by it once for each time the amount changes',
        working: 'Year 1: $800 × 1.1 = $880; Year 2: $880 × 1.1 = $968; Year 3: $968 × 1.1 = $1,064.80'
      },
      {
        does: 'Round at the end, and say what it shows',
        working: '$1,064.80 needs no rounding, so the answer after 3 years is $1,064.80'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '$1,064.80' },
        {
          id: 's1',
          text: '$1,040.00',
          slip: 'you add the three rises, 10% + 10% + 10% = 30%, and take 30% of the $800, instead of multiplying by 1.1 three times.'
        },
        {
          id: 's2',
          text: '$968.00',
          slip: 'you multiply one time too few, once for every rise but the last.'
        }
      ]
    },
    why: 'An amount that changes by a share of itself is multiplied by the same {t:multiplier} each time, and each multiplication is made on the result of the last, not on the start. That is why the changes are bigger when the amount grows and smaller when it shrinks. Multiplying once for each time the amount changes gives the amount at the end, and rounding only at the end keeps the answer true.'
  },

  {
    id: 'm4-dr-logsolve-4',
    use: 'drill',
    tier: 'misleading',
    setting: 'money',
    topic: 'a friend’s doubling claim',
    kind: 'problem',
    outcome: 'logsolve',
    text: 'A friend says that money earning 10% a year doubles in 10 years. Dana leaves $2,000 in an account that pays 10% a year, with all the interest left in. After how many years will she have $4,000?',
    route: { M1: ['growth'], G1: ['multiplies'], G2: ['howlong'] },
    cues: {
      M1: ['an account that pays 10% a year, with all the interest left in'],
      G1: ['an account that pays 10% a year, with all the interest left in'],
      G2: ['After how many years will she have $4,000?']
    },
    reason: {
      M1: 'The words {cue:M1} follow one amount as time passes, and the problem asks what it will be or how long it takes to reach a target. No whole number is being split, no number is hidden in a {t:formula}, and there is no shape or chance, so the answer to the first question is {a:M1.growth}.',
      G1: 'The words {cue:G1} show the amount being multiplied by the same number every year, as a percentage, a doubling or a halving is, so the answer is {a:G1.multiplies}.',
      G2: 'The words {cue:G2} give a target for the amount and ask how long until it gets there, so the answer is {a:G2.howlong}.'
    },
    not: {
      outcome: 'lin',
      why: 'The amount is multiplied each time, and the problem gives a target and asks how long. {o:lin} would be the name if the same number were added each time.'
    },
    wouldChange: 'If the account added $200 every year, it would be {o:lin}, and $4,000 would be reached in 10 years.',
    steps: [
      {
        does: 'Turn the change into the number the amount is multiplied by each time',
        working: 'Up 10% each year: 100% + 10% = 110%, which is 1.1'
      },
      {
        does: 'Divide the target by the start, to see how many times the start it must become',
        working: '$4,000 ÷ $2,000 = 2'
      },
      {
        does: 'Divide the log of that by the log of the number from the first step',
        working: 'log 2 = 0.3010 and log 1.1 = 0.0414, so 0.3010 ÷ 0.0414 = 7.27'
      },
      {
        does: 'Round, check against whole numbers of times, and say what it shows',
        working: 'Starting from $2,000, 7 multiplications by 1.1 give about $3,897, still under the target; 8 multiplications give about $4,287, over it. So the target is reached during the 8th year. Rounded, the answer is about 7.3 years'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: 'About 7.3 years' },
        {
          id: 's1',
          text: 'About 10.0 years',
          slip: 'you add the same share of the start each time, so every rise is the same size, which ignores that each rise is bigger than the last.'
        },
        {
          id: 's2',
          text: 'About 2 years',
          slip: 'you give how many times bigger the target is as the number of years.'
        }
      ]
    },
    why: 'The amount at the end is the start multiplied by the {t:multiplier} once for each time, so the question is how many multiplications by the {t:multiplier} turn the start into the target. The log of a number turns multiplying into adding: each multiplication adds the same amount, the log of the {t:multiplier}, to the log of the amount. So the number of multiplications is the log of how many times bigger the target is than the start, divided by the log of the {t:multiplier}. The check with whole numbers of times shows that the answer is where it should be.'
  }
]);
