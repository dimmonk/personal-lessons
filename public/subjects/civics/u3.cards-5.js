// Civics, Unit Three, part two (second half): the fifth name (a charge against an official), the last look-alike pair,
// and the question. "Removal from office" is the other word real life uses for the fifth name: the app says it once,
// on its meet card, and this file does not type it. "Impeached" is the verb, and is not a line of the key.
// A meet card: the story first, then the idea (explain), then how to spot it (spot), then the name (lesson standard section 20).

FC.cards('civics', 'u3', [

  /* ---------- Impeachment ---------- */
  { id: 'meet-impeach', kind: 'meet', outcome: 'impeach',
    link: 'The last thing Congress does is also about a person who works for the government of the whole country. But this person already has the job, and is accused of wrongdoing.',
    case: 'i-judge', mark: 'C1',
    explain: [
      'This is a trial, but not in a court. The House brings the charge, the way an accuser does, and the Senate holds the trial. A guilty vote sends nobody to prison: it only removes the official from the job. If the official also broke a criminal law, the ordinary courts deal with that separately.',
      'It has two steps. When the House votes to charge someone, people say they have been “impeached”, but nobody is removed yet. Only the Senate’s guilty vote removes them. It can happen to a federal judge, the head of a department, or even the President.'
    ],
    spot: [
      { do: 'Find the accused: a federal judge who already holds the job.', why: 'This is about someone in office, not someone being picked.' },
      { do: 'Find the charge: taking money to decide court cases for one company.', why: 'It has to be serious wrongdoing.' },
      { do: 'Find the House vote: more than half voted to charge the judge.', why: 'That step charges the judge, and removes no one.' },
      { do: 'Find the Senate trial: 70 of 100 senators voted guilty.', why: 'Two-thirds of the senators present must vote guilty before anyone is removed.' }
    ],
    feature: { step: 'C1', option: 'remove' },
    name: 'This is {o:impeach}. It covers the charge and the trial, so a story that stops at the House vote is still this, even if the official stays in the job.' },

  { id: 'check-impeach', kind: 'check', after: 'impeach',
    case: 'k-housing',
    ask: { type: 'phrase', step: 'C1', say: 'Which words are the step Congress has already taken? Tap them.',
           answer: 'The House has voted to charge the head of the federal housing department with misusing public money' } },

  /* ---------- The last look-alike pair ---------- */
  { id: 'look-confirm-impeach', kind: 'lookalike', ledger: 'confirm~impeach',
    h: 'One woman, one Senate, two votes',
    link: 'These are easy to mix up, because both are Senate votes about a person who works for the government of the whole country. Here are two stories about one woman and one Senate.',
    cases: ['l-okafor-seat', 'l-okafor-trial'],
    instruction: 'Both stories are about Maria Okafor and the Senate. Compare one thing: does she already have the job, and what is the vote about?',
    prompt: { kind: 'which', option: 'C1.remove', answer: 'l-okafor-trial' },
    difference: [
      'In Story A she is a lawyer, and the President has only put her forward. The Senate votes on whether she gets a job she does not have yet. That is {o:confirm}.',
      'In Story B she already has the job. The House has charged her with taking money to decide court cases, and the Senate will try the charge. That is {o:impeach}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-congress', kind: 'question', step: 'C1',
    h: 'The question to ask when Congress is in the news',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Stories that sound alike can get different names, and stories that sound different can get the same one. A tax on tickets and a new one-dollar coin are the same name. A tax on bottled water and a grant for clinics are different names, although both are about the same clinics.',
      'Only what Congress did decides it. The topic, the vote and the people never do.'
    ],
    how: [
      { do: 'Find the sentence that shows what Congress did.', why: 'Look for the bill that passed, the money voted or left out, the Senate’s vote, or the House’s charge.' },
      { do: 'If it is a law, run two checks: is the subject on the Constitution’s list, and does it take a right away?', why: 'On the list with no right taken away is {o:enumerated}, and anything else is {o:beyondcong}.' },
      { do: 'If Congress votes money, cuts it or leaves it out, the answer is {o:purse}.', why: 'The government can spend only what Congress has voted.' },
      { do: 'If the Senate votes on the President’s pick or a {t:treaty}, the answer is {o:confirm}.', why: 'The Senate’s yes comes before the pick takes effect.' },
      { do: 'If an official already in the job is charged, or on trial, the answer is {o:impeach}.', why: 'Either step counts: the House’s charge or the Senate’s trial.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. One pair also has a rule of its own: a bill that spends money is a law too, so when a story shows both, the answer is {a:C1.money}.' },

  { id: 'check-congress', kind: 'check', after: 'C1',
    case: 'k-wed',
    ask: { type: 'step', step: 'C1' } }
]);
