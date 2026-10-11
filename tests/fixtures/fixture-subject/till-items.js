// Questions of the strand "working out amounts": a receipt made with fresh prices, a recipe to scale, a price tag with a discount.
(() => {
  const usd = cents => '$' + (cents / 100).toFixed(2);
  const dollar = cents => '$' + Math.round(cents / 100);
  FC.gen('till', [{
    id: 't-cart', strand: 'amounts', facets: { kind: 'sum' },
    params: { a: [150, 450, 10], b: [250, 950, 10], c: [900, 1700, 10] },
    make: pick => {
      const a = pick('a'), b = pick('b'), c = pick('c'), cents = a + b + c;
      return { pa: usd(a), pb: usd(b), pc: usd(c), ra: dollar(a), rb: dollar(b), rc: dollar(c),
        rough: Math.round(a / 100) + Math.round(b / 100) + Math.round(c / 100), total: cents / 100, totalText: usd(cents),
        noRoast: (a + b) / 100, tenfold: cents / 10 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: 'Corner Cafe', rows: [
      { id: 'r1', cells: ['Coffee beans', '{pa}'] }, { id: 'r2', cells: ['Oat milk', '{pb}'] }, { id: 'r3', cells: ['Roast chicken', '{pc}'] }], notes: ['Paid by card'] }],
    asks: [
      { id: 'est', kind: 'number', prompt: 'About how much does the cart come to? Round each price in your head.', frame: '$__', estimate: true, answer: 'total', places: 2, tol: { rel: 0.2 } },
      { id: 'exact', kind: 'number', prompt: 'What is the exact total, to the cent?', frame: '$__', places: 2, answer: 'total', tol: { round: 0.01 },
        traps: [{ slip: 'left-out', value: 'noRoast', then: 'That is the answer you get when the roast chicken is left out.' }, { slip: 'point', value: 'tenfold' }] }],
    steps: [{ id: 'round', does: 'Round each price to the nearest dollar.', working: '{ra} + {rb} + {rc} is about ${rough}.', ask: 'est' },
      { id: 'add', does: 'Add the exact prices on a calculator.', working: '{pa} + {pb} + {pc} = {totalText}.', ask: 'exact' }],
    deciding: ['r3'],
    reason: 'The three prices add up to {totalText}. Rounded, they come to about ${rough}, so the two agree.'
  }]);
  const recipe = (id, kind, title, flour, milk, serves, wanted, right) => ({
    id, strand: 'amounts', facets: { kind },
    blocks: [{ kind: 'document', form: 'recipe', title, rows: [{ id: 'f', cells: [`${flour} cups`, 'flour'] }, { id: 'm', cells: [`${milk} cups`, 'milk'] }], notes: [`Serves ${serves}`] }],
    asks: [{ id: 'cups', kind: 'number', prompt: `You are cooking for ${wanted}. About how many cups of each?`, frame: 'flour __ cups, milk __ cups', answer: right, tol: { abs: 0.5 } }],
    reason: `${wanted} is ${wanted / serves} times ${serves}, so each amount is ${wanted / serves} times as much.`
  });
  FC.items('till', [
    recipe('t-recipe', 'scale', 'Pancakes', 2, 1, 4, 6, [3, 1.5]),
    recipe('c-recipe', 'scale', 'Waffles', 4, 2, 4, 8, [8, 4]),
    { id: 'w-till', strand: 'amounts', facets: { kind: 'sum' },
      blocks: [{ kind: 'document', form: 'receipt', title: 'Corner Cafe', rows: [{ id: 'r1', cells: ['Bread', '$3.49'] }, { id: 'r2', cells: ['Milk', '$4.29'] }, { id: 'r3', cells: ['Eggs', '$3.79'] }] }],
      asks: [{ id: 'est', kind: 'number', prompt: 'About how much?', frame: '$__', estimate: true, answer: 11, places: 2, tol: { rel: 0.2 } },
        { id: 'exact', kind: 'number', prompt: 'What is the exact total?', frame: '$__', places: 2, answer: 11.57, tol: { round: 0.01 } }],
      steps: [{ id: 'round', does: 'Round each price to the nearest dollar.', working: '$3 + $4 + $4 = $11.', ask: 'est' },
        { id: 'add', does: 'Add the exact prices.', working: '$3.49 + $4.29 + $3.79 = $11.57.', ask: 'exact' }],
      reason: 'Rounded, the cart is about $11. Exactly, it is $11.57. They are close, so the total is sensible.' },
    { id: 't-leave', strand: 'amounts', facets: { kind: 'sum' },
      blocks: [{ kind: 'document', form: 'tag', title: 'Blue shirt', rows: [{ id: 'p', cells: ['$24.00'] }, { id: 'off', cells: ['25% off'] }] }],
      asks: [{ id: 'cut', kind: 'number', prompt: 'How many dollars come off?', frame: '$__', places: 2, answer: 6, tol: { abs: 0.01 } },
        { id: 'pay', kind: 'number', prompt: 'What do you pay?', frame: '$__', places: 2, answer: 18, tol: { abs: 0.01 }, traps: [{ slip: 'left-out', value: 6, then: 'That is the amount that comes off, not what you pay.' }] }],
      steps: [{ id: 's1', does: 'Find the discount: a quarter of $24.', working: '$24 ÷ 4 = $6.', ask: 'cut' }, { id: 's2', does: 'Take it off the price.', working: '$24 − $6 = $18.', ask: 'pay' }],
      deciding: ['off'], reason: 'A quarter of $24 is $6. Taking it off leaves $18.' }
  ]);
})();
