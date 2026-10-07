// Political Ideologies, Unit Two, part five: the two questions, each put in one place. They also teach the pairs of names that have
// no card of their own (the ledger's taughtIn).

FC.cards('ideology', 'u2', [

  { id: 'q-business', kind: 'question', step: 'C1',
    h: 'The question about the businesses',
    link: 'Each name above ended on one of two questions. Here is the first, with all six of its answers.',
    decides: [
      'That is why {o:socdem} and {o:demsoc} can both ask for health care and still get different answers: one changes who gets what, the other changes who owns what.'
    ],
    how: [
      { do: 'Find the sentence about what should happen to the businesses.', why: 'If you can’t find the words, you don’t have an answer yet.' },
      { do: 'A complaint about what the owners did, with no plan, is {a:C1.none}.', why: 'Saying what is wrong is not saying what to do about the businesses.' },
      { do: 'A tax or a floor for pay counts only if the owners keep the businesses.', why: 'If the text takes the businesses away, it is a handover.' },
      { do: 'Look for a handover: the text must say a business should pass out of the owners’ hands.', why: 'Naming a business does not say who owns it afterwards.' },
      { do: 'If a text asks for a tax and also a handover, give the handover.', why: 'That text is {o:demsoc}, not {o:socdem}.' },
      { do: 'If workers own the businesses and the firms also compete, give {a:C1.market}.', why: 'That text is {o:mktsoc}, not {o:demsoc}.' },
      { do: 'If a text explains how owners gain and then asks for a handover, give the handover.', why: 'A plan beats an explanation, so that text is {o:demsoc}, not {o:marx}.' },
      { do: 'Give {a:C1.explain} only when the text explains how owners gain and asks for nothing.', why: 'Taxing the owners, even heavily, is not an explanation.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-business', kind: 'check', after: 'C1',
    case: 'c-q-bakers',
    ask: { type: 'step', step: 'C1' } },

  { id: 'q-government', kind: 'question', step: 'C2',
    h: 'The question about the government',
    link: 'Here is the second question, with all four of its answers.',
    decides: [
      '{a:C2.none} is a real answer here too. A text that wants the businesses handed over and says nothing about how is still {o:demsoc}.'
    ],
    how: [
      { do: 'Answer this question as if the one about the businesses did not exist.', why: 'A text can say nothing about the businesses and a great deal about power.' },
      { do: 'Find the words about power: who takes it, how, and whether the government stays.', why: 'Only words about power or about the government itself answer this question.' },
      { do: '“We will win the vote and pass the law” is {a:C2.vote}.', why: 'The voters can still say no.' },
      { do: '“The party will take power and keep it” is {a:C2.seize}.', why: 'There is no election it could lose.' },
      { do: '“We want no government” is {a:C2.gone}.', why: 'Nobody is to hold power at all.' },
      { do: 'Found none of these? Give {a:C2.none}.', why: 'Saying nothing is a correct reading, not a gap in yours.' },
      { do: 'Don’t count “the government should tax the owners” as an answer.', why: 'Asking the government to do something does not say how power is won or held.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-government', kind: 'check', after: 'C2',
    case: 'c-q-shops',
    ask: { type: 'step', step: 'C2' } }
]);
