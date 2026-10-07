// Statistical Claims, Unit Five: fresh stories kept back for later days (first file: A percentage without the numbers, and Base rate fallacy).
// Two for each name: one for each scheduled return (an action subject has a second, at about twelve weeks). A name that is due comes back as a
// story the learner has not seen, run as a whole route, so every story carries marked words and a reason for both questions.

FC.cases('stats', 'u5', [

  { id: 'ret-rel-1', use: 'return', tier: 'varied', setting: 'money', topic: 'hybrid cars and repairs',
    text: "A car dealer's banner says: 'Owners of our hybrid are 35% less likely to need a repair.' The banner gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'are 35% less likely to need a repair', C1: 'The banner gives no counts' },
    reason: { S1: 'The banner gives its figure as a share of an earlier chance and sets nothing beside it: {cue:S1}.',
              C1: '{cue:C1}, so “35% less likely” could be 20 repairs in 100 cars falling to 13, or 2 in 100 falling to 1.3.' },
    not: { outcome: 'comp_ok', why: 'A claim that holds gives the numbers behind it. This banner gives only the percentage.' } },

  { id: 'ret-rel-2', use: 'return', tier: 'varied', setting: 'learning', topic: 'a college mailer and job offers',
    text: "A college mailer says: 'Graduates of our program are 60% more likely to get a job offer.' The mailer gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'are 60% more likely to get a job offer', C1: 'The mailer gives no counts' },
    reason: { S1: 'The mailer gives a share of an earlier chance and nothing beside it: {cue:S1}.',
              C1: '{cue:C1}, so “60% more likely” could be 50 in 100 getting an offer rising to 80, or 5 in 100 rising to 8.' },
    not: { outcome: 'baserate', why: 'The figure is a change in a chance, given as a percentage. No test is read.' } },

  { id: 'ret-base-1', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a counterfeit pass scanner',
    text: "A park's pass scanner is right 99 times in 100. The attendant says: 'It flagged your pass, so it is fake.' About 1 pass in 1,000 is fake.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A park's pass scanner is right 99 times in 100", C1: 'It flagged your pass, so it is fake' },
    reason: { S1: 'The figure is how often a scanner is right: {cue:S1}.',
              C1: 'The attendant reads {cue:C1}, as if a flag were right 99 times in 100. Out of 100,000 passes, 99 fakes are flagged and 999 real ones too, so a flag is right only about 1 time in 11.' },
    not: { outcome: 'relrisk', why: 'No change is given as a percentage. The figure is how often a scanner is right.' } },

  { id: 'ret-base-2', use: 'return', tier: 'varied', setting: 'health', topic: 'a hospital sepsis alert',
    text: "A hospital's sepsis alert is right 90 times in 100. A nurse says: 'The alert fired, so she has sepsis.' About 1 patient in 50 has sepsis.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { S1: "A hospital's sepsis alert is right 90 times in 100", C1: 'The alert fired, so she has sepsis' },
    reason: { S1: 'The figure is how often an alert is right: {cue:S1}.',
              C1: 'The nurse reads {cue:C1}, as if an alert were right 90 times in 100. Out of 10,000 patients, 180 with sepsis set it off and 980 without sepsis do too, so an alert is right only about 1 time in 6.' },
    not: { outcome: 'simpson', why: 'No two totals are set side by side. The figure is how often an alert is right, read as the chance that one alert is right.' } }
]);
