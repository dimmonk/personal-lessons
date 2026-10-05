// Scams, Unit Four: the unit record. A BRANCH unit (lesson standard A1 to A14): the key's two questions about money and the nine names
// they lead to. It is the largest unit of the subject because the second question can only be taught with every name it separates (V16),
// and it is kept readable by parts. An ACTION subject (P26): the real request is met first, every case stage holds a real request, every
// portrait says what to do on the spot, every name has four return cases, and the unit closes with a plan card. Cards live in
// u4.cards-*.js, cases in u4.cases-*.js. Text fields never retype key wording: they use tokens ({o:} {a:} {q:} {t:} {test:} {cue:}).

FC.unit('scams', 'u4', {
  kind: 'C',              // C classification, F facts, P procedure
  rev: 2,                 // unit revision, shown in the app; goes up whenever the unit's content changes after its first deploy
  standard: 1,            // lesson-standard version this unit was built to
  status: 'draft',        // 'live' only after the cold read in build.signoff (a person, not the author)
  tag: 'Four',
  title: { fromKey: 'D1.money' },        // a branch unit is titled with the gate answer it teaches
  subtitle: 'Nine names for a request for money: eight kinds of scam, and the real request that they copy',
  teaches: { steps: ['M1', 'M2'], outcomes: ['romance', 'pigbutcher', 'advancefee', 'recovery', 'realpayment', 'invoicefraud', 'fakelink', 'fakeofficial', 'overpayment'], terms: [] },
  assumes: ['u1', 'u2', 'u3'],

  // THE LOOK-ALIKE LEDGER. Fifteen pairs: the nine that the key's answers keep together (V15), the three confused where the key's
  // tie-breaks decide (each has an exception card), the one that a worked case turns on, and two that cross into the branches of earlier
  // units. test has no names in it.
  ledger: [
    { id: 'pigbutcher~romance', pair: ['pigbutcher', 'romance'], step: 'M2',
      shared: 'Both begin with someone you have only ever known through messages, often for weeks or months, and both end in a request for a large sum. The same person often runs one after the other.',
      rule: '{o:romance} asks you to pay for trouble that the person says is their own, such as a hospital bill or a ticket home. {o:pigbutcher} asks you to invest: to put your money into a platform that the person showed you, or to pay a charge to that platform before your money can come out.',
      test: 'Is the money to pay for something that has gone wrong for the person, or is it to be invested in a platform that they pointed me to?' },
    { id: 'advancefee~recovery', pair: ['advancefee', 'recovery'], step: 'M1',
      shared: 'Both are about money that is said to be waiting to be released to you, and both ask for a fee before you can have it.',
      rule: 'In {o:advancefee} the money was never yours: a prize, a grant, a loan or an inheritance. In {o:recovery} the money was yours and was taken from you earlier, and someone offers to get it back.',
      test: 'Is the money that is said to be waiting something that was never mine, or something that I lost earlier?' },
    { id: 'invoicefraud~realpayment', pair: ['invoicefraud', 'realpayment'], step: 'M2',
      shared: 'Both are a bill that you really pay, with the same logo, the same email thread and the same amount.',
      rule: 'In {o:realpayment} the account to pay into is the one that you have always paid, or were given when you started. In {o:invoicefraud} a message tells you that the details have changed, and gives new ones.',
      test: 'Are the bank details the ones I was given at the start, or has a message just told me that they have changed?' },
    { id: 'fakelink~realpayment', pair: ['fakelink', 'realpayment'], step: 'M2',
      shared: 'Both are a small charge on something that you are waiting for or already pay for, from a company that you deal with, and both can lead to a payment page.',
      rule: 'In {o:realpayment} you find the charge yourself, in the company’s own app or on a page that you already use, and pay it there. In {o:fakelink} the charge arrives in a message, and the page to pay on is behind a link in that message.',
      test: 'Did the charge come to me in a message with a link to pay on, or can I find it myself in the company’s own app or on a page that I already use?' },
    { id: 'fakeofficial~realpayment', pair: ['fakeofficial', 'realpayment'], step: 'M2',
      shared: 'Both are about a fine, a tax or a debt that is said to be owed to an official body or to your bank, and both can come with a real-looking reference.',
      rule: 'In {o:realpayment} you are given time and a way to appeal, you can look the amount up yourself, and you are asked to pay in an ordinary way. In {o:fakeofficial} you are told to pay at once, in a way that cannot be undone, and to say nothing.',
      test: 'Am I being hurried and kept quiet, or given time and something that I can look up for myself?' },
    { id: 'overpayment~realpayment', pair: ['overpayment', 'realpayment'], step: 'M2',
      shared: 'Both are part of a deal that you are in, at a price that was agreed, between two people who found each other through an advert or an app.',
      rule: 'In {o:realpayment} the amount is the one that was agreed, and the money moves in the way the deal began. In {o:overpayment} a payment arrives that is more than the price, and you are asked to send some of it back or on.',
      test: 'Is the amount the one that was agreed, or am I being asked to send some of a payment back or on to someone else?' },
    { id: 'invoicefraud~fakelink', pair: ['invoicefraud', 'fakelink'], step: 'M2', taughtIn: 'q-m2',
      shared: 'Both are about a bill or a charge, can arrive as a message, and both end with you paying to a place that the message gives.',
      rule: '{o:invoicefraud} is a bill that you really pay, with new bank details to pay into. {o:fakelink} is a charge, usually a small one, with a payment page behind a link.',
      test: 'Am I asked to pay into a new account that the message names, or to pay on a page that I reach through a link in the message?' },
    { id: 'fakeofficial~fakelink', pair: ['fakeofficial', 'fakelink'], step: 'M2',
      shared: 'Both can come from someone who says that they are an official, with a fine or a debt, a deadline and a threat.',
      rule: 'In {o:fakelink} the request is to pay on a page that you reach through a link in the message, and a hurry or a threat does not change that. In {o:fakeofficial} nothing more specific shows: you are told to pay at once, in a way that cannot be undone, and to tell no one.',
      test: 'Am I told to pay on a page that I reach through a link, or told to pay at once in a way that cannot be undone, with nothing more specific?' },
    { id: 'overpayment~fakelink', pair: ['overpayment', 'fakelink'], step: 'M2', taughtIn: 'q-m2',
      shared: 'Both are about something that you are buying or selling or waiting to have delivered, and both can arrive as a message.',
      rule: 'In {o:overpayment} money has already reached you, and you are asked to send some of it on. In {o:fakelink} no money has reached you, and you are asked to pay on a page that you reach through a link.',
      test: 'Has money reached me first, so that I am asked to send some of it back, or am I asked to pay on a page that I reach through a link?' },
    { id: 'pigbutcher~advancefee', pair: ['pigbutcher', 'advancefee'], step: 'M1',
      shared: 'Both ask for a fee before money reaches you or leaves a site, and both can promise large sums.',
      rule: 'In {o:pigbutcher} the money is in a trading site or app that someone you know only online showed you, and the fee is to take it out. In {o:advancefee} the money is said to be waiting for you from someone who contacted you, and you never put any in.',
      test: 'Did someone I know only online show me a site or an app where my money is, or is the money said to be waiting for me from someone who contacted me?' },
    { id: 'advancefee~fakeofficial', pair: ['advancefee', 'fakeofficial'], step: 'M1',
      shared: 'Both can arrive in the name of an official body, such as a tax office, and both ask you to pay.',
      rule: 'In {o:advancefee} the official owes you something, such as a refund, and you must pay a fee first. In {o:fakeofficial} the official says that you owe, and threatens you unless you pay at once.',
      test: 'Does the message say that money is owed to me and that I must pay first, or that I owe money and will be punished unless I pay?' },
    { id: 'advancefee~fakelink', pair: ['advancefee', 'fakelink'], step: 'M1',
      shared: 'Both ask for a small payment, often on a page, before something reaches you.',
      rule: 'In {o:advancefee} the payment is a fee that comes first, for a prize, a grant or a loan that is said to be waiting. In {o:fakelink} the payment is a charge or a fine on something that you are buying or already pay for.',
      test: 'Is the payment a fee to receive something that is said to be waiting for me, or a charge on something that I am buying or already pay for?' },
    { id: 'overpayment~refundscam', pair: ['overpayment', 'refundscam'], step: 'D1',
      shared: 'In both, too much money is said to have reached you, and you are asked to send the difference back.',
      rule: 'In {o:overpayment} you are selling something, and the buyer asks you to send some of their payment back or on, and nothing is asked of your device. In {o:refundscam} someone says that they refunded you too much, and the first thing that they ask is that you install something or let them watch your phone or computer while you send it back.',
      test: 'Before any money is sent, am I asked to install something or to let someone watch my phone or computer, or only to send the money?' },
    { id: 'fakeofficial~codescam', pair: ['fakeofficial', 'codescam'], step: 'D1',
      shared: 'Both come as a call from someone who says that they are from your bank’s fraud team, and both say that your account is in danger.',
      rule: 'In {o:codescam} the caller asks you to read out or type in a code that has just been sent to you. In {o:fakeofficial} the caller asks you to move or send money, to an account that they give you.',
      test: 'Am I asked to read out or type in a code that has just been sent to me, or to move or send money?' },
    { id: 'fakeofficial~overpayment', pair: ['fakeofficial', 'overpayment'], step: 'M1', taughtIn: 'q-m1',
      shared: 'Both can be hurried, and both can ask you to move money in a way that is hard to undo, and to keep it quiet.',
      rule: 'In {o:overpayment} the money is part of a deal that you are in, and a payment has reached you that is more than the price. In {o:fakeofficial} someone with an official’s power threatens you and says that you owe.',
      test: 'Is the money part of a deal that I am in, with a payment that has reached me, or does someone with an official’s power threaten me unless I pay?' }
  ],

  // Parts follow the answers of the first question (A13): someone known only online; money waiting or lost; then a bill, a fine or a
  // deal, which is the largest and is cut in two. The part with drill: true is the last; its close cards come after the drill.
  parts: [
    { id: 'p1', title: 'Someone you know only online',
      cards: ['orient', 'meet-romance', 'again-romance', 'lens', 'portrait-romance', 'check-romance',
              'meet-pigbutcher', 'again-pigbutcher', 'portrait-pigbutcher', 'check-pigbutcher', 'look-pigbutcher-romance'] },
    { id: 'p2', title: 'Money that is waiting for you, or that you lost',
      cards: ['meet-advancefee', 'again-advancefee', 'portrait-advancefee', 'check-advancefee',
              'meet-recovery', 'again-recovery', 'portrait-recovery', 'check-recovery',
              'look-advancefee-recovery', 'exc-recovery-prize', 'exc-site-fee'] },
    { id: 'p3', title: 'A bill, a fine or a deal: the real request, and two quiet copies',
      cards: ['meet-realpayment', 'again-realpayment', 'portrait-realpayment', 'check-realpayment',
              'meet-invoicefraud', 'again-invoicefraud', 'portrait-invoicefraud', 'check-invoicefraud', 'look-invoicefraud-realpayment',
              'meet-fakelink', 'again-fakelink', 'portrait-fakelink', 'check-fakelink', 'look-fakelink-realpayment', 'exc-link-fee'] },
    { id: 'p4', title: 'A bill, a fine or a deal: a threat, and a buyer who pays too much',
      cards: ['meet-fakeofficial', 'again-fakeofficial', 'portrait-fakeofficial', 'check-fakeofficial', 'look-fakeofficial-realpayment', 'look-fakeofficial-codescam',
              'exc-official-prize', 'exc-rush-link', 'refute-bank',
              'meet-overpayment', 'again-overpayment', 'portrait-overpayment', 'check-overpayment', 'look-overpayment-realpayment', 'look-overpayment-refundscam'] },
    { id: 'p5', title: 'The two questions about money, three whole cases, then the drill',
      cards: ['q-m1', 'check-m1', 'q-m2', 'check-m2', 'worked-invoice', 'worked-cottage', 'worked-sofa'],
      drill: true, close: ['recap', 'transfer', 'plan'] }
  ],

  // The drill is a ramp of five stages (A10). Items are authored in groups of look-alikes of one tier. Every stage that asks about
  // cases holds a real payment request, because an action subject never teaches that every request has a fault (V37).
  drill: {
    key: 'u4',            // the old quick-drill totals for this unit were stored under pl:scams:stats:u2 (frozen; see E8)
    add: 'Some of these requests are real, and some are copies made to take money. That is on purpose. Nothing in the questions says that a request is a scam. They ask what it says the money is for and what it asks you to do with it, and a real request gets a name of its own, so you will need that name as often as the others. When the name is a scam, it also tells you what to do next.',
    rungs: [
      { ask: 'name',
        items: [['d-n-romance', 'd-n-pig'], ['d-n-advance', 'd-n-recovery'], ['d-n-real1', 'd-n-invoice'], ['d-n-link', 'd-n-official', 'd-n-over'], ['d-n-real2', 'd-n-link2']] },
      { ask: 'piece',
        items: [[{ case: 'd-p-romance', step: 'M1' }, { case: 'd-p-recovery', step: 'M1' }, { case: 'd-p-adv', step: 'M1' }],
                [{ case: 'd-p-offi', step: 'M1' }, { case: 'd-p-real', step: 'M1' }],
                [{ case: 'd-p-invoice', step: 'M2' }, { case: 'd-p-realb', step: 'M2' }],
                [{ case: 'd-p-over', step: 'M2' }, { case: 'd-p-link', step: 'M2' }],
                [{ case: 'd-p-pig', step: 'M2' }, { case: 'd-p-rush', step: 'M2' }],
                [{ tell: 'pigbutcher~romance' }, { tell: 'advancefee~recovery' }, { tell: 'invoicefraud~realpayment' }],
                [{ tell: 'fakelink~realpayment' }, { tell: 'fakeofficial~realpayment' }, { tell: 'overpayment~realpayment' }],
                [{ tell: 'fakeofficial~fakelink' }, { tell: 'pigbutcher~advancefee' }],
                [{ separator: 'pigbutcher~romance' }, { separator: 'advancefee~recovery' }, { separator: 'fakelink~realpayment' }],
                ['m-rev-romance', 'm-rev-pigbutcher', 'm-rev-advancefee', 'm-rev-recovery', 'm-rev-invoicefraud', 'm-rev-fakeofficial', 'm-rev-fakelink', 'm-rev-overpayment', 'm-rev-realpayment'],
                [{ earlier: 'u1' }], [{ earlier: 'u1' }]] },
      { ask: 'finish',
        items: [['d-f-romance', 'd-f-pig'], ['d-f-recovery', 'd-f-advance'], ['d-f-real', 'd-f-invoice'], ['d-f-link', 'd-f-over'], ['d-f-official', 'd-f-real2']] },
      { ask: 'route',
        items: [['d-r-romance1', 'd-r-pig1'], ['d-r-adv1', 'd-r-rec1'], ['d-r-real1', 'd-r-inv1'], ['d-r-link1', 'd-r-off1', 'd-r-over1'],
                ['d-r-pig2', 'd-r-romance2'], ['d-r-real2', 'd-r-inv2', 'd-r-link2'], ['d-r-off2', 'd-r-over2', 'd-r-real3'],
                ['d-r-pig3', 'd-r-adv2', 'd-r-rec3'], ['d-r-link3', 'd-r-off3', 'd-r-real4'],
                [{ earlier: 'u1' }], [{ earlier: 'u1' }], [{ earlier: 'u1' }]] },
      { ask: 'claim', demo: 'm-claim-register',
        items: [['m-claim-bank'], ['m-claim-withdrawn'], ['m-claim-supplier'], ['m-claim-allbills'], ['m-claim-nohurry']] }
    ],
    // Fresh cases for later days: four for each name, one for each of its scheduled returns, the last about twelve weeks on (E9).
    // A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
    returns: ['m-ret-romance-1', 'm-ret-romance-2', 'm-ret-romance-3', 'm-ret-romance-4',
              'm-ret-pig-1', 'm-ret-pig-2', 'm-ret-pig-3', 'm-ret-pig-4',
              'm-ret-adv-1', 'm-ret-adv-2', 'm-ret-adv-3', 'm-ret-adv-4',
              'm-ret-rec-1', 'm-ret-rec-2', 'm-ret-rec-3', 'm-ret-rec-4',
              'm-ret-real-1', 'm-ret-real-2', 'm-ret-real-3', 'm-ret-real-4',
              'm-ret-inv-1', 'm-ret-inv-2', 'm-ret-inv-3', 'm-ret-inv-4',
              'm-ret-link-1', 'm-ret-link-2', 'm-ret-link-3', 'm-ret-link-4',
              'm-ret-off-1', 'm-ret-off-2', 'm-ret-off-3', 'm-ret-off-4',
              'm-ret-over-1', 'm-ret-over-2', 'm-ret-over-3', 'm-ret-over-4']
  },

  // Build notes: not shown to the learner, and left out of the fingerprint. The validator reads them.
  build: {
    history: [
      { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the money branch, written to the rewritten key (docs/rebuild/scams-plan.md). Not yet deployed, so later edits before the first deploy stay revision 1. Nine names taught in one unit, in five parts, with the real request met first; thirteen look-alike pairs; the tie-breaks taught as named exceptions; two question cards and three whole cases.' },
      { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
    ],
    // What the K2 rewrite changed in this branch, and why (from docs/rebuild/scams-plan.md, section a).
    keyChanges: [
      { step: 'M1', was: '"What reason is given for paying?" (five answers; prize and lost were one answer)',
        now: '"What does the request say the money is for?" (six answers; prize and lost separate; prize yields to lost, official yields to prize, deal yields to online)',
        why: 'Nothing linked recovery to money "waiting" (audit Unit Two 4). The real request is now kept by three reasons (a bill, a fine or tax, a deal), because real requests come with all three.' },
      { step: 'M2', was: '"What is the odd part of the request?" (eight answers, one name each)',
        now: '"What does it ask you to do with the money?" (eight answers; the fee answer keeps both the advance fee and the recovery scam)',
        why: 'Every old answer kept one name, so the first question did no work (V55). "The odd part" assumed that something was odd, and the real request’s old answer was circular (audit).' },
      { step: 'M2', was: '"Your profits show only on their own app or site, and you cannot take them out"', now: '"Put it into a trading site or app that they showed you"',
        why: 'The old answer could only be given after money had gone in and a withdrawal had failed (audit R8 8). The new one is true from the first deposit; a fee to withdraw is answered by it.' },
      { step: 'M2', was: 'no answer for a payment on a link', now: '"Pay on a page reached from a link in the message", with its name, Fake payment link',
        why: 'The most common scam text of all (a parcel fee, a toll, a fine, a lapsed subscription) had no name. Its real twin is the same charge found in the courier’s own app.' },
      { step: 'M2', was: '"You must pay right now, in a way that cannot be undone"', now: '"Pay at once, in a way that cannot be undone, and tell no one", yielding to five more specific answers',
        why: 'Hurry and secrecy appear in many money scams (audit Unit Two 6), so this answer applies only where nothing more specific shows. The unit teaches the tie-break on named exception cards.' },
      { step: 'M2', was: '"Nothing odd: you started it, nothing changed, and you can check it"', now: '"Pay what you agreed or owe, to details that pass the check"',
        why: 'The real request is described by what it is, in the taught term, and not only by what it is not (audit finding 7).' },
      { outcome: 'invoicefraud', was: 'Changed bank details (invoice fraud)', now: 'Invoice fraud', why: 'The real-life name; the rest are in the list of other names.' },
      { outcome: 'fakeofficial', was: 'Fake official demanding payment', now: 'Fake official scam', why: 'One noun for the scam names that are not real-life words.' },
      { outcome: 'pigbutcher', was: 'Fake investment friend (pig butchering)', now: 'Pig-butchering scam', why: 'The real-life name that a learner meets in news reports, explained in the sentence that gives the name.' },
      { outcome: 'realpayment', was: 'legit_money', now: 'Real payment request, new id and new needs line', why: 'An id without an underscore, and a line that says what the real request is.' }
    ],
    // The wrong idea that the refute card names, and where it comes from (V22). The published basis has not been read and confirmed
    // yet, so it is marked unverified and is listed on the deploy report until it is (E15).
    wrongIdeas: [
      { card: 'refute-bank', about: 'fakeofficial',
        source: { kind: 'app-data', verified: false,
          ref: 'The old Scams course, claim 9 of its Unit Six ("If this were a scam, my bank’s fraud system would have blocked the payment"), kept in public/subjects/scams/standard0.js. The published basis (that a bank’s checks treat a payment that the customer sends as the customer’s own wish, and that such a payment is hard to recall) still has to be read in a bank’s or a payments regulator’s own published fraud guidance and confirmed before release, or the card replaced by what cold readers actually say.' } }
    ],
    signoff: {
      coverage: null,     // { date, by } once tests/validate-data.mjs passes on this unit in the app
      coldRead: null      // { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes }
    }
  }
});
