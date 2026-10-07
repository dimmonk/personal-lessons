// Wealth Preservation, Unit Three: cases shown inside cards, part two (claims, properties in one name, a loan, the two exceptions, the check on the question, and the whole case). Field guide: u3.cases-teach-1.js.
// Every case carries its full route (the first question, then this unit's one question). cues[STEP] is the exact phrase in the text
// that decides that step; segments are the tappable pieces for "tap the words" prompts, and note is shown if that piece is tapped in error.

FC.cases('wealth', 'u3', [

  /* ---------- Insure the big loss ---------- */
  { id: 'w3-h-ins-1', use: 'teach', tier: 'clean', setting: 'home', topic: 'a swimming pool and a cap on coverage', name: 'Hari and the pool',
    text: "Hari, 53, owns a house worth $700,000 and has $250,000 in savings and investments. His house has a swimming pool, and the neighbors’ children often swim in it. His home insurance pays up to $500,000 if someone is hurt on his property. A lawyer he knows says that a serious injury to a child can lead to a demand for $2,000,000 or more.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'a serious injury to a child can lead to a demand for $2,000,000 or more',
            S1: ['His home insurance pays up to $500,000 if someone is hurt on his property', 'a serious injury to a child can lead to a demand for $2,000,000 or more'] } },

  { id: 'w3-h-ins-chk', use: 'check', tier: 'clean', setting: 'property', topic: 'a vacation cabin and steep stairs', name: 'Rob and the vacation cabin',
    text: "Rob, 60, owns a vacation cabin that he rents to guests, worth $450,000, and has $200,000 in savings. His landlord’s insurance pays up to $400,000 if a guest is hurt. A guest who falls on the steep stairs and cannot work again could ask for $1,800,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { S1: ['His landlord’s insurance pays up to $400,000 if a guest is hurt', 'A guest who falls on the steep stairs and cannot work again could ask for $1,800,000'] },
    reason: { S1: 'The cabin could bring {t:claim}, and the insurance has a limit: {cue:S1}. $1,800,000 less $400,000 leaves $1,400,000, more than the $650,000 Rob owns.' } },

  /* ---------- Separate companies for each property or business ---------- */
  { id: 'w3-h-t-company', use: 'teach', tier: 'clean', setting: 'property', topic: 'two rental houses, one owned through a company', name: 'Ana and Bo',
    text: "Ana and Bo each own a small house worth $250,000 that they rent out, and each also lives in a home worth $500,000. Ana owns her rental in her own name. Bo’s rental belongs to an LLC he set up, which has $20,000 in its bank account; Bo owns the LLC, and his home is in his own name. In each rental a tenant is badly hurt in a fall on the stairs. Each tenant wins $400,000 from the owner, and each owner’s insurance pays $100,000 of it, which leaves $300,000 to find." },

  { id: 'w3-h-ent-1', use: 'teach', tier: 'clean', setting: 'property', topic: 'six rental houses, a store and a home in one name', name: 'Chioma’s properties',
    text: "Chioma, 56, owns six houses that she rents out, a store and her own home. Every one of them is in her own name, and so is $60,000 in savings. The rental houses are worth $200,000 each, the store $250,000 and the home $390,000, which is $1,900,000 in all. Each rental house has a tenant, and so does the store, and any of them could be hurt on the premises and bring a claim.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { D1: 'Every one of them is in her own name, and so is $60,000 in savings',
            S1: ['Every one of them is in her own name', 'any of them could be hurt on the premises and bring a claim'] } },

  { id: 'w3-h-ent-chk', use: 'check', tier: 'clean', setting: 'retirement', topic: 'rented houses, all in one name', name: 'Gil and the student houses',
    text: "Gil, 68, retired from construction. He owns four houses that he rents out to students, and the house he lives in, all in his own name. Together they are worth $1,300,000, and any tenant who is badly hurt could bring a claim against him.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { S1: ['all in his own name', 'any tenant who is badly hurt could bring a claim against him'] },
    reason: { S1: 'Gil owns several properties, all in his own name, and {t:claim} is possible on each: {cue:S1}. One claim on one house could reach the other three and his own home, $1,300,000 in all.' } },

  { id: 'w3-h-exc-ins', use: 'teach', tier: 'misleading', setting: 'property', topic: 'five rental houses and a dangerous stair', name: 'Kwame and the old stairs', also: ['onename'],
    text: "Kwame, 59, owns five rental houses and the house he lives in, all in his own name, worth $1,400,000 together. A lawyer who looked at the stairs in the oldest rental says that a tenant badly hurt in a fall there could win $2,000,000. Kwame’s landlord insurance pays up to $300,000 on any one claim.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'could win $2,000,000',
            S1: ['a tenant badly hurt in a fall there could win $2,000,000', 'Kwame’s landlord insurance pays up to $300,000 on any one claim'] },
    segments: [
      { text: 'Kwame, 59, owns five rental houses and the house he lives in, all in his own name, worth $1,400,000 together.',
        note: 'That is why this looks like several properties in one name, and it is true. But {t:claim} the insurance cannot meet comes first.' },
      { text: ' A lawyer who looked at the stairs in the oldest rental says that a tenant badly hurt in a fall there could win $2,000,000.' },
      { text: ' Kwame’s landlord insurance pays up to $300,000 on any one claim.',
        note: 'That is the other half of the comparison. The words that settle it are the ones that show the size of the claim.' }
    ] },

  /* ---------- Borrow modestly, on safe terms ---------- */
  { id: 'w3-h-del-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'shares bought with a margin loan', name: 'Ian and the margin loan',
    text: "Ian, 54, owns shares worth $600,000. He owes his brokerage $350,000 on a margin loan he used to buy them, and the shares are the brokerage’s security for it. The contract says that if the loan ever becomes more than 60% of what the shares are worth, Ian must pay in more money within two days, or the brokerage will sell some of his shares.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'or the brokerage will sell some of his shares',
            S1: 'if the loan ever becomes more than 60% of what the shares are worth, Ian must pay in more money within two days, or the brokerage will sell some of his shares' } },

  { id: 'w3-h-del-chk', use: 'check', tier: 'clean', setting: 'retirement', topic: 'a loan due in full after five years', name: 'Maribel and the five-year loan',
    text: "Maribel, 66, owns a condo worth $500,000 and a $60,000 IRA. She owes $420,000 on the condo. The bank can change the rate every six months, and the loan must be repaid in full at the end of five years.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { S1: ['The bank can change the rate every six months'] },
    segments: [
      { text: 'Maribel, 66, owns a condo worth $500,000 and a $60,000 IRA. She owes $420,000 on the condo.',
        note: 'That shows the size of the loan: 84% of the condo. The words asked for show the bank’s power to change the terms.' },
      { text: ' The bank can change the rate every six months' },
      { text: ', and the loan must be repaid in full at the end of five years.',
        note: 'That is a second way the loan could cause trouble. The words asked for are the ones about the rate.' }
    ],
    reason: { S1: 'The cost of the loan can jump: {cue:S1}.' } },

  { id: 'w3-h-exc-sup', use: 'teach', tier: 'misleading', setting: 'business', topic: 'tire shops and a demand clause', name: 'Reza and the tire shops', also: ['riskyloan'],
    text: "Reza, 52, runs a small chain of tire shops worth $900,000, which is most of the $1,100,000 he owns. Two years ago he borrowed $200,000 from a bank to open a new shop. The loan agreement says the bank can demand the money back if sales in any three months fall below $60,000, and that the bank may take his shares in the company if he cannot repay it. His savings are $15,000 and his household spends $36,000 a year; the rest of what he owns is $185,000 in funds that hold thousands of companies.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'worth $900,000, which is most of the $1,100,000 he owns',
            S1: ['runs a small chain of tire shops', 'the bank may take his shares in the company if he cannot repay it', 'His savings are $15,000 and his household spends $36,000 a year'] },
    segments: [
      { text: 'Reza, 52, runs a small chain of tire shops worth $900,000, which is most of the $1,100,000 he owns.' },
      { text: ' Two years ago he borrowed $200,000 from a bank to open a new shop. The loan agreement says the bank can demand the money back if sales in any three months fall below $60,000, and that the bank may take his shares in the company if he cannot repay it.',
        note: 'That is why this looks like a loan the lender could use, and it is true. But the loan is against the shares of a business he runs, which is one of {t:threesupports}, so it belongs to this answer.' },
      { text: ' His savings are $15,000 and his household spends $36,000 a year; the rest of what he owns is $185,000 in funds that hold thousands of companies.',
        note: 'That shows a second safety net missing: $15,000 covers about five months. It is not what settles the answer.' }
    ] },

  /* ---------- The check on the question, and the whole case ---------- */
  { id: 'w3-h-q-chk', use: 'check', tier: 'clean', setting: 'property', topic: 'four rental condos, each in a company of its own', name: 'Rosario and the four companies',
    text: "Rosario, 54, owns four condos that she rents out, each in an LLC of its own that she owns, and the house she lives in is in her own name. Each condo is worth $220,000, her house is worth $450,000, and she has $110,000 in savings. A tenant who is hurt in one condo can claim only against the LLC that owns that condo.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['each in an LLC of its own that she owns', 'A tenant who is hurt in one condo can claim only against the LLC that owns that condo'] },
    reason: { S1: 'Several properties could each bring {t:claim}, but each is already held apart: {cue:S1}. One claim on one condo could reach $220,000 and no more, not her house or her savings.' } },

  { id: 'w3-h-wk-2', use: 'teach', tier: 'misleading', setting: 'business', topic: 'a brewery and a friend’s warning', name: 'Greta and the brewery',
    text: "Greta, 62, runs the family brewery, worth $1,400,000, which is most of the $2,000,000 she owns. This morning a friend told her: “Your whole life is in one place. A fire or a bad year, and you are finished. Sell half and buy funds.” Greta has $420,000 in funds that hold thousands of companies, and $180,000 in savings, which is six years of the $30,000 her household spends. No bank holds her shares in the brewery as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'worth $1,400,000, which is most of the $2,000,000 she owns',
            S1: ['$420,000 in funds that hold thousands of companies', 'which is six years of the $30,000 her household spends', 'No bank holds her shares in the brewery as security'] } }
]);
