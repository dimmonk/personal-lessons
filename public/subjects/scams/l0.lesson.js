// Scams, lesson 0: Before you start (the baseline, built beside the pilot, gate 5). Ten things the way they arrive on a phone: eight messages (four real,
// four scams), one call that pushes back, and one thing that already happened. 20 seconds for each message, nothing shown until the end, and one closing
// line. Judged by the action that suits each message, never by whether it contains a request: a real invoice is paid the way you already pay.
FC.lesson("scams", {
  id: "l0", part: null, role: "baseline", title: "Before you start", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built beside the pilot of Scams under the practice engine. It replaces the old baseline, which marked a real invoice and a code the learner had asked for as something wrong. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "Judged by the subject’s one rule (plan, 2026-10-22): the haircut reminder that wanted nothing is replaced by a payment you agreed beforehand, the parcel fee uses the name of the shop you deal with, the buyer you do not know is left, and the pop-up’s outcome is one that can happen." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: the steps after a loss say that only the first counts, and the case says you gave the caller your code, so changing the password comes second; leaving the real card alert says what it could cost; the call-back option no longer repeats the reply." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the after-loss steps say the caller is never contacted." }],
  why: [
    "Before the lessons, ten things the way they arrive on your phone, so that you can see later how far you have come.",
    "Do what you would really do."
  ],
  flow: [
    { title: "How this goes",
      show: [{ kind: "prose", text: [
        "Messages and a call arrive one at a time, as they do on your phone. Each time, pick what you would really do: do what it says, check first through a way you already had, or leave it.",
        "Nothing here is graded, and you see no answers until the end."] }] }
  ],
  check: {
    items: ["b-payback", "b-invoice", "b-code", "b-alert", "b-parcel", "b-popup", "b-buyer", "b-manager", "b-call", "b-happened"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
