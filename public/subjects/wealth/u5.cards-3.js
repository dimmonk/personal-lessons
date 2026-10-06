// Wealth Preservation, Unit Five, part two (first half): the word estate, and the first of the two tax names.

FC.cards('wealth', 'u5', [

  /* ---------- The word the tax names are built on ---------- */
  { id: 'term-estate', kind: 'term', term: 'estate',
    h: 'Everything a person leaves',
    link: 'The papers decide who gets the money. The next two names are about tax taken before anyone receives anything, and to see it you need one word.',
    case: 't-estate',
    plain: [
      'Everything Ruth owns on the day she dies, added together, is one number: $30,000,000. It is what she leaves, her estate.',
      'The federal estate tax does not take a part of all of it. It takes 40% of whatever is above a tax-free limit, which is so high that only the largest estates pay anything. Ruth’s $30,000,000 is above it, so every $1,000,000 above the limit costs $400,000. A person who leaves $500,000 pays nothing.'
    ],
    after: 'The limit changes every year, so the cases in this unit say whether an estate is above it or below it, and use 40% for the part above.' },

  /* ---------- Give some away each year ---------- */
  { id: 'meet-gifting', kind: 'meet', outcome: 'gifting',
    link: 'The first of the two tax names, in the plainest case: a sum above the limit, with nothing about it that is going to change.',
    case: 'm-harold', mark: 'H1',
    strip: [
      'One widower who will leave $40,000,000, well above the tax-free limit.',
      'He has more than he needs: his income is $400,000 a year more than he spends.',
      'Nothing he owns is expected to rise sharply, and his papers are in order.'
    ],
    explain: [
      'Everything Harold owns adds up to $40,000,000. That is {t:estate} far above the limit, so every $1,000,000 above it costs $400,000. Nothing is taken while he lives. The loss comes once, when he dies, and his three grandchildren receive the rest.',
      'The tax is charged on what he leaves, so money he no longer owns is not in the sum. Each year a person may give a set amount to each of as many people as they like, and a gift within it is not taxed and does not count against the limit. Harold gives each grandchild $10,000 a year, $30,000 in all. After ten years $300,000 has left his estate, and 40% of that, $120,000, is tax saved. Tuition or medical bills paid straight to the school or hospital do not count as gifts, so he can pay those too.',
      'It is small in a year and large in a decade, so it starts early. It needs no structure and costs nothing to run. A gift cannot be taken back, so he gives only what he truly does not need. The yearly amount and the limit change from time to time, and the pattern stays the same.'
    ],
    feature: { step: 'H1', option: 'bigestate' },
    name: 'The name for this is {o:gifting}. It means giving some spare money away, a little at a time, every year, while the owner is alive, so that less is left to be taxed.',
    act: [
      'Add up everything the owner will leave and set it against the federal tax-free limit (and your state’s, if it taxes estates). Work out what the owner needs to live on for the rest of their life, with a margin: only what is left over is spare.',
      'Look up this year’s yearly gift amount, give the spare sum within it every year, and write down who got what.'
    ] },

  { id: 'check-gifting', kind: 'check', after: 'gifting',
    case: 'c-quentin',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate'] } }
]);
