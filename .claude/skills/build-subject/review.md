# The learner review

A fresh agent that did not write the lesson, told to be a real beginner: an adult with no background, on a phone, with
ten minutes. It opens only the learner view (`docs/learner-view/<subject>-<lesson>.md`, regenerated first with
`node tools/learner-view/render-learner-view.mjs <subject> <lesson>`) or the running app at phone width, and the brief:
the subject's sentence ("After this you can ___ when ___") and the lesson's title and check. It does not open the plan,
the research or other lessons.

It writes `docs/subjects/<id>/reviews/<lesson>.md`:
1. **Before**: what it can do on the real task now (usually little).
2. **The rule**: before the first case it must answer, the way to decide that the lesson has given it, in its own
   words. None given is a fail.
3. **Stuck**: every place it was confused, every screen it never used, every item it could answer without learning.
4. **The check**: done without the lesson open, with the score.
5. **After**: what it can now do on the real task, each ability tied to the item that taught it.

First line `Verdict: passes` only when the lesson gave the rule before the first case, the check was passed by
following the lesson, and nothing under Stuck would stop a beginner; otherwise `Verdict: fails` with the fixes.
A model told to be a beginner is not one: its Stuck list is its strong part, its sense of how much it learned is weak.
