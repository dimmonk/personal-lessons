// Psychology, Unit One, part one: the opening card and the first kind (one person's reasoning).
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.

FC.cards('psychology', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before any name: what kind of thing are you looking at?',
    canDo: 'After this unit you can read a short account of something a person said or did, and say which of four kinds of thing it shows, pointing to the words that tell you.',
    everyday: [
      "You already do a rough version of this every week. A friend describes a row with her partner: 'He's manipulating her.' A colleague talks about himself all lunch: 'He is so full of himself.' Your brother is short with everyone at dinner: 'He's just a bad-tempered person.'",
      'Each is a label reached in one jump, and they are not even about the same thing: what one person does to another, what a man is like across his whole life, and what may be only a bad week. Mix these up and you are wrong before you have chosen a word.',
      'So before any label there is an earlier question: what kind of thing is in front of you? A case is a short account of something a person said or did. This unit teaches the question, and four kinds are its answers.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The first kind: one person's reasoning ---------- */
  { id: 'meet-reasoning', kind: 'meet', family: 'reasoning',     // heading is the family's plain words, from the key
    link: 'The first kind: a person telling you what they have decided, and why.',
    case: 'g-job', mark: 'D1',
    strip: [
      'One person at the center: Leila.',
      'A choice that is hers, and her reasons in her own words: the pay against the train and her children.',
      'Her sister is there only to listen. Nothing is said about her, or done to her.'
    ],
    explain: [
      'This is one decision and the thinking behind it: one person, something that is theirs (a choice, a view, or something they did), and the reasons they give. What they do with a fact counts too: changing their mind, or explaining why it does not count.',
      'The kind does not depend on whether the reasoning is good, or on who listens. Leila could write the same words in a diary and nothing would change. Take the listener away: if the case is still whole, it is this kind.'
    ],
    feature: { step: 'D1', option: 'reasoning' },
    name: 'Reasoning is the thinking a person does to reach, defend or change a view or a choice. It does not say the thinking is good.' },

  { id: 'check-reasoning', kind: 'check', after: 'reasoning',
    case: 'g-car',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case gives a person’s reasons for a choice of her own? Tap it.',
           answer: 'The repair was $300, and a new one would cost me $200 a month' } }
]);
