// Statistical Claims, Unit Six, part two (second half): Reverse causation and the two look-alike pairs that most often get mixed up.

FC.cards('stats', 'u6', [

  /* ---------- Reverse causation ---------- */
  { id: 'meet-reverse', kind: 'meet', outcome: 'reverse',
    link: 'In the last name something else sat behind both things. In the next, nothing else is needed. The two things are the same two the claim names, and the arrow the claim draws between them may point the wrong way.',
    case: 'k-cameras', mark: 'K1',
    strip: [
      'Two things go together: streets with many cameras are the streets with more break-ins.',
      'The claim says the first causes the second: "Cameras bring burglars to a street."',
      'The figures do not say which came first.',
      'The account does: on 7 of the 9 camera-heavy streets with a break-in, the cameras went up after it.'
    ],
    explain: [
      'When a claim says that one thing caused another, it draws an arrow from the first to the second. The figures do not draw it: they are a snapshot. 9 of 12 camera-heavy streets had a break-in, and 3 of 12 streets with few cameras did, so the two really do go together. But a snapshot shows no order.',
      'The account fills in the order. On 7 of the 9 camera-heavy streets with a break-in, residents say the first cameras went up after the break-in. Those 7 break-ins cannot be the cameras’ doing, because the cameras were not there yet. The arrow runs the other way: a break-in leads neighbors to buy cameras. Nothing else is needed to explain the figures.'
    ],
    feature: { step: 'K1', option: 'backward' },
    name: [
      'The name for this is {o:reverse}. "Reverse" means the arrow runs the other way. "Causation" means one thing making another happen. So the name says: the cause runs the other way.',
      'The words that carry this kind of claim are "brings", "attracts", "leads to" and "makes", with the figure set out as if the order were obvious.'
    ],
    act: 'Ask which came first and how anyone knows. Look for a date, a record, or a follow-up that shows the order. If the account cannot say, do not act on the arrow: treat the claim as not shown.' },

  { id: 'check-reverse', kind: 'check', after: 'reverse',
    case: 'k-fires',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'behind', 'backward', 'extreme'] } },

  /* ---------- The look-alike pairs ---------- */
  { id: 'look-nocontrol-confound', kind: 'lookalike', ledger: 'nocontrol~confound',
    link: 'The first name of this unit and the third both begin with people who chose to take part in something. This card puts them side by side.',
    cases: ['k-gym-all', 'k-gym-two'],
    instruction: 'Both cases are about the same gym and the same personal-training program, and in both the members who signed up lost weight. Compare one thing: whether anyone who did not sign up is counted beside them.',
    prompt: { kind: 'which', option: 'K1.behind', answer: 'k-gym-two' },
    difference: [
      'In Case A the gym counts only the 90 members who signed up. Nobody who went without is counted, so nothing shows what the members would have lost anyway. The answer is {a:K1.anyway}, and the case is {o:nocontrol}.',
      'In Case B the gym counts the 410 members who did not sign up as well, and they lost 1 pound. Now two groups are set side by side, and the account shows something else that differs between them: 70 of the 90 are new members, against 60 of the 410, and new members lose weight fastest in their first year. The answer is {a:K1.behind}, and the case is {o:confound}.'
    ] },

  { id: 'look-confound-reverse', kind: 'lookalike', ledger: 'confound~reverse',
    link: 'These two answers look alike. In both, a snapshot shows two things going together, and a claim says the first caused the second. This card shows what separates them.',
    cases: ['k-trees-lots', 'k-trees-first'],
    instruction: 'Both cases are about the same city, the same trees and the same home prices. Compare one thing: what the account shows beside the figures. Is it something else that differs between the streets, or the order in which things happened?',
    prompt: { kind: 'which', option: 'K1.backward', answer: 'k-trees-first' },
    difference: [
      'In Case A the account shows that most of the tree-lined streets are in older neighborhoods, where the lots are twice as large. Large lots sell for more and have room for trees, so lot size is something else that differs between the streets and could bring about the high prices on its own. The answer is {a:K1.behind}, and the case is {o:confound}.',
      'In Case B the account shows an order: the city planted trees on a street only after its prices passed $400,000, because the city pays for trees out of property tax. Nothing else is needed. The high prices came first and led to the trees. The answer is {a:K1.backward}, and the case is {o:reverse}.'
    ] },

  { id: 'look-confound-fair', kind: 'lookalike', ledger: 'confound~cause_ok',
    link: 'A claim built on two groups can have groups that chose or were put where they are, or groups that a draw formed, and a draw is what the first question answers with {a:S1.holds}. The figures of the two can look the same. This card puts them side by side.',
    cases: ['k-quit-chose', 'k-quit-lottery'],
    instruction: 'Both cases are about the same health department and the same quit-smoking text program, and in both the program group did better. Compare one thing: who decided which smokers were in the program.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'k-quit-lottery' },
    difference: [
      'In Case A smokers signed up themselves, and 240 of the 300 who signed up had already picked a quit date, against 70 of the 700 who did not. Readiness to quit is something else that differs between the groups and could bring about the result alone. The first answer is {a:S1.cause}, and the second answer, to {q:K1}, is {a:K1.behind}.',
      'In Case B the department had places for half of the 800 smokers who asked to join, and a draw from a hat decided who got them. Readiness to quit is no likelier to be in one group than the other. All 800 were reached a year later and counted in the same way, and 30 in 100 against 20 in 100 is a difference the claim can rest on. The answer is {a:S1.holds}, because the claim rests on {plain:cause_ok}.',
      'Had only the smokers in the program been counted, with no group beside them, the claim would be {o:nocontrol}, not {o:cause_ok}: nothing would show what happens without it.'
    ] }
]);
