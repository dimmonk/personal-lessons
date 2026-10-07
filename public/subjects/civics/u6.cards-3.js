// Civics, Unit Six, part three (first half): the two names where a federal law covers the same matter as the rule:
// a federal law meant to be the only rule, and a federal law that leaves room for the state's rule.

FC.cards('civics', 'u6', [

  /* ---------- The third name: a federal law that is meant to be the only rule ---------- */
  { id: 'meet-preempted', kind: 'meet', outcome: 'preempted',
    link: 'So far nothing else covered the rule. Now put a federal law beside it.',
    case: 'u6-status-scheme', mark: 'S2',
    explain: [
      'Two governments made rules about the same thing. Congress wrote laws on who may live in the country and for how long, and meant them to be the only rules. Then Lorne wrote a scheme of its own.',
      'Which one counts? The Constitution calls federal law the supreme law of the land. When Congress has power over a matter and has used it, a state rule that gets in the way has to give way. Immigration is a federal power, so a state has no room to add rules of its own.',
      'This does not mean a federal law always beats a state rule. The state’s rule gives way only if Congress meant its law to be the only rule, or if the two rules clash so that nobody could obey both. If no federal law covers the matter, there is nothing for the state’s rule to give way to.',
      'What sinks the scheme is not that a state made it. It is the federal law on the same thing. A city’s rule would give way too.'
    ],
    spot: [
      { do: 'Find the state’s rule: Lorne’s scheme to check immigration status.', why: 'It is the rule that may have to give way.' },
      { do: 'Find a federal law on the same matter: Congress’s laws on who may live in the country.', why: 'With no federal law on the same matter, there is nothing for it to give way to.' },
      { do: 'Check that the federal law is meant to be the only rule: the story says so.', why: 'Look for “the only rule”, “no state may”, or two rules nobody could obey at once.' }
    ],
    feature: { step: 'S2', option: 'onlyrule' },
    name: 'This is {o:preempted}: the federal law pushed the state’s rule aside.' },

  { id: 'check-preempted', kind: 'check', after: 'preempted',
    case: 'u6-c-honey',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show that the federal law is the only rule on honey labels? Tap them.',
           answer: 'A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label' } },

  /* ---------- The fourth name: a federal law that leaves room ---------- */
  { id: 'meet-concurrent', kind: 'meet', outcome: 'concurrent',
    link: 'A federal law does not always shut the states out. Sometimes it sets the least that must be done and lets the states ask for more.',
    case: 'u6-minwage', mark: 'S2',
    explain: [
      'Again a federal law and a state rule cover the same thing, and again it is pay. But this time they do not clash. The federal law sets a floor, the least an employer may pay, and says a state may set a higher one. Calder did.',
      'Test it by asking whether one employer can obey both. An employer in Calder who pays the Calder minimum is paying more than the federal minimum, so one payment obeys both rules. Neither is in the other’s way, so neither gives way. If you ever face two rules like this, follow the one that asks for more.',
      'The only difference from the last story is how much room the federal law leaves. There it was the only rule. Here it is just a minimum.'
    ],
    spot: [
      { do: 'Find what the federal law says about the states: it sets a minimum wage and says a state may set a higher one.', why: 'Look for “at least”, “a minimum” or “a state may require more”.' },
      { do: 'Find the state’s rule: Calder’s higher minimum wage.', why: 'It asks for more, not for something different.' },
      { do: 'Check that one payment obeys both: the Calder wage is also above the federal one.', why: 'If you can obey both at once, neither has to give way.' }
    ],
    feature: { step: 'S2', option: 'floor' },
    name: 'This is {o:concurrent}. A city’s rule can stand beside a federal law that leaves room, just as a state’s does.' },

  { id: 'check-concurrent', kind: 'check', after: 'concurrent',
    case: 'u6-c-tax',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor'] } }
]);
