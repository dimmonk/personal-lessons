---
name: build-subject
description: The only way to design, rebuild or audit a subject or course of lessons (any learning content, in any project). Walks eight gates, 0 to 7, in order: what the owner asked for, how people learn, the owner's one-paragraph goal and the list of what the subject teaches (signed off on one screen before any plan), how it is practiced, the parts, each lesson on paper, a pilot reviewed as a learner, then the rest. Every gate can refuse, the session that runs it is held to the gates too, and the record it writes grows gate by gate and is the one the validator reads. Use whenever the user asks for a new subject, course, module or lesson set, asks to rebuild one, or asks whether existing lessons work. Never start writing lesson content outside it.
---

# build-subject

## Pragmatic knowledge: the one goal

The app's slogan is the test of everything here. **Pragmatic knowledge** is knowledge the learner can use, in the
moment they meet it in life, with no background: hang up on the call, land the note, place the country, answer the
officer. After a subject, the learner can *do the thing in real life*. Knowing about it, naming its kinds, reading a
well-written card: none of these is the goal, and none counts as reaching it.

Every gate below serves that goal and nothing else. Earlier style rules, templates, engines and habits of the project
are inputs, not rules: each is kept only where it serves the goal, and a gate may overrule any of them. Writing that is
plain, a format that already exists, content that is already built: none of these is a reason to keep anything. One
thing is never overruled by a gate: what the owner asked the subject to teach, in their words. A design may argue that
an ask belongs elsewhere, but only the owner's recorded word drops it (gate 0).

## Why this exists

A whole subject (Singing, Fieldcraft, 2026-10-08) was built to be read: stories about other people's singing, sorted
into named kinds. It passed 1.6 million checks, because every check asked whether the lesson was well built and none
asked whether doing it makes you better at the thing. The template was chosen first (it already existed), the evidence
was written for that template, and nothing in the process ever asked what the learner would be able to do at the end.
Then (2026-10-12) the first version of these gates was audited (`docs/build-subject-audit.md`): eight subjects went
through gates 1 to 5 and no gate ever said no, because the gates were prose a writer interpreted; the one check that
found real defects was a reviewer reading a lesson as a learner, and its verdict had nowhere to be recorded. The same
day the owner found that the blind audit of Psychology had cut a lesson on biases they had asked for by name, and that
their one-line approval had been given to drafts written before the audits narrowed the subjects, so the cut was never
put in front of them. And the rebuilt skill was then reviewed (part D of the audit): the session that ran it had
written every owner field itself, through tools that took any words, and could not be told apart from a session that
skipped a gate. So this version opens with the owner's asks as a must-keep list, makes every gate refusable, puts the
owner's own paragraph and the list of what the subject teaches on one screen before any plan, records every owner word
with its source and binds it to the exact screen, names what may be opened at each stage, grows the record gate by gate
so a skipped gate shows, and holds the session to the same gates. **Design starts from the end result, never from what
the app already does, and nothing the skill asks for goes unchecked.**

## What the gates rest on

The evidence for the process itself is `docs/research/designing-a-subject.md` (D1 to D16, read as its Read lines say;
the note says where it rests on abstracts). In short: tests aligned to the practice show very large gains on that test
and much smaller ones beyond it (D1), so the test and every check are new cases in the real moment's form, and the
evidence after use includes something the lessons were not built around. In undergraduate science, doing beat
listening and the learners' feeling said the opposite (D4), so a pilot passes on its end check, never on how it felt;
how much reading is too much is a judgement call. For beginners, unassisted doing lost to being shown (D5): the real
action is shown first, and that shown case counts as practice, not reading. Practice transfers when it shares its
answers with the real use (D6: "response congruency" is the same correct answers or actions recurring, not the same
input device; the problem-solving result was weak). Programmes built on whole-task practice did better than parts
drilled apart, on a thin base (D7). Trying materials on someone who did not build them, then revising, improved them,
though how is less settled (D9); one tryout finds a minority of the problems (D10); a language model told to be a
beginner is not one (D11), which is why the stand-in review is a gate against broken lessons and not proof of teaching.
Far transfer is rare (D12), so a subject promises the specific skill in the form of use and nothing general. Seeing an
existing solution makes a designer reuse it, and being told not to copy did not reliably stop that (D14), which is why
the old content stays closed until the design is written. Mastery thresholds are a convention (D15). Gate 0 rests on
the owner's standing, not on evidence (D13), and the paragraph as a precheck is a judgement call: it is for the owner,
not the learner (D3). Where a gate below rests on judgement, it says so.

## How it runs

- **The gates run in order.** A gate is passed only when its fields are in the record and, where it says so, the owner
  has approved. No later gate starts before an earlier one passes. Going back is normal: a later gate that fails sends
  the work back to the gate that caused it.
- **One record per subject**: `docs/subjects/<id>/design.md`. It opens with the record as JSON between two lines of
  three dashes (the shape is below), then one `##` section per gate in prose: what was decided and why, with sources;
  the prose of an earlier design stays below under History. It is the single source for the subject's design; plans
  elsewhere point to it.
- **The record grows gate by gate, and a skipped gate shows.** A subject not yet in the app may stop after any gate.
  The validator (V69) refuses a record whose later gate's fields appear while an earlier gate's are missing, gate 3's
  fields before the owner's word is on gate 2's screen, and gate 4's before their word is on the practice. A subject in
  the app needs the whole record; its gate 3 fields change only with the owner's word on gate 2, its gates 4 and 5
  only with their word on the practice; and its content is frozen (nothing written or changed, measured against the
  last commit) while anything the owner asked for or signed off is in no part, while the design opened what it may
  not, while an approval or the record's own review is missing, or past the pilot while the pilot has not passed.
- **The owner approves twice**, and reads one screen each time: gate 2's screen (the paragraph, the list of what the
  subject teaches, the sentence, the test, and any ask of theirs the design drops), and gate 3's practice in three
  lines. `node tools/design/approve.mjs <subject> goal|practice --show` prints the screen; it is pasted to the owner as
  printed. Their reply is recorded with `approve.mjs <subject> goal|practice --words "<their reply, quoted>" --where
  "<where they said it>"`, which writes the date, their words, where, a fingerprint of the exact screen and (gate 2)
  the asks shown as dropped. A change to that screen afterwards makes the validator ask again. The same words on two
  subjects are refused: one message of the owner's approves one thing. Never ask the owner to read a gate's prose, a
  research note or a lesson to approve.
- **Every owner word carries its source.** Whatever is recorded as the owner's (an approval, a word on an ask, a try,
  a waiver) is their words quoted, with the date and where they said them. The tools refuse an entry without a source,
  and a word once recorded is never edited (the validator compares it with the last commit; a new word is a new entry
  in the prose, and the record keeps the one that stands). A waiver is per subject and per lesson, recorded each time
  with its source; the owner's standing instruction may be quoted again with its date, never assumed. The validator
  cannot check that a quote is real; the source makes it auditable, and a session that invents one is lying, which no
  rule can stop.
- **The session that runs the skill is held to the gates too.** A sign-off is asked for in the same turn it becomes
  possible, and nothing after that gate is started, by the session or by an agent it launches, until the owner's word
  is on the record: not a plan, not a design pass, not "structural work in the meantime". An approval given earlier,
  to other text or to everything at once, never carries over. The worklist's first item is always the next sign-off
  the owner owes, and everything else sits below it. What holds this mechanically: the staged record, the fingerprints,
  the holds, the committed-record comparison (an ask removed or reworded since the last commit is refused), the
  Disclosure line on reviews, the fingerprint a try carries (a rewritten lesson is tried again), the record review of
  gate 5 with its own verdict file, a deleted record or a shrunk `opened` list refused, the pre-commit hook that runs
  the lesson tier (`npm test` turns the hooks on), and the commit-message hook that asks for the owner's word on any
  change to the skill, the record rules and their harness, the tools or the hooks. What does not, said here so no one
  mistakes it for a check: a session can write a quote that was never said; a hook is skipped with `--no-verify`; a
  session that edits the validator and its controls together can switch a rule off (the commit then carries an owner
  line that only the owner can read as false). These rest on honesty, and on the owner reading the record's owner
  fields and the commit log, which this skill keeps short enough to read.
- **The question at every gate**, asked in the record: **"If the learner did only this, would they be closer to the end
  result?"** A "no" or a "not really" stops the gate.
- **Who applies each rejection.** Gate 0: the validator and the owner. Gates 1 to 5: the session that designs, checked
  by the validator where a field can be checked, and by an independent review of the record before the pilot is built
  (an agent that did not write it reads the record against this skill). Gate 6 and 7: the owner's try or a reviewer
  that did not build the lesson, never the builder.
- **What may be opened** (the record's `opened` keeps one list per stage; V69 refuses what a stage may not open):

  | Stage (list) | May open | Must not open |
  |---|---|---|
  | Gate 0 (`asks`) | the owner's messages, briefs and course documents; the version of the subject they were using (the tag `old-lessons`) | |
  | Gate 1 (`research`) | `docs/research/`, the sources themselves, `docs/learning-science.md` for its sources | any lesson, learner view or review; any other subject's record |
  | Gates 2 to 5 (`design`) | this subject's record, the notes gate 1 cites, `docs/lesson-standard.md` (what the app can do) | this subject's lessons (`public/subjects/<id>/`), its learner views and reviews; any other subject's record or lessons; the engine's code |
  | The comparison, in an audit | this subject's lessons and learner views, only after gates 2 to 5 are written | |
  | The writer, gates 6 and 7 (`writing`) | this subject's record, `docs/lesson-standard.md`, the test subject (`tests/fixtures/fixture-subject/`) for the data shape, this subject's own files, and this subject's old material at `old-lessons:public/subjects/<id>/…` once it fits a block | another subject's lessons: a lesson copied from one becomes a template |
  | The reviewer, gates 6 and 7 | the learner view, the running app, and the brief's pasted text (`stand-in-review.md`) | the record, the research, anyone's opinion of the lesson |

  Why: reading the old content first anchors the design on it, and being told not to copy does not undo having seen
  it (D14); reading another subject's record gives every subject one shape (eight records came out identical that
  way); a reviewer that opens the record sees the lesson's design and stops being a learner. Every brief to an agent
  lists the files it may open, and the agent lists what it opened.
- **The rules for building a lesson** are `docs/lesson-standard.md` (the rules in force) and the validator
  (`npm run test:lessons`). Nothing else is a rule, and a writer's brief points nowhere else.

## The record

The JSON that opens `design.md`. Every field is asked for by a gate below and checked by V69 (`tests/lessons/
rules-design.mjs` and `design-shape.mjs`); `//` lines here say which gate. A field the validator cannot check (what a
gate decided and why, the audit's verdicts, the evidence after use) lives in the prose, and this skill says so where
it applies.

```js
{
  "subject": "scams",                                  // the folder's name
  "asked": [                                           // gate 0: what the owner asked for, in their words; never dropped silently
    { "id": "biases", "words": "a lesson on biases and the different types of bias", "when": "2026-08-03",
      "where": "the owner's course document, Lesson 2; old Unit Two at the tag old-lessons",
      "owner": { "date": "2026-10-12", "words": "restore all the psychology and ideology topics", "where": "chat, 2026-10-12" },
      "kept": ["confirmation bias", "sunk cost"],      //   the topics (gate 2's list) that cover it, each of which a part must cover; null until placed
      "dropped": false }                               //   true only on the owner's word; an ask not dropped and not covered holds the content
  ],
  "kinds": ["judging", "habit"],                       // gate 1: facts, judging, procedure, body, habit
  "principles": [                                      // gate 1: the findings the lesson blocks cite, each cited by at least one block
    { "id": "SC1", "note": "scams-judging-and-acting", "decides": true, "read": "full",
      "choice": "the practice and the test answer with real actions, scored by the action" },   // decides: the choice that would differ
    { "id": "SC3", "note": "scams-judging-and-acting", "decides": false, "read": "abstract" }
  ],                                                   //   the note's own mark and Read line are read: a record claims no more than its note
  "opened": { "asks": ["psychology/the-course.md", "old-lessons:public/subjects/psychology/"],   // gate 0's sources: never empty when there are asks
              "research": ["docs/research/scams-judging-and-acting.md"],
              "design": ["docs/subjects/scams/design.md", "docs/lesson-standard.md"], "writing": [] },   // one list per stage; a list only grows
  "goal": "…",                                         // gate 2: the owner's paragraph
  "topics": ["what a request is", "…"],                // gate 2: everything the subject teaches, one line each
  "endResult": "…", "realMoment": "…", "test": "…", "out": "…",   // gate 2; the screen (goal, topics, endResult, test) is under 3,000 characters
  "practice": "…",                                     // gate 3: three lines, under 600 characters
  "feedback": "…",                                     // gate 3
  "delivery": ["a 20 second clock on a set", "…"],     // gate 3: what the app must do, each built or planned first
  "readingShare": 0.15,                                // gate 3: the most of a lesson that may be reading (mirrored in the subject record, V80)
  "form": "…",                                         // gate 4: the form the real moment forces on practice and checks
  "parts": [{ "id": "A", "title": "See the request", "check": "…", "topics": ["what a request is"] }],   // gate 4: its check and the topics it covers
  "lessons": {                                         // gate 5: one block per part, one part per block
    "l3": { "part": "C", "does": "…", "feedback": "…", "check": "…", "why": ["SC1", "SC5"] }
  },                                                   //   check is its part's check, word for word; why names principles above
  "pilot": "l3",                                       // gate 5: the first lesson built
  "approved": {                                        // gates 2 and 3, written by tools/design/approve.mjs
    "goal": { "date": "2026-10-13", "words": "On track.", "where": "chat, 2026-10-13", "fp": "sha256:…", "shown": ["biases"] },
    "practice": null                                   //   fp binds the printed screen, drops included; shown: the asks listed as dropped on it
  },
  "designReview": { "date": "2026-10-13", "file": "reviews/design.md" },   // gate 5: the record read against this skill by someone who did not write it
  "tried": {                                           // gates 6 and 7: one entry per lesson that was tried or reviewed
    "l3": { "by": "stand-in", "date": "2026-10-11", "review": "reviews/l3.md", "fp": "sha256:…",
            "waived": { "date": "2026-10-11", "words": "keep going, don't wait on my read", "where": "chat, 2026-10-11" } },
    "l1": { "by": "owner", "date": "2026-10-20", "words": "…", "where": "chat, 2026-10-20", "fp": "sha256:…",
            "passed": true, "confused": "…", "waste": "…", "comeBack": true }
  }                                                    //   fp: the lesson as it was tried (a rewritten lesson is tried again); a stand-in's verdict is its
                                                       //   review file's first line, and a Disclosure line voids it; an owner's try passes on `passed`
}
```

A subject not yet in the app carries `subject`, `approved`, `tried` and the fields of the gates it has reached, in
order. A subject in the app carries everything.

## Gate 0. What the owner asked for

1. **List every request the owner has made for this subject**, in their words (`asked`): what they said the subject
   should teach, in chat, in a brief, in a course document, in an earlier version they accepted. Each item has an
   `id`, their `words`, `when` and `where` it was said. For an existing subject, every unit of the version the owner was
   using is an item too, because they had accepted it. Write this list before gate 1, from the sources (`opened.asks`),
   never from memory, and `opened.asks` lists those sources. The words of an item, its when and where, and any word of
   the owner's on it never change afterwards, and an item is never removed: the validator compares the list with the
   last commit's and refuses a removed, reworded or edited ask, and a deleted record.
2. **The list is must-keep.** Later gates place each item: `kept` names the topics of gate 2's list that cover it, and
   gate 4 covers those topics with parts. A design that would leave an item out does not drop it: it leaves `kept`
   null, and the item is shown as dropped on gate 2's screen (an item is shown there while it has no topics and no
   word from the owner), and waits. Only the owner's word, recorded with its source in `owner`, settles an item: `dropped: true` on their word to drop it, or topics found for it on their word
   to keep it (`tools/design/asked.mjs`). An item they move to another subject is dropped here with those words and
   asked for there. While any item is not dropped and not covered, the validator refuses every change to the subject's
   content.

Reject when: an item of the list is not covered and has no recorded word from the owner (the validator refuses any
change to the subject's content while this is so); the list was written from memory instead of the sources; an item is
reworded into something smaller than what was asked; an item is gone since the last commit.

Rejected, for example: Psychology (2026-10-10): the blind audit cut the old Unit Two on biases ("general cognitive
biases: considered and rejected") although the owner had asked by name for "a lesson on biases and the different types
of bias", and the approval of the end result had been given before the cut existed. The item goes on the list with
nothing decided, it is shown as dropped on the gate 2 screen, and the subject waits for their word. (On 2026-10-12 the
owner's word was "restore all the psychology and ideology topics".)

Pass when: every item on the list is covered by topics a part covers, or dropped in the owner's recorded words.

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
   different if the finding were false: name that choice (`choice`). Everything else *supports*. A decides principle
   must have been read in full (the paper or its author manuscript, not an abstract or a summary), with where in it the
   finding sits, and the note's own "Read:" line says so. The validator reads the note's mark and Read line: a record
   claims no more than its note (a finding may decide less in a subject than in its note, never more; a record may not
   say "full" where the note read an abstract). A finding that would decide but cannot be read in full is marked
   supports, and the choice it would have decided is written as a judgement call to be measured. Most findings about a
   one-learner phone app will be supports; say so rather than inflate them.
4. **Record**: `kinds`, `principles` (each `id`, `note`, `decides`, `read`, and `choice` where it decides; only the
   ones the gate 5 blocks will cite, and every one cited by at least one block, so no principle is decoration), and
   `opened.research`.

Reject when: a principle names no finding in a note; a decides principle was not read in full or names no choice;
every principle is "supports" (then the evidence decided nothing, and the design is habit); a kind's principles were
borrowed from another kind without a line saying why they carry over.

Rejected, for example: Singing's first design (2026-10-08) took the principles of judging situations (named kinds, cases
to sort, look-alikes) for a body skill, with no line saying why practice on other people's singing would move a voice.
The gate sends it back to research the voice (`docs/research/learning-to-sing.md`, S1 to S6). And: "spaced returns
help recall" marked decides for Singing on an abstract about vocabulary: nothing in the voice design would change if it
were false, so it is supports, and it needs no full read. And: Math's M5 (2026-10-10) read Pan and Rickard's "response
congruency" from a summary as "typing beats choosing"; the full text says it means the same answers recurring (D6), and
the design choice it was carrying became a judgement call.

Pass when: every principle points to a finding in a note with the same or a stronger mark, every decides principle was
read in full and names the choice it decides, and `opened.research` holds only what gate 1 may open.

## Gate 2. The end result, on the owner's screen first

1. **The owner's paragraph** (`goal`), written before anything else in this gate and before any plan: in plain words,
   for the owner. What you will be able to do after this subject; where in your life it shows up; what it leaves out.
   It is the precheck: the owner reads it and knows at once whether the subject is on the right track, instead of after
   the lessons are written. Nothing past this gate is started until the owner's words are on it: no plan, no design
   pass, no agent. (This is a judgement call for the owner's sake, D3; the learner is served by the practice, not the
   paragraph.)
2. **The list of what it teaches** (`topics`), under the paragraph: every term, idea, skill or list the subject will
   teach, in plain words, one line each, so the owner signs off the contents and not only the aim. Gate 4 must cover
   every item of it with a part; the validator holds the content while one is uncovered.
3. **One sentence** (`endResult`): **"After this subject you can ___ when ___."** The second blank is the **real
   moment** (`realMoment`): where and how the learner meets this in life (a text on their phone, their own voice in the
   car, a bill, a news story).
4. **The real-world test** (`test`): a task in the form of the real moment, on new cases, with what counts as passing.
   It must be something the learner does, not something they say about it. ("Sing a five-note line with a guide note;
   at least four notes land on pitch." Not "name what is wrong with Nadia's singing.") The pass number is a convention
   (D15): say it, and do not argue it from evidence.
5. **What is out** (`out`): what the subject does not try to do, so it stays short.
6. **Ask the owner** with the screen `approve.mjs <subject> goal --show` prints: the paragraph; the topics; the
   sentence; the test; then, under "What you asked for that this design drops", every gate 0 item not covered and not
   dropped, in their words, with any earlier word of theirs beside it; then "On track, or not?". The screen is under
   3,000 characters; if it is longer, the subject is too big or the list too wordy, and that is the finding. Record
   their reply with `approve.mjs <subject> goal --words "<their reply>" --where "<where>"`, and their word on each
   dropped item with `asked.mjs`. The approval binds the printed screen, drops included: a change to the paragraph,
   the list, the sentence, the test or the words of a dropped item asks for it again, and so does a new item waiting
   for their word that was not on the screen they saw. An approval while an item is undecided is still an approval;
   the content waits.

Reject when: the sentence names knowing, understanding or recognizing rather than doing; the real moment is not a time
and place the learner meets in life; the test asks the learner to say something about the task instead of doing it, or
reuses the lessons' own cases; the screen is longer than one screen, or the paragraph says how the lessons work instead
of what the learner will be able to do.

Rejected, for example: "After this subject you understand how scams work, when you read about one." Understanding is
not an action, and reading about a scam is not the moment. Rewritten: "After this subject you stop, see what a message
wants, and check it through a way you already had, when a text, call or offer asks you to act." And: Geography's and
Psychology's approvals of 2026-10-12 were given to the paragraph alone, before the list, the sentence and the test were
on the screen; both were cleared and asked again on the printed screen.

Pass when: the owner's words, with their source, are on the screen (`approved.goal`), every dropped item on it has
been put in front of them, and the paragraph, the list, the sentence, the real moment, the test and what is out are in
the record.

## Gate 3. How it is practiced, and whether the app can deliver it

1. **The practice method** (`practice`), in three lines (under 600 characters), from gate 1's evidence for this kind
   of learning. Its core must be the real moment's own action: the same kind of input and the same answer or action
   (D6: what must match is the answer or action the learner produces, not the device they produce it on). A body skill
   is practiced by doing it with feedback; judging situations is practiced on real-looking cases; recall is practiced
   by recalling; a complex skill is practiced as a simplified whole before its parts are drilled apart (D7).
2. **Guided, for a beginner** (D5): the first item of each new kind is the real action shown and worked, and that shown
   case counts as practice, not as reading. After it, the learner does the action with feedback.
3. **What the learner spends their time doing.** Most of the time in every lesson goes to that practice, not to reading
   about it. Reading is the minimum needed to practice well: `readingShare`, the most of a lesson that may be reading
   (the validator's V73 holds every lesson to it). The number is a judgement call (D4); say which and why.
4. **Feedback** (`feedback`): where it comes from (the app measuring, a model to compare against, the learner's own
   check) and how fast.
5. **Delivery check** (`delivery`): what the app must be able to do for this practice (play and hear sound, draw a
   pitch line, time a hold, take a typed answer, take a tap on a map with no names), checked against
   `docs/lesson-standard.md` sections 3 and 10. Anything it cannot do yet is built before any lesson, or the subject
   waits. Never swap in a practice the app can already deliver because it is there.
6. **Ask the owner** with `approve.mjs <subject> practice --show` (the three lines, "On track, or not?") and record
   their reply with `--words` and `--where`.

Reject when: the practice's input or action is not the real moment's (sorting stories about singing; choosing a
country's name from four instead of placing it); reading is most of the time; the first item of a kind is not shown and
worked before the learner tries one; the feedback is slower or vaguer than the real moment allows; a delivery item is
missing because the app cannot do it yet.

Rejected, for example: Singing (2026-10-08) practiced by reading stories about other people's singing and sorting them
into named kinds. The real action is singing: rejected; the practice became sung tries scored on pitch, with the pitch
line built first (`delivery`). And: Geography practiced as a multiple choice of names because `choose` exists; the
moment forces a tap on a blank map, which goes on `delivery` and is built before the pilot.

Pass when: the owner's words, with their source, are on the practice (`approved.practice`), `readingShare` and
`feedback` are set, and every `delivery` item exists in the app or is planned before the first lesson.

## Gate 4. The form the real moment forces, then the parts

1. **The form first** (`form`), before any part is written: what shape does *this* real moment force on the practice
   and on each part's check? A sung try scored on pitch; a typed number with an estimate first; a tap on a map with no
   names; a reply chosen while a caller pushes; a typed answer to a spoken question. A check that is "ten items, 8 of
   10" is one form among many, never the default.
2. **Break the end result into parts** (`parts`): the smaller abilities it needs (for singing: breath, matching a note,
   holding it, moving between notes, range, a whole song line). Order them so each builds on the ones before; where the
   skill is a whole, the first parts are the whole made simple, not the pieces (D7).
3. **A check for each part** (`parts[].check`): a small version of gate 2's test, in the form of step 1, on cases the
   lesson did not use (D1); and **the topics it covers** (`parts[].topics`), from gate 2's list. Every topic on the
   list is covered by a part, and every ask's `kept` topics with it.
4. **One lesson per part.** Every part has exactly one lesson; no lesson exists without a part (V69 and V71). A part
   too big for one sitting is two parts.

Reject when: a part has no check, or its check is not a smaller gate 2 test (it asks about the part instead of doing
it); the parts do not add up to the end result (a learner who passed every part's check could still fail the gate 2
test); the checks' form was taken from another subject instead of this moment; a topic or an ask is in no part.

Rejected, for example: Ideology's part "know the history of each label": no check of it is a smaller gate 2 test (the
test is judging a label thrown on a post), so the part goes. And: a Singing check written as "ten items, 8 of 10" when
the form is a sung line without the pitch line; the check became "five notes heard and sung back, four on the note".

Pass when: the form is written, every part has a check in that form, every signed-off topic and every kept ask is in a
part, every part has one lesson, and the parts together add up to the end result (if every part passes, the gate 2
test would pass).

## Gate 5. Each lesson, designed before it is written

For each part, a block in `lessons` before any content:
- **Part** it serves (`part`).
- **What the learner does** (`does`), in order, and roughly how long: the shown case first, then the practice as the
  bulk.
- **Feedback** they get while doing it (`feedback`).
- **The end check** (`check`): the part's check from gate 4, word for word.
- **Why it works** (`why`): the gate 1 principle ids it applies.
Then name the **pilot** (`pilot`): the first lesson built, the one whose failure would teach the most.

Then, before the pilot is built, **an independent review of the record**: an agent that did not write it reads the
record against this skill, gate by gate, and lists what fails. What fails is fixed first. The review is a file,
`docs/subjects/<id>/reviews/design.md`, opening with `Verdict: passes` or `Verdict: fails` and a `Reviewer:` line (who,
which model, the date); the record points at it in `designReview`, and the validator holds the subject's content until
it passes. (The validator checks the shape; the review checks the design.)

Reject when: its main activity is not the part's real action; most of its time is reading; its end check measures
something other than the part; `why` names a principle gate 1 does not have; or the answer to "if the learner did only
this, would they be closer to the end result?" is not a clear yes.

Rejected, for example: a block reading "two screens explaining the five kinds of claim, then six items": most of the
time is reading, and six items do not practice five kinds. Sent back until the screens are one and the items are
enough to meet each kind twice.

Pass when: every part has a block that survives those rejections, the pilot is named, and the record's review
(`designReview`, verdict passes) found nothing left to fix.

## Gate 6. The pilot, built and reviewed as a learner

1. Build **only the pilot**, completely, from its block, to `docs/lesson-standard.md`, with `status: 'draft'`. The
   writer lists what it opened in `opened.writing`.
2. It is tried by someone who did not build it, cold, as a beginner:
   - **the owner** (or the real learner), on the device they will use, in the real conditions (for singing: a phone, a
     real room, a real voice). Record it with `tools/design/tried.mjs <subject> <lesson> --owner`: their words and
     where, whether they passed the end check, what confused them, what felt like a waste, whether they would come
     back. The try passes on the check; whether they would come back is recorded as a signal, not a bar (D4: feeling
     is weak evidence either way). The tool stamps the entry with the lesson's fingerprint.
   - **or a stand-in learner review** (`stand-in-review.md` in this skill), when the owner has said to go on without
     their try: an agent that did not build it does it as a beginner, does the end check, and answers with evidence.
     Record it with `tried.mjs <subject> <lesson> --stand-in reviews/<lesson>.md --words "<the owner's words for going
     on>" --where "<where>"`. The verdict is the review file's first line; a `Disclosure:` line voids it; its Gain answer
     is a model's judgement and is not what passes it (`stand-in-review.md`). The entry carries the lesson's fingerprint:
     once the lesson changes, it is tried again. The owner's own try, when it comes, overwrites it.
3. Decide: go on, or go back to gate 3 or 5. This caps the cost of a wrong design at one lesson. One try finds a
   minority of the problems (D10): the first lesson's review is the floor, not the proof.

Reject when: the try or review fails (the owner did not pass the check; the review's verdict is `fails`); the reviewer
was shown the record, the block or the evidence (a Disclosure); the lesson changed since it was tried; the lesson is
marked `live` without a passing entry in `tried` for the lesson as it is.

Rejected, for example: Scams' pilot (review of 2026-10-11): the answer key marked the lesson's own rule wrong on a real
bill, and the reviewer could not pass the check by following the lesson. Verdict fails; the lesson goes back to its
block (the feedback and the key), is fixed, and is reviewed again by a fresh reviewer. Five of the first seven pilots
failed this way, after passing every validator and browser check: the review is the gate. And: Singing's pilot "passed"
a review whose reviewer had seen the gate 5 list; the review carries a Disclosure and does not count.

Pass when: `tried[pilot]` holds, for the pilot as it is now, the owner's try that passed the check, or a stand-in
review whose first line is `Verdict: passes` and that carries no Disclosure. Only then may a lesson past the pilot be
written (V69).

## Gate 7. The rest, each reviewed, then evidence that it works

1. Build the remaining lessons, each from its block. Each gets the same try or review as the pilot before it is `live`.
2. The validator checks form (that the lesson is built right) **and** alignment: it refuses a subject whose record is
   missing a gate, a lesson without a block, a block whose check is not its part's, a lesson past the pilot before the
   pilot passed, and a `live` lesson without a passing entry in `tried`.
3. After use: the learner's end-check results are the evidence, together with something the lessons were not built
   around: a delayed check on new cases in the real moment's form, weeks later (D1; the gate 2 test's retest is that).
   A lesson that does not move them is rewritten or cut, and the change is recorded in the record's prose with the date
   (this is prose by design: the validator cannot read a result).

Reject when: a lesson is built from no block; a lesson is built while the pilot's review fails; a lesson goes `live` on
the builder's say-so; the evidence after use is only the lessons' own checks.

Rejected, for example: a second lesson of Math written while the pilot's review still said fails, because the writer
was already there. The validator refuses it (gate 6); the pilot is fixed and reviewed first.

Pass when: every lesson of the map is built, reviewed and live, the subject record says `complete: true` (V71 then
holds every part to one lesson), and the retest is scheduled.

## Auditing an existing subject

Run gate 0 from the sources (the owner's requests and the units they were using are both asks), then gates 1 to 5
blind (the "Must not open" column), then lay the existing lessons against the gate 4 map and the gate 5 blocks. For
each existing lesson, one of: **keeps** (it is what gate 5 would have designed), **changes** (its part is right, its
practice is not), **goes** (it serves no part). Report the verdict per lesson in the record's prose, in a table;
whatever does not pass goes back through the gates as a rebuild, never a patch. A kept lesson still needs its review
(gate 6 or 7) before it is live. A lesson that **goes** is an ask of the owner's (gate 0) until they say otherwise: it
is shown to them as dropped on the gate 2 screen, and the subject's content waits for their word.

## Never

- Start from a template, an engine kind, another subject's record or existing content, and fit the subject into it.
- Write lessons before gates 1 to 5 pass, or more than one lesson before gate 6 passes.
- Count a passing validator as proof that a lesson teaches. It proves the lesson is well built; only a learner's try or
  review, and the end checks after use, prove it teaches. Count a stand-in's Gain verdict as proof of nothing.
- Ask the owner to read more than a screen to approve anything, or record as theirs words they did not say about that
  screen.
- Keep content because it exists, or because time and tokens were spent on it.
- Drop anything the owner asked for on the strength of a design argument or an earlier blanket approval: only their
  recorded word on that item drops it.
