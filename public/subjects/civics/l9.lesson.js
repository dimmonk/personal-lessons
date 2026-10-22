// Civics, lesson 9: Principles and founding documents (part 9). Questions 1 to 14 of the list, taught as the reasons behind the government of lessons 1 to 3
// (docs/subjects/civics/plan.md; C2, C21: a "why" kept with its reason): two tables that tie each principle to the part it explains, the Declaration and
// the Constitution side by side, then the 14 questions from memory in three groups (the last mixed with lessons 1 to 3), then a recall check of all 14,
// 13 to pass (9 in 10).
FC.lesson("civics", {
  id: "l9", part: "9", title: "Principles and founding documents", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "The branches, the numbers and the levels you learned rest on a few ideas. Each idea is the reason for a part you already know, and the interview has questions on both.",
    "Read the two tables once, tying each idea to the part it explains. Then hear or read each question, say your answer out loud, and type it."
  ],
  flow: [
    { title: "The ideas behind the government",
      show: [
        { kind: "document", form: "table", title: "Each idea, and what it explains", head: ["The idea", "What it explains"], rows: [
          { id: "i-supreme", cells: ["The Constitution is the supreme law of the land. It forms the government, defines the parts of government and their powers, and protects the rights of the people.", "Why there are three branches, and why the federal government and the states each have their own powers (a city or county gets its powers from its state)"] },
          { id: "i-people", cells: ["“We the People”: self-government, the consent of the governed. The form of government is a republic, a representative democracy.", "Why voters elect Congress and the president"] },
          { id: "i-law", cells: ["The rule of law: no one is above the law. Leaders must obey the law, and government must obey the law.", "Why a court can stop an order that breaks the law"] },
          { id: "i-amend", cells: ["Changes are made by amendments. There are 27 so far. The Bill of Rights protects the basic rights of Americans.", "Why an amendment is one way to stop or change what the government does"] },
          { id: "i-market", cells: ["The economic system is capitalism, a free market economy.", "Why people and businesses, not the government, own most of what is made and sold"] }] }
      ] },
    { title: "Two founding documents",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "The Declaration of Independence, adopted July 4, 1776. It says America is free from British control and that all people are created equal, with rights like “Life, Liberty, and the pursuit of Happiness.”" },
          b: { kind: "prose", text: "The Constitution, written in 1787. It is the supreme law: it forms the government and says what each part may do." },
          compare: "The Declaration broke from Britain; the Constitution built the new government. The words about Life, Liberty and Happiness are in the Declaration, not the Constitution." },
        { kind: "document", form: "table", title: "Ideas both documents share, and what shaped the Constitution", head: ["Question", "Answers the list accepts"], rows: [
          { id: "d-ideas", cells: ["Important ideas in both", "Equality, liberty, social contract, natural rights, limited government, self-government"] },
          { id: "d-words", cells: ["What the harder words mean", "Natural rights: rights every person is born with. Limited government: the government has only the powers the people give it. Social contract: the people agree to be governed, and the government must protect their rights. Popular sovereignty: the power belongs to the people."] },
          { id: "d-shaped", cells: ["Documents that influenced the Constitution", "The Declaration of Independence, the Articles of Confederation, the Federalist Papers, the Mayflower Compact, and others"] }] }
      ] },
    { set: { items: ["q2", "q3", "q1", "q4", "q13"], order: "listed" } },
    { set: { items: ["q5", "q7", "q6", "q12"], order: "listed" } },
    { set: { items: ["q9", "q8", "q11", "q10", "q14"], order: "shuffle", mix: { from: ["l1", "l2", "l3"], share: 0.25 } } }
  ],
  check: {
    items: ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11", "q12", "q13", "q14"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 13 } }]
  }
});
