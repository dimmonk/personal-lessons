// Singing, lesson 11: looking after your voice (part 11). Facts only from the research note's quoted sources (V19 as re-read on 2026-10-22,
// V20, V12, V18):
// - Most hoarseness can be treated by resting the voice; after a cold it usually goes in 7 to 10 days (the hoarseness guideline's plain-language
//   summary, Krouse et al. 2018).
// - See a doctor if it is not getting better in 7 to 10 days, whatever started it (sooner if you smoke), and an ear, nose and throat doctor by
//   four weeks at the latest (the summary's bullets as printed; key action 4B).
// - Without waiting with a warning sign: coughing up blood, trouble swallowing, a lump in the neck, pain when speaking or swallowing, uneasy
//   breathing, losing the voice or a big change that lasts more than a few days (the summary's other bullets; "right away" is the course's
//   reading, research note V19).
// - Whispering is not rest (NIDCD); avoid clearing the throat over and over and using the voice too long or too loudly (the summary).
// - Water is a daily habit with a small, uncertain effect (V20); humid air (the summary: humidify your home).
// - A hum or a straw makes the voice work more easily (V12); short, regular practice spread over days (V18; R2, R4).
// Questions from memory (a spoken block holds each, lesson standard 3.7; the check asks the same seven facts in new words), each accepting every
// answer the lesson would count right, and cases on
// the list `care`. The case rule: a warning sign means right away; else a hoarse voice that is not getting better after 7 to 10 days, or with
// no cold to explain it, means a doctor; else (a cold, under a week, no sign) rest. No case sits on the 7 to 10 day line. Every item is the
// topic `care`: the check asks the facts in new words and three new cases, and the review brings back a case it has not asked. The people are invented.
(() => {
  const TYPE = 'Type your answer.';
  const recall = (id, words, accept, reason) => ({ id, strand: 'care', facets: {}, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: TYPE, accept }], reason });
  const care = sgCase({ strand: 'care', list: 'care', prompt: 'What should they do?', means: {
    rest: 'Rest would mean a cold explains it, it has been under a week, and there is no warning sign: rest the voice and give it time.',
    doctor: 'See a doctor would mean a hoarse voice that is not getting better after 7 to 10 days, or one with no cold to explain it.',
    now: 'Right away would mean a warning sign: coughing up blood, trouble swallowing or breathing, a lump in the neck, pain when speaking or swallowing, or a voice you have lost, or that has changed so much it is hard to use, for more than a few days.'
  } });
  FC.items('singing', [
    // ----- from memory: asked in the lesson, then again in the check -----
    recall('care-rest', 'What does a hoarse voice need most?', ['Rest', '(Voice) rest', 'Rest (your voice)', 'Rest (the voice)', 'Rest (it)', 'Resting (it)', 'Resting (the voice)', '(To) rest'],
      'Most hoarseness gets better by resting the voice and going easy on it.'),
    recall('care-days', 'If a hoarse voice is not getting better, after about how long should you see a doctor?',
      ['(About) seven (to) ten days', '(About) seven days', '(About) ten days', '(About) (one) week', '(About) a week and a half', '(About) one (to) two weeks'],
      'About 7 to 10 days, whatever started it: a cold’s hoarseness usually goes in that time.'),
    recall('care-four-weeks', 'By how long at the latest should an ear, nose and throat doctor look at a hoarse voice that has not gone away?',
      ['Four weeks', '(One) month', 'Twenty-eight days'],
      'Four weeks at the latest, whatever the cause.'),
    recall('care-warning', 'Name one warning sign that means see a doctor right away, without waiting to see if it gets better.',
      ['Pain (when speaking or swallowing)', 'Pain when swallowing', 'Pain when speaking', '(Coughing up) blood', 'Coughing blood', '(A) lump (in the neck)', '(A) lump in (my) neck',
        '(Trouble or difficulty) swallowing', 'Swallowing trouble', '(Trouble or difficulty) breathing', 'Breathing trouble', 'Uneasy breathing',
        'Losing (your) voice', 'Lost (my) voice', '(A) big change in (your) voice', '(A) bad change in (the) voice'],
      'Coughing up blood, trouble swallowing or breathing, a lump in the neck, pain when speaking or swallowing, or a voice lost, or so changed it is hard to use, for more than a few days: any one means do not wait.'),
    recall('care-avoid', 'Which quiet way of using your voice is not rest for a hoarse voice?',
      ['Whispering', 'Whisper'],
      'Whispering: it is not rest. Shouting, and clearing your throat over and over, are hard on it too.'),
    recall('care-air', 'What kind of air helps a dry throat?',
      ['Humid (air)', 'Moist (air)', 'Damp (air)', '(A) humidifier', 'Steam', 'Steamy (air)'],
      'Humid air. Drinking water is a good daily habit too, but it is not a fix.'),
    recall('care-warmup', 'What can you do first, before you sing, to make your voice work more easily?',
      ['(A) warm-up', '(A) warmup', 'Warming up', '(A) hum', '(A) gentle hum', 'Humming', 'Humming through (a) straw', '(A) hum through (a) straw', '(Sing through a) straw'],
      'A warm-up: a gentle hum, or humming through a straw.'),

    // ----- the check asks the same seven things in new words (from memory), beside new cases -----
    recall('care-rest-new', 'A friend’s voice has gone hoarse with a cold. What is the first thing it needs?', ['Rest', '(Voice) rest', 'Rest (your voice)', 'Rest (the voice)', 'Rest (it)', 'Resting (it)', 'Resting (the voice)', '(To) rest'],
      'Rest: most hoarseness gets better by resting the voice and going easy on it.'),
    recall('care-days-new', 'Your hoarse voice is no better. After about how many days do you see a doctor?',
      ['(About) seven (to) ten days', '(About) seven days', '(About) ten days', '(About) (one) week', '(About) a week and a half', '(About) one (to) two weeks'],
      'About 7 to 10 days, whatever started it.'),
    recall('care-four-weeks-new', 'A hoarse voice will not go away. What is the longest it should go before an ear, nose and throat doctor sees it?',
      ['Four weeks', '(One) month', 'Twenty-eight days'],
      'Four weeks at the latest, whatever the cause.'),
    recall('care-warning-new', 'Name a sign that means you do not wait to see whether a hoarse voice gets better.',
      ['Pain (when speaking or swallowing)', 'Pain when swallowing', 'Pain when speaking', '(Coughing up) blood', 'Coughing blood', '(A) lump (in the neck)', '(A) lump in (my) neck',
        '(Trouble or difficulty) swallowing', 'Swallowing trouble', '(Trouble or difficulty) breathing', 'Breathing trouble', 'Uneasy breathing',
        'Losing (your) voice', 'Lost (my) voice', '(A) big change in (your) voice', '(A) bad change in (the) voice'],
      'Coughing up blood, trouble swallowing or breathing, a lump in the neck, pain when speaking or swallowing, or a voice lost, or so changed it is hard to use, for more than a few days.'),
    recall('care-avoid-new', 'While your voice is hoarse, what quiet way of talking should you avoid?',
      ['Whispering', 'Whisper'],
      'Whispering: it is not rest.'),
    recall('care-air-new', 'What can you add to the air at home to help a dry throat?',
      ['Humidity', 'Moisture', '(A) humidifier', 'Steam', 'Water (in the air)'],
      'Humidity: humid air. Drinking water is a daily habit too, but it is not a fix.'),
    recall('care-warmup-new', 'What easy sound gets your voice ready before you sing?',
      ['(A) hum', '(A) gentle hum', 'Humming', 'Humming through (a) straw', '(A) hum through (a) straw', '(A) warm-up', '(A) warmup'],
      'A gentle hum, or humming through a straw: a warm-up.'),
    care({ id: 'care-lee-cold', right: 'rest',
      story: 'Lee’s voice went husky with a cold three days ago and is a little better today. Nothing hurts, and he can swallow and breathe as usual.',
      reason: 'Three days into a cold, getting better, no warning sign: rest your voice and give it time.' }),
    care({ id: 'care-ron-husky', right: 'doctor',
      story: 'Ron has had no cold, but for two and a half weeks his voice has been a little husky, no better than at the start. He can still use it, and nothing hurts.',
      reason: 'Over two weeks and not getting better, with no cold to explain it: see a doctor.' }),
    care({ id: 'care-gia-breath', right: 'now', slips: { rest: 'waited', doctor: 'waited' },
      story: 'Gia’s voice went hoarse with a cold two days ago, and since this morning breathing has felt hard and uneasy.',
      reason: 'Uneasy breathing with a voice change is a warning sign: see a doctor right away.' }),
    // ----- the worked case -----
    care({ id: 'care-worked-sam', right: 'rest',
      story: 'Sam had a cold, and five days on his voice is still hoarse, though a little better each day. Nothing hurts when he talks or swallows, he is breathing fine, and he has no lump in his neck.',
      steps: [
        { id: 'signs', does: 'Any warning sign?', working: 'No pain, no blood, no lump, no trouble swallowing or breathing.' },
        { id: 'how-long', does: 'How long, and what started it?', working: 'Five days, after a cold, and getting better: under the 7 to 10 days.', ask: 'care' }],
      reason: 'No warning sign, five days after a cold and getting better: rest your voice and give it time. If it is not getting better after 7 to 10 days, see a doctor.' }),

    // ----- practice, in pairs -----
    care({ id: 'care-mia-cold', right: 'rest',
      story: 'Mia’s voice went husky with a cold four days ago. Nothing hurts and nothing else is wrong.',
      reason: 'Four days into a cold, no warning sign: rest. A cold’s hoarseness usually goes in 7 to 10 days.' }),
    care({ id: 'care-raj-three-weeks', right: 'doctor',
      story: 'Raj had a cold that cleared up, but his voice has stayed a little husky for three weeks and is not getting better. He can still talk and sing with it, and nothing hurts.',
      reason: 'Three weeks and not getting better: well past 7 to 10 days. See a doctor.' }),
    care({ id: 'care-lin-lump', right: 'now', slips: { rest: 'waited', doctor: 'waited' },
      story: 'Lin’s voice went a little hoarse with a cold three days ago. Today she noticed a lump on the side of her neck.',
      reason: 'A lump in the neck is a warning sign: see a doctor right away, however short the time.' }),
    care({ id: 'care-joe-cold', right: 'rest',
      story: 'Joe has a cold, and for two days his voice has been rough. Nothing hurts and nothing else is wrong.',
      reason: 'Two days into a cold, no warning sign: rest it, and do not whisper or shout while it gets better.' }),
    care({ id: 'care-kay-two-weeks', right: 'doctor',
      story: 'Kay had a cold two weeks ago. The cold is gone, but her voice is still mildly rough and no better than last week. She can use it as usual, and nothing hurts.',
      reason: 'Two weeks and not getting better: past 7 to 10 days, cold or not. See a doctor.' }),
    care({ id: 'care-ben-swallow', right: 'now', slips: { rest: 'waited', doctor: 'waited' },
      story: 'Ben’s voice went hoarse with a cold four days ago, and now it hurts when he swallows.',
      reason: 'Pain when swallowing is a warning sign: see a doctor right away.' }),

    // ----- held back for the review -----
    care({ id: 'care-ann-lost', right: 'now', slips: { rest: 'waited', doctor: 'waited' },
      story: 'Ann’s voice went almost completely five days ago, with no cold, and she still can barely make a sound.',
      reason: 'A voice lost for more than a few days is a warning sign: see a doctor right away.' }),
    care({ id: 'care-max-cold', right: 'rest',
      story: 'Max has a cold and has been hoarse for two days. Nothing hurts and he is breathing fine.',
      reason: 'Two days into a cold, no warning sign: rest your voice and give it time.' }),
    care({ id: 'care-liv-weeks', right: 'doctor',
      story: 'Liv’s cold ended a while ago, but her voice has been a little rough for three weeks, no better. She can use it as usual.',
      reason: 'Three weeks and not getting better: see a doctor.' }),
    care({ id: 'care-ada-blood', right: 'now', slips: { rest: 'waited', doctor: 'waited' },
      story: 'Ada’s voice has been hoarse with a cold for a few days, and this morning she coughed up a little blood.',
      reason: 'Coughing up blood is a warning sign: see a doctor right away.' }),
    care({ id: 'care-tom-no-cold', right: 'doctor',
      story: 'Tom has not been ill, but his voice has been a little husky for nearly three weeks and is no better. He can still use it as usual.',
      reason: 'About three weeks and not getting better, with no cold to explain it: see a doctor.' }),
    care({ id: 'care-eva-cold', right: 'rest',
      story: 'Eva caught a cold three days ago and her voice is hoarse. Nothing hurts, and nothing else is wrong.',
      reason: 'Three days into a cold, no warning sign: rest your voice and give it time.' })
  ]);
})();
