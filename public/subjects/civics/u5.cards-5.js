// Civics, Unit Five, part two (close) and the drill: two look-alike pairs with names from Congress's branch,
// the key's question, one whole story, and the card that closes the unit after the drill.
// Names that belong to the Congress branch are met in an earlier unit and are put by their key answers here,
// because the validator lets a card name by token only what this unit has met.

FC.cards('civics', 'u5', [

  /* ---------- Look-alikes with names from Congress's branch: only the first question separates them ---------- */
  { id: 'look-review-beyondcong', kind: 'lookalike', ledger: 'review~beyondcong',
    link: 'The same law can be in the news twice: when lawmakers vote for it, and when a person it harmed asks a judge about it.',
    cases: ['ls-worship-vote', 'ls-worship-fine'],
    instruction: 'Both stories are about the same sort of law, and in both the Constitution is in the argument. Compare one thing: who makes the last decision. In one it is lawmakers voting. In the other it is a judge, asked about a law already in use.',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'ls-worship-fine' },
    difference: [
      'In Story A the House and the Senate vote for the law, and the story ends there. The last decision is a vote, so the answer is {a:D1.congress}. For a law like this, the next answer is {a:C1.barred}.',
      'In Story B the law is a year old and Hana was fined under it. The story ends with her asking a judge to cancel the fine, because the law takes away the right to worship and to gather peacefully. The last decision is a judge’s, so the answer is {a:D1.courts}, and then {a:J1.check}. The name is {o:review}.'
    ] },

  { id: 'look-trialrights-beyondcong', kind: 'lookalike', ledger: 'trialrights~beyondcong',
    link: 'In both, a right in the Constitution stands in the government’s way, and it can be the very same right.',
    cases: ['ls-print-vote', 'ls-print-search'],
    instruction: 'Both stories are about printers. Compare one thing: who makes the last decision. In one it is lawmakers voting. In the other it is a judge, asked how an accused person was treated.',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'ls-print-search' },
    difference: [
      'In Story A the House and the Senate vote for a law against printing pamphlets that criticize the government, and the story ends there. The last decision is a vote, so the answer is {a:D1.congress}, and then {a:C1.barred}.',
      'In Story B a printer was arrested on suspicion of theft, and the police searched his shop with no warrant. His lawyer asks a judge whether the search was unreasonable. The last decision is a judge’s, so the answer is {a:D1.courts}. The judge is asked about a step promised to an accused person, so the next answer is {a:J1.accused}, and the name is {o:trialrights}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-judge', kind: 'question', step: 'J1',
    h: 'The one question to ask about a judge',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'Two stories about the very same rule can need different names, and the topic, the people and how serious it sounds tell you nothing. Only what the judge is asked to do does. Get it wrong and you will expect a judge to fix something only voters can.'
    ],
    how: [
      { do: 'Find the request to the judge: the sentence with “asks the judge to decide” or “asks a judge to order”.', why: 'The fine, the charge and the vote only show how it got there.' },
      { do: 'Does the person say the law breaks the Constitution? Then it is {o:review}.', why: 'They are saying the law itself is not allowed.' },
      { do: 'Does the person say a promised step was skipped? Then it is {o:trialrights}.', why: 'The law is accepted, and the complaint is how the person was treated.' },
      { do: 'Does the person ask whether the law’s words reach what happened? Then it is {o:interpret}.', why: 'Nobody says the law is wrong, so the judge reads its words.' },
      { do: 'Is the judge asked to choose a better rule, with no law or right to settle it? Then it is {o:notlegal}.', why: 'There is nothing to read or check, so the judge says no.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers seem to fit: a person charged under a law may ask what its words cover, or say the law breaks the Constitution. Go back to the words in the story. The test for each pair is below.' },

  { id: 'check-judge', kind: 'check', after: 'J1',
    case: 'k-bakery',
    ask: { type: 'step', step: 'J1' } },

  /* ---------- One whole story ---------- */
  { id: 'worked-megaphone', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through from the top. The most noticeable thing in it is not what decides it, so read to the end.',
    case: 'w-megaphone',
    steps: [
      { step: 'D1',
        reason: 'The story starts with a rally and a fine, but that is only how it got here. It ends with a request: {cue:D1}. The last decision is a judge’s.' },
      { step: 'J1',
        reason: 'Greta calls the right to speak the most important right in the country, but look at what she asks the judge: {cue:J1}. She asks whether her megaphone counts as a loudspeaker, which is a question about what a word covers.' }
    ],
    hold: {
      neighbor: 'review',
      prompt: { kind: 'reason',
        lead: 'Greta is a protester, she was fined, and she talks about the right to speak. Each of those fits a {o:review} story.',
        choices: [
          { id: 'a', text: 'Greta talks about the right to speak, and she was fined.',
            note: 'True, and it is why this looks like {o:review}. But talking about a right is not saying the rule breaks it.' },
          { id: 'b', text: 'She was fined at a rally, so it is a story about a protest.',
            note: 'True, but a protest can fit either name, so it settles nothing.' },
          { id: 'c', text: 'She never says the rule is wrong, only whether a megaphone is a loudspeaker.' }
        ],
        answer: 'c' },
      reason: [
        'To be {o:review}, the story would need this: {needs:review}. The missing piece is someone saying the rule breaks the Constitution. Greta never says it, even though she talks about the right to speak.',
        'It is the same split as the park rule, with a loudspeaker for one person and a violin for the other. The test is this: {test:review~interpret} Greta only asks how far one word reaches, so the answer is {a:J1.words}.'
      ]
    },
    impression: {
      resembles: 'i-hives', first: 'r-leaflets',
      text: [
        'A second look: does this remind you of a story you know? A protester, a fine and the right to speak may bring back the leaflet fine, which was {o:review}. So the likeness and the question seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:J1}. The leaflet story has nothing like them: Marisol told the judge the rule broke her right to speak. This story really matches the rooftop hives: a law nobody attacks, one word, and a judge asked whether it reaches a situation. So the answer stands.'
      ]
    } },

  /* ---------- The close ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the question on your own.',
    carry: [
      'Find what the judge is asked to do, and find the exact words that show it. If you cannot, you do not have an answer yet.',
      'The story never decides it. Neither does the size of the fine, the importance of the right or a courtroom: a story about a protester can be {o:interpret}, and a story with a courtroom in it can be {o:review}.',
      'It is {o:review} only when someone a law has harmed says the law breaks the Constitution. “Unfair” is not enough, and neither is a right mentioned in passing.',
      'If a rule is only unfair or unwise, with no law or right it breaks, a judge will say no and the choice is left to voters. Voting, petitions and writing to the council are what work.'
    ] }
]);
