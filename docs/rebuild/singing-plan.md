# Singing: the key and the unit plan

Written 2026-10-08 against `docs/lesson-standard.md` (version 1, with sections 19 and 20). A new subject, so there is no old material: the key is `public/subjects/singing/key.js`, the subject record `public/subjects/singing/subject.js`. This document is the brief every unit writer follows; the examples to copy are Psychology Unit One (a first-question unit), Scams Unit Two (a branch unit of an action subject) and Scams Unit Six (a fact unit).

## Who it is for

Someone who sings for fun (in the car, at karaoke, in a choir, to a child, at a party) and wants to sing a bit better. Not a professional, not a student of singing. They read a unit once and can tell, from one line of a song that came out wrong, what went wrong and what to try. Every card answers "how do I spot this when it happens to me, and what do I do about it?"

## The key in one view

First question, `D1` (Unit One): **What bothers you about it?** Five answers, listed in the order that wins when a line shows two things at once (yieldsTo): the top notes beat the air, and both beat the note. The sound of the words stands alone. The fifth answer has no branch.

| Answer | Kind | Then | Names |
|---|---|---|---|
| How the top notes come out | `high` | `H1` What happens at the top of the line? (5 answers, one name each) | A light, easy top (fine), Pushing the top notes, Cracking, Squeezing, Out of your range |
| How the air holds up | `breath` | `B1` What is the air doing? (5) | A breath that works (fine), A shallow breath, An airy tone, Forcing the air, Unplanned breaths |
| Whether you are on the note | `pitch` | `P1` Where does your note land? (5) | On the note (fine), Singing flat, Singing sharp, Scooping, Guessing the note |
| How the words sound when they come out | `tone` | `T1` What do the words sound like? (4) | Your voice from outside (fine), A nasal sound, A muffled sound, Mumbled words |
| Only that it is not the record’s voice (fine) | `fine` | no branch | no further name |

Tie-breaks in the key (each one is taught on a named exception card in the unit that owns the question, and every story that shows both lists the loser in `also`):

- `D1`: breath yields to high; pitch yields to high and to breath. A top note that goes flat because the singer shouts it is about the top notes. A line that goes flat at the end because the air gave out is about the air.
- `H1`: clamp yields to shout (louder *and* tight is pushing: getting lighter releases the throat too); flip yields to missing (a flip after which the note still is not there is out of range).
- `B1`: force yields to gone (a quick high breath that is then shoved out: the low breath is the fix for both).
- `P1`: under, over and slide each yield to hunt (if the note was never in the singer's head, hearing it first is the fix for everything else).
- `T1`: none. The four sounds are told apart by two checks (hold your nose shut; look in a mirror) and by whether the words can be followed.

Terms: `chest` and `head` (Unit Two: chest voice, head voice), `notecheck` (Unit Four: the note check). Each has one term card before the first card that needs it, is used by token afterward, and in at least one drill reason.

Words that must never appear in authored text (the validator refuses them): the app's own banned list (`key`, `case`, `point to`, `kind of thing` and the rest of `tests/plain-words.mjs`), the subject's `avoid` list in `key.js` (support, diaphragm, register, placement, belt, falsetto as a bare word, technique, tone deaf and the rest), and every `aka` string outside a quotation. The learner's word for one example is **story**. Say "move the song lower", never the banned word for it. American English throughout (`tests/american.mjs`): practice, color, theater, dollars.

## What each name is, and what to do

The pedagogy below is deliberately mainstream: nothing a singing teacher would dispute. Writers use it as the substance of the `explain`, `spot` and `act` fields and do not add claims of their own. A story is one person singing one line in one of the subject's settings (home, car, shower, karaoke, choir, party, kids, openmic, church); people are invented; no real song or singer is named.

### Unit One: the first question (families)

The idea the unit teaches: before you blame your voice, say what actually bothered you. The same line can go wrong in four places, each with a different fix, and often nothing is wrong at all.

- **How the top notes come out** (`high`). The trouble starts where the line climbs. Spot: the low part of the line was fine; at the top something happened (a shout, a flip, a clamp, a missing note, or a light sound the singer distrusts).
- **How the air holds up** (`breath`). Spot: the air gave out before the line ended, was grabbed mid-word, could be heard leaking, or was driven out hard; or the singer suspects their breathing.
- **Whether you are on the note** (`pitch`). Spot: the doubt is about the note itself, not the top notes or the air.
- **How the words sound when they come out** (`tone`). Spot: notes and air fine; the complaint is the sound (pinched, dull, words run together, or strange on a recording).
- **Only that it is not the record’s voice** (`fine`, nothing wrong). Spot: right notes, nothing tight, sore or short of air, clear words; the complaint is a comparison with the singer on the record. What to do: nothing; sing it your way, and if the song sits wrong for your voice, move it lower or higher.

Teach `fine` first (the real thing before the problems, as Scams does), then the four in the key's order. Look-alike pairs worth a card: `pitch~fine` (both "sounds wrong": doubt about the note against a comparison with the record), `high~breath` (a strained top note against air running out at the top; the tie-break), `breath~pitch` (a line that goes flat at the end because the air gave out; the tie-break), `pitch~tone` (a shade off against a sound you dislike). Every pair the drill groups need must be in the ledger, taught by a look-alike card, an exception card, or the question card (`taughtIn`).

### Unit Two: how the top notes come out

The idea: a voice has two gears. Low notes come out in {t:chest}, the voice you talk in; high notes come out in {t:head}, lighter and thinner, which seems to ring higher up. Going up means changing from one to the other somewhere in the middle. Everything in this unit is about how that change goes.

- **A light, easy top** (`lighttop`, nothing wrong; teach first). The top notes come out lighter and thinner than the low ones, clean and easy; nothing jolts, nothing is tight, nothing is sore. That is head voice doing its job. Beginners distrust it because it feels weak from inside; a recording shows it carries. What to do: keep it; if you want it fuller, add a little volume while it stays easy, and stop adding the moment the throat tightens.
- **Pushing the top notes** (`pushing`). The singer refuses the gear change and drags the heavy voice up: louder and louder as the line climbs, neck and jaw tighten, face reddens, the top is a shout or a strain, no flip. What to do: sing the line again at talking volume and let the top go lighter even if it feels thin; slide slowly from a low note to a high one on "oo" or on a lip trill (blow through loose, fluttering lips while singing), letting the voice get lighter as it climbs; sing the top note softly first, then add a little; never get louder to reach a note.
- **Cracking** (`cracking`). The gear change happens with a jolt: on one note the sound flips into a thin, airy voice, with a gap, and the note after the flip is there. It usually comes from carrying the heavy voice too far before letting go. What to do: do not push harder to avoid it (that is what causes it); practice slow slides from low to high on "oo", "ng" or a lip trill through the spot where it changes, letting the voice get lighter a little below the crack, every day for a week or two; in the song, go lighter a few notes before the one that cracks; sing the line on "oo" first, then with the words.
- **Squeezing** (`squeezing`). The throat, jaw or tongue clamp; the sound goes thin, tight or strangled, not louder; the throat is sore or tired afterward. What to do: stop and do a yawn-sigh (a big yawn, then a sigh sliding from high to low), which loosens the throat; let the jaw hang and chew while humming; rest the tip of the tongue behind the lower front teeth; sing the line on a lip trill; if it hurts, stop for the day.
- **Out of your range** (`outofrange`). Tried lightly, with a loose throat, the top note still is not there, or the whole song sits where every line strains. The voice is fine; the song is wrong for it today. What to do: move the song lower (karaoke apps and backing tracks have a setting for it, usually called pitch or transpose): down two or three steps until the chorus is comfortable; or pick another song; the top of a range grows a little with practice, but a note you do not have today is not reached by pushing.

Look-alike pairs people really confuse: `pushing~lighttop` (the same note, shouted or sung light; the pair the whole unit turns on), `cracking~lighttop` (a flip with a jolt against a smooth light top), `cracking~outofrange` (a flip after which the note is there against one after which it is not; tie-break), `pushing~squeezing` (louder against not louder; tie-break), `outofrange~pushing` (tried lightly against pushed). Term cards for chest voice and head voice come before the first meet card.

### Unit Three: how the air holds up

The idea: singing is a steady stream of air turned into sound. The breath can be too high, the air can leak past the sound, it can be shoved, or it can be taken in the wrong places. The check for a good breath: a hand on the belly moves out when you breathe in, the shoulders stay still in the mirror, and the breath is quiet.

- **A breath that works** (`breathfine`, nothing wrong; teach first). Low, quiet breath, belly out, shoulders still; clear sound; air left at the end of the line. What to do: nothing; keep using the check.
- **A shallow breath** (`shallowbreath`). A quick, noisy gasp with the shoulders or chest lifting; the air is gone before the line ends, and the end of the line is squeezed. What to do: breathe low, the breath you take lying down, with a hand on the belly; breathe in through the mouth, quietly, as if surprised; practice a slow hiss (breathe low, then hiss "sss" as long as you can, counting; the count grows over days); in the song, start the breath a beat early so there is time for a low one.
- **An airy tone** (`airytone`). Air can be heard escaping with the sound; the sound is soft and whispery; the air runs out fast however the breath was taken. The air is leaking past the voice without turning into sound; the fix is a cleaner start, not more air. What to do: hum (a hum cannot be airy), then open the hum into "ah" and keep that feeling; start notes with a tiny, gentle "uh" as in "uh-oh" so the sound starts clean; use less air, not more. An airy sound used on purpose for one soft line is a choice; here it is not one.
- **Forcing the air** (`forcing`). The air is driven out hard; the sound is loud and harsh; the throat tires; the note drifts up. What to do: sing at talking volume (the song does not need you to be loud); keep the stream small and steady (the hiss again); sing the line on a lip trill, which stops the moment you push too much air; loudness comes from an open mouth and a bright vowel, not from more air.
- **Unplanned breaths** (`unplanned`). The breaths themselves are full and low, but they are taken wherever the singer happens to run out, in the middle of a word or a phrase, so the line is choppy. What to do: read the lyrics and mark where to breathe (at commas, line ends, before a long phrase) with a tick; take a breath early at a marked spot even before you need it; if a line is too long, sneak a quick breath at a comma rather than mid-word; speak the lyrics in rhythm with the marked breaths before singing them.

Pairs: `shallowbreath~unplanned` (both run out: how you breathe in against where you breathe), `shallowbreath~breathfine` (the check decides), `airytone~forcing` (too little sound for the air against too much air for the sound), `forcing~shallowbreath` (tie-break), `airytone~breathfine`.

### Unit Four: whether you are on the note

The idea: before fixing a note, check it. The term card for {t:notecheck} comes first: play the song's note on a piano app or pause the recording on it, hold it, sing yours, slide until they match; the direction you slid tells you which way you were off. Everything else in the unit follows from the check and from one habit: hear the note in your head before it is in your mouth.

- **On the note** (`onnote`, nothing wrong; teach first). The check shows a match; the note only sounded wrong to the singer (often on a recording, or because a listener frowned). What to do: nothing; trust the check over the feeling; keep recording and checking.
- **Singing flat** (`flat`). The check: a little under, slide up to meet it. Usually from too little lift or energy, tiredness, or singing heavily or very softly. What to do: think the note a touch higher than it is and brighten the vowel (a hint of a smile, an "ee" feeling); a little more energy in the air, not more volume; stand up and lift the chest; check again.
- **Singing sharp** (`sharp`). The check: a little over, slide down to meet it. Usually from pushing, tension or nerves. What to do: drop the shoulders and loosen the jaw; sing a touch softer, with less air; check again.
- **Scooping** (`scooping`). Every note starts underneath and slides up into place, so the line swoops. A habit copied from singers on records; it makes the note arrive late even when it is reached. What to do: hear the note first, then land on it dead on or from above; practice the melody on "la" with short, separate notes and no slides; sound the first note of each phrase on a piano app before singing it.
- **Guessing the note** (`guessing`). The singer starts with no clear note in their head and moves the voice around until it finds the note, or never does; the melody wanders. What to do: listen to the line three times, then hum it with the recording; sound the first note of each phrase and hum it before singing it; learn the melody on "la" before the words; record and compare. Nearly nobody is tone deaf; nearly everybody sings before they listen.

Pairs: `flat~onnote` (felt off; the check decides; the pair the unit turns on), `flat~sharp` (a shade off each way), `scooping~flat` (both under at first; one arrives), `guessing~flat` (tie-break), `guessing~scooping` (tie-break), `sharp~onnote`.

### Unit Five: how the words sound when they come out

The idea: the sound of a word is shaped after the voice makes it, by the roof of the mouth, the jaw and tongue, and the lips and teeth; and the voice you hear from inside your head is not the one everyone else hears. Two checks run through the unit: hold your nose shut on an "ah" (a big change means the sound is going through the nose), and look in a mirror (how far is the mouth open?).

- **Your voice from outside** (`recorded`, nothing wrong; teach first). Open sound, words clear, little change with the nose held, and the complaint comes only from a recording, where the voice is thinner and higher than it sounds from inside (inside your head you also hear it through bone, which makes it deeper and fuller). What to do: nothing; listen to recordings often until the surprise wears off; judge a recording by the checks, not by the surprise.
- **A nasal sound** (`nasal`). Pinched, as if coming out of the nose; the nose check changes the sound a lot. Too much sound is going through the nose. What to do: yawn and feel the back of the roof of the mouth lift, then sing "ah" keeping that lift; sing the line on "ah" alone, then with the words; keep the "m" and "n" sounds short; check with the nose held again.
- **A muffled sound** (`muffled`). The mouth barely opens; the sound is dull and stays back in the throat; the words are hard to make out. Common in shy singers. What to do: open the mouth (two fingers between the teeth on "ah"); rest the tip of the tongue behind the lower front teeth instead of pulling it back; sing to a mirror; think a bright "ee".
- **Mumbled words** (`mumbled`). The sound itself is open and clear, but the consonants are soft or missing, so the words run together and a listener loses them. What to do: speak the lyrics in rhythm, overdoing every consonant; finish the ends of words (the t, d and s); sing it again keeping the consonants; record it and ask whether a listener could write the words down.

Pairs: `nasal~recorded` (thin on a recording against pinched; the nose check decides), `muffled~mumbled` (both unclear: a closed mouth against soft consonants), `nasal~muffled`, `mumbled~recorded`.

### Unit Six: looking after your voice (facts)

A fact unit (lesson standard A12): facts to hold, grouped under the idea each serves, one concept card and one facts card per group, a check per fact. Four groups:

1. **Warming up.** Five minutes is enough. Hums, lip trills and gentle slides, softly, in the easy middle of the voice. Loud parts and high notes wait until after the warm-up. Warm up before singing anything that matters, including karaoke.
2. **Water and the voice.** Drink water through the day, not only at the moment: what you drink does not touch the voice, it helps over hours. Dry air, smoke and alcohol dry the voice out. A dry throat right now is helped by breathing steam or humid air and by a sip of water for the mouth.
3. **A hoarse or tired voice.** Rest it: no singing, and as little talking as you can. Do not push through it. Do not keep clearing your throat (swallow or sip water instead). Singing should never hurt: pain means stop for the day. Hoarseness that lasts more than two or three weeks, with no cold to explain it, is for a doctor.
4. **Practice that sticks.** Ten to fifteen minutes most days beats an hour once a week. Work on one thing at a time. Record it and listen back: that is the only way to know whether it worked. Learn a new song slowly, in the easy middle of your voice, on one sound ("la" or "oo") before the words. Pick songs that sit where your voice is easy, and move the others lower.

Pairs of facts people swap, for the ledger: what to drink against what helps right now; rest against pushing through.

## Unit plan: structure every writer follows

Every unit is a quick lesson (section 19) in plain, concrete writing (section 20): for each name one `meet` card (the story first, the idea in a paragraph or two, `spot` as numbered steps with the example built in and one line of why, the name, and `act` as numbered steps: this is an action subject, so every name says what to do, the fine ones included) and one `check`. `again`, `portrait`, `lens` and `transfer` are left out. A `lookalike` card only for the pairs listed above as the ones people confuse; an `exception` card for each tie-break the unit owns; every other ledger pair is `taughtIn` the question card. One `question` card with `how` as steps, then its check, then one `worked` story (clean or misleading), then the drill, then `recap` and `plan`. The orient card says the payoff up front in the reader's life.

The drill of a branch unit: `piece` (the unit's question alone on new stories, `tell` items for the pairs that have a card, and one `{ earlier }` item for each assumed unit), then `route` (the whole route alone, in groups of look-alikes, clean before misleading, at least one misleading story with `echo` naming a teaching story of a different name, and one `{ earlier }` item). A `claim` stage is optional. Every stage that asks about stories holds a story whose name is the fine one (V37). Two fresh stories per name in `returns`. The first-question unit has `piece` and `route` only. Every story that can be asked for its name carries `not` naming a ledger neighbor, and a `reason` for every question it is asked that quotes the marked words with `{cue:STEP}`. Feedback fields are at most two sentences (V63).

Case ids are unique across the subject: Unit One `g-`, Unit Two `h-`, Unit Three `b-`, Unit Four `p-`, Unit Five `t-`, Unit Six `f-`. Settings are the nine in the subject record; each name's stories span at least two of them (V33), and no two stories of one name share a `topic` (V52).

Files, already listed in `index.html` and `sw.js` and present as stubs (a writer replaces every one of its unit's files and creates no others):

- Unit One: `u1.unit.js`, `u1.cards-1.js` to `u1.cards-3.js` (one per part), `u1.cases-teach-1.js`, `u1.cases-teach-2.js`, `u1.cases-drill-1.js`, `u1.cases-drill-2.js`, `u1.cases-return-1.js`; `u1.cases-baseline-1.js` holds the six baseline stories and is kept as it is.
- Units Two to Five: `uN.unit.js`, `uN.cards-1.js` to `uN.cards-3.js`, `uN.cases-teach-1.js`, `uN.cases-teach-2.js`, `uN.cases-drill-1.js`, `uN.cases-drill-2.js`, `uN.cases-return-1.js`.
- Unit Six: `u6.unit.js`, `u6.cards-1.js`, `u6.cards-2.js`, `u6.cases-1.js`.

Specimens: one per name, clean, written by the unit that teaches the name, assembled into `specimens.js` afterward. Validator: `node tests/validate-lessons.mjs`, reading only the lines for the unit being written (the lock lines for the subject, V46, are expected until the lock is rewritten). Learner view: `node tools/learner-view/render-learner-view.mjs singing uN`, read as the owner would read it: a card that takes a second read is a defect.

## Gaps and decisions

1. **"key" is banned in every subject**, and it is the ordinary word for what a karaoke app changes. The subject says "move the song lower" everywhere and names the app's setting (pitch, transpose) in a story's own words where needed.
2. **The sound of the words has no tie-break.** A line that is both nasal and mumbled gets one answer by the key's `when` lines (mumbled needs an open, clear sound); writers avoid stories that show two.
3. **A first-question answer with no branch cannot be a specimen** (S6 needs an outcome), so the fine answer at the first question is practiced only in Unit One's drill, returns and the baseline, as in Scams and Wealth.
4. **No old material and no cold read yet.** Every unit starts at `rev: 1`, `status: 'draft'`; the owner's cold read (A14) is the check that remains.
