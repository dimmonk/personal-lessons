// Math, lesson 9 "Ladders, scale and size": how high a ladder reaches and how long a ladder must be (docs/research/math.md, M12: the trade's
// 1-in-4 rule first, then the square rule for the third side), and an area or a volume at another size (M7: the illusion of linearity, doubling a
// length doubles the area). Each drawn (M15): the ladder as a right triangle, the pizzas as circles.
// The rules, the same in every question:
// - A ladder against a wall is the slant of a right triangle, its longest side. Stood the safe way, its foot is 1 ft out for every 4 ft of ladder.
//   The square rule: up × up + out × out = slant × slant. For the slant, add the two squares; for up or out, take the other's square from the
//   slant's; then √. On the calculator (left to right, no brackets) the square to add or take away goes into the memory first.
// - When every length grows by the same number, an area grows by that number times itself and a volume by it three times over.
// The rough answer: the slant a little longer than the upright side; the size by friendly squares or a friendly cube.
(() => {
  const { num, problem, keys } = MATH;
  const r2 = x => Math.round(x * 100) / 100;
  const JOBS = ['clean the gutters', 'paint the trim under the roof', 'wash the upstairs windows'];

  /* ---------- how high a ladder reaches, stood by the 1-in-4 rule ---------- */
  const reach = problem({
    id: 'g-reach', strand: 'ladder', kind: 'ladder-reach',
    params: { L: [10, 32, 1], job: [0, 2, 1] },
    make: pick => {
      const L = pick('L'), f = L / 4, h = Math.sqrt(L * L - f * f);
      return { L, f, fSq: num(f * f), LSq: num(L * L), diff: num(L * L - f * f), up: r2(h), ans: h, ansText: num(h, 2), rough: L - 1, jobText: JOBS[pick('job')],
        added: Math.sqrt(L * L + f * f), noRoot: L * L - f * f,
        keys: keys([f, '*', f, 'M+', L, '*', L, '-', 'MR', '=', 'sqrt']), keysGives: h };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Straight ladder', rows: [{ id: 'len', cells: ['{L} ft long'] }, { id: 'load', cells: ['Holds up to 250 pounds'] }, { id: 'feet', cells: ['Rubber feet'] }],
      notes: ['You want to {jobText}.'] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{f}', h: '{up}', say: { w: 'out: ?', h: 'up: ?', slant: '{L} ft ladder' } }] } }],
    given: 'Asked: how high up the wall the top of the ladder reaches. Given: the ladder is {L} ft long, and you stand it the safe way. What it holds and its feet do not matter.',
    rough: { working: 'The ladder is the slant, the longest side, so the top reaches a little less than {L} ft: about {rough} ft.',
      prompt: 'You stand the ladder the safe way. About how high up the wall does its top reach?', frame: '__', unit: 'ft' },
    setup: 'A right triangle: the wall goes up, the ground goes out, the ladder is the slant. The safe way, the foot is 1 ft out for every 4 ft: {L} ÷ 4 = {f} ft out. Square rule: up × up = {L} × {L} − {f} × {f}.',
    exact: { working: 'On the calculator, the square to take away into the memory first: {keys} shows {ansText} ft ({LSq} − {fSq} = {diff}, and √ gives the side). Look back: a little less than the {L} ft ladder, near the rough {rough}.',
      prompt: 'How high does it reach, to two decimals?', frame: '__', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['sqrt', 'mem'],
      traps: [{ slip: 'added-squares', value: 'added', then: 'That adds the squares, which gives a side longer than the ladder. The ladder is the longest side: take the foot’s square from the ladder’s.' },
        { slip: 'no-square-root', value: 'noRoot', then: 'That is the height times itself, {diff}. Press √ for the height.' }] },
    reason: 'The foot is {L} ÷ 4 = {f} ft out; {L} × {L} − {f} × {f} = {diff}, and √{diff} is {ansText} ft.'
  });

  /* ---------- how long a ladder must be ---------- */
  const long = problem({
    id: 'g-ladder-long', strand: 'ladder', kind: 'ladder-length',
    params: { H: [10, 30, 0.5] },
    make: pick => {
      const H = pick('H'), d = Math.round(Math.sqrt(16 * H * H / 15) / 4 * 2) / 2, L = Math.sqrt(H * H + d * d);
      return { H, d, HSq: num(H * H), dSq: num(d * d), total: num(H * H + d * d), ans: L, ansText: num(L, 2), rough: H + 1,
        less: Math.sqrt(H * H - d * d), sides: H + d,
        keys: keys([d, '*', d, 'M+', H, '*', H, '+', 'MR', '=', 'sqrt']), keysGives: L };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Painting the house', rows: [{ id: 'eave', cells: ['Bottom of the roof', '{H} ft up'] }, { id: 'out', cells: ['Foot of the ladder, from the wall', 'about {d} ft'] },
      { id: 'paint', cells: ['Paint', '2 gallons, white'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{d}', h: '{H}', say: { slant: 'ladder: ?' } }] } }],
    given: 'Asked: how long the ladder must be to reach {H} ft up. Given: {H} ft up, and the foot {d} ft out. The paint does not matter.',
    rough: { working: 'The ladder is the slant, the longest side, so it is a little longer than {H} ft: about {rough} ft.',
      prompt: 'About how long a ladder reaches the bottom of the roof?', frame: '__', unit: 'ft' },
    setup: 'A right triangle: {H} ft up, {d} ft out, the ladder the slant. Square rule: slant × slant = {H} × {H} + {d} × {d}.',
    exact: { working: 'On the calculator, one square into the memory first: {keys} shows {ansText} ft ({HSq} + {dSq} = {total}, and √ gives the side). Look back: a little longer than {H} ft, near the rough {rough}.',
      prompt: 'How long must the ladder be, to two decimals?', frame: '__', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['sqrt', 'mem'],
      traps: [{ slip: 'subtracted-squares', value: 'less', then: 'That takes one square from the other, which gives a side shorter than the wall. The ladder is the longest side: add the squares.' },
        { slip: 'added-sides', value: 'sides', then: 'That adds the two sides. The slant is shorter than the two together: add their squares, then √.' }] },
    reason: '{H} × {H} + {d} × {d} = {total}, and √{total} is {ansText} ft.'
  });

  /* ---------- two pizzas: an area at another size ---------- */
  const PIES = [8, 10, 12, 14].flatMap(s => [4, 6, 8].map(k => [s, s + k]));   // sizes across, in inches
  const friendlySq = x => x * x < 100 ? Math.round(x * x / 5) * 5 : Math.round(x * x / 25) * 25;
  const pizza = problem({
    id: 'g-pizza', strand: 'size', kind: 'area-scale',
    params: { pie: [0, 11, 1], price: [11, 15, 1], more: [5, 8, 1] },
    make: pick => {
      const [s, g] = PIES[pick('pie')], ans = g / s * (g / s), fs = friendlySq(s), fg = friendlySq(g);
      return { s, g, rs: s / 2, rg: g / 2, dy: (g - s) / 2, gx: s + 2, sSq: s * s, gSq: g * g, fs, fg, rough: Math.round(fg / fs * 10) / 10, ans, ansText: num(ans, 2), wide: g / s,
        small: `$${pick('price')}.99`, large: `$${pick('price') + pick('more')}.99`,
        keys: keys([g, '/', s, '*', g, '/', s, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Tony’s Pizza, cheese', rows: [{ id: 'small', cells: ['Medium, {s} inches', '8 slices', '{small}'] }, { id: 'large', cells: ['Large, {g} inches', '8 slices', '{large}'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'in', parts: [{ shape: 'circle', x: 0, y: '{dy}', r: '{rs}', across: true, label: 'Medium' }, { shape: 'circle', x: '{gx}', y: 0, r: '{rg}', across: true, label: 'Large' }] } }],
    given: 'Asked: how many times as much pizza the large is. Given: {s} and {g} inches across. The slices and the prices do not matter here.',
    rough: { working: '{g} × {g} is {gSq}, about {fg}; {s} × {s} is {sSq}, about {fs}; {fg} ÷ {fs} is about {rough}.',
      prompt: 'About how many times as much pizza is the large?', frame: '__', unit: 'times as much' },
    setup: 'A pizza is an area. Every length of the large is {g} ÷ {s} times the medium’s, so its area is that number times itself.',
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: more than {g} ÷ {s}, because it grows both ways, and near the rough {rough}.',
      prompt: 'How many times as much, to two decimals?', frame: '__', unit: 'times as much', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'linear-area', value: 'wide', then: 'That is how many times as wide. It is also that many times as long, so the area grows by that number times itself.' }] },
    reason: 'The large is {g} ÷ {s} times as wide and as long, so {g} ÷ {s} × {g} ÷ {s} = {ansText} times the pizza.'
  });

  /* ---------- a raised bed at another size: a volume ---------- */
  const CUBE = { 1.5: 3.5, 2: 8, 2.5: 15.5, 3: 27 };
  const bigger = problem({
    id: 'g-scale-volume', strand: 'size', kind: 'volume-scale',
    params: { k: [1.5, 3, 0.5], v: [2, 15, 1] },
    make: pick => {
      const k = pick('k'), v = pick('v'), cube = k * k * k, ans = v * cube;
      return { k, v, cube: num(cube, 3), cubeF: num(CUBE[k], 1), rough: CUBE[k] * v, roughText: num(CUBE[k] * v, 1), ans, ansText: num(ans, 2),
        times: v * k, square: v * k * k, keys: keys([k, '*', k, '*', k, '*', v, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Raised beds', rows: [{ id: 'old', cells: ['Old bed took', '{v} cubic feet of soil'] }, { id: 'new', cells: ['New bed, same shape: each length', '{k} times as big'] },
      { id: 'wood', cells: ['Wood', 'cedar boards'] }] }],
    given: 'Asked: the soil the new bed takes. Given: the old bed took {v} cubic feet, and every length is {k} times as big. The wood does not matter.',
    rough: { working: '{k} × {k} × {k} is about {cubeF}; × {v}: about {roughText} cubic feet.', prompt: 'About how many cubic feet of soil does the new bed take?', frame: '__', unit: 'cubic feet' },
    setup: 'Soil fills a volume. Every length is {k} times as big, so the volume is {k} × {k} × {k} = {cube} times as big.',
    exact: { working: 'On the calculator: {keys} shows {ansText} cubic feet. Look back: near the rough {roughText}, and far more than {k} times {v}.',
      prompt: 'How many cubic feet, to two decimals?', frame: '__', unit: 'cubic feet', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'linear-volume', value: 'times', then: 'That is {k} times the soil, as if only one length grew. All three grow: {k} × {k} × {k}.' },
        { slip: 'area-for-volume', value: 'square', then: 'That is {k} × {k}, as for an area. A volume grows three ways: {k} × {k} × {k}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Each length', cells: ['× 1', '× {k}'] }, bottom: { label: 'Soil', cells: ['{v} cubic feet', '{ansText} cubic feet'] } } },
    reason: 'Every length × {k}, so the volume × {k} × {k} × {k} = {cube}: {v} × {cube} = {ansText} cubic feet.'
  });

  FC.gen('math', [reach, long, pizza, bigger]);
  // the worked problems: a 16 ft ladder stood the safe way; a 12 and a 16 inch pizza
  FC.items('math', [MATH.worked(reach, 'w-reach', { L: 16, job: 0 }), MATH.worked(pizza, 'w-pizza', { pie: 6, price: 12, more: 6 })]);
})();
