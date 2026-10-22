// Math, lesson 18 "Powers, roots and log scales", a refresher (Unit 6, docs/subjects/math/plan.md; research M25, M26, M28, M33, M32).
// The facts, the same in every question:
// - Order of operations: powers first, then times and divide, then add and take away. The calculator works each button as pressed, left to
//   right, so type the times part first (or put it in the memory).
// - Powers of ten: 4.7 × 10³ is 4.7 with the point moved 3 places right (4,700); 10 to a minus power moves it left (2.2 × 10⁻³ is 0.0022),
//   taught on the card; the questions write out plain powers, so every answer is a whole number.
//   Dividing: divide the front numbers, take the powers away.
// - A square root undoes a square: the side of a square from its area. Most square roots, such as √2 = 1.41421356…, never end and never repeat
//   (irrational numbers): round to what you can measure. A square's diagonal is its side × √2.
// - A log counts the tens multiplied: log 1,000 = 3. On a log scale each step of 1 is 10 times: a magnitude step is 10 times the shaking, a pH
//   step 10 times as acid, and 10 decibels 10 times the sound energy. So a difference of d on the scale is 10 xʸ d times (decibels: d ÷ 10).
(() => {
  const { num, reminder, keys } = MATH;
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const power = k => '10' + String(k).split('').map(c => SUP[c]).join('');
  const clean = x => Number(x.toPrecision(12));

  /* ---------- a quote: fee + rate × hours ---------- */
  const quote = reminder({
    id: 'g-order-quote', strand: 'order-ops', kind: 'order-times-first',
    params: { fee: [35, 95, 5], rate: [28, 85, 1], h: [2, 9, 0.5], wi: [0, 2, 1] },
    make: pick => {
      const fee = pick('fee'), rate = pick('rate'), h = pick('h'), ans = fee + rate * h, who = ['Plumber', 'Electrician', 'Appliance repair'][pick('wi')];
      return { fee, rate, h, who, ans, ansText: num(ans, 2), left: (fee + rate) * h, keys: keys([rate, '*', h, '+', fee, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'offer', title: '{who}: the quote', rows: [{ id: 'formula', cells: ['Total = {fee} + {rate} × hours'] }, { id: 'hours', cells: ['Hours on the job: {h}'] }] }],
    given: 'Asked: the total on the bill, in dollars. Given: the quote’s formula and {h} hours.',
    fact: 'Order of operations: powers first, then times and divide, then add and take away. The calculator works left to right, so put the times part in first.',
    exact: { working: 'Times first: {rate} × {h}, then + {fee}. On the calculator: {keys} shows {ansText}. Look back: the fee once, and {rate} for each hour.',
      prompt: 'What is the total, in dollars?', frame: '$__', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'left-to-right', value: 'left', then: 'That adds {fee} + {rate} first, as this calculator does if it is typed straight in. Times comes before plus: {rate} × {h} + {fee}.' }] },
    reason: '{rate} × {h} first, then + {fee} = ${ansText}.'
  });

  /* ---------- power lost in a wire: current squared × resistance ---------- */
  const watts = reminder({
    id: 'g-order-power', strand: 'order-ops', kind: 'order-power-first',
    params: { I: [3, 18, 1], R: [0.2, 1.5, 0.1] },
    make: pick => {
      // a resistance of 1 would make (current × resistance)² the answer too: it steps to 1.1
      const I = pick('I'), R0 = clean(pick('R')), R = R0 === 1 ? 1.1 : R0, ans = I * I * R;
      return { I, R, sq: I * I, ans, ansText: num(ans, 2), whole: (I * R) * (I * R), twice: 2 * I * R, keys: keys([I, 'pow', 2, '*', R, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Long extension run', rows: [{ id: 'rule', cells: ['Power lost as heat', 'watts = current² × resistance'] }, { id: 'amps', cells: ['Current', '{I} amps'] },
      { id: 'ohms', cells: ['Resistance of the cord', '{R} ohms'] }] }],
    given: 'Asked: the watts lost as heat. Given: {I} amps through {R} ohms, and the rule watts = current² × resistance.',
    fact: 'Powers first: current² is current × current, done before the times.',
    exact: { working: 'On the calculator: {keys} shows {ansText} watts ({I} × {I} = {sq}, then × {R}). Look back: only the current is squared.',
      prompt: 'How many watts are lost, to two decimals?', unit: 'watts', places: 2, tol: { abs: 0.01 }, calc: ['pow'],
      traps: [{ slip: 'squared-whole', value: 'whole', then: 'That squares current × resistance together. Only the current is squared: {I} × {I} × {R}.' },
        { slip: 'doubled-not-squared', value: 'twice', then: 'That doubles the current. Squared means times itself: {I} × {I}.' }] },
    reason: '{I}² × {R} = {I} × {I} × {R} = {ansText} watts.'
  });

  /* ---------- a power of ten written out ---------- */
  // each part with the powers it really comes in: a resistor 10² to 10⁶ ohms, a photo file 10⁵ to 10⁷ bytes, a spool of wire 10² to 10³ feet
  const PARTS = [['Resistor', 'ohms', [2, 3, 4, 5, 6]], ['Photo file', 'bytes', [5, 6, 7]], ['Spool of wire', 'feet', [2, 3]]];
  const sciRead = reminder({
    id: 'g-sci-read', strand: 'powers-ten', kind: 'sci-read',
    params: { m: [1.1, 9.9, 0.1], ki: [0, 4, 1], pi: [0, 2, 1] },
    make: pick => {
      const [part, unit, powers] = PARTS[pick('pi')], m = clean(pick('m')), k = powers[pick('ki') % powers.length], ans = clean(m * Math.pow(10, k));
      const dir = `right ${k} places`;
      return { m, k, kAbs: Math.abs(k), pw: power(k), part, unit, dir, ans, ansText: num(ans, 6), less: clean(m * Math.pow(10, k - 1)), more: clean(m * Math.pow(10, k + 1)) };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Parts list', rows: [{ id: 'part', cells: ['{part}', '{m} × {pw} {unit}'] }] }],
    given: 'Asked: the number written out in full. Given: {m} × {pw}.',
    fact: 'Times 10 to a power moves the decimal point that many places: right for a plain power, left for a minus power.',
    exact: { does: 'Move the point, then look back.', working: 'Move the point in {m} {dir}: {ansText}. Look back: count the places the point moved, {kAbs} for {pw}.',
      prompt: 'What is it written out in full?', unit: '{unit}', places: 0, tol: { rel: 0.000001 },
      traps: [{ slip: 'one-place-off', value: 'less', then: 'The point is one place off. Count {kAbs} places for {pw}.' },
        { slip: 'one-place-off', value: 'more', then: 'The point is one place off. Count {kAbs} places for {pw}.' }] },
    reason: '{m} × {pw} = {ansText}: the point moves {dir}.'
  });

  /* ---------- how many photos fit: divide powers of ten ---------- */
  const DRIVES = [1, 2, 4], PHOTOS = [2, 2.5, 4, 5, 8];
  const photos = reminder({
    id: 'g-sci-divide', strand: 'powers-ten', kind: 'sci-divide',
    params: { ai: [0, 2, 1], bi: [0, 4, 1], p: [11, 12], q: [6, 7] },
    make: pick => {
      // a photo the same front number as the drive would make the drive ÷ photo and photo ÷ drive the same: it takes the next size
      const a = DRIVES[pick('ai')], b = PHOTOS[pick('bi')] === a ? PHOTOS[pick('bi') + 1] : PHOTOS[pick('bi')], p = pick('p'), q = pick('q'), d = p - q;
      const ans = clean(a / b * Math.pow(10, d));
      return { a, b, p, q, d, pa: power(p), pb: power(q), pd: power(d), front: num(a / b, 3), ans, ansText: num(ans, 0), added: clean(a / b * Math.pow(10, p + q)), wrongWay: clean(b / a * Math.pow(10, d)),
        keys: keys([10, 'pow', d, '*', a, '/', b, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Backing up the job photos', rows: [{ id: 'drive', cells: ['Drive', '{a} × {pa} bytes'] }, { id: 'photo', cells: ['Each photo, about', '{b} × {pb} bytes'] }] }],
    given: 'Asked: about how many photos fit on the drive. Given: {a} × {pa} bytes on the drive and {b} × {pb} bytes a photo.',
    fact: 'Dividing powers of ten: divide the front numbers, and take the lower power from the higher.',
    exact: { working: '{a} ÷ {b} = {front}, and {p} − {q} = {d}, so {front} × {pd}. On the calculator, the power first: {keys} shows {ansText}. Look back: the fronts divided and the powers taken away.',
      prompt: 'How many photos fit?', unit: 'photos', places: 0, tol: { rel: 0.001 }, calc: ['pow'],
      traps: [{ slip: 'added-powers', value: 'added', then: 'That adds the powers. Dividing takes the lower power from the higher: {p} − {q} = {d}.' },
        { slip: 'ratio-upside-down', value: 'wrongWay', then: 'That divides the front numbers the wrong way round. It is the drive’s front ÷ the photo’s: {a} ÷ {b}.' }] },
    reason: '{a} ÷ {b} × 10 to the {p} − {q} = {front} × {pd} = {ansText} photos.'
  });

  /* ---------- a square patio's side: a square root ---------- */
  const patio = reminder({
    id: 'g-sqrt-patio', strand: 'roots', kind: 'square-root',
    params: { A: [40, 390, 1] },
    make: pick => {
      // a perfect square has a whole side; this card is about the ones that do not, so a perfect square steps one on
      const raw = pick('A'), A = Number.isInteger(Math.sqrt(raw)) ? raw + 1 : raw, ans = Math.sqrt(A), lo = Math.floor(ans), hi = lo + 1;
      return { A, ans, ansText: num(ans, 2), lo, hi, loSq: lo * lo, hiSq: hi * hi, quarter: A / 4, half: A / 2, keys: keys([A, 'sqrt']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Square patio', rows: [{ id: 'area', cells: ['Pavers ordered to cover', '{A} square feet'] }, { id: 'shape', cells: ['Shape', 'square'] }] }],
    given: 'Asked: the length of each side. Given: a square of {A} square feet.',
    fact: 'A square’s area is side × side, so the side is the square root of the area, √ on the calculator. Most square roots never end: round to what you can measure.',
    exact: { working: 'On the calculator: {keys} shows {ansText} ft. Look back: {lo} × {lo} = {loSq} and {hi} × {hi} = {hiSq}, so the side is between {lo} and {hi} ft.',
      prompt: 'How long is each side, in feet, to two decimals?', unit: 'ft', places: 2, tol: { abs: 0.01 }, calc: ['sqrt'],
      traps: [{ slip: 'quarter-for-root', value: 'quarter', then: 'That divides by 4, the sides of the square. The side is the number that times itself makes {A}: √{A}.' },
        { slip: 'half-for-root', value: 'half', then: 'That halves the area. The side times itself must make {A}: √{A}.' }] },
    reason: '√{A} = {ansText} ft, since {ansText} × {ansText} is about {A}.'
  });

  /* ---------- a square frame's brace: side × √2 ---------- */
  const brace = reminder({
    id: 'g-brace', strand: 'roots', kind: 'root-two',
    params: { s: [16, 48, 1], what: [0, 2, 1] },
    make: pick => {
      const s = pick('s'), ans = s * Math.SQRT2, thing = ['A square cabinet door', 'A square window frame', 'A square shelf unit'][pick('what')];
      return { s, thing, ans, ansText: num(ans, 2), sides: 2 * s, short: s * 1.4, keys: keys([2, 'sqrt', '*', s, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'side', cells: ['Each side', '{s} inches'] }, { id: 'brace', cells: ['Brace', 'corner to corner'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'in', parts: [{ shape: 'triangle', x: 0, y: 0, w: '{s}', h: '{s}', say: { slant: 'brace: ?' } }] } }],
    given: 'Asked: the brace’s length, corner to corner. Given: a square with {s} inch sides.',
    fact: 'A square’s diagonal is its side × √2. √2 = 1.41421356… never ends and never repeats (an irrational number), so use the √ button, not 1.4.',
    exact: { working: 'On the calculator: {keys} shows {ansText} inches. Look back: {s} × {s} + {s} × {s} is the brace times itself, and it is longer than a side, shorter than two.',
      prompt: 'How long is the brace, in inches, to two decimals?', unit: 'inches', places: 2, tol: { abs: 0.01 }, calc: ['sqrt'],
      traps: [{ slip: 'added-sides', value: 'sides', then: 'That adds two sides. The diagonal is side × √2, about 1.41 times a side.' },
        { slip: 'rounded-root', value: 'short', then: 'That uses 1.4 for √2, which is short. Press √ on 2 for 1.41421356….' }] },
    reason: '{s} × √2 = {s} × 1.41421356… = {ansText} inches.'
  });

  /* ---------- decibels: 10 to the difference over 10 ---------- */
  const SOUNDS = [['A circular saw', 'A shop vacuum'], ['A leaf blower', 'A lawn mower'], ['A hammer drill', 'A hand sander']];
  const decibel = reminder({
    id: 'g-decibel', strand: 'log-scale', kind: 'decibels',
    params: { low: [70, 88, 1], D: [4, 26, 1], what: [0, 2, 1] },
    make: pick => {
      // a difference of 10 would make 10 times the same number as the difference itself: it steps to 11
      const low = pick('low'), D = pick('D') === 10 ? 11 : pick('D'), high = low + D, step = D / 10, ans = Math.pow(10, step), [loud, quiet] = SOUNDS[pick('what')];
      return { low, high, D, step, loud, quiet, ans, ansText: num(ans, 2), straight: high / low, diff: D, keys: keys([10, 'pow', step, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Sound levels on site', rows: [{ id: 'loud', cells: ['{loud}', '{high} decibels'] }, { id: 'quiet', cells: ['{quiet}', '{low} decibels'] }] }],
    given: 'Asked: how many times the sound energy the louder tool gives off. Given: {high} and {low} decibels.',
    fact: 'Decibels are a log scale: each 10 decibels is 10 times the sound energy. A difference of d decibels is 10 xʸ (d ÷ 10) times.',
    exact: { working: '{high} − {low} = {D} decibels, and {D} ÷ 10 = {step}. On the calculator: {keys} shows {ansText}. Look back: 10 decibels would be 10 times, 20 would be 100 times.',
      prompt: 'How many times the sound energy, to two decimals?', unit: 'times', places: 2, tol: { rel: 0.001 }, calc: ['pow'],
      traps: [{ slip: 'straight-scale', value: 'straight', then: 'That divides the readings as if the scale were straight. Each 10 decibels multiplies by 10: 10 xʸ {step}.' },
        { slip: 'gave-difference', value: 'diff', then: 'That is the difference on the scale. Each 10 of it is 10 times: 10 xʸ {step}.' }] },
    reason: '{D} decibels louder is 10 xʸ {step} = {ansText} times the sound energy.'
  });

  /* ---------- earthquake magnitudes: 10 to the difference ---------- */
  const quake = reminder({
    id: 'g-quake', strand: 'log-scale', kind: 'magnitude',
    params: { low: [3.5, 5.5, 0.1], D: [0.3, 2.7, 0.1] },
    make: pick => {
      const low = clean(pick('low')), D0 = clean(pick('D')), D = D0 === 1 ? 1.1 : D0, high = clean(low + D), ans = Math.pow(10, D);
      return { low, high, D, ans, ansText: num(ans, 2), straight: high / low, diff: D, keys: keys([10, 'pow', D, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Earthquake report', rows: [{ id: 'main', cells: ['Main quake', 'magnitude {high}'] }, { id: 'after', cells: ['Largest aftershock', 'magnitude {low}'] }] }],
    given: 'Asked: how many times the ground shaking (the swing a seismograph records) of the main quake. Given: magnitudes {high} and {low}.',
    fact: 'Magnitude is a log scale: each step of 1 is 10 times the shaking. A difference of d is 10 xʸ d times.',
    exact: { working: '{high} − {low} = {D}. On the calculator: {keys} shows {ansText}. Look back: a step of 1 would be 10 times, of 2 would be 100 times.',
      prompt: 'How many times the shaking, to two decimals?', unit: 'times', places: 2, tol: { rel: 0.001 }, calc: ['pow'],
      traps: [{ slip: 'straight-scale', value: 'straight', then: 'That divides the magnitudes as if the scale were straight. Each step of 1 multiplies by 10: 10 xʸ {D}.' },
        { slip: 'gave-difference', value: 'diff', then: 'That is the difference on the scale. It is the power of 10: 10 xʸ {D}.' }] },
    reason: 'A magnitude {D} higher is 10 xʸ {D} = {ansText} times the shaking.'
  });

  FC.gen('math', [quote, watts, sciRead, photos, patio, brace, decibel, quake]);
})();
