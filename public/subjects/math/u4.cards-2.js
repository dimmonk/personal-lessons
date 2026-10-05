// Basic Math, Unit Four, part two: the second kind (an amount multiplied by the same number each time, asked for after a given time),
// with the two words it leans on: the number the amount is multiplied by, and a chart that gives equal space to each ten times.
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-multiplier', kind: 'term', term: 'multiplier',
    h: 'What an amount is multiplied by when it goes up 5%',
    link: 'The second kind of problem is about an amount that changes by a percentage, and it needs one word, for the number that does the multiplying. Here it is first, in a situation you can hold in your hands.',
    case: 'm4-wd-novel',
    plain: [
      'A price that goes up 5% becomes 105% of what it was, which is 1.05 times as much. So going up 5% is the same as multiplying by 1.05. Going down 15% leaves 85% of what it was, which is 0.85 times as much, so it is the same as multiplying by 0.85. Doubling is multiplying by 2, and halving is multiplying by 0.5.',
      'To find the number in a problem about a percentage, start from 100%, which is the whole of what you have. Add the percentage if the amount goes up, or take it away if the amount goes down, and write the result as a decimal: 100% + 5% = 105% = 1.05, and 100% − 15% = 85% = 0.85.'
    ],
    after: [
      'Two things to hold on to. A {t:multiplier} above 1 makes the amount bigger and one below 1 makes it smaller. And a percentage change is always a percentage of what the amount is now, which is why it is a multiplication: the {t:multiplier} carries the “of what there is now” inside it.'
    ] },

  /* ---------- The second kind: an amount multiplied each time, asked for after a given time ---------- */
  { id: 'meet-expg', kind: 'meet', outcome: 'expg',
    link: 'The first kind changed the amount by the same number each time. The second kind changes it by the same share of itself each time, and the difference only shows up after a while.',
    case: 'm4-wd-savings', mark: 'G1',
    strip: [
      'There is one amount to follow: the money in the account. It starts at €2,000.',
      'Every year it changes by 4%, and 4% of what? Of what the account holds at that moment. The interest is left in, so next year’s 4% is taken on a bigger amount.',
      'The question gives a time, 3 years, and asks for the amount at the end of it.',
      'The change is a percentage, and not a plain figure.'
    ],
    explain: [
      'What you are shown is one amount that changes by a percentage of itself, every year. In year 1 the interest is 4% of €2,000, which is €80, so the account holds €2,080. In year 2 the interest is 4% of €2,080, which is €83.20, so the account holds €2,163.20. The interest in year 2 is bigger than in year 1, because it is taken on more money. That is the difference from the first kind, in which every change was the same size.',
      'A change that is a percentage of what the amount is now is the same as multiplying the amount by the same number each time. Going up 4% is multiplying by 1.04, because 2,000 × 1.04 = 2,080. So the account is multiplied by 1.04 in year 1, the result is multiplied by 1.04 again in year 2, and again in year 3. That is why the kind is told by “the same number is multiplied each time”, and not by the percentage: the percentage is only how the problem gives the number.',
      'Notice what decides the kind. It is not that the problem says “percent”, or “interest”, or that it is about money. It is that each change is a share of what the amount has reached, so each change comes out bigger than the one before when the amount is growing, and smaller when it is shrinking. A doubling is the same kind: each doubling multiplies by 2. So is an amount that halves, which is multiplied by 0.5 each time.'
    ],
    feature: { step: 'G1', option: 'multiplies' },
    name: 'A problem like this is {o:expg}. The word “exponential” is the mathematician’s word for “by repeated multiplying”: the amount is multiplied again and again, once for each time it changes.' },

  { id: 'again-expg', kind: 'again', outcome: 'expg',
    link: 'The account gave you what to point to: {needs:expg}. Here is a second problem, in a different story, views of a video.',
    first: 'm4-wd-savings', second: 'm4-wd-clip', step: 'G1',
    instruction: 'Find what the two problems share. Ignore the story (an account, a video) and ignore the numbers. Look at one thing only: which words say how the amount changes each time?',
    prompt: { kind: 'phrase', answer: 'the number of views doubles' },
    shared: [
      'Both problems follow one amount, money in an account and views of a video, and in both the amount is multiplied by the same number every time: by 1.04 each year in one and by 2 each day in the other. In neither is the change the same size each time: the account gains more in year 3 than in year 1, and the views gain far more on day 5 than on day 1.',
      'That is all you point to, and it is why one name covers money earning interest and a video spreading. A percentage and a doubling are two ways of giving the number the amount is multiplied by.'
    ] },

  { id: 'portrait-expg', kind: 'portrait', outcome: 'expg',
    link: 'You know what to point to for {o:expg}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One amount, and a change each hour, day, week, month or year that is a percentage of what the amount is then, or a doubling, a tripling or a halving.',
      'The change can make the amount bigger or smaller. Going up 4% multiplies by 1.04, and going down 15% multiplies by 0.85. An amount that shrinks by a share each time is the same kind as one that grows.',
      'Each change is bigger than the one before when the amount grows, and smaller when it shrinks, because it is a share of a bigger or a smaller amount.',
      'The question gives a time and asks what the amount will be by then. When the question gives a target and asks how long, the procedure is a different one; this card is about the question that gives a time.'
    ],
    not: [
      'A percentage in the problem does not by itself make it this kind. If the interest is paid out each year and not left in the account, what is being followed grows by the same number each year, and that is {o:lin}. If a percentage was applied once and never again, nothing is multiplied again and again.',
      'And it is not “fast growth”. A rise that is quick but the same size every time is {o:lin}. What decides this kind is a change that is a share of what there is.'
    ],
    wild: ['“It grows 4% a year.”', '“It doubles every day.”', '“Interest on interest.”', '“It loses 15% of its value each year.”', '“It halves every hour.”', '“It compounds.”'],
    self: 'In your own life you meet this in savings or a debt with interest that stays in, a balance on a credit card, prices that rise by a share each year, the value of a car or a phone that falls by a share each year, and anything that spreads by passing from one person to several.',
    ask: '“Is the amount changing each hour, day, week, month or year by a share of what it has reached, or by doubling or halving?” If you can say yes, and each change is bigger than the one before when the amount grows, you are probably looking at this kind.' },

  { id: 'check-expg', kind: 'check', after: 'expg',
    case: 'm4-wd-dose',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'falls to half of what it was' } },

  /* ---------- A word that the third kind also leans on ---------- */
  { id: 'term-logscale', kind: 'term', term: 'logscale',
    h: 'A chart that gives equal space to each ten times',
    link: 'An amount that is multiplied again and again soon gets too big to draw on an ordinary chart. A chart made for such amounts has a name you may not know. Here it is first, in a situation you can hold in your hands.',
    case: 'm4-wd-museum',
    plain: [
      'On an ordinary chart, equal spaces mean equal amounts: the gridlines might read 0, 10, 20, 30. On this chart, equal spaces mean equal multiples: each gridline is 10 times the one below it, so the labels go 1, 10, 100, 1,000, 10,000. Going up one gridline multiplies by 10. Going up two gridlines multiplies by 10 and then by 10 again, which is 100, and going up three multiplies by 1,000.',
      'The reason for drawing a chart this way is that the numbers on it are very far apart. On an ordinary chart up to 10,000 g, the mouse at 10 g would sit almost on the bottom line, and nothing could be read from it. On this chart the mouse, the hen and every animal between are easy to see.'
    ],
    after: [
      'So a {t:logscale} is a way of drawing repeated multiplying: every gridline up is one more multiplication by 10. A problem that asks how many times bigger one point is than another, or how many gridlines apart two points are, is a problem about an amount that is multiplied by the same number each time, and this unit gives you the procedure for it.',
      'One warning for reading such charts. An amount that is multiplied each time draws as a straight line on a {t:logscale}, so very fast growth can look calm. Check the labels up the side before you judge a chart.'
    ] },

  { id: 'check-expg-last', kind: 'check', after: 'expg', case: 'm4-ck-expg-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-expg-whole', kind: 'check', after: 'expg', case: 'm4-ck-expg-whole', ask: { type: 'solve', solve: 'whole' } }
]);
