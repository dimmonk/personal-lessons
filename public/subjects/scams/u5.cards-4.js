// Scams, Unit Five, part three (first half): the key's two questions, each followed by a check on all its answers.
// The app prints, on a question card: the question, what it is for, each answer with when it is given, why it decides,
// and for every pair already compared the question that separates it. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  /* ---------- The first question of the branch ---------- */
  { id: 'q-f1', kind: 'question', step: 'F1',
    h: 'The question about what they want to know',
    link: 'You have seen two questions at the foot of the cards for the new names. This card takes the one you met last, {q:F1}, and puts it in one place with both its answers. It also says why it is asked.',
    decides: [
      'It also separates the real request from the chat. Take {o:realdetails} and {o:friendlychat}. The receptionist at the Marlow Surgery asks Reg for his date of birth and his address, because that is what setting up a record needs. A stranger asks Sam what he does for work and whether he lives alone, because that is what getting to know him needs, and nothing Sam began needs it. Both ask you about yourself. What they want to know about is not the same thing, and the question is about that.'
    ],
    how: [
      'Read what you are asked about, and find the words that show it. Is it a document, a photo of one, an ID, tax or card number, your date of birth or your address? That is {a:F1.identify}. Is it the sort of thing a friend asks, such as what you do for a living, who you live with, what you earn or what you plan to do, asked by someone you know only through messages, who reached you out of nowhere, with nothing like a paper or a number asked for yet? That is {a:F1.life}.',
      'If a case has both, the papers decide. A chat that has reached a request for a passport is {a:F1.identify}, however long the chat has gone on and however friendly it is.',
      'You can answer this question at the moment you read the request, before you give anything. You do not need to know who is asking, or whether they are honest. What you cannot know at that moment is what they will do with what you give, and whether the person is who they say they are. The second is what {t:check} settles, afterwards, by contacting them yourself through {t:already}. The first may show only weeks later, which is why the advice is to stop before you give anything.'
    ],
    whenBoth: 'Sometimes both answers seem to fit, because a chat can turn to papers. When a case has both, the papers decide, as in the case of the gift that needs a passport. Each pair below has been set side by side, and each has a question that separates it.' },

  { id: 'check-f1', kind: 'check', after: 'F1',
    case: 'u5-qf1',
    ask: { type: 'step', step: 'F1' } },

  /* ---------- The second question of the branch ---------- */
  { id: 'q-f2', kind: 'question', step: 'F2',
    h: 'The question about whether it fits',
    link: 'The first two names, {o:realdetails} and {o:identitytheft}, were separated by this question, and every case since has been answered by it as well. This card puts {q:F2} in one place with both its answers.',
    decides: [
      'Two things differ between a real request and its copy, and you can see both in the request: whether you began it, through {t:already}, and whether what is asked is what the job needs. If both are so, the facts are going where you meant to send them. If either is not, they are not, however convincing the rest of the request sounds.',
      'It is the same question, in the same words, that is asked of a sign-in page: {q:A2}. There it separates {plain:realsignin} from the scams that copy it. Here it separates a real request for facts from its copies.'
    ],
    how: [
      'Ask two things, in this order. First: did I begin this? You began it if you rang the number on your card or your bill, typed an address in yourself, opened an app you had installed, applied or ordered or booked, or walked into their office. You did not begin it if a call, a text, an email, a pop-up or a stranger reached you first. A number, a link or an app that came with a message is never one you already had, even if you are the one who dials it or taps it.',
      'Second, even if I began it: does what they ask for match what I came to do? Put the list next to the job. A new account needs proof of who you are. A question about a bill needs a date of birth. An offer of work needs your right to work. A room held until a viewing needs a name and a way to reach you. If the list goes further than the job, the answer is no.',
      'Both can be answered at the moment you are asked, from the request itself, before you give anything. Two things cannot be answered at that moment: whether the other side is honest, and what they will do with the facts. Only {t:check} settles the first, and the second may show only weeks later.'
    ],
    whenBoth: 'Two things can seem to point opposite ways. You may have begun it, and it may still ask for far more than the job needs: the answer is no, because the question has two halves and both must be met. Or it may have reached you, and sound exactly right, like the call that used Gabriela’s name: the answer is no too. This question is answered by what you can see in the request, and not by how it sounds.' },

  { id: 'check-f2', kind: 'check', after: 'F2',
    case: 'u5-qf2',
    ask: { type: 'step', step: 'F2' } },

  /* ---------- Three whole cases, watched ---------- */
  { id: 'worked-hearing', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the three names and the two questions after the first. Before the drill, watch three cases being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'u5-w-hearing',
    steps: [
      { step: 'D1',
        reason: 'Go down the first question’s list. Nothing here asks Ruth to install a program, open a file or let anyone watch her phone or computer. Nothing asks her to sign in, give a code or press Allow, and nothing asks her for money. What is asked is: {cue:D1}. That is a request for her to tell the clinic facts about herself, so the answer is {a:D1.details}.' },
      { step: 'F1',
        reason: 'What does the receptionist want to know about Ruth? A date of birth and the first line of an address: {cue:F1}. Those are facts that identify her. She is not asked about her work, her family or her plans, so the answer is {a:F1.identify}.' },
      { step: 'F2',
        reason: 'Did Ruth begin this, and does it fit? She rang the number on her own appointment letter, which is a way she already had, and the facts are only to find her record: {cue:F2}. Both halves are met, so the answer is {a:F2.fits}.' }
    ],
    hold: {
      neighbour: 'identitytheft',
      prompt: { kind: 'reason',
        lead: 'The receptionist asks for a date of birth and an address, which are facts that identify Ruth, so the case can look like a request for facts that someone could use to take her place.',
        choices: [
          { id: 'a', text: 'The receptionist asks for her date of birth and the first line of her address.',
            note: 'True, and it is why the case can look like {o:identitytheft}. But the same facts are asked for in both names, so they cannot settle which of the two this is.' },
          { id: 'b', text: 'Ruth rang the number on her own appointment letter, and the receptionist asks only for what is needed to find her record.' },
          { id: 'c', text: 'The clinic is called Alder Hearing, and its name is on her letter.',
            note: 'True, but a name on a letter can be copied. It does not show who began the call.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:identitytheft} you must be able to point to this: {needs:identitytheft}. Nothing in Ruth’s case came to her, and nothing goes beyond what finding a record needs. She began it, through the number on her letter, and what is asked is what the job needs.',
        'It is the question from Dina’s two jobs. {test:identitytheft~realdetails} Here both halves are so, and the answer is {a:F2.fits}.'
      ]
    },
    impression: {
      resembles: 'u5-bank',
      text: [
        'You have your answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the savings account: a person who decided to do something, reached the other side through a way they already had, and was asked for a date of birth and an address.',
        'Here the questions and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The last whole case shows how.'
      ]
    } },

  { id: 'worked-running', kind: 'worked',
    h: 'A second whole case, with no papers asked for',
    link: 'The hearing test was a clean case that fitted. In this second case nothing is asked for that looks like papers at all, and the answers on the way are different ones. Watch which words each question picks out.',
    case: 'u5-w-running',
    steps: [
      { step: 'D1',
        reason: 'Nothing asks Pip to install a program, sign in, give a code, press Allow or pay anything. What is asked is about him: {cue:D1}. That is a request for him to tell someone about himself, so the answer is {a:D1.details}.' },
      { step: 'F1',
        reason: 'The sender reached him out of nowhere, and he has never met him: {cue:F1}. What the sender wants to know about is Pip’s life: where he lives, who with, and when he is away. No paper and no number has been asked for, so the answer is {a:F1.life}.' },
      { step: 'F2',
        reason: 'Did Pip begin it? No: {cue:F2}. A message from someone he does not know reached him first. The answer is {a:F2.notfit}.' }
    ],
    hold: {
      neighbour: 'realdetails',
      prompt: { kind: 'reason',
        lead: 'The messages are polite and each question is small, like a receptionist’s, so the case can look like a small, real request for facts.',
        choices: [
          { id: 'a', text: 'The sender is polite, and each question is small.',
            note: 'True, and it is why the case can look like {o:realdetails}. A real request is often polite and small too, so politeness cannot settle which of the two this is.' },
          { id: 'b', text: 'The messages came from someone Pip does not know, and they ask about his life, which nothing Pip began needs.' },
          { id: 'c', text: 'The chat has gone on for ten days.',
            note: 'True, but how long a chat goes on is not what the question asks about.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realdetails} you must be able to point to this: {needs:realdetails}. Pip did not begin anything. A stranger reached him, and what the stranger asks about, where he lives and who he lives with and when he is away, is not something any job Pip started could need.',
        'It is the question from the receptionist and the stranger. {test:friendlychat~realdetails} Here the questions are about his life and come from someone who reached him out of nowhere, so the answer is {a:F1.life}.'
      ]
    },
    impression: {
      resembles: 'u5-wrongno',
      text: [
        'Now the second look: does this case look like one you know? A stranger who writes after finding him through a running page should bring back Sam and the wrong number, and Sam’s case was {o:friendlychat}: a stranger out of nowhere, a chat that goes on, questions about his life, and nothing asked for yet.',
        'Here the questions and the likeness agree, so the answer stands. If a request for papers had come in the tenth day, they would have disagreed, and the questions would have given a different answer for the new request.'
      ]
    } }
]);
