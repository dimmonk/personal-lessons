// US Civics & History: subject record (lesson standard 3). Only the pilot, lesson 1, is built: the subject screen lists every other part as not built
// yet. The questions are the 128 of the 2025 civics test; each is a topic of its own (a question returns as itself), and each lesson names the ones its
// part covers. The answers that depend on where the learner lives and who holds office are entered by the learner (own.answers); the app stores no
// official's name.
FC.subject("civics", {
  name: "US Civics & History",
  rev: 6,
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
      change: "Step 9, recall and speech: the record holds the 17 questions of lesson 1, Who does what, each a topic that comes back as itself, the source of the list (USCIS form M-1778, 09/25, looked up 2026-10-11), the form for the answers that depend on where you live and who holds office, and the interview date the review counts its rounds from. Lesson 1 is added as the pilot." }
  ],
  endResult: "Read a news story about the US government and know who made the final call and whether they were allowed to; answer the citizenship interview questions.",
  parts: [
    { id: "1", title: "Who does what" },
    { id: "2", title: "Who made the call" },
    { id: "3", title: "Congress, the presidency and the courts" },
    { id: "4", title: "Federal or state, and your own answers" },
    { id: "5", title: "Theirs to make?" },
    { id: "6", title: "Who can stop it" },
    { id: "7", title: "Principles and founding documents" },
    { id: "8", title: "Rights and responsibilities" },
    { id: "9", title: "Colonies and independence" },
    { id: "10", title: "The 1800s" },
    { id: "11", title: "The 1900s to now" },
    { id: "12", title: "Symbols and holidays" },
    { id: "13", title: "Whole stories" },
    { id: "14", title: "The interview" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [
    { id: "q15", title: "Why the government has three branches" },
    { id: "q16", title: "The three branches" },
    { id: "q17", title: "Who leads the executive branch" },
    { id: "q18", title: "Who writes laws" },
    { id: "q19", title: "The two parts of Congress" },
    { id: "q20", title: "A power of Congress" },
    { id: "q40", title: "Who takes over from the president" },
    { id: "q41", title: "A power of the president" },
    { id: "q42", title: "The commander in chief" },
    { id: "q43", title: "Who signs bills" },
    { id: "q44", title: "Who vetoes bills" },
    { id: "q45", title: "Who appoints federal judges" },
    { id: "q46", title: "A part of the executive branch" },
    { id: "q47", title: "What the Cabinet does" },
    { id: "q50", title: "A part of the judicial branch" },
    { id: "q51", title: "What the judicial branch does" },
    { id: "q52", title: "The highest court" }
  ],
  // where the questions come from and the page that posts the answers that change (3 refs): looked up, not remembered
  refs: [
    { id: "list", text: "The official list of the 128 civics test questions and their accepted answers (USCIS form M-1778, 09/25)", value: "M-1778 (09/25)", asOf: "2026-10-11",
      source: "https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf" },
    { id: "updates", text: "The page that posts the answers that change with elections and appointments", value: "uscis.gov/citizenship/testupdates", asOf: "2026-10-11",
      source: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates" }
  ],
  // rounds about a week apart in the six weeks before the interview the learner entered (the design's principle 4)
  review: { dateField: "answers.interviewDate" },
  // the eight answers the list says will vary, in the list's own words, and the day of the interview (5)
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
      { id: "interviewDate", label: "The day of your interview", type: "date", optional: true }] }
  },
  readingShare: 0.2
});
