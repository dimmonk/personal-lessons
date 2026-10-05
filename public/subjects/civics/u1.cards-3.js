// Civics, Unit One, part three: the third family (a judge, in any court), its look-alike pairs with the first two
// families, and the two exceptions that carry the words of a courtroom or an office into a story that ends elsewhere.

FC.cards('civics', 'u1', [

  /* ---------- The third family: a judge, in any court ---------- */
  { id: 'meet-courts', kind: 'meet', family: 'courts',
    link: 'Two kinds so far: lawmakers voting, and the President or an office deciding. The third is a decision made when two sides disagree and hand the matter to someone else, or when someone asks for it.',
    case: 'c-heater', mark: 'D1',
    strip: [
      'There is a quarrel between two people: Hana and her landlord. Each says the other must pay.',
      'They could not settle it between them, so they went to a judge.',
      'Each of them told their story to the judge. That is how a judge decides: by hearing both sides.',
      'The last thing in the case is the judge’s decision: the landlord must pay.',
      'Nobody votes, no office issues a rule, and no state or city decides anything.'
    ],
    explain: [
      'What you are shown is a judge settling a quarrel. Hana and her landlord disagree, and neither of them can decide it for the other, so they hand the decision to someone else. A judge does not write laws and does not run programmes. A judge decides a case that somebody has brought.',
      'That is all a case of this kind is made of: a judge deciding, as the last thing, or someone asking a judge to decide. The judge can sit in a court of the whole country or in a court of a state. The kind does not depend on which court it is.',
      'Notice what else it does not depend on. It does not depend on how important the quarrel is: a broken heater and a famous trial are the same kind. And it does not depend on whether you think the judge decided rightly. The decision is the judge’s either way.'
    ],
    feature: { step: 'D1', option: 'courts' },
    name: 'The answer, and so the name of the kind, is {a:D1.courts}. “Any court” means any judge: the highest court in the country, a court of a state, a court of a county. They are one kind here. “A judge” means someone whose job is to decide a case that is brought to them.' },

  { id: 'again-courts', kind: 'again', family: 'courts',
    link: 'The broken heater gave you what to point to: {needs:courts}. Here is a second case where nobody has decided yet.',
    first: 'c-heater', second: 'c-fence', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a heater, a fence). Look at one thing only: who has made the last decision, or has been asked to?',
    prompt: { kind: 'phrase', answer: 'asked a judge to settle it' },
    shared: [
      'In both cases two people disagree, and the decision is in the hands of a judge. In the heater case the judge has decided. In the fence case the judge has only been asked, and has not yet answered. That makes no difference to the kind: the case ends with the decision placed in front of a judge, and that is the decision it is about.',
      'The two quarrels share nothing else. One is about repairs and the other about land, and one is settled and the other is waiting. That is what {a:D1.courts} names: a decision that belongs to a judge, whether it has been given or only asked for.'
    ] },

  { id: 'portrait-courts', kind: 'portrait', family: 'courts',
    link: 'You know what to point to for {a:D1.courts}. This card fills in the rest of the picture, and says what judges are asked.',
    typical: [
      'There is a judge, and a case someone has brought. The words you hear are “a judge ruled”, “the court decided”, “asked a judge to”, “the case was dismissed”, “they are appealing”.',
      'What a judge is asked can be a quarrel between two people, whether a person accused of a crime has been treated fairly, what the words of a law cover, or whether a law or an act of the government fits the Constitution.',
      'A court does not act on its own. A judge moves only after someone has been harmed or accused, or has brought a quarrel. That is why so many cases of this kind end with “asked a judge”.',
      'What the judge is asked about can be a law or a rule from another part of government. If so, that came first. The case still ends with the judge, or with the request to the judge.',
      'The decision can be slow, and a higher court can change it. A case that ends with “they are appealing” is still this kind, because the people are asking a judge again.'
    ],
    not: [
      'A person who is accused of something is not yet in this kind. Being charged, arrested or fined is something that happened to them. The kind starts when a judge decides, or when someone asks a judge to.',
      'And a trial is not always a judge’s. A trial of an official held in the Senate is held by the Senate, and the senators vote at the end. A word from the courtroom is not enough: you need a judge.'
    ],
    wild: ['"The judge ruled."', '"The court struck it down."', '"They are appealing."', '"The case was dismissed."', '"He asked a judge to decide."'],
    self: 'In your own life you meet this kind in a dispute with a landlord, a neighbour or a firm, and in any news about a trial or a ruling.',
    ask: '"Has a judge decided this, or has someone asked a judge to?" If so, in any court, the answer is {a:D1.courts}.' },

  { id: 'check-courts', kind: 'check', after: 'courts',
    case: 'k-lease',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president', 'courts'] } },

  /* ---------- The second look-alike pair ---------- */
  { id: 'look-congress-courts', kind: 'lookalike', ledger: 'congress~courts',
    h: 'One law: the vote, then a judge asked about it',
    link: 'Lawmakers and a judge can both appear in a story about one law: first the lawmakers vote on it, and later someone argues about it in front of a judge. This card puts the two side by side.',
    cases: ['l-drone-vote', 'l-drone-judge'],
    instruction: 'Both cases are about the same drone law. Compare one thing: whose decision does each story end on?',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'l-drone-judge' },
    difference: [
      'In Case A the law does not exist yet. The House has voted for the bill, and the story ends by sending it to the Senate. Lawmakers are voting, and no judge is anywhere. The answer is {a:D1.congress}.',
      'In Case B the law is a year old and a man has been fined under it. The story ends with Ellis asking a judge whether the law covers a drone as small as his. The votes that made the law are far behind, and the case is about what a judge will decide. The answer is {a:D1.courts}.',
      'The law is the same, and the two cases come at different times in its life. Before it is passed, lawmakers decide. After someone has been fined, a judge is asked. What separates the cases is whose decision each one ends on.'
    ] },

  { id: 'exc-trial', kind: 'exception', ledger: 'congress~courts', looksLike: 'courts', is: 'congress',
    h: 'A trial that is held in the Senate',
    link: 'The last card kept the two kinds tidy. A real story can use the words of a courtroom and still be a vote by lawmakers. Here is one, and the questions answer it the same way every time.',
    case: 'x-trial',
    setup: 'This case has a trial, a charge and a man who may be found guilty. Those are words from a courtroom, and a judge’s decision is what you point to for {a:D1.courts}. Yet the answer for this case is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the senators will vote on whether he is guilty' },
    because: [
      'Look at who decides. The House votes to charge him, and the Senate holds the trial, and at the end of it senators vote. The people who decide the case are lawmakers. No judge decides anything in it.',
      'A trial of this kind is how Congress can remove an official who has committed serious misconduct. It uses the words of a courtroom, because it is a trial, but it is held by the Senate and settled by the senators’ vote.',
      'So the case shows a courtroom’s words and lawmakers’ votes, and the question is who decides.'
    ],
    take: 'This is easy to get wrong, because we are used to “trial” meaning a judge. When the word turns up, ask who casts the votes or gives the ruling. If it is senators, the case is {a:D1.congress}.' },

  /* ---------- The third look-alike pair ---------- */
  { id: 'look-president-courts', kind: 'lookalike', ledger: 'president~courts',
    h: 'An office’s decision, and a judge asked about it',
    link: 'An office can make a decision that someone then takes to a judge. This card puts the two stages of one story side by side.',
    cases: ['l-form-refused', 'l-form-judge'],
    instruction: 'Both cases are about Mr Okoro’s application. Compare one thing: whose decision does each story end on?',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'l-form-judge' },
    difference: [
      'In Case A the story ends with a letter from the immigration service: it refuses Mr Okoro’s application and says why. An office has decided. Nobody has gone to a judge yet. The answer is {a:D1.president}.',
      'In Case B the office’s refusal is in the story too, but as how the matter reached the judge. The story ends with Mr Okoro asking a judge whether the form was really missing. The answer is {a:D1.courts}.',
      'The refusal is in both cases. In Case A it is the last decision, and in Case B it is how the case got there. What separates the two is what the story ends on.'
    ] },

  { id: 'exc-rule', kind: 'exception', ledger: 'president~courts', looksLike: 'president', is: 'courts',
    h: 'An office’s rule, taken to a judge',
    link: 'The last card showed an office’s decision and then a judge. Sometimes the first half of a story is so full of an office that the second half is easy to miss.',
    case: 'x-loanrule',
    setup: 'The case opens with an office publishing a rule, and publishing a rule is what you point to for {a:D1.president}. It then says the office “has gone too far”. Yet the answer for this case is {a:D1.courts}.',
    prompt: { kind: 'phrase', answer: 'asked a judge to block the rule' },
    because: [
      'Read to the end. The office published its rule in June, and that was a decision, but it is an old one. The case ends on Monday, when the lenders’ group asked a judge to block the rule.',
      'The group’s complaint, that the office has gone too far, is not a decision. It only says why the group is asking. The decision the case asks for is the judge’s.',
      'So the case shows an office’s decision and a request to a judge, in that order. The question asks for the last decision, or the one the case asks for, and that is the judge’s.'
    ],
    take: 'This shape is common: someone takes a rule to a judge. The rule comes first in the story, and it is easy to stop reading there. The judge’s part comes last, and that is where the question looks.' }
]);
