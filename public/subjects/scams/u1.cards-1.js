// Scams, Unit One, part one: the opening card, the two ideas every later card leans on, and the first kind of message,
// the one that asks nothing. This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit
// carries `family`, and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, "what you must be
// able to point to", the key's question and answer on a meet card, the stem of every commit prompt, and the heading of an
// again or portrait card. Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before anything else: what is this message asking you to do?',
    canDo: 'After this unit you can take a message, a call, a text or an offer, and say which of five things it asks of you right now: {a:D1.device}; {a:D1.access}; {a:D1.money}; {a:D1.details}; or {a:D1.nothing}. You will be able to point to the words that show which one.',
    everyday: [
      'You already do a rough version of this every day. Your phone buzzes with a text that says it is from your bank, and before you have read to the end, part of you has asked what it wants: for you to tap something, call someone, pay something, or only to know something.',
      'That is the right question to start with, and it is easy to skip. A scam is built to make you ask other questions first: who is this from, how bad is the problem, how fast do I have to act? A real bank and a copy of it can use the same name, logo and words. What a message asks you to do is written in it, and it tells you what you could lose: control of your device, a way into an account, money, or facts about yourself.',
      'In this unit a case is a message, a call or an offer, written the way someone really gets it. The message can be real or a copy made to take something. This unit does not decide that: it teaches the question that comes first.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- two ideas the first kind rests on ---------- */
  { id: 'term-already', kind: 'term', term: 'already',
    h: 'Where a number, a link or an app comes from',
    link: 'One idea has to be clear before the first message, because the question and its answers use it again and again.',
    case: 'g-t-already',
    plain: [
      'Mina’s text gave her a number to call, and she did not call it. She called the number printed on the back of her bank card instead. Anyone can send a text with any number in it, so she could not know the first number was the bank’s. She could know the one on her card was, because it was in her wallet before the text arrived.',
      'So there are two kinds of number, link and app: the ones that came with the message, and the ones that were yours first, such as a number on your card, a web address you typed or saved long ago, or an app you installed months ago. Only the ones that were yours first can be relied on to lead to the real company. A number, a link or an app that came with the message never counts, even if you are the one who dials it or taps it.'
    ] },

  { id: 'term-check', kind: 'term', term: 'check',
    h: 'What to do when you are not sure',
    link: 'The idea of {t:already} gives you the one reliable way to settle a doubt about a message. It has a name.',
    case: 'g-t-check',
    plain: [
      'Tom did three things. He did not do what the email asked, he did not reply to it, and he asked the person it claimed to come from, using {t:already}: the number in the staff directory. It works because the one person who knows whether she sent the email is the person it names. Tom could not have told a real email from a copy, and he did not need to.',
      'A real company or person does not mind being asked this way. If someone gets angry, or hurries you, when you want to do it, that tells you something too.'
    ] },

  /* ---------- the first kind: a message that asks nothing ---------- */
  { id: 'meet-nothing', kind: 'meet', family: 'nothing',
    link: 'The first kind is the easiest to forget, because it asks you for nothing at all and only gives you news.',
    case: 'g-delivery', mark: 'D1',
    strip: [
      'There is one message, from the store where Ruth placed an order.',
      'It tells her what will happen: the order is out for delivery, and when to expect it.',
      'It asks her for nothing and gives her nothing to tap. If she does nothing at all, the order still arrives.'
    ],
    explain: [
      'What you are shown is news: something will happen, the message says so, and then it stops. The news can be about a delivery, an appointment, an office that is closed, a new sign-in noticed on your account, or a refund that has gone through. Some of it sounds serious, and some of it mentions money. What puts a message here is that, whatever the subject, you are not asked to do anything about it.',
      'It may suggest what you could do if the news is wrong, as long as what it suggests uses only {t:already}: the app on your phone, or the number on your card.',
      'This is a kind of its own because it is the one kind that needs nothing from you. If there were no place for a real notice, you would file it under "suspicious", and someone who suspects everything stops reading the real warnings too.'
    ],
    feature: { step: 'D1', option: 'nothing' },
    name: 'The answer is {a:D1.nothing}. You looked, and what is there is only news.' },

  { id: 'check-nothing', kind: 'check', after: 'nothing',
    case: 'g-closure',
    ask: { type: 'phrase', step: 'D1', say: 'Which words tell Mr. Dunne something that will happen, without asking him to do anything? Tap them.',
           answer: 'Our office will be closed on October 27 and 28 for a staff training day' } }
]);
