// Wealth Preservation: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('wealth', {
  name: 'Wealth Preservation',
  rev: 3,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: true,           // the learner acts on this subject (P26): legitimate cases in every drill stage, the plan card,
                          // the late return and the baseline check
  blurb: 'Read a short account of someone’s savings and investments, work out how that money could be lost, and name what to do about it, including when the right thing to do is to leave it alone.',
  // Order of the course (docs/rebuild/wealth-plan.md): the gate unit, then one unit per branch of the key. The old Units Six
  // ("What people believe instead") and Seven ("The whole key") are gone: their claims are folded into the drills of u1 to u5,
  // and the determination screen, which runs the specimens, and the close cards replace the rest.
  units: ['u1', 'u2', 'u3', 'u4', 'u5'],
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'home', 'family', 'business', 'property', 'retirement', 'health'],
  // The baseline check (E21): six cases asked once before Unit One, half of them sound. They are in Unit One's case collection, with use 'baseline'.
  baseline: ['b-fund-fees', 'b-flat-fee', 'b-bill-saved', 'b-company-shares', 'b-old-will', 'b-long-saver'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'These ideas keep money; they do not make it',
      text: 'How much you earn and how much you start with matter far more than anything here. The best arrangement of a small pot is still a small pot. Building money and keeping it follow different rules: while you are still building, putting most of what you have into one venture can be a reasonable bet, and the keeping questions start to matter once people depend on the money or you could not earn it again.' },
    { h: 'Size decides much of this',
      text: 'Trusts, holding companies, contracts that cap a loss and separate companies all cost real money to set up and run every year. Below the size where what they save is more than what they cost, they are a product being sold, not a solution. The fixes that need no structure at all work at every size.' },
    { h: 'The detail is local, and it changes',
      text: 'What counts as {t:sheltered} and the yearly limit on what you can pay into each kind, how gains and gifts are taxed, the step-up that today wipes out the tax on {t:gain} in what a person leaves at death, the tax-free limit on {t:estate}, how trusts are taxed, and the wash-sale rule on buying something back within 30 days of selling it at a loss are set by Congress and the IRS and are rewritten often, and many states add taxes and rules of their own. The cases use dollars and general federal rules, and their sums and tax rates are examples. The ways money is lost are general; the tools that answer them are set by law and dated, so check the ones that apply to you.' },
    { h: 'The numbers are examples',
      text: 'The 4% growth, the 3.5% taken out each year, the three years’ worth of spending kept as cash and the loan at under half of what it is borrowed against are there to show how each idea works. They are starting points to test against your own state, age and plans, not promises. Nobody can promise a return.' },
    { h: 'Ask how an adviser is paid',
      text: 'An adviser can be paid a set fee, a percentage of your money every year, or a commission from whatever they sell you. Each pulls their advice a different way. Ask which before you weigh any recommendation, including one to do something this subject describes.' },
    { h: 'What survives is what we hear about',
      text: 'We hear how families whose money lasted arranged it, and not about families who arranged it the same way and lost it anyway. Some of what looks like good arrangement was a rising market, or one large bet that happened to pay.' },
    { h: 'Not covered',
      text: 'Valuing or selling a business, retirement accounts, Social Security and annuities in detail, Medicaid and paying for long-term care, how insurance is priced, giving to charity, living or being taxed in more than one country, and investments you cannot easily sell. Each is a specialty, and none comes down to one or two questions.' },
    { h: 'The questions do not replace advice',
      text: 'The questions sort a short account of someone’s money and names what the account shows. For your own money, with real sums and the federal and state rules that apply to you, check the numbers yourself and take advice from someone whose pay does not depend on what they sell you, such as an adviser paid a set fee.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks what could lose the money and has a fifth answer for a case in which nothing could; each branch asks one question about what the case shows, not about the fix already chosen; every branch has a name for a case where nothing needs doing; the unsourced claims about lost family fortunes are gone. The old Units Six and Seven are folded into the drills and the full determination, and the old specimens are rewritten as situations to diagnose, with new ones for every name of the key.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: dollars, US accounts, rules and institutions, US spelling.' }
  ]
});
