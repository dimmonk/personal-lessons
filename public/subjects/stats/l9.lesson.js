// Stats, lesson 9: The whole claim, unprompted (part I). All six moves on mixed items with nothing said about which one decides: the six questions
// listed, then ten mixed questions asked only the standing questions, with the size typed wherever a claim gives a count, a risk, a test or
// a change, then the six said from memory; an optional if-then plan; and the check, the real-world test in small: eight new questions, 7 of 8, at most one sound claim turned down,
// with a second check on new questions four weeks later.
FC.lesson("stats", {
  id: "l9", part: "I", title: "The whole claim, unprompted", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (the six questions from memory, ten mixed questions with no hint of which question decides, an optional plan, a check of eight with a second check four weeks on)." }],
  why: [
    "On your phone, nothing tells you which question will break a claim. A headline can fail on its size, its comparison, who was counted or what else could explain it, or it can hold up.",
    "This is the real moment: each question as it arrives, with no hint, and you put all six questions yourself."
  ],
  flow: [
    { title: "How this goes",
      show: [
        { kind: "prose", text: [
          "So far you have learned six questions, one at a time. Put all six to every claim with a number:",
          "1. What does it claim, and what number does it rest on? 2. How big is it, out of how many? 3. Compared with what? 4. Who was counted? 5. Could anything else explain it? 6. The verdict: does the text show it?",
          "A size is worked out as you learned it: a count as so many in 1,000; a risk as before and after in 1,000; a test by picturing 1,000 people (how many have it, how many of them it finds, how many of the rest it flags anyway); a change as the change divided by where it started, times 100.",
          "Next come ten claims of every kind, mixed, with nothing marked and no hint of which question decides. For each: what it claims, the sentence with the number it rests on (or Not given), the size where one is asked, and the verdict. Any one question can break a claim; a claim that passes all six holds up. Then say the six from memory.",
          "At the end there is a check of eight new claims, and the same check again on new claims four weeks later."] }
      ] },
    { set: { items: ["q-elmwood", "q-yoga", "q-ridge", "q-brookline", "q-pravel", "q-harlow", "q-fairfield", "q-diner", "q-phones", "q-zentra", "q-moves"], order: "listed" } },
    { own: "plan" }
  ],
  check: {
    items: ["k-lockwell", "k-kessel", "k-ebikes", "k-growmax", "k-greenfield", "k-bikeshare", "k-ferry", "k-ashford"],
    feedback: "at-end", order: "shuffle", retest: 28,
    pass: [{ right: { min: 7 } }, { slip: "doubted", max: 1 }]
  }
});
