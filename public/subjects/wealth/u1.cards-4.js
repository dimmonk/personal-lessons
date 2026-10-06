// Wealth Preservation, Unit One, part two (second half): the fourth family (the handover to other people).
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fourth family: the handover to other people ---------- */
  { id: 'meet-handover', kind: 'meet', family: 'handover',
    link: 'The fourth answer is about the end of a life, or an illness: what happens to the money when its owner dies or can no longer act.',
    case: 'w-exwife', mark: 'D1',
    strip: [
      'One person, Gerald, and one sum: life insurance from his job that would pay $300,000.',
      'A form signed twenty years ago says who receives the money if he dies. It names his first wife. Gerald has married again since, and has never changed it.',
      'Nothing is said about charges, falling prices or a loan. What is at stake comes once, when Gerald dies.'
    ],
    explain: [
      'What you are shown is a piece of paper. The insurer will pay whoever the form names, so if Gerald died tomorrow the $300,000 would be paid to a woman he is no longer married to, and not to his widow. The loss comes once, at the handover, and Gerald will not be there to correct it.',
      'The handover is the time at which money passes to other people, or someone else has to act for its owner: a death, an illness that stops the owner acting, or gifts made to family. The loss can come in three ways. The papers that say who gets what, or who may act, can be out of date or missing, as here. Tax can be taken from a large inheritance before the family receives it: the federal estate tax takes 40% of what a person leaves above a tax-free limit, so it falls only on large estates. And the people who receive the money, or run it, can lose it by what they do.'
    ],
    feature: { step: 'D1', option: 'handover' },
    name: 'The answer, and the name, is {a:D1.handover}. "Other people" means the people who receive the money or act for its owner, and it includes the IRS when it takes its share. The name does not say that something will go wrong.' },

  { id: 'check-handover', kind: 'check', after: 'handover',
    case: 'w-heirs',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a risk in the people who will receive the money? Tap them.',
           answer: 'Two of them have not spoken to each other for six years' } }
]);
