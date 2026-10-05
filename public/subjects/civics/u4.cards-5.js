// Civics, Unit Four, part three (first half): refusing to sign a law, and forgiving a federal crime.

FC.cards('civics', 'u4', [

  /* ---------- Refusing to sign a law ---------- */
  { id: 'meet-veto', kind: 'meet', outcome: 'veto',
    link: 'The last two names are about what the President can do when others have already acted. The first is what the President can do when Congress has passed a bill that the President does not want.',
    case: 'e-parkpay', mark: 'E1',
    strip: [
      'Congress passed a bill that raises the pay of park staff. Both the House and the Senate voted for it, and it reached the President’s desk.',
      'The President did not sign it. The President wrote a letter that says why, and sent the bill back to Congress.',
      'Nobody votes in the case after that, and no judge is asked anything. The last thing in it is what the President decided about the bill.'
    ],
    explain: [
      'A bill that both the House and the Senate have passed goes to the President. If the President signs it, it becomes a law. But the President does not have to sign. The President may refuse, and send the bill back to Congress with a letter of objections. That is the whole of this name.',
      'Refusing does not end the bill for ever. Congress can pass it anyway, if two-thirds of the House and two-thirds of the Senate vote for it again. That is a high bar. The vote to pass it again would be a new decision by lawmakers, and a different case.',
      'The President can also do nothing. If the President neither signs the bill nor sends it back within ten days, Sundays not counted, while Congress is in session, the bill becomes a law without a signature. So doing nothing and refusing are different acts, with different results.',
      'Notice the signature again. A signature on a bill that Congress passed changes nothing about what the law says, which is why a signed law stays with the lawmakers in the key’s first question. A refusal is different. It is a decision of the President’s own, and it stops the bill from becoming a law unless Congress votes again.'
    ],
    feature: { step: 'E1', option: 'sendback' },
    name: 'The name for this is {o:veto}: the President’s refusal to sign a bill, and the return of the bill to Congress.' },

  { id: 'again-veto', kind: 'again', outcome: 'veto',
    link: 'The park pay rise gave you what to point to: {needs:veto}. Here is a second case with a different bill.',
    first: 'e-parkpay', second: 'e-cancerfund', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the story (park pay, cancer research). Look at one thing only: what the President does with a bill that Congress has passed.',
    prompt: { kind: 'phrase', answer: 'sent the bill back without signing it' },
    shared: [
      'In both cases Congress has passed a bill, and the bill has reached the President. In both, the President does not agree with it, and says so. In both, the President does not sign and sends the bill back to Congress. Neither bill becomes a law by the President’s act.',
      'The two stories share nothing else. One is about pay and the other about research money. So this is not about money, or about parks. It holds wherever the President will not sign a bill that Congress has passed, and sends it back. That is what {o:veto} names.'
    ] },

  { id: 'portrait-veto', kind: 'portrait', outcome: 'veto',
    link: 'What you point to is a bill that Congress passed, and the President refusing to sign it. Here is the rest of the picture.',
    typical: [
      'A bill comes first: both the House and the Senate have passed it. The case may say "the bill reached the President’s desk". Without a bill that Congress has passed, there is nothing to refuse.',
      'The refusal is the President’s own act, and it comes with objections, often in a letter. The words you hear are "vetoed", "sent it back", "returned it unsigned", "the President will not sign it".',
      'It is not always the end of the bill. Congress may vote again. If two-thirds of the House and two-thirds of the Senate vote for the bill again, it becomes a law over the President’s refusal. If they do not, the bill dies.',
      'Doing nothing is not a refusal. A bill that the President neither signs nor sends back within ten days, Sundays not counted, while Congress is in session, becomes a law without a signature.'
    ],
    not: 'Signing a bill is not this name. A signature on a law the lawmakers passed leaves the decision with them. And Congress voting to pass a bill again over the refusal is a vote by lawmakers, and not something the President does.',
    wild: ['"The President vetoed the bill."', '"Overridden."', '"Returned to Congress unsigned."', '"The President will not sign it."'],
    self: 'You meet it whenever the news says that a bill is "on the President’s desk" and the President says what will happen to it.',
    ask: '"Has Congress already passed this, and is the President declining to sign it?" If so, the case is {o:veto}.' },

  { id: 'check-veto', kind: 'check', after: 'veto',
    case: 'e-postoffices',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback'] } },

  /* ---------- Forgiving a federal crime ---------- */
  { id: 'meet-pardon', kind: 'meet', outcome: 'pardon',
    link: 'The last of the six is another thing the President can do alone, and it is about a person, not a law.',
    case: 'e-taxpardon', mark: 'E1',
    strip: [
      'A man was found guilty in a federal court of mailing false tax forms. That is a federal crime, and the judge gave him a sentence.',
      'The President signed a paper that forgives him.',
      'The man left the prison that evening. The sentence was lifted.',
      'No law is being put into practice, and no judge is asked anything after that. The last thing in the case is what the President did.'
    ],
    explain: [
      'The President can forgive a person for a federal crime: a crime against a law of the whole country, tried in a federal court. When the President does, the punishment is lifted, or it never comes, if the person has not yet been tried. That is the whole of this name.',
      'It is the President’s own decision. No judge is involved in it.',
      'It does not say that the man was innocent. He was found guilty, and he stays a person who was found guilty. What changes is that the punishment is lifted.',
      'It reaches federal crimes only. A person convicted under a state’s own law cannot ask the President. Only that state can forgive the crime, through its governor.'
    ],
    feature: { step: 'E1', option: 'forgive' },
    name: 'The name for this is {o:pardon}: the President’s forgiveness of a federal crime.' },

  { id: 'again-pardon', kind: 'again', outcome: 'pardon',
    link: 'The false tax forms gave you what to point to: {needs:pardon}. Here is a second case in which the person has not yet been to trial.',
    first: 'e-taxpardon', second: 'e-parkbirds', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the crime (false forms, trapped birds) and how far the case has gone (a man in prison, a woman before her trial). Look at one thing only: what the President does about a person who broke a federal law.',
    prompt: { kind: 'phrase', answer: 'Before her trial began, the President signed a paper that forgives her for the crime' },
    shared: [
      'In both cases someone has broken a federal law: false forms in the post, trapped birds in a national park. In one the person has been found guilty and is in prison. In the other the person has only been charged. In both, the President signs a paper that forgives the person, and no punishment follows, or none is left.',
      'The two stories share nothing else. So this is not about tax, parks or prison. It holds wherever the President forgives someone for breaking a federal law. That is what {o:pardon} names.'
    ] },

  { id: 'portrait-pardon', kind: 'portrait', outcome: 'pardon',
    link: 'What you point to is a federal crime, and the President forgiving it. Here is the rest of the picture.',
    typical: [
      'A federal crime comes first, and a person who was charged with it or found guilty of it. The words you hear are "pardoned", "forgiven", "the sentence no longer applies".',
      'The President’s act can come after a trial, during a sentence, or before a trial. In every case it lifts the punishment, or means that it never comes.',
      'It is not a finding of innocence. A person who is pardoned was charged or found guilty, and the President’s act does not say that they did nothing.',
      'No judge is involved in the President’s act itself. A judge may have decided the case earlier, and the President’s act comes after.',
      'It reaches federal crimes only. If the law the person broke is a state’s, the President cannot forgive it, and the matter would be for the state’s governor.'
    ],
    not: 'A person leaving prison is not enough. For this name the President has to be the one who forgives, and the crime has to be against a federal law. A governor who forgives a crime against the state’s own law is a state’s decision, and it is another case.',
    wild: ['"The President pardoned..."', '"Granted a pardon."', '"A presidential pardon."', '"The sentence no longer applies."'],
    self: 'You hear about it whenever the news says that someone has been "pardoned" and asks whether the President should have done it.',
    ask: '"Was this a federal crime, and has the President forgiven it?" If so, the case is {o:pardon}.' },

  { id: 'check-pardon', kind: 'check', after: 'pardon',
    case: 'e-pilot',
    ask: { type: 'option', step: 'E1', among: ['carryout', 'newduty', 'military', 'abroad', 'sendback', 'forgive'] } },

  { id: 'refute-pardon', kind: 'refute', about: 'pardon',
    h: 'A wrong idea about whom the President can forgive',
    link: 'The picture of {o:pardon} said that it reaches federal crimes only. That limit is easy to miss, and it needs putting right here.',
    idea: '"The President can pardon anyone who has been convicted of a crime."',
    verdict: 'This is wrong.',
    right: [
      'The President’s forgiveness reaches federal crimes only: crimes against the laws of the whole country. Many crimes are against a state’s own law, and for those only the state can forgive, through its governor.',
      'So when a case says that someone was pardoned, ask first which law the person broke. If it was a federal law, the President’s forgiveness is {o:pardon}. If it was a state’s law, the President cannot forgive it, and the case would be about the governor, whose decision belongs to the state.'
    ],
    testedBy: ['e-claim-pardon'] }
]);
