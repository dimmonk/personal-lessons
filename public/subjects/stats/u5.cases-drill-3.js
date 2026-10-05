// Statistical Claims, Unit Five: drill cases, stage four (the whole route, no help), the varied and misleading cases.
// echo names a teaching case whose story this one resembles while its name differs. also lists answers the case shows as well as its own,
// which lose to its own by the key's tie-break (yieldsTo). Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  /* ---------- Varied ---------- */
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
    not: { outcome: 'comp_ok', why: 'Two managers are set side by side with the counts given, as in a comparison that holds. But the case shows that their teams are different kinds of staff, so the totals are not alike.' } },

  { id: 'r-ok-3', use: 'drill', tier: 'varied', setting: 'learning', topic: 'campus living and grades',
    text: "A university reports: 'Students who live on campus had a slightly higher average grade than students who live off campus: 3.1 against 3.0 on a 4-point scale, with 1,200 students in each group.' Both averages use the same grades from the same year, and the two groups have the same mix of majors and entry scores.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'Both averages use the same grades from the same year, and the two groups have the same mix of majors and entry scores', H1: '3.1 against 3.0 on a 4-point scale, with 1,200 students in each group' },
    reason: { S1: 'Each part holds in order. Both groups are measured the same way and are alike in what matters: {cue:S1}.',
              H1: 'The report sets two groups side by side and says which is higher, with both averages and both sizes given: {cue:H1}. It does not say that living on campus raised the grades.' },
    not: { outcome: 'simpson', why: 'Two totals are set side by side, but the groups have the same mix of majors and entry scores, so nothing different is hidden in either.' } },

  /* ---------- Misleading ---------- */
  { id: 'r-rel-3', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a clinic blood test flyer', echo: 'base-poster',
    text: "A clinic's flyer says: 'Our new blood test cuts missed illnesses by 50%.' The flyer gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts missed illnesses by 50%', C1: 'The flyer gives no counts' },
    reason: { S1: 'The flyer gives its figure as a share of an earlier level: {cue:S1}. Nothing is set beside it.',
              C1: 'The flyer says {cue:C1}. It is about a test, which can bring back a test’s accuracy, but it never says how often the test is right or reads a yes. A cut of 50% is 20 missed illnesses falling to 10, or 2 falling to 1, and the flyer does not let you tell which.' },
    not: { outcome: 'baserate', why: 'A test is in the story, so it can look like {o:baserate}. But nobody reads a yes from the test here. The figure is a change given as a percentage.' } },

  { id: 'r-base-3', use: 'drill', tier: 'misleading', setting: 'work', topic: 'an injury-risk screening', echo: 'rel-lift',
    text: "A company's safety leaflet says: 'Our new injury-risk screening is right 97 times in 100, so any worker it flags is almost certainly about to be injured.' About 1 worker in 100 is injured in a year.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: 'Our new injury-risk screening is right 97 times in 100', C1: 'any worker it flags is almost certainly about to be injured' },
    reason: { S1: 'The figure is how often the screening is right: {cue:S1}.',
              C1: 'The leaflet reads {cue:C1}. Count out 10,000 workers. 100 are injured in a year and the screening flags 97 of them. Of the 9,900 who are not, it flags 3 in every 100: 297. That is 97 + 297 = 394 flags, and 97 are right: about 1 in 4.' },
    not: { outcome: 'relrisk', why: 'A leaflet about injuries can bring back a percentage. But no change is given as a percentage here. The figure is how often a screening is right.' } },

  { id: 'r-simp-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'two football teams and injuries', echo: 'rel-jog',
    text: "A sports magazine says: 'Players on the Hawks are 30% more likely to be injured than players on the Eagles: 39 injured of 120 Hawks, 30 of 120 Eagles.' The Hawks' roster is mostly linemen, who are hurt far more often than other players on any team. The Eagles' roster is mostly kickers and receivers.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Players on the Hawks are 30% more likely to be injured than players on the Eagles: 39 injured of 120 Hawks, 30 of 120 Eagles', C1: "The Hawks' roster is mostly linemen, who are hurt far more often than other players on any team. The Eagles' roster is mostly kickers and receivers" },
    reason: { S1: 'The magazine ranks two totals side by side: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The "30% more likely" can look like a percentage given without the numbers, but the counts are there. The case shows the two totals are made of different mixes: {cue:C1}. You would need each total split into linemen and the other players.' },
    not: { outcome: 'relrisk', why: 'A percentage is in the headline, so it can look like {o:relrisk}. But both counts are given. What is missing is what each total is made of.' } },

  { id: 'r-smalln', use: 'drill', tier: 'misleading', setting: 'community', topic: 'bike thefts on a street', also: ['compare'],
    text: "A neighborhood group posts: 'Bike thefts on our street are up 400% this quarter!' The police log shows one bike stolen last quarter and five this quarter.",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: 'one bike stolen last quarter and five this quarter', A1: 'one bike stolen last quarter and five this quarter' },
    reason: { S1: 'The post gives a percentage with no counts, which can look like what the figure is set beside. But the log shows how few there are behind it: {cue:S1}. When a case shows both, the answer is the people or things in the figure, which come before what it is set beside.',
              A1: 'The figure rests on {cue:A1}. One bike more or fewer moves the percentage a long way: if next quarter two are stolen, the same group could post "down 60%". There are only a handful.' },
    not: { outcome: 'relrisk', why: 'The post leaves out the counts, which is how {o:relrisk} looks. But the log shows the counts, and they are tiny. That part comes first.' } }
]);
