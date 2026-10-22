// Singing, lesson 12: find the cause (part 12). Each case is a line that went wrong (or did not), answered twice: which of the seven checks finds
// it (list `check`) and what to try (list `fix`): the plan's real-world test, part 2 (research note V8, V9; D6). The one rule, the same as every
// lesson's: go through the checks in order and stop at the first the story does not clear; that check names the cause, and its fix is the one
// fix (range: move; heard: hear it first; note: check against a steady note and move to it; effort: lighter; air: plan breaths; sound: the
// words, last; nothing wrong: leave it). The note check (3) is cleared by a note that is over only when sung loud and on when sung lighter: that
// note goes to the effort check (4), because pushing is what raised it (V11; lesson 7's tie-break). A note under at any loudness, or falling
// short where the line climbs, is the note check (V3). The effort check holds all three efforts at the top from lesson 8: pushing, squeezing
// (strained, not louder) and cracking (a sudden break), each eased by singing lighter, on "oo" or through a straw first (V11, V12). A voice that
// wanders looking for a note it had not heard is the hearing check (lesson 3: "often" the cause, V5). No case has pain or a hoarse voice, which
// comes before every check (rest, V19, lesson 11); "Stop and rest" is never right here. Each story says enough to clear the checks before its
// answer; `not` names, for the wrong answers a learner is likely to pick, the fact in this story that rules them out (the rest fall back to
// what that answer would need). The second question is a recall of the fix, with the look-alike fixes beside it (hear it first beside moving to
// the note; lighter beside moving the song). Nine cases are held back: three for the review's returns and six for the retest seven days after
// the check (V77). The case shape is `sgCase` (items-shape.js) with a second question added here; sgCase itself is not changed. The people are
// invented.
(() => {
  const first = sgCase({ strand: 'cause', list: 'check', prompt: 'Which check finds what went wrong?', means: {
    range: 'That check fits a story where a note will not come without forcing, even on “oo” at an easy loudness, or comes out only as a rumble or air.',
    heard: 'That check fits a story where the voice started before the note was in the head and wandered looking for it.',
    note: 'That check fits a story where a note sits under or over at any loudness, or falls short where the line climbs.',
    effort: 'That check fits a story where a note goes sharp, strained or breaks only where the line climbs or gets loud, and comes out clean sung lighter.',
    air: 'That check fits a story where the notes are right but the air runs out, is gasped, or is taken in the middle of words.',
    sound: 'That check fits a story where the notes and the air are right, but the words come out nasal, muffled or mumbled.',
    fine: 'Nothing wrong fits a story where every check is clear, and the only complaint is that it does not sound like the record.'
  } });
  const FIX = {
    move: 'Moving the song fits a song that goes outside your range.',
    hear: 'Hearing it first fits a voice that wandered looking for a note it had not heard.',
    match: 'Checking against a steady note and moving to it fits a note that sits under or over at any loudness.',
    lighter: 'Singing lighter fits a note that goes sharp, strained or breaks only where it climbs or gets loud.',
    breathe: 'Planning breaths fits air that runs out, is gasped, or is taken in the middle of words.',
    words: 'Working on the words fits a sound that is nasal, muffled or mumbled once everything else is right.',
    leave: 'Leaving it alone fits a line where every check is clear.',
    rest: 'Stopping to rest fits pain or a hoarse voice, and nothing here hurts or is hoarse.'
  };
  const cause = ({ fix, not = {}, notFix = {}, ...c }) => {
    const item = first(c), [ask] = item.asks;
    return { ...item, asks: [{ ...ask, then: { ...ask.then, ...not } }, { id: 'fix', kind: 'choose', prompt: 'What should they try?', from: 'fix', right: fix,
      then: Object.fromEntries(Object.keys(FIX).filter(k => k !== fix).map(k => [k, notFix[k] || FIX[k]])) }] };
  };
  FC.items('singing', [
    cause({ id: 'cause-worked-nina', right: 'effort', fix: 'lighter', slips: { note: 'louder' },
      not: { note: 'Over only when loud, and on when sung lighter: the note check is cleared, and the pushing that raised it is the cause.' },
      story: 'Nina sings a song she knows well at karaoke. The verses match the recording. In the chorus she gets louder as the line climbs, and the top note comes out strained and a shade over. On “oo” at an easy loudness, the same note comes out clean and on.',
      steps: [
        { id: 'one', does: 'Range: does the top note come?', working: 'On “oo” at an easy loudness it comes out clean, so it is in range.' },
        { id: 'two', does: 'Heard: did she know the note?', working: 'She knows the song well and the verses match, so yes.' },
        { id: 'three', does: 'The note: off at any loudness?', working: 'No: over only when loud, on when light. That clears the note check.' },
        { id: 'four', does: 'Effort: off only where it climbs and gets loud?', working: 'Yes, over and strained there: the fourth check.', ask: 'cause' },
        { id: 'fix', does: 'The fix for effort.', working: 'Lighter and softer, on “oo” first.', ask: 'fix' }],
      reason: 'Sharp and strained only where it climbs loud, clean sung lighter: the effort check. Sing it lighter and softer, on “oo” first.' }),

    // ----- pairs: range or effort; heard or the note; the note or effort; cracking or range; air or nothing wrong; sound or nothing wrong -----
    cause({ id: 'cause-ray-too-high', right: 'range', fix: 'move', slips: { effort: 'blame' },
      not: { effort: 'Even on “oo” at an easy loudness it will not come, so singing lighter cannot reach it: the range check comes first.' },
      notFix: { lighter: 'He tried it light on “oo” and it still would not come; lighter cannot reach a note that is not there.' },
      story: 'Ray’s song climbs to a note he can only shout. On “oo” at an easy loudness, it will not come at all.',
      reason: 'It will not come however he tries: the range check finds it. Move the song lower.' }),
    cause({ id: 'cause-tess-belt', right: 'effort', fix: 'lighter', slips: { range: 'blame' },
      not: { range: 'On “oo” at an easy loudness it comes out clean and on, so it is in her range.', note: 'On when sung lighter: only the belting made it go over.' },
      story: 'Tess belts the top of her song, and it goes strained and a shade over the piano app. On “oo” at an easy loudness, it comes out clean and on.',
      reason: 'In range, off only when she belts it: the effort check. Sing it lighter.' }),
    cause({ id: 'cause-ali-wander', right: 'heard', fix: 'hear',
      not: { note: 'His voice wandered up and down before it found the note, rather than sitting steadily off it: he had not heard it first.' },
      notFix: { match: 'There was no steady wrong note to move from: his voice was searching because the note was not in his head.' },
      story: 'The song is in Ali’s range. He starts a new tune before he has the first note in his head, and his voice wanders up and down until it finds it.',
      reason: 'Wandering for a note that was not in his head: the hearing check. Hear the note first, then sing.' }),
    cause({ id: 'cause-kim-flat', right: 'note', fix: 'match', slips: { fine: 'feeling' },
      not: { heard: 'She had the tune in her head and her note did not wander: it sat steadily under.', fine: 'Her feeling was fine, but the piano app shows the note under.' },
      notFix: { hear: 'She already had the tune in her head; what is off is where the note sits, so move it up to the steady note.' },
      story: 'Kim is sure her chorus was fine. The song is in her range and she had the tune in her head. Checked against a piano app, her long note sits steadily a little under from start to end, loud or soft.',
      reason: 'Steady, but under at any loudness: the note check. Check against the steady note and move up to it.' }),
    cause({ id: 'cause-paul-short', right: 'note', fix: 'match', slips: { effort: 'louder' },
      not: { effort: 'Sung lighter it is still under; pushing would make a note go over, not under.', heard: 'He heard the note in his head before he sang, so the hearing check is clear.' },
      notFix: { hear: 'He already heard it in his head first; it still lands under, so check it against the steady note and move up to it.', lighter: 'Lighter did not change it: it is under either way.' },
      story: 'Paul’s chorus climbs to a note that comes out easily on “oo”. He hears it in his head before he sings. Against a piano app, that top note lands a little under, sung loud or light.',
      reason: 'Under where it climbs, at any loudness, though he heard it first: the note check, not effort. Check it against the steady note and move up to it.' }),
    cause({ id: 'cause-gia-loud', right: 'effort', fix: 'lighter', slips: { note: 'louder' },
      not: { note: 'Sung lighter on “oo” it lands on the note: only the loud singing made it go over.' },
      story: 'Gia knows the tune, and the song is in her range. As the line climbs she sings louder, and the top goes a shade over the piano app. Sung lighter on “oo”, it lands on the note.',
      reason: 'Over only where it climbs and gets loud: the effort check. Lighter and softer.' }),
    cause({ id: 'cause-uma-break', right: 'effort', fix: 'lighter', slips: { range: 'blame' },
      not: { range: 'The note is there after the break, and on “oo” sliding up lightly it comes clean: it is in her range.' },
      notFix: { move: 'The note is in her range; moving the song would hide the break, not ease it. Slide up through it lightly on “oo” first.' },
      story: 'Uma knows the tune and the notes match the recording. On the way up the chorus her voice suddenly breaks into a thin, airy sound, and the note after the break is there. Sliding up lightly on “oo”, she gets there without the break.',
      reason: 'A sudden break only where it climbs, the note there, smooth on “oo”: cracking, the effort check. Sing it lighter, sliding up through it on “oo” or a straw first.' }),
    cause({ id: 'cause-rob-tight', right: 'effort', fix: 'lighter', slips: { range: 'blame' },
      not: { range: 'On “oo” at an easy loudness the note comes out clean: it is in his range.', sound: 'The squeeze happens only at the top, where the line climbs: that is effort, and the effort check comes before the sound.' },
      story: 'Rob knows the tune and the song is in his range. At the top of each line his throat tightens and the sound goes thin and strangled, though he is not singing louder. On “oo” at an easy loudness, the note comes out clean.',
      reason: 'Strained only where it climbs, clean on “oo”: squeezing, the effort check. Sing it lighter, on “oo” or a straw first.' }),
    cause({ id: 'cause-dev-runs-out', right: 'air', fix: 'breathe',
      not: { fine: 'The notes are right, but running out and gasping before the end is the air not lasting the line.' },
      story: 'Dev’s notes match the recording all the way. In the long last line he runs out of air two words before the end and gasps.',
      reason: 'Right notes, air gone before the end: the air check. Plan a breath at the end of the line before.' }),
    cause({ id: 'cause-ana-record', right: 'fine', fix: 'leave', slips: { sound: 'feeling', note: 'feeling' },
      not: { sound: 'Her words are clear and open: the sound check is clear.', note: 'Her notes match the record: the note check is clear.' },
      story: 'Ana says her singing sounds nothing like the record. Her notes match it, her top notes are easy, her air lasts, and her words are clear and open.',
      reason: 'Every check is clear: nothing is wrong. It is just not the record’s voice. Leave it alone.' }),
    cause({ id: 'cause-ivo-nose', right: 'sound', fix: 'words',
      not: { fine: 'Holding his nose changes the sound a lot, so something is going on with the sound.' },
      story: 'Ivo’s notes match the piano app, his top is easy and his air lasts. His sound is pinched, and holding his nose on “ah” changes it a lot.',
      reason: 'Everything else clear, and a big change with the nose held: the sound check. Work on the sound, last.' }),
    cause({ id: 'cause-lea-friend', right: 'fine', fix: 'leave', slips: { sound: 'feeling', effort: 'feeling' },
      not: { effort: 'Her top comes out light and easy, on the note: a thin top is how it should be.', sound: 'Every word is clear: the sound check is clear.' },
      story: 'A friend tells Lea her voice is too thin. Lea checks: the notes match the piano app, her top comes out light and easy, her air lasts, and every word is clear.',
      reason: 'Every check is clear: nothing is wrong. Thin and light is fine. Leave it alone.' }),

    // ----- check: new cases (the real-world test, part 2) -----
    cause({ id: 'cause-jo-shout', right: 'range', fix: 'move', slips: { effort: 'blame' },
      not: { effort: 'Even light on “oo” the note will not come, so it is not effort: it is out of her range.' },
      story: 'Jo picks a song whose last chorus jumps very high. She can only shout that note, and on “oo” at an easy loudness it will not come.',
      reason: 'It will not come however she tries: the range check. Move the song lower.' }),
    cause({ id: 'cause-ken-under', right: 'note', fix: 'match', slips: { fine: 'feeling' },
      not: { heard: 'He had the tune in his head, and the notes sit steadily low rather than wandering.', fine: 'The recording shows every long note under: the check, not the feeling, decides.' },
      story: 'Ken thinks his singing is fine. The song sits in his range and he has the tune in his head, but against the recording every long note is a little under, the same amount each time.',
      reason: 'Steady but under: the note check. Check against a steady note and move up to it.' }),
    cause({ id: 'cause-ruby-strain', right: 'effort', fix: 'lighter', slips: { note: 'louder' },
      not: { note: 'On “oo” at an easy loudness it is on: only the loud climb made it go sharp.' },
      story: 'Ruby knows the tune and the song is in her range. She sings louder as the bridge climbs, and its top goes strained and a shade sharp. Sung on “oo” at an easy loudness, it is clean and on.',
      reason: 'Sharp and strained only where it climbs loud: the effort check. Sing it lighter.' }),
    cause({ id: 'cause-ted-gasp', right: 'air', fix: 'breathe', slips: { fine: 'feeling' },
      not: { fine: 'His friend liked it, but breaths in the middle of words and a gasp are the air not lasting.' },
      story: 'A friend says Ted’s singing sounds good. Ted’s notes are right, but he breathes in the middle of words wherever he runs out, and he gasps before the chorus.',
      reason: 'Right notes, breaths grabbed in the middle of words: the air check. Plan your breaths at the ends of lines.' }),
    cause({ id: 'cause-mo-muffled', right: 'sound', fix: 'words',
      not: { fine: 'Listeners cannot make out his words, so the sound is not clear yet.' },
      story: 'Mo’s notes match the piano app, his top is easy, and his air lasts. But he barely opens his mouth, and listeners cannot make out his words.',
      reason: 'Everything else clear, the words hard to make out: the sound check. Work on the words, last.' }),
    cause({ id: 'cause-sue-record', right: 'fine', fix: 'leave', slips: { sound: 'feeling', note: 'feeling' },
      not: { sound: 'Her words are clear: hating a recording is a feeling, not the sound check.' },
      story: 'Sue hates her voice on a recording. The notes match, the top comes out light, the air lasts, and her words are clear.',
      reason: 'Every check is clear: nothing is wrong. Leave it alone.' }),

    // ----- held back: three for the review, six for the retest -----
    cause({ id: 'cause-ola-guess', right: 'heard', fix: 'hear',
      story: 'The song is in Ola’s range. She jumps in before the note is in her head, and her voice slides around looking for it.',
      reason: 'Looking for a note she had not heard: the hearing check. Hear it first.' }),
    cause({ id: 'cause-van-rumble', right: 'range', fix: 'move',
      story: 'Van’s song starts so low that only a rumble and air come out on the first line.',
      reason: 'Only a rumble and air: the range check. Move the song higher.' }),
    cause({ id: 'cause-bo-loud', right: 'effort', fix: 'lighter', slips: { note: 'louder' },
      story: 'Bo knows the tune and the song is in his range. He pushes the top note louder and it goes a shade sharp; on “oo” at an easy loudness, it is on.',
      reason: 'Sharp only when pushed: the effort check. Sing it lighter.' }),
    cause({ id: 'cause-nell-sharp', right: 'note', fix: 'match',
      story: 'Nell knows the tune and the song is in her range. Against a piano app her long notes sit a little over, whether she sings them loud or soft.',
      reason: 'Over at any loudness: the note check. Check against the steady note and move down to it.' }),
    cause({ id: 'cause-eli-flip', right: 'effort', fix: 'lighter', slips: { range: 'blame' },
      story: 'Eli knows the tune. Climbing to the chorus, his voice flips with a jolt into a thin sound, and the top note after the flip matches the recording. Sliding up lightly on “oo”, there is no jolt.',
      reason: 'A sudden flip only where it climbs, the note there: cracking, the effort check. Slide up through it lightly on “oo” first.' }),
    cause({ id: 'cause-ivy-breath', right: 'air', fix: 'breathe',
      story: 'Ivy’s notes match the recording, but in the long verse she keeps singing after her air is gone and the last words come out thin.',
      reason: 'Right notes, singing on with no air left: the air check. Plan a breath before you run out.' }),
    cause({ id: 'cause-sam-mumble', right: 'sound', fix: 'words',
      story: 'Sam’s notes, top and air are all right, and his sound is open, but a friend cannot follow the words: they run together.',
      reason: 'Everything else clear, the words running together: the sound check. Work on the words, last.' }),
    cause({ id: 'cause-joy-record', right: 'fine', fix: 'leave', slips: { sound: 'feeling' },
      story: 'Joy says she does not sound like the singer on the record. Her notes match, her top is easy, her air lasts and her words are clear.',
      reason: 'Every check is clear: nothing is wrong. Leave it alone.' }),
    cause({ id: 'cause-pia-wander', right: 'heard', fix: 'hear',
      story: 'The song is in Pia’s range. She starts singing before she has the note in her head, and her voice hunts up and down for it.',
      reason: 'Hunting for a note that was not in her head: the hearing check. Hear it first.' })
  ]);
})();
