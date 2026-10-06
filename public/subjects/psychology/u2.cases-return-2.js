// Psychology, Unit Two: fresh cases kept back for later days (second file: two names, one case each).

FC.cases('psychology', 'u2', [
  /* ---------- Motivated reasoning ---------- */
  { id: 'ret-grant', use: 'return', tier: 'varied', setting: 'community', topic: 'a grant committee', also: ['scrutiny'],
    text: "Before she had read any of the three applications, the committee chair told a colleague that the grant would go to the theater group. She then scored the applications, giving the theater group full points under 'community impact', a heading the other two were not scored on.",
    outcome: 'motivated', route: { D1: ['reasoning'], R1: ['fixed'] },
    cues: { D1: 'She then scored the applications', R1: 'Before she had read any of the three applications' },
    reason: { D1: 'One person is reaching a choice of her own and backing it up: {cue:D1}.',
              R1: 'The marking was the search that was supposed to settle it, and the answer came first: {cue:R1}. The marking could only supply support.' },
    not: { outcome: 'confbias', why: 'The marking is harder on two of the three, which would fit {o:confbias}. But she set out on a search, and the answer was chosen before it began. When a case shows both, that decides it.' } },

  /* ---------- Fair reasoning ---------- */
  { id: 'ret-gearbox', use: 'return', tier: 'varied', setting: 'money', topic: 'an old car',
    text: "Jen has spent $900 this year keeping her old car on the road. The repair shop says it now needs a $1,200 transmission. She looks up what the car would sell for with the repair done: about $1,500. 'So I'd be paying twelve hundred to own a fifteen-hundred-dollar car that keeps breaking,' she says. 'No.' She sells it for parts.",
    outcome: 'fair', route: { D1: ['reasoning'], R1: ['follows'] },
    cues: { D1: 'She sells it for parts', R1: "So I'd be paying twelve hundred to own a fifteen-hundred-dollar car that keeps breaking" },
    reason: { D1: 'One person is reaching a choice of her own: {cue:D1}, and the case shows how she got there.',
              R1: 'Jen looks at what the next step would cost and what it would bring, and her plan goes where that points: {cue:R1}. The $900 already spent is not given as a reason for anything.' },
    not: { outcome: 'sunkcost', why: '{o:sunkcost} would have Jen saying she cannot give up after $900. Her reason is about the repair still to pay for, not the money already spent.' } }
]);
