// Civics, Unit Eight, part one: the opening card, then the two groups of rights that everyone here has.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a story,
// then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked
// from memory and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts,
// the stakes line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.
// A row's q and a are printed as plain text, so they hold no tokens and no key wording; relates and every other text field resolve tokens.
// Within one facts card every answer has one form ("The right to ...", "The duty to ..."), so a choice cannot be guessed from its shape.
// Plain words (lesson standard section 20): each concept card gives the idea in everyday words after its story, and each row's
// "relates" line says how the fact shows up in real life.

FC.cards('civics', 'u8', [

  { id: 'orient-rights', kind: 'orient',
    h: 'What you have, what is asked of you, and what nobody promises',
    canDo: 'When the police stop you, when tax comes out of your pay, or when a letter calls you to a courthouse, you know what the law gives you, what it asks of you, and what nobody promised. You can say each fact without looking it up, at an interview or at a kitchen table.',
    everyday: 'A newcomer is stopped by the police and wonders whether to ask for a lawyer. A person on a work visa sees tax taken out of a payslip and wonders whether that is right. People who do not know these facts usually believe they have fewer protections than they do, or more promises than anyone made them.',
    add: 'Two things are left out on purpose: which rights still apply in an immigration hearing, and the details of the citizenship test, which change. Get those from the immigration service’s own website.' },

  /* ---------- group one: what you say, believe and print ---------- */
  { id: 'con-speak', kind: 'concept',
    h: 'A right holds the government back from you',
    link: 'Most of the rights in the Constitution are limits on the government. The first group has five of them.',
    case: 'c8-hyewon',
    plain: [
      'The mayor was angry about her letter, her rally and her petition, and he could do nothing about any of them. Nobody even asked if she was a citizen. That is what a right is in this unit: something the Constitution says the government may not do to a person.',
      'The First Amendment (an amendment is a change added to the Constitution) stops the government from punishing you for five things: what you say, what you believe, what you print, gathering peacefully, and asking the government to fix something wrong. Like most of the first ten amendments, the Bill of Rights, it says “no person”, “the people” or “the accused”, never “citizens”. So it protects everyone here, whatever their immigration status. After the Civil War the Fourteenth Amendment made the same limits apply to states and cities.',
      'You have already met two names for this. When a story shows Congress taking one of these rights away, the name is {o:beyondcong}. When a state or a city does, the name is {o:protected}. This group is the five rights themselves.'
    ] },

  { id: 'facts-speak', kind: 'facts',
    h: 'The five freedoms of the First Amendment',
    link: 'These are the five rights of the First Amendment. Each comes with how it shows up in real life.',
    concept: 'con-speak',
    rows: [
      { id: 'sp-speech', q: 'Which right stops the government from punishing you for what you say?', a: 'The right to free speech',
        relates: 'You can criticize the mayor out loud and he cannot punish you for it. The law says “no person”, so a visitor is covered the same as a citizen.' },
      { id: 'sp-religion', q: 'Which right protects your choice to follow a religion, or none?', a: 'The right to practice a religion, or none',
        relates: 'The government cannot punish you for the religion you follow, or for following none. Hye-won can go to her place of worship every Friday.' },
      { id: 'sp-press', q: 'Which right stops a mayor from having a newsstand pull a magazine he dislikes?', a: 'The right to a free press',
        relates: '“The press” means newspapers and magazines. No government, not even a city’s, can stop them from being printed or sold because it dislikes what they say.' },
      { id: 'sp-assembly', q: 'Which right lets people gather peacefully, for example at a rally in a public park?', a: 'The right to assemble peacefully',
        relates: 'A law from Congress banning every political rally in a public park would take this right away. Hye-won’s rally outside the town hall is protected.' },
      { id: 'sp-petition', q: 'Which right lets you ask the government to fix something wrong?', a: 'The right to petition the government',
        relates: 'Signing a petition asking the council to keep a library open is using it, and everyone here can.' }
    ] },

  { id: 'chk-sp-speech', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-speech' } },
  { id: 'chk-sp-religion', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-religion' } },
  { id: 'chk-sp-press', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-press' } },
  { id: 'chk-sp-assembly', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-assembly' } },
  { id: 'chk-sp-petition', kind: 'check', after: 'facts-speak', ask: { type: 'fact', row: 'sp-petition' } },

  { id: 'look-speak', kind: 'lookalike', ledger: 'sp-speech~sp-press',
    h: 'Speaking and printing',
    link: 'Free speech and a free press both protect someone who criticizes the government, so people mix them up. Here they are side by side.',
    facts: ['sp-speech', 'sp-press'],
    instruction: 'Ask what the government is acting against: a person’s own words, or something that is printed and sold.',
    prompt: { kind: 'which', answer: 'sp-press' },
    difference: [
      'Fact A is about a person’s own words: {f:sp-speech}.',
      'Fact B is about what newspapers and magazines print and sell: {f:sp-press}.',
      'An article that criticizes the mayor could be either one. What tells them apart is what the question is about: a person speaking, or something printed.'
    ] },

  /* ---------- group two: when you are accused of a crime ---------- */
  { id: 'con-accused', kind: 'concept',
    h: 'When the government says you committed a crime',
    link: 'The First Amendment holds the government back from your words and beliefs. Four more rights hold it back when it accuses you of a crime.',
    case: 'c8-kofi',
    plain: [
      'Every step of Kofi’s story is the government held back, or held to a promise, because it says he committed a crime. The Fourth, Fifth and Sixth Amendments, like the First, never say “citizen”. They say “the people” and “the accused”. So Kofi has the same right to a lawyer, and the same right to stay silent, as a citizen charged with the same crime.',
      'The Constitution asks for fair steps before the government can take away a person’s freedom. People call this due process. When a judge is asked whether an accused person got these steps, the name is {o:trialrights}. This group is four of those steps.'
    ] },

  { id: 'facts-accused', kind: 'facts',
    h: 'Four rights if you are accused of a crime',
    link: 'These are the four rights in Kofi’s story. Each comes with how it showed up for him.',
    concept: 'con-accused',
    rows: [
      { id: 'ac-search', q: 'Which right protects your home from a search without a warrant or a good reason?', a: 'The right to be safe from unreasonable searches',
        relates: 'This is why police generally need a warrant, a judge’s written permission, before they search. Kofi’s police asked a judge first.' },
      { id: 'ac-silence', q: 'Which right means you cannot be forced to speak against yourself when police question you about a crime?', a: 'The right to remain silent',
        relates: 'No one can be forced to testify against themselves. Kofi tells the police he will say nothing until he has a lawyer.' },
      { id: 'ac-lawyer', q: 'Which right means the court appoints a lawyer for you if you are charged with a crime and cannot pay for one?', a: 'The right to a lawyer',
        relates: 'The Sixth Amendment says “the accused”, never “citizens”. Kofi gets a lawyer the same way a citizen would.' },
      { id: 'ac-jury', q: 'Which right means a jury of ordinary people decides, in public and without long delay, when you are charged with a serious crime?', a: 'The right to a speedy public jury trial',
        relates: 'Kofi’s trial was in public, in front of a jury, within the time the court set. Anyone accused of a crime here gets the same.' }
    ] },

  { id: 'chk-ac-search', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-search' } },
  { id: 'chk-ac-silence', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-silence' } },
  { id: 'chk-ac-lawyer', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-lawyer' } },
  { id: 'chk-ac-jury', kind: 'check', after: 'facts-accused', ask: { type: 'fact', row: 'ac-jury' } },

  { id: 'look-accused', kind: 'lookalike', ledger: 'ac-silence~ac-lawyer',
    h: 'Saying nothing, and having a lawyer',
    link: 'People say these two in one breath at a police station, so they get mixed up. Here they are side by side.',
    facts: ['ac-silence', 'ac-lawyer'],
    instruction: 'Ask what each one protects: whether you have to answer, or whether someone stands with you.',
    prompt: { kind: 'which', answer: 'ac-lawyer' },
    difference: [
      'Fact A is about whether you have to answer: {f:ac-silence}.',
      'Fact B is about having someone act for you: {f:ac-lawyer}, appointed if you cannot pay.',
      'Kofi used both in one breath: “I want a lawyer and I will say nothing.” One lets you keep quiet, and the other gives you a person on your side.'
    ] }
]);
