// Political Ideologies, Unit One, part one: the opening card, the one word the unit leans on, and the first answer
// (working people, against those who own the businesses).
// A quick lesson (lesson standard section 19): one meet card and one check for each answer, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.

FC.cards('ideology', 'u1', [

  { id: 'orient-sides', kind: 'orient',
    h: 'Before any name: whose side is the text on?',
    canDo: 'After this unit you can read a short text, such as a few lines of a speech, a leaflet, a post or a notice, and say which of five answers it gives to one question: whose side is it on? You will be able to point to the words that tell you.',
    everyday: [
      'You already do a rough version of this. Someone shares a post and a friend says, "That’s just socialist." A speech comes on the radio and an uncle says, "That’s fascist." A neighbor defends the church bells and someone mutters, "Typical reactionary." Each is a name reached in one jump, and a name thrown across a room is often not a description of anything.',
      'A name has to be earned from what a text says. Before it comes an earlier question that you can answer by pointing at words: who or what is this text for? Working people against the people who own the businesses? A nation, or its ordinary people? The old ways of faith, home and custom? What every person is owed? Or nobody in particular, because it is a notice, a schedule or an order? Skip it and you are wrong before you have chosen a word. Each short text you read here is called a case. Four of the five answers lead on to finer names in later units; the fifth leads nowhere.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The word the whole key leans on ---------- */
  { id: 'term-ideology', kind: 'term', term: 'ideology',
    h: 'A word this subject leans on',
    link: 'Before the first of the five answers, there is one word that this whole subject leans on. It is easier to see in a case first.',
    case: 'i-term-bus',
    plain: [
      'That is more than one opinion about one matter, such as where to put a bus stop. It is a few beliefs that hang together, so that the first helps to explain the rest.'
    ],
    after: [
      'The word is not an insult and not a compliment: calling a set of beliefs an {t:ideology} says nothing about whether it is right. And it names the beliefs a text shows, not the person who wrote it. One short text shows only a few lines of someone’s beliefs.'
    ] },

  /* ---------- The first answer: working people, against those who own the businesses ---------- */
  { id: 'meet-class', kind: 'meet', family: 'class',          // heading is the family's plain words, from the key
    link: 'Start with a text that divides people into two groups by what they do for money, and stands with one of them.',
    case: 'i-whouse', mark: 'D1',
    strip: [
      'Two groups: the drivers and loaders who keep the depot running for pay, and the people who own the depot and take its profit.',
      'The text says the two groups want different things, and says outright which one it is on: the ones who work.',
      'Nothing about a country or a people, anything handed down from the past, or what every person is owed.'
    ],
    explain: [
      'The text splits people by what they do for money. Some are paid to work in a depot, shop, farm or bank. Others own it and keep what it earns. The text says those two groups are not on the same side, and it chooses one. You do not need the word "class": the words you point to are the ones that put the two groups on opposite sides and take the first.',
      'It does not depend on whether you agree, or on whether the text is calm or angry. Mentioning wages or a boss is not enough: a notice of when wages are paid takes no side.'
    ],
    feature: { step: 'D1', option: 'class' },
    name: 'The answer is {a:D1.class}. "Working people" means the people who work in the farms, factories, shops and banks for pay. "Those who own the businesses" means the people who own them and keep what they earn. The answer needs both groups, because one group alone is not a split.' },

  { id: 'check-class', kind: 'check', after: 'class',
    case: 'i-bankstaff',
    ask: { type: 'phrase', step: 'D1', say: 'Which words in this case put the people who work and the people who own on opposite sides, and take a side? Tap them.',
           answer: 'we will stand together against the owners until we get it' } }
]);
