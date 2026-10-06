// Political Ideologies, Unit Two, part four: an explanation that asks for nothing, and the pair that sets it beside the name for a
// text that only complains.

FC.cards('ideology', 'u2', [

  /* ---------- Marxism ---------- */
  { id: 'meet-marx', kind: 'meet', outcome: 'marx',
    link: 'Every name so far has said what should be done about the businesses or about power, or has only taken a side. This text does none of those. It explains something.',
    case: 'c-mx-mill', mark: 'C1',
    strip: [
      'The text is written for weavers, and it takes their side.',
      'It gives a sum: a weaver is paid $60, and makes cloth worth $100 once costs are taken off. The $40 left over goes to the owner.',
      'It says this is not because the owner is cruel: every owner has to keep a gap like it, because that is how the arrangement works. Owners live from what workers make and are not paid for.',
      'It asks for nothing: no tax, no handover and no party.'
    ],
    explain: [
      'The text does one thing. It explains how an owner comes to gain from other people’s work, and says the explanation holds for every owner, however kind. The $40 is the part of what the weaver makes that she is not paid for.',
      'The explanation is the whole text. It does not say that anything should be done about the mill. Some people who hold the explanation draw a plan from it, and then their text has a plan in it and gets another name.',
      'The same explanation can be told as a story of history: in every age the owners and the workers fight over who gets what, and that fight is what moves history forward. That counts too.'
    ],
    feature: { step: 'C1', option: 'explain' },
    name: 'The name for this is {o:marx}, after the writer whose books set out the explanation. It stands for a text that explains how owners gain from what workers make, and asks for nothing about the businesses or about power.' },

  { id: 'check-marx', kind: 'check', after: 'marx',
    case: 'c-mx-care',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market', 'explain'] } },

  /* ---------- The pair that both mention the owners' gain and ask for nothing ---------- */
  { id: 'look-classonly-marx', kind: 'lookalike', ledger: 'classonly~marx',
    link: 'These two are the pair most often taken for each other, because both talk about the owner’s gain and neither asks for a tax or a handover. They part on how much the text explains.',
    cases: ['c-lk-comx-co', 'c-lk-comx-mx'],
    instruction: 'Both cases are about the Dunmore carpet mill and its owner’s gain. Compare one thing: is the text about this owner’s choice, or does it explain why any owner would keep a gap?',
    prompt: { kind: 'which', option: 'C1.explain', answer: 'c-lk-comx-mx' },
    difference: [
      'In Case A the text complains that this owner paid himself a bonus and refused a raise. That is one owner’s choice, and the text goes on to an invitation to a cafeteria meeting. Nothing is explained and nothing is asked. The answer is {a:C1.none}, and the case is {o:classonly}.',
      'In Case B the text says the gap is not this owner’s greed: every owner has to keep a gap like it, because that is how the arrangement works. That is an explanation of how owners gain. The answer is {a:C1.explain}, and the case is {o:marx}.',
      'One complains and the other explains.'
    ] }
]);
