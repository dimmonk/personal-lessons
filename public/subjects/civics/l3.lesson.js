// Civics, lesson 3: Federal, state, local, and your answers (part 3). The map of three levels of government and three parts of each, then Q58 to Q60, then the
// learner enters the eight answers that depend on where they live and who holds office now, and answers them from memory; the check is all 11, 10 to pass
// (9 in 10). The app stores no official's name: the answers are the learner's own.
FC.lesson("civics", {
  id: "l3", part: "3", title: "Federal, state, local, and your answers", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "Three levels of government share the work: the whole country, your state, and your city or county. Each level has three parts. Knowing which level does what answers three questions on the list, and it is how you will read the news later in this course.",
    "Eight answers depend on where you live and who holds office now, so you look them up and enter them here."
  ],
  flow: [
    { title: "Three levels, three parts each",
      show: [
        { kind: "document", form: "table", title: "Who does what, at each level", head: ["Level", "Writes the laws", "Carries them out", "Judges disputes"], rows: [
          { id: "r-federal", cells: ["Federal: the whole country", "Congress", "The president, the Cabinet and federal agencies", "The Supreme Court and the other federal courts"] },
          { id: "r-state", cells: ["State: one state", "The state legislature", "The governor and state agencies", "State courts"] },
          { id: "r-local", cells: ["Local: a city, town or county", "The city council or county board", "The mayor or county head, the police and the fire department", "Local courts, under state law"] }] },
        { kind: "prose", text: "Whenever you read about the government, put two questions to yourself first. Which level? Which part? The president is not behind every decision: a school board, a governor and a judge each answer to their own level." }
      ] },
    { title: "Who handles what",
      show: [
        { kind: "document", form: "table", title: "What each level handles", head: ["Level", "What it handles"], rows: [
          { id: "h-federal", cells: ["Federal", "Only the federal government may: print paper money, mint coins, declare war, create an army, make treaties, set foreign policy"] },
          { id: "h-state", cells: ["State", "Only the states: provide schooling and education, provide protection (police), provide safety (fire departments), give a driver’s license, approve zoning and land use"] },
          { id: "h-local", cells: ["Local", "What the state hands down: a city or county often runs the schools, the police and the fire department, and decides how land is used"] }] },
        { kind: "prose", text: ["The 10th Amendment says it in one sentence: powers not given to the federal government belong to the states or to the people.",
          "The table uses the official list’s own words, so the words you learn are the words it accepts."] }
      ] },
    { set: { items: ["q58", "q59", "q60"], order: "listed" } },
    { title: "Where to look up your answers",
      show: [{ kind: "prose", text: ["Eight answers change with where you live and with elections. Look them up before you type them.",
        "The test updates page at uscis.gov/citizenship/testupdates names the president, the vice president, the Speaker of the House and the Chief Justice now. It does not list your own officials: it sends you to senate.gov for your two senators, to house.gov for your representative, and to usa.gov/states-and-territories for your governor.",
        "Your state’s capital is not on that page. Your state’s own website names it."] }] },
    { own: "answers" },
    { set: { items: ["q38", "q39", "q30", "q57"], order: "listed" } },
    { set: { items: ["q23", "q29", "q61", "q62"], order: "listed" } }
  ],
  check: {
    items: ["q23", "q29", "q30", "q38", "q39", "q57", "q58", "q59", "q60", "q61", "q62"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 10 } }]
  }
});
