# Handoff: the Fieldcraft lessons

Written 2026-10-05, after every subject was rebuilt in the interactive format. To continue in a new session, say: "Read docs/HANDOFF.md in /Users/dim/Documents/PersonalLessons and continue the work from it."

## 1. What this is
Fieldcraft ("Pragmatic knowledge") is a static learning web app for the owner's own use: https://fieldcraft.web.app. Firebase project `fieldcraft-a795f`, site `fieldcraft`; deploy with `firebase deploy --only hosting --project fieldcraft-a795f`. GitHub `dimmonk/personal-lessons`, branch `main`. Plain HTML/CSS/JS in `public/`, no build step, installable PWA. Progress lives in localStorage under `pl:`; never change those key names. The reader is a beginner: every unit is written so someone with no background can follow it.

## 2. State
Every subject is in the interactive format of `docs/lesson-standard.md` (version 1, with the decisions of 2026-10-05 in section 17). No subject has old card-format data any more.

| Subject | Units | Kinds | Specimens |
|---|---|---|---|
| Psychology | 4 | gate, 3 branch | 16 |
| Political Ideologies | 5 | gate, 4 branch | 30 |
| Basic Math | 6 | gate, 5 procedure | 35 |
| Statistical Claims (action) | 6 | gate, 5 branch | 23 |
| Scams (action) | 6 | gate, 4 branch, 1 fact | 27 |
| Wealth Preservation (action) | 5 | gate, 4 branch | 27 |
| US Civics | 10 | gate, 4 branch, 5 fact | 20 |

All 42 units are `status: 'draft'`: none has had the cold read the standard requires before a unit is live (A14). The owner reading a unit cold is that check. Unit revisions start at 1 (Psychology Unit Two is at 2, the Psychology subject record at 3); raise `rev` whenever content changes after a deploy and run `npm run lock`.

`npm test` runs the data checks, about 1.6 million lesson checks, 86 negative controls and about 55,000 browser checks.

## 3. How the rebuild was done (and how to change a subject now)
- **The key first.** Each subject's `key.js` is the one vocabulary; every card prints its wording by token. Keys were rewritten on Opus to section 6 (K2) of the standard; the plan for each subject, with every key change and why, is `docs/rebuild/<subject>-plan.md`.
- **Units on Sonnet**, one agent per unit, copying the example units: Psychology Unit Two (branch), Psychology Unit One (gate), Scams Unit Six (fact), Math Unit Two (procedure). Each writer checked its unit with `node tests/validate-lessons.mjs` and read it through `node tools/learner-view/render-learner-view.mjs <subject> <unit>`, which writes `docs/learner-view/<subject>-<unit>.md`: the whole unit as a learner meets it, generated from the data.
- **Engine gaps were fixed at the root as real data hit them**, never worked around in a lesson. Section 17 of the standard lists every one.

## 4. Open
- **Cold read.** Read units as a beginner and report anything unclear; a report that a card is confusing is a defect (A14). Start with Psychology Unit One.
- **Currency.** Scams and Wealth Preservation are written in pounds (as the old lessons were), Statistical Claims in dollars, and Civics is US. Decide one, and the money in those units is rewritten.
- **The old card-format screens** (`public/app/*.js` outside `lessons/`, and `docs/lesson-pattern.md`) are no longer used by any subject. Deleting them removes a lesson format, so it waits for the owner.
- **Not built** (unchanged from before): E3 typed reasons, E10, E12, E15 (the deploy-time list of drafts and unverified sources). Several `refute` cards cite sources marked unverified in `build.wrongIdeas`.
- **Known content limits**, said in the units themselves: Math teaches completing the square with a positive middle term only; Civics skips 1877 to 1899 and every fact the old material did not support.

## 5. Where the old material is
The old card-format data (`public/subjects/<id>/standard0.js`) was deleted with the rebuild. Build notes in the units cite it by that name; it can be read in git at commit `afad69c` (for example `git show afad69c:public/subjects/math/standard0.js`). The comprehension audits of the old lessons are in `docs/comprehension-audit/`.

## 6. The owner's working rules
- Lesson design (units, keys, names, structure) is Claude's to decide; ask only at real forks: deleting or replacing work, big spends, things only the owner knows.
- Say what you are about to do before acting, and report afterwards.
- Never change things as a reaction to being scolded; answer the question asked.
- Use Sonnet for volume and code, Opus for keys and design, Fable rarely.
- No coloured single-side border accents; no browser `confirm()`/`alert()`/`prompt()`; build new objects instead of mutating; files under about 800 lines.
- Run `npm test` before saying anything is done. Deploy after green tests. Commit small, with plain messages and the attribution trailer.
