// Statistical Claims, Unit One: cases shown inside cards, part three (the check
// after the question card, and the whole worked case, which also carries the key's tie-break). Field guide: see u1.cases-teach-1.js.
// also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key (yieldsTo).
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.

FC.cases('stats', 'u1', [
  /* ---------- The check after the question card ---------- */
  { id: 'gate-buses', use: 'check', tier: 'clean', setting: 'community', topic: 'bus use counted by the same readers for five years',
    text: "A city transit agency counts boardings on 40 bus routes with the same card readers every March. The counts were 1.1 million, 1.2 million, 1.2 million, 1.3 million and 1.4 million over five years. Every boarding on the 40 routes is counted, and the fare and the readers have not changed. The agency says: 'Bus use on these routes has grown over the past five years.'",
    route: { S1: ['holds'] },
    cues: { S1: 'Every boarding on the 40 routes is counted, and the fare and the readers have not changed' },
    reason: { S1: 'Take the parts in order. Every boarding on all 40 bus lines is counted, so nobody is left out. The same readers count it each year, and nothing about the fare has changed: {cue:S1}. The five counts are set side by side with the numbers given, and the claim says only that use has grown. It does not say why.' },
    not: { outcome: 'measure', why: 'A rise in a count can come from a change in how the count is made, but here the same readers count every boarding in all five years and the fare did not change. Nothing could move the figure without the real thing moving.' },
    miss: { measure: 'A new tool or a new rule could raise a count on its own, and you were right to look for one. But the case says the same readers counted in all five years and the fare did not change, so that way for the figure to move is ruled out.',
            cause: 'The claim says that bus use has grown. It does not say what made it grow, so there is no claim that one thing caused another.' } },

  { id: 'gate-spanish', use: 'teach', tier: 'misleading', setting: 'learning', topic: 'a Spanish course and a questionnaire', name: 'The Spanish course',
    also: ['cause'],
    text: "A language school says: 'Our 12-week Spanish course gets nine in ten students talking.' Forty of the students on the course had studied Spanish before they came. The school's figure is 54 out of 60 students who said they could hold a ten-minute conversation, in reply to a questionnaire it sent to all 600 who took the course.",
    route: { S1: ['counted'] },
    cues: { S1: '54 out of 60 students who said they could hold a ten-minute conversation, in reply to a questionnaire it sent to all 600 who took the course' } }
]);
