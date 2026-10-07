// Scams, Unit One, part one: the opening card, the two ideas every later card leans on, and the first kind of message,
// the one that asks nothing. This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit
// carries `family`, and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, "what you must be
// able to point to", the key's question and answer on a meet card, the stem of every commit prompt, and the heading of an
// again or portrait card. Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before you tap, call, pay or reply, check what the message asks',
    canDo: 'Before you tap a link, call a number, pay or reply, check what the message actually asks you to do. It is always one of the five things below, it is written in the message, and you can read it before you do anything.',
    everyday: [
      'Your phone buzzes with a text that says it is from your bank. Before you have read to the end, you are already asking yourself what it wants: for you to tap something, call someone, pay something, or only to know something.',
      'That is the right question, and a scam is built to make you skip it. It wants you asking who it is from and how bad the problem is. A real bank and a copy of it can use the same name, logo and words. What the message asks you to do is the one thing you can read in it, and it shows what you could lose: your phone or computer, an account, your money, or facts about you.',
      'The message can be real or a copy. This unit does not decide that. It teaches the question that comes first.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- two ideas the first answer rests on ---------- */
  { id: 'term-already', kind: 'term', term: 'already',
    h: 'Where a number, a link or an app comes from',
    link: 'One idea comes first, because every answer in this unit uses it.',
    case: 'g-t-already',
    plain: [
      'Anyone can put any number in a text, so Mina could not know the first one was the bank’s. The number on her card was in her wallet before the text arrived, so she could trust it.',
      'Numbers, links and apps come in two sorts: the ones that came with the message, and the ones that were yours first. Only the ones that were yours first lead to the real company. Anything that came with the message does not count, even if you are the one who dials it or taps it.'
    ] },

  { id: 'term-check', kind: 'term', term: 'check',
    h: 'What to do when you are not sure',
    link: 'When you are not sure about a message, {t:already} gives you one dependable way to settle it. That way has a name.',
    case: 'g-t-check',
    plain: [
      'Tom did not have to judge whether the email looked real. He did not do what it asked and he did not reply to it. He called his manager on the number in the staff directory, which is {t:already}, because only the person an email names can say whether she wrote it.',
      'A real person or company does not mind being asked this way. If someone gets angry, or hurries you, when you want to ask, that tells you something too.'
    ] },

  /* ---------- First: a message that asks nothing ---------- */
  { id: 'meet-nothing', kind: 'meet', family: 'nothing',
    link: 'First: a message that asks nothing of you. It only gives you news, and it is the easiest one to forget.',
    case: 'g-delivery', mark: 'D1',
    explain: [
      'Ruth’s text is news: something will happen, the text says so, and it stops. News can be about a delivery, an appointment, a closed office, a new sign-in on your account or a refund that went through. It can sound serious, and it can mention money. If you are not asked to do anything about it, it belongs here.',
      'It may suggest a next step, as long as the step uses only {t:already}, like your own app or the number on your card.',
      'Real warnings land here. If you treated every message as suspicious, you would stop reading the real ones too.'
    ],
    spot: [
      { do: 'Look for a request: Ruth’s text only says her order is out for delivery.', why: 'News says what is happening, and a request says what you must do.' },
      { do: 'Look for a link, number or app that came with it: Ruth’s text has none.', why: 'That is how a message gets you to act.' },
      { do: 'Ask what happens if you do nothing: Ruth’s order still arrives.', why: 'If nothing depends on you, nothing is being asked.' }
    ],
    feature: { step: 'D1', option: 'nothing' },
    name: 'This is {a:D1.nothing}. Ruth could ignore the text and nothing would change.' },

  { id: 'check-nothing', kind: 'check', after: 'nothing',
    case: 'g-closure',
    ask: { type: 'phrase', step: 'D1', say: 'Which words are only news for Mr. Dunne? Tap them.',
           answer: 'Our office will be closed on October 27 and 28 for a staff training day' } }
]);
