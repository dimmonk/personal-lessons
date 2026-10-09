# Singing: sound, notes and audio examples (open, 2026-10-09)

Written 2026-10-09, the day after the Singing subject shipped (commits `8995c05` and `7180403`, live at https://fieldcraft.web.app). To continue in a new session, say: "Read docs/HANDOFF.md and docs/singing-audio.md in /Users/dim/Documents/PersonalLessons and continue from the questions at the end."

## The gap

Nothing in the app makes a sound. The Singing subject is text plus the learner's own voice: each unit tells the learner what to listen for in a line they sing, and for the note check (Unit Four, term `notecheck`) it sends them to a piano app or the recording. The owner's question on 2026-10-09: "is there any sound, notes, audio examples? isn't this part super important for this type of lesson?" The answer is no, and it is a real gap for a singing subject.

## What would close it, in order of value and cost

1. **A reference note and a pitch meter in the app.** The browser can play a note (Web Audio API: an oscillator) and listen to the microphone (`getUserMedia` plus a pitch estimate from the waveform, autocorrelation is enough). No files, no server, works offline, and the microphone audio never leaves the device. Unit Four's note check would then work inside the unit: tap to hear the song's note, sing it, see whether you are under, over or on it. Biggest win, and buildable without any asset.
2. **Synthesized examples for the note unit.** A tone that sits a shade under, a shade over, or slides up into the note demonstrates flat, sharp and scooping well enough, because those are only about pitch. Also no files. Candidates: the meet cards of `flat`, `sharp` and `scooping` in `public/subjects/singing/u4.cards-*.js`, and the term card for the note check.
3. **Recorded examples for everything else.** Pushing, cracking, squeezing, an airy tone, nasal and muffled cannot be faked with a synthesizer. They need short clips of a real voice, a few seconds each: the same line sung two ways where possible (a light top and a shouted top; a clean start and an airy one; an "ah" with the nose open and pinched). The engine side (player, data field, offline cache, tests) can be built with placeholders; the recordings have to come from the owner, someone they know, or licensed clips. The app must not ship a real singer's recording without a license.

## What the engine change is

The app is plain HTML, CSS and classic scripts in `public/`, no build step, installable offline (service worker `public/sw.js` with a `SHELL` list). Everything a learner reads is data registered through `FC.*` and checked by the validator in `tests/lessons/`. Adding audio means:

- **Data**: one new optional field on a card or a story, for example `audio: { kind: 'tone', notes: [...] }` for a synthesized demonstration, `audio: { kind: 'note', hz }` for a reference note with the pitch meter, `audio: { kind: 'clip', src, says }` for a recording. The shape goes into `tests/lessons/shapes.mjs` (V0 refuses unknown fields today), with `says` as the plain-words line printed beside the player so the learner view and the validator can read it.
- **Engine**: a small player module under `public/app/lessons/` (a play button; Web Audio for tones and the reference note; an `<audio>` element for clips; the pitch meter as its own screen element with a microphone permission prompt, on tap only, never automatic). Rendered by `cards.js` where a card has `audio`, and by `ask.js` where a story has it. The standard's rules still hold: no timers, no auto-advance (X1), nothing shown before a prompt is answered (X2).
- **Files**: clips live under `public/subjects/singing/audio/` and must be listed in `sw.js`'s `SHELL` for offline use; V47 compares `index.html`, `SHELL` and disk for scripts only, so clips need their own listing check or an extension of V47.
- **Tests**: a browser check that a player renders, plays on tap and never autoplays; a unit check for the shape; the learner view (`tools/learner-view/render-cards.mjs`) prints the `says` line in place of the sound.
- **Standard**: a short section in `docs/lesson-standard.md` (a new revision entry) saying what an audio field is and when a card gets one, and `FC.ENGINE` goes up if the app's own wording changes.

## Two questions, with a recommendation

1. Build items 1 and 2 now, the reference note, the pitch meter and the synthesized pitch examples? Recommendation: yes. One session, engine plus Unit Four's cards, tests, deploy.
2. For the recorded examples, will the owner record them, or should the player be built with placeholders and a list of the clips needed, each a few seconds, so the engine is ready when the clips exist? Recommendation: the list first.

## Not to forget

- The baseline screen before Unit One asks "Is this real, or is something wrong with it?" That wording is the app's own (lesson standard E21) and is shared by every action subject; for singing, "real" reads oddly. Changing it is an engine and standard change, left for the owner's call.
- All six Singing units are drafts (`status: 'draft'`, `rev: 1`) until the owner reads them cold, like every other unit.
- The method used to build the subject, and the one convention it settled (key lines carry no tokens), are in `docs/HANDOFF.md` and `docs/rebuild/singing-plan.md`.
