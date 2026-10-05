// Statistical Claims, Unit Five: cases shown inside cards, part three: Simpson's paradox, the last look-alike pair, and the two worked claims.

FC.cases('stats', 'u5', [

  /* ---------- Simpson's paradox ---------- */
  { id: 'simp-tutors', use: 'teach', tier: 'clean', setting: 'learning', topic: 'two math tutors', name: 'The two tutors',
    text: "A tutoring website compares two math tutors. It lists: 'Ms. Hale: 75 of her 100 students passed the exam. Mr. Ruiz: 54 of his 100 students passed.' It tells families to choose Ms. Hale. The site's own records show that Ms. Hale's students were mostly ones who were already doing well, and Mr. Ruiz's were mostly ones who were already failing.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: "Ms. Hale's students were mostly ones who were already doing well, and Mr. Ruiz's were mostly ones who were already failing" } },

  { id: 'simp-hospitals', use: 'teach', tier: 'clean', setting: 'health', topic: 'two hospitals and their recoveries', name: 'The two hospitals',
    text: "A local paper compares two hospitals: 'Lakeside: 860 of 1,000 patients recovered. Parkview: 690 of 1,000.' It tells readers to choose Lakeside. Parkview is the regional hospital that other hospitals send their most serious patients to. Lakeside treats mostly mild illness.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Parkview is the regional hospital that other hospitals send their most serious patients to' },
    segments: [
      { text: 'A local paper compares two hospitals', note: 'That tells you what the paper is doing. It is not what each total is made of.' },
      { text: 'Lakeside: 860 of 1,000 patients recovered. Parkview: 690 of 1,000', note: 'Those are the two totals. What you are looking for is what each total is made of.' },
      { text: 'Parkview is the regional hospital that other hospitals send their most serious patients to' },
      { text: 'Lakeside treats mostly mild illness', note: 'That is half of the answer: it says what Lakeside\'s total is made of. The words asked for are the ones that show the same thing as the first case, which is where the hard ones went.' }
    ] },

  { id: 'simp-phones', use: 'check', tier: 'clean', setting: 'money', topic: 'two phone repair shops', name: 'The two repair shops',
    text: "A phone-repair ad says: 'Fixed first time: 78 of 100 phones at Quickfix, 59 of 100 at Phone Doctor. Choose Quickfix.' Phone Doctor takes mostly water-damaged phones, which are hard to fix. Quickfix takes mostly cracked screens, which are easy.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: 'Phone Doctor takes mostly water-damaged phones, which are hard to fix' },
    reason: { C1: 'The ad sets two totals side by side, and the case says that each shop gets a different mix: {cue:C1}. Break each total down by kind of phone. Cracked screens: Phone Doctor fixed 19 of 20 (95 in every 100), and Quickfix 72 of 80 (90 in every 100). Water damage: Phone Doctor fixed 40 of 80 (50 in every 100), and Quickfix 6 of 20 (30 in every 100). Phone Doctor is better with both kinds of phone and still has the lower total, because most of its phones were the hard kind.' } },

  /* ---------- Simpson's paradox, beside A fair comparison: the same two coaches ---------- */
  { id: 'la6-coach-mix', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'two swim coaches, the mix hidden', name: 'The two coaches',
    text: "A swim club's newsletter says: 'Coach Dana's swimmers: 80 of 100 improved their time this season. Coach Eli's: 60 of 100.' It names Dana the better coach. Dana's swimmers are almost all beginners, who improve fast. Eli's are almost all national-level swimmers, who improve slowly.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { C1: "Dana's swimmers are almost all beginners, who improve fast" } },

  { id: 'la6-coach-same', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'two swim coaches, the same mix', name: 'The two coaches, same mix',
    text: "A swim club's newsletter says: 'Coach Dana's swimmers: 80 of 100 improved their time this season. Coach Eli's: 60 of 100.' Each coach has 50 beginners and 50 national-level swimmers, and every swimmer was timed the same way in the same pool.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { H1: 'Each coach has 50 beginners and 50 national-level swimmers' } },

  /* ---------- The two worked claims: a clean one, then one whose story points the wrong way ---------- */
  { id: 'wk-savings', use: 'teach', tier: 'clean', setting: 'money', topic: 'a savings account ad', name: 'The savings ad',
    text: "A bank's ad says: 'Our new savings account pays 50% more interest.' The ad does not say what rate it pays now or what the old rate was.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'pays 50% more interest', C1: 'does not say what rate it pays now or what the old rate was' } },

  { id: 'wk-county', use: 'teach', tier: 'misleading', setting: 'health', topic: 'two hospitals and heart surgery', name: 'The county report',
    text: "A county report says: 'Deaths after heart surgery are 20% lower at St. Mark's than at County General: 120 deaths in 1,000 operations at St. Mark's, against 150 in 1,000 at County General.' The report adds that County General is the only hospital in the county that operates on the sickest patients, and that St. Mark's turns most of them away.",
    outcome: 'simpson', route: { S1: ['compare'], C1: ['split'] },
    cues: { S1: "Deaths after heart surgery are 20% lower at St. Mark's than at County General",
            C1: "County General is the only hospital in the county that operates on the sickest patients, and that St. Mark's turns most of them away" } }
]);
