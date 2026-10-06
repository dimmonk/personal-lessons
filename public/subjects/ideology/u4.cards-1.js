// Political Ideologies, Unit Four, part one: the opening card and the two names (a text that holds up old ways and asks for
// what is still there to be kept, or for an order that has gone to be put back).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the earlier questions, the preview map, the heading of a
// meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, and the
// stem of every commit prompt.

FC.cards('ideology', 'u4', [

  { id: 'orient-ways', kind: 'orient',
    h: 'Old ways: keep them, or bring them back?',
    canDo: 'After this unit you can read a short text that holds up the old ways of faith, home life and custom, and give it one of two names by pointing to the words that tell you. You can also say why it is not the name it looks most like: one that goes with putting a nation first, or one that goes with the side of working people.',
    everyday: [
      'You already hear this talked about. A neighbor says the village should "keep its traditions". Someone else says a new law "destroyed our way of life". A columnist calls one politician "reactionary" and another "just conservative", and neither says what they mean.',
      'Both kinds of text hold up old ways, and Unit One gave them the same answer: {a:D1.tradition}. One wants what is still there kept, and any change slow. The other says something has been lost, that losing it was a wrong, and asks for it to be given back. One more question tells them apart: {q:T1}'
    ],
    add: 'Every text in this unit is invented, and none says what any real person or party believes.',
    map: { branch: 'tradition' } },        // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The first name: what is still there is to be kept ---------- */
  { id: 'meet-conserv', kind: 'meet', outcome: 'conserv',      // heading is the outcome's plain words, from the key
    link: 'The first name is for a text that asks for what is still there to stay.',
    case: 'i4-meet-conserv', mark: 'T1',
    strip: [
      'Something from the past is named, and it is still there: a walk round the village, with a blessing, which the grandparents walked and the children still walk.',
      'The text says it should carry on: "Keep the walk." If a new road forces a change, it asks for the change to be slow, with the old walkers asked first.',
      'Nothing is said to have been torn down, and nothing is asked to come back.'
    ],
    explain: [
      'In Unit One this text gets the answer {a:D1.tradition}. This card is about the question that comes next: {q:T1} The walk is still walked, so nothing is asked back. The text asks that what is there stay, and that any change come slowly, with the people it touches asked first.',
      'The idea behind this kind of text is that what has been handed down has been tested by many years, and that anything new is risky until it has been tried. People who disagree say that going slowly can be a way of never changing. Whether the old ways are good is argued over, and no side is taken here. The answer goes by what the text asks for.'
    ],
    feature: { step: 'T1', option: 'keep' },
    name: 'The name for this is {o:conserv}, from "conserve", to keep safe. It describes what a text asks for, and is neither praise nor blame. Loving old ways does not make a text the other name in this unit; only asking for something to be put back does.' },

  { id: 'check-conserv', kind: 'check', after: 'conserv',
    case: 'i4-check-conserv',
    ask: { type: 'phrase', step: 'T1', say: 'Which part of this case says what the text wants done with the old way it holds up? Tap it.',
           answer: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' } },

  /* ---------- The second name: what has gone is to be brought back ---------- */
  { id: 'meet-react', kind: 'meet', outcome: 'react',
    link: 'The second name is for a text that does something different with old ways, and the difference is easiest to see in a case.',
    case: 'i4-meet-react', mark: 'T1',
    strip: [
      'An order that once stood is named: the Church courts, and the bishops sitting on the king’s council, for six hundred years.',
      'It is gone: the Assembly abolished the courts and put the bishops out. The text calls that a wrong, and says it does not call it a reform.',
      'It asks for the order to be put back: the courts sit again, the bishops return, the kingdom ordered as it was.'
    ],
    explain: [
      'The order is not there any more. In the boundary walk the walk was still being walked and the text asked for it to stay. Here the courts are gone, and the text asks for them back. It also says how they were lost: abolished, and that was a wrong. That turns a wish into a demand to put something right.',
      'In Unit One this text gets {a:D1.tradition}. What separates it from the last name is this unit’s question, and the answer here is {a:T1.restore}.',
      'People who think like this hold that a country’s order was built up over centuries and that those who tore it down had no right. People who disagree say the old order was unfair to many, or cannot be brought back, or was not lost wrongly. No side is taken here.'
    ],
    feature: { step: 'T1', option: 'restore' },
    name: 'The name for this is {o:react}. "Reactionary" means reacting against a change already made, by trying to undo it. In everyday arguments the word is thrown as an insult for "backward". Here it only describes what you can point to: an order that has gone, said to have been wrongly torn down, and asked for back.' },

  { id: 'check-react', kind: 'check', after: 'react',
    case: 'i4-check-react',
    ask: { type: 'option', step: 'T1', among: ['keep', 'restore'] } }
]);
