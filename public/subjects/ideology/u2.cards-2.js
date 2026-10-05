// Political Ideologies, Unit Two, part one (second half): the name for a text that takes the workers' side and says nothing more,
// and the first look-alike pair.

FC.cards('ideology', 'u2', [

  /* ---------- Class politics with nothing attached ---------- */
  { id: 'meet-classonly', kind: 'meet', outcome: 'classonly',
    link: 'The last text had a plan for the businesses. Many texts on the side of working people have none, and there is a name for that too. It is the first time in this unit that the right answer is a silence.',
    case: 'c-co-laundry', mark: 'C1',
    strip: [
      'There are two groups in the text: the women who work the presses, paid by the hour, and the owners, who are paid from what the presses make.',
      'The text says which side it is on: the people who work.',
      'It asks the reader for one thing: come to a meeting and stand together.',
      'It says nothing about who should own the laundry, nothing about taxes or services, and nothing about how the owners gain. It does not mention the government at all.'
    ],
    explain: [
      'Most of what is written on the side of working people looks like this. A notice goes up, a post is shared, a speaker says a few lines to a crowd. The purpose is to bring people together and to say whose side they are on. It is not to set out a plan for the whole economy.',
      'So when you ask what the text says about the businesses, there are no words to point to, and it is worth saying how that works. The marked words on this card are the words where a plan could have stood, and what stands there instead: an invitation to a meeting. The answer is {a:C1.none}. It is a real answer, and a text that gets it can have a name of its own.',
      'It is not a guess about what the writers secretly want. They may want the owners taxed, or the laundry taken over, or something else. A short text that does not say is a text that does not say, and a silence is never filled with a guess. What is in front of you is all there is to read.',
      'It is also not a weaker or milder text. A furious text and a calm one can both say nothing about the businesses. The side the text takes has already been used by the first question. What is left to ask is whether the text goes on to a plan, and this one does not.',
      'The line below also says there is no party seizing power and no getting rid of the government. That is because a text that said either of those would be saying more than the side it takes, and it would get another name. This text mentions neither.'
    ],
    feature: { step: 'C1', option: 'none' },
    name: 'The name for this is {o:classonly}. "Class" here means a group of people sorted by how they earn their living: those who work for pay, and those who own where they work. "Politics" means the effort to win a say in how things are run. "With nothing attached" says that no plan has been fastened to the side-taking. The name is not a verdict that the text is empty. It says that the text takes a side and says nothing more.' },

  { id: 'again-classonly', kind: 'again', outcome: 'classonly',
    link: 'The laundry notice gave you what to point to from one case: {needs:classonly}. Here is a second case with a different story. This time the people who work are cooks in a school canteen, and the words are posted online.',
    first: 'c-co-laundry', second: 'c-co-canteen', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a laundry, a school canteen). Look at one thing only: what the text asks of the reader, and whether anything in it is about who should own the business.',
    prompt: { kind: 'phrase', answer: 'Share this if you are too' },
    shared: [
      'Both texts name owners and workers and take the workers’ side. Both then stop, and ask the reader for something small: come to a meeting, share a post. Neither says a word about who should own the laundry or the canteen contract, about taxes or services, or about how the owners gain.',
      'The two stories share nothing else. So this holds wherever a text takes the workers’ side and goes no further. That is what {o:classonly} names.'
    ] },

  { id: 'portrait-classonly', kind: 'portrait', outcome: 'classonly',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:classonly} in real life.',
    typical: [
      'It names two groups and takes a side.',
      'It may say what is wrong: low pay, a bonus, a closing, a cut. That is a complaint about what has happened. It is not a plan.',
      'What it asks of the reader is small and near: come, sign, share, stand outside the works, vote on a strike.',
      'It can be short or long. A long text that never gets to a plan for the businesses is still this name.',
      'It leaves the reader to fill the gap, and readers do. A friend who sees it may say the writers are secretly one thing or another. That is a guess about the writers, not something the text says.'
    ],
    not: 'A text that says nothing about the businesses is not a text with nothing to say. It may say a great deal about the owners and what they have done. What makes it {o:classonly} is that it asks for no plan: nothing about who should own the businesses, no taxes or services, no explanation of how owners gain, and nothing about the government. If it says any one of these, it is another name.',
    wild: ['"Whose side are you on, the staff or the shareholders?"', '"We work, they profit. Stand with us."', '"Come to the meeting. Bring a friend."', '"Share if you think we deserve a raise."'],
    self: 'In your own life it is the notice on a staff-room wall, the group chat of a trade that is about to strike, or the post a friend shares about a closing.',
    ask: '"Does the text go past taking a side to say what should be done about the businesses?" If you cannot find words that do, the answer is {a:C1.none}.' },

  { id: 'check-classonly', kind: 'check', after: 'classonly',
    case: 'c-co-buses',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-socdem-classonly', kind: 'lookalike', ledger: 'socdem~classonly',
    link: 'These two names are the pair most easily taken for each other. Both are on the workers’ side, and so far as the words go, in neither does anyone take the businesses from their owners. This card puts them side by side.',
    cases: ['c-lk-sdco-sd', 'c-lk-sdco-co'],
    instruction: 'Both cases are about the Greenvale dairy, with the same owners and the same four years without a raise. Compare one thing: whether the text goes on to say what the government should do about pay, taxes or services.',
    prompt: { kind: 'which', option: 'C1.keep', answer: 'c-lk-sdco-sd' },
    difference: [
      'In Case A the text goes on to a plan. It leaves the dairy with its owners, and asks for a minimum wage that rises with prices and a tax on the dairy’s profits to pay for training. The answer is {a:C1.keep}, and the case is {o:socdem}.',
      'In Case B the text stops after taking the workers’ side. It asks the reader to come along, and says nothing about the owners keeping the dairy or losing it, about tax, or about services. The answer is {a:C1.none}, and the case is {o:classonly}.',
      'The story and the complaint are word for word the same. The difference is what comes after them: a plan, or nothing. That is why you cannot name a text from what it complains about.'
    ] }
]);
