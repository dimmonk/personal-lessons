// Wealth Preservation, Unit Two: cases shown inside cards, part three (the same sum taken out every year, the two look-alike pairs with
// nothing to cut back, and the whole case).

FC.cases('wealth', 'u2', [

  /* ---------- Spend a percentage of the pot ---------- */
  { id: 'e-m-burn', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a round sum set at the start and never changed', name: 'Hugh and his $50,000',
    text: "Hugh retired at 62 with $1,000,000. The pot has grown about 3% a year since. He decided to spend $50,000 a year, which was 5% of it, and he still spends $50,000 a year. Nine years on the pot is worth about $800,000, so the $50,000 is now 6.25% of what is left.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { E1: 'He decided to spend $50,000 a year, which was 5% of it, and he still spends $50,000 a year. Nine years on the pot is worth about $800,000, so the $50,000 is now 6.25% of what is left' } },

  { id: 'e-c-burn', use: 'check', tier: 'clean', setting: 'business', topic: 'a shopkeeper’s sum set when he sold up', name: 'Felix and the sale of his shop',
    text: "Felix, 65, sold his shop at 63 and set himself $28,000 a year to live on, which was 4% of the $700,000 he got. He has never changed the figure. His pot is now $500,000, so the $28,000 is 5.6% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { E1: 'He has never changed the figure. His pot is now $500,000, so the $28,000 is 5.6% of it' },
    segments: [
      { text: 'Felix, 65, sold his shop at 63 and set himself $28,000 a year to live on, which was 4% of the $700,000 he got.', note: 'This is how the sum was set, and at the time it was a fair share. The words that decide it say what happened to the sum since.' },
      { text: 'He has never changed the figure. His pot is now $500,000, so the $28,000 is 5.6% of it' }
    ],
    reason: { E1: 'The sum was set when {t:pot} was bigger, and it has not moved: {cue:E1}.' },
    not: { outcome: 'nocut', why: 'Spending is only sound when it is reset as a percentage of what {t:pot} is worth now. Felix set a number of dollars and never reset it.' } },

  /* ---------- The look-alike pair: income investments in the taxed account, and in the sheltered one ---------- */
  { id: 'e-l-nocut-a', use: 'teach', tier: 'clean', setting: 'family', topic: 'a brother’s bond fund in the ordinary account', name: 'Ravi and his bond fund',
    text: "Ravi, 57, keeps a fund of company bonds in his ordinary brokerage account. It pays out $3,000 of interest a year, and he pays 25% tax on it, $750, every year. His IRA holds a fund of shares that pays out almost nothing.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'It pays out $3,000 of interest a year, and he pays 25% tax on it, $750, every year' } },

  { id: 'e-l-nocut-b', use: 'teach', tier: 'clean', setting: 'family', topic: 'a brother’s bond fund in the IRA', name: 'Sunil and his bond fund',
    text: "Ravi's brother Sunil, 57, has the same two funds, the other way round. His bond fund is in his IRA, where its $3,000 a year is not taxed. His fund of shares is in his brokerage account, where its $600 a year costs him $90 in tax.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'His bond fund is in his IRA, where its $3,000 a year is not taxed. His fund of shares is in his brokerage account, where its $600 a year costs him $90 in tax' } },

  /* ---------- The look-alike pair: a fixed sum, and a sum reset each year ---------- */
  { id: 'e-l-burn-a', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a sister’s fixed $42,000', name: 'Cora and her $42,000',
    text: "Cora, 66, set her spending at $42,000 a year when her pot was $1,050,000, which was 4%. The pot is now $840,000, and she still takes $42,000, which is now 5% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { E1: 'set her spending at $42,000 a year when her pot was $1,050,000, which was 4%. The pot is now $840,000, and she still takes $42,000, which is now 5% of it' } },

  { id: 'e-l-burn-b', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a sister’s 4% worked out every January', name: 'Dee and her January sum',
    text: "Cora's sister Dee, 66, started on the same $1,050,000 and the same 4%, which was $42,000. Each January she works out 4% of what her pot is worth that day. This January it is $840,000, so she takes $33,600 and cuts her vacation budget.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'Each January she works out 4% of what her pot is worth that day. This January it is $840,000, so she takes $33,600 and cuts her vacation budget' } },

  /* ---------- A whole case, run from the first question ---------- */
  { id: 'e-w-rui', use: 'teach', tier: 'misleading', setting: 'business', topic: 'a large flat price for a long list of work', name: 'Rui and the loud remark',
    text: "Rui, 60, has $700,000. He pays his planner $8,400 a year, a flat sum agreed for three years at a time, and a friend told him last week, 'That is 1.2% a year. You are being robbed.' For the $8,400 the planner prepares Rui's and his wife's tax returns, runs their spending plan, and has spent this year sorting out the papers of Rui's late mother, which Rui says he could not have done alone. The planner takes no commission, and the money is in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'He pays his planner $8,400 a year',
            E1: ['a flat sum agreed for three years at a time', "For the $8,400 the planner prepares Rui's and his wife's tax returns, runs their spending plan, and has spent this year sorting out the papers of Rui's late mother, which Rui says he could not have done alone"] } }
]);
