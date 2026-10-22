// Wealth, lesson 9: Foreign holdings under US rules (part 9, unit D). A US resident's accounts outside the US: the FBAR on the highest balances
// summed (research W31, W50), Form 8938 on the December 31 and highest sums against the filing status's lines (W31, W51), then the flags a
// cross-border preparer takes (a TFSA, W52; a Canadian fund outside an RRSP, W32), and an RRSP's automatic deferral, which raises no flag but
// still counts (W33, W51); the learner raises flags and books the specialist, never files (W61, the plan's step 6). The rule with the novice's
// wrong idea (P29), a worked household (P10), one with the last steps left (P17), the look-alikes side by side (a TFSA beside an RRSP alone,
// a household over the FBAR line beside one under it, P12), mixed with earlier lessons (P22), the learner's own accounts, and the check.
FC.lesson('wealth', {
  id: 'l9', part: '9', title: 'Foreign holdings under US rules', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 9), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Priya moved from Toronto for a job. She kept her checking account, her RRSP and her TFSA in Canada, and filed her first US tax return without a word about them.',
    'Living in the US, you report accounts abroad to the US, and some of them are taxed in ways Canada does not warn you about. Here you raise the flags; a specialist does the filing.'
  ],
  flow: [
    { title: 'The reports',
      show: [
        { kind: 'prose', text: [
          'Add up each account’s highest balance in the year, in dollars. Over $10,000 together, at any time: file an FBAR (FinCEN Form 114: FinCEN is the Treasury office that takes it), online, not with your tax return, by April 15 (October 15 at the latest).',
          'Form 8938 goes with your tax return when either of two totals passes its line: the December 31 total, or the highest total. Check both; one over is enough.'] },
        { kind: 'document', form: 'table', title: 'Form 8938, living in the US: over either line', head: ['Filing status', 'December 31', 'At any time'],
          rows: [{ id: 'l1', cells: ['Filing alone', '$50,000', '$75,000'] }, { id: 'l2', cells: ['Married filing jointly', '$100,000', '$150,000'] }] },
        { kind: 'ref', ref: 'fbar' },
        { kind: 'ref', ref: 'form8938' }
      ] },
    { title: 'The flags',
      show: [
        { kind: 'prose', text: [
          'An RRSP or RRIF: federal US tax on its growth waits until money comes out, with nothing to file for that (some states do not follow). It still counts in both totals. Money taken out has Canadian tax withheld: check with the preparer first.',
          'A TFSA: Canada does not tax what it earns, but the US may, every year. Money added while you live outside Canada is taxed by Canada at 1% a month.',
          'A Canadian mutual fund or ETF outside an RRSP: usually a passive foreign investment company under US tax: its gains can be taxed at the top rate, plus interest.',
          'Anything due or flagged: book a preparer who works on both sides of the border. Your job is to raise it, not to file it.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“My Canadian accounts are Canada’s business. The US only cares about US accounts.”',
          'Living in the US, you report accounts abroad, and missing the FBAR can bring penalties.'] }
      ] },
    { worked: 'w-foreign' },
    { set: { items: [{ gen: 'g-foreign-rrsp', n: 1 }, { gen: 'g-foreign-small', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-foreign-tfsa', n: 1 }, { gen: 'g-foreign-rrsp', n: 1 }], [{ gen: 'g-foreign-fund', n: 1 }, { gen: 'g-foreign-small', n: 1 }]],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8'], share: 0.2 } } },
    { own: 'sheet', model: 'w-foreign', work: 'foreign' }
  ],
  check: {
    items: [{ gen: 'g-foreign-tfsa', n: 1 }, { gen: 'g-foreign-fund', n: 1 }, { gen: 'g-foreign-rrsp', n: 1 }, { gen: 'g-foreign-small', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'highest', right: { min: 3 }, of: 'the highest balances added up' },
      { ask: 'fbar', wrong: { max: 0 }, of: 'whether an FBAR is due' },
      { ask: 'flag', right: { min: 3 }, of: 'the account a preparer looks at' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } }]
  }
});
