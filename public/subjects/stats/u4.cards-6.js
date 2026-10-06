// Statistical Claims, Unit Four: the cards that close the unit after the drill. This is an action subject, so the unit ends with a plan card.
// The app prints, on the recap: the unit's question and answers with the names they lead to, and for each name what you must be able
// to point to.

FC.cards('stats', 'u4', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. This card puts the unit in one place, in the words used all the way through.',
    carry: [
      'Before any name, put the question to the claim and point to the words that show your answer: {q:M1} If you cannot point, you do not have an answer yet.',
      'A figure is not the real thing it stands for. It is a count made by someone, in some way, with some amount of effort. Each of the three names is one way the making of the figure can move it while the real thing stays put.',
      'The arithmetic usually settles which one: a second count made by someone who gains nothing, the same people counted both ways, or the share found among those looked at.',
      'When you have put each of the three to a claim and none applies, the figure moved because the real thing did. That is an answer too: {a:S1.holds}.',
      'Naming one of these does not make a claim false. It says what the figure cannot show, and what you would need to see.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a figure reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a report says a figure rose because of a new target or bonus', then: 'ask who makes the figure, and whether a count that nobody is paid on moved too' },
      { cue: 'a figure changed on the same date as a new tool, scale or definition', then: 'look for the figure counted both ways before I decide what it means' },
      { cue: 'a headline says that diagnoses, tickets or reports have jumped', then: 'ask how many were looked at both times, and divide the number found by it' }
    ] }
]);
