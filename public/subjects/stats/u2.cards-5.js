// Statistical Claims, Unit Two, part two (second half): the word the fourth name leans on, the fourth name, its look-alike pair and
// exception, and the wrong idea that a fair comparison shows why.

FC.cards('stats', 'u2', [

  { id: 'term-placebo', kind: 'term', term: 'placebo',
    h: 'A dummy that makes both groups go through the same thing',
    link: 'The first three names stopped short of saying why. The fourth is the one kind of claim that may say why, and the tests behind it often use a word you have not met.',
    case: 'h-t-dummy',
    plain: [
      'The case is a test of a cold remedy, and the second group got a dummy tablet instead of nothing. Why not simply give nothing to the second group? Because people who know they have been given a remedy often feel better, or say they do, and people who know they have been given nothing often do not. A dummy tablet puts both groups through the same thing, so that the only difference left between them is the medicine.',
      'Not every test has a dummy. A bank that texts a reminder to some customers has no dummy text to send, and a school that tries a new way of teaching reading has no dummy way of teaching it. There the second group simply gets the usual. What matters in every such test is that the two groups differ in one thing only: one has the thing, and the other does not.'
    ],
    after: [
      'From here on, {t:placebo} always means a dummy of this kind, made to look like the real thing. Nothing else is called one.'
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
      'Suppose people had chosen for themselves whether to take the tablet. People who choose a tablet for migraines might be the ones who take their health most seriously, or the ones with the worst migraines, or the ones who can afford it. Then the gap of 3 days a month might come from who they are, and the tablet might have done nothing. If a person’s own choice decides which group they are in, the groups differ in the person, as well as in the tablet.',
      'Here a lottery formed the groups. Each of the 400 people had 200 chances in 400, one in two, of landing in either group, whatever their age, however bad their migraines and however much they care about their health. With a few hundred in each group, a lottery spreads those things about evenly between the two, so that before the tablet the two groups were alike. After eight weeks they differ by 7 − 4 = 3 migraine days a month, so the tablet is the one thing left that was different. The {t:placebo} does a second job: neither group knew which it had, so the hopes of both were the same.',
      'Luck can still make two groups differ a little, which is why such a test needs enough people in each group; here there are 200. And the claim stays inside what the test shows: on average, for people like the ones enrolled, the group given the tablet had fewer migraine days.'
    ],
    feature: { step: 'H1', option: 'causes' },
    name: 'The name for this is {o:cause_ok}. It is a test because the researchers gave the thing to one group and not to the other. It is fair because a lottery, and not anyone’s choice, formed the groups.' },

  { id: 'again-causeok', kind: 'again', outcome: 'cause_ok',
    link: 'The migraine test gave you what to point to: {needs:cause_ok}. Here is a second case with a completely different story, and this time there is no tablet and no {t:placebo}.',
    first: 'h-migraine', second: 'h-reminder', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the story (a tablet, a bank). Look at one thing only: {q:H1}',
    prompt: { kind: 'phrase', answer: 'The text reminder made more customers pay: 62 in 100 against 54 in 100' },
    shared: [
      'In both cases a lottery split the people into two groups, one was given a thing and the other was not, both were counted the same way afterwards, and the claim says the thing made the difference. At the bank, 3,100 of 5,000 who got the text paid, which is 62 in 100, and 2,700 of 5,000 who did not, which is 54 in 100. The gap is 62 − 54 = 8 in 100.',
      'The two stories share nothing else. So this is not about migraines or about loans, and the thing given need not be a medicine: it can be a text message. It holds wherever a lottery formed the groups, one was given the thing, and the claim says the thing made the gap. That is what {o:cause_ok} names.'
    ] },

  { id: 'portrait-causeok', kind: 'portrait', outcome: 'cause_ok',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:cause_ok}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'The people or things were split into groups by a lottery, a coin toss or a computer draw. The words that say so are what you point to: "drew names", "randomly assigned", "a coin decided".',
      'One group was given the thing and the other was not. Where there is a {t:placebo}, the claim says so. Where there is not, the second group got the usual.',
      'Both groups were counted the same way afterwards, for the same stretch of time, and the numbers for each group are given.',
      'The claim names the gap and says what made it, and it keeps to the average: the group given the tablet had fewer migraine days on average, which is not the same as every person having fewer.',
      'The test can show that something did not work, too. A trial that finds no gap between its groups is {o:cause_ok} as well, and then the claim says the thing made no difference.'
    ],
    not: [
      'A claim that something works is not therefore {o:cause_ok}. Groups that people chose for themselves are not formed by a lottery, however large the numbers and however big the gap. A claim of the first kind with no words about a lottery has not earned the name.',
      'And a gap between groups that the claim leaves at "which is ahead" is {o:comp_ok}, even if a lottery formed the groups. The name {o:cause_ok} is for the claim that says what made the gap.'
    ],
    wild: ['"A computer split them into two groups by lottery."', '"We drew names from a hat to decide which classrooms got the program."', '"Half got the new tablet and half got a dummy, and nobody knew which."', '"Neither group knew which it was in."'],
    self: 'In your own life you meet it in news reports about medicines, in reports of a school or a company trying something on a few of its people before using it on all, and in anything that says "randomized". An ad that says a product was "tested" and does not say how the groups were formed has not told you this.',
    ask: '"Who decided which group each person or thing was in? If it was a lottery, and both groups were counted the same way, what is the gap, and does the claim go beyond it?"',
    act: [
      '1. Find the words that say who decided which group each person or thing went into. A lottery, a coin toss or a computer draw is what you need. "The ones who signed up" or "the ones who chose it" is not.',
      '2. Find how many were in each group and whether both were counted the same way for the same time.',
      '3. If both hold, repeat the cause as the claim states it, for people like those in the test, and no further. Do not stretch it to people the test did not include.'
    ] },

  { id: 'check-causeok', kind: 'check', after: 'cause_ok',
    case: 'h-allotment',
    ask: { type: 'option', step: 'H1', among: ['change', 'difference', 'causes'] } },

  { id: 'look-comp-cause', kind: 'lookalike', ledger: 'comp_ok~cause_ok',
    link: 'The last pair of this unit: both show two groups with a gap, and the numbers can be exactly the same. The only difference is what the claim says.',
    cases: ['h-readgroups', 'h-reading-cause'],
    instruction: 'Both cases are about the same school, the same lottery and the same test results. Compare one thing: does the claim stop at which group is ahead, or does it say what made the gap?',
    prompt: { kind: 'which', option: 'H1.causes', answer: 'h-reading-cause' },
    difference: [
      'In Case A the school’s claim gives the two averages, 74 and 62, and says which group is ahead: 74 − 62 = 12 points. It stops there. It says nothing about why. The key’s answer is {a:H1.difference}, and the case is {o:comp_ok}.',
      'In Case B the school ran the same lottery, set the same test and found the same 12 points, and its claim says the reading program raised the scores. It may say that, and the case shows why: names were drawn from a hat, so the pupils in the program and the pupils out of it were alike before the program began. The key’s answer is {a:H1.causes}, and the case is {o:cause_ok}.',
      'Everything is the same in both cases except the last sentence. A claim of the first kind never says what made the gap, however the groups were formed. A claim of the second kind may say it only because of the lottery. The lottery is in both cases. Which name applies depends on what the claim says.'
    ] },

  { id: 'exc-stops', kind: 'exception', looksLike: 'cause_ok', is: 'comp_ok', ledger: 'comp_ok~cause_ok',
    h: 'A story that hints at a cause the claim does not make',
    link: 'The last card separated the pair with two tidy cases. A story can also hint at a cause while the claim never says it, and a reader fills the cause in without being told.',
    case: 'h-towns',
    setup: 'This case has a program that one town started and the other did not, and two groups with a gap between them. That is what {o:cause_ok} looks like. Yet this case is {o:comp_ok}.',
    prompt: { kind: 'phrase', answer: 'Households in Marlow threw away less garbage than households in Ashby: 410 kilograms against 470' },
    because: [
      'Ask what the claim says, not what the story suggests. The claim stops at which town is lower: 410 kilograms against 470, a gap of 60. It does not say that the pickup did it.',
      'For {o:cause_ok} you must be able to point to this: {needs:cause_ok}. Nothing in the case says anyone formed the two towns by lottery, and no one could. The towns differ in many ways besides the pickup. The claim wisely does not say more than the figures can carry, and what they carry is {o:comp_ok}.'
    ],
    take: 'The story is where the cause comes from, and your own mind supplies it. That is the thing to guard against: go by what the claim says. If the report had said "the pickup cut garbage by 60 kilograms", it would be a claim of cause with no lottery behind it, and the key’s first question would not give {a:S1.holds} for it.' },

  { id: 'refute-comparison', kind: 'refute', about: 'comp_ok',
    h: 'A wrong idea: "{o:comp_ok} shows why"',
    link: 'You have seen that {o:comp_ok} and {o:cause_ok} can have the same numbers. The wrong idea that follows from learning that a comparison can be fair is worth answering in full.',
    idea: '"The two figures are fair and the numbers are all given, so whatever one town did must be why it is lower."',
    verdict: 'This is wrong.',
    right: [
      '{o:comp_ok} earns one thing: that the two things differ, and by how much. It does not earn a reason. Even when two things are alike in every way you can see, they can differ in ways you cannot, and any of those could be why one is ahead. A free pickup in Marlow is one difference between the two towns, and it may be the reason for the 60 kilograms. Or Marlow may be a town of households that already threw away less, and the pickup did nothing.',
      'Only one thing spreads the unseen differences evenly between two groups: a lottery. When a lottery formed the groups, nothing else is likelier to be in one than in the other, and then the gap can be put down to what one group was given. That is why the fourth name needs the words about a lottery, and why the third name does not allow a reason at all.',
      'So the question is never whether a comparison is fair, and then why. Ask what the claim says. If it stops at which is ahead, it holds, and you may repeat that and no more. If it says what made the gap, look for who decided which group each was in.'
    ],
    testedBy: ['claim-towns'] }
]);
