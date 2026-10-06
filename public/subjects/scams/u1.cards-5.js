// Scams, Unit One, part two (third quarter): the fifth kind of message (facts about you) and its look-alike pair with
// money. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'meet-details', kind: 'meet', family: 'details',
    link: 'The last kind asks for none of those things. It asks you to tell them something about yourself.',
    case: 'g-flat-form', mark: 'D1',
    strip: [
      'There is one person, Tomas, and one form, on the rental agent’s own website.',
      'The form asks for facts about him: his full name, his date of birth and his current address.',
      'It asks for nothing else: no payment, no password, no program to install.'
    ],
    explain: [
      'What you are shown is a request for facts about a person: here, a name, a date of birth and an address typed into a form. The facts can be of two sorts, and both are one kind. They can be papers and numbers that prove who you are: a passport, an ID, a card number, your date of birth, your address. Or they can be facts about your life, asked for in a friendly chat: your work, your home, your family, your plans. The second sort is a request too, even though it is asked kindly and nothing seems to hang on it.',
      'It is a kind of its own because facts about you are used later. The papers can be used to pretend to be you, and the chat can be used to find out what to ask for next.',
      'Tomas’s form is real: a real company needs some facts for something you started, and a copy asks for the same facts. The question says only what is asked.'
    ],
    feature: { step: 'D1', option: 'details' },
    name: 'The answer is {a:D1.details}.' },

  { id: 'check-details', kind: 'check', after: 'details',
    case: 'g-recruiter',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Fern to tell the sender about herself? Tap them.',
           answer: 'Please send a photo of your passport and your Social Security number' } },

  { id: 'look-money-details', kind: 'lookalike', ledger: 'money~details',
    link: 'A request for your card number can feel like a request to pay, and the two are easy to mix up.',
    cases: ['g-sim-fee', 'g-sim-details'],
    instruction: 'Both cases are about Joel’s cell phone SIM, which will be switched off tomorrow. Compare one thing: is he asked to pay, or to confirm facts about himself?',
    prompt: { kind: 'which', option: 'D1.money', answer: 'g-sim-fee' },
    difference: [
      'In Case A the text tells Joel to pay a fee of $1.99 at an address to keep his number. He is asked to send money. The answer is {a:D1.money}.',
      'In Case B the text tells him to confirm his full name, his date of birth and his card number at the same address, and says that nothing will be charged. He is asked to tell them about himself, including a card number. He is not asked to pay. The answer is {a:D1.details}.',
      'A card number can be used to take money, so Case B may end up costing him money all the same. But the question asks what he is asked to do right now, and in Case B that is to tell them about himself.'
    ] }
]);
