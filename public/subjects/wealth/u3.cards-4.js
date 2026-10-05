// Wealth Preservation, Unit Three, part two (second half): the one answer that says nothing needs doing, first with a business and
// then with a loan, and its look-alike pair with the answer before it. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  { id: 'w3-meet-safe', kind: 'meet', outcome: 'safe',
    link: 'In every case so far something was missing, or in the way. The next answer is for the opposite: a business the person runs, most of what they have, and nothing missing round it.',
    case: 'w3-h-saf-1', mark: 'S1',
    strip: [
      'There is one person, Hugo, with £1,150,000: £800,000 in a timber yard he runs, £250,000 in funds, and £100,000 in savings.',
      'The yard is most of what he owns: £800,000 out of £1,150,000 is 70%.',
      'Everything else he has is spread: £250,000 is in funds that hold thousands of companies.',
      'His savings cover three years: £100,000 against £33,000 a year is just over three.',
      'No bank holds his shares in the yard as security.'
    ],
    explain: [
      'Compare Hugo with Femi and Naomi. The first question finds the same thing in all three: one business that the person runs, most of what they own. What is different is what stands round it. Hugo has {t:threesupports}, all three, in numbers: £100,000 ÷ £33,000 is just over three years; his other money is in funds that hold thousands of companies; and no lender has his shares.',
      'So nothing needs doing about the yard. This is a real answer, and it has a name so that it can be said as plainly as the others. A person can say: “Yes, most of what I have is in one business, and it is looked after.”',
      'There is a reason to say it firmly. Every fix has a price. If an adviser told Hugo to sell half the yard, he would pay tax and fees on the sale, he would give up part of a business he runs and likes, and he would be paying to guard against a bad year that his three years of savings, his spread of funds and his clean ownership already guard against. The money would be spent on a problem the case does not show.',
      'The answer is not “never look again”. It is true of the case as written. If a loan is taken against the shares, or the savings are spent, one of the three goes, and the answer changes with it.',
      'This answer covers more than a business with three supports. It is the name for any case in which the one thing that most of the money depends on, or that could bring {t:claim} or force a sale, is already made safe. There are other kinds of case that belong to it, and each is taught beside the problem it answers.'
    ],
    feature: { step: 'S1', option: 'madesafe' },
    name: [
      'The answer is {a:S1.madesafe}, and the name is {o:safe}. It is the one name in this unit that says nothing needs doing.',
      'It does not say that nothing could go wrong. Something could: the yard could still have a bad year. The name says that the case shows the one thing already made safe, so that a bad year would not force anything.'
    ] },

  { id: 'w3-again-safe', kind: 'again', outcome: 'safe',
    link: 'The timber yard gave you the first kind of case that is already made safe. Here is a second kind, with no business in it, in which the one thing is a flat and a loan on it.',
    first: 'w3-h-saf-1', second: 'w3-h-saf-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between a timber yard and a flat, and ignore that one case is about a business and the other about a loan. Look at one thing only: which words show the one thing already made safe?',
    prompt: { kind: 'phrase', answer: 'the bank cannot demand the money back as long as she pays the £900 due each month' },
    shared: [
      'Hugo’s timber yard and Beatriz’s flat look nothing alike. In both, one thing is most of what the person has: £800,000 out of £1,150,000 for Hugo (70%), and £400,000 out of £460,000 for Beatriz (87%). In both, the case also shows what makes it safe, in numbers, and in neither is anything left to put right.',
      'Beatriz owes £150,000 on a £400,000 flat, which is 37.5%. The rate is fixed for fifteen years, so it cannot jump. The bank cannot demand the money back while she pays £900 a month, which her pay covers more than three times (£3,100 ÷ £900 is about 3.4). A loan like this cannot be used to force her to sell, whatever prices do.',
      'What the two share is that the case shows the one thing already looked after, and says how. That is what {a:S1.madesafe} names. It covers a business with all three of {t:threesupports} in place, and it covers a loan that is small against what it is secured on, at a fixed rate, and cannot be demanded back while it is paid.'
    ] },

  { id: 'w3-portrait-safe', kind: 'portrait', outcome: 'safe',
    link: 'You now know what to point to for {a:S1.madesafe}. Here is the rest of the picture, because this is the answer people find hardest to trust.',
    typical: [
      'The one thing is in the case, and it is big: most of what the person has, or something that could reach all of it. The first question still gives its answer.',
      'The case then shows what makes it safe, in words and numbers you can point to: three years of spending, funds that hold thousands of companies, no bank holding the shares as security, a rate fixed for fifteen years, a loan the bank cannot demand back. “It’s fine” is not that.',
      'The person is usually calm, and is often being urged to do something: by an adviser, a friend, an article. The urging is not one of the case’s facts.',
      'It lasts only as long as the facts hold. A new loan, a reserve that has been spent, a policy that has lapsed: each can end it.',
      'There is more than one kind. You have seen a business with all three supports, and a loan that is small, fixed and cannot be demanded back while it is paid.'
    ],
    not: [
      'It does not mean that nothing could go wrong. Hugo’s yard could still lose half its value. What it means is that a bad year would not force a sale, and would not let a lender or {t:claim} take the rest.',
      'It is not the answer for a case in which the person only says that it is safe. “It’s fine” is an opinion, and there is nothing in it to point to. This answer has to be shown by the case.'
    ],
    wild: ['"I’ve got three years’ spending in the bank, and the rest is spread."', '"The rate is fixed, and they can’t call it in."', '"Everything is in separate companies."', '"I’m insured for far more than any claim."', '"My adviser says I should sell half, but I don’t see why."'],
    self: 'In your own life it is the question you ask when someone says you should do something about a big holding, a policy, a loan or a business: what in my case, in numbers, makes it safe already?',
    ask: '“What exactly makes this safe, and can I point to it in the case, in numbers?” If you can, and the first question still found one big thing, you are probably looking at this answer.',
    act: [
      'First, say which kind of safe it is, and write down the numbers that make it so: the years of spending set aside, the cover next to the biggest realistic claim, the companies that hold the properties, or the loan’s rate, size and terms.',
      'Second, do nothing else to the one thing.',
      'Third, set a date to check the numbers again, once a year, and also whenever you borrow, spend the reserve, change a policy or buy another property.',
      'Fourth, if someone offers a fix, ask what problem it answers that your numbers do not already answer, and what it costs each year.'
    ] },

  { id: 'w3-check-safe', kind: 'check', after: 'safe',
    case: 'w3-h-saf-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe'] } },

  { id: 'w3-look-supports-safe', kind: 'lookalike', ledger: 'supports~safe',
    link: 'These two answers are the nearest neighbours in the unit. In both, the person runs a business that is most of what they have. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-ss-a', 'w3-h-la-ss-b'],
    instruction: 'Both cases are about Alma and her bakery, £500,000 of the £800,000 she owns, with £150,000 in funds and £150,000 in savings. Compare one thing: whether a bank holds her shares in the bakery as security.',
    prompt: { kind: 'which', option: 'S1.ownrun', answer: 'w3-h-la-ss-b' },
    difference: [
      'In Case A she has all three of {t:threesupports}: the rest is spread over funds, £150,000 of savings covers more than three years of the £40,000 she spends, and no bank holds her shares as security. The answer is {a:S1.madesafe}, and the name is {o:safe}. Nothing needs doing.',
      'In Case B one sentence is different: last year she borrowed £120,000 for new ovens, and the bank holds her shares in the bakery as security. The bank can now take the shares if she cannot keep up the payments, so a lender could decide the future of the bakery. The answer is {a:S1.ownrun}, and the name is {o:supports}: one of the three has gone, and the first thing to do is to deal with the loan.',
      'One sentence changed the answer. That is the point of the pair: the story is the same bakery, and the answer follows the three things, not the story.'
    ] }
]);
