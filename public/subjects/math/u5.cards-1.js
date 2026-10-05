// Basic Math, Unit Five, part one: the opening card, and the first kind (several choices, each from its own list).
// Unit Five is a procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a problem of the kind,
// two worked examples with real numbers, and problems the learner finishes. The key has one question here, and each of its five
// answers leads to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// The worked examples (kind solved) are in u5.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u5', [

  { id: 'orient-chance', kind: 'orient',
    h: 'Five kinds of problem about counting and chance, and a procedure for each',
    canDo: 'After this unit you can take a problem that asks how many different ways something can turn out, or how likely it is, such as how many different phone cases a shop can offer, in how many ways medals can be given to runners, how many teams can be picked from a list of volunteers, how likely it is that it rains on at least one of five days, or whether a positive test result can be trusted; say which of five kinds it is; and then solve it with the procedure for that kind. You will see every number worked out, you will be told why each step is done, and you will work problems yourself.',
    everyday: [
      'Picture the committee of a village fete, with five questions to settle in one afternoon, all of them about counting or about chance. “The phone stall sells cases in 4 colours and 3 styles: how many different cases is that?” “Eight children run the final race, and medals go to the first three: in how many different ways can the medals be given out?” “The quiz team has 4 places and 9 people have asked to be on it: how many different teams could we pick?” “Each of the three outdoor stalls has a 20% chance of being rained off: how likely is it that at least one of them is?” And the first-aid tent asks: “A quick health test has come back positive: how likely is it that the person really has the illness?”',
      'The first question, which Unit One taught, gives the same answer to all five: {a:M1.chance}. But they are five different questions, each with its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. Take 9 things and 4 picks. Depending on how the picks are made, the count of different results can be 6,561, or 3,024, or 126. So in this unit the order is always the same: first work out what is being counted, or what chance is wanted, and only then solve it.'
    ],
    add: [
      'Three words from the units before are used here in the same way. A procedure is the fixed set of steps that solves one kind of problem, and it gives the right answer whatever the numbers are. The working is the procedure carried out on one problem, with every number written down. A step is one stage of the working, and each step is named by what it is for.',
      'Four more words are new, and each means one thing in this unit. A result is one complete way something can turn out: one particular phone case, one particular team. A list is everything that one choice can be, such as the 3 styles of case. A pick is one thing taken from a list or a group. And a chance is a number that says how likely something is: 0 means it cannot happen, 1 means it is certain, and 0.2, which is the same as 20%, means 1 time in every 5. Many books say probability for what this unit calls a chance.',
      'Each kind is taught the same way. First a problem of the kind, and the idea behind its procedure. Then two worked problems, in different parts of life, with every step computed and the reason for every step given; on one step in each, the reason is held back until you have chosen it. Then problems that you finish yourself. When all five kinds have been taught, the question that tells them apart gets its own card, and then the drill mixes all five.'
    ],
    map: { branch: 'chance' } },

  /* ---------- The first kind: several choices, each from its own list ---------- */
  { id: 'meet-multprin', kind: 'meet', outcome: 'multprin',
    link: 'The first kind of problem is the simplest counting there is: several choices have to be made, and each choice is made from a list of its own.',
    case: 'm5-wd-cases', mark: 'C1',
    strip: [
      'There are two separate choices to make: a colour, and a style.',
      'Each choice has a list of its own: 4 colours and 3 styles. Picking a colour uses up none of the styles, and picking a style uses up none of the colours.',
      'The question asks how many different cases there can be, a count of complete results.',
      'Nothing is asked about how likely any case is, and nothing changes as time passes.'
    ],
    explain: [
      'What you are shown is a count of results that are built by making more than one choice. A result here is one whole case, such as “red, ridged”. To see how many there are, write them out. For black there are 3 cases: black plain, black ridged and black clear. Red goes with the same 3 styles, which gives 3 more cases, and blue and green give 3 each. Four colours with 3 cases each is 4 × 3 = 12 different cases.',
      'That is the whole idea, and it is why this kind is multiplication and not addition. Every colour can be put with every style, so each of the 4 colours is repeated 3 times, once for each style. The count of results is the count of the first list multiplied by the count of the second. A third choice, such as a strap or no strap, would double the 12, because each of the 12 cases would be offered both ways: 12 × 2 = 24.',
      'Notice what makes this kind. The lists do not change. Whatever colour was chosen, the list of styles is still plain, ridged and clear. Each choice is made from its own full list, and nothing picked for one choice changes another list.',
      'And notice what decides the kind. It is not that the problem has two numbers, 4 and 3, which could be multiplied. Two numbers could turn up in many kinds of problem. It is that every choice has a full list of its own, and that the question asks for a count of the complete results.'
    ],
    feature: { step: 'C1', option: 'lists' },
    name: 'A problem like this is {o:multprin}. In the name, “choices” means the separate picks, one from each list, and “multiplying” is what the count needs: the number of results is the size of each list multiplied together.' },

  { id: 'again-multprin', kind: 'again', outcome: 'multprin',
    link: 'The phone cases gave you what to point to: {needs:multprin}. Here is a second problem with a different story, a traveller booking a train ticket.',
    first: 'm5-wd-cases', second: 'm5-wd-train', step: 'C1',
    instruction: 'Find what the two problems share. Ignore the story (phone cases, train tickets) and ignore the numbers. Look at one thing only: which words show that each choice is made from its own list?',
    prompt: { kind: 'phrase', answer: 'picks one of 6 departure times and one of 3 classes of seat' },
    shared: [
      'Both problems have two separate choices, a colour and a style, and a departure time and a class of seat. Each choice is made from a list of its own, and picking from one list uses up nothing on the other. Both ask how many different results there are: how many different cases, how many different tickets.',
      'That is all you point to, and it is why one name covers a phone shop and a railway. The stories differ. What the choices are like, and what is asked, is the same.'
    ] },

  { id: 'lens-chance', kind: 'lens',
    h: 'Story and structure, in problems about counting and chance',
    link: 'The last card asked you to ignore the story and the numbers, and to look at how the choices are made. That holds for every card from here on, and this card says it once.',
    body: [
      'Every problem in this unit has two layers, as in the units before it. The top layer is the story: phone cases, medals, a quiz team, a bus, a medical test. Under it is what is being counted, or what chance is wanted, and how the picks or the things are related. That is what decides the kind, and so the procedure.',
      'Once the kind is chosen, you carry out its procedure on the numbers, and the numbers do change the working. A bigger group means more numbers to multiply, and a longer list of separate things means a longer product. The steps are always the same steps, with different working in them.',
      'Three things change on purpose from card to card: the words of the question (“how many”, “in how many ways”, “how likely”), the setting, and the size of the numbers. None of them tells you the kind. What the question asks, and how the picks are made, does.'
    ],
    fixed: ['the question asked of every problem in this unit: {q:C1}'],
    varies: ['the story', 'the people', 'the size of the numbers', 'the words of the question (“how many”, “in how many ways”, “how likely”)'] },

  { id: 'portrait-multprin', kind: 'portrait', outcome: 'multprin',
    link: 'You know what to point to for {o:multprin}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two or more separate choices, each made from its own list: a size and a colour, a starter and a main course, each wheel of a lock.',
      'Picking one thing takes nothing off another list, and the same thing can be on more than one list, as the digits 0 to 9 are on every wheel of a lock.',
      'The question asks how many different results there are, and a result is one complete set of choices.',
      'The working is the sizes of the lists multiplied together: 4 × 3 for colours and styles, and 10 × 10 × 10 × 10 for the four digits of a card code.'
    ],
    not: [
      'Two numbers are not enough. Two numbers to multiply, such as 4 and 3, would turn up in other kinds of problem too. What decides this kind is the separate choices, each with a full list.',
      'And one group is not enough. If the problem takes several things out of one group, so that each pick leaves one fewer to choose from, the lists are not full lists of their own, and it is a different kind. You will meet it next.'
    ],
    wild: ['"How many different outfits can I make?"', '"Pick one of each."', '"How many possible codes are there?"', '"How many different meals is that, with a choice of each course?"'],
    self: 'In your own life you meet this when you choose a meal with a starter and a main course, when you order a phone or a car by size and colour, when you work out how many codes a short code allows, and whenever a form asks you to pick one thing from each of several lists.',
    ask: '"Does the problem make a number of separate choices, with a list of its own for each, and does it want to know how many complete sets of choices there can be?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-multprin', kind: 'check', after: 'multprin',
    case: 'm5-wd-bowl',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that each choice is made from its own list? Tap them.',
           answer: 'picks one of 5 ball weights and one of 8 shoe sizes' } },

  { id: 'check-multprin-last', kind: 'check', after: 'multprin', case: 'm5-ck-mp-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-multprin-whole', kind: 'check', after: 'multprin', case: 'm5-ck-mp-whole', ask: { type: 'solve', solve: 'whole' } }
]);
