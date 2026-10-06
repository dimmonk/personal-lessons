// Statistical Claims, Unit Two: drill cases for stage four, continued: the misleading cases, one for each name. Same conventions as the file before it.
// echo names a teaching case whose story this one resembles while its name differs, which is how the "does it look like a case you know?"
// second look is practised.

FC.cases('stats', 'u2', [

  /* ---------- Misleading ---------- */
  { id: 'r-samp3', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a monthly poll of the mayor', echo: 'h-wait-change',
    text: "A polling firm runs the same poll every month. It draws 1,000 adults by lottery from the full list of the city's adults and reaches 950 of them. Its table lists every month back to January: 47 in 100 approved of the mayor in January, 49 in March, 52 this month. But the line the firm gives for the month is: 'About 52% of the city's adults approve of the mayor this month, give or take 3 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['draws 1,000 adults by lottery from the full list of the city\'s adults and reaches 950 of them'], H1: "About 52% of the city's adults approve of the mayor this month, give or take 3 points" },
    reason: { S1: 'Each part holds. A lottery chose the people from a full list, and 950 of 1,000 are in the figure: {cue:S1}.',
              H1: 'The claim is {cue:H1}. The earlier months sit in a table, and the claim does not use them: it gives this month’s figure for the city’s adults and stops. With a margin of 3 points, 47, 49 and 52 are also too close to say that anything rose.' },
    not: { outcome: 'meas_ok', why: 'The claim does not say that the figure rose or fell. It gives this month’s figure, once, and the list of earlier months is not part of what it says.' },
    wouldChange: 'If the line the firm gave said that approval had risen from 47 to 52, the claim would follow one figure through time, and the answer would be {a:H1.change}.' },

  { id: 'r-meas3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'zoo visitors in June', echo: 'h-reservoir-usual',
    text: "A zoo's gate scanner counts every visitor who walks in, and it has been the same scanner at the same gate for nine years. Nobody's pay depends on the count. The zoo says: 'This June the zoo had 31,000 visitors, 5,000 fewer than the 36,000 it had last June.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['counts every visitor who walks in, and it has been the same scanner at the same gate for nine years'], H1: 'This June the zoo had 31,000 visitors, 5,000 fewer than the 36,000 it had last June' },
    reason: { S1: 'Each part holds. The same scanner has counted every visitor for nine years, and nobody is paid on it: {cue:S1}.',
              H1: 'The claim is {cue:H1}. The words "fewer than" make it sound like one thing set beside another. But both numbers are the zoo’s own visitors, in two Junes, so the claim follows one thing through time: 36,000 − 31,000 = 5,000 fewer.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one zoo at two times. A claim of the other name sets two things side by side, or one thing beside its usual figure.' },
    wouldChange: 'If the zoo had set this June beside the average of the last twenty Junes, it would be one thing beside its usual figure, and the answer would be {a:H1.difference}.' },

  { id: 'r-comp3', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'two towns and a free swimming program', echo: 'h-reading-cause',
    text: "Pell and Dunn are towns of about the same size and the same kind of neighborhoods. Pell opened a free swimming program for children in 2022 and Dunn did not. Both towns' health offices gave every child in the same grade the same swim test in 2023: 640 of 800 Pell children passed and 520 of 800 Dunn children did. The report says: 'Pell children passed the swim test more often than Dunn children: 80 in 100 against 65 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['towns of about the same size and the same kind of neighborhoods', 'gave every child in the same grade the same swim test in 2023'], H1: 'Pell children passed the swim test more often than Dunn children: 80 in 100 against 65 in 100' },
    reason: { S1: 'Each part holds. The two towns are alike and every child in the grade was tested the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. The program in Pell’s story hints at a cause, but the claim stops at which town passed more: 640 ÷ 800 = 0.80 against 520 ÷ 800 = 0.65.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say the program made the gap, and nothing in the case says a lottery formed the towns into groups.' },
    wouldChange: 'If the report said that the program raised passes, it would be a claim of cause with no lottery behind it, and the first question would not give {a:S1.holds} for it.' },

  { id: 'r-cause3', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'after-school tutoring across a state', echo: 'h-gauge',
    text: "A state has 400 schools. A computer drew 200 of them by lottery to start an after-school tutoring program in September, and the other 200 carried on as usual. Every student in all 400 schools took the same test in September and again in May. Scores rose in every school over the year: by 5 points on average in the schools without tutoring and by 9 in the schools with it. The state says: 'Tutoring raised scores by 4 points more than ordinary teaching did: a rise of 9 against 5.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 200 of them by lottery to start an after-school tutoring program', 'took the same test in September and again in May'], H1: 'Tutoring raised scores by 4 points more than ordinary teaching did: a rise of 9 against 5' },
    reason: { S1: 'Each part holds. A lottery decided which schools got tutoring, and every student took the same test twice: {cue:S1}.',
              H1: 'The claim is {cue:H1}. Both groups rose, which can sound like a figure followed through time. But the claim is about the gap between the groups, 9 − 5 = 4 points, and says that tutoring made it, which the lottery allows.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group rose more. It says tutoring made the extra rise.' },
    wouldChange: 'If the state had only said that scores rose over the year, in schools without tutoring, it would follow one figure through time, and the answer would be {a:H1.change}.' }
]);
