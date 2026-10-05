// Political Ideologies, Unit Two, part four (first half): an explanation that asks for nothing. The word it leans on, the name, a wrong
// idea about taxing the rich, and the pair that sets it beside the name for a text that only complains.

FC.cards('ideology', 'u2', [

  /* ---------- A word the explanation is built on ---------- */
  { id: 'term-surplus', kind: 'term', term: 'surplus',
    h: 'A bakery’s sums, and a word for the gap',
    link: 'The next name is for a text that explains something instead of asking for something, and the explanation leans on a word. The word is easier to see in a sum first.',
    case: 'c-term-bakery',
    plain: [
      'Millbrook Bakery pays each baker £80 a day. In one day a baker makes bread that sells for £128, once the flour and the cost of running the ovens have been taken off. So each day a baker makes £48 more than the baker is paid. Dana, the owner, keeps that £48.',
      'The sum has the same shape wherever wages are paid, whether the numbers are large or small. Part of what the workers make comes back to them as wages. The part that is left goes to the owner.'
    ],
    after: [
      'Two cautions about the word. First, it names the £48 and says nothing about whether keeping it is fair. Dana can say that the £48 pays for the ovens, the risk she takes and her idea, and people argue over that. Second, the numbers here are an invented sum. Economists disagree about where profit comes from, and no side is taken here. The word is needed only because some texts use it.',
      'A text that explains how an owner comes to keep {t:surplus} is making an argument. The only question is whether the text makes it, and what else the text says.'
    ] },

  /* ---------- Marxism ---------- */
  { id: 'meet-marx', kind: 'meet', outcome: 'marx',
    link: 'Every name so far has said what should be done about the businesses, or about power, or has said nothing and taken a side. The next text does neither. It explains something.',
    case: 'c-mx-mill', mark: 'C1',
    strip: [
      'The text is written for weavers, and it takes their side.',
      'It gives a sum: a weaver is paid £60, and makes cloth worth £100 once costs are taken off. The £40 left over goes to the owner.',
      'It says this is not because the owner is cruel. Every owner has to keep a gap like it, because that is how the arrangement works.',
      'It says owners live from what workers make and are not paid for.',
      'It asks for nothing: no tax, no handover and no party.'
    ],
    explain: [
      'The text does one thing. It explains how an owner comes to gain from other people’s work, and it says that the explanation holds for every owner, however kind. The word for the £40 is {t:surplus}: the part of what the weaver makes that she is not paid for.',
      'The explanation is the whole text. It does not say that anything should be done about the mill. It says what is going on, and leaves it there. Some people who hold the explanation draw a plan from it, and then their text has a plan in it. A text with the explanation and nothing else has only the explanation.',
      'The same explanation can be told as a story of history. Some texts say that in every age the owners and the workers fight over who gets what, and that this fight is what moves history forward. That is an explanation too, and it counts for this answer.',
      'People who hold this explanation say it shows why owners and workers can never quite want the same thing. People who disagree say that profit comes from the owner’s risk, ideas and savings and not only from the workers’ work, so the explanation leaves things out. These are old arguments, and no side is taken in them here. The only question is whether the text makes the explanation.'
    ],
    feature: { step: 'C1', option: 'explain' },
    name: 'The name for this is {o:marx}. It is the name of the explanation, and "Marx" is the name of a writer whose books set it out. The name stands for a text that explains how owners gain from what workers make, and asks for nothing about the businesses or about power.' },

  { id: 'again-marx', kind: 'again', outcome: 'marx',
    link: 'The weaver’s sums gave you what to point to from one case: {needs:marx}. Here is a second case with a different story. This time the words are notes for an evening class, and there is no sum.',
    first: 'c-mx-mill', second: 'c-mx-class', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a mill, an evening class). Look at one thing only: what the text explains about how owners gain.',
    prompt: { kind: 'phrase', answer: "The owners of today's farms, shops and banks gain from what workers make and are not paid for" },
    shared: [
      'Both texts explain how owners gain. The weaver’s pamphlet shows it in a sum and says every owner has to keep a gap like it. The evening class says that owners and workers fight over who gets what, and that the owners of today’s farms, shops and banks profit from work that is never fully paid for. Neither asks for anything to be done with the businesses.',
      'The two stories share nothing else. One has numbers and the other has none. So this holds wherever a text explains how owners gain, as the way the whole arrangement works, and asks for nothing. That is what {o:marx} names.'
    ] },

  { id: 'portrait-marx', kind: 'portrait', outcome: 'marx',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:marx} in real life.',
    typical: [
      'It is written as an explanation: this is how it works, and here is why. It often gives a sum or a sweep of history.',
      'It says the gain is built into the arrangement, so it holds for any owner. It is not about one bad employer.',
      'It asks for no tax, no handover and no party. If it asked for one of these, it would have a plan, and the answer would be another name. It may say that its case will be put to the voters; that leaves the government as it is. If it says the government is to be got rid of, it is another name.',
      'It is written for working people, to show them how the arrangement works.',
      'It often uses a few words of its own, such as {t:surplus}.'
    ],
    not: 'Complaining about an owner is not this name. A text that says this owner took a bonus while the staff got no raise complains about one owner’s choice. This name needs the explanation: that owners as a group profit from the work of the people they employ, as the way the whole system works, whoever the owner is. Nor is a text that talks of owners and workers fighting enough on its own. It must say that the fight is what moves history, or explain how owners gain.',
    wild: ['"Profit is the part of your work that you are not paid for."', '"The owners are not cruel; they are only doing what the arrangement needs."', '"History is the story of owners and workers fighting."'],
    self: 'In your own life it is the lecture or the pamphlet that tries to show how a wage and a profit are connected, or the book that sets out why prices and wages are what they are, from the workers’ side.',
    ask: '"Does the text explain how owners gain as the way the whole system works, or only complain about one owner?" If it only complains, the answer is {o:classonly}.' },

  { id: 'check-marx', kind: 'check', after: 'marx',
    case: 'c-mx-care',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market', 'explain'] } },

  { id: 'refute-tax', kind: 'refute', about: 'socdem',
    h: 'A wrong idea about taxing the rich',
    link: 'You now have the name for texts that leave the owners their businesses and tax them, and the name for texts that explain how owners gain. A common saying runs the two together, and it leads to the second name being used where it does not apply.',
    idea: '"A government that taxes the rich heavily must be Marxist."',
    verdict: 'This is wrong.',
    right: [
      'Taxing the rich, however heavily, leaves the businesses with their owners, and for {o:socdem} that is the point: the owners keep them. {o:marx} is the name for a text that sets out how owners come by their profit, as the way the whole system works. A tax rate says how much of the profit goes to the government. It explains nothing about how the profit arises.',
      'A tax rate is also not a name. Texts that ask for a very high tax and texts that ask for a very low one can both leave the owners their businesses. What you point to is whether the text leaves the owners their businesses and asks for tax or services, or explains how owners gain.',
      'So when someone says that a text that taxes the rich must be {o:marx}, ask what the text says about the businesses. If the owners keep them and the text asks for tax and services, the answer is {a:C1.keep}, and the name is {o:socdem}.'
    ],
    testedBy: ['c-claim-tax'] },

  /* ---------- The pair that both mention the owners' gain and ask for nothing ---------- */
  { id: 'look-classonly-marx', kind: 'lookalike', ledger: 'classonly~marx',
    link: 'These two are the pair most often taken for each other, because both talk about the owner’s gain and neither asks for a tax or a handover. They part on how much the text explains.',
    cases: ['c-lk-comx-co', 'c-lk-comx-mx'],
    instruction: 'Both cases are about the Dunmore carpet mill and its owner’s gain. Compare one thing: is the text about this owner’s choice, or does it explain why any owner would keep a gap?',
    prompt: { kind: 'which', option: 'C1.explain', answer: 'c-lk-comx-mx' },
    difference: [
      'In Case A the text complains that this owner paid himself a bonus and refused a raise. That is one owner’s choice, and the text goes on to an invitation to a canteen meeting. Nothing is explained and nothing is asked. The answer is {a:C1.none}, and the case is {o:classonly}.',
      'In Case B the text says the gap is not this owner’s greed: every owner has to keep a gap like it, because that is how the arrangement works. That is an explanation of how owners gain. The answer is {a:C1.explain}, and the case is {o:marx}.',
      'Both are on the weavers’ side, both mention the owner’s money, and neither asks for a tax or a handover. The difference is that one complains and the other explains.'
    ] }
]);
