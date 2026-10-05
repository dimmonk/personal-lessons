// Psychology, Unit Two, part one (second half): the second name, and the first look-alike pair.

FC.cards('psychology', 'u2', [

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'meet-sunkcost', kind: 'meet', outcome: 'sunkcost',
    link: '{o:dissonance} looks back at something done and gives a reason why it is fine. The second of the five also looks back, at something already spent, and uses it differently: as the reason for what to do next.',
    case: 'renovation', mark: 'R1',
    strip: [
      'Something has been spent that cannot be got back: two years and £40,000.',
      'There is a next step to decide: stop, or spend another £30,000.',
      'The next £30,000 would add only about £10,000 to what the house is worth.',
      'The reason Dan gives for going on says nothing about the next £30,000. It is the two years and the £40,000.'
    ],
    explain: [
      'The £40,000 and the two years are gone whichever choice Dan and Aisha make now. Stopping does not lose them a second time, and going on does not bring them back.',
      'So the only thing their choice can change is what happens next: whether another £30,000 is worth what it buys. Dan’s reasoning never looks at that. It points backward, at what is already spent, and gives that as the reason to spend more.'
    ],
    feature: { step: 'R1', option: 'backward' },
    name: 'The name for this is {o:sunkcost}. The name is built from two phrases. A "sunk cost" is money, time or effort that is already spent and cannot be got back. A "fallacy" is a mistake in reasoning that feels like a sound argument. This one feels very sound, because nobody likes waste.' },

  { id: 'again-sunkcost', kind: 'again', outcome: 'sunkcost',
    link: 'The renovation gave you what to point to: {needs:sunkcost}. Here it is again with no money in it at all.',
    first: 'renovation', second: 'film', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the size of what is at stake (a house, an evening). Look at one thing only: what reason is given for carrying on.',
    prompt: { kind: 'phrase', answer: "We've already sat through an hour" },
    shared: [
      'In both cases something is already spent and cannot be got back: two years and £40,000, or one hour. In both there is a next step still to be decided: £30,000 more, or two more hours. And in both the reason for going on is the part already spent, not the part still to come.',
      'What is spent can be money, time or effort. It makes no difference which. That is what {o:sunkcost} names.'
    ] },

  { id: 'portrait-sunkcost', kind: 'portrait', outcome: 'sunkcost',
    link: 'As with {o:dissonance}, what you point to is not the whole picture. Here is the rest.',
    typical: [
      'It always sits at a choice about what comes next: go on or stop, buy more or sell, stay or leave. Without a next step to decide, what is spent has nothing to be the reason for.',
      'The reason given points backward. Listen to the tense: "I’ve already…", "after all we’ve put in…", "we’ve come this far…". A reason that looks forward sounds different: "one more year and I am qualified".',
      'Facts about the next step are often right there in the case: a builder’s figures, a forecast, a price. The person does not argue with them. Their reasoning never touches them, because the reason they give is about the past.',
      'The more that has been spent, the stronger the pull. That is why it shows up around long projects, long relationships and long queues.',
      'Underneath there is usually a wish not to have made a mistake. Stopping would mean saying that what was spent was wasted, and going on puts that moment off.'
    ],
    not: 'Carrying on is not the fallacy. People finish degrees, houses and films for good reasons. If the reason given is about what the remaining part will cost and what it will bring, what is already spent is not doing the work, and the name does not apply. The same goes for stopping. What matters is the reason, not the choice.',
    wild: ['"We’ve come too far to turn back."', '"I’ve already paid for it."', '"I can’t have done all that for nothing."', '"After everything we’ve put in."'],
    self: 'In your own life it tends to gather around things you no longer enjoy but have paid for: a subscription, a course, a book you are two hundred pages into.',
    ask: '"From where I stand today, is what I still have to put in worth what I will get for it?" For Dan and Aisha: is another £30,000 worth £10,000 of extra value? No. The £40,000 is not in that sum at all.' },

  { id: 'check-sunkcost', kind: 'check', after: 'sunkcost',
    case: 'classes',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward'] } },

  { id: 'refute-waste', kind: 'refute', about: 'sunkcost',
    h: 'A wrong idea: "if I stop now, everything I put in is wasted"',
    link: 'The picture of {o:sunkcost} said that stopping feels like admitting waste. That feeling rests on an idea nearly everyone holds, and the idea is what drives {o:sunkcost}.',
    idea: '"If I stop now, everything I’ve put in will have been wasted."',
    verdict: 'This is wrong.',
    right: [
      'What you have put in is spent whether you stop or go on. Stopping does not waste it, and going on does not rescue it. If the thing was a mistake, it was a mistake on the day the money or the time went, not on the day you stop.',
      'The only thing still in your hands is what you spend next. So the useful question is never "how much have I put in?" It is the question you have just met: "from where I stand today, is what I still have to put in worth what I will get for it?" If the answer is yes, go on, and for that reason. If it is no, nothing already spent can change it.'
    ],
    testedBy: ['claim-waste'] },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-dissonance-sunkcost', kind: 'lookalike', ledger: 'dissonance~sunkcost',
    link: 'You have met both names on their own. They are easy to mix up, because both look back at something the person has already done or spent. This card puts them side by side.',
    cases: ['ticket-fever', 'ticket-tout'],
    instruction: 'Both cases are about Rosa and the price of a concert ticket. Compare one thing: the reason she gives. In one case it says that something she did is fine. In the other it gives money already spent as the reason for her next step.',
    prompt: { kind: 'which', option: 'R1.backward', answer: 'ticket-fever' },
    difference: [
      'In Case A the £80 is spent, and there is a next step to decide: go out with a fever, or stay in. The reason Rosa gives for going is the £80. The key’s answer is {a:R1.backward}, and the case is {o:sunkcost}.',
      'In Case B Rosa has done something she said she would never do: she paid a reseller. The reason she gives ("a once-in-a-lifetime show") is not a reason for any next step. It says the purchase is fine. The key’s answer is {a:R1.addstory}, and the case is {o:dissonance}.'
    ] }
]);
