// Civics, Unit One, part three: the third family (a judge, in any court) and the exception that carries the words
// of a courtroom into a story that ends with a vote. A quick lesson (lesson standard section 19).

FC.cards('civics', 'u1', [

  /* ---------- The third family: a judge, in any court ---------- */
  { id: 'meet-courts', kind: 'meet', family: 'courts',
    link: 'The third kind is a decision made when two sides disagree and hand the matter to someone else, or when someone asks for it.',
    case: 'c-heater', mark: 'D1',
    strip: [
      'There is a quarrel between two people: Hana and her landlord. Each says the other must pay. They could not settle it between them, so they went to a judge.',
      'Each of them told their story to the judge. That is how a judge decides: by hearing both sides.',
      'The last thing in the case is the judge’s decision: the landlord must pay. Nobody votes, no office issues a rule, and no state or city decides anything.'
    ],
    explain: [
      'What you are shown is a judge settling a quarrel. Hana and her landlord disagree, and neither of them can decide it for the other, so they hand the decision to someone else. A judge does not write laws and does not run programs. A judge decides a case that somebody has brought.',
      'That is all a case of this kind is made of: a judge deciding, as the last thing, or someone asking a judge to decide. The judge can sit in a court of the whole country or in a court of a state. The kind does not depend on which court it is, or on how important the quarrel is: a broken heater and a famous trial are the same kind.'
    ],
    feature: { step: 'D1', option: 'courts' },
    name: 'The kind is {a:D1.courts}. “Any court” means any judge: the highest court in the country, a court of a state, a court of a county. They are one kind here. “A judge” means someone whose job is to decide a case that is brought to them.' },

  { id: 'check-courts', kind: 'check', after: 'courts',
    case: 'k-lease',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president', 'courts'] } },

  /* ---------- The exception between lawmakers and a judge ---------- */
  { id: 'exc-trial', kind: 'exception', ledger: 'congress~courts', looksLike: 'courts', is: 'congress',
    h: 'A trial that is held in the Senate',
    link: 'A real story can use the words of a courtroom and still be a vote by lawmakers. Here is one, and the questions answer it the same way every time.',
    case: 'x-trial',
    setup: 'This case has a trial, a charge and a man who may be found guilty. Those are words from a courtroom, and a judge’s decision is what you point to for {a:D1.courts}. Yet the answer for this case is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the senators will vote on whether he is guilty' },
    because: [
      'Look at who decides. The House votes to charge him, and the Senate holds the trial, and at the end of it senators vote. The people who decide the case are lawmakers. No judge decides anything in it.',
      'A trial of this kind is how Congress can remove an official who has committed serious misconduct. It uses the words of a courtroom, because it is a trial, but it is held by the Senate and settled by the senators’ vote.'
    ],
    take: 'We are used to “trial” meaning a judge. When the word turns up, ask who casts the votes or gives the ruling. If it is senators, the case is {a:D1.congress}.' }
]);
