// Political Ideologies, Unit Two, part one (second half): the name for a text that takes the workers' side and says nothing more,
// and the first look-alike pair.

FC.cards('ideology', 'u2', [

  /* ---------- Class politics with nothing attached ---------- */
  { id: 'meet-classonly', kind: 'meet', outcome: 'classonly',
    link: 'Many texts on the workers’ side have no plan at all, and that has a name too. It is the first time in this unit that the right answer is a silence.',
    case: 'c-co-laundry', mark: 'C1',
    strip: [
      'There are two groups in the text: the women who work the presses, paid by the hour, and the owners, who are paid from what the presses make. The text is on the side of the people who work.',
      'It asks the reader for one thing: come to a meeting and stand together.',
      'It says nothing about who should own the laundry, nothing about taxes or services, and nothing about how the owners gain. It does not mention the government at all.'
    ],
    explain: [
      'Most of what is written on the side of working people looks like this. A notice goes up, a post is shared, a speaker says a few lines to a crowd. The purpose is to bring people together and to say whose side they are on, not to set out a plan for the whole economy.',
      'So when you ask what the text says about the businesses, there are no words to point to. The marked words are the words where a plan could have stood, and what stands there instead: an invitation to a meeting. The answer is {a:C1.none}, and it is a real answer.',
      'It is not a guess about what the writers secretly want: a text that does not say is a text that does not say. Nor is it a milder text, since a furious text and a calm one can both say nothing about the businesses. A text that also asked for a party to take power, or for the government to be got rid of, would get another name.'
    ],
    feature: { step: 'C1', option: 'none' },
    name: 'The name for this is {o:classonly}. "Class" here means people sorted by how they earn their living: those who work for pay, and those who own where they work. "With nothing attached" says that no plan has been fastened to the side-taking. The name does not say the text is empty. It says the text takes a side and says nothing more.' },

  { id: 'check-classonly', kind: 'check', after: 'classonly',
    case: 'c-co-buses',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-socdem-classonly', kind: 'lookalike', ledger: 'socdem~classonly',
    link: 'These two are the pair most easily taken for each other. Both are on the workers’ side, and in neither does anyone take the businesses from their owners.',
    cases: ['c-lk-sdco-sd', 'c-lk-sdco-co'],
    instruction: 'Both cases are about the Greenvale dairy, with the same owners and the same four years without a raise. Compare one thing: whether the text goes on to say what the government should do about pay, taxes or services.',
    prompt: { kind: 'which', option: 'C1.keep', answer: 'c-lk-sdco-sd' },
    difference: [
      'In Case A the text goes on to a plan. It leaves the dairy with its owners, and asks for a minimum wage that rises with prices and a tax on the dairy’s profits to pay for training. The answer is {a:C1.keep}, and the case is {o:socdem}.',
      'In Case B the text stops after taking the workers’ side. It asks the reader to come along, and says nothing about the owners keeping the dairy or losing it, about tax, or about services. The answer is {a:C1.none}, and the case is {o:classonly}.',
      'The story and the complaint are word for word the same. The difference is what comes after them: a plan, or nothing.'
    ] }
]);
