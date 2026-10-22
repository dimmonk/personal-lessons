// Math, lesson 5 "Percents forward": a percent of an amount, a share as a percent, a change as a percent, and an amount after a percent up or
// down by its multiplier (docs/research/math.md, M3: benchmarks first, 10% and a quarter; M7: "times a multiplier"; M15: the 100% bar, and the
// worked problem showing the benchmark way and the multiplier way side by side). The one rule: the whole, 100%, is the amount the percent is of,
// which for a change is the amount you started from. The named slips: the percent of the wrong whole, and the change divided by the new amount.
(() => {
  const { usd, dollars, num, problem } = MATH;
  const cents = x => Math.round(x * 100);

  /* ---------- a tip: a percent of an amount ---------- */
  const TIP_WORDS = { 15: '10% and half of it again (5%)', 18: 'a bit less than 20%, double 10%, {doubleText}', 20: 'double 10%', 22: 'a bit more than 20%, double 10%, {doubleText}', 25: 'a quarter' };
  const tip = problem({
    id: 'g-tip', strand: 'percent', kind: 'pct-of',
    params: { food: [1800, 11800, 5], drinks: [400, 3000, 10], pct: [15, 18, 20, 22, 25], tax: [5, 8, 1] },
    make: pick => {
      const s = pick('food') + pick('drinks'), pct = pick('pct'), taxCents = Math.round(s * pick('tax') / 100), all = s + taxCents;
      const tenth = s / 1000, double = tenth * 2, rough = pct === 25 ? Math.round(s / 4) / 100 : pct === 15 ? tenth * 1.5 : pct === 18 ? Math.floor(double) : pct === 22 ? Math.ceil(double) : double;
      return { foodText: usd(pick('food')), drinksText: usd(pick('drinks')), subText: usd(s), taxText: usd(taxCents), allText: usd(all), pct, words: TIP_WORDS[pct].replace('{doubleText}', usd(cents(double))),
        tenthText: usd(cents(tenth)), rough, roughText: usd(cents(rough)), mult: String(pct / 100), ans: s * pct / 10000, ansText: usd(Math.round(s * pct / 100)),
        onTotal: Math.round(all * pct / 100) / 100, hundred: s * pct / 100, rest: 100 - pct };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: 'Harbor Grill', rows: [{ id: 'food', cells: ['Food', '{foodText}'] }, { id: 'drinks', cells: ['Drinks', '{drinksText}'] },
      { id: 'sub', cells: ['Subtotal', '{subText}'] }, { id: 'tax', cells: ['Sales tax {tax}%', '{taxText}'] }, { id: 'all', cells: ['Total', '{allText}'], strong: true }] }],
    given: 'Asked: a tip of {pct}% on the subtotal. Given: the subtotal, {subText}. The tax and the total do not matter here.',
    rough: { working: 'With benchmarks: 10% of {subText} is {tenthText} (move the decimal point one place left). {pct}% is {words}: about {roughText}.',
      prompt: 'You tip {pct}% of the subtotal. About how much is the tip?', places: 2,
      traps: [{ slip: 'wrong-whole', value: 'onTotal', then: 'That is nearer {pct}% of the total with tax. The tip is on the subtotal, {subText}.' }] },
    setup: 'A percent of an amount: the subtotal is the whole, 100%, and the tip is {pct}% of it.',
    exact: { working: 'With the multiplier: {pct}% is {mult}, so {subText} × {mult} = {ansText}. Look back: the two ways agree, and the tip is smaller than the subtotal.',
      prompt: 'How much is the tip exactly, to the nearest cent?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'wrong-whole', value: 'onTotal', then: 'That is {pct}% of the total with tax. The tip here is on the subtotal, {subText}.' },
        { slip: 'decimal-point', value: 'hundred', then: 'That is {subText} × {pct}, a hundred times too big. {pct}% is {mult}.' }] },
    figure: { kind: 'figure', type: 'bar', data: { whole: 'The subtotal, {subText}, is 100%', parts: [{ label: 'The tip', pct: '{pct}' }, { label: 'The rest of the subtotal', pct: '{rest}' }] } },
    reason: '{pct}% of {subText} is {subText} × {mult} = {ansText}. The benchmark way, from 10%, lands near it.'
  });

  /* ---------- a share as a percent ---------- */
  const BENCH = [{ word: 'a quarter', f: 0.25 }, { word: 'a third', f: 1 / 3 }, { word: 'half', f: 0.5 }];
  const sharePct = problem({
    id: 'g-share-pct', strand: 'percent', kind: 'pct-share',
    params: { pay: [2800, 6000, 10], x: [22, 37, 1] },
    make: pick => {
      const pay = pick('pay'), rent = Math.round(pay * pick('x') / 100 / 5) * 5, ans = Math.round(rent / pay * 1000) / 10;
      const near = BENCH.reduce((best, b) => Math.abs(pay * b.f - rent) < Math.abs(pay * best.f - rent) ? b : best);
      return { payText: dollars(pay), rentText: dollars(rent), quarter: dollars(Math.round(pay / 4)), third: dollars(Math.round(pay / 3)), half: dollars(pay / 2),
        near: near.word, rough: Math.round(near.f * 100), ans, ansText: num(ans, 1), flipped: Math.round(pay / rent * 1000) / 10, rest: num(100 - ans, 1) };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'This month', rows: [{ id: 'pay', cells: ['Take-home pay', '{payText}'] }, { id: 'rent', cells: ['Rent', '{rentText}'] },
      { id: 'car', cells: ['Car payment', '$380'] }, { id: 'phone', cells: ['Phone', '$65'] }] }],
    given: 'Asked: rent as a percent of your pay. Given: rent {rentText} and pay {payText}. The car and the phone do not matter here.',
    rough: { working: 'With benchmarks: a quarter of {payText} is {quarter}, a third is {third}, half is {half}. {rentText} is nearest {near}, so about {rough}%.',
      prompt: 'About what percent of your pay goes to rent?', frame: '__%' },
    setup: 'A share as a percent: the pay is the whole, 100%, and the rent is the part. Part ÷ whole × 100.',
    exact: { working: 'On the calculator: {rentText} ÷ {payText} × 100 = {ansText}%. Look back: near the rough {rough}%, and under 100% because rent is part of the pay.',
      prompt: 'What percent is it exactly, to one decimal?', frame: '__%', places: 1, tol: { abs: 0.1 },
      traps: [{ slip: 'wrong-whole', value: 'flipped', then: 'That is pay ÷ rent, over 100%. The whole is the pay: rent ÷ pay × 100.' }] },
    figure: { kind: 'figure', type: 'bar', data: { whole: 'Your pay, {payText}, is 100%', parts: [{ label: 'Rent', pct: '{ans}' }, { label: 'Everything else', pct: '{rest}' }] } },
    reason: 'Rent ÷ pay × 100: {rentText} ÷ {payText} × 100 = {ansText}%. The pay is the whole, so you divide by it.'
  });

  /* ---------- a change as a percent ---------- */
  const change = problem({
    id: 'g-change', strand: 'percent', kind: 'pct-change',
    params: { old: [800, 2000, 10], up: [8, 30, 1] },
    make: pick => {
      const o = pick('old'), n = Math.round(o * (1 + pick('up') / 100)), c = n - o, tenth = o / 10, pct = c / o * 100;
      // a benchmark, not a division: the nearest multiple of 5%, built from 10% and half of it, then a nudge of 2 points toward the rise
      const bench = Math.max(5, Math.round(pct / 5) * 5), benchAmt = o * bench / 100, way = pct < bench - 1 ? -1 : pct > bench + 1 ? 1 : 0, rough = bench + 2 * way;
      return { oldText: dollars(o), newText: dollars(n), cText: dollars(c), tenthText: dollars(tenth), fiveText: dollars(tenth / 2), bench, benchText: dollars(benchAmt), rough,
        nearWords: way < 0 ? `a bit less than ${bench}% (${dollars(benchAmt)}), so a bit under ${bench}%` : way > 0 ? `a bit more than ${bench}% (${dollars(benchAmt)}), so a bit over ${bench}%` : `about ${bench}% (${dollars(benchAmt)})`, ans: Math.round(c / o * 1000) / 10, ansText: num(Math.round(c / o * 1000) / 10, 1),
        overNew: Math.round(c / n * 1000) / 10, dollarsOnly: c, newPct: num(Math.round(n / o * 1000) / 10, 1) };
    },
    blocks: [{ kind: 'document', form: 'offer', title: 'Your lease renewal', rows: [{ id: 'now', cells: ['Rent now', '{oldText} a month'] }, { id: 'new', cells: ['New rent from March 1', '{newText} a month'] },
      { id: 'parking', cells: ['Parking', '$75 a month, no change'] }] }],
    given: 'Asked: the rise as a percent. Given: the rent goes from {oldText} to {newText}. Parking does not change.',
    rough: { working: 'The rise is {newText} − {oldText} = {cText}. 10% of {oldText} is {tenthText}, and 5% is half that, {fiveText}. {cText} is {nearWords}: say {rough}%.',
      prompt: 'By about what percent does the rent go up?', frame: '__%',
      traps: [{ slip: 'change-over-new', value: 'overNew', then: 'That is nearer the rise over the new rent. Measure from where you started, {oldText}.' }] },
    setup: 'A change as a percent: the rent you start from, {oldText}, is the whole, 100%. Change ÷ start × 100.',
    exact: { working: 'On the calculator: {cText} ÷ {oldText} × 100 = {ansText}%. Look back: near the rough {rough}%; the new rent is {newPct}% of the old.',
      prompt: 'By what percent exactly, to one decimal?', frame: '__%', places: 1, tol: { abs: 0.1 },
      traps: [{ slip: 'change-over-new', value: 'overNew', then: 'That divides by the new rent. A rise is measured from where you started: {cText} ÷ {oldText}.' },
        { slip: 'gave-part', value: 'dollarsOnly', then: 'That is the rise in dollars. As a percent: {cText} ÷ {oldText} × 100.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Percent', cells: ['100', '{newPct}'] }, bottom: { label: 'Rent', cells: ['{oldText}', '{newText}'] } } },
    reason: 'The rise is {cText}, and the whole is the old rent: {cText} ÷ {oldText} × 100 = {ansText}%.'
  });

  /* ---------- an amount after a percent up: a raise ---------- */
  const raise = problem({
    id: 'g-raise', strand: 'percent', kind: 'pct-up',
    params: { salary: [36000, 90000, 500], r: [2, 6, 0.5] },
    make: pick => {
      const s = pick('salary'), r = pick('r'), one = s / 100, rough = Math.round(one * r / 100) * 100, ans = Math.round(s * (1 + r / 100) * 100) / 100;
      return { sText: dollars(s), r: r, oneText: dollars(one), rough, roughText: dollars(rough), mult: String(Math.round((1 + r / 100) * 10000) / 10000), upPct: num(100 + r, 1),
        ans, ansText: usd(cents(ans)), part: Math.round(s * r) / 100 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Your raise letter', rows: [{ id: 'now', cells: ['Salary now', '{sText} a year'] }, { id: 'raise', cells: ['Raise', '{r}%'] },
      { id: 'when', cells: ['Starts', 'January 1'] }, { id: 'ins', cells: ['Health insurance', '$120 a month, no change'] }] }],
    given: 'Asked: the new salary. Given: {sText} now and a {r}% raise. The start date and the insurance do not matter.',
    rough: { working: '1% of {sText} is {oneText}, so the raise, {r}% of it, is about {r} of those: about {roughText}.', prompt: 'First the part that changes: about how much is the raise, a year?', places: 0, answer: 'part' },
    setup: 'An amount after a percent up: the old salary is 100%, and the new one is {upPct}% of it, so multiply by {mult}.',
    exact: { working: 'On the calculator: {sText} × {mult} = {ansText}. Look back: {sText} plus about {roughText}, a little more than now.',
      prompt: 'What will your new salary be exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'gave-part', value: 'part', then: 'That is the raise alone. The new salary is the old one plus the raise: × {mult}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Percent', cells: ['100', '{upPct}'] }, bottom: { label: 'Salary', cells: ['{sText}', '{ansText}'] } } },
    reason: 'Up {r}% is {upPct}% of the old salary: {sText} × {mult} = {ansText}.'
  });

  /* ---------- an amount after a percent down: a sale ---------- */
  const COATS = ['Winter coat', 'Rain jacket', 'Hiking boots', 'Desk chair'];
  const sale = problem({
    id: 'g-sale', strand: 'percent', kind: 'pct-up',
    params: { price: [40, 400, 1], p: [10, 15, 20, 25, 30, 40], c: [0, 3, 1] },
    make: pick => {
      const price = pick('price') - 0.01, p = pick('p'), tenth = Math.round(price) / 10, off = tenth * p / 10, ans = Math.round(price * (1 - p / 100) * 100) / 100;
      return { thing: COATS[pick('c')], priceText: usd(cents(price)), p, tenthText: usd(cents(tenth)), offText: usd(cents(off)), rough: off, roughText: usd(cents(off)), payRough: usd(cents(Math.round(price) - off)),
        mult: String(Math.round((1 - p / 100) * 100) / 100), keep: 100 - p, ans, ansText: usd(cents(ans)), part: Math.round(price * p) / 100 };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{thing}', rows: [{ id: 'price', cells: ['{priceText}'] }, { id: 'off', cells: ['{p}% off at the register'] }, { id: 'sizes', cells: ['Sizes small to extra large'] }] }],
    given: 'Asked: what you pay. Given: {priceText} with {p}% off. The sizes do not matter.',
    rough: { working: '10% of {priceText} is about {tenthText}, so the {p}% that comes off is about {offText}.', prompt: 'First the part that changes: about how much comes off?', places: 2, answer: 'part' },
    setup: 'An amount after a percent down: the price is 100%, and you pay {keep}% of it, so multiply by {mult}.',
    exact: { working: 'On the calculator: {priceText} × {mult} = {ansText}. Look back: the tag less about {offText}, about {payRough}.',
      prompt: 'What will you pay exactly, before tax?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'gave-part', value: 'part', then: 'That is the amount that comes off. You pay the rest: × {mult}.' }] },
    figure: { kind: 'figure', type: 'bar', data: { whole: 'The price on the tag, {priceText}, is 100%', parts: [{ label: 'You pay', pct: '{keep}' }, { label: 'Comes off', pct: '{p}' }] } },
    reason: '{p}% off leaves {keep}% of the price: {priceText} × {mult} = {ansText}.'
  });

  FC.gen('math', [tip, sharePct, change, raise, sale]);
  // the worked problem: an 18% tip on $64.50, by the benchmark and by the multiplier
  FC.items('math', [MATH.worked(tip, 'w-tip', { food: 5240, drinks: 1210, pct: 18, tax: 7 })]);
})();
