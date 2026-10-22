// Math, lesson 10 "Growth year by year": rent and savings that add the same amount each year against the same that multiply by the same
// number, and how many years until savings reach a goal (docs/research/math.md, M9: adults treat compound growth as straight-line, so it is
// worked by the multiplier on the calculator, never by feel, and the rule of 72 is only the rough check; M15: the year table).
// The rules, the same in every question:
// - Decide first: a dollar amount each year adds (start + amount × years); a percent each year multiplies (start × the multiplier, once for each
//   year, the xʸ button doing the years in one go: 1.04 xʸ 18 × 5000).
// - Rough, for one that multiplies: it doubles in about 72 ÷ the percent years; count the doublings.
// - How many years until: try the rough number of years on the calculator, then the year before or after; the answer is the first year there.
// Each story comes in both forms, one line apart (L4's look-alike pairs, P12). Rates are a year's growth with interest added (APY).
(() => {
  const { usd, dollars, num, problem, keys } = MATH;
  const cents = x => Math.round(x * 100);
  const TIMES = { 1: 'one doubling', 2: 'two doublings' };
  const SAVE = [[3, 24], [4, 18], [4, 36], [5, 14], [5, 28]];   // percent a year, years: a whole number of doublings by the rule of 72
  const RENT = [[3, 24], [4, 18], [6, 12]];

  // one story in its two forms. spec: { id, cases, params (start, a), startName, title, rows(mult), given, prompt, unit }
  function pair(spec){
    const one = mult => problem({
      id: `${spec.id}-${mult ? 'pct' : 'add'}`, strand: 'growth', kind: mult ? 'multiplies' : 'adds',
      params: { c: [0, spec.cases.length - 1, 1], ...spec.params },
      make: pick => {
        const [r, n] = spec.cases[pick('c')], P = pick('P'), a = pick('a'), m = 1 + r / 100, grow = Math.pow(m, n);
        const ans = mult ? P * grow : P + a * n, D = Math.round(r * n / 72), Pr = Math.round(P / 100) * 100;
        const year = k => mult ? P * Math.pow(m, k) : P + a * k;
        return { r, n, m, Pn: num(P), PText: dollars(P), aText: dollars(a), a, aN: num(a), an: num(a * n), dbl: num(72 / r, 1), dWord: TIMES[D], Pr: dollars(Pr),
          rough: mult ? P * Math.pow(2, D) : Pr + a * n, roughText: dollars(mult ? P * Math.pow(2, D) : Pr + a * n),
          ans, ansText: usd(cents(ans)), y1: usd(cents(year(1))), y2: usd(cents(year(2))),
          simple: P * (1 + r * n / 100), part: ans - P, compounded: P * Math.pow(1 + a / P, n),
          keys: mult ? keys([m, 'pow', n, '*', P, '=']) : keys([a, '*', n, '+', P, '=']), keysGives: ans };
      },
      blocks: [{ kind: 'document', form: 'offer', title: spec.title, rows: spec.rows(mult) }],
      asks0: [{ id: 'grows', kind: 'choose', prompt: 'Each year, does it add the same amount or multiply by the same number?', from: 'growth', right: mult ? 'multiplies' : 'adds', shuffle: true,
        slips: mult ? { adds: 'simple-not-compound' } : { multiplies: 'compounded-adds' },
        then: mult ? { adds: 'It grows by {r}% each year, and each year’s {r}% is of a bigger amount than the last: it multiplies by {m}.' }
          : { multiplies: 'It grows by {aText} each year, the same dollars every year: it adds.' } }],
      decide: { does: 'Decide how it grows.', working: mult ? 'A percent each year, of a bigger amount each time: it multiplies by {m} a year.' : 'The same dollar amount each year: it adds {aText} a year.' },
      given: spec.given,
      rough: { working: mult ? 'It doubles in about 72 ÷ {r} = {dbl} years, so {n} years is {dWord}: about {roughText}.' : 'About {Pr} + {aN} × {n} = {roughText}.',
        prompt: `${spec.prompt} First, about how much?`, places: 0 },
      exact: { working: mult ? 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}, and more than adding {r}% of {PText} each year would give.'
        : 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}.',
        prompt: 'And exactly, to the cent?', places: 2, tol: mult ? { abs: 0.1, rel: 0.00001 } : { abs: 0.01 }, calc: mult ? ['pow'] : undefined,   // a bank's year-by-year cents land within a few cents
        traps: mult ? [{ slip: 'simple-not-compound', value: 'simple', then: 'That adds {r}% of {PText} every year. Each year’s {r}% is of the bigger amount: {m} xʸ {n} × {Pn}.' },
          { slip: 'gave-part', value: 'part', then: 'That is only what it grew by. The question is the whole amount.' }]
          : [{ slip: 'compounded-adds', value: 'compounded', then: 'That grows faster each year. It adds the same {aText} every year: {aN} × {n} + {Pn}.' },
            { slip: 'gave-part', value: 'part', then: 'That is only what it grew by. The question is the whole amount.' }] },
      figure: { kind: 'figure', type: 'years', data: { columns: ['Year', spec.unit], rows: [['0', '{PText}'], ['1', '{y1}'], ['2', '{y2}'], ['{n}', '{ansText}']] } },
      reason: mult ? 'It multiplies by {m} each year: {m} xʸ {n} × {Pn} = {ansText}.' : 'It adds {aText} each year: {aN} × {n} + {Pn} = {ansText}.'
    });
    return [one(false), one(true)];
  }

  const save = pair({
    id: 'g-save', cases: SAVE, params: { P: [2000, 20000, 350], a: [500, 2000, 250] }, title: 'Saving for later', unit: 'Savings',
    rows: mult => mult ? [{ id: 'start', cells: ['Put in now', '{PText}'] }, { id: 'rate', cells: ['Savings account, interest added to the balance', '{r}% a year (APY)'] }, { id: 'fee', cells: ['Monthly fee', 'none'] }]
      : [{ id: 'start', cells: ['Put in now', '{PText}'] }, { id: 'rate', cells: ['Each year, into a safe at home', 'add {aText}'] }, { id: 'fee', cells: ['Safe', 'fireproof, $89'] }],
    given: 'Asked: the savings after {n} years, if it keeps growing this way. Given: {PText} now and how it grows each year. The last line does not matter.',
    prompt: 'If it keeps growing this way, what will the savings be after {n} years?'
  });
  const rent = pair({
    id: 'g-rent', cases: RENT, params: { P: [1200, 2400, 35], a: [50, 150, 25] }, title: 'Your lease', unit: 'Rent a month',
    rows: mult => [{ id: 'now', cells: ['Rent now', '{PText} a month'] }, { id: 'rise', cells: ['Each year', mult ? 'up {r}%' : 'up {aText} a month'] }, { id: 'pets', cells: ['Pet rent', '$35 a month'] }],
    given: 'Asked: the rent in {n} years, if it keeps rising this way. Given: {PText} now and the yearly rise. Pet rent does not matter.',
    prompt: 'If it keeps rising this way, what will the rent be a month in {n} years?'
  });

  /* ---------- how many years until savings reach a goal ---------- */
  // The goal is a round sum a bit more than double the deposit (2.1 to 2.5 times), so the first year there is found by trying years, and the
  // rough answer is the doubling time nudged up: a bit more than double takes about a fifth longer (2.3 times is 1.2 doublings).
  const RATES = [2.5, 3, 3.5, 4, 4.5, 5];
  const howLong = problem({
    id: 'g-how-long', strand: 'growth', kind: 'how-long',
    params: { i: [0, 5, 1], P: [3000, 15000, 250], q: [2.1, 2.3, 0.1] },
    make: pick => {
      const r = RATES[pick('i')], P = pick('P'), m = 1 + r / 100, T = Math.ceil(P * pick('q') / 500) * 500, at = k => P * Math.pow(m, k);
      const dbl = 72 / r, rough = Math.round(dbl * 1.2), n = Array.from({ length: 80 }, (_, k) => k + 1).find(k => at(k) >= T - 1e-9);
      // the years tried, in the order tried: the rough year, then one year at a time toward the first year there, and one past it
      const step = rough >= n ? -1 : 1, tries = Array.from({ length: Math.abs(rough - n) + (rough >= n ? 2 : 1) }, (_, k) => rough + step * k);
      const line = k => `${k}: ${keys([m, 'pow', k, '*', P, '='])} ${usd(cents(at(k)))}, ${at(k) >= T - 1e-9 ? 'there' : 'not yet'}`;
      return { r, m, PText: dollars(P), TText: dollars(T), dbl: num(dbl, 1), dblR: Math.round(dbl), rough, ans: n, n, prev: n - 1, prevText: usd(cents(at(n - 1))),
        simple: Math.ceil((T / P - 1) * 100 / r - 1e-9), tries: tries.map(line).join('; '),
        keys: keys([m, 'pow', n, '*', P, '=']), keysGives: at(n), keys2: keys([m, 'pow', n - 1, '*', P, '=']), keys2Gives: at(n - 1) };
    },
    blocks: [{ kind: 'document', form: 'offer', title: 'Online savings account', rows: [{ id: 'rate', cells: ['Interest, added to the balance', '{r}% a year (APY)'] }, { id: 'min', cells: ['Lowest balance', '$100'] },
      { id: 'yours', cells: ['You put in', '{PText}'] }], notes: ['Your goal: {TText} for a down payment on a home.'] }],
    given: 'Asked: how many whole years until {PText} grows to {TText}, if the rate stays. Given: {r}% a year, added each year. The lowest balance does not matter.',
    rough: { working: '{TText} is a bit more than double {PText}. It doubles in about 72 ÷ {r} = {dbl} years; a bit more than double takes about a fifth longer: about {rough} years.',
      prompt: 'About how many years until it reaches {TText}?', frame: '__', unit: 'years', places: 0 },
    setup: 'It multiplies by {m} each year. Try a number of years with xʸ, then the years next to it: the answer is the first year it gets there.',
    exact: { working: 'Try {tries}. So {n} years. Look back: near the rough {rough}.',
      prompt: 'How many whole years until it reaches {TText}?', frame: '__', unit: 'years', tol: { abs: 0.01 }, calc: ['pow'],
      traps: [{ slip: 'rounded-down', value: 'prev', then: 'After {prev} years it is {prevText}, still short of {TText}.' },
        { slip: 'simple-not-compound', value: 'simple', then: 'That adds {r}% of the start each year. Each year’s {r}% is of a bigger amount, so it gets there sooner.' }] },
    reason: 'After {prev} years it is {prevText}, short of {TText}; after {n} years it is there. So {n} years.'
  });

  FC.gen('math', [...save, ...rent, howLong]);
  // the worked problem: $5,000 in savings at 4% a year for 18 years
  FC.items('math', [MATH.worked(save[1], 'w-save', { c: 1, P: 5000, a: 500 })]);
})();
