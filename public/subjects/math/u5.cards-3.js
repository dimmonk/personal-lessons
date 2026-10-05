// Basic Math, Unit Five, part three: the third kind (picking a group, in any order), the two look-alike cards that set it beside the
// first and the second kinds, and the wrong idea that the name of a lock tells you the kind.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  /* ---------- The third kind: picking a group, in any order ---------- */
  { id: 'meet-comb', kind: 'meet', outcome: 'comb',
    link: 'The second kind counted every order separately. The third kind starts from exactly the same picks, one group with each pick using someone up, but the order no longer counts, and the count has to be brought down to match.',
    case: 'm5-wd-ice', mark: 'C1',
    strip: [
      'There is one group to pick from: four friends, Ana, Ben, Cal and Dev.',
      'Two are picked, and both do the same job: fetching the ice. Nobody is first or second.',
      'Each pick still uses someone up: once Ana is picked, only Ben, Cal and Dev are left for the other place.',
      'The question asks in how many different ways the pair can be picked, a count of complete results.'
    ],
    explain: [
      'What you are shown is the same group of four friends as in the race, with two picks, but the two picks are not for different things. Both friends fetch the ice. List the pairs: Ana and Ben, Ana and Cal, Ana and Dev, Ben and Cal, Ben and Dev, Cal and Dev. That is 6 different pairs.',
      'Compare the race. There the same four friends and two picks gave 12 results, because gold for Ana and silver for Ben was a different result from gold for Ben and silver for Ana. Here “Ana and Ben” and “Ben and Ana” are the same pair, so every pair was counted twice in the 12: 12 ÷ 2 = 6.',
      'That is how this kind is counted. First count the picks as if the order mattered, which is the second kind: 4 × 3 = 12. Then notice that each pair has been counted once for every order its members can be put in, and 2 members can be put in order in 2 × 1 = 2 ways. Dividing the count in order by that number leaves each pair counted once.',
      'So two things decide this kind, and one of them is the opposite of the second kind. Each pick still uses someone up, as in the second kind. But the same people in a different order are one result, so the count in order has to be divided down.'
    ],
    feature: { step: 'C1', option: 'group' },
    name: 'A problem like this is {o:comb}. The name is for the group that is picked, whatever order its members were picked in: the same people in a different order are the same group.' },

  { id: 'again-comb', kind: 'again', outcome: 'comb',
    link: 'The picnic gave you what to point to: {needs:comb}. Here is a second problem with a different story, teachers picked to go on a school trip.',
    first: 'm5-wd-ice', second: 'm5-wd-chaperones', step: 'C1',
    instruction: 'Find what the two problems share. Ignore the story (a picnic, a school trip) and ignore the numbers. Look at one thing only: which words show that the people picked all have the same part, so that the order does not matter?',
    prompt: { kind: 'phrase', answer: 'Both do the same job on the trip' },
    shared: [
      'Both problems have one group, four friends and five teachers, and a smaller group picked from it. In both, everyone who is picked has the same part, fetching ice and going on the trip, so nobody is first or second, and the same people in a different order are the same pair.',
      'That is all you point to: one group, picks that each use someone up, and an order that does not count. The stories differ. What the picked group is like is the same.'
    ] },

  { id: 'portrait-comb', kind: 'portrait', outcome: 'comb',
    link: 'You know what to point to for {o:comb}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One group of different things or people: volunteers, flavours, books, shares, cards.',
      'A smaller group of a stated size is picked, and everyone in it has the same part: a team, a committee, a box, a hand of cards.',
      'Each pick uses up what it takes, so the picks come from 9, then 8, then 7, then 6, as in the second kind.',
      'The question asks how many different groups there are, and the same members in any order are one group.',
      'The working is two counts and a division: the count in order, 9 × 8 × 7 × 6 = 3,024, divided by the number of orders one group can be put in, 4 × 3 × 2 × 1 = 24, which gives 126.'
    ],
    not: [
      'One group and picks that use someone up are not enough. If the problem gives different places or jobs, such as first and second, or chair and secretary, a different order is a different result, and it is the second kind: the division is left out.',
      'And a group that is picked is not the same as a set of separate choices. If each choice has a full list of its own, such as a size and a topping, it is the first kind.'
    ],
    wild: ['"How many different teams could we pick?"', '"In any order."', '"It makes no difference who goes first."', '"How many different hands?"'],
    self: 'In your own life you meet this when you pick a team, a committee or a jury from a larger group, when you choose a few items from a menu or a shelf to take away, when you are dealt a hand of cards, and when you wonder how many tickets cover every set of numbers in a draw.',
    ask: '"Is a smaller group picked from one larger group, and do the people or things in it all have the same part, so that the same ones in any order are one group?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-comb', kind: 'check', after: 'comb',
    case: 'm5-wd-cheese',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that the order of the picks does not matter? Tap them.',
           answer: 'The box is the same whichever cheese goes in first' } },

  { id: 'check-comb-last', kind: 'check', after: 'comb', case: 'm5-ck-co-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-comb-whole', kind: 'check', after: 'comb', case: 'm5-ck-co-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pairs: does the order count, and one group or separate lists ---------- */
  { id: 'look-perm-comb', kind: 'lookalike', ledger: 'perm~comb',
    link: 'The second and third kinds both start from one group with each pick using someone up, and they have the same first count. This card puts them side by side, with the same group and the same 3 picks.',
    cases: ['m5-la-window-pe', 'm5-la-window-co'],
    instruction: 'Both problems are about the same café owner, the same 6 pastries and the same 3 picks. Compare one thing: does the order the pastries go in matter?',
    prompt: { kind: 'which', option: 'C1.group', answer: 'm5-la-window-co' },
    difference: [
      'In Case A the pastries go in a row, from left to right, so a row with the same pastries in a different order is a different row. The order counts, and the key’s answer is {a:C1.order}. The count is 6 × 5 × 4 = 120.',
      'In Case B the pastries go in a box, and the box is the same whichever pastry goes in first. The same three pastries in any order are one box, and the key’s answer is {a:C1.group}. The count in order is the same 120, and each box is in it once for every order its three pastries can be put in, 3 × 2 × 1 = 6, so the answer is 120 ÷ 6 = 20.',
      'Both start from the same 6 × 5 × 4 = 120. The second kind stops there, and the third goes on and divides. The numbers show how the two fit: each of the 20 boxes can be put in a row in 6 different orders, and 20 × 6 = 120 rows.'
    ] },

  { id: 'look-multprin-comb', kind: 'lookalike', ledger: 'multprin~comb',
    link: 'The first and third kinds can both be about a stall with 6 flavours. This card puts them side by side, with the same stall and the same 6 flavours.',
    cases: ['m5-la-cones-mp', 'm5-la-cones-co'],
    instruction: 'Both problems are about the same stall and the same 6 flavours. Compare one thing: does the customer pick one thing from each of two separate lists, or several things from one list?',
    prompt: { kind: 'which', option: 'C1.group', answer: 'm5-la-cones-co' },
    difference: [
      'In Case A the customer picks one flavour and one cone. There are two separate lists, 6 flavours and 3 cones, and picking a flavour uses up no cone. Each choice has a list of its own: the key’s answer is {a:C1.lists}, and the count is 6 × 3 = 18.',
      'In Case B the customer picks 2 different flavours, both from the one list of 6, in either order. The second flavour comes from the 5 that are left, and the same two flavours in the other order are the same tub. That is one group with each pick using something up, and with an order that does not count: the key’s answer is {a:C1.group}. The count in order is 6 × 5 = 30, and each tub is counted twice, 2 × 1 = 2, so the answer is 30 ÷ 2 = 15.',
      'Both are about 6 flavours, and both multiply. What differs is whether the picks come from separate lists or from one group. Separate lists keep their full length however many picks are made, and one group gets shorter with each pick.'
    ] },

  /* ---------- A wrong idea: the name on the lock ---------- */
  { id: 'refute-lock', kind: 'refute', about: 'multprin',
    h: 'A wrong idea: the name on the lock tells you the kind',
    link: 'Everyday words for the third kind turn up in places where the third kind is not what is being counted. The best known is a lock.',
    idea: '"A combination lock is called a combination lock, so counting its codes is counting combinations."',
    verdict: 'This is wrong.',
    right: [
      'A bike lock with 3 rings, each marked 0 to 9, is called a combination lock, but look at what its code is. Each ring is a separate choice from the same full list of 10 digits. Turning one ring uses up none of the digits on the other rings, and the same digit can be on every ring. The order of the rings matters: 3, 5, 1 is a different code from 1, 5, 3.',
      'Those are the marks of {o:multprin}, not of {o:comb}: three separate choices, each from its own full list, which gives 10 × 10 × 10 = 1,000 codes. If you counted the lock as picking a group of 3 different digits from the 10, in any order, you would get 120, which is far fewer than the 1,000 codes it really has.',
      'So the name tells you what people call the lock. It does not tell you what the problem asks. Put the key’s question to the words of the problem: {q:C1}'
    ],
    testedBy: ['m5-dr-mp-3'] }
]);
