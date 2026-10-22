// Math, lesson 17 "Scale, slope and round volumes", a refresher (Unit 6, docs/subjects/math/plan.md; research M25, M27, M29, M32).
// The facts, the same in every question:
// - Similar triangles (same shape, other size): every length is scaled by the same number. Tall ÷ shadow is the same for a post and a tree at the
//   same hour, so tree = post × tree's shadow ÷ post's shadow. A plan at 1/4 inch to the foot: real feet = inches on the plan ÷ 1/4.
// - Slope is rise ÷ run; as a grade, × 100 for a percent. A drain falls a set amount per foot of pipe: 1/4 inch for pipe 2½ inches across or less,
//   1/8 inch for 3 to 6 inches (the plumbing code, M27); drop = feet of pipe × the fall per foot.
// - A cylinder holds π × r × r × height; a cone, a third of that. Lengths in one unit before multiplying (inches ÷ 12 for feet).
// - Units: 1 inch = 2.54 cm exactly; a cubic foot holds about 7.48 gallons (M29). Multiply when the new unit is smaller (more of them).
(() => {
  const { num, reminder, keys } = MATH;
  const PI = 3.14;

  /* ---------- a tree's height by its shadow ---------- */
  const shadow = reminder({
    id: 'g-shadow', strand: 'scale', kind: 'shadow',
    params: { h: [4, 6, 0.5], sp: [3, 9, 0.5], S: [18, 75, 1] },
    make: pick => {
      // a shadow as long as the post would make upside down the same: it steps half a foot
      const h = pick('h'), s = pick('sp') === h ? h + 0.5 : pick('sp'), S = pick('S'), ans = h * S / s;
      return { h, s, S, ans, ansText: num(ans, 2), flipped: s * S / h, added: h + (S - s), keys: keys([h, '*', S, '/', s, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'How tall is the oak?', rows: [{ id: 'post', cells: ['A fence post', '{h} ft tall, shadow {s} ft'] }, { id: 'tree', cells: ['The oak, at the same time', 'shadow {S} ft'] }] }],
    given: 'Asked: the oak’s height. Given: a {h} ft post with a {s} ft shadow, and the oak’s {S} ft shadow at the same time.',
    fact: 'At the same hour the sun makes the same shape of triangle for every upright thing: tall ÷ shadow is the same. So tree = post × tree’s shadow ÷ post’s shadow.',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft. Look back: the post is {h} ÷ {s} times its shadow, and so is the tree.',
      prompt: 'How tall is the oak, in feet, to two decimals?', unit: 'ft', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That scales by shadow ÷ height, upside down. Height is post × tree’s shadow ÷ post’s shadow.' },
        { slip: 'added-difference', value: 'added', then: 'That adds the difference in shadows. Similar triangles scale: multiply, do not add.' }] },
    reason: 'Tall ÷ shadow is the same for both: {h} × {S} ÷ {s} = {ansText} ft.'
  });

  /* ---------- a length from a scale plan ---------- */
  const SCALES = [[0.125, '1/8'], [0.25, '1/4'], [0.5, '1/2'], [0.375, '3/8']];
  const plan = reminder({
    id: 'g-plan-scale', strand: 'scale', kind: 'plan-scale',
    params: { sc: [0, 3, 1], m: [2, 9, 0.25] },
    make: pick => {
      const [k, name] = SCALES[pick('sc')], m = pick('m'), ans = m / k;
      return { k, name, m, ans, ansText: num(ans, 2), times: m * k, keys: keys([m, '/', k, '=']), keysGives: ans, per: num(1 / k, 2) };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Floor plan', rows: [{ id: 'scale', cells: ['Scale', '{name} inch = 1 foot'] }, { id: 'wall', cells: ['Back wall, measured on the plan', '{m} inches'] }] }],
    given: 'Asked: the real length of the back wall, in feet. Given: {m} inches on the plan, at {name} inch to the foot.',
    fact: 'A plan is the room at a smaller size: every length is scaled by the same number. Each {name} inch on the plan is 1 ft, so feet = inches ÷ {k}.',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft. Look back: 1 inch on the plan is {per} ft, so the real wall is far longer than {m}.',
      prompt: 'How long is the real wall, in feet?', unit: 'ft', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'ratio-upside-down', value: 'times', then: 'That multiplies by {name}, which makes the wall smaller than the drawing. Divide: each {name} inch is a whole foot.' }] },
    reason: '{m} inches ÷ {name} inch a foot = {ansText} ft.'
  });

  /* ---------- a grade as a percent ---------- */
  const grade = reminder({
    id: 'g-grade', strand: 'slope', kind: 'grade',
    params: { R: [1, 9, 0.5], L: [40, 160, 5], what: [0, 2, 1] },
    make: pick => {
      const R = pick('R'), L = pick('L'), ans = R / L * 100, thing = ['A driveway', 'A garden path', 'A gravel ramp to the barn'][pick('what')];
      return { R, L, thing, ans, ansText: num(ans, 2), flipped: L / R * 100, keys: keys([R, '/', L, '*', 100, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'rise', cells: ['Rise, bottom to top', '{R} ft'] }, { id: 'run', cells: ['Run, measured level', '{L} ft'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{L}', h: '{R}', say: { w: 'run {L} ft', h: 'rise {R} ft', slant: '{thing}' } }] } }],
    given: 'Asked: the grade, as a percent. Given: it rises {R} ft over a level run of {L} ft.',
    fact: 'Slope is rise ÷ run. As a grade, × 100 for a percent: a rise of 1 in 12 is 8.33%, the steepest a wheelchair ramp may be.',
    exact: { working: 'On the calculator: {keys} shows {ansText}%. Look back: it rises much less than it runs, so the percent is well under 100.',
      prompt: 'What is the grade, as a percent, to two decimals?', unit: '%', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That is run ÷ rise. Slope is rise ÷ run.' }] },
    reason: 'Rise ÷ run × 100: {R} ÷ {L} × 100 = {ansText}%.'
  });

  /* ---------- a drain's drop over its length ---------- */
  const PIPES = [[1.5, 0.25, '1/4', '1½'], [2, 0.25, '1/4', '2'], [3, 0.125, '1/8', '3'], [4, 0.125, '1/8', '4']];
  const drain = reminder({
    id: 'g-drain-drop', strand: 'slope', kind: 'drain-drop',
    params: { p: [0, 3, 1], L: [6, 38, 1] },
    make: pick => {
      const [, fall, fallName, size] = PIPES[pick('p')], L = pick('L'), ans = L * fall, other = L * (fall === 0.25 ? 0.125 : 0.25);
      return { L, fall, fallName, size, ans, ansText: num(ans, 3), other, keys: keys([L, '*', fall, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'New drain line', rows: [{ id: 'pipe', cells: ['Pipe', '{size} inches across'] }, { id: 'run', cells: ['Length of the pipe run', '{L} ft'] },
      { id: 'code', cells: ['Fall the code calls for', '1/4 inch a foot up to 2½ inch pipe; 1/8 inch a foot for 3 to 6 inch'] }] }],
    given: 'Asked: how many inches lower the far end must be. Given: {size} inch pipe, {L} ft long, and the fall the code calls for.',
    fact: 'A slope given per foot: the drop is feet × the fall per foot. {size} inch pipe falls {fallName} inch ({fall}) a foot.',
    exact: { working: 'On the calculator: {keys} shows {ansText} inches. Look back: {fallName} inch for each of {L} feet.',
      prompt: 'How many inches lower is the far end, to two decimals?', unit: 'inches', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'wrong-row', value: 'other', then: 'That is the fall for the other size of pipe. {size} inch pipe falls {fallName} inch a foot.' }] },
    reason: '{L} ft × {fallName} inch a foot = {ansText} inches of drop.'
  });

  /* ---------- concrete for a round post hole: a cylinder ---------- */
  const DIAS = [12, 18, 24, 30];
  const hole = reminder({
    id: 'g-post-hole', strand: 'round-volume', kind: 'post-cylinder',
    params: { di: [0, 3, 1], h: [2, 4.5, 0.5] },
    make: pick => {
      const d = DIAS[pick('di')], r = d / 24, h = pick('h'), ans = PI * r * r * h;
      return { d, r, dFt: num(d / 12, 2), h, ans, ansText: num(ans, 2), wide: PI * (d / 12) * (d / 12) * h, inches: PI * (d / 2) * (d / 2) * h,
        keys: keys([3.14, '*', r, '*', r, '*', h, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Deck footing', rows: [{ id: 'tube', cells: ['Round form tube', '{d} inches across'] }, { id: 'deep', cells: ['Depth', '{h} ft'] }] }],
    given: 'Asked: the concrete to fill the tube, in cubic feet. Given: {d} inches across and {h} ft deep.',
    fact: 'A cylinder holds π × radius × radius × height. Every length in feet first: {d} inches is {dFt} ft across, so the radius is {r} ft.',
    exact: { working: 'On the calculator: {keys} shows {ansText} cubic feet. Look back: a bit over 3 × {r} × {r} × {h}, all in feet.',
      prompt: 'How many cubic feet of concrete, to two decimals?', unit: 'cubic feet', places: 2, tol: { rel: 0.002 },
      traps: [{ slip: 'diameter-as-radius', value: 'wide', then: 'That uses the distance across as the radius, 4 times too much. The radius is half: {r} ft.' },
        { slip: 'unit-not-converted', value: 'inches', then: 'That mixes inches with feet. Put the radius in feet first: {r} ft.' }] },
    reason: '3.14 × {r} × {r} × {h} = {ansText} cubic feet.'
  });

  /* ---------- a gravel pile: a cone ---------- */
  const pile = reminder({
    id: 'g-gravel-cone', strand: 'round-volume', kind: 'cone',
    params: { D: [6, 16, 1], h: [2, 6, 0.5] },
    make: pick => {
      const D = pick('D'), r = D / 2, h = pick('h'), ans = PI * r * r * h / 3;
      return { D, r, h, ans, ansText: num(ans, 2), cyl: PI * r * r * h, wide: PI * D * D * h / 3, keys: keys([3.14, '*', r, '*', r, '*', h, '/', 3, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Gravel pile in the yard', rows: [{ id: 'across', cells: ['Across the bottom', '{D} ft'] }, { id: 'high', cells: ['Height of the peak', '{h} ft'] }] }],
    given: 'Asked: how many cubic feet of gravel are in the pile. Given: a cone {D} ft across the bottom and {h} ft high.',
    fact: 'A cone holds a third of the cylinder with the same bottom and height: π × radius × radius × height ÷ 3.',
    exact: { working: 'The radius is {D} ÷ 2 = {r} ft. On the calculator: {keys} shows {ansText} cubic feet. Look back: a third of the {r} ft round, {h} ft high cylinder around it.',
      prompt: 'How many cubic feet of gravel, to two decimals?', unit: 'cubic feet', places: 2, tol: { rel: 0.002 },
      traps: [{ slip: 'cone-as-cylinder', value: 'cyl', then: 'That is the whole cylinder. A cone is a third of it: ÷ 3.' },
        { slip: 'diameter-as-radius', value: 'wide', then: 'That uses the distance across as the radius. The radius is half: {r} ft.' }] },
    reason: '3.14 × {r} × {r} × {h} ÷ 3 = {ansText} cubic feet.'
  });

  /* ---------- inches to centimeters ---------- */
  const cm = reminder({
    id: 'g-to-cm', strand: 'convert', kind: 'inch-cm',
    params: { w: [8, 60, 0.5], what: [0, 2, 1] },
    make: pick => {
      const w = pick('w'), ans = w * 2.54, [thing, part] = [['A shelf space', 'storage bin'], ['A window opening', 'blind'], ['A gap under the counter', 'small fridge']][pick('what')];
      return { w, thing, part, ans, ansText: num(ans, 2), divided: w / 2.54, keys: keys([w, '*', 2.54, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'gap', cells: ['Measured', '{w} inches wide'] }, { id: 'shop', cells: ['The {part} you want', 'sized in centimeters'] }] }],
    given: 'Asked: the width in centimeters. Given: {w} inches.',
    fact: '1 inch is exactly 2.54 cm. A centimeter is the smaller unit, so there are more of them: multiply.',
    exact: { working: 'On the calculator: {keys} shows {ansText} cm. Look back: about 2½ times the number of inches.',
      prompt: 'How many centimeters wide, to two decimals?', unit: 'cm', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'converted-backward', value: 'divided', then: 'That divides, which gives fewer centimeters than inches. A centimeter is smaller: multiply by 2.54.' }] },
    reason: '{w} × 2.54 = {ansText} cm.'
  });

  /* ---------- gallons in a tank ---------- */
  const tank = reminder({
    id: 'g-gallons', strand: 'convert', kind: 'cubic-gallons',
    params: { L: [3, 10, 1], W: [2, 6, 0.5], D: [1.5, 4, 0.5], what: [0, 1, 1] },
    make: pick => {
      const L = pick('L'), W = pick('W'), D = pick('D'), cu = L * W * D, ans = cu * 7.48, thing = ['Garden pond, square sides', 'Stock water tank'][pick('what')];
      return { L, W, D, thing, cu: num(cu, 3), ans, ansText: num(ans, 1), divided: cu / 7.48, cuN: cu, keys: keys([L, '*', W, '*', D, '*', 7.48, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'size', cells: ['Inside', '{L} ft long, {W} ft wide, {D} ft deep'] }, { id: 'dose', cells: ['Water treatment', 'dose by the gallon'] }] }],
    given: 'Asked: how many gallons it holds, full. Given: {L} × {W} × {D} ft inside.',
    fact: 'A box holds length × width × depth. A cubic foot holds about 7.48 gallons, the smaller unit, so multiply.',
    exact: { working: '{L} × {W} × {D} = {cu} cubic feet. On the calculator: {keys} shows {ansText} gallons. Look back: about 7½ gallons for each of {cu} cubic feet.',
      prompt: 'How many gallons does it hold, to the nearest gallon?', unit: 'gallons', places: 0, tol: { abs: 0.6 },
      traps: [{ slip: 'converted-backward', value: 'divided', then: 'That divides by 7.48. A gallon is smaller than a cubic foot, so there are more gallons: multiply.' },
        { slip: 'unit-left-out', value: 'cuN', then: 'That is the cubic feet. Times 7.48 for gallons.' }] },
    reason: '{L} × {W} × {D} = {cu} cubic feet, × 7.48 = {ansText} gallons.'
  });

  FC.gen('math', [shadow, plan, grade, drain, hole, pile, cm, tank]);
})();
