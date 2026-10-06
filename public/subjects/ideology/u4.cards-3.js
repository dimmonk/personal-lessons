// Political Ideologies, Unit Four, part three: the names these two are mistaken for.
// The pairs here cross branches (lesson standard section 17): one name of this unit beside a name from the nation branch or from the
// working-people branch. Both are taught in the units Unit Four assumes, so their names and answers are used by token.
// The app prints "how to tell them apart", the side-by-side table and the tie-break; none of them is typed here.

FC.cards('ideology', 'u4', [

  { id: 'look-conserv-nationalism', kind: 'lookalike', ledger: 'conserv~nationalism',
    h: 'Old ways and one people, at the same festival',
    link: 'Both the first name here and a name from Unit Three love what was handed down. Here they are, told about the same harbor festival.',
    cases: ['i4-lk-conserv-harbor', 'i4-lk-nationalism-harbor'],
    instruction: 'Both cases are about the harbor festival at Port Selby, and both are fond of it. Compare one thing: what does the text hold up first, ways handed down, or one people?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i4-lk-conserv-harbor' },
    difference: [
      'In Case A the blessing of the boats was handed down by the crews before them and should guide how the festival is planned. The text asks for it to be kept, with slow work on the quay, and speaks of no people to be put first. The answers are {a:D1.tradition} and {a:T1.keep}, and the case is {o:conserv}.',
      'In Case B the festival shows that we are one people, and what divides us counts for less than what holds us together. No old ways are said to guide, and voting and disagreement are left alone. The answers are {a:D1.nation}, {a:N1.whole} and {a:N2.keep}, and the case is {o:nationalism}.',
      'Both texts love the same festival. The difference is what each holds up first: ways handed down, or the people who hold the festival.'
    ] },

  /* ---------- Exception: one people under a crown ---------- */
  { id: 'exc-fasc-react', kind: 'exception', ledger: 'react~fasc', looksLike: 'fasc', is: 'react',
    h: 'One people under one crown',
    link: 'A name from Unit Three can be mistaken for the second name here: the one for a text that pushes parliament aside. This pamphlet speaks for one people and asks for the Assembly to be closed, and it also asks for something older.',
    case: 'i4-x-fasc',
    setup: 'The pamphlet speaks for one people, and asks for the Assembly to be closed so that one voice speaks for everyone. Together, those are what you point to for {o:fasc}. Yet the answer to Unit One’s question for this case is {a:D1.tradition}, and the name is {o:react}.',
    prompt: { kind: 'phrase', answer: 'put the king back on his throne, and let the Church courts sit again as they sat before' },
    because: [
      'The pamphlet does speak for one people and does ask for the Assembly to be closed. If that were all it said, it would be {o:fasc}. But it names the crown and the Church courts, says they kept the peace for six hundred years, says they were torn down wrongly, and asks for them back. That is an old order held up as what should guide the country, and asked for back.',
      'When a text shows both, the answer is {a:D1.tradition}, and the question that follows gives {a:T1.restore}. Take away the words about one people and the pamphlet still makes sense. Take away the crown and the courts, and nothing is left to say what the country should return to.'
    ] },

  /* ---------- Exception: old customs mourned, and the owners made to pay ---------- */
  { id: 'exc-class-conserv', kind: 'exception', ledger: 'conserv~socdem', looksLike: 'conserv', is: 'socdem',
    h: 'Old customs kept, and the owners made to pay',
    link: 'Old ways do not win over everything. Here is a text that holds up old customs, and also takes the side of working people against the people who own the businesses.',
    case: 'i4-x-quarry',
    setup: 'The notice holds up the blessing of the stone, the Sunday rest and the old quarry songs, handed down by the quarrymen before them, and asks for them to be kept and for change to be slow. That is what you point to for {o:conserv}. Yet the answer to Unit One’s question for this case is {a:D1.class}, and the name is {o:socdem}.',
    prompt: { kind: 'phrase', answer: 'those who cut the stone and those who own the quarry want different things, and we stand with those who cut it' },
    because: [
      'The notice does hold up old customs, and asks for them to be kept and changed slowly. If that were all it said, it would be {o:conserv}. But it goes on to say that the owners cut the Sunday rest, that those who cut the stone and those who own the quarry want different things, and that it stands with those who cut it. That is working people set against owners, with the text on the workers’ side.',
      'So the answer is {a:D1.class}. The quarry stays with its owners, and the government is asked to set a floor under pay and tax the profits to pay for pensions, so the answer to {q:C1} is {a:C1.keep}. The text says nothing about how power is won or held, so the answer to {q:C2} is {a:C2.none}. The name is {o:socdem}.'
    ] }
]);
