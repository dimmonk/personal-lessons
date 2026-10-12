---
name: build-subject
description: The only way to design, rebuild or audit a subject or course of lessons (any learning content, in any project). Walks seven gates in order, from how people learn, to the end result, to how it is practiced, to each lesson, to a tried pilot, before content is written at scale. Use whenever the user asks for a new subject, course, module or lesson set, asks to rebuild one, or asks whether existing lessons work. Never start writing lesson content outside it.
---

# build-subject

## The one goal

The learner efficiently learns the subject: after it, they can do the thing in real life. Every gate below serves that
goal and nothing else. Earlier style rules, templates, engines and habits of the project are inputs, not rules: each is
kept only where it serves the goal, and a gate may overrule any of them. Writing that is plain, a format that already
exists, content that is already built: none of these is a reason to keep anything.

## Why this exists

A whole subject (Singing, Fieldcraft, 2026-10-08) was built to be read: stories about other people's singing, sorted into
named kinds. It passed 1.6 million checks, because every check asked whether the lesson was well built and none asked
whether doing it makes you better at the thing. The template was chosen first (it already existed), the evidence was
written for that template, and nothing in the process ever asked what the learner would be able to do at the end.
That is the failure these gates make impossible: **design starts from the end result, never from what the app
already does.**

## How it runs

- The gates run **in order**. A gate is passed only when its record is written and, where it says so, the owner has
  approved it. No later gate starts before an earlier one passes. Going back is normal: a later gate that fails sends
  the work back to the gate that caused it.
- **One record per subject**: `docs/subjects/<id>/design.md` in the project, one `##` section per gate, written as the
  gate is worked. It is short: what was decided and why, with sources. It is the single source for the subject's design;
  plans elsewhere point to it.
- **Owner approval** is recorded in the gate's section as `Approved by the owner: YYYY-MM-DD, "<their words>"`. Ask
  for it in one short message: the decision in two or three lines, never a document to read.
- **Design blind.** When rebuilding or auditing an existing subject, write gates 2 to 5 **before** reading its current
  lessons. Then compare. Reading the old content first anchors the design on it, which is how a bad design survives.
- The question at every gate, asked out loud in the record: **"If the learner did only this, would they be closer to
  the end result?"** A "no" or a "not really" stops the gate.

## Gate 1. The kind of learning, then the evidence for it

1. **Name the kind (or kinds) of learning** the end result needs. Decide this from what the learner must do in real
   life, before looking at any template:
   - *Knowing facts* to recall (dates, rules, numbers).
   - *Judging situations*: telling one kind of case from another (is this message a scam).
   - *Doing a procedure*: a sequence of steps on new inputs (a calculation, a form).
   - *A body or senses skill*: the voice, the hands, the ear, the eye (singing, drawing, an instrument, a sport).
   - *Changing a habit or behavior* (practicing daily, pausing before paying).
2. **Find the evidence for that kind.** The project's research document must cover it, with sources that were actually
   read: findings, conditions, strength. If it does not cover the kind (a document written for judging situations says
   little about the voice), research it now, add it to the document, and only then go on. Never borrow the principles of
   one kind for another without saying so and why.
3. **Record**: the kind(s), and the five to ten principles that will drive the design, each with its source.

Pass when: every principle named later can point to a line in this record.

## Gate 2. The end result

1. One sentence: **"After this subject you can ___ when ___."** The second blank is the **real moment**: where and how
   the learner meets this in life (a text on their phone, their own voice in the car, a bill, a news story).
2. **The real-world test**: a task in the form of the real moment, with what counts as passing. It must be something the
   learner does, not something they say about it. ("Sing a five-note line with a guide note; at least four notes land on
   pitch." Not "name what is wrong with Nadia's singing.")
3. What is **out**: what the subject does not try to do, so it stays short.

Pass when: the owner approves the sentence and the test.

## Gate 3. How it is practiced, and whether the app can deliver it

1. **The practice method**, from gate 1's evidence for this kind of learning. Its core must be the real moment's own
   action: the same kind of input and the same kind of response. A body skill is practiced by doing it with feedback;
   judging situations is practiced on real-looking cases; recall is practiced by recalling.
2. **What the learner spends their time doing.** Most of the time in every lesson goes to that practice, not to reading
   about it. Reading is the minimum needed to practice well.
3. **Feedback**: where it comes from (the app measuring, a model to compare against, the learner's own check) and how
   fast.
4. **Delivery check.** List what the app must be able to do for this practice (play and hear sound, show a pitch line,
   time a hold, take a typed answer). Anything it cannot do yet is built before any lesson, or the subject waits. Never
   swap in a practice the app can already deliver because it is there.

Pass when: the owner approves the method in two or three lines, and every capability it needs exists or is planned
first.

## Gate 4. The parts of the end result

1. **Break the end result into parts**: the smaller abilities it needs (for singing: breath, matching a note, holding it,
   moving between notes, range, a whole song line). Order them so each builds on the ones before.
2. **A check for each part**: a small version of gate 2's test.
3. **Map parts to lessons.** Every part is covered by a lesson; no lesson exists without a part. A lesson that serves no
   part is cut, however good.

Pass when: the map is complete both ways, and the parts together add up to the end result (if every part passes, the
gate 2 test would pass).

## Gate 5. Each lesson, designed before it is written

For each lesson, a short block in the record, before any content:
- **Part** it serves (from gate 4).
- **What the learner does**, in order, and roughly how long: the practice is the bulk.
- **Feedback** they get while doing it.
- **The end check**: the part's check from gate 4.
- **Why it works**: the gate 1 principles it applies.

Reject the lesson design if: its main activity is not the part's real action; most of its time is reading; its end check
measures something other than the part; or the answer to "if the learner did only this, would they be closer to the end
result?" is not a clear yes.

Pass when: every lesson in the map has a block that survives those rejections.

## Gate 6. One lesson, built and tried

1. Build **only the first lesson**, completely.
2. The owner (or the real learner) tries it cold, on the device they will use, in the real conditions (for singing: a
   phone, a real room, a real voice).
3. Record: did they pass the lesson's end check; what confused them; what felt like a waste of time; would they come
   back to it.
4. Decide: go on, or go back to gate 3 or 5. This caps the cost of a wrong design at one lesson.

Pass when: the owner says the pilot moved them toward the end result, recorded with their words. When the owner has said
to go on without their try, the pilot (and every later lesson, gate 7) passes instead on a **stand-in learner review**
(`stand-in-review.md` in this skill): an agent that did not build it does it as a beginner and answers, with evidence,
whether the reader can do more of the real task after the lesson than before. The owner's words for going on are recorded
with it, and their own try, when it comes, overwrites it.

## Gate 7. The rest, then evidence that it works

1. Build the remaining lessons, each from its gate 5 block. Each new lesson gets the same cold try as the pilot before
   it counts as done (the owner's, or a stand-in learner review that passes when the owner has waived their try).
2. Tests check form (that the lesson is built right) **and** alignment: the validator reads `design.md` and refuses a
   subject whose gates are missing or unapproved, and a lesson whose part or end check is missing.
3. After use: the learner's end-check results are the evidence. A lesson that does not move them is rewritten or cut,
   and the change is recorded in `design.md`.

## Auditing an existing subject

Run gates 1 to 5 blind (see "Design blind"), then lay the existing lessons against the gate 4 map and the gate 5 blocks.
For each existing lesson, one of: **keeps** (it is what gate 5 would have designed), **changes** (its part is right, its
practice is not), **goes** (it serves no part). Report the verdict per subject in a table; whatever does not pass goes
back through the gates as a rebuild, never a patch.

## Never

- Start from a template, an engine kind or existing content, and fit the subject into it.
- Write lessons before gates 1 to 5 pass, or more than one lesson before gate 6 passes.
- Count a passing validator as proof that a lesson teaches. It proves the lesson is well built; only gate 6 and the end
  checks prove it teaches.
- Keep content because it exists, or because time and tokens were spent on it.
