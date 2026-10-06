// Civics, Unit Three, part one (second half): the second name and the first look-alike pair.
// The app prints "how to tell them apart" and the side-by-side table; neither is typed here.

FC.cards('civics', 'u3', [

  /* ---------- Beyond Congress's power ---------- */
  { id: 'meet-beyondcong', kind: 'meet', outcome: 'beyondcong',
    link: 'The second of the five also begins with Congress passing a law, with every vote in order. This time the Constitution does not let Congress pass it.',
    case: 'b-reading', mark: 'C1',
    strip: [
      'Congress passes a law: the House and the Senate have both voted for the bill.',
      'The law is about what students read in school: ten named books, in every state.',
      'What schools teach is not on the Constitution’s list for Congress, so it is for the states to decide.',
      'No right is involved here: the only problem is the matter.'
    ],
    explain: [
      'Nothing about the vote is wrong. If the vote were all that mattered, this law would have the same name as the tax on airline tickets. The difference is the matter. Schooling is not on the Constitution’s list, so each state decides what its own schools teach, and Congress has no power over it, however the votes go.',
      'A law can also fail the other way: it is on a listed matter but takes away a right the Constitution protects, such as the right to speak, to worship, to publish or to gather. Either failure is enough. A law that fails either way can pass both chambers and be signed by the President, and still be one Congress was never allowed to pass.'
    ],
    feature: { step: 'C1', option: 'barred' },
    name: 'The name for this is {o:beyondcong}. “Beyond” says that the law lies outside the edge of what Congress is allowed to do. It is the opposite of the last name.' },

  { id: 'check-beyondcong', kind: 'check', after: 'beyondcong',
    case: 'k-march',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-enumerated-beyondcong', kind: 'lookalike', ledger: 'enumerated~beyondcong',
    h: 'One matter, the mail: with a right taken away and without',
    link: 'They are easy to mix up, because in both Congress passes a law with every vote in order. Here are two laws about the same matter.',
    cases: ['l-mail-rates', 'l-mail-ban'],
    instruction: 'Both cases are about the post office, and the mail is one of the matters on the Constitution’s list. Compare one thing: whether the law takes away anyone’s right.',
    prompt: { kind: 'which', option: 'C1.barred', answer: 'l-mail-ban' },
    difference: [
      'In Case A the matter is the mail, which is on the list, and the law only sets a price for sending a parcel. It takes no right away from anyone. The answer is {a:C1.listed}, and the case is {o:enumerated}.',
      'In Case B the matter is the mail too, but the law bars a magazine from the post because of what the magazine prints, and the Constitution protects the right to publish. The answer is {a:C1.barred}, and the case is {o:beyondcong}.',
      'Being on the list is only half of what a law needs: it must also take no right away.'
    ] }
]);
