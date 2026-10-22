// Math, lesson 14 "A missing number": a formula worked backward (°F to °C), when two price plans cost the same, and the side of a square bed from
// the area it and its path cover, by filling in the missing corner (docs/research/math.md, M24: each school topic through the everyday problem it
// solves; M13: worked examples are strongest in algebra; M15: the square drawn with its strips and the missing corner).
// The rules, the same in every question:
// - Backward: undo the formula's steps in the opposite order, the last one done first undone.
// - Two plans: the pass saves the difference in price on each visit; it pays for itself after its fee ÷ that saving. Below that, pay each
//   time; above it, the pass costs less.
// - A square plus two strips w wide along two sides: add the missing corner, w × w, to make one whole square; its side is √ of that area; the
//   bed is that side less w.
(() => {
  const { usd, dollars, num, problem, keys } = MATH;

  /* ---------- °F to °C: the formula backward ---------- */
  const celsius = problem({
    id: 'g-celsius', strand: 'unknown', kind: 'rearrange',
    params: { F: [50, 100, 1], low: [8, 20, 1], wind: [5, 15, 1] },
    make: pick => {
      const F = pick('F'), C = (F - 32) / 1.8, half = (F - 30) / 2, tenth = Math.round(half / 10);
      return { F, lowF: F - pick('low'), fm: F - 30, half: num(half, 1), tenth, rough: half + tenth, roughText: num(half + tenth, 1), ans: C, ansText: num(C, 1), sub: F - 32,
        wrongOrder: F / 1.8 - 32, forward: 1.8 * F + 32, back: num(1.8 * Math.round(C * 10) / 10 + 32, 2), Cr: num(Math.round(C * 10) / 10, 1), keys: keys([F, '-', 32, '=', '/', 1.8, '=']), keysGives: C };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Weather for Saturday', rows: [{ id: 'high', cells: ['High', '{F}°F'] }, { id: 'low', cells: ['Low', '{lowF}°F'] }, { id: 'wind', cells: ['Wind', '{wind} mph'] }],
      notes: ['°F = 1.8 × °C + 32', 'Your cousin in Canada wants the high in °C.'] }],
    given: 'Asked: the high, {F}°F, in °C. Given: the formula from °C to °F. The low and the wind do not matter.',
    rough: { working: 'Take off 30 and halve: {F} − 30 = {fm}, half is {half}. 1.8 is a tenth less than 2, so add about a tenth: about {roughText}°C.',
      prompt: 'About how many °C is the high?', frame: '__', unit: '°C', places: 1 },
    setup: 'The formula goes from °C to °F: times 1.8, then add 32. Backward, undo the last step first: take away 32, then divide by 1.8.',
    exact: { working: 'On the calculator: {keys} shows {ansText}°C. Look back: 1.8 × {Cr} + 32 = {back}, close to the {F}°F you started from.',
      prompt: 'How many °C is the high, to one decimal?', frame: '__', unit: '°C', places: 1, tol: { abs: 0.06 },
      traps: [{ slip: 'wrong-order-undo', value: 'wrongOrder', then: 'That divides by 1.8 first. The last step done, + 32, is the first undone: take away 32, then divide.' },
        { slip: 'formula-forward', value: 'forward', then: 'That uses the formula forward, as if {F} were °C. Go backward: take away 32, then divide by 1.8.' }] },
    reason: 'Backward: {F} − 32 = {sub}, ÷ 1.8 = {ansText}°C.'
  });

  /* ---------- two price plans: from how many visits does the pass cost less? ---------- */
  // the yoga studio's prices are the pool's doubled, so both are like real prices; the number of visits where they cost the same is the same
  const STORY = [{ title: 'City pool prices', one: 'swim', ones: 'swims', each: 'Pay each swim', pass: 'Summer pass', xName: 'Lockers', xValue: 'free', k: 1 },
    { title: 'Yoga studio prices', one: 'class', ones: 'classes', each: 'Drop-in class', pass: 'Monthly pass', xName: 'Mat rental', xValue: '$3', k: 2 }];
  const plans = problem({
    id: 'g-plans', strand: 'unknown', kind: 'break-even',
    params: { story: [0, 1, 1], fee0: [30, 60, 5], s0: [2, 5, 1], gap: [4, 8, 1], side: [0, 1, 1] },
    make: pick => {
      const { k, ...st } = STORY[pick('story')], fee = pick('fee0') * k, s = pick('s0') * k, d = pick('gap') * k, r = s + d, x = fee / d, n = Math.round(x), first = Math.floor(x + 1e-9) + 1;
      const use = pick('side') ? first + 2 : Math.max(1, first - 3), costEach = r * use, costPass = fee + s * use;
      return { ...st, fee, feeText: dollars(fee), s, r, d, x, xText: num(x, 2), ans: first, first, below: first - 1, n, near: d * n, use, costEach: dollars(costEach), costPass: dollars(costPass),
        cheaper: costPass < costEach ? 'pass' : 'each', rough: n, overR: fee / r, atBelow: dollars(r * (first - 1)), passBelow: dollars(fee + s * (first - 1)),
        atFirst: dollars(r * first), passFirst: dollars(fee + s * first), keys: keys([fee, '/', d, '=']), keysGives: x };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{title}', rows: [{ id: 'each', cells: ['{each}', '${r}'] }, { id: 'pass', cells: ['{pass}, {feeText} a month, plus each {one}', '${s}'] },
      { id: 'extra', cells: ['{xName}', '{xValue}'] }] }],
    given: 'Asked: from how many {ones} a month the pass costs less, then which costs less if you go {use} times. Given: ${r} a {one}, or {feeText} a month plus ${s} a {one}. The last line does not matter.',
    rough: { working: 'The pass saves ${r} − ${s} = ${d} each time. {feeText} ÷ {d}: {d} × {n} = {near}, near {fee}, so they cost about the same at {n}.',
      prompt: 'About how many {ones} a month make the two plans cost the same?', frame: '__', unit: '{ones} a month', answer: 'x' },
    setup: 'The pass costs {feeText} first but saves ${d} each time. It has paid for itself after {feeText} ÷ ${d}; from the next whole {one} on, it costs less.',
    exact: { working: 'On the calculator: {keys} shows {xText}. So from {first} a month the pass costs less: at {below}, each time {atBelow} and the pass {passBelow}; at {first}, each time {atFirst} and the pass {passFirst}.',
      prompt: 'From how many {ones} a month does the pass cost less?', frame: '__', unit: '{ones} a month', tol: { abs: 0.01 },
      traps: [{ slip: 'rounded-down', value: 'below', then: 'At {below} the pass does not cost less yet: each time {atBelow}, the pass {passBelow}.' },
        { slip: 'fee-over-price', value: 'overR', then: 'That divides the fee by the full price. Each time, the pass saves only the difference, ${r} − ${s} = ${d}.' }] },
    then: [{ id: 'which', does: 'Compare at the number you go.', working: 'At {use}: paying each time costs {costEach}, the pass {costPass}.',
      ask: { id: 'which', kind: 'choose', prompt: 'You go {use} times a month. Which costs less?', from: 'plan-cost', right: '{cheaper}',
        then: { each: 'At {use}: paying each time costs {costEach}, the pass {costPass}.', pass: 'At {use}: paying each time costs {costEach}, the pass {costPass}.' } } }],
    reason: 'The pass saves ${d} each time, so it pays for itself after {fee} ÷ {d} = {xText}, and costs less from {first} a month. At {use}: each time {costEach}, the pass {costPass}.'
  });

  /* ---------- a square bed and its path: fill in the missing corner ---------- */
  const square = problem({
    id: 'g-square-bed', strand: 'unknown', kind: 'complete-square',
    params: { T: [60, 300, 4], w: [2, 4, 1] },
    make: pick => {
      const T = pick('T'), w = pick('w'), whole = T + w * w, side = Math.sqrt(whole), x = side - w;
      const near = Math.round(side), rough = near - w;
      return { T, w, corner: w * w, whole, sideText: num(side, 2), near, nearSq: near * near, rough, ans: x, ansText: num(x, 2), xv: Math.round(x * 100) / 100, wy: w,
        noCorner: Math.sqrt(T) - w, noPath: Math.sqrt(T), keys: keys([w, '*', w, '+', T, '=', 'sqrt', '-', w, '=']), keysGives: x };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Backyard plan', rows: [{ id: 'bed', cells: ['Vegetable bed', 'square'] }, { id: 'path', cells: ['Path along two sides, wide', '{w} ft'] },
      { id: 'corner', cells: ['Corner between the paths', 'shed, not covered'] }, { id: 'fabric', cells: ['Weed fabric for the bed and the paths', '{T} square feet'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: '{wy}', w: '{xv}', h: '{xv}', label: 'Bed', say: { w: '?', h: '?' } },
        { x: 0, y: 0, w: '{xv}', h: '{wy}', label: 'Path', say: { w: ' ', h: '{w} ft' } }, { x: '{xv}', y: '{wy}', w: '{wy}', h: '{xv}', label: 'Path', say: { w: '{w} ft', h: ' ' } },
        { x: '{xv}', y: 0, w: '{wy}', h: '{wy}', cut: true, say: { w: ' ', h: ' ' } }] } }],
    given: 'Asked: the side of the square bed. Given: the bed and the two paths cover {T} square feet; the paths are {w} ft wide; the corner is not covered.',
    rough: { working: 'With the corner filled in, the whole is {T} + {corner} = {whole}, near {near} × {near} = {nearSq}. So the whole is about {near} ft across, and the bed about {near} − {w} = {rough} ft.',
      prompt: 'About how long is each side of the bed?', frame: '__', unit: 'ft' },
    setup: 'The bed and the two paths are a square with its corner missing. Fill in the corner, {w} × {w} = {corner}: now one whole square of {whole} square feet, whose side is the bed + {w}.',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft (√{whole} = {sideText}, less {w}). Look back: near the rough {rough}.',
      prompt: 'How long is each side of the bed, to two decimals?', frame: '__', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['sqrt'],
      traps: [{ slip: 'forgot-corner', value: 'noCorner', then: 'That leaves out the missing corner. Add {w} × {w} = {corner} to make one whole square first.' },
        { slip: 'gave-whole-side', value: 'noPath', then: 'That is the side of the bed and the path together. Take the path’s {w} ft off.' }] },
    reason: '{T} + {w} × {w} = {whole}, a whole square of side {sideText} ft; less the {w} ft path, the bed is {ansText} ft.'
  });

  FC.gen('math', [celsius, plans, square]);
  // the worked problem: a high of 77°F
  FC.items('math', [MATH.worked(celsius, 'w-celsius', { F: 77, low: 12, wind: 8 })]);
})();
