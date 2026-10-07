// Basic Math, Unit One, part three: the third kind (an amount followed over time) and the two exceptions that carry the
// key's first and third tie-breaks: a price for each hour, and a count that has to end on a day of the week.
// The app prints the key's tie-break on each exception card; none of it is typed here.
// The pair unknown~growth is taught by the first exception, growth~whole by the second.

FC.cards('math', 'u1', [

  /* ---------- The third kind: an amount followed over time ---------- */
  { id: 'meet-growth', kind: 'meet', family: 'growth',
    link: 'Third: one amount that changes as time passes.',
    case: 'gt-shrub', mark: 'M1',
    explain: [
      'Oskar’s shrub starts at 40 cm and grows 15 cm every year. The problem follows that one amount through time and asks where it ends up: how tall it will be after 8 years. Some problems ask it the other way round: how long until it reaches a target.',
      'The change comes in three ways. The same amount is added or taken off each time: the shrub gains 15 cm a year, or a bank balance loses $50 a month. The amount is multiplied by the same number each time: money that earns 4% a year, or a rumor that doubles every day. Or it changes once and then stays: a fee that went up in March and has not moved since. Each has its own steps, and you only need to see that one amount is followed through time.'
    ],
    spot: [
      { do: 'Find the one amount that is followed: the height of the shrub.', why: 'The whole problem is about it.' },
      { do: 'Find how it changes and how often: 15 cm, every year.', why: 'The time is nearly always in the words: each hour, every year, after 8 years.' },
      { do: 'Check the question is about later: “How tall will it be after 8 years?”', why: 'It asks where the amount ends up, or how long until it reaches a target.' }
    ],
    feature: { step: 'M1', option: 'growth' },
    name: 'This is {a:M1.growth}. If you cannot find the hours, days, months or years, it is not this.' },

  { id: 'check-growth', kind: 'check', after: 'growth',
    case: 'gt-poolpass',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth'] } },

  /* ---------- The exception: a fixed fee, plus a price for each hour ---------- */
  { id: 'exc-hourly', kind: 'exception', ledger: 'unknown~growth', looksLike: 'unknown', is: 'growth',
    h: 'A fixed fee, plus a price for each hour',
    link: 'This has exactly the shape of the van hire, with one word changed.',
    case: 'gt-cleaner',
    setup: 'The van hire had a fixed fee, a price that repeats, a bill and a number you are not told, and it was {a:M1.unknown}. This problem has the same four parts. But the answer here is {a:M1.growth}.',
    prompt: { kind: 'phrase', answer: 'for every hour he works' },
    because: [
      'Look at what the price repeats for. In the van hire it was every kilometer, which you count. Here it is every hour, and an hour is time passing: each hour that goes by adds $15 to the bill.',
      'So the bill is an amount that grows as time goes on, and the problem asks how long until it reaches $95. When a problem shows both a missing number and an amount over time, the amount over time wins.'
    ],
    take: [
      'A price for each thing is a missing number. A price for each hour, day, month or year is an amount that changes as time passes. The sums can come out the same either way: what changes is which steps you use.'
    ] },

  /* ---------- The exception: an amount that changes each day, and a day of the week ---------- */
  { id: 'exc-tablets', kind: 'exception', ledger: 'growth~whole', looksLike: 'growth', is: 'whole',
    h: 'An amount that changes each day, and a day of the week',
    link: 'Both can run over days, so it is easy to take this for an amount over time.',
    case: 'gt-tablets',
    setup: 'The box loses one tablet every day. An amount that drops by the same number every day is what {a:M1.growth} usually looks like. But the answer here is {a:M1.whole}.',
    prompt: { kind: 'phrase', answer: 'On what day of the week' },
    because: [
      'Look at what is asked. It is not how many tablets are left, and it is not how many days. It is a day of the week, and the days go round and round: Monday to Sunday, then Monday again.',
      'The tablets only tell you how many days to count: 75. So the problem shows both an amount that drops each day and a count going round a loop of 7. When it shows both, the loop wins.'
    ],
    take: [
      'If the problem had asked how many tablets are left after 20 days, there would be no loop, and the answer would be {a:M1.growth}.'
    ] }
]);
