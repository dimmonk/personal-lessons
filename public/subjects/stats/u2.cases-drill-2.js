// Statistical Claims, Unit Two: drill cases for stage four (the whole route, no help). Three for each name.
// Every question is asked here, starting with the key's first question, so every case carries marked words and a reason for that question too (S1).
// For S1 the marked words are the words that show every part holding. For H1 they are the claim itself.
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the "does it look like a
// case you know?" second look is practised. These are the misleading cases.

FC.cases('stats', 'u2', [

  /* ---------- Clean ---------- */
  { id: 'r-samp1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a union and unpaid overtime',
    text: "A union has 24,000 members and wants to know how many have been asked to work unpaid overtime this year. It drew 1,000 membership numbers by lottery from the full list, then emailed, phoned and finally mailed a form to everyone who had not answered, until 940 had. Of those 940, 235 had been asked to work unpaid overtime, which is 25 in 100. The union says: 'About 25% of our members were asked to work unpaid overtime this year, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 1,000 membership numbers by lottery from the full list', 'until 940 had'], H1: 'About 25% of our members were asked to work unpaid overtime this year, give or take 3 points' },
    reason: { S1: 'Each part holds. Nobody was favored in who was asked, and nearly everyone asked answered: {cue:S1}. The claim gives one figure about one group.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group at one time, with its {t:margin}: 1 ÷ √940 is about 0.033, so 3 points. It says nothing about change or cause.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once, for this year. Nothing is followed through time.' } },

  { id: 'r-meas1', use: 'drill', tier: 'clean', setting: 'health', topic: 'arrivals at an emergency department',
    text: "A hospital's emergency department logs every arrival on the same system it has used since 2017, and nobody's pay or funding depends on the count. It logged 31,400 arrivals in 2021 and 33,900 in 2023. The hospital says: 'Emergency arrivals rose from 31,400 in 2021 to 33,900 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['logs every arrival on the same system it has used since 2017', 'nobody\'s pay or funding depends on the count'], H1: 'Emergency arrivals rose from 31,400 in 2021 to 33,900 in 2023' },
    reason: { S1: 'Each part holds. The count is the same every year and nobody could push it: {cue:S1}. The claim says no more than that the figure rose.',
              H1: 'The claim is {cue:H1}. It follows one figure through two years and says that it rose, by 33,900 − 31,400 = 2,500. It does not say why.' },
    not: { outcome: 'samp_ok', why: 'The claim gives the figure at two times and says it rose. A claim of the other name gives the figure once.' } },

  { id: 'r-comp1', use: 'drill', tier: 'clean', setting: 'money', topic: 'two credit union branches and complaints',
    text: "A credit union compares two branches. Both serve the same kinds of members, both log every transaction in the same system, and both were counted for the whole of last year. Branch X had 1,800 complaints among 90,000 transactions, and Branch Y had 3,300 among 110,000. The credit union says: 'Branch Y gets more complaints: 3 in 100 transactions against 2 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both serve the same kinds of members, both log every transaction in the same system'], H1: 'Branch Y gets more complaints: 3 in 100 transactions against 2 in 100' },
    reason: { S1: 'Each part holds. The two are alike and counted alike: {cue:S1}, and the numbers are given.',
              H1: 'The claim is {cue:H1}. It sets two of one kind side by side, with the numbers behind each: 1,800 ÷ 90,000 = 0.02 and 3,300 ÷ 110,000 = 0.03. It says which gets more and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what makes Y’s number higher, and nothing in the case forms the two into groups by lottery.' } },

  { id: 'r-cause1', use: 'drill', tier: 'clean', setting: 'community', topic: 'countdown timers at crossings',
    text: "A city has 600 intersections with the same kind of signal. A computer drew 300 of them by lottery to get new countdown timers for walkers, and the other 300 kept the old signals. Over a year the city counted every pedestrian injury at every intersection the same way: 36 injuries at the timer intersections and 60 at the others. The city says: 'The countdown timers cut pedestrian injuries: 12 for every 100 intersections against 20.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 300 of them by lottery to get new countdown timers', 'counted every pedestrian injury at every intersection the same way'], H1: 'The countdown timers cut pedestrian injuries: 12 for every 100 intersections against 20' },
    reason: { S1: 'Each part holds, and the claim says what made the gap, so the last part matters most. A lottery decided which intersections got the timers: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It goes past which group is ahead and says what made the gap, and the lottery lets it: 36 ÷ 300 = 0.12 against 60 ÷ 300 = 0.20.' },
    not: { outcome: 'comp_ok', why: 'A claim that stopped at "12 against 20" would be the other name. This one says the timers cut the injuries.' } },

  /* ---------- Varied ---------- */
  { id: 'r-samp2', use: 'drill', tier: 'varied', setting: 'health', topic: 'children and tooth brushing',
    text: "A dental association wants to know how many of the 80,000 children in the state brush twice a day. It drew 1,200 children by lottery from the full list of enrolled students, sent a form home, and had a nurse follow up by phone until 1,090 had answered. Of the 1,090, 763 brush twice a day, which is 70 in 100. The association says: 'About 70% of the state's children brush twice a day, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 1,200 children by lottery from the full list of enrolled students', 'until 1,090 had answered'], H1: "About 70% of the state's children brush twice a day, give or take 3 points" },
    reason: { S1: 'Each part holds. The {t:sample} is under 2 in 100 of the children, but a lottery chose it from a full list and nearly all were heard from: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group at one time. A small share of a big group does not stop that: 1,200 ÷ 80,000 is 0.015, and the margin comes from the 1,090, not from the 80,000.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once. Nothing is followed through time.' } },

  { id: 'r-meas2', use: 'drill', tier: 'varied', setting: 'community', topic: 'traffic on one road',
    text: "A traffic counter buried in Mill Road, the same loop in the same place since 2012, counts every vehicle that crosses it, and nobody's pay depends on the count. About 18,400 vehicles a day crossed in October 2021 and 16,900 in October 2023. The city says: 'Daily traffic on Mill Road fell from 18,400 vehicles in October 2021 to 16,900 in October 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['the same loop in the same place since 2012, counts every vehicle that crosses it'], H1: 'Daily traffic on Mill Road fell from 18,400 vehicles in October 2021 to 16,900 in October 2023' },
    reason: { S1: 'Each part holds. The same counter has counted every vehicle in both years: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It follows one figure through two Octobers and says that it fell, by 18,400 − 16,900 = 1,500. It does not say why.' },
    not: { outcome: 'comp_ok', why: 'Two figures appear, but they are one road in two years. Nothing else is set beside the figure.' } },

  { id: 'r-comp2', use: 'drill', tier: 'varied', setting: 'community', topic: 'two fire stations and response times',
    text: "Fire Station 3 and Fire Station 8 cover districts of the same size and kind. Both log the time of every call and the time of arrival in the same dispatch system, and both were counted for the whole of last year. Station 3 reached 450 of 500 calls within eight minutes, and Station 8 reached 360 of 450. The department says: 'Station 3 reaches more calls within eight minutes: 90 in 100 against 80 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['cover districts of the same size and kind', 'in the same dispatch system'], H1: 'Station 3 reaches more calls within eight minutes: 90 in 100 against 80 in 100' },
    reason: { S1: 'Each part holds. The two districts are alike and every call was logged the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It sets two stations of one kind side by side with the numbers behind each: 450 ÷ 500 = 0.90 and 360 ÷ 450 = 0.80. It says which does better and stops.' },
    not: { outcome: 'meas_ok', why: 'Two figures appear, but they are two stations at one time. Nothing is followed through time.' } },

  { id: 'r-cause2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a new script for support agents',
    text: "A software firm has 600 support agents. A computer drew 300 of them by lottery to use a new call script, and the other 300 used the old one. For eight weeks the firm counted every ticket for both groups the same way, and nobody's pay depended on the count during the test. Agents on the new script closed 14 tickets a day on average, and the others closed 12. The firm says: 'The new script raised the tickets agents close each day: 14 against 12.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 300 of them by lottery to use a new call script', 'counted every ticket for both groups the same way'], H1: 'The new script raised the tickets agents close each day: 14 against 12' },
    reason: { S1: 'Each part holds. A lottery decided who used the new script, and both groups were counted the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It says what made the gap, the script, and the lottery lets it say so. The gap is 14 − 12 = 2 tickets a day on average, for agents like those in the test.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group closed more. It says the new script raised the number.' } }
]);
