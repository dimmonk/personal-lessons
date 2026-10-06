// Civics, Unit Six, part one: the opening card and the first name (a state making a rule of its own).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.
// "federal" is used by the key and is not a declared term: the opening card says what it means, as Unit One did.

FC.cards('civics', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'A rule from a state, a city or a county: whose is it, and what else covers it?',
    canDo: 'After this unit you can read a short account of a rule made by a state, a city, a town or a county, and say which of five things it comes to: {plain:police}; {plain:localgov}; {plain:preempted}; {plain:concurrent}; or {plain:protected}. You can point to the words that tell you.',
    everyday: [
      'You already hear this kind of story every week. “You need a permit from the town.” “It varies from state to state.” “Washington already regulates that.” “On top of the federal minimum, the state requires more.” “They can’t make that illegal.” Each is about a rule made close to home, and each can be the sound of a different one of five things.',
      'You live under several governments at once: the government of the whole country, which this course calls federal, your state, and your city, town or county. Each makes rules, sometimes about the same thing. Whether a rule stands depends on who made it and on what else covers the same matter. Every case in this unit already has the answer {a:D1.states}; the unit teaches the two questions that come next.'
    ],
    add: [
      'Two words are used all the way through. A rule is anything that a state, a city, a town or a county decides and that people must follow: a law its lawmakers pass, an order from its governor or mayor, a fee its council sets. And federal means belonging to the government of the whole country, as against the government of one state or city: a federal law applies in every state.'
    ],
    map: { branch: 'states' } },

  /* ---------- The first name: a state's own rule on a matter nothing else covers ---------- */
  { id: 'meet-police', kind: 'meet', outcome: 'police',
    link: 'Begin with the simplest story: a state makes a rule, and nothing else gets in the way.',
    case: 'u6-deposit', mark: 'S1',
    strip: [
      'There is a state, Brenmore, and its legislature: the group of people who make the laws for that one state.',
      'The legislature itself passed the law. No city, town or county made it.',
      'The matter is renting a home: how soon a landlord must hand a tenant’s deposit back.',
      'The story names no law of the whole country about deposits, and the law takes away no right the Constitution protects.'
    ],
    explain: [
      'Why does a state get to decide this? The Constitution gives the federal government a list of powers: taxes, borrowing money, trade between the states and with other countries, the rules for becoming a citizen, making money, the mail, defending the country, the federal courts. Renting a home is not on the list. Anything the list does not give is kept by the states, and the Tenth Amendment, a later addition to the Constitution, says so.',
      'That is why so much of daily life is decided state by state: deposits, driver’s licenses, who may marry, what public schools teach, most crimes, which jobs need a license. These rules differ from state to state, and can change when a person moves.',
      'Two things made this case simple. The first is who made the rule: the state itself, through its legislature. Its governor, or one of its own offices such as a licensing board, counts as the state itself too. The second is that nothing else covers the matter: no federal law about deposits, and no right taken away. When both are true, the state decides.'
    ],
    feature: { step: 'S1', option: 'own' },
    name: 'The name for this case is {o:police}. “Reserved” means kept back: the matter was kept back for the states. In its other name, “police” does not mean officers. It means the state’s wide power over health, safety and welfare.' },

  { id: 'check-police', kind: 'check', after: 'police',
    case: 'u6-c-license',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show who made the rule? Tap them.',
           answer: 'The Tarn legislature passed a law' } }
]);
