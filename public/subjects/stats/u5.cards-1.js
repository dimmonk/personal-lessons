// Statistical Claims, Unit Five, part one (first half): the opening card, and the first name (a percentage with no counts).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the reminder of Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and
// answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number in a claim), count (an actual
// number of people or things, such as 3 out of 40), percentage (a count turned into a share of 100), case (the app's word for one example).

FC.cards('stats', 'u5', [

  { id: 'orient-compare', kind: 'orient',
    h: 'A figure needs something beside it: what, and is it there?',
    canDo: 'After this unit you can read a claim built on a percentage, a test result or a ranking of two totals, and say which of three things is missing from beside the figure. You will be able to point to the words that show it, and to tell the three apart. The claim can be about a bus line, a hospital, a bank, a school or a store.',
    everyday: [
      "You meet figures like these every week. An ad says, 'Cuts your risk by 50%.' A poster says, 'This test is 99% accurate.' A ranking says, 'Hospital A saves 90 of every 100 patients, and Hospital B only 80.' In each one the figure is true as far as it goes, and in each something is left out that you would need before you could tell what the figure means.",
      "A figure on its own is like a length with no unit. '50%' is half of something, and the ad does not say of what. '99% accurate' says how often the test is right, and what you want to know is how likely it is that you have the thing when the test says yes. A ranking of two hospitals sets two totals side by side, and a total can hide what it is made of. This unit teaches what each of the three needs beside it, and how to say which one is missing from a claim."
    ],
    add: [
      'Two words are used all the way through, so here they are once. A count is an actual number of people or things, such as 3 out of 40. A percentage is a count turned into a share of 100, and it cannot give the count back: 3 out of 40 and 30 out of 400 are both 7.5%.',
      'This unit teaches one question, and the three names that go with its answers. It leans on Unit One, which taught the first question and its five answers, and on Units Two, Three and Four, which taught the names for a claim that holds, for the people counted, and for what a figure counts.'
    ],
    map: { branch: 'compare' } },

  /* ---------- A percentage without the numbers ---------- */
  { id: 'meet-relrisk', kind: 'meet', outcome: 'relrisk',
    link: 'Start with the one you see most often: a headline that gives a percentage and nothing else.',
    case: 'rel-jog', mark: 'C1',
    strip: [
      'There is a figure, and it is a percentage: 40% more likely.',
      'The 40% is a share of an amount: how likely people were to hurt an ankle before the "more" was added. The headline does not tell you that amount.',
      'No count is given: not how many joggers were hurt, and not how many people the study looked at.',
      'So the figure says how much bigger something is, and says nothing about how many people it is about.'
    ],
    explain: [
      'A percentage is a share out of 100, so it always rests on an amount that it is a share of. "40% more likely" means "the old chance, plus 40 hundredths of the old chance". The old chance is the amount underneath, and the headline gives you the 40% and hides that amount. It is the amount that tells you how big the news is.',
      'Try two amounts underneath the same headline. Suppose that in a year, 5 of every 1,000 people who do not jog hurt an ankle. 40% of 5 is 2, so 40% more is 7: 7 in every 1,000 joggers. The headline is true, and the change is 2 more people in every 1,000.',
      'Now suppose instead that 25 of every 100 people who do not jog hurt an ankle in a year. 40% of 25 is 10, so 40% more is 35: 35 in every 100 joggers. The headline is true again, and this time the change is 10 more people in every 100. That is fifty times as many extra people for each person counted.',
      'The headline cannot tell these two apart. One is a small worry and the other is a large one. The percentage looks the same and the news is not. To tell them apart you need the two counts the percentage was worked out from: how many it was before and how many it is now, each given as how many out of how many.',
      'The sum behind a percentage is the change divided by how many it was before. From 5 in 1,000 to 7 in 1,000 the change is 2, and 2 divided by 5 is 0.4, which is 40%. From 25 in 100 to 35 in 100 the change is 10, and 10 divided by 25 is also 0.4. Two very different changes give one percentage, which is why a percentage cannot give you the counts back.'
    ],
    feature: { step: 'C1', option: 'numbers' },
    name: [
      'The name for this is {o:relrisk}. "Without the numbers" means that the claim gives the percentage and no word on how many it was before and after. The numbers exist, and the claim has not told you them.',
      'The percentage is usually right. What the name points at is what the percentage leaves out.'
    ] },

  { id: 'again-relrisk', kind: 'again', outcome: 'relrisk',
    link: 'The jogging headline gave you what to point to, from one case: {needs:relrisk}. Here is a second case with a different story, and this time the percentage goes down.',
    first: 'rel-jog', second: 'rel-lift', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (joggers, a lifting program) and ignore whether the percentage rises or falls. Look at one thing only: what the claim gives you beside the percentage.',
    prompt: { kind: 'phrase', answer: 'Our new lifting program cut back injuries by 75%' },
    shared: [
      'Both claims give a percentage and no counts. "40% more likely" and "cut back injuries by 75%" both say how big a change is compared with where it started, and both leave out where it started.',
      'Here is the sum for the leaflet, going down. Suppose the company has 2,000 workers. If 400 were injured in the year before the program and 100 in the year after, injuries fell by 300, and 300 divided by 400 is 0.75: 75%. If 40 were injured before and 10 after, injuries fell by 30, and 30 divided by 40 is also 0.75: 75%. The leaflet is true either way. In one company 300 fewer people were hurt, and in the other 30 fewer. The same words cover a difference of ten times as many people.',
      'The two stories share nothing else, and a percentage that falls hides the counts exactly as one that rises does. So this is not about jogging or lifting, and it is not about whether the figure goes up or down. It holds wherever a change or a risk is given as a percentage and the counts are left out. That is what {o:relrisk} names.'
    ] },

  { id: 'lens-compare', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story and the direction of the change. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every claim in this unit has two layers. The top layer is the story: a bus line, a bank, a hospital, a swim club. The layer underneath is what stands beside the figure, and whether something that has to stand there is missing.',
      'The three names belong to the layer underneath. The same story can carry any of them: a claim about a hospital can come with a percentage and no counts, or with a test result, or with two totals set side by side. A claim can also come with everything it needs, and then it holds. The story tells you nothing about which.',
      'From here on the claims change their stories on purpose. Sometimes two claims share one story and differ only in what is left out. When that happens, the shared story is there to show you that it decides nothing.',
      'Two other things change on purpose: how big the percentage or the total is, and whether you would like the claim to be true. A large percentage can come with every count given, and a small one can hide everything.'
    ],
    fixed: ['what the figure is set beside, which is what this question asks about: {q:C1}'],
    varies: ['the topic', 'the people', 'whether the percentage rises or falls', 'how big the figure is', 'whether you would like it to be true'] },

  { id: 'portrait-relrisk', kind: 'portrait', outcome: 'relrisk',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:relrisk} in real life, where nobody marks the words for you.',
    typical: [
      'The figure is a change or a chance given as a percentage: "up 40%", "cut by half", "twice as likely", "triples the risk". "Twice as likely" and "double the risk" are both "100% more".',
      'The words around the percentage are about how much bigger or smaller something is. None of them gives how many it was before or how many it is now.',
      'The percentage is usually correct. Worked out from the real counts it would come out the same, and nobody has lied. What is missing is the part that tells you how many people or things it is about.',
      'The sum behind it is always the same: the change divided by how many it was before. That is why a percentage cannot give the counts back. Many different pairs of counts make the same percentage.',
      'It is most striking when the thing is rare. A rare thing can go up 300% and still be rare, and a big fall in a rare thing is a small rescue. The same percentage on a common thing is a large change in people. The percentage alone cannot say which.',
      'It is found where someone wants the figure to look large. Headlines, ads and leaflets give the percentage because it is the biggest-looking number they have.'
    ],
    not: 'A percentage is not the problem. "Up 40%, from 5 in 1,000 to 7 in 1,000" has the counts beside it, and you can read it at once. The name applies only when the counts are missing. Nor does a big percentage mean a small number, or the other way round: it means you cannot tell.',
    wild: ['"Cuts your risk by half."', '"Twice as likely to..."', '"Up 300% in a year."', '"Sales jumped 80%."', '"Users are 25% less likely to..."'],
    self: 'In your own life it is the message in a neighborhood group, the label on a product, or the line in an ad that says how much better or worse something is without saying how many it is about. It is also what you do yourself when you tell a friend that something "got twice as bad" and the count went from one to two.',
    ask: '"Out of how many, before and after?" Say the two counts out loud, each as how many out of how many. If you cannot, you do not have the figure yet.',
    act: [
      'First, do not decide anything from the percentage alone. Treat it as a size that is not yet known, and not as small or as large.',
      'Second, look for the two counts: how many it was before and how many it is now, each out of its own total. A report behind the headline, or the small print of an ad, often has them.',
      'Third, if you find them, work out the change yourself: how many more or fewer people or things, out of how many. Then decide.',
      'Fourth, if you cannot find them, say so before you share the claim or act on it: "Up 40%, but from what?"'
    ] },

  { id: 'check-relrisk', kind: 'check', after: 'relrisk',
    case: 'rel-school',
    ask: { type: 'phrase', step: 'C1', say: 'Which words give a percentage and leave out the numbers behind it? Tap them.',
           answer: 'late arrivals have fallen by 60%' } },

  { id: 'refute-percent', kind: 'refute', about: 'relrisk',
    h: 'A wrong idea about percentages',
    link: 'The last cards showed what a percentage can hide. Many people hold an idea that makes the hiding easy to miss, because it sounds like good sense.',
    idea: '"A percentage is the fairest way to show how big a change is, because it does not depend on the size of anything."',
    verdict: 'This is wrong.',
    right: [
      'A percentage does not depend on the size of anything, and that is the trouble. It is useful for one job: comparing changes in things of different sizes. But how big a change is, to the people it happens to, depends on the size of the thing as well.',
      'Take the jogging headline again. "40% more" was 2 more people in every 1,000 in one version and 10 more in every 100 in the other. The percentage was 40% in both. If a percentage were the fairest way to show how big a change is, those two would have to be the same size, and they are fifty times apart.',
      'A percentage is a short way of saying something that takes two counts to say fully, and a short version cannot take the place of what it shortens. A percentage with the two counts beside it is fine, because then you have both. A percentage on its own leaves you with a number that fits many different changes.',
      'So when you are given a percentage, ask for the counts it was worked out from. When you give one yourself, give the counts.'
    ],
    testedBy: ['claim-fairest'] },

  { id: 'look-relrisk-compok', kind: 'lookalike', ledger: 'relrisk~comp_ok',
    link: 'Unit Two taught {o:comp_ok}: a comparison that holds. The same percentage can appear in a claim that holds and in one that does not. Here are two claims about the same bus lines. One is {o:relrisk}, and the other is {o:comp_ok}.',
    cases: ['la1-bus-pct', 'la1-bus-counts'],
    instruction: 'Both claims are about Line 12 and Line 9, and in both Line 12 comes out likelier to be late. Compare one thing: whether you can find the counts the percentage was worked out from.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la1-bus-counts' },
    difference: [
      'In Case A the claim gives "50% more likely" and no counts. If 4 trips in every 100 arrive late on Line 9, Line 12 has 6. If 40 in every 100 arrive late on Line 9, Line 12 has 60. The claim does not let you tell which, so you cannot tell how many riders it affects. The answer is {a:S1.compare}, and the case is {o:relrisk}.',
      'In Case B the counts are given: 15 of 300 trips late on Line 12, and 10 of 300 on Line 9. Work it out: 15 is 10 plus half of 10, so Line 12 is 50% more likely to arrive late, and the same words are now backed up by the numbers. The lines are alike, every trip was timed the same way over the same month, and the claim says only which is likelier. The answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'The percentage is the same in both. What differs is whether the counts are beside it. A percentage with its counts is a claim you can rely on, and a percentage on its own is not yet one.'
    ] }
]);
