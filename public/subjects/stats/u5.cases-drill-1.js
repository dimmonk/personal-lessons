// Statistical Claims, Unit Five: drill cases, the piece stage (one question on one case). Every case is new. A case where nothing is wrong
// (outcome comp_ok, route holds) is in every stage that asks about cases, as an action subject requires. Every question a case is asked has
// marked words and a reason that quotes them with {cue:STEP}; not names the nearest wrong name and why it fails for this case.

FC.cases('stats', 'u5', [

  { id: 'p-base', use: 'drill', tier: 'clean', setting: 'home', topic: 'a heat sensor in a building',
    text: "A fire company's new heat sensor is right 99 times in 100. A salesman says: 'It signaled, so there is a fire in the building.' About 1 building in 500 has a fire at any time.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: 'It signaled, so there is a fire in the building' },
    reason: { C1: 'The salesman reads {cue:C1}, as if a signal were right 99 times in 100. Count out 100,000 buildings. 200 have a fire and the sensor signals for 198 of them. Of the 99,800 without one, it signals for 1 in every 100: 998 {t:falsealarm}s. So there are 198 + 998 = 1,196 signals, and 198 are right: about 1 in 6.' },
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
    not: { outcome: 'simpson', why: 'Two totals are set side by side, but both districts are mostly the same kind of house. Nothing shows a different mix.' } }
]);
