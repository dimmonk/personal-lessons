// Scams, lesson 3 "Act, check or leave": the worked message and the messages of its two groups. Invented senders and people; every message is in
// the form it arrives in, and every one wants something (plan.md, "The rule", step 1). Half are real. The first group is three pairs that differ in one
// step of the rule (a code you asked for and one a stranger wants; a real shop you have an account with and a courier you have none with; a real alert
// and a fake one), asked one after the other; the second group is nine mixed, with a clock, the last of them someone known only online who wants money.
(() => {
const L = scamLine;
FC.items("scams", [
  // ----- the worked message: a text that says the card is locked -----
  { ...scamItem({
    id: "w-locked", genuine: "scam", channel: "sms", request: "login",
    context: "You have a Calderwood Bank card, and the Calderwood app is on your phone.",
    message: scamSms("Calderwood Alert", "Text message · 2:14 PM", [L("w1", "Your card has been locked."), L("w2", "Confirm your sign-in now to unlock it.")], "calderwood-secure.example/confirm"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The page the link opens on my phone",
    say: ["The page looks like the bank’s sign-in and keeps whatever you type. Within the hour money is leaving your account.",
      "The app shows no lock and no alert. Your card is fine, and you spent a minute.",
      "You are safe for now. But it uses your bank’s name, and the app would have told you in a minute whether anything was wrong."],
    deciding: ["w2"], reason: "It wants your sign-in, you did not start it, and it uses the name of your bank. So you check, in the app you already have, and nothing the text gave you is needed." }),
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants you to confirm your sign-in through its link, now." },
      { id: "start", does: "See whether you started it.", working: "You did not. You did nothing with your card today." },
      { id: "know", does: "See whether you deal with them.", working: "Yes: it uses the name of your bank, Calderwood." },
      { id: "do", does: "Choose.", working: "Check first, in the Calderwood app. Leave the link alone.", ask: "act" }] },

  // ----- the first group: three pairs, each differing in one step of the rule -----
  scamItem({
    id: "p-code-real", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” on the Marlowe & Finch sign-in page.",
    message: scamSms("Marlowe & Finch", "Text message · 9:02 AM", [L("p1a", "Your sign-in code is 482 917."), L("p1b", "Enter it on the page you are on. It works for ten minutes.")]),
    right: "act",
    say: ["You signed in. The code only works for the sign-in you started.",
      "Checking was not needed: you asked for this code a moment ago, on the page you are on.",
      "You are still signed out, and the code runs out in ten minutes."],
    deciding: ["p1b"], reason: "You started it: you asked for this code a moment ago, on the page you are on. Typing it there is what it is for." }),
  scamItem({
    id: "p-code-fake", genuine: "scam", channel: "sms", request: "login",
    context: "You are cooking dinner. A code arrives on your phone, and a moment later a text from a number you do not know.",
    message: scamSms("Unknown number", "Text message · 7:04 PM", [L("p2a", "Hi, I sent you a code by mistake."), L("p2b", "Can you read it back to me?")]),
    right: "leave",
    say: ["They typed your code into your account’s sign-in and were in. You never saw it happen.",
      "There is nobody to check with: you do not know who this is. The code is only for you to type, never to read to anyone.",
      "Nothing was shared. If codes you did not request keep coming, change that account’s password in its own app."],
    deciding: ["p2b"], reason: "You did not start it and you do not know the sender, so you leave it. A code is only for you to type on a page you opened yourself; never read it to anyone." }),
  scamItem({
    id: "p-ship-real", genuine: "genuine", channel: "sms", request: "login", offers: true,
    context: "You ordered a jacket from Thistlewick Outfitters on Monday, and you have an account there. You have not been in touch with them about the delivery.",
    message: scamSms("Thistlewick Outfitters", "Text message · Wednesday 10:05 AM", [L("p3a", "We could not deliver your jacket today."), L("p3b", "Sign in at the link to choose a new day.")], "thistlewick.example/delivery"),
    right: "check", own: "My Thistlewick account, at the address I type myself", theirs: "The page the link opens on my phone",
    say: ["This time the link was real and you chose a new day. You could not have known that, and next time the same text could be a copy.",
      "Your account shows the missed delivery and lets you choose a new day. Same result, no link.",
      "Your jacket waits at the depot and goes back after a week."],
    deciding: ["p3b"], reason: "You did not start it, and you have an account with Thistlewick. So you go in your own way, at the address you type. Its link is never the way." }),
  scamItem({
    id: "p-ship-fee", genuine: "scam", channel: "sms", request: "money",
    context: "You have never used Quillfeather Parcel, and you have not ordered anything this month.",
    message: scamSms("Quillfeather Parcel", "Text message · 3:31 PM", [L("p4a", "Your parcel is held at our depot."), L("p4b", "Pay a $1.99 redelivery fee before Friday or it goes back.")], "quillfeather-redeliver.example/pay"),
    right: "leave",
    say: ["The page took your card number, then charged it again and again.",
      "There is nobody to check with: you have no account with Quillfeather and no parcel coming.",
      "You deleted it. Nothing was waiting for you."],
    deciding: ["p4b"], reason: "You did not start it, you have no account with Quillfeather, and you are expecting nothing. So you leave it. A fee by link to release a parcel is the request." }),
  scamItem({
    id: "p-alert-real", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Calderwood Bank is your bank. You have been at home all day.",
    message: scamSms("Calderwood Bank", "Text message · 4:40 PM", [L("p5a", "Fraud alert: a $212.40 charge at Westgate Electronics."), L("p5b", "Was this you? Review it here.")], "calderwood.example/review"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The page the link opens on my phone",
    say: ["This time the link was real and nothing bad happened. You could not have known that, and next time the same text could be a fake.",
      "The app shows the charge. You confirm it was not you, and the bank freezes the card.",
      "A real charge goes unchecked, and the money keeps leaving."],
    deciding: ["p5b"], reason: "A real alert and a fake one can look the same. The move is the same too: you did not start this and it is your bank, so go in through the app you already have, never through the link." }),
  scamItem({
    id: "p-alert-fake", genuine: "scam", channel: "sms", request: "money",
    context: "Calderwood Bank is your bank. You have been at home all day.",
    message: scamSms("Calderwood Bank", "Text message · 4:41 PM", [L("p6a", "Fraud alert: a $212.40 charge at Westgate Electronics."), L("p6b", "Was this you? Review it here.")], "calderwood-alerts.example/review"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The page the link opens on my phone", alt: { how: "search", text: "The Calderwood number I find by searching on my phone" },
    say: ["The page copied the bank’s sign-in and kept your password and codes.",
      "The app shows no such charge. You know it was a copy, and you spent a minute.",
      "You are safe, but you never learned there was no charge. Had it been real, leaving it would have cost money."],
    deciding: ["p6b"], reason: "It is word for word the real alert, on purpose: the move is the same, you did not start this and it uses your bank’s name, so go in through your own app. How it looks never decides it." }),

  // ----- the second group: eight mixed, four real and four scams -----
  scamItem({
    id: "g-invoice-real", genuine: "genuine", channel: "email", request: "money",
    context: "You hired Femi Iwu to tile your bathroom. The quote said: pay by bank transfer to the account on the quote when the job is done.",
    message: scamEmail("Iwu Tiling", "Email · Friday", "Invoice for the bathroom", [L("g1a", "Hi, the job is finished."), L("g1b", "The total is $1,860, as quoted."), L("g1c", "Please pay by transfer to the account on your quote by Friday. Thanks, Femi.")]),
    right: "act", own: "The account on my quote", theirs: "The details in the email",
    say: ["You paid $1,860 into the account on the quote, the way you agreed. Femi had no problem.",
      "You called Femi on the number from the quote. He said the job was done. Not needed: nothing changed from what you agreed.",
      "The bill goes unpaid, and Femi has to chase you."],
    deciding: ["g1c"], reason: "You started it: you agreed the amount and the way to pay beforehand, and this wants exactly that. Paying the account on your quote is right." }),
  scamItem({
    id: "g-invoice-new", genuine: "scam", channel: "email", request: "money",
    context: "You hired Femi Iwu to tile your bathroom. The quote said: pay by bank transfer to the account on the quote when the job is done.",
    message: scamEmail("Iwu Tiling", "Email · Friday", "Invoice: new bank details", [L("g2a", "Hi, the job is finished and the total is $1,860."), L("g2b", "Our bank has changed, so please pay the new account below instead of the one on your quote."), L("g2c", "New account: 5521-0087 at Penhallow Credit Union.")]),
    right: "check", own: "Femi’s number from my quote", theirs: "My reply to the email",
    say: ["The $1,860 went to a stranger’s account. Banks can rarely get it back.",
      "Femi says his bank has not changed. The email was a fake, and you kept $1,860.",
      "You are safe, but Femi, whom you hired, is still waiting for his money."],
    deciding: ["g2b"], reason: "New bank details are not what you agreed, so you did not start this. Femi is someone you deal with, so you check on the number from your quote." }),
  scamItem({
    id: "g-popup", genuine: "scam", channel: "popup", request: "device",
    context: "You are reading a recipe on a website.",
    message: scamPopup("Security alert", "On a web page", [L("g3a", "Your computer is infected!"), L("g3b", "Do not turn it off. Call Pinecrest Help now.")], "Call 1-555-0142"),
    right: "leave",
    say: ["A stranger asked to see your screen, then for payment in gift cards. Your computer was fine before they touched it.",
      "There is nobody to check with: you have no account with Pinecrest Help.",
      "You closed the page. Nothing was wrong with your computer."],
    deciding: ["g3b"], reason: "You did not start it and you have no account with Pinecrest Help, so you leave it. A web page cannot see inside your computer." }),
  scamItem({
    id: "g-boss", genuine: "scam", channel: "sms", request: "money",
    context: "Priya Raman is your boss at Kestrel Dental. You have her number saved.",
    message: scamSms("Priya R. (new number)", "Text message · 11:20 AM", [L("g4a", "Please buy four $100 gift cards for a client and send me the codes here."), L("g4b", "It’s Priya. I’m in a meeting and can’t talk.")]),
    right: "check", own: "Priya’s number that I already have", theirs: "My reply to this number",
    say: ["You sent four codes. The gift cards were emptied within minutes.",
      "Priya says she sent nothing and is at her desk. You kept $400, and she warns the office.",
      "You kept your money, but it uses your boss’s name. A minute on her saved number lets her know someone is using it."],
    deciding: ["g4a"], reason: "Gift cards settle that it is a scam, and it uses the name of someone you know. So you check on her saved number, never by replying." }),
  scamItem({
    id: "g-promo", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "You are not a member of Ironwood Gym.",
    message: scamSms("Ironwood Gym", "Text message · 10:15 AM", [L("g5a", "Join Ironwood Gym this week for just $10 a month!"), L("g5b", "Sign up and pay at the link.")], "ironwood.example/join"),
    right: "leave",
    say: ["You paid $10 and joined a gym you had not planned to join.",
      "There is nobody to check with: you have no account with Ironwood.",
      "You deleted it. If you ever want a gym, you can go there yourself."],
    deciding: ["g5b"], reason: "You did not start it and you have no account with Ironwood, so you leave it, real or not. Nothing here needs an answer." }),
  scamItem({
    id: "g-reset", genuine: "genuine", channel: "email", request: "login",
    context: "You just tapped “Forgot my password” on the Thistlewick Outfitters site.",
    message: scamEmail("Thistlewick Outfitters", "Email · 8:15 AM", "Reset your password", [L("g6a", "Use the link within an hour to reset your password."), L("g6b", "If you did not ask for this, ignore this email.")], "thistlewick.example/reset"),
    right: "act", own: "The Thistlewick site I am on", theirs: "The page the email’s link opens on my phone",
    say: ["You chose a new password on the page it opened, and you were back in.",
      "You went to the site yourself and asked again. Not needed: you had asked a moment ago.",
      "You are still locked out, and the link expires in an hour."],
    deciding: ["g6a"], reason: "You started it: you asked for this reset a moment ago, so the email is the answer to your own request." }),
  scamItem({
    id: "g-credit", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Penhallow Credit Union is your credit union.",
    message: scamSms("Penhallow CU", "Text message · 1:05 PM", [L("g7a", "A $89.00 payment to Gridiron Gym is pending."), L("g7b", "If this was not you, call 1-555-0171 now.")]),
    right: "check", own: "The number printed on the card", theirs: "The number the text gave me",
    say: ["This time the number was real. You could not have known that, and a fake alert would send you to a scammer’s phone.",
      "You called the number on your card. The payment was a gym fee you had forgotten, and a minute settled it.",
      "If the payment was fraud, it goes through."],
    deciding: ["g7b"], reason: "You did not start this and it is your credit union, so you go in through a number you already had. That the number in the text is real this time does not make it the way to check." }),
  scamItem({
    id: "g-online", genuine: "scam", channel: "chat", request: "money", tell: true,
    context: "You met Theo in a gardening group online four months ago. You chat most days, and you have never met or heard his voice.",
    message: scamChat("Theo", "Chat in the gardening group", [L("g9a", "My mother is in the hospital and the bill is due today."), L("g9b", "Could you lend me $600? I will pay you back next week.")]),
    right: "leave",
    say: ["You sent $600. A week later there was a new bill, and no money came back.",
      "There is nothing of yours to check with: his number, his photos and his story all came from him.",
      "You sent nothing."],
    deciding: ["g9b"], reason: "Someone you know only online is not someone you know: every way to check him came from him. So you leave it, and because he wants money you tell someone you know in person." }),
  scamItem({
    id: "g-call", genuine: "scam", channel: "call", request: "login",
    context: "Calderwood is your bank. You have not called it today. Your phone rings from a number you do not know.",
    message: scamCall("Fraud team", "Incoming call · 5:20 PM", [L("g8a", "This is the fraud team at Calderwood Bank, calling you back as you asked."), L("g8b", "To unblock your card, read me the six-digit code we just texted you."), L("g8c", "Please hurry, before more money goes.")]),
    right: "check", own: "The number printed on the card", theirs: "Calling back the number my phone shows for the call", alt: { how: "transfer", text: "Get put through to a manager" },
    say: ["The code was your sign-in code. They were in your account within seconds.",
      "You hung up and called the number on your card. The bank had not called, and nothing was blocked.",
      "You are safe, but it uses your bank’s name. A call to the number on your card tells you whether anything is really blocked."],
    deciding: ["g8b"], reason: "A code read back settles that it is a scam, and it uses the name of your bank. So you hang up and check on the number on your card." })
]);
})();
