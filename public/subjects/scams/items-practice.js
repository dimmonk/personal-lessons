// Scams, lesson 3 "Act, check or leave": the worked message and the messages of its two groups. Invented senders and people; every message is in
// the form it arrives in. Half are real. The first group is three pairs that differ in one thing (a code you asked for and one you did not; a parcel
// notice and a fee to release it; a real alert and a fake one), asked one after the other; the second group is eight mixed, with a clock.
(() => {
const L = scamLine;
FC.items("scams", [
  // ----- the worked message: a text that says the card is locked -----
  { ...scamItem({
    id: "w-locked", genuine: "scam", channel: "sms", request: "login",
    context: "You have a Calderwood Bank card, and the Calderwood app is on your phone.",
    message: scamSms("Calderwood Alert", "Text message · 2:14 PM", [L("w1", "Your card has been locked."), L("w2", "Confirm your sign-in now to unlock it.")], "calderwood-secure.example/confirm"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The link in the text",
    say: ["The page looks like the bank’s sign-in and keeps whatever you type. Within the hour money is leaving your account.",
      "The app shows no lock and no alert. Your card is fine, and you spent a minute.",
      "You are safe. But a real lock would wait for you, and the app would have told you in a minute."],
    deciding: ["w2"], reason: "It wants your sign-in, you did not start it, and you already have the Calderwood app. Going in through the app settles it, and nothing the text gave you is needed." }),
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants you to confirm your sign-in through its link, now." },
      { id: "start", does: "Check whether you started it.", working: "You did not. You did nothing with your card today." },
      { id: "way", does: "Find a way you already had.", working: "The Calderwood app is on your phone." },
      { id: "do", does: "Choose.", working: "Check first, in the app. Leave the link alone.", ask: "act" }] },

  // ----- the first group: three pairs, each differing in one thing -----
  scamItem({
    id: "p-code-real", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” on the Marlowe & Finch sign-in page.",
    message: scamSms("Marlowe & Finch", "Text message · 9:02 AM", [L("p1a", "Your sign-in code is 482 917."), L("p1b", "Enter it on the page you are on. It works for ten minutes.")]),
    right: "act", own: "The Marlowe & Finch page I am on", theirs: "The number the text came from",
    say: ["You signed in. The code only works for the sign-in you started, so no one else could use it.",
      "A minute spent on something you started. You were already on the right page.",
      "You are still signed out, and the code runs out in ten minutes."],
    deciding: ["p1b"], reason: "You asked for this code a moment ago, on the page you are on. Using it there is exactly what it is for." }),
  scamItem({
    id: "p-code-fake", genuine: "scam", channel: "sms", request: "login",
    context: "A code just arrived on your phone. You did not request one.",
    message: scamSms("Unknown number", "Text message · 9:04 AM", [L("p2a", "Hi, I sent you a code by mistake."), L("p2b", "Can you read it back to me?")]),
    right: "leave", own: "The sign-in page of the account the code is for", theirs: "The number the text came from",
    say: ["They typed your code into your account’s sign-in and were in. You never saw it happen.",
      "Safe, but there is nothing to check. A code belongs to whoever asked for it, and no one needs it read back.",
      "Nothing was shared. If codes keep coming, change that account’s password."],
    deciding: ["p2b"], reason: "A one-time code is only ever for the person who asked for it. No honest sender needs it read back to them." }),
  scamItem({
    id: "p-ship-real", genuine: "genuine", channel: "sms", request: "none",
    context: "You ordered a jacket from Thistlewick Outfitters on Monday.",
    message: scamSms("Thistlewick Outfitters", "Text message · Tuesday 10:05 AM", [L("p3a", "Your jacket is on its way and should arrive Thursday."), L("p3b", "You can follow it any time in your Thistlewick account.")]),
    right: "leave", own: "My Thistlewick account", theirs: "The details in the email",
    say: ["There was nothing to do, so nothing happened.",
      "The account shows the same news the email did. A minute spent.",
      "You did nothing, and the jacket arrived on Thursday."],
    deciding: ["p3b"], reason: "It wants nothing from you. It tells you what you already expect, so there is nothing to act on and nothing to check." }),
  scamItem({
    id: "p-ship-fee", genuine: "scam", channel: "sms", request: "money",
    context: "You ordered a jacket from Thistlewick Outfitters on Monday.",
    message: scamSms("Quillfeather Parcel", "Text message · 3:31 PM", [L("p4a", "Your parcel is held at our depot."), L("p4b", "Pay a $1.99 redelivery fee before Friday or it goes back.")], "quillfeather-redeliver.example/pay"),
    right: "check", own: "My Thistlewick order page", theirs: "The link in the text",
    say: ["The page took your card number, then charged it again and again.",
      "The order page shows the jacket arriving Thursday, with no fee. You spent a minute and kept your money.",
      "You are safe. The jacket was never held, and you can see that on the order page."],
    deciding: ["p4b"], reason: "You are expecting a parcel, which is what makes this believable. A fee to release it is the request, and the shop’s own order page tells you the truth." }),
  scamItem({
    id: "p-alert-real", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Calderwood Bank is your bank. You did not buy anything today.",
    message: scamSms("Calderwood Bank", "Text message · 4:40 PM", [L("p5a", "Fraud alert: a $212.40 charge at Westgate Electronics."), L("p5b", "Was this you? Review it here.")], "calderwood.example/review"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The link in the text",
    say: ["This time the link was real and nothing bad happened. You could not have known that, and next time the same text could be a fake.",
      "The app shows the charge. You confirm it was not you, and the bank freezes the card.",
      "A real charge goes unchecked, and the money keeps leaving."],
    deciding: ["p5b"], reason: "A real alert and a fake one can look the same. The move is the same too: you did not start this, so go in through the app you already have, never through the link." }),
  scamItem({
    id: "p-alert-fake", genuine: "scam", channel: "sms", request: "money",
    context: "Calderwood Bank is your bank. You did not buy anything today.",
    message: scamSms("Calderwood Bank", "Text message · 4:41 PM", [L("p6a", "Fraud alert: a $212.40 charge at Westgate Electronics."), L("p6b", "Was this you? Review it here.")], "calderwood-alerts.example/review"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The link in the text",
    say: ["The page copied the bank’s sign-in and kept your password and codes.",
      "The app shows no such charge. You know it was a fake, and you spent a minute.",
      "You are safe, but you never learned there was no charge. Had it been real, leaving it would have cost money."],
    deciding: ["p6b"], reason: "It looks exactly like the real alert, and the move is the same: you did not start this, so go in through your own app. How it looks never decides it." }),

  // ----- the second group: eight mixed, four real and four scams -----
  scamItem({
    id: "g-invoice-real", genuine: "genuine", channel: "email", request: "money",
    context: "You hired Femi Iwu to tile your bathroom. The quote said: pay by bank transfer when the job is done.",
    message: scamEmail("Iwu Tiling", "Email · Friday", "Invoice for the bathroom", [L("g1a", "Hi, the job is finished."), L("g1b", "The total is $1,860, as quoted."), L("g1c", "Please pay by transfer to the account on your quote by Friday. Thanks, Femi.")]),
    right: "act", own: "The account on my quote", theirs: "The details in the email",
    say: ["You paid $1,860 into the account on the quote, the way you agreed. Femi had no problem.",
      "You called Femi on the number from the quote. He said the job was done. It cost a minute and was not needed: nothing changed from what you agreed.",
      "The bill goes unpaid, and Femi has to chase you."],
    deciding: ["g1c"], reason: "You hired him, the amount is the quote, and the way to pay is the one you already agreed. Paying through that way is right." }),
  scamItem({
    id: "g-invoice-new", genuine: "scam", channel: "email", request: "money",
    context: "You hired Femi Iwu to tile your bathroom. The quote said: pay by bank transfer when the job is done.",
    message: scamEmail("Iwu Tiling", "Email · Friday", "Invoice: new bank details", [L("g2a", "Hi, the job is finished and the total is $1,860."), L("g2b", "Our bank has changed, so please pay the new account below instead of the one on your quote."), L("g2c", "New account: 5521-0087 at Penhallow Credit Union.")]),
    right: "check", own: "Femi’s number from my quote", theirs: "The number or address in the email",
    say: ["The $1,860 went to a stranger’s account. Banks can rarely get it back.",
      "Femi says his bank has not changed. The email was a fake, and you kept $1,860.",
      "You are safe, but Femi is still waiting for his money."],
    deciding: ["g2b"], reason: "New bank details sent in a message are the oldest trick for this. A real change is confirmed on a number you already had." }),
  scamItem({
    id: "g-popup", genuine: "scam", channel: "popup", request: "device",
    context: "You are reading a recipe on a website.",
    message: scamPopup("Security alert", "On a web page", [L("g3a", "Your computer is infected!"), L("g3b", "Do not turn it off. Call Pinecrest Support now.")], "Call 1-555-0142"),
    right: "leave", own: "My own antivirus program, or a shop I know", theirs: "The number on the pop-up",
    say: ["A stranger asked to see your screen, then for payment in gift cards. Your computer was fine before they touched it.",
      "There is nothing to check. A web page cannot know what is on your computer, so leaving it is the whole answer.",
      "You closed the page. Nothing was wrong with your computer."],
    deciding: ["g3b"], reason: "A web page cannot see inside your computer. It shows this to frighten you into calling, and the number belongs to the scammer." }),
  scamItem({
    id: "g-boss", genuine: "scam", channel: "sms", request: "money",
    context: "Priya Raman is your boss at Kestrel Dental. You have her number saved.",
    message: scamSms("Priya R. (new number)", "Text message · 11:20 AM", [L("g4a", "Hi, it’s Priya. I’m in a meeting and can’t talk."), L("g4b", "Please buy four $100 gift cards for a client and send me the codes here.")]),
    right: "check", own: "Priya’s number that I already have", theirs: "A reply to this number",
    say: ["You sent four codes. The gift cards were emptied within minutes, and the money cannot be traced.",
      "Priya says she sent nothing and is at her desk. You kept $400.",
      "You are safe, but if Priya really needed something, she is waiting."],
    deciding: ["g4b"], reason: "A boss who cannot talk, on a new number, wanting money in a hurry, is the shape of this trick. Her real number is the one already in your phone." }),
  scamItem({
    id: "g-receipt", genuine: "genuine", channel: "email", request: "none",
    context: "You pay for Lumenfall, a video service, every month.",
    message: scamEmail("Lumenfall", "Email · October 1", "Your October receipt", [L("g5a", "Thanks for being a member."), L("g5b", "We charged $12.99 to your card on file. No action needed.")]),
    right: "leave", own: "My Lumenfall account", theirs: "The details in the email",
    say: ["There was nothing to do, so nothing happened.",
      "The account shows the $12.99 charge, as expected. A minute spent.",
      "You did nothing, which is all it needed."],
    deciding: ["g5b"], reason: "It tells you something you already know, and says no action is needed." }),
  scamItem({
    id: "g-reset", genuine: "genuine", channel: "email", request: "login",
    context: "You just tapped “Forgot my password” on the Thistlewick Outfitters site.",
    message: scamEmail("Thistlewick Outfitters", "Email · 8:15 AM", "Reset your password", [L("g6a", "You asked to reset your password."), L("g6b", "Use the link within an hour. If this was not you, ignore this email.")], "thistlewick.example/reset"),
    right: "act", own: "The Thistlewick site I am on", theirs: "The link in the email",
    say: ["You chose a new password on the page it opened, and you were back in.",
      "You went to the site yourself and asked again. It worked, and it cost you a few minutes.",
      "You are still locked out, and the link expires in an hour."],
    deciding: ["g6b"], reason: "You asked for this reset a moment ago, so the email is the answer to your own request. Using it is right." }),
  scamItem({
    id: "g-credit", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Penhallow Credit Union is your credit union.",
    message: scamSms("Penhallow CU", "Text message · 1:05 PM", [L("g7a", "A $89.00 payment to Gridiron Gym is pending."), L("g7b", "If this was not you, call 1-555-0171 now.")]),
    right: "check", own: "The number on the back of my card", theirs: "The number in the text",
    say: ["This time the number was real. You could not have known that, and a fake alert would send you to a scammer’s phone.",
      "You called the number on your card. The payment was a gym fee you had forgotten, and a minute settled it.",
      "If the payment was fraud, it goes through."],
    deciding: ["g7b"], reason: "You did not start this and it touches your money, so you go in through a number you already had. That the number in the text is real this time does not make it the way to check." }),
  scamItem({
    id: "g-call", genuine: "scam", channel: "call", request: "login",
    context: "Your phone rings. The screen shows a number you do not know.",
    message: scamCall("Fraud team", "Incoming call · 5:20 PM", [L("g8a", "This is the fraud team at Calderwood Bank."), L("g8b", "We blocked a payment on your card. To unblock it, read me the six-digit code we just texted you.")]),
    right: "check", own: "The number on the back of my card", theirs: "The number that called me",
    say: ["The code was your sign-in code. They were in your account within seconds.",
      "You hung up and called the number on your card. The bank had not called, and nothing was blocked.",
      "You are safe, though a real block would still be waiting."],
    deciding: ["g8b"], reason: "No bank needs you to read out a code it just texted you. You did not start this call, and you hold a number of your own to settle it." })
]);
})();
