// Statistical Claims, Unit One: drill cases, second stage, clean and varied (the key's first question on mixed claims).
// Field guide: see u1.cases-drill-1.js. wouldChange says what would make it a different answer; it is shown after the feedback.
// Misleading cases, which carry echo and also, are in u1.cases-drill-3.js.

FC.cases('stats', 'u1', [

  /* ---------- clean ---------- */
  { id: 'gate-r-petition', use: 'drill', tier: 'clean', setting: 'community', topic: 'a petition signed at a skate shop',
    text: "To show that the town wants a new skate park, the youth club handed out a petition at the skate shop on Saturday. A hundred and ten people signed. The club says: 'The whole town wants a skate park.'",
    route: { S1: ['counted'] },
    cues: { S1: 'handed out a petition at the skate shop on Saturday' },
    reason: { S1: 'The claim speaks for the whole town, but the signatures come from people at a skate shop on one Saturday: {cue:S1}. People who go to a skate shop are likelier than most to want a skate park.' },
    not: { outcome: 'holds', why: 'The signatures are real, but people who sign a petition at a skate shop are not a fair picture of a town. One part goes wrong, so the claim does not hold.' },
    wouldChange: 'If the club had picked 400 addresses from the town’s full list by lottery, heard from nearly all of them, and found 110 in favor, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-battery', use: 'drill', tier: 'clean', setting: 'home', topic: 'battery life tested with the display off',
    text: "A phone maker says: 'Our new phone's battery now lasts 14 hours, up from 11.' The maker changed the test this year. The old phone was tested with the display on and apps open. The new one was tested with the display off.",
    route: { S1: ['measure'] },
    cues: { S1: 'The old phone was tested with the display on and apps open. The new one was tested with the display off' },
    reason: { S1: 'The two figures are measured under different conditions: {cue:S1}. A phone with its display off lasts longer than the same phone with it on, so the figure can rise with a battery that is no better.' },
    not: { outcome: 'compare', why: 'The numbers, 14 and 11, are given in full. What goes wrong is that the two numbers do not measure the same thing.' },
    wouldChange: 'If both phones had been tested in the same way, with the display on and apps open, and the figures were still 14 and 11, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-orders', use: 'drill', tier: 'clean', setting: 'work', topic: 'delivery orders at sixty branches',
    text: "A restaurant chain counted every order at all 60 of its branches with the same till software for two years. Delivery orders were 18,000 a week in the first year and 24,000 a week in the second. The chain says: 'Delivery orders went up by a third in a year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'counted every order at all 60 of its branches with the same till software for two years' },
    reason: { S1: 'Each part holds. Every order at every restaurant is counted by the same software for both years: {cue:S1}. The percentage comes with the two numbers behind it, and the claim says only that orders rose.' },
    not: { outcome: 'compare', why: 'A percentage can hide the numbers behind it, but here 18,000 and 24,000 are both given, so nothing needed to read "a third" is left out.' },
    wouldChange: 'If the chain had said only "up by a third" and given neither number, it would be {a:S1.compare}.' },

  { id: 'gate-r-pizza', use: 'drill', tier: 'clean', setting: 'money', topic: 'a deep-dish pizza that costs less',
    text: "A pizza chain's ad says: 'Our new deep-dish costs 20% less per slice.' It does not say less than what: its own old price, another chain's price, or a different size of pizza.",
    route: { S1: ['compare'] },
    cues: { S1: 'Our new deep-dish costs 20% less per slice' },
    reason: { S1: 'The figure is a percentage, and the claim leaves out what it is a percentage of: {cue:S1}. "Less" than a price that was already high can still be a high price.' },
    not: { outcome: 'measure', why: 'Nothing in the case says that what is counted changed. The trouble is that the figure is given with no word on what it is set beside.' },
    wouldChange: 'If the ad said that the new deep-dish costs $2.40 a slice against $3.00 for the old one, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-shoes', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'marathon shoes and finishing times',
    text: "Runners who wear a certain brand of shoe finished the city marathon in 3 hours 58 minutes on average, against 4 hours 10 minutes for other runners. A running magazine says: 'The right shoes make you faster.' The runners who chose the brand are mostly club runners who train five days a week.",
    route: { S1: ['cause'] },
    cues: { S1: 'The right shoes make you faster' },
    reason: { S1: 'The two averages are given and counted the same way. Then the magazine says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the same result: the runners who chose the brand train five days a week.' },
    not: { outcome: 'compare', why: 'Both averages are given, and both come from the same marathon, so nothing is left out of the comparison. What goes wrong is the step to a cause.' },
    wouldChange: 'If runners had been given the shoes or not by lottery, and the shoe group still finished faster, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-quiz', use: 'drill', tier: 'clean', setting: 'learning', topic: 'math scores of a drawn group of first-year students',
    text: "A university drew 300 first-year students by lottery from the full class list and tested all of them the same way at the start and the end of the year, with 290 completing both tests. Their average math score rose from 62 to 68. The university says: 'The average first-year math score rose six points over the year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew 300 first-year students by lottery from the full class list and tested all of them the same way at the start and the end of the year, with 290 completing both tests' },
    reason: { S1: 'Each part holds. {cue:S1}. Nobody was favored, nearly everyone drawn took both tests, and the test is the same at both ends. The claim says only that the score rose. It does not say why.' },
    not: { outcome: 'counted', why: 'Only 300 students were tested, but they were drawn by lottery from the whole class, nearly all of them took both tests, and 300 is plenty. They are a fair picture of the first-year class.' },
    wouldChange: 'If only the 40 students who volunteered for the second test had been counted at the end, it would be {a:S1.counted}.' },

  /* ---------- varied ---------- */
  { id: 'gate-r-alumni', use: 'drill', tier: 'varied', setting: 'learning', topic: 'alumni salaries from a directory',
    text: "A business school says: 'Our alumni earn an average of $140,000 a year.' The figure comes from the alumni directory, where graduates choose whether to list their salary. About one graduate in eight lists one.",
    route: { S1: ['counted'] },
    cues: { S1: 'graduates choose whether to list their salary. About one graduate in eight lists one' },
    reason: { S1: 'The claim speaks for "our alumni", but the figure comes from the one in eight who chose to list a salary: {cue:S1}. Graduates who earn a lot are likelier to want it known, so the seven in eight who are missing are not missing by chance.' },
    not: { outcome: 'measure', why: 'A salary is a salary, and nothing about how it is counted changed. The trouble is that most graduates are not in the figure, and the ones who are chose to be.' },
    wouldChange: 'If the school had asked every graduate by name, followed up until nearly all replied, and still found $140,000, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-glasses', use: 'drill', tier: 'varied', setting: 'health', topic: 'glasses and reading scores',
    text: "Children in a town school who wear glasses score higher on reading tests than children who do not: 78 against 70. A newspaper says: 'Glasses make children better readers.' The children with glasses are the ones whose parents took them to an eye doctor, and those parents also read to them more.",
    route: { S1: ['cause'] },
    cues: { S1: 'Glasses make children better readers' },
    reason: { S1: 'The averages are given and counted the same way. Then the newspaper says this: {cue:S1}. It is a claim of cause, and the case shows another way to explain the result: the parents who took the children to an eye doctor also read to them more.' },
    not: { outcome: 'holds', why: 'The figures are fine, but the claim goes past them, and the case itself shows another way to explain the same result. So one part does go wrong.' },
    wouldChange: 'If the claim stopped at "children with glasses score higher in reading", saying nothing about what made them, it would be {a:S1.holds}.' },

  { id: 'gate-r-bridge', use: 'drill', tier: 'varied', setting: 'community', topic: 'bridge traffic counted by the same sensors',
    text: "A bridge authority counted vehicles with the same sensors at the same place for every day of two years. It counted 41,000 a day in the first year and 46,000 a day in the second, with no change to tolls or lanes. The authority says: 'Traffic on the bridge rose by about 12% in a year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'counted vehicles with the same sensors at the same place for every day of two years' },
    reason: { S1: 'Each part holds. Every day is counted, by the same sensors at the same place: {cue:S1}. Nothing about tolls or lanes changed, the two numbers are given beside the percentage, and the claim says only that traffic rose.' },
    not: { outcome: 'measure', why: 'A new sensor or a new lane could change what a count means, but the case says the sensors, the place, the tolls and the lanes were the same in both years.' },
    wouldChange: 'If the authority had replaced its sensors with new ones that count motorbikes too in the second year, it would be {a:S1.measure}.' },

  { id: 'gate-r-rates', use: 'drill', tier: 'varied', setting: 'money', topic: 'complaints and a phone-logging rule',
    text: "A bank says: 'Complaints about us fell by half this year, from 1,200 to 600.' This year the bank stopped logging a complaint made by phone unless the customer also put it in writing.",
    route: { S1: ['measure'] },
    cues: { S1: 'stopped logging a complaint made by phone unless the customer also put it in writing' },
    reason: { S1: 'The figures are given in full, so nothing is left out of the comparison. What is counted changed: {cue:S1}. Complaints can fall by half in the log with exactly as many unhappy customers.' },
    not: { outcome: 'compare', why: 'The two numbers, 1,200 and 600, are both given. What goes wrong is that the log no longer counts every complaint.' },
    wouldChange: 'If every complaint, by phone or in writing, had been logged in both years, and the figure still fell from 1,200 to 600, the claim would be {a:S1.holds}.' },

  { id: 'gate-r-risk', use: 'drill', tier: 'varied', setting: 'health', topic: 'a rare eye condition and age',
    text: "A health site says: 'People over 50 are twice as likely to get this rare eye condition.' It does not say how many people of any age get it.",
    route: { S1: ['compare'] },
    cues: { S1: 'People over 50 are twice as likely to get this rare eye condition' },
    reason: { S1: 'The figure is "twice as likely", and the claim leaves out how likely it was to begin with: {cue:S1}. Twice a very small chance is still a very small chance.' },
    not: { outcome: 'cause', why: 'The claim says that people over 50 are likelier to get it. It does not say that anything made them get it. The trouble is what the figure is set beside.' },
    wouldChange: 'If the site said that 2 in 100,000 people under 50 get it and 4 in 100,000 over 50, the claim would be {a:S1.holds}.' }
]);
