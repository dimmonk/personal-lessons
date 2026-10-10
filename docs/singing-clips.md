# Singing: the clips to record

Written 2026-10-09. The app makes the sounds that are only about the note (a note a shade under, a shade over, a slide up into it, a voice hunting for it, a match) and it listens to you sing a note: that is built, see `docs/singing-audio.md`. It cannot make the sound of a voice that is pushing, cracking, squeezing, airy, nasal, muffled or mumbled, because those are things a throat and a mouth do, not notes. Those names are taught in words only until real voice clips exist. This is the list of the clips to record.

A clip is one short recording of a real voice, a few seconds long. Most come in pairs: the same line sung two ways, so the learner hears the difference and not a different singer. The "good" version of each pair is the sound the unit calls fine (a light, easy top; an open sound).

## Recording notes

- **A quiet room, a phone voice memo.** Nothing else is needed. Hold the phone about a hand's width from the mouth, a little to one side, so breath does not pop on it.
- **The same line, sung both ways, in one sitting**, with the same singer, the same room and the same phone, so the only difference is the one the card teaches. Say the name of the pair into the memo before each take (it is cut off later) so the files cannot be mixed up.
- **Do the wrong version on purpose, then stop.** If it hurts, stop for the day. Pushing, squeezing and forcing are the ones that tire the throat: do one or two takes, not twenty, and rest between them. The "good" version first, for each pair.
- **A song with no license problem.** Use a line of a song in the public domain: "Happy Birthday to You" (its third line, "Happy birthday dear friend", leaps up and is the climb the high-note clips need), "Amazing Grace" (long, slow notes, good for breath), or "Twinkle, Twinkle, Little Star" (a lot of t and k sounds, good for words). **No real singer's recording, and no line of a song still under copyright**, without a license: the app must not ship one.
- **Format and size.** Mono, `.m4a` (AAC) at about 64 kbps, 3 to 6 seconds each, which is about 30 KB a clip, so the whole set stays near half a megabyte and still works offline. Trim silence at both ends and leave about a tenth of a second before and after.
- **File names** below are the names to use. They go in `public/subjects/singing/audio/`. When they exist, the `clip` kind of the sound block is built (section 21 item 10 of `docs/lesson-standard.md`): each clip is listed in `sw.js` for offline use, the check on that list is extended to cover audio files, and a clip gets a `says` line like any other sound.
- **Who records.** You, or someone you know who agrees to it. A voice that is not yours is fine, but get their yes in writing (a message is enough) that the clips may be used in the app.

## The clips

"Sits on" names the card the clip would go on. The card ids are in `public/subjects/singing/u2.cards-*.js`, `u3.cards-*.js` and `u5.cards-*.js`.

### Unit Two: how the top notes come out

| File | Sing or say | How it should sound | Pair it with | Length | Sits on |
|---|---|---|---|---|---|
| `u2-lighttop.m4a` | "Happy birthday dear friend", on a note low enough that the leap up on "birth" is a real climb for you | The top is lighter and thinner than the start, clean and easy. It sounds a little small from outside, and that is right. No jolt, nothing tight | the four clips below, each the same line | 4 s | `meet-lighttop`, `look-lighttop-pushing`, `look-cracking-lighttop` |
| `u2-pushing.m4a` | the same line, same starting note | Louder and louder as it climbs, and the top is a shout. The voice does not lighten at any point: it drags the heavy voice up | `u2-lighttop.m4a` | 4 s | `meet-pushing`, `look-lighttop-pushing` |
| `u2-cracking.m4a` | the same line | Heavy and climbing, then on one note the sound flips with a jolt into a thin, airy voice, with a small gap. The note after the flip is there | `u2-lighttop.m4a` | 4 s | `meet-cracking`, `look-cracking-lighttop` |
| `u2-squeezing.m4a` | the same line | The sound goes thin, tight and strangled as it climbs, and does not get louder. Keep it short: this one tires the throat | `u2-lighttop.m4a` | 3 s | `meet-squeezing`, `exc-clamp` |
| `u2-outofrange.m4a` | the same line, a few steps higher than you can reach | Sung lightly and loose, and the top note is simply not there: the voice runs out, or comes out as a thin squeak or a gap. Not a shout | the same line sung a few steps lower, in `u2-lighttop.m4a` or a second take `u2-outofrange-lower.m4a` | 4 s | `meet-outofrange`, `look-outofrange-pushing` |

### Unit Three: how the air holds up

| File | Sing or say | How it should sound | Pair it with | Length | Sits on |
|---|---|---|---|---|---|
| `u3-clean.m4a` | "Amazing grace, how sweet the sound", one long held note on "grace" | Clear and steady, with no air heard. A low, quiet breath before it | the airy and forced clips | 5 s | `meet-breathfine`, `look-airytone-forcing` |
| `u3-airytone.m4a` | the same line | A soft, whispery sound: air can be heard escaping with the note, and it runs out fast | `u3-clean.m4a` | 5 s | `meet-airytone`, `look-airytone-forcing` |
| `u3-forcing.m4a` | the same line | Air driven out hard: loud and harsh, and the note drifts up. Keep it short | `u3-clean.m4a` | 3 s | `meet-forcing`, `look-airytone-forcing`, `exc-force-gone` |
| `u3-shallowbreath.m4a` | the breath before "Amazing grace" | A quick, noisy gasp in through the mouth with the shoulders lifting, then the line, which runs out before its end. Record it next to a quiet low breath | the same line with a low, quiet breath, `u3-clean.m4a` | 6 s | `meet-shallowbreath`, `look-shallowbreath-breathfine` |

Unplanned breaths (`meet-unplanned`) and a breath that works (`meet-breathfine`) need no clip of their own: the first is about where the breaths fall, which the lyrics on the card already show, and the second is `u3-clean.m4a`.

### Unit Five: how the words sound when they come out

| File | Sing or say | How it should sound | Pair it with | Length | Sits on |
|---|---|---|---|---|---|
| `u5-open.m4a` | "Twinkle, twinkle, little star", with an open mouth and a clear "ah" on "star" | Open and clear, every word can be followed, and holding the nose shut changes little | the three clips below | 5 s | `meet-recorded`, `look-nasal-recorded`, `look-muffled-mumbled` |
| `u5-nasal.m4a` | the same line | Pinched, as if the sound comes out of the nose: "honky". If you hold your nose shut during the take, the sound should change a lot | `u5-open.m4a` | 5 s | `meet-nasal`, `look-nasal-recorded` |
| `u5-muffled.m4a` | the same line | The mouth barely opens, and the sound is dull and stays back in the throat. The words are hard to make out | `u5-open.m4a` | 5 s | `meet-muffled`, `look-muffled-mumbled` |
| `u5-mumbled.m4a` | the same line | The sound is open and clear but the consonants are soft or missing, so the words run together: "twinkle" becomes "winnle". Do not close the mouth | `u5-open.m4a` | 5 s | `meet-mumbled`, `look-muffled-mumbled` |

"Your voice from outside" (`meet-recorded`) is about hearing your own voice on a recording and being surprised. A clip of someone else's voice does not teach it; the learner's own recording does, and the card already says to make one. It needs no clip.

## Which clips matter most

1. **`u2-lighttop.m4a` with `u2-pushing.m4a`.** The pair the whole of Unit Two turns on: the same note, shouted or sung light. Nothing in words gets this across as well as hearing it.
2. **`u2-cracking.m4a`.** A crack is a sound with a jolt in it, and a learner who has never noticed one needs to hear it once.
3. **`u3-clean.m4a` with `u3-airytone.m4a`.** An airy note and a clean one are hard to tell apart from a description.
4. **`u5-open.m4a` with `u5-nasal.m4a`.** The "pinched, as if out of the nose" sound is the hardest of the five to picture from words.
5. Then `u5-muffled.m4a`, `u2-squeezing.m4a`, `u3-forcing.m4a`, `u5-mumbled.m4a`, `u2-outofrange.m4a` and `u3-shallowbreath.m4a`, in that order.

The first four items are six clips, and they cover the names a beginner mixes up most. The whole list is thirteen clips, fourteen with the optional lower take of the out-of-range line.

## What to send back

The files and one line per file naming the take. Then the `clip` kind is built to the same rules as the other sounds: plays only on a tap, nothing recorded or sent, the learner view prints the clip's `says` line in place of it, and the offline list names every file.
