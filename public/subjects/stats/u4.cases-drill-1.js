// Statistical Claims, Unit Four: drill cases for the first stage (one question at a time).

FC.cases('stats', 'u4', [

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

  { id: 'm4-pm-math', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a school district and a newer edition of a yearly exam',
    text: "A school district reports: 'The average math score rose from 58 to 66 this year.' The district replaced its yearly math exam with a newer edition. On a day when 300 students sat both editions, the old one averaged 58 and the new one averaged 66. The students' ages and the subjects covered are the same.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "The district replaced its yearly math exam with a newer edition. On a day when 300 students sat both editions, the old one averaged 58 and the new one averaged 66",
            M1: "The district replaced its yearly math exam with a newer edition. On a day when 300 students sat both editions, the old one averaged 58 and the new one averaged 66" },
    reason: { S1: 'The average can rise with students learning nothing more: {cue:S1}. The same 300 students scored 8 points higher on the new edition (66 against 58), which is the whole rise.',
              M1: 'The exam used to measure the students is a different one: {cue:M1}. A new tool can read higher or lower than the old one.' },
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
