// Scams, Unit One, part three (second half): the fifth kind of message (facts about you), its look-alike pair with
// money, and the second wrong idea a beginner brings. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'meet-details', kind: 'meet', family: 'details',
    link: 'Four kinds so far. The last kind asks for none of those things. It asks you to tell them something about yourself.',
    case: 'g-flat-form', mark: 'D1',
    strip: [
      'There is one person, Tomas, and one form, on the letting agent’s own website.',
      'The form asks for facts about him: his full name, his date of birth and his current address.',
      'It asks him for nothing else: no payment, no password, no program to install.',
      'What is asked is for him to tell them about himself.'
    ],
    explain: [
      'What you are shown is a request for facts about a person: here, a name, a date of birth and an address typed into a form. That is all a message of this kind is made of: one person, and a request to tell something about themselves.',
      'The facts can be of two sorts, and the key counts both as one kind. They can be papers and numbers that prove who you are: a passport, an ID or a card number, your date of birth, your address. Or they can be facts about your life, asked for in a friendly chat: your work, your home, your family, your plans. The second sort is a request too, even though it is asked kindly and nothing seems to hang on it.',
      'It is a kind of its own because facts about you are used later. The papers can be used to pretend to be you, and the chat can be used to find out what to ask for next. The key puts this kind last in its list: where a message asks for facts and also for something earlier in the list, it takes the earlier one.',
      'Tomas’s form is real. A real company needs some facts about you for something you started, and a copy asks for the same facts. The first question does not say which this is. It says only what is being asked.'
    ],
    feature: { step: 'D1', option: 'details' },
    name: [
      'The key’s answer, and the name of this kind, is {a:D1.details}. After this answer the key asks two further questions that give a finer name: the name of a kind of scam, or of the real request that the scams copy.'
    ] },

  { id: 'again-details', kind: 'again', family: 'details',
    link: 'The last card gave you what to point to for {a:D1.details}, from one case: {needs:details}. Here is a second case with a different story. This one is a friendly text, and nothing about it seems to ask for anything.',
    first: 'g-flat-form', second: 'g-wrong-number', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a rental form, a text to the wrong number) and ignore how friendly the second one is. Look at one thing only: which words ask the person to tell something about themselves?',
    prompt: { kind: 'phrase', answer: 'What do you do for work? Do you live near London?' },
    shared: [
      'Both messages ask the person to tell something about themselves. The form asks for a name, a date of birth and an address. The text asks about work and where Sam lives. One is formal and one is friendly, and the facts it asks for are of a different sort.',
      'The friendly text may look as if it asks for nothing, because it asks no money and no password. But questions about your work and your home are requests for facts about you, and the key counts them. That is what {a:D1.details} names.'
    ] },

  { id: 'portrait-details', kind: 'portrait', family: 'details',
    link: 'You know what to point to for {a:D1.details}. This card fills in the rest of the picture, so that you can spot it in real life.',
    typical: [
      'There is a request for facts about you: papers or numbers that prove who you are, your date of birth, your address, or your work, home and family.',
      'It can be a form, an email, a call, or a chat that starts for no reason.',
      'The facts can be asked for in one go, as papers on a list, or one small question at a time.',
      'It can come from someone you applied to, from a company you deal with, or from a stranger who is being friendly.',
      'The facts are not used up when you give them. They can be used again, by someone else, to pretend to be you.'
    ],
    not: [
      'It is not a request to pay. A message that asks for your card number and says "nothing will be charged" asks for a fact about you, and the key puts it here. A message that asks you to pay a fee asks for money.',
      'A friendly message that asks nothing at all, such as a delivery update, is not a request for facts. It is {a:D1.nothing}. The difference is whether you are asked a question about yourself.'
    ],
    wild: ['"Please confirm your date of birth and address."', '"Send a photo of your passport."', '"Sorry, wrong number! What do you do for work?"', '"Where do you live these days?"', '"Please complete this form with your details."'],
    self: 'Forms, job applications, a call from your bank, and a stranger who texts you by mistake and starts a chat: all of them ask about you. Most of the questions you answer in a day are ordinary, and a few are the start of something else.',
    ask: '"Am I being asked to tell them something about myself?" If I am, the key’s answer is the one for facts about me, unless the message also asks for something earlier in the key’s list.' },

  { id: 'check-details', kind: 'check', after: 'details',
    case: 'g-recruiter',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Fern to tell the sender about herself? Tap them.',
           answer: 'Please send a photo of your passport and your National Insurance number' } },

  { id: 'look-money-details', kind: 'lookalike', ledger: 'money~details',
    link: 'You have met all five kinds. The last pair to compare is money and facts about you. A request for your card number can feel like a request to pay, and the two are easy to mix up.',
    cases: ['g-sim-fee', 'g-sim-details'],
    instruction: 'Both cases are about Joel’s mobile phone SIM, which will be switched off tomorrow. Compare one thing: is he asked to pay, or to confirm facts about himself?',
    prompt: { kind: 'which', option: 'D1.money', answer: 'g-sim-fee' },
    difference: [
      'In Case A the text tells Joel to pay a fee of £1.99 at an address to keep his number. He is asked to send money. The key’s answer is {a:D1.money}.',
      'In Case B the text tells him to confirm his full name, his date of birth and his card number at the same address, and says that nothing will be charged. He is asked to tell them about himself: facts that identify him, including a card number. He is not asked to pay. The key’s answer is {a:D1.details}.',
      'A card number can be used to take money, so Case B may end up costing him money all the same. But the first question asks what he is asked to do right now. In Case B that is to tell them about himself, and it is that request which the key answers.'
    ] },

  { id: 'refute-careful', kind: 'refute', about: 'D1',
    h: 'A wrong idea: "only careless people are caught"',
    link: 'Every case so far has asked for something that a careful person might also be asked for. The last wrong idea in this unit is about who gets caught.',
    idea: '"I read everything properly. I would never fall for that. Only careless people do."',
    verdict: 'This is wrong.',
    right: [
      'A scam is not a test of how carefully you read. It is built to arrive when it fits your week: a bill you are expecting, a delivery you are waiting for, a boss who really is in a meeting. Careful people are caught as often as anyone, and often because they were sure that they would not be, so they stopped looking at what they were being asked to do.',
      'What protects you is not how clever you feel. It is a habit that does not depend on feeling clever: find what the message asks, using {q:D1}, and when it asks for something, use {t:check} instead of deciding on the spot whether it is real.',
      'It is also a habit that works for the real messages. A real bank does not mind being called on the number on your card.'
    ],
    testedBy: ['g-claim-careful'] }
]);
