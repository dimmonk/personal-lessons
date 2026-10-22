// Singing: subject record (lesson standard 3.2). The plan is docs/subjects/singing/plan.md; the research behind it is docs/research/singing.md.
// Twelve parts in five units. The sung questions are made by the app from the learner's range (3.8) and need no list; the judging questions
// (a case of a line going wrong, answered with the first thing to check or the fix) draw on two lists worded once: `check`, the seven checks
// in an order that puts the causes that change the result most first (a sensible order, not a researched one: no study of how teachers
// diagnose was found; V9 says fix one thing at a time, the biggest first), and `fix`. Each judging lesson has its own short list of what a
// check can find (`fit`, `landing`, `holding`, `jump`, `tune`, `top`, `breath`, `sound`), and lesson 11 what to do about a hurt voice (`care`).
// One rule decides every case in every lesson: go through the seven checks in order and stop at the first the story does not clear. The note
// check (3) is cleared by a note that is over only when sung loud and on when sung lighter: that note is the fourth check (effort, V11), as is
// any strain or break only where the line climbs (pushing, squeezing, cracking, lesson 8); a note under at any loudness, or falling short where
// the line climbs, is the third (V3). Pain or a hoarse voice (any new change in its sound) means stop and rest before any of them (V19).
FC.subject('singing', {
  name: "Singing",
  field: "skills",
  rev: 6,
  complete: true,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-08",
      change: "First version under lesson standard 1: a new subject for a casual singer. The first question sorts what bothers you about a line into five kinds, including one where nothing is wrong. Four branches of one question each, every one ending in a name for the voice doing fine as well as names for what went wrong, and one fact unit on looking after the voice." },
    { rev: 2, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 3, date: "2026-10-10",
      change: "Step 2, sound: the record is complete for the sung questions (no lists, facets or strands, because every question is a sung one made from the learner's range), and lesson 2, Match a note, is added as the pilot." },
    { rev: 4, date: "2026-10-20", change: "Placed on a field of the library (skills), one of the shelves Field, Subject, Unit, Lesson." },
    { rev: 5, date: "2026-10-22",
      change: "Rebuilt to the new plan (docs/subjects/singing/plan.md): twelve parts in five units, the end result as the plan words it, the seven checks and the fixes as lists worded once, the topics of the judging questions, and a reading share of 0.4 for the lessons that are mostly judging. Lessons 1 to 6 built, with what each teaches to name (a song's fit, where a note lands, a held note, a jump, a short tune) as lists and topics of their own; 7 to 12 to follow." },
    { rev: 6, date: "2026-10-22",
      change: "Lessons 7 to 12 built: what happens at the top of a line, the breath, the sound of the words, looking after the voice, and finding the cause across all seven checks, each with its list and topic; the subject is complete." }
  ],
  endResult: "Sing a tune you have just heard, or a line of a song you know, in tune and at a height that suits your voice, with high notes that come out light instead of shouted; and when a line goes wrong, say which of a few things went wrong and what to try, or that nothing did.",
  parts: [
    { id: "1", title: "Before you blame your voice: your range" },
    { id: "2", title: "Match a note" },
    { id: "3", title: "Check before you fix: on, under, over, scooping, guessing" },
    { id: "4", title: "Hold it steady" },
    { id: "5", title: "Steps and leaps" },
    { id: "6", title: "Short tunes" },
    { id: "7", title: "Lighter, not louder" },
    { id: "8", title: "What happens at the top" },
    { id: "9", title: "A breath that lasts the line" },
    { id: "10", title: "Odd sound, right notes" },
    { id: "11", title: "Looking after your voice" },
    { id: "12", title: "Find the cause" }
  ],
  units: [
    { id: "voice", title: "Your voice and the note", parts: ["1", "2", "3", "4"] },
    { id: "tunes", title: "Tunes", parts: ["5", "6"] },
    { id: "top", title: "Easy high notes", parts: ["7", "8"] },
    { id: "air", title: "Air and sound", parts: ["9", "10"] },
    { id: "care", title: "Looking after it, and the whole check", parts: ["11", "12"] }
  ],
  lists: {
    // the seven checks, the causes that change the result most first: a sensible order, not a researched one (research note, Gaps; V9)
    check: [
      { id: "range", text: "Is the song in my range?" },
      { id: "heard", text: "Did I hear the note before I sang it?" },
      { id: "note", text: "Is the note on, under or over?" },
      { id: "effort", text: "Does it go sharp, strained or break only where the line climbs or gets loud?" },
      { id: "air", text: "Does the air last the line?" },
      { id: "sound", text: "How do the words sound?" },
      { id: "fine", text: "Nothing is wrong" }
    ],
    // what to try once the check has found the cause, one for each check
    fix: [
      { id: "move", text: "Move the song lower or higher, so it sits in your range" },
      { id: "hear", text: "Hear the note in your head before you sing it" },
      { id: "match", text: "Check the note against a steady one and move to it" },
      { id: "lighter", text: "Sing it lighter and softer, on “oo” or through a straw first, sliding up through any break" },
      { id: "breathe", text: "Plan your breaths at the ends of lines" },
      { id: "words", text: "Work on the sound of the words last" },
      { id: "leave", text: "Leave it alone: there is nothing to fix" },
      { id: "rest", text: "Stop and rest your voice" }
    ],
    // where a song sits against the learner's range (lesson 1)
    fit: [
      { id: "in", text: "In range: go on to the next check" },
      { id: "high", text: "Too high: move it lower" },
      { id: "low", text: "Too low: move it higher" }
    ],
    // the five things the note check can find (lesson 3)
    landing: [
      { id: "on", text: "On the note" },
      { id: "under", text: "A shade under" },
      { id: "over", text: "A shade over" },
      { id: "scoop", text: "Sliding up into it" },
      { id: "hunt", text: "Hunting for the note" }
    ],
    // how a held note can go (lesson 4)
    holding: [
      { id: "steady", text: "Steady on the note" },
      { id: "sank", text: "Sank under as it went on" },
      { id: "rose", text: "Rose over as it went on" },
      { id: "off", text: "Off the note from the start" },
      { id: "wander", text: "Wandered off and back" }
    ],
    // how two notes a jump apart can go (lesson 5)
    jump: [
      { id: "both", text: "Both notes on" },
      { id: "short", text: "Fell short on the jump" },
      { id: "past", text: "Went past on the jump" },
      { id: "start", text: "First note off, far note on" },
      { id: "shifted", text: "Both notes off the same way" }
    ],
    // how a short tune can go (lesson 6)
    tune: [
      { id: "all", text: "On all the way" },
      { id: "jump", text: "One jump fell short" },
      { id: "last", text: "The long last note sank" },
      { id: "lost", text: "Lost the tune partway" },
      { id: "whole", text: "The whole tune sat off the same way" }
    ],
    // what happens at the top of a line (lessons 7 and 8; lesson 7 asks the four that tell effort from the note)
    top: [
      { id: "easy", text: "A light, easy top" },
      { id: "push", text: "Pushing" },
      { id: "crack", text: "Cracking" },
      { id: "squeeze", text: "Squeezing" },
      { id: "short", text: "Falling short of the note" },
      { id: "out", text: "Out of range" }
    ],
    // what the air does in a line (lesson 9)
    breath: [
      { id: "lasts", text: "A breath that lasts the line" },
      { id: "gasp", text: "A gasped breath" },
      { id: "empty", text: "Pressing on with no air left" },
      { id: "midword", text: "Breathing in the middle of words" },
      { id: "airy", text: "Air leaking out with the sound" }
    ],
    // how the words sound, the last check (lesson 10)
    sound: [
      { id: "outside", text: "Your voice from outside: nothing wrong" },
      { id: "nasal", text: "Nasal" },
      { id: "muffled", text: "Muffled" },
      { id: "mumbled", text: "Mumbled words" },
      { id: "earlier", text: "Not the sound: an earlier check finds it" }
    ],
    // what to do about a hurt voice (lesson 11)
    care: [
      { id: "rest", text: "Rest your voice and give it time" },
      { id: "doctor", text: "See a doctor about it" },
      { id: "now", text: "See a doctor right away" }
    ],
    // the common wrong ideas, named
    slip: [
      { id: "feeling", text: "Going by the feeling instead of the check" },
      { id: "blame", text: "Blaming your voice when the song is out of your range" },
      { id: "louder", text: "Pushing harder to reach a high note" },
      { id: "oneway", text: "Thinking there is one right way to breathe" },
      { id: "waited", text: "Waiting when a warning sign means see a doctor now" }
    ]
  },
  // where lesson 11's doctor timing comes from: looked up, not remembered (V84; research note V19)
  refs: [
    { id: "hoarseness", text: "When to see a doctor about a hoarse voice: the plain-language summary of the hoarseness guideline (Otolaryngology-Head and Neck Surgery, 2018)", value: "Krouse et al. 2018, 158(3), 427-431", asOf: "2026-10-22",
      source: "https://pubmed.ncbi.nlm.nih.gov/29494315/" }
  ],
  facets: {},
  mix: [],
  strands: [
    { id: "fit", title: "Is the song in your range?" },
    { id: "landing", title: "Where your note lands" },
    { id: "holding", title: "How a held note goes" },
    { id: "jump", title: "Two notes a jump apart" },
    { id: "tune", title: "Where a short tune goes wrong" },
    { id: "effort", title: "Effort or the note, where the line climbs" },
    { id: "top", title: "What happens at the top" },
    { id: "breath", title: "What the air does" },
    { id: "sound", title: "How the words sound" },
    { id: "care", title: "Looking after your voice" },
    { id: "cause", title: "Find the cause" }
  ],
  readingShare: 0.4
});
