// Statistical Claims, Unit Three, part two (second half): the fourth name, everyone counted but only a handful, and its look-alikes
// with the third name and with the claim that holds.

FC.cards('stats', 'u3', [

  /* ---------- Too few to trust ---------- */
  { id: 'meet-smalln', kind: 'meet', outcome: 'smalln',
    link: 'The first three ways were about who got into the figure. The fourth is about how many: everyone was counted, nobody was left out, and there are so few that luck moves the figure.',
    case: 'cn-school-ranking', mark: 'A1',
    strip: [
      'There are two figures: Fenwick Elementary, 9 of its 10 sixth graders at the top reading level (90 in every 100); Dalton Elementary, 150 of 200 (75 in every 100).',
      'Nobody was left out: every sixth grader at each school is counted.',
      'The top figure comes from only 10 children.',
      'The newspaper reads the highest figure as showing the best school.'
    ],
    explain: [
      'The sums are right and nobody is missing. 9 out of 10 is 90 in every 100, and 150 out of 200 is 75 in every 100. What is wrong is how few children the top figure rests on. When there are only 10 in a year, one child is one tenth of the whole, which is 10 points of the percentage.',
      'Count what one child more or fewer does. At Fenwick, if one more child had missed the top level it would be 8 of 10, which is 80 in every 100. If the one who missed it had made it, it would be 10 of 10, which is 100 in every 100. Ten children can swing the figure by 20 points in an ordinary year, from one class to the next. At Dalton, one child more or fewer is 1 out of 200, which is half a point: 149 of 200 is 74.5, and 151 of 200 is 75.5. A figure from 200 children hardly moves, and a figure from 10 jumps.',
      'That is why the smallest groups crowd both ends of any ranking. Their figures swing the most, so the highest and the lowest are very often the smallest. A school that is first this year because a few strong readers happened to be in that year may be near the bottom next year, and the newspaper has read the swing as quality.',
      'A handful does not have to mean 10. What counts is how far one or two more or fewer move the figure, and whether the claim reads a high or low figure as meaning something. This is not the same as the third way: nobody here was asked who did not reply. Every child is counted.'
    ],
    feature: { step: 'A1', option: 'handful' },
    name: 'The name for this is {o:smalln}. It says what is wrong in plain words: there are too few in the figure for a high or low figure from it to be trusted as meaning something.' },

  { id: 'again-smalln', kind: 'again', outcome: 'smalln',
    link: 'The school ranking gave you what to point to: {needs:smalln}. Here is a second case, on a street.',
    first: 'cn-school-ranking', second: 'cn-street', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a school, a street). Look at one thing only: how many are in the figure, and what one more or fewer would do to it.',
    prompt: { kind: 'phrase', answer: 'Two of the nine households on Alder Lane' },
    shared: [
      'In both cases the sums are right, nobody is left out, and the figure rests on very few: ten children, nine households. On Alder Lane, 2 households out of 9 is 22 in every 100, eleven times the city’s 2 in every 100. But one household more or fewer moves it a long way. 1 of 9 is 11 in every 100, and 3 of 9 is 33 in every 100.',
      'In both, the figure is read as meaning something: the best school, the highest figure in the city. The two stories share nothing else, so this is not about schools or about illness. It holds wherever everyone is counted, there are only a handful, and a high or low figure from them is read as meaning something. That is what {o:smalln} names.'
    ] },

  { id: 'portrait-smalln', kind: 'portrait', outcome: 'smalln',
    link: 'What you point to is how few are in the figure. Here is the rest of the picture of {o:smalln}.',
    typical: [
      'Everyone is counted. There is no list with silent members, and no call that anyone could answer. The group is simply small.',
      'The figure is a share, an average or a rate, and it is read as meaning something about the kind of thing counted: how good a school is, how dangerous a street is, how well a player shoots.',
      'Ask how far one more or one fewer moves it. 1 in 10 moves a share by 10 points. 1 in 200 moves it by half a point.',
      'The extremes come from the smallest groups: the best and the worst schools, towns, hospitals and players are often the smallest, because small groups swing the most.',
      'It does not need to be ten. What matters is whether one or two more or fewer would change the story.',
      'It often turns up in words like "first", "best", "highest", "never" and "always": 4 out of 4 is "always", and 0 out of 3 is "never".'
    ],
    not: [
      'A small group is not on its own this name. A figure for a class of 12 is a fine figure about those 12 and says nothing wrong, until it is read as meaning more: a ranking, a rate, a promise. And a small count may be fine if the claim is only a count: "Dana has taken four penalties and scored all four" is simply true.',
      'The name applies when a high or low figure from a handful is read as meaning something about what the group, or the thing counted, is like in general.'
    ],
    wild: ['"Four out of four is perfect."', '"The safest town in the county: not one burglary."', '"Our best school: 90% at the top level."', '"She has never missed one."', '"Every customer so far has loved it."'],
    self: 'In your own life it is "I tried it twice and it worked both times", and the restaurant with five reviews, all five stars, that you put above the one with two thousand reviews and 4.5 stars.',
    ask: '"How many are in the figure, and what would it be with one or two more or fewer?" If a different count of one or two changes the story, the figure is too thin to be read as meaning something.',
    act: [
      'Find the count behind the figure, and write down how far one more or one fewer would move it.',
      'Look for the same figure over more years, more places or more people, and go by that.',
      'Treat a ranking of groups of very different size with care: the small ones will be at both ends.',
      'Say what the figure shows for the group it came from, and no more: "9 of the 10 sixth graders this year".'
    ] },

  { id: 'check-smalln', kind: 'check', after: 'smalln',
    case: 'cn-leaderboard',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied', 'handful'] } },

  /* ---------- The look-alikes: few replies from a big list, or everyone in a small group; and a figure that holds ---------- */
  { id: 'look-nonresp-smalln', kind: 'lookalike', ledger: 'nonresp~smalln',
    link: 'These two give a figure from just a few people, and both sound exact. This card shows what separates them.',
    cases: ['cn-staff-twelve-replies', 'cn-cafe-twelve'],
    instruction: 'Both cases are about a cafeteria and a figure from 12 people, 9 of whom liked the food. Compare one thing: out of how many were the 12 counted?',
    prompt: { kind: 'which', option: 'A1.handful', answer: 'cn-cafe-twelve' },
    difference: [
      'In Case A the company emailed all 800 of its staff by name. 12 replied, and nothing was done to hear from the other 788. The 12 are 12 of 800, which is 1.5 in every 100 of the list, and most of the group is missing. The key’s answer to the question after the first, {q:A1}, is {a:A1.replied}, and the case is {o:nonresp}.',
      'In Case B the café had been open one day, and only 12 people had eaten there. All 12 were asked and all 12 answered. Nobody is missing: everyone who had eaten there is in the figure. There are only a handful, and one or two more or fewer would move it a long way: 7 of 12 is 58 in every 100, and 11 of 12 is 92. The key’s answer is {a:A1.handful}, and the case is {o:smalln}.',
      'Both figures rest on 12 people, and both claims speak for more than 12. In Case A the 12 are a few out of a long list. In Case B the 12 are everyone there is.'
    ] },

  { id: 'look-smalln-samp', kind: 'lookalike', ledger: 'smalln~samp_ok',
    link: 'A figure from a small group goes wrong when it is read as meaning something. A figure from a bigger group about the same thing can hold. The same person can be reported both ways.',
    cases: ['cn-penalties-four', 'cn-penalties-eighty'],
    instruction: 'Both cases are about the same player, Dana, and her penalty kicks. Compare one thing: how many kicks are in the figure, and what one or two more or fewer would do to it.',
    prompt: { kind: 'which', option: 'S1.counted', answer: 'cn-penalties-four' },
    difference: [
      'In Case A Dana has taken 4 penalties and scored all 4, and the coach says she never misses. Nobody is left out: every penalty she has taken is counted. But one miss would turn 4 out of 4 into 3 out of 4, which is 75 in every 100, and the coach reads a perfect figure from 4 kicks as meaning something about her. The key’s answer to the first question is {a:S1.counted}, and the question after it, {q:A1}, gets the answer {a:A1.handful}.',
      'In Case B Dana has taken 80 penalties over six seasons and scored 68, which is 85 in every 100. One miss more or fewer moves it by about one point: 67 of 80 is 83.75 and 69 of 80 is 86.25. The coach says she scores 85 in every 100, and stops there. The key’s answer to the first question is {a:S1.holds}, and the question after it, {q:H1}, gets the answer {a:H1.group}.',
      'Both are about the same player and both are accurate counts. What separates them is how many kicks are in the figure, and so how far luck could move it.'
    ] }
]);
