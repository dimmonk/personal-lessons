// Statistical Claims, Unit Four: the cards that close the unit after the drill. This is an action subject, so the unit ends with a plan card.
// The app prints, on the recap: the unit's question and answers with the names they lead to, and for each name what to look for.

FC.cards('stats', 'u4', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. This card puts the unit in one place.',
    carry: [
      'Before you trust a figure that moved, ask: {q:M1} Then find the words in the claim that answer it. If you cannot find them, you do not have an answer yet.',
      'A figure is not the real thing it stands for. Someone counted it, in some way, with some amount of effort. Each of the three names is one way that can move the figure while the real thing stays put.',
      'The arithmetic usually settles which one: a second count from someone who gains nothing, the same people counted both ways, or the share found among those looked at.',
      'If you check all three and none fits, believe the move. That is {o:meas_ok}.',
      'Naming one of these does not make a claim false. It tells you what the figure cannot show yet, and what you would need to see.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing what to ask is not the same as asking it when a number reaches you. A plan is one line: a moment you will recognize, and what you will do.',
    intro: 'You do not have to write one. If you do, start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'someone says a figure rose after a new target or bonus', then: 'ask who makes the figure, and whether a count that nobody is paid on moved too' },
      { cue: 'a figure changed on the same date as a new tool, scale or definition', then: 'look for the figure counted both ways before I decide what it means' },
      { cue: 'a headline says that diagnoses, tickets or reports have jumped', then: 'ask how many were looked at both times, and divide the number found by it' }
    ] }
]);
