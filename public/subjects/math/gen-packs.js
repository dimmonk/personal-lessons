// Math, lesson 12 "Packs, leftovers and lining up": the whole-number problems the owner asked for, each through the everyday problem it solves
// (docs/research/math.md, M24; M8: none of them is named among adult numeracy, so they come last): buses for a trip (dividing with a remainder,
// then rounding up), gift bags all the same (the greatest number that divides both), and packs or timetables that come out even (the least
// number both divide).
// The rules, the same in every question:
// - Whole things: divide; if it does not come out even, round up to hold everyone (lesson 7's rule); what is left over is the amount on the last one.
// - Equal groups with nothing left: try what divides the smaller amount, from the biggest down; the first that also divides the bigger is the most groups.
// - Coming out even: count up by the bigger pack; the first that the smaller pack divides is the fewest.
// The groups and the packs have no rough answer: their answer is a whole number the head finds by trying, so the look-back is the check
// (it divides both; both divide it). The buses keep the rough answer.
(() => {
  const { num, problem, keys } = MATH;
  const divides = (a, b) => b % a === 0;

  /* ---------- buses for a school trip: divide, round up, and what is left ---------- */
  const buses = problem({
    id: 'g-buses', strand: 'packs', kind: 'round-up',
    params: { full: [2, 8, 1], c: [48, 56, 4], left: [2, 23, 1] },
    make: pick => {
      // a last bus less than half full (2 to 23 of 48 or more seats), so rounding to the nearest is not enough
      const c = pick('c'), full = pick('full'), last = pick('left'), S = full * c + last, count = full + 1, Sr = Math.round(S / 10) * 10;
      return { S, c, loads: S / c, loadsText: num(S / c, 2), count, last, empty: count * c - S, seats: count * c, Sr, rough: Sr / 50, roughText: num(Sr / 50, 1),
        ans: count, short: full, keys: keys([count, '*', c, '-', S, '=']), keysGives: count * c - S };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Field trip to the science museum', rows: [{ id: 'going', cells: ['Students and adults going', '{S}'] }, { id: 'bus', cells: ['Each bus', 'seats {c}'] },
      { id: 'cost', cells: ['Each bus, for the day', '$650'] }, { id: 'leave', cells: ['Leaves', '8:15 a.m.'] }] }],
    given: 'Asked: how many buses to book, then the empty seats on the last one. Given: {S} people and {c} seats a bus. The cost and the time do not matter here.',
    rough: { working: 'About {Sr} people ÷ about 50 seats: about {roughText} busloads.', prompt: 'About how many busloads of people are going?', frame: '__', unit: 'busloads', places: 1, answer: 'loads' },
    exact: { working: '{S} ÷ {c} = {loadsText}: {full} full buses and some people left over, so {count} buses. Always round up, or people stay behind. Look back: near the rough {roughText}, rounded up.',
      prompt: 'How many buses do you book?', frame: '__', unit: 'buses', tol: { abs: 0.01 },
      traps: [{ slip: 'rounded-down', value: 'short', then: '{full} buses seat {full} × {c}, fewer than {S}: people stay behind. Round up.' }] },
    then: [{ id: 'left', does: 'Look at the last bus.', working: '{full} full buses carry {full} × {c}; the other {last} ride the last bus. On the calculator: {keys} shows {empty} empty seats.',
      ask: { id: 'empty', kind: 'number', prompt: 'How many seats are empty on the last bus?', frame: '__', unit: 'empty seats', answer: 'empty', tol: { abs: 0.01 },
        traps: [{ slip: 'remainder-for-gap', value: 'last', then: '{last} is the people on the last bus. The empty seats are the rest of its {c}.' }] } }],
    reason: '{S} ÷ {c} = {loadsText}, so {count} buses: {full} full, and {last} people on the last, which leaves {empty} seats empty.'
  });

  /* ---------- gift bags all the same: the most bags that divide both ---------- */
  const PQ = [[2, 3], [3, 4], [3, 5], [4, 5], [5, 6], [2, 5]];
  const STUFF = [['pencils', 'stickers'], ['granola bars', 'juice boxes'], ['crayons', 'notepads']];
  const bags = problem({
    id: 'g-gift-bags', strand: 'packs', kind: 'equal-groups',
    params: { g: [4, 12, 2], pq: [0, 5, 1], stuff: [0, 2, 1] },
    make: pick => {
      const g = pick('g'), [p, q] = PQ[pick('pq')], A = g * p, B = g * q, [one, two] = STUFF[pick('stuff')];
      const down = Array.from({ length: A }, (_, k) => A - k).filter(d => divides(d, A) && d >= g);
      const tries = down.map(d => `${d} (${B} ÷ ${d} = ${num(B / d, 2)}, ${divides(d, B) ? 'yes' : 'no'})`).join(', ');
      return { g, p, q, A, B, one, two, tries, ans: g, half: g / 2 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Party bags', rows: [{ id: 'a', cells: ['In the box', '{A} {one}'] }, { id: 'b', cells: ['In the drawer', '{B} {two}'] }, { id: 'tape', cells: ['Ribbon', 'one roll'] }],
      notes: ['Every party bag the same, nothing left over.'] }],
    given: 'Asked: the most party bags, all the same, with nothing left over, then what goes in each. Given: {A} {one} and {B} {two}. The ribbon does not matter.',
    setup: 'Equal groups with nothing left: the number of bags must divide {A} and {B}. Try what divides {A}, from the biggest down, until one also divides {B}.',
    exact: { working: 'Tries: {tries}. So {g} bags. Look back: {A} ÷ {g} = {p} and {B} ÷ {g} = {q}, and no number but 1 divides both {p} and {q}, so no more bags work.',
      prompt: 'What is the most bags you can make, all the same, with nothing left over?', frame: '__', unit: 'bags', tol: { abs: 0.01 },
      traps: [{ slip: 'common-not-greatest', value: 'half', then: '{half} divides both, but so does {g}, a bigger number of bags.' }] },
    then: [{ id: 'each', does: 'Work out what goes in each.', working: '{A} ÷ {g} = {p} {one} and {B} ÷ {g} = {q} {two} in each bag.',
      ask: { id: 'each', kind: 'number', prompt: 'What goes in each bag?', frame: '__ {one} and __ {two}', answer: ['p', 'q'], tol: { abs: 0.01 } } }],
    reason: '{g} is the biggest number that divides both {A} and {B}: {g} bags, each with {p} {one} and {q} {two}.'
  });

  /* ---------- packs that come out even, and timetables that line up: the fewest both divide ---------- */
  const countUp = (big, small) => {
    const list = [];
    for(let x = big; ; x += big){ list.push(x); if(divides(small, x)) return list; }
  };
  const PACKS = [[10, 8], [8, 12], [10, 12], [6, 8], [12, 8], [8, 10], [6, 10], [10, 6], [12, 10], [6, 4], [4, 6], [12, 9]];
  const hotdogs = problem({
    id: 'g-hot-dogs', strand: 'packs', kind: 'line-up',
    params: { pk: [0, 11, 1] },
    make: pick => {
      const [a, b] = PACKS[pick('pk')], big = Math.max(a, b), small = Math.min(a, b), list = countUp(big, small), L = list[list.length - 1];
      return { a, b, big, small, upList: list.join(', '), ans: L, product: a * b, hd: L / a, bn: L / b };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Cookout shopping', rows: [{ id: 'dogs', cells: ['Hot dogs', '{a} in a pack, $4.99'] }, { id: 'buns', cells: ['Buns', '{b} in a pack, $2.79'] },
      { id: 'sauce', cells: ['Mustard', 'one bottle, $3.49'] }], notes: ['Same number of hot dogs and buns, none left over.'] }],
    given: 'Asked: the fewest hot dogs (and buns) so the two come out even, then the packs of each. Given: {a} hot dogs and {b} buns a pack. The prices and the mustard do not matter.',
    setup: 'Coming out even: the number must be one that {a} and {b} both divide. Count up by the bigger pack, {big}, until {small} divides it.',
    exact: { working: '{upList}: {ans} is the first that {small} divides. Look back: {ans} ÷ {a} = {hd} and {ans} ÷ {b} = {bn}, both whole.',
      prompt: 'What is the fewest hot dogs, with a bun for each and none of either left over?', frame: '__', unit: 'hot dogs', tol: { abs: 0.01 },
      traps: [{ slip: 'common-not-least', value: 'product', then: '{product} works, but {ans} is the first number both packs divide.' }] },
    then: [{ id: 'packs', does: 'Work out the packs.', working: '{ans} ÷ {a} = {hd} packs of hot dogs and {ans} ÷ {b} = {bn} packs of buns.',
      ask: { id: 'packs', kind: 'number', prompt: 'How many packs of each do you buy?', frame: '__ packs of hot dogs and __ packs of buns', answer: ['hd', 'bn'], tol: { abs: 0.01 } } }],
    reason: '{ans} is the first number both {a} and {b} divide: {hd} packs of hot dogs and {bn} of buns.'
  });

  const TIMES = [[12, 18], [15, 20], [10, 25], [12, 20], [18, 24], [20, 30], [15, 25], [8, 12], [10, 15], [6, 15], [9, 12], [14, 21]];
  const schedule = problem({
    id: 'g-schedule', strand: 'packs', kind: 'line-up',
    params: { tt: [0, 11, 1] },
    make: pick => {
      const [a, b] = TIMES[pick('tt')], list = countUp(b, a), L = list[list.length - 1];
      return { a, b, upList: list.join(', '), ans: L, product: a * b, ta: L / a, tb: L / b };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Main Street stop', rows: [{ id: 'bus', cells: ['Bus 4, from 7:00 a.m.', 'every {a} min'] }, { id: 'tram', cells: ['Streetcar, from 7:00 a.m.', 'every {b} min'] },
      { id: 'fare', cells: ['Fare', '$2.00'] }] }],
    given: 'Asked: how many minutes after 7:00 the bus and the streetcar next leave together. Given: every {a} and every {b} minutes, both at 7:00. The fare does not matter.',
    setup: 'Lining up: the minutes must be a number that {a} and {b} both divide. Count up by the bigger, {b}, until {a} divides it.',
    exact: { working: '{upList}: {ans} is the first that {a} divides. Look back: {ans} ÷ {a} = {ta} and {ans} ÷ {b} = {tb}, both whole.',
      prompt: 'How many minutes after 7:00 do they next leave together?', frame: '__', unit: 'minutes', tol: { abs: 0.01 },
      traps: [{ slip: 'common-not-least', value: 'product', then: '{product} minutes works, but {ans} is the first time both timetables meet.' }] },
    reason: '{ans} is the first number both {a} and {b} divide, so they meet again {ans} minutes after 7:00.'
  });

  FC.gen('math', [buses, bags, hotdogs, schedule]);
  // the worked problem: 230 people, 52 seats a bus
  FC.items('math', [MATH.worked(buses, 'w-buses', { full: 4, c: 52, left: 22 })]);
})();
