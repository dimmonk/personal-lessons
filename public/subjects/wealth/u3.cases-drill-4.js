// Wealth Preservation, Unit Three: the reverse items of stage two (one for each name) and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice), so
// no choice is a false statement. The app words the question from `expect`. A claim is something a person might say that uses one of
// the unit's names wrongly, or reasons in one of its ways. ask.type 'option': the key's question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('wealth', 'u3', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'w3-rev-diversify', use: 'drill', kind: 'reverse', outcome: 'diversify', expect: 'hear',
    options: [
      { text: '"I inherited it, and I could sell it tomorrow, but it has always been in the family."', voice: 'diversify' },
      { text: '"I’m not allowed to sell any of it until 2029."', voice: 'hedge' },
      { text: '"I run the place myself, and it’s all I have."', voice: 'supports' },
      { text: '"The bank can ask for the money back whenever it likes."', voice: 'deleverage' }
    ],
    why: 'It says that the person is free to sell ("could sell it tomorrow") and has no part in running it. Only the habit of holding on stands in the way.' },

  { id: 'w3-rev-hedge', use: 'drill', kind: 'reverse', outcome: 'hedge', expect: 'find',
    options: [
      { text: 'A building run by a letting agency, which the owner could sell any day.', voice: 'diversify' },
      { text: 'A date before which the staff’s shares may not be sold.', voice: 'hedge' },
      { text: 'A policy that pays up to £250,000 and a lawyer’s figure of £2,000,000.', voice: 'insure' },
      { text: 'Three years of spending in the bank and no loan on the shares.', voice: 'safe' }
    ],
    why: 'That detail is the rule that stops a sale for a set time. It is what separates this name from the one for shares that can be sold.' },

  { id: 'w3-rev-supports', use: 'drill', kind: 'reverse', outcome: 'supports', expect: 'hear',
    options: [
      { text: '"They’re mine on paper, but I can’t sell them for two years."', voice: 'hedge' },
      { text: '"Everything I have is in the business, and the bank holds the shares for the loan."', voice: 'supports' },
      { text: '"I’m insured for far more than any claim anyone could make."', voice: 'safe' },
      { text: '"The rate follows the bank’s, and they can ask for the money back."', voice: 'deleverage' }
    ],
    why: 'It describes a business that the person runs and that is most of what they have, with something missing round it: here, a loan with the shares as security.' },

  { id: 'w3-rev-insure', use: 'drill', kind: 'reverse', outcome: 'insure', expect: 'find',
    options: [
      { text: 'Several flats and a shop, all in the owner’s own name.', voice: 'entity' },
      { text: 'A policy limit next to a lawyer’s figure that is many times higher.', voice: 'insure' },
      { text: 'A rate fixed for fifteen years, and a bank that cannot ask for the money back.', voice: 'safe' },
      { text: 'A rule that stops the owner selling the shares for three years.', voice: 'hedge' }
    ],
    why: 'That detail is the gap between what the insurance pays and what {t:claim} could be, which is what separates this name from the one for how things are held.' },

  { id: 'w3-rev-entity', use: 'drill', kind: 'reverse', outcome: 'entity', expect: 'hear',
    options: [
      { text: '"My policy pays up to half a million, and a lawyer says it could be four million."', voice: 'insure' },
      { text: '"They’re all in my name: the flats, the shop and the house."', voice: 'entity' },
      { text: '"I could sell it tomorrow, but I’ve never wanted to."', voice: 'diversify' },
      { text: '"It’s fine. I’ve got three years in the bank and no loan against the firm."', voice: 'safe' }
    ],
    why: 'It says that everything is held in one name, so {t:claim} on one property could reach the rest.' },

  { id: 'w3-rev-deleverage', use: 'drill', kind: 'reverse', outcome: 'deleverage', expect: 'find',
    options: [
      { text: 'A company of its own for each flat.', voice: 'safe' },
      { text: 'A business the owner runs, with savings of two months.', voice: 'supports' },
      { text: 'A loan that the lender may demand back, or that is nearly the value of what it is secured on.', voice: 'deleverage' },
      { text: 'A quarter of a company’s shares that the family agreement lets the owner sell.', voice: 'diversify' }
    ],
    why: 'That detail is the lender’s power: to demand the money back, to ask for more, or to act on a loan that is large against what it is secured on.' },

  { id: 'w3-rev-safe', use: 'drill', kind: 'reverse', outcome: 'safe', expect: 'hear',
    options: [
      { text: '"I’m not allowed to sell for another two years."', voice: 'hedge' },
      { text: '"They could demand the loan back at any time."', voice: 'deleverage' },
      { text: '"I’ve got three years’ spending in the bank, the rest is spread, and the bank has no hold on my shares."', voice: 'safe' },
      { text: '"If someone sued, they could take every flat I have."', voice: 'entity' }
    ],
    why: 'It says what makes the one thing safe, in specific terms that can be checked. Nothing in it needs fixing.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'w3-c-demo', use: 'claim',
    text: '"Diversification is just protection against ignorance. I run this firm and I know it inside out, so I keep nearly everything I own in it. I have £15,000 in the bank, and the rest of my money is in a second firm like it."',
    ask: { type: 'option', step: 'S1', answer: 'ownrun' },
    fault: 'The claim treats knowing the firm as the whole of safety. Knowing it well helps in choosing it, and it does nothing about what comes from outside: a rival, a fire, a bad stretch for the whole trade. What the speaker describes is a business he runs that is most of what he owns, with £15,000 of savings and the rest in a firm that would suffer in the same bad year. At least one of {t:threesupports} is missing, and he says so himself.',
    corrected: 'I run this firm and I know it well. Nearly everything I own is in it, with £15,000 in the bank and the rest in a second firm like it. That is {a:S1.ownrun}. What to do about it is to build what is missing, not to say that I know the firm.' },

  { id: 'w3-c-house', use: 'claim',
    text: '"My house is my best investment. I put £40,000 down on £400,000, the loan is £360,000 at a rate that follows the bank’s, and it has only gone up. A house carries no risk."',
    ask: { type: 'option', step: 'S1', answer: 'riskyloan' },
    fault: 'The claim says how the house has done, which answers a different question from the one that matters here. £360,000 on a £400,000 house is 90% of its value, at a rate that follows the bank’s, so a fall of 10% in the price would leave the loan as large as the house, and a rise in the rate would make every payment harder. How well it has done says nothing about what the lender could do.',
    corrected: 'I owe £360,000 on a £400,000 house, which is 90% of its value, at a rate that follows the bank’s. That is {a:S1.riskyloan}. It may have been a good buy, and it is also a loan that could force a sale.' },

  { id: 'w3-c-locked', use: 'claim',
    text: '"Most of what I have is in my employer’s shares, £240,000 of £300,000, and they are locked up for two years. I can’t sell, so there is nothing I can do except wait and hope."',
    ask: { type: 'option', step: 'S1', answer: 'blocked' },
    fault: 'The claim treats a ban on selling as the end of the matter. A ban stops one remedy, the schedule of sales, and leaves another: limiting what can be lost while waiting, by a contract that sets a floor under the price, where the employer allows one. Waiting and hoping does nothing about 80% of what the speaker owns resting on one company for two years.',
    corrected: 'Most of what I have is in my employer’s shares, and I cannot sell them for two years. That is {a:S1.blocked}. I cannot sell, but I can find out whether I may buy a contract that sets a floor under the price and what it would cost, and write down the sales I will make the day the rule ends.' },

  { id: 'w3-c-more', use: 'claim',
    text: '"I run a timber yard worth £800,000 of my £1,150,000. I have £250,000 in funds, three years’ spending in the bank and no loan on the shares. But my friend says that is still too much in one place, so I am going to sell half the yard and pay an adviser to set up a structure, just in case."',
    ask: { type: 'option', step: 'S1', answer: 'madesafe' },
    fault: 'The claim says that too much in one place is a problem whatever stands round it. What the speaker describes is a business he runs with all of {t:threesupports} in place: funds spread over many companies, three years of spending in the bank, and no loan against the shares. Nothing is missing, so there is nothing to put right. Selling half would bring tax and fees and give up part of a business he runs, and the adviser’s structure would cost money every year, to answer a problem the case does not show.',
    corrected: 'I run a timber yard that is most of what I own, and I have all three supports in place. That is {a:S1.madesafe}, and there is nothing to fix. If my friend says otherwise, I ask what could go wrong that my three years of savings, my funds and my clean ownership do not already answer.' }
]);
