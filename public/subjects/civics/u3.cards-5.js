// Civics, Unit Three, part two (second half): the fifth name (a charge against an official), the last look-alike pair,
// and the question. "Removal from office" is the other word real life uses for the fifth name: the app says it once,
// on its meet card, and this file does not type it. "Impeached" is the verb, and is not a line of the key.

FC.cards('civics', 'u3', [

  /* ---------- Impeachment ---------- */
  { id: 'meet-impeach', kind: 'meet', outcome: 'impeach',
    link: 'The last name was a Senate vote on someone who does not yet have the job. The fifth thing Congress does is also about a person who works for the government of the whole country. But this person already has the job, and is accused of serious misconduct.',
    case: 'i-judge', mark: 'C1',
    strip: [
      'A federal judge, who holds the job, is accused of serious misconduct: taking money to decide cases.',
      'Two chambers act, in two steps. The House votes first, by more than half, to charge the judge.',
      'Then the Senate holds a trial, and two-thirds of the senators present must vote to convict.',
      'Only after the Senate’s vote is the judge removed from the job.'
    ],
    explain: [
      'This is a trial, but not in a court. The House brings the charge, as an accuser does in a court, and the Senate holds the trial. A conviction here sends nobody to prison. It only removes the official from the job, and if the official also broke a criminal law, the ordinary courts deal with that separately. This is the answer when {when:C1.remove}. It can happen to a federal judge, to the head of a department, and even to the President.',
      'There are two separate steps. When the House votes to charge an official, people say the official has been “impeached”. That is the first step only, and it does not remove anyone. Only a conviction by the Senate does. The answer covers both steps: the House voting to charge, and the Senate trying the charge.'
    ],
    feature: { step: 'C1', option: 'remove' },
    name: 'The name for this is {o:impeach}. It is the word for the whole process of charging an official and trying the charge. The name does not say “removed”: the process can end with the official staying in the job.' },

  { id: 'check-impeach', kind: 'check', after: 'impeach',
    case: 'k-housing',
    ask: { type: 'phrase', step: 'C1', say: 'Which part of this case is the step Congress has already taken? Tap it.',
           answer: 'The House has voted to charge the head of the federal housing department with misusing public money' } },

  /* ---------- The last look-alike pair ---------- */
  { id: 'look-confirm-impeach', kind: 'lookalike', ledger: 'confirm~impeach',
    h: 'One woman, one Senate, two votes',
    link: 'They are easy to mix up, because both are Senate votes about a person who works for the government of the whole country. Here are two cases about one woman and one Senate.',
    cases: ['l-okafor-seat', 'l-okafor-trial'],
    instruction: 'Both cases are about Maria Okafor and the Senate. Compare one thing: whether she already has the job, and what the vote is about.',
    prompt: { kind: 'which', option: 'C1.remove', answer: 'l-okafor-trial' },
    difference: [
      'In Case A she is a lawyer, and the President has only put her forward. The Senate votes on whether to approve her for a job she does not yet have. The answer is {a:C1.approve}, and the case is {o:confirm}.',
      'In Case B she already has the job, and nobody is proposing her for anything. The House has charged her with taking money to decide cases, and the Senate will try the charge. The answer is {a:C1.remove}, and the case is {o:impeach}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-congress', kind: 'question', step: 'C1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place, and says why it is asked.',
    decides: 'Two cases that sound alike can get different names, and two that sound different can get the same one. A tax on tickets and a one-dollar coin would be the same name. A tax on bottled water and a grant for clinics are different names, although both are about the same clinics. The question is about what Congress does, and nothing about the topic, the vote or the people can stand in for that.',
    how: [
      'Find the sentence that shows what Congress does: the bill that passed, the money voted or left out, the Senate’s vote on a person or an agreement, or the House charging an official. Then ask which of the five answers describes it. You should be able to put your finger on the words.',
      'For a law there are two tests: is the matter on the Constitution’s list, and does the law take a right away? On the list with no right taken away is {a:C1.listed}; off the list, or a right taken away, is {a:C1.barred}. For the other three: money the government may spend is {a:C1.money}; a person or a {t:treaty} the President put forward is {a:C1.approve}; a charge against an official, or the trial of the charge, is {a:C1.remove}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it. One more case has a rule of its own: a bill that spends money is also a law, so it can show both a law on a listed matter and a decision about money. When it does, the answer is {a:C1.money}.' },

  { id: 'check-congress', kind: 'check', after: 'C1',
    case: 'k-wed',
    ask: { type: 'step', step: 'C1' } }
]);
