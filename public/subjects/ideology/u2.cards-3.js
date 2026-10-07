// Political Ideologies, Unit Two, part two (first half): the businesses pass to the government, and the pair that sets it beside the
// name before it.

FC.cards('ideology', 'u2', [

  /* ---------- Democratic socialism ---------- */
  { id: 'meet-demsoc', kind: 'meet', outcome: 'demsoc',
    link: 'In the texts so far the owners kept their businesses, or nothing was said about them. This one takes them away.',
    case: 'c-dm-ferry', mark: 'C1',
    explain: [
      'The ferry crews do not want the owners to keep the ferries. “Belong to the public” means the government runs them for the people who ride, and not for a shareholder’s profit.',
      'A text may want only the biggest businesses handed over, such as the railways or the banks. That is enough. It may also say how, as this one does by asking the voters, or say nothing about how.'
    ],
    spot: [
      { do: 'Check the owners lose the businesses: the ferries “should belong to the public”.', why: 'A tax would leave the ferries with their owners.' },
      { do: 'Find who takes over: the government, “run by the government for everyone”.', why: 'The aim is to run them for the people who use them, not for profit.' },
      { do: 'Look for how: “We will ask the voters”.', why: 'Voters can say no, so no party is seizing power.' }
    ],
    feature: { step: 'C1', option: 'public' },
    name: 'This is {o:demsoc}: the businesses, or the biggest of them, pass to the government, and no party seizes power to do it.' },

  { id: 'check-demsoc', kind: 'check', after: 'demsoc',
    case: 'c-dm-bank',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public'] } },

  /* ---------- The pair that both ask the government to act ---------- */
  { id: 'look-socdem-demsoc', kind: 'lookalike', ledger: 'socdem~demsoc',
    link: 'Both ask the government to act for the people who work in the businesses. Here is where they part.',
    cases: ['c-lk-sddm-sd', 'c-lk-sddm-dm'],
    instruction: 'Both stories are about the Redmoor private hospitals, and both stand with the nurses. Compare one thing: after the government has acted, who owns the hospitals?',
    prompt: { kind: 'which', option: 'C1.public', answer: 'c-lk-sddm-dm' },
    difference: [
      'In Story A the hospitals stay with their owners, and the government taxes their profits to pay for nurses’ pensions and training places. The owners still own them afterwards. The answer is {a:C1.keep}, so this is {o:socdem}.',
      'In Story B the hospitals are taken from the company and run by the government for everyone. The owners no longer own them. The answer is {a:C1.public}, so this is {o:demsoc}.',
      'A tax changes what the owners keep. A handover changes who the owner is. A text that asks for both is {o:demsoc}.'
    ] }
]);
