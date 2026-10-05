// Civics, Unit Three, part four: the fifth name (a charge against an official), the last look-alike pair, a wrong idea,
// and the key's question. "Removal from office" is the other word real life uses for the fifth name: the app says it once,
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
      'This is a trial, but not in a court. A court decides cases between people. Here Congress decides something else: whether a person keeps a public job. The House brings the charge, as an accuser does in a court, and the Senate holds the trial. The likeness stops at the result. A conviction here sends nobody to prison. It only removes the official from the job, and if the official also broke a criminal law, the ordinary courts deal with that separately.',
      'This is the answer when {when:C1.remove}. That can happen to a federal judge, to the head of a department, and even to the President.',
      'Notice that there are two separate steps. When the House votes to charge an official, people say the official has been “impeached”. That is the first step only, and it does not remove anyone. Only a conviction by the Senate does. The answer covers both steps: the House voting to charge, and the Senate trying the charge.'
    ],
    feature: { step: 'C1', option: 'remove' },
    name: 'The name for this is {o:impeach}. It is the word for the whole process of charging an official and trying the charge. The name does not say “removed”: the process can end with the official staying in the job.' },

  { id: 'again-impeach', kind: 'again', outcome: 'impeach',
    link: 'The judge’s case gave you what to point to: {needs:impeach}. Here is a second case, and this time the Senate does not convict.',
    first: 'i-judge', second: 'i-secretary', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a judge, a department head) and ignore how the trial ended. Look at one thing only: which chambers acted, and on what.',
    prompt: { kind: 'phrase', answer: 'The House voted by more than half to charge him' },
    shared: [
      'In both cases a federal official was accused of serious misconduct. In both, the House voted to charge the official and the Senate held a trial. In the first the Senate convicted and the judge was removed. In the second it fell short and the department head stayed in his job.',
      'So the name does not depend on how the trial ended. Both cases are one thing: a charge against an official, and a trial of the charge. The stories share nothing else, and that is what {o:impeach} names.'
    ] },

  { id: 'portrait-impeach', kind: 'portrait', outcome: 'impeach',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:impeach}.',
    typical: [
      'A federal official is accused of serious misconduct, such as lying, taking money or misusing public funds. It can be a judge, the head of a department, or even the President.',
      'It goes in two steps, and a case may show one of them or both. The House votes to charge. The Senate then holds the trial, and removes the official only if enough senators vote to convict. The exact numbers are on the card that introduced this name.',
      'The first step does not remove anyone. “Impeached” means charged, and “removed” means convicted by the Senate. A story can stop at either one.',
      'It is not a punishment in the criminal sense. Nobody goes to prison because of it, and the ordinary courts deal separately with any crime.',
      'Federal judges keep their jobs for as long as they behave well, so this is the way to remove a judge.'
    ],
    not: 'A trial in a court is not this name. A judge and a jury deciding about a crime belong to the answer {a:D1.courts} to its first question. This trial is held by senators, and the only thing at stake is the job.',
    wild: ['“The House impeached…”', '“Articles of impeachment.”', '“The Senate trial begins.”', '“Convicted and removed.”'],
    self: 'In your own life you meet it in the news when an official is “impeached” or when a Senate trial is set. Keep the two steps apart: a story that says “impeached” has told you only about the charge.',
    ask: '“Has the House voted to charge? Has the Senate tried the charge, and did it convict?” If the case is the House charging a federal official, or the Senate trying the charge, the answer is {a:C1.remove}.' },

  { id: 'check-impeach', kind: 'check', after: 'impeach',
    case: 'k-housing',
    ask: { type: 'phrase', step: 'C1', say: 'Which part of this case is the step Congress has already taken? Tap it.',
           answer: 'The House has voted to charge the head of the federal housing department with misusing public money' } },

  /* ---------- The last look-alike pair ---------- */
  { id: 'look-confirm-impeach', kind: 'lookalike', ledger: 'confirm~impeach',
    h: 'One woman, one Senate, two votes',
    link: 'You have met both names on their own. They are easy to mix up, because both are Senate votes about a person who works for the government of the whole country, and the same judge can be in both. This card puts them side by side, with one woman and one Senate.',
    cases: ['l-okafor-seat', 'l-okafor-trial'],
    instruction: 'Both cases are about Maria Okafor and the Senate. Compare one thing: whether she already has the job, and what the vote is about.',
    prompt: { kind: 'which', option: 'C1.remove', answer: 'l-okafor-trial' },
    difference: [
      'In Case A she is a lawyer, and the President has only put her forward. The Senate votes on whether to approve her for a job she does not yet have. The answer is {a:C1.approve}, and the case is {o:confirm}.',
      'In Case B she already has the job, and nobody is proposing her for anything. The House has charged her with taking money to decide cases, and the Senate will try the charge. The answer is {a:C1.remove}, and the case is {o:impeach}.',
      'Both cases end in the Senate, and the Senate is the one thing they share. What separates them is what the vote is about: a job someone is about to take, or a charge against someone who holds it.'
    ] },

  /* ---------- A wrong idea: a charge is a removal ---------- */
  { id: 'refute-charged', kind: 'refute', about: 'impeach',
    h: 'A wrong idea: “the House impeached him, so he has been removed”',
    link: 'The picture of {o:impeach} said that a story can stop at the first step. That is the point where many people think the matter is over.',
    idea: '“The House impeached the secretary, so the secretary has been removed from the job.”',
    verdict: 'This is wrong.',
    right: [
      'When the House votes to charge an official, the official is “impeached”, and nobody has been removed. The official stays in the job until the Senate has held its trial and voted. Only a conviction removes anyone, and a conviction takes more than a bare majority of the Senate. The card that introduced this name gave the exact number.',
      'So when a story says that an official was “impeached”, ask what the story has told you: the charge, or the result of the trial? The answer covers both steps, and a case only shows that the official is gone when the Senate has convicted.'
    ],
    testedBy: ['claim-impeached'] },

  /* ---------- The question ---------- */
  { id: 'q-congress', kind: 'question', step: 'C1',
    h: 'The question you have been answering all along',
    link: 'Since the airline-ticket tax you have seen the question under each new name, with one answer beneath it. This card puts the question and its five answers in one place, and says why it is asked.',
    decides: 'So two cases that sound alike can get different names, and two that sound different can get the same one. A tax on tickets and a one-dollar coin are the same name. A tax on bottled water and a grant for clinics are different names, although both are about the same clinics. The question is about what Congress does, and nothing about the topic, the vote or the people can stand in for that.',
    how: [
      'Find the sentence that shows what Congress does: the bill that passed, the money voted or left out, the Senate’s vote on a person or an agreement, or the House charging an official. Then ask which of the five answers describes that sentence. You should be able to put your finger on the words.',
      'For a law there are two tests, and the first two answers cover both. Is the matter on the Constitution’s list, and does the law take a right away? If the matter is on the list and no right is taken away, the answer is {a:C1.listed}. If the matter is not on the list, or a right is taken away, the answer is {a:C1.barred}.',
      'For the other three, ask what the vote or the decision is about. Money the government may spend: {a:C1.money}. A person or a {t:treaty} the President put forward: {a:C1.approve}. A charge against an official, or the trial of the charge: {a:C1.remove}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it. One more case has a rule of its own: a bill that spends money is also a law, so it can show both a law on a listed matter and a decision about money. When it does, the answer is {a:C1.money}.' },

  { id: 'check-congress', kind: 'check', after: 'C1',
    case: 'k-wed',
    ask: { type: 'step', step: 'C1' } }
]);
