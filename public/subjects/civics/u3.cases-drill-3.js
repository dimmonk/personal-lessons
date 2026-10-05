// Civics, Unit Three: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names
// sounds like (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's
// "what you must be able to point to" lines). ask.type 'option': the key's question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.
// The claims come from the old course's faulty claims: 1 (the President makes the laws), 7 (a law is valid once Congress
// passed it and the President signed it). The rest are written for the five names of this unit.

FC.cases('civics', 'u3', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-enumerated', use: 'drill', kind: 'reverse', outcome: 'enumerated', expect: 'hear',
    options: [
      { text: '"The bill puts a tax on every ticket, and taxing is something Congress may do."', voice: 'enumerated' },
      { text: '"Congress cannot tell every school what to read. That is for the states."', voice: 'beyondcong' },
      { text: '"The programme is dead: nobody voted the money."', voice: 'purse' },
      { text: '"She cannot start until the Senate votes to approve her."', voice: 'confirm' }
    ],
    why: 'It is a law passed by both chambers on a matter the Constitution lists, here a tax, with no right taken away.' },

  { id: 'rev-beyondcong', use: 'drill', kind: 'reverse', outcome: 'beyondcong', expect: 'hear',
    options: [
      { text: '"It passed both chambers, but the Constitution gives Congress no power to ban a peaceful march."', voice: 'beyondcong' },
      { text: '"Setting the price of a stamp is part of Congress’s job."', voice: 'enumerated' },
      { text: '"The House has voted to charge the judge, and the Senate trial is next."', voice: 'impeach' },
      { text: '"Congress left the money out, so the work cannot start."', voice: 'purse' }
    ],
    why: 'The speaker says that a law Congress passed is one the Constitution does not let it pass: here a right is taken away.' },

  { id: 'rev-purse', use: 'drill', kind: 'reverse', outcome: 'purse', expect: 'find',
    options: [
      { text: 'The bill that settles this year’s spending has no money for the clinic.', voice: 'purse' },
      { text: 'The Senate voted 60 to 38 to approve the President’s choice.', voice: 'confirm' },
      { text: 'The House voted to charge the official, and the trial is set.', voice: 'impeach' },
      { text: 'The bill puts a small tax on bottled water.', voice: 'enumerated' }
    ],
    why: 'That detail is Congress deciding whether the government may spend money on something: leaving the money out.' },

  { id: 'rev-confirm', use: 'drill', kind: 'reverse', outcome: 'confirm', expect: 'find',
    options: [
      { text: 'The President has chosen a judge, and the Senate has not yet voted.', voice: 'confirm' },
      { text: 'The bill bans a religious service unless a federal office has approved the building.', voice: 'beyondcong' },
      { text: 'Congress cut the money for park rangers by a third.', voice: 'purse' },
      { text: 'The judge already has the job, and the House has charged her with taking money.', voice: 'impeach' }
    ],
    why: 'That detail is the Senate’s vote on a person the President put forward, which the choice needs before it takes effect.' },

  { id: 'rev-impeach', use: 'drill', kind: 'reverse', outcome: 'impeach', expect: 'hear',
    options: [
      { text: '"The House voted to charge him, and the Senate will try him next month."', voice: 'impeach' },
      { text: '"The Senate approved the President’s pick for ambassador."', voice: 'confirm' },
      { text: '"Congress passed a law on the mail, and the Constitution lists the mail."', voice: 'enumerated' },
      { text: '"A federal law cannot ban a magazine for what it prints."', voice: 'beyondcong' }
    ],
    why: 'The speaker describes the House charging an official and the Senate trying the charge.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo', use: 'claim',
    text: '"It is a stupid law, and Congress should never have passed it. That makes it beyond Congress’s power."',
    ask: { type: 'missing', name: 'beyondcong' },
    fault: 'The claim points at a law being unwise and stops there. A law is not {o:beyondcong} for that reason: what makes it so is the Constitution’s list and its rights. Nothing in the claim shows a matter that is not on the list, or a right the law takes away, and without one of those the name does not apply.',
    corrected: 'It may well be an unwise law. It is {o:beyondcong} only if the matter is not on the Constitution’s list, or the law takes away a right such as speaking, worshipping, publishing or gathering.' },

  { id: 'claim-president', use: 'claim',
    text: '"The President makes the laws. Congress just talks about them."',
    ask: { type: 'option', step: 'D1', answer: 'congress' },
    fault: 'The claim gives the President a decision that is Congress’s. A law is voted by the House and the Senate. The President signs it or refuses to sign it, and then the offices carry it out, but the vote is where the choice is made. When the last decision in the case is a vote in the House or the Senate, the answer is {a:D1.congress}.',
    corrected: 'Congress makes the laws: the House and the Senate vote on a bill. The President signs it or refuses to, and the offices of the President carry it out.' },

  { id: 'claim-valid', use: 'claim',
    text: '"A law is valid as long as Congress passed it and the President signed it. There is nothing more to ask."',
    ask: { type: 'missing', name: 'enumerated' },
    fault: 'The claim points at two things every law goes through, the votes and the signature, and stops there. Neither says whether the Constitution let Congress pass the law. Nothing in the claim shows the matter being on the list, or that no right is taken away, and without that nothing here is {o:enumerated}.',
    corrected: 'Congress passed it and the President signed it. That tells you the law went through its votes, not that Congress was allowed to pass it. It is {o:enumerated} only if the matter is on the Constitution’s list and the law takes no right away.' },

  { id: 'claim-unfunded', use: 'claim',
    text: '"The money for the library programme ran out, so the programme closed. That is the power of the purse."',
    ask: { type: 'missing', name: 'purse' },
    fault: 'The claim points at a programme closing for lack of money and stops there. It never shows Congress deciding about the money. The money may have run out because it was spent, or because an office used it up, and neither is Congress deciding. Without a vote, a cut or a gap left by Congress in the case, nothing here is {o:purse}.',
    corrected: 'The money for the library programme ran out and the programme closed. That is {o:purse} only if the case shows Congress deciding about the money: voting it, cutting it or leaving it out.' },

  { id: 'claim-impeached', use: 'claim',
    text: '"The House impeached the secretary last month, so that is the end of the secretary’s time in office. Impeachment means removal."',
    ask: { type: 'missing', name: 'impeach' },
    fault: 'The claim treats the vote in the House as the end. When the House votes to charge an official, nobody has been removed. The claim says nothing about a Senate trial, or about a conviction, and a conviction is what removes anyone. {o:impeach} covers the charge and the trial, and it does not say the official is gone.',
    corrected: 'The House voted to charge the secretary, and that is the first step. The secretary stays in office unless the Senate tries the charge and convicts. {o:impeach} is the name for the charge and the trial, and a story that stops at the charge has not told you how it ended.' },

  { id: 'claim-pact', use: 'claim',
    text: '"The President signed the treaty on Monday, so it is now in force. The Senate’s vote is just a formality."',
    ask: { type: 'missing', name: 'confirm' },
    fault: 'The claim stops at the President’s signature. Signing is the President’s part, and a {t:treaty} binds nobody until the Senate has voted to approve it. Nothing in the claim shows the vote, and the vote is what {o:confirm} names. The vote is not a formality: the Senate can say no.',
    corrected: 'The President signed the {t:treaty} on Monday. It is in force only if the Senate votes to approve it. That vote is {o:confirm}.' }
]);
