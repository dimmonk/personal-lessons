// Wealth Preservation, Unit Three: cases shown inside cards, part one (the three supports, one holding, a business the person runs, and the answer that says it is already safe). use: teach is shown in a card with its reasoning; use: check is asked between cards. Neither may appear in the drill.
// Every case carries its full route (the first question, then this unit's one question). cues[STEP] is the exact phrase in the text
// that decides that step; segments are the tappable pieces for "tap the words" prompts, and note is shown if that piece is tapped in error.

FC.cases('wealth', 'u3', [

  /* ---------- The three supports ---------- */
  { id: 'w3-h-t-supports', use: 'teach', tier: 'clean', setting: 'business', topic: 'a printing firm with every support', name: 'Lucía’s printing firm',
    text: "Lucía, 50, runs the printing firm her father started. It is worth $900,000. Her other money is $360,000: $270,000 in funds that hold thousands of companies, and $90,000 in savings. She and her family spend $30,000 a year. The loan on her house is secured on the house, and no bank holds her shares in the firm as security." },

  /* ---------- Sell down on a schedule ---------- */
  { id: 'w3-h-div-1', use: 'teach', tier: 'clean', setting: 'family', topic: 'inherited bus company shares', name: 'Meena and the bus shares',
    text: "Meena, 48, is a nurse. Her late father left her shares in the regional bus company, now worth $420,000. Apart from those she has $110,000 in savings and a 401(k). She has never worked for the bus company, has no say in how it is run, and the shares can be sold on any day.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'Her late father left her shares in the regional bus company, now worth $420,000',
            S1: ['has no say in how it is run', 'the shares can be sold on any day'] } },

  { id: 'w3-h-div-chk', use: 'check', tier: 'clean', setting: 'work', topic: 'a telephone company left behind', name: 'Declan and the telephone company',
    text: "Declan, 55, has $380,000 in all. $300,000 of it is shares in the telephone company where he worked until last year. He no longer works there. He could sell the shares through his broker tomorrow.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: 'He could sell the shares through his broker tomorrow' },
    segments: [
      { text: 'Declan, 55, has $380,000 in all. $300,000 of it is shares in the telephone company where he worked until last year.',
        note: 'That shows how much of his money rests on one company: 79%. The words asked for show what he is free to do about it.' },
      { text: ' He no longer works there.',
        note: 'That shows he does not run the company, which is half of the answer. The other half is that nothing stops him selling.' },
      { text: ' He could sell the shares through his broker tomorrow.' }
    ],
    reason: { S1: 'Nothing stops Declan selling: {cue:S1}.' } },

  /* ---------- Cap the loss without selling ---------- */
  { id: 'w3-h-hdg-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'software shares after the first public sale', name: 'Tomasz and the locked shares',
    text: "Tomasz, 38, joined a software company early on. Last month the company sold its shares to the public for the first time, and the rules say that staff may not sell any of their own shares for two years. His 20,000 shares are worth $400,000 at today’s price of $20, and his other money is $50,000 in savings.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'His 20,000 shares are worth $400,000 at today’s price of $20, and his other money is $50,000 in savings',
            S1: 'staff may not sell any of their own shares for two years' } },

  { id: 'w3-h-hdg-chk', use: 'check', tier: 'clean', setting: 'business', topic: 'a delivery firm’s pay plan', name: 'Stefan and the delivery shares',
    text: "Stefan, 29, was given shares in the delivery firm he works for as part of his pay. They are worth $150,000, which is most of what he has, and the firm’s rules say he may not sell any of them until March, two years away.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'the firm’s rules say he may not sell any of them until March, two years away' },
    reason: { S1: 'Stefan has one company’s shares that are most of what he has, and a rule stops him selling them: {cue:S1}. The two years are the set time.' } },

  /* ---------- Look-alike pair: free to sell, or locked (the same person, the same shares) ---------- */
  { id: 'w3-h-la-dh-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'former employer shares, free to sell', name: 'Ruth, no longer at the company',
    text: "Ruth, 50, owns $500,000 of shares in the sports-shoe company where she used to work, and she has $60,000 of other savings. She left the company two years ago and has no part in running it. She could sell the shares on any day.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: ['has no part in running it', 'She could sell the shares on any day'] } },

  { id: 'w3-h-la-dh-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'staff share-plan shares, locked', name: 'Ruth, still at the company',
    text: "Ruth, 50, owns $500,000 of shares in the sports-shoe company where she works, and she has $60,000 of other savings. The rules of the staff share plan say she may not sell any of them for another eighteen months.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'she may not sell any of them for another eighteen months' } },

  /* ---------- Put the three supports in place ---------- */
  { id: 'w3-h-sup-1', use: 'teach', tier: 'clean', setting: 'business', topic: 'a roofing firm and a truck loan', name: 'Femi and the roofing firm',
    text: "Femi, 46, runs the roofing firm he started twenty years ago. It is worth $480,000, which is most of the $560,000 he owns. The other $80,000 is a van worth $66,000 and $14,000 in a savings account. His family spends $36,000 a year. Two years ago he borrowed $90,000 to buy a truck, and the bank holds his shares in the firm as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'It is worth $480,000, which is most of the $560,000 he owns',
            S1: ['The other $80,000 is a van worth $66,000 and $14,000 in a savings account', 'His family spends $36,000 a year', 'the bank holds his shares in the firm as security'] } },

  { id: 'w3-h-sup-chk', use: 'check', tier: 'clean', setting: 'work', topic: 'a garage with little set aside', name: 'Dmitri and the garage',
    text: "Dmitri, 63, owns and runs the garage he opened, worth $550,000, which is most of the $600,000 he owns. He has $5,000 in the bank, and the rest, $45,000, is tools and a van. His household spends $28,000 a year. He has never borrowed against the garage.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['He has $5,000 in the bank, and the rest, $45,000, is tools and a van', 'His household spends $28,000 a year'] },
    reason: { S1: 'Dmitri runs the garage, and two of {t:threesupports} are missing: {cue:S1}. His money is not spread out and his $5,000 covers about two months, even though he has no loan against the garage.' } },

  /* ---------- Safe as it stands ---------- */
  { id: 'w3-h-saf-1', use: 'teach', tier: 'clean', setting: 'family', topic: 'a family lumberyard with every support', name: 'Hugo and the lumberyard',
    text: "Hugo, 57, runs the family lumberyard, worth $800,000, which is most of the $1,150,000 he owns. He has $250,000 in funds that hold thousands of companies and $100,000 in savings. His household spends $33,000 a year, so the savings cover three years. No bank holds his shares in the yard as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'worth $800,000, which is most of the $1,150,000 he owns',
            S1: ['$250,000 in funds that hold thousands of companies', 'the savings cover three years', 'No bank holds his shares in the yard as security'] } },

  { id: 'w3-h-saf-chk', use: 'check', tier: 'clean', setting: 'health', topic: 'a pharmacy with reserves', name: 'Wanjiru and the pharmacy',
    text: "Wanjiru, 49, owns and runs a pharmacy worth $400,000, which is most of the $700,000 she owns. $210,000 is in funds that hold thousands of companies and $90,000 is in savings, and her household spends $30,000 a year. The pharmacy has no loans.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['$210,000 is in funds that hold thousands of companies and $90,000 is in savings', 'her household spends $30,000 a year', 'The pharmacy has no loans'] },
    reason: { S1: 'Wanjiru runs a business that is most of what she owns, as Femi did, but the words are different: {cue:S1}. Her savings cover three years, the rest is spread, and nothing is borrowed against the pharmacy, so none of the three is missing.' } },

  { id: 'w3-h-la-ss-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bakery with no loan', name: 'Alma, no loan',
    text: "Alma, 48, runs the bakery she opened, worth $500,000, which is most of the $800,000 she owns. $150,000 is in funds that hold thousands of companies and $150,000 in savings, and her household spends $40,000 a year, which is more than three years. No bank holds her shares in the bakery as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['No bank holds her shares in the bakery as security'] } },

  { id: 'w3-h-la-ss-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bakery with a loan on its shares', name: 'Alma, a loan on the shares',
    text: "Alma, 48, runs the bakery she opened, worth $500,000, which is most of the $800,000 she owns. $150,000 is in funds that hold thousands of companies and $150,000 in savings, and her household spends $40,000 a year, which is more than three years. Last year she borrowed $120,000 for new ovens, and the bank holds her shares in the bakery as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['the bank holds her shares in the bakery as security'] } }
]);
