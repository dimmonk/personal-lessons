// Statistical Claims, Unit One: fresh cases held back for later days, part two: the last two families (what the claim says caused what,
// and nothing goes wrong). Field guide: see u1.cases-return-1.js.

FC.cases('stats', 'u1', [

  /* ---------- What the claim says caused what ---------- */
  { id: 'gate-ret-cooking', use: 'return', tier: 'clean', setting: 'leisure', topic: 'cooking classes and restaurant bills',
    text: "A cooking school says: 'Our classes cut your restaurant bills by $90 a month.' It compared the 60 people who signed up, who spent $120 a month at restaurants, with 60 who did not, who spent $210. The people who signed up were mostly people who had just moved to a smaller town with few restaurants.",
    route: { S1: ['cause'] },
    cues: { S1: 'Our classes cut your restaurant bills by $90 a month' },
    reason: { S1: 'Both averages are given, and both groups are counted the same way. Then the school says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: the people who signed up had moved to a town with few restaurants.' },
    not: { outcome: 'compare', why: 'Both averages, $120 and $210, are given, so nothing is left out of the comparison. What goes wrong is the step to a cause.' },
    wouldChange: 'If the school had drawn names by lottery from people who all wanted the classes, and given classes to one half, it could be {a:S1.holds}.' },

  { id: 'gate-ret-cabs', use: 'return', tier: 'clean', setting: 'work', topic: 'a driving course given to the best drivers',
    text: "A taxi firm says: 'The course cuts accidents.' Of the 80 drivers who took its safe-driving course, 12 had an accident that year. Of the other 320 drivers, 96 did. The firm chose its best 80 drivers for the course.",
    route: { S1: ['cause'] },
    cues: { S1: 'The course cuts accidents' },
    reason: { S1: 'The numbers are given in full, 12 of 80 and 96 of 320. Then the firm says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: the course was given to the firm’s best drivers, who would have had fewer accidents without it.' },
    not: { outcome: 'compare', why: 'Both figures are given with the number of drivers behind them. What goes wrong is not what the figures leave out, but the step from them to a cause.' },
    wouldChange: 'If the firm had picked the 80 drivers for the course by lottery from all 400, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-sleep', use: 'return', tier: 'varied', setting: 'health', topic: 'hours of sleep and happiness',
    text: "A study asked 1,000 adults how many hours they slept and how happy they felt. Those who slept eight hours scored 7.5 out of 10 and those who slept five scored 6. A website says: 'More sleep makes you happier.' Unhappy people often lie awake.",
    route: { S1: ['cause'] },
    cues: { S1: 'More sleep makes you happier' },
    reason: { S1: 'The averages are given. Then the website says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: unhappiness could be what keeps people awake, which would run the cause the other way.' },
    not: { outcome: 'holds', why: 'The averages are real, but the claim goes past them, and the case itself shows another way to explain the same result.' },
    wouldChange: 'If the claim were only that adults who sleep eight hours report being happier, saying nothing about what makes what, it would be {a:S1.holds}.' },

  { id: 'gate-ret-tutor', use: 'return', tier: 'varied', setting: 'learning', topic: 'a reading app and a term of progress',
    text: "A reading app says: 'Our app raised reading levels by 1.2 grades in one term.' It followed 500 pupils who started the term in September, straight after the summer break, when their reading levels are at their lowest of the year.",
    route: { S1: ['cause'] },
    cues: { S1: 'Our app raised reading levels by 1.2 grades in one term' },
    reason: { S1: 'The figure is given for 500 pupils counted the same way at both ends. Then the app says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: pupils start the term at their lowest and would climb back with or without the app.' },
    not: { outcome: 'measure', why: 'The same test is used at both ends of the term, so nothing about how the figure is made changed. The trouble is the step from the rise to its cause.' },
    wouldChange: 'If another 500 pupils, picked by lottery, had spent the same term without the app, and the app group had still risen more, the claim would be {a:S1.holds}.' },

  /* ---------- Nothing goes wrong ---------- */
  { id: 'gate-ret-water', use: 'return', tier: 'clean', setting: 'community', topic: 'lead in water at drawn taps',
    text: "A water company tested water from 150 taps drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested. It found lead levels above the limit at 14 of the 150. The company says: 'About one home in ten has lead levels above the limit, give or take two or three in a hundred.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested' },
    reason: { S1: 'Each part holds. {cue:S1}. Nobody was favoured, every tap drawn was tested the same way, and 150 is enough that one or two more or fewer would not move the figure. The claim gives a figure about one group at one time.' },
    not: { outcome: 'counted', why: 'Only 150 of 60,000 connections were tested, but they were drawn by lottery, every one drawn was tested, and 150 is plenty. They are a fair picture of the homes in the area.' },
    wouldChange: 'If the company had tested only the 150 taps that customers had complained about, it would be {a:S1.counted}.' },

  { id: 'gate-ret-breakfast', use: 'return', tier: 'clean', setting: 'learning', topic: 'free breakfast and attendance',
    text: "A school district drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60. Attendance was 94% in the schools with breakfast and 91% in the others. The district says: 'Free breakfast raised attendance.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60' },
    reason: { S1: 'Each part holds, and the claim says one thing caused another, so the last part matters most: {cue:S1}. No school chose its group, so nothing else is likelier to be in one group than the other, and the case offers no other way to explain the difference.' },
    not: { outcome: 'cause', why: 'A claim of cause is weak when the groups chose themselves. Here the schools were drawn by lot, so the case shows no other way the result could have come about.' },
    wouldChange: 'If the 30 schools had chosen to serve breakfast, and the district had then compared them with the others, it would be {a:S1.cause}.' },

  { id: 'gate-ret-absence', use: 'return', tier: 'varied', setting: 'work', topic: 'absence days recorded the same way for two years',
    text: "A firm recorded every day of absence by every employee the same way, in the same system, for two years. Absence days were 3,600 in the first year and 3,000 in the second. Nothing about the rules for recording an absence changed. The firm says: 'Absence fell by about a sixth in a year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'recorded every day of absence by every employee the same way, in the same system, for two years' },
    reason: { S1: 'Each part holds. Every day for every employee is in the figure, counted the same way throughout: {cue:S1}. Nothing about the rules changed, the two numbers are given beside the fraction, and the claim says only that absence fell.' },
    not: { outcome: 'measure', why: 'A change in the rules for recording an absence could lower the count with no fewer absences, but the case says nothing about the rules changed.' },
    wouldChange: 'If the firm had stopped recording absences of less than a day in the second year, it would be {a:S1.measure}.' },

  { id: 'gate-ret-rooms', use: 'return', tier: 'varied', setting: 'leisure', topic: 'hotel guests surveyed by lottery',
    text: "A hotel chain emailed a survey to 1,500 guests drawn by lottery from everyone who stayed last year. It followed up twice by email and then by phone, and 1,350 answered. Eighty-eight percent rated their room good or very good. The chain says: 'About 9 in 10 of last year's guests rate their rooms good or very good.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from everyone who stayed last year. It followed up twice by email and then by phone, and 1,350 answered' },
    reason: { S1: 'Each part holds. {cue:S1}. Nobody was favoured in who was asked, and nine in ten of those asked answered, so the people in the figure are a fair picture of last year’s guests. The claim says no more than that.' },
    not: { outcome: 'counted', why: 'A survey can mislead when few people reply, but here 1,350 of the 1,500 answered after repeated follow-up, and the guests were drawn by lottery.' },
    wouldChange: 'If only the 150 guests who replied to the first email were counted, and the other 1,350 were never followed up, it would be {a:S1.counted}.' }
]);
