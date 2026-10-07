// Political Ideologies, Unit Four, part one: the opening card and the two names (a text that holds up old ways and asks for
// what is still there to be kept, or for an order that has gone to be put back).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the earlier questions, the preview map, the heading of a
// meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name (lesson standard section 20).

FC.cards('ideology', 'u4', [

  { id: 'orient-ways', kind: 'orient',
    h: 'Old ways: keep them, or bring them back?',
    canDo: 'When someone says a politician wants to “keep our traditions”, or calls someone “reactionary”, you can tell what is really being asked for: to keep what is still there, or to ask for back what was taken.',
    everyday: [
      'A neighbor says the village should “keep its traditions”. Someone else says a new law “destroyed our way of life”. A columnist calls one politician “reactionary” and another “just conservative”, and never says what either word means.',
      'Unit One gave both kinds of text the same answer: {a:D1.tradition}. They are not the same. One asks for what is still there to be kept, and for change to be slow. The other says something was taken away wrongly, and asks for it back. One question tells them apart: {q:T1}'
    ],
    add: 'Every text in this unit is invented, and none says what any real person or party believes.',
    map: { branch: 'tradition' } },        // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The first name: what is still there is to be kept ---------- */
  { id: 'meet-conserv', kind: 'meet', outcome: 'conserv',      // heading is the outcome's plain words, from the key
    link: 'First: a text that wants what is still there to stay.',
    case: 'i4-meet-conserv', mark: 'T1',
    explain: [
      'The walk is still walked, so the text asks for nothing to come back. It asks for the walk to stay, and for any change to come slowly, with the old walkers asked first.',
      'The thinking behind this: what has been handed down has been tested by many years, and anything new is risky until it has been tried. People who disagree say that going slowly can be a way of never changing. No side is taken here. We only read what the text asks for.'
    ],
    spot: [
      { do: 'Find the old way the text holds up: the boundary walk.', why: 'It is the thing the text wants to protect.' },
      { do: 'Check it is still there: the village walks it every May, and the children carry the banner.', why: 'If it is still there, there is nothing to bring back.' },
      { do: 'Find what the text asks: “Keep the walk”, and change it slowly if the new road forces it.', why: 'Keeping it and going slowly is the whole request.' },
      { do: 'Check that it asks for nothing lost to come back.', why: 'Asking for something lost back is the next name.' }
    ],
    feature: { step: 'T1', option: 'keep' },
    name: 'This is {o:conserv}, from “conserve”: to keep safe. It says what a text asks for, and is neither praise nor blame.' },

  { id: 'check-conserv', kind: 'check', after: 'conserv',
    case: 'i4-check-conserv',
    ask: { type: 'phrase', step: 'T1', say: 'Which words say what the text wants done with the old way it holds up? Tap them.',
           answer: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' } },

  /* ---------- The second name: what has gone is to be brought back ---------- */
  { id: 'meet-react', kind: 'meet', outcome: 'react',
    link: 'Second: a text that says something was taken away, and asks for it back.',
    case: 'i4-meet-react', mark: 'T1',
    explain: [
      'In the walk story, the walk was still being walked. Here the Church courts are gone: the Assembly abolished them eleven years ago. The pamphlet calls that a wrong and asks for them back, which is a demand to put something right, not just a wish to keep what is there.',
      'People who think like this hold that a country’s order was built up over centuries, and that nobody had the right to tear it down. People who disagree say the old order was unfair to many, or cannot be brought back, or was not lost wrongly. No side is taken here.'
    ],
    spot: [
      { do: 'Find the old order the text names: the Church courts, and the bishops on the king’s council.', why: 'It must be something that once stood, not just a feeling about the past.' },
      { do: 'Check it is gone: the Assembly abolished the courts and put the bishops out.', why: 'If it is still there, there is nothing to bring back.' },
      { do: 'Find the words that call its loss a wrong: “we do not call it a reform”.', why: 'Being sad is not enough; the text must say it was wrongly done.' },
      { do: 'Find the request: “that the Church courts sit again”.', why: 'Without the request, it is only sadness.' }
    ],
    feature: { step: 'T1', option: 'restore' },
    name: 'This is {o:react}: reacting against a change already made, by trying to undo it. It is often thrown around as an insult, but here it only describes what a text asks for.' },

  { id: 'check-react', kind: 'check', after: 'react',
    case: 'i4-check-react',
    ask: { type: 'option', step: 'T1', among: ['keep', 'restore'] } }
]);
