// Statistical Claims, Unit One: drill cases, second stage, clean and varied (the key's first question on mixed claims).
// Field guide: see u1.cases-drill-1.js.
// Misleading cases, which carry echo and also, are in u1.cases-drill-3.js.

FC.cases('stats', 'u1', [

  /* ---------- clean ---------- */
  { id: 'gate-r-petition', use: 'drill', tier: 'clean', setting: 'community', topic: 'a petition signed at a skate shop',
    text: "To show that the town wants a new skate park, the youth club handed out a petition at the skate shop on Saturday. A hundred and ten people signed. The club says: 'The whole town wants a skate park.'",
    route: { S1: ['counted'] },
    cues: { S1: 'handed out a petition at the skate shop on Saturday' },
    reason: { S1: 'The claim speaks for the whole town, but the signatures come from people at a skate shop on one Saturday: {cue:S1}. People who go to a skate shop are likelier than most to want a skate park.' },
    not: { outcome: 'holds', why: 'The signatures are real, but people who sign a petition at a skate shop are not a fair picture of a town. One part goes wrong, so the claim does not hold.' } },

  { id: 'gate-r-battery', use: 'drill', tier: 'clean', setting: 'home', topic: 'battery life tested with the display off',
    text: "A phone maker says: 'Our new phone's battery now lasts 14 hours, up from 11.' The maker changed the test this year. The old phone was tested with the display on and apps open. The new one was tested with the display off.",
    route: { S1: ['measure'] },
    cues: { S1: 'The old phone was tested with the display on and apps open. The new one was tested with the display off' },
    reason: { S1: 'The two figures are measured under different conditions: {cue:S1}. A phone with its display off lasts longer than the same phone with it on, so the figure can rise with a battery that is no better.' },
    not: { outcome: 'compare', why: 'The numbers, 14 and 11, are given in full. What goes wrong is that the two numbers do not measure the same thing.' } },

  { id: 'gate-r-orders', use: 'drill', tier: 'clean', setting: 'work', topic: 'delivery orders at sixty branches',
    text: "A restaurant chain counted every order at all 60 of its branches with the same till software for two years. Delivery orders were 18,000 a week in the first year and 24,000 a week in the second. The chain says: 'Delivery orders went up by a third in a year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'counted every order at all 60 of its branches with the same till software for two years' },
    reason: { S1: 'Each part holds. Every order at every restaurant is counted by the same software for both years: {cue:S1}. The percentage comes with the two numbers behind it, and the claim says only that orders rose.' },
    not: { outcome: 'compare', why: 'A percentage can hide the numbers behind it, but here 18,000 and 24,000 are both given, so nothing needed to read "a third" is left out.' } },

  { id: 'gate-r-pizza', use: 'drill', tier: 'clean', setting: 'money', topic: 'a deep-dish pizza that costs less',
    text: "A pizza chain's ad says: 'Our new deep-dish costs 20% less per slice.' It does not say less than what: its own old price, another chain's price, or a different size of pizza.",
    route: { S1: ['compare'] },
    cues: { S1: 'Our new deep-dish costs 20% less per slice' },
    reason: { S1: 'The figure is a percentage, and the claim leaves out what it is a percentage of: {cue:S1}. "Less" than a price that was already high can still be a high price.' },
    not: { outcome: 'measure', why: 'Nothing in the case says that what is counted changed. The trouble is that the figure is given with no word on what it is set beside.' } },

  { id: 'gate-r-shoes', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'marathon shoes and finishing times',
    text: "Runners who wear a certain brand of shoe finished the city marathon in 3 hours 58 minutes on average, against 4 hours 10 minutes for other runners. A running magazine says: 'The right shoes make you faster.' The runners who chose the brand are mostly club runners who train five days a week.",
    route: { S1: ['cause'] },
    cues: { S1: 'The right shoes make you faster' },
    reason: { S1: 'The two averages are given and counted the same way. Then the magazine says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the same result: the runners who chose the brand train five days a week.' },
    not: { outcome: 'compare', why: 'Both averages are given, and both come from the same marathon, so nothing is left out of the comparison. What goes wrong is the step to a cause.' } }
]);
