// Civics, lesson 10: Rights and responsibilities (part 10). Questions 63 to 72 of the list: whose rights are whose (everyone living here, or citizens only),
// the four amendments about voting in the order they were added (C2, C11: an event placed in its time), and the promises and duties of a citizen. Then
// the questions from memory in four groups, with the timeline, and a recall check of all 11, 10 to pass (9 in 10).
FC.lesson("civics", {
  id: "l10", part: "10", title: "Rights and responsibilities", rev: 2, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "The \"Why pay federal taxes\" row in step 3 now also lists the accepted answer \"Required by the (U.S.) Constitution (16th Amendment)\"." }],
  why: [
    "Some rights belong to everyone living here; a few belong to citizens only. Becoming a citizen adds rights and promises, and the interview has questions on both.",
    "The vote grew in four steps. Keep them in the order they came, and each one is easier to remember."
  ],
  flow: [
    { title: "Everyone, or citizens only",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Rights the list gives to everyone living in the United States: freedom of expression, freedom of speech, freedom of assembly, freedom to petition the government, freedom of religion, and the right to bear arms." },
          b: { kind: "prose", text: "For citizens only: vote in federal elections, run for federal office, and serve on a jury." },
          compare: "Speech, religion and the rest are yours now. Voting for president or Congress and sitting on a jury wait until you are a citizen." }
      ] },
    { title: "The four voting amendments, in order",
      show: [
        { kind: "document", form: "table", title: "Who can vote, step by step", head: ["When", "What it says"], rows: [
          { id: "v-1870", cells: ["1870, after the Civil War", "A male citizen of any race can vote."] },
          { id: "v-1920", cells: ["1920", "Any citizen can vote: women and men can vote."] },
          { id: "v-1964", cells: ["1964", "You don’t have to pay a poll tax to vote."] },
          { id: "v-1971", cells: ["1971", "Citizens eighteen and older can vote."] }] },
        { kind: "prose", text: "At the interview, describe any one of the four. Each one let more people vote than before." }
      ] },
    { title: "Promises and duties",
      show: [
        { kind: "document", form: "table", title: "What a citizen promises and does", head: ["Question", "Answers the list accepts"], rows: [
          { id: "o-oath", cells: ["Promises in the Oath of Allegiance", "Give up loyalty to other countries; defend the Constitution; obey the laws of the United States; serve in the military if needed; serve the nation if needed; be loyal to the United States"] },
          { id: "o-pledge", cells: ["The Pledge of Allegiance shows loyalty to", "The United States; the flag"] },
          { id: "o-become", cells: ["How people become citizens", "Be born in the United States, as the 14th Amendment says; naturalize; derive citizenship"] },
          { id: "o-part", cells: ["Two examples of civic participation", "Vote; run for office; join a political party; help with a campaign; join a civic group; join a community group; give an elected official your opinion; contact elected officials; support or oppose an issue or policy; write to a newspaper"] },
          { id: "o-serve", cells: ["One way to serve your country", "Vote; pay taxes; obey the law; serve in the military; run for office; work for local, state, or federal government"] },
          { id: "o-tax", cells: ["Why pay federal taxes", "Required by law; all people pay to fund the federal government; required by the (U.S.) Constitution (16th Amendment); civic duty"] },
          { id: "o-draft", cells: ["Why men 18 through 25 register for the Selective Service", "Required by law; civic duty; makes the draft fair, if needed"] }] }
      ] },
    { set: { items: ["q65", "q64", "q66"], order: "listed" } },
    { set: { items: ["q63", "t-votes"], order: "listed" } },
    { set: { items: ["q67", "q68", "q69", "q70"], order: "listed" } },
    { set: { items: ["q71", "q72"], order: "shuffle", mix: { from: ["l9"], share: 0.3 } } }
  ],
  check: {
    items: ["q63", "q64", "q65", "q66", "q67", "q68", "q69", "q70", "q71", "q72", "t-votes"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 10 } }]
  }
});
