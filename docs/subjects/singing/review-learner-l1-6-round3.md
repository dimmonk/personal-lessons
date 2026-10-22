# Learner review, singing lessons 1 to 6, round 3 (2026-10-22)

Reader: cold beginner (a project manager), learner views only, regenerated before reading
(`node tools/learner-view/render-learner-view.mjs singing l1` .. `l6`). I cannot sing, so I judged the sung tries by their instructions
and feedback words only. I answered the written questions blind, then checked them.

## Verdicts

| Lesson | Verdict | Written check, blind | Way of deciding, in my words (written before the first practice question) |
|---|---|---|---|
| L1 Range | PASS | 5/5 | Sing the problem note on "oo" at talking loudness. If it will not come without forcing, the song is too high: move it lower. If only air or a rumble comes out, it is too low: move it higher. If it comes out easily, range is not the problem: go to the next check. A loud try going sharp does not count. |
| L2 Match a note | PASS (sung only) | n/a | Hear the note, replay it silently, then sing on "oo" aiming at the note from the first moment. On means within half a half-step. A shade means up to one half-step off, well means more. Say under, on or over before I look. |
| L3 On, under, over | PASS | 5/5 | Put the reaction aside. Play a steady note, sing beside it, and see what I must do. Nothing to move: on. Low all through and I move up: a shade under. High all through: a shade over. Starts low and arrives late by itself: sliding up. Wanders up and down: hunting (hear it first, then slow down). |
| L4 Hold it steady | PASS | 5/5 | Against a steady note, compare the start and the end. Same all through: steady. On, then lower: sank. On, then higher: rose. Off from the first moment and unchanged: off from the start. Name the first thing I hear. Loudness is a hint, not the answer. |
| L5 Steps and leaps | PASS | 5/5 | Check each note against its own note, the first note first. If the first is off, that is the fault (far note on: started wrong; both off the same way: right size, wrong start). If the first is on, the far note decides: on, short (under going up, over going down) or past. |
| L6 Short tunes | PASS | 5/5 | Check every note, not only the last, and find where it first went wrong. One far note of a jump short: the jump fell short. Only the held end slipping lower: sank. Unsure and wandering partway: lost (go back to slow). Every note off the same way or drifting: check the first note. |

No screen stopped me, and I could not pass any check by pattern alone. Round 2's priority items are fixed: how to move a song,
the paused recording, the jump list, and reactions that the check sometimes confirms. In L1 a friend says "strained" and it really is
too high; in L3 a brother says "sharp" and it is. What remains is polish.

## Polish (does not decide a verdict)

### L1
1. Step 2: checks 2 to 7 are only a map. "Effort" in check 4 is still a bit abstract, but "Pushing harder makes a note go sharp" explains it. No change needed.

### L2
1. Step 3/4: the result words "Sliding down onto it" and "Hunting for the note" can appear here, before lesson 3 teaches them. The how-a-try-goes screen now warns that a slide or a wander "is named for it", and the miss lines explain both, so I would not stall.

### L3
1. The story options never include "Well under / Well over" or "Sliding down onto it", although the app's sung results use them. That is fine for naming stories, but one look-alike pair (a slide down against a shade over) would make lesson 3's line "the same fault from above" stick.

### L4
1. Step 2's rule "If it does more than one, name the first thing you hear" is never practised: no case is off from the start and then also drifts. Add one pair.
2. Step 11 (the closer target): the view's group line says "A missed try does not come back", but each try's bullet says "A miss comes back three tries later". The app's code (`player.js:130`, `redo: !summary`) agrees with the group line. The renderer's per-try bullet should drop that sentence for an at-end group (also L5 Step 11, L6 Step 12).
3. Closer-target groups (L4, L5, L6): a note 30 off is "on" by lesson 2's definition but is called "a shade over" here. One clause would fix it: "here, a shade means anything past a quarter of a half-step".

### L5
1. Item 6 "Erin sings a small jump": Step 2 just taught "step" for a small move. Say "a small step".

### L6
1. Item 9 (Lena, the drift): the first note matches, then each note goes lower. The answer "The whole tune sat off the same way" fits only the clause "or drifting further off". The fix in the feedback, "check ... starting with the first", does not fit, because her first note was on. Name the drift separately, or reword the fix to "check the notes against a steady one as you go".
2. Step 2 lists the groups as "three notes slowly, ... then five notes at their speed" but leaves out the closer-target group. Minor.

## Counts
Deciding defects: 0. Polish: 9 (unpractised rule 1; view/wording inconsistencies 4; wording 3; missing contrast 1).
