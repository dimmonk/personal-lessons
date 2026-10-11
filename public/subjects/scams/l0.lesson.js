// Scams, lesson 0: Before you start (the baseline, built beside the pilot, gate 5). Ten things the way they arrive on a phone: eight messages (four real,
// four scams), one call that pushes back, and one thing that already happened. 20 seconds for each message, nothing shown until the end, and one closing
// line. Judged by the action that suits each message, never by whether it contains a request: a real invoice is paid the way you already pay.
FC.lesson("scams", {
  id: "l0", part: null, role: "baseline", title: "Before you start", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built beside the pilot of Scams under the practice engine. It replaces the old baseline, which marked a real invoice and a code the learner had asked for as something wrong. Not tried on a phone yet." }],
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
    items: ["b-salon", "b-invoice", "b-code", "b-alert", "b-parcel", "b-popup", "b-buyer", "b-manager", "b-call", "b-happened"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
