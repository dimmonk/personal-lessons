// Singing, Unit Two, part one and the first half of part two: the opening card, the two terms, and the first three names (a
// light, easy top, pushing, cracking) with the two look-alike pairs between them. This is an ACTION subject and a BRANCH
// unit: the first question's answer already said the trouble is at the top, and the unit teaches the one question that gives
// each top its name. Cards are structured data, not HTML.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet
// card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the
// heading of an again or portrait card. Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('singing', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'The top notes are where most people give up',
    canDo: 'When the top of a line goes wrong, you can tell which of five things is happening, and you have something to try tonight.',
    everyday: [
      'The chorus climbs. On the high note you shout, or your voice flips, or your throat clamps, or the note is simply not there. Most people decide they cannot sing high and stop trying.',
      'Four of the five things that happen at the top have a fix you can try tonight. The fifth needs no fix at all: it is a voice going high the easy way, and beginners often mistake it for a weak one. One look at what your voice did on the way up tells you which one you have.'
    ],
    map: { branch: 'high' } },

  /* ---------- the two voices ---------- */
  { id: 'term-chest', kind: 'term', term: 'chest',
    h: 'The voice you talk in',
    link: 'Everything at the top of a line depends on two voices, and you already use one of them every day.',
    case: 'h-t-chest',
    plain: [
      'Rest a hand on your chest and talk: you feel a buzz. Dolores feels the same buzz when she hums low notes, because her low notes come out of the same voice she talks in.'
    ] },

  { id: 'term-head', kind: 'term', term: 'head',
    h: 'The lighter voice up high',
    link: 'The other voice is the one Nora uses on the high notes of her lullaby.',
    case: 'h-t-head',
    plain: [
      'Slide from a low note up to a high, soft one, with a hand on your chest. The buzz fades, and the sound seems to move up into your head. The high notes are lighter and thinner.'
    ],
    after: 'Going up a line means changing from {t:chest} to {t:head} somewhere in the middle. Everything that follows is about how that change goes.' },

  /* ---------- A light, easy top ---------- */
  { id: 'meet-lighttop', kind: 'meet', outcome: 'lighttop',
    link: 'Start with the top that is not a problem, so you know what the others are measured against.',
    case: 'h-lighttop-meet', mark: 'H1',
    explain: [
      'Mina’s top note feels weak to her, but it is how a voice goes up when nothing is forced. Her voice changed from the heavy {t:chest} she talks in to the lighter {t:head}, so the sound got thinner and the note stayed clean.',
      'From inside, light feels like less. Her friend in the back seat hears a clean note that carries.'
    ],
    spot: [
      { do: 'Find the top of the line: the highest note Mina reaches.', why: 'The low part of a line tells you nothing here; the top does.' },
      { do: 'Listen to the sound there: lighter and thinner than her low notes, and clean.', why: 'Going lighter is how a voice goes high without effort.' },
      { do: 'Check your body: her neck stays loose and nothing aches.', why: 'Strain shows up in the neck, jaw and throat, so loose means no strain.' },
      { do: 'Ignore the feeling that it is weak.', why: 'From inside it feels like less, but her friend hears a note that carries.' }
    ],
    feature: { step: 'H1', option: 'light' },
    name: 'This is {o:lighttop}. Nothing is wrong here. It has a name so that you do not try to fix a top note that is already fine.',
    act: [
      { do: 'Keep it.', why: 'It is already doing the job.' },
      { do: 'If you want it fuller, add a little volume while it stays easy.', why: 'More volume is fine as long as nothing tightens.' },
      { do: 'Stop adding the moment your throat tightens.', why: 'Tightness means you have gone past easy.' },
      { do: 'Record the line and listen back.', why: 'It usually sounds stronger outside than it feels inside.' }
    ] },

  { id: 'check-lighttop', kind: 'check', after: 'lighttop',
    case: 'h-c-odile-hymn',
    ask: { type: 'phrase', step: 'H1', say: 'Which words show what Odile’s voice does at the top? Tap them.',
           answer: 'her voice goes soft and thin, with no effort in her neck' } },

  /* ---------- Pushing the top notes ---------- */
  { id: 'meet-pushing', kind: 'meet', outcome: 'pushing',
    link: 'Now the same top note, reached the other way: by getting louder instead of lighter.',
    case: 'h-pushing-meet', mark: 'H1',
    explain: [
      'Dale never changed voice. He kept the heavy {t:chest} and made it louder as the line rose, so the top came out as a shout and his neck tightened to help. It is a note like the one Mina sang lightly, reached by force instead.',
      'Louder feels like the way to reach a high note. Lighter is the way a voice gets there easily, as Mina’s did.'
    ],
    spot: [
      { do: 'Listen to the volume as the line climbs: Dale gets louder with every line.', why: 'Pushing builds all the way up, not only on the top note.' },
      { do: 'Feel your neck and jaw at the top: his neck is tight and his face is red.', why: 'Tightening is how force shows in the body.' },
      { do: 'Listen to the top note itself: it comes out as a shout.', why: 'A shout means the heavy voice came all the way up with him.' },
      { do: 'Check that it did not flip: it stays one hard sound.', why: 'A flip into a thin voice would be something else.' }
    ],
    feature: { step: 'H1', option: 'shout' },
    name: 'This is {o:pushing}: the top notes are reached by force, and the voice never gets lighter.',
    act: [
      { do: 'Sing the line again at talking volume, and let the top go lighter, even if it feels thin.', why: 'Lighter lets the throat loosen.' },
      { do: 'Slide slowly from a low note to a high one on “oo”, or on a lip trill (blow air through loose, fluttering lips while you sing), letting the voice get lighter as it climbs.', why: 'The slide lets the voice change without force.' },
      { do: 'Sing the top note softly first, then add a little.', why: 'You add volume onto a loose throat, not a tight one.' },
      { do: 'Never get louder to reach a note.', why: 'Louder is how the neck tightens.' }
    ] },

  { id: 'check-pushing', kind: 'check', after: 'pushing',
    case: 'h-c-raj-camp',
    ask: { type: 'option', step: 'H1', among: ['light', 'shout'] } },

  { id: 'look-lighttop-pushing', kind: 'lookalike', ledger: 'lighttop~pushing',
    link: 'These two are the closest pair: the same top note, once sung light and once shouted.',
    cases: ['h-lk-tomas-light', 'h-lk-tomas-push'],
    instruction: 'Both stories are about Tomas and the same line in the shower. Compare one thing: what his voice does as the line climbs.',
    prompt: { kind: 'which', option: 'H1.shout', answer: 'h-lk-tomas-push' },
    difference: [
      'In Story A Tomas lets his voice go lighter at the top, and his neck stays loose. That is {a:H1.light}, so it is {o:lighttop}.',
      'In Story B he gets louder and louder until the note is a shout, and his neck is tight. That is {a:H1.shout}, so it is {o:pushing}.',
      'Same line, same note. The only difference is lighter against louder, and Tomas can hear it while he sings.'
    ] },

  /* ---------- Cracking ---------- */
  { id: 'meet-cracking', kind: 'meet', outcome: 'cracking',
    link: 'Pushing never changes voice, and a light top changes smoothly. This one changes voice with a jolt.',
    case: 'h-cracking-meet', mark: 'H1',
    explain: [
      'Sara’s voice did change from the heavy {t:chest} to the lighter {t:head}, which is right, but it changed all at once instead of smoothly, and that is the flip you hear. It usually happens when the heavy voice is carried too far up before it lets go.',
      'The notes after the flip are there, so her voice has them. It only has to learn to make the change gently.'
    ],
    spot: [
      { do: 'Find the one note where the sound changes: Sara’s voice flips partway up.', why: 'The flip happens on a single note, not over the whole line.' },
      { do: 'Listen to the sound after the flip: thin and airy.', why: 'The lighter voice has taken over.' },
      { do: 'Listen for the jolt: a little gap, not a smooth slide.', why: 'A smooth change is the easy kind.' },
      { do: 'Check the notes after the flip: Sara’s are there, just light.', why: 'If the note were missing, it would be something else.' }
    ],
    feature: { step: 'H1', option: 'flip' },
    name: 'This is {o:cracking}: the change from {t:chest} to {t:head}, made all at once.',
    act: [
      { do: 'Do not push harder to get past it.', why: 'Pushing is what causes it.' },
      { do: 'Slide slowly from low to high on “oo”, “ng” (the sound at the end of “sing”) or a lip trill, right through the spot where it flips.', why: 'The slide teaches the voice to change smoothly.' },
      { do: 'Let the voice get lighter a few notes below the one that flips.', why: 'The change then comes early and gently, not late and all at once.' },
      { do: 'Practice the slides every day for a week or two.', why: 'A smooth change comes from repetition.' },
      { do: 'In the song, sing the line on “oo” first, then with the words.', why: 'Without words, the change is all you have to think about.' }
    ] },

  { id: 'check-cracking', kind: 'check', after: 'cracking',
    case: 'h-c-gabe-shower',
    ask: { type: 'option', step: 'H1', among: ['light', 'shout', 'flip'] } },

  { id: 'look-cracking-lighttop', kind: 'lookalike', ledger: 'cracking~lighttop',
    link: 'In both of these the voice ends up in the lighter sound. What differs is how it gets there.',
    cases: ['h-lk-beatriz-light', 'h-lk-beatriz-crack'],
    instruction: 'Both stories are about Beatriz and the same chorus at home. Compare one thing: how her voice gets from the heavier sound to the lighter one.',
    prompt: { kind: 'which', option: 'H1.flip', answer: 'h-lk-beatriz-crack' },
    difference: [
      'In Story A her voice slides smoothly into a lighter sound and nothing jolts. That is {a:H1.light}, so it is {o:lighttop}.',
      'In Story B her voice flips on one note, with a little jolt, though the top note is there. That is {a:H1.flip}, so it is {o:cracking}.',
      'Both end in the lighter voice. Smooth is fine; the jolt is what to practice away.'
    ] }
]);
