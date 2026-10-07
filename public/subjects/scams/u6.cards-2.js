// Scams, Unit Six, part two: the two groups of facts about a way into an account that has already been given away: a
// password typed into a copied page, and a code read out or an app allowed. See u6.cards-1.js for the shape of a group.

FC.cards('scams', 'u6', [

  /* ---------- group two: a password typed into a copied page ---------- */
  { id: 'con-password', kind: 'concept',
    h: 'A password has already been typed in',
    link: 'Next, a password you typed into a page that was not the real one.',
    case: 'late-password',
    plain: [
      'Hana typed her email address and her password into a page that only looked like her provider’s. Whoever runs that page now has both.',
      'She cannot take the password back, so she makes it useless by changing it. She does not use the link in the text: that would be the same trick again. She goes to the real site through {t:already}: an address she types in herself or saved long ago, or an app she installed herself.',
      'Then she changes the same password on every other account that used it, because the scammer will try it there. Hana used hers for her online store and her gym account, so each needs a new one.',
      'Last, she switches on two-step sign-in. It asks for a code or an approval as well as the password, so a stolen password on its own is no longer enough.'
    ] },

  { id: 'facts-password', kind: 'facts',
    h: 'A password typed into the wrong page',
    link: 'Three steps that make a stolen password useless.',
    concept: 'con-password',
    rows: [
      { id: 'pw-where', q: 'Where do you change a password that you typed into a copied sign-in page?', a: 'Change it on the real site, not through the link',
        relates: 'You reach the real site through {t:already}: an address you type in or saved long ago, or an app you installed yourself. A link in a message never counts, even if the page looks right.' },
      { id: 'pw-else', q: 'Where else do you change it?', a: 'Change it on every other account that used it',
        relates: 'The scammer has the password and will try it on your other accounts. Every account that uses the same one needs a new one.' },
      { id: 'pw-twostep', q: 'What do you switch on, so that a password alone is not enough?', a: 'Switch on two-step sign-in',
        relates: 'Two-step sign-in asks for a code or an approval as well as the password, so a stolen password alone gets nobody in. It cannot protect you from a code you read out yourself.' }
    ] },

  { id: 'chk-pw-where', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-where' } },
  { id: 'chk-pw-else', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-else' } },
  { id: 'chk-pw-twostep', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-twostep' } },

  /* ---------- group three: a code read out, or an app allowed ---------- */
  { id: 'con-app', kind: 'concept',
    h: 'A code has been read out, or an app has been allowed',
    link: 'A password is one way into an account. Here are two more: a {t:code} you read out, and an app you pressed Allow for.',
    case: 'late-app',
    plain: [
      'Tessa pressed Allow on a box that asked whether DocView could read, send and delete all her mail. That box was a {t:permission}. She then changed her password at once, and the messages kept coming from her account.',
      'Why did the new password not help? An app you allow never uses a password. It got in because you pressed Allow, and it keeps that access until the permission is taken away. Only removing the app does that, and it works at once. Open your account’s settings, find the list of connected apps, and remove any app you cannot place.',
      'A {t:code} is different: it works once, so what matters is what was done with it. The code came from your bank or the account’s provider, so tell them. Tell them about an app you allowed and do not trust, too. Still change the password: it is part of the same clean-up.'
    ] },

  { id: 'facts-app', kind: 'facts',
    h: 'An app allowed, or a code read out',
    link: 'Three facts: whom to tell, what removes the app, and what a new password does not do.',
    concept: 'con-app',
    rows: [
      { id: 'ap-tell', q: 'Whom do you tell after you have read out a code, or pressed Allow for an app you do not trust?', a: 'Tell your bank or provider',
        relates: 'The code or the box came from them, so they are the ones to tell. A code works once, so what matters is what has already been done with it.' },
      { id: 'ap-remove', q: 'What takes an app’s access to your account away at once?', a: 'Remove the app from your connected apps',
        relates: 'The list is in your account’s settings. Removing the app takes away what gave it access: your pressing Allow.' },
      { id: 'ap-password', q: 'What do you also change, even though it does not take the app’s access away?', a: 'Change the password as well',
        relates: 'Do it anyway, as part of the same clean-up. But the app got in through your Allow on a {t:permission}, not through the password, so a new password does not remove it.' }
    ] },

  { id: 'chk-ap-tell', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-tell' } },
  { id: 'chk-ap-remove', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-remove' } },
  { id: 'chk-ap-password', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-password' } },

  { id: 'look-app', kind: 'lookalike', ledger: 'ap-remove~ap-password',
    h: 'Removing an app, and changing the password',
    link: 'People swap these two, and Tessa’s story shows what the swap costs.',
    facts: ['ap-remove', 'ap-password'],
    instruction: 'Compare what each one takes away: the app’s access, or only the old password.',
    prompt: { kind: 'which', answer: 'ap-remove' },
    difference: [
      'Fact A works on the app: {f:ap-remove}. It takes away what gave the app its access, and it works at once.',
      'Fact B is only part of the job: {f:ap-password}. It changes what you type to sign in, and an allowed app never types it.',
      'That is why Tessa’s new password did not stop the messages. She did B and not A.'
    ] }
]);
