// Civics, Unit Six, part three (first half): the two names where a federal law covers the same matter as the rule:
// a federal law meant to be the only rule, and a federal law that leaves room for the state's rule.

FC.cards('civics', 'u6', [

  /* ---------- The third name: a federal law that is meant to be the only rule ---------- */
  { id: 'meet-preempted', kind: 'meet', outcome: 'preempted',
    link: 'So far nothing else covered the rule. Now put a federal law beside it.',
    case: 'u6-status-scheme', mark: 'S2',
    strip: [
      'There is a state, Lorne, and its legislature, which passed a scheme of its own.',
      'There is also a federal law: Congress has written detailed laws on who may live in the country, meant to be the only rules on the matter.',
      'The state’s scheme is about the same matter: who may stay in the country.'
    ],
    explain: [
      'Two governments have made rules about the same thing. Congress has written laws on who may live in the country and for how long, meant to be the only rules. Then one state writes a scheme of its own.',
      'Which one counts? The Constitution calls federal law the supreme law of the land: where the federal government has power over a matter and has already used it, a state rule that gets in the way has to give way. Immigration and the rules for becoming a citizen are on the list of federal powers, so a state has no room to write rules of its own on them.',
      'This does not mean that a federal law always beats a state rule. Congress must have meant its law to be the only rule on the matter, or the two rules must clash so that nobody could obey both. Only then does the state’s rule give way. Where no federal law covers the matter, there is nothing for a state’s rule to give way to.',
      'What makes the scheme lose is not that a state made it. It is the federal law on the same matter. For this name, who made the rule changes nothing: a city’s rule would give way too.'
    ],
    feature: { step: 'S2', option: 'onlyrule' },
    name: 'The name for this case is {o:preempted}: a federal rule has pushed a state’s or a city’s rule aside.' },

  { id: 'check-preempted', kind: 'check', after: 'preempted',
    case: 'u6-c-honey',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show that the federal law bars every state from adding its own label? Tap them.',
           answer: 'A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label' } },

  /* ---------- The fourth name: a federal law that leaves room ---------- */
  { id: 'meet-concurrent', kind: 'meet', outcome: 'concurrent',
    link: 'A federal law does not always shut the states out. Sometimes it sets the least that must be done and invites the states to ask for more.',
    case: 'u6-minwage', mark: 'S2',
    strip: [
      'There is a federal law on the same matter as the state’s rule: a minimum wage for every employer in the country. It says that a state may set a higher one.',
      'There is a state, Calder, whose legislature set a higher minimum wage.',
      'An employer who pays the higher figure is also paying the federal one.'
    ],
    explain: [
      'Again two rules cover one matter, and again the matter is pay. But the two do not clash. The federal law sets a floor, the least an employer may pay, and says that a state may set a higher figure. Calder did.',
      'Test it by asking whether anyone can obey both. An employer in Calder who pays the Calder minimum is paying more than the federal minimum, so one payment obeys both rules. Neither is in the other’s way, so neither has to give way. They stand side by side, and a person who faces two rules like this should obey the one that asks for more.',
      'In both names a federal law covers the matter. What differs is how much space it leaves: here it is only a minimum, with room for the states.'
    ],
    feature: { step: 'S2', option: 'floor' },
    name: 'The name for this case is {o:concurrent}. “Concurrent” means happening alongside one another: both governments act on the same matter. As with the last name, who made the rule changes nothing: a city’s rule can stand beside a federal law that leaves room, just as a state’s can.' },

  { id: 'check-concurrent', kind: 'check', after: 'concurrent',
    case: 'u6-c-tax',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor'] } }
]);
