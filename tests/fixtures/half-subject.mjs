// A tiny made-up subject that mixes standards (lesson standard F5, E14): Unit One is rebuilt (standard 1, a draft), Units Two and Three
// are still in their old shape and are registered whole by FC.legacy. It exists so the checks that depend on "which units are rebuilt"
// can be run now on a subject that mixes them: the opening map that draws only the branches whose units are rebuilt, the reference
// that keeps the old units' reference, the old rows and top bars with no revision, the migration of old progress, the old lessons'
// progress line. Registered in the page, never in public/. Self-contained: it is sent to the page as source, so it may use only browser globals.
//
//   key     G1 "What kind of thing is this?" answers x and y.  Branch x: B1 "Is it big or small?" (Unit One), names oa, ob (Unit One).
//           Branch y: B2 "Is it loud or quiet?" (Unit Two, old), names oc, od (Unit Two, old).
//   Unit One teaches G1 and B1, so the map draws branch x and says branch y is still being rewritten.
export function registerHalfSubject() {
  const S = 'half';
  FC.subject(S, { name: 'Half', rev: 1, standard: 1, action: false, blurb: 'A test subject with one rebuilt unit and two old ones.', units: ['u1', 'u2', 'u3'],
    settings: ['work', 'home', 'money'], limits: [{ h: 'It is a half-rebuilt test subject', text: 'Nothing here says anything about the world.' }],
    history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });

  const opt = (id, n, keeps) => ({ id, n, when: `the case says ${n.toLowerCase()}`, keeps });
  const step = (code, unit, q, a, b) => ({ code, unit, q, purpose: `Sorts ${a.id} from ${b.id}.`, why: `${a.n} and ${b.n} need different things.`, options: [a, b] });
  const outcomes = [
    { id: 'oa', group: 'x', unit: 'u1', n: 'Alpha reading', plain: 'big', needs: 'a thing that is big', aka: ['the first one'] },
    { id: 'ob', group: 'x', unit: 'u1', n: 'Beta reading', plain: 'small', needs: 'a thing that is small', aka: [] },
    { id: 'oc', group: 'y', unit: 'u2', n: 'Gamma reading', plain: 'loud', needs: 'a thing that is loud', aka: [] },
    { id: 'od', group: 'y', unit: 'u2', n: 'Delta reading', plain: 'quiet', needs: 'a thing that is quiet', aka: [] }];
  FC.key(S, {
    outcomes, terms: [], avoid: [],
    gate: { code: 'G1', unit: 'u1', q: 'What kind of thing is this?', purpose: 'Sorts kind X from kind Y.', why: 'The next question depends on the kind.',
      options: [opt('x', 'Kind X', ['oa', 'ob']), opt('y', 'Kind Y', ['oc', 'od'])] },
    branches: {
      x: [step('B1', 'u1', 'Is it big or small?', opt('big', 'It is big', ['oa']), opt('small', 'It is small', ['ob']))],
      y: [step('B2', 'u2', 'Is it loud or quiet?', opt('loud', 'It is loud', ['oc']), opt('quiet', 'It is quiet', ['od']))] }
  });

  const OUT = { oa: ['x', 'big'], ob: ['x', 'small'] };
  const make = (id, outcome, use, tier, setting, extra) => {
    const [group, size] = OUT[outcome];
    return { id, use, tier, setting, topic: id, text: `${setting} case ${id}: it was ${size} and that was the whole thing.`, outcome,
      route: { G1: [group], B1: [size] }, cues: { G1: `case ${id}`, B1: `it was ${size}` },
      reason: { G1: 'It is a thing of one kind: {cue:G1}.', B1: 'Look at the size: {cue:B1}.' },
      not: { outcome: outcome === 'oa' ? 'ob' : 'oa', why: 'The other name needs a different size than {cue:B1}.' }, ...extra };
  };
  FC.cases(S, 'u1', ['oa', 'ob'].flatMap(o => [make(`d${o}1`, o, 'drill', 'clean', 'work'), make(`d${o}2`, o, 'drill', 'varied', 'home'),
    make(`r${o}1`, o, 'return', 'clean', 'money'), make(`r${o}2`, o, 'return', 'varied', 'work'), make(`r${o}3`, o, 'return', 'varied', 'home'),
    make(`t${o}`, o, 'teach', 'clean', 'money', { name: `The ${OUT[o][1]} one` })]));
  FC.cards(S, 'u1', [{ id: 'orient-1', kind: 'orient', h: 'Where this unit starts', canDo: 'Say which reading a case has.', everyday: 'Things are big or small.', map: { branch: 'x' } }]);
  FC.unit(S, 'u1', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'Big and small things' }, subtitle: 'A fixture unit',
    teaches: { steps: ['G1', 'B1'], outcomes: ['oa', 'ob'], terms: [] }, assumes: [],
    ledger: [{ id: 'oa~ob', pair: ['oa', 'ob'], step: 'B1', shared: 'Both are of kind X.', rule: '{o:oa} and {o:ob} differ in one answer.', test: 'Which answer does the case give?' }],
    parts: [{ id: 'p1', title: 'Everything', cards: ['orient-1'], drill: true, close: [] }],
    drill: { key: 'u1', rungs: [{ ask: 'piece', items: [[{ case: 'doa1', step: 'B1' }, { case: 'dob1', step: 'B1' }]] }, { ask: 'route', items: [['doa1', 'dob1'], ['doa2', 'dob2']] }],
      returns: ['roa1', 'roa2', 'roa3', 'rob1', 'rob2', 'rob3'] },
    build: { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } } });

  // the old units, in their old shape (standard 0): free-text cards and an old drill
  const old = (id, tag, title, kind) => ({ id, tag, title, cards: [{ h: `${title}: first card`, b: '<p>Old text of the first card.</p>' }, { h: `${title}: second card`, b: '<p>Old text of the second card.</p>' }], drill: { kind } });
  FC.legacy(S, {
    outcomes: outcomes.map(o => ({ id: o.id, n: o.n, group: o.group })), caveats: '<p>The old caveats of the half-rebuilt subject.</p>',
    determination: { gateCode: null, steps: [], stepsByGate: null }, quickDrills: [], errDrill: [{ q: 'An old claim.', w: 'Its old fault.' }], specimens: [],
    course: [old('u2', 'Two', 'Old unit two', 'det'), old('u3', 'Three', 'Old unit three', 'err')]
  });
  return S;
}

// Adds the registered subject to the running page's list of subjects and clears what was cached from the list before.
export function showHalfSubject() {
  SUBJECTS.push(buildSubject('half', SUBJECTS.length));
  INDEX = null;
  render();
}

// Node side: loads the subject into a page that has already booted.
export async function addHalfSubject(page) {
  await page.evaluate(registerHalfSubject);
  await page.evaluate(showHalfSubject);
}
