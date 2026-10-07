// Scams, Unit One, part two (third quarter): the fifth kind of message (facts about you) and its look-alike pair with
// money. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  /* ---------- Fifth: facts about you ---------- */
  { id: 'meet-details', kind: 'meet', family: 'details',
    link: 'Fifth: someone asking what you are like, where you live or what you do.',
    case: 'g-flat-form', mark: 'D1',
    explain: [
      'Tomas’s form asks for his name, date of birth and address. Those are facts about him. Some facts prove who you are, like a passport, a card number, a date of birth or an address. Others are about how you live, like where you work, who is at home and what you are planning, and a stranger can ask for those in a friendly chat. The chat is a request too, even when it is kind and seems to hang on nothing.',
      'Facts about you get used later. The papers can be used to pose as you, and the chat can show a scammer what to ask for next.'
    ],
    spot: [
      { do: 'Find the facts they ask for: Tomas’s form asks for his name, date of birth and address.', why: 'Papers, numbers and facts about your life all count.' },
      { do: 'Look at what is not asked: no payment, no password, no program.', why: 'Then all that is asked is facts about him.' }
    ],
    feature: { step: 'D1', option: 'details' },
    name: 'This is {a:D1.details}. Tomas’s form is real, and a copy would ask for the same facts.' },

  { id: 'check-details', kind: 'check', after: 'details',
    case: 'g-recruiter',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Fern for facts about herself? Tap them.',
           answer: 'Please send a photo of your passport and your Social Security number' } },

  { id: 'look-money-details', kind: 'lookalike', ledger: 'money~details',
    link: 'A request for your card number can feel like a request to pay, and the two are easy to mix up.',
    cases: ['g-sim-fee', 'g-sim-details'],
    instruction: 'Both stories are about Joel’s cell phone SIM, which will be switched off tomorrow. Compare one thing: is he asked to pay, or to confirm facts about himself?',
    prompt: { kind: 'which', option: 'D1.money', answer: 'g-sim-fee' },
    difference: [
      'In Story A the text tells Joel to pay a $1.99 fee at an address. He is asked to send money. That is {a:D1.money}.',
      'In Story B the text tells him to confirm his name, date of birth and card number at the same address, and says nothing will be charged. He is asked about himself, and no amount is named. That is {a:D1.details}.',
      'A card number can be used to take money, so Story B may still cost him. But the question is what he is asked to do right now, and in Story B that is to tell them about himself.'
    ] }
]);
