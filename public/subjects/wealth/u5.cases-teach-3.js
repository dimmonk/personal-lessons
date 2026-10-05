// Wealth Preservation, Unit Five: cases shown inside cards, part three (the word trust, the fourth name and its exception, the
// fifth name, and the look-alike pair between them). Field guide: see u5.cases-teach-1.js. Every tax case uses the same invented
// rule: the country takes 40% of whatever a person leaves above £500,000.

FC.cases('wealth', 'u5', [

  /* ---------- The word the fourth name is built on (nothing is asked of it) ---------- */
  { id: 't-trustword', use: 'teach', tier: 'clean', setting: 'family', topic: 'money held for grandchildren until they are 25', name: 'Beatrice and the flat money',
    text: "Beatrice, 66, sells a flat for £240,000 and wants her three grandchildren to have the money, but not before each of them is 25. She signs a paper with a firm of lawyers. The paper says that the firm will hold the money, pay each grandchild a third when they turn 25, and may pay school fees in the meantime. The firm may not spend it on anything else." },

  /* ---------- The fourth name: move it out of the estate before it grows ---------- */
  { id: 'm-selim', use: 'teach', tier: 'clean', setting: 'property', topic: 'a field which may be given permission for houses', name: 'Selim and the field',
    text: "Selim is 59 and owns a farm. A field on the edge of town is worth £300,000. The council's new plan, published last month, lists the field for 120 houses, and a builder has told him that with permission it would be worth about £4,000,000, probably within three years. His house, the rest of the farm and his savings come to £600,000. His will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: ['lists the field for 120 houses', 'with permission it would be worth about £4,000,000, probably within three years'] } },

  { id: 'a-cecile', use: 'teach', tier: 'clean', setting: 'business', topic: 'shares in a firm which a buyer has agreed to buy', name: 'Cecile and the software firm',
    text: "Cecile, 48, owns 60% of a small software firm, and her shares are worth £250,000 today. A larger company has signed an agreement to buy the firm for £5,000,000 in two years if a test passes, and her share would then be worth £3,000,000. Her house and savings come to £450,000. Her will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'A larger company has signed an agreement to buy the firm for £5,000,000 in two years if a test passes, and her share would then be worth £3,000,000' },
    segments: [
      { text: 'Cecile, 48, owns 60% of a small software firm, and her shares are worth £250,000 today. ', note: 'That is what the shares are worth now. The question asks what shows that something the owner holds is expected to be worth far more.' },
      { text: 'A larger company has signed an agreement to buy the firm for £5,000,000 in two years if a test passes, and her share would then be worth £3,000,000' },
      { text: '. Her house and savings come to £450,000. Her will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.', note: 'That is the rest of her estate, her papers and the tax rule. It does not show that anything she holds is about to be worth far more.' }
    ] },

  { id: 'c-cormac', use: 'check', tier: 'clean', setting: 'work', topic: 'shares in a firm with a bid pending', name: 'Cormac and the bidder',
    text: "Cormac, 63, owns shares worth £200,000 in a small firm that makes sensors. A bidder has offered to buy the firm for ten times its present value if a safety test passes next year. His house and savings come to £700,000, his income covers his spending, and his will, forms and power of attorney were renewed in May. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'A bidder has offered to buy the firm for ten times its present value if a safety test passes next year' },
    reason: { H1: 'The case shows something he holds that is expected to rise sharply: {cue:H1}. £200,000 would become £2,000,000, and his estate, £900,000 now, would become £2,700,000. The tax on it would go from £160,000 to £880,000. His papers are current, and the case does not say he has money to spare.' },
    not: { outcome: 'gifting', why: 'The estate above the limit is in the case once the rise comes, but the larger problem is the rise itself: £1,800,000 of new value that would all be taxed. Small yearly gifts could not touch it.' } },

  /* ---------- The exception: a big estate with spare money, and something about to grow ---------- */
  { id: 'exc-vineyard-case', use: 'teach', tier: 'misleading', setting: 'property', topic: 'a vineyard beside land a hotel group has bought', name: 'Leopold’s vineyard',
    also: ['bigestate'],
    text: "Leopold is 75. His estate is £2,100,000, and it includes a vineyard worth £400,000 next to a village where a hotel group has just bought the neighbouring land. A valuer says the vineyard could be worth £3,500,000 within four years. His pension pays him £30,000 a year more than he spends, and his will, forms and power of attorney were renewed in March. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'A valuer says the vineyard could be worth £3,500,000 within four years' },
    segments: [
      { text: 'Leopold is 75. His estate is £2,100,000, and it includes a vineyard worth £400,000 next to a village where a hotel group has just bought the neighbouring land. ', note: 'That is how large the estate is. It is part of what makes the case look like {o:gifting}, and it does not settle which name this is.' },
      { text: 'A valuer says the vineyard could be worth £3,500,000 within four years' },
      { text: '. His pension pays him £30,000 a year more than he spends, and his will, forms and power of attorney were renewed in March. The country takes 40% of whatever a person leaves above £500,000.', note: 'The spare income is real, and it is why the case looks like {o:gifting}. It does not settle the name, because the rise is the larger thing.' }
    ] },

  /* ---------- The fifth name: family rules for the money ---------- */
  { id: 'm-wilf', use: 'teach', tier: 'clean', setting: 'family', topic: 'a son who borrows and is to be paid all at once', name: 'Wilf and Joel',
    text: "Wilf is 68 and a widower. He will leave £450,000 to his son Joel, 29, in one payment on the day he dies. Joel has had three jobs in two years and has borrowed money from his father four times, none of it repaid. Wilf's will, forms and power of attorney are all current. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'Joel has had three jobs in two years and has borrowed money from his father four times, none of it repaid' } },

  { id: 'a-thea', use: 'teach', tier: 'clean', setting: 'business', topic: 'a bakery left to two sons who do not speak', name: 'Thea and the bakeries',
    text: "Thea, 70, owns three small bakeries worth £400,000, almost all she has. She plans to leave them equally to her two sons, Anders and Bram, who have not spoken since a quarrel about money in 2019. Her will says that every decision about the bakeries needs both their signatures. Her will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'who have not spoken since a quarrel about money in 2019. Her will says that every decision about the bakeries needs both their signatures' },
    segments: [
      { text: 'Thea, 70, owns three small bakeries worth £400,000, almost all she has. She plans to leave them equally to her two sons, Anders and Bram, ', note: 'That is what she owns and who will receive it. The question asks what shows a risk in the people.' },
      { text: 'who have not spoken since a quarrel about money in 2019. Her will says that every decision about the bakeries needs both their signatures' },
      { text: '. Her will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.', note: 'That shows her papers are in order and what the tax rule is. It does not show a risk in the people.' }
    ] },

  { id: 'c-mabel', use: 'check', tier: 'clean', setting: 'family', topic: 'a daughter in a divorce who asks for loans', name: 'Mabel and her daughters',
    text: "Mabel, 74, will leave her £360,000 equally to her two daughters. One of them, Rhea, 41, is in the middle of a divorce and has asked Mabel to lend her money twice this year. Mabel's will, forms and power of attorney were all renewed in January. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'Rhea, 41, is in the middle of a divorce and has asked Mabel to lend her money twice this year' },
    reason: { H1: 'The case shows a risk in a person who will receive the money: {cue:H1}. Part of the £360,000 would go to someone in the middle of a divorce, and she has already asked twice for money. The papers are current and the estate is below the limit, so neither is the problem.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed in January, so no paper is missing or out of date. What the case raises is a person.' } },

  /* ---------- The look-alike pair: tax on a rise, or the people ---------- */
  { id: 'la-wood-rise', use: 'teach', tier: 'clean', setting: 'property', topic: 'woodland a developer wants',
    text: "Stefan is 71 and owns woodland worth £250,000. A developer has offered to buy it if the council gives permission, and a valuer says it could then be worth £2,500,000. His house and savings come to £400,000, and his will, forms and power of attorney are all current. He will leave everything to his son and his daughter. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'a valuer says it could then be worth £2,500,000' } },

  { id: 'la-wood-feud', use: 'teach', tier: 'clean', setting: 'property', topic: 'woodland two children quarrel over',
    text: "Stefan is 71 and owns woodland worth £250,000. Nobody expects its value to change. His house and savings come to £150,000, and his will, forms and power of attorney are all current. He will leave everything to his son and his daughter, who have argued about the woodland for three years: the son has said he will sell it the day his father dies, and the daughter has said she will never let him. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'who have argued about the woodland for three years: the son has said he will sell it the day his father dies, and the daughter has said she will never let him' } }
]);
