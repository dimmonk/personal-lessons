// Political Ideologies, Unit Two, part four: an explanation that asks for nothing, and the pair that sets it beside the name for a
// text that only complains.

FC.cards('ideology', 'u2', [

  /* ---------- Marxism ---------- */
  { id: 'meet-marx', kind: 'meet', outcome: 'marx',
    link: 'This text asks for nothing. It explains.',
    case: 'c-mx-mill', mark: 'C1',
    explain: [
      'The pamphlet does one thing: it shows how an owner comes to gain from other people’s work. The weaver is paid $60 and makes cloth worth $100, so $40 is the part of her work she is not paid for. And it says this is true of every owner, however kind.',
      'The explanation is the whole text. It does not say what to do about the mill. Someone who holds the explanation may go on to draw a plan from it, and then the text has a plan in it and gets another name.'
    ],
    spot: [
      { do: 'Find the sum: $60 paid, $100 made, $40 left over.', why: 'The gap between pay and what the work earns is the owner’s gain.' },
      { do: 'Look for “every owner”: “Every owner has to keep a gap like it”.', why: 'It says this is how the system works, not one owner’s greed.' },
      { do: 'Check it asks for nothing: no tax, no handover and no party.', why: 'A plan in the text would give it another name.' }
    ],
    feature: { step: 'C1', option: 'explain' },
    name: 'This is {o:marx}, after the writer whose books set out the explanation. The text explains how owners gain, and asks for nothing.' },

  { id: 'check-marx', kind: 'check', after: 'marx',
    case: 'c-mx-care',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market', 'explain'] } },

  /* ---------- The pair that both mention the owners' gain and ask for nothing ---------- */
  { id: 'look-classonly-marx', kind: 'lookalike', ledger: 'classonly~marx',
    link: 'Both talk about the owner’s gain, and neither asks for a tax or a handover. They part on how much the text explains.',
    cases: ['c-lk-comx-co', 'c-lk-comx-mx'],
    instruction: 'Both stories are about the Dunmore carpet mill and its owner’s gain. Compare one thing: is the text about this owner’s choice, or does it explain why any owner would keep a gap?',
    prompt: { kind: 'which', option: 'C1.explain', answer: 'c-lk-comx-mx' },
    difference: [
      'In Story A the text complains that this owner paid himself a bonus and refused a raise, then invites people to a meeting. Nothing is explained and nothing is asked. The answer is {a:C1.none}, so this is {o:classonly}.',
      'In Story B the text says the gap is not this owner’s greed: every owner has to keep a gap like it. That explains how owners gain. The answer is {a:C1.explain}, so this is {o:marx}.',
      'One complains. The other explains.'
    ] }
]);
