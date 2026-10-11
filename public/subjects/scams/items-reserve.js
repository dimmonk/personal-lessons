// Scams, lesson 3 "Act, check or leave": three messages held in reserve for the weekly review (no lesson names them), so the topic comes back on a
// message the learner has not seen. One real, to leave; two scams, one to leave and one to check. Invented senders.
(() => {
const L = scamLine;
FC.items("scams", [
  scamItem({
    id: "r-gift", genuine: "scam", channel: "sms", request: "money",
    context: "You have never shopped at Orchard & Pine Garden Center.",
    message: scamSms("Orchard & Pine", "Text message · 2:45 PM", [L("r1a", "You won a $500 gift card!"), L("r1b", "Pay $4.99 shipping to claim it.")], "orchard-pine-gifts.example/claim"),
    right: "leave", own: "Orchard & Pine’s own website, typed in by me", theirs: "The link in the text",
    say: ["The page took your card for “shipping”, and no gift card ever came.",
      "There is nothing of yours to check. You never entered a draw, so there is no prize.",
      "You are safe. You never shopped there, so nothing is waiting for you."],
    deciding: ["r1b"], reason: "You never entered anything, so there is nothing to win and nothing to check. A fee to claim a prize is the request." }),
  scamItem({
    id: "r-statement", genuine: "genuine", channel: "email", request: "none",
    context: "Penhallow Credit Union emails you when your monthly statement is ready.",
    message: scamEmail("Penhallow Credit Union", "Email · November 1", "Your statement is ready", [L("r2a", "Your October statement is ready."), L("r2b", "You will find it in the Penhallow app. No action needed.")]),
    right: "leave", own: "The Penhallow app", theirs: "The details in the email",
    say: ["There was nothing to do, so nothing happened.",
      "The app shows the statement. A minute spent and not needed.",
      "You did nothing, which is all it needed."],
    deciding: ["r2b"], reason: "It tells you something you expect and says no action is needed." }),
  scamItem({
    id: "r-clinic", genuine: "scam", channel: "email", request: "money",
    context: "You saw Dr. Okafor last month.",
    message: scamEmail("Okafor Family Clinic", "Email · Tuesday", "Balance due", [L("r3a", "You have an unpaid balance of $75."), L("r3b", "Pay today to avoid a collections fee.")], "okafor-clinic-pay.example"),
    right: "check", own: "The number on my last bill", theirs: "The link in the email",
    say: ["The page took your card, and the clinic never sent that bill.",
      "The clinic says your balance is zero. You kept $75.",
      "You are safe, but a real balance would still be waiting."],
    deciding: ["r3b"], reason: "You did see the doctor, which makes a bill believable. A deadline and a collections threat in an email are the pressure, and the number on your last bill settles it." })
]);
})();
