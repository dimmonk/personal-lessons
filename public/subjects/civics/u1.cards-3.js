// Civics, Unit One, part three: the third family (a judge, in any court) and the exception that carries the words
// of a courtroom into a story that ends with a vote. A quick lesson (lesson standard section 19), rewritten plain
// (section 20).

FC.cards('civics', 'u1', [

  /* ---------- The third family: a judge, in any court ---------- */
  { id: 'meet-courts', kind: 'meet', family: 'courts',
    link: 'Third: two sides disagree, and someone else has to settle it.',
    case: 'c-heater', mark: 'D1',
    explain: [
      'Hana and her landlord cannot settle it between them, so a judge hears both sides and decides. A judge does not write laws or run programs. A judge settles a dispute that someone brings.',
      'It does not matter which court it is, or how big the quarrel is. A judge in a federal court and a judge in a state court count the same, and a broken heater counts the same as a famous trial. A story can also end before the ruling, with someone asking a judge to decide. That counts too.'
    ],
    spot: [
      { do: 'Find the dispute: Hana says the landlord must pay, and the landlord says Hana must.', why: 'Two sides disagree and cannot settle it themselves.' },
      { do: 'Find the judge: they each told their story to a judge.', why: 'A judge decides by hearing both sides.' },
      { do: 'Find the ruling, or the request for one: the judge decided the landlord must pay.', why: 'It counts even when the story ends with someone only asking a judge to decide.' }
    ],
    feature: { step: 'D1', option: 'courts' },
    name: 'This is {a:D1.courts}. “Any court” means any: the highest court in the country, or a state or county court.' },

  { id: 'check-courts', kind: 'check', after: 'courts',
    case: 'k-lease',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president', 'courts'] } },

  /* ---------- The exception between lawmakers and a judge ---------- */
  { id: 'exc-trial', kind: 'exception', ledger: 'congress~courts', looksLike: 'courts', is: 'congress',
    h: 'A trial held in the Senate',
    link: 'A story can use courtroom words and still end on a vote by lawmakers. Here is one.',
    case: 'x-trial',
    setup: 'This story has a trial, a charge and a man who may be found guilty. Those are courtroom words, and they usually mean a judge. Yet the answer here is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the senators will vote on whether he is guilty' },
    because: [
      'Look at who decides. The House votes to charge him, the Senate holds the trial, and at the end the senators vote. No judge decides anything.',
      'This is how Congress can remove an official who has done serious wrong. It uses courtroom words because it is a trial, but the senators’ vote settles it.'
    ],
    take: 'When you see the word “trial”, ask who casts the votes or gives the ruling. If it is senators, the answer is {a:D1.congress}.' }
]);
