// Scams, Unit Three, part one (last quarter): the third copy, an app that asks you to press Allow for far more than its job needs,
// and its look-alike pair with the real sign-in. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- App permission scam ---------- */
  { id: 'meet-appscam', kind: 'meet', outcome: 'appscam',
    link: 'The first two copies asked for something you type. The third asks for something you press, and needs neither a password nor a code.',
    case: 'ac-shareddoc', mark: 'A1',
    strip: [
      'There is one person, Rafa, and an email that says a colleague has shared a document with him.',
      'He did not ask for it. It came to him, and its link leads to a {t:permission} from his own email provider.',
      'The {t:permission} asks him to press Allow so that an app he has never heard of, Docs Sync Pro, can use his account.',
      'What the app asks to do is far more than opening a document: read, send and delete all his email, and see all his contacts.'
    ],
    explain: [
      'This is not a copy. The {t:permission} comes from Rafa\'s real email provider, with its real name and logo, and it lists real things. What is false is the reason for pressing Allow, a shared document. The scammer registered the app for free and gave it an ordinary name. Once Rafa presses Allow, the app has standing access to his account: it can read his mail, send mail as him and delete it, without ever seeing his password.',
      'A document needs to be opened. It does not need every email Rafa has ever received. The gap between the reason given and what the {t:permission} asks for is the thing to read.'
    ],
    feature: { step: 'A1', option: 'allow' },
    name: [
      'The name for this is {o:appscam}: your permission for an app, given on a {t:permission}, and then used for far more than you were told.'
    ],
    act: [
      'Press Cancel, or close the page. You lose nothing: if it was real, you can start again from your own app. If you have already pressed Allow, remove the app: open your account\'s security settings, find the list of connected apps, and remove anything you do not know. Changing the password does not remove it, because the app never used the password.'
    ] },

  { id: 'check-appscam', kind: 'check', after: 'appscam',
    case: 'ac-fitness',
    ask: { type: 'option', step: 'A1', among: ['password', 'code', 'allow'] } },

  /* ---------- The look-alike pair: the same box, an app you went looking for, or one that came to you ---------- */
  { id: 'look-appscam-realsignin', kind: 'lookalike', ledger: 'appscam~realsignin',
    link: 'The {t:permission} looks the same in a real Allow and in a scam, because it is the same provider\'s. This card puts a pair side by side.',
    cases: ['ac-planner-own', 'ac-mail-doc'],
    instruction: 'Both cases are about Omar and the {t:permission} that his email provider shows when an app asks to connect, and in both the {t:permission} has an Allow button. Compare two things: how Omar came to the app, and what the {t:permission} asks the app to be allowed to do.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-planner-own' },
    difference: [
      'In Case A Omar went looking for a meeting planner himself, in the app list of his own provider. The {t:permission} asks to see his calendar, and nothing else, which is what a planner needs. The answer is {a:A2.fits}, and the case is {o:realsignin}.',
      'In Case B a text from a number he does not know sends him to the same kind of {t:permission}. He did not go looking for anything, and it asks to read, send and delete all his email, which free storage has no use for. The answer is the other one for the same question, and the case is {o:appscam}.',
      'The {t:permission} is real both times, so it cannot tell you which case you are in. What tells you is who started it, and whether what it asks matches what you wanted.'
    ] }
]);
