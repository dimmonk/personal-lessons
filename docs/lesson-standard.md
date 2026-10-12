# Fieldcraft lesson standard, version 2 (the rules in force)

Status: this file holds only the rules in force for building a lesson, as the code implements them on 2026-10-12
(`FC.STANDARD` is 2). It is short on purpose: a writer reads it and nothing else, beside the design record and the
validator. Everything that came before it, including the engine deleted on 2026-10-10 and the reports of how each step
was built, is in `docs/lesson-standard/history-v1.md`. Nothing in that file is a rule. A change to a rule here is a
dated entry in section 11 and the edit in place.

Words used here: a **subject** is one course (Scams, Singing); a **lesson** is a short why, practice, and an end check;
an **item** is one question; a **set** is a group of items; an **ask** is one response inside an item; a **strand** is
what the review brings back; a **facet** is a way items are counted apart; **support** is help during an attempt. These
are the maintainers' words. The learner never sees them (V50): the app says question, group of questions, help, topic.

## 1. The core

The core was confirmed by the owner on 2026-10-05. In the owner's words (a unit is now a lesson):

Fieldcraft is pragmatic knowledge for someone who is not specializing. The bar for every unit: **a beginner reads it
once and can explain the idea and use it.** There is no word count, range or target. Every unit keeps the light core of
the research, and only that:

1. **A real example first.** Each idea starts from one everyday case, before any rule or name.
2. **Answer before you see the reason.** The learner commits to an answer, then the reasoning is shown.
3. **Quick questions with an explanation for each answer.** Short practice, and every answer, right or wrong, is
   explained at once.
4. **Questions come back on later days.** The returns already built.

**Which rule wins.** The one goal of the build-subject skill (`.claude/skills/build-subject/SKILL.md`) governs: after a
subject, the learner can do the thing in real life, in the moment they meet it; a rule that does not serve it is not
kept. The core is that goal's reading bar for text: where a rule asks a text for more than the core needs, the core
wins. It does not outrank section 4's practice rules (feedback, support and fading, order and difficulty).

## 2. Design

Every subject is designed, rebuilt or audited through `.claude/skills/build-subject/SKILL.md`. Its gates are not
restated here; read the skill.

The design record, `docs/subjects/<id>/design.md`, is the single source of a subject's design. Its opening JSON holds
what each gate decided: the kinds of learning and the principles behind them, the owner's paragraph and the end result,
the practice and what the app must deliver, the most of a lesson that may be reading, the form, the parts and their
checks, one block per lesson, the pilot, the owner's two approvals, the try or review of each lesson, and what the
designer opened. V69 reads that JSON and refuses what is missing or inconsistent, and holds back any lesson the gates
have not yet allowed. This standard says how a lesson is built once its block exists.

Three fields of the subject record mirror the design record: `endResult` (the sentence the owner approved, `approved.goal.sentence`, held whenever the subject record is written) and `readingShare` (V80), and `parts` (V71).

**Old material.** A writer may take raw material (a story, a number, a line) from the tag `old-lessons`'s version of
**this subject only** (`git show old-lessons:<path>`), once it fits a gate 5 block, and lists it in the record's
`opened.writing`. Never another subject's lessons (the skill's "What may be opened"). Nothing is migrated.

## 3. The data model

### 3.1 Files

Classic scripts, no modules and no build step. One registry, `FC` (`public/app/registry.js`), deep-freezes everything it
is given. Every file is under 800 lines and listed in both `index.html` and `sw.js`'s `SHELL` (V47).

```
public/subjects/<id>/subject.js       FC.subject   the subject record
public/subjects/<id>/l<N>.lesson.js   FC.lesson    one lesson
public/subjects/<id>/items-<k>.js     FC.items     fixed items, in as many files as needed
public/subjects/<id>/gen-<k>.js       FC.gen       items made with fresh numbers
```

`FC.ENGINE` goes up whenever the app's own wording changes. The app's own wording is `SAY` in `public/app/lessons/view.js`, written once.

### 3.2 The subject record

```js
FC.subject('stats', {
  id, name, rev, standard: 2, history,
  endResult: Text,                       // the design record's endResult, word for word (V80)
  parts: [{ id, title }],                // the design record's parts, word for word (V71)
  complete?: true,                       // set in the commit that adds the last part's lesson
  readingShare: 0.25,                    // the design record's readingShare (V80); V73 measures against it
  lists: { verdict: [{ id, text }], slip: [{ id, text }], trigger?: [...], ... },  // option lists, worded once
  rules?: { [ruleId]: { name, needs: [{ id, text }], heading? } },               // what a label or a word requires
  facets: { [facetId]: { name, values: [{ id, text }], compare?: true } },
  mix: [{ facet, value, min?, max? } | { facet, equal: true }],                   // what every set and check holds (V76)
  strands: [{ id, title }],              // what the review schedules (section 6)
  review?: { gaps?: [2, 7, 24], every?: days, dateField?: 'answers.interviewDate' },
  timed?: true,                          // only a subject whose design times its items
  danger?: { slip, facet, risky, real }, // the slip that is the failure, and which facet value is risky and which real (V82)
  refs?: [{ id, text, value, asOf, source }],   // values looked up on a date, not memorized
  own?: { [formId]: { into, fields, rows? } }    // the learner's private forms (section 5.3)
});
```

- `parts` lets the offline app list each part that has no lesson as "Not built yet". Before `complete: true`, a part may
  have no lesson; after it, every part has exactly one (V71). Two lessons for one part, a lesson for a part the record
  does not have, and lessons out of part order are always refused.
- `endResult` is the sentence on the screen the owner signs off at gate 2 (the paragraph, the topics, the sentence and
  the test), under `approved.goal`'s fingerprint, so V50 and V62 leave it alone. The parts' titles are the design
  record's gate 4 words (V71), under no approval; V50 and V62 leave them alone too (section 8.2).
- A facet with `compare: true` shows its values side by side at the end of a check, a retest and the review ("Labels
  thrown from the left: 3 of 3 beside from the right: 2 of 3"), when at least two of its values were met.
- A rule with `heading` is a checklist of its own and stands alone in its panel: the heading replaces "What the label
  needs" beside the item and in the feedback.
- Item and generator ids are unique in the subject, and a need's id differs across all of the subject's rules (V70).

### 3.3 The lesson

```js
FC.lesson('stats', {
  id: 'l2', part: 'B', role?: 'baseline',  // part is a gate 4 part id; only a baseline has part: null
  title, rev, status: 'draft' | 'live', history,
  trigger?: triggerId,                     // a moment of lists.trigger the lesson waits for (section 5.4)
  why: Text,                               // one screen
  flow: [Step],
  check: Check });
Step = { show: [Block], title }            // a teaching screen: a rule, a wrong idea, a contrast pair, a map
     | { worked: itemId }                  // an item shown answered, step by step (one optional choice to commit to first)
     | { set: Set }
     | { own: formId, model?: itemId }     // the same step on the learner's own data (section 5.4)
Set  = { items: [ItemRef | [ItemRef, ItemRef]],   // an inner pair is asked back to back, its order random
         order: 'listed' | 'shuffle', support?: Support, seconds?: 15 | 20,
         mix?: { from: [lessonId], share }, over?: 'busy', plan?: true }
ItemRef = itemId | { gen: genId, n, with?: params } | { sing: { task, ...params }, n }
```

A lesson is `live` only through a passing entry in the design record's `tried` (V69); the lesson itself carries no
`tried`. Its revision and history are real fields: a history entry with a date and a change for every revision (V45).

A **baseline** (`role: 'baseline'`) has no part; its flow holds only screens that say how it goes; its check holds every
answer to the end; it is shown first and run in the context `baseline`. Its first screen says what it is and gives the
clock, with no rule; its last is one line counted from `subject.danger` (`SAY.baselineLine`: "Of 6 scams, you did what a
scam asked on 1. Of 4 real messages, you handled 4 the right way."). It is done when its check has one complete run. It
never counts in results by lesson or by facet, never starts a strand's schedule or the weekly review, is not a part
built, and cannot be practiced again. The results screen shows its line on its day.

### 3.4 Checks and pass rules

```js
Check = { items: [ItemRef] | { draw: { strands, n } }, feedback: 'at-end' | 'after-each', pass: [PassRule],
          order?: 'listed' | 'shuffle', recall?: true, spoken?: true, seconds?: 15 | 20, retest?: days }
PassRule = { ask?, where?: { facet: value }, right?: { min }, wrong?: { max }, slip?, max?, of?: Text }
```

- A check is written in the design's terms. "8 of 10, no control pattern missed" is
  `[{ right: { min: 8 } }, { where: { kind: 'control' }, wrong: { max: 0 } }]`; "no scam acted on" is
  `{ slip: 'acted', max: 0 }`; "4 of 5 estimates" is `{ where: { kind: 'estimate' }, right: { min: 4 } }`.
- A rule counts the items its `where` selects (with `ask`, those that answered that ask). `right.min` needs that many
  right, `wrong.max` at most that many wrong, `slip` with `max` (0 if left out) at most that many with that slip. `of`
  says in words what a rule by ask counts ("At least 3 right (what the account costs a year, to within a tenth)").
  `ruleText` reads each rule in words ("At least 8 right", "None wrong among control patterns").
- None of a check's fixed items appears in the lesson's sets, unless the check says `recall: true` (V72): a recall check
  asks again only items the lesson's sets asked, each once. A drawn check cannot be a recall check (V70).
- `order: 'shuffle'` hides a hint in an item's place; it applies to a retest of the check too.
- A drawn check (`draw`) picks `n` items of the named strands at random, the same run drawing the same; items no
  earlier check or retest of the lesson asked come first, and an item that reads the learner's own answers is left out
  until they are entered. It is how a mock interview is built.
- `spoken: true` reads each question aloud and holds its words behind "Show the words".
- A check never has support (V79). A lesson is done when its check has one complete run, passed or not.

### 3.5 The item and the generator

```js
{ id, strand, facets: { [facetId]: valueId },
  blocks: [Block],                     // what the learner sees
  asks: [Ask],                         // answered in order on one screen; each opens when the one before is answered
  steps?: [{ id, does: Text, working: Text, ask?: askId }],   // the working, shown in worked items and feedback
  reason: Text,                        // why the right answers are right, quoting the deciding words; always shown
  deciding?: [segmentId | rowId],      // marked in the blocks after the answer
  need?: Text,                         // what you would need to see for it to hold
  has?: { [needId]: segmentId | null },  // each need of the item's panel found (where) or missing
  fact?: itemId,                       // the question an answer rests on, printed with its accepted answers
  redraw?: 'from-zero', figure?: Block }   // pictures added to the feedback
```

- Segment, ask, step and option ids are unique within an item. `ask.when: { ask, is: [optionIds] }` opens an ask only
  after that answer and names an ask before it. A step's `ask` is an ask of the item.
- An item is right when every scored ask that opened is right.
- `fact` names another item of the subject that has answers from memory, never itself (V70); the feedback prints it
  under "The interview question this rests on".

**A generator** (`FC.gen`) is an item whose numbers are made fresh: the item fields plus
`params: { name: [min, max, step] | [choice, ...] }` and `make(pick, params)`. A parameter is a range when it is three
numbers with the step above zero and min at most max; any other list is a list of choices. `pick(name)` returns that
parameter's value for the seed; every parameter is drawn first, in the order listed (`with` fixes some), and `make`
returns the derived values. `make` is pure: the same seed gives the same item. Text fills `{name}` slots. A made
`choose` puts its answer in a slot (`right: '{verdict}'`) or names values (the ask's `answer`, an option's `value`). A
try stores the seed, never the numbers. Money is made in whole cents and compared by the stated rounding, so no float
edge decides a mark.

### 3.6 Asks

| Kind | Shown as | The learner | Scored | After a miss |
|---|---|---|---|---|
| `choose` | buttons: `options`, or `from: listId` with `right` (and `only`) | taps one (`many`: several) | right if exactly the right options are tapped | the chosen option's `then`, or its slip's name |
| `number` | a `frame` with a blank per value, the `unit`, a calculator button | types numbers | every blank within `tol`; else the first matching trap | the trap's `then`; else the working |
| `form` | rows of number and choice fields, answered whole | fills them in | field by field, as `number` and `choose` | a line per missed field, in its own kind's words |
| `tap` | the `lines` of block `in` become buttons; `none` adds a "Not given" button | taps one line (`pick: n`: n) | right if the tapped set is `right` | "You tapped …" and the line's `note` and slip |
| `text` | a box under a `spoken` question, and "Not yet" | types words | matches an accepted answer (section 3.7); with `model`, never scored | every accepted answer, and the item's `reason` |
| `order` | `steps` to put in order | taps `right.length` of them | the whole order, or `scored: 'first'` | the right order and `then` |
| `exchange` | a call or chat whose turns follow the replies | picks a reply each turn | right if it reaches an `ok` end | the pushing lines marked, and where it could have ended |
| `sing` | the pitch strip (section 3.8) | sings after the target plays | section 3.8 | the result in words |

- **A verdict** is a `choose` drawing on the subject's `verdict` list, so its words are typed once and are the same in
  every lesson, check and result. `only` offers part of the list where a lesson teaches part of it.
- **Several asks in one item** make a fixed sequence (Ideology: the verdict, the name the words earn, the deciding words;
  Psychology: the act, what else would explain it, whether the word fits, the next step). Nothing is given away before
  the last ask is answered (X2).
- **Wrong answers are named.** A wrong option, a number trap, a tapped line or an exchange end may carry `slip`, an id of
  the subject's `slip` list. Results and pass rules count them.
- **Timeout**: in a timed set, an unanswered ask at zero records `timeout`, a miss that is not a slip.
- `ASK_KINDS` and `BLOCK_KINDS` in `public/app/lessons/rules.js` are the one list of what is built. A written item with a
  `sing` ask or a `pitch` block is refused: only the app makes those.

### 3.7 Each ask in detail

**`choose`** `{ id, kind, prompt, options?: [{ id, text, ok?, slip?, then?, value? }], from?, right?, only?, many?,
then?: { optionId: Text }, slips?: { optionId: slipId }, answer?, shuffle?, when? }`. An ask with its own options says
what follows a pick on the option; an ask drawing on a list says it with `then` and `slips` maps. An `ok` option's
`then` is the consequence of the right action, shown in the feedback. `shuffle: true` orders the options by the item's
seed (the same each time it is shown, never stored), so a template's right option is not always in one place.

**`number`** `{ id, kind, prompt, frame?, unit?, places?, answer, tol, estimate?, traps?, when? }`. `frame` has a blank
(`__`) for each value of `answer` (a number, a value the generator makes, or a list of them); `places` fixes the
decimals printed. "$1,234.50", "40%" and " 7 " read as numbers; anything else keeps Answer shut. The answer is stored as
the list of numbers typed. `tol` is one of four: `{ round: step }` (the same when both are rounded to the step),
`{ band: [least, most] }` (from least to most times the answer), or `{ abs }` and/or `{ rel }` (either is enough); `round`
and `band` stand alone. The result is `ok`, the slip of the first trap whose value matches (by the same `tol`), or `no`.
`traps: [{ slip, value, then? }]` names the numbers a learner gets by each slip; with no `then` the slip's name is printed.
- **The estimate is an ask of its own**, `estimate: true`, placed before the exact one (V74), with no calculator. It has
  its own result, so a pass rule can count it and the feedback puts it beside the exact answer ("You said $68.00. The
  exact answer is $72.40, so you were 6% under."). With no `tol` it is right from half to double (`band: [0.5, 2]`). A
  wild estimate makes the item a miss.
- **The calculator** does four operations, one at a time, opens under the boxes (never on an estimate), and "Put it in
  the box" copies the display to the first empty box. What is typed survives a repaint.

**`form`** `{ id, kind: 'form', prompt, fields, when? }`. A field is the shape of a `number` or `choose` ask without
`id`, `kind` and `prompt`, plus `id`, `label`, `type: 'number' | 'choose'`. **A form ask is only the scored form on a
sample**; the learner's own data is never an ask (section 5.4). Answer opens when every box holds a number and every
choice has an option; the answer is stored as `{ [fieldId]: [numbers] | optionId }`; the result is `ok` when every field
is right, else the slip of the first field that has one, else `no`. A form has no calculator: a sum to work out is a
`number` ask of its own.

**`tap`** `{ id, kind, prompt, in?, pick?, right: [segmentId] | 'none', none?, when? }`. The lines of the block named by
`in` (or of every block) become buttons while the ask is open; a headline never does. With one line wanted the tap is
the answer; with `pick: n` the learner taps n (a second tap lets one go) and then Answer. `right: 'none'` needs the
button's words in `none` ("Not given"), stored as `['none']`, so no line is called `none`. A right line is among
`deciding`, so it is marked after the answer (V74). An item has at most one tap. In a check the line tapped shows as
chosen and nothing is marked until the end.

**`text`**, two uses, never both:
- *A line to write*, `{ id, kind, prompt, model, when? }`: the words are never scored (no entry in `r`); the item is
  right or wrong by its other asks, and needs one that is scored (V74). At most 400 characters, trimmed. "Not yet"
  answers with nothing. The feedback shows the words beside "A model line", neither marked. Stored as `a: { say }`.
- *An answer from memory*, `{ id, kind, prompt, accept: [Entry] | { own: 'answers.q23' }, count? }`, under a `spoken`
  block that holds the question. An `Entry` is a string (words in brackets are optional; a bracket that offers a choice
  may be said with either half) or `{ text, parts }` (parts in any order). `count: n` needs n different accepted answers
  in what was typed. `accept.own` reads the learner's own entry. The item's `reason` is the meaning line, shown after
  every answer with every accepted answer. The app accepts only what the list prints.
- *What counts as the same* (`recall.js`): capital letters, accents, punctuation, "a", "an", "the" and "and" do not
  matter; "U.S." is "us" and "state's" is "states"; a number in words is the number, and two number words that do not
  join are two numbers ("two three" is 2 3); words in brackets are in or out; one small misspelling in the whole answer
  is forgiven (one letter off, in a word of four letters or more, never a number). Every word typed must belong to some
  accepted answer: a word left out or added, another answer's words, or two misspellings is a miss. With `count`, the
  same answer twice counts once. X14 asserts each of these.
- *A claim*, "My answer means the same": after a miss with something typed, it counts the answer right in that sitting
  (`r: 'claimed'`, shown as "Counted on your word"), logs `claim`, removes the item's repeat, and is not a good day for
  the schedule, so the question returns. Offered in a set, in the review and among a check's answers; never in a
  baseline or after "Not yet". A pass rule by ask counts a claim as right.

**`order`** `{ id, kind, prompt, steps: [{ id, text }], right: [stepId], scored?: 'whole' | 'first', then, when? }`.
Every step is offered, mixed and never already in order; `steps` may hold one that belongs in no order; the learner taps
`right.length` of them, each numbered and shut, and "Start again" clears them. `scored: 'first'` is right when the
first step is.

**`exchange`** `{ id, kind, prompt, form: 'call' | 'chat', from, detail, start, turns: { id: { lines, push?, options:
[{ id, text, goto } | { id, text, end }] } }, ends: { id: { ok, then, slip? } }, when? }`. One question, never timed (a
timed set leaves it off the clock), scored by its end: `ok`, the end's slip, or `no`. A turn's `push` names how it
pushes. Nothing is marked before the end; then the pushing lines on the way are marked and named, and the reply where it
could have ended right is named. V70 refuses a reply to a turn that does not exist, looping turns, unreachable turns, and
no right or no wrong end; V74 refuses an exchange in which nobody pushes, or no reply that holds off meets more pressure.

### 3.8 The sing ask

A sung question is never a written item. A set or check names a task, `{ sing: { task, ...params }, n }`; the app makes
each question from the learner's range and a seed, and stores its tries under `sing-<task>`. Its strand is the task.
`SING_PARAMS` in `public/app/lessons/sing-task.js` is the one list of limits (V78).

- **Tasks**: `warmup` (a hum with the line, unscored, skippable by "Skip the warm-up"; a step of its own, the first of
  every sung lesson, never asked again, not stored), `range`, `match`, `hold` (`seconds` 2 to 6), `slide`
  (`maxSemitones`), `interval` (`minSemitones`, `maxSemitones`), `melody` (`notes` 3 to 5, `maxStep`), `light`. `cents` (5 to 100, default 25) is a setting of the
  task, so the tolerance travels with its questions.
- **Targets**: match and hold notes from the middle 60% of the range, light notes from its top fifth; every note of
  every task inside the range (V78 makes each task on 200 seeds over five ranges).
- **Turn-taking**: a tap plays the target (a note 1.5 s; the two notes of a slide or interval 1 s each; a melody's notes
  0.8 s and its last 3 s; 0.12 s between). The microphone is ignored while it plays and for 0.25 s after; the window is
  each note plus 0.4 s (a hold: its seconds plus 1 s). Sound runs on the audio clock and readings on the frame loop
  (about every 50 ms); there are no timers.
- **Scoring**: a note's error is the median of the middle 60% of its clear readings, each folded to the octave nearest
  the target; at least 5 clear readings (a slide's last 0.4 s, 3). A hold is the longest unbroken run inside the
  tolerance (a gap over 0.12 s breaks it). An interval needs both notes on; a melody `ceil(0.8 n)` notes on and its last
  held 2 s; a light note must be on and its median loudness at most 1.15 times the learner's talking note, measured in
  the same set from two unscored notes (loud, then talking). A missed note in a run counts as 1200 off. **Silence is not
  a miss**: nothing is stored, and "Try again" makes the same question again.
- **Words**: "On the note", "A shade under", "A shade over", "Well under", "Well over", "Not heard" (`SAY.singWord`); a
  shade is up to 100 hundredths of a half-step past the tolerance. Never cents or hertz.
- **The strip** (`pitch` block) is drawn around the target, the bar the height of the tolerance; a voice an octave away
  is drawn on the bar. With `support: { line: true }` targets and voice are drawn while singing; without it the strip is
  empty and the result is drawn after. A hum is always drawn.
- **The range** is two 7 s hums, a slide up and a slide down, each ended on a held note. The lowest and highest steady
  notes (0.3 s within half a half-step) are saved as the nearest notes, only when they span a fifth or more, as
  `notes.range = { low, high, set }` and nowhere else; the try stores `{ span, steady }`. A sung set or check whose
  learner has no range runs it first, as its own run in the context `practice`.
- **The microphone**: a tap turns it on once for a whole set; it goes off when the set ends, on Back, when the page is
  hidden and on "Turn the microphone off". No echo cancelling, noise suppression or automatic gain. Refused or missing:
  one plain line and "Try again". Nothing is recorded, kept or sent.
- **A sung check** shows its result after each try (`feedback: 'after-each'`), never has the line, and says "on the
  note": "4 of 5 on the note: passed", "3 of 5: not yet".

### 3.9 Blocks

| Block | What it shows | Fields |
|---|---|---|
| `prose` | a short text; `tone: 'wrong'`: every paragraph but the last is the wrong idea, the last is the right line | `id?`, exactly one of `text` or `lines` |
| `pair` | two blocks side by side (stacked on a phone) and the one thing to compare | `a`, `b`, `compare` |
| `message` | a message as it arrives: `friend` (a friend's message about someone), `thread` (a thread you are in; your lines carry `me` and stand at the right), `note` (your own note), `sms`, `email`, `popup`, `chat` (drawn like a thread), `call` (the caller's lines as a transcript), `banner` (one short line over another task) | `id?`, `form`, `from`, `detail`, `lines`, `subject?` (email only), `link?` (words drawn like a link, never followable) |
| `article` | `news`, `post`, `ad`, `report`: where it comes from, a headline (every form but a post), the lines, small print last | `id?`, `form`, `source`, `headline?: Segment`, `lines`, `label?: { text, by, side }` (a post only) |
| `chart` | bars or a line drawn as SVG from its data; an axis may start above zero, and then the start is written on it | `type`, `title`, `x`, `y: { from, to, step, unit? }`, `series: [{ name?, values }]`, `source`, `labels?` |
| `document` | `receipt`, `recipe`, `tag`, `offer`, `statement`, `fees`, `paystub`, `matchrule`, `beneficiary`, `foreign`, `table`; adjacent documents with a `tab` are one group of tabs | `form`, `title`, `rows: [{ id, cells, strong? }]`, `notes?`, `head?`, `tab?` |
| `figure` | `rate-table`, `bar` (the 100% bar), `plan` (a room plan to scale), `years`, `people` (1,000 dots a row, the first `count` marked) | `type`, `data` (shapes in `tests/lessons/shapes.mjs`) |
| `ref` | a value looked up: its text, the value, "Looked up <day>", "Source: …", a line to check the source, and after a year a line to look it up again | `ref` (an id of `subject.refs`) |
| `panel` | what a label or word requires, printed from `subject.rules`, beside the item while the help lasts | `rules` |
| `spoken` | a question read aloud by an on-device voice; its words shown, or held behind "Show the words" | `text`, `show?` |
| `pitch` | the strip of a `sing` ask; made by the app, never written | none |

- A `Segment` is `{ id, text, note?, para?, fine?, slip?, me? }`: every line that can be tapped or marked is one.
  `para` starts a paragraph, `fine` is small print, `me` a line you sent (a thread only).
- **A message** has at least one line; a thread or chat has at least one from the other person (V70), and names who
  wrote each line in text a screen reader reads and the eye does not see.
- **A labelled post.** `label.text` is the commenter's words that carry the label; `by` is how they are known ("On a
  left-leaning news page"), `side` 'left' or 'right' (not drawn). The post's `lines` are the words the label is pinned
  on, under "The words it is pinned on"; who said them is the last line, small print, tappable, with a slip of its own.
  The commenter's words cannot be tapped. An item with a labelled post has exactly one, and a panel; its `label.side`
  equals its `facets.side` where the subject sorts by side; `has` names exactly the needs of its panel (V70, V74).
- **A chart is refused when its data is wrong** (`chartProblems`): a top that is not a whole number of steps, more than
  ten ticks, a value off the axis, a series of the wrong length, more than two series (named when two), more than eight
  places, a label wider than its bar. A bar starts at the axis start. `redraw: 'from-zero'` adds the item's first chart to
  the feedback as "The same chart, drawn from zero", and is refused on an item with no chart that starts above zero.
- **Tabs**: the first is open (or the one with a marked line, once there is one); a tap opens one and shuts the others;
  the choice survives repaints. Every paper stays in the page, and the tab of a paper with a marked line is marked.
- **A figure shows the item's numbers**, never the learner's; theirs are in the marks and the line about their answer.
- **Speech** starts only on a tap: "Hear the question" reads the first question, and each next question is read when
  the learner taps Next. Only a voice that is on the phone and in English is used; with none, the words are shown with
  one line saying so. "Hear it again" replays; leaving a screen or the page going to the background stops it. There is
  no speech recognition: the learner says the answer aloud, then types it.

### 3.10 Not built

- A private form into `lines` (Psychology part F), refused by V70 (`NOT_BUILT` in `tests/lessons/rules-shape.mjs`).
- Recorded voices: calls are transcripts, read by an on-device voice where one exists.
- Singing's review (to be: a warm-up, then each due lesson's check, without the line), the retest of a sung check,
  the range as a lesson step with a check of its own, and a range typed by hand.

## 4. Feedback, support and fading, order and difficulty

### 4.1 Feedback after each item

In this order: each ask's mark (right, or the right answer); the deciding words marked in the blocks (a document's
line, a chart redrawn from zero, a figure); `reason`; after a miss, one line on the learner's own choice; then what the
item has of: the consequence of the right action, `need` ("What you would need to see"), each need of the panel found
(with the line, quoted) or missing ("The words do not say it."), the working with the estimate beside the answer, the
`fact` with its accepted answers, `figure`. It opens only when the last ask is answered (X2). No praise (V36). Feedback
holds what the design names and nothing else; there is no length rule.

### 4.2 Support and fading

Support is help during the attempt, and it fades. Feedback after the answer does not fade.
- `line`: the live pitch line. `panel`: the requirements beside the item (shown on a teaching screen and a worked item
  always, in a set only with this support, never in a check, retest or review). `shown`: the deciding words marked
  before the answer. `leave: n`: an item with `steps` shows all but its last n steps (the asks tied to them given) and
  asks the rest. `estimateCheck`: the first Answer more than double or less than half of the learner's own estimate
  shows "Your answer and your estimate disagree" with both numbers and scores nothing; the second Answer is scored. It
  needs items with an estimate and an exact answer (V70).
- A set with support is followed by a later set of the same strand with less or none (`shown`, `panel`, `line` and
  `estimateCheck` weigh 1 each, `leave` its n). Checks, the review and retests never have support (V79).

### 4.3 Checks and the baseline

Checks give feedback `at-end` by default: one result screen, then every item's feedback, misses first; nothing between
items (X23). Sung checks are `after-each`. A baseline and a spoken mock interview show nothing per item. A check's
result is computed from first tries of its run.

### 4.4 Timed sets and the busy task

Only in a subject with `timed: true`. Each item gets its `seconds` (15 or 20), counted on one `requestAnimationFrame`
loop, never a timer; a frame later than a quarter second counts a quarter second, so a page left in the background does
not run out unseen. The clock starts when the item is first painted, does not restart when its second ask opens, and
stops on an answer, on leaving, and when the lesson moves on. At zero every open ask is `timeout`, the feedback says the
time ran out and gives the answer, and the screen waits for Next: **nothing ever moves on by itself** (X1). In a check
only "Time ran out" shows. A try stores `ms`. The review of a timed subject runs each item on 20 seconds and says so.
A timed set holds only `choose`, `tap`, `order` and `exchange` asks (V83).

`over: 'busy'` runs the busy task: a shopping list sorted by taps into three bins, never scored or stored. Each item is a
banner that arrives after two things are sorted, and its clock starts then. A busy set is timed and each of its items
opens on a banner and asks only a choice (V83).

### 4.5 Order and difficulty

1. A new strand alone first, then mixed, unlabelled, with earlier ones: a set's `mix: { from, share }` adds items from
   the named earlier lessons' sets so they are `share` of the set, at least one, never-seen first, then least recently
   seen, spread among the new ones with nothing to mark them.
2. Contrast pairs before mixed items: an inner pair is asked back to back.
3. Ramps are successive sets (2 then 4 second holds; last step, last two, whole problem; help on, then off).
4. A missed item comes back after three other items (or at the end of the set when fewer remain) until right; a made or
   sung item comes back with a new seed. Checks, retests and baselines never repeat an item: a miss there makes its
   strand due.
5. Every set and check holds the subject's `mix` (V76): an entry's number below 1 is a share of the items, 1 or more a
   count; `{ facet, equal: true }` needs every value in equal number among the items that carry the facet. V76 reads
   the items a set names (a made one n times); a drawn check is not read.
6. An exchange raises the pressure on a reply that holds off.

## 5. The record and the learner's private data

The storage key names never change (owner).

### 5.1 Keys

| Key | Holds |
|---|---|
| `pl:<s>:items` | **the only practice record**: `{ [itemId or genId or sing-<task>]: { tries: [Try] } }`, the last twelve tries per item in each context |
| `pl:<s>:notes` | the learner's private data for the subject (section 5.3) |
| `pl:<s>:seen` | `{ [lessonId]: { rev, at } }`: the revision last opened and the step reached; nothing else |
| `pl:log`, `pl:app`, `pl:recent` | sessions, "this confused me" reports, claims, and the export |

No other key is written (X5). Records of the old lessons stay untouched and unread, and stay in the export.

### 5.2 A try

`Try = { d, run, lesson, rev, engine, context, sup, seed?, a: { [askId]: answer }, r: { [askId]: 'ok' | 'no' | slipId |
'timeout' | 'claimed' }, ok, ms? }`.
- `context` is `practice`, `check`, `review`, `retest`, `again` or `baseline`. `sup` says whether support was on.
- `run` is the time the sitting began, in base 36 with a counter; it groups one sitting.
- `lesson` and `rev` are the lesson that owns the try (a review try: the lesson whose check holds its strand).
- `a` holds what was chosen, tapped or typed. A sung answer is numbers only (`{ cents: [...], holdMs?, loud? }`; the
  range `{ span, steady }`). A line to write is `{ say }`.
- A **first try** is the first try of an item in a sitting (one per seed for a made item). Checks, the review and
  results read first tries.
- Every figure the app shows (done marks, check results, accuracy by facet, slips, due dates) is computed from `items`.
  Nothing is stored twice.

### 5.3 Private data

In `pl:<s>:notes` only. Never scored against a truth, never sent anywhere; it leaves the phone only in a file the
learner saves. Built (`OWN_SLOTS` in `public/app/lessons/own.js`):
- `range: { low, high, set }` (Singing): measured, never typed.
- `sheet: { accounts: [{ id, name, type, balance, holdings: [{ name, value, kind, expense }], fees, matchRule?,
  beneficiary }], mix }` (Wealth). `actions: [{ id, what, where, when, done?, repeat? }]`. `triggers: { [id]: date }`,
  marked on the subject screen or at the step that waits, with no form.
- `plan: { cue, then, saved }` (Scams): two boxes of at most 80 characters, kept as "If <when>, I will <what>.",
  changeable and skippable. `setup: { [fieldId]: day }`: things the learner does on their own phone, each "Done now" or
  "Not done".
- `answers: { q23: '…', …, interviewDate? }` (Civics): the answers the list says vary, in its own words, and the
  interview day, saved whole with the day saved. Two senators are one entry with a semicolon between.

`OWN_REQUIRED` names the fields each form must have (V70). No field is for an account number, login, password or Social
Security number (V81). What a field refuses: a run of 8 or more digits once spaces and dashes are out ("40,000" passes; a
day is exempt), a word where a number goes, a negative number, an empty required field, a choice not on its list, a day
that is not real or, for a change, in the past. A refusal is a line under the field and nothing stored. A field may be
`optional`, name its `list`, have a `unit`, a `hint`, and a `warn` (`over` or `under` and a line: kept, and the learner
told it looks wrong). A row or account left wholly blank is dropped; blank fees are 0.

### 5.4 The step on the learner's own data

`{ own: formId, model? }` is one flow, not a form and a quiz:
1. If the lesson has `trigger` and the moment is not marked: "It happened" (marks today) or "Come back to it later".
2. A lesson that needs private data an earlier lesson makes opens that form first when it is empty (Singing's range,
   Wealth's sheet). "I have no account to look at yet" goes on and stores nothing.
3. The app's arithmetic on what was typed (Wealth: each fund's value times its yearly cost over 100, the fees, the
   total of each account and of all, in dollars first and as a share second), its warnings, and funds that add up to a
   different balance than typed.
4. The sample's lines to find (`model`, its deciding lines marked).
5. The change: what, where and a day, or "I did it now". Each change has "Add to my calendar" and "Mark done".
"Go on" is never held back, except on the `answers` form, which must be saved first; a lesson is done by its check. A
lesson that asks a question reading an own answer has a step that enters them first (V70). A question whose own answer
is not entered is not asked, drawn or due.

**The calendar file (.ics)** is the only reminder the app can give: one all-day event on the day, a reminder at nine,
`RRULE:FREQ=YEARLY` for `repeat: 'year'`, lines folded at 75, commas and semicolons escaped. `saveFile` in
`helpers.js` is the one place a file is made.

## 6. The review

One review a week, Monday to Sunday local time, across every subject (`public/app/lessons/review.js`).

### 6.1 What is scheduled

A strand: one thing that comes back as a new instance (a Civics question itself, a kind of problem with fresh numbers, a
labelled set of words, a Scams decision). A strand starts its schedule with the check of the lesson that covers it; a
baseline never starts one.

### 6.2 When it comes back

- A **good day** for a strand is a day on which every first try of its items, in any context but `baseline`, was right;
  a day with any miss resets it.
  Days on or before the check's day do not count. A claim is never a good day.
- Due 2 days after its lesson's check or after a miss, then 7 days after its first good day, then 24 after the second
  (`review.gaps`); it leaves after the third, or with `review.every` comes back that many days after the last good day
  (Scams: 60).
- `review.dateField` adds rounds before the learner's interview date: six rounds a week apart, the last a week before
  the date. A strand that finished its returns, or whose next return is later, comes back at the next round it has not
  been tried since. No rounds once the day has passed. Rounds are due days like any other.

### 6.3 What it asks

- In its real form: a strand with a generator is asked on a made item (among several generators, drawn by the run, and
  by matching facets in a retest); else on an item held in reserve (one no lesson names) never tried; with none left,
  the least recently seen tried item returns and the repeat is logged. A strand of one item returns as itself.
- Subject by subject, each subject's part mixed in an order its run fixes; only questions, feedback after each, every
  miss asked again three items later until right. A subject's saved plan is shown once at the start of its part. Back
  leaves the review and records nothing; it is built again from the record next time (as built in `review.js`).
- A finished part is logged as `return` for its subject.

### 6.4 Retests

A check with `retest: n` comes back once, whole, n days after its first complete run, on new items of the same strands
and facet values, as its own block of the review with an intro, its pass rules and no warning. The tile counts its
items with the week's.

### 6.5 The tile and the results

The library tile "This week's review": the number of items due by Sunday and their subjects; when none: "Done for this
week" and the day the next falls due; before any lesson is done, that the review starts when one is. At the end: first
tries per subject and in all, the strands to look at again, each retest's result with its rules met or not and the facet
values side by side where `compare` says so, claims listed, and the day the next item falls due, or that skipped items
are still due.

## 7. Screens

- **Library**: the subject tiles and "This week's review".
- **A subject**: its end result in one sentence; its lessons in part order (a baseline first), each with title,
  revision, the draft line ("Draft: not tried yet") and its state (not started; step n of m; check passed or "not yet",
  with date and score; waiting for a moment); each part with no lesson as "Not built yet"; results; "Practice again" on a
  done lesson (its sets again on unseen items, fresh numbers or fresh targets, `context: 'again'`). The learner's own
  data, each with its own download and an inline delete (two buttons, never a browser dialog):
  - The range, with "Find my range again", which runs the range task by itself, unscored; a range found replaces the
    stored one, and Back before it succeeds keeps the old one.
  - "Your accounts and dates": accounts with balances and costs, changes with their days, done marks and calendar
    files, the moments with a button each, "Download my accounts and dates", "Delete my accounts and dates".
  - "Your plan and your own ways in".
  - "Your answers and interview date": each answer or "Not entered yet", the link to
    uscis.gov/citizenship/testupdates, how old they are, "Change my answers", and after a month "look them up again".
  Private data appears on no other screen (X24, X39, X44).
- **A lesson**: a top bar (title, rev, draft line, step n of m); the why; each step: a teaching screen; a worked item
  answered step by step; a set, one item a screen (blocks, asks in order, the help while it lasts, the countdown if
  timed, then the feedback and Next); an own step. Between sets a screen says the learner can stop and the place is
  kept. Back is always there and keeps the place.
- **The end check**: one screen naming the check in plain words; the items, without help; then "8 of 10: passed" or
  "6 of 10: not yet", each pass rule met or not, the compared facet values, then each item's feedback, misses first; then
  the next lesson. A spoken mock interview's first screen says it is read aloud, to say each answer out loud and then
  type it, and to check uscis.gov/citizenship/testupdates and the learner's own answers first.
- **Results**: first-try accuracy per lesson and per facet value side by side, the slips made most, the check history,
  the baseline's line on its day, and what comes back when. No grade, no comparison with anyone.
- **The phone's Back button** goes back inside the app: after any move off the library one history entry is pushed;
  Back taps the screen's own back control (a screen with none goes to the library). At the library, Back leaves the app.

## 8. Writing

### 8.1 The words (owner-confirmed, 2026-10-12)

One vocabulary, used with the owner, in every design record and document, and in the app's own wording. The learner's
column is what the screen says; the plain-words rule (V50) keeps the machinery's words off the screen.

| Word | Means | The learner sees |
|---|---|---|
| **subject** | the whole thing on a tile: Psychology, Geography (never "module") | the subject's name |
| **goal** | the paragraph the owner signs off: what you can do after the subject (`goal` in the design record) | nothing; it lives in the design record (the subject screen opens on the end result sentence, section 7) |
| **topics** | the list the owner signs off under the paragraph: what the subject teaches; biases is a topic, each word on a words list is a topic (`topics`) | nothing; the list lives in the design record. "Topic" on screen is what the review brings back |
| **part** | one piece of the end result, in order, covering some of the topics; the designer's cut of the topics into a sequence (`parts`) | a part's title, the design record's words |
| **lesson** | one sitting, serving one part, ending in that part's check | "lesson" |
| **check** | the test at the end of a lesson, and the real-world test at the end of the subject | "the check" |
| **item** | one thing you answer: an account, a message, a problem, a sung try | "question" ("try" when sung) |
| **asks** | what the owner asked for, in their words: the must-keep list (`asked`) | nothing; it lives in the record |
| **review** | the weekly return of what is due | "This week's review" |

### 8.2 Rules for learner-facing text

Each enforced by a validator rule (and by the browser checks on every screen as shown).

- **Plain words** (V50): no app word to avoid ("lesson", "rung", "this screen", "next screen", "last screen",
  "provisional", "deciding feature") and none of the machinery's own words (`APP_JARGON` in `tests/plain-words.mjs`:
  key, route, gate, determination, specimen, ledger, strand, facet, ask, item, set, generator, support, and their
  plurals). Say "question", "group of questions", "help", "topic".
- **No abstract or textbook words** (V62): `ABSTRACT` in `tests/plain-words.mjs`, each with what to say instead
  ("case" is a story, "utilize" is use).
- **American English with dollars** (V60): no form on `tests/american.mjs`'s list, in every string, quoted text
  included.
- **No codes or ids** (V4): no id that is not an ordinary word (one with a digit, `_`, `-` or `~`) and no code like
  "A1" in learner text, rule needs included.
- **No praise and no bare verdict** (V36): no feedback (`reason`, `need`, working, `then`, a trap's line, a line's
  `note`) opens with "great", "well done", "good job", "nice work", "excellent", "correct", "incorrect", "right", "wrong", "not quite", "oops".
- **Titles**: no two lessons of a subject share one (V56).
- **What is read**: every string a learner reads, including the subject's lists, rules, needs and private form labels,
  and a `text` ask's `model`. Quoted material (`message`, `article`, `document`, `chart`, `figure`, `spoken`) may say
  anything for V50 and V62 but is still held to V60. `endResult` (the owner's approved sentence) and the parts' titles
  (the design record's words) are exempt from V50 and V62 (section 3.2).
- There is no length cap on feedback; the most of a lesson that may be reading is the subject's `readingShare` (V73).

## 9. Validator rules and browser checks

### 9.1 Running them

- `npm test`: the fast tiers, the data and pure-engine checks, the sound checks, and the validator with its seeded
  faults (`npm run test:lessons`: `tests/validate-lessons.mjs`, then `tests/lessons/negative-controls.mjs`).
- `npm run test:e2e -- X28 X33`: the browser checks named, and their seeded faults. Name the checks that exercise the
  change; `PWA` names the installable-app check. The whole suite (`npm run test:e2e:all`) runs only when the owner asks
  (commit d03b63f).
- `npm run lock`: rewrites `tests/lessons.lock.json` after a content change (raise `rev` first if it was deployed).
- Each build step is its own commits, with the tests green at every step.

**A seeded fault** turns exactly its own rule or check red. A validator fault is a pure function of the test subjects'
data (`tests/lessons/controls-table.mjs`). A browser fault is a text change to one app file on its way to the browser
(`transform` in `tests/static-server.mjs`, faults in `tests/e2e-controls.mjs`); a fault whose text is not in the file
fails the run. The test subjects live in `tests/fixtures/fixture-subject/` and are never shipped: `fixture` ("Umbrella
days"), `chorus`, `till`, `ledger`, `feed`, `labels`, `account`, `pressure`, `interview`. Review tests fix the weekday.

### 9.2 Validator rules (`tests/lessons/rules-index.mjs`)

| Rule | Checks | One of its seeded faults |
|---|---|---|
| V4 | No code or id in learner text (section 8) | a reason that shows an item's id |
| V36 | No praise or bare verdict opening feedback | a reason that opens "Correct." |
| V45 | Revisions are real: `rev` at least 1, one history entry with a date and a change per revision, `standard` from 2 to the current version. (`live` is V69's: it reads the design record's `tried`, not the lesson.) | a lesson at revision 2 with one history entry |
| V46 | The lock: a lesson's fingerprint covers the lesson, the items and generators it names (text, parameters, the source of `make`) and the reserve items of its check's strands; a subject's covers its record. A deployed change needs a new `rev` | content that differs from the lock |
| V47 | Every script is in `index.html` and `sw.js`'s `SHELL`, the lists are equal, and no file passes 800 lines | a file of 801 lines |
| V50 | No app word to avoid or machinery word in authored text | a reason that says "item" |
| V56 | No two lessons with one title | two lessons with one title |
| V58 | Held findings (`tests/lessons/held-findings.json`) only shrink: one that no longer fires must go, and none may be added since the last commit | a held finding that no longer fires |
| V60 | American English in every string | "colour" in a reason |
| V62 | No abstract or textbook word | "utilize" in a reason |
| V69 | The design record, in the skill's terms (its "The record"; this row is right to come from the skill). The record grows gate by gate: no gate's fields before the earlier gates are complete, gate 3 not before `approved.goal`, gate 4 not before `approved.practice`; a subject in the app needs the whole record. Owner words carry a date, the words and where they were said; an ask removed or reworded since the last commit is refused, and one is dropped only on the owner's word; each approval's fingerprint binds the screen approved (the goal: the paragraph, the topics, the sentence, the test, and each ask with the topics it is placed under), one approval's words on two subjects are refused, and an approval or a try is cleared or replaced by a later word that keeps the one that stood (`approved.history`, a try's `previous`, an ask's `owner.previous`), never edited or taken away since the last commit; the same words again are refused. Every review names what it reviewed (`Reviewed:` a fingerprint) and counts for that version only; the record's own review (`designReview`, gate 5) must pass before a built subject's content changes; `designedOn` dates the design; a later date is a redesign, which may start new research, design and writing lists (never the asks) and needs its own record review dated on or after it. The subject record mirrors the approved sentence whenever it is written (V80: `approved.goal.sentence`; while a redesign's sentence waits for the owner, the record keeps the one it was built to). The pre-commit hook runs this tier on the staged tree, and the commit-message hook asks for the owner's word on a change to the gates, the tools, the hooks or the research notes. A record deleted since the last commit is refused. Each principle's decides or supports and its read level are its note's marks, one that decides is read in full and names its choice, and every principle is cited by a block; `opened` holds nothing forbidden; one lesson block per part, its check the part's word for word. A stand-in review that carries a Disclosure does not count. Content is held, measured against the last commit's lock, while an ask or signed-off topic is in no part, the design opened what it may not, or an approval is missing; no lesson past the pilot (a baseline aside) before the pilot's try or review passed; no `live` lesson without a passing `tried` entry | no design record (and 60 more, one per refusal) |
| V70 | Shape: every subject, lesson, step, set, item, block, ask, generator, form and pass rule matches section 3 exactly; ids unique; every reference exists; `seconds` only where `timed`; what is not built is refused | an ask of an unknown kind |
| V71 | Every lesson's part is a part of the record, in part order; one lesson per part once `complete`; the subject's `parts` equal the design record's; the pilot is a lesson once there is one | a part with no lesson in a complete subject |
| V72 | A check is its part's: no fixed item also in a set or the worked item, or with `recall` only items the sets asked, each once; a spoken check's every item has a `spoken` block; every pass rule says `right`, `wrong` or `slip`, has `max` only with a slip, names an ask, facet value or slip that exists, and needs no `min` above what it counts (support in a check is V79's) | a check item also in a set |
| V73 | Reading (the why, teaching screens and panels on them, at 200 words a minute) stays within `readingShare` of the lesson's time; doing is `DOING_SECONDS` (choose and tap 15, number 60, text 30, order 25, sing 20, exchange 45, form 60, an own step 60, a drawn item 20) | a why padded past the share |
| V74 | Every ask can be scored and explained: a right option and a line or slip on each wrong one; a tap's right lines are lines of the item and among `deciding`; a `tol`; an estimate before its exact answer; `accept` entries distinct, `count` within them; an item with a scored ask; `reason` on every item, `deciding` ids that exist; `has` exactly the panel's needs | a wrong option with no `then` |
| V75 | Generators: on 200 seeds, finite values inside `params`, every slot filled, every trap outside the answer's tolerance, a right option that shows the answer, the same seed the same item | a trap that lands on the answer |
| V76 | Every set and check holds the subject's `mix` | a set with none of a kind the mix requires |
| V77 | Banks: each strand a check covers has three unseen items for its returns and one more per item of a retest, unless it has a generator or one item | a strand one item short |
| V78 | Singing: tasks and parameters inside `SING_PARAMS`; the warm-up first and once, never in a check; no line in a check; sung checks `after-each`; every target inside the range | a hold of 9 seconds |
| V79 | Fading: a set with support has a later set of the same strand with less or none; no support in a check | a lesson whose last set has the panel |
| V80 | The subject's `endResult` equals the design record's, word for word, and its `readingShare` equals the design record's | one word changed |
| V81 | Private forms: no field for an account number, login, password or Social Security number, fund rows included; every `into` is a slot of section 5.3 | a field "Account number" |
| V82 | The failure (`danger.slip`) sits only on risky items, never on a real one, and can be made at least once | a real message whose wrong option is the failure |
| V83 | A timed set holds only choose, tap, order or exchange; a busy set is timed and each item opens on a banner and asks one choice | a busy set that is not timed |
| V84 | A subject that asks from a published list names it in `refs` (a link and the day looked up) | questions from a published list and no source for it |

Every other rule id below V84 is retired and never reused.

### 9.3 Browser checks (`tests/e2e-checks.mjs` and the files it imports)

| Check | What | One of its seeded faults |
|---|---|---|
| X1 | Nothing moves on by itself | an item that moves on by itself |
| X2 | No feedback before the last ask is answered | the reason shown when one of two asks is answered |
| X3 | Every screen at every width from 360 to 1600 px: no sideways scroll, no cut text, plain words and American English as shown (owner's words left out) | an answer button wider than a phone |
| X5 | The stored keys are those of section 5.1 | a place saved under a key of its own |
| X8 | No sound, no sound system and no microphone request before a tap | a sound system made when a sung item opens |
| X10 | The microphone: the constraints, one request per set, the refusals, the app never hears its own note | the microphone hears the app's own note |
| X11 | Only numbers are stored from singing | the readings of a try stored with its answer |
| X12 | Sung screens fit at 360 and 390 px, in plain words with no music word | a button on a sung item wider than a phone |
| X13 | `number`: tolerance in and out, a trap's line, the estimate first with no calculator, "disagree" in practice and never in a check | the disagree line shown in a check |
| X14 | `text` from memory: every matching rule, "name two", the box, "Not yet", every accepted answer shown, a claim and its return | a repeated answer counted twice for "name two" |
| X15 | `tap`: the named block's lines only, "Not given", two lines in any order, a third refused, a slip, a note, nothing marked before the answer, the marks with `shown`, nothing between check items | the right line marked before the answer |
| X16 | `sing`: known pitches fed as the microphone scored on and off, octave folding, holds timed, each melody note, every result word, the line only with `line`, the range stored once, the microphone released | the line drawn in a check |
| X17 | The clock: frame-clock countdown, a late frame counted a quarter second, an answer stops it, at zero a timeout and the screen waits, a timed check shows only the time | an item that moves on when its time runs out |
| X18 | `exchange`: turns follow replies, pressure on a reply that holds off, nothing marked before the end, then the pushing turns and the first chance named | the pressure turn of a reply that holds off never shown |
| X19 | `spoken`: nothing read on opening, a tap reads with an on-device voice, replay, next read at Next, leaving stops it, no voice shows the words | a question read aloud as soon as it opens |
| X20 | Documents, figures and charts drawn are their data; the chart redrawn from zero | a part of the 100% bar drawn a tenth too short |
| X21 | After practice, a check, a review and a retest, every try has exactly the fields of section 5.2, sung answers hold numbers, and no request leaves the app | every try sent to another host |
| X22 | The review: due strands on unseen items, a retest after its days, a miss three items later | a seen item asked while unseen ones are held back |
| X23 | An `at-end` check shows nothing between items; the result lists each pass rule | feedback between the items of a check |
| X24 | Own data: refusals, costs and warnings, a dated change and its calendar file, done marks across a reload, nothing private elsewhere, both files, an inline delete | a balance of eight digits accepted |
| X25 | Math's pilot walked end to end at 375 px | a slip of the pilot no longer named |
| X26 | Wealth's pilot walked end to end at 375 px | a slip of the pilot no longer named |
| X27 | Papers, tabs, a value looked up, a form answered whole and scored field by field | every paper of a household open at once |
| X28 | The phone's Back button inside the app | Back leaves the app from inside it |
| X29 | "Find my range again": unscored, replaces the range, Back keeps the old | the old range thrown away when the exercise opens |
| X30 | Stats' pilot walked end to end at 375 px, ending with the review two days later | a slip of the pilot no longer named |
| X31 | The four article forms drawn at 360 and 390 px | the headline drawn under the story |
| X32 | A labelled post, the panel only where the help is, needs found or missing, pass rules by side, sides compared | the panel drawn in every set, not only where the help is on |
| X33 | Ideology's pilot walked end to end at 375 px | a slip of the pilot no longer named |
| X34 | The message forms friend, thread and note; a headed checklist | a thread's lines all drawn at the left, yours too |
| X35 | A line to write and an item of four asks | an item with a blank line to write counted wrong |
| X36 | Psychology's pilot walked end to end at 375 px | a slip of the pilot no longer named |
| X37 | The forms sms, email, popup, chat, call and banner | a link that can be followed |
| X38 | `order` and the busy task | the steps of an order offered in the right order |
| X39 | The plan and the own ways in | the plan kept under a key of its own |
| X40 | The baseline on the test subject | the baseline stored as a check |
| X41 | Scams' pilot walked at 375 px, ending with the review | the wrong habit no longer named in the pilot |
| X42 | Scams' baseline walked at 375 px | the failure no longer named in the baseline |
| X43 | The mock interview: a draw, its first screen, its result, the second a week on, read aloud, on new items | a second mock that draws what the first asked |
| X44 | The learner's own answers and date: the form, the stored shape, items reading them, the rounds before the date | going on before the answers are saved |
| X45 | Civics' pilot walked end to end at 375 px | the pilot's check needing 15 of 17 |

A pilot walk asserts only what the walk shows; what another check owns is left to it, so a fault turns one check red.
The sound checks (X8, X10, X11, X12, X16, X29) run in their own lanes, and a sound fault runs only them. X4, X6, X7 and
X9 are not in force (X6 and X7 retired on 2026-10-12, section 11); the draft line is asserted by the pilot walks.

## 10. Capabilities by subject, and what is built

### 10.1 Capabilities

| Capability | Singing | Scams | Stats | Civics | Ideology | Psychology | Math | Wealth |
|---|---|---|---|---|---|---|---|---|
| `choose` | | ● | ● | ● | ● | ● | ● | ● |
| verdict (a `choose` on the subject's list) | | ● | ● | ● | ● | ● | ● | ● |
| `tap` (lines, "Not given") | | ● | ● | | ● | ● | ● | |
| `number` (tolerance, slots, traps) | | | ● | | | | ● | ● |
| estimate first, calculator | | | | | | | ● | (calculator) |
| `text` (accepted answers; `model` unscored) | | | ● (recall) | ● | | ● (model) | | |
| `order` | | ● | | | | | | |
| `sing` and `pitch` | ● | | | | | | | |
| `exchange` | | ● | | | | | | |
| `form` scored on samples | | | | | | | | ● |
| private forms (Singing's range is stored by `sing`) | | ● (plan, setup) | ● (plan) | ● (answers) | | ● (plan, lines) | | ● (sheet, actions) |
| several asks in one item | | ● | ● | ● | ● | ● | ● | ● |
| `message` | | ● | | | | ● | | |
| `article` | | | ● | ● | ● (post) | | | |
| `chart` | | | ● | | | | | |
| `document` | | | | ● (map table) | | | ● | ● |
| `figure` | | | ● (1,000 people) | | | | ● | |
| `spoken` | | (calls, later) | | ● | | | | |
| `panel` and `rules` | | | | | ● | ● | | |
| `pair` | | ● | ● | ● | ● | ● | | |
| generators (fresh numbers or targets) | ● | | | | | | ● | ● |
| support fading | ● line | | ● shown, leave | | ● panel | ● panel | ● leave, estimateCheck | ● leave |
| timed sets, busy task | | ● | | | | | | |
| facets and per-facet results | | ● genuine, channel, request | ● sound | ● level | ● side, sound | ● ordinary, control | ● kind | ● leave alone |
| retest (days) | | 28 | 28 | 7 (second mock) | | 21 | 14 | yearly action |
| baseline lesson | | ● L0 | | | | | | |

### 10.2 What a static, offline phone app cannot do, and the nearest it can

| A design asks for | Why not | The nearest |
|---|---|---|
| Hearing a spoken answer (Civics mock interview) | Browser speech recognition sends the voice to a server or is missing in an installed iPhone web app; nothing may be sent | Say it aloud, then type it |
| Reminders on a date (Wealth actions and the yearly check; Scams returns) | No notification without a push server | A calendar file (.ics) for the learner's own calendar; the review tile; the app icon badge where the phone supports it |
| Offering a lesson at its moment (Wealth: a new job) | The app cannot know | The learner marks the moment; the own step waits for it |
| A real voice on calls (Scams) | No recordings; the phone's synthetic voice only | The caller's lines as a transcript, read by an on-device voice where one exists |
| A message arriving while busy in another app (Scams) | No notifications from outside the app | The busy task inside the app, with banners |
| Seeing that a change was really made (Scams setup, Wealth changes) | The app cannot see a bank's site | The learner's done mark and date |
| Measuring "no pushing" exactly (Singing) | Phone microphones differ; some keep automatic gain on | Loudness compared only with the learner's own talking note in the same sitting |
| Knowing the question list changed (Civics) | Offline | Content carries its date and source; before a mock interview a line asks the learner to check uscis.gov |

### 10.3 What is built

Each subject has its pilot built, as `status: 'draft'`; every other lesson waits for the pilot's review (V69). No
subject is `complete`, so each part after the pilot shows "Not built yet".
- **Singing**: lesson 2, "Match a note" (opens with the range). Its record has no strands, lists or facets: the sung
  review is not built. The tasks `hold`, `slide`, `interval`, `melody` and `light` are tested on `chorus` only.
- **Math**: lesson 1 (rough totals, estimate first, and printed totals checked); two strands with generators (prices
  in cents ending in 9). The 14-day retest belongs to lesson 7.
- **Wealth**: lesson 2, what an account costs a year, with the sheet, the costs and dated changes; the strand "What an
  account costs a year". Not built: the other lessons' arithmetic, the yearly check, editing accounts outside a step,
  and Wealth's first ref (the reporting threshold, to be looked up the day lesson 6 is written).
- **Stats**: lesson 1, find the claim and its number (what it claims, the line or "Not given", the verdict); three
  items in reserve. Not built: the plain size typed (part B), the retest (lesson 7).
- **Ideology**: lesson 2, economy labels thrown from both sides, with the panel; four items in reserve. Not built: the
  other labels, party cues, a label's name typed.
- **Psychology**: lesson 1, "What did they do?" (the line that says what was done, written rewrites against a model);
  the one account of control names the National Domestic Violence Hotline, whose numbers must be checked against the
  published ones before the owner relies on them. Not built: the verdict list (lesson 2), the later words, `lines`, the
  plan.
- **Scams**: lesson 0, the baseline (eight messages on 20 seconds, one call, one order), and lesson 3, act, check or
  leave (three pairs, then eight timed). Not built: lessons 1, 2, 4 to 6, the banner and busy task in a lesson, the plan
  and setup in a lesson, the four-week retest, the caller's voice.
- **Civics**: lesson 1, the three branches, 17 questions answered from memory in four groups, then a recall check of
  all 17, 16 to pass. Not built: the other 111 questions, the news stories, the answers lesson (4), the mock interview as a lesson (14)
  and its retest, and the news story per due news strand in the review.

## 11. Revision log

- **Version 2, 2026-10-12**: consolidated from version 1 (history-v1.md): sections 1 to 22 retired as history; 23 replaced by the build-subject skill; 24 and 25 absorbed into 6 and 3; 26.1 to 26.9 with the as-built decisions of 26.10 folded in. Three rules changed in substance, each an entry below.
- **2026-10-12, live by review**: a lesson goes `live` through a passing entry in the design record's `tried`, the
  owner's try or a stand-in review that passes (3.3, 9.2 V69, 10.3). Version 1 (26.7, V45) needed the owner's words
  from a phone try.
- **2026-10-12, the goal approved in place of the end result and the pilot**: the owner approves `approved.goal` (the
  gate 2 screen: the paragraph, the topics, the sentence and the test, fingerprinted) and `approved.practice` (section
  2, 9.2 V69). Version 1 (23.3, 23.4, 26.7) approved `endResult`, `practice` and the pilot.
- **2026-10-12, X6 and X7 retired** (9.3): the draft line is asserted by the pilot walks; cold start measured per
  subject (X7, an owner rule) is no longer a check.

- **2026-10-12, the skill's review loop** (commits e86d51d, e8fc74e, d9dcf4b and the one that follows): V69 reads the
  record gate by gate; owner words carry a source and are append-only; approvals bind the printed gate 2 screen; every
  review names the version it reviewed; a record review is a gate 5 field; the research notes state their read level;
  `designedOn` dates a design; the two hooks hold the gates (9.1, 9.2 V69, section 2). Version 1 had none of these.

A future change to a rule is a dated entry here and the edit in place, in the section that holds the rule. Never a new
section that overrides older ones: this file always reads as one set of rules in force.
