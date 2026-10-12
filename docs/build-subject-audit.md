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
