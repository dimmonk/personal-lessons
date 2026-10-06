// Statistical Claims, Unit One, part two (continued): the fifth answer (nothing goes wrong) and the two look-alike pairs that set a sound
// claim beside the same claim with something wrong in it (who was counted, and what the claim says caused what).
// This answer is taught as a family like any other (lesson standard K2.9, P26): it has its own meet and check.

FC.cards('stats', 'u1', [

  /* ---------- The fifth answer: nothing goes wrong ---------- */
  { id: 'meet-holds', kind: 'meet', family: 'holds',
    link: 'Four answers say that a part of a claim goes wrong. The fifth is what is left when you have put the question to every part, in order, and none of them fits.',
    case: 'gate-poll', mark: 'S1',
    strip: [
      'There is a figure: 31% of the 1,000 adults who answered said they smoke.',
      'Who is in it: adults whose phone numbers were drawn by lottery from the full list for the county, each tried up to six times, so almost everyone drawn was reached.',
      'What it counts: whether a person says they smoke, asked once, the same way for everyone. Nothing about it changed, and nobody was paid or judged on the answer.',
      'Nothing is set beside it, and no cause is claimed: the claim says how many smoke, not whether that rose or why.'
    ],
    explain: [
      'This answer needs no new idea. It is what you reach when the other four have each been put to the claim and none has found anything. Nobody was favored in who was picked, few were missed and not for a reason that has anything to do with smoking, and there are enough people that one or two more or fewer would not move the figure.',
      'No part goes wrong, so the answer is that nothing does. That does not mean the figure is exactly right. It means that, as far as the case shows, the claim holds up for what it says, and it goes no further: it says how many adults smoke, and nothing about change or cause.'
    ],
    feature: { step: 'S1', option: 'holds' },
    name: 'The answer, and the name, is {a:S1.holds}. It is not a failure to find an answer: it tells you the claim is safe to use for what it says. Finding nothing wrong is something you can only do by looking, so point to the words that show each part holding.' },

  { id: 'check-holds', kind: 'check', after: 'holds',
    case: 'gate-trial',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show how the two groups were formed? Tap them.',
           answer: 'It drew 40 names from a hat to choose which classrooms use a new reading program for a year.' } },

  /* ---------- The look-alike pairs with a sound claim ---------- */
  { id: 'look-counted-holds', kind: 'lookalike', ledger: 'counted~holds',
    link: 'A sound claim and a faulty claim can sound the same. The best way to see the difference is to take the very same claim with and without the problem.',
    cases: ['gate-cafe-few', 'gate-cafe-followed'],
    instruction: 'Both cases are about the same café, the same mailing list and the same figure, 90%. Compare one thing: how many of the people asked are in the figure, and what was done about the ones who did not reply?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-cafe-followed' },
    difference: [
      'In Case A the café asked 800 people and heard from 72, which is 9 in 100. Nothing was done about the other 728. People with strong opinions are likelier to reply than people without them, so the 72 are not a fair picture of the 800, and the owner then speaks for "our regulars". The answer is {a:S1.counted}.',
      'In Case B the café asked the same 800 people, rang everyone who had not replied, and heard from 720, which is 9 in 10. Almost everybody asked is in the figure, and the owner speaks only for the mailing list. Every part holds. The answer is {a:S1.holds}.',
      'The figure is the same in both: 90% love the new menu. A figure from 72 of 800 and a figure from 720 of 800 can look exactly alike in a headline.'
    ] },

  { id: 'look-cause-holds', kind: 'lookalike', ledger: 'cause~holds',
    link: 'A claim of cause can be sound, and the way to tell is how the groups were formed.',
    cases: ['gate-gym-chosen', 'gate-gym-lottery'],
    instruction: 'Both cases are about the same gym, the same morning class and the same weight loss. Compare one thing: how did members come to be in the class and in the group without it?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-gym-lottery' },
    difference: [
      'In Case A members chose their own class, and the keenest members are the ones who pick the morning class. They could have lost more weight than the others whichever class they were in. The claim says the class made the difference, and the case shows another way to explain the same result. The answer is {a:S1.cause}.',
      'In Case B the gym drew names by lottery. Nobody chose, so keenness cannot be the reason the groups differ, and the other things that could matter are as likely to be in one group as in the other. The claim says the class made the difference, and nothing in the case offers another way. Every part holds. The answer is {a:S1.holds}.',
      'The figures are the same in both: 6 pounds lost against 2. The only difference is who decided which group each member was in. When the members decide, something else can explain the result. When a lottery decides, very little can.'
    ] }
]);
