// Basic Math, Unit Five, part three: the third kind (picking a group, in any order), and the look-alike card that sets it beside the second.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-comb', kind: 'meet', outcome: 'comb',
    link: 'The same picks from the same group, but now the order does not matter.',
    case: 'm5-wd-ice', mark: 'C1',
    explain: [
      'List the pairs: Ana and Ben, Ana and Cal, Ana and Dev, Ben and Cal, Ben and Dev, Cal and Dev. That is 6 pairs.',
      'Compare the race. The same four friends and two picks gave 12 results there, because gold for Ana and silver for Ben is not gold for Ben and silver for Ana. Here “Ana and Ben” and “Ben and Ana” are one pair, so the 12 counted every pair twice: 12 ÷ 2 = 6.',
      'So you count in two steps. First count the picks in order: 4 × 3 = 12. Then divide by the number of orders one pair can come in, 2, so each pair counts once.'
    ],
    spot: [
      { do: 'Find the one group: Ana, Ben, Cal and Dev.', why: 'As in the race, the picks come out of a single group.' },
      { do: 'Check the picks all do the same job: both fetch the ice.', why: 'Nobody is first or second.' },
      { do: 'Ask whether the same people in another order are the same result: Ana and Ben is Ben and Ana.', why: 'If they are, you have to divide the extra orders away.' }
    ],
    feature: { step: 'C1', option: 'group' },
    name: 'This is {o:comb}. Count the picks in order, then divide by the number of orders one group can come in.' },

  { id: 'check-comb', kind: 'check', after: 'comb',
    case: 'm5-wd-cheese',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that the order does not matter? Tap them.',
           answer: 'The box is the same whichever cheese goes in first' } },

  { id: 'look-perm-comb', kind: 'lookalike', ledger: 'perm~comb',
    link: 'Both pick from one group and start from the same count. The test is whether the order counts.',
    cases: ['m5-la-window-pe', 'm5-la-window-co'],
    instruction: 'Both problems are about the same café owner, the same 6 pastries and the same 3 picks. Compare one thing: does the order the pastries go in matter?',
    prompt: { kind: 'which', option: 'C1.group', answer: 'm5-la-window-co' },
    difference: [
      'In A the pastries go in a row, left to right, so the same pastries in a different order are a different row. The order counts: 6 × 5 × 4 = 120. That is {o:perm}.',
      'In B the pastries go in a box, and the box is the same whichever goes in first. Each box is in the 120 once for every order its three pastries can come in, 3 × 2 × 1 = 6, so 120 ÷ 6 = 20. That is {o:comb}.'
    ] }
]);
