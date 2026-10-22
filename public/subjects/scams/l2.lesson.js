// Scams, lesson 2: Your own way in (part B, the third question of the way of thinking). Why whatever a message gives you belongs to the sender, and the ways
// you already had; one worked call; two pairs; six mixed messages on a clock; the learner's own setup (their bank's number, their apps, a secret word for
// their family); and the check: eight new messages, 15 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l2", part: "B", title: "Your own way in", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "After the two reviews: every message is one the rule says to check (it wants something, you did not start it, and it uses the name of a company you have an account with or a person you know), so no message that wants nothing is checked; the wrong ways now include a number a web search shows, which is neither yours nor the message’s; the family secret word is explained; the check needs 7 of 8." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: every way to check is worded as something you would do, so the word “my” no longer gives the answer away, and wrong ones that look like yours (a number your phone shows, a number found by searching) are among them; the list of your own ways says where each comes from, what to do with no card or bill, and that a caller who cannot say the family word gets a call back on the number you have; the worked call from the police is checked because a government office counts as one you deal with; the line that a real message is checked the same way is said once here instead of after each answer." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the family word is said in full; a government office’s web address comes from its letter; wrong ways to check no longer offer the message’s channel twice; reasons no longer mention a reply that is not offered." }],
  why: [
    "Some messages you check before you act: ones you did not start, that use the name of a company you deal with or a person you know. The check goes wrong when you check with the sender.",
    "You see such a message, and pick the way to check it that the sender cannot steer."
  ],
  flow: [
    { title: "What a message gives you belongs to the sender",
      show: [
        { kind: "prose", text: [
          "A link, a phone number, a reply button, a badge number, “I’ll transfer you”: whatever comes with a message was put there by the sender.",
          "A scammer can make a fake badge with a friend’s phone number on it. If you call that number, the friend answers.",
          "A number your phone shows can be faked, and a searched number can be a scammer’s ad. Neither is a way you already had. Real messages are checked the same way."] },
        { kind: "prose", tone: "wrong", text: [
          "The number on my screen is my bank’s, so the call must be my bank.",
          "Scammers can change the number your screen shows. The number on the back of your card is the one to call."] }] },
    { title: "Your own ways in",
      show: [{ kind: "prose", lines: [
        { id: "t1", text: "The company’s app, from your own app store." },
        { id: "t2", text: "The number on your card, a bill or a letter." },
        { id: "t3", text: "A web address you type, copied from a bill or letter." },
        { id: "t4", text: "A number you saved before the message came." },
        { id: "t5", text: "A secret word you agree with your family face to face. If a caller says he is family in trouble and cannot say the word, hang up and call him on the number you have." }] },
        { kind: "prose", text: [
          "No card or bill? The company’s app. A government office: its own website, at the address on a letter from it (most end in .gov).",
          "In the check, one pick of what the message gave you fails it."] }] },
    { worked: "w-badge" },
    { set: { items: [["a-card-fake", "a-card-real"], ["a-shop-fake", "a-shop-real"]], order: "listed" } },
    { set: { items: ["b-payout-fake", "b-pharmacy-real", "b-landlord-fake", "b-gas-real", "b-policy-fake", "b-eli-real"], order: "shuffle", seconds: 15 } },
    { own: "setup" }
  ],
  check: {
    items: ["k-lab-fake", "k-address-real", "k-bank-call", "k-card-real", "k-boss-fake", "k-bill-real", "k-post-fake", "k-cable-real"],
    feedback: "at-end", seconds: 15, order: "shuffle",
    pass: [{ right: { min: 7 } }, { slip: "their-way", max: 0 }]
  }
});
