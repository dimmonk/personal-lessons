// Basic Math, Unit Five, part two: the second kind (picking in order from one group), and the look-alike card that sets it beside the first.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-perm', kind: 'meet', outcome: 'perm',
    link: 'The first kind gave every choice a list of its own. The second kind keeps the picks one after another, with one change: all the picks come out of the same group, so each pick takes something away from what is left.',
    case: 'm5-wd-medals', mark: 'C1',
    strip: [
      'There is one group to pick from: four friends, Ana, Ben, Cal and Dev.',
      'The picks are made one after another: first the gold medal, then the silver medal. The medals are different, so who gets which one matters.',
      'Whoever wins the gold medal cannot also win the silver, so the second pick has one fewer to choose from.'
    ],
    explain: [
      'List the results by who gets gold. If Ana gets gold, the silver can go to Ben, Cal or Dev: 3 results. If Ben gets gold, the silver can go to Ana, Cal or Dev: 3 more. Cal and Dev as gold winners give 3 each. Four gold winners with 3 silver winners each is 4 × 3 = 12 different results.',
      'So the count is a product again, but the second number is 3, not 4. Ana cannot be both gold and silver, so the list for the silver medal is the group with the gold winner taken out. Each pick uses up one member of the group, and the counts fall by one each time: 4, then 3. With a third medal it would be 4 × 3 × 2. In the first kind, picking a color used up none of the styles, so the second list was as long as the first.',
      'The order counts. Ana with gold and Ben with silver is a different result from Ben with gold and Ana with silver, because the medals are different. Both are among the 12.'
    ],
    feature: { step: 'C1', option: 'order' },
    name: 'A problem like this is {o:perm}. The name is for the list of picks itself: things taken one after another from one group, so that the same things in a different order make a different list.' },

  { id: 'check-perm', kind: 'check', after: 'perm',
    case: 'm5-wd-ferry',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that the picks come one after another from one group, and that who goes first matters? Tap them.',
           answer: 'The first to board takes the window seat and the second takes the aisle seat' } },

  { id: 'look-multprin-perm', kind: 'lookalike', ledger: 'multprin~perm',
    link: 'The first and second kinds both multiply one count for each choice, and both can be about the same people and the same jobs. This card puts them side by side, with one sentence changed.',
    cases: ['m5-la-roles-mp', 'm5-la-roles-pe'],
    instruction: 'Both problems are about the same club of 6 members and the same three jobs. Compare one thing: can the same member hold more than one job?',
    prompt: { kind: 'which', option: 'C1.order', answer: 'm5-la-roles-pe' },
    difference: [
      'In Case A the same member may hold more than one job. So the list for each job is all 6 members, whatever was decided for the other jobs. There are three separate choices, each from a full list of its own: the answer is {a:C1.lists}, and the count is 6 × 6 × 6 = 216.',
      'In Case B no member may hold more than one job. A member given the first job is out for the other two, so the second job is picked from 5 members and the third from 4. That is one group, with each pick using someone up: the answer is {a:C1.order}, and the count is 6 × 5 × 4 = 120.'
    ] }
]);
