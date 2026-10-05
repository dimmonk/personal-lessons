// Psychology, Unit One, parts five and six: the three pairs still to compare, the key's first question as a
// question, the two worked cases, and the two cards that close the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.

FC.cards('psychology', 'u1', [

  /* ---------- The remaining look-alike pairs ---------- */
  { id: 'look-tactic-none', kind: 'lookalike', ledger: 'tactic~none',
    link: 'You have compared three pairs of kinds. Three pairs are left. The first is {a:D1.tactic} and {a:D1.none}: a person having a hard week can be hard on the people around them, so where does one kind stop and the other start?',
    cases: ['g-sale-curt', 'g-sale-finn'],
    instruction: 'Both cases are about Cora in the week the buyer withdrew his offer for her flat. Compare one thing: is anything said or done to one particular person, about that person?',
    prompt: { kind: 'which', option: 'D1.tactic', answer: 'g-sale-finn' },
    difference: [
      'In Case A Cora is hard to be around, and the whole office feels it. But nothing is said or done to any one of them about them. One-word answers and headphones are how she is with everyone this week. The answer is {a:D1.none}.',
      'In Case B it is the same week and the same bad news. This time something is said to one particular person, about him: the mistake was his, and perhaps he is not up to the job. The case shows where it leaves Finn: staying late every night. The answer is {a:D1.tactic}.',
      'The hard week is real in both cases, and in Case B you can keep it in mind. It does not change the answer. A bad week explains a mood. It does not turn what was said to Finn into a mood. Once something is said or done to one person about them, there are two people to keep in view.'
    ] },

  { id: 'look-reasoning-none', kind: 'lookalike', ledger: 'reasoning~none',
    link: 'The next pair is {a:D1.reasoning} and {a:D1.none}. Both are about one person on one occasion, often straight after something has happened to them, so one can pass for the other.',
    cases: ['g-redundancy-week', 'g-redundancy-choice'],
    instruction: 'Both cases are about Ruth in the week she lost her job. Compare one thing: does she give reasons for a view or a choice, or does the case only show how she felt and acted?',
    prompt: { kind: 'which', option: 'D1.reasoning', answer: 'g-redundancy-choice' },
    difference: [
      'In Case A you are shown how the news has hit Ruth: no sleep, no appetite, a cancelled weekend. She has not made a choice that she then defends, and she gives no reasons for anything. Cancelling the weekend is part of how the week went. The answer is {a:D1.none}.',
      'In Case B the same news is followed by a choice, and by a reason for it. Ruth has decided not to apply for the two posts, and she says why: they would only get rid of her again. Now there is a piece of reasoning to look at, and you could go on to ask whether it is sound. The answer is {a:D1.reasoning}.',
      'Feeling bad is not reasoning, even when it leads a person to do things. It becomes reasoning at the point where the person says why: where a view or a choice is put forward, and something is offered in support of it.'
    ] },

  { id: 'look-reasoning-pattern', kind: 'lookalike', ledger: 'reasoning~pattern',
    link: 'The last pair is {a:D1.reasoning} and {a:D1.pattern}. A person who gives the same sort of reason again and again, for years, is still giving reasons each time. So which kind is it?',
    cases: ['g-cafe', 'g-eleven'],
    instruction: 'Both cases are about Greta putting money into something on a feeling. Compare one thing: is the case one piece of thinking about one choice, or does it follow her through years, places and relationships?',
    prompt: { kind: 'which', option: 'D1.pattern', answer: 'g-eleven' },
    difference: [
      'In Case A there is one choice, the café, and Greta’s reasons for it: a feeling, the location, how hard her friend works. Her brother only listens. You could go on to ask how good those reasons are. The answer is {a:D1.reasoning}.',
      'In Case B no single choice is being weighed. The case counts eleven of them, across twenty-five years and three cities, seen by three people who each know a different part of her life. The answer is {a:D1.pattern}.',
      'Case A may well be the twelfth venture. From Case A alone you cannot know that, and the answer is for the case in front of you. If one case shows both, a piece of reasoning and the years behind it, the answer is the same as with Mia and the phone: {a:D1.pattern}.'
    ] },

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'Since the job offer you have seen the question at the foot of each new kind, with one answer under it. This card puts the question and its four answers in one place, and says why it is asked before anything else.',
    decides: [
      'A case can only be judged on what it is made of. If you take one evening for a person’s whole character, you go looking for years that the case does not have. If you take something said to another person for the speaker’s private reasoning, the person it was said to drops out of view. Getting the kind wrong means asking the wrong questions next, however carefully you ask them.',
      'That is why this question comes first, before any finer name, and why every case in this subject starts with it.',
      'In this unit it is the only question, so its answer is the name. In the rest of the subject, each of the first three answers is followed by one more question, and that question leads to a finer name. The fourth answer is followed by nothing. Your answers on the way to a name are this first answer and then the answer to the next question. Once there are two answers, two things are marked separately: the name you give a case, and your answers on the way to it. A right name reached by a wrong answer to this first question counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole case before you answer, the last sentence included. The last sentence is often where the years are, or where you learn how long the speaker has known the person. Then go through the four kinds in this order, and stop at the first one the case shows.',
      'First, look for {a:D1.pattern}: {needs:pattern}. If the case shows all of that, this is the answer, whatever else is in the case.',
      'Second, look for {a:D1.tactic}: {needs:tactic}. If the case shows that, this is the answer, even if the person is also giving reasons.',
      'Third, look for {a:D1.reasoning}: {needs:reasoning}.',
      'If the case shows none of the three, what is left is {a:D1.none}: {needs:none}.',
      'Whichever answer you give, put your finger on the words that show it: the years and the places, what was said and to whom, the reasons, or the words that tie the case to one occasion. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two of the four at once. You have met two. In the shouting, Marta’s reason for her own act was made out of Kofi. In Mia and the phone, one evening turned out to have years behind it. Every case gets one answer, and the order above is how it is chosen. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-kind', kind: 'check', after: 'D1',
    case: 'g-restaurant',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-dent', kind: 'worked',
    h: 'A whole case, from the question to the answer',
    link: 'You have the four kinds and the question about them. Before the drill, watch two cases being run from the top. You are not asked anything until the end of each.',
    case: 'g-dent',
    steps: [
      { step: 'D1',
        reason: [
          'The unit taught an order for answering this question: look first for years, places and relationships, then for something said or done to another person about them, and then for one person’s own reasons. Start with the first. This case is one conversation. Nothing in it goes back before the day the car came back, and nothing shows Reece behaving this way in any other place or with any other person. So it does not show {a:D1.pattern}.',
          'Next, look for something one person says to another about them. It is this: {cue:D1}. The first part is about what happened between the two of them, the dent. The rest is about Imani: what she notices, and what is typical of her. So there are two people, and something one of them says to the other that is about her.',
          'The last sentence shows where it leaves her: Imani goes back outside to look at the dent again.'
        ] }
    ],
    hold: {
      neighbour: 'reasoning',
      prompt: { kind: 'reason',
        lead: 'Reece is defending himself, so the case can look like a person giving his reasons.',
        choices: [
          { id: 'a', text: 'Reece is defending himself: he says the dent was already there.',
            note: 'True, and it is why the case can look like {a:D1.reasoning}. But a person defending themselves turns up in both kinds, so it cannot tell you which of the two this is.' },
          { id: 'b', text: 'What Reece says is about Imani, and he says it to her: she never notices things, and accusing him is typical of her.' },
          { id: 'c', text: 'It all happens in one conversation.',
            note: 'True, and it tells you the case is not {a:D1.pattern}. It does not separate the two kinds you are choosing between: both can happen in one conversation.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.reasoning} you must be able to point to this: {needs:reasoning}. Reece does defend himself, and that is why the case can look like it. But look at who his words are about and who they are said to. He says the dent had been there for months: that is said to Imani, about what happened between the two of them. He says she never notices anything about her own car, and that it was typical of her to accuse him: that is said to Imani, about Imani. Nobody in this case is only listening.',
        'It is the question from Dev and the forgotten birthday. {test:reasoning~tactic} Here they are said to another person, about her, so the answer is {a:D1.tactic}.'
      ]
    },
    impression: {
      resembles: 'g-deadline',
      text: [
        'You have the answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the deadline. There too, someone was asked a fair question, said that it had not happened that way, turned to what the asker was like, and sent them away to check themselves.',
        'Here the answer and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-rehearsal', kind: 'worked',
    h: 'A second whole case, where the opening points the wrong way',
    link: 'The dent was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'g-rehearsal',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with one missed rehearsal and Petra’s reasons for it. If it ended there, you would be looking at one person giving reasons for something she did.',
          'It does not end there. Read on: {cue:D1}. That is twenty years, family occasions and three workplaces, and the same thing in each: Petra absent, and a reason given. The case has stopped being about one Saturday. It has become a long view of one person.'
        ] }
    ],
    hold: {
      neighbour: 'reasoning',
      prompt: { kind: 'reason',
        lead: 'Petra gives reasons for missing the rehearsal, so the case can look like {a:D1.reasoning}.',
        choices: [
          { id: 'a', text: 'Petra gives reasons for missing the rehearsal: the traffic, and not being told about the time.',
            note: 'True, and it is why the case can look like {a:D1.reasoning}. If the case ended there, that would be the answer. It does not end there.' },
          { id: 'b', text: 'The same thing has happened for twenty years, at family occasions and at three jobs, each time with a reason.' },
          { id: 'c', text: 'Her sister was not surprised.',
            note: 'True, and it is a hint that there is a history. But it is one person’s reaction on one day. The history itself is in the sentence after it.' }
        ],
        answer: 'b' },
      reason: [
        'A person giving reasons for something she did is what you point to for {a:D1.reasoning}, and the first half of this case shows it. The second half shows the same thing across twenty years, at family occasions and at three jobs. When a case shows both, the answer is {a:D1.pattern}.',
        'This is the choice made with Mia and the phone. There, one evening of something done to another person turned out to have years behind it. Here, one excuse does. The larger claim is the one the case supports, so it is the answer.',
        'Petra’s reasons on the day may even be true. The traffic may have been impossible. The answer does not depend on that. It depends on how much of her life the case shows.'
      ]
    },
    impression: {
      resembles: 'g-moira', first: 'g-birthday-brother',
      text: [
        'Now the second look: does this case look like one you know? A missed family occasion and a ready reason may bring back Dev and the forgotten birthday first, and Dev’s case, as he told it to his brother, was {a:D1.reasoning}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:D1}. Dev’s case has nothing like them: it was one birthday and one evening. Moira’s case does: twenty years, more than one place, and each time somebody else to blame. So the case this one really looks like is Moira’s, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own. This card puts the unit in one place.',
    carry: [
      'Before any name, ask what the case is made of, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'The kind is not a verdict. Each of the first three can be fair or unfair, harmless or harmful. Sorting that out is what the later questions are for.',
      'One evening is never {a:D1.pattern}, however bad the evening was and whoever says "always". Count the occasions, the places and the people.',
      'A hard week after something real is {a:D1.none}. It does not need a bigger word, and giving it one is a mistake about the person.',
      'None of the four kinds is a diagnosis. Each says only what a case shows, and a diagnosis is something only a trained professional can give, after a long assessment.',
      'When a case shows two kinds, the answer is chosen in this order: years, places and relationships first; then anything said or done to another person about them; then one person’s reasons.',
      'Every case in this subject starts with this question. Your answer to it is the first of your answers on the way to a name.'
    ] },

  { id: 'transfer-kind', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four kinds is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: something you saw, something said to you, or something you said. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { family: 'reasoning', occasion: 'The last time you explained a choice of yours to someone, or to yourself.' },
      { family: 'tactic', occasion: 'A conversation you replayed afterwards, because of what was said to you or what you said.' },
      { family: 'pattern', occasion: 'Someone you have known for many years, in more than one part of their life. What is the same in all of it?' },
      { family: 'none', occasion: 'A bad day or a hard week, yours or someone else’s, that got described with a word that was too big for it.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
