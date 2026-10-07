// Statistical Claims, Unit Two: drill cases for the piece stage (the question alone, on a new case).

FC.cases('stats', 'u2', [

  { id: 'p-pets', use: 'drill', tier: 'clean', setting: 'money', topic: 'account holders and a phone app',
    text: "A bank wants to know how many of its 50,000 account holders use its phone app. It drew 700 account numbers by computer lottery from the full list, emailed each one, and phoned those who had not answered until 651 had. Of the 651, 391 use the app, which is 60 in 100. The bank says: 'About 60% of our account holders use our phone app.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 700 account numbers by computer lottery from the full list', 'until 651 had'], H1: 'About 60% of our account holders use our phone app' },
    reason: { H1: 'The claim is {cue:H1}: one figure about one group at one time. The 651 answers out of 700 are why it holds, but the claim says nothing about change or cause.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once, with no earlier figure for it to have risen from.' } },

  { id: 'p-ferry', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'ferry passengers in July',
    text: "A ferry company counts every passenger with the same turnstile at the dock, and nobody's pay depends on the count. It carried 82,000 passengers in July last year and 91,000 this July. The company says: 'July passengers rose from 82,000 to 91,000.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['counts every passenger with the same turnstile at the dock'], H1: 'July passengers rose from 82,000 to 91,000' },
    reason: { H1: 'The claim is {cue:H1}: it follows the ferry’s passengers through two Julys and says they rose by 91,000 − 82,000 = 9,000.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one ferry in two years, with nothing else set beside it.' } },

  { id: 'p-ward', use: 'drill', tier: 'clean', setting: 'health', topic: 'infections in two surgical wards',
    text: "A health authority compares two hospitals' surgical wards. Both do the same kinds of operations, define an infection the same way and checked every patient. Hospital A had 18 infections among 900 patients, and Hospital B had 36 among 950. The authority says: 'Hospital B had more infections: 4 in 100 patients against 2 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both do the same kinds of operations, define an infection the same way and checked every patient'], H1: 'Hospital B had more infections: 4 in 100 patients against 2 in 100' },
    reason: { H1: 'The claim is {cue:H1}: two wards of one sort side by side, with the numbers behind each (18 ÷ 900 = 0.02 and 36 ÷ 950, about 0.04). It says which had more and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what made Hospital B’s number higher, and no lottery formed the hospitals into groups.' } },

  { id: 'f-calls', use: 'drill', tier: 'varied', setting: 'health', topic: 'a reminder call before an appointment',
    text: "A hospital drew 250 of 500 patients by lottery to get a reminder phone call the day before their appointment. The other 250 got none. The hospital counted every missed appointment the same way for both groups over three months: 20 in the called group and 45 in the other. The hospital says: 'The reminder call cut missed appointments: 8 in 100 against 18 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 250 of 500 patients by lottery to get a reminder phone call', 'counted every missed appointment the same way for both groups'], H1: 'The reminder call cut missed appointments: 8 in 100 against 18 in 100' },
    reason: { H1: 'The claim is {cue:H1}: it says the call made the gap, and the lottery lets it say so (20 ÷ 250 = 0.08 against 45 ÷ 250 = 0.18). No {t:placebo} was needed, because the second group simply got the usual.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group missed more: it says the call cut missed appointments.' } }
]);
