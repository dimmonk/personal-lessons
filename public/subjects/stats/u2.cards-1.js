// Statistical Claims, Unit Two, part one (first half): the opening card, the two words the first name is built on, the first name, and the lens.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of
// Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers in a claim), group (the
// people or things a claim is about), "people found with it" (never "cases" in that sense: a case is the app's word for one example).

FC.cards('stats', 'u2', [

  { id: 'orient-holds', kind: 'orient',
    h: 'Claims that hold up: four kinds, and what each one has earned',
    canDo: 'After this unit you can read a claim made with numbers that holds up, and say which of four kinds it is. You will be able to point to the words that show it, and to say what the claim has shown and what it has not. The claim can be a headline, an ad, a report or something a person tells you.',
    everyday: [
      'Most of the claims with numbers that reach you are not wrong. A headline says, "Of 1,000 adults called, 31% smoke." A report says, "The reservoir fell from 82% full to 61% full over the summer." A health department says, "Patients at one clinic wait more than an hour more often than patients at another: 40 in 100 against 30." A school says, "The reading program raised scores." Any of these can hold up. When one does, there is nothing to correct, and the useful thing to know is exactly how far it goes.',
      'A claim that holds has earned only what it says. The first gives one figure about one group, and has earned nothing about change. The second follows one figure through time, and has earned a rise or a fall and nothing about why. The third sets two things side by side, and has earned which is bigger and nothing about why. Only the fourth may go on to say that one thing made the other happen, and it may do that only because of how its groups were formed. This unit teaches the four kinds, what you must be able to point to before you can use each name, and the question that tells them apart. It is the words of the claim itself that settle which kind you have.'
    ],
    add: [
      'Four words are used all the way through, so here they are once more. A claim is what someone says with a number in it. A figure is the number, or the numbers, in a claim: a share, an average, a count. A group is the people or things the claim is about. A case is the app’s word for one example: a claim as someone might say it to you, with whatever the speaker tells you about where the figure came from. This unit never uses "case" for people found with an illness; it says "people found with it".'
    ],
    map: { branch: 'holds' } },

  /* ---------- Two words the first name is built on ---------- */
  { id: 'term-sample', kind: 'term', term: 'sample',
    h: 'Asking some of them, and the word for it',
    link: 'The first kind of claim that holds is built on a figure worked out from some of a group, and the word for those few people comes first.',
    case: 'h-t-council',
    plain: [
      'Asking everyone is usually too slow, too costly or impossible. A council cannot stop 40,000 people in the street. So it asks 800 of them and works out the figure from those 800. The 800 are not the whole town. They are a few people who are meant to stand for it.',
      'There are two groups in this story, and they have to be kept apart. One is the group the claim is about: all 40,000 residents. The other is the people actually asked: the 800. The figure of 31 in 100 is worked out from the second group, and the claim speaks about the first. Whether the first can be read from the second is what the rest of this unit is about.'
    ],
    after: [
      'Every figure from a {t:sample} comes with one question: how did these 800 come to be the 800? If the council had asked the first 800 people it met outside the stadium on match day, the figure would still be 31 in 100, and it would mean something else.'
    ] },

  { id: 'term-atrandom', kind: 'term', term: 'atrandom',
    h: 'Letting a lottery choose',
    link: 'A {t:sample} can only stand for the whole group if the way it was chosen does not lean. There is one way of choosing that is built not to, and it has a name.',
    case: 'h-t-lottery',
    plain: [
      'Compare two ways the council could choose its 800. In the first, a clerk chooses them. She picks the streets she knows, or the houses near the town hall, or the people who are home when she calls. Even if she means no harm, her choice leans toward people like the ones she knows, or who are easy to reach. In the second, a computer draws 800 of the 40,000 addresses, like tickets from a drum, and nobody decides which.',
      'In the second way, every address has the same chance. The sum: 800 ÷ 40,000 = 0.02, which is 1 in 50. A house on the richest street and a house on the poorest each have a 1 in 50 chance, so the draw cannot favor either. The people it picks tend to be a fair picture of the 40,000, with about as many young and old, walkers and drivers, as there are in town.',
      'Luck can still make the 800 a little different from the town. A fair draw is not a guarantee. What it removes is any push in one direction.'
    ],
    after: [
      'Two things to notice. First, {t:atrandom} says how the people were picked and not how many there are. Second, it is not the same as picking carelessly. In everyday talk, "random" can mean "anyhow", and picking anyhow is what a clerk does when she asks whoever is nearby. A lottery is the careful way, and it is careful because the choice is taken out of everyone’s hands.'
    ] },

  /* ---------- A claim that holds: a figure for one group ---------- */
  { id: 'meet-sampok', kind: 'meet', outcome: 'samp_ok',     // heading is the outcome's plain words, from the key
    link: 'Unit One ended with the fifth answer to the first question, {a:S1.holds}. This unit teaches what that answer looks like. The plainest kind comes first: someone gives one figure about one group, and has drawn the people and heard from them carefully.',
    case: 'h-library', mark: 'H1',
    strip: [
      'There is a figure about a group: 41 in 100 of a library’s 90,000 card holders borrowed a book last month.',
      'It was worked out from 1,500 of them, drawn by lottery from the full list, so nobody was favored.',
      'Almost all of them are in it: 1,380 of the 1,500 answered, and the others were chased by email, phone and a visit.',
      'The claim says only what the figure shows: one group, one month. Nothing about a rise or fall, another library or a reason.'
    ],
    explain: [
      'Go through what this claim stands on, in the order a claim is put together. First, who is in the figure. The library could not ask 90,000 people, so it asked a {t:sample} of 1,500, and it let a lottery choose them: that is {t:atrandom}. Every card number had the same chance, 1,500 out of 90,000, which is 1 in 60, so the library did not choose the people it expected to say yes.',
      'Second, how many of those chosen are in the figure. 1,380 of the 1,500 answered: 1,380 ÷ 1,500 = 0.92, so 92 in 100. Only 120 are missing, and the library went after them with an email, a call and a visit and did not leave them out. How much could the 120 matter? Suppose the worst. If all 120 had borrowed a book, the figure for the 1,500 would be (566 + 120) ÷ 1,500 = 0.46, or 46 in 100. If none of them had, it would be 566 ÷ 1,500 = 0.38, or 38 in 100. Nobody expects all 120 to answer one way, and the true figure is almost certainly close to 41, but even the worst case stays between 38 and 46. That is why most of the people chosen answering matters: the fewer missing, the less they can move the figure.',
      'Third, there are plenty of people in it. One more person among 1,380 would move the share by 1 ÷ 1,380, which is about 0.07 of a point. A figure that one or two people cannot move is a figure that can be taken seriously.',
      'Last, what the claim says. It gives one figure about one group at one time. It does not say that card holders borrowed more or less than before, it does not say they differ from another library’s, and it does not say why. It has earned what it says, and it says only that.'
    ],
    feature: { step: 'H1', option: 'group' },
    name: 'The name for this is {o:samp_ok}. The count is fair in a particular sense: the figure is a fair stand-in for the whole group of card holders, to within the luck of the draw. It does not mean the claim is important, and it does not mean the figure is exact.' },

  { id: 'again-sampok', kind: 'again', outcome: 'samp_ok',
    link: 'The library gave you what to point to, from one case: {needs:samp_ok}. Here is a second case with a completely different story.',
    first: 'h-library', second: 'h-flu', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the story (a library, flu shots). Look at one thing only: {q:H1}',
    prompt: { kind: 'phrase', answer: 'About 60% of county adults had a flu shot this winter' },
    shared: [
      'In both cases a lottery chose a few thousand people from the full list, nearly all of those chosen were heard from, and the claim gives one figure for the whole group: 41 in 100 card holders, 60 in 100 adults. Neither says the figure rose, differs from anywhere else, or has a cause.',
      'The two stories share nothing else. So this is not about books or about flu shots. It holds wherever the claim gives one figure for one group, and everything it rests on holds. That is what {o:samp_ok} names.'
    ] },

  { id: 'lens-holds', kind: 'lens',
    h: 'The story never decides the kind of claim',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a library, a clinic, a school, a reservoir. The layer underneath is what the claim says the figures show.',
      'The four names belong to the layer underneath. A claim about a hospital can be any of them, and so can a claim about a school. A hospital claim that holds is no more likely to be one name than another.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same people and the same figure and differ only in what the claim says. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose: how large or surprising the figure is, and whether you would like the claim to be true. A big drop and a tiny one can both hold. A claim you agree with is put to the same question as one you do not.'
    ],
    fixed: ['what the claim says the figures show, which is what this question asks about: {q:H1}'],
    varies: ['the topic', 'the people', 'how large or surprising the figure is', 'whether you would like it to be true', 'whether the story hints at more than the claim says'] }
]);
