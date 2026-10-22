// Math, lesson 2 "Friendly numbers for times and divide": the three moves of good estimators (docs/research/math.md, M4: make the numbers
// friendly, make the sum simpler, then nudge) and the benchmark fractions adults use (M3: half, a quarter, a tenth). Each problem has a step of
// its own that makes the numbers friendly, so a group that leaves the last two steps to the learner gives the friendly numbers and asks the rest.
// The numbers are drawn so that the friendly answer alone is always within a fifth of the exact one (tests/number-pure.mjs holds it on 400 seeds).
(() => {
  const { usd, dollars, num, problem, roughOnly, worked } = MATH;
  // the nudge: which way the friendly numbers moved, so which way the rough answer goes
  const nudgeTimes = (dn, dp) => dn < 0 && dp < 0 ? 'Both numbers went up to get there, so the real answer is a bit less.'
    : dn > 0 && dp > 0 ? 'Both numbers went down to get there, so the real answer is a bit more.'
    : 'One number went up and one went down, so they roughly cancel.';

  // the third move done, not only said: the friendly answer moved a little the way the nudge says, kept to two figures ("say $3,200")
  const twoFigures = x => { const unit = 10 ** Math.max(0, Math.floor(Math.log10(Math.abs(x))) - 1); return Math.round(x / unit) * unit; };
  const nudged = (x, dir, by) => dir === 0 ? x : twoFigures(x * (1 + dir * by));

  /* ---------- a price times how many ---------- */
  const EVENTS = ['Ballgame', 'Concert', 'Museum', 'Theater', 'Zoo', 'Aquarium'];
  const times = problem({
    id: 'g-times', strand: 'friendly', kind: 'times',
    params: { nt: [4, 8, 1], dn: [-3, -2, -1, 1, 2, 3], pt: [4, 9, 1], dp: [-3, -2, -1, 1, 2, 3], ev: [0, 5, 1] },
    make: pick => {
      const n = pick('nt') * 10 + pick('dn'), p = pick('pt') * 10 + pick('dp'), nf = pick('nt') * 10, pf = pick('pt') * 10, f = nf * pf;
      const dir = pick('dn') < 0 && pick('dp') < 0 ? -1 : pick('dn') > 0 && pick('dp') > 0 ? 1 : 0, rough = nudged(f, dir, 0.1);
      return { event: EVENTS[pick('ev')], n, p, nf, pf, small: `${pick('nt')} × ${pick('pt')} = ${pick('nt') * pick('pt')}`, friendlyText: num(f), rough, roughText: num(rough),
        nudge: nudgeTimes(pick('dn'), pick('dp')), ans: n * p, ansText: dollars(n * p), lostZero: f / 10, lostZeroText: num(f / 10) };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{event} group tickets', rows: [{ id: 'price', cells: ['Each ticket', '${p}'] }, { id: 'group', cells: ['Your group', '{n} people'] }, { id: 'doors', cells: ['Doors open', '6:30 p.m.'] }] }],
    given: 'Asked: what {n} tickets cost. Given: {n} people at ${p} each. The time the doors open does not matter.',
    friendly: '{n} is close to {nf}, and ${p} is close to ${pf}.',
    rough: { working: '{nf} × {pf}: {small}, and the two zeros make {friendlyText}. {nudge} Say ${roughText}.',
      prompt: 'About how much do the {n} tickets cost? Make the numbers friendly first.', places: 0, tol: { rel: 0.2 },
      traps: [{ slip: 'lost-zero', value: 'lostZero', then: 'That is {nf} × {pf} with a zero dropped: {small}, and the two zeros make {friendlyText}.' }] },
    exact: { working: 'On the calculator: {n} × {p} = {ansText}. Look back: near the rough ${roughText}.',
      prompt: 'What do the {n} tickets cost exactly?', places: 0, tol: { round: 1 },
      traps: [{ slip: 'lost-zero', value: 'lostZero', then: 'That is ten times too small: check the zeros.' }] },
    reason: '{n} × ${p} is about {nf} × ${pf} = ${friendlyText}, and nudged, about ${roughText}; exactly, it is {ansText}.'
  });

  /* ---------- a share of a bill: a number the group divides evenly ---------- */
  const STAYS = ['Lakeside Cabin', 'Beach House', 'Mountain Lodge', 'Lake Lodge'];
  const share = problem({
    id: 'g-share', strand: 'friendly', kind: 'share',
    params: { n: [3, 9, 1], q: [2, 9, 1], d: [-15, -12, -9, -6, -4, 4, 6, 9, 12, 15], c: [0, 99, 1], st: [0, 3, 1] },
    make: pick => {
      // the bill is kept nearer to n × q hundred than to the next multiple of n hundred either side, so the friendly number is the nearest one
      const n = pick('n'), q = pick('q'), f = n * q * 100, d = pick('d') * Math.min(1, 3 / q), bill = Math.round(f * (100 + d)) + pick('c'), shareCents = bill / n;
      const more = d > 0;
      return { stay: STAYS[pick('st')], n, billText: usd(bill), small: `${n} × ${q} = ${n * q}`, friendlyText: dollars(f), qText: dollars(q * 100), rough: nudged(q * 100, more ? 1 : -1, 0.05), roughText: dollars(nudged(q * 100, more ? 1 : -1, 0.05)),
        nudge: more ? 'The bill is a bit more than that, so the share is a bit more.' : 'The bill is a bit less than that, so the share is a bit less.',
        ans: shareCents / 100, ansText: usd(Math.round(shareCents)), timesN: bill * n / 100 };
    },
    blocks: [{ kind: 'document', form: 'offer', title: '{stay}', rows: [{ id: 'nights', cells: ['Stay', '3 nights, cleaning fee included'] }, { id: 'all', cells: ['Total', '{billText}'], strong: true },
      { id: 'times', cells: ['Check-in', '4 p.m.; checkout 11 a.m.'] }], notes: ['Split evenly among {n} friends'] }],
    given: 'Asked: one share of the total. Given: {billText} split {n} ways. The nights and the times do not matter.',
    friendly: '{small}, so {friendlyText} is a number {n} divides evenly, and it is close to {billText}.',
    rough: { working: '{friendlyText} ÷ {n} = {qText}. {nudge} Say {roughText}.',
      prompt: 'About how much is each share? Find a number near the total that {n} divides evenly.', places: 0, tol: { rel: 0.2 },
      traps: [{ slip: 'multiplied-not-divided', value: 'timesN', then: 'That is the total times {n}. A share is smaller than the total: divide.' }] },
    exact: { working: 'On the calculator: {billText} ÷ {n} = {ansText}, to the nearest cent. Look back: near the rough {roughText}.',
      prompt: 'What is each share exactly, to the nearest cent?', places: 2, unit: 'each', tol: { round: 0.01 },
      traps: [{ slip: 'multiplied-not-divided', value: 'timesN', then: 'That is the total times {n}. A share is smaller than the total, so divide.' }] },
    reason: '{billText} is close to {friendlyText}, and {friendlyText} ÷ {n} = {qText}, nudged to about {roughText}; exactly, each share is {ansText}.'
  });

  /* ---------- a part of an amount: a fraction near half, a quarter, three quarters, a third or a tenth ---------- */
  // each easy fraction with totals of hours that make a whole number of at least 8 hours for it, so one hour off it moves the share by an eighth or
  // less, and your hours stay nearer that fraction than any other on the list
  const EASY = [
    { word: 'half', top: 1, bottom: 2, hours: [16, 18, 20, 24, 30, 36, 40, 44, 50] },
    { word: 'a quarter', top: 1, bottom: 4, hours: [32, 36, 40, 44, 48, 60] },
    { word: 'three quarters', top: 3, bottom: 4, hours: [20, 24, 28, 32, 36, 40, 48] },
    { word: 'a third', top: 1, bottom: 3, hours: [30, 33, 36, 39, 42, 45, 48] },
    { word: 'a tenth', top: 1, bottom: 10, hours: [80, 90, 100, 120, 150] }];
  const JOBS = ['painting the Ruiz house', 'clearing the Lee yard', 'moving the Park family', 'building the Shaw deck'];
  const part = problem({
    id: 'g-part', strand: 'friendly', kind: 'part',
    params: { e: [0, 4, 1], hi: [0, 8, 1], off: [-1, 1], pay: [600, 2400, 10], job: [0, 3, 1] },
    make: pick => {
      const easy = EASY[pick('e')], hoursAll = easy.hours[pick('hi') % easy.hours.length], easyHours = hoursAll * easy.top / easy.bottom, mine = easyHours + pick('off');
      const pay = pick('pay'), easyPay = Math.round(pay * easy.top / easy.bottom), rough = nudged(easyPay, pick('off'), 0.05), ans = Math.round(pay * mine / hoursAll * 100) / 100;
      const more = pick('off') > 0;
      return { jobName: JOBS[pick('job')], payText: dollars(pay), hoursAll, mine, easy: easy.word, Easy: easy.word[0].toUpperCase() + easy.word.slice(1), easyHours, easyPayText: dollars(easyPay), rough, roughText: dollars(rough),
        nudge: more ? `You worked a bit more than ${easy.word} of the hours, so a bit more.` : `You worked a bit less than ${easy.word} of the hours, so a bit less.`,
        ans, ansText: usd(Math.round(ans * 100)), flipped: Math.round(pay * hoursAll / mine * 100) / 100 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Pay for {jobName}', rows: [{ id: 'pay', cells: ['Paid for the job', '{payText}'] }, { id: 'all', cells: ['Hours, everyone together', '{hoursAll}'] },
      { id: 'mine', cells: ['Your hours', '{mine}'] }, { id: 'start', cells: ['Started', 'June 3'] }], notes: ['The pay is split by hours worked.'] }],
    given: 'Asked: your share of the pay. Given: you worked {mine} of the {hoursAll} hours, and the job paid {payText}. The start date does not matter.',
    friendly: '{mine} out of {hoursAll} is close to {easy}: {easy} of {hoursAll} hours is {easyHours}.',
    rough: { working: '{Easy} of {payText} is about {easyPayText}. {nudge} Say {roughText}.',
      prompt: 'About how much is your share? Find an easy fraction near your part of the hours.', places: 0, tol: { rel: 0.2 },
      traps: [{ slip: 'fraction-upside-down', value: 'flipped', then: 'That is more than the whole job paid: the fraction is upside down. Your part is {mine} out of {hoursAll}.' }] },
    exact: { working: 'On the calculator: {payText} × {mine} ÷ {hoursAll} = {ansText}. Look back: near the rough {roughText}, and less than the whole pay.',
      prompt: 'What is your share exactly, to the nearest cent?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'fraction-upside-down', value: 'flipped', then: 'That is the pay × {hoursAll} ÷ {mine}: the fraction is upside down. Your part is {mine} out of {hoursAll}.' }] },
    reason: '{mine} of {hoursAll} hours is about {easy}, and {easy} of {payText} is about {easyPayText}, nudged to about {roughText}; exactly, your share is {ansText}.'
  });

  /* ---------- a sum of near-equal amounts: make the sum simpler ---------- */
  const STORES = ['Corner Market', 'Green Grocer', 'Fresh Basket', 'Main Street Foods'];
  const sumNear = problem({
    id: 'g-sum', strand: 'friendly', kind: 'similar-sum',
    params: { base: [60, 120, 10], o1: [-900, 900, 1], o2: [-900, 900, 1], o3: [-900, 900, 1], o4: [-900, 900, 1], st: [0, 3, 1] },
    make: pick => {
      const base = pick('base'), weeks = ['o1', 'o2', 'o3', 'o4'].map(k => base * 100 + pick(k)), total = weeks.reduce((x, y) => x + y, 0), off = total - base * 400;
      const biggest = Math.max(...weeks), offs = ['o1', 'o2', 'o3', 'o4'].map(pick);
      // the nudge only where it can be seen: all four above the friendly amount, or all four below; else none (the rounding goes both ways)
      // and sized by the rounding: about how far each is from it, four times
      const side = offs.every(o => o > 0) ? 1 : offs.every(o => o < 0) ? -1 : 0, each = Math.max(1, Math.round(Math.abs(off) / 400)), shift = side * 4 * each;
      return { store: STORES[pick('st')], ...Object.fromEntries(weeks.map((w, i) => [`week${'ABCD'[i]}`, usd(w)])), base, fourText: dollars(base * 4), rough: base * 4 + shift, roughText: dollars(base * 4 + shift),
        nudge: side > 0 ? `All four are above it, by about $${each} each, so about $${4 * each} more.` : side < 0 ? `All four are below it, by about $${each} each, so about $${4 * each} less.` : 'Some are above and some below, so no nudge.',
        weeksText: weeks.map(w => (w / 100).toFixed(2)).join(' + '), ans: total / 100, ansText: usd(total), noWeek: (total - biggest) / 100 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Groceries this month, {store}', rows: [1, 2, 3, 4].map(k => ({ id: `w${k}`, cells: [`Week ${k}`, `{week${'ABCD'[k - 1]}}`] })),
      notes: ['Store card points this month: 412'] }],
    given: 'Asked: the month’s groceries. Given: four weekly totals. The store card points do not matter.',
    friendly: 'All four are near ${base}.',
    rough: { working: 'So the sum is about four times ${base}: 4 × {base} = {fourText}. {nudge} Say {roughText}.',
      prompt: 'About how much did groceries cost this month? Look for a simpler sum.', places: 0 },
    exact: { working: 'On the calculator: {weeksText} = {ansText}. Look back: near the rough {roughText}.',
      prompt: 'What did groceries cost exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'missed-line', value: 'noWeek', then: 'That leaves a week out. Add all four.' }] },
    reason: 'Four amounts near ${base} make about 4 × ${base} = {fourText}, nudged to about {roughText}; exactly, {ansText}.'
  });

  FC.gen('math', [times, roughOnly(times, 'g-times-est', 'The exact cost is {ansText}.', 'About how much do the {n} tickets cost?'), share, roughOnly(share, 'g-share-est', 'The exact share is {ansText}.', 'About how much is each share?'),
    part, roughOnly(part, 'g-part-est', 'The exact share is {ansText}.', 'About how much is your share?'),
    sumNear, roughOnly(sumNear, 'g-sum-est', 'The exact total is {ansText}.', 'About how much did groceries cost this month?')]);
  // the worked problem: 47 tickets at $66, the example good estimators were asked (rounded up to 50 × 70, then nudged down)
  FC.items('math', [worked(times, 'w-times', { nt: 5, dn: -3, pt: 7, dp: -4, ev: 0 })]);
})();
