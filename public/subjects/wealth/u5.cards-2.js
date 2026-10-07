// Wealth Preservation, Unit Five, part one (second half): the leave-alone name, and the first look-alike pair.

FC.cards('wealth', 'u5', [

  /* ---------- Nothing more needed ---------- */
  { id: 'meet-simple', kind: 'meet', outcome: 'simple',
    link: 'The papers can also be in good order. That has a name too, and you will use it as often as the first.',
    case: 'm-anselm', mark: 'H1',
    explain: [
      'Ask what could go wrong, then look in the story for the words that show it. The papers are fine: all three were renewed. The tax is $0: the federal estate tax takes 40% only of what a person leaves above a tax-free limit, and that limit is many times larger than $410,000. The people are fine: the children get on well.',
      'A family trust would cost money to set up and every year to run, to fix a problem nothing here shows. So the honest answer is that nothing more needs doing. That is a real answer, and as common as the others. It does not say that nothing could ever go wrong, only that this story shows nothing.'
    ],
    spot: [
      { do: 'Check every paper is current: Anselm and Marit renewed both wills, both 401(k) forms and their powers of attorney last spring.', why: 'One out-of-date paper makes it a different answer.' },
      { do: 'Add up what they own and compare it with the tax-free limit: $410,000 is far below it.', why: 'Below the limit, estate tax is $0.' },
      { do: 'Look at the people: their two children get on well.', why: 'Nothing is shown that could go wrong with them.' },
      { do: 'Set the seminar speaker aside: he says they need a family trust, but he shows no problem for it to fix.', why: 'A sales pitch is not something that could go wrong.' }
    ],
    feature: { step: 'H1', option: 'inorder' },
    name: 'This is {o:simple}. The papers are current and nothing else is in question, so there is nothing more to set up.',
    act: [
      { do: 'Say no to the offer for now, and ask the seller: “What could go wrong in my situation that this fixes, in numbers?”', why: 'If the seller cannot say, you have your answer.' },
      { do: 'Write down the date you checked your papers, and check again after a marriage, a divorce, a birth, a death or a big change in what you own.', why: 'Those are the moments a paper goes out of date.' }
    ] },

  { id: 'check-simple', kind: 'check', after: 'simple',
    case: 'c-fenella',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-basicdocs-simple', kind: 'lookalike', ledger: 'basicdocs~simple',
    link: 'These two are easy to mix up: the same three papers, and the same kind of person.',
    cases: ['la-form-stale', 'la-form-current'],
    instruction: 'Both stories are about Rosalind, who divorced six years ago and has the same condo and the same savings. Compare one thing: what each story says about her papers.',
    prompt: { kind: 'which', option: 'H1.inorder', answer: 'la-form-current' },
    difference: [
      'In Story A the form on Rosalind’s 401(k) still names her former husband, so the plan would pay him if she died. That is {o:basicdocs}.',
      'In Story B she changed the form the month after the divorce, and rewrote her will and signed {t:poa} at the same time. All three papers match her life, and the estate is far below the limit. That is {o:simple}.',
      'The divorce, the condo and the savings are the same in both. One sentence about one paper decides it, so read for that sentence before you decide.'
    ] }
]);
