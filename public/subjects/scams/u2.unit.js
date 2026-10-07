// Scams, Unit Two: the unit record. A BRANCH unit (lesson standard A1 to A11) of an ACTION subject (P26): it teaches the
// part of the key that follows the first question's answer "Install something, open a file, or share your screen", which
// has one question and four names. Each fraud is paired with its real twin, every case stage holds a real case, every
// name says what to do on the spot, and the close has the plan card. Cards live in u2.cards-*.js, cases in u2.cases-*.js.
// Text fields never retype key wording. They use tokens, filled in from key.js:
// {o:id} {plain:id} {needs:id} {q:STEP} {a:STEP.option} {when:STEP.option} {t:id} {means:id} {test:ledgerId} {cue:STEP}.

FC.unit('scams', 'u2', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 5,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author). The app labels a draft as a draft.
  tag: 'Two',
  title: { fromKey: 'D1.device' },     // a branch unit is titled with the gate answer it teaches
  subtitle: 'Three scams and one real thing: how to tell them apart before you press anything',
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
      shared: 'Both put a program on your device, and both show the same box asking whether to allow changes.',
      rule: 'In {o:realinstall} you chose the program and fetched it yourself, from its maker’s own website or your app store, through {t:already}. In {o:malware} the file or the link came to you in a message you did not ask for, and nobody was on the phone with you.',
      test: 'Did you set out to get this program yourself, from its maker’s website or your app store? Or did a file or link arrive in a message?' },
    { id: 'techsupport~refundscam', pair: ['techsupport', 'refundscam'], step: 'I1',
      shared: 'In both, a person on the phone asks to see or control your device, and says it is to put something right.',
      rule: 'In {o:techsupport} the reason is a problem with your device. In {o:refundscam} the reason is money: a refund you are owed, or a bank account that needs attention.',
      test: 'Why does the person want to see your screen: a problem with your device, or money, such as a refund or your bank account?' },
    { id: 'techsupport~realinstall', pair: ['techsupport', 'realinstall'], step: 'I1',
      shared: 'In both, you are on the phone with a helper who asks to see or control your device, and the helper uses the company’s real name.',
      rule: 'In {o:realinstall} you made the call yourself, to a number you already had, such as the one on your bill, and nobody contacted you first. In {o:techsupport} a {t:searchad}, a pop-up, a message or a call out of nowhere put you in touch, and none of those is {t:already}.',
      test: 'Who started this, and where did the number or address come from: something you already had, or a page, a message, a call or a search?' },
    { id: 'techsupport~malware', pair: ['techsupport', 'malware'], step: 'I1', taughtIn: 'q-how',
      shared: 'Both can start with a warning that says something is wrong with your device, and both can end with a harmful program on it.',
      rule: 'In {o:techsupport} a person is involved: you call a number, or someone calls you, and they talk you into installing something or letting them watch. In {o:malware} a file or a link came to you in a message, and nobody is on the phone with you.',
      test: 'Is someone on the phone, or a number to call, who will talk you through it? Or is there only a file or link for you to open?' },
    { id: 'malware~refundscam', pair: ['malware', 'refundscam'], step: 'I1', taughtIn: 'q-how',
      shared: 'In both, you may be sent a file or a link to open, and the story may be about a payment or an account.',
      rule: 'In {o:refundscam} a person is on the phone with you, and the reason is money: a refund you are owed, or a bank account in danger. In {o:malware} nobody is on the phone: the file or the link just arrived in a message.',
      test: 'Is a person with you on the phone or in a chat, talking money: a refund owed to you, or trouble with your bank? Or did the file just arrive?' },
    { id: 'realinstall~refundscam', pair: ['realinstall', 'refundscam'], step: 'I1', taughtIn: 'q-how',
      shared: 'In both, you may end up installing a program or letting a person see your computer, and the company may be one you really use.',
      rule: 'In {o:realinstall} you started it and chose where to get the software, and nobody had contacted you. In {o:refundscam} someone contacted you, with money as the reason, and the program or the view of your computer was their request.',
      test: 'Who started this: did you set out to get it yourself, or did someone contact you first and ask you to do it?' }
  ],

  // Parts are stopping points: each ends on a screen that says where the next one starts (A13). The last part holds the
  // drill, and its close cards come after the drill. The parts follow what a learner notices first: nobody on the line
  // (software you fetched, a file you were sent), then someone on the line.
  parts: [
    { id: 'p1', title: 'Software you chose, and a file that was sent to you',
      cards: ['orient', 'meet-realinstall', 'check-realinstall', 'meet-malware', 'check-malware', 'look-malware-realinstall'] },
    { id: 'p2', title: 'Someone who offers to fix something, or to pay you back',
      cards: ['term-searchad', 'meet-techsupport', 'check-techsupport', 'exc-searched', 'exc-helpdesk',
              'meet-refundscam', 'check-refundscam', 'look-techsupport-refundscam', 'exc-both-ways'] },
    { id: 'p3', title: 'The question, one whole story, then the drill',
      cards: ['q-how', 'check-how', 'worked-form'], drill: true, close: ['recap', 'plan'] }
  ],

  // The drill: the stages that carry the skill. The app owns the wording of every stage instruction.
  // Items are authored in groups: a group is cases that share ledger entries and one tier. The app shuffles the groups
  // inside a tier band (clean, then varied, then misleading) and shuffles inside each group. Every case is new.
  // This is an action subject, so every stage that asks about cases holds a case of the real installation (V37).
  drill: {
    key: 'u2',            // the old quick-drill totals for the device unit were stored under pl:scams:stats:w4 (frozen; see E8)
    add: 'One of the four is the real thing, so not every story here is a scam.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'dv-p-pdf-reader', step: 'I1' }, { case: 'dv-p-cv', step: 'I1' }],
                [{ case: 'dv-p-airline-ad', step: 'I1' }, { case: 'dv-p-council-share', step: 'I1' }],
                [{ tell: 'malware~realinstall' }, { tell: 'techsupport~refundscam' }, { tell: 'techsupport~realinstall' }],
                [{ earlier: 'u1' }]] },
      { ask: 'route',
        items: [['dv-r-notes-app', 'dv-r-attorney'],
                ['dv-r-lockpage', 'dv-r-streaming-refund'],
                ['dv-r-advert-seen', 'dv-r-pdf-ad'],
                [{ earlier: 'u1' }]] }
    ],
    // Fresh cases for later days: two for each name (an action subject, E9). A due name returns as a case the learner has
    // not seen, beside a case of the name they most often take it for.
    returns: ['dv-ret-language-app', 'dv-ret-helpdesk-oven',
              'dv-ret-newsletter', 'dv-ret-delivery-note',
              'dv-ret-hotel', 'dv-ret-satnav',
              'dv-ret-phone-contract', 'dv-ret-safe-account']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    // What changed at each revision (R1). One entry for every revision from 1 to rev.
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the device branch of the rewritten key (docs/rebuild/scams-plan.md). Not yet deployed, so later edits before the first deploy stay revision 1. Four names (the real installation taught first, then the three scams told as they unfold, each with what to do on the spot), one term (search ad), six look-alike pairs, two named exceptions, and a drill that mixes a real installation into every stage.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
      { rev: 3, date: '2026-10-05', change: 'American English: dollars, US institutions and payments, US spelling.' },
      { rev: 4, date: '2026-10-05', change: 'Trimmed to a quick lesson: one case per name, the essentials, a short drill.' },
      { rev: 5, date: '2026-10-07', change: 'Rewritten in plain, concrete words: the payoff up front, a story before each idea, how to spot each one as numbered steps.' }
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
    wrongIdeas: [],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-lessons.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
