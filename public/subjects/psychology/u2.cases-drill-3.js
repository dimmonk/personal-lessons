// Psychology, Unit Two: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names
// sounds like (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's
// "what you must be able to point to" lines). ask.type 'option': the key's question is asked of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('psychology', 'u2', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-dissonance', use: 'drill', kind: 'reverse', outcome: 'dissonance', expect: 'hear',
    options: [
      { text: '"I’d had a terrible day, so it doesn’t really count."', voice: 'dissonance' },
      { text: '"I’ve paid for the year, so I’m going."', voice: 'sunkcost' },
      { text: '"I checked, and I was wrong."', voice: 'fair' },
      { text: '"I knew which one I wanted before I looked at the others."', voice: 'motivated' }
    ],
    why: 'It is a reason given after the act for why the act is fine ("it doesn’t really count").' },

  { id: 'rev-sunkcost', use: 'drill', kind: 'reverse', outcome: 'sunkcost', expect: 'hear',
    options: [
      { text: '"I’ve come this far, so I may as well finish."', voice: 'sunkcost' },
      { text: '"It was only a small one. It doesn’t count."', voice: 'dissonance' },
      { text: '"That report was written by people with an axe to grind."', voice: 'confbias' },
      { text: '"I looked at the numbers, and I was wrong."', voice: 'fair' }
    ],
    why: 'It gives what is already spent ("this far") as the reason for the next step ("finish").' },

  { id: 'rev-confbias', use: 'drill', kind: 'reverse', outcome: 'confbias', expect: 'find',
    options: [
      { text: 'She had made her choice the week before the review began.', voice: 'motivated' },
      { text: 'He asked where the figures against his view came from, and never asked that of the figures for it.', voice: 'confbias' },
      { text: 'She gave what she had already paid as her reason for carrying on.', voice: 'sunkcost' },
      { text: 'He said which result had changed his mind.', voice: 'fair' }
    ],
    why: 'That detail is the harder test for one side: a question put to the evidence against the view that the evidence for it never had to answer.' },

  { id: 'rev-motivated', use: 'drill', kind: 'reverse', outcome: 'motivated', expect: 'find',
    options: [
      { text: 'She read both reports and asked the same questions of each.', voice: 'fair' },
      { text: 'He had told a friend which one he would pick before he read any of the reviews.', voice: 'motivated' },
      { text: 'He said one bad result proved nothing, a week after saying one good result proved everything.', voice: 'confbias' },
      { text: 'She said it was fine because everyone else does it.', voice: 'dissonance' }
    ],
    why: 'That detail shows the answer chosen before the search began. Whatever the reviews said, they could only add support.' },

  { id: 'rev-fair', use: 'drill', kind: 'reverse', outcome: 'fair', expect: 'hear',
    options: [
      { text: '"I’ve put too much into this to change course now."', voice: 'sunkcost' },
      { text: '"I just need a couple more reasons to back this up."', voice: 'motivated' },
      { text: '"I didn’t expect that result, and I’ve checked it twice. I’ll have to think again."', voice: 'fair' },
      { text: '"It was only the once. It hardly matters."', voice: 'dissonance' }
    ],
    why: 'The speaker has met a fact they did not expect, tested it, and is letting their view go where it points.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo', use: 'claim',
    text: '"She sold the flat at a loss after ten years. That’s the sunk cost fallacy."',
    ask: { type: 'missing', name: 'sunkcost' },
    fault: 'The claim points at money lost and stops there. Losing money is not {o:sunkcost}, and neither is stopping. The name goes with the answer {a:R1.backward}, and she did not keep going. Nothing in the claim shows her reasoning at all.',
    corrected: 'She sold the flat at a loss after ten years. That tells you what she decided, not how she reasoned. It would be {o:sunkcost} only if she had refused to sell, and had given the ten years or the money already paid as her reason.' },

  { id: 'claim-mismatch', use: 'claim',
    text: '"He says he cares about the climate, and he flies every month. Classic cognitive dissonance reduction."',
    ask: { type: 'missing', name: 'dissonance' },
    fault: 'The claim points at two things that do not fit, what he says and what he does, and stops there. It never shows him giving a reason why the flying is fine. Two things that do not fit are not yet {o:dissonance}. They are not even {t:cd}, which is a discomfort he may or may not feel.',
    corrected: 'He says he cares about the climate, and he flies every month. Those two do not fit. It becomes {o:dissonance} only if he gives a reason why the flying is fine after all.' },

  { id: 'claim-waste', use: 'claim',
    text: '"If she leaves the course now, the two years she has done will have been for nothing."',
    ask: { type: 'option', step: 'R1', answer: 'backward' },
    fault: 'The speaker is reasoning on her behalf, and the reason is the two years already spent. Those are spent whether she stays or leaves.',
    corrected: 'The two years are spent whether she stays or leaves. What she can still decide is the next two, so the question is what those would cost her and what they would bring.' },

  { id: 'claim-suits', use: 'claim',
    text: '"Of course she thinks the merger was a good idea. She was promoted because of it. That’s motivated reasoning."',
    ask: { type: 'missing', name: 'motivated' },
    fault: 'The claim says where she ended up and what she gained. It never shows a search she set out on, or an answer chosen before one. Ending on an answer that suits you is not {o:motivated}.',
    corrected: 'She gained from the merger, which is a reason to look at how she reached her view. It is {o:motivated} only if she set out to settle the question, had chosen her answer before she began, and collected only support for it.' }
]);
