// Wealth, lesson 5: Taxes: where each fund sits, sell or wait, a loss used (part 5, unit B). Three certain tax moves: bonds where their payout
// is not taxed each year, with the mix set across all accounts first and a swap only when the 401(k) holds stocks (research W25, W38, W47);
// a gain taxed when sold, lower after a year, weighed against what waiting costs, and never inside a 401(k) (W2, W38, W39); a loss that
// counts unless the same fund is bought within 30 days, a wash sale (W26, W48). The placement rule with the novice's "same mix in every
// account" (P29), a worked household (P10), one with the last steps left (P17), the look-alikes alone; then sell-or-wait and the loss with
// the last step left, then each pair side by side (P12) mixed with earlier lessons (P22); the learner's own accounts; the check on new ones.
FC.lesson('wealth', {
  id: 'l5', part: '5', title: 'Taxes: where each fund sits, sell or wait, a loss used', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 5), and fixed after its first two reviews: what is taxed each year without a sale, a swap only with stocks in the 401(k), waiting weighed against what it costs, a switch inside a 401(k), the wash sale named. Not tried on a phone yet.' }],
  why: [
    'Ruth’s bonds sit in her brokerage account and her 401(k) holds only stocks. Each year she pays tax on what the bond fund pays out.',
    'Tax is a cost you know before it comes, like a fee. Here you place each fund, decide when to sell, and keep a loss from going to waste.'
  ],
  flow: [
    { title: 'Where each fund sits',
      show: [
        { kind: 'prose', text: [
          'In a brokerage account, what a fund pays out (a bond fund’s interest, dividends) is taxed every year. In a 401(k) or an IRA, nothing is taxed until you take money out.',
          'So choose one mix for all your accounts together, then put the bonds in the 401(k) or IRA and the stocks in the brokerage account. A swap needs stocks in the 401(k) to trade places with. Selling the bonds in the brokerage account is a sale: check its gain first. A tax paid once that is less than one year’s saving always favors the swap.',
          'The swap saves most of the yearly tax, not all: the stocks that move into the brokerage account pay some dividends, taxed each year at a lower rate.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Each account should hold the same mix.”',
          'The mix is one mix across everything you have. Which account holds which part is a separate choice, made for tax.'] }
      ] },
    { worked: 'w-place' },
    { set: { items: [{ gen: 'g-place-fine', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [[{ gen: 'g-place-swap', n: 1 }, { gen: 'g-place-full', n: 1 }]], order: 'listed' } },
    { title: 'Sell or wait, and a loss used',
      show: [
        { kind: 'prose', text: [
          'In a brokerage account, your own gain on a fund is taxed when you sell it. Held more than a year, it is taxed at a lower rate than a gain held a year or less. More than a year means at least a year and a day, so count to month 13: bought 10 months ago, wait 3 more. Inside a 401(k) or an IRA a sale is not taxed, so waiting saves nothing there.',
          'Waiting saves the gain × (the short rate − the long rate). It costs the fund’s value × (its expense ratio − the cheaper one’s) × the months ÷ 12. Wait only when it saves more than it costs. Not selling at all puts the tax off: with a big gain, you can keep the fund and put new money into the cheaper one.',
          'A sale at a loss cuts the gains you sold that year, then up to $3,000 of other income. Not if you buy the same fund, or one nearly the same, within 30 days before or after: a wash sale. Then the loss counts only later, added to the new shares’ cost; the broker’s Form 1099-B shows it as a wash sale loss disallowed. To keep the loss and your mix, wait past 30 days, or buy a similar fund that follows a different index.'] },
        { kind: 'ref', ref: 'lossLimit' }
      ] },
    { set: { items: [{ gen: 'g-sell-wait', n: 1 }, { gen: 'g-loss-ok', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [[{ gen: 'g-sell-now', n: 1 }, { gen: 'g-sell-wait', n: 1 }], { gen: 'g-sell-plan', n: 1 }, [{ gen: 'g-loss-wash', n: 1 }, { gen: 'g-loss-ok', n: 1 }], { gen: 'g-place-swap', n: 1 }],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4'], share: 0.2 } } },
    { own: 'sheet', model: 'w-place', work: 'placement' }
  ],
  check: {
    items: [{ gen: 'g-place-swap', n: 1 }, { gen: 'g-place-full', n: 1 }, { gen: 'g-sell-wait', n: 1 }, { gen: 'g-sell-now', n: 1 }, { gen: 'g-loss-wash', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'call', right: { min: 4 }, of: 'what to do' },
      { ask: 'saved', right: { min: 3 }, of: 'the tax saved' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } }]
  }
});
