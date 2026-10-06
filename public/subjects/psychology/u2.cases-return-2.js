// Psychology, Unit Two: fresh cases kept back for later days (second file: two names, three cases each).

FC.cases('psychology', 'u2', [

  /* ---------- Motivated reasoning ---------- */
  { id: 'ret-grant', use: 'return', tier: 'varied', setting: 'community', topic: 'a grant committee', also: ['scrutiny'],
    text: "Before she had read any of the three applications, the committee chair told a colleague that the grant would go to the theater group. She then scored the applications, giving the theater group full points under 'community impact', a heading the other two were not scored on.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'She then scored the applications', R1: 'Before she had read any of the three applications' },
    reason: { D1: 'One person is reaching a choice of her own and backing it up: {cue:D1}.',
              R1: 'The marking was the search that was supposed to settle it, and the answer came first: {cue:R1}. The marking could only supply support.' },
    not: { outcome: 'confbias', why: 'The marking is harder on two of the three, which would fit {o:confbias}. But she set out on a search, and the answer was chosen before it began. When a case shows both, that decides it.' } },

  { id: 'ret-school', use: 'return', tier: 'varied', setting: 'learning', topic: 'choosing a school',
    text: "Mina had her heart set on Oakfield for her son from the day she walked past its playing fields. In the fall she 'did the rounds': she visited Oakfield twice and the other two schools for twenty minutes each, and came home with a list of what was wrong with them. 'We looked at all three properly,' she told her mother.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'We looked at all three properly', R1: 'had her heart set on Oakfield for her son from the day she walked past its playing fields' },
    reason: { D1: 'One person is telling how she reached a choice of her own: {cue:D1}.',
              R1: 'Mina set out on a search, the school visits, that was supposed to settle the choice. The answer came before it: she {cue:R1}. Twenty minutes in each of the others could only supply support.' },
    not: { outcome: 'fair', why: '{o:fair} would need visits that could have changed her mind. The choice was made before the first one.' } },

  { id: 'ret-panel', use: 'return', tier: 'varied', setting: 'work', topic: 'a software purchase',
    text: "The head of finance told the supplier at a conference in May that his firm would be buying their software. In June he set up a 'selection panel' and wrote its scoring sheet himself. Eight of the ten headings were features only that supplier offers.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: "he set up a 'selection panel' and wrote its scoring sheet himself", R1: 'told the supplier at a conference in May that his firm would be buying their software' },
    reason: { D1: 'One person is reaching a choice of his own and backing it up: {cue:D1}.',
              R1: 'The selection panel was the search that was supposed to settle it, and the answer came a month earlier: he {cue:R1}. A scoring sheet built around one supplier could only supply support.' },
    not: { outcome: 'confbias', why: 'No evidence against a view turns up here and gets a harder test. He chose first, and then built the search around the choice.' } },

  /* ---------- Fair reasoning: a view that changes, a view that is kept, and a choice about something already spent ---------- */
  { id: 'ret-bypass', use: 'return', tier: 'varied', setting: 'community', topic: 'a bypass',
    text: "Tess had told everyone that the new bypass would be a disaster for the stores in the town center. A year after it opened she walked the main street and counted: two stores had closed and five had opened. 'I got that wrong,' she said at the next residents' meeting.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'Tess had told everyone that the new bypass would be a disaster', R1: ['she walked the main street and counted', 'I got that wrong'] },
    reason: { D1: 'One person is changing a view of her own: {cue:D1}, and the case shows what she did about it.',
              R1: 'Tess went and got the facts herself, and her view went where they pointed: {cue:R1}. The count went against what she had told everyone, and she gave it no harder test for that.' },
    not: { outcome: 'dissonance', why: 'What came between her old view and her new one was a count of stores, not something she had done.' } },

  { id: 'ret-rota', use: 'return', tier: 'varied', setting: 'work', topic: 'a shift schedule',
    text: "Abe has always run the warehouse on fixed shifts. His deputy says rotating shifts would cut overtime, so Abe agrees to try them on one team for two months and to compare the overtime bills. The rotating team's bill comes out slightly higher. 'Then we stay as we are,' Abe says. 'It was worth finding out.'",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'Abe has always run the warehouse on fixed shifts', R1: 'agrees to try them on one team for two months and to compare the overtime bills' },
    reason: { D1: 'One person is reaching a choice of his own, starting from a view of his own: {cue:D1}.',
              R1: 'Abe’s view was questioned, and he set up a test that could have gone against him: he {cue:R1}. The bills supported his view, so it stayed. It went where the facts pointed.' },
    not: { outcome: 'confbias', why: 'He kept his view, which is what {o:confbias} can look like. But the evidence against it got no harder test. He agreed to the comparison and would have had to live with either result.' } },

  { id: 'ret-gearbox', use: 'return', tier: 'varied', setting: 'money', topic: 'an old car',
    text: "Jen has spent $900 this year keeping her old car on the road. The repair shop says it now needs a $1,200 transmission. She looks up what the car would sell for with the repair done: about $1,500. 'So I'd be paying twelve hundred to own a fifteen-hundred-dollar car that keeps breaking,' she says. 'No.' She sells it for parts.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'She sells it for parts', R1: "So I'd be paying twelve hundred to own a fifteen-hundred-dollar car that keeps breaking" },
    reason: { D1: 'One person is reaching a choice of her own: {cue:D1}, and the case shows how she got there.',
              R1: 'Jen looks at what the next step would cost and what it would bring, and her plan goes where that points: {cue:R1}. The $900 already spent is not given as a reason for anything.' },
    not: { outcome: 'sunkcost', why: '{o:sunkcost} would have Jen saying she cannot give up after $900. Her reason is about the repair still to pay for, not the money already spent.' } }
]);
