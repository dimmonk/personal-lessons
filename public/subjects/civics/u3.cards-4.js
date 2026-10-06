// Civics, Unit Three, part two (first half): the word the fourth name leans on, and the fourth name (the Senate votes on a person or a treaty).
// "Senate confirmation" and "ratifying a treaty" are the other words real life uses for this name. The app says them once,
// on its meet card, and this file does not type them.

FC.cards('civics', 'u3', [

  /* ---------- A word the fourth name is built on ---------- */
  { id: 'term-treaty', kind: 'term', term: 'treaty',
    h: 'A formal agreement between two countries',
    link: 'The fourth thing Congress does is about a person or an agreement that the President brings to the Senate. The case shows what the agreement is before the word is given.',
    case: 'x-pact',
    plain: [
      'The two governments did not leave a possible quarrel over a dry summer to chance, or to what each side remembered later. They wrote down, in one formal document, what each country will do, and each side signed it.',
      'What sets this apart from a deal between two companies is that the two sides are countries, and the people who sign speak for the whole country. Here the President signed for the United States.'
    ] },

  /* ---------- Advice and consent ---------- */
  { id: 'meet-confirm', kind: 'meet', outcome: 'confirm',
    link: 'The fourth thing Congress does starts with the President: the President chooses someone, or signs an agreement, and then the Senate has to say yes. A person comes first here, and an agreement after.',
    case: 'c-parks', mark: 'C1',
    strip: [
      'The President has chosen someone for a top government job: the head of the {t:agency} that runs the national parks.',
      'She cannot simply start. The Senate has to vote on her, and it holds hearings first.',
      'The vote is the Senate’s alone, and more than half of the senators said yes.',
      'The House has no part in it.'
    ],
    explain: [
      'The President’s choice is only a choice until the Senate votes. Until the vote is yes she is only the person the President has proposed, and not yet the head of anything. The jobs this covers are the top ones: a judge, the head of a federal {t:agency}, someone to represent the country abroad. This is the answer when {when:C1.approve}.',
      'The same line covers a {t:treaty}: the Senate votes on one that the President has signed. The number of yes votes needed is not the same for the two, and the line above says what each is.'
    ],
    feature: { step: 'C1', option: 'approve' },
    name: 'The name for this is {o:confirm}. It is made from words in the Constitution. Its second word, “consent”, is the one that matters: it means yes, and the President’s choice takes effect only with it.' },

  { id: 'check-confirm', kind: 'check', after: 'confirm',
    case: 'k-taxhead',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money', 'approve'] } }
]);
