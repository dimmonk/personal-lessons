// Statistical Claims, Unit Five, part one (third half): the third name (totals that hide a different mix).

FC.cards('stats', 'u5', [

  /* ---------- Simpson's paradox ---------- */
  { id: 'meet-simpson', kind: 'meet', outcome: 'simpson',
    link: 'The first two names were about a figure for one thing. The third is about two totals set side by side, and what each of them is made of.',
    case: 'simp-tutors', mark: 'C1',
    strip: [
      'There are two totals, set side by side as a ranking: 75 of 100 students passed with Ms. Hale, 54 of 100 with Mr. Ruiz. Families are told to choose Ms. Hale.',
      'Each total is made of two kinds of student: those already doing well, who pass easily, and those already failing, who pass with difficulty.',
      'The tutors have very different mixes: Ms. Hale has mostly the first kind and Mr. Ruiz mostly the second.'
    ],
    explain: [
      'Hale looks far better, but ask what each total is made of. Ms. Hale taught 90 students who were already doing well, and 72 passed (80 of every 100), and 10 who were already failing, and 3 passed (30 of every 100). Mr. Ruiz taught 10 who were doing well, and 9 passed (90 of every 100), and 90 who were failing, and 45 passed (50 of every 100).',
      'Kind of student by kind of student, Mr. Ruiz does better with both: 90 against 80, and 50 against 30. He still has the lower total, because 90 of his 100 students were the kind who rarely pass. A total counts each group in proportion to how many are in it, and what decided these totals was how many of each kind each tutor had.',
      'So the totals cannot rank the tutors, because the tutors did not teach the same mix. To read them fairly you need each tutor’s figure split by kind of student.'
    ],
    feature: { step: 'C1', option: 'split' },
    name: 'The name for this is {o:simpson}. A "paradox" is something that seems to contradict itself, and here one tutor does better with every kind of student and still has the lower total.',
    act: 'Do not choose between two things by their totals alone when each deals with different kinds of people or jobs. Ask what each total is made of, and look for the totals split by kind, easy against easy and hard against hard. If you cannot get the split, say so: "Better overall, but is it the same mix?"' },

  { id: 'check-simpson', kind: 'check', after: 'simpson',
    case: 'simp-phones',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common', 'split'] } }
]);
