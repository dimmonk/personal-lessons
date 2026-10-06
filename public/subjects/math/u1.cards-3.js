// Basic Math, Unit One, part three: the third kind (an amount followed over time) and the two exceptions that carry the
// key's first and third tie-breaks: a price for each hour, and a count that has to end on a day of the week.
// The app prints the key's tie-break on each exception card; none of it is typed here.
// The pair unknown~growth is taught by the first exception, growth~whole by the second.

FC.cards('math', 'u1', [

  /* ---------- The third kind: an amount followed over time ---------- */
  { id: 'meet-growth', kind: 'meet', family: 'growth',
    link: 'In the first two kinds the numbers stayed put while you worked with them. The third kind follows an amount as it changes.',
    case: 'gt-shrub', mark: 'M1',
    strip: [
      'One amount is followed through the whole problem: the height of a shrub. It starts at 40 cm.',
      'It changes, and the problem says by how much and how often: it grows 15 cm, every year, again and again as time goes on.',
      'The question is about the amount at a later time: how tall it will be after 8 years.',
      'There is no calculation to run backwards and no rate to scale to a new number of things.'
    ],
    explain: [
      'What you are shown is one amount and a story of how it changes as time passes: where it starts, how it changes each time, and how long to follow it. The question is where it ends up. In other problems of this kind it is the other way round: you are given a target, and asked how long it takes to get there.',
      'The change can come in three forms. A fixed sum added or taken away every time: the shrub gains 15 cm a year, a bank balance falls by $50 a month. The amount multiplied by the same number each time: money that earns 4% a year, a rumor that doubles every day. Or one change that then stays: a fee that went up in March and has not moved since. Each is worked with its own steps, taught later. Here all you need is to see that an amount is being followed through time.',
      'The time is almost always in the words: each hour, every year, after 8 years. If you cannot find the time in the problem, it is probably not this kind.'
    ],
    feature: { step: 'M1', option: 'growth' },
    name: 'This kind of problem is {a:M1.growth}. “Becomes” means what the amount is worth, or how big it is, at a later time. “How long it takes” is the other half of the question: the problem gives a target and asks how long until the amount gets there.' },

  { id: 'check-growth', kind: 'check', after: 'growth',
    case: 'gt-poolpass',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth'] } },

  /* ---------- The exception: a fixed fee, plus a price for each hour ---------- */
  { id: 'exc-hourly', kind: 'exception', ledger: 'unknown~growth', looksLike: 'unknown', is: 'growth',
    h: 'A fixed fee, plus a price for each hour',
    link: 'The second and third kinds are easy to mix up: both can have a price, a repeat and a number at the end that you were not told. Here is a problem with exactly the shape of the van hire, and one word changed.',
    case: 'gt-cleaner',
    setup: 'The van hire had a fixed fee, a price for every kilometer, a result and a hidden number, and its answer was {a:M1.unknown}. This problem has the same four parts: a fixed fee, a price repeated, a result, a hidden number. Yet the answer for this case is {a:M1.growth}.',
    prompt: { kind: 'phrase', answer: 'for every hour he works' },
    because: [
      'Look at what the price is repeated for. In the van hire it was every kilometer, and a kilometer is a thing you count. Here it is every hour, and an hour is time passing: with every hour that goes by, the bill goes up by $15. So the bill is an amount that grows as time goes on, and the problem asks how long until it reaches a target.',
      'So this problem shows two things at once: a hidden number that must fit a calculation, and an amount that goes up each hour. When it shows both, the answer is the second of the two.'
    ],
    take: [
      'A price for each thing is a hidden number that must fit a calculation. A price for each hour, day, month or year is an amount changing as time passes. The arithmetic can come out the same either way: what differs is the kind the questions say it is, and so the steps that go with it.'
    ] },

  /* ---------- The exception: an amount that changes each day, and a day of the week ---------- */
  { id: 'exc-tablets', kind: 'exception', ledger: 'growth~whole', looksLike: 'growth', is: 'whole',
    h: 'An amount that changes each day, and a question about a day of the week',
    link: 'The third kind and the first can both run over days. The mistake people really make: an amount changes each day, and the question has nothing to do with the amount.',
    case: 'gt-tablets',
    setup: 'The box loses one tablet every day. An amount that drops by a fixed sum every day is what you usually see in {a:M1.growth}. Yet the answer for this case is {a:M1.whole}.',
    prompt: { kind: 'phrase', answer: 'On what day of the week' },
    because: [
      'Look at what is asked. It is not how many tablets are left, and it is not how many days. It is a day of the week. The days of a week go round and round: Monday, Tuesday and so on to Sunday, and then Monday again. A count of days that has to end on a day of the week is a count going round a loop of 7.',
      'The box does lose a tablet a day, but that only tells you how many days to count: 75. So the problem shows both an amount that drops by a fixed sum every day and a count going round a loop. When it shows both, the answer is {a:M1.whole}.'
    ],
    take: [
      'A count of days runs over time, so it is easy to call it the third kind. The loop wins, because what the problem needs worked out is where a count ends on a loop. If the problem had asked how many tablets are left after 20 days, there would be no loop in the question, and the answer would be {a:M1.growth}.'
    ] }
]);
