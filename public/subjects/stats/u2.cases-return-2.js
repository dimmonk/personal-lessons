// Statistical Claims, Unit Two: fresh cases kept back for later days: the last two names, two each.

FC.cases('stats', 'u2', [

  { id: 'ret-comp1', use: 'return', tier: 'varied', setting: 'health', topic: 'two pharmacies and dispensing errors',
    text: "A health board compares two pharmacies. Both fill the same kinds of prescriptions and check every one the same way, and both were counted for the whole of last year. Pharmacy A made 40 errors among 20,000 prescriptions, and Pharmacy B made 90 among 18,000. The board says: 'Pharmacy B made more errors: 5 in 1,000 prescriptions against 2 in 1,000.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both fill the same kinds of prescriptions and check every one the same way'], H1: 'Pharmacy B made more errors: 5 in 1,000 prescriptions against 2 in 1,000' },
    reason: { S1: 'Each part holds: the two pharmacies are alike and every prescription was checked the same way ({cue:S1}).',
              H1: 'The claim is {cue:H1}: two pharmacies side by side, with the numbers behind each (40 ÷ 20,000 = 0.002 and 90 ÷ 18,000 = 0.005). It says which made more and stops.' },
    not: { outcome: 'meas_ok', why: 'Two figures appear, but they are two pharmacies at one time, so nothing is followed through time.' } },

  { id: 'ret-comp2', use: 'return', tier: 'varied', setting: 'work', topic: 'two stores and returned goods',
    text: "A retailer compares two stores of the same size in similar malls. Every sale and every return was logged in the same system for the whole year. Store 1 had 2,400 returns among 40,000 sales, and Store 2 had 3,500 among 50,000. The retailer says: 'Store 2 gets more returns: 7 in 100 sales against 6 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['two stores of the same size in similar malls', 'Every sale and every return was logged in the same system for the whole year'], H1: 'Store 2 gets more returns: 7 in 100 sales against 6 in 100' },
    reason: { S1: 'Each part holds: the stores are alike and every sale and return was logged the same way ({cue:S1}).',
              H1: 'The claim is {cue:H1}: two stores side by side, with the numbers behind each (2,400 ÷ 40,000 = 0.06 and 3,500 ÷ 50,000 = 0.07). It says which gets more and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what makes Store 2’s returns higher, and no lottery formed the stores into groups.' } },

  { id: 'ret-cause1', use: 'return', tier: 'varied', setting: 'home', topic: 'a letter about electricity use',
    text: "A power company has 10,000 households in a test. A computer drew 5,000 of them by lottery to get a monthly letter showing their use beside their neighbors', and the other 5,000 got nothing extra. The company read every meter the same way for a year. The letter group averaged 700 kilowatt-hours a month and the others 730. The company says: 'The monthly letter cut electricity use: 700 kilowatt-hours a month against 730.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 5,000 of them by lottery to get a monthly letter', 'read every meter the same way for a year'], H1: 'The monthly letter cut electricity use: 700 kilowatt-hours a month against 730' },
    reason: { S1: 'Each part holds, and the last matters most: a lottery chose who got the letter ({cue:S1}).',
              H1: 'The claim is {cue:H1}: it says the letter made the gap of 730 − 700 = 30 units, and the lottery lets it say so. No {t:placebo} was needed, because the second group simply got the usual.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at "700 against 730". It says the letter cut the use.' } },

  { id: 'ret-cause2', use: 'return', tier: 'varied', setting: 'health', topic: 'a text program to quit smoking',
    text: "A clinic enrolled 300 smokers. A computer drew 150 of them by lottery to get a daily text program, and the other 150 got a leaflet. After six months the clinic checked every person with the same breath test. In the text group 45 had quit, and in the leaflet group 24 had. The clinic says: 'The text program helped more smokers quit: 30 in 100 against 16 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 150 of them by lottery to get a daily text program', 'checked every person with the same breath test'], H1: 'The text program helped more smokers quit: 30 in 100 against 16 in 100' },
    reason: { S1: 'Each part holds: a lottery chose who got the texts, and everyone had the same breath test ({cue:S1}).',
              H1: 'The claim is {cue:H1}: it says the texts made the gap, and the lottery lets it say so (45 ÷ 150 = 0.30 against 24 ÷ 150 = 0.16).' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group quit more: it says the text program helped them quit.' } }
]);
