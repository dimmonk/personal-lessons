// Scams, Unit Six, part two: the two groups of facts about a way into an account that has already been given away: a
// password typed into a copied page, and a code read out or an app allowed. See u6.cards-1.js for the shape of a group.

FC.cards('scams', 'u6', [

  /* ---------- group three: a password typed into a copied page ---------- */
  { id: 'con-password', kind: 'concept',
    h: 'A password has already been typed in',
    link: 'The first two groups were about money and about reporting. The third is about a way into an account: a password that you typed into a page that was not the real one.',
    case: 'late-password',
    plain: [
      'Hana typed her email address and her password into a page that only looked like her provider’s. Whoever runs that page now has both. The page said ‘Thank you’ and looked finished, but for Hana the problem had only started.',
      'The password cannot be taken back out of their hands. What she can do is make it useless, and that means changing it. How she changes it matters, because the same trick can be played twice. If she followed a link in a message to change it, that would be the same thing again. So she goes to the real site, through {t:already}: an address that she types in herself or saved long ago, or an app that she installed herself.',
      'She does it from a different device, if she can, so that the new password is typed somewhere that nothing from the scam has touched. And she changes the same password wherever else she used it, because the scammer now has it and can try it on her other accounts. Hana used hers for her online shop and for her gym account, so those need a new one each.',
      'Last, she switches on two-step sign-in, which asks for a code or an approval as well as the password. With it, a stolen password on its own is not enough. It does not protect you from a code that you read out yourself.'
    ] },

  { id: 'facts-password', kind: 'facts',
    h: 'A password typed into the wrong page',
    link: 'These are the four facts for the group, with how each fits the idea of making a stolen password useless.',
    concept: 'con-password',
    rows: [
      { id: 'pw-where', q: 'Where do you change a password that you typed into a copied sign-in page?', a: 'Change it on the real site, and not through the link',
        relates: 'You reach the real site through {t:already}: an address that you type in or saved long ago, or an app you installed yourself. A link in a message never counts, even if the page it opens looks right.' },
      { id: 'pw-device', q: 'Which device do you use to change it, if you can?', a: 'Change it from a different device, if you can',
        relates: 'The advice is to use another device if you can, so that the new password is typed somewhere that nothing from the scam has touched.' },
      { id: 'pw-else', q: 'Where else do you change it?', a: 'Change it on every other account that used the same password',
        relates: 'The scammer has the password, and a password that works on one account may work on another. Every account that uses the same one needs a new one.' },
      { id: 'pw-twostep', q: 'What do you switch on, so that a password alone is not enough?', a: 'Switch on two-step sign-in',
        relates: 'Two-step sign-in asks for a code or an approval as well as the password, so a stolen password on its own gets nobody in. It cannot protect you from a code that you read out yourself.' }
    ] },

  { id: 'chk-pw-where', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-where' } },
  { id: 'chk-pw-device', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-device' } },
  { id: 'chk-pw-else', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-else' } },
  { id: 'chk-pw-twostep', kind: 'check', after: 'facts-password', ask: { type: 'fact', row: 'pw-twostep' } },

  { id: 'look-password', kind: 'lookalike', ledger: 'pw-where~pw-device',
    h: 'Where you change it, and what you change it on',
    link: 'Two of the four facts are both about how to change the password safely. One is about the place, the other about the device, and they get swapped.',
    facts: ['pw-where', 'pw-device'],
    instruction: 'Compare what each fact answers: a place on the internet, or a piece of equipment in your hand.',
    prompt: { kind: 'which', answer: 'pw-device' },
    difference: [
      'Fact A is about where you go: {f:pw-where}. It is a place on the internet, reached through {t:already}.',
      'Fact B is about what you hold while you do it: {f:pw-device}. It is the phone or computer you type on.',
      'Both can be true at once. You go to the real site, and you do it from another device if you can.'
    ] },

  /* ---------- group four: a code read out, or an app allowed ---------- */
  { id: 'con-app', kind: 'concept',
    h: 'A code has been read out, or an app has been allowed',
    link: 'A password is one way into an account. The fourth group is about two others: a {t:code} that you read out, and an app that you pressed Allow for.',
    case: 'late-app',
    plain: [
      'Look at what Tessa did, and what it did not do. She pressed Allow on a box that asked whether DocView could read, send and delete all her mail. That box was a {t:permission}. Then she changed her password at once, and the messages went on coming from her account.',
      'That is not a mistake in how she changed it. An app that you allow does not use the password. It was given access by your pressing Allow, so it carries on using that access until the permission is taken away. A new password does not take it away. Only removing the app does, and it works at once.',
      'Removing it is done in your account’s own settings, in a list of the apps that are connected to the account. You may not remember every app that you pressed Allow for, so the list is worth looking through even when you remember one. An app that you cannot place has no reason to be in it, and you remove it.',
      'A {t:code} works once, so it cannot be used a second time. What matters after you have read one out is what was done with it, and the code came from your bank or the provider of the account, so they are the ones to tell. The same goes for an app that you allowed and do not trust: tell your bank or the provider. Changing the password is still worth doing, as part of the same job.'
    ] },

  { id: 'facts-app', kind: 'facts',
    h: 'An app allowed, or a code read out',
    link: 'These are the four facts for the group, with how each fits the idea that an allowed app keeps its access until you take it away.',
    concept: 'con-app',
    rows: [
      { id: 'ap-tell', q: 'Whom do you tell after you have read out a code, or pressed Allow for an app you do not trust?', a: 'Tell your bank or provider',
        relates: 'The code or the box came from them, so they are the ones to tell. The code works once, so what matters now is what has already been done with it.' },
      { id: 'ap-remove', q: 'What takes an app’s access to your account away at once?', a: 'Remove the app in your account’s connected-apps list',
        relates: 'The list is in your account’s settings. Removing the app takes away the thing that gave it access, which was your pressing Allow.' },
      { id: 'ap-unplaced', q: 'Which apps do you remove from that list?', a: 'Remove any app you cannot place',
        relates: 'You may not remember every app you pressed Allow for. One that you cannot place has no reason to be there, so you look through the whole list and not only for the one you remember.' },
      { id: 'ap-password', q: 'What do you also change, even though it does not take the app’s access away?', a: 'Change the password as well',
        relates: 'It is still worth changing, as part of the same job. But the app was given access by your pressing Allow on a {t:permission}, and not by the password, so a new password does not remove it.' }
    ] },

  { id: 'chk-ap-tell', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-tell' } },
  { id: 'chk-ap-remove', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-remove' } },
  { id: 'chk-ap-unplaced', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-unplaced' } },
  { id: 'chk-ap-password', kind: 'check', after: 'facts-app', ask: { type: 'fact', row: 'ap-password' } },

  { id: 'look-app', kind: 'lookalike', ledger: 'ap-remove~ap-password',
    h: 'Removing an app, and changing the password',
    link: 'Two of the four facts are both things you do to an account after an app was allowed. People swap them, and the story of Tessa shows what the swap costs.',
    facts: ['ap-remove', 'ap-password'],
    instruction: 'Compare what each one takes away: the app’s access, or only the old password.',
    prompt: { kind: 'which', answer: 'ap-remove' },
    difference: [
      'Fact A is the one that works on the app: {f:ap-remove}. It takes away what gave the app its access, and it works at once.',
      'Fact B is only a part of the job: {f:ap-password}. It changes what a person types to sign in, and an app that you allowed does not type it.',
      'That is why Tessa’s password change did not stop the messages. She did the second and not the first.'
    ] }
]);
