// Political Ideologies, Unit Four, part two: the second name (a text that holds up old ways and asks for an order that has gone to
// be put back), the two names side by side on one school, and a wrong idea about the pair.

FC.cards('ideology', 'u4', [

  /* ---------- The second name: what has gone is to be brought back ---------- */
  { id: 'meet-react', kind: 'meet', outcome: 'react',
    link: 'You have seen one name for a text that holds up old ways. The second name is for a text that does something different with them, and the difference is easiest to see in a case.',
    case: 'i4-meet-react', mark: 'T1',
    strip: [
      'An order that once stood is named: the Church courts, and the bishops sitting on the king’s council, for six hundred years.',
      'It is said to be gone. The Assembly abolished the courts and put the bishops out.',
      'The text calls that a wrong, and says it does not call it a reform.',
      'It asks for the order to be put back: the courts sit again, the bishops return, the kingdom ordered as it was.'
    ],
    explain: [
      'The first thing to see is that the order is not there any more. In the boundary walk the walk was still being walked, and the text asked for it to stay. Here the courts are gone. The text is not asking for something to be kept. It is asking for something that was taken away to be given back.',
      'The second thing is what the text says about how it was lost. It does not say that the order faded or that times changed. It says it was abolished, and that this was a wrong. That is what turns the request into a demand to put something right, and not a wish.',
      'In Unit One this text gets the answer {a:D1.tradition}, because it holds up an old order of crown and church as what should guide. That answer is shared with the last name. What separates the two is this unit’s question, and the answer it gets here is {a:T1.restore}.',
      'People who think like this hold that a country’s order was built up over centuries, that those who tore it down had no right, and that what came after is worse. They need not want everything of the past. They may ask for one old order, or for several, to be put back. People who disagree say that the old order was unfair to many people, or that going back is not possible, or that it was not lost wrongly at all. No side is taken here. The answer goes by what the text asks for.'
    ],
    feature: { step: 'T1', option: 'restore' },
    name: 'The name for this is {o:react}. "Reactionary" means reacting against a change that has already been made, by trying to undo it. In everyday arguments the word is often thrown as an insult, to mean "backward" or "old-fashioned". It is not used that way here. It is used as a plain description of what you can point to in a text: an order that has gone, said to have been wrongly torn down, and asked for back. The second word of the name is the name from the last card, because this kind of text, like that one, holds up old ways.' },

  { id: 'again-react', kind: 'again', outcome: 'react',
    link: 'The Church courts gave you what to point to from one case: {needs:react}. Here is a second case in a different setting: the cloth trade, and a speech in a guild hall.',
    first: 'i4-meet-react', second: 'i4-again-react', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (church courts, cloth guilds). Look at one thing only: what the text says was lost, and what it asks for.',
    prompt: { kind: 'phrase', answer: 'We will not rest until the guilds have their halls, their oath and their seven years back' },
    shared: [
      'Both texts name an old order that once stood: the Church courts with the bishops on the king’s council, and the guilds with their masters and their oath. Both say it is gone, and both say that its going was a wrong: "that was a wrong, and we do not call it a reform", and "that law was a wrong done to every honest maker". Both ask for it to be put back.',
      'The two stories share nothing else. So this holds wherever a text holds up an old order, says it was wrongly torn down, and asks for it back. That is what {o:react} names.'
    ] },

  { id: 'portrait-react', kind: 'portrait', outcome: 'react',
    link: 'What you point to is an order that has gone, and the request to put it back. This card fills in the rest of the picture, so that you can spot {o:react} where nobody marks the words for you.',
    typical: [
      'An order is named that once stood and does not now: courts, a council, a guild, a set of ranks, a crown, the power of a church, or a custom that once had the force of law.',
      'The text says how it was lost: a law threw it out, an assembly abolished it, a reform swept it away. And it says that this was wrong: a theft, a wrong done, a crime, a mistake that should be undone.',
      'It asks for the order back, in words such as "restore", "give back", "bring back", "put right" or "undo the law that ended it".',
      'It often says that the present is worse than what was lost: more disordered, or less just, or cut off from what held people together.',
      'It need not be angry. A text can ask gently and patiently for an order to be brought back, and it still asks for it. It also need not ask for everything: a text may want only the courts back, or only the school.'
    ],
    not: [
      'Mourning is not enough. A text that is sad that something has gone, and asks only that what is left be looked after, asks for nothing to be put back, and gets the other name in this unit.',
      'Nor does the word say anything about whether the old order was good or the text is right. It names what the text asks for. It is not a verdict on the person who wrote it.'
    ],
    wild: ['"Give us back what was taken."', '"It should never have been abolished."', '"Restore the old courts."', '"Bring back the way it was."', '"Undo the law that ended it."'],
    self: 'In your own life it is the argument that a school, a church service, a shop’s hours or an old office that was changed years ago should be changed back, because the change was a mistake from the start.',
    ask: '"What has gone, does the text say it was wrongly taken, and does it ask for it back?" If the answer to all three is yes, this is the name to look at.' },

  { id: 'check-react', kind: 'check', after: 'react',
    case: 'i4-check-react',
    ask: { type: 'option', step: 'T1', among: ['keep', 'restore'] } },

  /* ---------- The two names side by side ---------- */
  { id: 'look-conserv-react', kind: 'lookalike', ledger: 'conserv~react',
    link: 'You have now met both names. They begin from the same place, a text that holds up what was handed down, and they are the pair most likely to be mixed up. This card sets them side by side on one school.',
    cases: ['i4-lk-conserv-school', 'i4-lk-react-school'],
    instruction: 'Both cases are about the same school, the church school at Marrow Lane, and both hold up its old ways. Compare one thing: does the text ask for what is there to stay, or for what has gone to come back?',
    prompt: { kind: 'which', option: 'T1.restore', answer: 'i4-lk-react-school' },
    difference: [
      'In Case A the school is still a church school. The text says its Sunday hymns and the pastor’s choosing of the principal were handed down and should guide how the school is run, and it asks for them to be kept, and for any change to come slowly. Nothing has gone and nothing is asked back. The answer is {a:T1.keep}, and the case is {o:conserv}.',
      'In Case B the school was taken from the church by an act, and the church no longer chooses the principal. The text says that was a wrong, and asks for the act to be undone and the school given back. The answer is {a:T1.restore}, and the case is {o:react}.',
      'Both texts love the same school and hold up the same old ways. They differ in what stands today and in what the text asks for. Case A asks for what is there to stay. Case B asks for what has gone to return.'
    ] },

  /* ---------- A wrong idea about the pair ---------- */
  { id: 'refute-values', kind: 'refute', about: 'conserv',
    h: 'A wrong idea about a text that holds up old ways',
    link: 'You now have both names. There is a way of reading them that gets the first one wrong, and it is easy to fall into.',
    idea: '"If a text values faith and old customs, it wants to turn the clock back. That is what reactionary means."',
    verdict: 'This is wrong, in two ways.',
    right: [
      'First, valuing old ways is not asking for them to be put back. Many texts that hold up faith and custom are about something that is still there. They ask for it to be kept, and they say nothing was torn down. For those texts the answer to {q:T1} is {a:T1.keep}, and the name is {o:conserv}.',
      'Second, "turning the clock back" is a figure of speech, and it can be stretched over almost anything. What counts is words you can point to: an order that has gone, said to have been wrongly torn down, and a request for it to be put back. Without those words you do not have {o:react}.',
      'So when a text holds up old ways, point to what it asks. Is anything asked back? If not, the name is {o:conserv}.'
    ],
    testedBy: ['i4-claim-values'] }
]);
