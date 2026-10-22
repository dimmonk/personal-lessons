// US Civics & History: subject record (lesson standard 3.2). Sixteen parts in five units, from docs/subjects/civics/plan.md. The questions are the 128 of the 2025
// civics test; each is a topic of its own (a question returns as itself) and each lesson names the ones its part covers. The answers that depend on where the
// learner lives and who holds office are entered by the learner (own.answers); the app stores no official's name. The news stories are sorted by the level of
// government that acted, and every group of them holds the three levels in equal number.
(() => {
  // the title of the topic of each of the 128 questions, in the list's order (topic "qN" is question N)
  const QUESTION_TOPICS = [
    "The form of government", "The supreme law of the land", "What the Constitution does", "What “We the People” means", "How the Constitution is changed",
    "What the Bill of Rights protects", "How many amendments", "Why the Declaration of Independence matters", "The document that freed the colonies", "Two ideas in the founding documents",
    "“Life, Liberty, and the pursuit of Happiness”", "The economic system", "The rule of law", "Documents that shaped the Constitution", "Why the government has three branches",
    "The three branches", "Who leads the executive branch", "Who writes laws", "The two parts of Congress", "A power of Congress",
    "How many senators", "How long a senator serves", "Your senators", "How many members the House has", "How long a House member serves",
    "Why House terms are shorter", "How many senators each state has", "Why each state has two senators", "Your representative", "The Speaker of the House",
    "Who a senator represents", "Who elects senators", "Who a House member represents", "Who elects House members", "Why states have different numbers of House members",
    "How long a president is elected for", "Why a president serves only two terms", "The president now", "The vice president now", "Who takes over from the president",
    "A power of the president", "The commander in chief", "Who signs bills", "Who vetoes bills", "Who appoints federal judges",
    "A part of the executive branch", "What the Cabinet does", "Cabinet-level positions", "Why the Electoral College matters", "A part of the judicial branch",
    "What the judicial branch does", "The highest court", "Seats on the Supreme Court", "Justices needed to decide a case", "How long justices serve",
    "Why justices serve for life", "The Chief Justice", "A power only for the federal government", "A power only for the states", "The 10th Amendment",
    "Your governor", "Your state capital", "The four voting amendments", "Who can vote, run and serve on a jury", "Rights of everyone living here",
    "The Pledge of Allegiance", "The Oath of Allegiance", "How people become citizens", "Ways to take part", "Ways to serve your country",
    "Why pay federal taxes", "Selective Service", "Why colonists came", "Who lived here first", "People taken and sold as slaves",
    "The war for independence", "Why the colonies declared independence", "Who wrote the Declaration", "When the Declaration was adopted", "Events of the Revolution",
    "The 13 original states", "The document written in 1787", "Writers of the Federalist Papers", "Why the Federalist Papers mattered", "Benjamin Franklin",
    "George Washington", "Thomas Jefferson", "James Madison", "Alexander Hamilton", "The Louisiana Purchase",
    "A war of the 1800s", "The war between North and South", "Events of the Civil War", "Abraham Lincoln", "The Emancipation Proclamation",
    "The war that ended slavery", "The citizenship amendment", "When all men got the vote", "Women’s rights leaders", "A war of the 1900s",
    "Why we entered World War I", "When women got the vote", "The Great Depression", "When the Depression began", "The president in the Depression and World War II",
    "Why we entered World War II", "Dwight Eisenhower", "The main rival in the Cold War", "A concern in the Cold War", "Why we entered the Korean War",
    "Why we entered the Vietnam War", "The civil rights movement", "Martin Luther King, Jr.", "Why we entered the Persian Gulf War", "September 11, 2001",
    "A conflict after September 11", "An American Indian tribe", "An American innovation", "The capital of the United States", "The Statue of Liberty",
    "Why the flag has 13 stripes", "Why the flag has 50 stars", "The national anthem", "E Pluribus Unum", "Independence Day",
    "National holidays", "Memorial Day", "Veterans Day"
  ];
  FC.subject("civics", {
    name: "US Civics & History",
    field: "society",
    rev: 9,
    standard: 2,
    history: [
      { rev: 1, date: "2026-10-05",
        change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks who makes the last decision in a case, with four answers; Congress, the President and the courts each have one question, and a state, city or county has two; veto and pardon are separate names. All ten units are rebuilt and the old course is deleted. Specimens added: twenty whole-key cases, one or more for every name in the key." },
      { rev: 2, date: "2026-10-05",
        change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
      { rev: 3, date: "2026-10-05",
        change: "American English: US spelling." },
      { rev: 4, date: "2026-10-07",
        change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
      { rev: 5, date: "2026-10-10",
        change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
      { rev: 6, date: "2026-10-11",
        change: "Step 9, recall and speech: the record holds the 17 questions of lesson 1, Who does what, each a topic that comes back as itself, the source of the list (USCIS form M-1778, 09/25, looked up 2026-10-11), the form for the answers that depend on where you live and who holds office, and the interview date the review counts its rounds from. Lesson 1 is added as the pilot." },
      { rev: 7, date: "2026-10-20", change: "Placed on a field of the library (society), one of the shelves Field, Subject, Unit, Lesson." },
      { rev: 8, date: "2026-10-22",
        change: "Rebuilt to the plan in docs/subjects/civics/plan.md (research in docs/research/civics.md): sixteen parts in five units, a topic for each of the 128 questions, the news stories sorted by the level of government that acted, the lists of levels, parts of government, verdicts and checks, a form for the one thing to do on your own phone, and the list re-read on 2026-10-22. Lessons 1 to 8 are built." },
      { rev: 9, date: "2026-10-22",
        change: "Lessons 9 to 16 are built, so every part has its lesson: principles, rights, four history lessons read the way historians read the past (each event in its time, what led to it, where a claim comes from), symbols, and the mock interview drawn from all 128 questions. Added a topic for each of the four timelines and one for stories that lean on the past, and the slip of naming a later event as a cause." }
    ],
    endResult: "Answer the citizenship interview’s civics questions aloud from memory, and, reading a news story about a US law, order or ruling, say who acted, whether it was theirs to do, who can stop it, and whether to take the story as it stands or check who is behind it first.",
    parts: [
      { id: "1", title: "Who does what" },
      { id: "2", title: "In numbers, and why" },
      { id: "3", title: "Federal, state, local, and your answers" },
      { id: "4", title: "Who acted, and at which level" },
      { id: "5", title: "Theirs to do?" },
      { id: "6", title: "Who can stop it" },
      { id: "7", title: "Who is telling you" },
      { id: "8", title: "Whole stories" },
      { id: "9", title: "Principles and founding documents" },
      { id: "10", title: "Rights and responsibilities" },
      { id: "11", title: "Colonies and independence" },
      { id: "12", title: "The 1800s to 1877" },
      { id: "13", title: "1877 to 1900" },
      { id: "14", title: "The 1900s to now" },
      { id: "15", title: "Symbols and holidays" },
      { id: "16", title: "The interview" }
    ],
    units: [
      { id: "A", title: "How it is built", parts: ["1", "2", "3"] },
      { id: "B", title: "Reading a government story", parts: ["4", "5", "6", "7", "8"] },
      { id: "C", title: "Principles and rights", parts: ["9", "10"] },
      { id: "D", title: "History in its time", parts: ["11", "12", "13", "14", "15"] },
      { id: "E", title: "The interview", parts: ["16"] }
    ],
    lists: {
      level: [
        { id: "federal", text: "Federal: the whole country" },
        { id: "state", text: "State: one state" },
        { id: "local", text: "Local: a city, town or county" }
      ],
      branch: [
        { id: "writes", text: "Writes the law or the rule" },
        { id: "carries", text: "Carries it out: does the work or enforces the rule" },
        { id: "judges", text: "Judges: settles a dispute or says what a law means" }
      ],
      verdict: [
        { id: "theirs", text: "Theirs to do" },
        { id: "not", text: "Not theirs to do" },
        { id: "unsettled", text: "Not settled: the president or an agency reaching outside its branch where Congress has said nothing" },
        { id: "court", text: "In court: a court is deciding it now" }
      ],
      stop: [
        { id: "veto", text: "A veto, and a vote to override it" },
        { id: "courts", text: "A court" },
        { id: "change", text: "Lawmakers passing a new law that changes or cancels it" },
        { id: "higher", text: "A higher level’s law: federal over state and local, state over local" },
        { id: "voters", text: "The voters" },
        { id: "amend", text: "An amendment to the Constitution" }
      ],
      source: [
        { id: "check", text: "Check before you rely on it" },
        { id: "take", text: "Take it as it stands" }
      ],
      slip: [
        { id: "president-default", text: "Took a state or city decision for the president’s" },
        { id: "branch-mixup", text: "Mixed up who writes, who carries out and who judges" },
        { id: "court-default", text: "Looked to a court when no court has the case now" },
        { id: "look-not-source", text: "Trusted a page for how it looks, not for who is behind it" },
        { id: "own-word", text: "Went to the source’s own words, someone’s telling, an opinion, a paid result or a page that names no one, instead of an outside report or the original record" },
        { id: "no-power-check", text: "Did not ask what law or power lets them do it" },
        { id: "out-of-time", text: "Picked as a cause something that came after it" }
      ]
    },
    facets: {
      level: { name: "Level of government", values: [{ id: "federal", text: "Federal" }, { id: "state", text: "State" }, { id: "local", text: "Local" }], compare: true }
    },
    mix: [{ facet: "level", equal: true }],
    strands: [
      ...QUESTION_TOPICS.map((title, i) => ({ id: "q" + (i + 1), title })),
      { id: "level", title: "Which level acted" },
      { id: "theirs", title: "Whether it was theirs to do" },
      { id: "stop", title: "What could stop it" },
      { id: "source", title: "Who is telling you" },
      { id: "whole", title: "A whole story" },
      { id: "t-votes", title: "The four voting amendments in order" },
      { id: "t-colonies", title: "From the Townshend Acts to Yorktown, in order" },
      { id: "t-1800s", title: "From the Louisiana Purchase to 1870, in order" },
      { id: "t-1900s", title: "From World War I to Korea, in order" },
      { id: "past", title: "Where a claim about the past comes from, and what led to it" }
    ],
    // where the questions come from and the page that posts the answers that change (3 refs): looked up, not remembered
    refs: [
      { id: "list", text: "The official list of the 128 civics test questions and their accepted answers (USCIS form M-1778, 09/25)", value: "M-1778 (09/25)", asOf: "2026-10-22",
        source: "https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf" },
      { id: "updates", text: "The page that posts the answers that change with elections and appointments", value: "uscis.gov/citizenship/testupdates", asOf: "2026-10-11",
        source: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates" }
    ],
    // rounds about a week apart in the six weeks before the interview the learner entered
    review: { dateField: "answers.interviewDate" },
    // the eight answers the list says will vary, in the list's own words, and the day of the interview; and the two things to do on your own phone
    own: {
      answers: { into: "answers", fields: [
        { id: "q23", label: "Who is one of your state’s U.S. senators now?", type: "text", hint: "Both names, with a semicolon between" },
        { id: "q29", label: "Name your U.S. representative.", type: "text" },
        { id: "q30", label: "What is the name of the Speaker of the House of Representatives now?", type: "text" },
        { id: "q38", label: "What is the name of the President of the United States now?", type: "text" },
        { id: "q39", label: "What is the name of the Vice President of the United States now?", type: "text" },
        { id: "q57", label: "Who is the Chief Justice of the United States now?", type: "text" },
        { id: "q61", label: "Who is the governor of your state now?", type: "text" },
        { id: "q62", label: "What is the capital of your state?", type: "text" },
        { id: "interviewDate", label: "The day of your interview", type: "date", optional: true }] },
      setup: { into: "setup", fields: [
        { id: "behind", label: "Looked up who is behind a story in my news app, by leaving it", type: "date" },
        { id: "original", label: "Found the original of a story before I passed it on", type: "date" }] }
    },
    complete: true,
    readingShare: 0.3
  });
})();
