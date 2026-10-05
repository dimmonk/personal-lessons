// Statistical Claims, Unit Five, part two: the word "false alarm", and the second name (a test's accuracy read as the chance its yes is right).

FC.cards('stats', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-falsealarm', kind: 'term', term: 'falsealarm',
    h: 'A test that says yes when the answer is no',
    link: 'The second name rests on a word you may not have met. Start with something you probably have.',
    case: 'alarm-term',
    plain: [
      'Priya’s smoke alarm said "fire" and there was no fire. The alarm is not broken. It is a good alarm, and it is made so that it will never sleep through a real fire. The price of that is that it sometimes goes off when there is no fire at all: for toast, or for steam.',
      'Almost every test or alarm works like this. A test for an illness, a scanner at an entrance, a fraud alarm on a card payment: each is made to catch the real thing, and each also says yes now and then when the real thing is not there.'
    ],
    after: 'A tester is not trying to be wrong. Every test that is not perfect says yes to some people who do not have the thing, and any figure about a test has to be read with that in mind.' },

  /* ---------- Base rate fallacy ---------- */
  { id: 'meet-baserate', kind: 'meet', outcome: 'baserate',
    link: 'The first name was about a change. The second is about a test: the claim gives how often a test is right, and then reads a yes from it.',
    case: 'base-poster', mark: 'C1',
    strip: [
      'There is a test, and a figure for it: 99% accurate. In this unit, accurate means right 99 times in 100: the test says yes for 99 of every 100 people who have the condition, and no for 99 of every 100 who do not.',
      'There is a yes from the test.',
      'The poster reads the 99% as the chance that the yes is right: "you almost certainly have it".',
      'The condition is rare: about 1 person in 100 has it, and the poster does not mention that.'
    ],
    explain: [
      '"99% accurate" and "if it says yes, you almost certainly have it" are two different numbers. The first answers this: of the people the test is run on, how often is it right? The second answers this: of the people the test says yes to, how many really have the condition? To get from the first number to the second you need one more number, which the poster leaves out: how many of the people tested have the condition at all.',
      'Count it out. Take 10,000 people through the test. About 1 in every 100 has the condition, so 100 of them have it and 9,900 do not.',
      'Of the 100 who have it, the test says yes to 99 and misses 1.',
      'Of the 9,900 who do not have it, the test is wrong for 1 in every 100, so it says yes to 99 of them. Each of those 99 is a {t:falsealarm}.',
      'So the test says yes to 99 + 99 = 198 people, and only 99 of those 198 have the condition. If your test says yes, the chance that you have it is 99 out of 198. That is half, and not 99%.',
      'The reason is the 9,900. The people without the condition are so many that even a small share of mistakes, 1 in 100, gives as many mistaken yeses as there are real yeses. The number that decided it was how common the condition is among the people tested, and the poster left it out.',
      'Notice that nothing was wrong with the test. It is right 99 times in 100, exactly as the poster says. What went wrong is the reading of a yes.'
    ],
    feature: { step: 'C1', option: 'common' },
    name: [
      'The name for this is {o:baserate}. "Base rate" means how common the thing is among the people tested, before anyone is tested. A "fallacy" is a mistake in reasoning that feels like a sound argument, and this one feels very sound, because 99% sounds like near certainty.',
      'The mistake is leaving out how common the thing is.'
    ] },

  { id: 'again-baserate', kind: 'again', outcome: 'baserate',
    link: 'The skin test poster gave you what to point to, from one case: {needs:baserate}. Here is a second case with no illness in it at all.',
    first: 'base-poster', second: 'base-fraud', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a skin test, a bank) and the size of the accuracy. Look at one thing only: how the speaker reads a yes from something that is usually right.',
    prompt: { kind: 'phrase', answer: 'when it goes off on your card payment, it is fraud 98% of the time' },
    shared: [
      'Both speakers have a test or an alarm that is right most of the time, both read a yes from it, and both treat how often it is right as the chance that this yes is right.',
      'Count out the bank. Take 100,000 card payments. Only 1 in 1,000 is fraud, so 100 are fraud and 99,900 are fine. The alarm is right 98 times in 100. Of the 100 frauds it flags 98. Of the 99,900 fine payments it flags 2 in every 100: 1,998. So the alarm goes off on 98 + 1,998 = 2,096 payments, and only 98 of them are fraud. When it goes off on your payment, the chance that it is fraud is 98 out of 2,096, about 5 in 100. About 95 of every 100 payments it flags are fine.',
      'The manager said 98 in 100, and the count says about 5 in 100. The two stories share nothing else: one is a skin condition that 1 person in 100 has, the other is a fraud that 1 payment in 1,000 is. The rarer the thing, the further the chance that a yes is right falls below the accuracy. It holds wherever a test or an alarm that is usually right is read as if a yes from it were right just as often. That is what {o:baserate} names.'
    ] },

  { id: 'portrait-baserate', kind: 'portrait', outcome: 'baserate',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:baserate} in real life, where nobody marks the words for you.',
    typical: [
      'There is a test, an alarm or a scanner: something that says yes or no about each person or thing it is run on. A fraud alarm, a drug test, a scanner at an entrance, a medical screening test.',
      'It comes with a figure for how often it is right: "99% accurate", "right 95 times in 100", "catches 98 in 100".',
      'A yes from it is then read as being right just as often as the test is. The words are about the person in front of you: "so you almost certainly have it", "so it is fraud", "so he is carrying something".',
      'The thing it looks for is rare among the people it is run on. That is what makes the reading wrong: when most of the people tested do not have the thing, even a small share of mistaken yeses is a large number of people.',
      'The test itself is usually fine. It may be right 99 times in 100, exactly as claimed. The mistake is in how the yes is read, and not in the test.',
      'The mistake is easiest to make when the result is frightening: a yes about an illness, a flag on your account. A frightening result is read quickly and counted slowly.'
    ],
    not: 'A test with a high accuracy is not a problem, and a yes from it is not worthless. In the skin test a yes moves the chance that you have the condition from 1 in 100 to 1 in 2, which is a long way. It just does not move it as far as the accuracy suggests. And when the thing is common among the people tested, a yes from a good test is mostly right, and the claim is fine. The name applies when the reading leaves out how common the thing is, and the thing is rare.',
    wild: ['"The test is 99% accurate, so you have it."', '"The alarm never lies."', '"It beeped, so he is guilty."', '"The scanner caught him, and it is right 95 times in 100."', '"The screening says yes, and these tests are very reliable."'],
    self: 'In your own life it is the alert on your phone, the result on a home test, or the flag on your card. When one comes up, the first thing you feel is the accuracy. The question to ask is how many people who are not in trouble get the same alert.',
    ask: '"How many of the people this is run on really have the thing, and how many of the rest would the test wrongly say yes to?" If you can count it out for 10,000 people, you can read the yes.',
    act: [
      'First, do not read a yes from a usually-right test as being right just as often. A yes is not yet an answer.',
      'Second, find out how common the thing is among the people the test is run on: 1 in 100, 1 in 1,000, 1 in 20,000.',
      'Third, count it out for 10,000 people: how many have the thing, how many of those the test catches, and how many of the rest it flags by mistake. The chance that a yes is right is the right yeses divided by all the yeses.',
      'Fourth, if the result is yours and it matters, ask for a second test, run in a different way, before you decide anything. A second yes is much less likely to be a {t:falsealarm}.'
    ] },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'base-gate',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common'] } },

  /* ---------- The near-miss: a percentage built on a handful ---------- */
  { id: 'exc-handful', kind: 'exception', looksLike: 'relrisk', is: 'smalln', ledger: 'relrisk~smalln',
    h: 'A headline percentage built on a handful',
    link: 'You now know what a percentage with no counts looks like. Some claims give a big percentage and the counts as well. This card shows one in which the counts are given, and they change what you should say first.',
    case: 'exc-shop',
    setup: 'The shop owner’s post gives a percentage, up 300%, and a percentage is what you point to for {o:relrisk}. Yet this case is {o:smalln}.',
    prompt: { kind: 'phrase', answer: 'one theft last month and four this month' },
    because: [
      'Ask what the percentage is built on. The log gives it: one theft last month and four this month. The sum is right: the change is 3, and 3 divided by 1 is 3, which is 300%. The percentage is not wrong. But it rests on a handful: one theft, then four.',
      'With so few, one theft more or fewer moves the percentage a long way. If next month there are two thefts, the same owner could post "down 50%", and nothing about shoplifting would have changed. The figure is so small that luck alone can move it.',
      'So the answer is {a:S1.counted}, and the name is {o:smalln}. The questions ask about the people or things in the figure before they ask what the figure is set beside, because everything after rests on them. The claim does also leave out what the figure should be set beside, but that is not the first thing wrong.'
    ],
    take: 'This order is a choice made to keep the answers clear, and it is worth knowing that it is. In real life the two overlap: a percentage with no counts is the very thing that hides how few there are. Each case gets one name, by the earliest part you can point to, so that two people using these questions reach the same answer and can each say why. Here you can point to how few there are.' }
]);
