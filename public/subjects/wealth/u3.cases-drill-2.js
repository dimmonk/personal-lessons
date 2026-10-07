// Wealth Preservation, Unit Three: the faulty claims of the last stage. A claim is something a person might say that uses one of the unit's names wrongly, or reasons in one of its ways. The fault is shown after the learner commits, and the claim put right is always the last thing shown.
// Every story carries its full route (the first question, then this unit's one question). cues[STEP] is the exact phrase in the text
// that decides that step; segments are the tappable pieces for "tap the words" prompts, and note is shown if that piece is tapped in error.

FC.cases('wealth', 'u3', [

  /* ---------- Faulty claims: the first is worked for the learner ---------- */
  { id: 'w3-c-demo', use: 'claim',
    text: '"Diversification is just protection against ignorance. I run this firm and I know it inside out, so I keep nearly everything I own in it. I have $15,000 in the bank, and the rest of my money is in a second firm like it."',
    ask: { type: 'option', step: 'S1', answer: 'ownrun' },
    fault: 'Knowing the firm well does nothing about a rival, a fire or a bad stretch for the whole trade. He has $15,000 in the bank and the rest in a firm like it, so at least one of {t:threesupports} is missing, and he says so himself.',
    corrected: 'I run this firm and I know it well. Nearly everything I own is in it, with $15,000 in the bank and the rest in a second firm like it. That is {a:S1.ownrun}, and what to do is build what is missing, not say that I know the firm.' },

  { id: 'w3-c-more', use: 'claim',
    text: '"I run a lumberyard worth $800,000 of my $1,150,000. I have $250,000 in funds, three years’ spending in the bank and no loan on the shares. But my friend says that is still too much in one place, so I am going to sell half the yard and pay an adviser to set up a structure, just in case."',
    ask: { type: 'option', step: 'S1', answer: 'madesafe' },
    fault: 'He has all of {t:threesupports}: funds spread over many companies, three years of spending in the bank, and no loan against the shares. Nothing is missing, so selling half and paying an adviser every year would cost him tax, fees and part of his business to fix a problem he does not have.',
    corrected: 'I run a lumberyard that is most of what I own, and I have all three safety nets in place. That is {a:S1.madesafe}, and there is nothing to fix. If my friend says otherwise, I ask what could go wrong that my three years of savings, my funds and my clean ownership do not already cover.' },

  { id: 'w3-c-house', use: 'claim',
    text: '"My house is my best investment. I put $40,000 down on $400,000, the loan is $360,000 at a rate that follows the bank’s, and it has only gone up. A house carries no risk."',
    ask: { type: 'option', step: 'S1', answer: 'riskyloan' },
    fault: '“It has only gone up” says how the house did, not what the lender could do. $360,000 on a $400,000 house is 90% of its value at a rate that follows the bank’s, so a 10% fall in the price would leave the loan as big as the house, and a rise in the rate would make every payment harder.',
    corrected: 'I owe $360,000 on a $400,000 house, which is 90% of its value, at a rate that follows the bank’s. That is {a:S1.riskyloan}. It may have been a good buy, and it is also a loan that could force a sale.' }
]);
