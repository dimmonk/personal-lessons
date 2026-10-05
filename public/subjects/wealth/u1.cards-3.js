// Wealth Preservation, Unit One, part two (first half): the word the third family leans on, the third family (one thing most of
// the money depends on), its look-alike pair with the second family, and the exception in which the third family wins.
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  { id: 'term-claim', kind: 'term', term: 'claim',
    h: 'A demand that someone pay for harm',
    link: 'The third answer uses one more word. It is about what happens when somebody says you owe them money for harm you are said to have caused.',
    case: 'w-t-claim',
    plain: [
      'The lawyer’s letter is not a bill for something Mick bought. It is a demand that Mick pay for harm he is said to have caused, and it is backed by the courts: if he refuses and the driver wins, a court can order him to pay, and what he owns can be taken to do so.',
      'It is a demand, not a fact. Mick may think the yard was safe. But whatever the court decides, the amount asked, £400,000, is not tied to what Mick has put aside, or to what his insurance covers. The insurance pays up to £250,000. For the £150,000 above that, Mick would have to find the money himself, from whatever he owns.'
    ],
    after: 'This is {t:claim}. The thing to notice is the gap: how much could be demanded, against how much the insurance would pay.' },

  /* ---------- The third family: one thing most of it depends on ---------- */
  { id: 'meet-shock', kind: 'meet', family: 'shock',
    link: 'The third answer is the dramatic one: most of someone’s money resting on one thing. It looks nothing like the first two.',
    case: 'w-employer', mark: 'D1',
    strip: [
      'There is one person, Karim, and £500,000.',
      'Most of it, £350,000, is one thing: shares in a single company.',
      'The rest is small: a savings account and a small pension.',
      'Nothing is said about prices in general, a bill, or a charge. The case is about how much rests on one thing.'
    ],
    explain: [
      'What you are shown is not a fall in the whole market. It is a shape: £350,000 out of £500,000, which is 70%, rests on one company. If that company does badly, nearly everything Karim has does badly with it, whatever the rest of the market is doing.',
      'Numbers make the shape clearer. If the company’s price halves, Karim loses £175,000, which is 35% of everything he has. If the company fails, he loses £350,000, which is 70%. Compare what would happen if the same £350,000 were in {t:fund} that holds 500 companies, and the fund fell by a fifth: he would lose 20%, which is £70,000, and no one company in it could take much more than a sliver. A fall that hurts is a bad year. One company failing can end a working life’s savings.',
      'The one thing might be shares in a single company, as here; a single building that is most of what someone owns; or a business that they run. It need not be something they own at all. It can be {t:claim} that could reach everything the person has, or a loan whose lender could force a sale. What all four share is that one thing could take most of the money at once.',
      'This is different from the last answer. There the harm came from prices falling in general, on a day when the money was needed. Here the harm comes through one thing, and it could happen while every other price stays put.'
    ],
    feature: { step: 'D1', option: 'shock' },
    name: [
      'The key’s answer, and the name of this kind of case, is {a:D1.shock}. "Depends on" means that if that one thing fails, the money fails with it.',
      'The name does not say that the thing will fail. It says that if it did, most of the money would go with it, and the case is about that.'
    ] },

  { id: 'again-shock', kind: 'again', family: 'shock',
    link: 'The last card gave you what to point to: {needs:shock}. Here is a second case with a very different story, in which nothing is bought or sold on a stock market.',
    first: 'w-employer', second: 'w-farm', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the difference between shares and a lawsuit, and ignore who is involved. Look at one thing only: which words show a single thing that could take most of what the person has?',
    prompt: { kind: 'phrase', answer: 'His lawyer is demanding £2,000,000, and Siobhan’s insurance pays up to £500,000' },
    shared: [
      'Karim’s case is one company’s shares. Siobhan’s is a demand in a lawsuit. They look nothing alike, and they share one thing: a single event, or a single holding, could take most of what each person has. For Karim it is 70% in one company. For Siobhan it is a demand for £2,000,000 against £1,400,000 of her own and insurance for £500,000. If she lost, £1,500,000 would be left to find, which is more than everything she owns.',
      'In neither case is anything taken out every year, and no bill falls due on a date. The harm would come all at once, through one thing. That is what {a:D1.shock} names, and it holds wherever most of someone’s money rests on a single thing, whether they own that thing or can only be reached by it.'
    ] },

  { id: 'portrait-shock', kind: 'portrait', family: 'shock',
    link: 'You know what to point to for {a:D1.shock}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'There is one thing in the case that is most of the person’s money, or could reach all of it. It might be one company, one property, one business, a demand for payment or a loan.',
      'The case often does not say that anything has gone wrong. The person may be doing very well, because the one thing has been good to them.',
      'The harm is all at once. Nothing is taken a little at a time. If it comes, it comes through one event: a company failing, a building burning down, a court ruling, a lender asking for its money back.',
      'It does not depend on what the rest of the market does. Prices in general can stay where they are while this one thing takes most of what the person has.',
      'Real life gives it one of four shapes: one holding that is most of what the person has, a business the person runs, a demand that could be bigger than their insurance, or a loan that a lender could use to force a sale.',
      'The person is often proud of it. It is the company they work for, the building they bought, the business they built.'
    ],
    not: [
      'A fall in prices that hits everything at once is not this kind. If every holding falls together, the harm comes through the market and not through one thing.',
      'Having a lot in one thing is not wrong in itself, and this answer does not say that it is. It says only that most of the money rests on it. What to do about that depends on what the thing is, and the questions after this one decide it.'
    ],
    wild: ['"It’s the company I’ve worked for all my life."', '"The whole farm is in my name."', '"All my savings are in one flat."', '"They can call the loan in whenever they like."', '"I believe in it."'],
    self: 'In your own life it is the sentence "most of what I have is in..." If you can finish it with one company, one building or one business, or with one person’s decision, you have something to look at.',
    ask: '"If this one thing went wrong, what share of everything would go with it?" If the answer is most of it, you are probably looking at this kind.' },

  { id: 'check-shock', kind: 'check', after: 'shock',
    case: 'w-loan',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a lender who could force the sale of most of what he owns? Tap them.',
           answer: 'The broker’s contract says it can demand the loan back at any time' } },

  /* ---------- Second look-alike pair: one thing, or a fall in prices ---------- */
  { id: 'look-shock-timing', kind: 'lookalike', ledger: 'shock~timing',
    link: 'Both of the last two answers can mean losing a large part of everything, and both can be about shares. They are easy to mix up. This card puts them side by side.',
    cases: ['w-la-one', 'w-la-market'],
    instruction: 'Both cases are about Lars, who has £500,000. Compare one thing: does one thing do the damage, whatever the rest of the market does, or is it a fall across the whole market, on a day when money is needed?',
    prompt: { kind: 'which', option: 'D1.shock', answer: 'w-la-one' },
    difference: [
      'In Case A most of Lars’s money, £350,000, is in one company, and one event hit that company: a rival won its biggest contract. Every other price stayed where it was, and Lars still lost 40% of £350,000, which is £140,000. The key’s answer is {a:D1.shock}.',
      'In Case B nothing is concentrated: his money is in funds that hold thousands of companies, and no single one could hurt him much. What hurts is that the whole market has fallen by 25% and he must pay £120,000 on 1 March. The £120,000 he would pay it from is now worth £90,000, a gap of £30,000. The key’s answer is {a:D1.timing}.',
      'The same man with the same £500,000 loses a large amount in both. In Case A it is through one company, whatever the market does. In Case B it is through the whole market, on a day the money is needed.'
    ] },

  /* ---------- The second exception: a fall in prices, and one company ---------- */
  { id: 'exc-retired', kind: 'exception', ledger: 'shock~timing', looksLike: 'timing', is: 'shock',
    h: 'Bills paid in a fall, from one company',
    link: 'The last card showed the two answers apart. In real cases they sometimes arrive together: money needed every month, from something whose price has fallen, and nearly all of it in one place.',
    case: 'w-exc-retired',
    setup: 'Marguerite pays her living costs by selling investments, with no cash set aside, in a year when their price has fallen. That is what a case about {a:D1.timing} looks like. Yet the key’s answer for this case is {a:D1.shock}.',
    prompt: { kind: 'phrase', answer: 'Of her £600,000, £510,000 is still shares in that company' },
    because: [
      'Count what the case shows. £510,000 out of £600,000 is 85%, all in one company. The fall is that company’s: 45% off £510,000 is £229,500, which is 38% of everything she has. Her bills are real, and she is selling at a bad price. But the harm is not only what the monthly sales cost. It is that nearly all she has rests on one company.',
      'Suppose she had cash set aside for three years of bills. It would stop the sales at a low price. It would do nothing about the £229,500, nothing about the next fall, and nothing if the company failed. A cure for the fall would leave nearly all of the harm where it was.',
      'So the case shows both: money needed every month, and nearly everything in one company. When a case shows both, the key chooses one answer, and it chooses the second.'
    ],
    take: [
      'The key chooses this way round because of what each cure can reach. Cash set aside helps on the days money is needed. It does not help money that one company can wipe out. The question to put to a case that shows both is the one from the last card: would one thing do the damage even if every other price stayed where it is?',
      'If Marguerite’s money were spread across hundreds of companies and she were selling the same £2,000 a month in the same fall, the answer would be {a:D1.timing}.'
    ] }
]);
