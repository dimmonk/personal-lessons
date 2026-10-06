// Civics, Unit Four, part one (first half): the opening card, the first name (a law put into practice), and the word
// for a written instruction from the President.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('civics', 'u4', [

  { id: 'orient-pres', kind: 'orient',
    h: 'Six things the President or a federal office can do',
    canDo: 'After this unit you can read a short news item or an everyday story in which the President or a federal office makes the last decision, and say which of six things it is: {plain:execute}; {plain:beyondpres}; {plain:commander}; {plain:diplomacy}; {plain:veto}; or {plain:pardon}.',
    everyday: [
      "You already hear about this part of government almost every day. 'The office has published new rules.' 'The President signed an order.' 'The President sent the army to help.' 'The President will not sign the bill.' 'The President has pardoned him.' Each of these is a different thing, and the word 'government' in a headline hides which one.",
      'Unit One taught you to ask whose decision a story ends on. When the answer is the President or a federal office, one question is left: what does the President or the office do? Five of the six answers are things the President or an office is allowed to do. The sixth is reaching for something that only Congress can do: a new tax, a new crime, a ban.'
    ],
    add: 'One word is used in two ways in this unit, so here it is once. A federal {t:agency} is also called a federal office, and the two words mean the same thing: {means:agency}.',
    map: { branch: 'president' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A law put into practice ---------- */
  { id: 'meet-execute', kind: 'meet', outcome: 'execute',     // heading is the outcome's plain words, from the key
    link: 'Start with the plainest of the six, and the one you meet most often in the news: a law that Congress has already passed, and an office that has to make it work.',
    case: 'e-credit', mark: 'E1',
    strip: [
      'Congress passed a law that gives a tax credit for adding insulation to a home. It says the work must be real and must be done by a licensed builder.',
      'A federal office then decides what the law leaves open: which form people fill in, and which receipts they keep. It adds nothing the law does not allow.',
      'Nobody votes in the case, and no judge appears. The last thing in it is the office publishing the form.'
    ],
    explain: [
      'This is how most laws reach ordinary people. Congress writes a law in general words. It does not write the form, collect the receipts or check each claim for millions of people, so the federal offices do that daily work, and the President leads them.',
      'An office has no power of its own to give out tax credits or to ask for receipts. It borrows both from the law Congress passed, which is why it can go only as far as that law allows. Here it stays inside: the law said the work must be real, and the form asks for receipts that show it is.'
    ],
    feature: { step: 'E1', option: 'carryout' },
    name: 'The name for this is {o:execute}. It means what it says: the law already exists, and someone is making it work in daily life.' },

  { id: 'check-execute', kind: 'check', after: 'execute',
    case: 'e-birdpermit',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the federal office decides or does? Tap them.',
           answer: 'a clerk at the federal animal-health agency checked it against the list in the law, found it complete and mailed her the permit' } },

  /* ---------- A word the next name is built on ---------- */
  { id: 'term-order', kind: 'term', term: 'order',
    h: 'A written instruction from the President to the offices',
    link: 'The next name leans on a word that is easy to pass over.',
    case: 'e-memo',
    plain: [
      'The paper is a set of instructions from the President to the federal offices, and nobody outside the government has to do anything because of it.'
    ],
    after: [
      'It is not a law, because nobody in Congress voted on it, and the next President can undo it by signing another. An {t:order} tells the offices how to carry out the laws that already exist.'
    ] }
]);
