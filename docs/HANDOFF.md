# Handoff (updated 2026-10-05, for continuing in a new session or on another account)

## Committed and live (do not change without asking the owner)
- Commit 7f6ea00 on main was deployed to https://fieldcraft.web.app. The engine commit after it is not deployed.
- Seven subjects. Every unit is a card unit (`docs/lesson-pattern.md`) except Psychology Unit Two, the interactive unit on the new engine (`public/app/lessons`).

## Engine finished (2026-10-05, one commit on main, not deployed)
The screens pass and the unit-kinds pass were joined and reviewed in one commit: returns and returned sets, Practise again, the faulty-claims tile, the subject's opening map, the generated Reference, the full determination for fully rebuilt subjects, Mixed / Progress / Search for new-format units, Review these first, Back in drills, log export, gate, fact and procedure units, action subjects (plan card, baseline check, legitimate-case rule), the `separator` item. `npm test` = data checks + the lesson validator (`tests/lessons`, with a seeded-fault control for every rule) + the browser suite. `npm run lock` rewrites `tests/lessons.lock.json`. `docs/lesson-standard.md` sections 15 and 16 list what the build changed and what is still not built (E3's typed-reason setting, E10's returned-beside-new accuracy, E12's author figure, E15's deploy-time list).
Three validator findings on Psychology's `subject.blurb` are held in `tests/lessons/held-findings.json` (V58); they go with the gate rewrite.

## Decisions the owner has made
- Keep the new engine and finish it. Do not delete either lesson format.
- Ask short questions at real forks (deleting or replacing work, two versions, big spends). Say what you are about to do before doing it.
- The interactive format is the better teaching but about 5x the text per unit (Unit Two: 151 KB, 38 screens, about 75 practice cases, against 27 KB for a card unit).

## Still open (ask the owner)
1. Rebuild subjects in the new format? Suggested order: all of Psychology first (a partly written, never reviewed Fable draft of Unit One is in `docs/lesson-standard/psychology-u1/`), then judge, then the rest (Scams first as the first action subject, Math for procedure units, Civics for fact units, then Statistical Claims, Wealth, Political Ideologies).
2. Who writes the units: Sonnet with the checker verifying every unit (recommended), or Fable.
3. The cost dial is the number of practice cases per unit (76 now). Measured scale: the card rewrite of all seven subjects used 4.8M tokens, and the new format is about 5x the text per unit.

## Reference
`docs/lesson-pattern.md` (card format, tracked). Untracked: `docs/lesson-standard.md` (interactive format rules), `docs/learning-science.md`, `docs/comprehension-audit/`.

## Leftovers
Math has 8 names with no specimen; a few drill-only answer options are not in the key; British spellings in specimen texts; unused intro strings; the worklist page is stale; `.claude/launch.json` is a local preview helper pointing at a scratchpad.
