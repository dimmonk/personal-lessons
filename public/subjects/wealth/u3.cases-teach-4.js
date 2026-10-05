// Wealth Preservation, Unit Three: cases shown inside cards, part four (the check on the key's question, and the two whole cases).
// Field guide: see u3.cases-teach-1.js.

FC.cases('wealth', 'u3', [

  /* ---------- The check on the key's question: a case in which nothing is wrong ---------- */
  { id: 'w3-h-q-chk', use: 'check', tier: 'clean', setting: 'property', topic: 'four flats, each in a company of its own', name: 'Rosario and the four companies',
    text: "Rosario, 54, owns four flats that she rents out, each in a company of its own that she owns, and the house she lives in is in her own name. Each flat is worth £220,000, her house is worth £450,000, and she has £110,000 in savings. A tenant who is hurt in one flat can claim only against the company that owns that flat.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['each in a company of its own that she owns', 'A tenant who is hurt in one flat can claim only against the company that owns that flat'] },
    reason: { S1: 'Several properties could each bring {t:claim}, which is why the first question gave its answer, but the case shows them already held apart: {cue:S1}. A demand on one flat could reach £220,000 and no more, not her house or her savings. Nothing is left to put right.' } },

  /* ---------- The two whole cases, watched ---------- */
  { id: 'w3-h-wk-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'wage shares from a past employer', name: 'Elena and the solar shares',
    text: "Elena, 40, was an engineer at a solar-panel company. Over six years the company paid part of her wages in shares, and she now owns £360,000 of them, which is most of the £420,000 she has. She left the company last year and works elsewhere. Nothing in the company’s rules stops her selling the shares, and her other money is £60,000 in savings.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'she now owns £360,000 of them, which is most of the £420,000 she has',
            S1: ['She left the company last year and works elsewhere', 'Nothing in the company’s rules stops her selling the shares'] } },

  { id: 'w3-h-wk-2', use: 'teach', tier: 'misleading', setting: 'business', topic: 'a brewery and a friend’s warning', name: 'Greta and the brewery',
    text: "Greta, 62, runs the family brewery, worth £1,400,000, which is most of the £2,000,000 she owns. This morning a friend told her: “Your whole life is in one place. A fire or a bad year, and you are finished. Sell half and buy funds.” Greta has £420,000 in funds that hold thousands of companies, and £180,000 in savings, which is six years of the £30,000 her household spends. No bank holds her shares in the brewery as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'worth £1,400,000, which is most of the £2,000,000 she owns',
            S1: ['£420,000 in funds that hold thousands of companies', 'which is six years of the £30,000 her household spends', 'No bank holds her shares in the brewery as security'] } }
]);
