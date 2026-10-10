# Singing: sound, notes and audio examples (built 2026-10-09; recorded clips still open)

Written 2026-10-09, the day after the Singing subject shipped (commits `8995c05` and `7180403`, live at https://fieldcraft.web.app). To continue in a new session, say: "Read docs/HANDOFF.md and docs/singing-audio.md in /Users/dim/Documents/PersonalLessons and continue from what is left at the end."

## The gap, and what closed it

Nothing in the app made a sound. The owner asked on 2026-10-09: "is there any sound, notes, audio examples? isn't this part super important for this type of lesson?" The answer was no, and it was a real gap for a singing subject. The rule for sound is section 21 of `docs/lesson-standard.md`; this page says what is built and what is left.

## What is built

A card may carry one optional `audio` block, on `term`, `meet` and `question` cards only (never on a card that waits for an answer, because the sound would give the answer away). There are two kinds. No sound files are used: the app makes every sound itself, so it works offline.

**Example sounds (`tones`).** A few buttons, each playing a short sound made by the app. The buttons are headed "Hear it". A sentence above them (`says`) tells the learner what to listen for, and the learner view prints that sentence in place of the sound.

**The note tool (`notecheck`).** Headed "Try it". The learner picks a note and hears it, then sings it. The app listens through the microphone and says whether they are under the note, on it or over it, in the words the subject's own question already uses ("A shade under the song's note", "On the song's note", "A shade over the song's note"), with a needle that moves from under through on to over.

### Where each is used in Singing Unit Four (rev 2)

| Card | Kind | What it plays or does |
|---|---|---|
| `term-notecheck` (the note check) | the note tool | Pick a note, hear it, sing it. The note you pick stands in for the song's note. One added sentence on the card says it does the same job as a piano app |
| `meet-onnote` (On the note) | example sound | Two notes that start together and sound like one steady note: what a match sounds like |
| `meet-flat` (Singing flat) | example sound | The song's note, and beside it a second note that starts a shade low. The two wobble while they are apart, and the wobble fades as the second slides up and matches |
| `meet-sharp` (Singing sharp) | example sound | The same, with the second note a shade high, sliding down |
| `meet-scooping` (Scooping) | two example sounds | One where each note starts underneath and slides up, so it arrives late; one where each note lands right on it |
| `meet-guessing` (Guessing the note) | example sound | A voice that does not know its note, moving up and down until it finds it |

Each button is labeled with the key's own answer for what it plays, so the words on a button, in the question and in the drill are the same words. Nothing else in the unit changed. The learner view is `docs/learner-view/singing-u4.md`.

### How the note tool works, in plain words

1. The learner taps a note. The app plays it for about a second and a half and remembers it as the note to sing.
2. The learner taps "Start the microphone". This is the only thing that ever asks for the microphone, and only when tapped.
3. The app listens to the sound from the microphone and works out how high the sung note is, with a standard method for finding the pitch of a voice (the McLeod method), between 70 and 1100 Hz. It only counts a reading when the sound is steady and clear enough, and it judges by the middle of the last five readings, so one wobble does not flicker the answer.
4. The learner can sing in any octave: the tool measures to the nearest octave of the note picked, so a man and a woman can both sing along with the same note.
5. The tool says "on" within 30 cents of the note (a cent is a hundredth of a half-step, so 30 is a shade), "under" below that and "over" above it. The needle is full over at 100 cents. These numbers are named constants in one file, `public/app/lessons/audio-notes.js`.
6. While the app's own note plays, and for a quarter second after, the microphone is ignored, so the tool never hears itself.
7. If the microphone is refused or missing, one plain line says so and the notes still play.

**What it never stores or sends.** The sound from the microphone is looked at on the device and thrown away. It is never recorded, saved or sent anywhere, and a line on the tool says so. Nothing from the tool is written to `localStorage`, scored, counted in progress or logged. Every sound stops, and the microphone goes off, on any repaint, Back, Next, a jump in the card list, leaving the unit, closing a card sheet, and the page being hidden. Sound starts only on a tap: no sound system exists, and nothing sounds, when a card opens.

## What has been measured, and what only a person with a phone can check

**Measured (run on 2026-10-09).**
- The lesson side: `node tests/validate-lessons.mjs` (the rules V64 to V68 and every older rule on the data) and `node tests/lessons/negative-controls.mjs` (a seeded fault for each new rule, and for each prose check on `says` and the button labels: each turns exactly its own rule red). The numbers in the Unit Four sounds are checked against the app's own limits.
- The pitch finder and the verdict, on made-up signals: `node tests/audio-pure.mjs` (579 checks and 9 seeded faults, each turning its own group red). This proves the arithmetic, not a real voice.
- The browser checks of section 21 item 9 (X8 to X12: nothing sounds and no microphone is requested before a tap; a tap plays the notes the data names; a fed-in note is reported under, on or over and an octave away still counts; nothing is stored; no overflow at 360 and 390 px) belong to `npm test`. Whether they have run green is recorded in `docs/HANDOFF.md`, not in this page.
- How big the wobble is: a second note 30 cents off a D beats against it about five times a second, which is the slow wobble the two cards describe. This is arithmetic, not listening.

**Only a person with a phone can check these.**
- That each example sound really sounds the way its `says` line describes: the wobble is easy to hear, the slide is clear, the match sounds like one note, the hunt sounds like searching. They were designed from numbers and have not been heard by the owner.
- The note tool with a real voice in a real room: a phone microphone's noise cancelling, a speaker that bleeds into the microphone, a quiet voice, a croaky one. The octave rule and the steadiness test are the parts most likely to need tuning.
- The microphone permission prompt on a real phone, in the installed app (offline) and in the browser, on iPhone and on Android.
- Volume: the sounds are meant to be soft, and what is soft on a laptop speaker may be loud in earbuds.
- Whether the first card of Unit Four reads well with the tool on it. The tool sits on the note-check card, ahead of the cards that teach the names, so it shows the key's wording ("A shade under the song's note") before the meet cards teach it (section 21, "What the build settled", item 5). If that reads badly cold, the tool moves to a later card.

## What is left

1. **Recorded clips of a real voice.** Pushing, cracking, squeezing, an airy tone, a nasal sound, a muffled sound and the like cannot be made by the app. The list of what to record, with file names, what to sing, how it should sound, its paired good version, how long, and which card it sits on, is `docs/singing-clips.md`. They need to come from the owner or someone who agrees, never a real singer's recording without a license. When the clips exist a `clip` kind is built to the same rules as the other sounds (plays only on a tap, nothing recorded or sent, the learner view prints its `says` line, and the offline list names every file; the check that compares `index.html`, `sw.js` and the files on disk (V47) is extended to audio files).
2. **A standalone practice screen** is a possible next: a page, outside any unit, where the learner picks any note and sings against it, using the same tool. It is not built and nothing needs it yet; the question is whether the owner uses the tool in the unit enough to want it on its own.
3. **The baseline wording.** The screen before Unit One asks "Is this real, or is something wrong with it?". That wording is the app's own (lesson standard E21) and is shared by every action subject; for singing, "real" reads oddly. Changing it is an engine and standard change, left for the owner's call.
4. **The cold read.** All six Singing units are drafts (`status: 'draft'`) until the owner reads them cold, like every other unit. Unit Four is at `rev: 2` for the sound.

## Not to forget

- The method used to build the subject, and the one convention it settled (key lines carry no tokens), are in `docs/HANDOFF.md` and `docs/rebuild/singing-plan.md`.
- The rule for sound in any subject (what a block is, where it sits, the note tool, the validator rules V64 to V68, the browser checks X8 to X12) is section 21 of `docs/lesson-standard.md`, with the list of what the build settled at its end.
