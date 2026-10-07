// Civics, Unit Four, part two (third half): refusing to sign a law, and forgiving a federal crime.

FC.cards('civics', 'u4', [

  /* ---------- Refusing to sign a law ---------- */
  { id: 'meet-veto', kind: 'meet', outcome: 'veto',
    link: 'The last two are what the President can do when others have already acted. First: Congress passed a bill, and the President does not want it.',
    case: 'e-parkpay', mark: 'E1',
    explain: [
      'A bill that both the House and the Senate passed goes to the President. If the President signs it, it becomes a law. This President did not sign: a letter says why, and the bill goes back to Congress. That refusal is the whole of this name.',
      'It does not kill the bill for good. Congress can pass it anyway if two-thirds of the House and two-thirds of the Senate vote for it again, but that is a new decision by lawmakers. And doing nothing is not a refusal: if the President neither signs nor returns the bill within ten days, Sundays not counted, while Congress is in session, it becomes a law without a signature.'
    ],
    spot: [
      { do: 'Find the bill Congress passed: the pay rise for park staff.', why: 'This acts on a bill, not on a law already in force.' },
      { do: 'Find the President refusing to sign it: “would not sign the bill”.', why: 'Saying nothing for ten days lets the bill become a law.' },
      { do: 'Check the bill goes back to Congress: with a letter of objections.', why: 'Sending it back is what makes the refusal real.' }
    ],
    feature: { step: 'E1', option: 'sendback' },
    name: 'This is {o:veto}. The President refuses to sign a bill and sends it back to Congress.' },

  { id: 'check-veto', kind: 'check', after: 'veto',
    case: 'e-postoffices',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback'] } },

  /* ---------- Forgiving a federal crime ---------- */
  { id: 'meet-pardon', kind: 'meet', outcome: 'pardon',
    link: 'The last one is also something the President can do alone, and it is about a person, not a bill.',
    case: 'e-taxpardon', mark: 'E1',
    explain: [
      'The President can forgive a person for a federal crime: a crime against a law of the whole country, tried in a federal court. The punishment is lifted, or never comes if the person has not been tried yet. The President decides alone, and no judge is involved. It does not say the man was innocent: he stays a person who was found guilty.',
      'It covers federal crimes only. A person convicted under a state’s own law cannot ask the President, because only that state’s governor can forgive it. So when a story says someone was pardoned, first ask which law they broke.'
    ],
    spot: [
      { do: 'Find the crime, and check it is federal: false tax forms, found guilty in a federal court.', why: 'Only the governor can forgive a crime against a state’s own law.' },
      { do: 'Find the person who broke the law: the man in prison.', why: 'This acts on a person, not on a bill.' },
      { do: 'Find the President forgiving it: the President signs a paper, and he leaves prison that evening.', why: 'The punishment is lifted, and no judge is asked anything.' }
    ],
    feature: { step: 'E1', option: 'forgive' },
    name: 'This is {o:pardon}. The President forgives a federal crime.' },

  { id: 'check-pardon', kind: 'check', after: 'pardon',
    case: 'e-pilot',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback', 'forgive'] } }
]);
