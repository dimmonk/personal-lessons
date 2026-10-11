// US Civics & History: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('civics', {
  name: "US Civics & History",
  rev: 5,
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
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
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
  strands: [],
  readingShare: 0.2
});
