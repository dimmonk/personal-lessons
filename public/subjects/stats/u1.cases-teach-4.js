// Statistical Claims, Unit One: cases shown inside cards, part six (the three exceptions that carry the key's tie-break, the check
// after the question card, and the two whole worked cases). Field guide: see u1.cases-teach-1.js.
// also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key (yieldsTo).
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.

FC.cases('stats', 'u1', [

  /* ---------- The tie-break: a claim of cause on top of a problem in an earlier part ---------- */
  { id: 'gate-finishers', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a weight-loss program and the members who stayed', name: 'The finishers',
    also: ['cause'],
    text: "A gym's ad says: 'Our 12-week program makes you lose weight: members lose an average of 15 pounds.' The 15 pounds is the average for the 140 members who finished all 12 weeks. Another 360 members started the program and dropped out before the end. Gym staff say that members who are not losing weight tend to give up early.",
    route: { S1: ['counted'] },
    cues: { S1: ['the average for the 140 members who finished all 12 weeks', 'Another 360 members started the program and dropped out before the end'] },
    segments: [
      { text: "A gym's ad says: 'Our 12-week program makes you lose weight: members lose an average of 15 pounds.'", note: 'That is the claim, and it is why the case looks like one about what caused what. What settles the answer is who the 15 pounds was worked out from, which comes next.' },
      { text: 'The 15 pounds is the average for the 140 members who finished all 12 weeks.' },
      { text: 'Another 360 members started the program and dropped out before the end.', note: 'That tells you how many are missing, and it matters. But the words that settle what the figure was worked out from are in the sentence before: it is the finishers.' },
      { text: 'Gym staff say that members who are not losing weight tend to give up early.', note: 'That is another way to explain the result, and it is why the case also shows a claim of cause. It is not what settles the answer.' }
    ] },

  { id: 'gate-bonus', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a bonus for short calls', name: 'The bonus',
    also: ['cause'],
    text: "Since a call center began paying agents a bonus for every call closed in under four minutes, the number of calls handled per hour has risen from 11 to 16. The manager says: 'The bonus has improved our service.' Callers say they are cut off more often.",
    route: { S1: ['measure'] },
    cues: { S1: 'a bonus for every call closed in under four minutes' },
    segments: [
      { text: 'Since a call center began paying agents a bonus for every call closed in under four minutes, the number of calls handled per hour has risen from 11 to 16.' },
      { text: "The manager says: 'The bonus has improved our service.'", note: 'That is the claim, and it is why the case looks like one about what caused what. What settles the answer is what the figure counts, and that is in the first sentence.' },
      { text: 'Callers say they are cut off more often.', note: 'That confirms the answer, but the words that settle it come earlier: what the agents are paid for.' }
    ] },

  { id: 'gate-advert', use: 'teach', tier: 'misleading', setting: 'money', topic: 'sales up by a percentage after a radio ad', name: 'The radio ad',
    also: ['cause'],
    text: "A shop owner says: 'Since our radio ad ran, our sales are up 300%. The ad worked!' She does not say what the sales were before. A street fair began on the same weekend the ad first ran.",
    route: { S1: ['compare'] },
    cues: { S1: 'She does not say what the sales were before' },
    segments: [
      { text: "A shop owner says: 'Since our radio ad ran, our sales are up 300%.", note: 'That is the figure, and it is a percentage. But a percentage is a trouble only when what it is a percentage of is left out, and the case says so in another sentence.' },
      { text: "The ad worked!'", note: 'That is the claim that one thing caused another, and it is why the case looks like one about what caused what. What settles the answer comes before it.' },
      { text: 'She does not say what the sales were before.' },
      { text: 'A street fair began on the same weekend the ad first ran.', note: 'That is another way for the sales to have risen, which is why the case also shows a claim of cause. It is not what settles the answer.' }
    ] },

  /* ---------- The check after the question card ---------- */
  { id: 'gate-buses', use: 'check', tier: 'clean', setting: 'community', topic: 'bus use counted by the same readers for five years',
    text: "A city transit agency counts boardings on 40 bus routes with the same card readers every March. The counts were 1.1 million, 1.2 million, 1.2 million, 1.3 million and 1.4 million over five years. Every boarding on the 40 routes is counted, and the fare and the readers have not changed. The agency says: 'Bus use on these routes has grown over the past five years.'",
    route: { S1: ['holds'] },
    cues: { S1: 'Every boarding on the 40 routes is counted, and the fare and the readers have not changed' },
    reason: { S1: 'Take the parts in order. Every boarding on all 40 bus lines is counted, so nobody is left out. The same readers count it each year, and nothing about the fare has changed: {cue:S1}. The five counts are set side by side with the numbers given, and the claim says only that use has grown. It does not say why.' },
    not: { outcome: 'measure', why: 'A rise in a count can come from a change in how the count is made, but here the same readers count every boarding in all five years and the fare did not change. Nothing could move the figure without the real thing moving.' },
    miss: { measure: 'A new tool or a new rule could raise a count on its own, and you were right to look for one. But the case says the same readers counted in all five years and the fare did not change, so that way for the figure to move is ruled out.',
            cause: 'The claim says that bus use has grown. It does not say what made it grow, so there is no claim that one thing caused another.' } },

  /* ---------- The two whole worked cases ---------- */
  { id: 'gate-walkers', use: 'teach', tier: 'clean', setting: 'work', topic: 'a lunchtime walking club and sick days', name: 'The walking club',
    text: "A firm's HR office looked at the sick days of all 300 employees last year, from payroll records. The 90 employees who joined the lunchtime walking club took an average of 4 sick days, and the 210 who did not join took 7. The HR manager says: 'The walking club cuts sick days.' Employees chose whether to join, and most club members already walked to work and took the stairs.",
    route: { S1: ['cause'] },
    cues: { S1: 'The walking club cuts sick days' } },

  { id: 'gate-spanish', use: 'teach', tier: 'misleading', setting: 'learning', topic: 'a Spanish course and a questionnaire', name: 'The Spanish course',
    also: ['cause'],
    text: "A language school says: 'Our 12-week Spanish course gets nine in ten students talking.' Forty of the students on the course had studied Spanish before they came. The school's figure is 54 out of 60 students who said they could hold a ten-minute conversation, in reply to a questionnaire it sent to all 600 who took the course.",
    route: { S1: ['counted'] },
    cues: { S1: '54 out of 60 students who said they could hold a ten-minute conversation, in reply to a questionnaire it sent to all 600 who took the course' } }
]);
