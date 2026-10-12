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

## Part D. The rebuilt skill reviewed (2026-10-12)

An independent review of the rebuilt skill, by an agent that did not write it. The skill changed while it was being
reviewed (39a5fcf, then 5f60a80, which added "the session that runs the skill is held to the gates", "every principle
is cited by a block" and "V69 reads every record in the folder"); this part is written against **5f60a80**, and line
numbers are `SKILL.md`'s at that commit unless marked. At 5f60a80 the validator is red: 30 V69 failures, all of them
Geography's record (no principles, out, feedback, form, delivery, readingShare, part checks, lesson blocks or opened).
The tools were tried on scratch copies (`git archive HEAD`, with their own git), never on the real records.

What is good, briefly. Every gate now has a "Reject when" line, and gates 0 to 6 a worked rejection. The record's shape
is in the skill and V69 reads almost all of it, with seeded faults for each new refusal. The stand-in review has a file
list, a verdict line V69 reads, and a place in `tried`. Approvals carry a fingerprint, so changing approved text clears
the approval. Gate 0 exists and holds the content while an ask is in no part. The standard in force is 65 KB (the old
file is 366 KB), and it names every V rule and X check the code has. On the text, part B's tally (one pass, seven fails)
is mostly reversed. What is left is enforcement. The session writes almost every owner field itself, through tools that
accept any words, and V69 cannot tell a gate that was run from one that was skipped.

### D1. B1 to B11

| # | Verdict | The lines | What would make it pass |
|---|---|---|---|
| B1 Can each gate fail? | **Pass** | "Reject when:" at 131, 162, 199, 225, 250, 271, 295, 316; "Rejected, for example:" at 135, 166, 203, 229, 254, 275, 299. Gate 2 (199-201): "the sentence names knowing, understanding or recognizing rather than doing; ... the paragraph takes more than a screen". | Gate 7 has the reject line and no worked rejection. Every rejection except gate 0's (the validator) and gate 6's (an outside reviewer) is applied by the session that wrote the gate. Say per gate who applies the rejection. |
| B2 Does the evidence decide? | **Pass** on the text, partial in code | 154-158: "A principle *decides* when a choice in this design would be different if the finding were false: name that choice in the record. ... A decides principle must have been read in full ..., and the note's own "Read:" line says so." V69 refuses a decides principle not read `full` and a record with no decides. | The record's `read` is its own claim: V69 never compares it with the note's "Read:" line or the note's own mark. The "choice" has no field (it is in the note's **Decides:** line, which V69 does not read). `docs/research/review-after-lessons.md` (R1 to R9, cited by six records) has no Decides or Supports mark. Scams' SC3 is recorded `full`, but its reminder half rests on Lain et al. 2024 "abstract and §8" and Lain 2022 "abstract only". V69 should read each finding's mark and Read line and refuse a mismatch. |
| B3 Does it template? | **Pass** | 239-242: "The form first (`form`), before any part is written and before any other subject's record is opened ... A check that is "ten items, 8 of 10" is one form among many, never the default." 65 forbids other records; 332, Never: "another subject's record". | `form` was added to the eight older records in the 2026-10-12 migration, after their parts of 2026-10-10 (the field is absent at b0522e3), so none of them shows the order the gate asks for. The fixture's default `form` is one sentence used by every test subject. It holds for new subjects. |
| B4 Who reviews? | **Pass** on the text; fails once in the data | `stand-in-review.md` 10-19 names the files (the learner view, the running app, the brief's pasted end result, real moment, part title and check), withholds `design.md`, and says "A reviewer that read any of these says so ... under "Disclosure", and the review is run again by another reviewer." The skill (288-292) records the review in `tried`, and V69 reads its verdict. | V69 never reads a Disclosure. Singing's review (`reviews/l2.md` line 8: "printing the head of `design.md` also showed the first lines of the gate 5 list") says `passes` and is recorded as `tried.l2`, so Singing's pilot counts as passed on a review the skill says must be run again. Four of the seven reviews carry a Disclosure (Ideology, Math, Singing, Stats). Nothing records who reviewed, or that it was not the builder. Treat a review with a Disclosure as unreadable; have the review name its reviewer and the files it opened. |
| B5 Is the approval real? | **Partial** | 46-51: "reads one screen each time ... Never ask the owner to read a gate's prose, a research note or a lesson to approve." | What the owner reads is the goal, the topics and the drops list, but V69 bounds only the goal (1,200 characters). Psychology's goal and 27 topics come to 1,850 characters before any drops; Geography's to 1,627. "Three lines" for the method is not measured (practice runs 225 to 723 characters). The owner no longer approves the gate 2 sentence, the real moment or the test: `approvedText` (rules-design.mjs line 20) binds `goal` and `topics` only. Yet the standard (3.2) still calls `endResult` the owner's approved wording. Bound the whole message to one screen. Either put `endResult` and `test` under the goal's fingerprint, or stop calling them approved. |
| B6 Is it one document? | **Pass** | 73-74: "The rules for building a lesson are `docs/lesson-standard.md` (short: the rules in force) and the validator ... Nothing else is a rule". | 65 KB and 768 lines is not short for a brief, and the file has the errors listed in D3. Fix those. |
| B7 What does "blind" mean? | **Partial** | 62-68 (the table of what each stage may and must not open) and 60: "the record's `opened` lists every path gates 1 to 5 read; V69 refuses the forbidden ones". | `opened` is the session's own list. Every existing record's list was written in the migration, two days after the reads it reports, so it is a reconstruction. V69 refuses only the paths it knows to forbid: this subject's lessons, learner views and reviews, and other records. It does not refuse gate 1's "any lesson" of another subject, nor anything under the writer's or reviewer's rows. Nothing checks the May-open column: Math's `opened` lists the deleted engine's `public/app/lessons/ask.js` and `drill.js` and passes. One list cannot tell gate 1's reads from those of gates 2 to 5. The designer's brief is not told to list its files (only the reviewer's is). Name the designer's files in the brief, check `opened` against the May-open column, and keep one list per stage. |
| B8 Does it match the code? | **Partial** | 78: "Every field is asked for by a gate below and checked by V69". | See D2: 21 things asked for and unchecked, 5 checked and not asked for. Most fields now match; what stays unchecked is mostly what would show that a gate was skipped. |
| B9 Are the owner's asks must-keep? | **Partial** | 18-19: "One thing is never overruled by a gate: what the owner asked the subject to teach, in their words."; 124-129; 131-133; 338-339, Never: "Drop anything the owner asked for on the strength of a design argument or an earlier blanket approval: only their recorded word on that item drops it." V69 (line 46): a drop needs `owner`; the content is held while an ask is in no part and not dropped. | Each hole was tried on a scratch copy. (a) **Deleting an ask** drops it with no word and nothing refuses it. Math's three undecided asks (primes-factors, counting-and-chance, right-triangles) were removed and both approvals written as "approve all, keep going"; the pilot's title was then changed and the lock rewritten. The validator passed all 48,518 checks. V69 never compares `asked` with the last commit's record, so rewording an ask into something smaller is just as invisible. (b) **`kept` may name any part.** V69 checks only that the part exists (line 45), not that its topics or check cover the ask. `asked.mjs psychology biases --kept C` would file biases under part C, which has no lesson on biases. (c) **Any string counts as the owner's word.** For Geography's `where-places-are`, the owner's word is recorded as "i already signed off psychology and geography so finish these 2": a blanket line about something else. (d) `asked: []` passes; nothing checks the list against its sources. To pass: compare `asked` with the last commit and refuse a removed or shrunk item that has no owner drop; let `kept` name topics (and through them a part); give each owner word its source (the quoted message and where it was said). |
| B10 Paragraph and topics signed off before any plan, with the drops, bound to the text? | **Fail** | 177-181: "written before anything else in this gate and before any plan ... Nothing past this gate is started until the owner's words are on it: no plan, no design pass, no agent."; 182-184 (topics); 192-197 (the drops list in the same message); 107: "fp binds the paragraph and the topics". | The binding works: a change to the goal or the topics clears the approval (seeded faults). The other two halves fail. (1) V69 refuses any record that is not whole: gates 0 to 5 at once, and since 5f60a80 also for a subject not yet in the app. A record waiting at gate 2 cannot pass, so the only green path writes the plan first. Geography is that case: it waits for sign-off and the validator is red on it. (2) The approval binds the text in the record when the session runs `approve.mjs`, not the text the owner saw. Geography's goal and 20 topics first appear in 39a5fcf, the same commit that records their approval in words from an earlier message. Nothing records the drops list that was shown, and `approve.mjs` neither prints nor stores it. To pass: let a record be valid at gate 2 (asked, goal, topics and the drops list as shown), with V69 refusing later gates' fields before `approved.goal`. Have `approve.mjs` print the exact screen and store its fingerprint. |
| B11 Can the session waive a gate for itself? | **Fail** | 52-57: "The session that runs the skill is held to the gates too. ... An approval given earlier, to other text or to everything at once, never carries over". | What stops it: V69's holds (content needs both approvals, no ask in no part, no topic in no part, and a passing pilot; `live` needs a passing entry), the fingerprint, the forbidden `opened` paths, and `npm run deploy` running the tests. What does not. (1) The session writes every owner field through tools that take any words (`approve.mjs`, `asked.mjs --keep/--drop`, `tried.mjs --owner/--waived`). On a scratch copy, `tried.mjs scams l3 --owner "fine"` was accepted; by `triedPasses` (line 130) that makes Scams' failing pilot pass and opens every later lesson. (2) Deleting or shrinking an ask (B9a). (3) `kept` pointed at any part (B9b). (4) The session writes the review file; no reviewer is named and a Disclosure is ignored (B4). (5) `opened` is the session's own report (B7). (6) The order of the gates, "in the same turn", "no structural work in the meantime" and "never carries over" are prose only. Geography's recorded approval is exactly an earlier one carried over, and V69 accepts the field. (7) The same session can edit V69, the tools and the skill in the same commit as the records they judge. 5f60a80 added "a principle no block cites is refused" and in that same commit deleted Singing's S6 and Stats' C3 from their records rather than cite them. That may be right, but the session judged itself. The repository has no hook (`.claude/` holds `launch.json` and `skills/`), and a red validator can be committed (5f60a80 is red). To pass: owner words enter the record only as quotes from a message the owner wrote, and the tools refuse words not found there; V69 refuses changes to `asked`, `approved` and `tried` since the last commit that carry no such quote; a pre-commit hook runs `npm run test:lessons`; a change to `rules-design.mjs`, `tools/design/` or the skill needs the owner's word in the commit. |

### D2. The record shape, three ways (at 5f60a80)

**Asked for by the skill, unchecked by V69 (21):**
1. Gate 0: the list is complete (for an existing subject, every unit the owner used is an item). `asked: []` passes.
2. Gate 0: an ask removed or reworded between commits (B9a).
3. Gate 0: `kept` is "the part that covers it". Only the part's existence is checked.
4. Gate 1: the choice a decides principle decides ("name that choice in the record"). There is no field for it.
5. Gate 1: the record's `read` and `decides` against the note's "Read:" line and its own mark.
6. Gate 1: principles borrowed from another kind of learning "without saying so and why". A finding carries no kind.
7. Gate 2: the approval message fits one screen (goal, topics, drops). Only `goal` is checked, at 1,200 characters.
8. Gate 2: the drops list "has been put in front of them". It is not recorded.
9. Gates 2 and 4: every signed-off topic is in a part. This is checked only as a hold on content: Psychology passes with
   21 of its 27 topics in no part.
10. Gate 3: the method "in three lines". It is not measured.
11. Gate 3: each `delivery` item "exists in the app or is planned before the first lesson". These are strings only.
12. Gate 4: `form` is written before the parts. This cannot be checked.
13. Gate 4: "Every part is covered by a lesson". V69 checks that each block's part exists, not that each part has a
    block. V71 checks it only for built lessons, and only once a subject is `complete`.
14. Gate 5: a built lesson's check against its block's. The block's `check` is checked against the part's (as strings),
    but nothing ties the lesson file's `check` to either.
15. Gate 6: what an owner's try records (passed the check, what confused, what was waste, would they come back). Only
    `words` is checked.
16. Gate 6: "the reviewer was shown the record, the block or the evidence". The Disclosure is not read.
17. Gates 6 and 7: a fresh reviewer for a second review.
18. Gate 7: the evidence after use and the dated record of a change. There is no field.
19. Auditing: the keeps, changes and goes table, and "a lesson that goes is an ask of the owner's". There is no field.
20. How it runs: "No later gate starts before an earlier one passes", and the session held to the gates (52-57). No
    field could show either.
21. What may be opened: the May-open column, gate 1's "any lesson", and the writer's and reviewer's rows.

**Checked by V69, V71 or V80, not in the skill's shape (5):**
1. The format of a finding id in a research note (`**SC1.` opening a paragraph). It decides whether a principle "is a
   finding of its note".
2. A minimum of 10 characters on every text field.
3. V71's one lesson per part. Gate 4 step 4 (247-248) still allows several lessons for one part.
4. The subject record's `parts` must equal the design record's (id and title), and its `complete` flag. Gate 7 names
   `complete: true`, but not the mirror.
5. The whole record at once, for a subject not yet in the app (5f60a80). The skill fills the record gate by gate (B10).

**Real records that fail the skill's shape while V69 passes them (7):**
1. Psychology: 21 of 27 signed-off topics are in no part, and five asks the owner said to keep are in no part, so gate 4
   does not pass. The parts and lesson blocks predate the topics they must cover. `approved.practice` is null while a
   pilot exists.
2. Ideology: market-socialism, anarchism and nazis-socialists, which the owner said to keep on 2026-10-12, are in no part
   and not on the topics list.
3. Math (primes-factors, counting-and-chance, right-triangles), Singing (breath, tone, voice-care) and Wealth
   (cash-for-bills, tax-placement, spending-rate, insurance-and-structures): asks with no owner word and no part, never
   yet put before the owner.
4. Civics, Ideology, Math, Scams, Singing, Stats and Wealth: `approved.goal` and `approved.practice` are null, yet gates
   4 to 6 are filled and a pilot is built.
5. Singing: `tried.l2` passes on a review that carries a Disclosure (B4).
6. Math: `opened` lists the deleted engine's `ask.js` and `drill.js`.
7. All eight older records: `opened`, `form`, `goal`, `topics` and the principle marks were written in the 2026-10-12
   migration, after the gates they record.

Geography is not on this list, because V69 now refuses it, which is right for the shape and wrong for the skill (B10).

**The fixture records** (`tests/fixtures/fixture-subject/design.mjs`) pass V69, since they are its green controls. But:
- every approval's words are "approve all, keep going" (line 28), the blanket approval the skill forbids (54-55);
- every ask is kept with `owner: null`;
- every block cites both principles (`why: ['U1', 'U2']`), so no fixture has a principle that only one lesson uses;
- the topics are the part titles in lower case, so no fixture has a topics list wider than its parts.

**The tools** do what the skill says and nothing more, but each checks less than the skill implies:
- `approve.mjs` writes `{ date, words, fp }` for `goal` or `practice`. It does not show or store the drops list, does
  not check that `topics` exists, accepts any words, and overwrites an earlier approval without keeping it.
- `asked.mjs` makes the three moves the skill names. `--kept` takes any part and needs no owner word; `--drop` clears
  `kept`, which is right.
- `tried.mjs` refuses a lesson with no block. It accepts any `--owner` words, and a review path that does not exist
  (V69 then refuses that entry).
- `record.mjs` rewrites the JSON and keeps the prose.

All of them date entries in UTC (`toISOString`), so an evening approval in New York is dated the next day.

### D3. The standard, version 2, against version 1

**Changed in meaning (7):**
1. When a lesson may go `live`. Old 26.7 (V45), 26.8, 26.9 item 8 and 26.10 ("Validator"): only with the owner's words
   from a phone try. New 3.3, 9.2 (V69) and 10.3: the owner's try, or a stand-in review that passes. This is deliberate
   (part C, item 2), but section 11 says "No rule changed in substance".
2. What the owner approves before any content. Old 23.3-23.4 and 26.7: `approved.endResult` and `approved.practice`,
   and the pilot (`approved.pilot`). New 2 and 9.2 (V69): `approved.goal` (the paragraph and topics, fingerprinted) and
   `approved.practice`. The end result and the pilot are no longer approved.
3. The owner's wording. Old 26.10 (step 1, item 3): the end result and the part titles are the owner's approved wording,
   so V50 and V62 leave them alone. New 3.2 and 8.2 keep the exemption, but after change 2 neither is approved.
4. Which rule wins. In the old file the core "governs everything below", then 23.1 makes every earlier rule an input,
   "kept where it serves it and overruled where it does not", and 26 "overrides every rule above". New section 1 says
   "Where any rule below asks for more than the core needs, the core wins", and also that every rule serves the skill's
   goal, with no order between the two. The core's bar is a reading bar ("a beginner reads it once and can explain the
   idea and use it"), and it now outranks section 4's practice rules.
5. Who refuses support in a check. Old 26.10 ("Order", item 4): "V79 owns both; V72 does not repeat it". New 9.2 puts
   "no support" in V72's row, while new 3.4 and the code have it in V79.
6. X6 (the draft line) and X7 (cold start measured per subject, an owner rule) were kept in old 26.7. New 9.3 says they
   are "not in force", with no dated entry.
7. The worked step. Old 26.1: "one optional choice to commit to first". New 3.3: "one choice to commit to first".

**In force in version 1 or in the code, missing from version 2 (9):**
1. The warm-up can be skipped (old 26.1.1; `sing-run.js` line 76 still offers it).
2. Four rules for matching typed answers (old step 9, item 2; X14 asserts all four):
   - the same answer twice counts once;
   - every word typed must belong to some accepted answer;
   - two number words that do not join are two numbers;
   - "state's" is "states".
3. A good day counts in any context but `baseline` (old 26.4).
4. Each subject's part of the review is mixed (old 26.4, R9).
5. Singing's review: a warm-up, then each due lesson's check, without the line (old 26.4). Version 2 keeps only "not
   built".
6. A lesson may reuse old material from the tag `old-lessons` once it fits a gate 5 block (old 26.6). The writer's row
   of the skill's table does not list it either.
7. A thread names who wrote each line, in text a screen reader reads (old step 7, item 1).
8. A thread has a line from the other person, and no message is empty (old step 7, item 7; V70).
9. Each build step is its own commits, with the tests green at every step (old 26.8).

**In version 2, never in version 1 (6):**
1. 8.1: the learner sees the goal as "the subject screen's opening" and the topics as "the subject screen's list". But
   the subject record has no `goal` or `topics` field (3.2), and section 7 opens the subject screen on the end result.
   This is invented, and the same file contradicts it.
2. Section 2 names V73 as the rule that holds the `readingShare` mirror. The code checks the mirror in V80
   (`rules-shape.mjs` line 474), and the V80 row in 9.2 leaves it out.
3. 9.2 (V69): the holds on the owner's asks and signed-off topics, the fingerprint, "decides is read in full", and
   `opened`. These come from the skill.
4. 9.1: the whole browser suite runs only when the owner asks. This comes from commit d03b63f.
5. 6.3: "Back leaves the review and records nothing". Version 1 said only "Back leaves the review".
6. 8.1's vocabulary table, owner-confirmed on 2026-10-12.

Section 9 names every V rule in the code (V4, V36, V45, V46, V47, V50, V56, V58, V60, V62, V69 to V84). It also names
every X check in `tests/e2e-checks.mjs` and the files it imports (X1, X2, X3, X5, X8, X10 to X45). Its only errors are
the V72 and V80 rows above. `tests/lessons/rules-index.mjs` line 1 still says "Every rule of section 3.1".

### D4. The record sample (Scams, Ideology, Psychology, drawn at random)

**Scams.** SC1 is marked as deciding that "the practice and the test answer with real actions". As a counterfactual
that is honest. But the note's own correction shows the behavior task is less sensitive than detection (d' 0.39 against
0.96), so the choice now rests on "looking does not reliably tell" rather than on the finding first cited. SC3 decides
the reading share and the returns. Its returns half rests on Lain et al. 2024 (read: abstract and §8) and Lain 2022
(abstract only), so `read: full` overstates it. Lesson 1's block ("mark risky or not") is a labelling task of the kind
SC1 decides against, and l1 does not cite SC1. The other `why` ids fit: SC5 and SC7 for the timed and pushing practice
(l3, l4), SC9 for the plan (l5), R7 and R8 for the feedback and the real form. The R principles come from a note that
carries no marks.

**Ideology.** L2, L6 and L7 decide content, not method: which wrong idea opens lesson 2, populism taught apart from
side, and the four-part line for "fascist". Each names a choice that would differ if the finding were false. But L2's
own note says the data point elsewhere (equality is the commonest meaning; the welfare reading is 10%) and calls the
opener a judgement call, which is what "supports" means. L7's line follows Griffin, whom no one read (Paxton was read).
The method (labelled posts judged with a verdict and a tap, a panel that fades, a reading share of 0.25) rests only on
supports: L1 from summaries, L9 and L10 from abstracts, and L11. The `why` ids fit: L2 on l2, L6 on l4, L7 on l5, and
L3 and L4 (party cues) on l1 and l6.

**Psychology.** O1 (Gilbert & Malone, full text pp. 25-30) decides part B and the answer "one moment, ordinary reason",
and the note states the counterfactual. O8 (Morewedge et al., full text) decides practice over cards, and the note
reports the evidence against itself: the video worked too, and the game also carried instruction. These are the
best-kept marks of the three. The `why` ids fit: O3 on l2's "what else", O5 on l4's narcissist, O6 on l5's control.
But O8 is the argument that cut the biases topics. The owner has since signed off 27 topics, including confirmation
bias, sunk cost and the fundamental attribution error, and the record's parts and blocks still serve the old six.

**Overall.** The marks are honest more often than not, and where a record differs from its note it marks lower (Math
M5, Singing S3 and Wealth F10 are marked lower than they were read). "Decides" mostly settles content details. In every
sampled subject the practice method rests on supports, or on a single deciding finding. A5's point is narrower now, but
it stands.

### D5. What to fix before the pilots are built on this skill, ranked

1. **A record that is valid at each gate.** V69 should accept gate 2's fields alone (asked, goal, topics, and the drops
   list as shown) and refuse later gates' fields before `approved.goal`. Then the owner signs off before any plan,
   Geography goes green honestly, and Psychology's stale parts show as "gate 4 not passed".
2. **Owner words with a source.** The tools should take the owner's message quoted, with where it was said, refuse words
   reused from elsewhere, and store the exact screen approved (goal, topics, drops) with its fingerprint. Put
   `endResult` and `test` under that fingerprint. Ask again for Geography's approval, whose words are an earlier blanket
   line.
3. **Close the gate 0 holes.** V69 should compare `asked` with the last commit and refuse a removed or shrunk ask that
   has no owner drop. `kept` should name topics, not a part.
4. **A review with a Disclosure does not pass.** Record the reviewer and the files it opened, and run Singing's l2
   review again before it counts.
5. **Hold the owner-gated files.** Add a pre-commit `npm run test:lessons`, and require the owner's word in the commit
   for any change to `rules-design.mjs`, `tools/design/` or the skill.
6. **Fix the standard:**
   - the V72 and V80 rows;
   - section 2's V73;
   - 8.1's goal and topics on the subject screen;
   - 3.2's "owner's approved wording";
   - section 1's order of precedence;
   - the nine missing rules;
   - a true revision entry: `live` by review, the goal in place of the end result, X6 and X7 retired.
7. **Read the evidence marks in code.** Mark `docs/research/review-after-lessons.md` decides or supports, and have V69
   compare each principle's `decides` and `read` with its note.
8. **Check `opened`** against the May-open column, keep one list per stage, and name the designer's files in its brief.

After these, the owner's asks for Math, Singing and Wealth go on their drops lists beside the paragraphs. That is the
owner's work, not a fix to the skill.

## Part E. The second review (2026-10-12)

An independent review of e86d51d ("the skill reviewed and rebuilt on its findings"), by an agent that did not write it,
against part D's verdicts and fixes. Line numbers are `SKILL.md`'s at e86d51d. `npm run test:lessons` is green (48,520
checks; 191 seeded faults). Every attack below was run on a scratch copy (`git archive HEAD`, its own `git init`, the
hooks switched on with `core.hooksPath`), never on the real records.

What is better, briefly. A record now grows gate by gate: Geography is green at gate 2, and gate 3's fields are refused
before `approved.goal` (tried). The fingerprint covers the paragraph, the topics, the sentence and the test. `kept` names
topics, and an ask removed or reworded since HEAD is refused (tried). Notes carry Decides/Supports marks, and V69 compares
each principle's mark and read level with its note. A `Disclosure:` line voids a review. `opened` has one list per stage,
with allow-lists for gates 1 to 7. Every part has exactly one block. The standard's D3 errors are fixed. Two hooks exist.
What is left: every owner field is still written by the session through tools that take any words, and five new holes
let a fixed rule be stepped round.

### E1. B1 to B11

| # | Pass condition (part D) | The lines now | Verdict | What would make it pass |
|---|---|---|---|---|
| B1 Can each gate fail? | gate 7 gets a worked rejection; say per gate who applies the rejection | 96-99 ("Who applies each rejection"); 412-413 (gate 7's example) | **Pass** | The "independent review of the record" that applies gates 1 to 5 (96-98, 354-356) has no field, so whether it ran cannot be seen (E3, list 1, item 13). |
| B2 Does the evidence decide? | V69 reads each finding's mark and Read line and refuses a mismatch; a field for the choice; the returns note marked | 212-219, 140; `design-shape.mjs` 84-89; `designs.mjs` 41-60 | **Partial** | `readLevel` returns `full` when any source on the Read line was read in full. Scams' SC3 ("Lain et al. 2024 abstract and §8 ... Lain 2022 abstract only") and Math's M1 ("Barbieri ... only as its abstract") still pass as decides/full, which was D4's own example. A finding with no Read line (G7, M10, C10, S6, D16) accepts any `read` a record claims. The last finding's span runs to the end of the file, through "What the evidence does not settle". The notes are not covered by the commit-msg hook, so the evidence V69 compares against is edited freely. To pass: read each source's level, and refuse `full` on a decides finding whose Read line names an abstract or summary; refuse a cited finding with no Read line; end the span at the next heading. |
| B3 Does it template? | holds for new subjects | 316-321, 105-108 | **Pass** | Unchanged. The fixture still cites both principles from every block, and its topics are its part titles. |
| B4 Who reviews? | a Disclosure voids a review; the review names its reviewer and the files it opened | `stand-in-review.md` 25-28, 50-53; `designs.mjs` 31-36 | **Partial** | The Disclosure is read. The Reviewer line is checked only as `^Reviewer: ` anywhere in the file, not as "who, which model, date; opened: files". Four Reviewer lines (Psychology, Math, Stats and Wealth) were written into the 2026-10-11 reviews by the committing session on 2026-10-12. Psychology l1 is the only passing review; its line says what it opened "is in its notes below", and the notes list no file. Scams l3's reviewer read "the design record's opening" and `l3.lesson.js` with no Disclosure (it fails anyway). Singing l2 was voided, not re-run. To pass: parse the Reviewer line, check its files against the reviewer's row of the table (109), and re-run Psychology l1 by a reviewer that writes its own line. |
| B5 Is the approval real? | one screen bounds the whole message; `endResult` and `test` under the fingerprint | 73-80, 258-265; `design-shape.mjs` 28-32, 121-122; `approve.mjs` 15-37 | **Partial** | `endResult` and `test` are under the fingerprint. The bound is not the screen. `goalProblems` and `approve.mjs` measure goal, topics, sentence and test (Psychology 2,409, Geography 2,413), while the printed screen with its headings and drops is **4,325 and 3,103 characters** (tried). Line 261 says that is "the finding", and the tool lets it through. The drops are wrong at gate 2 (E4, item 1), and they are outside the fingerprint. To pass: measure and fingerprint the printed screen as `approve.mjs --show` prints it. |
| B6 Is it one document? | fix the standard's errors | 115-116; `docs/lesson-standard.md` | **Pass** | One new contradiction: section 2 sends the writer's old material to `opened.design`, which V69 refuses there (tried); the skill (108) and V69 use `opened.writing`. |
| B7 What does "blind" mean? | the designer's files named in the brief, `opened` checked against May-open, one list per stage | 100-114; `design-shape.mjs` 95-113 | **Partial** | Four lists exist, with allow-lists for `research`, `design` and `writing`. `asks` has none: `public/app/lessons/ask.js` and `docs/learner-view/psychology-l1.md` pass there (tried). `opened` is not compared with the last commit. Deleting Math's two engine paths from `opened.design` clears the content hold they cause (tried). The reviewer's reads are not checked (B4). All nine records have `opened.asks: []`, although gate 0 says the list is written "from the sources (`opened.asks`)" (177). To pass: allow-list `asks`; refuse removals from `opened` since the last commit; require `opened.asks` when `asked` is non-empty. |
| B8 Does it match the code? | every field asked for is checked, and the reverse | 120-123: "Every field is asked for by a gate below and checked by V69" | **Partial** | E3: 19 asked for and unchecked (21 at part D; several closed and new ones found), 3 checked and not asked for. |
| B9 Are the owner's asks must-keep? | `asked` compared with the last commit; `kept` names topics; owner words carry a source | 174-198; `design-shape.mjs` 35-71 | **Partial** | Removal and rewording against HEAD are refused (tried). Three holes remain. (1) **Launder in two commits:** deleting an unbuilt subject's `design.md` passes V69 and the hook (`ids` comes from the data and the working records only), and recreating it next commit without the ask passes too (tried on Geography's `flags`). (2) `when`, `where` and `owner` of an ask can be changed silently, and `asked.mjs --drop --words "drop flags" --where "chat, 2026-10-12"` drops an ask on invented words (tried). (3) `kept` accepts any topic on the list: all eight Psychology asks "kept" by the first topic passes (tried). Geography's `where-places-are` still carries "i already signed off psychology and geography so finish these 2" as the owner's word: B9(c) of part D, unchanged. To pass: compare every field of every ask with every committed version (or forbid deleting a record), and replace the blanket line. |
| B10 Paragraph and topics signed off before any plan, with the drops, bound to the text? | a record valid at gate 2; later gates refused before `approved.goal`; `approve.mjs` prints and fingerprints the exact screen | 67-72, 241-265; `rules-design.mjs` 18-28 | **Partial** | It holds for a subject not yet in the app (tried both ways). It fails for a subject **in** the app: `stagingProblems` skips the approval checks when `built`, so Psychology's practice and parts were rewritten with no approval and V69 stayed green (tried). Psychology is the first subject to go through. The printed drops are wrong at gate 2 and are not in the fingerprint (B5, E4 item 1). To pass: for a built subject, refuse a change since the last commit to gates 3 to 5's fields while the approvals before them are missing; fix and fingerprint the drops. |
| B11 Can the session waive a gate for itself? | owner words only as quotes the tools check; V69 refuses unsourced changes to `asked`, `approved` and `tried`; a pre-commit hook; the owner's word in a commit that changes the gates | 85-93; `.githooks/*`; `package.json` `hooks` | **Fail** | The results of attacks (a) to (g) follow the table. |

The B11 attacks, on the scratch copy:

- **(a) Approve a goal with made-up words.** `approve.mjs geography goal --words "yes this is fine go ahead" --where
  "chat, 2026-10-12"` was accepted, V69 was green, and the commit went in. *Nothing stopped it.* The blanket rule stops only
  the identical words (lower-cased and trimmed) on a second subject. "Yes this is fine go ahead." on Scams passed.
- **(b) Remove an ask.** *Stopped in one commit* by V69 ("removed since the last commit"), and renaming the id is
  stopped too. *Not stopped in two:* delete `docs/subjects/geography/design.md` (green, committed), then restore it
  without `flags` (green, committed).
- **(c) Reword an ask.** *Stopped* (V69). Changing its `when`, `where` or `owner` is *not* stopped.
- **(d) Make a failing pilot pass.** `tried.mjs scams l3 --owner --words "fine" --where "chat, 2026-10-12" --passed yes
  --confused nothing --waste nothing --come-back yes`, with fake approvals of the goal and the practice, let Scams' l3
  (review: fails) be changed and marked `live`. Green, and committed. *Nothing stopped it.*
- **(e) Write gate 3 into a gate 2 record.** *Stopped* on Geography before an approval ("gate 3 was written before the
  owner's word"). *Not stopped* once (a) had faked the approval, and *never stopped* for a built subject (Psychology).
- **(f) Commit a red lesson tier.** *Stopped* by the pre-commit hook. `git commit --no-verify` committed it. The hooks
  are per-clone opt-in (`npm run hooks`), so a fresh clone or a cloud session has none.
- **(g) Change `rules-design.mjs` without an owner line.** *Stopped* by commit-msg. With an invented line
  (`Owner's word: "sure" (chat, 2026-10-12)`) it committed. Removing `...RULES_DESIGN` from `rules-index.mjs` and skipping
  the V69 controls in `negative-controls.mjs` switched V69 off: two unprotected files, a green tier (140 controls), and no
  owner line needed. The hooks themselves (`.githooks/*`) were emptied and committed with no owner line.

### E2. Part D's D5 list

1. **A record valid at each gate**: *partly done.* Gate by gate for a subject not yet in the app, yes (Geography green;
   gate 3 refused before the approval). Not for a subject in the app: its record's gates 3 to 5 change with no approval
   (B10). Psychology's stale parts are not shown as "gate 4 not passed". They show only as a content hold, which fires
   when content changes.
2. **Owner words with a source**: *partly done.*
   - Done: `--words` and `--where` are required; `approve.mjs --show` prints a screen; `endResult` and `test` are
     fingerprinted; both approvals were cleared.
   - Not done: words reused from elsewhere are refused only for identical approvals. The drops are outside the
     fingerprint and wrong at gate 2. The date is the tool's date, not the day the owner spoke.
   - Not done: Geography's blanket line is still on an ask. Psychology's cleared approval words ("On track, record my
     words on Psychology") were moved onto the `need-to-know-and-biases` ask.
3. **Close the gate 0 holes**: *mostly done.* Removal and rewording against HEAD are refused, and `kept` names topics.
   Still open: delete and recreate, the other fields of an ask, and any topic counting as cover (B9).
4. **A Disclosure does not pass**: *partly done.* Code done. The Reviewer line is unchecked in form. Singing l2 was not
   re-run. Four Reviewer lines were written after the fact.
5. **Hold the owner-gated files**: *partly done.* Both hooks exist and work when switched on. They are opt-in and
   bypassable, the owner line is not checked against anything, and the protected set leaves out the files that switch V69
   off (B11 g).
6. **Fix the standard**: *done*, except one new contradiction: section 2's `opened.design`.
   - Done: the V72 and V80 rows, section 2's mirror, 8.1, 3.2 and section 1's order.
   - Done: all nine missing rules are back (4.x, 3.7, 3.9, 9.1).
   - Done: three revision entries.
7. **Read the evidence marks in code**: *done, with a permissive parser* (B2). `review-after-lessons.md` is marked, and
   R8 is corrected to say what Pan & Rickard define.
8. **Check `opened`**: *mostly done* (B7). Four lists and three allow-lists. Still open: `asks` is unchecked, the lists
   are editable after the fact, and all nine `opened.asks` are empty.

### E3. The record shape, three ways (at e86d51d)

**Asked for by the skill, unchecked by V69 (19):**
1. Gate 0, written "from the sources (`opened.asks`)" (177): all nine records have `opened.asks: []`, and V69 passes it.
2. Gate 0, "an item is never removed" (178): deleting an unbuilt record and recreating it passes. `when`, `where` and
   `owner` of an ask are not compared.
3. Gate 0, `kept` "the topics ... that cover it" (180-181): any topic on the list counts.
4. Every owner word "with the date ... they said them" (81-82): the tools stamp today's date, accept `--where "chat"`,
   and the blanket rule covers approvals only, by exact match.
5. Gate 1, borrowing a kind's principles "without saying so and why" (211): no field.
6. Gate 1, "a record may not say full where the note read an abstract" (216-217): the parser counts any full source as
   full, and a finding with no Read line accepts any claim (B2).
7. Gate 2, "the screen is under 3,000 characters" (260-261): the printed screen is not what is measured (B5).
8. Gate 2, "every dropped item on it has been put in front of them" (278-279): `shown` is computed wrongly at gate 2,
   kept out of the fingerprint, and never compared.
9. "Nothing past this gate is started until the owner's words are on it" (244-245), for a subject in the app (B10).
10. Gate 3, each `delivery` item "exists in the app or is planned" (314): strings only.
11. Gate 4, every topic and kept ask in a part (339): for a record not yet in the app, checked only at the first lesson
    commit (as a content hold), so gates 4 and 5 and the record's review can pass without it.
12. Gate 4, `form` before the parts: uncheckable.
13. Gate 5, "an independent review of the record ... found nothing left to fix" (354-356, 366-367): no field.
14. Gates 5 and 6, a built lesson's check against its block's: unchecked.
15. Gates 6 and 7, a try or review is of the lesson as tried: `tried` carries no fingerprint or `rev`. Psychology's l1 was
    rewritten, relocked and set `live` on its 2026-10-11 review, green (tried).
16. Gates 6 and 7, the Reviewer line's form, its files against the reviewer's row, and "a second review ... by a
    different reviewer" (`stand-in-review.md` 15-16, 51-52): unchecked.
17. Auditing, "a lesson that goes is an ask of the owner's" (425-426): no field.
18. "What may be opened" (100): `asks` has no allow-list, and `opened` can be edited afterwards to clear a hold.
19. "The commit-message hook that asks for the owner's word on any change to the skill, V69 or the tools" (91-92): the
    protected set leaves out `rules-index.mjs`, `run.mjs`, `validate-lessons.mjs`, `negative-controls.mjs`,
    `controls-table.mjs`, `fingerprint.mjs`, the notes, `.githooks/` and `package.json`.

Closed since part D: the owner's try fields, the Disclosure, "every part has a block", the `choice` field, the note's
mark against the record's, `endResult` and `test` under the fingerprint, one lesson per part, a record valid at gate 2,
and `kept` as topics.

**Checked by V69, V71 or V80, not in the skill's shape (3):**
1. The grammar of a research note: a finding opens `**SC1.`, the mark is `**Decides:**` or `**Supports`, and the Read
   line is `*Read: …*`, whose words decide the level ("manuscript", "in full" and "full text" make it `full`).
2. A minimum of 10 characters on most text fields.
3. The subject record's mirror of `endResult` (V80), and of `parts` and `complete` (V71). The skill's record names only
   `readingShare`'s mirror (149).

**Real records that fail the skill while V69 passes them (9):**
1. All nine: `opened.asks` is empty, although every ask names a source.
2. Geography `where-places-are`: the owner's word is the blanket line part D named.
3. Psychology `need-to-know-and-biases`: the owner's word is the cleared goal approval's words. Seven owner words on
   Psychology and Ideology are sourced "relayed by the deployment session", not where the owner said them.
4. Psychology: all 27 topics and 8 asks are in no part (each part's `topics` is `[]`), yet gates 3 to 5 are filled; the
   printed gate 2 screen is 4,325 characters. Geography's is 3,103.
5. Ideology (3 asks), Math (3), Singing (3) and Wealth (4): asks in no part. All eight built records have both approvals
   null with gates 3 to 5 filled (held, not refused).
6. Math: `opened.design` still lists the engine's `ask.js` and `drill.js`. Deleting those two lines clears the hold.
7. Psychology l1, the only passing review: the Reviewer line was added afterwards and names no files. Its pilot serves
   part A, which now covers no topic.
8. Scams l3: the reviewer read the design record's opening and the lesson's data files, and the review has no
   Disclosure.
9. Scams SC3 and Math M1: decides/full on Read lines that name abstracts for part of the finding.

### E4. What the fixes broke or missed

1. **The gate 2 screen lists kept asks as dropped.** `approve.mjs`'s `dropsOf` uses `unplacedAsks`, which counts an ask
   as covered only when a *part* covers its topics. At gate 2 there are no parts, so every ask prints under "What you
   asked for that this design drops", and `shown` records them all. Tried on Geography: `flags` and `world-first` were
   kept by their topics and still printed as drops. The screen the owner is about to sign tells them the design drops
   what it keeps.
2. **A review is not bound to what was reviewed.** `triedPasses` reads the entry and the verdict, never the lesson's
   fingerprint, so a pilot rewritten after a passing review keeps its pass (tried on Psychology l1).
3. **Laundering by deletion.** V69's subject list is `data.subjects` plus the working records, and the HEAD comparison
   needs a working record, so an unbuilt record can be deleted and recreated smaller (tried).
4. **Holds that clear by editing the report.** `openedProblems` reads only the working `opened` (tried on Math).
5. **V69 can be switched off without the owner.** `rules-index.mjs` and `negative-controls.mjs` are outside the hook's
   list (tried). The owner line is a regex. e86d51d's own line ("do not continue until you sign off on a finished skill")
   is a standing instruction, and it would pass for any future change.
6. **The standard against V69.** Section 2's old material goes to `opened.design` (refused there); the skill and V69
   say `opened.writing`.
7. **The skill against its note.**
   - The first finding, "practice and checks aligned to the real task produce most of the gain (D1)" (43), overstates D1.
     D1 shows large effects on the aligned test and small ones beyond it.
   - D4 compares active classes with lectures, not doing with reading (45).
   - D7 is stated as a rule (48-49, 323-324) where the note marks it Supports and calls it a judgement call, and gate 4
     does not say so (56).
   - D4's **Decides:** makes "would they come back" a persistence signal "not evidence the lesson teaches", yet the
     owner's try passes only with `comeBack: true` (395; `triedPasses`).
   - D11 suggests a stand-in pass rest on "no unresolved shown defect rather than a claimed gain". `stand-in-review.md`
     46-47 requires that Gain names an ability, the part the skill calls "proof of nothing" (433).
8. **Seeded faults that prove less than their names.**
   - "a live lesson whose stand-in review carries a Disclosure" and "a review file that does not open with its verdict and
     its reviewer" inject the token `disclosed` or `unreadable`. No fault runs `reviewVerdict` on text.
   - Every note-mark fault injects marks. None runs `noteMarks` or `readLevel`.
   - "a goal screen longer than one screen" pads `goal`, never the printed screen.
   - The blanket fault copies words exactly.
   - No fault covers `collectCommittedDesigns`.
9. **Waivers.** One waiver ("keep going. just finish everything and don't wait on my read", 2026-10-11) sits on seven
   subjects. The blanket rule ignores waivers, and the skill does not say whether a waiver carries to a new subject.
10. **The worklist.** `docs/lesson-rebuild-todo.md` lines 31-32 still mark both paragraphs "signed off", quoting
    "finish these 2". Its first open item is not the next sign-off owed (88-89).

### E5. The two subjects through the gates, on paper

**Psychology** (in the app; both approvals null; pilot l1 passes its review).
- *Gate 0.* Eight asks: five carry an owner word and three are undecided; `opened.asks` is empty.
  - The skill demands each ask be kept by topics or dropped on the owner's word. `asked.mjs --kept` makes that
    possible today, since the 27 topics exist.
  - It also demands the list come from the sources. V69 does not check either.
  - The carried-over "On track" on `need-to-know-and-biases` should be replaced; nothing demands it.
- *Gate 1.* The restored ground (biases in yourself, defense mechanisms) needs evidence, because O8 was the finding that
  cut biases. The skill demands new research (209-211); V69 cannot. Possible.
- *Gate 2.* Psychology's screen fails the skill twice, but approval is still possible: `approve.mjs` allows it (2,409
  counted).
  - The printed screen is 4,325 characters; by line 261 that is the finding: the subject is too big or the list too
    wordy.
  - The drops list shows all eight asks even after `kept` is set (E4 item 1), so the owner is asked to keep things the
    topics already keep.
  - The test and the sentence were written for the old six parts, so the gate 2 rejection ("the parts do not add up")
    will bite at gate 4.
- *Gates 3 to 5.* Nothing in V69 stops the session rewriting the parts and blocks before the owner answers (tried). The
  skill forbids it; V69 does not.
  - Covering 27 topics probably means new parts. That changes the subject record's `parts` (V71), which is content, so
    it is held until both approvals are in and every topic and ask is covered. Then it is allowed.
  - The record review before the pilot (354-356) has no field.
- *Gate 6.* The l1 pilot's 2026-10-11 pass stays valid whatever l1 becomes (E4 item 2), so lessons past the pilot could
  open on a review of a lesson that no longer exists. The skill (391) intends a fresh review; V69 does not demand it.
- **Verdict:** possible as the skill stands, but two of V69's answers are wrong for this subject: the screen it lets
  through and the pilot pass it keeps.

**Geography** (not in the app; stopped at gate 2; approval null).
- *Gate 0.* Four asks, all with owner words and none kept. `where-places-are` carries the blanket line. Placing them by
  topics is possible (`world-first`, `flags` and `one-line` have topics of the same words).
- *Gate 1.* Done (G2 and G5 decide, both full).
- *Gate 2.* Approval is possible, but on a screen that misreports what is dropped.
  - The printed screen is 3,103 characters, over the bound.
  - After `kept` is set, all four asks still print as drops. The owner would read that the design drops "the world
    first" and "flags", which are its first and sixteenth topics.
  - `approve.mjs` accepts it: 2,413 counted.
- *Gate 3.* Refused until `approved.goal` (tried). The tap on a map with no names goes on `delivery` and must be built
  before the pilot. V69 sees only a string.
- *Gates 4 and 5.* V69 does not check topic coverage while the subject is not in the app, so a gap shows only when the
  first lesson is committed (as a hold). Possible.
- *Gate 6.* The pilot commit makes it a built subject. V69 then needs the whole record, both approvals, every ask and
  topic covered, and `opened` clean. A stand-in review needs the owner's waiver words: the skill does not say whether the
  2026-10-11 waiver carries over, and V69 accepts it.
- **Verdict:** possible, provided E4 item 1 is fixed before the screen is printed.

### E6. Closing verdict

What to fix, ranked:
1. Compute the gate 2 drops from `kept` (topics), not from parts, and fingerprint the drops with the screen.
2. Measure the printed screen, as `approve.mjs --show` prints it, against the 3,000-character bound.
3. Bind each `tried` entry to the lesson's fingerprint and `rev`: a changed lesson needs a new try or review.
4. For a subject in the app, refuse a change since the last commit to gates 3 to 5's fields while the earlier approval
   is missing.
5. Refuse deleting a design record, and compare every field of `asked`, plus `opened` and `tried`, with the committed
   record.
6. Put every file that can switch V69 off, and the research notes, under the commit-msg hook. Switch the hooks on for
   every clone, or run the tier where commits cannot skip it.
7. Read levels per source: refuse `full` for a decides finding whose Read line names an abstract or summary, and refuse
   a cited finding with no Read line. End a finding's span at the next heading.
8. Fix the records:
   - list gate 0's sources in all nine `opened.asks`;
   - replace Geography's blanket line and Psychology's carried-over "On track";
   - re-source the relayed words.
9. Check the Reviewer line's form and files against the reviewer's row. Re-run Psychology l1's and Singing l2's reviews.
10. Standard section 2: the writer's old material goes in `opened.writing`.
11. Restate D1, D4 and D7 as the note does. Make `comeBack` and the stand-in's Gain recorded signals, or mark both as
    judgement calls against D4 and D11.
12. Seeded faults that read real text: a review file with a Disclosure line, a mixed Read line, and an over-long printed
    screen.
13. Add a field for gate 5's independent record review. Say whether a waiver carries to another subject.
14. Fix the worklist: lines 31-32, and the next sign-off as its first open item.

## Part F. The third review (2026-10-12)

An independent review of e8fc74e ("the skill's second review answered"), by an agent that did not write it, against
part E's fourteen fixes (E6). Line numbers are `SKILL.md`'s at e8fc74e. `npm test` is green: 285 design reader checks,
48,520 lesson checks, 203 seeded faults. Every attack below was run on a scratch copy (`git archive HEAD`, its own
`git init`, `npm run hooks`), never on the real records.

What is better, briefly. The gate 2 screen is measured as printed, and its drops are fingerprinted. A built subject's
gates 3 to 5 no longer change without an approval (tried). A try carries the lesson's fingerprint. The record's own
review is a field. An ask's when, where and owner word are frozen, and `opened` only grows. The hook covers the whole
V69 harness. `comeBack` no longer passes a try. What is left: the session still writes every owner field, and four
fixes can be undone with the tools the fixes added. Two of the fixes changed records for a wrong reason.

### F1. E6's fourteen items

| # | E6 item | Status | Evidence |
|---|---|---|---|
| 1 | Drops computed from `kept`, fingerprinted | **Done** | `design-shape.mjs` 29 (`dropsToShow`), 33 (`goalScreen` carries the drops' words). It opened a new hole: see F4, item 1. |
| 2 | Measure the printed screen | **Done** | `goalProblems` and `approve.mjs` measure `screenText` (Psychology 2,909, Geography 2,532). |
| 3 | Bind each `tried` entry to the lesson | **Partly** | `triedPasses` compares `fp` (243). But the fingerprint is stamped by `tried.mjs`, not carried by the review. Attack (k): a rewritten Scams l3 was re-stamped against an old file and passed. |
| 4 | A built subject's gates 3 to 5 refused without approval | **Done** | `designSinceProblems` (rules-design 56-63). Tried: Psychology's practice and its parts were each refused. |
| 5 | Refuse a deleted record; compare `asked`, `opened`, `tried` with the commit | **Partly** | Done: an ask's words, when, where and owner word, and `opened` shrinking. Not done: (1) a deleted record is refused only while its folder survives (`collectCommittedDesigns` walks the working folders, designs.mjs 88-98). `git rm` of Geography's record removed the folder; that commit and the record recreated without `flags` were both green and committed. (2) `tried` and `approved` are not compared (attack h). |
| 6 | Hook on every file that can switch V69 off, and on the notes; hooks on in every clone | **Partly** | `tests/lessons/` and `package.json` are covered. The notes are not (attack i). The hooks are switched on only by `npm test` (`pretest`), so a clone that commits first has none. |
| 7 | Read levels per source; refuse a missing Read line; end a span at the next heading | **Partly** | The first clause and its weakest source set the level (designs.mjs 43-52). A missing Read line is caught only by `tests/design-pure.mjs` in `test:data`, not by V69 or the pre-commit tier (SC1's Read line deleted: V69 green). Spans still run to the next finding. A new defect: see F4, item 3. |
| 8 | Fix the records (opened.asks; the two carried-over words; the relayed words) | **Partly** | `opened.asks` is filled in all nine. Geography's blanket line, Psychology's "On track, record my words on Psychology" and the seven other relayed words (four on Psychology, three on Ideology) are all unchanged. The never-edit rule (`askedSinceProblems` 74) now forbids replacing them. |
| 9 | Check the Reviewer line's form and files; re-run Psychology l1 and Singing l2 | **Not done** | `REVIEWER_LINE` (designs.mjs 14) needs only a date. Psychology l1, the only passing review, says "what it opened is in its notes below". Neither review was re-run. |
| 10 | Standard section 2: `opened.writing` | **Done** | lesson-standard.md section 2, "Old material". |
| 11 | Restate D1, D4, D7; take `comeBack` and Gain out of the pass | **Partly** | D1 and D4 are restated (SKILL 43-47), and `comeBack` is recorded only. D7 is still a rule at 304 and 339-340, with no word that it is a judgement call. Gain is still a pass condition in `stand-in-review.md` 46 ("Gain names an ability"), against SKILL 400-401. |
| 12 | Seeded faults on real text | **Mostly** | `design-pure.mjs` runs the readers on the real notes, reviews and records. The fault "a design record deleted since the last commit" injects `committedDesigns`, so the reader's hole went unseen (F4, item 4). |
| 13 | A field for the record review; whether a waiver carries over | **Mostly** | `designReview` exists (172, 370-374), and waivers are per subject and lesson (87-88). The review is not bound to the record it read (attack j). |
| 14 | Fix the worklist | **Partly** | The first open item is Psychology's sign-off. Geography's line still calls "finish these 2" a sign-off. |

The commit says "each is closed". Four are done, two mostly done, seven partly and one not done.

### F2. B1 to B11, where the verdict changed

- **B5 (is the approval real?)**: Partial → **Pass** for the screen. The bound is the printed screen, and the drops
  are under the fingerprint. The holes left belong to B9 (what `kept` takes off the screen) and B11 (re-approval, h).
- **B6 (one document?)**: Pass → **Partial**. Three disagreements:
  - The standard's V69 row (9.2) is behind the code. Its fingerprint lists no drops, and it has no record-review
    hold, no try fingerprint and no refusal of a built subject's changes.
  - Section 11 has no dated entry for e8fc74e's rule changes, though its own last paragraph requires one.
  - `stand-in-review.md` 46 contradicts SKILL 400-401 on Gain.
- **B7 (blind)**: still **Partial**. `opened` only grows (done). `asks` still has no allow-list: Geography's lists a
  research note, "docs/research/knowing-where-places-are.md (the cloud session's plan)", as a source of the owner's
  asks. Math's engine paths in `opened.design` now hold Math's content for good: the list cannot shrink, and the skill
  gives no other exit (F4, item 8).
- **B9 (asks must-keep)**: still **Partial**, with one hole wider.
  - One-commit removal and rewording are fully closed.
  - The two-commit launder by deleting the record is open (5 above).
  - `kept`, which the session writes, now decides what the owner is shown (F4, item 1).
- **B10 (sign-off before any plan)**: still **Partial**. A built subject's gates 3 to 5 are now held (pass). But its
  gate 1 cannot be recorded before gate 3 is approved (F4, item 9), and the ask-to-topic mapping is not on the screen.
- **B11**: still **Fail** (F3).

B1 to B4 and B8 are as part E had them. B8's list changed: closed are E3 items 1, 7, 8, 9, 13 and 15. Newly unchecked:
- SKILL 85-86, an owner word "never edited": only asks are compared;
- SKILL 198, "topics found for it on their word": `kept` needs no word;
- 370-374, the record review "reads the record": it is bound to nothing;
- `stand-in-review.md` 52, "opened: <the files>": unparsed.

### F3. The attacks

- **(a) Approve with made-up words.** `approve.mjs geography goal --words "yes this is fine go ahead"` was green and
  committed. *Nothing stopped it.* Named honestly (SKILL 101).
- **(b) Remove an ask.** *Stopped* in one commit ("removed since the last commit"). *Not stopped* in two:
  - `git rm docs/subjects/geography/design.md` also removes the folder, so `collectCommittedDesigns` never sees the
    committed record. Green, committed.
  - The record recreated without `flags`: green, committed.
  - Deleting `scams/design.md`, whose `reviews/` folder remains, is refused.

  Not named: the skill says a deleted record is refused (98).
- **(c) Reword an ask.** *Stopped* for its words, when and where, and for an owner word already recorded. *Not stopped:*
  Math's undecided `primes-factors` dropped on invented words. That is (a)'s gap, and it is named.
- **(d) Make a failing pilot pass.** Faked approvals of the goal and the practice, a faked record review (j), and
  `tried.mjs scams l3 --owner --words "fine" ... --passed yes`. Scams l3 (review: fails) was then marked `live`: green,
  committed. *Nothing stopped it.* Named only as "a quote that was never said".
- **(e) Write gate 3 early.** *Stopped* without an approval: Geography's gate 3 is refused, and now so are
  Psychology's practice and parts (new). *Not stopped* once (a) fakes the approval.
- **(f) Commit a red tier.** *Stopped* by pre-commit. Not stopped by `--no-verify`, or by `git config core.hooksPath
  /dev/null` with no commit at all. After one bypassed commit, HEAD carries the removal, so every later run is green.
  The bypass is named (101); the second route and the permanence are not.
- **(g) Switch V69 off.** `rules-index.mjs` and `negative-controls.mjs` are now covered: with no owner line, the commit
  was refused. With `Owner's word: "sure" (chat, 2026-10-12)` it committed, and the tier was green on 140 controls
  where there had been 203. Nothing pins the count. Named honestly (102-103).
- **(h) Re-fingerprint a changed screen.** Cutting one of Geography's topics after the faked approval was refused. Three
  ways through were green:
  - recomputing `approved.goal.fp` by hand: green. *Only the fingerprint computation stood in the way.*
  - re-running `approve.mjs` with the old words and where: green. The old approval is silently bound to a new screen.
  - editing `approved.goal.words`, and Scams' `tried.l3` (words, date, confused): green.

  The skill says the opposite (85-86: "a word once recorded is never edited (the validator compares it with the last
  commit ...)"). *Not named; the text claims a check that does not exist.*
- **(i) Promote a finding without reading it.** In `knowing-where-places-are.md`, G4's Read line went from "abstract and
  the standard summaries" to "full text, pp. 422-437", and **Supports** to **Decides:**. Geography's record then claims
  G4 as decides, full, with a choice. Green, committed with no owner line. The notes are outside the hook, and nothing
  compares a note with its last commit. *Not named.*
- **(j) Write your own record review.** A `reviews/design.md` reading "Verdict: passes" and "Reviewer: ..., 2026-10-12",
  with `designReview` pointed at it, lifted Scams' hold (and was accepted on Psychology). After the blocks were then
  gutted ("Read four screens ...") and `form` became "Ten items, 8 of 10", the review still passed: it is bound to no
  version of the record. *Not named.*
- **(k) (new) Re-stamp a rewritten lesson.** Scams l3 was rewritten, then `tried.mjs scams l3 --stand-in
  reviews/design.md --words "keep going"` was run. Green: the tool stamps the lesson as it is now, and it accepts any
  file under `reviews/` that passes, here the record review. *Not named:* the skill says a rewritten lesson is tried
  again (97, 401-402).

### F4. What the fixes broke or missed

1. **`kept`, written by the session, now takes an ask off the owner's screen and lifts its hold.**
   - `asked.mjs math primes-factors --kept "Ballpark and check"` was run, and the same for `counting-and-chance` and
     `right-triangles`. All three of Math's undecided asks vanished from the printed screen, and V69 stayed green.
   - The skill contradicts itself: 197 shows an item "while it has no topics and no word from the owner", while
     198-199 settle an item only "on their word".
   - This is the Psychology biases failure again: an ask placed under a loosely related topic without the owner ever
     seeing the mapping.
2. **A try's fingerprint is the tool's, not the review's** (attack k). `tried.mjs` takes any path, and no file says
   which version of the lesson it reviewed.
3. **The read-level parser reads a section named "Abstract" as an abstract read.** "full text, author copy: Abstract,
   Method ..." parses as `abstract`. On that, e8fc74e changed two records:
   - Psychology's **O8** went from decides/full (part D's best-kept mark) to supports/abstract;
   - Math's **M4** went from decides/full to abstract.

   R3 and R8 in `review-after-lessons.md`, and the skill's own D5 and D6, parse as abstract too, though each says full
   text. The weakest-source rule needs a level stated per source, not inferred from words.
4. **The deleted-record refusal works only while the folder survives**, and its seeded fault never runs the reader.
5. **The never-edit rule has no superseding.** "The record keeps the one that stands" (87) cannot happen, because a
   recorded owner word cannot be replaced. The carried-over and relayed words are therefore permanent, and E6 item 8
   cannot be finished.
6. **Approvals and tries are editable**, against SKILL 85-86 (attack h). `approve.mjs` re-binds old words to a new
   screen.
7. **The record review proves nothing about the record** (attack j). It is not fingerprinted, and its Reviewer line is
   unchecked.
8. **Math is held forever.** Its `opened.design` lists `public/app/lessons/ask.js` and `drill.js`. The list may not
   shrink, and the hold lasts "until the subject is redesigned" (75; rules-design 89), but nothing records a redesign.
9. **A built subject's gate 1 is frozen until gate 3 is approved.** A new principle is refused as "cited by no lesson
   block", and citing it changes `lessons`, which needs `approved.practice` (both tried on Psychology). The skill's
   order is gate 1, then 2, then 3. Psychology needs new research before its practice can rest on it.
10. **Notes are outside the hook, and a note's Read line is checked only by `test:data`** (attack i; SC1's Read line
    deleted, the lesson tier green).
11. **`stand-in-review.md` 46 still makes Gain a pass condition**; SKILL 400-401 and 455 say it is not.
12. **The standard's V69 row and revision log are behind the code** (B6).
13. **D7 is still a rule** at 304 and 339-340.
14. **The commit message overclaims**: "each is closed", while item 9 was not touched and items 5 to 8 are partial.

### F5. The two subjects, on paper, from where they stand

**Psychology** (in the app; approvals null; 27 topics, none in a part; no `designReview`; l1 passes its 2026-10-11
review, and the fingerprint stamped in e8fc74e is fair, since only comments changed since).
- *Gate 0.* `need-to-know-and-biases` is kept by all 27 topics, under the carried-over "On track" words, which can no
  longer be replaced (F4, 5). Four owner-keep asks (biases, narcissism-spectrum, look-alikes, defense-mechanisms) need
  `kept` topics. Three undecided asks print as drops. *Possible*, but the session could also map those three away
  (F4, 1).
- *Gate 1.* New ground needs research (biases in yourself, defense mechanisms, keeping yourself in check), and O8
  needs restoring (F4, 3). *Not possible in order:* V69 refuses a new principle until a block cites it, and a block
  cannot change before `approved.practice` (F4, 9). The research can be written in the notes, but not in the record.
- *Gate 2.* The screen prints at 2,909 characters with three drops, so approval is possible. One more topic or drop
  takes it over 3,000.
- *Gate 3.* The practice may change once `approved.goal` is on. Possible.
- *Gates 4 and 5.* Possible after `approved.practice`, which comes after the practice it rests on was written without
  its new principles in the record. Covering 27 topics changes the subject record's `parts` (V71), which is content.
  It is held until both approvals, full coverage and a passing `designReview` are in, and that review can be written by
  the session (j).
- *Gate 6.* If `l1`'s file is kept, its old pass carries over to whatever new block it gets, because `tried` binds the
  lesson and not the block. The skill (446-447) asks a kept lesson for its review; V69 accepts the old one.
- **Verdict:** possible only out of order (gate 1 after gate 3), with the O8 demotion to undo first.

**Geography** (not in the app; stopped at gate 2; approval null; screen 2,532 characters, no drops).
- *Gate 0.* `where-places-are` is kept by all 20 topics under the blanket line, now permanent. `world-first`, `flags`
  and `one-line` carry the owner's keep and wait for `kept`. Possible.
- *Gate 2.* Approval is possible, and the screen is honest: nothing is shown as dropped, and nothing is.
- *Gate 3.* Refused until `approved.goal`, then possible. The blank-map tap is a `delivery` string, and V69 sees no
  more than that.
- *Gates 4 and 5.* No coverage check applies until the pilot is committed. Then V69 needs every topic and kept ask in a
  part, both approvals, and a passing `designReview`. Possible.
- *Gate 6.* The pilot commit makes it a built subject, and the whole record applies. A stand-in needs a waiver quoted
  with its date (87-88). Possible.
- **Verdict:** possible as the skill stands. One caveat: the record can be deleted and recreated smaller at any point
  before the pilot (attack b).

### F6. Closing verdict

What to fix, ranked:
1. Put each ask's mapping on the gate 2 screen (ask → its topics, under the fingerprint), or require the owner's word
   for `kept`. Resolve SKILL 197 against 198-199.
2. Make a review carry the fingerprint of what it reviewed: the lesson's in `reviews/<lesson>.md`, the record's
   (gates 2 to 5) in `reviews/design.md`. V69 compares them, and `tried.mjs` takes only `reviews/<lesson>.md`.
3. State the read level per source on the Read line instead of inferring it. A section named Abstract is not an
   abstract read. Restore O8 and M4, and check R3, R8, D5 and D6.
4. Read the committed records from `git ls-tree HEAD docs/subjects/`, not from the working folders. Make the deletion
   fault run the reader.
5. Compare `approved` and `tried` with the last commit as asks are compared. Refuse re-approval with the same words
   on a changed screen. Add a superseding entry (a list of words, the latest stands), so a carried-over word can be
   replaced.
6. Let a built subject's principles change before the approvals. Hold the "cited by a block" check until gate 5 is
   rewritten.
7. Compare each note's marks and Read lines with the last commit, or put `docs/research/` under the commit-msg hook.
   Run `design-pure.mjs` in pre-commit.
8. Give Math's held content an exit (a dated blind redesign that starts a new `opened.design`), or say it cannot
   change.
9. Parse the Reviewer line's `opened:` against the reviewer's row. Re-run Psychology l1's review.
10. `stand-in-review.md` 46: Gain out of the pass condition.
11. The standard: the V69 row brought up to the code, and dated entries for e8fc74e's rule changes.
12. D7 as a judgement call at SKILL 304 and 339-340.
13. An allow-list for `opened.asks`.
14. The worklist's Geography line.

For the owner:
- Replacement words for Geography's "finish these 2", Psychology's "On track, record my words on Psychology", and the
  seven other relayed words, once fix 5 lets a word be superseded.
- Whether the floor named at SKILL 100-104 is acceptable: quotes the session can invent, hook bypasses, and a validator
  edited with its controls, which no code can close. If it is, the defence is reading the owner fields and the commit
  log.
- Math's three, Singing's three and Wealth's four undecided asks still wait for their word.

## Part G. The fourth review (2026-10-12)

An independent review of d9dcf4b ("the skill's third review answered"), by an agent that did not write it, against
part F's fourteen fixes (F6). Line numbers are `SKILL.md`'s at d9dcf4b. `npm test` is green: 292 design reader checks,
48,520 lesson checks, 213 seeded faults. Every attack below was run on a scratch copy (`git archive HEAD`, its own
`git init`, `npm run hooks`), never on the real records.

What is better, briefly:
- Every ask is on the gate 2 screen with where it is taught, and the approval binds that placement.
- A review names the fingerprint of what it read, and `tried.mjs` refuses a review of another version or `reviews/design.md`.
- Read levels are stated, never inferred. O8 and M4 are decides/full again, and on every finding of every note the
  parser now agrees with the finding's own Read line.
- V69 lists committed records from git, so `git rm` of a record is refused.
- A built subject's gate 1 can change before the practice is approved.
- Gain is out of the stand-in's pass rule.

What is left falls in three groups:
- The pre-commit hook checks the working tree, not the commit, so anything V69 refuses can be committed with no bypass flag.
- "Never edited" is not what the code does: a changed word passes as "a later word".
- The research notes are not under the commit-message hook, though the skill and the commit say they are.

### G1. F6's fourteen items

| # | F6 item | Status | Evidence |
|---|---|---|---|
| 1 | Each ask's mapping on the screen, under the fingerprint; resolve 197 against 198-199 | **Mostly** | `asksToShow` and `goalScreen` (design-shape 41-42); attack (m) is refused. The text was left behind. 202-204 still says an item "is shown as dropped ... while it has no topics and no word from the owner" and is kept by "topics found for it on their word". 289-290 says "the owner's own word on an ask does not" re-open the approval, yet a `--drop` of a kept ask clears `kept` and does (tried). `approve.mjs` 2-3 still describes "What you asked for that this design drops". |
| 2 | A review carries the fingerprint of what it reviewed | **Done** | `REVIEWED_LINE`, `triedPasses`, `designReviewed`, `tried.mjs` 42-48; (n) is refused. One caveat: the seven `Reviewed:` lines in the 2026-10-11 reviews were written by the committing session on 2026-10-12, and no file says so (G4, item 6). |
| 3 | Read level stated per source; O8 and M4 restored | **Done** | `readLevel` (designs.mjs 44-48). O8 and M4 are D/full. The real notes have no unstated level on a finding's own line. Two gaps remain: a span still runs past headings, and a missing Read line is accepted by V69 (item 7). |
| 4 | Committed records from git; the deletion fault runs the reader | **Mostly** | `collectCommittedDesigns` uses `git ls-tree HEAD`, and `git rm` of Geography is refused (tried). The seeded fault still injects `committedDesigns`. The hook lets the deletion in another way: attack (b). |
| 5 | Compare approvals and tries; refuse re-approval in the same words; let a word be superseded | **Partly** | `ownerSinceProblems` and `laterWord` (design-shape 90, 98-112). (1) Any different words with a date no earlier count as "a later word". An approval's words were edited in place and committed. Psychology's `biases` ask had the owner's "restore all ..." keep rewritten in place to an invented "drop the biases", with `dropped: true`, and V69 stayed green. (2) The same-words refusal compares only with the approval now on the record. Clearing it in one commit and re-approving with the old words in the next bound the old words to a changed screen (tried). (3) The seeded fault "an approval edited in place" edits `where`, not the words. |
| 6 | A built subject's principles change before the approvals | **Done** | `blockProblems` 224-225; `designSinceProblems` does not cover gate 1. |
| 7 | Notes under the hook, or compared with the commit; `design-pure.mjs` in pre-commit | **Not done** | `.githooks/commit-msg` 6 has no `docs/research/`, and d9dcf4b did not touch `.githooks/`. A note's G4 was promoted to decides/full and committed with no owner line (attack p). Pre-commit runs `test:lessons` only. V69 skips a finding with no Read line (`mark.read && ...`, design-shape 128): SC3's Read line was deleted, the record claimed decides/full, and the commit went in. Only `test:data` saw it. Both the commit message ("7. The research notes are under the commit-message hook") and SKILL 101-103 claim what is not so. |
| 8 | Math's held content gets an exit | **Partly** | `designedOn` exists, and a later date resets `opened`. The redesign asks for nothing else (attack o). |
| 9 | Parse the Reviewer line's `opened:`; re-run Psychology l1 | **Partly** | `REVIEWER_LINE` needs "(model)" and a date; `opened:` is not parsed. Psychology l1's line still says "what it opened is in its notes below". Both re-reviews are open on the worklist (38 and 65). |
| 10 | Gain out of the pass | **Done** | `stand-in-review.md` 46-47. |
| 11 | The standard: the V69 row; dated entries | **Partly** | The V69 row is updated, though it still says "every principle is cited by a block" where the code waits for the practice approval. Section 11 has no dated entry for the rule changes of e8fc74e or d9dcf4b, against its own last paragraph. |
| 12 | D7 as a judgement call | **Partly** | Gate 4 (350) says it is one. Gate 3 step 1 (314) still states it as a rule. |
| 13 | An allow-list for `opened.asks` | **Partly** | `ASKS_OK` (design-shape 138) admits any `docs/` path and any `x/y.md`. Geography's "docs/research/knowing-where-places-are.md (the cloud session's plan)" still passes as a source of the owner's asks. |
| 14 | The worklist's Geography line | **Done** | `docs/lesson-rebuild-todo.md` 32. |

Five are done, two mostly done, six partly done and one not done. The commit message says what it does about each, and
item 7's claim is false.

### G2. The attacks

- **(a) Approve with made-up words.** `approve.mjs geography goal --words "yes this is fine go ahead"`: green, and
  committed. Nothing stopped it. The skill names this gap (103-104).
- **(b) Remove an ask by deleting the record.** *Stopped* in a plain commit: `git rm` of the record is refused.
  *Not stopped* with `--no-verify`, which the skill names. *Not stopped with no flag at all*:
  - `git rm --cached docs/subjects/geography/design.md` was committed. The hook validated the working tree, where the
    file still stood. HEAD no longer had the record.
  - The record was then edited without `world-first`, re-added, and committed green.
  - The same route works for any refused change. Stage the change, restore the working file, commit. Math's undecided
    `primes-factors` was removed from HEAD this way, and the tree was green afterwards.

  *Not named:* the skill names only `--no-verify`.
- **(c) Reword an ask.** *Stopped* for its words, when and where. *Not stopped:* an owner word already recorded can be
  rewritten in place (G1, item 5). The invented words are a named gap. "Never edited" is a claim the code does not keep,
  and that is not named.
- **(d) Make a failing pilot pass.** Five steps, all on Scams l3 (review: fails):
  1. fake approvals of the goal and the practice;
  2. a self-written `reviews/design.md` stamped with `fp.mjs scams`;
  3. `tried.mjs scams l3 --owner --words "fine" --passed yes`;
  4. `status: "live"`;
  5. `tried.mjs` re-run so the try carries the new fingerprint.

  Green, and committed. Named, as invented quotes and self-written reviews (103-105).
- **(e) Write gate 3 early.** *Stopped* on Geography with no approval. *Not stopped* once (a) fakes it. Named through (a).
- **(f) Commit a red tier.** *Stopped* by pre-commit. Three ways round it:
  - `--no-verify`: named.
  - `core.hooksPath` pointed elsewhere: not named, though `npm test` turns the hooks back on.
  - The index route of (b): not named, and it needs no flag.

  After one such commit, HEAD is the new baseline. That is not named either.
- **(g) Switch V69 off.** The commit is refused with no owner line. With `Owner's word: "sure" (chat, 2026-10-12)`, the
  commit went in after `RULES_DESIGN` was taken out of `rules-index.mjs` and the V69 controls were filtered out. The
  tier stayed green on 140 controls where there had been 213, and nothing pins the count. Named (105-106).
- **(h) Re-fingerprint a changed screen.**
  - Recomputing `fp` by hand with the same words: *stopped* (`laterWord`).
  - Editing `approved.goal.words` in place: *green*.
  - Clearing the approval in one commit and re-running `approve.mjs` with the old words in the next, on a screen with a
    topic cut: *green*.

  *Not named:* 86-87 and 99-100 say the opposite.
- **(i) Promote a finding without reading it.** The same as (p).
- **(j) Write your own record review.** A self-written `reviews/design.md` lifts the hold (d). After the blocks were
  gutted and `form` became "Ten items, 8 of 10", the review stopped counting, and the hold came back (*stopped*, new).
  Pasting `fp.mjs scams` into its `Reviewed:` line lifted the hold again. Named (104).
- **(k) Re-stamp a rewritten lesson.** `--stand-in reviews/design.md` is refused (*stopped*, new). The old
  `reviews/l1.md` is refused (*stopped*, new). A hand-edited entry `fp` is refused by V69. Editing the review's
  `Reviewed:` line passes. Named.
- **(l) Drop an ask on the owner's word, then change a lesson.** On Wealth, with faked approvals and record review:
  - the four undecided asks were dropped with `asked.mjs --drop`;
  - the pilot was retitled and the lock regenerated.

  *Allowed*, green and committed, as it should be. One wrinkle: dropping an ask that was *kept* re-opens the approval,
  against 289-290 (G1, item 1).
- **(m) Re-place an ask after the approval.** `asked.mjs wealth before-you-change --kept "Your biggest single bet"`:
  *refused* ("the screen the owner approved ... changed"). Un-dropping a dropped ask by placing it: *refused*. Right.
- **(n) Rewrite a reviewed lesson and re-run `tried.mjs` with the old review.** Psychology l1 was retitled. `tried.mjs`
  refused: "reviews/l1.md reviewed sha256:cb71...; the lesson is now sha256:79f5...". *Stopped.* Only an edit of the
  review file gets past it, which is named.
- **(o) A later `designedOn` with a shrunk `opened`.** On Math, with faked approvals, drops and record review, a
  lesson change was held by the engine paths in `opened.design`. Three edits lifted the hold:
  - `designedOn` moved to `2026-10-13`;
  - the two paths deleted;
  - `opened.asks` replaced by `["chat"]`.

  Green, and committed. Nothing else is demanded:
  - The 2026-10-12 record review still counts, because `designFingerprint` leaves out `opened` and `designedOn`, and
    a review dated before the redesign is accepted.
  - The approvals stand.
  - The History prose (385-386) is unchecked.
  - `opened.asks` resets too, although gate 0 is not part of a redesign.

  It should demand more: a record review dated on or after `designedOn`, and `opened.asks` left alone. *Not named.*
- **(p) A note's Read line from `summary:` (here `abstract:`) to `full:`, then claimed.** G4 in
  `knowing-where-places-are.md` went to "*Read: full: full text, pp. 422-437.*" and **Decides:**. Geography's record then
  claimed G4 decides, full, with a choice. V69 and `design-pure.mjs` were green, and the commit went in with no owner
  line. *What stops it: nothing.* Not reading is named (104-105). But the skill (101-103) and the commit say the notes
  are under the commit-message hook, and that hook is the one thing that would have asked. *Named wrongly.*

### G3. The two screens the owner reads tomorrow

**Psychology** (`approve.mjs psychology goal --show`; 4,846 characters, 154 under the bound):
- *True to its record:* yes. It prints the record's goal, 27 topics, sentence, test and all eight asks with their topics,
  and the fingerprint covers what is printed.
- *Readable:* poorly.
  - The first ask's line repeats all 27 topics (about 900 characters), and the biases ask repeats five.
  - At about 760 words it is several phone screens.
  - The sentence prints as "After this subject you can: When someone reaches for ..., check it ...", which is not the
    skill's "you can ___ when ___".
- *A true picture:* no.
  - The paragraph promises spotting biases "in other people's reasoning and in your own", the defense mechanisms, and
    keeping your emotions in check.
  - The sentence and the test cover only the labels: ten accounts, judged fits / ordinary / can't tell / control, then
    a next step.
  - About a third of the topics (cognitive dissonance to defense mechanisms, and "keeping yourself in check") are tested
    by nothing.
  - So gate 4's rule cannot be met for those topics: each part's check must be "a small version of gate 2's test".
  - Gate 2 has no rejection for a test narrower than the topics, so the screen would be approved as it stands.
  - The sentence and the test should be rewritten before the screen goes out.

**Geography** (4,054 characters):
- *True to its record:* yes.
- *Readable:* fair. The first ask's line repeats all 20 topics (about 1,000 characters). The paragraph's "It starts with
  the world, then ...; a country comes as its name, its place and its flag" says how the lessons run, which gate 2
  rejects. It is there because those were the owner's three asks: tolerable.
- *A true picture:* yes, with one gap. The test covers placing, naming, unseen places and distance. Flags, a listed
  topic, are not tested.

### G4. What the fixes broke or missed

1. **The pre-commit hook tests the working tree, not the commit** (attacks b and f). Any refusal V69 makes, a record
   deletion or an ask removed among them, is committed by staging it while the working file stays as it was. No flag is
   needed. Not named.
2. **"Never edited" is untrue as built.** `laterWord` accepts any different words dated no earlier, so an approval, an
   owner word on an ask, or an owner's try can be rewritten in place. An edit cannot be told apart from a superseding
   word, and the record keeps no trace of the old word. 86-87 and 99-100, and the standard's V69 row, claim otherwise.
3. **The same-words refusal is beaten in two commits** (clear, then re-approve).
4. **The notes are outside the commit-msg hook**, and a finding with no Read line constrains nothing in V69 (G1, item 7).
   The skill and the commit claim the hook covers the notes.
5. **A redesign demands nothing beyond a date** (attack o).
6. **The `Reviewed:` lines in the seven 2026-10-11 reviews were added by the committing session**, not by the reviewers.
   Nothing in those files says so. Psychology l1's pass now rests on a binding the reviewer never wrote: the same pattern
   as the four Reviewer lines part E named.
7. **Gate 2 does not reject a test narrower than the topics.** Psychology's screen has exactly this (G3), and gate 4's
   "a smaller gate 2 test" then cannot be met.
8. **The screen bound moved from 3,000 to 5,000 characters**, and its comment (design-shape 7) justifies it by the
   subject that needed it ("a subject with eight asks and 27 topics sits near it"). F's line 261 said a longer screen
   "is the finding". About 1,000 characters of each screen are repeated topic lists.
9. **Text left behind:** SKILL 202-204, 289-290 and 314 (G1, items 1 and 12); the header of `approve.mjs`; the
   standard's V69 row on cited principles; and section 11 with no entries.
10. **The notes against the skill.** Scams' SC3 is marked **Decides:** in its note on an abstract read, against gate 1
    step 3. The record marks it supports, so no record overclaims.
11. **Seeded faults that prove less than their names:**
    - "an approval edited in place" edits `where` only;
    - "a design record deleted since the last commit" still injects `committedDesigns`;
    - nothing pins the control count (213).

### G5. The two subjects, on paper, from where they stand

**Psychology** (in the app; approvals null; 27 topics, none in a part; no `designReview`; l1 passes on a back-filled
`Reviewed:` line).
- *Gate 0.* All eight asks are placed by topics and shown with their placement. Five owner words are relayed or carried
  over, and each can now be replaced by a later word. *Possible.*
- *Gate 1.* New principles can be added before the practice approval: blocks are not required to cite them until then,
  and a built subject's gate 1 is not frozen. The research still has to be written first: biases in yourself, emotion
  regulation, defense mechanisms. *Possible in order* (F4, item 9 is fixed).
- *Gate 2.* The screen fits by 154 characters, and approval is possible. But the test leaves about a third of the
  topics untested (G3), and nothing in V69 or in the gate's rejections catches it.
  - Rewriting the test to cover them adds characters. Each new topic costs about double, because the first ask repeats
    the whole list. That pushes the screen over 5,000.
  - So the screen should first show "every topic" for an ask kept by the whole list.
- *Gates 3 to 5.* Possible in order. Covering 27 topics changes the subject record's `parts` (V71). That is held until
  both approvals, full coverage and a passing `designReview` are in.
- *Gate 6.* l1's pass carries over only while l1's file is unchanged. A new part id forces a change, and with it a
  re-review, which is on the worklist (38).
- **Verdict:** possible in order. The gate 2 screen should not go out until the test covers what the paragraph and the
  topics promise.

**Geography** (not in the app; stopped at gate 2; approval null; screen 4,054 characters).
- *Gate 0.* All four asks are placed. The blanket "finish these 2" on `where-places-are` can now be replaced by a later
  word. `opened.asks` names a research note as the source of an ask. *Possible.*
- *Gate 2.* Approval is possible, and the screen is honest. Flags are not in the test.
- *Gate 3.* Refused until `approved.goal`, then possible. The blank-map tap is a `delivery` string.
- *Gates 4 and 5.* No coverage check applies until the pilot is committed. Then the whole record applies, with a passing
  `designReview`.
- *Gate 6.* Possible, with a waiver quoted with its date.
- **Verdict:** possible as the skill stands. Like every record, it can be laundered through an index-only commit (G4,
  item 1).

### G6. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Run the pre-commit tier on the staged tree (export the index, for example `git checkout-index -a --prefix=<tmp>/`,
   and validate there against HEAD), or name the gap in the skill.
2. Put `docs/research/` under the commit-msg hook as the skill already says. Make V69 read a missing Read line as
   summary. Run `design-pure.mjs` in pre-commit.
3. Make owner words append-only: each owner field keeps its entries, and the committed entries must stay a prefix. Then
   "never edited" is true, superseding still works, and re-approval checks the same words against the whole history.
4. Make a redesign carry a record review dated on or after `designedOn`, and keep `opened.asks` out of the reset.
5. Gate 2: reject a test that does not exercise every topic (or a topic no part of the test reaches). Rewrite
   Psychology's sentence and test before its screen goes out.
6. Print "every topic" for an ask kept by the whole list.
7. Bring the text in line with the code: SKILL 202-204, 289-290 and 314; the head of `approve.mjs`; the standard's V69
   row; section 11's entries for e8fc74e and d9dcf4b.
8. Parse `opened:` on the Reviewer line. Re-run Psychology l1's and Singing l2's reviews. Say in the seven reviews that
   their `Reviewed:` line was added on 2026-10-12 by the session.
9. Narrow `ASKS_OK` to owner material (no `docs/research/`), and fix Geography's `opened.asks`.
10. Scams' SC3: mark it Supports in its note.
11. Seeded faults: an approval whose words are edited in place; a deletion that runs the reader; pin the control count.

For the owner:
- Is a 4,846-character screen (about 760 words, several phone screens) "one screen"? The bound was raised from 3,000 to
  fit Psychology.
- Psychology: should the test also test the biases, the defense mechanisms and keeping yourself in check, or should
  those topics leave the subject?
- Replacement words for "finish these 2", for "On track, record my words on Psychology", and for the seven relayed words.
- The floor at SKILL 103-108: invented quotes, self-written reviews, hook bypasses, and a validator edited together with
  its controls. Is that acceptable, given that the defence is your reading of the owner fields and the commit log?
- Math's three, Singing's three and Wealth's four undecided asks still wait for your word.

## Part H. The fifth review (2026-10-12)

An independent review of e298e1e ("the skill's fourth review answered"), by an agent that did not write it, against
part G's eleven fixes (G6). Line numbers are `SKILL.md`'s at e298e1e. Every attack was run on a scratch copy
(`git archive HEAD`, its own `git init`, `npm run hooks`), never on the real records.

**`npm test` is red at HEAD.** `test:data` and `test:audio` pass (295 design reader checks), then
`validate-lessons` fails 1 of 48,520 checks: "V80 psychology: the subject's end result is not the last approved
(committed) design record's end result". The commit passed its own pre-commit hook because the hook compared it with
d9dcf4b, where the committed sentence was still the old one. Once e298e1e became HEAD, the committed sentence is the new,
unapproved one. The hook now refuses **every** commit in the repository, a one-line change to `docs/HANDOFF.md`
included (tried on the scratch copy). To run the attacks below on a green base, the scratch copy's V80 was patched to
check the sentence only once the goal is approved, and committed with `--no-verify` as the base. The 223 seeded faults
stayed green with that patch, so no control pins what V80 does while an approval waits.

What is better, briefly:
- The pre-commit hook validates the staged tree against HEAD. Staging a change while restoring the working file, a
  partial commit and `commit -a` are all refused.
- Owner entries can no longer be edited in place or taken away: approvals, the approval history, tries and owner words
  on an ask.
- `docs/research/` is under the commit-message hook. A finding with no Read line reads as summary.
- A redesign keeps `opened.asks` and needs a record review dated on or after it.
- An ask covered by the whole list prints "taught under every topic", and both screens are shorter for it.

What is left falls in four groups:
- V80 has a moving baseline, and V80 and V69 can each demand what the other refuses (H3, item 1).
- An ask the owner said to keep can be dropped by flipping one field, with no new word, and an approval stands over it.
- Two of the new checks read a date or a word from the wrong place: the record review's date from the record, and
  "the same words" from the standing approval only.
- The new gate 2 rule (the test reaches every group of topics) is checked three gates late. Both screens break it.

### H1. G6's eleven items

| # | G6 item | Status | Evidence |
|---|---|---|---|
| 1 | Pre-commit on the staged tree | **Done** | `.githooks/pre-commit` exports the index (`checkout-index`, which honours `GIT_INDEX_FILE`) and runs the tier there with `GIT_DIR` and `GIT_WORK_TREE` set. `git rm --cached`, the staged-copy route, a partial commit and `commit -a` were all refused (attacks b and f). The hooks are still client-side (H3, item 5). |
| 2 | Notes under commit-msg; missing Read line is summary; `design-pure` in pre-commit | **Done** | `.githooks/commit-msg` 6 lists `docs/research/`. `readLevel` returns summary with no line (designs.mjs 44-47). With SC3's Read line deleted and the record claiming full, V69 refuses. Pre-commit runs `design-pure.mjs`. |
| 3 | Owner words append-only | **Partly** | Refused: an in-place edit (c), a replacement without `previous` (r), an approval history that loses or changes an entry (s). Not refused: (1) `dropped` flipped on an ask whose owner word says keep (H3, item 2); (2) V69's same-words check compares with the standing approval only (design-shape 115), so a hand re-approval after a clearing commit reuses old words (q); (3) an invented entry appended to `approved.history` (s); (4) two replacements in one commit are refused, a false refusal (H3, item 6). |
| 4 | A redesign needs its own record review; `opened.asks` never resets | **Partly** | `opened.asks` is kept (design-shape 177, control "a redesign that shrank opened.asks"). The review's date is `designReview.date`, a field of the record, never the review file's own date (`designReviewed`, design-shape 269-270). Moving that one field lifted the hold over a review written before the redesign (t). |
| 5 | The test reaches every topic group; Psychology rewritten; V80 | **Partly, and it broke the tree** | SKILL 279-281 adds the rule. "Reject when" (298-301) does not have it, and only the gate 5 record review checks it, after the owner has approved the screen. Psychology's new test still misses the defense mechanisms, and Geography's misses flags (H4). V80 (rules-shape 470-477) is red at HEAD (above), and it locks once the goal is approved (H3, item 1). |
| 6 | "Every topic" on the screen | **Done** | `screenText` (design-shape 48); both screens print it. |
| 7 | Text in line with the code | **Partly** | Done: the gate 0 line (201), `approve.mjs`'s head, the standard's V69 row and a section 11 entry. Left: SKILL 205-208 ("shown as dropped", "topics found for it on their word"); 294-295 ("the owner's own word on an ask does not" reopen the approval, yet `asked.mjs --drop` of a kept ask clears `kept` and does, tried); 317-319 (D7 as a rule); 420 ("overwrites"); `stand-in-review.md` 4 and its last line ("replaces the file and the entry"; the code keeps `previous`). The standard's section 2 still says V80 mirrors the design record. Its V69 row still says "every principle is cited by a block" and "the same words again are refused". |
| 8 | `opened:` parsed; the seven reviews say so; two re-runs | **Mostly** | `REVIEWER_LINE` needs the token `opened:` and a parenthetical. Any parenthetical passes: "(did not build the lesson)" stands for the model in Scams l3 and Ideology l2. The re-runs are done (H5). The note added to five reviews says "the Reviewed line above was added" by the session, but the session also rewrote the reviewers' own Reviewer lines: "what it opened is in its notes below" became "opened: the learner view and the lesson files". In Scams l3 and Ideology l2 the text was spliced mid-sentence ("realMoment,; opened: ..."). Wealth l2's own notes say it read the record's JSON, which the new line does not say. All five fail, so no verdict changes. |
| 9 | Narrow `ASKS_OK`; fix Geography's `opened.asks` | **Partly** | `ASKS_OK` (design-shape 152) still admits any `docs/` path, `docs/research/` included. Geography keeps "docs/research/knowing-where-places-are.md (the cloud session's plan)" as a gate 0 source. A research note is not a record of the owner's words, and `opened` now only grows, so the entry is permanent. |
| 10 | Scams' SC3 as Supports | **Done** | The note marks it Supports; `noteMarks` reads `{decides: false, read: abstract}`. |
| 11 | Seeded faults; pin the count | **Done for what it lists** | The five new faults exist; `PINNED_CONTROL_COUNT = 223`. There is no control for a `dropped` flip, a same-words re-approval across commits, a review file dated before a redesign, or the commit after an unapproved sentence change. |

Five are done, one mostly done and five partly done. Item 5 left the tree red.

### H2. The attacks

- **(a) Approve with made-up words.** `approve.mjs geography goal --words "yes this is fine go ahead"`: committed. Named
  (104-105).
- **(b) Remove a record or an ask.** *Stopped*, every route:
  - `git rm --cached` of Geography's record;
  - Geography's `world-first` removed in the index while the working file stayed whole;
  - Math's `primes-factors` removed through a partial commit and through `commit -a`.

  The bypasses are in (f).
- **(c) Reword an ask, or edit an owner word in place.** *Stopped* for both (`askedSinceProblems`).
  *Not stopped:* Ideology's `anarchism` was dropped by setting `dropped: true` and leaving its owner word ("restore all
  the psychology and ideology topics") as it was. Committed green, and the screen prints "dropped on your word
  ("restore all ...")". After an approval of Ideology's goal, the same flip on `anarchism`, `market-socialism` and
  `nazis-socialists` committed green, and the approval stood: the fingerprint keeps `kept` (null before and after) but
  not `dropped`. The comment at design-shape 73 says the check refuses an ask "dropped since without the owner's word".
  The code does not. *Not named.*
- **(d) Make a failing pilot pass** (Scams l3): faked approvals, a self-written `reviews/design.md` stamped with
  `fp.mjs scams`, `tried.mjs --owner --passed yes`, `status: "live"`, then the lock. Committed. Named (104-105).
- **(e) Write gate 3 early** (Geography). *Stopped* with no approval. With (a)'s approval, committed. Named through (a).
- **(f) Commit a red tier.** The index route is *stopped* (b). Three ways round the hook:
  - `--no-verify`: named.
  - `git -c core.hooksPath=/dev/null commit`: committed. Not named.
  - **No flag at all:** `.githooks/pre-commit` edited in the working tree to `exit 0` and left unstaged. The commit-msg
    hook looks only at staged paths, so the commit went in with no owner line. Restoring the file leaves no trace.
    Not named.

  After such a commit, HEAD is the new baseline: the removed ask passes every later run. The same is true of a rewritten
  history. An approval was committed; `git reset --soft HEAD~1`; its words were edited; a new commit went in green, with
  the edit measured against the commit before the approval. Not named.
- **(g) Switch V69 off.** `RULES_DESIGN` was taken out of `rules-index.mjs`, the V69 controls were filtered out and the
  pin lowered to 0. A Math ask was removed in the same commit. With `Owner's word: "sure"`, committed: 141 controls
  green. Named (106-107).
- **(h) Re-fingerprint a changed screen.** A topic was cut and `fp` recomputed with the same words: *stopped*. Editing
  the words in place: *stopped*. Clearing in one commit and re-approving with the old words in the next: see (q).
- **(i) Promote a finding without reading it.** The same as (p).
- **(j) Write your own record review.** It lifts the hold, as in (d), (l) and (t). Named.
- **(k) Re-stamp a rewritten lesson.** Editing the `Reviewed:` line of `reviews/l1.md` to the new fingerprint, then
  `tried.mjs`: accepted. Named (a review written by the session).
- **(l) Drop asks on the owner's word, then change a lesson** (Wealth, faked approvals and record review): the four
  undecided asks dropped with `asked.mjs --drop`, the pilot retitled at rev 2, the lock regenerated. *Allowed*,
  committed, as it should be. The G wrinkle stands: `--drop` of a *kept* ask reopens the approval, against 294-295.
- **(m) Re-place an ask after the approval.** `asked.mjs wealth before-you-change --kept ...`: *refused*. Right.
- **(n) Rewrite a reviewed lesson and reuse the old review.** Psychology l1 retitled. `tried.mjs` *refused* ("reviewed
  sha256:cb71...; the lesson is now sha256:198a..."). Right.
- **(o) A redesign that shrinks the lists.** On Math, a lesson change was held by the engine paths in `opened.design`.
  `designedOn` was moved, and the lists were rewritten without those paths. The hold then became "no passing review of
  its own". *Held*, as it should be. The way past it is (t).
- **(p) A note's Read line promoted to full, then claimed.** Geography's G4 was changed to "*Read: full: ...*" and
  **Decides:**, and the record claimed it. Without an owner line: *refused* by commit-msg (new). With
  `Owner's word: "sure"`: committed. Named (105-107). SC3's Read line was deleted and the record claimed full: *refused*
  by V69 (new).
- **(q) Clear, then re-approve.** `approve.mjs geography goal --clear` was committed. `approve.mjs` with the same words
  was *refused*. The same words written by hand, on a screen with South America cut, with a fresh `fp`: *committed
  green*. V69 compares the words with the approval that stood at HEAD, which was null. Then new words through the tool:
  allowed, and the history kept both earlier entries. The skill (88) and the standard's V69 row say the same words
  are refused; only the tool does that. *Not named.*
- **(r) Replace an ask's owner word by hand without `previous`.** *Refused*. Right.
- **(s) Hand-edit `approved.history`.** Dropping an entry: *refused*. Editing an entry's words: *refused*. Appending an
  entry that never stood ("never said", no `fp`): *committed*. Low: it adds a false line, it removes nothing.
- **(t) A redesign with the old review.** Math as in (o): `designedOn` set to 2026-10-13, `opened.research` rewritten,
  the 2026-10-12 review kept. *Held*. Then only `designReview.date` was changed to `2026-10-13`. The review file is
  untouched, and its own Reviewer line still says 2026-10-12. *Lifted*, committed green. A new `reviews/design.md`
  dated 2026-10-13 with the right fingerprint lifts it too, as it should, but the file's date plays no part. *Not named.*
- **(u) A built subject's sentence changed while the approval is null.** V80 allows it only in the commit that makes
  the change. From the next commit on, the committed record is the changed one, and V80 fails: this is HEAD's state.
  Once the owner approves (tried on a second scratch copy from HEAD), V80 demands that the subject record follow. A
  change to the subject record is then refused by V69: no part covers the new topics, the practice is unapproved, and
  there is no record review. The two rules hold each other. The only legal move is one commit that carries the goal
  approval, the practice approval, the parts and blocks for 27 topics, a passing record review and the subject record
  together. *Not named.*

### H3. What the fixes broke or missed

1. **V80 broke the tree and locks a built subject's redesign** (u). "The last committed record" is not "the last
   approved record". No approval of Psychology's goal has ever been recorded (history empty), so nothing on the record
   says which sentence the subject was built to. The end-game rule: V80 holds the subject record to the approved sentence
   when the subject record is written, and never asks for a change V69 forbids. Today no commit can land, so
   Geography's approval cannot be recorded either.
2. **An ask is dropped silently by one field** (c). `askedSinceProblems` compares the words, when, where and the owner
   word, never `dropped` or `kept`. The approval's fingerprint (`goalScreen`) carries `kept`, not `dropped`. Twelve asks
   hold an owner word today (Psychology 5, Ideology 3, Geography 4). Each of them is one field away from a drop that
   cites the owner's keep word as its authority.
3. **The redesign's review date is the record's word, not the review's** (t).
4. **The same-words refusal is the tool's, not V69's** (q), and a history entry can be invented (s).
5. **The hooks are client-side, and the skill names one way past them** (f). An edited unstaged hook needs no flag,
   no owner line, and leaves no trace. A rewritten history moves the baseline. The repository has no `.github/`, so
   nothing runs where the session cannot edit it.
6. **Two replacements between commits are refused.** A second `tried.mjs` on the same lesson before a commit fails V69
   ("without keeping the entry that stood"): the check wants the committed entry *last* in `previous`, not at its
   committed place. The same holds for an ask's owner word (`laterWord`), and for an approval replaced twice (the
   history must grow by exactly one).
7. **The narrow-test rule sits where nothing applies it in time.** It is a clause of gate 2 step 4, not a gate 2
   rejection, and it is checked by the gate 5 review, after the owner approves the screen. Both screens going out
   tomorrow break it (H4).
8. **Text left behind:** H1, item 7.
9. **The reviews.** The session rewrote five reviewers' Reviewer lines, and its note says only the Reviewed line was
   added (H1, item 8). Singing l2's reviewer wrote "Disclosure: none of the forbidden files were opened", so the reader
   reads a disclosure. `design-pure`'s check "Singing l2 carries a Disclosure" passes on that misreading.
10. **Small:** e298e1e's message carries its owner line and its Co-Authored-By line twice. It says Singing l2 "fails
    on six clear places"; the review lists seven.

### H4. The two screens the owner reads tomorrow

**Psychology** (`approve.mjs psychology goal --show`: 4,512 characters, 742 words):
- *True to its record:* yes. The fingerprint covers what is printed.
- *Readable:* fair. "Taught under every topic" saved about 900 characters. The sentence prints as "After this subject
  you can: After this subject you can take a word ...". `screenText` adds the prefix, and the record's `endResult`
  already carries it.
- *Does the test reach every topic group?* No, one group is missing.
  - Reached: the labels and the next step (ten accounts); the biases (six arguments, "name the bias at work (or
    none)"); keeping yourself in check (three of your own moments).
  - Not reached: the defense mechanisms ("denial, projection, rationalization, displacement, minimizing"). They are
    their own topic and their own ask, and the paragraph promises "you can spot them". No part of the test asks for a
    defense mechanism.
  - The screen should not go out until the test reaches them, or the owner is asked whether they leave the subject.

**Geography** (3,069 characters):
- *True to its record:* yes.
- *Readable:* good.
- *Does the test reach every topic group?* No, one group is missing. Placing, naming, unseen places and distance are
  tested. Flags, a topic and an ask of the owner's ("flags as a third form of each country"), are tested by nothing.
- *The sentence:* "When a place is named ..., know where it is". Gate 2 rejects a sentence that names knowing, and the
  test shows the doing (tap it on a blank map, name a lit place). It should say that.
- The paragraph says how the lessons run ("It starts with the world, then ..."). It is tolerable, as G said, because
  those are the owner's asks.

### H5. The two re-run reviews, as reviews

**Psychology l1 (passes).** It has the shape the brief asks for:
- the Verdict, Reviewer and Reviewed lines, and no Disclosure;
- what it opened (the learner view only);
- a before, notes, the check done without the lesson open (6 of 6), an after tied to items, the five answers and the
  fixes.

It is a careful review. Its pass does not follow the brief's own rule, which passes a lesson only when Check is "yes".
The review answers "Yes, with limits", and its own notes give the limits:
- the doing line sits second in most items, so "someone who learned nothing could score well";
- the check scores recognising the line, not saying what the person did, which is the real task;
- check question 18 repeats question 4's options and answer ("memory, not thought");
- the result line's "4 of 5" contradicts the 6-question check.

Those are Check failures, and fixes 3 to 5 are what the next revision needs. The reviewer also did not try the app,
which the brief allows only "when it can be run", and it does not say it could not. Practically this is moot: l1 must
change for the new parts and be reviewed again. But its pass should not be counted on.

**Singing l2 (fails).** A sound review: specific places a beginner stalls, an honest "I cannot sing or hear", and
concrete fixes. Two faults, both small. Its Disclosure line discloses nothing, yet the parser voids the review on it
(H3, item 9). And it rests on the learner view alone, because the static server "printed no port".

### H6. The two subjects, on paper, from where they stand

**Psychology** (in the app; approvals null with an empty history; 27 topics, no part covering any of them; no
`designReview`; `designedOn` still 2026-10-10; l1 passes on the 2026-10-12 review).
- *Now.* No commit can land (V80). Nothing below can be recorded until V80 is fixed.
- *Gate 0.* Eight asks placed, five with relayed owner words. Each can be dropped with one field (H3, item 2).
- *Gate 1.* There is no research for the new ground: every principle comes from `reading-other-people` or
  `review-after-lessons`, and the biases, the defense mechanisms and keeping emotions in check need notes first. This
  is in effect a redesign, and `designedOn` should move with it.
- *Gate 2.* The screen fits. The test misses the defense mechanisms. Once approved, the V80/V69 lock in (u) applies.
- *Gates 3 to 5.* Possible in order on paper. Mechanically, the goal approval, the practice approval, all parts and
  blocks, a passing record review and the subject record must land in one commit.
- *Gate 6.* l1 changes, so it is reviewed again.
- **Verdict:** not possible in order as the code stands. It is possible once V80 is fixed.

**Geography** (not in the app; stopped at gate 2; approval null; 3,069 characters).
- *Now.* Its approval cannot be committed while the tree is red (V80, on Psychology).
- *Gate 0.* Four asks placed, four owner words; each can be flipped to dropped. `opened.asks` names a research note,
  now for good.
- *Gate 2.* Flags are not in the test, and the sentence says "know".
- *Gate 3.* Refused until `approved.goal` (e), then possible. The blank-map tap is on `delivery`.
- *Gates 4 to 7.* Possible in order. Not in the app, so V80 does not apply.
- **Verdict:** possible in order once the tree is green and the screen is fixed.

### H7. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. V80: hold the subject record to the approved sentence when the subject record is written, and never ask for a change
   V69 forbids. Then `npm test` is green and commits can land. Add controls for the commit after an unapproved sentence
   change and for a goal approved while the content is held.
2. Gate 0: refuse a change of `dropped` (or `kept` to null) since the last commit unless the ask's owner word was
   replaced by a new one, and put `dropped` in the approval's fingerprint. Add a control.
3. Read the record review's date from its file's Reviewer line, and require it on or after `designedOn` and equal to
   `designReview.date`. Add a control.
4. V69: refuse an approval whose words match any entry of `approved.history`; refuse a history entry that is not the
   approval that stood; accept several replacements between commits (the committed chain is a prefix of `previous`).
   Add controls.
5. Gate 2: make "the test does not reach every group of topics" a rejection the session applies before the screen goes
   out. Psychology's test must reach the defense mechanisms, and Geography's must reach flags. Drop the doubled "After
   this subject you can" from Psychology's screen. Make Geography's sentence say the doing.
6. Name every way past the hooks in SKILL 104-109: `--no-verify`, `core.hooksPath`, an edited unstaged hook file, a
   rewritten history. Better still, run `npm test` on push where the session cannot edit it (a GitHub Action against
   the pushed parent).
7. Text: SKILL 205-208, 294-295, 317-319 and 420; `stand-in-review.md` 4 and its last line; the standard's section 2
   (V80) and its V69 row.
8. Reviews:
   - say in the five older reviews that their Reviewer lines were rewritten too, and unsplice Scams l3's and Ideology
     l2's sentences;
   - make `REVIEWER_LINE` need a model, not any parenthetical;
   - tell the stand-in to write no Disclosure line when nothing was seen;
   - correct `design-pure`'s Singing l2 assertion.
9. `ASKS_OK`: no `docs/research/`. Say in Geography's prose that the research note is not a source of the owner's words.
10. Psychology l1: count its fixes 2 to 5 as Check failures, so its next review does not inherit a lenient pass.

For the owner:
- Psychology: should the test ask for the defense mechanisms, or should they leave the subject?
- Geography: should flags be tested, or only shown beside the name?
- A 4,512-character screen (742 words): is that one screen? (Carried over from G.)
- Turning on GitHub branch protection for `main` (no force-push, a required check). It is your setting, and it would
  close the history-rewrite route.
- Replacement words for the relayed words, the floor at SKILL 104-109, and the undecided asks: Math 3, Singing 3,
  Wealth 4. (Carried over from G.)

## Part I. The sixth review (2026-10-12)

An independent review of fdbb6e3 ("the skill's fifth review answered"), by an agent that did not write it, against
part H's ten fixes (H7). Line numbers are `SKILL.md`'s at fdbb6e3. **`npm test` is green**: 295 design reader checks,
48,520 lesson checks, 232 seeded faults (the pin is 232). The push workflow ran once on GitHub and passed. Every attack
was run on a scratch copy (`git archive HEAD`, its own `git init`, `npm run hooks`), never on the real records.

What is better, briefly:
- The tree is green and commits land. V80 holds the subject record to `approved.goal.sentence` only when the subject
  record is written, so a redesign's sentence waits without turning anything red (u, v, w).
- An ask flipped to dropped, or taken off all its topics, needs a new word of the owner's (c).
- A record review's date is its file's (t, x), and the same words as any earlier approval are refused by V69 (q).
- Psychology's test reaches every group of its topics, and Geography's reaches flags.

What is left falls in three groups:
- The since-last-commit refusals hold only for a commit made in a clone with the hooks on. A merge runs no lesson
  tier, and the push workflow compares each commit with itself.
- Three checks are narrower than their text: narrowing an ask's topics, the sentence an approval carries, and a history
  entry "that stood". The opened-list exemption also lets a forbidden read be erased.
- V71 still mirrors the parts on every run, the lock V80 had, moved one rule over.

### I1. H7's ten items

| # | H7 item | Status | Evidence |
|---|---|---|---|
| 1 | V80 to the approved sentence, on write; controls | **Done** | rules-shape 473-481 (V80). (u): a design sentence changed with no approval committed, and the next commit was green. (w): approved, subject record untouched, committed. (v): the subject's `endResult` changed to another sentence is refused by V80, and set to `approved.goal.sentence` V80 is green. Two controls. One gap: the sentence is not bound to the screen (I3, item 4). |
| 2 | A drop needs a new word; `dropped` in the fingerprint | **Partly** | `askedSinceProblems` (design-shape 84-86) refuses a `dropped` flip (c3) and `kept` going to null without a new word. `goalScreen` carries `dropped`. Not refused: an ask's `kept` narrowed to fewer topics. Psychology's `biases` ask, which the owner said to keep, went from five topics to one ("one act read as a trait") with no word, and was committed green (attack z4). SKILL 211 says "a drop, or topics taken away ... needs a new word". |
| 3 | A review's date is its file's | **Done** | `reviewVerdict` reads the date from the Reviewer line. `designReviewProblems` and `triedProblems` refuse a record date that differs (design-shape 275, 299). `designReviewed` needs it on or after `designedOn`. (x) and (t) were refused. Controls exist. |
| 4 | Words against the whole history; history entries stood; chains | **Partly** | The same words are refused against `approved.history` (design-shape 217; q2 refused). Chains of replacements are allowed (a control). Two gaps. "An approval that stood" is checked for shape only (date, words, where, an `fp` string): an invented entry with `fp: "sha256:0000"` was committed (s2). "The same words" is a lowercase, trimmed compare: "Yes, this is fine. Go ahead!" after "yes this is fine go ahead" was committed by hand over a cut screen (q3). |
| 5 | Gate 2 test reaches every group; the two screens | **Mostly** | It is a rejection at SKILL 305. Psychology's test now asks for "the bias or the defense mechanism" (I4). The sentence prints once, and Geography's says the doing. New: Geography's sentence and paragraph promise "what it borders and what water it is on", and its test asks neither (I4). |
| 6 | Every way past the hooks named; tiers on push | **Partly** | SKILL 104-110 name `--no-verify`, `core.hooksPath`, an edited unstaged hook and history rewriting, and `lesson-tier.yml` runs `npm test` on push. Three gaps (I3, item 1): a merge runs no lesson tier; the workflow's run compares HEAD with itself, so no since-last-commit check can fire there; and `.github/` is not under the commit-msg hook, so the session edits the runner freely (z2). SKILL 109-110, "where no session edits the runner", is false on both counts. |
| 7 | Text in line with the code | **Partly** | Done: gate 0 step 2 (211), gate 2 (297-300), 427 ("replaces it and keeps it"), `stand-in-review.md` 4 and its last line, and the standard's section 2. Left: the standard's V80 row (645, "equals the design record's") and its data model (72, "the design record's endResult, word for word"). The V69 row still says "every principle is cited by a block". Section 11 has no entry for fdbb6e3's rule changes (V80 to the approved sentence, a drop needs a new word, a review's date). SKILL 81, 222 and 473, `approve.mjs` and the V69 message still say "shown as dropped" for an undecided ask, which the screen prints as "needs your word". SKILL 101 says a redesign "starts new lists", and `asks` never resets. Gate 3 step 1 (325) still states D7 as a rule. |
| 8 | The older reviews; no empty Disclosure; Check by position | **Partly** | Five notes added, Scams l3 and Ideology l2 say "model not recorded", and the brief (56) and the Check answer (42-43) are right. But Wealth l2, Math l1 and Stats l1 still say "(Sonnet 5.5)" on their Reviewer line. That model name was put there by the session in e86d51d (the reviewers' own text at 0ddc0ae names no model). The note directly below it says "The model was not recorded by the reviewer". The "model not recorded" exception in `REVIEWER_LINE` (designs.mjs 14) is not limited to those files, so any new review can use it. Singing l2's reviewer's "Disclosure:" was relabelled "Note" by the session; the file says so, and the verdict is fails either way. |
| 9 | No research note in `opened.asks`; Geography's prose | **Mostly** | `ASKS_OK` excludes `docs/research/` (y3 refused). Geography's list and its prose (214) are fixed. A listed note can be taken off (y1) and `old-lessons:` cannot (y2), as intended. But the exemption is "anything that fails `ASKS_OK`", and that includes forbidden reads. `public/subjects/psychology/l1.lesson.js` listed under `asks` was taken off with no redesign and committed green (y6). The same path under `design` was refused (y7). The ask `where-places-are` still says "(docs/research/knowing-where-places-are.md)" in its `where`, which is frozen. The prose explains it. |
| 10 | Psychology l1's lenient pass | **Done** | Worklist 65; the reviewer's file is unchanged. |

Three are done, three mostly done and four partly done. Nothing is red.

### I2. The attacks

- **(a) Approve with made-up words** (Geography): committed. Named (104-105).
- **(b) Remove a record or an ask through the index:** *refused* by every route:
  - `git rm --cached` of Geography's record;
  - a staged removal of Math's `primes-factors` with the working file restored;
  - a partial commit;
  - `commit -a`.
- **(c) Reword, edit in place, flip `dropped`:**
  - A reworded ask, an owner word on an ask edited in place, and `anarchism` flipped to dropped under its old keep word:
    all *refused* (the flip is new).
  - `asked.mjs --drop` with invented words: committed. Named.
- **(d) Make a failing pilot pass** (Scams l3):
  - faked approvals of the goal and the practice;
  - a self-written `reviews/design.md` stamped with `fp.mjs`;
  - `tried.mjs --owner --passed yes`;
  - `status: "live"` and the lock.

  Committed. Named.
- **(e) Write gate 3 early** (Geography): *refused* with no approval; committed after (a). Named through (a).
- **(f) Commit a red tier.** All three of these committed, and all are named:
  - `--no-verify`;
  - `git -c core.hooksPath=/dev/null`;
  - an edited, unstaged `pre-commit`.

  New and not named:
  - **A merge.** A branch committed with the hooks off, as in a fresh clone that has not yet run `npm test`, removed
    Math's `primes-factors`. `git merge --no-ff` into main ran no lesson tier, and the commit-msg hook does not cover
    `docs/subjects/`. Main then validated green. A fast-forward runs no hook at all.
  - **The push workflow catches none of this.** `npm test` at the HEAD of a `--no-verify` commit that removed an
    ask was green (exit 0). The validator reads "the last commit" as `HEAD`, and on the runner `HEAD` is the pushed
    commit itself.
- **(g) Switch V69 off.** `RULES_DESIGN` was taken out, the V69 controls filtered and the pin set to 0, with a Math ask
  removed in the same commit. It was refused with no owner line, and committed with `Owner's word: "sure"`: 142 controls
  were green. Named (108-109).
- **(h) Re-fingerprint a changed screen.** South America was cut and `fp` recomputed with the same words: *refused*.
  The words edited in place: *refused*.
- **(i) Promote a finding without reading it:** as (p).
- **(j) Write your own record review:** it lifts the hold in (d) and (l). Named.
- **(k) Re-stamp a rewritten lesson.** Psychology l1 was retitled, then the `Reviewed:` line was edited to the new
  fingerprint, and `tried.mjs` accepted it. Named.
- **(l) Drop asks on the owner's word, then change a lesson** (Wealth, faked approvals and record review). The four
  undecided asks were dropped with words, the pilot retitled at rev 2, and the lock regenerated: *allowed*, committed.
  Right.
- **(m) Re-place an ask after the approval.** `--kept` on `before-you-change` was *refused*, and un-dropping by placing
  was *refused*. The owner's own `--keep` word on a placed ask was allowed, with no reopening (SKILL 297-298). Right.
- **(n) Rewrite a reviewed lesson and reuse the review.** Psychology l1 was retitled, and `tried.mjs` *refused* it
  ("reviewed sha256:cb71...; the lesson is now sha256:79f5..."). Right.
- **(o) A redesign that shrinks the lists** (Wealth). `designedOn` was moved to 2026-10-13, `research` and `design`
  were shortened, and the pilot was retitled. *Held*: "no passing review of its own". Right.
- **(p) A note's Read line promoted to full.** It was *refused* by commit-msg with no owner line, and committed with
  `"sure"`. Named.
- **(q) Clear, then re-approve.**
  - The clear was committed. The same words through the tool were *refused*.
  - The same words by hand on a cut screen were *refused* by V69 (new).
  - The same words with new punctuation by hand were committed. Named as an invented quote, but the "same words"
    check is weaker than it says (I1, item 4).
- **(r) Replace an ask's owner word by hand without `previous`:** *refused*.
- **(s) Hand-edit `approved.history`.**
  - A dropped entry: *refused*.
  - An invented entry with no `fp`: *refused* (new).
  - An invented entry with a made-up `fp`: committed. Low: it adds a false line and removes nothing.
- **(t) A redesign with the old review.** Moving only `designReview.date` was *refused* (new). Rewriting the review
  file's own date line by hand lifted the hold. Named ("a review's date ... by hand").
- **(u) A built subject's sentence changed while the approval is null:** committed, and the next commit was green.
  Right.
- **(v) Approve Psychology, then write another sentence into the subject record.**
  - V80 refuses: "the subject's end result is not the sentence the owner approved".
  - V69 holds the content too (27 topics in no part).
  - With the approved sentence written in, V80 is green.
- **(w) Approve, leave the subject record alone:** committed. Right.
- **(x) `designReview` dated unlike its file:** *refused* ("the record's date is the file's").
- **(y) Take things off `opened.asks`:**
  - a research note listed under Psychology's `asks`: taken off, *allowed* (as intended);
  - `old-lessons:public/subjects/psychology/`: *refused*;
  - **a forbidden read**, the subject's own `l1.lesson.js` listed under `asks`: taken off with no redesign, *allowed*
    (y6). Not named; I3, item 2.

Two further attacks:
- **(z2)** `lesson-tier.yml` changed to `echo skipped`: committed with no owner line.
- **(z3)** `approved.goal.sentence` written by hand as "After this subject you can diagnose anyone ..." on a valid
  approval: committed. V80 would then hold the subject record to a sentence the owner never saw.

### I3. What the fixes broke or missed

1. **The since-last-commit refusals are local only** (f, z2). They cover:
   - an ask removed, reworded or dropped;
   - an owner entry edited;
   - a record deleted;
   - content changed while held.

   Each is measured against `HEAD`. It is enforced only by a pre-commit hook in a clone where `npm test` has run.
   - A merge runs no lesson tier, and a fast-forward runs no hook. Work from another session or a fresh clone reaches
     main unchecked, and once it is HEAD it is the baseline.
   - On the runner, `HEAD` is the pushed commit, so the workflow can only catch shape faults.
   - The workflow file is outside the commit-msg hook.

   The skill names none of this, and says the push runs "where no session edits the runner".
2. **A forbidden read can be erased from `opened.asks`** (y6). The exemption meant for a misfiled research note covers
   every path that fails `ASKS_OK`, the subject's own lessons and other subjects' records included. Left in place, the
   same read would hold the content for good, since a redesign never resets `asks`. So V69's message "held until the
   subject is redesigned" is wrong for that list.
3. **V71 mirrors the parts on every run** (rules-shape 462). On a built subject:
   - A gate 4 that only fills part topics under the existing ids and titles lands alone (tried).
   - A gate 4 that adds or renames a part is refused by V71 until the subject record follows. A subject record change
     is held content, so gates 4 and 5, the record review and the subject record must land in one commit (tried).

   This is the lock H found in V80, now in V71. The V80 fix's own logic applies: hold the subject record's parts to the
   design's when the subject record is written. `partIds` comes from the subject record (model.mjs 31), so lessons stay
   consistent. It is not named. Psychology will meet it if its 27 topics need new parts.
4. **The sentence an approval carries is not bound to its screen** (z3). `approvalProblems` checks only that
   `sentence` is text, and the fingerprint does not cover it.
5. **An ask can be narrowed without a word** (z4; I1, item 2). This is the founding incident in small: the biases ask
   cut from five topics to one. The screen would show it, but SKILL 211 promises a refusal.
6. **The history and same-words checks are shallower than their text** (s2, q3).
7. **Text** (I1, item 7) and **the reviews** (I1, item 8).

### I4. The two screens the owner reads

**Psychology** (`approve.mjs psychology goal --show`: 4,551 characters, 747 words):
- *True to its record:* yes. The screen is built from the record, and the fingerprint covers what is printed.
- *Readable:* fair. The sentence prints once. "Projection" is listed twice, as a word and as a defense mechanism. The
  first ask prints "taught under every topic".
- *Does the test reach every topic group?* Yes:
  - the words, "one ordinary moment", control patterns and the next step: ten accounts;
  - the biases and the defense mechanisms: six arguments, "name the bias or the defense mechanism at work (or none)";
  - keeping yourself in check: three of your own moments;
  - the mix: across all of them.
- *Verdict:* it can go out. Its length is the owner's call (below).

**Geography** (3,179 characters, 633 words):
- *True to its record:* yes.
- *Readable:* good. "All on two sittings at least a week apart" sits after Naming, so it is unclear which parts it governs.
- *Does the test reach every topic group?* Yes, flags included.
- *The sentence:* it says the doing. But it promises "say what it borders and what water it is on", and the paragraph
  promises "what it borders, the coast or water it is on". No part of the test asks either. This is gate 2's first
  rejection in another form: the sentence promises what the test does not check.
- *Verdict:* it should not go out until the sentence and the test agree.

### I5. The two subjects, from where they stand

**Psychology** (in the app; approvals null, history empty; 27 topics, the six parts cover none; no `designReview`;
`designedOn` 2026-10-10; l1 draft, passing on a lenient review).
- *Now.* Green; commits land.
- *Gate 0.* Eight asks placed, five with relayed owner words. A drop needs a new word. A narrowing does not (z4).
- *Gate 1.* No research yet for biases in yourself, defense mechanisms or keeping emotions in check. That makes it a
  redesign: `designedOn` moves, new research and design lists start, and `asks` stays.
- *Gate 2.* The screen fits and its test reaches every group. Approval was possible on the scratch copy (w), and V80
  then waits for the subject record (v).
- *Gate 3.* The practice approval was possible on the scratch copy.
- *Gates 4 and 5.* Part topics under the six existing ids can be committed alone. A new or renamed part brings in the
  V71 lock (I3, item 3): gates 4 and 5, the record review dated on or after the new `designedOn`, and the subject
  record land in one commit.
- *Gate 6.* l1 changes, so it is reviewed again, without counting the lenient pass.
- **Verdict:** possible in order. The last design commit is all-in-one if the parts change, and the skill does not
  say so.

**Geography** (not in the app; stopped at gate 2; approval null).
- *Gate 0.* Four asks placed with four owner words. `opened.asks` is owner material only.
- *Gate 2.* The sentence and the test disagree on borders and water (I4).
- *Gate 3.* Refused until the approval (e), then possible.
- *Gates 4 and 5.* After the practice approval.
- *Gate 6.* The first content commit carries the subject record and the pilot, with both approvals, full coverage and a
  passing record review. V80 and V71 apply on that write. Then the pilot is reviewed, with a waiver quoted with its
  date.
- **Verdict:** possible in order, once the sentence and the test agree.

### I6. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Make the since-last-commit checks hold beyond one clone:
   - the validator takes its baseline as a parameter (default `HEAD`);
   - the workflow checks every pushed commit against its first parent (`github.event.before` to the pushed SHA, full
     fetch);
   - a `pre-merge-commit` hook runs the tier;
   - `.github/` goes under the commit-msg hook;
   - SKILL 104-110 name the merge and the fresh clone and stop saying no session edits the runner.
2. The `opened.asks` exemption: only a path that is not forbidden (`FORBIDDEN_EVERYWHERE` is null) may be taken off.
   Add a control, and correct "held until the subject is redesigned" for `asks`.
3. V71: hold the subject record's parts to the design's when the subject record is written, as V80 now does for the
   sentence. Add controls for both sides. Otherwise, name the one-commit landing in gate 4.
4. Refuse an ask whose `kept` loses a topic still on the topics list since the last commit, without a new owner word, as
   SKILL 211 says. Add a control.
5. Refuse an `approved.goal` whose `sentence` is not the `endResult` of the screen it fingerprints. Add a control.
6. Geography: make the sentence, the paragraph and the test agree on borders and water before the screen goes out, and
   say which test parts "two sittings a week apart" covers.
7. Make three more checks do what they say:
   - entries added to `approved.history` since the last commit start with the approval that stood at the last commit
     and are not invented;
   - "the same words" ignores punctuation and spacing;
   - the "model not recorded" exception holds only for reviews dated 2026-10-11.
8. Text:
   - the standard's V80 row and data model line, the V69 row's "every principle is cited by a block", and a section 11
     entry for fdbb6e3;
   - "shown as dropped" at SKILL 81, 222 and 473, in `approve.mjs` and in the V69 message;
   - SKILL 101 ("starts new lists");
   - gate 3 step 1's D7.
9. Reviews: Wealth l2, Math l1 and Stats l1 say "(Sonnet 5.5)", which the session inserted. Make them say "model not
   recorded", as their notes do.

For the owner:
- GitHub branch protection on `main`: a required "lesson tier" check and no force-push. It is your setting. With fix 1,
  it closes the merge, fresh-clone and history routes.
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Geography: should borders and water be in the promise and the test, or out of both?
- Replacement words for the relayed words; the floor at SKILL 104-110; the undecided asks of Math 3, Singing 3 and
  Wealth 4. (Carried over.)

## Part J. The seventh review (2026-10-12)

An independent review of fece38c ("the skill's sixth review answered"), by an agent that did not write it, against
part I's nine fixes (I6). Line numbers are `SKILL.md`'s at fece38c. **`npm test` is green**: 297 design reader checks,
48,520 lesson checks, 236 seeded faults (the pin is 236). Every attack was run on a scratch copy (`git archive HEAD`,
its own `git init`, `npm run hooks`), never on the real records. The push workflow's per-commit step was run locally
with the event's values filled in.

What is better, briefly:
- `--base` works: at a `--no-verify` commit that removed Math's `primes-factors`, the validator against the parent is
  red. A `--no-ff` merge of that branch is refused by `pre-merge-commit`. A push to an existing branch is red in the
  per-commit step.
- V71 waits for the subject record: a new part and a renamed part on Psychology's design commit alone.
- The approved sentence is bound to the screen (z3 refused), a subset narrowing of an ask is refused (z4), a forbidden
  read in `opened.asks` stays (y6 refused), the same words with new punctuation are refused (q3), and the three old
  reviews say "model not recorded".

What is left falls in three groups:
- Narrowing an ask is refused only when what is left is a subset: swapping in another topic narrows it with no word.
- The push and the hook have new holes. A branch's first push and a force-push check no commit. The commit-message rule
  is not run on push. `LESSONS_BASE` from the environment reaches the hook.
- V80 still mirrors `readingShare` on every run, the lock fix 3 removed from V71.

### J1. I6's nine items

| # | I6 item | Status | Evidence |
|---|---|---|---|
| 1 | The since-last-commit checks beyond one clone | **Partly** | Done: `--base` / `LESSONS_BASE` (lockfile 23, designs 89-93, paths 26); `pre-merge-commit`; `.github/` under commit-msg (z2 refused with no owner line); the workflow loop, which caught the removal on a push to an existing branch. Missed (J3, items 2 and 3): `github.event.before` is all zeros on a branch's first push, and is a commit that is gone after a force-push. `git rev-parse` accepts any 40-hex string, so the fallback (yml 19) never fires. `git rev-list` fails inside `for c in $(...)`, which `set -e` does not stop. The loop then checks nothing, and the step passes (exit 0, tried). The commit-msg rule is not run on push. `LESSONS_BASE` set in the environment is used by the hook. SKILL 109 still says "where no session edits the runner". |
| 2 | Only a non-forbidden path may be taken off `opened.asks`; correct "held until the subject is redesigned" | **Partly** | `erasable` (design-shape 185) keeps `FORBIDDEN_EVERYWHERE` paths. y6 (Psychology's own `l1.lesson.js`) is refused, and two controls exist. Not done: rules-design 90 still tells a built subject "the content is held until the subject is redesigned" for a forbidden read in `asks`, which a redesign never lifts. Missed: `FORBIDDEN_EVERYWHERE` does not list the engine's code, so `public/app/engine.js` listed under `asks` was taken off and committed. The table forbids that path to gates 2 to 5 and no stage's list allows it. |
| 3 | V71 on write only | **Done** | rules-shape 463. On Psychology, after faked approvals, a new part G with a block, then a renamed part A, each committed with the subject record untouched. The same lock remains in V80's `readingShare` (J3, item 4). |
| 4 | Refuse an ask that loses a topic without a new word | **Partly** | design-shape 87 refuses only when the new `kept` is shorter *and* a subset of the old. On Psychology's `biases` (the owner said keep; five topics), no owner word was given in any of these: 5 to 1 old topic: *refused*. 5 to 2 (one old topic and `toxic`): *committed*. One swapped for `toxic`: *committed*. 5 to `toxic` alone: *committed*. SKILL 215 says "a drop, topics taken away, or fewer topics than before ... needs a new word". |
| 5 | The sentence is the `endResult` of the screen it binds | **Done** | design-shape 222 and a control. z3 (a different sentence by hand) was refused. Writing a new sentence and `endResult` together by hand was refused by the fingerprint. |
| 6 | Geography: sentence, paragraph and test agree; place "two sittings" | **Mostly** | The test now has "Borders and water: ... tap a place it borders and the water it is on". "All on two sittings at least a week apart" still sits between Borders and Judging. No line of the topic list teaches what a place borders (J4). |
| 7 | History entries; same words; "model not recorded" | **Mostly** | `sameWords` is used by the tool, `asked.mjs` and the history check (q3 refused by hand and by tool). "model not recorded" is unreadable on any date but 2026-10-11 (designs.mjs 37, two reader checks). The history fingerprint is named (SKILL 112-114) rather than checked: s3 still commits. Missed: the check across subjects (`blanketProblems`, rules-design 110) still compares lowercase-trimmed. Psychology approved with "Looks right, for geography again!" after Geography's "looks right for geography again" was committed. |
| 8 | Text | **Mostly** | Done: "needing their word" in the skill, `approve.mjs` and V69; SKILL 101-102 and 403-404 say which lists; gate 3 step 1's D7 is a judgement call; the standard's data model line, V69 row and a section 11 entry. Left: SKILL 109 "where no session edits the runner". The standard's V80 row says `readingShare` is "held whenever the subject record is written", and the code checks it on every run (rules-shape 481). The V71 row still says "the subject's `parts` equal the design record's". "Shown as dropped" survives in a `design-pure.mjs` message and a control's name. |
| 9 | The three reviews' model | **Done** | Wealth l2, Math l1 and Stats l1 say "(model not recorded)", dated 2026-10-11, and still read as `fails`. |

Three are done, three mostly done and three partly done. Nothing is red.

### J2. The attacks

- **(a) Approve with made-up words** (Geography): committed. Named.
- **(b) Remove a record or an ask through the index:** `git rm --cached`, a staged removal with the working file
  restored, a partial commit by path, and `commit -a`: all *refused*.
- **(c) Reword, edit in place, flip `dropped`:**
  - a reworded ask, an owner word edited in place, and `biases` flipped to dropped under its keep word: *refused*;
  - `asked.mjs --drop` with invented words: committed. Named.
- **(d) Make a failing pilot pass** (Scams l3): faked approvals, a self-written `reviews/design.md` with `fp.mjs`,
  `tried.mjs --owner --passed yes`, `live` and the lock. Committed. Named.
- **(e) Write gate 3 early** (Geography): *refused*; committed after (a). Named through (a).
- **(f) Commit a red tier:**
  - `--no-verify`, `core.hooksPath=/dev/null`, and an edited unstaged `pre-commit`: all committed. Named.
  - A `--no-ff` merge of a hooks-off branch: *refused* (new). A fast-forward: lands. Named.
  - `git cherry-pick` of the hooks-off commit onto main: committed. Git runs no pre-commit for it. Not named;
    the push to an existing branch catches it.
  - The push step, run with the event's values: a push to an existing branch is *red* (new). A branch's first push
    (`before` all zeros) and a force-push both check no commit and exit 0. Not named (J3, item 2).
- **(g) Switch V69 off:** a one-line exemption for Math in `askedSinceProblems`, and Math's ask removed.
  - Refused with no owner line; committed with `"sure"`. Named.
  - With `--no-verify` and no owner line, `npm test` at the head and the per-commit step are both green (tried).
    Push does not re-run the commit-message rule (J3, item 2).
- **(h) Re-fingerprint a changed screen** (South America cut, `fp` recomputed): *refused*.
- **(i)/(p) Promote a note's Read line to full:** *refused* by commit-msg with no owner line; committed with
  `"sure"`. Named.
- **(j) Write your own record review:** lifts the holds in (d) and (l). Named.
- **(k) Re-stamp a rewritten lesson** (Psychology l1 retitled, `Reviewed:` edited): `tried.mjs` accepted. Named.
- **(l) Drop asks on the owner's word, then change the pilot** (Wealth, with faked approvals and a record review):
  the four undecided asks dropped, the goal re-approved, l2 retitled at rev 2 with its history: *allowed*. Right.
- **(m) Re-place an ask after the approval:** `--kept` on `before-you-change`: *refused*. Un-dropping by placing:
  *refused*. The owner's own `--keep` on a placed ask: allowed. Right.
- **(n) Rewrite a reviewed lesson and reuse the review:** `tried.mjs` *refused*. Right.
- **(o) A redesign that shrinks the lists, pilot retitled** (Wealth): *held*, "no passing review of its own".
  Right.
- **(q) Clear, then re-approve:** the same words with new case and punctuation, by hand and by tool: *refused*
  (new).
- **(r) Replace an ask's owner word by hand without `previous`:** *refused*.
- **(s) Hand-edit `approved.history`:**
  - a dropped entry: *refused*;
  - an invented entry with no `fp`: *refused*;
  - an invented entry with a made-up `fp`: committed. Named (SKILL 112-114).
- **(t) A redesign with the old review:** moving only `designReview.date` was *refused*. Moving it together with the
  review file's date line committed. Named.
- **(u) A built subject's sentence changed while the approval is null:** committed, and the next commit was green.
  Right.
- **(v) Approve Psychology, then write another sentence into the subject record:** V80 *refuses* and V69 holds. Right.
- **(w) Approve, leave the subject record alone:** committed. Right.
- **(x) `designReview` dated unlike its file:** *refused*.
- **(y) Take things off `opened.asks`:**
  - a research note: *allowed*, as intended;
  - `old-lessons:`: *refused*;
  - y6, Psychology's own `l1.lesson.js`: *refused* (new);
  - the engine's code (`public/app/engine.js`): *allowed*. Not named (J3, item 6);
  - another subject's learner view (`docs/learner-view/math-l1.md`) under Geography's `asks`: accepted as owner
    material, because `ASKS_OK` admits any `docs/` path. Not named.
- **(z2) The workflow edited to `echo skipped`:** *refused* with no owner line (new); committed with `"sure"`. Named
  as an invented quote.
- **(z3) A hand-written `approved.goal.sentence`:** *refused* (new).
- **(z4) Narrow Psychology's `biases` ask:**
  - to a subset: *refused* (new);
  - by swapping in another topic: committed. Not named (J3, item 1).
- **(z5) The base from the environment, hooks on.** The staged tree was written as a dangling commit (`git
  commit-tree`), and `LESSONS_BASE=<it> git commit` removed Math's ask: committed. An unresolvable base (`--base nope`)
  is read as "never committed", so every since-last-commit check goes quiet. Not named (J3, item 3).
- **(z6) A gate 3 change on a built subject after the goal's approval** (Psychology `readingShare` 0.2 to 0.3):
  V80 *refuses* until the subject record follows. The subject record is then held content, and V69 refuses it until
  the topics are in parts, the practice is approved and a record review passes. Not named (J3, item 4).
- **(z7) The same words on two subjects, new punctuation:** committed (J3, item 7).

### J3. What the fixes broke or missed

1. **An ask can still be narrowed without a word** (z4). The check is "shorter and a subset". Replacing a topic, or
   adding one unrelated topic while cutting four, takes topics away silently. This is the founding incident with one
   more step. The end-game check: refuse when any topic in the committed `kept` is gone from the new `kept`, unless the
   ask carries a new owner word. Add a control for the swap.
2. **The push does not do what SKILL 110-111 says** ("the lesson tier at every pushed commit against its parent, so
   a branch committed with hooks off shows on push"):
   - On a branch's first push and on a force-push, the step checks nothing and passes.
     - `git rev-parse` of a 40-hex string always succeeds, so the fallback never fires.
     - The failed `git rev-list` inside `$(...)` is swallowed.
     - For a new branch, use `git rev-list <sha> --not --remotes=origin`, or the merge base with `main`.
     - Fail the step when the range cannot be listed.
   - The commit-message rule is not on the push. A `--no-verify` commit that edits the validator, with no owner line,
     goes through both push steps green. With the hook on, it would have been refused for the missing line.
   - Main is still covered when it is pushed, so the merge route closes there.
3. **`LESSONS_BASE` is a new way past the hook** (z5). The hook passes the environment through, and the validator
   accepts any base, even a dangling commit of the staged tree or a ref that does not exist. The hook should unset it.
   `--base` should refuse a base that does not resolve, rather than reading it as "nothing committed".
4. **V80's `readingShare` mirror is the V71 lock in a third place** (z6; rules-shape 481). The sentence and the parts
   now wait for the subject record to be written, and `readingShare` does not. A built subject's redesign that changes
   `readingShare` must land with gates 4 and 5, both approvals, the record review and the subject record in one commit.
   The standard's V80 row already says "held whenever the subject record is written", so the code, not the text, is
   wrong.
5. **The hold's message for a forbidden read in `opened.asks`** (rules-design 90) still says "until the subject is
   redesigned". Since fix 2, nothing lifts it: the read is never erased, and `asks` never resets. On a subject not in
   the app it is red for good. On a subject in the app its content is frozen for good. The message should say so.
   Whether that permanence is intended is the owner's (below).
6. **"What no stage may open" is narrower in code than in the table.** `FORBIDDEN_EVERYWHERE` omits the engine's code.
   `ASKS_OK` admits any `docs/` path, another subject's learner view among them, as owner material (noted in part F,
   item 13, and only `docs/research/` was taken out).
7. **The same words are normalized in three places and not the fourth.** The check across subjects compares
   lowercase-trimmed. `sameWords` also drops every character outside a to z and 0 to 9. Two different replies in emoji
   or a non-Latin script therefore read as the same words, which is a false refusal.
8. **Text:**
   - SKILL 109 "where no session edits the runner";
   - the ways past the hook omit `git cherry-pick` and `git rebase`, which commit with no pre-commit (caught on push to
     an existing branch);
   - the standard's V71 row;
   - "shown as dropped" in `design-pure.mjs` 59 and the control at controls-table 97.

### J4. The two screens the owner reads

**Psychology** (4,551 characters, 747 words; unchanged since part I):
- *True to its record:* yes.
- *Readable:* fair. "Projection" is listed twice.
- *Does the test reach every topic group?* Yes.
- *Verdict:* it can go out. Its length is the owner's call.

**Geography** (3,313 characters, 662 words):
- *True to its record:* yes.
- *The sentence and the test:* they agree now. Placing, borders and water, naming, flags and distance are each in
  both.
- *Readable:* "All on two sittings at least a week apart" still sits after Borders and before Judging, so it is unclear
  which parts it governs.
- *The list:* the test asks what a place borders, and no line of the list teaches it. The nearest line is "the world's
  water, mountains and deserts", which covers water.
- *Verdict:* nearly. Before it goes out, place the two-sittings line, and either add borders to the list or take them
  out of the sentence and the test.

### J5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Refuse an ask whose `kept` lost any committed topic without a new owner word (the swap, z4). Add a control.
2. The push:
   - list the commits of a new branch or a force-push from what `origin` does not have, and fail when the range will
     not list;
   - run the commit-message rule on each pushed commit.
3. The hook unsets `LESSONS_BASE`, and `--base` refuses a base that does not resolve (z5).
4. V80 holds `readingShare` only when the subject record is written, as the standard's row says. Add controls for both
   sides.
5. rules-design 90: say what lifts a forbidden read in `opened.asks` (nothing), not "until the subject is redesigned".
6. Add the engine's code (`public/app/`, `public/index.html`, `public/sw.js`) to what is never erased. Narrow `ASKS_OK`
   so another subject's learner views and the project's working docs are not owner material.
7. Use `sameWords` in `blanketProblems`. Make `sameWords` keep letters outside a to z.
8. Geography: place "two sittings a week apart" and put borders on the list, or take them out of the promise.
9. Text:
   - SKILL 109's "no session edits the runner";
   - name `cherry-pick` and `rebase` among the ways past the hook;
   - the standard's V71 row;
   - the two "shown as dropped" strings.

Named, rests on honesty:
- Invented owner words: (a), (c4), (d), (g), (p) and (z2) with an owner line.
- A self-written record review (j), and a review's fingerprint or date line written by hand (k, t).
- `--no-verify`, `core.hooksPath`, an unstaged hook edit, and a fast-forward merge.
- Fingerprints of `approved.history` entries are the record's own claims (s3). An entry appended while the standing
  approval did not change could still be refused mechanically.
- The validator and its controls edited together under an owner line (g).

For the owner:
- Branch protection on `main`: a required "lesson tier" check and no force-push. With fix 2 it closes the push routes
  that remain. (Carried over.)
- A forbidden read honestly listed under `opened.asks` now freezes the subject for good: its content if it is in the
  app, every commit if it is not. Is that what you want, or should a redesign with the read disclosed lift it?
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Geography: should "what it borders" be taught (a line on the list) or dropped from the promise?
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part K. The eighth review (2026-10-12)

An independent review of 21da9cf ("the skill's seventh review answered"), by an agent that did not write it, against
part J's nine fixes (J5). Line numbers are `SKILL.md`'s at 21da9cf. **`npm test` is green**: 297 design reader checks,
48,520 lesson checks, 238 seeded faults (the pin is 238). Every attack was run on a scratch copy (`git archive HEAD`,
its own `git init`, `npm run hooks`), never on the real records. The push workflow's per-commit step was taken out of
`lesson-tier.yml` as written and run on a fresh clone of the scratch repo, with the event's values filled in.

What is better, briefly:
- An ask's topics only grow: the swap that slipped through in part J is refused, with a control.
- A new branch's first push and a force-push to a branch now list the branch's commits, and catch a hooks-off removal.
- The hook unsets `LESSONS_BASE`, and a base that is not a commit makes the validator exit 1.
- V80 holds `readingShare` only when the subject record is written.
- The engine's code, the tools and every learner view are now forbidden reads.
- The same words on two subjects with new punctuation are refused. Geography's list, sentence and test agree.

What is left falls in three groups:
- The push checks each commit with that commit's own owner-line check, and reads no files for a merge commit. A force-push
  to main checks nothing.
- Gate 0's allow-list still admits the project's working docs and any path at the tag `old-lessons`.
- Three of the new guards have no seeded fault, `sameWords` still drops every letter outside a to z, and two lines of
  text are wrong.

### K1. J5's nine items

| # | J5 item | Status | Evidence |
|---|---|---|---|
| 1 | Refuse an ask that lost any committed topic without a new word; control | **Done** | design-shape 87 and the control at controls-table 122. On Psychology's `biases`, a swap of one topic was *refused* ("lost a topic ... the topics an ask is taught under only grow"). Adding a sixth topic was committed. |
| 2 | The push: list a new branch's or a force-push's commits, fail when the range will not list; the commit-message rule on each pushed commit | **Partly** | Done: `--verify "$BEFORE^{commit}"` now fails on all zeros and on a commit that is gone, so the fallback runs. A first push with `before` all zeros, and a force-push to a branch with an unknown `before`, both checked both commits and were *red* on the hooks-off removal of Math's `primes-factors`. `owner-line.mjs` runs at every commit. Missed (K3, items 1 to 3): <br>- At each commit the step runs *that commit's* `owner-line.mjs`. <br>- A merge commit's files are read with a plain `diff-tree`, which lists nothing for a merge. <br>- A force-push to main gives the empty range `origin/main..HEAD`. <br>- "Fail when the range will not list" was not done: `for c in $(git rev-list ...)` still swallows an error. |
| 3 | The hook unsets `LESSONS_BASE`; `--base` refuses a base that does not resolve | **Done** | pre-commit line 7. `LESSONS_BASE=<a dangling commit of the staged tree> git commit` and `LESSONS_BASE=nonsense git commit`, each removing Math's ask: both *refused*. A benign commit with `LESSONS_BASE=nonsense` lands (the variable is ignored). `--base nonsense` exits 1 ("the base nonsense is not a commit"). Latent: `collectCommittedDesigns` (designs.mjs 89-90) catches `BASE()`'s throw and returns "nothing committed". The run is red only because the lock read (validate-lessons 15) throws first. |
| 4 | V80 holds `readingShare` only on write; controls for both sides | **Partly** | rules-shape 481. On a live run, Psychology's subject record set to 0.3 is refused by V80 ("readingShare is 0.3 and the design record's is 0.2"). The green control is at controls-table 123. There is no red control: with the check switched off (`if (false)`), all 238 controls stay green. |
| 5 | Say what lifts a forbidden read in `opened.asks` | **Done** | rules-design 90: "a forbidden read listed under asks holds it for good". |
| 6 | The engine's code is never erased; narrow `ASKS_OK` | **Partly** | Done: `FORBIDDEN_EVERYWHERE` (design-shape 159-161) adds `docs/learner-view/`, `public/`, `tests/` and `tools/`. Each was refused under Geography's `asks`: another subject's learner view, `public/app/engine.js`. Once committed under Psychology's `asks`, the engine read could not be taken off (*refused*). Not done (K3, item 4): <br>- `ASKS_OK` (158) still ends in the general `[^/\s]+\/[^/\s]+\.md`. Under Geography's `asks`, `docs/build-subject-audit.md` was committed as owner material, and so would be `docs/lesson-standard.md` and `docs/learning-science.md` (probed). <br>- `old-lessons:` admits any path. `old-lessons:public/subjects/math/` under Geography's `asks` was committed. <br>- Removing the four new forbidden classes leaves all 238 controls green. |
| 7 | `sameWords` in `blanketProblems`; `sameWords` keeps letters outside a to z | **Partly** | The check across subjects now ignores punctuation: Geography "looks right for geography again", then Psychology "Looks right, for geography again!", was *refused*. But: <br>- it is an inline copy of the normalization (rules-design 110), not `sameWords`; <br>- `sameWords` (design-shape 103) still drops every character outside a to z and 0 to 9, so `sameWords("Да", "Нет")` and `sameWords("👍", "✅")` are both true; <br>- reverting line 110 to the old compare leaves every control and reader check green. |
| 8 | Geography: place "two sittings"; borders on the list or out of the promise | **Done** | The topics list has "what a place borders: its neighbors on the map". The test ends "All of it on two sittings at least a week apart" (K4). |
| 9 | Text | **Mostly** | Done: <br>- "where no session edits the runner" is gone; <br>- `cherry-pick`, `rebase` and `am` are named (SKILL 107-108); <br>- the standard's V71 row; <br>- no "shown as dropped" is left in the skill, the tests, the tools or the standard. <br>Left: <br>- the new SKILL 110 says the workflow "a session can edit only with the owner's word in the commit", which is false with hooks off (K3, item 1); <br>- the standard's section 11 ends at "rounds four to six", with no entry for this commit's rule changes; <br>- the V69 row does not say that an ask's topics only grow. |

Four are done, one is mostly done and four are partly done. Nothing is red.

### K2. The attacks

- **(a) Approve with made-up words** (Geography, through the tool): committed. Named.
- **(b) Remove a record or an ask through the index** (`git rm --cached`; a staged removal with the working file restored;
  `commit -a` with the record deleted): all *refused*.
- **(c) Change an ask's words:** a reworded ask, an owner word edited in place, and `biases` flipped to dropped under its
  keep word: all *refused*.
- **(d), (e), (j), (k), (l), (m), (o), (p), (t), (x):** not run again. The code they reach did not change in 21da9cf:
  - `tried.mjs` and `designs.mjs` (how a review is read and dated);
  - the redesign holds;
  - gate order.

  Part J's results stand. The named ones stay named.
- **(f) A hooks-off branch on push** (run here as the workflow step):
  - a push to an existing branch: *red*;
  - a branch's first push: *red* (new);
  - a force-push to a branch: *red* (new);
  - a force-push to main: the range is empty, nothing is checked, and the step exits 0. Named as history rewriting and
    the owner's branch protection (SKILL 108, 112). But the workflow's own comment says a force-push's commits are
    checked.
- **(g') The checker edited in the same hooks-off commit.** On a branch from main, one `--no-verify`-style commit with no
  owner line did three things:
  - `tools/design/owner-line.mjs` exits 0 at its top;
  - `askedSinceProblems` skips Math;
  - Math's `primes-factors` is removed.

  The push step exited 0. The parent's `owner-line.mjs` run on the same commit refuses it ("changes the gates
  (tests/lessons/design-shape.mjs, tools/design/owner-line.mjs)"). Not named (K3, item 1).
- **(h) Re-fingerprint a changed screen** (South America cut from Geography, `fp` recomputed, same words): *refused*
  twice, once because the ask lost a topic and once because the approval was edited.
- **(n) Rewrite a reviewed lesson and reuse the review:** `tried.mjs` *refused* it.
- **(q) Clear, then re-approve with the same words and new punctuation:** *refused* by the tool and by hand.
- **(s) An invented history entry with a made-up `fp`:** committed. Named (SKILL 113-114).
- **(u) A built subject's sentence changed while the approval is null:** committed. Right.
- **(v) Approve Psychology, then write another sentence into the subject record:** *refused* by V80 and by V69's hold.
- **(w) Approve Psychology, leave the subject record alone:** committed. Right.
- **(y) Take things off `opened.asks`, or list them:**
  - another subject's learner view or the engine's code under Geography: *refused* (new);
  - the engine read, once committed under Psychology, taken off: *refused* (new);
  - `docs/build-subject-audit.md` as owner material: *committed*. Not named (K3, item 4);
  - another subject's `old-lessons:` path: *committed*. Not named (K3, item 4).
- **(z2) The workflow edited to `echo skipped`:**
  - with the hooks on and no owner line: *refused*;
  - with `"sure"`: committed. Named.
  - With the hooks off, the edited workflow is the one GitHub runs for that push, so nothing asks for the line. The skill
    says otherwise (K3, item 1).
- **(z3) A hand-written `approved.goal.sentence`:** *refused*.
- **(z4) Swap a topic of Psychology's `biases`:** *refused* (new).
- **(z5) The base from the environment** (a dangling commit, or `nonsense`): *refused* (new).
- **(z6) `readingShare`:**
  - Psychology's design changed with no approvals: *refused* ("gate 3 changed ... without the owner's word").
  - Its subject record changed: V80 *refuses*.
- **(z7) The same words on two subjects, new punctuation:** *refused* (new). Two different replies in a non-Latin script
  or in emoji read as the same words: a false refusal (probed on `sameWords`).
- **(z8) An evil merge.** A `--no-ff` merge with the hooks off added a line to `SKILL.md` and carried no owner line. The
  push step exited 0, because `owner-line.mjs --commit` lists nothing for a merge commit. `git diff-tree --cc
  --name-only` lists `SKILL.md`. Not named (K3, item 2).

### K3. What the fixes broke or missed

1. **The push runs each commit's own check** (g'; z2 with the hooks off). At each commit the loop checks out that commit
   and runs its `tools/design/owner-line.mjs`. A hooks-off commit that also edits the check passes. The fix is to run the
   parent's version (`git show "$parent:tools/design/owner-line.mjs"`): a commit that changes the check is then judged
   by the check it changes. The workflow file itself cannot be held this way, because GitHub runs the copy in the pushed
   commit. SKILL 110 ("which a session can edit only with the owner's word in the commit") is true only with the hooks
   on. Only the owner's setting holds the workflow: a required check from a protected source.
2. **A merge commit's files are not read** (z8). `diff-tree -r --root <merge>` prints nothing for a merge, so an evil
   merge that changes the gates needs no owner line on push. The yml's comment says "merge commits included". For a
   commit with more than one parent, `--cc` lists what the merge itself changed.
3. **A force-push to main checks nothing and passes** (f). `BEFORE` is not an ancestor, and `origin/main` is the pushed
   head, so the range is empty. The step should fail when a push moved the branch and the range lists no commit, or
   when `rev-list` fails. It should not report green over nothing.
4. **Gate 0's allow-list is wider than the skill.** SKILL 205-207 name the owner's messages, briefs, course documents,
   records of their words and "the version they used". `ASKS_OK` also admits:
   - any `docs/<name>.md`: the audit (which quotes other subjects' records), the standard, `learning-science.md`;
   - any path at the tag `old-lessons`, so another subject's old lessons, or the engine as it was.

   Those are the anchoring reads D14 is about. Course documents live outside `docs/` (`psychology/…`,
   `political-ideologies/…`). The general pattern can exclude `docs/`, and `old-lessons:` can be held to
   `old-lessons:public/subjects/<id>/`.
5. **Three new guards have never been seen to go red:**
   - V80's `readingShare` on write: J5 asked for this control.
   - The four new forbidden classes.
   - The punctuation-blind compare across subjects.

   Each was switched off on the scratch copy, and the 238 controls and 297 reader checks stayed green.
6. **`sameWords` drops every letter outside a to z** (z7). It is used in three places and copied into a fourth, so
   the false refusal ("Да" and "Нет" are the same words) reaches every approval. Unicode letters and digits
   (`\p{L}\p{N}`) keep the intent.
7. **Latent: an unresolvable base still reads as "nothing committed" in one function** (`collectCommittedDesigns`,
   designs.mjs 90). It is masked today by the order of the reads.
8. **Text:**
   - SKILL 110, as in item 1;
   - the standard's section 11 entry for 21da9cf;
   - the V69 row's "topics only grow".

### K4. The two screens the owner reads

**Psychology** (`approve.mjs psychology goal --show`: 4,551 characters, 747 words; unchanged since part I):
- *True to its record:* yes.
- *Readable:* fair. "Projection" is listed twice.
- *Does the test reach every topic group?* Yes.
- *Verdict:* it can go out. Its length is the owner's call.

**Geography** (3,368 characters, 674 words):
- *True to its record:* yes.
- *Does the test reach every topic group?* Yes. "What a place borders" is now on the list, and the sentence, the
  paragraph and the test agree on borders and water.
- *Readable:* good.
  - "All of it on two sittings at least a week apart" closes the test and governs all of it.
  - One small point: Placing's parenthetical (states, cities, countries, seas, rivers, mountain ranges) leaves out
    provinces, deserts and oceans, although "every list" covers them.
- *Verdict:* it can go out.

### K5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. The push runs the parent commit's `owner-line.mjs` on each commit, not the commit's own. SKILL 110 then says the
   workflow file runs from the pushed commit, so its own edit is held only by the owner's setting.
2. `owner-line.mjs --commit` reads a merge commit's own changes with `diff-tree --cc`.
3. The per-commit step fails when the push moved the branch but the range lists nothing (a force-push to main), or when
   `rev-list` fails.
4. Narrow `ASKS_OK`: no `docs/<name>.md` through the general pattern, and `old-lessons:` only under
   `public/subjects/<id>/`.
5. Seeded faults for V80's `readingShare` on write, the new forbidden classes, the narrowed `ASKS_OK` and the compare
   across subjects.
6. `sameWords` keeps every letter and digit (`\p{L}\p{N}`), and `blanketProblems` calls it instead of a copy.
7. `collectCommittedDesigns` lets a bad base throw rather than reading "nothing committed".
8. Text: the standard's section 11 entry for 21da9cf, and the V69 row's "topics only grow".

Named, rests on honesty:
- Invented owner words: (a), a drop with invented words, (d), (g), (p), and (z2) with an owner line.
- A self-written record review (j); a review's fingerprint or date line written by hand (k, t).
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting, including a force-push to main, until the owner's branch protection.
- The fingerprints of `approved.history` entries are the record's own claims (s).
- The validator and its controls edited together under an owner line.

For the owner:
- Branch protection on `main`: a required "lesson tier" check and no force-push. GitHub runs the workflow from the
  pushed commit, so a ruleset that requires the workflow from a protected branch is the only thing that holds the
  workflow file itself. (Carried over, widened.)
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics now only grow. Rewording a topic an ask sits under needs your word on that ask, even when you have
  re-approved the screen. Is the re-approval enough?
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part L. The ninth review (2026-10-12)

An independent review of 575563e ("the skill's eighth review answered"), by an agent that did not write it, against
part K's eight fixes (K5). Line numbers are `SKILL.md`'s at 575563e. **`npm test` is green**: 297 design reader checks,
48,520 lesson checks, 243 seeded faults (the pin is 243). Every attack was run on a scratch copy (`git archive HEAD`,
its own `git init`, `npm run hooks`), never on the real records. The push workflow's per-commit step was taken out of
`lesson-tier.yml` as written and run on a fresh clone of a bare copy of the scratch repo, with the event's values
filled in. It was also run on a bare clone of this repository, with `main` moved to 575563e from `origin/main`
(d03b63f), which is the push that lands this work.

What is better, briefly:
- The parent's copy of the owner-line check holds. A hooks-off commit that makes `owner-line.mjs` exit 0 at its top,
  with no owner line, is *red* on push ("changes the gates (tools/design/owner-line.mjs)").
- A hooks-off `--no-ff` merge that brings a gate change in is *red* on push. Locally, the commit-message hook refuses
  the same merge.
- A force-push to `main` is *red* now. Before, it checked nothing and passed.
- Gate 0 refuses two sources by path: the audit and another subject's old lessons.
- `sameWords` keeps Cyrillic: "Да" and "Нет" are different words now.
- A bad base throws in `collectCommittedDesigns`.

What is left falls in three groups:
- The step cannot pass on the push that lands this work on `main`. Two causes:
  - it replays commits made before the gates existed;
  - a squash or merge commit fails 32 V69 checks against `main`'s older records.
- The new merge reading turns every pull request that changes a gate red, because GitHub's merge commit carries no
  owner line. The new "nothing new" rule turns red a branch made at `main` and every tag push.
- One guard still has no seeded fault, one false refusal remains, and some lines of text do not match the code.

### L1. K5's eight items

| # | K5 item | Status | Evidence |
|---|---|---|---|
| 1 | The push runs the parent's `owner-line.mjs`; SKILL says the workflow file runs from the pushed commit | **Done, with a break** | yml 33-35. Attack A: a hooks-off commit that neuters the tool, on a branch's first push: *red*. SKILL 113-114 now says the workflow runs from the pushed commit. Broke (L3, item 1): when the parent has no `tools/design/owner-line.mjs`, `git show` fails and the step exits 128. Tried on scratch: "path 'tools/design/owner-line.mjs' exists on disk, but not in <parent>". `origin/main` has no tool, so the first commit that brings the tool to `main` cannot pass. |
| 2 | `owner-line.mjs --commit` reads a merge's changes | **Done, with a break** | owner-line 12-17 diff against `sha^1`. A hooks-off `--no-ff` merge of a gate change, with no line: *red* on push. Broke (L3, item 2): on `pull_request`, `actions/checkout` checks out GitHub's merge commit ("Merge <head> into <base>"). That commit is in `origin/main..HEAD`, has no owner line, and its first-parent diff is the whole pull request. Tried: a branch whose only commit carries an owner line is green on push and *red* as a pull request. The code reads everything the merge brings in, while SKILL 112 says "a merge's own changes". |
| 3 | Fail when the range lists nothing or cannot be listed | **Done, with a break** | yml 24-25. A force-push to `main` (an amended commit) and a reset: *red*. Broke (L3, item 3): a new branch pushed at `main`'s head and a tag push also give an empty range. Both are *red* with "history was rewritten", and nothing was rewritten. `on: [push, …]` runs on tags. |
| 4 | Narrow gate 0's sources | **Mostly** | design-shape 162-163. Under Geography's `asks`, two paths were *refused* on commit: `docs/build-subject-audit.md` and `old-lessons:public/subjects/math/`. `old-lessons:public/subjects/geography/` was committed. Every real record still passes. Left (L3, item 6), SKILL's text: <br>- The gate 0 row (129) still has an empty "Must not open" cell. <br>- Step 1 (210) still admits "a plan made at their request". The code refuses any `docs/` plan except the worklist and the handoff: `docs/geography-plan.md` is refused. |
| 5 | Seeded faults for `readingShare` on write, the forbidden classes, the narrowed sources and the compare across subjects | **Partly** | Each guard was switched off on scratch: <br>- V80's `readingShare` check off: its new control fails ("expected red [V46, V80], got [V46]"). <br>- `asksOk` back to the wide pattern: two controls fail. <br>- `blanketProblems` back to `toLowerCase().trim()`: one control fails. <br>- The four forbidden classes taken out of `FORBIDDEN_EVERYWHERE` (learner views, `public/`, `tests/`, `tools/`): all 243 controls and 297 reader checks stay green (L3, item 4). |
| 6 | `sameWords` keeps every letter and digit; `blanketProblems` uses it | **Mostly** | design-shape 102 (`wordsKey`), rules-design 110. `sameWords("Да","Нет")` is false. Left (L3, item 5): <br>- A reply with no letter or digit keys to "", so `sameWords("👍","✅")` is still true. <br>- Putting back `[^a-z0-9]` leaves every control and reader check green. |
| 7 | A bad base throws in `collectCommittedDesigns` | **Done** | designs.mjs 88. With `LESSONS_BASE=nonsense` the function throws "the base nonsense is not a commit of this repository"; `--base nonsense` exits with that message. |
| 8 | Text: the standard's revision entry; the V69 row; Geography's placing list | **Mostly** | Done: <br>- the V69 row says "the topics an ask is taught under only grow"; <br>- Geography's Placing names states and provinces, oceans and seas, and deserts. <br>Left: the standard's section 11 entry now says "rounds four to eight", but its body names none of the rules from rounds seven and eight: <br>- topics only grow; <br>- the narrowed gate 0 sources; <br>- forbidden reads never erased; <br>- the same words across subjects; <br>- the parent's check on push; <br>- the empty range. |

Two are done and three are done with a break; three are mostly or partly done. Nothing is red.

### L2. The attacks

- **(a) Approve with made-up words:** not run again (no change). Named.
- **(b), (c), (h), (n), (q), (z3), (z4):** not run again. The code they reach changed only in `sameWords`, and the
  controls for (q) and (z7) are green. Part K's results stand.
- **(d), (e), (j), (k), (l), (m), (o), (p), (s), (t), (u), (v), (w), (x):** not run again; the code they reach did
  not change in 575563e. The named ones stay named.
- **(f) A hooks-off branch on push** (the step as written):
  - first push of a commit that neuters `owner-line.mjs`, no line: *red* (new, the parent's copy);
  - a hooks-off merge of a gate change: *red* (new);
  - a hooks-off ask removal (Math's `primes-factors`): *red*; with the hooks on: *refused*;
  - a force-push to `main`: *red* (new);
  - a branch made at `main`, and a tag push: *red*, falsely (L3, item 3).
- **(f2) Three pushes to one branch.** First, the neutered tool: *red*. Then a hooks-off merge of a gate change with no
  line: *green*, because only the new commit is checked, and it is checked with its parent's neutered copy. Then the
  ask removal: *red*. Every push to `main` covers the whole branch. Named: SKILL 108-115 rest on the owner's branch
  protection.
- **(g') The checker edited in a hooks-off commit:** *red* (new). With an invented owner line on that commit, every
  later commit on the branch is judged by the loosened copy. Named as an invented quote.
- **(y) Gate 0's sources:**
  - the audit by path: *refused* (new);
  - another subject's `old-lessons:`: *refused* (new);
  - this subject's `old-lessons:`: committed. Right.
  - the audit by its GitHub URL (`https://github.com/dimmonk/personal-lessons/blob/main/docs/build-subject-audit.md`):
    committed. Named: what was opened is the session's own account (SKILL 139).
- **(z2) The workflow edited, hooks off:** GitHub runs the edited copy. Named (SKILL 113-114). The text says a
  "branch protection" holds it (L3, item 6).
- **(z5) A base that is not a commit:** *refused*, in both readers now.
- **(z7) Two replies with no letter on two subjects** (👍, then ✅): read as the same words, a false refusal (L3,
  item 5).
- **(z8) An evil merge, hooks off:** *red* (new).
- **(z9) The push that lands this work on `main`** (bare clone, `main` moved from d03b63f to 575563e):
  - fast-forward or rebase: *red* at the first commit, 8c027f1, whose validator says "unknown argument: --base";
  - a squash onto d03b63f: *red* with 32 V69 refusals, four per subject. Examples: "tried.pilot was taken away" and
    "approved.practice was changed ... without the entry that stood going to approved.history". `main`'s records are
    in the shape before the redesign;
  - a pull request: the same range as a fast-forward, so *red*.

  Not named (L3, item 1).

### L3. What the fixes broke or missed

1. **The step cannot pass on the push that lands this work** (z9). Parts J and K tried the step only on a scratch
   repo whose base already held every tool. The per-commit loop replays every commit that is not on `main`, and
   commits made before the gates existed fail:
   - the validator before fece38c does not know `--base`;
   - from 575563e on, a parent without `tools/design/owner-line.mjs` makes `git show` exit 128.

   A squash or a merge commit instead compares against `main`'s records from before the redesign and fails 32 V69
   checks. A required "lesson tier" check would therefore block this branch on every route.

   The end-game fix:
   - The per-commit check starts at the first commit whose parent carries the workflow and the tool. Earlier commits
     predate the gates, and the skill says so.
   - The skill names how this branch lands: by fast-forward or rebase, so that each commit is checked against its
     own parent.
2. **Every pull request that changes a gate is red** (fix 2). GitHub's merge commit is in the range and has no owner
   line. Its first-parent diff is the whole pull request. The same holds for a "Merge pull request" commit pushed to
   `main`, unless the owner types the line into it.

   Reading a merge's own changes (`git diff-tree --cc --name-only`) holds the evil merge (z8) and passes a clean
   merge. It is also what SKILL 112 says ("a merge's own changes"). The commits a merge brings in are in the range
   and checked one by one.

   On `pull_request`, the step could also check the head's commits (`origin/<base>..<head sha>`) rather than
   GitHub's merge commit.
3. **"Nothing new" is red where nothing was rewritten.** A branch pushed at a commit already on `main`, and any tag
   push, fail with "history was rewritten". The push payload says whether a push was forced (`github.event.forced`).
   Fail an empty range only on a forced push, and run the workflow on branch pushes only.
4. **The forbidden classes are still never seen red.** Their only effect of their own is in `erasable`: they stop a
   read of the engine, the tools, the tests or a learner view from being taken off `opened.asks`. Every other list
   refuses those paths through its own allow-list. Seeded fault: such a read committed under `asks`, then taken off.
5. **`sameWords` still makes a false refusal.** A reply with no letter or digit (👍, ✅) keys to "". Fix: compare the
   trimmed text when either key is empty. Add a reader check or control that pins the `\p{L}\p{N}` key; today
   reverting it leaves everything green.
6. **Text:**
   - SKILL 129 and 210 do not match `asksOk`:
     - name the worklist, the handoff and this subject's record, not "a plan made at their request";
     - fill gate 0's "Must not open": an audit, a research note, code, the tools, another subject's old lessons or
       learner views.
   - SKILL 112: "a merge's own changes" (item 2).
   - SKILL 114: "the branch protection on `main`". A required status check does not hold the workflow file: the
     edited workflow still reports the check. Only a ruleset that runs the workflow from `main` does.
   - The standard's section 11 entry for rounds seven and eight (L1, item 8).

### L4. The two screens the owner reads

**Psychology** (`approve.mjs psychology goal --show`: 4,551 characters, 747 words; its record has not changed since
part K):
- *True to its record:* yes.
- *Readable:* fair. "Projection" is listed twice.
- *Does the test reach every topic group?* Yes.
- *Verdict:* it can go out. Its length is the owner's call.

**Geography** (3,402 characters, 679 words):
- *True to its record:* yes.
- *Does the test reach every topic group?* Yes. Placing now names every kind of list: states and provinces, cities,
  countries, oceans and seas, rivers, mountain ranges, deserts. Borders and water, flags, naming, judging and
  distance are each in both the sentence and the test.
- *Readable:* good. Small points:
  - the paragraph says "a place that is pointed at", and the sentence says "a place that is lit";
  - Placing leaves out continents and regions, which the world-first topic teaches.
- *Verdict:* it can go out.

### L5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. The per-commit step starts where the gates start: commits whose parent lacks the workflow or the tool are not
   replayed. The skill names how this branch lands on `main`, by fast-forward or rebase. As written, every route is
   red (z9).
2. `owner-line.mjs --commit` reads a merge's own changes (`--cc`), not its whole first-parent diff. As written, every
   pull request that changes a gate is red.
3. Fail an empty range only on a forced push (`github.event.forced`), and do not run the workflow on tag pushes. As
   written, a branch made at `main` and a tag push are red.
4. A seeded fault for the forbidden classes: a read of the engine, the tools or a learner view, taken off
   `opened.asks`.
5. `sameWords`: a reply with no letter or digit (👍 against ✅) must not read as the same words. Pin the
   `\p{L}\p{N}` key with a check.
6. Text:
   - SKILL 129 and 210, gate 0's sources as the code holds them;
   - SKILL 112, "a merge's own changes" (after fix 2);
   - SKILL 114, which setting holds the workflow file;
   - the standard's section 11 entry for rounds seven and eight.

Named, rests on honesty or on the owner's setting:
- Invented owner words. This includes one invented line on an edit of `owner-line.mjs`, after which the branch's
  later commits are judged by the loosened copy.
- A self-written record review; a review's fingerprint or date line written by hand.
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting until the owner's branch protection. A branch whose earlier push was red can go green on a later
  push, which checks only the new commits; a push to `main` checks them all.
- The workflow file edited with the hooks off: GitHub runs the edited copy.
- What was opened is the session's own account. The audit listed by its GitHub URL passes gate 0's check.
- The fingerprints of `approved.history` entries are the record's own claims.
- The validator and its controls edited together under an owner line.

For the owner:
- Branch protection on `main`: a ruleset that runs the "lesson tier" workflow from `main` (a required status check
  alone does not hold the workflow file), and no force-push. (Carried over, sharpened.)
- When a merge brings in commits that each carry your word, should the merge commit need your word again? Fix 2
  says no; the code today says yes.
- How this branch reaches `main`: fast-forward or rebase, after fix 1.
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics only grow: is a re-approved screen enough to reword a topic an ask sits under? (Carried over.)
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part M. The tenth review (2026-10-12)

An independent review of 68bd7df ("the skill's ninth review answered"), by an agent that did not write it, against
part L's six fixes (L5). Line numbers are `SKILL.md`'s at 68bd7df. **`npm test` is green**: 300 design reader checks,
48,520 lesson checks, 245 seeded faults (the pin is 245). Every attack was run on a scratch copy (`git archive HEAD`,
its own `git init`, `npm run hooks`), never on the real records. The push workflow's per-commit step was cut out of
`lesson-tier.yml` as written (the `run:` block, with the event's values filled in) and run on a fresh clone of a bare
copy of the scratch repo. It was also run on a bare clone of this repository with `main` at d03b63f, which is the push
that lands this work, and with `main` moved to 68bd7df, for what comes after.

What is better, briefly:
- This branch now passes end to end. The 13 commits before the gates are skipped, and 21da9cf, 575563e and 68bd7df
  each pass against their parent.
- A clean merge of an approved gate change is green on push. An evil merge that adds a line to `SKILL.md` is *red*.
- A forced push to `main` is *red*. A branch made at `main`'s head is green ("nothing new to check"). Tags no longer
  run the workflow (`branches: ['**']`).
- A read of the engine's code or of a learner view, taken off `opened.asks`, is *red* under a seeded fault.
- "👍" and "✅" are two replies, and a check pins it.

What is left falls in three groups:
- The skip test reads the commit's own tree. One hooks-off commit can mark itself, and every commit after it, as
  "from before the gates".
- `--cc` misses an evil merge that takes the other side's version of a file. A merge that brings in skipped commits
  carries their gate changes in with no owner line. The commit-message hook still holds a merge to everything it
  brings in.
- One guard and one key are still never seen red. Some text is still not done.

### M1. L5's six items

| # | L5 item | Status | Evidence |
|---|---|---|---|
| 1 | The per-commit step starts where the gates start; the skill names how this branch lands | **Done, with a break** | yml 34-35. R1: this branch's range `d03b63f..68bd7df` gives 13 commits skipped, and 21da9cf, 575563e and 68bd7df each green (exit 0). <br>Broke (M3, item 1): whether a commit "predates the gates" is read from the commit's own tree. <br>Not done: no text says how this branch lands. R2: as a pull request, GitHub's merge commit is checked against `main` (d03b63f) and fails 32 V69 checks. A squash fails the same way (part L, z9). The commit message says "the skill says how", but SKILL 114 only says that early commits are skipped. |
| 2 | `owner-line.mjs --commit` reads a merge's own changes (`--cc`) | **Done, with a break** | owner-line 11-18. A4: a clean `--no-ff` merge of a commit that carries the owner's word, with no line on the merge, is green on push. A5: an evil merge adding a line to `SKILL.md` is *red*. <br>Broke (M3, items 2 and 3): <br>- A5b, an evil merge that takes the other side's version, is green. <br>- A9, a merge that brings in skipped commits, needs no owner line. <br>- The hook still refuses the clean merge of A4 locally ("this commit changes the gates (.claude/skills/build-subject/SKILL.md)"). |
| 3 | An empty range fails only on a forced push; no tag pushes | **Done** | yml 6-9, 28-31. A7: a forced push to `main` (amended) is *red*: "a forced push after which nothing is new against main". A8: a branch pushed at `main`'s head, not forced, prints "nothing new to check" and exits 0. With only `branches` set, GitHub runs no workflow for tags. |
| 4 | A seeded fault for the forbidden classes | **Mostly** | controls-table 153-154. Each class was taken out of `FORBIDDEN_EVERYWHERE` (design-shape 165-167) in turn: <br>- the engine (`public/`): one control fails; <br>- a learner view: one control fails; <br>- `tests/` and `tools/`: all 245 controls and 300 reader checks stay green (M3, item 4). |
| 5 | `sameWords`: a reply with no letters is not the same words; pin the `\p{L}\p{N}` key | **Partly** | design-shape 102-104, design-pure 62-64. Done: `sameWords('👍','✅')` is false. With the fallback taken out, "two replies with no letters are two replies" fails. <br>Not done: with the key put back to `[^a-z0-9]` and the fallback kept, every control and reader check stays green. The check named "letters of any script count" also passes under the ASCII key, because "Très" keys to "tr s" on both sides. Under that key, "OK да" and "OK нет" read as the same words (M3, item 5). |
| 6 | Text: gate 0's sources at SKILL 129 and 210; "a merge's own changes"; the setting that holds the workflow; the standard's entry | **Partly** | Done: <br>- step 1 (SKILL 210-213) names the sources as `asksOk` holds them; <br>- SKILL 112-113 say "a merge is held only for its own changes"; <br>- SKILL 115-116 say a ruleset that requires this check, runs it from `main` and forbids force-pushes. <br>Not done: <br>- the gate 0 row of "What may be opened" (SKILL 131) still has an empty "Must not open". Its "May open" still lacks the worklist, the handoff and this subject's record, and still does not say "this subject's" old lessons; <br>- the standard's section 11 entry now says "rounds four to nine", but its body is the same four lines. It still names none of the rules from rounds seven to nine: topics only grow, the narrowed gate 0 sources, a forbidden read never erased, the same words across subjects, the parent's check on push, a merge's own changes, the forced-push rule, the skip of commits from before the gates. |

One is done, two are done with a break, one is mostly done and two are partly done. Nothing is red.

### M2. The attacks

- **(a) to (e), (h), (j) to (p), (s) to (x), (z3) to (z6):** not run again. The code they reach did not change in
  68bd7df: `rules-design`, `designs`, `rules-shape`, `paths`, `approve`, the records and the fixture are the same as
  at 575563e. Part K's and part L's results stand, and the named ones stay named.
- **(q), (z7) The same words, new punctuation, on one subject or two:** their controls are green on the new key.
  A reply with no letters is compared as typed, so "👍" and "👍!" are two replies. That is the comment's stated
  choice (design-shape 102). Reusing a reply is invented owner words, which is named.
- **(f) A hooks-off ask removal** (Math's `primes-factors`, with `owner-line.mjs` made to exit 0, first push): *red*
  at the lesson tier.
- **(g') The checker edited in a hooks-off commit** (the tool made to exit 0, a line added to `SKILL.md`): *red*,
  judged by the parent's copy.
- **(g2) The tool deleted in a hooks-off commit, with the ask removed (new, A2):** "predates the gates: skipped". The
  step exits 0, and `npm test` at the head is green. Not named (M3, item 1).
- **(g3) `--base` spelled `-\-base` in `paths.mjs`, with the ask removed (new, A3b):** same result. The validator
  still takes `--base`. The commit is skipped, and so is every later commit that carries the file. Not named (M3,
  item 1).
- **(z8) An evil merge that adds a `SKILL.md` line (A5):** *red*.
- **(z8') An evil merge that takes the other side (new, A5b).** `main` gets an approved change to
  `tests/lessons/design-shape.mjs`. A branch from before that change is merged with the hooks off, the file is
  resolved to the branch's version, and the merge has no owner line. The approved change is reverted, and the push is
  green. `--cc` lists nothing; the first-parent diff and `git show --remerge-diff` both list the file. Not named (M3,
  item 2).
- **(z9) This branch lands:**
  - as a first push, or a fast-forward of `main` (R1): green;
  - as a pull request (R2): *red*, 32 V69, because GitHub's merge commit is measured against `main`'s pre-redesign
    records;
  - as a squash: *red* (part L).

  The text names no route (M3, item 6).
- **(z10) A clean merge of an approved gate change (A4):** green on push. Locally, with the hooks on, the
  commit-message hook *refuses* it (M3, item 3).
- **(z11) An old fork merged after this lands (new, A9).** On a bare clone with `main` at 68bd7df, a branch from
  d03b63f has one hooks-off commit, with no owner line, that edits `tests/lessons/rule.mjs`. It is merged with
  `--no-ff`. That commit "predates the gates" and is skipped. The merge's `--cc` is empty, so the push is green. The
  real branch `pilot-fixes-2026-10-12` is such a fork: it is based at d03b63f and changes four gate files
  (`controls-table`, `rules-lesson`, `rules-shape`, `shapes`). Not named (M3, item 2).
- **(z12) The forced-push rule (A7, A8):** a forced push to `main` is *red*. A branch at `main`'s head is green.
  Right.
- **(f2), (z2):** a branch's later push checks only its new commits, and GitHub runs the edited workflow file. Both
  are named (SKILL 114-116).

### M3. What the fixes broke or missed

1. **The skip test can be chosen by the commit it skips** (g2, g3). Line 35 asks whether *this* commit's tree has
   `tools/design/owner-line.mjs`, and whether its `paths.mjs` contains the text `--base`. A hooks-off commit decides
   both. It can delete the tool, or spell the flag another way, and then it is never checked, along with every commit
   after it that keeps the change. The tiers at the head cannot see what such a commit removed, because at the head
   "since the last commit" is the head itself. The fix is to decide by ancestry against a fixed point: name the first
   gated commit (21da9cf) in the workflow, and skip a commit only when it does not descend from that commit
   (`git merge-base --is-ancestor`). A later commit cannot change its ancestry.
2. **A merge's own changes are read too narrowly** (z8', z11):
   - `diff-tree --cc` lists a path only when the result differs from every parent. A merge that resolves a gate file
     to the other side's version, which git's own merge would not do, shows nothing.
     `git diff-tree --remerge-diff --name-only <merge>` (git 2.36 and later) compares the merge with git's automatic
     result. On the three merges tried, it lists exactly the right files: none for A4, `SKILL.md` for A5, and
     `design-shape.mjs` for A5b.
   - "What it brings in was checked on the commits that made it" is false for commits the step skips. A merge
     whose second-parent side holds a skipped commit should be held to its whole first-parent gate diff.
3. **The hook and the push now disagree on merges** (z10). In `--staged` mode, `owner-line.mjs` reads
   `git diff --cached` against HEAD. That is everything the merge brings in, so a session that merges `main` into a
   branch, as 21b726a did, needs a fresh owner line, or `--no-verify`, for gate changes that already carry the owner's
   word. The skill says a merge is held only for its own changes. During a merge (`MERGE_HEAD` exists), the hook can
   compare the staged tree with the automatic merge (`git merge-tree --write-tree HEAD MERGE_HEAD`), which is the same
   reading as `--remerge-diff`.
4. **The `tests/` and `tools/` forbidden class is never seen red.** Its only effect of its own is in `erasable`. With
   it removed, all 245 controls stay green. It needs a seeded fault: a read of `tools/design/approve.mjs` committed
   under `asks`, then taken off.
5. **The `\p{L}\p{N}` key is not pinned.** The check meant to pin it, "letters of any script count", passes under the
   ASCII key too. A check that does fail there: `!sameWords('OK да', 'OK нет')`.
6. **Text:**
   - The gate 0 row (SKILL 131) should be filled as step 1 now reads.
   - Name how this branch lands, in the skill's account of the push or in the handoff: by fast-forward of `main`. A
     pull request or a squash is red against `main`'s records from before the redesign.
   - The body of the standard's section 11 entry should name the rules from rounds seven to nine.

### M4. The two screens the owner reads

Neither record has changed since 575563e, which part L reviewed. `approve.mjs <id> goal --show` prints the same text:
Psychology at 4,551 characters (747 words), Geography at 3,402 characters (679 words). Part L's readings stand:
- **Psychology:** true to its record. The test reaches every topic group. Readable: fair, and "projection" appears
  more than once. *Verdict:* it can go out. Its length is the owner's call.
- **Geography:** true to its record. The test reaches every topic group. Readable: good. The paragraph's "pointed at"
  and the sentence's "lit" are the same act in two words. *Verdict:* it can go out.

`docs/research/designing-a-subject.md` and the skill's "What the gates rest on" did not change in 68bd7df. There is
no new finding there.

### M5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Decide "from before the gates" by ancestry against a commit named in the workflow (21da9cf), not by the commit's
   own tree. As written, one hooks-off commit that deletes the tool or respells `--base` exempts itself and every
   later commit (g2, g3).
2. Read a merge's own changes with `--remerge-diff`, not `--cc`. Hold a merge that brings in skipped commits to its
   whole first-parent gate diff (z8', z11).
3. The commit-message hook reads a merge's own changes the same way, against the automatic merge (z10).
4. A seeded fault for the `tests/` and `tools/` forbidden class.
5. Pin the `\p{L}\p{N}` key with a check that fails under the ASCII key (`'OK да'` against `'OK нет'`).
6. Text:
   - SKILL 131, gate 0's row;
   - how this branch lands (fast-forward; a pull request or a squash is red);
   - the body of the standard's section 11 entry.

Named, rests on honesty or on the owner's setting:
- Invented owner words. This includes one invented line on an edit of `owner-line.mjs`, and a letterless reply
  reused with new punctuation.
- A self-written record review; a review's fingerprint or date line written by hand.
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting, until the owner's ruleset is in place. A branch's later push checks only its new commits.
- The workflow file edited with the hooks off: GitHub runs the edited copy.
- What was opened is the session's own account. The audit listed by its GitHub URL passes gate 0.
- The fingerprints of `approved.history` entries are the record's own claims.
- The validator and its controls edited together under an owner line.
- Commits from before the gates are checked only by the tiers at the head (SKILL 114).

For the owner:
- A ruleset on `main`: it requires the "lesson tier" check, runs it from `main` and forbids force-pushes. (Carried
  over.)
- Land this branch by fast-forward. As things stand, a pull request or a squash is red.
- `pilot-fixes-2026-10-12` is based on the old `main` and changes four gate files. Rebase it onto the new `main`, or
  drop it. Do not merge it as it is (z11).
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics only grow: is a re-approved screen enough to reword a topic an ask sits under? (Carried over.)
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part N. The eleventh review (2026-10-12)

An independent review of c452c30 ("the skill's tenth review answered"), by an agent that did not write it, against
part M's six fixes (M5). Line numbers are `SKILL.md`'s at c452c30. **`npm test` is green**: 301 design reader checks,
48,520 lesson checks, 247 seeded faults (the pin is 247). The mutations were run on a scratch copy (`git archive
HEAD`, its own `git init`, `npm run hooks`). The push attacks were run on a clone of this repository with a bare
"origin" whose `main` is c452c30, because the scratch copy has no 21da9cf. The workflow's per-commit step was taken out
of `lesson-tier.yml` as written (the `run:` block, with the event's values filled in). The real records were never
touched.

What is better, briefly:
- This branch passes end to end as a fast-forward of `main` from d03b63f (exit 0).
- A hooks-off commit cannot exempt itself any more. The skip is decided by ancestry, which a later commit cannot change.
- An evil merge that takes the other side's version of a gate file is *red*.
- A clean merge of an approved gate change passes the local hook.
- A read of the validator taken off `opened.asks` is *red* under a seeded fault.
- The gate 0 row is filled. The skill names how this branch lands.

What is left falls in three groups:
- Two routes put a gate change on `main` with no owner word anywhere, with the hooks off and no history rewritten, and
  the push is green:
  - a fork from before the gates, whose first commit is judged by its own copy of the check;
  - an evil merge that moves the check out of `tools/design/`. The new merge reading uses `git log`, which follows
    renames, so the merge lists only the new path.
- The hook's merge reading is not the push's. It refuses a clean merge and passes a resolution the push refuses. It
  also passes any gate file renamed out of the gated paths.
- Some items are only partly done:
  - the `tools/` forbidden class and the `\p{L}\p{N}` key are still never seen red;
  - the commit where the gates start is skipped;
  - the standard's entry still leaves out three rules.

### N1. M5's six items

| # | M5 item | Status | Evidence |
|---|---|---|---|
| 1 | Decide "from before the gates" by ancestry against 21da9cf | **Done, with a break** | yml 34-39. R1: `d03b63f..c452c30` gives 16 commits skipped; 575563e, 68bd7df and c452c30 are checked; exit 0. A2: a hooks-off commit that deletes `tools/design/owner-line.mjs` and removes Math's `primes-factors` is checked, not skipped. It is *red* at V69, and the parent's copy of the check refuses it too ("changes the gates (tools/design/owner-line.mjs)"). <br>Broke (N3, item 4): `git merge-base --is-ancestor` is true for the commit itself, so 21da9cf is skipped. It has the tool, passes against fece38c (exit 0) and carries an owner line. SKILL 114 says "ancestors of" the commit, which in plain words leaves it out. |
| 2 | `--remerge-diff`; a merge that brings in skipped commits is held to its whole first-parent gate diff | **Done, with two breaks** | owner-line 27-30, yml 47-51. A5b: `main` gets an approved change to `design-shape.mjs`; a branch from before it is merged hooks-off and the file is resolved to the branch's version. *Red* ("changes the gates (tests/lessons/design-shape.mjs)"). <br>Broke (N3, item 1): `--brought` fires only when a brought-in commit is an ancestor of 21da9cf. On `main` that never happens, because every such commit is already reachable from the first parent. A fork from before the gates is not its ancestor. It is checked commit by commit, and the first fork commit's parent has no tool, so that commit's own copy is used. <br>Broke (N3, item 2): `git log --remerge-diff --name-only` detects renames, so a gate file the merge moves out of the gated paths lists only its new path. |
| 3 | The commit-message hook reads a merge's own changes the same way, against the automatic merge | **Partly** | owner-line 18-24. Done: A4 locally (a `--no-ff` merge of an approved `stand-in-review.md` change, hooks on) is committed. <br>Not done (N3, item 3): the hook keeps the staged files that differ from *both* sides, which is the `--cc` reading, not the automatic merge. <br>- m1: both sides edit different hunks of `stand-in-review.md`, each with the owner's word. Git merges them cleanly. The hook *refuses* the merge; on push the remerge list is empty, exit 0. <br>- m2: both sides edit the same line, the conflict is resolved with `--theirs`, and side B's approved edit is discarded. The hook *commits* it; on push it is *red*. <br>The code's comment and the commit message say "read the same way". |
| 4 | A seeded fault for the `tests/` and `tools/` forbidden class | **Partly** | controls-table 154-155. With `tests/` taken out of `FORBIDDEN_EVERYWHERE`, "a read of the validator erased from the gate 0 list" fails. With `tools/` taken out, all 247 controls and 301 reader checks stay green. The new control "a lesson changed in a subject whose gate 1 opened the tools" is red through `RESEARCH_OK`, not through the class. The class's only effect of its own is in `erasable` (design-shape 192), and that needs a `tools/` read taken off `opened.asks`. |
| 5 | Pin the `\p{L}\p{N}` key with a check that fails under the ASCII key | **Not done** | design-pure 65. With the key put back to `[^a-z0-9]` and the fallback kept, every control and reader check stays green. Under the ASCII key, "été" and "ÉTÉ" both key to "t", and "ete" keys to "ete". The new check passes, and its message ("an ASCII-only key would read both as empty") is wrong. Part M's `!sameWords('OK да', 'OK нет')` was not used. |
| 6 | Text: SKILL 131; how this branch lands; the standard's entry | **Mostly** | Done: <br>- the gate 0 row (SKILL 134) matches step 1 and `asksOk`; <br>- SKILL 115-117 name the fast-forward, and a fork from before the gates is rebased or dropped; <br>- the standard's section 11 entry names most rules of rounds seven to ten. <br>Left: the entry still leaves out three rules: the narrowed gate 0 sources, a forbidden read never erased, and a forced push with nothing new failing. |

One is done with a break and one with two breaks. One is mostly done, two are partly done and one is not done. Nothing
is red.

### N2. The attacks

- **(a) to (e), (h), (j) to (p), (q), (s) to (x), (z3) to (z7):** not run again. The code they reach is the same as at
  68bd7df: `rules-design`, `designs`, `rules-shape`, `paths`, `approve`, the hooks, the records and the fixture. Parts
  K to M's results stand.
- **(f) A hooks-on ask removal** (Math's `primes-factors`): *refused* by the pre-commit hook.
- **(g2) The tool deleted in a hooks-off commit, with the ask removed (A2):** *red* at V69 and at the parent's check.
  Fixed.
- **(g3) `--base` respelled:** not run. Ancestry no longer reads the tree, and `paths.mjs` is a gate file.
- **(z8') An evil merge that takes the other side (A5b):** *red*. Fixed.
- **(z9) This branch lands:**
  - as a fast-forward (R1): green;
  - as a pull request: *red*, with 32 V69 refusals against d03b63f, which `--brought d03b63f` would also fail.

  The skill now names the fast-forward. Named.
- **(z10) A clean merge of an approved gate change, hooks on (A4):** committed. Fixed.
- **(z10') Both sides edit one gate file in different hunks, merged cleanly, hooks on (m1, new):** the hook refuses
  it, falsely. The push passes it. Not named (N3, item 3).
- **(z10'') A merge in progress with a conflict on a gate file, resolved `--theirs`, hooks on (m2, new):** the hook
  passes it. The push is *red*. Not named (N3, item 3).
- **(z11) An old fork, one hooks-off gate edit, merged `--no-ff`:** *red*, but only because the fork's validator does
  not know `--base` ("unknown argument: --base"). `--brought` never fires.
- **(z11') An old fork that supplies its own checks (new).** Three hooks-off commits on d03b63f, then `git merge
  --no-ff` into `main` at c452c30, with no owner line anywhere:
  - F1 adds empty `tools/design/owner-line.mjs`, `validate-lessons.mjs`, `negative-controls.mjs` and
    `design-pure.mjs`;
  - F2 sets the tree to c452c30's, keeps the four empty files, and appends a line to `tests/lessons/rule.mjs`;
  - F3 puts back the four real files.

  How the push reads it:
  - F1 is judged by its own empty check, because its parent has none;
  - F2 and F3 are judged by F1's and F2's empty checks;
  - the merge is clean, and its remerge list is empty;
  - none of the brought commits is an ancestor of 21da9cf.

  The step exits 0, and `npm test` at the head is green. `main` now differs from c452c30 by one line in a gate file.
  Not named (N3, item 1).
- **(z13) An evil merge that moves the check out (new).** A hooks-off `--no-ff` merge of a docs-only branch into
  `main`, which in its resolution runs `git mv tools/design/owner-line.mjs scripts/owner-line.mjs`. Its remerge list is
  `scripts/owner-line.mjs` only, so the parent's check passes it. Next comes commit C: an empty
  `tools/design/owner-line.mjs`, and a line appended to `tests/lessons/rule.mjs`. C's parent has no tool, so C is
  judged by its own empty copy. Commit D puts the real tool back, judged by C's empty copy. The step exits 0, and
  `npm test` at the head is green. At 68bd7df, `diff-tree --cc`, which detects no renames, listed the deleted path.
  Not named (N3, item 2).
- **(z14) A gate file renamed out, hooks on (new):** `git mv tools/design/tried.mjs scripts/tried.mjs` is committed.
  `git diff --cached --name-only` lists only `scripts/tried.mjs`. On push, a plain commit is read by `diff-tree`,
  which does not detect renames, and is *red*. Not named (N3, item 2). This predates c452c30.
- **(z12) The forced-push rule; (f2), (z2):** unchanged. Named (SKILL 114-120).

### N3. What the fixes broke or missed

1. **A commit is judged by its own copy of the check whenever its parent has none** (z11', z13). The fallback (yml
   44-45) was meant for the first gated commit, whose parent predates the tool. Now that 21da9cf is named, it is not
   needed for that, and it opens two doors:
   - a fork from before the gates, which is neither an ancestor nor a descendant of 21da9cf;
   - any descendant whose parent lost the tool (z13).

   `--brought` tests the wrong thing. It asks whether a brought commit is an *ancestor* of 21da9cf, which on `main`
   is never true. The commits it should hold are the ones that do not *descend* from 21da9cf.

   The end-game fix:
   - a commit in the range that does not descend from 21da9cf, and is not its ancestor, fails ("a fork from before
     the gates: rebase it onto main", as SKILL 117 already says);
   - the owner-line check is always the parent's copy, and a parent without one fails;
   - `--brought` holds a merge when a brought commit does not descend from 21da9cf.
2. **Renames hide a gate path** (z13, z14). `git log --remerge-diff --name-only` and `git diff --cached --name-only`
   are porcelain commands that detect renames by default, and list only the new path. Pass `--no-renames` to both,
   and add a reader check: a rename out of `tools/design/` is listed as a gate change.
3. **The hook's merge reading is `--cc`, not the automatic merge** (m1, m2). Compare each staged path with the tree of
   `git merge-tree --write-tree HEAD MERGE_HEAD`, as M3 proposed. Conflicted files then always count, and a clean
   merge of two approved edits never does. The comment "read the same way" is true only then.
4. **The gates' start commit is skipped** (R1). `--is-ancestor` is reflexive. Skip a commit only when it is an ancestor
   and is not 21da9cf, or have SKILL 114 and the yml comment say "up to and including".
5. **The `tools/` forbidden class is still never seen red** (N1, item 4). Its seeded fault is a read of
   `tools/design/approve.mjs` committed under `opened.asks`, then taken off.
6. **The key is still not pinned** (N1, item 5). Use `!sameWords('OK да', 'OK нет')`, and correct the message of the
   "été" check.
7. **Text:** the standard's section 11 entry should also name the narrowed gate 0 sources, a forbidden read never
   erased, and the forced-push rule.

### N4. The two screens the owner reads

No record, research note or reader changed since 68bd7df. `approve.mjs <id> goal --show` prints Psychology at 4,551
characters (747 words) and Geography at 3,402 characters (679 words). Both were read again:
- **Psychology:** true to its record. The test reaches every topic group: the accounts, the arguments, the heated
  moments and the next step. Readable: fair. "Projection" is both a topic and one of the defense mechanisms, and the
  first ask's words are cut off at 100 characters. *Verdict:* it can go out. Its length is the owner's call.
- **Geography:** true to its record. The test reaches every topic group. Readable: good. *Verdict:* it can go out.

`docs/research/designing-a-subject.md` and the skill's "What the gates rest on" did not change. There is no new
finding there.

### N5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Never judge a commit by its own copy of the owner-line check. Fail a commit that neither descends from 21da9cf nor
   is its ancestor. Have `--brought` test descent. As written, an old fork puts a gate change on `main` with no owner
   word, and the push is green (z11').
2. `--no-renames` in both readings of `owner-line.mjs`, pinned by a check. As written, an evil merge that moves the
   check out is green, and so is everything after it (z13). With the hooks on, a gate file renamed out is committed
   (z14).
3. The hook reads a merge in progress against `git merge-tree --write-tree HEAD MERGE_HEAD`, not "differs from both
   sides". As written, it refuses a clean merge (m1) and passes a one-sided conflict resolution (m2).
4. Check 21da9cf itself, or say "up to and including" in SKILL 114 and the yml.
5. A seeded fault for the `tools/` forbidden class: a `tools/` read taken off `opened.asks`.
6. Pin the `\p{L}\p{N}` key with `!sameWords('OK да', 'OK нет')`, and correct the "été" check's message.
7. The standard's section 11 entry: the narrowed gate 0 sources, a forbidden read never erased, the forced-push rule.

Named, rests on honesty or on the owner's setting:
- Invented owner words. This includes one invented line on an edit of `owner-line.mjs`, and a letterless reply reused
  with new punctuation.
- A self-written record review; a review's fingerprint or date line written by hand.
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting, until the owner's ruleset is in place. A branch's later push checks only its new commits.
- The workflow file edited with the hooks off: GitHub runs the edited copy.
- What was opened is the session's own account. The audit by its GitHub URL passes gate 0, and so does another
  subject's old lesson spelled `old-lessons:public/subjects/<id>/../<other>/` (a `startsWith` test; read in the code,
  not run).
- The fingerprints of `approved.history` entries are the record's own claims.
- The validator and its controls edited together under an owner line.
- Commits from before the gates are checked only by the tiers at the head. A pull request or a squash of this branch
  is red, and the skill says it lands by fast-forward.

For the owner:
- A ruleset on `main`: it requires the "lesson tier" check, runs it from `main` and forbids force-pushes. It does not
  close fix 1 or fix 2: the check itself passes those pushes. (Carried over.)
- Land this branch by fast-forward, after fixes 1 to 3.
- `pilot-fixes-2026-10-12`: rebase it onto the new `main`, or drop it. Today it is red only because its old validator
  does not know `--base`. (Carried over.)
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics only grow: is a re-approved screen enough to reword a topic an ask sits under? (Carried over.)
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part O. The twelfth review (2026-10-12)

An independent review of 6f42ca1 ("the skill's eleventh review answered"), by an agent that did not write it, against
part N's seven fixes (N5). Line numbers are `SKILL.md`'s at 6f42ca1. **`npm test` is green**: 302 design reader checks,
48,520 lesson checks, 248 seeded faults (the pin is 248). Every attack was run in a clone of this worktree
(`git clone`, so 21da9cf is there), with `npm run hooks` for the local ones. For each push, a bare "origin" held the
pushed refs, and a fresh clone of it was checked out at the pushed commit, as `actions/checkout` does. The workflow's
per-commit step was taken out of that commit's `lesson-tier.yml` as written, with the event's values filled in. The real
records were never touched.

What is better, briefly:
- This branch passes end to end as a fast-forward of `main` from d03b63f (exit 0). 21da9cf is now checked, not
  skipped.
- An old fork that brings its own empty checks is *red* ("neither before nor after").
- An evil merge that moves the check out of `tools/design/` is *red*.
- With the hooks on, a gate file renamed out is refused. A clean merge of two approved edits to one gate file goes
  through.
- The `tools/` class and the `\p{L}\p{N}` key are each seen red.

What is left falls in three groups:
- The check's copy is still, in two cases, one the pushed commits chose:
  - on the push that lands this branch, the "copy main held" is read from `origin/main`, which on a push to `main` is
    the pushed head;
  - on any other branch, it is the branch's own earlier head.
- The hook's new merge reading crashes on any conflict, so every conflicted merge is refused, gate file or not.
- No check pins `owner-line.mjs`, and some text still says "the parent's copy".

### O1. N5's seven items

| # | N5 item | Status | Evidence |
|---|---|---|---|
| 1 | Never judge a commit by its own copy; fail a fork from before the gates; `--brought` tests descent | **Done, with a break** | yml 33-57. Done: <br>- C (z11', below): an old fork with its own empty checks, merged, is *red* at its first commit ("neither before nor after"); <br>- D (z13): the commits after an evil merge are judged by `main`'s copy; <br>- `--brought` now tests descent (yml 55). <br>Broke (O3, item 1): the fallback `origin/main` (yml 39) is the pushed head on a push to `main`. L1: `main` at d03b63f is fast-forwarded to this branch plus one hooks-off commit. That commit puts `process.exit(0);` at the top of `owner-line.mjs` and appends a line to `tests/lessons/rule.mjs`, with no owner line. The step prints "the owner-line check is the copy at origin/main" and exits 0, and `npm test` at that head is green. The comment (yml 35) says "or the start's when that has none". <br>Missed: on any other branch, the check is `BEFORE`, the branch's own earlier head. B: push 1 empties the check (*red*, judged by `main`'s copy). Push 2 appends a line to `rule.mjs` with no owner line, is judged by push 1's empty copy, and is *green*. SKILL 112-113 say "the copy `main` held before the push". |
| 2 | `--no-renames` in both readings, pinned by a check | **Partly** | owner-line 19, 29, 31, 43. Done: D's merge lists both `scripts/owner-line.mjs` and `tools/design/owner-line.mjs`, and is *red* at the merge. z14 (`git mv tools/design/tried.mjs scripts/`, hooks on) is refused. <br>Not done: no check pins it. Nothing under `tests/` runs `owner-line.mjs` at all, so dropping `--no-renames` again turns nothing red. |
| 3 | The hook reads a merge in progress against `git merge-tree --write-tree HEAD MERGE_HEAD` | **Done, with a break** | owner-line 22-26. m1 (two sides edit different hunks of `stand-in-review.md`, each with the owner's word; a clean `--no-ff` merge with no owner line, hooks on) is committed. m2 (one line edited by both sides, resolved `--theirs`) is refused. <br>Broke (O3, item 2): m2 is refused by a crash, not by the check. `git merge-tree` exits 1 whenever the merge has a conflict, and `execFileSync` throws. m3 has a conflict only in `docs/build-subject-audit.md`, which is not a gate file, resolved by hand. The hook prints "Error: Command failed: git merge-tree --write-tree HEAD MERGE_HEAD" with a Node stack, and the merge cannot be committed. <br>The comment (owner-line 13-14) still says "the staged files that differ from both sides". |
| 4 | Check 21da9cf itself | **Done** | yml 45. R1: "21da9cf… against fece38c…", then 575563e, 68bd7df, c452c30 and 6f42ca1, exit 0. |
| 5 | A seeded fault for the `tools/` class | **Done** | controls-table 154. With `tools/` taken out of `FORBIDDEN_EVERYWHERE` (design-shape 167), "a read of the tools erased from the gate 0 list since the last commit" fails. With `tests/` taken out, the validator control fails. |
| 6 | Pin the `\p{L}\p{N}` key; correct the "été" message | **Done** | design-pure 65-66. With the key put back to `[^a-z0-9]`, "letters of another script tell two replies apart" fails. The "été" message no longer makes the false claim. |
| 7 | The standard's entry: the narrowed sources, a forbidden read never erased, the forced-push rule | **Mostly** | lesson-standard 801-804 name all three, and the fork rule. <br>Left (O3, item 4): <br>- the same entry still says "with the parent's copy of the owner-line check" and "what it brings in from before the gates"; <br>- its commit list ends at 68bd7df "and the one that follows"; <br>- SKILL 111 still says "checked with the parent's copy of the check", one line before "the copy `main` held before the push". |

Four are done. One is done with a break, one is mostly done and one is partly done. Nothing is red.

### O2. The attacks

- **(a) to (e), (h), (j) to (p), (q), (s) to (x), (z3) to (z7):** not run again. `rules-design`, `designs`,
  `rules-shape`, `paths`, `run`, `lockfile`, `approve`, the records, the notes and the fixture did not change in
  6f42ca1 (`git diff --stat c452c30 HEAD` on them is empty). Parts K to N's results stand.
- **(R1) This branch's own history**, `main` fast-forwarded from d03b63f: 16 commits skipped, then 21da9cf to 6f42ca1
  checked. Exit 0.
- **(L1) The landing push with a hooks-off head (new):** the head empties the check and edits `rule.mjs`, with no owner
  line. The check used is `origin/main`, the head itself. Exit 0, and `npm test` is green. Not named (O3, item 1).
  21da9cf's copy refuses that head, and passes every gated commit of this branch.
- **(B) A branch's later push (new):** push 1 empties the check, *red*. Push 2 makes an unworded gate edit, judged by
  push 1's copy: *green*. A fast-forward of `main` to it is *red* on `main`'s run. A ruleset that requires the check
  reads that commit's green result from push 2, though. Not named as such (O3, item 1).
- **(z11') An old fork with its own empty checks**, merged `--no-ff`: *red* at F1, "neither before nor after". Fixed.
- **(z13) An evil merge that moves `owner-line.mjs` to `scripts/`, then an empty copy and a gate edit, then the tool put
  back:** *red* at the merge ("changes the gates (tools/design/owner-line.mjs)"). Fixed.
- **(z14) A gate file renamed out, hooks on:** refused. Fixed.
- **(m1) A clean merge of two approved edits to one gate file, hooks on:** committed. Fixed.
- **(m2) A conflict on a gate file resolved to one side, hooks on:** refused, but by a crash in `git merge-tree`.
- **(m3) A conflict only in a non-gate file, resolved by hand, hooks on (new):** refused by the same crash. Not named
  (O3, item 2).
- **(f2), (z2), (z9), (z12):** unchanged. Named (SKILL 114-122).

### O3. What the fixes broke or missed

1. **The check's copy is not always `main`'s** (L1, B). The fallback chain (yml 38-40) is `BEFORE`, then
   `origin/main`, then 21da9cf. It goes wrong in two places:
   - On a push to `main`, `origin/main` is the pushed head. When `BEFORE` has no tool, which is true of the push that
     lands this branch (d03b63f), the pushed head's own copy judges the push.
   - On any other branch, `BEFORE` is the branch's own earlier head. An unworded copy that a push 1 put there (red)
     judges push 2, which can then be green. A required check then reads green for that commit.

   The end-game rule is the one SKILL 112-113 already state:
   - on a push to `main`, the copy at `BEFORE`;
   - on any other push or a pull request, the copy at `origin/main`, which that push did not move;
   - in either case, 21da9cf's copy when that ref has none.
2. **The hook's merge reading throws on any conflict** (m2, m3). `git merge-tree --write-tree` exits 1 when the merge
   conflicts, and it still prints the tree on its first line. The hook should read that exit, not throw on it.
   Conflicted files then count through the tree they write, as N3 intended. As written, every merge with a conflict
   is refused with a stack trace, gate file or not.
3. **`owner-line.mjs` has no check of its own** (O1, item 2). N5 asked for a rename to be pinned, and m3 shows what an
   untested reading costs. A reader check is needed that builds a temporary repository and asserts three things:
   - a rename out of `tools/design/` is a gate change;
   - a conflicted merge of a non-gate file passes;
   - a gate conflict resolved to one side does not.
4. **Text:**
   - SKILL 111 should read "checked with the copy `main` held before the push", not "the parent's copy".
   - In the standard's section 11 entry, "the parent's copy of the owner-line check" should become `main`'s copy,
     "from before the gates" should become "that do not descend from where the gates start", and the commit list
     should run to 6f42ca1.
   - owner-line 13-14 should say "against an automatic merge of the two sides".

### O4. The two screens the owner reads

No record, research note or reader changed since c452c30. `approve.mjs <id> goal --show` prints Psychology at 4,551
characters (747 words) and Geography at 3,402 characters (679 words). Both were read again:
- **Psychology:** true to its record. The test reaches every topic group. Readable: fair. "Projection" is both a topic
  and a defense mechanism, and the first ask's words are cut at 100 characters. *Verdict:* it can go out. Its length
  is the owner's call.
- **Geography:** true to its record. The test reaches every topic group. Readable: good. *Verdict:* it can go out.

`docs/research/designing-a-subject.md` and the skill's "What the gates rest on" did not change. There is no new
finding there.

### O5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. The check's copy: `BEFORE` on a push to `main`, `origin/main` on any other push or pull request, 21da9cf's when that
   has none. As written, the landing push is judged by its own head (L1, green), and a branch's later push by its own
   earlier unworded copy (B, green).
2. Read `git merge-tree`'s exit 1 as "conflicts" in the hook. As written, every conflicted merge is refused with a
   stack trace, gate file or not (m3).
3. A reader check for `owner-line.mjs`: a rename out, a conflicted non-gate merge, and a one-sided gate resolution.
4. Text: SKILL 111 "the parent's copy"; the standard's section 11 entry (the copy, "from before the gates", the commit
   list); the comment at owner-line 13-14.

Named, rests on honesty or on the owner's setting:
- Invented owner words. This includes one invented line on an edit of `owner-line.mjs`, and a letterless reply reused
  with new punctuation.
- A self-written record review; a review's fingerprint or date line written by hand.
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting, until the owner's ruleset is in place. A branch's later push checks only its new commits.
- The workflow file edited with the hooks off: GitHub runs the edited copy.
- What was opened is the session's own account. The audit by its GitHub URL passes gate 0, and so does another
  subject's old lesson spelled `old-lessons:public/subjects/<id>/../<other>/`.
- The fingerprints of `approved.history` entries are the record's own claims.
- The validator and its controls edited together under an owner line.
- Commits from before the gates are checked only by the tiers at the head. A pull request or a squash of this branch
  is red, and the skill says it lands by fast-forward.
- A worded change to `owner-line.mjs` judges the pushes after it, not the rest of its own push.

For the owner:
- A ruleset on `main`: it requires the "lesson tier" check, runs it from `main` and forbids force-pushes. Until fix 1,
  a required check can read green for a commit whose branch push used an unworded copy (B). (Carried over.)
- Land this branch by fast-forward, after fix 1.
- `pilot-fixes-2026-10-12` now fails as a fork from before the gates. Rebase it onto the new `main`, or drop it.
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics only grow: is a re-approved screen enough to reword a topic an ask sits under? (Carried over.)
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)

## Part P. The thirteenth review (2026-10-12)

An independent review of cd1a7b8 ("the skill's twelfth review answered"), by an agent that did not write it, against
part O's four fixes (O5). Line numbers are `SKILL.md`'s and `owner-line.mjs`'s at cd1a7b8. **`npm test` is green**: 302
design reader checks, 8 owner-line checks, 48,520 lesson checks, 248 seeded faults (the pin is 248). Every attack was
run in a clone of this worktree. For each push, a bare "origin" held the pushed refs, and a fresh clone of it was checked
out at the pushed commit, as `actions/checkout` does. The workflow's per-commit step was taken out of that commit's
`lesson-tier.yml` as written, with the event's values filled in. The local cases ran in a clone with `npm run hooks`.
The real records were never touched.

What is better, briefly:
- This branch passes end to end as a fast-forward of `main` from d03b63f (exit 0).
- L1 (the landing push with a hooks-off head that empties the check) is *red*.
- B (a branch's push 1 empties the check, push 2 makes an unworded gate edit) is *red* on both pushes, before and after
  landing.
- A merge in progress with a conflict only in a non-gate file is committed, with no crash. A gate conflict resolved to
  one side is refused by the check's own message.

What is left falls in three groups:
- Two merge shapes are read as having no changes of their own, so a gate change rides them onto `main` with no owner
  word, the hooks off and no history rewritten:
  - an octopus merge, under any copy of the check. Git skips the remerge diff for a merge of more than two parents.
  - any merge on the landing push, because the fallback copy (21da9cf's) reads no merge at all.
- The check's new test pins neither the readings that follow renames nor the check's verdict.
- Two lines of text still say "the parent's copy" or "the branch before this push".

### P1. O5's four items

| # | O5 item | Status | Evidence |
|---|---|---|---|
| 1 | The check's copy: `BEFORE` on a push to `main`, `origin/main` otherwise, 21da9cf's when that has none | **Done, with a break** | yml 36-39. Done: <br>- L1 is *red* at the extra commit ("changes the gates (tests/lessons/rule.mjs, tools/design/owner-line.mjs)"), judged by 21da9cf's copy; <br>- B is *red* on both pushes, both with `main` at d03b63f (21da9cf's copy) and with `main` at cd1a7b8 (`origin/main`). <br>Broke (P3, item 2): the fallback is 21da9cf's copy. That copy reads every commit with a bare `git diff-tree --name-only -r --root`, which prints nothing for a merge, and its `GATED` lacks `tests/owner-line-pure.mjs`. L1m: the landing push from d03b63f carries one more commit, a hooks-off `--no-ff` merge of a docs-only branch whose resolution puts `process.exit(0);` at the top of `owner-line.mjs` and appends a line to `tests/lessons/rule.mjs`, with no owner line. Exit 0, and `npm test` at that head is green. `main` then holds an emptied check, and every later push to `main` is judged by it. |
| 2 | Read `git merge-tree`'s exit 1 as "conflicts" in the hook | **Done** | owner-line 23-31. m3 (a conflict only in `docs/build-subject-audit.md`, resolved by hand, hooks on) is committed. m2 (a conflict on `tests/lessons/rule.mjs` between two worded edits, resolved `--theirs`, no owner line) is refused: "this commit changes the gates (tests/lessons/rule.mjs)". No stack trace. |
| 3 | A reader check for `owner-line.mjs`: a rename out, a conflicted non-gate merge, a one-sided gate resolution | **Partly** | `tests/owner-line-pure.mjs`. Done: the conflicted non-gate merge, the one-sided gate resolution, the clean merge of two worded edits and `--brought`. Taking out the `merge-tree` catch, or going back to "differs from both sides", turns it red. <br>Not done (P3, item 3): <br>- the rename case is a plain commit, read by `diff-tree`, which never follows renames. With `--no-renames` taken out of the staged reading (owner-line 35) or of the remerge reading (44), the two that do follow renames, all 8 checks stay green; <br>- nothing tests the verdict. With `LINE` set to `/[\s\S]*/`, all stay green. With `process.exit(0);` at the top of the tool (L1's edit), the test exits 0 silently on import, and `npm test` stays green. |
| 4 | Text: SKILL 111; the standard's entry; the comment at owner-line 13-14 | **Partly** | Done: the standard's section 11 entry names `main`'s copy, "never checked", the fork rule, and runs its list to 6f42ca1 "and the one that follows". The tool's head (owner-line 4-5, 10-11) says "main held" and "against the automatic merge". <br>Left: <br>- SKILL 111 still says "checked with the parent's copy of the check", one line before SKILL 112-114 say otherwise; <br>- the yml comment (31-34) says "the copy on the branch before this push (what main held)", which on any push but `main`'s is not what yml 36-37 do. |

One is done. One is done with a break, and two are partly done. Nothing is red.

### P2. The attacks

- **(a) to (e), (h), (j) to (p), (q), (s) to (x), (z3) to (z7):** not run again. `git diff --stat 6f42ca1 HEAD` is empty
  on `tests/lessons/`, `approve.mjs`, `tried.mjs`, `design-pure.mjs`, `validate-lessons.mjs`, the records, the notes,
  the fixture, the hooks and `stand-in-review.md`. Parts K to O's results stand.
- **(R1) This branch's own history**, `main` fast-forwarded from d03b63f: 16 commits skipped, then 21da9cf to cd1a7b8
  checked, with 21da9cf's copy as the check. Exit 0.
- **(L1) The landing push with a hooks-off head** that empties the check and edits `rule.mjs`: *red*. Fixed.
- **(L1m) The landing push with a hooks-off evil merge on top (new):** the merge empties the check and edits `rule.mjs`.
  21da9cf's copy lists nothing for a merge. Exit 0, and `npm test` is green. Not named (P3, item 2).
- **(B) A branch's later push**, `main` at d03b63f and again at cd1a7b8: push 1 *red*, push 2 *red* both times. Fixed.
- **(oct) An evil octopus merge after landing (new):** `main` is at cd1a7b8. One hooks-off merge of two docs-only
  branches, whose resolution empties the check and edits `rule.mjs`, is pushed to `main`. It is judged by `main`'s own
  copy, and `git log --remerge-diff` warns "Skipping remerge-diff for octopus merges" and lists nothing. Exit 0. `npm
  test` at that head is green, and `owner-line-pure` printed nothing. Not named (P3, item 1).
- **(oct') An octopus merge in progress, hooks on (new):** the hook compares with `merge-tree HEAD MERGE_HEAD`, which
  takes only the first head. A clean octopus whose worded gate change comes from the second head is read as the merge's
  own change, and refused falsely. An evil edit in it is refused.
- **(m3) A conflict only in a non-gate file, hooks on:** committed. Fixed.
- **(m2) A gate conflict resolved to one side, hooks on:** refused by the check's message. Fixed.
- **(z14) A gate file renamed out, hooks on:** not run again. The staged reading is the same call as at 6f42ca1
  (`diff --cached --no-renames`). Part O's result stands, but no check pins it (P1, item 3).
- **(nc) The check's own test, with seeded faults (new):** `--no-renames` taken out of each of the four readings, one
  at a time; `LINE` set to match any message; `process.exit(0)` at the top of the tool. All stay green.
- **(f2), (z2), (z9), (z12):** unchanged. Named (SKILL 114-124).

### P3. What the fixes broke or missed

1. **An octopus merge has no changes of its own to any copy of the check** (oct). This was missed since c452c30 brought
   in the remerge diff, which git does not compute for more than two parents. `--brought` does not fire, because every
   brought commit descends from 21da9cf. SKILL 114 says "a merge is held only for its own changes (its remerge diff)",
   and for an octopus that is nothing.

   The end-game fix:
   - the tool refuses a commit with more than two parents ("merge one branch at a time"), on push;
   - the hook refuses a merge in progress with more than one `MERGE_HEAD` line;
   - `owner-line-pure` pins both.
2. **The fallback copy reads no merge** (L1m). The landing push is the one push that the fallback judges: its `BEFORE`,
   d03b63f, has no tool. 21da9cf's copy predates every merge reading. Pushes to other branches and pull requests are
   also judged by it until `main` holds the tool. That does not land anything by itself. The landing push does,
   though, and what it lands becomes the copy that judges every later push to `main`.

   The end-game fix: the fallback is a named commit whose copy has the current readings. That is the commit that lands
   fix 1, kept apart from `GATES_START`, which still decides what is skipped.
3. **The check's test pins the readings that cannot regress, not the ones that can, and not the verdict** (nc). It
   needs:
   - a staged rename out of `tools/design/` (owner-line 35);
   - a merge whose resolution renames a gate file out (44);
   - the tool run as a script on the scratch repository: a gated change with no owner line exits 1, and with one exits
     0. That turns red under `LINE` matching anything, and under an early `process.exit(0)`.
4. **Text:**
   - SKILL 111 "checked with the parent's copy of the check" should go;
   - the yml comment (31-34) should say what yml 36-37 do;
   - SKILL 114 should say an octopus merge is refused, once fix 1 is in.

### P4. The two screens the owner reads

No record, research note or reader changed since 6f42ca1. `approve.mjs <id> goal --show` prints Psychology at 4,551
characters (747 words) and Geography at 3,402 characters (679 words). Both were read again:
- **Psychology:** true to its record. The test reaches every topic group: the accounts, the arguments, the heated
  moments and the next step. Readable: fair. "Projection" is both a topic and one of the defense mechanisms, and the
  first ask's words are cut at 100 characters. *Verdict:* it can go out. Its length is the owner's call.
- **Geography:** true to its record. The test reaches every topic group. Readable: good. *Verdict:* it can go out.

`docs/research/designing-a-subject.md` and the skill's "What the gates rest on" did not change. There is no new
finding there.

### P5. Closing verdict

Not "nothing is left to fix". What to fix, ranked:
1. Refuse an octopus merge, on push and in the hook, pinned by a check. As written, an octopus merge empties the check
   and edits a gate file with no owner word, and `main`'s own copy passes it (oct, green). Every later push to `main`
   is then judged by the emptied copy.
2. Make the fallback copy one that reads merges: a named commit with the current readings, not 21da9cf. As written, the
   landing push carries an unworded evil merge (L1m, green).
3. `owner-line-pure` pins a staged rename, a merge that renames out, and the tool's verdict run as a script. As written,
   `--no-renames` dropped from either live reading, a `LINE` that matches anything, or an early `process.exit(0)` all
   stay green.
4. Text: SKILL 111 "the parent's copy"; the yml comment 31-34; SKILL 114 on an octopus.

Named, rests on honesty or on the owner's setting:
- Invented owner words. This includes one invented line on an edit of `owner-line.mjs`, and a letterless reply reused
  with new punctuation.
- A self-written record review; a review's fingerprint or date line written by hand.
- Getting past the hook: `--no-verify`, `core.hooksPath`, an unstaged hook edit, `cherry-pick`, `rebase`, `am`, and a
  fast-forward merge.
- History rewriting, until the owner's ruleset is in place.
- The workflow file edited with the hooks off: GitHub runs the edited copy.
- What was opened is the session's own account. The audit by its GitHub URL passes gate 0, and so does another
  subject's old lesson spelled `old-lessons:public/subjects/<id>/../<other>/`.
- The fingerprints of `approved.history` entries are the record's own claims.
- The validator and its controls edited together under an owner line.
- Commits from before the gates are checked only by the tiers at the head. A pull request or a squash of this branch
  is red, and the skill says it lands by fast-forward.
- A worded change to `owner-line.mjs` judges the pushes after it, not the rest of its own push.

For the owner:
- A ruleset on `main`: it requires the "lesson tier" check, runs it from `main` and forbids force-pushes. It does not
  close fix 1 or fix 2: the check itself passes those pushes. (Carried over.)
- Land this branch by fast-forward, after fixes 1 and 2. Fix 2 concerns exactly that push.
- `pilot-fixes-2026-10-12` fails as a fork from before the gates. Rebase it onto the new `main`, or drop it. (Carried
  over.)
- A forbidden read honestly listed under `opened.asks` freezes the subject for good. Is that what you want? (Carried
  over.)
- An ask's topics only grow: is a re-approved screen enough to reword a topic an ask sits under? (Carried over.)
- Psychology's screen is 4,551 characters (747 words). Is that one screen? (Carried over.)
- Replacement words for the relayed words; the undecided asks of Math 3, Singing 3 and Wealth 4. (Carried over.)
