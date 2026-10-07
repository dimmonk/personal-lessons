// Scams, Unit One, part two (second half): the fourth kind of message (money) and the one exception in which a message
// asks for money and for something earlier in the list. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  /* ---------- Fourth: money ---------- */
  { id: 'meet-money', kind: 'meet', family: 'money',
    link: 'Fourth: a request for money. It is the one most people think of first.',
    case: 'g-rent', mark: 'D1',
    explain: [
      'Dan’s landlord asks for $850 by the 1st, into an account. That is a request to pay. Every way of paying counts: a transfer, a card, cash, crypto, gift cards, or a payment page you reach from a link.',
      'Money gets its own answer because it is the hardest thing to get back. An account can be shut and a program removed, but money sent by transfer, in cash or on gift cards is usually gone.'
    ],
    spot: [
      { do: 'Find the amount and the date: $850 by the 1st.', why: 'A request for money names a sum, or tells you to send one.' },
      { do: 'Find how to pay: into the same account as usual.', why: 'A transfer, a card, cash, crypto and gift cards all count.' },
      { do: 'Look at what is not asked: no password, no program, no facts about Dan.', why: 'Then the only request is for money to leave his account.' }
    ],
    feature: { step: 'D1', option: 'money' },
    name: 'This is {a:D1.money}. Dan’s rent is real, and a scam can ask for money in just the same way.' },

  { id: 'check-money', kind: 'check', after: 'money',
    case: 'g-lend',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Gabi to send money? Tap them.',
           answer: "Can you send $300 to my sister's account today" } },

  /* ---------- the exception: a message that asks for two things at once ---------- */
  { id: 'exc-refund', kind: 'exception', ledger: 'device~money', looksLike: 'money', is: 'device',
    h: 'A refund call that asks for two things',
    link: 'Some messages ask for two things at once, and each still gets one answer. This call asks to see Harold’s screen, and then for money.',
    case: 'g-refund-share',
    setup: 'The caller offers Harold a refund, then tells him to send money back, and a request to send money is what {a:D1.money} usually sounds like. Yet the answer here is {a:D1.device}.',
    prompt: { kind: 'phrase', answer: 'Press the Share button in this meeting app so that I can see your screen' },
    because: [
      'Count what the caller asks for, in order. First, Harold must let her watch his screen. Then he must send money back. The second request only comes if he does the first.',
      'When a message asks for two things, the answer is the one higher in this order: your device, then an account, then money, then facts about you. The reason is how far each reaches. Once she can watch his screen, she can see his bank, read the codes sent to him and move money herself, so the money he is asked to send is the smaller part of what she could get.'
    ] }
]);
