// Wealth Preservation, Unit Three: cases shown inside cards, part one (the word "a holding", then one holding that is free to sell,
// and one that is not allowed to be sold yet). Every case carries its full route (the key's first question, then this unit's one
// question). use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// cues[STEP] is the exact phrase in the text that decides that step; segments are the tappable pieces for "tap the words" prompts,
// and note is shown if that piece is tapped in error. A topic holds none of the words of the question's purpose (rule V17).
// Case text is free to use any wording people use, so it is the one place a key word may be typed.

FC.cases('wealth', 'u3', [

  /* ---------- The word "a holding" (no name is asked of this case) ---------- */
  { id: 'w3-h-t-holding', use: 'teach', tier: 'clean', setting: 'family', topic: 'a list of four investments', name: 'Joanna’s list',
    text: "Joanna, 52, owns four things she could sell. She has 2,000 shares in the regional water company, worth $30,000. She has a condo that she rents out, worth $180,000. She owns a quarter of her brother’s bakery, which an accountant values at $40,000. And she has $60,000 in a 401(k) fund that holds shares in about five hundred companies." },

  /* ---------- Sell down on a schedule ---------- */
  { id: 'w3-h-div-1', use: 'teach', tier: 'clean', setting: 'family', topic: 'inherited bus company shares', name: 'Meena and the bus shares',
    text: "Meena, 48, is a nurse. Her late father left her shares in the regional bus company, now worth $420,000. Apart from those she has $110,000 in savings and a 401(k). She has never worked for the bus company, has no say in how it is run, and the shares can be sold on any day.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'Her late father left her shares in the regional bus company, now worth $420,000',
            S1: ['has no say in how it is run', 'the shares can be sold on any day'] } },

  { id: 'w3-h-div-2', use: 'teach', tier: 'clean', setting: 'property', topic: 'an apartment building run by a property manager', name: 'Karl and the apartment building',
    text: "Karl, 61, owns an apartment building with eight apartments in one town, worth $600,000, which is most of what he has. His other money is an IRA of $90,000. A property manager finds the tenants, collects the rent and arranges the repairs, so he never visits. The building could be sold whenever he chose.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'worth $600,000, which is most of what he has',
            S1: ['A property manager finds the tenants, collects the rent and arranges the repairs, so he never visits', 'The building could be sold whenever he chose'] },
    segments: [
      { text: 'Karl, 61, owns an apartment building with eight apartments in one town, worth $600,000, which is most of what he has. His other money is an IRA of $90,000.',
        note: 'That shows how much rests on one building. It does not show whether he can sell it, or whether he runs it.' },
      { text: ' A property manager finds the tenants, collects the rent and arranges the repairs, so he never visits. The building could be sold whenever he chose.' }
    ] },

  { id: 'w3-h-div-chk', use: 'check', tier: 'clean', setting: 'work', topic: 'a telephone company left behind', name: 'Declan and the telephone company',
    text: "Declan, 55, has $380,000 in all. $300,000 of it is shares in the telephone company where he worked until last year. He no longer works there. He could sell the shares through his broker tomorrow.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: 'He could sell the shares through his broker tomorrow' },
    segments: [
      { text: 'Declan, 55, has $380,000 in all. $300,000 of it is shares in the telephone company where he worked until last year.',
        note: 'That shows how much of what he owns rests on one company, 79%. The words asked for show what he is free to do about it.' },
      { text: ' He no longer works there.',
        note: 'That shows he takes no part in running the company. It is half of the answer. The words asked for are the other half: nothing stops him selling.' },
      { text: ' He could sell the shares through his broker tomorrow.' }
    ],
    reason: { S1: 'Nothing stops Declan selling: he could do it tomorrow through his broker. Together with the fact that he left the company, that is the whole answer. $300,000 out of $380,000 is about 79%, all in one company.' } },

  /* ---------- Cap the loss without selling ---------- */
  { id: 'w3-h-hdg-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'software shares after the first public sale', name: 'Tomasz and the locked shares',
    text: "Tomasz, 38, joined a software company early on. Last month the company sold its shares to the public for the first time, and the rules say that staff may not sell any of their own shares for two years. His 20,000 shares are worth $400,000 at today’s price of $20, and his other money is $50,000 in savings.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'His 20,000 shares are worth $400,000 at today’s price of $20, and his other money is $50,000 in savings',
            S1: 'staff may not sell any of their own shares for two years' } },

  { id: 'w3-h-hdg-2', use: 'teach', tier: 'clean', setting: 'health', topic: 'wages paid in hospital group shares', name: 'Priya and the hospital shares',
    text: "Priya, 44, is a doctor at a private hospital group, which pays part of her wages in its shares. Each year’s shares are hers on paper, but she may not sell them until three years later, and she would lose them if she left before then. The shares she holds are worth $210,000, and her other money is $50,000.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'The shares she holds are worth $210,000, and her other money is $50,000',
            S1: 'she may not sell them until three years later' },
    segments: [
      { text: 'Priya, 44, is a doctor at a private hospital group, which pays part of her wages in its shares.',
        note: 'That shows where the shares came from. It does not say what she may do with them.' },
      { text: ' Each year’s shares are hers on paper, but she may not sell them until three years later, and she would lose them if she left before then.' },
      { text: ' The shares she holds are worth $210,000, and her other money is $50,000.',
        note: 'That shows how much rests on one company, 81%. The words asked for are a rule that stops her selling.' }
    ] },

  { id: 'w3-h-hdg-chk', use: 'check', tier: 'clean', setting: 'business', topic: 'a delivery firm’s pay plan', name: 'Stefan and the delivery shares',
    text: "Stefan, 29, was given shares in the delivery firm he works for as part of his pay. They are worth $150,000, which is most of what he has, and the firm’s rules say he may not sell any of them until March, two years away.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'the firm’s rules say he may not sell any of them until March, two years away' },
    reason: { S1: 'Stefan has one company’s shares that are most of what he has, and he is not allowed to sell them: {cue:S1}. The two years are the set time. Of the two answers met so far, only one has a rule that stops the sale.' } },

  /* ---------- Look-alike pair: free to sell, or locked (the same person, the same shares) ---------- */
  { id: 'w3-h-la-dh-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'former employer shares, free to sell', name: 'Ruth, no longer at the company',
    text: "Ruth, 50, owns $500,000 of shares in the sports-shoe company where she used to work, and she has $60,000 of other savings. She left the company two years ago and has no part in running it. She could sell the shares on any day.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: ['has no part in running it', 'She could sell the shares on any day'] } },

  { id: 'w3-h-la-dh-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'staff share-plan shares, locked', name: 'Ruth, still at the company',
    text: "Ruth, 50, owns $500,000 of shares in the sports-shoe company where she works, and she has $60,000 of other savings. The rules of the staff share plan say she may not sell any of them for another eighteen months.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'she may not sell any of them for another eighteen months' } }
]);
