// Civics, Unit Five, part two (close) and the drill: two look-alike pairs with names from Congress's branch,
// the key's question, one whole case, and the card that closes the unit after the drill.
// Names that belong to the Congress branch are met in an earlier unit and are put by their key answers here,
// because the validator lets a card name by token only what this unit has met.

FC.cards('civics', 'u5', [

  /* ---------- Look-alikes with names from Congress's branch: only the first question separates them ---------- */
  { id: 'look-review-beyondcong', kind: 'lookalike', ledger: 'review~beyondcong',
    link: 'A law that clashes with the Constitution can have been through two moments: the vote that made it, and the day someone it harmed takes it to a judge. This card puts the two side by side.',
    cases: ['ls-worship-vote', 'ls-worship-fine'],
    instruction: 'Both cases are about the same kind of law, and in both the Constitution is in the argument. Compare one thing: who makes the last decision. In one case it is lawmakers voting. In the other it is a judge, who has been asked about a law that is already in use.',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'ls-worship-fine' },
    difference: [
      'In Case A the House and the Senate vote for the law, and the story ends there. The last decision is a vote, so the first answer is {a:D1.congress}. Its second answer, for a law of this kind, is {a:C1.barred}.',
      'In Case B the law is a year old, Hana has been fined under it, and the story ends with her asking a judge to cancel the fine because the law takes away the right to worship and to gather peacefully. The last decision is a judge’s, so the first answer is {a:D1.courts}, and the second is {a:J1.check}. The case is {o:review}.'
    ] },

  { id: 'look-trialrights-beyondcong', kind: 'lookalike', ledger: 'trialrights~beyondcong',
    link: 'In both of these a right in the Constitution is what stops the government, and it can be the very same right. This card puts them side by side, and the first question is what separates them.',
    cases: ['ls-print-vote', 'ls-print-search'],
    instruction: 'Both cases are about printers, and in both the Constitution stands in the government’s way. Compare one thing: who makes the last decision. In one case it is lawmakers voting. In the other it is a judge, asked about how a person accused of a crime was treated.',
    prompt: { kind: 'which', option: 'D1.courts', answer: 'ls-print-search' },
    difference: [
      'In Case A the House and the Senate vote for a law that bans printing certain pamphlets, and the story ends there. The last decision is a vote, so the first answer is {a:D1.congress}, and its second, for a law of this kind, is {a:C1.barred}.',
      'In Case B a printer has been arrested on suspicion of theft, and the police searched his shop with no warrant. His lawyer asks a judge to decide whether the search was unreasonable. The last decision is a judge’s, so the first answer is {a:D1.courts}. The judge is asked about a step promised to an accused person, so the second is {a:J1.accused}, and the case is {o:trialrights}.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-judge', kind: 'question', step: 'J1',
    h: 'The question you have been answering all along',
    link: 'Since the leaflet fine you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, and says why it is asked.',
    decides: [
      'Two stories about the very same rule can need different names. For one of them the answer is {a:J1.check}; for another, about the same rule, it is {a:J1.words}. Nothing about the topic, the people or how serious it sounds tells them apart. Only what the judge is asked to do tells them apart.'
    ],
    how: [
      'Find the sentence that says what is asked of the judge, or the one that says what the person wants the judge to do. Then ask which of the four answers describes it. You should be able to put your finger on the words: that the law breaks the Constitution, that a step promised to an accused person was skipped, that the words of a law do or do not reach what happened, or that the judge should choose a better policy.',
      'What comes around that sentence is how the matter got to the judge: a fine, a charge, a vote, a decision by the town. Do not read the answer from them. Read it from what the judge is asked.',
      'A person charged under a law may ask whether the law covers what they did ({o:interpret}), or whether the steps promised to them were followed ({o:trialrights}). A request to change a rule may be a plea for a better policy ({o:notlegal}), a question about what its words cover ({o:interpret}), or a claim that it breaks the Constitution ({o:review}). In each, go to the words in the case.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-judge', kind: 'check', after: 'J1',
    case: 'k-bakery',
    ask: { type: 'step', step: 'J1' } },

  /* ---------- One whole case ---------- */
  { id: 'worked-megaphone', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'w-megaphone',
    steps: [
      { step: 'D1',
        reason: 'The case begins with a rally and a fine under a town rule, and those are how it reached this point. It ends with a request: {cue:D1}. The last decision is one that somebody has asked a judge to make.' },
      { step: 'J1',
        reason: 'The story is full of the right to speak, and Greta calls it the most important right in the country. But look at what she asks the judge: {cue:J1}. She does not say the rule clashes with the Constitution. She asks whether her megaphone is the thing the rule bans, which is a question about what a word covers.' }
    ],
    hold: {
      neighbor: 'review',
      prompt: { kind: 'reason',
        lead: 'Greta is a protester, she was fined, and she talks about the right to speak. Each of those is something you would find in a case of {o:review}.',
        choices: [
          { id: 'a', text: 'Greta talks about the right to speak, and she was fined.',
            note: 'True, and it is why the case looks like {o:review}. But talk about a right is not a claim that the rule breaks it. Whether the rule is allowed is not what she asks.' },
          { id: 'b', text: 'She was fined at a rally, so the case is about a protest.',
            note: 'True, but a protest can be the story of either name. It cannot settle which one this is.' },
          { id: 'c', text: 'She does not say the rule is wrong. She asks whether a megaphone is a loudspeaker.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:review} you must be able to point to this: {needs:review}. The part that is missing is the claim that the rule breaks the Constitution. Greta never makes it. The right to speak is in the story, and it is not what the judge is asked about.',
        'It is the question from the park rule, where one person used a loudspeaker and another a violin. {test:review~interpret} Here the only question put to the judge is how far a word reaches, so the answer is {a:J1.words}.'
      ]
    },
    impression: {
      resembles: 'i-hives', first: 'r-leaflets',
      text: [
        'Now the second look: does this case look like one you know? A protester, a fine and the right to speak may bring back the leaflet fine first, and the leaflet fine was {o:review}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:J1}. The leaflet case has nothing like them: Marisol told the judge that the rule breaks her right to speak. The case this one really looks like is the rooftop hives: a law nobody attacks, a word, and a judge asked whether it covers a situation. So the answer stands.'
      ]
    } },

  /* ---------- The close ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Find what the judge is asked to do, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The story never decides. Nor do the size of the fine, the importance of the right or the word "trial": a case about a protester can be {o:interpret}, and a case with a courtroom in it can be {o:review}.',
      'A case is {o:review} only if someone harmed by a law says that it breaks the Constitution. "Unfair" alone is not enough, and neither is a right mentioned in passing.',
      'When nobody can point to a law or a right that settles the matter, and the judge is asked to choose, the judge declines and the choice is left to voters and the leaders they elect.'
    ] }
]);
