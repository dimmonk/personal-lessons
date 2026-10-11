// Scams, lesson 3: Act, check or leave (part C, Act, check or leave, on mixed messages). The pilot (docs/subjects/scams/design.md, gate 5). Three
// questions to ask of any message (what does it want, did I start it, is there a way I already had), one worked text; a first group of three pairs that
// differ in one thing (a code you asked for and one you did not, a parcel notice and a fee to release it, a real alert and a fake one); a second group of
// eight mixed messages, half real, on a 20 second clock; and the check of part C: twelve new messages, half real, 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l3", part: "C", title: "Act, check or leave", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Scams under the practice engine. Not tried on a phone yet." }],
  why: [
    "A text, a call or a pop-up wants something from you: a tap, a payment, a code, a call. Half the ones you get are real.",
    "You see messages as they arrive and choose what you would do: do what it says, check first through a way you already had, or leave it."
  ],
  flow: [
    { title: "Three questions, then choose",
      show: [{ kind: "prose", text: [
        "1. What does it want? A payment, a code, your details, or your phone or computer.",
        "2. Did I start this, just now, here? A code you just asked for is yours. A message out of the blue is not.",
        "3. Is there a way I already had? Your bank’s app, the number on your card, the shop’s order page. Never the link, number or reply the message gives you.",
        "Then choose. Do what it says only when you started it. Check first when you did not and you have a way of your own. Leave it when nothing of yours is involved."] }] },
    { worked: "w-locked" },
    { set: { items: [["p-code-real", "p-code-fake"], ["p-ship-real", "p-ship-fee"], ["p-alert-real", "p-alert-fake"]], order: "listed" } },
    { set: { items: ["g-invoice-real", "g-invoice-new", "g-popup", "g-boss", "g-receipt", "g-reset", "g-credit", "g-call"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["k-pickup", "k-bill", "k-buyer", "k-alert-real", "k-credit-real", "k-dental-call", "s-held", "s-final", "s-buyer", "s-grandson", "s-suspended", "s-romance"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
