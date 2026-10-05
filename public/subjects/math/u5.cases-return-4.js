// Basic Math, Unit Five: fresh problems for later days (part 4 of 4): three for each kind of problem, one for each of its scheduled returns.
// A kind that is due comes back as a problem the learner has not seen, as a whole route, beside a problem of the kind it is most often
// taken for.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cases('math', 'u5', [
  {
    id: 'm5-rt-br-3',
    use: 'return',
    tier: 'varied',
    setting: 'travel',
    topic: 'a body scanner at an airport',
    kind: 'problem',
    outcome: 'baserate',
    text: '1 passenger in 1,000 at an airport carries a banned item. A body scanner alarms for 99% of the passengers who carry one, and also for 2% of the passengers who do not. The scanner alarms for a passenger. How likely is it that the passenger carries a banned item?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: {
      M1: ['How likely is it that the passenger carries a banned item?'],
      C1: [
        'A body scanner alarms for 99% of the passengers who carry one, and also for 2% of the passengers who do not'
      ]
    },
    reason: {
      M1: 'The words {cue:M1} ask how likely it is that a result is right, a chance and not a count. Nothing in it follows an amount as time passes, hides a number that a calculation must fit, or splits whole numbers into groups, and there is no shape to measure. What it asks for is a count of the results, or the chance of something, so the key’s first answer is {a:M1.chance}.',
      C1: 'The words {cue:C1} give a scanner that has alarmed, how rare banned items are, and how often the scanner is right and wrong, and ask how likely it is that the alarm is right, so the key’s answer is {a:C1.test}.'
    },
    not: {
      outcome: 'complement',
      why: 'The problem is not about at least one of several separate things happening, which is {o:complement}. A test has given one result, and the question is how far to trust it.'
    },
    steps: [
      {
        does: 'Imagine a large group and split it into those who have the thing and those who do not',
        working: 'Imagine 100,000 passengers. 1 in 1,000 carry one: 100 carry one and 99,900 do not'
      },
      { does: 'Count the positive results among those who have it', working: '99% of 100 = 99' },
      {
        does: 'Count the positive results among those who do not have it',
        working: '2% of 99,900 = 1,998'
      },
      { does: 'Add the two counts to get every positive result', working: '99 + 1,998 = 2,097' },
      {
        does: 'Divide the right positive results by every positive result',
        working: '99 ÷ 2,097 = 0.0472, which is about 4.7%'
      }
    ],
    answer: {
      right: 'r',
      choices: [
        { id: 'r', text: '4.7%' },
        {
          id: 's1',
          text: '99%',
          slip: 'you take the share of people who have it that the test catches, 99%, as the chance that a positive result is right.'
        },
        {
          id: 's2',
          text: '0.1%',
          slip: 'you divide the right positive results by the whole group, 99 ÷ 100,000, instead of by the positive results.'
        }
      ]
    },
    why: 'A positive result comes from two kinds of people: those who have the thing and are rightly flagged, and those who do not have it and are wrongly flagged. The chance that a positive result is right is the share of all the positive results that are of the first kind. When the thing is rare, the second group starts from nearly everyone, so a small rate of wrong flags still gives many wrong positive results. Counting both kinds in an imagined group shows the share directly.'
  }
]);
