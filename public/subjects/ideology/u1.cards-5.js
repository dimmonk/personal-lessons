// Political Ideologies, Unit One, parts five and six: the fifth answer (no side named), the wrong idea a beginner is most
// likely to bring to it, its four look-alike pairs with the answers already met, and the exception that is a ruler's orders.
// The fifth answer is the key's answer for a text with nothing in it to name (lesson standard K2.9), and it is taught as an
// answer like any other.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fifth answer: no side named ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Four answers so far, and in each one the text had a side, or a thing it put first. Many texts have neither, and the key has an answer for them.',
    case: 'i-none-meet', mark: 'D1',
    strip: [
      'The text is a notice on the doors of a building. It says the lift will be out of service between two dates, and why.',
      'It says what residents should do: ring the caretaker if they need help with the stairs.',
      'It sorts nobody into groups. There are no workers set against owners, no people or country, no old ways held up, and nothing said to be owed to every person.',
      'Nothing in it takes a side. It only says what will happen and what to do about it.'
    ],
    explain: [
      'Set this text against the four answers you have met. Nobody is on one side of a split with someone on the other. No people is put first. No old ways are held up. Nothing is said to be owed to every person. The text tells residents what is happening to the lift.',
      'What is left is a text about one practical matter. It says what will happen, when, and what to do. A text like this is very common: a timetable, a sign, a letter from the council about bins. It is not a failure to find an answer. It is an answer.',
      'A text of this answer comes in two shapes. This notice is the first: it says what will happen, when, and what to do. In the second shape the text says who holds power and how they keep it: who chairs a council and for how long, or who may give orders and who must obey. A text like that can be dry or frightening, but it still names no side, because saying who decides is not the same as saying whom the text speaks for.',
      'Why does the key have this answer at all? Because a key with only four answers would push a notice about a lift into one of them. A reader who had to choose would find a side in the text that is not there. A fifth answer lets you look, find nothing to name, and say so.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: [
      'In this unit the key’s answer is also the name of the kind of text: {a:D1.none}. It means that the text speaks for no one: it is about one practical matter, or about who holds power and how. "Side" means one of the groups, peoples or things the other four answers put first.',
      'After this answer the key asks nothing more. There is no finer name to give, and that is a result in its own right: you looked, and there was nothing to name.'
    ] },

  { id: 'again-none', kind: 'again', family: 'none',
    link: 'The lift notice gave you what to point to from one case: {needs:none}. Here is a second case, in another setting and a second shape: a text that says who is in charge.',
    first: 'i-none-meet', second: 'i-none-again', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a lift, a town charter). Look at one thing only: which words say what is to happen, or who is in charge, and nothing else?',
    prompt: { kind: 'phrase', answer: 'The chair of the council is chosen by the full council each May. The chair may serve two terms and signs any contract above £50,000.' },
    shared: [
      'Both texts say what happens, or who is in charge, and stop there. The notice says when the lift is out and who to ring. The charter says how the council chair is chosen, for how long, and what the chair signs. Neither sorts people into groups. Neither says whom it speaks for, or what anyone is owed.',
      'One text is about a lift and the other about a council, and one is a practical matter while the other is about who holds power. Neither difference matters. What the two share is that they name no side. That is what {a:D1.none} names.'
    ] },

  { id: 'portrait-none', kind: 'portrait', family: 'none',
    link: 'You now know what to point to for {a:D1.none}. Because this answer is partly made of what is not there, the rest of the picture matters more than usual.',
    typical: [
      'It is full of specifics: dates, places, amounts, names of offices, forms and deadlines. These say what is to be done, or who is in charge.',
      'It tells the reader what to do: ring this number, book ahead, put the bins out by seven, declare cash at the red desk.',
      'It can be about who holds power and how they keep it: how a chair is chosen, who signs, how long they stay, who may not speak. Some of these texts are dry and some are frightening. A text can describe a ruler’s orders and still name no side.',
      'Nobody is on the far side of a split, no people is put first, no old way is held up, and nobody is said to be owed anything.'
    ],
    not: [
      'This answer does not say that the text is harmless, or that nothing is wrong. A ruler’s orders can be cruel and still get this answer, because the question is whom or what the text puts first, and orders that only say who decides put no one first.',
      'It does not say that the writer has no opinion either. A councillor can call a bus lane “communism on wheels”, and the plan is still a plan: those words say what the councillor thinks, and the plan says what it says. What you point to is what the text itself says: one practical matter, or who is in charge.'
    ],
    wild: ['"The office will be closed on Monday."', '"Doors open at nine; bring a form of identification."', '"The chair serves two terms."', '"By order of the Governor."', '"The council votes on Tuesday."'],
    self: 'In your own life it is most of what you read in a day: a bus timetable, a letter from the council, a sign on a door, a message about when a meeting is. It is also the way a plain proposal can be given a political name by someone who dislikes it.',
    ask: '"Does the text say anything beyond what is to happen, or who decides? Is there a group it stands with, a people it puts first, an old way held up, or something owed to every person?" If there is none of those, this is the answer to look at.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'i-none-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'rights', 'none'] } },

  /* ---------- A wrong idea: a plain proposal with a political name ---------- */
  { id: 'refute-insult', kind: 'refute', about: 'none',
    h: 'A wrong idea: "he called it communism, so that is what it is"',
    link: 'The lift notice and the charter are plain. People often meet this answer in another form: a plain proposal that someone has given a big political name.',
    idea: '"The councillor called the new bus lane communism on wheels. A plan that gets a name like that must be a communist plan."',
    verdict: 'This is wrong.',
    right: [
      'A name thrown at a plan is the thrower’s opinion of the plan. It is not a description of what the plan says. This plan paints a bus lane on a road, for a price, starting in a month. It sorts no one into workers and owners, speaks for no people, holds up no old ways, and says nothing about what every person is owed.',
      'The names thrown in an argument are names for an {t:ideology}: {means:ideology}. A bus lane is a decision about a road. It would take a text that says something about who the country is for before such a name could fit it. A person who says “communism” about a bus lane is telling you how they feel about it.',
      'Describing what a text says and attacking it are different jobs, and the key is only for the first. The first question gives this plan {a:D1.none}, and any finer name has to be earned from the text’s own words, which is the work the rest of the key does.'
    ],
    testedBy: ['i-claim-insult'] },

  /* ---------- The four look-alike pairs with the fifth answer ---------- */
  { id: 'look-class-none', kind: 'lookalike', ledger: 'class~none',
    link: 'Now the pairs that involve the fifth answer. The first and the fifth are easy to mix up, because both can be about work, a company and a change that affects the people who work for it. This time the story is a ferry.',
    cases: ['i-fer-none', 'i-fer-class'],
    instruction: 'Both cases are about the cut to the Calder ferry. Compare one thing: does the text take a side, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.class', answer: 'i-fer-class' },
    difference: [
      'In Case A the ferry is cut to one sailing a day and the text gives the timetable: when the boat leaves, when it returns, who needs to book. It takes no side. The key’s answer is {a:D1.none}.',
      'In Case B the same cut is told as a quarrel between the ferry company’s owners and the crews who work the boats, and the text stands with the crews. The key’s answer is {a:D1.class}.',
      'The facts are the same, one sailing a day, and the matter is the same, work on a boat. What differs is whether the text sets two groups against each other and stands with one.'
    ] },

  { id: 'look-nation-none', kind: 'lookalike', ledger: 'nation~none',
    link: 'The second and fifth answers are easy to mix up when a text is about a country, a border or a ruler. Here the same ferry cut is told by each.',
    cases: ['i-fer-nation', 'i-fer-none'],
    instruction: 'Both cases are about the cut to the Calder ferry. Compare one thing: does the text speak for one people and put it first, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.nation', answer: 'i-fer-nation' },
    difference: [
      'In Case A the cut is told as an island cut off from the rest of its own country. The text says the islanders are as much a part of our nation as anyone, and that a nation that leaves its own people behind has stopped being one people. It puts the people first. The key’s answer is {a:D1.nation}.',
      'In Case B the text gives the timetable and says who needs to book. It names no people and no country. The key’s answer is {a:D1.none}.',
      'Both texts are about the same ferry. One speaks for a people, and the other says only what will happen.'
    ] },

  { id: 'look-tradition-none', kind: 'lookalike', ledger: 'tradition~none',
    link: 'The third and fifth answers are easy to mix up when a text is about a church, a custom or a parish matter. Here the same ferry cut is told by each.',
    cases: ['i-fer-none', 'i-fer-tradition'],
    instruction: 'Both cases are about the cut to the Calder ferry. Compare one thing: does the text hold up old ways as what should guide, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-fer-tradition' },
    difference: [
      'In Case A the text gives the timetable. It names no custom, no church and nothing handed down. The key’s answer is {a:D1.none}.',
      'In Case B the same cut is told as the loss of the Sunday boat that the island has used to reach the mainland church for two hundred years. The text says the Sunday crossing, the church and the old island customs should guide how the ferry is run. The key’s answer is {a:D1.tradition}.',
      'A church and a Sunday appear in Case B, but a text could mention a church and a Sunday and hold nothing up, as a notice of service times would. What matters is whether the old ways are held up as what should guide.'
    ] },

  { id: 'look-rights-none', kind: 'lookalike', ledger: 'rights~none',
    link: 'The fourth and fifth answers are the last pair. Both can be about forms, appeals and fair process, and a text about a service can sound like a text about what people are owed.',
    cases: ['i-fer-rights', 'i-fer-none'],
    instruction: 'Both cases are about the cut to the Calder ferry. Compare one thing: does the text say that every person is owed something, or only say what will happen?',
    prompt: { kind: 'which', option: 'D1.rights', answer: 'i-fer-rights' },
    difference: [
      'In Case A the text says that every islander is owed a way to a hospital and a school, whatever their age, income or health, and that fair treatment for every person means a crossing they can rely on. It puts what is owed first. The key’s answer is {a:D1.rights}.',
      'In Case B the text gives the timetable. It says who needs to book and by when. Nothing is said to be owed to anyone. The key’s answer is {a:D1.none}.',
      'A ferry is a service, and a service is not a right. A text about a service is the fourth answer only when it says that every person is owed it.'
    ] },

  /* ---------- Exception: a ruler's orders ---------- */
  { id: 'exc-ruler', kind: 'exception', ledger: 'nation~none', looksLike: 'nation', is: 'none',
    h: 'A ruler’s orders',
    link: 'The last pairs kept the fifth answer to notices and timetables. It also covers a kind of text that sounds far more serious: orders about who holds power and how they keep it.',
    case: 'i-x-ruler',
    setup: 'The Governor closes newspapers, bans a party and sets a watcher in every street. Texts that put one people first and silence everyone else can do all of these things, so a reader may take this one for {a:D1.nation}. Yet the key’s answer for this case is {a:D1.none}.',
    prompt: { kind: 'phrase', answer: 'The Governor thanks those who obey, and these orders will stand for as long as he chooses' },
    because: [
      'Read the Governor’s order for whom it speaks for. There is no "we", no people and no country in it. There are orders, and there is the Governor, who decides how long they last. The text says who holds power and how they keep it. It does not say that anyone is put first.',
      'Closing newspapers, banning parties and setting watchers are ways of keeping power, and a ruler can use them whatever else the ruler believes. They tell you how this ruler holds power. They do not tell you whom the text speaks for, and that is what the key asks.',
      'A text can show a ruler’s methods and also put one people first, and then the answer is {a:D1.nation}. This one shows only the methods.'
    ],
    take: [
      'This answer does not say the orders are harmless, and it does not say they are fair. It says only that the first question has nothing to sort here. The orders can be cruel. Saying so is a different thing from saying what the text puts first.',
      'The same goes for a text that praises a ruler without saying whom the ruler serves. With no people, no side, no old way and nothing owed to every person, the answer is {a:D1.none}.'
    ] }
]);
