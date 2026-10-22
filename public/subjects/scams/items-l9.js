// Scams, lesson 9 "What looks prove nothing": the worked email, three pairs (a polished scam beside a clumsy real message; the bank's name on your screen
// beside a call you placed; a padlocked copy beside the site you typed), eight mixed on a clock, the eight of the check, and three held in reserve. In
// each, one of the ten wrong beliefs would mislead: good writing, a logo, the padlock, the caller ID, knowing your details, "I rang them", a calm and
// helpful voice, months of chat, "only careless people", "my bank would stop it" (S3, S7, S8, S9, S23, S27, S33). Every answer is the subject's one rule
// (plan.md, "The rule"), never the look. Invented senders and people. About half are real.
(() => {
const L = scamLine;
const K = "looks";
const look = spec => scamItem({ strand: K, ...spec });
FC.items("scams", [
  // ----- the worked email -----
  look({
    id: "l9w-perfect", genuine: "scam", channel: "email", request: "login",
    context: "You bank with Calderwood, and its app is on your phone. Your card ends in 4417.",
    message: scamEmail("Calderwood Bank", "Email · Tuesday 9:12 AM", "A secure message for you", [L("w1a", "Dear Jordan Lee,"), L("w1b", "We have placed a hold on your card ending 4417 to protect you."), L("w1c", "Please sign in through the secure link below to lift it."), L("w1d", "Thank you for banking with Calderwood since 2014.")], "calderwood-secure.example/sign-in"),
    right: "check", own: "The Calderwood app, opened myself", theirs: "The secure link in the email", alt: { how: "search", text: "The sign-in page I find by searching for Calderwood" },
    say: ["The page looked exactly like the bank’s and kept your password. Money left your account that night.",
      "The app shows no hold on your card.",
      "You are safe, but it uses your bank’s name, and the app would have shown you in a minute."],
    deciding: ["w1c"], reason: "Your name, your card’s last digits and perfect writing prove nothing. You did not start it, and it uses your bank’s name, so you check in the app.",
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants you to sign in through its link." },
      { id: "start", does: "See whether you started it.", working: "No. You did nothing with your card that would need this." },
      { id: "know", does: "See whether you deal with them.", working: "Yes: it uses your bank’s name. Its writing, your name and your card’s last digits change nothing." },
      { id: "do", does: "Choose.", working: "Check first, in the Calderwood app.", ask: "act" }] }),

  // ----- the first group: three pairs -----
  look({
    id: "l9p-logo-fake", genuine: "scam", channel: "email", request: "login",
    context: "You bank with Ashgrove, and its app is on your phone. The email has the Ashgrove logo at the top.",
    message: scamEmail("Ashgrove Bank", "Email · Monday", "Important: secure message", [L("p1a", "Ashgrove Bank · Member Services"), L("p1b", "You have one new secure message about your account."), L("p1c", "Sign in at the link below to read it.")], "ashgrove-messages.example/in"),
    right: "check", own: "The Ashgrove app, opened myself", theirs: "The link below the logo", alt: { how: "reply", text: "Reply to the email I got and get the message sent" },
    say: ["The page kept your password, and your account was emptied.",
      "The app shows no new message.",
      "You are safe, but it uses your bank’s name, and the app settles it."],
    deciding: ["p1c"], reason: "A logo and an official name can be copied by anyone. You did not start it, and it uses your bank’s name, so you check in the app." }),
  look({
    id: "l9p-typo-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Mateo mows your lawn. In the spring you agreed $60 a month, sent in PayLane when he texts that he has mowed.",
    message: scamSms("Mateo", "Text message · 7:05 PM", [L("p2a", "hi, mowed today"), L("p2b", "its $60 for may, paylane like ussual thx")]),
    right: "act",
    say: ["You sent Mateo $60, the way you always do.",
      "A call to Mateo confirmed it. Not needed: the amount and the way to pay are what you agreed.",
      "Mateo is still waiting for May."],
    deciding: ["p2b"], reason: "Spelling proves nothing either way. You agreed this with Mateo: $60 a month, in PayLane." }),
  look({
    id: "l9p-callerid-fake", genuine: "scam", channel: "call", request: "login",
    context: "You bank with Penhallow Credit Union. Your screen shows “Penhallow CU.”",
    message: scamCall("Penhallow CU", "Incoming call", [L("p3a", "This is Penhallow. Someone is trying to sign in to your account."), L("p3b", "Read me the code we just texted you so I can block them.")]),
    right: "check", own: "Hang up and call the number on the back of my card", theirs: "Call back the number on my screen", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to the fraud manager" },
    say: ["The code let them into your account, and they moved your money out.",
      "When you call the number yourself, Penhallow says nobody called and nothing is wrong.",
      "You are safe, but it uses your credit union’s name, and the number on your card settles it."],
    deciding: ["p3b"], reason: "The name on your screen can be made to show anything. A code read back settles that it is a scam, and it uses your credit union’s name, so you hang up and call the card’s number yourself." }),
  look({
    id: "l9p-callerid-real", genuine: "genuine", channel: "call", request: "details",
    context: "You lost your Penhallow card. You called the number printed on your old statement to cancel it.",
    message: scamCall("Penhallow CU", "Your call, a minute in", [L("p4a", "I am sorry you lost it. I can cancel it now."), L("p4b", "Can you confirm your home address for the new card?")]),
    right: "act",
    say: ["The old card was canceled and a new one came on Friday.",
      "Not needed: you placed the call, on a number from your own statement.",
      "Your lost card stays open."],
    deciding: ["p4b"], reason: "You started it: you placed the call, on a number from your own statement." }),
  look({
    id: "l9p-padlock-fake", genuine: "scam", channel: "sms", request: "login",
    context: "You have an account with Thistlewick, and its app is on your phone. The page the link opens shows the padlock.",
    message: scamSms("Thistlewick", "Text message · 4:22 PM", [L("p5a", "Your account is locked after three wrong passwords."), L("p5b", "Sign in at the link to unlock it.")], "thistlewick-unlock.example/in"),
    right: "check", own: "The Thistlewick app, opened myself", theirs: "The padlocked page the link opens", alt: { how: "reply", text: "Reply to the text I got and unlock it there" },
    say: ["The padlocked page kept your password. Orders you never made were sent to a stranger.",
      "The app opens as usual. Your account was never locked.",
      "You are safe, but it uses the name of a shop you use, and the app settles it."],
    deciding: ["p5b"], reason: "Most copied pages show the padlock too, so it proves nothing. You did not start it, and it uses a shop you have an account with, so you check in the app." }),
  look({
    id: "l9p-padlock-real", genuine: "genuine", channel: "popup", request: "login",
    context: "You typed Thistlewick’s address yourself, to look at your orders.",
    message: scamPopup("Thistlewick", "On the site you typed", [L("p6a", "Sign in to see your orders."), L("p6b", "Email and password.")], "Sign in"),
    right: "act",
    say: ["You signed in and saw your orders.", "Not needed: you typed the address yourself to sign in.", "You do not see your orders."],
    deciding: ["p6a"], reason: "You started it: you typed the address yourself to sign in." }),

  // ----- the second group: eight mixed, on a clock -----
  look({
    id: "l9g-grandson-fake", genuine: "scam", channel: "call", request: "money",
    context: "Your grandson is Leo. His number is saved in your phone, and so is his mother’s.",
    message: scamCall("Unknown number", "Incoming call · 10:50 PM", [L("g1a", "Grandma, it’s Leo. I crashed Aunt June’s car on Pine Street."), L("g1b", "I need $2,000 for bail tonight. Please don’t tell Mom.")]),
    right: "check", own: "Call Leo on his saved number, and his mom if he does not answer", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "number", text: "Call the jail number he gives me", then: "That number came from the caller, so whoever answers is on his side." },
    say: ["The $2,000 went to a stranger. Leo had been home asleep all night.",
      "Leo answers, sleepy, at home. Nothing happened.",
      "You are safe, but it uses your grandson’s name, and one call to his number settles it."],
    deciding: ["g1b"], reason: "Knowing names and places proves nothing, and voices can be copied. It uses your grandson’s name, so you check on his saved number, or his mother’s. Secrecy settles it." }),
  look({
    id: "l9g-friendly-fake", genuine: "scam", channel: "call", request: "login",
    context: "Your phone service is with Kestrel Mobile. Its number is on your bill.",
    message: scamCall("Kestrel Mobile", "Incoming call · 2:15 PM", [L("g2a", "Hi there! I am so sorry to bother you, this will only take a second."), L("g2b", "Just read me the six-digit code we sent, and you are all set. You have been so helpful!")]),
    right: "check", own: "Hang up and call the number on my Kestrel bill", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to his supervisor while I hold" },
    say: ["The code let them into your Kestrel account.",
      "Kestrel says nobody called and nothing is needed.",
      "You are safe, but it uses your phone company’s name, and the number on your bill settles it."],
    deciding: ["g2b"], reason: "Being friendly is part of the script. A code read back settles it, and it uses your phone company’s name, so you hang up and call the bill’s number." }),
  look({
    id: "l9g-months-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Block them, and keep it to myself", then: "Keeping it to yourself is what the script needs. Someone outside the chat can see what you cannot from inside it." }, 
    context: "You have chatted with Ren on a photo app every day for four months. You have never met or spoken by phone. Ren has never wanted anything.",
    message: scamChat("Ren", "Chat on a photo app", [L("g3a", "I have never told anyone this, but my uncle’s app doubles money in a week."), L("g3b", "Put in $250 and I will help you. I trust you.")], "uncle-trade.example/in"),
    right: "leave",
    say: ["The app showed your $250 growing. To take it out, it wanted a fee, and nothing came back.",
      "There is nothing of yours to check with: everything you know about Ren came from Ren.",
      "You sent nothing."],
    deciding: ["g3b"], reason: "Months of chat with no money wanted is how it starts. You know Ren only online, so you leave it, and you tell someone you know in person." }),
  look({
    id: "l9g-seal-fake", genuine: "scam", channel: "email", request: "money",
    context: "You have never heard of Pemberton Claims Services, a company.",
    message: scamEmail("Pemberton Claims Services", "Email · Thursday", "OFFICIAL NOTICE · Ref. 2026-4471", [L("g4a", "Seal of the Claims Office · Payments Division"), L("g4b", "A payment of $3,000 is waiting for you."), L("g4c", "Pay the $75 processing fee at the link to release it.")], "benefits-dept-release.example/fee"),
    right: "leave",
    say: ["You paid $75 and no payment ever came.",
      "There is nobody to check with: you have no dealings with them.",
      "You deleted it."],
    deciding: ["g4c"], reason: "A seal and an official name can be made up by anyone. You have no dealings with them, so you leave it, and a fee to get money you are owed is the trick." }),
  look({
    id: "l9g-alert-real", genuine: "genuine", channel: "sms", request: "details", offers: true,
    context: "You bank with Calderwood, and its app is on your phone. You did buy paint at Ferris Hardware today.",
    message: scamSms("Calderwood", "Text message · 5:40 PM", [L("g5a", "CALDERWOOD ALERT: $412.18 at FERRIS HARDWARE."), L("g5b", "Was this you? Reply Y or N.")]),
    right: "check", own: "The Calderwood app on my phone", theirs: "Reply Y to the text I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Calderwood" },
    say: ["This time it was your bank. You could not have known from the text.",
      "The app shows the same question, and you tap “Yes, this was me.” Your card keeps working.",
      "Your bank may hold your card until it hears from you."],
    deciding: ["g5b"], reason: "Capital letters and a short text prove nothing either way. You made the purchase, but you did not start this text, and a text is no proof it is your bank. It uses your bank’s name, so you answer in the app." }),
  look({
    id: "l9g-sitter-real", genuine: "genuine", channel: "chat", request: "money",
    context: "Nia looks after your kids on Saturdays. You agreed $15 an hour, sent in PayLane after each Saturday.",
    message: scamChat("Nia", "Chat with Nia", [L("g6a", "thanks for today!! 5 hrs"), L("g6b", "$75 on paylane pls :)")]),
    right: "act",
    say: ["You sent Nia $75, as you agreed.",
      "A call to Nia confirmed it. Not needed: it is the rate and the way to pay you agreed.",
      "Nia is still waiting for Saturday’s pay."],
    deciding: ["g6b"], reason: "You agreed this: $15 an hour, in PayLane after each Saturday. Five hours is $75." }),
  look({
    id: "l9g-plain-real", genuine: "genuine", channel: "popup", request: "money",
    context: "You opened the Hollis Power app and tapped “Pay my bill.” The screen looks old and plain.",
    message: scamPopup("Hollis Power", "In the app", [L("g7a", "AMOUNT DUE: $84.00"), L("g7b", "PAY NOW FROM SAVED ACCOUNT")], "PAY"),
    right: "act",
    say: ["Your bill was paid.", "Not needed: you opened the app yourself and tapped “Pay my bill.”", "Your bill stays unpaid."],
    deciding: ["g7b"], reason: "How a screen looks proves nothing. You started it: you opened the app and tapped “Pay my bill.”" }),
  look({
    id: "l9g-paper-real", genuine: "genuine", channel: "email", request: "money", offers: true,
    context: "You have never read The Bay Times and have no account there.",
    message: scamEmail("The Bay Times", "Email · Sunday", "OFFICIAL OFFER: Subscriber Services", [L("g8a", "Read The Bay Times for $1 a week."), L("g8b", "Subscribe at the link today.")], "baytimes.example/subscribe"),
    right: "leave",
    say: ["You started paying for a paper you had not been looking for.",
      "There is nobody to check with: you have no account with The Bay Times.",
      "You deleted it."],
    deciding: ["g8b"], reason: "You did not start it and you have no account with them, so you leave it, real or not." }),

  // ----- the check: eight new -----
  look({
    id: "l9k-order-fake", genuine: "scam", channel: "email", request: "money",
    context: "You have an account with Thistlewick. Your last order was number 4471.",
    message: scamEmail("Thistlewick", "Email · Wednesday", "Order #4471: payment problem", [L("k1a", "Hello, we could not charge your card for order #4471."), L("k1b", "Please update your card at the link within 24 hours, or the order is canceled.")], "thistlewick-orders.example/card"),
    right: "check", own: "My order page, in the Thistlewick app", theirs: "The link in the email I got", alt: { how: "search", text: "The order page I find by searching for Thistlewick" },
    say: ["The page took your card number, and charges you never made followed.",
      "The order page shows #4471 paid and on its way.",
      "You are safe, but it uses the name of a shop you use, and the order page settles it."],
    deciding: ["k1b"], reason: "Knowing your order number proves nothing. You did not start it, and it uses the name of a shop you have an account with, so you check in the app." }),
  look({
    id: "l9k-safe-fake", genuine: "scam", channel: "call", request: "money",
    context: "You bank with Ashgrove. Your screen shows “Ashgrove Bank.”",
    message: scamCall("Ashgrove Bank", "Incoming call", [L("k2a", "This is the Ashgrove fraud team. Your savings are at risk."), L("k2b", "Move them now to the safe account I give you. I will stay on the line.")]),
    right: "check", own: "Hang up and call the number on my card", theirs: "Call back the number on my screen", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to a manager" },
    say: ["The “safe account” was the scammer’s, and the savings were gone.",
      "When you call the card’s number, Ashgrove says your savings are fine and nobody called.",
      "You are safe, but it uses your bank’s name, and the card’s number settles it."],
    deciding: ["k2b"], reason: "The bank’s name on your screen proves nothing. A “safe account” settles it, and it uses your bank’s name, so you hang up and call the card’s number." }),
  look({
    id: "l9k-rang-fake", genuine: "scam", channel: "call", request: "device",
    context: "A pop-up on your laptop said it was infected and gave a number. You called it. A man answers.",
    message: scamCall("Laptop Help Desk", "Your call to the pop-up’s number", [L("k3a", "Yes, I can see the virus from here."), L("k3b", "Install the app I send you so I can clean your laptop.")]),
    right: "leave",
    say: ["The app let him into your laptop. Then he wanted $300 for the “cleaning.”",
      "There is nobody to check with: the only number you have came from the pop-up.",
      "You hung up and closed the pop-up. The laptop was fine."],
    deciding: ["k3b"], reason: "Calling a number a pop-up gave you is not starting it. You have no dealings with the man who answered, so you hang up." }),
  look({
    id: "l9k-trip-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Block them, and keep it to myself", then: "Keeping it to yourself is what the script needs. Someone outside the chat can see what you cannot from inside it." }, 
    context: "You met Sam on a hiking forum two months ago. You have never met or spoken by phone. Sam has always been kind and has never wanted anything.",
    message: scamChat("Sam", "Chat on the hiking forum", [L("k4a", "I can finally come and see you next month!"), L("k4b", "I just need $400 for the travel papers. Can you send it by gift card?")]),
    right: "leave",
    say: ["The gift card was emptied, and then the papers needed more.",
      "There is nothing of yours to check with: Sam is the only one who can speak for Sam.",
      "You sent nothing."],
    deciding: ["k4b"], reason: "Kindness and two months with no money wanted prove nothing. You know Sam only online, so you leave it, and you tell someone you know in person." }),
  look({
    id: "l9k-cleaner-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Rosa cleans your house every other Friday. You agreed $90 each time, in PayLane.",
    message: scamSms("Rosa (cleaning)", "Text message · Friday 3:30 PM", [L("k5a", "all done today, the oven to"), L("k5b", "$90 paylane when u can")]),
    right: "act",
    say: ["You sent Rosa $90, as agreed.", "A call to Rosa confirmed it. Not needed: it is the amount and way you agreed.", "Rosa is still waiting for her pay."],
    deciding: ["k5b"], reason: "Spelling proves nothing. You agreed this with Rosa: $90 each time, in PayLane." }),
  look({
    id: "l9k-card-real", genuine: "genuine", channel: "email", request: "login", offers: true,
    context: "You bank with Penhallow, and its app is on your phone. Your old card runs out this month.",
    message: scamEmail("penhallow cu", "Email · Tuesday", "new card", [L("k6a", "your new debit card is in the mail"), L("k6b", "when it comes, sign in at the link to turn it on")], "penhallow.example/activate"),
    right: "check", own: "Penhallow’s app, once the card comes", theirs: "The link in the email I got", alt: { how: "search", text: "The number I find by searching for Penhallow" },
    say: ["This time the link was real. You could not have told from the email.",
      "The card came, and you turned it on in the app.",
      "The new card stays off until you turn it on."],
    deciding: ["k6b"], reason: "Writing with no capitals proves nothing either way. You did not start it, and it uses your credit union’s name, so you go in through the app." }),
  look({
    id: "l9k-water-real", genuine: "genuine", channel: "popup", request: "money",
    context: "You typed the city water department’s address from your bill and opened “Pay.” The page is plain and old-looking.",
    message: scamPopup("City Water", "On the site you typed", [L("k7a", "Balance: $46.20"), L("k7b", "Enter your card to pay.")], "Pay"),
    right: "act",
    say: ["Your water bill was paid.", "Not needed: you typed the address from your bill and chose to pay.", "Your bill stays unpaid."],
    deciding: ["k7b"], reason: "A plain page proves nothing. You started it: you typed the address from your own bill and chose to pay." }),
  look({
    id: "l9k-catalog-real", genuine: "genuine", channel: "email", request: "money", offers: true,
    context: "You have never bought from Larch & Pine and have no account there.",
    message: scamEmail("Larch & Pine", "Email · Monday", "Our fall catalog", [L("k8a", "Larch & Pine · Since 1952"), L("k8b", "Order our wool blanket for $89 at the link.")], "larchandpine.example/blanket"),
    right: "leave",
    say: ["You bought a blanket you had not been looking for.", "There is nobody to check with: you have no account with Larch & Pine.", "You deleted it."],
    deciding: ["k8b"], reason: "Looking old and established proves nothing. You did not start it and you have no account with them, so you leave it, real or not." }),

  // ----- held in reserve for the review -----
  look({
    id: "l9r-voice-fake", genuine: "scam", channel: "call", request: "money",
    context: "Your daughter is Maya. Her number is saved in your phone, and so is her husband’s.",
    message: scamCall("Unknown number", "Incoming call · 9:30 PM", [L("r1a", "Mom, it’s me, Maya. I lost my phone and my wallet in the city."), L("r1b", "Send $600 by wire to this friend so I can get home.")]),
    right: "check", own: "Call Maya on her saved number, and her husband if she does not answer", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to her friend" },
    say: ["The $600 went to a stranger. Maya was at home.", "Maya’s husband answers and hands her the phone. She is fine.", "You are safe, but it uses your daughter’s name, and her saved number settles it."],
    deciding: ["r1b"], reason: "Her voice and her name prove nothing; voices can be copied. It uses your daughter’s name, so you check on the numbers you have. A wire settles it." }),
  look({
    id: "l9r-plain-real", genuine: "genuine", channel: "sms", request: "money",
    context: "At dinner your friend Omar paid, and you said you would send him your $32 in PayLane when he texted.",
    message: scamSms("Omar", "Text message · 10:10 PM", [L("r2a", "ur share is 32"), L("r2b", "paylane")]),
    right: "act",
    say: ["You sent Omar $32.", "A call to Omar confirmed it. Not needed: you agreed it at dinner.", "Omar is still out your share."],
    deciding: ["r2a"], reason: "You agreed this at dinner: your share, in PayLane, when he texted." }),
  look({
    id: "l9r-badge-fake", genuine: "scam", channel: "email", request: "details",
    context: "You have never heard of Records Check Services, a company.",
    message: scamEmail("Records Check Services", "Email · Tuesday", "SEALED NOTICE · Case 88-114", [L("r3a", "Your identity file is incomplete."), L("r3b", "Send your Social Security number and birthday to close the file.")]),
    right: "leave",
    say: ["Your number was used to open a credit card in your name.", "There is nobody to check with: you have no dealings with them.", "You deleted it."],
    deciding: ["r3b"], reason: "A seal and an official name prove nothing. You have no dealings with them, so you leave it." })
]);
})();
