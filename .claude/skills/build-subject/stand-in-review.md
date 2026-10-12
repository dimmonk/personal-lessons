# The stand-in learner review (gates 6 and 7 when the owner is not trying lessons)

Used when the owner has said to go on without their own try; their words go in the record's `tried[lesson].waived`. It
never replaces the owner's try once they give one: an owner entry overwrites the stand-in's.

## Who does it
An agent that did not build the lesson. It is told to be a real beginner: an adult with no background in the subject,
reading on a phone, with ten minutes.

## What it may open, and nothing else
- `docs/learner-view/<subject>-<lessonId>.md`: the lesson as the learner meets it (regenerate it first with
  `node tools/learner-view/render-learner-view.mjs <subject> <lessonId>`).
- The running app at phone width, when it can be run, at the lesson's own screen.
- The brief, which pastes as text: the subject's end result and real moment (the record's `endResult` and
  `realMoment`), and the lesson's part title and check (`parts[part].title`, `parts[part].check`).

It is not given `docs/subjects/<id>/design.md`, the research notes, the lesson's block, the subject's other lessons, or
anyone's opinion of the lesson, and its brief says so. A reviewer that read any of these says so at the top of its
review under "Disclosure", and the review is run again by another reviewer.

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
**Verdict: fails**, with the fixes needed. A failed lesson is fixed and reviewed again by a fresh reviewer; the fixes
needed are the next revision's list.

## The record
`docs/subjects/<id>/reviews/<lessonId>.md`, opening with the line `Verdict: passes` or `Verdict: fails` (the validator
reads that line), then the before, the notes, the after, the five answers and the fixes. The design record's `tried`
gains `"<lessonId>": { "by": "stand-in", "date": "YYYY-MM-DD", "review": "reviews/<lessonId>.md", "waived": "<the
owner's words for going on>" }`. A second review of the same lesson replaces the file and the entry's date.
