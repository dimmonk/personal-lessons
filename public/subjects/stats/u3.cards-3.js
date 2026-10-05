// Statistical Claims, Unit Three, part two (first half): the third name, a known list asked and many not replying, its look-alikes with
// the second name and with the claim that holds, and the wrong idea that a bigger count fixes a figure.

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
      'This is not the same as the poll on a website. Here nobody chose themselves into the survey: the library picked everyone on its list. If all 2,400 had answered, the figure would be a fair picture of the members. What went wrong happened afterwards. Most of them did not answer, and nothing was done about it.',
      'Why that matters: the people who mail a form back are not a typical selection of the list. They are likelier to care. A person who wants Sunday opening is likelier to fill the form in and post it than a person who does not mind either way.',
      'The silence cannot be read as agreement. 300 out of 336 is about 89 in every 100. But the list has 2,400 names. If all 2,064 who did not reply would have said no, the share of the list saying yes is 300 out of 2,400, which is 12.5 in every 100, one in eight. If all of them would have said yes, it is 300 plus 2,064, which is 2,364 out of 2,400, or 98.5 in every 100. Between those lies everything from one in eight to nearly all, and the figure in the announcement is only one point in that range.',
      'A low number of replies is not the whole of this. What decides it is that many did not reply, and that nothing was done to hear from them. A list of 2,400 followed up with calls until 2,000 had answered would not be this name.'
    ],
    feature: { step: 'A1', option: 'replied' },
    name: 'The name for this is {o:nonresp}. "Non-response" means not responding, and the "bias" is the lean that comes from the ones who did not respond. It is different from the lean that comes from who was asked, because here everyone was asked.' },

  { id: 'again-nonresp', kind: 'again', outcome: 'nonresp',
    link: 'The library survey gave you what to point to: {needs:nonresp}. Here is a second case, in a workplace.',
    first: 'cn-library', second: 'cn-union', step: 'A1',
    instruction: 'Find what the two cases share. Ignore the story (a library, a union). Look at one thing only: how many on the list answered, and what was done about the rest.',
    prompt: { kind: 'phrase', answer: 'Nobody phoned or visited the 510 who did not answer' },
    shared: [
      'In both cases a known list was asked by name: 2,400 library members, 600 union members. In both, most did not answer: only 14 in every 100 replied to the library, and only 90 of 600, which is 15 in every 100, replied to the union. In both, nothing was done to hear from the silent ones, and the announcement speaks for the whole list.',
      'In the union case the silent ones are 510 of 600. If they would all have been against a strike, the share of members for it is 81 out of 600, which is 13.5 in every 100. If they would all have been for it, it is 81 plus 510, which is 591 out of 600, or 98.5 in every 100. The two stories share nothing else, so this is not about libraries or about strikes. It holds wherever a known list was asked, many did not reply, and the replies are read as the whole list. That is what {o:nonresp} names.'
    ] },

  { id: 'portrait-nonresp', kind: 'portrait', outcome: 'nonresp',
    link: 'What you point to is a list that was all asked, with many not replying. Here is the rest of the picture of {o:nonresp}.',
    typical: [
      'There is a known list: every member, every patient, every household, every graduate. Everyone on it was asked, by name or by address.',
      'Only some replied. The case usually says how many were asked and how many replied, or gives enough to work it out: 90 ballots back from 600 members.',
      'Nothing was done about the silence: no reminder, no phone call, no knock on the door.',
      'The ones who reply are not a typical selection of the list. They tend to be the ones with something to say, or more time, or more at stake. The ones who did not reply may feel differently, or may not care.',
      'The claim speaks for the whole list ("our members", "our tenants") when only the repliers spoke.',
      'The share who replied is often missing from the headline. You have to look for the number sent and the number returned.'
    ],
    not: [
      'A low number of replies is not the name on its own. Two things turn it into this name: many of those asked did not answer and nothing was done to hear from them, and the replies are read as true of the whole list.',
      'If the people who ran the survey follow up until most have answered, the figure is a fair picture of the list, however few replied the first time. And if the claim speaks only for the ones who replied ("of the 336 who answered, 300 said yes"), nothing is claimed that the figure cannot show.'
    ],
    wild: ['"We sent it to everyone, and 90% of those who replied said..."', '"Our members have spoken."', '"Of those who returned the form..."', '"A clear majority of our tenants..."'],
    self: 'In your own life it is the satisfaction form you get after a purchase: you answered if you were delighted or furious, and the company counts the replies as if they were everyone’s.',
    ask: '"How many were asked, how many replied, and what was done about the rest?" If most did not reply and nothing was done, the figure is the voice of the ones who replied.',
    act: [
      'Find the two numbers: how many were asked and how many answered. The share who replied is the replies divided by the number asked (336 divided by 2,400 is 14 in every 100).',
      'Work out the range: the figure if none of the silent ones agreed, and if all of them did. If the range is wide, the figure tells you little about the list.',
      'Ask whether anything was done to hear from the silent ones: a reminder, a call, a visit.',
      'Say the figure for the ones who answered, and say what you would need to see: a figure from most of the list.'
    ] },

  { id: 'check-nonresp', kind: 'check', after: 'nonresp',
    case: 'cn-tenants',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied'] } },

  /* ---------- The look-alike with the second name, and the one with the claim that holds ---------- */
  { id: 'look-selfselect-nonresp', kind: 'lookalike', ledger: 'selfselect~nonresp',
    link: 'These two give the same sort of figure: a lot of people with something to say, and the rest silent. This card shows what separates them.',
    cases: ['cn-homework-mailed', 'cn-homework-link'],
    instruction: 'Both cases are about the same school, the same question and the same figure: 240 answers, 204 of them yes. Compare one thing: was everyone on a known list asked by name, or could anyone who saw the call answer?',
    prompt: { kind: 'which', option: 'A1.replied', answer: 'cn-homework-mailed' },
    difference: [
      'In Case A the school emailed each of its 1,200 families by name. 240 replied, and the school did nothing to hear from the other 960. Everyone was asked, and most did not answer. The answer to the question after the first, {q:A1}, is {a:A1.replied}, and the case is {o:nonresp}.',
      'In Case B the school put a link in its newsletter and on its website. Nobody was asked by name, and anyone who saw the link could answer. 240 did. The answer is {a:A1.chose}, and the case is {o:selfselect}.',
      'The figure is the same, and the problem is the same sort of problem, one-sided answers. What differs is whether anyone was asked. In Case A the silent 960 were asked and did not answer, so you can name them, and you could ring them. In Case B nobody was asked, so there is no list of the silent ones.'
    ] },

  { id: 'look-nonresp-samp', kind: 'lookalike', ledger: 'nonresp~samp_ok',
    link: 'A figure from replies to a list can also hold, when most of the list has answered. The same list and the same questionnaire can be reported both ways.',
    cases: ['cn-pool-mailed', 'cn-pool-followed'],
    instruction: 'Both cases are about the same swimming pool, the same list of 1,500 households and the same share, 72 in every 100, saying yes. Compare one thing: how many of the list answered, and what was done about the ones who did not.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'cn-pool-followed' },
    difference: [
      'In Case A the pool mailed the questionnaire and 150 of the 1,500 replied, which is 10 in every 100. It did nothing to reach the other 1,350. The 108 who said yes are 72 in every 100 of the 150, but they are 7 in every 100 of the list. The answer to the first question is {a:S1.counted}, and the question after it, {q:A1}, gets the answer {a:A1.replied}.',
      'In Case B the pool asked the same list, then rang every household that had not replied, and in the end 1,350 of the 1,500 gave an answer, which is 90 in every 100. 972 said yes, which is 72 in every 100 of the 1,350. Nine in ten of the list are in the figure, and the claim speaks only for the list. The answer to the first question is {a:S1.holds}, and the question after it, {q:H1}, gets the answer {a:H1.group}.',
      'The share is the same in both, 72 in every 100. What separates them is how much of the list is in it. A figure from 150 of 1,500 and a figure from 1,350 of 1,500 can look exactly alike in a notice on a wall.'
    ] },

  /* ---------- A wrong idea: a bigger count fixes it ---------- */
  { id: 'refute-bigger', kind: 'refute', about: 'selfselect',
    h: 'A wrong idea: "A hundred thousand people voted, so it can’t be wrong"',
    link: 'The last cards had figures that came from the people who answered, and some of those counts were big. People often take the size of the count as the answer to whether a figure can be trusted, and it is not.',
    idea: '"A hundred thousand people voted in our poll. That is far too many to be wrong."',
    verdict: 'This is wrong.',
    right: [
      'How many answered tells you how exact the figure is for the people who answered. It says nothing about whether they are a fair picture of everyone else. A big count of the wrong people is a very exact figure about the wrong people.',
      'Here is the arithmetic. Say a town has 400,000 adults, and 100,000 of them voted in an online vote about rebuilding the stadium. 80,000 said yes. Those who voted chose themselves, and 300,000 did not vote. If all 300,000 of them would have said no, the share of the whole town saying yes is 80,000 out of 400,000, which is 20 in every 100. If all of them would have said yes, it is 80,000 plus 300,000, which is 380,000 out of 400,000, or 95 in every 100. A hundred thousand votes leave the answer for the town anywhere between 20 and 95 in every 100.',
      'Now take 400 households picked by lottery from the town’s full list, with 360 of the 400 answering and the other 40 followed up. 400 is one thousandth of the town. It is still a far better picture of the town than the 100,000, because nobody who answered is in it for a reason that has to do with the question. What puts a figure right is how the people got into it. A bigger count of the same kind of people is only more of the same.'
    ],
    testedBy: ['cd-claim-poll'] }
]);
