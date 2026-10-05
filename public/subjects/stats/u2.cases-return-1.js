// Statistical Claims, Unit Two: fresh cases kept back for later days (first file: the first two names, four cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked words and a reason for both
// questions. Four cases for each name: one for each scheduled return, and the fourth is the late one at about twelve weeks (E9, action subject).

FC.cases('stats', 'u2', [

  /* ---------- A figure for one group ---------- */
  { id: 'ret-samp1', use: 'return', tier: 'varied', setting: 'home', topic: 'households and recycling',
    text: "A city has 120,000 households and wants to know how many sort their trash for recycling. It drew 1,300 addresses by lottery from the utility's full list and sent a visitor to each, returning on another day when nobody was in, until 1,170 households had answered. Of those 1,170, 819 sort their trash, which is 70 in 100. The city says: 'About 70% of the city's households sort their recycling, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ["drew 1,300 addresses by lottery from the utility's full list", 'until 1,170 households had answered'], H1: "About 70% of the city's households sort their recycling, give or take 3 points" },
    reason: { S1: 'Each part holds. A lottery chose the households from a full list, and 1,170 of 1,300 are in the figure: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group at one time, and its margin checks: 1 ÷ √1,170 is about 0.029.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once. No earlier figure is in the claim for it to have risen or fallen from.' } },

  { id: 'ret-samp2', use: 'return', tier: 'varied', setting: 'learning', topic: 'students and sleep',
    text: "A university has 18,000 students and wants to know how many sleep fewer than six hours on a school night. It drew 700 student numbers by lottery from the registrar's full list, emailed each one, and phoned those who had not answered until 665 had. Of the 665, 266 sleep fewer than six hours, which is 40 in 100. The university says: 'About 40% of our students sleep fewer than six hours on a school night, give or take 4 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ["drew 700 student numbers by lottery from the registrar's full list", 'until 665 had'], H1: 'About 40% of our students sleep fewer than six hours on a school night, give or take 4 points' },
    reason: { S1: 'Each part holds. A lottery chose the students from the full list, and 665 of 700 answered: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group, the university’s students, and says nothing about whether it rose or differs from another university.' },
    not: { outcome: 'meas_ok', why: 'The claim gives the figure once. It does not follow it through two or more times.' } },

  { id: 'ret-samp3', use: 'return', tier: 'varied', setting: 'money', topic: 'card holders and unpaid balances',
    text: "A bank has 200,000 card holders and wants to know how many carry an unpaid balance from month to month. It drew 1,500 account numbers by lottery from its full list and sent a form to each, then phoned the ones who had not answered until 1,425 had. Of the 1,425, 570 carry a balance, which is 40 in 100. The bank says: 'About 40% of our card holders carry a balance from month to month, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 1,500 account numbers by lottery from its full list', 'until 1,425 had'], H1: 'About 40% of our card holders carry a balance from month to month, give or take 3 points' },
    reason: { S1: 'Each part holds. A lottery chose the accounts from a full list, and 95 in 100 of those chosen answered: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group at one time. The 1,500 chosen are under 1 in 100 of the 200,000, and that does not matter, because the margin comes from how many are in the figure.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once, and nothing in the claim says it rose or fell.' } },

  { id: 'ret-samp4', use: 'return', tier: 'varied', setting: 'leisure', topic: 'park permits and overnight camping',
    text: "A national park issued 30,000 camping permits last summer and wants to know how many permit holders stayed overnight. It drew 600 permit numbers by lottery from the full list and phoned each one up to four times, reaching 540. Of the 540, 324 stayed overnight, which is 60 in 100. The park says: 'About 60% of last summer's permit holders stayed overnight, give or take 4 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 600 permit numbers by lottery from the full list', 'reaching 540'], H1: "About 60% of last summer's permit holders stayed overnight, give or take 4 points" },
    reason: { S1: 'Each part holds. A lottery chose the permits from a full list, and 540 of 600 were reached: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It gives one figure about one group for one summer, with a margin of about 1 ÷ √540 = 0.043. It says nothing about change or cause.' },
    not: { outcome: 'meas_ok', why: 'The claim gives the figure once, for one summer.' } },

  /* ---------- A rise or fall in one figure ---------- */
  { id: 'ret-meas1', use: 'return', tier: 'varied', setting: 'learning', topic: 'library loans at a school',
    text: "A school library logs every loan with the same barcode scanner it has used since 2016, and nobody's pay or budget depends on the count. It logged 14,200 loans in the 2021-22 school year and 12,600 in 2022-23. The school says: 'Library loans fell from 14,200 in 2021-22 to 12,600 in 2022-23.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['logs every loan with the same barcode scanner it has used since 2016', 'nobody\'s pay or budget depends on the count'], H1: 'Library loans fell from 14,200 in 2021-22 to 12,600 in 2022-23' },
    reason: { S1: 'Each part holds. The same scanner logged every loan in both years, and nobody could push the count: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It follows one figure through two school years and says that it fell, by 14,200 − 12,600 = 1,600.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one library in two years. Nothing else is set beside the figure.' } },

  { id: 'ret-meas2', use: 'return', tier: 'varied', setting: 'money', topic: 'a couple’s savings balance',
    text: "A couple records the balance of their savings account every month from the same bank statement, and nobody is paid or judged on it. The balance was $8,400 in January and $9,600 in December. The couple says: 'Our savings rose from $8,400 in January to $9,600 in December.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records the balance of their savings account every month from the same bank statement'], H1: 'Our savings rose from $8,400 in January to $9,600 in December' },
    reason: { S1: 'Each part holds. The same statement gave the balance each time: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It follows one figure through the year and says that it rose, by 9,600 − 8,400 = $1,200. It does not say why.' },
    not: { outcome: 'samp_ok', why: 'The claim gives the balance at two times and says it rose. A claim of the other name gives a figure once.' } },

  { id: 'ret-meas3', use: 'return', tier: 'varied', setting: 'health', topic: 'a man’s weight on one scale',
    text: "A man weighs himself every morning on the same bathroom scale and writes the number down. Nobody is paid or judged on it. His average weight was 92.0 kilograms in March and 88.5 in June. He says: 'My weight fell from 92.0 kilograms in March to 88.5 in June.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['weighs himself every morning on the same bathroom scale'], H1: 'My weight fell from 92.0 kilograms in March to 88.5 in June' },
    reason: { S1: 'Each part holds. The same scale was used each time: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It follows one figure through three months and says that it fell, by 92.0 − 88.5 = 3.5 kilograms. It does not say why.' },
    not: { outcome: 'samp_ok', why: 'The claim gives the figure at two times and says it fell.' } },

  { id: 'ret-meas4', use: 'return', tier: 'varied', setting: 'community', topic: 'registered beehives in a county',
    text: "A county beekeepers' society counts every hive in the county each spring from the same registration form, and nobody is paid for each hive registered. It counted 310 hives in 2020 and 365 in 2024. The society says: 'Registered beehives in the county rose from 310 in 2020 to 365 in 2024.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['counts every hive in the county each spring from the same registration form'], H1: 'Registered beehives in the county rose from 310 in 2020 to 365 in 2024' },
    reason: { S1: 'Each part holds. The same form counts every hive each spring, and nobody is paid on the number: {cue:S1}.',
              H1: 'The claim is {cue:H1}. It follows one figure through four years and says that it rose, by 365 − 310 = 55, which is about 18 in 100.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one county in two years. Nothing else is set beside the figure.' } }
]);
