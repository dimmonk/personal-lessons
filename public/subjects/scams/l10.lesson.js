// Scams, lesson 10: When it pushes (part J). The move when a contact pushes: stop, say the exit line, and call back on the number you have, or leave it
// (S6, S10, S14, S19); one worked call; six calls and chats whose pressure rises when you hold off, among six real messages that hurry you; ten messages
// arriving as banners over the busy task (Distraction, S6), half real; and the check: three new calls that push and three real messages. Every answer is
// the subject's one rule (plan.md, "The rule").
FC.lesson("scams", {
  id: "l10", part: "J", title: "When it pushes", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams on the subject’s one rule. Not tried on a phone yet." }],
  why: [
    "A call or chat that pushes harder each time you hold back is built to keep you from thinking. So is a message that lands while you are busy.",
    "You practice ending it, out loud, and deciding while doing something else."
  ],
  flow: [
    { title: "When it pushes, stop",
      show: [
        { kind: "prose", text: [
          "Hurry, fear, a threat, “tell no one”, “stay on the line”: each is a reason to stop, not to act. Honest callers give you time.",
          "Your line: “I don’t do this on the phone. I’ll call back on the number I have.” Then hang up and call that number, if it uses the name of someone you deal with. If not, just hang up.",
          "Holding back without ending it only brings the next push.",
          "A call you placed yourself, to a number you already had, is different. It may hurry you too, and you stay with it: you started it."] },
        { kind: "prose", tone: "wrong", text: [
          "Hanging up is rude. I will hear them out.",
          "Ending a call costs nothing. People who stop early mostly lose nothing."] }] },
    { worked: "l10w-safe" },
    { set: { items: ["l10x-safe", "l10g-code-real", "l10x-grandkid", "l10g-alert-real", "l10x-boss", "l10g-insure-real", "l10x-courier", "l10g-seller-real", "l10x-buyer", "l10x-pharmacy", "l10x-invest", "l10g-boss-real"], order: "shuffle", seconds: 20 } },
    { title: "While you are busy",
      show: [{ kind: "prose", text: "Messages often land while you are doing something else, and that is when people tap without thinking. Next, you sort a shopping list while messages arrive. Decide each one the same way." }] },
    { set: { items: ["l10b-code-real", "l10b-cabin-real", "l10b-checkout-real", "l10b-gas-real", "l10b-phone-real", "l10b-locked-fake", "l10b-boss-fake", "l10b-courier-fake", "l10b-prize-fake", "l10b-son-fake"], order: "shuffle", seconds: 20, over: "busy" } }
  ],
  check: {
    items: ["l10k-sim", "l10k-nephew", "l10k-prize", "l10k-code-real", "l10k-alert-real", "l10k-wallet"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
