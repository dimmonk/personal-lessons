// Civics, Unit Two, part four: the Bill of Rights. The first group carries the factual correction the plan names (docs/rebuild/civics-plan.md):
// the Bill of Rights is the first ten amendments and part of the Constitution, so it is held as a fact, and it is never an answer
// next to "the Constitution". The second group holds six of its ten amendments as a number and what it protects. Four of the ten
// (the old material says nothing of them) are skipped, and the unit says so. Everything is from the old Unit Two.

FC.cards('civics', 'u2', [

  /* ---------- group eight: the Bill of Rights itself ---------- */
  { id: 'con-bor', kind: 'concept',
    h: 'The Bill of Rights is part of the Constitution',
    link: 'The Constitution of 1787 built the government. This group is about what was added to it four years later, and about one thing in particular that is often got wrong.',
    case: 'cn-delegate',
    plain: [
      'The delegate’s complaint is the reason for the Bill of Rights. The Constitution of 1787 built a government and said what it might do, but it did not yet promise written protection for individual rights. Several states refused to approve the Constitution until it did. The answer, in 1791, was ten amendments. They are called the Bill of Rights.',
      'An amendment is a change added to the Constitution. So the Bill of Rights is not a separate document, and it is not a rival to the Constitution. It is the first ten amendments to the Constitution, so it is part of the Constitution, and it is law. That is the thing that confuses even people who were born here. A person who says “the Constitution gives you the right to remain silent” and a person who answers “no, that is the Bill of Rights” are both right, because the Bill of Rights is part of the Constitution.',
      'Most of the Bill of Rights is written as limits on what government may do to a person. Its sentences often begin “Congress shall make no law…”, “No person shall be…” or “The right of the people…”.'
    ] },

  { id: 'facts-bor', kind: 'facts',
    h: 'Three facts about the Bill of Rights',
    link: 'These are the three facts, each with how it fits the idea that the Bill of Rights is part of the Constitution and a promise on paper.',
    concept: 'con-bor',
    rows: [
      { id: 'bor-what', q: 'What is the Bill of Rights?', a: 'It is the first ten amendments to the Constitution, so it is part of the Constitution and is law',
        relates: 'It is not a separate document. It was added to the Constitution in 1791 and is law, as the rest of the Constitution is. When someone says “the Constitution gives you this right” and means a right in the first ten amendments, they are right.' },
      { id: 'bor-why', q: 'Why was the Bill of Rights added?', a: 'Several states would not approve the Constitution until it promised written protection for individual rights',
        relates: 'The states that held out wanted the promise on paper. The Constitution of 1787 had built the government and said what it might do, and the ten amendments are the promise that they asked for.' },
      { id: 'bor-limit', q: 'What do most of the rights in the Bill of Rights do?', a: 'Most of it limits what government may do to a person',
        relates: 'It is mostly written as limits on government, not as things that government must give you. That is why its sentences so often begin “Congress shall make no law…” or “No person shall be…”.' }
    ] },

  { id: 'chk-bor-what', kind: 'check', after: 'facts-bor', ask: { type: 'fact', row: 'bor-what' } },
  { id: 'chk-bor-why', kind: 'check', after: 'facts-bor', ask: { type: 'fact', row: 'bor-why' } },
  { id: 'chk-bor-limit', kind: 'check', after: 'facts-bor', ask: { type: 'fact', row: 'bor-limit' } },

  /* ---------- group nine: six of the ten amendments ---------- */
  { id: 'con-six', kind: 'concept',
    h: 'Six amendments, and what each protects',
    link: 'The Bill of Rights has ten amendments. This group holds six of them, the ones that come up most, each as a number and what it protects.',
    case: 'cn-bag',
    plain: [
      'The man in the story is pointing at one of the ten, the Fourth, without using its number. News stories name them by number all the time: “the First Amendment”, “the Fifth”. When you hear a number, you want to know what it protects, and this group holds the number first and what it protects second. The six are the First, the Fourth, the Fifth, the Sixth, the Eighth and the Tenth. This unit does not cover the other four.',
      'Some words need explaining first. To petition is to ask the government to put right a wrong. A warrant is a judge’s written permission, and police generally need one before a search. To testify is to say in court what you know, and the Fifth says that you cannot be forced to testify against yourself, which is called the right to remain silent. Bail is money paid to be released before a trial. Due process means fair legal steps.',
      'Four of the six protect a person who is in trouble with the law: the Fourth, the Fifth, the Sixth and the Eighth. A story about a search is about the Fourth. A story about silence is about the Fifth, and a story about a lawyer or a jury is about the Sixth. A story about bail or a harsh punishment is about the Eighth. The First is about what a person may say and do freely. The Tenth is different from the other five: the others protect a person, and the Tenth is about government. It says what happens to powers that the Constitution does not give to the federal government.'
    ] },

  { id: 'facts-six', kind: 'facts',
    h: 'Six amendments and what each protects',
    link: 'These are the six facts, each with how it fits the idea that each number protects one set of things.',
    concept: 'con-six',
    rows: [
      { id: 'six-first', q: 'What does the First Amendment protect?', a: 'Freedom of speech, religion, the press, peaceful assembly, and petition',
        relates: 'These are five freedoms in one amendment. When a story is about what someone said, published, believed or gathered peacefully to do, it is about the First Amendment.' },
      { id: 'six-fourth', q: 'What does the Fourth Amendment protect?', a: 'No unreasonable searches or seizures; police generally need a warrant',
        relates: 'This is the amendment in the story of the bag: a search with no reason at all is an unreasonable search. A warrant is a judge’s written permission, and police generally need one.' },
      { id: 'six-fifth', q: 'What does the Fifth Amendment protect?', a: 'The right to remain silent, fair legal steps before punishment, and no second trial for the same crime',
        relates: 'This is three protections in one. You cannot be forced to testify against yourself, which is why a person may stay silent. You cannot be punished without due process, which means fair legal steps. And you cannot be tried a second time for the same crime.' },
      { id: 'six-sixth', q: 'What does the Sixth Amendment protect?', a: 'A speedy, public jury trial, a lawyer, and the right to hear and question the witnesses against you',
        relates: 'These are the things that a person on trial is entitled to have: a speedy and public trial, with a jury, a lawyer, and the chance to hear and to question the witnesses against them.' },
      { id: 'six-eighth', q: 'What does the Eighth Amendment protect?', a: 'No excessive bail or fines, and no cruel and unusual punishment',
        relates: 'Bail is money paid to be released before a trial. The Eighth Amendment forbids bail and fines that are excessive, and forbids punishment that is cruel and unusual.' },
      { id: 'six-tenth', q: 'What does the Tenth Amendment say?', a: 'Powers not given to the federal government are kept by the states or the people',
        relates: 'This is the one of the six that is about government and not about a person. It fits what you saw about Congress: a power that is not on the list belongs to the states.' }
    ] },

  { id: 'chk-six-first', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-first' } },
  { id: 'chk-six-fourth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-fourth' } },
  { id: 'chk-six-fifth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-fifth' } },
  { id: 'chk-six-sixth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-sixth' } },
  { id: 'chk-six-eighth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-eighth' } },
  { id: 'chk-six-tenth', kind: 'check', after: 'facts-six', ask: { type: 'fact', row: 'six-tenth' } },

  { id: 'look-six-fifth-sixth', kind: 'lookalike', ledger: 'six-fifth~six-sixth',
    h: 'Silence, and a lawyer',
    link: 'Two of the six amendments both protect a person who is questioned or on trial. One is about what you cannot be made to do, and the other is about what you are entitled to have. They get swapped, so they go side by side.',
    facts: ['six-fifth', 'six-sixth'],
    instruction: 'Compare what each one gives a person: a limit on what can be forced from you, or something you are entitled to have at your trial.',
    prompt: { kind: 'which', answer: 'six-sixth' },
    difference: [
      'Fact A is the Fifth Amendment: {f:six-fifth}. Each part limits what can be done to you: you cannot be forced to speak, punished without fair steps, or tried twice for one crime.',
      'Fact B is the Sixth Amendment: {f:six-sixth}. Each part is something that you are given at your trial: a speedy and public trial by a jury, a lawyer, and the chance to question the witnesses.',
      'The right to stay silent is in the Fifth, and the right to a lawyer is in the Sixth. They are easy to swap because both are about a person facing a charge. When you hear “a lawyer”, think of the Sixth.'
    ] },

  { id: 'look-six-fourth-fifth', kind: 'lookalike', ledger: 'six-fourth~six-fifth',
    h: 'A search, and what you can be made to say',
    link: 'Two of the six amendments both limit what the police and the courts may do to you. They get swapped, so they go side by side.',
    facts: ['six-fourth', 'six-fifth'],
    instruction: 'Compare what each one stops: someone searching you or your things, or someone forcing you to speak or punishing you without fair steps.',
    prompt: { kind: 'which', answer: 'six-fourth' },
    difference: [
      'Fact A is the Fourth Amendment: {f:six-fourth}. It is about a search of you or your things.',
      'Fact B is the Fifth Amendment: {f:six-fifth}. It is about what happens to you in the legal process: being forced to speak, being punished without fair steps, and being tried twice.',
      'A story about police looking through a bag is about the Fourth. A story about a person who will not answer questions is about the Fifth.'
    ] }
]);
