// Scams, Unit Three, part two: the two questions, a check on each, and one whole story worked from the top. The app prints,
// on a question card: the question, each answer with when it is given, why it decides, and for every pair already compared the
// question that separates it. Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- The first question ---------- */
  { id: 'q-A1', kind: 'question', step: 'A1',
    h: 'The first question: {q:A1}',
    link: 'Each of the three scams has shown you this question, with the one answer that fits it. Here it is in one place.',
    decides: [
      'The three scams are told apart by what they ask you to type or press. A page that wants a password is {o:phishing}. A person who wants you to pass on a code is {o:codescam}. A {t:permission} that wants you to press Allow for an app is {o:appscam}. {o:realsignin} can come in any of the three forms, so this question does not name it.'
    ],
    how: [
      { do: 'Read the whole request, the last sentence too.', why: 'What it wants is often in the last line.' },
      { do: 'Look for a field where you would type a password.', why: 'That is {a:A1.password}.' },
      { do: 'Look for a number that has just come to your phone, and a person who wants it.', why: 'That is {a:A1.code}.' },
      { do: 'Look for two buttons, Allow and Cancel, and a list of what an app may do.', why: 'That is {a:A1.allow}.' },
      { do: 'If a page asks for a password and then for a code, go by the password.', why: 'The page is the fake part, and the code is only what it collects next.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-A1', kind: 'check', after: 'A1',
    case: 'ac-chk-a1',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- The second question ---------- */
  { id: 'q-A2', kind: 'question', step: 'A2',
    h: 'The second question: {q:A2}',
    link: 'The first question told the three scams apart, but it could not say whether a request is real, because the real thing asks for the same three things. This one can.',
    decides: [
      'With a real one, you started it, and it asks no more than the job needs. A copy came to you, or wants far more than you set out to do. Say you found a free tool yourself, but it wants to delete all your mail: you started it, but it asks for too much, so the answer is still no.',
      'You can answer this on the spot, from what is in front of you and your own memory. You do not need to know who is behind it.'
    ],
    how: [
      { do: 'Ask what you were doing before this appeared.', why: 'If you set out to sign in, pay or connect an app, you started it.' },
      { do: 'Say where you started from: your own app, or an address you typed.', why: 'A link in a message is never where you started from, and neither is a number a caller gave you.' },
      { do: 'Read what it asks for, and check that the job needs it.', why: 'A photo app needs your photos, not your whole mailbox.' },
      { do: 'If you are not sure you started it, answer no: close it and start again from your own app.', why: 'If it was real, it will be waiting there.' }
    ],
    whenBoth: 'Sometimes it is hard to say which of two names a story is. Each pair below has one question that tells it apart.' },

  { id: 'check-A2', kind: 'check', after: 'A2',
    case: 'ac-chk-a2',
    ask: { type: 'step', step: 'A2' } },

  /* ---------- one whole story, watched ---------- */
  { id: 'worked-cv', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through. The most noticeable thing in it is not what decides it, so read to the end.',
    case: 'ac-wk-cv',
    steps: [
      { step: 'D1',
        reason: 'Fern is not asked to install anything, pay anything or give facts about herself. She is asked to sign in with her email account: {cue:D1}. That is a way into an account.' },
      { step: 'A1',
        reason: 'Her provider\'s {t:permission} asks her to press Allow for an app: {cue:A1}. No password is typed into the site. What is asked is an Allow.' },
      { step: 'A2',
        reason: [
          'This is where the story points the wrong way. Fern did set out to do this: she wanted her résumé checked, and she opened the site herself.',
          'But the second half fails. Look at what the {t:permission} asks: {cue:A2}. Checking a résumé needs a résumé, not every email Fern has, or the right to send and delete them. So the answer is no.'
        ] }
    ],
    hold: {
      neighbor: 'realsignin',
      prompt: { kind: 'reason',
        lead: 'Fern went looking for the site herself, and the {t:permission} is her own provider\'s, so this can look like a real Allow. What decides it?',
        choices: [
          { id: 'a', text: 'Fern started it herself, by searching for a résumé checker.',
            note: 'True, and it is why this looks like {o:realsignin}. But starting it yourself is only half of it: it must also ask only for what the job needs.' },
          { id: 'b', text: 'The {t:permission} comes from her own email provider, not from the site.',
            note: 'True, but it is real in all three scams too, so it settles nothing.' },
          { id: 'c', text: 'The {t:permission} asks to read, send and delete all her email.' }
        ],
        answer: 'c' },
      reason: [
        'A real one needs two things: you started it, and it asks only for what the job needs. The second fails here: Fern set out to check a résumé, and the {t:permission} asks for her whole mailbox.',
        'So the answer is {a:A2.notfit}.'
      ]
    },
    impression: {
      resembles: 'ac-shareddoc', first: 'ac-planner-own',
      text: [
        'A second look: does this remind you of a story you know? Someone who went looking for an app herself may bring back Omar and his meeting planner, which was {o:realsignin}. So the likeness and the questions seem to disagree.',
        'When that happens, go back to the questions and find the words that answer them: {cue:A2}. Omar\'s {t:permission} asked to see his calendar and nothing else. Fern\'s asks for all her email, like Rafa\'s shared document. So the answer stands.'
      ]
    } }
]);
