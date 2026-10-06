// A tiny made-up subject, registered in the page so the screens that need one can be exercised on known data: the full
// determination (E13), the generated reference and key map
// (E14), the plan reminder (E18, the subject is an action subject, so ob and od are the names where nothing was wrong). One gate question, one branch of two questions, two
// units, four names, a few specimens. Self-contained: it is sent to the page as source, so it may use only browser globals.
//
//   units  u1 teaches the gate and "Is it big or small?" and the names oa, ob;  u2 teaches "Is it loud or quiet?" and oc, od
//   routes big/loud = oa, big/quiet = ob, small/loud = oc, small/quiet = od
//   specimens are listed out of order on purpose (misleading first): the screen must put clean first
export function registerMiniSubject() {
  const S = 'mini';
  FC.subject(S, { name: 'Mini', rev: 1, standard: 1, action: true, blurb: 'A test subject with two units and four names.', units: ['u1', 'u2'],
    settings: ['work', 'home', 'money'], limits: [{ h: 'It is a test subject', text: 'Nothing here says anything about the world.' }],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });

  const step = (code, unit, q, a, b) => ({ code, unit, q, purpose: `Sorts ${a.id} from ${b.id}.`, why: `${a.n} and ${b.n} need different things.`, options: [a, b] });
  const opt = (id, n, keeps) => ({ id, n, when: `the case says ${n.toLowerCase()}`, keeps });
  FC.key(S, {
    outcomes: [
      { id: 'oa', group: 'x', unit: 'u1', n: 'Alpha reading', plain: 'big and loud', needs: 'a big thing that is loud', aka: ['the first one'] },
      { id: 'ob', group: 'x', unit: 'u1', n: 'Beta reading', plain: 'big and quiet', needs: 'a big thing that is quiet', aka: [], legit: true },
      { id: 'oc', group: 'x', unit: 'u2', n: 'Gamma reading', plain: 'small and loud', needs: 'a small thing that is loud', aka: [] },
      { id: 'od', group: 'x', unit: 'u2', n: 'Delta reading', plain: 'small and quiet', needs: 'a small thing that is quiet', aka: [], legit: true }],
    terms: [], avoid: [],
    gate: { code: 'G1', unit: 'u1', q: 'What kind of thing is this?', purpose: 'Sorts kind X from kind Y.', why: 'The next questions depend on the kind.',
      options: [{ id: 'x', n: 'Kind X', when: 'the case shows kind X', keeps: ['oa', 'ob', 'oc', 'od'] }, { id: 'y', n: 'Kind Y', when: 'the case shows kind Y', keeps: [] }] },
    branches: { x: [
      step('B1', 'u1', 'Is it big or small?', opt('big', 'It is big', ['oa', 'ob']), opt('small', 'It is small', ['oc', 'od'])),
      step('B2', 'u2', 'Is it loud or quiet?', opt('loud', 'It is loud', ['oa', 'oc']), opt('quiet', 'It is quiet', ['ob', 'od']))] }
  });

  // one case or specimen per name: the words in it are unique to its id, and every question has marked words and a reason
  const OUT = { oa: ['big', 'loud'], ob: ['big', 'quiet'], oc: ['small', 'loud'], od: ['small', 'quiet'] };
  const NEAR = { oa: 'ob', ob: 'oa', oc: 'od', od: 'oc' };
  const make = (id, outcome, use, tier, setting, extra) => {
    const [size, noise] = OUT[outcome];
    return { id, use, tier, setting, topic: id, text: `${setting} case ${id}: it was ${size} and ${noise} all at once, and that was the whole thing.`, outcome,
      route: { G1: ['x'], B1: [size], B2: [noise] }, cues: { G1: `case ${id}`, B1: `it was ${size}`, B2: `${noise} all at once` },
      reason: { G1: 'It is a thing of one kind: {cue:G1}.', B1: 'Look at the size: {cue:B1}.', B2: 'Look at the noise: {cue:B2}.' },
      not: { outcome: NEAR[outcome], why: 'The other name needs a different noise than {cue:B2}, or a different size than {cue:B1}.' }, ...extra };
  };
  const forUnit = (outcomes, taught) => [
    ...outcomes.flatMap(o => [make(`d${o}1`, o, 'drill', 'clean', 'work'), make(`d${o}2`, o, 'drill', 'varied', 'home'),
      make(`r${o}1`, o, 'return', 'clean', 'money'), make(`r${o}2`, o, 'return', 'varied', 'work'), make(`r${o}3`, o, 'return', 'varied', 'home')]),
    ...taught.map(o => make(`t${o}`, o, 'teach', 'clean', 'money', { name: `The ${OUT[o].join(' and ')} one` }))];
  FC.cases(S, 'u1', forUnit(['oa', 'ob'], ['oa']));
  FC.cases(S, 'u2', [...forUnit(['oc', 'od'], ['oc']), make('wc', 'oc', 'teach', 'clean', 'home', { name: 'A whole case' })]);

  const ledger = (id, pair, st) => ({ id, pair, step: st, shared: `Both are ${OUT[pair[0]][0]} or ${OUT[pair[1]][0]}.`, rule: `{o:${pair[0]}} and {o:${pair[1]}} differ in one answer.`, test: 'Which answer does the case give?' });
  const orient = id => ({ id, kind: 'orient', h: 'Where this unit starts', canDo: 'Say which reading a case has.', everyday: 'Things are big or small, loud or quiet.', map: { branch: 'x' } });
  FC.cards(S, 'u1', [orient('orient-1')]);
  FC.cards(S, 'u2', [orient('orient-2'), { id: 'worked-c', kind: 'worked', h: 'A whole case, start to end', link: 'Here is one whole case.', case: 'wc',
    steps: ['G1', 'B1', 'B2'].map(code => ({ step: code, reason: `Reason for ${code}: {cue:${code}}.` })),
    hold: { neighbor: 'od', prompt: { kind: 'reason', choices: [{ id: 'p', text: 'It is loud.' }, { id: 'q', text: 'It is small.', note: 'That is true of both.' }], answer: 'p' }, reason: 'The noise settles it.' },
    impression: { resembles: 'toc', text: 'It looks like a case you know.' } }]);
  const unit = (id, tag, title, steps, outcomes, assumes, ledgerEntries, cards, rungs, returns) => FC.unit(S, id, {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag, title: { text: title }, subtitle: 'A fixture unit', teaches: { steps, outcomes, terms: [] }, assumes,
    ledger: ledgerEntries, parts: [{ id: 'p1', title: 'Everything', cards, drill: true, close: [] }], drill: { key: id, rungs, returns },
    build: { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } } });
  unit('u1', 'One', 'Big things', ['G1', 'B1'], ['oa', 'ob'], [], [ledger('oa~ob', ['oa', 'ob'], 'B2')], ['orient-1'],
    [{ ask: 'piece', items: [[{ case: 'doa1', step: 'B1' }, { case: 'dob1', step: 'B1' }]] }, { ask: 'route', items: [['doa1', 'dob1'], ['doa2', 'dob2']] }],
    ['roa1', 'roa2', 'roa3', 'rob1', 'rob2', 'rob3']);
  unit('u2', 'Two', 'Small things', ['B2'], ['oc', 'od'], ['u1'], [ledger('oc~od', ['oc', 'od'], 'B2'), ledger('oa~oc', ['oa', 'oc'], 'B1')], ['orient-2', 'worked-c'],
    [{ ask: 'piece', items: [[{ case: 'doc1', step: 'B2' }, { case: 'dod1', step: 'B2' }]] }, { ask: 'route', items: [['doc1', 'dod1'], ['doc2', 'dod2']] }],
    ['roc1', 'roc2', 'roc3', 'rod1', 'rod2', 'rod3']);

  const spec = (id, outcome, tier, setting) => { const { use, topic, ...rest } = make(id, outcome, 'x', tier, setting); return { ...rest, id, topic: `${id} topic`, wouldChange: 'A different noise would make it a different name.' }; };
  FC.specimens(S, [spec('sp-d', 'od', 'misleading', 'money'), spec('sp-a', 'oa', 'clean', 'work'), spec('sp-c', 'oc', 'varied', 'home'), spec('sp-b', 'ob', 'clean', 'home')]);
  return S;
}

// Adds the registered subject to the running page's list of subjects and clears what was cached from the list before.
export function showMiniSubject() {
  SUBJECTS.push(buildSubject('mini', SUBJECTS.length));
  INDEX = null;
  render();
}
