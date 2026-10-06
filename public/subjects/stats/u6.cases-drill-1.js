// Statistical Claims, Unit Six: drill cases for the stage that asks one question at a time. None of these appears in a card.
// Field guide: see u1.cases-drill-1.js. A case of "Nothing goes wrong" (taught by Unit Two) is in every stage, so a learner is never taught that
// every claim of cause has something else that could explain it.

FC.cases('stats', 'u6', [

  /* ---------- One question alone, on a new case ---------- */
  { id: 'k-p-yoga', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a studio’s six-week stress course',
    text: "A yoga studio says: 'Our six-week stress course works. All 45 students who took it filled in our survey, and 36 say they feel less stressed than before.' The studio did not survey anyone who did not take the course.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our six-week stress course works', K1: 'The studio did not survey anyone who did not take the course' },
    reason: { S1: 'All 45 students answered and the numbers are given, and the studio says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the students who took the course, before and after: {cue:K1}. People often feel less stressed after six weeks for reasons that have nothing to do with a course, so nothing shows what would have happened anyway.' },
    not: { outcome: 'regression', why: 'The studio did not pick the students because they were at their worst. Anyone who took the course is counted.' } },

  { id: 'k-p-stores', use: 'drill', tier: 'clean', setting: 'work', topic: 'new managers for the stores with the lowest ratings', also: ['anyway'],
    text: "A store chain picks its five stores with the lowest customer ratings in March and replaces the managers. In June those five stores’ ratings average 3.9 out of 5, up from 3.1. 'New managers fix stores,' the head office says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'New managers fix stores', K1: 'picks its five stores with the lowest customer ratings in March' },
    reason: { S1: 'The ratings are given, and the head office says {cue:S1}. That is a claim of cause.',
              K1: 'The five stores were picked because they had the lowest ratings: the chain {cue:K1}. A store’s rating mixes how well it is run with how a few months went, so the lowest five are partly the unlucky five, and their ratings drift back toward usual with no new manager.' },
    not: { outcome: 'nocontrol', why: 'No store kept its manager for comparison, and the case shows that too. But the five were picked at their worst, and when a case shows both, the answer is {a:K1.extreme}.' } },

  { id: 'k-p-gardens', use: 'drill', tier: 'clean', setting: 'community', topic: 'community gardens and reported thefts',
    text: "A city council member says: 'Neighborhoods with a community garden had 18 reported thefts per 1,000 homes last year, against 26 in neighborhoods without one. Gardens cut crime.' Residents chose to start the gardens, and nearly all of them are in neighborhoods where the median income is above $80,000.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'Gardens cut crime', K1: 'nearly all of them are in neighborhoods where the median income is above $80,000' },
    reason: { S1: 'The numbers are given for both kinds of neighborhood, and the council member says {cue:S1}. That is a claim of cause.',
              K1: 'Residents chose to start the gardens, and {cue:K1}. Better-off neighborhoods can have fewer thefts with or without a garden, so something else differs between the two kinds of neighborhood and could bring about the result alone.' },
    not: { outcome: 'reverse', why: 'Nothing in the case shows that low crime came first and led to the gardens. What it shows is something else that differs between the neighborhoods, which is {o:confound}.' } },

  { id: 'k-p-cafes', use: 'drill', tier: 'clean', setting: 'money', topic: 'cafés and foot traffic on city blocks',
    text: "A town survey finds that blocks with more people walking past have more cafés: blocks with over 2,000 walkers a day have 5 cafés on average, and blocks with fewer than 500 have 1. A newspaper says: 'Cafés bring walkers to a block.' The town’s business licenses show that most of the cafés opened after the walking traffic was already there.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Cafés bring walkers to a block', K1: 'most of the cafés opened after the walking traffic was already there' },
    reason: { S1: 'The numbers are given, and the newspaper says {cue:S1}. That is a claim of cause.',
              K1: 'The newspaper says the cafés caused the walking. But {cue:K1}, so the walkers came first and led the cafés to open where they were.' },
    not: { outcome: 'confound', why: 'No third thing is needed to explain the figures. The walkers came first and led to the cafés, which is {o:reverse}.' } },

  { id: 'k-p-clinic', use: 'drill', tier: 'clean', setting: 'health', topic: 'a follow-up call after surgery, decided by a draw',
    text: "A clinic wanted to know whether a nurse’s follow-up call lowers return visits after surgery. Of 300 patients leaving in March, a spreadsheet’s lottery picked 150 to get the call, and the other 150 got none. Over the next 30 days the clinic counted return visits for all 300 in the same way: 21 of the 150 who got the call returned (14 in 100), and 36 of the 150 who did not (24 in 100). 'The follow-up call cuts return visits,' the clinic says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'a spreadsheet’s lottery picked 150 to get the call', H1: 'The follow-up call cuts return visits' },
    reason: { S1: 'All 300 patients are counted in the same way and the numbers are given. A second group went without, and {cue:S1}, so nothing else is likelier to be in one group than the other. Nothing is wrong in any part.',
              H1: 'The clinic says {cue:H1}, and the answer to what the figures show is {a:H1.causes}, from groups formed by a draw.' },
    not: { outcome: 'confound', why: 'The patients did not choose whether to get the call. A draw did, so nothing else is likelier to be in one group than the other, and {o:confound} has nothing to point to.' } }
]);
