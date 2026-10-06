// Statistical Claims, Unit Two, part one (first half): the opening card, the two words the first name is built on, the first name, and its check.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of
// Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('stats', 'u2', [

  { id: 'orient-holds', kind: 'orient',
    h: 'Claims that hold up: four kinds, and what each one has earned',
    canDo: 'After this unit you can read a claim made with numbers that holds up, and say which of four kinds it is. You will be able to point to the words that show it, and to say what the claim has shown and what it has not. The claim can be a headline, an ad, a report or something a person tells you.',
    everyday: [
      'Most of the claims with numbers that reach you are not wrong. A headline says, "Of 1,000 adults called, 31% smoke." A report says, "The reservoir fell from 82% full to 61% full over the summer." A health department says, "Patients at one clinic wait more than an hour more often than patients at another: 40 in 100 against 30." A school says, "The reading program raised scores." Any of these can hold up. When one does, there is nothing to correct, and the useful thing to know is exactly how far it goes.',
      'A claim that holds has earned only what it says. The first gives one figure about one group, and has earned nothing about change. The second follows one figure through time, and has earned a rise or a fall and nothing about why. The third sets two things side by side, and has earned which is bigger and nothing about why. Only the fourth may go on to say that one thing made the other happen, and it may do that only because of how its groups were formed.'
    ],
    map: { branch: 'holds' } },

  /* ---------- Two words the first name is built on ---------- */
  { id: 'term-sample', kind: 'term', term: 'sample',
    h: 'Asking some of them, and the word for it',
    link: 'The first kind of claim that holds is built on a figure worked out from some of a group, and the word for those few people comes first.',
    case: 'h-t-council',
    plain: [
      'Asking everyone is usually too slow, too costly or impossible. A town council cannot stop 40,000 people in the street, so it asks 800 of them and works out the figure from those 800. The claim speaks about all 40,000, and the figure comes from the 800.'
    ],
    after: [
      'Every figure from a {t:sample} comes with one question: how did these 800 come to be the 800? If the town council had asked the first 800 people it met outside the stadium on game day, the figure would still be 31 in 100, and it would mean something else.'
    ] },

  { id: 'term-atrandom', kind: 'term', term: 'atrandom',
    h: 'Letting a lottery choose',
    link: 'A {t:sample} can only stand for the whole group if the way it was chosen does not lean. There is one way of choosing that is built not to, and it has a name.',
    case: 'h-t-lottery',
    plain: [
      'Compare two ways the town council could choose its 800. A clerk could pick the streets she knows, or the people who are home when she calls. Even if she means no harm, her choice leans toward people like the ones she knows, or who are easy to reach. Or a computer could draw 800 of the 40,000 addresses, like tickets from a drum, and nobody decides which.',
      'In the second way, every address has the same chance: 800 ÷ 40,000 is 1 in 50. A house on the richest street and a house on the poorest each have a 1 in 50 chance, so the draw cannot favor either. Luck can still make the 800 a little different from the town, but a fair draw has no push in one direction.'
    ],
    after: [
      'Two things to notice. First, {t:atrandom} says how the people were picked and not how many there are. Second, it is not the same as picking carelessly: picking anyhow is what a clerk does when she asks whoever is nearby. A lottery is the careful way, because the choice is taken out of everyone’s hands.'
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
      'The library could not ask 90,000 people, so it asked a {t:sample} of 1,500, and a lottery chose them: that is {t:atrandom}. Every card number had the same chance, 1 in 60, so the library did not choose the people it expected to say yes.',
      'Nearly everyone chosen is in the figure: 1,380 of the 1,500 answered, which is 92 in 100. Even if all 120 who did not answer had borrowed a book, the figure would be 46 in 100, and if none had, 38, so it cannot be far from 41. How the people were chosen matters more than how many there are: 100,000 people who chose to answer a website poll are not a fair picture of anything.'
    ],
    feature: { step: 'H1', option: 'group' },
    act: [
      '1. Find the sentence that says how the people were chosen. A lottery from a full list is what you want. If you cannot find one, you do not have an answer yet.',
      '2. Find how many of those chosen answered, and what was done about the rest. If most did, go on. If few did, stop: {o:samp_ok} cannot be given yet.',
      '3. If both hold, repeat the figure as the claim states it, for the group it names. Leave out "more", "less", "rising" and "because". The claim has not earned any of them.'
    ],
    name: 'The name for this is {o:samp_ok}. The count is fair in a particular sense: the figure is a fair stand-in for the whole group of card holders, to within the luck of the draw. It does not mean the figure is exact.' },

  { id: 'check-sampok', kind: 'check', after: 'samp_ok',
    case: 'h-lunch',
    ask: { type: 'phrase', step: 'H1', say: 'Which words say what the claim says the figures show? Tap them.',
           answer: 'About 40% of our students bring lunch from home' } }
]);
