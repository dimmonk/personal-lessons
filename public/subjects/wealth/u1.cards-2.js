// Wealth Preservation, Unit One, part one (second half): the two words the second family leans on, the second family (a fall in
// prices it is not ready for), its look-alike pair with the first family, and the exception in which the first family wins.
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- Two words the second family leans on ---------- */
  { id: 'term-bond', kind: 'term', term: 'bond',
    h: 'A loan with a fixed payout',
    link: 'The next kind of case is about falling prices, and prices fall for some things and not for others. One more word, for something whose price can wobble but whose payout does not.',
    case: 'w-t-bond',
    plain: [
      'Omar has not bought a slice of anything. He has lent money, and the loan comes with a promise: £30 a year, and £1,000 back on a set date. If he keeps the loan to that date, he gets exactly that, whatever anyone was paying for it in between.',
      'The price of the loan does move. If he wanted to sell it in the third year, someone might pay £950 on one day and £1,040 on another. But a moving price is only a problem for a person who has to sell. A person who waits for the date gets the £1,000. That difference, between a price that moves and a payout that is fixed, is why this kind of loan matters in what comes next.'
    ],
    after: 'A loan like this is {t:bond}. Companies borrow this way as well as governments.' },

  { id: 'term-mix', kind: 'term', term: 'mix',
    h: 'The split between shares, loans and cash',
    link: 'One last word before the second kind of case: the way a person has divided their money between the things it can be held in.',
    case: 'w-t-mix',
    plain: [
      'Hana made a plan: half in shares and half in bonds. Shares tend to rise and fall more than bonds, so the split decides how rough a ride the money gets. She chose a half-and-half ride.',
      'What moves is the split, not her wishes. Because the shares grew, they are now three-quarters of her money: £300,000 out of £400,000. If the shares fall 30%, she loses £90,000, which is 22.5% of everything. On her plan, with £200,000 in shares, the same fall would have cost £60,000, which is 15%. Nobody decided to take that extra risk. It built up while she was not looking.',
      'A name for the split is useful because it lets you say two things separately: what the person planned, and what it is now.'
    ],
    after: 'The split is {t:mix}. When it has moved well away from the one the person chose, a fall in prices takes a different share of their money from the share they chose to risk.' },

  /* ---------- The second family: a fall in prices it is not ready for ---------- */
  { id: 'meet-timing', kind: 'meet', family: 'timing',
    link: 'The second answer is easy to mistake for the first, because money leaves in it too. This time what matters is not how much leaves, but the day.',
    case: 'w-couple-fall', mark: 'D1',
    strip: [
      'There are two people, Pete and Jean, and one sum: £400,000, all in shares and funds.',
      'Money leaves it every month to pay the bills, about £1,700.',
      'Nothing is set aside in cash. Every bill is paid by selling some of what they own.',
      'Prices have just fallen by 30%, and the bills are the same as before.'
    ],
    explain: [
      'What you are shown is not a charge or a tax. £1,700 a month is just life: food, heating, rent. What the case shows is where the money comes from. Every month Pete and Jean must sell some of their shares and funds to pay for it, and this spring each sale takes place at a price 30% lower than before.',
      'Here are the numbers, with a price of £10 for {t:share}. Before the fall, £1,700 means selling 170 shares. After the fall the price is £7, and the same £1,700 means selling 243 shares: 73 more, for the same bills. If prices come back, those 73 are not there to rise with them. The sale was forced by the day the bills fall due, not by anything about the companies.',
      'The harm does not come from the fall alone. A fall does nothing to a person who is not selling. It hurts a person who has to sell on the day, because the money is needed on dates the market does not care about. The same fall is a small thing to someone who has cash set aside to spend from until prices recover, and a large thing to someone who has not.',
      'This answer covers three forms, and this card shows the first. The second is a bill of a known size on a known day, with the money for it still held in investments that can fall. The third is the one you met on the card about {t:mix}: a split that has moved away from its plan, so that a fall takes more than the person chose.'
    ],
    feature: { step: 'D1', option: 'timing' },
    name: [
      'The answer, and the name of this kind of case, is {a:D1.timing}. "Not ready" means that nothing has been arranged to ride a fall out: no cash to spend from, no money held as {t:bond} that repays on the day, and {t:mix} not kept within its plan.',
      'The name does not say that prices will fall. Nobody knows that. It says what would happen if they did, and the case is about that.'
    ] },

  { id: 'again-timing', kind: 'again', family: 'timing',
    link: 'The last card gave you what to point to: {needs:timing}. Here is a second case with a different story. There are no living costs in it, only one bill on one day.',
    first: 'w-couple-fall', second: 'w-fees-due', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the difference between monthly bills and a single school bill, and ignore how far prices fall. Look at one thing only: which words show that the money is needed on a particular day, and that the money for it is in something whose price can fall?',
    prompt: { kind: 'phrase', answer: 'due on 1 September, and the money for them is in a fund of shares' },
    shared: [
      'Both cases are made of the same thing. There is money in shares or funds, there is something it must pay for on a day it does not choose, and the case shows a fall in prices catching it. Pete and Jean’s bills come every month and Dana’s comes once, but in both the day is set by something other than the market.',
      'Here are Dana’s numbers. The bill is £12,000. After a fall of 25% the fund is worth £9,000, so £3,000 of the bill has no money behind it unless she sells something else, takes a loss, or finds the £3,000 elsewhere. Had prices stayed up, none of this would have come up. Prices may still recover by September, but the bill is not waiting for them.',
      'What the two share is money needed on a particular day, held in something that can fall. That is what {a:D1.timing} names.'
    ] },

  { id: 'portrait-timing', kind: 'portrait', family: 'timing',
    link: 'You know what to point to for {a:D1.timing}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'There is money in shares or funds, and there is something the money is needed for, with a time attached: this month’s bills, next September’s fees, a retirement three years away.',
      'The case says, or lets you work out, that the money cannot wait for prices to recover. A bill falls due on its day. Living costs arrive every month.',
      'It does not need a fall to have happened. A case can say that prices fell, or only that they could. What matters is that, if they did, nothing is set aside to take the strain.',
      'The case is about how the money is arranged, not about where prices go next. Nobody in it needs to know, or to guess, what the market will do.',
      'All three forms belong here: monthly bills met from holdings that can fall, one bill on a day with its money in such holdings, and a split that has drifted from its plan.',
      'Often nothing has gone wrong yet. The case is a warning about what would happen, not an account of what did.'
    ],
    not: [
      'A fall in prices, on its own, is not this kind. If the case shows no need for the money soon, and nothing has drifted from a plan, the money has time to wait, and the case does not belong here.',
      'It is also not a prediction. The answer does not say that prices will fall. It says what would happen to this person if they did.'
    ],
    wild: ['"If the market drops again just when I retire..."', '"I’ll have to sell at the bottom."', '"The fees are due in September, whatever the market does."', '"I’m a lot more in shares than I meant to be."', '"It’s all in the market, and I need £1,700 a month from it."'],
    self: 'In your own life it is the sentence "I will need that money in..." followed by a date, a few months or a few years out. Ask where that money is held on the day, and what its price could do before then.',
    ask: '"When is this money needed, and what could its price do before then?" If it is needed on a date, and it sits in something that can fall, you are probably looking at this kind.' },

  { id: 'check-timing', kind: 'check', after: 'timing',
    case: 'w-drifted',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that the split has moved away from the plan? Tap them.',
           answer: 'After years of rises it is 78% shares and 22% bonds' } },

  /* ---------- First look-alike pair: something taken out every year, or a fall in prices ---------- */
  { id: 'look-erosion-timing', kind: 'lookalike', ledger: 'erosion~timing',
    link: 'You have now met two answers in which money leaves the owner’s hands. They are easy to mix up, because in both a fall in prices may be somewhere in the story. This card puts them side by side.',
    cases: ['w-la-fee', 'w-la-fall'],
    instruction: 'Both cases are about Greta and Sam, who are retired and have £300,000. Compare one thing: is the case about how much leaves each year, whatever prices do, or about the days on which money has to be raised, because prices have fallen?',
    prompt: { kind: 'which', option: 'D1.timing', answer: 'w-la-fall' },
    difference: [
      'In Case A their adviser’s firm takes 1.1% of the £300,000 every December, £3,300, however the funds did that year. The same sum is taken in a good year and in a bad one, and the case does not say anything is sold on a bad day. The answer is {a:D1.erosion}.',
      'In Case B nothing is taken by an adviser. Greta and Sam pay their bills by selling about £1,500 of their funds each month, with nothing set aside in cash, and this year prices are down 25%. Each sale takes place at a lower price than it would have, and what is sold is not there when prices come back. The answer is {a:D1.timing}.',
      'Money leaves the same couple in both cases. What separates the two is whether the case is about the amount that goes out every year, whatever the market does (Case A), or about when money has to be raised, in a market that has fallen (Case B).'
    ] },

  /* ---------- The first exception: a fall in prices, and a sum that never changed ---------- */
  { id: 'exc-fixedsum', kind: 'exception', ledger: 'erosion~timing', looksLike: 'timing', is: 'erosion',
    h: 'A fall in prices, and a sum that never changed',
    link: 'The last card kept the two answers tidy. Real cases are often less tidy, and a fall in prices and a sum taken out every year can sit in the same case.',
    case: 'w-exc-fixedsum',
    setup: 'Prices have fallen, and Carl and Una are paying their bills by selling investments, which is what a case about {a:D1.timing} usually looks like. Yet the answer for this case is {a:D1.erosion}.',
    prompt: { kind: 'phrase', answer: 'They still take out £48,000 a year, which is now 10% of what is left' },
    because: [
      'Look at what the case says about the sum. It was set at £48,000 when the money was £800,000, which is 6%. It has not been changed, though the money is now £480,000. £48,000 is now 10% of it. Every year the same sum comes out, and every year it is a bigger share of a smaller amount.',
      'The fall in prices explains why the money shrank. But the case is not asking what the fall did. It shows a sum that stays fixed while the money it comes from shrinks. Taking £48,000 a year out of £480,000 would be hard even if prices never fell again. If they came back, the same sum would look smaller, but it would still be the sum that was set for money that no longer exists.',
      'So the case shows two things at once: a fall that has caught the money that pays for their living, and a sum that stays the same every year while the money it comes from shrinks. When a case shows both, the answer is the second.'
    ],
    take: [
      'Which answer wins is a decision, and in real life the two run into each other: a fall makes a fixed sum worse, and a fixed sum makes a fall worse. Each case gets one answer, so that two people using the same questions reach the same one and can each say why.',
      'The sentence above has a second half, about a planned sale to put a split back where the tax on the sale is the problem. That is a second place where the answer is {a:D1.erosion} instead of {a:D1.timing}. It is not in the case here, and you can leave it until a case shows it.',
      'The test that settles it is the one from the last card: is the problem how much comes out, or that it had to come out on a bad day? Here it is how much. If the case showed only bills paid in a fall, with a sum that had always been a fair share of the money, the answer would be {a:D1.timing}.'
    ] }
]);
