// Statistical Claims, Unit One: drill cases, first stage (the key's first question on its own, on clean cases).
// Every drill case is new: none of them appears in a card. Each carries the words that decide the first question (cues.S1), the reason
// for its answer (reason.S1), and not: the nearest wrong answer and why it fails here. These cases, with the route-stage cases and the
// return cases, are the bank that later units draw their earlier-unit items from. Two of every group of piece cases hold, so that the
// stage always has a claim with nothing wrong in it (P26, V37).

FC.cases('stats', 'u1', [

  /* ---------- who is in the figure beside what the figure counts ---------- */
  { id: 'gate-p-lobby', use: 'drill', tier: 'clean', setting: 'work', topic: 'an office poll taken at eight on a Monday',
    text: "To find out whether staff like the new open-plan office, the manager asked the 20 people who were working in the office at eight o'clock on Monday morning. Seventeen said they like it. The firm has 400 staff. She tells the board: 'Staff overwhelmingly like the new office.'",
    route: { S1: ['counted'] },
    cues: { S1: "asked the 20 people who were working in the office at eight o'clock on Monday morning" },
    reason: { S1: 'The claim speaks for all 400 staff, but the figure comes only from the 20 who happened to be in at eight on a Monday: {cue:S1}. Early arrivals are not a fair picture of everyone.' },
    not: { outcome: 'measure', why: 'Staff were asked a simple question and nothing about how the answer is counted changed. The trouble is who was asked.' } },

  { id: 'gate-p-scale', use: 'drill', tier: 'clean', setting: 'health', topic: 'a weight-loss club and new scales',
    text: "A weight-loss club boasts: 'Our members lost an average of 5 pounds in three months.' Every member was weighed at the start and again at the end. At the halfway point the club swapped its old scales for new ones that read 3 pounds lighter.",
    route: { S1: ['measure'] },
    cues: { S1: 'swapped its old scales for new ones that read 3 pounds lighter' },
    reason: { S1: 'Every member was weighed at both ends, so the people in the figure are fine. What is counted changed: {cue:S1}. Three of the five pounds could come from the scales alone.' },
    not: { outcome: 'counted', why: 'Nobody is left out: every member was weighed at the start and at the end. The trouble is the scales, which changed what a pound of weight lost means.' } },

  /* ---------- what the figure is set beside beside what the claim says caused what ---------- */
  { id: 'gate-p-raise', use: 'drill', tier: 'clean', setting: 'money', topic: 'a savings account that pays more',
    text: "A bank advertises: 'Our new savings account pays 50% more interest.' It does not say more than what, or how much interest the account pays.",
    route: { S1: ['compare'] },
    cues: { S1: 'Our new savings account pays 50% more interest' },
    reason: { S1: 'The figure is a percentage, and the claim leaves out what it is a percentage of: {cue:S1}. Fifty percent more than 0.1% is still very little, and fifty percent more than 4% is a lot.' },
    not: { outcome: 'holds', why: 'Nothing says what the interest is more than, or how much it is. The claim leaves out what you need beside the figure, so one part does go wrong.' } },

  { id: 'gate-p-lamps', use: 'drill', tier: 'clean', setting: 'community', topic: 'new street lamps and break-ins',
    text: "A town put new lamps along Mill Road in March. In the six months after, break-ins on Mill Road fell from 20 to 12, and the mayor says: 'The new lamps cut crime.' In the same six months a neighborhood watch also began, and its members patrol Mill Road at night.",
    route: { S1: ['cause'] },
    cues: { S1: 'The new lamps cut crime' },
    reason: { S1: 'The figures are given in full and counted the same way both times. Then the mayor says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the fall: the watch began in the same six months.' },
    not: { outcome: 'compare', why: 'The numbers, 20 and 12, are given and counted the same way both times, so nothing is left out of the comparison. What goes wrong is the step to a cause.' } },

  /* ---------- a claim that holds beside a claim with trouble in the first part ---------- */
  { id: 'gate-p-roll', use: 'drill', tier: 'clean', setting: 'money', topic: 'new accounts counted by one definition',
    text: "A bank counted every account it opened in each of the last five years, using the same definition of an account throughout. It opened 4,000 in the first year and 4,800 in the fifth. The bank says: 'We open more accounts now than we did five years ago.'",
    route: { S1: ['holds'] },
    cues: { S1: 'using the same definition of an account throughout' },
    reason: { S1: 'Each part holds. Every account is counted, and the count is made the same way in all five years: {cue:S1}. The two numbers are given, and the claim says only that more are opened now. It does not say why.' },
    not: { outcome: 'measure', why: 'A new definition of an account could raise the count with no more customers, but the case says the same definition was used in all five years.' },
    wouldChange: 'If the bank had started counting a checking account and a debit card as two accounts in the fourth year, it would be {a:S1.measure}.' },

  { id: 'gate-p-three', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a spelling test taken by three pupils',
    text: "A teacher gave the three pupils who stayed after class on Friday a spelling test. They scored 90%, 100% and 95%. She writes in her report: 'Our pupils are excellent spellers: they average 95%.'",
    route: { S1: ['counted'] },
    cues: { S1: 'gave the three pupils who stayed after class on Friday a spelling test' },
    reason: { S1: 'The claim speaks for "our pupils", but the figure comes from three pupils who happened to stay after class: {cue:S1}. Three is too few for luck not to move the figure, and pupils who stay after class are not a fair picture of the school.' },
    not: { outcome: 'holds', why: 'The scores are real, but three pupils who stayed behind are not a fair picture of a school. One part fails, so the claim does not hold.' } },

  /* ---------- a claim that holds beside a claim that is built on figures the agents could push ---------- */
  { id: 'gate-p-census', use: 'drill', tier: 'clean', setting: 'community', topic: 'library visits counted by door counters',
    text: "The county library counted every visitor at its 12 branches with door counters of the same type, every month for two years. There were 495,000 visits in the first year and 540,000 in the second. The library says: 'Visits to our libraries rose by 9% in a year.'",
    route: { S1: ['holds'] },
    cues: { S1: 'counted every visitor at its 12 branches with door counters of the same type, every month for two years' },
    reason: { S1: 'Each part holds. Every visit at every library is counted, by the same kind of counter, for the whole two years: {cue:S1}. The percentage comes with the two numbers behind it, and the claim says only that visits rose.' },
    not: { outcome: 'compare', why: 'A percentage can hide the numbers behind it, but here the two numbers are given, 495,000 and 540,000, so nothing needed to read the figure is left out.' },
    wouldChange: 'If the library had said only that visits were "up 9%" and given no numbers, it would be {a:S1.compare}.' },

  { id: 'gate-p-targets', use: 'drill', tier: 'clean', setting: 'health', topic: 'a hospital judged on readmissions',
    text: "A hospital is ranked on how few patients come back within a week. Its readmission figure fell from 9% to 4% in two years, and it says: 'Our patients are doing much better after they leave.' In those two years the hospital began to log a patient who comes back within a week as a 'new admission' instead of a readmission.",
    route: { S1: ['measure'] },
    cues: { S1: "began to log a patient who comes back within a week as a 'new admission' instead of a readmission" },
    reason: { S1: 'The people in the figure are all of the hospital’s patients, so nothing is left out. What is counted changed, and it is the figure the hospital is ranked on: {cue:S1}. The figure can fall with exactly as many patients coming back.' },
    not: { outcome: 'cause', why: 'The hospital says its patients are doing better, but it does not say what made them do better. The trouble is earlier: the figure no longer counts what it is read as showing.' } }
]);
