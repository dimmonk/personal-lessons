# Fieldcraft lesson standard, version 2 (the rules in force)

Status: this file holds only the rules in force for building a lesson, as the code implements them on 2026-10-12
(`FC.STANDARD` is 2). It is short on purpose: a writer reads it and nothing else, beside the validator. Everything that came before it, including the engine deleted on 2026-10-10 and the reports of how each step
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

Every subject is designed, rebuilt or audited through `.claude/skills/build-subject/SKILL.md`; read the skill. Its plan
for a subject (`docs/subjects/<id>/plan.md`) is prose for the people who build it and is read by no test. What the app
and the validator know of a subject's design is in its subject record, `public/subjects/<id>/subject.js`, alone: the
`endResult`, the `parts`, the `readingShare` and the rest of section 3.2. This standard says how a lesson is built.

A lesson's `status` is `draft` until its author sets it to `live`, once the lesson has passed its two reviews: the
learner's (a fresh reader goes through it cold from the learner view) and the research check. Neither the validator nor
the hooks read the reviews or the status.

**Old material.** A writer may take raw material (a story, a number, a line) from the tag `old-lessons`'s version of
**this subject only** (`git show old-lessons:<path>`). Never another subject's lessons. Nothing is migrated.

## 3. The data model

### 3.1 Files

Classic scripts, no modules and no build step. One registry, `FC` (`public/app/registry.js`), deep-freezes everything it
is given. Every file is under 800 lines and listed in both `index.html` and `sw.js`'s `SHELL` (V47).

```
public/subjects/<id>/subject.js       FC.subject   the subject record
public/subjects/<id>/l<N>.lesson.js   FC.lesson    one lesson
public/subjects/<id>/items-<k>.js     FC.items     fixed items, in as many files as needed
public/subjects/<id>/gen-<k>.js       FC.gen       items made with fresh numbers
public/maps/<region>.js               FC.map       one region of the map data (3.11), written by `npm run maps`
```

`FC.ENGINE` goes up whenever the app's own wording changes. The app's own wording is `SAY` in `public/app/lessons/view.js`, written once.

### 3.2 The subject record

```js
FC.subject('stats', {
  id, name, rev, standard: 2, history,
  endResult: Text,                       // the sentence that says what the learner can do after the subject
  parts: [{ id, title }],                // the subject's parts, in order (V71)
  complete?: true,                       // set in the commit that adds the last part's lesson
  readingShare: 0.25,                    // the most of a lesson that may be reading, above 0 and below 1; V73 measures against it
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
  have no lesson; after it, every part has exactly one (V71). Two lessons for one part, a lesson for a part the subject
  does not have, and lessons out of part order are always refused.
- `endResult` is the owner's wording of what the subject is for, and the parts' titles are the cut of it into
  parts; V50 and V62 leave both alone (section 8.2).
- A facet with `compare: true` shows its values side by side at the end of a check, a retest and the review ("Labels
  thrown from the left: 3 of 3 beside from the right: 2 of 3"), when at least two of its values were met.
- A rule with `heading` is a checklist of its own and stands alone in its panel: the heading replaces "What the label
  needs" beside the item and in the feedback.
- Item and generator ids are unique in the subject, and a need's id differs across all of the subject's rules (V70).

### 3.3 The lesson

```js
FC.lesson('stats', {
  id: 'l2', part: 'B', role?: 'baseline',  // part is a part id of the subject record; only a baseline has part: null
  title, rev, status: 'draft' | 'live', history,
  trigger?: triggerId,                     // a moment of lists.trigger the lesson waits for (section 5.4)
  why: Text,                               // one screen
  flow: [Step],
  check: Check });
Step = { show: [Block], title }            // a teaching screen: a rule, a wrong idea, a contrast pair, a map
     | { worked: itemId }                  // an item shown answered, step by step (one optional choice to commit to first)
     | { set: Set }
     | { own: formId, model?: itemId, work?: workId, repeat?: 'year' }   // the same step on the learner's own data (section 5.4); `work` on the sheet only, and required there; `repeat` (sheet only) makes its changes come back every year
Set  = { items: [ItemRef | [ItemRef, ItemRef]],   // an inner pair is asked back to back, its order random
         order: 'listed' | 'shuffle', support?: Support, seconds?: 15 | 20,
         mix?: { from: [lessonId], share }, over?: 'busy', plan?: true, guess?: true,     // guess: a sung group asks under, on or over first (3.8)
         feedback?: 'at-end' }                    // a sung group with guess that holds its results to the end of the group (3.8)
ItemRef = itemId | { gen: genId, n, with?: params | { form?, place? } } | { sing: { task, ...params }, n }
```

A lesson's `status` is `draft` until its author sets `live` (section 2). Its revision and history are real fields: a history entry with a date and a change for every revision (V45).

A **baseline** (`role: 'baseline'`) has no part; its flow holds only screens that say how it goes; its check holds every
answer to the end; it is shown first and run in the context `baseline`. Its first screen says what it is and gives the
clock, with no rule; its last is one line counted from `subject.danger` (`SAY.baselineLine`: "Of 6 scams, you did what a
scam asked on 1. Of 4 real messages, you handled 4 the right way."). It is done when its check has one complete run. It
never counts in results by lesson or by facet, never starts a strand's schedule or the weekly review, is not a part
built, and cannot be practiced again. The results screen shows its line on its day.

### 3.4 Checks and pass rules

```js
Check = { items: [ItemRef] | { draw: { strands, n } | { gen, split: { [form]: n }, only?: { [form]: [placeId] } } },
          feedback: 'at-end' | 'after-each', pass: [PassRule],
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
- **A check drawn from a place group** (`draw: { gen, split, only? }`) is as long as its split adds up to and holds exactly that many of
  each form (`tap`, `name`, `flag`, `border`, 3.5), whatever the draw. Within a form the places are drawn at random, the same run drawing
  the same, and the draw prefers (1) a place the draw has not used yet and (2) one the learner last met in another form (from the record,
  5.1), so a check does not ask the same place twice while another can be asked, nor the form the place was last asked in while another
  place can be. `only: { tap: [andorra, monaco] }` keeps those places to that form: they are drawn in it and in no other (the same list
  is applied to the group's returns in a lesson and in the review, 6.3). The form with the fewest places to choose from is drawn first.
  The pass rules count the forms by the facet `form` (a rule `{ where: { form: 'flag' }, right: { min: 2 } }`), and a rule cannot need more
  of a form than the split asks (V72). V70 refuses a form the group does not ask, a split that adds up to nothing, a form asked for more
  places than the group can be asked in it (after `only`), a place in `only` that the group does not have or cannot ask in that form, or
  a place kept to two forms.
- `spoken: true` reads each question aloud and holds its words behind "Show the words".
- **A check with written questions and sung tries** (a lesson that teaches a decision and a sung skill) holds both, shows its results
  `after-each` (V78), and counts each part with its own rule by ask: `{ ask: 'landing', right: { min: 4 }, of: 'the stories' }` and
  `{ ask: 'sing', right: { min: 4 }, of: 'the sung notes' }`; a rule by the `sing` ask reads "on the note". Its first screen says both
  ("Five new questions with no help, then five new tries with no line", `SAY.checkIntroMixed`); `checkIsSung` is true only when every
  question is sung, `checkHasSung` when any is.
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
numbers with the step above zero and min at most max; any other list is a list of choices. A range whose step reaches past its max gives only its min, so V75 refuses it: three numbers meant as choices are a range to the engine, and are written as two choices, or four or more. `pick(name)` returns that
parameter's value for the seed; every parameter is drawn first, in the order listed (`with` fixes some), and `make`
returns the derived values. `make` is pure: the same seed gives the same item. Text fills `{name}` slots. A made
`choose` puts its answer in a slot (`right: '{verdict}'`) or names values (the ask's `answer`, an option's `value`). A
try stores the seed, never the numbers. Money is made in whole cents and compared by the stated rounding, so no float
edge decides a mark.

**A place group** is a generator that makes places instead of numbers: a `FC.gen` entry with `places` where a numeric one has `params`
and `make` (it was chosen over a new source because the strand, the review, the lock, V70 to V77 and the record already treat a generator as
the thing a strand returns as). Its seed is a choice, not a draw: the seed modulo the number of (place, form) pairs the group can be asked
in names the pair, so the same seed is the same question and a try stores only its seed.

```js
{ id, strand, facets?: { [facetId]: valueId },
  places: { map: regionId, forms: ['tap' | 'name' | 'flag' | 'border'], words: { [form]: Text }, slips?: { [placeId]: slipId },
            list: [{ id, name, reason: Text | area: Text, cue?: Text, accept: [Entry], flag?: Text, flagLine?: Text }] } }
```

A place's feedback follows the way of thinking every Geography lesson opens with (the bigger area it sits in, what touches
it, the water it is on): either its own `reason`, or its `area` in words, from which the app makes three lines, "Area:",
"Touches:" and "Water:", the last two read from the map data's neighbors and water (never written by hand), then `cue`,
the one thing that tells it from the place it is mixed up with (`placeReasonOf` in place-gen.js). A place has one or the
other, never both. A place's `lights` names the place its name question lights instead of itself (a capital, tapped as its
dot, is named from its state lit), and its `forms` keeps it to some of its group's forms.

| Form | The learner is shown | Answers | Made as |
|---|---|---|---|
| `tap` | the name | taps the place on the blank map | a `place` ask under a prose block with the name |
| `name` | the place lit | types its name (`accept`, 3.7) | a `text` ask under a `map` block with `lit` |
| `flag` | the flag (`flag`: an emoji, or for a flag no emoji draws a drawn spec, see 3.9), large, with no name | taps the country | a `place` ask under a `flags` block (3.9); the feedback opens with the place's `flagLine` and shows the flag with the name beside it |
| `border` | the name | taps a neighbor, then the water or Landlocked | a `place` ask with `mode: 'neighbor-water'` |

- A place's `flagLine` is the one thing that tells its flag from the one it is mistaken for ("Three upright stripes, black, yellow and red. Germany's
  three stripes lie flat."): it is read in the feedback of a flag question, before the place's own line, and nowhere else.
- A place is asked in a form only when it can be: a flag needs the place's `flag`, `border` a place that is ground with neighbors on the map
  (an island with none is never asked for them). `words` is the prompt of each form the group asks; `reason` is the place's one line, shown
  after every answer; `slips` keys the slip of tapping a place that is not the one asked, for the taps. Every question a group can make goes
  through V70 and V74 as an item, and the facet `form` (the form asked) is added to each, so the subject's facet `form` has a value for
  each form in use.
- **A try is filed under the place**: `<generatorId>|<placeId>` in `items` (5.1), so each place keeps its own last twelve tries per context,
  and the engine reads from the record which form each place was last asked in and whether it was missed. A missed place comes back in a
  lesson as itself, with its seed, three questions on.
- **In a lesson**, `{ gen, n, with?: { form?, place? } }` asks `n` different places of the group (never one place twice in one reference;
  V70 refuses an `n` above what the form can offer), the ones missed last time or met longest ago first, in a random order; in the form
  named by `with.form`, else in the form each place was not last asked in. `with.place` names one place. A group takes no help (V70).
- **In the review** (6.3) a strand that is a place group is asked on one place: the one missed last time, else the one met longest ago, in a
  form it was not last asked in.

### 3.6 Asks

| Kind | Shown as | The learner | Scored | After a miss |
|---|---|---|---|---|
| `choose` | buttons: `options`, or `from: listId` with `right` (and `only`) | taps one (`many`: several) | right if exactly the right options are tapped | the chosen option's `then`, or its slip's name |
| `number` | a `frame` with a blank per value, the `unit`, a calculator button | types numbers | every blank within `tol`; else the first matching trap | the trap's `then`; else the working |
| `form` | rows of number and choice fields, answered whole | fills them in | field by field, as `number` and `choose` | a line per missed field, in its own kind's words |
| `tap` | the `lines` of block `in` become buttons; `none` adds a "Not given" button | taps one line (`pick: n`: n) | right if the tapped set is `right` | "You tapped …" and the line's `note` and slip |
| `text` | a box under a `spoken` question, and "Not yet" | types words | matches an accepted answer (section 3.7); with `model`, never scored | every accepted answer, and the item's `reason` |
| `order` | `steps` to put in order | taps `right.length` of them; with a step that belongs in no order, taps those it would do and Answer | the whole order, or `scored: 'first'` | the right order and `then` |
| `exchange` | a call or chat whose turns follow the replies | picks a reply each turn | right if it reaches an `ok` end | the pushing lines marked, and where it could have ended |
| `place` | the blank map of a region (3.11), with no names; with `mode: 'neighbor-water'` a button "Landlocked" in the row of the zoom buttons once a neighbor is tapped | taps the map: the place; or a neighbor, then the water (or "Landlocked") | right if the tap is inside a right place's shape; the neighbor and water ones by the map data | "You tapped: <the place the tap was on>", the slip of that place; the right place lit and the tap marked |
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

**`number`** `{ id, kind, prompt, frame?, unit?, places?, answer, tol, estimate?, traps?, calc?, wild?, when? }`. `frame` has a blank
(`__`) for each value of `answer` (a number, a value the generator makes, or a list of them); `places` fixes the
decimals printed. "$1,234.50", "40%" and " 7 " read as numbers; anything else keeps Answer shut. The answer is stored as
the list of numbers typed. `tol` is one of four: `{ round: step }` (the same when both are rounded to the step),
`{ band: [least, most] }` (from least to most times the answer), or `{ abs }` and/or `{ rel }` (either is enough); `round`
and `band` stand alone. The result is `ok`, the slip of the first trap whose value matches (by the same `tol`), the
slip named by `wild` when the number is more than double or less than half the answer, whatever trap it also matches (so a check's "none
wild" counts every wild answer; the feedback still prints that trap's line, found from the numbers typed), or `no`.
`traps: [{ slip, value, then? }]` names the numbers a learner gets by each slip; with no `then` the slip's name is printed.
- **The estimate is an ask of its own**, `estimate: true`, placed before the exact one (V74), with no calculator. It has
  its own result, so a pass rule can count it and the feedback puts it beside the exact answer ("You said $68.00. The
  exact answer is $72.40, so you were 6% under."). With no `tol` it is right from half to double (`band: [0.5, 2]`). A
  wild estimate makes the item a miss.
- **The calculator** does four operations, one at a time, opens under the boxes (never on an estimate), and "Put it in
  the box" copies the display to the first empty box. What is typed survives a repaint. An ask's `calc` adds buttons in a row above
  the four, any of `'pow'` (xʸ, a power done like the other operations, one at a time: 1.05 xʸ 10 × 1000), `'sqrt'` (√ of the number
  shown, which then counts as a typed number: 9 + 16 √ = 13) and `'mem'` (M+ finishes the sum and adds it to the memory, MR shows the
  memory, MC empties it; an M on the display while it holds a number; C keeps it; it lasts for the question) and `'trig'` (sin, cos and tan of the number shown, in degrees, held like √: 35 tan × 12 = is 12 × tan 35°; tan of 90° is an error). `CALC_EXTRAS` and
  `calcPress` in `number.js` are the one list and the one machine; V70 refuses another name, one named twice, and `calc` on an estimate.

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
- *An answer from memory*, `{ id, kind, prompt, accept: [Entry] | { own: 'answers.q23' }, reject?: [Entry], count?, taught? }` (`taught: true`: the accepted answers are the subject's own lessons' words, such as Stats' six questions, not a published list, so V84 asks no source for them) (`reject`: another thing's name, typed exactly, is a miss and never a forgiven misspelling; a place group fills it with its other places' names), under a `spoken`
  block that holds the question. An `Entry` is a string (words in brackets are optional; a bracket that offers a choice
  may be said with either half) or `{ text, parts }` (parts in any order). `count: n` needs n different accepted answers
  in what was typed. `accept.own` reads the learner's own entry. The item's `reason` is the meaning line, shown after
  every answer with every accepted answer. The app accepts only what the list prints.
- *What counts as the same* (`recall.js`): capital letters, accents, punctuation, "a", "an", "the" and "and" do not
  matter; "U.S." is "us" and "state's" is "states"; a number in words is the number, and two number words that do not
  join are two numbers ("two three" is 2 3); words in brackets are in or out; two names of letters joined by a slash ("Antietam/Sharpsburg", never a number such as 1/2) are either name or both; one small misspelling in the whole answer
  is forgiven (one letter off, in a word of four letters or more, never a number). Every word typed must belong to some
  accepted answer: a word left out or added, another answer's words, or two misspellings is a miss. With `count`, the
  same answer twice counts once. X14 asserts each of these.
- *A claim*, "My answer means the same": after a miss with something typed, it counts the answer right in that sitting
  (`r: 'claimed'`, shown as "Counted on your word"), logs `claim`, removes the item's repeat, and is not a good day for
  the schedule, so the question returns. Offered in a set, in the review and among a check's answers; never in a
  baseline or after "Not yet". A pass rule by ask counts a claim as right.

**`order`** `{ id, kind, prompt, steps: [{ id, text }], right: [stepId], scored?: 'whole' | 'first', then, when? }`.
Every step is offered, mixed and never already in order; `steps` may hold one that belongs in no order. When every step belongs, the
learner taps them all and is told how many; when one does not, leaving it out is part of the question, so the count is not given and the
learner taps the steps they would do and presses Answer (open once one is tapped). Each tapped step is numbered and shut, and "Start
again" clears them. `scored: 'first'` is right when the
first step is.

**`exchange`** `{ id, kind, prompt, form: 'call' | 'chat', from, detail, start, turns: { id: { lines, push?, options:
[{ id, text, goto } | { id, text, end }] } }, ends: { id: { ok, then, slip? } }, when? }`. One question, never timed (a
timed set leaves it off the clock), scored by its end: `ok`, the end's slip, or `no`. A turn's `push` names how it
pushes. Nothing is marked before the end; then the pushing lines on the way are marked and named, and the reply where it
could have ended right is named. V70 refuses a reply to a turn that does not exist, looping turns, unreachable turns, and
no right or no wrong end; V74 refuses an exchange in which nobody pushes, or no reply that holds off meets more pressure.

**`place`** `{ id, kind, prompt, map, right: placeId | [placeId], slips?, when? }`, or `{ id, kind, mode: 'neighbor-water', prompt, map, of, when? }`.
`map` is a region of the map data (`FC.maps`, 3.11) and `right` the places of it that are right; a list is any one of them. The
item's blocks hold the question (a prose block with the name, or a `flags` block with the flag and no name), never the answer: a `map` block of the same region
that has the right place lit is refused (V74). The learner taps the map; a tap is a tap only when one finger went down and up
without moving more than 8 pixels and no second finger touched (pinch, drag and the zoom buttons never count). The answer is
stored as the three numbers `[x, y, k]`: the point in units of the map and the zoom it was made at (1 to 8).
- *What a tap is on*: inside a place's outline, an outline being rings in which a point is inside when it is inside an odd number
  of them (so the country in the hole of another is not the other); a sea, an ocean, a lake, a range and a desert have no holes, a
  point is inside when it is inside any ring; a sea never holds land (the land of the region, `land`, is taken out of it, because
  the outline of a sea overlaps the coast); a river (`line`) is held within a band of 1.4% of the map's width, and a microstate
  (`dot`) within 2% of it, both divided by the zoom the tap was made at, so a tap is as exact as a finger and a zoomed map asks more.
  **Coasts, straits and canals** are those same shapes with a larger floor under the tap: a coast (`kind: 'coast'`) is a `line` along a
  shore held within a band of 4% of the map's width (on land or at sea), a canal (`kind: 'canal'`) a `line` held within 2%, and a strait
  (`kind: 'strait'`) water, like a sea (no hole, and the land under its outline is not it), with a `dot` at its middle so it is found
  within 2% of the map's width even where its outline is thinner than a finger. See 3.11 for what is built.
  **A ground place no bigger than a fingertip** (Luxembourg: its box is at most 6% of the map's width wide and tall, divided by the zoom, so a map zoomed in
  far enough stops treating it so) is held within 3% of the map's width of its outline, divided by the zoom, whatever larger place the tap is on: the
  nearest such place when two are near, and it is the place a tap beside it is named for. It takes no tap from the place the tap is inside when that is
  the one asked (both are right), and a place bigger than a fingertip gets no such radius (`PLACE_SMALL_TAP`, `placeSmallAt` in place.js).
  **A tap at sea just off a shore**, on no land, is on the land of that shore when land is asked: the nearest place of the kind asked whose outline is
  within the same fingertip (3% of the map's width, divided by the zoom), because a coast at a phone's size is thinner than a finger (Portugal's west
  coast). It is named that place after a miss, and it is right when that place is. When water is asked (the second tap of a neighbor and its water), the
  same tap is the sea (`placeShoreAt` in place.js).
- *`slips`* is keyed by a place: a wrong tap inside it carries that slip. Otherwise a miss is `no`.
- *A neighbor and its water*: its question block reads "What borders <place>?" (a place group's border question is made with
  `SAY.placeBorderAsk`), never the bare name, so it never reads as a name to tap. Two taps in order, kept in `Q.cur.many[askId]` until the second, and Undo (beside Landlocked, under the map) takes
  the first back while the second is still to come. The first must be inside a
  neighbor of `of`, the second inside one of its water or the button "Landlocked" (`'none'`), right only when `of` has no water at all.
  **One water rule for every map** (decided 2026-10-18): a place's water is its seas, its oceans and the big lakes that lie on it or against its shore (the Great Lakes, Lake Victoria,
  Lake Tanganyika, Lake Malawi, the Caspian Sea), so Ontario is on the Great Lakes and Uganda on Lake Victoria; "Landlocked" is right only for a place that touches none of them (Rwanda on
  Lake Kivu and Chad on Lake Chad are landlocked: those lakes are too small). A lesson never says that a lake does not count.
  **A sea is part of its ocean** (decided 2026-10-18): a marginal sea that the IHO's *Limits of Oceans and Seas* (S-23, 3rd edition) gives an ocean carries `partOf: <ocean>` in the map data
  (`PART_OF`, `tools/maps/limits.mjs`, set when the ocean is a place of the map): the Bay of Biscay, the English Channel, the North Sea, the Irish Sea, the Baltic, the Caribbean Sea, the Gulf of Mexico,
  the Labrador Sea of the Atlantic; the East China, Yellow, South China, Philippine, Bering and Tasman seas of the Pacific; the Arabian Sea, the Bay of Bengal, the Gulf of Aden, the Red Sea and the
  Persian Gulf of the Indian Ocean; the Barents and Beaufort seas of the Arctic. The Mediterranean is not the Atlantic's (S-23 gives it a chapter of its own, with the Adriatic, Ionian and Aegean in it), nor are
  the Black Sea, Azov or the Caspian an ocean's. The water answer takes a tap on the ocean as right where a place's water is a part of it (`placeWaterRightOf`: France, on the Bay of Biscay, is right
  with a tap on the Atlantic; Italy is not), and the feedback names both: "the Bay of Biscay, part of the Atlantic Ocean" (`SAY.placePartOf`), the ocean named alone when it is in the water list already.
  `water` itself, which the gen text and Landlocked read, is unchanged.
  Neighbors and water are the map data's (computed by the build from the outlines: a border through a lake between two states or provinces is not a border; one between two countries is), so a
  lesson never lists them, and `of` is a place that is ground (the region's `land` kinds). The answer is
  `{ n: [x, y, k], w: [x, y, k] | 'none' }`; after it `of` is filled in full and every neighbor of it
  lit as a lighter tint (`focus` and `near`, so the place asked about is never read as one of its neighbors), the water it touches and the water the
  learner tapped are lit (no other water), each of them named on the map (`of`, every neighbor and the lit water, each once: the map has no other
  names), the taps marked. Landlocked stands in the row of the zoom buttons, under the map.
- *Feedback* (section 4.1): the mark, "You tapped: <place>" (or that the tap was on no place) with the slip's name, the right
  place lit on the same map, named on it, and the tap marked beside it: a map is the picture, so a lit place always says what it is on the map
  itself, after a right tap as after a miss, and the name is learned with where it is. In a check nothing is lit or marked until the end (X23). A worked
  item shows the place lit, named and the tap marked at once, under the line "Done for you: the answer is on the map" (its map takes no tap).
- *A lit place named from memory* is a `text` ask with `accept` under a `map` block with `lit` (one place): the lit map is the
  question, so it needs no `spoken` block and may not have one (V74). Its name is kept off the map only until the question is marked; then
  the map names it.

### 3.8 The sing ask

A sung question is never a written item. A set or check names a task, `{ sing: { task, ...params }, n }`; the app makes
each question from the learner's range and a seed, and stores its tries under `sing-<task>`. Its strand is the task.
`SING_PARAMS` in `public/app/lessons/sing-task.js` is the one list of limits (V78).

- **Tasks**: `warmup` (a hum with the line, unscored, skippable by "Skip the warm-up"; a step of its own, the first of
  every sung lesson, never asked again, not stored), `range`, `match`, `hold` (`seconds` 2 to 6), `slide`
  (`maxSemitones`), `interval` (`minSemitones`, `maxSemitones`), `melody` (`notes` 3 to 5, `maxStep`, and if it likes `noteMs` 800 to 1600, a slower
  tune: `SING_OPTIONS`), `light`. `cents` (5 to 100, default 25) is a setting of the task, so the tolerance travels with its questions.
- **Targets**: match and hold notes from the middle 60% of the range, light notes from its top fifth; every note of
  every task inside the range (V78 makes each task on 200 seeds over five ranges).
- **Turn-taking**: a tap plays the target (a note 1.5 s; the two notes of a slide or interval 1 s each; a melody's notes
  0.8 s, or its `noteMs`, and its last 3 s; 0.12 s between). The target is a soft hum-like tone (`AUDIO_VOICE_HARMONICS`: the note itself
  strongest, three weaker harmonics above it), fuller than a sine; it is not a voice and no screen calls it one. The microphone is ignored while it plays and for 0.25 s after; the window is
  each note plus 0.4 s (a hold: its seconds plus 1 s). Sound runs on the audio clock and readings on the frame loop
  (about every 50 ms); there are no timers.
- **A sung run** (an interval, a tune) is not scored in fixed slots. Its readings are moved into the run's own octave (the one in which
  they sit closest to the notes of the windows they fall in) and aligned to the played notes in order by dynamic programming
  (`singRunParts`). Only voiced readings make up a note: a silence between notes (unvoiced readings) is its own, never part of a note's
  cost or length, so the singer's gaps between detached notes, short or long, fit as well as legato. Each note gets a stretch, costed by
  how far its readings sit from that note and by a duration prior: each note but the last lasts about its played length at the singer's
  own tempo (0.7 to 1.6 times the played one) and lag, shorter costing a quarter as much as longer; the last note starts near where the
  rhythm puts it and is held, shorter than its played length (or the end of the listening) costing an eighth. A note's onset is the first
  sound, the voice sounding again after a silence, or a step to a new note that it sings on (a change of more than a shade over 0.15 s, or
  a legato step of a half-step over 0.25 s either side of a glide); a stretch that begins at an onset is preferred. The tempos and lags
  that line the onsets up best are each split (and, when the onsets do not decide, one tempo in each band), and the split whose own cost,
  pitch and timing together, is least wins. A common offset (a tune sung sharp, flat or drifting) is read from that split against the true
  notes, up to a shade, and the split is made again with it taken out. Every note gets its own stretch, so a wrong note, even at its
  neighbour's pitch or a note held across two, is named where it sat; a note is "Not heard" only when the voice was silent for three
  quarters of its time inside the listening; every voiced reading belongs to a note. A stretch's leading glide from the note before is
  left out (up to 0.3 s). A run whose last note is held is listened to long enough for a singer 1.5 times slower than played. All weights
  are judgement calls, measured in `tests/sing-sim.mjs`, which runs every scenario any review of this scoring has used
  (`tests/sing-sim/`). A gap in clear sound is a stop only when no reading in it was voiced.
- **Scoring**: a note's error is the median of the middle 60% of its clear readings, each folded to the octave nearest
  the target; at least 5 clear readings (a slide's last 0.4 s, 3). A match or a light note also stores `start`, the middle of its first 5
  clear readings: one that starts more than a shade off and moves more than a shade to where it sits slid into the note (`singSlid`), is
  named "Sliding up into it" (or "Sliding down onto it") and is not on the note. A hold stores `end`, the middle of its last 5 clear
  readings, so a hold that broke says whether it sank or rose (`singDrift`). A hold also stores `start`: off from the start when its start
  is off, otherwise sank or rose by its end. A match or a light note stores `turns`, the times it turned back by more than a shade; two or
  more is a hunt, "Hunting for the note", not on the note (`singHunted`), named before a slide. A melody stores its last note's `end`. What
  was measured (`singMeasured`) is one reading for the mark and for the "You said" line, so they never disagree; a hold is asked where it
  ended and shows the answer back. A note's track is first cleaned and centered (`singCentered`): a reading more than 300 hundredths of a half-step from
  the median of itself and its three neighbours each side (counted in readings) is a slip of the pitch finder and is left out, and each
  reading is replaced by the mean of the cleaned readings within 0.1 s either side (at least one either side), so a natural wobble of five to
  seven a second is judged by its middle at 50 or 66.7 ms between readings (judgement calls). A note's `start` is the middle of that track over its
  first 0.15 s, `land` over 0.5 to 0.75 s in (a slide moved more than a shade from `start` to `land`), and a held note's `end` over its last
  quarter of a second before the release (the last 0.25 s before any stop, which is part of stopping); its turns are counted on it.
  A note's error is the interquartile mean of the middle of its cleaned readings (so a vibrato counts by its middle). A held note
  (a hold, a tune's last note) is judged on a longer center, the mean over 0.2 s either side (two cycles of a vibrato at five a second): a hold
  is the longest unbroken run of that track inside the tolerance; a gap in clear sound over 0.28 s breaks it, and the center never reaches across one (longer than three
  readings lost in a row at 66.7 ms, shorter than a breath). A hold also stores `left`, the time its track was off the note after it first
  reached it, leaving out the release before each stop and the end: a hold that broke with `left` 0 stopped (its sound stopped), otherwise it wandered. An interval needs both notes on; a melody `ceil(0.8 n)` notes on and its last
  held 2 s; a light note must be on and its median loudness at most 1.15 times the learner's talking note, measured in
  the same set from two unscored notes (loud, then talking). A missed note in a run counts as 1200 off. **Silence is not
  a miss**: nothing is stored, and "Try again" makes the same question again.
- **Words**: "On the note", "A shade under", "A shade over", "Well under", "Well over", "Not heard" (`SAY.singWord`); a
  shade is more than 50 and up to 100 hundredths of a half-step off; with a tolerance under 50, a note off by up to 50 is "A little under"
  or "A little over" (`SING_LITTLE_CENTS`), never "a shade". A held note (a hold, a melody's last note) is named from its start and its end by
  one function (`singHeldShape`): off from the start only when it began off, not by sliding in, and ended off on the same side; otherwise a
  slide into it, and then sank or rose by its end. Its guess is measured at its end. After a miss, one line for each note that was off says which way to
  move and how far: less than a half-step for a shade, about n half-steps for well (`SAY.singVoice`). "Half-step" is the one music word on
  a screen, defined in Singing's lesson 2 with the Jaws theme before any result uses it; never cents, hertz, semitone, octave or pitch.
  When the learner said something else first, the result says which way their note really was ("The app measured: a shade over. Your note
  was higher than it sounded to you.").
- **A group that holds its results to the end** (`feedback: 'at-end'` on a group with `guess`, V78): after each try the learner says
  under, on or over and sees nothing else (the strip stays empty, no marks); the break screen lists how each try went in the order sung
  ("How each try went"), and a miss does not come back. Feedback after every few tries builds the learner's own judgement (Singing's V14).
- **Saying what you heard first** (`guess: true` on a group): when the window closes, the screen asks "Before you see how it went: was
  your note under, on or over?" (a run: its last note) with three buttons, and only then shows the result, with "You said: Under" and whether
  the app measured it the same way. The answer is kept with the try's numbers as `guess` (-1, 0, 1) and never scored. Only a group of `match`,
  `hold`, `slide`, `interval`, `melody` or `light` questions with no line asks it (V78); a check never does.
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
| `figure` | `rate-table`, `bar` (the 100% bar), `plan` (a plan to scale: rectangles, circles with `shape: 'circle'` and a radius `r` (`across` writes the distance across), right triangles with `shape: 'triangle'`, the right angle at the bottom left; `say` writes words for a side of any shape, "?" or "10 ft ladder"; a tall plan fits 300 units), `years`, `people` (1,000 dots a row, the first `count` marked; a count may be a generator's slot), `stick` (the value stick of one sale: `{ caption, wtp, price, cost, wts }`, drawn as one bar from the least suppliers and staff would take to the most a customer would pay, cut at the cost and the price into the three shares, each as wide as its part of the value created, with the value created and each share written with the two levels it lies between; the levels run down in that order and some value is created, V70) | `type`, `data` (shapes in `tests/lessons/shapes.mjs`) |
| `ref` | a value looked up: its text, the value, "Looked up <day>", "Source: …", a line to check the source, and after a year a line to look it up again | `ref` (an id of `subject.refs`) |
| `panel` | what a label or word requires, printed from `subject.rules`, beside the item while the help lasts | `rules` |
| `spoken` | a question read aloud by an on-device voice; its words shown, or held behind "Show the words" | `text`, `show?` |
| `map` | a region of the map data drawn blank, north up, with `lit` places shown (one for naming, two for a distance); `labels` names its places (`true`: every kind the region labels; a list: those); `view` opens it on one part of the region (a panel) | `region`, `id?`, `labels?: true \| [placeId]`, `lit?: [placeId]`, `view?: [x, y, zoom]` |
| `flags` | the flags of places of a place group (3.5), each about 64 pixels wide; with `names`, the name beside each; also the picture added to the feedback of a flag question | `gen`, `places: [placeId]`, `names?` |
| `pitch` | the strip of a `sing` ask; made by the app, never written | none |
| `tones` | example sounds the app makes, on a teaching screen only (never on a question, never in a `pair`): "Hear it", the sentence that says what to listen for, and a button for each sound; a tap plays it, a second stops it, moving on stops it; nothing sounds before a tap | `says` (at most 3 sentences), `examples: [{ label, play: [{ note, at?, ms \| path: [[ms, cents]], cents? }] }]` (at most 4 examples of 4 tones, a tone at most 4 s, an example at most 6 s: `AUDIO_LIMITS`) |

A place's `flag` is its emoji, or, when no emoji draws it, a drawn flag `{ box: [w, h], layers: [['rect', fill, x, y, w, h] | ['path', fill, d] | ['star', fill, cx, cy, r]], said }` that the `flags` block draws as an
inline SVG about 80 pixels wide, hidden from a screen reader as the emoji is (`flagHtml`, `place-view.js`; the validator checks the spec, `flagProblems`, `place-gen.js`). Kosovo is the one: 🇽🇰 is not in the Unicode standard
and shows as two letters on most phones, so its flag is drawn (blue, the country in gold from the map data's outline, six white stars in an arc) in `gen-balkans.js`; `said` is the flag in words with
no name, for a view with no pictures.

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
- **A map** is drawn from the map data by `public/app/lessons/place-view.js`: layers bottom to top are the lit water (so a sea's
  outline never covers a coast), the blank map in the order the region's `draw` lists, the insets' frames, lit ranges and regions
  (see-through), the dots of microstates, the names, and the marks of taps. Nothing on a blank map carries a name, in the picture or
  the page; the one look at a labelled map (`labels`) is a teaching screen. A lit place is always named on the map itself, never only in the
  text beside it (a map is the visual aid; the eye should not leave it for the name), except while a question asks for that name. A name is set in pixels, not in units of the map: 12 pixels tall
  on the screen at every zoom (`map-run.js` puts it back at each zoom), and a microstate's name stands off its dot on a line to it, the pixels
  right and down in the place's `lead` (3.11). Two names that would sit on one another (Haiti under the Dominican Republic on a lit map) are set apart on the screen: the first
  stays on its point and the later one steps off along a short lead, on a line to its point as a microstate's does (`placeNameLeads` in `place.js`, run by `map-run.js` at each zoom and screen
  size; a name the map data leads is never moved). A region too crowded to read whole is shown as panels, each a `map` block with a `view`
  that names only the places in it; the button for the whole map goes back to the part the map opened on. Water is drawn in a water color
  (the map's sea, and a lit sea, lake or strait in a lighter one), never the land's. A map is pinched, dragged and zoomed to 8 times
  (`map-run.js`), by two fingers, by the buttons under it (zoom in, zoom out, the whole map) and by ctrl and the wheel; its zoom is
  kept across a screen painted again and reset when the question or step changes. An item's `figure` may be a map (a picture added to
  the feedback: the true map after a trap item).
  On a phone (up to 520 px wide) a map that asks something is only as tall as the screen leaves room for what goes with it, with no scroll at 390 x 844 (X47): a
  place asked on the map holds two lines for its line of help for as long as it is shown (the map does not move when the line changes after the first tap), then the map, then
  one row with Landlocked and the zoom buttons; a lit place named from memory has its box and its button under a taller map. A map's frame is the color of water, so the
  bars either side of a map that is taller than wide read as sea; the border between two countries is `--dim` on the country's `--rule`, over 3 to 1 (X46).
- **Speech** starts only on a tap: "Hear the question" reads the first question, and each next question is read when
  the learner taps Next. Only a voice that is on the phone and in English is used; with none, the words are shown with
  one line saying so. "Hear it again" replays; leaving a screen or the page going to the background stops it. There is
  no speech recognition: the learner says the answer aloud, then types it.

### 3.10 Not built

- A private form into `lines` (Psychology part F), refused by V70 (`NOT_BUILT` in `tests/lessons/rules-shape.mjs`).
- Recorded voices: calls are transcripts, read by an on-device voice where one exists.
- A part of a state (halves and thirds of a unit) as a place; flags drawn from the map data (the emoji flag is text in the place group's list,
  shown large by a `flags` block; a flag with no emoji, Kosovo's, is a small drawn spec in the list, below); the Strait of Hormuz and the Bering Strait as outlines (they are points, 3.11).
- Singing's review (to be: a warm-up, then each due lesson's check, without the line),
  the range as a lesson step with a check of its own, and a range typed by hand.

### 3.11 The map data

`npm run maps` (`tools/maps/build-maps.mjs`) turns Natural Earth (public domain; version 5.1.2, fetched once into the ignored
`tools/maps/.cache/`) into one script per region, `public/maps/<region>.js`, registered with `FC.map(id, region)` in the frozen
`FC.maps`. Nothing is fetched when the app runs. A region is a list in `tools/maps/regions.mjs`: a projection fitted to a frame
(Equal Earth for `world`; Albers USA, d3's layout, with Alaska and Hawaii on insets for `us`; Lambert equal-area for
`europe-west`), and the places taken from Natural Earth by name. To add a region, add a list and run the build. Eighteen regions are made by one factory
(`tools/maps/window.mjs`, lists in `regions-americas.mjs`, `regions-eurasia.mjs`, `regions-africa.mjs`): a window of the world laid out 1000 units across by a
Lambert equal-area (an Albers conic for Canada), the countries that have ground in the frame (the ones the part asks must show, the rest are neighbors and are left
out when only a sliver shows), and the seas, straits, canals, rivers, lakes, ranges and deserts the part names; `regions-world.mjs` gathers those lists for
`world-features`, so a name is written once and an id is the same on every map (`france`, `sahara`, `strait-of-hormuz`).

```js
FC.map('europe-west', { name, size: [1000, 1015.9], q: 10, land: ['country'], draw: ['country'], labelled: ['country', 'sea', 'ocean', 'range'],
  frames?: [{ id, x, y, w, h }],          // the insets of a map
  rings: [[x0, y0, dx, dy, ...]],         // every outline once: the first point, then the step to each next, in tenths of a unit
  places: [{ id, name, kind, rings: [ringIndex], line?, dot?: [x, y], at?: [x, y], lead?: [dx, dy], neighbors?: [id], water?: [id] }] });
```

- A place's `rings` name entries of the ring table, so a continent or a census region is its members' rings and no outline is stored
  twice. `kind` is the kind of place (`country`, `state`, `province`, `continent`, `region`, `ocean`, `sea`, `strait`, `lake`, `river`, `canal`, `coast`, `range`, `desert`, `city`); `at` is where
  its name goes (3.9: its size is the app's, in pixels); `dot` a microstate, a small island state, a city or a strait with no outline, a point with a tap radius, and `lead` the pixels, right
  and down, that its name stands from the dot (the app draws a line between). A tap on the circle of a dot is named for the microstate, not the country under it.
- **Cities of the `world` map** (parts 31 and 32): 42 dots of the kind `city` from `WORLD_CITIES` in `cities.mjs`, found and named as the cities of `us` are, in the one group `world-cities`; the pairs the traps
  and the distances name (San Diego and Reno, Reno and Los Angeles, Rome and Philadelphia, Santiago and New York City, Lima and Miami, Paris and Seattle) and others across the six continents. A city of both maps is one id and
  one name on both (`new-york-city`).
- **Dots of the kind `city`** (`us`: the 50 state capitals and 34 big cities, Dallas–Fort Worth and Minneapolis–St. Paul as one dot each; `tools/maps/cities.mjs`, from
  Natural Earth's populated places) have no outline (`rings: []`), are not ground, not in `draw` and not in `labelled`: the blank map shows none, a lit city is drawn as a dot
  and named on its map (a lit place always is), and `labels: true` names none. Found within the radius of a dot (2% of the map's width, divided by the zoom); a tap on a city is
  named for it when a city is asked and for the state it is in when a state is, a tap on a state is never on a city. A city's id is its name (`denver`), except where a state
  has it (`new-york-city`, `washington-dc`). A capital that is also a big city is one place; Minneapolis–St. Paul is `minneapolis-st-paul` and the capital `st-paul` is a dot beside it.
- **Where a dot's name stands**: a spec's `lead` is `[dx, dy]` pixels by hand (the five microstates of `europe-west`), or `'auto'`: the build sets it clear of the other dots and
  names of the same `groups` (a lesson's cities: west, east, the capitals of the West and Midwest, the capitals of the South and Northeast; a region's island states) as
  they stand on a phone's map (360 pixels across) looked at in panels zoomed 3 times, and leaves it out (the name stands over its dot) when nothing is in the way (`leads.mjs`).
  A city may lie over its state's name. The file holds only whole numbers, never `'auto'`.
- **A point given by hand** (`point: [lon, lat]` in a spec, no outline): the Strait of Hormuz and the Bering Strait, which Natural Earth does not draw; a strait with an
  outline (the Bosporus, from the 10 m marine layer) has its dot at the middle of its extent as Gibraltar does. A strait or sea whose outline stops short of a shore has a patch drawn
  by hand (`SEA_PATCHES` in `window.mjs`: the Gulf of Aqaba, which the Red Sea of the data ends before, so Jordan is on the Red Sea).
- The build projects every outline in advance and cuts it to the frame; simplifies it (Douglas-Peucker, 0.1 to 0.35 of a unit)
  keeping every vertex two neighbors share, so a border is the same on both sides; rounds to tenths; drops a ring under 0.04 square units.
  The lower 48's water and neighbors are not cut away under an inset (a tap on the sea beside Hawaii is the Pacific); the lower 48's land is.
- `neighbors` and `water` are stored for every place of a `land` kind: two places are neighbors when an edge of their outlines
  is shared on land (a border through a lake is not one when a state or province is on it; one between countries is, Tanzania and the Congo in Lake Tanganyika; Four Corners is not one), or, for a state and
  Canada or Mexico, when a stretch of 20 km of one's outline runs unbroken within 8 km of the other's; water is every sea, ocean or big lake whose outline a coast
  reaches, or that lies inside the place's polygon (a Great Lake lies inside the polygons of the states around it, so a lake is a place's water when a share of the lake's area is inside it).
  **Neighbors of a country are the whole world's** (`tools/maps/world-borders.mjs`): a window cuts a country's borders off (Russia on the map of eastern Europe lacks Norway, China, Mongolia, North Korea), so the
  build works out the land neighbors of every country over the whole countries layer, by the edges two countries share, in every region (a window, `europe-west`, and Canada and Mexico on `us`). A neighbor with
  no shape in the frame, or a sliver of one, is a place of the kind `country` with `rings: []` and no `at`, `neighbors` or `water`, kept only while a country that shows has it as a neighbor: it is named in the feedback
  and cannot be tapped, as Russia's Arctic is, and the right answer to the neighbor question stays a tap on a neighbor that shows (`placeAskProblems` fails a country whose neighbors all lack a shape). A country
  that has a place on the map is that place's polygons: France's in South America are French Guiana's (Brazil is not France's neighbor). The United States, which is its states on `us`, and Canada, which is its
  provinces on `americas-north`, are not neighbors but a border. Natural Earth draws Botswana and Zambia meeting at one point, Kazungula, where they have a border of 150 m: `POINT_BORDERS` names it (Namibia and
  Zimbabwe meet at the same point and have none). The coast of a country is the edges no country of the world shares, so a window does not make a land border a shore. The province of Quebec is named `Quebec`
  in the data (`PROVINCE_NAMES`, `window.mjs`), as the lessons say it.
  **The coast rule** (`waterOf`, `topology.mjs`): a coast is the edges of a place's outline that no country (or state) of the layer shares, and a water is the place's when its coast runs along it for 15 km,
  or for 5% of the place's whole coast where that is less (Israel's 11 km at Eilat, on the Gulf of Aqaba, are 6% of its coast and the Red Sea's whole shore: Israel and Jordan are both on it). An island state
  (a dot with no land border) is on every ocean within 2 degrees of its shore, since Natural Earth draws the Caribbean Sea across the whole chain of the Lesser Antilles and leaves the Atlantic beyond them
  out of reach (Barbados, Antigua and Barbuda, Dominica, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and Grenada are on the Atlantic and the Caribbean Sea; Jamaica, well off the Atlantic, is on the
  Caribbean only). The constants are `COAST_RULE`. Where Natural Earth's outline of a sea runs past the limit S-23 gives it, the sea is cut at the limit and no country is listed by hand: the Adriatic
  runs on south past the line from Cape Santa Maria di Leuca to Cape Linguetta to Corfu and the coast of Albania beyond the Karaburun peninsula, which are the Ionian's (`SEA_LIMITS`, `limits.mjs`), so Greece
  is not on the Adriatic and Albania is on the Adriatic and the Ionian. A stretch rule (a sea counts for a stretch of coast by its share of it) was tried and left: no share tells Corfu's Adriatic shore
  from Albania's Ionian one, and it lost Djibouti's Red Sea and Quebec's Labrador Sea.
  **The one water rule, in every region of the states, provinces and countries** (`borders.water` is oceans, seas and lakes): a lake is big, and so water, when its outline holds 15,000 square
  kilometers or more in Natural Earth's lakes layer (`tools/maps/lakes.mjs`: the Great Lakes, Victoria, Tanganyika, Malawi, Great Bear, Great Slave, Winnipeg, Baikal, Ladoga, Balkhash), and a
  window of the world has every big lake with ground in its frame (`lakeSpecs`, `window.mjs`), no list to keep. A smaller lake or a reservoir is scenery, not water. The Caspian is a sea in
  Natural Earth's marine layer and is listed with the seas of a part. An ocean takes in the bays and seas inside it that are not places of their own (the Atlantic the Bay of Fundy and the Gulf of Maine,
  the Pacific the Bering Sea and the Sea of Okhotsk, the Arctic the Barents, White, Kara, Laptev, Chukchi and Beaufort seas), and a sea takes in the water beside it that Natural Earth's 50 m outline leaves
  out (`SEA_ALSO` in `window.mjs`: the Gulf of Honduras into the Caribbean Sea for Guatemala, the Alboran Sea into the Mediterranean for Morocco, the Bight of Benin from the 10 m layer into the Gulf of
  Guinea for Togo and Benin). The water a country touches beyond its frame is in its `water` as a place with no shape (`beyond`: Russia's Arctic and Pacific coasts on `europe-east`; it is in the file,
  named in the feedback, and cannot be tapped). On the map of the United States the Arctic Ocean is drawn in the Alaska inset, so Alaska's water is the Pacific and the Arctic.
- Natural Earth's own choices, kept: Western Sahara and Kosovo are places of their own, Palestine (the West Bank and Gaza) is one place, Northern Cyprus is Cyprus and Somaliland is
  Somalia, Taiwan is a country, dependencies (Puerto Rico, the Faroes) are left out unless a part asks them (Puerto Rico), France's polygons in South America are French Guiana.
- Measured on 2026-10-18: the three above, and: `americas-north` 61.8 KB (13 provinces and territories, the United States and Greenland, 3 oceans, 6 seas, 4 lakes), `mexico-central` 28.6 KB (the
  Panama Canal), `caribbean` 23.0 KB (7 island states as dots), `south-america` 60.1 KB (French Guiana, the Andes, the Amazon), `europe-north` 58.0 KB, `europe-east` 64.3 KB (the Danube, the Carpathians),
  `balkans` 36.7 KB, `middle-east` 43.8 KB (the Bosporus, Hormuz), `arabia-north-africa` 86.2 KB (the Suez Canal, 3 dots), `africa-west` 36.2 KB, `africa-central` 59.3 KB (the Sahara, the Sahel, the Congo),
  `africa-east` 37.9 KB (the Nile, Lake Victoria), `africa-south` 30.6 KB (the Kalahari), `asia-south` 47.0 KB, `asia-central` 49.2 KB (the Caucasus, the Caspian), `asia-east` 90.7 KB (the Yangtze, the
  Mekong, the Taiwan Strait), `asia-islands` 64.5 KB (12 dots, the Strait of Malacca), `world-features` 142.8 KB (96 places: 7 continents, 5 oceans, 51 seas, 7 straits, 2 canals, 9 rivers, Lake Victoria,
  8 ranges, 5 deserts, the Sahel), and `us` 97.8 KB with its 84 cities: 1265 KB in all (measured before the one water rule, the Arctic Ocean of the Alaska inset and the 42 cities of the `world` map, which bring the whole to about 1280 KB) (the design's budget was about 600 KB for the first three; the whole is under 1.5 MB, which `tests/place-pure.mjs` holds). Each
  file is under 560 lines (V47 holds 800). A region of a wide window (`arabia-north-africa`, `africa-west`, `asia-central`) is 0.4 to 0.6 as tall as it is wide: at a phone's width it is read as panels.
- Measured on 2026-10-13: `world` 85.2 KB (298 rings, 32 places: 7 continents, 5 oceans, 20 regions), `us` 88.5 KB (343 rings, 82 places:
  50 states and DC, 4 regions, Canada and Mexico, 5 Great Lakes, 10 rivers, 3 coasts, 4 ranges, Pacific, Atlantic, Gulf of Mexico),
  `europe-west` 61.7 KB (132 rings, 49 places: 34 countries, 5 dots, 11 seas, the Strait of Gibraltar, the Atlantic, the Alps, the Pyrenees):
  235 KB in all (about 80 KB compressed), against the design's budget of about 600 KB. Each file is under 450 lines (V47 holds 800).
- `tests/maps-pure.mjs` holds the 18 regions and the cities to known facts: every place a part asks is on its map, a tap on a capital is inside its country, landlocked countries have no water and
  islands have a sea, one water rule (Ontario on the Great Lakes, New Brunswick on the Atlantic, Guatemala on the Caribbean, Morocco on the Mediterranean, Togo and Benin on the Gulf of Guinea, Alaska on the Arctic, Russia on the Arctic and Pacific, Uganda on Lake Victoria; Rwanda and Ethiopia landlocked), the whole world's neighbors (Russia's Norway, China, Mongolia and North Korea beyond the frame, no shape and no tap; Botswana and Zambia), the coast rule (not Greece on the Adriatic; Israel and Jordan on the Red Sea; the Lesser Antilles on the Atlantic; a made-up island), Quebec's name, the 42 cities of the `world` map (parts 31 and 32), dots are dots, Hormuz is found within the radius of its point, the Suez and Panama canals are found beside them and not in the desert, the cities are found and named as dots,
  and no `'auto'` is left in a file.
- `tests/place-pure.mjs` holds the data to known facts (Switzerland's neighbors and no water, Belgium's North Sea, Michigan's lakes,
  Nevada landlocked, a tap on each capital inside its country, the shore of California, New Jersey and Texas on the three coasts, the
  Strait of Gibraltar found within its radius); a change to the lists is checked by it and by V47.

**Coasts, straits and canals** (what right is for each, 3.7; decided 2026-10-13):
- **A coast is built** (`us`). It is the shore of some places along one water, worked out by the build from their raw outlines (the stretches of
  outline that no other place of the layer shares and that lie within `coast.eps` of the water's outline, `coastLines` in `topology.mjs`,
  `coast(...)` in `specs.mjs`) and stored as open lines of `kind: 'coast'`, one place for each coast: `west-coast` (California, Oregon, Washington
  on the Pacific), `east-coast` (Maine to Florida on the Atlantic) and `gulf-coast` (Florida to Texas on the Gulf of Mexico). It is scored like a
  river: right when the tap is within a band of the line, a band of 4% of the map's width (a coast is wide) divided by the zoom, on land or at
  sea. A coast is named on the labelled map, lit as a thick line in the feedback, never drawn on the blank map, and never what a wrong tap is
  named as ("You tapped: The Pacific Ocean"). The coast of a country on another map (West Africa's coast, "a port and its coast") is the same
  helper with that region's states or countries, one line in its list when the region is built; where a design means the countries along a coast,
  the countries are the places.
- **A strait is built** as a kind (`strait`), with data for Gibraltar (`europe-west`, `world-features`), the Bosporus and Hormuz (`middle-east`), Taiwan, Malacca and Makassar. It is water, drawn from Natural Earth's outline
  when lit, which for a narrow strait is slivers along its two shores; so it carries a point at the middle of the extent of its pieces, found
  within the radius of a dot (2% of the map's width, divided by the zoom), and a tap on land inside its outline is not the strait unless it is
  within that radius. Its dot is drawn only once the strait is lit. Natural Earth's marine layer also holds Singapore,
  Korea, Luzon, Hudson, Davis, the Straits of Florida, the Channel and the Mozambique Channel, each one `water(...)` entry in the list of the
  region that shows it. A strait with no outline in the data (Bering, Hormuz) is a place with no rings and a `point` given by hand (3.11), found within the radius, drawn as its lit dot.
  **Not built**: the Dardanelles (the 10 m outline is there; no part names it).
- **A canal is built** as a kind (`canal`, a line held within a band of 2% of the map's width, the radius of a dot, so a short line is still a
  target), held by tests on a made-up line and on the data: the Panama Canal (`mexico-central`, `world-features`) and the Suez Canal (`arabia-north-africa`, `world-features`), each one `line(...)` entry with
  `kind: 'canal'` from Natural Earth's rivers layer, not drawn on a blank map and drawn as a thick line once lit.

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
items (X23). Under each question missed in a drawn check (a mock interview), the lesson whose own check holds its topic is named
("To go over it again, open …", `homeLessonOf` in player.js; `FC.ENGINE` 16, 2026-10-22). Sung checks are `after-each`. A baseline and a spoken mock interview show nothing per item. A check's
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
   New numbers are new: a made question in a group, a check, a retest or the review never has the same numbers as one the learner
   already tried of that generator, nor as another made in the same list (`freshSeed` skips such seeds in order, so a run still draws
   the same; with no new one in 64 seeds it takes any unused seed). A place group is left as it is.
5. Every set and check holds the subject's `mix` (V76; for a check drawn from a place group, the mix of its split): an entry's number below 1 is a share of the items, 1 or more a
   count; `{ facet, equal: true }` needs every value in equal number among the items that carry the facet. V76 reads
   the items a set names (a made one n times); a drawn check is not read.
6. An exchange raises the pressure on a reply that holds off.

## 5. The record and the learner's private data

The record's parts keep these names (owner). Since 2026-10-13 they are kept in the learner's account (Cloud Firestore, `public/app/sync.js`, approved by the owner that day), with a copy on the phone that works offline; `pl:<s>:items` and the rest are the names the export file and the browser checks give them.

### 5.1 Keys

| Key | Holds |
|---|---|
| `pl:<s>:items` | **the only practice record**: `{ [itemId or genId or sing-<task> or genId\|placeId]: { tries: [Try] } }`, the last twelve tries per item in each context (a place of a place group, 3.5, is an item of its own: `g-europe\|france`) |
| `pl:<s>:notes` | the learner's private data for the subject (section 5.3) |
| `pl:<s>:seen` | `{ [lessonId]: { rev, at } }`: the revision last opened and the step reached; nothing else. A lesson opens at that step (the check's first screen too) while the check has not been taken, and at the why after it, or in another revision |
| `pl:log`, `pl:app`, `pl:recent` | sessions, "this confused me" reports, claims, and the export |

No other part is written (X5). Records of the old lessons are never read, and were not moved into the account.

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

In `pl:<s>:notes` only. Never scored against a truth and never shared: it is kept in the learner's own account, which
no other account can read (`firestore.rules`), and leaves it only in a file the learner saves. Built (`OWN_SLOTS` in `public/app/lessons/own.js`):
- `range: { low, high, set }` (Singing): measured, never typed.
- `sheet: { accounts: [{ id, name, type, institution?, owner?, balance, holdings: [{ name, value, kind?, expense?, company? }], fees, highest? }], [groupId]: record | null | [rows] }`
  (Wealth). The sheet form may carry `groups` beside its accounts (`{ id, label, fields, how?, many?, optional? }`: what you spend, the bills
  ahead, the employer match in one step or two, the tax rate and last year's bond payouts, the insurance limits, the mix chosen, income after work), kept at `sheet[groupId]` as a record, or with `many` a
  list of rows; a group saved wholly blank is `null` (when `optional`) or `[]`, so it is not asked again. An account field with `for: [accountType]`
  is shown and read only for those kinds (the bank or firm of a bank or brokerage account, whose name a bank account is in, the highest balance of an account outside the US). A fund's yearly cost is optional: left blank it adds nothing to the cost and the cost work names it. `limits` holds the thresholds the subject's lessons
  teach (Wealth: 3 and 6 months, 5 years, 10%, 5 points), which the work compares with. `actions: [{ id, what, where, when, done?, repeat? }]`. `triggers: { [id]: date }`,
  marked on the subject screen or at the step that waits, with no form.
- `plan: { cue, then, saved }` (Scams, Stats): two boxes of at most 80 characters, kept as "If <when>, I will <what>.",
  changeable and skippable. The words around it are the subject's own, on its form into the plan (`words: { title, how, saved, before }`:
  the step's title, how to write it, the line once saved, and the line that shows it again before a group that rehearses it and at the
  start of the subject's part of the review), since each subject's moment differs; V70 refuses a plan form without them, or words on
  another form (decided 2026-10-22, when Stats added its plan). `setup: { [fieldId]: day }`: things the learner does on their own phone, each "Done now" or
  "Not done".
- `business: { lines: [{ name, kind, revenue, cost }] }` (Strategy): the learner's own business, one line for each product, customer or way of
  selling (the form's `fields` are one line's, typed as many times as the business has lines; `kind` names the subject's list `lineKind`), with
  what it brought in and what it cost directly last year. A line left wholly blank is dropped; with none the form asks for one.
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
3. The app's arithmetic on what was typed: the step's `work` (`OWN_WORKS` in `public/app/lessons/own-work.js`, the works of lessons 7 to 12 in `own-work-later.js`), each a pure function of the
   stored sheet giving tables and lines, a line that calls for a look set apart: `cost` (each fund's value times its yearly cost over 100, the
   fees, the totals, in dollars first and as a share second), `list` (each account's share and what pays if the bank or firm fails; bank accounts added up by
   bank and by kind of ownership, one name against the FDIC limit and joint with one other against twice it, brokerage accounts by firm against SIPC's, the part over flagged), `cash` (the bills due within the limit's years put aside first, months of spending on the rest of the cash you can reach, too little or idle),
   `match` (the employer's money left each year, a match in two steps counted to where the last step ends, and a line to check vesting and a true-up), `placement` (bonds taxed every year while a 401(k) or IRA holds stocks, a Roth or HSA not counted, the tax on last year's bond payouts when the rate is typed, and what to read before a sale), `share` (one
   company across accounts, grouped by the company typed, against everything, with where to sell first), `drift` (the stock share of the invested accounts against the mix chosen, and the money to move; a fund not marked, or one that mixes
   by age beside other funds, leaves it not settled with no move; one that mixes by age alone needs nothing), `cover` (what a claim could reach, every account but a
   401(k) plus what else is owned less what is owed, never below zero, against the lower of the car and home liability limits plus an umbrella), `foreign` (the highest balances outside the US against the FBAR and Form 8938 lines; a TFSA, an RRSP,
   a fund held abroad), `heirs` (each account with what decides who gets it, and everything against the estate tax line looked up), `rate` (a year's spending plus the tax on withdrawals, less income after work,
   over the invested accounts, held unrounded against the starting rate looked up), `yearly` (every work above on one sheet: each part "look at it", "not settled" when
   the sheet lacks what it needs, "check by hand" where the sheet cannot settle it, or "nothing to change"; the spending rate only once income after work
   is typed). A work that lacks what it needs says so (`open`) and never prints "nothing to change". A work reads only the sheet, the subject's `limits`, its dated `refs`
   (parsed for their numbers) and what each account kind and fund kind means (`OWN_ACCOUNT`, `OWN_KIND`). When the sheet lacks a group the
   work needs, the step opens the sheet form on that group first. Then its warnings, and funds that add up to a different balance than typed. Where a
   line calls for a look (often a dollar move on the learner's own numbers), the work ends with one line saying it applies the rule's line to their numbers and is
   not advice (`SAY.workNotAdvice`).
   A step on the business (`{ own: 'business', model?, work: 'core' }`) runs the same way on the learner's lines: the lines while none are stored
   (or "I have no business to look at yet"), then the work `core` (each kind of line in a table of its own, what each line earns after its direct
   cost, largest first, its share of what the lines that make money earn together, a line that loses money flagged, and the fewest lines from the top
   that make more than half of it named as the core), then the change. Each work names the form it reads (`on`: `sheet` or `business`), and V70
   refuses a step that names a work of another form.
4. The sample's lines to find (`model`, its deciding lines marked).
5. The change: what, where and a day, or "I did it now". Each change has "Add to my calendar" and "Mark done". In a step with `repeat: 'year'`
   (the yearly check) each change is saved with `repeat: 'year'`, listed with "every year", and its calendar file repeats.
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
  by matching facets in a retest); a strand that is a place group (3.5) is asked on one place of it, the one the learner missed last
  time, else the one met longest ago, in a form it was not last asked in, and a place kept to one form by the check (`only`, 3.4) only
  in that form; else on an item held in reserve (one no lesson names) never tried; with none left,
  the least recently seen tried item returns and the repeat is logged. A strand of one item returns as itself.
- Subject by subject, each subject's part mixed in an order its run fixes; only questions, feedback after each, every
  miss asked again three items later until right. A subject's saved plan is shown once at the start of its part. Back
  leaves the review and records nothing; it is built again from the record next time (as built in `review.js`).
- A finished part is logged as `return` for its subject.

### 6.4 Retests

A check with `retest: n` comes back once, whole, n days after its first complete run, on new items of the same strands
and facet values, as its own block of the review with an intro, its pass rules and no warning. The tile counts its
items with the week's. A check with sung tries comes back the same way: each sung try is made again from its own task on a target no try of
that task has sung (`retestInstances`), the range exercise runs first if no range is stored, its results show after each try as
in the check (the intro says so), and "on the note" words its rules. Its `retest` is at least 1, so it is sung on a later day (V78).

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
  kept. Back is always there and keeps the place; a lesson put down at any step, the check's first screen included, opens there.
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

One vocabulary, used with the owner, in every plan and document, and in the app's own wording. The learner's
column is what the screen says; the plain-words rule (V50) keeps the machinery's words off the screen.

| Word | Means | The learner sees |
|---|---|---|
| **subject** | the whole thing on a tile: Psychology, Geography (never "module") | the subject's name |
| **goal** | the paragraph that says what you can do after the subject (the plan's first sentence is the `endResult`) | the end result sentence, which the subject screen opens on (section 7) |
| **topics** | the list under the paragraph: what the subject teaches; biases is a topic, each word on a words list is a topic | "Topic" on screen is what the review brings back |
| **part** | one piece of the end result, in order, covering some of the topics; the designer's cut of the topics into a sequence (`parts`) | a part's title |
| **lesson** | one sitting, serving one part, ending in that part's check | "lesson" |
| **check** | the test at the end of a lesson, and the real-world test at the end of the subject | "the check" |
| **item** | one thing you answer: an account, a message, a problem, a sung try | "question" ("try" when sung) |
| **asks** | what the owner asked for, in their words: the must-keep list of the plan | nothing; it lives in the plan |
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
  anything for V50 and V62 but is still held to V60. `endResult` and the parts' titles are exempt
  from V50 and V62 (section 3.2).
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
days"), `chorus`, `till`, `ledger`, `feed`, `labels`, `account`, `pressure`, `interview`, `atlas` ("Atlas of the isles", a region of three countries,
a dot and a sea made for the map block and the place ask). Review tests fix the weekday.

### 9.2 Validator rules (`tests/lessons/rules-index.mjs`)

| Rule | Checks | One of its seeded faults |
|---|---|---|
| V4 | No code or id in learner text (section 8) | a reason that shows an item's id |
| V36 | No praise or bare verdict opening feedback | a reason that opens "Correct." |
| V45 | Revisions are real: `rev` at least 1, one history entry with a date and a change per revision, `standard` from 2 to the current version. | a lesson at revision 2 with one history entry |
| V46 | The lock: a lesson's fingerprint covers the lesson, the items and generators it names (text, parameters, the source of `make`) and the reserve items of its check's strands; a subject's covers its record. A deployed change needs a new `rev` | content that differs from the lock |
| V47 | Every script is in `index.html` and `sw.js`'s `SHELL`, the lists are equal, and no file passes 800 lines | a file of 801 lines |
| V50 | No app word to avoid or machinery word in authored text | a reason that says "item" |
| V56 | No two lessons with one title | two lessons with one title |
| V58 | Held findings (`tests/lessons/held-findings.json`) only shrink: one that no longer fires must go, and none may be added since the last commit | a held finding that no longer fires |
| V60 | American English in every string | "colour" in a reason |
| V62 | No abstract or textbook word | "utilize" in a reason |
| V70 | Shape: every subject, lesson, step, set, item, block, ask, generator, form and pass rule matches section 3 exactly (example sounds directly on a teaching screen only, inside `AUDIO_LIMITS`, labels distinct); a step on the sheet names a work the app has, and the sheet holds the groups, fields, limits and refs that work reads, and only account and fund kinds the app knows; ids unique; every reference exists; `seconds` only where `timed`; what is not built is refused. A place group (3.5) is read against the map data (the region, each place on it, a form that is one of the four and has its words, a reason and spellings for each place, no place or spelling twice, a slip keyed by a place of the map) and every question it can make is read as an item (so its strand and its `form` facet exist); a check drawn from one (3.4) asks only forms the group asks, a split above zero, a number of each form the group can ask after `only`, and keeps only places the group has to forms they can be asked in; a lesson's reference to one names a form and a place it has and no more places than the form offers, and a set holding one takes no help | an ask of an unknown kind |
| V71 | Every lesson's `part` is a part of the subject record; every part has exactly one lesson once the subject is `complete`; only a `role: 'baseline'` lesson has no part; lessons are in part order | a part with no lesson in a complete subject |
| V72 | A check is its part's: no fixed item also in a set or the worked item, or with `recall` only items the sets asked, each once; a spoken check's every item has a `spoken` block; every pass rule says `right`, `wrong` or `slip`, has `max` only with a slip, names an ask, facet value or slip that exists, and needs no `min` above what it counts (for a check drawn from a place group: what its split asks of the forms the rule selects; support in a check is V79's) | a check item also in a set |
| V73 | Reading (the why, teaching screens and panels on them, at 200 words a minute) stays within `readingShare` of the lesson's time; a worked case is shown practice and counts as doing, at the same 200 words a minute; doing is `DOING_SECONDS` (choose, tap and place 15, number 60, text 30, order 25, sing 20, exchange 45, form 60, an own step 60, a drawn item 20; a place group's question by the form it is asked in) | a why padded past the share |
| V74 | Every ask can be scored and explained (a place group: every question it can make): a right option and a line or slip on each wrong one; a tap's right lines are lines of the item and among `deciding`; a place's slips are the subject's, and the map above it never has the right place (or a neighbor or the water of the place asked about) lit; a lit place named from memory is the one lit map, with no spoken block; a `tol`; an estimate before its exact answer; `accept` entries distinct, `count` within them; an item with a scored ask; `reason` on every item, `deciding` ids that exist; `has` exactly the panel's needs | a wrong option with no `then` |
| V75 | Generators: no range that gives one value; on 200 seeds, finite values inside `params`, every slot filled, every trap outside the answer's tolerance, a right option that shows the answer, the same seed the same item. A place group: on every (place, form) pair and 200 seeds the same seed the same question, the question is the pair the seed names, and a seed made for a pair names it | a trap that lands on the answer |
| V76 | Every set and check holds the subject's `mix` (a check drawn at random by strands is not read; one drawn from a place group holds the mix its split fixes) | a set with none of a kind the mix requires |
| V77 | Banks: each strand a check covers has three unseen items for its returns and one more per item of a retest, unless it has a generator or one item | a strand one item short |
| V78 | Singing: tasks and parameters inside `SING_PARAMS` and `SING_OPTIONS`; the warm-up first and once, never in a check; no line in a check; sung checks `after-each`; every target inside the range; a group that asks what you heard holds only questions with a note to judge and has no line | a hold of 9 seconds |
| V79 | Fading: a set with support has a later set of the same strand with less or none; no support in a check | a lesson whose last set has the panel |
| V81 | Private forms: no field for an account number, login, password or Social Security number, fund rows included; every `into` is a slot of section 5.3 | a field "Account number" |
| V82 | The failure (`danger.slip`) sits only on risky items, never on a real one, and can be made at least once | a real message whose wrong option is the failure |
| V83 | A timed set holds only choose, tap, order or exchange (a place group is none of them); a busy set is timed and each item opens on a banner and asks one choice | a busy set that is not timed |
| V84 | A subject that asks from a published list names it in `refs` (a link and the day looked up); a `text` ask marked `taught` answers from the subject's own lessons and needs none | questions from a published list and no source for it |

Every other rule id below V84 is retired and never reused.

### 9.3 Browser checks (`tests/e2e-checks.mjs` and the files it imports)

| Check | What | One of its seeded faults |
|---|---|---|
| X1 | Nothing moves on by itself | an item that moves on by itself |
| X2 | No feedback before the last ask is answered | the reason shown when one of two asks is answered |
| X3 | Every screen at every width from 360 to 1600 px: no sideways scroll, no cut text, plain words and American English as shown (owner's words left out) | an answer button wider than a phone |
| X5 | The stored keys are those of section 5.1 | a place saved under a key of its own |
| X8 | No sound, no sound system and no microphone request before a tap; example sounds play only on a tap, never ask for the microphone, and stop when the learner goes on | a sound system made when a sung item opens |
| X10 | The microphone: the constraints, one request per set, the refusals, the app never hears its own note | the microphone hears the app's own note |
| X11 | Only numbers are stored from singing | the readings of a try stored with its answer |
| X12 | Sung screens fit at 360 and 390 px, in plain words with no music word | a button on a sung item wider than a phone |
| X13 | `number`: tolerance in and out, a trap's line, the estimate first with no calculator, "disagree" in practice and never in a check | the disagree line shown in a check |
| X14 | `text` from memory: every matching rule, "name two", the box, "Not yet", every accepted answer shown, a claim and its return | a repeated answer counted twice for "name two" |
| X15 | `tap`: the named block's lines only, "Not given", two lines in any order, a third refused, a slip, a note, nothing marked before the answer, the marks with `shown`, nothing between check items | the right line marked before the answer |
| X16 | `sing`: known pitches fed as the microphone scored on and off, octave folding, holds timed, each melody note, every result word, the line only with `line`, under, on or over asked before the result where the group asks it and kept with the try, the range stored once, the microphone released; a slide into the note named and not on it, a group that holds its results showing none until its break screen, a check of stories and sung tries saying both | the line drawn in a check; a group that holds its results showing each; a slide into the note counted as on |
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
| X30 | Stats' lesson 1 walked end to end at 375 px, ending with the review two days later; then lessons 2 to 9 walked whole (typed sizes and changes, the six questions from memory, the plan skipped) and lesson 9's second check four weeks on, eight new questions of the same kinds | a slip of the pilot no longer named |
| X31 | The four article forms drawn at 360 and 390 px | the headline drawn under the story |
| X32 | A labelled post, the panel only where the help is, needs found or missing, pass rules by side, sides compared | the panel drawn in every set, not only where the help is on |
| X33 | Ideology's pilot walked end to end at 375 px | a slip of the pilot no longer named |
| X34 | The message forms friend, thread and note; a headed checklist | a thread's lines all drawn at the left, yours too |
| X35 | A line to write and an item of four asks | an item with a blank line to write counted wrong |
| X36 | Psychology's lesson 1, "The five questions", walked end to end at 375 px | a slip of lesson 1 no longer named, its worked story cut or moved, its asks reversed |
| X37 | The forms sms, email, popup, chat, call and banner | a link that can be followed |
| X38 | `order` and the busy task | the steps of an order offered in the right order |
| X39 | The plan and the own ways in | the plan kept under a key of its own |
| X40 | The baseline on the test subject | the baseline stored as a check |
| X41 | Scams' pilot walked at 375 px, ending with the review | the wrong habit no longer named in the pilot |
| X42 | Scams' baseline walked at 375 px | the failure no longer named in the baseline |
| X43 | The mock interview: a draw, its first screen, its result, the second a week on, read aloud, on new items | a second mock that draws what the first asked |
| X44 | The learner's own answers and date: the form, the stored shape, items reading them, the rounds before the date | going on before the answers are saved |
| X45 | Civics' pilot walked end to end at 375 px | the pilot's check needing 15 of 17 |
| X46 | The map block and the place ask on the test subject Atlas: the labelled map (names 12 pixels tall at every zoom, a tiny country's name set off its dot on a line, a map with a view opening on that part and its button going back to it, the flags with their names), a worked tap that says what is asked, a pinch and a drag that are not taps, the zoom buttons, a tap on a country with the slip named, a tap on a tiny country's circle named for it, water drawn in colors of its own, lit or not, a tap in the hole of a country, a dot found from a zoomed map with the zoom stored, land that is not the sea, a neighbor and its water, Landlocked right and wrong, a lit place named, nothing lit or marked in a check before its end, only numbers stored, the border of a country 3 to 1 or more against the country, 360 and 1200 px | a drag that counts as a tap |
| X47 | A group of places made into questions on the test subject Atlas, lesson 2: a group of four different places to tap and three countries by their flags, each filed under its place, a miss coming back as the same place, a group of three lit places named and two neighbors and their water, a check drawn from the group with its split fixed by form (2 tap, 1 name, 1 flag, 1 border), no place twice and the dot only as a tap, nothing shown or marked between its questions, the tries stored under the places with only their seeds, and the review two days on asking the group on the place missed in the check, in another form; a flag asked for 40 pixels or more each way with no name, and its feedback with the name beside it and the line that tells it apart; a lesson put down at a group and at the check opening there; 360 and 1200 px; and on Geography's lesson 16 at 390 x 844 (`tests/e2e-fit.mjs`): Landlocked and Next on the screen after the first tap of a neighbor and its water, the map still where it was at 360 px, the box of a lit place named on the screen, a tap a finger's width beside Luxembourg named Luxembourg, and the feedback of a neighbor and its water lighting and naming only the water the place touches and the water tapped | the draw ignoring its split |
| X52 | Strategy's built lessons on the Galaxy Z Fold (`tests/e2e-strategy.mjs`): each why, teaching screen (the value stick fits its screen), worked example opened to its answer, first question of each group, the step on the learner's own business and the check's first screen, at 344, 752 and 1440 px dark and 344 px light, in plain words with nothing sideways or cut off | the value stick drawn wider than the cover screen leaves room for |

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

The `map` block, the `place` ask and the place group (3.5, 3.7, 3.9, 3.11) are built for Geography and run in its pilot (lesson 16, western
Europe), and on the test subject Atlas (X46, X47).

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

Each subject has its pilot built, as `status: 'draft'`; every other lesson waits for the pilot's two reviews. No
subject is `complete`, so each part after the pilot shows "Not built yet".
- **Singing**: rebuilt to its plan of 2026-10-22 (`docs/subjects/singing/plan.md`): twelve parts in five units, all twelve lessons built (the range and
  the seven checks, Match a note, the note check with example sounds, a steady hold, steps and leaps, short tunes, then air and sound, ending on the
  tune test on two different days). Two topics of judging questions (`fit`, `landing`).
- **Math**: rebuilt 2026-10-22 (plan: `docs/subjects/math/plan.md`): fifteen parts in six units; lessons 1 to 8 built, every problem a
  generator in the way of thinking's steps (`MATH.problem`, `subjects/math/kit.js`: what is asked and given, a rough answer typed first,
  the kind and its picture, the exact answer and a look back), faded by `leave`. Not built: lessons 9 to 15; the 14-day retest belongs to
  lesson 15.
- **Wealth**: rebuilt 2026-10-22 to its plan (`docs/subjects/wealth/plan.md`): twelve parts in four units; lessons 1 to 6 built (the list
  and what protects it, money needed soon, what it costs (the pilot, now part 3), the match and the order of saving, taxes, one big bet),
  each ending on its own work on the learner's sheet; refs for 2026 (FDIC, SIPC, the 401(k), IRA and HSA limits, the loss limit, the FBAR
  and Form 8938 lines); lessons 7 to 12 built the same day (the mix and its drift, a loss you could not pay, accounts outside the US,
  beneficiary pages and papers, the spending rate, the whole yearly check whose change repeats every year), so the subject is `complete`.
  Not built: editing accounts outside a step.
- **Stats**: complete (2026-10-22, plan: `docs/subjects/stats/plan.md`): the baseline and lessons 1 to 9, each claim put to the
  standing questions (what it claims, the line or "Not given", the verdict) with the lesson's own between them (a size typed, what else
  could explain it, a chart's change); lesson 9 asks the six questions from memory, offers the plan, and its check comes back on new
  questions after 28 days. Tests: `tests/stats-lessons-pure.mjs`, `tests/stats-late-pure.mjs`, X30.
- **Ideology**: rebuilt 2026-10-17 on the owner's own course (plan: `docs/subjects/ideology/plan.md`): seven lessons, 1 to 6
  with 5b, each passage put to the five deciding questions in order (`ideoCase`, items-shape.js), then the family, named only on
  its signature answers (`IDEO_SIGNATURE`) or "too little to tell"; slips name the known traps (the direction check, methods for
  content, welfare for socialism, nationalism for fascism).
- **Psychology**: rebuilt 2026-10-18 (plan: `docs/subjects/psychology/plan.md`): seven lessons, each story put to the deciding
  questions in order (`psyCase`, items-shape.js: what is going on, one moment or a pattern), then the name, given only on its
  telltale signs (`PSY_SIGNATURE`) or "too little to tell", then the response written once per name (`PSY_ACT`); slips name the
  known traps (the situation skipped, a moment taken for a pattern, the order of act and story, one part of DARVO). The stories
  that show fear or control name the National Domestic Violence Hotline (US).
- **Scams**: lesson 0, the baseline (eight messages on 20 seconds, one call, one order), and lesson 3, act, check or
  leave (three pairs, then eight timed). Not built: lessons 1, 2, 4 to 6, the banner and busy task in a lesson, the plan
  and setup in a lesson, the four-week retest, the caller's voice.
- **Civics**: rebuilt 2026-10-22 to `docs/subjects/civics/plan.md`: all sixteen lessons built and live after their reviews (`complete: true`): the 128 questions answered
  from memory, the news stories (lessons 4 to 8), four history lessons with a timeline each (`order`) and stories that lean on the past (lesson 13),
  and the mock interview drawn from all 128 with its retest (lesson 16).
- **Geography**: parts 1 to 7b and 16 to 16b built (2026-10-17): the world, the United States region by region and mixed,
  western Europe and its flags. Every lesson opens with the way of thinking (the area, what touches it, the water), shows its
  names before any case, works a case in those steps and gives feedback in them (`area`, `cue`, place-gen.js). Not built:
  parts 8 to 15 and 17 to 33 (cities, capitals, the other regions, distances).
- **Version 2, 2026-10-12**: consolidated from version 1 (history-v1.md): sections 1 to 22 retired as history; 23 replaced by the build-subject skill; 24 and 25 absorbed into 6 and 3; 26.1 to 26.9 with the as-built decisions of 26.10 folded in. Its change in substance is the entry below.
- **2026-10-12, X6 and X7 retired** (9.3): the draft line is asserted by the pilot walks; cold start measured per
  subject (X7, an owner rule) is no longer a check.

- **2026-10-12, maps** (commits 6b7e3b7, 3d39bc0, 3283580 and the one that follows): the map data (`FC.map`, `public/maps/`, `npm run maps`),
  the `map` block, the `place` ask and its neighbor-and-water form, V70, V74 and V83 for them, X46, the test subject Atlas; a lit
  place named from memory needs no spoken block (V74, 3.7); an item's `figure` may be a map (3.9); `FC.ENGINE` is 15 and the service
  worker cache v23. The browser runner, which could not start on `main` (`withLimit` imported and never defined), is mended.

- **2026-10-13, place groups** (commits a58aead, ca9bef4, b9fa794, b62995b, 935860d and 698185a): a place generator (`places` in place of `params`
  and `make`, 3.5) makes a place in one of four forms from the map data; a check may draw from it with a fixed split by form, places drawn at
  random preferring those last asked in another form, and `only` (3.4); a lesson's reference and the review take places missed or met longest
  ago first (3.5, 6.3); a place of a group is an item of its own in the record, `<generator>|<place>` (5.1); V70 and V72 to V75 and V83 read
  groups and drawn checks by form (V76 reads a drawn check's mix from its split), with 25 seeded faults; X47 and the test subject Atlas's lesson 2; coasts (three on the United States map),
  the strait kind (Gibraltar) and the canal band, with the bands of a river, a canal and a coast (3.7, 3.11). The service worker cache is v24.

- **2026-10-13, the first stand-in review of Geography's pilot** (the commits that follow its review file): a map's names are set in pixels (12 tall at
  every zoom) and a microstate's name on a line from its dot (`lead` replaces `fs` in the map data); a `map` block may open on a `view` (a panel); water
  is drawn in water colors, lit or not; a tap on a microstate's circle is named for it; a worked place question shows what it asks; the `flags` block
  and a place's `flagLine` (3.5, 3.9: a flag is large, the feedback of a flag question shows it with its name and opens with the line that tells it
  apart); V73 counts the names a `flags` block prints; a lesson put down at the check opens at the check (5.1); X46 and X47 each have faults for these. The service worker cache is v26 (v27 below).

- **2026-10-13, the second stand-in review of Geography's pilot** (its fixes 1 to 4 and 6, the engine and the stylesheet alone): a neighbor and its water keeps Landlocked
  (in the row of the zoom buttons) and Next on a 390 x 844 screen, a map does not move when the line of help changes after the first tap, a lit place's box is on the screen,
  a ground place the size of a fingertip is held within 3% of the map's width (3.7), the border between countries is over 3 to 1, and the feedback of a neighbor and its water
  lights and names only the water the place touches and the water tapped (3.7); X46 and X47 (on Geography's lesson 16, `tests/e2e-fit.mjs`) each have faults for these.
  The service worker cache is v27.

- **2026-10-17, the design-record process removed**: the record kept in each subject's `design.md` (as JSON), the owner approvals with their fingerprints, the lists of what the owner asked, tried and opened, the holds on content, the stand-in entries, the two rules that read the record (one for its shape, one for the mirrors of its sentence and reading share), the check of the owner's word in the commit message (its hook and its step in the push workflow) and the record tools are gone. The parts are read from the subject record alone (V71), and `endResult` and `readingShare` are the subject record's own (V73 measures against `readingShare`). A lesson's `status` is set by its author once its learner and research reviews pass (section 2). The pre-commit hook and the push workflow still run the lesson tier and its seeded faults. The old `docs/subjects/*/design.md` files stay as history prose.

- **2026-10-22, the own step's work** (Wealth's plan, engine gaps 1 to 3): an own step on the sheet names its `work` (5.4, `own-work.js`): ten
  works, each a pure function of the sheet; the sheet's `groups` beside its accounts (what you spend, the bills ahead, the match, the
  insurance limits, the mix chosen, income after work), an account field kept to some kinds (`for`), and the form's `limits`; a group a work
  needs is asked in the step when it is not held yet, and a blank one is kept so it is not asked again; the subject screen lists the groups
  filled in. V70 reads a step's work against the sheet and V81 reads the groups' fields, each with seeded faults; `tests/own-pure.mjs` holds
  every work's arithmetic and Wealth's made questions against it. Money held with cents prints both digits. Wealth's list of moments has
  "I will stop working within a year" (`retire`) for the spending rate. `FC.ENGINE` is 16.

- **2026-10-22, Wealth's lessons 7 to 12** (plan lessons 7 to 12): the works of lessons 7 to 11 move to `own-work-later.js`, with `heirs` and
  `yearly` added; `cover` leaves a 401(k) out of what a claim could reach (ERISA's anti-alienation rule); `rate` reads the dated value `safeRate`
  (3.9% for 2026) in place of the sheet's 4% limit; a work may say it is not settled (`open`); an own step may carry `repeat: 'year'` (V70 refuses
  any other beat, or one off the sheet, with a seeded fault), and its changes repeat in the calendar. `tests/own-later-pure.mjs` holds each worked
  household typed in against its work and each made question against its rule.
- **2026-10-22, calculator buttons and shapes in a plan** (Math's plan, gaps G1 and G2): a `number` ask may add buttons to its calculator
  (`calc: ['pow' | 'sqrt' | 'mem']`, 3.7): the power, the square root, and M+, MR and MC, so a sum of products is added line by line (the
  pilot's review, its blocker); a `plan` figure draws circles and right triangles beside its rectangles, to one scale, with words for a side
  (3.9), and fits a tall plan to 300 units. V70 reads both (six seeded faults), X13 presses the new buttons and X20 measures the shapes (one
  seeded fault each more); `tests/number-pure.mjs` holds the calculator and the drawing. `FC.ENGINE` is 17 (the buttons' names).
  After Math's reviews: a `number` ask's `wild` names the slip of an answer outside half to double (3.7), decided before the traps, so a
  check's "none wild" counts every wild answer, a misplaced decimal point too; the feedback still prints the matching trap's line (a pure
  test, a seeded fault on X13, and V74's fault for an unknown slip).
  With Math's lessons 9 to 15: a rectangle in a `plan` may write words for its sides too (`say: { w, h }`, 3.9: a bed whose side is the
  question), and a `people` row's count may be a generator's slot ("{tp}"), drawn as the number it is filled with (V70 reads it on the made
  questions; two seeded faults).
- **2026-10-22, new numbers are new** (Math's reviews of lessons 9 to 15: a check repeated a practice question's numbers, so its answer had
  been seen): fresh seeds skip a question with the numbers of one already tried of that generator or already drawn for the same list
  (4.5). Pure tests in `tests/number-pure.mjs`, with a seeded fault (fresh seeds that ignore the numbers met) run there.
- **2026-10-22, angle buttons** (Math's plan, gap G3, the refresher unit): `calc: ['trig']` adds sin, cos and tan to the calculator, of the
  number shown in degrees, held like √; tan of 90° is an error (`CALC_TRIG` in `number.js`). Pure tests in `tests/number-pure.mjs`.
- **2026-10-22, Singing's engine gaps** (its plan, "Engine gaps"): a sung group may ask under, on or over before the result (`guess`, 3.3, 3.8;
  kept as `guess` in the try's numbers, never scored; V78); the example sounds (`tones`) are a block of a teaching screen in this engine (3.9;
  `tones.js`; V70; X8); the target of a sung question is a hum-like tone (3.8, `AUDIO_VOICE_HARMONICS`; checked by the pitch finder in
  `tests/audio-pure.mjs`); a melody may be slowed (`noteMs`, `SING_OPTIONS`; V78). Moving to another step of a lesson stops every sound.
  Singing's `readingShare` is 0.4 for its judging lessons. `FC.ENGINE` is 20 (the sung-note wording).

- **2026-10-22, after Singing's first reviews**: a single note's start and a hold's end are kept and judged (`start`, `end`; a slide into
  the note is not on it), results say which way and how far in half-steps, a check may hold written questions and sung tries with a rule
  for each by ask (3.4), and a sung group may hold its results to its end (`feedback: 'at-end'`, 3.3, 3.8; V78). X16 checks all three.
  Round 2: a hunt (`turns`), a hold's start, one reading of what was measured, a hold's guess shown back (3.8); X16 checks the hunt and
  the hold's answer.

- **2026-10-22, the retest of a check with sung tries** (Singing's plan: the tune test on two different days): a check with sung tries
  may carry `retest` (6.4); its sung tries are made again on new targets; V78 refuses a sung check's retest under one day. Singing's
  lesson 12 uses it (`retest: 7`). Checked in `tests/engine-pure.mjs`, with a seeded fault in `tests/lessons/controls-table.mjs`.

- **2026-10-23, the value stick** (Strategy's plan, engine gap 2): a `figure` of type `stick` (3.9) draws one sale's value created and its three
  shares (`stickHtml` in `doc-view.js`, worded in `SAY.stick*`); V70 reads its levels in order (`stickProblems`, two seeded faults), X20 measures
  its shares (one seeded fault), and `tests/number-pure.mjs` holds the drawing. A new field of the library, Business (`FC.FIELDS`). `FC.ENGINE` is 21.

- **2026-10-23, the learner's own business** (Strategy's plan, engine gap 1): a private form into `business` (5.3) and the work `core` on it
  (5.4, `ownWorkCore` in `own-work.js`; the lines' form in `own.js`, `own-view.js` and `own-run.js`); the subject screen lists the lines with the
  changes, their download and their delete. Each work names the form it reads (`on`). V70 reads the business form and its step (three seeded
  faults); `tests/own-pure.mjs` holds the form and the work, and X24 walks the step on Strategy's lesson 5 (a seeded fault: a line judged by its sales).
  X52 walks Strategy's lessons on the Fold's two screens and a desktop.

A future change to a rule is a dated entry here and the edit in place, in the section that holds the rule. Never a new
section that overrides older ones: this file always reads as one set of rules in force.
