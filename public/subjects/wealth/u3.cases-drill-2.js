// Wealth Preservation, Unit Three: the faulty claims of the last stage. A claim is something a person might say that uses one of the unit's names wrongly, or reasons in one of its ways. The fault is shown after the learner commits, and the claim put right is always the last thing shown.
// Every case carries its full route (the first question, then this unit's one question). cues[STEP] is the exact phrase in the text
// that decides that step; segments are the tappable pieces for "tap the words" prompts, and note is shown if that piece is tapped in error.

FC.cases('wealth', 'u3', [

  /* ---------- Faulty claims: the first is worked for the learner ---------- */
  { id: 'w3-c-demo', use: 'claim',
    text: '"Diversification is just protection against ignorance. I run this firm and I know it inside out, so I keep nearly everything I own in it. I have $15,000 in the bank, and the rest of my money is in a second firm like it."',
    ask: { type: 'option', step: 'S1', answer: 'ownrun' },
    fault: 'The claim treats knowing the firm as the whole of safety. Knowing it well helps in choosing it, and it does nothing about what comes from outside: a rival, a fire, a bad stretch for the whole trade. What the speaker describes is a business he runs that is most of what he owns, with $15,000 of savings and the rest in a firm that would suffer in the same bad year. At least one of {t:threesupports} is missing, and he says so himself.',
    corrected: 'I run this firm and I know it well. Nearly everything I own is in it, with $15,000 in the bank and the rest in a second firm like it. That is {a:S1.ownrun}. What to do about it is to build what is missing, not to say that I know the firm.' },

  { id: 'w3-c-more', use: 'claim',
    text: '"I run a lumberyard worth $800,000 of my $1,150,000. I have $250,000 in funds, three years’ spending in the bank and no loan on the shares. But my friend says that is still too much in one place, so I am going to sell half the yard and pay an adviser to set up a structure, just in case."',
    ask: { type: 'option', step: 'S1', answer: 'madesafe' },
    fault: 'The claim says that too much in one place is a problem whatever stands round it. What the speaker describes is a business he runs with all of {t:threesupports} in place: funds spread over many companies, three years of spending in the bank, and no loan against the shares. Nothing is missing, so there is nothing to put right. Selling half would bring tax and fees and give up part of a business he runs, and the adviser’s structure would cost money every year, to answer a problem the case does not show.',
    corrected: 'I run a lumberyard that is most of what I own, and I have all three supports in place. That is {a:S1.madesafe}, and there is nothing to fix. If my friend says otherwise, I ask what could go wrong that my three years of savings, my funds and my clean ownership do not already answer.' },

  { id: 'w3-c-house', use: 'claim',
    text: '"My house is my best investment. I put $40,000 down on $400,000, the loan is $360,000 at a rate that follows the bank’s, and it has only gone up. A house carries no risk."',
    ask: { type: 'option', step: 'S1', answer: 'riskyloan' },
    fault: 'The claim says how the house has done, which answers a different question from the one that matters here. $360,000 on a $400,000 house is 90% of its value, at a rate that follows the bank’s, so a fall of 10% in the price would leave the loan as large as the house, and a rise in the rate would make every payment harder. How well it has done says nothing about what the lender could do.',
    corrected: 'I owe $360,000 on a $400,000 house, which is 90% of its value, at a rate that follows the bank’s. That is {a:S1.riskyloan}. It may have been a good buy, and it is also a loan that could force a sale.' }
]);
