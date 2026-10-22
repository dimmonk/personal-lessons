// Scams, lesson 11: the reserve of the topic "All of it together". The review brings the topic back three times (the first three below, listed first so
// the returns take them), and the four-week retest asks one new question for each of the check's fourteen, matched by whether it is real, how it arrives
// and what it wants (lesson standard 6.4): the fourteen after them, one for each, in the check's order. Every answer is the subject's one rule
// (plan.md, "The rule"). Invented senders and people, except the government offices the rule names.
(() => {
const L = scamLine;
const A = "all";
const all = spec => scamItem({ strand: A, ...spec });
FC.items("scams", [
  // ----- three for the returns -----
  all({
    id: "l11r-code-real", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” on the Calderwood sign-in page.",
    message: scamSms("Calderwood", "Text message · 7:30 AM", [L("e1a", "Your code is 330 712."), L("e1b", "Type it on the page you are on.")]),
    right: "act",
    say: ["You signed in.", "Not needed: you asked for the code a moment ago.", "The code runs out."],
    deciding: ["e1b"], reason: "You started it: you asked for the code a moment ago, on the page you are on." }),
  all({
    id: "l11r-vendor-fake", genuine: "scam", channel: "email", request: "money",
    context: "Greenleaf Gardens looks after your yard. You pay its monthly $120 to the account on its first invoice, which also has its number.",
    message: scamEmail("Greenleaf Gardens", "Email · the 1st", "New bank", [L("e2a", "We changed banks this month."), L("e2b", "Please pay the $120 to the account below from now on.")]),
    right: "check", own: "Call Greenleaf on the number on its first invoice", theirs: "Reply to the email I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Greenleaf" },
    say: ["The $120 went to a stranger, and Greenleaf was not paid.", "Greenleaf says nothing changed.", "You are safe, but it uses Greenleaf’s name, and one call settles it."],
    deciding: ["e2b"], reason: "A new account is not what you agreed, and it uses the name of someone you pay, so you check on the invoice’s number." }),
  all({
    id: "l11r-cleaner-fake", genuine: "scam", channel: "popup", request: "device",
    context: "A pop-up appears on a page you are reading. You have never heard of Speed Cleaner.",
    message: scamPopup("Speed Cleaner", "On a web page", [L("e3a", "Your phone is 87% full of junk!"), L("e3b", "Install Speed Cleaner now to fix it.")], "Install"),
    right: "leave",
    say: ["The app showed ads all day and wanted $9.99 a week.", "There is nobody to check with: you have no dealings with them.", "You closed the page."],
    deciding: ["e3b"], reason: "You have no dealings with them, so you close it." }),

  // ----- fourteen for the retest, one for each question of the check -----
  all({
    id: "l11r-track-fake", genuine: "scam", channel: "sms", request: "device",
    context: "You have never heard of Phone Care.",
    message: scamSms("Phone Care", "Text message · 4:10 PM", [L("m1a", "Your phone is running slow."), L("m1b", "Install our app from the link to speed it up.")], "phone-care.example/app"),
    right: "leave",
    say: ["The app wanted access to everything on your phone.", "There is nobody to check with: you have no dealings with them.", "You deleted it."],
    deciding: ["m1b"], reason: "You have no dealings with them, so you leave it." }),
  all({
    id: "l11r-recipe-real", genuine: "genuine", channel: "chat", request: "device",
    context: "At lunch you asked your friend Dana to send you her bread recipe.",
    message: scamChat("Dana", "Chat with a friend", [L("m2a", "Here is the recipe!"), L("m2b", "Open the file at the link.")], "docs-share.example/bread"),
    right: "act",
    say: ["You got the recipe.", "Dana said yes. Not needed: you asked for it at lunch.", "You never get the recipe."],
    deciding: ["m2b"], reason: "You started it: you asked Dana for the recipe at lunch." }),
  all({
    id: "l11r-password-fake", genuine: "scam", channel: "call", request: "login",
    context: "You have an Alderwick account. Its number is in the Alderwick app.",
    message: scamCall("Alderwick", "Incoming call · 1:45 PM", [L("m3a", "We are upgrading your account’s security."), L("m3b", "Tell me your password so I can move it over.")]),
    right: "check", own: "Hang up and call the number in the Alderwick app", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to his manager" },
    say: ["With your password, they got into your account.", "Alderwick says nobody called.", "You are safe, but it uses Alderwick’s name, and the app’s number settles it."],
    deciding: ["m3b"], reason: "You did not start it, and it uses the name of an account you have, so you hang up and call the app’s number. Nobody honest needs your password." }),
  all({
    id: "l11r-link-real", genuine: "genuine", channel: "email", request: "login",
    context: "A moment ago you tapped “Email me a sign-in link” on the Fernbrook site you typed in.",
    message: scamEmail("Fernbrook", "Email · just now", "Your sign-in link", [L("m4a", "Tap the link below to sign in."), L("m4b", "It works for 15 minutes.")], "fernbrook.example/signin"),
    right: "act",
    say: ["You signed in.", "Not needed: you asked for the link a moment ago.", "You stay signed out."],
    deciding: ["m4a"], reason: "You started it: you asked for the sign-in link a moment ago." }),
  all({
    id: "l11r-ticket-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Block them, and keep it to myself", then: "Keeping it to yourself is what the script needs. Someone outside the chat can see what you cannot from inside it." }, 
    context: "You have chatted with Rob on a dating site for two months. You have never met.",
    message: scamChat("Rob", "Chat on the dating site", [L("m5a", "I want to fly out and meet you!"), L("m5b", "Can you send $500 for the ticket? I will pay you back.")]),
    right: "leave",
    say: ["The $500 was gone, and then the ticket needed more.", "There is nothing of yours to check with: everything you know about Rob came from Rob.", "You sent nothing."],
    deciding: ["m5b"], reason: "You know Rob only online, so you leave it, and you tell someone you know in person." }),
  all({
    id: "l11r-books-real", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Your son Ben is texting from his saved number. You had not talked about money.",
    message: scamSms("Ben", "Text message · 5:20 PM", [L("m6a", "I need $150 for books this term."), L("m6b", "Can you send it to this account? 4471 0093 2210")]),
    right: "check", own: "Call Ben on his saved number", theirs: "Reply to the text I got", theirsHow: "reply", alt: { how: "search", text: "The college’s number I find by searching" },
    say: ["This time it was Ben. You could not have known.", "Ben answers and says yes. You send it.", "Ben finds the money elsewhere."],
    deciding: ["m6a"], reason: "You did not agree this, and Ben is someone you know, so you check on his saved number." }),
  all({
    id: "l11r-county-fake", genuine: "scam", channel: "call", request: "money",
    context: "You live in Marlow County. The treasurer’s number is on your tax bill.",
    message: scamCall("Marlow County Treasurer", "Incoming call · 10:10 AM", [L("m7a", "Your property tax is overdue."), L("m7b", "Wire $1,240 today, or your home goes to auction.")]),
    right: "check", own: "Hang up and call the number on my tax bill", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "badge", text: "Call the number she gives with her ID" },
    say: ["The wire was gone by night. Your tax was paid.", "The treasurer says your tax is paid and nobody called.", "You are safe, but it uses a government office’s name, and the bill’s number settles it."],
    deciding: ["m7b"], reason: "A government office has your records, so you hang up and call the number on your bill. A wire settles it." }),
  all({
    id: "l11r-bill-real", genuine: "genuine", channel: "popup", request: "money",
    context: "You opened the Hollis Power app and tapped “Pay my bill.”",
    message: scamPopup("Hollis Power", "In the app", [L("m8a", "Amount due: $91.40."), L("m8b", "Pay from your saved account?")], "Pay"),
    right: "act",
    say: ["Your bill was paid.", "Not needed: you tapped “Pay my bill” yourself.", "The bill stays unpaid."],
    deciding: ["m8b"], reason: "You started it: you opened the app and tapped “Pay my bill.”" }),
  all({
    id: "l11r-ssn-fake", genuine: "scam", channel: "email", request: "details",
    context: "You bank with Penhallow. Its number is on your card.",
    message: scamEmail("Penhallow Credit Union", "Email · Friday", "Member check", [L("m9a", "Every member must confirm their record this month."), L("m9b", "Reply with your Social Security number and birthday.")]),
    right: "check", own: "Call Penhallow on the number on my card", theirs: "Reply to the email I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Penhallow" },
    say: ["Your reply went to a stranger.", "Penhallow says it sent nothing.", "You are safe, but it uses your credit union’s name, and the card’s number settles it."],
    deciding: ["m9b"], reason: "You did not start it, and it uses your credit union’s name, so you check on the card’s number." }),
  all({
    id: "l11r-catalog-real", genuine: "genuine", channel: "email", request: "details", offers: true,
    context: "You have never shopped at Bellwood Home and have no account there.",
    message: scamEmail("Bellwood Home", "Email · Sunday", "Free catalog", [L("m10a", "Get our spring catalog by mail."), L("m10b", "Send us your address at the link.")], "bellwood.example/catalog"),
    right: "leave",
    say: ["You gave your address to a shop you had never used.", "There is nobody to check with: you have no account with them.", "You deleted it."],
    deciding: ["m10b"], reason: "You did not start it and you have no account with them, so you leave it, real or not." }),
  all({
    id: "l11r-lottery-fake", genuine: "scam", channel: "banner", request: "money",
    context: "You have never heard of Lottery Center and bought no ticket.",
    message: scamBanner("Lottery Center", "Now", [L("m11a", "You won $5,000! Pay a $30 fee to claim.")]),
    right: "leave",
    say: ["You paid $30, and no prize came.", "There is nobody to check with: you have no dealings with them.", "You swiped it away."],
    deciding: ["m11a"], reason: "You have no dealings with them, so you leave it. Real prizes are free." }),
  all({
    id: "l11r-statement-real", genuine: "genuine", channel: "email", request: "login", offers: true,
    context: "You bank with Calderwood, and its app is on your phone.",
    message: scamEmail("Calderwood Bank", "Email · the 3rd", "Your statement", [L("m12a", "Your October statement is ready."), L("m12b", "Sign in at the link to see it.")], "calderwood.example/statements"),
    right: "check", own: "The Calderwood app on my phone", theirs: "The link in the email I got", alt: { how: "search", text: "The sign-in page I find by searching for Calderwood" },
    say: ["This time the link was real. You could not have told.", "The app shows the statement.", "The statement waits in the app."],
    deciding: ["m12b"], reason: "You did not start it, and it uses your bank’s name, so you go in through the app." }),
  exItem({
    id: "l11r-ssa", strand: A, channel: "call", request: "details",
    context: "You get Social Security. Its number is on the letters it sends you.",
    prompt: "A call says it is Social Security. What do you say?", from: "Social Security", detail: "Incoming call · 2:00 PM",
    turns: [
      { lines: ["Your number was used in a crime.", "Confirm your Social Security number so we can protect it."], push: "It frightens you.",
        give: "Give him your number", hold: "Tell him to send a letter", leave: "Say “I’ll call back on the number I have,” and hang up" },
      { lines: ["There is no time for letters. Your payments stop today."], push: "It hurries you and threatens your money.",
        give: "Give him your number", leave: "Say “I’ll call back on the number I have,” and hang up" }],
    gave: "Your number was used to open a credit card in your name.",
    left: "The number on your Social Security letter said nothing was wrong and nobody had called.",
    reason: "A government office has your records, so you hang up and call it on a number you know." }),
  realExItem({
    id: "l11r-plan", strand: A, channel: "call", request: "details",
    context: "You called Kestrel Mobile on the number on your bill to change your plan.",
    prompt: "Kestrel answers. What do you say?", from: "Kestrel Mobile", detail: "Your call, a minute in",
    turns: [
      { lines: ["I can switch you to the cheaper plan.", "First, your account PIN and your date of birth."], push: "It wants your details at once.",
        stay: "Give her the PIN and your birthday", hold: "Tell her you will call back next week", leave: "Hang up and call the bill’s number again" },
      { lines: ["The cheaper plan ends today for new switches."], push: "It gives a deadline.",
        stay: "Give her the PIN and your birthday", leave: "Hang up" }],
    stayed: "Your plan was changed, and your next bill was lower.",
    hung: "Nothing was wrong: you had called the number on your own bill. The cheaper plan was gone.",
    reason: "You started it: you called the number on your own bill, so you are talking to your phone company." })
]);
})();
