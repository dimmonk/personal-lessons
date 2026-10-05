// Basic Math, Unit One, part three: the third kind (an amount followed over time), its look-alike pair with the
// second kind, the two exceptions that carry the key's first and third tie-breaks and the pair with the first kind.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('math', 'u1', [

  /* ---------- The third kind: an amount followed over time ---------- */
  { id: 'meet-growth', kind: 'meet', family: 'growth',
    link: 'In the first two kinds, the numbers stayed put while you worked with them. The third kind follows an amount as it changes.',
    case: 'gt-shrub', mark: 'M1',
    strip: [
      'There is one amount that the whole problem follows: the height of a shrub. It starts at 40 cm.',
      'The amount changes. It does not stay put: it grows, and the problem says by how much, 15 cm, and how often, every year.',
      'The change comes again and again as time goes on: year after year.',
      'The question is about the amount at a later time: how tall it will be after 8 years.',
      'There is no calculation given to run backwards and no rate to scale to a new number of things. The problem follows the amount through time.'
    ],
    explain: [
      'What you are shown is one amount and a story of how it changes as time passes. You are told where it starts, how it changes each time, and how long to follow it. The question is where it ends up. In other problems of this kind the question is the other way round: you are given a target, and asked how long it takes to get there.',
      'The change can come in three forms, and the key counts all three as this kind. The amount can change by adding or taking away a fixed sum every time: the shrub gains 15 cm a year, a bank balance falls by €50 a month. It can be multiplied by the same number each time: a sum of money that earns 4% a year, a rumour that doubles every day. Or it can change once and stay changed: a fee that went up in March and has not moved since. These three are worked with different procedures, which are taught later. In this unit all you need is to see that an amount is being followed through time.',
      'The time is almost always in the words: each hour, each day, every month, every year, after 8 years. If you cannot find the time in the problem, it is probably not this kind.'
    ],
    feature: { step: 'M1', option: 'growth' },
    name: 'The key’s answer, and so the name of this kind of problem, is {a:M1.growth}. “Becomes” means what the amount is worth, or how big it is, at a later time. “How long it takes” is the other half of the question: the problem gives a target and asks how long until the amount gets there.' },

  { id: 'again-growth', kind: 'again', family: 'growth',
    link: 'The shrub gave you what to point to: {needs:growth}. Here is a second problem about money, where the amount changes in a different way.',
    first: 'gt-shrub', second: 'gt-savings', step: 'M1',
    instruction: 'Find what the two problems share. Ignore the story (a shrub, a savings account) and ignore the way the amount changes. Look at one thing only: which words show how the amount changes as time passes?',
    prompt: { kind: 'phrase', answer: 'pays 4% interest each year' },
    shared: [
      'Both problems follow one amount as time goes on: the height of the shrub, the money in the account. Both say how it changes each year, and both ask where it will be after a number of years.',
      'The two changes are not the same. The shrub gains the same 15 cm every year, while the account gains a bigger sum each year, because each year’s interest is worked out on a bigger total. The key counts both as this kind, and later units teach a different procedure for each. What the two problems share is only this: one amount, changing as time passes, and a question about where it ends up. That is what {a:M1.growth} names.'
    ] },

  { id: 'portrait-growth', kind: 'portrait', family: 'growth',
    link: 'You know what to point to for {a:M1.growth}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'There is one amount, a thing you could plot as a line on a chart: a height, a balance, a price, a number of users.',
      'There is time in the words: “each month”, “every year”, “an hour”, “after 8 years”, “ever since March”.',
      'The problem says how the amount changes each time: a fixed sum added or taken away, a fixed multiple, or one change and no more.',
      'The question is either the amount at a given time, or the time to reach a target.',
      'The change comes on its own as time passes: nothing has to be done between one year and the next for the amount to move.'
    ],
    not: [
      'Time in the story is not enough. “The meeting took 3 hours” mentions time, and no amount is being followed.',
      'A problem can follow something through time without being this kind. A cyclist rolling down a hill covers more ground every second, but the extra distance is not a fixed sum, and it is not a fixed multiple either. A problem that gives a calculation for how far she has gone and asks when she reaches the bottom is a different kind, and this unit has a card for exactly that case.'
    ],
    wild: ['"It goes up by €25 a month."', '"It doubles every day."', '"Interest at 4% a year."', '"How long until it reaches 100?"', '"It has stayed the same since March."'],
    self: 'In your own life it is a savings pot, a loan, a price that rises each year, a tank that fills or leaks: any time you ask “where will this be in a year?” or “when will I get there?”',
    ask: '"Which amount is changing, how does it change each time, and am I asked where it ends up or how long it takes?" If you can say all three, you are probably looking at this kind.' },

  { id: 'check-growth', kind: 'check', after: 'growth',
    case: 'gt-poolpass',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth'] } },

  /* ---------- The look-alike pair: a hidden number, or an amount over time ---------- */
  { id: 'look-unknown-growth', kind: 'lookalike', ledger: 'unknown~growth',
    link: 'You have now met three kinds on their own. Two of them are easy to mix up, because both can have a price, a repeat and a number at the end that you were not told. This card puts them side by side.',
    cases: ['gt-plan-texts', 'gt-plan-rise'],
    instruction: 'Both problems are about Leo’s phone plan. Compare one thing: does the problem follow one amount as time passes, or does it hide a number that must fit a calculation?',
    prompt: { kind: 'which', option: 'M1.growth', answer: 'gt-plan-rise' },
    difference: [
      'In Case A nothing changes as time passes. The bill is a fixed €10 plus €0.20 for each text, the bill came to €16, and the number of texts is the number the problem leaves out. The key’s answer is {a:M1.unknown}.',
      'In Case B the same plan is followed through time. One amount, the monthly price, goes up by €2 every year, and the question is where it will be after 5 years. No number is hidden for a calculation to fit. The key’s answer is {a:M1.growth}.',
      'Both have a price, a number that is repeated and a question that ends in a number. What differs is what the repeat goes with. In Case A it goes with each text, and texts are things you count. In Case B it goes with each year, and years are time passing.'
    ] },

  { id: 'exc-hourly', kind: 'exception', ledger: 'unknown~growth', looksLike: 'unknown', is: 'growth',
    h: 'A fixed fee, plus a price for each hour',
    link: 'The last card kept the two kinds tidy: in Case A the price went with each text and in Case B with each year. Real problems are less tidy. Here is one with exactly the shape of the van hire, and one word changed.',
    case: 'gt-cleaner',
    setup: 'The van hire had a fixed fee, a price for every kilometre, a result and a hidden number, and its key answer was {a:M1.unknown}. This problem has the same four parts: a fixed fee, a price repeated, a result, a hidden number. Yet the key’s answer for this case is {a:M1.growth}.',
    prompt: { kind: 'phrase', answer: 'for every hour he works' },
    because: [
      'Look at what the price is repeated for. In the van hire it was repeated for every kilometre, and a kilometre is a thing you count. Here it is repeated for every hour, and an hour is time passing. With every hour that goes by, the bill goes up by €15. So the bill is an amount that grows as time goes on.',
      'Now look at what the problem asks. It gives a target, a bill of €95, and asks how long, in hours, until the bill gets there. That is the second half of what the third kind asks: not where an amount ends up, but how long it takes to reach a target.',
      'So this problem shows two things at once: a hidden number that must fit a calculation, and an amount that goes up each hour. When it shows both, the key chooses the second.'
    ],
    take: [
      'This is the key’s own decision, and it is a line that real life does not draw in one place. A price for each hour is a number in a calculation, and it is also an amount growing as time passes. The key gives every problem one answer, so that two people using it reach the same one and can each say why.',
      'Look at what the price is repeated for, and you have the rule: a price for each thing is a hidden number that must fit a calculation, and a price for each hour, day, month or year is an amount changing as time passes. The arithmetic can come out the same either way. What differs is the kind of problem the key says it is, and so the procedures that go with it.'
    ] },

  { id: 'exc-cyclist', kind: 'exception', ledger: 'unknown~growth', looksLike: 'growth', is: 'unknown',
    h: 'A distance that changes with time, but not in any of the three ways',
    link: 'The last card moved a problem out of the second kind and into the third because of one word, “hour”. Here is a problem that goes the other way: it follows something through time, and the key does not answer with the third kind.',
    case: 'gt-cyclist',
    setup: 'An amount followed through time, and a question about how long it takes to reach a target, is what the third kind usually looks like: here the distance, and the 200 m of the hill. Yet the key’s answer for this case is {a:M1.unknown}.',
    prompt: { kind: 'phrase', answer: '2 × t × t metres' },
    because: [
      'Check how the distance changes against the three forms of change the third kind allows. After 1 second the cyclist has gone 2 × 1 × 1 = 2 m. After 2 seconds she has gone 2 × 2 × 2 = 8 m, and after 3 seconds 2 × 3 × 3 = 18 m. From one second to the next she gains 6 m, and then 10 m: not the same number each time. And 8 is 4 times 2, but 18 is only 2.25 times 8: not multiplied by the same number each time either. Nor did the distance change once and then stay put.',
      'So the distance is followed through time, but in none of the three ways the key counts. What the problem gives is a calculation, written in words, and a result: 200 m. The number it leaves out is the time. That is a hidden number that must fit a calculation, and the key’s answer is {a:M1.unknown}.'
    ],
    take: [
      'There is no tie-break to apply here, because the case shows only one of the two answers. The third kind needs more than “something changes as time passes”. It needs the change to repeat in one of its three ways, and the hill does not.',
      'When a problem follows time but its change is none of the three, you fall back on the question of what is hidden and what it must fit.'
    ] },

  /* ---------- The look-alike pair: an amount over time, or counts that repeat ---------- */
  { id: 'look-growth-whole', kind: 'lookalike', ledger: 'growth~whole',
    link: 'The third kind has one more look-alike, and it is in the first kind. Both can run over days, and both can have a number repeated again and again.',
    cases: ['gt-barrel', 'gt-rota'],
    instruction: 'Both problems are about Rosa’s garden, and both have a 4 in them. Compare one thing: does one amount change as time passes, or are there two things that each repeat on their own?',
    prompt: { kind: 'which', option: 'M1.whole', answer: 'gt-rota' },
    difference: [
      'In Case A one amount, the water in the barrel, goes up by the same 4 litres each day, and the question is how long until it reaches 100 litres. The key’s answer is {a:M1.growth}.',
      'In Case B nothing grows. There are two chores, each repeating on its own: one every 4 days, one every 6 days. The question is when the two repeats next land on the same day. The key’s answer is {a:M1.whole}.',
      'The 4 and the word “every” turn up in both. In Case A the 4 is an amount added each day. In Case B it is a gap between one chore and the next. An amount that changes is one thing, and counts that repeat are another.'
    ] },

  { id: 'exc-tablets', kind: 'exception', ledger: 'growth~whole', looksLike: 'growth', is: 'whole',
    h: 'An amount that changes each day, and a question about a day of the week',
    link: 'The last card was easy to read, because Case B had no amount that grew. The mistake people really make is harder to catch: a problem has an amount that changes each day, and asks something that has nothing to do with the amount.',
    case: 'gt-tablets',
    setup: 'The box loses one tablet every day. An amount that drops by a fixed sum every day is what you usually see in {a:M1.growth}. Yet the key’s answer for this case is {a:M1.whole}.',
    prompt: { kind: 'phrase', answer: 'On what day of the week' },
    because: [
      'Look at what is asked. It is not how many tablets are left, and it is not how many days. It is a day of the week. The days of a week go round and round: Monday, Tuesday and so on to Sunday, and then Monday again. A count of days that has to end on a day of the week is a count going round a loop of 7.',
      'The box does lose one tablet a day, so the problem also shows an amount over time. But that amount is not what the problem asks about. All it does is tell you how many days to count: 75.',
      'So the problem shows both: an amount that drops by a fixed sum every day, and a count going round a loop. When it shows both, the key’s answer is {a:M1.whole}.'
    ],
    take: [
      'This is the key’s decision too. A count of days runs over time, so it is easy to call it the third kind. The key gives the loop the win, because what the problem needs worked out is where a count ends on a loop, and that has nothing to do with the tablets.',
      'If the problem had asked how many tablets are left after 20 days, there would be no loop in the question, and the key’s answer would be {a:M1.growth}.'
    ] }
]);
