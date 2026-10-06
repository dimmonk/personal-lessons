// Statistical Claims, Unit One: fresh cases held back for later days, part two: the last two families (what the claim says caused what,
// and nothing goes wrong). Field guide: see u1.cases-return-1.js.

FC.cases('stats', 'u1', [
  { id: 'gate-ret-cabs', use: 'return', tier: 'clean', setting: 'work', topic: 'a driving course given to the best drivers',
    text: "A taxi firm says: 'The course cuts accidents.' Of the 80 drivers who took its safe-driving course, 12 had an accident that year. Of the other 320 drivers, 96 did. The firm chose its best 80 drivers for the course.",
    route: { S1: ['cause'] },
    cues: { S1: 'The course cuts accidents' },
    reason: { S1: 'The numbers are given in full, 12 of 80 and 96 of 320. Then the firm says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: the course was given to the firm’s best drivers, who would have had fewer accidents without it.' },
    not: { outcome: 'compare', why: 'Both figures are given with the number of drivers behind them. What goes wrong is not what the figures leave out, but the step from them to a cause.' } },

  { id: 'gate-ret-sleep', use: 'return', tier: 'varied', setting: 'health', topic: 'hours of sleep and happiness',
    text: "A study asked 1,000 adults how many hours they slept and how happy they felt. Those who slept eight hours scored 7.5 out of 10 and those who slept five scored 6. A website says: 'More sleep makes you happier.' Unhappy people often lie awake.",
    route: { S1: ['cause'] },
    cues: { S1: 'More sleep makes you happier' },
    reason: { S1: 'The averages are given. Then the website says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the result: unhappiness could be what keeps people awake, which would run the cause the other way.' },
    not: { outcome: 'holds', why: 'The averages are real, but the claim goes past them, and the case itself shows another way to explain the same result.' } },

  /* ---------- Nothing goes wrong ---------- */
  { id: 'gate-ret-water', use: 'return', tier: 'clean', setting: 'community', topic: 'lead in water at drawn taps',
    text: "A water company tested water from 150 taps drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested. It found lead levels above the limit at 14 of the 150. The company says: 'About one home in ten has lead levels above the limit, give or take two or three in a hundred.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested' },
    reason: { S1: 'Each part holds. {cue:S1}. Nobody was favored, every tap drawn was tested the same way, and 150 is enough that one or two more or fewer would not move the figure. The claim gives a figure about one group at one time.' },
    not: { outcome: 'counted', why: 'Only 150 of 60,000 connections were tested, but they were drawn by lottery, every one drawn was tested, and 150 is plenty. They are a fair picture of the homes in the area.' } },

  { id: 'gate-ret-breakfast', use: 'return', tier: 'clean', setting: 'learning', topic: 'free breakfast and attendance',
    text: "A school district drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60. Attendance was 94% in the schools with breakfast and 91% in the others. The district says: 'Free breakfast raised attendance.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60' },
    reason: { S1: 'Each part holds, and the claim says one thing caused another, so the last part matters most: {cue:S1}. No school chose its group, so nothing else is likelier to be in one group than the other, and the case offers no other way to explain the difference.' },
    not: { outcome: 'cause', why: 'A claim of cause is weak when the groups chose themselves. Here the schools were drawn by lot, so the case shows no other way the result could have come about.' } }
]);
