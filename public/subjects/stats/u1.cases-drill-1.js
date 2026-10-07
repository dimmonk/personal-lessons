// Statistical Claims, Unit One: drill cases, first stage (the key's first question on its own, on clean cases).
// Every drill case is new: none of them appears in a card. Each carries the words that decide the first question (cues.S1), the reason
// for its answer (reason.S1), and not: the nearest wrong answer and why it fails here. These cases, with the route-stage cases and the
// return cases, are the bank that later units draw their earlier-unit items from. One of the piece cases holds, so that the
// stage always has a claim with nothing wrong in it (P26, V37).

FC.cases('stats', 'u1', [

  /* ---------- who is in the figure beside what the figure counts ---------- */
  { id: 'gate-p-lobby', use: 'drill', tier: 'clean', setting: 'work', topic: 'an office poll taken at eight on a Monday',
    text: "To find out whether staff like the new open-plan office, the manager asked the 20 people who were working in the office at eight o'clock on Monday morning. Seventeen said they like it. The firm has 400 staff. She tells the board: 'Staff overwhelmingly like the new office.'",
    route: { S1: ['counted'] },
    cues: { S1: "asked the 20 people who were working in the office at eight o'clock on Monday morning" },
    reason: { S1: 'The claim speaks for all 400 staff, but the number comes only from the 20 who were in at eight on a Monday: {cue:S1}. Early arrivals are not a fair picture of everyone.' },
    not: { outcome: 'measure', why: 'Staff were asked a simple question, and nothing about how the answers are counted changed. The trouble is who was asked.' } },

  { id: 'gate-p-scale', use: 'drill', tier: 'clean', setting: 'health', topic: 'a weight-loss club and new scales',
    text: "A weight-loss club boasts: 'Our members lost an average of 5 pounds in three months.' Every member was weighed at the start and again at the end. At the halfway point the club swapped its old scales for new ones that read 3 pounds lighter.",
    route: { S1: ['measure'] },
    cues: { S1: 'swapped its old scales for new ones that read 3 pounds lighter' },
    reason: { S1: 'The weigh-ins were fair, but the scales changed: {cue:S1}. Three of the five pounds could come from the scales alone.' },
    not: { outcome: 'counted', why: 'Nobody is left out: every member was weighed at the start and at the end. The trouble is the scales, which changed what a pound lost means.' } },

  /* ---------- what the figure is set beside beside what the claim says caused what ---------- */
  { id: 'gate-p-raise', use: 'drill', tier: 'clean', setting: 'money', topic: 'a savings account that pays more',
    text: "A bank advertises: 'Our new savings account pays 50% more interest.' It does not say more than what, or how much interest the account pays.",
    route: { S1: ['compare'] },
    cues: { S1: 'Our new savings account pays 50% more interest' },
    reason: { S1: 'The claim never says what the 50% is a percentage of: {cue:S1}. Fifty percent more than 0.1% is still very little, and fifty percent more than 4% is a lot.' },
    not: { outcome: 'holds', why: 'Nothing says what the interest is more than, or how much it is. The claim leaves out what you need beside the number.' } },

  { id: 'gate-p-lamps', use: 'drill', tier: 'clean', setting: 'community', topic: 'new street lamps and break-ins',
    text: "A town put new lamps along Mill Road in March. In the six months after, break-ins on Mill Road fell from 20 to 12, and the mayor says: 'The new lamps cut crime.' In the same six months a neighborhood watch also began, and its members patrol Mill Road at night.",
    route: { S1: ['cause'] },
    cues: { S1: 'The new lamps cut crime' },
    reason: { S1: 'The mayor says this: {cue:S1}. But a neighborhood watch began in the same six months, which could explain the fall.' },
    not: { outcome: 'compare', why: 'The numbers, 20 and 12, are given and counted the same way both times. The trouble is the step to a cause.' } },

  /* ---------- a claim that holds beside a claim with trouble in the first part ---------- */
  { id: 'gate-p-roll', use: 'drill', tier: 'clean', setting: 'money', topic: 'new accounts counted by one definition',
    text: "A bank counted every account it opened in each of the last five years, using the same definition of an account throughout. It opened 4,000 in the first year and 4,800 in the fifth. The bank says: 'We open more accounts now than we did five years ago.'",
    route: { S1: ['holds'] },
    cues: { S1: 'using the same definition of an account throughout' },
    reason: { S1: 'Every account is counted the same way in all five years: {cue:S1}. The claim says only that more are opened now, not why.' },
    not: { outcome: 'measure', why: 'A new definition of an account could raise the count with no more customers. But the same definition was used in all five years.' } }
]);
