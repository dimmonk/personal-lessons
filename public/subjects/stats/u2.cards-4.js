// Statistical Claims, Unit Two, part two (first half): the word the fourth name leans on, the fourth name with its check, and its look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'term-placebo', kind: 'term', term: 'placebo',
    h: 'A dummy that makes both groups go through the same thing',
    link: 'The first three names stopped short of saying why. The fourth is the one kind of claim that may say why, and the tests behind it often use a word you have not met.',
    case: 'h-t-dummy',
    plain: [
      'The case is a test of a cold remedy, and the second group got a dummy tablet instead of nothing. Why not simply give nothing to the second group? Because people who know they have been given a remedy often feel better, or say they do. A dummy tablet puts both groups through the same thing, so that the only difference left between them is the medicine.',
      'Not every test has a dummy. A bank that texts a reminder to some customers has no dummy text to send, so the second group simply gets the usual. What matters in every such test is that the two groups differ in one thing only: one has the thing, and the other does not.'
    ] },

  { id: 'meet-causeok', kind: 'meet', outcome: 'cause_ok',
    link: 'The first three names all stop at what the figures show. The fourth goes one step further: it says why. That step is only safe in one situation, and this case is built to show it.',
    case: 'h-migraine', mark: 'H1',
    strip: [
      'There are two groups of 200, and one was given something, a new tablet, while the other was given a {t:placebo}.',
      'A lottery decided who went into which group. Nobody chose.',
      'Both groups were counted the same way, over the same eight weeks.',
      'The groups differ in the result: 4 migraine days a month against 7.',
      'The claim says the tablet is the reason for the difference.'
    ],
    explain: [
      'Every other claim in this unit stops at what the figures show. This one goes further: it says that the tablet is why the groups differ. That step is only safe when nothing but the tablet differs between the groups, and the way to be sure of that is for nobody to have chosen who was in which.',
      'Suppose people had chosen for themselves whether to take the tablet. They might be the ones who take their health most seriously, or the ones with the worst migraines. Then the gap of 3 days a month might come from who they are, and the tablet might have done nothing.',
      'Here a lottery formed the groups. Each of the 400 people had a one in two chance of landing in either group, whatever their age, however bad their migraines and however much they care about their health, so before the tablet the two groups were alike. After eight weeks they differ by 7 − 4 = 3 migraine days a month, so the tablet is the one thing left that was different. The {t:placebo} does a second job: neither group knew which it had, so the hopes of both were the same.',
      'The claim stays inside what the test shows: on average, for people like the ones enrolled, the group given the tablet had fewer migraine days.'
    ],
    feature: { step: 'H1', option: 'causes' },
    act: [
      '1. Find the words that say who decided which group each person or thing went into. A lottery, a coin toss or a computer draw is what you need. "The ones who signed up" or "the ones who chose it" is not.',
      '2. Find how many were in each group and whether both were counted the same way for the same time.',
      '3. If both hold, repeat the cause as the claim states it, for people like those in the test, and no further.'
    ],
    name: 'The name for this is {o:cause_ok}. It is a test because the researchers gave the thing to one group and not to the other. It is fair because a lottery, and not anyone’s choice, formed the groups.' },

  { id: 'check-causeok', kind: 'check', after: 'cause_ok',
    case: 'h-allotment',
    ask: { type: 'option', step: 'H1', among: ['change', 'difference', 'causes'] } },

  { id: 'look-comp-cause', kind: 'lookalike', ledger: 'comp_ok~cause_ok',
    link: 'The last pair of this unit: both show two groups with a gap, and the numbers can be exactly the same. The only difference is what the claim says.',
    cases: ['h-readgroups', 'h-reading-cause'],
    instruction: 'Both cases are about the same school, the same lottery and the same test results. Compare one thing: does the claim stop at which group is ahead, or does it say what made the gap?',
    prompt: { kind: 'which', option: 'H1.causes', answer: 'h-reading-cause' },
    difference: [
      'In Case A the school’s claim gives the two averages, 74 and 62, and says which group is ahead: 74 − 62 = 12 points. It stops there. It says nothing about why. The answer is {a:H1.difference}, and the case is {o:comp_ok}.',
      'In Case B the school ran the same lottery, set the same test and found the same 12 points, and its claim says the reading program raised the scores. It may say that, and the case shows why: names were drawn from a hat, so the students in the program and the students out of it were alike before the program began. The answer is {a:H1.causes}, and the case is {o:cause_ok}.',
      'Everything is the same in both cases except the last sentence. A claim of the first kind never says what made the gap. Two things that look alike can differ in ways nobody can see, and any of those could be why one is ahead. Only a lottery spreads such differences evenly between two groups, so only a claim of the second kind may say what made the gap.'
    ] }
]);
