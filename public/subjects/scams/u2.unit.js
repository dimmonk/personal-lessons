// Scams, Unit Two: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the key that follows the first question's answer "Install something, open a file, or share your screen", which
// has one question and four names. Each fraud is paired with its real twin, every case stage holds a real case, every
// portrait says what to do on the spot, and the close has the plan card. Cards live in u2.cards-*.js, cases in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('scams', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 3,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { fromKey: 'D1.device' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Four things a request about your phone or your computer can be, and how to tell which one you are looking at',
  teaches: { steps: ['I1'], outcomes: ['realinstall', 'malware', 'techsupport', 'refundscam'], terms: ['searchad'] },
  assumes: ['u1'],        // everything Unit One teaches may be used; the first card restates the part this unit leans on

  // THE LOOK-ALIKE LEDGER. One entry per pair of names a learner will confuse. This branch has one question and every
  // answer leads to one name, so no answer keeps two names together; all six pairs are ledger entries because each is
  // a pair that a real request puts side by side, and the question separates every one of them. Each entry is written
  // once and used six ways: the look-alike card, its side-by-side table, the list on the question card, the feedback when
  // one is picked for the other, the grouping of drill items, and what returns together later.
  // test is a question to put to a case, with no names in it.
  ledger: [
    { id: 'malware~realinstall', pair: ['malware', 'realinstall'], step: 'I1',
      shared: 'Both put a program on your device, and both end in the same box on the computer asking whether to allow changes.',
      rule: 'In {o:realinstall} you decided to get the software and fetched it yourself, from the maker’s own website or your device’s app store, through {t:already}. In {o:malware} the file or the link came to you in a message that you did not ask for, and nobody was on a call with you.',
      test: 'Before this file or link reached you, did you set out to get this software yourself, from the maker’s own website or your app store? Or did it arrive in a message?' },
    { id: 'techsupport~refundscam', pair: ['techsupport', 'refundscam'], step: 'I1',
      shared: 'In both, a person you have reached by phone asks to see or control your device, and says that it is to put something right.',
      rule: 'In {o:techsupport} the reason given for the request is a problem with your device. In {o:refundscam} the reason given is money: a refund that you are owed, or a bank account that needs attention.',
      test: 'What reason does the person give for wanting to see or control the device: a problem with the device itself, or money, whether a refund or a bank account?' },
    { id: 'techsupport~realinstall', pair: ['techsupport', 'realinstall'], step: 'I1',
      shared: 'In both, you are on the phone with a helper who asks to see or control your device, and in both the company’s real name is used.',
      rule: 'In {o:realinstall} you started the call yourself, at a number that you already had, such as the one on your bill or contract, and nobody contacted you first. In {o:techsupport} someone contacted you first, or what put you in touch was a {t:searchad}, a pop-up or a message, and none of those is {t:already}.',
      test: 'Who started it, and where did the number or the address come from: from something that you already had, or from a page, a message, a call or the results of a search?' },
    { id: 'techsupport~malware', pair: ['techsupport', 'malware'], step: 'I1', taughtIn: 'q-how',
      shared: 'Both can start with a warning that says something is wrong with your device, and both can end with a program on it.',
      rule: 'In {o:techsupport} a person is involved: you call a number, or someone calls you, and they ask you to install something or to let them watch. In {o:malware} a file or a link has come to you in a message, and nobody is on a call with you.',
      test: 'Is there a person on a call, or a number to call, who will talk you through it? Or is there only a file or a link for you to open yourself?' },
    { id: 'malware~refundscam', pair: ['malware', 'refundscam'], step: 'I1', taughtIn: 'q-how',
      shared: 'In both, you may be sent a file or a link to open, and in both the story can be about a payment or an account.',
      rule: 'In {o:refundscam} a person is on a call with you, and gives money as the reason: a refund owed to you, or a danger to your bank account. In {o:malware} nobody is on a call with you: the file or the link just arrived in a message.',
      test: 'Is someone on a call or in a chat with you right now, asking you to open it and talking about a refund or a bank account? Or did it simply arrive?' },
    { id: 'realinstall~refundscam', pair: ['realinstall', 'refundscam'], step: 'I1', taughtIn: 'q-how',
      shared: 'In both, you may end up installing a program or letting a person see your computer, and in both you may be dealing with a company that you really use.',
      rule: 'In {o:realinstall} you started it and chose where to get the software, and nobody had contacted you. In {o:refundscam} somebody contacted you about a refund or your bank account, and the program or the view of your computer was theirs to ask for.',
      test: 'Who started it: did you set out to get it, or did someone contact you and ask?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The last part holds the
  // drill, and its close cards come after the drill. The parts follow what a learner notices first: nobody on the line
  // (software you fetched, a file you were sent), then someone on the line.
  parts: [
    { id: 'p1', title: 'Software you fetched, and a file that was sent to you',
      cards: ['orient', 'meet-realinstall', 'again-realinstall', 'lens', 'portrait-realinstall', 'check-realinstall',
              'meet-malware', 'again-malware', 'portrait-malware', 'check-malware', 'look-malware-realinstall'] },
    { id: 'p2', title: 'Someone on the line who offers to fix something, or to pay you back',
      cards: ['term-searchad', 'meet-techsupport', 'again-techsupport', 'portrait-techsupport', 'check-techsupport',
              'refute-closing', 'exc-searched', 'exc-helpdesk',
              'meet-refundscam', 'again-refundscam', 'portrait-refundscam', 'check-refundscam',
              'look-techsupport-refundscam', 'exc-both-ways'] },
    { id: 'p3', title: 'The question, two whole cases, then the drill',
      cards: ['q-how', 'check-how', 'worked-wage', 'worked-form'], drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of five stages (lesson standard A10). The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // This is an action subject, so every stage that asks about cases holds a case of the real installation (V37).
  drill: {
    key: 'u2',            // the old quick-drill totals for the device unit were stored under pl:scams:stats:w4 (frozen; see E8)
    add: 'Real installations are mixed in on purpose. One of the four names is for the real thing, and you will need it as often as the other three. A scam is much easier to spot when you know what the real thing looks like, and you will be asked to tell them apart without being told which is which.',
    rungs: [
      { ask: 'name',
        items: [['dv-n-recycling-app', 'dv-n-voicemail'],
                ['dv-n-phone-hacked', 'dv-n-outage-refund'],
                ['dv-n-quote-file', 'dv-n-password-manager'],
                ['dv-n-flight-refund', 'dv-n-clinic-popup']] },
      { ask: 'piece',
        items: [[{ case: 'dv-p-pdf-reader', step: 'I1' }, { case: 'dv-p-cv', step: 'I1' }],
                [{ case: 'dv-p-airline-ad', step: 'I1' }, { case: 'dv-p-council-share', step: 'I1' }],
                [{ case: 'dv-p-helpdesk', step: 'I1' }, { case: 'dv-p-friend-video', step: 'I1' }],
                [{ case: 'dv-p-accounts-email', step: 'I1' }, { case: 'dv-p-fridge-refund', step: 'I1' }],
                [{ tell: 'malware~realinstall' }, { tell: 'techsupport~refundscam' }, { tell: 'techsupport~realinstall' }],
                ['dv-rev-realinstall', 'dv-rev-malware', 'dv-rev-techsupport', 'dv-rev-refundscam'],
                [{ earlier: 'u1' }, { earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['dv-f-launcher', 'dv-f-shared-folder'],
                ['dv-f-warranty-email', 'dv-f-crypto-refund']] },
      { ask: 'route',
        items: [['dv-r-notes-app', 'dv-r-attorney'],
                ['dv-r-lockpage', 'dv-r-streaming-refund'],
                ['dv-r-helpdesk-contract', 'dv-r-bank-text'],
                ['dv-r-wifi-call', 'dv-r-parcel-refund'],
                ['dv-r-advert-seen', 'dv-r-pdf-ad'],
                ['dv-r-rebate-file', 'dv-r-account-help'],
                [{ earlier: 'u1' }, { earlier: 'u1' }]] },
      { ask: 'claim', demo: 'dv-claim-demo',
        items: [['dv-claim-wontclose'], ['dv-claim-box'], ['dv-claim-everything'], ['dv-claim-refund']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns, the last about twelve weeks
    // on (E9). A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['dv-ret-language-app', 'dv-ret-doorbell', 'dv-ret-update-menu', 'dv-ret-helpdesk-oven',
              'dv-ret-newsletter', 'dv-ret-delivery-note', 'dv-ret-free-film', 'dv-ret-scanned',
              'dv-ret-hotel', 'dv-ret-router-text', 'dv-ret-satnav', 'dv-ret-meter-call',
              'dv-ret-phone-contract', 'dv-ret-insurer', 'dv-ret-safe-account', 'dv-ret-pension']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the device branch of the rewritten key (docs/rebuild/scams-plan.md). Not yet deployed, so later edits before the first deploy stay revision 1. Four names (the real installation taught first, then the three scams told as they unfold, each with what to do on the spot), one term (search ad), six look-alike pairs, two named exceptions, and a drill that mixes a real installation into every stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US institutions and payments, US spelling.' }
    ],
    // What the K2 rewrite changed in this branch, and why (from docs/rebuild/scams-plan.md, section a).
    keyChanges: [
      { step: 'I1', was: 'Two questions. "How did the software or access come up?" (four answers) then "What happens next?" (four answers, one name each)',
        now: 'one question, "How did it come to you?", with four answers, each leading to one name',
        why: 'Every answer of each old question kept one name, so the second added nothing (K2.2, audit Unit Three 4), and "What happens next?" could only be answered after the harm (audit Unit Four 4, 5). The branch says it has one question, in its why, and this unit says so on its orient card and again on its question card.' },
      { step: 'I1', was: '"A warning on your screen told you to call a number"; "Someone asked to see your screen to sort out a payment"; "A file or link arrived in a message"; "You went to the company’s own website yourself"',
        now: '"Someone offering to fix a problem with your device", with a tie-break to the refund answer; "Someone sorting out a refund or your bank account"; "A file or a link in a message, for you to open"; "Your own visit to the company’s website or app store"',
        why: 'The support answer now covers a call, a message or a search ad as well as a pop-up, so a fake helpline found by searching has an answer (the old search-ad card). The refund answer covers the fake bank that wants to watch the device. The file answer says that nobody is on a call. The own-visit answer uses the taught phrase "a way you already had", so a search ad does not count. This unit teaches the tie-break (support yields to refund) on a named exception card.' },
      { outcome: 'techsupport', was: 'Fake virus alert (tech-support scam)', now: 'Tech-support scam', why: 'The real-life name; "fake virus alert" goes to aka.' },
      { outcome: 'malware', was: 'Harmful file (malware)', now: 'Malware', why: 'The real-life word; "harmful file" goes to aka. Brackets are not allowed in a name (V1).' },
      { outcome: 'realinstall', was: 'Real software installation', now: 'Real installation', why: 'Shorter plain words; an id without an underscore (V4).' },
      { outcome: 'refundscam', was: 'Refund scam', now: 'Refund scam (unchanged name)', why: 'Its needs now say that the reason given is a refund or a bank account, which is what separates it from the tech-support scam.' }
    ],
    // The wrong idea the refute card names, and where it comes from (V22). The source has not been read and confirmed
    // online yet, so it is marked unverified and is listed on the deploy report until it is (E15).
    wrongIdeas: [
      { card: 'refute-closing', about: 'techsupport',
        source: { kind: 'published', verified: false,
          ref: 'Microsoft Support, "Protect yourself from tech support scams": pop-up warnings that cannot be closed and give a phone number are web pages made by the scammer, and a real warning from software does not tell you to call a number. To be read and confirmed online before release, or replaced by what cold readers actually say about a warning that will not close.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
