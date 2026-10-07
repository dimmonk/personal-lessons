// Civics, Unit Six, part three (second half) and the start of part four: the look-alike pair among the federal-law
// names, the exception "a state's rule that sounds like the state's own", and the fifth name
// (a right that stops a state's, a city's or a county's rule).

FC.cards('civics', 'u6', [

  { id: 'look-preempted-concurrent', kind: 'lookalike', ledger: 'preempted~concurrent',
    h: 'The same life-jacket rule, beside two different federal laws',
    link: 'Both of these have a federal law and a state rule on the same matter. Here they are side by side.',
    cases: ['u6-jackets-only', 'u6-jackets-floor'],
    instruction: 'Both stories are about life jackets on boats, and in both the state asks for two for each person where the federal law asks for one. Compare one thing: what the federal law says about the states.',
    prompt: { kind: 'which', option: 'S2.floor', answer: 'u6-jackets-floor' },
    difference: [
      'In Story A the federal law says no state may require anything different. It is the only rule, so Tarn’s two life jackets give way. The answer is {a:S2.onlyrule}, and it is {o:preempted}.',
      'In Story B the federal law says one life jacket is the minimum and a state may require more. Tarn’s two life jackets stand beside it, and a boat with two for each person also meets the federal rule. The answer is {a:S2.floor}, and it is {o:concurrent}.',
      'Tarn’s rule is the same in both. Only what the federal law says about the states tells them apart.'
    ] },

  { id: 'exc-crib', kind: 'exception', ledger: 'police~preempted', looksLike: 'police', is: 'preempted',
    h: 'A state’s safety rule that gives way',
    link: 'Here is a story that sounds like a state deciding alone, and is not.',
    case: 'u6-cribs',
    setup: 'This sounds like {o:police}: a state wants babies safe, so it makes a rule for cribs sold in its own shops. Protecting its people’s safety is exactly what a state’s power is for. Yet the answer here is {a:S2.onlyrule}, and it is {o:preempted}.',
    prompt: { kind: 'phrase', answer: 'A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one' },
    because: [
      'Ask what else covers the matter. A federal law sets one safety standard for every crib sold in the country, and says no state may set a different one. Selling across the country is trade between the states, which is on the federal list, and Congress meant its standard to be the only one. The state’s reason was good, but the question is not about reasons.'
    ],
    take: 'A rule can sound like the state’s own business and still give way. Before you decide a state’s rule stands, ask what else covers the matter.' },

  /* ---------- The fifth name: a right that applies to the states ---------- */
  { id: 'meet-protected', kind: 'meet', outcome: 'protected',
    link: 'One more thing can stop a state’s, a city’s or a county’s rule, and it needs no federal law: a right in the Constitution.',
    case: 'u6-leaflets', mark: 'S2',
    explain: [
      'Redwick’s council did not tidy anything. It made handing out some leaflets a crime because of what they say about the mayor.',
      'The Constitution protects some rights so strongly that no government may take them away: to speak, to worship, to publish and to gather peacefully. They are in the First Amendment, and criticizing the mayor is speech. The first ten amendments, the Bill of Rights, were first written to limit only the federal government. After the Civil War the Fourteenth Amendment was read to carry those limits to the states, so today they protect you against your state, your city and your county too.',
      'Rights have edges. A city may still set neutral rules about when and where an event happens, such as a noise limit, as long as the rule does not aim at what is said. This ordinance aims at what is said, so it is stopped.'
    ],
    spot: [
      { do: 'Find what the rule does: it makes handing out leaflets that criticize the mayor a crime.', why: 'Look at what the rule bans or punishes, not only at who made it.' },
      { do: 'Check whether that is a protected right: leaflets are speech.', why: 'The protected ones are speaking, worshiping, publishing and gathering peacefully.' },
      { do: 'Check whether the rule aims at what is said: it targets leaflets about the mayor.', why: 'A neutral rule about where or when is generally allowed, and one aimed at the message is not.' }
    ],
    feature: { step: 'S2', option: 'right' },
    name: 'This is {o:protected}. It does not matter whether a state, a city or a county made the rule: all of them have to respect these rights.' },

  { id: 'check-protected', kind: 'check', after: 'protected',
    case: 'u6-c-gather',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor', 'right'] } }
]);
