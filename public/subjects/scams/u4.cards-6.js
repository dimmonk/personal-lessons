// Scams, Unit Four, part four (first piece): the fake official scam, its pair with the real request, the two exceptions that belong
// to it, and the wrong idea about banks. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Fake official scam ---------- */
  { id: 'meet-fakeofficial', kind: 'meet', outcome: 'fakeofficial',
    link: 'So far nothing in this part has frightened you. The next name does: a threat from someone who says that they have power over you.',
    case: 'm-off-tax', mark: 'M1',
    strip: [
      'The call comes out of the blue, from a recorded voice and then from a man who says that he is an officer.',
      'The caller says that Dee owes £2,300 in unpaid tax and that there is a warrant for her arrest.',
      'Officers will be at her door within two hours unless she pays today.',
      'She is to pay by buying gift cards and reading the numbers to him, and she is told not to tell the shop staff why.'
    ],
    explain: [
      'This one works by fear, not by hope or by trust. Dee is told that she is in trouble with the law, that it can be settled only by paying, and that she has hours. A frightened person does not stop to check, and the caller knows it.',
      'Look at how she is to pay. Gift cards, crypto, cash and a transfer to an account that the caller gives are all ways of paying that cannot be undone. A gift card number read down a phone is spent within minutes, and a transfer that you send yourself is very hard to recall. No real tax office or police force takes payment in gift cards.',
      'And look at the secrecy. Dee is told not to tell the shop staff, because they “may be involved”. A shop assistant or a bank clerk is exactly the person who would say stop, and the caller has told her in advance not to listen to them. The caller also stays on the line, so that she has no time to ask anyone.',
      'You can see all of this on the day. Who the call says it is from, the threat, the hurry, how she is to pay and the order to say nothing are all in the call itself.'
    ],
    feature: { step: 'M1', option: 'official' },
    name: 'The name for this is {o:fakeofficial}. The “official” is the role that the caller claims: the tax office, the police, a court, or your own bank. The claim is the lie.' },

  { id: 'again-fakeofficial', kind: 'again', outcome: 'fakeofficial',
    link: 'The tax caller gave you what to point to: {needs:fakeofficial}. Here it is again with no tax and no police: a caller who says that he is from your own bank.',
    first: 'm-off-tax', second: 'm-off-bank', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a warrant, a bank, gift cards, a safe account). Look at one thing only: the danger that the caller gives as the reason for paying.',
    prompt: { kind: 'phrase', answer: 'Criminals are inside your account' },
    shared: [
      'In both cases someone rings, says that they are from an organisation that has power over the person, and gives a danger as the reason to pay: an arrest, and criminals in the account. In both, the person is to pay at once, in a way that cannot be undone, and is told not to tell anyone who might stop them. Leon’s caller even stays on the line while he opens his banking app.',
      'The roles are different, a tax officer and a bank’s fraud team, and so are the ways of paying, gift cards and a transfer. A threat from someone official, with a payment that is at once, final and secret, is what {o:fakeofficial} names.'
    ] },

  { id: 'portrait-fakeofficial', kind: 'portrait', outcome: 'fakeofficial',
    link: 'What you point to is a claim to be an official, a danger, and an order to pay at once and tell no one. This card fills in the rest of the picture.',
    typical: [
      'It starts with a call, a recorded message, a text or an email from someone who says that they are an official: the tax office, the police, a court, the council, immigration, or your bank’s fraud team. The number on your phone may even show the real name, because numbers can be faked.',
      'The caller knows your name and may know your address and part of a card number. That proves nothing: such details are bought and sold cheaply, and knowing them does not make the caller what they say.',
      'There is a danger: a warrant, a frozen account, a cancelled visa, criminals in your account. It is made to be frightening and to leave no time.',
      'There is a way of paying, and it is always one that cannot be undone: gift cards, crypto, cash, or a transfer to a “safe account” that they give you.',
      'You are told to say nothing to the bank, the shop or your family. The reason given is that someone there is involved. The real reason is that anyone there would stop you.',
      'Which of this can you see on the day? All of it is in the call: the claim, the danger, the hurry, the way of paying and the order to say nothing. Nothing in it can be checked from the call, and that is the point: the caller wants you to stay on the line.'
    ],
    not: [
      'Not every call from an official or a bank is this name. Real tax offices write first, give you weeks and a way to appeal, and let you pay on their own website or by an ordinary transfer to an account that you can look up. A real bank may ring about a payment that looks wrong and ask whether you made it, and a real adviser is happy for you to hang up and ring the number on your card.',
      'What the real ones never do is take gift cards or crypto, ask you to move your money to a “safe account”, or tell you to keep it secret from the bank.'
    ],
    wild: ['"This is your last warning before a warrant is issued."', '"Do not tell the bank. They may be involved."', '"Stay on the line while you buy the cards."', '"Move your money to this safe account now."'],
    self: 'It reaches you by phone, by recorded message, by text and by email. Fear works on careful and sensible people as well as on everyone else, so being caught by it is no sign of foolishness.',
    ask: '"Am I being told to pay at once, in a way that cannot be undone, and to tell no one?"',
    act: [
      'Hang up. You do not owe the caller politeness, and a real official will not mind.',
      'Then do {t:check}: ring the tax office or your bank on a number that you already had, such as the one on your card, a bill or a letter. Use a different phone if you can, or wait a few minutes, because some callers keep the line open.',
      'Never pay by gift card, crypto or cash to settle a debt, and never move your money to a “safe account”. No real official or bank asks for either.',
      'Tell someone, even if you were told not to. The instruction to say nothing is the clearest sign that this is the scam.',
      'If you have already paid, ring your bank at once, and the police.'
    ] },

  { id: 'check-fakeofficial', kind: 'check', after: 'fakeofficial',
    case: 'm-off-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official'] } },

  { id: 'look-fakeofficial-realpayment', kind: 'lookalike', ledger: 'fakeofficial~realpayment',
    link: 'You have met both names. This pair is about the same tax, from the same office. This card puts them side by side.',
    cases: ['m-sam-call', 'm-sam-letter'],
    instruction: 'Both cases are about Sam and £1,900 of unpaid tax. Compare one thing: how the request holds up when Sam looks into it for himself.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-sam-letter' },
    difference: [
      'In Case A a man rings out of the blue and demands payment today, by transfer to an account that he gives, and tells Sam not to tell his employer. He gives Sam nothing that he could look up. The case is {o:fakeofficial}.',
      'In Case B a letter gives Sam 30 days and a way to appeal, and says not to trust a link or a number in any message. Sam types in the address that he knows from his own tax account, and finds the same amount and the same reference. The key’s answer is {a:M2.agreed}, and the case is {o:realpayment}.',
      'The tax office, the sum and the man are the same. What differs is whether he is hurried and kept quiet, or given time and something that he can check for himself.'
    ] },

  { id: 'look-fakeofficial-codescam', kind: 'lookalike', ledger: 'fakeofficial~codescam',
    link: 'Both of the last two names can arrive as a call from your bank, and one of them you met in an earlier unit, in the part of the key about signing in. Here they are side by side, with the same caller and the same story.',
    cases: ['m-elena-safe', 'm-elena-code'],
    instruction: 'Both cases are about Elena and a caller who says that he is from her bank’s fraud team, and in both he says that her account is in danger. Compare one thing: what the caller asks her to do.',
    prompt: { kind: 'which', option: 'D1.access', answer: 'm-elena-code' },
    difference: [
      'In Case A the caller asks Elena to move her savings to an account that he gives her, and to tell no one. That is a request to send money, and the key’s answer to the first question is {a:D1.money}. The case is {o:fakeofficial}.',
      'In Case B the caller asks Elena to read out a code that has just been texted to her. That is a request for a way into her account, and the key’s answer to the first question is {a:D1.access}. The case is {o:codescam}.',
      'The bank, the call and the danger are the same. The two cases are told apart by the very first question of the key, before the questions of this unit are reached: money, or a way into an account.'
    ] },

  { id: 'exc-official-prize', kind: 'exception', ledger: 'advancefee~fakeofficial', looksLike: 'fakeofficial', is: 'advancefee',
    h: 'A refund from the tax office that needs a fee',
    link: 'The caller in the last cards threatened. Here is a message that sounds official, and does not threaten at all.',
    case: 'm-exc-taxrefund',
    setup: 'The message comes from the tax office, and a message from an official about tax is what {a:M1.official} sounds like. Yet the key’s answer for this case is {a:M1.prize}.',
    prompt: { kind: 'phrase', answer: 'owes you a refund of £740' },
    because: [
      'Read what the message says. It does not threaten anyone, and it does not say that you owe the tax office anything. It says that the tax office owes you £740, and that you must pay a fee to release it. That is money that is waiting for you, and a fee that comes first.',
      'So the case shows both things: an official as the sender, and money that is waiting for you. The key gives such a case the answer about the waiting money. Writing in the name of the tax office is how the scammer makes the prize look real. It is not what the message asks you to do.'
    ],
    take: 'The key decides it this way on purpose, so that two people reach the same name. Whatever the sender calls themselves, put your finger on what the money is for.' },

  { id: 'exc-rush-link', kind: 'exception', ledger: 'fakeofficial~fakelink', looksLike: 'fakeofficial', is: 'fakelink',
    h: 'A threat, a hurry and a secret, paid on a link',
    link: 'The tax caller was hurried, threatening and secretive, and wanted gift cards. Here is a text that is all three, and asks for something else.',
    case: 'm-exc-penalty',
    setup: 'The text has an official, a threat, a deadline of two hours and an order to tell no one, and all of that is what {o:fakeofficial} sounds like. Yet the key’s answer for this case is {a:M2.link}, and the name is {o:fakelink}.',
    prompt: { kind: 'phrase', answer: 'Pay at penalty-office.example' },
    because: [
      'Look at how the text asks you to pay. It does not ask for gift cards, or for a transfer to an account that someone gives you over the phone. It asks you to pay on a page that you reach through a link in the message. That is what the name {o:fakelink} is built on.',
      'Hurry, threat and secrecy turn up in many scams, and they are there to stop you thinking. Because they turn up so often, they cannot be what decides the name. The key gives the answer about the link, and keeps {o:fakeofficial} for a case in which nothing more specific shows: no link, no fee, no deal, and a caller who wants payment at once, in a way that cannot be undone, and in secret.'
    ],
    take: 'This tie-break applies to more than one pair. Hurry, secrecy and payment that cannot be undone give way to a more specific answer whenever one is there. Look for the more specific answer first.' },

  { id: 'refute-bank', kind: 'refute', about: 'fakeofficial',
    h: 'A wrong idea: “my bank would have stopped it”',
    link: 'Several of the last cases told you to pay in a way that cannot be undone, and not to tell your bank. One idea makes people less careful at exactly that moment, and it is wrong.',
    idea: '"My bank would have stopped it if it were a scam."',
    verdict: 'This is wrong.',
    right: [
      'A bank’s fraud checks are built to catch someone else using your account. When you send a payment yourself, by typing in a transfer or pressing approve in your app, the checks see you, and you have told them that you want the payment made. They may show a warning, and some banks hold a payment or ask you questions. But none of them can promise to stop a payment that you press send on yourself, and the scammers know it. That is why a caller tells you to ignore the warning, and not to tell the bank.',
      'A payment that you sent yourself is also hard to get back, whether it went by transfer, in cash, in gift cards or in crypto. Ringing your bank at once can sometimes recall a transfer in the first hours, which is why speed matters.',
      'So the bank is the second line of defence, and you are the first. What can stop the loss is what you ask before you press send, and it is the key’s own two questions about money. The first is {q:M1} The second is {q:M2} A warning from your bank is a stop sign, and it is worth reading as one.'
    ],
    testedBy: ['m-claim-bank'] }
]);
