// Wealth Preservation, Unit Five, part one (second half): the leave-alone name, and the first look-alike pair.

FC.cards('wealth', 'u5', [

  /* ---------- Nothing more needed ---------- */
  { id: 'meet-simple', kind: 'meet', outcome: 'simple',
    link: 'The papers can also be in good order, and there is a name for that. You need it as much as the first.',
    case: 'm-anselm', mark: 'H1',
    strip: [
      'One couple, with a house and savings that come to $410,000.',
      'Their wills, 401(k) forms and powers of attorney were all renewed last spring.',
      'What they own is far below the tax-free limit for estate tax, and their children get on well.',
      'A stranger at a seminar says they need a family trust to save estate tax. The case gives no problem for it to answer.'
    ],
    explain: [
      'Look for what could go wrong, and ask whether you can point to it in the words of the case. The papers are not the problem: all three were renewed. The tax is not: the federal estate tax takes 40% only of what a person leaves above a tax-free limit, which is many times larger than $410,000, so the tax is $0. The people are not: the children get on well.',
      'A family trust would cost money to set up and every year to run, to answer a problem that nothing here shows. The honest answer is that nothing more needs doing. That is a real answer, and as common as the others. It does not say that nothing could ever go wrong. It says that in this case, nothing is shown.'
    ],
    feature: { step: 'H1', option: 'inorder' },
    name: 'The name for this is {o:simple}. It says the papers are current and nothing else in the case is in question, so there is nothing more to arrange.',
    act: [
      'Say no to the offer for now. Ask: “What could go wrong in my case that this answers, in numbers?” If the seller cannot say, you have your answer.',
      'Write down the date you checked the papers, and look again after the next marriage, divorce, birth or death, or a big change in what you own.'
    ] },

  { id: 'check-simple', kind: 'check', after: 'simple',
    case: 'c-fenella',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-basicdocs-simple', kind: 'lookalike', ledger: 'basicdocs~simple',
    link: 'These two are easy to mix up, because both are about the same three papers and the same kind of person.',
    cases: ['la-form-stale', 'la-form-current'],
    instruction: 'Both cases are about Rosalind, who divorced six years ago and has the same condo and the same savings. Compare one thing: what the case says about the papers.',
    prompt: { kind: 'which', option: 'H1.inorder', answer: 'la-form-current' },
    difference: [
      'In Case A the form on Rosalind’s 401(k) still names her former husband, so the plan would pay him if she died. The answer is {a:H1.papers}, and the case is {o:basicdocs}.',
      'In Case B she changed the form the month after the divorce, and rewrote her will and signed {t:poa} at the same time. All three papers match her life, and the estate is far below the limit. The answer is {a:H1.inorder}, and the case is {o:simple}.',
      'The divorce, the condo and the savings are the same in both. One sentence about one paper differs, so a story alone never gives you the name.'
    ] }
]);
