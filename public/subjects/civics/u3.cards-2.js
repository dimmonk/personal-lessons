// Civics, Unit Three, part one (second half): the second name and the first look-alike pair.
// The app prints "how to tell them apart"; it is not typed here.
// A meet card: the story first, then the idea (explain), then how to spot it (spot), then the name (lesson standard section 20).

FC.cards('civics', 'u3', [

  /* ---------- Beyond Congress's power ---------- */
  { id: 'meet-beyondcong', kind: 'meet', outcome: 'beyondcong',
    link: 'The same start, a different ending: Congress passes a law with every vote in order, and the Constitution still does not allow it.',
    case: 'b-reading', mark: 'C1',
    explain: [
      'Nothing is wrong with the votes. What is wrong is the subject: what schools teach is not on the Constitution’s list, so each state decides for its own schools. Congress has no say, however the votes go.',
      'A law can fail the other way too. Its subject is on the list, but it takes away a right the Constitution protects: to speak, to worship, to publish or to gather peacefully. Either problem is enough, even if the President signs the bill.'
    ],
    spot: [
      { do: 'Find the law itself: ten named books for every school in every state.', why: 'A law that passed every vote can still be one Congress was not allowed to pass.' },
      { do: 'Ask what it is about: what schools teach.', why: 'That subject is not on the Constitution’s list, so each state decides.' },
      { do: 'Ask whether it takes away a right: here, nobody’s speech, worship, publishing or gathering is touched.', why: 'A law that takes one away fails even on a listed subject.' },
      { do: 'Stop at the first check that fails: here, the subject.', why: 'One failed check is enough.' }
    ],
    feature: { step: 'C1', option: 'barred' },
    name: 'This is {o:beyondcong}. It passed every vote and was still not allowed.' },

  { id: 'check-beyondcong', kind: 'check', after: 'beyondcong',
    case: 'k-march',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-enumerated-beyondcong', kind: 'lookalike', ledger: 'enumerated~beyondcong',
    h: 'One subject, the mail: with a right taken away and without',
    link: 'These are easy to mix up, because in both stories Congress passes a law with every vote in order. Here are two laws about the same subject.',
    cases: ['l-mail-rates', 'l-mail-ban'],
    instruction: 'Both stories are about the post office, and the mail is on the Constitution’s list. Compare one thing: does the law take away anyone’s right?',
    prompt: { kind: 'which', option: 'C1.barred', answer: 'l-mail-ban' },
    difference: [
      'In Story A the law sets one low price for sending a parcel. The mail is on the list and nobody loses a right, so it is {o:enumerated}.',
      'In Story B the law bars a magazine from the mail because of what it prints. The Constitution protects the right to publish, so it is {o:beyondcong}.',
      'Being on the list is only half of what a law needs: it must also take no right away.'
    ] }
]);
