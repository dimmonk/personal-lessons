// Basic Math, Unit Six: the worked examples (part 3 of 3). Two for each kind of problem, in different areas of life.
// Every step is named by what it is for, with its working and its reason. One step in each carries the idea, and its reason is held
// back until the learner has chosen it.
// The working, the wrong choices and the slip behind each were computed from the problem’s own numbers when the file was written: check a number you change against its working.

FC.cards('math', 'u6', [
  {
    id: 'solved-sqcube-2',
    kind: 'solved',
    outcome: 'sqcube',
    h: 'Worked again: what the glass for a larger window pane costs',
    link: 'The same procedure for {o:sqcube} in a different story, with an area and not a volume, and with an amount to carry through to the end.',
    problem: 'm6-s-sqcube-2',
    steps: [
      {
        does: 'Find how many times longer the bigger one is than the smaller one',
        working: '120 ÷ 40 = 3',
        why: 'The two panes are exactly the same shape, so one number says how many times longer the larger pane is, in its width and in its height alike: 120 ÷ 40 = 3.'
      },
      {
        does: 'Decide whether the problem asks about area or about volume',
        working: 'The glass covers a surface, and its cost follows the area of the pane, so the problem asks about area',
        why: 'The cost is the cost of glass, and glass covers a flat surface, the pane, so the amount follows the area of the pane. A pane has two directions, width and height, so the problem asks about area. The problem does not ask about volume, because the thickness of the glass is the same for both panes and plays no part in the problem.'
      },
      {
        does: 'Multiply that number of times by itself, with two of them in the product for an area',
        working: '3 × 3 = 9'
      },
      {
        does: 'Multiply the smaller one’s amount by that number of times',
        working: '6 euros × 9 = 54 euros',
        why: 'The small pane’s glass costs 6 euros, and the larger pane has 9 times as much glass, so, if the cost goes with the amount of glass, it costs 9 times as much: 6 × 9 = 54 euros. Multiplying by 3 instead, as for a length, would give 18 euros, which would pay for only a third of the glass in the larger pane.'
      }
    ],
    result: 'The glass for the larger pane costs 54 euros.',
    hold: {
      step: 2,
      prompt: {
        kind: 'reason',
        choices: [
          {
            id: 'x',
            text: 'A surface has two directions, width and height, and each is 3 times longer, so the number of small panes that cover it is 3 × 3 times as big.'
          },
          {
            id: 'y',
            text: '3 × 3 = 9.',
            note: 'That is true, and it is the working of this step, but it does not say why there are two 3s in it.'
          },
          {
            id: 'z',
            text: 'The larger pane is 120 cm wide.',
            note: 'That is true, but it does not say why there are two 3s in the working.'
          }
        ],
        answer: 'x'
      },
      reason: [
        'Cover the large pane with panes the size of the small one. Along its width it takes 3, and along its height it takes 3, so it takes 3 × 3 = 9 small panes. The large pane holds 9 times the glass of the small pane, though it is only 3 times as wide.',
        'The same reasoning gave 2 × 2 × 2 for the cubes, with a third direction. Here there are only two directions in a surface, so there are two 3s in the product.'
      ]
    }
  }
]);
