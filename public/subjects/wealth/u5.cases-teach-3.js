// Wealth Preservation, Unit Five: cases shown inside cards, part three (the word trust, the second tax name and its exception, the people name). Field guide: see u5.cases-teach-1.js.
// Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it.

FC.cases('wealth', 'u5', [
  /* The word the next name is built on (nothing is asked of it) */

  { id: 't-trustword', use: 'teach', tier: 'clean', setting: 'family', topic: 'money held for grandchildren until they are 25', name: 'Beatrice and the condo money',
    text: "Beatrice, 66, sells a condo for $240,000 and wants her three grandchildren to have the money, but not before each of them is 25. She signs a paper with a firm of lawyers. The paper says that the firm will hold the money, pay each grandchild a third when they turn 25, and may pay tuition in the meantime. The firm may not spend it on anything else." },

  /* Move it out of the estate before it grows */

  { id: 'm-selim', use: 'teach', tier: 'clean', setting: 'property', topic: 'a field which may be rezoned for houses', name: 'Selim and the field',
    text: "Selim is 59 and owns a farm. A field on the edge of town is worth $1,000,000. The county's new plan, published last month, zones the field for 120 houses, and a developer has told him that once it is rezoned it would be worth about $30,000,000, probably within three years. His house, the rest of the farm and his investments come to $25,000,000. His will, forms and power of attorney were renewed last year. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and he is already above it.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: ['zones the field for 120 houses', 'once it is rezoned it would be worth about $30,000,000, probably within three years'] } },

  { id: 'c-cormac', use: 'check', tier: 'clean', setting: 'work', topic: 'shares in a firm with a bid pending', name: 'Cormac and the bidder',
    text: "Cormac, 63, owns shares worth $2,000,000 in a small firm that makes sensors. A bidder has offered to buy the firm for ten times its present value if a safety test passes next year. His house and investments come to $20,000,000, his income covers his spending, and his will, forms and power of attorney were renewed in May. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and he is already above it.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'A bidder has offered to buy the firm for ten times its present value if a safety test passes next year' },
    reason: { H1: 'Something he holds is about to shoot up in value: {cue:H1}. $2,000,000 would become $20,000,000, and at 40% the $18,000,000 rise is $7,200,000 of new tax.' },
    not: { outcome: 'gifting', why: 'The estate is above the limit, but the bigger problem is the $18,000,000 rise itself. Small yearly gifts could not touch it.' } },

  { id: 'exc-vineyard-case', use: 'teach', tier: 'misleading', setting: 'property', topic: 'a vineyard beside land a hotel group has bought', name: 'Leopold’s vineyard',
    also: ['bigestate'],
    text: "Leopold is 75. His estate is $30,000,000, well above the tax-free limit, and it includes a vineyard worth $2,000,000 next to a village where a hotel group has just bought the neighboring land. An appraiser says the vineyard could be worth $20,000,000 within four years. His investments pay him $500,000 a year more than he spends, and his will, forms and power of attorney were renewed in March. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'An appraiser says the vineyard could be worth $20,000,000 within four years' },
    segments: [
      { text: 'Leopold is 75. His estate is $30,000,000, well above the tax-free limit, and it includes a vineyard worth $2,000,000 next to a village where a hotel group has just bought the neighboring land. ', note: 'That is how big the estate is. It makes the story look like {o:gifting}, but it does not settle it.' },
      { text: 'An appraiser says the vineyard could be worth $20,000,000 within four years' },
      { text: '. His investments pay him $500,000 a year more than he spends, and his will, forms and power of attorney were renewed in March. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.', note: 'The spare income is real, and it also makes the story look like {o:gifting}. The rise is the bigger thing.' }
    ] },

  /* Family rules for the money */

  { id: 'm-wilf', use: 'teach', tier: 'clean', setting: 'family', topic: 'a son who borrows and is to be paid all at once', name: 'Wilf and Joel',
    text: "Wilf is 68 and a widower. He will leave $450,000 to his son Joel, 29, in one payment on the day he dies. Joel has had three jobs in two years and has borrowed money from his father four times, none of it repaid. Wilf's will, forms and power of attorney are all current. His estate is far below the tax-free limit for estate tax.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'Joel has had three jobs in two years and has borrowed money from his father four times, none of it repaid' } },

  { id: 'c-mabel', use: 'check', tier: 'clean', setting: 'family', topic: 'a daughter in a divorce who asks for loans', name: 'Mabel and her daughters',
    text: "Mabel, 74, will leave her $360,000 equally to her two daughters. One of them, Rhea, 41, is in the middle of a divorce and has asked Mabel to lend her money twice this year. Mabel's will, forms and power of attorney were all renewed in January. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'Rhea, 41, is in the middle of a divorce and has asked Mabel to lend her money twice this year' },
    reason: { H1: 'Rhea, who will get half of the $360,000, is in a divorce and has asked for money twice: {cue:H1}. The papers are current and the estate is far below the limit, so neither is the problem.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed in January, so none is missing or out of date. What this story raises is a person.' } }
]);
