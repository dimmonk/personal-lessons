// Basic Math, Unit Five, part three: the third kind (picking a group, in any order), and the look-alike card that sets it beside the second.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-comb', kind: 'meet', outcome: 'comb',
    link: 'The second kind counted every order separately. The third kind starts from exactly the same picks, one group with each pick using someone up, but the order no longer counts, and the count has to be brought down to match.',
    case: 'm5-wd-ice', mark: 'C1',
    strip: [
      'There is one group to pick from: four friends, Ana, Ben, Cal and Dev.',
      'Two are picked, and both do the same job: fetching the ice. Nobody is first or second.',
      'Each pick still uses someone up: once Ana is picked, only Ben, Cal and Dev are left for the other place.'
    ],
    explain: [
      'Both friends fetch the ice, so the two picks are not for different things. List the pairs: Ana and Ben, Ana and Cal, Ana and Dev, Ben and Cal, Ben and Dev, Cal and Dev. That is 6 different pairs.',
      'Compare the race. The same four friends and two picks gave 12 results there, because gold for Ana and silver for Ben was a different result from gold for Ben and silver for Ana. Here “Ana and Ben” and “Ben and Ana” are the same pair, so every pair was counted twice in the 12: 12 ÷ 2 = 6.',
      'So this kind is counted in two steps. First count the picks as if the order mattered, as in the second kind: 4 × 3 = 12. Then divide by the number of orders one pair can be put in, 2 × 1 = 2, so that each pair is counted once.'
    ],
    feature: { step: 'C1', option: 'group' },
    name: 'A problem like this is {o:comb}. The name is for the group that is picked, whatever order its members were picked in: the same people in a different order are the same group.' },

  { id: 'check-comb', kind: 'check', after: 'comb',
    case: 'm5-wd-cheese',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that the order of the picks does not matter? Tap them.',
           answer: 'The box is the same whichever cheese goes in first' } },

  { id: 'look-perm-comb', kind: 'lookalike', ledger: 'perm~comb',
    link: 'The second and third kinds both start from one group with each pick using someone up, and they have the same first count. This card puts them side by side, with the same group and the same 3 picks.',
    cases: ['m5-la-window-pe', 'm5-la-window-co'],
    instruction: 'Both problems are about the same café owner, the same 6 pastries and the same 3 picks. Compare one thing: does the order the pastries go in matter?',
    prompt: { kind: 'which', option: 'C1.group', answer: 'm5-la-window-co' },
    difference: [
      'In Case A the pastries go in a row, from left to right, so a row with the same pastries in a different order is a different row. The order counts, and the answer is {a:C1.order}. The count is 6 × 5 × 4 = 120.',
      'In Case B the pastries go in a box, and the box is the same whichever pastry goes in first. The same three pastries in any order are one box, and the answer is {a:C1.group}. The count in order is the same 120, and each box is in it once for every order its three pastries can be put in, 3 × 2 × 1 = 6, so the answer is 120 ÷ 6 = 20.'
    ] }
]);
