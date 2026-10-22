// Math, lesson 7 "Areas and how much to buy": a wall less its door, an L-shaped floor in two rectangles, carpet by the square yard, and edging
// around a bed (the distance around, the look-alike). Each is drawn as a plan to scale with its sizes (docs/research/math.md, M15; M8: dimension
// and shape, benchmarks and estimation). The one rule: area is length × width of each rectangle, added, less what is cut out, in one unit;
// how much to buy is the amount needed ÷ what one can, box or roll covers, always rounded up. The named slips: the distance around for the area
// (and the area for the distance around), rounding down, a unit not converted.
(() => {
  const { usd, num, problem } = MATH;
  const cents = x => Math.round(x * 100);
  const up = x => Math.ceil(x - 1e-9);
  // how many to buy, and what rounding down would give; a need that comes out whole is moved off the whole number by the caller
  const buy = need => ({ count: up(need), short: up(need) - 1 });
  // the sizes to try, starting from the ones drawn and stepping half a foot at a time within their ranges (the first that fits is taken), so
  // what to buy is spread over the counts the question draws instead of landing on one
  const sizes = (pick, [lo, hi], [wlo, whi]) => {
    const wrap = (v0, min, max, k) => min + ((v0 - min) / 0.5 + k) % ((max - min) / 0.5 + 1) * 0.5;
    return Array.from({ length: (whi - wlo) / 0.5 + 1 }, (_, j) => Array.from({ length: (hi - lo) / 0.5 + 1 }, (_, k) => [wrap(pick('l'), lo, hi, k), wrap(pick('w'), wlo, whi, j)])).flat();
  };
  const needWords = (need, count) => `${num(need, 2)}, so ${count}: always round up, or you run short`;

  /* ---------- the four walls of a room to paint, less a door ---------- */
  const paint = problem({
    id: 'g-paint', strand: 'area', kind: 'area-buy',
    params: { l: [12, 26, 0.5], w: [10, 16, 0.5], h: [8, 10, 1], cov: [250, 300, 50], c: [4, 4, 5, 6, 6, 6, 6] },   // 6 cans fits only the larger rooms (else the nearest count is taken), so it is drawn most often
    make: pick => {
      // a room whose one coat, rounded up, is not the two coats rounded down, so each slip is told apart (and two coats are never a whole number),
      // and whose two coats take the number of cans drawn (4, 5 or 6)
      const h = pick('h'), cov = pick('cov'), whole = (l, w) => 2 * (l + w) * h - 21;
      const told = ([l, w]) => { const x = whole(l, w) / cov; return !Number.isInteger(2 * x) && up(x) !== up(2 * x) - 1; };
      const tries = sizes(pick, [12, 26], [10, 16]), [l, w] = [...tries.filter(told)].sort((a, b) => Math.abs(up(2 * whole(...a) / cov) - pick('c')) - Math.abs(up(2 * whole(...b) / cov) - pick('c')))[0] || tries[0];
      const around = 2 * (l + w), area = around * h - 21, need = 2 * area / cov, b = buy(need), oneCoat = up(area / cov), aroundF = Math.round(around / 10) * 10, rough = aroundF * h - 20;
      return { ll: l, w, h, cov, around, aroundText: num(around), doorX: 2, doorY: h - 7, area, areaText: num(area), whole: num(around * h), rough, roughText: num(rough),
        aroundF, need, needText: needWords(need, b.count), ans: area, cans: b.count, short: b.short, oneCoat };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Room walls', rows: [{ id: 'size', cells: ['Room', '{ll} ft by {w} ft, walls {h} ft high'] }, { id: 'door', cells: ['Door', '3 ft by 7 ft'] },
      { id: 'trim', cells: ['Trim', 'white, already painted'] }, { id: 'can', cells: ['Paint, one gallon can', 'covers {cov} square feet, $38'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{ll}', h: '{w}', label: 'Room floor' }] } }],
    given: 'Asked: the walls’ area to paint, then the cans for two coats. Given: the room {ll} by {w} ft, walls {h} ft high, the door, and what a can covers. The trim and the price do not matter here.',
    rough: { working: 'Around the room is {ll} + {w} + {ll} + {w}, about {aroundF} ft; times {h} high, less about 20 for the door: about {roughText} square feet.',
      prompt: 'About how many square feet of wall will you paint?', frame: '__', unit: 'square feet' },
    setup: 'Laid flat, the four walls make one long strip: as long as the distance around the room, {ll} + {w} + {ll} + {w} = {aroundText} ft, and {h} ft high. Take away the door, 3 × 7 = 21.',
    exact: { working: 'On the calculator: {ll} + {w} + {ll} + {w} = {aroundText}, × {h} = {whole}, − 21 for the door = {areaText} square feet. Look back: near the rough {roughText}.',
      prompt: 'How many square feet will you paint, exactly?', frame: '__', unit: 'square feet', places: 1, tol: { abs: 0.5 },
      traps: [{ slip: 'perimeter-for-area', value: 'around', then: 'That is the distance around the room, in feet. Paint covers area: that length × the height.' }] },
    then: [{ id: 'buy', does: 'Work out how many to buy, and round up.', working: 'Two coats: {areaText} × 2 ÷ {cov} = {needText}.',
      ask: { id: 'cans', kind: 'number', prompt: 'You paint two coats. How many gallon cans do you buy?', frame: '__', answer: 'cans', tol: { abs: 0.01 },
        traps: [{ slip: 'one-coat', value: 'oneCoat', then: 'That is what one coat needs. You paint two coats: double the area first, then divide and round up.' },
          { slip: 'rounded-down', value: 'short', then: 'Rounded down, the paint runs out before the second coat is done. Round up.' }] } }],
    reason: 'The walls are {aroundText} ft around and {h} ft high, {whole} square feet, less 21 for the door: {areaText}. Two coats need {needText}.'
  });

  // a side made friendly for the rough answer: the nearest of 10, 12 and 15, numbers whose products a head can do
  const friendlySide = x => [10, 12, 15].reduce((best, f) => Math.abs(f - x) < Math.abs(best - x) ? f : best);

  /* ---------- an L-shaped floor in two rectangles ---------- */
  const floor = problem({
    id: 'g-floor', strand: 'area', kind: 'area-buy',
    params: { a: [10, 16, 1], b: [10, 14, 1], c: [4, 8, 1], d: [3, 6, 1], cov: [18.5, 22.5, 2] },
    make: pick => {
      const a = pick('a'), b = pick('b'), c = pick('c'), cov = pick('cov'), d0 = pick('d'), d = Number.isInteger((a * b + c * d0) / cov) ? d0 + 0.5 : d0;
      const area = a * b + c * d, need = area / cov, k = buy(need);
      return { a, b, c, dd: d, cov, main: a * b, nook: num(c * d), area, areaText: num(area), af: friendlySide(a), bf: friendlySide(b), mainF: friendlySide(a) * friendlySide(b), nookF: c * Math.round(d), rough: friendlySide(a) * friendlySide(b) + c * Math.round(d), roughText: num(friendlySide(a) * friendlySide(b) + c * Math.round(d)), dr: Math.round(d), need, needText: needWords(need, k.count),
        around: 2 * (a + c + b), boxes: k.count, short: k.short, ans: area };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Oak plank flooring', rows: [{ id: 'cover', cells: ['One box covers {cov} square feet'] }, { id: 'price', cells: ['$64.99 a box'] }, { id: 'color', cells: ['Color: honey'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{a}', h: '{b}', label: 'Room' }, { x: '{a}', y: 0, w: '{c}', h: '{dd}', label: 'Nook' }] } }],
    given: 'Asked: the floor’s area, then the boxes to buy. Given: the plan’s sizes and what a box covers. The price and the color do not matter here.',
    rough: { working: 'Split it into two rectangles and make the sides friendly: the room about {af} × {bf} = {mainF}, the nook about {c} × {dr} = {nookF}: about {roughText} square feet.', prompt: 'About how many square feet is the floor?', frame: '__', unit: 'square feet' },
    setup: 'An L shape is two rectangles: the room {a} by {b} and the nook {c} by {dd}. Find each area and add them.',
    exact: { working: 'On the calculator, one rectangle at a time into the memory: {a} × {b} M+, {c} × {dd} M+, then MR shows {areaText} square feet. Look back: bigger than the room alone.',
      prompt: 'How many square feet is the floor, exactly?', frame: '__', unit: 'square feet', places: 1, tol: { abs: 0.5 }, calc: ['mem'],
      traps: [{ slip: 'perimeter-for-area', value: 'around', then: 'That is the distance around the floor, in feet. Flooring covers area: each rectangle’s length × width, added.' }] },
    then: [{ id: 'buy', does: 'Work out how many to buy, and round up.', working: '{areaText} ÷ {cov} = {needText}.',
      ask: { id: 'boxes', kind: 'number', prompt: 'How many boxes do you buy?', frame: '__', answer: 'boxes', tol: { abs: 0.01 },
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the floor is not finished. Round up.' }] } }],
    reason: 'Two rectangles: {main} + {nook} = {areaText} square feet. At {cov} a box, that is {needText}.'
  });

  /* ---------- carpet priced by the square yard ---------- */
  const carpet = problem({
    id: 'g-carpet', strand: 'area', kind: 'area-buy',
    params: { l: [10, 20, 0.5], w: [9, 15, 0.5], price: [25, 45, 1] },
    make: pick => {
      const l = pick('l'), w = pick('w'), ft = l * w, yd = ft / 9, cost = Math.round(yd * pick('price') * 100) / 100, rough = Math.round(l) * Math.round(w) / 10;
      return { l, w, price: pick('price'), ftText: num(ft), yd, ydText: num(yd, 2), rough, roughText: num(rough, 1), lr: Math.round(l), wr: Math.round(w),
        ans: yd, byThree: ft / 3, cost, costText: usd(cents(cost)), costFeet: ft * pick('price') };
    },
    blocks: [{ kind: 'document', form: 'offer', title: 'Carpet quote', rows: [{ id: 'room', cells: ['Living room', '{l} ft by {w} ft'] }, { id: 'price', cells: ['Carpet, installed', '${price} a square yard'] },
      { id: 'when', cells: ['Install date', 'within two weeks'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{l}', h: '{w}', label: 'Living room' }] } }],
    given: 'Asked: the room in square yards, then the cost. Given: the room in feet and the price a square yard. The install date does not matter.',
    rough: { working: 'About {lr} × {wr} square feet. A square yard is 3 ft by 3 ft, 9 square feet, so divide by about 10: about {roughText} square yards.',
      prompt: 'About how many square yards is the room?', frame: '__', unit: 'square yards', places: 1 },
    setup: 'Area in square feet, then into square yards: 1 square yard = 3 ft × 3 ft = 9 square feet, so divide by 9.',
    exact: { working: 'On the calculator: {l} × {w} = {ftText} square feet, ÷ 9 = {ydText} square yards. Look back: near the rough {roughText}, and fewer yards than feet.',
      prompt: 'How many square yards is the room, to two decimals?', frame: '__', unit: 'square yards', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'unit-not-converted', value: 'byThree', then: 'That divides by 3. A square yard is 3 ft by 3 ft, which is 9 square feet: divide by 9.' }] },
    then: [{ id: 'cost', does: 'Work out the cost.', working: 'On the calculator, with nothing rounded on the way: {l} × {w} ÷ 9 × {price} = {costText}.',
      ask: { id: 'cost', kind: 'number', prompt: 'What does the carpet cost?', frame: '$__', places: 2, answer: 'cost', tol: { rel: 0.01 },
        traps: [{ slip: 'unit-not-converted', value: 'costFeet', then: 'That prices square feet at the square-yard price. Change the area into square yards first.' }] } }],
    reason: '{l} × {w} = {ftText} square feet, ÷ 9 = {ydText} square yards; {l} × {w} ÷ 9 × {price} = {costText}.'
  });

  /* ---------- edging around a bed: the distance around ---------- */
  const edging = problem({
    id: 'g-edging', strand: 'area', kind: 'around',
    params: { l: [4, 20, 0.5], w: [3, 8, 0.5], roll: [20, 25], c: [1, 3, 1] },
    make: pick => {
      // a bed whose edging is never a whole number of rolls nor equal to its area, and takes the number of rolls drawn (1, 2 or 3)
      const fits = ([l, x]) => !Number.isInteger(2 * (l + x) / pick('roll')) && l * x !== 2 * (l + x);
      const tries = sizes(pick, [4, 20], [3, 8]), [l, w] = tries.find(t => fits(t) && up(2 * (t[0] + t[1]) / pick('roll')) === pick('c')) || tries.find(fits);
      const around = 2 * (l + w), need = around / pick('roll'), k = buy(need);
      return { l, ww: w, half: num(l + w), roll: pick('roll'), around, aroundText: num(around), rough: 2 * (Math.round(l) + Math.round(w)), lr: Math.round(l), wr: Math.round(w), need, needText: needWords(need, k.count),
        ans: around, area: l * w, rolls: k.count, short: k.short };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Garden edging', rows: [{ id: 'roll', cells: ['One roll is {roll} feet long'] }, { id: 'price', cells: ['$17.99 a roll'] }, { id: 'tall', cells: ['5 inches tall'] }] },
      { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: '{l}', h: '{ww}', label: 'Garden bed' }] } }],
    given: 'Asked: the edging that goes around the bed, then the rolls. Given: the bed {l} by {ww} ft and a roll’s length. The price and the height do not matter.',
    rough: { working: 'Around means all four sides: about {lr} + {wr} + {lr} + {wr} = {rough} feet.', prompt: 'About how many feet of edging go around the bed?', frame: '__', unit: 'feet' },
    setup: 'Edging goes around, so this is the distance around, not the area: add the four sides, or length + width, then double it.',
    exact: { working: 'On the calculator: {l} + {ww} = {half}, then × 2 = {aroundText} feet. Look back: near the rough {rough}, in feet, not square feet.',
      prompt: 'How many feet of edging go around the bed, exactly?', frame: '__', unit: 'feet', places: 1, tol: { abs: 0.1 },
      traps: [{ slip: 'area-for-perimeter', value: 'area', then: 'That is the area of the bed, in square feet. Edging goes around it: add the four sides.' }] },
    then: [{ id: 'buy', does: 'Work out how many to buy, and round up.', working: '{aroundText} ÷ {roll} = {needText}.',
      ask: { id: 'rolls', kind: 'number', prompt: 'How many rolls do you buy?', frame: '__', answer: 'rolls', tol: { abs: 0.01 },
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the edging stops short of going all the way around. Round up.' }] } }],
    reason: 'Around the bed is {l} + {ww}, doubled: {aroundText} feet; at {roll} feet a roll, {needText}.'
  });

  FC.gen('math', [paint, floor, carpet, edging]);
  // the worked problem: a 12 by 10 ft bedroom, walls 8 ft high, two coats
  FC.items('math', [MATH.worked(paint, 'w-paint', { l: 14, w: 12, h: 9, cov: 250, c: 4 })]);
})();
