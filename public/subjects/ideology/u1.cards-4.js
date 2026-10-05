// Political Ideologies, Unit One, part four: the fourth answer (rights and fair treatment for everyone), its three
// look-alike pairs, the two exceptions in which it gives way, and the wrong idea that two texts about race are the same.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fourth answer: rights and fair treatment for everyone ---------- */
  { id: 'meet-rights', kind: 'meet', family: 'rights',
    link: 'Three answers so far. The fourth asks a different thing of a text. It is not about who the people are, or what they earn, or what was handed down to them. It is about what a person is owed.',
    case: 'i-rights-meet', mark: 'D1',
    strip: [
      'There is one thing the text puts first: what each person is owed. It names it: the freedom to speak, to believe, to own and to trade as they choose.',
      '"Each person" is the unit of the text. It does not speak for workers, or owners, or one people, or old ways. It speaks for any person at all.',
      'Nobody is set against anybody. There is no enemy group in the text, only something nobody should be refused.',
      'It says that this comes before any plan anyone has for the country.'
    ],
    explain: [
      'What this text is made of is something owed to every person, and a claim that it comes first. Here what is owed is a freedom: to say what you think, to believe what you believe, to own things and to trade. Other texts of this kind name other things owed to every person: a hearing before a decision is made about you, a doctor, a school, a fair start, or fair treatment whatever group you belong to.',
      'What you point to is the same in all of them: a text that says what every person is owed, and puts that first. It speaks for all persons alike, so it has no side in the way the first answer has one. It does not say "us" against "them".',
      'This answer does not say what people should be owed. One text can say that everyone is owed freedom from a government that does too much. Another can say that everyone is owed a school and a doctor, paid for by all. They disagree about a great deal, and both are this answer. What they share is that each puts first something every person is owed.',
      'Notice what the answer does not depend on. It does not depend on whether the thing named is good, or on whether anyone could ever provide it. It depends on the text saying that every person is owed it, and putting that first.'
    ],
    feature: { step: 'D1', option: 'rights' },
    name: 'In this unit the key’s answer is also the name of the kind of text: {a:D1.rights}. A "right" here means something a person is owed simply by being a person. "Fair treatment" means being treated the same however a person is described: by sex, race, income, belief or birthplace.' },

  { id: 'again-rights', kind: 'again', family: 'rights',
    link: 'The open-counter pamphlet gave you what to point to from one case: {needs:rights}. Here is a second case in a different story: a speech about a doctor and a school.',
    first: 'i-rights-meet', second: 'i-rights-again', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a stall licence, a doctor and a school). Look at one thing only: which words say what every person is owed?',
    prompt: { kind: 'phrase', answer: 'every child in this country is owed a doctor when they are ill and a school that will teach them' },
    shared: [
      'Both texts name something that every person is owed, and say it comes first. The pamphlet says each person is owed the freedom to speak, believe, own and trade. The speech says every child is owed a doctor and a school. What they name differs a great deal: one asks the government to leave people alone, and the other asks it to provide. That difference is a question of its own, and this unit does not ask it.',
      'What they share is the shape: every person, something owed, and put first. Neither sets one group against another. The speech even says it makes no difference what a child’s name or bank balance is. The two stories share nothing else, and the answer holds wherever a text says what every person is owed and puts it first. That is what {a:D1.rights} names.'
    ] },

  { id: 'portrait-rights', kind: 'portrait', family: 'rights',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.rights} where nobody marks the words for you.',
    typical: [
      'The text says "every person", "each person", "everyone", "whatever their name, income or birthplace". It speaks for all alike.',
      'Something is said to be owed: a freedom, a hearing, a doctor, a school, a fair start, the same treatment.',
      'It is put first, before a plan, a budget, a tradition or a country’s pride: "it comes before every line of the budget".',
      'Where the text names a group, it is usually to say that rules which look fair to everyone can still leave that group behind, and that nobody is placed above anybody else. It asks for fair treatment, and it ranks no group.',
      'There is rarely an enemy in it. There may be a rule, a habit or a government that is said to be breaking a promise to everyone, and the complaint is about the promise.'
    ],
    not: [
      'Mentioning a freedom, a school or a fair deal does not make a text this answer. A notice that the school opens at nine mentions a school and says nothing is owed to anyone. What you point to is the claim: every person is owed it, and it comes first.',
      'Naming groups does not either. A text that sorts people into workers and owners and stands with the workers names groups and sets them against each other. A text that speaks for every person alike does not.'
    ],
    wild: ['"Everyone is entitled to a fair hearing."', '"Nobody should be turned away for who they are."', '"These are rights, not favours."', '"Equal treatment for every person."', '"Freedom to speak, believe, own and trade."'],
    self: 'In your own life it is the argument over whether a rule is fair to everyone, a petition for a service every household should have, the words "that is not fair" said of a rule that treats everyone alike, or an opinion piece about what a person can expect from a government.',
    ask: '"What is said to be owed, who is it said to be owed to, and does the text put it first?" If it is owed to every person, and it comes first, this is the answer to look at.' },

  { id: 'check-rights', kind: 'check', after: 'rights',
    case: 'i-rights-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition', 'rights'] } },

  /* ---------- Three look-alike pairs ---------- */
  { id: 'look-class-rights', kind: 'lookalike', ledger: 'class~rights',
    link: 'The first and fourth answers are easy to mix up, because both can ask for fair pay and fair rules, and both can stand with people who have less. Here the same closing is told by each.',
    cases: ['i-can-rights', 'i-can-class'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: does the text speak for the workers against the owners, or for every person?',
    prompt: { kind: 'which', option: 'D1.class', answer: 'i-can-class' },
    difference: [
      'In Case A the cannery closes and the text says that every person who loses a job there is owed a fair hearing, fair notice and a fair start elsewhere, whoever they are and whatever they earned. It speaks for every person alike. There is no owner in it and no side. The key’s answer is {a:D1.rights}.',
      'In Case B the same cannery closes and the text sorts the people involved into the owners, who keep the profit, and the people who stood at the line. It stands with the second group, and says so. The key’s answer is {a:D1.class}.',
      'Both texts want the people who lose their jobs treated better. The difference is who the text speaks for: every person in Case A, or one of two sides of a split in Case B.'
    ] },

  { id: 'look-nation-rights', kind: 'lookalike', ledger: 'nation~rights',
    link: 'The second and fourth answers are easy to mix up when a text speaks of race or of where people come from, because both can say that people are treated differently according to the group they were born into. Here are two texts that use the same noun and point opposite ways.',
    cases: ['i-race-above', 'i-race-held'],
    instruction: 'Both cases are about race. Compare one thing: is one people placed above the others, or is nobody placed above anybody?',
    prompt: { kind: 'which', option: 'D1.rights', answer: 'i-race-held' },
    difference: [
      'In Case A the text says that its own race is the best and that the others were born to serve it. It puts one people first and places it above the rest. The key’s answer is {a:D1.nation}.',
      'In Case B the text says that no rule mentions race, and that rules treating every applicant alike still leave applicants of one race behind. It adds "Nobody is above anybody here", and asks for fair treatment for every applicant. The key’s answer is {a:D1.rights}.',
      'The two texts share a word and nothing else. One puts a people above the others. The other puts no one above anyone, and asks that rules be changed. You cannot tell them apart by the word, or by how angry they sound. You can tell them apart by who the text puts first.'
    ] },

  { id: 'look-tradition-rights', kind: 'lookalike', ledger: 'tradition~rights',
    link: 'The third and fourth answers are easy to mix up, because both can say that some things are owed to people and must not be taken away: a faith, a freedom, a way of life. Here the same closing is told by each.',
    cases: ['i-can-tradition', 'i-can-rights'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: why does the text say the thing it names matters? Because it was handed down, or because every person is owed it?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-can-tradition' },
    difference: [
      'In Case A the text mourns a supper held for a hundred years, and says that faith, home life and old custom should guide how the town rebuilds. What it names matters because it was handed down. The key’s answer is {a:D1.tradition}.',
      'In Case B the text says that every person who loses a job is owed a fair hearing, fair notice and a fair start. What it names matters because every person is owed it, whoever they are and however long anything has been done. The key’s answer is {a:D1.rights}.',
      'Both texts want something kept from being taken away. One keeps it because it is old, and the other because every person is owed it. The reason the text gives is what you point to.'
    ] },

  /* ---------- Exceptions: the fourth answer gives way twice ---------- */
  { id: 'exc-fairstart', kind: 'exception', ledger: 'class~rights', looksLike: 'rights', is: 'class',
    h: 'What every child is owed, and teachers against owners',
    link: 'The last three cards compared the fourth answer with the first, second and third on separate stories. A real text can show two answers at once. Here is one that says what every child is owed, and also sets teachers against owners.',
    case: 'i-x-fairstart',
    setup: 'The leaflet begins by saying that every child is owed a school with a roof that does not leak. Saying what every person is owed is what you point to for {a:D1.rights}. Yet the key’s answer for this case is {a:D1.class}.',
    prompt: { kind: 'phrase', answer: 'Teachers and owners want different things, and we are with the teachers' },
    because: [
      'The leaflet does say what every child is owed. If that were all it said, it would be {a:D1.rights}. But it goes on to name the academy chain that owns the school and the staff who teach in it, and says "teachers and owners want different things, and we are with the teachers". That is working people set against owners, with the text on the workers’ side.',
      'So the case shows both answers at once. When it does, the key chooses the first. The promise to every child is in the text, but what the text does with it is argue for the teachers against the owners.',
      'It chooses this way round for a reason. If the leaflet were given {a:D1.rights}, the owners and the staff would drop out of what the key looks at, and they are what the leaflet is about.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, a text can speak for every person and for one side at once, and the field draws no sharp line between the two. The key gives each text one answer, so that two people using it reach the same one and can each say why.' },

  { id: 'exc-lowtax', kind: 'exception', ledger: 'tradition~rights', looksLike: 'rights', is: 'tradition',
    h: 'Freedom, and old values to guide it',
    link: 'The last card showed the fourth answer giving way to the first. It also gives way to the third. Here is a text that wants a small government and wants each person to keep what they earn, and then says old values must guide.',
    case: 'i-x-lowtax',
    setup: 'The letter begins with what each person should keep and with a small government. That is what you point to for {a:D1.rights}. Yet the key’s answer for this case is {a:D1.tradition}.',
    prompt: { kind: 'phrase', answer: 'The church, the family and the customs our parents taught us are what hold a free country together, and what should guide it' },
    because: [
      'The letter does say what each person should keep, and that the government should be small. If that were all it said, it would be {a:D1.rights}. But look at its turn: "freedom without the old values is only a loose crowd". The letter then names the church, the home and the customs the writer’s parents taught, and says they are what hold a free country together and what should guide it.',
      'So the case shows both answers at once. When it does, the key chooses the third. The letter holds up the old values as what guides, and freedom as something that needs them.',
      'It chooses this way round for a reason. The letter itself puts the old values first: it calls freedom without them a loose crowd.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, people who want a small government and people who want old values to guide are often the same people, and say both in one breath. The key gives each text one answer, so that two people using it reach the same one and can each say why.' },

  { id: 'exc-twoduties', kind: 'exception', ledger: 'nation~rights', looksLike: 'rights', is: 'nation',
    h: 'A fair hearing for all, and the people first',
    link: 'The last card showed the fourth answer giving way to the third. It also gives way to the second. Here is a text that says every person is owed a fair hearing, and then says one people comes first.',
    case: 'i-x-twoduties',
    setup: 'The speech begins by saying that every person is owed a fair hearing. Saying what every person is owed is what you point to for {a:D1.rights}. Yet the key’s answer for this case is {a:D1.nation}.',
    prompt: { kind: 'phrase', answer: "our first duty is to our own people, and it comes before any stranger's claim" },
    because: [
      'The speech does say that every person is owed a fair hearing. If that were all it said, it would be {a:D1.rights}. But it goes on to say that this country is one people, and that "our first duty is to our own people, and it comes before any stranger’s claim". That is one people, marked out by its country, put first.',
      'So the case shows both answers at once. When it does, the key chooses the second. The fair hearing is in the text, but the text ranks it below the duty to its own people.',
      'It chooses this way round for a reason. The speech itself says which duty comes first, and the key asks what the text puts first.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, people can mean both a fair hearing for everyone and loyalty to their own people, and the field draws no sharp line between them. The key gives each text one answer, so that two people using it reach the same one and can each say why.' },

  /* ---------- A wrong idea: two texts that share a word ---------- */
  { id: 'refute-race', kind: 'refute', about: 'rights',
    h: 'A wrong idea: "they both talk about race, so they are the same"',
    link: 'The two texts about race put the same noun to opposite uses. People often say they are the same text, because the word is the same.',
    idea: '"A speech about how rules leave one race behind is no different from a pamphlet that ranks the races. Both talk about race."',
    verdict: 'This is wrong.',
    right: [
      'A word is not a text. "Race" turns up in both, and so does the fact that people are treated differently. But a text is what it says about the word, and these two say opposite things. One puts its own people above the others and says the others were born to serve. The other says nobody is above anybody, and asks that rules be changed so that no group is left behind.',
      'The key asks who or what the text puts first. For the pamphlet the answer is {a:D1.nation}: a people, placed above the rest. For the speech it is {a:D1.rights}: what every person is owed, with no one ranked. They are different answers to the same first question, so they cannot be the same text.',
      'This is true whichever way you feel about either text. Telling them apart is not approving of one of them. It is reading what each says, and the words that decide it are the ones that say whether one people is placed above the others, or no one is.'
    ],
    testedBy: ['i-claim-race'] }
]);
