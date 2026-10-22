// Scams, lesson 2 "Your own way in": the worked call, two pairs, six mixed messages on a clock, the eight of the check and three held in reserve. Every one
// is a message the rule says to check (plan.md, "The rule", step 3): it wants something, you did not start it, and it uses the name of a company you have
// an account with or a person you know. The question is how: the way you already had; what the message gave you (its link, number or reply, a badge
// number, "I'll transfer you", the number your screen shows); or a way that is neither, such as a number a web search shows. About half are real, and a
// real one is checked the same way.
(() => {
const L = scamLine;
const SEARCH = "The number I find by searching for them on my phone";
FC.items("scams", [
  // ----- the worked call -----
  wayItem({
    id: "w-badge", genuine: "scam", channel: "call", request: "money",
    context: "A man calls and says he is from the county police.",
    message: scamCall("County police", "Incoming call · 3:40 PM", [L("w1a", "This is Detective Moss, badge 4417."), L("w1b", "There is a warrant for you. Call 1-555-0132 and have a card ready to pay the fine.")]),
    own: "Hang up, type the county’s own website address myself, and call the number it lists",
    wrong: [{ how: "badge", text: "Check the badge number he gave me" }, { how: "number", text: "Call the number he gave me" }],
    deciding: ["w1b"],
    steps: [
      { id: "gave", does: "See what the message gave you.", working: "A badge number and a phone number. Both came from the caller, so both are his." },
      { id: "mine", does: "Find a way you already had.", working: "The police are an agency that has your records, so you check. The county’s own website, at an address you type yourself, lists the real number." },
      { id: "pick", does: "Use that way.", working: "Hang up and call the number you found yourself. A fake badge can carry a friend’s phone number.", ask: "via" }],
    reason: "Everything he gave you, the badge and the number, came from him. A number you find yourself, on a site you typed, is not his to choose." }),

  // ----- the first group: two pairs -----
  wayItem({
    id: "a-card-fake", genuine: "scam", channel: "sms", request: "login",
    context: "You have a Calderwood Bank card.",
    message: scamSms("Calderwood Alert", "Text message · 2:14 PM", [L("a1a", "Your card has been locked."), L("a1b", "Call 1-555-0161 now to unlock it.")]),
    own: "The number printed on the card",
    wrong: [{ how: "number", text: "Call the number the text gave me" }, { how: "search", text: SEARCH }],
    deciding: ["a1b"], reason: "The number in the text is the sender’s, and a searched number can be a scammer’s ad. The number on your card was there before the text." }),
  wayItem({
    id: "a-card-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Penhallow Credit Union is your credit union. You did not just buy anything.",
    message: scamSms("Penhallow CU", "Text message · 5:30 PM", [L("a2a", "Your card was declined at Dunmore Gas."), L("a2b", "Review it now.")], "penhallow.example/card"),
    own: "Penhallow’s app",
    wrong: [{ how: "link", text: "Open the page the link takes me to" }, { how: "number", text: "Call back the number my phone shows the text came from" }],
    deciding: ["a2b"], reason: "A real alert and a fake one look the same from the outside. The app you already have shows the truth either way." }),
  wayItem({
    id: "a-shop-fake", genuine: "scam", channel: "email", request: "money",
    context: "You ordered a lamp from Thistlewick Outfitters on Monday.",
    message: scamEmail("Thistlewick Outfitters", "Email · Wednesday", "Problem with your order", [L("a3a", "Enter your card again at the link to keep your order."), L("a3b", "Otherwise it will be canceled today.")], "thistlewick-orders.example/card"),
    own: "My Thistlewick account, at the address I type myself",
    wrong: [{ how: "link", text: "Sign in on the page the email’s link opens" }, { how: "search", text: "The Thistlewick site I find by searching on my phone" }],
    deciding: ["a3a"], reason: "The link belongs to the sender, and a searched site can be an ad. Your account, reached your own way, shows whether anything is wrong." }),
  wayItem({
    id: "a-shop-real", genuine: "genuine", channel: "email", request: "money",
    context: "You ordered a scarf from Marlowe & Finch on Monday. You did not change anything since.",
    message: scamEmail("Marlowe & Finch", "Email · Tuesday", "Your card on file", [L("a4a", "The card on file for your order has expired."), L("a4b", "Add a new card at the link so we can ship your scarf.")], "marlowe-finch.example/card"),
    own: "My Marlowe & Finch account, at the address I type myself",
    wrong: [{ how: "link", text: "Add my card on the page the link opens" }, { how: "search", text: "The Marlowe & Finch site I find by searching on my phone" }],
    deciding: ["a4b"], reason: "Your own account shows whether the card really expired. The top result of a search can be an ad paid for by anyone." }),

  // ----- the second group: six mixed, on a clock -----
  wayItem({
    id: "b-payout-fake", genuine: "scam", channel: "sms", request: "details",
    context: "You sell things on Bramblecote Market and have its app.",
    message: scamSms("Bramblecote Market", "Text message · 4:50 PM", [L("b1a", "Your payout is on hold."), L("b1b", "Confirm your bank details at the link to release it.")], "bramblecote-payout.example/bank"),
    own: "The Bramblecote Market app",
    wrong: [{ how: "link", text: "Confirm my details on the page the link opens" }, { how: "search", text: "The Bramblecote help number I find by searching on my phone" }],
    deciding: ["b1b"], reason: "Your payouts show in the app you already use. The link goes where the sender chose, and a searched number can be an ad." }),
  wayItem({
    id: "b-pharmacy-real", genuine: "genuine", channel: "sms", request: "details",
    context: "You get refills at Quillon Pharmacy. Its number is on your pill bottle.",
    message: scamSms("Quillon Pharmacy", "Text message · 10:20 AM", [L("b2a", "Your insurance was declined for your refill."), L("b2b", "Call 1-555-0188 to give us your new card.")]),
    own: "The number on my pill bottle",
    wrong: [{ how: "number", text: "Call the number the text gave me" }, { how: "search", text: SEARCH }],
    deciding: ["b2b"], reason: "The bottle had the pharmacy’s number before the text came. The number in the text, and one from a search, are not ways you already had." }),
  wayItem({
    id: "b-landlord-fake", genuine: "scam", channel: "sms", request: "money",
    context: "Ms. Ivers is your landlord. You have her number saved.",
    message: scamSms("Ms. Ivers (new number)", "Text message · 9:10 AM", [L("b3a", "Please send this month’s rent to my new bank account, below."), L("b3b", "It is Ms. Ivers, on a new phone. My bank changed too.")]),
    own: "Ms. Ivers’ number that I already have",
    wrong: [{ how: "reply", text: "My reply to her new number" }, { how: "search", text: "The number I find for her by searching on my phone" }],
    deciding: ["b3a"], reason: "A new number can be anyone’s. The number you already had for her is the one that reaches her." }),
  wayItem({
    id: "b-gas-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Dunmore Gas takes your bill from your bank each month. You have an account on its website; its address is on your bills.",
    message: scamSms("Dunmore Gas", "Text message · the 3rd", [L("b4a", "We could not take your payment this month."), L("b4b", "Pay $62.10 by the 5th at the link.")], "dunmore.example/pay"),
    own: "My Dunmore account, at the address on my bills, typed myself",
    wrong: [{ how: "link", text: "Pay on the page the link opens" }, { how: "search", text: "The Dunmore number I find by searching on my phone" }],
    deciding: ["b4b"], reason: "Your account shows what you owe without the link." }),
  wayItem({
    id: "b-policy-fake", genuine: "scam", channel: "email", request: "money",
    context: "You have car insurance with Linden Mutual.",
    message: scamEmail("Linden Mutual", "Email · Monday", "Your policy will end", [L("b5a", "Your policy will end today."), L("b5b", "Pay $180 at the link, or call 1-555-0179."), L("b5c", "We are sorry for the short notice.")], "linden-mutual-pay.example/policy"),
    own: "The number on my insurance card",
    wrong: [{ how: "link", text: "Pay on the page the link opens" }, { how: "search", text: "The Linden Mutual number I find by searching on my phone" }],
    deciding: ["b5b"], reason: "The link and the number both came with the email. The number on your card was yours first." }),
  wayItem({
    id: "b-eli-real", genuine: "genuine", channel: "chat", request: "money",
    context: "Your grandson Eli writes to you on Chatterbox, an app you both use. You have his phone number saved.",
    message: scamChat("Eli", "Chat on Chatterbox", [L("b6a", "Hi Grandma! My books for school cost more than I thought."), L("b6b", "Could you send me $50 through the app? I will explain on Sunday."), L("b6c", "My phone is broken, so call me on 1-555-0190 if you need to.")]),
    own: "Call Eli on the phone number I have saved",
    wrong: [{ how: "reply", text: "My message in the chat, asking if it is really him" }, { how: "number", text: "Call the new number he gave in the chat" }],
    deciding: ["b6b"], reason: "A chat account can be taken over, so a reply in it reaches whoever has it. His saved number reaches Eli." }),

  // ----- the check: eight new messages -----
  wayItem({
    id: "k-lab-fake", genuine: "scam", channel: "sms", request: "login",
    context: "You saw Dr. Brandt last week and use the clinic’s patient portal.",
    message: scamSms("Dr. Brandt’s office", "Text message · 1:05 PM", [L("k1a", "Sign in at the link to see your lab results."), L("k1b", "They are ready now.")], "brandt-results.example/view"),
    own: "The patient portal, at the address I type myself",
    wrong: [{ how: "link", text: "Open the page the link takes me to" }, { how: "search", text: "The clinic number I find by searching on my phone" }],
    deciding: ["k1a"], reason: "The link came with the text, and a searched number can be an ad. The portal you type yourself shows your results if there are any." }),
  wayItem({
    id: "k-address-real", genuine: "genuine", channel: "email", request: "details",
    context: "You ordered a jacket from Thistlewick Outfitters on Monday.",
    message: scamEmail("Thistlewick Outfitters", "Email · Tuesday", "Please confirm your address", [L("k2a", "We could not match your address."), L("k2b", "Confirm it at the link before we ship."), L("k2c", "Thanks for shopping with us.")], "thistlewick.example/address"),
    own: "My Thistlewick account, at the address I type myself",
    wrong: [{ how: "link", text: "Confirm it on the page the link opens" }, { how: "search", text: "The Thistlewick site I find by searching on my phone" }],
    deciding: ["k2b"], reason: "Your own account shows the address on the order. The link goes where the sender chose, and a searched site can be an ad." }),
  wayItem({
    id: "k-bank-call", genuine: "scam", channel: "call", request: "login",
    context: "Calderwood is your bank. Your phone shows “Calderwood Bank” as the caller.",
    message: scamCall("Calderwood Bank", "Incoming call · 6:15 PM", [L("k3a", "This is the fraud team at Calderwood Bank. We stopped a payment on your account."), L("k3b", "Stay on the line and I will transfer you to my supervisor to confirm it is you.")]),
    own: "Hang up and call the number on my card",
    wrong: [{ how: "transfer", text: "Let him put me through to his supervisor" }, { how: "callerid", text: "Call back the number my phone shows for the call" }],
    deciding: ["k3b"], reason: "The supervisor is whoever he transfers you to, and the name on your screen can be changed to anything. The number on your card reaches the bank." }),
  wayItem({
    id: "k-card-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Penhallow Credit Union is your credit union.",
    message: scamSms("Penhallow CU", "Text message · 12:30 PM", [L("k4a", "Did you spend $214.00 at Hartwell Electronics?"), L("k4b", "Reply YES or NO.")]),
    own: "Penhallow’s app",
    wrong: [{ how: "reply", text: "My reply to the text" }, { how: "number", text: "Call back the number my phone shows the text came from" }],
    deciding: ["k4b"], reason: "Your app shows your recent spending. A reply goes to whoever sent the text." }),
  wayItem({
    id: "k-boss-fake", genuine: "scam", channel: "email", request: "money",
    context: "Ms. Tran is your boss. You have her number saved.",
    message: scamEmail("Ms. Tran (a new address)", "Email · 9:40 AM", "A favor", [L("k5a", "I am in a meeting and cannot talk."), L("k5b", "Buy four $100 gift cards and send me the codes."), L("k5c", "You can reach me at 1-555-0140.")]),
    own: "Ms. Tran’s number that I already have",
    wrong: [{ how: "search", text: "Her office number I find by searching on my phone" }, { how: "number", text: "Call the number the email gave me" }],
    deciding: ["k5b"], reason: "The number in the email is the sender’s. Her saved number reaches her." }),
  wayItem({
    id: "k-bill-real", genuine: "genuine", channel: "sms", request: "money",
    context: "Kestrel Mobile is your phone company, and its app is on your phone.",
    message: scamSms("Kestrel Mobile", "Text message · the 12th", [L("k6a", "Your payment of $48.00 did not go through."), L("k6b", "Pay at the link today to keep your service.")], "kestrel.example/bill"),
    own: "Kestrel Mobile’s app",
    wrong: [{ how: "link", text: "Open the page the link takes me to" }, { how: "search", text: "The Kestrel number I find by searching on my phone" }],
    deciding: ["k6b"], reason: "The app shows what you owe, with no link and no searching." }),
  wayItem({
    id: "k-post-fake", genuine: "scam", channel: "sms", request: "details",
    context: "You ordered a mug from Orchard & Pine Gifts.",
    message: scamSms("Orchard & Pine Gifts", "Text message · 3:15 PM", [L("k7a", "There is a problem with your address."), L("k7b", "Update it at the link to get your mug.")], "orchard-pine-address.example/update"),
    own: "My Orchard & Pine order page, at the address I type myself",
    wrong: [{ how: "link", text: "Update it on the page the link opens" }, { how: "search", text: "The Orchard & Pine site I find by searching on my phone" }],
    deciding: ["k7b"], reason: "The shop’s order page, reached your own way, shows where your mug is. The link is the sender’s." }),
  wayItem({
    id: "k-cable-real", genuine: "genuine", channel: "sms", request: "details",
    context: "You booked a visit from Alderwick Cable. Its number is on your bill.",
    message: scamSms("Alderwick Cable", "Text message · Monday", [L("k8a", "Call 1-555-0122 by 5 PM to confirm your visit and your address."), L("k8b", "If we do not hear from you, the visit is canceled.")]),
    own: "The number on my last Alderwick bill",
    wrong: [{ how: "number", text: "Call the number the text gave me" }, { how: "search", text: SEARCH }],
    deciding: ["k8a"], reason: "The number on your bill reaches the company. The one in the text came with the text." }),

  // ----- held in reserve for the review -----
  wayItem({
    id: "r-bank-fake", genuine: "scam", channel: "sms", request: "login",
    context: "You have an account with Ashgrove Bank.",
    message: scamSms("Ashgrove Bank", "Text message · 8:20 PM", [L("r1a", "A new device was added to your account."), L("r1b", "If this was not you, call 1-555-0166 right away.")]),
    own: "The number printed on the card",
    wrong: [{ how: "number", text: "Call the number the text gave me" }, { how: "search", text: SEARCH }],
    deciding: ["r1b"], reason: "The number in the text is the sender’s. The one on your card is the bank’s." }),
  wayItem({
    id: "r-clinic-real", genuine: "genuine", channel: "email", request: "login",
    context: "You saw Dr. Okafor last month and use the clinic’s app.",
    message: scamEmail("Okafor Family Clinic", "Email · Tuesday", "Your statement", [L("r2a", "Sign in at the link to see your statement."), L("r2b", "It is for last month’s visit.")], "okafor-clinic.example/statement"),
    own: "The Okafor Clinic app",
    wrong: [{ how: "link", text: "Sign in on the page the email’s link opens" }, { how: "email", text: "My reply to the email" }],
    deciding: ["r2a"], reason: "The app shows the statement without the link." }),
  wayItem({
    id: "r-grandson-fake", genuine: "scam", channel: "call", request: "money",
    context: "You have a grandson, Eli, and you have his number saved.",
    message: scamCall("Unknown number", "Incoming call · 11:05 PM", [L("r3a", "Grandma, it is me, Eli. I am in trouble."), L("r3b", "I need $900 right now. Please do not tell Mom.")]),
    own: "Have him say our family word; if he cannot, hang up and call Eli’s saved number",
    wrong: [{ how: "callerid", text: "Call back the number my phone shows for the call" }, { how: "number", text: "Get his new number and call that" }],
    deciding: ["r3b"], reason: "The number that called, and any new number he gives, are the caller’s. The word you agreed face to face, and Eli’s saved number, are yours." })
]);
})();
