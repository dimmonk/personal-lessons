// Statistical Claims, Unit Two: fresh cases kept back for later days: the first two names, two each.

FC.cases('stats', 'u2', [

  { id: 'ret-samp1', use: 'return', tier: 'varied', setting: 'home', topic: 'households and recycling',
    text: "A city has 120,000 households and wants to know how many sort their trash for recycling. It drew 1,300 addresses by lottery from the utility's full list and sent a visitor to each, returning on another day when nobody was in, until 1,170 households had answered. Of those 1,170, 819 sort their trash, which is 70 in 100. The city says: 'About 70% of the city's households sort their recycling, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ["drew 1,300 addresses by lottery from the utility's full list", 'until 1,170 households had answered'], H1: "About 70% of the city's households sort their recycling, give or take 3 points" },
    reason: { S1: 'Each part holds: a lottery chose the households from a full list, and 1,170 of 1,300 are in the figure ({cue:S1}).',
              H1: 'The claim is {cue:H1}: one figure about one group at one time, and its margin checks out (1 ÷ √1,170 is about 0.029).' },
    not: { outcome: 'meas_ok', why: 'The figure is given once, with no earlier figure for it to have risen or fallen from.' } },

  { id: 'ret-samp2', use: 'return', tier: 'varied', setting: 'learning', topic: 'students and sleep',
    text: "A university has 18,000 students and wants to know how many sleep fewer than six hours on a school night. It drew 700 student numbers by lottery from the registrar's full list, emailed each one, and phoned those who had not answered until 665 had. Of the 665, 266 sleep fewer than six hours, which is 40 in 100. The university says: 'About 40% of our students sleep fewer than six hours on a school night, give or take 4 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ["drew 700 student numbers by lottery from the registrar's full list", 'until 665 had'], H1: 'About 40% of our students sleep fewer than six hours on a school night, give or take 4 points' },
    reason: { S1: 'Each part holds: a lottery chose the students from the full list, and 665 of 700 answered ({cue:S1}).',
              H1: 'The claim is {cue:H1}: one figure about one group, the university’s students. It says nothing about a rise or about another university.' },
    not: { outcome: 'meas_ok', why: 'The claim gives the figure once, and does not follow it through two or more times.' } },

  { id: 'ret-meas1', use: 'return', tier: 'varied', setting: 'learning', topic: 'library loans at a school',
    text: "A school library logs every loan with the same barcode scanner it has used since 2016, and nobody's pay or budget depends on the count. It logged 14,200 loans in the 2021-22 school year and 12,600 in 2022-23. The school says: 'Library loans fell from 14,200 in 2021-22 to 12,600 in 2022-23.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['logs every loan with the same barcode scanner it has used since 2016', 'nobody\'s pay or budget depends on the count'], H1: 'Library loans fell from 14,200 in 2021-22 to 12,600 in 2022-23' },
    reason: { S1: 'Each part holds: the same scanner logged every loan in both years, and nobody could push the count ({cue:S1}).',
              H1: 'The claim is {cue:H1}: one figure followed through two school years, down by 14,200 − 12,600 = 1,600.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one library in two years, with nothing else beside them.' } },

  { id: 'ret-meas2', use: 'return', tier: 'varied', setting: 'money', topic: 'a couple’s savings balance',
    text: "A couple records the balance of their savings account every month from the same bank statement, and nobody is paid or judged on it. The balance was $8,400 in January and $9,600 in December. The couple says: 'Our savings rose from $8,400 in January to $9,600 in December.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records the balance of their savings account every month from the same bank statement'], H1: 'Our savings rose from $8,400 in January to $9,600 in December' },
    reason: { S1: 'Each part holds: the same statement gave the balance each time ({cue:S1}).',
              H1: 'The claim is {cue:H1}: one figure followed through the year, up by 9,600 − 8,400 = $1,200. It does not say why.' },
    not: { outcome: 'samp_ok', why: 'The balance is given at two times and said to have risen. A claim about one group gives the figure once.' } }
]);
