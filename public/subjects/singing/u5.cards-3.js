// Singing, Unit Five, part three: the question as a question, the check on it, the worked story, and the two cards that close
// the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26 call for a plan
// card). There is no tie-break in this question and so no exception card: the four sounds are told apart by two checks and by
// whether the words can be followed.
// The app prints, on the question card: the question, each answer with when it is given and the name it leads to, why it
// decides, and for every pair already compared the question that separates it.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('singing', 'u5', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'T1',
    h: 'The question to ask every time',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'How much you dislike the sound does not decide it. Two checks you can do in a minute, and the words themselves, do.'
    ],
    how: [
      { do: 'Hold your nose shut and sing an “ah”.', why: 'If the sound changes a lot, it is {o:nasal}.' },
      { do: 'If it changes little, look in a mirror and sing again.', why: 'A mouth that barely opens, with a dull sound, is {o:muffled}.' },
      { do: 'If the mouth is open and the sound is clear, ask whether a listener could write the words down.', why: 'If the consonants are soft or missing and they could not, it is {o:mumbled}.' },
      { do: 'If the words come through and you only dislike a recording, stop.', why: 'That is {o:recorded}, and there is nothing to change.' },
      { do: 'Find the exact words that show it: what you hear, the mouth in the mirror, the words a listener loses.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Two of these can feel alike. Each pair below has one thing to check that tells it apart.' },

  { id: 'check-how', kind: 'check', after: 'T1',
    case: 't-c-joel-booth',
    ask: { type: 'step', step: 'T1' } },

  /* ---------- a whole story, watched ---------- */
  { id: 'worked-back-row', kind: 'worked',
    h: 'One whole story, where the quiet singer points the wrong way',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 't-w-cleo-back-row',
    steps: [
      { step: 'D1',
        reason: 'Cleo’s notes and her breath are fine: {cue:D1}. What the director cannot get past is how the words sound, so the first answer is {a:D1.tone}.' },
      { step: 'T1',
        reason: 'A quiet singer with her shoulders hunched, and a director who cannot make out a word, can look like {o:muffled}. But the mirror shows an open mouth and a clear voice: {cue:T1}. With the ends of the words missing, the answer is {a:T1.blur}.' }
    ],
    hold: {
      neighbor: 'muffled',
      prompt: { kind: 'reason',
        lead: 'The director cannot make out the words, and Cleo sings quietly, so this can look like {o:muffled}. What decides it?',
        choices: [
          { id: 'a', text: 'The director cannot make out a word from the back row.',
            note: 'True, and it is why this looks like {o:muffled}. But lost words come from both, so they settle nothing.' },
          { id: 'b', text: 'Her mouth is wide open and her voice is clear, but the ends of her words are missing.' },
          { id: 'c', text: 'Cleo stands with her shoulders hunched and sings quietly.',
            note: 'True, but it is about how she stands, not about the sound.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:muffled}, it would need this: {needs:muffled}. Cleo’s mouth is wide open and her sound is clear, so the sound is not what is dull. Her words are lost for another reason: the ends of them are missing.',
        '{test:muffled~mumbled} Here the mouth is open and the sound is clear, with the word endings gone, so the answer is {a:T1.blur}.'
      ]
    },
    impression: {
      resembles: 't-wes-river-song', first: 't-ines-mirror',
      text: [
        'A second look: does this remind you of a story you know? A quiet singer whose words are lost may bring back Ines at the bathroom mirror, whose story was {o:muffled}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:T1}. Ines’s mouth barely opened and her sound was dull. Cleo’s mouth is wide open and her sound is clear, as in Wes’s river song, where the ends of the words disappeared. So this story really looks like Wes’s, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now tell all four apart on your own.',
    carry: [
      'Before you change anything, check what you are hearing: hold your nose shut and sing an “ah”, look in a mirror, and ask whether a listener could write the words down.',
      'A big change with your nose held is {o:nasal}. A mouth that barely opens, with a dull sound, is {o:muffled}. An open mouth and a clear sound with the words running together is {o:mumbled}.',
      'The voice you hear from inside your head is not the one everyone else hears. A voice that sounds odd only on a recording, with a clear sound and clear words, is {o:recorded}, and nothing needs fixing.',
      'A recording can sound odd and still be fine. Judge it by the checks, not by the surprise.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in, or leave it.',
    intro: [
      'A plan is one line: if I notice this, then I will do that. Decide it now, because the middle of a song is the worst moment to think. These are examples to start from: use one, change it, or write your own.'
    ],
    cues: [
      { cue: 'my voice sounds thin or strange on a recording',
        then: 'hold my nose shut on an “ah”, check that the words are clear, and if both are fine, leave my singing alone and record again next week' },
      { cue: 'my singing sounds pinched, as if it comes out of my nose',
        then: 'yawn, sing an “ah” keeping the back of my mouth lifted, and check again with my nose held' },
      { cue: 'my mouth barely opens in the mirror, or a listener says my singing sounds dull',
        then: 'put two fingers between my teeth and sing “ah”, rest my tongue behind my lower front teeth, and sing to a mirror' },
      { cue: 'a friend cannot make out my words',
        then: 'speak the words in rhythm, overdo every consonant, then sing again and record it' }
    ] }
]);
