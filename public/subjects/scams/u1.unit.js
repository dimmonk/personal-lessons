// Scams, Unit One: the unit record. This is the subject's GATE UNIT (lesson standard A15). It teaches the key's first
// question, "What is it asking you to do right now?", and the five families that question sorts a message into.
// A family's name is its answer text; cards carry `family`, and cases carry route: { D1: [option] } and no outcome.
// This is an ACTION subject (P26): a real family (a message that asks nothing), a real message in every case stage, a
// plan card, four return cases per family, and a baseline. Cards live in u1.cards-*.js, cases in u1.cases-*.js.
// Text fields never retype key wording: they use tokens ({q:D1} {a:D1.option} {needs:option} {t:term} {test:ledgerId}).

FC.unit('scams', 'u1', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'One',
  title: { text: 'What it is asking you to do' },   // a gate unit is titled in plain words; the answers are taught inside it
  subtitle: 'The first question, and the five things a message, a call or an offer can ask of you',
  teaches: { steps: ['D1'], outcomes: [], terms: ['already', 'check', 'code', 'permission', 'screenshare'],
             families: ['device', 'access', 'money', 'details', 'nothing'] },
  assumes: [],            // the first unit of the subject

  // THE LOOK-ALIKE LEDGER: pairs of families. Eight of the ten pairs of the five are here; the two left out (a way into
  // an account beside facts about you, and something on your device beside facts about you) are not ones that a real
  // message makes hard. test is a question to put to a message, with no names in it.
  ledger: [
    { id: 'access~nothing', pair: ['access', 'nothing'], step: 'D1',
      shared: 'Both can arrive as the same message from the same company about the same event, and both can say that something has happened to your account.',
      rule: 'In {a:D1.nothing} the message only tells you what has happened, and anything it suggests uses {t:already}, such as the app that is already on your phone. In {a:D1.access} the message asks you to sign in, give a code or press Allow, and the way to do it comes with the message: a link, a button or a caller.',
      test: 'Does anything in it ask you to sign in, give a code or press Allow, with a link, a button or a caller to do it through? Or does it only tell you what has happened, and leave you to use your own app or number?' },
    { id: 'device~access', pair: ['device', 'access'], step: 'D1',
      shared: 'In both, a box with an app’s name on it asks you to allow something, and the buttons look alike.',
      rule: 'In {a:D1.device} the request is to put something on the phone or computer itself: to install it, to open it, or to let someone watch it. In {a:D1.access} the request is to open one of your accounts: with a password, a code, or an Allow so that an app can use the account.',
      test: 'Would pressing it put something onto my phone or computer, open something on it, or let someone watch it? Or would it open one of my accounts to a page, an app or a caller?' },
    { id: 'money~nothing', pair: ['money', 'nothing'], step: 'D1',
      shared: 'Both can be about the same bill, from the same company, with the same amount in them.',
      rule: 'In {a:D1.nothing} the message tells you about money and asks you to do nothing about it: it will be taken as usual, or it has been paid to you. In {a:D1.money} the message asks you to hand over money, and the way to do it comes with the message.',
      test: 'Is anyone asking me to hand over money? Or is the money only mentioned as something that will happen or has happened?' },
    { id: 'money~details', pair: ['money', 'details'], step: 'D1',
      shared: 'Both can come from the same company about the same problem, with the same address to go to, and both can lead you to type your card number into a page.',
      rule: 'In {a:D1.money} you are asked to pay: an amount is named, and you are told to send it. In {a:D1.details} you are asked to give them facts about yourself, such as your name, your date of birth or your card number, and no amount is named for you to pay.',
      test: 'Is an amount named for me to pay? Or am I only asked to tell them facts about myself, such as my name, my date of birth or my card number?' },
    { id: 'device~money', pair: ['device', 'money'], step: 'D1',
      shared: 'In both, money is part of the story: a refund, a payment, an amount to send.',
      rule: 'In {a:D1.device} the request is to put something on the phone or computer, to open it there, or to let someone watch it. In {a:D1.money} the request is to hand over money.',
      test: 'Am I asked to install, open or share something on my phone or computer, whatever else is asked? Or is paying the only thing asked?' },
    { id: 'access~money', pair: ['access', 'money'], step: 'D1',
      shared: 'In both, the story is about a payment: a fine, a bill, an amount that has to be paid.',
      rule: 'In {a:D1.access} the request is to sign in, give a code or press Allow. In {a:D1.money} the request is to hand over money.',
      test: 'Am I asked to sign in, give a code or press Allow first, whatever the payment is for? Or is paying the only thing asked?' },
    { id: 'details~nothing', pair: ['details', 'nothing'], step: 'D1', taughtIn: 'q-gate',
      shared: 'Both can be friendly, and neither asks for money, a password or a program.',
      rule: 'In {a:D1.nothing} the message only tells you something. In {a:D1.details} it asks you about yourself: on a form, on a call or in a friendly chat.',
      test: 'Is there a question about me in it, such as my name, my date of birth, my work or where I live? Or does it only tell me something?' },
    { id: 'device~nothing', pair: ['device', 'nothing'], step: 'D1', taughtIn: 'q-gate',
      shared: 'Both can be a plain notice from a company you deal with, and both can come with a file or an update.',
      rule: 'In {a:D1.nothing} the message only tells you something, and anything it suggests uses {t:already}. In {a:D1.device} it asks you to install something, to open a file, or to let someone watch your device.',
      test: 'Does it ask me to install, open or share something, perhaps with a file, an update or a number of its own? Or does it only tell me that something will happen?' }
  ],

  // Parts are stopping points. The real thing comes first (the message that asks nothing), then the two kinds that reach
  // into your devices and accounts, then money and facts about you (A13). The last part holds the drill and the close.
  parts: [
    { id: 'p1', title: 'A message that asks nothing, and two ideas to start from',
      cards: ['orient-gate', 'term-already', 'term-check', 'meet-nothing', 'again-nothing', 'lens-gate', 'portrait-nothing', 'check-nothing'] },
    { id: 'p2', title: 'A way into your accounts, and something on your device',
      cards: ['term-code', 'term-permission', 'meet-access', 'again-access', 'portrait-access', 'check-access', 'look-access-nothing', 'refute-polish',
              'term-screenshare', 'meet-device', 'again-device', 'portrait-device', 'check-device', 'look-device-access'] },
    { id: 'p3', title: 'Money, and facts about you',
      cards: ['meet-money', 'again-money', 'portrait-money', 'check-money', 'look-money-nothing', 'exc-refund', 'exc-fine',
              'meet-details', 'again-details', 'portrait-details', 'check-details', 'look-money-details', 'refute-careful'] },
    { id: 'p4', title: 'The first question, two whole cases, then the drill',
      cards: ['q-gate', 'check-gate', 'worked-leaving', 'worked-statement'], drill: true, close: ['recap-gate', 'transfer-gate', 'plan-gate'] }
  ],

  // A gate unit's drill has three stages (A15): piece, route, claim. Items are authored in groups of look-alikes. The
  // drill and return cases of this unit are the bank that later units draw their { earlier: 'u1' } items from.
  drill: {
    key: 'u1',
    add: 'Some of these messages are real, and some are copies made to take something. That is on purpose, and the question you are practising does not say which is which: it gives the same answer for a real message and for a copy that asks for the same thing. Saying that a message asks nothing is one of the five answers, and you will need it as often as the other four.',
    rungs: [
      { ask: 'piece',
        items: [[{ case: 'g-p-driver', step: 'D1' }, { case: 'g-p-bank-code', step: 'D1' }],
                [{ case: 'g-p-photos', step: 'D1' }, { case: 'g-p-flight', step: 'D1' }],
                [{ case: 'g-p-tickets', step: 'D1' }, { case: 'g-p-passport', step: 'D1' }],
                [{ case: 'g-p-refund', step: 'D1' }, { case: 'g-p-tunebox', step: 'D1' }],
                [{ tell: 'access~nothing' }, { tell: 'device~access' }, { tell: 'money~nothing' }, { tell: 'money~details' }, { tell: 'device~money' }, { tell: 'access~money' }],
                ['g-rev-device', 'g-rev-access', 'g-rev-money', 'g-rev-details', 'g-rev-nothing']] },
      { ask: 'route',
        items: [['g-d-cleanphone', 'g-a-marketplace', 'g-n-library'],
                ['g-m-school', 'g-dt-job', 'g-n-statement'],
                ['g-d-security', 'g-a-reset'],
                ['g-m-giftcard', 'g-dt-survey'],
                ['g-d-bike', 'g-m-cardsale'],
                ['g-a-mail-locked', 'g-n-payslip', 'g-dt-bank-call'],
                ['g-d-notice-file', 'g-a-doc-share'],
                ['g-n-blocked', 'g-m-invest', 'g-dt-chat']] },
      { ask: 'claim', demo: 'g-claim-demo',
        items: [['g-claim-polish'], ['g-claim-polite'], ['g-claim-careful'], ['g-claim-notice']] }
    ],
    // Fresh cases for later days: four for each kind, one for each of its scheduled returns, the last about twelve weeks on (E9).
    // A due kind returns as a case the learner has not seen, beside a case of the kind they most often take it for.
    returns: ['g-ret-popup', 'g-ret-test', 'g-ret-pharmacy', 'g-ret-guard',
              'g-ret-overlay', 'g-ret-rebate', 'g-ret-cousin', 'g-ret-bankpage',
              'g-ret-subs', 'g-ret-newbank', 'g-ret-vet', 'g-ret-hospital',
              'g-ret-clinic', 'g-ret-hr', 'g-ret-lonely', 'g-ret-buspass',
              'g-ret-water', 'g-ret-pool', 'g-ret-pension', 'g-ret-results']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the gate unit, written to the rewritten key (docs/rebuild/scams-plan.md). Not yet deployed, so later edits before the first deploy stay revision 1. Five families, with the real notice that asks nothing taught first; five term cards; eight look-alike pairs; a baseline check of six cases.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in the gate, and why (from docs/rebuild/scams-plan.md, section a).
    keyChanges: [
      { step: 'D1', was: '"What is it asking you to do right now? If nothing, what is it about?"; four answers (money, access, install, info) in any order',
        now: '"What is it asking you to do right now?"; five answers (device, access, money, details, nothing), in the order that wins when a request asks for two',
        why: 'The second half of the old question sent a notice that asks nothing to the family of what it is about, against the unit’s own rule to answer by the ask (audit Unit Seven 4). A message that asks nothing now has its own answer (K2.9). A request that asks for two things now has a tie-break in data (K2.8), and the order of the list is the order of the tie-break. The refund call (a view of the screen, then money back) gets the device answer; a fee page that also takes a card number gets the money answer. Each tie-break is taught on a named case (the refund call and the parking fine).' },
      { step: 'D1', was: '"Put something on your device"; "Give a way into your account"',
        now: '"Install something, open a file, or share your screen"; "Sign in, give a code, or allow an app"',
        why: 'K2.4: an answer is what an observer can point to. These are the three things you would actually be asked to do in each case, and not the abstract "a way into", which the audit found undefined in Unit One. The device answer also covers a warning that gives you someone to ring to fix your device, so that the tech-support pop-up has an answer at the moment it appears.' },
      { step: 'D1', was: '"Send money"; "Give details, or only chat so far"',
        now: '"Pay or send money"; "Tell them about yourself"',
        why: '"Pay" covers a bill or a fee as well as sending. "Or only chat so far" was not something asked: a friendly chat does ask, about your work, home and family. The new answer yields to the three above it.' },
      { step: 'D1', was: 'no answer for a notice that asks nothing (the old "Real security notice" specimen could not be placed)',
        now: '"Nothing: it only tells you something", marked legit, no branch',
        why: 'Real notices (a new sign-in shown in your own app, a delivery update) need somewhere to go (K2.9, P25 requires 5). Its `when` requires that it give no number, link or app of its own, which is exactly what separates it from a copied notice with a button. It is taught first in this unit, so the learner meets the real thing before any scam.' },
      { step: 'D1', was: 'terms: the audit found ten phrasings of the defence and four meanings of "route"; "credential", "one-time code", "app permission" and "screen-share" undefined in Unit One',
        now: 'five term cards: a way you already had, the check, one-time code, permission screen, screen-sharing',
        why: 'One taught phrase for the defence (a number, a link or an app that came with the message never counts, even if you are the one who dials or taps it), and each of the other four words taught before the first card that needs it (K6).' }
    ],
    // The wrong ideas the refute cards name, and where each comes from (V22). Neither source has been read and confirmed
    // online yet, so both are marked unverified and are listed on the deploy report until they are (E15).
    wrongIdeas: [
      { card: 'refute-polish', about: 'D1',
        source: { kind: 'published', verified: false,
          ref: 'Herley (2012), Why do Nigerian scammers say they are from Nigeria?, Workshop on the Economics of Information Security: scammers can afford to look obvious, and the copies that a person trusts are the ones that look right. To be read and confirmed online before release, or replaced by what cold readers actually say about spelling and logos.' } },
      { card: 'refute-careful', about: 'D1',
        source: { kind: 'published', verified: false,
          ref: 'Button, Nicholls, Kerr & Owen (2014), Online frauds: learning from victims why they fall for these scams, Australian & New Zealand Journal of Criminology 47(3): victims describe themselves as careful, and describe the scam as fitting their circumstances at the time. To be read and confirmed online before release.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
