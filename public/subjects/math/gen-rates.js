// Math, lesson 3 "Rates and scaling": a known pair of numbers scaled to another, always through "per one" (docs/research/math.md, M7: unitizing,
// the multiplicative way; M8: the cost of one can given 4 for $2.00). The picture is a table of two rows (M15), filled with the problem's numbers in
// the feedback. The named slips are the two errors novices make with proportions (M7): the rate upside down, and the difference added instead of
// scaling. Five kinds: a store deal, a recipe, money changed into dollars, a map scale, a unit changed.
(() => {
  const { usd, num, problem } = MATH;
  const cents = x => Math.round(x * 100);
  const quarterStep = x => Math.max(0.25, Math.round(x * 4) / 4);
  const SERVES = [4, 6, 8];
  const direction = (more, of, than) => more ? `more ${of} than ${than}, so more` : `fewer ${of} than ${than}, so less`;

  /* ---------- a store deal: n for $p, and you want another number ---------- */
  const GOODS = ['Yogurt cups', 'Cans of soup', 'Bags of chips', 'Boxes of pasta', 'Avocados', 'Bottles of juice'];
  const deal = problem({
    id: 'g-deal', strand: 'rate', kind: 'unit-price',
    params: { n: [2, 6, 1], p: [2, 15, 1], m: [5, 12, 1], g: [0, 5, 1] },
    make: pick => {
      const n = pick('n'), p0 = Math.max(pick('p'), Math.ceil(n * 0.8)), p = p0 === n ? p0 + 1 : p0, want = pick('m') % n === 0 || pick('m') === n ? pick('m') + 1 : pick('m');
      const per = p / n, perF = Math.round(per * 20) / 20, ans = Math.round(want * p * 100 / n) / 100;
      return { goods: GOODS[pick('g')], n, price: p, priceText: usd(p * 100), want, perText: usd(cents(per)), perFText: usd(cents(perF)), rough: want * perF, roughText: usd(cents(want * perF)),
        ans, ansText: usd(cents(ans)), flipped: Math.round(want * n / p * 100) / 100, added: p + want - n, look: direction(want > n, 'of them', n) };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{goods}', rows: [{ id: 'deal', cells: ['{n} for ${price}'] }, { id: 'ends', cells: ['Sale ends Sunday'] }] }],
    given: 'Asked: what {want} cost at the deal’s price each. Given: {n} for ${price}. When the sale ends does not matter.',
    rough: { working: 'Per one: ${price} ÷ {n} is about {perFText} each, so {want} cost about {want} × {perFText} = {roughText}.',
      prompt: 'You want {want}. About how much will they cost at the same price each?', places: 2 },
    setup: 'Per one, in a table of two rows: {n} cost ${price}, so 1 costs ${price} ÷ {n}, about {perText}, and {want} cost {want} times that.',
    exact: { working: 'On the calculator: {price} ÷ {n} × {want} = {ansText}. Look back: near the rough {roughText}; {look} than ${price}.',
      prompt: 'What do {want} cost exactly, to the nearest cent?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That is {n} ÷ {price} × {want}: how many you get for a dollar, not dollars. Divide the dollars by the number.' },
        { slip: 'added-difference', value: 'added', then: 'That is ${price} plus a dollar for each extra one. The price scales: per one, then times {want}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'How many', cells: ['{n}', '1', '{want}'] }, bottom: { label: 'Dollars', cells: ['{priceText}', '{perText}', '{ansText}'] } } },
    reason: 'One costs ${price} ÷ {n}, about {perText}; {want} cost {want} times that, {ansText}. Per one first, then times how many.'
  });

  /* ---------- a recipe for another number of people ---------- */
  const AMOUNTS = [{ text: '½ cup', v: 0.5 }, { text: '¾ cup', v: 0.75 }, { text: '1¼ cups', v: 1.25 }, { text: '1½ cups', v: 1.5 }, { text: '2 cups', v: 2 }, { text: '2½ cups', v: 2.5 }];
  const DISHES = [{ dish: 'Pancakes', ing: 'flour' }, { dish: 'Rice pudding', ing: 'rice' }, { dish: 'Oat bars', ing: 'oats' }, { dish: 'Corn bread', ing: 'cornmeal' },
    { dish: 'Lentil soup', ing: 'lentils' }, { dish: 'Banana bread', ing: 'flour' }];
  const recipe = problem({
    id: 'g-recipe', strand: 'rate', kind: 'recipe',
    params: { si: [0, 2, 1], w: [3, 12, 1], a: [0, 5, 1], d: [0, 5, 1] },
    make: pick => {
      // more people than the recipe serves (fewer is the same move, met in money and units), so the feedback's "more people need more" holds
      // and adding the difference is a real number of cups
      const s = SERVES[pick('si')], want = Math.max(pick('w'), s + 1), amount = AMOUNTS[pick('a')], v = amount.v, dish = DISHES[pick('d')];
      const f = Math.abs(Math.max(0.5, Math.round(want / s * 2) / 2) * s / want - 1) <= 0.2 ? Math.max(0.5, Math.round(want / s * 2) / 2) : quarterStep(want / s), ans = v / s * want, rough = f * v;
      return { dish: dish.dish, ing: dish.ing, s, want, amountText: amount.text, v, factor: num(f), rough, roughText: num(rough), perText: num(v / s, 3),
        ans, ansText: num(ans), flipped: v * s / want, added: v + want - s, look: direction(want > s, 'people', s) + ` than ${amount.text}` };
    },
    blocks: [{ kind: 'document', form: 'recipe', title: '{dish}', rows: [{ id: 'main', cells: ['{amountText}', '{ing}'] }, { id: 'eggs', cells: ['2', 'eggs'] }, { id: 'salt', cells: ['1 teaspoon', 'salt'] }],
      notes: ['Serves {s}', 'Bake or cook 25 minutes'] }],
    given: 'Asked: the {ing} for {want} people. Given: {amountText} of {ing} serves {s} ({amountText} is {v} on the calculator). The eggs, the salt and the time do not matter here.',
    rough: { working: '{want} people is about {factor} times {s}, so about {factor} × {v} = {roughText} cups.',
      prompt: 'You are cooking for {want}. About how many cups of {ing}?', frame: '__', unit: 'cups', places: 2 },
    setup: 'Per one, in a table of two rows: {s} people take {v} cups, so 1 person takes {v} ÷ {s}, about {perText} cups, and {want} people take {want} times that.',
    exact: { working: 'On the calculator: {v} ÷ {s} × {want} = {ansText} cups. Look back: near the rough {roughText}; {look}.',
      prompt: 'How many cups of {ing} exactly, to two decimals?', frame: '__', unit: 'cups', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That is {v} × {s} ÷ {want}: the scale is upside down. More people need more, so it is {want} ÷ {s}, not {s} ÷ {want}.' },
        { slip: 'added-difference', value: 'added', then: 'That adds a cup for each extra person. A recipe scales: per person, then times {want}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'People', cells: ['{s}', '1', '{want}'] }, bottom: { label: 'Cups', cells: ['{v}', '{perText}', '{ansText}'] } } },
    reason: 'One person takes {v} ÷ {s} cups, so {want} people take {ansText} cups. A recipe scales by the number of people.'
  });

  /* ---------- money changed into dollars ---------- */
  const MONEY = [
    { cur: 'euros', one: 'euro', rate: [0.86, 0.95], price: [60, 480], roughRate: 1 / 1.1,
      friendly: 'Call the rate 1 to 1: about ${amount}. Each dollar buys less than one euro, so nudge it up, about a tenth more.' },
    { cur: 'Canadian dollars', one: 'Canadian dollar', rate: [1.30, 1.40], price: [60, 480], roughRate: 4 / 3,
      friendly: 'About 4 Canadian dollars to 3 US ones, so the dollars are about three quarters of {amount}.' },
    { cur: 'Mexican pesos', one: 'peso', rate: [17.0, 20.0], price: [400, 4000], roughRate: 20 / 1.1,
      friendly: 'Call it 20 pesos to the dollar: {amount} ÷ 20. The rate is under 20, so nudge it up, about a tenth more.' }];
  const SPENDS = ['A hotel room for one night', 'Dinner for two', 'A day tour', 'A rental bike for a week'];
  const currency = problem({
    id: 'g-currency', strand: 'rate', kind: 'currency',
    params: { c: [0, 2, 1], r: [0, 1, 0.05], a: [0, 1, 0.01], sp: [0, 3, 1] },
    make: pick => {
      const m = MONEY[pick('c')], places = m.rate[0] >= 10 ? 1 : 2;
      const rate = Math.round((m.rate[0] + (m.rate[1] - m.rate[0]) * pick('r')) * 10 ** places) / 10 ** places;
      const amount = Math.round((m.price[0] + (m.price[1] - m.price[0]) * pick('a')) / 5) * 5, ans = Math.round(amount / rate * 100) / 100;
      const rough = amount / m.roughRate, more = rate < 1;
      return { cur: m.cur, one: m.one, rateText: rate.toFixed(places), rate, amount, amountText: num(amount), spend: SPENDS[pick('sp')],
        friendly: m.friendly.replace(/\{amount\}/g, num(amount)), rough: Math.round(rough), roughText: MATH.dollars(Math.round(rough)), ans, ansText: usd(cents(ans)), flipped: Math.round(amount * rate * 100) / 100,
        look: more ? `more dollars than ${m.cur}, since each dollar buys less than one ${m.one}` : `fewer dollars than ${m.cur}, since each dollar buys more than one ${m.one}` };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Trip budget', rows: [{ id: 'cost', cells: ['{spend}', '{amountText} {cur}'] }, { id: 'rate', cells: ['Exchange rate', '1 US dollar = {rateText} {cur}'] },
      { id: 'fee', cells: ['Card fee abroad', 'none'] }] }],
    given: 'Asked: what {amountText} {cur} is in US dollars. Given: 1 US dollar buys {rateText} {cur}. The card fee does not matter.',
    rough: { working: '{friendly} About {roughText}.', prompt: 'About how many US dollars is that?', places: 2 },
    setup: 'Per one, in a table of two rows: 1 US dollar = {rateText} {cur}. From {cur} to dollars, the side with the 1, divide by {rateText}.',
    exact: { working: 'On the calculator: {amount} ÷ {rateText} = {ansText}. Look back: near the rough {roughText}; {look}.',
      prompt: 'How many US dollars is it exactly, to the nearest cent?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That is {amountText} × {rateText}: the rate is upside down. Each dollar buys {rateText} {cur}, so divide by {rateText}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'US dollars', cells: ['1', '{ansText}'] }, bottom: { label: '{cur}', cells: ['{rateText}', '{amountText}'] } } },
    reason: 'Each dollar buys {rateText} {cur}, so {amountText} {cur} is {amountText} ÷ {rateText} = {ansText}.'
  });

  /* ---------- a map scale ---------- */
  const QUARTERS = ['', '¼', '½', '¾'];
  const TRAILS = ['Ridge Trail', 'Lakeshore Loop', 'Canyon Path', 'Pine Creek Trail'];
  const mapScale = problem({
    id: 'g-map', strand: 'rate', kind: 'map-scale',
    params: { s: [2, 4, 5, 8, 10, 25], q: [5, 27, 1], t: [0, 3, 1] },
    make: pick => {
      const s = pick('s'), inches = pick('q') / 4, whole = Math.floor(inches), ans = inches * s, near = Math.round(inches * 2) / 2;
      return { s, trail: TRAILS[pick('t')], inches, inchText: `${whole}${QUARTERS[pick('q') % 4]}`, near, rough: near * s, roughText: num(near * s), ans, ansText: num(ans), flipped: inches / s };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{trail} map', rows: [{ id: 'scale', cells: ['Scale', '1 inch to {s} miles'] }, { id: 'length', cells: ['The trail, measured on the map', '{inchText} inches'] },
      { id: 'parking', cells: ['Parking at the start', '$5 a day'] }] }],
    given: 'Asked: how many miles long the trail is. Given: {inchText} inches on the map ({inches} on the calculator), and 1 inch is {s} miles. Parking does not matter.',
    rough: { working: '{inchText} inches is about {near} (to the nearest half inch), so about {near} × {s} = {roughText} miles.', prompt: 'About how many miles long is the trail?', frame: '__', unit: 'miles' },
    setup: 'Per one, in a table of two rows: 1 inch is {s} miles, so {inches} inches is {inches} times {s}.',
    exact: { working: 'On the calculator: {inches} × {s} = {ansText} miles. Look back: near the rough {roughText}, and many more miles than inches.',
      prompt: 'How many miles is it exactly?', frame: '__', unit: 'miles', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That is {inches} ÷ {s}: the scale is upside down. Each inch is {s} miles, so multiply.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Inches', cells: ['1', '{inches}'] }, bottom: { label: 'Miles', cells: ['{s}', '{ansText}'] } } },
    reason: 'Each inch on the map is {s} miles, so {inches} inches is {inches} × {s} = {ansText} miles.'
  });

  /* ---------- a unit changed ---------- */
  const UNITS = [
    { title: 'Race sign-up', thing: 'The race', from: 'kilometers', to: 'miles', fact: '1 mile = 1.609 kilometers', k: 1.609, divide: true, amounts: [5, 8, 10, 15, 21.1, 42.2],
      friendly: 'A mile is about 1.6 kilometers, so the miles are about 0.6 of the kilometers: 0.6 × {a}.', roughK: 0.6, extra: ['Start time', '8 a.m.'] },
    { title: 'Country bread', thing: 'The flour', from: 'grams', to: 'ounces', fact: '1 ounce = 28.35 grams', k: 28.35, divide: true, amounts: [250, 300, 350, 400, 450, 500, 600, 750],
      friendly: 'About 30 grams to an ounce: {a} ÷ 30.', roughK: 1 / 30, extra: ['Water', '350 grams'] },
    { title: 'Fish tank', thing: 'The tank', from: 'liters', to: 'gallons', fact: '1 gallon = 3.785 liters', k: 3.785, divide: true, amounts: [20, 30, 40, 54, 60, 80, 120],
      friendly: 'About 4 liters to a gallon: {a} ÷ 4.', roughK: 0.25, extra: ['Price', '$89'] },
    { title: 'Boat for sale', thing: 'The boat', from: 'meters', to: 'feet', fact: '1 meter = 3.281 feet', k: 3.281, divide: false, amounts: [4.5, 6, 7.5, 8, 9.5, 11, 12],
      friendly: 'A meter is about 3 feet: {a} × 3.', roughK: 3, extra: ['Year built', '2009'] }];
  const unitChange = problem({
    id: 'g-units', strand: 'rate', kind: 'unit-change',
    params: { u: [0, 3, 1], ai: [0, 7, 1] },
    make: pick => {
      const u = UNITS[pick('u')], a = u.amounts[pick('ai') % u.amounts.length], ans = u.divide ? a / u.k : a * u.k, flipped = u.divide ? a * u.k : a / u.k;
      return { title: u.title, thing: u.thing, from: u.from, to: u.to, fact: u.fact, a, aText: num(a), extraLabel: u.extra[0], extraValue: u.extra[1], extraLow: u.extra[0].toLowerCase(),
        friendly: u.friendly.replace(/\{a\}/g, num(a)), rough: a * u.roughK, roughText: num(a * u.roughK, 1), ans, ansText: num(ans), flipped,
        wayRule: u.divide ? `From ${u.from} to ${u.to}, the side with the 1, divide by ${u.k}` : `From ${u.from}, the side with the 1, to ${u.to}, multiply by ${u.k}`,
        op: u.divide ? '÷' : '×', k: u.k, topLabel: u.divide ? u.to : u.from, botLabel: u.divide ? u.from : u.to, topAmt: num(u.divide ? ans : a), botAmt: num(u.divide ? a : ans), way: u.divide ? `each ${u.to.replace(/s$/, '')} is ${u.k} ${u.from}, so there are fewer ${u.to} than ${u.from}` : `each ${u.from.replace(/s$/, '')} is ${u.k} ${u.to}, so there are more ${u.to} than ${u.from}` };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{title}', rows: [{ id: 'size', cells: ['{thing}', '{aText} {from}'] }, { id: 'fact', cells: ['To change it', '{fact}'] },
      { id: 'extra', cells: ['{extraLabel}', '{extraValue}'] }] }],
    given: 'Asked: {aText} {from} in {to}. Given: {fact}. The line about {extraLow} does not matter.',
    rough: { working: '{friendly} About {roughText} {to}.', prompt: 'About how many {to} is that?', frame: '__', unit: '{to}' },
    setup: 'Per one: {fact}. {wayRule}: {way}.',
    exact: { working: 'On the calculator: {aText} {op} {k} = {ansText} {to}. Look back: near the rough {roughText}.',
      prompt: 'How many {to} is it exactly, to two decimals?', frame: '__', unit: '{to}', places: 2, tol: { abs: 0.05 },
      traps: [{ slip: 'ratio-upside-down', value: 'flipped', then: 'That went the wrong way: {way}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: '{topLabel}', cells: ['1', '{topAmt}'] }, bottom: { label: '{botLabel}', cells: ['{k}', '{botAmt}'] } } },
    reason: '{fact}, so {aText} {from} is {aText} {op} {k} = {ansText} {to}.'
  });

  FC.gen('math', [deal, recipe, currency, mapScale, unitChange]);
  // the worked problem: ¾ cup of flour for 4, cooked for 7
  FC.items('math', [MATH.worked(recipe, 'w-recipe', { si: 0, w: 7, a: 1, d: 0 }), MATH.worked(currency, 'w-currency', { c: 0, r: 0.6, a: 0.25, sp: 0 })]);
})();
