// Scams, Unit Three, part one (last quarter): the third copy, an app that asks you to press Allow for far more than its job needs,
// and its look-alike pair with the real sign-in. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- App permission scam ---------- */
  { id: 'meet-appscam', kind: 'meet', outcome: 'appscam',
    link: 'The first two copies asked you to type something. This one asks you to press a button, and needs no password and no code.',
    case: 'ac-shareddoc', mark: 'A1',
    explain: [
      'Rafa did not ask for this email. Its link leads to a {t:permission} from his own email provider, with the real name and logo and a list of real things, so nothing here is copied. What is false is the reason for pressing Allow: a shared document. A scammer registered the app, Docs Sync Pro, for free and gave it an ordinary name.',
      'Once Rafa presses Allow, the app can read his mail, send mail as him and delete it, without ever seeing his password. A document only needs to be opened. It does not need every email Rafa has ever received, so the gap between the reason given and what the {t:permission} asks for is what to read.'
    ],
    spot: [
      { do: 'Find what you are asked to press: Allow, on his email provider\'s screen.', why: 'This scam needs a button, not a password.' },
      { do: 'Read what the app may do: read, send and delete all his email, and see all his contacts.', why: 'That list is the real price of pressing Allow.' },
      { do: 'Compare it with the reason given: a shared document, which only needs to be opened.', why: 'A big gap between the two is the scam.' }
    ],
    feature: { step: 'A1', option: 'allow' },
    name: [
      'This is {o:appscam}: you give an app permission on a {t:permission}, and it uses it for far more than you were told.'
    ],
    act: [
      { do: 'Press Cancel, or close the page.', why: 'You lose nothing: if it was real, you can start again from your own app.' },
      { do: 'If you already pressed Allow, open your account\'s security settings and find the list of connected apps.', why: 'The app stays connected until you remove it.' },
      { do: 'Remove every app you do not know.', why: 'Changing the password does not remove it, because the app never used the password.' }
    ] },

  { id: 'check-appscam', kind: 'check', after: 'appscam',
    case: 'ac-fitness',
    ask: { type: 'option', step: 'A1', among: ['password', 'code', 'allow'] } },

  /* ---------- The look-alike pair: the same box, an app you went looking for, or one that came to you ---------- */
  { id: 'look-appscam-realsignin', kind: 'lookalike', ledger: 'appscam~realsignin',
    link: 'The {t:permission} looks the same in a real Allow and in a scam, because it is the same provider\'s.',
    cases: ['ac-planner-own', 'ac-mail-doc'],
    instruction: 'Both stories are about Omar and the {t:permission} that his email provider shows when an app asks to connect, and in both it has an Allow button. Compare two things: how Omar found the app, and what the app asks to be allowed to do.',
    prompt: { kind: 'which', option: 'A2.fits', answer: 'ac-planner-own' },
    difference: [
      'In Story A, Omar went looking for a meeting planner himself, in the app list of his own provider. It asks to see his calendar and nothing else, which is what a planner needs. That is {o:realsignin}.',
      'In Story B, a text from a number he does not know sends him to the same kind of {t:permission}. He did not go looking for anything, and the app asks to read, send and delete all his email, which free storage has no use for. That is {o:appscam}.',
      'The {t:permission} is real both times, so it cannot tell you which story you are in. What tells you is who started it, and whether what it asks matches what you wanted.'
    ] }
]);
