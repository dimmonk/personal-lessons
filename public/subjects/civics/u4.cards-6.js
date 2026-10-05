// Civics, Unit Four, part three (second half) and part four: the last two look-alike cards, the key's question, the
// two worked cases, and the two cards that close the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it.

FC.cards('civics', 'u4', [

  /* ---------- The last two look-alike pairs ---------- */
  { id: 'look-veto-pardon', kind: 'lookalike', ledger: 'veto~pardon',
    link: 'You have now met all six. Two of them are the President acting on something that others have already done: a bill that Congress passed, and a crime that someone committed. They are easy to mix up. This card puts them side by side.',
    cases: ['e-dump-bill', 'e-dump-man'],
    instruction: 'Both cases are about rubbish dumped in national parks, and in both the President acts on Monday. Compare one thing: what the President acts on, a bill or a person?',
    prompt: { kind: 'which', option: 'E1.forgive', answer: 'e-dump-man' },
    difference: [
      'In Case A the President acts on a bill that Congress has passed: a bill that cuts a fine. The President will not sign it, and sends it back. Nobody has been charged with anything. The key’s answer is {a:E1.sendback}, and the case is {o:veto}.',
      'In Case B the President acts on a man who was fined for dumping rubbish by a federal court, and forgives the crime, so that the fine is cancelled. No bill is in the story. The key’s answer is {a:E1.forgive}, and the case is {o:pardon}.',
      'The park, the rubbish and the Monday are the same. What differs is what the President acts on.'
    ] },

  { id: 'look-veto-execute', kind: 'lookalike', ledger: 'veto~execute',
    link: 'A law that Congress passed can be in a case about the President or an office in two different ways. This card puts side by side the one where the President refuses a bill and the one where an office puts a law into practice.',
    cases: ['e-bags-bill', 'e-bags-rule'],
    instruction: 'Both cases are about the same free carry-on bag. Compare one thing: is the President deciding whether the bill will become a law, or is an office already putting a law into practice?',
    prompt: { kind: 'which', option: 'E1.sendback', answer: 'e-bags-bill' },
    difference: [
      'In Case A the bill has reached the President, who refuses to sign it and sends it back with objections. The bill is not yet a law in force, so there is nothing for an office to put into practice. The key’s answer is {a:E1.sendback}, and the case is {o:veto}.',
      'In Case B the law was passed last year, and an office now publishes what size and weight a free bag must be allowed to have, and when airlines must follow the rule. The key’s answer is {a:E1.carryout}, and the case is {o:execute}.',
      'It is one law at two moments. Before it takes effect, the President may refuse it. After it takes effect, an office puts it into daily practice.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-pres', kind: 'question', step: 'E1',
    h: 'The question you have been answering all along',
    link: 'Since the insulation credit you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its six answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'The President and the offices do very different things, and each is held back by different limits. An office putting a law into practice may go only as far as the law allows. The President, ordering the forces or dealing with another country, is using a power the President holds alone, and a law Congress passed need not be behind it. The President can refuse a bill that Congress passed or forgive a federal crime, and these two are the President’s alone. An order or a rule that demands something of people outside the government needs a law Congress passed behind it, and without one it is beyond what the President can do.',
      'So the key asks what the President or the office does, and the answer decides which limit to look for. Mistaking one for another sends you to the wrong limit: looking for a law behind an order to the army, or taking an office’s rule for something the President does alone.'
    ],
    how: [
      'Read the whole case. Then find the sentence in which the President or the office does something: an order, a rule, a meeting, a refusal, a signed paper. It is often the last sentence, or the one the case ends on. Everything before it is how the matter got there.',
      'Put your finger on the words that show what was done, and compare them with each of the six answers: {a:E1.carryout}, {a:E1.newduty}, {a:E1.military}, {a:E1.abroad}, {a:E1.sendback} and {a:E1.forgive}.',
      'Two of the answers turn on a law. {a:E1.carryout} needs a law Congress passed, and the office staying inside it. {a:E1.newduty} is the opposite: the case shows that no law allows what is demanded. For both, look for the law in the words of the case. If the case names none, ask whether the demand falls on people outside the government. If it does not, the case may be an order that only tells the offices how to do their work.',
      'The other four ask for the act itself: the order to the forces, the meeting or the talks, the refusal, the forgiveness. These are the President’s own powers, so no law has to stand behind them. Two of them have something to act on, a bill Congress passed or a crime someone committed, and the case shows it.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. You have met the common shapes: a rule with a law behind it, and a rule without one; orders and talks that involve the same ships; a law refused and a law put into practice; a law refused and a crime forgiven. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-pres', kind: 'check', after: 'E1',
    case: 'e-rentcap',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-hospital', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the six names and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'e-w-hospital',
    steps: [
      { step: 'D1',
        reason: 'Look for the last decision in the case. The case begins with a law Congress passed last year, and that was a decision, but an old one: it is how the matter got here. The last thing the case shows being decided is what the federal health office did on Monday: {cue:D1}. It is an office of the government of the whole country. It is not a vote by lawmakers, not a judge, and not a state or a city.' },
      { step: 'E1',
        reason: 'Now ask what the office did. A law stands behind it, and the office fills in the rest: {cue:E1}. It decided the details the law leaves open: the list, the form and the date. It added no demand of its own: it did not tell hospitals to do anything the law does not already require. That is an office putting a law into daily practice and staying inside it, and the key’s answer is {a:E1.carryout}.' }
    ],
    hold: {
      neighbour: 'beyondpres',
      prompt: { kind: 'reason',
        lead: 'The list, the form and the date are all new things that hospitals must do, so the case can look like a rule that demands something no law allows.',
        choices: [
          { id: 'a', text: 'The office’s rule makes hospitals do new things: post a list, in a form, from a date.',
            note: 'True, and it is why the case can look like {o:beyondpres}. But every one of those things is how a law that already exists is to be followed. A demand being new is not what puts it beyond the President. What does is having no law behind it.' },
          { id: 'b', text: 'The law Congress passed last year already requires hospitals to post their prices, and the rule only says how.' },
          { id: 'c', text: 'The office’s auditors will check the lists.',
            note: 'True, and it shows the office enforcing the rule. But checking is also what an office does with a rule that has no law behind it, so it cannot settle which of the two names this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:beyondpres} you must be able to point to this: {needs:beyondpres}. The case has a rule that demands something of hospitals, and that is half of it. The other half, no law Congress passed that allows it, is missing: the law is in the first sentence.',
        'It is the question from the salt in snacks. {test:execute~beyondpres} Here a law exists and the office stays inside it, so the key’s answer is {a:E1.carryout}.'
      ]
    },
    impression: {
      resembles: 'e-credit',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the insulation credit. There too, a law Congress passed came first, and a federal office worked out the form and the details of how people follow it.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-harbour', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The hospital prices were a clean case: the office’s act was the last thing in it, and one law stood behind it. In this second case the most noticeable thing in the story is not what decides it. Watch which words each question picks out.',
    case: 'e-w-harbour',
    steps: [
      { step: 'D1',
        reason: 'The case opens with the President on a visit to another country, talking trade with its leader. If it ended there, you would be looking at the President meeting another country’s leader. It does not end there. Read on: {cue:D1}. The last decision is the President’s, and it is made in a harbour. It is not a vote by lawmakers, not a judge, and not a state or a city. The answer is {a:D1.president}.' },
      { step: 'E1',
        reason: 'The trade talks were the opening. What the President does after them is give an order to part of the armed forces: {cue:E1}. The ships obey the President, and no law is named. Nothing is being negotiated or signed at that point: the talks were put off for the day. The key’s answer is {a:E1.military}.' }
    ],
    hold: {
      neighbour: 'diplomacy',
      prompt: { kind: 'reason',
        lead: 'The President is in another country, talking to its leader, so the case can look like dealing with another country.',
        choices: [
          { id: 'a', text: 'The President is in the port of Valmora, talking trade with its leader.',
            note: 'True, and it is why the case can look like {o:diplomacy}. But that is where the case begins. The talks stop, and nothing is agreed or signed.' },
          { id: 'b', text: 'The President orders the navy’s ships to sail at once and tow the supply ship clear.' },
          { id: 'c', text: 'The supply ship has lost power and is drifting toward the rocks.',
            note: 'True, and it is why the President acts. But the danger tells you why the President acts, not what the President does.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:diplomacy} you must be able to point to this: {needs:diplomacy}. The first sentence shows a visit and talks about trade. But the visit is where the President is, not what the President decides. The decision at the end is an order to the navy.',
        'It is the question from the ships and the port of Istrene. {test:commander~diplomacy} Here the President tells the forces what to do, so the key’s answer is {a:E1.military}.'
      ]
    },
    impression: {
      resembles: 'e-flood', first: 'e-coasttalks',
      text: [
        'Now the second look: does this case look like one you know? A President visiting another country to talk about trade may bring back the coast talks first, and that case was {a:E1.abroad}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:E1}. The coast talks have nothing like them: nobody was ordered anywhere. The flood relief does: the President gave an order to the army. So the case this one really looks like is the flood relief, and the key’s answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-pres', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Say what the President or the office did, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'Look for the law when the case needs one. A rule or an order that demands something of people outside the government needs a law Congress passed behind it. With one, and staying inside it, the case is {o:execute}. Without one, it is {o:beyondpres}.',
      'The other four are the President’s own powers, and no law has to stand behind them: {o:commander}, {o:diplomacy}, {o:veto} and {o:pardon}.',
      'An order from the President is not always {o:beyondpres}. An {t:order} that only tells the offices how to do their work is {o:execute}. Look at what it demands, and of whom.',
      'A visit by another country’s leader does not make a case {o:diplomacy}, and soldiers in a case do not make it {o:commander}. What the President does decides.',
      'Only Congress can declare war, and the President cannot forgive a crime against a state’s own law. When a case seems to say otherwise, check whose decision it ends on.',
      'Every case in this unit begins with the key’s first question, and its answer is {a:D1.president}. A signed law is not the President’s decision, and a refusal to sign is.'
    ] },

  { id: 'transfer-pres', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the six names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the six and name an occasion of your own: something you read, something that affected you, or something you were told. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'execute', occasion: 'A form, a fee or an inspection that comes from a federal office, and the law behind it.' },
      { outcome: 'beyondpres', occasion: 'A rule or an order that someone said "goes too far", and what you would need to know to say whether any law allows it.' },
      { outcome: 'commander', occasion: 'Soldiers, ships or helicopters sent somewhere in the news, and who gave the order.' },
      { outcome: 'diplomacy', occasion: 'A meeting, a summit or a deal between the President and another country.' },
      { outcome: 'veto', occasion: 'A bill that the President would not sign, and what Congress did next.' },
      { outcome: 'pardon', occasion: 'Someone you heard had been pardoned, and which law they were said to have broken.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
