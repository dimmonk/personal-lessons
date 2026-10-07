// Basic Math, Unit Five, part five: the fifth kind (how far to trust a test result).
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-baserate', kind: 'meet', outcome: 'baserate',
    link: 'This one asks for a chance after the event: a test has already given its result, and you ask how far to trust it.',
    case: 'm5-wd-clinic', mark: 'C1',
    explain: [
      'It is tempting to say 90%. But 90% is how often the test is positive for someone who has the condition. The question runs the other way: how often does someone with a positive test have it?',
      'Chances are hard to mix in your head, so count people instead. Of 1,000 villagers, 20 have the condition and 980 do not. The test is positive for 18 of the 20 (90%), and wrongly for 49 of the 980 (5%). That is 67 positive tests, and only 18 of them are real: 18 ÷ 67, about 27%.',
      'The condition is rare, so the 980 healthy people make far more wrong positives than the 20 sick people make right ones. If the condition were common, most positive tests would be right.'
    ],
    spot: [
      { do: 'Find the result that has already come in: this person’s test shows the condition.', why: 'The test has been done, and you are reading it.' },
      { do: 'Find how rare the thing is: 1 person in 50 has it.', why: 'This is the number people forget, and the answer depends on it.' },
      { do: 'Find how often the test is wrong: it flags 5% of the people who do not have it.', why: 'Healthy people are the majority, so even a small error rate is a lot of people.' },
      { do: 'Check the question asks how far to trust the result: how likely is it that the person has it?', why: 'It starts from the positive test, not from the people who have the condition.' }
    ],
    feature: { step: 'C1', option: 'test' },
    name: 'This is {o:baserate}. The name is how common the thing is before anyone is tested: here 1 in 50.' },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'm5-wd-alarm',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say how often the sensor is right and how often it is wrong? Tap them.',
           answer: 'The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one' } }
]);
