# The stand-in learner review (gates 6 and 7 when the owner is not trying lessons)

Used when the owner has said to go on without their own try (record their words). It never replaces the owner's try once
they give one: their words overwrite the stand-in's.

## Who does it
An agent that did not build the lesson and is told only: the subject's end result and real moment (gate 2), the lesson's
part and its check (gate 4), and the lesson as the learner meets it (the learner view, and the app at phone width when it
can be run). It is told to be a real beginner: an adult with no background in the subject, reading on a phone, with ten
minutes. It is not shown the gate 5 block, the evidence or anyone's opinion of the lesson.

## What it does
1. Before the lesson, it writes what it can do now on the part's real task (honestly, as a beginner: usually little).
2. It goes through the lesson in order, doing every item as a learner would, and notes each place it was confused, each
   screen that taught it nothing it used later, and each item it could answer without having learned anything.
3. It does the end check as written, without the lesson open.
4. It writes what it can do now that it could not before, as concrete abilities on the real task, each tied to an item
   that taught it.

## What it answers (the verdict)
- **Gain**: is there at least one concrete ability on the part's real task that the beginner did not have before and has
  after? (Name it.)
- **Doing**: was most of the time spent doing the real action (or the closest form the evidence supports), not reading?
- **Check**: does the end check test that ability, in the form of the real moment, on new material?
- **Clear**: could a beginner follow every screen without outside help? (List every place they could not.)
- **Waste**: what could be cut without losing the gain?

**Verdict: passes** only when Gain, Doing and Check are all yes and nothing under Clear blocks a beginner. Otherwise
**Verdict: fails**, with the fixes needed. A failed lesson is fixed and reviewed again by a fresh reviewer.

## The record
`docs/subjects/<id>/reviews/<lessonId>.md`, opening with the line `Verdict: passes` or `Verdict: fails`, then the before,
the notes, the after, and the five answers. The design record's `tried` holds, per lesson, either the owner's try
(`by: 'owner'`, date, words) or the stand-in's (`by: 'stand-in'`, date, the review file, and `waived`: the owner's words
for going on without their try).
