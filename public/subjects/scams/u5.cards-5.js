// Scams, Unit Five, part two (close): the whole worked case, and the two cards that close the unit after the drill.
// This is an action subject, so the unit ends with a plan card (lesson standard A11, P26). Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  { id: 'worked-room', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'u5-w-room',
    steps: [
      { step: 'D1',
        reason: 'The ad and the showing are the story. What is asked of Ben is in the last sentence: {cue:D1}. That is a request for facts about him. Nothing asks him to install, sign in or pay, so the answer is {a:D1.details}.' },
      { step: 'F1',
        reason: 'A passport, a photo of him holding it and a tax number are facts that identify him: {cue:F1}. He is not asked about his life. The answer is {a:F1.identify}.' },
      { step: 'F2',
        reason: 'This is the step where the case misleads. Ben did begin it: he answered an ad on a site he has used for years. But the question has two halves, and the second is whether what is asked is what the job needs. The job is holding a room until a showing: {cue:F2}. That needs a name and a way to reach him, and it does not need a photo of him holding his passport or a tax number. It asks for more than the job needs, so the answer is {a:F2.notfit}.' }
    ],
    hold: {
      neighbor: 'realdetails',
      prompt: { kind: 'reason',
        lead: 'Ben began this, on a site he has used for years, so the case can look like a request for facts about something he started.',
        choices: [
          { id: 'a', text: 'Ben answered the ad himself, on a site he has used for years.',
            note: 'True, and it is why the case can look like {o:realdetails}. But beginning it is only half of what the question asks. The other half is whether what is asked is what the job needs.' },
          { id: 'b', text: 'To hold a room until a showing, the writer asks for a photo of Ben’s passport, a photo of him holding it and his Social Security number.' },
          { id: 'c', text: 'The writer is friendly and sounds sure of himself.',
            note: 'True, but a friendly manner does not separate the two names.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realdetails} you must be able to point to this: {needs:realdetails}. Both halves are needed, and the second is missing. A room held until a showing does not need a photo of him holding his passport.',
        '{test:identitytheft~realdetails} Here the second half is not met, so the answer is {a:F2.notfit}.'
      ]
    },
    impression: {
      resembles: 'u5-grant', first: 'u5-bank',
      text: [
        'Now the second look: does this case look like one you know? A person who answers an ad and is asked for a passport may bring back Chen and the savings account first, and Chen’s case was {o:realdetails}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it: {cue:F2}. Chen’s credit union asked for a passport after he decided to open an account, and did not ask for a photo of him holding it. The case this one really looks like is the energy grant: a pleasant offer, and a request for more than any of it needs. So the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'A request for facts about you is {a:D1.details}, unless it also asks for something earlier in the list (a program, a way into an account, money). Then ask {q:F1} Is it papers and numbers that identify you, or is it your life?',
      'Then ask whether it fits: did you begin it, through {t:already}, and is what they ask for what you came to do? The facts themselves never decide: the same passport is asked for by {o:realdetails} and by {o:identitytheft}.',
      'A request that came to you does not fit, however real it sounds, and knowing your name, your address or your date of birth proves nothing. What settles whether it is real is {t:check}: stop, and contact them yourself through {t:already}.',
      'A chat that asks for nothing is the stage before the ask, and not a sign of safety. When the ask comes, it will be for money or for papers.',
      'Most requests for facts are real. A doctor’s form, a new account or a job you accepted all fit.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: 'A plan is one line: if I see this, then I will do that. The moment a request arrives is the worst moment to think of what to do. The lines below are examples to start from: use one, change it, or write your own.',
    cues: [
      { cue: 'a call, a message or a stranger that I did not start asks for my date of birth, my address or my card number',
        then: 'say that I will call back, end the call or leave the message, and contact them at a number I already had, such as the one on my card or my bill' },
      { cue: 'an offer or a job asks for my passport, or a photo of me holding it, before anything is agreed',
        then: 'send nothing, and ask the company myself, through its own website, whether it sent the message' },
      { cue: 'a stranger who texted by mistake, or a new contact online, asks about my work, my home or my family',
        then: 'not answer questions about myself, block the number, and tell someone I trust about the chat' }
    ] }
]);
