// Statistical Claims, Unit Four: the cards that close the unit after the drill. This is an action subject, so the unit ends with a plan card.
// The app prints, on the recap: the unit's question and answers with the names they lead to, and for each name what you must be able
// to point to, the question to ask when you spot it and what to do when you meet it.

FC.cards('stats', 'u4', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. This card puts the unit in one place, in the words used all the way through.',
    carry: [
      'Before any name, put the question to the claim and point to the words that show your answer: {q:M1} If you cannot point, you do not have an answer yet.',
      'A figure is not the real thing it stands for. It is a count made by someone, in some way, with some amount of effort. Each of the three names is one way the making of the figure can move it while the real thing stays put.',
      'The arithmetic usually settles which one: a second count made by someone who gains nothing, the same people counted both ways, or the share found among those looked at.',
      'A target alone, a new tool alone, or a rise alone is not a name. Look for the way the figure could move without the real thing: a way for the people judged on it to raise it, a change in what counts or what measures, or more effort put into finding.',
      'When you have put each of the three to a claim and none applies, the figure moved because the real thing did. That is an answer too: {a:S1.holds}.',
      'Naming one of these does not make a claim false. It says what the figure cannot show, and what you would need to see.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the three names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the three and name an occasion of your own: something you read, something you were told or something you did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'proxy', occasion: 'A number you were asked to hit, or one you saw someone else hit: a quota, a step count, a score. What was the easiest way to raise it?' },
      { outcome: 'defshift', occasion: 'A figure that jumped when something about how it was made changed: a new phone, a new scale, an updated app, a new definition. What was counted differently?' },
      { outcome: 'detection', occasion: 'A number that rose after someone started looking harder: a new check, a new camera, a new test. Did the real thing rise, or only what was found?' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a figure reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a report says a figure rose because of a new target or bonus', then: 'ask who makes the figure, and whether a count that nobody is paid on moved too' },
      { cue: 'a figure changed on the same date as a new tool, scale or definition', then: 'look for the figure counted both ways before I decide what it means' },
      { cue: 'a headline says that diagnoses, tickets or reports have jumped', then: 'ask how many were looked at both times, and divide the number found by it' },
      { cue: 'a figure goes up and I like what it seems to say', then: 'put the same question to it that I would put to a figure I do not like' },
      { cue: 'I am asked to report a figure that I am judged on', then: 'report a second count that I do not control beside it' }
    ] }
]);
