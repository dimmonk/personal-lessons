---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-10, checked against the lesson data, the live site and the tests (code at commit 9f28326). Fieldcraft has 8 subjects and 48 units, all in the interactive format and all live at https://fieldcraft.web.app. Every unit is still a draft until you read it cold. How to continue: `docs/HANDOFF.md`.

## Live now
- [x] Psychology: 4 units, 16 specimens
- [x] Political Ideologies: 5 units, 30 specimens
- [x] Basic Math: 6 units (5 procedure), 35 specimens
- [x] Statistical Claims: 6 units, 23 specimens
- [x] Scams: 6 units (1 fact), 27 specimens
- [x] Wealth Preservation: 5 units, 27 specimens
- [x] US Civics: 10 units (5 fact), 20 specimens
- [x] Singing: 6 units (1 fact), 19 specimens, added 2026-10-08
- [x] The live site is identical to the code: all 719 files match, Singing included
- [x] All tests pass today: 1,239 data checks, 579 sound checks, 1,624,031 lesson checks across 48 units, 110 negative controls, 44,272 browser checks
- [x] Sound is live in Singing Unit Four: the note tool and five example sounds. Checked on the live site: before any tap nothing sounds and the microphone is not asked for

## How it got here
- [x] 2026-10-05: every subject rebuilt in the interactive format, the old card format deleted, American English everywhere, every unit trimmed to a quick lesson
- [x] 2026-10-07: every key, unit and specimen rewritten in plain, concrete words
- [x] 2026-10-08: Singing built from nothing, one agent per unit, and deployed
- [x] 2026-10-09: the missing sound in Singing assessed, then built: the note tool and five example sounds in Unit Four (`docs/singing-audio.md`), the rule in section 21 of the standard

## Singing: sound
- [x] A reference note and a pitch meter in the app, so the note check in Unit Four works inside the app (no sound files needed): the note tool on the note-check card, 2026-10-09
- [x] Example sounds for singing flat, sharp and scooping, made by the app (no sound files needed), and for a match and for hunting: five cards of Unit Four, 2026-10-09
- [x] The list of clips to record, written: `docs/singing-clips.md`
- [ ] Recorded clips for the rest: pushing, cracking, squeezing, an airy tone, a nasal sound, a muffled sound. The recordings have to come from you or from licensed clips
- [x] The screen before Unit One now asks "Is something wrong here, or is it fine?", with "It is fine" and "Something is wrong" as the answers, in every subject you act on. It used to say "real", words that only made sense for Scams (2026-10-10)

## Not built yet
- [ ] Typed reasons, the first-met-today accuracy figure, the author's under-taught-unit figure and the deploy-time list of draft units (E3, E10, E12, E15 in the standard)
- [ ] A gap the units say out loud: Civics skips the years 1877 to 1900

## Needs your decision
- [ ] Try the note tool and the example sounds on your phone and tell me what sounds or reads wrong (`docs/singing-audio.md` says what to listen for)
- [ ] The recorded clips: will you record them? The list is `docs/singing-clips.md`; the player is built when the files exist
- [ ] Cold read: read any unit as a beginner and say what is unclear. Start with Psychology Unit One
