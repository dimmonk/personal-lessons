// Civics, Unit Five, part one (first half): the opening card and the first name, a judge asked whether a law is allowed.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every
// commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action with its
// example built in, and one short sentence of why), then the name (lesson standard section 20).

FC.cards('civics', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'What a judge is really being asked',
    canDo: 'Before you take a news story about a judge at face value, or decide to take a problem to court, check what the judge is actually being asked to do. It is always one of four things, and it decides what a judge can fix and what only voters can.',
    everyday: [
      'You have heard stories like these. “A judge has said the town cannot enforce its new rule.” “The judge said the law does not cover scooters.” “A judge turned down the request to lower the bus fare.” “The judge ruled that the police should have asked permission before they searched the car.”',
      'In every one of them a judge decides something, and it is never the same thing twice. Mix them up and you will misread what the news means for you. The question is the same for a judge in a court of the whole country and for a judge in a court of one state.'
    ],
    map: { branch: 'courts' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A judge asked whether a law is allowed ---------- */
  { id: 'meet-review', kind: 'meet', outcome: 'review',     // heading is the outcome's plain words, from the key
    link: 'First: a judge asked whether a law is allowed.',
    case: 'r-leaflets', mark: 'J1',
    explain: [
      'Marisol does not argue about whether she handed out leaflets. She says the rule itself is not allowed, because the Constitution protects her right to speak. The Constitution sits above every other law in the country, so a rule that clashes with it cannot stand.',
      'The judge is not asked whether the rule is a good idea, only whether it clashes. If it does, the judge refuses to apply the rule and the town can no longer use it. A judge does this only for someone the rule has actually harmed, as it did Marisol.'
    ],
    spot: [
      { do: 'Find the person the law harmed: Marisol, fined $50.', why: 'A judge only checks a law for someone it has really hurt.' },
      { do: 'Find what she says about the law: it goes against her right to speak.', why: 'She says the law itself is not allowed.' },
      { do: 'Find the question put to the judge: does the rule fit the Constitution?', why: 'The judge is asked to check the law, not to say whether it is a good idea.' }
    ],
    feature: { step: 'J1', option: 'check' },
    name: 'This is {o:review}: the judge takes a second look at a law the lawmakers already made.' },

  { id: 'check-review', kind: 'check', after: 'review',
    case: 'r-gate',
    ask: { type: 'phrase', step: 'J1', say: 'Which words show what Anil says about the law? Tap them.',
           answer: 'the law takes away the right to gather peacefully' } }
]);
