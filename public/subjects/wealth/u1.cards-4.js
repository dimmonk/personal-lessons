// Wealth Preservation, Unit One, part two (second half): the fourth answer (handing it over).
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fourth answer: handing it over ---------- */
  { id: 'meet-handover', kind: 'meet', family: 'handover',
    link: 'Fourth: what happens to the money when its owner dies, or can no longer act for themselves.',
    case: 'w-exwife', mark: 'D1',
    explain: [
      'Gerald’s $300,000 of life insurance will be paid to whoever the form names, and the form names his first wife. If he died tomorrow, the money would go to a woman he is no longer married to, and his widow would get nothing. The loss comes once, and Gerald will not be there to fix it.',
      'The same goes any time money passes to other people, or someone else has to act for its owner: a death, an illness that stops the owner acting, or gifts to family. Three things can go wrong. The papers can be out of date or missing, as here. Tax can take a part of a large inheritance before the family gets it: the federal estate tax takes 40% of what a person leaves above a tax-free limit, so it only hits large estates. And the people who get or run the money can lose it by what they do.'
    ],
    spot: [
      { do: 'Find the moment it changes hands: Gerald’s death.', why: 'What is at stake comes once, not every year.' },
      { do: 'Find the paper that decides who gets it: the insurance form he signed twenty years ago.', why: 'The insurer pays whoever the form names.' },
      { do: 'Check the paper against real life: it names his first wife, and he has married again.', why: 'A paper that is out of date is the commonest way to lose money here.' },
      { do: 'If the papers are fine, look at the tax and the people: a very large estate, or heirs who do not get on.', why: 'Those are the other two ways it can go wrong.' }
    ],
    feature: { step: 'D1', option: 'handover' },
    name: 'This is {a:D1.handover}. It does not say something will go wrong, only that the money is about to pass to other people.' },

  { id: 'check-handover', kind: 'check', after: 'handover',
    case: 'w-heirs',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show a risk in the people who will receive Sunita’s money? Tap them.',
           answer: 'Two of them have not spoken to each other for six years' } }
]);
