// Wealth Preservation, Unit One, part two (first half): the word the third family leans on, the third family (one thing most of
// the money depends on), and its look-alike pair with the second family. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  { id: 'term-claim', kind: 'term', term: 'claim',
    h: 'Someone says you owe them for harm',
    link: 'The next answer uses one more word. It is about what happens when somebody says you owe them money for harm you are said to have caused.',
    case: 'w-t-claim',
    plain: [
      'The lawyer’s letter is not a bill for something Mick bought. It is a demand that he pay for harm he is said to have caused. If he refuses and the driver wins, a court can order him to pay, and what he owns can be taken.',
      'The amount does not depend on what Mick has saved or what his insurance covers. The insurance pays $250,000, so he would have to find the other $150,000 from whatever he owns.'
    ],
    after: 'This is {t:claim}. Watch the gap: how much could be demanded, against how much the insurance would pay.' },

  /* ---------- The third answer: one thing that could wipe it out ---------- */
  { id: 'meet-shock', kind: 'meet', family: 'shock',
    link: 'Third: most of someone’s money resting on one thing. It looks nothing like the first two.',
    case: 'w-employer', mark: 'D1',
    explain: [
      'Karim has $350,000 of his $500,000 in one company, the one he works for. That is 70%. If its price halves, he loses $175,000, which is 35% of everything he has. If the company fails, he loses 70%.',
      'Had the same $350,000 been in {t:fund} that holds 500 companies, a fall of a fifth would cost him $70,000, and no single company could take much more than a sliver. A bad year hurts. One company failing can end a working life’s savings.',
      'The one thing does not have to be shares. It can be a building, a business you run, {t:claim} that could reach everything you have, or a loan whose lender could force a sale. In each, one thing could take most of your money at once, even while every other price stays put.'
    ],
    spot: [
      { do: 'Find the biggest single thing: $350,000 in the shares of the company Karim works for.', why: 'If most of the money is there, it is not spread out.' },
      { do: 'Work out its share of the total: $350,000 out of $500,000 is 70%.', why: 'The bigger the share, the more one failure can take.' },
      { do: 'Ask what he would lose if that one thing failed: 70%, while every other price stays put.', why: 'Nothing the rest of the market does would help him.' },
      { do: 'Look for the other forms of one big thing: a building, a business, a demand for payment, a loan that can be demanded back.', why: 'Each can take most of the money in one blow.' }
    ],
    feature: { step: 'D1', option: 'shock' },
    name: 'This is {a:D1.shock}. It does not say the one thing will fail, only that if it did, most of the money would go with it.' },

  { id: 'check-shock', kind: 'check', after: 'shock',
    case: 'w-loan',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a lender who could force Paul to sell most of what he owns? Tap them.',
           answer: 'The brokerage’s contract says it can demand the loan back at any time' } },

  /* ---------- The look-alike pair: one thing, or prices falling ---------- */
  { id: 'look-shock-timing', kind: 'lookalike', ledger: 'shock~timing',
    link: 'In both of these a large part of everything could be lost, and both can be about shares. They are easy to mix up.',
    cases: ['w-la-one', 'w-la-market'],
    instruction: 'Both stories are about Lars, who has $500,000. Compare one thing: does one thing do the damage whatever the rest of the market does, or does the whole market fall on a day when he needs money?',
    prompt: { kind: 'which', option: 'D1.shock', answer: 'w-la-one' },
    difference: [
      'In Story A one event hit one company: a rival won its biggest contract. Every other price stayed put, and Lars still lost 40% of $350,000, which is $140,000. That is {a:D1.shock}.',
      'In Story B nothing is concentrated, because his money is in funds that hold thousands of companies. What hurts is that the whole market is down 25% in a year when he must pay $120,000: to raise it he has to sell funds at the lower price, so he gives up more of them. That is {a:D1.timing}.'
    ] }
]);
