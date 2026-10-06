// Statistical Claims, Unit Two: drill cases for the route stage, the misleading ones (second part).

FC.cases('stats', 'u2', [

  { id: 'r-cause3', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'after-school tutoring across a state', echo: 'h-gauge',
    text: "A state has 400 schools. A computer drew 200 of them by lottery to start an after-school tutoring program in September, and the other 200 carried on as usual. Every student in all 400 schools took the same test in September and again in May. Scores rose in every school over the year: by 5 points on average in the schools without tutoring and by 9 in the schools with it. The state says: 'Tutoring raised scores by 4 points more than ordinary teaching did: a rise of 9 against 5.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 200 of them by lottery to start an after-school tutoring program', 'took the same test in September and again in May'], H1: 'Tutoring raised scores by 4 points more than ordinary teaching did: a rise of 9 against 5' },
    reason: { S1: 'Each part holds. A lottery decided which schools got tutoring, and every student took the same test twice: {cue:S1}.',
              H1: 'The claim is {cue:H1}. Both groups rose, which can sound like a figure followed through time. But the claim is about the gap between the groups, 9 − 5 = 4 points, and says that tutoring made it, which the lottery allows.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group rose more. It says tutoring made the extra rise.' } }
]);
