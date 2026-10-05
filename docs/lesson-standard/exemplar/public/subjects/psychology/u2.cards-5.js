// Psychology, Unit Two, part four: the two worked cases, and the two cards that close the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u2', [

  { id: 'worked-longrun', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'longrun',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is Noor’s own account of something she did, and her reason for it: {cue:D1}. That is one person defending a choice of her own. She is not doing anything to the people in the club, and one Sunday tells you nothing about how she is across years.' },
      { step: 'R1',
        reason: 'She did something that does not fit what she has told the club: she missed a session. Afterwards she gives a reason why it is fine: {cue:R1}. The run stays missed, and what she tells the club about herself stays said. Nothing has changed except how the miss looks.' }
    ],
    hold: {
      neighbour: 'sunkcost',
      prompt: { kind: 'reason',
        lead: 'The case mentions eight months of long runs, so it can look like a case about what is already spent.',
        choices: [
          { id: 'a', text: 'Noor has eight months of long runs behind her, and she says so.',
            note: 'True, and it is why the case can look like {o:sunkcost}. But she does not give the eight months as a reason to take any next step. She uses them to make one missed run look small.' },
          { id: 'b', text: 'Her reason says that the missed run is fine. It is not offered as a reason for any next step.' },
          { id: 'c', text: 'She said it to the whole club, and not only to herself.',
            note: 'True, but that is story. She would have told herself the same thing with nobody listening.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:sunkcost} you must be able to point to this: {needs:sunkcost}. Noor is not deciding any next step. The run is already missed. Her eight months appear inside the excuse, to make one Sunday look small. They are not something she refuses to waste.',
        'It is the question from Rosa’s two concert tickets. {test:dissonance~sunkcost} Here the reason says that something she did is fine, so the key’s answer is {a:R1.addstory}.'
      ]
    },
    impression: {
      resembles: 'sauce',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the fish-stock sauce: something done that does not fit what the person says about herself, and a reason afterwards for why it hardly counts.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-tasting', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The missed long run was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'tasting',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is how Grace reached a choice of her own: {cue:D1}. There is nothing here that she does to another person, and nothing about how she is across years.' },
      { step: 'R1',
        reason: 'Grace set out on a search that was supposed to settle the choice: a tasting. Now look at the dates: {cue:R1}. The answer came a month before the search. At the tasting she collected what supported it, every compliment, and left out the rest.' }
    ],
    hold: {
      neighbour: 'confbias',
      prompt: { kind: 'reason',
        lead: 'Grace wrote down the compliments and none of the complaints. That is a harder test for one side, so the case can look like {o:confbias}.',
        choices: [
          { id: 'a', text: 'She wrote down every compliment and none of the complaints.',
            note: 'True, and it is why the case can look like {o:confbias}. But being harder on one side fits both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'She told her accountant that the tasting settled it.',
            note: 'True, but that is how Grace describes it afterwards. It does not show what came first.' },
          { id: 'c', text: 'She decided in March, and the tasting was in April.' }
        ],
        answer: 'c' },
      reason: [
        'Writing down the compliments and not the complaints is a harder test for one side, and on its own that would point to {o:confbias}. But the case shows something earlier: Grace set out on a search, and the answer was chosen a month before it began. When a case shows both, the key’s answer is {a:R1.fixed}.',
        '{o:confbias} is for cases with no search that the person set out on: only a view already held, and a harder test for the evidence against it as it turns up.'
      ]
    },
    impression: {
      resembles: 'interviews', first: 'oneway',
      text: [
        'Now the second look: does this case look like one you know? Notes that leave out every complaint may bring back Greg and the one-way system first, and Greg’s case was {o:confbias}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:R1}. Greg’s case has nothing like them: he never set out to settle anything. Carol’s interviews do: she chose first, then ran a search and wrote down what fitted. So the case this one really looks like is Carol’s, and the key’s answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Say what the reasoning does, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The story never decides. Nor does the person, and nor does where they ended up: a view can change without {o:fair}, and a view can be kept with it.',
      'When a case shows an answer chosen before a search began, that settles it, however the evidence was handled afterwards.',
      'One sentence is never enough. "You can’t trust that report" is {o:confbias} only if the evidence on the speaker’s own side was never asked the same question. "I looked into it properly and I was right" is {o:motivated} only if the answer was chosen before the search began. Otherwise it may well be {o:fair}.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: somewhere you heard it, or somewhere you said it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'dissonance', occasion: 'The morning after you did something you tell people you never do.' },
      { outcome: 'sunkcost', occasion: 'A project, a subscription or a plan that stopped being worth it some time ago.' },
      { outcome: 'confbias', occasion: 'The last article you passed on because it agreed with you.' },
      { outcome: 'motivated', occasion: 'The "research" you did after you had already chosen.' },
      { outcome: 'fair', occasion: 'The last time someone near you checked something and went with the result, whether or not it was what they wanted.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
