// Scams, Unit Three: the unit record. A BRANCH unit: it teaches the access branch of the key, the two questions that follow the first
// question's answer "Sign in, give a code, or allow an app", and the four names those questions lead to: three scams and the real
// sign-in that they copy. Cards live in u3.cards-*.js, cases in u3.cases-*.js.
// This is an ACTION subject (P26): the real sign-in is met first, every meet card says what to do on the spot (`act`), there are two
// return cases per name, and the unit closes with a plan card.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId}.

FC.unit('scams', 'u3', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 4,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Three',
  title: { fromKey: 'D1.access' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Three scams that ask you for a way into an account, the real thing they copy, and the two questions that tell them apart',
  teaches: { steps: ['A1', 'A2'], outcomes: ['realsignin', 'phishing', 'codescam', 'appscam'], terms: [] },
  assumes: ['u1', 'u2'],  // everything these units teach may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse: the three scams against the real sign-in they copy
  // (separated by the second question), and the three scams against one another (separated by the first).
  // Each entry is written once and used six ways: the look-alike card ("how to tell them apart"), its side-by-side table, the list on
  // the question card, the feedback when one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'phishing~realsignin', pair: ['phishing', 'realsignin'], step: 'A2',
      shared: 'Both can arrive as the same sign-in page, with the same logo, for the same account, asking for a password.',
      rule: 'In {o:realsignin} you began it yourself, using an app, an address or a number that you had before, and it asks no more than the task needs. In {o:phishing} it came to you in a message you did not ask for, and the page it leads to asks for a password.',
      test: 'Did I start this myself, from an app, an address or a number I already had? Or did a message, a call or a pop-up bring me to the page?' },
    { id: 'codescam~realsignin', pair: ['codescam', 'realsignin'], step: 'A2',
      shared: 'Both involve a code that a real company has sent to your phone, in the same list of texts, for the same account.',
      rule: 'In {o:realsignin} the code arrives because of something you started, and you type it into the page or the app that you opened. In {o:codescam} someone who contacted you asks you to read the code out or send it on.',
      test: 'Who is going to see this code: only the page or the app I opened myself, or a person who contacted me?' },
    { id: 'appscam~realsignin', pair: ['appscam', 'realsignin'], step: 'A2',
      shared: 'Both are the same {t:permission} from the same provider, with the same Allow button, for an app with an ordinary name.',
      rule: 'In {o:realsignin} you went looking for the app yourself, and the list in the {t:permission} asks only for what the app\'s job needs. In {o:appscam} the app came to you in a message, or its list asks for far more than its job.',
      test: 'Did I go looking for this app myself, and does the list in the {t:permission} ask only for what I want the app to do?' },
    { id: 'phishing~codescam', pair: ['phishing', 'codescam'], step: 'A1',
      shared: 'Both begin with a message or a call that you did not ask for, with a reason to hurry, and a case can ask for both a password and a code.',
      rule: 'In {o:phishing} what you are asked for is a password, typed into a page that a link took you to. In {o:codescam} it is a code that has just come to your phone, and a person who contacted you asks you to read it out or send it on.',
      test: 'Am I being asked to type a password into a page, or to pass on a code that has just come to my phone?' },
    { id: 'phishing~appscam', pair: ['phishing', 'appscam'], step: 'A1', taughtIn: 'q-A1',
      shared: 'Both begin with a message that sends you to something that wants your account, with a reason such as a document or an offer.',
      rule: 'In {o:phishing} what you are asked to type is a password, into a copied page. In {o:appscam} what you are asked to press is Allow, on a real {t:permission} from your provider, for an app, and no password is typed.',
      test: 'Is there a field for a password that I would type into, or a {t:permission} with an Allow button and a list of what an app may do?' },
    { id: 'codescam~appscam', pair: ['codescam', 'appscam'], step: 'A1', taughtIn: 'q-A1',
      shared: 'Both use something real: a real code in the one, a real {t:permission} from your provider in the other, and nothing is copied.',
      rule: 'In {o:codescam} a person who reached you first wants a number read out or sent on. In {o:appscam} what is asked is that you press Allow on a {t:permission}, for an app.',
      test: 'Is someone asking me to say or send a number, or is a {t:permission} asking me to press Allow?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts. They follow the first question's answers
  // (a password, a code, an Allow), with the real sign-in first. The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'The thing you do every day, and the three scams that copy it',
      cards: ['orient', 'meet-realsignin', 'check-realsignin',
              'meet-phishing', 'check-phishing', 'look-phishing-realsignin',
              'meet-codescam', 'check-codescam', 'look-codescam-realsignin', 'exc-both',
              'meet-appscam', 'check-appscam', 'look-appscam-realsignin'] },
    { id: 'p2', title: 'The two questions, one whole case, then the drill',
      cards: ['q-A1', 'check-A1', 'q-A2', 'check-A2', 'worked-cv'], drill: true, close: ['recap', 'plan-access'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups inside a tier
  // band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  drill: {
    key: 'u3',            // the old quick-drill totals for this unit were stored under pl:scams:stats:u3 (frozen; see E8)
    add: 'Some of these requests are real and some are copies, on purpose. The real thing comes up as often as the three scams. In every case, put your finger on what you are asked to type or press, and on whether the person started it.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'dp-a1-pw', step: 'A1' }, { case: 'dp-a1-code', step: 'A1' }, { case: 'dp-a1-allow', step: 'A1' }],
                [{ case: 'dp-a2-fits', step: 'A2' }, { case: 'dp-a2-nofit1', step: 'A2' }, { case: 'dp-a2-nofit2', step: 'A2' }],
                [{ tell: 'phishing~realsignin' }, { tell: 'codescam~realsignin' }, { tell: 'appscam~realsignin' }]] },
      { ask: 'route',
        items: [['dr-ph-portal', 'dr-real-roster', 'dr-cd-courier', 'dr-ap-prize'],
                ['dr-real-mis', 'dr-ph-mis', 'dr-cd-mis', 'dr-ap-mis'],
                [{ earlier: 'u1' }, { earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name, one for each of its scheduled returns, the last about twelve weeks on (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['ret-rs-train', 'ret-rs-badge', 'ret-ph-airline', 'ret-ph-thread',
              'ret-cs-broadband', 'ret-cs-friend', 'ret-ap-poll', 'ret-ap-album']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the access branch of the rewritten key (docs/rebuild/scams-plan.md), taught as a branch unit with two questions. The real sign-in is met first and is in every case stage; three scams (a copied page that asks for a password, someone who asks for a code that has just come to your phone, an app that asks for far more than its job); six look-alike pairs; the tie-break (a password then a code) taught on a named case; every portrait says what to do on the spot. Not yet deployed, so later edits before the first deploy stay revision 1.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US institutions and payments, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' }
    ],
    // What changed in the key for this branch, and why (K2). Old wording is the app's wording before the rebuild
    // (from docs/rebuild/scams-plan.md, section a).
    keyChanges: [
      { step: 'A1', was: '"What would you be handing over?" with four answers, one of them "Nothing", each keeping one name',
        now: '"What does it want you to type in or press?" with three answers (a password, a one-time code, an Allow), each keeping one scam and the real sign-in',
        why: '"Handing over" did not fit a real sign-in, where you type your own password into the real site. "Nothing" has gone because a notice that asks nothing now leaves at the first question. Each answer now keeps a scam and the real twin, so the second question has work to do (K2.2). A copied page that asks for the password and then the code is answered by the password, which is a tie-break in the key and a named case in the unit.' },
      { step: 'A2', was: '"What would a real one never do?" with four answers, each keeping the one name the first question had already left',
        now: '"Does it fit something you started?" with two answers',
        why: 'The old second question repeated the first (K2.2), and one answer did not fit its own specimen. The new one is the one thing that separates every real sign-in, code or Allow from its copy, and it can be asked out loud at the moment. Its "No" answer covers both "it came to you" and "it asks for more than you set out to do", so a free tool that you found yourself and that wants to delete all your mail is still an app permission scam.' },
      { outcome: 'realsignin', was: 'no name for the real sign-in; "Real security notice" was an outcome of this branch',
        now: 'Real sign-in, marked as a case where nothing is wrong, kept by every answer of the first question',
        why: 'The real twin of all three scams: a code you asked for, typed into the site you opened, a password typed into an app you opened, an Allow for an app you went looking for that asks only what it needs. The old real security notice asked nothing, so it moved to the first question’s answer "Nothing: it only tells you something".' },
      { outcome: 'phishing', was: 'Fake login page (phishing)', now: 'Phishing', why: 'Real-life word; the old name goes to "also called".' },
      { outcome: 'codescam', was: 'Code read-out scam', now: 'One-time code scam', why: 'Uses the taught term; "OTP scam" goes to "also called".' },
      { outcome: 'appscam', was: 'App permission trap', now: 'App permission scam', why: 'One noun ("scam") for the scam names that are not real-life words.' }
    ],
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
