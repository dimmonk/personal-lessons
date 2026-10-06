// Statistical Claims, Unit Three, part one (third piece): the third name, a known list asked and many not replying, and its
// look-alikes with the second name and with the claim that holds.

FC.cards('stats', 'u3', [

  /* ---------- Non-response bias ---------- */
  { id: 'meet-nonresp', kind: 'meet', outcome: 'nonresp',
    link: 'In the first two ways, the people who are missing were not there to ask, or nobody asked them. In the third, everyone was asked by name, and many did not answer.',
    case: 'cn-library', mark: 'A1',
    strip: [
      'There is a figure: 300 of the 336 who sent the questionnaire back said yes, about nine in ten.',
      'Everyone on a known list was asked: all 2,400 people with a library card were sent the questionnaire.',
      'Most did not reply: 336 of 2,400, which is 14 in every 100.',
      'Nothing was done to hear from the other 2,064.',
      'The announcement speaks for all the members.'
    ],
    explain: [
      'This is not the same as the poll on a website. Here nobody chose themselves in: the library picked everyone on its list. What went wrong happened afterwards. Most did not answer, and nothing was done about it.',
      'The people who mail a form back are not a typical selection of the list. They are likelier to care, and the silence cannot be read as agreement. If all 2,064 who did not reply would have said no, only 300 of 2,400 members, one in eight, are for it. If all of them would have said yes, nearly all are. The figure in the announcement is one point in that wide range.',
      'Few replies are not the whole of this. What decides it is that many did not reply and nothing was done to hear from them. A list followed up with calls until 2,000 had answered would not be this name.'
    ],
    feature: { step: 'A1', option: 'replied' },
    name: 'The name for this is {o:nonresp}. "Non-response" means not responding, and the "bias" is the lean that comes from the ones who did not respond.',
    act: 'Find the two numbers: how many were asked and how many answered. Ask what was done to hear from the rest. Say the figure for the ones who answered, and say what you would need to see: a figure from most of the list.' },

  { id: 'check-nonresp', kind: 'check', after: 'nonresp',
    case: 'cn-tenants',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied'] } },

  /* ---------- The look-alike with the second name, and the one with the claim that holds ---------- */
  { id: 'look-selfselect-nonresp', kind: 'lookalike', ledger: 'selfselect~nonresp',
    link: 'These two give the same sort of figure: a lot of people with something to say, and the rest silent.',
    cases: ['cn-homework-mailed', 'cn-homework-link'],
    instruction: 'Both cases are about the same school, the same question and the same figure: 240 answers, 204 of them yes. Compare one thing: was everyone on a known list asked by name, or could anyone who saw the call answer?',
    prompt: { kind: 'which', option: 'A1.replied', answer: 'cn-homework-mailed' },
    difference: [
      'In Case A the school emailed each of its 1,200 families by name. 240 replied, and the school did nothing to hear from the other 960. Everyone was asked, and most did not answer. The question after the first, {q:A1}, gets the answer {a:A1.replied}.',
      'In Case B the school put a link in its newsletter and on its website. Nobody was asked by name, and anyone who saw the link could answer. 240 did. The answer is {a:A1.chose}.',
      'In Case A the silent 960 were asked and did not answer, so you can name them and ring them. In Case B nobody was asked, so there is no list of the silent ones.'
    ] },

  { id: 'look-nonresp-samp', kind: 'lookalike', ledger: 'nonresp~samp_ok',
    link: 'A figure from replies to a list can also hold, when most of the list has answered. The same list and the same questionnaire can be reported both ways.',
    cases: ['cn-pool-mailed', 'cn-pool-followed'],
    instruction: 'Both cases are about the same swimming pool, the same list of 1,500 households and the same share, 72 in every 100, saying yes. Compare one thing: how many of the list answered, and what was done about the ones who did not.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-pool-followed' },
    difference: [
      'In Case A the pool mailed the questionnaire and 150 of the 1,500 replied, which is 10 in every 100. It did nothing to reach the other 1,350. The 108 who said yes are 72 in every 100 of the 150, but only 7 in every 100 of the list. The question after the first, {q:A1}, gets the answer {a:A1.replied}.',
      'In Case B the pool asked the same list, then rang every household that had not replied, and in the end 1,350 of the 1,500 gave an answer, which is 90 in every 100. Nine in ten of the list are in the figure, and the claim speaks only for the list. The answer to the first question is {a:S1.holds}.',
      'The share is the same in both. What separates them is how much of the list is in it.'
    ] }
]);
