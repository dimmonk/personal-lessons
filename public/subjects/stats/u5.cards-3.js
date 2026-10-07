// Statistical Claims, Unit Five, part one (third half): the third name (totals that hide a different mix).

FC.cards('stats', 'u5', [

  /* ---------- Simpson's paradox ---------- */
  { id: 'meet-simpson', kind: 'meet', outcome: 'simpson',
    link: 'The first two names were about one figure. This one is about two totals set side by side, and what is inside each.',
    case: 'simp-tutors', mark: 'C1',
    explain: [
      'Ms. Hale looks far better, but look inside the totals. Ms. Hale taught 90 students who were already doing well (72 passed, 80 in every 100) and 10 who were already failing (3 passed, 30 in every 100). Mr. Ruiz taught 10 who were doing well (9 passed, 90 in every 100) and 90 who were failing (45 passed, 50 in every 100).',
      'Group by group, Mr. Ruiz does better with both: 90 against 80, and 50 against 30. He has the lower total only because 90 of his 100 students were the kind who rarely pass. The totals show who each tutor had more than how well each taught.',
      'So the totals can’t rank the tutors: they didn’t teach the same mix of students.'
    ],
    spot: [
      { do: 'Find the two totals set side by side: 75 of 100 against 54 of 100.', why: 'A ranking built on totals is where this goes wrong.' },
      { do: 'Ask whether each side had the same mix: Ms. Hale’s students were already doing well, Mr. Ruiz’s were already failing.', why: 'Students who are doing well pass more often under any tutor.' },
      { do: 'Split each total by group and compare like with like: doing well against doing well, failing against failing.', why: 'A fair ranking sets easy against easy and hard against hard.' }
    ],
    feature: { step: 'C1', option: 'split' },
    name: 'This is {o:simpson}. A “paradox” is something that seems to contradict itself, and here one tutor does better with every group and still has the lower total.',
    act: [
      { do: 'Ask who or what is inside each total.', why: 'A total hides how many easy and hard ones it holds.' },
      { do: 'Look for the totals split by group, easy against easy and hard against hard.', why: 'That is the only fair way to rank them.' },
      { do: 'If you can’t get the split, say so: “Better overall, but is it the same mix?”', why: 'That one question is enough to slow a bad ranking down.' }
    ] },

  { id: 'check-simpson', kind: 'check', after: 'simpson',
    case: 'simp-phones',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common', 'split'] } }
]);
