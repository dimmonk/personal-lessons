// Civics, Unit Four, part two (third half): refusing to sign a law, and forgiving a federal crime.

FC.cards('civics', 'u4', [

  /* ---------- Refusing to sign a law ---------- */
  { id: 'meet-veto', kind: 'meet', outcome: 'veto',
    link: 'The last two names are about what the President can do when others have already acted. The first is what the President can do when Congress has passed a bill that the President does not want.',
    case: 'e-parkpay', mark: 'E1',
    strip: [
      'Congress passed a bill that raises the pay of park staff. The House and the Senate both voted for it, and it reached the President’s desk.',
      'The President did not sign it. A letter says why, and the bill goes back to Congress.',
      'Nobody votes after that. The last thing in the case is what the President decided about the bill.'
    ],
    explain: [
      'A bill that both the House and the Senate have passed goes to the President. If the President signs it, it becomes a law. But the President does not have to sign. The President may refuse, and send the bill back to Congress with a letter of objections. That is the whole of this name.',
      'Refusing does not end the bill for ever. Congress can pass it anyway, if two-thirds of the House and two-thirds of the Senate vote for it again, but that vote would be a new decision by lawmakers, and a different case. And doing nothing is not a refusal: if the President neither signs the bill nor sends it back within ten days, Sundays not counted, while Congress is in session, it becomes a law without a signature.'
    ],
    feature: { step: 'E1', option: 'sendback' },
    name: 'The name for this is {o:veto}: the President’s refusal to sign a bill, and the return of the bill to Congress.' },

  { id: 'check-veto', kind: 'check', after: 'veto',
    case: 'e-postoffices',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback'] } },

  /* ---------- Forgiving a federal crime ---------- */
  { id: 'meet-pardon', kind: 'meet', outcome: 'pardon',
    link: 'The last of the six is another thing the President can do alone, and it is about a person, not a law.',
    case: 'e-taxpardon', mark: 'E1',
    strip: [
      'A man was found guilty in a federal court of mailing false tax forms, and the judge gave him a sentence.',
      'The President signed a paper that forgives him, and he left the prison that evening.',
      'No law is being put into practice, and no judge is asked anything after that. The last thing in the case is what the President did.'
    ],
    explain: [
      'The President can forgive a person for a federal crime: a crime against a law of the whole country, tried in a federal court. The punishment is lifted, or it never comes, if the person has not yet been tried. It is the President’s own decision, and no judge is involved. It does not say the man was innocent: he stays a person who was found guilty.',
      'It reaches federal crimes only. A person convicted under a state’s own law cannot ask the President. Only that state can forgive the crime, through its governor. So when a case says that someone was pardoned, ask first which law the person broke.'
    ],
    feature: { step: 'E1', option: 'forgive' },
    name: 'The name for this is {o:pardon}: the President’s forgiveness of a federal crime.' },

  { id: 'check-pardon', kind: 'check', after: 'pardon',
    case: 'e-pilot',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback', 'forgive'] } }
]);
