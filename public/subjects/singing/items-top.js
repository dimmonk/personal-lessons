// Singing, lessons 7 and 8: what happens at the top of a line (parts 7 and 8). Each case is what a singer noticed where a line climbs, put to the
// list `top`, worded once for both lessons. The rule, the same as every lesson's (subject record): range first (lesson 1: a top note is tried on
// "oo" at an easy loudness; above the range it will not come without straining or shouting however it is tried, V3, V21); then a note that goes
// sharp or strained only where the line climbs or gets loud is effort, not the ear: more breath pressure raises the note, and loud high singing
// presses the voice so it sounds strained (V11), so it is sung lighter, on "oo" or through a straw first (V12); a top note that comes out easily
// but lands under is the note check (lesson 3), the hearing-to-voice link (V3). When a top note is pushed and also a shade over, the pushing is
// the cause (V11): fix it first. Cracking (a sudden flip on the way up) and squeezing (a tight, strangled sound that is not louder) are the
// other two efforts at the top; a straw, a hum or "oo" eases the switch on the way up and lowers the strain (V12: "helps to avoid register
// instabilities", collision forces fall). Every story of a fault in range says the note comes out on "oo" at an easy loudness, so out of range
// never fits it. Lesson 7 asks four of the six (`only`): the decision between effort, the note, a fine top and the range; lesson 8 all six.
// The people are invented.
(() => {
  const MEANS = {
    easy: 'A light, easy top would mean the top note comes out on the note, lighter and thinner than the low ones, with no jolt and nothing tight.',
    push: 'Pushing would mean the voice gets louder as the line climbs and the top goes sharp or strained, while on “oo” at an easy loudness it comes out clean.',
    crack: 'Cracking would mean the voice suddenly breaks or flips, with a jolt or a gap, into a thin, airy sound on the way up, and the note after it is there.',
    squeeze: 'Squeezing would mean the throat tightens and the sound goes thin and strangled without getting louder, while on “oo” at an easy loudness it comes out clean.',
    short: 'Falling short would mean the top note comes out easily, loud or soft, but lands a little under the steady note.',
    out: 'Out of range would mean the top note will not come without straining or shouting, even on “oo” at an easy loudness.'
  };
  const LESSON7 = ['easy', 'push', 'short', 'out'];
  const effortCase = sgCase({ strand: 'effort', list: 'top', prompt: 'What is happening at the top?',
    means: Object.fromEntries(LESSON7.map(k => [k, MEANS[k]])) });
  const effort = c => { const item = effortCase(c); return { ...item, asks: [{ ...item.asks[0], only: LESSON7 }] }; };
  const top = sgCase({ strand: 'top', list: 'top', prompt: 'What is happening at the top?', means: MEANS });

  FC.items('singing', [
    // ===== lesson 7: effort or the note =====
    effort({ id: 'effort-worked-karaoke', right: 'push', slips: { short: 'louder' },
      story: 'Jamal sings a karaoke song whose chorus climbs. He sings louder and louder to get up there, and his neck tightens. Checked against a piano app, the top note is a shade over. Sung on “oo” at about the loudness he talks, the same note lands on it.',
      steps: [
        { id: 'range', does: 'Is the note in his range?', working: 'On “oo” at an easy loudness it comes out, so yes.' },
        { id: 'when', does: 'When is it off?', working: 'Only when he sings it loud, and then it is over: the pushing raised it.', ask: 'effort' }],
      reason: 'In range, over only when he sings it loud, on when he sings it lighter: that is pushing. Sing it lighter and softer, on “oo” first, then the words; moving to the note would not fix what made it go sharp.' }),

    effort({ id: 'effort-ella-louder', right: 'push', slips: { short: 'louder' },
      story: 'Ella’s chorus climbs, and she sings it louder to get there. Checked against a piano app, the top note comes out a shade over. On “oo” at about the loudness she talks, it lands on the note.',
      reason: 'Over only when she sings it loud, on when she sings it lighter: pushing. Sing it lighter and softer, on “oo” first.' }),
    effort({ id: 'effort-ravi-under', right: 'short',
      story: 'Ravi’s chorus climbs to a note that comes out easily on “oo”. Checked against a piano app, it lands a little under every time, whether he sings it loud or soft.',
      reason: 'It comes out easily and sits under however loud he sings it: falling short. That is the note check: check it against a steady note and move up to it.' }),
    effort({ id: 'effort-hana-thin', right: 'easy', slips: { push: 'feeling', short: 'feeling' },
      story: 'Hana thinks her top note sounds thin and weak next to her low notes. It comes out without effort, and against a piano app it is on the note.',
      reason: 'Easy, and on the note: a light, easy top. Lighter and thinner than the low notes is how a top note should sound; leave it alone.' }),
    effort({ id: 'effort-leo-shout', right: 'out', slips: { push: 'blame' },
      story: 'Leo’s song climbs to a note he can only reach by shouting. He tries it on “oo” at an easy loudness, and it still will not come without straining.',
      reason: 'It will not come without straining, however he tries it: out of range. Move the song lower; singing lighter cannot reach a note that is not there.' }),
    effort({ id: 'effort-mei-friend', right: 'push', slips: { easy: 'feeling', short: 'louder' },
      story: 'A friend tells Mei her high notes sound strained. Mei listens: her voice gets louder as each line climbs, and at the top her neck tightens. Sung lighter on “oo”, those notes come out clean and on the note.',
      reason: 'Strained only as it climbs and gets loud, clean when lighter: pushing. Sing it lighter and softer, on “oo” first.' }),
    effort({ id: 'effort-carlos-sure', right: 'short', slips: { easy: 'feeling' },
      story: 'Carlos sings his high note loud and feels it is fine. Checked against a piano app, it sits a little under; sung lighter on “oo”, it comes out easily and is still a little under.',
      reason: 'Under when loud and still under when light: falling short, not pushing, since pushing would have made it go over. The feeling was not the check: check it against a steady note and move up to it.' }),

    // check: new cases
    effort({ id: 'effort-dana-belts', right: 'push', slips: { short: 'louder' },
      story: 'Dana belts the last chorus. The top note comes out loud, and against the piano app it is a shade over. Sung on “oo” at an easy loudness, it is on the note.',
      reason: 'Over only when loud, on when easy: pushing. Sing it lighter and softer, on “oo” first.' }),
    effort({ id: 'effort-omar-moves-up', right: 'short',
      story: 'Omar belts his top note, and beside the piano app he has to move up a little to match it. Sung lightly on “oo”, it comes out without effort and he still has to move up.',
      reason: 'Under when belted and under when light: falling short, the note check. Belting did not make it go over, so it is not pushing: check it against a steady note and move up to it.' }),
    effort({ id: 'effort-grace-light', right: 'easy',
      story: 'Grace’s top notes come out lighter than her low ones, with no strain and no jolt, and they match the piano app.',
      reason: 'Light, easy and on the note: a light, easy top. Leave it alone.' }),
    effort({ id: 'effort-pete-cannot', right: 'out', slips: { push: 'blame' },
      story: 'Loud, Pete can only shout at the highest note of his song. On “oo” at an easy loudness it will not come at all.',
      reason: 'It will not come however he tries it: out of range. Move the song lower.' }),
    effort({ id: 'effort-ivy-sister', right: 'push', slips: { easy: 'feeling', short: 'louder' },
      story: 'Ivy’s sister says the high part sounded sharp. Ivy sings it again: she gets louder as it climbs, and the top goes over the piano app’s note. On “oo” at about talking loudness, it lands on it.',
      reason: 'Over only as it climbs and gets loud, on when lighter: pushing. Sing it lighter, on “oo” first.' }),

    // held back for the review
    effort({ id: 'effort-nick-anthem', right: 'push', slips: { short: 'louder' },
      story: 'Nick sings the high line of the anthem at full voice, and it goes a shade over the piano app. Sung on “oo” at an easy loudness, the same note is on.',
      reason: 'Over only at full voice: pushing. Sing it lighter and softer.' }),
    effort({ id: 'effort-joy-under', right: 'short',
      story: 'Joy’s top note comes out easily on “oo”. Against the piano app it is a little under, however loud or soft she sings it.',
      reason: 'Easy, and under at any loudness: falling short: check it against a steady note and move up to it.' }),
    effort({ id: 'effort-bea-clean', right: 'easy', slips: { push: 'feeling', short: 'feeling' },
      story: 'Bea worries her top notes are too quiet. They come out easily and lightly, and each one matches the piano app.',
      reason: 'Easy and on the note: a light, easy top. Quiet and light is fine up there.' }),

    // ===== lesson 8: the six things at the top =====
    top({ id: 'top-worked-sofia', right: 'crack',
      story: 'Sofia sings a song whose line climbs. On the way up her voice suddenly flips, with a jolt, into a thin, airy sound, then carries on, and the top note after the flip matches the piano app. On “oo”, sliding up lightly, she gets there without the jolt.',
      steps: [
        { id: 'range', does: 'Is the top note in her range?', working: 'It comes out, and on “oo” she slides up to it easily, so yes.' },
        { id: 'what', does: 'What happens on the way up?', working: 'A sudden flip with a jolt, not a shout and not a tight squeeze.', ask: 'top' }],
      reason: 'A sudden flip with a jolt on the way up, and the note there after it: cracking. Slide up through that spot on “oo” or through a straw, lightly, before you sing the words there.' }),

    // pairs
    top({ id: 'top-ben-smooth', right: 'easy', slips: { crack: 'feeling' },
      story: 'As the chorus climbs, Ben’s voice gets lighter and thinner, smoothly, with no jolt. The top note matches the piano app, and nothing feels tight.',
      reason: 'Lighter and thinner, smooth, on the note, nothing tight: a light, easy top. Leave it alone.' }),
    top({ id: 'top-ana-flips', right: 'crack',
      story: 'On the way up, Ana’s voice suddenly flips into a thin, airy sound with a jolt, then carries on. The note after the flip is there, on the note.',
      reason: 'A jolt and a sudden flip, not a smooth change: cracking. Slide up through it on “oo” or a straw, lightly.' }),
    top({ id: 'top-theo-shout', right: 'push', slips: { squeeze: 'louder' },
      story: 'Theo gets louder and louder as the line climbs, and the top note comes out as a shout, a shade over the piano app. On “oo” at an easy loudness it comes out clean.',
      reason: 'Louder all the way up, a shout and sharp at the top: pushing. Fix the pushing first, since that is what made it sharp: lighter and softer, on “oo” first.' }),
    top({ id: 'top-rosa-tight', right: 'squeeze',
      story: 'As the line climbs, Rosa’s throat tightens and the sound goes thin and strangled, though she is not singing any louder. On “oo” at an easy loudness the same note comes out clean.',
      reason: 'Tight and strangled without getting louder: squeezing. Take it on “oo” or through a straw first, lightly, then the words.' }),
    top({ id: 'top-sam-strain', right: 'out', slips: { squeeze: 'blame', push: 'blame' },
      story: 'Sam’s top note will not come on “oo” at an easy loudness. He gets it only by straining, and some tries do not come out at all.',
      reason: 'It will not come without straining, however he tries: out of range. Move the song lower.' }),
    top({ id: 'top-mia-under', right: 'short', slips: { easy: 'feeling' },
      story: 'Mia’s top note comes out easily, light and clean. Checked against a piano app, it sits a little under each time.',
      reason: 'Easy and clean, but under: falling short. That is the note check: check it against a steady note and move up to it.' }),

    // mixed
    top({ id: 'top-jon-broke', right: 'crack',
      story: 'Jon’s friend says his voice broke on the high part. Jon listens back to a recording on his phone: on the way up his voice jumps with a jolt into a thin, airy sound, and the top note after it is there.',
      reason: 'A jolt into a thin, airy sound on the way up: cracking. Slide up through it on “oo” or a straw, lightly.' }),
    top({ id: 'top-lucy-thin', right: 'easy', slips: { crack: 'feeling', squeeze: 'feeling' },
      story: 'Lucy feels her top notes are too thin. They come out smoothly and lightly, with no jolt and nothing tight, and they match the piano app.',
      reason: 'Smooth, light and on the note: a light, easy top. Thin is how a top note is meant to sound.' }),
    top({ id: 'top-kai-strangled', right: 'squeeze',
      story: 'Kai is not singing loudly, but at the top of each line his throat tightens and the sound goes thin and strangled. On “oo” at an easy loudness, the note comes out clean.',
      reason: 'Tight and strangled, not loud: squeezing. Take it on “oo” or through a straw first, lightly.' }),
    top({ id: 'top-zara-shouted', right: 'push', slips: { squeeze: 'louder', short: 'louder' },
      story: 'A friend says Zara’s high note sounded shouted. Zara checks: she gets louder all the way up, and the top is a shade over the piano app. On “oo” at about talking loudness, it is on.',
      reason: 'Louder all the way up and sharp at the top: pushing. Lighter and softer, on “oo” first.' }),
    top({ id: 'top-eli-chorus', right: 'out', slips: { push: 'blame' },
      story: 'The last chorus of Eli’s song goes to a note he cannot get without shouting. On “oo” at an easy loudness, it still will not come.',
      reason: 'It will not come however he tries it: out of range. Move the song lower.' }),
    top({ id: 'top-nadia-sure', right: 'short', slips: { easy: 'feeling' },
      story: 'Nadia thinks she nails the high note. Against the piano app, it comes out easily but sits a little under, every time.',
      reason: 'Easy, but under every time: falling short: check it against a steady note and move up to it.' }),

    // check: new cases
    top({ id: 'top-ray-jolt', right: 'crack',
      story: 'Halfway up the chorus, Ray’s voice breaks: for an instant the sound drops out, then comes back thin and airy. The note after the break matches the piano app, and on “oo” sliding up lightly it comes out clean.',
      reason: 'A sudden break into a thin, airy sound, the note there after it: cracking. Slide up through it on “oo” or a straw, lightly.' }),
    top({ id: 'top-lin-pinched', right: 'squeeze',
      story: 'At the top of the line, Lin’s throat clamps and the sound goes thin and strangled, at the same loudness as the rest. On “oo” at an easy loudness, the note comes out clean.',
      reason: 'Tight and strangled, not louder: squeezing. Take it on “oo” or a straw first.' }),
    top({ id: 'top-ken-weak', right: 'easy', slips: { crack: 'feeling', short: 'feeling' },
      story: 'Ken worries his top notes sound weak. They come out lightly and smoothly, with nothing tight, and match the piano app.',
      reason: 'Light, smooth and on the note: a light, easy top. Leave it alone.' }),
    top({ id: 'top-ada-louder', right: 'push', slips: { squeeze: 'louder', short: 'louder' },
      story: 'Ada sings each line louder as it climbs, and the top note comes out strained and a shade over the piano app. On “oo” at an easy loudness, the note is clean and on.',
      reason: 'Louder as it climbs, strained and sharp at the top: pushing. Lighter and softer, on “oo” first.' }),
    top({ id: 'top-max-never', right: 'out', slips: { squeeze: 'blame', push: 'blame' },
      story: 'Max tries his song’s top note on “oo” at an easy loudness, then louder. It will not come without straining either way.',
      reason: 'It will not come without straining, however he tries: out of range. Move the song lower.' }),
    top({ id: 'top-ida-low', right: 'short', slips: { easy: 'feeling' },
      story: 'Ida’s top note comes out easily, with nothing tight. Beside the piano app she has to move up a little to match it.',
      reason: 'Easy, but she had to move up: falling short: check it against a steady note and move up to it.' }),

    // held back for the review
    top({ id: 'top-tom-flip', right: 'crack',
      story: 'On the way up, Tom’s voice jolts into a thin, airy sound and then goes on. The top note after it is on the note.',
      reason: 'A jolt into a thin sound on the way up: cracking. Slide up through it on “oo”, lightly.' }),
    top({ id: 'top-nia-tight', right: 'squeeze',
      story: 'Nia is singing softly, yet at the top her throat tightens and the sound goes strangled. On “oo” at an easy loudness, it comes out clean.',
      reason: 'Tight and strangled while soft: squeezing. Take it on “oo” or a straw first.' }),
    top({ id: 'top-ali-fine', right: 'easy',
      story: 'Ali’s top notes are lighter than his low ones, smooth all the way up, and on the note against the piano app.',
      reason: 'Light, smooth and on the note: a light, easy top. Leave it alone.' })
  ]);
})();
