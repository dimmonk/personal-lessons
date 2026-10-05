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
    canDo: [
      'This unit is different from the units that sort cases. Those teach you to put a question to a case. This one is a set of facts to hold: the rights, duties and promises of living here, the oath, and how the citizenship test works. By the end you can say each fact without looking it up, which is what you need when the question is put to you, at an interview or at a kitchen table.',
      'The facts are worth holding because people guess wrong about them in both directions. The question ‘am I allowed?’ has a different answer for a citizen, for a permanent resident and for a visitor, and a person who does not know the facts tends to believe that they have fewer protections than they do, or more promises than anyone made them. A fact that you already hold costs you no time and no guess.'
    ],
    everyday: [
      'Think of three moments. A newcomer is stopped by the police and wonders whether to ask for a lawyer. A person on a work visa reads a payslip with tax taken out and wonders whether that is right. A person who has lived here for twenty years sees a line of people waiting to vote and wonders whether to join it.',
      'Each of those moments has a plain answer, and the answer is a fact. A person who holds the fact does not have to guess, and does not have to ask a stranger who sounds sure.'
    ],
    add: [
      'Each group in this unit starts from a short story, then explains the idea in plain words, then gives the facts for that group in a table. After the table, each fact is asked once, from memory.',
      'Two things are left out on purpose, because the course does not hold them. It does not say which rights still apply in an immigration hearing, and it does not hold the details of the citizenship test, which change and can depend on the date a person filed. Where a card says so, take those from the immigration service’s own website.'
    ] },

  /* ---------- group one: what you say, believe and print ---------- */
  { id: 'con-speak', kind: 'concept',
    h: 'A right is the government held back from you',
    link: 'The unit starts with what the Constitution holds the government back from, because that is what most of its rights are.',
    case: 'c8-hyewon',
    plain: [
      'Look at what the mayor could not do. He disliked her letter, her rally and her petition, and he could do nothing to her for any of them. Nobody asked whether she was a citizen, because the protection she had does not depend on being one.',
      'A right, in this unit, is the government held back from you: something that the Constitution says the government may not do to a person. The First Amendment holds the government back in five ways. It protects what you say, what you believe, what is printed, whether you gather peacefully, and whether you ask the government to put a wrong right. (An amendment is a change added to the Constitution, and the Bill of Rights is the first ten of them, added in 1791.)',
      'Who has these rights? Most of the Bill of Rights is written with words such as ‘no person’, ‘the people’ and ‘the accused’, and none of them says ‘citizen’. So these protections apply to everyone in the United States, whatever their immigration status. Hye-won, who is here on a student visa, has all five. The Bill of Rights is not a list that is only for citizens: speech, religion, the press, a lawyer when you are charged and protection from unreasonable searches belong to everyone here.',
      'The first ten amendments were first written to limit only the federal government, which is the government of the whole country. After the Civil War the Fourteenth Amendment, in 1868, was read to bring the same limits to the states, so today they hold your state and your city back as well.',
      'You already have names for this. When a case shows Congress passing a law that takes one of these rights away, the name is {o:beyondcong}. When it shows a state or a city taking one away, the name is {o:protected}. This group holds the five rights themselves, one fact each.'
    ] },

  { id: 'facts-speak', kind: 'facts',
    h: 'The five freedoms of the First Amendment',
    link: 'These are the five rights of the First Amendment, each with how it fits the idea that a right is the government held back.',
    concept: 'con-speak',
    rows: [
      { id: 'sp-speech', q: 'Which right protects you from being punished by the government for what you say?', a: 'The right to free speech',
        relates: 'It holds the government back from punishing what you say, and it names no citizenship, so a visitor and a citizen are covered alike. A person who writes an article that criticises the government is protected by this right and by the right to a free press together.' },
      { id: 'sp-religion', q: 'Which right protects your choice to follow a religion, or none?', a: 'The right to practise a religion, or none',
        relates: 'The government is held back from punishing you for the religion that you practise, or for having none. The First Amendment protects the choice, and it applies to everyone here whatever their immigration status.' },
      { id: 'sp-press', q: 'Which right stops a mayor from having a newsstand pull a magazine that he dislikes?', a: 'The right to a free press',
        relates: 'The ‘press’ here means newspapers and magazines. A city may not order a newsstand to stop selling a magazine because the mayor dislikes it: the right to a free press holds every government back, a city’s included, because the Fourteenth Amendment brought the limit to the states.' },
      { id: 'sp-assembly', q: 'Which right lets people gather peacefully, for example for a rally in a public park?', a: 'The right to assemble peacefully',
        relates: 'It protects people who gather peacefully. A law from Congress that banned every group from holding a political rally in a public park would take it away, which is the kind of case called {o:beyondcong}.' },
      { id: 'sp-petition', q: 'Which right lets you ask the government to put right a wrong?', a: 'The right to petition the government',
        relates: 'To petition is to ask the government to put right a wrong. Signing a petition asking the council to keep a library open is using it, and it is open to everyone here, as the other four rights are.' }
    ] },

  { id: 'chk-sp-speech', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-speech' } },
  { id: 'chk-sp-religion', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-religion' } },
  { id: 'chk-sp-press', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-press' } },
  { id: 'chk-sp-assembly', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-assembly' } },
  { id: 'chk-sp-petition', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-petition' } },

  { id: 'look-speak', kind: 'lookalike', ledger: 'sp-speech~sp-press',
    h: 'Speaking and printing',
    link: 'Two of the five rights both protect a person who criticises the government in public, so they get swapped. They go side by side.',
    facts: ['sp-speech', 'sp-press'],
    instruction: 'Compare what each question protects: a person’s own words, or printed work that is on sale.',
    prompt: { kind: 'which', answer: 'sp-press' },
    difference: [
      'Fact A is about what a person says: {f:sp-speech}. The government is held back from punishing a person for their words.',
      'Fact B is about what is printed and sold: {f:sp-press}. The government is held back from taking a newspaper or a magazine out of people’s hands because it dislikes what it says.',
      'An article that criticises the government is protected by both, so a story can bring both to mind. What tells them apart is what the question is about: a person speaking, or something printed.'
    ] },

  /* ---------- group two: when you are accused of a crime ---------- */
  { id: 'con-accused', kind: 'concept',
    h: 'When the government accuses you of a crime',
    link: 'The First Amendment holds the government back from what you say and believe. Four more rights hold it back at the moment it accuses you of a crime.',
    case: 'c8-kofi',
    plain: [
      'Follow Kofi’s case in order. Police could search his flat only after a judge gave a warrant, which is a judge’s written permission. At the police station Kofi could say that he wanted a lawyer and would say nothing, and he did. The court appointed a lawyer because he could not pay for one. And his case was heard in public, by a jury, within a set time. Each step is the government held back, or held to a promise, for a person that it accuses of a crime.',
      'A criminal case is one in which a person is on trial for a crime. The steps come from the Fourth, Fifth and Sixth Amendments, and like the First they never say ‘citizen’. They are written for ‘the people’ and ‘the accused’. Kofi is here on a student visa, and he has the same right to a lawyer, and the same right to stay silent, as a citizen charged with the same crime would have.',
      'The Constitution asks for fair legal steps before the government takes a person’s liberty, and people call that due process. The four rights in this group are four of those steps. (The Eighth Amendment holds others, such as limits on bail and on cruel punishment. This unit does not hold them.)',
      'When a judge is asked whether an accused person got these steps, the name is {o:trialrights}. This group holds four of the steps themselves, one fact each.'
    ] },

  { id: 'facts-accused', kind: 'facts',
    h: 'Four steps for a person who is accused',
    link: 'These are the four steps of Kofi’s case, each with how it fits the idea that the government is held back from a person it accuses.',
    concept: 'con-accused',
    rows: [
      { id: 'ac-search', q: 'Which right protects your home from a search without a warrant or good reason?', a: 'The right to be safe from unreasonable searches',
        relates: 'It holds police back from unreasonable searches, and it is why police generally need a warrant, a judge’s written permission, before they search. It is in the Fourth Amendment, and it names no citizenship.' },
      { id: 'ac-silence', q: 'Which right means that you cannot be forced to speak against yourself when you are questioned about a crime?', a: 'The right to remain silent',
        relates: 'A person cannot be forced to testify against themselves. Kofi may say that he wants a lawyer and that he will say nothing until he has one. It is in the Fifth Amendment, and it protects everyone here.' },
      { id: 'ac-lawyer', q: 'Which right means that a lawyer is appointed for you if you are charged with a crime and cannot pay for one?', a: 'The right to a lawyer',
        relates: 'If you cannot pay for a lawyer in a criminal case, one is appointed for you. The Sixth Amendment writes it for ‘the accused’ and never mentions citizens, so it is Kofi’s as it would be a citizen’s.' },
      { id: 'ac-jury', q: 'Which right means that ordinary people hear your case, in public and without long delay, when you are charged with a serious crime?', a: 'The right to a speedy public jury trial',
        relates: 'The Sixth Amendment also gives the accused the right to hear and question the witnesses against them. Kofi’s case was heard in public, before a jury, within a set time, and the government is held to that for any accused person here.' }
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
      'Fact A is about whether you have to answer: {f:ac-silence}. It protects you from being forced to speak against yourself.',
      'Fact B is about help in the case: {f:ac-lawyer}. It gives you a lawyer, appointed for you if you cannot pay.',
      'Kofi used both in one breath, ‘I want a lawyer and I will say nothing’. They are two different rights: one lets you keep quiet, and the other gives you a person to act for you.'
    ] }
]);
