// Civics, Unit Six, part one: the opening card and the first name (a state making a rule of its own).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, the key's question and answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('civics', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'Whose rule is it, and what else covers it?',
    canDo: 'When someone says “the town can’t do that”, “Washington already covers that” or “every state sets its own”, check two things before you believe it: who made the rule, and whether a federal law or a right in the Constitution also covers it.',
    everyday: [
      'You hear these every week. “You need a permit from the town.” “It varies from state to state.” “The federal government already regulates that.” “The state can require more than the federal minimum.” “They can’t make that illegal.” Each one is about a rule made close to home, and each can end up somewhere different.',
      'You live under three governments at once: the federal government, your state, and your city, town or county. Each makes rules, sometimes about the same thing. Whether a rule stands depends on who made it and on what else covers the same thing. Every story in this unit ends with a decision by a state, a city, a town or a county, and the unit teaches the two questions that come next.'
    ],
    add: [
      'Two words come up all the way through. A rule is anything a state, a city, a town or a county decides that people must follow: a law its lawmakers pass, an order from its governor or mayor, a fee its council sets. Federal means belonging to the government of the whole country, not of one state or city: a federal law applies in every state.'
    ],
    map: { branch: 'states' } },

  /* ---------- The first name: a state's own rule on a matter nothing else covers ---------- */
  { id: 'meet-police', kind: 'meet', outcome: 'police',
    link: 'Start with the simplest story: a state makes a rule, and nothing else gets in the way.',
    case: 'u6-deposit', mark: 'S1',
    explain: [
      'Brenmore’s legislature, the people who make the laws for that one state, decided how fast a landlord must give a deposit back. No city made the rule, no federal law covers deposits, and the rule takes away no right. So the state decides.',
      'Why can a state decide this? The Constitution gives the federal government a short list of jobs: taxes, trade between the states and with other countries, the mail, the army, making money, the rules for becoming a citizen, the federal courts. Renting a home is not on it. Whatever is not on the list stays with the states, and the Tenth Amendment says so.',
      'That is why so much of daily life changes when you cross a state line: deposits, driver’s licenses, marriage, public schools, most crimes, which jobs need a license.'
    ],
    spot: [
      { do: 'Find who made the rule: the Brenmore legislature.', why: 'A state’s legislature, its governor and its own offices all count as the state itself.' },
      { do: 'Find what the rule is about: how soon a landlord must return a deposit.', why: 'Renting a home is not on the federal list, so it stays with the states.' },
      { do: 'Check that nothing else covers it: no federal law on deposits, and no right taken away.', why: 'If something did, the state would not decide alone.' }
    ],
    feature: { step: 'S1', option: 'own' },
    name: 'This is {o:police}: the state decided because nothing else covers the matter. If you hear “the police power”, it does not mean officers. It means the state’s wide power over health and safety.' },

  { id: 'check-police', kind: 'check', after: 'police',
    case: 'u6-c-license',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show who made the rule? Tap them.',
           answer: 'The Tarn legislature passed a law' } }
]);
