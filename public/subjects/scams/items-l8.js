// Scams, lesson 8 "About you": the worked text, three pairs (a text that wants your Social Security number and the form in the app you opened; a quiz
// that collects the answers to security questions and the security question you pick yourself; a call that wants to "confirm" you and the call you made
// on the number on your card), nine mixed on a clock with a call that pushes, the nine of the check with a chat that pushes, and three held in reserve.
// Every answer is the subject's one rule (plan.md, "The rule"): details given inside something you started are given; a request you did not start that
// uses the name of someone you deal with is checked your own way; one from anyone else is left (S3: "Don't give your personal or financial information
// in response to a request that you didn't expect"; what thieves do with details and quizzes, S32 in the note). Invented senders. About half real.
(() => {
const L = scamLine;
const Y = "about-you";
const you = spec => scamItem({ strand: Y, ...spec });
FC.items("scams", [
  // ----- the worked text -----
  you({
    id: "l8w-ssn", genuine: "scam", channel: "sms", request: "details",
    context: "You bank with Ashgrove Bank, and its app is on your phone.",
    message: scamSms("Ashgrove Bank", "Text message · 12:40 PM", [L("w1a", "We must confirm your identity to keep your account open."), L("w1b", "Enter your Social Security number and date of birth at the link by tonight.")], "ashgrove-verify.example/id"),
    right: "check", own: "The Ashgrove app, opened myself", theirs: "The link in the text I got", alt: { how: "reply", text: "Reply to the text I got and find out why" },
    say: ["The page kept your number and birthday. A credit card was opened in your name a month later.",
      "The app shows nothing to confirm. Your account was never closing.",
      "You are safe, but it uses your bank’s name, and the app would have shown you in a minute."],
    deciding: ["w1b"], reason: "You did not start it, and it uses the name of your bank, so you check in the app you already have. Your number and birthday are what open accounts in your name.",
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants your Social Security number and your birthday." },
      { id: "start", does: "See whether you started it.", working: "No. You were not opening anything or filling in any form." },
      { id: "know", does: "See whether you deal with them.", working: "Yes: it uses the name of your bank, and you have its app." },
      { id: "do", does: "Choose.", working: "Check first, in the Ashgrove app. Leave the link alone.", ask: "act" }] }),

  // ----- the first group: three pairs -----
  you({
    id: "l8p-ssn-fake", genuine: "scam", channel: "email", request: "details",
    context: "You bank with Penhallow Credit Union. Its number is on your card.",
    message: scamEmail("Penhallow Credit Union", "Email · Tuesday", "Update needed", [L("p1a", "New rules mean we must update every member’s record."), L("p1b", "Reply with your Social Security number, birthday and home address.")]),
    right: "check", own: "Call Penhallow on the number on my card", theirs: "Reply to the email I got and find out more", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Penhallow" },
    say: ["Your reply went to a stranger. A phone account was opened in your name.",
      "The credit union says it sent nothing and needs nothing from you.",
      "You are safe, but it uses your credit union’s name, and the number on your card settles it."],
    deciding: ["p1b"], reason: "You did not start it, and it uses the name of your credit union, so you check on the number on your card." }),
  you({
    id: "l8p-ssn-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You opened the Penhallow app and tapped “Open a savings account.”",
    message: scamPopup("Penhallow CU", "In the app", [L("p2a", "To open your savings account, enter your Social Security number."), L("p2b", "It takes about two minutes.")], "Continue"),
    right: "act",
    say: ["Your savings account was open by lunch.",
      "Not needed: you opened the app and chose to open the account a moment ago.",
      "Your savings account stays unopened."],
    deciding: ["p2a"], reason: "You started it: you opened the app and tapped “Open a savings account” yourself. A bank needs the number to open one." }),
  you({
    id: "l8p-quiz-fake", genuine: "scam", channel: "chat", request: "details",
    context: "A page you do not know posts in your social app, and messages you.",
    message: scamChat("Fun Quizzes", "Message on a social app", [L("p3a", "Find your rock star name!"), L("p3b", "Tell us your first pet’s name and the street you grew up on."), L("p3c", "Everyone is doing it!")]),
    right: "leave",
    say: ["Your answers matched the security questions on your email. Someone used them to get into it.",
      "There is nobody to check with: you do not know who runs the page.",
      "You ignored it. Your answers stayed yours."],
    deciding: ["p3b"], reason: "You do not know who runs the page, so you leave it. A first pet and a childhood street are the answers to common security questions." }),
  you({
    id: "l8p-question-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You just got the Alderwick app from your app store and tapped “Create account.”",
    message: scamPopup("Alderwick", "In the app", [L("p4a", "Pick a security question and type your answer."), L("p4b", "We use it if you ever forget your password.")], "Save"),
    right: "act",
    say: ["Your account was made. You typed an answer nobody could guess, like a second password.",
      "Not needed: you are making the account yourself, right now.",
      "Your account stays unfinished."],
    deciding: ["p4a"], reason: "You started it: you are making the account yourself. Make the answer something nobody could find out, like a password." }),
  you({
    id: "l8p-verify-fake", genuine: "scam", channel: "call", request: "details",
    context: "You bank with Calderwood. Its number is on your card.",
    message: scamCall("Calderwood Bank", "Incoming call · 9:50 AM", [L("p5a", "This is Calderwood. We need to verify you before we can talk."), L("p5b", "Give me your full card number, the date on it and your birthday.")]),
    right: "check", own: "Hang up and call the number on the back of my card", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to her manager" },
    say: ["With your card number, its date and your birthday, they spent $900 online that night.",
      "The bank says nobody called you. Your card is fine.",
      "You are safe, but it uses your bank’s name, and the number on your card tells you whether anything is wrong."],
    deciding: ["p5b"], reason: "You did not start the call, and it uses your bank’s name, so you hang up and call the number on your card." }),
  you({
    id: "l8p-verify-real", genuine: "genuine", channel: "call", request: "details",
    context: "You called the number on the back of your Calderwood card to get a new card sent.",
    message: scamCall("Calderwood Bank", "Your call, a minute in", [L("p6a", "Happy to help with a new card."), L("p6b", "First, what is your date of birth?")]),
    right: "act",
    say: ["The agent found your account and sent a new card.",
      "Not needed: you called the number on your own card.",
      "No new card is sent."],
    deciding: ["p6b"], reason: "You started it: you called the number on your own card, so you are talking to your bank." }),

  // ----- the second group: nine mixed, on a clock, with a call that pushes -----
  you({
    id: "l8g-job-fake", genuine: "scam", channel: "email", request: "details",
    context: "You have never heard of Pinecrest Hiring and never applied to it.",
    message: scamEmail("Pinecrest Hiring", "Email · Monday", "You are hired!", [L("g1a", "Send your Social Security number and date of birth so we can pay you."), L("g1b", "You start Monday, working from home for $35 an hour.")]),
    right: "leave",
    say: ["There was no job. Your number was used to take a tax refund in your name.",
      "There is nobody to check with: you never applied.",
      "You deleted it."],
    deciding: ["g1a"], reason: "You never applied and have no dealings with them, so you leave it." }),
  you({
    id: "l8g-portal-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You opened your clinic’s app to check in for tomorrow’s visit.",
    message: scamPopup("Brookside Clinic", "In the app", [L("g2a", "Check in for your visit at 9:00 AM."), L("g2b", "Confirm your date of birth and insurance member number.")], "Check in"),
    right: "act",
    say: ["You were checked in, and the visit started on time.", "Not needed: you opened the app to check in yourself.", "You fill in the same form at the front desk tomorrow."],
    deciding: ["g2b"], reason: "You started it: you opened the clinic’s app to check in." }),
  you({
    id: "l8g-survey-fake", genuine: "scam", channel: "email", request: "details",
    context: "You have an account with Thistlewick and shop there often.",
    message: scamEmail("Thistlewick", "Email · Friday", "Win $100", [L("g3a", "Tell us how we did, and win a $100 gift card."), L("g3b", "Enter your name, birthday and home address at the link.")], "thistlewick-survey.example/win"),
    right: "check", own: "My account page, in the Thistlewick app", theirs: "The link in the email I got", alt: { how: "search", text: "The survey page I find by searching" },
    say: ["The page kept your name, birthday and address. No gift card came.",
      "Your account page shows no survey. You kept your details.",
      "You are safe, but it uses the name of a shop you use, and the app would have shown you."],
    deciding: ["g3b"], reason: "You did not start it, and it uses the name of a shop you have an account with, so you check in the app." }),
  you({
    id: "l8g-lease-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You are applying for an apartment. You typed Harborview’s web address from its sign and opened “Apply.”",
    message: scamPopup("Harborview Apartments", "On the Harborview site", [L("g4a", "Enter your Social Security number for the credit check."), L("g4b", "We decide within three days.")], "Next"),
    right: "act",
    say: ["Your application went in, and they said yes on Thursday.", "Not needed: you typed the address yourself and chose to apply.", "Your application stays unfinished."],
    deciding: ["g4a"], reason: "You started it: you typed the address yourself and chose to apply. A landlord’s credit check needs the number." }),
  you({
    id: "l8g-address-real", genuine: "genuine", channel: "sms", request: "details", offers: true,
    context: "You bank with Alderwick. The Alderwick app is on your phone.",
    message: scamSms("Alderwick", "Text message · 10:20 AM", [L("g5a", "Is 12 Elm Street still your home address?"), L("g5b", "Reply YES, or reply with your new address.")]),
    right: "check", own: "The Alderwick app on my phone", theirs: "Reply to the text I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Alderwick" },
    say: ["This time it was your bank. You could not have known from the text.",
      "The app shows the same question. You confirm your address there.",
      "The bank keeps the address it has, and nothing goes wrong."],
    deciding: ["g5b"], reason: "You did not start it, and it uses the name of your bank, so you answer in the app, real or not." }),
  you({
    id: "l8g-sweep-fake", genuine: "scam", channel: "sms", request: "details",
    context: "You have never heard of Reward Center.",
    message: scamSms("Reward Center", "Text message · 3:35 PM", [L("g6a", "You have been chosen for a $500 gift card!"), L("g6b", "Enter your name, birthday and address to claim it."), L("g6c", "Ends today.")], "reward-center-claim.example/now"),
    right: "leave",
    say: ["No gift card came. Calls and texts about “prizes” kept coming for months.",
      "There is nobody to check with: you have no dealings with them.",
      "You deleted it."],
    deciding: ["g6b"], reason: "You have no dealings with them, so you leave it." }),
  you({
    id: "l8g-pharmacy-real", genuine: "genuine", channel: "call", request: "details",
    context: "You called Elmside Pharmacy on the number printed on your pill bottle, to get a refill.",
    message: scamCall("Elmside Pharmacy", "Your call, a minute in", [L("g7a", "I can get that ready today."), L("g7b", "Can you give me your date of birth to find you?")]),
    right: "act",
    say: ["The refill was ready that afternoon.", "Not needed: you called the number on your own pill bottle.", "No refill is made."],
    deciding: ["g7b"], reason: "You started it: you called the number on your own pill bottle." }),
  you({
    id: "l8g-census-fake", genuine: "scam", channel: "call", request: "details",
    context: "You have never heard of Household Opinion Research, a company.",
    message: scamCall("Household Opinion Research", "Incoming call · 6:10 PM", [L("g8a", "We are calling homes in your area for a short survey."), L("g8b", "To start, what is your Social Security number and your yearly income?")]),
    right: "leave",
    say: ["Your number was used to get a credit card in your name.",
      "There is nobody to check with: you have no dealings with them.",
      "You hung up."],
    deciding: ["g8b"], reason: "You have no dealings with them, so you hang up." }),
  exItem({
    id: "l8x-fraud", strand: Y, channel: "call", request: "details",
    context: "You bank with Calderwood. Its number is on your card.",
    prompt: "Calderwood’s fraud team calls. What do you say?", from: "Calderwood fraud team", detail: "Incoming call · 8:15 PM",
    turns: [
      { lines: ["Someone is spending on your card right now.", "To stop it, I need your full card number and your Social Security number."], push: "It frightens you with a loss happening now.",
        give: "Give her the numbers", hold: "Give her only the last four digits of the card", leave: "Hang up and call the number on my card" },
      { lines: ["The last four are not enough. Every minute costs you. Another $400 just went."], push: "It hurries you with a growing loss.",
        give: "Give her the numbers", hold: "Tell her you will look at the app first", leave: "Hang up and call the number on my card" },
      { lines: ["If you hang up now, the bank will not cover any of it."], push: "It threatens the cost of stopping.",
        give: "Give her the numbers", leave: "Hang up and call the number on my card" }],
    gave: "With the numbers, they opened a new card in your name and spent on your old one.",
    left: "The bank said nothing had been spent and nobody had called.",
    reason: "It uses your bank’s name, so you check on the number on your card. Each push was there to keep you from doing it." }),

  // ----- the check: nine new, with a chat -----
  you({
    id: "l8k-hr-fake", genuine: "scam", channel: "email", request: "details",
    context: "Dana Ruiz runs HR at your work. Her number is in the staff phone list you have.",
    message: scamEmail("Dana Ruiz, HR", "Email · Wednesday 4:55 PM", "Payroll update", [L("k1a", "We are moving to a new payroll system."), L("k1b", "Reply by 6 PM today with your Social Security number and bank account number."), L("k1c", "Dana, 1-555-0163")]),
    right: "check", own: "Call Dana on the number in the staff phone list", theirs: "Reply to the email I got", theirsHow: "reply", alt: { how: "number", text: "Call the number under Dana’s name in the email" },
    say: ["Your next paycheck went to a stranger’s account.",
      "Dana says she sent no such email. You warn her, and she warns everyone.",
      "You are safe, but it uses Dana’s name, and one call tells her someone is using it."],
    deciding: ["k1b"], reason: "You did not start it, and it uses the name of someone you know, so you check on the number you already have." }),
  you({
    id: "l8k-quiz-fake", genuine: "scam", channel: "chat", request: "details",
    context: "A page you do not know messages you in your social app.",
    message: scamChat("Trivia Time", "Message on a social app", [L("k2a", "What was your first car?"), L("k2b", "Answer our three questions to see your movie name!"), L("k2c", "And where were you born?")]),
    right: "leave",
    say: ["Your answers matched the security questions on your bank account, and someone got in.",
      "There is nobody to check with: you do not know who runs the page.",
      "You ignored it."],
    deciding: ["k2a"], reason: "You do not know who runs the page, so you leave it. Your first car and where you were born are answers to security questions." }),
  you({
    id: "l8k-cruise-fake", genuine: "scam", channel: "call", request: "details",
    context: "You have never heard of Travel Rewards and entered nothing.",
    message: scamCall("Travel Rewards", "Incoming call · 1:20 PM", [L("k3a", "You have won a free cruise for two!"), L("k3b", "To hold it, confirm your birthday and your card number.")]),
    right: "leave",
    say: ["No cruise. Charges you never made showed up on your card.", "There is nobody to check with: you have no dealings with them.", "You hung up."],
    deciding: ["k3b"], reason: "You have no dealings with them, so you hang up." }),
  you({
    id: "l8k-carrier-fake", genuine: "scam", channel: "sms", request: "details",
    context: "Your phone service is with Kestrel Mobile. Its number is on your bill.",
    message: scamSms("Kestrel Mobile", "Text message · 8:45 AM", [L("k4a", "Someone is trying to move your number to a new phone."), L("k4b", "Confirm your account PIN and date of birth at the link to stop it.")], "kestrel-protect.example/stop"),
    right: "check", own: "Call the number on my Kestrel bill", theirs: "The link in the text I got", alt: { how: "search", text: "The number I find by searching for Kestrel" },
    say: ["With your PIN and birthday, someone opened a phone account in your name.",
      "Kestrel says nobody is moving your number.",
      "You are safe, but it uses your phone company’s name, and the number on your bill settles it."],
    deciding: ["k4b"], reason: "You did not start it, and it uses your phone company’s name, so you check on the number on your bill." }),
  you({
    id: "l8k-clinic-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You opened your clinic’s app and tapped “Book a visit.”",
    message: scamPopup("Brookside Clinic", "In the app", [L("k5a", "Pick a time: Tuesday 10:30 AM."), L("k5b", "Enter your insurance member number to book.")], "Book"),
    right: "act",
    say: ["Your visit was booked for Tuesday.", "Not needed: you opened the app and chose to book.", "No visit is booked."],
    deciding: ["k5b"], reason: "You started it: you opened the clinic’s app and tapped “Book a visit.”" }),
  you({
    id: "l8k-bank-real", genuine: "genuine", channel: "call", request: "details",
    context: "You called the number on the back of your Ashgrove card about a charge you did not know.",
    message: scamCall("Ashgrove Bank", "Your call, a minute in", [L("k6a", "I can look at that charge with you."), L("k6b", "What are the last four digits of your Social Security number?")]),
    right: "act",
    say: ["The agent found your account and explained the charge.", "Not needed: you called the number on your own card.", "The charge stays a mystery."],
    deciding: ["k6b"], reason: "You started it: you called the number on your own card, so you are talking to your bank." }),
  you({
    id: "l8k-school-real", genuine: "genuine", channel: "email", request: "details", offers: true,
    context: "Your son goes to Oakfield School. The school’s parent app is on your phone.",
    message: scamEmail("Oakfield School", "Email · Monday", "Contact details", [L("k7a", "Please confirm your home address and phone number for our records."), L("k7b", "Use the link below by Friday.")], "oakfield-school.example/contacts"),
    right: "check", own: "The school’s parent app on my phone", theirs: "The link in the email I got", alt: { how: "search", text: "The school page I find by searching" },
    say: ["This time the link was real. You could not have known from the email.",
      "The parent app has the same form. You confirm your details there.",
      "The school keeps the details it has."],
    deciding: ["k7a"], reason: "You did not start it, and it uses the name of your son’s school, so you go in through the parent app, real or not." }),
  you({
    id: "l8k-coupon-real", genuine: "genuine", channel: "email", request: "details", offers: true,
    context: "You have never shopped at Maple Market and have no account there.",
    message: scamEmail("Maple Market", "Email · Saturday", "A gift on your birthday", [L("k8a", "Tell us your birthday and get a coupon for 20% off."), L("k8b", "Fill in the form at the link.")], "maple-market.example/birthday"),
    right: "leave",
    say: ["You gave your birthday to a shop you had never used.", "There is nobody to check with: you have no account with Maple Market.", "You deleted it."],
    deciding: ["k8a"], reason: "You did not start it and you have no account with them, so you leave it, real or not." }),
  exItem({
    id: "l8x-gift", strand: Y, channel: "chat", request: "details",
    context: "You met Alex in an online game three months ago. You have never met or spoken by phone.",
    prompt: "Alex writes to you. What do you say?", from: "Alex", detail: "Chat in the game",
    turns: [
      { lines: ["I want to send you a gift for your birthday!", "What is your full name, your home address and your date of birth?"], push: "It is friendly and flattering.",
        give: "Send him your name, address and birthday", hold: "Tell him to send the gift inside the game instead", leave: "Stop replying" },
      { lines: ["It is coming from overseas, so the customs form needs your Social Security number too."], push: "It adds a reason that sounds official.",
        give: "Send him everything", hold: "Tell him you will think about it", leave: "Stop replying" },
      { lines: ["I already paid for it. You are hurting my feelings. Friends trust each other."], push: "It makes you feel guilty.",
        give: "Send him everything", leave: "Stop replying" }],
    gave: "No gift came. A credit card was opened in your name two months later.",
    left: "You stopped replying. Alex tried twice more, then went quiet.",
    reason: "You know Alex only online, so you leave it. Your name, address, birthday and number are what someone needs to pass as you." }),

  // ----- held in reserve for the review -----
  you({
    id: "l8r-ssn-fake", genuine: "scam", channel: "sms", request: "details",
    context: "You bank with Calderwood, and its app is on your phone.",
    message: scamSms("Calderwood Bank", "Text message · 5:05 PM", [L("r1a", "Your online banking will be turned off today."), L("r1b", "Confirm your Social Security number at the link to keep it on.")], "calderwood-keep.example/on"),
    right: "check", own: "The Calderwood app, opened myself", theirs: "The link in the text I got", alt: { how: "reply", text: "Reply to the text I got and find out why" },
    say: ["The page kept your number. An account was opened in your name.", "The app shows online banking working as usual.", "You are safe, but it uses your bank’s name, and the app settles it."],
    deciding: ["r1b"], reason: "You did not start it, and it uses your bank’s name, so you check in the app." }),
  you({
    id: "l8r-quote-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You opened the Linden Mutual app and tapped “Get a quote” for car insurance.",
    message: scamPopup("Linden Mutual", "In the app", [L("r2a", "Enter your driver’s license number."), L("r2b", "Your quote takes a minute.")], "Next"),
    right: "act",
    say: ["You got your quote a minute later.", "Not needed: you opened the app and chose to get a quote.", "You get no quote."],
    deciding: ["r2a"], reason: "You started it: you opened the app and tapped “Get a quote” yourself." }),
  you({
    id: "l8r-wrong-fake", genuine: "scam", channel: "sms", request: "details",
    context: "A number you do not know texts you.",
    message: scamSms("Unknown number", "Text message · 9:30 PM", [L("r3a", "Sorry, wrong number! But you seem nice."), L("r3b", "What is your name, and where do you live?")]),
    right: "leave",
    say: ["A friendly chat followed for weeks, and then an “investment.”", "There is nobody to check with: you do not know who it is.", "You did not reply."],
    deciding: ["r3b"], reason: "You do not know who it is, so you leave it, however nice it sounds." })
]);
})();
