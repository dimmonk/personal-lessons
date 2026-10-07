// Scams, Unit Five, part two (close): the whole worked story, and the two cards that close the unit after the drill.
// This is an action subject, so the unit ends with a plan card (lesson standard A11, P26). Field guide: see u5.cards-1.js.

FC.cards('scams', 'u5', [

  { id: 'worked-room', kind: 'worked',
    h: 'One whole story, worked through',
    link: 'Watch one story worked through from the top. The first thing you notice is not what decides it, so read to the end.',
    case: 'u5-w-room',
    steps: [
      { step: 'D1',
        reason: 'The ad and the showing are the story, but what is asked of Ben is in the last sentence: {cue:D1}. That is a request for facts about him, with nothing to install, sign in to or pay, so the answer is {a:D1.details}.' },
      { step: 'F1',
        reason: 'A passport, a photo of him holding it and a tax number are facts that identify him: {cue:F1}. He is not asked about his life, so the answer is {a:F1.identify}.' },
      { step: 'F2',
        reason: 'This is the step where the story misleads. Ben did start it: he answered an ad on a site he has used for years. But the question has a second half, whether what they ask for matches the job. The job is holding a room until a showing, which needs a name and a way to reach him. The request goes much further: {cue:F2}. So the answer is {a:F2.notfit}.' }
    ],
    hold: {
      neighbor: 'realdetails',
      prompt: { kind: 'reason',
        lead: 'Ben started this, on a site he has used for years, so it can look like {o:realdetails}. What decides it?',
        choices: [
          { id: 'a', text: 'Ben answered the ad himself, on an apartment-share site he has used for years.',
            note: 'True, and it is why this looks like {o:realdetails}. But starting it is only half the question: the other half is whether what they ask for matches the job.' },
          { id: 'b', text: 'The writer wants a passport, a photo of Ben holding it and a tax number, only to hold a room.' },
          { id: 'c', text: 'The writer is friendly, and says the room is Ben’s if he wants it.',
            note: 'True, but a friendly manner does not tell the two names apart.' }
        ],
        answer: 'b' },
      reason: [
        'Ben did start it, so the first half is met. The second half is not: a room held until a showing does not need a photo of him holding his passport.',
        'Ask yourself: {test:identitytheft~realdetails} Here the second half fails, so the answer is {a:F2.notfit}.'
      ]
    },
    impression: {
      resembles: 'u5-grant', first: 'u5-bank',
      text: [
        'A second look: does this remind you of a story you know? A person who answers an ad and is asked for a passport may bring back Chen and his savings account, which was {o:realdetails}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:F2}. Chen’s credit union asked for a passport after he decided to open an account, and never asked for a photo of him holding it. Kayode’s energy grant fits better: a pleasant offer, and a request for far more than it needs. So the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'That is the whole unit in a few lines.',
    carry: [
      'A request for facts about you is {a:D1.details}, unless it also asks you to install something, sign in or pay: then the earlier answer wins. Then ask {q:F1} Papers and numbers that identify you, or your life?',
      'Then ask whether it fits: did you start it, through {t:already}, and is what they ask for what you came to do? The facts never decide it: {o:realdetails} and {o:identitytheft} ask for the same passport.',
      'A request that came to you does not fit, however real it sounds, and knowing your name, address or date of birth proves nothing. Stop, and use {t:check}: contact them yourself, through {t:already}.',
      'A chat that asks for nothing is the stage before the request, not a sign of safety. When the request comes, it will be for money or papers.',
      'Most requests for facts are real. A doctor’s form, a new account or a job you accepted all fit.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in or leave it.',
    intro: 'A plan is one line: if I see this, then I will do that. The worst moment to decide what to do is when the request arrives, so decide now. The lines below are examples: use one, change it, or write your own.',
    cues: [
      { cue: 'a call, a message or a stranger that I did not start asks for my date of birth, my address or my card number',
        then: 'say that I will call back, end the call or leave the message, and contact them on a number I already had, such as the one on my card or my bill' },
      { cue: 'an offer or a job asks for my passport, or a photo of me holding it, before anything is agreed',
        then: 'send nothing, and ask the company myself, through its own website, whether it sent the message' },
      { cue: 'a stranger who texted by mistake, or a new contact online, asks about my work, my home or my family',
        then: 'not answer questions about myself, block the number, and tell someone I trust about the chat' }
    ] }
]);
