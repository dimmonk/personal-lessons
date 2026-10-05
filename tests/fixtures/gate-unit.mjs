// A tiny made-up subject with a gate unit (lesson standard A15), registered in the page so the engine can be
// exercised on the one unit shape no real data has yet: families instead of outcomes, a gate question only,
// no name stage. Self-contained: it is sent to the page as source, so it may use only browser globals.
export function registerGateUnit() {
  const S = 'gatetest';
  FC.subject(S, { name: 'Gate test', rev: 1, standard: 1, action: false, blurb: 'x', units: ['u1'], settings: ['work', 'home', 'money'], limits: [],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });
  FC.key(S, {
    outcomes: [], terms: [], avoid: [], branches: {},
    gate: { code: 'D1', unit: 'u1', q: 'What kind of thing is this?', purpose: 'Sorts the alpha sort from the beta sort', why: 'The next questions depend on it.',
      options: [
        { id: 'a', n: 'Alpha thing', plain: 'the alpha sort', needs: 'an alpha mark and a reason', when: 'the case shows alpha', keeps: [], aka: ['the first sort'] },
        { id: 'b', n: 'Beta thing', plain: 'the beta sort', needs: 'a beta mark and a reason', when: 'the case shows beta', keeps: [] },
        { id: 'c', n: 'Gamma thing', plain: 'the gamma sort', needs: 'a gamma mark', when: 'the case shows gamma', keeps: [] }] }
  });
  const teach = (id, family, text, cue, extra) => ({ id, use: 'teach', tier: 'clean', setting: 'work', topic: id, text, route: { D1: [family] },
    cues: { D1: cue }, reason: { D1: 'Look at {cue:D1}.' }, ...extra });
  const seg = (a, b, c) => [{ text: a, note: 'Not that piece.' }, { text: b }, { text: c, note: 'Not that piece.' }];
  FC.cases(S, 'u1', [
    teach('c-a1', 'a', 'Alpha one is plainly alpha here, and that is all.', 'plainly alpha', { name: 'Alpha one' }),
    teach('c-a2', 'a', 'A second alpha story is also very alpha indeed.', 'very alpha', { name: 'Alpha two', setting: 'home', segments: seg('A second alpha story is also', 'very alpha', 'indeed.') }),
    teach('c-b1', 'b', 'Beta one is surely beta in every way.', 'surely beta', { name: 'Beta one' }),
    teach('c-b2', 'b', 'A second beta story, quite beta too.', 'quite beta', { name: 'Beta two', setting: 'home' }),
    teach('c-w1', 'a', 'A whole case that is alpha at heart.', 'alpha at heart', { name: 'Worked alpha' }),
    teach('d-1', 'a', 'Drill: this is alpha through and through.', 'alpha through and through', { use: 'drill' }),
    teach('d-2', 'b', 'Drill: this is beta from top to bottom.', 'beta from top to bottom', { use: 'drill' }),
    { id: 'rev-a', use: 'drill', kind: 'reverse', outcome: 'a', expect: 'hear', options: [{ text: 'Alpha words', voice: 'a' }, { text: 'Beta words', voice: 'b' }], why: 'Alpha sounds so.' },
    { id: 'cl-1', use: 'claim', text: 'A claim about alpha.', ask: { type: 'missing', name: 'a' }, fault: 'It is faulty.', corrected: 'It is put right.' }
  ]);
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Orient', canDo: 'Do it.', everyday: 'Every day.', map: { branch: 'none' } },
    { id: 'meet-a', kind: 'meet', family: 'a', link: 'Link {a:D1.a}.', case: 'c-a1', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.',
      feature: { step: 'D1', option: 'a' }, name: 'The name is {o:a}.' },
    { id: 'again-a', kind: 'again', family: 'a', link: 'Link.', first: 'c-a1', second: 'c-a2', step: 'D1', instruction: 'Compare.',
      prompt: { kind: 'phrase', answer: 'very alpha' }, shared: 'Shared.' },
    { id: 'portrait-a', kind: 'portrait', family: 'a', link: 'Link.', typical: ['typical'], not: 'not', wild: ['wild'], self: 'self', ask: 'Ask?' },
    { id: 'check-a', kind: 'check', after: 'a', case: 'c-a2', ask: { type: 'phrase', step: 'D1', say: 'Tap alpha.', answer: 'very alpha' } },
    { id: 'meet-b', kind: 'meet', family: 'b', link: 'Link.', case: 'c-b1', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.',
      feature: { step: 'D1', option: 'b' }, name: 'The name is {o:b}.' },
    { id: 'q-d1', kind: 'question', step: 'D1', h: 'The question', link: 'Link.', decides: 'It decides.', how: 'Look.' },
    { id: 'check-d1', kind: 'check', after: 'D1', case: 'c-b2', ask: { type: 'step', step: 'D1' } },
    { id: 'worked-a', kind: 'worked', h: 'Worked', link: 'Link.', case: 'c-w1', steps: [{ step: 'D1', reason: 'Reason {cue:D1}.' }],
      hold: { neighbour: 'b', prompt: { kind: 'reason', choices: [{ id: 'x', text: 'True one.' }, { id: 'y', text: 'True two.', note: 'Not that one.' }], answer: 'x' }, reason: 'Because.' },
      impression: { resembles: 'c-a1', text: 'It looks like one you know.' } },
    { id: 'recap', kind: 'recap', h: 'Recap', link: 'Link.', carry: ['carry this'] }
  ]);
  FC.unit(S, 'u1', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Gate' }, subtitle: 'A gate unit',
    teaches: { steps: ['D1'], outcomes: [], terms: [], families: ['a', 'b', 'c'] }, assumes: [],
    ledger: [{ id: 'a~b', pair: ['a', 'b'], step: 'D1', shared: 'Shared alpha beta.', rule: '{o:a} is not {o:b}.', test: 'Which one is it?' }],
    parts: [{ id: 'p1', title: 'The only part', cards: ['orient', 'meet-a', 'again-a', 'portrait-a', 'check-a', 'meet-b', 'q-d1', 'check-d1', 'worked-a'], drill: true, close: ['recap'] }],
    drill: { key: 'u1', rungs: [
      { ask: 'piece', items: [['d-1', 'd-2'], ['rev-a'], [{ tell: 'a~b' }]] },
      { ask: 'route', items: [['d-1', 'd-2']] },
      { ask: 'claim', demo: 'cl-1', items: [['cl-1']] }], returns: [] },
    build: { history: [], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } }
  });
  return S;
}
