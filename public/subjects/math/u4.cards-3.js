// Basic Math, Unit Four, Logarithm (an amount multiplied by the same number each time, asked how long until it reaches a
// target) with the word its worked example leans on, and A one-time change (an amount that changed once and has stayed the same since).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- Logarithm: the same sort of amount, with the question turned round ---------- */
  { id: 'meet-logsolve', kind: 'meet', outcome: 'logsolve',
    link: 'Same amount, turned around: you are given the target, and the time is what is missing.',
    case: 'm4-wd-dish', mark: 'G2',
    explain: [
      'This is the same sort of amount as in the savings account: it is multiplied by 1.2 every hour. But the savings problem gave the time and asked for the amount. This one gives the amount to reach and asks for the time.',
      'You could multiply and count: 600 after 1 hour, 720 after 2, 864 after 3, 1,036.8 after 4. The dish passes 1,000 during the fourth hour. For 20 or 30 hours that takes too long, so you count with the log button on a calculator.',
      'The words “how long” do not decide it, because an amount that has the same number added every hour can be asked about in the same words. What decides it is that each change is a share of the amount, and that the problem gives a target instead of a time.'
    ],
    spot: [
      { do: 'Find the amount and how it changes: the bacteria, up 20% every hour.', why: 'A percentage or a doubling means the amount is multiplied each time.' },
      { do: 'Find the target: 1,000 bacteria.', why: 'A target given means the time is what is missing.' },
      { do: 'Check the question asks for a time: “How many hours will it take…”.', why: 'The missing number is a number of hours, not a number of bacteria.' }
    ],
    feature: { step: 'G2', option: 'howlong' },
    name: 'This is {o:logsolve}. It is named for the log button that finds it, which answers “how many times must I multiply by 1.2 to reach 2?”' },

  { id: 'check-logsolve', kind: 'check', after: 'logsolve',
    case: 'm4-wd-cafe',
    ask: { type: 'phrase', step: 'G2', say: 'Which words show what the problem wants to know? Tap them.',
           answer: 'After how many months will it sell 400 coffees a day?' } },

  /* ---------- A word the worked example of Logarithm leans on ---------- */
  { id: 'term-logscale', kind: 'term', term: 'logscale',
    h: 'A chart where each gridline is ten times the last',
    link: 'The worked problem coming up counts multiplications with logs, and logs come from a chart you may not know. Here it is first, with a museum chart.',
    case: 'm4-wd-museum',
    plain: [
      'On an ordinary chart, equal spaces mean equal amounts: the gridlines might read 0, 10, 20, 30. On this chart, equal spaces mean equal multiples: each gridline is 10 times the one below, so the labels go 1, 10, 100, 1,000, 10,000. Going up one gridline multiplies by 10, going up two multiplies by 100, and going up three multiplies by 1,000.'
    ],
    after: [
      'So a {t:logscale} draws repeated multiplying: every gridline up is one more multiplication by 10. Watch out: an amount that is multiplied each time draws as a straight line on one, so very fast growth can look calm. Read the labels up the side before you judge a chart.'
    ] },

  /* ---------- A one-time change: a change made once ---------- */
  { id: 'meet-oneoff', kind: 'meet', outcome: 'oneoff',
    link: 'Last: an amount that changed once and then stopped.',
    case: 'm4-wd-gym', mark: 'G1',
    explain: [
      'Month by month the fees read 30, 30, 30, 36, 36, 36: one jump, then a flat line. It is tempting to treat the jump as the start of a pattern, and say the fee goes up $6 each time, or 20% each time. Nothing in the problem says that. The fee in two years is what the problem tells you: $36.',
      'Every kind of problem in this unit has a change, so the change itself does not decide it. What decides it is that the change happened once and has not come again, so only the new amount carries forward. This is the easiest one to mistake for another, because a change made once can be given as a plain figure or as a percentage, and both can look like the start of a pattern.'
    ],
    spot: [
      { do: 'Find the amount before and after the change: $30, then $36.', why: 'This tells you how big the change was.' },
      { do: 'Find what happens after the change: “it has charged $36 a month ever since”.', why: 'These words say whether the change comes again.' },
      { do: 'Check that nothing says the change repeats: no “every month” or “each year” on it.', why: 'Without a repeat, there is nothing to carry forward.' }
    ],
    feature: { step: 'G1', option: 'once' },
    name: 'This is {o:oneoff}: the change was made once, and it is not made again.' },

  { id: 'check-oneoff', kind: 'check', after: 'oneoff',
    case: 'm4-wd-parking',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show what happens to the amount after the change? Tap them.',
           answer: 'it has not changed since' } }
]);
