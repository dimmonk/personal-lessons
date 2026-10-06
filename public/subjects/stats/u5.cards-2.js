// Statistical Claims, Unit Five, part one (second half): the word "false alarm", and the second name (a test's accuracy read as the chance its yes is right).

FC.cards('stats', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-falsealarm', kind: 'term', term: 'falsealarm',
    h: 'A test that says yes when the answer is no',
    link: 'The second name rests on a word you may not have met. Start with something you probably have.',
    case: 'alarm-term',
    plain: 'Priya’s smoke alarm said "fire" and there was no fire. The alarm is not broken. It is made so that it will never sleep through a real fire, and the price is that it sometimes goes off for toast or steam.',
    after: 'Almost every test or alarm works like this: a test for an illness, a scanner at an entrance, a fraud alarm on a card payment. Each says yes to some people or things that do not have what it looks for, and any figure about a test has to be read with that in mind.' },

  /* ---------- Base rate fallacy ---------- */
  { id: 'meet-baserate', kind: 'meet', outcome: 'baserate',
    link: 'The first name was about a change. The second is about a test: the claim gives how often a test is right, and then reads a yes from it.',
    case: 'base-poster', mark: 'C1',
    strip: [
      'There is a test, and a figure for it: 99% accurate, which here means right 99 times in 100.',
      'The poster reads that as the chance that a yes is right: "you almost certainly have it".',
      'The condition is rare: about 1 person in 100 has it, and the poster does not mention that.'
    ],
    explain: [
      '"99% accurate" and "if it says yes, you almost certainly have it" are two different numbers. To get from the first to the second you need one more, which the poster leaves out: how common the condition is among the people tested.',
      'Take 10,000 people. 100 have the condition, and the test says yes to 99 of them. The other 9,900 do not, and the test wrongly says yes to 1 in every 100 of them: 99 people, each a {t:falsealarm}.',
      'So the test says yes to 198 people, and only 99 of them have the condition. A yes is right 99 times in 198: half, and not 99%. Nothing is wrong with the test. What went wrong is reading a yes without knowing how rare the condition is.'
    ],
    feature: { step: 'C1', option: 'common' },
    name: 'The name for this is {o:baserate}. "Base rate" means how common the thing is among the people tested, before anyone is tested, and the mistake is leaving it out.',
    act: 'Do not read a yes from a usually-right test as being right just as often. Find out how common the thing is among the people tested, then count it out for 10,000 people: the right yeses divided by all the yeses. If the result is yours and it matters, ask for a second test before you decide anything.' },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'base-gate',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common'] } }
]);
