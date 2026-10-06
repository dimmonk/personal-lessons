// Civics, Unit Six, part three (second half) and the start of part four: the look-alike pairs among the federal-law
// names, the exception "a state rule that sounds like the state's own", two wrong ideas, and the fifth name
// (a right that stops a state's, a city's or a county's rule).

FC.cards('civics', 'u6', [

  { id: 'look-preempted-concurrent', kind: 'lookalike', ledger: 'preempted~concurrent',
    h: 'The same life-jacket rule, beside two different federal laws',
    link: 'These two names both have a federal law and a state rule on the same matter. This card puts them side by side.',
    cases: ['u6-jackets-only', 'u6-jackets-floor'],
    instruction: 'Both cases are about life jackets on boats, and in both the state asks for two for each person where the federal law asks for one. Compare one thing: what the federal law says about the states.',
    prompt: { kind: 'which', option: 'S2.floor', answer: 'u6-jackets-floor' },
    difference: [
      'In Case A the federal law says that no state may require anything different. It is meant to be the only rule, so the state’s two life jackets give way. The answer is {a:S2.onlyrule}, and the case is {o:preempted}.',
      'In Case B the federal law says that it is a minimum, and that a state may require more. The state’s two life jackets stand beside it, and a boat with two for each person also meets the federal rule. The answer is {a:S2.floor}, and the case is {o:concurrent}.',
      'The state’s rule is the same in both cases, word for word, so you cannot tell the cases apart from the state’s rule. You can only tell from what the federal law says about the states.'
    ] },

  { id: 'refute-always', kind: 'refute', about: 'preempted',
    h: 'A wrong idea about federal law',
    link: 'The last cards set a federal law that covers a matter beside a federal law that leaves room. Many people carry away a much shorter idea, and it is wrong.',
    idea: '“Federal law always beats state law.”',
    verdict: 'This is wrong.',
    right: [
      'A federal law takes over only where the federal government has power over the matter and has already used it, and the law is meant to be the only rule, or the two rules cannot both be obeyed. That is the whole case for {o:preempted}.',
      'Where a federal law sets only a minimum, the state’s rule stands beside it, which is {o:concurrent}. Where no federal law covers the matter, as with deposits or driver’s licenses, there is nothing for a state’s rule to give way to, which is {o:police}. So before you say that a federal law settles a case, point to the federal law, to the matter it covers, and to the words that make it the only rule.'
    ],
    testedBy: ['u6-claim-always'] },

  { id: 'look-police-preempted', kind: 'lookalike', ledger: 'police~preempted',
    h: 'A wait before a wedding, a wait before citizenship',
    link: 'The name for a state deciding alone and the name for a state giving way to a federal law can sound alike, because in both a state has made a rule. This card puts a case of each side by side.',
    cases: ['u6-wait-marry', 'u6-wait-citizen'],
    instruction: 'Both cases are about a state making people wait before something: three days before a wedding, three years before becoming a citizen. Compare one thing: whether a federal law covers the same matter and is meant to be the only rule.',
    prompt: { kind: 'which', option: 'S2.onlyrule', answer: 'u6-wait-citizen' },
    difference: [
      'In Case A the matter is marriage. It is not on the list of federal powers, and the case names no federal law about it. The state decides, and the case is {o:police}.',
      'In Case B the matter is becoming a citizen, which is on the list of federal powers, and Congress has already written the rules, meant to be the only ones. The state’s extra three years gives way. The answer is {a:S2.onlyrule}, and the case is {o:preempted}.',
      'The state’s rule has the same shape in both cases: a wait before a legal step. So the shape tells you nothing. What differs is whether a federal law covers the same matter and is meant to be the only rule.'
    ] },

  { id: 'exc-crib', kind: 'exception', ledger: 'police~preempted', looksLike: 'police', is: 'preempted',
    h: 'A state’s safety rule that gives way',
    link: 'The last card put two state rules side by side: one on a matter nothing federal covers, and one on a matter a federal law covers. Here is a case that is hard because it sounds so much like the first.',
    case: 'u6-cribs',
    setup: 'This looks like {o:police}: a state, caring about the safety of babies, makes a rule about goods sold in its own shops. A state’s concern for the health and safety of its people is exactly what its wide power is for. Yet the answer for this case is {a:S2.onlyrule}, and the case is {o:preempted}.',
    prompt: { kind: 'phrase', answer: 'A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one' },
    because: [
      'Ask what else covers the matter. A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one. Selling cribs across the country is trade between the states, which is on the list of federal powers, and Congress has used the power and meant its standard to be the only one.',
      'The state’s reason for acting was a good one, and the matter sounds like something a state would settle for itself. But the state’s reason is not what is asked. The question is whether a federal law covers the same matter and is meant to be the only rule, and here it does.'
    ],
    take: 'A rule can sound as though it belongs to the state and still give way. Always ask what else covers the matter before you settle on the state’s own.' },

  { id: 'refute-citizens', kind: 'refute', about: 'police',
    h: 'A wrong idea about who sets the rules for citizenship',
    link: 'The last cards were about a state’s rule and a federal law on the same matter. A common idea about the states leads people to the wrong name for exactly this kind of case.',
    idea: '“Each state sets its own rules for who can become a citizen, because the Constitution leaves most things to the states.”',
    verdict: 'This is wrong.',
    right: [
      'The Constitution does leave to the states everything its list of federal powers does not give. But the list includes the rules for becoming a citizen, and Congress has used that power: it has written one set of rules, and they apply the same way in every state. A state’s own scheme would be pushed aside, as Halvard’s three years of living there were.',
      'So before you use the name {o:police}, point to a matter that is not on the federal list and that no federal law covers. The rules for becoming a citizen are on the list and are covered, which makes any state rule on them a case of {o:preempted}.'
    ],
    testedBy: ['u6-claim-citizens'] },

  /* ---------- The fifth name: a right that binds the states ---------- */
  { id: 'meet-protected', kind: 'meet', outcome: 'protected',
    link: 'Until now a rule has either stood, or given way to a federal law. There is one more thing that can stop a state’s, a city’s or a county’s rule: a right that the Constitution protects. It needs no federal law to do it.',
    case: 'u6-leaflets', mark: 'S2',
    strip: [
      'There is a city, Redwick, and its city council, which passed an ordinance.',
      'The ordinance makes it a crime to hand out leaflets that criticize the mayor.',
      'The leaflets are speech, and the ordinance punishes it because of what it says.',
      'No federal law is needed for this to be a problem. The problem is a right.'
    ],
    explain: [
      'A city normally controls its own streets and what happens on them, and a council may make many rules about leaflets: where to put the trash cans, how to keep the streets clean. This ordinance is different. It does not tidy anything. It makes handing out some leaflets a crime because of what they say about the mayor.',
      'The Constitution protects some rights so strongly that no government may take them away: to speak, to worship, to publish and to gather peacefully. These are in the First Amendment. Criticizing the mayor is speech, and speech is the thing the First Amendment protects most.',
      'You may wonder why this applies to a city at all. The first ten amendments, called the Bill of Rights, were first written to limit only the federal government. After the Civil War the Fourteenth Amendment, added in 1868, was read to bring those limits to the states, and so today they protect you against your state, and against your city or county too.',
      'Rights have edges. A city may still set neutral rules about when and where an event happens, such as a noise limit, as long as the rule does not aim at what is said. This ordinance does aim at what is said, and that is why it is stopped.',
      'So the question that matters here is not who made the rule. A state, a city and a county are all bound. The question is what else covers the matter, and for this case the answer is a right.'
    ],
    feature: { step: 'S2', option: 'right' },
    name: 'The answer to this question is the one printed above, and the name for the case is {o:protected}. It means that a right the Constitution protects binds the states too, so the rule cannot stand. Here a city made the rule, and the first question gets the answer {a:S1.local}. Had a state made it, the answer would be {a:S1.own}. For this name, as for the last two, it makes no difference.' },

  { id: 'again-protected', kind: 'again', outcome: 'protected',
    link: 'The leaflets gave you what to point to: {needs:protected}. Here is a second case, with a different right and a different maker.',
    first: 'u6-leaflets', second: 'u6-worship', step: 'S2',
    instruction: 'Find what the two cases share. Ignore the story (leaflets, a religious service) and ignore who made the rule. Look at one thing only: what the rule takes away from people.',
    prompt: { kind: 'phrase', answer: 'a religious group may hold a service in a rented hall only with a permit from the state, and the permit office may refuse any group whose beliefs it does not like' },
    shared: [
      'In both cases a government made a rule that takes away something the Constitution protects. In the first the right is speech, and in the second it is worship. In the first a city made the rule, and in the second a state did.',
      'The two cases share nothing else, so this is not about leaflets, and not about religion. It holds wherever a state’s, a city’s or a county’s rule takes away a right, whoever made it. That is what {o:protected} names.'
    ] }
]);
