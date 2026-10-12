# Audit of the build-subject skill (2026-10-12)

The owner asked, before any ninth subject: is the skill that designs subjects sound, or a pile of patches? This is the
audit. It has two parts. **Part A** reads what the skill has produced (the eight design records, the five stand-in
reviews, the standard's sections 23 and 26, the validator's V69) and says what that shows about the skill. **Part B**
is the set of questions to run on the skill's own text. When part A was written the skill lived only at
`~/.claude/skills/build-subject/` on the owner's Mac; it came into the repository on 2026-10-12 (commit 0e8cb55,
`.claude/skills/build-subject/`) and part B is answered below the table.

Read for part A: `docs/subjects/*/design.md` (the opening JSON and every gate section), `docs/subjects/*/reviews/*.md`,
`docs/lesson-standard.md` sections 23, 26.7 and 26.10, `tests/lessons/rules-design.mjs`, `docs/research/*.md`, the
lesson files' `history` lines, and the git log since 2026-10-10.

## Part A. What the skill's outputs show

**A1. The design gates have never said no.** Eight subjects went through gates 1 to 5 on 2026-10-10. Eight audits of the
existing lessons came back "rebuild from scratch". Eight sets of approvals (end result, practice, pilot) were given in
one phrase, "approve all, keep going". A gate that gives the same answer every time has not been shown to be a gate.
This is not proof the gates cannot fail; it is the absence of any case where one did. Nothing in the records says what
an end result or a practice method that *fails* gate 2 or 3 would look like.

**A2. The gain gate does say no, and it finds real defects.** The stand-in reviews (an agent that did not build the
lesson, reading it as a beginner and sitting its check) failed five pilots of seven: Ideology, Math, Scams, Stats and
Wealth; Psychology and Singing passed. The failures are concrete and checkable: Math's own calculator cannot type the
working the feedback shows; Scams' answer key marks the lesson's own rule wrong on a real bill; Stats' check contradicts
its first step's cue; Wealth's "on your own accounts" step cannot be done without outside help; Ideology's tap fails a
right answer when the deciding words sit on two lines. Every one of these passed the validator's tens of thousands of
checks and the browser checks. So the one part of the process that discriminates is the one that reads a lesson *as a
learner*, and the weak part is everything before it. The Singing lesson of section 23 (checks asked whether a lesson
was well built, none whether it teaches) still holds for the design gates; it no longer holds for the gain gate.

**A3. The reviews gate nothing yet.** Every pilot is still at `rev: 1` with its first history line; none of the five
failing reviews has been acted on, and V69 does not read a review (the worklist lists "V69 enforces it" as open). A
review that nothing waits on is a report. The worklist marks the fixes as the current task, so this is a process gap,
not a disagreement about what to do.

**A4. The records have one shape, and it is not clear the skill chose it.** All eight records have the same seven
headings; six of eight have six to eight parts; every judging subject's test is "ten new items, 8 of 10"; every
lesson in every gate 5 is "one worked item, then items with feedback, then the part's check". The geography record
written on 2026-10-12 came out in the same shape without a decision being made about it, because the Civics record was
the example in front of the writer. Two readings are possible: the shape is what the evidence (R8: practice in the form
of use, with feedback) calls for in every subject, or the skill's examples are a template and the writer fills it. The
one subject that broke the shape, Singing (sung tries, no items, a line that fades), is the one that forced the engine
to change, which suggests the shape comes from the examples more than from the gates. The skill's text decides this
(B3).

**A5. The evidence gate is weaker than its name.** Across the ten research notes, 63 findings are marked as read from an
abstract or a secondary summary and 6 from a primary source or a full text. The design records then cite them as
settled. Asked "what would change in this design if the paper said the opposite?", most principles answer "nothing":
produce the answer, feedback at once, spaced returns and mixing all point the same way and were the method before the
notes were written. The notes confirm an approach; they rarely decide one. Where a finding does decide something (the
Scams timing, Psychology's "what else?" step, Singing's fading line) it is usually marked as a judgement call to be
measured. The skill should say which principles *decide* a design, and those need a primary read.

**A6. The skill assumes an owner it does not have.** Gates 2, 3 and 6 are owner actions: read and approve an end result,
read and approve a practice method, try the pilot on a phone and say what it did. The records run 20 to 26 KB each,
about 200 KB in all; the owner approved all of them in one line, which is the only practical answer to that much text.
Two days later `tried.pilot` is null in every record, and the worklist already replaces the try with the stand-in review
("don't wait on my read"). The skill should be written for the owner it has: an approval is one screen per gate, in the
record's own JSON, and the stand-in review is the normal gate 6, with the owner's words overwriting it when they come.

**A7. The standard the skill points to cannot be held by a writer.** `docs/lesson-standard.md` is 366 KB, with four
revisions that each "override every rule above where they conflict"; `docs/learning-science.md` is 346 KB and every
design record says its framing is "not adopted". The rules in force are section 26 plus parts of 23 and 24 plus the
V-rule table in 26.7; sections 1 to 22 are history. A writer agent given the whole file reads the history as rules.
Either the skill carries the current rules itself, or there is one short "current standard" with the history moved out.

**A8. The gates are as strict as the agent that day.** Singing's record has gates 1 to 3 in three lines each and marked
"(draft)"; Psychology's gate 1 has ten numbered principles with citations; both passed. The skill does not fix what a
gate requires closely enough for two agents to produce the same depth, so the gate's strictness is set by who runs it.

**A9. Part of the skill is already code, and the rest is on one machine.** V69, V71 and V80 encode the record's fields,
the parts-to-lessons map and the end result's wording. The gates' reasoning, the questions each asks, and what "blind"
means are prose in a file the repo does not hold. Moving the file in lets the validator check that a record names
every gate the skill has, and lets any session read the same skill the owner's machine runs.

## Part B. The questions to run on the skill's text

Each has a pass condition; "fail" means the skill is changed before Geography goes through it.

| # | Question | Passes when |
|---|---|---|
| B1 | Can each gate fail? | Every gate states the condition that rejects, in words a writer can apply, and at least one rejection is written as an example. |
| B2 | Does the evidence decide anything? | The skill asks the writer to mark each principle "decides" or "supports", and a "decides" principle needs a primary read. |
| B3 | Does it template? | The skill's examples are shown as one subject's answer, not the shape of every answer; gate 4 asks "what shape does *this* real moment force?" before any example is opened. |
| B4 | Who reviews? | Gate 6 names the gain review by a reviewer that did not write the lesson, says exactly which files it may open, and the review's verdict is recorded in the design record. |
| B5 | Is the approval real? | Each owner approval is one screen of the record's own words; the skill never asks the owner to read a gate's prose to approve it. |
| B6 | Is it one document? | The skill states the rules in force or points to one short current standard, not to the 366 KB file. |
| B7 | What does "blind" mean? | The skill says what the designer may not read before gates 1 to 5, and the brief enforces it (the Ideology review disclosed an accidental read of gate 5). |
| B8 | Does it match the code? | Every field V69 checks is one the skill asks for, and nothing the skill asks for is unchecked. |

## Part B, answered (2026-10-12)

The skill is now in the repository at `.claude/skills/build-subject/` (`SKILL.md`, 146 lines, and `stand-in-review.md`, 35
lines; commit 0e8cb55, byte for byte the Mac's copy). Line numbers below are `SKILL.md`'s unless marked. Where part A
guessed wrong about the text, the answer says so.

**B1. Can each gate fail? Fail**, though closer to passing than A1 guessed.

What the skill says. The general rule, lines 36-37: "If the learner did only this, would they be closer to the end
result?" A "no" or a "not really" stops the gate." Then gate by gate:
- Gate 1, line 54: "Pass when: every principle named later can point to a line in this record." A writer can apply
  the inverse (a principle with no line). No rejection written.
- Gate 2, line 65: "Pass when: the owner approves the sentence and the test." The sentence has no condition a writer can
  apply; the only thing that rejects it is the owner. The test has one, with the skill's single written rejection,
  lines 60-62: "It must be something the learner does, not something they say about it. ("Sing a five-note line with a
  guide note; at least four notes land on pitch." Not "name what is wrong with Nadia's singing.")"
- Gate 3, lines 69-71 and 78: the core "must be the real moment's own action"; "Never swap in a practice the app can
  already deliver because it is there." Applicable. The rejected case is written only as history, lines 17-20 (Singing
  "built to be read: stories about other people's singing, sorted into named kinds").
- Gate 4, lines 88-89 and 91-92: "A lesson that serves no part is cut, however good"; pass when "the parts together add
  up to the end result (if every part passes, the gate 2 test would pass)". Applicable; no example.
- Gate 5, lines 102-105, the one gate written as rejections: "Reject the lesson design if: its main activity is not the
  part's real action; most of its time is reading; its end check measures something other than the part; or the answer
  to "if the learner did only this ..." is not a clear yes."
- Gate 6, line 116 ("go on, or go back to gate 3 or 5") and `stand-in-review.md` lines 28-29: "Verdict: passes only when
  Gain, Doing and Check are all yes and nothing under Clear blocks a beginner. Otherwise Verdict: fails".
- Gate 7, lines 126-131: no pass or fail condition; "A lesson that does not move them is rewritten or cut."

Against the condition: gates 3, 4, 5 and 6 state a rejecting condition a writer can apply; gate 1 only by inversion;
gate 2's sentence and gate 7 have none. One rejection is written as an example (gate 2's test), so the second half of the
condition passes narrowly. A1 said nothing in the records shows what a failing end result or practice looks like; the
skill's text does, for the test and for the practice, and the records did not carry it.

To pass: every gate gets a "Reject when:" line next to its "Pass when:" (gate 2: the sentence names knowing or
understanding rather than doing, or the real moment is not a time and place the learner meets; gate 7: a lesson whose
try or stand-in review fails is not done), and one short worked rejection per gate, in the gate, not only in the history.

**B2. Does the evidence decide anything? Fail.**

Lines 48-52: "Find the evidence for that kind. The project's research document must cover it, with sources that were
actually read: findings, conditions, strength. ... Never borrow the principles of one kind for another without saying so
and why." Line 52: "Record: the kind(s), and the five to ten principles that will drive the design, each with its
source." No line asks the writer to mark a principle "decides" or "supports", and "actually read" does not distinguish
an abstract from a full text, so nothing requires a primary read for anything. This is what A5 measured (63 findings
from abstracts, 6 from full texts, and principles that would change nothing if false).

To pass: gate 1 step 3 asks, per principle, "decides" (name the design choice that would differ if it were false) or
"supports"; a "decides" principle cites a source read in full, with where in it; the research note carries the same mark.

**B3. Does it template? Fail on the second half; the first half passes, and A4 was wrong about the text.**

The skill forbids what A4 suspected. Line 142, under Never: "Start from a template, an engine kind or existing content,
and fit the subject into it." Lines 41-42: "Decide this from what the learner must do in real life, before looking at
any template." Lines 11-13: "Earlier style rules, templates, engines and habits of the project are inputs, not rules."
Its examples are parenthetical and one subject's: line 44, "(is this message a scam)"; line 60, the five-note line;
lines 85-86, "(for singing: breath, matching a note, holding it, moving between notes, range, a whole song line)". There is
no template of a record's shape in the skill: lines 29-31 ask for "one `##` section per gate ... short: what was decided
and why, with sources."

What is missing: gate 4 (lines 83-92) asks to break the end result into parts, order them, give each a check and map
them to lessons. It never asks what form this subject's real moment forces on the practice and the check (a sung try, a
typed number, a tap on an unlabeled map, a call that pushes back). And the skill does not say whether a writer may open
another subject's record. The eight identical shapes, and Geography's ninth, came from writers handed a finished record
as the example, which the skill neither tells them to do nor forbids.

To pass: gate 4 opens with "what form does the real moment force on the practice and on each part's check?", answered
in the record before any other subject's record is opened; and "design blind" (B7) extends to other subjects' records.

**B4. Who reviews? Fail on the files; the reviewer and the record are named.**

The reviewer: lines 118-122, "a stand-in learner review (`stand-in-review.md` in this skill): an agent that did not build
it does it as a beginner and answers, with evidence, whether the reader can do more of the real task after the lesson
than before." `stand-in-review.md` lines 7-10: "told only: the subject's end result and real moment (gate 2), the
lesson's part and its check (gate 4), and the lesson as the learner meets it (the learner view, and the app at phone
width when it can be run). ... It is not shown the gate 5 block, the evidence or anyone's opinion of the lesson." That
names what it is told, not which files it may open. The Ideology review (`docs/subjects/ideology/reviews/l2.md`, line 8:
"a range read of `design.md` ran past the Gate 4 table and showed the Gate 5 lesson list on screen") is the case the
condition names: a reviewer that may open `design.md` to find gate 4 sees gate 5.

The record: `stand-in-review.md` lines 32-35 put the review at `docs/subjects/<id>/reviews/<lessonId>.md` and say "The
design record's `tried` holds, per lesson, either the owner's try (`by: 'owner'`, date, words) or the stand-in's
(`by: 'stand-in'`, date, the review file, and `waived` ...)". So the verdict is asked into the design record. It is not
in any: all nine records have `tried: { pilot: null }`, seven reviews exist, and (B8) the stand-in shape the file
describes has no `words`, which V69 rejects.

To pass: the reviewer's brief names its files: `docs/learner-view/<subject>-<lesson>.md`, the running app, and gate 2's
sentence and the part's check pasted as text by the caller; `design.md` is not on the list. And the verdict's place in
the JSON is one shape, written in the skill, that V69 reads.

**B5. Is the approval real? Pass**, and A6 was wrong about the text.

Lines 32-33: "Owner approval is recorded in the gate's section as `Approved by the owner: YYYY-MM-DD, "<their words>"`.
Ask for it in one short message: the decision in two or three lines, never a document to read." Gate 3, line 80: "the
owner approves the method in two or three lines". Gate 2, line 65: "the owner approves the sentence and the test." The
skill never asks the owner to read a gate's prose. The eight records approved in one line were the practice departing
from the skill, not the skill.

One gap, short of a fail: the skill does not say that what the owner approves is the record's own strings (the JSON's
`endResult`, `test`, `practice`), so the approved date can stand on text the owner has not seen. The Scams record shows
it: approval given to a first draft, then "The blind design below keeps that draft's sense and sharpens it in three
places, which the owner should confirm in one line", and the date stands. A change to an approved string after its date
should clear the date.

**B6. Is it one document? Fail**, by pointing nowhere.

The skill does not name `docs/lesson-standard.md`, so it does not point to the 366 KB file. It also states no rule for
building a lesson and points to no short standard: gate 6 line 111 is "Build only the first lesson, completely", gate 7
line 126 "Build the remaining lessons, each from its gate 5 block", and the only project document named is "The
project's research document" (line 48) and the record. The form rules (the V-rules, plain words, the engine's kinds,
what a `check` is) reach a writer through whatever the calling session puts in its brief, and that is how the 366 KB
file comes back in. A7 stands.

To pass: gate 6 step 1 and gate 7 step 1 point to one short current standard (Part C item 5) and to `npm run
test:lessons`, and to nothing else.

**B7. What does "blind" mean? Fail.**

Lines 34-36 define it for one case: "Design blind. When rebuilding or auditing an existing subject, write gates 2 to 5
before reading its current lessons. Then compare. Reading the old content first anchors the design on it, which is how
a bad design survives." So the designer may not read the subject's current lessons before gates 2 to 5 pass, when
rebuilding. It says nothing for a new subject (Geography's writer read the Civics record), nothing about other
subjects' records, learner views or reviews, and nothing about how the brief to an agent enforces it (which files are
passed, which are forbidden). The one enforcement in the skill is the reviewer's "told only" list in `stand-in-review.md`,
and the Ideology disclosure shows "told only" does not stop a file read.

To pass: a "May open" list per stage, in the skill: gates 1 to 5 open the research document and this subject's own
record; not its lessons, learner views or reviews, and not another subject's record; the reviewer opens the learner
view and the app, and gets the rest as pasted text; every brief lists its files, and the record names what was opened.

**B8. Does it match the code? Fail, both ways.**

What V69 (`tests/lessons/rules-design.mjs`) reads: the JSON block between the record's first two `---` lines
(`tests/lessons/designs.mjs`), with `subject` (equal to the folder), `kinds` (from facts, judging, procedure, body,
habit), `endResult`, `realMoment`, `test`, `practice` (strings), `approved.endResult`, `approved.practice`,
`approved.pilot` (null or a date), `parts` (an `id` and a `title` each), `pilot` (a lesson id), `tried.pilot` (null, or
a `date` and the owner's `words`); then the two holds: no content changed before `approved.endResult` and
`approved.practice`, no lesson past the pilot (baselines aside) before `tried.pilot`. V71 reads `parts` and `pilot`
(each lesson's `part` is a part; one lesson per part; every part has a lesson once the subject is `complete`; lessons
in part order; the subject record's `parts` equal the design's word for word; the pilot is a lesson). V80 reads
`endResult` (the subject record's equals the design's word for word).

Asked for by the skill and checked: the kind of learning (gate 1, line 41; the five kinds, lines 43-47, are V69's five);
the sentence, the real moment and the test (gate 2, lines 58-62); the practice method (gate 3, line 69); the parts and
their order (gate 4, lines 85-86); the map of parts to lessons (line 88; V71, both ways only when `complete`); the approval
dates (line 32); the owner's try of the pilot (gate 6, lines 112-115: `tried.pilot`).

Asked for by the skill, unchecked:
- gate 1's five to ten principles with sources (line 52);
- gate 2's "What is out" (line 63);
- gate 3's time split, feedback source and speed, and the delivery check (lines 72-78);
- gate 4's check per part (line 87): `parts` hold an `id` and a `title` only;
- gate 5's block per lesson (lines 96-101): what the learner does, the feedback, the end check, the principles. Gate 7
  line 128-129 says the validator refuses "a lesson whose part or end check is missing"; V71 checks the part, and no
  rule ties a lesson's `check` to its part's check from gate 4 (V70 checks only that the `check` is well formed);
- the owner's words beside each approval date (line 32: V69 keeps the dates only);
- gate 6's record of the try: passed the end check, what confused, what was waste, would they come back (line 113:
  V69 keeps a date and words);
- the stand-in review as `stand-in-review.md` lines 33-35 describe it (`by`, date, the review file, `waived`): no rule
  reads it, and because V69 requires `tried.pilot.words`, a stand-in entry in that shape is rejected as "neither null
  nor a date with the owner's words". This is why the seven reviews are in no record;
- gate 7's per-lesson tries (line 126-127): only `tried.pilot` is read;
- gate 7's after-use evidence and the audit table of keeps / changes / goes (lines 130-131, 135-138).

Checked, not asked for by the skill:
- the JSON block itself: the skill asks for "one `##` section per gate" (line 30) and never says the record opens with
  machine-readable JSON between two `---` lines (`designs.mjs` attributes that shape to the skill; the skill does not
  have it);
- the `subject` field and the `pilot` field: the skill says "Build only the first lesson" (line 111) and never asks the
  record to name it;
- `approved.pilot`, a third approval: the skill has no owner approval at gate 5 (it passes when "every lesson in the map
  has a block that survives those rejections", line 107) and gate 6 is a try, not an approval. V69's comment calls it
  "the advance approval of the pilot";
- V71's one lesson per part: the skill allows several (line 88, "Every part is covered by a lesson; no lesson exists
  without a part");
- the two mirrors (V71's `parts`, V80's `endResult`, word for word in the subject record) and the `complete` flag.

To pass: the skill carries the record's JSON shape as the one place a gate's answers are recorded (each gate names its
fields), including a `check` per part, a `tried` entry per lesson in one shape for the owner and the stand-in, and
`approved.pilot` is either given a gate or dropped; V69 reads what the skill asks for, including a lesson's end check
against its part's.

**The tally.** Pass: B5. Fail: B1, B2, B3 (second half), B4 (the file list), B6, B7, B8. Better than part A guessed: B1
(gate 5 and the stand-in verdict are real rejections, and one rejection is written out), B3 (the skill forbids
templating; the shape came from the briefs), B5 (the skill asks for a three-line approval; the practice ignored it).
The first change to make is B8's: put the record's JSON shape in the skill, with one `tried` shape for both kinds of
review, because until the code and the skill agree, the five failing reviews cannot be recorded anywhere V69 reads, and
every other fix lands as prose that nothing enforces.

## Part C. What to change, in order

1. **Done 2026-10-12: the skill is in the repo** at `.claude/skills/build-subject/` and part B is answered above.
2. **Make the gain review a gate**, and with it put the record's JSON shape in the skill (B8): the design record gains
   `reviews: { [lessonId]: { date, verdict, by } }` (or one `tried` shape per lesson for the owner and the stand-in),
   V69 refuses a `live` lesson without a passing review or the owner's words, and a review's "Fixes needed" is the next
   revision's list. Moved ahead of the pilot fixes on 2026-10-12: B8 found that the stand-in verdict, in the shape
   `stand-in-review.md` asks for, is rejected by V69, so a fixed pilot's passing review has nowhere to be recorded
   until this is done.
3. **Fix the five failing pilots before any new subject.** They are the current task on the worklist; nothing about the
   skill is settled while its first five outputs stand unfixed. Each fix's fresh review is recorded through item 2.
4. **Shrink the approvals to one screen each**: the record's JSON is what the owner approves, gate by gate, in a line.
5. **One current standard**: section 26, the parts of 23 and 24 still in force, and the V-rule table, in one short file;
   sections 1 to 22 and the revision logs become history.
6. **Mark what decides**: each research note labels its findings "decides" or "supports"; the skill asks for it.
   (Added 2026-10-12, from B1, B3, B6 and B7, in the same pass over the skill's text: a "Reject when:" line and one
   worked rejection per gate; gate 4 opens with the form the real moment forces; gate 6 points to the one current
   standard; a "May open" list per stage, and every brief names its files.)
7. **Geography waits** for 1 to 3. Its record (`docs/subjects/geography/design.md`) is re-run through the fixed skill,
   with the owner's three changes of 2026-10-12 (the world first, flags as a third form of each country, one line of
   what the country is in the feedback).

## Getting the skill into the repo (done 2026-10-12)
On the owner's Mac, in the repository folder:
```
mkdir -p .claude/skills
cp -R ~/.claude/skills/build-subject .claude/skills/build-subject
git add .claude/skills/build-subject
git commit -m "docs: the build-subject skill moved into the repo for the audit"
git push
```
Or paste the text of `SKILL.md` (and any files beside it) into the chat, and the session writes it in.
