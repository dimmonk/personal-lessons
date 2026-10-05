// A tiny made-up subject with a complete gate unit (lesson standard A15), registered in the page so the engine can be
// exercised on the one unit shape no real data has yet: families instead of outcomes, the gate question only, no name
// or finish stage. Every card kind a gate unit uses is here, and the drill has its three stages (piece, route, claim).
// Self-contained: it is sent to the page as source, so it may use only browser globals.
export function registerGateUnit() {
  const S = 'gatetest';
  FC.subject(S, { name: 'Gate test', rev: 1, standard: 1, action: false, blurb: 'x', units: ['u1'], settings: ['work', 'home', 'money', 'health'], limits: [],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });
  FC.legacy(S, { course: [], quickDrills: [], determination: { gateCode: null, steps: [], stepsByGate: null }, specimens: [] });
  FC.key(S, {
    outcomes: [], terms: [{ id: 'mark', unit: 'u1', n: 'a mark', means: 'the words in a case that settle the question' }], avoid: [], branches: {},
    gate: { code: 'D1', unit: 'u1', q: 'What kind of thing is this?', purpose: 'Sorts the alpha sort from the beta sort', why: 'The next questions depend on it.',
      options: [
        { id: 'a', n: 'Alpha thing', plain: 'the alpha sort', needs: 'an alpha mark and a reason', when: 'the case shows alpha', keeps: [], aka: ['the first sort'] },
        { id: 'b', n: 'Beta thing', plain: 'the beta sort', needs: 'a beta mark and a reason', when: 'the case shows beta', keeps: [] },
        { id: 'c', n: 'Gamma thing', plain: 'the gamma sort', needs: 'a gamma mark', when: 'the case shows gamma', keeps: [] }] }
  });
  const seg = (a, b, c) => [{ text: a, note: 'Not that piece.' }, { text: b }, { text: c, note: 'Not that piece.' }];
  // one gate case: its text is built from the cue, so the cue is always an exact substring
  const gate = (id, family, cue, extra) => ({ id, use: 'teach', tier: 'clean', setting: 'work', topic: id, text: `Here is the case ${id}: ${cue}, and that is all.`, route: { D1: [family] },
    cues: { D1: cue }, reason: { D1: 'Look at {cue:D1}.' }, ...extra });
  const tapped = (id, family, cue, extra) => gate(id, family, cue, { segments: seg(`Here is the case ${id}:`, cue, ', and that is all.'), ...extra });
  FC.cases(S, 'u1', [
    { id: 'c-term', use: 'teach', tier: 'clean', setting: 'home', topic: 'a mark in a case', text: 'A note says only that the parcel is late, and the late part is what matters.' },
    gate('c-a1', 'a', 'plainly alpha', { name: 'Alpha one' }),
    tapped('c-a2', 'a', 'very alpha', { name: 'Alpha two', setting: 'home' }),
    gate('c-b1', 'b', 'surely beta', { name: 'Beta one' }),
    tapped('c-b2', 'b', 'quite beta', { name: 'Beta two', setting: 'home', use: 'check' }),
    gate('c-c1', 'c', 'all gamma here', { name: 'Gamma one', setting: 'money' }),
    tapped('c-c2', 'c', 'gamma again', { use: 'check', setting: 'health' }),
    tapped('c-a3', 'a', 'alpha at heart', { use: 'check', setting: 'money' }),
    gate('l-a', 'a', 'a clear alpha thing', { setting: 'money', topic: 'a shared story, alpha side' }),
    gate('l-b', 'b', 'a clear beta thing', { setting: 'money', topic: 'a shared story, beta side' }),
    tapped('x-1', 'b', 'a beta mark under alpha clothes', { name: 'The alpha look', tier: 'misleading', setting: 'health' }),
    gate('c-w1', 'a', 'alpha through the whole case', { name: 'Worked alpha' }),
    gate('c-w2', 'b', 'beta hiding behind a loud alpha story', { name: 'Worked beta', tier: 'misleading', setting: 'home' }),
    gate('d-1', 'a', 'alpha through and through', { use: 'drill' }),
    gate('d-2', 'b', 'beta from top to bottom', { use: 'drill', setting: 'home' }),
    gate('d-3', 'c', 'gamma in every line', { use: 'drill', setting: 'money' }),
    gate('d-4', 'a', 'alpha with a second look', { use: 'drill', setting: 'health', topic: 'd-4 story' }),
    gate('d-5', 'b', 'beta behind an alpha loud story', { use: 'drill', tier: 'misleading', echo: 'c-a1', setting: 'work', topic: 'd-5 story' }),
    { id: 'rev-a', use: 'drill', kind: 'reverse', outcome: 'a', expect: 'hear', options: [{ text: 'Alpha words', voice: 'a' }, { text: 'Beta words', voice: 'b' }], why: 'Alpha sounds so.' },
    { id: 'rev-b', use: 'drill', kind: 'reverse', outcome: 'b', expect: 'find', options: [{ text: 'A beta detail', voice: 'b' }, { text: 'A gamma detail', voice: 'c' }], why: 'Beta looks so.' },
    { id: 'rev-c', use: 'drill', kind: 'reverse', outcome: 'c', expect: 'hear', options: [{ text: 'Gamma words', voice: 'c' }, { text: 'Alpha words again', voice: 'a' }], why: 'Gamma sounds so.' },
    { id: 'cl-1', use: 'claim', text: 'A claim about alpha, worked first.', ask: { type: 'missing', name: 'a' }, fault: 'It is faulty.', corrected: 'It is put right.' },
    { id: 'cl-2', use: 'claim', text: 'A claim about beta.', ask: { type: 'missing', name: 'b' }, fault: 'It is faulty too.', corrected: 'It is put right too.' },
    { id: 'cl-3', use: 'claim', text: 'A claim that uses the question itself.', ask: { type: 'option', step: 'D1', answer: 'c' }, fault: 'It answers the wrong question.', corrected: 'It answers the right one.' },
    ...['a', 'b', 'c'].flatMap((f, i) => [1, 2, 3].map(n => gate(`rt-${f}${n}`, f, `a return ${f}${n}`, { use: 'return', setting: ['work', 'home', 'money'][(i + n) % 3], topic: `return ${f}${n}` })))
  ]);
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Orient', canDo: 'Do it.', everyday: 'Every day.', map: { branch: 'none' } },
    { id: 'term-mark', kind: 'term', term: 'mark', h: 'A word you will need', link: 'The next cards use a word, so it comes first.', case: 'c-term', plain: 'The late part is the part that settles it.' },
    { id: 'meet-a', kind: 'meet', family: 'a', link: 'Link {a:D1.a}.', case: 'c-a1', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.',
      feature: { step: 'D1', option: 'a' }, name: 'The name is {o:a}.' },
    { id: 'again-a', kind: 'again', family: 'a', link: 'Link.', first: 'c-a1', second: 'c-a2', step: 'D1', instruction: 'Compare.',
      prompt: { kind: 'phrase', answer: 'very alpha' }, shared: 'In both cases the same alpha mark is what decides it.' },
    { id: 'lens', kind: 'lens', h: 'Story and structure', link: 'Link.', body: 'What stays and what changes.', fixed: ['the question {q:D1}'], varies: ['the people', 'the setting'] },
    { id: 'portrait-a', kind: 'portrait', family: 'a', link: 'Link.', typical: ['typical'], not: 'not', wild: ['wild'], self: 'self', ask: 'Ask?' },
    { id: 'check-a', kind: 'check', after: 'a', case: 'c-a3', ask: { type: 'phrase', step: 'D1', say: 'Tap alpha.', answer: 'alpha at heart' } },
    { id: 'meet-b', kind: 'meet', family: 'b', link: 'Link.', case: 'c-b1', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.',
      feature: { step: 'D1', option: 'b' }, name: 'The name is {o:b}.' },
    { id: 'again-b', kind: 'again', family: 'b', link: 'Link.', first: 'c-b1', second: 'c-b2', step: 'D1', instruction: 'Compare.',
      prompt: { kind: 'phrase', answer: 'quite beta' }, shared: 'In both cases the same beta mark is what decides it.' },
    { id: 'portrait-b', kind: 'portrait', family: 'b', link: 'Link.', typical: ['typical beta'], not: 'not alpha', wild: ['wild'], self: 'self', ask: 'Ask beta?' },
    { id: 'check-b', kind: 'check', after: 'b', case: 'c-b2', ask: { type: 'option', step: 'D1', among: ['a', 'b'] } },
    { id: 'look-ab', kind: 'lookalike', ledger: 'a~b', link: 'Link.', cases: ['l-a', 'l-b'], instruction: 'Compare the two.',
      prompt: { kind: 'which', option: 'D1.b', answer: 'l-b' }, difference: 'Case B shows beta, and Case A shows alpha.' },
    { id: 'meet-c', kind: 'meet', family: 'c', link: 'Link.', case: 'c-c1', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.',
      feature: { step: 'D1', option: 'c' }, name: 'The name is {o:c}.' },
    { id: 'check-c', kind: 'check', after: 'c', case: 'c-c2', ask: { type: 'phrase', step: 'D1', say: 'Tap gamma.', answer: 'gamma again' } },
    { id: 'exc-ab', kind: 'exception', ledger: 'a~b', looksLike: 'a', is: 'b', h: 'It looks alpha and is beta', link: 'Link.', case: 'x-1',
      setup: 'It has what usually means alpha and is beta.', prompt: { kind: 'phrase', answer: 'a beta mark under alpha clothes' }, because: 'The beta mark settles it, whatever clothes the case is wearing.', take: 'Go by the mark.' },
    { id: 'refute-1', kind: 'refute', about: 'a', h: 'A wrong idea about alpha', link: 'Link.', idea: 'Alpha is always loud.', verdict: 'That is wrong.', right: 'Alpha is {a:D1.a}, loud or not.', testedBy: ['d-1'] },
    { id: 'q-d1', kind: 'question', step: 'D1', h: 'The question', link: 'Link.', decides: 'It decides.', how: 'Look.' },
    { id: 'check-d1', kind: 'check', after: 'D1', case: 'c-b2', ask: { type: 'step', step: 'D1' } },
    { id: 'worked-a', kind: 'worked', h: 'Worked', link: 'Link.', case: 'c-w1', steps: [{ step: 'D1', reason: 'Reason {cue:D1}.' }],
      hold: { neighbour: 'b', prompt: { kind: 'reason', choices: [{ id: 'x', text: 'True one.' }, { id: 'y', text: 'True two.', note: 'Not that one.' }], answer: 'x' }, reason: 'Because the alpha part runs through the whole of the case.' },
      impression: { resembles: 'c-a1', text: 'It looks like one you know.' } },
    { id: 'worked-b', kind: 'worked', h: 'Worked, a case that misleads', link: 'Link.', case: 'c-w2', steps: [{ step: 'D1', reason: 'Reason again {cue:D1}.' }],
      hold: { neighbour: 'a', prompt: { kind: 'reason', choices: [{ id: 'x', text: 'True one.', note: 'Not that one.' }, { id: 'y', text: 'True two.' }], answer: 'y' }, reason: 'Because the beta part is what the case is really about.' },
      impression: { resembles: 'c-b1', first: 'c-a1', text: 'It brings back alpha first, and the key goes with the beta part.' } },
    { id: 'recap', kind: 'recap', h: 'Recap', link: 'Link.', carry: ['carry this'] },
    { id: 'transfer', kind: 'transfer', h: 'In your own life', link: 'Link.', ask: 'Name one.', prompts: [{ family: 'a', occasion: 'an alpha occasion' }, { family: 'b', occasion: 'a beta occasion' }, { family: 'c', occasion: 'a gamma occasion' }], places: ['work', 'home'] }
  ]);
  FC.unit(S, 'u1', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Gate' }, subtitle: 'A gate unit',
    teaches: { steps: ['D1'], outcomes: [], terms: ['mark'], families: ['a', 'b', 'c'] }, assumes: [],
    ledger: [{ id: 'a~b', pair: ['a', 'b'], step: 'D1', shared: 'Shared alpha beta.', rule: '{o:a} is not {o:b}.', test: 'Which one is it?' }],
    parts: [
      { id: 'p1', title: 'Alpha', cards: ['orient', 'term-mark', 'meet-a', 'again-a', 'lens', 'portrait-a', 'check-a'] },
      { id: 'p2', title: 'Beta', cards: ['meet-b', 'again-b', 'portrait-b', 'check-b', 'look-ab', 'meet-c', 'check-c', 'exc-ab', 'refute-1'] },
      { id: 'p3', title: 'The question, two whole cases, then the drill', cards: ['q-d1', 'check-d1', 'worked-a', 'worked-b'], drill: true, close: ['recap', 'transfer'] }],
    drill: { key: 'u1', rungs: [
      { ask: 'piece', items: [[{ case: 'd-1', step: 'D1' }, { case: 'd-2', step: 'D1' }], [{ case: 'd-3', step: 'D1' }], ['rev-a'], ['rev-b'], ['rev-c'], [{ tell: 'a~b' }]] },
      { ask: 'route', items: [['d-1', 'd-2'], ['d-3', 'd-4'], ['d-5']] },
      { ask: 'claim', demo: 'cl-1', items: [['cl-2'], ['cl-3']] }],
      returns: ['rt-a1', 'rt-a2', 'rt-a3', 'rt-b1', 'rt-b2', 'rt-b3', 'rt-c1', 'rt-c2', 'rt-c3'] },
    build: { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } }
  });
  return S;
}
