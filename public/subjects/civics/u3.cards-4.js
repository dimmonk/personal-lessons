// Civics, Unit Three, part three: the word the fourth name leans on, and the fourth name (the Senate votes on a person or a treaty).
// "Senate confirmation" and "ratifying a treaty" are the other words real life uses for this name. The app says them once,
// on its meet card, and this file does not type them.

FC.cards('civics', 'u3', [

  /* ---------- A word the fourth name is built on ---------- */
  { id: 'term-treaty', kind: 'term', term: 'treaty',
    h: 'A formal agreement between two countries',
    link: 'The fourth thing Congress does is about a person or an agreement that the President brings to the Senate. The agreement leans on a word that is easy to pass over. The case shows what it is before the word is given.',
    case: 'x-pact',
    plain: [
      'Look at what the two governments did about a question that a dry summer could turn into a quarrel. They did not leave it to chance, or to what each side remembered later. They wrote down, in one formal document, what each country will do, and each side signed it. Nobody can argue afterwards about what was agreed, because it is on paper.',
      'What sets this apart from a deal between two companies is that the two sides are countries, and the people who sign speak for the whole country. Here the President signed for the United States. An agreement of this kind can be about water, about trade or about security.'
    ] },

  /* ---------- Advice and consent ---------- */
  { id: 'meet-confirm', kind: 'meet', outcome: 'confirm',
    link: 'Everything so far was a law or money. The fourth thing Congress does starts with the President: the President chooses someone, or signs an agreement, and then the Senate has to say yes. A person comes first here, and an agreement comes after.',
    case: 'c-parks', mark: 'C1',
    strip: [
      'The President has chosen someone for a top government job: the head of the {t:agency} that runs the national parks.',
      'She cannot simply start. The Senate has to vote on her, and it holds hearings first.',
      'The vote is the Senate’s alone, and more than half of the senators said yes.',
      'The House has no part in it.'
    ],
    explain: [
      'The President chose, and the President’s choice is only a choice until the Senate votes. The Senate held two days of hearings, and then it voted. Until the vote is yes she is only the person the President has proposed, and not yet the head of anything. When she is approved she may start.',
      'So this is a vote on a person the President put forward, and the vote is the Senate’s alone. The jobs it covers are the top ones: a judge, the head of a federal {t:agency}, someone to represent the country abroad. The key spells out the answer: it is the answer when {when:C1.approve}.',
      'The same line covers a {t:treaty}: the Senate votes on one that the President has signed. The number of yes votes that is needed is not the same for the two, and the line above says what each is.'
    ],
    feature: { step: 'C1', option: 'approve' },
    name: 'The name for this is {o:confirm}. It is made from words in the Constitution. Its second word, “consent”, is the one that matters: it means yes, and the President’s choice takes effect only with it.' },

  { id: 'again-confirm', kind: 'again', outcome: 'confirm',
    link: 'The park-head case gave you what to point to: {needs:confirm}. Here is a second case, and this time the President has signed a {t:treaty} instead of choosing a person.',
    first: 'c-parks', second: 'c-lake', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a parks office, a lake) and ignore whether the President put forward a person or a {t:treaty}. Look at one thing only: who votes, and on what the President has done.',
    prompt: { kind: 'phrase', answer: 'the Senate voted 71 to 27 to approve it' },
    shared: [
      'In both cases the President acted first: the President chose a person, or signed an agreement. In both, the matter then went to the Senate, and the Senate voted on whether to approve. The case says why the vote matters for the lake: the {t:treaty} “binds nobody yet”.',
      'The yes votes needed are not the same for the two, and the line printed on the card before gives each. Apart from that the two stories share nothing, and the matter, a parks office or a lake, does not enter into it. A vote in the Senate on something the President put forward is what {o:confirm} names.'
    ] },

  { id: 'portrait-confirm', kind: 'portrait', outcome: 'confirm',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:confirm}.',
    typical: [
      'The President has acted first: chosen a person, or signed an agreement. The Senate then votes, and the case is about that vote or is waiting for it.',
      'The Senate alone votes. The House has no part in it.',
      'The jobs are the top ones: a judge, the head of a federal {t:agency}, someone to represent the country abroad.',
      'Until the vote, the person is only proposed and the {t:treaty} binds nobody. The words you hear are “awaiting Senate approval”, “the nominee”, “the hearings”.',
      'The Senate can say no. Only if enough senators say yes does the person take the job or the agreement take effect.'
    ],
    not: 'Choosing a person, or signing an agreement, is not this name on its own. If the case stops there, it is the President’s act, and the key’s answer to its first question is {a:D1.president}. This name needs the Senate’s vote, or the request that the Senate vote.',
    wild: ['“The Senate confirmed her.”', '“A confirmation hearing.”', '“The Senate ratified the treaty.”', '“Awaiting Senate approval.”'],
    self: 'In your own life you meet it when the news says that a judge, an ambassador or the head of an office has been “confirmed” or is “awaiting confirmation”, and when a deal with another country is “sent to the Senate”.',
    ask: '“Has the President already chosen or signed? Is the Senate being asked to vote?” If the case is the Senate’s vote on a person or an agreement the President put forward, the key’s answer is {a:C1.approve}.' },

  { id: 'check-confirm', kind: 'check', after: 'confirm',
    case: 'k-taxhead',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money', 'approve'] } }
]);
