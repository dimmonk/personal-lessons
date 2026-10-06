// Statistical Claims, Unit Two: drill cases for the route stage, the misleading ones (first part).

FC.cases('stats', 'u2', [

  { id: 'r-meas3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'zoo visitors in June', echo: 'h-reservoir-usual',
    text: "A zoo's gate scanner counts every visitor who walks in, and it has been the same scanner at the same gate for nine years. Nobody's pay depends on the count. The zoo says: 'This June the zoo had 31,000 visitors, 5,000 fewer than the 36,000 it had last June.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['counts every visitor who walks in, and it has been the same scanner at the same gate for nine years'], H1: 'This June the zoo had 31,000 visitors, 5,000 fewer than the 36,000 it had last June' },
    reason: { S1: 'Each part holds. The same scanner has counted every visitor for nine years, and nobody is paid on it: {cue:S1}.',
              H1: 'The claim is {cue:H1}. The words "fewer than" make it sound like one thing set beside another. But both numbers are the zoo’s own visitors, in two Junes, so the claim follows one thing through time: 36,000 − 31,000 = 5,000 fewer.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one zoo at two times. A claim of the other name sets two things side by side, or one thing beside its usual figure.' } },

  { id: 'r-comp3', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'two towns and a free swimming program', echo: 'h-reading-cause',
    text: "Pell and Dunn are towns of about the same size and the same kind of neighborhoods. Pell opened a free swimming program for children in 2022 and Dunn did not. Both towns' health offices gave every child in the same grade the same swim test in 2023: 640 of 800 Pell children passed and 520 of 800 Dunn children did. The report says: 'Pell children passed the swim test more often than Dunn children: 80 in 100 against 65 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['towns of about the same size and the same kind of neighborhoods', 'gave every child in the same grade the same swim test in 2023'], H1: 'Pell children passed the swim test more often than Dunn children: 80 in 100 against 65 in 100' },
    reason: { S1: 'Each part holds. The two towns are alike and every child in the grade was tested the same way: {cue:S1}.',
              H1: 'The claim is {cue:H1}. The program in Pell’s story hints at a cause, but the claim stops at which town passed more: 640 ÷ 800 = 0.80 against 520 ÷ 800 = 0.65.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say the program made the gap, and nothing in the case says a lottery formed the towns into groups.' },
    wouldChange: 'If the report said that the program raised passes, it would be a claim of cause with no lottery behind it, and the first question would not give {a:S1.holds} for it.' }
]);
