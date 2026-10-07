// Statistical Claims, Unit Three, part one (third piece): the third name, a known list asked and many not replying, and its
// look-alikes with the second name and with the claim that holds.

FC.cards('stats', 'u3', [

  /* ---------- Non-response bias ---------- */
  { id: 'meet-nonresp', kind: 'meet', outcome: 'nonresp',
    link: 'Third: everyone on a list was asked by name, and many did not answer.',
    case: 'cn-library', mark: 'A1',
    explain: [
      'This is different from the poll on a website. Here nobody chose themselves in: the library asked everyone on its list. What went wrong came afterward. Most did not answer, and nothing was done about it.',
      'People who mail a form back are not a typical slice of the list. They are likelier to care, and silence is not agreement. If all 2,064 silent members would have said no, only 300 of 2,400, one in eight, want Sunday opening. If all would have said yes, nearly everyone does. The announcement picks one point in that wide range.'
    ],
    spot: [
      { do: 'Find who was asked: all 2,400 people with a library card.', why: 'Everyone on a known list was asked, so nobody chose themselves in.' },
      { do: 'Count how many answered: 336 of 2,400.', why: 'That is only 14 in every 100.' },
      { do: 'Check what was done about the rest: nothing, for the other 2,064.', why: 'If the library had phoned them until most answered, this would not be a problem.' },
      { do: 'Check who the claim speaks for: “our members”, all of them.', why: 'The replies are being read as the whole list.' }
    ],
    feature: { step: 'A1', option: 'replied' },
    name: 'This is {o:nonresp}. “Non-response” means not responding: the figure leans toward the few who wrote back.',
    act: [
      { do: 'Find the two numbers: how many were asked, and how many answered.', why: 'The gap is how much of the list is missing.' },
      { do: 'Ask what was done to hear from the rest.', why: 'A follow-up that reaches most of the list changes the answer.' },
      { do: 'Say the figure for the ones who answered, and look for one from most of the list.', why: 'Only that can speak for everyone.' }
    ] },

  { id: 'check-nonresp', kind: 'check', after: 'nonresp',
    case: 'cn-tenants',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied'] } },

  /* ---------- The look-alike with the second name, and the one with the claim that holds ---------- */
  { id: 'look-selfselect-nonresp', kind: 'lookalike', ledger: 'selfselect~nonresp',
    link: 'These two look alike: a lot of people had their say, and the rest stayed silent.',
    cases: ['cn-homework-mailed', 'cn-homework-link'],
    instruction: 'Both stories are about the same school, the same question and the same figure: 240 answers, 204 of them yes. Compare one thing: was everyone on a known list asked by name, or could anyone who saw the call answer?',
    prompt: { kind: 'which', option: 'A1.replied', answer: 'cn-homework-mailed' },
    difference: [
      'In Story A the school emailed each of its 1,200 families by name. 240 replied, and the school did nothing about the other 960. Everyone was asked and most did not answer. That is {o:nonresp}.',
      'In Story B the school put a link in its newsletter and on its website. Nobody was asked by name, and anyone who saw the link could answer. 240 did. That is {o:selfselect}.',
      'In Story A the silent 960 were asked, so you can name them and ring them. In Story B nobody was asked, so there is no list of the silent ones.'
    ] },

  { id: 'look-nonresp-samp', kind: 'lookalike', ledger: 'nonresp~samp_ok',
    link: 'A figure from replies to a list can also hold, when most of the list has answered. The same list can be reported both ways.',
    cases: ['cn-pool-mailed', 'cn-pool-followed'],
    instruction: 'Both stories are about the same swimming pool, the same list of 1,500 households and the same share, 72 in every 100, saying yes. Compare one thing: how many of the list answered, and what was done about the ones who did not.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-pool-followed' },
    difference: [
      'In Story A the pool mailed the questionnaire and 150 of the 1,500 replied, which is 10 in every 100. It did nothing about the other 1,350. The 108 yes answers are 72 in every 100 of the 150, but only 7 in every 100 of the list. That is {o:nonresp}.',
      'In Story B the pool asked the same list, then rang every household that had not replied, and in the end 1,350 of the 1,500 answered, which is 90 in every 100. Nine in ten of the list are in the figure, and the claim speaks only for the list. That is {o:samp_ok}.',
      'The share is the same in both. What separates them is how much of the list is in it.'
    ] }
]);
