// Statistical Claims, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: the first three families.
// Two for each family (an action subject has two returns for each). A family that is due
// comes back as a case the learner has not seen, beside a case of the family they most often take it for. Field guide: see
// u1.cases-drill-1.js. These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('stats', 'u1', [

  /* ---------- Who or what the figure was worked out from ---------- */
  { id: 'gate-ret-reviews', use: 'return', tier: 'clean', setting: 'money', topic: 'shoe reviews from big spenders',
    text: "A shoe shop's website says: 'Customers rate us 4.9 out of 5.' The rating is the average of the 62 reviews on the site. The shop sold 4,000 pairs last year, and it only asks customers who spent over $200 to leave a review.",
    route: { S1: ['counted'] },
    cues: { S1: 'it only asks customers who spent over $200 to leave a review' },
    reason: { S1: 'The claim speaks for "customers", but the number comes from 62 big spenders out of 4,000 sales: {cue:S1}. Big spenders are not a fair picture of everyone who buys shoes.' },
    not: { outcome: 'measure', why: 'Nothing about how the rating is counted changed. The trouble is who is in it.' } },

  { id: 'gate-ret-clinic', use: 'return', tier: 'clean', setting: 'health', topic: 'a new clinic and its first three patients',
    text: "A new clinic says: 'Patients love our back-pain treatment: 3 out of 3 got better.' The clinic had treated three patients by the end of its first month.",
    route: { S1: ['counted'] },
    cues: { S1: 'The clinic had treated three patients by the end of its first month' },
    reason: { S1: 'The claim speaks for patients in general, but the number comes from three people: {cue:S1}. A fourth patient could turn "3 out of 3" into "3 out of 4", and back pain often gets better alone.' },
    not: { outcome: 'holds', why: 'The three patients did get better, but three is too few for the number to mean anything. So the claim does not hold.' } },

  /* ---------- What the figure counts ---------- */
  { id: 'gate-ret-scanner', use: 'return', tier: 'clean', setting: 'work', topic: 'shipping errors and a scanner that skips boxes',
    text: "A warehouse says: 'Shipping errors fell from 5 per 1,000 boxes to 2.' This year it replaced hand counting with a scanner that skips any box whose label it cannot read. The hand counters used to log every box.",
    route: { S1: ['measure'] },
    cues: { S1: 'replaced hand counting with a scanner that skips any box whose label it cannot read' },
    reason: { S1: 'Every box is counted, but the counting changed: {cue:S1}. A scanner that skips boxes it cannot read will miss many errors, so the number can fall with no fewer errors.' },
    not: { outcome: 'compare', why: 'The numbers, 5 and 2 per 1,000, are given in full. The trouble is that the scanner no longer sees every box.' } },

  { id: 'gate-ret-visits', use: 'return', tier: 'varied', setting: 'health', topic: 'calls to a mental-health line after publicity',
    text: "A town says: 'Calls to our mental-health line doubled in a year, from 900 to 1,800.' In that year the town began printing the number on every school ID card and bus pass, and added a free text line.",
    route: { S1: ['measure'] },
    cues: { S1: 'began printing the number on every school ID card and bus pass, and added a free text line' },
    reason: { S1: 'The number counts calls, and what changed is how easy it is to call: {cue:S1}. Calls can double with no more people in need.' },
    not: { outcome: 'cause', why: 'The town does not say that anything made more people need help. The trouble is earlier: calling has been made easier.' } },

  /* ---------- What the figure is set beside ---------- */
  { id: 'gate-ret-pills', use: 'return', tier: 'clean', setting: 'health', topic: 'a heart drug and a halved risk',
    text: "A drug leaflet says: 'Patients on this drug were half as likely to have a heart attack.' It does not say how many patients had a heart attack on the drug, or how many had one without it.",
    route: { S1: ['compare'] },
    cues: { S1: 'Patients on this drug were half as likely to have a heart attack' },
    reason: { S1: 'The claim never says how likely a heart attack was to begin with: {cue:S1}. Half of 2 in 1,000 is 1 in 1,000, and half of 20 in 100 is 10 in 100, which are very different reasons to take a drug.' },
    not: { outcome: 'cause', why: 'The leaflet says patients on the drug were half as likely, not that the drug made them so. The trouble is that the numbers behind "half" are missing.' } },

  { id: 'gate-ret-cities', use: 'return', tier: 'clean', setting: 'work', topic: 'two cities and their unemployed',
    text: "A job site says: 'Springfield has 4,000 people out of work and Rivertown has 3,000, so Rivertown has the better job market.' Springfield has 200,000 workers and Rivertown has 20,000.",
    route: { S1: ['compare'] },
    cues: { S1: 'Springfield has 4,000 people out of work and Rivertown has 3,000' },
    reason: { S1: 'Two totals are set side by side as if the cities were the same size: {cue:S1}. Springfield has 2 in 100 out of work and Rivertown has 15 in 100.' },
    not: { outcome: 'counted', why: 'Every worker in both cities is in the totals, so nobody is left out. The trouble is that totals of very different-sized groups are set side by side.' } }
]);
