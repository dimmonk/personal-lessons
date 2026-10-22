// Wealth, lesson 4 "The full match, then the order of saving": a household's money in a few lines, and its next steps put in order. The
// order is a common practitioners' one, and its versions differ on the first step (research W24, W46, a judgement call built on W19, W23 and
// the tax facts of W24 and W37): cash for about a month, the whole match, a high-rate card, cash to three months, an HSA if the health plan
// allows one, an IRA, more in the 401(k), then a brokerage account. In each household one or two steps do not apply (done, nothing owed, or
// not open to them), so the learner leaves them out; the households are chosen so the taught order gives one answer.
// o-1 is the worked one, o-2 and o-3 are practice, o-4 is in the check, o-5 to o-7 are kept for the weekly review.
(() => {
  const STEPS = [
    { id: 'starter', text: 'Build cash to about one month of spending' }, { id: 'match', text: 'Put in enough to take the whole match' },
    { id: 'debt', text: 'Pay off the credit card' }, { id: 'fill', text: 'Build cash to three months of spending' },
    { id: 'hsa', text: 'Fill the HSA' }, { id: 'ira', text: 'Fill an IRA' },
    { id: 'more', text: 'Put more into the 401(k), up to its yearly limit' }, { id: 'brokerage', text: 'Invest the rest in a brokerage account' }];
  const ORDER = STEPS.map(s => s.id);
  const SKIP = {
    starter: 'The cash already covers a month, so the first step is done.', fill: 'The cash already covers three months, so that step is done too.',
    debt: 'There is no card balance to pay off.', hsa: 'The health plan does not allow an HSA, so that step is out.', match: 'The employer adds no match, so there is none to take.'
  };
  const THEN = 'A month of cash first, so a surprise does not go on a card; then the match, money no fund can promise; then the card, a sure cost at its rate; then cash to three months; then the accounts with tax help; the brokerage account last.';
  const order = (id, who, rows, skips, extra) => ({
    id, strand: 'order', facets: { call: 'change' },
    blocks: [{ kind: 'document', form: 'table', title: `${who}’s money today`, head: ['What', 'Today'], rows: rows.map((cells, i) => ({ id: `r${i + 1}`, cells })) }],
    asks: [{ id: 'steps', kind: 'order', prompt: `Put ${who}’s next steps in order. Leave out each step that is done, owes nothing or is not open to ${who}.`, steps: STEPS,
      right: ORDER.filter(s => !skips.includes(s)), then: THEN }],
    deciding: rows.map((_, i) => `r${i + 1}`),
    reason: `${skips.map(s => SKIP[s]).join(' ')} ${extra}`,
    ...(id === 'o-1' ? { steps: [
      { id: 'skip', does: 'Strike each step that does not apply.', working: skips.map(s => SKIP[s]).join(' ') },
      { id: 'order', does: 'Put the rest in the common order.', working: 'A month of cash, the match, the card at 24%, cash to three months, an IRA, more in the 401(k), the brokerage account.', ask: 'steps' }] } : {})
  });
  FC.items('wealth', [
    order('o-1', 'Jamal', [['Cash', 'Half a month of spending'], ['Credit card', '$4,800 at 24% a year'], ['Health plan', 'Does not allow an HSA'], ['401(k) match', '50 cents per dollar, up to 6%']],
      ['hsa'], 'Half a month of cash is short of a month, so it comes first; the card at 24% comes right after the match.'),
    order('o-2', 'Rosa', [['Cash', 'Four months of spending'], ['Credit card', '$2,100 at 22% a year'], ['Health plan', 'Allows an HSA'], ['401(k) match', 'One dollar per dollar, up to 4%']],
      ['starter', 'fill'], 'So the match comes first, then the card at 22%.'),
    order('o-3', 'Ben', [['Cash', 'Six weeks of spending'], ['Credit card', 'Paid in full every month'], ['Health plan', 'Allows an HSA'], ['401(k) match', '50 cents per dollar, up to 5%']],
      ['starter', 'debt'], 'Six weeks is past a month but short of three, so after the match comes cash to three months.'),
    order('o-4', 'Mei', [['Cash', 'Two months of spending'], ['Credit card', '$6,300 at 26% a year'], ['Health plan', 'Does not allow an HSA'], ['401(k) match', '25 cents per dollar, up to 6%']],
      ['starter', 'hsa'], 'Two months is past one, so the match comes first, then the card at 26%, then cash to three months.'),
    order('o-5', 'Carlos', [['Cash', 'Five months of spending'], ['Credit card', '$1,500 at 19% a year'], ['Health plan', 'Allows an HSA'], ['401(k) match', 'One dollar per dollar, up to 3%']],
      ['starter', 'fill'], 'So the match comes first, then the card at 19%.'),
    order('o-6', 'Hana', [['Cash', 'Half a month of spending'], ['Credit card', '$3,000 at 23% a year'], ['Health plan', 'Allows an HSA'], ['401(k) match', 'No match']],
      ['match'], 'A month of cash comes first, then the card at 23%.'),
    order('o-7', 'Luis', [['Cash', 'Half a month of spending'], ['Credit card', 'Paid in full every month'], ['Health plan', 'Allows an HSA'], ['401(k) match', '50 cents per dollar, up to 6%']],
      ['debt'], 'Half a month of cash is short of a month, so cash comes first.')
  ]);
})();
