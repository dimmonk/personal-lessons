// Statistical Claims, Unit Four: drill cases for the second stage (one question at a time) .
// The first four are asked the gate's question alone, in pairs that put a moved figure beside a claim with nothing wrong; the next four
// are asked this unit's question alone. Both kinds carry marked words and a reason for both questions, because a case can be asked more
// than one way.

FC.cases('stats', 'u4', [

  /* ---------- Stage two, the gate's question alone: a moved figure beside a claim that holds ---------- */
  { id: 'm4-pc-quota', use: 'drill', tier: 'clean', setting: 'money', topic: 'a bank manager bonus on new accounts',
    text: "A bank gives each branch manager a bonus when the branch opens 1,000 new accounts a month, and each manager signs off on every new account. Accounts opened at one branch rose from 400 a month to 1,100. Over the same months, the number of accounts that had any money paid into them within 90 days went from 300 to 310.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives each branch manager a bonus when the branch opens 1,000 new accounts a month, and each manager signs off on every new account",
            M1: "gives each branch manager a bonus when the branch opens 1,000 new accounts a month, and each manager signs off on every new account" },
    reason: { S1: 'The count of accounts opened can rise with no more customers wanting accounts: {cue:S1}. It rose by 700 a month while accounts with any money in them rose by 10.',
              M1: 'The manager is paid on the count and signs off on each account: {cue:M1}. Opening accounts nobody asked for raises the count at once.' },
    not: { outcome: 'meas_ok', why: 'The managers are paid on this figure and sign off on every account, so it could rise with no real change. The count of accounts that hold money did not follow it.' } },

  { id: 'm4-pc-garden', use: 'drill', tier: 'clean', setting: 'home', topic: 'a garden rain gauge in June',
    text: "Ilse reads the same rain gauge in her garden every morning at 8, and has done for years. Nobody gains or loses by what it reads. In one June it collected 62 mm of rain, and in the next June 41 mm. She writes in her notebook: 'June rain fell from 62 mm to 41 mm.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same rain gauge in her garden every morning at 8, and has done for years. Nobody gains or loses by what it reads",
            H1: "June rain fell from 62 mm to 41 mm" },
    reason: { S1: 'Every part holds: {cue:S1}. One gauge was read the same way at the same hour, and nobody has a reason to push the reading, so nothing besides the rain could move it.',
              H1: 'The claim gives one figure at two times and says it fell: {cue:H1}. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'defshift', why: 'The gauge, the hour and the way of reading it did not change, so there is no change in how the rain is counted.' } },

  { id: 'm4-pc-repairs', use: 'drill', tier: 'clean', setting: 'community', topic: 'a housing agency and when a repair wait begins',
    text: "A housing agency reports: 'Repair requests left waiting more than 30 days fell from 500 to 200.' Until last year the wait was counted from the day a tenant called. This year it is counted from the day an inspector visits and writes the job up, which can be weeks after the call. Counted from the call, 500 requests were more than 30 days old last year and 500 this year.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year the wait was counted from the day a tenant called. This year it is counted from the day an inspector visits and writes the job up",
            M1: "Until last year the wait was counted from the day a tenant called. This year it is counted from the day an inspector visits and writes the job up" },
    reason: { S1: 'The figure fell with no tenant waiting less: {cue:S1}. Counted from the call, 500 waited more than 30 days in both years, and the figure of 200 comes from starting the clock later.',
              M1: 'The point where the wait begins moved: {cue:M1}. The tenants waited the same time, and the new definition counts fewer of them as waiting more than 30 days.' },
    not: { outcome: 'meas_ok', why: 'The figure could fall with no change in the waiting itself, because the wait is counted from a different day than before.' } },

  { id: 'm4-pc-pool', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a community pool gate counter in July',
    text: "A community pool's gate counter clicks once for each paying person who walks through, and the same gate and counter have been used for years. Nobody is paid or ranked by the count, and the entry price did not change. Paid entries in July rose from 3,100 to 3,800. The pool's report says: 'July entries rose from 3,100 to 3,800.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same gate and counter have been used for years. Nobody is paid or ranked by the count, and the entry price did not change",
            H1: "July entries rose from 3,100 to 3,800" },
    reason: { S1: 'Every part holds: {cue:S1}. One counter counted the same way, nobody gains from a higher count, and the price did not change, so nothing besides the visits could move it.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'detection', why: 'Nobody put more effort into counting entries. The same gate and counter counted both Julys.' } },

  /* ---------- Stage two, this unit's question alone ---------- */
  { id: 'm4-pm-sales', use: 'drill', tier: 'clean', setting: 'work', topic: 'a shoe chain bonus on sales rung up',
    text: "A shoe chain pays sales staff a bonus for every pair 'sold', and staff ring up a sale themselves as soon as a customer takes a pair to the fitting room. Pairs 'sold' per week rose from 200 to 380 after the bonus began. The door scanner, which counts pairs carried out of the shop in bags, counted 200 a week before the bonus and 200 after.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays sales staff a bonus for every pair 'sold', and staff ring up a sale themselves as soon as a customer takes a pair to the fitting room",
            M1: "pays sales staff a bonus for every pair 'sold', and staff ring up a sale themselves as soon as a customer takes a pair to the fitting room" },
    reason: { S1: 'The count of pairs sold can rise with no more shoes leaving the shop: {cue:S1}. It rose by 180 a week while the scanner count stayed at 200.',
              M1: 'The staff are paid on the figure and ring it up themselves: {cue:M1}. Ringing up a sale early is easier than selling more.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for sales. The staff gain from the figure and make it, which is a different way for it to move.' } },

  { id: 'm4-pm-dumping', use: 'drill', tier: 'clean', setting: 'community', topic: 'a town and more inspectors on the roads',
    text: "A town says: 'Reports of illegal dumping on town roads rose from 50 to 200 a month. Dumping has quadrupled.' This year the town hired two more inspectors to drive its roads, and the kilometers driven each month went from 500 to 2,000. An inspector records dumping by the same standard as before. That is 1 found for every 10 km driven, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "This year the town hired two more inspectors to drive its roads, and the kilometers driven each month went from 500 to 2,000",
            M1: "This year the town hired two more inspectors to drive its roads, and the kilometers driven each month went from 500 to 2,000" },
    reason: { S1: 'The count can rise with no more dumping: {cue:S1}. Four times the kilometers driven found four times as much, at 1 for every 10 km in both years (50 in 500 km, 200 in 2,000 km).',
              M1: 'More effort went into finding it: {cue:M1}. The inspectors found dumping at the same rate per kilometer, so the rise follows the driving.' },
    not: { outcome: 'proxy', why: 'The inspectors are not paid by the number they find. They simply covered four times as many roads.' } },

  { id: 'm4-pm-math', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a school district and a newer edition of a yearly exam',
    text: "A school district reports: 'The average math score rose from 58 to 66 this year.' The district replaced its yearly math exam with a newer edition. On a day when 300 pupils sat both editions, the old one averaged 58 and the new one averaged 66. The pupils' ages and the subjects covered are the same.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "The district replaced its yearly math exam with a newer edition. On a day when 300 pupils sat both editions, the old one averaged 58 and the new one averaged 66",
            M1: "The district replaced its yearly math exam with a newer edition. On a day when 300 pupils sat both editions, the old one averaged 58 and the new one averaged 66" },
    reason: { S1: 'The average can rise with pupils learning nothing more: {cue:S1}. The same 300 pupils scored 8 points higher on the new edition (66 against 58), which is the whole rise.',
              M1: 'The exam used to measure the pupils is a different one: {cue:M1}. A new tool can read higher or lower than the old one.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or ranked on the score here. What changed is the exam that makes the score.' } },

  { id: 'm4-pm-flu', use: 'drill', tier: 'clean', setting: 'health', topic: 'a clinic and weekend nurses for flu swabs',
    text: "A clinic says: 'Flu diagnoses doubled this winter, from 100 to 200. Flu is spreading.' Last winter a nurse swabbed patients with a cough on weekdays only. This winter a second nurse swabbed them on weekends too, so 2,000 patients were swabbed against 1,000 the winter before. The same swab test and the same standard were used. That is 10 found in every 100 swabbed, in both winters.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last winter a nurse swabbed patients with a cough on weekdays only. This winter a second nurse swabbed them on weekends too, so 2,000 patients were swabbed against 1,000 the winter before",
            M1: "Last winter a nurse swabbed patients with a cough on weekdays only. This winter a second nurse swabbed them on weekends too, so 2,000 patients were swabbed against 1,000 the winter before" },
    reason: { S1: 'The count of diagnoses can rise with no more flu: {cue:S1}. Twice as many were swabbed and twice as many were found (10 in every 100 of 1,000 is 100; of 2,000 is 200).',
              M1: 'More tests were done with the same test: {cue:M1}. The share found among those swabbed stayed at 10 in 100.' },
    not: { outcome: 'defshift', why: 'The swab test and the standard for a positive are the same. What changed is how many people were swabbed.' } }
]);
