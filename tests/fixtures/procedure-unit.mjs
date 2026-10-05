// A small made-up subject with a procedure unit (kind 'P', lesson standard A12): two kinds of percent problem, a worked
// example of each with real numbers, problems with a named slip behind every wrong answer, and the drill stages last, whole
// and route. The key's questions tell which procedure applies. Self-contained: sent to the page as source.
export function registerProcedureUnit() {
  const S = 'proctest';
  FC.subject(S, { name: 'Procedure test', rev: 1, standard: 1, action: false, blurb: 'x', units: ['u1'], settings: ['work', 'home', 'money'], limits: [],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });
  FC.legacy(S, { course: [], quickDrills: [], determination: { gateCode: null, steps: [], stepsByGate: null }, specimens: [] });
  FC.key(S, {
    terms: [], avoid: [],
    outcomes: [
      { id: 'of', group: 'percent', unit: 'u1', n: 'Percent of an amount', plain: 'a share of one number', needs: 'one amount, and a percentage to take of it', aka: [] },
      { id: 'change', group: 'percent', unit: 'u1', n: 'Percent change', plain: 'how far a number moved, as a share', needs: 'an old amount, a new amount, and the move between them as a share of the old one', aka: [] }],
    gate: { code: 'D1', unit: 'u1', q: 'What does the problem ask you to find?', purpose: 'Sorts percentage problems from everything else', why: 'Only a percentage problem has these procedures.',
      options: [
        { id: 'percent', n: 'A percentage', when: 'the problem asks for a share out of a hundred, or for a share of something', keeps: ['of', 'change'] },
        { id: 'other', n: 'Something else', when: 'the problem asks for something that is not a percentage', keeps: [] }] },
    branches: { percent: [
      { code: 'R1', unit: 'u1', q: 'Is the percentage taken of one amount, or does it compare two amounts?', purpose: 'Sorts a share of one amount from a move between two',
        why: 'The two procedures start from different numbers: one amount, or an old amount and a new one.',
        options: [
          { id: 'one', n: 'Taken of one amount', when: 'the problem gives one amount and a percentage to take of it', keeps: ['of'] },
          { id: 'two', n: 'Compares two amounts', when: 'the problem gives an old amount and a new amount', keeps: ['change'] }] }] }
  });

  /* ----- problem generators: every number is worked out here, so the working and the wrong choices cannot drift ----- */
  const NOT = { of: { outcome: 'change', why: 'There is only one amount in this problem. A percent change needs an old amount and a new one.' },
                change: { outcome: 'of', why: 'There are two amounts, and no percentage is given to take of either. A percent of an amount needs one amount and a percentage.' } };
  const route = (outcome, d1, r1, extra) => ({ outcome, route: { D1: ['percent'], R1: [outcome === 'of' ? 'one' : 'two'] }, cues: { D1: d1, R1: r1 },
    reason: { D1: 'The problem asks {cue:D1}, which is a share, so the answer is a percentage kind.', R1: outcome === 'of' ? 'It gives one amount and a percentage: {cue:R1}.' : 'It gives an old and a new amount: {cue:R1}.' },
    not: NOT[outcome], ...extra });
  const ofP = (id, use, tier, setting, topic, amount, pct, extra) => {
    const dec = String(pct / 100), part = amount * pct / 100;
    return { id, use, tier, setting, topic, kind: 'problem', text: `A ${topic} has ${amount} in all, and ${pct}% of it is set aside. How much is set aside?`,
      ...route('of', 'How much is set aside', `${pct}% of it`),
      steps: [{ does: 'Turn the percentage into a decimal', working: `${pct}% = ${pct} ÷ 100 = ${dec}` }, { does: 'Multiply the decimal by the amount', working: `${dec} × ${amount} = ${part}` }],
      answer: { right: 'r', choices: [{ id: 'r', text: String(part) },
        { id: 's1', text: String(amount - part), slip: 'you take the part away from the amount, so you find what is left and not the part itself.' },
        { id: 's2', text: String(amount + part), slip: 'you add the part to the amount.' }] },
      why: 'Of means multiply: a percentage of an amount is the amount times the percentage as a decimal.', ...extra };
  };
  const chP = (id, use, tier, setting, topic, from, to, extra) => {
    const move = Math.abs(to - from), ratio = String(move / from), pct = Math.round(move * 10000 / from) / 100, dir = to > from ? 'up' : 'down';
    return { id, use, tier, setting, topic, kind: 'problem', text: `A ${topic} went from ${from} to ${to}. By what percent did it change?`,
      ...route('change', 'By what percent did it change', `went from ${from} to ${to}`),
      steps: [{ does: 'Find the move between the old and the new amount', working: `${to} − ${from} = ${to - from}, a move ${dir} of ${move}` },
              { does: 'Divide the move by the old amount', working: `${move} ÷ ${from} = ${ratio}` },
              { does: 'Turn it into a percentage', working: `${ratio} × 100 = ${pct}%` }],
      answer: { right: 'r', choices: [{ id: 'r', text: `${pct}% ${dir}` },
        { id: 's1', text: `${(move / to * 100).toFixed(1)}% ${dir}`, slip: 'you divide the move by the new amount instead of the old one.' },
        { id: 's2', text: `${move}% ${dir}`, slip: 'you read the move itself as a percentage.' }] },
      why: 'A move is always measured against where it started, so the old amount is what you divide by.', ...extra };
  };
  const seg = (a, b, c) => [{ text: a, note: 'Not that piece.' }, { text: b }, { text: c, note: 'Not that piece.' }];

  FC.cases(S, 'u1', [
    // teaching cases
    { id: 'm-of', use: 'teach', tier: 'clean', setting: 'money', topic: 'a jacket sale', name: 'The jacket',
      text: 'A jacket costs £80 and is 15% off. How much is taken off the price?', ...route('of', 'How much is taken off the price', '15% off') },
    { id: 'a-of', use: 'teach', tier: 'clean', setting: 'home', topic: 'a bag of flour', name: 'The flour',
      text: 'A recipe needs 250 g of flour, and Sam has used 40% of it. How much flour has Sam used?', ...route('of', 'How much flour has Sam used', 'used 40% of it'),
      segments: seg('A recipe needs 250 g of flour, and Sam has', 'used 40% of it', '. How much flour has Sam used?') },
    { id: 'ck-of-tap', use: 'check', tier: 'clean', setting: 'work', topic: 'a team on leave',
      text: 'A team of 60 has 25% on leave. How many are on leave?', ...route('of', 'How many are on leave', '25% on leave'),
      segments: seg('A team of 60 has', '25% on leave', '. How many are on leave?') },
    { id: 'm-ch', use: 'teach', tier: 'clean', setting: 'home', topic: 'a rent rise', name: 'The rent',
      text: 'A rent went from £500 to £550. By what percent did it go up?', ...route('change', 'By what percent did it go up', 'went from £500 to £550') },
    { id: 'a-ch', use: 'teach', tier: 'clean', setting: 'work', topic: 'a shrinking class', name: 'The class',
      text: 'A class of 40 pupils shrank to 30 over the term. By what percent did it shrink?', ...route('change', 'By what percent did it shrink', 'shrank to 30'),
      segments: seg('A class of 40 pupils', 'shrank to 30', 'over the term. By what percent did it shrink?') },
    { id: 'ck-ch-tap', use: 'check', tier: 'clean', setting: 'money', topic: 'a savings pot',
      text: 'A savings pot grew from £800 to £840. By what percent did it grow?', ...route('change', 'By what percent did it grow', 'grew from £800 to £840'),
      segments: seg('A savings pot', 'grew from £800 to £840', '. By what percent did it grow?') },
    // look-alike pair: the same object, two different procedures
    { id: 'l-of', use: 'teach', tier: 'clean', setting: 'money', topic: 'a phone at the till', text: 'A phone costs £400 and is 10% off at the till.', ...route('of', '10% off at the till', '10% off at the till') },
    { id: 'l-ch', use: 'teach', tier: 'clean', setting: 'money', topic: 'a phone in the sale', text: 'A phone fell from £400 to £360 in the sale.', ...route('change', 'fell from £400 to £360', 'fell from £400 to £360') },
    // solved examples: the card carries the steps, so these cases carry only the problem
    { id: 's-of1', use: 'teach', kind: 'problem', outcome: 'of', tier: 'clean', setting: 'money', topic: 'a coat', text: 'A coat costs £120. The shop takes 25% off. How much is taken off?' },
    { id: 's-of2', use: 'teach', kind: 'problem', outcome: 'of', tier: 'clean', setting: 'home', topic: 'a water tank', text: 'A tank holds 60 litres and is 35% full. How many litres are in it?' },
    { id: 's-ch1', use: 'teach', kind: 'problem', outcome: 'change', tier: 'clean', setting: 'work', topic: 'weekly sales', text: 'A shop sold 200 a week and now sells 250. What is the percent change?' },
    { id: 's-ch2', use: 'teach', kind: 'problem', outcome: 'change', tier: 'clean', setting: 'home', topic: 'a phone bill', text: 'A phone bill fell from £40 to £30. What is the percent change?' },
    // problems asked in a check
    ofP('ck-of', 'check', 'clean', 'money', 'restaurant bill', 90, 20),
    chP('ck-ch', 'check', 'clean', 'home', 'bag of apples', 25, 20),
    // the drill: last step, whole problem, route
    ofP('dl-of1', 'drill', 'clean', 'work', 'work budget', 80, 25), chP('dl-ch1', 'drill', 'clean', 'work', 'weekly order count', 50, 60),
    ofP('dl-of2', 'drill', 'varied', 'home', 'garden bed', 200, 10), chP('dl-ch2', 'drill', 'varied', 'home', 'gym fee', 50, 40),
    ofP('dw-of1', 'drill', 'clean', 'money', 'savings jar', 120, 25), chP('dw-ch1', 'drill', 'clean', 'money', 'train fare', 80, 100),
    ofP('dw-of2', 'drill', 'varied', 'work', 'parcel load', 60, 50), chP('dw-ch2', 'drill', 'varied', 'work', 'stock count', 125, 150),
    ofP('dr-of1', 'drill', 'clean', 'home', 'jar of paint', 500, 20), chP('dr-ch1', 'drill', 'clean', 'money', 'share price', 200, 250),
    ofP('dr-of2', 'drill', 'varied', 'work', 'order of pens', 90, 10), chP('dr-ch2', 'drill', 'varied', 'home', 'power bill', 40, 30),
    { id: 'dr-of3', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a tablet and two prices', kind: 'problem', echo: 'm-ch',
      text: 'A tablet cost £300 last month and £330 this month at full price. This week it is 10% off the £330. How much is taken off?',
      ...route('of', 'How much is taken off', '10% off the £330'),
      steps: [{ does: 'Turn the percentage into a decimal', working: '10% = 10 ÷ 100 = 0.1' }, { does: 'Multiply the decimal by the price it is taken off', working: '0.1 × 330 = 33' }],
      answer: { right: 'r', choices: [{ id: 'r', text: '£33' }, { id: 's1', text: '£30', slip: 'you take the percentage of last month’s £300 and not of the £330 it is taken off.' }, { id: 's2', text: '£297', slip: 'you take the part away from the price, so you find what is left.' }] },
      why: 'Two prices are in the story, but the percentage is taken of only one of them: the one it is off.', wouldChange: 'If the question asked how the price moved from £300 to £330, it would be a percent change.' },
    { id: 'dr-ch3', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a radio with a sign', kind: 'problem', echo: 'm-of',
      text: 'A radio was £60 and, after a sale, costs £45. The sign says 25% off. By what percent did the price change?',
      ...route('change', 'By what percent did the price change', 'was £60 and, after a sale, costs £45'),
      steps: [{ does: 'Find the move between the old and the new amount', working: '45 − 60 = −15, a move down of 15' }, { does: 'Divide the move by the old amount', working: '15 ÷ 60 = 0.25' }, { does: 'Turn it into a percentage', working: '0.25 × 100 = 25%' }],
      answer: { right: 'r', choices: [{ id: 'r', text: '25% down' }, { id: 's1', text: '33.3% down', slip: 'you divide the move by the new amount instead of the old one.' }, { id: 's2', text: '15% down', slip: 'you read the move itself as a percentage.' }] },
      why: 'The sign gives a percentage, but the problem gives two prices and asks how far one moved from the other.', wouldChange: 'If the sign’s 25% were the only number given, with one price, it would be a percent of an amount.' },
    // fresh problems for later days: three of each
    ...[[1, 'work', 70, 10, 160, 200], [2, 'home', 150, 20, 25, 20], [3, 'money', 400, 25, 80, 100]].flatMap(([n, setting, amount, pct, from, to]) => [
      ofP(`rt-of${n}`, 'return', 'clean', setting, `return pile ${n}`, amount, pct), chP(`rt-ch${n}`, 'return', 'clean', setting, `return count ${n}`, from, to)])
  ]);
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Percent problems', canDo: 'Take a percentage problem from a real situation, say which of two procedures it needs, and work it.', everyday: 'A price is cut, a rent goes up, a bill shrinks: each one is a percentage problem.', map: { branch: 'percent' } },
    { id: 'meet-of', kind: 'meet', outcome: 'of', link: 'The first kind of percent problem starts with one amount.', case: 'm-of', mark: 'R1', strip: ['one amount: £80', 'a percentage: 15%'],
      explain: 'The jacket has one price, and the percentage is taken of that price. Each step of the procedure is there for a reason, and the cards after this one show them.',
      feature: { step: 'R1', option: 'one' }, name: 'A problem like this is {o:of}.' },
    { id: 'again-of', kind: 'again', outcome: 'of', link: 'The same kind of problem in a different story.', first: 'm-of', second: 'a-of', step: 'R1',
      instruction: 'Compare the words that give the percentage.', prompt: { kind: 'phrase', answer: 'used 40% of it' }, shared: 'In both, one amount is given and a percentage is taken of it.' },
    { id: 'lens', kind: 'lens', h: 'Story and structure', link: 'Before the next kind, here is what changes and what stays.', body: 'The story changes from problem to problem.', fixed: ['the question {q:R1}'], varies: ['the thing', 'the setting'] },
    { id: 'portrait-of', kind: 'portrait', outcome: 'of', link: 'Here is what the first kind is usually like.', typical: ['one amount and a percentage'], not: 'It is not a move between two amounts.', wild: ['“15% off”'], self: 'You meet it at a till.', ask: 'Is there one amount, and a percentage of it?' },
    { id: 'check-of', kind: 'check', after: 'of', case: 'ck-of-tap', ask: { type: 'phrase', step: 'R1', say: 'Tap the words that give the percentage.', answer: '25% on leave' } },
    { id: 'solved-of-1', kind: 'solved', outcome: 'of', h: 'Worked: a percent of an amount', link: 'Here is the procedure with real numbers.', problem: 's-of1',
      steps: [
        { does: 'Turn the percentage into a decimal', working: '25% = 25 ÷ 100 = 0.25', why: 'A percentage is a share out of a hundred, so dividing by 100 gives the same share as a decimal.' },
        { does: 'Multiply the decimal by the amount', working: '0.25 × £120 = £30' },
        { does: 'Say what the number is', working: '£30 is taken off', why: 'The number is the part the shop takes off, and not what is left.' }],
      result: 'The shop takes £30 off the £120.',
      hold: { step: 1, prompt: { kind: 'reason', choices: [{ id: 'x', text: 'A percent of an amount means that share of the amount.' }, { id: 'y', text: 'The decimal is a smaller number than 120.', note: 'That is true, but it does not say why the step is a multiplication.' }], answer: 'x' },
        reason: 'A percentage is a share, and a share of an amount is found by multiplying. That is why this step is a multiplication and not a subtraction.' } },
    { id: 'solved-of-2', kind: 'solved', outcome: 'of', h: 'Worked again: a percent of an amount', link: 'The same procedure in a different story.', problem: 's-of2',
      steps: [
        { does: 'Turn the percentage into a decimal', working: '35% = 35 ÷ 100 = 0.35', why: 'The same first step, because it is the same kind of problem.' },
        { does: 'Multiply the decimal by the amount', working: '0.35 × 60 = 21' },
        { does: 'Say what the number is', working: '21 litres are in the tank', why: 'It is the part of the tank that is full.' }],
      result: 'The tank holds 21 litres.',
      hold: { step: 1, prompt: { kind: 'reason', choices: [{ id: 'x', text: 'A share of an amount is found by multiplying.' }, { id: 'y', text: 'The tank is 60 litres.', note: 'That is true, but it is the amount, not the reason for the step.' }], answer: 'x' },
        reason: 'The tank is 35% full, so the part that is full is 35% of 60, found by multiplying.' } },
    { id: 'check-of-solve', kind: 'check', after: 'of', case: 'ck-of', ask: { type: 'solve', solve: 'last' } },
    { id: 'meet-change', kind: 'meet', outcome: 'change', link: 'The second kind has two amounts.', case: 'm-ch', mark: 'R1', strip: ['an old amount: £500', 'a new amount: £550'],
      explain: 'The rent has two prices, an old one and a new one, and the question is how far it moved.',
      feature: { step: 'R1', option: 'two' }, name: 'A problem like this is {o:change}.' },
    { id: 'again-change', kind: 'again', outcome: 'change', link: 'The same kind in a different story.', first: 'm-ch', second: 'a-ch', step: 'R1',
      instruction: 'Compare the words that give the two amounts.', prompt: { kind: 'phrase', answer: 'shrank to 30' }, shared: 'In both, an old and a new amount are given.' },
    { id: 'portrait-change', kind: 'portrait', outcome: 'change', link: 'Here is what the second kind is usually like.', typical: ['an old and a new amount'], not: 'It is not a share of one amount.', wild: ['“up from … to …”'], self: 'You meet it in a bill.', ask: 'Is there an old amount and a new one?' },
    { id: 'check-change', kind: 'check', after: 'change', case: 'ck-ch-tap', ask: { type: 'phrase', step: 'R1', say: 'Tap the words that give the two amounts.', answer: 'grew from £800 to £840' } },
    { id: 'solved-ch-1', kind: 'solved', outcome: 'change', h: 'Worked: a percent change', link: 'Here is the second procedure with real numbers.', problem: 's-ch1',
      steps: [
        { does: 'Find the move between the old and the new amount', working: '250 − 200 = 50', why: 'The move is the distance from where it started.' },
        { does: 'Divide the move by the old amount', working: '50 ÷ 200 = 0.25' },
        { does: 'Turn it into a percentage', working: '0.25 × 100 = 25%', why: 'Multiplying by 100 turns the share into a percentage.' }],
      result: 'Sales went up by 25%.',
      hold: { step: 1, prompt: { kind: 'reason', choices: [{ id: 'x', text: 'A move is measured against where it started.' }, { id: 'y', text: 'The new amount is 250.', note: 'That is true, but it is not why the old amount is the one divided by.' }], answer: 'x' },
        reason: 'The percent says how big the move is compared with where it started, so the old amount is what you divide by.' } },
    { id: 'solved-ch-2', kind: 'solved', outcome: 'change', h: 'Worked again: a percent change', link: 'The same procedure when the number goes down.', problem: 's-ch2',
      steps: [
        { does: 'Find the move between the old and the new amount', working: '30 − 40 = −10, a move down of 10', why: 'A minus sign means the amount went down.' },
        { does: 'Divide the move by the old amount', working: '10 ÷ 40 = 0.25' },
        { does: 'Turn it into a percentage', working: '0.25 × 100 = 25% down', why: 'The direction is said in words, so the answer is a fall of 25%.' }],
      result: 'The bill fell by 25%.',
      hold: { step: 1, prompt: { kind: 'reason', choices: [{ id: 'x', text: 'A fall is measured against where it started, too.' }, { id: 'y', text: 'The bill is smaller now.', note: 'That is true, but it does not say what to divide by.' }], answer: 'x' },
        reason: 'A fall is a move like a rise, and it is measured against the old amount in the same way.' } },
    { id: 'check-change-solve', kind: 'check', after: 'change', case: 'ck-ch', ask: { type: 'solve', solve: 'whole' } },
    { id: 'look-pc', kind: 'lookalike', ledger: 'of~change', link: 'These two get mixed up, because both talk about the same phone.', cases: ['l-of', 'l-ch'], instruction: 'Compare what each one gives you.',
      prompt: { kind: 'which', option: 'R1.two', answer: 'l-ch' }, difference: 'Case B gives an old and a new price, and so it compares two amounts. Case A gives one price and a percentage of it.' },
    { id: 'q-r1', kind: 'question', step: 'R1', h: 'Which procedure', link: 'The key asks one question to choose between the two.', decides: 'It decides which numbers you start from.', how: 'Count the amounts the problem gives.' },
    { id: 'check-r1', kind: 'check', after: 'R1', case: 'ck-ch-tap', ask: { type: 'step', step: 'R1' } },
    { id: 'recap', kind: 'recap', h: 'What to carry', link: 'Here is the unit in one place.', carry: ['Count the amounts, then choose the procedure.'] },
    { id: 'transfer', kind: 'transfer', h: 'In your own life', link: 'Name a time you needed one of these.', ask: 'Name one.', prompts: [{ outcome: 'of', occasion: 'a price cut' }, { outcome: 'change', occasion: 'a rise in a bill' }], places: ['work', 'home'] }
  ]);
  FC.unit(S, 'u1', {
    kind: 'P', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Percent problems' }, subtitle: 'Two kinds of percentage problem',
    teaches: { steps: ['D1', 'R1'], outcomes: ['of', 'change'], terms: [] }, assumes: [],
    ledger: [{ id: 'of~change', pair: ['of', 'change'], step: 'R1', shared: 'Both are percentage problems about a price.',
      rule: '{o:of} gives one amount and a percentage of it, and {o:change} gives an old and a new amount.', test: 'How many amounts does the problem give, one or an old and a new?' }],
    parts: [
      { id: 'p1', title: 'A percent of an amount', cards: ['orient', 'meet-of', 'again-of', 'lens', 'portrait-of', 'check-of', 'solved-of-1', 'solved-of-2', 'check-of-solve'] },
      { id: 'p2', title: 'A percent change', cards: ['meet-change', 'again-change', 'portrait-change', 'check-change', 'solved-ch-1', 'solved-ch-2', 'check-change-solve', 'look-pc'] },
      { id: 'p3', title: 'Choosing, then the drill', cards: ['q-r1', 'check-r1'], drill: true, close: ['recap', 'transfer'] }],
    drill: { key: 'u1', rungs: [
      { ask: 'last', items: [['dl-of1', 'dl-ch1'], ['dl-of2', 'dl-ch2']] },
      { ask: 'whole', items: [['dw-of1', 'dw-ch1'], ['dw-of2', 'dw-ch2']] },
      { ask: 'route', items: [['dr-of1', 'dr-ch1'], ['dr-of2', 'dr-ch2'], ['dr-of3', 'dr-ch3']] }],
      returns: ['rt-of1', 'rt-of2', 'rt-of3', 'rt-ch1', 'rt-ch2', 'rt-ch3'] },
    build: { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } }
  });
  return S;
}
