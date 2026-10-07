// Civics, Unit Four, part two (close): the question, one whole story worked, and the card that closes the unit
// after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, each answer with when it is given, and for every pair already
// compared the question that separates it.
// The pairs veto~pardon, veto~execute, diplomacy~execute, enumerated~execute and confirm~diplomacy have no look-alike
// card of their own: the ledger names this question card as the one that teaches them (taughtIn).

FC.cards('civics', 'u4', [

  /* ---------- The question ---------- */
  { id: 'q-pres', kind: 'question', step: 'E1',
    h: 'The one question to ask about the President or an office',
    link: 'Here is the question and its six answers in one place.',
    decides: [
      'Each name has a different limit, so the right name tells you what to check. An office carrying out a law may go only as far as the law allows. The other four are the President’s own powers, and no law has to stand behind them. Mix them up and you check the wrong limit.'
    ],
    how: [
      { do: 'Read to the end, then find the sentence where the President or the office does something: an order, a rule, a meeting, a refusal, a signed paper.', why: 'It is often the last sentence.' },
      { do: 'Ask if a law Congress passed stands behind it, and the office stays inside it: {o:execute}.', why: 'The office is only making the law work.' },
      { do: 'Ask if a demand on people outside the government has no law behind it: {o:beyondpres}.', why: 'Only a law can create a new tax, fee, crime, duty or ban.' },
      { do: 'Look for orders to soldiers, ships or planes: {o:commander}.', why: 'The forces are told where to go or what to do.' },
      { do: 'Look for the President, or someone the President sent, talking with another country’s government: {o:diplomacy}.', why: 'They sit across the table from another country.' },
      { do: 'Look for a bill Congress passed that the President will not sign: {o:veto}.', why: 'The bill goes back before it can become a law.' },
      { do: 'Look for a person who broke a federal law and is forgiven: {o:pardon}.', why: 'The punishment is lifted, or never comes.' },
      { do: 'If the story ends on a vote in Congress, it is from Unit Three: the vote that passes a law is {o:enumerated}, and senators voting on the President’s pick or a {t:treaty} is {o:confirm}.', why: 'In this unit the last decision belongs to the President or an office.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-pres', kind: 'check', after: 'E1',
    case: 'e-rentcap',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- A whole story, watched ---------- */
  { id: 'worked-harbor', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'e-w-harbor',
    steps: [
      { step: 'D1',
        reason: [
          'It opens with a trade visit, so you might think it ends in talks. Read to the end: {cue:D1}.',
          'The last decision is the President’s, and it is made in a harbor. No lawmakers vote, no judge is asked, and no state or city decides. The answer is {a:D1.president}.'
        ] },
      { step: 'E1',
        reason: [
          'The talks were only the opening. What the President does next is give an order to part of the armed forces: {cue:E1}.',
          'The ships obey, and no law is named. Nothing is negotiated or signed, because the talks were put off for the day. The answer is {a:E1.military}.'
        ] }
    ],
    hold: {
      neighbor: 'diplomacy',
      prompt: { kind: 'reason',
        lead: 'The President is in another country, talking to its leader, so this can look like {o:diplomacy}. What decides it?',
        choices: [
          { id: 'a', text: 'The President is in the port of Valmora, talking trade with its leader.',
            note: 'True, and it is why this looks like {o:diplomacy}. But the talks stop, and nothing is agreed or signed.' },
          { id: 'b', text: 'The President orders the navy’s ships to sail at once and tow the supply ship clear.' },
          { id: 'c', text: 'The supply ship has lost power and is drifting toward the rocks.',
            note: 'True, and it is why the President acts. But the danger is why, not what the President does.' }
        ],
        answer: 'b' },
      reason: [
        'The visit shows where the President is, not what the President decides. The decision at the end is an order to the navy.',
        'The test from the ships at Istrene: {test:commander~diplomacy} Here the President tells the forces what to do, so the answer is {a:E1.military}.'
      ]
    },
    impression: {
      resembles: 'e-flood', first: 'e-coasttalks',
      text: [
        'A second look: does this story remind you of one you know? A President visiting another country to talk trade may bring back the coast talks, which were {a:E1.abroad}. Here the likeness and the question seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:E1}. The coast talks have nothing like them, because nobody was ordered anywhere. The flood relief does, because the President gave an order to the army. So the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-pres', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now sort what the President or an office does on your own.',
    carry: [
      'Say what the President or the office did, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'A rule or an order that demands something of people outside the government needs a law Congress passed behind it. With one, and staying inside it, it is {o:execute}. Without one, it is {o:beyondpres}. An {t:order} that only tells the offices how to do their work is {o:execute}.',
      'The other four are the President’s own powers, and no law has to stand behind them: {o:commander}, {o:diplomacy}, {o:veto} and {o:pardon}. A visit from another country’s leader does not make a story {o:diplomacy}, and soldiers in a story do not make it {o:commander}. What the President does decides.',
      'Only Congress can declare war, and the President cannot forgive a crime against a state’s own law.'
    ] }
]);
