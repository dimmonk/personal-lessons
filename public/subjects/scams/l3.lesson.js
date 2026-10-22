// Scams, lesson 3: Act, check or leave (part C, the subject's one rule on mixed messages). The pilot (docs/subjects/scams/design.md, gate 5), rewritten to
// the rule in the plan (docs/subjects/scams/plan.md, "The rule"): what does it want, did I start it, do I have an account with them or know the person;
// one worked text; a first group of three pairs that differ in one step of the rule (a code you asked for and one a stranger wants; a shop you have an
// account with and a courier you have none with; a real alert and a fake one); a second group of nine mixed messages, about half real, on a 20 second clock,
// the last kind of them someone known only online who wants money; and the check of part C: twelve new messages, half real, 20 seconds each, nothing shown
// until the end.
FC.lesson("scams", {
  id: "l3", part: "C", title: "Act, check or leave", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Scams under the practice engine. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "Rewritten to the subject’s one rule (plan, 2026-10-22). The first screen is the rule: do it when you started it; check, your own way, when you did not and you have an account with them or know the person; leave it when neither. Messages that want nothing are gone from the questions (the receipt, the pickup, the dentist’s call), so doing and leaving never mean the same thing; a monthly bill whose “do it” and “check” were the same tap is replaced by a payment agreed at dinner. The pairs now differ in one step of the rule. Someone known only online who wants money is practised before the check, with what else to do (tell someone you know in person). The gift-card outcome no longer says the money cannot be traced." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: the situation now says only what you would know (what you did, which accounts you hold), never “you did not start this”; real messages no longer always echo you, and two scams do (“calling you back as you asked”); every way to check is worded as something you would do, with a look-alike of your own way among the wrong ones and never the same wrong move twice; the rule screen says why checking beats leaving when the name is someone you know, why someone known only online does not count, and that a government office counts as one you deal with; the dentist asks through a link." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the rule says a message that claims “as you asked” is only its word; the scam that claims it says you had not called; the call-back is now a call you made to the number on your card; the grandson’s wrong ways are no longer the same move twice; the right “What else” answer moves; the online-only stranger has a wrong answer that fits a language app." }],
  why: [
    "A text, a call or a pop-up wants something from you: a tap, a payment, a code, a call. Many of them are real.",
    "You see messages as they arrive and choose what you would do: do what it says, check first through a way you already had, or leave it."
  ],
  flow: [
    { title: "The rule: three questions, then choose",
      show: [
        { kind: "prose", text: [
          "1. What does it want? Money, a sign-in or a code, your details, or your phone or computer. If it wants none of these, there is nothing to decide.",
          "2. Did I start it? A code or link I just asked for, a call back I asked for on a number I already had, a payment I agreed beforehand (the amount, or how it is worked out, and the way to pay). Then do what it says. A message that says “as you asked” is only its word: what counts is what you remember doing.",
          "3. If not: do I have an account with them, or know the person? My bank, my shop, a government office that has my records, my boss, my grandson. Then check first, through a way I already had: their app, the number on my card, an address I type, the number I have saved. Never the link, number or reply the message gives you. Checking beats just leaving it: a real one gets dealt with, and a fake one using a name I know is something that person or company needs to hear.",
          "If I have neither, leave it: delete it, close it, hang up. Someone I know only online (a friend, a match or a contact from a forum or game I have never met, not a buyer I deal with once) does not count as someone I know: their name, photos and story all came from them. If they want money, I also tell someone I know in person."] },
        { kind: "prose", tone: "wrong", text: [
          "It really is from my bank, so I can do what it says.",
          "A real message you did not start is checked your own way, the same as a copy, because from outside they look the same."] }] },
    { worked: "w-locked" },
    { set: { items: [["p-code-real", "p-code-fake"], ["p-ship-real", "p-ship-fee"], ["p-alert-real", "p-alert-fake"]], order: "listed" } },
    { set: { items: ["g-invoice-real", "g-invoice-new", "g-popup", "g-boss", "g-promo", "g-reset", "g-credit", "g-call", "g-online"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["k-callback", "k-payback", "k-promo", "k-alert-real", "k-credit-real", "k-dental", "s-held", "s-final", "s-buyer", "s-grandson", "s-suspended", "s-romance"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
