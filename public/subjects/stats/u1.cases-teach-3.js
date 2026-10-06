// Statistical Claims, Unit One: cases shown inside cards, part two (the fifth answer, "Nothing goes wrong", and its two look-alike pairs).
// Field guide: see u1.cases-teach-1.js. Each look-alike pair sets one claim that holds beside the same claim with one thing wrong in it,
// so that only the deciding words differ (P26). Every case that holds is a claim that really holds in all four parts.

FC.cases('stats', 'u1', [

  /* ---------- Nothing goes wrong ---------- */
  { id: 'gate-poll', use: 'teach', tier: 'clean', setting: 'health', topic: 'a county survey of smoking', name: 'The county survey',
    text: "A county health office phoned 1,100 adults whose numbers were drawn by lottery from the full list of landline and cell phone numbers in the county. It tried each number up to six times and reached 1,000 of them. Thirty-one percent of the 1,000 said they smoke. The office reports: 'About three in ten adults in the county smoke, give or take three points.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drawn by lottery from the full list of landline and cell phone numbers in the county. It tried each number up to six times and reached 1,000 of them' } },

  { id: 'gate-trial', use: 'check', tier: 'clean', setting: 'learning', topic: 'a reading program and classrooms chosen from a hat',
    text: "A school district has 80 classrooms. It drew 40 names from a hat to choose which classrooms use a new reading program for a year. All 80 classrooms were tested the same way at the end of the year, and the 40 with the program averaged 8 points higher. The district says: 'The program raised reading scores.'",
    route: { S1: ['holds'] },
    cues: { S1: 'It drew 40 names from a hat to choose which classrooms use a new reading program for a year' },
    segments: [
      { text: 'A school district has 80 classrooms.', note: 'That tells you who is in the figure, and it is all of them, which is a good start. But you were asked how the two groups were formed.' },
      { text: 'It drew 40 names from a hat to choose which classrooms use a new reading program for a year.' },
      { text: 'All 80 classrooms were tested the same way at the end of the year, and the 40 with the program averaged 8 points higher.', note: 'That is the result, and it is fair, since every classroom was tested the same way. But how the groups were formed is in the sentence before.' },
      { text: "The district says: 'The program raised reading scores.'", note: 'That is the claim, and it says one thing caused another. What lets it stand is how the groups were formed, in the second sentence.' }
    ],
    reason: { S1: 'Take the parts in order. All 80 classrooms are in the figure, all were tested the same way, and the two averages are set side by side. Then the district says the program raised scores, which is a claim of cause. What lets it stand is this: {cue:S1}. Nobody chose, so no other difference is likelier to be in one group than in the other, and the case offers no other way to explain the result.' },
    not: { outcome: 'cause', why: 'A claim of cause is usually weak because the groups picked themselves, and here they did not. The names were drawn from a hat, so the case shows no other way the result could have come about.' } },

  /* ---------- The look-alike pair: same café, same list, same 90% ---------- */
  { id: 'gate-cafe-few', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a café survey with few replies',
    text: "Brindle Café sent a survey to the 800 customers on its mailing list. Seventy-two replied, and 65 of them said they love the new menu. Nobody was asked again. The owner says: 'Nine in ten of our regulars love the new menu.'",
    route: { S1: ['counted'] },
    cues: { S1: 'Seventy-two replied, and 65 of them said they love the new menu. Nobody was asked again' } },

  { id: 'gate-cafe-followed', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a café survey with nearly everyone',
    text: "Brindle Café sent a survey to the 800 customers on its mailing list, then rang everyone who had not replied. In all, 720 answered, and 648 of them said they love the new menu. The owner says: 'Nine in ten of the customers on our mailing list love the new menu.'",
    route: { S1: ['holds'] },
    cues: { S1: 'then rang everyone who had not replied. In all, 720 answered' } },

  /* ---------- The look-alike pair: same gym, same class, members chose or a lottery chose ---------- */
  { id: 'gate-gym-chosen', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a gym class that members chose',
    text: "A gym looked at its 300 members, all weighed the same way. The members who chose the morning class lost 6 pounds on average, and the others lost 2. The gym says: 'The morning class makes you lose weight.' The keenest members are the ones who pick the morning class.",
    route: { S1: ['cause'] },
    cues: { S1: 'The morning class makes you lose weight' } },

  { id: 'gate-gym-lottery', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a gym class chosen by lottery',
    text: "A gym drew the names of 150 of its 300 members by lottery to join the morning class for 12 weeks. The other 150 kept to their usual routine. All 300 were weighed the same way before and after. The morning-class members lost 6 pounds on average, and the others lost 2. The gym says: 'The morning class makes you lose weight.'",
    route: { S1: ['holds'] },
    cues: { S1: 'drew the names of 150 of its 300 members by lottery to join the morning class for 12 weeks' } }
]);
