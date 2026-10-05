// Statistical Claims, Unit Two, part one (second half of the first name): how far luck can move a figure, what the first name is like, a check,
// and the wrong idea that a few people cannot speak for a great many.

FC.cards('stats', 'u2', [

  { id: 'term-margin', kind: 'term', term: 'margin',
    h: 'How far luck can move a figure',
    link: 'A {t:sample} drawn {t:atrandom} does not lean, but it can still be off by luck. Honest claims say how far, and the way they say it has a name.',
    case: 'h-t-poll',
    plain: [
      'Two polling firms each did everything right. Each drew 1,000 adults by lottery from a list of every adult in the city, and each heard from nearly all of them. One firm found 52 in 100 approving of the mayor, and the other found 49 in 100. Neither made a mistake. The lottery chose different 1,000 people each time, and luck made each group a little different from the city, and from each other.',
      'So any figure worked out from a few people is a little off from the figure for the whole group, and the reason is luck, not carelessness. Being careful cannot remove it. Only more people can make it smaller.',
      'The size of the luck can be estimated. Here is a rough guide, good for shares between about 20 and 80 in 100: divide 1 by the square root of the number of people. The square root of 1,000 is about 32, because 32 × 32 is 1,024. Then 1 ÷ 32 is about 0.03, which is 3 points. So a firm with 1,000 people says "52 in 100, give or take 3 points", and means that the figure for the whole city is very likely between 49 and 55.',
      'The same sum for other group sizes. 100 people: the square root of 100 is 10, and 1 ÷ 10 = 0.10, so 10 points. 400 people: the square root is 20, and 1 ÷ 20 = 0.05, so 5 points. 10,000 people: the square root is 100, and 1 ÷ 100 = 0.01, so 1 point. Ten times as many people shrinks the margin only about three times, not ten.'
    ],
    after: [
      'Two things to carry from this. First, the margin covers only the luck of a fair draw. If the people were chosen badly, the margin does not warn you: a badly chosen group of 1,000 has the same margin, and its figure can be far off. Second, the size of the whole city does not appear in the sum. The same 1,000 people give the same margin whether the city has 300,000 adults or 3 million.'
    ] },

  { id: 'portrait-sampok', kind: 'portrait', outcome: 'samp_ok',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:samp_ok} in real life, where nobody marks the words for you.',
    typical: [
      'The words about how the people were chosen come with the figure, and they are specific: a lottery from a full list, a call tried five times, a visit to the ones who did not answer. A claim that holds has nothing to hide about how it was made, and it usually says how.',
      'Most of those chosen are in the figure. If 920 of 1,000 chosen answered, the 80 missing could move the figure by at most 80 ÷ 1,000 = 8 points. If 90 of 1,000 answered, the 910 missing could move it by up to 910 ÷ 1,000, which is 91 points: almost anywhere. A claim of this kind leaves nothing like that open.',
      'It says how big its luck is: "give or take 3 points". A claim that holds does not pretend the figure is exact. When it gives a {t:margin}, you can use the guide you have just met to check it: 1,380 people gives about 1 ÷ 37, which is 3 points.',
      'It speaks only for the group the figure was worked out from: "our card holders", and not "everyone in town". A figure about one group is not a figure about a bigger one.',
      'It says nothing about change, difference or cause. It gives the figure and stops.'
    ],
    not: [
      'A figure from a large number of people is not thereby {o:samp_ok}. What makes it one is how the people were chosen and how many of those chosen are in the figure, not how many there are. A figure from 100,000 people who chose to answer a website poll is not a fair picture of anything.',
      'And a figure from a small share of a big group can be {o:samp_ok}. 1,380 of 90,000 is under 2 in 100 of the card holders (1,380 ÷ 90,000 = 0.015), and the figure still holds, because the draw was fair and nearly everyone drawn is in it.'
    ],
    wild: ['"We drew 1,500 card numbers by lottery and heard from 1,380."', '"Of 1,000 adults picked at random, 31% smoke, give or take 3 points."', '"We phoned everyone who did not reply, and reached 9 in 10."', '"Every customer on the list was emailed, and 92% answered."'],
    self: 'In your own life it is a poll, a survey or a company’s figure about its own customers that tells you how it chose the people, how many answered and how big a margin it allows. Claims that say all three are rarer than they should be, and they are the ones to rely on most.',
    ask: '"How were the people in this figure chosen, how many of those chosen are in it, and does the claim say anything beyond the figure for them?"',
    act: [
      '1. Find the sentence that says how the people were chosen. A lottery from a full list is what you want. If you cannot find one, you do not have an answer yet.',
      '2. Find how many of those chosen answered, and what was done about the rest. Divide: the number who answered ÷ the number chosen. If most did, go on. If few did, stop: {o:samp_ok} cannot be given yet.',
      '3. If both hold, repeat the figure as the claim states it, for the group it names, with its margin: "about 41%, give or take 3 points". Leave out "more", "less", "rising" and "because". The claim has not earned any of them.'
    ] },

  { id: 'check-sampok', kind: 'check', after: 'samp_ok',
    case: 'h-lunch',
    ask: { type: 'phrase', step: 'H1', say: 'Which words say what the claim says the figures show? Tap them.',
           answer: 'About 40% of our students bring lunch from home' } },

  { id: 'refute-thousand', kind: 'refute', about: 'samp_ok',
    h: 'A wrong idea: "A thousand people cannot speak for millions"',
    link: 'You have seen what {o:samp_ok} is made of, and that it can come from a small share of a big group. The commonest objection to that is a feeling about numbers, and it needs answering in full.',
    idea: '"A sample of a thousand cannot speak for a country of millions."',
    verdict: 'This is wrong, though it feels right.',
    right: [
      'The size of the whole group does not decide how far a figure from a {t:sample} can be relied on. Two things decide it: how the people were chosen, and how many of them there are. Take the choosing first. A group of 1,000 drawn {t:atrandom} from a list of everyone leans no more toward one kind of person than another, however long the list is. Then the number: 1 ÷ √1,000 is about 3 points, and nothing in that sum depends on whether the list holds 300,000 names or 300 million.',
      'A comparison helps, as long as you keep its limit in view. Taste a pot of soup after stirring it. One spoonful tells you about the pot, whether the pot holds a cup or a bathtub, because the stirring mixes it through. The size of the spoon matters, and the size of the pot does not. Stirring stands for the lottery: it is what makes the spoonful stand for the pot. The likeness stops there. A pot is stirred in a second, while a country has to be drawn from a full list. And a spoonful taken from the top without stirring is like asking people outside one stadium: it can mislead however big the spoon is.',
      'So the question to ask of "only a thousand" is not how many people are in the country. It is: how were the thousand chosen, how many of those chosen are in the figure, and how big is the margin? If the answers are a lottery from a full list, nearly all heard from, and about 3 points, the claim holds. If the answer is "the first thousand who clicked", the claim has a real problem, and the problem is the choosing and not the size.'
    ],
    testedBy: ['claim-thousand'] }
]);
