// Political Ideologies: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('ideology', {
  name: "Political Ideologies",
  rev: 5,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the key rewritten in plain words. The two flat questions became a first question with five answers, one of them for a text that speaks for no side, and four branches whose questions end every route in one name. Four names were added where a text says nothing more or nothing extreme, so that such texts have somewhere to go." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
  ],
  endResult: "When a speech or a post is called \"socialist\", \"fascist\" or the like, check for yourself which label its own words earn.",
  parts: [
    { id: "1", title: "Find what the words ask for" },
    { id: "2", title: "Economy labels" },
    { id: "3", title: "The US left–right words" },
    { id: "4", title: "Us-and-them labels" },
    { id: "5", title: "Power labels" },
    { id: "6", title: "Labels in the wild" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.25
});
