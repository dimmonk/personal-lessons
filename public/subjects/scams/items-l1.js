// Scams, lesson 1 "What does it want?": the worked text, two pairs that differ in what they want, six mixed messages on a clock, the ten of the check and three
// held in reserve. Each is a message in the form it arrives in; the learner taps the line that wants something and says what it wants. The line that
// wants something is first, in the middle or last, and a message that wants nothing can be long. Invented senders and people, each name used for real
// messages and for scams alike. About half are real.
(() => {
const L = scamLine;
FC.items("scams", [
  // ----- the worked message -----
  wantItem({
    id: "w-want", genuine: "scam", channel: "sms", kind: "login", line: "w1b",
    context: "You have an account with Ashgrove Bank. A text comes in while you eat lunch.",
    message: scamSms("Ashgrove Bank", "Text message · 12:40 PM", [L("w1a", "We saw a sign-in from a new phone."), L("w1b", "Sign in at the link now to keep your account open.")], "ashgrove-verify.example/in"),
    steps: [
      { id: "read", does: "Read every line.", working: "The first line tells you something. The second line tells you to do something." },
      { id: "find", does: "Find the line that wants something from you.", working: "“Sign in at the link now” is the one." },
      { id: "name", does: "Say what it wants.", working: "Signing in means typing your password. So it wants a sign-in." }],
    reason: "The second line is the one that wants something: your sign-in, typed on the page the link opens. How polished the text looks does not change what it wants." }),

  // ----- the first group: two pairs, each differing in what they want -----
  wantItem({
    id: "q-ship-none", genuine: "genuine", channel: "sms", kind: "none",
    context: "You ordered a lamp from Thistlewick Outfitters on Monday.",
    message: scamSms("Quillfeather Parcel", "Text message · Thursday 2:10 PM", [L("q1a", "Your Thistlewick parcel was left at your front door."), L("q1b", "Thank you for choosing Quillfeather.")]),
    reason: "It only tells you where your parcel is. Neither line wants anything from you. Whether to trust a sender comes in later lessons; here you only name what it wants." }),
  wantItem({
    id: "q-ship-money", genuine: "scam", channel: "sms", kind: "money", line: "q2a",
    context: "You ordered a lamp from Thistlewick Outfitters on Monday.",
    message: scamSms("Quillfeather Parcel", "Text message · Thursday 3:31 PM", [L("q2a", "Pay a $1.99 redelivery fee before Friday or your parcel goes back."), L("q2b", "It is held at our depot.")], "quillfeather-redeliver.example/pay"),
    reason: "The first line wants money: a fee, paid at the link." }),
  wantItem({
    id: "q-code-login", genuine: "genuine", channel: "sms", kind: "login", line: "q3a",
    context: "You just tapped “Text me a code” on the Dunmore Gas sign-in page.",
    message: scamSms("Dunmore Gas", "Text message · 9:02 AM", [L("q3a", "Type 551 204 on the page you are on."), L("q3b", "It is your Dunmore sign-in code and works for ten minutes.")]),
    reason: "A code is a kind of sign-in, and the first line wants you to type it." }),
  wantItem({
    id: "q-clean-device", genuine: "scam", channel: "popup", kind: "device", line: "q4b",
    context: "You are reading the news on your phone.",
    message: scamPopup("Phone alert", "On a web page", [L("q4a", "3 threats found on your phone."), L("q4b", "Install the cleaner app now."), L("q4c", "It only takes a minute.")], "Install now"),
    reason: "The middle line wants you to put an app on your phone. An app on your phone is a way into it." }),

  // ----- the second group: six mixed, on a clock -----
  wantItem({
    id: "m-water-money", genuine: "genuine", channel: "email", kind: "money", line: "m1a",
    context: "Alderwick Water sends you a bill every month.",
    message: scamEmail("Alderwick Water", "Email · the 3rd", "Your bill is ready", [L("m1a", "Please pay $48.20 in your account or mail a check by the 15th."), L("m1b", "Your water use was about the same as last month.")]),
    reason: "The first line wants money. A real bill wants money too: naming what a message wants comes before deciding what to do." }),
  wantItem({
    id: "m-ss-details", genuine: "scam", channel: "call", kind: "details", line: "m2c",
    message: scamCall("Social Security office", "Incoming call · 2:20 PM", [L("m2a", "This is the Social Security office."), L("m2b", "There is a problem with your number."), L("m2c", "Say your Social Security number so I can fix it.")]),
    reason: "The last line wants your Social Security number, a detail that is only yours. Saying it out loud is handing it over." }),
  wantItem({
    id: "m-dental-details", genuine: "genuine", channel: "chat", kind: "details", line: "m3b",
    context: "You asked Lakeview Dental for an appointment this morning.",
    message: scamChat("Lakeview Dental", "Chat about your appointment", [L("m3a", "Hi, we can fit you in on Friday."), L("m3b", "What is your date of birth, so we can find your file?"), L("m3c", "Then we will book it.")]),
    reason: "The middle line wants a detail: your birthday." }),
  wantItem({
    id: "m-battery-device", genuine: "scam", channel: "banner", kind: "device", line: "m4a",
    message: scamBanner("Phone", "now", [L("m4a", "Your battery is damaged by a virus. Install Battery Doctor to fix it.")]),
    reason: "It wants you to install an app on your phone. That is a way into your device." }),
  wantItem({
    id: "m-salon-none", genuine: "genuine", channel: "sms", kind: "none",
    context: "You booked a haircut at Salon Wren for Thursday.",
    message: scamSms("Salon Wren", "Text message · 8:00 AM", [L("m5a", "See you Thursday at 2:00, before we close for the holiday."), L("m5b", "Our new price list is at the link."), L("m5c", "Parking is free behind the shop.")], "salonwren.example/prices"),
    reason: "It has a link and a date, but it only tells you things: the time, the prices, the parking. It wants none of the four." }),
  wantItem({
    id: "m-toll-money", genuine: "scam", channel: "sms", kind: "money", line: "m6b",
    message: scamSms("Toll Desk", "Text message · 6:48 PM", [L("m6a", "Your toll balance is overdue."), L("m6b", "Pay $6.50 today at the link or the fee becomes $50.")], "toll-desk-pay.example/balance"),
    reason: "The second line wants money, and a bigger fee hurries you. The money is the request." }),

  // ----- the check: ten new messages -----
  wantItem({
    id: "k-appt-none", genuine: "genuine", channel: "email", kind: "none",
    message: scamEmail("Dr. Brandt’s office", "Email · Monday", "Your appointment", [L("k1a", "Your appointment on Tuesday at 9:30 is confirmed."), L("k1b", "We are in the new office at 12 Elm Street."), L("k1c", "We look forward to seeing you.")]),
    reason: "It confirms a time and a place. It wants nothing from you." }),
  wantItem({
    id: "k-customs-money", genuine: "scam", channel: "sms", kind: "money", line: "k2a",
    context: "You ordered a scarf from Marlowe & Finch last week.",
    message: scamSms("Marlowe & Finch", "Text message · 11:12 AM", [L("k2a", "Pay a $3.20 customs fee at the link."), L("k2b", "Your scarf is on hold until it is paid.")], "delivery-hold.example/fee"),
    reason: "The first line wants money. Knowing you ordered something does not make a fee for it real." }),
  wantItem({
    id: "k-cable-money", genuine: "genuine", channel: "email", kind: "money", line: "k3b",
    context: "Alderwick Cable sends you a bill every month.",
    message: scamEmail("Alderwick Cable", "Email · the 5th", "Your bill is ready", [L("k3a", "Your bill is $79.99."), L("k3b", "Pay it in your account by the 20th.")]),
    reason: "The second line wants money, and it is your usual bill. A real bill is still a request for money." }),
  wantItem({
    id: "k-fraud-login", genuine: "scam", channel: "call", kind: "login", line: "k4b",
    message: scamCall("Fraud team", "Incoming call · 6:15 PM", [L("k4a", "This is the fraud team. We stopped a payment on your account."), L("k4b", "Read me the code we just texted, to confirm it is you."), L("k4c", "Then we can cancel the payment.")]),
    reason: "The middle line wants the code in your text, and a code is a sign-in. Reading it out lets the caller in." }),
  wantItem({
    id: "k-code-login", genuine: "genuine", channel: "sms", kind: "login", line: "k5a",
    context: "You just tapped “Text me a code” on the Fernbrook sign-in page.",
    message: scamSms("Fernbrook", "Text message · 7:45 AM", [L("k5a", "Type 339 018 on the Fernbrook page you are on."), L("k5b", "The code works for ten minutes.")]),
    reason: "The first line wants the code typed on the page. You asked for it, so this is the sign-in you started." }),
  wantItem({
    id: "k-screen-device", genuine: "scam", channel: "chat", kind: "device", line: "k6a",
    message: scamChat("Kestrel Mobile help", "Chat that popped up on a web page", [L("k6a", "Download this app so I can see your screen."), L("k6b", "I am from Kestrel Mobile help, and I will fix your phone for you.")], "kestrel-help.example/app"),
    reason: "The first line wants you to install an app so someone can see your screen. That is a way into your device." }),
  wantItem({
    id: "k-pharmacy-details", genuine: "genuine", channel: "call", kind: "details", line: "k7b",
    context: "You called Quillon Pharmacy this morning about a refill and asked them to call you back.",
    message: scamCall("Quillon Pharmacy", "Incoming call · 1:10 PM", [L("k7a", "Hi, this is Quillon Pharmacy, returning your call."), L("k7b", "Can you confirm your date of birth so I can find your refill?")]),
    reason: "The second line wants a detail, your birthday." }),
  wantItem({
    id: "k-mutual-details", genuine: "scam", channel: "email", kind: "details", line: "k8a",
    message: scamEmail("Linden Mutual", "Email · Thursday", "Update your account", [L("k8a", "Reply with your address, birthday and Social Security number."), L("k8b", "Your account needs updating today.")]),
    reason: "The first line wants three details that are only yours. Together they are enough to pretend to be you." }),
  wantItem({
    id: "k-friend-none", genuine: "genuine", channel: "chat", kind: "none",
    message: scamChat("Marcus", "Chat with a friend", [L("k9a", "Running late."), L("k9b", "The bus broke down by the library."), L("k9c", "I will be there in ten.")]),
    reason: "It only tells you something. It wants nothing from you." }),
  wantItem({
    id: "k-photo-money", genuine: "scam", channel: "popup", kind: "money", line: "k10b",
    context: "You are looking at photos on a web page.",
    message: scamPopup("Photo storage", "On a web page", [L("k10a", "Your photo storage is full."), L("k10b", "Pay $9 now to keep your photos."), L("k10c", "Otherwise they are deleted today.")], "Pay now"),
    reason: "The middle line wants money, and the last one threatens to take something away today. The threat is there to hurry you." }),

  // ----- held in reserve for the review -----
  wantItem({
    id: "r-store-device", genuine: "scam", channel: "sms", kind: "device", line: "r1a",
    message: scamSms("Phone care", "Text message · 4:05 PM", [L("r1a", "Install the cleaner app to free space."), L("r1b", "Your phone storage is almost full.")], "phone-care-clean.example/get"),
    reason: "The first line wants an app put on your phone." }),
  wantItem({
    id: "r-receipt-none", genuine: "genuine", channel: "email", kind: "none",
    context: "You bought a book from Orchard & Pine Books an hour ago.",
    message: scamEmail("Orchard & Pine Books", "Email · Saturday", "Your receipt", [L("r2a", "Thank you for your order. Your total was $12.00."), L("r2b", "Your receipt is below.")]),
    reason: "It is a receipt for what you bought, and it wants nothing." }),
  wantItem({
    id: "r-jury-money", genuine: "scam", channel: "call", kind: "money", line: "r3b",
    message: scamCall("County court", "Incoming call · 10:30 AM", [L("r3a", "You missed jury duty."), L("r3b", "Pay a $300 fine today with gift cards or you will be arrested.")]),
    reason: "The second line wants money in gift cards, with a threat to hurry you." })
]);
})();
