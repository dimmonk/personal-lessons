// Wealth Preservation, Unit Five, part two (first half): the word estate, and the first of the two tax names.

FC.cards('wealth', 'u5', [

  /* ---------- The word the tax names are built on ---------- */
  { id: 'term-estate', kind: 'term', term: 'estate',
    h: 'Everything a person leaves',
    link: 'The papers decide who gets the money. The next two problems are about tax taken before anyone gets anything, and to see them you need one word.',
    case: 't-estate',
    plain: [
      'Add up everything Ruth owns on the day she dies and you get one number: $30,000,000. That is what she leaves, her estate.',
      'The federal estate tax does not tax all of it. It takes 40% of whatever is above a tax-free limit, which is so high that only the largest estates pay anything. Ruth’s $30,000,000 is above it, so every $1,000,000 above the limit costs $400,000. Someone who leaves $500,000 pays nothing.'
    ],
    after: 'The limit changes every year, so the stories in this unit say whether an estate is above it or below it, and use 40% for the part above.' },

  /* ---------- Give some away each year ---------- */
  { id: 'meet-gifting', kind: 'meet', outcome: 'gifting',
    link: 'The first of the two tax problems, in the plainest story: a big sum above the limit, and nothing about it that is going to change.',
    case: 'm-harold', mark: 'H1',
    explain: [
      'Everything Harold owns adds up to $40,000,000. That is {t:estate} far above the limit, so every $1,000,000 above it costs $400,000. Nothing is taken while he lives. The tax comes once, when he dies, and his three grandchildren get the rest.',
      'The tax is charged on what he leaves, so money he has already given away is not in the sum. Each year a person may give a set amount to each of as many people as they like, and a gift within it is not taxed and does not count against the limit. Harold gives each grandchild $10,000 a year, $30,000 in all. After ten years $300,000 has left his estate, and 40% of that, $120,000, is tax saved. Tuition or medical bills paid straight to the school or hospital do not count as gifts, so he can pay those too.',
      'It is small in a year and large in a decade, so start early. It needs no trust and no company, and it costs nothing to run. A gift cannot be taken back, so give only what you truly do not need. The yearly amount and the limit change from time to time, and the idea stays the same.'
    ],
    spot: [
      { do: 'Add up what the owner will leave and compare it with the tax-free limit: Harold’s $40,000,000 is far above it.', why: 'Below the limit there is no tax to cut.' },
      { do: 'Check there is money to spare: his income is $400,000 a year more than he spends.', why: 'Gifts only work with money the owner will never need.' },
      { do: 'Check nothing he owns is about to shoot up in value: nothing is.', why: 'If something is, that rise is the bigger problem.' },
      { do: 'Check the papers are current: his will, forms and power of attorney were renewed last year.', why: 'If a paper is out of date, fix that first.' }
    ],
    feature: { step: 'H1', option: 'bigestate' },
    name: 'This is {o:gifting}: giving spare money away a little at a time, every year while the owner is alive, so that less is left to be taxed.',
    act: [
      { do: 'Add up everything the owner will leave and compare it with the federal tax-free limit (and your state’s, if it taxes estates).', why: 'Below the limit, nothing needs doing.' },
      { do: 'Work out what the owner needs to live on for the rest of their life, with a margin.', why: 'Only what is left over is spare.' },
      { do: 'Look up this year’s yearly gift amount, give the spare money within it every year, and write down who got what.', why: 'A record shows what has been given.' }
    ] },

  { id: 'check-gifting', kind: 'check', after: 'gifting',
    case: 'c-quentin',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate'] } }
]);
