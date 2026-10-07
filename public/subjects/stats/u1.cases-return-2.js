// Statistical Claims, Unit One: fresh cases held back for later days, part two: the last two families (what the claim says caused what,
// and nothing goes wrong). Field guide: see u1.cases-return-1.js.

FC.cases('stats', 'u1', [
  { id: 'gate-ret-cabs', use: 'return', tier: 'clean', setting: 'work', topic: 'a driving course given to the best drivers',
    text: "A taxi firm says: 'The course cuts accidents.' Of the 80 drivers who took its safe-driving course, 12 had an accident that year. Of the other 320 drivers, 96 did. The firm chose its best 80 drivers for the course.",
    route: { S1: ['cause'] },
    cues: { S1: 'The course cuts accidents' },
    reason: { S1: 'The firm says this: {cue:S1}. But it gave the course to its best 80 drivers, who would have had fewer accidents anyway.' },
    not: { outcome: 'compare', why: 'Both numbers come with the drivers behind them: 12 of 80 and 96 of 320. The trouble is the step from them to a cause.' } },

  { id: 'gate-ret-sleep', use: 'return', tier: 'varied', setting: 'health', topic: 'hours of sleep and happiness',
    text: "A study asked 1,000 adults how many hours they slept and how happy they felt. Those who slept eight hours scored 7.5 out of 10 and those who slept five scored 6. A website says: 'More sleep makes you happier.' Unhappy people often lie awake.",
    route: { S1: ['cause'] },
    cues: { S1: 'More sleep makes you happier' },
    reason: { S1: 'The website says this: {cue:S1}. But unhappiness could be what keeps people awake, which runs the cause the other way.' },
    not: { outcome: 'holds', why: 'The averages are real, but the claim goes past them. Something else could explain the same numbers.' } },

  /* ---------- Nothing goes wrong ---------- */
  { id: 'gate-ret-water', use: 'return', tier: 'clean', setting: 'community', topic: 'lead in water at drawn taps',
    text: "A water company tested water from 150 taps drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested. It found lead levels above the limit at 14 of the 150. The company says: 'About one home in ten has lead levels above the limit, give or take two or three in a hundred.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from all 60,000 connections, with the same lab method, and every tap it drew was tested' },
    reason: { S1: 'The taps are a fair picture and enough of them: {cue:S1}. The claim gives one number for one group and says no more.' },
    not: { outcome: 'counted', why: 'Only 150 of 60,000 connections were tested, but they were drawn by lottery and every one was tested. That is a fair picture of the homes in the area.' } },

  { id: 'gate-ret-breakfast', use: 'return', tier: 'clean', setting: 'learning', topic: 'free breakfast and attendance',
    text: "A school district drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60. Attendance was 94% in the schools with breakfast and 91% in the others. The district says: 'Free breakfast raised attendance.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew lots to decide which 30 of its 60 schools would serve free breakfast for a year, and recorded attendance the same way in all 60' },
    reason: { S1: 'The schools were drawn by lot: {cue:S1}. So no school chose its group, and the story offers no other way to explain the difference.' },
    not: { outcome: 'cause', why: 'A claim of cause is weak when the groups chose themselves. Here the schools were drawn by lot, so the story shows no other explanation.' } }
]);
