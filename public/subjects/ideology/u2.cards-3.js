// Political Ideologies, Unit Two, part two (first half): the businesses pass to the government, and the pair that sets it beside the
// name before it.

FC.cards('ideology', 'u2', [

  /* ---------- Democratic socialism ---------- */
  { id: 'meet-demsoc', kind: 'meet', outcome: 'demsoc',
    link: 'In every text so far the owners kept their businesses, or the text said nothing about them. This text does not leave them where they are: the businesses pass out of the owners’ hands.',
    case: 'c-dm-ferry', mark: 'C1',
    strip: [
      'There are two groups in the text: the ferry company’s owners, who take the fares, and the crews, who take the risks. The text is on the crews’ side.',
      'It says the ferries should belong to the public and be run by the government for everyone. The owners do not keep them.',
      'It says how this will come about: by asking the voters to put a government in place that will do it.'
    ],
    explain: [
      'Here the text says the owners should not keep the ferries. "Belong to the public" means that everyone is the owner, through the government, and the aim is that the ferries are run for the people who use them and not for a shareholder’s profit.',
      'Some texts ask only for the biggest businesses to pass to the government, such as the railways or the banks, and leave the small ones alone. That is enough for this answer.',
      'This text also says how: through the voters. A text that says nothing about how is still this name, as long as it does not ask for a party to seize power or for the government to be got rid of.'
    ],
    feature: { step: 'C1', option: 'public' },
    name: 'The name for this is {o:demsoc}: the businesses, or the biggest of them, pass to the government. "Democratic" says that no party takes power by force or rules alone.' },

  { id: 'check-demsoc', kind: 'check', after: 'demsoc',
    case: 'c-dm-bank',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public'] } },

  /* ---------- The pair that both ask the government to act ---------- */
  { id: 'look-socdem-demsoc', kind: 'lookalike', ledger: 'socdem~demsoc',
    link: 'Both of these ask the government to do something for the people who work in the businesses, and both can ask for pensions, health care and fair pay. Here is where they part.',
    cases: ['c-lk-sddm-sd', 'c-lk-sddm-dm'],
    instruction: 'Both cases are about the Redmoor private hospitals, and both stand with the nurses. Compare one thing: after the government has acted, who owns the hospitals?',
    prompt: { kind: 'which', option: 'C1.public', answer: 'c-lk-sddm-dm' },
    difference: [
      'In Case A the hospitals can stay with their owners, so long as the government taxes their profits to pay for nurses’ pensions and training places. The owners still own them afterwards. The answer is {a:C1.keep}, and the case is {o:socdem}.',
      'In Case B the hospitals are to be taken from the company and run by the government for everyone. After the government acts, the owners no longer own them. The answer is {a:C1.public}, and the case is {o:demsoc}.',
      'A tax changes what the owners keep. A handover changes who the owner is. A text that asks for both is {o:demsoc}.'
    ] }
]);
