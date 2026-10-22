# Changes to the shared Scams helpers (items-build.js, items-kinds.js), for the lessons 7 to 12 builder

## 2026-10-22, round 2 fixes of lessons 0 to 6
- `scamItem` interface unchanged (same spec keys). Two additions, both optional:
  - `howPrompt`: replaces "How do you check?" where checking also means fixing (change a password, deny a sign-in).
  - The default third "how" option (no `alt`) is no longer "Reply and check with them" (it duplicated items whose own wrong way is a reply).
    It is now a way that looks like yours and is not: on a call, "Call back the number my phone shows for the call"; otherwise "The number I find
    by searching for them on my phone" (or, if the item's own wrong way is a search, the number the phone shows). Set `alt` to pick another.
- Word the wrong "how" options in the first person too ("My reply to the text", "The page the link opens on my phone"), and some right ones
  without "my" ("Penhallow’s app", "The number printed on the card"), so the word "my" is never the cue.
- "What else do you do?" (`tell: true`) now has four options: tell someone you know in person (right), have them prove who they are, keep
  chatting but send nothing, and tell the friend from the same group who knows them too (wrong: they know only what they were shown).
- `wantItem` (lesson 1 only): "What does it want?" is now asked first, and the tap on the line opens after it, only when it wants something.
- `wayItem`: no longer appends "This one may well be real..." to each wrong option; lesson 2 says it once.
- Rule wording in plan.md now also says where government agencies fall (see "The rule", step 3, round 2 line).
- `tests/pressure-pure.mjs` now asserts, for every item with "How do you check?": no two options are the same move, and at least one wrong
  option is worded as the learner's own ("my", "I"). At the time of writing five l7 items fail it (l7p-toll-fake, l7g-dentist-real,
  l7g-crypto-fake, l7k-plumber-fake, l7k-customs-fake), and the lesson list assertion still names only l0 to l6.

## 2026-10-22, round 3 fixes of lessons 0 to 6
- `theirsHow` now reads caller-ID wording ("…my phone shows…", "called from") as `callerid` before anything else, so a `theirs` like "Calling back
  the number my phone shows for the call" gets the caller-ID reason and the call look-alike is not added twice. Give a call item another `theirs`
  (or an `alt`) if its own wrong way is the caller ID: the default look-alike for a call is then a search.
- The search reason now says "their page or number".
- "What else do you do?": the right option's place now varies with the item id (first to last); new optional `tellAlt: { text, then }` replaces
  "the friend from the same group" where the contact came with no group (a dating site, a stranger).
- `tests/pressure-pure.mjs` now asserts, on every item: no two options of one question share their text or their reason (`then`), the right
  "What else" option is not always in one place, and exchanges in lessons 4 to 6 include at least one real contact where going along is right.
