// Political Ideologies, Unit Four, part three: the key's question about old ways, and the names these two are mistaken for.
// The look-alike pairs here cross branches (lesson standard section 17): one name of this unit beside a name from the nation
// branch or from the working-people branch. Both are taught in the units Unit Four assumes, so their names and answers are used by token.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u4', [

  /* ---------- The question, as a question ---------- */
  { id: 'q-ways', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'Since the boundary walk you have seen the question at the foot of each new name, with one answer under it. This card puts the question and both its answers in one place, worded as they always are, and says why it is asked.',
    decides: [
      'Unit One’s question, {q:D1}, got the same answer for both names: {a:D1.tradition}. That answer cannot tell them apart, so this question is what does. It sorts a text by what it wants done with the old ways it holds up, and for these two names that is the whole difference.',
      'Two texts can love the same old ways, quote the same grandparents and sound equally fond of them. One asks that what is there be looked after. The other asks that what has gone be given back. Nothing in how fond a text sounds, or how old the thing is, or how angry the writer is can tell you which. Only what is asked of the old ways can.',
      'This is the only question that comes after Unit One’s, and each of its answers leads to one name. So your answer to it is also the name you give. The name and your answers on the way are still marked separately, as in every unit. Your answers on the way here are two: the one you gave to Unit One’s question, and this one. A right name reached by a wrong answer to the first of them counts as a miss.'
    ],
    how: [
      'Find the sentence that says what is to be done with the old ways. Then ask whether anything the text names has gone, and whether the text asks for it back. Both halves are needed for the second answer: an order that has gone, said to have been wrongly torn down, and a request to put it back. If you cannot point to both, the answer is not the second.',
      'For the first answer, point to what is still there and to what the text asks of it: that it be kept, and that any change be slow. For the second, point to what has gone, to the words that call its going a wrong, and to the words that ask for it back.',
      'A text can be sad about what has gone and still ask only that what is left be kept. Sadness is not the second answer. Only the request is.'
    ],
    whenBoth: 'Sometimes both answers seem to fit: a text mourns an old order and also asks for the rest to be kept slowly. Ask whether the text asks for the order that has gone to be put back. If it does, that settles it, however gently it asks, because the answer goes by what the text asks for and not by how it is said. The pair below has been set side by side in this unit, with the question that tells it apart.' },

  { id: 'check-ways', kind: 'check', after: 'T1',
    case: 'i4-check-ways',
    ask: { type: 'step', step: 'T1' } },

  /* ---------- Beside the names they are mistaken for ---------- */
  { id: 'look-conserv-nationalism', kind: 'lookalike', ledger: 'conserv~nationalism',
    h: 'Old ways and one people, at the same festival',
    link: 'Both names in this unit love what was handed down, and so does a name taught in Unit Three. Here are the first name of this unit and that one, told about the same harbor festival.',
    cases: ['i4-lk-conserv-harbor', 'i4-lk-nationalism-harbor'],
    instruction: 'Both cases are about the harbor festival at Port Selby, and both are fond of it. Compare one thing: what does the text hold up first, ways handed down, or one people?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i4-lk-conserv-harbor' },
    difference: [
      'In Case A the text says that the blessing of the boats was handed down by the crews before them and should guide how the festival is planned, and asks for it to be kept, and for any work on the quay to be slow. It speaks of no people to be put first. The answer to Unit One’s question is {a:D1.tradition}, and its answer to this unit’s question is {a:T1.keep}. The case is {o:conserv}.',
      'In Case B the text says that the festival shows we are one people, and that what divides us counts for less than what holds us together. It names no old ways that should guide. It leaves voting and disagreement alone. The answers are {a:D1.nation}, {a:N1.whole} and {a:N2.keep}. The case is {o:nationalism}.',
      'Both texts love the same festival. The difference is what each holds up as first: the people who hold it, or the ways handed down that make it what it is.'
    ] },

  { id: 'look-react-fasc', kind: 'lookalike', ledger: 'react~fasc',
    h: 'An old crown, and one people with one leader',
    link: 'The second name of this unit can be mistaken for a name taught in Unit Three: the one for a text that pushes parliament aside. Both can be against a parliament and want something big done. Here is one parliament told about twice.',
    cases: ['i4-lk-react-crown', 'i4-lk-fasc-crown'],
    instruction: 'Both cases are about the parliament of the Ruddock Republic, and both are against it. Compare one thing: does the text ask for an order that once stood to come back, or does it speak for one people and ask for votes and opponents to be pushed aside?',
    prompt: { kind: 'which', option: 'T1.restore', answer: 'i4-lk-react-crown' },
    difference: [
      'In Case A the text says that the crown and the old council were swept away by the men who made the parliament, that this was a wrong, and asks for the crown and the council to be put back. The answers are {a:D1.tradition} and {a:T1.restore}. The case is {o:react}.',
      'In Case B the text says nothing of an old order. It speaks for the nation as a single people, says the parliament talks while the nation suffers, and says that parties and votes will be done away with so that one leader speaks for everyone. The answers are {a:D1.nation}, {a:N1.whole} and {a:N2.aside}. The case is {o:fasc}.',
      'Both texts are against the parliament and want a great change. The difference is what each asks for: an old order put back, or one people with one leader.'
    ] },

  /* ---------- Exception: one people under a crown ---------- */
  { id: 'exc-fasc-react', kind: 'exception', ledger: 'react~fasc', looksLike: 'fasc', is: 'react',
    h: 'One people under one crown',
    link: 'The last card kept the two names on separate stories. A real text can show the marks of both at once. This pamphlet speaks for one people and asks for the Assembly to be closed, and it also asks for something older than both.',
    case: 'i4-x-fasc',
    setup: 'The pamphlet speaks for one people, and asks for the Assembly to be closed so that one voice speaks for everyone. Together, those are what you point to for {o:fasc}. Yet the answer to Unit One’s question for this case is {a:D1.tradition}, and the name is {o:react}.',
    prompt: { kind: 'phrase', answer: 'put the king back on his throne, and let the Church courts sit again as they sat before' },
    because: [
      'The pamphlet does speak for one people, and it does ask for the Assembly to be closed so that one voice speaks for everyone. If that were all it said, it would be {o:fasc}. But look at what it holds up. It names the crown and the Church courts, says they kept the peace for six hundred years, says they were torn down wrongly, and asks for them back. That is an old order of crown and church, held up as what should guide the country, and asked for back.',
      'So the case shows both answers at once. When it does, the answer is {a:D1.tradition}, and the question that follows gives {a:T1.restore}. A text that speaks of one people and then asks for an old order to be put back holds up the old order as the thing that decides.',
      'There is a way to see why. Take away the words about one people, and the pamphlet still makes sense: it asks for the crown and the courts back. Take away the crown and the courts, and nothing is left to say what the country should return to.'
    ],
    take: 'It is worth knowing that this is a decision. In life, love of one people and love of an old order run into each other, and people who study them do not all draw the line in the same place. Some would call a text like this one {o:fasc}, some {o:react}, and some would say it is both. Each text gets one name, by its answer to Unit One’s question, so that two people using the same questions reach the same one and can each say why. The answer goes this way round because the question after the old-ways answer asks whether an old order is to be put back, and that is what this pamphlet is about.' },

  /* ---------- Exception: old customs mourned, and the owners made to pay ---------- */
  { id: 'exc-class-conserv', kind: 'exception', ledger: 'conserv~socdem', looksLike: 'conserv', is: 'socdem',
    h: 'Old customs kept, and the owners made to pay',
    link: 'The last card showed old ways winning over one people. They do not win over everything. Here is a text that holds up old customs, as the loom hands’ newsletter did in Unit One, and that also takes the side of working people against the people who own the businesses.',
    case: 'i4-x-quarry',
    setup: 'The notice holds up the blessing of the stone, the Sunday rest and the old quarry songs, handed down by the quarrymen before them, and asks for them to be kept and for change to be slow. That is what you point to for {o:conserv}. Yet the answer to Unit One’s question for this case is {a:D1.class}, and the name is {o:socdem}.',
    prompt: { kind: 'phrase', answer: 'those who cut the stone and those who own the quarry want different things, and we stand with those who cut it' },
    because: [
      'The notice does hold up old customs as the guide, and asks for them to be kept and changed slowly. If that were all it said, it would be {o:conserv}. But it goes on to say that the owners cut the Sunday rest, that those who cut the stone and those who own the quarry want different things, and that it stands with those who cut it. That is working people set against owners, with the text on the workers’ side.',
      'So the case shows both answers at once. When it does, the answer is {a:D1.class}. The customs are in the text, but what the text does with them is argue for the quarrymen against the owners. Then the questions Unit Two taught apply. The quarry stays with its owners, and the government is asked to set a floor under pay and tax the profits to pay for pensions, so the answer to {q:C1} is {a:C1.keep}. The text says nothing about how power is to be won or held, so the answer to {q:C2} is {a:C2.none}. The name is {o:socdem}.',
      'The answer goes this way round for a reason. If the notice were given the old-ways answer, the owners and the quarrymen would drop out of the reading, and they are what the notice is about.'
    ],
    take: 'It is worth knowing that this is a decision. In life, a text can hold up what was handed down and blame owners in the same breath, and nobody can draw a sharp line between the two. Each text gets one answer, so that two people using the same questions reach the same one and can each say why. It is the same decision you met in Unit One, and it holds whichever name the text ends with.' }
]);
