// Political Ideologies, Unit Five, part two: the second name (rights protected, and a fair start for everyone), and the first look-alike pair.

FC.cards('ideology', 'u5', [

  /* ---------- Modern liberalism ---------- */
  { id: 'meet-modlib', kind: 'meet', outcome: 'modlib',
    link: 'The first name asked the government to protect rights and then step back. The second starts from the same rights and asks the government to go further.',
    case: 'i5-modlib-meet', mark: 'R1',
    strip: [
      'The text names freedoms like the ones in the first case: to speak, to believe and to keep what you earn. It asks the government to protect them.',
      'It then says that a right means little to a child who begins life with no school within reach and no doctor to call.',
      'It asks the government to give everyone a fair start: a school in every district, health care, help for anyone who loses work, and fair rules for the businesses that sell to us.',
      'It says that everyone is to pay for this together, through taxes.',
      'It does not say that any rule holds a group back, and it sets no one against anyone.'
    ],
    explain: [
      'Set this beside the street-music petition. Both put each person’s rights first, and both ask the government to protect them. If the text stopped there, you could not tell them apart. This one goes on to say that a freedom is worth less to someone who begins with nothing. A child who cannot read cannot use the right to speak. So the government should also pay for the schooling, the doctor and the help that let people use their rights, and everyone pays in through taxes.'
    ],
    feature: { step: 'R1', option: 'start' },
    name: 'The name for this is {o:modlib}. "Liberal" still means that each person’s freedom comes first. "Modern" is the word for the newer form of that view, which also asks the government to give everyone a fair start. The everyday word "liberal" is used for different things in different places, so go by what the text asks for, not by the word.' },

  { id: 'check-modlib', kind: 'check', after: 'modlib',
    case: 'i5-modlib-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start'] } },

  { id: 'look-clib-modlib', kind: 'lookalike', ledger: 'clib~modlib',
    link: 'These two start from the same place: each person’s rights. Here they are side by side, in one story.',
    cases: ['i5-lk-cm-clib', 'i5-lk-cm-modlib'],
    instruction: 'Both cases are about the same new clinic in Marrow, and in both the speaker says each person is free to choose their own doctor. Compare one thing: what the speaker wants the government to do about the clinic.',
    prompt: { kind: 'which', option: 'R1.start', answer: 'i5-lk-cm-modlib' },
    difference: [
      'In Case A the speaker wants the government to keep the courts open and see that contracts are kept, and otherwise to leave the clinic to those who run it. The answer is {a:R1.leave}, and the case is {o:clib}.',
      'In Case B the speaker wants the government to pay for a clinic in every district, with everyone paying through their taxes. A clinic is to be given. The answer is {a:R1.start}, and the case is {o:modlib}.',
      'The freedom to choose a doctor is the same in both. What differs is what is asked of the government once the freedom is protected: nothing more, or something given.'
    ] }
]);
