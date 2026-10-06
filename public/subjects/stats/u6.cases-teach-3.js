// Statistical Claims, Unit Six: cases shown inside cards, part three (the check after the question card and the two whole worked cases).
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy. Field guide: see u6.cases-teach-1.js.

FC.cases('stats', 'u6', [

  /* ---------- The check after the question card ---------- */
  { id: 'k-q-latebus', use: 'check', tier: 'clean', setting: 'community', topic: 'a late bus and club attendance', name: 'The late bus',
    text: "A school district says: 'Students who ride the new late bus go to after-school clubs twice as often as students who do not, so the late bus boosts club attendance.' The 140 students who ride it average 2.4 club visits a month, and the 460 who do not average 1.2. Families chose whether their child rides, and the district’s survey shows that most late-bus riders live more than six miles from school, where no other bus runs after 4 p.m.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the late bus boosts club attendance', K1: 'most late-bus riders live more than six miles from school, where no other bus runs after 4 p.m.' },
    reason: { K1: 'Families chose whether their child rides, so nobody formed the groups, and the survey shows something else that differs between them: {cue:K1}. Students who live far away can only stay for a club if a late bus exists, so the late bus and the club visits can both come from where they live. Another of the four answers does not fit: nothing shows the clubs came first, and no group was picked for being at an extreme.' } },

  { id: 'k-gym-all', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'personal training for the members who signed up', name: 'Training for those who signed up',
    text: "A gym says: 'Our personal-training program works. The 90 members who signed up for it lost an average of 6 pounds in a year.' The gym has no weight figures for any member who did not sign up.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our personal-training program works', K1: 'The gym has no weight figures for any member who did not sign up' } },

  { id: 'k-gym-two', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'personal training beside the members who did not sign up', name: 'Training beside the rest',
    text: "A gym says: 'Our personal-training program works. The 90 members who signed up for it lost an average of 6 pounds in a year, and the 410 who did not lost an average of 1 pound.' Of the 90 who signed up, 70 joined the gym this year, against 60 of the 410 others, and new members lose weight fastest in their first year.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'Our personal-training program works', K1: 'Of the 90 who signed up, 70 joined the gym this year, against 60 of the 410 others' } },

  { id: 'k-w-swim', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'extra practice offered to the slowest swimmers', name: 'The slowest swimmers', also: ['anyway'],
    text: "A swim club offers a free extra-practice program to its ten slowest swimmers, and all ten sign up. At the next meet their 100-meter times are 2.5 seconds faster on average, down from 74.0 to 71.5. 'The extra practice works,' the coach says. The club has no figures for any swimmer who did not take the program.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The extra practice works', K1: 'its ten slowest swimmers' } }
]);
