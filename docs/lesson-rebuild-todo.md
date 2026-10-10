---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-09, checked against the lesson data, the live site and the tests (code at commit 08c5f41). Fieldcraft has 8 subjects and 48 units, all in the interactive format and all live at https://fieldcraft.web.app. Every unit is still a draft until you read it cold. How to continue: `docs/HANDOFF.md`.

## Live now
- [x] Psychology: 4 units, 16 specimens
- [x] Political Ideologies: 5 units, 30 specimens
- [x] Basic Math: 6 units (5 procedure), 35 specimens
- [x] Statistical Claims: 6 units, 23 specimens
- [x] Scams: 6 units (1 fact), 27 specimens
- [x] Wealth Preservation: 5 units, 27 specimens
- [x] US Civics: 10 units (5 fact), 20 specimens
- [x] Singing: 6 units (1 fact), 19 specimens, added 2026-10-08
- [x] The live site is identical to the code: all 713 files match, Singing included
- [x] All tests pass today: 1,154 data checks, 1,622,727 lesson checks across 48 units, 87 negative controls, 44,177 browser checks

## How it got here
- [x] 2026-10-05: every subject rebuilt in the interactive format, the old card format deleted, American English everywhere, every unit trimmed to a quick lesson
- [x] 2026-10-07: every key, unit and specimen rewritten in plain, concrete words
- [x] 2026-10-08: Singing built from nothing, one agent per unit, and deployed
- [x] 2026-10-09: the missing sound in Singing assessed (`docs/singing-audio.md`)

## Singing: sound
- [ ] A reference note and a pitch meter in the app, so the note check in Unit Four works inside the app (no sound files needed)
- [ ] Example sounds for singing flat, sharp and scooping, made by the app (no sound files needed)
- [ ] Recorded clips for the rest: pushing, cracking, squeezing, an airy tone, a nasal sound, a muffled sound. The recordings have to come from you or from licensed clips
- [ ] The screen before Unit One asks "Is this real, or is something wrong with it?". "Real" reads oddly for singing, and the wording is shared by every subject you act on

## Not built yet
- [ ] Typed reasons, the first-met-today accuracy figure, the author's under-taught-unit figure and the deploy-time list of draft units (E3, E10, E12, E15 in the standard)
- [ ] A gap the units say out loud: Civics skips the years 1877 to 1900

## Needs your decision
- [ ] Build the Singing sound now: the reference note, the pitch meter and the example sounds? Recommended: yes, one session (details in `docs/singing-audio.md`)
- [ ] The recorded clips: will you record them, or should I build the player with placeholders and the list of clips needed? Recommended: the list first
- [ ] Cold read: read any unit as a beginner and say what is unclear. Start with Psychology Unit One
