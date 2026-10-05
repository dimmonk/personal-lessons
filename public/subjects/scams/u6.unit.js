// Scams, Unit Six: the unit record. This is the subject's FACT UNIT (lesson standard A12, kind 'F'): facts to hold, grouped
// under the idea each one serves, each asked from memory. It teaches no question of the key and no name; what it holds is
// every row of its facts cards, and nothing lists that twice. The reader is a complete beginner, so every fact follows a case
// and an idea in plain words. Cards live in u6.cards-*.js, the cases the concept cards show in u6.cases-1.js.
// The first real fact unit in the app: until it, a fact unit existed only as a test fixture (tests/fixtures/fact-unit.mjs).
// Text fields never retype key wording: they use tokens ({t:already} {t:check} {t:code} {t:permission} {t:screenshare} {f:row}).

FC.unit('scams', 'u6', {
  kind: 'F',              // C classification, F facts, P procedure
  rev: 1,
  standard: 1,
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Six',
  title: { text: 'If it has already happened' },
  subtitle: 'What to do and whom to tell once something has left your hands',
  teaches: { steps: [], outcomes: [], terms: [] },   // a fact unit teaches no step, no name and no term (A12)
  assumes: ['u1'],        // the five terms of Unit One (a way you already had, the check, one-time code, permission screen, screen-sharing)

  // THE LOOK-ALIKE LEDGER: pairs of facts that people swap, by row id (S3). Each pair is on one facts card, so a wrong choice
  // of one names the other. rule names both answers by {f:}; test is a question to put to yourself, with no name in it.
  ledger: [
    { id: 'mo-number~mo-line', pair: ['mo-number', 'mo-line'],
      shared: 'Both are about making sure that your call really reaches your bank and not the people who tricked you.',
      rule: 'One says which number to dial: {f:mo-number}. The other says what to do first when the scam began with a phone call: {f:mo-line}.',
      test: 'Is this about which number I dial, or about what I do before I dial when the scam began with a call?' },
    { id: 'pw-where~pw-device', pair: ['pw-where', 'pw-device'],
      shared: 'Both are about changing a stolen password safely.',
      rule: 'One says where to change it: {f:pw-where}. The other says what to change it on: {f:pw-device}.',
      test: 'Is this a place on the internet, or the phone or computer in my hand?' },
    { id: 'ap-remove~ap-password', pair: ['ap-remove', 'ap-password'],
      shared: 'Both are things you do to an account after an app was allowed, and both feel like the way to shut the door.',
      rule: 'One takes away what the app was given: {f:ap-remove}. The other changes what a person types, which an allowed app does not type: {f:ap-password}.',
      test: 'Does it take away the app’s access, or does it only change the password?' },
    { id: 'dv-pass~dv-balance', pair: ['dv-pass', 'dv-balance'],
      shared: 'Both are done on a different device, for the same reason: the first one may be watched.',
      rule: 'One changes something: {f:dv-pass}. The other only looks, to find out what is true: {f:dv-balance}.',
      test: 'Am I changing something on the other device, or only looking at what is really there?' },
    { id: 'pp-bank~pp-agency', pair: ['pp-bank', 'pp-agency'],
      shared: 'Both are organisations that you tell about papers and numbers that went to a scammer.',
      rule: 'One tells the organisation you already deal with: {f:pp-bank}. The other asks the company that keeps the record lenders check to put a fraud warning on it: {f:pp-agency}.',
      test: 'Is it the organisation I already deal with, or the company that keeps the record lenders check?' },
    { id: 'sc-real~sc-tell', pair: ['sc-real', 'sc-tell'],
      shared: 'Both answers name your bank.',
      rule: 'One says where real help with a loss comes from: {f:sc-real}. The other says whom to tell about a payment you have already made to an offer: {f:sc-tell}.',
      test: 'Is it asking where to go for help with a loss, or whom to tell about a second payment I have already made?' }
  ],

  // Parts are stopping points (A13). The first group is the money, because it is the loss that moves fastest and is
  // hardest to undo; the last holds the offer that follows a loss, the drill and the close.
  parts: [
    { id: 'p1', title: 'Money that has been sent, and telling the right people',
      cards: ['orient-late', 'con-money', 'facts-money', 'chk-mo-who', 'chk-mo-number', 'chk-mo-line', 'chk-mo-say', 'chk-mo-when', 'look-money',
              'con-report', 'facts-report', 'chk-re-report', 'chk-re-keep', 'chk-re-shame'] },
    { id: 'p2', title: 'A password, a code or an app',
      cards: ['con-password', 'facts-password', 'chk-pw-where', 'chk-pw-device', 'chk-pw-else', 'chk-pw-twostep', 'look-password',
              'con-app', 'facts-app', 'chk-ap-tell', 'chk-ap-remove', 'chk-ap-unplaced', 'chk-ap-password', 'look-app'] },
    { id: 'p3', title: 'A device, and papers or numbers',
      cards: ['con-device', 'facts-device', 'chk-dv-end', 'chk-dv-net', 'chk-dv-uninstall', 'chk-dv-pass', 'chk-dv-balance', 'chk-dv-bank', 'look-device',
              'con-papers', 'facts-papers', 'chk-pp-bank', 'chk-pp-agency', 'chk-pp-watch', 'chk-pp-pwd', 'look-papers'] },
    { id: 'p4', title: 'The offer that follows a loss, then the drill',
      cards: ['con-second', 'facts-second', 'chk-sc-offer', 'chk-sc-who', 'chk-sc-real', 'chk-sc-never', 'chk-sc-tell', 'look-second'],
      drill: true, close: ['recap-late', 'plan-late'] }
  ],

  // A fact unit's drill has one stage, `fact`: every row asked from memory (A12). Items are authored in groups: each ledger pair is
  // one group, so a pair can come back together, and every other row stands alone. Every row appears exactly once (V39).
  drill: {
    key: 'u6',
    rungs: [{ ask: 'fact', items: [
      [{ fact: 'mo-number' }, { fact: 'mo-line' }], [{ fact: 'mo-who' }], [{ fact: 'mo-say' }], [{ fact: 'mo-when' }],
      [{ fact: 're-report' }], [{ fact: 're-keep' }], [{ fact: 're-shame' }],
      [{ fact: 'pw-where' }, { fact: 'pw-device' }], [{ fact: 'pw-else' }], [{ fact: 'pw-twostep' }],
      [{ fact: 'ap-remove' }, { fact: 'ap-password' }], [{ fact: 'ap-tell' }], [{ fact: 'ap-unplaced' }],
      [{ fact: 'dv-pass' }, { fact: 'dv-balance' }], [{ fact: 'dv-end' }], [{ fact: 'dv-net' }], [{ fact: 'dv-uninstall' }], [{ fact: 'dv-bank' }],
      [{ fact: 'pp-bank' }, { fact: 'pp-agency' }], [{ fact: 'pp-watch' }], [{ fact: 'pp-pwd' }],
      [{ fact: 'sc-real' }, { fact: 'sc-tell' }], [{ fact: 'sc-offer' }], [{ fact: 'sc-who' }], [{ fact: 'sc-never' }]
    ] }],
    returns: []           // a fact has no case to vary: it returns as its row, next to the fact it is swapped with (E9)
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the first real fact unit in the app, replacing the old Unit Six card "If it has already happened" and the caveat of the same name. Seven groups of facts under the idea each serves (money sent, reporting it, a password, a code or an app, a device, papers and numbers, the offer that follows a loss), thirty-one facts, six look-alike pairs. Every step to take comes from the old material of standard0.js and nothing is added to it; the reasons given beside the steps are plain-words explanations of why each step helps, and the cards say where a step depends on the country or the bank. Not yet deployed.' }
    ],
    keyChanges: [],
    wrongIdeas: [],       // the old Unit Six beliefs become refute cards and claims in the units that ask the question each one skips (docs/rebuild/scams-plan.md)
    signoff: {
      coverage: null,
      coldRead: null
    }
  }
});
