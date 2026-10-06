// Scams, Unit One, part two (second half): the fourth kind of message (money) and the one exception in which a message
// asks for money and for something earlier in the list. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'meet-money', kind: 'meet', family: 'money',
    link: 'The next kind is the one most people think of first: a request for money.',
    case: 'g-rent', mark: 'D1',
    strip: [
      'There is one message, from Dan’s landlord.',
      'It names an amount, $850, and a date, the 1st, and asks him to pay it into an account.',
      'Nothing is asked of his accounts or his devices, and nothing about himself. What is asked is for money to leave his account.'
    ],
    explain: [
      'What you are shown is a request to pay: an amount, a date and a way to do it. Every way of paying counts as the same kind: a wire transfer, a card payment, cash, crypto, gift cards, or a payment made on a page you reach through a link.',
      'It is a kind of its own because money is the one thing in this list that is hard to get back. A way into an account can be shut, and a program can be removed, but money sent by transfer, in cash or on gift cards is usually gone.',
      'Dan’s rent is a real request: his landlord, a usual amount, the same account as always. A request for money can be completely ordinary. The question says only what is asked.'
    ],
    feature: { step: 'D1', option: 'money' },
    name: 'The answer is {a:D1.money}.' },

  { id: 'check-money', kind: 'check', after: 'money',
    case: 'g-lend',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Gabi to send money? Tap them.',
           answer: "Can you send $300 to my sister's account today" } },

  /* ---------- the exception: a message that asks for two things at once ---------- */
  { id: 'exc-refund', kind: 'exception', ledger: 'device~money', looksLike: 'money', is: 'device',
    h: 'A refund that starts with someone watching your device',
    link: 'Real messages sometimes ask for two things, and there has to be one answer. This case asks for money and for something else.',
    case: 'g-refund-share',
    setup: 'There is a refund in this case, and an instruction to send money back, and a request to send money is what {a:D1.money} usually sounds like. Yet the answer for this case is {a:D1.device}.',
    prompt: { kind: 'phrase', answer: 'Press the Share button in this meeting app so that I can see your screen' },
    because: [
      'Count what the caller asks for, and in what order. First, Harold is asked to let her watch his device. Then he is asked to send money back. The second request only comes if the first is done.',
      'Where a message asks for two things, the answer is the earlier one in this list: a request about the device, then one about an account, then one about money, then facts about you. The reason is how far each reaches. Once she can watch his device, she can see his bank, read the codes that come to him and move money herself, so the money she asks him to send is the smaller part of what she could get.'
    ],
    take: 'When a message asks for something about your device and for money, put your finger on the request about the device. It is the first of the two.' }
]);
