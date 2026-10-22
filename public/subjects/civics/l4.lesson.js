// Civics, lesson 4: Who acted, and at which level (part 4). The first reading move: find who the story names, then which level that is and what it did. The wrong
// idea named is "the president decided it" (a school bus route, a parking fee). One story is worked, six are practice (two groups of three, one from each level, the
// second mixed), and the check is six new stories, two from each level, 5 to pass (at least 4 in 5; six stories are the least that hold the levels in equal number).
FC.lesson("civics", {
  id: "l4", part: "4", title: "Who acted, and at which level", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "A news story about the government names someone who did something: a council, a governor, a judge, the president. Before you decide what you think, find out which government that is and what it did.",
    "It is easy to think the president did it, even for a school bus stop or a parking fee. A city, a state and a court each act on their own."
  ],
  flow: [
    { title: "Two questions first",
      show: [
        { kind: "prose", text: ["Find who the story names. Then put two questions to yourself.", "Which level acted: the whole country (federal), one state, or a city, town or county (local)? What did it do: write a rule (vote on it), carry a rule out (do the work or enforce it), or judge a dispute (decide who is right)?"] },
        { kind: "document", form: "table", title: "Who does what, at each level", head: ["Level", "Writes", "Carries out", "Judges"], rows: [
          { id: "r-federal", cells: ["Federal", "Congress", "The president, the Cabinet and federal agencies", "Federal courts"] },
          { id: "r-state", cells: ["State", "The state legislature", "The governor and state agencies", "State courts"] },
          { id: "r-local", cells: ["Local", "The city council, the county board, or the school board for its schools", "The mayor, the police, the fire department, public works and parks", "Local courts"] }] }
      ] },
    { title: "A wrong idea",
      show: [{ kind: "prose", tone: "wrong", text: ["“The president decided it.” It is the first thing many people think, even about a school bus stop or a parking fee.",
        "Look at who the story says acted. A story may name the president for a speech or a wish while a city council, a governor or a judge does the acting. Each works for their own level; the president works for the federal one only."] }] },
    { worked: "l4-plows" },
    { title: "The same topic, two levels",
      show: [{ kind: "pair", a: { kind: "prose", text: "Congress voted to add money for school lunches." }, b: { kind: "prose", text: "The Brookside school board voted to start classes later." },
        compare: "Both are about schools. The first is the whole country; the second is one town’s board." }] },
    { set: { items: ["l4-lunch", "l4-alarms", "l4-bell"], order: "listed" } },
    { set: { items: ["l4-eye", "l4-pipe", "l4-trucks"], order: "shuffle" } }
  ],
  check: {
    items: ["l4-oil", "l4-park", "l4-pay", "l4-guard", "l4-fireworks", "l4-fire"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 5 } }]
  }
});
