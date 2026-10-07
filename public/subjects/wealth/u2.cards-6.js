// Wealth Preservation, Unit Two, part three (first half): the same sum taken out every year from a pot that has shrunk, and its look-alike
// with the sound way of spending.

FC.cards('wealth', 'u2', [

  { id: 'meet-burnrate', kind: 'meet', outcome: 'burnrate',
    link: 'The last one is not a fee or a tax bill. It is the sum you take out to live on.',
    case: 'e-m-burn', mark: 'E1',
    explain: [
      'Spending is what savings are for, so the sum is not wrong. What matters is its size against his pot. When Hugh retired, $50,000 was 5% of $1,000,000. Now his pot is about $800,000, so the same $50,000 is 6.25%. It feeds itself: his pot earns about $24,000 a year, Hugh takes $50,000, and a smaller pot earns even less next year.',
      'The fix is to set the sum as a percentage of what {t:pot} is worth at the start of each year, not a number of dollars. Say 3.5%: that is $35,000 on $1,000,000, and $28,000 if it falls to $800,000. The spending drops when your pot does, and that is what makes it last. The 3.5% is an example, not a promise: the right share depends on your age, your plans and other income such as Social Security.'
    ],
    spot: [
      { do: 'Find the sum taken out each year: Hugh takes $50,000.', why: 'Everything else is measured against it.' },
      { do: 'Check whether it has ever been reset: he still takes $50,000, the same as the year he retired.', why: 'A sum set in dollars never follows his pot.' },
      { do: 'Divide it by what his pot is worth today: $50,000 ÷ $800,000 is 6.25%.', why: 'That is the share you are really taking now.' },
      { do: 'Compare it with the share when you set it: 5% then, 6.25% now.', why: 'A bigger share of a smaller pot is what drains it.' }
    ],
    feature: { step: 'E1', option: 'fixedsum' },
    name: 'This is {o:burnrate}. Set the sum as a percentage of your pot, and work it out again each year.',
    act: [
      { do: 'Choose a percentage you can live on.', why: 'Examples often start between 3.5% and 4%, which is not a promise.' },
      { do: 'Work it out again each January from what your pot is worth that day.', why: 'The sum then rises and falls with your pot.' },
      { do: 'Decide now what you would cut first in a bad year.', why: 'A plan made before the bad year is easier to keep.' }
    ] },

  { id: 'check-burnrate', kind: 'check', after: 'burnrate',
    case: 'e-c-burn',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show that Felix’s sum is now a bigger share of his pot? Tap them.',
           answer: 'He has never changed the figure. His pot is now $500,000, so the $28,000 is 5.6% of it' } },

  { id: 'look-burnrate-nocut', kind: 'lookalike', ledger: 'burnrate~nocut',
    link: 'Two people can start with the same pot and the same spending. What matters is whether the sum is ever reset.',
    cases: ['e-l-burn-a', 'e-l-burn-b'],
    instruction: 'Cora and her sister Dee started with the same $1,050,000 and the same 4%. Compare one thing: whether the sum is the same number of dollars as before, or worked out again.',
    prompt: { kind: 'which', option: 'E1.fixedsum', answer: 'e-l-burn-a' },
    difference: [
      'In Story A, Cora fixed $42,000 when her pot was $1,050,000 and has never changed it. Her pot is now $840,000, so $42,000 is 5%. The answer is {a:E1.fixedsum}, so this is {o:burnrate}.',
      'In Story B, Dee works out 4% of what her pot is worth every January. This year that is $33,600, and she cuts her vacation budget. The answer is {a:E1.nomore}, so this is {o:nocut}.',
      'The sisters started with the same sum and the same share. Today Cora takes $8,400 more than Dee from the same pot, and takes 5% where Dee still takes 4%.'
    ] }
]);
