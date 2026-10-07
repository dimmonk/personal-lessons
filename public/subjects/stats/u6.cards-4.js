// Statistical Claims, Unit Six, part two (second half): Reverse causation and the look-alike pairs that most often get mixed up.

FC.cards('stats', 'u6', [

  /* ---------- Reverse causation ---------- */
  { id: 'meet-reverse', kind: 'meet', outcome: 'reverse',
    link: 'Next: two things that go together, where the arrow may point the wrong way.',
    case: 'k-cameras', mark: 'K1',
    explain: [
      'When someone says one thing caused another, they draw an arrow from the first to the second. The figures do not draw it: they are a snapshot. 9 of 12 camera-heavy streets had a break-in, against 3 of 12 streets with few cameras, so the two really do go together. But a snapshot shows no order.',
      'The residents supply the order. On 7 of the 9 camera-heavy streets with a break-in, the first cameras went up after it. Those 7 break-ins cannot be the cameras’ doing, because the cameras were not there yet. The arrow runs the other way: a break-in makes neighbors buy cameras.'
    ],
    spot: [
      { do: 'Find the two things that go together: camera-heavy streets and break-ins.', why: 'The figures show they go together, not which one leads.' },
      { do: 'Find the claim that the first caused the second: “Cameras bring burglars to a street.”', why: 'That is the arrow the claim draws.' },
      { do: 'Look for the order: on 7 of the 9 streets, the cameras went up after the break-in.', why: 'What came later cannot have caused what came earlier.' }
    ],
    feature: { step: 'K1', option: 'backward' },
    name: 'This is {o:reverse}. “Reverse” means the arrow runs the other way: the break-ins led to the cameras.',
    act: [
      { do: 'Ask which came first, and how anyone knows.', why: 'A date, a record or a follow-up shows the order. The figures alone do not.' },
      { do: 'If nothing shows the order, do not act on the arrow.', why: 'Treat the claim as not shown.' }
    ] },

  { id: 'check-reverse', kind: 'check', after: 'reverse',
    case: 'k-fires',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'behind', 'backward', 'extreme'] } },

  /* ---------- The look-alike pairs ---------- */
  { id: 'look-nocontrol-confound', kind: 'lookalike', ledger: 'nocontrol~confound',
    link: 'Both of these start with people who chose to take part. The test is whether anyone who did not take part is counted.',
    cases: ['k-gym-all', 'k-gym-two'],
    instruction: 'Both stories are about the same gym and the same personal-training program, and in both the members who signed up lost weight. Compare one thing: whether anyone who did not sign up is counted beside them.',
    prompt: { kind: 'which', option: 'K1.behind', answer: 'k-gym-two' },
    difference: [
      'In Story A the gym counts only the 90 members who signed up. Nobody who went without is counted, so nothing shows what they would have lost anyway. The answer is {a:K1.anyway}, which is {o:nocontrol}.',
      'In Story B the gym also counts the 410 members who did not sign up, and they lost 1 pound. Now two groups are side by side, and something else differs between them: 70 of the 90 are new members, against 60 of the 410, and new members lose weight fastest. The answer is {a:K1.behind}, which is {o:confound}.'
    ] },

  { id: 'look-confound-reverse', kind: 'lookalike', ledger: 'confound~reverse',
    link: 'In both of these, figures show two things going together, and someone says the first caused the second. What the story adds beside the figures tells them apart.',
    cases: ['k-trees-lots', 'k-trees-first'],
    instruction: 'Both stories are about the same city, the same trees and the same home prices. Compare one thing: what the story shows beside the figures. Is it something else that differs between the streets, or the order things happened in?',
    prompt: { kind: 'which', option: 'K1.backward', answer: 'k-trees-first' },
    difference: [
      'In Story A, most of the tree-lined streets are in older neighborhoods, where the lots are twice as large. Large lots sell for more and have room for trees, so lot size could produce the high prices on its own. The answer is {a:K1.behind}, which is {o:confound}.',
      'In Story B, the city planted trees on a street only after its prices passed $400,000. The high prices came first and led to the trees, and nothing else is needed. The answer is {a:K1.backward}, which is {o:reverse}.'
    ] },

  { id: 'look-confound-fair', kind: 'lookalike', ledger: 'confound~cause_ok',
    link: 'In both of these, the group in the program did better. What differs is who decided who got in.',
    cases: ['k-quit-chose', 'k-quit-lottery'],
    instruction: 'Both stories are about the same health department and the same quit-smoking text program, and in both the program group did better. Compare one thing: who decided which smokers were in the program.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'k-quit-lottery' },
    difference: [
      'In Story A the smokers signed up themselves, and 240 of the 300 who signed up had already picked a quit date, against 70 of the 700 who did not. Being ready to quit differs between the groups and could produce the result alone. So Story A does not get {a:S1.holds}. It gets {a:S1.cause}, and then {a:K1.behind}.',
      'In Story B a draw from a hat decided who got the 400 places, so being ready to quit is no likelier in one group than the other. All 800 were reached a year later and counted the same way, so 30 in 100 against 20 in 100 is a difference the claim can rest on. The answer is {a:S1.holds}, because chance formed the groups.',
      'If the department had counted only the smokers in the program, with no one beside them, this would be {o:nocontrol}, not {o:cause_ok}: there would be nothing to measure the 30 in 100 against.'
    ] }
]);
