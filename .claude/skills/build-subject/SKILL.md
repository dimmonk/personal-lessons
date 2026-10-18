---
name: build-subject
description: How to design, build, rebuild or check a subject or course of lessons (any learning content, in any project). First research, in that field's own literature, how its experts reason; that reasoning is what the subject teaches, and every design choice cites a source. Then teach that way of thinking, show it worked on a case, practise it from memory on real-looking cases with feedback, and space the review; check every lesson with fresh reviewers before it ships. Never carry a structure over from another subject. Use whenever the user asks for a new subject, course, module or lesson set, asks to rebuild one, or asks whether lessons work.
---

# build-subject

The goal is **pragmatic knowledge**: after a subject, the learner can do the thing in real life, in the moment they
meet it, with nothing in front of them, and can do it by **thinking the way people who are good at it think**.
Knowing about it does not count.

The owner should not have to do this work or catch its mistakes. The skill does the reading, the reasoning and the
checking; the owner sees the result. Nothing is decided by feel ("vibes"): every choice in the plan and the lessons
names the source it rests on.

## 1. What the owner wants

Read it yourself; never ask the owner to restate it: their messages about the subject, their own course documents and
the old lessons they used. List every topic they asked for, in their words, in the plan. Nothing on that list is
dropped without their word. If their own material taught a way of reasoning, it is evidence for step 2, checked against
the literature like any other source.

## 2. How experts in this field reason (research first, for this subject alone)

Before any plan, read the field's own literature and write `docs/research/<subject>.md`:
- **How do skilled practitioners of this field actually decide, find or do the thing?** The field's textbooks and
  methods, its expert-practice and expert-novice studies, its professional guidance. What do they look at first, what
  questions do they ask, what distinctions do they rely on, what mistakes do novices make that experts do not?
- **What does the learning research say about this kind of skill?** (recall of facts, judging cases, a procedure, a
  body skill, a habit each learn differently).
- Each finding with its source, what was read (the paper or book, not a search summary), how strong it is, and the
  passage it rests on, quoted or closely paraphrased with its page or section, so a reviewer can check the claim against
  the source in a minute. A choice whose passage cannot be found and quoted is a judgement call, and the note says so.
- The sources live in the research note only: never in a lesson, and never something the owner is asked to read.

The subject's **way of thinking** is what this research finds, in plain words. It is never taken from another subject,
another subject's plan or lessons, or an earlier pattern in this project: two subjects may end up alike only if their
own literatures each say so. If the research finds the field has no single method, the plan says so and teaches what
experts do instead.

## 3. What holds for any lesson (docs/learning-science.md, docs/research/)

These are findings about learning in general; they constrain how the step 2 way of thinking is taught, never what it is.
1. **Guidance before solo practice.** Beginners learn far more from explicit instruction and worked examples than from
   working things out unaided (Alfieri et al. 2011, 164 studies; Kirschner, Sweller & Clark 2006; Barbieri et al. 2023).
2. **The reasons, not only the steps** (P9): why each step or question is asked is what carries to new cases.
3. **Recall with an explanation after every answer** (P16, P19, R1, R7).
4. **Practice in the form of real use** (D6): the real kind of case, answered with the real action.
5. **Contrast and wrong ideas** (P12, P29): look-alikes side by side; the common novice error named and corrected.
6. **Mix, then space** (P22, P24, R2, R4, R9).
7. **Feeling is not evidence** (D4): judge by the check.

## 4. The plan (docs/subjects/<id>/plan.md)

One page, written after step 2 and before any lesson, every line citing its source in step 2's note or step 3:
- **What you'll be able to do, and when**: "After this you can ___ when ___", and the real-world test (new cases in
  the real form, a pass mark).
- **The way of thinking**: from step 2, with its sources.
- **What it teaches**: every topic, covering every ask from step 1.
- **The lessons**, in order, each with what it teaches, its check, and why it is shaped as it is (the source).

Show the owner the first two bullets in a few lines and go on unless they object. Only dropping an ask waits for them.

## 5. Each lesson

Teach the subject's way of thinking (step 2) by the step 3 findings: what to do and why, a case worked through it,
practice from memory on real-looking cases with feedback that names what decided, look-alikes, mixed practice, then a
check on new cases. The order and form inside a lesson follow what this field's research says works for this kind of
skill; where it says nothing, step 3 decides. Reading is what the method needs and no more; a reading limit never cuts
the way of thinking or the worked case. The project's lesson standard (`docs/lesson-standard.md`) and validator say how
a lesson is built in this app.

## 6. Checking a lesson before it ships

Two fresh agents that did not write it:
- **The learner** (`review.md`): goes through it cold as a beginner, from the learner view only, writes down the way
  of deciding before the first case, does the check, and lists every place it got stuck.
- **The research check**: reads the lesson and the plan against the step 2 note and step 3, and lists every claim or
  choice with no source or whose quoted passage does not support it, every place the lesson departs from how the field's experts reason, every structure that
  looks carried over from another subject rather than drawn from this one's research, and every wrong fact.

Fix everything they find and check again with fresh agents, until both pass. The owner's own try is welcome and
outranks a review, but is never required.

## 7. When the owner corrects something

Treat it as criticism of the design, not as a new rule. Find the root cause, fix the design there, and check whether
the same mistake is elsewhere. Do not add a rule, a gate or a limit to this skill unless the root cause is this skill
itself, and then rewrite the part that was wrong instead of adding to it. This skill stays one short page.
