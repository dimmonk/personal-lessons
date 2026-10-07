// Civics, Unit Two, part four: the Bill of Rights. The first group carries the factual correction the plan names (docs/rebuild/civics-plan.md):
// the Bill of Rights is the first ten amendments and part of the Constitution, so it is held as a fact, and it is never an answer
// next to "the Constitution". The second group holds five of its ten amendments as a number and what it protects. The other five
// (the old material says nothing of them) are skipped, and the unit says so. Everything is from the old Unit Two.

FC.cards('civics', 'u2', [

  /* ---------- group six: the Bill of Rights itself ---------- */
  { id: 'con-bor', kind: 'concept',
    h: 'The Bill of Rights is part of the Constitution',
    link: 'Added four years after the Constitution, and often mistaken for a separate document.',
    case: 'cn-delegate',
    plain: [
      'The delegate’s complaint is why the Bill of Rights exists. The Constitution of 1787 set up a government and said what it could do, but it did not promise, in writing, to protect individual rights. Several states refused to approve it until it did. The answer, in 1791, was ten amendments, called the Bill of Rights.',
      'So the Bill of Rights is not a separate document, and not a rival to the Constitution. It is the first ten amendments, so it is part of the Constitution, and it is law. People mix this up all the time. If one person says “the Constitution gives you the right to remain silent” and another says “no, that is the Bill of Rights”, both are right.',
      'Most of it is written as limits on what the government may do to a person: “Congress shall make no law…”, “No person shall be…”.'
    ] },

  { id: 'facts-bor', kind: 'facts',
    h: 'Two facts about the Bill of Rights',
    link: 'What the Bill of Rights is, and why it was added.',
    concept: 'con-bor',
    rows: [
      { id: 'bor-what', q: 'What is the Bill of Rights?', a: 'The first ten amendments, so it is part of the Constitution and is law',
        relates: 'It is not a separate document. It was added in 1791 and is law, like the rest of the Constitution.' },
      { id: 'bor-why', q: 'Why was the Bill of Rights added?', a: 'Several states refused to approve the Constitution without written protection for individual rights',
        relates: 'The states that held out wanted the promise on paper, and the ten amendments are that promise.' }
    ] },

  { id: 'chk-bor-what', kind: 'check', after: 'facts-bor', ask: { type: 'fact', row: 'bor-what' } },
  { id: 'chk-bor-why', kind: 'check', after: 'facts-bor', ask: { type: 'fact', row: 'bor-why' } },

  /* ---------- group seven: five of the ten amendments ---------- */
  { id: 'con-six', kind: 'concept',
    h: 'Five amendments, and what each protects',
    link: 'The ones that come up most: the number, and what it protects.',
    case: 'cn-bag',
    plain: [
      'The man with the bag is pointing at the Fourth Amendment without saying its number. The news uses the numbers: “the First Amendment”, “the Fifth”. So learn the number first, then what it protects. This unit covers the First, Fourth, Fifth, Sixth and Tenth, and not the other five.',
      'A few words first. To petition is to ask the government to put right a wrong. A warrant is a judge’s written permission, which police generally need before a search. To testify is to say in court what you know. The Fifth says you cannot be forced to testify against yourself, which is called the right to remain silent. Due process means fair legal steps.',
      'Three of the five protect a person who is in trouble with the law. A search is the Fourth, staying silent is the Fifth, and a lawyer or a jury is the Sixth. The First is about what you may freely say and do. The Tenth is about governments, not people: it says what happens to powers the Constitution does not give to the federal government.'
    ] },

  { id: 'facts-six', kind: 'facts',
    h: 'Five amendments and what each protects',
    link: 'Each number protects one set of things.',
    concept: 'con-six',
    rows: [
      { id: 'six-first', q: 'What does the First Amendment protect?', a: 'Freedom of speech, religion, the press, peaceful assembly, and petition',
        relates: 'A story about what someone said, published, believed or peacefully gathered to do is a First Amendment story.' },
      { id: 'six-fourth', q: 'What does the Fourth Amendment protect?', a: 'No unreasonable searches or seizures; police generally need a warrant',
        relates: 'Searching the man’s bag with no reason at all is an unreasonable search.' },
      { id: 'six-fifth', q: 'What does the Fifth Amendment protect?', a: 'The right to remain silent, fair legal steps before punishment, and no second trial for the same crime',
        relates: 'You cannot be forced to testify against yourself, punished without fair legal steps, or tried twice for the same crime.' },
      { id: 'six-sixth', q: 'What does the Sixth Amendment protect?', a: 'A speedy, public jury trial, a lawyer, and the right to hear and question the witnesses against you',
        relates: 'These are the things a person on trial is entitled to have.' },
      { id: 'six-tenth', q: 'What does the Tenth Amendment say?', a: 'Powers not given to the federal government are kept by the states or the people',
        relates: 'This one is about government, not a person. It matches what you saw about Congress: a power that is not on the list belongs to the states.' }
    ] },

  { id: 'chk-six-first', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-first' } },
  { id: 'chk-six-fourth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-fourth' } },
  { id: 'chk-six-fifth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-fifth' } },
  { id: 'chk-six-sixth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-sixth' } },
  { id: 'chk-six-tenth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-tenth' } },

  { id: 'look-six-fifth-sixth', kind: 'lookalike', ledger: 'six-fifth~six-sixth',
    h: 'Silence, and a lawyer',
    link: 'Both protect a person who is questioned or on trial.',
    facts: ['six-fifth', 'six-sixth'],
    instruction: 'Ask what each gives a person: a limit on what can be forced from you, or something you are given at your trial.',
    prompt: { kind: 'which', answer: 'six-sixth' },
    difference: [
      'Fact A is the Fifth Amendment: {f:six-fifth}. Each part limits what can be done to you.',
      'Fact B is the Sixth Amendment: {f:six-sixth}. Each part is something you are given at your trial. When you hear “a lawyer”, think of the Sixth.'
    ] }
]);
