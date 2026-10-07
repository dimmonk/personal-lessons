// Civics, Unit Four, part one (first half): the opening card, the first name (a law put into practice), and the word
// for a written instruction from the President.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, the key's
// question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action with its
// example built in and one short sentence of why), then the name (lesson standard section 20).

FC.cards('civics', 'u4', [

  { id: 'orient-pres', kind: 'orient',
    h: 'Six things the President or a federal office can do',
    canDo: 'When the news says the President or a federal office “did something”, you can tell what it actually did. It is one of six things, and only one of them is the President reaching for a power that belongs to Congress.',
    everyday: [
      'You hear this almost every day. “The office published new rules.” “The President signed an order.” “The President sent the army to help.” “The President won’t sign the bill.” “The President pardoned him.” Each one is a different thing, and the word “government” in a headline hides which.',
      'Unit One taught you to ask: {q:D1} When the answer is the President or a federal office, one question is left: {q:E1} Five of the six answers are things the President or an office is allowed to do. The sixth is reaching for something only Congress can do: a new tax, a new crime, a ban.'
    ],
    add: 'A federal {t:agency} is also called a federal office, and the two words mean the same thing: {means:agency}.',
    map: { branch: 'president' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A law put into practice ---------- */
  { id: 'meet-execute', kind: 'meet', outcome: 'execute',     // heading is the outcome's plain words, from the key
    link: 'Start with the one you will meet most in the news: Congress passed a law, and an office has to make it work.',
    case: 'e-credit', mark: 'E1',
    explain: [
      'The law says what people get: a tax credit for real insulation work done by a licensed builder. It does not say which form to fill in or which receipts to keep, so the tax office decides that and publishes the form.',
      'This is how most laws reach ordinary people. Congress writes the law in general words, and the federal offices do the daily work: the forms, the receipts, the checking. An office has no power of its own to give out tax credits. It gets that power from the law, so it can go only as far as the law allows.'
    ],
    spot: [
      { do: 'Find the law Congress passed: the tax credit for insulation.', why: 'The office is working from it, not making things up.' },
      { do: 'Find what the office does: it publishes the form and says which receipts to keep.', why: 'Forms, permits, inspections and collecting money are the daily work of a law.' },
      { do: 'Check it stays inside the law: the form asks for receipts that show the work is real, as the law says.', why: 'An office may fill in details, but it may not add demands the law does not have.' }
    ],
    feature: { step: 'E1', option: 'carryout' },
    name: 'This is {o:execute}. The law already exists, and an office is making it work in daily life.' },

  { id: 'check-execute', kind: 'check', after: 'execute',
    case: 'e-birdpermit',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the federal office decides or does? Tap them.',
           answer: 'a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit' } },

  /* ---------- A word the next name is built on ---------- */
  { id: 'term-order', kind: 'term', term: 'order',
    h: 'A written instruction from the President to the offices',
    link: 'You will hear this word in headlines, and the next card depends on it.',
    case: 'e-memo',
    plain: [
      'The paper only tells the government’s own offices how to do their work. Nobody outside the government has to do anything because of it.'
    ],
    after: [
      'Nobody in Congress voted on it, and the next President can cancel it by signing another. An {t:order} tells the offices how to carry out laws that already exist.',
      'So when you read “the President signed an order”, ask what it demands, and of whom.'
    ] }
]);
