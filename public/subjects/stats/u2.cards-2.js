// Statistical Claims, Unit Two, part one (second half): how far luck can move a figure, the second name with its check, and the first look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'term-margin', kind: 'term', term: 'margin',
    h: 'How far luck can move a figure',
    link: 'A {t:sample} drawn {t:atrandom} does not lean, but luck can still move the figure a little. Honest claims say how far, and that has a name.',
    case: 'h-t-poll',
    plain: [
      'Both polling firms did everything right, and they still got different figures: 52 in 100 and 49 in 100. Each drew a different 1,000 adults by lottery, and luck made each group a little different from the city, and from the other group. Neither firm made a mistake.',
      'So any figure from a few people is a little off from the figure for everyone, and the reason is luck, not carelessness. Only asking more people makes it smaller.',
      'You can estimate the size of the luck. As a rough guide, for shares between about 20 and 80 in 100, divide 1 by the square root of the number of people. The square root of 1,000 is about 32, and 1 ÷ 32 is about 0.03, which is 3 points. So a firm with 1,000 people says "52 in 100, give or take 3 points". That means the figure for the whole city is very likely between 49 and 55.'
    ],
    after: [
      'Two things to carry away. First, the {t:margin} covers only the luck of a fair draw. If the people were chosen badly, it does not warn you: a badly chosen group of 1,000 has the same margin, and its figure can be far off. Second, the size of the city does not appear in the sum. 1,000 people give the same margin whether the city has 300,000 adults or 3 million, which is why a thousand people can speak for millions.'
    ] },

  { id: 'meet-measok', kind: 'meet', outcome: 'meas_ok',
    link: 'The first claim gave one figure at one time. This one follows a figure through time. Take a town’s own records.',
    case: 'h-births', mark: 'H1',
    explain: [
      'When a figure changes, one of two things happened: the thing it counts changed, or the way of counting did. If the clerk’s office had switched its form in 2021 to include births at a hospital across the river, the figure could rise without one more baby being born. If the office were paid for each birth it recorded, the figure could rise because the office tried harder.',
      'Here none of that happened. The same office wrote down every birth on the same form, and nobody was paid or judged on the number. So the fall of 1,210 − 1,090 = 120 births is a real fall in births.'
    ],
    spot: [
      { do: 'Find how the figure was counted each time: the same office, the same form, the same checks.', why: 'A new form or tool can move a figure all by itself.' },
      { do: 'Check that nobody is paid, ranked or judged on it: nobody’s pay or budget depends on the number.', why: 'If someone is, stop: people can push a figure without changing the real thing.' },
      { do: 'Check that the claim only says it fell, with the numbers: 1,210 in 2019, 1,090 in 2023.', why: 'It shows that the figure moved, not why.' }
    ],
    act: [
      { do: 'Say that it rose or fell, and by how much: births fell by 120.', why: 'That is all the claim has shown.' },
      { do: 'Leave out "because".', why: 'The claim has not earned a reason.' }
    ],
    feature: { step: 'H1', option: 'change' },
    name: 'This is {o:meas_ok}. “Change” means a rise or a fall, and “real” means the thing itself changed, not only the figure.' },

  { id: 'check-measok', kind: 'check', after: 'meas_ok',
    case: 'h-pupils',
    ask: { type: 'option', step: 'H1', among: ['group', 'change'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-samp-meas', kind: 'lookalike', ledger: 'samp_ok~meas_ok',
    link: 'Two claims can look alike when they give the same figure about the same thing. Here is the first pair: a claim about one time, and a claim about two.',
    cases: ['h-wait-avg', 'h-wait-change'],
    instruction: 'Both stories are about the same clinic and the same figure, an average wait. Compare one thing: does the claim give the figure once, or follow it through time?',
    prompt: { kind: 'which', option: 'H1.change', answer: 'h-wait-change' },
    difference: [
      'In Story A the clinic drew 400 of last year’s 12,000 visits by lottery and timed each one. The claim gives one figure, 24 minutes, for one year, and says nothing about earlier or later years. The answer is {a:H1.group}, so it is {o:samp_ok}.',
      'In Story B the clinic timed every visit in two years, the same way, and nobody’s pay depends on the number. The claim gives the figure twice, 31 minutes and 24 minutes, and says it fell by 7 minutes. The answer is {a:H1.change}, so it is {o:meas_ok}.',
      'The 24 minutes is the same in both. What separates them is whether the claim gives it once or follows it through time.'
    ] }
]);
