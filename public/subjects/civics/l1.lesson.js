// Civics, lesson 1: Who does what (part 1). The pilot (docs/subjects/civics/design.md, gate 5). A map of the three branches first, then the 17 questions of
// part 1 in four groups (the three branches, Congress, the president, the courts): each is read aloud, you say your answer out loud, type it, and see every
// answer the list accepts. A miss comes back a few questions later. Then the check of part 1: the same 17 again in a new order, with no help and no answer
// until the end, 16 of 17 to pass (at least 9 in 10, as the design says).
FC.lesson("civics", {
  id: "l1", part: "1", title: "Who does what", rev: 2, status: "draft",
  history: [
    { rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Civics under the practice engine. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-11", change: "After the stand-in learner review: the table is worded as the official list words these answers, and the questions accept what the table says and other clear ways of saying the same thing (plural and verb endings, \"branch\" left off, \"judiciary\", \"makes laws\"); the matching is said once, before the first question; the bracket in the answer about what the judicial branch does is another word, not an extra one; a group no longer counts an answer taken on your word as right the first time; the questions about the president are mixed in with the others." }],
  why: [
    "At the citizenship interview an officer puts up to 20 of the 128 questions to you, out loud. You answer from memory, in a few words. Twelve right passes.",
    "Here you hear or read each question, say your answer out loud, and type it. Then you see every answer the list accepts. Nothing is graded: a miss only decides what comes back."
  ],
  flow: [
    { title: "The three branches",
      show: [
        { kind: "document", form: "table", title: "Who does what in the federal government", head: ["Branch", "Who", "What it does"], rows: [
          { id: "r-legislative", cells: ["Legislative", "Congress", "Writes laws"] },
          { id: "r-executive", cells: ["Executive", "The president", "Signs bills into law, vetoes bills and enforces laws"] },
          { id: "r-judicial", cells: ["Judicial", "The courts", "Explain laws and resolve disputes about the law"] }] },
        { kind: "prose", text: [
          "You will meet these words in the questions. Look at the table once, then try them. If you are not sure, tap Not yet to see the answers.",
          "Small differences are fine: capital letters, “the”, a plural or a verb ending (“veto” or “vetoes”), “branch” left off, one wrong letter. A different word or another fact is a miss. If yours means the same, tap “My answer means the same”."] }
      ] },
    { set: { items: ["q16", "q15", "q17"], order: "listed" } },
    { set: { items: ["q18", "q19", "q20"], order: "listed" } },
    { set: { items: ["q41", "q42", "q40", "q43", "q47", "q44", "q46", "q45"], order: "listed" } },
    { set: { items: ["q50", "q51", "q52"], order: "listed" } }
  ],
  check: {
    items: ["q15", "q16", "q17", "q18", "q19", "q20", "q40", "q41", "q42", "q43", "q44", "q45", "q46", "q47", "q50", "q51", "q52"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 16 } }]
  }
});
