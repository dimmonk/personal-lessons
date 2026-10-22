// Scams, lesson 6 "Money to strangers": the worked chat, two pairs (a script and the real request for money it copies), eight mixed messages on a clock
// with a chat that pushes, the eight of the check with another chat, and three held in reserve. The money goes to someone you only know online, to release
// a prize, a loan or a job, to get lost money back, or to family and friends. Every answer is the subject's one rule (plan.md, "The rule"): money you
// agreed beforehand is sent; money someone you know asks for out of the blue is checked on the number you have; money for anyone else is left, and when
// that is someone you know only online, you also tell someone you know in person. Invented senders and people. About half are real.
(() => {
const L = scamLine;
const S6 = "strangers";
const str = spec => scamItem({ strand: S6, ...spec });
FC.items("scams", [
  // ----- the worked chat -----
  str({
    id: "w-trade", genuine: "scam", channel: "chat", request: "money", tell: true,
    context: "You met Mei on a hobby forum three months ago. You have never met her or heard her voice.",
    message: scamChat("Mei", "Chat on the hobby forum", [L("w1a", "I made $4,000 this month with a trading app."), L("w1b", "Put in $500 at this link and I will show you how.")], "trade-mei.example/join"),
    right: "leave",
    say: ["You put in $500, and the app showed it growing. To take it out, it wanted a fee, and nothing came back.",
      "There is nothing of yours to check with: everything you know about Mei came from Mei.",
      "You sent nothing."],
    deciding: ["w1b"], reason: "Someone you know only online is not someone you know, so you leave it. Because she wants money, you also tell someone you know in person.",
    steps: [
      { id: "want", does: "See what it wants.", working: "It wants $500, put in through a link." },
      { id: "start", does: "See whether you started it.", working: "You did not. A friend you only know online came with a way to make money." },
      { id: "know", does: "See whether you know her.", working: "Only online. Her name, her photos and her app all came from her, so she does not count as someone you know." },
      { id: "do", does: "Choose.", working: "Leave it: send nothing. Then tell someone you know in person.", ask: "act" }] }),

  // ----- the first group: two pairs -----
  str({
    id: "p-partner-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Report the profile to the site, and leave it at that", then: "Reporting helps the site, but it does not tell anyone who can look at it with you. Tell someone you know in person too." },
    context: "You have been chatting with Daniel on a dating site for two months. You have never met.",
    message: scamChat("Daniel", "Chat on the dating site", [L("p1a", "I am stuck at the airport with no wallet. I need $900 for a ticket."), L("p1b", "Please send gift cards. I will pay you back.")]),
    right: "leave",
    say: ["The gift cards were emptied in minutes, and then he needed more.",
      "There is nothing of yours to check with: Daniel is the only one who can answer about Daniel.",
      "You sent nothing."],
    deciding: ["p1b"], reason: "You have only met him online, so you leave it, and you tell someone you know in person. Gift cards settle it: no honest person is paid that way." }),
  str({
    id: "p-brother-real", genuine: "genuine", channel: "sms", request: "money",
    context: "At dinner you told your brother Luis you would pay for half the pizza tonight. He said he would text you the amount.",
    message: scamSms("Luis", "Text message · 8:40 PM", [L("p2a", "Half the pizza came to $20."), L("p2b", "Send it in PayLane when you can.")]),
    right: "act",
    say: ["You sent Luis $20, as you had agreed.",
      "A call to Luis confirmed it. Not needed: you agreed this at dinner.",
      "Luis is still waiting for the $20 you promised."],
    deciding: ["p2b"], reason: "You started it: you agreed at dinner to pay half, and this wants exactly that, the way you said." }),
  str({
    id: "p-prize-fake", genuine: "scam", channel: "sms", request: "money",
    context: "You have never heard of Prize Desk.",
    message: scamSms("Prize Desk", "Text message · 2:25 PM", [L("p3a", "Pay a $150 fee to release your prize."), L("p3b", "You won $5,000!")], "prize-desk-claim.example/fee"),
    right: "leave",
    say: ["You paid $150 and no prize ever came.",
      "There is nobody to check with: you have no account with Prize Desk.",
      "You deleted it and kept your $150."],
    deciding: ["p3a"], reason: "You did not start it and you have no account with them, so you leave it. Real prizes are free: if you have to pay to get a prize, it is a scam." }),
  str({
    id: "p-prize-real", genuine: "genuine", channel: "sms", request: "details",
    context: "Last week at the Harbor Café, where you often eat, you bought a raffle ticket and wrote your phone number on it for the draw.",
    message: scamSms("Harbor Café", "Text message · 10:10 AM", [L("p4a", "Your ticket won the $50 gift card in our raffle!"), L("p4b", "Reply with your name and we will have it ready at the counter.")]),
    right: "act",
    say: ["You replied with your name and picked up the gift card on Saturday.",
      "You called the café and they said yes. Not needed: you bought the ticket yourself.",
      "The gift card waits at the counter."],
    deciding: ["p4b"], reason: "You started it: you bought the ticket yourself, and it wants nothing but your name. A real prize costs nothing to collect." }),

  // ----- the second group: eight mixed, on a clock, and one chat that pushes -----
  str({
    id: "g-job-fake", genuine: "scam", channel: "email", request: "money",
    context: "You posted your resume on a job site last week. You have never heard of Harbor Staffing.",
    message: scamEmail("Harbor Staffing", "Email · Tuesday", "You are hired", [L("g1b", "We will send you a check. Deposit it and send $400 of it on to our office supplier."), L("g1a", "You are hired for remote work!")]),
    right: "leave",
    say: ["The check bounced days later, after you had sent $400 of your own money.",
      "There is nobody to check with: you never applied to Harbor Staffing.",
      "You deleted it and kept your $400."],
    deciding: ["g1b"], reason: "You did not start it and you have no account with them, so you leave it. No honest employer sends you a check to deposit and tells you to send on part of it." }),
  str({
    id: "g-payroll-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You start at Harbor Café on Monday. At the interview the manager helped you put the staff app on your phone. Now you open it and tap “My pay.”",
    message: scamPopup("Harbor Café staff app", "In the app", [L("g2a", "Enter your bank account number for payday."), L("g2b", "Pay goes in every other Friday.")], "Save"),
    right: "act",
    say: ["You saved your bank details, and you were paid on time.",
      "You called the café, and they said yes. Not needed: you tapped “My pay” yourself, a moment ago.",
      "Your first pay is late."],
    deciding: ["g2a"], reason: "You started it: you opened the staff app yourself and tapped “My pay” a moment ago. An employer needs your bank number for pay, inside its own app or form." }),
  str({
    id: "g-recover-fake", genuine: "scam", channel: "call", request: "money",
    context: "Two weeks ago you lost $800 to a scam and reported it. You have never heard of Fund Recovery.",
    message: scamCall("Fund Recovery", "Incoming call · 11:30 AM", [L("g3a", "We saw your report, and we can get your $800 back."), L("g3b", "Pay a $150 fee first.")]),
    right: "leave",
    say: ["You paid $150 and got nothing back. Your name went on a list of people who pay.",
      "There is nobody to check with: you have no account with Fund Recovery. The offer itself is the scam.",
      "You hung up and kept your $150."],
    deciding: ["g3b"], reason: "You did not start it and you have no account with them, so you hang up. Nobody honest who calls you wants a fee up front to get you a refund." }),
  str({
    id: "g-friend-real", genuine: "genuine", channel: "chat", request: "money", offers: true,
    context: "Dana is a friend. She writes in the chat you have used with her for years. You never talked about tickets.",
    message: scamChat("Dana", "Chat with a friend", [L("g4a", "Can you pay for my half of the concert tickets, $35?"), L("g4b", "Send it here in the chat. I will pay you back Friday.")]),
    right: "check", own: "Calling Dana on her saved number", theirs: "My message in the chat, asking if it is really her",
    say: ["This time it was Dana and she paid you back. You could not have known: a taken-over chat looks the same.",
      "Dana answers her phone and says yes, she forgot to mention it. You pay, and she pays you back Friday.",
      "Dana has to find another way to pay."],
    deciding: ["g4a"], reason: "You did not agree this, and Dana is someone you know, so you check on her saved number. A chat account can be taken over." }),
  str({
    id: "g-loan-fake", genuine: "scam", channel: "sms", request: "money",
    context: "You did not apply for any loan, and you have never heard of Quick Loans.",
    message: scamSms("Quick Loans", "Text message · 12:05 PM", [L("g5a", "Your $5,000 loan is approved!"), L("g5b", "Pay $200 for insurance first.")], "quick-loans-pay.example/insure"),
    right: "leave",
    say: ["You paid $200 and no loan ever came.", "There is nobody to check with: you never applied.", "You deleted it and kept your $200."],
    deciding: ["g5b"], reason: "You did not start it and you have no account with them, so you leave it. A fee called “insurance” before you get a loan is the trick." }),
  str({
    id: "g-loan-real", genuine: "genuine", channel: "popup", request: "details",
    context: "You just tapped “Apply” for a car loan in the Penhallow Credit Union app.",
    message: scamPopup("Penhallow CU", "In the app", [L("g6a", "To finish your application, enter your yearly income."), L("g6b", "We will answer within two days.")], "Continue"),
    right: "act",
    say: ["You finished the application, and the loan was approved two days later.",
      "You closed the app and opened it again to the same screen. Not needed: you had just tapped “Apply.”",
      "Your application stays unfinished."],
    deciding: ["g6a"], reason: "You started it: you tapped “Apply” in your own credit union’s app a moment ago. It wants no money." }),
  str({
    id: "g-invest-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Block him, and keep it to yourself", then: "Blocking stops this chat, but keeping it to yourself is what the script counts on. Tell someone you know in person." },
    context: "Tom wrote to you out of the blue on a social app a week ago, and you have chatted since. You have never met.",
    message: scamChat("Tom", "Chat on a social app", [L("g7a", "A trader I know turned $1,000 into $9,000."), L("g7b", "Join here and put in $1,000.")], "trader-join.example/in"),
    right: "leave",
    say: ["You put in $1,000. The app showed gains, and then wanted a fee before you could take anything out.", "There is nothing of yours to check with: every way of reaching Tom is his.", "You sent nothing."],
    deciding: ["g7b"], reason: "You know Tom only online, so you leave it, and because he wants money you tell someone you know in person." }),
  str({
    id: "g-buy-real", genuine: "genuine", channel: "chat", request: "money",
    context: "You messaged a seller about a lamp on Bramblecote Market and agreed to pay $25 through the app.",
    message: scamChat("Seller on Bramblecote Market", "Chat about the lamp", [L("g8a", "Great, send the $25 through the Bramblecote app."), L("g8b", "I will ship it today.")]),
    right: "act",
    say: ["You paid through the app, and the lamp shipped.",
      "The app showed the same sale. Not needed: you agreed this already.",
      "You do not get the lamp."],
    deciding: ["g8a"], reason: "You started it: you agreed the price, and it sends you to pay inside the app you already use." }),
  exItem({
    id: "x-partner", strand: S6, channel: "chat", request: "money",
    context: "You have been chatting with Daniel on a dating site for two months. You have never met.",
    prompt: "Daniel writes to you. What do you say?", from: "Daniel", detail: "Chat on the dating site",
    turns: [
      { lines: ["I am stuck at the airport. My card was stolen and I need $900 for a flight.", "Buy gift cards and send me the codes."], push: "It sounds urgent and personal.",
        give: "Send the gift cards", hold: "Tell him you want a video call first", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["My camera is broken. If you cared about me you would help. I have no one else."], push: "It makes you feel guilty.",
        give: "Send the gift cards to prove you care", hold: "Tell him to send a photo of his ticket", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["I will be stranded tonight. This is the last time I will bother you."], push: "It threatens to disappear.",
        give: "Send the gift cards", leave: "Send nothing, and tell someone I know in person" }],
    gave: "The gift cards were emptied within minutes, and then he needed more.",
    left: "You sent nothing and told your sister. He wrote again with a new emergency, and you blocked him.",
    reason: "You have only met him online, so you send nothing and tell someone you know in person. Anything he shows you comes from him, however hard he pushes." }),

  // a real contact who answers the check: going along, after the check, is right
  { id: "x-rosa", strand: S6, facets: { genuine: "genuine", channel: "chat", request: "money" },
    blocks: [{ kind: "prose", text: "Your sister Rosa writes in the chat you always use with her. You had not talked about this. You have her number saved." }],
    asks: [{ id: "call", kind: "exchange", prompt: "Rosa writes to you. What do you do?", form: "chat", from: "Rosa", detail: "Chat with your sister", start: "one",
      turns: {
        one: { lines: [L("x6r1", "Can you send me $60 for Mom’s present? The shop closes at 6.")], push: "It hurries you. Real family do too, and so does someone using her chat.",
          options: [{ id: "send", text: "Send the $60 now", end: "unchecked" }, { id: "callher", text: "Call Rosa on her saved number first", goto: "two" }, { id: "stop", text: "Stop replying", end: "droppedEarly" }] },
        two: { lines: [L("x6r2", "Rosa answers her phone: “Yes, it’s me! Sorry, I’m running for the shop.”")], push: "Still in a hurry, but now from her own phone, in her own voice, on a call you made.",
          options: [{ id: "send2", text: "Send the $60 now that she has answered", end: "helped" }, { id: "stop2", text: "Stop replying anyway", end: "dropped" }] }
      },
      ends: {
        helped: { ok: true, then: "You checked on the number you had, she answered, and you sent it. Mom got her present." },
        unchecked: { ok: false, slip: "habit", then: "It was Rosa this time, but you sent money you had not agreed without checking. A taken-over chat writes the same way." },
        droppedEarly: { ok: false, then: "Rosa was real and needed the money. She is someone you know, so a call to her saved number would have settled it; dropping it costs her, not a scammer." },
        dropped: { ok: false, then: "Rosa was real and needed the money; the check had already settled it. Ending a real contact after checking costs her, not a scammer." } } }],
    deciding: [], reason: "It uses your sister’s name and you had not agreed it, so you check on her saved number. When she answers on the number you had, going along is right." },
  // ----- the check: eight new messages and a chat -----
  str({
    id: "k-crypto-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    context: "You met Sam on a game forum two months ago. You have never spoken by phone. Sam says a friend of yours from the forum knows him too.",
    message: scamChat("Sam", "Chat on the game forum", [L("k1b", "As I promised, my cousin’s crypto app doubled my money."), L("k1a", "Send $300 to this wallet and I will show you.")], "cousin-crypto.example/wallet"),
    right: "leave",
    say: ["The app showed your $300 growing. To take it out, it wanted a fee, and nothing came back.", "There is nothing of yours to check with: a friend you also met online knows no more than you do.", "You sent nothing."],
    deciding: ["k1a"], reason: "You know Sam only online, and a friend in common from the forum changes nothing. So you leave it, and you tell someone you know in person." }),
  str({
    id: "k-sister-real", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Your sister Rosa is texting from the number you have saved. You never talked about a gift.",
    message: scamSms("Rosa", "Text message · 3:10 PM", [L("k2a", "Can you send $60 for Mom’s gift?"), L("k2b", "Send it to this account: 5512 0087 3341. I will pay you back Saturday.")]),
    right: "check", own: "Calling Rosa on her saved number", theirs: "My reply to the text",
    say: ["This time it was Rosa. You could not have known: a stolen phone sends the same text.",
      "Rosa answers and says yes, she meant to bring it up on Sunday. You send it.",
      "Rosa has to find another way."],
    deciding: ["k2a"], reason: "You did not agree this, and Rosa is someone you know, so you check by calling her saved number. When she answers in her own voice and the story fits, that settles it; if anything is off, call someone else in the family." }),
  str({
    id: "k-prize-fake", genuine: "scam", channel: "email", request: "money",
    context: "You have never heard of Prize Office.",
    message: scamEmail("Prize Office", "Email · Friday", "You won", [L("k3a", "Congratulations, you won $10,000."), L("k3b", "Pay a $200 fee to claim it.")], "prize-office-claim.example/fee"),
    right: "leave",
    say: ["You paid $200 and no prize came.", "There is nobody to check with: you have no account with Prize Office.", "You deleted it and kept your $200."],
    deciding: ["k3b"], reason: "You did not start it and you have no account with them, so you leave it. Real prizes are free." }),
  str({
    id: "k-gift-real", genuine: "genuine", channel: "sms", request: "money",
    context: "At Sunday dinner you agreed with your sister Rosa to pay half of Mom’s gift, $60, when she sent the amount, through PayLane.",
    message: scamSms("Rosa", "Text message · Monday 9:15 AM", [L("k4a", "Your half of Mom’s gift is $60."), L("k4b", "Send it in PayLane like we said.")]),
    right: "act",
    say: ["You sent Rosa $60 in PayLane, as you agreed.", "A call to Rosa confirmed it. Not needed: you agreed this at dinner.", "Rosa is still waiting for the $60 you promised."],
    deciding: ["k4b"], reason: "You started it: you agreed the amount and the way to pay at dinner, and this wants exactly that." }),
  str({
    id: "k-kit-fake", genuine: "scam", channel: "sms", request: "money",
    context: "You did not apply for any job, and you have never heard of Easy Work.",
    message: scamSms("Easy Work", "Text message · 9:20 AM", [L("k5a", "Buy the starter kit for $120 first."), L("k5b", "Then earn $400 a day from home.")], "easy-work-kit.example/buy"),
    right: "leave",
    say: ["You paid $120 for a kit that was useless, and no work came.", "There is nobody to check with: you never applied.", "You deleted it and kept your $120."],
    deciding: ["k5a"], reason: "You did not start it and you have no account with them, so you leave it. A job that wants you to pay for a kit first is the trick." }),
  str({
    id: "k-course-real", genuine: "genuine", channel: "email", request: "money", offers: true,
    context: "You have never taken a class at Larkspur Cooking School and have no account there.",
    message: scamEmail("Larkspur Cooking School", "Email · Tuesday", "Fall classes", [L("k6a", "Our fall bread class has three places left."), L("k6b", "Pay $150 at the link to book yours.")], "larkspur.example/book"),
    right: "leave",
    say: ["You paid $150 for a class you had not been looking for.", "There is nobody to check with: you have no account with Larkspur.", "You deleted it. If you ever want a class, you can find one yourself."],
    deciding: ["k6b"], reason: "You did not start it and you have no account with them, so you leave it, real or not." }),
  str({
    id: "k-fund-fake", genuine: "scam", channel: "call", request: "money",
    context: "Last month you lost $1,200 to a scam. You have never heard of Fund Recovery.",
    message: scamCall("Fund Recovery", "Incoming call · 2:50 PM", [L("k7a", "Pay $250 to start your case."), L("k7b", "We help scam victims get their money back.")]),
    right: "leave",
    say: ["You paid $250 and got nothing back.", "There is nobody to check with: you have no account with Fund Recovery. The offer itself is the scam.", "You hung up and kept your $250."],
    deciding: ["k7a"], reason: "You did not start it and you have no account with them, so you hang up. Nobody honest who calls you wants a fee up front to get you a refund." }),
  str({
    id: "k-lunch-real", genuine: "genuine", channel: "chat", request: "money",
    context: "This morning you told your brother Luis you would buy him lunch, and he paid at the counter.",
    message: scamChat("Luis", "Chat with your brother", [L("k8a", "Lunch came to $20."), L("k8b", "Send it in PayLane when you get a minute.")]),
    right: "act",
    say: ["You sent Luis $20, as you had said you would.", "A call to Luis confirmed it. Not needed: you offered this morning.", "Luis is still waiting for the lunch you offered."],
    deciding: ["k8b"], reason: "You started it: you offered this morning, and it wants exactly that." }),
  exItem({
    id: "x-invest", strand: S6, channel: "chat", request: "money",
    context: "You met Nadia on a cooking forum two months ago. You have never spoken by phone.",
    prompt: "Nadia writes to you. What do you say?", from: "Nadia", detail: "Chat on the cooking forum",
    turns: [
      { lines: ["I put $500 in a trading app and it is already $2,100.", "Join now with $500 at this link and I will help you."], push: "It dangles riches and a helpful friend.",
        give: "Put in $500 at the link", hold: "Tell her to show you her gains first", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["Here is my screen. The offer ends tonight. After that the fee goes up."], push: "It shows proof she made and makes the chance run out.",
        give: "Put in $500 before it ends", hold: "Get the app’s website to read about it first", leave: "Send nothing, and tell someone I know in person" },
      { lines: ["I thought you were a friend. I will not help you again."], push: "It plays on the friendship.",
        give: "Put in $500", leave: "Send nothing, and tell someone I know in person" }],
    gave: "The app showed your $500 growing. To take it out, it wanted a fee, and nothing came back.",
    left: "You sent nothing and told a friend you see in person, who had heard of this kind of offer.",
    reason: "You have only met Nadia online, so you send nothing and tell someone you know in person. Any proof or website she shows you came from her." }),

  // ----- held in reserve for the review -----
  str({
    id: "r-check-fake", genuine: "scam", channel: "email", request: "money",
    context: "You sold a desk on Bramblecote Market to a buyer you do not know.",
    message: scamEmail("Buyer", "Email · Saturday", "About the desk", [L("r1a", "I sent you a check for $900, which is $300 too much."), L("r1b", "Deposit it and send the extra $300 back to me.")]),
    right: "leave",
    say: ["The check bounced days later, and your $300 was gone.", "There is nobody to check with: you do not know the buyer.", "You stopped replying and kept your $300."],
    deciding: ["r1b"], reason: "You do not know the buyer, so you leave it. A check to deposit and send money back from is a known trick: the check is fake, and the money you send is real." }),
  str({
    id: "r-roommate-real", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Marcus is your friend. You have his number saved. You never talked about the movie.",
    message: scamSms("Marcus", "Text message · 8:25 PM", [L("r2a", "Can you cover my $15 for the movie?"), L("r2b", "Send it to this account: 7740 2215 9063. I will pay you back.")]),
    right: "check", own: "Calling Marcus on his saved number", theirs: "My reply to the text",
    say: ["This time it was Marcus. You could not have known that from the text.", "Marcus answers and says yes. You send it.", "Marcus has to find another way."],
    deciding: ["r2a"], reason: "You did not agree this, and Marcus is someone you know, so you check on his saved number." }),
  str({
    id: "r-army-fake", genuine: "scam", channel: "chat", request: "money", tell: true,
    tellAlt: { text: "Report the profile to the site, and leave it at that", then: "Reporting helps the site, but it does not tell anyone who can look at it with you. Tell someone you know in person too." },
    context: "You have chatted with Chris on a dating site for a month. You have never met.",
    message: scamChat("Chris", "Chat on the dating site", [L("r3a", "I am working far away and my pay is held up."), L("r3b", "Can you send $500 in gift cards until Friday?")]),
    right: "leave",
    say: ["The gift cards were emptied at once, and he wrote again for more.", "There is nothing of yours to check with: Chris is the only one who can speak for Chris.", "You sent nothing."],
    deciding: ["r3b"], reason: "You have only met him online, so you leave it, and you tell someone you know in person. Gift cards settle it." })
]);
})();
