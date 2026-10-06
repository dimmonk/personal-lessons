// Scams, Unit One: cases shown inside cards, part one: the five terms, the first kind (a message that asks nothing),
// and the second kind (a way into an account). This is the subject's GATE UNIT (lesson standard A15): a case carries
// route: { D1: [option] } and no outcome.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case used only by a term card has text and nothing else: no question is asked of it.
// cues.D1 is the exact phrase in the text that decides the first question; segments are the tappable pieces for
// "tap the words" prompts, and note is shown if that piece is tapped in error.
// Every firm, bank and website is invented. Messages are written the way people really receive them.

FC.cases('scams', 'u1', [
  { id: 'g-t-already', use: 'teach', tier: 'clean', setting: 'home', topic: 'a text with a number, and the number on a card', name: 'The number on the card',
    text: "Mina gets a text: 'This is Halbrook Bank. We have stopped a payment on your account. Call (800) 555-0134 now.' She takes her bank card out of her wallet. The number printed on the back of the card is (800) 555-0178. She calls that number instead, and the bank tells her there is nothing wrong with her account." },

  { id: 'g-t-check', use: 'teach', tier: 'clean', setting: 'work', topic: 'an email from the manager that asks for money', name: 'The manager’s email',
    text: "An email arrives that looks as if it is from Tom's manager: 'I am in a meeting and cannot reach the bank. Please wire $2,000 to this account for a supplier today.' Tom does not reply to it and does not wire anything. He calls his manager at the number in the staff directory and asks whether she sent it. She did not." },

  { id: 'g-t-code', use: 'teach', tier: 'clean', setting: 'money', topic: 'a code that arrives when a password is changed', name: 'The code that works once',
    text: "Ana changes the password on her email account. A moment later her phone buzzes: 'Your code is 902 114. It works once, for the next ten minutes.' She types the six numbers into the box on the page, and the page lets her in. If she tried the same numbers an hour later, they would no longer work." },

  { id: 'g-t-permission', use: 'teach', tier: 'clean', setting: 'work', topic: 'an app connected to an email account', name: 'The flight bookings app',
    text: "Leo wants an app called Notewise to pick out his flight bookings from his email. His email provider shows him a box: 'Notewise would like to read your mail and your calendar. Allow or Cancel.' He presses Allow. He has not typed his email password into Notewise." },

  { id: 'g-t-share', use: 'teach', tier: 'clean', setting: 'work', topic: 'a help desk that watches a laptop', name: 'The help desk',
    text: "Jo's laptop will not connect to the office printer. She calls the company help desk at the number printed on her work badge. The helper says: 'Open the meeting app and press Share my screen, so that I can see what you see.' For the next ten minutes he watches her laptop and tells her what to click." },

  { id: 'g-delivery', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a delivery update', name: 'The delivery update',
    text: "A text arrives on Ruth's phone from the bookstore where she ordered a birthday present: 'Hartley Books: your order is out for delivery today. Expected between 1pm and 4pm.' The text says nothing else.",
    route: { D1: ['nothing'] },
    cues: { D1: 'your order is out for delivery today. Expected between 1pm and 4pm' } },

  { id: 'g-closure', use: 'check', tier: 'clean', setting: 'government', topic: 'an office closed for a day',
    text: "Mr. Dunne has lived in his apartment for six years. This week the property management company sends him a letter: 'Our office will be closed on October 27 and 28 for a staff training day. It will open as usual on the 29th.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Our office will be closed on October 27 and 28 for a staff training day. It will open as usual on the 29th' },
    segments: [
      { text: 'Mr. Dunne has lived in his apartment for six years', note: 'That is background about Mr. Dunne. It is not what the letter tells him.' },
      { text: 'the property management company sends him a letter', note: 'That says who the letter is from. The words that show what it does are in what the letter says.' },
      { text: 'Our office will be closed on October 27 and 28 for a staff training day. It will open as usual on the 29th' }
    ],
    reason: { D1: 'The letter only tells Mr. Dunne when the office will be shut and when it will open again: {cue:D1}. It asks him to do nothing, and it gives him no number, link or app of its own.' } },

  { id: 'g-sec-app', use: 'teach', tier: 'clean', setting: 'home', topic: 'a new sign-in notice inside the mail app',
    text: "Priya opens her Hartley Mail app and finds this notice in its own message list: 'A new device signed in to your account at 2:02 p.m. today. If this was you, you do not need to do anything. If it was not, open this app and choose Security.'",
    route: { D1: ['nothing'] },
    cues: { D1: ['If this was you, you do not need to do anything', 'open this app and choose Security'] } },

  { id: 'g-sec-link', use: 'teach', tier: 'clean', setting: 'home', topic: 'a new sign-in notice with a link',
    text: "Priya gets an email that looks the same: 'A new device signed in to your Hartley Mail account at 2:02 p.m. today. If this was not you, sign in here to secure your account: hartleymail-secure.com/signin'",
    route: { D1: ['access'] },
    cues: { D1: 'sign in here to secure your account' } },

  { id: 'g-pension', use: 'teach', tier: 'clean', setting: 'money', topic: 'signing in to a retirement plan account', name: 'The retirement plan sign-in',
    text: "Tariq wants to look at his retirement plan. He types the retirement plan company's web address into his browser himself, and the page says: 'Sign in with your username and password.' He types them in.",
    route: { D1: ['access'] },
    cues: { D1: 'Sign in with your username and password' } },

  { id: 'g-diary-app', use: 'check', tier: 'clean', setting: 'work', topic: 'a calendar app asking to be allowed',
    text: "Kira is setting up a calendar app that her team uses. Her email account shows a box: 'Teamcal would like to see your calendar. Allow / Cancel.'",
    route: { D1: ['access'] },
    cues: { D1: 'Teamcal would like to see your calendar. Allow / Cancel' },
    reason: { D1: 'The box asks Kira to press Allow so that an app can use one of her accounts: {cue:D1}. That is a request for a way into an account, and it is a request, so the case is not one that only tells her something.' } }
]);
