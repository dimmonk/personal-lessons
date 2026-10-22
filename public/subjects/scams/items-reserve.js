// Scams, lesson 3 "Act, check or leave": three messages held in reserve for the weekly review (no lesson names them), so the topic comes back on a
// message the learner has not seen. One real, to check; two scams, one to leave and one to check. Invented senders.
(() => {
const L = scamLine;
FC.items("scams", [
  scamItem({
    id: "r-gift", genuine: "scam", channel: "sms", request: "money",
    context: "You have never shopped at Orchard & Pine Garden Center.",
    message: scamSms("Orchard & Pine", "Text message · 2:45 PM", [L("r1a", "You won a $500 gift card!"), L("r1b", "Pay $4.99 shipping to claim it.")], "orchard-pine-gifts.example/claim"),
    right: "leave",
    say: ["The page took your card for “shipping”, and no gift card ever came.",
      "There is nobody to check with: you have no account with them.",
      "You deleted it and kept your money."],
    deciding: ["r1b"], reason: "You did not start it and you have no account with them, so you leave it. Real prizes are free: a fee to claim one settles it." }),
  scamItem({
    id: "r-renew", genuine: "genuine", channel: "email", request: "login", offers: true,
    context: "Your car insurance is with Linden Mutual, and its app is on your phone.",
    message: scamEmail("Linden Mutual", "Email · November 1", "Your policy renews soon", [L("r2a", "Your policy renews on December 1."), L("r2b", "Sign in at the link to review your new price.")], "lindenmutual.example/renew"),
    right: "check", own: "The Linden Mutual app on my phone", theirs: "The page the email’s link opens on my phone",
    say: ["This time the link was real. You could not have known, and a copy looks the same.",
      "The app shows the renewal and the new price.",
      "Your policy renews at the new price without your having looked."],
    deciding: ["r2b"], reason: "You did not start it and it is your insurer, so you go in through the app you already have." }),
  scamItem({
    id: "r-clinic", genuine: "scam", channel: "email", request: "money",
    context: "You saw Dr. Okafor last month. The clinic’s number is on your last bill.",
    message: scamEmail("Okafor Family Clinic", "Email · Tuesday", "Balance due", [L("r3a", "Pay today to avoid a collections fee."), L("r3b", "You have an unpaid balance of $75.")], "okafor-clinic-pay.example"),
    right: "check", own: "The number on my last bill", theirs: "The page the email’s link opens on my phone",
    say: ["The page took your card, and the clinic never sent that bill.",
      "The clinic says your balance is zero. You kept $75.",
      "You are safe, but it uses your clinic’s name, and a real balance would still be waiting."],
    deciding: ["r3a"], reason: "You did not start it and it uses the name of a clinic you go to, so you check on the number on your last bill." })
]);
})();
