// Psychology, lesson 1: What did they do? (part A, What they did). The pilot (docs/subjects/psychology/design.md, gate 5). The wrong idea about
// a word like "selfish" first, what counts as what someone did, one worked account (a friend's message about a roommate); a first group of four
// accounts with that checklist beside the account (a rewrite to pick, a thread, a note, an account with nothing in it); a second group of ten
// with nothing beside them (three rewrites to write, three accounts where the word fits, one with nothing in it, one pattern of control); and the check of part A: six new
// accounts, 5 of 6 to pass.
FC.lesson("psychology", {
  id: "l1", part: "A", title: "What did they do?", rev: 2, status: "draft",
  history: [
    { rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Psychology under the practice engine. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-11", change: "After the stand-in learner review: the card names the other kinds of line (background, the one telling it, a verdict) and says that a person\u2019s own reason counts as what they said and what the next step is when nothing says what they did; two accounts mix what someone did with a reading of it (\"ignored me\", \"humiliated me\"), one of them in the check; a second account with nothing in it; surface cues vary (the label without \"so\", the guess without \"obviously\", the line that says what was done in any place); the checklist after an answer is shown only after a miss or when a need is missing and no longer splits two lines across two needs; the notice on the account of control says to call 911 in danger and that the hotline is for the US, and comes first in its own block." }],
  why: [
    "A friend says her boss is “toxic”. You have a word and one side of the story. First, find out what the person did.",
    "You read short accounts, tap the line that says what someone did, and see what the other lines are."
  ],
  flow: [
    { title: "What they did is not what you make of it",
      show: [
        { kind: "prose", tone: "wrong", text: [
          "“He’s selfish” tells you what he did.",
          "A word like “selfish” tells you what someone makes of it. What they did is something you could have seen or heard."] },
        { kind: "panel", rules: ["act"] },
        { kind: "prose", text: [
          "These lines are not what someone did:",
          "A guess about why: “he wants attention”.",
          "A feeling: “I felt invisible”.",
          "A word or a verdict: “selfish”, “toxic”, “she should have called”.",
          "Background: “his train was stuck”.",
          "The teller: their own doings and feelings.",
          "Someone’s own reason, in their words, counts: “Work called me in.” A guess about why does not.",
          "A line can mix the two: “he ignored me all night”. Say what could be seen.",
          "No line about what they did? Say so, then find out what was said or done. Watching, a limit and help all need something they did first."] }
      ] },
    { worked: "w-leftovers" },
    { set: { items: ["a-karaoke", "a-cancel", "a-wedding", "a-toxic"], order: "listed", support: { panel: true } } },
    { set: { items: ["b-midnight", "b-jacket", "b-dinner", "b-neighbor", "b-money", "b-stonewall", "b-trip", "b-humiliate", "b-ignored", "b-phone"], order: "shuffle" } }
  ],
  check: {
    items: ["k-lazy", "k-heat", "k-snapped", "k-meeting", "k-plans", "k-fake"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }]
  }
});
