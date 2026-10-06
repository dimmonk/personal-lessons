// Wealth Preservation, Unit Three, part two (first half): the three supports, a business the person runs with a support missing,
// and its look-alike pair with the first answer. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- The word "the three supports" ---------- */
  { id: 'w3-term-threesupports', kind: 'term', term: 'threesupports',
    h: 'What makes it safe to keep most of your money in a business you run',
    link: 'The next answer is about a business that the person runs, and it leans on three things that make it safe to keep so much in one place. Here they are, in a case where all three are there.',
    case: 'w3-h-t-supports',
    plain: [
      'Lucía runs the printing firm her father started. It is worth $900,000, and her other money is $360,000, so the firm is $900,000 out of $1,260,000, which is 71% of everything she has. If the firm had a very bad year, a lot of what she owns would go with it. Three things in her case are why she can sleep.',
      'First, everything else she has is spread over many investments. Her $270,000 is in funds that hold thousands of companies, so a bad year for the printing trade does not become a bad year for the rest of her money. If she had put the $270,000 into another printing firm, one event could hit both.',
      'Second, she has several years of spending held outside the firm. She and her family spend $30,000 a year, and she has $90,000 in savings. $90,000 divided by $30,000 is three years. If the firm earned nothing for a year, or two, she would not have to take money out of it at a bad moment, and she would not have to sell it. Three years is the figure used in this unit’s cases. What is right for a real person depends on how long a bad stretch could last in their trade, and on how much the family spends.',
      'Third, no loan is secured on her shares in the firm. When a bank lends money and holds the borrower’s shares in a business as security, the bank can take those shares, or force a sale of them, if payments are missed or the lender’s terms are broken. Lucía’s house loan is secured on the house, not on the firm, so nothing the bank does about the house loan touches the firm.',
      'Without the first, one bad event reaches everything. Without the second, a bad stretch forces her to sell, or to drain the firm. Without the third, a lender can decide for her. With all three, she can keep most of what she has in one business that she knows and runs, and the three are what make that a sound choice and not a gamble.'
    ],
    after: 'From here on, {t:threesupports} means the three things in Lucía’s case. A business is made safe by all three together, and one missing is enough to leave a gap.' },

  /* ---------- Second answer group: a business the person runs ---------- */
  { id: 'w3-meet-supports', kind: 'meet', outcome: 'supports',
    link: 'The next answer is the other side of that case. When one of the three things in Lucía’s case is missing, a business that is most of what someone has stops being a sound choice and becomes a risk.',
    case: 'w3-h-sup-1', mark: 'S1',
    strip: [
      'There is one person, Femi, with $560,000: $480,000 in a roofing firm he runs, and $80,000 that is a van worth $66,000 and $14,000 in savings.',
      'The firm is most of what he owns: $480,000 out of $560,000 is 86%.',
      'He runs it himself, and he started it.',
      'Each of the three things from Lucía’s case is missing: nothing else is spread across investments, his savings cover under five months of spending, and a bank holds his shares in the firm as security for a loan.'
    ],
    explain: [
      'Femi’s case has the shape of Lucía’s, and none of what made hers safe. Take each of the three in turn, with his numbers.',
      'The rest of his money is not spread. $80,000 is a van and a savings account. If the roofing trade has a bad year, the firm loses value and the van is worth less, because the same trade uses it. There is nothing else for the bad year to miss.',
      'Nothing is set aside for living. His family spends $36,000 a year, and he has $14,000 in the bank, which is $14,000 ÷ $36,000, about 0.4 of a year, under five months. If the firm earned nothing for a year, he would have to take money out of a firm that has none, or sell it, or borrow again. Lucía’s three years would have given him time.',
      'And a bank holds his shares in the firm as security for the $90,000 truck loan. If payments slip, or the bank’s terms are broken, the bank can take the shares. A lender, and not Femi, can then decide the future of the firm, at the moment when he is least able to argue.',
      'Femi has all three missing, which makes the shape easy to see. One missing is enough for this answer. The fix has a name that says what it is: put the three things in place. There is an order, because they are not equally urgent. One sensible order is the loan first, since it is the one a lender can use against him; then the spending reserve, since it buys time; and the spreading of everything else last, since it is the slowest.'
    ],
    feature: { step: 'S1', option: 'ownrun' },
    name: [
      'The answer is {a:S1.ownrun}, and the name of what to do about it is {o:supports}. It says what the fix is: build what is missing, and what is to be built is {t:threesupports}.',
      'The name says nothing against running a business, or against having most of what you own in it.'
    ] },

  { id: 'w3-again-supports', kind: 'again', outcome: 'supports',
    link: 'The roofing firm gave you what to point to: {needs:supports}. In Femi’s case all three things were missing. Here is a second case in which two are in place and one is not.',
    first: 'w3-h-sup-1', second: 'w3-h-sup-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between roofing and animals, and ignore how many of the three things are missing. Look at one thing only: which words show that one of the three things is missing?',
    prompt: { kind: 'phrase', answer: 'is a part-share in a pet-food factory that sells mostly to vets' },
    shared: [
      'Femi’s case is missing all three: nothing spread, no spending set aside, and a loan against his shares. Naomi’s is missing one. Her $90,000 covers three years, and she has no loan, but her other money is a part-share in a pet-food factory that sells mostly to vets, so a bad year for vets is a bad year for that too, and nothing is spread.',
      'Both run the business that is most of what they own: $480,000 out of $560,000 for Femi (86%), and $620,000 out of $910,000 for Naomi (68%). Naomi’s case shows that the answer needs only one gap. Having two of the three is better than having none, and it is still a gap.',
      'Both are cases of {a:S1.ownrun}: the owner works in the business, and something is missing round it. All of {t:threesupports} are needed, and one gap is enough.'
    ] },

  { id: 'w3-portrait-supports', kind: 'portrait', outcome: 'supports',
    link: 'You now know what to point to for {a:S1.ownrun}. Here is the rest of the picture.',
    typical: [
      'The person built the business, or took it over, and works in it every day. It is most of what they own, because every spare dollar went back into it.',
      'They are proud of it, and they know it better than anyone. That is true, and it does not change what rests on it.',
      'Often what is wrong is something missing, and not something you can see: no savings set aside, no investments away from the business, a loan with the shares in it. Nothing has gone wrong yet, so nothing in the story draws attention to it.',
      'The loan is the one most often missed. A loan taken for a good reason, such as a truck, a second store or a house, can have the business’s shares as security. It can then be used against the owner whatever the business is doing.',
      'Selling is not the usual answer, because the person wants to keep running it. The fix is to build what is missing around it.'
    ],
    not: [
      'A business the person runs is not enough on its own, and neither is having most of what they own in it. The answer needs a gap: at least one of {t:threesupports} missing. Where all three are in place, the answer is a different one.',
      'It is also not the same as one holding the person is free to sell. A person who has stepped back from running the company is a different case: they can sell.'
    ],
    wild: ['"Every penny I have is in the business."', '"I know it better than anyone."', '"The bank has the shares as security, but I’ve never missed a payment."', '"I’ll deal with savings when things calm down."'],
    self: 'In your own life, or someone else’s: the founder who says “it’s all in the business”, the person who borrowed against the company to expand, the self-employed person with no savings beyond next month.',
    ask: '“If the business earned nothing for two years, what would we live on, and who could take the business from us?” If you cannot answer both from the case, a support is probably missing.',
    act: [
      'First, check each of the three in turn and write down which are in place and which are not, with numbers: the savings divided by the yearly spending gives the years covered; the part of everything else that is spread across funds; and any loan that has the business’s shares as security.',
      'Second, deal with a loan against the shares first. Repay it, or move it so that it is secured on something other than the business, because it is the one a lender can use against you.',
      'Third, build the spending reserve outside the business, up to about three years of spending, by taking money out of the business over time and not all at once.',
      'Fourth, put money that comes out of the business into funds that hold many companies, and not into things that depend on the same customers as the business.',
      'Fifth, check all three again once a year, because they can slip: a loan is taken, spending rises, savings are used.'
    ] },

  { id: 'w3-check-supports', kind: 'check', after: 'supports',
    case: 'w3-h-sup-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun'] } },

  { id: 'w3-look-diversify-supports', kind: 'lookalike', ledger: 'diversify~supports',
    link: 'You have now met two answers that both start from one holding that is most of what a person has. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-ds-a', 'w3-h-la-ds-b'],
    instruction: 'Both cases are about Tariq, who founded a moving company worth $500,000, most of what he has. Compare one thing: whether he takes part in running it.',
    prompt: { kind: 'which', option: 'S1.ownrun', answer: 'w3-h-la-ds-b' },
    difference: [
      'In Case A Tariq handed the day-to-day running to a new manager last year and takes no part in it, and nothing stops him selling. The answer is {a:S1.freeheld}, and the name is {o:diversify}: a schedule of sales. Selling costs him no job.',
      'In Case B the company and the sum are the same, but he still runs it every day. His other money is $40,000 and his household spends $35,000 a year, so only about fourteen months are covered. The answer is {a:S1.ownrun}, and the name is {o:supports}. He cannot sell in steps without giving up his work, and the problem is not that he holds too much of it but that nothing stands round it.',
      'So the question that separates them is not how much he owns or how well the company is doing. It is whether he runs it.'
    ] }
]);
