// Political Ideologies, Unit One, part one: the opening card, the one word the unit leans on, and the first answer
// (workers against owners).
// A quick lesson (lesson standard section 19): one meet card and one check for each answer, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action
// and one short sentence of why), then the name (lesson standard section 20).

FC.cards('ideology', 'u1', [

  { id: 'orient-sides', kind: 'orient',
    h: 'Before you call a text “socialist” or “fascist”, check whose side it is on',
    canDo: 'Before you call a post “socialist”, a speech “fascist” or a neighbor “reactionary”, check whose side the text is actually on. It is always one of the five answers below, and most name-calling skips this step.',
    everyday: [
      'Someone shares a post and a friend says, “That’s just socialist.” A speech comes on the radio and an uncle says, “That’s fascist.” A neighbor defends the church bells and someone mutters, “Typical reactionary.”',
      'Each name skips a simple question: who is the text speaking for? Working people against the people who own the businesses? One whole people, with its country first? Old customs handed down? What every person is owed? Or nobody in particular, because it is only a notice? Skip it and every name you pick after it is wrong too. Four of the five answers lead on to finer names in later units.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The word the whole key leans on ---------- */
  { id: 'term-ideology', kind: 'term', term: 'ideology',
    h: 'A word this subject leans on',
    link: 'One word comes up in every unit. Start with two neighbors at a bus stop.',
    case: 'i-term-bus',
    plain: [
      'Each neighbor answered two questions in a few lines: who is the country for, and how should it be run? That is more than an opinion about one thing, such as where to put a bus stop. It is a few beliefs that fit together, so the first helps explain the rest.'
    ],
    after: [
      'Calling a set of beliefs an {t:ideology} does not say whether they are right. It describes the beliefs a text shows, not the person who wrote it, and one short text shows only a few lines of them.'
    ] },

  /* ---------- The first answer: workers against owners ---------- */
  { id: 'meet-class', kind: 'meet', family: 'class',          // heading is the name, from the key
    link: 'First: a text that picks the workers’ side against the owners.',
    case: 'i-whouse', mark: 'D1',
    explain: [
      'The leaflet splits the people at the depot in two: the drivers and loaders who are paid to work there, and the owners who take its profit. It says they want different things, and it says which side it is on: the workers.',
      'A mention of wages or a boss is not enough: a notice about when wages are paid takes no side. What counts is two groups set against each other, and the text standing with one. It does not matter whether you agree, or whether the text sounds calm or angry.'
    ],
    spot: [
      { do: 'Find the two groups: the drivers and loaders, and the owners.', why: 'You need both, because one group alone is not a split.' },
      { do: 'Check they are set against each other: “will not want the same thing”.', why: 'Naming wages or a boss is not the same as setting them against each other.' },
      { do: 'Find the side the text takes: “on the side of the ones who work”.', why: 'A text that only reports the split takes no side.' }
    ],
    feature: { step: 'D1', option: 'class' },
    name: 'This is {a:D1.class}. Take the owners out of the leaflet and it has nothing left to say.' },

  { id: 'check-class', kind: 'check', after: 'class',
    case: 'i-bankstaff',
    ask: { type: 'phrase', step: 'D1', say: 'Which words set the people who work against the people who own, and take the workers’ side? Tap them.',
           answer: 'we will stand together against the owners until we get it' } }
]);
