// Psychology: subject record (lesson standard 3). Only the pilot, lesson 1, is built: the subject screen lists every other part as not built yet.
FC.subject('psychology', {
  name: "Psychology",
  rev: 8,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-04",
      change: "First version under lesson standard 1: the reasoning branch of the key rewritten in plain words, five specimens re-keyed." },
    { rev: 2, date: "2026-10-05",
      change: "Blurb reworded so it no longer types key answers by hand." },
    { rev: 3, date: "2026-10-05",
      change: "Whole key rewritten in plain words: the first question has four answers, including a passing moment; the branches for something one person does to another and for a lasting way someone is each ask one question, and each has a name for cases where nothing is wrong. Unit One rebuilt as the gate unit." },
    { rev: 4, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 5, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 6, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 7, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 8, date: "2026-10-11",
      change: "Step 7, accounts: the record holds what lesson 1 needs (what counts as what someone did, the four ways an account can read, the next steps, the common slips, and the one topic that comes back in the review), and lesson 1, What did they do?, is added as the pilot." }
  ],
  endResult: "When someone reaches for a word like \"narcissist\", \"gaslighting\" or \"manipulative\", check it against what the person actually did: say what they did, whether it shows one bad moment or a pattern, and what to do next.",
  parts: [
    { id: "A", title: "What they did" },
    { id: "B", title: "One moment or a pattern" },
    { id: "C", title: "Words about how someone treats you" },
    { id: "D", title: "Words about who someone is" },
    { id: "E", title: "A pattern of control" },
    { id: "F", title: "The whole check, mixed, and your own" }
  ],
  lists: {
    step: [
      { id: "find-out", text: "Find out what happened" },
      { id: "watch", text: "Watch whether it repeats" },
      { id: "limit", text: "Say what they did and where your limit is" },
      { id: "help", text: "Get help from outside" }
    ],
    slip: [
      { id: "took-guess", text: "tapped a guess about why, not what they did" },
      { id: "took-feeling", text: "tapped how it felt, not what they did" },
      { id: "took-label", text: "tapped a word or a verdict about the person, not what they did" },
      { id: "took-teller", text: "tapped what the teller did, not what the person did" },
      { id: "took-around", text: "tapped background, not what they did" },
      { id: "kept-label", text: "kept the label when saying it again" },
      { id: "softened", text: "made the label softer instead of saying what happened" },
      { id: "swapped-guess", text: "swapped the label for a guess about why" },
      { id: "jumped-ahead", text: "picked a next step before the account showed what they did" }
    ]
  },
  rules: {
    act: { name: "What they did", heading: "What counts as what they did", needs: [
      { id: "act-did", text: "It says something they did or said." },
      { id: "act-seen", text: "Anyone there could have seen or heard it. It has no guess about why." }
    ] }
  },
  facets: {
    account: { name: "What the account shows", values: [
      { id: "ordinary", text: "an ordinary moment" },
      { id: "word", text: "the word fits" },
      { id: "unclear", text: "can’t tell yet" },
      { id: "control", text: "a pattern of control" }
    ] }
  },
  mix: [{ facet: "account", value: "ordinary", min: 0.4, max: 0.6 }],
  strands: [{ id: "what-they-did", title: "What they did" }],
  readingShare: 0.2
});
