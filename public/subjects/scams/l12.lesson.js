// Scams, lesson 12: The first hour (part L). Something already went out: one screen per kind of loss with its first step and the two after it (S13, S34,
// S35), then the report and the recovery offer that is a scam of its own; one worked question; eight losses to practice, from scams and from real events
// such as a stolen wallet or a leak; and the check: five new, every first step right (a procedure practiced on new cases, R8).
FC.lesson("scams", {
  id: "l12", part: "L", title: "The first hour", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." }],
  why: [
    "If money, a password, your device or your Social Security number has already gone out, what you do first decides how much you get back.",
    "You learn the first step for each, then do it on new situations."
  ],
  flow: [
    { title: "If money went out",
      show: [{ kind: "prose", text: [
        "Call the bank or company the money went through, on its own number, at once: your bank, the payment app, the wire company, the crypto company, or the gift card company on the number on the back of the card.",
        "Tell them a scammer tricked you, and request that they reverse it. Only they can try to stop it, and only quickly. Keep a gift card and its receipt.",
        "A stolen card: call the bank at once, then follow up in writing. For a debit card, what you owe depends on how fast you tell them; for a credit card it is at most $50."] }] },
    { title: "If a password or your device went out",
      show: [{ kind: "prose", text: [
        "A password: make a new one, in the app or on the site you open yourself. Then turn on two-step sign-in, and change the password anywhere you used the same one.",
        "Your device: update your security software and run a scan, and stop signing in to accounts on it until then. Then new passwords, with two-step sign-in."] }] },
    { title: "If your Social Security number went out",
      show: [{ kind: "prose", text: "Go to IdentityTheft.gov: it tells you the steps, and if your number has been used, it gives you a recovery plan. Freeze your credit at each of the three credit bureaus, which is free. Get your credit reports and look for accounts you do not know." }] },
    { title: "Then",
      show: [
        { kind: "prose", text: "Report a scam at ReportFraud.ftc.gov. An offer to get your money back for a fee is another scam." },
        { kind: "prose", tone: "wrong", text: ["It is gone, so there is no hurry now.", "Right away is when the company can still try to stop the money, and when a new password still shuts someone out."] }] },
    { worked: "l12w-transfer" },
    { set: { items: ["l12g-giftcards", "l12g-wallet-real", "l12g-copied", "l12g-leak-real", "l12g-remote", "l12g-signin-real", "l12g-ssn", "l12g-insurer-real"], order: "shuffle" } }
  ],
  check: {
    items: ["l12k-crypto", "l12k-medicare", "l12k-refund", "l12k-phone-real", "l12k-leak-real"],
    feedback: "at-end", order: "shuffle",
    pass: [{ ask: "first", wrong: { max: 0 }, of: "the first step" }]
  }
});
