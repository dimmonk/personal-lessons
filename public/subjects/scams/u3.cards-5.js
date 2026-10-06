// Scams, Unit Three, part two: the two questions, a check on the second, and one whole case worked from the top. The app prints,
// on a question card: the question, what it is for, each answer with when it is given, and for every pair already compared the
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
      'Read the request, the last sentence included, and put your finger on the thing itself: a field for a password, a number that has just come to your phone and a person who wants it, or two buttons marked Allow and Cancel with a list of what an app may do. If you cannot point to the words, you do not have an answer yet.',
      'When a page asks for a password and then for a code, the answer is the one for the password.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-A1', kind: 'check', after: 'A1',
    case: 'ac-chk-a1',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- The second question ---------- */
  { id: 'q-A2', kind: 'question', step: 'A2',
    h: 'The second question: {q:A2}',
    link: 'The first question told the three scams apart. It could not say whether a request is real, because the real thing asks for the same three things. This one can.',
    decides: [
      'With a real one, you began it, and what it asks is no more than the task needs. A copy came to you, or wants far more than you set out to do. A tool you found yourself that wants to delete all your mail passed the first half and failed the second, so the answer is still no.'
    ],
    how: [
      'Ask yourself what you were doing before this appeared. If you set out to sign in, to pay or to connect an app, and can say where you started from, the first half is yes. A link in a message is never where you started from, and neither is a number a caller gave you. Then read what is asked, and ask whether the task needs it.',
      'You can answer this at the moment, from what is in front of you and your own memory. You do not need to know who is behind it. If you are not sure whether you started it, the answer is no: close it and start again from your own app.'
    ],
    whenBoth: 'Sometimes it is hard to say which of two names a case is. Each pair below has one question that tells it apart.' },

  { id: 'check-A2', kind: 'check', after: 'A2',
    case: 'ac-chk-a2',
    ask: { type: 'step', step: 'A2' } },

  /* ---------- one whole case, watched ---------- */
  { id: 'worked-cv', kind: 'worked',
    h: 'A whole case, where the story points the wrong way',
    link: 'Before you run a case yourself, watch one being run from the top. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'ac-wk-cv',
    steps: [
      { step: 'D1',
        reason: 'Nothing here is to be installed or opened, and no money or facts about Fern are asked for. She is asked to sign in with her email account: {cue:D1}. That is a request about a way into an account.' },
      { step: 'A1',
        reason: 'What her provider\'s {t:permission} asks her to do is press Allow, for an app: {cue:A1}. No password is typed into the site. What is asked is an Allow.' },
      { step: 'A2',
        reason: [
          'This is where the story points the wrong way. Fern did set out to do this: she wanted her résumé checked and she opened the site herself.',
          'But the second half fails on its own. Look at what the {t:permission} asks: {cue:A2}. Checking a résumé needs a résumé. It does not need every email Fern has, or the right to send and delete them. So the answer is no.'
        ] }
    ],
    hold: {
      neighbor: 'realsignin',
      prompt: { kind: 'reason',
        lead: 'Fern went looking for the site herself, and the {t:permission} is her own provider\'s, so the case can look like a real Allow.',
        choices: [
          { id: 'a', text: 'Fern started it herself, by searching for a résumé checker.',
            note: 'True, and it is why the case can look like {o:realsignin}. But starting it yourself is only half of what a real one needs. The other half is that it asks only what the task needs.' },
          { id: 'b', text: 'The {t:permission} comes from her own email provider.',
            note: 'True. The {t:permission} is real in all three scams too, so it settles nothing.' },
          { id: 'c', text: 'The {t:permission} asks to read, send and delete all her email, for a job that needs only a résumé.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:realsignin} you must be able to point to this: {needs:realsignin}. The last part of it, nothing asked beyond what you set out to do, fails here: Fern set out to check a résumé, and the {t:permission} asks for her whole mailbox.',
        '{test:appscam~realsignin} Here the {t:permission} asks for far more than the job, so the answer is {a:A2.notfit}.'
      ]
    },
    impression: {
      resembles: 'ac-shareddoc', first: 'ac-planner-own',
      text: [
        'Now a second look: does this case look like one you know? A person who went looking for an app herself may bring back Omar and his meeting planner, which was {o:realsignin}. So the likeness and the questions seem to disagree.',
        'When that happens, go back to the questions and find the words that answer them: {cue:A2}. Omar\'s {t:permission} asked to see his calendar and nothing else. Fern\'s asks for all her email, like Rafa\'s shared document. So the answer stands.'
      ]
    } }
]);
