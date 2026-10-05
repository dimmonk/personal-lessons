// Statistical Claims, Unit Two: fresh cases kept back for later days (second file: the last two names, four cases each).
// Every case carries marked words and a reason for both questions, as in the first file.

FC.cases('stats', 'u2', [

  /* ---------- A difference between two things ---------- */
  { id: 'ret-comp1', use: 'return', tier: 'varied', setting: 'health', topic: 'two pharmacies and dispensing errors',
    text: "A health board compares two pharmacies. Both fill the same kinds of prescriptions and check every one the same way, and both were counted for the whole of last year. Pharmacy A made 40 errors among 20,000 prescriptions, and Pharmacy B made 90 among 18,000. The board says: 'Pharmacy B made more errors: 5 in 1,000 prescriptions against 2 in 1,000.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both fill the same kinds of prescriptions and check every one the same way'], H1: 'Pharmacy B made more errors: 5 in 1,000 prescriptions against 2 in 1,000' },
    reason: { S1: 'Each part holds. The two pharmacies are alike and every prescription was checked the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It sets two pharmacies of one kind side by side with the numbers behind each: 40 ÷ 20,000 = 0.002 and 90 ÷ 18,000 = 0.005. It says which made more and stops.' },
    not: { outcome: 'meas_ok', why: 'Two figures appear, but they are two pharmacies at one time. Nothing is followed through time.' } },

  { id: 'ret-comp2', use: 'return', tier: 'varied', setting: 'work', topic: 'two stores and returned goods',
    text: "A retailer compares two stores of the same size in similar malls. Every sale and every return was logged in the same system for the whole year. Store 1 had 2,400 returns among 40,000 sales, and Store 2 had 3,500 among 50,000. The retailer says: 'Store 2 gets more returns: 7 in 100 sales against 6 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['two stores of the same size in similar malls', 'Every sale and every return was logged in the same system for the whole year'], H1: 'Store 2 gets more returns: 7 in 100 sales against 6 in 100' },
    reason: { S1: 'Each part holds. The stores are alike and every sale and return was logged the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It sets two stores of one kind side by side, with the numbers behind each: 2,400 ÷ 40,000 = 0.06 and 3,500 ÷ 50,000 = 0.07. It says which gets more and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what makes Store 2’s returns higher, and nothing in the case forms the stores into groups by lottery.' } },

  { id: 'ret-comp3', use: 'return', tier: 'varied', setting: 'home', topic: 'two apartment buildings and heating',
    text: "A utility compares two apartment buildings of the same size and age with the same kind of heating. It billed both the same way for the whole winter and read every meter. Building A used 21 units of heat per apartment on average, and Building B used 24. The utility says: 'Apartments in Building B used more heat than apartments in Building A: 24 units against 21.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['two apartment buildings of the same size and age with the same kind of heating', 'read every meter'], H1: 'Apartments in Building B used more heat than apartments in Building A: 24 units against 21' },
    reason: { S1: 'Each part holds. The buildings are alike and every meter was read the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It sets two buildings side by side, with the averages given, and says which used more: 24 − 21 = 3 units. It says nothing about why.' },
    not: { outcome: 'meas_ok', why: 'The two figures are two buildings in one winter. Nothing is followed through time.' } },

  { id: 'ret-comp4', use: 'return', tier: 'varied', setting: 'community', topic: 'two driving test centers',
    text: "A state compares two driving test centers. Both give the same test, use examiners trained the same way, and were counted for the whole of 2023. North passed 1,260 of 2,000 drivers, and South passed 1,150 of 2,500. The state says: 'Fewer drivers pass at the South center: 46 in 100 against 63 in 100 at North.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both give the same test, use examiners trained the same way'], H1: 'Fewer drivers pass at the South center: 46 in 100 against 63 in 100 at North' },
    reason: { S1: 'Each part holds. The two centers give the same test and were counted over the same year: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It sets two centers of one kind side by side with the numbers behind each: 1,150 ÷ 2,500 = 0.46 and 1,260 ÷ 2,000 = 0.63. It says which passes fewer and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what makes fewer drivers pass at South, and nothing in the case says a lottery formed the centers.' } },

  /* ---------- One thing causing another ---------- */
  { id: 'ret-cause1', use: 'return', tier: 'varied', setting: 'home', topic: 'a letter about electricity use',
    text: "A power company has 10,000 households in a test. A computer drew 5,000 of them by lottery to get a monthly letter showing their use beside their neighbors', and the other 5,000 got nothing extra. The company read every meter the same way for a year. The letter group averaged 700 kilowatt-hours a month and the others 730. The company says: 'The monthly letter cut electricity use: 700 kilowatt-hours a month against 730.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 5,000 of them by lottery to get a monthly letter', 'read every meter the same way for a year'], H1: 'The monthly letter cut electricity use: 700 kilowatt-hours a month against 730' },
    reason: { S1: 'Each part holds, and the claim says what made the gap, so the last part matters most. A lottery chose who got the letter: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It says the letter made the gap of 730 − 700 = 30 units, and the lottery lets it say so. No {t:placebo} was needed: the second group simply got the usual.' },
    not: { outcome: 'comp_ok', why: 'A claim that stopped at "700 against 730" would be the other name. This one says the letter cut the use.' } },

  { id: 'ret-cause2', use: 'return', tier: 'varied', setting: 'health', topic: 'a text program to quit smoking',
    text: "A clinic enrolled 300 smokers. A computer drew 150 of them by lottery to get a daily text program, and the other 150 got a leaflet. After six months the clinic checked every person with the same breath test. In the text group 45 had quit, and in the leaflet group 24 had. The clinic says: 'The text program helped more smokers quit: 30 in 100 against 16 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 150 of them by lottery to get a daily text program', 'checked every person with the same breath test'], H1: 'The text program helped more smokers quit: 30 in 100 against 16 in 100' },
    reason: { S1: 'Each part holds. A lottery chose who got the texts, and everyone had the same test: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It says what made the gap, the texts, and the lottery lets it say so: 45 ÷ 150 = 0.30 against 24 ÷ 150 = 0.16.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group quit more. It says the text program helped them quit.' } },

  { id: 'ret-cause3', use: 'return', tier: 'varied', setting: 'work', topic: 'a route app for delivery drivers',
    text: "A delivery firm has 200 drivers in a test. A computer drew 100 of them by lottery to use a new route-planning app, and the other 100 kept their usual way. For six weeks the same GPS log counted every delivery for both groups, and nobody's pay depended on the count during the test. App drivers averaged 38 deliveries a day and the others 34. The firm says: 'The route app raised deliveries per driver: 38 a day against 34.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 100 of them by lottery to use a new route-planning app', 'the same GPS log counted every delivery for both groups'], H1: 'The route app raised deliveries per driver: 38 a day against 34' },
    reason: { S1: 'Each part holds. A lottery chose who used the app, and one log counted both groups: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It says the app made the gap of 38 − 34 = 4 deliveries a day on average, and the lottery lets it say so.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group made more deliveries. It says the app raised the number.' } },

  { id: 'ret-cause4', use: 'return', tier: 'varied', setting: 'leisure', topic: 'coaching for new runners',
    text: "A running club took on 200 new members. A computer drew 100 of them by lottery for a coached beginners' group, and the other 100 trained alone. After twelve weeks the club timed every member over the same 5 km course: 80 of the coached group finished it without stopping, and 60 of the others did. The club says: 'Coaching got more beginners to the finish: 80 in 100 against 60 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 100 of them by lottery for a coached beginners\' group', 'timed every member over the same 5 km course'], H1: 'Coaching got more beginners to the finish: 80 in 100 against 60 in 100' },
    reason: { S1: 'Each part holds. A lottery chose who was coached, and everyone ran the same course: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It says coaching made the gap of 80 − 60 = 20 in 100, and the lottery lets it say so.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group finished more. It says coaching got more of them to the finish.' } }
]);
