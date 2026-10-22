// Scams, lesson 12 "The first hour": something already went out. Each question is a loss of one kind (money, a password, your device, your Social Security
// number), from a scam that worked or from a real event (a stolen wallet, a leak, a hacked account), and asks the first step, then the two that come next.
// The steps are the FTC's for each kind (S13, S34), the password ones CISA's too (S35): money: the bank or company it went through, at once, and get them to
// request that they reverse it; a password: a new one, then two-step sign-in and the same change wherever it was used again; a device: update the security software and scan,
// then new passwords; a number: IdentityTheft.gov, a freeze at each of the three bureaus, the credit reports. Report what a scammer did at
// ReportFraud.ftc.gov; an offer to get money back for a fee is a scam of its own. The worked question, eight to practice, five for the check, three in reserve.
(() => {
const F = "first-hour";
// what the first step leads to when it is not the right one, by the kind of loss (the right one's line is the item's own `done`)
const WRONG_FIRST = {
  money: {
    password: "That matters if you also gave a password. The money comes first: only the company it went through can try to stop it, and only at once.",
    scan: "Nothing was put on your device. The money comes first: only the company it went through can try to stop it.",
    idtheft: "That is for your Social Security number. The money comes first: call the company it went through, at once.",
    report: "Report it too, but after the call: a report does not stop the money, and the company may still be able to.",
    wait: "Waiting is what lets the money go for good. The company it went through can try to stop it only at once.",
    caller: "Whoever took it will not send it back, and every message gives them another try.",
    recover: "Paying someone to get it back loses more: an offer to recover money for a fee is a scam of its own." },
  password: {
    mover: "No money has moved. The password is what went out, so you change it first, before someone uses it.",
    scan: "Nothing was put on your device. The password is what went out, so you change it first.",
    idtheft: "That is for your Social Security number. The password is what went out, so you change it first.",
    report: "Report it if a scammer did it, but first change the password: until then, whoever has it can sign in.",
    wait: "Until you change it, whoever has the password can sign in as you.",
    caller: "Whoever has it will not give it back. A new password is what shuts them out.",
    recover: "Nobody needs paying. A new password, made by you, shuts them out." },
  device: {
    mover: "No money has moved yet. The device is what someone got into, so you clean it first.",
    password: "Change them next. First update the security software and run a scan, so nothing left on the device sees the new ones.",
    idtheft: "That is for your Social Security number. The device is what someone got into, so you clean it first.",
    report: "Report it too, but first clean the device: whatever was put on it is still running.",
    wait: "Whatever was put on the device keeps running while you wait.",
    caller: "Contacting him again gives him another way in.",
    recover: "Paying someone who offers to undo it can be the same trick again. Your own security software does the scan." },
  ssn: {
    mover: "No money went out yet. Your number is what went out, and IdentityTheft.gov gives you the steps for it.",
    password: "A password was not what went out. Your number was, and IdentityTheft.gov gives you the steps for it.",
    scan: "Nothing was put on your device. Your number is what went out.",
    report: "IdentityTheft.gov is the place for a number that went out: it gives you a plan, a freeze among the steps.",
    wait: "Someone with your number can open accounts in your name while you wait.",
    caller: "Whoever has it will not give it back, and every message gives them another try.",
    recover: "Paying someone who calls to “protect” your number can be the same trick again." }
};
const RIGHT_FIRST = { money: "mover", password: "password", device: "scan", ssn: "idtheft" };
const REQUEST = { money: "money", password: "login", device: "device", ssn: "details" };
// spec: { id, genuine, loss, situation, only (the other four options of the first step), done (what the right first step leads to), next: [right, right],
//   not: [[text, why, slip?], [text, why, slip?]], reason, steps? }
const firstItem = spec => {
  const right = RIGHT_FIRST[spec.loss], shown = [right, ...spec.only];
  const turn = wayHash(spec.id);
  const [text0, why0, slip0] = spec.not[0], [textX, whyX] = CROSS_NEXT[spec.loss];
  const nexts = [...spec.next.map((text, k) => ({ id: `ok${k}`, text, ok: true, then: NEXT_WHY[text] })),
    { id: "no0", text: text0, then: why0, ...(slip0 ? { slip: slip0 } : {}) }, { id: "other", text: textX, then: whyX }];
  return { id: spec.id, strand: F, facets: { genuine: spec.genuine, request: REQUEST[spec.loss] },
    blocks: [{ kind: "prose", text: spec.situation }],
    asks: [
      { id: "first", kind: "choose", prompt: "What do you do first?", from: "first", right, only: [...shown.slice(turn % 5), ...shown.slice(0, turn % 5)],
        then: Object.fromEntries(shown.map(o => [o, o === right ? spec.done : WRONG_FIRST[spec.loss][o]])),
        slips: spec.genuine === "scam" && spec.only.includes("recover") ? { recover: "acted" } : {} },
      { id: "next", kind: "choose", prompt: "Then which two come next? Tap both.", many: true, options: [...nexts.slice(turn % 4), ...nexts.slice(0, turn % 4)] }],
    deciding: [], reason: spec.reason, ...(spec.steps ? { steps: spec.steps } : {}) };
};
// why each of the next steps comes next (one line for each, so no two right options share a reason)
const NEXT_WHY = {
  "Tell them a scammer tricked me, and request that they reverse the payment": "Saying it was a scam is what lets them try to reverse it.",
  "Tell them it was fraud, and request that they reverse it": "Saying it was fraud is what lets them try to reverse it.",
  "Tell them which charges were not mine, and request a refund": "Naming each charge is what lets them refund each one.",
  "Tell them the payment was not mine, and request that they reverse it": "Saying it was not you is what lets them try to reverse it.",
  "Report it at ReportFraud.ftc.gov": "A report helps stop the same scam reaching others.",
  "Keep the gift cards and the receipt": "The company may need the cards and the receipt to follow up.",
  "Follow up with the bank in writing": "Putting it in writing backs up your call.",
  "Turn on two-step sign-in for the account": "With two-step sign-in, a password alone no longer gets anyone in.",
  "Change the password anywhere else I used the same one": "A password that works on one account opens every account that shares it.",
  "Change my passwords and turn on two-step sign-in": "Whatever was seen on the device is useless once the passwords are new.",
  "Make a new PayLane password and turn on two-step sign-in": "Whoever has the phone is shut out of the account.",
  "Freeze my credit at each of the three credit bureaus": "A freeze keeps people from opening credit in your name, and costs nothing.",
  "Get my credit reports and look for accounts I do not know": "An account you do not know is the sign your number is being used.",
  "Look at my other credit reports for more accounts I do not know": "Another account you do not know shows how far it has gone."
};
// a real step for another kind of loss, offered among the next steps so they are chosen by the kind of loss, not by common sense
const CROSS_NEXT = {
  money: ["Freeze my credit at each of the three credit bureaus", "A freeze is for a Social Security number that went out. Here it was money, and the company it went through deals with it."],
  password: ["Freeze my credit at each of the three credit bureaus", "A freeze is for a Social Security number that went out. Here it was a password."],
  device: ["Go to IdentityTheft.gov and follow its steps", "That is for a Social Security number that went out. Here someone got into your device."],
  ssn: ["Turn on two-step sign-in for my email", "Two-step sign-in is for a password that went out. Here it was your number."]
};
const MONEY_NEXT = ["Tell them a scammer tricked me, and request that they reverse the payment", "Report it at ReportFraud.ftc.gov"];
const PASSWORD_NEXT = ["Turn on two-step sign-in for the account", "Change the password anywhere else I used the same one"];
const DEVICE_NEXT = ["Change my passwords and turn on two-step sign-in", "Report it at ReportFraud.ftc.gov"];
const SSN_NEXT = ["Freeze my credit at each of the three credit bureaus", "Get my credit reports and look for accounts I do not know"];
FC.items("scams", [
  // ----- the worked question -----
  firstItem({
    id: "l12w-transfer", genuine: "scam", loss: "money",
    situation: "An hour ago a caller said he was Ashgrove’s fraud team, and you moved $1,800 by bank transfer to the “safe account” he gave. You have just called the number on your card and learned it was not your bank.",
    only: ["report", "wait", "caller", "recover"],
    done: "The bank put a stop on the transfer and tried to pull it back. Speed is what gives it a chance.",
    next: MONEY_NEXT, not: [["Call the “fraud team” back on the number he used", "That number is his. It leads back to the scam."], ["Pay the fee a “recovery service” offers", "An offer to get money back for a fee is a scam of its own.", "acted"]],
    reason: "Money that went out is stopped, if at all, by the bank it went through, and only at once. Then you request that they reverse it, and report the scam.",
    steps: [
      { id: "what", does: "See what went out.", working: "Money, $1,800, by bank transfer." },
      { id: "who", does: "Find who can stop it.", working: "Only the bank it went through, Ashgrove, and only at once." },
      { id: "first", does: "Do that first.", working: "Call Ashgrove on the number on your card, now.", ask: "first" },
      { id: "then", does: "Then the next two.", working: "Request that they reverse the payment, then report the scam at ReportFraud.ftc.gov.", ask: "next" }] }),

  // ----- practice: eight, half from a scam, half from a real event -----
  firstItem({
    id: "l12g-giftcards", genuine: "scam", loss: "money",
    situation: "This morning you bought $500 in gift cards and read the numbers to a caller who said he was from the county. You still have the cards and the receipt.",
    only: ["idtheft", "report", "caller", "recover"],
    done: "The gift card company, on the number on the back of the card, may freeze what is left on the cards.",
    next: ["Keep the gift cards and the receipt", "Report it at ReportFraud.ftc.gov"],
    not: [["Throw the used cards away", "Keep them: the company may need the cards and the receipt to follow up."], ["Call the caller back on the number he used", "That number is his. It leads back to the scam."]],
    reason: "Gift card money is stopped, if at all, by the company that issued the cards, on the number on their back, at once. Keep the cards and the receipt for it, then report the scam." }),
  firstItem({
    id: "l12g-copied", genuine: "scam", loss: "password",
    situation: "An hour ago you typed your Fernbrook email password on a page a text sent you to. You can still sign in to your account.",
    only: ["mover", "report", "wait", "caller"],
    done: "Your new password shut out whoever got the old one.",
    next: PASSWORD_NEXT,
    not: [["Sign in again through the text’s link to look", "That page is the one that took your password."], ["Wait to see if anything happens", "Whoever has the password can use it while you wait."]],
    reason: "A password that went out is changed first, in the app or on the site you open yourself. Then two-step sign-in, and the same change wherever you used that password again." }),
  firstItem({
    id: "l12g-remote", genuine: "scam", loss: "device",
    situation: "Yesterday a caller who said he was from your internet company got you to install an app so he could see your laptop. He has hung up.",
    only: ["mover", "report", "wait", "recover"],
    done: "The scan found the app he had you install and took it off.",
    next: DEVICE_NEXT,
    not: [["Call him back so he can take the app off", "Calling him back lets him in again."], ["Keep banking on the laptop as usual", "Stop signing in to accounts on it until it is cleaned and the passwords are new."]],
    reason: "A device someone got into is cleaned first: update the security software and run a scan. Then new passwords with two-step sign-in, and a report of the scam." }),
  firstItem({
    id: "l12g-ssn", genuine: "scam", loss: "ssn",
    situation: "Yesterday you gave your Social Security number and birthday to a caller who said he was from a bank you have never used.",
    only: ["mover", "report", "wait", "caller"],
    done: "IdentityTheft.gov gave you a plan for your situation, step by step.",
    next: SSN_NEXT,
    not: [["Call him back and tell him to delete it", "He will not, and every call gives him another try."], ["Wait until something goes wrong", "Someone with your number can open accounts in your name while you wait."]],
    reason: "A number that went out is reported at IdentityTheft.gov, which gives you a plan. Then freeze your credit at each of the three bureaus, which is free, and look at your credit reports." }),
  firstItem({
    id: "l12g-wallet-real", genuine: "genuine", loss: "money",
    situation: "Your wallet was stolen yesterday. In the Penhallow app, which you opened yourself, you see two charges on your debit card that you did not make: $380 and $95.",
    only: ["password", "idtheft", "report", "wait"],
    done: "Penhallow stopped the card and opened a claim for the two charges.",
    next: ["Tell them which charges were not mine, and request a refund", "Follow up with the bank in writing"],
    not: [["Wait for the next statement to see if more appear", "Report it at once: the sooner you tell the bank, the less you can lose."], ["Keep using the card until the new one comes", "Whoever has it can keep using it too."]],
    reason: "Money that went out is stopped by the bank it went through, at once: for a debit card, what you owe depends on how fast you tell them. Then a refund for the charges, and the same in writing." }),
  firstItem({
    id: "l12g-leak-real", genuine: "genuine", loss: "ssn",
    situation: "Thistlewick posted on its own site, which you typed in, that thieves took its customers’ names and Social Security numbers. Yours was among them.",
    only: ["mover", "password", "report", "wait"],
    done: "IdentityTheft.gov gave you the steps for a number taken in a leak.",
    next: SSN_NEXT,
    not: [["Reply to an email that offers to fix it, with my number", "That sends your number out again, to whoever wrote the email."], ["Wait until something goes wrong", "Someone with your number can open accounts in your name while you wait."]],
    reason: "A number that went out goes to IdentityTheft.gov first. A freeze at each of the three bureaus is free, and your credit reports show anything opened in your name." }),
  firstItem({
    id: "l12g-signin-real", genuine: "genuine", loss: "password",
    situation: "In the Fernbrook app’s security page, which you opened yourself, you see a sign-in last night from a city you have never been to.",
    only: ["mover", "scan", "idtheft", "wait"],
    done: "Your new password signed the stranger out.",
    next: PASSWORD_NEXT,
    not: [["Leave it, since nothing seems missing", "Whoever signed in can come back while the password is the same."], ["Email Fernbrook my old password so it can look", "Never send a password to anyone."]],
    reason: "Someone signed in with your password, so you change it first, in the app. Then two-step sign-in, and the same change wherever you used it again." }),
  firstItem({
    id: "l12g-insurer-real", genuine: "genuine", loss: "ssn",
    situation: "Linden Mutual, your health insurer, says in its app, which you opened yourself, that thieves took members’ names and Social Security numbers. Yours was among them.",
    only: ["mover", "password", "report", "wait"],
    done: "IdentityTheft.gov showed you the steps for a number taken in a leak.",
    next: SSN_NEXT,
    not: [["Reply to the email that offers free “protection”, with my number", "That sends your number out again, to whoever wrote the email."]],
    reason: "Your number went out, so IdentityTheft.gov comes first. Then a free freeze at each of the three bureaus, and a look at your credit reports." }),

  // ----- the check: five new -----
  firstItem({
    id: "l12k-crypto", genuine: "scam", loss: "money",
    situation: "Last night you put $3,000 into a crypto machine because a caller said your bank account was frozen. This morning you see it was a scam. The machine company’s number is on your receipt.",
    only: ["idtheft", "report", "caller", "recover"],
    done: "The machine’s company took your report of fraud and looked for the payment.",
    next: ["Tell them it was fraud, and request that they reverse it", "Report it at ReportFraud.ftc.gov"],
    not: [["Send more to “unfreeze” the first payment", "That is the same scam again.", "acted"], ["Wait to see if the caller sends it back", "He will not, and waiting lets the money go for good."]],
    reason: "Money that went out is stopped, if at all, by the company it went through, here the crypto machine’s, and only at once." }),
  firstItem({
    id: "l12k-medicare", genuine: "scam", loss: "ssn",
    situation: "On a call yesterday you gave your Social Security number to someone who said he was from Medicare. You know now he was not.",
    only: ["mover", "password", "wait", "recover"],
    done: "IdentityTheft.gov gave you a plan for your situation.",
    next: SSN_NEXT,
    not: [["Call him back to cancel what you gave", "He will not, and every call gives him another try."], ["Wait until something goes wrong", "Someone with your number can open accounts in your name while you wait."]],
    reason: "A number that went out goes to IdentityTheft.gov first. Then a free freeze at each of the three bureaus, and your credit reports." }),
  firstItem({
    id: "l12k-refund", genuine: "scam", loss: "device",
    situation: "This morning a “refund” caller got you to install an app so he could see your computer. He has hung up.",
    only: ["mover", "idtheft", "report", "caller"],
    done: "The scan found the app and took it off.",
    next: DEVICE_NEXT,
    not: [["Let him back on to take the app off", "That lets him in again."], ["Sign in to my bank on the same computer to look", "Not until it is cleaned: whatever he left can see what you type."]],
    reason: "A device someone got into is cleaned first: update the security software and run a scan. Then new passwords with two-step sign-in, and a report." }),
  firstItem({
    id: "l12k-phone-real", genuine: "genuine", loss: "money",
    situation: "Your phone was stolen at a café. Later, in your PayLane account on your laptop, you see $250 sent to a name you do not know.",
    only: ["scan", "idtheft", "wait", "caller"],
    done: "PayLane took your report and looked into the payment.",
    next: ["Tell them the payment was not mine, and request that they reverse it", "Make a new PayLane password and turn on two-step sign-in"],
    not: [["Wait until the phone turns up", "Whoever has it can keep sending your money."], ["Message the stranger and tell them to send it back", "They will not, and it gives them another try."]],
    reason: "Money that went out is stopped by the company it went through, here the payment app, at once. The phone is in someone else’s hands, so a new password with two-step sign-in comes next." }),
  firstItem({
    id: "l12k-leak-real", genuine: "genuine", loss: "password",
    situation: "Fernbrook, your email service, told you in its own app that your password was found in a leak from another site.",
    only: ["mover", "idtheft", "report", "wait"],
    done: "Your new password shut out anyone holding the old one.",
    next: PASSWORD_NEXT,
    not: [["Keep the password, since nothing has happened yet", "Anyone with the leaked password can sign in until you change it."], ["Reply with the password so they can check it", "Never send a password to anyone."]],
    reason: "A password that went out is changed first, in the app. Then two-step sign-in, and the same change wherever you used it again: a leak on one site opens every account with the same password." }),

  // ----- held in reserve for the review -----
  firstItem({
    id: "l12r-seller", genuine: "scam", loss: "money",
    situation: "You paid $400 in PayLane to a seller you found online for a couch that never came. The seller has stopped answering.",
    only: ["password", "report", "caller", "recover"],
    done: "PayLane took your report and looked into the payment.",
    next: MONEY_NEXT,
    not: [["Send the seller $50 more to “release” the couch", "That is the same scam again.", "acted"], ["Wait another week for the couch", "Waiting lets the money go for good."]],
    reason: "Money that went out is stopped, if at all, by the company it went through, here the payment app, at once." }),
  firstItem({
    id: "l12r-alert-real", genuine: "genuine", loss: "password",
    situation: "In the Alderwick app, which you opened yourself, you see that your password was changed last night, and you did not change it. You can still sign in with a code.",
    only: ["mover", "scan", "idtheft", "wait"],
    done: "Your new password shut out whoever changed it.",
    next: PASSWORD_NEXT,
    not: [["Wait to see if anything is missing", "Whoever changed it can sign in while you wait."], ["Send the old password to Alderwick by email", "Never send a password to anyone."]],
    reason: "Someone has your account’s password, so you make a new one first, in the app. Then two-step sign-in, and the same change wherever you used it again." }),
  firstItem({
    id: "l12r-purse-real", genuine: "genuine", loss: "ssn",
    situation: "Your bag was stolen on the bus. Your Social Security card was in it.",
    only: ["mover", "password", "report", "wait"],
    done: "IdentityTheft.gov gave you a plan for a stolen number.",
    next: SSN_NEXT,
    not: [["Wait until something goes wrong", "Someone with your number can open accounts in your name while you wait."], ["Post your number online so friends can watch for it", "That sends it out to everyone."]],
    reason: "A number that went out goes to IdentityTheft.gov first. Then a free freeze at each of the three bureaus, and your credit reports." })
]);
})();
