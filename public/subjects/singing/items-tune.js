// Singing, lesson 6: where a short tune goes wrong (part 6). Each case is a singer checking a short tune note by note against a piano app
// and naming what they found (list `tune`): on all the way; one jump fell short (lesson 5, V3); the long last note sank (lesson 4); lost the
// tune partway, unsure of the next note, whose fix is to go back to the slow speed (V2: slower tempo raises accuracy for most occasional
// singers; V17); or the whole tune sat off the same way, every note under or every note over, or drifting further off as it went (V3's
// shifted tune; V6's drift), whose fix is to check the first note against a steady one. Each answer brings back an earlier lesson's check,
// so this is the mixed practice (P22). Stories describe what was heard in other words than the answers. One reaction is confirmed by the
// check in the practice and in the check. Pairs (P12): a short jump beside a lost tune (both miss a middle note), a whole tune off beside a
// short jump, a sagging last note beside a tune on all the way. The people are invented.
(() => {
  const tune = sgCase({ strand: 'tune', list: 'tune', prompt: 'Where did the tune go wrong?', means: {
    all: 'On all the way would mean every note matches and the last one stays put to the end.',
    jump: 'One jump fell short would mean every note is on except the far note of a big jump, which stops short of it.',
    last: 'The long last note sank would mean every note is on until the long last one, which slips lower while it is held.',
    lost: 'Lost the tune partway would mean the first notes are fine, then the singer is unsure which note comes next and the voice wanders.',
    whole: 'The whole tune sat off the same way would mean every note is under, or every note over, or the tune drifts further off as it goes.'
  } });
  FC.items('singing', [
    // ----- the worked case -----
    tune({ id: 'tune-worked-lullaby', right: 'jump',
      story: 'Zoe learns the first line of a lullaby, five notes with a big jump up in the middle. She checks it note by note against a piano app. The first two notes match. The note after the jump is a little under. The rest match, and the last note holds.',
      steps: [
        { id: 'each', does: 'Check each note, not only the last.', working: 'Two on, then the note after the jump under, then the rest on.' },
        { id: 'where', does: 'Find where it went wrong.', working: 'The one miss is the far note of the big jump, a little short of it.', ask: 'tune' }],
      reason: 'Only the far note of the jump was off, and short of it: one jump fell short. Hear that jump on its own first and aim for the far note on purpose.' }),

    // ----- practice, in pairs -----
    tune({ id: 'tune-jump-short', right: 'jump',
      story: 'Ben sings a five-note tune back and checks it against a piano app. Every note matches except the fourth, which comes right after a big leap down and sits a little above the piano’s.',
      reason: 'Only the far note of the big drop was off, and short of it: one jump fell short. Aim for the far note on purpose.' }),
    tune({ id: 'tune-lost-middle', right: 'lost',
      story: 'Isla sings a new tune at its full speed. The first two notes match the piano app. Then she is not sure what comes next, and her voice wanders through the middle before she finds the end.',
      reason: 'Fine at first, then unsure and wandering: she lost the tune partway. Go back to the slow speed, sing the part she lost on its own, then the whole tune.' }),
    tune({ id: 'tune-all-low', right: 'whole',
      story: 'Pablo checks his five-note tune against a piano app. Every one of his notes is a little low, the first as much as the last.',
      reason: 'Every note under: the whole tune sat off the same way. Check the first note against a steady one, and the rest follow.' }),
    tune({ id: 'tune-one-leap', right: 'jump', slips: { all: 'feeling' },
      story: 'Nina feels one spot in her tune went wrong. Against a piano app, every note matches except the top of the one big climb, which is a little under.',
      reason: 'Only the far note of the climb was off, short of it: one jump fell short. Her feeling was right, and the check found where.' }),
    tune({ id: 'tune-last-sinks', right: 'last',
      story: 'Marco sings a short tune against a piano app. Every note matches, and the final held note starts with it, then sags a little before he stops.',
      reason: 'All on until the final held note, which slipped lower: the long last note sank. Keep your ear on it to the end and nudge it back up.' }),
    tune({ id: 'tune-all-on', right: 'all', slips: { jump: 'feeling', last: 'feeling', lost: 'feeling', whole: 'feeling' },
      story: 'Priya thinks her tune went wrong somewhere. She checks it note by note against a piano app: each note matches, and the final one holds steady.',
      reason: 'Every note matched and the last held: on all the way. This time the feeling was wrong.' }),
    tune({ id: 'tune-fast-wander', right: 'lost',
      story: 'Tom tries a tune he heard once, at its speed. The opening matches; by the third note he is guessing, and his voice goes up and down looking for the rest.',
      reason: 'Sure at first, then guessing: he lost the tune partway. Slow it down and learn it in parts.' }),
    tune({ id: 'tune-drifts-down', right: 'whole',
      story: 'Lena checks her five-note tune against a piano app. The first note matches; each note after it is a little lower than the one before should be, until the end sits well under.',
      reason: 'Right at first, then further off with every note: the whole tune drifted off the same way. The first note was right, so check each note after it against a steady one, slowly, one at a time.' }),

    // ----- the check: new cases -----
    tune({ id: 'tune-chorus-leap', right: 'jump',
      story: 'Ray sings the first line of a chorus, with one big climb in it. Against a piano app, every note matches except the top of that climb, which is a little under.',
      reason: 'Only the far note of the jump, short of it: one jump fell short. Aim for that note on purpose.' }),
    tune({ id: 'tune-guessing-end', right: 'lost',
      story: 'Mina sings back a new five-note tune at full speed. The first notes match the piano app, then she loses track of what comes next and her voice drifts around before the end.',
      reason: 'Fine at first, then unsure what came next: she lost the tune partway. Go back to the slow speed and learn it in parts.' }),
    tune({ id: 'tune-steady-all', right: 'all', slips: { jump: 'feeling', last: 'feeling', lost: 'feeling', whole: 'feeling' },
      story: 'Ken is unhappy with how his tune sounded. He checks every note against a piano app: each one matches, and the final held note stays put.',
      reason: 'Every note matched and the last stayed put: on all the way. The worry was wrong this time.' }),
    tune({ id: 'tune-end-flat', right: 'last', slips: { all: 'feeling' },
      story: 'Ada feels the end of her tune went flat. Beside a piano app, every note is right until the final held one, which begins on the note and ends a little lower.',
      reason: 'On until the last, which slipped lower as she held it: the long last note sank. Her feeling was right. Keep your ear on it and nudge it back up.' }),
    tune({ id: 'tune-all-sharp', right: 'whole',
      story: 'Luis sings a five-note tune with one big drop in it. Against a piano app, each of his notes, the drop included, sits a little high.',
      reason: 'Every note over: the whole tune sat off the same way. Check the first note against a steady one.' }),

    // ----- held back for the review -----
    tune({ id: 'tune-clean-run', right: 'all',
      story: 'Nell sings a five-note tune and checks it against a piano app. All five match, and the last holds for its full length.',
      reason: 'All five matched and the last held: on all the way.' }),
    tune({ id: 'tune-forgot-third', right: 'lost',
      story: 'Sam sings a new tune at its speed. After two sure notes he forgets the third, and his voice searches up and down before it carries on.',
      reason: 'Sure, then searching for the next note: lost the tune partway. Slow it down.' }),
    tune({ id: 'tune-tail-sinks', right: 'last',
      story: 'Joy checks a tune against a piano app. All good until the final held note, which sags lower toward its end.',
      reason: 'Only the final held note sagged as she held it: the long last note sank. Keep your ear on it.' })
  ]);
})();
