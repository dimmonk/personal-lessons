// Civics, lesson 2: In numbers, and why (part 2). The numbers of the Senate, the House, the president and the Supreme Court, each with the reason behind it,
// shown first, then 20 questions of the list answered from memory in four groups, then a recall check of all 20, 18 to pass (9 in 10).
FC.lesson("civics", {
  id: "l2", part: "2", title: "In numbers, and why", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "Many questions at the interview want a number or a reason: how many senators, how long a term, why a state has two. A number is easier to keep when you know the reason behind it.",
    "Read the two tables once. Then you hear or read each question, say your answer out loud, and type it. You see every answer the list accepts."
  ],
  flow: [
    { title: "The numbers side by side",
      show: [
        { kind: "document", form: "table", title: "The numbers", head: ["Body", "How many", "How long", "Who picks them"], rows: [
          { id: "r-senate", cells: ["Senate", "100: two from each state", "6 years", "Citizens from their state"] },
          { id: "r-house", cells: ["House of Representatives", "435 voting members", "2 years", "Citizens from their congressional district"] },
          { id: "r-president", cells: ["President", "1", "4 years, and no more than two terms", "The Electoral College: electors from each state"] },
          { id: "r-court", cells: ["Supreme Court", "9 justices; a majority of five (5) decides a case", "For life", "The president, with the Senate’s approval"] }] },
        { kind: "prose", text: ["The president’s Cabinet is made of Cabinet-level positions, mostly the heads of the federal departments: the Secretary of State, the Secretary of the Treasury, the Secretary of Labor, the Attorney General and others.",
          "Look across each row once, then try the questions. If you are not sure, tap Not yet to see the answers."] }
      ] },
    { title: "The reason behind each",
      show: [
        { kind: "document", form: "table", title: "Why it is that way", head: ["The fact", "The reason"], rows: [
          { id: "w-two", cells: ["Every state has two senators", "Equal representation for small states. It came from the Great Compromise (also called the Connecticut Compromise): the House counts people, the Senate gives every state two seats."] },
          { id: "w-short", cells: ["House terms are only 2 years", "To more closely follow public opinion."] },
          { id: "w-people", cells: ["Big states have more House members", "Because of the state’s population: some states have more people."] },
          { id: "w-twice", cells: ["A president serves two terms at most", "Because of the 22nd Amendment, to keep the president from becoming too powerful."] },
          { id: "w-college", cells: ["The Electoral College elects the president", "It decides who is elected president. It is a compromise between the popular election of the president and congressional selection: a middle way between a vote of all the people and Congress choosing."] },
          { id: "w-life", cells: ["Justices serve for life", "To be independent of politics, and to limit outside political influence."] }] },
        { kind: "prose", text: "The reasons are written here as the official list words them, so the words you learn are the words it accepts. Mind one pair: a senator represents the “people” or “citizens” of their state, but the list wants “citizens” for who elects them." }
      ] },
    { set: { items: ["q21", "q27", "q22", "q28", "q31", "q32"], order: "listed" } },
    { set: { items: ["q24", "q25", "q26", "q33", "q34", "q35"], order: "listed" } },
    { set: { items: ["q36", "q37", "q49", "q48"], order: "listed" } },
    { set: { items: ["q53", "q54", "q55", "q56"], order: "listed" } }
  ],
  check: {
    items: ["q21", "q22", "q24", "q25", "q26", "q27", "q28", "q31", "q32", "q33", "q34", "q35", "q36", "q37", "q48", "q49", "q53", "q54", "q55", "q56"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 18 } }]
  }
});
