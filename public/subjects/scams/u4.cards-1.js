// Scams, Unit Four, part one: the opening card, and the two names about someone you know only online.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the reminder of Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question
// and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('scams', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'Money: what is the request for, and what does it ask you to do with it?',
    canDo: [
      'After this unit you can take a request for money, however it reaches you, and say which of nine things it is: eight kinds of scam, and the real kind of request that they copy. You will be able to point to the words in the request that show it, to say why it is not one of the others, and to say what to do next, on the spot, before any money leaves your account.',
      'The request can come as a text, an email, a letter, a phone call or a message from someone you have been talking to online. It can be for £2.99 or for your savings.'
    ],
    everyday: [
      'You already meet these. A text says that a parcel is waiting and a small fee must be paid. Your builder emails an invoice. Someone you have only ever met online is in trouble. A caller says that you owe tax and that someone will come to your door. A buyer for your old bike pays you too much. Every one of them asks for money, and every one of them can be real or can be a copy.',
      'In the first unit you learned to ask what a message asks you to do. This unit starts from one of its answers: {a:D1.money}. It is the answer where most is at stake, because money sent by bank transfer, in cash, in gift cards or in crypto is usually very hard to get back. That is why this part of the key has two questions and not one: what the request says the money is for, and what it asks you to do with the money.',
      'There are nine names to learn here, and one of them is not a scam. The real request to pay has a name of its own because real requests come with the same reasons as the copies: a bill, a fine, a deal. If the key had no place for them, you would have to treat every bill as a scam, and a person who suspects everything soon stops checking anything.'
    ],
    add: [
      'Two things hold all the way through. The first is that what makes a request real is not how it looks. It is whether it holds up when you contact the person or the company yourself, through {t:already}. That is what {t:check} means. The second is that every question in this unit can be answered at the moment the request arrives, from the request itself, before any money leaves your account.',
      'Many scams show more of themselves afterwards: a withdrawal that is refused, a buyer’s payment that vanishes, a second request for more. That is how many people notice, and by then the money has gone. The key leaves all of that out and asks only about what you can see on the day. Each name is told in the order in which it really happens, with what you can see when the request arrives marked apart from what only shows later.'
    ],
    map: { branch: 'money' } },

  /* ---------- Romance scam ---------- */
  { id: 'meet-romance', kind: 'meet', outcome: 'romance',
    link: 'The first unit gave you five kinds of request, and this unit takes one of them, {a:D1.money}, and splits it into nine names. The first is the slowest of all: money asked for by someone you have never met.',
    case: 'm-romance-engineer', mark: 'M1',
    strip: [
      'Ana has never met Daniel. She knows him only through a dating site, where he has written to her every day for eight months.',
      'He has trouble of his own, and it is far away: his daughter is in a hospital abroad and will not be treated until £4,200 is paid.',
      'He asks Ana to send the money today, into an account, and promises to pay her back.',
      'Nothing else is asked of her: no password, nothing to install, no facts about herself.'
    ],
    explain: [
      'Look at how this reached Ana. It did not arrive as a bill, a prize or a threat. It arrived from a person, after eight months in which he asked for nothing and she came to rely on his messages. By October, Daniel was not a stranger asking Ana for money. He was her partner, asking for help for his daughter.',
      'That is the whole method, and it takes time on purpose. The scammer writes every day and is warm and attentive. There is always a reason why the video call does not work, why they cannot meet and why there are so few photographs. Then comes an emergency that cannot wait and that only Ana can fix: a hospital bill, a fine, a ticket home. It is always far away and always urgent, which is what stops her from asking anyone near her.',
      'Notice what Ana could point to on the day the request arrived. Daniel is someone she knows only through messages. And the money is for trouble that he says is his own. Both are written in the case, and neither needs any knowledge of how scams work.'
    ],
    feature: { step: 'M1', option: 'online' },
    name: 'The name for this is {o:romance}. The relationship is the tool: the money is asked for in the name of a partner who has become real to the person who pays.' },

  { id: 'again-romance', kind: 'again', outcome: 'romance',
    link: 'The last card gave you what to point to, from one case: {needs:romance}. Here it is again in a different story: a gardening forum instead of a dating site, and a stolen bag instead of a hospital bill.',
    first: 'm-romance-engineer', second: 'm-romance-ticket', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a dating site, a gardening forum, a hospital, an airport). Look at one thing only: what the person says the money is for.',
    prompt: { kind: 'phrase', answer: 'My bag was stolen at the airport, with my passport and my card' },
    shared: [
      'In both cases the person asking for money has never been met. Daniel and Elena are voices in messages, and in both cases a camera that does not work keeps it that way. In both, the money is for trouble that the writer says is their own: a daughter’s hospital bill, a stolen bag. And in both the request comes after months in which nothing was asked.',
      'The stories share nothing else, so the kind of trouble does not matter. A ticket home, a fine, a blocked card, a customs charge, a hospital bill: any of them can be the one. What the two cases share is who is asking and what the money is for, and that is what {o:romance} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: love, a bill, a parcel, a tax office, a sale. Underneath is what the request says the money is for, and what it asks you to do with the money.',
      'The nine names belong to the layer underneath. Any story can carry any name, and a real request and its copy can use the same story: a builder’s invoice, a parcel fee, a letter from the tax office. A friendly message can be a scam and a frightening one can be real.',
      'From here on the cases change their stories on purpose, and some of them are real requests. Whether a request is real is not something you read off its story. You find it out by contacting the person or the company yourself, and this unit teaches you when and how. What the key adds is a name for each kind of request, so that you know what to look for and what to do.'
    ],
    fixed: ['what the request says the money is for, and what it asks you to do with the money, which are what the key asks: {q:M1} and {q:M2}'],
    varies: ['the story and the sender', 'how friendly or frightening it sounds', 'the amount', 'how well it is written', 'whether it is real or a copy'] },

  { id: 'portrait-romance', kind: 'portrait', outcome: 'romance',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:romance} in real life, where nobody marks the words for you.',
    typical: [
      'It is slow. A first message on a dating site, a hobby forum, a game or social media; weeks of ordinary, warm conversation every day; then months. Nothing is asked for in the early weeks, and that is part of how it works.',
      'The person is never there to be seen. The photographs are of someone else, the calls fail, and when a video does connect there is a reason it is short. Often the job is far away and hard to check: an engineer on a rig, a nurse on a contract, a soldier on a posting.',
      'A small favour sometimes comes first: a phone top-up, a parcel to forward. Each yes makes the next request easier to say yes to.',
      'Then comes the emergency: a hospital bill, a fine, a ticket home, a blocked card, a customs charge. It is always far away, always urgent, and always something only you can fix, because the person says they cannot reach anyone else.',
      'The money is to go by a way that is hard to undo, and often you are asked to keep it private, because your family would “not understand”.',
      'Which of this can you see when the request arrives? The months of messages, the person you have never met and the emergency are all in front of you on the day. The next emergency, which follows as soon as you have paid, only shows afterwards. The key does not use it, because by then the money has gone.'
    ],
    not: [
      'A long friendship that began online is not this name, and neither is a couple who met on a site and have since met in person. This name needs a request for money, for trouble that someone you have never met says is theirs.',
      'A friend or partner whom you know in person, or through people you both know, is outside the key. You can ask the people around them, which is the thing you cannot do for a voice in messages.'
    ],
    wild: ['"I would not ask if I had anyone else."', '"The hospital will not treat her until it is paid."', '"My card is blocked and I am stuck at the airport."', '"Please do not tell your family. They would not understand."'],
    self: 'You may meet it on a dating site, but also on social media, in a game’s chat or in a forum for a hobby. It can find people at a vulnerable time, such as after a bereavement or a divorce, when a daily message matters a great deal.',
    ask: '"Have I ever met this person, and is the money for trouble that they say is theirs?"',
    act: [
      'Send nothing today, however urgent it sounds. A real emergency does not end because you took a day to think.',
      'Ask for a live video call that they start now, not a recording. If it fails again, or there is a new reason why not, that is your answer.',
      'Tell someone who knows you in person: a friend, a relative, your bank. If you have been told to keep it secret, that is the answer too.',
      'Ask yourself why this person cannot get help from anyone near them, and why it has to be you.',
      'If you have already sent money, ring your bank straight away, on the number on the back of your card. A payment can sometimes be stopped in the first hours.'
    ] },

  { id: 'check-romance', kind: 'check', after: 'romance',
    case: 'm-romance-check',
    ask: { type: 'phrase', step: 'M1', say: 'Which words say what Craig is being asked to pay for? Tap them.',
           answer: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card' } }
]);
