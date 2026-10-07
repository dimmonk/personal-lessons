// Basic Math, Unit Five, part two: the second kind (picking in order from one group), and the look-alike card that sets it beside the first.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-perm', kind: 'meet', outcome: 'perm',
    link: 'Now the picks come out of one group, so each pick takes someone out.',
    case: 'm5-wd-medals', mark: 'C1',
    explain: [
      'Sort the results by who wins gold. If Ana wins gold, silver goes to Ben, Cal or Dev: 3 results. Ben, Cal and Dev winning gold give 3 each. That is 4 gold winners with 3 silver winners each: 4 × 3 = 12.',
      'The second number is 3, not 4, because the gold winner cannot also win silver. Each pick takes someone out of the group, so the counts fall by one each time: 4, then 3. With a third medal it would be 4 × 3 × 2. And the order counts: Ana with gold and Ben with silver is not the same as Ben with gold and Ana with silver.'
    ],
    spot: [
      { do: 'Find the one group everyone is picked from: Ana, Ben, Cal and Dev.', why: 'There is a single list, not one list for each pick.' },
      { do: 'Check the picks are different jobs, made one after another: gold, then silver.', why: 'Different jobs are what make the order matter.' },
      { do: 'Check each pick uses someone up: the gold winner cannot win silver.', why: 'The list gets one shorter each time.' }
    ],
    feature: { step: 'C1', option: 'order' },
    name: 'This is {o:perm}. Multiply counts that fall by one each time, and every different order is its own result.' },

  { id: 'check-perm', kind: 'check', after: 'perm',
    case: 'm5-wd-ferry',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that who goes first matters? Tap them.',
           answer: 'The first to board takes the window seat and the second takes the aisle seat' } },

  { id: 'look-multprin-perm', kind: 'lookalike', ledger: 'multprin~perm',
    link: 'Both multiply, and both can be about the same club and the same jobs. One sentence changes the kind.',
    cases: ['m5-la-roles-mp', 'm5-la-roles-pe'],
    instruction: 'Both problems are about the same club of 6 members and the same three jobs. Compare one thing: can one member hold more than one job?',
    prompt: { kind: 'which', option: 'C1.order', answer: 'm5-la-roles-pe' },
    difference: [
      'In A, one member can hold several jobs, so every job is picked from all 6 members. These are three separate choices from full lists: 6 × 6 × 6 = 216. That is {o:multprin}.',
      'In B, no member can hold two jobs. The first job takes someone out, so the second is picked from 5 and the third from 4: 6 × 5 × 4 = 120. That is {o:perm}.'
    ] }
]);
