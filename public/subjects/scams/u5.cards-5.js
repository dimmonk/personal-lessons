// Scams, Unit Five, part three (second half): the third whole case, and the three cards that close the unit after the drill. This is an action subject,
// so the unit ends with a plan card (lesson standard A11, P26). The app prints, on the recap: the unit's questions and answers
// with the names they lead to, and for each name what you must be able to point to, the question to ask when you spot it,
// and what to do. Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  { id: 'worked-room', kind: 'worked',
    h: 'A third whole case, where he began it and it still does not fit',
    link: 'The first two cases were clean, and in each the thing that decided it was easy to see. In this last case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'u5-w-room',
    steps: [
      { step: 'D1',
        reason: 'The advert and the viewing are the story. What is asked of Ben is in the last sentence: {cue:D1}. That is a request for facts about him. Nothing asks him to install, sign in or pay, so the key’s answer is {a:D1.details}.' },
      { step: 'F1',
        reason: 'A passport, a photo of him holding it and a tax number are facts that identify him: {cue:F1}. He is not asked about his life. The key’s answer is {a:F1.identify}.' },
      { step: 'F2',
        reason: 'This is the step where the case misleads. Ben did begin it: he answered an advert on a site he has used for years. If that were all the question asked, the key’s answer would be {a:F2.fits}. But the question has two halves, and the second is whether what is asked is what the job needs. The job is holding a room until a viewing: {cue:F2}. That needs a name and a way to reach him, and it does not need a photo of him holding his passport or a tax number. It asks for more than the job needs, so the key’s answer is {a:F2.notfit}.' }
    ],
    hold: {
      neighbour: 'realdetails',
      prompt: { kind: 'reason',
        lead: 'Ben began this, on a site he has used for years, so the case can look like a request for facts about something he started.',
        choices: [
          { id: 'a', text: 'Ben answered the advert himself, on a site he has used for years.',
            note: 'True, and it is why the case can look like {o:realdetails}. But beginning it is only half of what the question asks. The other half is whether what is asked is what the job needs.' },
          { id: 'b', text: 'To hold a room until a viewing, the writer asks for a photo of Ben’s passport, a photo of him holding it and his National Insurance number.' },
          { id: 'c', text: 'The writer is friendly and sounds sure of himself.',
            note: 'True, but a friendly manner does not separate the two names.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realdetails} you must be able to point to this: {needs:realdetails}. Both halves are needed, and the second is missing. A room held until a viewing needs a name and a way to reach him, and it does not need a photo of him holding his passport.',
        'It is the question from the gym adviser who asked for more than a bill needs. {test:identitytheft~realdetails} Here the second half is not met, so the key’s answer is {a:F2.notfit}.'
      ]
    },
    impression: {
      resembles: 'u5-grant', first: 'u5-bank',
      text: [
        'Now the second look: does this case look like one you know? A person who answers an advert and is asked for a passport may bring back Chen and the savings account first, and Chen’s case was {o:realdetails}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:F2}. Chen’s building society asked for a passport after he had decided to open an account, to meet a rule that applies to every customer, and it did not ask for a photo of him holding it. The case this one really looks like is the energy grant: a pleasant offer, and a request for more than any of it needs. So the key’s answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on requests for facts about you, on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any name, ask what is being asked right now. A request for facts about you is {a:D1.details}. If it asks for something earlier in the key’s list as well (a program, a way into an account, money), it takes that earlier answer instead.',
      'Then ask two things about the facts. First, {q:F1} Is it papers and numbers that identify you, or is it your life? Second, does it fit: did you begin it, through {t:already}, and is what they ask for what you came to do?',
      'The facts themselves never decide. The same date of birth and the same passport are asked for by {o:realdetails} and by {o:identitytheft}. Who began it, and what the job needs, are what decide.',
      'A request that came to you does not fit, however real it sounds, and a real caller gets the same answer as a copy of one. What settles whether it is real is {t:check}: stop, and contact them yourself through {t:already}.',
      'Knowing your name, your address or your date of birth proves nothing about someone who contacted you.',
      'A chat that asks for nothing is the stage before the ask. It is not a sign of safety. When the ask comes, the key has another answer ready for it, for money or for papers.',
      'Both questions can be answered at the moment you are asked, before you give anything. Whether the other side is honest, and what they will do with the facts, cannot, so stop before you give.',
      'Most requests for facts are real. Treating every one as a scam is a mistake too: a doctor’s form, a new account or a job you accepted all fit.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the three names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your own life.',
      'Pick one of the three and name an occasion of your own: somewhere you were asked, somewhere you almost answered, or a form you filled in without a thought. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'realdetails', occasion: 'The last time you registered for something, opened an account, applied for a job, or rang a company about something you own, and were asked for facts about yourself.' },
      { outcome: 'identitytheft', occasion: 'A job offer, a parcel text, a prize or a call from your bank that asked you to confirm your date of birth, your address or your card number.' },
      { outcome: 'friendlychat', occasion: 'A message from someone you had never met that was friendly and curious about your work, your home or your family.' }
    ],
    places: ['At home', 'At work', 'On my phone', 'On a call'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has taught you to name what you are asked. This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. It is worth writing down because the moment a request arrives is the worst moment to think of what to do, and the best moment to do something you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a call, a message or a stranger that I did not start asks for my date of birth, my address or my card number',
        then: 'say that I will ring back, end the call or leave the message, and contact them on a number I already had, such as the one on my card or my bill' },
      { cue: 'an offer or a job asks for my passport, or a photo of me holding it, before anything is agreed',
        then: 'send nothing, and ask the company myself, through its own website, whether it sent the message' },
      { cue: 'a stranger who texted by mistake, or a new contact online, asks about my work, my home or my family',
        then: 'not answer questions about myself, block the number, and tell someone I trust about the chat' },
      { cue: 'a form or an adviser that I went to myself asks for a lot of facts',
        then: 'ask what each one is for, give what the job needs, and give it only in their own place' },
      { cue: 'a chat that has been friendly for weeks starts to ask me for papers or for money',
        then: 'stop answering, and ask a friend to read the messages before I do anything else' }
    ] }
]);
