// Civics, Unit Three, part two (first half): the word the fourth name leans on, and the fourth name (the Senate votes on a person or a treaty).
// "Senate confirmation" and "ratifying a treaty" are the other words real life uses for this name. The app says them once,
// on its meet card, and this file does not type them.
// A meet card: the story first, then the idea (explain), then how to spot it (spot), then the name (lesson standard section 20).

FC.cards('civics', 'u3', [

  /* ---------- A word the fourth name is built on ---------- */
  { id: 'term-treaty', kind: 'term', term: 'treaty',
    h: 'A formal agreement between two countries',
    link: 'The fourth thing Congress does can involve an agreement with another country. Here is what one looks like, before the word for it.',
    case: 'x-pact',
    plain: [
      'They wrote it all down, so that nobody has to trust their memory when the river runs low, and each side signed.',
      'What sets this apart from a deal between two companies is that the two sides are countries. The people who sign speak for the whole country: here the President signed for the United States.'
    ] },

  /* ---------- Senate approval ---------- */
  { id: 'meet-confirm', kind: 'meet', outcome: 'confirm',
    link: 'The fourth thing Congress does starts with the President. The President picks someone, or signs an agreement, and then the Senate has to say yes.',
    case: 'c-parks', mark: 'C1',
    explain: [
      'The President’s pick is only a pick until the Senate votes. Until the vote is yes, she is just the person the President proposed, not the head of anything. The House has no part in it.',
      'This covers the top jobs: a judge, the head of a federal {t:agency}, an ambassador. It also covers a {t:treaty} the President has signed. A person needs more than half of the senators to say yes. A {t:treaty} needs two-thirds of the senators present.'
    ],
    spot: [
      { do: 'Find who made the pick: the President chose the head of the parks {t:agency}.', why: 'The Senate votes only on what the President put forward.' },
      { do: 'Find the Senate’s vote: two days of hearings, then 61 to 38.', why: 'This vote belongs to the Senate alone.' },
      { do: 'Check she does not hold the job yet: she is “the President’s choice”, not the head.', why: 'A vote on someone already in the job is about something else, covered soon.' },
      { do: 'Look for a {t:treaty} the same way: the river agreement would need the Senate’s yes too.', why: 'It follows the same order, but needs two-thirds of the senators present.' }
    ],
    feature: { step: 'C1', option: 'approve' },
    name: 'This is {o:confirm}. The Senate’s yes is what lets the President’s pick take effect.' },

  { id: 'check-confirm', kind: 'check', after: 'confirm',
    case: 'k-taxhead',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money', 'approve'] } }
]);
