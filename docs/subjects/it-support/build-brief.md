# IT Help Desk: brief for a lesson builder

You build lessons of the subject `it-support` (shown as "IT Help Desk") in this app. Several builders work in this folder at the
same time, each on its own lessons.

## Read first
1. `docs/subjects/it-support/plan.md`: the whole plan. Your lesson's line there is your spec: what it teaches, its check, its sources.
2. `docs/research/it-support.md` (how technicians reason, IT1 to IT29) and, for units 2 to 8, `docs/research/it-support-aplus.md`
   (every exam objective). Every claim a lesson teaches comes from these notes or from the exam objectives; facts must be exactly
   right (port numbers, commands, RAID levels, steps in order). Put the finding numbers and objective numbers you rely on in the
   comment at the top of your lesson file.
3. `docs/lesson-standard.md` sections 3 to 4 and 8: how a lesson, an item, a block and an ask are written, and the words rules.
4. `public/subjects/it-support/subject.js`: the lists worded once (`kind`, `priority`, `move`, `slip`) and the strands.
5. For syntax only, one existing lesson and its items (e.g. `public/subjects/stats/l2.lesson.js` and the items it names; an
   `exchange` ask in `public/subjects/scams/`). Never copy another subject's structure, wording or teaching order: this
   subject's shape comes from its own research (the plan's "How the lessons are shaped").

## The learner
A career changer with no IT training (a former gym owner who built web apps with AI help), studying for an entry-level help desk
job and the A+ exams. Explain any IT word the first time a lesson uses it, in a line. Tickets look real: a user's email or chat
(`message` block), a ticket record, a desk's priority table or command output (`document` block, form `table`), a call
(`exchange` ask, where the learner picks what to say and the user answers).

## Shape of each lesson (plan, "How the lessons are shaped")
- `why`: opens on a real ticket, then what the lesson lets you do.
- Teaching screens: the move or the chain, with the reason for it; one `tone: 'wrong'` screen for the common novice error the
  research names.
- One worked ticket (`worked`) whose steps show the technician's reasoning, including a first guess the test rules out.
- A first group of questions with help that fades (`support: { shown: true }` or the panel), then a group with no help, then a
  group mixed with the earlier lessons you own (`mix: { from: [...], share }`); cross-builder mixing is added later.
- A check of new questions, `feedback: 'at-end'`, with a pass rule (about 80%); none of its fixed questions appear in the groups.
- Enough reserve questions for each strand the check covers (V77: three unseen per strand).
- Every wrong option has its `then` or a slip; every `reason` names the move or the link that decides it.
- **No answer by pattern** (first reviews of lessons 1 to 8): the right option must not be the longest, the only one with a
  person or a time in it, the only one saying "sorry", or always worded the same; write wrong options as plausible things a
  novice would do, of the same length and tone, and use `shuffle: true` on options. Keep every rule a lesson states true of every
  question it marks (if the lesson says "work stopped means urgent", no question with work stopped is marked otherwise).
- Read `rulings-l1-8.md` and `rulings-l9-13.md` in this folder: they settle how the moves are taught and how wrong options are
  written (cheap tests that do not split are wrong options too; calls are not always "ask a question"; recall options come from
  the same family). Each system lesson names its chain.
- Exam facts asked from memory (`text` with `accept`) come from CompTIA's published objectives, which `subject.js` names in
  `refs`: never mark them `taught: true` (that flag is for answers in the subject's own words only).
- Explain every IT word the first time any of your questions uses it (VPN, DNS, spooler, workaround, docking station).
- `rev: 1`, `status: 'draft'`, a history entry dated today.

## Files and shared edits
- You own `public/subjects/it-support/l<N>.lesson.js` and `items-l<N>.js` (split into `items-l<N>-check.js` etc. if a file
  passes 800 lines). Item ids are unique across the subject: prefix every id with your lesson, e.g. `l3-...`.
- Shared files, edited with the smallest insertion, re-read just before each edit, never reordering or changing others' lines:
  `public/index.html` and `public/sw.js` (`SHELL`): add your files after the last `subjects/it-support/` entry, items files before
  the lesson file. `subject.js`: you may add slips at the end of `lists.slip`, a new list, or a strand (lessons 9 on add their own
  strands; recall lessons one strand per fact group). Prefix new slip and list ids with nothing; keep them distinct and plain.
- Do not commit, push or deploy. Do not touch other subjects or the engine (`public/app/`). If the engine cannot do what the plan
  needs, write it in your report instead of working around it.

## Words (validator V50, V60, V62, V4)
- Never in learner text (quoted blocks excepted): ask, asks, item, set, sets, support, key, keys, route, gate, strand, facet,
  generator, lesson, and the abstract words in `tests/plain-words.mjs` ("case" is "story" or "ticket", "appropriate" is the actual
  thing). Write "find out", "question the user", "help desk", "set up" becomes "configure" or "put in", "settings" is fine,
  "product key" and other real terms go inside a quoted `document` or `message` block.
- American English; no exam codes or ids in learner text (say "the first A+ exam", not "220-1201"); no praise; feedback opens with
  the reason, not "Correct".

## Check your work
- **Never run `tests/validate-lessons.mjs`, `tests/lessons/lock.mjs` or the learner-view renderer yourself** (several builders
  at once overload the owner's Mac). The lead runs them one at a time and sends back what they find. You run only
  `node tools/option-lengths.mjs it-support`. The two bullets below are the lead's.
- `node tests/lessons/lock.mjs && node tests/validate-lessons.mjs`: fix every failure that names your lesson or items. Failures in
  other builders' lessons are not yours.
- `node tools/option-lengths.mjs it-support`: your lesson must show ✓ (right option not given away by length: longest or shortest in at most 40% of its
  choices), and none of your reserve questions may be among the ids listed under (reserve).
- `node tools/learner-view/render-learner-view.mjs it-support l<N>` writes `docs/learner-view/it-support-l<N>.md`: read it cold
  as the learner and fix anything a beginner would trip on.
- Report in under 200 words: what you built, slips or lists added, anything the engine could not do, open doubts.
