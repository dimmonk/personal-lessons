// Wealth Preservation, Unit Three, part four (first half): a loan the lender could use, its look-alike pair with the answer for what
// is already made safe, the exception in which the key chooses the business, and the wrong idea about a house. Field guide: see
// u3.cards-1.js.

FC.cards('wealth', 'u3', [

  { id: 'w3-meet-deleverage', kind: 'meet', outcome: 'deleverage',
    link: 'The last of the problems is a loan. A loan can be a very good thing. What matters is what the lender is allowed to do, and the case has to show it.',
    case: 'w3-h-del-1', mark: 'S1',
    strip: [
      'There is one person, Ian, with shares worth £600,000, of which £350,000 is borrowed from his broker.',
      'The shares are the broker’s security for the loan.',
      'The contract lets the broker act if the loan ever becomes more than 60% of what the shares are worth: Ian must pay in more money within two days, or the broker sells some of his shares.',
      'The case does not say prices are falling. It says what the lender is allowed to do if they do.'
    ],
    explain: [
      'Look at the numbers first. £350,000 borrowed against £600,000 of shares is 58%. The contract’s limit is 60%. The loan is only two points from the limit. What would take it over? If the shares lose just 3% of their value, to about £582,000, the loan is £350,000 ÷ £582,000, which is 60.1%. A fall of 10%, to £540,000, puts the loan well over: 60% of £540,000 is £324,000, and £350,000 is £26,000 more than that, so the broker may demand £26,000 or sell.',
      'Now see why that matters. The broker is not a partner in Ian’s plan. The broker is protecting its own loan, and the contract lets it act on its own timetable. If Ian cannot find £26,000 in two days, some of his shares are sold at the low price, and sold for good. When prices come back, what was sold is not there. A fall that would have been a loss on paper becomes a loss for good, at the moment the lender chooses.',
      'The harm does not need a crash. A fall of 10% is a bad month. And it does not depend on the company being a poor one. It depends only on the loan being large against what it is secured on, and on what the lender may do.',
      'The fix is to change the loan, not the shares. Borrow less, so that the shares would have to fall far further before the lender could act. With a loan of £150,000 against £600,000 of shares, which is 25%, the 60% limit would be reached only when the shares fell to £250,000, a fall of 58%. And prefer terms that fix the rate for years and that the lender cannot cancel while the payments are made.',
      'A loan is not a bad thing in itself. It is the lender’s power that matters, and the name says what to aim for: a modest loan, on terms the lender cannot turn against you.'
    ],
    feature: { step: 'S1', option: 'riskyloan' },
    name: [
      'The answer is {a:S1.riskyloan}, and the name of what to do about it is {o:deleverage}. The name is the fix: a loan that is modest in size, on terms that stay safe.',
      'The name does not say that borrowing is wrong, or that the lender is acting badly. It says that the loan, as it stands, hands the lender a power that could force a sale.'
    ] },

  { id: 'w3-again-deleverage', kind: 'again', outcome: 'deleverage',
    link: 'The broker’s loan gave you what to point to: {needs:deleverage}. Here is a second case, with no shares in it, in which the lender’s power comes from the rate.',
    first: 'w3-h-del-1', second: 'w3-h-del-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between shares and flats, and ignore who the lender is. Look at one thing only: which words show how the loan’s terms can make things worse for the borrower?',
    prompt: { kind: 'phrase', answer: 'The loan’s rate follows the bank’s base rate, and it has just gone from 3% to 7%' },
    shared: [
      'Ian’s loan and Sunil’s loan look different: a broker lending against shares, a bank lending against flats. In both, the loan is large against what it is secured on: 58% for Ian, and 80% for Sunil (£800,000 out of £1,000,000). And in both, the terms let something outside the borrower’s control make the loan harder: a limit that lets the broker act for Ian, and a rate that follows the bank’s for Sunil.',
      'Sunil’s numbers show it. At 3%, interest on £800,000 is £24,000 a year. At 7% it is £56,000, which is £32,000 more, out of rents of £70,000. The rents are the same. Only the rate moved. If it went higher, or the flats’ value fell below the loan, he could be forced to sell whatever the flats were earning.',
      'That is what {a:S1.riskyloan} names, and the words to point to are these: {needs:deleverage}.'
    ] },

  { id: 'w3-portrait-deleverage', kind: 'portrait', outcome: 'deleverage',
    link: 'You now know what to point to for {a:S1.riskyloan}. Here is the rest of the picture.',
    typical: [
      'The loan is large against what it is secured on, or its terms put the lender in charge: the right to demand the money back, the right to ask for more security, or a rate that changes.',
      'Payments are usually being met. A person can pay every month and still be in this case, because it is not about missed payments. It is about what the lender could do without any.',
      'It was usually taken for a good reason: more shares, a property, a business. It works well in good times, which is why it is easy to accept.',
      'The harm comes when prices fall or rates rise, and it comes quickly: two days, six months.',
      'The size matters in a particular way. The nearer the loan is to the value of what it is secured on, the smaller the fall that makes the lender act.'
    ],
    not: [
      'A loan is not this answer simply because there is a loan. A small loan, at a fixed rate, that the lender cannot demand back while it is paid, is already made safe, and the case is {o:safe}.',
      'And a loan against the shares of a business the person runs is not this answer either. It is one of {t:threesupports}, and the case is {o:supports}.'
    ],
    wild: ['"The bank can call it in whenever it likes."', '"The rate follows the base rate."', '"The broker wants more money in by Friday."', '"Interest only, and the whole sum is due in five years."'],
    self: 'In your own life, read the loan terms for three things: the interest rate (fixed, or following a rate that moves), the sum compared with what it is secured on, and any sentence that begins “the lender may”.',
    ask: '“What could the lender do, however well I pay, and how far would prices or rates have to move before they did it?” If the answer is that they could act soon, you are probably looking at this answer.',
    act: [
      'First, write down every loan: how much, what it is secured on, whether the rate is fixed, and whether the lender can demand the money back or ask for more security.',
      'Second, work out how far the value would have to fall before the lender could act: divide the loan by the limit the contract names, and compare the result with what the thing is worth today. £350,000 ÷ 0.6 is about £583,000.',
      'Third, reduce the loan or change its terms so that the answer to the second step is a very large fall, with a rate fixed for years and no right for the lender to demand the money back while the payments are made.',
      'Fourth, do not replace a loan that can be demanded back with another on the same terms.'
    ] },

  { id: 'w3-check-deleverage', kind: 'check', after: 'deleverage',
    case: 'w3-h-del-chk',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show a way the lender could make the loan harder to carry? Tap them.',
           answer: 'The bank can change the rate every six months' } },

  { id: 'w3-look-deleverage-safe', kind: 'lookalike', ledger: 'deleverage~safe',
    link: 'You have now met two answers about loans. They are easy to mix up, because a loan on the same flat can be either. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-ds2-a', 'w3-h-la-ds2-b'],
    instruction: 'Both cases are about Jon, who owns a flat worth £480,000. Compare one thing: how large the loan is against the flat, and what the bank is allowed to do.',
    prompt: { kind: 'which', option: 'S1.riskyloan', answer: 'w3-h-la-ds2-a' },
    difference: [
      'In Case A Jon owes £400,000 on a £480,000 flat, which is 83%. The rate follows the bank’s, and the bank can ask for more money to be put up if the flat’s value falls. A fall of 10% in the flat, to £432,000, would take the loan to 93% of its value. The answer is {a:S1.riskyloan}, and the name is {o:deleverage}.',
      'In Case B Jon owes £150,000 on the same flat, which is 31%. The rate is fixed for fifteen years, and the bank cannot demand the money back while he makes the payments. The flat could fall by half, to £240,000, and the loan would be 63% of its value, with the bank still unable to act. The answer is {a:S1.madesafe}, and the name is {o:safe}.',
      'The flat and the person are the same. The size of the loan and the bank’s rights are what differ, and they decide.'
    ] },

  { id: 'w3-exc-supports', kind: 'exception', looksLike: 'deleverage', is: 'supports', ledger: 'deleverage~supports',
    h: 'A loan the lender could use, and the answer is the business',
    link: 'A loan whose lender can demand the money back looks like {o:deleverage}. This card shows a case in which that loan is there, and the answer is a different one.',
    case: 'w3-h-exc-sup',
    setup: 'Reza has a loan that his bank can demand back, and that gives the bank his shares if he cannot pay. That is exactly what {o:deleverage} points to. Yet the answer for this case is {a:S1.ownrun}, and the name is {o:supports}.',
    prompt: { kind: 'phrase', answer: 'runs a small chain of tyre shops' },
    because: [
      'Ask what else the case shows. Reza runs the business, and it is most of what he owns: £900,000 out of £1,100,000. A loan secured on the shares of a business the owner runs is one of the three things that make such a business safe, and it is the one that is missing here. So the loan is not a separate matter. It is part of the answer for the business.',
      'There is more missing. His savings of £15,000 cover about five months of the £36,000 he spends a year, which is a second gap. Putting {t:threesupports} in place means ending the loan against the shares and building the reserve, and ending the loan is what deals with the bank’s power.',
      'Compare Ian, in the case of {o:deleverage}. His loan was against shares in a company that he did not run. Reza’s loan is part of a business that he runs, and when the loan is part of a business that the owner runs, the answer is the one for the business.'
    ],
    take: 'When a case shows both a loan the lender could use and a business the person runs, the answer is {a:S1.ownrun}: the loan is one of the three gaps.' },

  { id: 'w3-refute-house', kind: 'refute', about: 'deleverage',
    h: 'A wrong idea: “my house is my best investment, so it cannot be a risk”',
    link: 'The picture of {o:deleverage} said that a loan is usually taken for a good reason and works well for years. That is why this idea feels true, and why it leads people into the gap.',
    idea: 'My house is my best investment. It has gone up every year since I bought it, so there is no risk in having most of what I own in it, even with the loan.',
    verdict: 'This is wrong. What it says about the past may be true, and it answers a different question from the one that matters here.',
    right: [
      'How well a house has done tells you what happened. The question is about what could happen to most of what a person has. A house that has risen for years can still be most of what someone owns, and a loan on it can still be one that a lender could use.',
      'Take a house worth £400,000 with a loan of £340,000 whose rate follows the bank’s. The loan is 85% of the value. If prices in the area fell by 15%, the house would be worth £340,000, exactly what is owed, and nothing would be left of what the owner put in. If the rate then jumped from 3% to 7%, the interest would go from £10,200 a year to £23,800.',
      'None of that needs the house to have been a bad buy. A good buy and a risky shape can both be true. So the useful thing to ask is not “has it been my best investment?” but “what could take most of it, and what could the lender do?” If the loan is modest, the rate fixed, and the lender unable to demand the money back while it is paid, nothing needs doing, and that too is an answer.'
    ],
    testedBy: ['w3-c-house'] }
]);
