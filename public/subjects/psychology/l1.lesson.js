// Psychology, lesson 1: What did they do? (part A, What they did). The pilot (docs/subjects/psychology/design.md, gate 5). The wrong idea about
// a word like "selfish" first, what counts as what someone did, one worked account (a friend's message about a roommate); a first group of four
// accounts with that checklist beside the account (a rewrite to pick, a thread, a note, an account with nothing in it); a second group of eight
// with nothing beside them (two rewrites to write, two accounts where the word fits, one pattern of control); and the check of part A: six new
// accounts, 5 of 6 to pass.
FC.lesson("psychology", {
  id: "l1", part: "A", title: "What did they do?", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Psychology under the practice engine. Not tried on a phone yet." }],
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
          "A word for the person: “selfish”, “rude”, “toxic”.",
          "Some accounts have no line about what the person did. Then say so."] }
      ] },
    { worked: "w-leftovers" },
    { set: { items: ["a-karaoke", "a-cancel", "a-wedding", "a-toxic"], order: "listed", support: { panel: true } } },
    { set: { items: ["b-midnight", "b-jacket", "b-dinner", "b-neighbor", "b-money", "b-stonewall", "b-trip", "b-phone"], order: "shuffle" } }
  ],
  check: {
    items: ["k-lazy", "k-heat", "k-party", "k-meeting", "k-plans", "k-fake"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }]
  }
});
