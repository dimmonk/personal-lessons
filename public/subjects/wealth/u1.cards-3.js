// Wealth Preservation, Unit One, part two (first half): the word the third family leans on, the third family (one thing most of
// the money depends on), and its look-alike pair with the second family. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  { id: 'term-claim', kind: 'term', term: 'claim',
    h: 'A demand that someone pay for harm',
    link: 'The third answer uses one more word. It is about what happens when somebody says you owe them money for harm you are said to have caused.',
    case: 'w-t-claim',
    plain: [
      'The lawyer’s letter is not a bill for something Mick bought. It is a demand that he pay for harm he is said to have caused, backed by the courts: if he refuses and the driver wins, a court can order him to pay, and what he owns can be taken to do so.',
      'The amount asked is not tied to what Mick has put aside, or to what his insurance covers. For the $150,000 above what the insurance pays, he would have to find the money himself, from whatever he owns.'
    ],
    after: 'This is {t:claim}. The thing to notice is the gap: how much could be demanded, against how much the insurance would pay.' },

  /* ---------- The third family: one thing most of it depends on ---------- */
  { id: 'meet-shock', kind: 'meet', family: 'shock',
    link: 'The third answer is the dramatic one: most of someone’s money resting on one thing. It looks nothing like the first two.',
    case: 'w-employer', mark: 'D1',
    strip: [
      'One person, Karim, and $500,000.',
      'Most of it, $350,000, is shares in a single company, the one he works for. The rest is small: a savings account and a small 401(k).',
      'Nothing is said about prices in general, a bill, or a charge.'
    ],
    explain: [
      'What you are shown is a shape: $350,000 out of $500,000, which is 70%, rests on one company. If its price halves, Karim loses $175,000, 35% of everything he has. If the company fails, he loses 70%. Had the same $350,000 been in {t:fund} that holds 500 companies, a fall of a fifth would cost him 20%, which is $70,000, and no one company in it could take much more than a sliver. A bad year hurts. One company failing can end a working life’s savings.',
      'The one thing can be shares in a single company, a single building, or a business the person runs. It need not be something they own at all: it can be {t:claim} that could reach everything the person has, or a loan whose lender could force a sale. In every shape, one thing could take most of the money at once, even while every other price stays where it is.'
    ],
    feature: { step: 'D1', option: 'shock' },
    name: 'The answer, and the name, is {a:D1.shock}. "Depends on" means that if that one thing fails, the money fails with it. The name does not say that it will.' },

  { id: 'check-shock', kind: 'check', after: 'shock',
    case: 'w-loan',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a lender who could force the sale of most of what he owns? Tap them.',
           answer: 'The brokerage’s contract says it can demand the loan back at any time' } },

  /* ---------- The look-alike pair: one thing, or a fall in prices ---------- */
  { id: 'look-shock-timing', kind: 'lookalike', ledger: 'shock~timing',
    link: 'Both of these can mean losing a large part of everything, and both can be about shares. They are easy to mix up.',
    cases: ['w-la-one', 'w-la-market'],
    instruction: 'Both cases are about Lars, who has $500,000. Compare one thing: does one thing do the damage, whatever the rest of the market does, or is it a fall across the whole market, on a day when money is needed?',
    prompt: { kind: 'which', option: 'D1.shock', answer: 'w-la-one' },
    difference: [
      'In Case A one event hit one company: a rival won its biggest contract. Every other price stayed where it was, and Lars still lost 40% of $350,000, which is $140,000. The answer is {a:D1.shock}.',
      'In Case B nothing is concentrated: his money is in funds that hold thousands of companies. What hurts is that the whole market has fallen, on a day when he must pay $120,000. The $120,000 he would pay it from is now worth $90,000, a gap of $30,000. The answer is {a:D1.timing}.'
    ] }
]);
