// Scams, lesson 0 "Before you start" (the baseline): the ten questions of the short form of the real-world test. Eight messages (four real, four scams), one
// call that pushes back, and one thing that already happened. Invented senders. Each is judged by the action that suits it: a real invoice is paid the
// way you already pay, a code you just asked for is used on the page you are on. Nothing is shown per question and the baseline is not graded.
(() => {
const L = scamLine;
FC.items("scams", [
  scamItem({
    id: "b-salon", genuine: "genuine", channel: "sms", request: "none",
    context: "You booked a haircut at Salon Wren for Thursday.",
    message: scamSms("Salon Wren", "Text message · 8:00 AM", [L("b1a", "Salon Wren: your haircut is Thursday at 2:00."), L("b1b", "Reply Y to confirm.")]),
    right: "act", own: "The number on my booking", theirs: "A reply to the text",
    say: ["You replied Y, and your slot was kept.",
      "You called the salon. They confirmed. A minute spent and not needed.",
      "Your slot may be given away."],
    deciding: ["b1b"], reason: "You booked this, it is a reminder, and the reply is one letter that costs nothing." }),
  scamItem({
    id: "b-invoice", genuine: "genuine", channel: "email", request: "money",
    context: "You hired Nate Odell to fix your roof. His quote said: pay by bank transfer to the account on the quote when the work is done.",
    message: scamEmail("Odell Roofing", "Email · Monday", "Invoice for the roof repair", [L("b2a", "Hi, the repair is done."), L("b2b", "The total is $640, as quoted."), L("b2c", "Please pay by transfer to the account on your quote by the 30th. Thanks, Nate.")]),
    right: "act", own: "The account on my quote", theirs: "The details in the email",
    say: ["You paid $640 into the account on the quote, the way you agreed.",
      "You called Nate on the number from the quote. He confirmed. It cost a minute and was not needed: nothing changed from what you agreed.",
      "The bill goes unpaid, and Nate has to chase you."],
    deciding: ["b2c"], reason: "You hired him, the amount is the quote, and the way to pay is the one you already agreed. Paying through that way is right." }),
  scamItem({
    id: "b-code", genuine: "genuine", channel: "sms", request: "login",
    context: "You just tapped “Text me a code” on the Calderwood sign-in page.",
    message: scamSms("Calderwood Bank", "Text message · 7:45 AM", [L("b3a", "Your sign-in code is 702 118."), L("b3b", "Enter it on the page you are on. Never share it.")]),
    right: "act", own: "The Calderwood page I am on", theirs: "The number the text came from",
    say: ["You signed in. The code only works for the sign-in you started.",
      "A minute spent on something you started. You were already on the right page.",
      "You are still signed out, and the code runs out."],
    deciding: ["b3b"], reason: "You asked for this code a moment ago, on the page you are on. Using it there is what it is for." }),
  scamItem({
    id: "b-alert", genuine: "genuine", channel: "sms", request: "money", offers: true,
    context: "Penhallow Credit Union is your credit union.",
    message: scamSms("Penhallow CU", "Text message · 5:30 PM", [L("b4a", "Your card was declined at Dunmore Gas."), L("b4b", "Review it now.")], "penhallow.example/card"),
    right: "check", own: "The Penhallow app", theirs: "The link in the text",
    say: ["This time the link was real. You could not have known, and a fake looks the same.",
      "The app shows the declined payment and a button to unlock the card.",
      "Your card stays blocked until you notice."],
    deciding: ["b4b"], reason: "You did not start this and it is about your card, so you go in through the app you already have, never through the link." }),
  scamItem({
    id: "b-parcel", genuine: "scam", channel: "sms", request: "money",
    context: "You have a parcel coming from Thistlewick Outfitters.",
    message: scamSms("Quillfeather Parcel", "Text message · 1:20 PM", [L("b5a", "We missed you at your door."), L("b5b", "Reschedule and pay $2.40 at the link.")], "quillfeather-reschedule.example"),
    right: "check", own: "My Thistlewick order page", theirs: "The link in the text",
    say: ["The page took your card and charged it again later.",
      "The order page shows the parcel on its way, with no fee.",
      "You are safe."],
    deciding: ["b5b"], reason: "You expect a parcel, which makes this believable. A fee through its own link is the request, and the shop’s order page tells you the truth." }),
  scamItem({
    id: "b-popup", genuine: "scam", channel: "popup", request: "device",
    context: "You are reading the news on your phone.",
    message: scamPopup("Phone alert", "On a web page", [L("b6a", "Your phone has a virus!"), L("b6b", "Tap to clean it now.")], "Clean now"),
    right: "leave", own: "My phone’s own settings", theirs: "The button on the pop-up",
    say: ["The button installed an app that watched everything you typed.",
      "There is nothing to check. A web page cannot see inside your phone, so leaving it is the whole answer.",
      "You closed the page. Nothing was wrong with your phone."],
    deciding: ["b6b"], reason: "A web page cannot see inside your phone. It shows this to frighten you into tapping." }),
  scamItem({
    id: "b-buyer", genuine: "scam", channel: "chat", request: "money",
    context: "You listed a bike for sale on Bramblecote Market.",
    message: scamChat("Buyer on Bramblecote Market", "Chat about the bike", [L("b7a", "I sent the money."), L("b7b", "Click here to confirm it so I can come get the bike.")], "bramblecote-confirm.example/pay"),
    right: "check", own: "The Bramblecote Market app, where payments show up", theirs: "The link in the chat",
    say: ["The page took your sign-in. Your account was used to list scam sales.",
      "The app shows no payment. You do not hand over the bike.",
      "You are safe, but you cannot tell whether a real buyer paid."],
    deciding: ["b7b"], reason: "Money you are owed arrives in your own account, never by confirming on a buyer’s link." }),
  scamItem({
    id: "b-manager", genuine: "scam", channel: "sms", request: "money",
    context: "Joel Brandt is your manager at Harrow Garage. You have his number saved.",
    message: scamSms("Joel B. (new number)", "Text message · 10:05 AM", [L("b8a", "It’s Joel. I’m stuck in a meeting."), L("b8b", "Buy three $150 gift cards for a customer and text me the codes.")]),
    right: "check", own: "Joel’s number that I already have", theirs: "A reply to this number",
    say: ["You sent three codes. The cards were emptied at once.",
      "Joel says he sent nothing. You kept $450.",
      "You are safe, but if Joel really needed something, he is waiting."],
    deciding: ["b8b"], reason: "A manager on a new number, who cannot talk, wanting gift cards in a hurry, is the shape of this trick. His real number is already in your phone." }),
  // the call that pushes back: the pressure rises on each reply that holds off
  { id: "b-call", strand: SCAM_STRAND, facets: { genuine: "scam", channel: "call", request: "login" }, blocks: [{ kind: "prose", text: "Your phone rings. You do not know the number." }],
    asks: [{ id: "call", kind: "exchange", prompt: "A caller says he is your bank. What do you say?", form: "call", from: "Fraud team", detail: "Incoming call · 6:15 PM", start: "one",
      turns: {
        one: { lines: [L("x1a", "This is the fraud team at Calderwood Bank. There is a payment on your account that you did not make."), L("x1b", "To stop it, I need the code we just texted you.")],
          push: "It frightens you and hurries you.", options: [
            { id: "give", text: "Read out the code", end: "gave" }, { id: "wait", text: "Say you will call the bank yourself", goto: "two" }, { id: "hang", text: "Hang up and call the number on my card", end: "hung" }] },
        two: { lines: [L("x2a", "Do not hang up. If you do, your account will be frozen and the money gone.")],
          push: "It threatens you to keep you on the line.", options: [
            { id: "give2", text: "Give in and read out the code", end: "gave" }, { id: "think", text: "Say you need a moment to think", goto: "three" }, { id: "hang2", text: "Hang up and call the number on my card", end: "hung" }] },
        three: { lines: [L("x3a", "I am a licensed officer. If you refuse to help me, you may be charged.")],
          push: "It uses a title to make you doubt yourself.", options: [
            { id: "give3", text: "Give in and read out the code", end: "gave" }, { id: "hang3", text: "Hang up and call the number on my card", end: "hung" }] }
      },
      ends: {
        gave: { ok: false, slip: "acted", then: "The code let them into your account, and they moved your money out in minutes." },
        hung: { ok: true, then: "You called the number on your card. The bank had not called, and your account was safe." } } }],
    deciding: [], reason: "No bank needs you to read out a code it just texted you, or to stay on the line. Hanging up and calling a number you already had ends it at once, however hard it pushes." },
  // something that already happened: the first step is what counts
  { id: "b-happened", strand: SCAM_STRAND, facets: { genuine: "scam", channel: "call", request: "money" },
    blocks: [{ kind: "prose", text: "Yesterday a caller said he was your bank, and you sent him $1,200. You have just worked out that it was not your bank." }],
    asks: [{ id: "order", kind: "order", prompt: "What do you do?", scored: "first", steps: [
      { id: "bank", text: "Call my bank on the number on my card" }, { id: "pass", text: "Change my password on the real site" },
      { id: "report", text: "Report it" }, { id: "caller", text: "Message the caller to get the money back" }],
      right: ["bank", "pass", "report"],
      then: "A bank can sometimes stop or recall a payment, but only in the first hours. So the bank comes before anything else, and the caller is the last person to contact." }],
    deciding: [], reason: "Your bank first, on a number you already had, because time counts. The password and the report follow." }
]);
})();
