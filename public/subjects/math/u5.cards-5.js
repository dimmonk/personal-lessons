// Basic Math, Unit Five, part five: the fifth kind (how far to trust a test result).
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-baserate', kind: 'meet', outcome: 'baserate',
    link: 'The fourth kind found the chance of something that is still to happen. The fifth kind asks for a chance after the event: a test has already given a result, and the question is how far to trust it.',
    case: 'm5-wd-clinic', mark: 'C1',
    strip: [
      'A test has given a result: this person’s test shows the skin condition.',
      'The condition is rare in the village: 1 person in 50 has it.',
      'The test is not perfect: it shows the condition in 90% of the people who have it, and it wrongly shows it in 5% of the people who do not.',
      'The question asks how likely it is that the result is right: that this person really has the condition.'
    ],
    explain: [
      'It is tempting to answer “90%”, because the test finds the condition in 90% of the people who have it. But that is the chance of a positive result for someone who has the condition. The question is the other way round: the chance of having the condition for someone who has a positive result.',
      'Chances like these are hard to combine in your head, but counts of people are easy, so imagine the whole village of 1,000 people and count them. 1 person in 50 has the condition: that is 20 people, and the other 980 do not. The test shows the condition in 90% of the 20 who have it, which is 18 people. It also shows the condition, wrongly, in 5% of the 980 who do not have it: 49 people.',
      'Now look at everyone whose test shows the condition: 18 + 49 = 67 people. Only 18 of them really have it. So a person whose test shows the condition has it with a chance of 18 out of 67, which is about 27%, and not 90%. 980 people do not have the condition, so even a small rate of wrong results, 5%, makes 49 wrong ones, far more than the 18 right ones. If the thing were common, most of the positive results would be right.'
    ],
    feature: { step: 'C1', option: 'test' },
    name: 'A problem like this is {o:baserate}. The name is for how common the thing is in the group before anyone is tested: here 1 in 50. It is the number people forget, and the whole answer depends on it.' },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'm5-wd-alarm',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say how often the sensor is right and how often it is wrong? Tap them.',
           answer: 'The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one' } }
]);
