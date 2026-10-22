// Civics, lesson 1: Who does what (part 1). The pilot (docs/subjects/civics/design.md, gate 5). A map of the three branches first, then the 17 questions of
// part 1 in four groups (the three branches, Congress, the president, the courts): each is read aloud, you say your answer out loud, type it, and see every
// answer the list accepts. A miss comes back a few questions later. Then the check of part 1: the same 17 again in a new order, with no help and no answer
// until the end, 16 of 17 to pass (at least 9 in 10, as the design says).
FC.lesson("civics", {
  id: "l1", part: "1", title: "Who does what", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Civics under the practice engine. Not tried on a phone yet." }],
  why: [
    "At the citizenship interview an officer puts up to 20 of the 128 questions to you, out loud. You answer from memory, in a few words. Twelve right passes.",
    "Here you hear or read each question, say your answer out loud, and type it. Then you see every answer the list accepts. Nothing is graded: a miss only decides what comes back."
  ],
  flow: [
    { title: "The three branches",
      show: [
        { kind: "document", form: "table", title: "Who does what in the federal government", head: ["Branch", "Who", "What it does"], rows: [
          { id: "r-legislative", cells: ["Legislative", "Congress: the Senate and the House", "Writes laws, declares war, makes the federal budget"] },
          { id: "r-executive", cells: ["Executive", "The president, the Cabinet (it advises the president), and federal departments and agencies", "Signs or vetoes bills and carries out the laws"] },
          { id: "r-judicial", cells: ["Judicial", "The courts: the Supreme Court and the federal courts", "Explain the laws and settle disagreements about them"] }] },
        { kind: "prose", text: ["The president is also Commander in Chief of the military and the chief diplomat, and appoints federal judges. If the president can no longer serve, the vice president becomes president.",
          "Why three branches? So one part does not become too powerful. The list also accepts two names for this idea: checks and balances, and separation of powers.",
          "The questions use these words. Look at the table once, then try them. If you are not sure, tap Not yet to see the answers."] }
      ] },
    { set: { items: ["q16", "q15", "q17"], order: "listed" } },
    { set: { items: ["q18", "q19", "q20"], order: "listed" } },
    { set: { items: ["q41", "q42", "q43", "q44", "q45", "q40", "q46", "q47"], order: "listed" } },
    { set: { items: ["q50", "q51", "q52"], order: "listed" } }
  ],
  check: {
    items: ["q15", "q16", "q17", "q18", "q19", "q20", "q40", "q41", "q42", "q43", "q44", "q45", "q46", "q47", "q50", "q51", "q52"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 16 } }]
  }
});
