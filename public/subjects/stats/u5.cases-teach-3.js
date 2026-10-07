// Statistical Claims, Unit Five: stories shown inside cards, part three: Simpson's paradox, its look-alike beside a claim that holds, and the worked claim.

FC.cases('stats', 'u5', [

  /* ---------- Simpson's paradox ---------- */
  { id: 'simp-tutors', use: 'teach', tier: 'clean', setting: 'learning', topic: 'two math tutors', name: 'The two tutors',
    text: "A tutoring website compares two math tutors. It lists: 'Ms. Hale: 75 of her 100 students passed the exam. Mr. Ruiz: 54 of his 100 students passed.' It tells families to choose Ms. Hale. The site's own records show that Ms. Hale's students were mostly ones who were already doing well, and Mr. Ruiz's were mostly ones who were already failing.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: "Ms. Hale's students were mostly ones who were already doing well, and Mr. Ruiz's were mostly ones who were already failing" } },

  { id: 'simp-phones', use: 'check', tier: 'clean', setting: 'money', topic: 'two phone repair shops', name: 'The two repair shops',
    text: "A phone-repair ad says: 'Fixed first time: 78 of 100 phones at Quickfix, 59 of 100 at Phone Doctor. Choose Quickfix.' Phone Doctor takes mostly water-damaged phones, which are hard to fix. Quickfix takes mostly cracked screens, which are easy.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Phone Doctor takes mostly water-damaged phones, which are hard to fix' },
    reason: { C1: 'The two shops get different mixes: {cue:C1}. Phone Doctor does better with both kinds (95 against 90 in 100 on cracked screens, 50 against 30 on water damage) and still has the lower total.' } },

  /* ---------- Simpson's paradox, beside A fair comparison: the same two coaches ---------- */
  { id: 'la6-coach-mix', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'two swim coaches, the mix hidden', name: 'The two coaches',
    text: "A swim club's newsletter says: 'Coach Dana's swimmers: 80 of 100 improved their time this season. Coach Eli's: 60 of 100.' It names Dana the better coach. Dana's swimmers are almost all beginners, who improve fast. Eli's are almost all national-level swimmers, who improve slowly.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: "Dana's swimmers are almost all beginners, who improve fast" } },

  { id: 'la6-coach-same', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'two swim coaches, the same mix', name: 'The two coaches, same mix',
    text: "A swim club's newsletter says: 'Coach Dana's swimmers: 80 of 100 improved their time this season. Coach Eli's: 60 of 100.' Each coach has 50 beginners and 50 national-level swimmers, and every swimmer was timed the same way in the same pool.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { H1: 'Each coach has 50 beginners and 50 national-level swimmers' } },

  /* ---------- The worked claim, where the story points the wrong way ---------- */
  { id: 'wk-county', use: 'teach', tier: 'misleading', setting: 'health', topic: 'two hospitals and heart surgery', name: 'The county report',
    text: "A county report says: 'Deaths after heart surgery are 20% lower at St. Mark's than at County General: 120 deaths in 1,000 operations at St. Mark's, against 150 in 1,000 at County General.' The report adds that County General is the only hospital in the county that operates on the sickest patients, and that St. Mark's turns most of them away.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: "Deaths after heart surgery are 20% lower at St. Mark's than at County General",
            C1: "County General is the only hospital in the county that operates on the sickest patients, and that St. Mark's turns most of them away" } }
]);
