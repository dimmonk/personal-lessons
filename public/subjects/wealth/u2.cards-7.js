// Wealth Preservation, Unit Two, part three (first half): the same sum taken out every year from a pot that has shrunk, and its look-alike
// with the sound way of spending.

FC.cards('wealth', 'u2', [

  { id: 'meet-burnrate', kind: 'meet', outcome: 'burnrate',
    link: 'The last of the six is not about a charge or a tax bill. It is about the sum a person takes out to live on.',
    case: 'e-m-burn', mark: 'E1',
    strip: [
      'There is one person, Hugh, and one pot: £1,000,000 when he retired at 62.',
      'He decided to spend £50,000 a year, which was 5% of {t:pot}, and he still spends £50,000 a year.',
      'His pot has grown about 3% a year since, which is less than the 5% he takes out, so it has shrunk to about £800,000.',
      'The same £50,000 is now 6.25% of what is left.'
    ],
    explain: [
      'A sum taken to spend is not wrong: spending is what {t:pot} is for. What matters is the size of the sum against {t:pot}. At the start £50,000 was 5% of £1,000,000. Now it is 6.25% of £800,000. Nothing in Hugh’s life changed, but {t:pot} under the sum did.',
      'Watch what {t:pot} is doing. It earns about 3% a year, which is £24,000 on £800,000, and Hugh takes £50,000. So each year {t:pot} loses about £26,000. A smaller pot earns less the next year, and the sum is a bigger share of it again. The gap widens every year.',
      'The fix is to stop treating the sum as a fixed number of pounds and set it as a percentage instead: take a percentage of whatever {t:pot} is worth at the start of each year. Say 3.5%. On £1,000,000 that is £35,000. If {t:pot} falls 20% to £800,000, the same 3.5% is £28,000. The spending falls with {t:pot}, and the share stays the same. A fixed £35,000, on the other hand, would be 4.4% of £800,000.',
      'There is a price. The person has to be willing to spend a little less in a year when {t:pot} is smaller. That is what makes {t:pot} last. The 3.5% is an example, not a promise: the right share depends on age, country and plans.'
    ],
    feature: { step: 'E1', option: 'fixedsum' },
    name: 'The name for this is {o:burnrate}. It says what to do: take a percentage of {t:pot}, worked out again each year, and not a fixed number of pounds.' },

  { id: 'again-burnrate', kind: 'again', outcome: 'burnrate',
    link: 'Hugh’s case gave you what to point to: {needs:burnrate}. Here is a second case, where {t:pot} shrank for a different reason.',
    first: 'e-m-burn', second: 'e-a-burn', step: 'E1',
    instruction: 'Find what the two cases share. Ignore why {t:pot} shrank. Look at one thing only: the words that show the same sum still being taken from a smaller pot.',
    prompt: { kind: 'phrase', answer: 'has lived on £30,000 a year from her £600,000 since her husband died six years ago. She has also paid for a care-home deposit and a new roof out of the pot, which is now £450,000. She still takes £30,000 a year, which is now 6.7% of it' },
    shared: [
      'In Hugh’s case {t:pot} shrank because it earned less than he took. In Ayesha’s it shrank because she paid for a roof and a care-home deposit. In both, a sum was set when {t:pot} was bigger and has not changed, and it is now a bigger share of a smaller pot: 5% became 6.25%, and 5% became 6.7%.',
      'The reasons {t:pot} shrank differ, and neither is the point. What the two cases share is a fixed sum and a shrunk pot. That is what {o:burnrate} names.'
    ] },

  { id: 'portrait-burnrate', kind: 'portrait', outcome: 'burnrate',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:burnrate} in real life, where nobody marks the words for you.',
    typical: [
      'The sum was chosen once, often as a round number, and then never revisited: "we take £4,000 a month".',
      'By now {t:pot} has become smaller than it was when the sum was chosen. A fall in prices can do it, but so can a gift, a big bill or a loan that was not repaid. The reason does not matter. What matters is that the share has risen.',
      'The share has risen quietly. Nobody has done anything wrong in any one year, and each year’s withdrawal looks like last year’s.',
      'The person often does not know the share. Ask them to divide the yearly sum by what {t:pot} is worth now, and they are surprised.',
      'The risk is not that {t:pot} falls to nothing this year. It is that a larger share is taken from a smaller pot every year, so {t:pot} runs out sooner than planned.'
    ],
    not: 'Taking a large sum is not this name. A sum can be large and sound, if it is a percentage that is reset each year. Nor is a fall in prices this name: prices can fall without the sum being fixed. What the name needs is the fixed sum and the shrunk pot, and a fall in prices, where there is one, is only a reason {t:pot} shrank.',
    wild: ['"We\'ve always taken £4,000 a month."', '"I just take the same amount every year."', '"With this much, I can\'t run out."', '"It was 5% when we started."', '"We\'ll cut back if we have to."'],
    self: 'In your own life you meet it when you divide what you spend in a year by what your savings are worth today. If you have not done that sum lately, do it: the share may be larger than when you started.',
    ask: '"What share of {t:pot} is this sum today, and what share was it when I set it?"',
    act: [
      'First, divide this year’s sum by what {t:pot} is worth today. Write the share down, and write down the share it was when you set the sum.',
      'Second, choose a percentage you can live with. 3.5% to 4% is a common starting range in examples, not a promise; check it against your age and your country.',
      'Third, set a date each year, such as the first of January, to work out the share of what {t:pot} is worth that day.',
      'Fourth, decide how far spending may fall in a bad year, and what you would cut first.',
      'Fifth, write the share, the date and the cuts on one page, and keep it with your statements.'
    ] },

  { id: 'check-burnrate', kind: 'check', after: 'burnrate',
    case: 'e-c-burn',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show how the sum has changed against Felix’s pot? Tap them.',
           answer: 'He has never changed the figure. His pot is now £500,000, so the £28,000 is 5.6% of it' } },

  { id: 'look-burnrate-nocut', kind: 'lookalike', ledger: 'burnrate~nocut',
    link: 'You have now met a fixed sum that goes wrong. The sound way of spending was the last form of the name that says to leave it alone. They are easy to mix up, so here they are side by side.',
    cases: ['e-l-burn-a', 'e-l-burn-b'],
    instruction: 'Cora and her sister Dee started on the same £1,050,000 and the same 4%. Compare one thing: whether the sum is the same number of pounds as before, or worked out again.',
    prompt: { kind: 'which', option: 'E1.fixedsum', answer: 'e-l-burn-a' },
    difference: [
      'In Case A Cora fixed £42,000 when {t:pot} was £1,050,000 and has never changed it. Her pot is now £840,000, so £42,000 is 5%. The key’s answer is {a:E1.fixedsum}, and the case is {o:burnrate}.',
      'In Case B Dee works out 4% of what {t:pot} is worth every January. This year that is £33,600, and she cuts her holiday budget. The key’s answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The sisters started with the same sum and the same share. Today Cora takes £8,400 more than Dee from the same pot. Cora is taking 5% and Dee still takes 4%. Over the years, {t:pot} of the one who reset has more left.'
    ] }
]);
