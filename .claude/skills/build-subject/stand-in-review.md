# The stand-in learner review (gates 6 and 7 when the owner is not trying lessons)

Used when the owner has said to go on without their own try; their words, with where they said them, go in the record's
`tried[lesson].waived`. It never replaces the owner's try once they give one: an owner entry overwrites the stand-in's.

What it is worth, honestly (`docs/research/designing-a-subject.md`, D9 to D11): trying a lesson on someone who did not
build it finds defects the builder cannot see, and one tryout finds a minority of them. A language model told to be a
beginner is not a beginner: it cannot reliably not know, and it favours text like its own. So its **Clear** and
**Check** findings (a screen a beginner could not follow; a check that does not test the part) are its strong part;
its **Gain** verdict is weak and never counts as proof that the lesson teaches. The owner's try and the end-check
results after use are the real tests; the stand-in is the gate that keeps a broken lesson from going live before them.

## Who does it
An agent that did not build the lesson, on a fresh context. It is told to be a real beginner: an adult with no
background in the subject, reading on a phone, with ten minutes. A second review of the same lesson is by a different
reviewer than the first.

## What it may open, and nothing else
- `docs/learner-view/<subject>-<lessonId>.md`: the lesson as the learner meets it (regenerate it first with
  `node tools/learner-view/render-learner-view.mjs <subject> <lessonId>`).
- The running app at phone width, when it can be run, at the lesson's own screen.
- The brief, which pastes as text: the subject's end result and real moment (the record's `endResult` and
  `realMoment`), and the lesson's part title and check (`parts[part].title`, `parts[part].check`).

It is not given `docs/subjects/<id>/design.md`, the research notes, the lesson's block, the subject's other lessons, or
anyone's opinion of the lesson, and its brief says so and lists the files it may open. A reviewer that read any of
these says so at the top of its review in a line starting `Disclosure:`; the validator reads that line, the review
then never counts as passing, and it is run again by another reviewer.

## What it does
1. Before the lesson, it writes what it can do now on the part's real task (honestly, as a beginner: usually little).
2. It goes through the lesson in order, doing every item as a learner would, and notes each place it was confused, each
   screen that taught it nothing it used later, and each item it could answer without having learned anything.
3. It does the end check as written, without the lesson open, and records the score as the check scores it.
4. It writes what it can do now that it could not before, as concrete abilities on the real task, each tied to an item
   that taught it.

## What it answers (the verdict)
- **Gain**: is there at least one concrete ability on the part's real task that the beginner did not have before and has
  after? (Name it, and say that this is a model's judgement.)
- **Doing**: was most of the time spent doing the real action (or the closest form the evidence supports), not reading?
- **Check**: does the end check test that ability, in the form of the real moment, on new material, and was it passed?
- **Clear**: could a beginner follow every screen without outside help? (List every place they could not.)
- **Waste**: what could be cut without losing the gain?

**Verdict: passes** only when Doing and Check are yes, the check was passed, and nothing under Clear blocks a beginner.
Gain is answered and recorded; it is a model's judgement and is not what passes the lesson. Otherwise **Verdict:
fails**, with the fixes needed. A failed lesson is fixed and reviewed
again by a fresh reviewer; the fixes needed are the next revision's list.

## The record
`docs/subjects/<id>/reviews/<lessonId>.md`, opening with the line `Verdict: passes` or `Verdict: fails` (the validator
reads it), then a line `Reviewer: <who> (<which model>), <date>; opened: <the files>`, then a line `Reviewed: <the
lesson's fingerprint>` (the brief gives it, from `node tools/design/fp.mjs <subject> <lessonId>`; the review counts for
that version of the lesson only), a `Disclosure:` line if any, then
the before, the notes, the check's score, the after, the five answers and the fixes. The design record's `tried` gains
`"<lessonId>": { "by": "stand-in", "date": "YYYY-MM-DD", "review": "reviews/<lessonId>.md", "waived": { "date", "words",
"where" } }`, written with `node tools/design/tried.mjs <subject> <lessonId> --stand-in reviews/<lessonId>.md --words
"<the owner's words for going on>" --where "<where they said them>"`. A second review replaces the file and the entry.
