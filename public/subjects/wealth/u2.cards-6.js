// Wealth Preservation, Unit Two, part three (first half): the same sum taken out every year from a pot that has shrunk, and its look-alike
// with the sound way of spending.

FC.cards('wealth', 'u2', [

  { id: 'meet-burnrate', kind: 'meet', outcome: 'burnrate',
    link: 'The last of the six is not about a charge or a tax bill. It is about the sum a person takes out to live on.',
    case: 'e-m-burn', mark: 'E1',
    strip: [
      'There is one person, Hugh, and one pot: $1,000,000 when he retired at 62.',
      'He decided to spend $50,000 a year, which was 5% of {t:pot}, and he still spends $50,000 a year.',
      'His pot has grown about 3% a year since, which is less than the 5% he takes out, so it has shrunk to about $800,000.',
      'The same $50,000 is now 6.25% of what is left.'
    ],
    explain: [
      'A sum taken to spend is not wrong: spending is what {t:pot} is for. What matters is the size of the sum against {t:pot}. At the start $50,000 was 5% of $1,000,000. Now it is 6.25% of $800,000. Nothing in Hugh’s life changed, but {t:pot} under the sum did.',
      'It also feeds itself: {t:pot} earns about 3% a year, which is $24,000 on $800,000, and Hugh takes $50,000, so each year it loses about $26,000. A smaller pot earns less the next year, and the sum is a bigger share of it again.',
      'The fix is to stop treating the sum as a fixed number of dollars and set it as a percentage of whatever {t:pot} is worth at the start of each year. Say 3.5%. On $1,000,000 that is $35,000. If {t:pot} falls 20% to $800,000, the same 3.5% is $28,000. The spending falls with {t:pot}, and the share stays the same. A fixed $35,000, on the other hand, would be 4.4% of $800,000.',
      'The price is spending a little less in a year when {t:pot} is smaller. That is what makes it last. The 3.5% is an example, not a promise: the right share depends on age, plans and other income, such as Social Security.'
    ],
    feature: { step: 'E1', option: 'fixedsum' },
    name: 'The name for this is {o:burnrate}.',
    act: 'Divide this year’s sum by what {t:pot} is worth today, and compare it with the share it was when you set it. Choose a percentage you can live with (3.5% to 4% is a common starting range in examples, not a promise), work it out again each January, and decide what you would cut first in a bad year.' },

  { id: 'check-burnrate', kind: 'check', after: 'burnrate',
    case: 'e-c-burn',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show how the sum has changed against Felix’s pot? Tap them.',
           answer: 'He has never changed the figure. His pot is now $500,000, so the $28,000 is 5.6% of it' } },

  { id: 'look-burnrate-nocut', kind: 'lookalike', ledger: 'burnrate~nocut',
    link: 'The sound way of spending is the last form of the name that says to leave it alone, and it is easy to mix up with a fixed sum. Here they are side by side.',
    cases: ['e-l-burn-a', 'e-l-burn-b'],
    instruction: 'Cora and her sister Dee started on the same $1,050,000 and the same 4%. Compare one thing: whether the sum is the same number of dollars as before, or worked out again.',
    prompt: { kind: 'which', option: 'E1.fixedsum', answer: 'e-l-burn-a' },
    difference: [
      'In Case A Cora fixed $42,000 when {t:pot} was $1,050,000 and has never changed it. Her pot is now $840,000, so $42,000 is 5%. The answer is {a:E1.fixedsum}, and the case is {o:burnrate}.',
      'In Case B Dee works out 4% of what {t:pot} is worth every January. This year that is $33,600, and she cuts her vacation budget. The answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The sisters started with the same sum and the same share. Today Cora takes $8,400 more than Dee from the same pot, and takes 5% where Dee still takes 4%.'
    ] }
]);
