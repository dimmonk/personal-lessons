// Scams, Unit One, part one: the opening card, the two ideas every later card leans on, and the first kind of message,
// the one that asks nothing. This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit
// carries `family`, and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card, "what you must be
// able to point to", the key's question and answer on a meet card, the stem of every commit prompt, and the heading of an
// again or portrait card. Key wording is never typed here: tokens are filled in from key.js.

FC.cards('scams', 'u1', [

  { id: 'orient-gate', kind: 'orient',
    h: 'Before anything else: what is this message asking you to do?',
    canDo: [
      'After this unit you can take a message, a call, a text or an offer, and say which of five things it asks of you right now: {a:D1.device}; {a:D1.access}; {a:D1.money}; {a:D1.details}; or {a:D1.nothing}. You will be able to point to the words in it that show which one, and to say why it is not one of the other four.',
      'The message can come from a bank, a shop, an employer, a friend or a stranger, and it can be real or a copy made to take something from you. This unit does not decide that. It teaches the question that comes first, and everything after it in this subject starts from the answer.'
    ],
    everyday: [
      'You already do a rough version of this every day. Your phone buzzes with a text that says it is from your bank. Before you have read to the end, part of you has asked what it wants from you: for you to tap something, to ring someone, to pay something, or only to know something.',
      'That is the right question to start with, and it is easy to skip. A scam is built to make you ask other questions first: who is this from, how bad is the problem, how fast do I have to act? A message from a real bank and a copy of it can use the same name, the same logo and the same words. What each one asks you to do is written in it for you to read, and it tells you what you could lose if you did it: control of your phone or computer, a way into one of your accounts, money, or facts about yourself. Each of those is guarded in a different way, which is why this is the first question.'
    ],
    add: [
      'One word is used all the way through, so here it is once. A case is a message, a call or an offer, written down the way someone really receives it: the sort of thing you read on your phone or hear on a call. Every case is put through the same short list of questions, always in the same order. Each answer narrows down what the case can be, until one name is left.',
      'This unit teaches the first question and nothing after it. It has five answers, and in this unit each answer is also the name of a kind of request, so there are five names to learn. Four of them lead on to a further question, taught in a later unit, that gives a finer name: the name of a kind of scam, or of the real thing that the scams copy. The fifth does not. When the answer is {a:D1.nothing}, there is nothing more to ask, and that is a result in its own right.',
      'Five ideas are explained on cards of their own, each just before the first case that needs it: where a phone number, a link or an app comes from; what to do when you are not sure; a code that is sent to your phone; the box that asks you to press Allow; and letting someone watch your phone or computer.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- two ideas the first kind rests on ---------- */
  { id: 'term-already', kind: 'term', term: 'already',
    h: 'Where a number, a link or an app comes from',
    link: 'The last card said that this unit teaches one question about messages. Before the first message, one idea has to be clear, because the question and its answers use it again and again.',
    case: 'g-t-already',
    plain: [
      'Look at what Mina did. A text gave her a number to ring, and she did not ring it. She rang a different number, the one printed on the back of her bank card. She might have reached the real bank by ringing the first one as well. What she could not know, from her phone, was whether the number in the text was the bank’s at all, because anyone can send a text with any number in it. She could know that the number on her card was the bank’s, because it was in her wallet before the text arrived.',
      'So there are two kinds of number: the kind that came with the message, and the kind that was yours before it. The same goes for a link and an app. A link in a message came with the message. A web address that you typed in yourself or saved long ago, and an app that you installed months ago, were yours first.',
      'The ones that were yours first are the ones that you can rely on to lead to the real company, and the meaning below lists them. One part of it matters more than the rest: a number, a link or an app that came with the message never counts, even if you are the one who dials it or taps it.'
    ] },

  { id: 'term-check', kind: 'term', term: 'check',
    h: 'What to do when you are not sure',
    link: 'The idea of {t:already} gives you the one reliable way to settle a doubt about a message. That way has a name, and this unit uses it, so it comes before the first message is looked at.',
    case: 'g-t-check',
    plain: [
      'Tom did three things. He did not do what the email asked. He did not reply to it. And he asked the person it claimed to come from, using {t:already}: the number in the staff directory. That is all there is to it. It works because the one person who knows whether she sent the email is the one who is meant to have sent it.',
      'It does not depend on being able to tell a real email from a copy. Tom could not have told. It depends only on the number, the link or the app he used being one that was his before the email came.',
      'A real company or a real person does not mind being asked this way. A real bank would rather you rang the number on your card than acted on a text. If someone gets angry, or hurries you, when you want to do it, that tells you something too.'
    ] },

  /* ---------- the first kind: a message that asks nothing ---------- */
  { id: 'meet-nothing', kind: 'meet', family: 'nothing',
    link: 'You have the two ideas you need. The first kind of message to look at is the one that is easiest to forget, because it asks you for nothing at all and only gives you news.',
    case: 'g-delivery', mark: 'D1',
    strip: [
      'There is one message, and it comes from the shop where Ruth placed an order.',
      'It tells her something that will happen: the order is out for delivery, and when to expect it.',
      'It asks her for nothing: no payment, no password, no code, no facts about herself, nothing to install or open.',
      'It gives her no link, no number and no app to use. There is nothing in it for her to tap.',
      'If she does nothing at all, the order still arrives.'
    ],
    explain: [
      'What you are shown is news. Something will happen, the message says so, and then it stops. That is all a message of this kind is made of: a fact, and no request.',
      'The news can be about a delivery, an appointment, an office that is closed, a new sign-in noticed on your account, or a refund that has gone through. Some of it sounds serious, and some of it mentions money. What puts a message in this kind is that, whatever the subject, you are not asked to do anything about it.',
      'The message may also suggest what you could do if the news is wrong, as long as what it suggests uses only {t:already}: the app on your phone, or the number on your card. Those were yours before the message came, so the message gives you nothing new to use.',
      'This is a kind of its own because it is the one kind that needs nothing from you. Every other kind asks for something, and every other kind could cost you something if the message turned out to be a copy. If the questions had no place for a real notice, you would have to file it under "suspicious", and a learner who suspects everything stops reading the real warnings too. Having a name for it means that you can look at a message, find nothing asked, and leave it alone.'
    ],
    feature: { step: 'D1', option: 'nothing' },
    name: [
      'The answer, and the name of this kind, is {a:D1.nothing}. The words mean what they say: the message tells you something, and nothing in it asks you to do anything.',
      'After this answer there is nothing more to ask. It has no finer name to give, and that is a result in its own right: you looked, and what is there is only news.'
    ] },

  { id: 'again-nothing', kind: 'again', family: 'nothing',
    link: 'The last card gave you what to point to for {a:D1.nothing}, from one case: {needs:nothing}. Here is a second case with a different story, and this time the message also suggests something the reader could do.',
    first: 'g-delivery', second: 'g-appointment', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a delivery, a dentist). Look at one thing only: do the words tell the reader what is going to happen, and ask nothing of them?',
    prompt: { kind: 'phrase', answer: 'your appointment is on Tuesday 14 October at 10.20' },
    shared: [
      'Both messages are made of the same thing: news about something that is going to happen, and no request. In the first an order is on its way, and in the second an appointment is fixed. Neither asks the reader to pay, to sign in, to give a code, to tell the sender anything or to install anything.',
      'The second message does say what to do if the date does not suit: ring the number on the appointment card. That does not make it a request. It is a suggestion, it asks nothing now, and it points to a number that was already in the reader’s hands before the text arrived: {t:already}.',
      'The two stories, a delivery and a dentist, share nothing else. So this is not about shops or about health. It holds wherever a message only tells you something. That is what {a:D1.nothing} names.'
    ] },

  { id: 'lens-gate', kind: 'lens',
    h: 'The story does not decide the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a delivery, a dentist, a bank, a landlord. The layer underneath is what the message asks you to do. So far you have met one thing a message can ask, which is nothing. Four more are to come.',
      'The question, {q:D1}, is about the layer underneath. A message from a bank can be any of the five, and so can a message from a stranger. The story tells you nothing about the answer.',
      'Two more things change on purpose from here on. The first is how alarming a message sounds: a calm message can ask for a great deal, and an alarming one can ask for nothing. The second is whether the message is real. Some cases are real messages that a person can simply do or ignore, and some are copies made to take something. The answer to this question is the same for a real message and for a copy of it, when both ask for the same thing. Telling those two apart is a job for the questions that come after this one, and for {t:check}.'
    ],
    fixed: ['what the message asks you to do right now, which is the question: {q:D1}'],
    varies: ['the story and the sender', 'how alarming it sounds', 'how well it is written', 'whether it is real or a copy'] },

  { id: 'portrait-nothing', kind: 'portrait', family: 'nothing',
    link: 'You know what to point to for {a:D1.nothing}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'It says that something has happened or will happen: an order, an appointment, a closure, a new sign-in noticed, a refund made, a bill that will be taken as usual.',
      'Nothing in it is for you to do. Some real notices say "you do not need to do anything", but most do not: they simply stop after the news.',
      'It may say what to do if the news is wrong, and when it does, it points only to what you already had: the app on your phone, the number on your card, the account you already use.',
      'It can be about money, about security or about your health, and it can be unwelcome news. How serious the subject is does not change the answer.',
      'The message itself never needs a reply from you. Whether to do anything about the news, such as opening your own app, is a decision you make later, with what you already had.'
    ],
    not: [
      'A message that asks nothing is not the same as a message that is safe. A copy of a real notice can use the same words and add a button, a link or a number, and then it is no longer news: it is asking. The words around the news can be identical. The thing that has been added is the thing to look for.',
      'A message that gives you a number to ring or a link to tap, and nothing else, is not this answer either, because the number or the link came with the message and you are being sent to use it. There is no finer name for it, and you do not need one: leave the number and the link alone, and use {t:check}.'
    ],
    wild: ['"Your order is out for delivery."', '"Reminder: your appointment is on Tuesday."', '"A new device signed in to your account. If this was you, no action is needed."', '"Your refund has been sent."', '"Our office is closed on Monday."'],
    self: 'You meet it every week: delivery updates, appointment reminders, notices from your bank, your employer or your council. Because most of them are harmless, you stop reading them closely, and that is the moment a copy with a link added slips through.',
    ask: '"Does anything in this message ask me to do something, or does it only tell me?" If it only tells you, and anything it suggests uses what you already had, the answer is the one for news that asks nothing.' },

  { id: 'check-nothing', kind: 'check', after: 'nothing',
    case: 'g-closure',
    ask: { type: 'phrase', step: 'D1', say: 'Which words tell Mr Dunne something that will happen, without asking him to do anything? Tap them.',
           answer: 'Our office will be closed on 27 and 28 October for a staff training day' } }
]);
