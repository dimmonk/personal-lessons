// Scams, Unit Six, part four: the group of facts about the offer that follows a loss, and the close. A fact unit closes with
// a recap that the app builds from every facts card (lesson standard A12); this subject is an action subject, so a plan card
// follows it (V25). There is no transfer and no worked route in a fact unit, and the unit teaches no question of the key.

FC.cards('scams', 'u6', [

  /* ---------- group six: the offer that follows a loss ---------- */
  { id: 'con-second', kind: 'concept',
    h: 'Someone offers to get your money back',
    link: 'Last, the second thing that often follows a loss: an offer to put the first one right.',
    case: 'late-second',
    plain: [
      'Abe lost money once and told only his bank. Now a stranger has found him and offers to get it back, for a fee. It reads like help, but it is how people who lost money are so often caught a second time: the people who took the money often come back. If you have already paid someone like that, tell your bank.',
      'Real help comes from your bank and from the FTC, which takes fraud reports at ReportFraud.ftc.gov. You go to them, they do not charge you, and they do not contact you first to sell you help. A bank may call you about fraud on your account. If one does, {t:check} settles it: hang up, and call the number on your card, which is {t:already}.'
    ] },

  { id: 'facts-second', kind: 'facts',
    h: 'The offer that follows a loss',
    link: 'Three facts: what to do with an offer, where real help is, and what real help never does.',
    concept: 'con-second',
    rows: [
      { id: 'sc-offer', q: 'Someone who contacted you offers to get your lost money back. What do you do?', a: 'Do not reply or pay',
        relates: 'Paying is a second loss, and replying keeps you in touch with the people trying to cause it. An offer that reaches you before you have asked anyone is a warning in itself.' },
      { id: 'sc-real', q: 'Where does real help with a loss come from?', a: 'Your bank and the FTC at ReportFraud.ftc.gov',
        relates: 'They are the real places to get help. You go to them, through {t:already}, and nobody real contacts you first to sell you help.' },
      { id: 'sc-never', q: 'What do those real places not do?', a: 'Charge you, or contact you first to sell help',
        relates: 'An offer that asks for a fee and that came to you is the opposite of both. That is the quickest way to tell it from real help.' }
    ] },

  { id: 'chk-sc-offer', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-offer' } },
  { id: 'chk-sc-real', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-real' } },
  { id: 'chk-sc-never', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-never' } },

  /* ---------- the close ---------- */
  { id: 'recap-late', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit. Here they are together, with what to carry away.',
    carry: [
      'Every way something can leave your hands has its own first move: money, a password, a code, an app, a device, papers and numbers. Work out which one it is, and make that move first.',
      'For money, the first hours are the chance. A call you did not need costs ten minutes; a call you put off can cost the money.',
      'Changing a password and removing an app are two different jobs. A new password does not remove an app you allowed.',
      'After a scam, call and sign in only through {t:already}. A number, a link or an app that came with the scam is never one, even if you are the one who dials or taps it.',
      'An offer to get your money back, from someone who contacted you, is a warning in itself. Real help comes from your bank and from the FTC (ReportFraud.ftc.gov), and you go to them.'
    ] },

  { id: 'plan-late', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for the moment you will need the facts. Fill it in or leave it.',
    intro: [
      'A plan is one line: if this happens, I will do that. The moment you find out that something went wrong is the worst time to work out what to do, and the best time to follow what you decided in advance.',
      'The lines below are examples. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'I find out that money I sent was a scam payment',
        then: 'call my bank right away at the number on my card, say it was a scam payment, and ask them to try to recall it, before I do anything else' },
      { cue: 'I typed my password into a page that came in a message',
        then: 'change it on the real site, and change it anywhere else I used the same one' },
      { cue: 'I pressed Allow for an app that I do not trust, or read out a code',
        then: 'tell my bank or provider, and remove the app from my connected apps' },
      { cue: 'someone had me install something, or watched my device',
        then: 'end the session, switch off the internet connection, and change my passwords from another device' },
      { cue: 'someone who contacted me offers to get my lost money back',
        then: 'not reply, not pay, and tell my bank if I already have' }
    ] }
]);
