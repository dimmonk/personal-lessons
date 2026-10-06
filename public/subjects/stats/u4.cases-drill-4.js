// Statistical Claims, Unit Four: drill cases for the fourth stage (the whole route alone), clean and varied groups.
// Every case is asked both of the key's questions, the gate's first, so each carries marked words and a reason for both. A claim with
// nothing wrong asks the second question of its own branch (the sound claims' question), so it carries marked words for that.
// wouldChange is shown after the answer, under "What would make it a different name".

FC.cases('stats', 'u4', [

  /* ---------- Group one (clean): the three ways a figure is moved, and a claim that holds ---------- */
  { id: 'm4-rt-pledges', use: 'drill', tier: 'clean', setting: 'money', topic: 'a charity bonus on pledges entered',
    text: "A charity gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call. Pledges entered per month rose from 300 to 800 after the bonus began, and the fundraisers began entering a pledge when a donor said 'maybe'. Money actually paid in each month, from the bank's records, was $24,000 before and $24,500 after.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call",
            M1: "gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call" },
    reason: { S1: 'The count of pledges can rise with no more money coming in: {cue:S1}. The count rose by 500 a month, and the bank’s records rose by $500.',
              M1: 'The fundraisers are paid on the figure and enter it themselves: {cue:M1}. Entering a "maybe" raises it at once; getting a donor to pay takes work.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for pledges. The fundraisers gain from the figure and make it, which is a different way for it to move.' },
    wouldChange: 'If a donor’s pledge counted only when the bank received the money, and the fundraisers were paid a flat wage, a rise in the figure could no longer be pushed, and the claim could be {o:meas_ok}.' },

  { id: 'm4-rt-safety', use: 'drill', tier: 'clean', setting: 'work', topic: 'a factory with a reporting box on every floor',
    text: "A factory reports: 'Safety incidents reported rose from 24 to 71 this year. Our plant is getting more dangerous.' In January the factory put a reporting box on every floor and held a month of 'report everything' talks. Injuries that sent a worker home, which payroll counts, were 6 last year and 6 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "put a reporting box on every floor and held a month of 'report everything' talks",
            M1: "put a reporting box on every floor and held a month of 'report everything' talks" },
    reason: { S1: 'The count of incidents reported can rise with no more danger: {cue:S1}. Payroll’s count of injuries that sent a worker home stayed at 6.',
              M1: 'Finding incidents became easier and was encouraged: {cue:M1}. Small incidents that were always there now get written down.' },
    not: { outcome: 'proxy', why: 'Nobody is paid by the number of reports. The factory made reporting easier, so more of the incidents that were already happening were found.' },
    wouldChange: 'If staff were paid for each report they filed, the figure could also be pushed, and the claim would show more than one way for the figure to move. The case says nobody is.' },

  { id: 'm4-rt-library', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a school library scanner and loans each October',
    text: "A school library's scanner logs every book checked out, and the same scanner has been used for years. Nobody is paid or ranked by the count, and the loan period did not change. Books checked out in October rose from 1,200 to 1,500. The librarian's note says: 'October loans rose from 1,200 to 1,500.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same scanner has been used for years. Nobody is paid or ranked by the count, and the loan period did not change",
            H1: "October loans rose from 1,200 to 1,500" },
    reason: { S1: 'Every part holds: {cue:S1}. One scanner counted the same way, nobody gains from a higher count, and the loan period did not change, so nothing besides the borrowing could move it.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. Arithmetic: 1,500 − 1,200 = 300 more loans. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or ranked on the count, so nobody could raise it without more books being borrowed.' },
    wouldChange: 'If the librarian were paid a bonus for each loan and entered them by hand, the figure could be pushed, and the name would change.' },

  /* ---------- Group two (varied): a moved poverty line, a teacher who grades her own exam, more fraud reviews ---------- */
  { id: 'm4-rt-poverty', use: 'drill', tier: 'varied', setting: 'money', topic: 'a city that lowered its income line',
    text: "A city reports: 'The share of households in poverty fell from 14% to 11%.' Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000. Of 1,000 households, 140 had incomes under $20,000 in both years and 110 had incomes under $17,000 in both years; incomes did not change.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000",
            M1: "Last year a household of four counted as in poverty if its income was under $20,000. This year the line is $17,000" },
    reason: { S1: 'The share fell with no household better off: {cue:S1}. Counted with last year’s line, both years are 140 in 1,000, which is 14%; counted with this year’s, both are 110, which is 11%.',
              M1: 'What counts as poverty changed: {cue:M1}. The households’ incomes are the same in both years, so the line alone moved the figure by 3 points.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for poor households. The same 1,000 were counted both years, against a different line.' },
    wouldChange: 'If the line stayed at $20,000 in both years and the share still fell from 14% to 11%, nothing in the case would move the figure but the households, and it could be {o:meas_ok}.' },

  { id: 'm4-rt-grades', use: 'drill', tier: 'varied', setting: 'learning', topic: 'a teacher who marks her own class exam',
    text: "A teacher grades her own class's final exam, and her bonus rises with the share of her students who score 50 or more. The share rose from 60 in every 100 to 90 in every 100. This year she began adding 10 points to any sheet that is filled in completely. An outside grader who graded 20 of the same exams, without the bonus points, found 12 of the 20 scoring 50 or more, as in the year before.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "her bonus rises with the share of her students who score 50 or more",
            M1: ["her bonus rises with the share of her students who score 50 or more", "This year she began adding 10 points to any sheet that is filled in completely"] },
    reason: { S1: 'The share passing can rise with no student knowing more: {cue:S1}. It rose from 60 to 90 in every 100, and the outside grader’s 12 of 20 is 60 in every 100 again.',
              M1: 'The person paid on the figure also makes the figure: {cue:M1}. Ten bonus points for a filled-in sheet lift a score without lifting what the student knows.' },
    not: { outcome: 'defshift', why: 'The exam and the pass mark are the same in both years. What changed is that the person who grades is paid on the result and added points.' },
    wouldChange: 'If an outside grader graded every exam without knowing the class, and the teacher had no say over it, the teacher could no longer push the figure, and the claim could be {o:meas_ok}.' },

  { id: 'm4-rt-fraud', use: 'drill', tier: 'varied', setting: 'money', topic: 'a bank that reviews far more card payments',
    text: "A bank reports: 'Fraudulent card payments found rose from 400 to 1,200 this year. Fraud is exploding.' Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments. A payment is called fraudulent by the same test in both years. That is 2 found in every 100 reviewed, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments",
            M1: "Last year the fraud team reviewed every card payment over $5,000, about 20,000 payments. This year it reviews every payment over $500, about 60,000 payments" },
    reason: { S1: 'The count found can rise with no more fraud happening: {cue:S1}. Three times as many payments were reviewed and three times as many were found (2 in every 100 of 20,000 is 400; of 60,000 is 1,200).',
              M1: 'More effort went into finding it: {cue:M1}. The test for fraud is the same, and the share found among those reviewed stayed at 2 in 100.' },
    not: { outcome: 'defshift', why: 'The test that calls a payment fraudulent is the same in both years. What changed is how many payments the team looked at.' },
    wouldChange: 'If the team had switched to a new test that calls more payments fraudulent, with the same number reviewed, the case would be {o:defshift}.' },

  /* ---------- Group three (varied): a new blood pressure cuff, a dock scanner nobody gains from ---------- */
  { id: 'm4-rt-cuffs', use: 'drill', tier: 'varied', setting: 'health', topic: 'a clinic that bought a new model of cuff',
    text: "A clinic reports: 'Average blood pressure among our patients rose from 122 to 128 this year.' In April the clinic replaced its blood pressure cuffs with a new model. Forty patients measured with both models on the same day read about 6 points higher on the new one.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In April the clinic replaced its blood pressure cuffs with a new model. Forty patients measured with both models on the same day read about 6 points higher on the new one",
            M1: "In April the clinic replaced its blood pressure cuffs with a new model. Forty patients measured with both models on the same day read about 6 points higher on the new one" },
    reason: { S1: 'The average can rise with no patient’s blood pressure higher: {cue:S1}. The two models differ by 6 points on the same people (128 − 122 = 6), which is the whole rise.',
              M1: 'The tool that measures was replaced: {cue:M1}. A new tool can read higher or lower than the old one on the same patient.' },
    not: { outcome: 'meas_ok', why: 'The figure could rise with no patient changing, because the new cuffs read higher. A rise in a figure is only the real thing moving when it is counted the same way at both ends.' },
    wouldChange: 'If the clinic had kept its old cuffs, nothing in the case would move the figure but the patients, and it could be {o:meas_ok}.' },

  { id: 'm4-rt-pallets', use: 'drill', tier: 'varied', setting: 'work', topic: 'a warehouse dock door and pallets shipped',
    text: "A warehouse scans each pallet at the same dock door as it is loaded, and nobody is paid or ranked by the number scanned. The door and the scanner have not changed. Pallets shipped per week rose from 1,000 in January to 1,200 in June. The manager's report says: 'Weekly pallets shipped rose from 1,000 to 1,200 between January and June.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "at the same dock door as it is loaded, and nobody is paid or ranked by the number scanned. The door and the scanner have not changed",
            H1: "Weekly pallets shipped rose from 1,000 to 1,200 between January and June" },
    reason: { S1: 'Every part holds: {cue:S1}. One door and one scanner counted the same way, and nobody gains from a higher count, so nothing besides the pallets leaving could move it.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. Arithmetic: 1,200 − 1,000 = 200 more a week. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'defshift', why: 'The door and the scanner are unchanged, so nothing about how the pallets are counted changed.' },
    wouldChange: 'If the scanner had been replaced in the spring by a model that also scans pallets moved inside the building, the case would be {o:defshift}.' }
]);
