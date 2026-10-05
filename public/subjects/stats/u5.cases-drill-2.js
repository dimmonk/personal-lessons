// Statistical Claims, Unit Five: drill cases, stage three (finish: the first answer is shown, the learner finishes the route and names it)
// and the clean cases of stage four (the whole route, no help). Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  /* ---------- Finish stage, clean ---------- */
  { id: 'f-rel', use: 'drill', tier: 'clean', setting: 'health', topic: 'a supplement label',
    text: "A supplement label says: 'Reduces the chance of a cold by 25%.' The label gives no other figure.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'Reduces the chance of a cold by 25%', C1: 'The label gives no other figure' },
    reason: { S1: 'The label gives its figure as a share of an earlier chance: {cue:S1}. It gives nothing to read the share against.',
              C1: 'The label says {cue:C1}. A reduction of 25% is 4 colds in a winter falling to 3, or 40 falling to 30, and the label does not let you tell which.' },
    not: { outcome: 'baserate', why: 'The figure is a change in a chance, given as a percentage. It is not how often a test is right.' } },

  { id: 'f-ok', use: 'drill', tier: 'clean', setting: 'money', topic: 'two banks and overdraft fees',
    text: "A consumer group reports on two banks: 'Last year Bank A charged an overdraft fee on 18 of every 100 checking accounts, and Bank B on 12 of every 100. We looked at 5,000 accounts at each bank, over the same twelve months, and both banks serve the same mix of customers.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'over the same twelve months, and both banks serve the same mix of customers', H1: 'Bank A charged an overdraft fee on 18 of every 100 checking accounts, and Bank B on 12 of every 100', C1: 'Bank A charged an overdraft fee on 18 of every 100 checking accounts, and Bank B on 12 of every 100' },
    reason: { S1: 'Each part holds in order. The two banks were counted over the same period and serve alike customers: {cue:S1}.',
              H1: 'The report sets two banks side by side and says which charges fees more often, with the counts given: {cue:H1}. It does not say why.',
              C1: 'Nothing has to be added beside the figure: {cue:C1}. Every count is given, so there is nothing more to ask for.' },
    not: { outcome: 'simpson', why: 'Two totals are set side by side, but the report says that both banks serve the same mix of customers, so nothing is hidden inside either total.' } },

  { id: 'f-base', use: 'drill', tier: 'clean', setting: 'work', topic: 'a drug test at a company',
    text: "A company's drug test is right 98 times in 100. The manager says: 'She tested positive, so she uses drugs.' About 1 employee in 100 uses drugs.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A company's drug test is right 98 times in 100", C1: 'She tested positive, so she uses drugs' },
    reason: { S1: 'The figure is how often a test is right: {cue:S1}.',
              C1: 'The manager reads {cue:C1}. Count out 10,000 employees. 100 use drugs and the test is positive for 98 of them. Of the 9,900 who do not, it is positive for 2 in every 100: 198, and those 198 are {t:falsealarm}s. That is 98 + 198 = 296 positives, and 98 are right: about 1 in 3.' },
    not: { outcome: 'relrisk', why: 'There is no change given as a percentage. The figure is how often a test is right, read as the chance that one positive is right.' } },

  /* ---------- Finish stage, varied ---------- */
  { id: 'f-simp', use: 'drill', tier: 'varied', setting: 'community', topic: 'two fire stations',
    text: "A city's report ranks two fire stations: 'Station 3 saved 94 of every 100 buildings it was called to. Station 9 saved 81 of every 100.' It calls Station 3 the better crew. Station 3 answers mostly small kitchen fires. Station 9 answers mostly fires in old warehouses.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Station 3 saved 94 of every 100 buildings it was called to. Station 9 saved 81 of every 100', C1: 'Station 3 answers mostly small kitchen fires. Station 9 answers mostly fires in old warehouses' },
    reason: { S1: 'The report ranks two totals side by side: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The two totals are made of different mixes: {cue:C1}. Small kitchen fires are far easier to save a building from. You would need each total split into small fires and large ones.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } },

  { id: 'f-ok-2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'two running groups',
    text: "A running club reports: 'Runners from the Tuesday group ran the spring 10K a minute faster on average than runners from the Thursday group: 52 minutes against 53.' It timed 40 runners from each group with the same chip timers, on the same course on the same day, and the two groups have the same mix of ages.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'with the same chip timers, on the same course on the same day, and the two groups have the same mix of ages', H1: 'a minute faster on average than runners from the Thursday group: 52 minutes against 53', C1: 'a minute faster on average than runners from the Thursday group: 52 minutes against 53' },
    reason: { S1: 'Each part holds in order. Everyone was timed in the same way on the same day, and the groups are alike: {cue:S1}.',
              H1: 'The report sets two groups side by side and says which was faster, with both averages given: {cue:H1}. It does not say that the Tuesday training made the difference.',
              C1: 'Nothing has to be added beside the figure: {cue:C1}. Every count is given, so there is nothing more to ask for.' },
    not: { outcome: 'relrisk', why: 'The figure is a difference, but both averages are given with it, so nothing about how much is missing.' } },

  { id: 'f-base-2', use: 'drill', tier: 'varied', setting: 'community', topic: 'a gunshot detector',
    text: "A town's new gunshot detector is right 95 times in 100. The mayor says: 'It reported a shot on Elm Street, so a gun was fired there.' A shot is fired on about 1 night in 250 on any given street.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A town's new gunshot detector is right 95 times in 100", C1: 'It reported a shot on Elm Street, so a gun was fired there' },
    reason: { S1: 'The figure is how often the detector is right: {cue:S1}.',
              C1: 'The mayor reads {cue:C1}. Count out 10,000 street-nights. About 40 have a shot, and the detector reports 38 of them. Of the other 9,960 it reports 5 in every 100: 498. That is 38 + 498 = 536 reports, and 38 are right: about 7 in 100.' },
    not: { outcome: 'simpson', why: 'No two totals are set side by side. The figure is how often a detector is right, read as the chance that one report is right.' } },

  /* ---------- Route stage, clean ---------- */
  { id: 'r-rel-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a tutoring center banner',
    text: "A tutoring center's banner says: 'Students who take our course are 70% less likely to fail the exam.' The banner gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'are 70% less likely to fail the exam', C1: 'The banner gives no counts' },
    reason: { S1: 'The banner gives its figure as a share of an earlier chance: {cue:S1}. Nothing in the claim says anyone was left out or that the counting changed.',
              C1: 'The banner says {cue:C1}. 70% less likely is 10 failing in 100 falling to 3, or 1 in 100 falling to 0.3 in 100, and you cannot tell which.' },
    not: { outcome: 'comp_ok', why: 'A comparison that holds gives the counts behind it. This banner gives only the percentage.' } },

  { id: 'r-base-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a loan flagging program',
    text: "A lender's software flags loan applications that might be false. The lender says it is right 90 times in 100, and a loan officer says: 'The software flagged her application, so it is false.' About 1 application in 100 is false.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: 'The lender says it is right 90 times in 100', C1: 'The software flagged her application, so it is false' },
    reason: { S1: 'The figure is how often the software is right: {cue:S1}.',
              C1: 'The loan officer reads {cue:C1}. Count out 10,000 applications. 100 are false, and the software flags 90 of them. Of the 9,900 that are fine, it flags 1 in every 10: 990. That is 90 + 990 = 1,080 flags, and 90 are right: about 1 in 12.' },
    not: { outcome: 'simpson', why: 'No two totals are set side by side. The figure is how often a program is right, read as the chance that one flag is right.' } },

  { id: 'r-ok-1', use: 'drill', tier: 'clean', setting: 'community', topic: 'bicycle injuries in two districts',
    text: "A city report says: 'Cyclists were hurt more often in the old downtown than in the bike-lane district: 18 injuries in 6,000 trips, against 6 in 6,000.' The figures come from the same hospital records over the same year, and both districts have a mix of weekday commuters and weekend riders.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'from the same hospital records over the same year, and both districts have a mix of weekday commuters and weekend riders', H1: '18 injuries in 6,000 trips, against 6 in 6,000' },
    reason: { S1: 'Each part holds in order. The two districts were counted from the same records over the same year, and both have a similar mix of riders: {cue:S1}.',
              H1: 'The report sets two districts side by side and says which is riskier, with both counts given: {cue:H1}. It does not claim that bike lanes caused the difference.' },
    not: { outcome: 'relrisk', why: 'A risk is compared, which is how {o:relrisk} looks. But the counts are given beside it, so nothing about how many is missing.' } },

  { id: 'r-simp-1', use: 'drill', tier: 'clean', setting: 'health', topic: 'two hospitals and bone surgery',
    text: "A magazine ranks two hospitals by how many patients went home within a week of the same bone surgery: 'Hospital A: 71 of 100. Hospital B: 89 of 100.' It says B is the better hospital. Hospital A takes many patients who have other serious illnesses on top of the bone problem. Hospital B takes mostly patients who are otherwise healthy.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Hospital A: 71 of 100. Hospital B: 89 of 100', C1: 'Hospital A takes many patients who have other serious illnesses on top of the bone problem. Hospital B takes mostly patients who are otherwise healthy' },
    reason: { S1: 'The magazine ranks two totals side by side: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The two totals are made of different mixes: {cue:C1}. Healthy patients go home sooner whichever hospital treats them. You would need each total split into patients with other illnesses and patients without.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } },

  { id: 'r-ok-2', use: 'drill', tier: 'clean', setting: 'work', topic: 'two warehouse sites',
    text: "A staffing firm's report says: 'Workers at the Eastside warehouse packed 14 orders an hour on average, and workers at the Westside warehouse packed 12.' It timed 60 workers at each site on the same weekdays, packing the same kinds of orders from the same lists.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'timed 60 workers at each site on the same weekdays, packing the same kinds of orders from the same lists', H1: 'Eastside warehouse packed 14 orders an hour on average, and workers at the Westside warehouse packed 12' },
    reason: { S1: 'Each part holds in order. Both sites were timed on the same days with the same kind of work: {cue:S1}.',
              H1: 'The report sets two sites side by side and says which was faster, with both averages and the number of workers given: {cue:H1}.' },
    not: { outcome: 'simpson', why: 'Two totals are set side by side, but both sites packed the same kinds of orders, so there is no different mix hidden inside either.' } }
]);
