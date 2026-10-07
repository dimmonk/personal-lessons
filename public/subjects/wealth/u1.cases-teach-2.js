// Wealth Preservation, Unit One: cases shown inside cards, part two (the third family and its look-alike pair, then the fourth
// family). Field guide: see u1.cases-teach-1.js.

FC.cases('wealth', 'u1', [

  { id: 'w-employer', use: 'teach', tier: 'clean', setting: 'work', topic: 'most of the money in the employer’s shares', name: 'Karim and the company shares',
    text: "Karim, 45, has $500,000 in all. $350,000 of it is shares in the company he works for, which he has built up over twenty years. The rest is in a savings account and a small 401(k).",
    route: { D1: ['shock'] },
    cues: { D1: '$350,000 of it is shares in the company he works for' } },

  { id: 'w-loan', use: 'check', tier: 'clean', setting: 'home', topic: 'a brokerage’s margin loan that can be called in',
    text: "Paul owns shares worth $500,000. He bought some of them with a $300,000 margin loan from his brokerage. The brokerage’s contract says it can demand the loan back at any time, and Paul would have to sell shares to repay it.",
    route: { D1: ['shock'] },
    cues: { D1: 'The brokerage’s contract says it can demand the loan back at any time' },
    segments: [
      { text: 'Paul owns shares worth $500,000.', note: 'That is what he has. It does not say what could take it.' },
      { text: 'He bought some of them with a $300,000 margin loan from his brokerage.', note: 'That is where the loan comes from. A loan alone does not decide it: what matters is whether the lender can force a sale.' },
      { text: 'The brokerage’s contract says it can demand the loan back at any time' },
      { text: ', and Paul would have to sell shares to repay it', note: 'That is what would happen. The words that give the lender the power come before it.' }
    ],
    reason: { D1: 'The lender can demand the loan back at any time, and $300,000 is most of what his shares are worth.' },
    not: { outcome: 'timing', why: 'No bill on a date and no living costs are mentioned. The danger is one lender who could force a sale, whether or not prices have fallen.' } },

  { id: 'w-la-one', use: 'teach', tier: 'clean', setting: 'work', topic: 'one company and a lost contract',
    text: "Lars has $500,000. $350,000 of it is shares in the company where he works. Last month a rival won the company's biggest contract, and its price fell by 40%. Prices of other companies did not move.",
    route: { D1: ['shock'] },
    cues: { D1: ['$350,000 of it is shares in the company where he works', 'Prices of other companies did not move'] } },

  { id: 'w-la-market', use: 'teach', tier: 'clean', setting: 'family', topic: 'a down payment in a falling market',
    text: "Lars has $500,000, all of it in funds that hold shares in thousands of companies. He must pay $120,000 for a house on March 1, four months away, and prices across the whole market are down 25% this year.",
    route: { D1: ['timing'] },
    cues: { D1: ['He must pay $120,000 for a house on March 1, four months away', 'prices across the whole market are down 25% this year'] } },

  { id: 'w-exwife', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a life insurance form that names a first wife', name: 'Gerald and the old form',
    text: "Gerald is 68. He has life insurance through his job that would pay $300,000. The form he signed with the insurer twenty years ago names his first wife as the person who should receive it if he dies. He married again fifteen years ago, and has never changed the form.",
    route: { D1: ['handover'] },
    cues: { D1: ['names his first wife as the person who should receive it if he dies', 'has never changed the form'] } },

  { id: 'w-heirs', use: 'check', tier: 'clean', setting: 'family', topic: 'heirs who do not speak to each other',
    text: "Sunita, 74, has a will that leaves her $700,000 equally to her three children. Two of them have not spoken to each other for six years. Everything in her will is up to date.",
    route: { D1: ['handover'] },
    cues: { D1: 'Two of them have not spoken to each other for six years' },
    segments: [
      { text: 'Sunita, 74, has a will that leaves her $700,000 equally to her three children. ', note: 'That is who gets what. The question asks what could go wrong with it.' },
      { text: 'Two of them have not spoken to each other for six years' },
      { text: '. Everything in her will is up to date.', note: 'That shows her papers are in order. It does not say what could go wrong, and the words that do come before it.' }
    ],
    reason: { D1: 'Two of her three children are not speaking, and they will have to deal with each other over the money.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of the money every year. What it raises is how her children will deal with each other, once, after her death.' } }
]);
