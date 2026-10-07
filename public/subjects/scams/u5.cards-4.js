// Scams, Unit Five, part two: the two questions of the branch, each followed by a check on all its answers.
// The app prints, on a question card: the question, each answer with when it is given, why it decides,
// and for every pair already compared the question that separates it. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- The first question of the branch ---------- */
  { id: 'q-f1', kind: 'question', step: 'F1',
    h: 'The question about what they want to know',
    link: 'You have seen this question at the foot of the cards. Here it is in one place.',
    decides: [
      'It tells {o:realdetails} from {o:friendlychat}. A clinic receptionist asks for your date of birth and address, because setting up your record needs them. A stranger asks what you do and whether you live alone, because getting to know you needs that, and nothing you started needs it. Both ask about you, but they want to know different things.'
    ],
    how: [
      { do: 'Check whether they ask for papers or numbers: a passport, an ID or card number, your date of birth, your address.', why: 'That is {a:F1.identify}.' },
      { do: 'Check whether they ask about your life: what you do for work, who you live with, what you plan to do. This is a stranger you know only through messages.', why: 'That is {a:F1.life}.' },
      { do: 'If they ask for both, the papers decide.', why: 'A chat that reaches a request for a passport is {a:F1.identify}, however friendly it has been.' }
    ] },

  { id: 'check-f1', kind: 'check', after: 'F1',
    case: 'u5-qf1',
    ask: { type: 'step', step: 'F1' } },

  /* ---------- The second question of the branch ---------- */
  { id: 'q-f2', kind: 'question', step: 'F2',
    h: 'The question about whether it fits',
    link: 'You have used this question since the first card. Here it is in one place.',
    decides: [
      'Two things tell a real request from its copy, and you can see both in the request itself: whether you started it, and whether what they ask for is what the job needs. If either is no, the facts are not going where you meant to send them, however convincing it sounds.',
      'It is the same question you ask of a sign-in page: {q:A2}'
    ],
    how: [
      { do: 'Ask first: did I start this? You did if you called the number on your card or bill, typed an address in yourself, or walked into their office.', why: 'If a call, text, email or stranger reached you first, you did not.' },
      { do: 'Check where the number, link or app came from.', why: 'One that came with a message is never one you already had, even if you are the one who dials or taps it.' },
      { do: 'Then ask: does what they ask for match what I came to do? A new account needs proof of who you are. A room held until a showing needs only a name and a way to reach you.', why: 'If the list goes further than the job, the answer is no.' },
      { do: 'Answer from the request itself, before you give anything.', why: 'You cannot tell from the request whether they are honest: only {t:check} settles that.' }
    ],
    whenBoth: 'You may have started it and still be asked for far more than the job needs: the answer is no, because both must be true. Or it may have reached you and sound exactly right, like the bank call that used Gabriela’s name: the answer is no too.' },

  { id: 'check-f2', kind: 'check', after: 'F2',
    case: 'u5-qf2',
    ask: { type: 'step', step: 'F2' } }
]);
