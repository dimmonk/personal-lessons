// Statistical Claims, Unit Five: drill stories, the route stage, the varied ones. also lists answers the story shows as well as its own, which
// lose to its own by the tie-break (yieldsTo). Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  { id: 'r-rel-2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a book club leaflet', also: ['cause'],
    text: "A leaflet says: 'Joining our book club cuts your risk of memory loss by 30%, so join today.' The leaflet gives no counts. People who join clubs also tend to see friends more and to exercise more, which the leaflet does not mention.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts your risk of memory loss by 30%', C1: 'The leaflet gives no counts' },
    reason: { S1: 'The leaflet also says joining made the difference, but the part that goes wrong first is the figure, a share of an earlier risk with nothing beside it: {cue:S1}. When a story shows both, the earlier part wins.',
              C1: '{cue:C1}, so “30% less risk” could be 10 people in 100 with memory loss falling to 7, or 1 in 100 falling to 0.7.' },
    not: { outcome: 'comp_ok', why: 'A claim that holds gives the counts behind its figure. This leaflet gives only a percentage.' } },

  { id: 'r-base-2', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a reading test',
    text: "A school's reading test is right 92 times in 100. A teacher says: 'The test flagged Omar, so he has a reading problem.' About 1 child in 25 has one.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A school's reading test is right 92 times in 100", C1: 'The test flagged Omar, so he has a reading problem' },
    reason: { S1: 'The figure is how often the test is right: {cue:S1}.',
              C1: 'The teacher reads {cue:C1}, as if a flag were right 92 times in 100. Out of 10,000 children, 368 with a reading problem are flagged and 768 without one are flagged too, so a flag is right only about 1 time in 3.' },
    not: { outcome: 'relrisk', why: 'The figure is how often a test is right, not a change given as a percentage.' } },

  { id: 'r-simp-2', use: 'drill', tier: 'varied', setting: 'work', topic: 'two managers and promotions',
    text: "A company ranks two managers by how many of their staff were promoted this year: 'Manager Lee: 30 of 100. Manager Ray: 55 of 100.' It says Ray develops people better. Lee manages a team of new hires, who are rarely promoted in their first year. Ray manages a team of staff with five years or more at the company.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Manager Lee: 30 of 100. Manager Ray: 55 of 100', C1: 'Lee manages a team of new hires, who are rarely promoted in their first year. Ray manages a team of staff with five years or more at the company' },
    reason: { S1: 'The company ranks two totals side by side: {cue:S1}. Nothing beside them says who each manager manages.',
              C1: 'The two teams are very different: {cue:C1}. New hires are rarely promoted under any manager, so you would need each total split by how long the staff have been at the company.' },
    not: { outcome: 'comp_ok', why: 'Two managers are set side by side with the counts given, as in a claim that holds. But their teams differ so much that the totals are not alike.' } }
]);
