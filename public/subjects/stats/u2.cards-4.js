// Statistical Claims, Unit Two, part two (first half): the word the fourth name leans on, the fourth name with its check, and its look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'term-placebo', kind: 'term', term: 'placebo',
    h: 'A dummy tablet',
    link: 'The first three claims stopped short of saying why. The fourth may say why, and the tests behind it often use a word you have not met.',
    case: 'h-t-dummy',
    plain: [
      'The cold remedy test gave the second group a dummy tablet instead of nothing. Why not give them nothing? Because people who know they were given a remedy often feel better, or say they do. A dummy tablet puts both groups through the same thing, so the only difference left between them is the medicine.',
      'Not every test has a dummy. A bank that texts a reminder to some customers has no dummy text to send, so the other customers simply get the usual. What matters in every such test is that the two groups differ in one thing only: one gets the thing, and the other does not.'
    ] },

  { id: 'meet-causeok', kind: 'meet', outcome: 'cause_ok',
    link: 'The first three claims stop at what the figures show. The fourth goes a step further and says why. That step is safe in only one situation.',
    case: 'h-migraine', mark: 'H1',
    explain: [
      'The migraine claim goes further than the others: it says the tablet is why the groups differ. That is safe only when nothing but the tablet differs between the groups, and the way to be sure of that is that nobody chose who went in which group.',
      'Suppose people had chosen for themselves whether to take the tablet. They might be the ones who take their health most seriously, or the ones with the worst migraines. Then the gap of 3 days a month might come from who they are, and the tablet might have done nothing.',
      'Here a lottery formed the groups. Each of the 400 people had an equal chance of landing in either group, whatever their age, however bad their migraines and however much they care about their health. So before the tablet the two groups were alike. After eight weeks they differ by 7 − 4 = 3 migraine days a month, and the tablet is the one thing left that was different. The {t:placebo} does a second job: neither group knew which it had, so everyone hoped the same.',
      'The claim stays inside what the test shows: on average, for people like the ones enrolled, the group given the tablet had fewer migraine days.'
    ],
    spot: [
      { do: 'Find who decided which group each person went into: a computer split them by lottery.', why: 'A lottery, a coin toss or a computer draw works; "the ones who signed up" does not.' },
      { do: 'Check both groups were treated and counted alike: a {t:placebo} for one, and the same eight weeks for both.', why: 'Then the tablet is the one thing left that was different.' },
      { do: 'Find what the claim says the tablet did: reduced migraine days, 4 a month against 7.', why: 'Only a lottery lets a claim say what made the gap.' }
    ],
    act: [
      { do: 'Repeat the cause the claim states: the tablet cut migraine days, 4 a month against 7.', why: 'The lottery lets it say that.' },
      { do: 'Limit it to people like the 400 enrolled: adults with migraines on at least eight days a month.', why: 'The test shows nothing about anyone else.' }
    ],
    feature: { step: 'H1', option: 'causes' },
    name: 'This is {o:cause_ok}. It is a test because the researchers gave the thing to one group and not the other, and it is fair because a lottery, not anyone’s choice, formed the groups.' },

  { id: 'check-causeok', kind: 'check', after: 'cause_ok',
    case: 'h-allotment',
    ask: { type: 'option', step: 'H1', among: ['change', 'difference', 'causes'] } },

  { id: 'look-comp-cause', kind: 'lookalike', ledger: 'comp_ok~cause_ok',
    link: 'The last pair: both show two groups with a gap, and the numbers can be exactly the same. Only what the claim says differs.',
    cases: ['h-readgroups', 'h-reading-cause'],
    instruction: 'Both stories are about the same school, the same lottery and the same test results. Compare one thing: does the claim stop at which group is ahead, or say what made the gap?',
    prompt: { kind: 'which', option: 'H1.causes', answer: 'h-reading-cause' },
    difference: [
      'In Story A the school gives the two averages, 74 and 62, and says which group is ahead: 74 − 62 = 12 points. It says nothing about why. The answer is {a:H1.difference}, so it is {o:comp_ok}.',
      'In Story B the school ran the same lottery and found the same 12 points, and its claim says the reading program raised the scores. It may say that, because names were drawn from a hat, so the students in the program and out of it were alike before it began. The answer is {a:H1.causes}, so it is {o:cause_ok}.',
      'Everything is the same except the last sentence of the claim. Two groups formed any other way can differ in ways nobody can see, and any of those could be why one is ahead. Only a lottery spreads those differences evenly between the groups, so only then may a claim say what made the gap.'
    ] }
]);
