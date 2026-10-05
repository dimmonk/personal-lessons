// Political Ideologies, Unit One, part one: the opening card, the one word the unit leans on, and the first answer
// (working people, against those who own the businesses).
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
    canDo: 'After this unit you can read a short text, such as a few lines of a speech, a leaflet, a post, a notice or the start of an opinion piece, and say which of five answers it gets to the key’s first question. You will be able to point to the words that tell you, and to say why it is not one of the other four. The text can be about wages, a border, a church, an exam desk or a bus lane. It can be something a friend sends you or something you come across yourself.',
    everyday: [
      'You already do a rough version of this. Someone shares a post and a friend says, "That’s just socialist." A speech comes on the radio and an uncle says, "That’s fascist." A neighbour defends the church bells and someone mutters, "Typical reactionary." Each of those is a name reached in one jump, and a name thrown across a room is often not a description of anything.',
      'A name has to be earned from what a text says. Before it, there is an earlier question that a person can answer by pointing at words: who or what is this text for? Is it for working people against the people who own the businesses? For a nation, or its ordinary people? For the old ways of faith, home and custom? For what every person is owed? Or is it for nobody in particular, because it is a notice, a timetable or an order about who is in charge?',
      'If you skip that question you are wrong before you have chosen a word. You have read a notice about a bus lane as a political movement, or a text about a country as a text about wages. So before any label there is this one question. This unit teaches it.'
    ],
    add: [
      'Two words are used all the way through, so here they are once. A case is a short text of the kind people really read or hear: a few lines from a speech, a leaflet, a post, a notice or an opinion piece. The key is a short list of questions that you put to a case, always in the same order. Each answer narrows down what the text can be, until a name is left.',
      'This unit teaches the first question of the key and nothing after it. That question has five answers, and in this unit the answer is also the name you give. Four of the five answers lead on to further questions, taught in the units that follow, and those questions give a finer name, such as the ones you hear in the news. The fifth answer leads nowhere. When a text speaks for no side, the key has nothing more to ask, and that is a result in its own right.',
      'Every text in this unit is invented. None is a quotation from a real person or party, and none says what any real person believes. Real people and parties say different things in different places, so the key reads one short text at a time and gives no verdict on whoever wrote it.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The word the whole key leans on ---------- */
  { id: 'term-ideology', kind: 'term', term: 'ideology',
    h: 'Answers about who a country is for',
    link: 'Before the first of the five answers, there is one word that this unit and the whole key lean on. It is easier to see in a case first.',
    case: 'i-term-bus',
    plain: [
      'Dolores and Emeka disagree, but look at what each of them has done. Each has said who the country is for: the people who keep it running, in her words, and what was handed down by the people before us, in his. And each has said what follows for how it should be run: the government should answer to those who do the work, or change should be slow. Two things have gone together: an answer to who it is for, and a view of how it should be run.',
      'That is more than one opinion about one matter, such as where to put a bus stop. It is a few beliefs that hang together, so that the first helps to explain the rest.'
    ],
    after: [
      'Two things about the word. The first is that it is not an insult and not a compliment. Calling a set of beliefs an {t:ideology} says nothing about whether it is right. The second is that it is a word for the beliefs a text shows, and not for the person who wrote it. One short text shows a few lines of someone’s beliefs, and the key reads the lines in front of it.',
      'This is why the key starts with the question it does. Each of the first four answers to it is a different place to start from, and the fifth is a text that starts from none of them.'
    ] },

  /* ---------- The first answer: working people, against those who own the businesses ---------- */
  { id: 'meet-class', kind: 'meet', family: 'class',          // heading is the family's plain words, from the key
    link: 'Start with the first of the five answers: a text that divides people into two groups by what they do for money, and stands with one of them.',
    case: 'i-whouse', mark: 'D1',
    strip: [
      'There are two groups of people in the text. One is the drivers and loaders who keep the depot running and are paid to do it. The other is the people who own the depot and take its profit.',
      'The text says the two groups want different things. Money for a raise is money that stays out of the owners’ hands.',
      'The text does not stay neutral. It says outright that it is on the side of the ones who work.',
      'Nothing is said about a country or a people, about anything handed down from the past, or about something every person is owed. The whole case is the split between the two groups, and the side taken.'
    ],
    explain: [
      'What this text is made of is a split, and a side. The split divides people by what they do for money. Some are paid wages to work in a depot, a shop, a farm or a bank. Others own that depot, shop, farm or bank and keep what it earns. The text says that those two groups are not on the same side, and it chooses one of them.',
      'You do not need the word "class" to see this, and the text does not use it. The text says "the drivers and loaders" and "the people who own this depot". Those are the two groups, and the words you point to are the ones that put them on opposite sides and take the first.',
      'The idea behind this kind of text is that what a person earns, and whether they own the place they work in, shape what they want from the government and from other people. A text that begins here is about who works, who owns and who gains. It does not have to be angry. A calm leaflet and a furious one both put working people against owners.',
      'Notice what the answer does not depend on. It does not depend on whether you agree. It does not depend on whether the owners are a large company or a single household. It does not even depend on the text asking for anything yet. It depends on the text sorting people into those two groups and standing with the first. What the text wants done about it is a different question, and this unit does not ask it.'
    ],
    feature: { step: 'D1', option: 'class' },
    name: 'In this unit the key’s answer is also the name of the kind of text: {a:D1.class}. "Working people" means the people who work in the farms, factories, shops and banks for pay. "Those who own the businesses" means the people who own them and keep what they earn. The answer needs both groups, because one group alone is not a split.' },

  { id: 'again-class', kind: 'again', family: 'class',
    link: 'The depot leaflet gave you what to point to from one case: {needs:class}. Here is a second case with a different story. This time the work is care, not freight, and the words are spoken aloud at a meeting.',
    first: 'i-whouse', second: 'i-carehome', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a freezer depot, care homes). Look at one thing only: which words put the people who work and the people who own on opposite sides, and take the side of the first?',
    prompt: { kind: 'phrase', answer: 'Those who do the caring and those who own the homes do not share an interest, and we are speaking for the first' },
    shared: [
      'Both texts divide the same two kinds of people. The leaflet says the drivers and loaders have one interest and the depot’s owners another. The care assistants say the same of those who do the caring and those who own the homes. Neither text says the owners are bad people. Each says the two groups want different things, and each takes the side of the people who do the work.',
      'The two stories share nothing else. One is a depot and a raise, and the other is residents and fees. So this holds wherever a text sorts people into those who work for pay and those who own, and stands with the first. That is what {a:D1.class} names.'
    ] },

  { id: 'lens-sides', kind: 'lens',
    h: 'The story does not decide the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every text in this unit has two layers. The top layer is the story: a depot, a care home, a bridge, a church, a clinic. The layer underneath is who or what the text puts first. So far you have met one answer, and there are four more to come.',
      'The answers belong to the layer underneath. A text about a factory can get any of the five, and so can a text about a church. The story tells you nothing about the answer. One closing factory can be told as workers against owners, as a nation hollowed out, as old customs lost, as something every person is owed, or as a notice with a date on it.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same event and differ only underneath. When that happens, the shared event is there to show you that it decides nothing.',
      'Two other things change on purpose: how angry a text sounds, and whether you are likely to agree with it. An angry text and a calm one can get the same answer, and a text you dislike can get the same answer as one you like. The answer is not a verdict on anyone. It only says what the text puts first.'
    ],
    fixed: ['who or what the text puts first, which is what the key asks about: {q:D1}'],
    varies: ['the topic', 'the people', 'how angry it sounds', 'whether you agree with it', 'whether it takes any side at all'] },

  { id: 'portrait-class', kind: 'portrait', family: 'class',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.class} in real life, where nobody marks the words for you.',
    typical: [
      'Two groups are named, or clearly meant. One is people who work for pay: drivers, cleaners, nurses, tellers, builders. The other is people who own the places they work in, or are rich from owning them: owners, shareholders, landlords, the company, the firm.',
      'The text says the two groups want different things, and that what one gains the other often loses.',
      'It takes a side, and the side is almost always that of the people who work. A text that mentions both groups and stands with neither is not this answer.',
      'It often says how the workers are treated: pay that has not risen, a profit taken, a closing, a cut. That is evidence for the split, and the split itself is what you point to.',
      'It can be calm or angry. It can be a long manifesto or two sentences on a leaflet.'
    ],
    not: [
      'Mentioning money, wages or a boss does not make a text this answer. A notice that says when wages are paid mentions wages and takes no side.',
      'Nor does a word such as "workers" or "national" decide it. What you point to is the split between the two groups and the side the text takes.'
    ],
    wild: ['"The bosses get the bonus and we get the bill."', '"There are those who work and those who own."', '"Whose side are you on, the staff or the shareholders?"', '"They profit while we pay."', '"Workers of this town, stand together."'],
    self: 'In your own life it is the talk at a workplace when pay or hours change, a union notice on a staff-room wall, the group chat of people in one trade, or the way a news story about a strike is told.',
    ask: '"Who are the two groups here, and which one does the text stand with?" If you can name both groups and the side in one sentence, this is the answer to look at.' },

  { id: 'check-class', kind: 'check', after: 'class',
    case: 'i-bankstaff',
    ask: { type: 'phrase', step: 'D1', say: 'Which words in this case put the people who work and the people who own on opposite sides, and take a side? Tap them.',
           answer: 'we will stand together against the owners until we get it' } }
]);
