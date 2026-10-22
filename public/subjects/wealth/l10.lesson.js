// Wealth, lesson 10: Who inherits, and who can act (part 10, unit D). The beneficiary page decides, not the will, even after a divorce (research
// W29, W58); each page checked for someone named, the right person and a backup (a judgement call on the backup, W58); a will for what has no
// page and a durable power of attorney for who can act (W59); the federal estate tax line checked, usually left (W30, W60), and a spouse who
// is not a US citizen near the line sent to an estate lawyer (W60). The rule with the novice's "my will covers it" (P29), a worked household
// (P10), one with the last step left (P17), households alone with the fault on a different page each time and one to leave (P12, W2, P26),
// the papers and the line, mixed with earlier lessons (P22), the learner's own accounts listed by what decides (W34, W35), and the check.
FC.lesson('wealth', {
  id: 'l10', part: '10', title: 'Who inherits, and who can act', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 10), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Maya divorced Chris years ago, remarried, and wrote a will leaving everything to Sam. Her 401(k)’s beneficiary page still says Chris.',
    'If Maya died today, the plan would start from its page, and Sam and Chris might end up in court. Here you check every page, and the papers that name who can act for you.'
  ],
  flow: [
    { title: 'The beneficiary pages',
      show: [
        { kind: 'prose', text: [
          'A 401(k), an IRA, a life insurance policy (and a bank or brokerage account you marked payable on death) goes by its beneficiary page first, not by your will. The Supreme Court has held a plan may pay the person on its page even after a divorce. There are exceptions (a 401(k) owes a current spouse unless they signed a waiver; many states cancel an ex-spouse on an IRA or a life policy at divorce), but sorting them out can take a lawyer and a court. A fixed page does not.',
          'Check each page against your family: someone is named (not blank, which leaves it to the plan’s own default rule, and not “my estate”, which sends it through the will instead of straight to a person); still the right person after a marriage, a divorce, a birth or a death; and a backup is named. Each page on its own: one, two or all may need a fix. Fix it on the account’s website, or put a day for it in your calendar.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“My will says who gets everything, so I am covered.”',
          'The will covers only what has no beneficiary page. Each account with a page follows its page first.'] }
      ] },
    { worked: 'w-heirs' },
    { set: { items: [{ gen: 'g-heirs-estate', n: 1 }, { gen: 'g-heirs-fine', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [[{ gen: 'g-heirs-ex', n: 1 }, { gen: 'g-heirs-fine', n: 1 }], { gen: 'g-heirs-blank', n: 1 }, { gen: 'g-heirs-backup', n: 1 }], order: 'shuffle' } },
    { title: 'The papers, and the estate tax',
      show: [
        { kind: 'prose', text: [
          'A will covers what has no beneficiary page. A durable power of attorney names who can act on your money if you cannot; it stays in force if you become unable to decide. Without one, a court may have to name someone.',
          'Federal estate tax reaches only estates over the line below. Far under it: leave it, and giving money away to shrink the estate does nothing for this tax. Over it, or near it with a spouse who is not a US citizen (the usual tax break for leaving money to a spouse needs a special trust then): an estate lawyer, one who works on both sides of the border if anything is in Canada.'] },
        { kind: 'ref', ref: 'estateTax' },
        { kind: 'ref', ref: 'gift' }
      ] },
    { set: { items: [[{ gen: 'g-papers-poa', n: 1 }, { gen: 'g-papers-fine', n: 1 }], { gen: 'g-papers-large', n: 1 }, { gen: 'g-heirs-estate', n: 1 }],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'], share: 0.2 } } },
    { own: 'sheet', model: 'w-heirs', work: 'heirs' }
  ],
  check: {
    items: [{ gen: 'g-heirs-ex', n: 1 }, { gen: 'g-heirs-estate', n: 1 }, { gen: 'g-heirs-blank', n: 1 }, { gen: 'g-heirs-backup', n: 1 }, { gen: 'g-heirs-fine', n: 1 },
      { gen: 'g-papers-will', n: 1 }, { gen: 'g-papers-poa', n: 1 }, { gen: 'g-papers-fine', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'pages', right: { min: 4 }, of: 'each page fixed or left, the whole household right' },
      { ask: 'missing', right: { min: 3 }, of: 'the paper that is missing' },
      { where: { call: 'leave' }, wrong: { max: 0 } },
      { slip: 'will-trusted', max: 0 }]
  }
});
