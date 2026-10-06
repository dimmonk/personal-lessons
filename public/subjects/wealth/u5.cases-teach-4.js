// Wealth Preservation, Unit Five: cases shown inside cards, part four (the three exceptions in which the papers come first, the check
// on the key's question, and the two worked cases). Field guide: see u5.cases-teach-1.js. A worked case carries no reason of its own:
// the worked card holds the reason for every question on its route (the first question of the key included), so there is one copy.
// Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it.

FC.cases('wealth', 'u5', [

  /* ---------- The three exceptions: the papers come first ---------- */
  { id: 'exc-bruno-case', use: 'teach', tier: 'misleading', setting: 'family', topic: 'a stale will and two sons who do not speak', name: 'Bruno and his sons',
    also: ['people'],
    text: "Bruno is 76 and a widower. His will, written in 2006, leaves everything to his wife, Vera, who died last year, and names nobody else. His house and savings come to $380,000. His two sons have not spoken to each other since Vera's funeral. His estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'His will, written in 2006, leaves everything to his wife, Vera, who died last year, and names nobody else' },
    segments: [
      { text: 'Bruno is 76 and a widower. ', note: 'That is who he is. It does not show the state of his papers.' },
      { text: 'His will, written in 2006, leaves everything to his wife, Vera, who died last year, and names nobody else' },
      { text: '. His house and savings come to $380,000. His two sons have not spoken to each other since Vera\'s funeral. His estate is far below the tax-free limit for estate tax.', note: 'The quarrel between the sons is real, and it is why the case looks like {o:governance}. It does not settle the name, because a paper comes first.' }
    ] },

  { id: 'exc-winifred-case', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a stale IRA form and a large estate', name: 'Winifred’s IRA form',
    also: ['bigestate'],
    text: "Winifred is 77 and a widow. Her house and investments come to $35,000,000, and her investments pay her $400,000 a year more than she spends. The beneficiary form on her IRA still names her husband, who died three years ago. She rewrote her will after he died. Nothing she owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'The beneficiary form on her IRA still names her husband, who died three years ago' },
    segments: [
      { text: 'Winifred is 77 and a widow. Her house and investments come to $35,000,000, and her investments pay her $400,000 a year more than she spends. ', note: 'That is a large estate and money to spare, and it is why the case looks like {o:gifting}. It does not settle the name, because a paper comes first.' },
      { text: 'The beneficiary form on her IRA still names her husband, who died three years ago' },
      { text: '. She rewrote her will after he died. Nothing she owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it.', note: 'That shows that the will is current and what the tax is. It does not show what is wrong with the form.' }
    ] },

  { id: 'exc-florin-case', use: 'teach', tier: 'misleading', setting: 'business', topic: 'a trucking company about to grow and a will from before a divorce', name: 'Florin and the trucking company',
    also: ['growth'],
    text: "Florin is 54 and owns a trucking company worth $3,000,000 today. A buyer has agreed to a deal that, if it goes through, would make the firm worth $30,000,000 within three years. His will, written before his divorce nine years ago, leaves everything to his former wife. His house and savings come to $2,000,000. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'His will, written before his divorce nine years ago, leaves everything to his former wife' },
    segments: [
      { text: 'Florin is 54 and owns a trucking company worth $3,000,000 today. A buyer has agreed to a deal that, if it goes through, would make the firm worth $30,000,000 within three years. ', note: 'That is a rise that is expected, and it is why the case looks like {o:trust}. It does not settle the name, because a paper comes first.' },
      { text: 'His will, written before his divorce nine years ago, leaves everything to his former wife' },
      { text: '. His house and savings come to $2,000,000. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.', note: 'That is the rest of his estate and the tax. It does not show what is wrong with his will.' }
    ] },

  /* ---------- The check on the key's question ---------- */
  { id: 'c-step', use: 'check', tier: 'varied', setting: 'business', topic: 'a taxi firm and no power of attorney', name: 'Hamid and the taxis',
    text: "Hamid, 58, is the only person who signs for his taxi firm, which is worth $300,000. His will was rewritten last year. He has never signed a power of attorney, and the firm's bank accounts are in his name alone. His estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: "He has never signed a power of attorney", H1: "He has never signed a power of attorney, and the firm's bank accounts are in his name alone" },
    reason: { D1: 'The case is about someone else having to act for the owner if he cannot: {cue:D1}. Nothing in it comes out every year, and no price or loan is mentioned.',
              H1: 'The will is current, but one of the three papers does not exist: {cue:H1}. If Hamid were ill, nobody could act for him on the firm’s accounts, as nobody could for Rashid. The estate is below the limit, so tax is not the problem, and nothing is said about the people.' },
    not: { outcome: 'simple', why: 'The will was rewritten, which is one of the three papers. But the power of attorney does not exist, so not every paper is current.' } },

  /* ---------- The two worked cases: a clean one, then one where the story points the wrong way ---------- */
  { id: 'w5-wk-1', use: 'teach', tier: 'clean', setting: 'family', topic: 'what two children would receive from a large estate', name: 'Fabian and the question',
    text: "Fabian is 80 and a widower. His house is worth $3,000,000 and his investments come to $27,000,000, so everything he owns comes to $30,000,000, well above the tax-free limit. His investments pay him $800,000 a year and he spends about $500,000. His will, forms and power of attorney were renewed last year, and his two children get on well. Nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Fabian has been wondering what his two children would receive when he dies.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Fabian has been wondering what his two children would receive when he dies',
            H1: ['so everything he owns comes to $30,000,000, well above the tax-free limit', 'His investments pay him $800,000 a year and he spends about $500,000'] } },

  { id: 'w5-wk-2', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a golf-club friend’s advice and a will which names a dead husband', name: 'Zainab and the golf club',
    text: "Zainab, 69, is a widow, and her house and savings come to $380,000. At the golf club a friend told her that anyone with a house should get a family trust before it is too late, and Zainab has been wondering what to do about her money when she dies. Her will was written with her husband in 2004 and leaves everything to him. He died last year. The beneficiary form on her IRA also names him. Her two daughters get on well. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'Zainab has been wondering what to do about her money when she dies',
            H1: ['Her will was written with her husband in 2004 and leaves everything to him. He died last year', 'The beneficiary form on her IRA also names him'] } }
]);
