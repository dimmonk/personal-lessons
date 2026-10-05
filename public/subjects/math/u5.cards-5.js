// Basic Math, Unit Five, part five: the fifth kind (how far to trust a test result), the look-alike card that sets it beside the fourth
// kind, and the wrong idea that a 95% accurate test means a 95% chance of having the thing.
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  /* ---------- The fifth kind: how far to trust a test result ---------- */
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
      'What you are shown is a chance that has to be worked out after something has happened. A positive result has come in, and it is tempting to answer “90%”, because the test finds the condition in 90% of the people who have it. But that is a different question. It is the chance of a positive result for someone who has the condition. The question asked is the other way round: the chance of having the condition for someone who has a positive result.',
      'Chances like these are hard to combine in your head, but counts of people are easy, so imagine the whole village of 1,000 people and count them. 1 person in 50 has the condition: that is 20 people, and the other 980 do not. The test shows the condition in 90% of the 20 who have it, which is 18 people. It also shows the condition, wrongly, in 5% of the 980 who do not have it: 49 people.',
      'Now look at everyone whose test shows the condition: 18 + 49 = 67 people. Only 18 of them really have it. So a person whose test shows the condition has it with a chance of 18 out of 67, which is about 27%, and not 90%. The reason is in the numbers. 980 people do not have the condition, so even a small rate of wrong results, 5%, makes 49 wrong ones, and that is far more than the 18 right ones.',
      'Two things decide this kind. The problem gives a result that a test has already given, and how often the test is right and wrong. And it gives how rare the thing is, which is what makes the right results few compared with the wrong ones. If the thing were common, most of the positive results would be right.'
    ],
    feature: { step: 'C1', option: 'test' },
    name: 'A problem like this is {o:baserate}. The name is for how common the thing is in the group before anyone is tested: here 1 in 50. It is the number people forget, and the whole answer depends on it.' },

  { id: 'again-baserate', kind: 'again', outcome: 'baserate',
    link: 'The clinic gave you what to point to: {needs:baserate}. Here is a second problem with a different story, a scanner at a stadium door.',
    first: 'm5-wd-clinic', second: 'm5-wd-scanner', step: 'C1',
    instruction: 'Find what the two problems share. Ignore the story (a village clinic, a stadium door) and ignore the numbers. Look at one thing only: which words say how often the test is right and how often it is wrong?',
    prompt: { kind: 'phrase', answer: 'flags 98 of every 100 bags that hold one, and 3 of every 100 that do not' },
    shared: [
      'Both problems have a test that has already given a result, a clinic test and a scanner flag. Both say how often the test is right and how often it is wrong. Both say how rare the thing is, 1 person in 50 and 1 bag in 200. And both ask how likely it is that the result is right, which is not the same as how often the test is right.',
      'That is all you point to, and it is why one name covers a clinic and a stadium. The stories differ. What is given, and what is asked, is the same.'
    ] },

  { id: 'portrait-baserate', kind: 'portrait', outcome: 'baserate',
    link: 'You know what to point to for {o:baserate}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A test, scan, alarm, filter or check that has given a result, usually a positive one.',
      'How rare the thing is: 1 in 50, or 1 in 1,000. Often this is the number the story stresses least.',
      'Two rates for the test: how often it finds the thing when the thing is there, and how often it gives a result when the thing is not there. Sometimes they are given together as “99% accurate”, and then it is worth asking what the 99% is a share of.',
      'The question asks how likely it is that the result is right: that the person has the illness, that the bag holds the item, that the payment is a fraud.',
      'The working imagines a large group, counts the right results and the wrong results, and divides the right ones by all of them.'
    ],
    not: [
      'A test is not enough. If the problem asks how likely it is that one or more of a set of separate things happens, it is the fourth kind. Here there is one result that has come in, and the question is how far to trust it.',
      'And “accurate” is not the answer. How often a test is right about people who have the thing is not how likely a positive result is to be right. The two can be far apart when the thing is rare.'
    ],
    wild: ['"The test says positive. How worried should I be?"', '"It is 99% accurate."', '"How likely is it that it is a real one?"', '"What are the odds that this alert is genuine?"'],
    self: 'In your own life you meet this with medical tests and screening, with a bank or shop alert, with a spam filter, a smoke alarm or a security scan: anything that raises a flag among many cases when real ones are rare.',
    ask: '"Has a flag or a result come in, is the thing it looks for rare, does the test sometimes get it wrong, and is the question how far to trust the flag?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-baserate', kind: 'check', after: 'baserate',
    case: 'm5-wd-alarm',
    ask: { type: 'phrase', step: 'C1', say: 'Which words say how often the sensor is right and how often it is wrong? Tap them.',
           answer: 'The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one' } },

  { id: 'check-baserate-last', kind: 'check', after: 'baserate', case: 'm5-ck-br-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-baserate-whole', kind: 'check', after: 'baserate', case: 'm5-ck-br-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: at least one of several things, or one result to trust ---------- */
  { id: 'look-complement-baserate', kind: 'lookalike', ledger: 'complement~baserate',
    link: 'The fourth and fifth kinds both ask for a chance, and both can be about a machine with sensors. This card puts them side by side, with the same machine.',
    cases: ['m5-la-sensors-cm', 'm5-la-sensors-br'],
    instruction: 'Both problems are about the same machine and its sensors. Compare one thing: does the problem ask how likely it is that one or more of a set of things happens, or how likely it is that one result is right?',
    prompt: { kind: 'which', option: 'C1.test', answer: 'm5-la-sensors-br' },
    difference: [
      'In Case A there are 3 separate sensors, each of which catches a fault with a chance of 90%, and the question is how likely it is that at least one catches it. The chance that none of them catches it is 0.1 × 0.1 × 0.1 = 0.001, so the chance that at least one does is 1 − 0.001 = 0.999. The answer is {a:C1.atleast}.',
      'In Case B there is one sensor that has flagged a part, and the question is how likely it is that the part is really faulty. Faulty parts are rare, 1 in 100, and the sensor sometimes flags a sound part. In a group of 10,000 parts, 100 are faulty and the sensor flags 90 of them. It also flags 5% of the 9,900 sound ones, which is 495. So 90 of the 585 flagged parts are faulty, a chance of about 15%. The answer is {a:C1.test}.',
      'Both are about chances, and both have a sensor that does the right thing 90% of the time. What differs is what is asked. In Case A the 90% is the chance for each of several sensors, and the question asks about all of them together. In Case B there is one sensor, the 90% is how often it flags a faulty part, and the question asks how far to trust a single flag.'
    ] },

  /* ---------- A wrong idea: a 95% accurate test means a 95% chance ---------- */
  { id: 'refute-test', kind: 'refute', about: 'baserate',
    h: 'A wrong idea: a 95% accurate test means a 95% chance that I have it',
    link: 'This is the idea that the last kind of problem exists to correct, and it is worth putting in so many words, because people say it of every kind of test.',
    idea: '"The test is 95% accurate and mine came back positive, so there is a 95% chance that I have it."',
    verdict: 'This is wrong.',
    right: [
      'The 95% is a share of the people who have the thing: the test finds it in 95 of every 100 of them. The chance in the idea is a share of the people who have a positive result: of the people whose test is positive, how many have the thing? Those are shares of two different groups, and nothing makes them equal.',
      'How far apart they are depends on how rare the thing is. Imagine a thing that 1 person in 1,000 has, and a test that finds it in 95 of every 100 people who have it and wrongly shows it in 5 of every 100 who do not. In 100,000 people, 100 have it, and the test finds it in 95 of them. The other 99,900 are tested too, and the test wrongly shows it in 4,995 of them. Of the 5,090 positive results, only 95 are right, which is about 2%. A 95% accurate test, and a positive result that is right about 2 times in 100.',
      'So when a result comes in, three things decide how far to trust it: how often the test finds the thing, how often it gives a result when the thing is not there, and how rare the thing is. The procedure for this kind counts all three in a large imagined group. Leave out how rare the thing is, and the 95% and the real answer can be more than 40 times apart.'
    ],
    testedBy: ['m5-dr-br-3'] }
]);
