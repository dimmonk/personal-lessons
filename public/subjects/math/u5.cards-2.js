// Basic Math, Unit Five, part two: the second kind (picking in order from one group), and the look-alike card that sets it beside the first.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  /* ---------- The second kind: picking in order from one group ---------- */
  { id: 'meet-perm', kind: 'meet', outcome: 'perm',
    link: 'The first kind gave every choice a list of its own. The second kind keeps the picks one after another, with one change: all the picks come out of the same group, so each pick takes something away from what is left.',
    case: 'm5-wd-medals', mark: 'C1',
    strip: [
      'There is one group to pick from: four friends, Ana, Ben, Cal and Dev.',
      'The picks are made one after another: first the gold medal, then the silver medal. The medals are different, so who gets which one matters.',
      'Whoever wins the gold medal cannot also win the silver, so the second pick has one fewer to choose from.',
      'The question asks in how many different ways the two medals can be given out, a count of complete results.'
    ],
    explain: [
      'What you are shown is a count of results, as in the first kind, but the choices are no longer separate lists. There is one group of four runners, and two picks come out of it. List the results by who gets gold. If Ana gets gold, the silver can go to Ben, Cal or Dev: 3 results. If Ben gets gold, the silver can go to Ana, Cal or Dev: 3 more. Cal and Dev as gold winners give 3 each. Four gold winners with 3 silver winners each is 4 × 3 = 12 different results.',
      'So the count is a product again, because each pick has some number of choices whatever came before. But the second number is 3, not 4. Ana cannot be both gold and silver, so the list for the silver medal is the group with the gold winner taken out. Each pick uses up one member of the group, and the counts fall by one each time: 4, then 3. With a third medal it would be 4 × 3 × 2.',
      'The order counts. Ana with gold and Ben with silver is a different result from Ben with gold and Ana with silver, because the medals are different. Both are among the 12. That is the second thing that decides this kind: a different order is a different result.',
      'Compare the first kind. There, picking a colour used up none of the styles, so the second list was as long as the first. Here, picking a gold winner uses up a runner, so the second list is one shorter. A list that gets shorter with each pick, and an order that counts, are what mark this kind.'
    ],
    feature: { step: 'C1', option: 'order' },
    name: 'A problem like this is {o:perm}. The name is for the list of picks itself: things taken one after another from one group, so that the same things in a different order make a different list.' },

  { id: 'again-perm', kind: 'again', outcome: 'perm',
    link: 'The race gave you what to point to: {needs:perm}. Here is a second problem with a different story, a manager picking staff to open and close a shop.',
    first: 'm5-wd-medals', second: 'm5-wd-opening', step: 'C1',
    instruction: 'Find what the two problems share. Ignore the story (a race, a shop) and ignore the numbers. Look at one thing only: which words show that the picks come one after another from the same group, and that who is picked for which job matters?',
    prompt: { kind: 'phrase', answer: 'picks one to open the shop in the morning and a different one to close it in the evening' },
    shared: [
      'Both problems have one group, four runners and six staff, and two picks made one after another from it. In both the picks are for different things, a gold medal and a silver one, opening and closing, so who is picked for which matters. And in both, someone who has been picked is not available again: the gold winner cannot win silver, and the one who opens is “a different one” from the one who closes.',
      'That is all you point to: one group, picks that each use someone up, and an order that counts. The stories differ. What the picks are like is the same.'
    ] },

  { id: 'portrait-perm', kind: 'portrait', outcome: 'perm',
    link: 'You know what to point to for {o:perm}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One group of different things or people: runners, staff, books, or digits that may not be used twice.',
      'Picks made one after another for places or jobs that differ from one another: first, second and third; chair, secretary and treasurer; left, middle and right.',
      'A pick uses up what it takes, so each pick leaves one fewer to choose from: 8, then 7, then 6.',
      'The question asks how many different results there are, and the same things in a different order count as different results.',
      'The working is a product of counts that fall by one each time: 8 × 7 × 6 for three medals among 8 runners. When every member of the group is placed, the product runs all the way down to 1: 6 × 5 × 4 × 3 × 2 × 1 for six books in a row.'
    ],
    not: [
      'One group is not enough. If the same things in a different order count as the same result, as with a team of people who all do the same job, it is a different kind, which you will meet next.',
      'And picks one after another are not enough either. If the same thing can be picked again, so that each pick has the full list, it is the first kind.'
    ],
    wild: ['"In how many ways can they finish?"', '"Gold, silver and bronze."', '"How many different orders?"', '"No one can hold two jobs."'],
    self: 'In your own life you meet this when you give out places or prizes, when you fix the order of speakers, interviews or songs, when you line people up, and when you work out how many codes there are if no digit may be used twice.',
    ask: '"Is there one group to pick from, do the picks come one after another with each pick taking someone out, and does a different order count as a different result?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-perm', kind: 'check', after: 'perm',
    case: 'm5-wd-ferry',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that the picks come one after another from one group, and that who goes first matters? Tap them.',
           answer: 'The first to board takes the window seat and the second takes the aisle seat' } },

  { id: 'check-perm-last', kind: 'check', after: 'perm', case: 'm5-ck-pe-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-perm-whole', kind: 'check', after: 'perm', case: 'm5-ck-pe-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: separate lists, or one group that gets used up ---------- */
  { id: 'look-multprin-perm', kind: 'lookalike', ledger: 'multprin~perm',
    link: 'The first and second kinds both multiply one count for each choice, and both can be about the same people and the same jobs. This card puts them side by side, with one sentence changed.',
    cases: ['m5-la-roles-mp', 'm5-la-roles-pe'],
    instruction: 'Both problems are about the same club of 6 members and the same three jobs. Compare one thing: can the same member hold more than one job?',
    prompt: { kind: 'which', option: 'C1.order', answer: 'm5-la-roles-pe' },
    difference: [
      'In Case A the same member may hold more than one job. So the list for each job is all 6 members, whatever was decided for the other jobs. There are three separate choices, each from a full list of its own: the answer is {a:C1.lists}, and the count is 6 × 6 × 6 = 216.',
      'In Case B no member may hold more than one job. A member given the first job is out for the other two, so the second job is picked from 5 members and the third from 4. That is one group, with each pick using someone up: the answer is {a:C1.order}, and the count is 6 × 5 × 4 = 120.',
      'Both multiply one count for each job, and both count the order of the jobs. What differs is whether a pick uses someone up. If the lists stay full, the counts stay the same. If each pick takes someone out, the counts fall by one each time. The numbers show it too: 216 is more than 120, because with repeats allowed there are more ways to fill the jobs.'
    ] }
]);
