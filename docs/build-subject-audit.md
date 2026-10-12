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
