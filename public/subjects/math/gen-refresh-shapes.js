// Math, lesson 16 "Circles and right triangles", a refresher (Unit 6, docs/subjects/math/plan.md; research M25 to M27, M32): four school facts
// a hands-on person still reaches for, each brought back with fresh numbers.
// The facts, the same in every question:
// - Around a circle = π × across (π is 3.14 here, as in lesson 8); across = around ÷ π. The radius is half the distance across.
// - A right triangle: up × up + out × out = slant × slant (the square rule of lesson 9). Sides of 3, 4 and 5, or any multiple of them, make a
//   square corner; a corner is square when the slant measures what the rule says.
// - A triangle's three angles make 180°; two angles side by side on a straight line make 180°.
// - A length from an angle (in degrees, the calculator's sin, cos and tan): rise = run × tan (angle); height = slant × sin (angle);
//   run = slant × cos (angle). The angle is the one at the ground.
// Every working ends with a look-back (M6): around is a bit more than 3 times across; the slant is the longest side; the angles add back to 180.
(() => {
  const { num, reminder, keys } = MATH;
  const PI = 3.14;
  const deg = a => a * Math.PI / 180;
  const r2 = x => Math.round(x * 100) / 100;   // a side for the drawing

  /* ---------- around a round table: π × across ---------- */
  const trim = reminder({
    id: 'g-trim', strand: 'circle-around', kind: 'around-from-across',
    params: { d: [30, 60, 2], what: [0, 2, 1] },
    make: pick => {
      const d = pick('d'), r = d / 2, ans = PI * d;
      const WHAT = [['Round table top', 'edge banding'], ['Round mirror', 'trim'], ['Round planter', 'edging strip']][pick('what')];
      return { d, r, ans, ansText: num(ans, 2), three: num(3 * d, 0), thing: WHAT[0], band: WHAT[1], radius: PI * r, area: PI * r * r,
        keys: keys([3.14, '*', d, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'across', cells: ['Across', '{d} inches'] }, { id: 'band', cells: ['To cover its edge', '{band}, sold by the inch'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'in', parts: [{ shape: 'circle', x: 0, y: 0, r: '{r}', across: true, label: '{thing}' }] } }],
    given: 'Asked: the length of {band} that goes once around the edge. Given: {d} inches across.',
    fact: 'Around a circle = π × across, with π about 3.14.',
    exact: { working: 'On the calculator: {keys} shows {ansText} inches. Look back: a bit more than 3 × {d} = {three}, as it should be.',
      prompt: 'How many inches of {band} go around it, to two decimals?', unit: 'inches', places: 2, tol: { rel: 0.002 },
      traps: [{ slip: 'radius-for-across', value: 'radius', then: 'That is π × the radius, half the way around. Around is π × the whole distance across.' },
        { slip: 'around-for-area', value: 'area', then: 'That is the area, π × radius × radius, in square inches. The edge is a length: π × across.' }] },
    reason: 'Around = π × across: 3.14 × {d} = {ansText} inches.'
  });

  /* ---------- across a tree trunk from the tape around it: around ÷ π ---------- */
  const trunk = reminder({
    id: 'g-trunk', strand: 'circle-around', kind: 'across-from-around',
    params: { C: [48, 130, 1], bar: [16, 20, 2] },
    make: pick => {
      const C = pick('C'), ans = C / PI;
      return { C, bar: pick('bar'), ans, ansText: num(ans, 2), third: num(C / 3, 1), times: C * PI, half: C / (2 * PI),
        keys: keys([C, '/', 3.14, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Taking down a tree', rows: [{ id: 'around', cells: ['Tape around the trunk', '{C} inches'] }, { id: 'bar', cells: ['Chain saw bar', '{bar} inches'] }] }],
    given: 'Asked: how many inches across the trunk is. Given: {C} inches around. The bar is for later.',
    fact: 'Around = π × across, so across = around ÷ π, with π about 3.14.',
    exact: { working: 'On the calculator: {keys} shows {ansText} inches. Look back: a bit less than a third of {C}, which is {third}.',
      prompt: 'How many inches across is the trunk, to two decimals?', unit: 'inches', places: 2, tol: { rel: 0.002 },
      traps: [{ slip: 'times-for-divide', value: 'times', then: 'That multiplies by π. The distance across is the shorter one: around ÷ π.' },
        { slip: 'radius-for-across', value: 'half', then: 'That is the radius, half the way across. Across is around ÷ π.' }] },
    reason: 'Across = around ÷ π: {C} ÷ 3.14 = {ansText} inches.'
  });

  /* ---------- a deck frame's diagonal, to check it is square ---------- */
  const diagonal = reminder({
    id: 'g-deck-diagonal', strand: 'square-check', kind: 'diagonal',
    params: { a: [9, 20, 1], b: [5, 14, 0.5] },
    make: pick => {
      const a = pick('a'), b = pick('b'), ans = Math.sqrt(a * a + b * b);
      return { a, b, aSq: num(a * a), bSq: num(b * b), total: num(a * a + b * b), ans, ansText: num(ans, 2), sides: a + b, noRoot: a * a + b * b,
        keys: keys([a, '*', a, 'M+', b, '*', b, '+', 'MR', '=', 'sqrt']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Deck frame', rows: [{ id: 'long', cells: ['Long side', '{a} ft'] }, { id: 'short', cells: ['Short side', '{b} ft'] }, { id: 'boards', cells: ['Joists', '16 inches apart'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{a}', h: '{b}', say: { slant: 'diagonal: ?' } }] } }],
    given: 'Asked: what each corner-to-corner diagonal must measure when the frame is square. Given: sides of {a} ft and {b} ft. The joists do not matter.',
    fact: 'A square corner makes a right triangle with the diagonal as its slant: side × side + side × side = diagonal × diagonal.',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft ({aSq} + {bSq} = {total}, and √ gives the side). Look back: longer than {a} ft, shorter than {a} + {b}.',
      prompt: 'What must each diagonal measure, in feet, to two decimals?', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['sqrt', 'mem'],
      traps: [{ slip: 'added-sides', value: 'sides', then: 'That adds the two sides. The diagonal is shorter than both together: add their squares, then √.' },
        { slip: 'no-square-root', value: 'noRoot', then: 'That is the diagonal times itself, {total}. Press √ for the diagonal.' }] },
    reason: '{a} × {a} + {b} × {b} = {total}, and √{total} is {ansText} ft. When both diagonals read that, the corners are square.'
  });

  /* ---------- 3-4-5: what the diagonal reads, and is the corner square? ---------- */
  const OFF = ['1 inch', '2 inches', '3 inches'];
  const threeFour = reminder({
    id: 'g-345', strand: 'square-check', kind: 'three-four-five',
    params: { k: [1, 6, 1], flip: [0, 1, 1], square: [0, 1, 1], off: [1, 3, 1], way: [0, 1, 1] },
    make: pick => {
      const k = pick('k'), flip = pick('flip'), sq = pick('square') === 1, off = pick('off'), longer = pick('way') === 1;
      const one = flip ? 4 * k : 3 * k, two = flip ? 3 * k : 4 * k, ans = 5 * k;
      const read = sq ? `${ans} ft exactly` : longer ? `${ans} ft ${OFF[off - 1]}` : `${ans} ft less ${OFF[off - 1]}`;
      return { k, one, two, ans, read, verdict: sq ? 'square' : 'not-square', sides: one + two, noRoot: ans * ans,
        say: sq ? `It reads ${ans} ft exactly, so the corner is square.` : `It is ${OFF[off - 1]} off ${ans} ft, so the corner is not square: move one string until it reads ${ans} ft.`,
        keys: keys([one, '*', one, 'M+', two, '*', two, '+', 'MR', '=', 'sqrt']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Laying out a shed floor', rows: [{ id: 'one', cells: ['Marked along one string', '{one} ft from the corner'] }, { id: 'two', cells: ['Marked along the other', '{two} ft from the corner'] },
      { id: 'tape', cells: ['Tape between the two marks', '{read}'] }] }],
    given: 'Asked: what the tape between the marks must read for a square corner, then whether this corner is square. Given: marks {one} ft and {two} ft from the corner, and the tape reading.',
    fact: 'Sides of 3, 4 and 5, or any multiple of them, make a right triangle: 3 × 3 + 4 × 4 = 5 × 5. So marks at 3 and 4 (times anything) are 5 (times the same) apart only when the corner is square.',
    exact: { working: '{one} and {two} are 3 and 4 times {k}, so the tape must read 5 × {k} = {ans} ft. On the calculator, to check: {keys} shows {ans}. Look back: the longest of the three.',
      prompt: 'What must the tape read for a square corner, in feet?', unit: 'ft', tol: { abs: 0.01 }, calc: ['sqrt', 'mem'],
      traps: [{ slip: 'added-sides', value: 'sides', then: 'That adds the two marks. {one} and {two} are 3 and 4 times {k}, so the tape should read 5 × {k} = {ans}.' },
        { slip: 'no-square-root', value: 'noRoot', then: 'That is the diagonal times itself. Press √, or use 5 × {k}.' }] },
    then: [{ id: 'verdict', does: 'Compare the tape with what it must read.', working: '{say}',
      ask: { id: 'square', kind: 'choose', prompt: 'Is the corner square?', from: 'corner', right: '{verdict}', shuffle: true,
        then: { square: '{say}', 'not-square': '{say}' } } }],
    reason: 'Marks at {one} and {two} ft are 3-4-5 times {k}, so a square corner puts them {ans} ft apart; the tape reads {read}.'
  });

  /* ---------- the third angle of a triangle ---------- */
  const PLACES = [['A roof truss', 'meets the ceiling joist at', 'at the peak'], ['A gable end', 'meets the top plate at', 'at the ridge']];
  const third = reminder({
    id: 'g-third-angle', strand: 'angle-sum', kind: 'third-angle',
    params: { A: [18, 62, 1], Bp: [18, 62, 1], what: [0, 1, 1] },
    make: pick => {
      // two angles making 90 would leave a third of 90, the same as the two added: the second steps past it
      const A = pick('A'), B = A + pick('Bp') === 90 ? pick('Bp') + 2 : pick('Bp'), ans = 180 - A - B, [thing, meets, where] = PLACES[pick('what')];
      return { A, B, ans, thing, meets, where, both: A + B, turn: 360 - A - B, keys: keys([180, '-', A, '-', B, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'a', cells: ['One side {meets}', '{A}°'] }, { id: 'b', cells: ['The other side {meets}', '{B}°'] }] }],
    given: 'Asked: the angle {where}. Given: the two other angles of the triangle, {A}° and {B}°.',
    fact: 'The three angles of any triangle add up to 180°.',
    exact: { working: 'On the calculator: {keys} shows {ans}°. Look back: {A} + {B} + {ans} = 180.',
      prompt: 'What is the angle {where}, in degrees?', unit: '°', tol: { abs: 0.01 },
      traps: [{ slip: 'full-turn', value: 'turn', then: 'That takes them from 360°, a full turn. A triangle’s angles make 180°.' },
        { slip: 'added-angles', value: 'both', then: 'That is the two angles added. The third is what is left of 180°.' }] },
    reason: '180° − {A}° − {B}° = {ans}°.'
  });

  /* ---------- the angle on the other side of a brace: a straight line ---------- */
  const line = reminder({
    id: 'g-straight-line', strand: 'angle-sum', kind: 'straight-line',
    params: { A: [24, 78, 1], what: [0, 2, 1] },
    make: pick => {
      const A = pick('A'), ans = 180 - A, thing = ['A corner brace', 'A stair stringer', 'A barn door’s diagonal board'][pick('what')];
      return { A, ans, thing, right: 90 - A, turn: 360 - A, keys: keys([180, '-', A, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'a', cells: ['Angle with the floor on one side', '{A}°'] }, { id: 'b', cells: ['Angle on its other side', '?'] }] }],
    given: 'Asked: the angle between the board and the floor on its other side. Given: {A}° on one side.',
    fact: 'Two angles side by side along a straight line make 180°.',
    exact: { working: 'On the calculator: {keys} shows {ans}°. Look back: {A} + {ans} = 180, and the angle on the open side is the wider one.',
      prompt: 'What is the angle on the other side, in degrees?', unit: '°', tol: { abs: 0.01 },
      traps: [{ slip: 'right-for-straight', value: 'right', then: 'That takes it from 90°, a square corner. Along a straight floor the two angles make 180°.' },
        { slip: 'full-turn', value: 'turn', then: 'That takes it from 360°, a full turn. Along a straight line it is 180°.' }] },
    reason: 'Along a straight line: 180° − {A}° = {ans}°.'
  });

  /* ---------- a rise from the run and the angle: tan ---------- */
  // each with the angles it really has: a shed roof 10° to 35°, a wheelbarrow ramp 10° to 15° (below 10°, sin and tan differ by less than a hundredth of a foot), a stair 30° to 37°
  const SLOPES = [['A shed roof', 'pitched at', 'rises', 10, 35], ['A wheelbarrow ramp', 'laid at', 'rises', 10, 15], ['A stair', 'climbing at', 'climbs', 30, 37]];
  const rise = reminder({
    id: 'g-trig-rise', strand: 'trig', kind: 'trig-rise',
    params: { Ap: [0, 30, 1], R: [6, 16, 0.5], what: [0, 2, 1] },
    make: pick => {
      const [thing, at, goes, lo, hi] = SLOPES[pick('what')], A = lo + pick('Ap') % (hi - lo + 1), R = pick('R'), ans = R * Math.tan(deg(A));
      return { A, R, thing, at, goes, ans, ansText: num(ans, 2), up: r2(ans), sin: R * Math.sin(deg(A)), cos: R * Math.cos(deg(A)),
        keys: keys([A, 'tan', '*', R, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'angle', cells: ['Angle with level ground', '{at} {A}°'] }, { id: 'run', cells: ['Run, level, from its low end to under its top', '{R} ft'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{R}', h: '{up}', say: { w: 'run {R} ft', h: 'rise: ?', slant: 'at {A}°' } }] } }],
    given: 'Asked: how many feet it {goes}. Given: the angle at the ground, {A}°, and the level run, {R} ft.',
    fact: 'From the angle at the ground: tan = up ÷ along, sin = up ÷ slant, cos = along ÷ slant. Here along is given and up is wanted, so tan: up = along × tan (angle).',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft. Look back: at {A}°, under 45°, it rises less than its {R} ft run.',
      prompt: 'How many feet does it rise, to two decimals?', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['trig'],
      traps: [{ slip: 'sin-for-tan', value: 'sin', then: 'That uses sin, which goes with the slant. The run is along the ground: up = along × tan.' },
        { slip: 'cos-for-tan', value: 'cos', then: 'That uses cos, the along side over the slant. Up from along is tan.' }] },
    reason: 'Up = along × tan (angle): {R} × tan {A}° = {ansText} ft.'
  });

  /* ---------- a height from a slant and its angle: sin ---------- */
  const WIRES = [['A guy wire to a pole', 'wire'], ['A conveyor belt from the ground', 'belt'], ['A zip line from its low end', 'line']];
  const height = reminder({
    id: 'g-trig-height', strand: 'trig', kind: 'trig-height',
    params: { A: [30, 68, 1], L: [18, 60, 1], what: [0, 2, 1] },
    make: pick => {
      // at 45° the up and along sides are equal, so sin and cos give one number: 45 steps to 46
      const A = pick('A') === 45 ? 46 : pick('A'), L = pick('L'), ans = L * Math.sin(deg(A)), [thing, word] = WIRES[pick('what')];
      return { A, L, thing, word, ans, ansText: num(ans, 2), up: r2(ans), along: r2(L * Math.cos(deg(A))), cos: L * Math.cos(deg(A)), tan: L * Math.tan(deg(A)),
        keys: keys([A, 'sin', '*', L, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'len', cells: ['Length of the {word}', '{L} ft'] }, { id: 'angle', cells: ['Angle with the level ground', '{A}°'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{along}', h: '{up}', say: { w: 'along', h: 'height: ?', slant: '{L} ft at {A}°' } }] } }],
    given: 'Asked: how high its top end is. Given: the {word} is {L} ft long, at {A}° to the ground.',
    fact: 'From the angle at the ground: sin = up ÷ slant, cos = along ÷ slant, tan = up ÷ along. The {word} is the slant, so up = slant × sin (angle).',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft. Look back: shorter than the {L} ft {word}, the slant, as every side is.',
      prompt: 'How high is its top end, in feet, to two decimals?', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['trig'],
      traps: [{ slip: 'cos-for-sin', value: 'cos', then: 'That uses cos, which gives the distance along the ground. Up from the slant is sin.' },
        { slip: 'tan-for-sin', value: 'tan', then: 'That uses tan, which goes with the along side. With the slant given, up = slant × sin.' }] },
    reason: 'Up = slant × sin (angle): {L} × sin {A}° = {ansText} ft.'
  });

  FC.gen('math', [trim, trunk, diagonal, threeFour, third, line, rise, height]);
})();
