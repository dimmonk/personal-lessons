// Statistical Claims, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: the first three families.
// Four for each family: one for each scheduled return (an action subject has a fourth, at about twelve weeks). A family that is due
// comes back as a case the learner has not seen, beside a case of the family they most often take it for. Field guide: see
// u1.cases-drill-1.js. These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('stats', 'u1', [

  /* ---------- Who or what the figure was worked out from ---------- */
  { id: 'gate-ret-reviews', use: 'return', tier: 'clean', setting: 'money', topic: 'shoe reviews from big spenders',
    text: "A shoe shop's website says: 'Customers rate us 4.9 out of 5.' The rating is the average of the 62 reviews on the site. The shop sold 4,000 pairs last year, and it only asks customers who spent over $200 to leave a review.",
    route: { S1: ['counted'] },
    cues: { S1: 'it only asks customers who spent over $200 to leave a review' },
    reason: { S1: 'The claim speaks for "customers", but the figure comes from 62 people who were asked because they spent over $200, out of 4,000 sales: {cue:S1}. Big spenders are not a fair picture of everyone who buys shoes.' },
    not: { outcome: 'measure', why: 'A rating is a rating, and nothing about how it is counted changed. The trouble is who is in it.' },
    wouldChange: 'If the shop had asked every customer for a review, and 3,600 of the 4,000 had given one with the same 4.9 average, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-honor', use: 'return', tier: 'varied', setting: 'learning', topic: 'a college asking its honor-roll students',
    text: "A college says: 'Our students say the college prepared them well: all 90 we asked.' The 90 were chosen from the 2,000 students by the dean, who picked students on the honor roll.",
    route: { S1: ['counted'] },
    cues: { S1: 'The 90 were chosen from the 2,000 students by the dean, who picked students on the honor roll' },
    reason: { S1: 'The claim speaks for "our students", but the figure comes from 90 of 2,000 who were picked by the dean for being on the honor roll: {cue:S1}. Students who do well are likelier than the rest to say the college served them well.' },
    not: { outcome: 'compare', why: 'The figure is "all 90", and nothing is hidden in how it is given. The trouble is that the 90 are not a fair picture of the 2,000.' },
    wouldChange: 'If the college had asked 90 students picked from the full list by lottery, and all 90 gave the same answer, it would be {a:S1.holds}.' },

  { id: 'gate-ret-clinic', use: 'return', tier: 'clean', setting: 'health', topic: 'a new clinic and its first three patients',
    text: "A new clinic says: 'Patients love our back-pain treatment: 3 out of 3 got better.' The clinic had treated three patients by the end of its first month.",
    route: { S1: ['counted'] },
    cues: { S1: 'The clinic had treated three patients by the end of its first month' },
    reason: { S1: 'The claim speaks for patients in general, but the figure comes from three people: {cue:S1}. With so few, a fourth patient could change "3 out of 3" to "3 out of 4", and back pain often gets better by itself.' },
    not: { outcome: 'holds', why: 'The three patients did get better, but three is too few for the figure to mean anything. One part goes wrong, so the claim does not hold.' },
    wouldChange: 'If the clinic had treated 600 patients picked by lottery from everyone who came in, and 540 had got better, the first part would hold.' },

  { id: 'gate-ret-trail', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a hiking club and the members who stayed',
    text: "A hiking club says: 'Our members hike more every year: members now average 120 miles a year.' The average is for the 45 members still in the club, out of the 200 who joined in its first five years.",
    route: { S1: ['counted'] },
    cues: { S1: 'The average is for the 45 members still in the club, out of the 200 who joined in its first five years' },
    reason: { S1: 'The claim speaks for "our members", but the figure comes from the ones who stayed: {cue:S1}. The 155 who left are the ones who hiked least, and they are not in it.' },
    not: { outcome: 'cause', why: 'The club does not say that anything made its members hike more. It says how far they hike, and the trouble is that the figure leaves out most of the people who joined.' },
    wouldChange: 'If the club had given the average for all 200 who joined, counting the ones who left, and it was still 120 miles, it would be {a:S1.holds}.' },

  /* ---------- What the figure counts ---------- */
  { id: 'gate-ret-scanner', use: 'return', tier: 'clean', setting: 'work', topic: 'shipping errors and a scanner that skips boxes',
    text: "A warehouse says: 'Shipping errors fell from 5 per 1,000 boxes to 2.' This year it replaced hand counting with a scanner that skips any box whose label it cannot read. The hand counters used to log every box.",
    route: { S1: ['measure'] },
    cues: { S1: 'replaced hand counting with a scanner that skips any box whose label it cannot read' },
    reason: { S1: 'Every box is in the figure, but what is counted changed: {cue:S1}. A scanner that skips the boxes it cannot read will miss many of the errors, and the figure can fall with no fewer errors.' },
    not: { outcome: 'compare', why: 'The numbers, 5 and 2 per 1,000, are given in full. The trouble is that the tool that counts no longer sees every box.' },
    wouldChange: 'If the same scanner had been used for the last three years, with every box read, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-index', use: 'return', tier: 'clean', setting: 'money', topic: 'a rent index that added new apartments',
    text: "A city's rent index says: 'Average rent rose from $1,500 to $1,620 a month in a year.' This year the index began to include newly built apartments, which cost more than older ones, in the list it averages.",
    route: { S1: ['measure'] },
    cues: { S1: 'began to include newly built apartments, which cost more than older ones, in the list it averages' },
    reason: { S1: 'The figures are given in full. What is counted changed: {cue:S1}. The average can rise with no apartment costing more than it did, because dearer apartments have joined the list.' },
    not: { outcome: 'compare', why: 'Both averages are given, $1,500 and $1,620. The trouble is that the list they are averaged from changed.' },
    wouldChange: 'If the index had used the same list of apartments in both years, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-visits', use: 'return', tier: 'varied', setting: 'health', topic: 'calls to a mental-health line after publicity',
    text: "A town says: 'Calls to our mental-health line doubled in a year, from 900 to 1,800.' In that year the town began printing the number on every school ID card and bus pass, and added a free text line.",
    route: { S1: ['measure'] },
    cues: { S1: 'began printing the number on every school ID card and bus pass, and added a free text line' },
    reason: { S1: 'The figure is a count of calls, read as showing how many people need help. What changed is how easy it is to get help: {cue:S1}. Calls can double with no more people in need.' },
    not: { outcome: 'cause', why: 'The town does not say that anything made more people need help. The trouble is earlier: the figure counts something that more effort has made easier to do.' },
    wouldChange: 'If nothing about how people can reach the line had changed in the two years, the figure would be {a:S1.holds}.' },

  { id: 'gate-ret-mileage', use: 'return', tier: 'varied', setting: 'home', topic: 'a car’s fuel economy tested a new way',
    text: "A car company says: 'Our new model gets 38 miles per gallon, up from 31.' The old model was tested on a lab machine with the heater and radio on. The new one was tested with everything off, the way the new rules allow.",
    route: { S1: ['measure'] },
    cues: { S1: 'The old model was tested on a lab machine with the heater and radio on. The new one was tested with everything off' },
    reason: { S1: 'The two figures are measured under different conditions: {cue:S1}. A car with the heater and radio off uses less fuel than the same car with them on, so the figure can rise with an engine that is no better.' },
    not: { outcome: 'compare', why: 'Both numbers are given, 38 and 31. The trouble is that they were not measured the same way.' },
    wouldChange: 'If both models had been tested with everything off, and the figures were still 38 and 31, it would be {a:S1.holds}.' },

  /* ---------- What the figure is set beside ---------- */
  { id: 'gate-ret-pills', use: 'return', tier: 'clean', setting: 'health', topic: 'a heart drug and a halved risk',
    text: "A drug leaflet says: 'Patients on this drug were half as likely to have a heart attack.' It does not say how many patients had a heart attack on the drug, or how many had one without it.",
    route: { S1: ['compare'] },
    cues: { S1: 'Patients on this drug were half as likely to have a heart attack' },
    reason: { S1: 'The figure is "half as likely", and the claim leaves out how likely it was to begin with: {cue:S1}. Half of 2 in 1,000 is 1 in 1,000, and half of 20 in 100 is 10 in 100, and those are very different things to take a drug for.' },
    not: { outcome: 'cause', why: 'The leaflet says patients on the drug were half as likely, not that the drug made them so. The trouble is that the numbers behind "half" are left out.' },
    wouldChange: 'If the leaflet gave 20 heart attacks among 1,000 patients without the drug and 10 among 1,000 with it, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-cities', use: 'return', tier: 'clean', setting: 'work', topic: 'two cities and their unemployed',
    text: "A job site says: 'Springfield has 4,000 people out of work and Rivertown has 3,000, so Rivertown has the better job market.' Springfield has 200,000 workers and Rivertown has 20,000.",
    route: { S1: ['compare'] },
    cues: { S1: 'Springfield has 4,000 people out of work and Rivertown has 3,000' },
    reason: { S1: 'Two totals are set side by side as if the cities were the same size: {cue:S1}. Springfield has 2 people in 100 out of work and Rivertown has 15 in 100, so the claim leaves out what each total is out of.' },
    not: { outcome: 'counted', why: 'Every worker in both cities is in the totals, so nobody is left out. The trouble is that two totals of different-sized groups are set side by side.' },
    wouldChange: 'If the site had said "2 in 100 in Springfield and 15 in 100 in Rivertown", the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-fines', use: 'return', tier: 'varied', setting: 'community', topic: 'parking fines up by a percentage',
    text: "A city council says: 'Parking fines are up 50% in a year.' It does not say how many fines were written in either year.",
    route: { S1: ['compare'] },
    cues: { S1: 'Parking fines are up 50% in a year' },
    reason: { S1: 'The figure is a percentage, and the claim leaves out what it is a percentage of: {cue:S1}. Up 50% could be 40 fines becoming 60, or 4,000 becoming 6,000.' },
    not: { outcome: 'measure', why: 'Nothing in the case says that how fines are counted changed. The trouble is that the figure is a percentage with no numbers behind it.' },
    wouldChange: 'If the city council said that 4,000 fines were written last year and 6,000 this year, counted the same way, the claim would be {a:S1.holds}.' },

  { id: 'gate-ret-kits', use: 'return', tier: 'varied', setting: 'health', topic: 'a home allergy test and a rare allergy',
    text: "A shop sells a home allergy test: 'Right 95% of the time.' Mira's test says she has a food allergy that only 1 person in 2,000 has, and the leaflet says: 'You almost certainly have it.'",
    route: { S1: ['compare'] },
    cues: { S1: ['Right 95% of the time', 'a food allergy that only 1 person in 2,000 has'] },
    reason: { S1: 'The figure is a test’s accuracy, and the leaflet reads it as the chance that Mira has the allergy: {cue:S1}. If only 1 person in 2,000 has it, most of the people who test positive do not have it.' },
    not: { outcome: 'holds', why: 'The test may well be right 95% of the time. But the claim leaves out how rare the allergy is, so one part does go wrong.' },
    wouldChange: 'If the allergy were common, say 1 person in 3 had it, a positive result would be far more likely to be right, and the leaflet’s claim would come close to holding.' }
]);
