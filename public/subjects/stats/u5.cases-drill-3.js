// Statistical Claims, Unit Five: drill cases, the route stage, the varied ones. also lists answers the case shows as well as its own, which
// lose to its own by the tie-break (yieldsTo). Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  { id: 'r-rel-2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a book club leaflet', also: ['cause'],
    text: "A leaflet says: 'Joining our book club cuts your risk of memory loss by 30%, so join today.' The leaflet gives no counts. People who join clubs also tend to see friends more and to exercise more, which the leaflet does not mention.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts your risk of memory loss by 30%', C1: 'The leaflet gives no counts' },
    reason: { S1: 'The claim also says that joining made the difference, and the case shows another way the result could come about. But the figure is given as a share of an earlier risk with nothing beside it: {cue:S1}. When a case shows both, the answer is the earlier part, what the figure is set beside, and not the claim of cause.',
              C1: 'The leaflet says {cue:C1}. A cut of 30% is 10 people in 100 with memory loss falling to 7, or 1 in 100 falling to 0.7, and the leaflet does not let you tell which.' },
    not: { outcome: 'comp_ok', why: 'A claim that holds gives the counts behind its figure, and one that claims a cause needs groups formed by chance. This leaflet gives only a percentage.' } },

  { id: 'r-base-2', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a reading test',
    text: "A school's reading test is right 92 times in 100. A teacher says: 'The test flagged Omar, so he has a reading problem.' About 1 child in 25 has one.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A school's reading test is right 92 times in 100", C1: 'The test flagged Omar, so he has a reading problem' },
    reason: { S1: 'The figure is how often the test is right: {cue:S1}.',
              C1: 'The teacher reads {cue:C1}. Count out 10,000 children. 400 have a reading problem and the test flags 368 of them. Of the 9,600 who do not, it flags 8 in every 100: 768. That is 368 + 768 = 1,136 flags, and 368 are right: about 1 in 3.' },
    not: { outcome: 'relrisk', why: 'The figure is how often a test is right, and not a change given as a percentage.' } },

  { id: 'r-simp-2', use: 'drill', tier: 'varied', setting: 'work', topic: 'two managers and promotions',
    text: "A company ranks two managers by how many of their staff were promoted this year: 'Manager Lee: 30 of 100. Manager Ray: 55 of 100.' It says Ray develops people better. Lee manages a team of new hires, who are rarely promoted in their first year. Ray manages a team of staff with five years or more at the company.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Manager Lee: 30 of 100. Manager Ray: 55 of 100', C1: 'Lee manages a team of new hires, who are rarely promoted in their first year. Ray manages a team of staff with five years or more at the company' },
    reason: { S1: 'The company ranks two totals side by side: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The two totals are made of different mixes: {cue:C1}. New hires are rarely promoted whichever manager they have. You would need each total split by how long the staff have been at the company.' },
    not: { outcome: 'comp_ok', why: 'Two managers are set side by side with the counts given, as in a comparison that holds. But the case shows that their teams are different kinds of staff, so the totals are not alike.' } }
]);
