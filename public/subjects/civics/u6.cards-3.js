// Civics, Unit Six, part three (first half): the two names where a federal law covers the same matter as the rule:
// a federal law meant to be the only rule, and a federal law that leaves room for the state's rule.

FC.cards('civics', 'u6', [

  /* ---------- The third name: a federal law that is meant to be the only rule ---------- */
  { id: 'meet-preempted', kind: 'meet', outcome: 'preempted',
    link: 'So far a state, a city, a town or a county has made a rule that nothing else covered. Now put a federal law beside the rule. The case below is one where that changes the answer.',
    case: 'u6-status-scheme', mark: 'S2',
    strip: [
      'There is a state, Lorne, and its legislature, which passed a scheme of its own.',
      'There is also a federal law: Congress has written detailed laws on who may live in the country.',
      'Those laws are meant to be the only rules on the matter.',
      'The state’s scheme is about the same matter as the federal laws: who may stay in the country.'
    ],
    explain: [
      'Here two governments have made rules about the same thing. Congress has written laws on who may live in the country and for how long, and the laws are meant to be the only rules. Then one state writes a scheme of its own on the same matter.',
      'Which one counts? The Constitution answers. It calls federal law the supreme law of the land, which means that where the federal government has the power to act and has already acted, a state rule that gets in its way has to give way. Immigration and the rules for becoming a citizen are on the list of federal powers, and Congress has used its power. A state has no room to write rules of its own on them.',
      'This does not mean that a federal law always beats a state rule. It does so only where the federal government has power over the matter and has already used it. On a matter that belongs to the states, a federal rule has no standing at all. And even where there is a federal law, the state’s rule gives way in only two ways: Congress meant its rule to be the only one on the subject, as here, or the two rules clash, so that nobody could obey both.',
      'Notice what makes the state’s scheme lose. It is not that a state made it: a state makes rules on many things. It loses because a federal law covers the same matter and is meant to be the only rule. This is the second question, about what else covers the matter, and it is the one that matters here. Whoever made the rule, a state or a city, a town or a county, a federal law of this kind would push it aside.'
    ],
    feature: { step: 'S2', option: 'onlyrule' },
    name: 'The answer to this question is the one printed above, and the name for the case is {o:preempted}. It means that a federal rule has pushed a state’s or a city’s rule aside, so that the state’s or city’s rule gives way. The first question gets the answer {a:S1.own} here, and it would get {a:S1.local} if a city had made the rule. For this name, who made the rule changes nothing.' },

  { id: 'again-preempted', kind: 'again', outcome: 'preempted',
    link: 'The immigration scheme gave you what to point to: {needs:preempted}. Here is a second case with a different story.',
    first: 'u6-status-scheme', second: 'u6-airspace', step: 'S2',
    instruction: 'Find what the two cases share. Ignore the story (immigration, flights) and ignore what the state’s rule says. Look at one thing only: the federal law, and whether it is meant to be the only rule.',
    prompt: { kind: 'phrase', answer: 'Federal law gives a federal air-travel agency control of the country’s airspace, and says that its rules for flights are the only rules' },
    shared: [
      'In both cases a federal law covers the matter and is meant to be the only rule: Congress’s laws on who may live in the country, and the rules of a federal air-travel {t:agency} for flights. And in both cases a state then wrote a rule of its own on the same matter.',
      'The second case has a state park in it, which can make the rule sound like the state’s own business. It is not: the rule is about flights, and the federal law covers flights. The two stories share nothing else. So this holds whenever a federal law covers the same matter and is meant to be the only rule. That is what {o:preempted} names.'
    ] },

  { id: 'portrait-preempted', kind: 'portrait', outcome: 'preempted',
    link: 'What you point to is a federal law that is the only rule. This card fills in the rest of the picture, so that you can spot {o:preempted} in real life.',
    typical: [
      'A federal law is in the case, and it covers the same matter as the state’s or the city’s rule. A federal law on something else does not count.',
      'The federal law is meant to be the only rule. The case may say so in words, such as “no state may set a different one”, or it may show that the two rules clash, so that nobody could obey both.',
      'The matter is one the Constitution gives to Congress: the rules for becoming a citizen, who may live in the country, trade between the states, money, the mail, defending the country. If the matter is not one of these, a federal law has no standing over it.',
      'It can be a state or a city that made the rule. A federal law of this kind pushes aside a state’s rule and a city’s alike.',
      'The state’s rule need not be foolish. A state may write it for good reasons, as Tolland’s lawmakers did about noise. It simply gives way.'
    ],
    not: [
      'A federal law in the story is not enough. A federal law on a different matter changes nothing about the state’s rule.',
      'And a federal law that sets only a minimum does not push the state’s rule aside. The name applies only when the federal law is meant to be the only rule, or when the two cannot both be obeyed.'
    ],
    wild: ['“Washington already regulates this.”', '“The state law conflicts with federal law.”', '“Federal law overrides it.”', '“No state may set a different rule.”'],
    self: 'In your own life this is why the rules about immigration and about becoming a citizen are the same wherever you live in the country, and why a state cannot set its own. If a state or a city rule seems to say the opposite of a federal law that covers the matter, the federal one is the one that counts.',
    ask: '“Is there a federal law on the same matter, and is it meant to be the only rule?” If so, a rule from a state or a city gives way, whoever made it, and the name is {o:preempted}.' },

  { id: 'check-preempted', kind: 'check', after: 'preempted',
    case: 'u6-c-honey',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show that the federal law bars every state from adding its own label? Tap them.',
           answer: 'A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label' } },

  /* ---------- The fourth name: a federal law that leaves room ---------- */
  { id: 'meet-concurrent', kind: 'meet', outcome: 'concurrent',
    link: 'In the last case the federal law left no room for the state. A federal law does not always do that. Sometimes it says how much is the least that must be done, and invites the states to ask for more.',
    case: 'u6-minwage', mark: 'S2',
    strip: [
      'There is a federal law on the same matter as the state’s rule: a minimum wage for every employer in the country.',
      'The federal law sets a minimum, and says that a state may set a higher one.',
      'There is a state, Calder, whose legislature set a higher minimum wage.',
      'An employer who pays the higher figure is also paying the federal one.'
    ],
    explain: [
      'In this case there are again two rules on one matter, a federal one and a state one, and again the matter is the same for both: pay. But the two do not clash. The federal law sets a floor, the least an employer may pay, and it says so: a state may set a higher figure. Calder did.',
      'Test it by asking whether anyone can obey both rules. An employer in Calder who pays the Calder minimum is paying more than the federal minimum, so one payment obeys the state’s rule and the federal one together. Neither rule is in the other’s way, so neither has to give way. They stand side by side.',
      'The federal government and the states can both act on some matters. Both tax income. Both run courts. And many federal laws set a minimum, which is sometimes called a floor, and leave the states free to require more. The picture of a floor is a good one: the state’s rule can sit above it. A person who faces two rules like this should obey whichever one asks for more, because that satisfies both.',
      'How is this different from the last name? There the federal law was meant to be the only rule, and the state’s rule had to give way. Here the federal law is only a minimum, with space left for the states, and the state’s rule stands. In both cases a federal law covers the matter. What differs is how much space it leaves.'
    ],
    feature: { step: 'S2', option: 'floor' },
    name: 'The answer to this question is the one printed above, and the name for the case is {o:concurrent}. “Concurrent” means happening alongside one another: both governments act on the same matter, together. As with the last name, who made the rule changes nothing: a city’s rule can stand beside a federal law that leaves room, just as a state’s can.' },

  { id: 'again-concurrent', kind: 'again', outcome: 'concurrent',
    link: 'The minimum wage gave you what to point to: {needs:concurrent}. Here is a second case with a different story.',
    first: 'u6-minwage', second: 'u6-leave', step: 'S2',
    instruction: 'Find what the two cases share. Ignore the story (wages, leave after a birth). Look at one thing only: what the federal law says about the states.',
    prompt: { kind: 'phrase', answer: 'and says that a state may add to it' },
    shared: [
      'In both cases a federal law covers the matter and sets a floor, a minimum wage in one and twelve weeks of unpaid leave in the other, and in both it leaves room for the states. The state then goes beyond it: a higher wage, and paid leave on top. Anyone who follows the state’s rule is following the federal one as well.',
      'Wages and leave have nothing else in common. So this is not about work or about families. It holds wherever a federal law covers a matter but is only a minimum, and a state’s or a city’s rule can sit alongside it. That is what {o:concurrent} names.'
    ] },

  { id: 'portrait-concurrent', kind: 'portrait', outcome: 'concurrent',
    link: 'What you point to is a federal law that leaves room. This card fills in the rest of the picture, so that you can spot {o:concurrent} in real life.',
    typical: [
      'A federal law covers the same matter as the state’s or city’s rule, as it did for the last name. What differs is what the federal law says about the states.',
      'The federal law sets only a minimum, or says in some way that the states may act too. The words to look for are “at least”, “a minimum”, “a state may add”, “on top of the federal requirement”.',
      'The state’s rule goes beyond the federal law, and a person who obeys the state’s rule also obeys the federal one.',
      'Some matters belong to both governments from the start. Both tax income. Both run courts. In a case like that the federal government acts, the state acts, and neither stops the other.',
      'A person facing two rules like these should obey whichever asks for more, since that satisfies both.'
    ],
    not: [
      'Two rules on the same matter are not enough for this name. If the federal law says that it is the only rule, the state’s rule gives way, as in the last name.',
      'And a state rule that asked for less than the federal minimum would not stand beside it: a person who obeyed the state’s rule would be breaking the federal law, and the two rules would clash.'
    ],
    wild: ['“On top of the federal requirement, the state also…”', '“At least the federal minimum.”', '“Both federal and state tax…”', '“Some states add…”'],
    self: 'In your own life this is why the wage you must be paid, or the leave you can take, may depend on the state you work in: a federal law gives a minimum everywhere, and some states give more. It is also why income can be taxed by the federal government and by a state.',
    ask: '“Does a federal law cover this matter, and is it only a minimum, with space left for the states?” If so, a rule from a state or a city that goes beyond it sits alongside it, and the name is {o:concurrent}.' },

  { id: 'check-concurrent', kind: 'check', after: 'concurrent',
    case: 'u6-c-tax',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor'] } }
]);
