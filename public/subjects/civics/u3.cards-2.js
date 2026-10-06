// Civics, Unit Three, part one (second half): the second name, a wrong idea about it, and the first look-alike pair.
// The app prints "how to tell them apart" and the side-by-side table; neither is typed here.

FC.cards('civics', 'u3', [

  /* ---------- Beyond Congress's power ---------- */
  { id: 'meet-beyondcong', kind: 'meet', outcome: 'beyondcong',
    link: 'The first name, {o:enumerated}, is for a law Congress was allowed to pass. The second of the five also begins with Congress passing a law, with every vote in order. This time the Constitution does not let Congress pass it.',
    case: 'b-reading', mark: 'C1',
    strip: [
      'Congress passes a law: the House and the Senate have both voted for the bill.',
      'The law is about what students read in school: ten named books, in every state.',
      'What schools teach is not on the Constitution’s list for Congress, so it is for the states to decide.',
      'No right is involved here: the only problem is the matter.',
      'Parents’ worry about reading is only the reason the bill exists.'
    ],
    explain: [
      'Look at what is the same as in the last case. Congress passed a law, and both chambers voted for it. Nothing about the vote is wrong. If the vote were all that mattered, this law would have the same name as the tax on airline tickets.',
      'The difference is the matter. The Constitution lists what Congress may make laws about, and schooling is not on the list. Congress has only the powers the Constitution gives it, so a matter that is not on the list is for the states to decide: each state decides what its own schools teach. Congress has no power over the matter, however the votes go.',
      'So a law can fail in a way that no vote can repair. It can pass both chambers and be signed by the President, and still be a law Congress was never allowed to pass. A person it harms can ask a judge to check it against the Constitution, which is where the first question puts a case that ends with a judge: {a:D1.courts}. This name is about the moment before that: Congress has passed the law, and the point is whether the Constitution let it.'
    ],
    feature: { step: 'C1', option: 'barred' },
    name: 'The name for this is {o:beyondcong}. “Beyond” says that the law lies outside the edge of what Congress is allowed to do. It is the opposite of the last name.' },

  { id: 'again-beyondcong', kind: 'again', outcome: 'beyondcong',
    link: 'The book-list case showed one way for a law to be outside Congress’s power: the matter is not on the list. There is a second way, and here it is. The first case gave you what to point to: {needs:beyondcong}.',
    first: 'b-reading', second: 'b-worship', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (school books, places of worship). Look at one thing only: whether the Constitution lets Congress pass this law.',
    prompt: { kind: 'phrase', answer: 'the House passed a bill that lets people hold a religious service only in a building a federal office has approved' },
    shared: [
      'In both cases Congress passed a law, with both chambers voting for it, and in both the Constitution does not let Congress pass it. But the reasons differ. In the first, the matter, what students read, is not on the list. In the second, the matter is a religious service, and the Constitution protects the right to worship. A law that takes that right away is not one Congress may pass, whatever the matter.',
      'So there are two ways to be outside Congress’s power: a matter that is not on the list, and a right that the law takes away. Either one is enough, and that is what {o:beyondcong} names. The stories share nothing else.'
    ] },

  { id: 'portrait-beyondcong', kind: 'portrait', outcome: 'beyondcong',
    link: 'You know what to point to, and that there are two ways to be outside the power. This card fills in the rest of the picture.',
    typical: [
      'There is a law, and Congress passed it. As with the last name, the votes are in order and the President may have signed it. Nothing about the passing is wrong.',
      'What is wrong is one of two things, and either is enough. Either the matter is not on the Constitution’s list for Congress: what schools teach, who may marry, the hours barbers work, the speed limit on a town’s own streets. Or the law takes away a right the Constitution protects: to speak, to worship, to publish or to gather peacefully.',
      'A law can be on a matter that is on the list and still take a right away. The list is one limit and the rights are another, and a law has to get past both.',
      'The words you hear are “Congress overstepped”, “the Constitution gives Congress no power to do that”, “that is for the states”. Sometimes the story only shows the law and its subject, and you have to hold the subject against the list yourself.',
      'The law is not a rumor: the House and the Senate really passed it. What it lacks is the power, and a court can strike it down in a real case.'
    ],
    not: 'A law that is unpopular, unwise or unfair is not {o:beyondcong} for that reason. What makes a law {o:beyondcong} is the Constitution’s list and its rights: the matter is not on the list, or a right is taken away.',
    wild: ['“Congress overstepped.”', '“It’s unconstitutional.”', '“The Constitution gives Congress no power to do that.”', '“That’s for the states, not for Washington.”'],
    self: 'In your own life you meet it when someone says that a new federal law reaches into something your state or your town decides, or into your freedom to speak, to worship, to publish or to gather. Whether they are right is the question this name asks.',
    ask: '“Is the matter on the Constitution’s list for Congress? Does the law take away a right?” If the matter is not on the list, or a right is taken away, the answer is {a:C1.barred}.' },

  { id: 'check-beyondcong', kind: 'check', after: 'beyondcong',
    case: 'k-march',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred'] } },

  { id: 'refute-valid', kind: 'refute', about: 'beyondcong',
    h: 'A wrong idea: “it passed, and the President signed it, so it is valid”',
    link: 'The last cards showed laws that passed every vote and were still outside what Congress may do. Many people take the vote for the whole test.',
    idea: '“If Congress passed it and the President signed it, it is a valid law. That is all it takes.”',
    verdict: 'This is wrong.',
    right: [
      'Passing both chambers and being signed is what a law goes through. It is not what makes Congress allowed to pass it. Congress has only the powers the Constitution gives it, and it may not take away a right the Constitution protects. A law that fails either test is a law Congress was not allowed to pass, however many votes it got, and a court can strike it down in a real case.',
      'So when you hear that a law is valid because it passed, go back to the question you have been asking: is the matter on the list, and does the law take away a right? If the matter is not on the list, or a right is taken away, the answer is {a:C1.barred}.'
    ],
    testedBy: ['claim-valid'] },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-enumerated-beyondcong', kind: 'lookalike', ledger: 'enumerated~beyondcong',
    h: 'One matter, the mail: with a right taken away and without',
    link: 'You have met both names on their own. They are easy to mix up, because in both Congress passes a law with every vote in order. This card puts them side by side, with two laws about the same matter.',
    cases: ['l-mail-rates', 'l-mail-ban'],
    instruction: 'Both cases are about the post office, and the mail is one of the matters on the Constitution’s list. Compare one thing: whether the law takes away anyone’s right.',
    prompt: { kind: 'which', option: 'C1.barred', answer: 'l-mail-ban' },
    difference: [
      'In Case A the matter is the mail, which is on the list, and the law only sets a price for sending a parcel. It takes no right away from anyone. The answer is {a:C1.listed}, and the case is {o:enumerated}.',
      'In Case B the matter is the mail too, and it is still on the list. But the law bars a magazine from the post because of what the magazine prints, and the Constitution protects the right to publish. The answer is {a:C1.barred}, and the case is {o:beyondcong}.',
      'So being on the list is only half of what a law needs. A law on a listed matter still has to take no right away. The matter does not tell you the name, and neither does the vote. Only the two tests together do.'
    ] }
]);
