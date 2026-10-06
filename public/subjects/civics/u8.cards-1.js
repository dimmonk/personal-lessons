// Civics, Unit Eight, part one: the opening card, then the two groups of rights that everyone here has.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case,
// then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked
// from memory and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts,
// the stakes line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.
// A row's q and a are printed as plain text, so they hold no tokens and no key wording; relates and every other text field resolve tokens.
// Within one facts card every answer has one form ("The right to ...", "The duty to ..."), so a choice cannot be guessed from its shape.

FC.cards('civics', 'u8', [

  { id: 'orient-rights', kind: 'orient',
    h: 'Facts to hold: what you have, what is asked of you, and what is not promised',
    canDo: 'This unit is a set of facts to hold: the rights, duties and promises of living here, the oath, and how the citizenship test works. By the end you can say each one without looking it up, at an interview or at a kitchen table.',
    everyday: 'A newcomer is stopped by the police and wonders whether to ask for a lawyer. A person on a work visa sees tax taken out of a payslip and wonders whether that is right. People who do not hold the facts tend to believe they have fewer protections than they do, or more promises than anyone made them.',
    add: 'Two things are left out on purpose: which rights still apply in an immigration hearing, and the details of the citizenship test, which change. Take those from the immigration service’s own website.' },

  /* ---------- group one: what you say, believe and print ---------- */
  { id: 'con-speak', kind: 'concept',
    h: 'A right is the government held back from you',
    link: 'The unit starts with what the Constitution holds the government back from, because that is what most of its rights are.',
    case: 'c8-hyewon',
    plain: [
      'The mayor disliked her letter, her rally and her petition, and he could do nothing to her for any of them. Nobody asked whether she was a citizen. A right, in this unit, is the government held back from you: something the Constitution says the government may not do to a person.',
      'The First Amendment holds the government back in five ways: what you say, what you believe, what is printed, whether you gather peacefully, and whether you ask the government to put a wrong right. Most of the Bill of Rights, the first ten amendments (an amendment is a change added to the Constitution), is written for ‘no person’, ‘the people’ and ‘the accused’, never for ‘citizens’, so these protections apply to everyone here, whatever their immigration status. After the Civil War the Fourteenth Amendment brought the same limits to states and cities.',
      'You already have names for this: when a case shows Congress taking one of these rights away, the name is {o:beyondcong}, and when a state or a city does, it is {o:protected}. This group holds the five rights themselves.'
    ] },

  { id: 'facts-speak', kind: 'facts',
    h: 'The five freedoms of the First Amendment',
    link: 'These are the five rights of the First Amendment, each with how it fits the idea that a right is the government held back.',
    concept: 'con-speak',
    rows: [
      { id: 'sp-speech', q: 'Which right protects you from being punished by the government for what you say?', a: 'The right to free speech',
        relates: 'It holds the government back from punishing what you say, and it names no citizenship, so a visitor and a citizen are covered alike.' },
      { id: 'sp-religion', q: 'Which right protects your choice to follow a religion, or none?', a: 'The right to practice a religion, or none',
        relates: 'The government is held back from punishing you for the religion you practice, or for having none.' },
      { id: 'sp-press', q: 'Which right stops a mayor from having a newsstand pull a magazine that he dislikes?', a: 'The right to a free press',
        relates: 'The ‘press’ means newspapers and magazines. No government, a city’s included, may stop them being printed or sold because it dislikes what they say.' },
      { id: 'sp-assembly', q: 'Which right lets people gather peacefully, for example for a rally in a public park?', a: 'The right to assemble peacefully',
        relates: 'It protects people who gather peacefully. A law from Congress banning every political rally in a public park would take it away.' },
      { id: 'sp-petition', q: 'Which right lets you ask the government to put right a wrong?', a: 'The right to petition the government',
        relates: 'Signing a petition asking the council to keep a library open is using it, and it is open to everyone here.' }
    ] },

  { id: 'chk-sp-speech', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-speech' } },
  { id: 'chk-sp-religion', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-religion' } },
  { id: 'chk-sp-press', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-press' } },
  { id: 'chk-sp-assembly', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-assembly' } },
  { id: 'chk-sp-petition', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-petition' } },

  { id: 'look-speak', kind: 'lookalike', ledger: 'sp-speech~sp-press',
    h: 'Speaking and printing',
    link: 'Two of the five rights both protect a person who criticizes the government in public, so they get swapped. They go side by side.',
    facts: ['sp-speech', 'sp-press'],
    instruction: 'Compare what each question protects: a person’s own words, or printed work that is on sale.',
    prompt: { kind: 'which', answer: 'sp-press' },
    difference: [
      'Fact A is about what a person says: {f:sp-speech}.',
      'Fact B is about what is printed and sold: {f:sp-press}.',
      'An article that criticizes the government is protected by both. What tells them apart is what the question is about: a person speaking, or something printed.'
    ] },

  /* ---------- group two: when you are accused of a crime ---------- */
  { id: 'con-accused', kind: 'concept',
    h: 'When the government accuses you of a crime',
    link: 'The First Amendment holds the government back from what you say and believe. Four more rights hold it back at the moment it accuses you of a crime.',
    case: 'c8-kofi',
    plain: [
      'Each step in Kofi’s case is the government held back, or held to a promise, for a person it accuses of a crime. Like the First, the Fourth, Fifth and Sixth Amendments never say ‘citizen’: they are written for ‘the people’ and ‘the accused’. Kofi has the same right to a lawyer, and the same right to stay silent, as a citizen charged with the same crime.',
      'The Constitution asks for fair legal steps before the government takes a person’s liberty, and people call that due process. When a judge is asked whether an accused person got these steps, the name is {o:trialrights}. This group holds four of the steps themselves.'
    ] },

  { id: 'facts-accused', kind: 'facts',
    h: 'Four steps for a person who is accused',
    link: 'These are the four steps of Kofi’s case, each with how it fits the idea that the government is held back from a person it accuses.',
    concept: 'con-accused',
    rows: [
      { id: 'ac-search', q: 'Which right protects your home from a search without a warrant or good reason?', a: 'The right to be safe from unreasonable searches',
        relates: 'It is why police generally need a warrant, a judge’s written permission, before they search.' },
      { id: 'ac-silence', q: 'Which right means that you cannot be forced to speak against yourself when you are questioned about a crime?', a: 'The right to remain silent',
        relates: 'A person cannot be forced to testify against themselves. Kofi may say that he will say nothing until he has a lawyer.' },
      { id: 'ac-lawyer', q: 'Which right means that a lawyer is appointed for you if you are charged with a crime and cannot pay for one?', a: 'The right to a lawyer',
        relates: 'The Sixth Amendment writes it for ‘the accused’ and never mentions citizens, so it is Kofi’s as it would be a citizen’s.' },
      { id: 'ac-jury', q: 'Which right means that ordinary people hear your case, in public and without long delay, when you are charged with a serious crime?', a: 'The right to a speedy public jury trial',
        relates: 'Kofi’s case was heard in public, before a jury, within a set time, and the government is held to that for any accused person here.' }
    ] },

  { id: 'chk-ac-search', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-search' } },
  { id: 'chk-ac-silence', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-silence' } },
  { id: 'chk-ac-lawyer', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-lawyer' } },
  { id: 'chk-ac-jury', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-jury' } },

  { id: 'look-accused', kind: 'lookalike', ledger: 'ac-silence~ac-lawyer',
    h: 'Saying nothing, and having a lawyer',
    link: 'Two of the four steps are said in the same breath at a police station, so they get swapped. They go side by side.',
    facts: ['ac-silence', 'ac-lawyer'],
    instruction: 'Compare what each question protects: whether you have to answer, or whether someone stands with you in the case.',
    prompt: { kind: 'which', answer: 'ac-lawyer' },
    difference: [
      'Fact A is about whether you have to answer: {f:ac-silence}.',
      'Fact B is about help in the case: {f:ac-lawyer}, appointed for you if you cannot pay.',
      'Kofi used both in one breath, ‘I want a lawyer and I will say nothing’. One lets you keep quiet, and the other gives you a person to act for you.'
    ] }
]);
