// Statistical Claims, Unit Five: drill cases, stages one and two. 'n-' cases are asked in the name stage (the route is shown, the name is asked);
// 'p-' cases are asked in the piece stage (one question on one case). Every case is new. A case where nothing is wrong (outcome comp_ok, route
// holds) is in every stage that asks about cases, as an action subject requires. Every question a case is asked has marked words and a reason
// that quotes them with {cue:STEP}; not names the nearest wrong name and why it fails for this case.

FC.cases('stats', 'u5', [

  /* ---------- Name stage, clean ---------- */
  { id: 'n-rel-1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a phone plan and dropped calls',
    text: "A phone company's ad says: 'Our new plan cuts dropped calls by 40%.' The ad gives no other figure.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts dropped calls by 40%', C1: 'The ad gives no other figure' },
    reason: { S1: 'Nothing in the ad says anyone was left out or that what is counted changed. The ad gives its figure as a share of an earlier level: {cue:S1}. That is a percentage of an amount the ad does not give.',
              C1: 'The ad stops at {cue:C1}. A cut of 40% is 10 dropped calls in a week falling to 6, or 1,000 falling to 600, and the ad does not let you tell which.' },
    not: { outcome: 'comp_ok', why: 'A claim that holds gives the numbers behind its comparison. This one gives a percentage and nothing else.' },
    wouldChange: 'If the ad had said that dropped calls fell from 500 to 300 in the same month, with every call counted the same way, it would be {a:S1.holds}.' },

  { id: 'n-ok-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'two schools and a reading standard',
    text: "A school district's report says: 'Third graders at Maple School read a little better than third graders at Cedar School: 62 of 80 met the standard at Maple, and 54 of 80 at Cedar.' Both schools used the same test in the same week, and both enroll children from the same neighborhoods.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'Both schools used the same test in the same week', H1: '62 of 80 met the standard at Maple, and 54 of 80 at Cedar', C1: '62 of 80 met the standard at Maple, and 54 of 80 at Cedar' },
    reason: { S1: 'Each part holds when it is checked in order: every third grader at both schools took the same test in the same week ({cue:S1}), and nothing in the claim reaches past the two schools.',
              H1: 'The claim sets two schools side by side and says which is ahead, with both counts given: {cue:H1}. It does not say that one school made the difference.',
              C1: 'Nothing has to be added beside the figure: {cue:C1}. Every count is given, so there is nothing more to ask for.' },
    not: { outcome: 'simpson', why: 'Two totals are set side by side, which is how {o:simpson} looks. But both schools enroll children from the same neighborhoods, and nothing shows that either has a different mix of easy and hard ones.' } },

  { id: 'n-base-1', use: 'drill', tier: 'clean', setting: 'health', topic: 'a pharmacy throat test',
    text: "A pharmacy's flyer says: 'Our home test for a throat infection is 96% accurate, so if it says yes, you have the infection.' About 1 person in 50 who uses the test has the infection.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: 'Our home test for a throat infection is 96% accurate', C1: 'if it says yes, you have the infection' },
    reason: { S1: 'The figure is how often a test is right: {cue:S1}. The flyer goes on to treat that number as something it is not.',
              C1: 'The flyer reads {cue:C1}, as if a yes were right 96 times in 100. Count out 10,000 users. 200 have the infection and the test says yes to 192 of them. Of the 9,800 who do not, it says yes to 4 in every 100: 392. That is 192 + 392 = 584 yeses, and 192 of them are right: about 1 in 3.' },
    not: { outcome: 'relrisk', why: 'The figure is not a change given as a percentage. It is how often a test is right, read as the chance that a yes is right.' } },

  { id: 'n-simp-1', use: 'drill', tier: 'clean', setting: 'work', topic: 'two delivery depots',
    text: "A delivery company's report ranks two depots: 'Depot North delivered 88 of every 100 parcels on time. Depot South delivered 76 of every 100.' It praises North. North serves mostly city streets, where delivery is quick. South serves mostly mountain villages, where roads close in bad weather.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: 'Depot North delivered 88 of every 100 parcels on time. Depot South delivered 76 of every 100', C1: 'North serves mostly city streets, where delivery is quick. South serves mostly mountain villages, where roads close in bad weather' },
    reason: { S1: 'The report sets two totals side by side as a ranking: {cue:S1}. Nothing beside them says what each is made of.',
              C1: 'The two totals are not made of the same mix: {cue:C1}. A depot with mostly easy parcels will have the higher total whatever its drivers do. What you would need is each total split into city parcels and village parcels.' },
    not: { outcome: 'relrisk', why: 'The counts are given: 88 and 76 of every 100. Nothing is missing about how many. What is missing is what each total is made of.' } },

  /* ---------- Name stage, varied ---------- */
  { id: 'n-rel-2', use: 'drill', tier: 'varied', setting: 'community', topic: 'cyclists on Mill Road',
    text: "A neighborhood app posts: 'Cyclists on Mill Road are twice as likely to be hit by a car as cyclists on Park Road.' The post gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'twice as likely to be hit by a car as cyclists on Park Road', C1: 'The post gives no counts' },
    reason: { S1: 'The post compares two roads with a share and nothing else: {cue:S1}.',
              C1: 'The post says {cue:C1}. "Twice as likely" is 2 in 1,000 trips against 1 in 1,000, or 20 in 100 against 10 in 100. The post does not let you tell which.' },
    not: { outcome: 'comp_ok', why: 'Two roads are set side by side, as in a comparison that holds. But a comparison that holds gives the counts behind it, and this post gives none.' },
    wouldChange: 'If the post had said that 6 of 1,200 cyclist trips ended in a crash on Mill Road and 3 of 1,200 on Park Road, counted over the same months, it would be {a:S1.holds}.' },

  { id: 'n-base-2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a stadium metal detector',
    text: "A stadium's metal detector is right 99 times in 100. A guard says to a fan it beeped for: 'The detector went off, so you have a knife.' About 1 fan in 10,000 carries one.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A stadium's metal detector is right 99 times in 100", C1: 'The detector went off, so you have a knife' },
    reason: { S1: 'The figure is how often the detector is right: {cue:S1}.',
              C1: 'The guard reads {cue:C1}. Count out 100,000 fans. About 10 carry a knife, and the detector beeps for about 10 of them. Of the other 99,990 it beeps for 1 in every 100: about 1,000. So there are about 1,010 beeps, and 10 are right: 1 in 100.' },
    not: { outcome: 'relrisk', why: 'There is no change given as a percentage. The figure is how often the detector is right.' } },

  { id: 'n-ok-2', use: 'drill', tier: 'varied', setting: 'health', topic: 'flu in two towns',
    text: "A health department reports on two towns in the same winter: 'In Ashby, 60 of 2,000 adults caught the flu: 3 in every 100. In Brook, 140 of 2,000 adults caught it: 7 in every 100.' Both towns counted every adult who saw a doctor, and the two towns have about the same ages.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'Both towns counted every adult who saw a doctor, and the two towns have about the same ages', H1: 'In Ashby, 60 of 2,000 adults caught the flu: 3 in every 100. In Brook, 140 of 2,000 adults caught it: 7 in every 100', C1: 'In Ashby, 60 of 2,000 adults caught the flu: 3 in every 100. In Brook, 140 of 2,000 adults caught it: 7 in every 100' },
    reason: { S1: 'Each part holds in order: {cue:S1}. The towns are counted the same way and are alike.',
              H1: 'The report gives two places side by side, with both counts and both shares: {cue:H1}. It says which had more flu and stops there.',
              C1: 'Nothing has to be added beside the figure: {cue:C1}. Every count is given, so there is nothing more to ask for.' },
    not: { outcome: 'relrisk', why: 'The figures are given as shares, but both counts are given with them, so nothing about how many is missing.' } },

  /* ---------- Piece stage: one question on one case ---------- */
  { id: 'p-base', use: 'drill', tier: 'clean', setting: 'home', topic: 'a heat sensor in a building',
    text: "A fire company's new heat sensor is right 99 times in 100. A salesman says: 'It signaled, so there is a fire in the building.' About 1 building in 500 has a fire at any time.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'It signaled, so there is a fire in the building' },
    reason: { C1: 'The salesman reads {cue:C1}, as if a signal were right 99 times in 100. Count out 100,000 buildings. 200 have a fire and the sensor signals for 198 of them. Of the 99,800 without one, it signals for 1 in every 100: 998. So there are 198 + 998 = 1,196 signals, and 198 are right: about 1 in 6.' },
    not: { outcome: 'simpson', why: 'No two totals are set side by side. The figure is how often a sensor is right, read as the chance a signal is right.' } },

  { id: 'p-simp', use: 'drill', tier: 'clean', setting: 'learning', topic: 'two driving instructors',
    text: "A driving school's page says: 'Instructor Cole's learners passed 58 of 100 road tests. Instructor Dunn's passed 79 of 100.' Cole takes learners who have already failed the test twice. Dunn takes mostly learners who passed their practice tests easily.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Cole takes learners who have already failed the test twice. Dunn takes mostly learners who passed their practice tests easily' },
    reason: { C1: 'The two totals are made of different mixes: {cue:C1}. A ranking that reads 58 against 79 as a ranking of the instructors leaves out who each of them teaches. You would need each total split into learners who find the test hard and learners who find it easy.' },
    not: { outcome: 'relrisk', why: 'Both counts are given, so nothing about how many is missing. What is missing is what each total is made of.' } },

  { id: 'p-rel', use: 'drill', tier: 'clean', setting: 'work', topic: 'a resume service',
    text: "A recruiter's page says: 'Candidates who use our resume service are 3 times as likely to get an interview.' The page gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Candidates who use our resume service are 3 times as likely to get an interview' },
    reason: { C1: 'The page gives {cue:C1}, a share of a chance it does not state. "3 times as likely" is 3 in 100 against 1 in 100, or 30 in 100 against 10 in 100, and the page does not let you tell which.' },
    not: { outcome: 'baserate', why: 'The figure is a change in a chance given as a percentage. It is not how often a test is right.' } },

  { id: 'p-ok', use: 'drill', tier: 'clean', setting: 'home', topic: 'two districts and electricity',
    text: "A utility company's notice says: 'Homes in the Hill district used more electricity than homes in the Lake district this January: 640 units on average, against 580 units, from 900 homes in each district.' Every meter was read in the same week with the same kind of meter, and both districts are mostly three-bedroom houses.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: 'Every meter was read in the same week with the same kind of meter', H1: '640 units on average, against 580 units, from 900 homes in each district' },
    reason: { S1: 'Each part holds in order. All the meters were read in the same way, in the same week: {cue:S1}.',
              H1: 'The notice sets two districts side by side and says which used more, with the figures and the number of homes given: {cue:H1}.' },
    not: { outcome: 'simpson', why: 'Two totals are set side by side, but both districts are mostly the same kind of house. Nothing shows a different mix.' } },

  { id: 'p-simp-2', use: 'drill', tier: 'varied', setting: 'money', topic: 'two bank branches and loans',
    text: "A bank compares two branches: 'Branch East approved 62 of every 100 loan applications. Branch West approved 45 of every 100.' It calls East the friendlier lender. West serves a town where most applicants have no credit history. East serves a town where most applicants have long, clean credit histories.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'West serves a town where most applicants have no credit history. East serves a town where most applicants have long, clean credit histories' },
    reason: { C1: 'The two totals are made of different mixes of applicants: {cue:C1}. The applicants East sees are the easy kind to approve, so a higher total does not show a friendlier lender. You would need each total split by credit history.' },
    not: { outcome: 'baserate', why: 'No test is read here. Two totals are set side by side, and what each is made of is what is missing.' } }
]);
