// A small made-up subject with a fact unit (kind 'F', lesson standard A12): facts to hold, grouped under a concept, each asked
// from memory, with two look-alike pairs. A subject made only of fact units has a key with no questions at all.
// Self-contained: it is sent to the page as source, so it may use only browser globals.
export function registerFactUnit() {
  const S = 'facttest';
  FC.subject(S, { name: 'Fact test', rev: 1, standard: 1, action: false, blurb: 'x', units: ['u1'], settings: ['work', 'home', 'community'], limits: [],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });
  FC.legacy(S, { course: [], quickDrills: [], determination: { gateCode: null, steps: [], stepsByGate: null }, specimens: [] });
  FC.key(S, { outcomes: [], terms: [], avoid: [], branches: {} });
  FC.cases(S, 'u1', [
    { id: 'k-terms', use: 'teach', tier: 'clean', setting: 'community', topic: 'voting again', name: 'The next vote',
      text: 'Dana voted for her member of the House in the autumn. Two autumns later she was asked to vote for that seat again.' },
    { id: 'k-size', use: 'teach', tier: 'clean', setting: 'community', topic: 'seats in a room', name: 'The meeting hall',
      text: 'A hall has one row of seats for every region of a country. The number of seats says how many people each region sends.' }
  ]);
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Facts about Congress', canDo: 'You will be able to say, without looking, how long each office lasts and how many seats each house has. People meet these numbers whenever the news talks about an election.', everyday: 'When you hear that a seat is up for election this year, knowing how long a term lasts tells you how long ago the last vote was.' },
    { id: 'con-terms', kind: 'concept', h: 'How long an office lasts', link: 'The first group of facts is about time.', case: 'k-terms',
      plain: ['An office comes with a fixed length of time. When the time is up, the seat is voted on again.', 'The length is different for each office, and that is what you will hold.'] },
    { id: 'facts-terms', kind: 'facts', h: 'Term lengths', link: 'These are the three lengths, with how each fits the idea of a fixed time.', concept: 'con-terms', columns: ['Votes'],
      rows: [
        { id: 't-house', q: 'How long is a term in the House of Representatives?', a: 'Two years', cells: ['Every two years'], relates: 'It is the shortest, so the House is voted on most often.' },
        { id: 't-senate', q: 'How long is a term in the Senate?', a: 'Six years', cells: ['Every six years'], relates: 'It is three times the House, so only a third of the Senate is voted on at each election.' },
        { id: 't-president', q: 'How long is a term for the President?', a: 'Four years', cells: ['Every four years'], relates: 'It sits between the two, and it is the length most people think of first.' }] },
    { id: 'chk-t-house', kind: 'check', after: 'facts-terms', ask: { type: 'fact', row: 't-house' } },
    { id: 'chk-t-senate', kind: 'check', after: 'facts-terms', ask: { type: 'fact', row: 't-senate' } },
    { id: 'chk-t-president', kind: 'check', after: 'facts-terms', ask: { type: 'fact', row: 't-president' } },
    { id: 'look-terms', kind: 'lookalike', ledger: 'house~senate', h: 'Two lengths that are easy to swap', link: 'Two of those lengths get swapped more than the rest, so they go side by side.',
      facts: ['t-house', 't-senate'], instruction: 'Compare how often each one is voted on.', prompt: { kind: 'which', answer: 't-senate' },
      difference: 'Fact B is the long one. {f:t-senate} is three times {f:t-house}, and that is why the Senate changes slowly.' },
    { id: 'con-size', kind: 'concept', h: 'How many seats', link: 'The second group of facts is about numbers.', case: 'k-size',
      plain: 'Each house has a fixed number of seats, and the number says how many people can sit in it.' },
    { id: 'facts-size', kind: 'facts', h: 'Seat counts', link: 'These are the seat counts, with how each fits the idea of a fixed number.', concept: 'con-size',
      rows: [
        { id: 'n-house', q: 'How many voting members does the House have?', a: '435', relates: 'It is the larger house, set by population.' },
        { id: 'n-senate', q: 'How many members does the Senate have?', a: '100', relates: 'It is the smaller house, two for each state.' },
        { id: 'n-states', q: 'How many states are there?', a: '50', relates: 'It is the number the Senate is built from.' }] },
    { id: 'chk-n-house', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'n-house' } },
    { id: 'chk-n-senate', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'n-senate' } },
    { id: 'chk-n-states', kind: 'check', after: 'facts-size', ask: { type: 'fact', row: 'n-states' } },
    { id: 'recap', kind: 'recap', h: 'What to carry', link: 'Here is every fact in the unit, in its groups.', carry: ['Two, six and four years: the House, the Senate and the President.'] }
  ]);
  FC.unit(S, 'u1', {
    kind: 'F', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Congress in numbers' }, subtitle: 'Six facts to hold',
    teaches: { steps: [], outcomes: [], terms: [] }, assumes: [],
    ledger: [
      { id: 'house~senate', pair: ['t-house', 't-senate'], shared: 'Both are lengths of a term in Congress.', rule: 'The House lasts {f:t-house} and the Senate lasts {f:t-senate}.', test: 'Which house changes more often?' },
      { id: 'nh~ns', pair: ['n-house', 'n-senate'], taughtIn: 'facts-size', shared: 'Both are counts of seats.', rule: 'The House has {f:n-house} and the Senate has {f:n-senate}.', test: 'Which house is the larger?' }],
    parts: [
      { id: 'p1', title: 'How long an office lasts', cards: ['orient', 'con-terms', 'facts-terms', 'chk-t-house', 'chk-t-senate', 'chk-t-president', 'look-terms'] },
      { id: 'p2', title: 'How many seats, then the drill', cards: ['con-size', 'facts-size', 'chk-n-house', 'chk-n-senate', 'chk-n-states'], drill: true, close: ['recap'] }],
    drill: { key: 'u1', rungs: [{ ask: 'fact', items: [
      [{ fact: 't-house' }, { fact: 't-senate' }], [{ fact: 't-president' }],
      [{ fact: 'n-house' }, { fact: 'n-senate' }], [{ fact: 'n-states' }]] }], returns: [] },
    build: { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } }
  });
  return S;
}
