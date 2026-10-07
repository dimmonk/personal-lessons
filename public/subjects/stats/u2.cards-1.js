// Statistical Claims, Unit Two, part one (first half): the opening card, the two words the first name is built on, the first name, and its check.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain: the reminder of
// Unit One, the preview map, the heading of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem
// of every commit prompt.
// A meet card: the story first (the app prints it), then the idea (explain), how to spot it (spot: numbered steps, an action and one short
// sentence of why), what to do with it (act: the same), and the name (lesson standard section 20).

FC.cards('stats', 'u2', [

  { id: 'orient-holds', kind: 'orient',
    h: 'A claim with numbers that holds up: how far does it go?',
    canDo: 'When a number you read or hear holds up, work out exactly what it shows, and repeat that much and no more. It is always one of the four things below.',
    everyday: [
      'Most claims with numbers that reach you are not wrong. A headline says, "Of 1,000 adults called, 31% smoke." A report says, "The reservoir fell from 82% full to 61% full over the summer." A health department says, "Patients at one clinic wait more than an hour more often than patients at another: 40 in 100 against 30." A school says, "The reading program raised scores." Any of these can hold up. When one does, there is nothing to correct, and the useful thing to know is how far it goes.',
      'A claim that holds up has earned only what it says. The first gives one figure about one group, and shows nothing about change. The second follows a figure through time, and shows a rise or a fall but not why. The third sets two things side by side, and shows which is bigger but not why. Only the fourth may say that one thing made the other happen, and only because of how its groups were formed.'
    ],
    map: { branch: 'holds' } },

  /* ---------- Two words the first name is built on ---------- */
  { id: 'term-sample', kind: 'term', term: 'sample',
    h: 'Asking some of them',
    link: 'The first claim that holds up is built on a figure from some of a group, and the word for those few people comes first.',
    case: 'h-t-council',
    plain: [
      'Asking everyone is usually too slow, too costly or impossible. A town council cannot stop 40,000 people in the street, so it asks 800 of them and works out the figure from those 800. The claim is about all 40,000, and the figure comes from the 800.'
    ],
    after: [
      'Every figure from a {t:sample} comes with one question: how did these 800 come to be the 800? If the council had asked the first 800 people it met outside the stadium on game day, the figure would still be 31 in 100, and it would mean something else.'
    ] },

  { id: 'term-atrandom', kind: 'term', term: 'atrandom',
    h: 'Letting a lottery choose',
    link: 'A {t:sample} can stand for the whole group only if the way it was chosen does not lean. One way of choosing is built not to lean, and it has a name.',
    case: 'h-t-lottery',
    plain: [
      'Compare two ways the council could choose its 800. A clerk could pick the streets she knows, or the people who are home when she calls. Even if she means no harm, her choice leans toward people like the ones she knows, or who are easy to reach. Or a computer could draw 800 of the 40,000 addresses, like tickets from a drum, so that nobody decides which.',
      'With the draw, every address has the same chance: 800 ÷ 40,000 is 1 in 50. A house on the richest street and a house on the poorest each have a 1 in 50 chance, so the draw cannot favor either. Luck can still make the 800 a little different from the town, but nothing pushes it in one direction.'
    ],
    after: [
      'Two things to notice. First, {t:atrandom} says how the people were picked, not how many there are. Second, it is not the same as picking carelessly. Picking anyhow is what the clerk does when she asks whoever is nearby, and the lottery is the careful way, because the choice is taken out of everyone’s hands.'
    ] },

  /* ---------- A claim that holds: a figure for one group ---------- */
  { id: 'meet-sampok', kind: 'meet', outcome: 'samp_ok',     // heading is the outcome's plain words, from the key
    link: 'Unit One ended with the answer {a:S1.holds}. Here is what it looks like, simplest first: one figure about one group.',
    case: 'h-library', mark: 'H1',
    explain: [
      'The library could not ask 90,000 people, so it asked a {t:sample} of 1,500, and a lottery chose them: that is {t:atrandom}. Every card number had the same chance, 1 in 60, so the library could not have picked the people it expected to say yes.',
      'Nearly everyone chosen is in the figure: 1,380 of the 1,500 answered, which is 92 in 100. Even if all 120 who did not answer had borrowed a book, the figure would be 46 in 100, and if none had, 38. So 41 cannot be far off. How the people were chosen matters more than how many there are: 100,000 people who chose to answer a website poll are a fair picture of nobody but themselves.'
    ],
    spot: [
      { do: 'Find how the people were chosen: a computer drew card numbers by lottery from the full list.', why: 'If you cannot find this, you do not have an answer yet.' },
      { do: 'Find how many of those chosen answered: 1,380 of the 1,500, and the rest were chased.', why: 'If most answered, the figure stands for the whole group; if few did, it does not.' },
      { do: 'Check what the claim says: only that 41% borrowed a book last month.', why: 'Nothing about a rise, another library or a reason.' }
    ],
    act: [
      { do: 'Repeat the figure for the group it names: 41 in 100 of the library’s card holders borrowed a book last month.', why: 'That is the whole claim.' },
      { do: 'Leave out "more", "less", "rising" and "because".', why: 'The claim has not earned any of them.' }
    ],
    feature: { step: 'H1', option: 'group' },
    name: 'This is {o:samp_ok}. The figure is a fair stand-in for all the card holders, give or take the luck of the draw. It does not mean the figure is exact.' },

  { id: 'check-sampok', kind: 'check', after: 'samp_ok',
    case: 'h-lunch',
    ask: { type: 'phrase', step: 'H1', say: 'Which words are the claim itself? Tap them.',
           answer: 'About 40% of our students bring lunch from home' } }
]);
