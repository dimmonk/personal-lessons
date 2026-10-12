---
name: build-subject
description: The only way to design, rebuild or audit a subject or course of lessons (any learning content, in any project). Walks seven gates in order, from how people learn, to the owner's one-paragraph goal, to how it is practiced, to each lesson, to a pilot reviewed as a learner, before content is written at scale. Every gate can refuse, and the record it writes is the one the validator reads. Use whenever the user asks for a new subject, course, module or lesson set, asks to rebuild one, or asks whether existing lessons work. Never start writing lesson content outside it.
---

# build-subject

## Pragmatic knowledge: the one goal

The app's slogan is the test of everything here. **Pragmatic knowledge** is knowledge the learner can use, in the
moment they meet it in life, with no background: hang up on the call, land the note, place the country, answer the
officer. After a subject, the learner can *do the thing in real life*. Knowing about it, naming its kinds, reading a
well-written card: none of these is the goal, and none counts as reaching it.

Every gate below serves that goal and nothing else. Earlier style rules, templates, engines and habits of the project
are inputs, not rules: each is kept only where it serves the goal, and a gate may overrule any of them. Writing that is
plain, a format that already exists, content that is already built: none of these is a reason to keep anything.

## Why this exists

A whole subject (Singing, Fieldcraft, 2026-10-08) was built to be read: stories about other people's singing, sorted
into named kinds. It passed 1.6 million checks, because every check asked whether the lesson was well built and none
asked whether doing it makes you better at the thing. The template was chosen first (it already existed), the evidence
was written for that template, and nothing in the process ever asked what the learner would be able to do at the end.
Then (2026-10-12) the first version of these gates was audited: eight subjects went through gates 1 to 5 and no gate
ever said no, because the gates were prose a writer interpreted; the one check that found real defects was a reviewer
reading a lesson as a learner, and its verdict had nowhere to be recorded. So this version makes every gate refusable,
puts the owner's own paragraph before any plan, names what may be opened, and writes the record in the shape the
validator reads. **Design starts from the end result, never from what the app already does, and nothing the skill asks
for goes unchecked.**

## How it runs

- **The gates run in order.** A gate is passed only when its fields are in the record and, where it says so, the owner
  has approved. No later gate starts before an earlier one passes. Going back is normal: a later gate that fails sends
  the work back to the gate that caused it.
- **One record per subject**: `docs/subjects/<id>/design.md`. It opens with the record as JSON between two lines of
  three dashes (the shape is below; the validator's V69 reads it and refuses what is missing or inconsistent), then
  one `##` section per gate in prose: what was decided and why, with sources. It is the single source for the
  subject's design; plans elsewhere point to it.
- **The owner approves twice**, and reads one screen each time: gate 2's paragraph, and gate 3's method in three lines.
  An approval is applied with `node tools/design/approve.mjs <subject> goal|practice "<their words>"`, which writes the
  date, their words and a fingerprint of the exact text approved into `approved`. A change to that text afterwards
  makes the validator ask for the approval again. Never ask the owner to read a gate's prose, a research note or a
  lesson to approve.
- **The question at every gate**, asked in the record: **"If the learner did only this, would they be closer to the end
  result?"** A "no" or a "not really" stops the gate.
- **What may be opened** (the record's `opened` lists every path gates 1 to 5 read; V69 refuses the forbidden ones):

  | Stage | May open | Must not open |
  |---|---|---|
  | Gate 1 | `docs/research/`, the sources themselves, `docs/learning-science.md` for its sources | any lesson, learner view or review; any other subject's record |
  | Gates 2 to 5 | this subject's record and its gate 1 note | this subject's lessons (`public/subjects/<id>/`), its learner views and reviews; any other subject's record (`docs/subjects/*/design.md`) |
  | The comparison, in an audit | this subject's lessons and learner views, only after gates 2 to 5 are written | |
  | The writer, gates 6 and 7 | this subject's record, `docs/lesson-standard.md`, the test subject (`tests/fixtures/fixture-subject/`) for the data shape, the validator | another subject's lessons: a lesson copied from one becomes a template |
  | The reviewer, gates 6 and 7 | the learner view, the running app, and the brief's pasted text (`stand-in-review.md`) | the record, the research, anyone's opinion of the lesson |

  Why: reading the old content first anchors the design on it, which is how a bad design survives; reading another
  subject's record gives every subject one shape (eight records came out identical that way); a reviewer that opens
  the record sees the lesson's design and stops being a learner.
- **The rules for building a lesson** are `docs/lesson-standard.md` (short: the rules in force) and the validator
  (`npm run test:lessons`). Nothing else is a rule, and a writer's brief points nowhere else.

## The record

The JSON that opens `design.md`. Every field is asked for by a gate below and checked by V69; `//` lines here say which.

```js
{
  "subject": "scams",                                  // the folder's name
  "kinds": ["judging", "habit"],                       // gate 1: facts, judging, procedure, body, habit
  "principles": [                                      // gate 1: the five to ten that drive the design
    { "id": "SC1", "note": "scams-judging-and-acting", "decides": true,  "read": "full" },
    { "id": "SC3", "note": "scams-judging-and-acting", "decides": false, "read": "abstract" }
  ],                                                   //   a "decides" principle needs "read": "full"
  "goal": "…",                                         // gate 2: the owner's paragraph, one screen (under 1,200 characters)
  "endResult": "…", "realMoment": "…", "test": "…", "out": "…",   // gate 2
  "practice": "…", "feedback": "…",                    // gate 3
  "delivery": ["a 20 second clock on a set", "…"],     // gate 3: what the app must do, each built or planned first
  "readingShare": 0.15,                                // gate 3: the most of a lesson that may be reading (mirrored in the subject record, V80)
  "form": "…",                                         // gate 4: the form the real moment forces on practice and checks
  "parts": [{ "id": "A", "title": "See the request", "check": "…" }],   // gate 4: each with its check
  "lessons": {                                         // gate 5: one block per lesson of the map
    "l3": { "part": "C", "does": "…", "feedback": "…", "check": "…", "why": ["SC1", "SC5"] }
  },                                                   //   check is its part's check, word for word; why names principles above
  "pilot": "l3",                                       // gate 5: the first lesson built
  "approved": {                                        // gates 2 and 3, written by tools/design/approve.mjs
    "goal":     { "date": "2026-10-10", "words": "approve all, keep going", "fp": "sha256:…" },
    "practice": null
  },
  "tried": {                                           // gates 6 and 7: one entry per lesson that was tried or reviewed
    "l3": { "by": "stand-in", "date": "2026-10-11", "review": "reviews/l3.md", "waived": "keep going, don't wait on my read" },
    "l1": { "by": "owner",    "date": "2026-10-20", "words": "…" }
  },                                                   //   a stand-in's verdict is the first line of its review file
  "opened": ["docs/research/scams-judging-and-acting.md"]   // what gates 1 to 5 read
}
```

## Gate 1. The kind of learning, then the evidence that decides

1. **Name the kind (or kinds) of learning** the end result needs, from what the learner must do in real life, before
   looking at any template:
   - *Knowing facts* to recall (dates, rules, numbers).
   - *Judging situations*: telling one kind of case from another (is this message a scam).
   - *Doing a procedure*: a sequence of steps on new inputs (a calculation, a form).
   - *A body or senses skill*: the voice, the hands, the ear, the eye (singing, drawing, an instrument, a sport).
   - *Changing a habit or behavior* (practicing daily, pausing before paying).
2. **Find the evidence for that kind**, in `docs/research/<note>.md`: findings, conditions, strength, and what was read.
   If no note covers the kind (a note written for judging situations says little about the voice), research it now,
   write the note, and only then go on. Never borrow the principles of one kind for another without saying so and why.
3. **Mark each principle "decides" or "supports".** A principle *decides* when a choice in this design would be
   different if the finding were false: name that choice in the record. Everything else *supports*. A decides
   principle must have been read in full (the paper or its author manuscript, not an abstract or a summary), with
   where in it the finding sits, and the note's own "Read:" line says so. A finding that would decide but cannot be
   read in full is marked supports, and the choice it would have decided is written as a judgement call to be measured.
4. **Record**: `kinds`, `principles` (five to ten, each `id`, `note`, `decides`, `read`), and `opened`.

Reject when: a principle names no finding in a note; a decides principle was not read in full; every principle is
"supports" (then the evidence decided nothing, and the design is habit); a kind's principles were borrowed from another
kind without a line saying why they carry over.

Rejected, for example: Singing's first design (2026-10-08) took the principles of judging situations (named kinds, cases
to sort, look-alikes) for a body skill, with no line saying why practice on other people's singing would move a voice.
The gate sends it back to research the voice (`docs/research/learning-to-sing.md`, S1 to S6). And: "spaced returns
help recall" marked decides for Singing on an abstract about vocabulary: nothing in the voice design would change if it
were false, so it is supports, and it needs no full read.

Pass when: every principle points to a finding in a note, every decides principle was read in full and names the choice
it decides, and `opened` holds only what gate 1 may open.

## Gate 2. The end result, in the owner's paragraph first

1. **The owner's paragraph** (`goal`), written before anything else in this gate and before any plan: in plain words,
   for the owner, one phone screen. What you will be able to do after this subject; where in your life it shows up;
   what it leaves out. It is the precheck: the owner reads it and knows at once whether the subject is on the right
   track, instead of after the lessons are written. Nothing past this gate is written until the owner's words are on it.
2. **One sentence** (`endResult`): **"After this subject you can ___ when ___."** The second blank is the **real
   moment** (`realMoment`): where and how the learner meets this in life (a text on their phone, their own voice in the
   car, a bill, a news story).
3. **The real-world test** (`test`): a task in the form of the real moment, with what counts as passing. It must be
   something the learner does, not something they say about it. ("Sing a five-note line with a guide note; at least
   four notes land on pitch." Not "name what is wrong with Nadia's singing.")
4. **What is out** (`out`): what the subject does not try to do, so it stays short.
5. **Ask the owner** for the paragraph's approval in one message: the paragraph, then "on track, or not?". Apply their
   words with `tools/design/approve.mjs <subject> goal "<words>"`.

Reject when: the sentence names knowing, understanding or recognizing rather than doing; the real moment is not a time
and place the learner meets in life; the test asks the learner to say something about the task instead of doing it;
the paragraph takes more than a screen, or says how the lessons work instead of what the learner will be able to do.

Rejected, for example: "After this subject you understand how scams work, when you read about one." Understanding is
not an action, and reading about a scam is not the moment. Rewritten: "After this subject you stop, see what a message
wants, and check it through a way you already had, when a text, call or offer asks you to act."

Pass when: the owner's words are on the paragraph (`approved.goal`), and the sentence, the real moment, the test and
what is out are in the record.

## Gate 3. How it is practiced, and whether the app can deliver it

1. **The practice method** (`practice`), from gate 1's evidence for this kind of learning. Its core must be the real
   moment's own action: the same kind of input and the same kind of response. A body skill is practiced by doing it
   with feedback; judging situations is practiced on real-looking cases; recall is practiced by recalling.
2. **What the learner spends their time doing.** Most of the time in every lesson goes to that practice, not to reading
   about it. Reading is the minimum needed to practice well: `readingShare`, the most of a lesson that may be reading
   (the validator's V73 holds every lesson to it).
3. **Feedback** (`feedback`): where it comes from (the app measuring, a model to compare against, the learner's own
   check) and how fast.
4. **Delivery check** (`delivery`): what the app must be able to do for this practice (play and hear sound, draw a
   pitch line, time a hold, take a typed answer, take a tap on a map with no names). Anything it cannot do yet is built
   before any lesson, or the subject waits. Never swap in a practice the app can already deliver because it is there.
5. **Ask the owner** for the method's approval in three lines. Apply their words with `approve.mjs <subject> practice`.

Reject when: the practice's input or response is not the real moment's (sorting stories about singing; choosing a
country's name from four instead of placing it); reading is most of the time; the feedback is slower or vaguer than
the real moment allows; a delivery item is missing because the app cannot do it yet.

Rejected, for example: Singing (2026-10-08) practiced by reading stories about other people's singing and sorting them
into named kinds. The real action is singing: rejected; the practice became sung tries scored on pitch, with the pitch
line built first (`delivery`). And: Geography practiced as a multiple choice of names because `choose` exists; the
moment forces a tap on a blank map, which goes on `delivery` and is built before the pilot.

Pass when: the owner's words are on the method (`approved.practice`), `readingShare` and `feedback` are set, and every
`delivery` item exists in the app or is planned before the first lesson.

## Gate 4. The form the real moment forces, then the parts

1. **The form first** (`form`), before any part is written and before any other subject's record is opened: what shape
   does *this* real moment force on the practice and on each part's check? A sung try scored on pitch; a typed number
   with an estimate first; a tap on a map with no names; a reply chosen while a caller pushes; a typed answer to a
   spoken question. A check that is "ten items, 8 of 10" is one form among many, never the default.
2. **Break the end result into parts** (`parts`): the smaller abilities it needs (for singing: breath, matching a note,
   holding it, moving between notes, range, a whole song line). Order them so each builds on the ones before.
3. **A check for each part** (`parts[].check`): a small version of gate 2's test, in the form of step 1.
4. **Map parts to lessons.** Every part is covered by a lesson; no lesson exists without a part. A lesson that serves no
   part is cut, however good.

Reject when: a part has no check, or its check is not a smaller gate 2 test (it asks about the part instead of doing
it); the parts do not add up to the end result (a learner who passed every part's check could still fail the gate 2
test); the checks' form was taken from another subject instead of this moment.

Rejected, for example: Ideology's part "know the history of each label": no check of it is a smaller gate 2 test (the
test is judging a label thrown on a post), so the part goes. And: a Singing check written as "ten items, 8 of 10" when
the form is a sung line without the pitch line; the check became "five notes heard and sung back, four on the note".

Pass when: the form is written, every part has a check in that form, the map is complete both ways, and the parts
together add up to the end result (if every part passes, the gate 2 test would pass).

## Gate 5. Each lesson, designed before it is written

For each lesson in the map, a block in `lessons` before any content:
- **Part** it serves (`part`).
- **What the learner does** (`does`), in order, and roughly how long: the practice is the bulk.
- **Feedback** they get while doing it (`feedback`).
- **The end check** (`check`): the part's check from gate 4, word for word.
- **Why it works** (`why`): the gate 1 principle ids it applies.
Then name the **pilot** (`pilot`): the first lesson built, the one whose failure would teach the most.

Reject when: its main activity is not the part's real action; most of its time is reading; its end check measures
something other than the part; `why` names a principle gate 1 does not have; or the answer to "if the learner did only
this, would they be closer to the end result?" is not a clear yes.

Rejected, for example: a block reading "two screens explaining the five kinds of claim, then six items": most of the
time is reading, and six items do not practice five kinds. Sent back until the screens are one and the items are
enough to meet each kind twice.

Pass when: every lesson in the map has a block that survives those rejections, and the pilot is named.

## Gate 6. The pilot, built and reviewed as a learner

1. Build **only the pilot**, completely, from its block, to `docs/lesson-standard.md`, with `status: 'draft'`.
2. It is tried by someone who did not build it, cold, as a beginner:
   - **the owner** (or the real learner), on the device they will use, in the real conditions (for singing: a phone, a
     real room, a real voice). Record `tried[lesson] = { by: 'owner', date, words }`: did they pass the end check, what
     confused them, what felt like a waste, would they come back.
   - **or a stand-in learner review** (`stand-in-review.md` in this skill), when the owner has said to go on without
     their try: an agent that did not build it does it as a beginner and answers, with evidence, whether the reader can
     do more of the real task after the lesson than before. Record `tried[lesson] = { by: 'stand-in', date, review,
     waived }`, with the owner's words for going on in `waived`. The verdict is the review file's first line. The
     owner's own try, when it comes, overwrites it.
3. Decide: go on, or go back to gate 3 or 5. This caps the cost of a wrong design at one lesson.

Reject when: the try or review fails (the owner did not pass the check or would not come back; the review's verdict is
`fails`); the reviewer was shown the record, the block or the evidence; the lesson is marked `live` without a passing
entry in `tried`.

Rejected, for example: Scams' pilot (review of 2026-10-11): the answer key marked the lesson's own rule wrong on a real
bill, and the reviewer could not pass the check by following the lesson. Verdict fails; the lesson goes back to its
block (the feedback and the key), is fixed, and is reviewed again by a fresh reviewer. Five of the first seven pilots
failed this way, after passing every validator and browser check: the review is the gate.

Pass when: `tried[pilot]` holds the owner's words, or a stand-in review whose first line is `Verdict: passes`. Only then
may a lesson past the pilot be written (V69).

## Gate 7. The rest, each reviewed, then evidence that it works

1. Build the remaining lessons, each from its block. Each gets the same try or review as the pilot before it is `live`.
2. The validator checks form (that the lesson is built right) **and** alignment: it refuses a subject whose record is
   missing a gate, a lesson without a block, a block whose check is not its part's, a lesson past the pilot before the
   pilot passed, and a `live` lesson without a passing entry in `tried`.
3. After use: the learner's end-check results are the evidence. A lesson that does not move them is rewritten or cut,
   and the change is recorded in `design.md` with the date.

Reject when: a lesson is built from no block; a lesson is built while the pilot's review fails; a lesson goes `live` on
the builder's say-so.

Pass when: every lesson of the map is built, reviewed and live, and the subject record says `complete: true`.

## Auditing an existing subject

Run gates 1 to 5 blind (the "Must not open" column), then lay the existing lessons against the gate 4 map and the gate
5 blocks. For each existing lesson, one of: **keeps** (it is what gate 5 would have designed), **changes** (its part is
right, its practice is not), **goes** (it serves no part). Report the verdict per subject in a table in the record;
whatever does not pass goes back through the gates as a rebuild, never a patch. A kept lesson still needs its review
(gate 6 or 7) before it is live.

## Never

- Start from a template, an engine kind, another subject's record or existing content, and fit the subject into it.
- Write lessons before gates 1 to 5 pass, or more than one lesson before gate 6 passes.
- Count a passing validator as proof that a lesson teaches. It proves the lesson is well built; only a learner's try or
  review, and the end checks after use, prove it teaches.
- Ask the owner to read more than a screen to approve anything.
- Keep content because it exists, or because time and tokens were spent on it.
