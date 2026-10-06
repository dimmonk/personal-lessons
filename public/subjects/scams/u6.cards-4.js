// Scams, Unit Six, part four: the group of facts about the offer that follows a loss, and the close. A fact unit closes with
// a recap that the app builds from every facts card (lesson standard A12); this subject is an action subject, so a plan card
// follows it (V25). There is no transfer and no worked route in a fact unit, and the unit teaches no question of the key.

FC.cards('scams', 'u6', [

  /* ---------- group seven: the offer that follows a loss ---------- */
  { id: 'con-second', kind: 'concept',
    h: 'Someone offers to get your money back',
    link: 'The six groups so far are about what to do about the first loss. The seventh is about the second thing that often follows it: an offer to put the first right.',
    case: 'late-second',
    plain: [
      'Abe has already lost money once, and has told nobody but his bank. Now a stranger has found him and offers to get it back, for a fee. It reads like help. It is also how people who have lost money are so often contacted again: the people who took the money often come back.',
      'The facts below are what to do with that message, and where real help comes from instead. Real help with a loss comes from your bank and from the FTC, which takes fraud reports at ReportFraud.ftc.gov. They are places that you go to, they do not charge you, and they do not contact you first in order to sell you help. A bank may call you about fraud on your account, and if one does, {t:check} settles it: hang up, and call the number on your card, which is {t:already}.',
      'Abe’s thought, ‘If I pay one more fee, I’ll get it back’, is one that costs people time and money. If you have already paid someone like that, tell your bank, because the same people often return.'
    ] },

  { id: 'facts-second', kind: 'facts',
    h: 'The offer that follows a loss',
    link: 'These are the five facts for the group, with how each fits the idea that real help is something you go to and nobody sells you.',
    concept: 'con-second',
    rows: [
      { id: 'sc-offer', q: 'Someone who contacted you offers to get your lost money back. What do you do?', a: 'Do not reply or pay',
        relates: 'Paying is a second loss, and replying keeps you in touch with the people who are trying to make it. An offer that reaches you before you have asked anyone is a warning in itself.' },
      { id: 'sc-who', q: 'Who is often behind that offer?', a: 'The same people, returning',
        relates: 'The people who took the money often come back. That is why those who have lost money are so often contacted again.' },
      { id: 'sc-real', q: 'Where does real help with a loss come from?', a: 'Your bank and the FTC at ReportFraud.ftc.gov',
        relates: 'They are the real places to get help. You go to them, through {t:already}, and nobody real contacts you first to sell you the help.' },
      { id: 'sc-never', q: 'What do those real places not do?', a: 'Charge you, or contact you first to sell you help',
        relates: 'An offer that asks for a fee, and that came to you, is the opposite of both. That is the quickest way to tell it from the real places.' },
      { id: 'sc-tell', q: 'Whom do you tell if you have already paid such an offer?', a: 'Tell your bank',
        relates: 'The same people often return, so your bank needs to know that you paid them, as well as about the first loss.' }
    ] },

  { id: 'chk-sc-offer', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-offer' } },
  { id: 'chk-sc-who', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-who' } },
  { id: 'chk-sc-real', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-real' } },
  { id: 'chk-sc-never', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-never' } },
  { id: 'chk-sc-tell', kind: 'check', after: 'facts-second', ask: { type: 'fact', row: 'sc-tell' } },

  { id: 'look-second', kind: 'lookalike', ledger: 'sc-real~sc-tell',
    h: 'Where help comes from, and whom you tell about a payment',
    link: 'Two of the five facts both name your bank. One is about where real help comes from, and the other about whom you tell after paying, so they get swapped.',
    facts: ['sc-real', 'sc-tell'],
    instruction: 'Compare what each question asks: where to get help with a loss, or whom to tell about a payment you have already made.',
    prompt: { kind: 'which', answer: 'sc-real' },
    difference: [
      'Fact A is about where help comes from: {f:sc-real}. It names two places, and you go to both.',
      'Fact B is about a payment you have already made to an offer: {f:sc-tell}. It names one place, because it is your bank that needs to know that you paid.',
      'The bank is in both answers, and the questions are different. One asks where to go to get help. The other asks whom to tell about a second loss.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-late', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'Each thing that can leave your hands has its own first move: money, a password, a code, an app, a device, papers and numbers. Know which one you are dealing with, and make that move first.',
      'For money, the first hours are the chance. A call that was not needed costs ten minutes, and a call put off can cost the money.',
      'Changing a password and removing an app are two different jobs. A new password does not take away an app that you allowed.',
      'Use only {t:already} for every call and every sign-in after a scam. A number, a link or an app that came with the scam is never one, even if you are the one who dials it or taps it.',
      'Anyone who contacts you offering to get your money back is a warning in itself. Real help comes from your bank and from the FTC (ReportFraud.ftc.gov), and you go to them.',
      'Where a step depends on your bank, such as whether a payment can be recalled, ask your bank.'
    ] },

  { id: 'plan-late', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has given you the facts. This card is for the moment that you will need them, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if this happens, then I will do that. It is worth writing down because the moment you find out that something has gone wrong is the worst moment to work out what to do, and the best moment to do something that you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'I find out that money I sent was a scam payment',
        then: 'call my bank right away at the number on my card, and say that it was a scam payment and ask them to try to recall it, before I do anything else' },
      { cue: 'I typed my password into a page that came in a message',
        then: 'change it on the real site, from a different device if I can, and change it anywhere else I used the same one' },
      { cue: 'I pressed Allow for an app that I do not trust, or read out a code',
        then: 'tell my bank or provider, and remove the app in my account’s connected-apps list' },
      { cue: 'someone had me install something, or watched my device',
        then: 'end the session, switch off the internet connection, and do my passwords and my balance from another device' },
      { cue: 'someone who contacted me offers to get my lost money back',
        then: 'not reply, not pay, and tell my bank if I already have' }
    ] }
]);
