// Civics, Unit Four, part two (close): the key's question, one whole case worked, and the card that closes the unit
// after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it.
// The pairs veto~pardon, veto~execute, diplomacy~execute, enumerated~execute and confirm~diplomacy have no look-alike
// card of their own: the ledger names this question card as the one that teaches them (taughtIn).

FC.cards('civics', 'u4', [

  /* ---------- The question ---------- */
  { id: 'q-pres', kind: 'question', step: 'E1',
    h: 'The question you have been answering all along',
    link: 'Since the insulation credit you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its six answers in one place, and says why it is asked.',
    decides: [
      'Each of the six is held back by a different limit, so naming the right one tells you what to look for. An office putting a law into practice may go only as far as the law allows. A rule or an order that demands something of people outside the government needs a law Congress passed behind it, and without one it is beyond what the President can do. The other four are the President’s own powers, and no law has to stand behind them. Mistaking one for another sends you to the wrong limit.'
    ],
    how: [
      'Read the whole case. Then find the sentence in which the President or the office does something: an order, a rule, a meeting, a refusal, a signed paper. It is often the last sentence. Compare it with the six answers: {a:E1.carryout}, {a:E1.newduty}, {a:E1.military}, {a:E1.abroad}, {a:E1.sendback} and {a:E1.forgive}.',
      'Two of the answers turn on a law, so look for the law in the words of the case. {o:execute} has a law Congress passed behind it, and the office stays inside it. {o:beyondpres} has none behind what it demands of people outside the government.',
      'The other four need no law behind them, and a few are easy to mix up. {o:veto} acts on a bill that Congress passed, and {o:pardon} on a person who broke a federal law. {o:veto} comes before a law takes effect, where {o:execute} works on a law already in force. {o:diplomacy} sits across the table from another country’s government, where {o:execute} works on people under a law.',
      'Two names from Unit Three sit nearest to these. {o:enumerated} ends on the lawmakers’ vote that passes a law, where {o:execute} comes after the law has passed. {o:confirm} ends on the senators’ vote, where {o:diplomacy} ends on the President’s side.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-pres', kind: 'check', after: 'E1',
    case: 'e-rentcap',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- A whole case, watched ---------- */
  { id: 'worked-harbor', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not what decides it. You are not asked anything until the end.',
    case: 'e-w-harbor',
    steps: [
      { step: 'D1',
        reason: 'The case opens with the President on a visit to another country, talking trade with its leader. If it ended there, you would be looking at the President meeting another country’s leader. It does not end there. Read on: {cue:D1}. The last decision is the President’s, and it is made in a harbor. It is not a vote by lawmakers, not a judge, and not a state or a city. The answer is {a:D1.president}.' },
      { step: 'E1',
        reason: 'The trade talks were the opening. What the President does after them is give an order to part of the armed forces: {cue:E1}. The ships obey the President, and no law is named. Nothing is being negotiated or signed at that point: the talks were put off for the day. The answer is {a:E1.military}.' }
    ],
    hold: {
      neighbor: 'diplomacy',
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
        'It is the question from the ships and the port of Istrene. {test:commander~diplomacy} Here the President tells the forces what to do, so the answer is {a:E1.military}.'
      ]
    },
    impression: {
      resembles: 'e-flood', first: 'e-coasttalks',
      text: [
        'Now the second look: does this case look like one you know? A President visiting another country to talk about trade may bring back the coast talks first, and that case was {a:E1.abroad}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:E1}. The coast talks have nothing like them: nobody was ordered anywhere. The flood relief does: the President gave an order to the army. So the case this one really looks like is the flood relief, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-pres', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Say what the President or the office did, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'A rule or an order that demands something of people outside the government needs a law Congress passed behind it. With one, and staying inside it, the case is {o:execute}. Without one, it is {o:beyondpres}. An {t:order} that only tells the offices how to do their work is {o:execute}.',
      'The other four are the President’s own powers, and no law has to stand behind them: {o:commander}, {o:diplomacy}, {o:veto} and {o:pardon}. A visit by another country’s leader does not make a case {o:diplomacy}, and soldiers in a case do not make it {o:commander}. What the President does decides.',
      'Only Congress can declare war, and the President cannot forgive a crime against a state’s own law.'
    ] }
]);
