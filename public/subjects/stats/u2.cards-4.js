// Statistical Claims, Unit Two, part two (first half): the third name, two things set side by side, with its look-alike pair and its exception.

FC.cards('stats', 'u2', [

  { id: 'meet-compok', kind: 'meet', outcome: 'comp_ok',
    link: 'The first two names each had one thing in the claim. The third has two, set side by side, and the claim says which is bigger.',
    case: 'h-buses', mark: 'H1',
    strip: [
      'There are two things, Route 5 and Route 9, and a figure for each: 12 late trips out of 200, and 31 out of 205.',
      'They are of the same kind: two bus routes of the same length, run in the same hours, through neighborhoods of similar size.',
      'They were counted the same way over the same stretch of time: every trip in March, with the same tracker.',
      'The numbers behind the comparison are given: how many trips each had, and how many were late.',
      'The claim says which is later more often, and stops there.'
    ],
    explain: [
      'A comparison tells you how two things stand beside each other. For it to be fair, three things have to hold, and this case shows each. The two things have to be of the same kind: two routes of the same length, run in the same hours. A route through a quiet suburb at midday and a route through the center at rush hour are not of the same kind, and a difference between them says very little. Next, they have to be counted the same way over the same stretch of time. Here, every trip in March, one tracker. And the numbers have to be given, so that sizes can be put on the same scale.',
      'The key’s line for this name adds one more thing: no different mix of easy and hard cases hidden inside the two. Here is what that means. Suppose two garages repair cars. Garage A mostly does quick jobs, 90 in every 100, and Garage B mostly does long, hard ones, 90 in every 100. Say that both garages finish 5 in 100 quick jobs late and 40 in 100 hard jobs late, so they are exactly as good as each other at each kind of job. Garage A has 90 × 0.05 = 4.5 quick jobs late, plus 10 × 0.40 = 4 hard jobs late, which is 8.5 late in every 100. Garage B has 10 × 0.05 = 0.5 quick jobs late, plus 90 × 0.40 = 36 hard jobs late, which is 36.5 in every 100. A total counted over everything makes B look more than four times as bad, and it is not worse at anything. So a comparison is fair only when the two things deal with the same mix of easy and hard jobs, which is why this case tells you that both routes run in the same hours through similar neighborhoods.',
      'Putting sizes on the same scale is only division. Route 5 had 200 trips and Route 9 had 205, so the raw counts of late trips, 12 and 31, do not compare cleanly. Divide each by its own number of trips: 12 ÷ 200 = 0.06, which is 6 in 100 trips, and 31 ÷ 205 = 0.15, which is 15 in 100. Now the two figures stand on the same scale and can be set side by side.',
      'The claim then says only which is bigger: 15 in 100 against 6 in 100. It does not say why Route 9 is late more often, whether traffic, a bridge or old buses. {o:comp_ok} tells you that two things differ and by how much. It has not earned the reason.'
    ],
    feature: { step: 'H1', option: 'difference' },
    name: 'The name for this is {o:comp_ok}. It is a comparison because the claim sets one thing beside another. It is fair because the two are alike and counted alike, and nothing about their size is hidden.' },

  { id: 'again-compok', kind: 'again', outcome: 'comp_ok',
    link: 'The bus routes gave you what to point to: {needs:comp_ok}. Here is a second case with a completely different story.',
    first: 'h-buses', second: 'h-shifts', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the story (buses, a factory). Look at one thing only: {q:H1}',
    prompt: { kind: 'phrase', answer: 'The night shift’s parts fail inspection more often: 22 in 1,000 against 14 in 1,000' },
    shared: [
      'In both cases there are two things of one kind, counted one way over one period, with their numbers given. In the factory, 42 of 3,000 parts failed on days and 68 of 3,100 on nights: 42 ÷ 3,000 = 0.014, which is 14 in 1,000, and 68 ÷ 3,100 = 0.022, which is 22 in 1,000. Each claim says which is bigger and stops.',
      'The two stories share nothing else. So this is not about buses or about brake parts. It holds wherever the claim sets two alike things side by side and says which is bigger. That is what {o:comp_ok} names.'
    ] },

  { id: 'portrait-compok', kind: 'portrait', outcome: 'comp_ok',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:comp_ok}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'The two things are described in a way that lets you see they are alike: the same length, the same line, the same hours, the same kind of patient.',
      'Both were counted the same way over the same stretch of time. The words that say so are part of the claim or sit next to it.',
      'The numbers are given, and so is how many each figure is out of. Or the figures are already put on the same scale, "for every 100", with both totals shown.',
      'The claim says that one is bigger, likelier or riskier, or that one has more or less, and then stops.',
      'It can also set one thing beside its own usual figure: this year’s reservoir level beside the average for that date over twenty years, as long as every reading was taken the same way.'
    ],
    not: [
      'Two figures side by side are not yet {o:comp_ok}. The two things have to be alike and counted alike, and the numbers have to be there. A percentage with nothing behind it, or two totals that hide a different mix, would be a different case.',
      'And {o:comp_ok} is not a cause. A route that is later more often has not been shown to be later because of anything in particular.'
    ],
    wild: ['"Route 9 is late more often than Route 5: 15 trips in 100 against 6."', '"Both lines are inspected the same way, and the night shift fails more often."', '"This year’s level is 13 points below the usual for the date."', '"Both clinics start the clock at check-in, and Clinic B’s waits are longer."'],
    self: 'In your own life you do this when you compare two phone plans, two schools or two quotes. The comparison is fair when you can say that the two are alike in the ways that matter, were measured the same way, and you have the numbers.',
    ask: '"Are the two things alike, counted the same way over the same period, and are the numbers behind the comparison given?"',
    act: [
      '1. Check that the two are of the same kind: the same length, line, hours or sort of customer. If they are not, say that the comparison is not between alike things.',
      '2. Check that both were counted the same way over the same time. Where the totals differ, divide each count by its own total to put them on the same scale.',
      '3. If both hold, repeat which is bigger and by how much. Leave out any reason: the comparison has not earned one.'
    ] },

  { id: 'check-compok', kind: 'check', after: 'comp_ok',
    case: 'h-pools',
    ask: { type: 'option', step: 'H1', among: ['group', 'change', 'difference'] } },

  { id: 'look-meas-comp', kind: 'lookalike', ledger: 'meas_ok~comp_ok',
    link: 'The second pair of this unit: both claims put two figures in front of you, and both can sound like "this is lower than that".',
    cases: ['h-gauge', 'h-reservoir-usual'],
    instruction: 'Both cases are about the same reservoir, the same gauge and the same level. Compare one thing: is the claim following one thing as time passes, or setting one thing beside something else?',
    prompt: { kind: 'which', option: 'H1.difference', answer: 'h-reservoir-usual' },
    difference: [
      'In Case A the district read the gauge on 1 June and again on 1 September, and the claim follows the one reservoir through the summer: 82% full, then 61% full. It fell by 82 − 61 = 21 points. The key’s answer is {a:H1.change}, and the case is {o:meas_ok}.',
      'In Case B the district looks at the reservoir on one date, 1 September, and sets this year’s 61% beside the average of twenty readings for that date, 74%. The gap is 74 − 61 = 13 points, and the claim says the level is below the usual. Nothing is followed through time. One thing is set beside its own usual figure. The key’s answer is {a:H1.difference}, and the case is {o:comp_ok}.',
      'The gauge, the reservoir and the 61% are the same. In one claim the reservoir moves while the gauge is watched. In the other it stands still while it is set beside the usual.'
    ] },

  { id: 'exc-years', kind: 'exception', looksLike: 'comp_ok', is: 'meas_ok', ledger: 'meas_ok~comp_ok',
    h: 'Two numbers side by side that are not a comparison',
    link: 'The last card separated the pair with two tidy cases. A claim can also set two numbers side by side and still be about one thing, and that needs a card of its own.',
    case: 'h-fire-calls',
    setup: 'There are two numbers in this claim, 410 and 380, one beside the other, and a claim that sets two numbers side by side is what {o:comp_ok} often looks like. Yet this case is {o:meas_ok}.',
    prompt: { kind: 'phrase', answer: 'Calls from Ridley fell from 410 in 2022 to 380 in 2023' },
    because: [
      'Ask what is set beside what. Both numbers are about the same thing, calls from Ridley, in two different years. There is no second place, second group or usual level for the figure to be set beside. The only thing that differs between the two numbers is when they were counted, and the claim says that the figure fell.',
      'For {o:comp_ok} you must be able to point to this: {needs:comp_ok}. The two things in it are two things of one kind. Here there is one thing, and what the claim sets beside the 2022 figure is the same thing a year later. That is time passing, and it is the answer {a:H1.change}.'
    ],
    take: 'This is the key’s decision, and it is worth knowing that it is. In life the line is not drawn in one place: a comparison of one year with the next can be read either way. The key goes by what the claim sets side by side. One thing as time passes is the answer {a:H1.change}. One thing against a different thing, or against its own usual figure, is the answer {a:H1.difference}.' }
]);
