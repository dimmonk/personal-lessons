// Math, lesson 1 "Ballpark and check": the one worked example, a grocery receipt with its numbers fixed so the working can be read as written.
FC.items('math', [{
  id: 'w-receipt', strand: 'ballpark', facets: { kind: 'estimate' },
  blocks: [{ kind: 'document', form: 'receipt', title: 'Corner Market', rows: [
    { id: 'l1', cells: ['Bread', '$3.49'] }, { id: 'l2', cells: ['Milk', '$4.29'] }, { id: 'l3', cells: ['Eggs', '$3.79'] }, { id: 'l4', cells: ['Roast chicken', '$11.86'] }] }],
  asks: [
    { id: 'est', kind: 'number', prompt: 'About how much does this cart come to?', frame: '$__', places: 2, estimate: true, answer: 23.43, tol: { rel: 0.2 } },
    { id: 'exact', kind: 'number', prompt: 'What is the exact total?', frame: '$__', places: 2, answer: 23.43, tol: { round: 0.01 } }],
  steps: [
    { id: 'round', does: 'Round each price to the nearest dollar.', working: '$3.49 is $3. $4.29 is $4. $3.79 is $4. $11.86 is $12.' },
    { id: 'add', does: 'Add the rounded prices in your head.', working: '3 + 4 + 4 + 12 = 23, so the cart is about $23.', ask: 'est' },
    { id: 'sum', does: 'Add the exact prices on the calculator.', working: '$3.49 + $4.29 + $3.79 + $11.86 = $23.43.', ask: 'exact' },
    { id: 'compare', does: 'Compare the two.', working: '$23.43 is close to $23. They agree, so the total is sensible. A total of $2.34 or $234.30 would not agree, and you would look again.' }],
  reason: 'A rough answer comes from rounding each price and adding. The exact total on the calculator should land close to it. When it does not, one of them has a mistake.'
}]);
