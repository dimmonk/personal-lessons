// Statistical Claims, Unit Six: drill cases for the whole-route stage, clean cases. Field guide: see u1.cases-drill-1.js.
// A case of "Nothing goes wrong" is in each stage.

FC.cases('stats', 'u6', [

  /* ---------- The whole route alone, clean ---------- */
  { id: 'k-r-poetry', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a weekly poetry night at a bookstore',
    text: "A bookstore says: 'Our weekly poetry night boosts sales. Thursday sales are up from $380 a night in December to $520 a night in March.' The store has no figures for any Thursday before December and none for any other store.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our weekly poetry night boosts sales', K1: 'The store has no figures for any Thursday before December and none for any other store' },
    reason: { S1: 'The figures are given, and the store says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the store that held the poetry night, and only for December and March: {cue:K1}. Sales climb and fall with the season and the weather, so nothing shows what Thursday sales would have done with no poetry night.' },
    not: { outcome: 'regression', why: 'The store did not pick Thursdays because they were at their worst. It counted the nights of the poetry night, and nothing was set beside them.' } },

  { id: 'k-r-funds', use: 'drill', tier: 'clean', setting: 'money', topic: 'new analysts for the worst stock funds', also: ['anyway'],
    text: "A fund company picks its 10 stock funds with the worst returns last year and hires a new analyst for each. This year the 10 funds average a gain of 4%, up from a loss of 9%. 'The new analysts turned the funds around,' the company says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The new analysts turned the funds around', K1: 'picks its 10 stock funds with the worst returns last year' },
    reason: { S1: 'The returns are given, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The 10 funds were picked for their worst returns: the company {cue:K1}. A year’s return is how a fund is run plus how the year went, and the worst ten of the year are partly the unluckiest ten. Their returns drift back toward usual with no new analysts.' },
    not: { outcome: 'nocontrol', why: 'No fund kept its old analyst for comparison, and the case shows that too. But the ten were picked at their worst, and when a case shows both, the answer is {a:K1.extreme}.' } },

  { id: 'k-r-walk', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a morning walk before first class, decided by a draw',
    text: "A school wanted to know whether a 20-minute morning walk improves attention. It drew 30 of 60 students by lottery to walk before first class for two weeks, and the other 30 started class as usual. Teachers counted the minutes each student was off task in first period, the same way for all 60: 11 for the walking group and 17 for the others. 'The morning walk improves attention,' the school says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'It drew 30 of 60 students by lottery to walk before first class', H1: 'The morning walk improves attention' },
    reason: { S1: 'Take the parts in order. All 60 students are counted in the same way, and the numbers are given. A second group went without, and {cue:S1}. Nothing is wrong in any part.',
              H1: 'The school says {cue:H1}, and the answer to what the figures show is {a:H1.causes}, from groups formed by a draw.' },
    not: { outcome: 'confound', why: 'The students did not choose whether to walk. A lottery did, so nothing else is likelier to be in one group than the other, and {o:confound} has nothing to point to.' } },

  { id: 'k-r-paint', use: 'drill', tier: 'clean', setting: 'home', topic: 'weatherproof paint and home sale prices',
    text: "A paint company says: 'Homes painted with our weatherproof paint sold for 12% more, so our paint raises resale value.' Of 500 home sales in one county, the 100 homes painted with it sold for an average of $336,000, against $300,000 for the 400 that were not. The county’s records show that most homes painted with it are in a new development where all the homes have new roofs and windows.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so our paint raises resale value', K1: 'most homes painted with it are in a new development where all the homes have new roofs and windows' },
    reason: { S1: 'The numbers are given for both groups, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'Owners chose their paint, and {cue:K1}. New roofs and windows raise a sale price on their own, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'reverse', why: 'Nothing shows that the high prices came first and led owners to choose the paint. What the case shows is something else that differs between the groups.' } },

  { id: 'k-r-crowds', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'crowd size and wins for sports teams',
    text: "A sports report says: 'Teams with the biggest crowds win the most games, so a big crowd gives a team the edge.' Across 20 teams, the 10 with average crowds over 30,000 won 62% of their games, and the 10 with crowds under 15,000 won 41%. Ticket records show that crowds grew most in the weeks after a winning streak.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'so a big crowd gives a team the edge', K1: 'crowds grew most in the weeks after a winning streak' },
    reason: { S1: 'The numbers are given for both groups of teams, and the report says {cue:S1}. That is a claim of cause.',
              K1: 'The report says the crowd caused the wins. But {cue:K1}, so winning came first and led to the crowds.' },
    not: { outcome: 'confound', why: 'No third thing is needed to explain the figures. Winning came first and led to the crowds, which is {o:reverse}.' } },

]);
