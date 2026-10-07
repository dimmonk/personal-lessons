// Political Ideologies, Unit Two, part one (second half): the name for a text that takes the workers' side and says nothing more,
// and the first look-alike pair.

FC.cards('ideology', 'u2', [

  /* ---------- Class politics on its own ---------- */
  { id: 'meet-classonly', kind: 'meet', outcome: 'classonly',
    link: 'Many texts on the workers’ side have no plan at all, and that has a name too.',
    case: 'c-co-laundry', mark: 'C1',
    explain: [
      'Most of what is written for working people looks like this. A notice goes up to bring people together and say whose side they are on, not to set out a plan for the whole economy.',
      'So when you ask what the text says about the businesses, there is nothing to find. The marked words are where a plan could have stood, and an invitation to a meeting stands there. The answer is {a:C1.none}, and it is a real answer. An angry notice and a calm one can both say nothing about the businesses.'
    ],
    spot: [
      { do: 'Find the two sides: the women who work the presses, and the owners.', why: 'The text is on the workers’ side, so it belongs in this unit.' },
      { do: 'Look for a plan for the laundry: who should own it, a tax, a law on pay. There is none.', why: 'Finding nothing is itself the answer: {a:C1.none}.' },
      { do: 'Check what it asks of the reader: “Come to the meeting on Thursday and stand with us.”', why: 'An invitation is not a plan.' },
      { do: 'Check it says nothing about power or the government: it mentions neither.', why: 'A text that said who should hold power would get another name.' }
    ],
    feature: { step: 'C1', option: 'none' },
    name: 'This is {o:classonly}: the text takes a side and stops there.' },

  { id: 'check-classonly', kind: 'check', after: 'classonly',
    case: 'c-co-buses',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-socdem-classonly', kind: 'lookalike', ledger: 'socdem~classonly',
    link: 'These two are the easiest to mix up. Both are on the workers’ side, and neither takes the businesses from their owners.',
    cases: ['c-lk-sdco-sd', 'c-lk-sdco-co'],
    instruction: 'Both stories are about the Greenvale dairy, with the same owners and the same four years without a raise. Compare one thing: does the text go on to say what the government should do about pay, taxes or services?',
    prompt: { kind: 'which', option: 'C1.keep', answer: 'c-lk-sdco-sd' },
    difference: [
      'In Story A the text goes on to a plan. The owners keep the dairy, and it asks for a minimum wage that rises with prices and a tax on the dairy’s profits to pay for training. The answer is {a:C1.keep}, so this is {o:socdem}.',
      'In Story B the text stops after taking the workers’ side. It says nothing about who owns the dairy, about tax or about services. The answer is {a:C1.none}, so this is {o:classonly}.',
      'The complaint is word for word the same. What comes after it is different: a plan, or nothing.'
    ] }
]);
