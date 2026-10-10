# Handoff: the Fieldcraft lessons

Written 2026-10-05, after every subject was rebuilt in the interactive format; status re-checked 2026-10-10 (section 2). The live status page is `docs/lesson-rebuild-todo.md`, shown at https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv: update both whenever an item moves. To continue in a new session, say: "Read docs/HANDOFF.md in /Users/dim/Documents/PersonalLessons and continue the work from it."

## 1. What this is
Fieldcraft ("Pragmatic knowledge") is a static learning web app for the owner's own use: https://fieldcraft.web.app. Firebase project `fieldcraft-a795f`, site `fieldcraft`; deploy with `firebase deploy --only hosting --project fieldcraft-a795f`. GitHub `dimmonk/personal-lessons`, branch `main`. Plain HTML/CSS/JS in `public/`, no build step, installable PWA. Progress lives in localStorage under `pl:`; never change those key names. The reader is a beginner: every unit is written so someone with no background can follow it.

## 2. State
Every subject is in the interactive format of `docs/lesson-standard.md` (version 1, with the decisions of 2026-10-05 in sections 17 and 18). The old card format is gone: no data, no screens, one engine (`public/app/lessons/*.js`).

| Subject | Units | Kinds | Specimens |
|---|---|---|---|
| Psychology | 4 | gate, 3 branch | 16 |
| Political Ideologies | 5 | gate, 4 branch | 30 |
| Basic Math | 6 | gate, 5 procedure | 35 |
| Statistical Claims (action) | 6 | gate, 5 branch | 23 |
| Scams (action) | 6 | gate, 4 branch, 1 fact | 27 |
| Wealth Preservation (action) | 5 | gate, 4 branch | 27 |
| US Civics | 10 | gate, 4 branch, 5 fact | 20 |
| Singing (action) | 6 | gate, 4 branch, 1 fact | 19 |

**Checked 2026-10-10** (commit 9f28326, tree clean, in step with GitHub). The lesson data holds 8 subjects, 48 units, 1,203 cards, 1,810 cases, 197 specimens and 155 names, and `tests/lessons.lock.json` and `docs/learner-view/` hold all 48 units. Every file on https://fieldcraft.web.app is identical to `public/` (719 files, service worker cache `fieldcraft-v11`), Singing included, and the live Unit Four carries the note tool and the example sounds. On the live site, before any tap there is no sound system, no sound and no microphone request; a tap on a note makes one sound; only "Start the microphone" asks for the microphone. `npm test` passes in full: 1,239 data checks, 579 sound checks, 1,624,031 lesson checks across 48 units, 110 negative controls and 44,272 browser checks.

All 48 units are `status: 'draft'`: none has had the cold read the standard requires before a unit is live (A14). The owner reading a unit cold is that check. Revisions as of 2026-10-09: the seven older subjects' units are at rev 4 to 6 (most at 5; Psychology Unit Two at 6) and their subject records at rev 4 (Psychology at 6); Singing's units are at rev 1, except Unit Four at rev 2 (the sound), and its subject record is at rev 1. Raise `rev` whenever content changes after a deploy and run `npm run lock`.

**The weekly review (2026-10-10, standard section 24).** "Due today" and the Mixed drill are gone. The Review tab and the library tile "This week's review" hold every name and fact the schedule (E9, unchanged) makes due by Sunday, in every subject, run one subject at a time; tries are stored with `context: 'review'`, and earlier `return` and `mixed` tries still count. Code: `public/app/lessons/review.js`, `reviewItems` in `records.js`. Browser checks: `tests/e2e-weekly.mjs`. Service worker cache `fieldcraft-v13`.

**Plain words.** The standard's names for the lesson machinery ("key", "route", "gate", "branch", "specimen", "determination", "ledger") are never shown to the learner: one list, `tests/plain-words.mjs`, is checked by the validator (V50) on every unit, key line and subject note, and by the browser tests on every screen as shown. What to say instead is in the standard, K9. This came from the owner's first cold read.

**Quick lessons (2026-10-05, standard section 19).** The first rebuild read like a course for a specialist. Every unit was then trimmed, cut not rewritten, to what a beginner needs to explain and use each idea after one read: a real example first, an answer before the reason, quick questions with an explanation each, and questions coming back on later days. There are no word counts or targets; `node tools/measure.mjs` sizes units for information only. The engine's own wording was cut the same way (`FC.ENGINE` 3): feedback is right or wrong, the reason, and after a miss one line; no machinery sentences. The brief the trim agents followed is the method for any future trim: section 19 plus "salvage, not rewrite".

**Plain, concrete writing (2026-10-07, standard section 20).** Every key, subject note, unit and specimen file was rewritten to the standard the owner approved on the TMV coach course:
- each card leads with a real story, then the idea;
- "How to spot it" (and "What to do") are numbered steps: a bold action and one line of why;
- names are plain and short (Psychology: "What are you looking at?" with "A choice and its reasons", "Something done to someone", "A lifelong pattern", "Just a one-off");
- feedback is at most two sentences (V63);
- abstract and textbook words are banned in every subject (`ABSTRACT` in `tests/plain-words.mjs`, V62 and the browser tests), next to each key's own `avoid` list;
- the learner's word for an example is "story" ("problem" in Math, from `subject.example`).

The method: the subject's key first (one agent per subject), then one agent per unit, with Psychology Unit One as the approved example. The bar is the owner's read: a card that takes a second read is a defect.

`npm test` runs the data checks, the sound checks (`tests/audio-pure.mjs`), about 1.6 million lesson checks, 110 negative controls and the browser checks on every unit.

**Singing (2026-10-08).** A new subject for someone who sings for fun, built from nothing to the standard: the key and the plan (`docs/rebuild/singing-plan.md`) written first, then the six units on Sonnet, one agent per unit, with Scams Units One, Two and Six as the examples. The first question is "What bothers you about it?" with five kinds, one of them nothing wrong (the voice is just not the record's); four branches of one question each (the top notes, the air, the note, the sound of the words), each ending in a name for the voice doing fine as well as names for what went wrong; and a fact unit on looking after the voice. Nineteen names, nineteen specimens, a baseline of six stories. One thing the build settled: **a line of the key (`why`, `when`, `plain`, `needs`, `means`) is plain text and carries no token.** The app prints those lines escaped (`public/app/lessons/cards.js`, `ask.js`) and no subject's key uses a token in them, so a key line names a term in ordinary words; the validator's allowance in V6 for a term used "in the key" is dormant. Every unit starts at `rev: 1`, `status: 'draft'`: the owner's cold read is what remains. **Sound (2026-10-09):** Unit Four is at `rev: 2` and carries sound: a note tool on the note-check card (pick a note, hear it, sing it; the app listens through the microphone and says under, on or over in the key's own words) and example sounds on five cards (a match, a note a shade under, a shade over, a slide up into the note, a voice hunting for it), all made by the app with no sound files and nothing recorded or sent. The rule for sound in any subject is section 21 of `docs/lesson-standard.md` (validator rules V64 to V68 in `tests/lessons/rules-audio.mjs`); what is built, what is measured and what is left is `docs/singing-audio.md`.

## 3. How the rebuild was done (and how to change a subject now)
- **The key first.** Each subject's `key.js` is the one vocabulary; every card prints its wording by token. Keys were rewritten on Opus to section 6 (K2) of the standard; the plan for each subject, with every key change and why, is `docs/rebuild/<subject>-plan.md`.
- **Units on Sonnet**, one agent per unit, copying the example units: Psychology Unit Two (branch), Psychology Unit One (gate), Scams Unit Six (fact), Math Unit Two (procedure). Each writer checked its unit with `node tests/validate-lessons.mjs` and read it through `node tools/learner-view/render-learner-view.mjs <subject> <unit>`, which writes `docs/learner-view/<subject>-<unit>.md`: the whole unit as a learner meets it, generated from the data.
- **Engine gaps were fixed at the root as real data hit them**, never worked around in a lesson. Section 17 of the standard lists every one.

## 4. Open
- **Sound for Singing: recorded clips (2026-10-09).** The sounds the app can make are built (`docs/singing-audio.md`). What it cannot make is the sound of a real voice pushing, cracking, squeezing, airy, nasal, muffled or mumbled: those names are still taught in words. The list of clips to record, with file names, what to sing, how it should sound, the paired good version and which card each sits on, is `docs/singing-clips.md`; the clips have to come from the owner or someone who agrees, never a real singer's recording without a license. Then a `clip` kind is built to the same rules as the other sounds. Also open: the example sounds and the note tool have not yet been heard on a real phone (`docs/singing-audio.md`, "Only a person with a phone can check").
- **Done: the baseline question (2026-10-10).** The screen before an action subject's first unit asked "Is this real, or is something wrong with it?", words written for Scams that made no sense for Singing. It now asks "Is something wrong here, or is it fine?" in every action subject, with "It is fine" and "Something is wrong" as the answers (standard section 22, `FC.ENGINE` 5; no unit changed).
- **Cold read.** Read units as a beginner and report anything unclear; a report that a card is confusing is a defect (A14). Start with Psychology Unit One.
- **Done: American English.** The owner is Canadian and moving to the United States: every subject is in dollars, with US rules, accounts and institutions (IRS, 401(k), FTC) and US spelling. `tests/american.mjs` lists British forms; V60 and the browser tests keep them out, case stories included.
- **Not built** (unchanged from before): E3 typed reasons, E10, E12, E15 (the deploy-time list of draft units). There are no `refute` cards and no `build.wrongIdeas` entries left in any unit (they were cut in the quick-lesson trim; checked 2026-10-09), so there are no unverified sources to list.
- **Known content limit**, said in the unit itself: Civics skips the years 1877 to 1900 and every fact the old material did not support. (An earlier version of this line also named a Math limit on completing the square; that wording is not in the Math units now, so it was removed on 2026-10-09.)

## 5. Where the old material is
The old card-format data (`public/subjects/<id>/standard0.js`) was deleted with the rebuild, and on 2026-10-05 so were the old card-format screens, their tests and their written pattern (standard section 18). Only the migration of old progress remains (E8), because progress saved under the old lessons can still be in a browser. Build notes in the units cite it by that name; it can be read in git at commit `afad69c` (for example `git show afad69c:public/subjects/math/standard0.js`). The comprehension audits of the old lessons are in `docs/comprehension-audit/`.

## 6. The owner's working rules
- Lesson design (units, keys, names, structure) is Claude's to decide; ask only at real forks: deleting or replacing work, big spends, things only the owner knows.
- Say what you are about to do before acting, and report afterwards.
- Never change things as a reaction to being scolded; answer the question asked.
- Use Sonnet for volume and code, Opus for keys and design, Fable rarely.
- No coloured single-side border accents; no browser `confirm()`/`alert()`/`prompt()`; build new objects instead of mutating; files under about 800 lines.
- Run `npm test` before saying anything is done. Deploy after green tests. Commit small, with plain messages and the attribution trailer.
