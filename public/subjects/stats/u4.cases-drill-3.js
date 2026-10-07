// Statistical Claims, Unit Four: drill cases for the whole-claim stage, second group (varied).

FC.cases('stats', 'u4', [

  { id: 'm4-rt-poverty', use: 'drill', tier: 'varied', setting: 'money', topic: 'a city that lowered its income line',
    text: "A city reports: 'The share of households in poverty fell from 14% to 11%.' Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000. Of 1,000 households, 140 had incomes under $20,000 in both years and 110 had incomes under $17,000 in both years; incomes did not change.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000",
            M1: "Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000" },
    reason: { S1: 'The share fell with no household better off: {cue:S1}. With last year’s line both years are 140 in 1,000 (14%), and with this year’s line both are 110 (11%).',
              M1: 'What counts as poverty changed: {cue:M1}. The incomes are the same in both years, so the line alone moved the figure by 3 points.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for poor households. The same 1,000 were counted both years, against a different line.' } },

  { id: 'm4-rt-fraud', use: 'drill', tier: 'varied', setting: 'money', topic: 'a bank that reviews far more card payments',
    text: "A bank reports: 'Fraudulent card payments found rose from 400 to 1,200 this year. Fraud is exploding.' Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments. A payment is called fraudulent by the same test in both years. That is 2 found in every 100 reviewed, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments",
            M1: "Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments" },
    reason: { S1: 'The count found can go up with no more fraud happening: {cue:S1}. Three times as many payments were reviewed and three times as many were found (2 in 100 of 20,000 is 400; of 60,000 is 1,200).',
              M1: 'More effort went into finding fraud: {cue:M1}. The test is the same, and the share found among those reviewed stayed at 2 in 100.' },
    not: { outcome: 'defshift', why: 'The test that calls a payment fraudulent is the same in both years. What changed is how many payments the team looked at.' } }
]);
