// Scams, lesson 10 "When it pushes": the worked call; six calls and chats whose pressure rises each time the learner holds off (a bank "fraud team" with a
// safe account, a grandchild's copied voice, a boss who wants gift cards, a courier who wants a code, a buyer's link, an online friend's investment) mixed
// with six real messages that hurry you; ten banners over the busy task, half real; the check: three new calls that push and three real messages; and three
// held in reserve. The move is the rule's (plan.md, "The rule"), said out loud: "I'll call back on the number I have," then hang up and do it, or leave it
// (S6, S10, S14, S19, S20). Invented senders and people.
// A real call or chat that you started, which hurries you as real ones sometimes do: staying with it is right (the rule's step 2), and hanging up costs
// you. Two turns; holding off meets more of the same hurry, as in a call that pushes (lesson standard 3.7, V74). Used by lessons 10 and 11.
// spec: { id, strand, channel, request, context, prompt, from, detail, turns: [{ lines, push, stay, hold, leave }, { lines, push, stay, leave }], stayed, hung, reason }
const realExItem = spec => {
  const [a, b] = spec.turns, at = wayHash(spec.id);
  const turn = (t, opts, n) => ({ lines: t.lines.map((text, k) => ({ id: `${spec.id}-${n}${k}`, text })), push: t.push, options: [...opts.slice(at % opts.length), ...opts.slice(0, at % opts.length)] });
  return { id: spec.id, strand: spec.strand, facets: { genuine: "genuine", channel: spec.channel, request: spec.request },
    blocks: [{ kind: "prose", text: spec.context }],
    asks: [{ id: "call", kind: "exchange", prompt: spec.prompt, form: spec.channel, from: spec.from, detail: spec.detail, start: "one",
      turns: {
        one: turn(a, [{ id: "stay0", text: a.stay, end: "stayed" }, { id: "hold0", text: a.hold, goto: "two" }, { id: "leave0", text: a.leave, end: "hung" }], 0),
        two: turn(b, [{ id: "stay1", text: b.stay, end: "stayed" }, { id: "leave1", text: b.leave, end: "hung" }], 1) },
      ends: { stayed: { ok: true, then: spec.stayed }, hung: { ok: false, then: spec.hung } } }],
    deciding: [], reason: spec.reason };
};
(() => {
const L = scamLine;
const P = "pushes";
const push = spec => scamItem({ strand: P, ...spec });
const pushEx = spec => exItem({ strand: P, ...spec });
// a message over the busy task: the banner first, then what you know (the busy task opens each question on its banner, lesson standard 4.4)
const busy = spec => { const item = push({ ...spec, context: undefined }); return { ...item, blocks: [spec.message, { kind: "prose", text: spec.context }] }; };
FC.items("scams", [
  // ----- the worked call -----
  push({
    id: "l10w-safe", genuine: "scam", channel: "call", request: "money",
    context: "You bank with Calderwood. Its number is on your card.",
    message: scamCall("Calderwood fraud team", "Incoming call · 7:45 PM", [L("w1a", "Someone is draining your account as we speak."), L("w1b", "Move your savings to the safe account I give you, now. Don’t hang up, or I can’t protect you."), L("w1c", "And don’t tell anyone at the branch: one of them is in on it.")]),
    right: "check", own: "Hang up and call the number on my card", theirs: "Call back the number my phone shows for the call", theirsHow: "callerid", alt: { how: "transfer", text: "Get put through to the branch manager" },
    say: ["The “safe account” was the caller’s, and your savings were gone within the hour.",
      "The bank says your account is fine and nobody called.",
      "You are safe, but it uses your bank’s name, and the card’s number settles it in a minute."],
    deciding: ["w1b"], reason: "Hurry, fear, “don’t hang up” and “tell no one” are each a reason to stop. A safe account settles it, and it uses your bank’s name, so you hang up and call the card’s number.",
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants your savings moved, now." },
      { id: "push", does: "Notice the push.", working: "A loss happening now, an order to stay on the line, and to tell no one. Each is a reason to stop." },
      { id: "know", does: "See whether you deal with them.", working: "It uses your bank’s name, and you have the number on your card." },
      { id: "do", does: "Choose.", working: "Say “I’ll call back on the number I have,” hang up, and call the card’s number.", ask: "act" }] }),

  // ----- the first group: six that push, and six real messages that hurry you -----
  pushEx({
    id: "l10x-safe", channel: "call", request: "money",
    context: "You bank with Ashgrove. Its number is on your card.",
    prompt: "Ashgrove’s fraud team calls. What do you say?", from: "Ashgrove fraud team", detail: "Incoming call · 6:20 PM",
    turns: [
      { lines: ["Someone inside the bank is stealing from accounts like yours.", "Move your $8,000 to a safe account tonight."], push: "It frightens you with a theft happening now.",
        give: "Move the money to the account he gives", hold: "Tell him you will go to the branch tomorrow", leave: "End the call, and call the number on my card myself" },
      { lines: ["Tomorrow is too late. And the branch staff are part of it, so you cannot tell them."], push: "It cuts off the people who could help.",
        give: "Move the money now", hold: "Tell him you need to talk to your husband first", leave: "End the call, and call the number on my card myself" },
      { lines: ["If you hang up, the bank cannot cover your loss."], push: "It threatens the cost of stopping.",
        give: "Move the money now", leave: "End the call, and call the number on my card myself" }],
    gave: "The $8,000 went to the caller’s account and was gone that night.",
    left: "You called the number on your card. Ashgrove said your money was safe and nobody had called.",
    reason: "It uses your bank’s name, so you check on the card’s number. A safe account and secrecy settle it; every push was to stop you from calling." }),
  pushEx({
    id: "l10x-grandkid", channel: "call", request: "money",
    context: "Your grandson is Eli. His number is saved in your phone, and so is his mother’s.",
    prompt: "A call comes from a number you do not know. What do you say?", from: "Unknown number", detail: "Incoming call · 11:15 PM",
    turns: [
      { lines: ["Grandpa, it’s Eli. I’m in trouble. I hit a car and they arrested me.", "I need $3,000 for bail. Please don’t tell Mom."], push: "It sounds like him, scared, and wants a secret.",
        give: "Send the $3,000", hold: "Tell him you want to talk to his lawyer", leave: "Say you will call back, hang up, and call Eli’s saved number" },
      { lines: ["This is his lawyer. Bail must be paid in cash tonight. A courier will come to your door."], push: "It brings in someone who sounds in charge.",
        give: "Get the cash ready for the courier", hold: "Tell him you need to find the money first", leave: "Hang up, and call Eli’s saved number and his mom’s" },
      { lines: ["Eli is crying. If you call anyone, the judge will keep him longer."], push: "It threatens him if you check.",
        give: "Hand the cash to the courier", leave: "Hang up, and call Eli’s saved number and his mom’s" }],
    gave: "The courier took $3,000 in cash. Eli had been home all night.",
    left: "Eli answered his own phone, at home. His voice had been copied.",
    reason: "It uses your grandson’s name, so you check on the numbers you have: his, and his mother’s. A voice can be copied, and secrecy settles it." }),
  pushEx({
    id: "l10x-boss", channel: "chat", request: "money",
    context: "Priya is your boss. Her number is saved in your phone.",
    prompt: "A text says it is Priya. What do you write back?", from: "Priya (new number)", detail: "Text message · 10:05 AM",
    turns: [
      { lines: ["It’s Priya, on my other phone. I’m in a meeting.", "Buy six $100 gift cards for client gifts and send me the codes."], push: "It uses your boss’s name and her authority.",
        give: "Buy the cards and send the codes", hold: "Tell her you will do it after lunch", leave: "Stop, and call Priya on her saved number" },
      { lines: ["No, the client is here now. I need them in 15 minutes. Don’t call, I can’t talk."], push: "It hurries you and blocks a call.",
        give: "Buy the cards and send the codes", hold: "Tell her you will need her to sign for it", leave: "Call Priya on her saved number anyway" },
      { lines: ["I’m disappointed. I thought I could count on you."], push: "It leans on your job.",
        give: "Buy the cards and send the codes", leave: "Call Priya on her saved number anyway" }],
    gave: "The codes were used within minutes. Priya had sent nothing.",
    left: "Priya answered her saved number from her desk. She had sent nothing, and warned the office.",
    reason: "It uses your boss’s name, so you check on her saved number. Gift cards and “don’t call” settle it." }),
  pushEx({
    id: "l10x-courier", channel: "call", request: "login",
    context: "You are not waiting for anything from Quillfeather Post and have no account with it.",
    prompt: "Quillfeather Post calls. What do you say?", from: "Quillfeather Post", detail: "Incoming call · 2:40 PM",
    turns: [
      { lines: ["We have a parcel for you. I just sent a code to your phone.", "Read it to me to confirm the delivery."], push: "It sounds routine.",
        give: "Read him the code", hold: "Tell him to leave the parcel at the door", leave: "Tell him I don’t do this on the phone, and end the call" },
      { lines: ["It can’t be left without the code. It goes back today and you pay the return fee."], push: "It adds a cost.",
        give: "Read him the code", hold: "Tell him to bring it tomorrow instead", leave: "Tell him I don’t do this on the phone, and end the call" },
      { lines: ["Just the six numbers. It takes two seconds. Everyone does it."], push: "It makes it sound small and normal.",
        give: "Read him the code", leave: "Tell him I don’t do this on the phone, and end the call" }],
    gave: "The code let him into one of your accounts. There was no parcel.",
    left: "You hung up. No parcel ever came, because there was none.",
    reason: "You have no dealings with Quillfeather Post, so you hang up. A code is only for you to type, never to read to anyone." }),
  pushEx({
    id: "l10x-buyer", channel: "chat", request: "details",
    context: "You listed a bike on Bramblecote Market. A buyer you have never met writes in the app’s chat.",
    prompt: "The buyer writes. What do you write back?", from: "Buyer on Bramblecote Market", detail: "Chat about the bike",
    turns: [
      { lines: ["I want the bike at full price!", "I paid with Swift Escrow. Enter your card details at this link to get the money."], push: "It dangles a sale at full price.",
        give: "Enter your card details at the link", hold: "Tell him you will open the link after work", leave: "Stop replying" },
      { lines: ["I already paid. The money is waiting. If you don’t take it in an hour, it is lost."], push: "It says the money will run out.",
        give: "Enter your card details at the link", hold: "Tell him you need to find your card first", leave: "Stop replying" },
      { lines: ["I will report you to Bramblecote for taking my money."], push: "It threatens you.",
        give: "Enter your card details", leave: "Stop replying" }],
    gave: "The page kept your card number, and charges you never made followed.",
    left: "You stopped replying. The bike sold the next week, paid in the app.",
    reason: "You do not know the buyer, so you leave it. A sale that pays you through a link you never wanted is the trick." }),
  pushEx({
    id: "l10x-invest", channel: "chat", request: "money",
    context: "You met Lena on a cooking forum three months ago. You have never met or spoken by phone.",
    prompt: "Lena writes to you. What do you say?", from: "Lena", detail: "Chat on the cooking forum",
    turns: [
      { lines: ["My trading app made me $6,000 this year.", "Put in $1,000 tonight and I will show you how."], push: "It dangles money and a helpful friend.",
        give: "Put in the $1,000", hold: "Tell her to send proof of her gains", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["Here is my screen. The offer closes at midnight."], push: "It shows proof she made and a deadline.",
        give: "Put in the $1,000", hold: "Tell her you will put in $100 first", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["I thought we were friends. I am trying to help you."], push: "It plays on the friendship.",
        give: "Put in the $1,000", leave: "Send nothing, and tell someone I know in person" }],
    gave: "The app showed gains. To take any out it wanted a fee, and nothing came back.",
    left: "You sent nothing and told your brother, who had heard of this offer.",
    reason: "You know Lena only online, so you send nothing and tell someone you know in person. Proof and deadlines come from her." }),
  push({
    id: "l10g-code-real", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” on the Alderwick sign-in page.",
    message: scamSms("Alderwick", "Text message · 9:01 AM", [L("g1a", "Your code is 551 902."), L("g1b", "It runs out in 5 minutes. Type it on the page you are on.")]),
    right: "act",
    say: ["You signed in.", "Not needed: you asked for the code a moment ago.", "The code ran out, and you were still signed out."],
    deciding: ["g1b"], reason: "You started it: you tapped “Text me a code” a moment ago. The five minutes is how codes work, not a push." }),
  push({
    id: "l10g-alert-real", genuine: "genuine", channel: "sms", request: "details", offers: true,
    context: "You bank with Ashgrove, and its app is on your phone.",
    message: scamSms("Ashgrove", "Text message · 12:30 PM", [L("g2a", "Did you just try to spend $900 at Rowan Furniture?"), L("g2b", "Reply Y or N now. Your card is on hold until you answer.")]),
    right: "check", own: "The Ashgrove app on my phone", theirs: "Reply to the text I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Ashgrove" },
    say: ["This time it was your bank. You could not have known from the text.",
      "The app shows the same question. You answer there, and your card works again.",
      "Your card stays on hold until you deal with it."],
    deciding: ["g2b"], reason: "You did not start it, and it uses your bank’s name, so you answer in the app. Hurry alone does not make it a scam, and does not make it real." }),
  push({
    id: "l10g-insure-real", genuine: "genuine", channel: "email", request: "money", offers: true,
    context: "Your home is insured with Linden Mutual. The Linden app is on your phone.",
    message: scamEmail("Linden Mutual", "Email · Tuesday", "Last notice", [L("g3a", "Your policy ends on Friday."), L("g3b", "Pay the $96 at the link to keep it.")], "linden-mutual.example/renew"),
    right: "check", own: "The Linden app on my phone", theirs: "The link in the email I got", alt: { how: "reply", text: "Reply to the email I got and get more time" },
    say: ["This time the link was real. You could not have told.", "The app shows the same bill. You pay it there.", "Your policy ends on Friday."],
    deciding: ["g3b"], reason: "You did not start it, and it uses your insurer’s name, so you go in through the app. A deadline is not proof either way." }),
  push({
    id: "l10g-seller-real", genuine: "genuine", channel: "chat", request: "money",
    context: "You offered $80 for a desk on Bramblecote Market, and the seller said yes.",
    message: scamChat("Seller on Bramblecote Market", "Chat about the desk", [L("g4a", "Two other people want it."), L("g4b", "Pay the $80 in the app in the next hour to keep it.")]),
    right: "act",
    say: ["You paid in the app and got the desk.", "The app showed the same sale. Not needed: you made the offer.", "The desk went to someone else."],
    deciding: ["g4b"], reason: "You started it: you made the offer, and the money goes through the app. Some real sellers hurry you too." }),
  realExItem({
    id: "l10x-pharmacy", strand: P, channel: "call", request: "money",
    context: "You called Elmside Pharmacy on the number printed on your pill bottle, to have a refill sent to your home.",
    prompt: "The pharmacist answers. What do you say?", from: "Elmside Pharmacy", detail: "Your call, a minute in",
    turns: [
      { lines: ["I can send it with today’s driver.", "The $12 copay is due now. Read me your card number when you are ready."], push: "It hurries you: the driver leaves soon.",
        stay: "Read her the card number", hold: "Tell her you will call back later with the card", leave: "Hang up and call the bottle’s number again" },
      { lines: ["The driver leaves in ten minutes. After that it is tomorrow."], push: "It gives a deadline.",
        stay: "Read her the card number", leave: "Hang up, and call again tomorrow" }],
    stayed: "The refill came that evening.",
    hung: "Nothing was wrong: you had called the number on your own bottle. The refill came a day late.",
    reason: "You started it: you called the number on your own pill bottle, so you are talking to your pharmacy. A hurry in a call you placed yourself is no reason to hang up." }),
  push({
    id: "l10g-boss-real", genuine: "genuine", channel: "sms", request: "money",
    context: "This morning Priya, your boss, told you at your desk to order printer paper from Thistlewick on the company card before 3 PM.",
    message: scamSms("Priya", "Text message · 2:30 PM, from her saved number", [L("g6a", "Don’t forget the paper!"), L("g6b", "Order it before 3 on the company card.")]),
    right: "act",
    say: ["You ordered the paper, and it came the next day.", "Priya said yes. Not needed: she told you this herself this morning.", "The office runs out of paper."],
    deciding: ["g6b"], reason: "You agreed this beforehand: Priya told you at your desk this morning, and this is exactly that." }),

  // ----- the second group: ten banners over the busy task, half real -----
  busy({
    id: "l10b-code-real", genuine: "genuine", channel: "banner", request: "login",
    message: scamBanner("Alderwick", "Now", [L("b1a", "Your reset code is 640 118. Type it in the app.")]),
    context: "A moment ago you tapped “Forgot password” in the Alderwick app.",
    right: "act", say: ["You reset your password.", "Not needed: you tapped “Forgot password” a moment ago.", "The code runs out."],
    deciding: ["b1a"], reason: "You started it: you tapped “Forgot password” a moment ago." }),
  busy({
    id: "l10b-cabin-real", genuine: "genuine", channel: "banner", request: "money",
    message: scamBanner("Mia", "Now", [L("b2a", "Booked! Send your $120 in PayLane like we said.")]),
    context: "Last week the group agreed Mia would book the cabin and each of you would send her $120 in PayLane.",
    right: "act", say: ["You sent Mia $120.", "Not needed: the group agreed the amount and the way to pay.", "Mia is out your share."],
    deciding: ["b2a"], reason: "You agreed this beforehand: the amount and the way to pay." }),
  busy({
    id: "l10b-checkout-real", genuine: "genuine", channel: "banner", request: "login",
    message: scamBanner("Ashgrove Bank", "Now", [L("b3a", "Code 3312 approves your $64 payment to Thistlewick.")]),
    context: "You are paying for an order on Thistlewick right now with your Ashgrove card, and the page wants a code.",
    right: "act", say: ["Your order went through.", "Not needed: you are placing the order right now.", "Your order does not go through."],
    deciding: ["b3a"], reason: "You started it: you are paying Thistlewick with your card this minute, and your bank sends the code for it." }),
  busy({
    id: "l10b-gas-real", genuine: "genuine", channel: "banner", request: "details", offers: true,
    message: scamBanner("Penhallow CU", "Now", [L("b4a", "$57 at Dunmore Gas: was this you? Reply Y or N.")]),
    context: "You bank with Penhallow, and its app is on your phone.",
    right: "check", own: "The Penhallow app on my phone", theirs: "Reply to the message I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Penhallow" },
    say: ["This time it was real. You could not have known.", "The app shows the same question, and you answer there.", "Your card may be held until you answer."],
    deciding: ["b4a"], reason: "You did not start it, and it uses your credit union’s name, so you answer in the app." }),
  busy({
    id: "l10b-phone-real", genuine: "genuine", channel: "banner", request: "money", offers: true,
    message: scamBanner("Kestrel Mobile", "Now", [L("b5a", "Your autopay failed. Pay $45 at the link today.")]),
    context: "Your phone service is with Kestrel Mobile, and its app is on your phone.",
    right: "check", own: "The Kestrel app on my phone", theirs: "The link in the message I got", alt: { how: "reply", text: "Reply to the message I got and pay later" },
    say: ["This time the link was real. You could not have told.", "The app shows the failed autopay, and you pay there.", "The bill stays unpaid."],
    deciding: ["b5a"], reason: "You did not start it, and it uses your phone company’s name, so you go in through the app." }),
  busy({
    id: "l10b-locked-fake", genuine: "scam", channel: "banner", request: "login",
    message: scamBanner("Calderwood", "Now", [L("b6a", "Account locked. Sign in at the link within 1 hour.")]),
    context: "You bank with Calderwood, and its app is on your phone.",
    right: "check", own: "The Calderwood app, opened myself", theirs: "The link in the message I got", alt: { how: "search", text: "The sign-in page I find by searching" },
    say: ["The page kept your password, and money left your account.", "The app opens as usual. Nothing was locked.", "You are safe, but the app settles it in a minute."],
    deciding: ["b6a"], reason: "You did not start it, and it uses your bank’s name, so you check in the app." }),
  busy({
    id: "l10b-boss-fake", genuine: "scam", channel: "banner", request: "money",
    message: scamBanner("Priya (new number)", "Now", [L("b7a", "In a meeting. Buy 5 gift cards and text me the codes, quick.")]),
    context: "Priya is your boss. Her number is saved in your phone.",
    right: "check", own: "Call Priya on her saved number", theirs: "Reply to the new number", theirsHow: "reply", alt: { how: "search", text: "The office number I find by searching" },
    say: ["The codes were used in minutes. Priya had sent nothing.", "Priya, at her desk, says she sent nothing.", "You are safe, but it uses Priya’s name, and her saved number tells her someone is using it."],
    deciding: ["b7a"], reason: "It uses your boss’s name, so you check on her saved number. Gift cards settle it." }),
  busy({
    id: "l10b-courier-fake", genuine: "scam", channel: "banner", request: "money",
    message: scamBanner("Quillfeather Post", "Now", [L("b8a", "Parcel held. Pay $2.10 at the link to deliver.")]),
    context: "You have no account with Quillfeather Post.",
    right: "leave", say: ["The page took your card number.", "There is nobody to check with: you have no account with them.", "You swiped it away."],
    deciding: ["b8a"], reason: "You have no account with them, so you leave it." }),
  busy({
    id: "l10b-prize-fake", genuine: "scam", channel: "banner", request: "money",
    message: scamBanner("Prize Desk", "Now", [L("b9a", "You won $2,500! Pay the $40 fee to claim.")]),
    context: "You have never heard of Prize Desk.",
    right: "leave", say: ["You paid $40 and nothing came.", "There is nobody to check with: you have no dealings with them.", "You swiped it away."],
    deciding: ["b9a"], reason: "You have no dealings with them, so you leave it. Real prizes are free." }),
  busy({
    id: "l10b-son-fake", genuine: "scam", channel: "banner", request: "money",
    message: scamBanner("Unknown number", "Now", [L("b10a", "Hi Mom, it’s Ben, new number. Phone broke. Can you send $300 for rent today?")]),
    context: "Your son is Ben. His number is saved in your phone.",
    right: "check", own: "Call Ben on his saved number", theirs: "My reply to the new number", theirsHow: "reply", alt: { how: "number", text: "Call the new number back" },
    say: ["The $300 went to a stranger. Ben’s phone was fine.", "Ben answers his saved number. He sent nothing.", "You are safe, but it uses your son’s name, and his saved number settles it."],
    deciding: ["b10a"], reason: "It uses your son’s name, so you check on his saved number, not the new one." }),

  // ----- the check: three new calls that push, and three real messages -----
  pushEx({
    id: "l10k-sim", channel: "call", request: "login",
    context: "Your phone service is with Kestrel Mobile. Its number is on your bill.",
    prompt: "Kestrel calls. What do you say?", from: "Kestrel Mobile", detail: "Incoming call · 4:05 PM",
    turns: [
      { lines: ["Someone is trying to move your number to their phone.", "Read me the code we just sent, and I will stop them."], push: "It frightens you with a theft happening now.",
        give: "Read him the code", hold: "Tell him to stop it without the code", leave: "Tell him I’ll call Kestrel myself, and end the call" },
      { lines: ["I cannot stop it without the code. In two minutes your number is theirs."], push: "It gives a deadline.",
        give: "Read him the code", hold: "Tell him you will go to a Kestrel store", leave: "Tell him I’ll call Kestrel myself, and end the call" },
      { lines: ["If you hang up, I cannot help you, and your bank codes go to them."], push: "It threatens the cost of stopping.",
        give: "Read him the code", leave: "Tell him I’ll call Kestrel myself, and end the call" }],
    gave: "The code let him into your Kestrel account.",
    left: "You called the number on your bill. Kestrel said nobody was moving your number and nobody had called.",
    reason: "It uses your phone company’s name, so you check on the bill’s number. A code read back settles it." }),
  pushEx({
    id: "l10k-nephew", channel: "call", request: "money",
    context: "Your nephew is Sam. His number is saved in your phone, and so is his father’s.",
    prompt: "A call comes from a number you do not know. What do you say?", from: "Unknown number", detail: "Incoming call · 10:40 PM",
    turns: [
      { lines: ["It’s Sam. I’m in jail in another state. I need $1,500 by wire tonight.", "Please don’t tell Dad. He’ll kill me."], push: "It sounds like him, frightened, and wants a secret.",
        give: "Wire the $1,500", hold: "Tell him to put the officer on", leave: "Say you will call back, hang up, and call Sam’s saved number" },
      { lines: ["This is Officer Grant. Your nephew must pay tonight or he stays the weekend."], push: "It brings in someone who sounds in charge.",
        give: "Wire the $1,500", hold: "Tell him you need the jail’s address", leave: "Hang up, and call Sam’s saved number and his dad’s" },
      { lines: ["If you call anyone, his bail doubles."], push: "It threatens him if you check.",
        give: "Wire the $1,500", leave: "Hang up, and call Sam’s saved number and his dad’s" }],
    gave: "The $1,500 was gone by morning. Sam had been at home.",
    left: "Sam’s dad said Sam was asleep upstairs.",
    reason: "It uses your nephew’s name, so you check on the numbers you have. A wire and secrecy settle it, and a voice can be copied." }),
  pushEx({
    id: "l10k-prize", channel: "call", request: "money",
    context: "You have never heard of Prize Line and entered nothing.",
    prompt: "Prize Line calls. What do you say?", from: "Prize Line", detail: "Incoming call · 1:30 PM",
    turns: [
      { lines: ["Congratulations, you have won $25,000!", "Just pay the $200 tax with gift cards to release it."], push: "It dangles a big prize.",
        give: "Buy the gift cards", hold: "Tell him to take the tax out of the prize", leave: "Say “I don’t do this on the phone,” and hang up" },
      { lines: ["The law says it must be paid first. You have until 5 PM, then it goes to the next winner."], push: "It adds a deadline and a rule.",
        give: "Buy the gift cards", hold: "Tell him to mail you the papers", leave: "Say “I don’t do this on the phone,” and hang up" },
      { lines: ["Do you want to throw away $25,000 for $200?"], push: "It makes stopping look foolish.",
        give: "Buy the gift cards", leave: "Say “I don’t do this on the phone,” and hang up" }],
    gave: "The gift cards were emptied, and the prize needed one more fee.",
    left: "You hung up. Prize Line called twice more, and you did not answer.",
    reason: "You have no dealings with them, so you hang up. Real prizes are free, and gift cards settle it." }),
  realExItem({
    id: "l10k-wallet", strand: P, channel: "call", request: "details",
    context: "You lost your wallet. You called the number on your last Calderwood statement to cancel your card.",
    prompt: "The bank answers. What do you say?", from: "Calderwood Bank", detail: "Your call, a minute in",
    turns: [
      { lines: ["I can cancel the card now and send you a new one.", "First, confirm your date of birth and your home address."], push: "It wants your details at once.",
        stay: "Give her your birthday and address", hold: "Tell her you will call back tomorrow", leave: "Hang up and call the statement’s number again" },
      { lines: ["Until I cancel it, anyone who finds your wallet can use the card."], push: "It points to a loss that could really happen.",
        stay: "Give her your birthday and address", leave: "Hang up" }],
    stayed: "The card was canceled at once, and a new one came on Friday.",
    hung: "Nothing was wrong: you had called the number on your own statement. The card stayed open a day longer.",
    reason: "You started it: you called the number on your own statement, so you are talking to your bank. Confirming who you are is how it finds your account." }),
  push({
    id: "l10k-code-real", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” in the Penhallow app.",
    message: scamSms("Penhallow CU", "Text message · 8:12 AM", [L("k1a", "Your code is 207 664."), L("k1b", "Type it in the app now. It runs out in 3 minutes.")]),
    right: "act",
    say: ["You signed in.", "Not needed: you asked for the code a moment ago.", "The code ran out."],
    deciding: ["k1b"], reason: "You started it: you tapped “Text me a code” a moment ago." }),
  push({
    id: "l10k-alert-real", genuine: "genuine", channel: "sms", request: "details", offers: true,
    context: "You bank with Calderwood, and its app is on your phone.",
    message: scamSms("Calderwood", "Text message · 6:50 PM", [L("k2a", "URGENT: $1,240 at Brightway Travel."), L("k2b", "Reply Y if this was you, N if not, within 30 minutes.")]),
    right: "check", own: "The Calderwood app on my phone", theirs: "Reply to the text I got", theirsHow: "reply", alt: { how: "search", text: "The number I find by searching for Calderwood" },
    say: ["This time it was your bank. You could not have known.", "The app shows the alert, and you answer there.", "Your card may be held until you answer."],
    deciding: ["k2b"], reason: "You did not start it, and it uses your bank’s name, so you answer in the app. The hurry decides nothing." }),
  push({
    id: "l10k-dinner-real", genuine: "genuine", channel: "chat", request: "money",
    context: "At lunch your sister Rosa paid, and you told her you would send your $28 in PayLane when she texted.",
    message: scamChat("Rosa", "Chat with your sister", [L("k3a", "Your half of lunch is $28."), L("k3b", "Send it in PayLane today please, rent is due!")]),
    right: "act",
    say: ["You sent Rosa $28.", "A call to Rosa confirmed it. Not needed: you agreed it at lunch.", "Rosa is short for rent."],
    deciding: ["k3a"], reason: "You agreed this at lunch: your half, in PayLane. Her hurry changes nothing." }),

  // ----- held in reserve for the review -----
  pushEx({
    id: "l10r-power", channel: "call", request: "money",
    context: "Your gas is with Dunmore Gas. Its number is on your bill.",
    prompt: "Dunmore Gas calls. What do you say?", from: "Dunmore Gas", detail: "Incoming call · 5:10 PM",
    turns: [
      { lines: ["Your gas will be shut off in an hour for a missed payment.", "Pay $180 by crypto machine now."], push: "It gives a deadline and a threat.",
        give: "Pay at the crypto machine", hold: "Tell him you will pay in the app", leave: "Hang up and call the number on my gas bill" },
      { lines: ["The app can’t take it in time. The crew is on its way."], push: "It closes your way to check.",
        give: "Pay at the crypto machine", leave: "Hang up and call the number on my gas bill" }],
    gave: "The $180 went into a crypto machine and could not be got back.",
    left: "Dunmore Gas said your account was paid.",
    reason: "It uses your gas company’s name, so you check on the bill’s number. Crypto settles it." }),
  pushEx({
    id: "l10r-romance", channel: "chat", request: "money",
    context: "You have chatted with Marco on a dating site for six weeks. You have never met.",
    prompt: "Marco writes. What do you say?", from: "Marco", detail: "Chat on the dating site",
    turns: [
      { lines: ["My mother is in the hospital and they won’t treat her without $2,000.", "Please, you are all I have."], push: "It pulls on your feelings.",
        give: "Send the $2,000", hold: "Tell him to send a photo from the hospital", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["Here she is. Please, there is no time."], push: "It shows proof he made and hurries you.",
        give: "Send the $2,000", leave: "Send nothing, and tell someone I know in person" }],
    gave: "The money was gone, and then there was another emergency.",
    left: "You told a friend, who saw what you could not from inside the chat.",
    reason: "You know Marco only online, so you send nothing and tell someone you know in person." }),
  pushEx({
    id: "l10r-device", channel: "call", request: "device",
    context: "You have no dealings with a Device Security Center.",
    prompt: "A call about your computer. What do you say?", from: "Device Security Center", detail: "Incoming call · 11:00 AM",
    turns: [
      { lines: ["Your computer is sending us virus alerts.", "Install the app I send you so I can fix it."], push: "It frightens you about your computer.",
        give: "Install the app", hold: "Tell him you will restart the computer first", leave: "Say “I don’t do this on the phone,” and hang up" },
      { lines: ["Restarting will erase everything. Install it now."], push: "It threatens a loss.",
        give: "Install the app", leave: "Say “I don’t do this on the phone,” and hang up" }],
    gave: "The app let him into your computer, and then he wanted money to “fix” it.",
    left: "You hung up. The computer was fine.",
    reason: "You have no dealings with them, so you hang up. Real companies do not call you first about your computer." })
]);
})();
