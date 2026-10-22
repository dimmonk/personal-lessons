// Math, lesson 8 "Circles, boxes and volume": a round rug's area, soil for a box planter and a round raised bed in cubic feet and then bags, and
// mulch in cubic yards (docs/research/math.md, M8: lengths, areas and volumes in everyday jobs; M15: each drawn to scale, the circle in a plan).
// The one rule, lesson 7's carried on: area of the bottom, times the depth, all in one unit (inches ÷ 12 to feet; cubic feet ÷ 27 to cubic yards),
// then what to buy, rounded up. A circle's area is π × radius × radius, the radius half the distance across; π is 3.14 here, as on a phone.
(() => {
  const { num, problem } = MATH;
  const PI = 3.14;
  const up = x => Math.ceil(x - 1e-9);
  const needWords = (need, count, unit) => `${num(need, 2)}, so ${count} ${unit}: always round up`;
  // The size that makes what to buy come out right: the first of the candidates whose need is not a whole number, or, with fr 'low' (a check
  // that must tell rounding up from rounding to the nearest), the first whose need has a fraction under one half (nearest would round down).
  const frac = x => x - Math.floor(x);
  const fitting = (candidates, need, fr) => candidates.find(c => fr === 'low' ? frac(need(c)) > 0.05 && frac(need(c)) < 0.45 : !Number.isInteger(need(c))) ?? candidates.find(c => !Number.isInteger(need(c)));
  // a depth in inches, in feet, as the learner reads it: 6 in is 0.5 ft
  const feetOf = inches => num(inches / 12, 2);

  // The check's rugs and round beds come from a pool of sizes the practice never draws (`pool: 'check'`: quarter feet for a rug, half feet across
  // for a bed), so a check question is never one already answered in the same sitting.
  /* ---------- a round rug ---------- */
  const rug = problem({
    id: 'g-rug', strand: 'volume', kind: 'circle',
    params: { d0: [5, 10, 0.5], pool: ['practice', 'check'] },
    make: pick => {
      const d = pick('d0') + (pick('pool') === 'check' ? 0.25 : 0), r = d / 2, ans = PI * r * r;
      return { d, r, rough: 3 * r * r, roughText: num(3 * r * r, 1), ans, ansText: num(ans, 2), across: PI * d * d, around: PI * d };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Round wool rug', rows: [{ id: 'size', cells: ['{d} ft across'] }, { id: 'pad', cells: ['Rug pad sold by the square foot'] }, { id: 'clean', cells: ['Spot clean only'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'circle', x: 0, y: 0, r: '{r}', across: true, label: 'Rug' }] } }],
    given: 'Asked: how many square feet the rug covers, to buy its pad. Given: {d} ft across. The cleaning note does not matter.',
    rough: { working: 'The radius is half the distance across, {r} ft. With 3 for π: 3 × {r} × {r} = {roughText} square feet.', prompt: 'About how many square feet does the rug cover?', frame: '__', unit: 'square feet' },
    setup: 'A circle’s area is π × radius × radius. The radius is half the distance across: {d} ÷ 2 = {r} ft.',
    exact: { working: 'On the calculator: 3.14 × {r} × {r} = {ansText} square feet. Look back: a bit more than the rough {roughText}, since π is a bit more than 3.',
      prompt: 'How many square feet, to one decimal?', frame: '__', unit: 'square feet', places: 1, tol: { rel: 0.01 },
      traps: [{ slip: 'diameter-as-radius', value: 'across', then: 'That uses {d}, the distance across, as the radius: four times too big. The radius is half of it, {r}.' },
        { slip: 'around-for-area', value: 'around', then: 'That is the distance around the rug, in feet. The area is π × radius × radius.' }] },
    reason: 'The radius is {r} ft, so the area is 3.14 × {r} × {r} = {ansText} square feet.'
  });

  /* ---------- a box planter: cubic feet, then bags ---------- */
  const planter = problem({
    id: 'g-planter', strand: 'volume', kind: 'box',
    params: { l: [3, 8, 0.5], w: [1.5, 3, 0.5], d: [6, 8, 10, 12, 18], bag: [1.5, 2], fr: ['any', 'low'] },
    make: pick => {
      const w = pick('w'), bag = pick('bag'), sizes = [0, 2, 4].flatMap(dd => Array.from({ length: 16 }, (_, k) => ({ l: pick('l') + k * 0.25, d: pick('d') + dd })));
      const { l, d } = fitting(sizes, x => x.l * w * x.d / 12 / bag, pick('fr')), vol = x => x * w * d / 12;
      const v = vol(l), need = v / bag, dRough = Math.round(d / 12 * 10) / 10, rough = Math.round(Math.round(l) * w * dRough * 100) / 100;
      return { ll: l, w, depth: d, bag, dFt: feetOf(d), dHalf: num(dRough), lr: Math.round(l), rough, roughText: num(rough, 1),
        ans: v, ansText: num(v, 2), inches: l * w * d, need, needText: needWords(need, up(need), 'bags'), bags: up(need), short: up(need) - 1 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Cedar planter box', rows: [{ id: 'size', cells: ['Inside', '{ll} ft long, {w} ft wide'] }, { id: 'fill', cells: ['Fill with soil', '{depth} inches deep'] },
      { id: 'bag', cells: ['Potting soil', '{bag} cubic feet a bag, $9.97'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{ll}', h: '{w}', label: 'Soil, {depth} in deep' }] } }],
    given: 'Asked: the soil in cubic feet, then the bags. Given: {ll} by {w} ft, {depth} inches deep, and a bag’s size. The price does not matter here.',
    rough: { working: '{depth} inches is about {dHalf} ft. About {lr} × {w} × {dHalf} = {roughText} cubic feet.', prompt: 'About how many cubic feet of soil?', frame: '__', unit: 'cubic feet' },
    setup: 'Volume is the area of the bottom × the depth, all in feet: {depth} inches ÷ 12 = {dFt} ft.',
    exact: { working: 'On the calculator: {ll} × {w} × {depth} ÷ 12 = {ansText} cubic feet. Look back: near the rough {roughText}.',
      prompt: 'How many cubic feet, to two decimals?', frame: '__', unit: 'cubic feet', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'unit-not-converted', value: 'inches', then: 'That multiplies feet by inches. Change the depth into feet first: {depth} ÷ 12 = {dFt}.' }] },
    then: [{ id: 'buy', does: 'Work out how many to buy, and round up.', working: '{ansText} ÷ {bag} = {needText}.',
      ask: { id: 'bags', kind: 'number', prompt: 'How many bags do you buy?', frame: '__', answer: 'bags', tol: { abs: 0.01 },
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the planter is not full. Round up.' }] } }],
    reason: '{ll} × {w} × {depth} ÷ 12 = {ansText} cubic feet; at {bag} a bag, {needText}.'
  });

  /* ---------- a round raised bed: a circle times a depth ---------- */
  const bed = problem({
    id: 'g-round-bed', strand: 'volume', kind: 'cylinder',
    params: { dia0: [4, 8, 1], d: [6, 8, 10, 12], fr: ['any', 'low'], pool: ['practice', 'check'] },
    make: pick => {
      const dia = pick('dia0') + (pick('pool') === 'check' ? 0.5 : 0), r = dia / 2, d0 = pick('d'), vol = d => PI * r * r * d / 12;
      const sizes = [2, 1.5].flatMap(bag => Array.from({ length: 10 }, (_, k) => ({ d: d0 + k, bag })));
      const { d, bag } = fitting(sizes, x => vol(x.d) / x.bag, pick('fr')), v = vol(d), need = v / bag, dRough = Math.round(d / 12 * 10) / 10, rough = Math.round(3 * r * r * dRough * 100) / 100;
      return { dia, r, dd: d, bag, dFt: feetOf(d), dHalf: num(dRough), bottom: num(PI * r * r, 2), rough, roughText: num(rough, 1),
        ans: v, ansText: num(v, 2), across: PI * dia * dia * d / 12, inches: PI * r * r * d, need, needText: needWords(need, up(need), 'bags'), bags: up(need), short: up(need) - 1 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Round raised bed', rows: [{ id: 'size', cells: ['Across', '{dia} ft'] }, { id: 'fill', cells: ['Fill with soil', '{dd} inches deep'] },
      { id: 'bag', cells: ['Garden soil', '{bag} cubic feet a bag'] }, { id: 'wood', cells: ['Sides', 'cedar'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'circle', x: 0, y: 0, r: '{r}', across: true, label: '{dd} in deep' }] } }],
    given: 'Asked: the soil in cubic feet, then the bags. Given: {dia} ft across, {dd} inches deep, {bag} cubic feet a bag. The wood does not matter.',
    rough: { working: 'Radius {r} ft; with 3 for π the bottom is about 3 × {r} × {r}. {dd} inches is about {dHalf} ft: about {roughText} cubic feet.', prompt: 'About how many cubic feet of soil?', frame: '__', unit: 'cubic feet' },
    setup: 'Volume is the bottom’s area × the depth. The bottom is a circle: π × radius × radius, with the radius half of {dia}, {r} ft. The depth in feet is {dd} ÷ 12 = {dFt}.',
    exact: { working: 'On the calculator: 3.14 × {r} × {r} = {bottom} square feet, × {dd} ÷ 12 = {ansText} cubic feet. Look back: near the rough {roughText}.',
      prompt: 'How many cubic feet, to two decimals?', frame: '__', unit: 'cubic feet', places: 2, tol: { rel: 0.01 },
      traps: [{ slip: 'diameter-as-radius', value: 'across', then: 'That uses {dia}, the distance across, as the radius. The radius is half of it, {r}.' },
        { slip: 'unit-not-converted', value: 'inches', then: 'That multiplies square feet by inches. Change the depth into feet first: {dd} ÷ 12.' }] },
    then: [{ id: 'buy', does: 'Work out how many to buy, and round up.', working: '{ansText} ÷ {bag} = {needText}.',
      ask: { id: 'bags', kind: 'number', prompt: 'How many bags do you buy?', frame: '__', answer: 'bags', tol: { abs: 0.01 },
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the bed is not full. Round up.' }] } }],
    reason: 'The bottom is 3.14 × {r} × {r} = {bottom} square feet; × {dd} ÷ 12 for the depth, {ansText} cubic feet, so {needText}.'
  });

  /* ---------- mulch by the cubic yard ---------- */
  const mulch = problem({
    id: 'g-mulch', strand: 'volume', kind: 'cubic-yards',
    params: { l: [10, 30, 1], w: [3, 8, 1], d: [2, 4, 1], fr: ['any', 'low'] },
    make: pick => {
      const w = pick('w'), d = pick('d'), l0 = pick('l'), yards = l => l * w * d / 12 / 27, l = fitting(Array.from({ length: 40 }, (_, k) => l0 + k), x => yards(x) * 2, pick('fr'));
      const ft = l * w * d / 12, yd = ft / 27, order = Math.ceil(yd * 2 - 1e-9) / 2;
      return { ll: l, w, d, dFt: feetOf(d), ft, ftText: num(ft, 2), rough: ft / 25, roughText: num(ft / 25, 1), ans: yd, ansText: num(yd, 2), byThree: ft / 3,
        order, orderText: num(order), short: order - 0.5 };
    },
    blocks: [{ kind: 'document', form: 'offer', title: 'Garden center: bulk mulch', rows: [{ id: 'sold', cells: ['Sold by the cubic yard', 'in half yards'] }, { id: 'price', cells: ['Price', '$42 a cubic yard'] },
      { id: 'deliver', cells: ['Delivery', '$65'] }], notes: ['Your beds: {ll} ft by {w} ft, mulch {d} inches deep'] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{ll}', h: '{w}', label: 'Beds, {d} in deep' }] } }],
    given: 'Asked: the mulch in cubic yards, then what to order. Given: {ll} by {w} ft, {d} inches deep, sold in half yards. The prices do not matter here.',
    rough: { working: 'In feet: about {ll} × {w} × {dFt} = {ftText} cubic feet. A cubic yard is 27 cubic feet, about 25: about {roughText} cubic yards.',
      prompt: 'About how many cubic yards of mulch?', frame: '__', unit: 'cubic yards', places: 1 },
    setup: 'Volume in feet, then into yards: a cubic yard is 3 ft × 3 ft × 3 ft = 27 cubic feet, so divide by 27.',
    exact: { working: 'On the calculator: {ll} × {w} × {d} ÷ 12 = {ftText} cubic feet, ÷ 27 = {ansText} cubic yards. Look back: near the rough {roughText}, and far fewer yards than feet.',
      prompt: 'How many cubic yards, to two decimals?', frame: '__', unit: 'cubic yards', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'unit-not-converted', value: 'byThree', then: 'That divides by 3. A cubic yard is 3 × 3 × 3 = 27 cubic feet: divide by 27.' }] },
    then: [{ id: 'buy', does: 'Work out what to order, and round up.', working: '{ansText} cubic yards, in half yards, is {orderText}: always round up.',
      ask: { id: 'order', kind: 'number', prompt: 'It is sold in half yards (0.5, 1, 1.5 and so on). How many cubic yards do you order?', frame: '__', answer: 'order', tol: { abs: 0.01 }, places: 1,
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the beds are not covered. Round up to the next half yard.' }] } }],
    reason: '{ll} × {w} × {d} ÷ 12 = {ftText} cubic feet, ÷ 27 = {ansText} cubic yards, so order {orderText}.'
  });

  FC.gen('math', [rug, planter, bed, mulch]);
  // the worked problem: a planter 6 ft by 2 ft, filled 10 inches deep, with 1.5 cubic foot bags
  FC.items('math', [MATH.worked(planter, 'w-planter', { l: 6, w: 2, d: 10, bag: 1.5, fr: 'any' })]);
})();
