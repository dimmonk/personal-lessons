// Statistical Claims, Unit One, part two (continued): the fifth answer (nothing goes wrong) and the two look-alike pairs that set a sound
// claim beside the same claim with something wrong in it (who was counted, and what caused what).
// This answer is taught as a family like any other (lesson standard K2.9, P26): it has its own meet and check.

FC.cards('stats', 'u1', [

  /* ---------- Nothing goes wrong ---------- */
  { id: 'meet-holds', kind: 'meet', family: 'holds',
    link: 'Last answer: a claim that checks out in every part. It is what is left when none of the other four fits.',
    case: 'gate-poll', mark: 'S1',
    explain: [
      'The health office did its homework. It phoned adults whose numbers were drawn by lottery from the whole county, and it kept trying until almost all of them answered. It asked one question, the same way, of everyone. And it claims only how many adults smoke, not why and not whether that is rising.',
      'This does not mean the number is exactly right: the office itself says "give or take three points". It means the claim is safe to use for what it says, and it goes no further.'
    ],
    spot: [
      { do: 'Check who is in the number: phone numbers drawn by lottery, nearly all reached.', why: 'Nobody was picked by hand, and few were missed.' },
      { do: 'Check what is counted: whether a person says they smoke, asked the same way every time.', why: 'Nothing about the counting changed, and nobody could push it.' },
      { do: 'Check what it is set beside: nothing, because the claim is only how many smoke.', why: 'A claim that stays with its own number needs nothing beside it.' },
      { do: 'Check for a claim of cause: there is none.', why: 'With no cause claimed, there is nothing for something else to explain.' },
      { do: 'Find the exact words that show each part holding.', why: 'You can only find nothing wrong by looking.' }
    ],
    feature: { step: 'S1', option: 'holds' },
    name: 'This is {a:S1.holds}. It is not a failure to find an answer: it tells you the claim is safe for what it says.' },

  { id: 'check-holds', kind: 'check', after: 'holds',
    case: 'gate-trial',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show that nobody chose which classrooms got the program? Tap them.',
           answer: 'It drew 40 names from a hat to choose which classrooms use a new reading program for a year.' } },

  /* ---------- The look-alike pairs with a sound claim ---------- */
  { id: 'look-counted-holds', kind: 'lookalike', ledger: 'counted~holds',
    link: 'A sound claim and a shaky one can sound the same. The way to see the difference is to take the same claim with and without the problem.',
    cases: ['gate-cafe-few', 'gate-cafe-followed'],
    instruction: 'Both stories are about the same café, the same mailing list and the same 90%. Compare one thing: how many of the people asked are in the number, and what was done about the ones who did not reply?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-cafe-followed' },
    difference: [
      'In Story A the café asked 800 people and heard from 72, and nobody chased the other 728. People with strong opinions reply more often, so the 72 are not a fair picture of the 800, and the owner then speaks for all "regulars". That is {a:S1.counted}.',
      'In Story B the café rang everyone who had not replied and heard from 720 of the 800. Almost everyone asked is in the number, and the owner speaks only for the mailing list. That is {a:S1.holds}.',
      'The number is the same in both: 90%. In a headline, 72 of 800 and 720 of 800 look exactly alike.'
    ] },

  { id: 'look-cause-holds', kind: 'lookalike', ledger: 'cause~holds',
    link: 'A claim of cause can be sound. The way to tell is how the groups were formed.',
    cases: ['gate-gym-chosen', 'gate-gym-lottery'],
    instruction: 'Both stories are about the same gym, the same morning class and the same weight loss. Compare one thing: how did members end up in the class and in the group without it?',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'gate-gym-lottery' },
    difference: [
      'In Story A members picked their own class, and the keenest members pick the morning class. They could have lost more weight in any class. That is {a:S1.cause}.',
      'In Story B the gym drew names by lottery. Nobody chose, so keenness cannot be why the groups differ, and the story offers no other explanation. That is {a:S1.holds}.',
      'The numbers are the same in both: 6 pounds lost against 2. What differs is who decided each member’s group. When members decide, something else can explain the result. When a lottery decides, almost nothing can.'
    ] }
]);
