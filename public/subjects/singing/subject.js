// Singing: subject record (lesson standard 3). Only the pilot, lesson 2, is built: the subject screen lists every other part as not built yet. The
// subject has no key, no lists and no facets: every question is a sung one the app makes from the learner's range. It has no strands yet: the review of
// a sung check is built after the pilot has been tried (10.3, step 2).
FC.subject('singing', {
  name: "Singing",
  field: "skills",
  rev: 4,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-08",
      change: "First version under lesson standard 1: a new subject for a casual singer. The first question sorts what bothers you about a line into five kinds, including one where nothing is wrong. Four branches of one question each, every one ending in a name for the voice doing fine as well as names for what went wrong, and one fact unit on looking after the voice." },
    { rev: 2, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 3, date: "2026-10-10",
      change: "Step 2, sound: the record is complete for the sung questions (no lists, facets or strands, because every question is a sung one made from the learner's range), and lesson 2, Match a note, is added as the pilot." },
    { rev: 4, date: "2026-10-20", change: "Placed on a field of the library (skills), one of the shelves Field, Subject, Unit, Lesson." }
  ],
  endResult: "Sing a short melody you have just heard, in your own range, in tune and without any display, with long notes held steady and no pushing.",
  parts: [
    { id: "1", title: "Your range" },
    { id: "2", title: "Match a note" },
    { id: "3", title: "Hold it steady" },
    { id: "4", title: "Move between notes" },
    { id: "5", title: "Steps and leaps" },
    { id: "6", title: "Short melodies" },
    { id: "7", title: "A lighter top" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.1
});
