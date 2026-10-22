// Wealth, lesson 8: A loss you could not pay (part 8, unit C). The risk manager's matrix put as two questions (research W20, W61): could you
// pay it from savings without real harm (keep it); if not, can someone carry it for a price (pass it on: insurance, an LLC for a rental or
// business, W55); if no one can (a fall in prices, a loan signed for, W22, W56), avoid it or take less. Then the liability check: what a claim
// could reach (everything owned less what is owed, not a 401(k), W54) against the limit plus an umbrella; liability at least what you own is
// a common rule, a judgement call (W21). Each part: the rule with the novice's wrong idea (P29), a worked case (P10), one with the last step
// or steps left (P17); then the look-alikes side by side (a 401(k) counted, an umbrella left out, P12) with cases to leave (W2, P26), mixed
// with earlier lessons (P22); the learner's own limits (W34, W35); the check on new cases.
FC.lesson('wealth', {
  id: 'l8', part: '8', title: 'A loss you could not pay', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 8), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Grace saved for years. One crash where someone is badly hurt could bring a claim larger than her car insurance pays, and the rest could come out of her savings.',
    'Here you sort losses into the ones to keep, pass on and avoid, and check whether one claim could take more than your insurance pays.'
  ],
  flow: [
    { title: 'Keep it, pass it on, or avoid it',
      show: [
        { kind: 'prose', text: [
          'For each loss that could happen, put two questions. Could you pay the worst of it from your savings without real harm (about a tenth of them or less, a rule of thumb)? Then keep it: pay it if it comes, skip the warranty, and cut how often it happens where you can. When the amount is the worst of it (a repair, a loan), its size decides. A claim from hurting someone has no top, so it is never small: pass it on.',
          'If not, can someone carry it for a price? Then pass it on: insurance for a crash, a fire or a lawsuit; a limited liability company (LLC) for a rental or a business, so a claim against it stays with it. An LLC does nothing for your own driving or your home.',
          'If no one carries it (a loan against your stocks, a loan you co-sign, money put into a venture), avoid it or take on less. A loan against your stocks: in a fall, the firm can sell your shares without asking.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Insure everything you can.”',
          'Insurance on small losses costs more over the years than the losses. It is for the ones you could not pay.'] }
      ] },
    { worked: 'w-risk' },
    { set: { items: [{ gen: 'g-risk-keep', n: 1 }, { gen: 'g-risk-avoid', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { title: 'One claim against what you own',
      show: [
        { kind: 'prose', text: [
          'If you hurt someone, the claim is held against everything you own, not just your savings: it can be far larger than your car or your home. A crash falls under the car policy, a fall at your home under the home policy, each up to its own liability limit (on the first page of the policy). An umbrella policy pays on top of either. Past that, what you own can be taken.',
          'What a claim could reach: every account, plus your home less its mortgage. Leave out a 401(k): federal law shields it from most claims. An IRA is shielded in bankruptcy up to a federal cap, and part of a home by some states’ rules, but those vary: count them, to be safe. For your own check, hold it against the lower of your two limits, since either claim can come.',
          'More than the cover: change it, with higher limits or an umbrella (cover at least what you own is a common rule, not a law). Otherwise leave it.'] }
      ] },
    { worked: 'w-cover' },
    { set: { items: [{ gen: 'g-cover-short', n: 1 }, { gen: 'g-cover-shield', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-cover-short', n: 1 }, { gen: 'g-cover-which', n: 1 }], [{ gen: 'g-cover-shield', n: 1 }, { gen: 'g-cover-umbrella', n: 1 }], [{ gen: 'g-risk-pass', n: 1 }, { gen: 'g-risk-keep', n: 1 }]],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7'], share: 0.2 } } },
    { own: 'sheet', model: 'w-cover', work: 'cover' }
  ],
  check: {
    items: [{ gen: 'g-risk-keep', n: 1 }, { gen: 'g-risk-pass', n: 1 }, { gen: 'g-risk-avoid', n: 1 }, { gen: 'g-cover-short', n: 1 }, { gen: 'g-cover-which', n: 1 }, { gen: 'g-cover-shield', n: 1 }, { gen: 'g-cover-umbrella', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'fits', right: { min: 3 }, of: 'keep it, pass it on or avoid it' },
      { ask: 'reach', right: { min: 2 }, of: 'what a claim could reach' },
      { ask: 'pays', right: { min: 3 }, of: 'the most the policy for that claim pays' },
      { ask: 'call', right: { min: 3 }, of: 'change the cover or leave it' },
      { where: { call: 'leave' }, wrong: { max: 0 } }]
  }
});
