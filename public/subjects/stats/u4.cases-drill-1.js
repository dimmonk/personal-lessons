// Statistical Claims, Unit Four: drill cases for the first stage (the key's answers are shown, the learner gives the name).
// None of these appears in a card. reason[STEP] is the reason tied to the marked words, shown after the answer, decisive sentence first.
// not names the most tempting wrong name (a look-alike in this unit's ledger) and says why it fails for this case.
// A claim with nothing wrong has an outcome that an earlier unit teaches (the gate answer "holds"); it is here in every stage so the
// learner is never taught that every figure that moved was moved by something else (P26, V37). It carries a reason for this unit's
// question too, because the stage asks it, and marks the words that show nothing could move the figure but the thing itself.

FC.cases('stats', 'u4', [

  /* ---------- Group one: a bonus on a log, more looking in the house, a till that nobody gains from ---------- */
  { id: 'm4-nm-bookslog', use: 'drill', tier: 'clean', setting: 'home', topic: 'a child paid for each book on a chart',
    text: "Maya's parents pay her $1 for every book she logs on the family reading chart, and Maya writes in the chart herself. The books logged each month rose from 2 to 9. The pages she reads in a month, which her teacher counts at school, stayed at about 300 in both months. She is now logging picture books that take ten minutes to finish.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pay her $1 for every book she logs on the family reading chart, and Maya writes in the chart herself",
            M1: "pay her $1 for every book she logs on the family reading chart, and Maya writes in the chart herself" },
    reason: { S1: 'The books logged can rise with no more reading: {cue:S1}. A picture book adds 1 to the count, the same as a novel, so the count went up by 7 (from 2 to 9) while the pages stayed at 300.',
              M1: 'Maya is paid on the figure and she makes the figure: {cue:M1}. The easiest way to raise it is to log shorter books, and that raises the count without raising the reading.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for books Maya reads. What changed is what Maya does with a figure she is paid on.' } },

  { id: 'm4-nm-cracks', use: 'drill', tier: 'clean', setting: 'home', topic: 'a homeowner and a weekend flashlight round',
    text: "Dan tells his wife: 'The house is falling apart. I found 12 cracks in the walls this year and only 3 last year.' Last year he looked at the walls once, in the spring. This year he walked through every room with a flashlight every weekend. Two of the cracks he found were already in the photos the sellers took when they bought the house.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year he looked at the walls once, in the spring. This year he walked through every room with a flashlight every weekend",
            M1: "Last year he looked at the walls once, in the spring. This year he walked through every room with a flashlight every weekend" },
    reason: { S1: 'The count of cracks found can rise with no more cracks appearing: {cue:S1}. He went from one look a year to a look every weekend, and found 4 times as many cracks (12 against 3).',
              M1: 'The effort to find cracks changed, and the claim reads the rise as the house getting worse: {cue:M1}. More looking finds what was already there.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or judged on the number of cracks Dan finds. He did not do anything to the figure; he looked more.' } },

  { id: 'm4-nm-bakery', use: 'drill', tier: 'clean', setting: 'money', topic: 'a bakery till and loaves sold',
    text: "A bakery's till rings up every loaf sold, and the same till has been used for years. Nobody at the bakery is paid or ranked by the count. In the first week of May it counted 410 loaves, and in the first week of September it counted 530. The bakery's prices and opening hours did not change in between. The owner writes in her notes: 'Loaves sold per week rose from 410 to 530.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same till has been used for years. Nobody at the bakery is paid or ranked by the count",
            H1: "Loaves sold per week rose from 410 to 530",
            M1: "the same till has been used for years. Nobody at the bakery is paid or ranked by the count" },
    reason: { S1: 'Every part holds: {cue:S1}. One till counted every loaf both times, nobody gains from a higher count, and the prices and hours did not change, so nothing besides the loaves themselves could move the count.',
              H1: 'The claim gives one figure for one thing at two times and says it rose: {cue:H1}. It sets the figure beside nothing else and says nothing about why.',
              M1: 'Nothing in the case could move the figure besides the loaves sold: {cue:M1}. The same tool counted both times, and nobody is paid on the count.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or ranked on the count, so nobody could raise it without selling more loaves.' } },

  /* ---------- Group two: a shorter list of who is absent, more auditors, a step challenge ---------- */
  { id: 'm4-nm-absence', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a school that marks only whole-morning absences',
    text: "A school reports: 'Absences fell from 8% of pupil-mornings to 5% this year.' Until last year a pupil who arrived more than 10 minutes after the bell was marked absent for that morning. This year a pupil is marked absent only if they miss the whole morning. In both years, out of every 1,000 pupil-mornings, pupils missed the whole morning in 50 and arrived more than 10 minutes late in 30.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year a pupil who arrived more than 10 minutes after the bell was marked absent for that morning. This year a pupil is marked absent only if they miss the whole morning",
            M1: "Until last year a pupil who arrived more than 10 minutes after the bell was marked absent for that morning. This year a pupil is marked absent only if they miss the whole morning" },
    reason: { S1: 'The figure fell with nobody coming to school more: {cue:S1}. Counted last year’s way, this year is 50 + 30 = 80 in every 1,000, which is 8%; counted this year’s way, last year was 50 in every 1,000, which is 5%.',
              M1: 'What counts as absent changed: {cue:M1}. The pupils did the same in both years, and only the definition moved the figure from 8% to 5%.' },
    not: { outcome: 'detection', why: 'No more effort went into finding absent pupils. The pupils who arrive late were found both years; they stopped being counted as absent.' } },

  { id: 'm4-nm-audit', use: 'drill', tier: 'clean', setting: 'money', topic: 'a tax office and a larger staff of auditors',
    text: "A tax office announces: 'Tax returns found to hide income rose from 560 to 700 this year. Small-business owners are cheating more.' The office hired 100 more auditors, and audited 5,000 returns this year, up from 4,000. The returns are chosen the same way and the standard for hiding income did not change. That is 14 found in every 100 audited in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "The office hired 100 more auditors, and audited 5,000 returns this year, up from 4,000",
            M1: "The office hired 100 more auditors, and audited 5,000 returns this year, up from 4,000" },
    reason: { S1: 'The count of returns found can rise with no more owners cheating: {cue:S1}. Of 4,000 audited, 14 in every 100 is 560; of 5,000, 14 in every 100 is 700.',
              M1: 'More effort went into finding the thing: {cue:M1}. The share found among those audited stayed at 14 in every 100, so the rise in the count comes from auditing 1,000 more returns.' },
    not: { outcome: 'defshift', why: 'The standard for hiding income and the way returns are chosen are the same in both years. What changed is how many returns were looked at.' } },

  { id: 'm4-nm-steps', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'an office contest on wristband steps',
    text: "An office step challenge gives the team with the highest average steps a day off, and each person reports the total from a wristband they wear. The winning team's average was 7,000 steps a day before the challenge and 15,000 during it. Some of its members say they leave the band on a dog's collar during the day. The office's own count of people seen walking to the lunch place did not change.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives the team with the highest average steps a day off, and each person reports the total from a wristband they wear",
            M1: "gives the team with the highest average steps a day off, and each person reports the total from a wristband they wear" },
    reason: { S1: 'The average steps can rise with no more walking: {cue:S1}. It went up by 8,000 a day (from 7,000 to 15,000), and the lunch-place count did not move.',
              M1: 'The people measured gain from a higher figure and report it themselves: {cue:M1}. A band on a dog raises the steps a day without a person taking one.' },
    not: { outcome: 'defshift', why: 'The band counts steps the same way throughout. What changed is what the people being counted do with the figure.' } },

  /* ---------- Group three: a shortened window, more cameras on a trail ---------- */
  { id: 'm4-nm-readmit', use: 'drill', tier: 'varied', setting: 'health', topic: 'a hospital that shortened its return window',
    text: "A hospital reports: 'Patients sent back to hospital within a month of leaving fell from 12 in every 100 to 7 in every 100.' Until last year the hospital counted a patient as sent back if they returned within 30 days of leaving. This year it counts only those who return within 7 days. In both years, of every 100 patients, 7 returned within 7 days and 5 more returned between day 8 and day 30.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year the hospital counted a patient as sent back if they returned within 30 days of leaving. This year it counts only those who return within 7 days",
            M1: "Until last year the hospital counted a patient as sent back if they returned within 30 days of leaving. This year it counts only those who return within 7 days" },
    reason: { S1: 'The figure fell with no fewer patients coming back: {cue:S1}. Counted the 30-day way, both years are 7 + 5 = 12 in every 100; counted the 7-day way, both are 7.',
              M1: 'What counts as sent back changed, from 30 days to 7: {cue:M1}. The claim still says "within a month", but the count no longer covers a month.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for patients who return. The same returns happened both years; this year only some of them are counted.' } },

  { id: 'm4-nm-trailcams', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a wildlife park and thirty more motion cameras',
    text: "A wildlife park reports: 'Photos of mountain lions rose from 6 to 18 a year. Lions are multiplying in the park.' The park added 30 motion cameras along its trails this year, up from 10. The park's own count of lion tracks in the snow, made along the same trails by the same rangers, was 40 last winter and 40 this winter.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "The park added 30 motion cameras along its trails this year, up from 10",
            M1: "The park added 30 motion cameras along its trails this year, up from 10" },
    reason: { S1: 'The count of photos can rise with no more lions: {cue:S1}. With three times the cameras the photos are three times as many (10 cameras, 6 photos; 30 cameras, 18), which is 0.6 photos a camera in both years.',
              M1: 'More cameras means more looking: {cue:M1}. The count of tracks, made the same way, stayed at 40.' },
    not: { outcome: 'defshift', why: 'The cameras are the same kind used the same way, so how a lion is counted did not change. There are more of them looking.' } }
]);
