// Scams, lesson 1: What does it want? (part A, the first question of the way of thinking). Five things a message can want and what does not matter; one
// worked text; two pairs that look alike and want different things; six mixed messages on a clock; and the check: ten new messages, 15 seconds each,
// nothing shown until the end.
FC.lesson("scams", {
  id: "l1", part: "A", title: "What does it want?", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "After the two reviews: the line that wants something is now first, in the middle or last, and some messages are three lines long; the battery banner says what it wants; the worked text asks for a sign-in in plain words; the first screen no longer overstates what experts do, and says that naming comes before deciding." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: “What does it want?” comes first and the tap on the line follows only when it wants something, so the tap no longer gives “nothing” away; a message that wants nothing now carries a link and a date; that a code works like a password is said on the first screen; feedback no longer points to earlier screens or to later lessons." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the courier text says that whether to trust a sender comes later." }],
  why: [
    "A text, an email, a call or a pop-up lands on your phone, and it looks real or it does not. Before anything else, find out what it wants from you.",
    "You tap the line that wants something, then say what it wants."
  ],
  flow: [
    { title: "Five things a message can want",
      show: [
        { kind: "prose", text: [
          "A message only becomes something to decide when it wants something from you. People who are good at this get suspicious when a message wants them to do something. How it looks cannot settle it, because a scam can copy all of it.",
          "Here you only name what a message wants. A real bill wants money too: what to do about it comes in the next lessons."] },
        { kind: "prose", lines: [
          { id: "t1", text: "Money. To pay, send or buy something: a bill, a fee, a transfer, gift cards." },
          { id: "t2", text: "A sign-in or a code. To type your password, or to type or read out a code. A code works like a password." },
          { id: "t3", text: "Your details. Your address, birthday, Social Security number or card number." },
          { id: "t4", text: "Your phone or computer. To install an app, open a file, or let someone see your screen." },
          { id: "t5", text: "Nothing. It only tells you something." }] },
        { kind: "prose", tone: "wrong", text: [
          "It has the right logo and my name, so it must be real.",
          "How it looks tells you nothing, because a scam can copy all of it. What it wants is what you can read."] }] },
    { worked: "w-want" },
    { set: { items: [["q-ship-none", "q-ship-money"], ["q-code-login", "q-clean-device"]], order: "listed" } },
    { set: { items: ["m-water-money", "m-ss-details", "m-dental-details", "m-battery-device", "m-salon-none", "m-toll-money"], order: "shuffle", seconds: 15 } }
  ],
  check: {
    items: ["k-appt-none", "k-customs-money", "k-cable-money", "k-fraud-login", "k-code-login", "k-screen-device", "k-pharmacy-details", "k-mutual-details", "k-friend-none", "k-photo-money"],
    feedback: "at-end", seconds: 15, order: "shuffle",
    pass: [{ right: { min: 9 } }]
  }
});
