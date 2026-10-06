// Scams, Unit Five, part two: the two questions of the branch, each followed by a check on all its answers.
// The app prints, on a question card: the question, what it is for, each answer with when it is given, why it decides,
// and for every pair already compared the question that separates it. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- The first question of the branch ---------- */
  { id: 'q-f1', kind: 'question', step: 'F1',
    h: 'The question about what they want to know',
    link: 'You have seen this question at the foot of the cards for the new names. This card puts it in one place with both its answers.',
    decides: [
      'It separates {o:realdetails} from {o:friendlychat}. The receptionist at a clinic asks for your date of birth and your address, because that is what setting up a record needs. A stranger asks what you do for work and whether you live alone, because that is what getting to know you needs, and nothing you began needs it. Both ask you about yourself. What they want to know about is not the same thing.'
    ],
    how: [
      'Read what you are asked about. Is it a document, a photo of one, an ID, tax or card number, your date of birth or your address? That is {a:F1.identify}. Is it the sort of thing a friend asks, such as what you do for a living, who you live with or what you plan to do, asked by someone you know only through messages, with nothing like a paper or a number asked for yet? That is {a:F1.life}.',
      'If a case has both, the papers decide. A chat that has reached a request for a passport is {a:F1.identify}, however long the chat has gone on and however friendly it is.'
    ] },

  { id: 'check-f1', kind: 'check', after: 'F1',
    case: 'u5-qf1',
    ask: { type: 'step', step: 'F1' } },

  /* ---------- The second question of the branch ---------- */
  { id: 'q-f2', kind: 'question', step: 'F2',
    h: 'The question about whether it fits',
    link: 'This question separated the first two names, and every case since has been answered by it as well.',
    decides: [
      'Two things differ between a real request and its copy, and you can see both in the request: whether you began it, through {t:already}, and whether what is asked is what the job needs. If both are so, the facts are going where you meant to send them. If either is not, they are not, however convincing the rest of the request sounds.',
      'It is the same question that is asked of a sign-in page: {q:A2}. Here it separates a real request for facts from its copies.'
    ],
    how: [
      'Ask two things, in this order. First: did I begin this? You began it if you called the number on your card or your bill, typed an address in yourself, opened an app you had installed, applied or ordered or booked, or walked into their office. You did not begin it if a call, a text, an email or a stranger reached you first. A number, a link or an app that came with a message is never one you already had, even if you are the one who dials it or taps it.',
      'Second, even if I began it: does what they ask for match what I came to do? A new account needs proof of who you are. An offer of work needs proof that you may work. A room held until a showing needs a name and a way to reach you. If the list goes further than the job, the answer is no.',
      'Both can be answered from the request itself, before you give anything. Whether the other side is honest cannot be told from the request: only {t:check} settles that.'
    ],
    whenBoth: 'You may have begun it, and it may still ask for far more than the job needs: the answer is no, because both halves must be met. Or it may have reached you and sound exactly right, like the call that used Gabriela’s name: the answer is no too.' },

  { id: 'check-f2', kind: 'check', after: 'F2',
    case: 'u5-qf2',
    ask: { type: 'step', step: 'F2' } }
]);
