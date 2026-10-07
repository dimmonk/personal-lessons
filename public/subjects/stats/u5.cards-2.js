// Statistical Claims, Unit Five, part one (second half): the word "false alarm", and the second name (a test's accuracy read as the chance its yes is right).

FC.cards('stats', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-falsealarm', kind: 'term', term: 'falsealarm',
    h: 'A test that says yes when the answer is no',
    link: 'The next idea rests on a word you may not have met. Start with something you probably have.',
    case: 'alarm-term',
    plain: 'Priya’s smoke alarm said “fire” and there was no fire. The alarm isn’t broken. It is built never to sleep through a real fire, and the price is that it sometimes goes off for toast or steam.',
    after: 'Almost every test or alarm works this way: a medical test, a scanner at an entrance, a fraud alert on a card payment. Each sometimes says yes when the answer is no. Any figure about a test has to be read with that in mind.' },

  /* ---------- Base rate fallacy ---------- */
  { id: 'meet-baserate', kind: 'meet', outcome: 'baserate',
    link: 'The first name was about a change. This one is about a test: a poster says how often a test is right, then reads a yes from it.',
    case: 'base-poster', mark: 'C1',
    explain: [
      '“99% accurate” and “if your test says yes, you almost certainly have it” are two different numbers. To get from the first to the second you need a third that the poster leaves out: how common the condition is among the people tested.',
      'Picture 10,000 people. 100 have the condition, and the test says yes to 99 of them. The other 9,900 don’t have it, and the test wrongly says yes to 1 in every 100 of them: 99 people, each a {t:falsealarm}. That makes 198 yeses, and only 99 are right: half, not 99%.',
      'Nothing is wrong with the test. What goes wrong is reading a yes without knowing how rare the condition is.'
    ],
    spot: [
      { do: 'Find the test and how accurate it is: “99% accurate”.', why: 'That is how often the test is right, and nothing more.' },
      { do: 'Find the yes being read as proof: “you almost certainly have it”.', why: 'The poster treats “right 99 times in 100” as “99% sure”.' },
      { do: 'Ask how common the condition is among the people tested: 1 in 100.', why: 'The rarer it is, the bigger the share of yeses that are wrong.' },
      { do: 'Count it out for 10,000 people: the right yeses against all the yeses.', why: 'Here 99 right yeses out of 198 means a yes is right half the time.' }
    ],
    feature: { step: 'C1', option: 'common' },
    name: 'This is {o:baserate}. The “base rate” is how common the thing is before anyone is tested, and the mistake is leaving it out.',
    act: [
      { do: 'Find out how common the thing is among the people tested.', why: 'The rarer it is, the less a yes means.' },
      { do: 'Count it out for 10,000 people: the right yeses divided by all the yeses.', why: 'That gives the real chance that a yes is right.' },
      { do: 'If the result matters to you, ask for a second test before you decide anything.', why: 'A second yes tells you far more than the first.' }
    ] },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'base-gate',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common'] } }
]);
