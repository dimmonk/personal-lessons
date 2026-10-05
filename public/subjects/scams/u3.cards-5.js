// Scams, Unit Three, part four (first half): the key's two questions as questions, a check on each, and the two cases worked
// from the top. The app prints, on a question card: the question, what it is for, each answer with when it is given and what it
// keeps and rules out, why it decides, and for every pair already compared the question that separates it and the key's tie-break.
// Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  /* ---------- The first question ---------- */
  { id: 'q-A1', kind: 'question', step: 'A1',
    h: 'The first question: {q:A1}',
    link: 'You have now met all four names, and each of the three scams has shown you the question about what you type or press, with the one answer that fits it. This card puts the question and its three answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'The three scams are told apart by what they ask you to type or press. A page that wants a password is {o:phishing}. A person who wants you to pass on a code is {o:codescam}. A {t:permission} that wants you to press Allow for an app is {o:appscam}. {o:realsignin} can come in any of the three forms, so this question does not name it: all three answers keep it.',
      'The habit that guards against each one is different too: for a password, never typing it into a page that a message brought you to; for a code, never reading it out; for an Allow, reading the list on the {t:permission}, and removing apps afterwards. That is why the three scams get three different names.',
      'This question alone tells the pairs of scams apart: {o:phishing} from {o:codescam}, {o:phishing} from {o:appscam} and {o:codescam} from {o:appscam}. No other question in this unit does it.'
    ],
    how: [
      'Read the request, the last sentence included, and ask what you are being asked to put in or to press. Look for the thing itself: a field for a password, a number that has just come to your phone and a person who wants it, or two buttons marked Allow and Cancel with a list of what an app may do.',
      'If you can put your finger on the words, you have an answer. If you cannot, you do not have one yet.',
      'You can answer this question at the moment the request is made, because you are looking at it. What you cannot answer at that moment is who is really behind it, and whether the company named is the company that sent it. The key never asks that, because a copy can be made to look exactly right.',
      'Sometimes a case asks for two things. When a page asks for a password and then for a code, the key takes the password, as the held order showed.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below is set side by side in this unit, and each has one question that separates it.' },

  { id: 'check-A1', kind: 'check', after: 'A1',
    case: 'ac-chk-a1',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- The second question ---------- */
  { id: 'q-A2', kind: 'question', step: 'A2',
    h: 'The second question: {q:A2}',
    link: 'The question about what you type or press told the three scams apart. It did not say whether a request is real, and it could not, because the real thing is kept by all three of its answers. This card gives the question that does.',
    decides: [
      '{o:realsignin} asks for the same things as the three scams: a password, a code, an Allow. So the question about what you type or press cannot tell it from them. This second question can, and it is the question that matters most in this unit. With a real one, you were the one who began it, and what it asks is no more than the task needs. A copy came to you, or wants far more than you set out to do.',
      'Each of the three scams has been set side by side with its real twin: {o:phishing} with {o:realsignin}, {o:codescam} with {o:realsignin}, and {o:appscam} with {o:realsignin}. In each pair the question about what you type or press gives the same answer, and this question gives different ones.',
      'The answer has two halves, and a case can fail either. The first is whether you started it, through {t:already}: an app that was on your phone, an address you typed or saved, a number on your card or bill. The second is whether it asks only what the task needs: a sign-in needs a password, a payment needs a code, a calendar app needs a calendar. A tool that you found yourself, and that wants to delete all your mail, has passed the first half and failed the second, so the answer is still no.'
    ],
    how: [
      'Ask yourself what you were doing before this appeared. If you can say that you set out to sign in, to pay or to connect an app, and say where you started from, the first half is yes. A link in a message is never where you started from, and neither is a number that a caller gave you, even if you are the one who taps it or dials it.',
      'Then read what is asked, and ask whether the task needs it. A sign-in page asks for a password and no more.',
      'You can answer this question at the moment, from what the page, the call or the {t:permission} says and from your own memory of what you were doing. What you cannot know at that moment is whether the other side is who it says it is. You do not need to know: if it fits something you started, you started it, and if you did not, it does not fit.',
      'If you are not sure whether you started it, the answer is no. Close it, and start again from your own app.'
    ],
    whenBoth: 'Sometimes it is hard to say which of two names a case is. Each pair below has been set side by side in this unit, and this is the question that tells it apart.' },

  { id: 'check-A2', kind: 'check', after: 'A2',
    case: 'ac-chk-a2',
    ask: { type: 'step', step: 'A2' } },

  /* ---------- two whole cases, watched ---------- */
  { id: 'worked-code', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the four names and the key\'s two questions about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'ac-wk-code',
    steps: [
      { step: 'D1',
        reason: 'Nothing here is to be installed, opened or shared, no money is asked for and no facts about Callum. What is asked is {cue:D1}. That is a request about a way into an account, and a code is one of the three things such a request can be for.' },
      { step: 'A1',
        reason: 'Now ask what he is asked to type or press. No page wants a password and no {t:permission} asks him to press Allow. A text has arrived with a six-digit code, and the man wants it handed over: {cue:A1}. What is asked for is a code.' },
      { step: 'A2',
        reason: 'Now ask whether it fits something Callum started. It does not. He was cooking when the phone rang, and the call came to him: {cue:A2}. A code is for typing into a sign-in that you started, and he started nothing. So the answer is no.' }
    ],
    hold: {
      neighbour: 'realsignin',
      prompt: { kind: 'reason',
        lead: 'The code is real, and it comes from Callum\'s own streaming service, so the case can look like the real thing.',
        choices: [
          { id: 'a', text: 'The code is real, and it comes from Callum\'s own streaming service.',
            note: 'True, and it is why the case can look like {o:realsignin}. But a real code is typed in by the person it was sent to. Here it is asked for by someone else.' },
          { id: 'b', text: 'Callum did not ask for the code. A man who rang him wants it read out.' },
          { id: 'c', text: 'The man says someone is signing in from another country.',
            note: 'True, and it is the story the man tells. It is the reason he gives for the call, and a reason does not show who started anything.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realsignin} you must be able to point to this: {needs:realsignin}. Callum did not start anything: the call came to him, and the code was asked for by the caller. The code itself is real, which is exactly why this scam works.',
        'It is the question from Hana\'s two cases. {test:codescam~realsignin} Here a caller asks for it, so the key\'s answer is {a:A2.notfit}.'
      ]
    },
    impression: {
      resembles: 'ac-phoneorder',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the phone-order call: someone rings, says there is a problem on the account, and a real code arrives while they are talking.',
        'Here the key and the likeness agree, so the answer stands. The key\'s questions come first, because they make you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key\'s questions and find the words in the case that answer them. The second whole case shows how.'
      ]
    } },

  { id: 'worked-cv', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The streaming call was a clean case: one thing was going on, and nothing pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'ac-wk-cv',
    steps: [
      { step: 'D1',
        reason: 'Nothing here is to be installed or opened, and no money or facts about Fern are asked for. She is asked to sign in with her email account: {cue:D1}. That is a request about a way into an account.' },
      { step: 'A1',
        reason: 'Now ask what she is asked to type or press. The site says to sign in with her email account, but what her provider\'s {t:permission} then asks her to do is press Allow, for an app: {cue:A1}. No password is typed into the site. What is asked is an Allow.' },
      { step: 'A2',
        reason: [
          'Now ask whether it fits something she started. This is where the story points the wrong way. Fern did set out to do this: she wanted her CV checked and she opened the site herself. She found it by searching, and the first result of a search can be an advert that anyone can buy, so even the first half is doubtful.',
          'But you do not need to settle that, because the second half fails on its own. Look at what the {t:permission} asks: {cue:A2}. Checking a CV needs a CV. It does not need every email Fern has, or the right to send and delete them. So the answer is no.'
        ] }
    ],
    hold: {
      neighbour: 'realsignin',
      prompt: { kind: 'reason',
        lead: 'Fern went looking for the site herself, and the {t:permission} is her own provider\'s, so the case can look like a real Allow.',
        choices: [
          { id: 'a', text: 'Fern started it herself, by searching for a CV checker.',
            note: 'True, and it is why the case can look like {o:realsignin}. But starting it yourself is only half of what a real one needs. The other half is that it asks only what the task needs.' },
          { id: 'b', text: 'The {t:permission} comes from her own email provider.',
            note: 'True. The {t:permission} is real in all three scams too, so it settles nothing.' },
          { id: 'c', text: 'The {t:permission} asks to read, send and delete all her email, for a job that needs only a CV.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:realsignin} you must be able to point to this: {needs:realsignin}. The last part of it, nothing asked beyond what you set out to do, fails here. Fern set out to check a CV, and the {t:permission} asks for her whole mailbox.',
        'It is the question from Omar\'s two cases. {test:appscam~realsignin} Here the {t:permission} asks for far more than the job, so the key\'s answer is {a:A2.notfit}.'
      ]
    },
    impression: {
      resembles: 'ac-shareddoc', first: 'ac-planner-own',
      text: [
        'Now the second look: does this case look like one you know? A person who went looking for an app herself, to do a job of her own, may bring back Omar and his meeting planner first, and that case was {o:realsignin}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key\'s questions and find the words in the case that answer them. They are {cue:A2}. Omar\'s {t:permission} asked to see his calendar and nothing else. Fern\'s asks for all her email. So the case this one really looks like is Rafa\'s shared document, where the {t:permission} asked for far more than a document needs, and the key\'s answer stands.'
      ]
    } }
]);
