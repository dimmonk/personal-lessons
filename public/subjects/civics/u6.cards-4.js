// Civics, Unit Six, part three (second half) and the start of part four: the look-alike pair among the federal-law
// names, the exception "a state's rule that sounds like the state's own", and the fifth name
// (a right that stops a state's, a city's or a county's rule).

FC.cards('civics', 'u6', [

  { id: 'look-preempted-concurrent', kind: 'lookalike', ledger: 'preempted~concurrent',
    h: 'The same life-jacket rule, beside two different federal laws',
    link: 'These two names both have a federal law and a state rule on the same matter. Here they are side by side.',
    cases: ['u6-jackets-only', 'u6-jackets-floor'],
    instruction: 'Both cases are about life jackets on boats, and in both the state asks for two for each person where the federal law asks for one. Compare one thing: what the federal law says about the states.',
    prompt: { kind: 'which', option: 'S2.floor', answer: 'u6-jackets-floor' },
    difference: [
      'In Case A the federal law says that no state may require anything different. It is meant to be the only rule, so the state’s two life jackets give way. The answer is {a:S2.onlyrule}, and the case is {o:preempted}.',
      'In Case B the federal law says that it is a minimum, and that a state may require more. The state’s two life jackets stand beside it, and a boat with two for each person also meets the federal rule. The answer is {a:S2.floor}, and the case is {o:concurrent}.',
      'The state’s rule is the same in both, so only what the federal law says about the states tells them apart.'
    ] },

  { id: 'exc-crib', kind: 'exception', ledger: 'police~preempted', looksLike: 'police', is: 'preempted',
    h: 'A state’s safety rule that gives way',
    link: 'Here is a case that is hard because it sounds so much like a state deciding alone.',
    case: 'u6-cribs',
    setup: 'This looks like {o:police}: a state, caring about the safety of babies, makes a rule about goods sold in its own shops. A state’s concern for the health and safety of its people is exactly what its wide power is for. Yet the answer for this case is {a:S2.onlyrule}, and the case is {o:preempted}.',
    prompt: { kind: 'phrase', answer: 'A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one' },
    because: [
      'Ask what else covers the matter. A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one. Selling cribs across the country is trade between the states, which is on the list of federal powers, and Congress meant its standard to be the only one. The state’s reason was a good one, but that is not what the question asks.'
    ],
    take: 'A rule can sound as though it belongs to the state and still give way. Always ask what else covers the matter before you settle on the state’s own.' },

  /* ---------- The fifth name: a right that binds the states ---------- */
  { id: 'meet-protected', kind: 'meet', outcome: 'protected',
    link: 'One more thing can stop a state’s, a city’s or a county’s rule, and it needs no federal law: a right that the Constitution protects.',
    case: 'u6-leaflets', mark: 'S2',
    strip: [
      'There is a city, Redwick, and its city council, which passed an ordinance.',
      'The ordinance makes it a crime to hand out leaflets that criticize the mayor. The leaflets are speech, and the ordinance punishes it because of what it says.',
      'No federal law is needed for this to be a problem. The problem is a right.'
    ],
    explain: [
      'A city controls its own streets, and may make many rules about leaflets: where the trash cans go, how to keep the streets clean. This ordinance does not tidy anything. It makes handing out some leaflets a crime because of what they say about the mayor.',
      'The Constitution protects some rights so strongly that no government may take them away: to speak, to worship, to publish and to gather peacefully. They are in the First Amendment, and criticizing the mayor is speech. The first ten amendments, called the Bill of Rights, were first written to limit only the federal government. After the Civil War the Fourteenth Amendment was read to bring those limits to the states, so today they protect you against your state, your city and your county too.',
      'Rights have edges. A city may still set neutral rules about when and where an event happens, such as a noise limit, as long as the rule does not aim at what is said. This ordinance aims at what is said, and that is why it is stopped. As with the last two names, who made the rule changes nothing: a state, a city and a county are all bound.'
    ],
    feature: { step: 'S2', option: 'right' },
    name: 'The name for this case is {o:protected}. It means that a right the Constitution protects binds the states too, so the rule cannot stand.' },

  { id: 'check-protected', kind: 'check', after: 'protected',
    case: 'u6-c-gather',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor', 'right'] } }
]);
