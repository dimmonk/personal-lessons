// Statistical Claims, Unit Two: drill cases for the route stage, the clean ones.

FC.cases('stats', 'u2', [

  { id: 'r-samp1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a union and unpaid overtime',
    text: "A union has 24,000 members and wants to know how many have been asked to work unpaid overtime this year. It drew 1,000 membership numbers by lottery from the full list, then emailed, phoned and finally mailed a form to everyone who had not answered, until 940 had. Of those 940, 235 had been asked to work unpaid overtime, which is 25 in 100. The union says: 'About 25% of our members were asked to work unpaid overtime this year, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 1,000 membership numbers by lottery from the full list', 'until 940 had'], H1: 'About 25% of our members were asked to work unpaid overtime this year, give or take 3 points' },
    reason: { S1: 'Each part holds. The {t:sample} was drawn {t:atrandom}, so nobody was favored, and nearly everyone asked answered: {cue:S1}. The claim gives one figure about one group.',
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
    not: { outcome: 'comp_ok', why: 'A claim that stopped at "12 against 20" would be the other name. This one says the timers cut the injuries.' } }
]);
