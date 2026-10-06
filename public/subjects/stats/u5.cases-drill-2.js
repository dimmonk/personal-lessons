// Statistical Claims, Unit Five: drill cases, the route stage, the clean ones (the whole route, no help). Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

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

  { id: 'r-simp-1', use: 'drill', tier: 'clean', setting: 'health', topic: 'two hospitals and bone surgery',
    text: "A magazine ranks two hospitals by how many patients went home within a week of the same bone surgery: 'Hospital A: 71 of 100. Hospital B: 89 of 100.' It says B is the better hospital. Hospital A takes many patients who have other serious illnesses on top of the bone problem. Hospital B takes mostly patients who are otherwise healthy.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Hospital A: 71 of 100. Hospital B: 89 of 100', C1: 'Hospital A takes many patients who have other serious illnesses on top of the bone problem. Hospital B takes mostly patients who are otherwise healthy' },
    reason: { S1: 'The magazine ranks two totals side by side: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The two totals are made of different mixes: {cue:C1}. Healthy patients go home sooner whichever hospital treats them. You would need each total split into patients with other illnesses and patients without.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } },

  { id: 'r-ok-1', use: 'drill', tier: 'clean', setting: 'community', topic: 'bicycle injuries in two districts',
    text: "A city report says: 'Cyclists were hurt more often in the old downtown than in the bike-lane district: 18 injuries in 6,000 trips, against 6 in 6,000.' The figures come from the same hospital records over the same year, and both districts have a mix of weekday commuters and weekend riders.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'from the same hospital records over the same year, and both districts have a mix of weekday commuters and weekend riders', H1: '18 injuries in 6,000 trips, against 6 in 6,000' },
    reason: { S1: 'Each part holds in order. The two districts were counted from the same records over the same year, and both have a similar mix of riders: {cue:S1}.',
              H1: 'The report sets two districts side by side and says which is riskier, with both counts given: {cue:H1}. It does not claim that bike lanes caused the difference.' },
    not: { outcome: 'relrisk', why: 'A risk is compared, which is how {o:relrisk} looks. But the counts are given beside it, so nothing about how many is missing.' } }
]);
