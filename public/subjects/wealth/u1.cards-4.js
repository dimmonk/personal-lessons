// Wealth Preservation, Unit One, part two (second half): the fourth family (the handover to other people) and its look-alike
// pair with the first family. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fourth family: the handover to other people ---------- */
  { id: 'meet-handover', kind: 'meet', family: 'handover',
    link: 'The fourth answer is about the end of a life, or an illness: what happens to the money when its owner dies or can no longer act.',
    case: 'w-exwife', mark: 'D1',
    strip: [
      'There is one person, Gerald, and one sum: life insurance from his job that would pay $300,000.',
      'There is a form, signed twenty years ago, that says who receives the money if he dies.',
      'The form names his first wife. Gerald has married again since, and has never changed it.',
      'Nothing is said about charges, falling prices or a loan. What is at stake comes once, when Gerald dies.'
    ],
    explain: [
      'What you are shown is a piece of paper. The insurer will pay whoever the form names, and the form names a woman Gerald is no longer married to. If he died tomorrow, the $300,000 would be paid to her and not to his widow. Whether anyone could get it back from her afterward depends on the law that applies, and the case does not say. What it shows is a gap between what Gerald would want and what the paper says.',
      'The loss here comes once, at the handover, and nothing happens to the money until then. It cannot be put right afterwards by the person who would have wanted it put right: Gerald is no longer there to correct it.',
      'The handover is the time at which money passes to other people, or someone else has to act for its owner. It can be a death, an illness that stops the owner acting, or gifts made to family while the owner is alive. The loss can come in three ways. The papers that say who gets what, or who may act, can be out of date or missing, as here. Tax can be taken from a large inheritance before the family receives it: the federal estate tax takes 40% of what a person leaves above a tax-free limit, so it falls only on large estates, and some states tax smaller ones. And the people who receive the money, or run it, can lose it by what they do. The limits change, and differ from state to state. What stays the same is that the loss falls at one moment.',
      'This is different from the first answer. In that one, money leaves every year for as long as it is kept. In this one, the loss comes once, when the money changes hands.'
    ],
    feature: { step: 'D1', option: 'handover' },
    name: [
      'The answer, and the name of this kind of case, is {a:D1.handover}. "Other people" means the people who receive the money or act for its owner, and it includes the IRS when it takes its share.',
      'The name does not say that something will go wrong. It says that the case is about the moment when the money changes hands, or someone else has to act for its owner.'
    ] },

  { id: 'again-handover', kind: 'again', family: 'handover',
    link: 'The last card gave you what to point to: {needs:handover}. Here is a second case with a different story. There is no form in it, only a tax.',
    first: 'w-exwife', second: 'w-estate', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the difference between a form and a tax, and ignore how large the sums are. Look at one thing only: which words show something that would happen once, when the owner dies?',
    prompt: { kind: 'phrase', answer: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit' },
    shared: [
      'Gerald’s case is a form and Walter’s is a tax. They look nothing alike, and they share a moment: the loss comes once, when the owner dies, and it depends on who gets the money and what is taken before they do. Gerald’s $300,000 would go to someone he no longer meant it for. Walter is far above the tax-free limit, so for every $1,000,000 he leaves above it, $400,000 would go in tax before his family received the rest.',
      'Neither case is about something that comes out every year, a fall in prices, or one thing most of the money rests on. Both are about the moment the money changes hands. That is what {a:D1.handover} names. Walter’s papers are up to date, and his case still belongs here, because what it raises is what happens at his death.'
    ] },

  { id: 'portrait-handover', kind: 'portrait', family: 'handover',
    link: 'You know what to point to for {a:D1.handover}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'The case is about a moment in the future: a death, an illness that stops the owner acting, or a gift to family. The owner is often alive and well in the story.',
      'Something is written down, or should be: a will, a form held by an insurer, a bank or the firm that runs a 401(k), a paper that says who may act if the owner cannot.',
      'The loss falls once, at the handover, and it is often too late to repair afterwards, because the person who could have corrected it is no longer there.',
      'It comes in three forms: papers that are out of date or missing, tax taken from a large inheritance, and a risk in the people who will receive the money or run it.',
      'It often involves family: a second marriage, children who do not speak to each other, an heir who is about to marry.',
      'The cure is often cheap and dull. A form can be changed in an afternoon.'
    ],
    not: [
      'Money that leaves every year is not this kind, even when the person who gets it is family. This kind falls once.',
      'A case in which the owner is simply getting older is not this kind unless something in the case is about a death, an illness or a gift. Age alone raises nothing.'
    ],
    wild: ['"I’ll get to my will when I’m older."', '"My kids will figure it out."', '"I think the form still says my ex."', '"They’ll take 40% of everything above the limit."', '"Those two haven’t spoken in years, and they’ll inherit together."'],
    self: 'In your own life it is the question "who gets this if I die tomorrow, and who decides things if I cannot?" If you cannot answer it, or the honest answer is a name that is out of date, you have something to look at.',
    ask: '"If the owner died or could not act tomorrow, who would get the money, who would act, and what would be taken first?" If the case raises any of those, you are probably looking at this kind.' },

  { id: 'check-handover', kind: 'check', after: 'handover',
    case: 'w-heirs',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a risk in the people who will receive the money? Tap them.',
           answer: 'Two of them have not spoken to each other for six years' } },

  /* ---------- Third look-alike pair: the handover, or something taken out every year ---------- */
  { id: 'look-handover-erosion', kind: 'lookalike', ledger: 'handover~erosion',
    link: 'You have now met the two answers in which money leaves the owner for someone else. They are easy to mix up. This card puts them side by side.',
    cases: ['w-la-estate', 'w-la-yearly'],
    instruction: 'Both cases are about Joan, who is 79 and has $30,000,000. Compare one thing: does something come out of the money every year while she is alive, or does the loss arise once, when she dies?',
    prompt: { kind: 'which', option: 'D1.handover', answer: 'w-la-estate' },
    difference: [
      'In Case A nothing comes out of Joan’s money while she is alive. The loss comes once, when she dies: the federal estate tax takes 40% of everything above the tax-free limit, $400,000 for every $1,000,000, before her children receive anything. The answer is {a:D1.handover}.',
      'In Case B nothing is said about her death. Every year the firm that runs her fund takes 1.4% of the $30,000,000, which is $420,000, and next year it takes it again. The answer is {a:D1.erosion}.',
      'Both cases are about money leaving for someone other than Joan. What separates them is when. $420,000 leaves every year she is alive (Case B). 40% of everything above the limit leaves once, from what her children would have received, at her death (Case A).'
    ] },
]);
