# Audit of the build-subject skill (2026-10-12)

The owner asked, before any ninth subject: is the skill that designs subjects sound, or a pile of patches? This is the
audit. It has two parts. **Part A** reads what the skill has produced (the eight design records, the five stand-in
reviews, the standard's sections 23 and 26, the validator's V69) and says what that shows about the skill. **Part B**
is the set of questions to run on the skill's own text, which is not in this repository: it lives only at
`~/.claude/skills/build-subject/SKILL.md` on the owner's Mac, and this session could not read it. Part B waits for it.

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

## Part B. The questions to run on the skill's text (waits for the file)

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

## Part C. What to change, in order

1. **Move the skill into the repo**, at `.claude/skills/build-subject/`, from the owner's Mac (the only copy). Then run
   part B.
2. **Fix the five failing pilots before any new subject.** They are the current task on the worklist; nothing about the
   skill is settled while its first five outputs stand unfixed.
3. **Make the gain review a gate**: the design record gains `reviews: { [lessonId]: { date, verdict, by } }`, V69
   refuses a `live` lesson without a passing review or the owner's words, and a review's "Fixes needed" is the next
   revision's list.
4. **Shrink the approvals to one screen each**: the record's JSON is what the owner approves, gate by gate, in a line.
5. **One current standard**: section 26, the parts of 23 and 24 still in force, and the V-rule table, in one short file;
   sections 1 to 22 and the revision logs become history.
6. **Mark what decides**: each research note labels its findings "decides" or "supports"; the skill asks for it.
7. **Geography waits** for 1 to 3. Its record (`docs/subjects/geography/design.md`) is re-run through the fixed skill,
   with the owner's three changes of 2026-10-12 (the world first, flags as a third form of each country, one line of
   what the country is in the feedback).

## Getting the skill into the repo
On the owner's Mac, in the repository folder:
```
mkdir -p .claude/skills
cp -R ~/.claude/skills/build-subject .claude/skills/build-subject
git add .claude/skills/build-subject
git commit -m "docs: the build-subject skill moved into the repo for the audit"
git push
```
Or paste the text of `SKILL.md` (and any files beside it) into the chat, and the session writes it in.
